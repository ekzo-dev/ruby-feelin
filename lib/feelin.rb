require "mini_racer"
require "json"

module FEELIN
  # Pre-built single-file IIFE bundle (feelin + its dependencies), produced by
  # `npm run build` in lib/feelin/js. It exposes the feelin API on the global
  # `feel`, and under `feel.json` the functions this wrapper calls. feelin is
  # distributed as an ES module, so it is bundled ahead of time rather than
  # assembled at load time.
  BUNDLE_PATH = File.expand_path("feelin/js/dist/feelin.js", __dir__)

  # What goes wrong inside V8 is raised as one of these, never as a MiniRacer
  # error: the message names the expression, which is also kept in `expression`,
  # and `reason` is what went wrong without it. An exception raised by a custom
  # function is not one of them and passes as it is.
  class Error < StandardError
    attr_reader :expression, :reason

    def initialize(message, expression = nil, reason = message)
      super(message)
      @expression = expression
      @reason = reason
    end
  end

  # the expression does not parse
  class SyntaxError < Error; end

  # the evaluation ran past the context's `timeout`
  class TimeoutError < Error; end

  # the evaluation ran past the context's `max_memory`
  class MemoryError < Error; end

  # A V8 context with feelin loaded. The module-level methods below work on one
  # shared context without limits; a context of one's own is for an expression
  # that is not trusted to end or to stay small — `timeout` (ms) and `max_memory`
  # (bytes) are its limits, and going over one raises TimeoutError or
  # MemoryError — and for custom functions that the shared context should not
  # see.
  #
  # Every context starts from one snapshot of the bundle, so creating one does
  # not load and compile feelin again.
  #
  # The context goes into V8 as a JSON string and the result comes back as one
  # (`feel.json.*` in js/entry.js). That keeps a call a function call with
  # arguments: the data is never written into a script of its own, which V8 would
  # compile and keep for every distinct context. And it is how a date, time or
  # duration arrives as its ISO 8601 string, the form FEEL's `string()` gives
  # it, instead of the internal fields of the object V8 holds.
  class Context
    class << self
      def snapshot
        @snapshot ||= MiniRacer::Snapshot.new(File.read(BUNDLE_PATH))
      end
    end

    def initialize(timeout: nil, max_memory: nil)
      @timeout = timeout
      limits = { timeout: timeout, max_memory: max_memory }.compact
      @context = MiniRacer::Context.new(snapshot: self.class.snapshot, **limits)
    end

    def evaluate(expression, context = nil)
      call("evaluate", expression, context)
    end

    def unary_test(expression, value, context = {})
      call("unaryTest", expression, { **context, '?' => value })
    end

    # The syntax tree of an expression, without evaluating it: nested hashes of
    # `type` (the grammar's node name), `from` / `to` (the span in the expression,
    # counted in UTF-16 code units), `text` (that span) and `children`. Tokens are
    # nodes too. The context only supplies the names of the variables, which is
    # what lets a name with spaces in it be read as one. An expression that does
    # not parse raises SyntaxError, as it does in `evaluate`.
    def parse_expression(expression, context = nil)
      call("parseExpression", expression, context)
    end

    def parse_unary_tests(expression, context = nil)
      call("parseUnaryTests", expression, context)
    end

    def add_function(name, proc)
      @context.attach(name, proc)
      @context.call("feel.json.addFunction", name)
    end

    def dispose
      @context.dispose
    end

    private

    SYNTAX_ERROR = /\AFeelSyntaxError: /

    def call(function, expression, context)
      JSON.parse(@context.call("feel.json.#{function}", expression, context.nil? ? nil : JSON.generate(context)))
    rescue MiniRacer::ScriptTerminatedError
      raise failure(TimeoutError, expression, "took longer than #{@timeout} ms", "")
    rescue MiniRacer::V8OutOfMemoryError
      raise failure(MemoryError, expression, "ran out of memory", "")
    rescue MiniRacer::Error => e
      reason = e.message.lines.first.to_s.strip

      raise failure(SyntaxError, expression, reason.sub(SYNTAX_ERROR, ''), " is not a FEEL expression:") if reason.match?(SYNTAX_ERROR)

      raise failure(Error, expression, reason.sub(/\AError: /, ''), ":")
    end

    def failure(error, expression, reason, link)
      error.new("#{expression.inspect}#{link} #{reason}", expression, reason)
    end
  end

  class << self
    def evaluate(expression, context = nil)
      shared.evaluate(expression, context)
    end

    def unary_test(expression, value, context = {})
      shared.unary_test(expression, value, context)
    end

    def parse_expression(expression, context = nil)
      shared.parse_expression(expression, context)
    end

    def parse_unary_tests(expression, context = nil)
      shared.parse_unary_tests(expression, context)
    end

    def add_function(name, proc)
      shared.add_function(name, proc)
    end

    private

    def shared
      @shared
    end
  end

  @shared = Context.new
end
