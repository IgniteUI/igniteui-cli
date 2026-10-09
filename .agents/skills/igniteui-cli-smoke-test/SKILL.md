---
name: igniteui-cli-smoke-test
description: "How to run scripts/smoke-test.sh (scaffold a project with the local CLI, add templates, npm install, build) and how to judge its results and logs, including classifying failures as template defects, version-pin problems or environment noise. WHEN TO USE: verifying template or version changes end to end, reading output/smoke results, triaging a failed smoke run. WHEN NOT TO USE: compiling the CLI or running Jasmine; use igniteui-cli-build-test instead."
license: MIT
---

# Ignite UI CLI: Template Smoke Test

`scripts/smoke-test.sh` is the **only** check that a generated project actually installs and builds. Jasmine stubs `PackageManager.installPackages`, so a green Jasmine run says nothing about real npm resolution or TypeScript compilation of generated code.

## Running It

Preconditions: `npm run build` has run (the script refuses otherwise); `node` and `npm` on PATH; network access to npm.

| Goal | Command | Typical time |
|---|---|---|
| A few templates, one framework | `scripts/smoke-test.sh -f react --templates rating,grid` | ~1 min |
| All component templates, one framework | `scripts/smoke-test.sh -f webcomponents` | a few min |
| Every project template, one framework | `scripts/smoke-test.sh -f angular --all-projects` | ~2 min for Web Components; Angular is slowest |
| Bisect which template breaks a build | `scripts/smoke-test.sh -f angular --isolate --templates a,b,c` | slow |
| Keep generated projects for inspection | add `--keep` | |

Defaults: angular, react, webcomponents; default project template; all component templates. jQuery and Blazor are opt-in (`-f jquery`, `-f blazor`): jQuery needs ProGet credentials for 13 templates and has no build; Blazor needs the .NET SDK and has no component templates.

`--all-projects` takes its list from `ig list`, so **hidden project templates** (`base`, `side-nav-auth`, `side-nav-mini-auth`) are not scaffolded. They reuse the `_base` / `_base_with_home` files, except where a hidden project has its own `files/package.json` (e.g. Angular `side-nav-auth`): to cover it, run `scripts/smoke-test.sh -f <fw> -p <project-id>`.

Runs longer than a few minutes: use a long command timeout, or run it in the background with output redirected to a file and wait until that file contains the final `Results:` line (the script prints it last). The script **wipes its `--out` directory at start**, so give each run its own directory (e.g. `--out output/smoke-react`, `--out output/smoke-react-projects`) when you need more than one run's results, and never run two at once into the same directory.

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

So for **Web Components**, a smoke PASS proves the template is added and its packages install, not that its code compiles. To verify the code, run with `--keep` and, in the kept project (`output/<out>/<dir>/`):

```
npx tsc --noEmit
npx eslint src/app/<id>
npx vitest run src/app/<id>
```

`vitest` (React and Web Components) runs in browser mode with Playwright Chromium. If it fails because the browser is missing, run `npx playwright install chromium` once and retry; that is environment setup, not a template defect.

`ig add` from the command line does not register a route for Web Components templates, so a missing entry in the generated `app-routing.ts` is expected, not a template defect.

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

- [`igniteui-cli-build-test`](../igniteui-cli-build-test/SKILL.md)
- [`igniteui-cli-template-anatomy`](../igniteui-cli-template-anatomy/SKILL.md)
