# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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