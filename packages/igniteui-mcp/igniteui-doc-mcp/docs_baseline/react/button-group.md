---
title: React Button Group Component | Ignite UI for React
_description: Get started with the React Button Group Component - series of React Toggle Buttons, exposing features such as layout and selection.
_keywords: React, UI controls, web widgets, UI widgets, React Button Group Components, Infragistics
mentionedTypes: ["ToggleButton", "ButtonGroup"]
_license: MIT
_tocName: Button Group
---

# React Button Group Overview

The React Button Group component is used to organize [`IgrToggleButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtogglebutton.html)'s into styled button groups with horizontal/vertical alignment, single/multiple selection and toggling.

## React Button Example

```css
igc-button-group {
    max-width: 400px;
}

igc-ripple {
    --color: gray;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {
    IgrButtonGroup,
    IgrIcon,
    IgrRipple,
    IgrToggleButton,
    registerIconFromText,
  } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';
import './ButtonGroupOverview.css';
import './index.css';


const icons = [
    {
        name: 'format_align_left',
        iconText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/></svg>',
    },
    {
        name: 'format_align_center',
        iconText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"/></svg>',
    },
    {
        name: 'format_align_right',
        iconText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"/></svg>',
    },
    {
        name: 'format_align_justify',
        iconText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"/></svg>',
    },
];

export default function ButtonGroupOverview() {
    useEffect(() => {
        icons.forEach((icon) => {
            registerIconFromText(icon.name, icon.iconText, 'material');
        });
    }, [])

    return (
        <div className="container sample">
            <IgrButtonGroup>
                <IgrToggleButton value="left">
                    <IgrIcon name="format_align_left" collection="material" />
                    <IgrRipple/>
                </IgrToggleButton>
                <IgrToggleButton value="center">
                    <IgrIcon name="format_align_center" collection="material"/>
                    <IgrRipple />
                </IgrToggleButton>
                <IgrToggleButton value="right" >
                    <IgrIcon name="format_align_right" collection="material" />
                    <IgrRipple />
                </IgrToggleButton>
                <IgrToggleButton value="justify" selected={true}>
                    <IgrIcon name="format_align_justify" collection="material"/>
                    <IgrRipple/>
                </IgrToggleButton>
            </IgrButtonGroup>
      </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupOverview/>);
```

## Usage

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrButtonGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbuttongroup.html) and its necessary CSS, like so:

```tsx
import { IgrButtonGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

For a complete introduction to the Ignite UI for React, read the [**Getting Started**](../general-getting-started.md) topic.

Now that you have the Ignite UI for React Button Group imported, you can start with a basic configuration of the [`IgrButtonGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbuttongroup.html) and its buttons.

Use the [`IgrButtonGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbuttongroup.html) selector to wrap your [`IgrToggleButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtogglebutton.html)s and display them into a button group. If you want a button to be selected by default, use the [`selected`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtogglebutton.html#selected) attribute:

```tsx
<IgrButtonGroup>
    <IgrToggleButton value="left">
        <IgrIcon name="format_align_left" collection="material"/>
        <IgrRipple/>
    </IgrToggleButton>
    <IgrToggleButton value="center">
        <IgrIcon name="format_align_center" collection="material"/>
        <IgrRipple/>
    </IgrToggleButton>
    <IgrToggleButton value="right">
        <IgrIcon name="format_align_right" collection="material"/>
        <IgrRipple/>
    </IgrToggleButton>
    <IgrToggleButton value="justify" selected={true}>
        <IgrIcon name="format_align_justify" collection="material"/>
        <IgrRipple/>
    </IgrToggleButton>
</IgrButtonGroup>
```

## Examples

### Alignment

Use the [`alignment`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbuttongroup.html#alignment) property to set the orientation of the buttons in the button group.

```css
igc-button-group {
    width: 200px;
}

igc-ripple {
    --color: gray;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    IgrButtonGroup,
    IgrRipple,
    IgrToggleButton,
  } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';
import './ButtonGroupAlignment.css';
import './index.css';


export default function ButtonGroupAlignment() {
    return (
        <div className="container sample">
            <IgrButtonGroup alignment="vertical">
                <IgrToggleButton value="sofia">
                    <span>Sofia</span>
                    <IgrRipple/>
                </IgrToggleButton>
                <IgrToggleButton value="london">
                    <span>London</span>
                    <IgrRipple/>
                </IgrToggleButton>
                <IgrToggleButton value="new york" selected={true}>
                    <span>New York</span>
                    <IgrRipple/>
                </IgrToggleButton>
                <IgrToggleButton value="tokyo" >
                    <span >Tokio</span>
                    <IgrRipple />
                </IgrToggleButton>
            </IgrButtonGroup>
      </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupAlignment/>);
```

### Selection

In order to configure the Ignite UI for React [`IgrButtonGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbuttongroup.html) selection, you could use its [`selection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbuttongroup.html#selection) property. This property accepts the following three modes:

- **single** - default selection mode of the button group. A single button can be selected/deselected by the user.
- **single-required** - mimics a radio group behavior. Only one button can be selected and once initial selection is made, deselection is not possible through user interaction.
- **multiple** - multiple buttons in the group can be selected and deselected.

The sample below demonstrates the exposed [`IgrButtonGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbuttongroup.html) selection modes:

```css
.radio-group-container {
    width: 400px;
    margin-bottom: 1rem;
}

igc-radio-group {
    padding: 0.5rem;
}

igc-button-group {
    width: 200px;
}

igc-ripple {
    --color: gray;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import {
    ButtonGroupSelection,
    IgrButtonGroup,
    IgrIcon,
    IgrRadio,
    IgrRadioChangeEventArgs,
    IgrRadioGroup,
    IgrRipple,
    IgrToggleButton,
    registerIconFromText,
  } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';
import './ButtonGroupSelection.css';
import './index.css';

const icons = [
    {
        name: 'bold',
        iconText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/></svg>',
    },
    {
        name: 'italic',
        iconText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"/></svg>',
    },
    {
        name: 'underlined',
        iconText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"/></svg>',
    },
];

export default function ButtonGroupSelectionSample() {
    useEffect(() => {
        icons.forEach((icon) => {
            registerIconFromText(icon.name, icon.iconText, 'material');
        });
    }, [])

    const buttonGroupRef = useRef<IgrButtonGroup>(null);

    function onRadioChange(e: IgrRadioChangeEventArgs) {
        const value = e.detail.value as ButtonGroupSelection;
        buttonGroupRef.current.selection = value;
    }

    return (
        <div className="container sample">
            <div className="radio-group-container">
                <label>Selection Mode</label>
                <IgrRadioGroup alignment="horizontal">
                    <IgrRadio name="mode" value="single" checked onChange={onRadioChange}>
                        <span>Single</span>
                    </IgrRadio>
                    <IgrRadio name="mode" value="single-required" onChange={onRadioChange}>
                        <span>Single-Required</span>
                    </IgrRadio>
                    <IgrRadio name="mode" value="multiple" onChange={onRadioChange}>
                        <span>Multiple</span>
                    </IgrRadio>
                </IgrRadioGroup>
            </div>
            <IgrButtonGroup ref={buttonGroupRef}>
                <IgrToggleButton value="bold">
                    <IgrIcon name="bold" collection="material" />
                    <IgrRipple />
                </IgrToggleButton>
                <IgrToggleButton value="italic">
                    <IgrIcon name="italic" collection="material" />
                    <IgrRipple />
                </IgrToggleButton>
                <IgrToggleButton value="underlined">
                    <IgrIcon name="underlined" collection="material"/>
                    <IgrRipple/>
                </IgrToggleButton>
            </IgrButtonGroup>
      </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupSelectionSample/>);
```

A [`IgrToggleButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtogglebutton.html) could be marked as selected via its [`selected`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtogglebutton.html#selected) attribute or through the [`IgrButtonGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbuttongroup.html) [`selectedItems`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbuttongroup.html#selectedItems) attribute:

```tsx
<IgrButtonGroup selectedItems={['bold']}>
    <IgrToggleButton value="bold">
        <IgrIcon name="bold" collection="material" />
        <IgrRipple />
    </IgrToggleButton>
    <IgrToggleButton value="italic">
        <IgrIcon name="italic" collection="material" />
        <IgrRipple />
    </IgrToggleButton>
    <IgrToggleButton value="underlined">
        <IgrIcon name="underlined" collection="material" />
        <IgrRipple />
    </IgrToggleButton>
</IgrButtonGroup>
```

> [!Note]
> Setting [`IgrToggleButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtogglebutton.html) [`value`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtogglebutton.html#value) attribute is mandatory for using the [`selectedItems`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbuttongroup.html#selectedItems) property of the [`IgrButtonGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbuttongroup.html).

### Size

The `--ig-size` CSS custom property can be used to control the size of the button group.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
    IgrButtonGroup,
    IgrComponentValueChangedEventArgs,
    IgrToggleButton,
  } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';
import './index.css';

export default function ButtonGroupSize() {
    const [style, setStyle] = useState({ '--ig-size': 'var(--ig-size-large)' } as React.CSSProperties)

    function onSelect(args: IgrComponentValueChangedEventArgs) {
        setStyle({
            '--ig-size': `var(--ig-size-${args.detail})`
        } as React.CSSProperties)
    }

    return (
        <div className="container sample">
            <IgrButtonGroup onSelect={onSelect} style={style}>
                <IgrToggleButton value="small">
                    <span>Small</span>
                </IgrToggleButton>
                <IgrToggleButton value="medium">
                    <span>Medium</span>
                </IgrToggleButton>
                <IgrToggleButton value="large">
                    <span>Large</span>
                </IgrToggleButton>
            </IgrButtonGroup>
      </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupSize/>);
```

## Styling

The [`IgrButtonGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbuttongroup.html) component exposes `group` CSS part that allows us to style the button group container.
Also, the [`IgrToggleButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtogglebutton.html)s provide `toggle` CSS part that could be used to style the button element.

```css
igc-button-group::part(group) {
  background-color: var(--ig-primary-500);
  padding: 8px;
}

igc-toggle-button::part(toggle) {
  color: var(--ig-secondary-300);
}
```

```css
igc-button-group {
    width: 200px;
}

igc-ripple {
    --color: gray;
}

igc-toggle-button::part(toggle) {
    color: #fdfdfd;
    background: #2f4d6a;
}

igc-toggle-button::part(toggle):hover {
    color: #fdfdfd;
    background: #1f3347;
}

igc-toggle-button[disabled]::part(toggle) {
    color: gray;
    background: lightgray;
}

igc-toggle-button[selected]::part(toggle) {
    color: #fdfdfd;
    background: #1f3347;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    IgrButtonGroup,
    IgrRipple,
    IgrToggleButton,
  } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';
import './ButtonGroupStyling.css';
import './index.css';

export default function ButtonGroupStyling() {
    return (
        <div className="container sample">
            <IgrButtonGroup alignment="vertical">
                <IgrToggleButton value="sofia">
                    <span>Sofia</span>
                    <IgrRipple/>
                </IgrToggleButton>
                <IgrToggleButton value="london">
                    <span>London</span>
                    <IgrRipple/>
                </IgrToggleButton>
                <IgrToggleButton value="new york">
                    <span>New York</span>
                    <IgrRipple/>
                </IgrToggleButton>
                <IgrToggleButton value="tokyo" disabled={true}>
                    <span>Tokio</span>
                    <IgrRipple/>
                </IgrToggleButton>
            </IgrButtonGroup>
      </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupStyling/>);
```

## API Reference

- [`IgrButtonGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbuttongroup.html)
- [`IgrToggleButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtogglebutton.html)
- [`IgrRipple`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrripple.html)
- [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
