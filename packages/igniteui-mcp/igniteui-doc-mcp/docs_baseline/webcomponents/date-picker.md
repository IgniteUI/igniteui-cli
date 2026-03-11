---
title: Web Components Date Picker Component - Ignite UI for Web Components
_description: Infragistics' Web Components Date Picker allows the user to select a date from a calendar and set it in an input element.
_keywords: Web Components Date Picker, Ignite UI for Web Components, Infragistics
_license: MIT
mentionedTypes: ["DatePicker"]
_tocName: Date Picker
---

# Web Components Date Picker Component Overview

The Ignite UI for Web Components Date Picker is a feature rich component used for entering a date through manual text input or choosing date values from a calendar dialog that pops up. Lightweight and simple to use, the Date Picker lets users navigate to a desired date with several view options – month, year, and decade. It also supports common validation properties such as minimum and maximum date constraints and required fields.

The Ignite UI for Web Components Date Picker Component lets users pick a single date through a month-view calendar dropdown or editable input field. The Web Components Date Picker also supports a dialog mode for selection from the calendar only, locale-aware and customizable date formatting and validation integration.

> \[!NOTE]
> The [`IgcDatePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html) is a brand new component from Ignite UI for Web Components version <!-- WebComponents -->5.0.0<!-- end: WebComponents -->. The old [`IgcDatePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html) prior to this version has been renamed to `XDatePicker` and its respective documentation page can be found under "Deprecated Components"

## Web Components Date Picker Example

Below you can see a sample that demonstrates how the Date Picker works when users are enabled to pick a date through a manual text input and click on the calendar icon on the left to navigate to it. See how to render it.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Getting Started with Web Components Date Picker

<!-- WebComponents -->

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

You will then need to import the [`IgcDatePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html), its necessary CSS, and register its module, like so:

```ts
import { defineComponents, IgcDatePickerComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcDatePickerComponent);
```

<!-- end: WebComponents -->

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

## Using the Web Components Date Picker Component

### Display Date Picker

To instantiate a [`IgcDatePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html) in its default `dropdown` state, use the following code:

```html
<igc-date-picker>
    <p slot="helper-text">Date</p>
</igc-date-picker>
```

### Options

<!-- WebComponents -->

The [`IgcDatePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html) can be bound to a `date` or a `string`.

<!-- end: WebComponents -->

<!-- WebComponents -->

```typescript
const DatePicker = document.querySelector('igc-date-picker') as IgcDatePickerComponent;
const date = new Date();

DatePicker.value = date;
```

<!-- WebComponents -->

If a string is bound to the picker, it needs to be in the **ISO 8601** format:

```html
<igc-date-picker value="2000-01-01"></igc-date-picker>
```

<!-- end: WebComponents -->

### Projecting components

With prefix and suffix slots we can add different content before and after the main content of the Input.

```html
<igc-date-picker id="DatePicker">
    <igc-icon slot="suffix" name="arrow_upward" collection="material" class="small" onclick="DatePicker.stepUp()"></igc-icon>
</igc-date-picker>
```

The above snippet will add an additional icon at the end of the input, right after the default clear icon. This will not remove the default toggle icon, though as prefixes and suffixes can be stacked one after the other.

#### Customizing the toggle and clear icons

The calendar and clear icon could be templated by using the `calendar` and `clear` slots:

```html
<igc-date-picker id="DatePicker">
    <igc-icon slot="calendar" name="calendar" collection="material" class="small"></igc-icon>
    <igc-icon slot="clear" name="delete" collection="material" class="small"></igc-icon>
</igc-date-picker>
```

#### Custom action buttons

The picker's action buttons can be templated using the `actions` slot:

```html
<igc-date-picker id="DatePicker">
    <igc-button slot="actions" onclick="DatePicker.showWeekNumbers = true">Show Week Numbers</igc-button>
</igc-date-picker>
```

### Keyboard Navigation

The [`IgcDatePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html) has intuitive keyboard navigation that makes it easy to increment, decrement, or jump through different DateParts among others without having to touch the mouse.

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

The [`IgcDatePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html) also supports a `dialog` mode:

```html
<igc-date-picker id="DatePicker" mode="dialog">
</igc-date-picker>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Display and input format

[`inputFormat`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html#inputFormat) and [`displayFormat`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html#displayFormat) are properties which can be set to make the picker's editor follow a specified format. The [`inputFormat`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html#inputFormat) is locale based, so if none is provided, the picker will default to the one used by the browser.

A good thing to note is that the Date Picker Component will always add a leading zero on the `date` and `month` portions if they were provided in a format that does not have it, e.g. `d/M/yy` becomes `dd/MM/yy`. This applies only during editing.

[`displayFormat`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html#displayFormat) is used to format the picker's input when it is not focused. If no [`displayFormat`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html#displayFormat) is provided, the picker will use the [`inputFormat`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html#inputFormat) as its [`displayFormat`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html#displayFormat).

More information about these can be found in the [`IgcDateTimeInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html) format section.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Increment and decrement

The [`IgcDatePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html) exposes [`stepUp`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html#stepUp) and [`stepDown`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html#stepDown) methods. Both of which come from the [`IgcDateTimeInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html) and can be used for incrementing and decrementing a specific `DatePart` of the currently set date.

```html
<igc-date-picker id="DatePicker">
    <igc-icon slot="prefix" name="arrow_upward" collection="material" onclick="DatePicker.stepUp()"></igc-icon>
    <igc-icon slot="suffix" name="arrow_downward" collection="material" onclick="DatePicker.stepDown()"></igc-icon>
</igc-date-picker>
```

### In Forms

The [`IgcDatePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html) could be used in a form element, the component's [`min`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html#min) and [`max`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html#max) properties act as form validators.

<!-- WebComponents -->

In forms, we can handle the `igcChange` event of the component and update the value of the label.

<!-- end: WebComponents -->

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Calendar Specific settings

The [`IgcDatePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html) can modify some of the calendar's settings via the properties that the Date Picker exposes. Some of these include [`visibleMonths`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html#visibleMonths) which allows more than one calendar to be displayed when the picker expands, [`weekStart`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html#weekStart) which determines the starting day of the week, [`showWeekNumbers`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html#showWeekNumbers) which shows the number for each week in the year and more.

## Internationalization

The localization of the [`IgcDatePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html) can be controlled through its [`locale`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html#locale) input.

Here is how a [`IgcDatePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html) with Japanese locale definition would look like:

```html
<igc-date-picker locale="ja-JP">
</igc-date-picker>
```

## Styling

The [`IgcDatePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html) component derives from the [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html) and [`IgcCalendarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccalendarcomponent.html) component, so it exposes all available CSS parts. See [Input Styling](../inputs/input.md#styling) and [Calendar Styling](calendar.md#styling) for reference.

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
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## API References

- [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html)
- [`IgcCalendarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccalendarcomponent.html)
- [`IgcDatePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
