---
title: "Blazor Styling and Themes | Blazor Palette Generation | Infragistics"
description: "Ignite UI for Blazor palette generation turns each seed color into a family of shades whose contrast steps are fitted to the seed's hue and the surface they sit on."
keywords: "Ignite UI for Blazor, Infragistics, palette generation, fitted palettes, color scales, contrast, seed color, surface roles, Sass palette function"
license: MIT
mentionedTypes: []
llms:
  description: "Ignite UI for Blazor palette generation is the igniteui-theming palette function that turns seed colors into families of shades with predictable contrast between them."
last_updated: "2026-10-14"
_tocName: Palette Generation
---
# Palette Generation

Ignite UI for Blazor palette generation is the `igniteui-theming` palette function that turns seed colors into families of shades with predictable contrast between them.

## Overview

Every Ignite UI for Blazor palette starts as a handful of **seed** colors: `primary`, `secondary`, `surface`, and optionally `gray`, `info`, `success`, `warn`, and `error`. The `palette()` function in the `igniteui-theming` Sass library expands each seed into a **family** of shades. The color families get ten numbered shades, `50` to `900`, and four accent shades, `A100` to `A700`. The `gray` family gets the ten numbered shades only, and the `surface` family gets named layers instead of numbers. Every shade also gets a matching `-contrast` color, and the seed itself is kept as a `seed` variant.

The prebuilt Ignite UI for Blazor themes are compiled with this function, so it determines the colors you see even if you never write Sass. The function has two generators:

| Generator | How it builds a family | Where you meet it |
|---|---|---|
| `legacy` | Places the seed at `500` and multiplies its HSL saturation and lightness by fixed values to reach the other shades. Emits the shades as CSS relative colors of `500`. | Every prebuilt CSS theme and the predefined Sass palettes. |
| `fitted` | Solves each shade for a WCAG contrast target, fitted to how much color the seed's hue can hold. Emits each shade as a fixed color. | The default for any palette you generate with `palette()` in Sass. |

The rest of this section explains how the `fitted` generator works and why its shades behave the way they do.

### Seeds and Scales

The `legacy` generator ties every shade to the seed's starting lightness, which makes the quality of a family depend on where the seed happens to sit. Starting from a very dark seed, `hsl(210 80% 10%)`, the lightest shade it produces is `#012d5a`, so every shade in the family is dark. Starting from a very pale seed, `hsl(210 80% 90%)`, the multiplied lightness of shades `50` through `300` exceeds 100%, so all four resolve to white, and the darkest shade only reaches `#2793ff`.

The `fitted` generator separates the seed's **character** from the family's **structure**. The seed supplies the hue and how colorful the family is. A **scale** supplies how far the shades reach and how they are spaced. From the same two seeds, the `fitted` generator produces ten distinct shades each: `#e4ecf8` to `#0a1623` from the dark seed, and `#e4edf7` to `#0b1621` from the pale one.

Because the numbered shades take their positions from the scale, the seed rarely lands exactly on one of them. It stays available as the `seed` variant, `--ig-primary-seed`, so the exact brand color is never lost. A near-neutral seed, one with almost no chroma, produces a neutral family that keeps its slight tint instead of acquiring an arbitrary strong hue.



### Hue and Gamut

Two colors with the same HSL lightness do not look equally light: a yellow at 50% HSL lightness looks far lighter than a blue at 50%. The `fitted` generator works in OKLCH, where lightness and chroma track perception more closely, and measures every shade by its WCAG contrast rather than by a lightness number.

The amount of chroma a color can carry depends on its hue and lightness, and it narrows toward white and black. A pale blue cannot stay as colorful as a mid-tone blue and still be a displayable sRGB color. The `fitted` generator builds each family within its hue's sRGB boundary: it tapers chroma toward both ends of the scale, solves for the lightness that reaches each contrast target, and measures that contrast after mapping the color into sRGB. The accent shades are solved the same way against fixed contrast targets of their own, at the edge of what the hue can hold, which keeps them vivid.



### Contrast Targets

A scale is a list of contrast targets, measured against white for the color families. The default scale, `even`, runs from 1.18:1 at `50` to 18.23:1 at `900`, and multiplies each target by the same ratio to get the next one. Because the contrast between two shades is the ratio of their contrasts against white, equal ratios between neighbors mean that any two shades the same distance apart have the same contrast between them.

With `even`, shades five positions apart clear the 4.5:1 [WCAG AA minimum for normal text](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum): `50` with `500`, `100` with `600`, `200` with `700`, `300` with `800`, and `400` with `900`. That gives you a pairing rule that keeps holding when the seed changes:

```css
.status {
  background: var(--ig-primary-100);
  color: var(--ig-primary-600);
}
```

The rule covers the numbered shades of a family built with `even`. It does not cover arbitrary pairs, translucent colors, a custom scale, or the default `gray` scale (see [Grays and the Page](#grays-and-the-page)). Check the rendered foreground and background whenever you rely on a pair.

### Scale Shapes

A scale has two main controls. The **range** sets the contrast targets of the first and last shade. The optional **curve** redistributes the shades between them, using the same four control points as a CSS `cubic-bezier()` timing function: x is the position along the shades, y is the position within the range. Without a curve, the shades are spaced evenly.

Four presets ship with `igniteui-theming`:

| Preset | Shape | Five-pair AA rule |
|---|---|---|
| `even` | Even spacing from 1.18:1 to 18.23:1. The default for every family except `gray`. | 5 of 5 pairs |
| `material` | Fitted to the original Ignite UI grayscale. The default for `gray`. | 3 of 5 pairs on white |
| `tailwind` | Fitted to the Tailwind CSS v4 slate scale. | 5 of 5 pairs |
| `carbon` | Fitted to the IBM Carbon gray scale. | 5 of 5 pairs |

The presets borrow a rhythm, not a palette: your seed still supplies the color. A custom range or curve changes the contrast structure, so the five-pair rule no longer follows automatically. A narrower range, or a curve that bunches shades together, can take a pair below 4.5:1.



### Grays and the Page

A gray that is subtle on a white page can be conspicuous on a dark one, so the `gray` family reads a third scale setting, its **anchor**, which sets what the range is measured against:

- `anchor: 'surface'` measures against the surface color. Shade `50` stays closest to the page and higher numbers step away from it: darker in a light theme, lighter in a dark theme. This is the default for `even`, `tailwind`, `carbon`, and any scale you write.
- `anchor: 'white'` measures against white, the way the original grayscale was built. The ten grays are the same colors in every theme; on a dark surface they run in reverse, so `50` is the darkest. The `material` preset, the default for `gray`, uses this anchor, so moving an existing dark theme to the `fitted` generator keeps its components looking as they did.

Either way, low numbers mean low contrast with the page. When `$gray` is not passed, the gray seed is black on a light surface and white on a dark one.

A surface-anchored scale can ask for more contrast than the surface allows: white against a dark gray page cannot reach the 21:1 available between white and black. The generator then returns the closest shade it can reach and emits a Sass warning when the result misses its target by more than 5%.

### Surface Roles

The `surface` family is not a ramp of shades. A surface describes where something sits in the interface, so the family is a set of named **roles**:

| Role | CSS variable | Describes |
|---|---|---|
| `base` | `--ig-surface-base` | The page background: the surface seed itself. |
| `sunken` | `--ig-surface-sunken` | A layer set into the page, one step toward black. |
| `raised` | `--ig-surface-raised` | A layer above the page, one step toward white. |
| `overlay` | `--ig-surface-overlay` | A floating layer such as a menu or dialog, a larger step toward white. |
| `container` | `--ig-surface-container` | A translucent layer: black over a light surface, white over a dark one. |

A role that has no room to move resolves to the base color: on a pure white surface, `raised` and `overlay` are white too, and borders or elevations carry the separation. Both generators emit the same roles, and component themes reference `surface` through them; `color($color: 'surface')` returns `base` by default. The contrast color of the translucent `container` is measured on the container laid over `base`, since that is what text on it is read against.

Every palette also emits the numbered `surface` shades, such as `--ig-surface-500`, so that styles written against them keep resolving. They are deprecated and will be removed in a future release. In a `fitted` palette, `--ig-surface-500` points to `--ig-surface-base` and the other numbered shades derive from it; in a `legacy` palette, they derive from the surface seed as before.



## Before You Start

Find out which generator produced the palette you are working with, because the two behave differently at runtime:

- **Prebuilt CSS themes and the predefined Sass palettes** (`$light-material-palette` and the others) use the `legacy` generator. Their shades are CSS relative colors of `500`, so overriding `--ig-primary-500` updates the whole family in the browser, with no build step. See [Palettes](palettes.md).
- **Palettes you generate with `palette()` in Sass** use the `fitted` generator by default. Their shades are fixed colors computed at build time. Overriding one variable changes only that shade; to change a family, regenerate the palette with a new seed.

Generating a palette requires the `igniteui-theming` package and a Sass compiler; see [Customizing with Sass](overview.md#customizing-with-sass). The generator runs entirely during the Sass build; the application ships only the resulting CSS variables.

## Next Steps

- Override palette colors with CSS variables at runtime: [Palettes](palettes.md).
- Use the contrast and chart-palette functions that only Sass reaches: [Accessibility](accessibility.md).
- Set up Sass for Ignite UI for Blazor: [Customizing with Sass](overview.md#customizing-with-sass).

## Available Tools

| Tool | Purpose |
|---|---|
| `palette()` function | Builds a palette map from seed colors. Takes `$generator` and `$scales` to choose the generator and the scale of each family. |
| `palette()` mixin | Emits a palette map as `--ig-*` CSS variables. |
| `$shade-generator` | Sets the default generator for every `palette()` call in the build: `'fitted'` (default) or `'legacy'`. |
| `$scales` | The scale presets: `even`, `material`, `tailwind`, and `carbon`. |
| `$family-scales` | The default scale of each family. Unlisted families use `even`; `gray` uses `material`. |
| `color()` and `contrast-color()` functions | Read a shade, or its contrast color, as a CSS variable reference or from a palette map. |

## Common Workflows

### Generate a Palette

Generate a palette with the `fitted` generator and emit it as CSS variables. Load this stylesheet after the prebuilt theme so its variables take precedence.

```scss
@use 'igniteui-theming' as *;
```

```scss
$brand: palette(
  $primary: #0099ff,
  $secondary: #df1b74,
  $surface: #ffffff
);

:root {
  @include palette($brand);
}
```

The `$primary`, `$secondary`, and `$surface` arguments are required and must be Sass colors, not CSS variables, because the palette is computed at build time.

### Choose a Scale

Name a preset for one family, or for every family at once:

```scss
// The grays follow IBM Carbon's rhythm; every other family keeps its default
$brand: palette(#0099ff, #df1b74, #ffffff, $scales: ('gray': 'carbon'));

// Every family uses the tailwind preset
$brand: palette(#0099ff, #df1b74, #ffffff, $scales: 'tailwind');
```

Or describe a scale inline with a `range`, a `curve`, and, for `gray`, an `anchor`:

```scss
$brand: palette(
  #0099ff,
  #df1b74,
  #121212,
  $scales: (
    'primary': (range: 1.1 14, curve: 0.5 0 0.8 0.8),
    'gray': (range: 1.1 14, anchor: 'white')
  )
);
```

### Keep the Legacy Generator

Keep the multiplier-based shades, and runtime derivation from `500`, for one palette:

```scss
$brand: palette(#0099ff, #df1b74, #ffffff, $generator: 'legacy');
```

To switch every `palette()` call in the build, configure the module before anything else loads it:

```scss
@use 'igniteui-theming' as * with ($shade-generator: 'legacy');
```

## Troubleshooting

**Why does overriding `--ig-primary-500` no longer change the other primary shades?** The palette was generated with the `fitted` generator, which emits every shade as a fixed color instead of a relative color of `500`. Regenerate the palette in Sass with the new seed, or generate it with `$generator: 'legacy'` if you need runtime derivation from `500`.

**Should I still use `--ig-surface-500`?** No. The numbered surface shades are deprecated and kept only for compatibility. Map each reference to the role that matches its purpose, usually `--ig-surface-base` for the page background.

**What does `Shade "gray-900" wanted 18.232:1 but its hue only reaches 15.68:1` mean?** The scale asks for more contrast than the color and its anchor allow, most often a surface-anchored gray scale on a dark surface. The generator used the closest shade it could reach. Lower the top of the range, or anchor the scale to `'white'`.

## Additional Resources

- [Palettes](palettes.md)
- [Accessibility](accessibility.md)

- [Themes Overview](overview.md)
- [`igniteui-theming` on GitHub](https://github.com/IgniteUI/igniteui-theming)

## FAQ

  **Q: Does the fitted generator change the prebuilt Ignite UI for Blazor themes?**

    No. The prebuilt Ignite UI for Blazor themes and the predefined Sass palettes are built with the `legacy` generator, so their colors and their runtime behavior are unchanged. The `fitted` generator applies to palettes you generate with the `palette()` function in Sass.
  

  **Q: Do I need Sass to use Ignite UI for Blazor palettes?**

    No. The prebuilt Ignite UI for Blazor themes already contain a generated palette, and you can change it at runtime by overriding CSS variables. Sass is needed only to generate a new palette, for example with the `fitted` generator or a custom scale.
  

  **Q: Is a fitted palette accessible by default?**

    A fitted palette makes contrast predictable, not automatic. With the default `even` scale, shades five positions apart in a color family clear the 4.5:1 WCAG AA minimum for normal text, but the default `gray` scale clears it for three of those five pairs on white, and custom scales can clear it for fewer. Check every foreground and background pair you use in the rendered interface.
  
  **Q: Where is the exact seed color in a fitted palette?**

    A fitted palette keeps the exact seed color as the `seed` variant of each family, for example `--ig-primary-seed`. The numbered shades are placed by the scale, so the seed usually does not match `500` or any other shade exactly.
  
  **Q: Does palette generation run in the browser?**

    No. Ignite UI for Blazor palette generation runs during the Sass build, and the application receives only the resulting CSS variables. Only the `-contrast` colors are resolved by the browser, as CSS relative colors.
  

