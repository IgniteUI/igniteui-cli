---
title: Web Components Avatar | Layout Controls | Infragistics
_description: Use Infragistics' Web Components avatar component to display an image, icon, or initials.
_keywords: avatar, layout, Ignite UI for Web Components, Infragistics
_license: MIT
mentionedTypes: ["Avatar"]
_tocName: Avatar
---

# Web Components Avatar

The Ignite UI for Web Components Avatar helps to display initials, images, or icons in your application.

## Web Components Icon Avatar Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

## Usage

First, you need to install the Ignite UI for Web Components npm package by running the following command:

```cmd
npm install igniteui-webcomponents
```

Before using the [`IgcAvatarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcavatarcomponent.html), you need to register it as follows:

```ts
import { defineComponents, IgcAvatarComponent } from 'igniteui-webcomponents';

defineComponents(IgcAvatarComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

The [`IgcAvatarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcavatarcomponent.html) is capable of displaying images, initials, or any other content, including icons. Declaring an [`IgcAvatarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcavatarcomponent.html) is as simple as:

```html
<igc-avatar></igc-avatar>
```

The avatar has several attributes that allow rendering different content based on the context. The most basic way to display content in the boundaries of the avatar is to provide content between the opening and closing tags.

```html
<igc-avatar>
  <igc-icon name="home"></igc-icon>
</igc-avatar>
```

### Initials

If the [`initials`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcavatarcomponent.html#initials) attribute is set all children elements of the avatar will be ignored and the string passed to this attribute will be displayed.

```html
<!-- Initials("AZ") will be displayed instead of the icon. -->

<igc-avatar initials="AZ">
  <igc-icon name="home"></igc-icon>
</igc-avatar>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Image

The avatar can also display an image when the [`src`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcavatarcomponent.html#src) attribute is assigned a valid URL to a static asset. In that case the [`initials`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcavatarcomponent.html#initials) value will be ignored and children elements will not be rendered.

```html
<igc-avatar
  initials="AZ"
  src="https://www.infragistics.com/angular-demos/assets/images/men/1.jpg"
  alt="A photo of a man.">
  <igc-icon name="home"></igc-icon>
</igc-avatar>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Shape

The avatar supports three shapes - `circle`, `rounded`, and `square`. The default shape of the avatar is `square` and it can be changed via the `shape` attribute.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Size

Apart from the shape, the size of the avatar can also be changed by utilizing the `--ig-size` CSS variable. The supported sizes are `small` (default), `medium`, and `large`. The following code snippet shows how to use a different component size:

```css
igc-avatar {
  --ig-size: var(--ig-size-large);
}
```

```css
.size-small {
    --ig-size: var(--ig-size-small);
}

.size-medium {
    --ig-size: var(--ig-size-medium);
}

.size-large {
    --ig-size: var(--ig-size-large);
}

.sample {
    flex-direction: row;
    gap: 10px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Styling

The [`IgcAvatarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcavatarcomponent.html) component exposes several CSS parts, giving you full control over its style:

|Name|Description|
|--|--|
| `base` | The base wrapper of the avatar. |
| `initials` | The initials wrapper of the avatar. |
| `image` | The image wrapper of the avatar. |
| `icon` | The icon wrapper of the avatar. |

```css
igc-avatar::part(base) {
  --size: 60px;
  color: var(--ig-success-500-contrast);
  background: var(--ig-success-500);;
  border-radius: 20px;
}
```

```css
igc-avatar::part(base) {
  --size: 60px;
  color: var(--ig-success-500-contrast);
  background: var(--ig-success-500);;
  border-radius: 20px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

## API References

- [`IgcAvatarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcavatarcomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
