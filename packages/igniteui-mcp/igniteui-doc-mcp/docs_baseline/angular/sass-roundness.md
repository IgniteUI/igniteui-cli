---
title: Roundness Sass
_description: Ignite UI for Angular allow you to change the shape of components by changing their border-radius.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library 
_tocName: Roundness
---

# Roundness

<p class="highlight">Ignite UI for Angular allows you to change the shape of components by setting their roundness to a value between 0 and 1.</p>
<div class="divider"></div>

## Overview

Border radius is defined in the [theme schema](https://github.com/IgniteUI/igniteui-theming/blob/18f878033898e1b6a3bb0ed28993e9a4037d1a80/sass/themes/schemas/components/light/_toast.scss#L44) of the component (see the example below). The border radius for any component defined in this manner can then be controlled via the `$roundness` parameter of the [theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#mixin-theme) mixin or a single CSS variable called `--ig-radius-factor`.

```scss
$light-toast: extend(
    $default-elevation-toast,
    (
        ...,
        border-radius: (
            border-radius: (
                rem(26px),
                rem(0),
                rem(26px),
            ),
        ),
    )
);
```

As you can see from the example, the component schema for the [Toast](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-toast-theme) defines the border radius as a list of three values. The first value is the default border radius (i.e. when `$roundness` or `--ig-radius-factor` is not declared). The second value denotes the minimum allowed border radius (i.e. when `$roundness` or `--ig-radius-factor` is set to `0`). And the third value denotes the maximum allowed border radius (i.e. when `$roundness` or `--ig-radius-factor` is set to `1`). In the toast component the default and maximum values match. Any value between 0 and 1 assigned to `$roundness` or `--ig-radius factor` will set the border radius of the toast as a percentage of the maximum value. For instance, setting the value to `.5` will make the border radius of the Toast component to be 50% of its maximum allowed border radius, which is 13 pixels.

```scss
// Make all components sharp by setting the roundness parameter to 0.
@include theme(
    ...,
    $roundness: 0
);
```

### How to use?

Let's see how we can change the default values for the toast from the example above.

If you want the toast to still be affected by the `$roundness` or the `--ig-radius-factor` variable in the resulting theme, use the `border-radius` function provided by the Ignite UI for Angular package.

```scss
// Change the default, min and max values,
// while preserving customization via $roundness or --ig-radius-factor.
igx-toast {
  --border-radius: #{border-radius(rem(4px), rem(4px), rem(16px))};
}
```

If you want the border-radius to be a constant value, unaffected by changes of `--ig-radius-factor`, just pass it directly to the border-radius parameter.

```scss
// Will be unaffected by changes to $roundess or --ig-radius-factor.
igx-toast {
  --border-radius: rem(4px);
}
```

We can also use the `border-radius` mixin to directly assign the border-radius property to elements.

```scss
button {
    @include border-radius(rem(4px), rem(4px), rem(16px));
}
```

Now the `border-radius` on the button will be affected by the `$roundness` and `--ig-radius-factor` variables.

<div class="divider--half"></div>

### Baseline border radius values

The table below shows an excerpt of some of the component border radius values as defined in the Material schema.

| **Component**          | **Min/Max Radius** | **Default Radius** |
|------------------------|--------------------|--------------------|
| **Button(Flat)**       |  0 / 20px          | 4px                |
| **Button(Contained)**  |  0 / 20px          | 4px                |
| **button(Fab)**        |  12px / 28px       | 28px               |
| **button(Icon)**       |  0 / 18px          | 18px               |
| **Button-group**       |  0 / 20px          | 4px                |
| **Chip**               |  0 / 20px          | 4px                |
| **Card**               |  0 / 24px          | 4px                |
| **Carousel**           |  0 / 36px          | 0                  |
| **Dialog**             |  0 / 36px          | 4px                |
| **Drop-down**          |  0 / 20px          | 4px                |
| **Expansion panel**    |  0 / 16px          | 0                  |
| **input(Border)**      |  0 / 20px          | 4px                |
| **input(Box)**         |  0 / 20px          | 4px 4px 0 0        |
| **input(Search)**      |  0 / 20px          | 4px                |
| **List**               |  0 / 24px          | 0                  |
| **List item**          |  0 / 24px          | 0                  |
| **Navdrawer**          |  0 / 36px          | 0                  |
| **Snackbar**           |  0 / 24px          | 4px                |
| **Tooltip**            |  0 / 16px          | 4px                |
| **Toast**              |  0 / 26px          | 26px               |

Please refer to the [Schema](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/schemas) documentation for each component to find out what the default and min/max radius values are for each theme.

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
