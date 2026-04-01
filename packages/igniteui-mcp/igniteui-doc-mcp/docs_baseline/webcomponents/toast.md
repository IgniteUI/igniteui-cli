---
title: Web Components Toast Notifications | Ignite UI for Web Components
_description: With Ignite UI for Web Components Toast component, developers can easily integrate a brief, single-line message within mobile and desktop applications. Try it Now
_keywords: Ignite UI for Web Components, UI controls, Web Components widgets, web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components Toast components
_license: MIT
mentionedTypes: ["Toast"]
_tocName: Toast
---

# Web Components Toast Overview

The Web Components Toast is a super lightweight and small pop-up component that is used for displaying a message content, notifying end-users about the status of a changed record. You can easily position and show Web Components toast notifications at the bottom or at any other specified area of the screen. Or you can also dismiss them in a simple and easy way.

The Web Components Toast component is primarily used for system messaging, push notifications, warning messages, and information. It cannot be dismissed by the user. This control has different features like animation effects, display time property to configure how long the toast component is visible, styling, and others.

## Web Components Toast Example

Take a look at the simple Ignite UI for Web Components Toast example below. The animated notification message pops up after clicking on the button.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

### How To Use Ignite UI for Web Components Toast Notification

<!-- WebComponents -->

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

```ts
import { defineComponents, IgcToastComponent } from 'igniteui-webcomponents';

defineComponents(IgcToastComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

The simplest way to display the toast component is to use its [`show`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctoastcomponent.html#show) method and call it on a button click.

```html
<igc-button onclick="toast.show()" variant="contained">Show Toast</igc-button>
<igc-toast id="toast">Toast Message</igc-toast>
```

## Examples

### Properties

Use the [`displayTime`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctoastcomponent.html#displayTime) property to configure how long the toast component is visible. By default, it's set to 4000 milliseconds.

By default, the toast component is hidden automatically after a period specified by the [`displayTime`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctoastcomponent.html#displayTime). You can use [`keepOpen`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctoastcomponent.html#keepOpen) property to change this behavior. In this way, the toast will remain visible.

```html
<igc-button onclick="toast.toggle()" variant="contained">Toggle Toast</igc-button>
<igc-button onclick="toast.keepOpen = !toast.keepOpen" variant="contained">Toggle keepOpen property</igc-button>
<igc-button onclick="toast.displayTime = 8000" variant="contained">Set DisplayTime to 8000</igc-button>

<igc-toast id="toast">Toast Message</igc-toast>
```

```css
.button-container {
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Styling

You can style the Web Components [`IgcToastComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctoastcomponent.html) notifications directly using its tag selector:

```css
igc-toast {
  background-color: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
}
```

```css
igc-toast {
  background-color: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## API References

- [`IgcCalendarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccalendarcomponent.html)
- [`displayTime`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctoastcomponent.html#displayTime)
- [`keepOpen`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctoastcomponent.html#keepOpen)
- [`show`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctoastcomponent.html#show)
- [`IgcToastComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctoastcomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
