---
title: "Web Components Icon Component"
description: "The Ignite UI for Web Components Icon renders named icons from registered icon sets, including custom SVG icons, with theme-based sizes and custom colors."
keywords: "Web Components Icon, Ignite UI for Web Components, SVG icon, icon set"
license: MIT
last_updated: "2026-10-06"
relatedComponents: ["IconButton"]
mentionedTypes: ["Icon"]
llms:
  description: "The Ignite UI for Web Components Icon is a component that renders a named icon from a registered icon set, such as a collection of custom SVG icons."
_tocName: Icon
---
# Icon

The Ignite UI for Web Components Icon is a component that renders a named icon from a registered icon set, such as a collection of custom SVG icons.

Register SVG icons by name in a collection, then display each icon at a theme-based size in the color of the surrounding text.

## Live Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.sample {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
}

.menu {
    height: auto;
}

.menu igc-nav-drawer-item {
    isolation: isolate;
}
```

## Anatomy

An icon is a symbol representing a command, device, directory, or common action.

**Icon anatomy:** The Icon component draws one glyph from a registered icon set.

<style>{`
  .icon-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .icon-anatomy .igd-anatomy__image {
    max-width: 94.5px;
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Icon:</strong> a visual symbol used to represent actions, objects or ideas</span>

The Web Components Icon renders an `igc-icon` element, which draws the registered SVG in its shadow root and exposes no CSS parts:

```text
igc-icon                 // host - inline box sized by --size
└─ #shadow-root
   └─ svg                // the registered SVG, 1em × 1em, filled with the current color
```

## Getting Started

To use the Web Components Icon, follow the [Ignite UI for Web Components Getting Started](../general-getting-started.md) topic for the basic project setup, then add the component for your target platform.

Install the **igniteui-webcomponents** package:

```cmd
npm install igniteui-webcomponents
```

Then import the [`IgcIcon`](mcp:get_api_reference?platform=webcomponents&component=IgcIconComponent), its theme CSS, and register the component:

```ts
import { defineComponents, IgcIconComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcIconComponent);
```

After registration, render the [`IgcIcon`](mcp:get_api_reference?platform=webcomponents&component=IgcIconComponent) with an icon name and a collection:

```html
<igc-icon name="search" collection="material"></igc-icon>
```

The icon stays empty until you register an SVG icon under the same name and collection, as described in [Name and Collection](#name-and-collection).

## Usage

Use the Web Components Icon to add a recognizable symbol to labels, buttons, list items, and navigation, or to show a status at a glance.

### Name and Collection

The Web Components Icon draws the SVG that is registered under its name in its collection. The collection defaults to `default`. All icons on the page share one registry, so an icon that you register once is available to every Icon, and an Icon that renders before its SVG is registered updates as soon as you register it.

Register SVG markup with [`registerIconFromText`](mcp:get_api_reference?platform=webcomponents&component=registerIconFromText), or fetch an SVG file from a URL with [`registerIcon`](mcp:get_api_reference?platform=webcomponents&component=registerIcon):

```ts
import { registerIcon, registerIconFromText } from 'igniteui-webcomponents';

const searchIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';

registerIconFromText('search', searchIcon, 'material');
registerIcon('build', '/icons/build.svg', 'material');
```

Then set the same name and collection on each icon:

```html
<igc-icon name="search" collection="material"></igc-icon>
<igc-icon name="build" collection="material"></igc-icon>
```

### Icon References

An icon reference points an icon name to another registered icon. Components such as the Combo and the Date Picker render their built-in icons through references in the `default` collection, and a reference that you set takes precedence over them. For example, point the `input_clear` reference to your own icon to replace the clear icon of these two components:

```ts
import { registerIconFromText, setIconRef } from 'igniteui-webcomponents';

const closeIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';

registerIconFromText('close', closeIcon, 'my-icons');
setIconRef('input_clear', 'default', { name: 'close', collection: 'my-icons' });
```

### Size

The Web Components Icon supports the small, medium, and large size presets of the theme, and uses the large preset by default. Set the `--ig-size` CSS variable to `--ig-size-small`, `--ig-size-medium`, or `--ig-size-large` to choose a preset:

```css
.small {
  --ig-size: var(--ig-size-small);
}

.medium {
  --ig-size: var(--ig-size-medium);
}
```

```html
<igc-icon class="small" name="build" collection="material"></igc-icon>
```

For a size outside the presets, set `--size` on the icon. To resize all icons inside a container, set `--ig-icon-size` on the container:

```css
.custom-size {
  --size: 56px;
}

.toolbar {
  --ig-icon-size: 2rem;
}
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.sample {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
}

.icon-sizes {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: auto auto;
    place-items: center;
    column-gap: 4.25rem;
    row-gap: 1.0625rem;
}

.icon-sizes igc-icon {
    color: var(--ig-gray-800);
}

.size-large {
    --ig-size: var(--ig-size-large);
}

.size-medium {
    --ig-size: var(--ig-size-medium);
}

.size-small {
    --ig-size: var(--ig-size-small);
}

.size-label {
    color: var(--ig-gray-600);
    font-family: "Aktiv Grotesk", Arial, sans-serif;
    font-size: 0.875rem;
    line-height: 1.25rem;
}
```

### Mirrored

Set [`mirrored`](mcp:get_api_reference?platform=webcomponents&component=IgcIconComponent&member=mirrored) to flip the icon horizontally. Use it for directional icons, such as arrows, in right-to-left layouts.

```html
<igc-icon name="arrow_forward" collection="material" mirrored></igc-icon>
```

### Accessible Name

Hide a decorative icon from assistive technology, and give an icon that conveys meaning on its own an accessible name that describes that meaning.

Set `aria-label` on the icon to name it. The `<title>` element of a registered SVG also names the icon. Set `aria-hidden="true"` on a decorative icon next to visible text:

```html
<igc-icon name="warning" collection="material" aria-label="Warning"></igc-icon>

<span>
  <igc-icon name="search" collection="material" aria-hidden="true"></igc-icon>
  Search
</span>
```

### Do/Don't

Carefully pick the Icon color to assure good contrast with the background and definitely avoid similar shades of the same color or combinations that create chromatic aberrations.

<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin: 24px 0 16px;">
  
  
</div>

<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin-bottom: 32px;">
  <div>
    <p style="color: #258b3b; font-weight: 600; margin: 0 0 8px;">Do</p>
    <p style="margin: 0;">Pick icon colors with strong contrast against the background.</p>
  </div>
  <div>
    <p style="color: #e40046; font-weight: 600; margin: 0 0 8px;">Don't</p>
    <p style="margin: 0;">Avoid shades similar to the background and color combinations that cause chromatic aberration.</p>
  </div>
</div>

## Properties

The Web Components Icon exposes the following properties. See the API reference for the complete type definitions.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`name`](mcp:get_api_reference?platform=webcomponents&component=IgcIconComponent&member=name) | `string` | — | The name of the icon to draw. |
| [`collection`](mcp:get_api_reference?platform=webcomponents&component=IgcIconComponent&member=collection) | `string` | `default` | The registered collection in which the icon name is looked up. |
| [`mirrored`](mcp:get_api_reference?platform=webcomponents&component=IgcIconComponent&member=mirrored) | `boolean` | `false` | Whether the icon is flipped horizontally. |

## Methods

The Web Components Icon draws icons that you register with the following API.

Register icons with the following functions, which you import from **igniteui-webcomponents**. Pass a `RegisterIconOptions` object instead of the collection name to set the `collection` and `stripMeta` options together.

| Function | Description |
| --- | --- |
| [`registerIcon`](mcp:get_api_reference?platform=webcomponents&component=registerIcon) | Fetches an SVG file from a URL and registers it under a name in a collection. Returns a promise that rejects when the request fails. |
| [`registerIconFromText`](mcp:get_api_reference?platform=webcomponents&component=registerIconFromText) | Registers SVG markup under a name in a collection. |
| [`setIconRef`](mcp:get_api_reference?platform=webcomponents&component=setIconRef) | Points an icon name in a collection to another registered icon. |

## Styling

The Web Components Icon takes the color of the surrounding text by default. Change its color and size with the following CSS variables:

| Variable | What it changes |
| --- | --- |
| `--ig-icon-color` | The icon color. Set it on an icon, or on a container to recolor all icons inside it. |
| `--ig-icon-size` | The icon size. Set it on an icon, or on a container to resize all icons inside it. |
| `--size` | The size of the icon on which you set it. |
| `--ig-size` | The size preset: `--ig-size-small`, `--ig-size-medium`, or `--ig-size-large`. |

The `igc-icon` element exposes no CSS parts, so apply the styles to the element itself.

### Sass Theming

Create a theme with the `icon-theme` function and include it with the `tokens()` mixin. The function accepts the `$color`, `$size`, and `$disabled-color` parameters, and the mixin emits the matching `--ig-icon-*` variables in the scope where you include it.

The Sass functions come from the `igniteui-theming` package. See the [Theming](../themes/overview.md) topic for the Sass setup.

```scss
@use "igniteui-theming" as *;

$custom-icon-theme: icon-theme(
  $color: #1481b8
);

:root {
  @include tokens($custom-icon-theme);
}
```

### CSS Variables

Set the color and size on an icon or a container when you need local styling without a Sass build step:

```css
igc-icon {
  --size: 28px;
  color: var(--ig-primary-500);
}
```

```css
.toolbar {
  --ig-icon-color: var(--ig-primary-500);
}
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.sample {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
}

.icon-styling {
    --ig-font-family: "Aktiv Grotesk", Arial, sans-serif;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.8125rem;
}

.button-row {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.button-row igc-button::part(base) {
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.1px;
    text-transform: none;
}

.download-button::part(base) {
    border-color: #a9b8cc;
    background: #e5ebf3;
    color: #344b65;
    box-shadow: none;
}

.download-button igc-icon {
    color: #344b65;
}

.continue-button {
    --ig-outlined-button-hover-background: rgb(0 93 204 / 8%);
    --ig-outlined-button-focus-hover-background: rgb(0 93 204 / 8%);
    --ig-outlined-button-active-background: rgb(0 93 204 / 16%);
    --ig-outlined-button-focus-background: rgb(0 93 204 / 16%);
    --ig-outlined-button-focus-visible-background: rgb(0 93 204 / 16%);
}

.continue-button::part(base) {
    border-color: #005dcc;
    color: #005dcc;
}

.continue-button igc-icon {
    color: #005dcc;
}

.delete-button {
    --ig-outlined-button-hover-background: rgb(223 27 116 / 8%);
    --ig-outlined-button-focus-hover-background: rgb(223 27 116 / 8%);
    --ig-outlined-button-active-background: rgb(223 27 116 / 16%);
    --ig-outlined-button-focus-background: rgb(223 27 116 / 16%);
    --ig-outlined-button-focus-visible-background: rgb(223 27 116 / 16%);
}

.delete-button::part(base) {
    border-color: #df1b74;
    color: #df1b74;
}

.delete-button igc-icon {
    color: #df1b74;
}

.add-button {
    --ig-size: var(--ig-size-small);
    --ig-fab-button-size: 2.25rem;
}

.add-button::part(base) {
    border-color: #0176ff;
    border-radius: 50%;
    background: #cce4ff;
    box-shadow: none;
}

.add-button igc-icon {
    color: #005dcc;
}

.icon-toolbar {
    display: flex;
    gap: 1.5rem;
    padding: 0.5rem;
    border: 1px solid #e5ebf3;
    border-radius: 999px;
    background: #fff;
}

.icon-toolbar igc-button {
    --ig-flat-button-hover-background: #f8f8f8;
    --ig-flat-button-active-background: #e0e0e0;
}

.icon-toolbar igc-button::part(base) {
    width: 1.5rem;
    min-width: 0;
    height: 1.5rem;
    padding: 0;
    border-radius: 50%;
}

.icon-toolbar igc-icon {
    color: #344b65;
}

.icon-toolbar igc-tooltip {
    --ig-tooltip-background: rgb(52 75 101 / 90%);
    --ig-tooltip-text-color: #fff;
}
```

### Styling with Tailwind

You can style the Web Components Icon with the custom Tailwind utility classes from `igniteui-theming`. Make sure to [set up Tailwind](../themes/tailwind.md) first, then import the Ignite UI utilities in your global stylesheet:

```css
@import "tailwindcss";
@import "igniteui-theming/tailwind/utilities/material.css";
```

Use the `light-icon` or `dark-icon` class for the corresponding theme, and override the generated CSS variables with arbitrary properties:

```html
<igc-icon name="search" collection="material" class="!light-icon ![--color:#7B9E89] ![--size:48px]"></igc-icon>
```

The exclamation mark (`!`) gives the Tailwind utility precedence over the default theme styles of the Icon.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

@layer theme, base, components, utilities;
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);
@source "./index.ts";
@source "../index.html";

@theme {
    --color-form-ink: #344b65;
    --color-form-error: #ff134a;
    --color-form-border: #d2dbe8;
}
```

## Accessibility

The Web Components Icon is a non-interactive visual that either decorates nearby content or conveys meaning on its own.

### Keyboard Interaction

The Web Components Icon doesn't receive focus and has no keyboard interaction: it sets no `tabindex` and handles no keyboard or pointer events. Use the [Icon Button](../inputs/icon-button.md) when users must activate an icon with the keyboard.

| Key | Action |
| --- | --- |
| n/a | The Icon is not keyboard interactive. |

### Screen Readers / ARIA

The Web Components Icon makes no announcements of its own. What assistive technology reports depends on the accessible name of the icon:

- The icon sets its role and accessible name through element internals, not through attributes on the `igc-icon` element.
- A `<title>` element that is a direct child of the root `<svg>` of the registered icon becomes the accessible name of the icon.
- An `aria-label` or `aria-labelledby` attribute on the icon names an icon whose SVG has no title, and takes precedence over the title.
- With `igniteui-webcomponents` 7.3.0 and later, the icon declares the `img` role only when it has an accessible name, so an icon without a name isn't exposed as an unnamed image.
- The icon checks for an accessible name when it resolves its SVG: when `name` or `collection` changes, when the theme changes, or when an icon is registered. Set `aria-label` or `aria-labelledby` in the initial markup.
- The `stripMeta` registration option removes the `<title>` and `<desc>` elements from the stored SVG, but the icon keeps the title text as its accessible name.

### Accessibility Compliance

Infragistics documents Ignite UI for Web Components accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| --- | --- |
| [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content) | The icon uses the `aria-label` that you set, or the `<title>` of the registered SVG, as its text alternative. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | With `igniteui-webcomponents` 7.3.0 and later, an icon with an accessible name exposes the `img` role, and an icon without a name exposes no role. |

Your responsibilities:

- Give every icon that conveys meaning on its own an accessible name, and keep decorative icons hidden. See [Accessible Name](#accessible-name).
- Keep a contrast ratio of at least 3:1 between an icon that conveys information and its background, as [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast) requires, especially when you override the theme color.
- Use an Icon Button, not an Icon, for actions that users activate.
- Set `mirrored` on directional icons in right-to-left layouts so that their direction matches the reading order.

## Troubleshooting

Use these answers when a Web Components Icon doesn't render or doesn't look as expected.

### Why is my icon empty?

The Web Components Icon draws only an SVG that is registered under the same name and collection. Check the following causes:

- The name or the collection doesn't match the registration exactly. The collection defaults to `default`.
- The SVG markup is malformed. Registration throws the `SVG element not found or malformed SVG string.` error when the text has no root `<svg>` element or doesn't parse.
- The request for an SVG file failed. The registration from a URL fails for a non-OK response, so check the browser console and the network panel. A file on another origin also needs a server that allows cross-origin requests.

During server-side rendering, the icon renders no SVG. It draws the SVG after it loads in the browser.

### Why doesn't my SVG icon take the theme color?

The Web Components Icon applies its color to the root `<svg>` element, and the child elements inherit it as their fill. A child element with a hardcoded color keeps that color:

```html
<svg viewBox="0 0 24 24">
  <path fill="#050d42" d="..." />
</svg>
```

Remove hardcoded colors from the child elements, or set the color on the root `<svg>` element, where the theme overrides it. To color part of an icon on purpose, use a theme color variable, such as `fill="var(--ig-primary-500)"`.

### Why does a tooltip appear when I hover an icon?

Browsers show the `<title>` element of an SVG as a native tooltip.

Register the icon with the `stripMeta` option to remove the `<title>` and `<desc>` elements from the stored SVG. The icon keeps the title text as its accessible name:

```ts
registerIconFromText('search', searchIcon, { collection: 'material', stripMeta: true });
```

### Known Limitations

The Web Components Icon has the following limitations:

- The Icon is a non-interactive visual: it doesn't receive focus or handle keyboard input.
- Theme colors reach the root `<svg>` element and the child elements that inherit its fill. Child elements with hardcoded colors keep them.
- The Icon draws registered SVG icons only. Icon fonts and ligatures aren't supported.

## API References

The Web Components Icon API reference lists the complete API surface for the target platform.

- [`IgcIcon`](mcp:get_api_reference?platform=webcomponents&component=IgcIconComponent)
- [`registerIcon`](mcp:get_api_reference?platform=webcomponents&component=registerIcon)
- [`registerIconFromText`](mcp:get_api_reference?platform=webcomponents&component=registerIconFromText)
- [`setIconRef`](mcp:get_api_reference?platform=webcomponents&component=setIconRef)
- `RegisterIconOptions`

## Dependencies

The Web Components Icon requires a theme stylesheet to apply its theme-based size and color. See the framework-specific setup in [**Getting Started**](../general-getting-started.md).

## Additional Resources

The following resources provide more Web Components Icon guidance and project support:

- [Icon - Design System Component](https://www.infragistics.com/products/indigo-design/help/components/icon)
- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

## Related Components

The Web Components Icon often appears inside other components. Use these components when an icon needs to do more than display a symbol:

- [Icon Button](../inputs/icon-button.md) - Use Icon Button when users click or press the icon to run an action.
- [Avatar](./avatar.md) - Use Avatar to represent a person or entity with an icon, initials, or an image.
- [Badge](../inputs/badge.md) - Use Badge to show a short status or count next to another element.

## FAQ

These questions cover common Web Components Icon setup, accessibility, and usage scenarios.

  **Q: Does the Icon include Material Icons?**

    No. The Web Components Icon draws SVG icons that you register by name, so register each Material icon that you need from its SVG markup or file. The Web Components Icon doesn't support icon fonts or ligatures.
  
  **Q: How do I add a custom SVG icon?**

    Call `registerIcon` with the URL of an SVG file, or `registerIconFromText` with SVG markup, then set the same `name` and `collection` on the Web Components Icon. All Web Components Icons on the page share one registry, so the registered icon is available everywhere.
  
  **Q: How do I make an icon accessible to screen readers?**

    Give a Web Components Icon that conveys meaning on its own an accessible name with `aria-label`, or register an SVG that contains a `<title>` element. Hide a decorative Web Components Icon next to visible text with `aria-hidden="true"`.
  
  **Q: Can I make an Icon clickable?**

    The Web Components Icon doesn't receive focus or handle keyboard input, so a click handler on it excludes keyboard users. Use the Web Components Icon Button for actions, because it places an icon inside a focusable button.
  
  **Q: Does the Icon support right-to-left layouts?**

    Yes. Set the `mirrored` property of the Web Components Icon to flip a directional icon, such as an arrow, horizontally in a right-to-left layout. Non-directional icons don't need mirroring.
  

