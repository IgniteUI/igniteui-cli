---
title: "Web Components Snackbar | Infragistics"
description: With Ignite UI for Web Components Snackbar component, developers can easily integrate a brief, single-line message within mobile and desktop applications.
keywords: "Ignite UI for Web Components, UI controls, Web Components widgets, web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components Snackbar components"
license: MIT
mentionedTypes: ["Snackbar"]
llms:
  description: "The Ignite UI for Web Components Snackbar component is used to provide feedback about an operation by showing a brief message at the bottom of the screen."
_tocName: Snackbar
---
# Web Components Snackbar

The Ignite UI for Web Components Snackbar component is used to provide feedback about an operation by showing a brief message at the bottom of the screen.

## Ignite UI for Web Components Snackbar Example

This sample demonstrates how to create [`IgcSnackbar`](mcp:get_api_reference?platform=webcomponents&component=IgcSnackbarComponent) component.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Usage

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

Before using the [`IgcSnackbar`](mcp:get_api_reference?platform=webcomponents&component=IgcSnackbarComponent), you need to register it as follows:

```ts
import { defineComponents, IgcSnackbarComponent } from 'igniteui-webcomponents';

defineComponents(IgcSnackbarComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

The simplest way to display the snackbar component is to use its [`Show`](mcp:get_api_reference?platform=webcomponents&component=IgcSnackbarComponent&member=show) method and call it on a button click.

```html
<igc-button onclick="snackbar.show()" variant="contained">Show Snackbar</igc-button>
<igc-snackbar id="snackbar">Snackbar Message</igc-snackbar>
```

## Examples

### Display Time

Use the [`DisplayTime`](mcp:get_api_reference?platform=webcomponents&component=IgcSnackbarComponent&member=displayTime) property to configure how long the snackbar component is visible. By default, it's set to 4000 milliseconds.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Action Text

By default, the snackbar component is hidden automatically after a period specified by the [`DisplayTime`](mcp:get_api_reference?platform=webcomponents&component=IgcSnackbarComponent&member=displayTime). You can use [`KeepOpen`](mcp:get_api_reference?platform=webcomponents&component=IgcSnackbarComponent&member=keepOpen) property to change this behavior. In this way, the snackbar will remain visible. Using the snackbar [`ActionText`](mcp:get_api_reference?platform=webcomponents&component=IgcSnackbarComponent&member=actionText) you can display an action button inside the component.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Styling

The [`IgcSnackbar`](mcp:get_api_reference?platform=webcomponents&component=IgcSnackbarComponent) component exposes several CSS parts to give you full control over its styling:

|Name|Description|
|--|--|
| `base` | The base wrapper of the snackbar component. |
| `message` | The snackbar message. |
| `action` | The default snackbar action button. |
| `action-container` | The area holding the actions. |

```css
igc-snackbar::part(base) {
  background: var(--ig-primary-500);
  border-color: var(--ig-primary-800);
  color: white;
}
```

```css
igc-snackbar::part(base) {
  background: var(--ig-primary-500);
  border-color: var(--ig-primary-800);
  color: white;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## API References

[`IgcSnackbar`](mcp:get_api_reference?platform=webcomponents&component=IgcSnackbarComponent)<br />

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
