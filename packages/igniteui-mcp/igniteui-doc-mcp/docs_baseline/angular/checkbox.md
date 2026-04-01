---
title: Angular Checkbox Component – Ignite UI for Angular - MIT license 
_description: Ignite UI for Angular Checkbox component is a selection control that allows users to make a binary choice for a certain condition. Try it Now
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Checkbox components, Angular Checkbox controls
_license: MIT
_tocName: Checkbox
---

# Angular Checkbox Component Overview

<p class="highlight">Angular Checkbox is an extension of the standard HTML input type checkbox, providing similar functionality, only enhanced with things like animations and Material Design styling. It enables users to choose one or several predefined options, mostly in forms and surveys.

The Ignite UI for Angular Checkbox component is a selection control that allows users to make a binary choice for a certain condition. It behaves similarly to the native browser checkbox. Some of the features it offers are styling options, themes, checked, unchecked, and indeterminate states, and others.</p>

## Angular Checkbox Example

See the checkbox in action in the following Angular Checkbox example below.

```typescript
import { Component } from '@angular/core';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';

@Component({
    selector: 'app-checkbox-sample-1',
    styleUrls: ['./checkbox-sample-1.component.scss'],
    templateUrl: './checkbox-sample-1.component.html',
    imports: [IgxCheckboxComponent]
})
export class CheckboxSample1Component { }
```
```html
<igx-checkbox [checked]="true">
    Simple checkbox
</igx-checkbox>
```
```scss
:host {
    display: flex;
    padding: 16px;
}
```

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Checkbox

To get started with the Ignite UI for Angular Checkbox component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxCheckboxModule` in the **app.module.ts** file:

```typescript
// app.module.ts

import { IgxCheckboxModule } from 'igniteui-angular/checkbox';
// import { IgxCheckboxModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxCheckboxModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxCheckboxComponent` as a standalone dependency.

```typescript
// home.component.ts

import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
// import { IgxCheckboxComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-checkbox [checked]="true">
        Simple checkbox
    </igx-checkbox>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxCheckboxComponent]
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Checkbox module or component imported, you can start using the `igx-checkbox` component.

## Using the Angular Checkbox Component

To make the checkbox in the demo, add the following code inside the component template:

```html
<igx-checkbox [checked]="true">
    Simple checkbox
</igx-checkbox>
```

### Checkbox properties

Let's enhance the code above by binding the checkbox properties to some data. Say, we have an array of task objects, each having two properties: description and done. You can bind the checkbox component [`checked`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcheckboxcomponent.html#checked) property to the underlying task object done property. Analogically, you can bind the [`value`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcheckboxcomponent.html#value) property to description.
Optionally, you can also bind the [`change`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcheckboxcomponent.html#change) event and add some custom logic in the provided event handler method.

```typescript
// tasks.component.ts
@Component({...})
export class HomeComponent {
    public tasks = [
        { done: true, description: 'Research' },
        { done: true, description: 'Implement' },
        { done: false, description: 'Test' }
    ];

    public statusChanged() {
        // event handler logic
    }
}
```

Enhance the component template by adding a checkbox for each task and then setting the corresponding property bindings:

```html
<!--tasks.component.html-->
<igx-checkbox *ngFor="let task of tasks" [checked]="task.done">
    {{ task.description }}
</igx-checkbox>
```

Add some styles:

```scss
//task.component.scss
:host {
    display: flex;
    flex-flow: column nowrap;
    padding: 16px;
}
igx-checkbox {
    margin-top: 16px;
}
```

The final result would be something like that:
```typescript
import { Component } from '@angular/core';

import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';

@Component({
    selector: 'app-checkbox-sample-2',
    styleUrls: ['./checkbox-sample-2.component.scss'],
    templateUrl: './checkbox-sample-2.component.html',
    imports: [IgxCheckboxComponent]
})
export class CheckboxSample2Component {
    public tasks = [
        { done: true, description: 'Research' },
        { done: true, description: 'Implement' },
        { done: false, description: 'Test' }
    ];
}
```
```html
@for (task of tasks; track task) {
  <igx-checkbox [checked]="task.done">
    {{ task.description }}
  </igx-checkbox>
}
```
```scss
:host {
    display: flex;
    flex-flow: column nowrap;
    padding: 16px;
}

igx-checkbox {
    margin-top: 16px;
}
```

### Label Positioning

You can position the label using the checkbox's [`labelPosition`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcheckboxcomponent.html#labelPosition) property:

```html
<igx-checkbox labelPosition="before"></igx-checkbox>
```

If the `labelPosition` is not set, the label will be positioned after the checkbox.

### Indeterminate Checkbox in Angular

In addition to the checked and unchecked states, there is a third state a checkbox can be in: **indeterminate**. In this state the checkbox is neither checked, nor unchecked. This is set using the checkbox's [`indeterminate`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcheckboxcomponent.html#indeterminate) property:

```html
<igx-checkbox [indeterminate]="true"></igx-checkbox>
```

We can create an app that has a list of tasks that need to be done and one master checkbox in Angular that's going to be checked only if all the tasks are completed. Let's update the previous sample. Starting with the template:

```html
<!-- app.component.html -->
<igx-checkbox
    [readonly]="true"
    [(ngModel)]="masterCheckbox.checked"
    [(indeterminate)]="masterCheckbox.indeterminate"
    (click)="toggleAll()"
>
All done
</igx-checkbox>
<igx-checkbox class="tasks" *ngFor="let task of tasks" [(ngModel)]="task.done">
    {{ task.description }}
</igx-checkbox>
```

Next, we're going to indent the subtasks, so it's more visual that they are part of the same group.

```scss
// app.component.scss
:host {
    display: flex;
    flex-flow: column nowrap;
    padding: 16px;
}
igx-checkbox {
    margin-top: 16px;
}
igx-checkbox.tasks {
    padding-left: 10px;
}
```

And finally, we'll create the logic of our application:

```ts
// app.component.ts
public tasks = [
    { done: true, description: 'Research' },
    { done: true, description: 'Implement' },
    { done: false, description: 'Test' }
];
public get masterCheckbox() {
    return this.tasks.reduce(
        (acc, curr, idx, arr) => {
            acc.checked = acc.checked && curr.done;
            acc.done = curr.done ? acc.done + 1 : acc.done;
            acc.indeterminate = acc.done === arr.length ? false : !!acc.done;
            return acc;
        },
        {
            checked: true,
            done: 0,
            indeterminate: false
        }
    );
}
public toggleAll() {
    if (this.masterCheckbox.checked) {
        for (const task of this.tasks) {
            task.done = false;
        }
    } else {
        for (const task of this.tasks) {
            task.done = true;
        }
    }
}
```

After all that is done, our application should look like this:
```typescript
import { Component } from '@angular/core';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-checkbox-sample-3',
    styleUrls: ['./checkbox-sample-3.component.scss'],
    templateUrl: './checkbox-sample-3.component.html',
    imports: [IgxCheckboxComponent, FormsModule]
})
export class CheckboxSample3Component {
    public tasks = [
        { done: true, description: 'Research' },
        { done: true, description: 'Implement' },
        { done: false, description: 'Test' }
    ];

    public get masterCheckbox() {
        return this.tasks.reduce(
            (acc, curr, idx, arr) => {
                acc.checked = acc.checked && curr.done;
                acc.done = curr.done ? acc.done + 1 : acc.done;
                acc.indeterminate = acc.done === arr.length ? false : !!acc.done;

                return acc;
            },
            {
                checked: true,
                done: 0,
                indeterminate: false
            }
        );
    }

    public toggleAll() {
        if (this.masterCheckbox.checked) {
            for (const task of this.tasks) {
                task.done = false;
            }
        } else {
            for (const task of this.tasks) {
                task.done = true;
            }
        }
    }
}
```
```html
<igx-checkbox
  [readonly]="true"
  [(ngModel)]="masterCheckbox.checked"
  [indeterminate]="masterCheckbox.indeterminate"
  (click)="toggleAll()"
  >
  All done
</igx-checkbox>
@for (task of tasks; track task) {
  <igx-checkbox class="tasks" [(ngModel)]="task.done">
    {{ task.description }}
  </igx-checkbox>
}
```
```scss
:host {
    display: flex;
    flex-flow: column nowrap;
    padding: 16px;
}

igx-checkbox {
    margin-top: 16px;
}

igx-checkbox.tasks {
    padding-left: 10px;
}
```


## Styling

### Checkbox Theme Property Map

When you modify a primary property, all related dependent properties are updated automatically:

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
            <td>
                <details><summary><strong>$empty-color</strong></summary>
                </details>
            </td>
            <td>$empty-color-hover</td>
            <td>The unchecked border color on hover.</td>
        </tr>
        <tr class="dependent">
            <td></td>
            <td>$focus-outline-color (indigo variant only)</td>
            <td>The focus outline color for indigo variant.</td>
        </tr>
    </tbody>
    <tbody class="group">
        <tr class="primary">
            <td>
                <details><summary><strong>$fill-color</strong></summary>
                </details>
            </td>
            <td>$fill-color-hover</td>
            <td>The checked border and fill colors on hover.</td>
        </tr>
        <tr class="dependent">
            <td></td>
            <td>$tick-color</td>
            <td>The checked mark color.</td>
        </tr>
        <tr class="dependent">
            <td></td>
            <td>$focus-border-color</td>
            <td>The focus border color.</td>
        </tr>
        <tr class="dependent">
            <td></td>
            <td>$disabled-indeterminate-color</td>
            <td>The disabled border and fill colors in indeterminate state.</td>
        </tr>
        <tr class="dependent">
            <td></td>
            <td>$focus-outline-color (bootstrap variant only)</td>
            <td>The focus outline color for bootstrap variant.</td>
        </tr>
        <tr class="dependent">
            <td></td>
            <td>$focus-outline-color-focused (indigo variant only)</td>
            <td>The focus outline color for focused state in indigo variant.</td>
        </tr>
    </tbody>
    <tbody class="group">
        <tr class="primary">
            <td>
                <details><summary><strong>$error-color</strong></summary>
                </details>
            </td>
            <td>$error-color-hover</td>
            <td>The border and fill colors in invalid state on hover.</td>
        </tr>
        <tr class="dependent">
            <td></td>
            <td>$focus-outline-color-error</td>
            <td>The focus outline color in error state.</td>
        </tr>
    </tbody>
    <tbody class="group">
        <tr class="primary">
            <td>
                <strong>$label-color</strong>
            </td>
            <td>$label-color-hover</td>
            <td>The text color for the label on hover.</td>
        </tr>
    </tbody>
</table>

> **Note:** The actual results may vary depending on the theme variant.

To get started with styling the checkbox, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Then, we create a new theme that extends the [`checkbox-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-checkbox-theme) and setting parameters to style the checkbox elements. By specifying the `$empty-color` and `$fill-color`, the theme automatically calculates appropriate state colors and contrast foregrounds. You can still override any other parameter with custom values as needed.

```scss
// in styles.scss
$custom-checkbox-theme: checkbox-theme(
    $empty-color: #ecaa53,
    $fill-color: #ecaa53,
    $border-radius: 5px
);
```

Finally, **include** the custom theme in your application:

```scss
:host {
    @include tokens($custom-checkbox-theme);
}
```

In the sample below, you can see how using the checkbox component with customized CSS variables allows you to create a design that visually resembles the checkbox used in the [`SAP UI5`](https://ui5.sap.com/#/entity/sap.m.CheckBox/sample/sap.m.sample.CheckBox) design system.

```typescript
import { Component } from '@angular/core';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { THEME_TOKEN, ThemeToken } from 'igniteui-angular/core';

@Component({
  selector: 'app-checkbox-styling',
  styleUrls: ['./checkbox-styling.component.scss'],
  templateUrl: './checkbox-styling.component.html',
  providers: [{ provide: THEME_TOKEN, useFactory: () => new ThemeToken('fluent') }],
  imports: [IgxCheckboxComponent]
})
export class CheckboxStylingComponent {
}
```
```html
<igx-checkbox id="checkbox-1" [disableRipple]="true" [checked]="true">
  Styled checkbox
</igx-checkbox>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

// CSS variables approach

igx-checkbox {
    --tick-color: #0064d9;
    --tick-color-hover: #e3f0ff;
    --tick-width: 2;
    --fill-color: transparent;
    --fill-color-hover: #e3f0ff;
    --label-color: #131e29;
    --focus-outline-color: #0032a5;
    --border-radius: #{rem(4px)};
}

igx-checkbox:hover {
    --empty-fill-color: #e3f0ff;
}

// Sass theme approach

// $custom-checkbox-theme: checkbox-theme(
//     $tick-color: #0064d9,
//     $tick-width: 2,
//     $tick-color-hover: #e3f0ff,
//     $fill-color: transparent,
//     $fill-color-hover: #e3f0ff,
//     $label-color: #131e29,
//     $focus-outline-color: #0032a5,
//     $empty-color: #131e29,
//     $border-radius: rem(4px),
// );

// :host {
//     @include tokens($custom-checkbox-theme);
// }
```

### Styling with Tailwind

You can style the `checkbox` using our custom Tailwind utility classes. Make sure to [set up Tailwind](themes/misc/tailwind-classes.md) first.

Along with the tailwind import in your global stylesheet, you can apply the desired theme utilities as follows:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

The utility file includes both `light` and `dark` theme variants.

- Use `light-*` classes for the light theme.
- Use `dark-*` classes for the dark theme.
- Append the component name after the prefix, e.g., `light-checkbox`, `dark-checkbox`.

Once applied, these classes enable dynamic theme calculations. From there, you can override the generated CSS variables using `arbitrary properties`. After the colon, provide any valid CSS color format (HEX, CSS variable, RGB, etc.).

You can find the full list of properties in the [checkbox-theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-checkbox-theme). The syntax is as follows:

```html
<igx-checkbox
class="!light-checkbox
![--empty-color:#7B9E89]
![--fill-color:#7B9E89]"
[checked]="true">
    Styled checkbox
</igx-checkbox>
```

>[!NOTE]
>The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your checkbox should look like this:

<div class="sample-container loading" style="height:50px">
    <iframe id="checkbox-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/data-entries/checkbox-tailwind-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

<div class="divider--half"></div>

## API References

<div class="divider--half"></div>

- [IgxCheckboxComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcheckboxcomponent.html)
- [IgxCheckboxComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-checkbox-theme)
- [LabelPosition](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/labelposition.html)

## Theming Dependencies

- [IgxRipple Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-riple-theme)

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
