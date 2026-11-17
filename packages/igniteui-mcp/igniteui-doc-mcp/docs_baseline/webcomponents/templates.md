---
title: "Web Components Combo Templates"
description: "The Ignite UI for Web Components Combo Templates replace the default content of the Combo areas: the items, the group headers, the header and the footer of the list, the empty list, the toggle and the clear icons, and the input field."
keywords: "Web Components Combo Templates, Ignite UI for Web Components, combo item template, combo group header template, combo header template, combo footer template, combo empty template, combo toggle icon, combo clear icon, templated combo input"
license: MIT
last_updated: "2026-11-09"
mentionedTypes: ["Combo", "ComboItem", "ComboHeader", "ComboList"]
llms:
  description: "The Ignite UI for Web Components Combo Templates replace the default content of the Combo areas: the items, the group headers, the header and the footer of the list, the empty list, the toggle and the clear icons, and the input field."
_tocName: Templates
---
# Combo Templates

The Ignite UI for Web Components Combo Templates replace the default content of the Combo areas: the items, the group headers, the header and the footer of the list, the empty list, the toggle and the clear icons, and the input field.

The Web Components Combo renders its items and group headers through the [`itemTemplate`](mcp:get_api_reference?platform=webcomponents&component=IgcComboComponent&member=itemTemplate) and [`groupHeaderTemplate`](mcp:get_api_reference?platform=webcomponents&component=IgcComboComponent&member=groupHeaderTemplate) properties, and takes the content of the other areas through its slots. Use a `<span>` for simple text or symbols, and an [Icon](../../layouts/icon.md) for icons. The `header` and `footer` slots also accept the `<header>` and `<footer>` elements.

## Live Demo

The sample shows a Destinations combo with cities grouped by region. Each switch applies one template to the combo, and the Selection list below the combo shows the selected cities.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
igc-combo::part(header),
igc-combo::part(footer) {
    padding: 12px 8px;
    text-align: center;
}

igc-combo::part(empty) {
    font-size: 16px;
}
```

## Types

The Web Components Combo has a template for each area that it renders. The following sections show the property or the slot that takes each template.

The snippets bind the Combo to destinations that have an `id`, a `name`, a `country`, a `countryCode`, a `region`, and a UTC `offset`, with `id` as the `valueKey`, `name` as the `displayKey`, and `region` as the `groupKey`.

### Item Template

The item template renders the content of each option in the list. By default, an option shows its `displayKey` value, and the checkbox of the option stays in front of the template content.

The item and the group header templates render inside the shadow DOM of the Combo, where the styles of the page don't reach. Style their containers through the `item` and `group-header` CSS parts, and lay out their content with inline styles. The Combo lays out each root element of a template as a block, so wrap the content of a template in a single element.

Set the [`itemTemplate`](mcp:get_api_reference?platform=webcomponents&component=IgcComboComponent&member=itemTemplate) property to a function that receives the item and returns a `lit-html` template:

```ts
import { IgcComboComponent, ComboItemTemplate } from 'igniteui-webcomponents';
import { html } from 'lit-html';

const itemTemplate: ComboItemTemplate<Destination> = ({ item }) => html`
    <span>
        <img src="https://dl.infragistics.com/x/img/flags/${item.countryCode}.png" alt="" style="width: 1.25rem;" />
        ${item.name} — ${item.country} · ${item.id} · ${item.offset}
    </span>
`;

const combo = document.querySelector('igc-combo') as IgcComboComponent<Destination>;
combo.itemTemplate = itemTemplate;
```

### Header Item Template

The header item template renders the header of each group when the Combo has a `groupKey`. By default, a group header shows the group value. The template receives a header record, not a data item: its `groupKey` field holds the group value, so a count of the options in the group comes from the data of the Combo, as the `citiesIn` method of the snippets does.

Set the [`groupHeaderTemplate`](mcp:get_api_reference?platform=webcomponents&component=IgcComboComponent&member=groupHeaderTemplate) property:

```ts
const groupHeaderTemplate: ComboItemTemplate<Destination> = ({ item }) => html`
    <span style="display: flex; gap: 0.5rem; width: 100%;">
        <strong>${item.region}</strong>
        <span style="margin-inline-start: auto;">${citiesIn(item.region)} cities</span>
    </span>
`;

combo.groupHeaderTemplate = groupHeaderTemplate;
```

### Header Template

The header template renders content between the search input and the list of options, such as a title of the list or an action that applies to it. The Combo renders no header by default.

Pass the content to the `header` slot. The snippet adds a button that selects all options, through the [`select`](mcp:get_api_reference?platform=webcomponents&component=IgcComboComponent&member=select) method called without an argument. Register the Button component, as the [Button](../button.md) topic shows:

```html
<igc-combo id="destinations" value-key="id" display-key="name" group-key="region">
    <header slot="header" class="list-header">
        <span>Destinations by region</span>
        <igc-button id="select-all" variant="flat">Select all</igc-button>
    </header>
</igc-combo>
```

```ts
const combo = document.getElementById('destinations') as IgcComboComponent<Destination>;

document.getElementById('select-all').addEventListener('click', () => combo.select());
```

### Footer Template

The footer template renders content below the list of options, such as a summary of the selection or an action that applies to it. The Combo renders no footer by default.

Pass the content to the `footer` slot. The snippet shows the number of selected items from the `igcChange` event, and clears the selection through the [`deselect`](mcp:get_api_reference?platform=webcomponents&component=IgcComboComponent&member=deselect) method called without an argument:

```html
<igc-combo id="destinations" value-key="id" display-key="name" group-key="region">
    <footer slot="footer" class="list-footer">
        <span id="selected-count">0 selected</span>
        <igc-button id="clear" variant="flat">Clear</igc-button>
    </footer>
</igc-combo>
```

```ts
const count = document.getElementById('selected-count');

combo.addEventListener('igcChange', (e) => {
    count.textContent = `${e.detail.newValue.length} selected`;
});

document.getElementById('clear').addEventListener('click', () => combo.deselect());
```

### Empty Template

The empty template renders in place of the list when the search text matches no option, or when the Combo has no data. By default, the Combo shows a message that the list is empty.

Pass the content to the `empty` slot:

```html
<igc-combo value-key="id" display-key="name" group-key="region">
    <span slot="empty" class="empty-list">No city matches your search. Try another spelling.</span>
</igc-combo>
```

### Toggle Icon Template

The toggle icon template replaces the icon of the toggle button in the input field, which opens and closes the dropdown.

Pass the icon to the `toggle-icon` slot. The slot content shows both when the dropdown is closed and when it is open. Register the icon first, as the [Icon](../../layouts/icon.md) topic shows:

```ts
import { registerIconFromText } from 'igniteui-webcomponents';

registerIconFromText('flight', flightIcon, 'material');
```

```html
<igc-combo value-key="id" display-key="name">
    <igc-icon slot="toggle-icon" name="flight" collection="material"></igc-icon>
</igc-combo>
```

### Clear Icon Template

The clear icon template replaces the icon of the clear button in the input field. The Combo shows the clear button only when it has a selection, and hides it when `disableClear` is set.

Pass the icon to the `clear-icon` slot:

```html
<igc-combo value-key="id" display-key="name">
    <igc-icon slot="clear-icon" name="close" collection="material"></igc-icon>
</igc-combo>
```

### Templated Input

The input field of the Combo takes a label, content before and after its text, and a helper text below it, the way the [Input](../input.md) does.

Set the `label` attribute, pass the content before and after the text to the `prefix` and `suffix` slots, and the helper text to the `helper-text` slot. The `suffix` slot renders after the clear icon and before the toggle icon:

```html
<igc-combo value-key="id" display-key="name" label="Destinations" placeholder="Pick one or more cities">
    <igc-icon slot="prefix" name="place" collection="material"></igc-icon>
    <igc-badge slot="suffix">2</igc-badge>
    <span slot="helper-text">2 of 19 destinations selected</span>
</igc-combo>
```

## API References

The Web Components Combo API reference lists the complete API surface for the target platform.

- [`IgcCombo`](mcp:get_api_reference?platform=webcomponents&component=IgcComboComponent)

## Additional Resources

The following resources provide more Web Components Combo guidance and project support:

- [Combo](./overview.md)
- [Combo Features](./features.md)
- [Single Selection Combo](./single-selection.md)

- [Combo - Design System Component](https://www.infragistics.com/products/indigo-design/help/components/combo)
- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
