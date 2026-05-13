---
title: Web Components ComboBox Component – Ignite UI for Web Components
_description: Ignite UI for Web Components ComboBox Component Features
_keywords: Ignite UI for Web Components, UI controls, Web Components widgets, web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components ComboBox Component Features
_license: MIT
mentionedTypes: ["Combo", "ComboList", "ComboItem"]
_tocName: Features
---

# Web Components ComboBox Features

The Ignite UI for Web Components ComboBox component exposes several features such as filtering and grouping.

## Combobox Features Example

The following demo shows some [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html) features that are enabled/disabled at runtime:

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

In our sample we are going to use the [`IgcSwitchComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcswitchcomponent.html) component, so we have to import them together with the combo:

```ts
import { defineComponents, IgcComboComponent, IgcSwitchComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcComboComponent, IgcSwitchComponent);
```

Then, using React's useState hook, we will declare our variables which will update when the state of the switches change. This will keep track for updates and reflect the changes to the combo inputs accordingly:

```ts
let combo = document.getElementById('combo') as IgcComboComponent<City>;

let switchIcon = document.getElementById('caseSensitive') as IgcSwitchComponent;
let switchFilter = document.getElementById('filtering') as IgcSwitchComponent;
let switchDisable = document.getElementById('disabled') as IgcSwitchComponent;

switchIcon.addEventListener("igcChange", () => {
    combo.caseSensitiveIcon = switchIcon.checked;
});

switchFilter.addEventListener("igcChange", () => {
    combo.disableFiltering = switchIcon.disabled = switchFilter.checked;
});

switchDisable.addEventListener("igcChange", () => {
    combo.disabled = switchDisable.checked;
});
```

Note that grouping is enabled/disabled by setting the [`groupKey`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#groupKey) property to a corresponding data source field:

```ts
let switchGroup = document.getElementById('grouping') as IgcSwitchComponent;

switchGroup.addEventListener("igcChange", () => {
    this.combo.groupKey = switchGroup.checked ? "country" : undefined;
});
```

## Features

### Filtering

By default, filtering in the ComboBox is enabled. It can be disabled by setting the [`disableFiltering`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#disableFiltering) property.

Filtering options can be further enhanced by enabling the search case sensitivity. The case-sensitive icon can be turned on using the [`caseSensitiveIcon`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#caseSensitiveIcon) property so that end-users can control the case sensitivity.

```html
<igc-combo disable-filtering case-sensitive-icon></igc-combo>
```

#### Filtering Options

The Ignite UI for Web Components [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html) exposes one more filtering property that allows passing configuration of both `FilterKey` and `CaseSensitive` options. The `FilterKey` indicates which data source field should be used for filtering the list of options. The `CaseSensitive` option indicates if the filtering should be case-sensitive or not.

The following code snippet shows how to filter the cities from our data source by country instead of name. We are also making the filtering case-sensitive by default:

```ts
const options = {
    filterKey: 'country',
    caseSensitive: true
};

combo.filteringOptions = options;
```

### Grouping

Defining a [`groupKey`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#groupKey) option will group the items, according to the provided key:

```html
<igc-combo group-key="region"></igc-combo>
```

> [!Note]
> The [`groupKey`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#groupKey) property will only have effect if your data source consists of complex objects.

#### Sorting Direction

The ComboBox component also exposes an option for setting whether groups should be sorted in ascending or descending order. By default, the sorting order is ascending:

```html
<igc-combo group-sorting="desc"></igc-combo>
```

### Label

The [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html) label can be set easily using the [`label`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#label) property:

```html
<igc-combo label="Cities"></igc-combo>
```

### Placeholder

A placeholder text can be specified for both the ComboBox component input and the search input placed inside the dropdown menu:

```html
<igc-combo placeholder="Pick a city" placeholder-search="Search for a city"></igc-combo>
```

### Autofocus

If you want your ComboBox to be automatically focused on page load you can use the following code:

```html
<igc-combo autofocus></igc-combo>
```

### Search Input Focus

The ComboBox search input is focused by default. To disable this feature and move the focus to the list of options use the [`autofocusList`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#autofocusList) property as shown below:

```html
<igc-combo autofocus-list></igc-combo>
```

### Required

The ComboBox can be marked as required by setting the required property.

```html
<igc-combo required></igc-combo>
```

### Disable ComboBox

You can disable the ComboBox using the [`disabled`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#disabled) property:

```html
<igc-combo disabled></igc-combo>
```

## API Reference

- [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
