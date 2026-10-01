---
title: Theming Library Configuration
description: The Ignite UI for Angular Theming provides several global variables that let you configure how the theming engine works.
keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Theming Component, Angular Theming
llms:
  description: "The Ignite UI for Angular theming library exposes several input arguments variables that let you configure how the theming engine works."
_tocName: Configuration
---
# Configuration

<div class="highlight">
The Ignite UI for Angular theming library exposes several input arguments variables that let you configure how the theming engine works.
</div>
<igc-divider></igc-divider>

## Global Variables

Here's a list of global Sass variables forwarded in the main theming module:

|    Variable Name  |                                                      Description        |
| :---------------: | :---------------------------------------------------------------------: |
|    `$components`  |       Stores a register of all component themes. Used for tree-shaking. |
| `$dropped-themes` |            Stores a register of dropped themes. Used for tree-shaking.  |

## Scrollbar Styling

The Ignite UI for Angular themes ship with custom scrollbar styles that allow you to change the width and/or the colors of all scrollbars in your application. To apply the included styles, make sure to set the `ig-scrollbar` class to an element that contains your root app component.

To customize the scrollbar further, you can create a new scrollbar style with the `scrollbar-theme` function. The function accepts arguments for style changes on the scrollbar. We can customize the scrollbar size, color, border, min-height... and many more.

```scss
// app.component.scss
// Here we set the scrollbar to have size of 16px, scrollbar thumb to be in color pink, and scrolblar track to be in color green
$my-scrollbar-theme: scrollbar-theme($sb-size: 16px, $sb-thumb-bg-color: pink, $sb-track-bg-color: green);

// We use 'tokens' mixin for generating the css variables with the new scrollbar values.

:host {
  @include tokens($my-scrollbar-theme);
}
```

<igc-divider></igc-divider>

## Additional Resources

Learn the concepts:

- [Palettes](/themes/sass/palettes)
- [Typography](/themes/sass/typography)
- [Elevations](/themes/sass/elevations)
- [Schemas](/themes/sass/schemas)
- [Animations](/themes/sass/animations)

Learn how to create application-wide themes:

- [Application Themes](/themes/sass/global-themes)

Learn how to create component-specific themes:

- [Component Themes](/themes/sass/component-themes)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
