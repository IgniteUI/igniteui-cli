# Cross-Platform Documentation Architecture (`igniteui-xplat-docs`)

Analysis of how React, Blazor, and WebComponents documentation is built from the shared `igniteui-xplat-docs` repository. This is essential reference for building export/inject pipelines for these platforms.

## Overview

Unlike Angular (which has its own separate `igniteui-docfx` repo), React, Blazor, and WebComponents share **one repository** with platform-conditional content. Source files are platform-agnostic and use variable placeholders and conditional HTML comments.

## Source File Structure

```
doc/en/components/
├── bullet-graph.md                  # Standalone topic (all platforms)
├── geo-map.md                       # Standalone topic
├── grids/
│   ├── _shared/                     # Shared grid templates (expanded per grid type)
│   │   ├── editing.md
│   │   ├── filtering.md
│   │   └── sorting.md
│   ├── grid/                        # Grid-specific overrides
│   ├── tree-grid/                   # Tree Grid-specific overrides
│   ├── hierarchical-grid/           # Hierarchical Grid-specific overrides
│   ├── pivot-grid/                  # Pivot Grid-specific overrides
│   └── data-grid/                   # Data Grid topics
├── charts/                          # Chart component docs (with features/ and types/ subdirs)
├── editors/
├── inputs/                          # Includes combo/ subdirectory
├── layouts/
├── menus/
├── notifications/
├── scheduling/
├── themes/
├── changelog/
├── grid-lite/
├── interactivity/
├── maps/
└── images/
```

## Variable Replacement System

Source files use `{Variable}` placeholders that are replaced per-platform from `docConfig.json` (62KB config file).

### Platform Variables (from `docConfig.json`)

| Variable | Angular | React | WebComponents | Blazor |
|---|---|---|---|---|
| `{Platform}` | Angular | React | Web Components | Blazor |
| `{ProductName}` | Ignite UI for Angular | Ignite UI for React | Ignite UI for Web Components | Ignite UI for Blazor |
| `{IgPrefix}` | Igx | Igr | Igc | Igb |
| `{PackageCore}` | igniteui-angular-core | igniteui-react-core | igniteui-webcomponents-core | IgniteUI.Blazor |
| `{PackageGrids}` | igniteui-angular | igniteui-react-grids | igniteui-webcomponents-grids | IgniteUI.Blazor |
| `{PlatformLower}` | angular | react | web-components | blazor |

### Grid Component Variables (shared templates)

Shared grid docs in `_shared/` use `{ComponentTitle}`, `{ComponentName}`, `{ComponentSelector}` etc. which are mapped per grid type:

| Variable | Grid | Tree Grid | Pivot Grid | Hierarchical Grid |
|---|---|---|---|---|
| `{GridTitle}` | Grid | Tree Grid | Pivot Grid | Hierarchical Grid |
| `{GridName}` (React) | IgrGrid | IgrTreeGrid | IgrPivotGrid | IgrHierarchicalGrid |
| `{GridName}` (Blazor) | IgbGrid | TreeGrid | PivotGrid | HierarchicalGrid |

> **Note on Blazor naming:** The `{GridName}` replacement values in `docConfig.json` are inconsistent — only `GridName` has the `Igb` prefix. However, in actual Blazor code, component **tags** always use the `Igb` prefix: `<IgbGrid>`, `<IgbTreeGrid>`, `<IgbPivotGrid>`, `<IgbColumn>`, `<IgbPaginator>`, etc. The `{GridName}` variable is used in prose text, not in code blocks.
| `{GridSelector}` (WC) | igc-grid | igc-tree-grid | igc-pivot-grid | igc-hierarchical-grid |

Grid component mapping is defined in `docComponents.json`. Each entry also includes `name` and `selectors` fields beyond what's shown here:
```json
{
    "Grid":             { "name": "Grid", "output": "grid", "selectors": ["IgbGrid", "igx-grid", "igc-grid", "IgrGrid"], "types": ["IgbGrid", "IgxGridComponent", "IgcGridComponent", "IgrGrid"] },
    "TreeGrid":         { "name": "TreeGrid", "output": "tree-grid", "selectors": ["IgbTreeGrid", "igx-tree-grid", "igc-tree-grid", "IgrTreeGrid"], "types": [...] },
    "PivotGrid":        { "name": "PivotGrid", "output": "pivot-grid", "selectors": ["IgbPivotGrid", "igx-pivot-grid", "igc-pivot-grid", "IgrPivotGrid"], "types": [...] },
    "HierarchicalGrid": { "name": "HierarchicalGrid", "output": "hierarchical-grid", "selectors": ["IgbHierarchicalGrid", "igx-hierarchical-grid", "igc-hierarchical-grid", "IgrHierarchicalGrid"], "types": [...] }
}
```

## Platform-Conditional Content

Sections are shown/hidden per platform using HTML comment markers:

```md
<!-- Angular, React, WebComponents -->
## Dependencies
npm install --save {PackageCore}
<!-- end: Angular, React, WebComponents -->

<!-- Blazor -->
## Dependencies
NuGet package: IgniteUI.Blazor
<!-- end: Blazor -->
```

The `MarkdownTransformer` strips sections that don't match the target platform.

## Code Fence Filtering

Each platform keeps only relevant code fences:

| Platform | Keeps | Removes |
|---|---|---|
| Angular | `ts`, `html`, `js` | `razor`, `tsx` |
| React | `ts`, `tsx`, `js` | `razor`, `html` |
| WebComponents | `ts`, `html`, `js` | `razor`, `tsx` |
| Blazor | `razor` | `ts`, `tsx`, `html`, `js` |

All platforms keep: `json`, `cmd`, `css`, `scss`

## TOC Structure (`toc.json`)

**Important:** The xplat repo uses `toc.json` (NOT `toc.yml` like Angular).

Located at: `docfx/en/components/toc.json`

```json
[
  {
    "name": "General",
    "header": true
  },
  {
    "exclude": ["Angular", "React", "WebComponents"],
    "name": "Installation",
    "items": [
      { "name": "Adding Licensed NuGet Feed", "href": "general-nuget-feed.md" },
      { "name": "Installing Ignite UI for Blazor", "href": "general-installing-blazor.md" }
    ]
  },
  {
    "exclude": ["Blazor", "Angular"],
    "name": "Getting Started",
    "href": "general-getting-started.md"
  }
]
```

Key difference from Angular's `toc.yml`: nodes have an **`exclude` array** listing platforms for which that entry should be hidden. The gulp `generateTocFor()` function filters these per platform.

## API Mapping (`apiMap/` directory)

The `apiMap/` directory contains per-platform JSON files that map internal/original type names to platform-specific names. These are used by `MarkdownTransformer` to generate correct API documentation hyperlinks.

```
apiMap/
├── Angular/
├── Blazor/
├── React/
│   ├── CheckboxList.JS.r.apiMap.json
│   ├── DataChart.CATEGORYCHART.JS.r.apiMap.json
│   └── ...
└── WebComponents/
```

### Structure of an apiMap file

```json
{
  "types": [
    {
      "originalName": "CheckboxList",
      "originalNamespace": "Infragistics.Controls.Inputs.Implementation",
      "packageName": "igniteui-data-grids",
      "names": [{ "platform": "React", "fileName": "igr-checkbox-list.ts", "mappedName": "IgrCheckboxList" }],
      "members": [
        { "names": [{ "platform": "React", "mappedType": "number", "mappedName": "actualRowHeight" }], "originalName": "ActualRowHeight" },
        { "names": [{ "platform": "React", "mappedType": "method", "mappedName": "addKeyValue" }], "originalName": "AddKeyValue" }
      ]
    }
  ]
}
```

### What the mappings do

1. **Type name resolution** — Maps original C# names to platform-specific names (e.g. `XamBulletGraph` → `IgrBulletGraph` for React, `IgbBulletGraph` for Blazor)
2. **Member name resolution** — Maps PascalCase originals to camelCase platform names (e.g. `BackgroundColor` → `backgroundColor`)
3. **API URL generation** — Uses `packageName` + resolved type name + type kind (class/enum/interface) to build correct API doc URLs:
   - React: `.../api/docs/typescript/latest/classes/igrbulletgraph.html`
   - Blazor: `.../blazor-api/api/IgniteUI.Blazor.Controls.IgbBulletGraph.html`
4. **Package ownership** — Each type has a `packageName` (e.g. `igniteui-react-core`) that determines the URL path segment

### How docs reference API types

Source markdown uses `mentionedTypes` in frontmatter:
```yaml
mentionedTypes: ["XamBulletGraph"]
```

The `MarkdownTransformer` resolves these via apiMap lookups and generates clickable API links in the output. Inline backtick references like `` `TransitionDuration` `` are also resolved to API member links.

### Implications for our pipeline

If we use **Option A** (run gulp build first), API links are already resolved in the output. If we use **Option B** (custom export), we'd need to either replicate the apiMap resolution logic or accept unresolved `mentionedTypes` references in the compressed docs.

## Sample References

The xplat docs use **backtick syntax** for samples (not `<code-view>` like Angular):

```md
`sample="/gauges/bullet-graph/animation", height="155", alt="{Platform} Bullet Graph Example"`
```

This is different from Angular's `<code-view style="..." iframe-src="...">` tags. The `MarkdownTransformer` converts these to the appropriate iframe/sample embed during build.

> **Note:** A few xplat files also use `<code-view>` tags (e.g., `grids/hierarchical-grid/overview.md`, `grids/tree.md`, `grids/_shared/cascading-combos.md`), so the backtick syntax is the *primary* pattern but not the only one.

## Build Pipeline (Gulp)

```
npm run buildReact      →  tsc && gulp buildOutputReact
npm run buildBlazor     →  tsc && gulp buildOutputBlazor
npm run buildWC         →  tsc && gulp buildOutputWC
```

Each runs: `verifyFiles` → `buildCoreAndTOC` (= `buildTOC` → `buildCore` → `buildStats`)

### Build Steps

1. **buildTOC**: Reads `toc.json`, filters by platform `exclude` arrays, generates `toc.yml`, produces `includedTopics` list
2. **buildCore**: Cleans `dist/<Platform>/`, runs `MarkdownTransformer.transformContent()` on each included topic:
   - Resolves all `{Variable}` replacements from `docConfig.json`
   - Strips non-matching platform conditional sections
   - Filters code fences by language
   - Expands shared grid templates (`_shared/` → `grid/`, `tree-grid/`, etc.)
   - Resolves API links via `apiMap/` JSON files
3. **buildStats**: Generates sample usage stats to `stats/docStats-<Platform>.json`

### Full DocFX Build (includes site generation)

```
npm run build-docfx-react   →  verifyFiles → buildReact → buildSite → replaceEnvironmentVariables → updateSiteMap → buildStats
```

### Output

Platform-specific `.md` files go to `dist/<Platform>/en/components/` ready for docfx processing.

## Environment Variables

`docfx/en/environment.json` provides API URLs per environment:

```json
{
    "production": {
        "dvApiBaseUrl": "https://www.infragistics.com",
        "wcApiUrl": "https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest"
    }
}
```

Note: Unlike Angular's `environment.json` which has `angularApiUrl` and `sassApiUrl`, the xplat one has `dvApiBaseUrl` (shared across platforms) and `wcApiUrl` (WebComponents-specific).

## Sample Browser URLs (from `docConfig.json`)

| Platform | Production URL |
|---|---|
| React | `https://www.infragistics.com/react-demos` |
| Blazor | `https://www.infragistics.com/blazor-client` |
| WebComponents | `https://www.infragistics.com/webcomponents-demos` |
| Angular (xplat) | `https://www.infragistics.com/angular-demos-dv` |

## Key Differences from Angular (`igniteui-docfx`)

| Aspect | Angular (`igniteui-docfx`) | xplat (`igniteui-xplat-docs`) |
|---|---|---|
| TOC format | `toc.yml` | `toc.json` with `exclude` arrays |
| Variable system | `@@include()` / `@@if` / `@@variable` | `{Platform}`, `{ComponentName}`, etc. from `docConfig.json` |
| Platform filtering | None (Angular-only repo) | HTML comments `<!-- Blazor -->...<!-- end: Blazor -->` |
| Code fence filtering | None | Keeps only matching language per platform |
| Grid templates | `grids_templates/` with `@@if (igxName)` | `grids/_shared/` with `docComponents.json` mapping |
| Sample references | `<code-view>` with `iframe-src` | `` `sample="/path", height="X"` `` backtick syntax |
| Config | `environment.json` only | `docConfig.json` (62KB, all replacements) + `environment.json` |
| Build tool | docfx CLI directly | Gulp + `MarkdownTransformer` + docfx |
| Env var replacement | `{environment:angularApiUrl}` in source | Same pattern, resolved via `replaceEnvironmentVariables()` in gulp |

## Implications for Our Pipeline

To process React/Blazor/WebComponents docs, we have two options:

### Option A: Run the gulp build first (recommended)
Run `npm run buildReact` (or Blazor/WC) to produce platform-resolved `.md` files in `dist/<Platform>/en/components/`, then use those as input to our export step. This leverages the existing `MarkdownTransformer` and avoids reimplementing its complex logic.

### Option B: Reimplement transformation in our export script
Parse `toc.json`, apply `docConfig.json` replacements, strip platform conditionals, filter code fences. This is significantly more work and risks diverging from the official build.

### Either way, we need to:
1. Use `toc.json` (not `.yml`) as source of truth, filtering by platform's `exclude` array
2. Handle the `` `sample="..."` `` syntax instead of `<code-view>` for sample injection
3. Use `docConfig.json` replacements specific to each platform
4. Use `environment.json` for API URL resolution (`dvApiBaseUrl`, `wcApiUrl`)
5. Adapt the compress prompt for each platform's prefix (`Igr`/`Igb`/`Igc`) and naming conventions
