require "mini_racer"
require "json"

module FEELIN
  # Pre-built single-file IIFE bundle (feelin + its dependencies), produced by
  # `npm run build` in lib/feelin/js. It exposes the feelin API on the global
  # `feel`. feelin is distributed as an ES module, so it is bundled ahead of time
  # rather than assembled at load time.
  BUNDLE_PATH = File.expand_path("feelin/js/dist/feelin.js", __dir__)

  @@functions = Set.new

  # NOTE: the context is serialized to JSON and interpolated into the eval, rather
  # than passed as a native Ruby object via MiniRacer#call. That was measured to be
  # ~15-20% FASTER: JSON.generate (C) plus V8's highly-optimized parsing beats
  # mini_racer's element-by-element Ruby->V8 marshalling, and it lets custom
  # functions be injected straight into the context (no per-call merge).
  def self.evaluate(expression, context = nil)
    context_json = serialize_context(context)

    unwrap(@@context.eval("feel.evaluate(#{JSON.generate(expression)}, #{context_json})"))
  end

  def self.unary_test(expression, value, context = {})
    context_json = serialize_context({ **context, '?' => value })

    unwrap(@@context.eval("feel.unaryTest(#{JSON.generate(expression)}, #{context_json})"))
  end

  def self.add_function(name, proc)
    @@functions.add(name)
    @@context.attach(name, proc)
  end

  private

  # feelin (>= 7) returns an EvaluationResult `{ value, warnings }`; callers expect
  # the bare value.
  def self.unwrap(result)
    result.is_a?(Hash) && result.key?("warnings") ? result["value"] : result
  end

  # Builds the JS evaluation context. When custom functions are registered they
  # must be injected into every context as forwarders to their attached globals.
  # Each function is emitted as a QUOTED key forwarding to globalThis[name] so
  # that names containing spaces (e.g. "string join") are valid JS; an empty
  # context is coerced to nil to avoid producing an invalid "{,...}" literal. The
  # `(...args)` forwarder is deliberate: feelin reads a function's source to learn
  # its parameters, so a bare reference to the (native) attached global would be
  # seen as taking no arguments.
  def self.serialize_context(context)
    return JSON.generate(context) if @@functions.empty?

    context = nil if context.respond_to?(:empty?) && context.empty?
    functions_json = @@functions.map do |name|
      %("#{name}":function(...args){return globalThis["#{name}"](...args)})
    end.join(",")

    context.nil? ? "{#{functions_json}}" : "#{JSON.generate(context)[0...-1]},#{functions_json}}"
  end

  @@context = MiniRacer::Context.new
  @@context.eval(File.read(BUNDLE_PATH))
end
