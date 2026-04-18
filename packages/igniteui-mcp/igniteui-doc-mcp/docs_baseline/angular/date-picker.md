---
title: Angular Datepicker Component – Ignite UI for Angular - MIT license 
_description: Learn how to use a functionality to select a date from a calendar to your web application with Angular Datepicker Component by Ignite UI. Try it now. 
_keywords: angular datepicker, angular datepicker component, angular UI components, angular component, ignite ui for angular
_license: MIT
_tocName: Date Picker
---

# Angular Date Picker Component Overview

Angular Date Picker is a feature rich component used for entering a date through manual text input or choosing date values from a calendar dialog that pops up. Lightweight and simple to use, the Date Picker in Angular lets users to navigate to a desired date with several view options – month, year, decade. There are the usual min, max, and required properties to add validation.

The Ignite UI for Angular Date Picker Component lets users pick a single date through a month-view calendar dropdown or editable input field. The Angular Date Picker also supports a dialog mode for selection from the calendar only, locale-aware and customizable date formatting and validation integration.

## Angular Date Picker Example

Below you can see a sample that demonstrates how the Angular Date Picker works when users are enabled to pick a date through a manual text input and click on the calendar icon on the left to navigate to it. See how to render it.

<!-- TODO: date picker sample with several options enabled -->
```typescript
import { Component } from '@angular/core';
import { IgxDatePickerComponent } from 'igniteui-angular/date-picker';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-datepicker-sample-1',
    styleUrls: ['./datepicker-sample-1.component.scss'],
    templateUrl: './datepicker-sample-1.component.html',
    imports: [IgxDatePickerComponent, FormsModule, IgxLabelDirective]
})
export class DatepickerSample1Component {
    public date = new Date();
}
```
```html
<div class="date-picker-wrapper">
    <igx-date-picker [(ngModel)]="date">
        <label igxLabel>Date</label>
    </igx-date-picker>
</div>
```
```scss
.datе-picker-wrapper {
    padding: 1rem;
    max-width: 600px;
}
```

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Date Picker

To get started with the Ignite UI for Angular Date Picker component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxDatePickerModule` in your **app.module.ts** file.

>[!NOTE]
> As the picker uses the [**IgxCalendarComponent**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcalendarcomponent.html), it is also dependent on the **BrowserAnimationsModule** and **optionally** on the **HammerModule** for touch interactions, so they need to be added to the module as well:

```typescript
import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxDatePickerModule } from 'igniteui-angular/date-picker';
// import { IgxDatePickerModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxDatePickerModule, BrowserAnimationsModule, HammerModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxDatePickerComponent` as a standalone dependency, or use the [`IGX_DATE_PICKER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/date-picker/src/date-picker/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_DATE_PICKER_DIRECTIVES } from 'igniteui-angular/date-picker';
// import { IGX_DATE_PICKER_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-date-picker>
        <label igxLabel>Date</label>
    </igx-date-picker>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [BrowserAnimationsModule, HammerModule, IGX_DATE_PICKER_DIRECTIVES]
    /* or imports: [BrowserAnimationsModule, HammerModule, IgxDatePickerComponent, IgxLabelDirective] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Date Picker module or directives imported, you can start using the `igx-date-picker` component.

## Using the Angular Date Picker Component

### Display Date picker

To instantiate a Date Picker in its default `dropdown` state, use the following code:

```html
<igx-date-picker>
    <label igxLabel>Date</label>
</igx-date-picker>
```

### Options

The `IgxDatePickerComponent` can be bound to a `date` or a `string`.

```html
<igx-date-picker [value]="date"></igx-date-picker>
```

```typescript
public date = new Date(2000, 0, 1);
```

If a string is bound to the picker, it needs to be a date-only string in the `ISO 8601` format:

```html
<igx-date-picker [value]="'2000-01-01'"></igx-date-picker>
```

More information about this can be found in [DateTime Editor's ISO section](date-time-editor.md#iso).

Two-way binding is possible through `ngModel`:

```html
<igx-date-picker [(ngModel)]="date"></igx-date-picker>
```

As well as through the `value` input:

```html
<igx-date-picker [(value)]="date"></igx-date-picker>
```

Additionally, `formControlName` can be set on the picker, to use it in a reactive form:

```html
<form [formGroup]="form">
    <igx-date-picker formControlName="datePicker"></igx-date-picker>
</form>
```

```typescript
export class SampleFormComponent {
    // ...
    public form: FormGroup;
    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            datePicker: ['', Validators.required]
        });
    }
}
```

> [!NOTE]
> The picker always returns a `Date` value, this means that If it is model bound or two-way bound to a string variable, after a new date has been chosen, it will be of type `Date`.

### Projecting components

The [`IgxDatePickerComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html) allows the projection of child components that the [`IgxInputGroupComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinputgroupcomponent.html) supports (with the exception of [`IgxInput`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinputdirective.html)) - [`igxLabel`](label-input.md), [`igx-hint / IgxHint`](input-group.md#hints), [`igx-prefix / igxPrefix`](input-group.md#prefix--suffix), [`igx-suffix / igxSuffix`](input-group.md#prefix--suffix). More detailed information about this can be found in the [Label & Input](label-input.md) topic.

```html
<igx-date-picker #datePicker>
    <igx-icon igxSuffix (click)="datePicker.open()">keyboard_arrow_down</igx-icon>
</igx-date-picker>
```

> [!NOTE]
> This component uses Material Icons. Add the following link to your `index.html`: `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`

The above snippet will add an additional toggle icon at the end of the input, right after the default clear icon. This will not remove the default toggle icon, though as prefixes and suffixes can be stacked one after the other.

#### Customizing the toggle and clear icons

The [`IgxDatePickerComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html) can be configured with [`IgxPickerToggleComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpickertogglecomponent.html) and [`IgxPickerClearComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpickerclearcomponent.html). These can be used to change the toggle and clear icons without having to add your own click handlers.

```html
 <igx-date-picker>
    <label igxLabel>Select a Date</label>
    <igx-picker-toggle igxPrefix>
        <igx-icon>calendar_view_day</igx-icon>
    </igx-picker-toggle>
    <igx-picker-clear igxSuffix>
        <igx-icon>delete</igx-icon>
    </igx-picker-clear>
</igx-date-picker>
```

#### Custom action buttons

The picker's action buttons can be modified in two ways:

- the button's text can be changed using the [`todayButtonLabel`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html#todayButtonLabel) and the [`cancelButtonLabel`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html#cancelButtonLabel) input properties:

```html
<igx-date-picker [todayButtonLabel]="'今日'" [cancelButtonLabel]="'キャンセル'"></igx-date-picker>
```

- the whole buttons can be templated using the [`igxPickerActions`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpickeractionsdirective.html) directive:
With it you gain access to the date picker's [`calendar`](calendar.md) and all of its members:

```html
<igx-date-picker>
    <ng-template igxPickerActions let-calendar>
        <button igxButton="flat" (click)="calendar.viewDate = today">Today</button>
    </ng-template>
</igx-date-picker>
```

### Keyboard Navigation

Opening and closing the [`IgxDatePickerComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html)'s calendar UI with the keyboard is available only for `dropdown` mode and can be triggered via the key combinations below:

| Keys                               | Description                                                                                   |
| :--------------------------------- | :-------------------------------------------------------------------------------------------- |
| <kbd>Space</kbd>                   | Displays the calendar pop-up and focuses it                                                   |
| <kbd>Alt</kbd> + <kbd>&darr;</kbd> | Displays the calendar pop-up and focuses it                                                   |
| <kbd>Esc</kbd>                     | Closes the calendar pop-up and focuses the input field                                        |
| <kbd>Enter</kbd>                   | Closes the calendar pop-up, selecting the focused date and moves the focus to the input field |
| <kbd>Alt</kbd> + <kbd>&uarr;</kbd> | Closes the calendar pop-up and focuses the input field                                        |

Since the [`IgxDatePickerComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html) uses the [`IgxDateTimeEditorDirective`](date-time-editor.md) it inherits its keyboard navigation.

## Examples

### Dialog Mode

The [`IgxDatePickerComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html) also supports a `dialog` mode:

```html
<igx-date-picker [mode]="'dialog'"></igx-date-picker>
```

```typescript
import { Component } from '@angular/core';
import { IgxDatePickerComponent } from 'igniteui-angular/date-picker';
import { IgxLabelDirective } from 'igniteui-angular/input-group';

@Component({
    selector: 'app-datepicker-sample-2',
    styleUrls: ['./datepicker-sample-2.component.scss'],
    templateUrl: './datepicker-sample-2.component.html',
    imports: [IgxDatePickerComponent, IgxLabelDirective]
})
export class DatepickerSample2Component {
  public date: Date = new Date();
}
```
```html
<div class="date-picker-wrapper">
    <igx-date-picker [(value)]="date" mode="dialog">
        <label igxLabel>Date</label>
    </igx-date-picker>
</div>
```
```scss
.date-picker-wrapper {
    padding: 1rem;
    max-width: 600px;
}
```

<div class="divider--half"></div>

### Display and input format

[`inputFormat`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html#inputFormat) and [`displayFormat`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html#displayFormat) are properties which can be set to make the picker's editor follow a specified format. The [`inputFormat`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html#inputFormat) property is used when the picker is in `dropdown` mode and it governs the input's editable mask, as well as its placeholder (if none is set). Additionally, the [`inputFormat`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html#inputFormat) is locale based, so if none is provided, the picker will default to the one used by the browser.

A good thing to note is that the  the Angular Date Picker Component in Ignite UI will always add a leading zero on the `date` and `month` portions if they were provided in a format that does not have it, e.g. `d/M/yy` becomes `dd/MM/yy`. This applies only during editing.

[`displayFormat`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html#displayFormat) on the other hand uses Angular's [`DatePipe`](https://angular.io/api/common/DatePipe) and is used to format the picker's input when it is not focused. If no [`displayFormat`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html#displayFormat) is provided, the picker will use the [`inputFormat`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html#inputFormat) as its [`displayFormat`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html#displayFormat).
Alternatively, if the [`inputFormat`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html#inputFormat) property is not set, the input format will be inferred from the [`displayFormat`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html#displayFormat) in case it can be parsed as containing numeric date-time parts only.

More information about these can be found in the [`IgxDateTimeEditor`](date-time-editor.md#examples) examples section.

```typescript
import { Component } from '@angular/core';
import { IgxDatePickerComponent } from 'igniteui-angular/date-picker';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-datepicker-sample-3',
    styleUrls: ['./datepicker-sample-3.component.scss'],
    templateUrl: './datepicker-sample-3.component.html',
    imports: [IgxDatePickerComponent, FormsModule]
})
export class DatepickerSample3Component {
    public date = new Date();
}
```
```html
<div class="date-picker-wrapper">
    <igx-date-picker 
        [(ngModel)]="date" 
        [inputFormat]="'dd/MM/yy'" 
        [displayFormat]="'shortDate'">
    </igx-date-picker>
</div>
```
```scss
.date-picker-wrapper {
  padding: 1rem;
}
```

<div class="divider--half"></div>

>[!NOTE]
> The `IgxDatePicker` now supports IME input. When composition ends, the control converts the wide-character numbers to ASCII characters.

### Increment and decrement

The [`IgxDatePickerComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html) exposes [`increment`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html#increment) and [`decrement`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html#decrement) methods. Both of which come from the  [`IgxDateTimeEditorDirective`](date-time-editor.md#increment-decrement) and can be used for incrementing and decrementing a specific [`DatePart`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/datepart.html) of the currently set date.

```html
<igx-date-picker #datePicker>
    <igx-icon igxPrefix (click)="datePicker.increment(DatePart.Month, 3)">keyboard_arrow_up</igx-icon>
    <igx-icon igxPrefix (click)="datePicker.decrement(DatePart.Year. 4)">keyboard_arrow_down</igx-icon>
</igx-date-picker>
```

It also has as a [`spinDelta`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html#spinDelta) input property which can be used to increment or decrement a specific date part of the currently set date.

```html
<igx-date-picker [spinDelta]="{date: 2, month: 3, year: 4}"></igx-date-picker>
```

### In Angular Forms

The [`IgxDatePickerComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html) supports all directives from the core [FormsModule](https://angular.io/api/forms/FormsModule), [NgModel](https://angular.io/api/forms/NgModel) and [ReactiveFormsModule](https://angular.io/api/forms/ReactiveFormsModule) ([`FormControl`](https://angular.io/api/forms/FormControl), [`FormGroup`](https://angular.io/api/forms/FormGroup), etc.). This also includes the [Forms Validators](https://angular.io/api/forms/Validators) functions. In addition, the component's [`minValue`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html#minValue) and [`maxValue`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html#maxValue) properties act as form validators.

You can see the [`IgxDatePickerComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html) in a reactive form by visiting our [Reactive Forms Integration](angular-reactive-form-validation.md) topic.

#### Using date and time picker together

In some cases when the IgxDatePicker and the [`IgxTimePicker`](time-picker.md) are used together, we might need them to be bound to one and the same Date object value.

To achieve that in template driven forms, use the `ngModel` to bind both components to the same Date object.

```typescript
import { Component } from '@angular/core';
import { IgxDatePickerComponent } from 'igniteui-angular/date-picker';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxTimePickerComponent } from 'igniteui-angular/time-picker';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-datetimepicker-template-driven-form',
    styleUrls: ['./template-driven-form.component.scss'],
    templateUrl: './template-driven-form.component.html',
    imports: [IgxDatePickerComponent, FormsModule, IgxLabelDirective, IgxTimePickerComponent]
})
export class DateTimePickerTDFSampleComponent {
    public date = new Date();
}
```
```html
<div class="pickers-wrapper">
    <div class="form-group">
        <div class="form-date-picker">
            <igx-date-picker #datePicker name="date-picker" [(ngModel)]="date">
                <label igxLabel>Date</label>
            </igx-date-picker>
        </div>
        <div class="form-time-picker">
            <igx-time-picker name="time-picker" [(ngModel)]="date" [disabled]="datePicker.value ? false : true">
                <label igxLabel>Time</label>
            </igx-time-picker>
        </div>
    </div>
    <p class="text">
        Selected date: {{ date? date.toLocaleString() : null }}
    </p>
</div>
```
```scss
.pickers-wrapper {
    display: flex;
    flex-direction: column;
}

.form-group {
    display: flex;
    flex: 1;
    width: 450px;
}

.form-date-picker {
    flex: 50%;
}

.form-time-picker {
    flex: 50%;
    margin-left: 16px;
}
```

<div class="divider--half"></div>

In reactive forms, we can handle the [`valueChange`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html#valueChange) event of each component and update the value of the other.

```typescript
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IgxDatePickerComponent } from 'igniteui-angular/date-picker';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxTimePickerComponent } from 'igniteui-angular/time-picker';

@Component({
    selector: 'app-datetimepicker-reactive-form',
    styleUrls: ['./reactive-form.component.scss'],
    templateUrl: './reactive-form.component.html',
    imports: [FormsModule, ReactiveFormsModule, IgxDatePickerComponent, IgxLabelDirective, IgxTimePickerComponent]
})
export class DateTimePickerRFSampleComponent {
    public dateTimeForm: FormGroup;
    public date = new Date(2021, 6, 12, 7, 30, 0);
    public minDate = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate() - 10);
    public maxDate = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate() + 15);
    public minTime = '06:15:30';
    public maxTime = '15:15:30';

    constructor() {
        const fb = inject(FormBuilder);

        this.dateTimeForm = fb.group({
            date: [this.date, Validators.required],
            time: [this.date, Validators.required]
        });
    }
}
```
```html
<div class="pickers-wrapper">
    <form [formGroup]="dateTimeForm">
        <div class="form-group">
            <div class="form-date-picker">
                <igx-date-picker #datePicker formControlName="date" [value]="date" [minValue]="minDate"
                    [maxValue]="maxDate" (valueChange)="timePicker.value = datePicker.value">
                    <label igxLabel>Date</label>
                </igx-date-picker>
            </div>
            <div class="form-time-picker">
                <igx-time-picker #timePicker formControlName="time" [value]="date" [minValue]="minTime"
                    [maxValue]="maxTime" [disabled]="dateTimeForm.value.date ? false : true"
                    (valueChange)="datePicker.value = timePicker.value">
                    <label igxLabel>Time</label>
                </igx-time-picker>
            </div>
        </div>
    </form>
    <p>
        Date picker: {{ dateTimeForm.value.date? dateTimeForm.value.date.toLocaleString() : null}}<br>
        Time picker: {{ dateTimeForm.value.time? dateTimeForm.value.time.toLocaleString() : null}}<br>
        Form Status: {{ dateTimeForm.status }}
    </p>
</div>
```
```scss
.pickers-wrapper {
    display: flex;
    flex-direction: column;
}

.form-group {
    display: flex;
    flex: 1;
    width: 450px;
}

.form-date-picker {
    flex: 50%;
}

.form-time-picker {
    flex: 50%;
    margin-left: 16px;
}
```

<div class="divider--half"></div>

### Calendar Specific settings

The [`IgxDatePickerComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html) uses the [`IgxCalendarComponent`](calendar.md) and you can modify some of its settings via the properties that the date picker exposes. Some of these include [`displayMonthsCount`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html#displayMonthsCount) which allows more than one calendar to be displayed when the picker expands, [`weekStart`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html#weekStart) which determines the starting day of the week, [`showWeekNumbers`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html#showWeekNumbers) which shows the number for each week in the year and more.

## Internationalization

The localization of the [`IgxDatePickerComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html) can be controlled through its [`locale`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html#locale) input. Additionally, using the `igxCalendarHeader` and the `igxCalendarSubheader` templates, provided by the [`IgxCalendarComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcalendarcomponent.html), you can specify the look of your header and subheader. More information on how to use these templates can be found in the [**IgxCalendarComponent**](calendar.md) topic.

Here is how an Angular Date Picker with Japanese locale definition would look like:

```html
<igx-date-picker locale="ja-JP" [value]="date">
  <ng-template igxCalendarHeader let-format>
    {{ format.month.combined | titlecase }}{{format.day.combined }}{{ format.weekday.combined }}
  </ng-template>
  <ng-template igxCalendarSubheader let-format>
    <span (click)="format.yearView()">{{ format.year.combined }}</span>
    <span (click)="format.monthView()">{{ format.month.combined | titlecase }}</span>
  </ng-template>
</igx-date-picker>
```

## Styling

To get started with styling the date picker, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

The Angular Date Picker uses the calendar's theme, so we have to create a new theme that extends the [`calendar-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-calendar-theme). By setting the `$header-background`, the theme automatically computes the necessary colors for the other properties to ensure a visually balanced and accessible design.

```scss
$custom-datepicker-theme: calendar-theme(
  $header-background: #57a5cd,
);
```

The last step is to pass the custom Date Picker theme:

```scss
:host {
    @include tokens($custom-datepicker-theme);
}
```

>[!WARNING]
>If the component is using an [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`

```scss
:host {
  ::ng-deep {
    @include tokens($custom-datepicker-theme);
  }
}
```

```typescript
import { Component, ElementRef, inject } from '@angular/core';
import { IgxOverlayService } from 'igniteui-angular/core';
import { IgxDatePickerComponent } from 'igniteui-angular/date-picker';
import { IgxLabelDirective } from 'igniteui-angular/input-group';

@Component({
    selector: 'app-datepicker-sample-1',
    styleUrls: ['./datepicker-styling-sample.component.scss'],
    templateUrl: './datepicker-styling-sample.component.html',
    imports: [IgxDatePickerComponent, IgxLabelDirective]
})
export class DatepickerStylingSampleComponent {    element = inject(ElementRef);
    private overlayService = inject(IgxOverlayService);

 }
```
```html
<div class="date-picker-wrapper">
    <igx-date-picker [overlaySettings]="{ outlet: element }" mode="dialog">
        <label igxLabel>Date</label>
    </igx-date-picker>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$custom-datepicker-theme: calendar-theme(
    $header-background: #57a5cd,
);

:host {
    @include tokens($custom-datepicker-theme);
}
```

## API References

<div class="divider--half"></div>

- [IgxDatePickerComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html)
- [IgxDateTimeEditorDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatetimeeditordirective.html)
- [IgxCalendarComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcalendarcomponent.html)
- [IgxCalendarComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-calendar-theme)
- [IgxOverlay Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-overlay-theme)
- [IgxInputGroupComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinputgroupcomponent.html)

## Theming Dependencies

<div class="divider--half"></div>

- [IgxCalendar Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-calendar-theme)
- [IgxOverlay Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-overlay-theme)
- [IgxIcon Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-icon-theme)
- [IgxButton Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-button-theme)
- [IgxInputGroup Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-input-group-theme)
- [IgxDropDown Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-drop-down-theme)


## Additional Resources

- [Time Picker](time-picker.md)
- [Date Time Editor](date-time-editor.md)
- [Date Range Picker](date-range-picker.md)
- [Reactive Forms Integration](angular-reactive-form-validation.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
