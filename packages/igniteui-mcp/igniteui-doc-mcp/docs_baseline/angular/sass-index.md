---
title: Theming with Sass
_description: The Ignite UI for Angular Theming is built with Sass and exposes a rich set of API functions and mixins that make restyling components or the entire application easier.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Theming Component, Angular Theming
_tocName: Overview
---

# Theming with Sass

<div class="highlight">Ignite UI for Angular doesn't shy away from exposing its Sass theming API so you can take full control of the styling in your application. The API we expose is, to a large extent, the exact same API we use internally to build every single theme we bundle with the product. It's abstract and allows for theming granularity on different levels - from a single component the entire application suite.</div>
<div class="divider"></div>

## Overview

Since **IgniteUI for Angular** bases its component designs on the [Material Design Principles](https://material.io/guidelines/material-design/introduction.html), we try to get as close as possible to colors, sizes, typography, and overall look and feel of our components to those created by Google for our default theme. The Material Design system keeps changing and doesn't stray from implementing major changes, which ultimately affects how we write and modify the styles of the components we ship. With support for 3 additional themes - Microsoft Fluent, Bootstrap, and our own Indigo Design systems, adapting the Material Design system is not a straight-forward task. It required us to build a very modular, configurable, and yet maintainable base from which vastly different component styles can be generated. We also have to support old and new browsers alike, so Sass has been a tremendous help in this endeavor, giving us tools that allowed us to create a visceral system of variables, functions and mixins.

Our approach to theming is based around several concepts - Theme Schemas, Palettes, Typography, Roundness, Elevations, and Animations. These concepts are then mixed to produce the final theme. Each concept is further broken down to allow for a more granular approach to styling.

Since we want to ensure specific aspects of our design system remain unscathed, we don't allow you to change every single thing and completely rewrite the styles using the API we expose, however, you could if you did some digging.

We will explain every single concept in detail and the related APIs so that you can feel truly in control of our theming engine.

> [!NOTE]
> Although the [**Sass**](https://sass-lang.com) theming library is powerful, most people will only need to modify a few CSS variables to customize the default theme. We encourage you to read through the CSS variables documentation first. You should only need to use Sass if you wanted to modify the produced theme on a deeper level. A good example would be when you need to create several different reusable theme variants for the same component, or to tree-shake the produced CSS to only include styles for the components you use in your app.

## Palettes

The first concept we need to understand is palettes. As in any visual tool, colors are the main differentiating factor between one application and another. The Material Design Guidelines prescribe predefined palettes of colors that range in hue, lightness, and saturation for a given base color. There's a good reason for that. They really want to ensure good color matching and contrast between the background colors and the foreground text colors. This is great but limiting at the same time. If you wanted to have your own custom palette based on the Material guidelines that matches your branding, you would probably be out of luck. We recognize this is a problem, so we invented an algorithm that generates Material-like palettes from base colors you provide. We also generate contrast text colors for each hue in the palette.

## Schemas

The second important concept revolves around theme schemas. Theme schemas are like recipes for individual component themes. They give individual component themes information about what palette colors they should use and what the overall roundness and shadows should be. For instance, a component scheme tells a component theme that the background color of an element should be the `500` variant from the `primary` color, without caring what palette the user passes to the component theme.

## Typography

Typography is a separate module in our Sass theming library and is decoupled from the individual component themes. Although we have a default typeface of choice, we really want to give you the power to style your application in every single way. Typography is such an important part of that. We provide a method for changing the font family, the sizes and weights for headings, subheadings, buttons, body text, etc. in your app.

## Roundness

The Sass theming system defines minimum and maximum roundness for each component. You may be more familiar with the term `border-radius` in the context of CSS. Roundness is similar in that it uses `border-radius` to style the elements of the component, however, roundness in the context of the theming system is a number between 0 and 1. A component that has a roundness of 0 uses the minimum border-radius as defined by the component theme - it could be 0 or a non-zero value. Likewise, setting the roundness to 1 will set the border-radius to the maximum allowed radius for the component. While the minimum and maximum border-radius are defined in the component theme itself, the base roundness value is set in the component schema.

## Elevations

Elevations are the shadows being set for different parts of each component theme. They are based on 25(0-24) levels as prescribed by the Material Design guidelines. Having a finite number of shadows allows us to have a consistent way of defining depth hierarchy in our applications. In Sass they are defined as a map of 24 elevation levels with `box-shadows` as values and later passed to a component theme. Component schemas will provide generic information to the theme about the elevation levels specific elements should use.

## Animations

Some components use keyframe transitions and animations to communicate changes of state in a clear way. We include a huge library of keyframe animations and timing functions that can be imported and used throughout your application. They are treeshaken so including the same animation mixin twice produces only a single CSS declaration in your output stylesheet.

## Themes

Finally, we have component themes. Palettes, Schemas, Elevations, Roundness, and Animations wouldn't do much good on their own if they weren't used by a theme. We provide themes for individual component, and a global one, that styles the entire application and every component in it. You simply pass the palette and schema to the global theme, we take care of the rest. You can, of course, style each component individually to your liking by creating custom schemas, elevations, and by passing different values for roundness and colors to the component theme mixins.

## Additional Resources

<div class="divider--half"></div>

Learn the concepts:

- [Configuration](./configuration.md)
- [Palettes](./palettes.md)
- [Typography](./typography.md)
- [Elevations](./elevations.md)
- [Schemas](./schemas.md)
- [Animations](./animations.md)

Learn how to create application-wide themes:

- [Application Themes](./global-themes.md)

Learn how to create component-specific themes:

- [Component Themes](./component-themes.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
