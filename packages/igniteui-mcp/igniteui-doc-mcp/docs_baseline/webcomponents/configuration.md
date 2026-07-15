---
title: Web Components Styling and Themes | Web Components Theming | Theme Switching | Infragistics
_description: Use Infragistics' Web Components components to create apps and improve data visualization with the world’s fastest, virtualized, real-time Web Components data grid and streaming financial and business and financial charts.
_keywords: Ignite UI for Web Components, Infragistics, Themes, Styling
_license: MIT
mentionedTypes: ["ConfigureTheme"]
_tocName: Configuration
---

# Customizing Themes in Ignite UI for Web Components

The themes in Ignite UI for Web Components can be customized by altering various CSS variables. By overwriting those variables, you can customize the palettes, typography, elevations, roundness, size, and spacing.

## Overview

We cover palettes, typography, and elevations in the following sections, while this one will cover options that affect component styles on a global level via single variable modifications.

## Roundness

All components define some sort of roundness(border-radius). While some components provide attributes for setting the shape of the component, like the avatar and the badge, others, like the button, only define their border-radius internally as part of the theme. In those cases, you can play with the border-radius of those components by modifying the value of the `--ig-radius-factor` CSS variable. You can modify it globally in the `:root` scope, or you can modify it on component by component basis. The variable accepts a rational number value between 0 and 1. Setting the value to 0 effectively sets the border radius to 0. Setting the value to 1 sets the border radius to the predefined initial border radius. Any value between 0 and 1, like 0.5 for instance, will set the border radius to 50% of the default border radius defined in the stylesheet of the component.

Examples:

```css
/* Set the border-radius for all components to 50% of their default value. */
:root {
  --ig-radius-factor: .5;
}
```

```css
/* Set the border-radius of the button component to 0. */
igc-button {
  --ig-radius-factor: 0;
}
```

## Elevation

Similar to the global radius, some components define internal elevation(box-shadow). Making all components flat can be tedious if we go about doing so by overwriting the box-shadow for each one. You can modify the box-shadow behavior for all components by modifying the `--ig-elevation-factor` CSS variable. The variable accepts a rational number value between 0 and 1. Setting the value to 0 effectively sets the box-shadow of all components to none. Setting the value to 1 sets the elevation value to the predefined initial box-shadow values. Any value between 0 and 1, like 0.5 for instance, will set the box-shadow intensity to 50% of the original value defined in the stylesheet of the component.

```css
/* Set the elevation for all components to 50% of their original box-shadow values. */
:root {
  --ig-elevation-factor: .5;
}
```

## Size

Some components support variable sizing - `small`, `medium`, and `large` with a default size being set in the component stylesheet. You can modify the size of all components simultaneously or individually by utilizing the `--ig-size` CSS variable. Possible values are `var(--ig-size-small)`, `var(--ig-size-medium)`, or `var(--ig-size-large)`;

To set a specific size for all components in your application define the `--ig-size` variable in the `:root` scope.

Example:

```css
:root {
  --ig-size: var(--ig-size-small);
}
```

Alternatively, if you want to target only a specific component, scope the variable to the component's tag selector.

```css
igc-avatar {
  --ig-size: var(--ig-size-medium);
}
```

## Spacing

Spacing refers to the internal component paddings and margins as set by the component theme. Spacing can be horizontal(inline) and vertical(block). We've made it easy to control how various elements are padded within a component, without explicitly overwriting all padding and margin values manually for each component. This is done by the `--ig-spacing` CSS variable. You can set its value to any positive rational number. The spacing will scale accordingly. The default value is 1, which represents the default horizontal/vertical padding/margin as set in the component stylesheet. Changing the value to 1.5 will scale all spacing by 1,5 times or 150%. Conversely, setting the value to 0 will bunch everything together and reduce all spacing to the equivalence of no padding/margin. Changing the spacing factor works in tandem with the size property and will scale accordingly.

Some components only allow you to alter their spacing in one direction(horizontally or vertically), while others let you specify separate spacing values in both directions.

To alter the spacing for all components, you can overwrite its value in the `:root` scope.

Example:

```css
/* Increase the spacing for all components to 150%. */
:root {
  --ig-spacing: 1.5;
}
```

To change the spacing for a single component only, scope the variable to the component's tag selector.

```css
/* Reduce the spacing for the drop-down elements to 50% of their original value. */
igc-dropdown {
  --ig-spacing: 0.5;
}
```

As mentioned before, you can control the horizontal and vertical spacing individually for components that support it. This can be achieved by modifying the `--ig-spacing-inline`(horizontal) and `--ig-spacing-block`(vertical) variables. The principle is the same as with the `--ig-spacing` variable. Modifying the `--ig-spacing` variable only will change the spacing in both directions by the same amount.

## API References

- `ConfigureTheme`
