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