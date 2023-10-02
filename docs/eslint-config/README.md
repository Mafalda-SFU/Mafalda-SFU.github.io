# eslint-config

[![Coverage](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/mafalda-bot/27d772a9a3a8a945b34fd9676de40486/raw/eslint-config.json)](https://gist.github.com/Mafalda-bot/27d772a9a3a8a945b34fd9676de40486#file-eslint-config-json)
[![npm](https://img.shields.io/npm/v/@mafalda-sfu/eslint-config.svg)](https://www.npmjs.com/package/@mafalda-sfu/eslint-config)

Mafalda SFU shareable ESLint config

## 🎛️ Available Configurations

<https://prettier.io/docs/en/comparison.html>
<https://eslint.org/docs/latest/extend/custom-rules#rule-structure>

- `@mafalda-sfu/eslint-config`: default configuration aggregating all the
  other configurations, acting as *recommended* one. One stop shop for all your
  linting needs.
  - `@mafalda-sfu/eslint-config/problems`: rules that detect possible errors in
    your code. It should be used before running actual tests to detect and fix
    errors as early as possible.
  - `@mafalda-sfu/eslint-config/format`: non-critical stylistic rules that are
    purely matters of taste and are highly unlikely to cause errors. They can
    safely be run after tests or before a commit, or ignored if you disagree
    with them.
    - `@mafalda-sfu/eslint-config/suggestions`: rules to identify alternative
      better ways of writing code.
    - `@mafalda-sfu/eslint-config/layout`: rules that enforce a consistent code
      style.

## 🚥 Semantic Versioning Policy

`@mafalda-sfu/eslint-config` follows semantic versioning and ESLint's Semantic
Versioning Policy.

- Patch release (intended to not break your lint build)
  - A bug fix in a rule that results in it reporting fewer errors.
  - Improvements to documentation.
  - Non-user-facing changes such as refactoring code, adding, deleting, or
    modifying tests, and increasing test coverage.
  - Re-releasing after a failed release (i.e., publishing a release that
    doesn't work for anyone).
- Minor release (might break your lint build)
  - A bug fix in a rule that results in it reporting more errors.
  - A new rule is created.
  - A new option to an existing rule is created.
  - An existing rule is deprecated.
- Major release (likely to break your lint build)
  - A support for old Node version is dropped.
  - A support for old ESLint version is dropped.
  - An existing rule is changed in it reporting more errors.
  - An existing rule is removed.
  - An existing option of a rule is removed.
  - An existing config is updated.
