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