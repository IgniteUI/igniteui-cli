---
title: React Date Range Picker Component - Ignite UI for React
_description: Infragistics' React Date Range Picker allows the user to select a range of two dates from a calendar and set it in an input element.
_keywords: React Date Range Picker, Ignite UI for React, Infragistics
_license: MIT
mentionedTypes: ["DateRangePicker"]
_tocName: Date Range Picker
---

# React Date Range Picker Overview

The Ignite UI for React Date Range Picker is a lightweight component that includes a text input and a calendar pop-up, allowing users to easily select start and end dates. It is highly customizable to fit various application requirements, offering features such as date range restrictions, configurable date formats, and more.

## Date Range Picker Example

Below is a sample demonstrating the [`IgrDateRangePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html) component in action, where a calendar pop-up allows users to select start and end dates.

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrDateRangePicker } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function DrpOverview() {
    const today: Date = new Date();
    let endDate: Date = new Date();
    endDate.setDate(today.getDate() + 3);

  return (
    <div className="container sample center">
      <IgrDateRangePicker label="Date Range" value={{start: today, end: endDate}}/>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DrpOverview />);
```


### Getting Started

To start using the [`IgrDateRangePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html), you first need to install the Ignite UI for React by running the following command:

```cmd
npm install igniteui-react
```

After that, you need to import the [`IgrDateRangePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html) and its necessary CSS, as follows:

```tsx
import { IgrDateRangePicker } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

Now you can start with a basic configuration of the React [`IgrDateRangePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html).

For a complete introduction to the Ignite UI for React, read the [**Getting Started**](../general-getting-started.md) topic.

## Usage

The [`IgrDateRangePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html) allows users to select a start and end date either by choosing a date range from a dropdown/calendar pop-up or by typing directly into the input fields - one for the start date and one for the end date.

The picker offers two modes for displaying date values: single input and two inputs. In single input mode, the field is non-editable, and the date range cannot be edited by typing. In two inputs mode, however, users can edit the start and end dates by typing in separate input fields.

When the calendar is visible, a date range can be selected by choosing both a start and end date. Selecting a date will set both the start and end date, and once a second date is chosen, it will set the end date. If a range is already selected, clicking any other date on the calendar will start a new range selection.

### Display Date Range Picker

To instantiate a [`IgrDateRangePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html) in its default single input mode, use the following code:

```tsx
<IgrDateRangePicker/>
```

To switch the [`IgrDateRangePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html) to use two inputs, set the [`useTwoInputs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#useTwoInputs) property to `true`.

```tsx
<IgrDateRangePicker useTwoInputs/>
```

### Value

In addition to being selected or typed by the user, the range value of the [`IgrDateRangePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html) can also be set using the [`value`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#value) property. It's important to note that the value must follow the format: **{ start: startDate, end: endDate }**, where `startDate` and `endDate` are `Date` objects representing the selected range.

```tsx
const dateRangeRef = useRef<IgrDateRangePicker>();
let startDate = new Date(2025, 4, 6);
let endDate = new Date(2025, 4, 8);
useEffect (() => {
  dateRangeRef.current.value = { start: startDate, end: endDate }
}, [])

return (
  <IgrDateRangePicker ref={dateRangeRef} />
);
```

In addition, the value can be set as attribute. In this case it should represent an object that can be parsed correctly as JSON, where the `start` and `end` fields should have date values in the ISO 8601 format:

```tsx
<IgrDateRangePicker value={{start: new Date('2025-01-01'), end: new Date('2025-01-02')}}/>
```

### Read-only & Non-editable

You can also make the [`IgrDateRangePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html) read-only, which disables changing the range value through both typing and calendar selection, disables keyboard navigation, and makes the calendar and clear icons appear visually disabled. This is useful when the range is assigned via the value attribute and is intended to be display-only. To enable this behavior, simply set the [`readOnly`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#readOnly) property.

```tsx
<IgrDateRangePicker useTwoInputs readOnly/>
```

Alternatively, you can use the [`nonEditable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#nonEditable) property, which, unlike [`readOnly`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#readOnly), only prevents editing the input(s) via typing, while still allowing selection through the calendar and clearing via the clear icon.

```tsx
<IgrDateRangePicker useTwoInputs nonEditable/>
```

### Popup modes

By default, when clicked, the [`IgrDateRangePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html) opens its calendar pop-up in `dropdown` mode. Alternatively, the calendar can be opened in `dialog` mode by setting the [`mode`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#mode) property to `dialog`.

```tsx
<IgrDateRangePicker mode='dialog'/>
```

### Keyboard Navigation

The [`IgrDateRangePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html) features intuitive keyboard navigation, allowing users to easily increment, decrement, or jump between different component parts, all without needing to use a mouse.

The available keyboard navigation options vary depending on whether the component is in single input or two inputs mode.

**Two Inputs Mode:**

|Keys|Description|
|----|-----------|
| <kbd>←</kbd> | Moves the caret one character to the left |
| <kbd>→</kbd> | Moves the caret one character to the right |
| <kbd>CTRL</kbd> + <kbd>ArrowLeft</kbd> | Moves the caret to the beginning of the current input mask section or to the start of the previous one if it's already at the beginning |
| <kbd>CTRL</kbd> + <kbd>ArrowRight</kbd> | Moves the caret to the end of the current input mask section or to the end of the next one if it's already at the end |
| <kbd>ArrowUp</kbd> | Increments the currently "focused" part of the input mask by one step |
| <kbd>ArrowDown</kbd> | Decrements the currently "focused" part of the input mask by one step |
| <kbd>HOME</kbd> | Moves the caret to the beginning of the input mask |
| <kbd>END</kbd> | Moves the caret to the end of the input mask |
| <kbd>CTRL</kbd> + <kbd>;</kbd> | Sets the current date as the value of the component |

**Both Single and Two Inputs Modes:**

|Keys|Description|
|----|-----------|
| <kbd>ALT</kbd> + <kbd>↓</kbd> | Opens the calendar dropdown |
| <kbd>ALT</kbd> + <kbd>↑</kbd> | Closes the calendar dropdown |

You can also navigate within the calendar pop-up using the keyboard. The navigation is the same as in the [`IgrCalendar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html) component.

|Keys|Description|
|----|-----------|
| <kbd>↑</kbd> / <kbd>↓</kbd> / <kbd>←</kbd> / <kbd>→</kbd>| Navigates through the days in the month |
| <kbd>ENTER</kbd> | Selects the currently focused day |
| <kbd>PAGE UP</kbd> | Moves to the previous month's view |
| <kbd>PAGE DOWN</kbd> | Moves to the next month's view |
| <kbd>SHIFT</kbd> + <kbd>PAGE UP</kbd> | Moves to the previous year |
| <kbd>SHIFT</kbd> + <kbd>PAGE DOWN</kbd> | Moves to the next year |
| <kbd>HOME</kbd> | Focuses the first day of the current month that is in view (or earliest month when more than one month view is displayed) |
| <kbd>END</kbd> | Focuses the last day of the current month that is in view. (or latest month when more than one month view is displayed) |
| <kbd>Escape</kbd> | Closes the calender pop-up |

## Layout

### Label

You can define a label for the [`IgrDateRangePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html) component using the [`label`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#label) property when it is in single input mode. In two inputs mode, you can use the [`labelStart`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#labelStart) and [`labelEnd`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#labelEnd) properties to define labels for the start and end date input fields, respectively.

```tsx
<IgrDateRangePicker label='Date Range'/>
```

```tsx
<IgrDateRangePicker useTwoInputs labelStart='Start Date' labelEnd='End Date'/>
```

### Format

You also have the option to customize the date format displayed in the input fields. There are three properties available for this purpose: [`locale`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#locale), [`inputFormat`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#inputFormat), and [`displayFormat`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#displayFormat).

The [`locale`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#locale) property allows you to set the desired locale identifier, which determines how the date is formatted based on regional conventions.
For example, to display the date in a Japanese format, you can set the locale property like this:

```tsx
<IgrDateRangePicker locale='ja-JP'/>
```

If you want to manually define the date format, you can use the [`inputFormat`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#inputFormat) property by passing a custom format string:

```tsx
<IgrDateRangePicker inputFormat='dd/MM/yy'/>
```

The [`displayFormat`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#displayFormat) property also accepts a custom format string, but it only applies when the input field is idle (i.e., not focused). When the field is focused, the format reverts to the default or to the one defined by [`inputFormat`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#inputFormat), if both properties are used together:

```tsx
<IgrDateRangePicker inputFormat='dd/MM/yy' displayFormat='yy/MM/dd'/>
```

### Calendar Layout and Formatting

You can further customize the pop-up calendar using various properties:

|Name|Type|Description|
|--|--|--|
| [`orientation`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#orientation) | 'vertical' or 'horizontal' | Allows you to set whether the calendar should be displayed vertically or horizontally. |
| [`visibleMonths`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#visibleMonths) | string | Controls how many months are visible at a time, with a value of either 1 or 2. |
| [`showWeekNumbers`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#showWeekNumbers) | string | Enables or disables the week number column in the calendar. |
| [`open`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#open) | boolean | Determines whether the calendar picker is open. |
| [`keepOpenOnSelect`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#keepOpenOnSelect) | boolean | Keeps the calendar picker open after a date selection. |
| [`keepOpenOnOutsideClick`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#keepOpenOnOutsideClick) | boolean | Keeps the calendar picker open when clicking outside of it. |
| [`weekStart`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#weekStart) | string | Sets the start day of the week. |
| [`hideOutsideDays`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#hideOutsideDays) | boolean | Hides days that fall outside the current month view. |
| [`hideHeader`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#hideHeader) | boolean | Hides the calendar header (applicable only in dialog mode). |
| [`headerOrientation`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#headerOrientation) | 'vertical' or 'horizontal' | Aligns the calendar header vertically or horizontally (dialog mode only). |
| [`activeDate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#activeDate) | Date | Sets the date that is initially highlighted in the calendar. If not set, the current date becomes the active date. |

```tsx
<IgrDateRangePicker orientation='vertical' visibleMonths={1} showWeekNumbers/>
```

### Min & Max

You can also set the [`min`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#min) and [`max`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#max) properties to restrict user input by disabling calendar dates outside the defined range. These properties act as validators, so even if the user manually types a date outside the range, the [`IgrDateRangePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html) will become invalid.

```tsx
<IgrDateRangePicker min={new Date('2025-05-06')} max={new Date('2025-05-10')}/>
```

### Custom & Predefined Date Ranges

You can also add custom date range chips to the calendar pop-up for faster range selection using the [`customRanges`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#customRanges) property. For example, you can create a custom date range chip to quickly select the range for the upcoming 7 days, ending with the current date. In addition, by setting the [`usePredefinedRanges`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#usePredefinedRanges) property, a set of predefined ranges chips will be displayed along with the custom ones.

```tsx
const today = new Date();
const nextSeven = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() + 7
);
const nextWeek: CustomDateRange[] = [
  {
    label: "Next 7 days",
    dateRange: {
      start: today,
      end: nextSeven
    }
  }
];

return (
  <IgrDateRangePicker usePredefinedRanges customRanges={nextWeek} />
);
```

Now, when you click the newly created **"Next 7 days"** chip in the calendar pop-up, the range will automatically be selected, from today through the next 7 days.

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDateRangePicker } from 'igniteui-react';
import { CustomDateRange } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function DrpCustom() {
    const today = new Date();
    const nextSeven = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 7
    );
    const nextWeek: CustomDateRange[] = [
      {
        label: "Next 7 days",
        dateRange: {
          start: today,
          end: nextSeven,
        },
      },
    ];

  return (
    <div className="container sample center">
      <IgrDateRangePicker 
        mode="dialog" 
        usePredefinedRanges 
				customRanges={nextWeek}
        label="Custom Ranges">
      </IgrDateRangePicker>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DrpCustom/>);
```


### Disabled & Special dates

You also have the ability to set disabled dates in the calendar to narrow the range of dates the user can choose from. To set the disabled dates, you can use the [`disabledDates`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#disabledDates) property.

```tsx
const dateRangeRef = useRef<IgrDateRangePicker>();
const minDate = new Date(2025, 4, 5);
const maxDate = new Date(2025, 4, 15);
useEffect (() => {
  dateRangeRef.current.disabledDates = [
    {
      type: DateRangeType.Between,
      dateRange: [minDate, maxDate]
    }
  ] as DateRangeDescriptor[];
}, [])

return (
  <IgrDateRangePicker ref={dateRangeRef} />
);
```

You can see more information about all the possibilities that the [`disabledDates`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#disabledDates) property offers here: [Disabled dates](./calendar.md#disabled-dates)

You can also do the same if you want to set one or more special dates in the calendar; the only difference is that you need to use the [`specialDates`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#specialDates) property instead. [Special dates](./calendar.md#special-dates)

### Forms

The [`IgrDateRangePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html) component can also be used seamlessly with the HTML form element. The [`min`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#min), [`max`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#max), and [`required`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#required) properties act as form validators.

```css
igc-button {
    margin-top: 15px;
}
  
igc-button:nth-of-type(2) {
    margin-left: 3px;
}
```
```tsx
import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDateRangePicker, IgrButton, IgrDialog } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function DrpForm() {
  const dialog = useRef<IgrDialog>(null);
  const [range, setRange] = useState({ start: null, end: null });

  const showDialog = (event: React.FormEvent<HTMLFormElement>) => {
    if (dialog.current) {
      event.preventDefault();
      dialog.current.show();
    }
  };

  const handleDateRangeChange = (event: CustomEvent) => {
    const newRange = {
      start: event.detail?.start || null,
      end: event.detail?.end || null,
    };
    setRange(newRange);
  };

  return (
    <div className="container sample center">
      <form id="DateForm" onSubmit={showDialog}>
        <fieldset>
          <IgrDateRangePicker
            required
            onChange={handleDateRangeChange}
            label="Date Range"
          ></IgrDateRangePicker>
          <IgrButton variant="outlined" type="submit">
            Submit
          </IgrButton>
          <IgrButton variant="outlined" type="reset">
            Reset
          </IgrButton>
        </fieldset>
      </form>
      <IgrDialog ref={dialog}>
        <pre>
          <b>Start</b>: {range?.start?.toString() ?? ""} <br />
          <b>End</b>: {range?.end?.toString() ?? ""}
        </pre>
      </IgrDialog>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DrpForm/>);
```


## Additional configuration

### Properties

In addition to the properties we've already covered, the [`IgrDateRangePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html) component offers a variety of additional properties that allow you to further configure its behavior.

|Name|Type|Description|
|--|--|--|
| [`disabled`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#disabled) | boolean | Disables the component. |
| [`nonEditable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#nonEditable) | boolean | Disables typing in the input field(s). |
| [`placeholder`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#placeholder) | string | Placeholder text for the single input mode. |
| [`placeholderStart`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#placeholderStart) | string | Placeholder text for the start date input (two inputs mode). |
| [`placeholderEnd`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#placeholderEnd) | string | Placeholder text for the end date input (two inputs mode). |
| [`outlined`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#outlined) | boolean | Determines whether the input part will have outline appearance in the [Material theme](../themes/overview.md). |
| [`prompt`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#prompt) | string | The prompt character used for unfilled parts of the input(s) mask. |
| [`resourceStrings`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#resourceStrings) | IgcDateRangePickerResourceStrings | Resource strings for localization of the date-range picker and the calendar. |

### Slots

You also have the ability to add custom content and modify the appearance of the [`IgrDateRangePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html) component using the available slots.

The `prefix` and `suffix` slots allow you to insert custom content before or after the input field (only available in single input mode):

```tsx
<IgrDateRangePicker>
  <IgrIcon slot='prefix' name='down_arrow_icon'></IgrIcon>
  <IgrIcon slot='suffix' name='upload_icon'></IgrIcon>
</IgrDateRangePicker>
```

In two inputs mode, you can use the `prefix-start`, `prefix-end`, `suffix-start`, and `suffix-end` slots instead to target the individual inputs.

Another set of useful slots are `clear-icon` and `calendar-icon`, which allow you to customize the icons for the clear and calendar buttons in the input fields:

```tsx
<IgrDateRangePicker>
  <IgrIcon slot="clear-icon" name="apps_icon"></IgrIcon>
  <IgrIcon slot="calendar-icon" name="bin_icon"></IgrIcon>
</IgrDateRangePicker>
```

In two inputs mode, you can also customize the default “to” text between the fields by using the `separator` slot:

```tsx
<IgrDateRangePicker useTwoInputs>
  <span slot='separator'>till</span>
</IgrDateRangePicker>
```

The `actions` slot allows you to insert a custom action button with your own logic. For example, the button below toggles week numbers column in the calendar:

```tsx
const dateRangeRef = useRef<IgrDateRangePicker>();
const toggleWeekNumbers = () => {
  dateRangeRef.current.showWeekNumbers = !dateRangeRef.current.showWeekNumbers;
};

return (
  <IgrDateRangePicker ref={dateRangeRef}>
    <IgrButton slot="actions" onClick={toggleWeekNumbers}>Toggle Week Numbers</IgrButton>
  </IgrDateRangePicker>
);
```

In addition to the slots we've already covered, the following slots are also available in the [`IgrDateRangePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html) component:

|Name|Description|
|--|--|
| `title` | Renders content for the calendar title. Applicable only in dialog mode. |
| `helper-text` | Renders content below the input field(s). |
| `header-date` | Replaces the default current date/range text in the calendar header. Applicable only in dialog mode. |
| `clear-icon-start` | Custom clear icon for the start input (two inputs mode). |
| `clear-icon-end` | Custom clear icon for the end input (two inputs mode). |
| `calendar-icon-start` | Custom calendar icon for the start input (two inputs mode). |
| `calendar-icon-end` | Custom calendar icon for the end input (two inputs mode). |
| `calendar-icon-open` | Icon or content shown when the picker is open (applies to both inputs in two inputs mode). |
| `calendar-icon-open-start` | Icon or content for the open state of the start input (two inputs mode).|
| `calendar-icon-open-end` | Icon or content for the open state of the end input (two inputs mode). |

```css
h3 {
    margin: 2rem 0 0.5rem 0;
}
  
h3:nth-of-type(1) {
    margin-top: unset;
}
  
.container {
    overflow-y: scroll;
    padding-bottom: 1.2rem;
}
```
```tsx
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrDateRangePicker,
  IgrIcon,
  IgrButton,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const Apps = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160ZM240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z"/></svg>';
const Bin = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>';
const Down = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-360 280-560h400L480-360Z"/></svg>';
const Upload = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>';

export default function DrpSlots() {
  const dateRangeRef = useRef<IgrDateRangePicker>();

	const today: Date = new Date();
	let tomorrow: Date = new Date();
	tomorrow.setDate(today.getDate() + 1);
	
  useEffect(() => {
		registerIconFromText("appsIcon", Apps);
		registerIconFromText("binIcon", Bin);
		registerIconFromText("downArrowIcon", Down);
		registerIconFromText("uploadIcon", Upload);
  }, []);

  const toggleWeekNumbers = () => {
    dateRangeRef.current.showWeekNumbers = !dateRangeRef.current.showWeekNumbers;
  };

  return (
    <div className="container sample center">
      <h3>Actions</h3>
      <IgrDateRangePicker mode="dialog" ref={dateRangeRef}>
        <IgrButton slot="actions" onClick={toggleWeekNumbers}>
          Toggle Week Numbers
        </IgrButton>
      </IgrDateRangePicker>
      <h3>Custom separator</h3>
      <IgrDateRangePicker useTwoInputs>
        <span slot="separator">till</span>
      </IgrDateRangePicker>
      <h3>Helper text</h3>
      <IgrDateRangePicker>
        <span slot="helper-text">Helper text goes here.</span>
      </IgrDateRangePicker>
      <h3>Prefix & Suffix</h3>
      <IgrDateRangePicker value={{start: today, end: tomorrow}}>
        <IgrIcon slot="prefix" name="downArrowIcon"></IgrIcon>
        <IgrIcon slot="suffix" name="uploadIcon"></IgrIcon>
      </IgrDateRangePicker>
      <h3>Clear & Calendar icons</h3>
      <IgrDateRangePicker value={{start: today, end: tomorrow}}>
        <IgrIcon slot="clear-icon" name="binIcon"></IgrIcon>
        <IgrIcon slot="calendar-icon" name="appsIcon"></IgrIcon>
      </IgrDateRangePicker>
      <h3>Custom calendar header + title</h3>
      <IgrDateRangePicker mode="dialog">
        <span slot="title">Custom calendar title goes here.</span>
        <span slot="header-date">
          Custom content instead of date goes here.
        </span>
      </IgrDateRangePicker>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DrpSlots />);
```


### Methods

In addition to the properties and slots, the [`IgrDateRangePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html) also exposes few methods that you can use:

|Name|Description|
|--|--|
| [`show`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#show) | Displays the calendar picker component. |
| [`hide`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#hide) | Hides the calendar picker component. |
| [`toggle`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#toggle) | Toggles the calendar picker between the shown and hidden states. |
| [`clear`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#clear) | Clears the input fields, removing any user input. |
| [`select`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#select) | Selects a date range value in the picker. |
| [`setCustomValidity`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html#setCustomValidity) | Sets a custom validation message. If the provided message is not empty, the input will be marked as invalid. |

## Styling

Since the [`IgrDateRangePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html) component uses the [`IgrCalendar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html) component, it also inherits the Calendar's CSS parts, allowing you to style both components seamlessly. You can find the full list of exposed Calendar CSS parts here: [Calendar Styling](calendar.md#styling). In addition to the Calendar's CSS parts, the [`IgrDateRangePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html) also exposes some unique CSS parts that you can use to customize its appearance:

|Name|Description|
|--|--|
| `separator` | The separator element between the two inputs. |
| `ranges` | The wrapper that renders the custom and predefined ranges. |
| `label` | The label wrapper that renders content above the target input. |
| `container` | The main wrapper that holds all main input elements. |
| `input` | The native input element. |
| `prefix` | The prefix wrapper. |
| `suffix` | The suffix wrapper. |
| `calendar-icon` | The calendar icon wrapper for the closed state. |
| `calendar-icon-start` | The calendar icon wrapper for the closed state of the start input (two inputs). |
| `calendar-icon-end` | The calendar icon wrapper for the closed state of the end input (two inputs). |
| `calendar-icon-open` | The calendar icon wrapper for the open state. |
| `calendar-icon-open-start` | The calendar icon wrapper for the open state of the start input (two inputs). |
| `calendar-icon-open-end` | The calendar icon wrapper for the open state of the end input (two inputs). |
| `clear-icon` | The clear icon wrapper (single input). |
| `clear-icon-start` | The clear icon wrapper for the start input (two inputs). |
| `clear-icon-end` | The clear icon wrapper for the end input (two inputs). |
| `actions` | The actions wrapper. |
| `helper-text` | The helper-text wrapper that renders content below the target input. |

```css
igc-date-range-picker::part(label) {
  color: var(--ig-gray-600);
}

igc-date-range-picker::part(calendar-icon-start),
igc-date-range-picker::part(calendar-icon-end) {
  background-color: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
}

igc-date-range-picker::part(calendar-icon-open-start),
igc-date-range-picker::part(calendar-icon-open-end) {
  background-color: var(--ig-primary-700);
  color: var(--ig-primary-700-contrast);
}

igc-date-range-picker::part(clear-icon-start),
igc-date-range-picker::part(clear-icon-end) {
  background-color: var(--ig-error-500);
  color: var(--ig-error-500-contrast);
}
```

```css
igc-date-range-picker::part(label) {
    color: var(--ig-gray-600);
}

igc-date-range-picker::part(calendar-icon-start),
igc-date-range-picker::part(calendar-icon-end) {
    background-color: var(--ig-primary-500);
    color: var(--ig-primary-500-contrast);
}

igc-date-range-picker::part(calendar-icon-open-start),
igc-date-range-picker::part(calendar-icon-open-end) {
    background-color: var(--ig-primary-800);
    color: var(--ig-primary-800-contrast);
}

igc-date-range-picker::part(clear-icon-start),
igc-date-range-picker::part(clear-icon-end) {
    background-color: var(--ig-error-500);
    color: var(--ig-error-500-contrast);
}
```
```tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrDateRangePicker,
  IgrIcon,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const UpPlane = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-120v-80h720v80H120Zm70-200L40-570l96-26 112 94 140-37-207-276 116-31 299 251 170-46q32-9 60.5 7.5T864-585q9 32-7.5 60.5T808-487L190-320Z"/></svg>';
const DownPlane = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-120v-80h720v80H120Zm622-202L120-499v-291l96 27 48 139 138 39-35-343 115 34 128 369 172 49q25 8 41.5 29t16.5 48q0 35-28.5 61.5T742-322Z"/></svg>';

export default function DrpOverview() {
  useEffect (() => {
    registerIconFromText("UpPlaneIcon", UpPlane);
    registerIconFromText("DownPlaneIcon", DownPlane);
  }, [])

  return (
    <div className="container sample center">
      <IgrDateRangePicker
        labelStart="Departure date"
        labelEnd="Arrival date"
        useTwoInputs>
        <IgrIcon slot="calendar-icon-start" name="UpPlaneIcon"></IgrIcon>
        <IgrIcon slot="calendar-icon-end" name="DownPlaneIcon"></IgrIcon>
        <span slot="separator"></span>
        </IgrDateRangePicker>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DrpOverview />);
```


## API References

- [`IgrInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html)
- [`IgrCalendar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html)
- [`IgrDateRangePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html)
- [`IgrDateTimeInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatetimeinput.html)
- [`IgrDialog`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdialog.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
