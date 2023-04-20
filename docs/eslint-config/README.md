# eslint-config

Mafalda SFU shareable ESLint config

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
