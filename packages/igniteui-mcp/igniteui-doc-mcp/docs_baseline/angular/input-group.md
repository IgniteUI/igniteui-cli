---
title: Angular Input Group Component | Ignite UI for Angular | MIT license
description: The Input Group component in Ignite UI for Angular allows for easy-to-use and aesthetic forms, simplicity with inputting data, and provides mitigation for handling validation and errors.
keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library, Native Angular Components, Angular Label component, Angular Label control, Angular Input component, Angular Input control, Input component, Input control, Label component, Label control, Angular Input Group component, Angular Input Group control, Angular Input directive, Angular Label directive, Angular Forms, Angular Reactive Forms, Angular Form Validation
license: MIT
llms:
  description: "The IgxInputGroupComponent allows the user to enhance input elements like input, select, textarea, etc."
_tocName: Input Group
---
# Angular Input Group Component Overview

The `IgxInputGroupComponent` allows the user to enhance input elements like input, select, textarea, etc. This can be achieved by adding custom content like text, icons, buttons, custom validation, floating label, etc., on either side of them, as a prefix, suffix, or hint.

## Angular Input Group Example

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

<hr/>

## Getting Started with Ignite UI for Angular Input Group

To get started with the Ignite UI for Angular Input Group component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](/general/getting-started) topic.

The next step is to import the `IgxInputGroupModule` in your **app.module.ts** file.

Note that the `IgxInputGroupComponent` also depends on the Angular **FormsModule** in order to have a working Template Driven Form:

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

Alternatively, as of `16.0.0` you can import the `IgxInputGroupComponent` as a standalone dependency, or use the [`IGX_INPUT_GROUP_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/input-group/src/input-group/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { FormsModule } from '@angular/forms';
import { IGX_INPUT_GROUP_DIRECTIVES } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
// import { IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-input-group>
        <igx-prefix>+359</igx-prefix>
        <label igxLabel for="phone">Phone</label>
        <input igxInput [(ngModel)]="value" name="phone" type="tel" maxlength="9" />
        <igx-icon igxSuffix>phone</igx-icon>
    </igx-input-group>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, FormsModule]
    /* or imports: [IgxInputGroupComponent, IgxPrefixDirective, IgxLabelDirective, IgxInputDirective, IgxIconComponent, IgxSuffixDirective, FormsModule] */
})
export class HomeComponent {
    public value = '123456789';
}
```

**Note:** 
This component uses Material Icons. Add the following link to your `index.html`: `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`

Now that you have the Ignite UI for Angular Input Group module or directives imported, you can start using the `igx-input-group` component.

**Note:** 
To use any of the directives `igxInput`, `igxLabel`, `igx-prefix`, `igx-suffix` or `igx-hint`, you have to wrap them in an `<igx-input-group>` container.

## Using the Angular Input Group

### Label & Input

You can read about the [`igxLabel`](mcp:get_api_reference?platform=angular&component=IgxLabelDirective) and [`igxInput`](mcp:get_api_reference?platform=angular&component=IgxInputDirective) directives as well as their validation, data binding and API in the [Label & Input documentation](/label-input).

### Prefix & Suffix

The `igx-prefix` or `igxPrefix` and `igx-suffix` or `igxSuffix` directives can contain or be attached to HTML elements, strings, icons or even other components. In the following sample we will create a new input field with a string **prefix** and an icon **suffix**:

```html
<igx-input-group>
    <igx-prefix>+359</igx-prefix>
    <label igxLabel for="phone">Phone</label>
    <input igxInput name="phone" type="tel" maxlength="9" />
    <igx-icon igxSuffix>phone</igx-icon>
</igx-input-group>
```

```typescript
import { Component } from '@angular/core';
import { BaseInputGroupSampleComponent } from '../base-input.component';
import { FormsModule } from '@angular/forms';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-input-group-sample-3',
    styleUrls: ['./input-group-sample-3.component.scss'],
    templateUrl: './input-group-sample-3.component.html',
    imports: [FormsModule, IgxInputGroupComponent, IgxPrefixDirective, IgxLabelDirective, IgxInputDirective, IgxIconComponent, IgxSuffixDirective]
})
export class InputGroupSample3Component extends BaseInputGroupSampleComponent { }
```
```html
<article class="sample-column">
    <form>
        <igx-input-group>
            <igx-prefix>+359</igx-prefix>
            <label igxLabel for="phone">Phone</label>
            <input igxInput name="phone" type="tel" />
            <igx-icon igxSuffix>phone</igx-icon>
        </igx-input-group>
    </form>
</article>
```
```scss
.sample-column {
    max-width: 550px;
}
```

<hr/>

### Hints

The [`igx-hint`](mcp:get_api_reference?platform=angular&component=IgxHintDirective) directive provides a helper text placed below the input. It can be at the beginning or at the end of the input depending on the value of the [`position`](mcp:get_api_reference?platform=angular&component=IgxHintDirective&member=position) property. Let's add a hint to our phone input:

```html
<igx-input-group>
    <igx-prefix>+359</igx-prefix>
    <label igxLabel for="phone">Phone</label>
    <input igxInput name="phone" type="tel" />
    <igx-suffix>
        <igx-icon>phone</igx-icon>
    </igx-suffix>
    <igx-hint position="start">Ex.: +359 888 123 456</igx-hint>
</igx-input-group>
```

This is how the phone field with hint looks:
```typescript
import { Component, OnInit } from '@angular/core';
import { BaseInputGroupSampleComponent } from '../base-input.component';
import { FormsModule } from '@angular/forms';
import { IgxHintDirective, IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-input-group-sample-4',
    styleUrls: ['./input-group-sample-4.component.scss'],
    templateUrl: './input-group-sample-4.component.html',
    imports: [FormsModule, IgxInputGroupComponent, IgxPrefixDirective, IgxLabelDirective, IgxInputDirective, IgxSuffixDirective, IgxIconComponent, IgxHintDirective]
})
export class InputGroupSample4Component extends BaseInputGroupSampleComponent { }
```
```html
<article class="sample-column">
    <form>
        <igx-input-group>
            <igx-prefix>+359</igx-prefix>
            <label igxLabel for="phone">Phone</label>
            <input type="tel" igxInput name="phone" />
            <igx-suffix>
                <igx-icon>phone</igx-icon>
            </igx-suffix>
            <igx-hint position="start">Ex.: +359 888 123 456</igx-hint>
        </igx-input-group>
    </form>
</article>
```
```scss
.sample-column {
    max-width: 550px;
}
```

<hr/>

### Input Types & Input Group Type Token

The input group styles can be altered by using the [`type`](mcp:get_api_reference?platform=angular&component=IgxInputGroupComponent&member=type) property of the [`igxInputGroup`](mcp:get_api_reference?platform=angular&component=IgxInputGroupComponent) component. The input group component supports the following types: `line` (default if type is not specified), `border`, `box`, and `search`. The `line`, `border`, and `box` types are made specifically for the `Material Design` themes. Setting those types with other themes will not have any effect on how the input group looks.
An example of setting a specific type declaratively:

```html
<igx-input-group type="border"></igx-input-group>
```

Using the [`IgxIGX_INPUT_GROUP_TYPE`](mcp:get_api_reference?platform=angular&component=IGX_INPUT_GROUP_TYPE) injection token allows to specify a type on an application level for all input-group instances. It provides an easy way to style all related components at once.
To set the type, use the [`IgxIGX_INPUT_GROUP_TYPE`](mcp:get_api_reference?platform=angular&component=IGX_INPUT_GROUP_TYPE) injection token to create a DI provider.

```typescript
providers: [{provide: IGX_INPUT_GROUP_TYPE, useValue: 'box' }]
```

**Note:** 
The [`type`](mcp:get_api_reference?platform=angular&component=IgxInputGroupComponent&member=type) property has precedence over a [`IgxIGX_INPUT_GROUP_TYPE`](mcp:get_api_reference?platform=angular&component=IGX_INPUT_GROUP_TYPE), thus a token value can be overridden on a component level if the type property is set explicitly.
Most of the `igniteui-angular` form controls use input-group component internally, or allow for a custom template. Setting a global token will affect these components as well.

Ignite UI for Angular also provides styling for the input of `type="file"` and it supports all the input group types and themes, just add this to your template:

```html
<igx-input-group>
    <input igxInput type="file" multiple />
</igx-input-group>
```

```typescript
import { Component } from '@angular/core';
import { BaseInputGroupSampleComponent } from '../base-input.component';
import { IGX_INPUT_GROUP_TYPE, IgxHintDirective, IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-input-group-sample-5',
    styleUrls: ['./input-group-sample-5.component.scss'],
    templateUrl: './input-group-sample-5.component.html',
    providers: [{ provide: IGX_INPUT_GROUP_TYPE, useValue: 'box' }],
    imports: [FormsModule, IgxInputGroupComponent, IgxInputDirective, IgxLabelDirective, IgxSuffixDirective, IgxIconComponent, IgxHintDirective, IgxPrefixDirective]
})
export class InputGroupSample5Component extends BaseInputGroupSampleComponent { }
```
```html
<article>
  <form>
    <h6>Line Type</h6>
    <igx-input-group type="line">
      <input igxInput name="fullName1" type="text" />
      <label igxLabel for="fullName1">Full Name</label>
      <igx-suffix>
        <igx-icon>person</igx-icon>
      </igx-suffix>
    </igx-input-group>
    <h6>Box Type</h6>
    <igx-input-group type="box">
      <input igxInput name="fullName2" type="text" />
      <label igxLabel for="fullName2">Full Name</label>
      <igx-suffix>
        <igx-icon>person</igx-icon>
      </igx-suffix>
    </igx-input-group>
    <h6>Border Type</h6>
    <igx-input-group type="border">
      <input igxInput name="fullName3" type="text" />
      <label igxLabel for="fullName3">Full Name</label>
      <igx-suffix>
        <igx-icon>person</igx-icon>
      </igx-suffix>
    </igx-input-group>
    <h6>File Type</h6>
    <igx-input-group>
      <label igxLabel>Important Documents</label>
      <input
        igxInput
        type="file"
        multiple
        />
        <igx-hint>Upload a file to begin...</igx-hint>
      </igx-input-group>
      <h6>Search Type</h6>
      <igx-input-group type="search">
        <input #input1 igxInput placeholder="Search" />
        <igx-prefix>
          <igx-icon>search</igx-icon>
        </igx-prefix>
        @if (input1.value.length > 0) {
          <igx-suffix (click)="input1.value = ''">
            <igx-icon>clear</igx-icon>
          </igx-suffix>
        }
        <igx-suffix>
          <igx-icon>mic</igx-icon>
        </igx-suffix>
      </igx-input-group>
      <h6>Type Box set via a Token</h6>
      <igx-input-group>
        <input igxInput name="fullName1" type="text" />
        <label igxLabel for="fullName1">Full Name</label>
        <igx-suffix>
          <igx-icon>person</igx-icon>
        </igx-suffix>
      </igx-input-group>
    </form>
  </article>
```
```scss
article {
    padding: 16px;
    height: 100%;
    overflow: auto;
}

h6 {
    font-weight: 400;
    margin: 24px 0 8px;
    font-size: 1.1rem;
}
```

### Input Group Theme

The input group component supports several themes - `material`, `fluent`, `bootstrap`, and `indigo-design`; The [`theme`](mcp:get_api_reference?platform=angular&component=IgxInputGroupComponent&member=theme) is automatically set during component initialization and is inferred from the currently used stylesheet. If you plan to support several themes in your application with runtime switching, you can explicitly set the theme using the `theme` Input property.

```html
<igx-input-group theme="fluent">...</igx-input-group>
```

### Typed Forms

The Ignite UI for Angular Input Group component can be used inside strictly typed reactive forms which are the default ones as of Angular 14. To find out more about the typed forms, you can check [Angular official documentation](https://angular.io/guide/typed-forms).

```typescript
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxDatePickerComponent } from 'igniteui-angular/date-picker';
import { IgxPickerToggleComponent } from 'igniteui-angular/core';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

export interface registrationFormGroup
{
  fName: FormControl<string>;
  lName: FormControl<string>;
  email: FormControl<string>;
  number?: FormControl<number|null>;
  company?: FormControl<string|null>;
  birthDate?: FormControl<string|null>;
  password: FormControl<string>;
}

@Component({
    selector: 'app-typed-form',
    templateUrl: './typed-form.component.html',
    styleUrls: ['./typed-form.component.scss'],
    imports: [FormsModule, ReactiveFormsModule, IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxDatePickerComponent, IgxPickerToggleComponent, IgxSuffixDirective, IgxIconComponent, IgxButtonDirective, IgxRippleDirective]
})
export class TypedFormComponent {
    public minDate = new Date();
    public maxDate = new Date(new Date(this.minDate.getFullYear(), this.minDate.getMonth(), this.minDate.getDate()));

    registerForm = new FormGroup<registrationFormGroup>({
        fName: new FormControl<string>('', { nonNullable: true }),
        lName: new FormControl<string>('', { nonNullable: true }),
        email: new FormControl<string>('', { nonNullable: true}),
        number: new FormControl<number>(null, { nonNullable: false}),
        company: new FormControl<string>('', { nonNullable: false}),
        birthDate: new FormControl<string>('', { nonNullable: false}),
        password: new FormControl<string>('', { nonNullable: false})
    });

    constructor() { }

    public onSubmit() {
        console.log(this.registerForm.value);
        this.registerForm.reset();
    }
}
```
```html
<article class="sample-column">
    <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
        <h4>Registration Form</h4>
        <div class="container">
            <igx-input-group>
                <label igxLabel for="fName">First Name</label>
                <input igxInput name="fName" type="text" formControlName="fName" required />
            </igx-input-group>

            <igx-input-group>
                <label igxLabel for="lName">Last Name</label>
                <input igxInput name="lName" type="text" formControlName="lName" required />
            </igx-input-group>

            <igx-input-group>
                <label igxLabel for="email">Email</label>
                <input igxInput name="email" type="text" formControlName="email" required />
            </igx-input-group>

            <igx-input-group>
                <label igxLabel for="number">Phone Number</label>
                <input igxInput name="number" type="number" formControlName="number" />
            </igx-input-group>

            <igx-input-group>
                <label igxLabel for="company">Company</label>
                <input igxInput name="company" type="text" formControlName="company" />
            </igx-input-group>

            <igx-date-picker name="date" [maxValue]="maxDate">
                <label igxLabel for="date">Date of Birth</label>
                <igx-picker-toggle igxSuffix>
                    <igx-icon>today</igx-icon>
                </igx-picker-toggle>
            </igx-date-picker>

            <igx-input-group>
                <label igxLabel for="password">Password</label>
                <input igxInput name="password" type="password" formControlName="password" required />
            </igx-input-group>
        
            <button igxButton="contained" igxRipple type="submit">Submit</button>
        </div>
    </form>
</article>
```
```scss
@use '../../../../variables' as *;

.container > * {
    margin-top: 32px;
}

form {
    box-shadow: elevation(4);
    padding: 24px;
    margin-bottom: 48px;
}

h4 {
    margin-top: 0;
}
```

## Validation

The following samples demonstrate how to configure input validation when using [template-driven](https://angular.io/guide/forms) or [reactive forms](https://angular.io/guide/reactive-forms).

### Template-Driven Forms

Template-driven form validation is achieved by adding validation attributes, i.e., `required`, `minlength`, etc., to the `input` element.

```html
<form>
    <igx-input-group>
        <label igxLabel for="username">Username</label>
        <input igxInput name="username" type="text" required />
    </igx-input-group>

    <igx-input-group>
        <label igxLabel for="email">Email</label>
        <input igxInput name="email" type="email" required email />
    </igx-input-group>

    <igx-input-group>
        <label igxLabel for="password">Password</label>
        <input igxInput name="password" type="password" required minlength="8" />
    </igx-input-group>

    <button igxButton="contained" igxRipple type="submit">Submit</button>
</form>
```

The `required` attribute adds an asterisk next to the label, indicating that this field must be filled in. Furthermore, when the `input` has additional validation applied to it, such as `email` and `minlength`, this could allow the developer to notify the end user for additional requirements via the [`igx-hint`](mcp:get_api_reference?platform=angular&component=IgxHintDirective) directive.

The following example uses two-way data binding and demonstrates how to inspect the control's state by exporting the `ngModel` to a local variable.

```html
<form #login="ngForm">
    ...
    <igx-input-group>
        <label igxLabel for="email">Email</label>
        <input igxInput name="email" type="email" [(ngModel)]="user.email" #email="ngModel" required email />
        <igx-hint *ngIf="email.errors?.email">Please enter a valid email</igx-hint>
    </igx-input-group>

    <igx-input-group>
        <label igxLabel for="password">Password</label>
        <input igxInput name="password" type="password"
            [(ngModel)]="user.password" #password="ngModel" required minlength="8" />
        <igx-hint *ngIf="password.errors?.minlength">Password should be at least 8 characters</igx-hint>
    </igx-input-group>

    <button igxButton="contained" igxRipple type="submit">Submit</button>
</form>
```

The user should not be able to submit the form if any of the form controls in it are invalid. This could be achieved by enabling/disabling the submit button based on the form's state.

The following example demonstrates how to inspect the form's state by exporting the `ngForm` to a local variable.

```html
<form #registrationForm="ngForm">
    <igx-input-group>
        <label igxLabel for="email">Email</label>
        <input igxInput name="email" type="email" [(ngModel)]="user.email" #email="ngModel" required email />
        <igx-hint *ngIf="email.errors?.email">Please enter a valid email</igx-hint>
    </igx-input-group>
    ...

    <button igxButton="contained" igxRipple type="submit" [disabled]="!registrationForm.valid">Submit</button>
</form>
```

The result from the above configurations could be seen in the below sample. Start typing into the Email and Password fields and you will notice that the [`igx-hint`](mcp:get_api_reference?platform=angular&component=IgxHintDirective) is shown if the entered values are invalid. The sample also demonstrates how to toggle the password's visibility by using the [`igx-icon`](mcp:get_api_reference?platform=angular&component=IgxIconComponent) and the [`igx-suffix`](#prefix--suffix) directive.

```typescript
import { Component, ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { IgxHintDirective, IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';


interface User
{
    username: string;
    email: string;
    password: string;
}

@Component({
    selector: 'app-template-driven-form-validation',
    templateUrl: './template-driven-form-validation.component.html',
    styleUrls: ['./template-driven-form-validation.component.scss'],
    imports: [FormsModule, IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxHintDirective, IgxIconComponent, IgxSuffixDirective, IgxButtonDirective, IgxRippleDirective]
})
export class TemplateDrivenFormValidationComponent {
    @ViewChild(NgForm, { static: true })
    public registrationForm: NgForm;

    public showPassword: boolean = false;

    public user: User = {
        username: '',
        email: '',
        password: ''
    };

    public get togglePasswordVisibility() {
        return this.showPassword ? 'visibility_off' : 'visibility';
    }

    public onSubmit() {
        console.log(this.user);
        this.registrationForm.reset();
    }
}
```
```html
<article>
  <form #registrationForm="ngForm" (ngSubmit)="onSubmit()">
    <h4>Registration Form</h4>
    <div class="container">
      <igx-input-group>
        <label igxLabel for="username">Username</label>
        <input igxInput name="username" type="text" [(ngModel)]="user.username" required />
      </igx-input-group>

      <igx-input-group>
        <label igxLabel for="email">Email</label>
        <input igxInput name="email" type="email" [(ngModel)]="user.email" #email="ngModel" required email />
        @if (email.errors?.email) {
          <igx-hint>Please enter a valid email</igx-hint>
        }
      </igx-input-group>

      <igx-input-group>
        <label igxLabel for="password">Password</label>
        <input igxInput name="password" [type]="showPassword ? 'text' : 'password'"
          [(ngModel)]="user.password" #password="ngModel" required minlength="8" />
          @if (password.errors?.minlength) {
            <igx-hint>Password should be at least 8 characters</igx-hint>
          }
          @if (password.value) {
            <igx-icon igxSuffix (click)="showPassword = !showPassword">
              {{ togglePasswordVisibility }}
            </igx-icon>
          }
        </igx-input-group>

        <button igxButton="contained" igxRipple type="submit" [disabled]="!registrationForm.valid">Submit</button>
      </div>
    </form>
  </article>
```
```scss
article {
    max-width: 550px;
    padding: 16px;
}

.container > * {
    margin-top: 32px;
}

form {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
    padding: 24px;
    margin-bottom: 48px;
}

h4 {
    margin-top: 0;
}
```

### Reactive Forms

Reactive form validation is achieved by adding validator functions directly to the form control model in the component class. After creating the control in the component class, it should be associated with a form control element in the template.

```ts
public registrationForm: FormGroup<User>;

constructor(fb: FormBuilder) {
    this.registrationForm = fb.group({
        username: ['', { nonNullable: true, validators: [Validators.required] }],
        email: ['', { nonNullable: true, validators: [Validators.required, Validators.email] }],
        password: ['', { nonNullable: true, validators: [Validators.required, Validators.minLength(8)] }]
    });
}
```

```html
<form [formGroup]="registrationForm">
    <igx-input-group>
        <label igxLabel for="username">Username</label>
        <input igxInput name="username" type="text" formControlName="username" />
    </igx-input-group>

    <igx-input-group>
        <label igxLabel for="email">Email</label>
        <input igxInput name="email" type="email" formControlName="email" />
    </igx-input-group>

    <igx-input-group>
        <label igxLabel for="password">Password</label>
        <input igxInput name="password" type="password" formControlName="password" />
    </igx-input-group>

    <button igxButton="contained" igxRipple type="submit">Submit</button>
</form>
```

Similar to the template-driven form sample, when having additional validation like `email` and `minlength`, an [`igx-hint`](mcp:get_api_reference?platform=angular&component=IgxHintDirective) directive could be used to notify the end user if the validation has failed.

The following example demonstrates how to access the control through a `get` method and inspect its state. It also demonstrates how to enable/disable the submit button by inspecting the state of the `FormGroup`.

```ts
public get email() {
    return this.registrationForm.get('email');
}

public get password() {
    return this.registrationForm.get('password');
}
```

```html
<form [formGroup]="registrationForm">
    ...
    <igx-input-group>
        <label igxLabel for="email">Email</label>
        <input igxInput name="email" type="email" formControlName="email" />
        <igx-hint *ngIf="email.errors?.email">Please enter a valid email</igx-hint>
    </igx-input-group>

    <igx-input-group>
        <label igxLabel for="password">Password</label>
        <input igxInput name="password" type="password" formControlName="password" />
        <igx-hint *ngIf="password.errors?.minlength">Password should be at least 8 characters</igx-hint>
    </igx-input-group>

    <button igxButton="contained" igxRipple type="submit" [disabled]="!registrationForm.valid">Submit</button>
</form>
```

The result from the above configurations could be seen in the below sample. Similar to the template-driven form sample, it also demonstrates how to toggle the password's visibility by using the [`igx-icon`](mcp:get_api_reference?platform=angular&component=IgxIconComponent) and the [`igx-suffix`](#prefix--suffix) directive.

```typescript
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IgxHintDirective, IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';


interface User
{
    username: FormControl<string>;
    email: FormControl<string>;
    password: FormControl<string>;
}

@Component({
    selector: 'app-reactive-form-validation',
    templateUrl: './reactive-form-validation.component.html',
    styleUrls: ['./reactive-form-validation.component.scss'],
    imports: [FormsModule, ReactiveFormsModule, IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxHintDirective, IgxIconComponent, IgxSuffixDirective, IgxButtonDirective, IgxRippleDirective]
})
export class ReactiveFormValidationComponent {
    public registrationForm: FormGroup<User>;
    public showPassword: boolean = false;

    constructor() {
        const fb = inject(FormBuilder);

        this.registrationForm = fb.group({
            username: ['', { nonNullable: true, validators: [Validators.required] }],
            email: ['', { nonNullable: true, validators: [Validators.required, Validators.email] }],
            password: ['', { nonNullable: true, validators: [Validators.required, Validators.minLength(8)] }]
        });
    }

    public get email() {
        return this.registrationForm.get('email');
    }

    public get password() {
        return this.registrationForm.get('password');
    }

    public get togglePasswordVisibility() {
        return this.showPassword ? 'visibility_off' : 'visibility';
    }

    public onSubmit() {
        console.log(this.registrationForm.value);
        this.registrationForm.reset();
    }
}
```
```html
<article>
  <form [formGroup]="registrationForm" (ngSubmit)="onSubmit()">
    <h4>Registration Form</h4>
    <div class="container">
      <igx-input-group>
        <label igxLabel for="username">Username</label>
        <input igxInput name="username" type="text" formControlName="username" />
      </igx-input-group>

      <igx-input-group>
        <label igxLabel for="email">Email</label>
        <input igxInput name="email" type="email" formControlName="email" />
        @if (email.errors?.email) {
          <igx-hint>Please enter a valid email</igx-hint>
        }
      </igx-input-group>

      <igx-input-group>
        <label igxLabel for="password">Password</label>
        <input igxInput name="password" [type]="showPassword ? 'text' : 'password'" formControlName="password" />
        @if (password.errors?.minlength) {
          <igx-hint>Password should be at least 8 characters</igx-hint>
        }
        @if (password.value) {
          <igx-icon igxSuffix (click)="showPassword = !showPassword">
            {{ togglePasswordVisibility }}
          </igx-icon>
        }
      </igx-input-group>

      <button igxButton="contained" igxRipple type="submit" [disabled]="!registrationForm.valid">Submit</button>
    </div>
  </form>
</article>
```
```scss
article {
    max-width: 550px;
    padding: 16px;
}

.container > * {
    margin-top: 32px;
}

form {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
    padding: 24px;
    margin-bottom: 48px;
}

h4 {
    margin-top: 0;
}
```

### Custom Validators

Some input fields may require custom validation and this could be achieved via custom validators. When the value is invalid, the validator will generate a set of errors that could be used to display a specific error message.

Below is an example of a simple custom reactive form validator that validates if the entered email address contains a predefined value and generates different errors based on where the value occurs.

```ts
public registrationForm: FormGroup<User>;

constructor(fb: FormBuilder) {
    this.registrationForm = fb.group({
        email: ['', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.email,
                this.emailValidator('infragistics')
            ]
        }],
        ...
    });
}

private emailValidator(val: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value?.toLowerCase();
        const localPartRegex = new RegExp(`(?<=(${val})).*[@]`);
        const domainRegex = new RegExp(`(?<=[@])(?=.*(${val}))`);
        const returnObj: ValidatorErrors = {};

        if (value && localPartRegex.test(value)) {
            returnObj.localPart = true;
        }
        if (value && domainRegex.test(value)) {
            returnObj.domain = true;
        }

        return returnObj;
    }
}
```

### Cross-Field Validation

In some scenarios, the validation of one control may depend on the value of another one. To evaluate both controls in a single custom validator the validation should be performed in a common ancestor control, i.e., the `FormGroup`. The validator retrieves the child controls by calling the `FormGroup`'s `get` method, compares the values and if the validation fails, a set of errors is generated for the `FormGroup`.

This will set only the form's state to invalid. To set the control's state, we could use the [`setErrors`](https://angular.io/api/forms/AbstractControl#seterrors) method and add the generated errors manually. Then, when the validation is successful, the errors could be removed by using the [`setValue`](https://angular.io/api/forms/AbstractControl#setvalue) method that will rerun the control's validation for the provided value.

The below example demonstrates a cross-field validation where the Password should not contain the Email address and the Repeat password should match the Password.

```ts
private passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const email = control.get('email');
        const password = control.get('password');
        const repeatPassword = control.get('repeatPassword');
        const returnObj: ValidatorErrors = {};

        if (email.value
            && password.value
            && password.value.toLowerCase().includes(email.value)) {
            password.setErrors({ ...password.errors, containsEmail: true });
            returnObj.containsEmail = true;
        }

        if (password
            && repeatPassword
            && password.value !== repeatPassword.value) {
            repeatPassword.setErrors({ ...repeatPassword.errors, mismatch: true });
            returnObj.mismatch = true;
        }

        if (!returnObj.containsEmail && password.errors?.containsEmail) {
            password.setValue(password.value);
        }

        if (!returnObj.mismatch && repeatPassword.errors?.mismatch) {
            repeatPassword.setValue(repeatPassword.value);
        }

        return returnObj;
    }
}
```

To add the custom validator to the `FormGroup` it should be passed as a second argument when creating the form.

```ts
public registrationForm: FormGroup<User>;

constructor(fb: FormBuilder) {
    this.registrationForm = fb.group({
        email: ['', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.email,
                this.emailValidator('infragistics')
            ]
        }],
        ...
    },
    {
        validators: [this.passwordValidator()]
    });
}
```

The below sample demonstrates how the built-in validators could be used in combination with the custom `emailValidator` and cross-field `passwordValidator` from the previous examples.

```typescript
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IgxHintDirective, IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';


interface User
{
    email: FormControl<string>;
    password: FormControl<string>;
    repeatPassword: FormControl<string>;
}

interface ValidatorErrors
{
    localPart?: boolean;
    domain?: boolean;
    containsEmail?: boolean;
    mismatch?: boolean;
}

@Component({
    selector: 'app-reactive-form-custom-validation',
    templateUrl: './reactive-form-custom-validation.component.html',
    styleUrls: ['./reactive-form-custom-validation.component.scss'],
    imports: [FormsModule, ReactiveFormsModule, IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxHintDirective, IgxIconComponent, IgxSuffixDirective, IgxButtonDirective, IgxRippleDirective]
})
export class ReactiveFormCustomValidationComponent {
    private pattern = `^(?=.*[A-Za-z])(?=.*\\d)(?=.*[~!@?#+$"'%^&:;*\\-_=.,<>])[A-Za-z\\d~!@?#+$"'%^&:;*\\-_=.,<>]+$`;
    public registrationForm: FormGroup<User>;
    public showPassword: boolean = false;
    public showRepeat: boolean = false;

    constructor() {
        const fb = inject(FormBuilder);

        this.registrationForm = fb.group({
            email: ['', {
                nonNullable: true,
                validators: [
                    Validators.required,
                    Validators.email,
                    this.emailValidator('infragistics')
                ]
            }],
            password: ['', {
                nonNullable: true,
                validators: [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.pattern(this.pattern)
                ]
            }],
            repeatPassword: ['', {
                nonNullable: true,
                validators: [Validators.required]
            }]
        },
        {
            validators: [this.passwordValidator()]
        });
    }

    public get email() {
        return this.registrationForm.get('email');
    }

    public get password() {
        return this.registrationForm.get('password');
    }

    public get repeatPassword() {
        return this.registrationForm.get('repeatPassword');
    }

    public get togglePasswordVisibility() {
        return this.showPassword ? 'visibility_off' : 'visibility';
    }

    public get toggleRepeatVisibility() {
        return this.showRepeat ? 'visibility_off' : 'visibility';
    }

    public onSubmit() {
        console.log(this.registrationForm.value);
        this.registrationForm.reset();
    }

    private emailValidator(val: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const value = control.value?.toLowerCase();
            const localPartRegex = new RegExp(`(?<=(${val})).*[@]`);
            const domainRegex = new RegExp(`(?<=[@])(?=.*(${val}))`);
            const returnObj: ValidatorErrors = {};

            if (value && localPartRegex.test(value)) {
                returnObj.localPart = true;
            }

            if (value && domainRegex.test(value)) {
                returnObj.domain = true;
            }

            return returnObj;
        }
    }

    private passwordValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const email = control.get('email');
            const password = control.get('password');
            const repeatPassword = control.get('repeatPassword');
            const returnObj: ValidatorErrors = {};

            if (email.value
                && password.value
                && password.value.toLowerCase().includes(email.value)) {
                password.setErrors({ ...password.errors, containsEmail: true });
                returnObj.containsEmail = true;
            }

            if (password
                && repeatPassword
                && password.value !== repeatPassword.value) {
                repeatPassword.setErrors({ ...repeatPassword.errors, mismatch: true });
                returnObj.mismatch = true;
            }

            if (!returnObj.containsEmail && password.errors?.containsEmail) {
                password.setValue(password.value);
            }

            if (!returnObj.mismatch && repeatPassword.errors?.mismatch) {
                repeatPassword.setValue(repeatPassword.value);
            }

            return returnObj;
        }
    }
}
```
```html
<article>
  <form [formGroup]="registrationForm" (ngSubmit)="onSubmit()">
    <igx-input-group>
      <label igxLabel for="email">Email</label>
      <input igxInput name="email" type="email" formControlName="email" />
      @if (email.errors?.email) {
        <igx-hint>Please enter a valid email address</igx-hint>
      }
      @if (!email.errors?.email && email.errors?.localPart) {
        <igx-hint>This email address is not allowed</igx-hint>
      }
      @if (!email.errors?.email && email.errors?.domain) {
        <igx-hint>This domain is not allowed</igx-hint>
      }
    </igx-input-group>

    <igx-input-group>
      <label igxLabel for="password">Password</label>
      <input igxInput name="password" [type]="showPassword ? 'text' : 'password'" formControlName="password" />
      @if (password.errors?.containsEmail) {
        <igx-hint>Should not contain the email address</igx-hint>
      }
      @if (password.errors?.minlength) {
        <igx-hint>Should be at least 8 characters</igx-hint>
      }
      @if (password.errors?.pattern) {
        <igx-hint>Should contain a digit and a special character</igx-hint>
      }
      @if (password.value) {
        <igx-icon igxSuffix (click)="showPassword = !showPassword">
          {{ togglePasswordVisibility }}
        </igx-icon>
      }
    </igx-input-group>

    <igx-input-group>
      <label igxLabel for="repeatPassword">Repeat password</label>
      <input igxInput name="repeatPassword" [type]="showRepeat ? 'text' : 'password'" formControlName="repeatPassword" />
      @if (repeatPassword.errors?.mismatch
        && !repeatPassword.pristine
        && repeatPassword.value) {
        <igx-hint>
          Passwords do not match
        </igx-hint>
      }
      @if (repeatPassword.value) {
        <igx-icon igxSuffix (click)="showRepeat = !showRepeat">
          {{ toggleRepeatVisibility }}
        </igx-icon>
      }
    </igx-input-group>

    <button igxButton="contained" igxRipple type="submit" [disabled]="!registrationForm.valid">Submit</button>
  </form>
</article>
```
```scss
article {
    max-width: 550px;
    padding: 16px;
}

form {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
    padding: 24px;
    margin-bottom: 48px;
}

form > * {
    margin-top: 32px;
}
```

## Styling

### Input Group Theme Property Map

When you modify a primary property, all related dependent properties are updated automatically:

<div class="theme-switcher-wrapper">

  
  <input type="radio" name="theme" id="material" checked/>
  <label for="material" class="switch-label">Material</label>
  <input type="radio" name="theme" id="fluent"/>
  <label for="fluent" class="switch-label">Fluent</label>
  <input type="radio" name="theme" id="bootstrap"/>
  <label for="bootstrap" class="switch-label">Bootstrap</label>
  <input type="radio" name="theme" id="indigo"/>
  <label for="indigo" class="switch-label">Indigo</label>

  <div class="tables">

    
    <div class="theme-table material">

        | Primary Property | Dependent Property | Description |
| --- | --- | --- |
| **$box-background** | $box-background-hover | Hover background for the input box |
|  | $box-background-focus | Focus background for the input box |
|  | $box-disabled-background | Disabled state background |
|  | $placeholder-color | Placeholder text color |
|  | $hover-placeholder-color | Hover color for placeholder text |
|  | $idle-text-color | Default text color |
|  | $filled-text-color | Text color when input is filled |
|  | $filled-text-hover-color | The input text color in the filled state on hover |
|  | $focused-text-color | Text color when input is focused |
|  | $idle-secondary-color | Secondary text color when idle |
|  | $input-prefix-color | Text color for prefix inside the input box |
|  | $input-prefix-color--filled | Text color for filled prefix |
|  | $input-prefix-color--focused | Text color for focused prefix |
|  | $input-suffix-color | Text color for suffix inside the input box |
|  | $input-suffix-color--filled | Text color for filled suffix |
|  | $input-suffix-color--focused | Text color for focused suffix |
|  | $disabled-placeholder-color | Placeholder color when input is disabled |
|  | $disabled-text-color | Text color when input is disabled |
| **$idle-bottom-line-color** | $hover-bottom-line-color | Hover color for the bottom line under the input |
|  | $focused-bottom-line-color | Focused color for the bottom line |
|  | $focused-secondary-color | The label color in the focused state |
|  | $border-color | The border color for input groups of type border |
|  | $focused-border-color | The focused input border color for input groups of type border |
| **$border-color**| $hover-border-color | Hover color for the input border |
|  | $focused-border-color | Border color when input is focused |
|  | $focused-secondary-color | The label color in the focused state |
| **$input-prefix-background** | $input-prefix-color | Text color for prefix inside the input box |
|  | $input-prefix-background--filled | The background color of an input prefix in the filled state |
|  | $input-prefix-background--focused | The background color of an input prefix in the focused state |
| **$input-suffix-background**| $input-suffix-color | Text color for suffix inside the input box |
|  | $input-suffix-background--filled | The background color of an input suffix in the filled state |
|  | $input-suffix-background--focused | The background color of an input suffix in the focused state |
| **$search-background** | $placeholder-color | Placeholder text color inside the search input |
|  | $hover-placeholder-color | Hover color for placeholder text |
|  | $idle-text-color | Text color for the search input |
|  | $idle-secondary-color | Secondary text color when idle |
|  | $filled-text-color | Text color when search input is filled |
|  | $filled-text-hover-color | Hover text color when search input is filled |
|  | $focused-text-color | Text color when search input is focused |
|  | $input-prefix-color | Prefix color inside search |
|  | $input-suffix-color | Suffix color inside search |
|  | $input-prefix-color--filled | Prefix color when input is filled |
|  | $input-suffix-color--filled | Suffix color when input is filled |
|  | $input-prefix-color--focused | Prefix color when input is focused |
|  | $input-suffix-color--focused | Suffix color when input is focused |
|  | $search-disabled-background | Background when search input is disabled |
|  | $disabled-placeholder-color | Placeholder color when disabled |
|  | $disabled-text-color | Text color when disabled |

</div>
    
    <div class="theme-table fluent">

      | Primary Property | Dependent Property | Description |
| --- | --- | --- |
| **$border-color** | $hover-border-color | Hover color for the input border |
|  | $focused-border-color | Border color when input is focused |
|  | $focused-secondary-color | The label color in the focused state |
|**$input-prefix-background** | $input-suffix-background | The background color of an input suffix in the idle state |
|  | $input-prefix-color | Text color for prefix inside the input box |
|  | $input-prefix-color--filled | Text color for filled prefix |
| **$input-suffix-background** | $input-prefix-background | The background color of an input prefix in the idle state |
|  | $input-suffix-color | Text color for suffix inside the input box |
|  | $input-suffix-color--filled | Text color for filled suffix |
|**$search-background** | $placeholder-color | Placeholder text color inside the search input |
|  | $hover-placeholder-color | Hover color for placeholder text |
|  | $idle-secondary-color | Secondary text color when idle |
|  | $idle-text-color | Text color for the search input |
|  | $filled-text-color | Text color when search input is filled |
|  | $filled-text-hover-color | Hover text color when search input is filled |
|  | $focused-text-color | Text color when search input is focused |
|  | $input-prefix-color | Prefix color inside search |
|  | $input-suffix-color | Suffix color inside search |
|  | $input-prefix-color--filled | Prefix color when input is filled |
|  | $input-suffix-color--filled | Suffix color when input is filled |
|  | $input-prefix-color--focused | Prefix color when input is focused |
|  | $input-suffix-color--focused | Suffix color when input is focused |
|  | $search-disabled-background | Background when search input is disabled |
|  | $disabled-placeholder-color | Placeholder color when disabled |
|  | $disabled-text-color | Text color when disabled |

</div>
    
    <div class="theme-table bootstrap">

      | Primary Property | Dependent Property | Description |
| --- | --- | --- |
| **$border-color** | $focused-border-color | Border color when input is focused |
|  | $focused-secondary-color | The label color in the focused state |
| **$input-prefix-background** | $input-suffix-background | The background color of an input suffix in the idle state |
|  | $input-prefix-color | Text color for prefix inside the input box |
|  | $input-prefix-color--filled | Text color for filled prefix |
| **$input-suffix-background**| $input-prefix-background | The background color of an input prefix in the idle state |
|  | $input-suffix-color | Text color for suffix inside the input box |
|  | $input-suffix-color--filled | Text color for filled suffix |
| **$search-background** | $placeholder-color | Placeholder text color inside the search input |
|  | $hover-placeholder-color | Hover color for placeholder text |
|  | $idle-secondary-color | Secondary text color when idle |
|  | $idle-text-color | Text color for the search input |
|  | $filled-text-color | Text color when search input is filled |
|  | $filled-text-hover-color | Hover text color when search input is filled |
|  | $focused-text-color | Text color when search input is focused |
|  | $input-prefix-color | Prefix color inside search |
|  | $input-suffix-color | Suffix color inside search |
|  | $input-prefix-color--filled | Prefix color when input is filled |
|  | $input-suffix-color--filled | Suffix color when input is filled |
|  | $input-prefix-color--focused | Prefix color when input is focused |
|  | $input-suffix-color--focused | Suffix color when input is focused |
|  | $search-disabled-background | Background when search input is disabled |
|  | $disabled-placeholder-color | Placeholder color when disabled |
|  | $disabled-text-color | Text color when disabled |

</div>
    
    <div class="theme-table indigo">

      | Primary Property | Dependent Property | Description |
| --- | --- | --- |
| **$idle-bottom-line-color** | $hover-bottom-line-color | Hover color for the bottom line under the input |
|  | $focused-bottom-line-color | Focused color for the bottom line |
| **$border-color** | $hover-border-color | Hover color for the input border |
|  | $focused-border-color | Border color when input is focused |
| **$input-prefix-background** | $input-prefix-color | Text color for prefix inside the input box |
|  | $input-prefix-background--filled | The background color of an input prefix in the filled state |
|  | $input-prefix-background--focused | The background color of an input prefix in the focused state |
|**$input-suffix-background** | $input-suffix-color | Text color for suffix inside the input box |
|  | $input-suffix-background--filled | The background color of an input suffix in the filled state |
|  | $input-suffix-background--focused | The background color of an input suffix in the focused state |
| **$search-background** | $placeholder-color | Placeholder text color inside the search input |
|  | $hover-placeholder-color | Hover color for placeholder text |
|  | $box-background-hover | Hover background for search input |
|  | $idle-text-color | Text color for the search input |
|  | $filled-text-color | Text color when search input is filled |
|  | $filled-text-hover-color | Hover text color when search input is filled |
|  | $focused-text-color | Text color when search input is focused |
|  | $input-prefix-color | Prefix color inside search |
|  | $input-suffix-color | Suffix color inside search |
|  | $search-disabled-background | Background when search input is disabled |
|  | $disabled-placeholder-color | Placeholder color when disabled |
|  | $disabled-text-color | Text color when disabled |

</div>
  
</div>
</div>

The first thing we need to do, in order to get started with the input group styling, is to include the `index` file in our style file:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

To customize the appearance of input groups, you can create a new theme by extending the `input-group-theme`. This approach allows you to override only the parameters you want to change, while the rest are automatically handled by the base theme.

Even by specifying just a few core parameters—like colors for the border or background—you'll get a fully styled input group with consistent state-based styles (hover, focus, etc.) applied for you.

Here’s a simple example:

```scss
$custom-input-group: input-group-theme(
    $box-background: #57a5cd,
    $border-color: #57a5cd,
);
```

The last step is to include the newly created theme:

```scss
:host {
  @include tokens($custom-input-group);
}
```

In the sample below, you can see how using the input group with customized CSS variables allows you to create a design that visually resembles the one used in the [`Carbon`](https://carbondesignsystem.com/components/text-input/usage/#live-demo) design system.

```typescript
import { Component } from '@angular/core';
import { IgxHintDirective, IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';

@Component({
    selector: 'app-input-group-style',
    templateUrl: 'input-group-styling.component.html',
    styleUrls: ['input-group-styling.component.scss'],
    imports: [IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxHintDirective]
})
export class InputGroupStyleComponent { }
```
```html
<article class="sample-column">
    <igx-input-group>
        <label igxLabel for="textField">Label text</label>
        <input placeholder="Placeholder text" type="text" igxInput name="textField" />
        <igx-hint position="start">Helper text</igx-hint>
    </igx-input-group>
</article>
```
```scss
@use "igniteui-angular/theming" as *;

:host {
    display: grid;
    max-width: rem(300px);
    margin-top: rem(24px);

    ::ng-deep {
        $custom-input-group: input-group-theme(
            $schema: $light-indigo-schema,
            $size: rem(40px),
        );

        @include typography(
            $font-family: '"IBM Plex Sans", sans-serif',
            $type-scale: $indigo-type-scale
        );

        @include theme(
            $palette: $light-indigo-palette,
            $schema: $light-indigo-schema
        );

        .igx-input-group {
            @include tokens($custom-input-group);

            --ig-caption-font-weight: 400;
            --ig-subtitle-1-font-weight: 400;

            &__bundle-main {
                background: var(--box-background-hover);
            }
        }
    }
}
```

**Note:** 
The sample uses the [Indigo Light](/themes/sass/schemas#predefined-schemas) schema.

**Note:** 
If your page includes multiple types of input groups — such as `box`, `border`, `line`, or `search` — it's best to scope your theme variables to the specific input group type.

<br/>For example:<br/>
Use `.igx-input-group--box` when styling box-style inputs.
Use `.igx-input-group--search` when targeting search inputs.
This helps prevent style conflicts between different input types.
For instance, setting a dark `$box-background` globally could cause the borders of border or line inputs to become invisible (usually appearing white).

<hr/>

### Styling with Tailwind

You can style the input group using our custom Tailwind utility classes. Make sure to [set up Tailwind](/themes/misc/tailwind-classes) first.

Along with the tailwind import in your global stylesheet, you can apply the desired theme utilities as follows:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

The utility file includes both `light` and `dark` theme variants.

- Use `light-*` classes for the light theme.
- Use `dark-*` classes for the dark theme.
- Append the component name after the prefix, e.g., `light-input-group`, `dark-input-group`.

Once applied, these classes enable dynamic theme calculations. From there, you can override the generated CSS variables using `arbitrary properties`. After the colon, provide any valid CSS color format (HEX, CSS variable, RGB, etc.).

You can find the full list of properties in the `input-group-theme`. The syntax is as follows:

```html
<article class="sample-column">
    <igx-input-group class="!light-input-group ![--box-background:#A3C7B2] ![--focused-secondary-color:#3A5444]" type="box">
        <igx-prefix>+359</igx-prefix>
        <label igxLabel for="phone">Phone</label>
        <input type="tel" igxInput name="phone" />
        <igx-suffix>
            <igx-icon>phone</igx-icon>
        </igx-suffix>
        <igx-hint position="start">Ex.: +359 888 123 456</igx-hint>
    </igx-input-group>

    <igx-input-group class="!light-input-group ![--border-color:#7B9E89]" type="border">
        ...
    </igx-input-group>

    <igx-input-group class="!light-input-group ![--search-background:#A3C7B2] ![--focused-secondary-color:#3A5444]" type="search">
        ...
    </igx-input-group>
</article>
```

**Note:** 
The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your inputs should look like this:

```typescript
import { Component } from '@angular/core';
import { IgxHintDirective, IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-input-group-tailwind-style',
    templateUrl: 'input-group-tailwind-styling.component.html',
    styleUrls: ['input-group-tailwind-styling.component.scss'],
    imports: [IgxInputGroupComponent, IgxPrefixDirective, IgxLabelDirective, IgxInputDirective, IgxSuffixDirective, IgxIconComponent, IgxHintDirective]
})
export class InputGroupTailwindStyleComponent { }
```
```html
<article class="sample-column">
    <igx-input-group class="!light-input-group ![--box-background:#A3C7B2] ![--focused-secondary-color:#3A5444]" type="box">
        <igx-prefix>+359</igx-prefix>
        <label igxLabel for="phone">Phone</label>
        <input type="tel" igxInput name="phone" />
        <igx-suffix>
            <igx-icon>phone</igx-icon>
        </igx-suffix>
        <igx-hint position="start">Ex.: +359 888 123 456</igx-hint>
    </igx-input-group>

    <igx-input-group class="!light-input-group ![--border-color:#7B9E89]" type="border">
        <igx-prefix>+359</igx-prefix>
        <label igxLabel for="phone">Phone</label>
        <input type="tel" igxInput name="phone" />
        <igx-suffix>
            <igx-icon>phone</igx-icon>
        </igx-suffix>
        <igx-hint position="start">Ex.: +359 888 123 456</igx-hint>
    </igx-input-group>

    <igx-input-group class="!light-input-group ![--search-background:#A3C7B2] ![--focused-secondary-color:#3A5444]" type="search">
        <igx-prefix>+359</igx-prefix>
        <label igxLabel for="phone">Search</label>
        <input type="tel" igxInput name="phone" />
        <igx-suffix>
            <igx-icon>phone</igx-icon>
        </igx-suffix>
        <igx-hint position="start">Ex.: +359 888 123 456</igx-hint>
    </igx-input-group>
</article>
```
```scss
@use "layout.scss";

.sample-column {
    gap: 1rem;
}
```

## API References
<hr/>
- [`IgxInputDirective`](mcp:get_api_reference?platform=angular&component=IgxInputDirective)
- [`IgxHintDirective`](mcp:get_api_reference?platform=angular&component=IgxHintDirective)
- IgxInputGroup Types
- [`IgxInputGroup`](mcp:get_api_reference?platform=angular&component=IgxInputGroupComponent)
- `IgxInputGroupComponent Styles`
## Theming Dependencies

- `IgxButton Theme`
- `IgxIcon Theme`

## Additional Resources

<hr/>

Related topics:

- [Label & Input](/label-input)
- [Reactive Forms Integration](/angular-reactive-form-validation)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
