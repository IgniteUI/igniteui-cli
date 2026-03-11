---
title: Size | Ignite UI for Angular 
_description: The Ignite UI for Angular provides a way of setting size property on application or component level. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Components, Native Angular Controls, Native Angular Components Library, size
_tocName: Size
---

# Size

Size configuration can significantly improve the visual representation of large amounts of data. In Ignite UI for Angular, we provide a pre-defined set of options:

- **large**
- **medium**
- **small**

Using the `--ig-size` custom CSS property, you can configure the size on an application or a component level.

## Angular Size Example

```typescript
import { Component, HostBinding, OnInit } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxHintDirective, IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-display-density',
    styleUrls: ['./display-density.component.scss'],
    templateUrl: './display-density.component.html',
    imports: [IgxButtonGroupComponent, IgxInputGroupComponent, FormsModule, IgxInputDirective, IgxLabelDirective, IgxPrefixDirective, IgxSuffixDirective, IgxIconComponent, IgxHintDirective]
})

export class DisplayDensityComponent implements OnInit {
    public sizes: any[];
    public size = 'large';
    public user: any;

    public ngOnInit() {
        this.sizes = [
            {
                label: 'small',
                selected: this.size === 'small',
                togglable: true
            },
            {
                label: 'medium',
                selected: this.size === 'medium',
                togglable: true
            },
            {
                label: 'large',
                selected: this.size === 'large',
                togglable: true
            }
        ];

        this.user = {
            firstName: 'John',
            lastName: 'Smith',
            phone: 888123456
        };
    }

    @HostBinding('style.--ig-size')
    protected get sizeStyle() {
        return `var(--ig-size-${this.size})`;
    }

    public selectSize(eventArgs: any) {
        this.size = this.sizes[eventArgs.index].label;
    }
}
```
```html
<div class="density-chooser">
    <igx-buttongroup [values]="sizes" (selected)="selectSize($event)"></igx-buttongroup>
</div>

<igx-input-group>
    <input igxInput name="firstName" type="text" [(ngModel)]="user.firstName" />
    <label igxLabel for="firstName">First Name</label>
</igx-input-group>

<igx-input-group>
    <input igxInput name="lastName" type="text" [(ngModel)]="user.lastName" required />
    <label igxLabel for="lastName">Last Name</label>
</igx-input-group>

<igx-input-group>
    <igx-prefix>+359</igx-prefix>
    <label igxLabel for="phone">Phone</label>
    <input type="number" igxInput name="phone" [(ngModel)]="user.phone" />
    <igx-suffix>
        <igx-icon>phone</igx-icon>
    </igx-suffix>
    <igx-hint position="start">Ex.: +359 888 123 456</igx-hint>
</igx-input-group>
```
```scss
:host {
    display: block;
    padding: 8px;
}

.density-chooser {
    margin-bottom: 16px;
}

igx-buttongroup, igx-input-group {
    display: block;
    width: 500px;
}
```

<div class="divider--half"></div>

> [!NOTE]
> To start using Ignite UI for Angular components in your own projects, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this in the [**installation**](https://www.infragistics.com/products/ignite-ui-angular/getting-started#installation) topic.

## Usage

**Setting size on an application/component level**

To set the size, use the `--ig-size` CSS custom property. You can set the size for all components in your app by setting the aforementioned property on the body element.

The available values for `--ig-size` are `--ig-size-small`, `--ig-size-medium`, and `--ig-size-large`.

```css
body {
    --ig-size: var(--ig-size-small);
}
```

To set the size on a component level, target the element selector. For instance, to set the size of the input group to `small`, you can do:

```css
igx-input-group {
    --ig-size: var(--ig-size-small);
}
```

## Understanding Size with CSS Custom Properties

The sizing system in Ignite UI works through a set of CSS custom properties that automatically adjust component dimensions and spacing. When you change the `--ig-size` property, components automatically detect this change and apply the appropriate sizing values.

### Size Detection Variables

Components use several CSS custom properties to detect and respond to size changes:

- `--component-size` - Maps the global `--ig-size` to a numeric value (1=small, 2=medium, 3=large)
- `--is-small` - Set to 1 when component is small-sized, 0 otherwise
- `--is-medium` - Set to 1 when component is medium-sized, 0 otherwise.  
- `--is-large` - Set to 1 when component is large-sized, 0 otherwise.

These variables are automatically calculated using mathematical CSS expressions and change whenever `--ig-size` is modified.

### Size Constants

The theming system defines three size constants:

- `--ig-size-small` (value: 1)
- `--ig-size-medium` (value: 2)  
- `--ig-size-large` (value: 3).

## Incorporating Size in Your Own Components

You can make your custom components responsive to size changes using Ignite UI's Sass utilities. These utilities generate the necessary CSS custom properties and mathematical expressions behind the scenes.

### Using the Sizable Mixin and Function

Here's how to create a component that responds to the global size setting:

```html
<div class="my-responsive-element"></div>
```

```scss
@use "igniteui-angular/theming" as *;

.my-responsive-element {
    // The sizable mixin sets up size detection CSS custom properties
    @include sizable();

    // Connect to the global size system
    --component-size: var(--ig-size, var(--ig-size-large));

    // Use the sizable function for responsive sizing
    --size: #{sizable(10px, 20px, 30px)};
    width: var(--size);
    height: var(--size);
}
```

### How the Sizable System Works Behind the Scenes

When you use `@include sizable()`, it generates CSS custom properties that detect the current component size:

```css
.my-responsive-element {
    --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
    --is-medium: min(
        clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
        clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
    );
    --is-small: clamp(0, var(--ig-size-medium, 2) - var(--component-size, 1), 1);
}
```

The `sizable(10px, 20px, 30px)` function generates a CSS expression that automatically selects the appropriate value:

```css
--size: max(
    calc(var(--is-large, 1) * 30px),
    calc(var(--is-medium, 1) * 20px), 
    calc(var(--is-small, 1) * 10px)
);
```

This mathematical approach using `clamp()`, `min()`, `max()`, and `calc()` functions allows components to automatically switch between size values based on the current `--ig-size` setting.

## API References

<div class="divider"></div>

- [Themes - Sizable Mixin](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#mixin-sizable)
- [Themes - Sizable Function](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-sizable)

### Sizing and Spacing Functions

- [Utilities - Pad](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/utilities#function-pad)
- [Utilities - Pad Inline](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/utilities#function-pad-inline)
- [Utilities - Pad Block](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/utilities#function-pad-block)

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
