---
title: Web Components Dialog | Infragistics
_description: With Ignite UI for Web Components Dialog component, developers can easily integrate a dialog window centered on top of app content.
_keywords: Ignite UI for Web Components, UI controls, Web Components widgets, web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components Dialog components
_license: MIT
mentionedTypes: ["Dialog"]
_tocName: Dialog
---

# Web Components Dialog Overview

The Ignite UI for Web Components Dialog component is used to display some information or prompt the user for an action or confirmation. It is shown in a modal window, which means that the user is not allowed to interact with the main app until a certain action is performed that closes the dialog.

## Ignite UI for Web Components Dialog Example

This sample demonstrates how to create a Dialog component in Web Components.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

### Usage

<!-- WebComponents -->

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

<!-- end: WebComponents -->

```ts
import { defineComponents, IgcDialogComponent } from 'igniteui-webcomponents';

defineComponents(IgcDialogComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

The simplest way to display the dialog component is to use its [`show`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdialogcomponent.html#show) method and call it on a button click.

```html
<igc-button onclick="dialog.show()" variant="contained">Show Dialog</igc-button>

<igc-dialog id="dialog" title="Confirmation">
    <p>Are you sure you want to delete the Annual_Report_2016.pdf and Annual_Report_2017.pdf files?</p>
    <igc-button slot="footer" onclick="dialog.close()" variant="flat">Cancel</igc-button>
    <igc-button slot="footer" onclick="dialog.close()" variant="flat">OK</igc-button>
</igc-dialog>
```

The Dialog component provides an [`open`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdialogcomponent.html#open) property, which gives you the ability to configure its state as per your application scenario.

Use the [`title`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdialogcomponent.html#title) property to set the title of the dialog. However, if any content is provided in the `title` slot, it will take precedence over the property.

Action buttons or additional information can be placed in the bottom part of the dialog via the `footer` slot. If no content is added there, a default `OK` button will be shown that closes the Dialog when clicked. In case you do not want this button to be shown you can set the [`hideDefaultAction`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdialogcomponent.html#hideDefaultAction) property to **true**. The default value is **false**.

### Closing

By default, the Dialog is closed automatically when the user presses `ESC`. You could prevent this behavior using the [`keepOpenOnEscape`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdialogcomponent.html#keepOpenOnEscape) property. The default value is **false**. If there is an open dropdown (or any other element that should handle `ESC` internally) in the dialog, pressing `ESC` once will close the dropdown and pressing it again will close the dialog.

Use the [`closeOnOutsideClick`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdialogcomponent.html#closeOnOutsideClick) property to configure if the dialog should be closed when clicking outside of it. The default value is **false**.

<!-- Angular, WebComponents, React -->

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<!-- end: Angular, WebComponents, React -->

### Form

Form elements can close a Dialog if they have the attribute `method="dialog"`. Submitting the form will trigger the closing of the dialog.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Styling

The [`IgcDialogComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdialogcomponent.html) component exposes several CSS parts to give you full control over its style:

|Name|Description|
|--|--|
| `base` | The base wrapper of the dialog. |
| `title` | The title container. |
| `footer` | The footer container. |
| `content` | The content container. |

```css
igc-dialog::part(content) {
  background: var(--ig-secondary-800);
  color: var(--ig-secondary-800-contrast);
}

igc-dialog::part(title),
igc-dialog::part(footer) {
  background: var(--ig-secondary-800);
  color: var(--ig-warn-500);
}
```

```css
igc-dialog::part(content) {
  background: var(--ig-secondary-800);
  color: var(--ig-secondary-800-contrast);
}

igc-dialog::part(title),
igc-dialog::part(footer) {
  background: var(--ig-secondary-800);
  color: var(--ig-warn-500);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## API References

- [`keepOpenOnEscape`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdialogcomponent.html#keepOpenOnEscape)
- [`closeOnOutsideClick`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdialogcomponent.html#closeOnOutsideClick)
- [`hide`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdialogcomponent.html#hide)
- [`hideDefaultAction`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdialogcomponent.html#hideDefaultAction)
- [`open`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdialogcomponent.html#open)
- [`title`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdialogcomponent.html#title)
- [`IgcDialogComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdialogcomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
