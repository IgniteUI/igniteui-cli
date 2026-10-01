---
title: "Web Components Dialog | Infragistics"
description: With Ignite UI for Web Components Dialog component, developers can easily integrate a dialog window centered on top of app content.
keywords: "Ignite UI for Web Components, UI controls, Web Components widgets, web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components Dialog components"
license: MIT
mentionedTypes: ["Dialog"]
llms:
  description: "The Ignite UI for Web Components Dialog component is used to display some information or prompt the user for an action or confirmation."
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

### Usage

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

```ts
import { defineComponents, IgcDialogComponent } from 'igniteui-webcomponents';

defineComponents(IgcDialogComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

The simplest way to display the dialog component is to use its [`Show`](mcp:get_api_reference?platform=webcomponents&component=IgcDialogComponent&member=show) method and call it on a button click.

```html
<igc-button onclick="dialog.show()" variant="contained">Show Dialog</igc-button>

<igc-dialog id="dialog" title="Confirmation">
    <p>Are you sure you want to delete the Annual_Report_2016.pdf and Annual_Report_2017.pdf files?</p>
    <igc-button slot="footer" onclick="dialog.close()" variant="flat">Cancel</igc-button>
    <igc-button slot="footer" onclick="dialog.close()" variant="flat">OK</igc-button>
</igc-dialog>
```

The [`IgcDialog`](mcp:get_api_reference?platform=webcomponents&component=IgcDialogComponent) component provides an [`Open`](mcp:get_api_reference?platform=webcomponents&component=IgcDialogComponent&member=open) property, which gives you the ability to configure its state as per your application scenario.

Use the [`Title`](mcp:get_api_reference?platform=webcomponents&component=IgcDialogComponent&member=title) property to set the title of the dialog. However, if any content is provided in the `title` slot, it will take precedence over the property.

Action buttons or additional information can be placed in the bottom part of the dialog via the `footer` slot. If no content is added there, a default `OK` button will be shown that closes the Dialog when clicked. In case you do not want this button to be shown you can set the [`HideDefaultAction`](mcp:get_api_reference?platform=webcomponents&component=IgcDialogComponent&member=hideDefaultAction) property to **true**. The default value is **false**.

### Closing

By default, the Dialog is closed automatically when the user presses `ESC`. You could prevent this behavior using the [`KeepOpenOnEscape`](mcp:get_api_reference?platform=webcomponents&component=IgcDialogComponent&member=keepOpenOnEscape) property. The default value is **false**. If there is an open dropdown (or any other element that should handle `ESC` internally) in the dialog, pressing `ESC` once will close the dropdown and pressing it again will close the dialog.

Use the [`CloseOnOutsideClick`](mcp:get_api_reference?platform=webcomponents&component=IgcOverlaySettings&member=closeOnOutsideClick) property to configure if the dialog should be closed when clicking outside of it. The default value is **false**.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Form

Form elements can close a Dialog if they have the attribute `method="dialog"`. Submitting the form will trigger the closing of the dialog.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Styling

The [`IgcDialog`](mcp:get_api_reference?platform=webcomponents&component=IgcDialogComponent) component exposes several CSS parts to give you full control over its style:

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

## API References
[`IgcDialog`](mcp:get_api_reference?platform=webcomponents&component=IgcDialogComponent)
## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
