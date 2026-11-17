---
title: Angular Sass Palettes | Ignite UI for Angular
description: Ignite UI for Angular Sass palettes are maps of color shades generated from seed colors by the palette function and emitted as CSS variables for every component theme.
keywords: Ignite UI for Angular, Sass palettes, palette function, color function, contrast-color, color scales, fitted palettes, surface roles, CSS variables
llms:
  description: "Ignite UI for Angular Sass palettes are maps of color shades that the palette function generates from seed colors and the palette mixin emits as CSS variables."
last_updated: "2026-10-14"
_tocName: Palettes
---
# Palettes with Sass

Ignite UI for Angular Sass palettes are maps of color shades that the `palette()` function generates from seed colors and the `palette()` mixin emits as CSS variables.

## Overview

An Ignite UI for Angular palette is a [Sass map](https://sass-lang.com/documentation/values/maps) keyed by color family: `primary`, `secondary`, `gray`, `surface`, `info`, `success`, `warn`, and `error`. Each family is a map of its shades, and every component theme reads its colors from those shades through `--ig-*` CSS variables.

The `palette()` function builds the whole map from seed colors. With the default `fitted` generator, each family contains these variants:

| Family | Variants |
|---|---|
| `primary`, `secondary`, `info`, `success`, `warn`, `error` | `50`–`900`, `A100`, `A200`, `A400`, `A700`, `seed` |
| `gray` | `50`–`900`, `seed` |
| `surface` | `base`, `sunken`, `raised`, `overlay`, `container`, `seed` |

Every variant has a matching `-contrast` variant, such as `500-contrast`: black or white, resolved by the browser for readable contrast against that shade. The `primary` color is usually your brand color and styles prominent static elements such as the `igx-navbar`; `secondary` styles actionable elements such as buttons, switches, and sliders; `surface` is the background of components such as cards, menus, and pickers.

To understand how the shades are placed, and why the `surface` family has roles instead of numbers, see [Palette Generation](../palette-generation.md).

## Generate a Palette

Call `palette()` with the three required seeds, `$primary`, `$secondary`, and `$surface`, then pass the result to the `palette()` mixin to emit it as CSS variables:

```scss
@use "igniteui-angular/theming" as *;

$brand-palette: palette(
  $primary: #0099ff,
  $secondary: #df1b74,
  $surface: #ffffff
);

:root {
  @include palette($brand-palette);
}
```

The optional seeds are `$gray`, `$info` (`#1377d5`), `$success` (`#4eb862`), `$warn` (`#faa419`), and `$error` (`#ff134a`). The `theme()` mixin includes the `palette()` mixin for you, so include it directly only when you emit a palette on its own, for example to scope a second palette to a class.

**Warning:** 
Every seed you pass to `palette()` **must be a Sass color**. CSS variables cannot be passed as arguments, because the palette is computed at build time.

The `palette()` mixin also sets the WCAG level the `-contrast` colors are chosen for. Pass `$contrast-level` with `'a'`, `'aa'` (default), or `'aaa'`:

```scss
:root {
  @include palette($brand-palette, $contrast-level: 'aaa');
}
```

With the `fitted` generator, every shade is emitted as a fixed color:

```css
:root {
  --ig-primary-100: rgb(172, 207, 251);
  --ig-primary-500: rgb(9, 109, 183);
  --ig-primary-600: rgb(6, 89, 150);
  --ig-primary-seed: #0099ff;
  --ig-surface-base: rgb(255, 255, 255);
  --ig-surface-sunken: rgb(247, 247, 247);
  /* ... */
}
```

Because the shades are fixed, overriding one of these variables in CSS changes only that shade. To change a family, change its seed and rebuild.

## Scales

A scale sets how far a family's shades reach and how they are spaced. Pass `$scales` to `palette()` to replace the defaults: `even` for every family, `material` for `gray`.

Name a preset for one family, or pass one preset for every family:

```scss
// The grays follow IBM Carbon's rhythm; every other family keeps its default
$brand-palette: palette(#0099ff, #df1b74, #ffffff, $scales: ('gray': 'carbon'));

// Every family uses the tailwind preset
$brand-palette: palette(#0099ff, #df1b74, #ffffff, $scales: 'tailwind');
```

The presets are `even`, `material`, `tailwind`, and `carbon`. [Palette Generation](../palette-generation.md#scale-shapes) compares them.

Describe a scale inline with these keys:

| Key | Value | Effect |
|---|---|---|
| `range` | Two contrast ratios, such as `1.1 14` | The contrast of shade `50` and shade `900`. Defaults to the `even` range, `1.182 18.232`. |
| `curve` | Four numbers, such as `0.5 0 0.8 0.8` | Redistributes the shades along the range, read like a CSS `cubic-bezier()`. Omit it for even spacing. |
| `anchor` | `'surface'` or `'white'` | What the `gray` range is measured against. Defaults to `'surface'`. Other families are always measured against white. |

```scss
$brand-palette: palette(
  #0099ff,
  #df1b74,
  #121212,
  $scales: (
    'primary': (range: 1.1 14, curve: 0.5 0 0.8 0.8),
    'gray': (range: 1.1 14, anchor: 'white')
  )
);
```

A bare four-number list is read as a curve over the `even` range. A custom range or curve changes the contrast between shades: check the pairs you use after changing one.

<code-view iframe-src="{environment:demosBaseUrl}/themes/palettes/scales" github-src="themes/palettes/scales" alt="Angular Sass palettes: edit a scale's range, curve, and anchor and copy the Sass"></code-view>

## Generators

The `palette()` function has two generators. `fitted`, the default, solves each shade for a contrast target. `legacy` places the seed at `500` and derives the other shades with fixed HSL multipliers, emitted as CSS relative colors of `500`:

```css
:root {
  --ig-primary-500: #0099ff;
  --ig-primary-600: hsl(from var(--ig-primary-500) h calc(s * 1.26) calc(l * 0.89));
}
```

Keep the `legacy` generator for one palette with `$generator`, or for every `palette()` call in the build by configuring `$shade-generator` before anything else loads the library:

```scss
// One palette
$brand-palette: palette(#0099ff, #df1b74, #ffffff, $generator: 'legacy');
```

```scss
// Every palette() call in the build
@use "igniteui-theming" with ($shade-generator: 'legacy');
@use "igniteui-angular/theming" as *;
```

A `legacy` palette ignores the `$scales` argument.

<code-view iframe-src="{environment:demosBaseUrl}/themes/palettes/shades" github-src="themes/palettes/shades" alt="Angular Sass palettes: a predefined palette's families through the legacy and fitted generators"></code-view>

## Predefined Palettes

Ignite UI for Angular provides predefined light and dark palettes that pair with the matching schemas:

- Light palettes
  - `$light-material-palette`
  - `$light-fluent-excel-palette`
  - `$light-fluent-word-palette`
  - `$light-fluent-palette`
  - `$light-bootstrap-palette`
  - `$light-indigo-palette`
- Dark palettes
  - `$dark-material-palette`
  - `$dark-fluent-excel-palette`
  - `$dark-fluent-word-palette`
  - `$dark-fluent-palette`
  - `$dark-bootstrap-palette`
  - `$dark-indigo-palette`

Combine any light palette with a light schema, and any dark palette with a dark schema. The predefined palettes are built with the `legacy` generator, so a theme built on one of them keeps its relative-color shades and responds to runtime overrides of the `500` variants.

## Grayscale Colors

The `gray` family supplies most text, border, and disabled colors, and its shades are set against the surface. Pass `$gray` to choose the color the grays are built from:

```scss
$brand-palette: palette(
  $primary: #2ab759,
  $secondary: #f96a88,
  $surface: #222222,
  $gray: #ffffff
);
```

When `$gray` is omitted, the gray seed is black on a light surface and white on a dark one. With the default `material` scale, shade `50` is the gray nearest a white or near-black surface and `900` the farthest from it. See [Grays and the Page](../palette-generation.md#grays-and-the-page) for how the gray scale's anchor affects dark themes.

## Color Variants

The `color()` function returns a palette shade. It takes up to four arguments: `$palette`, `$color`, `$variant`, and `$opacity`.

```scss
// A reference to the CSS variable: var(--ig-primary-500)
$primary-500: color();

// var(--ig-primary-600)
$primary-600: color($variant: 600);

// The primary 600 shade at 50% opacity, as a CSS relative color
$primary-600-translucent: color($variant: 600, $opacity: 0.5);

// The surface's raised role: var(--ig-surface-raised)
$raised: color($color: 'surface', $variant: 'raised');

// The resolved color of the secondary A700 shade in $brand-palette
$secondary-a700: color($brand-palette, 'secondary', 'A700');

.panel {
  background: $raised;
  border-color: $primary-600;
}
```

Without `$palette`, `color()` returns a reference to the CSS variable, so the value follows whichever palette is emitted at runtime. With `$palette`, it returns the resolved color from that map. `$color` defaults to `primary`, and `$variant` defaults to `500`, or to `base` when `$color` is `surface`.

## Contrast Text Colors

The `contrast-color()` function returns the contrast color of a shade, and takes the same arguments as `color()`:

```scss
.callout {
  background: color($color: 'primary', $variant: 600);
  color: contrast-color($color: 'primary', $variant: 600);
}
```

The result is a CSS relative color that the browser resolves to black or white at the contrast level set by the `palette()` mixin.

## Color Classes

The `color-classes()` mixin generates a CSS class for every shade in the palette, assigning it to the CSS property you choose:

- `$prop` - The CSS property to assign the color to.
- `$prefix` - A prefix for the generated class names. Defaults to `'igx'`.
- `$suffix` - A suffix for the generated class names.
- `$palette` - The palette to use.

```scss
@include color-classes(
  $prop: 'background-color',
  $prefix: 'bg'
);
```

The `500` shade of `primary` becomes the class `.bg-primary-500`:

```html
<div class="bg-primary-500">...</div>
```

## Custom Palette Maps

Component themes read only the shape of the palette map, so a map you write by hand works as long as it has the keys the themes read. Quote every key, including the numeric variants, and give `surface` its roles:

```scss
$handmade-palette: (
  'primary': (
    '50': #e6eff8,
    '50-contrast': black,
    // ... '100' through '900', then 'A100', 'A200', 'A400', 'A700', each with a '-contrast' entry
    '500': #6797de,
    '500-contrast': white,
  ),
  // 'secondary', 'gray', 'info', 'success', 'warn', and 'error' follow the same pattern
  'surface': (
    'base': #ffffff,
    'base-contrast': black,
    'sunken': #f7f7f7,
    'sunken-contrast': black,
    'raised': #ffffff,
    'raised-contrast': black,
    'overlay': #ffffff,
    'overlay-contrast': black,
    'container': rgba(0, 0, 0, 0.03),
    'container-contrast': black,
  ),
);
```

The Ignite UI for Angular 22.3.0 component themes read the numbered shades of the color families and of `gray`, the accent shades of `primary` and `secondary`, and the `base` surface role. The other surface roles are there for your own styles. Include every variant listed in [Overview](#overview), so that styles which read the rest still resolve.

## Troubleshooting

**Why does overriding `--ig-primary-500` not update the other primary shades?** A palette generated with the `fitted` generator emits fixed colors. Change the seed passed to `palette()` and rebuild, or generate the palette with `$generator: 'legacy'` to keep runtime derivation from `500`.

**How do I migrate references to `--ig-surface-500` or `color($color: 'surface', $variant: 500)`?** The numbered surface shades are deprecated in favor of the roles. Every palette still emits them, so the references keep working while you migrate. Use `base` for the page or component background, `raised` or `overlay` for layers above it, `sunken` for layers set into it, and `container` for a translucent fill. `color($color: 'surface')` already returns `base`.

**Why does the build print `Shade "gray-900" wanted 18.232:1 but its hue only reaches …`?** The scale asks for more contrast than the color and its anchor allow, typically a surface-anchored gray scale on a dark surface. The generator used the closest shade it could reach. Lower the top of the `range`, or set `anchor: 'white'`.

## API References

- `palette() function`
- `color() function`
- `contrast-color() function`
- `color-classes() mixin`

## Additional Resources

- [Palette Generation](../palette-generation.md)
- [Palettes](../palettes.md)
- [Schemas](./schemas.md)
- [Global Themes](./global-themes.md)
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
