---
title: Angular Button Group Component – Ignite UI for Angular | Infragistics | MIT license
_description: Provides button group functionality to developers and also allows horizontal/vertical alignment, single/multiple selection with toggling.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Button Group components, Angular Button Group controls, Angular Buttons components, Angular Buttons controls
_license: MIT
_tocName: Button Group
---

# Angular Button Group Component Overview

<p class="highlight">Angular Button Group component is used to organize buttons into styled button groups with horizontal/vertical alignment, single/multiple selection and toggling.</p>

## Angular Button Group Example

```typescript
import { Component } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-button-group-sample-1',
    styleUrls: ['./button-group-sample-1.component.scss'],
    templateUrl: './button-group-sample-1.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxIconComponent]
})

export class ButtonGroupSample1Component {
    public rippleColor = 'grey';
}
```
```html
<article class="sample-column">
    <igx-buttongroup>
        <button igxButton [igxRipple]="rippleColor">
            <igx-icon>format_align_left</igx-icon>
        </button>
        <button igxButton [igxRipple]="rippleColor">
            <igx-icon>format_align_center</igx-icon>
        </button>
        <button igxButton [igxRipple]="rippleColor">
            <igx-icon>format_align_right</igx-icon>
        </button>
        <button igxButton [igxRipple]="rippleColor" selected>
            <igx-icon>format_align_justify</igx-icon>
        </button>
    </igx-buttongroup>
</article>
```
```scss
igx-buttongroup{
    display: inline-block;
    max-width: 400px;
}
```

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Button Group

To get started with the Ignite UI for Angular Button Group component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxButtonGroupModule` in your **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxButtonGroupModule } from 'igniteui-angular/button-group';
// import { IgxButtonGroupModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxButtonGroupModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxButtonGroupComponent` as a standalone dependency, or use the [`IGX_BUTTON_GROUP_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/button-group/src/button-group/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

...
import { IGX_BUTTON_GROUP_DIRECTIVES } from 'igniteui-angular/button-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
// import { IGX_BUTTON_GROUP_DIRECTIVES, IgxIconComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-buttongroup>
        <button igxButton>
            <igx-icon>format_align_left</igx-icon>
        </button>
        <button igxButton>
            <igx-icon>format_align_center</igx-icon>
        </button>
        <button igxButton>
            <igx-icon>format_align_right</igx-icon>
        </button>
        <button igxButton selected>
            <igx-icon>format_align_justify</igx-icon>
        </button>
    </igx-buttongroup>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_BUTTON_GROUP_DIRECTIVES, IgxIconComponent]
    /* or imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxIconComponent] */
})
export class HomeComponent {}
```

> [!NOTE]
> This component uses Material Icons. Add the following link to your `index.html`: `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`

Now that you have the Ignite UI for Angular Button Group module or directives imported, you can start with a basic configuration of the `igx-buttongroup` and its buttons.

## Using for Angular Button Group Component

### Add Button Group

Use the [`igx-buttongroup`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbuttongroupcomponent.html) selector to wrap your buttons and display them into a button group. If you want a button to be selected by default, use the `selected` property:

```html
<!-- sample.component.html -->
<igx-buttongroup>
  <button igxButton>
    <igx-icon>format_align_left</igx-icon>
  </button>
  <button igxButton>
    <igx-icon>format_align_center</igx-icon>
  </button>
  <button igxButton>
    <igx-icon>format_align_right</igx-icon>
  </button>
  <button igxButton selected>
    <igx-icon>format_align_justify</igx-icon>
  </button>
</igx-buttongroup>
```

## Examples

### Alignment

Use the [`alignment`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbuttongroupcomponent.html#alignment) input property to set the orientation of the buttons in the button group.

```typescript
//sample.component.ts
import { ButtonGroupAlignment } from 'igniteui-angular/button-group';
// import { ButtonGroupAlignment } from '@infragistics/igniteui-angular'; for licensed package

...
public alignment = ButtonGroupAlignment.vertical;
...
```

```html
<!-- sample.component.html -->
<igx-buttongroup [alignment]="alignment">
  <button igxButton>Sofia</button>
  <button igxButton>London</button>
  <button igxButton selected>New York</button>
  <button igxButton>Tokyo</button>
</igx-buttongroup>
```

```typescript
import { Component } from '@angular/core';
import { ButtonGroupAlignment, IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-button-group-sample-2',
    styleUrls: ['./button-group-sample-2.component.scss'],
    templateUrl: './button-group-sample-2.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective]
})
export class ButtonGroupSample2Component {
    public alignment = ButtonGroupAlignment.vertical;
    public rippleColor = 'grey';
}
```
```html
<article class="sample-column">
    <igx-buttongroup [alignment]="alignment">
        <button igxButton [igxRipple]="rippleColor">Sofia</button>
        <button igxButton [igxRipple]="rippleColor">London</button>
        <button igxButton selected [igxRipple]="rippleColor">New York</button>
        <button igxButton [igxRipple]="rippleColor">Tokyo</button>
    </igx-buttongroup>
</article>
```
```scss
igx-buttongroup{
    display: inline-block;
    width: 200px;
}
```

<div class="divider--half"></div>

### Selection

In order to configure the `igx-buttongroup` selection, you could use its [selectionMode](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbuttongroupcomponent.html#selectionMode) property. This property accepts the following three modes:

- **single** - default selection mode of the button group. A single button can be selected/deselected by the user.
- **singleRequired** - mimics a radio group behavior. Only one button can be selected and once initial selection is made, deselection is not possible through user interaction.
- **multi** - multiple buttons in the group can be selected and deselected.

The sample below demonstrates the exposed `igx-buttongroup` selection modes:

```typescript
import { Component } from '@angular/core';
import { IgxRadioComponent } from 'igniteui-angular/radio';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-button-group-sample',
    styleUrls: ['./button-group-sample.component.scss'],
    templateUrl: './button-group-sample.component.html',
    imports: [IgxRadioComponent, FormsModule, IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxIconComponent]
})
export class ButtonGroupSampleComponent {
    public rippleColor = 'grey';
    public selectionMode: 'single' | 'singleRequired' | 'multi' = 'single';
}
```
```html
<article class="sample-column">
    <h6>Selection Mode</h6>
    <div class="radio-buttons">
        <igx-radio [(ngModel)]="selectionMode" value="single">Single</igx-radio>
        <igx-radio [(ngModel)]="selectionMode" value="singleRequired">Single-Required</igx-radio>
        <igx-radio [(ngModel)]="selectionMode" value="multi">Multi</igx-radio>
    </div>
    <igx-buttongroup [selectionMode]="selectionMode">
        <button igxButton [igxRipple]="rippleColor">
            <igx-icon>format_bold</igx-icon>
        </button>
        <button igxButton [igxRipple]="rippleColor">
            <igx-icon>format_italic</igx-icon>
        </button>
        <button igxButton [igxRipple]="rippleColor">
            <igx-icon>format_underlined</igx-icon>
        </button>
    </igx-buttongroup>
</article>
```
```scss
.sample-column,
.radio-buttons {
    display: flex;
    gap: 16px;
}

.sample-column {
    flex-direction: column;
    align-items: flex-start;
}
```

### Size

The `--ig-size` CSS custom property can be used to control the size of the button group.

```scss
/* sample.component.scss */
igx-buttongroup {
  --ig-size: var(--ig-size-small);
}
```

```html
<!-- sample.component.html -->
<igx-buttongroup></igx-buttongroup>
```

```typescript
import { Component, HostBinding, OnInit } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';

type Button = {
    label: string,
    selected: boolean,
    togglable: boolean
}

@Component({
    selector: 'app-button-group-sample-5',
    styleUrls: ['./button-group-sample-5.component.scss'],
    templateUrl: './button-group-sample-5.component.html',
    imports: [IgxButtonGroupComponent]
})
export class ButtonGroupSample5Component implements OnInit {
    public rippleColor = 'grey';
    public size = 'large';
    public sizes: Button[];

    public ngOnInit() {
        this.sizes = [
            { label: 'small', selected: this.size === 'small', togglable: true },
            { label: 'medium', selected: this.size === 'medium', togglable: true },
            { label: 'large', selected: this.size === 'large', togglable: true }
        ];
    }

    public selectSize(event: any) {
        this.size = this.sizes[event.index].label;
    }


    @HostBinding('style.--ig-size')
    protected get sizeStyle() {
        return `var(--ig-size-${this.size})`;
    }
}
```
```html
<article class="sample-column">
    <igx-buttongroup [values]="sizes" (selected)="selectSize($event)"></igx-buttongroup>
</article>
```
```scss
igx-buttongroup{
    display: inline-block;
}
```

### Custom toggle buttons

Use the [`values`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbuttongroupcomponent.html#values) input property to set an array of customized buttons in the button group.

```typescript
// sample.component.ts

interface IButton {
    ripple?: string;
    label?: string;
    disabled?: boolean;
    togglable?: boolean;
    selected?: boolean;
    color?: string;
    icon?: string;
}

class ToggleButton {
    private ripple: string;
    private label: string;
    private disabled: boolean;
    private togglable: boolean;
    private selected: boolean;
    private color: string;
    private icon: string;

    constructor(obj?: IButton) {
        this.ripple = obj.ripple || 'gray';
        this.label = obj.label;
        this.selected = obj.selected || false;
        this.togglable = obj.togglable || true;
        this.disabled = obj.disabled || false;
        this.color = obj.color;
        this.icon = obj.icon;
    }
}
...
public bordersButtons: ToggleButton[];

public ngOnInit() {
    this.bordersButtons = [
        new ToggleButton({
            icon: 'border_top',
            selected: true
        }),
        new ToggleButton({
            icon: 'border_right',
            selected: false
        }),
        new ToggleButton({
            icon: 'border_bottom',
            selected: false
        }),
        new ToggleButton({
            icon: 'border_left',
            selected: false
        })
    ];
}
...
```

```html
<!-- sample.component.html -->
<igx-buttongroup [selectionMode]="'multi'" [values]="bordersButtons"></igx-buttongroup>
```

```typescript
import { Component, OnInit } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';

interface IButton {
    ripple?: string;
    label?: string;
    disabled?: boolean;
    togglable?: boolean;
    selected?: boolean;
    color?: string;
    icon?: string;
}

class ToggleButton {
    private ripple: string;
    private label: string;
    private disabled: boolean;
    private togglable: boolean;
    private selected: boolean;
    private color: string;
    private icon: string;

    constructor(obj?: IButton) {
        this.ripple = obj.ripple || 'gray';
        this.label = obj.label;
        this.selected = obj.selected || false;
        this.togglable = obj.togglable || true;
        this.disabled = obj.disabled || false;
        this.color = obj.color;
        this.icon = obj.icon;
    }
}

@Component({
    selector: 'app-button-group-sample-3',
    styleUrls: ['./button-group-sample-3.component.scss'],
    templateUrl: './button-group-sample-3.component.html',
    imports: [IgxButtonGroupComponent]
})
export class ButtonGroupSample3Component implements OnInit {
    public bordersButtons: ToggleButton[];

    public ngOnInit() {
        this.bordersButtons = [
            new ToggleButton({
                icon: 'border_top',
                selected: true
            }),
            new ToggleButton({
                icon: 'border_right',
                selected: false
            }),
            new ToggleButton({
                icon: 'border_bottom',
                selected: false
            }),
            new ToggleButton({
                icon: 'border_left',
                selected: false
            })
        ];
    }
}
```
```html
<article class="sample-column">
    <igx-buttongroup [selectionMode]="'multi'" [values]="bordersButtons"></igx-buttongroup>
</article>
```
```scss
igx-buttongroup {
    display: inline-block;
    width: 300px;
}
```

## Styling

### Button Group Theme Property Map

When you set a value for the `$item-background` property, all related dependent properties listed in the table below are automatically updated to maintain visual consistency. The table shows which properties are affected when you customize the primary property.

<table class="collapsible-table">
  <thead>
    <tr>
      <th>Primary Property</th>
      <th>Dependent Property</th>
      <th>Description</th>
    </tr>
  </thead>

  <!-- group for item-background -->
  <tbody class="group">
    <tr class="primary">
      <td>
        <details><summary><strong>$item-background</strong></summary></details>
      </td>
      <td>$item-hover-background</td>
      <td>The hover background color for items.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-selected-background</td>
      <td>The selected item background color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-focused-background</td>
      <td>The focused item background color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-background-color</td>
      <td>The disabled item background color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-border-color</td>
      <td>The border color for items.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-text-color</td>
      <td>The text color for items.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$idle-shadow-color</td>
      <td>The idle shadow color for items.</td>
    </tr>
  </tbody>

  <!-- group for item-hover-background -->
  <tbody class="group">
    <tr class="primary">
      <td>
        <details><summary><strong>$item-hover-background</strong></summary></details>
      </td>
      <td>$item-selected-hover-background</td>
      <td>The selected item hover background color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-focused-hover-background</td>
      <td>The focused hover background color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-hover-text-color</td>
      <td>The text color for hovered items.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-hover-icon-color</td>
      <td>The icon color for hovered items.</td>
    </tr>
  </tbody>

  <!-- group for item-selected-background -->
  <tbody class="group">
    <tr class="primary">
      <td>
        <details><summary><strong>$item-selected-background</strong></summary></details>
      </td>
      <td>$item-selected-focus-background</td>
      <td>The selected item focus background color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-selected-background</td>
      <td>The disabled selected background color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-selected-text-color</td>
      <td>The text color for selected items.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-selected-icon-color</td>
      <td>The icon color for selected items.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-selected-hover-text-color</td>
      <td>The text color for selected hover items.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-selected-hover-icon-color</td>
      <td>The icon color for selected hover items.</td>
    </tr>
  </tbody>

  <!-- group for item-border-color -->
  <tbody class="group">
    <tr class="primary">
      <td>
        <details><summary><strong>$item-border-color</strong></summary></details>
      </td>
      <td>$item-hover-border-color</td>
      <td>The border color for hovered items.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-focused-border-color</td>
      <td>The border color for focused items.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-selected-border-color</td>
      <td>The border color for selected items.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-selected-hover-border-color</td>
      <td>The border color for selected hover items.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-disabled-border</td>
      <td>The border color for disabled items.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-selected-border-color</td>
      <td>The border color for disabled selected items.</td>
    </tr>
  </tbody>
</table>

To get started with styling the button group, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`button-group-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-button-group-theme) and specifying just the `$item-background`. Based on this value, the theme will automatically compute appropriate state colors, contrast foregrounds, and borders for the button group. Of course, you're still free to override any of the theme parameters with custom values if needed.

```scss
$custom-button-group: button-group-theme(
  $item-background: #57a5cd,
);
```

As seen, the `button-group-theme` exposes some useful parameters for basic styling of its items. If you want to drill deeper and change some button specific parameters, you can create a new theme that extends the `button-theme` and scope it under the respective button group class.

The last step is to include the component's theme.

```scss
:host {
  @include tokens($custom-button-group);
}
```

### Demo

```typescript
import { Component } from '@angular/core';
import { ButtonGroupAlignment, IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-button-group-style',
    styleUrls: ['./button-group-style.component.scss'],
    templateUrl: './button-group-style.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective]
})
export class ButtonGroupStyleComponent {
    public alignment = ButtonGroupAlignment.vertical;
}
```
```html
<article class="sample-column">
    <igx-buttongroup [alignment]="alignment">
        <button igxButton igxRipple="white">Sofia</button>
        <button igxButton igxRipple="white">London</button>
        <button igxButton igxRipple="white">New York</button>
        <button igxButton igxRipple="white" disabled>Tokyo</button>
    </igx-buttongroup>
</article>
```
```scss
@use "layout.scss" as *;
@use "igniteui-angular/theming" as *;

$custom-button-group: button-group-theme(
  $item-background: #57a5cd,
);

:host {
    @include tokens($custom-button-group);
}
```

### Styling with Tailwind

You can style the `button-group` using our custom Tailwind utility classes. Make sure to [set up Tailwind](themes/misc/tailwind-classes.md) first.

Along with the tailwind import in your global stylesheet, you can apply the desired theme utilities as follows:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

The utility file includes both `light` and `dark` theme variants.

- Use `light-*` classes for the light theme.
- Use `dark-*` classes for the dark theme.
- Append the component name after the prefix, e.g., `light-button-group`, `dark-button-group`.

Once applied, these classes enable dynamic theme calculations. From there, you can override the generated CSS variables using `arbitrary properties`. After the colon, provide any valid CSS color format (HEX, CSS variable, RGB, etc.).

You can find the full list of properties in the [button-group-theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-button-group-theme). The syntax is as follows:

```html
<igx-button-group
class="!light-button-group ![--item-background:#7B9E89]"
>
...
</igx-button-group>
```

>[!NOTE]
>The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your button group should look like this:

<div class="sample-container loading" style="height:100px">
    <iframe id="button-group-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/data-entries/button-group-tailwind-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

## API References

<div class="divider--half"></div>

- [IgxButtonGroupComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbuttongroupcomponent.html)
- [IgxButtonGroup Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-button-group-theme)
- [IgxButtonDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbuttondirective.html)
- [IgxButton Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-button-theme)

## Theming Dependencies

- [IgxIcon Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-icon-theme)
- [IgxButton Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-button-theme)
- [IgxRipple Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-ripple-theme)

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
