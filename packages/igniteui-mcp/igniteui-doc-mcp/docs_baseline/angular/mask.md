---
title: Angular Mask Directive Component | Ignite UI for Angular | MIT license
_description: With the Mask Directive in Ignite UI for Angular, the developer can control user input and format the visible value based on configurable mask rules, providing different input options and ease in use and configuration.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components, Native Angular Components Suite, Angular UI Components, Native Angular Components Library, Angular mask directive, Mask, Directive, Mask Editor, Angular Mask Editor
_license: MIT
_tocName: Mask
---

# Angular Mask Directive Overview

By applying the [`igxMask`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxmaskdirective.html) directive on a **text input field**, the developer can control user input and format the visible value, based on configurable mask rules. It provides different input options and ease in use and configuration.

## Angular Mask Example

```typescript
import { Component } from '@angular/core';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective, IgxPrefixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxMaskDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-mask-sample-2',
    styleUrls: ['./mask-sample-2.component.scss'],
    templateUrl: './mask-sample-2.component.html',
    imports: [IgxInputGroupComponent, IgxPrefixDirective, IgxIconComponent, IgxLabelDirective, IgxInputDirective, IgxMaskDirective]
})
export class MaskSample2Component {

  constructor() { }

}
```
```html
<igx-input-group>
    <igx-prefix>
        <igx-icon>phone</igx-icon>
    </igx-prefix>
    <label igxLabel>Phone</label>
    <input igxInput type="text" [igxMask]="'(####) 00-00-00 Ext. 9999'"/>
</igx-input-group>
```

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Mask

To get started with the Ignite UI for Angular Mask directive, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxMaskModule` and `IgxInputGroupModule` in your **app.module.ts** file.

>[!NOTE]
>[`igxMask`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxmaskdirective.html) directive is used on an input of type **text**.

```typescript
// app.module.ts

...
import { IgxMaskModule } from 'igniteui-angular/input-group';
import { IgxInputGroupModule } from 'igniteui-angular/input-group';
// import { IgxMaskModule, IgxInputGroupModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxMaskModule, IgxInputGroupModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxMaskDirective` as a standalone dependency.

```typescript
// home.component.ts

import { IgxMaskDirective, IGX_INPUT_GROUP_DIRECTIVES } from 'igniteui-angular/input-group';
// import { IgxMaskDirective, IGX_INPUT_GROUP_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-input-group>
        <igx-prefix>
            <igx-icon>phone</igx-icon>
        </igx-prefix>
        <label igxLabel>Phone</label>
        <input igxInput type="text" [igxMask]="'(####) 00-00-00 Ext. 9999'"/>
    </igx-input-group>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxMaskDirective, IGX_INPUT_GROUP_DIRECTIVES]
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Mask module or directive imported, you can start using the `igxMask` directive.

## Using the Angular Mask

### Supported Built-in Mask Rules

<div class="divider--half"></div>

| Mask Character | Description |
| :--- | :--- |
| 0 | requires a digit (0-9) |
| 9 | requires a digit (0-9) or a space |
| # | requires a digit (0-9), plus (+), or minus (-) sign |
| L | requires a letter (a-Z) |
| ? | requires a letter (a-Z) or a space |
| A | requires an alphanumeric (0-9, a-Z) |
| a | requires an alphanumeric (0-9, a-Z) or a space |
| & | any keyboard character (excluding space) |
| C | any keyboard character |

### Apply Mask on Input

In the following example, we apply a phone number with an extension mask to an input.

```html
<!--sample.component.html-->

<igx-input-group>
    <igx-prefix>
        <igx-icon>phone</igx-icon>
    </igx-prefix>
    <label igxLabel>Phone</label>
    <input igxInput type="text" [igxMask]="'(####) 00-00-00 Ext. 9999'"/>
</igx-input-group>
```

If configured properly, you should see the demo sample in your browser.

>[!NOTE]
> The `IgxMaskDirective` supports IME input and updates the mask when composition ends.

### Bind to Formatted/Raw Value

Use the [`includeLiterals`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxmaskdirective.html#includeLiterals) input to configure which input value (formatted or raw) to bind in your form when a specific mask is applied. By default, [`includeLiterals`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxmaskdirective.html#includeLiterals) is set to _false_ and the raw value is used.

```html
<!--sample.component.html-->

<igx-switch [(ngModel)]="includeLiterals" (change)="clear()">
    Include Literals
</igx-switch>

<igx-input-group>
    <label igxLabel>
        Social Security Number
    </label>
    <input #ssn name="socialSecurityNumber" type="text"
        igxInput
        [igxMask]="'###-##-####'"
        [(ngModel)]="socialSecurityNumber"
        [includeLiterals]="includeLiterals" />
</igx-input-group>

<p *ngIf="socialSecurityNumber.length > 0">Value: {{ socialSecurityNumber }}</p>
```

```typescript
// sample.component.ts

public socialSecurityNumber: string = '123-45-6789';
public includeLiterals: boolean = true;

public clear() {
    if (this.includeLiterals === false){
        this.socialSecurityNumber = '123-45-6789';
    } else {
        this.socialSecurityNumber = '';
    }
}
```


```typescript
import { Component } from '@angular/core';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxMaskDirective } from 'igniteui-angular/directives';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-mask-sample-3',
    styleUrls: ['./mask-sample-3.component.scss'],
    templateUrl: './mask-sample-3.component.html',
    imports: [IgxSwitchComponent, FormsModule, IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxMaskDirective]
})
export class MaskSample3Component {
  public socialSecurityNumber = '123-45-6789';
  public includeLiterals = true;

  public clear() {
    if (this.includeLiterals === false){
        this.socialSecurityNumber = '123-45-6789';
    } else {
        this.socialSecurityNumber = '';
    }
  }
}
```
```html
<igx-switch [(ngModel)]="includeLiterals" (change)="clear()">
  Include Literals
</igx-switch>

<igx-input-group>
  <label igxLabel>
    Social Security Number
  </label>
  <input #ssn name="socialSecurityNumber" type="text"
    igxInput
    [igxMask]="'###-##-####'"
    [(ngModel)]="socialSecurityNumber"
    [includeLiterals]="includeLiterals" />
  </igx-input-group>
  @if (socialSecurityNumber.length > 0) {
    <p>Value: {{ socialSecurityNumber }}</p>
  }
```
```scss
:host {
    display: block;
    padding: 16px;
}
```


### Validate Masked Values

In addition to setting a mask to an input, you can validate the entered value as well. The following example implements masks, validation and notification for invalid data using the Mask directive and Snack Bar component.

```html
<!--sample.component.html-->

<igx-input-group>
    <label igxLabel for="birthday">Birthday</label>
    <input igxInput #dateInput [igxMask]="'00/00/0000'" [igxTextSelection]="true" name="birthday" type="text"
        (blur)="validateDate(dateInput, snackbar)" />
</igx-input-group>

<igx-snackbar #snackbar></igx-snackbar>
```

```typescript
// sample.component.ts

public validateDate(dateInput, snackbar) {
    if (!this.isDateValid(dateInput.value)) {
        this.notify(snackbar, 'Invalid Date', dateInput);
    }
}

private isDateValid(date) {
    return (new Date(date).toLocaleString() !== 'Invalid Date');
}

private notify(snackbar, message, input) {
    snackbar.message = message;
    snackbar.show();
}
```


```typescript
import { Component } from '@angular/core';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxMaskDirective, IgxTextSelectionDirective } from 'igniteui-angular/directives';
import { IgxSnackbarComponent } from 'igniteui-angular/snackbar';

@Component({
    selector: 'app-mask-sample-1',
    styleUrls: ['./mask-sample-1.component.scss'],
    templateUrl: './mask-sample-1.component.html',
    imports: [IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxMaskDirective, IgxTextSelectionDirective, IgxSnackbarComponent]
})

export class MaskSample1Component {
    public validateDate(dateInput, snackbar) {
        if (!this.isDateValid(dateInput.value)) {
            this.notify(snackbar, 'Invalid Date', dateInput);
        }
    }

    private isDateValid(date) {
        return (new Date(date).toLocaleString() !== 'Invalid Date');
    }

    private notify(snackbar, message, input) {
        snackbar.open(message);
    }
}
```
```html
<igx-input-group>
    <label igxLabel for="birthday">Birthday</label>
    <input igxInput #dateInput [igxMask]="'00/00/0000'" [igxTextSelection]="true" name="birthday" type="text"
        (blur)="validateDate(dateInput, snackbar)" />
</igx-input-group>

<igx-snackbar #snackbar></igx-snackbar>
```
```scss
igx-snackbar {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
}
```

<div class="divider--half"></div>

### Text Selection

You can force the component to select all of the input text on focus using [`igxTextSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtextselectiondirective.html). Find more info on `igxTextSelection` at [Label & Input](label-input.md#focus--text-selection).

Import the `IgxTextSelectionModule` in your **app.module.ts** file:

```typescript
...
import { ..., IgxTextSelectionModule } from 'igniteui-angular/input-group';
// import { ..., IgxTextSelectionModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxTextSelectionModule]
    ...
})
export class AppModule {}
```

Then add this to the template:

```html
<igx-input-group>
    <input igxInput [igxMask]="'###-##-####'" [igxTextSelection]="true"/>
</igx-input-group>
```

You can see how this works in the previous sample.

>[!NOTE]
>In order for the component to work properly, it is crucial to set `igxTextSelection` after the `igxMask` directive. The reason for this is both directives operate on the input `focus` event so text selection should happen after the mask is set.

### Apply additional formatting on focus and blur

In addition to the default mask behavior, the user can implement his own custom pipes and take advantage of the [`focusedValuePipe`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxmaskdirective.html#focusedValuePipe) and [`displayValuePipe`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxmaskdirective.html#displayValuePipe) input properties, to transform the value to a desired output when the input gets or loses focus. This will not affect the underlying model value. Let's demonstrate how this can be achieved!

Implement two pipes that will append/remove a '%' sign at the end of the displayed value:

```typescript
@Pipe({ name: 'displayFormat' })
export class DisplayFormatPipe implements PipeTransform {
    public transform(value: any): string {
        if (value !== null && value !== undefined) {
            value = value.toString().trim();
            if (!value.endsWith('%')) {
                value += ' %';
            }
        }
        return value;
    }
}

@Pipe({ name: 'inputFormat' })
export class InputFormatPipe implements PipeTransform {
    public transform(value: any): string {
        if (value !== null && value !== undefined) {
            value = value.toString().replace(/%/g, '').trim();
        }
        return value;
    }
}
```

Pass an instance of each pipe to the [`focusedValuePipe`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxmaskdirective.html#focusedValuePipe) and [`displayValuePipe`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxmaskdirective.html#displayValuePipe) input properties as follows:

```typescript
public value = 100;
public displayFormat = new DisplayFormatPipe();
public inputFormat = new InputFormatPipe();
```

```html
<igx-input-group>
    <label igxLabel>Increase</label>
    <input
        igxInput
        type="text"
        [(ngModel)]="value"
        [igxMask]="'000'"
        [igxTextSelection]="true"
        [focusedValuePipe]="inputFormat"
        [displayValuePipe]="displayFormat"
    />
</igx-input-group>
```

As a result, a '%' sign should be appended to the value on blur (i.e. when the user clicks outside the input) and will be removed once the input gets focus!


```typescript
import { Component, Pipe, PipeTransform } from '@angular/core';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxMaskDirective, IgxTextSelectionDirective } from 'igniteui-angular/directives';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-mask-sample-4',
    templateUrl: './mask-sample-4.component.html',
    imports: [IgxInputGroupComponent, IgxLabelDirective, FormsModule, IgxInputDirective, IgxMaskDirective, IgxTextSelectionDirective]
})
export class MaskSample4Component {
    public value = 100;
    public displayFormat = new DisplayFormatPipe();
    public inputFormat = new InputFormatPipe();
}

@Pipe({
    name: 'displayFormat'
})
export class DisplayFormatPipe implements PipeTransform {
    public transform(value: any): string {
        if (value !== null && value !== undefined) {
            value = value.toString().trim();
            if (!value.endsWith('%')) {
                value += ' %';
            }
        }
        return value;
    }
}

@Pipe({
    name: 'inputFormat'
})
export class InputFormatPipe implements PipeTransform {
    public transform(value: any): string {
        if (value !== null && value !== undefined) {
            value = value.toString().replace(/%/g, '').trim();
        }
        return value;
    }
}
```
```html
<igx-input-group>
    <label igxLabel>Increase</label>
    <input
        igxInput
        type="text"
        [(ngModel)]="value"
        [igxMask]="'000'"
        [igxTextSelection]="true"
        [focusedValuePipe]="inputFormat"
        [displayValuePipe]="displayFormat"
    />
</igx-input-group>
```


### Adding a placeholder

The user can also take advantage of the [`placeholder`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxmaskdirective.html#placeholder) input property, which serves the purpose of the native input placeholder attribute. If no value is provided for the [`placeholder`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxmaskdirective.html#placeholder), the value set for the mask is used.

```typescript
value = null;
```

```html
<igx-input-group>
    <label igxLabel>Date</label>
    <input igxInput
    type="text"
    [(ngModel)]="value"
    [igxMask]="'00/00/0000'"
    [placeholder]="'dd/mm/yyyy'"/>
</igx-input-group>
```


```typescript
import { Component } from '@angular/core';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxMaskDirective } from 'igniteui-angular/directives';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-mask-sample-5',
    templateUrl: './mask-sample-5.component.html',
    imports: [IgxInputGroupComponent, IgxLabelDirective, FormsModule, IgxInputDirective, IgxMaskDirective]
})

export class MaskSample5Component {
    public value;
}
```
```html
<igx-input-group>
    <label igxLabel>Date</label>
    <input igxInput
    type="text"
    [(ngModel)]="value"
    [igxMask]="'00/00/0000'"
    [placeholder]="'dd/mm/yyyy'"/>
</igx-input-group>
```


## API References

<div class="divider--half"></div>

- [IgxInputDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinputdirective.html)
- [IgxInputGroupComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinputgroupcomponent.html)
- [IgxMaskDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxmaskdirective.html)
- [IgxSnackbarComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsnackbarcomponent.html)

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
