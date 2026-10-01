---
title: "Web Components ComboBox Component Templates – Ignite UI for Web Components"
description: "Ignite UI for Web Components ComboBox component templates"
keywords: "Ignite UI for Web Components, UI controls, Web Components widgets, web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components ComboBox Component Templates"
license: MIT
mentionedTypes: ["Combo"]
llms:
  description: "The Ignite UI for Web Components ComboBox component allows defining custom templates for different areas such as items, group headers, empty list, and icons."
_tocName: Templates
---
# Web Components ComboBox Templates

The Ignite UI for Web Components ComboBox component allows defining custom templates for different areas such as items, group headers, empty list, and icons.

## ComboBox Templates Example

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

## Template Types

### Item Template

The [`ItemTemplate`](mcp:get_api_reference?platform=webcomponents&component=IgcComboComponent&member=itemTemplate) is a custom template that if defined should be used when rendering items in the list of options.

```ts
import { ComboItemTemplate } from 'igniteui-webcomponents';

const itemTemplate: ComboItemTemplate<City> = ({ item }) => {
  return html`
      <span><b>${item.name}</b> [${item.id}]</span>
  `;
};

combo.itemTempate = itemTemplate;
```

### Group Header Template

The [`GroupHeaderTemplate`](mcp:get_api_reference?platform=webcomponents&component=IgcComboComponent&member=groupHeaderTemplate) is a custom template that if defined should be used when rendering group headers in the list of options.

```ts
import { ComboItemTemplate } from 'igniteui-webcomponents';

const groupHeaderTemplate: ComboItemTemplate<City> = ({ item }) => {
  return html`<div>Country of ${item.country}</div>`;
};

combo.groupHeaderTemplate = groupHeaderTemplate;
```

## Slots

Other than custom templates, the Ignite UI for Web Components ComboBox component exposes several slots that allow users to pass custom content to different parts of the component. For all ComboBox slots, we recommend using a `<span>` element for simple text, symbols, or emojis, and an [`<igc-icon>`](../../layouts/icon.md) component when adding icons. For the `header` and `footer` slots, you can also use more semantic elements such as `<header>` and `<footer>`.

### Header Slot

To render a custom header above the list of options pass content to the `header` slot:

```html
<igc-combo>
  <span slot="header">Custom header content</span>
</igc-combo>
```

### Footer Slot

To render a custom footer below the list of options pass content to the `footer` slot:

```html
<igc-combo>
  <span slot="footer">Custom footer content</span>
</igc-combo>
```

### Empty List Slot

To render a custom content when the filtering operation returns no result, use the `empty` slot:

```html
<igc-combo>
  <span slot="empty">¯\_(ツ)_/¯</span>
</igc-combo>
```

### Toggle Icon Slot

The toggle icon in the combo input can also be modified via the `toggle-icon` slot:

```html
<igc-combo>
  <igc-icon name="down" slot="toggle-icon"></igc-icon>
</igc-combo>
```

### Clear Icon Slot

The clear icon can be changed via the `clear-icon` slot:

```html
<igc-combo>
  <igc-icon name="clear" slot="clear-icon"></igc-icon>
</igc-combo>
```

## API References

[`IgcCombo`](mcp:get_api_reference?platform=webcomponents&component=IgcComboComponent)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
