---
title: Web Components Select Component – Ignite UI for Web Components
_description: Ignite UI for Web Components Select component
_keywords: Ignite UI for Web Components, UI controls, Web Components widgets, web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components Select components, Web Components Select controls
_license: MIT
mentionedTypes: ["Select"]
_tocName: Select
---

# Web Components Select

The Ignite UI for Web Components Select component allows a single selection from a list of items, placed in a dropdown. This form control offers a quick items list navigation, including selection, based on a single or multiple characters match.

## Web Components Select Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Usage

<!-- WebComponents -->

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

Before using the [`IgcSelectComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectcomponent.html) component, you need to register it together with its additional components:

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

<!-- end: WebComponents -->

> \[!Note]
> Please note that the select header and group components are not mandatory unless you want to use them.

To start using the component add the [`IgcSelectComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectcomponent.html) along with a list of [`IgcSelectItemComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectitemcomponent.html)'s to choose from:

<!-- WebComponents -->

```html
<igc-select>
    <igc-select-item value="orange">Orange</igc-select-item>
    <igc-select-item value="apple">Apple</igc-select-item>
    <igc-select-item value="banana">Banana</igc-select-item>
    <igc-select-item value="mango">Mango</igc-select-item>
</igc-select>
```

<!-- end: WebComponents -->

### Select

The [`IgcSelectComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectcomponent.html) component can be used inside a `Form` component, thus it exposes a [`name`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectcomponent.html#name) property to be registered with. It also has a [`label`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectcomponent.html#label), and [`placeholder`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectcomponent.html#placeholder) properties. The [`outlined`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectcomponent.html#outlined) property is used for styling purposes only when it comes to the Material theme. Except for the default slot, the component provides a few other slots including `header`, `footer`, `helper-text`, `prefix`, `suffix`, and `toggle-icon`. The component size can be changed using the `--ig-size` CSS variable.

### Item

The [`IgcSelectItemComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectitemcomponent.html) component allows the users to declaratively specify a list of options to be used by the [`IgcSelectComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectcomponent.html) control. Each item provides a [`value`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectcomponent.html#value) property that represents the data it carries upon selection. The [`IgcSelectItemComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectitemcomponent.html) has a default slot which allows you to specify the text content of the item. This text content will be used as value in case the [`value`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectcomponent.html#value) property is not present on the [`IgcSelectItemComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectitemcomponent.html). You could also provide custom content to be rendered before or after the [`IgcSelectItemComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectitemcomponent.html) content using the `prefix` and `suffix` slots. You could predefine a selected item by setting the `Selected` property. You could also disable some or all items via the [`disabled`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectcomponent.html#disabled) property.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Header

You can use the [`IgcSelectHeaderComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectheadercomponent.html) to provide a header for a group of items.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<!-- WebComponents -->

```html
<igc-select>
    <igc-select-header>Tasks</igc-select-header>
</igc-select>
```

<!-- end: WebComponents -->

### Group

Multiple [`IgcSelectItemComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectitemcomponent.html)s can be placed between the opening and closing brackets of an [`IgcSelectGroupComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectgroupcomponent.html) component so that users can visually group them together. The [`IgcSelectGroupComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectgroupcomponent.html) can be labelled via its `label` slot and disabled via its [`disabled`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectgroupcomponent.html#disabled) property.

> \[!Note]
> Keep in mind that if a select group is disabled, you cannot enable separate items of it.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<!-- WebComponents -->

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

<!-- end: WebComponents -->

## Validation

In addition, the [`IgcSelectComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectcomponent.html) supports most of the [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html) properties, such as [`required`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectcomponent.html#required), [`disabled`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectcomponent.html#disabled), [`autofocus`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html#autofocus), etc. The component also exposes a method bound to its validation:

- `reportValidity` - checks for validity and focuses the component if invalid.

## Keyboard Navigation

When the select is focused and the list of options is **not visible**:

- Open the [`select`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html#select) using the <kbd>ALT</kbd> + <kbd>↑</kbd> <kbd>↓</kbd> combination or by clicking on the <kbd>SPACE</kbd> or the <kbd>ENTER</kbd> key.
- Close the [`select`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html#select) using the <kbd>ALT</kbd> + <kbd>↑</kbd> or <kbd>↓</kbd> combination or any of the <kbd>ENTER</kbd>, <kbd>SPACE</kbd>, <kbd>ESC</kbd> or [`IgcTabComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctabcomponent.html) keys.
- Using the <kbd>←</kbd> <kbd>→</kbd> keys will select the previous item in the list.
- Using the <kbd>↑</kbd> <kbd>↓</kbd> keys will select the next item in the list.
- Using the <kbd>HOME</kbd> or <kbd>END</kbd> keys will select the first or last item in the list.
- Typing characters will query the list of items and select the one that most closely matches the current user input.

When the select is focused and the list of options is **visible**:

- Using the <kbd>ENTER</kbd> or <kbd>SPACE</kbd> keys will select an item and close the list.
- Using the <kbd>←</kbd> <kbd>→</kbd> keys will activate the previous item in the list.
- Using the <kbd>↑</kbd> <kbd>↓</kbd> keys will activate the next item in the list.
- Using the <kbd>HOME</kbd> or <kbd>END</kbd> keys will activate the first or last item in the list.

> \[!Note]
> The [`IgcSelectComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectcomponent.html) component supports only **single** selection of items.

<!-- WebComponents, React -->

## Styling

You can change the appearance of the Ignite UI for Web Components [`IgcSelectComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectcomponent.html) component and its items, by using the exposed CSS parts listed below:

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


<!-- end: WebComponents, React -->

## API Reference

- [`IgcSelectComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectcomponent.html)
- [`IgcSelectItemComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectitemcomponent.html)
- [`IgcSelectHeaderComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectheadercomponent.html)
- [`IgcSelectGroupComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectgroupcomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
