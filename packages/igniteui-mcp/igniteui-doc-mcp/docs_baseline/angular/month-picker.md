---
title: Angular Month Picker Component – Ignite UI for Angular - MIT license 
_description:  The Ignite UI for Angular Month Picker component provides an easy and intuitive way to select a specific month and year using a month-year calendar view. Try it now.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Month Picker components, Angular Month Picker controls
_license: MIT
_tocName: Month Picker
---

# Angular Month Picker Component Overview

<p class="highlight">The Ignite UI for Angular Month Picker component provides an easy and intuitive way to select a specific month and year using a month-year calendar view. The component allows you bind it's value to a date object, and users can change the month and year portion of the date object through the month picker component UI. It also supports localization.</p>

## Angular Month Picker Example

What you see here is a basic Angular Month Picker example with a the component's default view, enabling users to select the year and the month.  

```typescript
import { Component } from '@angular/core';
import { IgxCardComponent } from 'igniteui-angular/card';
import { IgxMonthPickerComponent } from 'igniteui-angular/calendar';

@Component({
    selector: 'app-monthpicker-sample-1',
    styleUrls: ['./monthpicker-sample-1.component.scss'],
    templateUrl: './monthpicker-sample-1.component.html',
    imports: [IgxCardComponent, IgxMonthPickerComponent]
})
export class MonthpickerSample1Component {
    public date = new Date();
}
```
```html
<div>
    <igx-card elevated>
        <igx-month-picker #monthPicker [value]="date"></igx-month-picker>
    </igx-card>
</div>
```
```scss
igx-card {
    max-width: 400px;
    margin: 20px;
}

igx-month-picker {
	--ig-size: 2;
}
```

## Getting Started with Ignite UI for Angular Month Picker

To get started with the Ignite UI for Angular Month Picker component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The first step is to import the `IgxCalendarModule` inside our **app.module.ts** file.

>[!NOTE]
> The [**IgxMonthPickerComponent**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxmonthpickercomponent.html) also depends on the [`BrowserAnimationsModule`](https://angular.io/api/platform-browser/animations/BrowserAnimationsModule) and **optionally** the [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) for touch interactions, so they need to be added to the AppModule as well:

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

Alternatively, as of `16.0.0` you can import the `IgxMonthPickerComponent` as a standalone dependency, or use the [`IGX_CALENDAR_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/calendar/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxMonthPickerComponent } from 'igniteui-angular/calendar';
// import { IgxMonthPickerComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igx-month-picker></igx-month-picker>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [BrowserAnimationsModule, HammerModule, IgxMonthPickerComponent]
    /* or imports: [BrowserAnimationsModule, HammerModule, IGX_CALENDAR_DIRECTIVES] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Calendar module or Month Picker component imported, you can start using the `igx-month-picker` component.

> [!NOTE]
> Note that the [`IgxMonthPickerComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxmonthpickercomponent.html) uses the [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) WebAPI for localization and formatting of dates.
> Consider using the [appropriate polyfills](https://github.com/andyearnshaw/Intl.js/) if your target platform does not support them.

## Using the Angular Month Picker

To add the Angular Month Picker in a template, use the following code:

```html
<!-- month-picker-sample.component.html -->

<igx-month-picker></igx-month-picker>
```

### Setting date

Set a date to [`IgxMonthPickerComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxmonthpickercomponent.html) using the [`value`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxmonthpickercomponent.html#value) input.

```typescript
// month-picker-sample.component.ts

public date: Date = new Date();
```

```html
<!-- month-picker-sample.component.html -->

<igx-month-picker [value]="date"></igx-date-picker>
```

To create a two-way data-binding, set `ngModel` like this:

```html
<!-- month-picker-sample.component.html -->

<igx-month-picker [(ngModel)]="date"></igx-date-picker>
```

### Formatting

Change the month picker display format, using the [`formatOptions`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxmonthpickercomponent.html#formatoptions) inputs.

```html
<!-- month-picker-sample.component.html -->

<igx-month-picker [(ngModel)]="date" [formatOptions]="numericFormatOptions"></igx-month-picker>
```

```typescript
// month-picker-sample.component.ts

public date: Date = new Date();
public numericFormatOptions = {
    month: '2-digit'
};
```

### Localization

Use the [`locale`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxmonthpickercomponent.html#locale) input, to customize the Ignite UI for Angular Month Picker localization.

```html
<!-- month-picker-sample.component.html -->

<igx-month-picker [(ngModel)]="date" [locale]="locale" [formatOptions]="formatOptions"></igx-month-picker>
```

```typescript
// month-picker-sample.component.ts

public date: Date = new Date();
public locale: 'fr';
public formatOptions = {
    month: 'long'
};
```

Here is an example of localizing and formatting the month picker component:

```typescript
import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IFormattingOptions, IgxMonthPickerComponent } from 'igniteui-angular/calendar';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxPrefixDirective } from 'igniteui-angular/input-group';
import { IgxCardComponent } from 'igniteui-angular/card';
import localeDE from '@angular/common/locales/de';
import localeFR from '@angular/common/locales/fr';
import localeAR from '@angular/common/locales/ar';
import localeZH from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-monthpicker-sample-3',
    styleUrls: ['./monthpicker-sample-3.component.scss'],
    templateUrl: './monthpicker-sample-3.component.html',
    imports: [IgxSelectComponent, FormsModule, IgxPrefixDirective, IgxSelectItemComponent, IgxCardComponent, IgxMonthPickerComponent]
})
export class MonthpickerSample3Component implements OnInit {
    public formatOptions: IFormattingOptions = {
        month: 'long'
    };

    public date = new Date();
    public locales = ['en', 'de', 'fr', 'ar', 'zh'];
    public locale = 'en';

    public ngOnInit(): void {
        registerLocaleData(localeDE);
        registerLocaleData(localeFR);
        registerLocaleData(localeAR);
        registerLocaleData(localeZH);
    }
}
```
```html
<div class="sample-column card-wrapper">
  <div>
    <igx-select #select [(ngModel)]="locale">
      <igx-prefix>Locales: </igx-prefix>
      @for (locale of locales; track locale) {
        <igx-select-item [value]="locale">
          {{ locale }}
        </igx-select-item>
      }
    </igx-select>
  </div>

  <igx-card elevated>
    <igx-month-picker #monthPicker [(ngModel)]="date" [locale]="locale" [formatOptions]="formatOptions">
    </igx-month-picker>
  </igx-card>
</div>
```
```scss
.card-wrapper {
    max-width: 400px;
}

igx-month-picker {
	--ig-size: 2;
}
```


## Keyboard navigation

- When the **igxMonthPicker** component is focused, use
  - <kbd>PageUp</kbd> key to move to the previous year,
  - <kbd>PageDown</kbd> key to move to the next year,
  - <kbd>Home</kbd> key to focus the first month of the current year,
  - <kbd>End</kbd> key to focus the last month of the current year,
  - <kbd>Tab</kbd> key to navigate through the sub-header buttons.

- When `<` (previous) or `>` (next) year button (in the sub-header) is focused, use
  - <kbd>Space</kbd> or <kbd>Enter</kbd> key to scroll into view the next or previous year.

- When years button (in the sub-header) is focused, use
  - <kbd>Space</kbd> or <kbd>Enter</kbd> key to open the years view,
  - <kbd>Right</kbd> or <kbd>Left</kbd> arrow key to scroll the previous/next year into view.

- When a month inside the months view is focused, use
  - Arrow keys to navigate through the months,
  - <kbd>Home</kbd> key to focus the first month inside the months view,
  - <kbd>End</kbd> key to focus the last month inside the months view,
  - <kbd>Enter</kbd> key to select the currently focused month and close the view,
  - <kbd>Tab</kbd> key to navigate through the months.

## Styling

To get started with styling the month picker, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

The month picker uses the calendar's theme, so we have to create a new theme that extends the [`calendar-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-calendar-theme). To style the month picker's items, you can set the `$content-background` parameter. Optionally, you can also set `$header-background` if you want to override the rest of the properties.
These two parameters act as the foundation for the theme and are used to automatically generate the appropriate background and foreground colors for all interaction states, such as hover, selected, and active.

```scss
$my-calendar-theme: calendar-theme(
  $border-radius: 15px,
  $content-background: #57a5cd,
);
```

The next step is to **include** the component theme in our application.

```scss
@include css-vars($my-calendar-theme);
```

After everything's done, your component should look like this:

### Demo

```typescript
import { Component } from '@angular/core';
import { IgxMonthPickerComponent } from 'igniteui-angular/calendar';

@Component({
    selector: 'app-monthpicker-styling',
    styleUrls: ['./monthpicker-styling.component.scss'],
    templateUrl: './monthpicker-styling.component.html',
    imports: [IgxMonthPickerComponent]
})
export class MonthpickerStylingComponent {
    public date = new Date();
}
```
```html
<igx-month-picker [value]="date"></igx-month-picker>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$my-calendar-theme: calendar-theme(
  $border-radius: 15px,
  $content-background: #57a5cd,
);

@include css-vars($my-calendar-theme);
```

### Styling with Tailwind

You can style the `month picker` using our custom Tailwind utility classes. Make sure to [set up Tailwind](themes/misc/tailwind-classes.md) first.

Along with the tailwind import in your global stylesheet, you can apply the desired theme utilities as follows:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

The utility file includes both `light` and `dark` theme variants. The month picker is styled through the calendar theme, so you have to use the calendar utility class

- Use `light-*` classes for the light theme.
- Use `dark-*` classes for the dark theme.
- Append the component name after the prefix, e.g., `light-calendar`, `dark-calendar`.

Once applied, these classes enable dynamic theme calculations. From there, you can override the generated CSS variables using `arbitrary properties`. After the colon, provide any valid CSS color format (HEX, CSS variable, RGB, etc.).

You can find the full list of properties in the [calendar-theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-calendar-theme). The syntax is as follows:

```html
<igx-month-picker
class="!light-calendar
![--header-background:#4F6A5A]
![--content-background:#A3C7B2]">
</igx-month-picker>
```

>[!NOTE]
>The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your month picker should look like this:

<div class="sample-container loading" style="height:400px">
    <iframe id="month-picker-tailwind-style-iframe" data-src='{environment:demosBaseUrl}/scheduling/monthpicker-tailwind-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>


## API References

<div class="divider--half"></div>

- [IgxMonthPickerComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxmonthpickercomponent.html)
- [IgxCalendarComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcalendarcomponent.html)
- [IgxCalendarComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-calendar-theme)


## Theming Dependencies

<div class="divider--half"></div>

- [IgxCalendar Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-calendar-theme)
- [IgxIcon Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-icon-theme)

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
