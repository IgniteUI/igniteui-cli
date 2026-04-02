---
title: React Date Picker Component - Ignite UI for React
_description: Infragistics' React Date Picker allows the user to select a date from a calendar and set it in an input element.
_keywords: React Date Picker, Ignite UI for React, Infragistics
_license: MIT
mentionedTypes: ["DatePicker"]
_tocName: Date Picker
---

# React Date Picker Component Overview

The Ignite UI for React Date Picker is a feature rich component used for entering a date through manual text input or choosing date values from a calendar dialog that pops up. Lightweight and simple to use, the Date Picker lets users navigate to a desired date with several view options – month, year, and decade. It also supports common validation properties such as minimum and maximum date constraints and required fields.

The Ignite UI for React Date Picker Component lets users pick a single date through a month-view calendar dropdown or editable input field. The React Date Picker also supports a dialog mode for selection from the calendar only, locale-aware and customizable date formatting and validation integration.

> [!NOTE]
> The [`IgrDatePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html) is a brand new component from Ignite UI for React version 18.7.0. The old [`IgrDatePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html) prior to this version has been renamed to `XDatePicker` and its respective documentation page can be found under "Deprecated Components"

## React Date Picker Example

Below you can see a sample that demonstrates how the Date Picker works when users are enabled to pick a date through a manual text input and click on the calendar icon on the left to navigate to it. See how to render it.

```tsx
import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDatePicker } from 'igniteui-react';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function App() {
    const datePickerRef = useRef<IgrDatePicker>(null);

    return (
        <div className="container sample">
            <div className="container">
                <IgrDatePicker ref={datePickerRef}/>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
```


## Getting Started with React Date Picker

First, you need to install the Ignite UI for React by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrDatePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html), its necessary CSS, and register its module, like so:

```tsx
import { IgrDatePicker } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

For a complete introduction to the Ignite UI for React, read the [**Getting Started**](../general-getting-started.md) topic.

## Using the React Date Picker Component

### Display Date Picker

To instantiate a [`IgrDatePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html) in its default `dropdown` state, use the following code:

```tsx
<IgrDatePicker></IgrDatePicker>
```

### Options

The [`IgrDatePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html) can be bound to a `date`.

```tsx
const date = new Date();

<IgrDatePicker value={date}/>
```

### Projecting components

With prefix and suffix slots we can add different content before and after the main content of the Input.

```tsx
<IgrDatePicker>
    <IgrIcon
        slot="suffix"
        name="arrow_upward"
        collection="material"
        class="small"
        onClick={() => datePickerRef.current.stepUp(DatePart.Month)}>
    </IgrIcon>
</IgrDatePicker>
```

The above snippet will add an additional icon at the end of the input, right after the default clear icon. This will not remove the default toggle icon, though as prefixes and suffixes can be stacked one after the other.

#### Customizing the toggle and clear icons

The calendar and clear icon could be templated by using the `calendar` and `clear` slots:

```tsx
<IgrDatePicker>
    <IgrIcon slot="calendar" name="calendar" collection="material" class="small"></IgrIcon>
    <IgrIcon slot="clear" name="delete" collection="material" class="small"></IgrIcon>
</IgrDatePicker>
```

#### Custom action buttons

The picker's action buttons can be templated using the `actions` slot:

```tsx
<IgrDatePicker>
    <IgrButton
        slot='actions'
        onClick={() => datePickerRef.current.showWeekNumbers = true}>
        <span>Show Week Numbers</span>
    </IgrButton>
</IgrDatePicker>
```

### Keyboard Navigation

The [`IgrDatePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html) has intuitive keyboard navigation that makes it easy to increment, decrement, or jump through different DateParts among others without having to touch the mouse.

|Keys|Description|
|----|-----------|
| <kbd>←</kbd> | Move one character to the beginning |
| <kbd>→</kbd> | Move one character to the end |
| <kbd>HOME</kbd> | Move to the beginning |
| <kbd>END</kbd> | Move to the end |
| <kbd>CTRL</kbd> / <kbd>CMD</kbd> + <kbd>←</kbd> | Move to the beginning of the date/time section - current one or left one |
| <kbd>CTRL</kbd> / <kbd>CMD</kbd> + <kbd>→</kbd> | Move to the end of the date/time section - current on or right one |
| Focus on a date/time part + <kbd>↓</kbd> | Decrements a date/time part |
| Focus on a date/time part + <kbd>↑</kbd> | Increments a date/time part |
| <kbd>CTRL</kbd> / <kbd>CMD</kbd> + <kbd>;</kbd> | Sets the current date/time as the value of the editor |
| <kbd>ESC</kbd> | Closes the calendar pop-up and focuses the input field |

## Examples

### Dialog Mode

The [`IgrDatePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html) also supports a `dialog` mode:

```tsx
<IgrDatePicker mode="dialog"></IgrDatePicker>
```

```tsx
import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDatePicker } from 'igniteui-react';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function App() {
    const datePickerRef = useRef<IgrDatePicker>(null);

    return (
        <div className="container sample">
            <div className="container">
                <IgrDatePicker ref={datePickerRef} mode="dialog" />
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
```


### Display and input format

[`inputFormat`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html#inputFormat) and [`displayFormat`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html#displayFormat) are properties which can be set to make the picker's editor follow a specified format. The [`inputFormat`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html#inputFormat) is locale based, so if none is provided, the picker will default to the one used by the browser.

A good thing to note is that the Date Picker Component will always add a leading zero on the `date` and `month` portions if they were provided in a format that does not have it, e.g. `d/M/yy` becomes `dd/MM/yy`. This applies only during editing.

[`displayFormat`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html#displayFormat) is used to format the picker's input when it is not focused. If no [`displayFormat`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html#displayFormat) is provided, the picker will use the [`inputFormat`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html#inputFormat) as its [`displayFormat`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html#displayFormat).

More information about these can be found in the [`IgrDateTimeInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatetimeinput.html) format section.

```tsx
import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDatePicker } from 'igniteui-react';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function App() {
    const datePickerRef = useRef<IgrDatePicker>(null);

    return (
        <div className="container sample">
            <div className="container">
                <IgrDatePicker ref={datePickerRef} displayFormat='shortDate' inputFormat='dd/MM/yy' />
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
```


### Increment and decrement

The [`IgrDatePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html) exposes [`stepUp`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html#stepUp) and [`stepDown`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html#stepDown) methods. Both of which come from the [`IgrDateTimeInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatetimeinput.html) and can be used for incrementing and decrementing a specific `DatePart` of the currently set date.

```tsx
<IgrDatePicker>
    <IgrIcon
        slot="prefix"
        name="arrow_upward"
        collection="material"
        onClick={() => datePickerRef.current.stepUp(DatePart.Month)}>
    </IgrIcon>
    <IgrIcon
        slot="suffix"
        name="arrow_downward"
        collection="material"
        onClick={() => datePickerRef.current.stepDown(DatePart.Month)}>
    </IgrIcon>
</IgrDatePicker>
```

### In Forms

The [`IgrDatePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html) could be used in a form element, the component's [`min`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html#min) and [`max`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html#max) properties act as form validators.

In forms, we can handle the `change` event of the component and update the value of the label.

```tsx
import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrDatePicker } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function App() {
    const formRef = useRef<HTMLFormElement>(null);

    const initialDate = new Date(2024, 4, 15);
    const minDate = new Date(initialDate.getFullYear(), initialDate.getMonth(), initialDate.getDate() - 10);
    const maxDate = new Date(initialDate.getFullYear(), initialDate.getMonth(), initialDate.getDate() + 15);

    const [datePickerValue, setDatePickerValue] = useState<Date | null>(initialDate);
    const [formStatus, setFormStatus] = useState<string>('');

    useEffect(() => {
        updateFormStatus();
    }, [datePickerValue]);

    const updateFormStatus = () => {
        if (formRef.current) {
            setFormStatus(`${formRef.current.checkValidity()}`);
        }
    };

    const handleDateChange = (e: any) => {
        const newValue = e.detail;
        setDatePickerValue(newValue);
    };

    const handleReset = (event: React.MouseEvent<IgrButton>) => {
        event.preventDefault();
        setDatePickerValue(null);
        setFormStatus('false');
    };

    return (
        <div className="container sample">
            <div className="container">
                <form ref={formRef}>
                    <div>
                        <IgrDatePicker id='datePicker' value={datePickerValue ?? undefined} min={minDate} max={maxDate}
                            onChange={handleDateChange}
                        />
                        <IgrButton id="resetButton" onClick={handleReset}><span>Reset</span></IgrButton>
                    </div>
                </form>
                <p id="datePickerValue">
                    Date picker value: {datePickerValue ? datePickerValue.toLocaleString() : 'None'}
                </p>
                <p id="formStatus">Form valid: {formStatus}</p>
            </div>
        </div>
    );
}

// Rendering the React component to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```


### Calendar Specific settings

The [`IgrDatePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html) can modify some of the calendar's settings via the properties that the Date Picker exposes. Some of these include [`visibleMonths`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html#visibleMonths) which allows more than one calendar to be displayed when the picker expands, [`weekStart`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html#weekStart) which determines the starting day of the week, [`showWeekNumbers`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html#showWeekNumbers) which shows the number for each week in the year and more.

## Internationalization

The localization of the [`IgrDatePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html) can be controlled through its [`locale`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html#locale) input.

Here is how a [`IgrDatePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html) with Japanese locale definition would look like:

```tsx
<IgrDatePicker locale="ja-JP"></IgrDatePicker>
```

## Styling

The [`IgrDatePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html) component derives from the [`IgrInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html) and [`IgrCalendar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html) component, so it exposes all available CSS parts. See [Input Styling](../inputs/input.md#styling) and [Calendar Styling](calendar.md#styling) for reference.

```css
igc-date-picker::part(header) {
  background-color: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
}
igc-date-picker::part(calendar-content) {
  background-color: var(--ig-surface-300);
}
igc-date-picker::part(date-inner current) {
  color: var(--ig-info-300);
  background-color: var(--ig-surface-300);
}
igc-date-picker::part(navigation-button):hover,
igc-date-picker::part(months-navigation):hover,
igc-date-picker::part(years-navigation):hover {
  color: var(--ig-secondary-500);
}
igc-date-picker::part(month-inner current),
igc-date-picker::part(year-inner current),
igc-date-picker::part(navigation-button),
igc-date-picker::part(months-navigation),
igc-date-picker::part(years-navigation) {
  color: var(--ig-info-300);
}
igc-date-picker::part(date-inner selected),
igc-date-picker::part(month-inner selected),
igc-date-picker::part(year-inner selected) {
  color: var(--ig-secondary-500-contrast);
  background-color: var(--ig-secondary-500);
}
```

```css
igc-date-picker::part(header) {
    background-color: #345779;
    color: #ffffff;
}
igc-date-picker::part(calendar-content) {
    background-color: #fdfdfd;
}
igc-date-picker::part(date-inner current) {
    color: #2dabe8;
    background-color: #fdfdfd;
}
igc-date-picker::part(navigation-button):hover,
igc-date-picker::part(months-navigation):hover,
igc-date-picker::part(years-navigation):hover {
    color: #345779;
}
igc-date-picker::part(month-inner current),
igc-date-picker::part(year-inner current),
igc-date-picker::part(navigation-button),
igc-date-picker::part(months-navigation),
igc-date-picker::part(years-navigation) {
    color: #2dabe8;
}
igc-date-picker::part(date-inner selected),
igc-date-picker::part(month-inner selected),
igc-date-picker::part(year-inner selected) {
    color: #fdfdfd;
    background-color: #345779;
}
```
```tsx
import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDatePicker } from 'igniteui-react';

import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './DatePickerStyling.css';

export default function App() {
    const datePickerRef = useRef<IgrDatePicker>(null);

    return (
        <div className="container sample">
            <div className="container">
                <IgrDatePicker ref={datePickerRef} mode="dialog" />
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
```


## API References

- [`IgrInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html)
- [`IgrCalendar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html)
- [`IgrDatePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
