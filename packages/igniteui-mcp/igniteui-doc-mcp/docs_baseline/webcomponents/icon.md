---
title: Web Components Icon Component | Ignite UI for Web Components
_description: See how you can easily get started with Web Components Icon Component. Choose icons and select from different styling options to customize them further.
_keywords: Ignite UI for Web Components, UI controls, Web Components widgets, web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components Icon components, Web Components Icon controls
_license: MIT
mentionedTypes: ["Icon"]
_tocName: Icon
---

# Web Components Icon Overview

The Web Components Icon component allows you to easily display font or choose from a large set of predefined SVG icons, but it also gives you the ability to create custom font icons for your project. Benefiting from a number of attributes, you can define or change the size of the icon in use or apply different styles to it.

## Web Components Icon Example

```css
.small {
    --ig-size: var(--ig-size-small);
}

.medium {
    --ig-size: var(--ig-size-medium);
}

.large {
    --ig-size: var(--ig-size-large);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Usage

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

```ts
import { defineComponents, IgcIconComponent } from "igniteui-webcomponents";

defineComponents(IgcIconComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

Before using the [`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html), you need to register it as follows:

The [`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html) doesn't contain any icons on its own. It's a conduit for displaying any _registered_ SVG images.

### Adding Icons

To register an image as an icon, all you have to do is import one of the 2 utility functions from the icons registry service that allows you to add icons to an icon collection.

```ts
import {
  registerIcon,
  registerIconFromText,
} from "igniteui-webcomponents";
```

The `registerIcon` function allows you to register an SVG image as an icon from an external file:

```ts
registerIcon(
  "search",
  "https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_build_24px.svg",
  "material"
);
```

The method above will add an icon named `search` to a cached collection named `material`.

In order to use the newly registered icon, all you have to do is to pass the name and collection to the [`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html) element:

```html
<igc-icon name="search" collection="material"></igc-icon>
```

The second method for registering icons is by passing an SVG string to the [`registerIconFromText`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html#registerIconFromText) method:

```ts
const searchIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';

registerIconFromText("search", searchIcon, "material");
```

Then you'd use it in the same way as described in the component sample above.

### Size

The icon component supports three icon sizes - `small`, `medium`(default), and `large`. In order to change the size of the icon, you can utilize the `--ig-size` CSS variable as follows:

```css
igc-icon {
  --ig-size: var(--ig-size-large);
}
```

```css
.small {
    --ig-size: var(--ig-size-small);
}

.medium {
    --ig-size: var(--ig-size-medium);
}

.large {
    --ig-size: var(--ig-size-large);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


You can also set a custom size for the icon component. The best way to do this is by using the `--size` CSS variable.

```css
igc-icon {
  --size: 32px;
}
```

### Mirrored

Some icons need to look a little different when used in Right-to-Left(RTL) mode. For that reason we provide a `mirrored` attribute that, when set, flips the icon horizontally.

```html
<igc-icon name="search" mirrored></igc-icon>
```

## Styling

The icon component can be styled by applying styles directly to the [`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html) element;

```css
igc-icon {
  --size: 28px;
  color: var(--ig-primary-500);
}
```

```css
igc-icon {
  --size: 28px;
  color: var(--ig-primary-500);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
igc-icon {
    --size: 48px;
    color: olive;
  }
```


## API References

- [`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html)
- [`registerIcon`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html#registerIcon)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
