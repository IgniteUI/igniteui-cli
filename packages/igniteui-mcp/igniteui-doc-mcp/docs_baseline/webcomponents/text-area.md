---
title: Web Components Text Area | Data Visualization Tools | Infragistics
_description: Infragistics' Web Components Text Area is a component where the user can enter a sizable amount of free-form text.
_keywords: Ignite UI for Web Components, UI controls, Web Components widgets, Web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components Input, Web Components Textarea components, Web Components Textarea controls
mentionedTypes: ["Input", "Icon", "Textarea", "Toast"]
_license: MIT
_tocName: Text Area
---

# Web Components Text Area Overview

The Ignite UI for Web Components Text Area represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizable amount of free-form text, for example a comment on a review or feedback form.

## Web Components Text Area Example

<div class="divider--half"></div>

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Dependencies

To get started we need to import the [`IgcTextareaComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctextareacomponent.html) in our typescript file and register the component by calling the [defineComponents()](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/index.html#defineComponents) function as follows:

```ts
import { defineComponents, IgcTextareaComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcTextareaComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

After we import the [`IgcTextareaComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctextareacomponent.html) component we are ready to start using it, so let's add our first Text Area.

```html
<igc-textarea rows="5" label="Tell us your story:">It was a dark and stormy night...</igc-textarea>
```

## Prefix, Suffix &  Helper Text

With `prefix` and `suffix` slots we can add different content before and after the main content of the Text Area. The `helper-text` slot provides a hint placed below the Text Area. In the following sample we will create a new Text Area field with a text prefix, an icon suffix and a helper text as a hint:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Text Area Resizing

There are three different resize options of the [`IgcTextareaComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctextareacomponent.html). When set to `none`, the text area does not resize and uses a scroll bar to show overflow text. When set to `vertical` (the default option), the text area lets the user resize it vertically. When set to `auto`, the text area shows all the user input at once. Overflow text wraps onto a new line and expands the text area automatically.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
```


The full list of attributes of the text area can be found in [`IgcTextareaComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctextareacomponent.html) API.

## Form Integration

The sample below shows how a [`IgcTextareaComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctextareacomponent.html) could be integrated into a form.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
.controls {
    margin-top: 1rem;
}
```


## Styling

The [`IgcTextareaComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctextareacomponent.html) component exposes CSS parts for almost all of its inner elements. The following table lists all of the exposed CSS parts:

|Name|Description|
|--|--|
| `container` | The main wrapper that holds all main input elements. |
| `input` | The native input element. |
| `label` | The native label element. |
| `prefix` | The prefix wrapper. |
| `suffix` | The suffix wrapper. |
| `helper-text` | The helper text wrapper. |

```css
igc-textarea::part(input) {
  background-color: var(--ig-info-100);
  border-color: var(--ig-primary-400);
}

igc-textarea::part(label) {
  color: var(--ig-gray-800);
}

igc-textarea::part(prefix),
igc-textarea::part(suffix) {
  color: var(--ig-primary-500-contrast);
  border-color: var(--ig-primary-500);
  background-color: var(--ig-primary-500);
}
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```css
igc-textarea::part(input) {
  background-color: var(--ig-info-100);
  border-color: var(--ig-primary-400);
}

igc-textarea::part(label) {
  color: var(--ig-gray-800);
}

igc-textarea::part(prefix),
igc-textarea::part(suffix) {
  color: var(--ig-primary-500-contrast);
  border-color: var(--ig-primary-500);
  background-color: var(--ig-primary-500);
}
```


<div class="divider"></div>

## API References

- [`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html)
- [`IgcTextareaComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctextareacomponent.html)
- [`IgcToastComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctoastcomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
