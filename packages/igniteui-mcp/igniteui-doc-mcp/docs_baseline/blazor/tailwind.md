---
title: Tailwind Integration for Blazor
description: Learn how to integrate Tailwind CSS with custom utility classes from the Ignite UI theming engine. This guide walks you through the setup and demonstrates how to use design tokens for colors, typography, and shadows in a utility-first approach.
keywords: "Ignite UI for Blazor, Infragistics, Themes, Styling, Tailwind CSS, custom CSS, utility classes, theming engine, typography, shadows, colors"
license: MIT
mentionedTypes: ["ConfigureTheme"]
llms:
  description: "Ignite UI for Blazor offers full theming customization through CSS variables."
_tocName: Custom Tailwind Classes
---
# Tailwind CSS Integration with Ignite UI for Blazor

Ignite UI for Blazor offers full theming customization through CSS variables. In this guide, you'll learn how to integrate Tailwind CSS into your project and enhance it with custom utility classes provided by the `igniteui-theming` package. These classes expose Ignite UI for Blazor design tokens for colors, shadows, and typography, enabling a seamless utility-first styling experience.

## Overview

This guide assumes you already have **Ignite UI Theming** installed. If not, run:

```cmd
npm install igniteui-theming
```

## Tailwind Setup

Start by installing Tailwind CSS, according to your chosen build tool or framework by following the [official Tailwind installation guide](https://tailwindcss.com/docs/installation).

Once Tailwind is set up, import both Tailwind and the Ignite UI theming configuration in your global stylesheet:

```css
@import "tailwindcss";
@import "igniteui-theming/tailwind/themes/base";
```

If your project uses Sass for styling, load the Ignite UI configuration first. Sass requires every `@use` rule to come before any other rule, including `@import`:

```scss
@use "igniteui-theming/tailwind/themes/base.css";
@import "tailwindcss";
```

## Using Ignite UI Custom Utility Classes

The `igniteui-theming` package includes a custom Tailwind configuration that exposes Ignite UI design tokens through utility classes. These include support for:

- Colors and contrast colors

- Elevation (shadows)

- Typography styles

Let’s look at how to use each.

### Color Utility Classes

Our color utility classes are powered by tokens from each Ignite UI theme. You can apply them directly in your HTML:

```html
<h1 class="bg-primary-500 text-primary-500-contrast">This is a title</h1>
```

You can explore Tailwind’s full color system in the [Tailwind color documentation](https://tailwindcss.com/docs/color), and apply it using the Ignite UI-provided class names.

### Shadow utility classes

You can add depth using any of the predefined [elevation levels](elevations.md) (from 0 to 24):

```html
<div class="shadow-elevation-8">Elevated container</div>
```

You can find all the shadow-related utility classes provided by Tailwind in the [Tailwind box shadow documentation](https://tailwindcss.com/docs/box-shadow).

### Typography custom utility styles

To apply the font, add the `font-ig` class to a top-level element. You can also define the base font size using the `text-base` utility class.
We provide custom utility classes for each typography level (e.g., h1, h2, body-1). Use them like so:

```html
<p class="type-style-h3">This paragraph gets the h3 styles</p>
```

Each class applies all necessary font settings, spacing, and sizing according to the [Ignite UI type scale](typography.md).

## Summary

With just a few configuration steps, you can combine Tailwind’s utility-first approach with Ignite UI’s robust design system. This integration allows you to rapidly build consistent, themed UI components using well-defined tokens for color, elevation, and typography, right from your HTML.

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
