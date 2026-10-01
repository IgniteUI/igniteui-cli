---
title: "Web Components Select Component – Ignite UI for Web Components"
description: "Ignite UI for Web Components Select component"
keywords: "Ignite UI for Web Components, UI controls, Web Components widgets, web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components Select components, Web Components Select controls"
license: MIT
mentionedTypes: ["Select"]
llms:
  description: "The Ignite UI for Web Components Select component allows a single selection from a list of items, placed in a dropdown."
_tocName: Select
---
# Web Components Select

The Ignite UI for Web Components Select component allows a single selection from a list of items, placed in a dropdown. This form control offers a quick items list navigation, including selection, based on a single or multiple characters match.

## Web Components Select Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Usage

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

Before using the [`Select`](mcp:get_api_reference?platform=webcomponents&component=IgcInputComponent&member=select) component, you need to register it together with its additional components:

```ts
import {
    defineComponents,
    IgcSelectComponent
}
from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcSelectComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

**Note:** 
Please note that the select header and group components are not mandatory unless you want to use them.

To start using the component add the [`IgcSelect`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectComponent) along with a list of [`IgcSelectItem`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectItemComponent)'s to choose from:

```html
<igc-select>
    <igc-select-item value="orange">Orange</igc-select-item>
    <igc-select-item value="apple">Apple</igc-select-item>
    <igc-select-item value="banana">Banana</igc-select-item>
    <igc-select-item value="mango">Mango</igc-select-item>
</igc-select>
```

### Select

The [`IgcSelect`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectComponent) component can be used inside a `Form` component, thus it exposes a [`Name`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectComponent&member=name) property to be registered with.

It also has a [`Label`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectComponent&member=label), and [`Placeholder`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectComponent&member=placeholder) properties. The [`Outlined`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectComponent&member=outlined) property is used for styling purposes only when it comes to the Material theme.

Except for the default slot, the component provides a few other slots including `header`, `footer`, `helper-text`, `prefix`, `suffix`, and `toggle-icon`. When slotting content, we recommend using a `<span>` element for simple text, symbols, or emojis, and an [`<igc-icon>`](../layouts/icon.md) component for icons.

The component size can be changed using the `--ig-size` CSS variable.

### Item

The [`IgcSelectItem`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectItemComponent) component allows the users to declaratively specify a list of options used by the [`IgcSelect`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectComponent) control. Each item provides a [`Value`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectItemComponent&member=value) property that represents the data it carries upon selection. The [`IgcSelectItem`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectItemComponent) has a default slot that allows you to specify the text content of the item. This text content will be used as the value when the [`Value`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectItemComponent&member=value) property is not present on the [`IgcSelectItem`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectItemComponent).

You could also provide custom content to be rendered before or after the [`IgcSelectItem`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectItemComponent) content using the `prefix` and `suffix` slots. As with the [`IgcSelect`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectComponent) component, we recommend using a `<span>` element when adding simple text, symbols, or emojis, and an [`<igc-icon>`](../layouts/icon.md) component when adding icons to the `prefix` and `suffix` slots.

You can predefine a selected item by setting the [`Selected`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectItemComponent&member=selected) property. You can also disable some or all items via the [`Disabled`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectItemComponent&member=disabled) property.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Header

You can use the [`IgcSelectHeader`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectHeaderComponent) to provide a header for a group of items.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

```html
<igc-select>
    <igc-select-header>Tasks</igc-select-header>
</igc-select>
```

### Group

Multiple [`IgcSelectItem`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectItemComponent)s can be placed between the opening and closing brackets of an [`IgcSelectGroup`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectGroupComponent) component so that users can visually group them together. The [`IgcSelectGroup`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectGroupComponent) can be labelled via its `label` slot and disabled via its [`Disabled`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectGroupComponent&member=disabled) property. We recommend using a `<span>` element for the `label` slot.

**Note:** 
Keep in mind that if a select group is disabled, you cannot enable separate items of it.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

```html
<igc-select>
    <igc-select-group>
        <span slot="label">Europe</span>
        <igc-select-item>
            <igc-icon @ref="IconRef" slot="prefix" name="place" collection="material"></igc-icon>
            Germany
            <span slot="suffix">DE</span>
        </igc-select-item>
        <igc-select-item>
            <igc-icon slot="prefix" name="place" collection="material"></igc-icon>
            France
            <span slot="suffix">FR</span>
        </igc-select-item>
        <igc-select-item>
            <igc-icon slot="prefix" name="place" collection="material"></igc-icon>
            Spain
            <span slot="suffix">ES</span>
        </igc-select-item>
    </igc-select-group>
</igc-select>
```

## Validation

In addition, the [`IgcSelect`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectComponent) supports most of the [`IgcInput`](mcp:get_api_reference?platform=webcomponents&component=IgcInputComponent) properties, such as [`Required`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectComponent&member=required), [`Disabled`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectComponent&member=disabled), [`Autofocus`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectComponent&member=autofocus), etc. The component also exposes a method bound to its validation:

- `reportValidity` - checks for validity and focuses the component if invalid.

## Keyboard Navigation

When the select is focused and the list of options is **not visible**:

- Open the [`Select`](mcp:get_api_reference?platform=webcomponents&component=IgcInputComponent&member=select) using the <kbd>ALT</kbd> + <kbd>↑</kbd> <kbd>↓</kbd> combination or by clicking on the <kbd>SPACE</kbd> or the <kbd>ENTER</kbd> key.
- Close the [`Select`](mcp:get_api_reference?platform=webcomponents&component=IgcInputComponent&member=select) using the <kbd>ALT</kbd> + <kbd>↑</kbd> or <kbd>↓</kbd> combination or any of the <kbd>ENTER</kbd>, <kbd>SPACE</kbd>, <kbd>ESC</kbd> or [`IgcTab`](mcp:get_api_reference?platform=webcomponents&component=IgcTabComponent) keys.
- Using the <kbd>←</kbd> <kbd>→</kbd> keys will select the previous item in the list.
- Using the <kbd>↑</kbd> <kbd>↓</kbd> keys will select the next item in the list.
- Using the <kbd>HOME</kbd> or <kbd>END</kbd> keys will select the first or last item in the list.
- Typing characters will query the list of items and select the one that most closely matches the current user input.

When the select is focused and the list of options is **visible**:

- Using the <kbd>ENTER</kbd> or <kbd>SPACE</kbd> keys will select an item and close the list.
- Using the <kbd>←</kbd> <kbd>→</kbd> keys will activate the previous item in the list.
- Using the <kbd>↑</kbd> <kbd>↓</kbd> keys will activate the next item in the list.
- Using the <kbd>HOME</kbd> or <kbd>END</kbd> keys will activate the first or last item in the list.

**Note:** 
The [`Select`](mcp:get_api_reference?platform=webcomponents&component=IgcInputComponent&member=select) component supports only **single** selection of items.

## Styling

You can change the appearance of the Ignite UI for Web Components [`IgcSelect`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectComponent) component and its items, by using the exposed CSS parts listed below:

**Select Component**

| Part name | Description |
| ---------|------------ |
| `input` | The encapsulated igc-input. |
| `label` | The encapsulated text label. |
| `list` | A wrapper that holds the list of options. |
| `prefix`  | A prefix wrapper that renders content before the input. |
| `suffix` | A suffix wrapper that renders content after the input. |
| `toggle-icon` | A toggle-icon wrapper that renders content inside the suffix wrapper. |
| `helper-text` | A helper-text wrapper that renders content below the input. |

**Select Item Component**

| Part name | Description |
| ---------|------------ |
| `content` | The main wrapper that holds the text content of an item. |
| `prefix`  | A prefix wrapper that renders content before the main wrapper. |
| `suffix` | A suffix wrapper that renders content after the main wrapper. |

**Select Group Component**

| Part name | Description |
| ---------|------------ |
| `label` | A label wrapper that renders content above the select group items. |

```css
igc-select::part(base) {
  background: var(--ig-primary-50);
}

igc-select-item[active] {
  background: var(--ig-secondary-300);
}

igc-select::part(input) {
  background-color: var(--ig-primary-50);
}

igc-select::part(prefix),
igc-select::part(suffix) {
  color: var(--ig-secondary-500-contrast);
  background: var(--ig-secondary-500);
}
```

```css
igc-select::part(base) {
  background: var(--ig-primary-50);
}

igc-select-item[active] {
  background: var(--ig-secondary-300);
}

igc-select::part(input) {
  background-color: var(--ig-primary-50);
}

igc-select::part(prefix),
igc-select::part(suffix) {
  color: var(--ig-secondary-500-contrast);
  background: var(--ig-secondary-500);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## API References

[`IgcSelect`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectComponent)
[`IgcSelectItem`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectItemComponent)
[`IgcSelectHeader`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectHeaderComponent)
[`IgcSelectGroup`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectGroupComponent)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
