---
title: Angular Date Time Editor Component | Ignite UI for Angular | MIT license
_description: The Ignite UI for Angular Date Time Editor Directive allows the user to handle date and time using a Date Object.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Date Time Editor Directive, Angular Date Time Directive control, Date Time Editor, Angular Date Time Directive
_license: MIT
_tocName: Date Time Editor
---

# Angular Date Time Editor Directive

<p class="highlight">The Ignite UI for Angular Date Time Editor Directive allows the user to set and edit the date and time in a chosen input element. The user can edit the date or time portion, using an editable masked input. Additionally, one can specify a desired display and input format, as well as min and max values to utilize validation.</p>

## Angular Date Time Editor Directive Example

```typescript
import { Component } from '@angular/core';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxDateTimeEditorDirective, IgxTextSelectionDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-datetime-basic',
    styleUrls: ['./datetime-basic.component.scss'],
    templateUrl: './datetime-basic.component.html',
    imports: [IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxDateTimeEditorDirective, IgxTextSelectionDirective]
})
export class DateTimeBasicComponent {
    public date = new Date();
}
```
```html
<igx-input-group>
    <label igxLabel>Choose Date</label>
    <input type="text" igxInput [igxDateTimeEditor]="'dd/MM/yyyy'" [value]="date" [igxTextSelection]="true"/>
</igx-input-group>
```
```scss
:host {
    display: block;
    padding: 1rem;
    max-width: 600px;
}
```

<div class="divider--half"></div>

## Getting Started with Angular Date Time Editor Directive

To get started with the Ignite UI for Angular Date Time Editor directive, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxDateTimeEditorModule` in your **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxDateTimeEditorModule } from 'igniteui-angular/directives';
// import { IgxDateTimeEditorModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxDateTimeEditorModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxDateTimeEditorDirective` as a standalone dependency.

```typescript
// home.component.ts

import { IgxDateTimeEditorDirective } from 'igniteui-angular/directives';
import { IGX_INPUT_GROUP_DIRECTIVES } from 'igniteui-angular/input-group';
// import { IgxDateTimeEditorDirective, IGX_INPUT_GROUP_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-input-group>
        <input type="text" igxInput igxDateTimeEditor [value]="date" />
    </igx-input-group>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxDateTimeEditorDirective, IGX_INPUT_GROUP_DIRECTIVES]
})
export class HomeComponent {
    public date = new Date();
}
```

Now that you have the Ignite UI for Angular Date Time Editor module or directive imported, you can start using the `igxDateTimeEditor` directive.

## Using the Angular Date Time Editor Directive

To use an input as a date time editor, set an igxDateTimeEditor directive and a valid date object as value. In order to have complete editor look and feel, wrap the input in an [igx-input-group](input-group.md). This will allow you to not only take advantage of the following directives [`igxInput`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinputdirective.html), [`igxLabel`](label-input.md), [`igx-prefix`](input-group.md#prefix--suffix), [`igx-suffix`](input-group.md#prefix--suffix), [`igx-hint`](input-group.md#hints), but will cover common scenarios when dealing with form inputs as well.

### Binding

A basic configuration scenario setting a Date object as a [`value`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatetimeeditordirective.html#value):

```typescript
public date = new Date();
```

```html
<igx-input-group>
    <input type="text" igxInput igxDateTimeEditor [value]="date" />
</igx-input-group>
```

To create a two-way data-binding, set an `ngModel`:

```html
<igx-input-group>
    <input type="text" igxInput igxDateTimeEditor [(ngModel)]="date"/>
</igx-input-group>
```

<div class="divider--half"></div>

#### <a name="iso">Binding to ISO strings</a>

The `IgxDateTimeEditorDirective` accepts an [`ISO 8601`](https://tc39.es/ecma262/#sec-date-time-string-format) strings.

The string can be a full `ISO` string, in the format `YYYY-MM-DDTHH:mm:ss.sssZ` or it could be separated into date-only and time-only portions.

##### Date-only

If a date-only string is bound to the directive, it needs to follow the format - `YYYY-MM-DD`. This applies only when binding a string value to the directive, the [`inputFormat`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatetimeeditordirective.html#inputFormat) is still used when typing values in the editor and it does not have to be in the same format. Additionally, when binding a date-only string, the directive will prevent time shifts by coercing the time to be `T00:00:00`.

##### Time-only

Time-only strings are normally not defined in the `ECMA` specification, however to allow the directive to be integrated in scenarios which require time-only solutions, it supports the 24 hour format - `HH:mm:ss`. The 12 hour format is not supported. Please also note that this applies for _bound values only_.

##### Full ISO string

If a full `ISO` string is bound, the directive will parse it only if all elements required by [`Date.parse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#date_time_string_format) are provided.

All false values, including `InvalidDate` will be parsed as `null`. Incomplete date-only, time-only, or full `ISO` strings will be parsed as `InvalidDate`.

### Keyboard Navigation

Date Time Editor Directive has intuitive keyboard navigation that makes it easy to increment, decrement, or jump through different DateParts among others without having to touch the mouse.

- <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>Arrow Left</kbd> / <kbd>Right</kbd> - navigates between date sections. On <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>Right</kbd> it goes to the end of the section. If already there it goes to the end of next section if any. It works in a similar fashion in the opposite direction.

- <kbd>Arrow Up</kbd> / <kbd>Down</kbd> - increment/decrement date portions. See related [`spinLoop`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatetimeeditordirective.html#spinLoop)

- <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>;</kbd> - set the current day and time in the editor.

## Examples

### Display and input format

The [`IgxDateTimeEditor`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatetimeeditordirective.html) supports different display and input formats.

It uses Angular's [`DatePipe`](https://angular.io/api/common/DatePipe), which allows it to support predefined format options, such as `shortDate` and `longDate`. It can also accept a constructed format string using characters supported by the `DatePipe`, e.g. `EE/MM/yyyy`. Notice that formats like `shortDate`, `longDate`, etc., can be used as [`displayFormat`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatetimeeditordirective.html#displayFormat) only. Also, if no [`displayFormat`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatetimeeditordirective.html#displayFormat) is provided, the editor will use the [`inputFormat`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatetimeeditordirective.html#inputformat) as its [`displayFormat`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatetimeeditordirective.html#displayFormat).
Alternatively, if the [`inputFormat`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatetimeeditordirective.html#inputFormat) property is not set, the input format will be inferred from the [`displayFormat`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatetimeeditordirective.html#displayFormat) in case it can be parsed as containing numeric date-time parts only.

To set a specific input format, pass it as a string to the IgxDateTimeEditor directive. This will set both the expected user input format and the [mask](mask.md) for the editor. Additionally, the [`inputFormat`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatetimeeditordirective.html#inputFormat) is locale based, so if none is provided, the editor will default to the one used by the browser.

```html
<igx-input-group>
    <input type="text" igxInput [displayFormat]="'shortDate'" [igxDateTimeEditor]="'dd/MM/yyyy'" [(ngModel)]="date"/>
</igx-input-group>
```

The table bellow shows formats that are supported by the directive's [`inputFormat`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatetimeeditordirective.html#inputFormat):

|  Format | Description                                                                 |
| :------ | :-------------------------------------------------------------------------- |
| `d`     | Date, will be coerced with a leading zero while editing.                    |
| `dd`    | Date with an explicitly set leading zero.                                   |
| `M`     | Month, will be coerced with a leading zero while editing.                   |
| `MM`    | Month with an explicitly set leading zero.                                  |
| `yy`    | Short year format.                                                          |
| `yyyy`  | Full year format.                                                           |
| `h`     | Hours in 12-hour format, will be coerced with a leading zero while editing. |
| `hh`    | Hours in 12-hour format with an explicitly set leading zero.                |
| `H`     | Hours in 24-hour format, will be coerced with a leading zero while editing. |
| `HH`    | Hours in 24-hour format, with an explicitly set leading zero.               |
| `m`     | Minutes, will be coerced with a leading zero while editing.                 |
| `mm`    | Minutes with an explicitly set leading zero.                                |
| `tt`    | AM/PM section for 12-hour format.                                           |

> [!NOTE]
> The `IgxDateTimeEditorDirective` directive supports IME input. When typing in an Asian language input, the control will display input method compositions and candidate lists directly in the control’s editing area, and immediately re-flow surrounding text as the composition ends.

### Min max value

You can specify [`minValue`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatetimeeditordirective.html#minValue) and [`maxValue`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatetimeeditordirective.html#maxValue) properties to restrict input and control the validity of the ngModel.

```typescript
public minDate = new Date(2020, 1, 15);
public maxDate = new Date(2020, 11, 1);
```

```html
<igx-input-group>
    <input type="text" igxInput igxDateTimeEditor [minValue]="minDate" [maxValue]="maxDate" [(ngModel)]="date"/>
</igx-input-group>

```

The [`minValue`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatetimeeditordirective.html#minValue) and [`minValue`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatetimeeditordirective.html#minValue) inputs can also be of type `string`, see [Binding to ISO strings](#iso).

### Increment and decrement <a name="increment-decrement"></a>

[`igxDateTimeEditor`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatetimeeditordirective.html) directive exposes public [`increment`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatetimeeditordirective.html#increment) and [`decrement`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatetimeeditordirective.html#decrement) methods. They increment or decrement a specific [`DatePart`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/datepart.html) of the currently set date and time and can be used in a couple of ways.

In the first scenario, if no specific [`DatePart`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/datepart.html) is passed to the method, a default [`DatePart`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/datepart.html) will increment or decrement, based on the specified [`inputFormat`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatetimeeditordirective.html#inputFormat) and the internal directive implementation. In the second scenario, you can explicitly specify what [`DatePart`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/datepart.html) to manipulate as it may suite different requirements.
Also, both methods accept an optional `delta` parameter of type `number` which can be used to set the increment/decrement step.

You may compare both in the following sample:
```typescript
import { Component } from '@angular/core';
import { DatePart } from 'igniteui-angular/core';
import { IgxInputDirective, IgxInputGroupComponent, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxDateTimeEditorDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-datetime-advanced',
    styleUrls: ['./datetime-advanced.scss'],
    templateUrl: './datetime-advanced.html',
    imports: [IgxInputGroupComponent, FormsModule, IgxInputDirective, IgxDateTimeEditorDirective, IgxSuffixDirective, IgxIconComponent]
})

export class DateTimeAdvancedComponent {
    public date = new Date((new Date()).setHours(9, 0, 0, 0));
    public datePart: typeof DatePart = DatePart;
}
```

<div class="divider--half"></div>

Additionally, `spinDelta` is an input property of type [`DatePartDeltas`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatetimeeditordirective.html) and it can be used to apply a different delta to each date time segment. It will be applied when spinning with the keyboard, as well as when spinning with the [`increment`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatetimeeditordirective.html#increment) and [`decrement`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatetimeeditordirective.html#decrement) methods, as long as they don't have the `delta` parameter provided since it will take precedence over `spinDelta`.

### In Angular Forms

The Date Time Editor Directive supports all of the form directives from the core FormsModule [`NgModel`](https://angular.io/api/forms/NgModel) and [`ReactiveFormsModule`](https://angular.io/api/forms/ReactiveFormsModule) (FormControl, FormGroup, etc.). This also includes the [Forms `Validators`](https://angular.io/api/forms/Validators) functions. The following example illustrates the use of the `required` validator in a Template-driven Form.

> [!NOTE]
> If needed, you can revert back to a valid state by handling the `validationFailed` event and changing the `newValue` property of the available arguments.

Template-driven form example:

```html
<form>
    <igx-input-group>
        <input igxInput type="text" [(ngModel)]="date" name="form" required
            (valueChanged)="onValueChanged($event)" (validationFailed)="onValidationFailed($event)"
            [igxDateTimeEditor]="'dd/MM/yyyy'" [minValue]="minDate" [maxValue]="maxDate" [isSpinLoop]="false" />
    </igx-input-group>
</form>
<div class="divider--half"></div>
```

### Text Selection

You can force the component to select all of the input text on focus using [`igxTextSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtextselectiondirective.html). Find more info on [`igxTextSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtextselectiondirective.html) at [Label & Input](label-input.md#focus--text-selection).

```html
<igx-input-group>
    <input igxInput [igxDateTimeEditor]="'dd/MM/yyyy'" [igxTextSelection]="true"/>
</igx-input-group>
```

> [!NOTE]
> In order for the component to work properly, it is crucial to set [`igxTextSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtextselectiondirective.html) after the [`igxDateTimeEditor`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatetimeeditordirective.html) directive. The reason for this is both directives operate on the input `focus` event so text selection should happen after the mask is set.

## Styling

For details check out the [`Input Group styling guide`](input-group.md#styling).
<div class="divider--half"></div>

## API References

- [IgxDateTimeEditorDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatetimeeditordirective.html)
- [IgxHintDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhintdirective.html)
- [IgxInputDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinputdirective.html)
- [IgxInputGroupComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinputgroupcomponent.html)
- [IgxInputGroupComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-input-group-theme)

<div class="divider--half"></div>


## Additional Resources

Related topics:

- [Mask](mask.md)
- [Label & Input](label-input.md)
- [Reactive Forms Integration](angular-reactive-form-validation.md)


Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
