---
title: Web Components Date Range Picker Component - Ignite UI for Web Components
_description: Infragistics' Web Components Date Range Picker allows the user to select a range of two dates from a calendar and set it in an input element.
_keywords: Web Components Date Range Picker, Ignite UI for Web Components, Infragistics
_license: MIT
mentionedTypes: ["DateRangePicker"]
_tocName: Date Range Picker
---

# Web Components Date Range Picker Overview

The Ignite UI for Web Components Date Range Picker is a lightweight component that includes a text input and a calendar pop-up, allowing users to easily select start and end dates. It is highly customizable to fit various application requirements, offering features such as date range restrictions, configurable date formats, and more.

## Date Range Picker Example

Below is a sample demonstrating the [`IgcDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html) component in action, where a calendar pop-up allows users to select start and end dates.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Getting Started

<!-- WebComponents -->

To start using the [`IgcDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html), you first need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

After that, you need to import the [`IgcDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html), its necessary CSS, and register its module, as follows:

```ts
import { defineComponents, IgcDateRangePickerComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcDateRangePickerComponent);
```

<!-- end: WebComponents -->

Now you can start with a basic configuration of the Web Components [`IgcDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html).

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

## Usage

The [`IgcDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html) allows users to select a start and end date either by choosing a date range from a dropdown/calendar pop-up or by typing directly into the input fields - one for the start date and one for the end date.

The picker offers two modes for displaying date values: single input and two inputs. In single input mode, the field is non-editable, and the date range cannot be edited by typing. In two inputs mode, however, users can edit the start and end dates by typing in separate input fields.

When the calendar is visible, a date range can be selected by choosing both a start and end date. Selecting a date will set both the start and end date, and once a second date is chosen, it will set the end date. If a range is already selected, clicking any other date on the calendar will start a new range selection.

### Display Date Range Picker

To instantiate a [`IgcDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html) in its default single input mode, use the following code:

```html
<igc-date-range-picker>
</igc-date-range-picker>
```

To switch the [`IgcDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html) to use two inputs, set the [`useTwoInputs`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#useTwoInputs) property to `true`.

```html
<igc-date-range-picker use-two-inputs="true">
</igc-date-range-picker>
```

### Value

In addition to being selected or typed by the user, the range value of the [`IgcDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html) can also be set using the [`value`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#value) property. It's important to note that the value must follow the format: **{ start: startDate, end: endDate }**, where `startDate` and `endDate` are `Date` objects representing the selected range.

```ts
let dateRange = document.querySelector('igc-date-range-picker') as IgcDateRangePickerComponent;
let startDate = new Date(2025, 4, 6);
let endDate = new Date(2025, 4, 8);
dateRange.value = { start: startDate, end: endDate }
```

<!-- WebComponents, React -->

In addition, the value can be set as attribute. In this case it should represent an object that can be parsed correctly as JSON, where the `start` and `end` fields should have date values in the ISO 8601 format:

```html
<igc-date-range-picker value='{"start":"2025-01-01","end":"2025-01-02"}'>
<igc-date-range-picker/>
```

<!-- end: WebComponents, React -->

### Read-only & Non-editable

You can also make the [`IgcDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html) read-only, which disables changing the range value through both typing and calendar selection, disables keyboard navigation, and makes the calendar and clear icons appear visually disabled. This is useful when the range is assigned via the value attribute and is intended to be display-only. To enable this behavior, simply set the [`readOnly`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#readOnly) property.

```html
<igc-date-range-picker use-two-inputs="true" readonly>
</igc-date-range-picker>
```

Alternatively, you can use the [`nonEditable`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#nonEditable) property, which, unlike [`readOnly`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#readOnly), only prevents editing the input(s) via typing, while still allowing selection through the calendar and clearing via the clear icon.

```html
<igc-date-range-picker use-two-inputs="true" non-editable="true">
</igc-date-range-picker>
```

### Popup modes

By default, when clicked, the [`IgcDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html) opens its calendar pop-up in `dropdown` mode. Alternatively, the calendar can be opened in `dialog` mode by setting the [`mode`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#mode) property to `dialog`.

```html
<igc-date-range-picker mode="dialog">
</igc-date-range-picker>
```

### Keyboard Navigation

The [`IgcDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html) features intuitive keyboard navigation, allowing users to easily increment, decrement, or jump between different component parts, all without needing to use a mouse.

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

You can also navigate within the calendar pop-up using the keyboard. The navigation is the same as in the [`IgcCalendarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccalendarcomponent.html) component.

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

You can define a label for the [`IgcDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html) component using the [`label`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#label) property when it is in single input mode. In two inputs mode, you can use the [`labelStart`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#labelStart) and [`labelEnd`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#labelEnd) properties to define labels for the start and end date input fields, respectively.

```html
<igc-date-range-picker label="Date Range">
</igc-date-range-picker>
```

```html
<igc-date-range-picker use-two-inputs="true" label-start="Start Date" label-end="End Date">
</igc-date-range-picker>
```

### Format

You also have the option to customize the date format displayed in the input fields. There are three properties available for this purpose: [`locale`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#locale), [`inputFormat`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#inputFormat), and [`displayFormat`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#displayFormat).

The [`locale`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#locale) property allows you to set the desired locale identifier, which determines how the date is formatted based on regional conventions.
For example, to display the date in a Japanese format, you can set the locale property like this:

```html
<igc-date-range-picker locale="ja-JP">
</igc-date-range-picker>
```

If you want to manually define the date format, you can use the [`inputFormat`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#inputFormat) property by passing a custom format string:

```html
<igc-date-range-picker input-format="dd/MM/yy">
</igc-date-range-picker>
```

The [`displayFormat`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#displayFormat) property also accepts a custom format string, but it only applies when the input field is idle (i.e., not focused). When the field is focused, the format reverts to the default or to the one defined by [`inputFormat`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#inputFormat), if both properties are used together:

```html
<igc-date-range-picker input-format="dd/MM/yy" display-format="yy/MM/dd">
</igc-date-range-picker>
```

### Calendar Layout and Formatting

You can further customize the pop-up calendar using various properties:

|Name|Type|Description|
|--|--|--|
| [`orientation`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#orientation) | 'vertical' or 'horizontal' | Allows you to set whether the calendar should be displayed vertically or horizontally. |
| [`visibleMonths`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#visibleMonths) | string | Controls how many months are visible at a time, with a value of either 1 or 2. |
| [`showWeekNumbers`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#showWeekNumbers) | string | Enables or disables the week number column in the calendar. |
| [`open`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#open) | boolean | Determines whether the calendar picker is open. |
| [`keepOpenOnSelect`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#keepOpenOnSelect) | boolean | Keeps the calendar picker open after a date selection. |
| [`keepOpenOnOutsideClick`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#keepOpenOnOutsideClick) | boolean | Keeps the calendar picker open when clicking outside of it. |
| [`weekStart`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#weekStart) | string | Sets the start day of the week. |
| [`hideOutsideDays`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#hideOutsideDays) | boolean | Hides days that fall outside the current month view. |
| [`hideHeader`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#hideHeader) | boolean | Hides the calendar header (applicable only in dialog mode). |
| [`headerOrientation`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#headerOrientation) | 'vertical' or 'horizontal' | Aligns the calendar header vertically or horizontally (dialog mode only). |
| [`activeDate`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#activeDate) | Date | Sets the date that is initially highlighted in the calendar. If not set, the current date becomes the active date. |

```html
<igc-date-range-picker orientation="vertical" visible-months="1" show-week-numbers="true">
</igc-date-range-picker>
```

### Min & Max

You can also set the [`min`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#min) and [`max`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#max) properties to restrict user input by disabling calendar dates outside the defined range. These properties act as validators, so even if the user manually types a date outside the range, the [`IgcDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html) will become invalid.

```html
<igc-date-range-picker min="2025-05-06" max="2025-05-10">
</igc-date-range-picker>
```

### Custom & Predefined Date Ranges

You can also add custom date range chips to the calendar pop-up for faster range selection using the [`customRanges`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#customRanges) property. For example, you can create a custom date range chip to quickly select the range for the upcoming 7 days, ending with the current date. In addition, by setting the [`usePredefinedRanges`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#usePredefinedRanges) property, a set of predefined ranges chips will be displayed along with the custom ones.

```ts
const today = new Date();

const nextSeven = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() + 7
);
const nextWeek: CustomDateRange[] = [
  {
    label: 'Next 7 days',
    dateRange: {
      start: today,
      end: nextSeven
    }
  }
]

const dateRange = document.querySelector('igc-date-range-picker') as IgcDateRangePickerComponent;
dateRange.customRanges = nextWeek;
dateRange.usePredefinedRanges = true;
```

Now, when you click the newly created **"Next 7 days"** chip in the calendar pop-up, the range will automatically be selected, from today through the next 7 days.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Disabled & Special dates

You also have the ability to set disabled dates in the calendar to narrow the range of dates the user can choose from. To set the disabled dates, you can use the [`disabledDates`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#disabledDates) property.

```ts
let dateRange = document.querySelector('igc-date-range-picker') as IgcDateRangePickerComponent;

const minDate = new Date(2025, 4, 1);
const maxDate = new Date(2025, 4, 31);

dateRange.disabledDates = [
  {
    type: DateRangeType.Between,
    dateRange: [minDate, maxDate]
  }
] as DateRangeDescriptor[];
```

You can see more information about all the possibilities that the [`disabledDates`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#disabledDates) property offers here: [Disabled dates](./calendar.md#disabled-dates)

You can also do the same if you want to set one or more special dates in the calendar; the only difference is that you need to use the [`specialDates`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#specialDates) property instead. [Special dates](./calendar.md#special-dates)

### Forms

The [`IgcDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html) component can also be used seamlessly with the HTML form element. The [`min`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#min), [`max`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#max), and [`required`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#required) properties act as form validators.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-button {
  margin-top: 15px;
}
```


## Additional configuration

### Properties

In addition to the properties we've already covered, the [`IgcDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html) component offers a variety of additional properties that allow you to further configure its behavior.

|Name|Type|Description|
|--|--|--|
| [`disabled`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#disabled) | boolean | Disables the component. |
| [`nonEditable`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#nonEditable) | boolean | Disables typing in the input field(s). |
| [`placeholder`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#placeholder) | string | Placeholder text for the single input mode. |
| [`placeholderStart`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#placeholderStart) | string | Placeholder text for the start date input (two inputs mode). |
| [`placeholderEnd`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#placeholderEnd) | string | Placeholder text for the end date input (two inputs mode). |
| [`outlined`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#outlined) | boolean | Determines whether the input part will have outline appearance in the [Material theme](../themes/overview.md). |
| [`prompt`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#prompt) | string | The prompt character used for unfilled parts of the input(s) mask. |
| [`resourceStrings`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#resourceStrings) | IgcDateRangePickerResourceStrings | Resource strings for localization of the date-range picker and the calendar. |

### Slots

You also have the ability to add custom content and modify the appearance of the [`IgcDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html) component using the available slots.

The `prefix` and `suffix` slots allow you to insert custom content before or after the input field (only available in single input mode):

```html
<igc-date-range-picker>
  <igc-icon slot="prefix" name="down_arrow_icon"></igc-icon>
  <igc-icon slot="suffix" name="upload_icon"></igc-icon>
</igc-date-range-picker>
```

In two inputs mode, you can use the `prefix-start`, `prefix-end`, `suffix-start`, and `suffix-end` slots instead to target the individual inputs.

Another set of useful slots are `clear-icon` and `calendar-icon`, which allow you to customize the icons for the clear and calendar buttons in the input fields:

```html
<igc-date-range-picker>
  <igc-icon slot="clear-icon" name="apps_icon"></igc-icon>
  <igc-icon slot="calendar-icon" name="bin_icon"></igc-icon>
</igc-date-range-picker>
```

In two inputs mode, you can also customize the default “to” text between the fields by using the `separator` slot:

```html
<igc-date-range-picker use-two-inputs="true">
  <span slot="separator">till</span>
</igc-date-range-picker>
```

The `actions` slot allows you to insert a custom action button with your own logic. For example, the button below toggles week numbers column in the calendar:

```html
<igc-date-range-picker id="DateRange">
  <igc-button slot="actions" onclick="DateRange.showWeekNumbers = true">Toggle Week Numbers</igc-button>
</igc-date-range-picker>
```

In addition to the slots we've already covered, the following slots are also available in the [`IgcDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html) component:

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
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

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


### Methods

In addition to the properties and slots, the [`IgcDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html) also exposes few methods that you can use:

|Name|Description|
|--|--|
| [`show`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#show) | Displays the calendar picker component. |
| [`hide`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#hide) | Hides the calendar picker component. |
| [`toggle`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#toggle) | Toggles the calendar picker between the shown and hidden states. |
| [`clear`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#clear) | Clears the input fields, removing any user input. |
| [`select`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#select) | Selects a date range value in the picker. |
| [`setCustomValidity`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html#setCustomValidity) | Sets a custom validation message. If the provided message is not empty, the input will be marked as invalid. |

## Styling

Since the [`IgcDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html) component uses the [`IgcCalendarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccalendarcomponent.html) component, it also inherits the Calendar's CSS parts, allowing you to style both components seamlessly. You can find the full list of exposed Calendar CSS parts here: [Calendar Styling](calendar.md#styling). In addition to the Calendar's CSS parts, the [`IgcDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html) also exposes some unique CSS parts that you can use to customize its appearance:

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
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

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


## API References

- [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html)
- [`IgcCalendarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccalendarcomponent.html)
- [`IgcDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html)
- [`IgcDateTimeInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html)
- [`IgcDialogComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdialogcomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
