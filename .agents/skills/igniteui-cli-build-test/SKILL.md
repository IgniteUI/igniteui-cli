---
name: igniteui-cli-build-test
description: "Quick reference for building, linting and running the Jasmine specs of the Ignite UI CLI monorepo, including how to narrow Jasmine to one spec file and which specs guard templates and version pins. WHEN TO USE: compiling after a change, running lint, running unit or template specs. WHEN NOT TO USE: checking that a generated project installs and builds; use igniteui-cli-smoke-test instead."
license: MIT
---

# Ignite UI CLI: Build, Lint, Test

## Prerequisites

- Dependencies are installed with **yarn** (`yarn install`), never npm. Scripts run with **npm**.
- Do not run `yarn install` or `yarn add` to "fix" something without being asked. It rewrites `yarn.lock`, which agents must not change.

## Commands

| Command | What it does | When |
|---|---|---|
| `npm run build` | `tsc` for the monorepo, config schema, MCP server build | After any `.ts` change, and before Jasmine or the smoke test |
| `npm run lint` | ESLint (flat config in `eslint.config.mjs`) over all `.ts`, **except** `packages/cli/templates/**` and every `**/files/**` (ignored in the config). React, Web Components and jQuery template code is therefore only linted inside a generated project | Before finishing any code change |
| `npm run jasmine` | All Jasmine specs, no lint/build/coverage | After `npm run build` |
| `npm run test` | lint + build + Jasmine with coverage | Full local CI equivalent; slow |

Jasmine runs the **compiled** `.js` specs, so always `npm run build` first or the run tests stale code.

A run that reports **INCOMPLETE** only because some specs are pending (`xit`/`pending()`) still exits 0 and counts as a pass. Any failed spec is a failure.

## Running One Spec File

`spec/jasmine-runner.ts` hard-codes `spec_files`. To narrow a run:

1. Temporarily change `spec_files` to the one spec, e.g. `"spec/templates/react-spec.js"`.
2. `npm run build && npm run jasmine`.
3. **Restore the file** and confirm `git diff spec/jasmine-runner.ts` is empty before finishing.

If restoring is at risk (long session, multiple runs), prefer the full `npm run jasmine`.

## Specs That Guard Templates

| Spec | Guards |
|---|---|
| `spec/templates/angular-spec.ts` | Template ids exist; no file collisions between templates; every `igniteui-angular` pin in templates and project `package.json` equals `IGNITEUI_ANGULAR_PACKAGE` |
| `spec/templates/react-spec.ts` | Same, for all four `IGNITEUI_REACT_*` constants |
| `spec/templates/webcomponents-spec.ts` | Ids and collisions only. It does **not** check version pins against the constants |
| `spec/templates/template-contracts-spec.ts` | Every jQuery, React, Web Components and Blazor project and component template: matches its framework and project type, its template paths exist, it generates a config |
| `spec/unit/TemplateManager-spec.ts`, `spec/unit/list-spec.ts` | Template discovery and `ig list` output |
| `spec/acceptance/*` | `ig new`, `ig add`, `ig generate` end to end, with package install stubbed |

A failing "no internal collisions" spec means two templates would write the same file path: give the new template a distinct `__path__`/file prefix layout, do not weaken the spec.

## Related Skills

- [`igniteui-cli-smoke-test`](../igniteui-cli-smoke-test/SKILL.md): generated-project install and build
- [`igniteui-cli-template-anatomy`](../igniteui-cli-template-anatomy/SKILL.md): template and version-pin layout
