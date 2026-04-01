---
title: Typography
_description:
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
_extraFont: https://fonts.googleapis.com/css?family=Titillium+Web:300,400,600,700
_tocName: Typography
---

# Typography

<p class="highlight">
The typography in Ignite UI for Angular is modeled after the [Material Type System](https://material.io/design/typography/the-type-system.html#). It's non-intrusive and optional, allowing you to modify the type styles using CSS only.
</p>

## Overview

The type system is a **_type scale_** consisting of **_13 different category type styles_** used across most components. All of the scale categories are completely reusable and adjustable by the end user.

Here's a list of all 13 category styles as defined for the Material Theme in Ignite UI for Angular:

| **Scale Category** | **Font Family** | **Font Weight** | **Font Size** | **Text Transform** | **Letter Spacing** | **Line Height** | **CSS Class**               | **CSS Variables**   |
| ------------------ | --------------- | --------------- | ------------- | ------------------ | ------------------ | --------------- | --------------------------- | ------------------- |
| **h1**             | Titillium Web   | 300             | 6 rem         | none               | -.09375 rem        | 7 rem           | `ig-typography__h1`         | `--ig-h1-*`         |
| **h2**             | Titillium Web   | 300             | 3.75 rem      | none               | -.0312 rem         | 4.4375 rem      | `ig-typography__h2`         | `--ig-h2-*`         |
| **h3**             | Titillium Web   | 400             | 3 rem         | none               | 0                  | 3.5625 rem      | `ig-typography__h3`         | `--ig-h3-*`         |
| **h4**             | Titillium Web   | 400             | 2.125 rem     | none               | .015625 rem        | 2.5 rem         | `ig-typography__h4`         | `--ig-h4-*`         |
| **h5**             | Titillium Web   | 400             | 1.5 rem       | none               | 0                  | 1.75 rem        | `ig-typography__h4`         | `--ig-h5-*`         |
| **h6**             | Titillium Web   | 600             | 1.25 rem      | none               | .009375 rem        | 1.5 rem         | `ig-typography__h4`         | `--ig-h6-*`         |
| **subtitle-1**     | Titillium Web   | 400             | 1 rem         | none               | .009375 rem        | 1.5 rem         | `ig-typography__subtitle-1` | `--ig-subtitle-1-*` |
| **subtitle-2**     | Titillium Web   | 600             | .875 rem      | none               | .00625 rem         | 1.5 rem         | `ig-typography__subtitle-2` | `--ig-subtitle-2-*` |
| **body-1**         | Titillium Web   | 400             | 1 rem         | none               | .03125 rem         | 1.75 rem        | `ig-typography__body-1`     | `--ig-body-1-*`     |
| **body-2**         | Titillium Web   | 400             | .875 rem      | none               | .015625 rem        | 1.25 rem        | `ig-typography__body-2`     | `--ig-body-2-*`     |
| **button**         | Titillium Web   | 600             | .875 rem      | uppercase          | .046875            | 1 rem           | `ig-typography__button`     | `--ig-button-*`     |
| **caption**        | Titillium Web   | 400             | .75 rem       | none               | .025 rem           | 1 rem           | `ig-typography__caption`    | `--ig-caption-*`    |
| **overline**       | Titillium Web   | 400             | .625 rem      | uppercase          | .09375 rem         | 1 rem           | `ig-typography__overline`   | `--ig-overline-*`   |

<div class="divider"></div>

Each theme defines its own type scale. This means each one of the themes we ship - Material, Fluent, Bootstrap, and Indigo will have its own type scale. They all share the same _scale categories_, but can have different font family, weight, size, text transform, letter spacing, and line height.

## Usage
>
> [!IMPORTANT]
> By default we don't apply any typography styles. To use our typography in your application you have to set the `ig-typography` CSS class on a top-level element. All of its children will then use our typography styles.

We have selected [Titillium Web](https://fonts.google.com/selection?selection.family=Titillium+Web:300,400,600,700) to be the default font for the Material Theme in Ignite UI for Angular. To use it you have to host it yourself, or include it from Google Fonts:

```html
<link
  href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,600,700"
  rel="stylesheet"
/>
```

Enable the typography styles by setting the `ig-typography` class on the body element.

```html
<!-- index.html -->
<body class="ig-typography">
  <app-root></app-root>
</body>
```

### Changing the Font Family

To change the font family in all components, all you have to do is overwrite the `--ig-typography` CSS variable with another font-family value;

```css
/* styles.css */
:root {
    --ig-font-family: "Open Sans", sans-serif;
}
```

## Type Styles

The type styles are used internally by most of the components in Ignite UI for Angular. For instance, the documentation says the button component uses the button type style. This means that we can modify the typography of the button component by overwriting the included `--ig-button-*` CSS variables.

Let's say we want to change the text of the button in the Material Theme to always be lowercase.

```css
:root {
    --ig-button-text-transform: lowercase;
}
```

<div class="divider"></div>

## Additional Resources

- [Typography with Sass](./sass/typography.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
