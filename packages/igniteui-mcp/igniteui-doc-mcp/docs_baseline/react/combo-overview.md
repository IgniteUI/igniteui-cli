---
title: React ComboBox Component – Ignite UI for React
_description: React Combo component provides a powerful input, combining features of the basic HTML input, select, filtering and custom drop-down lists. Try it for FREE
_keywords: Ignite UI for React, UI controls, React widgets, web widgets, UI widgets, React, Native React Components Suite, Native React Controls, Native React Components Library, React ComboBox component
_license: MIT
mentionedTypes: ["Combo", "ComboItem", "ComboHeader", "ComboList"]
_tocName: Combo Box
---

# React ComboBox Overview

React ComboBox is a lightweight editor that enables users to easily select, filter, and group different predefined options in a provided list. The component also supports options for React ComboBox keyboard navigation, templates to customize how the items, header, and footer are displayed.

The Ignite UI for React ComboBox component provides a list of options from which users can make a selection. It displays all options in a virtualized list of items, meaning the ComboBox can simultaneously show thousands of records, where one or more options can be selected. Additionally, the component features case-sensitive filtering, grouping, complex data binding and more.

## React ComboBox Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { IgrCombo } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

interface City {
  id: string;
  name: string;
}

const cities: City[] = [
  { name: "London", id: "UK01" },
  { name: "Sofia", id: "BG01" },
  { name: "New York", id: "NY01" },
];

export default function ComboOverview() {
  return (
    <div className="sample">
      <IgrCombo
        valueKey="id"
        displayKey="name"
        data={cities}
        value={["BG01"]}
      ></IgrCombo>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComboOverview />);
```


<div class="divider--half"></div>

## Getting Started with React ComboBox

<!-- React -->

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the React [`IgrCombo`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html) and its necessary CSS:

```tsx
import { IgrCombo } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

<!-- end: React -->

> \[!WARNING]
> The [`IgrCombo`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html) component doesn't work with the standard `<form>` element. Use `Form` instead.

Then, we will bind an array of objects to the combo data source used for building the list of options.

```tsx
interface City {
  id: string;
  name: string;
}

const cities: City[] = [
  { name: "London", id: "UK01" },
  { name: "Sofia", id: "BG01" },
  { name: "New York", id: "NY01" },
];

<IgrCombo
    valueKey="id"
    displayKey="name"
    data={cities}
    value={["BG01"]}
></IgrCombo>
```

### Data value and display properties

When the combo is bound to a list of complex data (i.e. objects), we need to specify a property that the control will use to handle item selection. The component exposes the following properties:

<!-- end: Blazor -->

- `T` - **required**, if [`valueKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#valueKey) is omitted, this should be set to "object", otherwise this needs to match the property type of [`valueKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#valueKey).

<!-- end: Blazor -->

- [`valueKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#valueKey) - **Optional**, **required** for complex data object - Determines which field of the data source will be used to make selections. If [`valueKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#valueKey) is omitted, the selection API will use object references to select items.
- [`displayKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#displayKey) - **Optional**, **recommended** for complex data objects - Determines which field in the data source is used as the display value. If no value is specified for [`displayKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#displayKey), the combo will use the specified [`valueKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#valueKey) (if any).
    In our case, we want the combo to display the `name` of each city and use the `id` field for item selection and as the underlying value for each item. Therefore, we provide these properties to the combo's [`valueKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#valueKey) and [`displayKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#displayKey) respectively.

> \[!Note]
> When the data source consists of primitive types (e.g. `strings`, `numbers`, etc.), **do not** specify a [`valueKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#valueKey) and/or [`displayKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#displayKey).

### Setting Value

The ComboBox component exposes a [`value`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#value) getter and setter in addition to an attribute, which is also called value. You can use the value attribute to set the selected items on component initialization.

If you want to read the value, i.e. the list of currently selected items, or to update the value use the value getter and setter respectively. The value getter will return a list of all selected items as represented by the [`valueKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#valueKey). Likewise, if you want to update the list of selected items by using the value setter, you should provide a list of items by their [`valueKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#valueKey).

Example:

```tsx
const comboRef = useRef<IgrCombo>(null);

// Given the overview example from above this will return ['BG01']
console.log(comboRef.current.value);

// Change the selected items to New York and London
comboRef.current.value = ['NY01', 'UK01'];
```

### Selection API

The combo component exposes APIs that allow you to change the currently selected items.

Besides selecting items from the list of options by user interaction, you can select items programmatically. This is done via the [`select`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#select) and [`deselect`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#deselect) methods. You can pass an array of items to both methods. If the methods are called with no arguments all items will be selected/deselected depending on which method is called. If you have specified a [`valueKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#valueKey) for your combo component, then you should pass the value keys of the items you would like to select/deselect:

#### Select/deselect some items

<!-- React -->

```tsx
// Select/deselect items by their IDs as valueKey is set to 'id'
comboRef.current.select(["UK01", "UK02", "UK03", "UK04", "UK05"]);
comboRef.current.deselect(["UK01", "UK02", "UK03", "UK04", "UK05"]);
```

<!-- end: React -->

#### Select/deselect all items

<!-- React -->

```tsx
// Select/deselect all items
comboRef.current.select([]);
comboRef.current.deselect([]);
```

<!-- end: React -->

If the [`valueKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#valueKey) property is omitted, you will have to list the items you wish to select/deselect as objects references:

<!-- React -->

```tsx
// Select/deselect values by object references when no valueKey is provided
comboRef.current.select([cities[1], cities[5]]);
comboRef.current.deselect([cities[1], cities[5]]);
```

<!-- end: React -->

```typescript
interface City {
  id: string;
  name: string;
  country: string;
}

export const Cities: City[] = [
  { name: "London", id: "UK01", country: "UK" },
  { name: "Manchester", id: "UK02", country: "UK" },
  { name: "Birmingham", id: "UK03", country: "UK" },
  { name: "Glasgow", id: "UK04", country: "UK" },
  { name: "Liverpool", id: "UK05", country: "UK" },
  { name: "New York", id: "US01", country: "USA" },
  { name: "Miami", id: "US02", country: "USA" },
  { name: "Philadelphia", id: "US03", country: "USA" },
  { name: "Chicago", id: "US04", country: "USA" },
  { name: "Springfield", id: "US05", country: "USA" },
  { name: "Los Angeles", id: "US06", country: "USA" },
  { name: "Houston", id: "US07", country: "USA" },
  { name: "Phoenix", id: "US08", country: "USA" },
  { name: "San Diego", id: "US09", country: "USA" },
  { name: "Dallas", id: "US010", country: "USA" },
  { name: "Sofia", id: "BG01", country: "Bulgaria" },
  { name: "Plovdiv", id: "BG02", country: "Bulgaria" },
  { name: "Varna", id: "BG03", country: "Bulgaria" },
  { name: "Burgas", id: "BG04", country: "Bulgaria" },
  { name: "Rome", id: "IT01", country: "Italy" },
  { name: "Milan", id: "IT02", country: "Italy" },
  { name: "Naples", id: "IT03", country: "Italy" },
  { name: "Turin", id: "IT04", country: "Italy" },
  { name: "Palermo", id: "IT05", country: "Italy" },
  { name: "Florence", id: "IT06", country: "Italy" },
];
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
```tsx
import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import { IgrCombo, IgrButton } from "igniteui-react";
import "./index.css";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { Cities } from "./ComboData";

export default function ComboSelection() {
  const comboRef = useRef<IgrCombo>(null);

  const selectCities = () => {
    comboRef.current.select(["UK01", "UK02", "UK03", "UK04", "UK05"]);
  };

  const deselectCities = () => {
    comboRef.current.deselect(["UK01", "UK02", "UK03", "UK04", "UK05"]);
  };

  const selectAll = () => {
    comboRef.current.select([]);
  };

  const deselectAll = () => {
    comboRef.current.deselect([]);
  };

  return (
    <div className="sample">
      <IgrCombo
        valueKey="id"
        displayKey="name"
        label="Cities"
        placeholder="Pick a city"
        placeholderSearch="Search for a city"
        data={Cities}
        ref={comboRef}
      ></IgrCombo>
      <div className="button-container">
        <IgrButton onClick={selectCities}>
          <span>Select UK Cities</span>
        </IgrButton>
        <IgrButton onClick={deselectCities}>
          <span>Deselect UK Favorites</span>
        </IgrButton>
        <IgrButton onClick={selectAll}>
          <span>Select All</span>
        </IgrButton>
        <IgrButton onClick={deselectAll}>
          <span>Deselect All</span>
        </IgrButton>
      </div>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComboSelection />);
```


### Validation

The Ignite UI for React Combo component supports most of the [`IgrInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html) properties, such as [`required`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#required), [`disabled`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#disabled), [`autofocus`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html#autofocus), [`invalid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#invalid), etc. The component also exposes two methods bound to its validation:

- [`reportValidity`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#reportValidity) - checks for validity and returns true if the component satisfies the validation constraints.
- [`checkValidity`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#checkValidity) - a wrapper around reportValidity to comply with the native input API.

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

You can change the appearance of the [`IgrCombo`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html) component and its items, by using the exposed CSS parts listed below:

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

```typescript
interface City {
  id: string;
  name: string;
  country: string;
}

export const Cities: City[] = [
  { name: "London", id: "UK01", country: "UK" },
  { name: "Manchester", id: "UK02", country: "UK" },
  { name: "Birmingham", id: "UK03", country: "UK" },
  { name: "Glasgow", id: "UK04", country: "UK" },
  { name: "Liverpool", id: "UK05", country: "UK" },
  { name: "New York", id: "US01", country: "USA" },
  { name: "Miami", id: "US02", country: "USA" },
  { name: "Philadelphia", id: "US03", country: "USA" },
  { name: "Chicago", id: "US04", country: "USA" },
  { name: "Springfield", id: "US05", country: "USA" },
  { name: "Los Angeles", id: "US06", country: "USA" },
  { name: "Houston", id: "US07", country: "USA" },
  { name: "Phoenix", id: "US08", country: "USA" },
  { name: "San Diego", id: "US09", country: "USA" },
  { name: "Dallas", id: "US010", country: "USA" },
  { name: "Sofia", id: "BG01", country: "Bulgaria" },
  { name: "Plovdiv", id: "BG02", country: "Bulgaria" },
  { name: "Varna", id: "BG03", country: "Bulgaria" },
  { name: "Burgas", id: "BG04", country: "Bulgaria" },
  { name: "Rome", id: "IT01", country: "Italy" },
  { name: "Milan", id: "IT02", country: "Italy" },
  { name: "Naples", id: "IT03", country: "Italy" },
  { name: "Turin", id: "IT04", country: "Italy" },
  { name: "Palermo", id: "IT05", country: "Italy" },
  { name: "Florence", id: "IT06", country: "Italy" },
];
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-combo::part(label),
igc-combo::part(empty),
igc-combo::part(group-header) {
  color: #2b3a55;
}

igc-combo::part(native-input),
igc-combo::part(list-wrapper) {
  background-color: #f2e5e5;
}

igc-combo::part(item selected) {
  background: #e8c4c4;
}

igc-combo::part(item selected active),
igc-combo::part(item selected):hover {
  background: #ce7777;
}

igc-combo::part(prefix),
igc-combo::part(suffix),
igc-combo::part(case-icon) {
  color: #f2e5e5;
  background-color: #2b3a55;
}

igc-combo::part(checkbox checked)::after {
  background: #2b3a55;
  box-shadow: none;
}
```
```tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { IgrCombo, IgrIcon, registerIconFromText } from "igniteui-react";
import "./index.css";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { Cities } from "./ComboData";

const placeSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"/></svg>';

export default function ComboStyling() {

  useEffect(() => {
    registerIconFromText("place", placeSvg, "material");
  }, []);

  return (
    <div className="sample">
      <IgrCombo
        valueKey="id"
        displayKey="name"
        groupKey="country"
        label="Destinations"
        caseSensitiveIcon
        data={Cities}
      >
        <span slot="helper-text">Choose the desired place</span>
        <span slot="prefix">
          <IgrIcon name="place" collection="material"></IgrIcon>
        </span>
      </IgrCombo>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComboStyling />);
```


## API Reference

- [`IgrCombo`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html)
- [`Styling & Themes`](../../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
