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

### Unary tests

```ruby
# without context
FEELIN.unary_test('1', 1) # true

# with context
FEELIN.unary_test('[1..end]', 1, { 'end' => 10 }) # true
```

### Custom functions

```ruby
FEELIN.add_function('rates', proc { [10, 20] })
FEELIN.evaluate('every rate in rates() satisfies rate < 10') # false
```

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