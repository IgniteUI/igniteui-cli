---
title: "Web Components Pivot Grid Theming - Ignite UI for Web Components"
description: A Ignite UI for Web Components Pivot Grid theme can be built from just a background, foreground and accent color. Generate the derived --ig-grid-* tokens with grid-theme(), the Theming MCP or the theme playground.
keywords: "Web Components Pivot Grid theming, Web Components Pivot Grid styling, grid theme, grid-theme, derived tokens, theming mcp, css variables, Ignite UI for Web Components, Infragistics"
license: commercial
_canonicalLink: "grids/grid/theming"
llms:
  description: "A Ignite UI for Web Components Pivot Grid theme can be built from a background, foreground and accent color, with every other --ig-grid-* color derived. Generate the derived tokens with grid-theme() (Sass), the Theming MCP or the theme playground; without them each property is independent."
_componentKey: PivotGrid
_tocName: Theming
_premium: true
---
# Web Components Pivot Grid Theming

A Pivot Grid theme can be built from just a **background**, **foreground** and **accent** color, with every other color derived from them - the header, the rows, the borders, the summaries, the toolbar, the paginator and the filtering popups. The derived colors don't need to be written by hand; generate them with `grid-theme()`, the [Theming MCP](../../ai/theming-mcp.md) or the [theme playground](#try-it).

The derivation lives in the generated theme, not in the component. Out of the box, each `--ig-grid-*` property is independent and changes only its own part of the Pivot Grid - see [Fine-tune individual properties](#fine-tune-individual-properties).

**Note:** 
There is no separate set of tokens per grid. The Grid, Tree Grid, Hierarchical Grid and Pivot Grid all read the same `--ig-grid-*` custom properties, so the same theme applies to any of them without modification.

## Web Components Pivot Grid Theming Example

The four themes below are custom - written for this sample, not shipped with the library. They share one generated block of derived tokens, so each theme only sets the primary tokens plus a few surface and border colors. Switching between them shows how far those few values reach in a generated theme.

```typescript
export class PivotDataFlatItem {
    public constructor(init: Partial<PivotDataFlatItem>) {
        Object.assign(this, init);
    }

    public ProductName: string;
    public ProductUnitPrice: number;
    public SellerName: string;
    public SellerCity: string;
    public Date: string;
    public Value: number;
    public NumberOfUnits: number;

}
export class PivotDataFlat extends Array<PivotDataFlatItem> {
    public constructor(items: Array<PivotDataFlatItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 12.8, SellerName: `Stanley Brooker`, SellerCity: `Seattle`, Date: `01/01/2007`, Value: 94.4, NumberOfUnits: 282 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 49.6, SellerName: `Elisa Longbottom`, SellerCity: `Sofia`, Date: `01/05/2007`, Value: 70.8, NumberOfUnits: 296 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 3.6, SellerName: `Lydia Burson`, SellerCity: `Tokyo`, Date: `01/06/2007`, Value: 35.8, NumberOfUnits: 68 }),
                // ... 497 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.themed-grid {
    --ig-grid-grid-elevation: var(--ig-elevation-2);
    --ig-grid-drag-elevation: var(--ig-elevation-5);
    --ig-grid-grouparea-color: color-mix(in srgb, var(--ig-grid-header-text-color) 60%, var(--ig-grid-header-background));
    --ig-grid-grouparea-background: var(--ig-grid-header-background);
    --ig-grid-drop-area-text-color: color-mix(in srgb, var(--ig-grid-header-text-color) 80%, var(--ig-grid-header-background));
    --ig-grid-drop-area-icon-color: var(--ig-grid-drop-area-text-color);
    --ig-grid-drop-area-background: lch(from var(--ig-grid-header-background) calc(l + (50 - l) * 0.1 + sign(50 - l) * 5) c h);
    --ig-grid-drop-area-on-drop-background: lch(from var(--ig-grid-header-background) calc(l + (50 - l) * 0.1 + sign(50 - l) * 5) c h);
    --ig-grid-header-background: color-mix(in srgb, var(--ig-grid-foreground) 6%, var(--ig-grid-background));
    --ig-grid-sortable-header-icon-hover-color: var(--ig-grid-accent-color);
    --ig-grid-sorted-header-icon-color: hsl(from var(--ig-grid-accent-color) h s l/0.7);
    --ig-grid-header-border-width: 0.0625rem;
    --ig-grid-header-border-style: solid;
    --ig-grid-header-border-color: color-mix(in srgb, var(--ig-grid-header-text-color) 20%, var(--ig-grid-header-background));
    --ig-grid-action-border-color: color-mix(in srgb, var(--ig-grid-foreground) 20%, var(--ig-grid-background));
    --ig-grid-ghost-header-background: var(--ig-grid-header-background);
    --ig-grid-ghost-header-text-color: var(--ig-grid-header-text-color);
    --ig-grid-ghost-header-icon-color: var(--ig-grid-header-text-color);
    --ig-grid-excel-filtering-header-foreground: var(--ig-grid-foreground);
    --ig-grid-excel-filtering-subheader-foreground: var(--ig-grid-foreground);
    --ig-grid-excel-filtering-actions-foreground: var(--ig-grid-foreground);
    --ig-grid-excel-filtering-actions-icon-color: var(--ig-grid-foreground);
    --ig-grid-excel-filtering-actions-hover-foreground: var(--ig-grid-foreground);
    --ig-grid-excel-filtering-actions-hover-icon-color: var(--ig-grid-foreground);
    --ig-grid-excel-filtering-actions-selected-icon-color: var(--ig-grid-accent-color);
    --ig-grid-excel-filtering-actions-hover-background: color-mix(in srgb, var(--ig-grid-accent-color) 8%, var(--ig-grid-background));
    --ig-grid-excel-filtering-actions-disabled-foreground: color-mix(in srgb, var(--ig-grid-foreground) 50%, var(--ig-grid-background));
    --ig-grid-excel-filtering-border-color: color-mix(in srgb, var(--ig-grid-foreground) 16%, var(--ig-grid-background));
    --ig-grid-grid-border-color: transparent;
    --ig-grid-content-background: var(--ig-grid-background);
    --ig-grid-content-text-color: var(--ig-grid-foreground);
    --ig-grid-row-odd-background: var(--ig-grid-background);
    --ig-grid-row-even-background: var(--ig-grid-background);
    --ig-grid-body-column-border-color-odd: var(--ig-grid-background);
    --ig-grid-body-column-border-color-even: var(--ig-grid-background);
    --ig-grid-row-odd-text-color: var(--ig-grid-foreground);
    --ig-grid-row-even-text-color: inherit;
    --ig-grid-tree-selected-filtered-row-text-color: var(--ig-secondary-300);
    --ig-grid-row-selected-text-color: var(--ig-grid-foreground);
    --ig-grid-row-hover-background: color-mix(in srgb, var(--ig-grid-accent-color) 8%, var(--ig-grid-row-odd-background));
    --ig-grid-body-column-hover-border-color: color-mix(in srgb, var(--ig-grid-accent-color) 8%, var(--ig-grid-row-odd-background));
    --ig-grid-row-hover-text-color: var(--ig-grid-foreground);
    --ig-grid-row-border-width: 0.0625rem;
    --ig-grid-row-border-style: solid;
    --ig-grid-row-border-color: hsl(from color-mix(in srgb, var(--ig-grid-foreground) 16%, var(--ig-grid-background)) h s l/0.38);
    --ig-grid-row-drag-color: var(--ig-grid-foreground);
    --ig-grid-pinned-border-width: 0.125rem;
    --ig-grid-pinned-border-style: solid;
    --ig-grid-pinned-border-color: color-mix(in srgb, var(--ig-grid-foreground) 20%, var(--ig-grid-background));
    --ig-grid-cell-active-border-width: 0.0625rem;
    --ig-grid-cell-active-border-color: var(--ig-grid-accent-color);
    --ig-grid-cell-selected-background: color-mix(in srgb, var(--ig-grid-accent-color) 24%, var(--ig-grid-background));
    --ig-grid-tree-selected-filtered-cell-text-color: var(--ig-secondary-500);
    --ig-grid-cell-selected-text-color: var(--ig-grid-foreground);
    --ig-grid-cell-editing-background: var(--ig-grid-background);
    --ig-grid-cell-editing-foreground: var(--ig-grid-foreground);
    --ig-grid-cell-editing-focus-foreground: var(--ig-grid-foreground);
    --ig-grid-edit-mode-color: var(--ig-grid-accent-color);
    --ig-grid-edited-row-indicator: color-mix(in srgb, var(--ig-grid-foreground) 16%, var(--ig-grid-background));
    --ig-grid-cell-new-color: var(--ig-grid-foreground);
    --ig-grid-cell-edited-value-color: color-mix(in srgb, var(--ig-grid-foreground) 80%, var(--ig-grid-background));
    --ig-grid-cell-disabled-color: color-mix(in srgb, var(--ig-grid-foreground) 50%, var(--ig-grid-background));
    --ig-grid-resize-line-color: var(--ig-grid-accent-color);
    --ig-grid-drop-indicator-color: var(--ig-grid-accent-color);
    --ig-grid-group-label-column-name-text: var(--ig-grid-accent-color);
    --ig-grid-group-label-icon: var(--ig-grid-accent-color);
    --ig-grid-group-label-text: color-mix(in srgb, var(--ig-grid-foreground) 80%, var(--ig-grid-background));
    --ig-grid-expand-all-icon-color: color-mix(in srgb, var(--ig-grid-foreground) 70%, var(--ig-grid-background));
    --ig-grid-expand-all-icon-hover-color: color-mix(in srgb, var(--ig-grid-foreground) 80%, var(--ig-grid-background));
    --ig-grid-expand-icon-color: color-mix(in srgb, var(--ig-grid-foreground) 60%, var(--ig-grid-background));
    --ig-grid-expand-icon-hover-color: color-mix(in srgb, var(--ig-grid-foreground) 70%, var(--ig-grid-background));
    --ig-grid-active-expand-icon-color: var(--ig-gray-500);
    --ig-grid-active-expand-icon-hover-color: var(--ig-primary-500);
    --ig-grid-group-count-background: color-mix(in srgb, var(--ig-grid-foreground) 12%, var(--ig-grid-background));
    --ig-grid-group-count-text-color: var(--ig-grid-foreground);
    --ig-grid-group-row-background: color-mix(in srgb, var(--ig-grid-foreground) 6%, var(--ig-grid-background));
    --ig-grid-group-row-selected-background: color-mix(in srgb, var(--ig-grid-foreground) 6%, var(--ig-grid-background));
    --ig-grid-filtering-header-background: var(--ig-grid-background);
    --ig-grid-filtering-header-text-color: var(--ig-grid-foreground);
    --ig-grid-filtering-row-background: var(--ig-grid-background);
    --ig-grid-filtering-row-text-color: var(--ig-grid-foreground);
    --ig-grid-filtering-dialog-background: var(--ig-grid-background);
    --ig-grid-tree-filtered-text-color: var(--ig-gray-500);
    --ig-grid-row-highlight: var(--ig-grid-accent-color);
    --ig-grid-row-ghost-background: var(--ig-grid-background);
    --ig-grid-row-ghost-border-color: hsl(from color-mix(in srgb, var(--ig-grid-foreground) 16%, var(--ig-grid-background)) h s l/0.38);
    --ig-grid-drop-area-border-radius: clamp(0rem, calc(var(--ig-radius-factor, 1) * 1rem), 1rem);
    --ig-grid-summaries-border-color: var(--ig-gray-400);
    --ig-grid-summaries-patch-background: color-mix(in srgb, var(--ig-grid-foreground) 12%, var(--ig-grid-background));
    --ig-grid-active-state-border-style: solid;
    --ig-grid-header-text-color: var(--ig-grid-foreground);
    --ig-grid-header-selected-background: color-mix(in srgb, var(--ig-grid-accent-color) 12%, var(--ig-grid-header-background));
    --ig-grid-header-selected-text-color: var(--ig-grid-header-text-color);
    --ig-grid-row-selected-background: color-mix(in srgb, var(--ig-grid-accent-color) 12%, var(--ig-grid-background));
    --ig-grid-row-selected-hover-background: color-mix(in srgb, var(--ig-grid-accent-color) 16%, var(--ig-grid-background));
    --ig-grid-row-selected-hover-text-color: var(--ig-grid-foreground);
    --ig-grid-body-column-selected-border-color: color-mix(in srgb, var(--ig-grid-accent-color) 16%, var(--ig-grid-background));
    --ig-grid-body-column-hover-selected-border-color: color-mix(in srgb, var(--ig-grid-accent-color) 12%, var(--ig-grid-background));
    --ig-grid-cell-selected-within-background: color-mix(in srgb, var(--ig-grid-accent-color) 24%, var(--ig-grid-background));
    --ig-grid-cell-selected-within-text-color: var(--ig-grid-foreground);
    --ig-grid-foreground: hsla(from color(from var(--ig-grid-background) var(--y-contrast)) h 0 l/1);
}

.theme-studio {
    --ig-size: var(--ig-size-large);
    --ig-radius-factor: 0.6;

    --ig-grid-background: #faf4ed;
    --ig-grid-foreground: #575279;
    --ig-grid-accent-color: #907aa9;
    --ig-grid-header-background: #fffaf3;
    --ig-grid-header-text-color: hsla(from color(from var(--ig-grid-header-background) var(--y-contrast)) h 0 l/1);
    --ig-grid-header-border-color: #dfdad9;
    --ig-grid-row-border-color: #f2e9e1;
    --ig-grid-grid-border-color: #dfdad9;
    --ig-grid-grid-elevation: 0 1px 3px rgba(87, 82, 121, 0.1), 0 1px 2px rgba(87, 82, 121, 0.06);
}

.theme-ledger {
    --ig-size: var(--ig-size-small);
    --ig-radius-factor: 0;

    --ig-grid-background: #eceff4;
    --ig-grid-foreground: #2e3440;
    --ig-grid-accent-color: #5e81ac;
    --ig-grid-header-background: #d8dee9;
    --ig-grid-header-text-color: hsla(from color(from var(--ig-grid-header-background) var(--y-contrast)) h 0 l/1);
    --ig-grid-row-odd-background: #eceff4;
    --ig-grid-row-even-background: #e5e9f0;
    --ig-grid-body-column-border-color-odd: #d8dee9;
    --ig-grid-body-column-border-color-even: #d8dee9;
    --ig-grid-row-border-color: #d8dee9;
    --ig-grid-grid-border-color: #c8d0dc;
}

.theme-editorial {
    --ig-size: var(--ig-size-large);
    --ig-radius-factor: 0;

    --ig-grid-background: #333c43;
    --ig-grid-foreground: #d3c6aa;
    --ig-grid-accent-color: #a7c080;
    --ig-grid-header-background: #3a464c;
    --ig-grid-header-text-color: hsla(from color(from var(--ig-grid-header-background) var(--y-contrast)) h 0 l/1);
    --ig-grid-row-border-color: #333c43;
    --ig-grid-grid-border-color: #333c43;
}

.theme-midnight {
    --ig-size: var(--ig-size-medium);
    --ig-radius-factor: 0.25;

    --ig-grid-background: #282a36;
    --ig-grid-foreground: #f8f8f2;
    --ig-grid-accent-color: #bd93f9;
    --ig-grid-header-background: #21222c;
    --ig-grid-header-text-color: hsla(from color(from var(--ig-grid-header-background) var(--y-contrast)) h 0 l/1);
    --ig-grid-body-column-border-color-odd: #44475a;
    --ig-grid-body-column-border-color-even: #44475a;
    --ig-grid-row-border-color: #44475a;
    --ig-grid-grid-border-color: #44475a;
}

.grid-theming-sample {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-sizing: border-box;
}

.theme-picker {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    align-self: flex-start;
}

.theme-picker__label {
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    color: var(--ig-gray-700);
}

.theme-picker .theme-picker__hint {
    margin: 0;
    font-size: 0.75rem;
    line-height: 1.45;
    color: var(--ig-gray-600);
}

.theme-picker__hint code {
    font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
    font-size: 0.6875rem;
    font-variant-ligatures: none;
}

.theme-swatch {
    display: inline-block;
    min-width: 0.875rem;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 0.0625rem solid var(--ig-gray-300);
    vertical-align: -0.125rem;
    background: linear-gradient(135deg, var(--swatch-bg) 0 50%, var(--swatch-accent) 50% 100%);
}

.theme-swatch--studio {
    --swatch-bg: #faf4ed;
    --swatch-accent: #907aa9;
}

.theme-swatch--ledger {
    --swatch-bg: #eceff4;
    --swatch-accent: #5e81ac;
}

.theme-swatch--editorial {
    --swatch-bg: #333c43;
    --swatch-accent: #a7c080;
}

.theme-swatch--midnight {
    --swatch-bg: #282a36;
    --swatch-accent: #bd93f9;
}

igc-button-group {
    --item-text-color: unset;
    --elevation: unset;

    width: fit-content;
}

igc-toggle-button {
    max-width: 7.875rem;
}

igx-grid-excel-style-filtering {
    --ig-size: 3;
}
```

## Create a theme

A generated theme is a block of `--ig-grid-*` custom properties declared on a class. The block holds the three primary tokens, plus every other token written as a CSS expression over them:

```css
.my-grid {
  --ig-grid-background: #08002e;
  --ig-grid-accent-color: #ff7d52;
  --ig-grid-foreground: hsla(from color(from var(--ig-grid-background) var(--y-contrast)) h 0 l/1);
  --ig-grid-header-background: color-mix(in srgb, var(--ig-grid-foreground) 6%, var(--ig-grid-background));
  --ig-grid-header-text-color: var(--ig-grid-foreground);
  --ig-grid-row-hover-background: color-mix(in srgb, var(--ig-grid-accent-color) 8%, var(--ig-grid-row-odd-background));
  /* … and the rest of the token set */
}
```

Pick the route that fits your toolchain - each one produces this same token set.

### Sass

If your project compiles Sass, the theming engine can write the token set for you by using the `grid-theme()` function. To use it, first install the theming package:

```bash
npm install igniteui-theming
```

Then import the package, which exports the theme functions and the `tokens()` mixin:

```scss
@use "igniteui-theming" as *;
```

Then declare the theme with `grid-theme` and include it on the element you want to affect:

```scss
.my-grid {
  @include tokens(grid-theme(
    $background: #08002e,
    $accent-color: #ff7d52
  ));
}
```

Each parameter maps to the token of the same name - `$background` to `--ig-grid-background`, `$accent-color` to `--ig-grid-accent-color` - and every token you leave out is emitted as an expression over the ones you set.

### Theming MCP

The [Ignite UI Theming MCP](../../ai/theming-mcp.md) generates the theme through your AI assistant. Ask for CSS output and it returns ready-to-use custom properties, so no local Sass toolchain is needed.

> _"Create a CSS grid theme for the `.my-grid` class with background #08002e and accent color #ff7d52."_

### Theme playground

The [theme playground](#try-it) at the end of this topic generates the token set for any colors you pick. Select **Show code** to copy the complete CSS block.

### Keep the theme up to date

A generated CSS block is a snapshot of the library version it was generated for. Regenerate it after a Ignite UI for Web Components upgrade to pick up any new changes to the grid theme. With `grid-theme()`, upgrade `igniteui-theming` together with your other Ignite UI for Web Components packages and rebuild - it is a separate package, so upgrading the components alone does not update it. With the Theming MCP or the playground, run the same prompt or colors again and replace the block.

## Apply the theme

Apply the class to the Pivot Grid:

The Pivot Grid manages its own `class` attribute, so put the theme class on a container element instead. The tokens are inherited by the Pivot Grid inside it:

```html
<div class="my-grid">
    <igc-pivot-grid></igc-pivot-grid>
</div>
```

With the class applied, the theme is complete. The Pivot Grid is now dark indigo with a coral accent, and the text, header, row borders, hover states, selection tints and popup chrome have all been computed from those two values. From here on, the primary tokens are all you need to change.

**Note:** 
Declare the primary tokens on the same element as the derived tokens, or on one of its ancestors. A custom property's `var()` references are resolved on the element where the property is declared, so primary tokens set on a descendant of that element are ignored by the derived block.

## Primary tokens

In a generated theme, the Pivot Grid is built from three primary tokens and every other color follows them.

| Token | What it controls in a generated theme |
| -- | -- |
| `--ig-grid-background` | The surface the whole component is built on. Every other surface and the default foreground are derived from it. |
| `--ig-grid-foreground` | Text and icons. Derived from the background by contrast when not set. |
| `--ig-grid-accent-color` | Interactive color: sort indicators, selection, hover tints, focus. |

`--ig-grid-foreground` is listed as primary but rarely needs setting. Left alone, it is chosen for contrast against the background, so a dark background produces light text and a light one produces dark text without a second declaration.

## How derivation works

The derived tokens in a generated theme are not fixed colors. Each one is a CSS expression over the primary tokens:

```css
.my-grid {
  --ig-grid-foreground: hsla(from color(from var(--ig-grid-background) var(--y-contrast)) h 0 l/1);
  --ig-grid-header-background: color-mix(in srgb, var(--ig-grid-foreground) 6%, var(--ig-grid-background));
  --ig-grid-row-hover-background: color-mix(in srgb, var(--ig-grid-accent-color) 8%, var(--ig-grid-row-odd-background));
  --ig-grid-sorted-header-icon-color: hsl(from var(--ig-grid-accent-color) h s l/0.7);
}
```

Two consequences follow. First, changing a primary token re-computes everything downstream, including at runtime through CSS custom properties. Second, the relationships hold whatever value you supply, so a theme cannot fall out of step with itself. Both hold only while the generated tokens are declared - remove them and every property goes back to being independent.

## Going deeper

In a generated theme, some tokens are derivation roots in their own right. Declaring one detaches it from the background, and whatever sits on it should derive from the new value instead.

`--ig-grid-header-background` is the clearest example. Left alone it is mixed from `--ig-grid-background`, and the header text follows `--ig-grid-foreground`. Declare it, and the header text is re-derived to take contrast against the header background itself:

```css
.my-grid {
  --ig-grid-header-background: #ff7d52;
  --ig-grid-header-text-color: hsla(from color(from var(--ig-grid-header-background) var(--y-contrast)) h 0 l/1);
}
```

**Note:** 
Reach for these only when you want a surface to stop tracking the background. Most derived tokens are best left alone - overriding one pins a value that would otherwise stay in step with the rest of the theme.

## Structure

Color is only half of a theme. Density and roundness are controlled by global design-system tokens rather than grid tokens, so you set them alongside the grid tokens:

```css
.my-grid {
  --ig-size: var(--ig-size-small);   /* small | medium | large */
  --ig-radius-factor: 0;             /* 0 to 1 */
}
```

Grid lines are theme tokens too. To hide one, tint it to the surface behind it rather than removing it, so the row metrics do not change between themes:

```css
.my-grid {
  /* horizontal dividers, blended away */
  --ig-grid-row-border-color: var(--ig-grid-background);
  /* vertical dividers, drawn in the same color the theme derives for rows */
  --ig-grid-body-column-border-color-odd: hsl(from color-mix(in srgb, var(--ig-grid-foreground) 16%, var(--ig-grid-background)) h s l/0.38);
  --ig-grid-body-column-border-color-even: hsl(from color-mix(in srgb, var(--ig-grid-foreground) 16%, var(--ig-grid-background)) h s l/0.38);
}
```

## Fine-tune individual properties

Out of the box, every `--ig-grid-*` property is independent. Each one resolves against the base palette - in the Material theme, for example, the header reads `var(--ig-grid-header-background, var(--ig-gray-100))` - so a single override changes only that part of the Pivot Grid and leaves the rest of the design untouched. This makes targeted adjustments safe and predictable:

```css
.my-grid {
  --ig-grid-header-background: #120b3d;
  --ig-grid-header-text-color: #ffffff;
}
```

The same independence applies to the primary tokens. Without a generated theme, `--ig-grid-background` and `--ig-grid-accent-color` are ordinary properties and do **not** carry into the rest of the Pivot Grid:

```css
/* The background changes, the header stays gray. */
.my-grid {
  --ig-grid-background: #08002e;
  --ig-grid-accent-color: #ff7d52;
}
```

To restyle the whole Pivot Grid from a few colors, [create a theme](#create-a-theme).

## Try it

Change a color and watch it reach the header, the rows, the summaries, the paginator and the filtering popups. Switch grids to confirm the same tokens serve all of them, then select **Show code** to copy the complete CSS block - the primary tokens together with every derived token.

```typescript
// Flat grid: invoices

export class InvoicesDataItem {
    public constructor(init: Partial<InvoicesDataItem>) {
        Object.assign(this, init);
    }

    public ShipCountry: string;
    public ShipCity: string;
    public ShipName: string;
    public Salesperson: string;
    public UnitPrice: number;
    public Quantity: number;

}
export class InvoicesData extends Array<InvoicesDataItem> {
    public constructor(items: Array<InvoicesDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Berlin`, ShipName: `Alfred's Futterkiste`, Salesperson: `Margaret Peacock`, UnitPrice: 43.9, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Berlin`, ShipName: `Alfred's Futterkiste`, Salesperson: `Margaret Peacock`, UnitPrice: 10, Quantity: 6 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Berlin`, ShipName: `Alfred's Futterkiste`, Salesperson: `Margaret Peacock`, UnitPrice: 18, Quantity: 15 }),
                // ... 319 more items
            ];
            super(...newItems.slice(0));
        }
    }
}

// Tree grid: employees

export class EmployeesFlatAvatarsItem {
    public constructor(init: Partial<EmployeesFlatAvatarsItem>) {
        Object.assign(this, init);
    }

    public Age: number;
    public Avatar: string;
    public HireDate: string;
    public ID: number;
    public Name: string;
    public ParentID: number;
    public Title: string;

}
export class EmployeesFlatAvatars extends Array<EmployeesFlatAvatarsItem> {
    public constructor(items: Array<EmployeesFlatAvatarsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesFlatAvatarsItem({ Age: 55, Avatar: `https://dl.infragistics.com/x/img/people/men/25.png`, HireDate: `2008-03-20`, ID: 1, Name: `Johnathan Winchester`, ParentID: -1, Title: `Development Manager` }),
                new EmployeesFlatAvatarsItem({ Age: 42, Avatar: `https://dl.infragistics.com/x/img/people/women/14.png`, HireDate: `2014-01-22`, ID: 4, Name: `Ana Sanders`, ParentID: -1, Title: `CEO` }),
                new EmployeesFlatAvatarsItem({ Age: 49, Avatar: `https://dl.infragistics.com/x/img/people/women/12.png`, HireDate: `2014-01-22`, ID: 18, Name: `Victoria Lincoln`, ParentID: -1, Title: `Accounting Manager` }),
                // ... 15 more items
            ];
            super(...newItems.slice(0));
        }
    }
}

// Hierarchical grid: singers, albums and tours

export class SingersDataItem {
    public constructor(init: Partial<SingersDataItem>) {
        Object.assign(this, init);
    }

    public ID: number;
    public Artist: string;
    public Photo: string;
    public Debut: number;
    public GrammyNominations: number;
    public GrammyAwards: number;
    public HasGrammyAward: boolean;
    public Tours: SingersDataItem_ToursItem[];
    public Albums: SingersDataItem_AlbumsItem[];

}
export class SingersDataItem_ToursItem {
    public constructor(init: Partial<SingersDataItem_ToursItem>) {
        Object.assign(this, init);
    }

    public Tour: string;
    public StartedOn: string;
    public Location: string;
    public Headliner: string;
    public TouredBy: string;

}
export class SingersDataItem_AlbumsItem {
    public constructor(init: Partial<SingersDataItem_AlbumsItem>) {
        Object.assign(this, init);
    }

    public Album: string;
    public LaunchDate: string;
    public BillboardReview: number;
    public USBillboard200: number;
    public Artist: string;
    public Songs: SingersDataItem_AlbumsItem_SongsItem[];

}
export class SingersDataItem_AlbumsItem_SongsItem {
    public constructor(init: Partial<SingersDataItem_AlbumsItem_SongsItem>) {
        Object.assign(this, init);
    }

    public Number: number;
    public Title: string;
    public Released: string;
    public Genre: string;
    public Album: string;

}
export class SingersData extends Array<SingersDataItem> {
    public constructor(items: Array<SingersDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new SingersDataItem(
                {
                    ID: 0,
                    Artist: `Naomí Yepes`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/naomi.png`,
                    Debut: 2011,
                    GrammyNominations: 6,
                    GrammyAwards: 0,
                    HasGrammyAward: false,
                    Tours: [
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Faithful Tour`,
                            StartedOn: `Sep 12`,
                            Location: `Worldwide`,
                            Headliner: `NO`,
                            TouredBy: `Naomí Yepes`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `City Jam Sessions`,
                            StartedOn: `Aug 13`,
                            Location: `North America`,
                            Headliner: `YES`,
                            TouredBy: `Naomí Yepes`
                        }),
                // ... 8 more items
                            ]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Dream Driven`,
                            LaunchDate: `August 25, 2014`,
                            BillboardReview: 81,
                            USBillboard200: 1,
                            Artist: `Naomí Yepes`,
                            Songs: [
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 1,
                                    Title: `Intro`,
                                    Released: `29 Apr 2021`,
                                    Genre: `*`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 2,
                                    Title: `Ferocious`,
                                    Released: `28 Apr 2014`,
                                    Genre: `Dance-pop R&B`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 3,
                                    Title: `Going crazy`,
                                    Released: `10 Feb 2015`,
                                    Genre: `Dance-pop EDM`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 4,
                                    Title: `Future past`,
                                    Released: `14 Jul 2021`,
                                    Genre: `*`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 5,
                                    Title: `Roaming like them`,
                                    Released: `2 Jul 2014`,
                                    Genre: `Electro house Electropop`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 6,
                                    Title: `Last Wishes`,
                                    Released: `12 Aug 2014`,
                                    Genre: `R&B`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 7,
                                    Title: `Stay where you are`,
                                    Released: `14 Aug 1998`,
                                    Genre: `*`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 8,
                                    Title: `Imaginarium`,
                                    Released: `15 Sep 2013`,
                                    Genre: `*`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 9,
                                    Title: `Tell me`,
                                    Released: `30 Sep 2014`,
                                    Genre: `Synth-pop R&B`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 10,
                                    Title: `Shredded into pieces`,
                                    Released: `2 Sep 2011`,
                                    Genre: `*`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 11,
                                    Title: `Capture this moment`,
                                    Released: `5 Jan 2011`,
                                    Genre: `*`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 12,
                                    Title: `Dream Driven`,
                                    Released: `12 Dec 1999`,
                                    Genre: `*`,
                                    Album: `Dream Driven`
                                })]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `The dragon journey`,
                            LaunchDate: `May 20, 2016`,
                            BillboardReview: 60,
                            USBillboard200: 2,
                            Artist: `Naomí Yepes`,
                            Songs: [
                            ]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Organic me`,
                            LaunchDate: `August 17, 2018`,
                            BillboardReview: 82,
                            USBillboard200: 1,
                            Artist: `Naomí Yepes`,
                            Songs: [
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 1,
                                    Title: `I Love`,
                                    Released: `11 May 2019`,
                                    Genre: `Crunk reggaeton`,
                                    Album: `Organic me`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 2,
                                    Title: `Early Morning Compass`,
                                    Released: `15 Jan 2020`,
                                    Genre: `mystical parody-bap `,
                                    Album: `Organic me`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 3,
                                    Title: `Key Fields Forever`,
                                    Released: `2 Jan 2020`,
                                    Genre: `Dance-pop EDM`,
                                    Album: `Organic me`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 4,
                                    Title: `Stand by Your Goblins`,
                                    Released: `20 Nov 2019`,
                                    Genre: `*`,
                                    Album: `Organic me`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 5,
                                    Title: `Mad to Walk`,
                                    Released: `12 May 2019`,
                                    Genre: `Electro house Electropop`,
                                    Album: `Organic me`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 6,
                                    Title: `Alice's Waiting`,
                                    Released: `28 Jan 2020`,
                                    Genre: `R&B`,
                                    Album: `Organic me`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 7,
                                    Title: `We Shall Kiss`,
                                    Released: `30 Oct 2019`,
                                    Genre: `*`,
                                    Album: `Organic me`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 8,
                                    Title: `Behind Single Ants`,
                                    Released: `2 Oct 2019`,
                                    Genre: `*`,
                                    Album: `Organic me`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 9,
                                    Title: `Soap Autopsy`,
                                    Released: `8 Aug 2019`,
                                    Genre: `Synth-pop R&B`,
                                    Album: `Organic me`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 10,
                                    Title: `Have You Met Rich?`,
                                    Released: `1 Jul 2019`,
                                    Genre: `ethno-tunes`,
                                    Album: `Organic me`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 11,
                                    Title: `Livin' on a Banana`,
                                    Released: `22 Nov 2019`,
                                    Genre: `Crunk reggaeton`,
                                    Album: `Organic me`
                                })]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Curiosity`,
                            LaunchDate: `December 7, 2019`,
                            BillboardReview: 75,
                            USBillboard200: 12,
                            Artist: `Naomí Yepes`,
                            Songs: [
                            ]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 1,
                    Artist: `Babila Ebwélé`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/babila.png`,
                    Debut: 2009,
                    GrammyNominations: 0,
                    GrammyAwards: 11,
                    HasGrammyAward: true,
                    Tours: [
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `The last straw`,
                            StartedOn: `May 09`,
                            Location: `Europe, Asia`,
                            Headliner: `NO`,
                            TouredBy: `Babila Ebwélé`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `No foundations`,
                            StartedOn: `Jun 04`,
                            Location: `United States, Europe`,
                            Headliner: `YES`,
                            TouredBy: `Babila Ebwélé`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Crazy eyes`,
                            StartedOn: `Jun 08`,
                            Location: `North America`,
                            Headliner: `NO`,
                            TouredBy: `Babila Ebwélé`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Zero gravity`,
                            StartedOn: `Apr 19`,
                            Location: `United States`,
                            Headliner: `NO`,
                            TouredBy: `Babila Ebwélé`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Battle with myself`,
                            StartedOn: `Mar 08`,
                            Location: `North America`,
                            Headliner: `YES`,
                            TouredBy: `Babila Ebwélé`
                        })]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Pushing up daisies`,
                            LaunchDate: `May 31, 2000`,
                            BillboardReview: 86,
                            USBillboard200: 42,
                            Artist: `Babila Ebwélé`,
                            Songs: [
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 1,
                                    Title: `Wood Shavings Forever`,
                                    Released: `9 Jun 2019`,
                                    Genre: `*`,
                                    Album: `Pushing up daisies`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 2,
                                    Title: `Early Morning Drive`,
                                    Released: `20 May 2019`,
                                    Genre: `*`,
                                    Album: `Pushing up daisies`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 3,
                                    Title: `Don't Natter`,
                                    Released: `10 Jun 2019`,
                                    Genre: `adult calypso-industrial`,
                                    Album: `Pushing up daisies`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 4,
                                    Title: `Stairway to Balloons`,
                                    Released: `18 Jun 2019`,
                                    Genre: `calypso and mariachi`,
                                    Album: `Pushing up daisies`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 5,
                                    Title: `The Number of your Apple`,
                                    Released: `29 Oct 2019`,
                                    Genre: `*`,
                                    Album: `Pushing up daisies`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 6,
                                    Title: `Your Delightful Heart`,
                                    Released: `24 Feb 2019`,
                                    Genre: `*`,
                                    Album: `Pushing up daisies`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 7,
                                    Title: `Nice Weather For Balloons`,
                                    Released: `1 Aug 2019`,
                                    Genre: `rap-hop`,
                                    Album: `Pushing up daisies`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 8,
                                    Title: `The Girl From Cornwall`,
                                    Released: `4 May 2019`,
                                    Genre: `enigmatic rock-and-roll`,
                                    Album: `Pushing up daisies`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 9,
                                    Title: `Here Without Jack`,
                                    Released: `24 Oct 2019`,
                                    Genre: `*`,
                                    Album: `Pushing up daisies`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 10,
                                    Title: `Born Rancid`,
                                    Released: `19 Mar 2019`,
                                    Genre: `*`,
                                    Album: `Pushing up daisies`
                                })]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Death's dead`,
                            LaunchDate: `June 8, 2016`,
                            BillboardReview: 85,
                            USBillboard200: 95,
                            Artist: `Babila Ebwélé`,
                            Songs: [
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 1,
                                    Title: `Men Sound Better With You`,
                                    Released: `20 Oct 2019`,
                                    Genre: `rap-hop`,
                                    Album: `Death's dead`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 2,
                                    Title: `Ghost in My Rod`,
                                    Released: `5 Oct 2019`,
                                    Genre: `enigmatic rock-and-roll`,
                                    Album: `Death's dead`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 3,
                                    Title: `Bed of Men`,
                                    Released: `14 Nov 2019`,
                                    Genre: `whimsical comedy-grass `,
                                    Album: `Death's dead`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 4,
                                    Title: `Don't Push`,
                                    Released: `2 Jan 2020`,
                                    Genre: `unblack electronic-trip-hop`,
                                    Album: `Death's dead`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 5,
                                    Title: `Nice Weather For Men`,
                                    Released: `18 Dec 2019`,
                                    Genre: `*`,
                                    Album: `Death's dead`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 6,
                                    Title: `Rancid Rhapsody`,
                                    Released: `10 Mar 2019`,
                                    Genre: `*`,
                                    Album: `Death's dead`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 7,
                                    Title: `Push, Push, Push!`,
                                    Released: `21 Feb 2019`,
                                    Genre: `*`,
                                    Album: `Death's dead`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 8,
                                    Title: `My Name is Sarah`,
                                    Released: `15 Nov 2019`,
                                    Genre: `*`,
                                    Album: `Death's dead`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 9,
                                    Title: `The Girl From My Hotel`,
                                    Released: `6 Nov 2019`,
                                    Genre: `*`,
                                    Album: `Death's dead`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 10,
                                    Title: `Free Box`,
                                    Released: `18 Apr 2019`,
                                    Genre: `splitter-funk`,
                                    Album: `Death's dead`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 11,
                                    Title: `Hotel Cardiff`,
                                    Released: `30 Dec 2019`,
                                    Genre: `guilty pleasure ebm`,
                                    Album: `Death's dead`
                                })]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 2,
                    Artist: `Ahmad Nazeri`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/ahmad.png`,
                    Debut: 2004,
                    GrammyNominations: 3,
                    GrammyAwards: 1,
                    HasGrammyAward: true,
                    Tours: [
                    ]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Emergency`,
                            LaunchDate: `March 6, 2004`,
                            BillboardReview: 98,
                            USBillboard200: 69,
                            Artist: `Ahmad Nazeri`,
                            Songs: [
                            ]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Bursting bubbles`,
                            LaunchDate: `April 17, 2006`,
                            BillboardReview: 69,
                            USBillboard200: 39,
                            Artist: `Ahmad Nazeri`,
                            Songs: [
                            ]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 3,
                    Artist: `Kimmy McIlmorie`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/kimmy.png`,
                    Debut: 2007,
                    GrammyNominations: 21,
                    GrammyAwards: 3,
                    HasGrammyAward: true,
                    Tours: [
                    ]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Here we go again`,
                            LaunchDate: `November 18, 2017`,
                            BillboardReview: 68,
                            USBillboard200: 1,
                            Artist: `Kimmy McIlmorie`,
                            Songs: [
                            ]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 4,
                    Artist: `Mar Rueda`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/mar.png`,
                    Debut: 1996,
                    GrammyNominations: 14,
                    GrammyAwards: 2,
                    HasGrammyAward: true,
                    Tours: [
                    ]
                    ,
                    Albums: [
                    ]

                }),
                new SingersDataItem(
                {
                    ID: 5,
                    Artist: `Izabella Tabakova`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/izabella.png`,
                    Debut: 2017,
                    GrammyNominations: 7,
                    GrammyAwards: 11,
                    HasGrammyAward: true,
                    Tours: [
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Final breath`,
                            StartedOn: `Jun 13`,
                            Location: `Europe`,
                            Headliner: `YES`,
                            TouredBy: `Izabella Tabakova`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Once bitten`,
                            StartedOn: `Dec 18`,
                            Location: `Australia, United States`,
                            Headliner: `NO`,
                            TouredBy: `Izabella Tabakova`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Code word`,
                            StartedOn: `Sep 19`,
                            Location: `United States, Europe`,
                            Headliner: `NO`,
                            TouredBy: `Izabella Tabakova`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Final draft`,
                            StartedOn: `Sep 17`,
                            Location: `United States, Europe`,
                            Headliner: `YES`,
                            TouredBy: `Izabella Tabakova`
                        })]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Once bitten`,
                            LaunchDate: `July 16, 2007`,
                            BillboardReview: 79,
                            USBillboard200: 53,
                            Artist: `Izabella Tabakova`,
                            Songs: [
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 1,
                                    Title: `Whole Lotta Super Cats`,
                                    Released: `21 May 2019`,
                                    Genre: `*`,
                                    Album: `Once bitten`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 2,
                                    Title: `Enter Becky`,
                                    Released: `16 Jan 2020`,
                                    Genre: `*`,
                                    Album: `Once bitten`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 3,
                                    Title: `Your Cheatin' Flamingo`,
                                    Released: `14 Jan 2020`,
                                    Genre: `*`,
                                    Album: `Once bitten`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 4,
                                    Title: `Mad to Kiss`,
                                    Released: `6 Nov 2019`,
                                    Genre: `Synth-pop R&B`,
                                    Album: `Once bitten`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 5,
                                    Title: `Hotel Prague`,
                                    Released: `20 Oct 2019`,
                                    Genre: `ethno-tunes`,
                                    Album: `Once bitten`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 6,
                                    Title: `Jail on My Mind`,
                                    Released: `31 May 2019`,
                                    Genre: `Crunk reggaeton`,
                                    Album: `Once bitten`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 7,
                                    Title: `Amazing Blues`,
                                    Released: `29 May 2019`,
                                    Genre: `mystical parody-bap `,
                                    Album: `Once bitten`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 8,
                                    Title: `Goody Two Iron Filings`,
                                    Released: `4 Jul 2019`,
                                    Genre: `Electro house Electropop`,
                                    Album: `Once bitten`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 9,
                                    Title: `I Love in Your Arms`,
                                    Released: `7 Jun 2019`,
                                    Genre: `R&B`,
                                    Album: `Once bitten`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 10,
                                    Title: `Truly Madly Amazing`,
                                    Released: `12 Sep 2019`,
                                    Genre: `ethno-tunes`,
                                    Album: `Once bitten`
                                })]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Your graciousness`,
                            LaunchDate: `November 17, 2004`,
                            BillboardReview: 69,
                            USBillboard200: 30,
                            Artist: `Izabella Tabakova`,
                            Songs: [
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 1,
                                    Title: `We Shall Tickle`,
                                    Released: `31 Aug 2019`,
                                    Genre: `old emo-garage `,
                                    Album: `Your graciousness`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 2,
                                    Title: `Snail Boogie`,
                                    Released: `14 Jun 2019`,
                                    Genre: `*`,
                                    Album: `Your graciousness`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 3,
                                    Title: `Amazing Liz`,
                                    Released: `15 Oct 2019`,
                                    Genre: `*`,
                                    Album: `Your graciousness`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 4,
                                    Title: `When Sexy Aardvarks Cry`,
                                    Released: `1 Oct 2019`,
                                    Genre: `whimsical comedy-grass `,
                                    Album: `Your graciousness`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 5,
                                    Title: `Stand By Dave`,
                                    Released: `18 Aug 2019`,
                                    Genre: `unblack electronic-trip-hop`,
                                    Album: `Your graciousness`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 6,
                                    Title: `The Golf Course is Your Land`,
                                    Released: `2 Apr 2019`,
                                    Genre: `*`,
                                    Album: `Your graciousness`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 7,
                                    Title: `Where Have All the Men Gone?`,
                                    Released: `29 Apr 2019`,
                                    Genre: `*`,
                                    Album: `Your graciousness`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 8,
                                    Title: `Rhythm of the Leg`,
                                    Released: `5 Aug 2019`,
                                    Genre: `ethno-tunes`,
                                    Album: `Your graciousness`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 9,
                                    Title: `Baby, I Need Your Hats`,
                                    Released: `5 Dec 2019`,
                                    Genre: `neuro-tunes`,
                                    Album: `Your graciousness`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 10,
                                    Title: `Stand by Your Cat`,
                                    Released: `25 Jul 2019`,
                                    Genre: `*`,
                                    Album: `Your graciousness`
                                })]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Dark matters`,
                            LaunchDate: `November 3, 2002`,
                            BillboardReview: 79,
                            USBillboard200: 85,
                            Artist: `Izabella Tabakova`,
                            Songs: [
                            ]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 6,
                    Artist: `Nguyễn Diệp Chi`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/nguyen.png`,
                    Debut: 1992,
                    GrammyNominations: 4,
                    GrammyAwards: 2,
                    HasGrammyAward: true,
                    Tours: [
                    ]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Library of liberty`,
                            LaunchDate: `December 22, 2003`,
                            BillboardReview: 93,
                            USBillboard200: 5,
                            Artist: `Nguyễn Diệp Chi`,
                            Songs: [
                            ]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 7,
                    Artist: `Eva Lee`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/eva.png`,
                    Debut: 2008,
                    GrammyNominations: 2,
                    GrammyAwards: 0,
                    HasGrammyAward: false,
                    Tours: [
                    ]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Just a tease`,
                            LaunchDate: `May 3, 2001`,
                            BillboardReview: 91,
                            USBillboard200: 29,
                            Artist: `Eva Lee`,
                            Songs: [
                            ]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 8,
                    Artist: `Siri Jakobsson`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/siri.png`,
                    Debut: 1990,
                    GrammyNominations: 2,
                    GrammyAwards: 8,
                    HasGrammyAward: true,
                    Tours: [
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Basket case`,
                            StartedOn: `Jan 07`,
                            Location: `Europe, Asia`,
                            Headliner: `NO`,
                            TouredBy: `Siri Jakobsson`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `The bigger fish`,
                            StartedOn: `Dec 07`,
                            Location: `United States, Europe`,
                            Headliner: `YES`,
                            TouredBy: `Siri Jakobsson`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Missed the boat`,
                            StartedOn: `Jun 09`,
                            Location: `Europe, Asia`,
                            Headliner: `NO`,
                            TouredBy: `Siri Jakobsson`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Equivalent exchange`,
                            StartedOn: `Feb 06`,
                            Location: `United States, Europe`,
                            Headliner: `YES`,
                            TouredBy: `Siri Jakobsson`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Damage control`,
                            StartedOn: `Oct 11`,
                            Location: `Australia, United States`,
                            Headliner: `NO`,
                            TouredBy: `Siri Jakobsson`
                        })]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Under the bus`,
                            LaunchDate: `May 14, 2000`,
                            BillboardReview: 67,
                            USBillboard200: 67,
                            Artist: `Siri Jakobsson`,
                            Songs: [
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 1,
                                    Title: `Jack Broke My Heart At Tesco's`,
                                    Released: `19 Jan 2020`,
                                    Genre: `*`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 2,
                                    Title: `Cat Deep, Hats High`,
                                    Released: `5 Dec 2019`,
                                    Genre: `*`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 3,
                                    Title: `In Snail We Trust`,
                                    Released: `31 May 2019`,
                                    Genre: `hardcore opera`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 4,
                                    Title: `Liz's Waiting`,
                                    Released: `22 Jul 2019`,
                                    Genre: `emotional C-jam `,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 5,
                                    Title: `Lifeless Blues`,
                                    Released: `14 Jun 2019`,
                                    Genre: `*`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 6,
                                    Title: `I Spin`,
                                    Released: `26 Mar 2019`,
                                    Genre: `*`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 7,
                                    Title: `Ring of Rock`,
                                    Released: `12 Dec 2019`,
                                    Genre: `*`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 8,
                                    Title: `Livin' on a Rock`,
                                    Released: `17 Apr 2019`,
                                    Genre: `*`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 9,
                                    Title: `Your Lifeless Heart`,
                                    Released: `15 Sep 2019`,
                                    Genre: `adult calypso-industrial`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 10,
                                    Title: `The High Street on My Mind`,
                                    Released: `11 Nov 2019`,
                                    Genre: `calypso and mariachi`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 11,
                                    Title: `Behind Ugly Curtains`,
                                    Released: `8 May 2019`,
                                    Genre: `*`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 12,
                                    Title: `Where Have All the Curtains Gone?`,
                                    Released: `28 Jun 2019`,
                                    Genre: `*`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 13,
                                    Title: `Ghost in My Apple`,
                                    Released: `14 Dec 2019`,
                                    Genre: `*`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 14,
                                    Title: `I Chatter`,
                                    Released: `30 Nov 2019`,
                                    Genre: `*`,
                                    Album: `Under the bus`
                                })]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 9,
                    Artist: `Pablo Cambeiro`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/pablo.png`,
                    Debut: 2011,
                    GrammyNominations: 5,
                    GrammyAwards: 0,
                    HasGrammyAward: false,
                    Tours: [
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Beads`,
                            StartedOn: `May 11`,
                            Location: `Worldwide`,
                            Headliner: `NO`,
                            TouredBy: `Pablo Cambeiro`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Concept art`,
                            StartedOn: `Dec 18`,
                            Location: `United States`,
                            Headliner: `YES`,
                            TouredBy: `Pablo Cambeiro`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Glass shoe`,
                            StartedOn: `Jan 20`,
                            Location: `Worldwide`,
                            Headliner: `YES`,
                            TouredBy: `Pablo Cambeiro`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Pushing buttons`,
                            StartedOn: `Feb 15`,
                            Location: `Europe, Asia`,
                            Headliner: `NO`,
                            TouredBy: `Pablo Cambeiro`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Dark matters`,
                            StartedOn: `Jan 04`,
                            Location: `Australia, United States`,
                            Headliner: `YES`,
                            TouredBy: `Pablo Cambeiro`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Greener grass`,
                            StartedOn: `Sep 09`,
                            Location: `United States, Europe`,
                            Headliner: `NO`,
                            TouredBy: `Pablo Cambeiro`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Apparatus`,
                            StartedOn: `Nov 16`,
                            Location: `Europe`,
                            Headliner: `NO`,
                            TouredBy: `Pablo Cambeiro`
                        })]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Fluke`,
                            LaunchDate: `August 4, 2017`,
                            BillboardReview: 93,
                            USBillboard200: 98,
                            Artist: `Pablo Cambeiro`,
                            Songs: [
                            ]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Crowd control`,
                            LaunchDate: `August 26, 2003`,
                            BillboardReview: 68,
                            USBillboard200: 84,
                            Artist: `Pablo Cambeiro`,
                            Songs: [
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 1,
                                    Title: `My Bed on My Mind`,
                                    Released: `25 Mar 2019`,
                                    Genre: `ethno-tunes`,
                                    Album: `Crowd control`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 2,
                                    Title: `Bright Blues`,
                                    Released: `28 Sep 2019`,
                                    Genre: `neuro-tunes`,
                                    Album: `Crowd control`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 3,
                                    Title: `Sail, Sail, Sail!`,
                                    Released: `5 Mar 2019`,
                                    Genre: `*`,
                                    Album: `Crowd control`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 4,
                                    Title: `Hotel My Bed`,
                                    Released: `22 Mar 2019`,
                                    Genre: `*`,
                                    Album: `Crowd control`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 5,
                                    Title: `Gonna Make You Mash`,
                                    Released: `18 May 2019`,
                                    Genre: `*`,
                                    Album: `Crowd control`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 6,
                                    Title: `Straight Outta America`,
                                    Released: `16 Jan 2020`,
                                    Genre: `hardcore opera`,
                                    Album: `Crowd control`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 7,
                                    Title: `I Drive`,
                                    Released: `23 Feb 2019`,
                                    Genre: `emotional C-jam `,
                                    Album: `Crowd control`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 8,
                                    Title: `Like a Teddy`,
                                    Released: `31 Aug 2019`,
                                    Genre: `*`,
                                    Album: `Crowd control`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 9,
                                    Title: `Teddy Boogie`,
                                    Released: `30 Nov 2019`,
                                    Genre: `*`,
                                    Album: `Crowd control`
                                })]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 10,
                    Artist: `Athar Malakooti`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/athar.png`,
                    Debut: 2017,
                    GrammyNominations: 0,
                    GrammyAwards: 0,
                    HasGrammyAward: false,
                    Tours: [
                    ]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Pushing up daisies`,
                            LaunchDate: `February 24, 2016`,
                            BillboardReview: 74,
                            USBillboard200: 77,
                            Artist: `Athar Malakooti`,
                            Songs: [
                            ]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 11,
                    Artist: `Marti Valencia`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/marti.png`,
                    Debut: 2004,
                    GrammyNominations: 1,
                    GrammyAwards: 1,
                    HasGrammyAward: true,
                    Tours: [
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Cat eat cat world`,
                            StartedOn: `Sep 00`,
                            Location: `Worldwide`,
                            Headliner: `YES`,
                            TouredBy: `Marti Valencia`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Final straw`,
                            StartedOn: `Sep 06`,
                            Location: `United States, Europe`,
                            Headliner: `NO`,
                            TouredBy: `Marti Valencia`
                        })]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Nemesis`,
                            LaunchDate: `June 30, 2004`,
                            BillboardReview: 94,
                            USBillboard200: 9,
                            Artist: `Marti Valencia`,
                            Songs: [
                            ]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `First chance`,
                            LaunchDate: `January 7, 2019`,
                            BillboardReview: 96,
                            USBillboard200: 19,
                            Artist: `Marti Valencia`,
                            Songs: [
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 1,
                                    Title: `My Name is Jason`,
                                    Released: `12 Jul 2019`,
                                    Genre: `*`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 2,
                                    Title: `Amazing Andy`,
                                    Released: `5 Mar 2019`,
                                    Genre: `*`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 3,
                                    Title: `The Number of your Knight`,
                                    Released: `4 Dec 2019`,
                                    Genre: `*`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 4,
                                    Title: `I Sail`,
                                    Released: `3 Mar 2019`,
                                    Genre: `*`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 5,
                                    Title: `Goody Two Hands`,
                                    Released: `11 Oct 2019`,
                                    Genre: `Electro house Electropop`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 6,
                                    Title: `Careful With That Knife`,
                                    Released: `18 Dec 2019`,
                                    Genre: `R&B`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 7,
                                    Title: `Four Single Ants`,
                                    Released: `18 Jan 2020`,
                                    Genre: `*`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 8,
                                    Title: `Kiss Forever`,
                                    Released: `10 Aug 2019`,
                                    Genre: `*`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 9,
                                    Title: `Rich's Waiting`,
                                    Released: `15 Mar 2019`,
                                    Genre: `Synth-pop R&B`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 10,
                                    Title: `Japan is Your Land`,
                                    Released: `7 Mar 2019`,
                                    Genre: `ethno-tunes`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 11,
                                    Title: `Pencils in My Banana`,
                                    Released: `21 Jun 2019`,
                                    Genre: `Crunk reggaeton`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 12,
                                    Title: `I Sail in Your Arms`,
                                    Released: `30 Apr 2019`,
                                    Genre: `Synth-pop R&B`,
                                    Album: `First chance`
                                })]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `God's advocate`,
                            LaunchDate: `April 29, 2007`,
                            BillboardReview: 66,
                            USBillboard200: 37,
                            Artist: `Marti Valencia`,
                            Songs: [
                            ]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 12,
                    Artist: `Alicia Stanger`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/alicia.png`,
                    Debut: 2010,
                    GrammyNominations: 1,
                    GrammyAwards: 0,
                    HasGrammyAward: false,
                    Tours: [
                    ]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Forever alone`,
                            LaunchDate: `November 3, 2005`,
                            BillboardReview: 82,
                            USBillboard200: 7,
                            Artist: `Alicia Stanger`,
                            Songs: [
                            ]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 13,
                    Artist: `Peter Taylor`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/peter.png`,
                    Debut: 2005,
                    GrammyNominations: 0,
                    GrammyAwards: 2,
                    HasGrammyAward: true,
                    Tours: [
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Love`,
                            StartedOn: `Jun 04`,
                            Location: `Europe, Asia`,
                            Headliner: `YES`,
                            TouredBy: `Peter Taylor`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Fault of treasures`,
                            StartedOn: `Oct 13`,
                            Location: `North America`,
                            Headliner: `NO`,
                            TouredBy: `Peter Taylor`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `For eternity`,
                            StartedOn: `Mar 05`,
                            Location: `United States`,
                            Headliner: `YES`,
                            TouredBy: `Peter Taylor`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Time flies`,
                            StartedOn: `Jun 03`,
                            Location: `North America`,
                            Headliner: `NO`,
                            TouredBy: `Peter Taylor`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Highest difficulty`,
                            StartedOn: `Nov 01`,
                            Location: `Worldwide`,
                            Headliner: `YES`,
                            TouredBy: `Peter Taylor`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Sleeping dogs`,
                            StartedOn: `May 04`,
                            Location: `United States, Europe`,
                            Headliner: `NO`,
                            TouredBy: `Peter Taylor`
                        })]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Decisions decisions`,
                            LaunchDate: `April 10, 2008`,
                            BillboardReview: 85,
                            USBillboard200: 35,
                            Artist: `Peter Taylor`,
                            Songs: [
                            ]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Climate changed`,
                            LaunchDate: `June 20, 2015`,
                            BillboardReview: 66,
                            USBillboard200: 89,
                            Artist: `Peter Taylor`,
                            Songs: [
                            ]

                        })]

                }),
            ];
            super(...(newItems.slice(0, items)));
        }
    }
}

// Pivot grid: product sales

export class PivotDataFlatItem {
    public constructor(init: Partial<PivotDataFlatItem>) {
        Object.assign(this, init);
    }

    public ProductName: string;
    public ProductUnitPrice: number;
    public SellerName: string;
    public SellerCity: string;
    public Date: string;
    public Value: number;
    public NumberOfUnits: number;

}
export class PivotDataFlat extends Array<PivotDataFlatItem> {
    public constructor(items: Array<PivotDataFlatItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 12.8, SellerName: `Stanley Brooker`, SellerCity: `Seattle`, Date: `01/01/2007`, Value: 94.4, NumberOfUnits: 282 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 49.6, SellerName: `Elisa Longbottom`, SellerCity: `Sofia`, Date: `01/05/2007`, Value: 70.8, NumberOfUnits: 296 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 3.6, SellerName: `Lydia Burson`, SellerCity: `Tokyo`, Date: `01/06/2007`, Value: 35.8, NumberOfUnits: 68 }),
                // ... 497 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.playground__stage {
    --ig-grid-grid-elevation: var(--ig-elevation-2);
    --ig-grid-drag-elevation: var(--ig-elevation-5);
    --ig-grid-grouparea-color: color-mix(in srgb, var(--ig-grid-header-text-color) 60%, var(--ig-grid-header-background));
    --ig-grid-grouparea-background: var(--ig-grid-header-background);
    --ig-grid-drop-area-text-color: color-mix(in srgb, var(--ig-grid-header-text-color) 80%, var(--ig-grid-header-background));
    --ig-grid-drop-area-icon-color: var(--ig-grid-drop-area-text-color);
    --ig-grid-drop-area-background: lch(from var(--ig-grid-header-background) calc(l + (50 - l) * 0.1 + sign(50 - l) * 5) c h);
    --ig-grid-drop-area-on-drop-background: lch(from var(--ig-grid-header-background) calc(l + (50 - l) * 0.1 + sign(50 - l) * 5) c h);
    --ig-grid-header-background: color-mix(in srgb, var(--ig-grid-foreground) 6%, var(--ig-grid-background));
    --ig-grid-sortable-header-icon-hover-color: var(--ig-grid-accent-color);
    --ig-grid-sorted-header-icon-color: hsl(from var(--ig-grid-accent-color) h s l/0.7);
    --ig-grid-header-border-width: 0.0625rem;
    --ig-grid-header-border-style: solid;
    --ig-grid-header-border-color: color-mix(in srgb, var(--ig-grid-header-text-color) 20%, var(--ig-grid-header-background));
    --ig-grid-action-border-color: color-mix(in srgb, var(--ig-grid-foreground) 20%, var(--ig-grid-background));
    --ig-grid-ghost-header-background: var(--ig-grid-header-background);
    --ig-grid-ghost-header-text-color: var(--ig-grid-header-text-color);
    --ig-grid-ghost-header-icon-color: var(--ig-grid-header-text-color);
    --ig-grid-excel-filtering-header-foreground: var(--ig-grid-foreground);
    --ig-grid-excel-filtering-subheader-foreground: var(--ig-grid-foreground);
    --ig-grid-excel-filtering-actions-foreground: var(--ig-grid-foreground);
    --ig-grid-excel-filtering-actions-icon-color: var(--ig-grid-foreground);
    --ig-grid-excel-filtering-actions-hover-foreground: var(--ig-grid-foreground);
    --ig-grid-excel-filtering-actions-hover-icon-color: var(--ig-grid-foreground);
    --ig-grid-excel-filtering-actions-selected-icon-color: var(--ig-grid-accent-color);
    --ig-grid-excel-filtering-actions-hover-background: color-mix(in srgb, var(--ig-grid-accent-color) 8%, var(--ig-grid-background));
    --ig-grid-excel-filtering-actions-disabled-foreground: color-mix(in srgb, var(--ig-grid-foreground) 50%, var(--ig-grid-background));
    --ig-grid-excel-filtering-border-color: color-mix(in srgb, var(--ig-grid-foreground) 16%, var(--ig-grid-background));
    --ig-grid-grid-border-color: transparent;
    --ig-grid-content-background: var(--ig-grid-background);
    --ig-grid-content-text-color: var(--ig-grid-foreground);
    --ig-grid-row-odd-background: var(--ig-grid-background);
    --ig-grid-row-even-background: var(--ig-grid-background);
    --ig-grid-body-column-border-color-odd: var(--ig-grid-background);
    --ig-grid-body-column-border-color-even: var(--ig-grid-background);
    --ig-grid-row-odd-text-color: var(--ig-grid-foreground);
    --ig-grid-row-even-text-color: inherit;
    --ig-grid-tree-selected-filtered-row-text-color: var(--ig-secondary-300);
    --ig-grid-row-selected-text-color: var(--ig-grid-foreground);
    --ig-grid-row-hover-background: color-mix(in srgb, var(--ig-grid-accent-color) 8%, var(--ig-grid-row-odd-background));
    --ig-grid-body-column-hover-border-color: color-mix(in srgb, var(--ig-grid-accent-color) 8%, var(--ig-grid-row-odd-background));
    --ig-grid-row-hover-text-color: var(--ig-grid-foreground);
    --ig-grid-row-border-width: 0.0625rem;
    --ig-grid-row-border-style: solid;
    --ig-grid-row-border-color: hsl(from color-mix(in srgb, var(--ig-grid-foreground) 16%, var(--ig-grid-background)) h s l/0.38);
    --ig-grid-row-drag-color: var(--ig-grid-foreground);
    --ig-grid-pinned-border-width: 0.125rem;
    --ig-grid-pinned-border-style: solid;
    --ig-grid-pinned-border-color: color-mix(in srgb, var(--ig-grid-foreground) 20%, var(--ig-grid-background));
    --ig-grid-cell-active-border-width: 0.0625rem;
    --ig-grid-cell-active-border-color: var(--ig-grid-accent-color);
    --ig-grid-cell-selected-background: color-mix(in srgb, var(--ig-grid-accent-color) 24%, var(--ig-grid-background));
    --ig-grid-tree-selected-filtered-cell-text-color: var(--ig-secondary-500);
    --ig-grid-cell-selected-text-color: var(--ig-grid-foreground);
    --ig-grid-cell-editing-background: var(--ig-grid-background);
    --ig-grid-cell-editing-foreground: var(--ig-grid-foreground);
    --ig-grid-cell-editing-focus-foreground: var(--ig-grid-foreground);
    --ig-grid-edit-mode-color: var(--ig-grid-accent-color);
    --ig-grid-edited-row-indicator: color-mix(in srgb, var(--ig-grid-foreground) 16%, var(--ig-grid-background));
    --ig-grid-cell-new-color: var(--ig-grid-foreground);
    --ig-grid-cell-edited-value-color: color-mix(in srgb, var(--ig-grid-foreground) 80%, var(--ig-grid-background));
    --ig-grid-cell-disabled-color: color-mix(in srgb, var(--ig-grid-foreground) 50%, var(--ig-grid-background));
    --ig-grid-resize-line-color: var(--ig-grid-accent-color);
    --ig-grid-drop-indicator-color: var(--ig-grid-accent-color);
    --ig-grid-group-label-column-name-text: var(--ig-grid-accent-color);
    --ig-grid-group-label-icon: var(--ig-grid-accent-color);
    --ig-grid-group-label-text: color-mix(in srgb, var(--ig-grid-foreground) 80%, var(--ig-grid-background));
    --ig-grid-expand-all-icon-color: color-mix(in srgb, var(--ig-grid-foreground) 70%, var(--ig-grid-background));
    --ig-grid-expand-all-icon-hover-color: color-mix(in srgb, var(--ig-grid-foreground) 80%, var(--ig-grid-background));
    --ig-grid-expand-icon-color: color-mix(in srgb, var(--ig-grid-foreground) 60%, var(--ig-grid-background));
    --ig-grid-expand-icon-hover-color: color-mix(in srgb, var(--ig-grid-foreground) 70%, var(--ig-grid-background));
    --ig-grid-active-expand-icon-color: var(--ig-gray-500);
    --ig-grid-active-expand-icon-hover-color: var(--ig-primary-500);
    --ig-grid-group-count-background: color-mix(in srgb, var(--ig-grid-foreground) 12%, var(--ig-grid-background));
    --ig-grid-group-count-text-color: var(--ig-grid-foreground);
    --ig-grid-group-row-background: color-mix(in srgb, var(--ig-grid-foreground) 6%, var(--ig-grid-background));
    --ig-grid-group-row-selected-background: color-mix(in srgb, var(--ig-grid-foreground) 6%, var(--ig-grid-background));
    --ig-grid-filtering-header-background: var(--ig-grid-background);
    --ig-grid-filtering-header-text-color: var(--ig-grid-foreground);
    --ig-grid-filtering-row-background: var(--ig-grid-background);
    --ig-grid-filtering-row-text-color: var(--ig-grid-foreground);
    --ig-grid-filtering-dialog-background: var(--ig-grid-background);
    --ig-grid-tree-filtered-text-color: var(--ig-gray-500);
    --ig-grid-row-highlight: var(--ig-grid-accent-color);
    --ig-grid-row-ghost-background: var(--ig-grid-background);
    --ig-grid-row-ghost-border-color: hsl(from color-mix(in srgb, var(--ig-grid-foreground) 16%, var(--ig-grid-background)) h s l/0.38);
    --ig-grid-drop-area-border-radius: clamp(0rem, calc(var(--ig-radius-factor, 1) * 1rem), 1rem);
    --ig-grid-summaries-border-color: var(--ig-gray-400);
    --ig-grid-summaries-patch-background: color-mix(in srgb, var(--ig-grid-foreground) 12%, var(--ig-grid-background));
    --ig-grid-active-state-border-style: solid;
    --ig-grid-header-text-color: var(--ig-grid-foreground);
    --ig-grid-header-selected-background: color-mix(in srgb, var(--ig-grid-accent-color) 12%, var(--ig-grid-header-background));
    --ig-grid-header-selected-text-color: var(--ig-grid-header-text-color);
    --ig-grid-row-selected-background: color-mix(in srgb, var(--ig-grid-accent-color) 12%, var(--ig-grid-background));
    --ig-grid-row-selected-hover-background: color-mix(in srgb, var(--ig-grid-accent-color) 16%, var(--ig-grid-background));
    --ig-grid-row-selected-hover-text-color: var(--ig-grid-foreground);
    --ig-grid-body-column-selected-border-color: color-mix(in srgb, var(--ig-grid-accent-color) 16%, var(--ig-grid-background));
    --ig-grid-body-column-hover-selected-border-color: color-mix(in srgb, var(--ig-grid-accent-color) 12%, var(--ig-grid-background));
    --ig-grid-cell-selected-within-background: color-mix(in srgb, var(--ig-grid-accent-color) 24%, var(--ig-grid-background));
    --ig-grid-cell-selected-within-text-color: var(--ig-grid-foreground);
    --ig-grid-background: #08002e;
    --ig-grid-foreground: hsla(from color(from var(--ig-grid-background) var(--y-contrast)) h 0 l/1);
    --ig-grid-accent-color: #ff7d52;
}

.playground {
    display: flex;
    align-items: stretch;
    gap: 1.25rem;
    padding: 1rem;
    box-sizing: border-box;
    block-size: 100%;
    min-block-size: 32.5rem;
    overflow: hidden;
}

.playground__rail {
    --ig-size: var(--ig-size-medium);

    flex: 0 0 17.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    min-block-size: 0;
    padding-inline-end: 4px;
}

.playground__rail igc-accordion {
    overflow-y: auto;
}

.playground__rail igc-expansion-panel [slot="title"] {
    font-size: 0.8125rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: var(--ig-gray-700);
}

.playground .playground__hint {
    margin: 0 0 0.625rem;
    font-size: 0.75rem;
    line-height: 1.45;
    color: var(--ig-gray-600);
}

.playground__fields {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
}

.playground__color-control {
    anchor-scope: --grid-color-input;
}

.playground__color-control igc-color-picker {
    anchor-name: --grid-color-input;
    inline-size: 100%;
}

.playground__color-control igc-icon-button {
    position: absolute;
    position-anchor: --grid-color-input;
    inset-inline-end: calc(anchor(self-end) + 0.5rem);
    align-self: anchor-center;
    z-index: 1;
}

.playground__control {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
}

.playground__label {
    font-size: 12px;
    color: var(--ig-gray-700);
}

.playground__actions {
    position: sticky;
    inset-block-end: 0;
    z-index: 1;
    display: flex;
    gap: 0.5rem;
    padding-block: 0.5rem;
    background: var(--ig-surface-500);
    border-block-start: 1px solid var(--ig-gray-200);
}

.playground__actions igc-button {
    flex: 1;
}

.playground__dialog-title {
    font-size: 1rem;
    font-weight: 600;
}

.playground__dialog-body {
    --ig-size: var(--ig-size-medium);

    inline-size: min(42.5rem, 80vw);
    border: 0.0625rem solid var(--ig-gray-300);
    border-radius: 0.25rem;
    overflow: hidden;
}

.playground__code-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    background: var(--ig-gray-100);
    font-size: 0.875rem;
    font-weight: 600;
}

.playground__copy {
    margin-inline-start: auto;
}

.playground__code pre.shiki {
    margin: 0;
    padding: 0.625rem 0.75rem;
    font-size: 0.8125rem;
    line-height: 1.5;
    font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
    max-block-size: 55vh;
    overflow: auto;
    overscroll-behavior: contain;
}

.playground__preview {
    flex: 1 1 auto;
    min-inline-size: 0;
    min-block-size: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.playground__stage {
    flex: 1 1 auto;
    min-block-size: 0;
    overflow: hidden;
}

.playground__cell {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 100%;
}

.playground__cell igc-avatar {
    --ig-size: var(--ig-size-small);
}

igc-toggle-button[selected]::part(toggle) {
    z-index: 1;
}

@media (max-width: 860px) {
    .playground {
        flex-direction: column;
        block-size: auto;
        overflow: visible;
    }

    .playground__rail {
        flex: 0 0 auto;
        overflow: visible;
    }

    .playground__stage {
        min-block-size: 28.75rem;
    }
}
```

## API References

- [`IgcPivotGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcPivotGridComponent)

- `grid-theme`

## Additional Resources

- [Pivot Grid Overview](overview.md)

- [Palettes](../../themes/palettes.md)
- [Typography](../../themes/typography.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
