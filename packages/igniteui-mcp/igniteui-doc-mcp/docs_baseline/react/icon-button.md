---
title: React Icon Button Component
_description: Developers can utilize and use various icons interchangeably as buttons with custom colors and more with Ignite UI for React Icon Button component.
_keywords: Ignite UI for React, UI controls, React widgets, web widgets, UI widgets, React, Native React Components Suite, Native React Controls, Native React Components Library, React Icon Button components, React Icon Button controls
_license: MIT
mentionedTypes: ["IconButton", "ButtonBase", "Button", "Icon"]
_tocName: Icon Button
---

# React Icon Button Overview

The Ignite UI for React Icon Button component allows developers to use registered icons as buttons in their application. It carries all features of the [icon](../layouts/icon.md) component but adds features from the [button](button.md) component as well.

## React Icon Button Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.size-small {
    margin: 10px;
    --ig-size: var(--ig-size-small);
}

.size-medium {
    margin: 10px;
    --ig-size: var(--ig-size-medium);
}

.size-large {
    margin: 10px;
    --ig-size: var(--ig-size-large);
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrIconButton, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const iconText = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/></svg>';

export default class IconButtonSize extends React.Component<any, any> {

    public smallIcon: IgrIconButton;
    public mediumIcon: IgrIconButton;
    public largeIcon: IgrIconButton;

    constructor(props: any) {
        super(props); 
        registerIconFromText("thumb-up", iconText, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <IgrIconButton className="size-small"
                        name="thumb-up"
                        collection="material"
                        variant="contained">
                    </IgrIconButton>
                    <IgrIconButton className="size-medium"
                        name="thumb-up"
                        collection="material"
                        variant="contained">
                    </IgrIconButton>
                    <IgrIconButton className="size-large"
                        name="thumb-up"
                        collection="material"
                        variant="contained">
                    </IgrIconButton>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IconButtonSize/>);
```

<div class="divider"></div>

## Usage

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrIconButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igriconbutton.html), its necessary CSS, and register its module, like so:

```tsx
import { IgrIconButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

The simplest way to start using the [`IgrIconButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igriconbutton.html) is as follows:

```tsx
<IgrIconButton name="thumb-up" collection="material"></IgrIconButton>
```

## Examples

### Variant

Similar to the regular button components, the icon button supports several variants - `flat` (default), `contained`, and `outlined`; To change the icon button type set the `variant` attribute of the icon button.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrIconButton, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const iconText = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/></svg>';

export default class IconButtonVariant extends React.Component<any, any> {

    public icon1: IgrIconButton;
    public icon2: IgrIconButton;
    public icon3: IgrIconButton;

    constructor(props: any) {
        super(props); 
        registerIconFromText("thumb-up", iconText, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <IgrIconButton style={{margin: "10px"}}
                        name="thumb-up" 
                        collection="material"
                        variant="flat">
                    </IgrIconButton>
                    <IgrIconButton style={{margin: "10px"}}
                        name="thumb-up" 
                        collection="material" 
                        variant="contained">
                    </IgrIconButton>
                    <IgrIconButton style={{margin: "10px"}}
                        name="thumb-up" 
                        collection="material" 
                        variant="outlined">
                    </IgrIconButton>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IconButtonVariant/>);
```

```tsx
<IgrIconButton name="search" variant="contained"></IgrIconButton>
```

### Size

The size of the button can be changed by utilizing the `--ig-size` CSS variable to any of the three supported sizes: `--ig-size-small`, `--ig-size-medium`, `--ig-size-large`(default).

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.size-small {
    margin: 10px;
    --ig-size: var(--ig-size-small);
}

.size-medium {
    margin: 10px;
    --ig-size: var(--ig-size-medium);
}

.size-large {
    margin: 10px;
    --ig-size: var(--ig-size-large);
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrIconButton, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const iconText = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/></svg>';

export default class IconButtonSize extends React.Component<any, any> {

    public smallIcon: IgrIconButton;
    public mediumIcon: IgrIconButton;
    public largeIcon: IgrIconButton;

    constructor(props: any) {
        super(props); 
        registerIconFromText("thumb-up", iconText, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <IgrIconButton className="size-small"
                        name="thumb-up"
                        collection="material"
                        variant="contained">
                    </IgrIconButton>
                    <IgrIconButton className="size-medium"
                        name="thumb-up"
                        collection="material"
                        variant="contained">
                    </IgrIconButton>
                    <IgrIconButton className="size-large"
                        name="thumb-up"
                        collection="material"
                        variant="contained">
                    </IgrIconButton>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IconButtonSize/>);
```

```tsx
<IgrIconButton className="size-medium" name="thumb-up"></IgrIconButton>
```

```css
.size-medium {
    --ig-size: var(--ig-size-medium);
}
```

### Type

The icon button component will change its internal structure from `<button>` to an `<a>` type element when the `href` attribute is set. In that case the icon button can be thought of as a regular link. Setting the `href` attribute will allow you to also set the `rel`, `target`, and `download` attributes of the icon button.

```tsx
<IgrIconButton name="thumb-up" collection="material" href="https://duckduckgo.com" target="_blank">
</IgrIconButton>
```

### Mirrored

Some icons need to look a little different when used in Right-to-Left(RTL) mode. For that reason we provide a `mirrored` attribute that, when set, flips the icon button horizontally.

```tsx
<IgrIconButton name="thumb-up" mirrored={true}></IgrIconButton>
```

## Styling

The [`IgrIconButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igriconbutton.html) component exposes two CSS parts - `base` and `icon` that allow you to style the wrapping element (`<button>` or `<a>`) and the wrapped `<igc-icon>` element.

```css
igc-icon-button[variant="contained"]:not([disabled])::part(base) {
  padding: 12px;
  background-color: var(--ig-success-500);
}

igc-icon-button::part(icon) {
  --size: 22px;
  color: var(--ig-success-500-contrast);
}
```

```css
igc-icon-button[variant=contained]:not([disabled])::part(base) {
    padding: 12px;
    color: olive;
    background-color: lightgray;
    --ig-size: var(--ig-size-small);
  }
  
igc-icon-button::part(icon) {
  --size: 32px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrIconButton, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import "./IconButtonStyling.css";

const iconText = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/></svg>';

export default class IconButtonStyling extends React.Component<any, any> {

    public icon: IgrIconButton;

    constructor(props: any) {
        super(props); 
        registerIconFromText("thumb-up", iconText, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrIconButton style={{margin: "10px"}}
                    name="thumb-up" 
                    collection="material"
                    variant="contained">
                </IgrIconButton>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IconButtonStyling/>);
```

## API References

- [`IgrButtonBase`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbuttonbase.html)
- [`IgrButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbutton.html)
- [`IgrIconButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igriconbutton.html)
- [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
