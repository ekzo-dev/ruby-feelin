# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [7.0.3] - 2026-10-05

### Changed

* **Breaking:** `FEELIN.parse` is `FEELIN.parse_expression`, after feelin's own `parseExpression`.
* **Breaking:** errors are the gem's own. A failure inside V8 is raised as `FEELIN::Error` — `FEELIN::SyntaxError` for an expression that does not parse, `FEELIN::TimeoutError` and `FEELIN::MemoryError` for a context's limits — instead of `MiniRacer::RuntimeError`, `MiniRacer::ScriptTerminatedError` and `MiniRacer::V8OutOfMemoryError`. The message names the expression, also available as `error.expression`; `error.reason` is the cause without it. An exception raised by a custom function still passes unwrapped.
* **Breaking:** a custom function receives a date, a time and a duration as their ISO 8601 strings — the form a result has — instead of a hash of the internal fields of the JavaScript object.

## [7.0.2] - 2026-10-05

### Added

* `FEELIN.parse` and `FEELIN.parse_unary_tests` answer the syntax tree of an expression as nested hashes (`type`, `from`, `to`, `text`, `children`), without evaluating it. A syntax error raises with the message `evaluate` gives.
* `FEELIN::Context` — a V8 context of one's own, with the same methods as the module, optional `timeout` and `max_memory` limits, and custom functions of its own. All contexts start from one snapshot of the bundle.

### Changed

* Updated the bundled `feelin` JavaScript library to 7.0.2 (prototype access from FEEL expressions is prevented).
* **Breaking:** a result is JSON-compatible. A date, a time and a duration are now the ISO 8601 strings FEEL's `string()` gives them (`"2020-01-02"`, `"10:00:00+03:00"`, `"2020-01-02T03:04:05Z"`, `"P1DT2H"`) instead of a hash of the internal fields of the JavaScript object. A function is a hash of its `parameterNames`.
* The context is passed to V8 as an argument rather than written into the evaluated script, so V8 no longer compiles and keeps a script per distinct context. Measured speed is the same as before.

## [7.0.1] - 2026-06-22

### Changed

* Updated the bundled `feelin` JavaScript library to 7.0.1.
* Rebuilt the JavaScript bundle with [esbuild](https://esbuild.github.io/). `feelin` is now distributed as an ES module, so it is pre-bundled into a single IIFE file (`lib/feelin/js/dist/feelin.js`) instead of being assembled from CommonJS at load time.
* `evaluate` / `unary_test` unwrap feelin 7's `EvaluationResult { value, warnings }` envelope, so callers keep receiving the bare value.

### Fixed

* `serialize_context` built invalid JavaScript (a leading comma, `{,…}`) for an empty context once a custom function was registered.
* `serialize_context` built invalid JavaScript for custom function names containing spaces (e.g. `string join`); function names are now emitted as quoted keys forwarding to the attached global.

## [4.3.1] - 2025-03-26

* Initial release