---
title: "Web Components Input | Data Visualization Tools | Infragistics"
description: Infragistics' Web Components input is a component where the user can enter data. Improve your application with Ignite UI for Web Components!
keywords: "Web Components input, Ignite UI for Web Components, Infragistics"
license: MIT
mentionedTypes: ["Input", "Icon", "Radio"]
llms:
  description: "The Ignite UI for Web Components Input is a component where the user can enter data."
_tocName: Input
---
# Web Components Input Overview

The Ignite UI for Web Components Input is a component where the user can enter data.

## Web Components Input Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

To get started we need to import the [`IgcInput`](mcp:get_api_reference?platform=webcomponents&component=IgcInputComponent) in our typescript file and register the component by calling the [defineComponents()](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/index.html#defineComponents) function as follows:

```ts
import { defineComponents, IgcInputComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcInputComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

After we import the [`IgcInput`](mcp:get_api_reference?platform=webcomponents&component=IgcInputComponent) component we are ready to start using it, so let's add our first Input.

```html
<igc-input type="email" label="Subscribe" placeholder="john.doe@mail.com"></igc-input>
```

## Prefix & Suffix

With `prefix` and `suffix` slots we can add different content before and after the main content of the [`IgcInput`](mcp:get_api_reference?platform=webcomponents&component=IgcInputComponent). We recommend using a `<span>` element when adding simple text, symbols, or emojis, and an [`<igc-icon>`](../layouts/icon.md) component when adding icons to the `prefix` and `suffix` slots. In the following sample we will create a new Input field with a text prefix and an icon suffix:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Helper Text

The `helper-text` slot provides a hint placed below the Input. We recommend using a `<span>` element for the helper text. Let's add it to our phone Input:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Input Sizing

We can allow the user to change the size of the [`IgcInput`](mcp:get_api_reference?platform=webcomponents&component=IgcInputComponent) using the `--ig-size` CSS variable. То do this, we will add some radio buttons to display all size values. This way whenever one gets selected, we will change the size of the Input:

```css
.button-container {
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
}

#radio-group {
    display: flex;
    margin: 0 auto;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

In the sample above we have demonstrated the use of the following attributes:
- `required` - Used to mark the input as required
- `disabled` - Used to disable the input
- `readonly` - Used to mark the input as readonly

The full list of attributes can be found in [`IgcInput`](mcp:get_api_reference?platform=webcomponents&component=IgcInputComponent) API.

## Styling

The [`IgcInput`](mcp:get_api_reference?platform=webcomponents&component=IgcInputComponent) component exposes CSS parts for almost all of its inner elements. The following table lists all of the exposed CSS parts:

|Name|Description|
|--|--|
| `container` | The main wrapper that holds all main input elements. |
| `input` | The native input element. |
| `label` | The native label element. |
| `prefix` | The prefix wrapper. |
| `suffix` | The suffix wrapper. |
| `helper-text` | The helper text wrapper. |

```scss
igc-input::part(input) {
  background-color: var(--ig-primary-100);
  border-color: var(--ig-secondary-500);
  box-shadow: none;
}

igc-input::part(label) {
  color: var(--ig-gray-700);
}

igc-input::part(prefix),
igc-input::part(suffix) {
  color: var(--ig-primary-600-contrast);
  background-color: var(--ig-primary-600);
  border-color: var(--ig-secondary-600);
}
```

```css
igc-input::part(input) {
  background-color: var(--ig-primary-100);
  border-color: var(--ig-secondary-500);
  box-shadow: none;
}

igc-input::part(label) {
  color: var(--ig-gray-700);
}

igc-input::part(prefix),
igc-input::part(suffix) {
  color: var(--ig-primary-600-contrast);
  background-color: var(--ig-primary-600);
  border-color: var(--ig-secondary-600);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<igc-divider></igc-divider>

## API References
[`IgcIcon`](mcp:get_api_reference?platform=webcomponents&component=IgcIconComponent)
[`IgcInput`](mcp:get_api_reference?platform=webcomponents&component=IgcInputComponent)
[`IgcRadio`](mcp:get_api_reference?platform=webcomponents&component=IgcRadioComponent)
## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
