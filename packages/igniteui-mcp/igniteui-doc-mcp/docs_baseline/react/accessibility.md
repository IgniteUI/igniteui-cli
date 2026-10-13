---
title: "React Styling and Themes | React Accessibility | Infragistics"
description: "How the Ignite UI for React theming engine supports accessibility - automatic text contrast, relative text scaling, and a color-vision-deficiency chart palette."
keywords: "Ignite UI for React, Infragistics, Accessibility, Contrast, WCAG, Styling, Themes"
license: MIT
last_updated: "2026-08-31"
mentionedTypes: []
llms:
  description: "Ignite UI for React calculates text colors against a WCAG contrast threshold at runtime, keeps every type scale relative, and ships an opt-in color-vision-deficiency chart palette."
_tocName: Accessibility
---
import DocsAside from 'igniteui-astro-components/components/mdx/DocsAside.astro';
import Faq from 'igniteui-astro-components/components/mdx/Faq.astro';
import FaqItem from 'igniteui-astro-components/components/mdx/FaqItem.astro';

# Accessibility in Ignite UI for React

The Ignite UI for React theming engine builds accessibility into the styling layer: it calculates a text color for any background color at runtime and measures it against a WCAG contrast threshold, expresses every type scale in relative units so text scales with the user's settings, and ships an opt-in color palette for readers with color-vision deficiency.

## Overview

Accessibility in Ignite UI for React is delivered by two layers that you configure independently:

| Layer | What it is responsible for | Where it is documented |
|---|---|---|
| **Theming engine** (`igniteui-theming`) | Color contrast, text sizing, chart color palettes, and the styling utilities that keep custom controls reachable by assistive technology. | This page. |
| **Component library** (`igniteui-react`) | Keyboard operability, focus movement, ARIA roles and states, and screen-reader announcements. | [Accessibility Compliance](../interactivity/accessibility-compliance.md) and each component topic. |

This page covers the first layer. It describes capabilities that apply to every component you style with the theming engine, including components you build yourself on top of it.

The table below summarizes what the theming engine does for the person ultimately using your application. Each row is an input your application builds on, not a conformance outcome: you supply the colors, the engine generates pairings measured against a WCAG threshold, and verifying that the finished product conforms remains your responsibility.

| A person who… | What the theming engine provides |
|---|---|
| Needs readable text on colored buttons, chips, and badges | A foreground color is calculated in the browser for every generated palette color — including brand colors you supply — and measured against the WCAG contrast level you configure (AA by default). |
| Enlarges their default browser font size | Every type scale is expressed in relative units, and the library never pins the page font size. |
| Has a color-vision deficiency and reads charts | An opt-in chart palette chosen to stay distinguishable under common forms of color-vision deficiency. |
| Prefers a dark interface for light sensitivity | A complete dark palette for each of the four shipped themes. |
| Uses a screen reader with a custom-styled form control | A styling utility that hides a native input visually while keeping it in the accessibility tree. |

## Before You Start

Three boundaries determine what you can rely on from this page.

**The theming engine styles; it does not add semantics.** ARIA roles, keyboard handling, and focus management come from the component library, not from the theme. Applying a theme does not make a custom control accessible on its own.

**The contrast calculation applies to generated palette colors.** The engine calculates foreground colors for palettes produced by the `palette()` generator. Individual component themes may also pair a specific foreground token with a specific background token by hand; those pairings are set per theme and are not produced by the contrast calculation described below. When you override component tokens directly, verify the result with [`contrast()`](#check-a-contrast-ratio-yourself).

**Conformance of the finished product is yours to verify.** The engine controls its inputs — palettes, calculated pairings, type scales — not how your application uses them. A palette built from your brand colors can reach full conformance, but the engine cannot claim that outcome for you; confirm the rendered result before stating conformance.

**Note:** 
The capabilities on this page describe the theming engine's behavior. They are not a conformance statement for Ignite UI for React as a product. For per-component conformance information, see [Accessibility Compliance](../interactivity/accessibility-compliance.md).

## Next Steps

- Use [`contrast-color()`](#keep-text-readable-on-a-brand-color) wherever you place text on a palette color, instead of hard-coding a foreground.
- Turn on the [color-vision-deficiency chart palette](#enable-the-color-vision-deficiency-chart-palette) if your application renders charts.
- Run any custom color pairing you introduce through [`contrast()`](#check-a-contrast-ratio-yourself) before shipping it.
- If you generate palettes with the [Theming MCP server](../ai/theming-mcp.md), it checks surface and gray contrast against WCAG thresholds as it builds them.

## Available Tools

The theming engine exposes these Sass functions and mixins for the accessibility behavior described on this page.

**Note:** 
These are Sass APIs: they need a Sass build with `igniteui-theming` resolvable from your load paths, as described in [Customizing with Sass](overview.md#customizing-with-sass). If you use the prebuilt theme CSS instead, you still get calculated contrast colors - pair each palette color with its `-contrast` variable, for example `var(--ig-primary-500-contrast)`, and set the threshold with `--ig-contrast-level`. The chart palette, `hide-default()`, and the `contrast()` and `luminance()` functions have no CSS-only equivalent.

| Tool | Signature | What it does |
|---|---|---|
| `contrast-color()` | `contrast-color($palette: null, $color: primary, $variant: 500, $opacity: null)` | Returns a readable foreground color for a palette color. Every argument is optional; omit `$palette` to resolve the shade through its CSS variable. |
| `adaptive-contrast()` | `adaptive-contrast($color)` | Returns a readable foreground color for any color you pass, including one held in a CSS variable. |
| `contrast()` | `contrast($background, $foreground)` | Returns the WCAG contrast ratio between two colors. |
| `luminance()` | `luminance($color)` | Returns a color's relative luminance, from `0` (black) to `1` (white). |
| `configure-colors()` | `configure-colors($enhanced-accessibility: null)` | Switches chart themes to the color-vision-deficiency palette. |
| `hide-default()` | `@include hide-default()` | Hides a native input visually while keeping it in the accessibility tree. |

## Common Workflows

### Keep text readable on a brand color

Pair every background drawn from the palette with `contrast-color()` rather than a hard-coded `black` or `white`:

```scss
.my-component {
    background: color($color: 'primary', $variant: 500);
    color: contrast-color($color: 'primary', $variant: 500);
}
```

The same pairing in plain CSS, using the variables the theme already emits:

```css
.my-component {
  background: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
}
```

For a color that does not come from the palette — a tenant color, a user preference, a value set at runtime — use `adaptive-contrast()`:

```scss
.my-component {
    --bg: #09f;

    background: var(--bg);
    color: adaptive-contrast(var(--bg));
}
```

`adaptive-contrast()` is a thin wrapper over a relative-color expression, so the same result is available without Sass. `--y-contrast` is defined by the theme:

```css
.my-component {
  --bg: #09f;

  background: var(--bg);
  color: hsla(from color(from var(--bg) var(--y-contrast)) h 0 l / 1);
}
```

The calculation happens in the browser rather than at build time. If the background color changes after the stylesheet is compiled, the foreground color is recalculated to match, so the pairing survives runtime theme switching and per-tenant branding.

**Note:** 
`adaptive-contrast()` selects between black and white. Because those are the two available outcomes, the ratio the mechanism can achieve against a mid-tone background is bounded at roughly 4.6:1. That satisfies the WCAG AA threshold of 4.5:1 for normal text, which is the default the engine is configured for. Do not rely on this mechanism alone to reach the 7:1 AAA threshold; reaching AAA requires choosing background colors that are light or dark enough to allow it.

### Set the contrast level

The calculated foreground is measured against a WCAG threshold held in the `--ig-contrast-level` CSS variable, which defaults to `var(--ig-wcag-aa)`. Three levels are predefined: `a`, `aa`, and `aaa`.

Set the level for the whole application when you generate the palette:

```scss
@include palette($palette, $contrast-level: 'aaa');
```

To raise the level for one part of the page only, override the variable on that scope:

```css
.high-contrast-panel {
  --ig-contrast-level: var(--ig-wcag-aaa);
}
```

The contrast level moves the luminance threshold at which the calculated foreground switches between black and white; it does not change which two colors can be chosen, and setting `aaa` does not by itself make a pairing conform — that depends on the background colors you chose. Verify with [`contrast()`](#check-a-contrast-ratio-yourself). See [Palettes](palettes.md) for the generated contrast variables.

### Scale text with the user's browser settings

No configuration is required. Every type scale in the four shipped themes expresses `font-size`, `line-height`, `letter-spacing`, and margins through the `rem()` function, so all emitted values are relative to the root font size.

The library records the base size as a value you can read:

```css
--ig-base-font-size: 16px;
```

It never emits a `html { font-size: … }` rule. This matters because writing that rule is the most common way a theming system overrides a user who has enlarged their default text. Because the library only reads the base size, a user who sets a larger default in their browser gets larger Ignite UI for React text.

This addresses WCAG 2.1 <a href="https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html" target="_blank" rel="noopener noreferrer">1.4.4 Resize Text</a> (Level AA) at the styling layer.

### Raise or lower the contrast threshold

The level at which the calculated foreground flips from black to white is held in a CSS variable, so it can be changed without Sass. It defaults to AA:

```css
:root {
  --ig-contrast-level: var(--ig-wcag-aaa);
}
```

From Sass, the `palette()` and `adaptive-contrast()` mixins take `a`, `aa`, or `aaa` directly.

### Enable the color-vision-deficiency chart palette

Charts commonly distinguish series by hue alone, which does not work for readers with a color-vision deficiency. The theming engine ships a second chart palette whose colors stay distinguishable under the common forms of that condition.

The palette is **off by default**. Turn it on with `configure-colors()`:

```scss
// Include at the top level, before your theme includes.
@include configure-colors($enhanced-accessibility: true);
```

Every chart theme then draws from the accessible set. The chart brushes are set when the theme is generated, so this one requires Sass; the prebuilt theme CSS exposes no variables for them.

**Note:** 
Color alone should not be the only way a chart conveys meaning. Pair this palette with direct labels, distinct markers, or dash patterns so the chart also works in grayscale.

### Check a contrast ratio yourself

The engine implements the WCAG relative-luminance formula and exposes it, so you can check your own color choices against the same implementation the library uses:

```scss
$ratio: contrast(#09f, #000);   // 7
$lum: luminance(#09f);          // 0.3
```

Use this whenever you override a component token directly, or introduce a color pairing the palette generator did not produce. These two run at compile time and have no CSS equivalent - a stylesheet cannot compute a ratio.

### Hide an input without hiding it from screen readers

Custom-styled checkboxes, radios, and switches usually keep a native input underneath for semantics and keyboard behavior. Hide it with `hide-default()`:

```scss
.my-checkbox input {
    @include hide-default();
}
```

The mixin expands to a fixed set of declarations, so it can be written directly in CSS:

```css
.my-checkbox input {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: none;
  clip: rect(0, 0, 0, 0);
  outline: 0;
  pointer-events: none;
  overflow: hidden;
  appearance: none;
}
```

The mixin moves the input out of view while leaving it in the accessibility tree, so it keeps its role, its keyboard behavior, and its screen-reader announcements. Using `display: none` or `visibility: hidden` instead removes the control from assistive technology entirely and breaks the component for anyone not using their eyes.

### Use a dark theme

Each of the four shipped themes — Material, Bootstrap, Fluent, and Indigo — provides a complete dark palette alongside its light one. Dark presentation is an accessibility need for some users, including those with light sensitivity, so treat it as a supported configuration rather than a cosmetic preference. See [Palettes](palettes.md) for how to select one.

## Troubleshooting

**Text on a component I restyled is hard to read.** You have likely replaced a background token without replacing its paired foreground token. Set the foreground with `contrast-color()` or `adaptive-contrast()` rather than a fixed value, then confirm the result with `contrast()`.

**I set `$contrast-level: 'aaa'` but my colors did not change much.** The contrast level moves the luminance threshold at which the calculated foreground switches between black and white. It does not tint the foreground, so it cannot raise the achievable ratio past the bound described above. To reach AAA, change the background colors themselves.

**My chart colors did not change after enabling the accessible palette.** `configure-colors()` must be included before the chart themes are generated. Move the include above your theme includes.

**Text does not grow when I increase the browser font size.** Check your own application styles for an `html { font-size: … }` rule or `font-size` values in `px`. The theming engine does not emit either.

## Additional Resources

- [Palettes](palettes.md) — how palette colors and their contrast companions are generated.
- [Typography](typography.md) — the type scales and how to customize them.
- [Accessibility Compliance](../interactivity/accessibility-compliance.md) — per-component conformance information.
- <a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer">WCAG 2.1 Quick Reference</a> — the success criteria referenced on this page.
- <a href="https://www.w3.org/WAI/ARIA/apg/patterns/" target="_blank" rel="noopener noreferrer">WAI-ARIA Authoring Practices</a> — expected keyboard and ARIA behavior per interaction pattern.

## FAQ

  **Q: Does applying an Ignite UI theme make my application accessible?**

    No. The theming engine handles color contrast, text sizing, and chart palettes. Keyboard operability, ARIA semantics, and screen-reader support come from the component library and from your own markup.
  

  **Q: Do I still get readable text if I supply my own brand color?**

    Yes — for colors used through the palette, measured against the configured level (AA by default). The foreground is recalculated in the browser whenever the background changes, including at runtime. Pairings you set by hand are outside the calculation; verify them with <code>contrast()</code>.
  

  **Q: What does the contrast level setting actually change?**

    It moves the luminance threshold at which the calculated foreground switches from black to white. It does not change the two colors that can be chosen, so it does not raise the maximum ratio the mechanism can reach.
  

  **Q: Is the color-vision-deficiency chart palette on by default?**

    No. Enable it with <code>configure-colors($enhanced-accessibility: true)</code>.
  

  **Q: Do I need to configure anything for text scaling?**

    No. Every type scale is already relative, and the library never sets the page font size. Check your own application styles if text does not scale.
  

