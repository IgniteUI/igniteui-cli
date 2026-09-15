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



<div class="divider--half"></div>

## Usage

First, you need to install the Ignite UI for Web Components npm package by running the following command:

```cmd
npm install igniteui-webcomponents
```

Before using the [`IgcAvatarComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcAvatarComponent), you need to register it as follows:

```ts
import { defineComponents, IgcAvatarComponent } from 'igniteui-webcomponents';

defineComponents(IgcAvatarComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

The [`IgcAvatarComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcAvatarComponent) is capable of displaying images, initials, or any other content, including icons. Declaring an [`IgcAvatarComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcAvatarComponent) is as simple as:

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

If the [`initials`](mcp:get_api_reference?platform=webcomponents&component=IgcAvatarComponent&member=initials) attribute is set all children elements of the avatar will be ignored and the string passed to this attribute will be displayed.

```html
<!-- Initials("AZ") will be displayed instead of the icon. -->

<igc-avatar initials="AZ">
  <igc-icon name="home"></igc-icon>
</igc-avatar>
```



### Image

The avatar can also display an image when the [`src`](mcp:get_api_reference?platform=webcomponents&component=IgcAvatarComponent&member=src) attribute is assigned a valid URL to a static asset. In that case the [`initials`](mcp:get_api_reference?platform=webcomponents&component=IgcAvatarComponent&member=initials) value will be ignored and children elements will not be rendered.

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
.avatar-shape-sample {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: auto auto;
  place-content: center;
  place-items: center;
  column-gap: 2.5rem;
  row-gap: 0.5rem;
  height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
}

:where(igc-avatar) {
  --ig-size: var(--ig-size-small);
  grid-row: 1;
}

:where(span) {
  grid-row: 2;
  text-align: center;
  color: var(--ig-gray-600);
  font-family: "Aktiv Grotesk", Arial, sans-serif;
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin: 0;
}

:where(igc-badge) {
  --ig-size: var(--ig-size-small);
  --ig-badge-icon-color: #ffffff;
  --ig-badge-text-color: #ffffff;

  position: absolute;
  inset-block-start: anchor(85.5%);
  inset-inline-start: anchor(85.5%);
  translate: -50% -50%;
}

.avatar-shape-sample igc-avatar:nth-of-type(1) {
  anchor-name: --circle;
}

.avatar-shape-sample igc-avatar:nth-of-type(2) {
  anchor-name: --square;
}

.avatar-shape-sample igc-avatar:nth-of-type(3) {
  anchor-name: --rounded;
}

.avatar-shape-sample igc-badge:nth-of-type(1) {
  position-anchor: --circle;
}

.avatar-shape-sample igc-badge:nth-of-type(2) {
  position-anchor: --square;
}

.avatar-shape-sample igc-badge:nth-of-type(3) {
  position-anchor: --rounded;
}
```

### Size

Apart from the shape, the size of the avatar can also be changed by utilizing the `--ig-size` CSS variable. The supported sizes are `small` (default), `medium`, and `large`. The following code snippet shows how to use a different component size:

```css
igc-avatar {
  --ig-size: var(--ig-size-large);
}
```

```css
.avatar-size-sample {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: auto auto;
  place-content: center;
  place-items: center;
  column-gap: 3rem;
  row-gap: 0.5rem;
  height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
}

:where(igc-avatar) {
  grid-row: 1;
}

:where(span) {
  grid-row: 2;
  text-align: center;
  color: var(--ig-gray-600);
  font-family: "Aktiv Grotesk", Arial, sans-serif;
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin: 0;
}

:where(igc-badge) {
  position: absolute;
  inset-block-start: anchor(85.5%);
  inset-inline-start: anchor(85.5%);
  translate: -50% -50%;
}

.avatar-size-sample igc-avatar:nth-of-type(1) {
  --ig-size: var(--ig-size-large);
  anchor-name: --large;
}

.avatar-size-sample igc-avatar:nth-of-type(2) {
  --ig-size: var(--ig-size-medium);
  anchor-name: --medium;
}

.avatar-size-sample igc-avatar:nth-of-type(3) {
  --ig-size: var(--ig-size-small);
  anchor-name: --small;
}

.avatar-size-sample igc-badge:nth-of-type(1) {
  --ig-size: var(--ig-size-large);
  position-anchor: --large;
}

.avatar-size-sample igc-badge:nth-of-type(2) {
  --ig-size: var(--ig-size-medium);
  position-anchor: --medium;
}

.avatar-size-sample igc-badge:nth-of-type(3) {
  --ig-size: var(--ig-size-small);
  position-anchor: --small;
}
```

### Styling

The [`IgcAvatarComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcAvatarComponent) component exposes several CSS parts, giving you full control over its style:

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
.sample {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.chat-list {
  --ig-list-header-text-color: var(--ig-gray-900);
  max-width: 20.5rem;
}

.chat-list * {
  font-family: "Aktiv Grotesk", Arial, sans-serif;
}

.chat-list [slot="title"] {
  font-weight: 600;
}

.chat-list [slot="end"] {
  color: var(--ig-gray-600);
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.chat-list-item--split {
  --border-width: 0.0625rem;
  --border-color: var(--ig-gray-300);
}

:where(igc-avatar) {
  --ig-size: var(--ig-size-small);
  --ig-avatar-background: var(--ig-gray-300);
  --ig-avatar-color: var(--ig-gray-300-contrast);
  --ig-avatar-icon-color: var(--ig-gray-300-contrast);
}

.avatar-icon {
  --ig-size: var(--ig-size-small);
}

.avatar-with-badge {
  position: relative;
}

:where(igc-badge) {
  --ig-size: var(--ig-size-small);
  --ig-badge-icon-color: #ffffff;
  --ig-badge-text-color: #ffffff;
}

.avatar-status {
  --ig-size: var(--ig-size-small);
  position: absolute;
  inset-inline-end: -0.25rem;
  inset-block-end: -0.25rem;
}

.avatar-muted-badge {
  --ig-badge-background-color: var(--ig-gray-500);
}
```

<div class="divider--half"></div>

## API References

- [`IgcAvatarComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcAvatarComponent)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
