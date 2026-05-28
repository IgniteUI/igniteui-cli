---
title: Web Components Dropdown List Component | Ignite UI for Web Components
_description: With Web Components Dropdown List component you can add interactivity and see styling options to a scrollable list of items in your app. Try it now. Web Components now.
_keywords: Web Components, UI controls, web widgets, UI widgets, Web Components Dropdown Component, Infragistics
_license: MIT
mentionedTypes: ["Dropdown", "DropdownItem", "DropdownHeader", "DropdownGroup"]
_tocName: Dropdown
---

# Web Components Dropdown List Component - Overview

Feature-rich, the Web Components Dropdown list offers out-of-the-box filtering, accessibility, preselected values, flexible data binding, grouping, UI customization, and more. What this component practically does is to effectively and easily replace HTML select tags, enabling users to quickly choose a non-editable value from a predefined set of several options.

The Ignite UI for Web Components Dropdown component displays an toggle list of predefined values and allows users to easily select a single option item with a click. It can be quickly configured to act as a Web Components dropdown menu or you can simply use it to deliver more useful visual information by grouping data. Also, with grouping you can use both flat and hierarchical data.

With our component, you get all the functions and customization options you need for your project – styling customizations, Web Components Dropdown placement options, templates and ability to change what and how is displayed in the header, footer, body, list, etc.

## Web Components Dropdown Example

The following Web Components Dropdown List example demonstrates the use of simple interactive Web Components Dropdown menu in action with three basic options to choose from. See how it works.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## How to use the Dropdown List with Ignite UI for Web Components

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

```ts
import {
    defineComponents,
    IgcDropdownComponent
} from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcDropdownComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

The simplest way to start using the [`IgcDropdownComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDropdownComponent) is as follows:

```html
<igc-dropdown>
    <igc-button slot="target">Options</igc-button>
    <igc-dropdown-item>Option 1</igc-dropdown-item>
    <igc-dropdown-item>Option 2</igc-dropdown-item>
    <igc-dropdown-item>Option 3</igc-dropdown-item>
</igc-dropdown>
```

### Target

The Web Components Dropdown list is positioned relatively to its target. The `target` slot allows you to provide a built-in component which toggles the `open` property on click. In some cases you would want to use an external target or use another event to toggle the opening of the Dropdown. You can achieve this using the [`showTarget`](mcp:get_api_reference?platform=webcomponents&component=IgcDropdownComponent&member=showTarget), [`hide`](mcp:get_api_reference?platform=webcomponents&component=IgcDropdownComponent&member=hide) and [`toggleTarget`](mcp:get_api_reference?platform=webcomponents&component=IgcDropdownComponent&member=toggleTarget) methods which allow you to provide the target as a parameter. By default, the Dropdown list uses `absolute` CSS position. You will need to set the [`IgcPositionStrategy`](mcp:get_api_reference?platform=webcomponents&component=IgcPositionStrategy) of the Web Components Dropdown to `fixed` when the target element is inside a fixed container, but the Dropdown is not. The Dropdown list is automatically sized based on its content, if you want the list to have the same width as the target, you should set the [`sameWidth`](mcp:get_api_reference?platform=webcomponents&component=IgcDropdownComponent&member=sameWidth) property to `true`.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Position

The preferred placement of the Web Components Dropdown can be set using the [`placement`](mcp:get_api_reference?platform=webcomponents&component=IgcDropdownComponent&member=placement) property. The default placement of the Dropdown is `bottom-start`. The [`flip`](mcp:get_api_reference?platform=webcomponents&component=IgcDropdownComponent&member=flip) property determines whether the placement should be flipped if there is not enough space to display the Dropdown at the specified placement. The distance from the Web Components Dropdown list to its target can be specified using the [`distance`](mcp:get_api_reference?platform=webcomponents&component=IgcDropdownComponent&member=distance) property.

```css
igc-dropdown::part(list) {
    height: 200px;
}

.center {
    align-items: center;
    justify-content: center;
}

.size-small {
    --ig-size: var(--ig-size-small);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Selection

The [`IgcDropdownComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDropdownComponent) emits the `Change` event when the user selects an item. The [`select`](mcp:get_api_reference?platform=webcomponents&component=IgcDropdownComponent&member=select) method of the Dropdown allows you to select an item by its index or value.

### Item

The [`IgcDropdownItemComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDropdownItemComponent) represents a selectable item in the Dropdown list. You could predefine a selected item by setting the [`selected`](mcp:get_api_reference?platform=webcomponents&component=IgcDropdownItemComponent&member=selected) property. You could also disable an item so that it can't be selected using the [`disabled`](mcp:get_api_reference?platform=webcomponents&component=IgcDropdownItemComponent&member=disabled) property. The [`IgcDropdownItemComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDropdownItemComponent) has a default slot which allows you to specify the content of the item. You could also provide custom content to be rendered before or after the content using the `prefix` and `suffix` slots. The [`value`](mcp:get_api_reference?platform=webcomponents&component=IgcDropdownItemComponent&member=value) property allows you to provide a custom value to an item. If the [`value`](mcp:get_api_reference?platform=webcomponents&component=IgcDropdownItemComponent&member=value) is not set, it resolves to the text content of the item.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Header

You could use the [`IgcDropdownHeaderComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDropdownHeaderComponent) to provide a header for a group of items.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Group

The Web Components Dropdown's items can also be grouped using the [`IgcDropdownGroupComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDropdownGroupComponent), making it easier for users to differentiate separate categories. See it in action in this Web Components Dropdown List example:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Scroll Strategy

The [`scrollStrategy`](mcp:get_api_reference?platform=webcomponents&component=IgcDropdownComponent&member=scrollStrategy) property determines the behavior of the component during scrolling the container of the target element. The default value is `scroll` which means that the Dropdown will be scrolled with its target. Setting the property to `block` will block the scrolling if the Dropdown is opened. You could also set the property to `close` which means that the Dropdown will be closed automatically on scroll.

### Keep Open

By default, the Dropdown is closed automatically when the user clicks outside of it or selects an item. You could prevent this behavior using the [`keepOpenOnOutsideClick`](mcp:get_api_reference?platform=webcomponents&component=IgcDropdownComponent&member=keepOpenOnOutsideClick) and [`keepOpenOnSelect`](mcp:get_api_reference?platform=webcomponents&component=IgcDropdownComponent&member=keepOpenOnSelect) properties.

## Styling

You can change the appearance of the Dropdown and its items, by using the exposed CSS parts. The [`IgcDropdownComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDropdownComponent) exposes `base` and `list` parts, the [`IgcDropdownItemComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDropdownItemComponent) exposes `prefix`, `content` and `suffix` parts and the [`IgcDropdownGroupComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDropdownGroupComponent) exposes `label` part.

```css
igc-dropdown::part(list) {
  height: 220px;
}

igc-dropdown-item[selected] {
  background: var(--ig-success-300);
}

igc-dropdown-group::part(label) {
  display: flex;
  justify-content: center;
}
```

```css
igc-dropdown::part(list) {
  height: 220px;
}

igc-dropdown-item[selected] {
  background: var(--ig-success-300);
}

igc-dropdown-group::part(label) {
  display: flex;
  justify-content: center;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## API Reference

- [`IgcDropdownComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDropdownComponent)
- [`IgcDropdownItemComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDropdownItemComponent)
- [`IgcDropdownHeaderComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDropdownHeaderComponent)
- [`IgcDropdownGroupComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDropdownGroupComponent)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
