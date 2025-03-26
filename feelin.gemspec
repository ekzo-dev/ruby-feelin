$:.push File.expand_path("../lib", __FILE__)

require "feelin/version"

Gem::Specification.new do |spec|
  spec.name        = "feelin"
  spec.version     = FEELIN::VERSION
  spec.authors     = ["Dmitry Arkhipov"]
  spec.email       = ["d.arkhipov@ekzo.dev"]
  spec.homepage    = "https://github.com/ekzo-dev/feelin"
  spec.summary     = "feelin Ruby wrapper"
  spec.description = "This gem uses embed V8 JavaScript engine and feelin JavaScript library to parse and evaluate DMN FEEL expressions"
  spec.license     = "MIT"

  spec.files = `git ls-files -z`.split("\x0")
  spec.require_paths = ["lib"]

  spec.add_dependency "mini_racer",      "~> 0.18"

  spec.add_development_dependency "rspec",   "3.12.0"
  spec.add_development_dependency "byebug", "11.1.3"
end
