---
name: igniteui-cli-component-template
description: "Add a component template (ig add <id>) for Angular, React and/or Web Components, verified against the pinned package version and validated end to end. WHEN TO USE: adding a component template to one or more frameworks. WHEN NOT TO USE: changing package versions (igniteui-cli-template-version-update); looking up template layout only (igniteui-cli-template-anatomy)."
license: MIT
---

# Component Template

Adds the **component templates** users get with `ig add <id> <name>`, for Angular (`igx-ts`), React (`igr-ts`) and Web Components (`igc-ts`).

Read first: [`igniteui-cli-template-anatomy`](../igniteui-cli-template-anatomy/SKILL.md) (layout, fields, placeholders, model templates).

---

## Input

- **Component**: e.g. "Tile Manager", "Rating".
- **Frameworks**: one or more of `angular`, `react`, `webcomponents`.
- **Variant** (optional): defaults to a single `default` variant showing basic usage.

If either the component or the frameworks are missing, stop and ask.

---

## Limits

Your changes are the new template folders and nothing else. Stop and report when the work needs more than that:

- Template base classes, `TemplateManager`, project templates and other components' templates stay as they are.
- Use an existing `groups.json` group. When none fits, stop and ask before adding or renaming one.
- Use only package versions already pinned in the framework. When the component needs a package pinned nowhere in the framework, stop and report; version choice belongs to the `igniteui-cli-template-version-update` workflow.
- Every component, prop, event and import in the template is one you verified in Step 2.
- Angular, React and Web Components only; jQuery and Blazor are out of scope.
- `CHANGELOG.md` is written at release time: propose a line in your report.

---

## Steps

### 1. Check What Already Exists

For every framework (not only those in scope), look for an existing template for this component:

- folder names and `this.id` values under the three framework roots;
- near-miss ids (`breadcrumb` / `breadcrumbs`, `nav-drawer` / `navigation-drawer`, `mask` / `mask-input`).

Outcomes:
- Already exists in a target framework: stop and report; do not duplicate.
- Exists in another framework: **reuse that exact id**, group and naming.
- Exists in two other frameworks with different ids: stop and report the conflict; ask which id to use.

### 2. Verify the Component in the Pinned Version

For each target framework, find the package that provides the component and the version **currently pinned** (constants or project `package.json`).

Verify the component's class or tag, the import path, and every prop/event you plan to use, against that version:

1. **Preferred**: the Ignite UI MCP tools, if available in this session: `list_components`, `get_api_reference` (platform + component), `resolve_import`.
2. **Otherwise**: the package's type declarations. `npm pack <pkg>@<pinned version> --pack-destination <temp dir>`, extract it, and search the `.d.ts` files. Use a temporary directory outside the repository.
   - Web Components element tag names (`htmlTagName`) are in the compiled JS (e.g. `esm2015/`), not in the `.d.ts`.
   - Web Components attributes are the property names in dashed form (`chartTitle` → `chart-title`). Confirm in the compiled source when unsure.

If the component is only available in a newer version than the one pinned, stop and report: a version update must happen first.

### 3. Choose the Model Template

Pick the closest **model template** in the **same framework** from the anatomy skill's list and copy its structure exactly (same files, same style, same test shape). For Angular, also pick native `igx` vs wrapped Web Component as the anatomy skill describes.

When the same component already has a template in **another** framework:
- **structure and conventions** come from the same-framework sibling: file set, test shape, how data is organized, the `components` naming style (e.g. Web Components charts use `["PieChart"]`, not `["Pie Chart"]`);
- **identity and content** come from the other framework's template: `id`, display `name`, `group`, description wording, and the demo's sample data and props, so the component looks the same across frameworks.

Name the sibling and any cross-framework template you used in the report.

### 4. Create the Template

Per framework, create the component `index.ts`, a `default` variant `index.ts` and its `files/`, following the anatomy skill: "Component Template Layout" for the files and every variant field, "Generated Files Per Framework" for placeholders and the test file. On top of that:

- `listInComponentTemplates = true`.
- `packages`: when the needed package has no constant, use the same `name@range` string already pinned elsewhere in that framework and mention it in the report.
- The test file matches the sibling's shape.
- Keep the demo minimal: the component rendered with a few meaningful, verified props, and data written inline in the component.

### 5. Validate

Use the [`igniteui-cli-build-test`](../igniteui-cli-build-test/SKILL.md) and [`igniteui-cli-smoke-test`](../igniteui-cli-smoke-test/SKILL.md) skills for the commands below.

1. `npm run build`. The smoke test and the specs run the compiled templates, so a stale build does not see your new template.
2. The template specs for each framework in scope (build-test, "Specs That Guard Templates"): ids, file collisions, template contracts.
3. Angular only: `npx eslint packages/igx-templates/igx-ts/<id>/index.ts packages/igx-templates/igx-ts/<id>/default/index.ts`. React and Web Components `index.ts` files are ignored by the repository lint config; their code is linted in the kept project.
4. Per framework: `scripts/smoke-test.sh -f <fw> --templates <id> --keep --out output/smoke-<id>-<fw>`.
5. In each kept project (`output/smoke-<id>-<fw>/<dir>/`), run every check in smoke-test's "Checking a Kept Project" table for that framework.
6. Delete the kept `output/smoke-<id>-*` directories when everything passes; keep them and say so when something fails.

Fix failures caused by your template. When a failure points elsewhere (environment, project template), report it with evidence and leave that code as it is.

---

## Final Report

1. **Created**: per framework, the id, files created, the sibling used as model, packages registered.
2. **API verification**: how each API was verified (MCP tool or `.d.ts`), with the package version.
3. **Validation**: build result, the template specs, the Angular `index.ts` lint, and per framework the smoke result plus each kept-project check.
4. **Stopped or skipped**: with reasons.
5. **Proposed CHANGELOG line**, e.g.
   `* **feat(react):** Added a React \`igr-ts\` template for Tile Manager.`
6. **Diff**: `git status --short`.

## Final Self-Validation

- [ ] No `git` write command was run.
- [ ] The id matches the same component's id in every other framework.
- [ ] `controlGroup` and the component `group` match an existing `groups.json` key.
- [ ] Every API used was verified against the pinned version.
- [ ] A test file exists, shaped like the sibling's, and it was run in the kept project and passed.
- [ ] Template specs, smoke test and every kept-project check passed for each framework, or failures are reported with evidence.
