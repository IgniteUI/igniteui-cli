---
title: React ComboBox Component – Ignite UI for React
_description: Ignite UI for React ComboBox Component Features
_keywords: Ignite UI for React, UI controls, React widgets, web widgets, UI widgets, React, Native React Components Suite, Native React Controls, Native React Components Library, React ComboBox Component Features
_license: MIT
mentionedTypes: ["Combo", "ComboList", "ComboItem"]
_tocName: Features
---

# React ComboBox Features

The Ignite UI for React ComboBox component exposes several features such as filtering and grouping.

## Combobox Features Example

The following demo shows some [`IgrCombo`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html) features that are enabled/disabled at runtime:

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
import { IgrCombo, IgrSwitch } from "igniteui-react";
import "./index.css";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { Cities } from "./ComboData";

export default function ComboFeatures() {
  const [disableFiltering, setDisableFiltering] = useState(false);
  const [caseSensitiveIcon, setCaseSensitiveIcon] = useState(false);
  const [groupingEnabled, setGroupingEnabled] = useState(false);
  const [comboDisabled, setComboDisabled] = useState(false);

  return (
    <div className="sample">
      <IgrCombo
        valueKey="id"
        displayKey="name"
        label="Cities"
        placeholder="Pick a city"
        placeholderSearch="Search for a city"
        data={Cities}
        disableFiltering={disableFiltering}
        caseSensitiveIcon={caseSensitiveIcon}
        groupKey={groupingEnabled ? "country" : undefined}
        disabled={comboDisabled}>
      </IgrCombo>
      <div className="options">
        <IgrSwitch checked={disableFiltering} onChange={e => setDisableFiltering(e.detail.checked)}>
          <span>Disable Filtering</span>
        </IgrSwitch>
        <IgrSwitch checked={caseSensitiveIcon} onChange={e => setCaseSensitiveIcon(e.detail.checked)}>
          <span>Show Case-sensitive Icon</span>
        </IgrSwitch>
        <IgrSwitch checked={groupingEnabled} onChange={e => setGroupingEnabled(e.detail.checked)}>
          <span>Enable Grouping</span>
        </IgrSwitch>
        <IgrSwitch checked={comboDisabled} onChange={e => setComboDisabled(e.detail.checked)}>
          <span>Disable Combo</span>
        </IgrSwitch>
      </div>
    </div>
  );
}

// rendering above function to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComboFeatures />);
```

In our sample we are going to use the [`IgrSwitch`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrswitch.html) component, so we have to import them together with the combo:

```tsx
import { IgrCombo, IgrSwitch  } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

Then, using React's useState hook, we will declare our variables which will update when the state of the switches change. This will keep track for updates and reflect the changes to the combo inputs accordingly:

```tsx
const [disableFiltering, setDisableFiltering] = useState(false);
const [caseSensitiveIcon, setCaseSensitiveIcon] = useState(false);
const [groupingEnabled, setGroupingEnabled] = useState(false);
const [comboDisabled, setComboDisabled] = useState(false);

<IgrCombo
    valueKey="id"
    displayKey="name"
    label="Cities"
    placeholder="Pick a city"
    placeholderSearch="Search for a city"
    data={Cities}
    disableFiltering={disableFiltering}
    caseSensitiveIcon={caseSensitiveIcon}
    groupKey={groupingEnabled ? "country" : undefined}
    disabled={comboDisabled}>
</IgrCombo>


<IgrSwitch checked={disableFiltering} onChange={e => setDisableFiltering(e.detail.checked)}>
    <span>Disable Filtering</span>
</IgrSwitch>
<IgrSwitch checked={caseSensitiveIcon} onChange={e => setCaseSensitiveIcon(e.detail.checked)}>
    <span>Show Case-sensitive Icon</span>
</IgrSwitch>
<IgrSwitch checked={groupingEnabled} onChange={e => setGroupingEnabled(e.detail.checked)}>
    <span>Enable Grouping</span>
</IgrSwitch>
<IgrSwitch checked={comboDisabled} onChange={e => setComboDisabled(e.detail.checked)}>
    <span>Disable Combo</span>
</IgrSwitch>
```

Note that grouping is enabled/disabled by setting the [`groupKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#groupKey) property to a corresponding data source field:

```tsx
groupKey={groupingEnabled ? "country" : undefined}
```

## Features

### Filtering

By default, filtering in the ComboBox is enabled. It can be disabled by setting the [`disableFiltering`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#disableFiltering) property.

Filtering options can be further enhanced by enabling the search case sensitivity. The case-sensitive icon can be turned on using the [`caseSensitiveIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#caseSensitiveIcon) property so that end-users can control the case sensitivity.

```tsx
<IgrCombo disableFiltering={true} caseSensitiveIcon={true}></IgrCombo>
```

#### Filtering Options

The Ignite UI for React [`IgrCombo`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html) exposes one more filtering property that allows passing configuration of both `FilterKey` and `CaseSensitive` options. The `FilterKey` indicates which data source field should be used for filtering the list of options. The `CaseSensitive` option indicates if the filtering should be case-sensitive or not.

The following code snippet shows how to filter the cities from our data source by country instead of name. We are also making the filtering case-sensitive by default:

```tsx
const options = {
    filterKey: 'country',
    caseSensitive: true
};

<IgrCombo filteringOptions={options} />
```

### Grouping

Defining a [`groupKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#groupKey) option will group the items, according to the provided key:

```tsx
<IgrCombo groupKey="region" />
```

> [!Note]
> The [`groupKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#groupKey) property will only have effect if your data source consists of complex objects.

#### Sorting Direction

The ComboBox component also exposes an option for setting whether groups should be sorted in ascending or descending order. By default, the sorting order is ascending:

```tsx
<IgrCombo groupSorting="desc" />
```

### Label

The [`IgrCombo`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html) label can be set easily using the [`label`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#label) property:

```tsx
<IgrCombo label="Cities" />
```

### Placeholder

A placeholder text can be specified for both the ComboBox component input and the search input placed inside the dropdown menu:

```tsx
<IgrCombo placeholder="Pick a city" placeholderSearch="Search for a city" />
```

### Autofocus

If you want your ComboBox to be automatically focused on page load you can use the following code:

```tsx
<IgrCombo autofocus={true} />
```

### Search Input Focus

The ComboBox search input is focused by default. To disable this feature and move the focus to the list of options use the [`autofocusList`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#autofocusList) property as shown below:

```tsx
<IgrCombo autofocusList={true} />
```

### Required

The ComboBox can be marked as required by setting the required property.

```tsx
<IgrCombo required={true} />
```

### Disable ComboBox

You can disable the ComboBox using the [`disabled`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#disabled) property:

```tsx
<IgrCombo disabled={true} />
```

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
