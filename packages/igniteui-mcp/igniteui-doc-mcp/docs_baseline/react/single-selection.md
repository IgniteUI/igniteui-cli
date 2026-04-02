---
title: React ComboBox Component – Ignite UI for React
_description: React Combo component provides a powerful input, combining features of the basic HTML input, select, filtering and custom drop-down lists. Try it for FREE
_keywords: Ignite UI for React, UI controls, React widgets, web widgets, UI widgets, React, Native React Components Suite, Native React Controls, Native React Components Library, React ComboBox component
_license: MIT
mentionedTypes: ["Combo", "SingleSelect", "ComboItem", "ComboHeader", "ComboList"]
_tocName: Single Selection
---

# React Single Selection ComboBox

The React `ComboBox` supports single-selection mode and quick filtering of the list of items via the main input prompt. Users can quickly type in the item they are looking for and be presented with a list of options. Upon pressing the enter key, the first highlighted match will be selected.

## React Single Selection Example

To enable single-selection and quick filtering, set the [`singleSelect`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#singleSelect) property on the [`IgrCombo`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html). The user experience and keyboard navigation will mostly stay the same, but instead of having to type in your search query into a special filtering box above the list of options, the main input box will be used.

```tsx
<IgrCombo singleSelect></IgrCombo>
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

.options {
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  gap: 8px;
}
```
```tsx
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { IgrCheckboxChangeEventArgs, IgrCombo, IgrSwitch } from "igniteui-react";
import "./index.css";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { Cities } from "./ComboData";

export default function ComboSingleSelection() {
  const [groupingEnabled, setGroupingEnabled] = useState(false);
  const [comboDisabled, setComboDisabled] = useState(false);

  return (
    <div className="sample">
      <IgrCombo
        valueKey="id"
        displayKey="name"
        label="Cities"
        placeholder="Pick a city"
        singleSelect
        data={Cities}
        groupKey={groupingEnabled ? "country" : undefined}
        disabled={comboDisabled}
      ></IgrCombo>
      <div className="options">
        <IgrSwitch
          checked={groupingEnabled}
          onChange={(e) => setGroupingEnabled(e.detail.checked)}>
          <span>Enable Grouping</span>
        </IgrSwitch>
        <IgrSwitch
          checked={comboDisabled}
          onChange={(e) => setComboDisabled(e.detail.checked)}>
          <span>Disable Combo</span>
        </IgrSwitch>
      </div>
    </div>
  );
}

// rendering above function to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComboSingleSelection />);
```


<div class="divider--half"></div>

## Selection API

The selection API for a ComboBox with the [`singleSelect`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#singleSelect) property applied mostly remains the same, however, there are some important differences compared to ComboBoxes that don't have this property set.

The main difference is that only one item can be selected at any time. For example, if you have specified a [`valueKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#valueKey) for your combo component, passing more than one item to the [`select`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#select)/[`deselect`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#deselect) methods will have no effect. This also means that any previously selected items will automatically get deselected upon making a new selection.

Here's how to select/deselect an item programmatically in a single selection combo.

### Selecting items

```tsx
// select the item matching the 'BG01' value of the value key field.
comboRef.current.select('BG01');
```

To deselect an item without making a new selection, call the [`deselect`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#deselect) method.

#### Deselecting items

```tsx
// deselect the item matching the 'BG01' value of the value key field.
comboRef.current.deselect('BG01');
```

## Disabled features

Naturally, some configuration options will have no effect in a single selection ComboBox.

### Placeholder

Assigning a value to the [`placeholderSearch`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#placeholderSearch) property will yield no result since the filtering input that usually is placed above the list of options will not be present in a single selection ComboBox.

### Auto-focusing the list of options

Setting the [`autofocusList`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#autofocusList) option on a single selection ComboBox will also have no effect.

## Keyboard Navigation

The keyboard navigation should behave the same as with a non-single selection ComboBox, except for the fact that now the main input plays the role of a filtering prompt and so all keyboard actions that apply to the filtering/search input are moved to the main input prompt.

## Other Features

All other features will behave the same as in a non-single selection ComboBox component.

## API Reference

- [`IgrCombo`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
