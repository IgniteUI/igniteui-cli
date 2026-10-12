---
name: igniteui-cli-build-test
description: "Build, lint and Jasmine for the Ignite UI CLI monorepo: running one spec file, and which specs guard templates and version pins. WHEN TO USE: compiling after a change, running lint, running unit or template specs. WHEN NOT TO USE: checking that a generated project installs and builds (igniteui-cli-smoke-test)."
license: MIT
---

# Ignite UI CLI: Build, Lint, Test

## Prerequisites

- Dependencies are installed with **yarn** (`yarn install`), never npm. Scripts run with **npm**.
- Run `yarn install` or `yarn add` only when asked. Either rewrites `yarn.lock`, which agents leave untouched; a build that fails on dependencies is reported, not "fixed" by reinstalling.

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

Pass compiled spec files to the Jasmine CLI directly, after `npm run build`:

```bash
npx jasmine spec/templates/react-spec.js
```

`npm run jasmine` ignores arguments and always runs every spec; `spec/jasmine-runner.ts` stays as it is.

## Specs That Guard Templates

| Spec | Guards |
|---|---|
| `spec/templates/angular-spec.ts` | Template ids exist; no file collisions between templates; every `igniteui-angular` pin in templates and project `package.json` equals `IGNITEUI_ANGULAR_PACKAGE` |
| `spec/templates/react-spec.ts` | Same, for all four `IGNITEUI_REACT_*` constants |
| `spec/templates/webcomponents-spec.ts` | Ids and collisions only. It does **not** check version pins against the constants |
| `spec/templates/template-contracts-spec.ts` | Every jQuery, React, Web Components and Blazor project and component template: matches its framework and project type, its template paths exist, it generates a config |
| `spec/unit/TemplateManager-spec.ts`, `spec/unit/list-spec.ts` | Template discovery and `ig list` output |
| `spec/acceptance/*` | `ig new`, `ig add`, `ig generate` end to end, with package install stubbed |

The **template specs** for a framework run in about 15 seconds:

```bash
npx jasmine spec/templates/angular-spec.js
npx jasmine spec/templates/react-spec.js spec/templates/template-contracts-spec.js
npx jasmine spec/templates/webcomponents-spec.js spec/templates/template-contracts-spec.js
```

A failing "no internal collisions" spec means two templates would write the same file path: give the new template a distinct `__path__`/file prefix layout and keep the spec as it is.

## Related Skills

- [`igniteui-cli-smoke-test`](../igniteui-cli-smoke-test/SKILL.md): generated-project install and build
- [`igniteui-cli-template-anatomy`](../igniteui-cli-template-anatomy/SKILL.md): template and version-pin layout
