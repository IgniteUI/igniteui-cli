---
title: Theming Engine - Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Theming engine was developed through SASS with a low-difficulty API that offers restyling of one component, multiple components, or the entire application.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Theming Engine, Angular Theming
_tocName: Overview
---

# Theming

Ignite UI for Angular allows you to modify the styles of all component themes using CSS variables. If you really wanted to dig deep, we provide a powerful Sass theming engine that allows you to create global component themes tailored to your specific design language that work in all modern browsers.

>[!NOTE]
> This document describes the theming system in Ignite UI for Angular from version 12 forward. Starting with version 12 **CSS variables are the recommended way to modify the global and component themes**.
> You can still use the Sass theming library as you would've prior to version 12.

## Basic Usage

Ignite UI for Angular includes the following themes as part of its package:

- Material
- Bootstrap
- Fluent
- Indigo

All themes have light and dark variants as well as support for left-to-right(LTR) and right-to-left(RTL) content by default. The easiest way to start using any of the bundled themes in your application is by specifying the path to a CSS theme file in your `angular.json` configuration. For example, if you wanted to use the dark Material theme, you would include the path to the theme file like so:

```json
"styles": [
  "node_modules/igniteui-angular/styles/igniteui-angular-dark.css",
  "src/styles.css"
]
```

>[!NOTE]
> If you've installed the Ignite UI for Angular package using `ng add igniteui-angular`, you will have noticed that we've already added `igniteui-angular.css` to the styles array.

Here's the full list of themes included in the styles folder:

| Theme Name                  | Path                                                                       |
|-----------------------------|----------------------------------------------------------------------------|
| **Material Light**          | `node_modules/igniteui-angular/styles/igniteui-angular.css`                |
| **Material Dark**           | `node_modules/igniteui-angular/styles/igniteui-angular-dark.css`           |
| **Bootstrap Light**         | `node_modules/igniteui-angular/styles/igniteui-bootstrap-light.css`        |
| **Bootstrap Dark**          | `node_modules/igniteui-angular/styles/igniteui-bootstrap-dark.css`         |
| **Material Dark Green**     | `node_modules/igniteui-angular/styles/igniteui-dark-green.css`             |
| **Fluent Light**            | `node_modules/igniteui-angular/styles/igniteui-fluent-light.css`           |
| **Fluent Dark**             | `node_modules/igniteui-angular/styles/igniteui-fluent-dark.css`            |
| **Fluent Light Excel**      | `node_modules/igniteui-angular/styles/igniteui-fluent-light-excel.css`     |
| **Fluent Dark Excel**       | `node_modules/igniteui-angular/styles/igniteui-fluent-dark-excel.css`      |
| **Fluent Light Word**       | `node_modules/igniteui-angular/styles/igniteui-fluent-light-word.css`      |
| **Fluent Dark Word**        | `node_modules/igniteui-angular/styles/igniteui-fluent-dark-word.css`       |
| **Indigo Light**            | `node_modules/igniteui-angular/styles/igniteui-indigo-light.css`           |
| **Indigo Dark**             | `node_modules/igniteui-angular/styles/igniteui-indigo-dark.css`            |

As you can see, we ship Ignite UI for Angular with a substantial amount of themes.

This is not the end of our theming story, though. All themes are compiled from Sass source and are built using our powerful theming engine. This engine contains Sass `mixins` and `functions` many of which are publicly exposed, which allows you to completely redesign all components in your application.

If Sass isn't your thing that's completely fine, we've made it easy to modify the compiled themes using [custom CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), or otherwise known as CSS variables. You can still use Sass in combination with CSS variables.

## Global Variables

If you inspect any of the CSS themes above, you will notice that there are quite a few CSS variables included in the `:root` scope; We include variables for `colors`, `shadows`, `typography`, and `configuration`. Modifying any of these variables will allow you to customize the overall look and feel of the theme and conversely the components.

What most people look for when modifying a theme is changing the default colors used by the components.

If you wanted to change the primary and secondary colors, all you have to do is type the following in your `styles.css` file:

```css
/* styles.css */
:root {
  --ig-primary-500: #09f;
  --ig-secondary-500: red;
  --ig-surface-500: rgb(221 211 211);
}
```

Let's break down the names of these color variables. The `ig` prefix is there as a unique identifier to indicate that this variable is part of an Ignite UI for Angular theme, `primary` is the color variable name, and `500` stands for the color variant. We will take a deeper look at palettes in the [Palettes](./palettes.md) section of the documentation. For now all you need to know is that we have several base color variables (primary, secondary, surface, success, info, etc.) that include different shades or _variants_ that are all generated from the main color variants. The `500` color variants that we set in the above example are considered the main variable color and all of the other variants for the given color variable are generated from the `500` variant.

Changing these variants, you can completely overhaul the entire palette.

>[!WARNING]
> Some components do not use colors from the palettes. In those instances, you will have to target the component CSS variables directly to modify their colors.
> To find out which palette colors are used by what component, take a look at the [Components Documentation](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes).

Likewise, changing the `elevations`(shadows) is just as easy. We include 25 elevation levels (0-24).
Here's a simplified version of what those variables look like:

```css
/* styles.css */
:root {
  --ig-elevation-0: none;
  --ig-elevation-1: 0 1px 3px 0 rgba(0, 0, 0, 0.26),
                    0 1px 1px 0 rgba(0, 0, 0, 0.12),
                    0 2px 1px -1px rgba(0, 0, 0, 0.08);
  /* ... */
  --ig-elevation-24: 0 11px 15px -7px rgba(0, 0, 0, 0.26),
                  0 24px 38px 3px rgba(0, 0, 0, 0.12),
                  0 9px 46px 8px rgba(0, 0, 0, 0.08);
}
```

These are essentially stacked CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) declarations. You can replace them with any other valid `box-shadow` value. The higher the elevation level number is, the bigger the shadow is. Again, different components use different elevation levels, to find out which elevation levels are used by which component, take look at the [Components Documentation](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes). We will take a deeper look at elevations in the [Elevations](./elevations.md) of the documentation.

## Configuration

There are several variables that allow you to configure the global behavior of the theme:

### Roundness

To configure the radius factor of all components you can change the value of the `--ig-radius-factor` variable. The default value is 1, meaning the default radius factor is used across component themes.

Example:

```css
/* Makes all components appear blocky in shape */
:root {
  --ig-radius-factor: 0;
}
```

### Elevation Factor

To configure the elevation factor of all components you can change the value of the `--ig-elevation-factor` variable. The default value is 1, meaning the default elevations are used across component themes.

Example:

```css
/* Makes all components appear flat (no-shadows) */
:root {
  --ig-elevation-factor: 0;
}
```

## Component Variables

All components provide the ability to modify their themes using component-specific CSS variables. Each component exposes two variables that modify the same property. The exposed variables can be thought of as `global` and `local`. They both modify the component theme in the same way, the only difference is that `global` variables have the `igx-[component-name]` prefix attached to the variable name and can be used from parent selectors to style child components, while `local` variables are specific to a component instance.

Let's look at an example. Say you wanted to modify the background of the avatar. The avatar looks for the following CSS variables that modify its background:

```css
/* styles.css */
:root {
  --ig-avatar-background: black;
}

igx-avatar {
  --background: orange;
}
```

The snippet above will set the background in all avatars to orange.

The avatar component will look for the `--background` variable first. If explicitly set, it will take its value. In other words, `local` variables have higher priority and will work **only** if applied to the `igx-avatar` directly, either by using its tag selector or any other selector that targets `igx-avatar`.
The global `--ig-avatar-background` can be thought of as _fallback_ variable. It's going to be used only if the local `--background` is not explicitly overridden.

For the curious, here's how this is implemented internally in the avatar:

```css
igx-avatar {
  --background: var(--ig-avatar-background, var(--ig-gray-400));
  background: var(--background);
}
```

You would generally use _global_ variables when you want to apply changes to all instances of a component while _local_ variables target specific component instances and will always override the global variable.

Here's another example:

```html
<!-- app.component.html -->
<igx-avatar>AB</igx-avatar>
<igx-avatar>CD</igx-avatar>
<app-contacts></app-contacts>
```

```html
<!-- contacts.component.html -->
<igx-avatar>EF</igx-avatar>
<igx-avatar>GH</igx-avatar>
```

```css
/* styles.css */
:root {
  --ig-avatar-background: lavender;
}
```

```css
/* contacts.component.css */
igx-avatar {
  --background: purple;
}
```

Avatars `AB` and `CD` will use the globally set _lavender_ color as background, while avatars `EF` and `GH` will have _purple_ backgrounds.

**Each component has all of its theme properties documented in the styling section of the component documentation.**

This should be all you need to get you started with theming. You can modify global palette colors, elevations, and change component theme properties by creating global and local component themes. If you want to learn more, we have extensive documentation covering topics like **Palettes**, **Elevations**, **Typography**, and **Theming with Sass** in depth.

## Additional Resources

Related topics:

- [Palettes](./palettes.md)
- [Elevations](./elevations.md)
- [Typography](./typography.md)
- [Theming with Sass](./sass/index.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
