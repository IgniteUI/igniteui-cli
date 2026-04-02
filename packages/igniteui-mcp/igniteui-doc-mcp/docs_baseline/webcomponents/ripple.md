---
title: Web Components Ripple
_description: With Ignite UI for Web Components Ripple, developers can define an area which received a ripple animation effect for a visually enticing UI enhancement.
_keywords: Ignite UI for Web Components, UI controls, Web Components widgets, web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components Ripple components, Web Components Ripple controls
_license: MIT
mentionedTypes: ["Ripple", "Button"]
_tocName: Ripple
---

# Web Components Ripple Overview

The Ignite UI for Web Components Ripple component creates an animation in response to a touch or a mouse click.

## Web Components Ripple Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Usage

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

Before using the [`IgcRippleComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcripplecomponent.html), you need to register it as follows:

```ts
import { defineComponents, IgcRippleComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcRippleComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

The simplest way to start using the [`IgcRippleComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcripplecomponent.html) is as follows:

```html
<igc-button>
  <igc-ripple></igc-ripple>
  Ripple Button
</igc-button>
```

You can add the [`IgcRippleComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcripplecomponent.html) component to any web element as long as its CSS `position` property is set to any other value than `static`;

## Examples

### Color

You can change the color of the ripple by setting the `--color` CSS property to any valid CSS color:

```css
igc-ripple {
  --color: olive;
}
```

```css
igc-ripple {
    --color: olive;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## API References

- [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html)
- [`IgcRippleComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcripplecomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
