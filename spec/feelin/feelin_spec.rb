RSpec.describe FEELIN do
  describe "#evaluate" do
    context "without context" do
      it "should not fail" do
        expect(FEELIN.evaluate('for a in [1, 2, 3] return a * 2')).to eq [ 2, 4, 6 ]
      end
    end

    context "with context" do
      it "should not fail" do
        expect(FEELIN.evaluate("Mike's daughter.name", {
          'Mike\'s daughter.name' => 'Lisa'
        })).to eq 'Lisa'
      end
    end

    context "with custom functions" do
      it "should not fail" do
        FEELIN.add_function('rates', proc { [10, 20] })
        expect(FEELIN.evaluate('every rate in rates() satisfies rate < 10')).to eq false
      end
    end

    context "with a custom function and an empty context" do
      it "does not build an invalid context literal" do
        FEELIN.add_function('answer', proc { 42 })
        expect(FEELIN.evaluate('answer()', {})).to eq 42
      end
    end

    context "with a custom function whose name contains spaces" do
      it "forwards to the attached global" do
        FEELIN.add_function('string join two', proc { |a, b| "#{a}#{b}" })
        expect(FEELIN.evaluate('string join two("a", "b")')).to eq 'ab'
      end
    end
  end

  describe "temporal results" do
    it "answers a date, a time and a duration in their ISO 8601 form" do
      expect(FEELIN.evaluate('date("2020-01-02")')).to eq '2020-01-02'
      expect(FEELIN.evaluate('time("10:00:00+03:00")')).to eq '10:00:00+03:00'
      expect(FEELIN.evaluate('date and time("2020-01-02T03:04:05Z")')).to eq '2020-01-02T03:04:05Z'
      expect(FEELIN.evaluate('duration("P1DT2H")')).to eq 'P1DT2H'
    end

    it "does so inside a list and a context too" do
      expect(FEELIN.evaluate('{ on: date(day) + duration("P1D"), all: [ @"2020-01-02" ] }', { 'day' => '2020-05-06' }))
        .to eq('on' => '2020-05-07', 'all' => [ '2020-01-02' ])
    end

    it "answers null for what has no value" do
      expect(FEELIN.evaluate('missing')).to be_nil
      expect(FEELIN.evaluate('{ a: missing }')).to eq('a' => nil)
    end
  end

  describe FEELIN::Context do
    it "evaluates in a context of its own, with its own functions" do
      context = FEELIN::Context.new
      context.add_function('only here', proc { 7 })

      expect(context.evaluate('only here() + n', { 'n' => 1 })).to eq 8
      expect(FEELIN.evaluate('only here()')).to be_nil
    ensure
      context&.dispose
    end

    it "stops an expression that runs past its timeout" do
      context = FEELIN::Context.new(timeout: 50)

      expect { context.evaluate('count(for a in 1..3000, b in 1..3000 return a * b)') }
        .to raise_error(MiniRacer::ScriptTerminatedError)
    ensure
      context&.dispose
    end

    # the context reaches V8 as an argument, not as the text of a script: a script
    # per distinct context is compiled and kept, and ran a limited context out of
    # memory
    it "evaluates over context after context without its memory growing" do
      context = FEELIN::Context.new(max_memory: 8_000_000)

      results = Array.new(10_000) { |index| context.evaluate('"L" + string(old.n)', { 'old' => { 'n' => index } }) }

      expect(results.values_at(0, 9_999)).to eq %w[L0 L9999]
    ensure
      context&.dispose
    end
  end

  describe "syntax errors" do
    it "raises on an expression that does not parse" do
      expect { FEELIN.evaluate('1 +') }.to raise_error(MiniRacer::RuntimeError, /Incomplete <ArithmeticExpression>/)
    end
  end

  describe "#parse" do
    # the types of a tree, nested as the tree is, tokens left out
    def shape(node)
      children = node['children'].reject { |child| child['children'].empty? && child['type'] !~ /\A[A-Z]/ }
      children.empty? ? node['type'] : { node['type'] => children.map { |child| shape(child) } }
    end

    it "answers the syntax tree without evaluating the expression" do
      tree = FEELIN.parse('a.b + 1 > 2')

      expect(shape(tree)).to eq(
        'Expression' => [ {
          'Comparison' => [
            { 'ArithmeticExpression' => [
              { 'PathExpression' => [ { 'VariableName' => [ 'Identifier' ] }, { 'PathName' => [ 'Identifier' ] } ] },
              'ArithOp',
              'NumericLiteral'
            ] },
            'CompareOp',
            'NumericLiteral'
          ]
        } ]
      )
    end

    it "gives every node its span and its text" do
      comparison = FEELIN.parse('a.b + 1 > 2')['children'].first

      expect(comparison.slice('type', 'from', 'to', 'text')).to eq('type' => 'Comparison', 'from' => 0, 'to' => 11, 'text' => 'a.b + 1 > 2')
      expect(comparison['children'].map { |child| child['text'] }).to eq [ 'a.b + 1', '>', '2' ]
    end

    it "reads a name with spaces as one name when the context has it" do
      tree = FEELIN.parse("Mike's daughter.name + 1", { "Mike's daughter.name" => 'Lisa' })
      name = tree['children'].first['children'].first

      expect(name.slice('type', 'text')).to eq('type' => 'VariableName', 'text' => "Mike's daughter.name")
    end

    it "raises on an expression that does not parse, as evaluate does" do
      expect { FEELIN.parse('1 +') }.to raise_error(MiniRacer::RuntimeError, /Incomplete <ArithmeticExpression>/)
      expect { FEELIN.parse('1 + ) 2') }.to raise_error(MiniRacer::RuntimeError, /Unrecognized token/)
    end

    it "reports a syntax error as evaluate reports it" do
      [ '1 +', '{ a: 1', 'if x then', '1 + ) 2', '1 2', '[1, 2' ].each do |expression|
        expected = begin
          FEELIN.evaluate(expression)
        rescue MiniRacer::RuntimeError => e
          e.message
        end

        expect { FEELIN.parse(expression) }.to raise_error(MiniRacer::RuntimeError, expected), expression
      end
    end
  end

  describe "#parse_unary_tests" do
    it "answers the syntax tree of unary tests" do
      tree = FEELIN.parse_unary_tests('[1..end], > 5')
      tests = tree['children'].first['children'].select { |child| child['type'] == 'PositiveUnaryTest' }

      expect(tree['type']).to eq 'UnaryTests'
      expect(tests.map { |test| test['text'] }).to eq [ '[1..end]', '> 5' ]
    end
  end

  describe "#unary_test" do
    context "without context" do
      it "should not fail" do
        expect(FEELIN.unary_test('1', 1)).to eq true
      end
    end

    context "with context" do
      it "should not fail" do
        expect(FEELIN.unary_test('[1..end]', 1, { 'end' => 10 })).to eq true
      end
    end
  end
end