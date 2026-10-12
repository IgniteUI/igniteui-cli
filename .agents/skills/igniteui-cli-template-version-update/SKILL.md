---
name: igniteui-cli-template-version-update
description: "Update or audit the Ignite UI versions that Angular, React and Web Components templates scaffold (ig new / ig add). WHEN TO USE: updating template version pins; asking which pins are stale or conflicting (dry-run). WHEN NOT TO USE: the CLI's own dependencies or version; adding a template (igniteui-cli-component-template)."
license: MIT
---

# Template Version Update

Updates the **Ignite UI package versions pinned in project and component templates**: what `ig new` and `ig add` write into a user's `package.json`. The CLI's own dependencies and version are out of scope.

---

## Input

- **Scope**: one or more of `angular`, `react`, `webcomponents`, or specific package names.
- **Targets** (optional): explicit versions, e.g. `igniteui-webcomponents 7.5.0`. If none are given, the target for each package is its npm `latest` dist-tag.
- **Mode**:
  - `update` (default): Steps 1-7.
  - `dry-run`: a read-only drift report. Run Steps 1-3, then stop and give the dry-run report (see Final Report). Edit no files and run no builds or smoke tests. Use it for "what is out of date?" questions; `all` is a valid scope here.

If the scope is missing, or a scope or target is ambiguous, stop and ask. In `update` mode the scope is always named explicitly; "everything" is never assumed.

Scope boundaries:
- A framework scope covers only that framework's root. With scope `webcomponents`, the `igniteui-webcomponents` pins in Angular's wrapped-component templates (`packages/igx-templates/.../chat`, `rating`) are **out of scope**; report them as observations.
- Packages shared by all frameworks' project templates (e.g. `@igniteui/material-icons-extended`) are updated only when the user names them or the scope covers all three frameworks, so the frameworks don't diverge. Otherwise list them as observations.

---

## Limits

Your changes are Ignite UI version strings, applied as patch or minor updates. Everything else is reported:

- **Major** updates (see Step 3) are stop items, never applied.
- Each pin keeps its range prefix (`~` or `^`); report inconsistent prefixes as observations.
- Pins stay where they are: hard-coded pins stay hard-coded unless the user asked to move them into constants.
- Non-Ignite UI dependencies in project templates (Angular, React, Vite, TypeScript, etc.) stay as they are. If a new Ignite UI version requires them to change, that is a stop item (Step 3).
- jQuery and Blazor templates are out of scope unless explicitly named.
- `CHANGELOG.md` is written at release time: propose a line in your report.

---

## Steps

### 1. Record the Starting Point

Run `git status --short` and keep the output. Your final report must separate your changes from anything that was already modified.

### 2. Build the Inventory

Search for every Ignite UI pin in scope, using **both** patterns and the exclusions from [`igniteui-cli-template-anatomy`](../igniteui-cli-template-anatomy/SKILL.md) ("Where Ignite UI Versions Are Pinned"), over `packages/cli/templates` and `packages/igx-templates`.

Produce a table, one row per occurrence:

| File:line | Package | Current range |
|---|---|---|

Include all three kinds of locations: `constants.ts`, `projects/*/files/package.json`, and hard-coded `this.packages = [...]` in `index.ts`. If a pin appears in a form the pattern missed (you notice one while reading), add it and mention it in the report. If a pin sits in a place you are not sure you may edit, list it as a stop item.

### 3. Resolve and Classify Targets

For each distinct package:

1. Determine the target: the user's explicit version, else `npm view <pkg> dist-tags.latest`.
2. Confirm it exists: `npm view <pkg>@<target> version`. A target that does not exist is a stop item for that package.
3. Classify current → target:
   - **patch / minor** (same major; for `0.x`, same minor): proceed.
   - **major** (or `0.x` minor change): **stop for that package**. Leave all of its pins unchanged.
   - **already current** (the existing range already resolves to the target): no change. This includes `^` pins whose range admits a newer minor (e.g. `^2.1.1` admits 2.2.1). Keep their minimum unless the user asks; list them under Observations as "minimum could be raised to `^<latest>`".
4. For packages that proceed, check peers: `npm view <pkg>@<target> peerDependencies`.
   - If a peer is a **non-Ignite UI** package (e.g. a new `igniteui-angular` needing a newer `@angular/core`) and the project templates don't satisfy it, **stop for that package** and report the required change.
   - If a peer is another **Ignite UI** package pinned in templates (e.g. `igniteui-angular` → `igniteui-grid-lite ~0.11.0`), that pin must satisfy the peer range after your update. Treat bringing it into range as part of this update, subject to the same patch/minor/major rule; if that would be a major (or `0.x` minor) change, report it as a stop item with the peer range as the reason, so a human can approve it explicitly.

   Do this check also for the framework's **main package even when it is not changing**: existing pins can already be out of range.

Look up each package's version on npm by itself. Release trains are independent (see the anatomy skill), so one package's version says nothing about another's.

While classifying, also note drift within the inventory: pins that differ from the framework's constant for the same package, the same package at different ranges in different files, and mixed `~`/`^` prefixes for the same package.

In `dry-run` mode, stop here.

### 4. Apply Edits

For each package that proceeds, update **every** occurrence from the inventory:

1. `constants.ts` first.
2. Every `projects/*/files/package.json` copy.
3. Every hard-coded `index.ts` pin.

Keep the existing range prefix. Keep formatting (tabs in `.ts`, two spaces in template `package.json`).

### 5. Re-check

Search again for each **old** version string of every package you changed, over the same paths. Expect zero hits for that package. Any remaining hit is a missed pin: fix it, or report it if it is outside scope.

### 6. Validate

Use the [`igniteui-cli-build-test`](../igniteui-cli-build-test/SKILL.md) and [`igniteui-cli-smoke-test`](../igniteui-cli-smoke-test/SKILL.md) skills for the commands below. Lint is skipped: it does not check version strings.

1. `npm run build`. The smoke test and the specs run the compiled templates, so a stale build tests the old pins. If it fails, diagnose it before going further.
2. The template specs for each framework in scope (build-test, "Specs That Guard Templates"). For Angular and React they check every main-package pin against its constant.
3. Smoke test, per framework in scope, each into its **own output directory** (a run wipes its `--out` at start, so a shared directory loses the earlier run's results). Scope the run to what changed:
   - The framework's main package changed (`igniteui-angular`, `igniteui-react`, `igniteui-webcomponents`), which nearly every template pulls in: `scripts/smoke-test.sh -f <fw> --out output/smoke-<fw>` (default project + every component template).
   - Otherwise, only the templates that pull in a changed package: search the framework's variant `index.ts` files for the package name or its constant, read each match's `this.id`, and run `scripts/smoke-test.sh -f <fw> --templates <id>,<id> --out output/smoke-<fw>`. For example, an `igniteui-dockmanager` update runs `--templates dock-manager`. The default project is always scaffolded, so a pin in its `package.json` is covered too.
   - Additionally, when any `projects/*/files/package.json` changed: `scripts/smoke-test.sh -f <fw> --all-projects --out output/smoke-<fw>-projects`. `--all-projects` skips hidden projects, so for each changed manifest under a hidden project (`isHidden = true` in its `index.ts`, e.g. Angular `side-nav-auth`) also run `scripts/smoke-test.sh -f <fw> -p <project-id> --out output/smoke-<fw>-<project-id>`. If a changed package appears only in project manifests (no template pulls it in, e.g. `@igniteui/material-icons-extended`), these runs alone cover it; skip the `--templates` run.

A scoped run takes about a minute; a full run takes several. Use a long timeout or background execution and wait for completion. Run them one at a time. Classify any failure with the smoke-test skill. Environment failures (network, credentials) are re-run once, then reported; versions stay as they are for those.

If a failure is caused by the new version (missing export, renamed prop, peer conflict), revert **that package's** edits, keep the others, and report it as a stop item with the evidence (log path and the error line).

### 7. Follow-up Corrections

When the user corrects something after the report, fix that issue and re-run Steps 5 and 6 for the affected frameworks only, rather than the whole update.

---

## Final Report

1. **Updated**: table `package | old range | new range | files changed`.
2. **Stopped**: each package not updated, with the reason (major, missing version, peer conflict, unclear pin location, failed smoke with evidence).
3. **Validation**: build result, template specs, and per framework each smoke command run (full, which `--templates`, `--all-projects`, which `-p`), the PASS/FAIL/SKIP summary and the path of its `results.tsv`.
4. **Observations** (not acted on): mixed range styles, pins that bypass constants, packages that are stale but out of scope.
5. **Proposed CHANGELOG line**, in the repository's style:
   `* **chore(<framework>):** Updated scaffolded <Framework> projects to \`<pkg>\` \`~x.y.z\`.`
6. **Diff**: `git status --short` and `git diff --stat`, distinguishing pre-existing changes from yours.

### Dry-Run Report

1. **Peer conflicts** first: pins outside a main package's peer range (these make `ig add` install an incompatible version).
2. **Drift** table: `package | locations | ranges | npm latest | within range? | update type (patch/minor/major)`.
3. **Inconsistencies**: pins that bypass or differ from constants, mixed range prefixes.
4. What an `update` run in each scope would change, and which packages it would stop on.
5. The date and commit (`git rev-parse --short HEAD`).

## Final Self-Validation

In `dry-run` mode only the first item applies, plus: `git status --short` is unchanged from Step 1.

- [ ] No `git` write command was run.
- [ ] Every changed package has zero remaining occurrences of its old version in scope.
- [ ] No major update was applied.
- [ ] No range prefix changed.
- [ ] Build and template specs passed; smoke results reported for every framework in scope, covering every template that pulls in a changed package.
