---
title: Web Components Styling and Themes | Web Components Elevations | Infragistics
_description:
_keywords: Ignite UI for Web Components, Infragistics, Elevations, Styling
_license: MIT
mentionedTypes: ["Elevations"]
_tocName: Elevations
---

# Elevations in Ignite UI for Web Components

The implementation of the Elevations in Ignite UI for Web Components is modeled after the [Elevations in Material Design](https://material.io/design/environment/elevation.html#elevation-in-material-design). They are used to establish and maintain functional boundaries between Document Object Model trees to enable better functional encapsulation.

## Overview

Ignite UI for Web Components shadows closely follow the Material Design guidelines for establishing depth hierarchy based on 25 elevation levels. The size of the shadow cast is related to the elevation level number. The higher the elevation level number, the larger the shadow will be. Elevations in Ignite UI for Web Components are exposed as CSS variables. Each variable stores a set of 3 `box-shadows`. These `box-shadows` represent the umbra, penumbra, and antumbra elements that are the properties of shadows as observed in the real world.

Here's a list of resting elevations as used in various components in Ignite UI for Web Components in the Bootstrap Theme and their corresponding CSS variable names:

| Component                                       | Default Elevation Level | CSS Variable       |
| ----------------------------------------------- | ----------------------- | ------------------ |
| Button                                          | 0                       | --ig-elevation-0  |
| Elevated Card                                   | 2                       | --ig-elevation-2  |
| Toast, Snackbar                                 | 10                      | --ig-elevation-10 |
| Navdrawer                                       | 16                      | --ig-elevation-16 |

As you can see from the **CSS Variable** column, all elevations are defined in the following format `--ig-elevation-[level]`. As mentioned, the elevation level number go from 0 through 24 (inclusive).

## Usage

To begin using elevations in your own components all you need is to reference the variable name of the desired level:

```css
.custom-element {
  box-shadow: var(--ig-elevation-6);
}
```

Changing the elevation in an existing component theme works in a similar way:

```css
igc-navbar {
  box-shadow: var(--ig-elevation-8);
}
```

## Defining Elevations

Updating the default elevations works in a similar way to updating the palette colors. You simply need to reassign the variable to a different value. With elevations, make sure the value is `box-shadow`.

Example:

```css
:root {
  --ig-elevation-1: 0 2px 6px 0 rgba(0, 0, 0, .18);
  --ig-elevation-2: 0 3px 9px 0 rgba(0, 0, 0, .24);
}
```

Now, all components that use elevation levels 1 and 2 will have their shadows updated.

### Shadowing

You can shadow the globally set elevations for a specific scope only. We already saw that the Snackbar and the Toast component use elevation level 10. To change the shadows for both of them, all you need to do is:

```css
igc-snackbar,
igc-toast {
  --ig-elevation-10: 0 3px 9px 0 rgba(0, 0, 0, .24);
}
```

This will set the toast and the snackbar shadows to the value assigned to `--ig-elevation-10`.

## Using Elevation Factor

In addition to elevation levels, Ignite UI for Web Components exposes a CSS variable that makes it easy to control the global elevation factor. The default value is set to 1 which means all component shadows will be the same as defined in their component themes. If you want to remove all shadows, you just need to change the property value to 0:

```css
:root {
  --ig-elevation-factor: 0;
}
```

The `--ig-elevation-factor` can also be set to a decimal value or a value bigger than 1. The bigger the value, the larger the shadow will be.

## API References

- `Elevations`
