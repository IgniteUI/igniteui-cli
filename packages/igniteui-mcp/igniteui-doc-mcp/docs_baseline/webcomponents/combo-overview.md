---
title: Web Components ComboBox Component – Ignite UI for Web Components
_description: Web Components Combo component provides a powerful input, combining features of the basic HTML input, select, filtering and custom drop-down lists. Try it for FREE
_keywords: Ignite UI for Web Components, UI controls, Web Components widgets, web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components ComboBox component
_license: MIT
mentionedTypes: ["Combo", "ComboItem", "ComboHeader", "ComboList"]
_tocName: Combo Box
---

# Web Components ComboBox Overview

Web Components ComboBox is a lightweight editor that enables users to easily select, filter, and group different predefined options in a provided list. The component also supports options for Web Components ComboBox keyboard navigation, templates to customize how the items, header, and footer are displayed.

The Ignite UI for Web Components ComboBox component provides a list of options from which users can make a selection. It displays all options in a virtualized list of items, meaning the ComboBox can simultaneously show thousands of records, where one or more options can be selected. Additionally, the component features case-sensitive filtering, grouping, complex data binding and more.

## Web Components ComboBox Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Getting Started with Web Components ComboBox

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

Before using the [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html) component, you need to register it together with its additional components and necessary CSS:

```ts
import { defineComponents, IgcComboComponent }
from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcComboComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../../general-getting-started.md) topic.

> [!WARNING]
> The [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html) component doesn't work with the standard `<form>` element. Use `Form` instead.

Then, we will bind an array of objects to the combo data source used for building the list of options.

```ts
interface City {
    id: string;
    name: string;
}

const cities: City[] = [
    { name: 'London', id: 'UK01' },
    { name: 'Sofia', id: 'BG01'},
    { name: 'New York', id: 'NY01'}
];

export class Sample {
    private combo: IgcComboComponent<City>;

    constructor() {
        this.combo = document.getElementById('basic-combo') as IgcComboComponent<City>;
        this.combo.data = cities;
    }
}
```

```html
<igc-combo id='basic-combo' display-key='name' value-key='id' value='["BG01"]'></igc-combo>
```

### Data value and display properties

When the combo is bound to a list of complex data (i.e. objects), we need to specify a property that the control will use to handle item selection. The component exposes the following properties:

<!-- end: Blazor -->

- `T` - **required**, if [`valueKey`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#valueKey) is omitted, this should be set to "object", otherwise this needs to match the property type of [`valueKey`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#valueKey).

<!-- end: Blazor -->

- [`valueKey`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#valueKey) - **Optional**, **required** for complex data object - Determines which field of the data source will be used to make selections. If [`valueKey`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#valueKey) is omitted, the selection API will use object references to select items.
- [`displayKey`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#displayKey) - **Optional**, **recommended** for complex data objects - Determines which field in the data source is used as the display value. If no value is specified for [`displayKey`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#displayKey), the combo will use the specified [`valueKey`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#valueKey) (if any).
    In our case, we want the combo to display the `name` of each city and use the `id` field for item selection and as the underlying value for each item. Therefore, we provide these properties to the combo's [`valueKey`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#valueKey) and [`displayKey`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#displayKey) respectively.

> [!Note]
> When the data source consists of primitive types (e.g. `strings`, `numbers`, etc.), **do not** specify a [`valueKey`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#valueKey) and/or [`displayKey`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#displayKey).

### Setting Value

The ComboBox component exposes a [`value`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#value) getter and setter in addition to an attribute, which is also called value. You can use the value attribute to set the selected items on component initialization.

If you want to read the value, i.e. the list of currently selected items, or to update the value use the value getter and setter respectively. The value getter will return a list of all selected items as represented by the [`valueKey`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#valueKey). Likewise, if you want to update the list of selected items by using the value setter, you should provide a list of items by their [`valueKey`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#valueKey).

Example:

```ts
const combo = document.getElementById('basic-combo') as IgcComboComponent<City>;

// Given the overview example from above this will return ['BG01']
console.log(combo.value);

// Change the selected items to New York and London
combo.value = ['NY01', 'UK01'];
```

### Selection API

The combo component exposes APIs that allow you to change the currently selected items.

Besides selecting items from the list of options by user interaction, you can select items programmatically. This is done via the [`select`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#select) and [`deselect`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#deselect) methods. You can pass an array of items to both methods. If the methods are called with no arguments all items will be selected/deselected depending on which method is called. If you have specified a [`valueKey`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#valueKey) for your combo component, then you should pass the value keys of the items you would like to select/deselect:

#### Select/deselect some items

```ts
// Select/deselect items by their IDs as valueKey is set to 'id'
combo.select(['BG01', 'BG02', 'BG03', 'BG04']);
combo.deselect(['BG01', 'BG02', 'BG03', 'BG04']);
```

#### Select/deselect all items

```ts
// Select/deselect all items
combo.select();
combo.deselect();
```

If the [`valueKey`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#valueKey) property is omitted, you will have to list the items you wish to select/deselect as objects references:

```ts
// Select/deselect values by object references when no valueKey is provided
combo.select([cities[1], cities[5]]);
combo.deselect([cities[1], cities[5]]);
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
.button-container {
    display: flex;
    margin-top: 16px;
    gap: 8px;
}
```


### Validation

The Ignite UI for Web Components Combo component supports most of the [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html) properties, such as [`required`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#required), [`disabled`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#disabled), [`autofocus`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html#autofocus), [`invalid`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#invalid), etc. The component also exposes two methods bound to its validation:

- [`reportValidity`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#reportValidity) - checks for validity and returns true if the component satisfies the validation constraints.
- [`checkValidity`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#checkValidity) - a wrapper around reportValidity to comply with the native input API.

## Keyboard Navigation

When the combo component is focused and the list of options is **not visible**:

- Open the list of options using <kbd>Down/Alt</kbd> + <kbd>Down</kbd> keys.

When the combo component is focused and the list of options is **visible**:

- Using the <kbd>Down</kbd> key will activate the next item in the list.
- Using the <kbd>Up</kbd> key will activate the previous item in the list. If the first item is already active it will focus the input.
- Using the <kbd>HOME</kbd> or <kbd>END</kbd> keys will activate the first or the last item in the list.
- Using the <kbd>SPACE</kbd> key will select the active item.
- Using the <kbd>ENTER</kbd> key will select the active item and close the list of options.
- Using the <kbd>ESC</kbd> or <kbd>TAB/SHIFT</kbd> + <kbd>TAB</kbd> keys will close the list of options.

## Styling

You can change the appearance of the [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html) component and its items, by using the exposed CSS parts listed below:

| Part name            | Description                                                                     |
| -------------------- | ------------------------------------------------------------------------------- |
| `label`              | The encapsulated text label.                                                   |
| `input`              | The main input field.                                                          |
| `native-input`       | The native input of the main input field.                                      |
| `prefix`             | The prefix wrapper.                                                            |
| `suffix`             | The suffix wrapper.                                                            |
| `toggle-icon`        | The toggle icon wrapper.                                                       |
| `clear-icon`         | The clear icon wrapper.                                                        |
| `case-icon`          | A case-icon wrapper that renders content inside the suffix of the filter-input. |
| `helper-text`        | The helper text wrapper.                                                       |
| `search-input`       | The search input field.                                                        |
| `list-wrapper`       | The list of options wrapper.                                                   |
| `list`               | The list of options box.                                                       |
| `item`               | Represents each item in the list of options.                                   |
| `group-header`       | Represents each header in the list of options.                                 |
| `active`             | Appended to the item parts list when the item is active.                       |
| `selected`           | Appended to the item parts list when the item is selected.                     |
| `checkbox`           | Represents each checkbox of each list item.                                    |
| `checkbox-indicator` | Represents the checkbox indicator of each list item.                           |
| `checked`            | Appended to checkbox parts list when checkbox is checked.                      |
| `header`             | The container holding the header content.                                      |
| `footer`             | The container holding the footer content.                                      |
| `empty`              | The container holding the empty content.                                       |

Using the CSS parts we have full control over the Combo styling.

```css
igc-combo::part(search-input) {
  background-color: var(--ig-gray-100);
  border-radius: 2px;
}

igc-combo::part(input) {
  background-color: var(--ig-gray-100);
}

igc-combo::part(prefix) {
  background-color: var(--ig-secondary-50);
  color: var(--ig-primary-500);
}

igc-combo::part(toggle-icon) {
  color: var(--ig-primary-500);
}
```

```css
igc-combo::part(search-input) {
  background-color: var(--ig-gray-100);
  border-radius: 2px;
}

igc-combo::part(input) {
  background-color: var(--ig-gray-100);
}

igc-combo::part(prefix) {
  background-color: var(--ig-secondary-50);
  color: var(--ig-primary-500);
}

igc-combo::part(toggle-icon) {
  color: var(--ig-primary-500);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
igc-combo::part(label),
igc-combo::part(empty),
igc-combo::part(group-header) {
    color: #2B3A55;
}

igc-combo::part(native-input),
igc-combo::part(list-wrapper) {
    background-color: #F2E5E5;
}

igc-combo::part(item selected) {
    background: #E8C4C4;
}

igc-combo::part(item selected active),
igc-combo::part(item selected):hover {
    background: #CE7777;
}

igc-combo::part(prefix),
igc-combo::part(suffix),
igc-combo::part(case-icon) {
    color: #F2E5E5;
    background-color: #2B3A55;
}

igc-combo::part(checkbox checked)::after {
    background: #2B3A55;
    box-shadow: none;
}
```


## API Reference

- [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html)
- [`Styling & Themes`](../../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
