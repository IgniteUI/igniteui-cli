---
title: Tailwind Integration for Ignite UI
_description: Learn how to integrate Tailwind CSS with custom utility classes from the Ignite UI for Angular theming engine. This guide walks you through the setup and demonstrates how to use design tokens for colors, typography, and shadows in a utility-first approach.
_keywords: Ignite UI for Angular, Tailwind CSS, Angular styling, Angular theming, custom CSS, utility classes, theming engine, typography, shadows, colors
_tocName: Using Tailwind Custom Classes
---

# Tailwind CSS Integration with Ignite UI for Angular

<p class="highlight">Ignite UI for Angular offers full theming customization through CSS variables and a powerful Sass engine. In this guide, you'll learn how to integrate Tailwind CSS into an Angular project and enhance it with custom utility classes provided by the `igniteui-theming` package. These classes expose Ignite UI design tokens for colors, shadows, and typography, enabling a seamless utility-first styling experience.</p>
<br>

## Overview

> [!NOTE]
> This guide assumes you already have **Ignite UI for Angular** installed. If not, run:
>
> ```cmd
> ng add igniteui-angular
> ```

### 1. Install Tailwind

Install tailwind using the following command:

```cmd
npm install tailwindcss @tailwindcss/postcss postcss --force
```

### 2.Configure PostCSS Plugins

Create a `.postcssrc.json` file in the root of your project and add the `@tailwindcss/postcss` plugin to your PostCSS configuration.

```json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

### 3.Import Tailwind CSS

In your main stylesheet (`styles.css` or `styles.scss`), import Tailwind and the Ignite UI Tailwind theme configuration.

```css
@import "tailwindcss";
@import "igniteui-theming/tailwind/themes/base";
```

If your project uses `sass` for styling:

```scss
@import "tailwindcss";
@use "igniteui-theming/tailwind/themes/base";
```

> Ensure the import path resolves correctly from `node_modules`.

## Using Ignite UI Custom Utility Classes

The `igniteui-theming` package includes a custom Tailwind configuration that exposes Ignite UI design tokens through utility classes. These include support for:

- Colors and contrast colors

- Elevation (shadows)

- Typography styles

Let’s look at how to use each.

### Color Utility Classes

Use Ignite UI color tokens directly in your HTML:

```html
<h1 class="bg-primary-500 text-primary-500-contrast">This is a title</h1>
```

You can explore Tailwind's full color system in the [Tailwind color documentation](https://tailwindcss.com/docs/color), and apply it using the Ignite UI-provided class names.
<br>

### Shadow utility classes

You can add depth using any of the predefined [elevation levels](https://www.infragistics.com/products/ignite-ui-angular/angular/components/themes/elevations) (from 0 to 24):

```html
<div class="shadow-elevation-8">Elevated container</div>
```

You can find all the shadow-related utility classes provided by Tailwind in the [Tailwind box shadow documentation](https://tailwindcss.com/docs/box-shadow)
<br>

### Typography custom utility styles

To apply the font, add the `font-ig` class to a top-level element. You can also define the base font size using the `text-base` utility class.
We provide custom utility classes for each typography level (e.g., h1, h2, body-1). Use them like so:

```html
<p class="type-style-h3">This paragraph gets the h3 styles</p>
```

Each class applies all necessary font settings, spacing, and sizing according to the [Ignite UI type scale](https://www.infragistics.com/products/ignite-ui-angular/angular/components/themes/typography).

>[!NOTE]
>These custom typography utilities only work outside of `ig-typography`. If you have to set the `ig-typography` CSS class on a top-level element, these styles won't apply.
<div class="divider--half"></div>

## Sample

In the sample below, you’ll see a 404 page built entirely with Tailwind utility classes, including our `custom utilities` for `shadows`, `colors`, and `typography`.

> You can see how to style each component by checking out the **Styling** section in its respective documentation topic.

```typescript
import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-tailwind-sample',
    styleUrls: ['./tailwind-sample.component.scss'],
    templateUrl: './tailwind-sample.component.html'
})

export class TailwindSampleComponent {}
```
```html
<main class="font-ig text-base grid bg-surface-500 px-6 py-6">
    <div class="text-center shadow-elevation-24 p-24 rounded-lg">
        <h3 class="type-style-h3 text-secondary-600 font-light">404</h3>
        <h3 class="type-style-h3 text-gray-800 uppercase font-bold">
            Page not found
        </h3>
        <p class="type-style-body-1 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6 mb-16">
            <a
                href="#"
                class="type-style-button rounded-md bg-secondary-500 text-secondary-500-contrast px-3.5 py-2.5 shadow-elevation-2 hover:bg-secondary-600 transition duration-150 ease-in-out"
                >Go back home</a
            >
            <a
                href="#"
                class="type-style-button text-gray-800 hover:text-secondary-600 transition duration-150 ease-in-out"
                >Contact support <span aria-hidden="true">&rarr;</span></a
            >
        </div>
    </div>
</main>
```

>[!NOTE]
>This sample is fictional and fully custom, it’s not part of the Ignite UI component library.

## Summary

With just a few configuration steps, you can combine Tailwind’s utility-first approach with Ignite UI’s robust design system. This integration allows you to rapidly build consistent, themed UI components using well-defined tokens for color, elevation, and typography—right from your HTML.

## Additional Resources

<br>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
