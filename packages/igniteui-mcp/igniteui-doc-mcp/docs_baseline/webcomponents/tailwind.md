---
title: Tailwind Integration for Web Components
_description: Learn how to integrate Tailwind CSS with custom utility classes from the Ignite UI theming engine. This guide walks you through the setup and demonstrates how to use design tokens for colors, typography, and shadows in a utility-first approach.
_keywords: Ignite UI for Web Components, Infragistics, Themes, Styling, Tailwind CSS, custom CSS, utility classes, theming engine, typography, shadows, colors
_license: MIT
mentionedTypes: ["ConfigureTheme"]
_tocName: Custom Tailwind Classes
---

# Tailwind CSS Integration with Ignite UI for WebComponents

Ignite UI for WebComponents offers full theming customization through CSS variables. In this guide, you'll learn how to integrate Tailwind CSS into your project and enhance it with custom utility classes provided by the `igniteui-theming` package. These classes expose Ignite UI design tokens for colors, shadows, and typography, enabling a seamless utility-first styling experience. <br>

## Overview

This guide assumes you already have **Ignite UI Theming** installed. If not, run:

```cmd
npm install igniteui-theming
```

## Tailwind Setup

Start by installing Tailwind CSS, according to your chosen build tool or framework by following the [official Tailwind installation guide](https://tailwindcss.com/docs/installation).

Once Tailwind is set up, import both Tailwind and the Ignite UI theming configuration in your global stylesheet.

```css
@import 'tailwindcss';
@import 'igniteui-theming/tailwind/theme';
```

If your project uses `sass` for styling:

```scss
@import "tailwindcss";
@use "igniteui-theming/tailwind/theme";
```

## Using Ignite UI Custom Utility Classes

The `igniteui-theming` package includes a custom Tailwind configuration that exposes Ignite UI design tokens through utility classes. These include support for:

- Colors and contrast colors

- Elevation (shadows)

- Typography styles

Let’s look at how to use each.

### Color Utility Classes

Our color utility classes are powered by tokens from each Ignite UI theme. You can apply them directly in your HTML:

<!-- WebComponents -->

```html
<h1 class="bg-primary-500 text-primary-500-contrast">This is a title</h1>
```

<!-- end: WebComponents -->

You can explore Tailwind’s full color system in this [topic](https://tailwindcss.com/docs/color), and apply it using the Ignite UI-provided class names. <br>

### Shadow utility classes

You can add depth using any of the predefined [elevation levels](https://www.infragistics.com/products/ignite-ui-web-components/web-components/components/themes/elevations) (from 0 to 24):

<!-- WebComponents -->

```html
<div class="shadow-elevation-8">Elevated container</div>
```

<!-- end: WebComponents -->

You can find all the shadow-related utility classes provided by Tailwind in this [topic](https://tailwindcss.com/docs/box-shadow) <br>

### Typography custom utility styles

To apply the font, add the `font-ig` class to a top-level element. You can also define the base font size using the `text-base` utility class.
We provide custom utility classes for each typography level (e.g., h1, h2, body-1). Use them like so:

<!-- WebComponents -->

```html
<p class="type-style-h3">This paragraph gets the h3 styles</p>
```

<!-- end: WebComponents -->

Each class applies all necessary font settings, spacing, and sizing according to the [Ignite UI type scale](https://www.infragistics.com/products/ignite-ui-web-components/web-components/components/themes/typography).

## Sample

In the sample below, you’ll see a 404 page built entirely with Tailwind utility classes, including our "custom utilities" for "shadows", "colors", and "typography".

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
@import "tailwindcss";
@import "igniteui-theming/tailwind/themes/base";
@import "igniteui-theming/tailwind/themes/light/bootstrap";

main {
    width: 800px;
    height: 300px;
    margin: 50px auto;
}
```


> \[!NOTE]
> This sample is fictional and fully custom, it’s not part of the Ignite UI component library.

## Summary

With just a few configuration steps, you can combine Tailwind’s utility-first approach with Ignite UI’s robust design system. This integration allows you to rapidly build consistent, themed UI components using well-defined tokens for color, elevation, and typography, right from your HTML.
