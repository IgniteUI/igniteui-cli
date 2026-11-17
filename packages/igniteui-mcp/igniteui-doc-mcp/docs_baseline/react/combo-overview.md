---
title: "React Combo Component"
description: "The Ignite UI for React Combo combines an input field with a searchable dropdown list, so users can filter the options by typing and select one or more items."
keywords: "React Combo, Ignite UI for React, combobox, multi-select dropdown, searchable dropdown, combo filtering, combo grouping"
license: MIT
last_updated: "2026-11-03"
relatedComponents: ["Select", "Dropdown"]
mentionedTypes: ["Combo", "ComboItem", "ComboHeader", "ComboList"]
llms:
  description: "The Ignite UI for React Combo is a component that combines an input field with a searchable dropdown list, letting users filter the options by typing and select one or more items."
_tocName: Combo
---
# Combo

The Ignite UI for React Combo is a component that combines an input field with a searchable dropdown list, letting users filter the options by typing and select one or more items.

The Combo shows its options in a virtualized list, so the list can hold thousands of options. The Combo supports case-sensitive filtering, grouping, and binding to complex data.

## Live Demo

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

## Anatomy

The Combo combines an input field with a searchable dropdown list, letting users filter the options by typing and select one or more items.

**Combo anatomy:** The Combo combines an input field with a searchable dropdown list, letting users filter the options by typing and select one or more items.

<style>{`
  .combo-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .combo-anatomy .igd-anatomy__image {
    max-width: 801px;
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Input Container:</strong> displays the value and input elements<br />
<strong>2. Label (optional):</strong> text that describes what the user should select<br />
<strong>3. Left Icon(optional):</strong> an optional leading icon that adds context to the field<br />
<strong>4. Hint Text:</strong> helper text shown below the field for extra guidance<br />
<strong>5. Placeholder Text:</strong> default text shown when no value is selected<br />
<strong>6. Toggle:</strong> used to open or close the options list<br />
<strong>7. Search Input:</strong> allows users to filter the list by typing<br />
<strong>8. Dropdown Header:</strong> used to group or describe the dropdown options<br />
<strong>9. Selected Item:</strong> selected Item from the Dropdown List<br />
<strong>10. Dropdown List:</strong> displays the list of selectable options</span>

The `igc-combo` element renders its input field and its dropdown list in a popover, and the helper text below them:

```text
igc-combo
└─ #shadow-root
   ├─ igc-popover
   │  ├─ igc-input#target[slot="anchor"]            // the input field, exported as the "input" part
   │  │  ├─ slot[name="prefix"]
   │  │  ├─ span[part="clear-icon"]                  // shown when the Combo has a value
   │  │  ├─ slot[name="suffix"]
   │  │  └─ span[part="toggle-icon"]
   │  └─ div[part="list-wrapper"]                    // the dropdown
   │     ├─ div[part="filter-input"]
   │     │  └─ igc-input[part="search-input"]        // hidden with disable-filtering or single-select
   │     ├─ div[part="header"]
   │     │  └─ slot[name="header"]
   │     ├─ igc-virtual-scroll#dropdown[part="list"][role="listbox"]
   │     │  ├─ igc-combo-header[part="group-header"] // one for each group
   │     │  └─ igc-combo-item[part="item"]           // one for each option
   │     ├─ div[part="empty"]                        // shown when the list has no options
   │     │  └─ slot[name="empty"]
   │     └─ div[part="footer"]
   │        └─ slot[name="footer"]
   └─ igc-validator[part="helper-text"]              // the helper text and the validation messages
```

## Getting Started

To use the React Combo, follow the [Ignite UI for React Getting Started](../../general-getting-started.md) topic for the basic project setup, then add the component for your target platform.

Install the **igniteui-react** package:

```cmd
npm install igniteui-react
```

Then import the [`IgrCombo`](mcp:get_api_reference?platform=react&component=IgrCombo) wrapper and the theme CSS:

```tsx
import { IgrCombo } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

After registration, render the Combo and bind its `data` to an array of options. The `valueKey` names the field that identifies an option, and the `displayKey` names the field that the list shows:

```tsx
const cities = [
  { id: 'BG01', name: 'Sofia' },
  { id: 'BG02', name: 'Plovdiv' },
  { id: 'BG03', name: 'Varna' }
];

<IgrCombo data={cities} valueKey="id" displayKey="name" placeholder="Cities" />
```

## Usage

Use the React Combo when users pick one or more options from a long list and need to search it, such as a list of cities or countries.

### Type

The Combo Input provides selection between a border type for a more structured perception on solid color backgrounds, and a boxed type that is most appropriate when placed on top of a vivid image to improve readability.

The React Combo uses the box type by default. Set `outlined` for the border type. The box type is a style of the Material theme: in the Bootstrap, Fluent, and Indigo themes, both types look the same.

```tsx
<IgrCombo outlined label="Label" placeholder="Select a value" />
<IgrCombo label="Label" placeholder="Select a value" />
```

Add the label with the `label` property, and the left icon in the `prefix` slot. Register the icon first, as described in the [Icon](../../layouts/icon.md) topic.



### Disabled States

Set `disabled` on the React Combo to show the disabled state of both the border and the box type.

```tsx
<IgrCombo outlined disabled placeholder="Country" />
```



### Size

The Combo is available in three sizes: Large, Medium and Small. The Dropdown automatically adjusts its dimensions to match the selected size variant. Set the size with the `--ig-size` CSS variable:

```css
.small {
  --ig-size: var(--ig-size-small);
}

.large {
  --ig-size: var(--ig-size-large);
}
```

The React Combo is medium by default.



### Interaction States

The Combo component supports five states for the enabled variants: Idle, Idle & Hover, Filled, Filled & Hover and Focused, as well as three validation states: Success, Warn, and Error.

Clicking the input field or the toggle opens the dropdown. To open and close the dropdown in code, use the `open` property or the `show`, `hide`, and `toggle` methods:

```tsx
const comboRef = useRef<IgrCombo>(null);

comboRef.current.show();
comboRef.current.hide();
comboRef.current.toggle();
```

The following sample shows the states side by side. Because hover and focus come from the pointer and the keyboard, the sample styles the display-only combos for these states with CSS classes.



### Validation States

Every experienced designer uses constraints wisely to limit the user input and avoid invalid states, hence the availability of validation styles. Through the available validation styles, the Combo Input is consistent with the standard [Input](../input.md) and equipped for sophisticated designs that display success, warn, and error visuals.

The React Combo is form-associated. Set `required` to require at least one selected item, and `invalid` to show the error state. Put the guidance or the error message in the `helper-text` slot. The Combo also exposes the `checkValidity`, `reportValidity`, and `setCustomValidity` methods of the constraint validation API. The Combo has no built-in success or warn state, so the sample styles these two states with CSS classes.

```tsx
<IgrCombo outlined required invalid placeholder="Country">
  <span slot="helper-text">Please select a different region</span>
</IgrCombo>
```



### Dropdown Size

The Dropdown used for the Combo comes with the appropriate sizing for Large, Medium and Small Combo similarly to the normal [Dropdown](../dropdown.md) component. The dropdown takes its size from the Combo, so set the `--ig-size` variable on the Combo.

The following sample shows the dropdowns only, without their input fields.



### Dropdown Search Input

The dropdown of the React Combo contains a search input that filters the options as users type.

Set the text of the empty search input with `placeholderSearch`, show a button that toggles case-sensitive filtering with `caseSensitiveIcon`, and hide the search input with `disableFiltering`. The `filteringOptions` object sets the key that the search filters by, and whether the filtering is case-sensitive and matches diacritics:

```tsx
<IgrCombo
  placeholderSearch="Search cities"
  caseSensitiveIcon
  filteringOptions={{ filterKey: 'name', caseSensitive: false, matchDiacritics: true }}
/>
```

The following sample shows the search input only. Because its states come from the pointer and the keyboard, the sample styles the display-only search inputs with CSS classes.



### Data Binding

The React Combo builds its list of options from the array that you bind to `data`. When the array holds objects, set the keys that the Combo uses:

- [`valueKey`](mcp:get_api_reference?platform=react&component=IgrCombo&member=valueKey) - the field that identifies an option. The value and the selection API of the Combo use it. When you omit it, the Combo uses references to the objects.
- [`displayKey`](mcp:get_api_reference?platform=react&component=IgrCombo&member=displayKey) - the field that the list and the input field show. When you omit it, the Combo uses the `valueKey`.
- [`groupKey`](mcp:get_api_reference?platform=react&component=IgrCombo&member=groupKey) - the field that groups the options. Each group gets a header, and [`groupSorting`](mcp:get_api_reference?platform=react&component=IgrCombo&member=groupSorting) sorts the groups in ascending or descending order. See [Grouping](./features.md#grouping) in the Combo Features topic.

To bind to data that loads from a remote service, see [Remote Binding](./features.md#remote-binding) in the Combo Features topic.

When the array holds primitive values, such as strings or numbers, don't set the `valueKey` and the `displayKey`. The Combo uses the values themselves.

### Value and Selection

The React Combo exposes its selected items through its value, and methods that select and deselect items in code.

The `value` holds the selected items as their `valueKey` values, or as object references when there is no `valueKey`. Set it to select items when the Combo first renders. The `select` and `deselect` methods take an array of items; called without items, they select or deselect all items:

```tsx
// select and deselect items by their ids, because the valueKey is 'id'
comboRef.current.select(['BG01', 'BG02']);
comboRef.current.deselect(['BG01']);

// select and deselect all items
comboRef.current.select([]);
comboRef.current.deselect([]);

console.log(comboRef.current.value); // the ids of the selected items
```

To let users select a single item and type in the input field to filter the list, use the [Single Selection](./single-selection.md) mode.

### Do/Don't

When using the Combo, its input and dropdown should have the same width and their left and right borders should match. Regarding how the dropdown is shown when the Combo is focused, you should always show it on top of the content that follows the Combo triggering its display. Combos don't push content like expansion panels do.

<Fragment slot="do">

Align the dropdown with the input so both have the same width and matching left and right borders.

</Fragment>
<Fragment slot="dont">

Avoid a dropdown that is narrower than the input or shifted out of alignment, as it breaks the visual connection between the two.

</Fragment>

## Properties

The React Combo exposes the following properties. See the API reference for the complete type definitions.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`data`](mcp:get_api_reference?platform=react&component=IgrCombo&member=data) | `T[]` | `[]` | The options of the Combo. |
| [`valueKey`](mcp:get_api_reference?platform=react&component=IgrCombo&member=valueKey) | `string` | — | The field that identifies an option. |
| [`displayKey`](mcp:get_api_reference?platform=react&component=IgrCombo&member=displayKey) | `string` | — | The field that the list and the input field show. Falls back to the `valueKey`. |
| [`groupKey`](mcp:get_api_reference?platform=react&component=IgrCombo&member=groupKey) | `string` | — | The field that groups the options. |
| [`groupSorting`](mcp:get_api_reference?platform=react&component=IgrCombo&member=groupSorting) | `'asc' \| 'desc' \| 'none'` | `'asc'` | How the groups are sorted. |
| [`value`](mcp:get_api_reference?platform=react&component=IgrCombo&member=value) | `ComboValue<T>[]` | `[]` | The selected items, as their `valueKey` values or as object references. |
| [`label`](mcp:get_api_reference?platform=react&component=IgrCombo&member=label) | `string` | — | The label of the Combo. |
| [`placeholder`](mcp:get_api_reference?platform=react&component=IgrCombo&member=placeholder) | `string` | — | The text that the input field shows when no item is selected. |
| [`placeholderSearch`](mcp:get_api_reference?platform=react&component=IgrCombo&member=placeholderSearch) | `string` | — | The text that the empty search input shows. |
| [`outlined`](mcp:get_api_reference?platform=react&component=IgrCombo&member=outlined) | `boolean` | `false` | Whether the Combo uses the border type. |
| [`singleSelect`](mcp:get_api_reference?platform=react&component=IgrCombo&member=singleSelect) | `boolean` | `false` | Whether users select a single item and filter the list from the input field. |
| `open` | `boolean` | `false` | Whether the dropdown is open. |
| `disabled` | `boolean` | `false` | Whether the Combo is disabled. |
| `required` | `boolean` | `false` | Whether the Combo requires a selected item to be valid. |
| `invalid` | `boolean` | `false` | Whether the Combo shows its invalid state. |
| [`disableFiltering`](mcp:get_api_reference?platform=react&component=IgrCombo&member=disableFiltering) | `boolean` | `false` | Whether the search input is hidden. |
| [`caseSensitiveIcon`](mcp:get_api_reference?platform=react&component=IgrCombo&member=caseSensitiveIcon) | `boolean` | `false` | Whether the search input shows the button that toggles case-sensitive filtering. |
| [`filteringOptions`](mcp:get_api_reference?platform=react&component=IgrCombo&member=filteringOptions) | `FilteringOptions<T>` | — | The key that the search filters by, and whether the filtering is case-sensitive and matches diacritics. |
| [`disableClear`](mcp:get_api_reference?platform=react&component=IgrCombo&member=disableClear) | `boolean` | `false` | Whether the clear button is hidden. |
| [`autofocusList`](mcp:get_api_reference?platform=react&component=IgrCombo&member=autofocusList) | `boolean` | `false` | Whether the list, instead of the search input, takes the focus when the dropdown opens. |
| [`selection`](mcp:get_api_reference?platform=react&component=IgrCombo&member=selection) | `T[]` | — | Read-only. The selected items as objects from the `data`. |

## Methods

The React Combo exposes the following methods.

| Method | Description |
| --- | --- |
| [`select`](mcp:get_api_reference?platform=react&component=IgrCombo&member=select) | Selects the items that you pass, by their `valueKey` values or by reference. Selects all items when you pass none. |
| [`deselect`](mcp:get_api_reference?platform=react&component=IgrCombo&member=deselect) | Deselects the items that you pass, by their `valueKey` values or by reference. Deselects all items when you pass none. |
| `show` | Opens the dropdown. |
| `hide` | Closes the dropdown. |
| `toggle` | Opens the dropdown when it is closed, and closes it when it is open. |
| `checkValidity` | Returns whether the Combo satisfies its validation constraints. |
| `reportValidity` | Checks the validity of the Combo and shows its invalid state when it fails. |

## Events

The React Combo emits the following events.

| Name | Description |
| --- | --- |
| [`onChange`](mcp:get_api_reference?platform=react&component=IgrCombo&member=onChange) | Emitted before the user changes the selection. The event detail holds the new value, the changed items, and the type of the change. Cancel the event to keep the selection. |
| [`onOpening`](mcp:get_api_reference?platform=react&component=IgrCombo&member=onOpening) | Emitted before the user opens the dropdown. Cancelable. |
| [`onOpened`](mcp:get_api_reference?platform=react&component=IgrCombo&member=onOpened) | Emitted after the dropdown opens on a user action. |
| [`onClosing`](mcp:get_api_reference?platform=react&component=IgrCombo&member=onClosing) | Emitted before the user closes the dropdown. Cancelable. |
| [`onClosed`](mcp:get_api_reference?platform=react&component=IgrCombo&member=onClosed) | Emitted after the dropdown closes on a user action. |

## Styling

The Combo comes with the combined styling flexibility of its input and dropdown pieces. There are options for the input text elements' color, border style and color. For the dropdown one may change the background color, or use the various options related to the items in the Combo Dropdown, such as the Search Input and the items with their background and text colors.

Change the colors of the toggle and the clear buttons of the React Combo with the following CSS variables:

| Variable | What it changes |
| --- | --- |
| `--ig-combo-toggle-button-background` | The background of the toggle button. |
| `--ig-combo-toggle-button-foreground` | The icon color of the toggle button. |
| `--ig-combo-toggle-button-foreground-filled` | The icon color of the toggle button when the Combo has a value. |
| `--ig-combo-toggle-button-background-focus` | The background of the toggle button when the Combo is focused. |
| `--ig-combo-toggle-button-foreground-focus` | The icon color of the toggle button when the Combo is focused. |
| `--ig-combo-toggle-button-background-disabled` | The background of the toggle button when the Combo is disabled. |
| `--ig-combo-toggle-button-foreground-disabled` | The icon color of the toggle button when the Combo is disabled. |
| `--ig-combo-clear-button-background` | The background of the clear button. |
| `--ig-combo-clear-button-foreground` | The icon color of the clear button. |
| `--ig-combo-search-separator-border-color` | The color of the line between the search input and the list. |
| `--ig-combo-empty-list-placeholder-color` | The color of the text that the empty list shows. |

The input field takes its colors from the `--ig-input-group-*` variables, the dropdown from the `--ig-drop-down-*` variables, and the checkboxes of the items from the `--ig-checkbox-*` variables, so you can set all of them on the Combo.

The `igc-combo` element exposes the following CSS parts:

| Part | What it styles |
| --- | --- |
| `input` | The input field. |
| `native-input` | The native input of the input field. |
| `label` | The label. |
| `prefix` | The container of the `prefix` slot. |
| `suffix` | The container of the `suffix` slot. |
| `toggle-icon` | The toggle button. `filled` is added when the Combo has a value. |
| `clear-icon` | The clear button. |
| `helper-text` | The helper text. |
| `list-wrapper` | The dropdown. |
| `filter-input` | The container of the search input. |
| `search-input` | The search input. |
| `case-icon` | The button that toggles case-sensitive filtering. `active` is added while it is on. |
| `header` | The container of the `header` slot. |
| `list` | The list of options. |
| `group-header` | Each group header in the list. |
| `item` | Each option in the list. `active` and `selected` are added to the active and the selected options. |
| `checkbox` | The checkbox of each option. `checked` is added when the option is selected. |
| `checkbox-indicator` | The indicator of the checkbox of each option. |
| `empty` | The container of the `empty` slot. |
| `footer` | The container of the `footer` slot. |

### Sass Theming

When you modify a primary property, all related dependent properties are automatically updated to reflect the change. The primary parameter of the `combo-theme` function is `$toggle-button-background`, from which the theme derives the colors of the toggle button in all states. Create the themes of the Combo, its dropdown, and its checkboxes, and include them with the `tokens()` mixin, which emits the matching CSS variables in the scope where you include it.

The Sass functions come from the `igniteui-theming` package. See the [Theming](../../themes/overview.md) topic for the Sass setup.

```scss
@use "igniteui-theming" as *;

$custom-combo-theme: combo-theme(
  $toggle-button-background: #e0e0e0
);

$custom-drop-down-theme: drop-down-theme(
  $background-color: #e6f2ff
);

$custom-checkbox-theme: checkbox-theme(
  $fill-color: #005dcc,
  $empty-color: #005dcc
);

:root {
  @include tokens($custom-combo-theme);
  @include tokens($custom-drop-down-theme);
  @include tokens($custom-checkbox-theme);
}
```

### CSS Variables

Set the CSS variables on a Combo or on a container when you need local styling without a Sass build step:

```css
.styled-combo {
  --ig-input-group-border-color: #1377d5;
  --ig-combo-toggle-button-background: #e0e0e0;
  --ig-drop-down-background-color: #e6f2ff;
  --ig-drop-down-selected-item-background: #4ca7e3;
  --ig-checkbox-fill-color: #005dcc;
}
```

Use the CSS parts for other styles:

```css
igc-combo::part(group-header) {
  color: #005dcc;
}

igc-combo::part(item selected) {
  color: #000;
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

### Styling with Tailwind

You can style the React Combo using our custom Tailwind utility classes. Make sure to [set up Tailwind](../../themes/tailwind.md) first.

Set the `--ig-combo-*`, `--ig-input-group-*`, and `--ig-drop-down-*` CSS variables with Tailwind arbitrary properties:

```tsx
<IgrCombo className="[--ig-input-group-border-color:#a9b8cc] [--ig-combo-toggle-button-background:#e5ebf3] [--ig-drop-down-background-color:#f3f6fa]" />
```



## Accessibility

The React Combo uses the roles of the WAI-ARIA combobox pattern: the input field is a `combobox` that controls a `listbox` of options, and users open the list, move through it, and select options with the keyboard.

### Keyboard Interaction

The input field of the React Combo is a tab stop. When the dropdown opens, the search input takes the focus, or the list when `autofocusList` is set or the search input is hidden. In the single selection mode, the focus stays in the input field. The following keys work while the Combo has the focus:

| Key | Action |
| --- | --- |
| <kbd>Arrow Down</kbd> | In the input field, opens the dropdown, and in the single selection mode also moves the focus to the list and activates the first option. In the search input, moves the focus to the list and activates the first option. In the list, activates the next option. |
| <kbd>Alt</kbd> + <kbd>Arrow Down</kbd> | In the input field, does the same as <kbd>Arrow Down</kbd>. |
| <kbd>Arrow Up</kbd> | In the input field, closes the dropdown. In the search input, closes the dropdown and moves the focus to the input field. In the list, activates the previous option. From the first option, moves the focus to the search input, or closes the dropdown and moves the focus to the input field when the search input is hidden. |
| <kbd>Home</kbd> / <kbd>End</kbd> | In the list, activates the first or the last option. |
| <kbd>Space</kbd> | In the list, selects or deselects the active option. |
| <kbd>Enter</kbd> | With an active option, closes the dropdown and moves the focus to the input field. In the single selection mode, also selects the active option. |
| <kbd>Escape</kbd> | When the dropdown is open, closes it and moves the focus to the input field. When the dropdown is closed, clears the selection. |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | Closes the dropdown and moves the focus to the next or the previous focusable element. In the single selection mode, also selects the active option. |

A disabled Combo ignores these keys.

### Screen Readers / ARIA

The React Combo renders the following roles and attributes:

| Element | Role | Attributes |
| --- | --- | --- |
| The input field | `combobox` | `aria-haspopup="listbox"`, `aria-expanded`, `aria-disabled`, `aria-controls` that points to the list, and, with a helper text, `aria-describedby` that points to it |
| The `list` part | `listbox` | `aria-multiselectable` (`false` in the single selection mode), `aria-labelledby` that points to the input field, and `aria-activedescendant` that points to the active option |
| Each `item` part | `option` | `aria-selected`, `aria-posinset`, and `aria-setsize` |
| The `clear-icon` part | `button` | `aria-label` from the resource strings |

The React Combo also behaves as follows for assistive technology:

- The input field takes its accessible name from the `label`. Without a label, it gets a name from the resource strings that says whether options are selected.
- The active option is announced through `aria-activedescendant` while the focus stays in the list.
- The content of the closed dropdown is `inert`.

### Accessibility Compliance

Infragistics documents Ignite UI for React accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| --- | --- |
| [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships) | The `combobox`, `listbox`, and `option` roles expose the structure, and the list is labeled by the input field. |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | The arrow keys open the dropdown and move through the options, and Space selects the active option. |
| [2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap) | Tab closes the dropdown and moves the focus out of the Combo. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | The input field exposes the `combobox` role, a name from the label, and its expanded state through `aria-expanded`. Each option exposes its selected state through `aria-selected`. |

Your responsibilities:

- Give every Combo a label that names what users select. See [Type](#type).
- When you override the theme colors, keep a contrast ratio of at least 3:1 for the borders and the focus indicator, as [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast) requires.
- Show the error message in the helper text, not by color alone. See [Validation States](#validation-states).

## API References

The React Combo API reference lists the complete API surface for the target platform.

- [`IgrCombo`](mcp:get_api_reference?platform=react&component=IgrCombo)

## Dependencies

The React Combo requires a theme to apply its colors and sizes. See the framework-specific setup in [**Getting Started**](../../general-getting-started.md).

## Additional Resources

The following resources provide more React Combo guidance and project support:

- [Combo Features](./features.md)
- [Combo Templates](./templates.md)
- [Combo Single Selection](./single-selection.md)

- [Combo - Design System Component](https://www.infragistics.com/products/indigo-design/help/components/combo)
- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

## Related Components

The React Combo lets users search a list and select one or more options. Use these components when the selection works differently:

- [Select](../select.md) - Use Select when users pick a single option from a short list that doesn't need search.
- [Dropdown](../dropdown.md) - Use Dropdown to show a list of actions or options from a button or another element.

## FAQ

These questions cover common React Combo setup, selection, and usage scenarios.

  **Q: How do I set the selected items of the Combo?**

    Set the `value` of the React Combo to an array of `valueKey` values, or call the `select` method with the items. Without a `valueKey`, the React Combo uses references to the objects in its `data`.
  
  **Q: Can the Combo allow only one selected item?**

    Yes. Set `singleSelect` on the React Combo, and users select one item and filter the list from the input field instead of the search input. See the Single Selection topic.
  
  **Q: How do I group the options of the Combo?**

    Set the `groupKey` of the React Combo to the field that holds the group of each option. The React Combo shows a header for each group and sorts the groups.
  
  **Q: Should I use the Combo or the Select?**

    Use the React Combo when the list is long, users need to search it, or they select more than one option. Use the React Select for a short list from which users pick a single option without searching.
  

