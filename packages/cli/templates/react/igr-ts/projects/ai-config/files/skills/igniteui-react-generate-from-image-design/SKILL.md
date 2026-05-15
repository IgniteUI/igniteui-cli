---
name: igniteui-react-generate-from-image-design
description: Implement React application views from design images using Ignite UI for React components. Uses MCP servers (igniteui-cli, igniteui-theming) and tools for component discovery, docs lookup, and theming to choose components, generate theme tokens, and follow React-specific best practices. Triggers when the user provides a design image (screenshot, mockup, wireframe) and wants it built as a working React view with Ignite UI for React. Also triggers when the user asks to "implement this design", "build this UI", "convert this mockup", or "create a page from this image" in an Ignite UI React project.
user-invocable: true
---

# Implementing Ignite UI React Views from Design Images

## MANDATORY AGENT PROTOCOL

Before writing any implementation code, you must complete these steps in order:

1. Analyze the image and identify all visible regions and UI patterns.
2. Read [reference/component-mapping.md](reference/component-mapping.md) and [reference/gotchas.md](reference/gotchas.md).
3. This skill is React-only. Check package routing, theme CSS imports, or licensing only when imports, packages, or theming depend on it.
4. To apply a theme, use the theming workflow from this skill and the dedicated `igniteui-react-customize-theme` skill; use the `igniteui-theming` MCP tools instead of styling from memory. This skill is React-only, so hardcode `platform: "react"` in theme-generation calls.
5. Call `get_doc` for every chosen component family before using it.
6. Only then start coding.

## Workflow

1. **Analyze the design image** - Read the image, identify every UI section, component, and layout structure.
2. **Confirm package routing or theme setup if needed** - this skill is React-only; check package routing, theme CSS imports, or licensing only when imports, packages, or theming depend on it.
3. **Discover components** - Call `list_components` with targeted filters to find matching components for each UI pattern.
4. **Look up component docs** - Call `get_doc` for every chosen component family before coding.
5. **Generate theme** - (a) To generate a theme, first extract colors and create a color palette using `create_palette` or `create_custom_palette` depending on the scenario. Then extract elevations and call `create_elevations`. Then extract typography and call `create_typography`. Then call `create_theme` with the palette, elevations, and typography. (b) After a theme exists, prefer design tokens, or scoped semantic CSS variables over raw literals. (c) For every Ignite UI component, call `get_component_design_tokens`, map extracted image tokens to token roles, then call `create_component_theme` with the tokens differing from the global theme for the specific component.
6. **Implement** - Build the screenshot-first layout, data, and view components.
7. **Refine** - Use the `set_size`, `set_spacing`, and `set_roundness` tools to refine the view's visual fidelity against the image, then iterate on implementation and theming until the view matches the design closely.
8. **Validate** - Build, test, run, compare against the image, and fix differences.

## Step 1: Analyze the Design Image

Read the input image carefully. For each visual section, identify:

- **Layout structure**: grid rows/columns, sidebar, navbar, content area proportions, and estimated fixed widths or percentages for major regions.
> Note: Do not guess the exact CSS properties at this stage; just identify the high-level structure and relative proportions. Do not try to fit the view into exact breakpoints or pixel values. Try to generate a flexible layout that preserves the observed proportions and can adapt to different screen sizes. You will refine the exact CSS rules in Step 8 after building a first version of the view.
- **Component type**: chart, list, card, map, gauge, table, form, etc.
- **Color palette**: primary, secondary, surface/background, accent, text colors
- **Typography**: font sizes, weights, letter-spacing patterns
- **Surface styling**: borders, border-radius, shadows, elevation, divider treatments
- **Data patterns**: what mock data is needed (time series, lists, KPIs, geographic)
- **Spacing system**: translate observed padding and gaps into a small reusable scale derived from the design

Before writing code, create a decomposition table with one row per visible region containing:

| Region | Visual role | Candidate component | Custom CSS required | Data type |
|---|---|---|---|---|
| Example: sidebar item list | repeated rows with icon + label | `IgrList` | yes - item height, icon size | domain-appropriate mock data |
| Example: top bar | brand + tabs + search | `IgrNavbar` | yes - multi-zone flex layout | n/a |
| Example: side panel | always-visible navigation | `IgrNavDrawer` | yes - width, item styling | n/a |

Start every region with the most appropriate Ignite UI component from [reference/component-mapping.md](reference/component-mapping.md). Only fall back to plain semantic HTML when the component DOM structure is fundamentally incompatible with the design after CSS overrides are considered. Document the reason for any plain-HTML fallback in a code comment.

Before writing code, produce a compact implementation brief that captures:

- chosen components per region
- fallback HTML regions
- theme strategy
- package needs
- major assumptions

After the table, translate the image into CSS Grid rows and columns first. Preserve desktop proportions before adding responsive behavior, then define explicit breakpoint stacking rules for smaller screens.

## Step 2-3: Use MCP Tools for Discovery

This skill is React-only. Check package routing, theme CSS imports, or licensing only when imports, packages, or theming depend on it.

Then call `list_components` with `framework: "react"` and relevant filters to find components matching each UI pattern. Common filters:

- `chart`, `sparkline` - for data visualization
- `list view`, `card`, `avatar`, `badge` - for data display
- `nav`, `navbar`, `drawer` - for navigation
- `progress`, `gauge` - for metrics
- `map` - for geographic displays
- `grid`, `grid lite` - for tabular data

Use narrow search terms to reduce noisy MCP results. Search for the specific UI pattern you need, such as `list view` instead of `list`.

For component-to-Ignite-UI mapping, see [reference/component-mapping.md](reference/component-mapping.md).

## Step 4: Look Up Component API

For every chosen component category, call `get_doc` with the doc name from `list_components` results (e.g., `name: "card"`, `framework: "react"`). Use the doc `name` field from the MCP results, not the result title shown in the list. This is mandatory before coding and gives exact React usage patterns, prop names, slot structure, event signatures, and any required module registration.

Call `search_docs` for feature-based questions (e.g., "how to configure [component] for [specific behavior or styling need]").

## Step 5: Generate Theme with MCP

Use this skill for the image-to-view theming workflow only. The dedicated [`igniteui-react-customize-theme`](../igniteui-react-customize-theme/SKILL.md) skill remains the source of truth for palette-token behavior, global theme rules, and broader theming-system guidance.

### 5a - Existing app guard (always run first)

Before generating any theme code, inspect the app entry points and shared global styles. Typical files include `main.tsx`, `index.tsx`, `App.tsx`, `app/layout.tsx`, `src/index.css`, and other shared CSS files. Look for:

- existing theme CSS imports such as `igniteui-webcomponents/themes/...`
- grid theme imports such as `igniteui-react-grids/grids/themes/...`
- existing palette-token overrides or semantic CSS variables already used by the app

Treat a plain stock theme CSS import as required baseline setup, not as evidence of an already customized design system.

- **Existing customized theme found** -> the app already has meaningful palette or token overrides. Do **not** call `create_theme` or `create_palette` unless the user explicitly wants a global theme change. Instead:
  1. Inspect the existing theme definition and any exposed palette tokens or semantic CSS variables
  2. Reuse the current design system, variant, and palette tokens wherever they already match the design image
  3. Skip to **5c** and apply only minimal scoped overrides for the new view's components
- **Only stock theme CSS import found** -> keep the import in place and proceed with **5b** to generate the minimal override layer needed for the design
- **No theme import found** -> add the required theme CSS import first, then proceed with **5b**

### 5b - Global theme generation (new projects)

Follow this order - MCP guidance first, image extraction second:

1. **Read MCP guidance first** - call `theming://guidance/colors/rules` (or `get_theming_guidance`) before looking at the image. This tells you the available theme inputs and any luminance or variant constraints.
2. **Resolve the design system** - infer it from the existing workspace, explicit user request, or the closest visual match in the design. Do not assume one if a stronger signal exists.
3. **Extract from the image** - now that you know the available slots, extract values only for the inputs you actually need.
4. **Call `create_theme` or `create_palette`** with the extracted seed values.

```
create_theme({
  primaryColor: "<color extracted from image for primary slot>",
  secondaryColor: "<color extracted from image for secondary slot>",
  surfaceColor: "<color extracted from image for surface/background slot>",
  variant: "<resolved theme variant>",
  platform: "react",
  fontFamily: "<font extracted from image or existing app>",
  designSystem: "<resolved design system>"
})
```

Read and act on any luminance warnings returned. If the design needs multiple surface depths that a single generated surface color does not cover, use `create_custom_palette` or define semantic CSS variables for the additional depths in the app's global stylesheet.

Use `create_palette` for straightforward designs with a small, coherent color system. Use `create_custom_palette` when the design has multiple distinct surface depths, several accent families, or when the generated palette cannot reliably match the screenshot.

### 5c - Per-component token discovery and mapping (always run)

> **Scope:** this step applies only to **core Ignite UI React components** (grid, grid lite, list, navbar, nav drawer, card, inputs, chips, avatar, etc.). DV components - charts, maps, gauges, and sparklines - do not use the component-token theme generation flow in this skill. Skip this step for them and set their visual properties exclusively via component props as described in [reference/gotchas.md](reference/gotchas.md) and in Step 7.

For **every** core Ignite UI component chosen in Steps 3-4, follow this MCP-first loop - query MCP before touching the image:

1. **Discover (MCP first)** - call `get_component_design_tokens(component)` before looking at the image for that component. Read the full token list with names, types, and descriptions. Identify which tokens correspond to visible surfaces, text, borders, icons, and interaction states.
2. **Extract (image second)** - now that you know the exact token names, go to the image region for that component and read the exact token value for each relevant token slot. Do not guess; zoom into the component region.
3. **Generate** - call `create_component_theme(component, platform, licensed, tokens)` passing only the tokens whose resolved value differs from the global theme. This produces scoped CSS or SCSS with the minimal override set.

**Example - theming a grid:**
- `get_component_design_tokens("grid")` returns `header-background`, `content-background`, `row-hover-background` among many others
- Look at the grid region in the image -> extract the color intent for header, row background, and hover state
- Resolve each value to a palette token or local semantic CSS variable
- Call `create_component_theme("grid", ...)` with only `{ "header-background": "<resolved token>", "content-background": "<resolved token>", "row-hover-background": "<resolved token>" }`

Apply the generated theme blocks in CSS using a scoped wrapper and the underlying web component selectors shown in the MCP output. In selectors, use the rendered `igc-*` tags or `::part()` hooks where applicable.

Do not run `create_component_theme` for regions built with custom HTML/CSS only.

### 5d - Theming sequence summary

Apply in this exact order:

1. Inspect the entry point and shared styles -> customized theme, stock theme only, or missing import?
2. Create or update the global theme layer: add the required theme CSS import if missing, then `create_theme` or `create_palette` as needed (Step 5b)
3. For each Ignite UI component: `get_component_design_tokens` -> map image design tokens -> resolve values to design tokens or semantic CSS variables -> `create_component_theme` (Step 5c)
4. Use `get_color` after palette generation whenever a palette token can represent the final color intent

## Step 6: Install Additional Packages

Core UI components ship with `igniteui-react`. Grid Lite requires both `igniteui-react` and `igniteui-grid-lite`. Advanced grids, charts, maps, and gauges use separate React package families and may also appear under `@infragistics/igniteui-react-*` in licensed workspaces. These packages are version-sensitive: determine the installed Ignite UI version, resolve the compatible published package version, and install only the package set required by the selected components. See [reference/component-mapping.md](reference/component-mapping.md) for package names and import patterns.

Theme CSS imports are also required:

- core components -> `igniteui-webcomponents/themes/<variant>/<design-system>.css`
- grids -> `igniteui-react-grids/grids/themes/<variant>/<design-system>.css`

If packages are missing, identify the exact packages and versions required first, then ask for approval before installing packages or changing dependency manifests.

Charts, maps, and gauges also require explicit `*.register()` calls at module level in React files. Grid Lite does **not** require registration.

## Step 7: Implement

### Structure

- **Layout**: use Ignite UI layout and data-display components as the starting point for standard regions, then apply CSS Grid/Flexbox and component overrides to match the screenshot. Only substitute plain semantic HTML when an Ignite UI component remains structurally incompatible after a genuine attempt.
- **Data**: use typed mock data that matches the design's density and domain; add models, helpers, or hooks only when they help the implementation.
- **View**: keep layout, spacing, typography, and surface styling in CSS modules or shared CSS rather than inline styles wherever practical.
- **Theming**: apply the resolved design system and theme variant from Step 5, and keep color usage aligned with palette tokens, or local semantic CSS variables.

### Implementation Checks

- Follow the surrounding repo conventions and the existing React skills in this repo, especially [`igniteui-react-components`](../igniteui-react-components/SKILL.md) and [`igniteui-react-customize-theme`](../igniteui-react-customize-theme/SKILL.md)
- Use [reference/component-mapping.md](reference/component-mapping.md) for component-choice and semantic-fallback rules
- Use [reference/gotchas.md](reference/gotchas.md) for components, theming, and API edge cases instead of re-encoding those rules inline
- Favor Ignite UI components over custom HTML when both approaches can reach similar visual fidelity
- Ensure the required theme CSS imports are present before component usage
- Preserve spacing, hierarchy, and data density before adding extra interactivity
- Avoid generic placeholders when the image shows domain-specific content
- Document brief assumptions when the image is ambiguous instead of silently guessing

## Step 8: Refine

After the first implementation pass, use the `set_size`, `set_spacing`, and `set_roundness` tools to adjust the view's visual properties and close the gap with the image. Focus on the most visually distinctive elements first (e.g., panel proportions, chart shape, button prominence) before tuning smaller details (e.g., row heights, spacing between regions).

## Step 9: Validate

Use this validation loop explicitly:

1. Build
2. Test
3. Run the app
4. Visually compare against the image
5. Adjust and repeat

In terminal-only environments, the user performs the visual comparison and provides feedback on any mismatches. Only perform the visual check directly when the environment has browser and screenshot capabilities available to the agent.

Use this checklist during the first visual comparison:

- panel proportions
- control density
- chart shape
- legend placement
- button prominence
- row heights
- spacing between regions

Fix TypeScript, JSX, styling, or runtime errors immediately during the build/test steps. Use the build output, component docs, [reference/gotchas.md](reference/gotchas.md), and the user's visual feedback to close the remaining gaps. Typical adjustments include:

- revisiting chart data density, smoothing, marker visibility, or missing module registration
- adjusting layout ratios, region spacing, or row heights
- correcting navigation mode, panel chrome, or component choice
- tuning map/filter treatment and dark-surface hierarchy
- re-examining the original design for overlooked sections, missing theme imports, or missing packages

After the build succeeds with zero errors, refine layout proportions, color values, missing sections, and typography until the view matches closely.
