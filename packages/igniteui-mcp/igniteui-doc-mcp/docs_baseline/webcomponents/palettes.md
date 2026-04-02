---
title: Web Components Styling and Themes | Web Components Palettes | Infragistics
_description:
_keywords: Ignite UI for Web Components, Infragistics, Palettes, Styling
_license: MIT
mentionedTypes: ["Palettes"]
_tocName: Palettes
---

# Palettes in Ignite UI for Web Components

Ignite UI for Web Components exposes CSS variables that allow you to update the colors in your application consistently.

## Overview

Palettes in Ignite UI for Web Components provide over 80 color variants as CSS variables for 8 base colors - `primary`, `secondary`, `surface`, `gray`, `info`, `success`, `warn`, and `error`.

The `primary`, `secondary`, and `gray` colors follow the [2014 Material Design Color Palette](https://material.io/design/color/the-color-system.html#tools-for-picking-colors). This means these colors include the following variants:

<table>
    <tr>
        <th colspan="10" style="text-align: center !important">All</th>
        <th colspan="4" style="text-align: center !important"><b>Primary & Secondary Only</b></th>
    </tr>
    <tr>
        <td>50</td>
        <td>100</td>
        <td>200</td>
        <td>300</td>
        <td>400</td>
        <td>500</td>
        <td>600</td>
        <td>700</td>
        <td>800</td>
        <td>900</td>
        <td><b>A100</b></td>
        <td><b>A200</b></td>
        <td><b>A400</b></td>
        <td><b>A700</b></td>
    </tr>
</table>

<div class="divider--half"></div>

As the table above shows, the `gray` color doesn't include the `A100`, `A200`, `A400`, and `A700` variants, while the `primary` and `secondary` colors contain all 14 color variants. We include 5 additional colors that are not part of the 2014 Material Design Color Palette - `info`, `success`, `warn`, `error`, and `surface`.

On top of the aforementioned colors, we also include **Level AA** [WCAG](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) compliant `contrast` colors for each color variant. This means that you can safely use the corresponding `contrast` color variants as foreground colors for the base color variant.

> [!Note]
> Contrast colors are generated at build-time therefore overriding the CSS variables will not update the corresponding contrast colors.

Here's an excerpt of the `primary` color as declared in the Light Bootstrap Palette:

```css
:root {
  //...
  --ig-primary-500: #09f;
  --ig-primary-500-contrast: black;
  --ig-primary-600: hsl(from var(--ig-primary-500) h calc(s * 1.26) calc(l * 0.89));
  --ig-primary-600-contrast: black;
  --ig-primary-700: hsl(from var(--ig-primary-500) h calc(s * 1.26) calc(l * 0.81));
  //...
  --ig-secondary-400: hsl(from var(--ig-secondary-500) h calc(s * 0.875) calc(l * 1.08));
  --ig-secondary-400-contrast: black;
  --ig-secondary-500: #df1b74;
  --ig-secondary-500-contrast: white;
  --ig-secondary-600: hsl(from var(--ig-secondary-500) h calc(s * 1.26) calc(l * 0.89));
  --ig-secondary-600-contrast: white;
  //...
}
```

All primary color variants are derived from one base variable color variant `--ig-primary-500`. The same goes for the other color variables `--ig-secondary-500`, `--ig-surface-500`, etc. The other variants are generated through the relative color function `hsl()` which takes the main variable color variant `500` and changes it's `staturation` and `lightness` according to the variable variant which is assigned on (`600`,`700`, etc.). We decided to use this approach as it allows us to modify all variants of the `primary`, `secondary`, `surface` and other colors at runtime.

> [!WARNING]
> Because the contrast colors are not generated at CSS runtime like the rest, if we change the main color variant(`500`), the contrast color would not be updated. We would need to change them manually. This behavior will be improved upon in an upcoming release, where the contrast colors will also be calculated at CSS runtime.

## Defining Palettes

If you wanted to change the color variants for a color from the palette, you can do so by overriding its `500` color variant. For instance, changing the primary colors is as easy as writing:

```css
:root {
  --ig-primary-500: #09f;
}
```

This will automatically update all the other primary variants.

You will notice that color variants for each color are monochromatic. This is because all color variants are generated with the relative color function `hsl()`.

```css
:root {
  --ig-primary-600: hsl(from var(--ig-primary-500) h calc(s * 1.26) calc(l * 0.89));
}
```

## Scoping

We've seen that overriding colors in the palette is relatively easy. The _global_ palette can be updated by scoping color variants to the `:root` selector in the `styles.css` file of our application.

Let's say your corporate primary color is `#9f349c` and you want to create primary variants for it. All you need to do is to replace the `--ig-primary-500` variable with the desired color in any color value type - RGB, HEX, etc.

```css
:root {
  --ig-primary-500: #9f349c;
}
```

This will automatically alter each primary color variant.

Apart from having a single global palette, you can also create several palettes scoped to other CSS selectors. For example, we can have a blue and red palette scoped to class selectors:

```css
/* styles.css */

.blue-theme {
  --ig-primary-500: #0008ff;
}

.red-theme {
  --ig-primary-500: #ff0400;
}
```

Then you can simply overhaul the colors in your application by changing the value of the class attribute from `blue-theme` to `red-theme`.

## Dark vs. Light

Palettes in Ignite UI for Web Components dictate whether a theme is going to be light or dark. The two colors that have the biggest impact on that are `gray` and `surface`. See, the `gray` color variants in all themes are based on either a very light color shade, like `#fff`, or a very dark one like `#222`. Light themes have `gray` variants based on dark shades of gray, while dark themes are the opposite - all `gray` variants are a shade of white. These `gray` colors will be displayed against another color, usually the `surface` color. The `surface` color should always be on the opposite end of the `gray` in the gray scale to ensure themes look good.

To make this a bit clearer, below is the complete list of all `gray` and `surface` color variants in both a light and a dark theme.

**Bootstrap Light:**

```css
:root {
  //...
  /* surface is set to light color*/
  --ig-surface-500: white;
  //...
  /* grays are based on dark gray to contrast the surface color */
  --ig-gray-500: hsl(0, 0%, 62%);
  //...
}
```

**Bootstrap Dark:**

```css
:root {
  //...
  /* surface is set to dark color*/
  --ig-surface-500: #222;
  //...
  /* grays are based on light gray to contrast the surface color */
  --ig-gray-500: hsl(0, 0%, 74%);
  //...
}
```

Be mindful when changing the `gray` and `surface` color variants as they are used in most components and have a big impact on their overall look and feel.

## Other Colors

So far we've covered the `primary`, `secondary`, `gray`, and `surface` color variants and how you can override them. There are four more colors - `info`, `success`, `warn`, and `error`. They are usually used to set the colors in different states. For example, the `igc-input-group` component uses these colors in its input validation states. They can be changed as the other color variants, all we need to do it to set the `500` variant and all of the other variants will be generated.

```css
:root {
  --ig-info-500: #1377d5;
  --ig-success-500: #4eb862;
  --ig-warn-500: #faa419;
  --ig-error-500: #ff134a;
}
```

## API References

- `Palettes`
