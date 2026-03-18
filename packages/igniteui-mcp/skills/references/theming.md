# Theming Reference

Full workflow for `igniteui-theming` — palette creation, component-level token overrides, layout adjustments, and authoritative resource URIs.

---

## Table of Contents

1. [Full theme / rebrands](#1-full-theme--rebrands)
2. [Component-level overrides](#2-component-level-overrides)
3. [Layout adjustments](#3-layout-adjustments)
4. [Referencing palette colors in CSS](#4-referencing-palette-colors-in-css)
5. [Authoritative resource URIs](#5-authoritative-resource-uris)
6. [Output format: Sass vs CSS](#6-output-format-sass-vs-css)
7. [Common mistakes](#7-common-mistakes)
8. [Error handling](#8-error-handling)

---

## 1. Full Theme / Rebrands

Call `create_theme` with the primary brand color, secondary color, surface color, light/dark variant, font family, and design system.

```
create_theme(
  primary, secondary, surface,
  variant="light"|"dark",
  fontFamily,
  designSystem="material"|"bootstrap"|"fluent"|"indigo"
)
```

`material` is the default design system. Use `bootstrap`, `fluent`, or `indigo` only when the project's design spec calls for it.

**If `create_theme` reports luminance warnings**: switch to `create_palette`, which auto-generates all intermediate shades from a single base color. Use this when precise swatch control isn't required.

**If brand guidelines specify exact hex values per shade**: use `create_custom_palette` for full control. Constraints:
- All shades in a group must be monochromatic
- Shade order: `50` = lightest → `900` = darkest
- Every shade in the group must be explicitly provided

---

## 2. Component-Level Overrides

Always follow the two-step pattern. Never guess token names — wrong names silently do nothing.

```
Step 1: get_component_design_tokens(componentName)
         → returns every valid token with its current value

Step 2: create_component_theme(platform, designSystem, componentName, { token: value, … })
         → returns the theme output (Sass or CSS)
```

### Button variant names

Buttons require the specific variant name, not the generic `"button"`:

| Variant | Correct name |
|---------|-------------|
| Flat | `flat-button` |
| Contained / filled | `contained-button` |
| Outlined | `outlined-button` |
| FAB | `fab-button` |

### Compound components

`grid`, `combo`, `date-picker`, and similar compound components have required child themes. When you call `create_component_theme` on them, the response includes a list of child components with their scoped selectors. For each child:

```
get_component_design_tokens(childName)
→ create_component_theme(platform, designSystem, childName, { tokens }, scopedSelector)
```

Skip any child and the override will appear to have no effect.

---

## 3. Layout Adjustments

All three layout tools can be scoped to a specific component selector or applied globally.

| Goal | Tool | Key parameter |
|------|------|---------------|
| Component feels too large or small | `set_size` | `size`: `"small"` / `"medium"` / `"large"` |
| Padding feels too tight or loose | `set_spacing` | `spacing`: a CSS multiplier (e.g. `0.75`, `1.25`) |
| Corners too sharp or too round | `set_roundness` | `radiusFactor`: `0` (square) → `1` (maximum round) |

These tools default to CSS output, making them easy to use without a Sass compilation step.

---

## 4. Referencing Palette Colors in CSS

Use `get_color` to get a CSS variable that stays in sync with the active palette, rather than hardcoding hex values.

```
get_color("primary", variant="600", contrast=false)
→ var(--ig-primary-600)

get_color("primary", variant="600", contrast=true)
→ var(--ig-primary-600-contrast)   ← the accessible text color on primary-600
```

Use the `contrast=true` variant for text or icons rendered on top of a palette background color.

---

## 5. Authoritative Resource URIs

Call `read_resource` with these URIs before making palette or typography decisions. The returned content is the single source of truth for naming conventions and design guidelines.

| URI | What it contains |
|-----|------------------|
| `theming://presets/palettes` | Available preset palette names and their base colors |
| `theming://guidance/colors/rules` | Rules for constructing light and dark themes |
| `theming://guidance/colors/usage` | Which shade to assign to which UI role (primary surface, hover, etc.) |
| `theming://platforms/angular` | Angular-specific Sass setup, imports, and module configuration |
| `theming://docs/spacing-and-sizing` | Spacing scale, sizing scale, and how multipliers work |

---

## 6. Output Format: Sass vs CSS

Most theming tools accept an `outputFormat` parameter:

| Format | When to use |
|--------|-------------|
| `sass` | The project has a Sass compilation step. Uses `igniteui-theming` mixins and functions. Default for `create_theme` and `create_component_theme`. |
| `css` | Prototyping, CSS-in-JS, or projects without a Sass build. Emits CSS custom properties directly. Default for `set_size`, `set_spacing`, `set_roundness`. |

If the user's project doesn't use Sass, always request `css` output.

---

## 7. Common Mistakes

- **Guessing token names** — always call `get_component_design_tokens` first; tokens that don't exist produce no error and no effect.
- **Using `"button"` as the component name** — use the specific variant (`"flat-button"`, `"contained-button"`, etc.).
- **Skipping child themes for compound components** — the override will silently do nothing if child themes are omitted.
- **Hardcoding hex values instead of using `get_color`** — hardcoded hex values break when the palette changes.
- **Using `igniteui-mcp-server` for theming** — it provides docs and API only; theming output requires `igniteui-theming`.
- **Requesting Sass output for a project without a Sass build** — check the project setup before choosing the output format.

---

## 8. Error Handling

### `create_theme` reports luminance warnings
The primary or secondary color doesn't meet contrast requirements for the chosen variant. Switch to `create_palette` and let it auto-generate compliant shades, or adjust the base color. Do not suppress the warning and proceed — the generated theme may be inaccessible.

### A theming change has no effect after applying it
Work through this checklist in order:
1. Re-run `get_component_design_tokens` and confirm the token name used is in the returned list.
2. Confirm the correct component variant name was used (e.g. `"contained-button"` not `"button"`).
3. Check whether the component is a compound component — call `create_component_theme` on it again and look for child components in the response.
4. Confirm the scoped selector (if any) matches the element in the DOM.

### `get_component_design_tokens` returns an empty list
The component name is likely wrong. Use `list_components` or `search_docs` to find the correct slug, then retry.

### MCP server `igniteui-theming` is not connected
Tell the user that theming output is unavailable. Continue with docs and API work if that still adds value. Do not invent token names or Sass output as a fallback.
