---
title: Web Components ComboBox Component – Ignite UI for Web Components
_description: Web Components Combo component provides a powerful input, combining features of the basic HTML input, select, filtering and custom drop-down lists. Try it for FREE
_keywords: Ignite UI for Web Components, UI controls, Web Components widgets, web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components ComboBox component
_license: MIT
mentionedTypes: ["Combo", "SingleSelect", "ComboItem", "ComboHeader", "ComboList"]
_tocName: Single Selection
---

# Web Components Single Selection ComboBox

The Web Components `ComboBox` supports single-selection mode and quick filtering of the list of items via the main input prompt. Users can quickly type in the item they are looking for and be presented with a list of options. Upon pressing the enter key, the first highlighted match will be selected.

## Web Components Single Selection Example

To enable single-selection and quick filtering, set the [`singleSelect`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#singleSelect) property on the [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html). The user experience and keyboard navigation will mostly stay the same, but instead of having to type in your search query into a special filtering box above the list of options, the main input box will be used.

```html
<igc-combo single-select></igc-combo>
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


<div class="divider--half"></div>

## Selection API

The selection API for a ComboBox with the [`singleSelect`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#singleSelect) property applied mostly remains the same, however, there are some important differences compared to ComboBoxes that don't have this property set.

The main difference is that only one item can be selected at any time. For example, if you have specified a [`valueKey`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#valueKey) for your combo component, passing more than one item to the [`select`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#select)/[`deselect`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#deselect) methods will have no effect. This also means that any previously selected items will automatically get deselected upon making a new selection.

Here's how to select/deselect an item programmatically in a single selection combo.

### Selecting items

<!-- WebComponents -->

```ts
// select the item matching the 'BG01' value of the value key field.
combo.select('BG01');
```

To deselect an item without making a new selection, call the [`deselect`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#deselect) method.

#### Deselecting items

<!-- WebComponents -->

```ts
// deselect the item matching the 'BG01' value of the value key field.
combo.deselect('BG01');
```

## Disabled features

Naturally, some configuration options will have no effect in a single selection ComboBox.

### Placeholder

Assigning a value to the [`placeholderSearch`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#placeholderSearch) property will yield no result since the filtering input that usually is placed above the list of options will not be present in a single selection ComboBox.

### Auto-focusing the list of options

Setting the [`autofocusList`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#autofocusList) option on a single selection ComboBox will also have no effect.

## Keyboard Navigation

The keyboard navigation should behave the same as with a non-single selection ComboBox, except for the fact that now the main input plays the role of a filtering prompt and so all keyboard actions that apply to the filtering/search input are moved to the main input prompt.

## Other Features

All other features will behave the same as in a non-single selection ComboBox component.

## API Reference

- [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
