---
title: "Web Components Date Picker Component - Ignite UI for Web Components"
description: Infragistics' Web Components Date Picker allows the user to select a date from a calendar and set it in an input element.
keywords: "Web Components Date Picker, Ignite UI for Web Components, Infragistics"
license: MIT
mentionedTypes: ["DatePicker"]
llms:
  description: "The Ignite UI for Web Components Date Picker is a feature rich component used for entering a date through manual text input or choosing date values from a calendar dialog that pops up."
_tocName: Date Picker
---
# Web Components Date Picker Component Overview

The Ignite UI for Web Components Date Picker is a feature rich component used for entering a date through manual text input or choosing date values from a calendar dialog that pops up. Lightweight and simple to use, the Date Picker lets users navigate to a desired date with several view options – month, year, and decade. It also supports common validation properties such as minimum and maximum date constraints and required fields.

The Ignite UI for Web Components Date Picker Component lets users pick a single date through a month-view calendar dropdown or editable input field. The Web Components Date Picker also supports a dialog mode for selection from the calendar only, locale-aware and customizable date formatting and validation integration.

## Web Components Date Picker Example

Below you can see a sample that demonstrates how the Date Picker works when users are enabled to pick a date through a manual text input and click on the calendar icon on the left to navigate to it. See how to render it.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Getting Started with Web Components Date Picker

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

You will then need to import the [`IgcDatePicker`](mcp:get_api_reference?platform=webcomponents&component=IgcDatePickerComponent), its necessary CSS, and register its module, like so:

```ts
import { defineComponents, IgcDatePickerComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcDatePickerComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

## Using the Web Components Date Picker Component

### Display Date Picker

To instantiate a [`IgcDatePicker`](mcp:get_api_reference?platform=webcomponents&component=IgcDatePickerComponent) in its default `dropdown` state, use the following code:

```html
<igc-date-picker>
    <span slot="helper-text">Date</span>
</igc-date-picker>
```

### Options

The [`IgcDatePicker`](mcp:get_api_reference?platform=webcomponents&component=IgcDatePickerComponent) can be bound to a `date` or a `string`.

```typescript
const DatePicker = document.querySelector('igc-date-picker') as IgcDatePickerComponent;
const date = new Date();

DatePicker.value = date;
```

If a string is bound to the picker, it needs to be in the **ISO 8601** format:

```html
<igc-date-picker value="2000-01-01"></igc-date-picker>
```

### Projecting components

The are `prefix` and `suffix` slots available, which allow you to add different content before and after the main content of the Input. When slotting content, we recommend using a `<span>` element when adding simple text, symbols, or emojis, and an [`<igc-icon>`](../layouts/icon.md) component when adding icons to the `prefix` and `suffix` slots.

There is also a `helper-text` slot exposed, which provides a hint placed below the Input. We recommend using a `<span>` element, when slotting content in the `helper-text` slot.

```html
<igc-date-picker id="DatePicker">
    <igc-icon slot="suffix" name="arrow_upward" collection="material" class="small" onclick="DatePicker.stepUp()"></igc-icon>
</igc-date-picker>
```

The above snippet will add an additional icon at the end of the input, right after the default clear icon. This will not remove the default toggle icon, though as prefixes and suffixes can be stacked one after the other.

#### Customizing the toggle and clear icons

The calendar and clear icons can be customized using the `calendar` and `clear` slots. We recommend using a `<span>` element when adding symbols, or emojis and an [`<igc-icon>`](../layouts/icon.md) component when adding icons to the `calendar` and `clear` slots.

```html
<igc-date-picker id="DatePicker">
    <igc-icon slot="calendar" name="calendar" collection="material" class="small"></igc-icon>
    <igc-icon slot="clear" name="delete" collection="material" class="small"></igc-icon>
</igc-date-picker>
```

#### Custom action buttons

The picker's action buttons can be templated using the `actions` slot. For the best result, we recommend using the [`<igc-button>`](../inputs/button.md) component when adding content to the `actions` slot.

```html
<igc-date-picker id="DatePicker">
    <igc-button slot="actions" onclick="DatePicker.showWeekNumbers = true">Show Week Numbers</igc-button>
</igc-date-picker>
```

### Keyboard Navigation

The [`IgcDatePicker`](mcp:get_api_reference?platform=webcomponents&component=IgcDatePickerComponent) has intuitive keyboard navigation that makes it easy to increment, decrement, or jump through different DateParts among others without having to touch the mouse.

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

The [`IgcDatePicker`](mcp:get_api_reference?platform=webcomponents&component=IgcDatePickerComponent) also supports a `dialog` mode:

```html
<igc-date-picker id="DatePicker" mode="dialog">
</igc-date-picker>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Display and input format

[`IgcDatePicker.inputFormat`](mcp:get_api_reference?platform=webcomponents&component=IgcDatePickerComponent&member=inputFormat) and [`IgcDatePicker.displayFormat`](mcp:get_api_reference?platform=webcomponents&component=IgcDatePickerComponent&member=displayFormat) are properties which can be set to make the picker's editor follow a specified format. The [`IgcDatePicker.inputFormat`](mcp:get_api_reference?platform=webcomponents&component=IgcDatePickerComponent&member=inputFormat) is locale based, so if none is provided, the picker will default to the one used by the browser.

A good thing to note is that the Date Picker Component will always add a leading zero on the `date` and `month` portions if they were provided in a format that does not have it, e.g. `d/M/yy` becomes `dd/MM/yy`. This applies only during editing.

[`IgcDatePicker.displayFormat`](mcp:get_api_reference?platform=webcomponents&component=IgcDatePickerComponent&member=displayFormat) is used to format the picker's input when it is not focused. If no [`IgcDatePicker.displayFormat`](mcp:get_api_reference?platform=webcomponents&component=IgcDatePickerComponent&member=displayFormat) is provided, the picker will use the [`IgcDatePicker.inputFormat`](mcp:get_api_reference?platform=webcomponents&component=IgcDatePickerComponent&member=inputFormat) as its [`IgcDatePicker.displayFormat`](mcp:get_api_reference?platform=webcomponents&component=IgcDatePickerComponent&member=displayFormat).

More information about these can be found in the [`IgcDateTimeInput`](mcp:get_api_reference?platform=webcomponents&component=IgcDateTimeInputComponent) format section.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Increment and decrement

The [`IgcDatePicker`](mcp:get_api_reference?platform=webcomponents&component=IgcDatePickerComponent) exposes [`IgcDatePicker.stepUp`](mcp:get_api_reference?platform=webcomponents&component=IgcDatePickerComponent&member=stepUp) and [`IgcDatePicker.stepDown`](mcp:get_api_reference?platform=webcomponents&component=IgcDatePickerComponent&member=stepDown) methods. Both of which come from the [`IgcDateTimeInput`](mcp:get_api_reference?platform=webcomponents&component=IgcDateTimeInputComponent) and can be used for incrementing and decrementing a specific [`IgcDatePart`](mcp:get_api_reference?platform=webcomponents&component=DatePart) of the currently set date.

```html
<igc-date-picker id="DatePicker">
    <igc-icon slot="prefix" name="arrow_upward" collection="material" onclick="DatePicker.stepUp()"></igc-icon>
    <igc-icon slot="suffix" name="arrow_downward" collection="material" onclick="DatePicker.stepDown()"></igc-icon>
</igc-date-picker>
```

### In Forms

The [`IgcDatePicker`](mcp:get_api_reference?platform=webcomponents&component=IgcDatePickerComponent) could be used in a form element, the component's [`IgcDatePicker.min`](mcp:get_api_reference?platform=webcomponents&component=IgcDatePickerComponent&member=min) and [`IgcDatePicker.max`](mcp:get_api_reference?platform=webcomponents&component=IgcDatePickerComponent&member=max) properties act as form validators.

In forms, we can handle the `igcChange` event of the component and update the value of the label.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Calendar Specific settings

The [`IgcDatePicker`](mcp:get_api_reference?platform=webcomponents&component=IgcDatePickerComponent) can modify some of the calendar's settings via the properties that the Date Picker exposes. Some of these include [`IgcDatePicker.visibleMonths`](mcp:get_api_reference?platform=webcomponents&component=IgcDatePickerComponent&member=visibleMonths) which allows more than one calendar to be displayed when the picker expands, [`IgcFieldPipeArgs.weekStart`](mcp:get_api_reference?platform=webcomponents&component=IgcFieldPipeArgs&member=weekStart) which determines the starting day of the week, [`IgcDatePicker.showWeekNumbers`](mcp:get_api_reference?platform=webcomponents&component=IgcDatePickerComponent&member=showWeekNumbers) which shows the number for each week in the year and more.

## Internationalization

The localization of the [`IgcDatePicker`](mcp:get_api_reference?platform=webcomponents&component=IgcDatePickerComponent) can be controlled through its [`IgcDatePicker.locale`](mcp:get_api_reference?platform=webcomponents&component=IgcDatePickerComponent&member=locale) input.

Here is how a [`IgcDatePicker`](mcp:get_api_reference?platform=webcomponents&component=IgcDatePickerComponent) with Japanese locale definition would look like:

```html
<igc-date-picker locale="ja-JP">
</igc-date-picker>
```

## Styling

The [`IgcDatePicker`](mcp:get_api_reference?platform=webcomponents&component=IgcDatePickerComponent) component derives from the [`IgcInput`](mcp:get_api_reference?platform=webcomponents&component=IgcInputComponent) and [`IgcCalendar`](mcp:get_api_reference?platform=webcomponents&component=IgcCalendarComponent) component, so it exposes all available CSS parts. See [Input Styling](../inputs/input.md#styling) and [Calendar Styling](./calendar.md#styling) for reference.

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

[`IgcInput`](mcp:get_api_reference?platform=webcomponents&component=IgcInputComponent)<br />
[`IgcCalendar`](mcp:get_api_reference?platform=webcomponents&component=IgcCalendarComponent)<br />
[`IgcDatePicker`](mcp:get_api_reference?platform=webcomponents&component=IgcDatePickerComponent)<br />

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
