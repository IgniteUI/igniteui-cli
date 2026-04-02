---
title: Web Components Navbar | Infragistics
_description: Infragistics' Web Components navbar provides optimal UI experience with seamless integration to allow users to move within an application smoothly. Improve your application with Ignite UI for  Web Components!
_keywords: Web Components navbar, Ignite UI for Web Components, Infragistics
_license: MIT
mentionedTypes: ["Navbar"]
_tocName: Navbar
---

# Web Components Navbar Overview

The Ignite UI for Web Components Navbar informs the user of their current position in an app. The Navigation Bar can also provide links to quick actions such as search or favorite, helping users navigate smoothly through an application without trying to move to invalid routes or states. The bar sits at the top of the container it is placed in.

## Web Components Navbar Example

The following example represents a [`IgcNavbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavbarcomponent.html) with icons and text header:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Usage

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

Before using the [`IgcNavbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavbarcomponent.html), you need to register it as follows:

```ts
import { defineComponents, IgcNavbarComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavbarComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

Then in the template of [`IgcNavbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavbarcomponent.html), you can add the following code to show a basic [`IgcNavbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavbarcomponent.html) with a title only:

```html
<igc-navbar>Navigation Title</igc-navbar>
```

### Content

You can enhance the [`IgcNavbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavbarcomponent.html) component by adding [`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html) or other components at the start or end position as content, allowing users to navigate to key positions directly from the bar:

```html
<igc-navbar>
    <igc-icon name="home" slot="start"></igc-icon>
    <h2>Sample App</h2>
    <igc-icon name="search" slot="end"></igc-icon>
    ...
</igc-navbar>
```

## Styling

The `NavBar` component exposes several CSS parts, giving you full control over its style:

|Name|Description|
|--|--|
| `base` | The base wrapper of the navigation bar. |
| `start` | The left aligned icon container. |
| `middle` | The navigation bar title container. |
| `end` | The right aligned action icons container. |

```css
igc-icon {
  color: var(--ig-primary-500);
}

igc-navbar {
  background-color: var(--ig-secondary-200);
}

igc-navbar::part(middle) {
  font-family: Titillium Web, sans-serif;
  color: var(--ig-primary-500);;
}
```

If all went well, you should see the following in your browser:

```css
igc-icon {
  color: var(--ig-primary-500);
}

igc-navbar {
  background-color: var(--ig-secondary-200);
}

igc-navbar::part(middle) {
  font-family: Titillium Web, sans-serif;
  color: var(--ig-primary-500);;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider"></div>

## API References

- [`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html)
- [`IgcNavbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavbarcomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
