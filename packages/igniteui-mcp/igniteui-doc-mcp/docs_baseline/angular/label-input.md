---
title: Angular Label and Input Directives - MIT license 
_description: With Ignite UI for Angular Label and Input directives, developers can decorate and style single-line or multi-line input elements, add additional CSS styles and integrate with other controls.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library, Angular Label component, Angular Label control, Angular Input component, Angular Input control, Input component, Input control, Label component, Label control, Angular Input directive, Angular Label directive, Angular Forms, Angular Reactive Forms, Angular Form Validation
_license: MIT
_tocName: Label & Input
---

# Angular Label & Input Directives Overview

The Ignite UI for Angular Input and Label directives are used to decorate and style single-line or multi-line input elements in an `igx-input-group` component.

## Angular Label & Input Example

```typescript
import { Component } from '@angular/core';
import { BaseInputGroupSampleComponent } from '../base-input.component';
import { FormsModule } from '@angular/forms';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';

@Component({
    selector: 'app-input-group-sample-1',
    styleUrls: ['./input-group-sample-1.component.scss'],
    templateUrl: './input-group-sample-1.component.html',
    imports: [FormsModule, IgxInputGroupComponent, IgxInputDirective, IgxLabelDirective]
})
export class InputGroupSample1Component extends BaseInputGroupSampleComponent { }
```
```html
<article class="sample-column">
    <form>
        <igx-input-group>
            <input igxInput name="fullName" type="text" />
            <label igxLabel for="fullName">Full Name</label>
        </igx-input-group>
    </form>
</article>
```
```scss
.sample-column {
    max-width: 550px;
}
```

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Label & Input

To get started with the Ignite UI for Angular Label and Input directives, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxInputGroupModule` in your **app.module.ts** file.

```typescript
// app.module.ts

import { FormsModule } from '@angular/forms';
import { IgxInputGroupModule } from 'igniteui-angular/input-group';
// import { IgxInputGroupModule } from '@infragistics/igniteui-angular'; for licensed package


@NgModule({
    ...
    imports: [..., IgxInputGroupModule, FormsModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxLabelDirective`, `IgxInputDirective`, and `IgxInputGroupComponent` as standalone dependencies, or use the [`IGX_INPUT_GROUP_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/input-group/src/input-group/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { FormsModule } from '@angular/forms';
import { IGX_INPUT_GROUP_DIRECTIVES } from 'igniteui-angular/input-group';
// import { IGX_INPUT_GROUP_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
  selector: 'app-home',
  template: `
    <igx-input-group>
      <input igxInput name="fullName" type="text" [(ngModel)]="fullName" />
      <label igxLabel for="fullName">Full Name</label>
    </igx-input-group>
  `,
  styleUrls: ['home.component.scss'],
  standalone: true,
  imports: [IGX_INPUT_GROUP_DIRECTIVES, FormsModule],
  /* or imports: [IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, FormsModule] */
})
export class HomeComponent {
  public fullName = 'John Doe';
}
```

Now that you have the Ignite UI for Angular Input Group module or directives imported, you can start using the `igxLabel` and `igxInput` directives and the `igx-input-group` component.

## Using the Angular Label & Input

The default styling of the Label and Input directives follows the text fields specification in the Material Design
[**guidelines**](https://material.io/guidelines/components/text-fields.html).

To use the [`igxInput`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinputdirective.html) and [`igxLabel`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlabeldirective.html), you have to wrap them in an `<igx-input-group>` container:

```html
<igx-input-group>
  <input igxInput name="fullName" type="text" />
  <label igxLabel for="fullName">Full Name</label>
</igx-input-group>
```

The `igxInput` directive could be applied to `<input>` and `<textarea>` HTML elements, in both single-line and multi-line text fields.

### Validation

We can validate an `input` using the [`required`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinputdirective.html#required) attribute. This will add an asterisk next to the label, indicating that this field must be completed. The input will turn green/red depending on whether the validation passes/fails.

```html
<igx-input-group>
  <input igxInput name="fullName" type="text" required="required" />
  <label igxLabel for="fullName">Full Name</label>
</igx-input-group>
```

```typescript
import { Component } from '@angular/core';
import { BaseInputGroupSampleComponent } from '../base-input.component';
import { FormsModule } from '@angular/forms';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';

@Component({
    selector: 'app-input-group-sample-2',
    styleUrls: ['./input-group-sample-2.component.scss'],
    templateUrl: './input-group-sample-2.component.html',
    imports: [FormsModule, IgxInputGroupComponent, IgxInputDirective, IgxLabelDirective]
})
export class InputGroupSample2Component extends BaseInputGroupSampleComponent { }
```
```html
<article class="sample-column">
    <form>
        <igx-input-group>
            <input igxInput name="fullName" type="text" required="required" />
            <label igxLabel for="fullName">Full Name</label>
        </igx-input-group>
    </form>
</article>
```
```scss
.sample-column {
    max-width: 550px;
}
```

<div class="divider--half"></div>

### Data Binding

The Ignite UI for Angular Input directive supports both one-way and two-way data-binding. The following code illustrates how to add a two-way data-binding using the `NgModel`:

```typescript
public user = {
    fullName: ""
};

```

in our markup:

```html
<igx-input-group>
  <input igxInput name="fullName" type="text" [(ngModel)]="user.fullName" required="required"/>
  <label igxLabel for="fullName">Full Name</label>
</igx-input-group>
```

### Focus & Text Selection

You can add logic to force `focus` on input elements using the [`igxFocus`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxfocusdirective.html) directive.

```html
<igx-input-group>
  <input igxInput [igxFocus]="isFocused" name="fullName" type="text" />
  <label igxLabel for="fullName">Full Name</label>
</igx-input-group>
```

> [!NOTE]
> To use the [`igxFocus`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxfocusdirective.html) directive, you have to import the [`IgxFocusModule`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxfocusmodule.html).

If you want the text in an input element, marked with `igxInput`, to be selected on focus, you have to enable the [`igxTextSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtextselectiondirective.html) directive.

```html
<igx-input-group>
  <input igxInput [igxTextSelection]="true" [igxFocus]="isFocused" name="fullName" type="text"/>
  <label igxLabel for="fullName">Full Name</label>
</igx-input-group>

<igx-input-group>
  <input igxInput [igxTextSelection]="true" name="email" type="text" />
  <label igxLabel for="email">Email</label>
</igx-input-group>
```

> [!NOTE]
> To use the [`igxTextSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtextselectiondirective.html) directive, you have to import the [`IgxTextSelectionModule`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtextselectionmodule.html).

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxFocusDirective, IgxTextSelectionDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-input-text-selection',
    templateUrl: './input-text-selection.component.html',
    styleUrls: ['./input-text-selection.component.scss'],
    imports: [FormsModule, IgxInputGroupComponent, IgxInputDirective, IgxTextSelectionDirective, IgxLabelDirective, IgxFocusDirective]
})
export class InputTextSelectionComponent {

    public person;
    public isFocused;
    constructor() {
        this.person = {
            fullName: 'John Doe',
            email: 'jd@email.com'
        };
        this.isFocused = !!this.person.fullName;
    }

}
```
```html
<article class="sample-column">
    <form>
        <igx-input-group>
            <input igxInput [igxTextSelection]="true" [(ngModel)]="person.fullName" name="fullName" type="text"/>
            <label igxLabel for="fullName">Full Name</label>
        </igx-input-group>
        <igx-input-group>
            <input igxInput [igxTextSelection]="true" [igxFocus]="isFocused" [(ngModel)]="person.email"  name="email" type="text" />
            <label igxLabel for="email">Email</label>
        </igx-input-group>
    </form>
</article>
```
```scss
.sample-column {
    max-width: 550px;
}
```

<div class="divider--half"></div>

## Input Group

The Ignite UI for Angular Input Group component helps developers to create easy-to-use and aesthetic forms. For further information, you can read the [Input Group documentation](input-group.md).

## API References

<div class="divider--half"></div>

- [IgxLabelDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlabeldirective.html)
- [IgxInputDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinputdirective.html)
- [IgxInputGroupComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinputgroupcomponent.html)

## Additional Resources

<div class="divider--half"></div>

Related topics:

- [Input Group](input-group.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
