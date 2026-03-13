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

<!-- WebComponents -->

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

<!-- end: WebComponents -->

The simplest way to start using the [`IgcDropdownComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdowncomponent.html) is as follows:

```html
<igc-dropdown>
    <igc-button slot="target">Options</igc-button>
    <igc-dropdown-item>Option 1</igc-dropdown-item>
    <igc-dropdown-item>Option 2</igc-dropdown-item>
    <igc-dropdown-item>Option 3</igc-dropdown-item>
</igc-dropdown>
```

### Target

The Web Components Dropdown list is positioned relatively to its target. The `target` slot allows you to provide a built-in component which toggles the `open` property on click. In some cases you would want to use an external target or use another event to toggle the opening of the Dropdown. You can achieve this using the [`showTarget`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdowncomponent.html#showTarget), [`hide`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbasecomboboxlikecomponent.html#hide) and [`toggleTarget`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdowncomponent.html#toggleTarget) methods which allow you to provide the target as a parameter. By default, the Dropdown list uses `absolute` CSS position. You will need to set the [`IgcPositionStrategy`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpositionstrategy.html) of the Web Components Dropdown to `fixed` when the target element is inside a fixed container, but the Dropdown is not. The Dropdown list is automatically sized based on its content, if you want the list to have the same width as the target, you should set the [`sameWidth`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdowncomponent.html#sameWidth) property to `true`.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Position

The preferred placement of the Web Components Dropdown can be set using the [`placement`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdowncomponent.html#placement) property. The default placement of the Dropdown is `bottom-start`. The [`flip`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdowncomponent.html#flip) property determines whether the placement should be flipped if there is not enough space to display the Dropdown at the specified placement. The distance from the Web Components Dropdown list to its target can be specified using the [`distance`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdowncomponent.html#distance) property.

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

The [`IgcDropdownComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdowncomponent.html) emits the `Change` event when the user selects an item. The [`select`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdowncomponent.html#select) method of the Dropdown allows you to select an item by its index or value.

### Item

The [`IgcDropdownItemComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdownitemcomponent.html) represents a selectable item in the Dropdown list. You could predefine a selected item by setting the [`selected`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbaseoptionlikecomponent.html#selected) property. You could also disable an item so that it can't be selected using the [`disabled`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbaseoptionlikecomponent.html#disabled) property. The [`IgcDropdownItemComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdownitemcomponent.html) has a default slot which allows you to specify the content of the item. You could also provide custom content to be rendered before or after the content using the `prefix` and `suffix` slots. The [`value`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbaseoptionlikecomponent.html#value) property allows you to provide a custom value to an item. If the [`value`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbaseoptionlikecomponent.html#value) is not set, it resolves to the text content of the item.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Header

You could use the [`IgcDropdownHeaderComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdownheadercomponent.html) to provide a header for a group of items.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Group

The Web Components Dropdown's items can also be grouped using the [`IgcDropdownGroupComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdowngroupcomponent.html), making it easier for users to differentiate separate categories. See it in action in this Web Components Dropdown List example:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Scroll Strategy

The [`scrollStrategy`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdowncomponent.html#scrollStrategy) property determines the behavior of the component during scrolling the container of the target element. The default value is `scroll` which means that the Dropdown will be scrolled with its target. Setting the property to `block` will block the scrolling if the Dropdown is opened. You could also set the property to `close` which means that the Dropdown will be closed automatically on scroll.

### Keep Open

By default, the Dropdown is closed automatically when the user clicks outside of it or selects an item. You could prevent this behavior using the [`keepOpenOnOutsideClick`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbasecomboboxlikecomponent.html#keepOpenOnOutsideClick) and [`keepOpenOnSelect`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbasecomboboxlikecomponent.html#keepOpenOnSelect) properties.

## Styling

You can change the appearance of the Dropdown and its items, by using the exposed CSS parts. The [`IgcDropdownComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdowncomponent.html) exposes `base` and `list` parts, the [`IgcDropdownItemComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdownitemcomponent.html) exposes `prefix`, `content` and `suffix` parts and the [`IgcDropdownGroupComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdowngroupcomponent.html) exposes `label` part.

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

- [`IgcDropdownComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdowncomponent.html)
- [`IgcDropdownItemComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdownitemcomponent.html)
- [`IgcDropdownHeaderComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdownheadercomponent.html)
- [`IgcDropdownGroupComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdowngroupcomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
