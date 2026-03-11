---
title: Blazor Styling and Themes | Blazor Typography | Infragistics
_description:
_keywords: Ignite UI for Blazor, Infragistics, Typography, Styling
_license: MIT
mentionedTypes: ["Typography"]
_tocName: Typography
---

# Typography in Ignite UI for Blazor

The typography in Ignite UI for Blazor is modeled after the [Material Type System](https://material.io/design/typography/the-type-system.html#). It's non-intrusive and optional, allowing you to modify the type styles using CSS only.

## Overview

The type system is a ***type scale*** consisting of ***13 different category type styles*** used across most components. All of the scale categories are completely reusable and adjustable by the end user.

Here's a list of all 13 category styles as defined for the Bootstrap Theme in Ignite UI for Blazor:

| **Scale Category** | **Font Family** | **Font Weight** | **Font Size** | **Text Transform** | **Letter Spacing** | **Line Height** | **CSS Variables*- |
| ------------------ | --------------- | --------------- | ------------- | ------------------ | ------------------ | --------------- | ------------------- |
| **h1*-           | System Font     | 500             | 2.5 rem       | none               | -0.09375 rem       | 3 rem           | `--ig-h1-*`         |
| **h2*-           | System Font     | 500             | 2 rem         | none               | -0.0312 rem        | 2.4 rem         | `--ig-h2-*`         |
| **h3*-           | System Font     | 500             | 1.75 rem      | none               | 0                  | 2.1 rem         | `--ig-h3-*`         |
| **h4*-           | System Font     | 500             | 1.5 rem       | none               | 0.015625 rem       | 1.8 rem         | `--ig-h4-*`         |
| **h5*-           | System Font     | 500             | 1.25 rem      | none               | 0                  | 1.5 rem         | `--ig-h5-*`         |
| **h6*-           | System Font     | 500             | 1 rem         | none               | 0.009375 rem       | 1.2 rem         | `--ig-h6-*`         |
| **subtitle-1*-   | System Font     | 400             | .875 rem      | none               | 0.009375 rem       | 1.5 rem         | `--ig-subtitle-1-*` |
| **subtitle-2*-   | System Font     | 400             | .9 rem        | none               | 0.00625 rem        | 1.35 rem        | `--ig-subtitle-2-*` |
| **body-1*-       | System Font     | 400             | 1 rem         | none               | 0.03125 rem        | 1.5 rem         | `--ig-body-1-*`     |
| **body-2*-       | System Font     | 400             | .9 rem        | none               | 0.015625 rem       | 1.5 rem         | `--ig-body-2-*`     |
| **button*-       | System Font     | 500             | 1 rem         | none               | 0.046875 rem       | 1.5 rem         | `--ig-button-*`     |
| **caption*-      | System Font     | 400             | .75 rem       | none               | 0.025 rem          | 1 rem           | `--ig-caption-*`    |
| **overline*-     | System Font     | 400             | .625 rem      | uppercase          | 0.09375 rem        | 1 rem           | `--ig-overline-*`   |

Each theme defines its own type scale. This means each one of the themes we ship - Material, Fluent, Bootstrap, and Indigo will have its own type scale. They all share the same *scale categories*, but can have different font family, weight, size, text transform, letter spacing, and line height.

## Usage

### Changing font family

To change the font family in all components, all you have to do is overwrite the `--ig-font-family` CSS variable:

```css
:root {
  --ig-font-family: 'Helvetica Neue', sans-serif;
}
```

### Changing type styles

The type styles are used internally by most of the components in Ignite UI for Blazor. For instance, the `igc-button` component uses the button type style.
To change any of the type style properties, we need to overwrite the corresponding CSS variable:

```css
:root {
  --ig-button-font-size: 22px;
  --ig-button-line-height: 26px;
  --ig-button-text-transform: lowercase;
}
```

Keep in mind that this will update the global button typography styles. If you want to apply these changes to a specific button, you can make use of a class selector.

## API References

- `Typography`
