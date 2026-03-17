---
title: Angular Calendar Component – Ignite UI for Angular | MIT license 
_description: With Angular Calendar Component, users can create intuitive calendars for applications to display date information using three different selection modes. Try it Now
_keywords: angular calendar, angular calendar component, angular UI components, angular UI library, ignite ui for angular
_license: MIT
_tocName: Calendar
---

# Angular Calendar Component Overview

Angular Calendar is a UI component used for displaying dates and days in an app. Supporting different features, it enables users to easily manage calendar functionalities, drag and create events in a calendar, navigate to a preferred date in it, and show events in an Angular calendar month view, week view, or day view in a single click.

<p class="highlight">

The Ignite UI for Angular Calendar component, developed as a native [Angular component](https://angular.io/guide/architecture#components), provides an easy and intuitive ways to display date information, enable dates or apply Angular calendar disable dates mode. Users can choose from three different selection modes - single selection, multi selection or range selection.
</p>

## Angular Calendar Example

We created the following Angular Calendar example using the Ignite UI for Angular Calendar package. It quickly shows how a basic calendar looks and feels like, how users can choose and highlight a single date, and how to move back and forth to a specific date.

<div class="divider--half"></div>

```typescript
import { Component } from '@angular/core';
import { IgxCalendarComponent } from 'igniteui-angular/calendar';

@Component({
    selector: 'app-calendar',
    styleUrls: ['./calendar-sample-5.component.scss'],
    templateUrl: './calendar-sample-5.component.html',
    imports: [IgxCalendarComponent]
})
export class CalendarSample5Component { }
```
```html
<article class="calendar-wrapper">
    <igx-calendar></igx-calendar>
</article>
```
```scss
@use '../../../../variables' as *;

$border-color: color($color: gray, $variant: 300);

.calendar-wrapper {
    max-width: 500px;
    min-width: 200px;
    border: 1px solid $border-color;
    border-radius: 6px;
    margin: 8px;
}

.igx-calendar {
	--ig-size: 2;
	
    border-radius: 4px;
}
```


## Getting Started with Ignite UI for Angular Calendar

To get started with the Ignite UI for Angular Calendar component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxCalendarModule` in your **app.module.ts** file.

>[!NOTE]
> The [**IgxCalendarComponent**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcalendarcomponent.html) also depends on the [`BrowserAnimationsModule`](https://angular.io/api/platform-browser/animations/BrowserAnimationsModule) and **optionally** the [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) for touch interactions, so they need to be added to the AppModule as well:

```typescript
// app.module.ts
...
import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxCalendarModule } from 'igniteui-angular/calendar';
// import { IgxCalendarModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., BrowserAnimationsModule, HammerModule, IgxCalendarModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxCalendarComponent` as a standalone dependency, or use the [`IGX_CALENDAR_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/calendar/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_CALENDAR_DIRECTIVES } from 'igniteui-angular/calendar';
// import { IGX_CALENDAR_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igx-calendar></igx-calendar>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [BrowserAnimationsModule, HammerModule, IGX_CALENDAR_DIRECTIVES]
    /* or imports: [BrowserAnimationsModule, HammerModule, IgxCalendarComponent] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Calendar module or directives imported, you can start using the `igx-calendar` component.

> [!NOTE]
> The [`IgxCalendarComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcalendarcomponent.html) uses the [Intl Web API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) for localization and formatting of dates.
Consider using [appropriate polyfills](https://github.com/andyearnshaw/Intl.js/) if your target platform does not support them.

## Using the Angular Calendar

### Angular Single Selection Calendar

Instantiating the `IgxCalendarComponent` is as easy as placing its selector element in the template. This will display the current month in the single selection calendar mode.

```html
<!-- app.component.html -->
<!-- Single selection mode -->
<igx-calendar></igx-calendar>
```

### Angular Calendar Multiselect  

We can easily change the default mode using the [`selection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcalendarcomponent.html#selection) property:

```html
<!-- app.component.html -->
<!-- Multi selection mode -->
<igx-calendar selection="multi" [showWeekNumbers]="true"></igx-calendar>
```


```typescript
import { Component } from '@angular/core';
import { IgxCalendarComponent } from 'igniteui-angular/calendar';

@Component({
    selector: 'app-calendar',
    styleUrls: ['./calendar-sample-1.component.scss'],
    templateUrl: './calendar-sample-1.component.html',
    imports: [IgxCalendarComponent]
})
export class CalendarSample1Component { }
```
```html
<article class="calendar-wrapper">
    <igx-calendar selection="multi" [showWeekNumbers]="true"></igx-calendar>
</article>
```
```scss
.calendar-wrapper {
    max-width: 400px;
    min-width: 200px;
    margin: 8px;
}

.igx-calendar {
	--ig-size: 2;
	
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.26),
    0 1px 1px 0 rgba(0,0,0,.12),
    0 2px 1px -1px rgba(0,0,0,.08);
 }
```


### Angular Calendar Range Picker

Following the same approach, we can switch to range selection mode:

```html
<!-- app.component.html -->
<!-- Range selection mode -->
<igx-calendar selection="range"></igx-calendar>
```


```typescript
import { Component } from '@angular/core';
import { IgxCalendarComponent } from 'igniteui-angular/calendar';

@Component({
    selector: 'app-calendar',
    styleUrls: ['./calendar-sample-8.component.scss'],
    templateUrl: './calendar-sample-8.component.html',
    imports: [IgxCalendarComponent]
})
export class CalendarSample8Component { }
```
```html
<article class="calendar-wrapper">
    <igx-calendar selection="range"></igx-calendar>
</article>
```
```scss
.calendar-wrapper {
	--ig-size: 2;
	
    max-width: 400px;
    min-width: 200px;
    margin: 8px;
}

.igx-calendar{
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.26),
    0 1px 1px 0 rgba(0,0,0,.12),
    0 2px 1px -1px rgba(0,0,0,.08);
}
```


> [!NOTE]
> Notice that the calendar header is not rendered when the selection is either `multi` or `range`.

### Localization and Formatting

Due to their very nature, localization and formatting are essential to any calendar. In the `IgxCalendarComponent` those are controlled and customized through the following properties - [`locale`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcalendarcomponent.html#locale), [`formatOptions`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcalendarcomponent.html#formatoptions), [`formatViews`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcalendarcomponent.html#formatViews), [`weekStart`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcalendarcomponent.html#weekStart).

Let's go ahead and try those along with other customizations from the `IgxCalendarComponent API`. First thing we need to set is the `weekStart`, which controls the starting day of the week. It defaults to 0, which corresponds to Sunday, so we will set a value of 1 for Monday. In the markup below we are also binding the `formatOptions` and `formatViews` properties to customize the display formatting. Finally, we are binding the `locale` property to a value, based on the user's location choice:

```html
<!-- app.component.html -->
<igx-select #select [(ngModel)]="locale">
    <igx-select-item *ngFor="let locale of locales" [value]="locale">
        {{ locale }}
    </igx-select-item>
</igx-select>

<igx-calendar #calendar
    [weekStart]="1"
    [locale]="locale"
    [formatOptions]="formatOptions"
    [formatViews]="formatViews">
</igx-calendar>
```

All property values should be set in the AppComponent file:

```typescript
// app.component.ts
@ViewChild('calendar', { read: IgxCalendarComponent }) public calendar: IgxCalendarComponent;

public formatOptions: any;
public formatViews: any;
public locales = ['EN', 'DE', 'FR', 'AR', 'ZH'];
public locale = 'EN';

public ngOnInit() {
    this.formatOptions = { day: '2-digit', month: 'long', weekday: 'long', year: 'numeric' };
    this.formatViews = { day: true, month: true, year: true };
}
```

If everything went well, we should now have a calendar with customized dates display, that also changes the locale representation, based on the user location. Let's have a look at it:


```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxCalendarComponent } from 'igniteui-angular/calendar';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxPrefixDirective } from 'igniteui-angular/input-group';
import { registerLocaleData } from '@angular/common';
import localeDE from '@angular/common/locales/de';
import localeFR from '@angular/common/locales/fr';
import localeAR from '@angular/common/locales/ar';
import localeZH from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-calendar',
    styleUrls: ['./calendar-sample-2.component.scss'],
    templateUrl: './calendar-sample-2.component.html',
    imports: [IgxSelectComponent, FormsModule, IgxPrefixDirective, IgxSelectItemComponent, IgxCalendarComponent]
})
export class CalendarSample2Component implements OnInit{
    @ViewChild('calendar', { read: IgxCalendarComponent }) public calendar: IgxCalendarComponent;

    public formatOptions: any;
    public formatViews: any;
    public locales = ['EN', 'DE', 'FR', 'AR', 'ZH'];
    public locale = 'EN';

    public ngOnInit() {
        this.formatOptions = { day: '2-digit', month: 'long', weekday: 'long', year: 'numeric' };
        this.formatViews = { day: true, month: true, year: true };

        registerLocaleData(localeDE);
        registerLocaleData(localeFR);
        registerLocaleData(localeAR);
        registerLocaleData(localeZH);
    }
}
```
```html
<article class="sample-column location-wrapper">
  <igx-select #select [(ngModel)]="locale">
    <igx-prefix>Location: </igx-prefix>
    @for (locale of locales; track locale) {
      <igx-select-item [value]="locale">
        {{ locale }}
      </igx-select-item>
    }
  </igx-select>
</article>
<article class="sample-column calendar-wrapper">
  <igx-calendar
    #calendar
    [locale]="locale"
    [weekStart]="1"
    [formatOptions]="formatOptions"
    [formatViews]="formatViews"
    >
  </igx-calendar>
</article>
```
```scss
@use '../../../../variables' as *;

.calendar-wrapper {
    max-width: 650px;
    min-width: 300px;
    margin: 8px;
    border: 1px solid color($color: 'gray', $variant: 300);
    border-radius: 6px;
}

.igx-calendar {
	--ig-size: 2;
}

.location-wrapper {
    min-width: 200px;
    max-width: 640px;
    margin-bottom: 32px;
}
```


### How to Disable Dates In Angular Calendar

This section demonstrates the usage of [`disabledDates`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcalendarcomponent.html#disabledDates) functionality. For this purpose, different single dates or ranges can be added to an array and then passed to the `disabledDates` descriptor.

The [`DateRangeType`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/daterangetype.html) is used to specify a range that is going to be disabled.

Let's create a sample that is disabling the dates between the 3rd and the 8th of the current month:

```typescript
export class CalendarSample6Component {
    @ViewChild('calendar') public calendar: IgxCalendarComponent;
    public today = new Date(Date.now());
    public range = [
        new Date(this.today.getFullYear(), this.today.getMonth(), 3),
        new Date(this.today.getFullYear(), this.today.getMonth(), 8)
    ];

    public ngOnInit() {
        this.calendar.disabledDates = [{ type: DateRangeType.Between, dateRange: this.range }];
    }
}
```

These configurations should have the following result:


```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { DateRangeType } from 'igniteui-angular/core';
import { IgxCalendarComponent } from 'igniteui-angular/calendar';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-calendar',
    styleUrls: ['./calendar-sample-6.component.scss'],
    templateUrl: './calendar-sample-6.component.html',
    imports: [IgxCalendarComponent, DatePipe]
})
export class CalendarSample6Component implements OnInit{
    @ViewChild('calendar', { static: true }) public calendar: IgxCalendarComponent;
    public today = new Date(Date.now());
    public range = [
        new Date(this.today.getFullYear(), this.today.getMonth(), 3),
        new Date(this.today.getFullYear(), this.today.getMonth(), 8)
    ];

    public ngOnInit() {
        this.calendar.disabledDates = [{ type: DateRangeType.Between, dateRange: this.range }];
    }
}
```
```html
<article class="sample-column calendar-wrapper">
    <div class="info">
        <span>Disabled dates range from <b>{{ range[0] | date }}</b> to <b>{{ range[1] | date }}</b></span>
    </div>
    <igx-calendar #calendar weekstart="1" [selection]="'multi'">
    </igx-calendar>
</article>
```
```scss
.calendar-wrapper {
    max-width: 700px;
    min-width: 200px;
    margin: 8px;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.26),
    0 1px 1px 0 rgba(0,0,0,.12),
    0 2px 1px -1px rgba(0,0,0,.08);
}

.igx-calendar {
	--ig-size: 2;
}

.info {
    display: flex;
    justify-content: center;
    background: var(--ig-surface-500);
}

.info > span {
    color: var(--ig-secondary-400);
    font-weight: 600;
    font-size: 0.875rem;
    letter-spacing: 0.046875rem;
    text-transform: uppercase;
    line-height: 1rem;
    margin: 16px;
}
```


### Special dates

The [`specialDates`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcalendarcomponent.html#specialDates) feature is using almost the same configuration principles as the `disabledDates`. The ability to select and focus `specialDates` is what differs them from the `disabled` ones.

Let's add some `specialDates` to our `igxCalendar`. In order to do this, we have to create a [`DateRangeDescriptor`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/daterangedescriptor.html) item of type [`DateRangeType.Specific`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/daterangetype.html#specific) and pass an array of dates as a [`dateRange`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/daterangedescriptor.html#dateRange):

```typescript
export class CalendarSample7Component {
    @ViewChild('calendar', { static: true })
    public calendar: IgxCalendarComponent;
    @ViewChild('alert', { static: true })
    public dialog: IgxDialogComponent;
    public range = [];

    public selectPTOdays(dates: Date[]) {
        this.range = dates;
    }

    public submitPTOdays(eventArgs) {
        this.calendar.specialDates =
            [{ type: DateRangeType.Specific, dateRange: this.range }];

        this.range.forEach((item) => {
            this.calendar.selectDate(item);
        });

        ...
    }
}
```

```html
<igx-calendar #calendar weekStart="1"
    selection="multi"
    (selected)="selectPTOdays($event)">
</igx-calendar>
<igx-dialog #alert title="Request Time Off"
    leftButtonLabel="OK"
    (leftButtonSelect)="alert.close()">
</igx-dialog>
<button igxButton="contained" (click)="submitPTOdays($event)">Submit Request</button>
```

The following demo illustrates a calendar with a vacation request option:


```typescript
import { Component, ViewChild } from '@angular/core';
import { DateRangeType } from 'igniteui-angular/core';
import { IgxCalendarComponent } from 'igniteui-angular/calendar';
import { IgxDialogComponent } from 'igniteui-angular/dialog';
import { IgxButtonDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-calendar',
    styleUrls: ['./calendar-sample-7.component.scss'],
    templateUrl: './calendar-sample-7.component.html',
    imports: [IgxCalendarComponent, IgxDialogComponent, IgxButtonDirective]
})
export class CalendarSample7Component {
    @ViewChild('calendar', { static: true }) public calendar: IgxCalendarComponent;
    @ViewChild('alert', { static: true }) public dialog: IgxDialogComponent;
    public range = [];

    public selectPTOdays(dates: Date | Date[]) {
        this.range = dates as Date[];
    }

    public submitPTOdays() {
        this.calendar.specialDates =
            [{ type: DateRangeType.Specific, dateRange: this.range }];

        this.range.forEach((item) => {
            this.calendar.selectDate(item);
        });

        if (this.range.length === 0) {
            this.dialog.message = 'Select dates from the Calendar first.';
        } else {
            this.dialog.message = 'PTO days submitted.';
        }
        this.dialog.open();
    }
}
```
```html
<article class="sample-column calendar-wrapper">
    <igx-calendar #calendar [weekStart]="1" selection="multi" (selected)="selectPTOdays($event)">
    </igx-calendar>
    <igx-dialog #alert title="Request Time Off" leftButtonLabel="OK" (leftButtonSelect)="alert.close()">
    </igx-dialog>
    <button igxButton="contained" (click)="submitPTOdays()">Submit Request</button>
</article>
```
```scss
.calendar-wrapper {
	--ig-size: 2;
	
    max-width: 700px;
    min-width: 200px;
    margin: 8px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.26),
    0 1px 1px 0 rgba(0, 0, 0, 0.12),
    0 2px 1px -1px rgba(0, 0, 0, 0.08);
}

.igx-calendar {
    border-radius: 0;
}

.igx-button--contained {
    border-radius: 0;
}
```


### Week numbers

You can now use [`showWeekNumbers`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcalendarcomponent.html#showWeekNumbers) input to show the week numbers for both Calendar and DatePicker components.

```html

<!-- app.component.html -->
<igx-calendar selection="multi" [showWeekNumbers]="true"></igx-calendar>
```

The following demo illustrates a calendar with enabled week numbers:


```typescript
import { Component } from '@angular/core';
import { IgxCalendarComponent } from 'igniteui-angular/calendar';

@Component({
    selector: 'app-calendar',
    styleUrls: ['./calendar-sample-1.component.scss'],
    templateUrl: './calendar-sample-1.component.html',
    imports: [IgxCalendarComponent]
})
export class CalendarSample1Component { }
```
```html
<article class="calendar-wrapper">
    <igx-calendar selection="multi" [showWeekNumbers]="true"></igx-calendar>
</article>
```
```scss
.calendar-wrapper {
    max-width: 400px;
    min-width: 200px;
    margin: 8px;
}

.igx-calendar {
	--ig-size: 2;
	
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.26),
    0 1px 1px 0 rgba(0,0,0,.12),
    0 2px 1px -1px rgba(0,0,0,.08);
 }
```


## Calendar Events

Let's explore the events emitted by the calendar:

- [`selected`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcalendarcomponent.html#selected) - emitted when selecting date(s) in the calendar.
- [`viewDateChanged`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcalendarcomponent.html#viewDateChanged) - emitted every time when the presented month/year is changed - for example after navigating to the `next` or `previous` month.
- [`activeViewChanged`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcalendarcomponent.html#activeViewChanged) - emitted after the active view is changed - for example after the user has clicked on the `month` or `year` section in the header.

```html
<!-- app.component.html -->
<igx-calendar #calendar
    (selected)="onSelection($event)"
    (viewDateChanged)="viewDateChanged($event)"
    (activeViewChanged)="activeViewChanged($event)">
</igx-calendar>
```

The [`selected`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcalendarcomponent.html#selected) event is suitable to build input validation logic. Use the code from below to alert the user if selection exceeds 5 days, and then reset the selection:

```typescript
// app.component.ts
...
public onSelection(dates: Date[]) {
    if (dates.length > 5) {
        this.calendar.selectedDates = [];
        // alert the user
    }
}
public viewDateChanged(event: IViewDateChangeEventArgs) {
    // use event.previousValue to get previous month/year that was presented.
    // use event.currentValue to get current month/year that is presented.
}

public activeViewChanged(event: CalendarView) {
    // use CalendarView[event] to get the current active view (DEFAULT, YEAR or DECADE)
}
```

Use the demo below to play around (change selection, navigate through months and years) and see the events logged real time:

```typescript
import { Component, ViewChild, DOCUMENT, inject } from '@angular/core';
import { IViewDateChangeEventArgs, IgxCalendarComponent, IgxCalendarView } from 'igniteui-angular/calendar';
import { IgxDialogComponent } from 'igniteui-angular/dialog';

@Component({
    selector: 'app-calendar',
    styleUrls: ['./calendar-sample-3.component.scss'],
    templateUrl: './calendar-sample-3.component.html',
    imports: [IgxCalendarComponent]
})
export class CalendarSample3Component {
    private document = inject<Document>(DOCUMENT);

    @ViewChild('calendar', { static: true }) public calendar: IgxCalendarComponent;
    @ViewChild('alert', { static: true }) public dialog: IgxDialogComponent;
    public loggerHeader = `Interact with the calendar to see the events logged here in sequence:`;

    public onSelection(dates: Date | Date[]) {
      const logger: HTMLElement = this.document.querySelector('.logger');
      dates = dates as Date[];
      logger.innerHTML = `<span> => 'onSelectionChanged': ${dates.length} dates selected.<br>${logger.innerHTML}`;
    }

    public viewDateChanged(event: IViewDateChangeEventArgs) {
        const logger: HTMLElement = this.document.querySelector('.logger');
        // eslint-disable-next-line max-len
        const eventArgs = `event.previousValue: ${this.parseDate(event.previousValue)} | event.currentValue: ${this.parseDate(event.currentValue)}`;
        logger.innerHTML = `<span> => 'viewDateChanged': ${eventArgs}</span><br>${logger.innerHTML}`;
    }

    public activeViewChanged(event: IgxCalendarView) {
        const logger: HTMLElement = this.document.querySelector('.logger');
        logger.innerHTML = `<span> => 'activeViewChanged':. Active view is: ${IgxCalendarView[event]}</span><br>${logger.innerHTML}`;
    }

    private parseDate(date: Date) {
        const monthFormatter = new Intl.DateTimeFormat('en', { month: 'long' });
        return `${monthFormatter.format(date)} ${date.getFullYear()}`;
    }
}
```
```html
<div class="calendar-section">
    <article class="calendar-wrapper">
        <igx-calendar #calendar selection="multi" (selected)="onSelection($event)" (viewDateChanged)="viewDateChanged($event)" (activeViewChanged)="activeViewChanged($event)"></igx-calendar>
    </article>
</div>
<div class="calendar-section">
    <div class="selected-data-area">
        <div class="logContainer">
            <div class="highlight">
                <span>{{loggerHeader}}</span>
            </div>
            <div class="logger"></div>
        </div>
    </div>
</div>
```
```scss
.igx-calendar {
	--ig-size: 2;
	
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.26),
    0 1px 1px 0 rgba(0,0,0,.12),
    0 2px 1px -1px rgba(0,0,0,.08);
 }
 
 :host {
     display: flex;
     width: 100%;
	 gap: 16px;
     flex-flow: row wrap;
 }
 
 button {
     margin: 8px 0;
 }
 
 .calendar-wrapper {
     width: 300px;
     margin: 8px;
 }
 
 .calendar-section {
     height: 336px;
 }
 
 .selected-data-area {
     overflow-y: auto;
     max-height: 500px;
     width: 100%;
     height: 100%;
     box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
     margin-top: 8px;
 }
 
 .logContainer {
     padding: 0.2rem 0.4rem;
 }

 .highlight {
    background-color: rgba(0,153,255, 0.1);
    margin-bottom: 0.4rem;
 }
```


## Angular Calendar Views

There are separate views provided by the `IgxCalendarModule` that can be used independently:

- Angular Calendar Days View  - [`igx-days-view`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdaysviewcomponent.html)


```typescript
import { Component } from '@angular/core';
import { IgxCardComponent, IgxCardContentDirective, IgxCardHeaderComponent } from 'igniteui-angular/card';
import { IgxDaysViewComponent } from 'igniteui-angular/calendar';

@Component({
    selector: 'app-calendar-views',
    styleUrls: ['./calendar-days-view.component.scss'],
    templateUrl: './calendar-days-view.component.html',
    imports: [IgxCardComponent, IgxCardHeaderComponent, IgxCardContentDirective, IgxDaysViewComponent]
})
export class CalendarDaysViewComponent { }
```
```html
<igx-card elevated>
    <igx-card-header>
        <h5 class="igx-card-header__title">Days View</h5>
    </igx-card-header>
    <igx-card-content>
        <igx-days-view [selection]="'single'"></igx-days-view>
    </igx-card-content>
</igx-card>
```
```scss
.igx-card {
    max-width: 500px;
    min-width: 200px;
    margin: 8px;
}

.igx-calendar {
	--ig-size: 2;
}
```


- Angular Calendar Month View  - [`igx-months-view`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxmonthsviewcomponent.html)


```typescript
import { Component } from '@angular/core';
import { IgxCardComponent, IgxCardContentDirective, IgxCardHeaderComponent } from 'igniteui-angular/card';
import { IgxMonthsViewComponent } from 'igniteui-angular/calendar';

@Component({
    selector: 'app-calendar-views',
    styleUrls: ['./calendar-months-view.component.scss'],
    templateUrl: './calendar-months-view.component.html',
    imports: [IgxCardComponent, IgxCardHeaderComponent, IgxCardContentDirective, IgxMonthsViewComponent]
})
export class CalendarMonthsViewComponent { }
```
```html
<igx-card elevated>
    <igx-card-header>
        <h5 class="igx-card-header__title">Months View</h5>
    </igx-card-header>
    <igx-card-content>
        <igx-months-view></igx-months-view>
    </igx-card-content>
</igx-card>
```
```scss
.igx-card {
    max-width: 500px;
    min-width: 200px;
    margin: 8px;
}

.igx-calendar {
	--ig-size: 2;
}
```


- Angular Calendar Year View  - [`igx-years-view`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxyearsviewcomponent.html)


```typescript
import { Component } from '@angular/core';
import { IgxCardComponent, IgxCardContentDirective, IgxCardHeaderComponent } from 'igniteui-angular/card';
import { IgxYearsViewComponent } from 'igniteui-angular/calendar';

@Component({
    selector: 'app-calendar-views',
    styleUrls: ['./calendar-years-view.component.scss'],
    templateUrl: './calendar-years-view.component.html',
    imports: [IgxCardComponent, IgxCardHeaderComponent, IgxCardContentDirective, IgxYearsViewComponent]
})
export class CalendarYearsViewComponent { }
```
```html
<igx-card elevated>
    <igx-card-header>
        <h5 class="igx-card-header__title">Years View</h5>
    </igx-card-header>
    <igx-card-content>
        <igx-years-view></igx-years-view>
    </igx-card-content>
</igx-card>
```
```scss
.igx-card {
    max-width: 500px;
    min-width: 200px;
    margin: 8px;
}

:host {
	igx-years-view {
		--ig-size: 2;
	}
}
```


## Keyboard navigation

If you traverse the page using _Tab key_ you should keep in mind that based on [W3 accessibility recommendations](https://www.w3.org/TR/wai-aria-practices/#layoutGrid) the _igxCalendarComponent_ now introduces the following tab stops:

- Previous month button
- Month selection button
- Year selection button
- Next month button
- Selected date, Current date, First focusable (not disabled) date in the days view

In an Angular Calendar that contains more than one selected dates, only the first date will be introduced as a tab stop. For example, when an Angular Calendar multi-select is enabled and you have selected the dates: _13/10/2020_, _17/10/2020_ and _21/10/2020_ only _13/10/2020_ will be accessible during tab navigation; in an Angular Calendar Range Picker, only the first date of the selected range will be part of the _page tab sequence_.

>[!NOTE]
> Behavioral change, from _v10.2.0_ - Tab key navigation in the _days view_ is no longer available. In order to navigate between the dates in the _date view_ you should use the _arrow keys_.

When the `igxCalendar` component is focused, use:

- <kbd>PageUp</kbd> key to move to the previous month,
- <kbd>PageDown</kbd> key to move to the next month,
- <kbd>Shift</kbd> + <kbd>PageUp</kbd> keys to move to the previous year,
- <kbd>Shift</kbd> + <kbd>PageDown</kbd> keys to move to the next year,
- <kbd>Home</kbd> key to focus the first day of the current month  or first month in view
- <kbd>End</kbd> key to focus the last day of the current month or last month in view

When the `prev` or the `next` month buttons (in the subheader) are focused, use:

- <kbd>Space</kbd> or <kbd>Enter</kbd> key to scroll into view the next or previous month.

When the `months` button (in the subheader) is focused, use:

- <kbd>Space</kbd> or <kbd>Enter</kbd> key to open the months view.

When the `year` button (in the subheader) is focused, use:

- <kbd>Space</kbd> or <kbd>Enter</kbd> key to open the decade view.

When a `day` inside the current month is focused:

- Use _Arrow keys_ to navigate through the days. Note: The disabled dates will be skipped.
- Focus will be persisted on the current month that is in the view, while navigation **from**/**to** the **last day**/**first day** of the month.
- THe kb navigation would be continuous, which means that it will go through all months while navigating with the arrows.
- Use <kbd>Enter key</kbd> to select the currently focused day.

When a `month` inside the months view is focused, use:

- Arrow keys to navigate through the months.
- <kbd>Home</kbd> key to focus the first month inside the months view.
- <kbd>End</kbd> key to focus the last month inside the months view.
- <kbd>Enter</kbd> key to select the currently focused month and close the view.

When an `year` inside the decade view is focused, use:

- <kbd>Arrow up</kbd> and <kbd>Arrow down</kbd> keys to navigate through the years,
- <kbd>Enter</kbd> key to select the currently focused year and close the view.

>[!NOTE]
>Following version 8.2.0, keyboard navigation will not focus days that are outside of current month, but will rather change the month in view.

## Multi View Calendar

Multi-view calendar supports all three types of selection. Use the [`monthsViewNumber`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcalendarcomponent.html#monthsViewNumber) input to set the number of displayed months, which will be shown horizontally in a flex container. There is no limit on the max value set. While using a multi view calendar, you may want to hide the days that do not belong to the current month. You are able to do it with the [`hideOutsideDays`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcalendarcomponent.html#hideOutsideDays) property.  Keyboard navigation moves to next/previous months when those are in view.


```typescript
import { Component, ViewChild } from '@angular/core';
import { IgxCalendarComponent } from 'igniteui-angular/calendar';
import { IgxDialogComponent } from 'igniteui-angular/dialog';
import { IgxButtonDirective } from 'igniteui-angular/directives';


@Component({
    selector: 'app-calendar',
    styleUrls: ['./multiview.component.scss'],
    templateUrl: './multiview.component.html',
    imports: [IgxCalendarComponent, IgxDialogComponent, IgxButtonDirective]
})
export class CalendarMultiViewComponent {
    @ViewChild('calendar', { static: true }) public calendar: IgxCalendarComponent;
    @ViewChild('alert', { static: true }) public dialog: IgxDialogComponent;
    public range = [];

    public selectDates(dates: Date | Date[]) {
        this.range = dates as Date[];
    }

    public submitDates() {
        if (this.range.length < 2) {
            this.dialog.message = 'Select dates from the Calendar first.';
        } else {
            this.dialog.message = 'Request for your stay has been submitted !';
        }
        this.dialog.open();
    }

    public formatDate(date: Date): string {
        return this.getDatePart(date, this.calendar, 'weekday') + ' ' +
            this.getDatePart(date, this.calendar, 'day') + ' ' +
            this.getDatePart(date, this.calendar, 'month');
    }

    public getDatePart(val: any, component: any, datePart: string) {
        const date = val as Date;
        const locale = component.locale;
        const formatOptions: Intl.DateTimeFormatOptions = {};
        formatOptions[datePart] = component.formatOptions[datePart];

        return date.toLocaleString(locale, formatOptions);
    }

    get action() {
        return this.range.length < 1 ? 'CHECK-IN' : 'CHECK-OUT';
    }

    get checkin() {
        const checkin = this.range[0];
        return this.formatDate(checkin);
    }

    get checkout() {
        const checkin = this.range[this.range.length - 1];
        return this.formatDate(checkin);
    }
}
```
```html
<article class="sample-column calendar-wrapper">
  <div class="stay__info">
    @if (range.length <= 1) {
      <span>{{ action }}</span>
    }
    @if (range.length > 1) {
      <span>{{ checkin }} - {{ checkout }} ({{ this.range.length - 1 }} nights stay)</span>
    }
  </div>
  <igx-calendar #calendar selection="range" [monthsViewNumber]="2" [hideOutsideDays]="true"
    (selected)="selectDates($event)">
  </igx-calendar>
  <igx-dialog #alert title="Availability" leftButtonLabel="OK" (leftButtonSelect)="alert.close()">
  </igx-dialog>
  <button igxButton="contained" (click)="submitDates()">Check Availability</button>
</article>
```
```scss
.calendar-wrapper {
    max-width: 900px;
    min-width: 200px;
    margin: 8px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.26),
    0 1px 1px 0 rgba(0, 0, 0, 0.12),
    0 2px 1px -1px rgba(0, 0, 0, 0.08);
}

.igx-calendar {
	--ig-size: 2;
	
    border-radius: 0;
}

.igx-button--contained {
    border-radius: 0;
}

.stay__info {
    display: flex;
    justify-content: center;
    background: var(--ig-surface-500);
}

.stay__info > span {
    color: var(--ig-secondary-400);
    font-weight: 600;
    font-size: 0.875rem;
    letter-spacing: 0.046875rem;
    text-transform: uppercase;
    line-height: 1rem;
    margin: 16px;
}
```

## Calendar Orientation

The orientation settings allows users to choose how the header and the view of the calendar are displayed.

### Header Orientation Options

You can change the header orientation to place the header of the calendar to be either horizontal(above the calendar view) or vertical(on the side of the calendar view).
To do that, use the `[headerOrientation]` property, setting it respectively to `horizontal` or `vertical`

### View Orientation Options

You can set the view orientation to place the months in the calendar either horizontally(side by side) or vertically(above one another).
To do that, use the `[orientation]` property, setting it respectively to `horizontal` or `vertical`.

>[!NOTE]
> You need at least two month view calendar to see that property working.

```html
<igx-calendar [monthsViewNumber]="2" [headerOrientation]="headerOrientation" [orientation]="orientation"></igx-calendar>
```

```typescript
const orientations = ["horizontal", "vertical"] as const;
type Orientation = (typeof orientations)[number];

export class CalendarSample9Component {
    protected orientations = Array.from(orientations, (o) => o);
    protected headerOrientation: Orientation = "horizontal";
    protected orientation: Orientation = "horizontal";

    protected setHeaderOrientation(orientation: Orientation) {
        this.headerOrientation = orientation;
    }

    protected setOrientation(orientation: Orientation) {
        this.orientation = orientation;
    }
}
```

```typescript
import { Component, ViewChild } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxCalendarComponent } from 'igniteui-angular/calendar';
import { IgxButtonDirective } from 'igniteui-angular/directives';


const orientations = ["horizontal", "vertical"] as const;
type Orientation = (typeof orientations)[number];

@Component({
    selector: 'app-calendar',
    styleUrls: ['./calendar-sample-9.component.scss'],
    templateUrl: './calendar-sample-9.component.html',
    imports: [IgxCalendarComponent, IgxButtonGroupComponent, IgxButtonDirective]
})

export class CalendarSample9Component {
    @ViewChild(IgxButtonGroupComponent, { static: true }) public buttonGroup: IgxButtonGroupComponent;
    protected orientations = Array.from(orientations, (o) => o);
    protected headerOrientation: Orientation = "horizontal";
    protected orientation: Orientation = "horizontal";

    protected setHeaderOrientation(orientation: Orientation) {
        this.headerOrientation = orientation;
    }

    protected setOrientation(orientation: Orientation) {
        this.orientation = orientation;
    }
}
```
```html
<div class="preview__sample">
  <article class="calendar-wrapper">
    <igx-calendar [monthsViewNumber]="2" [headerOrientation]="headerOrientation" [orientation]="orientation"></igx-calendar>
  </article>

  <div class="preview__settings">
    <small>Header orientation</small>
    <igx-buttongroup selectionMode="singleRequired">
      @for (ho of orientations; track ho) {
        <button
          igxButton
          (click)="setHeaderOrientation(ho)"
          [selected]="ho === headerOrientation"
          >
          {{ ho }}
        </button>
      }
    </igx-buttongroup>

    <small>View orientation</small>
    <igx-buttongroup selectionMode="singleRequired">
      @for (vo of orientations; track vo) {
        <button
          igxButton
          (click)="setOrientation(vo)"
          [selected]="vo === orientation"
          >
          {{ vo }}
        </button>
      }
    </igx-buttongroup>
  </div>
</div>
```
```scss
$padding: 2rem;

:host {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 90px);
    overflow: hidden;
}

small {
    &:not(:first-child) {
        margin-block-start: 1rem;
    }
}

.calendar-wrapper {
    flex-basis: 100px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 20px;
}

.igx-calendar{
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.26),
    0 1px 1px 0 rgba(0,0,0,.12),
    0 2px 1px -1px rgba(0,0,0,.08);
}

.preview {
    display: flex;
    overflow: hidden;
    height: 100%;

    &__sample {
        display: flex;
        flex-wrap: wrap;
        overflow: auto;
        flex: 1;
    }

    &__settings {
        display: flex;
        flex-direction: column;
        gap: 8px;
        background: hsla(var(--ig-gray-50));
        border-left: 1px solid var(--ig-gray-300);
        padding: $padding;
        overflow-x: auto;
    }
}
```

## Styling

### Calendar Theme Property Map

When you modify the `$header-background` and `$content-background` properties, all related theme properties are automatically adjusted to ensure your calendar component is styled consistently. See the tables below for a detailed overview of which theme properties are affected.

<div class="theme-switcher-wrapper">
<!-- Theme Switcher Radios and Labels -->
<input type="radio" name="theme" id="material" checked>
<label for="material" class="switch-label">Material</label>
<input type="radio" name="theme" id="fluent">
<label for="fluent" class="switch-label">Fluent</label>
<input type="radio" name="theme" id="bootstrap">
<label for="bootstrap" class="switch-label">Bootstrap</label>
<input type="radio" name="theme" id="indigo">
<label for="indigo" class="switch-label">Indigo</label>

<div class="tables">
    <!-- Material Theme Table -->
    <div class="theme-table material">
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
                    <td><details><summary><strong>$header-background</strong></summary></details></td>
                    <td>$header-foreground</td>
                    <td>Text color for the calendar header</td>
                </tr>
                <tr class="dependent"><td></td><td>$picker-hover-foreground</td><td>Picker hover foreground</td></tr>
                <tr class="dependent"><td></td><td>$picker-focus-foreground</td><td>Picker focus foreground</td></tr>
                <tr class="dependent"><td></td><td>$navigation-hover-color</td><td>Hover color for navigation</td></tr>
                <tr class="dependent"><td></td><td>$navigation-focus-color</td><td>Focus color for navigation</td></tr>
                <tr class="dependent"><td></td><td>$date-selected-background</td><td>Background for selected dates</td></tr>
                <tr class="dependent"><td></td><td>$date-selected-current-background</td><td>Selected current date background</td></tr>
                <tr class="dependent"><td></td><td>$date-selected-foreground</td><td>Foreground for selected dates</td></tr>
                <tr class="dependent"><td></td><td>$date-selected-current-foreground</td><td>Foreground for selected current date</td></tr>
                <tr class="dependent"><td></td><td>$date-selected-current-border-color</td><td>Border color for selected current date</td></tr>
                <tr class="dependent"><td></td><td>$date-selected-special-border-color</td><td>Border color for selected special dates</td></tr>
                <tr class="dependent"><td></td><td>$ym-selected-background</td><td>Year/month selected background</td></tr>
                <tr class="dependent"><td></td><td>$ym-selected-hover-background</td><td>Hover background for year/month selected date</td></tr>
                <tr class="dependent"><td></td><td>$ym-selected-current-background</td><td>Current selected year/month background</td></tr>
                <tr class="dependent"><td></td><td>$ym-selected-current-hover-background</td><td>Hover background for current selected year/month</td></tr>
                <tr class="dependent"><td></td><td>$ym-selected-foreground</td><td>Foreground for selected year/month</td></tr>
                <tr class="dependent"><td></td><td>$ym-selected-hover-foreground</td><td>Hover foreground for selected year/month</td></tr>
                <tr class="dependent"><td></td><td>$ym-selected-current-foreground</td><td>Foreground for current selected year/month</td></tr>
                <tr class="dependent"><td></td><td>$ym-selected-current-hover-foreground</td><td>Hover foreground for current selected year/month</td></tr>
            </tbody>
            <tbody class="group">
                <tr class="primary">
                    <td><details><summary><strong>$content-background</strong></summary></details></td>
                    <td>$content-foreground</td>
                    <td>Text and icon color inside calendar content area</td>
                </tr>
                <tr class="dependent"><td></td><td>$weekend-color</td><td>Color for weekend dates</td></tr>
                <tr class="dependent"><td></td><td>$inactive-color</td><td>Color for dates outside active range</td></tr>
                <tr class="dependent"><td></td><td>$weekday-color</td><td>Color for weekday labels</td></tr>
                <tr class="dependent"><td></td><td>$picker-background</td><td>Picker background</td></tr>
                <tr class="dependent"><td></td><td>$date-hover-background</td><td>Background for hovered dates</td></tr>
                <tr class="dependent"><td></td><td>$date-hover-foreground</td><td>Foreground for hovered dates</td></tr>
                <tr class="dependent"><td></td><td>$date-focus-background</td><td>Background for focused dates</td></tr>
                <tr class="dependent"><td></td><td>$date-focus-foreground</td><td>Foreground for focused dates</td></tr>
                <tr class="dependent"><td></td><td>$date-current-background</td><td>Background for the current date</td></tr>
                <tr class="dependent"><td></td><td>$date-current-foreground</td><td>Foreground for the current date</td></tr>
                <tr class="dependent"><td></td><td>$date-current-border-color</td><td>Border color for the current date</td></tr>
                <tr class="dependent"><td></td><td>$ym-current-background</td><td>Year/month current background</td></tr>
                <tr class="dependent"><td></td><td>$ym-current-hover-background</td><td>Hover background for current year/month</td></tr>
                <tr class="dependent"><td></td><td>$ym-current-foreground</td><td>Foreground for current year/month</td></tr>
                <tr class="dependent"><td></td><td>$ym-current-hover-foreground</td><td>Hover foreground for current year/month</td></tr>
                <tr class="dependent"><td></td><td>$date-selected-range-background</td><td>Selected range background</td></tr>
                <tr class="dependent"><td></td><td>$date-selected-range-foreground</td><td>Foreground for selected date ranges</td></tr>
                <tr class="dependent"><td></td><td>$date-selected-current-range-background</td><td>Background for selected current date ranges</td></tr>
                <tr class="dependent"><td></td><td>$date-selected-current-range-hover-background</td><td>Hover background for selected current date ranges</td></tr>
                <tr class="dependent"><td></td><td>$date-selected-current-range-focus-background</td><td>Focus background for selected current date ranges</td></tr>
                <tr class="dependent"><td></td><td>$date-selected-current-range-foreground</td><td>Foreground for selected current date ranges</td></tr>
                <tr class="dependent"><td></td><td>$date-special-foreground</td><td>Foreground for special dates</td></tr>
                <tr class="dependent"><td></td><td>$date-special-border-color</td><td>Border color for special dates</td></tr>
                <tr class="dependent"><td></td><td>$date-special-hover-border-color</td><td>Hover border color for special dates</td></tr>
                <tr class="dependent"><td></td><td>$date-special-focus-foreground</td><td>Focus foreground for special dates</td></tr>
                <tr class="dependent"><td></td><td>$date-special-range-foreground</td><td>Foreground for special date ranges</td></tr>
                <tr class="dependent"><td></td><td>$date-special-range-border-color</td><td>Border color for special date ranges</td></tr>
                <tr class="dependent"><td></td><td>$date-special-range-hover-background</td><td>Hover background for special date ranges</td></tr>
                <tr class="dependent"><td></td><td>$date-selected-special-border-color</td><td>Border color for selected special dates</td></tr>
                <tr class="dependent"><td></td><td>$date-selected-special-hover-border-color</td><td>Hover border color for selected special dates</td></tr>
                <tr class="dependent"><td></td><td>$date-selected-special-focus-border-color</td><td>Focus border color for selected special dates</td></tr>
                <tr class="dependent"><td></td><td>$date-disabled-foreground</td><td>Foreground for disabled dates</td></tr>
                <tr class="dependent"><td></td><td>$date-disabled-range-foreground</td><td>Foreground for disabled ranges</td></tr>
            </tbody>
            <tbody class="group">
                <tr class="primary">
                    <td><details><summary><strong>$date-border-radius</strong></summary></details></td>
                    <td>$date-range-border-radius</td>
                    <td>Controls the border radius for date ranges.</td>
                </tr>
                <tr class="dependent"><td></td><td>$date-current-border-radius</td><td>Controls the border radius for the current date.</td></tr>
                <tr class="dependent"><td></td><td>$date-special-border-radius</td><td>Controls the border radius for special dates.</td></tr>
                <tr class="dependent"><td></td><td>$date-border-radius</td><td>If not specified and <code>$date-range-border-radius</code> is set, uses the value of <code>$date-range-border-radius</code>.</td></tr>
            </tbody>
        </div>
        <!-- Fluent Theme Table -->
        <div class="theme-table fluent">
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
                        <td><details><summary><strong>$header-background</strong></summary></details></td>
                        <td>$header-foreground</td>
                        <td>Text color for the calendar header</td>
                    </tr>
                    <tr class="dependent"><td></td><td>$picker-hover-foreground</td><td>Picker hover foreground</td></tr>
                    <tr class="dependent"><td></td><td>$picker-focus-foreground</td><td>Picker focus foreground</td></tr>
                    <tr class="dependent"><td></td><td>$date-current-background</td><td>Background for the current date</td></tr>
                    <tr class="dependent"><td></td><td>$date-current-hover-foreground</td><td>Hover foreground for the current date</td></tr>
                    <tr class="dependent"><td></td><td>$date-current-focus-foreground</td><td>Focus foreground for the current date</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-current-foreground</td><td>Foreground for the currently selected date</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-current-hover-foreground</td><td>Hover foreground for the currently selected date</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-current-focus-foreground</td><td>Focus foreground for the currently selected date</td></tr>
                    <tr class="dependent"><td></td><td>$date-special-border-color</td><td>Border color for special dates</td></tr>
                    <tr class="dependent"><td></td><td>$date-special-hover-foreground</td><td>Hover foreground for special dates</td></tr>
                </tbody>
                <tbody class="group">
                    <tr class="primary">
                        <td><details><summary><strong>$content-background</strong></summary></details></td>
                        <td>$content-foreground</td>
                        <td>Text and icon color inside calendar content area</td>
                    </tr>
                    <tr class="dependent"><td></td><td>$weekend-color</td><td>Color for weekend dates</td></tr>
                    <tr class="dependent"><td></td><td>$inactive-color</td><td>Color for dates outside active range</td></tr>
                    <tr class="dependent"><td></td><td>$weekday-color</td><td>Color for weekday labels</td></tr>
                    <tr class="dependent"><td></td><td>$picker-background</td><td>Picker background</td></tr>
                    <tr class="dependent"><td></td><td>$date-hover-background</td><td>Background for hovered dates</td></tr>
                    <tr class="dependent"><td></td><td>$date-hover-foreground</td><td>Foreground for hovered dates</td></tr>
                    <tr class="dependent"><td></td><td>$date-focus-background</td><td>Background for focused dates</td></tr>
                    <tr class="dependent"><td></td><td>$date-focus-foreground</td><td>Foreground for focused dates</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-background</td><td>Background for selected dates</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-hover-background</td><td>Hover background for selected dates</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-focus-background</td><td>Focus background for selected dates</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-foreground</td><td>Foreground for selected dates</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-hover-foreground</td><td>Hover foreground for selected dates</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-focus-foreground</td><td>Focus foreground for selected dates</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-range-background</td><td>Background for selected date ranges</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-range-foreground</td><td>Foreground for selected date ranges</td></tr>
                    <tr class="dependent"><td></td><td>$date-disabled-foreground</td><td>Foreground for disabled dates</td></tr>
                    <tr class="dependent"><td></td><td>$date-disabled-range-foreground</td><td>Foreground for disabled ranges</td></tr>
                </tbody>
                <tbody class="group">
                    <tr class="primary">
                        <td><details><summary><strong>$date-border-radius</strong></summary></details></td>
                        <td>$date-range-border-radius</td>
                        <td>Controls the border radius for date ranges.</td>
                    </tr>
                    <tr class="dependent"><td></td><td>$date-current-border-radius</td><td>Controls the border radius for the current date.</td></tr>
                    <tr class="dependent"><td></td><td>$date-special-border-radius</td><td>Controls the border radius for special dates.</td></tr>
                    <tr class="dependent"><td></td><td>$date-border-radius</td><td>If not specified and <code>$date-range-border-radius</code> is set, uses the value of <code>$date-range-border-radius</code>.</td></tr>
                </tbody>
            </table>
        </div>
        <!-- Bootstrap Theme Table -->
        <div class="theme-table bootstrap">
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
                        <td><details><summary><strong>$header-background</strong></summary></details></td>
                        <td>$header-foreground</td>
                        <td>Text color for the calendar header</td>
                    </tr>
                    <tr class="dependent"><td></td><td>$picker-background</td><td>Picker background</td></tr>
                    <tr class="dependent"><td></td><td>$picker-hover-foreground</td><td>Picker hover foreground</td></tr>
                    <tr class="dependent"><td></td><td>$weekday-color</td><td>Color for weekday labels</td></tr>
                    <tr class="dependent"><td></td><td>$picker-focus-foreground</td><td>Picker focus foreground</td></tr>
                    <tr class="dependent"><td></td><td>$date-special-border-color</td><td>Border color for special dates</td></tr>
                    <tr class="dependent"><td></td><td>$date-special-focus-foreground</td><td>Focus foreground for special dates</td></tr>
                </tbody>
                <tbody class="group">
                    <tr class="primary">
                        <td><details><summary><strong>$content-background</strong></summary></details></td>
                        <td>$content-foreground</td>
                        <td>Text and icon color inside calendar content area</td>
                    </tr>
                    <tr class="dependent"><td></td><td>$weekend-color</td><td>Color for weekend dates</td></tr>
                    <tr class="dependent"><td></td><td>$inactive-color</td><td>Color for dates outside active range</td></tr>
                    <tr class="dependent"><td></td><td>$weekday-color</td><td>Color for weekday labels</td></tr>
                    <tr class="dependent"><td></td><td>$date-hover-background</td><td>Background for hovered dates</td></tr>
                    <tr class="dependent"><td></td><td>$date-hover-foreground</td><td>Foreground for hovered dates</td></tr>
                    <tr class="dependent"><td></td><td>$date-focus-background</td><td>Background for focused dates</td></tr>
                    <tr class="dependent"><td></td><td>$date-focus-foreground</td><td>Foreground for focused dates</td></tr>
                    <tr class="dependent"><td></td><td>$date-current-background</td><td>Background for the current date</td></tr>
                    <tr class="dependent"><td></td><td>$date-current-foreground</td><td>Foreground for the current date</td></tr>
                    <tr class="dependent"><td></td><td>$date-current-border-color</td><td>Border color for the current date</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-background</td><td>Background for selected dates</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-current-background</td><td>Background for the currently selected date</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-foreground</td><td>Foreground for selected dates</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-current-foreground</td><td>Foreground for the currently selected date</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-special-border-color</td><td>Border color for selected special dates</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-special-hover-border-color</td><td>Hover border color for selected special dates</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-special-focus-border-color</td><td>Focus border color for selected special dates</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-range-background</td><td>Background for selected date ranges</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-range-foreground</td><td>Foreground for selected date ranges</td></tr>
                    <tr class="dependent"><td></td><td>$date-disabled-foreground</td><td>Foreground for disabled dates</td></tr>
                    <tr class="dependent"><td></td><td>$date-disabled-range-foreground</td><td>Foreground for disabled ranges</td></tr>
                </tbody>
                <tbody class="group">
                    <tr class="primary">
                        <td><details><summary><strong>$date-border-radius</strong></summary></details></td>
                        <td>$date-range-border-radius</td>
                        <td>Controls the border radius for date ranges.</td>
                    </tr>
                    <tr class="dependent"><td></td><td>$date-current-border-radius</td><td>Controls the border radius for the current date.</td></tr>
                    <tr class="dependent"><td></td><td>$date-special-border-radius</td><td>Controls the border radius for special dates.</td></tr>
                    <tr class="dependent"><td></td><td>$date-border-radius</td><td>If not specified and <code>$date-range-border-radius</code> is set, uses the value of <code>$date-range-border-radius</code>.</td></tr>
                </tbody>
            </table>
        </div>
        <!-- Indigo Theme Table -->
        <div class="theme-table indigo">
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
                        <td><details><summary><strong>$header-background</strong></summary></details></td>
                        <td>$header-foreground</td>
                        <td>Text color for the calendar header</td>
                    </tr>
                    <tr class="dependent"><td></td><td>$picker-background</td><td>Picker background</td></tr>
                    <tr class="dependent"><td></td><td>$picker-hover-foreground</td><td>Picker hover foreground</td></tr>
                    <tr class="dependent"><td></td><td>$picker-focus-foreground</td><td>Picker focus foreground</td></tr>
                    <tr class="dependent"><td></td><td>$navigation-hover-color</td><td>Navigation hover color</td></tr>
                    <tr class="dependent"><td></td><td>$navigation-focus-color</td><td>Navigation focus color</td></tr>
                    <tr class="dependent"><td></td><td>$date-current-background</td><td>Background for the current date</td></tr>
                    <tr class="dependent"><td></td><td>$date-current-border-color</td><td>Border color for the current date</td></tr>
                    <tr class="dependent"><td></td><td>$date-current-hover-background</td><td>Background for hovered current date</td></tr>
                    <tr class="dependent"><td></td><td>$date-current-hover-border-color</td><td>Border color for hovered current date</td></tr>
                    <tr class="dependent"><td></td><td>$date-current-focus-background</td><td>Background for focused current date</td></tr>
                    <tr class="dependent"><td></td><td>$date-current-focus-border-color</td><td>Border color for focused current date</td></tr>
                    <tr class="dependent"><td></td><td>$date-current-foreground</td><td>Foreground for the current date</td></tr>
                    <tr class="dependent"><td></td><td>$date-current-hover-foreground</td><td>Foreground for hovered current date</td></tr>
                    <tr class="dependent"><td></td><td>$date-current-focus-foreground</td><td>Foreground for focused current date</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-current-border-color</td><td>Border color for the currently selected date</td></tr>
                </tbody>
                <tbody class="group">
                    <tr class="primary">
                        <td><details><summary><strong>$content-background</strong></summary></details></td>
                        <td>$content-foreground</td>
                        <td>Text and icon color inside calendar content area</td>
                    </tr>
                    <tr class="dependent"><td></td><td>$weekend-color</td><td>Color for weekend dates</td></tr>
                    <tr class="dependent"><td></td><td>$inactive-color</td><td>Color for dates outside active range</td></tr>
                    <tr class="dependent"><td></td><td>$weekday-color</td><td>Color for weekday labels</td></tr>
                    <tr class="dependent"><td></td><td>$date-hover-background</td><td>Background for hovered dates</td></tr>
                    <tr class="dependent"><td></td><td>$date-hover-foreground</td><td>Foreground for hovered dates</td></tr>
                    <tr class="dependent"><td></td><td>$date-focus-background</td><td>Background for focused dates</td></tr>
                    <tr class="dependent"><td></td><td>$date-focus-foreground</td><td>Foreground for focused dates</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-background</td><td>Background for selected dates</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-current-background</td><td>Background for the currently selected date</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-foreground</td><td>Foreground for selected dates</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-current-foreground</td><td>Foreground for the currently selected date</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-current-border-color</td><td>Border color for the currently selected date</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-range-background</td><td>Background for selected date ranges</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-range-foreground</td><td>Foreground for selected date ranges</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-current-range-background</td><td>Background for the current date in a selected range</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-current-range-hover-background</td><td>Hover background for the current date in a selected range</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-current-range-foreground</td><td>Foreground for the current date in a selected range</td></tr>
                    <tr class="dependent"><td></td><td>$date-disabled-foreground</td><td>Foreground for disabled dates</td></tr>
                    <tr class="dependent"><td></td><td>$date-disabled-range-foreground</td><td>Foreground for disabled ranges</td></tr>
                </tbody>
                <tbody class="group">
                    <tr class="primary">
                        <td><details><summary><strong>$date-border-radius</strong></summary></details></td>
                        <td>$date-range-border-radius</td>
                        <td>Controls the border radius for date ranges.</td>
                    </tr>
                    <tr class="dependent"><td></td><td>$date-current-border-radius</td><td>Controls the border radius for the current date.</td></tr>
                    <tr class="dependent"><td></td><td>$date-special-border-radius</td><td>Controls the border radius for special dates.</td></tr>
                    <tr class="dependent"><td></td><td>$date-border-radius</td><td>If not specified and <code>$date-range-border-radius</code> is set, uses the value of <code>$date-range-border-radius</code>.</td></tr>
                </tbody>
            </table>
        </div>
    </div>
</div><!-- .theme-switcher-wrapper -->

To get started with styling the calendar, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`calendar-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-calendar-theme) and by specifying just the `$header-background` and `$content-background` parameters, the theme will automatically compute appropriate state colors and contrast foregrounds. Of course, you're still free to override any of the theme parameters with custom values if needed.

```scss
$custom-calendar-theme: calendar-theme(
  $header-background: #ecaa53,
  $content-background: #011627,
);
```

The last step is to pass the custom calendar theme:

```scss
:host {
    @include tokens($custom-calendar-theme);
}
```

```typescript
import { Component } from '@angular/core';
import { IgxCalendarComponent } from 'igniteui-angular/calendar';

@Component({
    selector: 'app-calendar',
    styleUrls: ['./calendar-styling-sample.component.scss'],
    templateUrl: './calendar-styling-sample.component.html',
    imports: [IgxCalendarComponent]
})
export class CalendarStylingSampleComponent { }
```
```html
<article class="calendar-wrapper">
    <igx-calendar [formatOptions]="{weekday: 'short'}" [hasHeader]="false" 
    [showWeekNumbers]="true"  [weekStart]="1"></igx-calendar>
</article>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

// CSS variables approach

:host {
    ::ng-deep {
        .igx-days-view__date--weekend:not(.igx-days-view__date--inactive) {
            --date-hover-background: var(--background-hover);
            --date-selected-foreground: var(--primary);
            --date-selected-background: #FFF;
            --date-selected-border-color: var(--primary);
            --date-selected-focus-foreground: var(--primary);
            --date-selected-focus-background: var(--background-hover);
            --date-selected-focus-border-color: var(--primary);
            --date-selected-hover-foreground: var(--primary);
            --date-selected-hover-background: var(--background-hover);
            --date-selected-hover-border-color: var(--primary);
            --date-selected-current-hover-background: var(--background-hover);
            --date-selected-current-focus-background: var(--background-hover);
            --date-selected-current-background: #FFF;
            --date-selected-current-border-color: var(--primary);
            --date-selected-current-hover-border-color: var(--primary);
            --date-current-hover-background: var(--background-hover);
        }
    }
}

igx-calendar {
    --date-focus-background: transparent;
    --week-number-background: transparent;
    --weekend-color: #131E29;
    --weekday-color: #556B82;
    --week-number-foreground: #556B82;
    --inactive-color: #556B82;
    --date-current-border-color: var(--current-border);
    --date-current-hover-border-color: var(--current-border);
    --date-current-focus-border-color: var(--current-border);
    --date-current-hover-background: var(--background-weekend);
    --date-selected-current-border-color: var(--current-border);
    --date-selected-current-background: #FFF;
    --date-selected-current-foreground: var(--primary);
    --date-selected-current-focus-border-color: var(--current-border);
    --date-selected-current-focus-background: var(--background-weekend);
    --date-selected-current-focus-foreground: var(--primary);
    --date-selected-current-hover-border-color: var(--current-border);
    --date-selected-current-hover-background: var(--background-weekend);
    --date-selected-current-hover-foreground: var(--primary);
    --date-selected-foreground: var(--primary);
    --date-selected-background: #FFF;
    --date-selected-border-color: var(--primary);
    --date-selected-hover-foreground: var(--primary);
    --date-selected-hover-background: var(--background-weekend);
    --date-selected-hover-border-color: var(--primary);
    --date-selected-focus-foreground: var(--primary);
    --date-selected-focus-background: var(--background-weekend);
    --date-selected-focus-border-color: var(--primary);
    --picker-foreground: var(--primary);
    --picker-hover-foreground: var(--primary);
    --picker-focus-foreground: var(--primary);
    --ym-hover-background: var(--background);
    --ym-selected-background: #EDF5FF;
    --ym-selected-hover-background: #D9EAFF;
    --ym-selected-hover-foreground: var(--primary);
    --ym-selected-outline-color: var(--primary);
    --ym-selected-hover-outline-color: var(--primary);
    --ym-selected-focus-outline-color: var(--primary);
    --ym-selected-focus-background: #D9EAFF;
    --ym-current-foreground: var(--primary);
    --ym-current-background: transparent;
    --ym-current-outline-color: transparent;
    --ym-current-hover-foreground: var(--primary);
    --ym-current-hover-background: var(--background);
    --ym-current-outline-hover-color: var(--primary);
    --ym-selected-current-foreground: var(--primary);
    --ym-selected-current-background: #EDF5FF;
    --ym-selected-current-outline-color: var(--primary);
    --ym-selected-current-hover-foreground: var(--primary);
    --ym-selected-current-hover-background: #D9EAFF;
    --ym-selected-current-outline-hover-color: var(--primary);
    --ym-selected-current-outline-focus-color: var(--primary);
}

// Sass theme approach

// $custom-calendar-theme-weekend: calendar-theme(
//     $date-hover-background: var(--background-hover),
//     $date-selected-foreground: var(--primary),
//     $date-selected-background: #FFF,
//     $date-selected-border-color: var(--primary),
//     $date-selected-focus-foreground: var(--primary),
//     $date-selected-focus-background: var(--background-hover),
//     $date-selected-focus-border-color: var(--primary),
//     $date-selected-hover-foreground: var(--primary),
//     $date-selected-hover-background: var(--background-hover),
//     $date-selected-hover-border-color: var(--primary),
//     $date-selected-current-hover-background: var(--background-hover),
//     $date-selected-current-focus-background: var(--background-hover),
//     $date-selected-current-background: #FFF,
//     $date-selected-current-border-color: var(--primary),
//     $date-selected-current-hover-border-color: var(--primary),
//     $date-current-hover-background: var(--background-hover)
// );

// $custom-calendar-theme: calendar-theme(
//     $date-focus-background: transparent,
//     $picker-foreground: var(--primary),
//     $picker-hover-foreground: var(--primary),
//     $picker-focus-foreground: var(--primary),
//     $weekday-color: #556B82,
//     $weekend-color: #131E29,
//     $inactive-color: #556B82,
//     $week-number-foreground: #556B82,
//     $week-number-background: transparent,
//     $ym-selected-current-hover-foreground: var(--primary),
//     $ym-selected-current-hover-background: #D9EAFF,
//     $ym-hover-background: var(--background),
//     $ym-current-foreground: var(--primary),
//     $ym-current-background: transparent,
//     $ym-current-hover-foreground: var(--primary),
//     $ym-current-hover-background: var(--background),
//     $ym-selected-current-foreground: var(--primary),
//     $ym-selected-current-background: #EDF5FF,
//     $ym-selected-background: #EDF5FF,
//     $ym-selected-hover-foreground: var(--primary),
//     $ym-selected-hover-background: #D9EAFF,
//     $ym-current-outline-color: transparent,
//     $ym-current-outline-hover-color: var(--primary),
//     $ym-selected-outline-color: var(--primary),
//     $ym-selected-hover-outline-color: var(--primary),
//     $ym-selected-focus-outline-color: var(--primary),
//     $ym-selected-current-outline-color: var(--primary),
//     $ym-selected-current-outline-hover-color: var(--primary),
//     $ym-selected-current-outline-focus-color: var(--primary),
//     $date-selected-current-foreground: var(--primary),
//     $date-selected-current-background: #FFF,
//     $date-selected-current-hover-foreground: var(--primary),
//     $date-selected-current-hover-background: var(--background-weekend),
//     $date-selected-current-focus-foreground: var(--primary),
//     $date-selected-current-focus-background: var(--background-weekend),
//     $date-selected-foreground: var(--primary),
//     $date-selected-background: #FFF,
//     $date-selected-border-color: var(--primary),
//     $date-selected-hover-foreground: var(--primary),
//     $date-selected-hover-background: var(--background-weekend),
//     $date-selected-hover-border-color: var(--primary),
//     $date-selected-focus-foreground: var(--primary),
//     $date-selected-focus-background: var(--background-weekend),
//     $date-selected-focus-border-color: var(--primary),
//     $date-current-border-color: var(--current-border),
//     $date-current-hover-border-color: var(--current-border),
//     $date-current-focus-border-color: var(--current-border),
//     $date-selected-current-border-color: var(--current-border),
//     $date-selected-current-hover-border-color: var(--current-border),
//     $date-selected-current-focus-border-color: var(--current-border),
//     $date-current-hover-background: var(--background-weekend),
//     $border-radius: rem(8px)
// );

// :host {
//     ::ng-deep {
//         .igx-days-view__date--weekend:not(.igx-days-view__date--inactive) {
//             @include tokens($custom-calendar-theme-weekend);
//         }
//     }
// }

// igx-calendar {
//     @include tokens($custom-calendar-theme);
// }
```

### Styling with Tailwind

You can style the `calendar` using our custom Tailwind utility classes. Make sure to [set up Tailwind](themes/misc/tailwind-classes.md) first.

Along with the tailwind import in your global stylesheet, you can apply the desired theme utilities as follows:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

The utility file includes both `light` and `dark` theme variants.

- Use `light-*` classes for the light theme.
- Use `dark-*` classes for the dark theme.
- Append the component name after the prefix, e.g., `light-calendar`, `dark-calendar`.

Once applied, these classes enable dynamic theme calculations. From there, you can override the generated CSS variables using `arbitrary properties`. After the colon, provide any valid CSS color format (HEX, CSS variable, RGB, etc.).

You can find the full list of properties in the [calendar-theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-calendar-theme). The syntax is as follows:

```html
<igx-calendar
class="!light-calendar
![--header-background:#4F6A5A]
![--content-background:#A3C7B2]"
[weekStart]="1">
</igx-calendar>
```

>[!NOTE]
>The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your calendar should look like this:

<div class="sample-container loading" style="height:500px">
    <iframe id="calendar-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/scheduling/calendar-tailwind-styling-sample' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

## API References

<div class="divider--half"></div>

- [IgxCalendarComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcalendarcomponent.html)
- [IgxCalendarComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-calendar-theme)
- [DateRangeType](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/daterangetype.html)
- [DateRangeDescriptor](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/daterangedescriptor.html)

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
