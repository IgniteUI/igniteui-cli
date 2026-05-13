---
title: React Calendar Component - Ignite UI for React
_description: With React Calendar Component, users can create intuitive calendars for applications to display date information using three different selection modes. Try it Now
_keywords: React Calendar, Ignite UI for React, Infragistics
_license: MIT
mentionedTypes: ["Calendar", "DateRangeType", "DateRangeDescriptor"]
_tocName: Calendar
---

# React Calendar Overview

The Ignite UI for React Calendar component is lightweight and easy to configure. It is used for showing dates and weekdays. It is also the best way for providing monthly or yearly views to end-users. The Ignite UI for React Calendar control lets you restrict the minimum and maximum date ranges that people can navigate through.

The Ignite UI for Ignite UI for React Calendar provides an easy and intuitive way for displaying date information. It packs different features like single or multiple date selection modes, highlight and select date range, keyboard navigation, enabling week numbers, size and spacing options, and more.

## React Calendar Example

The following React [`IgrCalendar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html) component example shows a basic calendar with a single day selection mode. See how it works or inspect the code behind.

<div class="divider--half"></div>

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCalendar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class CalendarOverview extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrCalendar style={{width: '400px'}}/>                
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CalendarOverview/>);
```

## How To Create a Calendar in React with Ignite UI

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the Ignite UI for React [`IgrCalendar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html) and its necessary CSS, like so:

```tsx
import { IgrCalendar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

Before using the [`IgrCalendar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html), you need to register it as follows:

For a complete introduction to the Ignite UI for React, read the [**Getting Started**](../general-getting-started.md) topic.

The simplest way to start using the Ignite UI for React [`IgrCalendar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html) is as follows:

```tsx
<IgrCalendar />
```

### Selection Modes

Users can choose from three different selection modes - single selection, multiple selection or range selection. By default, the Ignite UI for React [`IgrCalendar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html) is using single selection mode but you can change it by setting the [`selection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendarbase.html#selection) property as shown in this example.

```tsx
<IgrCalendar selection="multiple" />
```

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCalendar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class CalendarMultipleSelection extends React.Component<any, any> {

    constructor(props: any) {
        super(props);                    
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrCalendar selection="multiple" style={{width: '400px'}}/>                
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CalendarMultipleSelection/>);
```

### Range Selection

Following the same approach, we can switch [`selection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendarbase.html#selection) to range mode:

```tsx
<IgrCalendar selection="range" />
```

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCalendar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class CalendarRangeSelection extends React.Component<any, any> {    

    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrCalendar selection='range' style={{width: '400px'}}/>                
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CalendarRangeSelection/>);
```

### Active View and Date

The Ignite UI for React Calendar component allows you to switch between three different views: days, months and years. The [`activeView`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html#activeView) property of the component reflects the current view. By default, the Calendar displays the current date when loaded initially. You could modify this by setting the [`activeDate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html#activeDate) property. The [`activeDate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html#activeDate) property also reflects the changes of the currently visible date made by the end user.

### Header Options

By default, the Ignite UI for React Calendar component renders a header area which contains information about the selected dates. You could hide the header by setting the `HasHeader` property to **false**. You could also configure `vertical` or `horizontal` orientation of the header using the [`headerOrientation`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html#headerOrientation) property.

> [!Note]
> Please note that the Ignite UI for React Calendar header is not rendered when the [`selection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendarbase.html#selection) is set to multiple.

> [!Note]
> Please note that the Ignite UI for React Calendar DOM properties use `camelCase` naming while their corresponding HTML attributes are using `kebab-case`. For example the [`headerOrientation`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html#headerOrientation) property corresponds to the `header-orientation` attribute.

The Ignite UI for React Calendar component exposes a `title` slot which allows you to customize the title of the header.

```tsx
<IgrCalendar selection="range" headerOrientation="vertical">
    <span slot="title">Trip dates</span>
</IgrCalendar>
```

The following sample demonstrates the above configuration:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCalendar, IgrCalendarModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrCalendarModule.register();

export default class CalendarHeader extends React.Component<any, any> {

    constructor(props: any) {
        super(props);                     
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrCalendar selection="range" headerOrientation="vertical" style={{width: '500px'}}>
                    <span slot="title">Trip dates</span>
                </IgrCalendar>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CalendarHeader/>);
```

### Localization and Formatting

Due to their very nature, localization and formatting are essential to any calendar. In the Ignite UI for React [`IgrCalendar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html) those are controlled and customized through the following properties - [`locale`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendarbase.html#locale), [`formatOptions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html#formatOptions), [`weekStart`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendarbase.html#weekStart).

Let's go ahead and try those along with other customizations. First thing we need to set is the [`weekStart`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendarbase.html#weekStart), which controls the starting day of the week. It defaults to `Sunday`, so we will set it to `Monday`. We will also customize the [`formatOptions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html#formatOptions) property which specifies the options used to format the months and the weekdays in the Calendar views. Finally, we will set the [`locale`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendarbase.html#locale) property to a value, based on the user's location choice:

```tsx
<IgrRadioGroup alignment="horizontal" value={this.state.calendarLocale}>
    <IgrRadio name="lang" value="en" checked={true} onChange={this.onRadioChange}>
        <span>EN</span>
    </IgrRadio>
    <IgrRadio name="lang" value="de" onChange={this.onRadioChange}>
        <span>DE</span>
    </IgrRadio>
    <IgrRadio name="lang" value="fr" onChange={this.onRadioChange}>
        <span>FR</span>
    </IgrRadio>
    <IgrRadio name="lang" value="ar" onChange={this.onRadioChange}>
        <span>AR</span>
    </IgrRadio>
    <IgrRadio name="lang" value="ja" onChange={this.onRadioChange}>
        <span>JA</span>
    </IgrRadio>                    
</IgrRadioGroup>

<IgrCalendar weekStart='monday' formatOptions={this.state.calendarFormat} 
    locale={this.state.calendarLocale}
    value={new Date()}/>
```

```tsx
constructor(props: any) {
    super(props);
    this.onRadioChange = this.onRadioChange.bind(this);
    const formatOptions: IgrCalendarFormatOptions = {
        month: 'short',
        weekday: 'short',
    }
    this.state = { calendarLocale: "en", calendarFormat: formatOptions };
}

public onRadioChange(e: any) {
    if (e.detail.checked) {
        this.setState({ calendarLocale: e.detail.value });
    }
}
```

If everything went well, we should now have a Calendar with customized display, that also changes the locale representation, based on the user selection. Let's have a look at it:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCalendar, IgrCalendarFormatOptions, IgrRadioGroup, IgrRadio, IgrCalendarModule, IgrRadioGroupModule, IgrRadioModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrCalendarModule.register();
IgrRadioGroupModule.register();
IgrRadioModule.register();

export default class CalendarFormatting extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.onRadioChange = this.onRadioChange.bind(this);

        const formatOptions: IgrCalendarFormatOptions = {
            month: 'short',
            weekday: 'short',
        }

        this.state = { calendarLocale: "en", calendarFormat: formatOptions };
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrRadioGroup alignment="horizontal" style={{marginBottom: '10px'}} value={this.state.calendarLocale}>
                    <IgrRadio name="lang" value="en" checked={true} onChange={this.onRadioChange}>
                        <span>EN</span>
                    </IgrRadio>
                    <IgrRadio name="lang" value="de" onChange={this.onRadioChange}>
                        <span>DE</span>
                    </IgrRadio>
                    <IgrRadio name="lang" value="fr" onChange={this.onRadioChange}>
                        <span>FR</span>
                    </IgrRadio>
                    <IgrRadio name="lang" value="ar" onChange={this.onRadioChange}>
                        <span>AR</span>
                    </IgrRadio>
                    <IgrRadio name="lang" value="ja" onChange={this.onRadioChange}>
                        <span>JA</span>
                    </IgrRadio>                    
                </IgrRadioGroup>

                <IgrCalendar weekStart='monday' formatOptions={this.state.calendarFormat} 
                             locale={this.state.calendarLocale}
                             value={new Date()}
                             style={{width: '400px'}}/>
            </div>
        );
    }

    public onRadioChange(e: any) {
        if (e.detail.checked) {
            this.setState({ calendarLocale: e.detail.value });
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CalendarFormatting/>);
```

### Disabled dates

In some cases you would want to have disabled dates in the Calendar which can't be selected by the end user. This functionality is achieved by using the [`disabledDates`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendarbase.html#disabledDates) property. The [`disabledDates`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendarbase.html#disabledDates) property is an array of [`DateRangeDescriptor`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.daterangedescriptor.html) objects. Each descriptor has a `Type` and optionally a [`dateRange`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.daterangedescriptor.html#dateRange) which is an array of `Date` objects.

These are the available options for the `Type` property:

- `After` - disables the dates after the first date in the [`dateRange`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.daterangedescriptor.html#dateRange)
- `Before` - disables the dates before the first date in the [`dateRange`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.daterangedescriptor.html#dateRange)
- `Between` - disables the dates between the first and the second date in the [`dateRange`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.daterangedescriptor.html#dateRange)
- `Specific` - disables the dates specified in the [`dateRange`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.daterangedescriptor.html#dateRange) array
- `Weekdays` - disables all weekdays
- `Weekends` - disables all weekends

Let's create a sample that is disabling the dates between the 3rd and the 8th of the current month:

```ts
const today = new Date(Date.now());
const range = [
    new Date(today.getFullYear(), today.getMonth(), 3),
    new Date(today.getFullYear(), today.getMonth(), 8)
];

this.calendar.disabledDates = [{ type: DateRangeType.Between, dateRange: range }];
```

```tsx
<IgrCalendar disabledDates={this.state.disabledDates}/>
```

```tsx
const today = new Date();
const range = [
    new Date(today.getFullYear(), today.getMonth(), 3),
    new Date(today.getFullYear(), today.getMonth(), 8)
];
const desc: DateRangeDescriptor = {
    dateRange: range,
    type: DateRangeType.Specific,
}
const disabledDates = [desc];
this.state = { disabledDates };
```

These configurations should have the following result:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCalendar, DateRangeDescriptor, DateRangeType } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class CalendarDisabledDates extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        const today = new Date();
        const range = [
            new Date(today.getFullYear(), today.getMonth(), 3),
            new Date(today.getFullYear(), today.getMonth(), 8)
        ];

        const desc: DateRangeDescriptor = {
            dateRange: range,
            type: DateRangeType.Specific,
        }
        const disabledDates = [desc];

        this.state = { disabledDates };
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrCalendar disabledDates={this.state.disabledDates} style={{width: '400px'}}/>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CalendarDisabledDates/>);
```

### Special dates

The [`specialDates`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendarbase.html#specialDates) property is using almost the same configuration principles as the [`disabledDates`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendarbase.html#disabledDates). The special dates have a highlighted look and feel and unlike the disabled ones can be selected.

Let's add some special dates to our Calendar. In order to do this, we will create a [`DateRangeDescriptor`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.daterangedescriptor.html) and pass the dates between the 3rd and the 8th of the current month:

```ts
const today = new Date();
const range = [
    new Date(today.getFullYear(), today.getMonth(), 3),
    new Date(today.getFullYear(), today.getMonth(), 8)
];

this.calendar.specialDates = [{ type: DateRangeType.Between, dateRange: range }];
```

```tsx
<IgrCalendar specialDates={this.state.specialDates}/>
```

```tsx
const today = new Date();
const range = [
    new Date(today.getFullYear(), today.getMonth(), 3),
    new Date(today.getFullYear(), today.getMonth(), 8)
]
const desc: DateRangeDescriptor = {
    dateRange: range,
    type: DateRangeType.Between,
}
const specialDates = [desc]
this.state = { specialDates };
```

The following demo illustrates a Calendar with a vacation request option:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCalendar, DateRangeDescriptor, DateRangeType } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class CalendarSpecialDates extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        const today = new Date();
        const range = [
            new Date(today.getFullYear(), today.getMonth(), 3),
            new Date(today.getFullYear(), today.getMonth(), 8)
        ];

        const desc: DateRangeDescriptor = {
            dateRange: range,
            type: DateRangeType.Between,
        }
        const specialDates = [desc];

        this.state = { specialDates };
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrCalendar specialDates={this.state.specialDates} style={{width: '400px'}}/>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CalendarSpecialDates/>);
```

### Week numbers

You can use the [`showWeekNumbers`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendarbase.html#showWeekNumbers) property to show the week numbers of the Calendar component. You can do this by using its corresponding boolean attribute `show-week-numbers` like this:

```tsx
<IgrCalendar showWeekNumbers={true} />
```

The following demo illustrates a Calendar with enabled week numbers:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCalendar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class CalendarWeekNumbers extends React.Component<any, any> {

    constructor(props: any) {
        super(props);                      
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrCalendar showWeekNumbers={true} style={{width: '400px'}}/>                
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CalendarWeekNumbers/>);
```

### Multiple Months

Using the [`visibleMonths`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html#visibleMonths) property, you can display more than one month when the Calendar is in `days` view. When multiple months are displayed, you can configure whether you want to stack them vertically or horizontally by using the [`orientation`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html#orientation) property. By default, the [`orientation`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html#orientation) property is set to `horizontal`.

The Calendar displays leading and trailing dates from the previous and the next months. You could hide these dates by setting the [`hideOutsideDays`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html#hideOutsideDays) property to **true** or using its corresponding boolean attribute [`hideOutsideDays`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html#hideOutsideDays).

```tsx
<IgrCalendar visibleMonths={2} hideOutsideDays={true} />
```

The following sample demonstrates the multiple months configuration:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCalendar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class CalendarMultipleMonths extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrCalendar visibleMonths={2} hideOutsideDays={true} style={{width: '600px'}}/>                
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CalendarMultipleMonths/>);
```

### Size

You could control the size and spacing of the calendar inner elements using the `--ig-size` CSS variable. The default size of the component is large.

```css
.size-small {
    --ig-size: var(--ig-size-small);
}

.size-medium {
    --ig-size: var(--ig-size-medium);
}

.size-large {
    --ig-size: var(--ig-size-large);
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCalendar, IgrRadioGroup, IgrRadio } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class CalendarSize extends React.Component<any, any> {

    constructor(props: any) {
        super(props);                
        this.onRadioChange = this.onRadioChange.bind(this);
        this.state = { calendarSize: "large"};        
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrRadioGroup alignment="horizontal" style={{ marginBottom: '10px' }}>
                    <IgrRadio name="size" value="small" 
                        checked={this.state.calendarSize === "small"} 
                        onChange={this.onRadioChange}>
                        <span>Small</span>
                    </IgrRadio>
                    <IgrRadio name="size" value="medium" 
                        checked={this.state.calendarSize === "medium"} 
                        onChange={this.onRadioChange}>
                        <span>Medium</span>
                    </IgrRadio>
                    <IgrRadio name="size" value="large" 
                        checked={this.state.calendarSize === "large"} 
                        onChange={this.onRadioChange}>
                        <span>Large</span>
                    </IgrRadio>
                </IgrRadioGroup>
                <IgrCalendar className={'size-' + this.state.calendarSize} style={{width: '400px'}}/>                
            </div>
        );
    }

    public onRadioChange(e: any) {
        if (e.detail.checked) {
            this.setState({ calendarSize: e.detail.value });
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CalendarSize />);
```

### Events

The Calendar component emits the `Change` event when the selected dates are changed by the end user. You can subscribe to the event like this:

```tsx
<IgrCalendar onChange={this.onCalendarChange} />

public onCalendarChange(e: IgrComponentDataValueChangedEventArgs) {

}
```

## Keyboard navigation

If you traverse the page using the <kbd>TAB</kbd> key you should keep in mind that based on [W3 accessability recommendations](https://www.w3.org/TR/wai-aria-practices/#layoutGrid) the [`IgrCalendar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html) introduces the following tab stops:

- Month selection button
- Year selection button
- Previous button
- Next button
- Active date element

When a **day/month/year** in the [`IgrCalendar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html) component is focused, use:

- <kbd>PAGE UP</kbd> key to move to the previous month/year/years page.
- <kbd>PAGE DOWN</kbd> key to move to the next month/year/years page.
- <kbd>HOME</kbd> key to focus the first day of the current month/first month in view/first year in view.
- <kbd>END</kbd> key to focus the last day of the current month/last month in view/last year in view.
- <kbd>Arrow</kbd> keys to navigate through the days/months/years. Navigating before the first item and after the last item will switch the view to the next/previous month/year/years page.

When a **day** inside the `days` view is focused, use:

- <kbd>SHIFT</kbd> + <kbd>PAGE UP</kbd> keys to move to the previous year.
- <kbd>SHIFT</kbd> + <kbd>PAGE DOWN</kbd> keys to move to the next year.
- <kbd>SPACE</kbd> or <kbd>ENTER</kbd> key to select the currently focused day.

When a **month** inside the `months` view is focused, use:

- <kbd>SPACE</kbd> or <kbd>ENTER</kbd> key to change the [`activeDate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html#activeDate) to the currently focused month and switch to `days` view.

When an **year** inside the `years` view is focused, use:

- <kbd>SPACE</kbd> or <kbd>ENTER</kbd> key to change the [`activeDate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html#activeDate) to the currently focused year and switch to `months` view.

When the **previous** or the **next** buttons (in the subheader) are focused, use:

- <kbd>SPACE</kbd> or <kbd>ENTER</kbd> key to switch to the previous/next month/year/years page.

When the **month** button (in the subheader) is focused, use:

- <kbd>SPACE</kbd> or <kbd>ENTER</kbd> key to switch to `months` view.

When the **year** button (in the subheader) is focused, use:

- <kbd>SPACE</kbd> or <kbd>ENTER</kbd> key to switch to `years` view.

## Styling

The [`IgrCalendar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html) component exposes CSS parts for almost all of its inner elements. The following table lists all of the exposed CSS parts:

|Name|Description|
|--|--|
| `header` | The header element. |
| `header-title` | The header title element. |
| `header-date` | The header date element. |
| `content` | The content element which contains the views and navigation elements. |
| `navigation` | The navigation container element. |
| `months-navigation` | The months navigation button element. |
| `years-navigation` | The years navigation button element. |
| `years-range` | The years range element. |
| `navigation-buttons` | The navigation buttons container. |
| `navigation-button` | Previous/next navigation button. |
| `days-view-container` | The days view container element. |
| `days-view` | Days view element. |
| `months-view` | The months view element. |
| `years-view` | The years view element. |
| `days-row` | Days row element. |
| `label` | Week header label element. |
| `week-number` | Week number element. |
| `week-number-inner` | Week number inner element. |
| `date` | Date element. |
| `date-inner` | Date inner element. |
| `first` | The first selected date element. |
| `last` | The last selected date element. |
| `inactive` | Inactive date element. |
| `hidden` | Hidden date element. |
| `weekend` | Weekend date element. |
| `range` | Range selected element. |
| `special` | Special date element. |
| `disabled` | Disabled date element. |
| `single` | Single selected date element. |
| `preview` | Range selection preview date element. |
| `month` | Month element. |
| `month-inner` | Month inner element. |
| `year` | Year element. |
| `year-inner` | Year inner element. |
| `selected` | Indicates selected state. Applies to date, month and year elements. |
| `current` | Indicates current state. Applies to date, month and year elements. |

Using these CSS parts we can customize thе appearance of the [`IgrCalendar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html) component like this:

```css
igc-calendar::part(date-inner selected),
igc-calendar::part(month-inner selected),
igc-calendar::part(year-inner selected),
igc-calendar::part(month-inner selected):focus,
igc-calendar::part(year-inner selected):focus {
  background: var(--ig-primary-500);
  border-color: var(--ig-primary-800);
}

igc-calendar::part(date-inner selected):hover,
igc-calendar::part(month-inner selected):hover,
igc-calendar::part(year-inner selected):hover {
  background: var(--ig-primary-500);
  border-color: var(--ig-primary-800);
}

igc-calendar::part(label),
igc-calendar::part(navigation-button),
igc-calendar::part(months-navigation):hover,
igc-calendar::part(months-navigation):focus,
igc-calendar::part(years-navigation):hover,
igc-calendar::part(years-navigation):focus {
  color: var(--ig-primary-300);
}

igc-calendar::part(navigation-button):hover,
igc-calendar::part(navigation-button):focus {
  color: var(--ig-primary-800);
}
```

The following sample demonstrates the above CSS configuration:

```css
igc-calendar::part(date-inner selected),
igc-calendar::part(month-inner selected),
igc-calendar::part(year-inner selected),
igc-calendar::part(month-inner selected):focus,
igc-calendar::part(year-inner selected):focus {
    background: #446418;
    border-color: #446418;
}

igc-calendar::part(date-inner selected):hover,
igc-calendar::part(month-inner selected):hover,
igc-calendar::part(year-inner selected):hover {
    background: #7d9b5d;
    border-color: #7d9b5d;
}

igc-calendar::part(label),
igc-calendar::part(navigation-button),
igc-calendar::part(months-navigation):hover,
igc-calendar::part(months-navigation):focus,
igc-calendar::part(years-navigation):hover,
igc-calendar::part(years-navigation):focus {
    color: #7d9b5d;
}

igc-calendar::part(navigation-button):hover,
igc-calendar::part(navigation-button):focus {
    color: #446418;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './CalendarStyling.css';
import { IgrCalendar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class CalendarStyling extends React.Component<any, any> {

    constructor(props: any) {
        super(props);                    
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrCalendar style={{width: '400px'}}/>                
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CalendarStyling/>);
```

## API References

- [`IgrCalendar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html)
- [`IgrRadio`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradio.html)
- [`IgrRadioGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradiogroup.html)
- [`activeDate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html#activeDate)
- [`activeView`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html#activeView)
- [`DateRangeDescriptor`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.daterangedescriptor.html)
- [`dateRange`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.daterangedescriptor.html#dateRange)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
