# Ruby feelin

This gem uses embed [V8 JavaScript engine](https://v8.dev/) and [feelin](https://github.com/nikku/feelin) JavaScript library to parse and evaluate [DMN](https://www.omg.org/spec/DMN) FEEL expressions.
Performance of this approach for executing JS in Ruby is comparable with V8 native performance.

## Install

```ruby
gem 'feelin'
```

## Usage

### Evaluate

```ruby
# without context
FEELIN.evaluate('for a in [1, 2, 3] return a * 2') # [ 2, 4, 6 ]

# with context
FEELIN.evaluate("Mike's daughter.name", { 'Mike\'s daughter.name' => 'Lisa' }) # Lisa
```

A result is JSON-compatible. A date, a time and a duration come back as ISO 8601 strings, in the form
FEEL's own `string()` gives them:

```ruby
FEELIN.evaluate('date("2020-01-02") + duration("P1D")') # "2020-01-03"
FEELIN.evaluate('date and time("2020-01-02T03:04:05Z")') # "2020-01-02T03:04:05Z"
FEELIN.evaluate('time("10:00:00+03:00")')                # "10:00:00+03:00"
FEELIN.evaluate('duration("P1DT2H")')                    # "P1DT2H"
```

### Unary tests

```ruby
# without context
FEELIN.unary_test('1', 1) # true

# with context
FEELIN.unary_test('[1..end]', 1, { 'end' => 10 }) # true
```

### Syntax tree

`parse` and `parse_unary_tests` answer the syntax tree of an expression without evaluating it — for
translating FEEL into something else (SQL, for one) or inspecting what an expression refers to.

```ruby
FEELIN.parse('price > 10')
# { "type" => "Expression", "from" => 0, "to" => 10, "text" => "price > 10", "children" => [
#   { "type" => "Comparison", "from" => 0, "to" => 10, "text" => "price > 10", "children" => [
#     { "type" => "VariableName", "from" => 0, "to" => 5, "text" => "price", "children" => [
#       { "type" => "Identifier", "from" => 0, "to" => 5, "text" => "price", "children" => [] } ] },
#     { "type" => "CompareOp", "from" => 6, "to" => 7, "text" => ">", "children" => [] },
#     { "type" => "NumericLiteral", "from" => 8, "to" => 10, "text" => "10", "children" => [] } ] } ] }

FEELIN.parse_unary_tests('[1..end], > 5')
```

The tree is the one feelin's parser ([lezer-feel](https://github.com/nikku/lezer-feel)) builds, node for
node: `type` is the grammar's name of the node, and keywords and punctuation (`if`, `(`, `,`) are nodes as
well. `from` / `to` are the span in the expression, counted in UTF-16 code units as JavaScript counts —
for text outside the Basic Multilingual Plane that differs from Ruby's character index, so take `text`
rather than slicing the expression.

The optional second argument is a context, of which only the names matter: it is what lets a name with
spaces in it be read as one name.

```ruby
FEELIN.parse("Mike's daughter.name + 1", { "Mike's daughter.name" => nil })
```

An expression that does not parse raises `MiniRacer::RuntimeError`, with the same message `evaluate` gives.

### Custom functions

```ruby
FEELIN.add_function('rates', proc { [10, 20] })
FEELIN.evaluate('every rate in rates() satisfies rate < 10') # false
```

### A context of one's own

The methods above work on one shared V8 context, which has no limits. `FEELIN::Context` is a separate
one with the same methods — for an expression that is not trusted to end or to stay small, or for custom
functions the rest of the process should not see.

```ruby
context = FEELIN::Context.new(timeout: 1_000, max_memory: 64_000_000) # ms, bytes; both optional

context.add_function('rate', proc { 0.2 })
context.evaluate('price * rate()', { 'price' => 100 }) # 20
context.parse('price * rate()')

context.dispose
```

Past its timeout an evaluation raises `MiniRacer::ScriptTerminatedError`, past its memory
`MiniRacer::V8OutOfMemoryError`. Contexts are created from one snapshot of the bundle, so a new one does
not load feelin again.

## Development

The gem embeds the [feelin](https://github.com/nikku/feelin) JavaScript library, pre-bundled into a single file that is loaded into the V8 context at runtime. The JavaScript sources live in `lib/feelin/js`.

### Updating the JavaScript dependencies

```bash
cd lib/feelin/js
npm install                  # install the pinned versions
npm install feelin@<version> # bump feelin to a specific version
```

### Building the bundle

`feelin` is distributed as an ES module, so it is bundled ahead of time with [esbuild](https://esbuild.github.io/) into `lib/feelin/js/dist/feelin.js` — an IIFE that exposes the feelin API on the global `feel`. The entry point is `lib/feelin/js/entry.js`.

```bash
cd lib/feelin/js
npm run build
```

Commit the regenerated `dist/feelin.js` together with the updated `package.json` / `package-lock.json`.

### Running the tests

```bash
bundle exec rspec
```

## Versioning policy

Because this library is a wrapper - it is released with the same major/minor version numbers as the underlying feelin library