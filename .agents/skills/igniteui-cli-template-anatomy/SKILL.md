---
name: igniteui-cli-template-anatomy
description: "Layout of Ignite UI CLI component templates and Ignite UI version pins for Angular (igx-ts), React (igr-ts) and Web Components (igc-ts): folder structure, index.ts fields, placeholder syntax, test files, groups, constants files and every place a package version is pinned. WHEN TO USE: adding or changing a component template, updating Ignite UI package versions, auditing templates across frameworks. WHEN NOT TO USE: running builds or the smoke test; use igniteui-cli-build-test or igniteui-cli-smoke-test."
license: MIT
---

# Ignite UI CLI: Template Anatomy

## Discovery

Templates are discovered by **scanning folders**. There is no registry file. A component appears in `ig add` / `ig list` when its folder contains a component `index.ts` and at least one variant folder with its own `index.ts`. `groups.json` only holds group descriptions; it changes only when a new group is introduced.

## Framework Roots

| Framework | Project type | Root | Template base class | Constants |
|---|---|---|---|---|
| Angular | `igx-ts` | `packages/igx-templates/igx-ts/` | `packages/igx-templates/IgniteUIForAngularTemplate.ts` | `packages/igx-templates/constants.ts` |
| React | `igr-ts` | `packages/cli/templates/react/igr-ts/` | `packages/cli/lib/templates/IgniteUIForReactTemplate.ts` | `packages/cli/templates/react/igr-ts/constants.ts` |
| Web Components | `igc-ts` | `packages/cli/templates/webcomponents/igc-ts/` | `packages/cli/lib/templates/IgniteUIForWebComponentsTemplate.ts` | `packages/cli/templates/webcomponents/igc-ts/constants.ts` |

jQuery (`packages/cli/templates/jquery/js/`) is legacy and Blazor (`packages/cli/templates/blazor/igb/`) has no component templates. Both are out of scope for template agents unless the user asks.

`@igniteui/angular-templates` is a separate npm package: Angular templates must **not** import from `packages/cli/templates/`. A version Angular shares with Web Components (e.g. `igniteui-webcomponents` for wrapped components) is kept on the Angular side.

## Component Template Layout

```
<root>/<component-id>/
  index.ts                      ← component: BaseComponent from @igniteui/cli-core
  <variant>/                    ← usually "default"; grids use e.g. "basic", "grid-editing"
    index.ts                    ← template: extends the framework's template base class
    files/src/app/__path__/     ← files copied into the generated project
      __filePrefix__.<ext>
```

Component `index.ts` (same shape in all three frameworks):

```ts
import { BaseComponent } from "@igniteui/cli-core";

class IgrRatingComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Rating";
		this.group = "Data Entry & Display";
		this.description = `represents a rating component`;
	}
}
module.exports = new IgrRatingComponent();
```

Variant `index.ts` fields:

| Field | Meaning |
|---|---|
| `components` | Display names of the components used, e.g. `["Rating"]` |
| `controlGroup` | Must equal a key in the framework's `groups.json` and the component's `group` |
| `listInComponentTemplates` | `true` for component templates |
| `id` | The id used by `ig add <id>`. Keep the **same id across frameworks** for the same component |
| `projectType` | `igx-ts`, `igr-ts` or `igc-ts` |
| `name`, `description` | Shown in `ig list` and prompts |
| `packages` | npm packages added to the project on `ig add`, as `name@range`. Use constants from `constants.ts` where one exists |
| `dependencies` | Optional extra registrations (rare) |

Copy the closest existing sibling instead of writing from scratch. Simple input/display components: `rating`, `slider`, `switch`. Data-bound components: `combo`, `list`, `tree`. Charts/gauges: `pie-chart`, `financial-chart`, `radial-gauge`.

## Generated Files Per Framework

| Framework | Placeholders | Files under `files/src/app/__path__/` | Test runner in generated project |
|---|---|---|---|
| Angular | `<%=ClassName%>`, `<%=filePrefix%>`, `<%=igxPackage%>` | `__filePrefix__.ts`, `.html`, `.scss`, `.spec.ts` | Vitest (via `@angular/build:unit-test`) with Angular `TestBed` |
| React | `$(ClassName)`, `$(path)` | `__filePrefix__.tsx`, `__filePrefix__.test.tsx`, `style.module.css` | Vitest + Testing Library |
| Web Components | `$(ClassName)`, `$(path)` | `__filePrefix__.ts`, `__filePrefix__.test.ts` | Vitest |

Angular has two styles. Pick the one the component library dictates:

- **Native Ignite UI for Angular**: `import { IgxSliderComponent } from '<%=igxPackage%>';` and `imports: [...]` in a standalone component; `packages = [IGNITEUI_ANGULAR_PACKAGE]`.
- **Wrapped Web Component** (component not in `igniteui-angular`, e.g. `rating`, `chat`): `defineComponents(IgcXComponent)` from `igniteui-webcomponents`, `schemas: [CUSTOM_ELEMENTS_SCHEMA]`, and `packages` includes `igniteui-webcomponents@<range>`.

React imports components from `igniteui-react` (or `-grids`, `-charts`, `-gauges`) as `Igr*`. Web Components imports `Igc*Component` and calls `defineComponents(...)`.

## Where Ignite UI Versions Are Pinned

Pins live in three kinds of places. **Always regenerate the list with a search; never trust a remembered list.**

1. `constants.ts` per framework (exported `name@range` strings).
2. Project-template manifests: `<root>/projects/*/files/package.json`. Several projects carry their own copy (e.g. Angular `_base` and `side-nav-auth`; Web Components `_base` and `_base_with_home`).
3. Hard-coded `this.packages = ["name@range", ...]` in variant `index.ts` files, used where no constant exists (Angular charts/gauges/maps family, `igniteui-grid-lite`, wrapped `igniteui-webcomponents`; Web Components `igniteui-dockmanager`). Some build the name at runtime, e.g. Angular dock-manager: `` `${resolvePackage(NPM_DOCK_MANAGER)}@~2.1.1` ``.

Run **both** search patterns (ripgrep) over `packages/cli/templates` and `packages/igx-templates`, `*.ts` and `*.json`:

```
(igniteui-[a-z-]+|@infragistics/[a-z-]+|@igniteui/[a-z-]+)["@]\s*:?\s*"?[~^]?[0-9]+\.[0-9]+
```

```
this\.packages.*@[~^]?[0-9]+\.[0-9]+
```

The second catches pins whose package name is computed (template literals). Union the results.

Exclude: compiled `*.js`/`*.js.map`, `node_modules`, `docs_baseline`, `ai-config/files/skills/**` (synced docs), and spec mocks such as `packages/ng-schematics/**/*_spec.ts`.

## Component → Package Map

Where a component's code lives is not always obvious. Verify against the pinned version, but start here:

| Component family | Angular | React | Web Components |
|---|---|---|---|
| Most UI components | `igniteui-angular` | `igniteui-react` | `igniteui-webcomponents` |
| Grids, Pivot, Tree/Hierarchical Grid, Paginator, Action Strip, Query Builder | `igniteui-angular` | `igniteui-react-grids` | `igniteui-webcomponents-grids` |
| Grid Lite | `igniteui-angular` (`/grid-lite` entry) + peer `igniteui-grid-lite` | `igniteui-react` (`grid-lite` subpath) + peer `igniteui-grid-lite` | `igniteui-grid-lite` |
| Charts (category, financial, pie, doughnut) | `igniteui-angular-charts` + `-core` | `igniteui-react-charts` | `igniteui-webcomponents-charts` + `-core` |
| Gauges (linear, radial, bullet graph) | `igniteui-angular-gauges` + `-core` | `igniteui-react-gauges` | `igniteui-webcomponents-gauges` + `-core` |
| Geographic Map | `igniteui-angular-maps` (+ charts, core) | `igniteui-react-maps` (no constant yet) | `igniteui-webcomponents-maps` (no constant yet) |
| Dock Manager | `igniteui-dockmanager` | `igniteui-react-dockmanager` (no constant yet) | `igniteui-dockmanager` |

## Peer Dependencies

A framework's main package declares peers that other template pins must satisfy. For example `igniteui-angular` 22.2.x requires `igniteui-grid-lite ~0.11.0` and `igniteui-webcomponents ~7.4.0`. Check with `npm view <main-pkg>@<pinned> peerDependencies` and compare against every other pin in that framework.

Packages version independently. Known release trains that do **not** share versions:

- `igniteui-angular` vs `igniteui-angular-core` / `-charts` / `-gauges` / `-maps`
- `igniteui-webcomponents` vs `igniteui-webcomponents-core` / `-charts` / `-gauges` / `-grids` / `-inputs` / `-layouts`
- `igniteui-react` / `-grids` vs `igniteui-react-charts` / `-gauges`
- `igniteui-dockmanager`, `igniteui-grid-lite`: their own versions

Check each package on npm (`npm view <pkg> dist-tags.latest`) instead of inferring one from another.

## Auditing Parity Across Frameworks

To answer "which templates are missing or inconsistent?", list component folders per root (excluding `projects`, `custom-templates`, `generate`), read each variant's `id`, `controlGroup` and `listInComponentTemplates`, and check for the framework's test file in `files/`. Build a component-by-framework matrix, then classify each difference:

- **Gap, actionable**: the framework's library ships the component (verify with the MCP `list_components` tool or the package's `.d.ts`; see the map above).
- **Gap, wrappable (Angular only)**: not in `igniteui-angular` but in `igniteui-webcomponents`; could use the wrapped pattern. Human decision.
- **Gap, not actionable**: no library for that framework ships it.
- **Id mismatch**: same component, different ids (`breadcrumb` vs `breadcrumbs`). Recommend adding the canonical id as a new variant, **not renaming**: renaming breaks `ig add <old-id>` for existing users.
- **Library naming difference**: ids differ because the libraries name the component differently (`navigation-drawer` vs `nav-drawer`). Not an error.
- **Group mismatch**, **missing test**, **composite** (e.g. `form`, not one library component; informational).

Hand actionable gaps to `component-template-agent`; for version drift, run `template-version-update-agent` in `dry-run` mode.

## Related Skills

- [`igniteui-cli-build-test`](../igniteui-cli-build-test/SKILL.md)
- [`igniteui-cli-smoke-test`](../igniteui-cli-smoke-test/SKILL.md)
