---
title: Global Themes
_description: The Ignite UI for Angular Theming component is developed in SASS with a low-difficulty API that offers restyling of one component, multiple components, or the entire suite.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Theming Component, Angular Theming
_tocName: Global Themes
---

# Global Themes

<div class="highlight">The global theme allows you to quickly generate a theme that uses your custom color palette, schema, and elevations. The color palette, schema, and elevations will be propagated to all components that don't have custom themes created for them.</div>
<div class="divider"></div>

## Overview

If you've included the _`igniteui-angular.css`_ file in your application project, now is a good time to remove it. We are going to use our own _`my-app-theme.scss`_ file to generate a global theme for all components in our application.

**Ignite UI for Angular** uses a global theme by default to theme the entire suite of components. You can, however, create themes scoped to components you have in your app, depending on your use case. For now, we will be including all of our themes in a single file.
To generate a global theme we're going to be including two mixins `core` and `theme`. Both of those mixins accept a few arguments:

### Core mixin  

<div class="divider--half"></div>

|                   Name    |   Type  | Default |                                                       Description         |
| :-----------------------: | :-----: | :-----: | :-----------------------------------------------------------------------: |
|         `$print-layout`   | boolean |   true  |                             Include/exclude the styles for printing.      |
| `$enhanced-accessibility` | boolean |  false  | Switches component colors and other properties to more accessible values. |


### Theme mixins

<div class="divider--half"></div>

|        Name   |   Type  |               Default    |                                                                                     Description              |
| :-----------: | :-----: | :----------------------: | :----------------------------------------------------------------------------------------------------------: |
|   `$palette`  |    map  |                `null`    |                                  The palette map to be used to by the default themes of all components.      |
|    `$schema`  |    map  | `$light-material-schema` |                                                  The schema used as basis for styling the components.        |
|   `$exclude`  |   list  |                  `()`    |                                       A list of component themes to be excluded from the global theme.       |
| `$roundness`  | Number  |                `null`    | Sets the global roundness factor for all components (the value can be any decimal fraction between 0 and 1). |
| `$elevation`  | boolean |                `true`    |                                              Turns on/off elevations for all components in the theme.        |
| `$elevations` |    Map  |  `$material-elevations`  |                                                 The elevation map to be used by all component themes.        |

Let's create a custom global theme that will use the primary, secondary and surface colors of our company.

```scss
// Import the theming module
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';

$primary-color: #2ab759;
$secondary-color: #f96a88;
$surface-color: #fff;

$my-color-palette: palette(
    $primary: $primary-color,
    $secondary: $secondary-color,
    $surface: $surface-color
);

// IMPORTANT: Make sure you always include core first!
@include core();
@include typography();
// Pass the color palette we generated to the theme mixin.
@include theme($my-color-palette);
```

Let's explain what the `core` and `theme` mixins do. The `core` mixin takes care of some configurations, like adding enhanced accessibility(e.g. colors suitable for color blind users) and printing styles for all components. The `theme` mixin includes each individual component style (bar the ones listed as excluded) and configures the palette, schema, elevations, and roundness that is not listed in the `$exclude` list of components.

> [!IMPORTANT]
> Including `core` before `theme` is essential. The `core` mixins provide all base definitions needed for the `theme` mixin to work correctly.

## Excluding Components

<div class="divider--half"></div>

The `theme` mixin allows you to provide a list of component names to be excluded from the global theme styles. For instance, if you want to completely remove all styles we include for the `igx-avatar` and `igx-badge` to reduce the amount of produced CSS or to supply your own custom styles, you can do so by passing the list of components like so:

```scss
// ...
$unnecessary: (igx-avatar, igx-badge);

@include theme($my-color-palette, $exclude: $unnecessary);
```

If you know your app will not be using some of our components, we recommend you add them to the `$exclude` list.

You can do the inverse, i.e. include only the component styles you want using the method below:

```scss
@use 'sass:map';

@function include($items, $register) {
    @return map.keys(map.remove($register, $items...));
}

$allowed: (igx-avatar, igx-badge);

@include theme(
    $exclude: include($allowed, $components)
);
```

## Light and Dark Themes

We also provide _**light**_ and _**dark**_  versions for our four themes - Material, Fluent, Indigo, Bootstrap.

To use any of the versions, you would simply need to pass it to our [theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#mixin-theme) mixin:

_**Light**_

```scss
@include core();
@include typography(
    $font-family: $material-typeface,
    $type-scale: $material-type-scale
);
@include theme(
    $schema: $light-material-schema,
    $palette: $light-material-palette,
);
```

***Dark**_

```scss
@include core();
@include typography(
    $font-family: $material-typeface,
    $type-scale: $material-type-scale
);
@include theme(
    $schema: $dark-material-schema,
    $palette: $dark-material-palette,
);
```

### Available Themes

Ignite UI for Angular gives you the option to pick from a set of predefined themes.
The table below shows all the built-in themes that you can use right away.

| Theme                                                           | Schema                    | Color Palette                                                                          |
| :-------------------------------------------------------------- | :------------------------ | :------------------------------------------------------------------------------------- |
| [**Material Light**](presets/material.md#default-theme)         |  `$light-material-schema` | $light-material-palette                                                                |
| [**Material Dark**](presets/material.md#material-dark-theme)    |  `$dark-material-schema`  | $dark-material-palette                                                                 |
| [**Fluent Light**](presets/fluent.md)                           | `$light-fluent-schema`    | $light-fluent-palette <br> $light-fluent-excel-palette <br> $light-fluent-word-palette |
| [**Fluent Dark**](presets/fluent.md#fluent-dark-theme)          |  `$dark-fluent-schema`    | $dark-fluent-palette <br> $dark-fluent-excel-palette <br> $dark-fluent-word-palette    |
| [**Bootstrap Light**](presets/bootstrap.md)                     | `$light-bootstrap-schema` | $light-bootstrap-palette                                                               |
| [**Bootstrap Dark**](presets/bootstrap.md#bootstrap-dark-theme) |  `$dark-bootstrap-schema` | $dark-bootstrap-palette                                                                |
| [**Indigo Light**](presets/indigo.md)                           | `$light-indigo-schema`    | $light-indigo-palette                                                                  |
| [**Indigo Dark**](presets/indigo.md#indigo-dark-theme)          |   `$dark-indigo-schema`   | $dark-indigo-palette                                                                   |


## Additional Resources

<div class="divider--half"></div>

Learn how to create individual component themes:

- [Component Themes](component-themes.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
