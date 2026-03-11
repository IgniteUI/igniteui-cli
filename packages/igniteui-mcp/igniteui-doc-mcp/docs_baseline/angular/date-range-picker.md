---
title: Angular Date Range Picker Component | Ignite UI for Angular | MIT license
_description: The Angular Date Range Picker component allows you to choose a date range by defining its start and end date. You can select a range from a calendar UI. Try it now. 
_keywords: Angular Date Range Picker, Date Range Picker, Date Picker, Angular Date Range Picker Component, Angular UI Components, Angular component
_license: MIT
_tocName: Date Range Picker
---

# Angular Date Range Picker Component Overview

The Angular Date Range Picker is a lightweight component that includes a text input and a calendar pop-up, allowing users to easily select start and end dates. It is highly customizable to fit various application requirements, offering features such as date range restrictions, configurable date formats, and more.

## Angular Date Range Picker Example

Below is a sample demonstrating the [`IgxDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdaterangepickercomponent.html) component in action, where a calendar pop-up allows users to select start and end dates.

```typescript
import { Component } from '@angular/core';
import { DateRange } from 'igniteui-angular/core';
import { IgxDateRangePickerComponent } from 'igniteui-angular/date-picker';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-basic-rangedatepicker',
    styleUrls: ['./daterangepicker-basic.scss'],
    templateUrl: './daterangepicker-basic.html',
    imports: [IgxDateRangePickerComponent, FormsModule, IgxLabelDirective]
})
export class BasicDateRangePickerComponent {
    public range: DateRange = { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };
}
```

<div class="divider--half"></div>


## Getting Started with Ignite UI for Angular Date Range Picker

To get started with the Ignite UI for Angular [`IgxDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdaterangepickercomponent.html) component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxDateRangePickerModule` in your **app.module.ts** file.

As the [`IgxDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdaterangepickercomponent.html) uses the [**IgxCalendarComponent**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcalendarcomponent.html), it also has a dependency on the **BrowserAnimationsModule** and **optionally** the **HammerModule** for touch interactions, so they need to be added to the `AppModule` as well:

```typescript
// app.module.ts

import { IgxDateRangePickerModule } from 'igniteui-angular/date-picker';
// import { IgxDateRangePickerModule } from '@infragistics/igniteui-angular'; for licensed package

import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    ...
    imports: [..., IgxDateRangePickerModule, BrowserAnimationsModule, HammerModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the [`IgxDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdaterangepickercomponent.html) as a standalone dependency, or use the [`IGX_DATE_RANGE_PICKER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/date-range-picker/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_DATE_RANGE_PICKER_DIRECTIVES } from 'igniteui-angular/date-picker';
// import { IGX_DATE_RANGE_PICKER_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igx-date-range-picker [value]="range"></igx-date-range-picker>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [BrowserAnimationsModule, HammerModule, IGX_DATE_RANGE_PICKER_DIRECTIVES]
    /* or imports: [BrowserAnimationsModule, HammerModule, IgxDateRangePickerComponent] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Date Range Picker module or directives imported, you can start using the `igx-date-range-picker` component.

## Using the Angular Date Range Picker Component

### Display and Value

To instantiate a date range picker in its default mode, use the following code:

```html
<igx-date-range-picker [value]="range"></igx-date-range-picker>
```

```typescript
public range: DateRange = { start: new Date(2020, 4, 20), end: new Date(2020, 4, 25) };
```

>[!NOTE]
> The Date Range Picker value is of type [`DateRange`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/daterange.html), which contains a start and an end date.

The picker offers two modes for displaying date values: single input and two inputs. In single input mode, the field is non-editable and the date range cannot be edited by typing. In two inputs mode, however, users can edit the start and end dates by typing in separate input fields.

When the calendar is visible a date range can be selected by choosing both a start and end date. Selecting a date will set both the start and end date and once a second date is chosen, it will set the end date. If a range is already selected, clicking any other date on the calendar will start a new range selection.

To create a two-way data-binding, use `ngModel`:

```html
<igx-date-range-picker [(ngModel)]="range"></igx-date-range-picker>
```

### Display Separate Editable Inputs

The Angular Date Range Picker component also allows configuring two separate inputs for start and end date. This can be achieved by using the [`IgxDateRangeStartComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdaterangestartcomponent.html) and [`IgxDateRangeEndComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdaterangeendcomponent.html) as children of the date range picker, as shown in the demo below:

```html
<igx-date-range-picker [(ngModel)]="range">
    <igx-date-range-start>
        <input igxInput igxDateTimeEditor type="text">
    </igx-date-range-start>
    <igx-date-range-end>
        <input igxInput igxDateTimeEditor type="text">
    </igx-date-range-end>
</igx-date-range-picker>
```

- Both the [`IgxDateRangeStartComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdaterangestartcomponent.html) and [`IgxDateRangeEndComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdaterangeendcomponent.html) extend the existing [`IgxInputGroupComponent`](input-group.md). For such a configuration to work, defining an [`IgxInput`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinputdirective.html) is required. In addition, all other components and directives available to the [`IgxInputGroupComponent`](input-group.md) can also be used.
- In order to enable date editing for both inputs, you need to decorate them with [`igxDateTimeEditor`](date-time-editor.md) directive.

```typescript
import { Component } from '@angular/core';
import { DateRange, IgxPickerClearComponent, IgxPickerToggleComponent } from 'igniteui-angular/core';
import { IgxDateRangeEndComponent, IgxDateRangePickerComponent, IgxDateRangeStartComponent } from 'igniteui-angular/date-picker';
import { IgxInputDirective, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxDateTimeEditorDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-rangedatepicker-start-end',
    styleUrls: ['./daterangepicker-start-end.scss'],
    templateUrl: './daterangepicker-start-end.html',
    imports: [IgxDateRangePickerComponent, FormsModule, IgxDateRangeStartComponent, IgxInputDirective, IgxDateTimeEditorDirective,
              IgxPickerToggleComponent, IgxPrefixDirective, IgxIconComponent, IgxDateRangeEndComponent, IgxSuffixDirective,
              IgxPickerClearComponent]
})
export class DateRangePickerStartEndComponent {
    public range: DateRange = { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };
}
```

### Popup modes

By default, when clicked, the [`IgxDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdaterangepickercomponent.html) opens its calendar pop-up in `dropdown` mode. Alternatively, the calendar can be opened in `dialog` mode by setting the `Mode` property to `dialog`.

```html
<igx-date-range-picker [mode]="'dialog'"></igx-date-range-picker>
```

```typescript
import { Component } from '@angular/core';
import { DateRange } from 'igniteui-angular/core';
import { IgxDateRangePickerComponent } from 'igniteui-angular/date-picker';

@Component({
    selector: 'app-mode-rangedatepicker',
    styleUrls: ['./daterangepicker-mode.scss'],
    templateUrl: './daterangepicker-mode.html',
    imports: [IgxDateRangePickerComponent]
})
export class DateRangePickerModeComponent {
    public range: DateRange = { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };
}
```

<div class="divider--half"></div>

In a default configuration with a single read-only input, the calendar can be opened by clicking anywhere in the input, including the calendar icon. When there are two separate inputs for start and end date, and in dropdown mode, the calendar can only be opened from the calendar icon, since both inputs are editable by default. For two inputs in `dialog` mode, clicking anywhere in the input opens the calendar

The range value is set when dates are picked from the calendar. You will notice that in dropdown mode, the `Done` button is not available. In dialog mode, a `Cancel` button allows to revert the selection on close.

### Keyboard Navigation

The [`IgxDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdaterangepickercomponent.html) features intuitive keyboard navigation, allowing users to easily increment, decrement, or jump between different component parts, all without needing to use a mouse.

The available keyboard navigation options vary depending on whether the component is in single input or two inputs mode.

**Two Inputs Mode:**

|Keys|Description|
|----|-----------|
| <kbd>&larr;</kbd> | Moves the caret one character to the left |
| <kbd>&rarr;</kbd> | Moves the caret one character to the right |
| <kbd>Ctrl + ArrowLeft</kbd> | Moves the caret to the beginning of the current input mask section or to the start of the previous one if it's already at the beginning |
| <kbd>Ctrl + ArrowRight</kbd> | Moves the caret to the end of the current input mask section or to the end of the next one if it's already at the end |
| <kbd>ArrowUp</kbd> | Increments the currently "focused" part of the input mask by one step |
| <kbd>ArrowDown</kbd> | Decrements the currently "focused" part of the input mask by one step |
| <kbd>Home</kbd> | Moves the caret to the beginning of the input mask |
| <kbd>End</kbd> | Moves the caret to the end of the input mask |
| <kbd>Ctrl + ;</kbd> | Sets the current date as the value of the component |

**Both Single and Two Inputs Modes:**

|Keys|Description|
|----|-----------|
| <kbd>Alt + ArrowDown</kbd> | Opens the calendar dropdown |
| <kbd>Alt + ArrowUp</kbd> | Closes the calendar dropdown |

The [calendar keyboard navigation](calendar.md#keyboard-navigation) section contains all keyboard combinations that can be used in the calendar.

<div class="divider--half"></div>

## Layout

### Projecting components

To enrich the default Date Range Picker UX, the component allows projecting child components - the same as in the [`IgxInputGroupComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinputgroupcomponent.html): [`igxLabel`](label-input.md), [`igx-hint / igxHint`](input-group.md#hints), [`igx-prefix / igxPrefix`](input-group.md#prefix--suffix), [`igx-suffix / igxSuffix`](input-group.md#prefix--suffix), excluding [`IgxInput`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinputdirective.html). More detailed information about this can be found in the [Label & Input](label-input.md) topic.

```html
<igx-date-range-picker #dateRangePicker [(ngModel)]="range">
    <label igxLabel>Flight dates</label>
    <igx-hint *ngIf="dateRangePicker.invalid">
        Please choose start and end date!
    </igx-hint>
</igx-date-range-picker>
```

Or for two inputs:

```html
<igx-date-range-picker #dateRangePicker [(ngModel)]="range">
    <igx-date-range-start>
        ...
        <label igxLabel>Start Date</label>
        <igx-hint *ngIf="dateRangePicker.invalid">
            Please choose start and end date!
        </igx-hint>
        ...
    </igx-date-range-start>
    <igx-date-range-end>
        ...
        <label igxLabel>End Date</label>
        ...
    </igx-date-range-end>
</igx-date-range-picker>
```

#### Toggle and clear icons

In the default configuration, with a single read-only input, a default calendar icon is shown as a prefix and a clear icon - as a suffix. These icons can be changed or redefined using the [`IgxPickerToggleComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpickertogglecomponent.html) and [`IgxPickerClearComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpickerclearcomponent.html). They can be decorated with either [`igxPrefix`](input-group.md#prefix--suffix) or [`igxSuffix`](input-group.md#prefix--suffix), which will define their position - at the start of the input or at the end respectively:

```html
<igx-date-range-picker>
    <igx-picker-toggle igxSuffix>
        <igx-icon>calendar_view_day</igx-icon>
    </igx-picker-toggle>
    <igx-picker-clear igxSuffix>
        <igx-icon>clear</igx-icon>
    </igx-picker-clear>
</igx-date-range-picker>
```

When a Date Range Picker has two separate inputs for start and end dates, it doesn't expose these icons by default. The [`IgxPickerToggleComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpickertogglecomponent.html)  and [`IgxPickerClearComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpickerclearcomponent.html) should be manually added as children of the [`IgxDateRangeStartComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdaterangestartcomponent.html) or [`IgxDateRangeEndComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdaterangeendcomponent.html) like so:

```html
<igx-date-range-picker>
    <igx-date-range-start>
        ...
        <igx-picker-toggle igxPrefix>
            <igx-icon>calendar_view_day</igx-icon>
        </igx-picker-toggle>
        <igx-picker-clear igxSuffix>
            <igx-icon>clear</igx-icon>
        </igx-picker-clear>
        ...
    </igx-date-range-start>
    <igx-date-range-end>
        ...
    </igx-date-range-end>
</igx-date-range-picker>
```

### Custom And Predefined Date Ranges

You can also add custom date range chips to the calendar pop-up for faster range selection using the [`customRanges`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdaterangepickercomponent.html#customRanges) property. For example, you can create a custom date range chip to quickly select the range for the upcoming 7 days, ending with the current date. In addition, by setting the [`usePredefinedRanges`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdaterangepickercomponent.html#usePredefinedRanges) property, a set of predefined ranges chips will be displayed along with the custom ones.

```ts
public today = new Date();

public nextSeven = new Date(
    this.today.getFullYear(),
    this.today.getMonth(),
    this.today.getDate() + 7
);

public customRanges: CustomDateRange[] = [
    {
        label: 'Next 7 days',
        dateRange: {
          start: this.today,
          end: this.nextSeven
        }
      }
];
```

```html
<igx-date-range-picker [usePredefinedRanges]="true" [customRanges]="customRanges"></igx-date-range-picker>
```

In addition, custom content or actions can be templated using the [`igxPickerActions`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpickeractionsdirective.html) directive. The following demo shows the predefined and custom ranges along with the templated actions:

```typescript
import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { CustomDateRange, DateRange, IgxPickerActionsDirective, OverlaySettings } from 'igniteui-angular/core';
import { IgxDateRangePickerComponent } from 'igniteui-angular/date-picker';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IChangeCheckboxEventArgs } from 'igniteui-angular/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-rangdatepicker-range-buttons',
    styleUrls: ['./daterangepicker-range-buttons.scss'],
    templateUrl: './daterangepicker-range-buttons.html',
    imports: [IgxDateRangePickerComponent, FormsModule, IgxPickerActionsDirective, IgxButtonDirective]
})
export class DateRangePickerRangeButtonsComponent {
    private element = inject(ElementRef);

    @ViewChild('rangePicker')
    public dateRangePicker: IgxDateRangePickerComponent;

    public range: DateRange = {
        start: new Date(),
        end: new Date(new Date().setDate(new Date().getDate() + 2))
    };

    public today = new Date();

    public nextSeven = new Date(
      this.today.getFullYear(),
      this.today.getMonth(),
      this.today.getDate() + 7
    );

    public customRanges: CustomDateRange[] = [
      {
        label: 'Next 7 days',
        dateRange: {
          start: this.today,
          end: this.nextSeven
        }
      }
    ];

    public overlaySettings: OverlaySettings = {
        outlet: this.element,
        modal: true
    };
}
```

### Formatting

The Date Range Picker Component supports different display and input formats.

The display format of the value can be one of the listed Angular [DatePipe](https://angular.io/api/common/DatePipe) formats. This allows it to support predefined format options, such as `shortDate` and `longDate`.

The `inputFormat` property accepts a constructed format string using characters supported by the DatePipe, e.g. `MM/dd/yyyy`, but doesn't support predefined format options, such as `shortDate` and `longDate`. If the `inputFormat` property is not defined then the [Angular locale ID](https://angular.io/api/core/LOCALE_ID) token is used when building it.

```html
<igx-date-range-picker [(ngModel)]="range" required
    inputFormat="dd/MM/yyyy" displayFormat="shortDate">
</igx-date-range-picker>
```

If the [`inputFormat`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdaterangepickercomponent.html#inputFormat) property is not set, the input format will be inferred from the [`displayFormat`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdaterangepickercomponent.html#displayFormat) in case it can be parsed as containing numeric date-time parts only.

>[!NOTE]
> The `IgxDateRangePicker` now supports IME input. When composition ends, the control converts the wide-character numbers to ASCII characters.

### Forms and Validation

The Date Range Picker Component supports all directives from the core [FormsModule](https://angular.io/api/forms/FormsModule), [NgModel](https://angular.io/api/forms/NgModel) and [ReactiveFormsModule](https://angular.io/api/forms/ReactiveFormsModule) ([`FormControl`](https://angular.io/api/forms/FormControl), [`FormGroup`](https://angular.io/api/forms/FormGroup), etc.). This also includes the [Forms Validators](https://angular.io/api/forms/Validators) functions. In addition, the component's [min and max values](#min-and-max-values) and [disabledDates](#disabled-and-special-dates) also act as form validators.

The [NgModel](https://angular.io/api/forms/NgModel) and validators can be set on the [`IgxDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdaterangepickercomponent.html) or on the individual start and end date inputs.

The following snippets and examples illustrate the use of the `required` validator in a Template-driven form.

First, we need to set up the model for a single read-only range component, which is done on the component level:

```html
<igx-date-range-picker [(ngModel)]="range" required>
    <label igxLabel>Period</label>
</igx-date-range-picker>
```

The same configuration can be used when setting two separate inputs. Note that in this case, validation is also applied to both inputs.

```html
<igx-date-range-picker [(ngModel)]="range" required>
    <igx-date-range-start>
        <label igxLabel>Start Date</label>
        <input igxInput igxDateTimeEditor type="text">
        <igx-picker-toggle igxPrefix>
            <igx-icon>calendar_today</igx-icon>
        </igx-picker-toggle>
    </igx-date-range-start>
    <igx-date-range-end>
        <label igxLabel>End Date</label>
        <input igxInput igxDateTimeEditor type="text">
    </igx-date-range-end>
</igx-date-range-picker>
```

When using two separate inputs, it is possible to set the model and required properties on each input. Note that validation is specific for each individual input.

```html
<igx-date-range-picker>
    <igx-date-range-start>
        <input igxInput igxDateTimeEditor [(ngModel)]="range.start" type="text" required>
    </igx-date-range-start>
    <igx-date-range-end>
        <input igxInput igxDateTimeEditor [(ngModel)]="range.end" type="text" required>
    </igx-date-range-end>
</igx-date-range-picker>
```

```typescript
import { Component } from '@angular/core';
import { DateRange, IgxPickerClearComponent, IgxPickerToggleComponent } from 'igniteui-angular/core';
import { IgxDateRangeEndComponent, IgxDateRangePickerComponent, IgxDateRangeStartComponent } from 'igniteui-angular/date-picker';
import { IgxInputDirective, IgxLabelDirective, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxDateTimeEditorDirective } from 'igniteui-angular/directives';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-daterangepicker-validation',
    styleUrls: ['./daterangepicker-validation.scss'],
    templateUrl: './daterangepicker-validation.html',
    imports: [IgxDateRangePickerComponent, FormsModule, IgxLabelDirective, IgxDateRangeStartComponent, IgxPickerToggleComponent,
              IgxPrefixDirective, IgxIconComponent, IgxInputDirective, IgxDateTimeEditorDirective, IgxDateRangeEndComponent,
              IgxSuffixDirective, IgxPickerClearComponent]
})
export class DateRangePickerValidationComponent {
    public rangeSingle: DateRange;
    public rangeSeparate: DateRange;
    public startDate: Date;
    public endDate: Date;
}
```

<div class="divider--half"></div>

### Min and max values

You can specify [`minValue`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdaterangepickercomponent.html#minValue) and [`maxValue`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdaterangepickercomponent.html#maxValue) properties to restrict the user input by disabling calendar dates that are outside the range defined by those values.

```typescript
public minDate = new Date(2020, 1, 15);
public maxDate = new Date(2020, 11, 1);
```

```html
<igx-date-range-picker [(ngModel)]="range" required
    [minValue]="minDate" [maxValue]="maxDate">
</igx-date-range-picker>
```

```html
<igx-date-range-picker [minValue]="minDate" [maxValue]="maxDate">
    <igx-date-range-start>
        <input igxInput igxDateTimeEditor [(ngModel)]="range.start" type="text" required>
    </igx-date-range-start>
    <igx-date-range-end>
        <input igxInput igxDateTimeEditor [(ngModel)]="range.end" type="text" required>
    </igx-date-range-end>
</igx-date-range-picker>
```

The `IgxDateRangePickerComponent` is also a validator which means it controls its validity internally using `minValue` and `maxValue`. You can also access both of them through `ngModel`:

```html
<igx-date-range-picker #dateRangePicker="ngModel" [(ngModel)]="range" required
    [minValue]="minDate" [maxValue]="maxDate">
    <igx-date-range-start>
        <input igxInput igxDateTimeEditor type="text">
    </igx-date-range-start>
    <igx-date-range-end>
        <input igxInput igxDateTimeEditor type="text">
    </igx-date-range-end>
</igx-date-range-picker>

<!-- minValue & maxValue will be true if the current range does not satisfy them -->
<div *ngIf="dateRangePicker.minValue || dateRangePicker.maxValue">
    <p>Value not in range.</p>
</div>
```

### Disabled And Special dates

You also have the ability to set disabled dates in the calendar to narrow the range of dates the user can choose from. To set the disabled dates, you can use the [`disabledDates`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdaterangepickercomponent.html#disabledDates) property.

```ts
export class DateRangeSampleComponent implements OnInit {
    @ViewChild('dateRange') public dateRange: IgxDateRangePicker;

    public minDate = new Date(2025, 4, 1);
    public maxDate = new Date(2025, 4, 31);

    public ngOnInit() {
        this.dateRange.disabledDates = [
        {
            type: DateRangeType.Between,
            dateRange: [minDate, maxDate]
        }
        ] as DateRangeDescriptor[];
    }
}
```

You can see more information about all the possibilities that the `DisabledDates` property offers here: [calendar disabled dates](calendar.md#how-to-disable-dates-in-angular-calendar).

You can also do the same if you want to set one or more special dates in the calendar; the only difference is that you need to use the `SpecialDates` property instead. [Special dates](./calendar.md#special-dates)

### Templating

When two editors are used, the default separator can be replaced using the [`igxDateRangeSeparator`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdaterangeseparatordirective.html) directive. Here is how to change the date separator to a hyphen `-`:

```html
<igx-date-range-picker>
    <igx-date-range-start>
        <input igxInput igxDateTimeEditor [(ngModel)]="range.start" type="text" required>
    </igx-date-range-start>
    <ng-template igxDateRangeSeparator>-</ng-template>
    <igx-date-range-end>
        <input igxInput igxDateTimeEditor [(ngModel)]="range.end" type="text" required>
    </igx-date-range-end>
</igx-date-range-picker>
```

### Calendar specific settings

You can further customize the pop-up calendar using various properties. More information on how these affect the calendar can be found in the [**IgxCalendarComponent**](calendar.md) topic.

|Name|Type|Description|
|--|--|--|
| `orientation` | 'vertical' or 'horizontal' | Allows you to set whether the calendar should be displayed vertically or horizontally. |
| `displayMonthsCount` | string | Controls how many months are visible at a time, with a value of either 1 or 2. |
| `showWeekNumbers` | string | Enables or disables the week number column in the calendar. |
| `weekStart` | string | Sets the start day of the week. |
| `hideOutsideDays` | boolean | Hides days that fall outside the current month view. |
| `hideHeader` | boolean | Hides the calendar header (applicable only in dialog mode). |
| `headerOrientation` | 'vertical' or 'horizontal' | Aligns the calendar header vertically or horizontally (dialog mode only). |
| `activeDate` | Date | Sets the date that is initially highlighted in the calendar. If not set, the current date becomes the active date. |

```html
 <igx-date-range-picker [hideHeader]="true"
                        [orientation]="'vertical'"
                        [headerOrientation]="'horizontal'"
                        [displayMonthsCount]="1">
</igx-date-range-picker>
```

The header, subheader and title parts of the calendar header can be customized by leveraging the `igxCalendarHeader`, `igxCalendarSubheader` and the `igxCalendarHeaderTitle` template directives, for example:

```html
<igx-date-range-picker [value]="date">
  <ng-template igxCalendarHeader let-format>
    {{ format.month.combined | titlecase }}{{format.day.combined }}{{ format.weekday.combined }}
  </ng-template>
  <ng-template igxCalendarSubheader let-format>
    <span (click)="format.yearView()">{{ format.year.combined }}</span>
    <span (click)="format.monthView()">{{ format.month.combined | titlecase }}</span>
  </ng-template>
    <ng-template igxCalendarHeaderTitle let-format>
    <span>My calendar</span>
  </ng-template>
</igx-date--range-picker>
```

## Styling

To get started with styling the `igxDateRangePicker`, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

The Date Range Picker Component exposes `date-range-picker-theme` and utilizes several components and directives, including `igxInputGroupComponent`, `igxCalendar` and `igxOverlay`. Any global styling for the aforementioned components and directives will affect the `igxDateRangeComponent`. As the Date Range Picker Component uses the input group and calendar themes, we have to create new themes that extend the [`calendar-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-calendar-theme) and [`input-group-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-input-group-theme) and use some of their parameters to style the date range picker in conjunction with the date range picker theme. We will use a single custom color palette to define the colors to use across all themes:

```scss
// COMMON
$purple: #9E379F;
$blue: #61AEDB;
$light-gray: #efefef;

$custom-palette: palette(
  $primary: $blue, 
  $secondary: $purple, 
  $surface: $light-gray
);

$today-text: color($custom-palette, "primary", 500);
$text-color: color($custom-palette, "secondary", 200);
$color-focused: color($custom-palette, "secondary", 500);

// DATE-RANGE
$custom-date-range-theme: date-range-picker-theme(
  $label-color: $color-focused
);

// INPUT GROUP
$custom-input-group-theme: input-group-theme(
  $filled-text-color: $text-color,
  $idle-text-color: $text-color,
  $focused-text-color: $color-focused,
  $idle-bottom-line-color: $purple,
  $hover-bottom-line-color: $color-focused,
  $interim-bottom-line-color: $color-focused
);

// CALENDAR
$custom-calendar-theme: calendar-theme(
  $date-current-foreground: $today-text,
  $border-radius: 0.5,
  $date-border-radius: 0.5
);
```

The last step is to pass the custom themes:

```scss
@include css-vars($custom-date-range-theme);
@include css-vars($custom-input-group-theme);
@include css-vars($custom-calendar-theme);
```

>[!WARNING]
>If the component is using an [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`

```scss
:host {
  ::ng-deep {
    @include date-range-picker($custom-date-range-theme);
    @include input-group($custom-input-group-theme);
    @include calendar($custom-calendar-theme);
  }
}
```

### Scoping Styles

Regarding style scoping, you should refer to both styling sections [Overlay Scoped Component Styles](overlay-styling.md#Scoped Overlay Styles) and [Input Group Scoping Styles](input-group.md#styling) as they provide more information.


```typescript
import { Component, ElementRef, inject } from '@angular/core';
import { DateRange, IgxPickerClearComponent, IgxPickerToggleComponent } from 'igniteui-angular/core';
import { IgxDateRangeEndComponent, IgxDateRangePickerComponent, IgxDateRangeStartComponent } from 'igniteui-angular/date-picker';
import { IgxInputDirective, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxDateTimeEditorDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-styled-rangedatepicker',
    styleUrls: ['./daterangepicker-styling.scss'],
    templateUrl: './daterangepicker-styling.html',
    imports: [IgxDateRangePickerComponent, FormsModule, IgxDateRangeStartComponent, IgxInputDirective, IgxDateTimeEditorDirective,
              IgxPickerToggleComponent, IgxPrefixDirective, IgxIconComponent, IgxDateRangeEndComponent, IgxSuffixDirective, IgxPickerClearComponent]
})
export class StyledDateRangePickerComponent {
    element = inject(ElementRef);

    public range: DateRange = { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };
}
```


## Application Demo

The demo below defines a form for flight tickets that uses the [`IgxDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdaterangepickercomponent.html). If no dates are selected, an [`IgxHint`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhintdirective.html) is used to display a validation error. The selection of the dates is restricted by the [`minValue`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdaterangepickercomponent.html#minValue) and [`maxValue`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdaterangepickercomponent.html#maxValue) properties of the [`IgxDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdaterangepickercomponent.html)


```typescript
import { Component, Pipe, PipeTransform } from '@angular/core';
import { DateRange } from 'igniteui-angular/core';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxHintDirective, IgxLabelDirective, IgxPrefixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxDateRangePickerComponent } from 'igniteui-angular/date-picker';
import { FormsModule } from '@angular/forms';

import { PipeWithoutTownFrom as PipeWithoutTownFrom_1 } from '../../datepicker/datepicker-sample-9/datepicker-sample-9.component';

@Component({
    selector: 'app-flight-booking',
    styleUrls: ['./daterangepicker-flight-booking.scss'],
    templateUrl: './daterangepicker-flight-booking.html',
    imports: [FormsModule, IgxSelectComponent, IgxPrefixDirective, IgxIconComponent, IgxSelectItemComponent, IgxDateRangePickerComponent, IgxLabelDirective, IgxHintDirective, PipeWithoutTownFrom_1]
})
export class FlightBookingComponent {
    public towns: string[] = [
        'New York',
        'Washington, D.C.',
        'London',
        'Berlin',
        'Sofia',
        'Rome',
        'Kiev',
        'Copenhagen',
        'Paris',
        'Barcelona',
        'Vienna',
        'Athens',
        'Dublin',
        'Yerevan',
        'Oslo',
        'Helsinki',
        'Stockholm',
        'Prague',
        'Istanbul'
    ];
    public townFrom = 'Barcelona';
    public townTo = 'New York';
    public minDate: Date;
    public maxDate: Date;
    public range: DateRange;

    constructor() {
        this.minDate = new Date();

        this.maxDate = new Date();
        this.maxDate.setMonth(this.maxDate.getMonth() + 1);
    }
}

@Pipe({
    name: 'withoutTownFrom'
})
export class PipeWithoutTownFrom implements PipeTransform {
    public transform(collection: any[], townFrom: string) {
        return collection.filter((item) => item !== townFrom);
    }
}
```

<div class="divider--half"></div>

## API References

<div class="divider--half"></div>

- [IgxDateRangePickerComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdaterangepickercomponent.html)
- [IgxCalendarComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcalendarcomponent.html)
- [IgxCalendarComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-calendar-theme)
- [IgxOverlay Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-overlay-theme)
- [IgxInputGroupComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinputgroupcomponent.html)

## Theming Dependencies

- [IgxCalendar Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-calendar-theme)
- [IgxOverlay Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-overlay-theme)
- [IgxIcon Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-icon-theme)
- [IgxButton Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-button-theme)
- [IgxInputGroup Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-input-group-theme)
- [IgxDropDown Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-drop-down-theme)

## Additional Resources

Related topics:

- [Date Time Editor](date-time-editor.md)
- [Label & Input](label-input.md)
- [Reactive Forms Integration](angular-reactive-form-validation.md)
- [Date Picker](date-picker.md)


Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
