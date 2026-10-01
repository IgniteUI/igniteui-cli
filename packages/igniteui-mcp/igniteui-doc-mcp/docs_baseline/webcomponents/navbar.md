---
title: "Web Components Navbar | Infragistics"
description: Infragistics' Web Components navbar provides optimal UI experience with seamless integration to allow users to move within an application smoothly. Improve your application with Ignite UI for  Web Components!
keywords: "Web Components navbar, Ignite UI for Web Components, Infragistics"
license: MIT
mentionedTypes: ["Navbar"]
llms:
  description: "The Ignite UI for Web Components Navbar informs the user of their current position in an app."
_tocName: Navbar
---
# Web Components Navbar Overview

The Ignite UI for Web Components Navbar informs the user of their current position in an app. The Navigation Bar can also provide links to quick actions such as search or favorite, helping users navigate smoothly through an application without trying to move to invalid routes or states. The bar sits at the top of the container it is placed in.

## Web Components Navbar Example

The following example represents a [`IgcNavbar`](mcp:get_api_reference?platform=webcomponents&component=IgcNavbarComponent) with icons and text header:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Usage

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

Before using the [`IgcNavbar`](mcp:get_api_reference?platform=webcomponents&component=IgcNavbarComponent), you need to register it as follows:

```ts
import { defineComponents, IgcNavbarComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavbarComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

Then in the template of [`IgcNavbar`](mcp:get_api_reference?platform=webcomponents&component=IgcNavbarComponent), you can add the following code to show a basic [`IgcNavbar`](mcp:get_api_reference?platform=webcomponents&component=IgcNavbarComponent) with a title only:

```html
<igc-navbar>Navigation Title</igc-navbar>
```

### Content

You can enhance the [`IgcNavbar`](mcp:get_api_reference?platform=webcomponents&component=IgcNavbarComponent) component by adding [`IgcIcon`](mcp:get_api_reference?platform=webcomponents&component=IgcIconComponent) or other components at the start or end position as content, allowing users to navigate to key positions directly from the bar:

```html
<igc-navbar>
    <igc-icon name="home" slot="start"></igc-icon>
    <h2>Sample App</h2>
    <igc-icon name="search" slot="end"></igc-icon>
    ...
</igc-navbar>
```

## Styling

The [`IgcNavbar`](mcp:get_api_reference?platform=webcomponents&component=IgcNavbarComponent) component exposes several CSS parts, giving you full control over its style:

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

<igc-divider></igc-divider>

## API References
[`IgcIcon`](mcp:get_api_reference?platform=webcomponents&component=IgcIconComponent)
[`IgcNavbar`](mcp:get_api_reference?platform=webcomponents&component=IgcNavbarComponent)
## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
