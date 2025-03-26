require "mini_racer"

module FEELIN
  @@functions = Set.new

  def self.evaluate(expression, context = nil)
    context_json = serialize_context(context)

    @@context.eval("feel.evaluate(#{JSON.generate(expression)}, #{context_json})")
  end

  def self.unary_test(expression, value, context = {})
    context_json = serialize_context({ **context, '?' => value })

    @@context.eval("feel.unaryTest(#{JSON.generate(expression)}, #{context_json})")
  end

  def self.add_function(name, proc)
    @@functions.add(name)
    @@context.attach(name, proc)
  end

  private

  def self.serialize_context(context)
    if @@functions.any?
      functions_json = @@functions.map do |name|
        "#{name}(...args){return #{name}(...args)}"
      end.join(',')

      if context.nil?
        "{#{functions_json}}"
      else
        "#{JSON.generate(context)[0...-1]},#{functions_json}}"
      end
    else
      JSON.generate(context)
    end
  end

  def self.process_module(source)
    file_map = {
      'feelin' => 'dist/index.cjs',
      'luxon' => 'build/node/luxon.js',
      'lezer-feel' => 'dist/index.cjs',
      '@lezer/lr' => 'dist/index.cjs',
      'min-dash' => 'dist/index.cjs',
      '@lezer/highlight' => 'dist/index.cjs',
      '@lezer/common' => 'dist/index.cjs',
    }

    source.gsub(/require\('(.+?)'\)/) do
      name = $1
      data = process_module(File.read("#{File.dirname(__FILE__)}/feelin/js/node_modules/#{name}/#{file_map[name]}"))

      "(function() { const exports = {}; #{data} return exports })()"
    end
  end

  source = process_module("const feel = require('feelin')")
  @@context = MiniRacer::Context.new
  @@context.eval(source)
end
