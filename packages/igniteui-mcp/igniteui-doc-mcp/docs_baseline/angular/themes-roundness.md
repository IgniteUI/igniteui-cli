---
title: Roundness
_description: Ignite UI for Angular allow you to change the shape of components by changing their border-radius.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library 
_tocName: Roundness
---

# Roundness

Ignite UI for Angular allows you to customize the shape of components by adjusting their roundness using a value between 0 and 1.

## Overview

Many Ignite UI components have predefined minimum and maximum border-radius values, which can be adjusted using the `--ig-radius-factor` CSS variable.

When you set `--ig-radius-factor` to 0, the component uses its minimum border-radius and will appear more block-like with sharp corners. When set to 1, the component uses its maximum predefined border-radius and will appear rounded.

Here is a list of the components that have predefined minimum and maximum border-radius values and can be modified using the `--ig-radius-factor` variable: <br>
• [Action Strip](../action-strip.md) • [Button](../button.md) • [Button Group](../button-group.md) • [Calendar](../calendar.md) • [Card](../card.md) • [Carousel](../carousel.md) • [Checkbox](../checkbox.md) • [Chip](../chip.md) • [Combo](../combo.md) • [Date Picker](../date-picker.md) • [Date Range Picker](../date-range-picker.md) • [Grid](../grid/grid.md) • [Input Group](../input-group.md) • [Linear Progress](../linear-progress.md) • [List](../list.md) • [Month Picker](../month-picker.md) • [Navigation Drawer](../navdrawer.md) • [Radio](../radio-button.md) • [Ripple](../ripple.md) • [Snackbar](../snackbar.md) • [Switch](../switch.md) • [Toast](../toast.md)

## Usage

To switch between the two border-radius values on a component, target the element selector and simply set the `--ig-radius-factor` variable to either 0 or 1:

```css
igx-chip {
   --ig-radius-factor: 0;
}
```

This will apply the minimum predefined border-radius, resulting in the [Chip](../chip.md) component having straight corners.

```css
igx-chip {
    --ig-radius-factor: 1;
}
```

And by setting the value to 1, the maximum predefined border-radius is applied, resulting in rounded corners for the [Chip](../chip.md) component.

If you want the border-radius to be somewhere between the defined minimum and maximum values, you can set the `--ig-radius-factor` variable to a decimal value between 0 and 1.
For example, setting it to `0.5` will apply a border-radius that is 50% of the component's maximum allowed value.

```css
igx-chip {
    --ig-radius-factor: 0.5;
}
```

You can see the difference between the minimum and maximum border-radius values in the example below:

```typescript
import { Component } from "@angular/core";
import { IgxCardComponent, IgxCardContentDirective, IgxCardHeaderComponent } from 'igniteui-angular/card';
import { IgxChipComponent } from 'igniteui-angular/chips';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPrefixDirective } from 'igniteui-angular/input-group';

@Component({
    selector: "app-chip-simple",
    styleUrls: ["./roundness-sample.component.scss"],
    templateUrl: "./roundness-sample.component.html",
    imports: [
        IgxCardComponent,
        IgxCardHeaderComponent,
        IgxCardContentDirective,
        IgxChipComponent,
        IgxIconComponent,
        IgxPrefixDirective
    ]
})
export class RoundnessComponent {}
```
```html
<div class="sample-container">
    <igx-card>
        <igx-card-header>
            <pre>--ig-radius-factor: 0;</pre>
        </igx-card-header>
        <igx-card-content>
            <igx-chip class="square-chip">
                <igx-icon igxPrefix>place</igx-icon>
                <span>Square Chip</span>
            </igx-chip>
        </igx-card-content>
    </igx-card>

    <igx-card>
        <igx-card-header>
            <pre>--ig-radius-factor: 1;</pre>
        </igx-card-header>
        <igx-card-content>
            <igx-chip class="round-chip">
                <igx-icon igxPrefix>place</igx-icon>
                <span>Round Chip</span>
            </igx-chip>
        </igx-card-content>
    </igx-card>
</div>
```
```scss
@use "igniteui-angular/theming" as *;

.sample-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: rem(16px);
    padding: rem(32px);
}

.square-chip {
    --ig-radius-factor: 0;
}

.round-chip {
    --ig-radius-factor: 1;
}
```

## Additional Resources

Related topics:

- [Roundness with Sass](./sass/roundness.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
