---
title: React Icon Component | Ignite UI for React
_description: See how you can easily get started with React Icon Component. Choose icons and select from different styling options to customize them further.
_keywords: Ignite UI for React, UI controls, React widgets, web widgets, UI widgets, React, Native React Components Suite, Native React Controls, Native React Components Library, React Icon components, React Icon controls
_license: MIT
mentionedTypes: ["Icon"]
_tocName: Icon
---

# React Icon Overview

The React Icon component allows you to easily display font or choose from a large set of predefined SVG icons, but it also gives you the ability to create custom font icons for your project. Benefiting from a number of attributes, you can define or change the size of the icon in use or apply different styles to it.

## React Icon Example

```css
.horizontal-border-container {
    display: flex;
    align-items: center;
    width: 400px;
    border: 1px solid gainsboro;
}

.size-small {
    --ig-size: var(--ig-size-small);
}

.size-medium {
    --ig-size: var(--ig-size-medium);
}

.size-large {
    --ig-size: var(--ig-size-large);
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './IconSizing.css';
import { IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const buildIcon =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>';

export default class IconSizing extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
        registerIconFromText("build", buildIcon, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="horizontal-border-container">
                    <IgrIcon className="size-small" name="build" collection="material" />
                    <IgrIcon className="size-medium" name="build" collection="material" />
                    <IgrIcon className="size-large" name="build" collection="material" />
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IconSizing/>);
```

<div class="divider--half"></div>

## Usage

Before using the [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html), you need to register it as follows:

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html), its necessary CSS, and register its module, like so:

```tsx
import { IgrIcon } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

The [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html) doesn't contain any icons on its own. It's a conduit for displaying any _registered_ SVG images.

### Adding Icons

To register an image as an icon, all you need to do is call one of the 2 "register" methods on a single [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html) element that allow you to add icons to an icon collection on your page.

The [`registerIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html#registerIcon) method allows you to register an SVG image as an icon from an external file:

```tsx
constructor() {
    registerIconFromText("search", "https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_build_24px.svg", "material");
}

<IgrIcon name="search" collection="material" />
```

The method above will add an icon named `search` to a cached collection named `material`.

In order to use the newly registered icon, all you have to do is to pass the name and collection to the [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html) element:

```tsx
<IgrIcon name="search" collection="material" />
```

The second method for registering icons is by passing an SVG string to the [`registerIconFromText`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html#registerIconFromText) method:

```tsx
const searchIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';

constructor() {
    registerIconFromText("search", searchIcon, "material");
}

<IgrIcon name="search" collection="material" />
```

Then you'd use it in the same way as described in the component sample above.

### Size

The icon component supports three icon sizes - `small`, `medium`(default), and `large`. In order to change the size of the icon, you can utilize the `--ig-size` CSS variable as follows:

```tsx
<IgrIcon className="size-small" />
<IgrIcon className="size-medium" />
<IgrIcon className="size-large" />
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
```

```css
.horizontal-border-container {
    display: flex;
    align-items: center;
    width: 400px;
    border: 1px solid gainsboro;
}

.size-small {
    --ig-size: var(--ig-size-small);
}

.size-medium {
    --ig-size: var(--ig-size-medium);
}

.size-large {
    --ig-size: var(--ig-size-large);
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './IconSizing.css';
import { IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const buildIcon =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>';

export default class IconSizing extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
        registerIconFromText("build", buildIcon, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="horizontal-border-container">
                    <IgrIcon className="size-small" name="build" collection="material" />
                    <IgrIcon className="size-medium" name="build" collection="material" />
                    <IgrIcon className="size-large" name="build" collection="material" />
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IconSizing/>);
```

You can also set a custom size for the icon component. The best way to do this is by using the `--size` CSS variable.

```css
igc-icon {
  --size: 32px;
}
```

### Mirrored

Some icons need to look a little different when used in Right-to-Left(RTL) mode. For that reason we provide a `mirrored` attribute that, when set, flips the icon horizontally.

```tsx
<IgrIcon name="search" collection="material" mirrored={true} />
```

## Styling

The icon component can be styled by applying styles directly to the [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html) element;

```css
igc-icon {
  --size: 28px;
  color: var(--ig-primary-500);
}
```

```css
.horizontal-border-container {
    display: flex;
    align-items: center;
    width: 400px;
    border: 1px solid gainsboro;
}

igc-icon {
    --size: 48px;
    color: var(--ig-primary-500);
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './IconStyling.css';
import { IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const searchIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';

export default class IconStyling extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
        registerIconFromText("search", searchIcon, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="horizontal-border-container">
                    <IgrIcon name="search" collection="material" />                    
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IconStyling/>);
```

## API References

- [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html)
- [`registerIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html#registerIcon)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
