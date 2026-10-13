---
name: igniteui-cli-smoke-test
description: "Validating template changes: build, the Jasmine template specs (running one spec file), and the smoke test (scripts/smoke-test.sh: scaffold with the local CLI, add templates, install, build); judging results, checking kept projects, triaging failures. WHEN TO USE: verifying template or version changes, running template specs, reading or triaging output/smoke results, editing scripts/smoke-test.sh. WHEN NOT TO USE: looking up template layout or where versions are pinned (igniteui-cli-template-anatomy)."
license: MIT
---

# Ignite UI CLI: Build, Template Specs, Smoke Test

`scripts/smoke-test.sh` is the **only** check that a generated project actually installs and builds. Jasmine stubs `PackageManager.installPackages`, so a green Jasmine run says nothing about real npm resolution or TypeScript compilation of generated code. Run the build and the template specs first: they are fast and catch id and pin mistakes before a slow smoke run.

## Build and Template Specs

- Dependencies are installed with **yarn**, scripts run with **npm**. Run `yarn install` or `yarn add` only when asked: either rewrites `yarn.lock`, which agents leave untouched. A build that fails on dependencies is reported, not "fixed" by reinstalling.
- `npm run build` after any `.ts` change. Jasmine and the smoke test run the **compiled** `.js`, so without a build they test stale code.
- `npm run lint` skips `packages/cli/templates/**` and every `**/files/**` (ignored in `eslint.config.mjs`). React, Web Components and jQuery template code is therefore only linted inside a generated project (see "Checking a Kept Project").
- `npm run jasmine` ignores arguments and always runs every spec. To run one file, pass the compiled spec to the Jasmine CLI: `npx jasmine spec/templates/react-spec.js`. Leave `spec/jasmine-runner.ts` as it is.
- A run that reports **INCOMPLETE** only because some specs are pending (`xit`/`pending()`) still exits 0 and counts as a pass. Any failed spec is a failure.

### Specs That Guard Templates

| Spec | Guards |
|---|---|
| `spec/templates/angular-spec.ts` | Template ids exist; no file collisions between templates; every `igniteui-angular` pin in templates and project `package.json` equals `IGNITEUI_ANGULAR_PACKAGE` |
| `spec/templates/react-spec.ts` | Same, for all four `IGNITEUI_REACT_*` constants |
| `spec/templates/webcomponents-spec.ts` | Ids and collisions only. It does **not** check version pins against the constants |
| `spec/templates/template-contracts-spec.ts` | Every jQuery, React, Web Components and Blazor project and component template: matches its framework and project type, its template paths exist, it generates a config |
| `spec/unit/TemplateManager-spec.ts`, `spec/unit/list-spec.ts` | Template discovery and `ig list` output |
| `spec/acceptance/*` | `ig new`, `ig add`, `ig generate` end to end, with package install stubbed |

The template specs for a framework run in about 15 seconds, after `npm run build`:

```bash
npx jasmine spec/templates/angular-spec.js
npx jasmine spec/templates/react-spec.js spec/templates/template-contracts-spec.js
npx jasmine spec/templates/webcomponents-spec.js spec/templates/template-contracts-spec.js
```

A failing "no internal collisions" spec means two templates would write the same file path: give the new template a distinct `__path__`/file prefix layout and keep the spec as it is.

## Running the Smoke Test

Preconditions: `npm run build` has run (the script refuses otherwise); `node` and `npm` on PATH; network access to npm.

| Goal | Command | Typical time |
|---|---|---|
| A few templates, one framework | `scripts/smoke-test.sh -f react --templates rating,grid` | ~1 min |
| All component templates, one framework | `scripts/smoke-test.sh -f webcomponents` | a few min |
| Every project template, one framework | `scripts/smoke-test.sh -f angular --all-projects` | ~2 min for Web Components; Angular is slowest |
| Bisect which template breaks a build | `scripts/smoke-test.sh -f angular --isolate --templates a,b,c` | slow |
| Keep generated projects for inspection | add `--keep` | |

Defaults: angular, react, webcomponents; default project template; all component templates. jQuery and Blazor are opt-in (`-f jquery`, `-f blazor`): jQuery needs ProGet credentials for 13 templates and has no build; Blazor needs the .NET SDK and has no component templates.

`--all-projects` takes its list from `ig list`, so **hidden project templates** (`isHidden = true` in the project's `index.ts`, e.g. `base`, `side-nav-auth`, `ai-config`) are not scaffolded. Most reuse the `_base` / `_base_with_home` files; a hidden project with its own `files/package.json` (e.g. Angular `side-nav-auth`) is covered only by `scripts/smoke-test.sh -f <fw> -p <project-id>`. Hidden projects can also reuse another project's `files/` through `templatePaths` (Angular `side-nav-mini-auth` includes `side-nav-auth/files`, manifest included), so a change there needs a `-p` run for each project that pulls it in.

Runs longer than a few minutes: use a long command timeout, or run it in the background with output redirected to a file and wait for the process to exit. The `Results:` line is not the end: when nothing failed and `--keep` is not set, the script deletes the generated projects after printing it. The script **wipes its `--out` directory at start**, so give each run its own directory (e.g. `--out output/smoke-react`, `--out output/smoke-react-projects`) when you need more than one run's results, and never run two at once into the same directory.

## Results

- `output/smoke/results.tsv`: one row per step, columns `framework  step  template  status  seconds`. Steps: `new`, `add`, `install`, `build`. Status: `PASS`, `FAIL`, `SKIP`.
- `output/smoke/logs/<dir>-<step>[-<id>].log`, where `<dir>` is `<fw-short>-<project>` (or `<fw-short>-<id>` with `--isolate`) and `<fw-short>` is `ng`, `rc`, `wc`, `jq`, `bz`. Examples: `rc-default-add-rating.log`, `wc-default-install.log`, `ng-default-build.log`.
- Generated projects are deleted on full success unless `--keep`; on any failure they are kept under `output/smoke/<dir>/`.

## What a PASS Proves, Per Framework

| Framework | Generated `build` script | Type-checks template code? |
|---|---|---|
| Angular | `ng build` | Yes, for code reachable from the app |
| React | `tsc -b && vite build` | Yes |
| Web Components | `vite build` | **No.** Vite strips types without checking, and an added view that no route imports is not even bundled |

So for **Web Components**, a smoke PASS proves the template is added and its packages install, not that its code compiles. For **Angular**, `ng build` compiles from `tsconfig.app.json`, which excludes `*.spec.ts`, so the template's spec is neither type-checked nor run. No build runs the template's test file. A **kept project** closes these gaps.

`ig add` from the command line does not register a route for Web Components templates, so a missing entry in the generated `app-routing.ts` is expected, not a template defect.

## Checking a Kept Project

Run the smoke test with `--keep`, then in the kept project (`<out>/<dir>/`) check the template `<id>`:

| Framework | Type-check | Lint | Test file |
|---|---|---|---|
| Angular | covered by `ng build` | `npx eslint src/app/<id>` | `npx ng test --include src/app/<id> --browsers=chromium --watch=false` (the `@angular/build:unit-test` builder, which uses Vitest) |
| React | covered by `tsc -b` | `npx eslint src/app/<id>` | `npx vitest run src/app/<id>` |
| Web Components | `npx tsc --noEmit` | `npx eslint src/app/<id>` | `npx vitest run src/app/<id>` |

The test runners use browser mode with Playwright Chromium. If one fails because the browser is missing, run `npx playwright install chromium` once and retry; that is environment setup, not a template defect.

## Judging a Step

**Exit codes alone are not trustworthy**: `Util.error` logs and returns without setting a code. The script already judges each step on exit code **plus** a log scan (`doesn't exist|is not valid|not supported|not found|^Error: |Error installing|npm error`) **plus** an artifact check (`ignite-ui-cli.json` after `new`; more files under `src/` after `add`). Trust `results.tsv`, then read the log for the reason.

## Classifying Failures

| Symptom in log | Class | Usually caused by |
|---|---|---|
| `add` FAIL, "Template doesn't exist in the current library", and no folder with that id exists | Invalid input | The id passed to `--templates` is wrong; nothing to fix in code |
| `add` FAIL, "Template doesn't exist", but the folder exists | Template defect | `id` field differs from what was passed, template not discovered, missing `index.ts`, or stale build |
| `install` FAIL with `ETARGET` / `No matching version` / `404` | Version pin | A pin names a version that is not published |
| `install` FAIL with `ERESOLVE` / peer dependency conflict | Version pin | A pin is outside a peer range of another installed package. `peerOptional` conflicts **also** fail install once both packages are present |
| `build` FAIL with `TS2305` / `TS2724` "has no exported member" | Template defect or version pin | Template imports a symbol that does not exist in the pinned version |
| `build` FAIL with `TS2322` / `TS2339` on a component prop | Template defect or version pin | Prop renamed/removed, or invented |
| `build` FAIL pointing into a project file (`main.ts`, `app.config.ts`, `App.tsx`) | Project-template defect | Not caused by a component template |
| `ETIMEDOUT`, `ECONNRESET`, `EAI_AGAIN`, registry 5xx | Environment | Network; re-run before blaming code |
| jQuery `401`/`403` from ProGet | Environment | Missing credentials, expected without them |
| `dotnet: command not found` | Environment | .NET SDK missing |

### Notes on Reading Results

- `install` and `build` rows are recorded against the **project directory** (e.g. `ng-default`), not a template. To find the template behind an `ERESOLVE`/`ETARGET`, match the package named in the error against the `packages` of the templates added in that run.
- A failed `install` writes **no `build` row** at all (not `SKIP`). Report the build as not run because of the install failure.
- npm reports **only the first** `ERESOLVE`. After finding one conflict, check the other pins too: `npm view <main-pkg>@<version> peerDependencies` against each added template's `packages`.
- A smoke run tests the **compiled** templates (`index.js`). If any template `.ts` changed since the last `npm run build`, the run tests stale pins and ids. When unsure, rebuild first.

## Mapping an Install Error Back to Source

A pin in an install error comes from one of: the template's variant `index.ts` (`this.packages`), the framework's `constants.ts`, or a project template's `files/package.json`. See the template-anatomy skill.

## Mapping a Build Error Back to Template Source

A generated file `output/smoke/<dir>/src/app/<id>/<id>.<ext>` comes from the template's `files/src/app/__path__/__filePrefix__.<ext>`:

| Framework | Template root |
|---|---|
| angular (`ng`) | `packages/igx-templates/igx-ts/<component>/<variant>/files/` |
| react (`rc`) | `packages/cli/templates/react/igr-ts/<component>/<variant>/files/` |
| webcomponents (`wc`) | `packages/cli/templates/webcomponents/igc-ts/<component>/<variant>/files/` |

When one combined project fails to build and the error does not name the file clearly, re-run with `--isolate --templates <suspects>`.

## Triaging a Run

Use this when a run failed, or when asked to make sense of an existing `output/smoke/` (or another `--out` directory). Triage changes no files. If there is no `results.tsv`, say so and stop.

1. Read `results.tsv` and list every `FAIL` row.
2. For each, open the matching log and find the **first** meaningful error line. Quote it; do not guess a cause the log does not support.
3. Classify it with the table above.
4. Map it to source: build errors through the generated path to the template's `files/`; install errors through the package named in the error to its pin, naming the template that added it.
5. For every `ERESOLVE`, check the remaining pins against the main package's peers (npm reports only the first conflict) and report latent conflicts as advisories.
6. Report the root of a cascade (failed `install`, no `build` row), not the cascade.
7. Re-run only for an environment failure, once, and say that you did.

Report one row per failure:

| Framework | Step | Project / culprit template | Class | Evidence (log:line, error) | Source at fault |
|---|---|---|---|---|---|

End with the PASS/FAIL/SKIP totals, whether the run as a whole is trustworthy (not when most failures are network), and the exact re-run command if one is warranted (e.g. `--isolate --templates <suspects>`).

## Constraints When Editing the Script

- Every `ig` call must happen **before** `npm install` in a generated project. After install, `bin/execute.js` delegates to the project-local *published* CLI, so later calls would test the published CLI, not your local build.
- Keep the three-way step judgement (exit code, log scan, artifact) intact.

## Related Skills

- [`igniteui-cli-template-anatomy`](../igniteui-cli-template-anatomy/SKILL.md)
