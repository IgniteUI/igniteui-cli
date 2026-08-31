---
title: Ignite UI for Angular Frameworks and features  | Ignite UI for Angular | Infragistics
_description: Learn how to configure ARIA Accessibility and Directionality of your application with Ignite UI for Angular
_keywords: aria support, a11y, ignite ui for angular, infragistics
_tocName: RTL Support
---

# Right to Left (RTL) Support

## RTL Support

Most of the components in the framework have full **right-to-left (RTL)** support by default. To switch to RTL direction you have to just set the `dir` attribute of the html or the body tag to `rtl`.

Example:

```scss
// $direction defaults to ltr if it's omitted.
@include igx-core($direction: rtl);
```

Currently the following components have only partial RTL support:

- Grid (igx-grid)

## RTL Example

This section shows the accessibility (ARIA) support of the framework as well as how easily manageable the `directionality` of the components is.

```typescript
import { Component, ViewChild } from '@angular/core';
import { IgxCalendarComponent } from 'igniteui-angular/calendar';
import { IgxButtonDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-calendar',
    styleUrls: ['./calendar-rtl-sample.component.scss'],
    templateUrl: './calendar-rtl-sample.component.html',
    imports: [IgxButtonDirective, IgxCalendarComponent]
})
export class CalendarRtlSampleComponent {
    @ViewChild('calendar', { read: IgxCalendarComponent }) public calendar: IgxCalendarComponent;

    public directionality = 'rtl';

    changeDirectionality(){
        this.directionality === 'rtl' ? this.directionality = 'ltr' : this.directionality = 'rtl';
    }
}
```
```html
<div class="calendar-wrapper">
    <div class="sample-column" (click)="changeDirectionality()">
        <button igxButton="contained" igxRipple>Change Directionality</button>
    </div>
    <div class="sample-column" [attr.dir]="directionality">
        <article>
            <igx-calendar #calendar [weekStart]="1"></igx-calendar>
        </article>
    </div>
</div>
```
```scss
@use '../../../../variables' as *;

$border-color: color($color: gray, $variant: 300);

igx-calendar {
	--ig-size: 2;
	
    border: 1px solid $border-color;
    border-radius: 6px;
}

.button-sample {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    flex: 1 0 30%;
    margin: 16px 0;
}

.calendar-wrapper {
    max-width: 650px;
    min-width: 300px;
    margin: 8px;
}

.location-wrapper {
    min-width: 200px;
    max-width: 640px;
    margin-bottom: 32px;
}
```


## Enabling right-to-left direction (RTL)

`Ignite UI for Angular` library is susceptible to `directionality` manipulation only when setting `dir` attribute on either `html` or `body` tags. Also, keep in mind that runtime changes are not detected.

With that being said, let's move to the following example:

### Step 1 - Setting the 'dir' attribute on both tags

```html
<html dir="rtl">
...
</html>
```

or

```html
<html>
  <body dir="ltr">
  ...
  </body>
</html>
```

> [!NOTE]
> Currently the `Igx-Grid` component only has partial(visual) RTL support.
> [!NOTE]
>
> ### Breaking Changes in version 13.2.0
>
> All RTL specific stylesheets have been removed, therefore, users who have previously used *-rtl.css specific themes must switch to the regular theme files.
