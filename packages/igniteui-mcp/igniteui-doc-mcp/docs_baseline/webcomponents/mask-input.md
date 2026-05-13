---
title: Web Components MaskInput | Infragistics
_description: Infragistics' Web Components MaskInput allows the user to control input and format the visible value based on configurable mask rules
_keywords: Web Components input, Ignite UI for Web Components, Infragistics
_license: MIT
mentionedTypes: ["MaskInput"]
_tocName: Mask Input
---

## Web Components Mask Input Overview

The Ignite UI for Web Components Mask Input is an input field that allows the developer to control user input and format the visible value, based on configurable rules. It provides different input options and ease in use and configuration.

### Web Components Mask Input Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Usage

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

Before using the [`IgcMaskInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcmaskinputcomponent.html), you need to register it as follows:

```ts
import { defineComponents, IgcMaskInputComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcMaskInputComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

### Mask Rules

The table bellow shows the supported built-in mask rules:

| Mask Character | Description |
| :--- | :--- |
| 0 | Digit character \[0-9]. Entry is required. |
| 9 | Digit character \[0-9]. Entry is optional. |
| # | Digit character \[0-9], plus (+), or minus (-) sign. Entry is required. |
| L | Letter character. Entry is required. |
| ? | Letter character. Entry is optional. |
| A | Alphanumeric (letter or digit) character. Entry is required. |
| a | Alphanumeric (letter or digit) character. Entry is optional. |
| & | Any keyboard character. Entry is required. |
| C | Any keyboard character. Entry is optional. |
| \ | Escapes a mask flag and turns it into a literal. |

These flags also participate in the component validation - i.e., the input becomes invalid if some but not all required positions are filled (no positions filled/empty value is still a responsibility of `required`). This applies to both stand-alone inputs and when included in a form.

### Applying Mask

Applying the mask is pretty straightforward. All you need to do is provide a predetermined pattern to the [`mask`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcmaskinputcomponent.html#mask) property of the input.

In the example below, we will apply a mask for a phone number with an extension code.

```html
<igc-mask-input id="mask-input" mask="(####) 00-00-00 Ext. 9999">
    <igc-icon name="phone" slot="prefix"></igc-icon>
    <span slot="helper-text">Phone number</span>
</igc-mask-input>
```

After that you should see the following in your browser:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Prompt Character

Developers can customize the prompt symbol used for unfilled parts of the mask. To do this, simply provide any character to the [`prompt`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcmaskinputbasecomponent.html#prompt) property:

```html
<igc-mask-input id="mask-input" mask="(####) 00-00-00 Ext. 9999" prompt="-"></igc-mask-input>
```

By default, the `prompt` character is **underscore**.

### Placeholder

Developers can also take advantage of the [`placeholder`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputbasecomponent.html#placeholder) property, which serves the purpose of the native input placeholder attribute. If no value is provided for the placeholder, the value of the mask is used as such.

```html
<igc-mask-input id="mask-input" mask="00/00/0000" placeholder="dd/MM/yyyy"></igc-mask-input>
```

### Value Modes

The [`IgcMaskInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcmaskinputcomponent.html) exposes a [`valueMode`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcmaskinputcomponent.html#valueMode) property that lets you choose between `raw` and `withFormatting` options to configure which input value (formatted or raw) to bind in your form when a specific mask is applied. By default, [`valueMode`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcmaskinputcomponent.html#valueMode) is set to `raw`. Try it for yourself in the example below:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Styling

The [`IgcMaskInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcmaskinputcomponent.html) component exposes CSS parts for almost all of its inner elements. The following table lists all of the exposed CSS parts:

|Name|Description|
|--|--|
| `container` | The main wrapper that holds all main input elements. |
| `input` | The native input element. |
| `label` | The native label element. |
| `prefix` | The prefix wrapper. |
| `suffix` | The suffix wrapper. |
| `helper-text` | The helper text wrapper. |

```css
igc-mask-input::part(input) {
  background-color: var(--ig-primary-100);
  border-color: var(--ig-secondary-500);
  box-shadow: none;
}

igc-mask-input::part(input)::placeholder {
  color: var(--ig-primary-100-contrast);
}
```

```css
igc-mask-input::part(input) {
  background-color: var(--ig-primary-100);
  border-color: var(--ig-secondary-500);
  box-shadow: none;
}

igc-mask-input::part(input)::placeholder {
  color: var(--ig-primary-100-contrast);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Assumptions and limitations

- The masked input does not expose a _type_ attribute since it is always an input of type **text**.
- Undo/redo behavior is currently unsupported.

## API References

- [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html)
- [`IgcMaskInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcmaskinputcomponent.html)
- [`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html)
- [`IgcRadioComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcradiocomponent.html)
- [`IgcRadioGroupComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcradiogroupcomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
