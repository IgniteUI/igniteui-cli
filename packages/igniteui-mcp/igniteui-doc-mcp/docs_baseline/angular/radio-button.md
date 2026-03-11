---
title: Angular Radio and Radio Group – Ignite UI for Angular | Infragistics | MIT license
_description: With Ignite UI for Angular Radio Button and Radio Group controls, developers can seamlessly present lists of options for users to select for better UI in template-driven and reactive forms.
_keywords: Angular Radio Group component, Angular Radio Group control, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library
_license: MIT
_tocName: Radio & Radio Group
---

# Angular Radio & Radio Group Component Overview

## Radio Button

<p class="highlight">The Ignite UI for Angular Radio Button component allows the user to select a single option from an available set of options that are listed side by side.</p>

## Angular Radio & Radio Group Example

```typescript
import { Component } from '@angular/core';
import { IgxRadioComponent } from 'igniteui-angular/radio';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-radio-sample-1',
    styleUrls: ['./radio-sample-1.component.scss'],
    templateUrl: './radio-sample-1.component.html',
    imports: [IgxRadioComponent, FormsModule]
})
export class RadioSample1Component {
    public selected: string;
}
```
```html
<igx-radio [(ngModel)]="selected" value="option1">Option 1</igx-radio>
<igx-radio [(ngModel)]="selected" value="option2">Option 2</igx-radio>
```
```scss
:host {
    display: flex;
    flex-flow: column nowrap;
    padding: 16px;
}

igx-radio + igx-radio {
    margin-top: 16px;
}
```

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Radio Button

To get started with the Ignite UI for Angular Radio Button component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxRadioModule` in the **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxRadioModule } from 'igniteui-angular/radio';
// import { IgxRadioModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxRadioModule],
    ...
})
export class AppModule {
    public selected: any;
}
```

Alternatively, as of `16.0.0` you can import the `IgxRadioGroupDirective` and `IgxRadioComponent` as standalone dependencies, or use the [`IGX_RADIO_GROUP_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/directives/radio/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { FormsModule } from '@angular/forms';
import { IGX_RADIO_GROUP_DIRECTIVES } from 'igniteui-angular/radio';
// import { IGX_RADIO_GROUP_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
  selector: 'app-home',
  template: `
    <igx-radio-group>
      <igx-radio [(ngModel)]="selected" value="London">London</igx-radio>
      <igx-radio [(ngModel)]="selected" value="New York">New York</igx-radio>
      <igx-radio [(ngModel)]="selected" value="Tokyo">Tokyo</igx-radio>
      <igx-radio [(ngModel)]="selected" value="Sofia">Sofia</igx-radio>
    </igx-radio-group>
  `,
  styleUrls: ['home.component.scss'],
  standalone: true,
  imports: [IGX_RADIO_GROUP_DIRECTIVES, FormsModule],
  /* or imports: [IgxRadioComponent, IgxRadioGroupDirective, FormsModule] */
})
export class HomeComponent {
  public selected: any;
}
```

Now that you have the Ignite UI for Angular Radio Button module or directives imported, you can start using the `igx-radio-group` directive and `igx-radio` component.

## Using the Angular Radio Button

Radio buttons can be displayed using the following code inside the component template:

```html
<igx-radio [(ngModel)]="selected" value="option1">Option 1</igx-radio>
<igx-radio [(ngModel)]="selected" value="option2">Option 2</igx-radio>
```

### Label

The `labelPosition` property can be used to change the default position of the label in the radio component. Users can choose between `before` and `after`. If not specified, the label will be placed after the radio button.

```html
<igx-radio [(ngModel)]="selected" value="option1" labelPosition="before">Option 1</igx-radio>
<igx-radio [(ngModel)]="selected" value="option2" labelPosition="before">Option 2</igx-radio>
```

<div class="sample-container loading" style="height: 120px">
    <iframe id="radio-sample-3-iframe" data-src='{environment:demosBaseUrl}/data-entries/radio-sample-3' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

### Properties

Let's enhance the previous sample by adding four radio buttons, each responsible for applying a certain color as a background. We will bind the backgroundColor property of a div element to the component's selectedColor property. You will notice that selectedColor also participates in a two way binding relation through the `NgModel` directive, therefore its value is updated each time the user selects a different radio button (color).

```typescript
// radiogroup.component.ts
...
public colors = [{
    hex: '#f06a2f',
    name: 'Carrot'
}, {
    hex: '#ff134a',
    name: 'Watermelon'
}, {
    hex: '#7bc96f',
    name: 'Grass'
},
{
    hex: 'transparent',
    name: 'No color'
}];

public selectedColor: string = this.colors[3].hex;
```

```html
<!--radiogroup.component.html-->
<igx-radio *ngFor="let color of colors" name="color" [value]="color.hex" [(ngModel)]="selectedColor">
  {{color.name}}
</igx-radio>

<div [style.background-color]="selectedColor">...</div>
```

Pay attention that if you don't use the `NgModel` directive in a two-way data binding, you must import the `FormsModule` and add it to the NgModule's imports list.

The final result would be something like that:

```typescript
import { Component } from '@angular/core';

import { IgxRadioComponent } from 'igniteui-angular/radio';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-radio-sample-2',
    styleUrls: ['./radio-sample-2.component.scss'],
    templateUrl: './radio-sample-2.component.html',
    imports: [IgxRadioComponent, FormsModule]
})
export class RadioSample2Component {
    public colors = [{
        hex: '#f06a2f',
        name: 'Carrot'
    }, {
        hex: '#ff134a',
        name: 'Watermelon'
    }, {
        hex: '#7bc96f',
        name: 'Grass'
    },
    {
        hex: 'transparent',
        name: 'No color'
    }];

    public selectedColor: string = this.colors[3].hex;
}
```
```html
@for (color of colors; track color) {
  <igx-radio name="color" [value]="color.hex" [(ngModel)]="selectedColor">
    {{color.name}}
  </igx-radio>
}

<div class="box" [style.background-color]="selectedColor">
  <div>
    <h5>New York City</h5>
    New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is
    Manhattan, a densely populated borough that's among the world's major commercial, financial and cultural
    centers.
  </div>
</div>
```
```scss
:host {
    display: flex;
    flex-flow: column nowrap;
    padding: 16px;
}

igx-radio + igx-radio {
    margin-top: 16px;
}

.box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    max-width: 400px;
    height: 250px;
    padding: 16px;
    text-align: center;
    border-radius: 4px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, .24);
    transition: background-color .2s ease-out;
}


h5 {
    margin: 0 0 16px 0;
}
```

## Styling

### Radio Theme Property Map

When you modify a primary property, all related dependent properties are automatically updated to reflect the change:

<table class="collapsible-table">
  <thead>
    <tr>
      <th>Primary Property</th>
      <th>Dependent Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody class="group">
    <tr class="primary">
      <td><details><summary><strong>$empty-color</strong></summary></details></td>
      <td>$hover-color</td>
      <td>Border and dot colors on hover</td>
    </tr>
    <tr class="dependent"><td></td><td>$focus-outline-color (indigo)</td><td>Focus outline color (Indigo theme)</td></tr>
  </tbody>
  <tbody class="group">
    <tr class="primary">
      <td><details><summary><strong>$fill-color</strong></summary></details></td>
      <td>$fill-color-hover</td>
      <td>Checked dot color on hover</td>
    </tr>
    <tr class="dependent"><td></td><td>$fill-hover-border-color (non-bootstrap)</td><td>Checked border color on hover</td></tr>
    <tr class="dependent"><td></td><td>$focus-border-color (bootstrap)</td><td>Focus border color</td></tr>
    <tr class="dependent"><td></td><td>$focus-outline-color (bootstrap)</td><td>Focus outlined color</td></tr>
    <tr class="dependent"><td></td><td>$focus-outline-color-filled (indigo)</td><td>Focus outline color when radio is filled</td></tr>
  </tbody>
  <tbody class="group">
    <tr class="primary">
      <td><strong>$label-color</strong></td>
      <td>$label-color-hover</td>
      <td>Label text color on hover</td>
    </tr>
  </tbody>
  <tbody class="group">
    <tr class="primary">
      <td><details><summary><strong>$error-color</strong></summary></details></td>
      <td>$error-color-hover</td>
      <td>Label, border, and dot color in invalid state on hover</td>
    </tr>
    <tr class="dependent"><td></td><td>$focus-outline-color-error</td><td>Focus outline color in invalid state</td></tr>
  </tbody>
</table>

To get started with styling the radio buttons, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`radio-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-radio-theme). By providing just two key parameters — `$empty-color` and `$fill-color` — you can generate a fully styled radio button. These values serve as the foundation for the theme, by providing them it will automatically compute all the required foreground and background colors for various states (e.g., hover, selected, disabled).

```scss
$custom-radio-theme: radio-theme(
    $empty-color:  #345779,
    $fill-color: #2dabe8,
);
```

Finally, **include** the custom theme in your application:

```scss
@include css-vars($custom-radio-theme);
```

```typescript
import { Component } from '@angular/core';
import { IgxRadioComponent } from 'igniteui-angular/radio';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-radio-sample-1',
  styleUrls: ['./radio-styling-sample.component.scss'],
  templateUrl: './radio-styling-sample.component.html',
  imports: [IgxRadioComponent, FormsModule]
})
export class RadioStylingSampleComponent {
  public selected: string;
}
```
```html
<div class="radio-wrapper">
  <igx-radio [(ngModel)]="selected" value="option1">New York</igx-radio>
  <igx-radio [(ngModel)]="selected" value="option2">London</igx-radio>
  <igx-radio [(ngModel)]="selected" value="option3">Sofia</igx-radio>
  <igx-radio [(ngModel)]="selected" value="option4">Tokyo</igx-radio>
  <igx-radio [(ngModel)]="selected" value="option5" [disabled]="true">Singapore</igx-radio>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

// CSS variables approach

igx-radio {
    --empty-color: #556b81;
    --label-color: #131e29;
    --fill-color: #0064d9;
    --focus-outline-color: #0032a5;
}

igx-radio:hover {
    --empty-fill-color: #e3f0ff;
    --empty-color: #0064d9;
    --hover-color: transparent;
}

// Sass theme approach

// $custom-radio-theme: radio-theme(
//     $empty-color: #556b81,
//     $label-color: #131e29,
//     $fill-color: #0064d9,
//     $focus-outline-color: #0032a5,
//     $fill-color-hover: #0064d9,
//     $hover-color: transparent
// );

// @include css-vars($custom-radio-theme);
```

> [!NOTE]
> The sample uses the [Fluent Light](themes/sass/schemas.md#predefined-schemas) schema.

<div class="divider--half"></div>

### Styling with Tailwind

You can style the `radio button` using our custom Tailwind utility classes. Make sure to [set up Tailwind](themes/misc/tailwind-classes.md) first.

Along with the tailwind import in your global stylesheet, you can apply the desired theme utilities as follows:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

The utility file includes both `light` and `dark` theme variants.

- Use `light-*` classes for the light theme.
- Use `dark-*` classes for the dark theme.
- Append the component name after the prefix, e.g., `light-radio`, `dark-radio`.

Once applied, these classes enable dynamic theme calculations. From there, you can override the generated CSS variables using `arbitrary properties`. After the colon, provide any valid CSS color format (HEX, CSS variable, RGB, etc.).

You can find the full list of properties in the [radio-theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-radio-theme). The syntax is as follows:


```html
<igx-radio
class="!light-radio ![--empty-color:#576E60] ![--fill-color:#7B9E89]"
...
>
  New York
</igx-radio>
```

>[!NOTE]
>The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your radio button should look like this:

<div class="sample-container loading" style="height:300px">
    <iframe id="radio-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/data-entries/radio-tailwind-styling-sample' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

## Radio Group

<p class="highlight">The Ignite UI for Angular Radio Group directive provides a grouping container that allows better control over the child radio components and supports template-driven and reactive forms. </p>

### Demo

```typescript
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxRadioComponent, IgxRadioGroupDirective } from 'igniteui-angular/radio';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';


@Component({
    selector: 'app-radio-group-sample',
    styleUrls: ['./radio-group-sample.component.scss'],
    templateUrl: './radio-group-sample.component.html',
    imports: [FormsModule, ReactiveFormsModule, IgxInputGroupComponent, IgxInputDirective, IgxRadioGroupDirective, IgxRadioComponent, IgxButtonDirective, IgxRippleDirective, IgxLabelDirective]
})
export class RadioGroupSampleComponent {
    private _formBuilder = inject(FormBuilder);

    public fruitsForm: FormGroup;
    public fruits = ['Apple', 'Mango', 'Banana', 'Orange'];
    public newModel: FruitData;
    public model: FruitData;

    constructor() {
        // Simulate getting data from external service
        this.model = {
            favFruit: this.fruits[0],
            fullName: 'John Doe'
        };

        this.createForm();
    }

    public onSubmit() {
        if (this.fruitsForm.valid) {
            // simulate new model creation and send the new data to external service
            this.newModel = {
                favFruit: this.fruitsForm.value.favoriteFruit,
                fullName: this.fruitsForm.value.fullName
            };
        } else {
            this.newModel = null;
        }
    }

    public onReset() {
        this.fruitsForm.patchValue({
            favoriteFruit: this.model.favFruit,
            fullName: this.model.fullName
        });
        this.newModel = null;
    }

    private createForm() {
        this.fruitsForm = this._formBuilder.group({
            favoriteFruit: ['', Validators.required],
            fullName: ''
        });

        this.fruitsForm.setValue({
            favoriteFruit: this.model.favFruit,
            fullName: this.model.fullName
        });
    }
}

export class FruitData {
    public fullName: string;
    public favFruit: string;
}
```
```html
<div class="sample-wrapper">
  <label>Choose a fruit and submit your choice:</label>
  <form [formGroup]="fruitsForm" (ngSubmit)="onSubmit()">
    <igx-input-group>
      <input igxInput name="fullName" type="text" formControlName="fullName" required />
    </igx-input-group>

    <igx-radio-group name="fruitsRadioGroup" formControlName="favoriteFruit">
      @for (fruit of fruits; track fruit) {
        <igx-radio class="radio-sample" value="{{fruit}}">
          {{fruit}}
        </igx-radio>
      }
    </igx-radio-group>
    <button igxButton="contained" igxRipple type="submit">Submit</button>
    <button igxButton="contained" igxRipple type="button" (click)="onReset()">Reset</button>
  </form>
  @if (newModel) {
    <label igxLabel>{{newModel.fullName}} favourite fruit is {{newModel.favFruit}}.</label>
  }
</div>
```
```scss
.sample-wrapper {
    margin: 16px;
}

form {
    max-width: 380px;
    margin-bottom: 16px;
}

igx-radio {
    margin: 8px;
}

.igx-button--contained {
    margin-right: 16px;
}
```

<div class="divider--half"></div>

### Usage

The Radio Group Directive is exported as an `NgModule`, thus all you need to do in your application is to import the `IgxRadioModule` in the **app.module.ts** file:

```typescript
// app.module.ts
...
import { IgxRadioModule } from 'igniteui-angular/radio';
// import { IgxRadioModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxRadioModule],
    ...
})
```

To get started, create an [`igxRadioGroup`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxradiogroupdirective.html) and add several [`igxRadio`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxradiocomponent.html) components.

Note that, setting a [`name`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxradiogroupdirective.html#name) property for the radio group is **mandatory**.

```html
<!--radio-group.component.html-->
<igx-radio-group name="fruitsRadioGroup">
  <igx-radio *ngFor="let fruit of fruits" value="{{fruit}}">
    {{fruit}}
  </igx-radio>
</igx-radio-group>
```

```typescript
// radio-group.component.ts
public fruits = ["Apple", "Mango", "Banana", "Orange"];
```

### Alignment

Use the [`alignment`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxradiogroupdirective.html#alignment) input property to change the orientation of the `igxRadio` components in the radio group. Users can choose between `horizontal` and `vertical`. By default the radio group alignment is horizontal.

```typescript
//sample.component.ts
import { RadioGroupAlignment } from "igniteui-angular/radio";
...
public alignment = RadioGroupAlignment.vertical;
...
```

```html
<!-- sample.component.html -->
<igx-radio-group [alignment]="alignment">
  <igx-radio [(ngModel)]="selected" value="London">London</igx-radio>
  <igx-radio [(ngModel)]="selected" value="New York">New York</igx-radio>
  <igx-radio [(ngModel)]="selected" value="Tokyo">Tokyo</igx-radio>
  <igx-radio [(ngModel)]="selected" value="Sofia">Sofia</igx-radio>
</igx-radio-group>
```

```typescript
import { Component } from '@angular/core';
import { IgxRadioComponent, IgxRadioGroupDirective, RadioGroupAlignment } from 'igniteui-angular/radio';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-radio-group-vertical',
    styleUrls: ['./radio-group-vertical.component.scss'],
    templateUrl: './radio-group-vertical.component.html',
    imports: [IgxRadioGroupDirective, IgxRadioComponent, FormsModule]
})
export class RadioGroupVerticalComponent {
    public alignment = RadioGroupAlignment.vertical;
    public selected: string;
}
```
```html
<article class="sample-column">
    <igx-radio-group [alignment]="alignment">
        <igx-radio [(ngModel)]="selected" value="London">London</igx-radio>
        <igx-radio [(ngModel)]="selected" value="New York">New York</igx-radio>
        <igx-radio [(ngModel)]="selected" value="Tokyo">Tokyo</igx-radio>
        <igx-radio [(ngModel)]="selected" value="Sofia">Sofia</igx-radio>
    </igx-radio-group>
</article>
```
```scss
igx-radio {
    margin-bottom: 8px;
}
```

<div class="divider--half"></div>

## API References

<div class="divider--half"></div>

- [IgxRadioGroupDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxradiogroupdirective.html)
- [IgxRadioComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxradiocomponent.html)
- [IgxRadioComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-radio-theme)

## Theming Dependencies

- [IgxRipple Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-ripple-theme)

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
