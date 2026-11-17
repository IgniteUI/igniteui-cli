---
title: "React Icon Component"
description: "The Ignite UI for React Icon renders named icons from registered icon sets, including custom SVG icons, with theme-based sizes and custom colors."
keywords: "React Icon, Ignite UI for React, SVG icon, icon set"
license: MIT
last_updated: "2026-10-06"
relatedComponents: ["IconButton"]
mentionedTypes: ["Icon"]
llms:
  description: "The Ignite UI for React Icon is a component that renders a named icon from a registered icon set, such as a collection of custom SVG icons."
_tocName: Icon
---
# Icon

The Ignite UI for React Icon is a component that renders a named icon from a registered icon set, such as a collection of custom SVG icons.

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
```tsx
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrIcon, IgrNavDrawer, IgrNavDrawerItem, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const icons = [
    { name: 'home', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>' },
    { name: 'mail', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>' },
    { name: 'assignment', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>' },
    { name: 'settings', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>' },
    { name: 'feedback', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/></svg>' },
];

const menuItems = [
    { label: 'Home', icon: 'home' },
    { label: 'Inbox', icon: 'mail' },
    { label: 'Reports', icon: 'assignment' },
    { label: 'Settings', icon: 'settings' },
    { label: 'Support', icon: 'feedback' },
];

export default function IconOverview() {
    const [activeItem, setActiveItem] = useState<string>('Home');

    useEffect(() => {
        icons.forEach((icon) => registerIconFromText(icon.name, icon.text, 'material'));
    }, []);

    return (
        <div className="sample">
            <IgrNavDrawer className="menu" position="relative" open={true}>
                {menuItems.map((item) => (
                    <IgrNavDrawerItem
                        key={item.label}
                        active={item.label === activeItem}
                        onClick={() => setActiveItem(item.label)}
                    >
                        <IgrIcon slot="icon" name={item.icon} collection="material" />
                        <span slot="content">{item.label}</span>
                    </IgrNavDrawerItem>
                ))}
            </IgrNavDrawer>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<IconOverview/>);
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

The React Icon renders an `igc-icon` element, which draws the registered SVG in its shadow root and exposes no CSS parts:

```text
igc-icon                 // host - inline box sized by --size
└─ #shadow-root
   └─ svg                // the registered SVG, 1em × 1em, filled with the current color
```

## Getting Started

To use the React Icon, follow the [Ignite UI for React Getting Started](../general-getting-started.md) topic for the basic project setup, then add the component for your target platform.

Install the **igniteui-react** package:

```cmd
npm install igniteui-react
```

Then import the [`IgrIcon`](mcp:get_api_reference?platform=react&component=IgrIcon) wrapper and the theme CSS:

```tsx
import { IgrIcon } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

After registration, render the [`IgrIcon`](mcp:get_api_reference?platform=react&component=IgrIcon) with an icon name and a collection:

```tsx
<IgrIcon name="search" collection="material" />
```

The icon stays empty until you register an SVG icon under the same name and collection, as described in [Name and Collection](#name-and-collection).

## Usage

Use the React Icon to add a recognizable symbol to labels, buttons, list items, and navigation, or to show a status at a glance.

### Name and Collection

The React Icon draws the SVG that is registered under its name in its collection. The collection defaults to `default`. All icons on the page share one registry, so an icon that you register once is available to every Icon, and an Icon that renders before its SVG is registered updates as soon as you register it.

Register SVG markup with [`registerIconFromText`](mcp:get_api_reference?platform=react&component=registerIconFromText), or fetch an SVG file from a URL with [`registerIcon`](mcp:get_api_reference?platform=react&component=registerIcon). Then set the same name and collection on each icon:

```tsx
import { useEffect } from 'react';
import { IgrIcon, registerIcon, registerIconFromText } from 'igniteui-react';

const searchIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';

export default function SearchToolbar() {
  useEffect(() => {
    registerIconFromText('search', searchIcon, 'material');
    registerIcon('build', '/icons/build.svg', 'material');
  }, []);

  return (
    <>
      <IgrIcon name="search" collection="material" />
      <IgrIcon name="build" collection="material" />
    </>
  );
}
```

### Icon References

An icon reference points an icon name to another registered icon. Components such as the Combo and the Date Picker render their built-in icons through references in the `default` collection, and a reference that you set takes precedence over them. For example, point the `input_clear` reference to your own icon to replace the clear icon of these two components:

```tsx
import { registerIconFromText, setIconRef } from 'igniteui-react';

const closeIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';

registerIconFromText('close', closeIcon, 'my-icons');
setIconRef('input_clear', 'default', { name: 'close', collection: 'my-icons' });
```

### Size

The React Icon supports the small, medium, and large size presets of the theme, and uses the large preset by default. Set the `--ig-size` CSS variable to `--ig-size-small`, `--ig-size-medium`, or `--ig-size-large` to choose a preset:

```css
.small {
  --ig-size: var(--ig-size-small);
}

.medium {
  --ig-size: var(--ig-size-medium);
}
```

```tsx
<IgrIcon className="small" name="build" collection="material" />
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
```tsx
import { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const notificationsIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>';

export default function IconSize() {
    useEffect(() => {
        registerIconFromText('notifications', notificationsIcon, 'material');
    }, []);

    return (
        <div className="sample">
            <div className="icon-sizes">
                <IgrIcon className="size-large" name="notifications" collection="material" />
                <span className="size-label">Large</span>
                <IgrIcon className="size-medium" name="notifications" collection="material" />
                <span className="size-label">Medium</span>
                <IgrIcon className="size-small" name="notifications" collection="material" />
                <span className="size-label">Small</span>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<IconSize/>);
```

### Mirrored

Set [`mirrored`](mcp:get_api_reference?platform=react&component=IgrIcon&member=mirrored) to flip the icon horizontally. Use it for directional icons, such as arrows, in right-to-left layouts.

```tsx
<IgrIcon name="arrow_forward" collection="material" mirrored={true} />
```

### Accessible Name

Hide a decorative icon from assistive technology, and give an icon that conveys meaning on its own an accessible name that describes that meaning.

Set `aria-label` on the icon to name it. The `<title>` element of a registered SVG also names the icon. Set `aria-hidden="true"` on a decorative icon next to visible text:

```tsx
<IgrIcon name="warning" collection="material" aria-label="Warning" />

<span>
  <IgrIcon name="search" collection="material" aria-hidden="true" />
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

The React Icon exposes the following properties. See the API reference for the complete type definitions.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`name`](mcp:get_api_reference?platform=react&component=IgrIcon&member=name) | `string` | — | The name of the icon to draw. |
| [`collection`](mcp:get_api_reference?platform=react&component=IgrIcon&member=collection) | `string` | `default` | The registered collection in which the icon name is looked up. |
| [`mirrored`](mcp:get_api_reference?platform=react&component=IgrIcon&member=mirrored) | `boolean` | `false` | Whether the icon is flipped horizontally. |

## Methods

The React Icon draws icons that you register with the following API.

Register icons with the following functions, which you import from **igniteui-react**. Pass a `RegisterIconOptions` object instead of the collection name to set the `collection` and `stripMeta` options together.

| Function | Description |
| --- | --- |
| [`registerIcon`](mcp:get_api_reference?platform=react&component=registerIcon) | Fetches an SVG file from a URL and registers it under a name in a collection. Returns a promise that rejects when the request fails. |
| [`registerIconFromText`](mcp:get_api_reference?platform=react&component=registerIconFromText) | Registers SVG markup under a name in a collection. |
| [`setIconRef`](mcp:get_api_reference?platform=react&component=setIconRef) | Points an icon name in a collection to another registered icon. |

## Styling

The React Icon takes the color of the surrounding text by default. Change its color and size with the following CSS variables:

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
```tsx
import { Fragment, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrIcon, IgrTooltip, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const icons = [
    { name: 'download', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>' },
    { name: 'arrow_forward', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>' },
    { name: 'delete', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>' },
    { name: 'add', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>' },
    { name: 'edit', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>' },
    { name: 'content_copy', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>' },
    { name: 'share', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>' },
];

const actions = [
    { id: 'edit-action', icon: 'edit', label: 'Edit' },
    { id: 'copy-action', icon: 'content_copy', label: 'Copy' },
    { id: 'share-action', icon: 'share', label: 'Share' },
    { id: 'delete-action', icon: 'delete', label: 'Delete' },
];

export default function IconStyling() {
    useEffect(() => {
        icons.forEach((icon) => registerIconFromText(icon.name, icon.text, 'material'));
    }, []);

    return (
        <div className="sample">
            <div className="icon-styling">
                <div className="button-row">
                    <IgrButton variant="contained" className="download-button">
                        <IgrIcon slot="prefix" name="download" collection="material" />
                        Download
                    </IgrButton>
                    <IgrButton variant="outlined" className="continue-button">
                        Continue
                        <IgrIcon slot="suffix" name="arrow_forward" collection="material" />
                    </IgrButton>
                    <IgrButton variant="outlined" className="delete-button">
                        <IgrIcon slot="prefix" name="delete" collection="material" />
                        Delete
                    </IgrButton>
                    <IgrButton variant="fab" className="add-button" aria-label="Add">
                        <IgrIcon name="add" collection="material" />
                    </IgrButton>
                </div>
                <div className="icon-toolbar">
                    {actions.map((action) => (
                        <Fragment key={action.id}>
                            <IgrButton id={action.id} variant="flat" aria-label={action.label}>
                                <IgrIcon name={action.icon} collection="material" />
                            </IgrButton>
                            <IgrTooltip anchor={action.id} placement="bottom" withArrow={true} offset={25}>
                                {action.label}
                            </IgrTooltip>
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<IconStyling/>);
```

### Styling with Tailwind

You can style the React Icon with the custom Tailwind utility classes from `igniteui-theming`. Make sure to [set up Tailwind](../themes/tailwind.md) first, then import the Ignite UI utilities in your global stylesheet:

```css
@import "tailwindcss";
@import "igniteui-theming/tailwind/utilities/material.css";
```

Use the `light-icon` or `dark-icon` class for the corresponding theme, and override the generated CSS variables with arbitrary properties:

```tsx
<IgrIcon name="search" collection="material" className="!light-icon ![--color:#7B9E89] ![--size:48px]" />
```

The exclamation mark (`!`) gives the Tailwind utility precedence over the default theme styles of the Icon.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

@layer theme, base, components, utilities;
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);
@source "./index.tsx";

@theme {
    --color-form-ink: #344b65;
    --color-form-error: #ff134a;
    --color-form-border: #d2dbe8;
}
```
```tsx
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrIcon, IgrInput, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const icons = [
    { name: 'search', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>' },
    { name: 'visibility', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>' },
    { name: 'visibility_off', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg>' },
    { name: 'mail', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>' },
    { name: 'info', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>' },
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldClasses = 'w-[260px] [--ig-input-group-input-prefix-background:transparent] [--ig-input-group-input-prefix-background--filled:transparent] [--ig-input-group-input-prefix-background--focused:transparent] [--ig-input-group-input-suffix-background:transparent] [--ig-input-group-input-suffix-background--filled:transparent] [--ig-input-group-input-suffix-background--focused:transparent] [--ig-input-group-placeholder-color:var(--color-form-ink)] [--ig-input-group-hover-placeholder-color:var(--color-form-ink)] [&::part(input)]:shadow-none [&::part(label)]:text-xs [&::part(label)]:leading-4 [&::part(label)]:uppercase [&::part(label)]:text-form-ink';
const focusClasses = 'focus-within:[--ig-input-group-border-color:var(--ig-primary-500)]';
const invalidClasses = '[--ig-input-group-border-color:var(--color-form-error)] [--ig-input-group-error-secondary-color:var(--color-form-error)] [&::part(input)]:border-e-0';

export default function IconTailwindStyling() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('ana@');
    const emailInvalid = !emailPattern.test(email);

    useEffect(() => {
        icons.forEach((icon) => registerIconFromText(icon.name, icon.text, 'material'));
    }, []);

    return (
        <div className="sample flex items-center justify-center">
            <div className="flex flex-col gap-6 rounded-2xl border border-form-border bg-white px-[27px] py-[31px] [--ig-body-1-font-size:0.875rem] [--ig-font-family:'Aktiv_Grotesk',Arial,sans-serif]">
                <IgrInput
                    className={`${fieldClasses} ${focusClasses} [&::part(input)]:border-s-0`}
                    label="Search"
                    placeholder="Find a report..."
                >
                    <IgrIcon slot="prefix" className="ps-2 text-form-ink" name="search" collection="material" />
                </IgrInput>
                <IgrInput
                    className={`${fieldClasses} ${focusClasses}`}
                    label="Password"
                    type={passwordVisible ? 'text' : 'password'}
                    value="reports-2026"
                >
                    <IgrButton
                        slot="suffix"
                        className="w-[39px] border-e-[color:var(--ig-input-group-border-color,var(--ig-gray-400))] px-0 [&::part(base)]:h-full [&::part(base)]:w-full [&::part(base)]:min-w-0 [&::part(base)]:rounded-none [&::part(base)]:p-0"
                        variant="flat"
                        aria-label={passwordVisible ? 'Hide password' : 'Show password'}
                        onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                        <IgrIcon className="text-form-ink" name={passwordVisible ? 'visibility' : 'visibility_off'} collection="material" />
                    </IgrButton>
                </IgrInput>
                <IgrInput
                    className={`${fieldClasses} [&::part(input)]:border-s-0 ${emailInvalid ? invalidClasses : focusClasses}`}
                    label="E-mail"
                    type="email"
                    value={email}
                    invalid={emailInvalid}
                    onInput={(e: CustomEvent<string>) => setEmail(e.detail)}
                >
                    <IgrIcon slot="prefix" className={`ps-2 ${emailInvalid ? 'text-form-error' : 'text-form-ink'}`} name="mail" collection="material" />
                    {emailInvalid && <IgrIcon slot="suffix" className="text-form-error" name="info" collection="material" />}
                    {emailInvalid && <span slot="helper-text" className="text-xs leading-4 tracking-[0.4px] text-form-error">Enter a complete address</span>}
                </IgrInput>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<IconTailwindStyling/>);
```

## Accessibility

The React Icon is a non-interactive visual that either decorates nearby content or conveys meaning on its own.

### Keyboard Interaction

The React Icon doesn't receive focus and has no keyboard interaction: it sets no `tabindex` and handles no keyboard or pointer events. Use the [Icon Button](../inputs/icon-button.md) when users must activate an icon with the keyboard.

| Key | Action |
| --- | --- |
| n/a | The Icon is not keyboard interactive. |

### Screen Readers / ARIA

The React Icon makes no announcements of its own. What assistive technology reports depends on the accessible name of the icon:

- The icon sets its role and accessible name through element internals, not through attributes on the `igc-icon` element.
- A `<title>` element that is a direct child of the root `<svg>` of the registered icon becomes the accessible name of the icon.
- An `aria-label` or `aria-labelledby` attribute on the icon names an icon whose SVG has no title, and takes precedence over the title.
- With `igniteui-webcomponents` 7.3.0 and later, the icon declares the `img` role only when it has an accessible name, so an icon without a name isn't exposed as an unnamed image.
- The icon checks for an accessible name when it resolves its SVG: when `name` or `collection` changes, when the theme changes, or when an icon is registered. Set `aria-label` or `aria-labelledby` in the initial markup.
- The `stripMeta` registration option removes the `<title>` and `<desc>` elements from the stored SVG, but the icon keeps the title text as its accessible name.

### Accessibility Compliance

Infragistics documents Ignite UI for React accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

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

Use these answers when a React Icon doesn't render or doesn't look as expected.

### Why is my icon empty?

The React Icon draws only an SVG that is registered under the same name and collection. Check the following causes:

- The name or the collection doesn't match the registration exactly. The collection defaults to `default`.
- The SVG markup is malformed. Registration throws the `SVG element not found or malformed SVG string.` error when the text has no root `<svg>` element or doesn't parse.
- The request for an SVG file failed. The registration from a URL fails for a non-OK response, so check the browser console and the network panel. A file on another origin also needs a server that allows cross-origin requests.

During server-side rendering, the icon renders no SVG. It draws the SVG after it loads in the browser.

### Why doesn't my SVG icon take the theme color?

The React Icon applies its color to the root `<svg>` element, and the child elements inherit it as their fill. A child element with a hardcoded color keeps that color:

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

The React Icon has the following limitations:

- The Icon is a non-interactive visual: it doesn't receive focus or handle keyboard input.
- Theme colors reach the root `<svg>` element and the child elements that inherit its fill. Child elements with hardcoded colors keep them.
- The Icon draws registered SVG icons only. Icon fonts and ligatures aren't supported.

## API References

The React Icon API reference lists the complete API surface for the target platform.

- [`IgrIcon`](mcp:get_api_reference?platform=react&component=IgrIcon)
- [`registerIcon`](mcp:get_api_reference?platform=react&component=registerIcon)
- [`registerIconFromText`](mcp:get_api_reference?platform=react&component=registerIconFromText)
- [`setIconRef`](mcp:get_api_reference?platform=react&component=setIconRef)
- `RegisterIconOptions`

## Dependencies

The React Icon requires a theme stylesheet to apply its theme-based size and color. See the framework-specific setup in [**Getting Started**](../general-getting-started.md).

## Additional Resources

The following resources provide more React Icon guidance and project support:

- [Icon - Design System Component](https://www.infragistics.com/products/indigo-design/help/components/icon)
- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

## Related Components

The React Icon often appears inside other components. Use these components when an icon needs to do more than display a symbol:

- [Icon Button](../inputs/icon-button.md) - Use Icon Button when users click or press the icon to run an action.
- [Avatar](./avatar.md) - Use Avatar to represent a person or entity with an icon, initials, or an image.
- [Badge](../inputs/badge.md) - Use Badge to show a short status or count next to another element.

## FAQ

These questions cover common React Icon setup, accessibility, and usage scenarios.

  **Q: Does the Icon include Material Icons?**

    No. The React Icon draws SVG icons that you register by name, so register each Material icon that you need from its SVG markup or file. The React Icon doesn't support icon fonts or ligatures.
  
  **Q: How do I add a custom SVG icon?**

    Call `registerIcon` with the URL of an SVG file, or `registerIconFromText` with SVG markup, then set the same `name` and `collection` on the React Icon. All React Icons on the page share one registry, so the registered icon is available everywhere.
  
  **Q: How do I make an icon accessible to screen readers?**

    Give a React Icon that conveys meaning on its own an accessible name with `aria-label`, or register an SVG that contains a `<title>` element. Hide a decorative React Icon next to visible text with `aria-hidden="true"`.
  
  **Q: Can I make an Icon clickable?**

    The React Icon doesn't receive focus or handle keyboard input, so a click handler on it excludes keyboard users. Use the React Icon Button for actions, because it places an icon inside a focusable button.
  
  **Q: Does the Icon support right-to-left layouts?**

    Yes. Set the `mirrored` property of the React Icon to flip a directional icon, such as an arrow, horizontally in a right-to-left layout. Non-directional icons don't need mirroring.
  

