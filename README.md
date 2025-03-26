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

## Versioning policy

Because this library is a wrapper - it is released with the same major/minor version numbers as the underlying feelin library