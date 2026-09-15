---
title: React Button Group Component | Ignite UI for React
_description: Get started with the React Button Group Component - series of React Toggle Buttons, exposing features such as layout and selection.
_keywords: React, UI controls, web widgets, UI widgets, React Button Group Components, Infragistics
mentionedTypes: ["ToggleButton", "ButtonGroup"]
_license: MIT
_tocName: Button Group
---

# React Button Group Overview

The React Button Group component is used to organize [`IgrToggleButton`](mcp:get_api_reference?platform=react&component=IgrToggleButton)'s into styled button groups with horizontal/vertical alignment, single/multiple selection and toggling.

## React Button Example

```css
.container.sample {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
}

igc-button-group {
    display: block;
    width: 280px;
    max-width: 100%;
}

igc-ripple {
    --color: gray;
}

.album {
    margin-top: 8px;
    width: 280px;
    max-width: 100%;
}

.album-title {
    display: inline-block;
    margin-bottom: 8px;
    color: #1f89d4;
}

.album-photos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4px;
}

.album-photos img {
    width: 100%;
    object-fit: cover;
    display: block;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
    IgrButtonGroup,
    IgrRipple,
    IgrToggleButton,
  } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';
import './ButtonGroupOverview.css';
import './index.css';


const albums = {
    device: {
        title: 'Trip around the world',
        photos: [
            'https://picsum.photos/id/1015/300/220',
            'https://picsum.photos/id/1016/300/220',
            'https://picsum.photos/id/1018/300/220',
            'https://picsum.photos/id/1019/300/220',
        ],
    },
    cloud: {
        title: 'Trip around the world',
        photos: [
            'https://picsum.photos/id/1036/300/220',
            'https://picsum.photos/id/1051/300/220',
            'https://picsum.photos/id/1062/300/220',
            'https://picsum.photos/id/1067/300/220',
        ],
    },
};

export default function ButtonGroupOverview() {
    const [source, setSource] = useState<'device' | 'cloud'>('cloud');
    const album = albums[source];

    return (
        <div className="container sample">
            <IgrButtonGroup
                selection="single-required"
                onSelect={(e: CustomEvent<string | undefined>) => {
                    if (e.detail === 'device' || e.detail === 'cloud') {
                        setSource(e.detail);
                    }
                }}
            >
                <IgrToggleButton value="device" selected={source === 'device'}>
                    Device
                    <IgrRipple />
                </IgrToggleButton>
                <IgrToggleButton value="cloud" selected={source === 'cloud'}>
                    Cloud
                    <IgrRipple />
                </IgrToggleButton>
            </IgrButtonGroup>

            <div className="album">
                <span className="album-title">{album.title}</span>
                <div className="album-photos">
                    {album.photos.map((photo) => (
                        <img key={photo} src={photo} alt={album.title} />
                    ))}
                </div>
            </div>
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

You will then need to import the [`IgrButtonGroup`](mcp:get_api_reference?platform=react&component=IgrButtonGroup) and its necessary CSS, like so:

```tsx
import { IgrButtonGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

For a complete introduction to the Ignite UI for React, read the [**Getting Started**](../general-getting-started.md) topic.

Now that you have the Ignite UI for React Button Group imported, you can start with a basic configuration of the [`IgrButtonGroup`](mcp:get_api_reference?platform=react&component=IgrButtonGroup) and its buttons.

Use the [`IgrButtonGroup`](mcp:get_api_reference?platform=react&component=IgrButtonGroup) selector to wrap your [`IgrToggleButton`](mcp:get_api_reference?platform=react&component=IgrToggleButton)s and display them into a button group. If you want a button to be selected by default, use the [`selected`](mcp:get_api_reference?platform=react&component=IgrToggleButton&member=selected) attribute:

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

Use the [`alignment`](mcp:get_api_reference?platform=react&component=IgrButtonGroup&member=alignment) property to set the orientation of the buttons in the button group.

```css
igc-ripple {
    --color: gray;
}

.button-group-alignment {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 60px;
    padding: 24px;
}

.button-group-alignment-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
}

.button-group-alignment-item igc-button-group {
    width: 240px;
}

.button-group-alignment-item:first-child igc-button-group {
    width: 320px;
}

.button-group-alignment-item span {
    width: 100%;
    text-align: center;
    color: #556c86;
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: 13px;
    font-weight: 400;
    font-style: normal;
    line-height: 20px;
    letter-spacing: 0.3px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrButtonGroup, IgrRipple, IgrToggleButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';
import './ButtonGroupAlignment.css';
import './index.css';

const cities = ['Sofia', 'London', 'New York'];

const alignments: Array<'horizontal' | 'vertical'> = ['horizontal', 'vertical'];

export default function ButtonGroupAlignment(): JSX.Element {
    return (
        <div className="button-group-alignment">
            {alignments.map((alignment) => (
                <div className="button-group-alignment-item" key={alignment}>
                    <span>{alignment.charAt(0).toUpperCase() + alignment.slice(1)}</span>
                    <IgrButtonGroup alignment={alignment}>
                        {cities.map((city) => (
                            <IgrToggleButton
                                key={city}
                                value={city.toLowerCase()}
                            >
                                {city}
                                <IgrRipple />
                            </IgrToggleButton>
                        ))}
                    </IgrButtonGroup>
                </div>
            ))}
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupAlignment />);
```

### Selection

In order to configure the Ignite UI for React [`IgrButtonGroup`](mcp:get_api_reference?platform=react&component=IgrButtonGroup) selection, you could use its [`selection`](mcp:get_api_reference?platform=react&component=IgrButtonGroup&member=selection) property. This property accepts the following three modes:

- **single** - default selection mode of the button group. A single button can be selected/deselected by the user.
- **single-required** - mimics a radio group behavior. Only one button can be selected and once initial selection is made, deselection is not possible through user interaction.
- **multiple** - multiple buttons in the group can be selected and deselected.

The sample below demonstrates the exposed [`IgrButtonGroup`](mcp:get_api_reference?platform=react&component=IgrButtonGroup) selection modes:

```css
.selection-samples {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    padding-left: 32px;
}

.selection-sample {
    display: flex;
    align-items: center;
    gap: 30px;
}

.selection-sample > span {
    width: 120px;
    text-align: right;
    color: #556c86;
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: 13px;
    font-weight: 400;
    font-style: normal;
    line-height: 20px;
    letter-spacing: 0.3px;
}

.selection-sample igc-button-group {
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

    return (
        <div className="container sample selection-samples">
            {(['single', 'single-required', 'multiple'] as const).map((selection) => (
                <div className="selection-sample" key={selection}>
                    <span>{selection === 'single-required' ? 'Single-Required' : selection.charAt(0).toUpperCase() + selection.slice(1)}</span>
                    <IgrButtonGroup selection={selection}>
                        <IgrToggleButton value="bold" selected={selection === 'single-required' || selection === 'multiple'}>
                            <IgrIcon name="bold" collection="material" />
                            <IgrRipple />
                        </IgrToggleButton>
                        <IgrToggleButton value="italic" selected={selection === 'multiple'}>
                            <IgrIcon name="italic" collection="material" />
                            <IgrRipple />
                        </IgrToggleButton>
                        <IgrToggleButton value="underlined">
                            <IgrIcon name="underlined" collection="material" />
                            <IgrRipple />
                        </IgrToggleButton>
                    </IgrButtonGroup>
                </div>
            ))}
      </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupSelectionSample/>);
```

A [`IgrToggleButton`](mcp:get_api_reference?platform=react&component=IgrToggleButton) could be marked as selected via its [`selected`](mcp:get_api_reference?platform=react&component=IgrToggleButton&member=selected) attribute or through the [`IgrButtonGroup`](mcp:get_api_reference?platform=react&component=IgrButtonGroup) [`selectedItems`](mcp:get_api_reference?platform=react&component=IgrButtonGroup&member=selectedItems) attribute:

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
> Setting [`IgrToggleButton`](mcp:get_api_reference?platform=react&component=IgrToggleButton) [`value`](mcp:get_api_reference?platform=react&component=IgrToggleButton&member=value) attribute is mandatory for using the [`selectedItems`](mcp:get_api_reference?platform=react&component=IgrButtonGroup&member=selectedItems) property of the [`IgrButtonGroup`](mcp:get_api_reference?platform=react&component=IgrButtonGroup).

### Size

The `--ig-size` CSS custom property can be used to control the size of the button group.

```css
igc-ripple {
    --color: gray;
}

.button-group-size {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 32px;
    padding: 13px;
    padding-left: 3rem;
}

.button-group-size-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 32px;
}

.button-group-size-item span {
    width: 52px;
    text-align: right;
    color: #556c86;
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: 13px;
    font-weight: 400;
    font-style: normal;
    line-height: 20px;
    letter-spacing: 0.3px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrButtonGroup, IgrRipple, IgrToggleButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';
import './ButtonGroupSize.css';
import './index.css';

const cities = ['Sofia', 'London', 'New York'];

const sizes = ['small', 'medium', 'large'];

export default function ButtonGroupSize(): JSX.Element {
    return (
        <div className="button-group-size">
            {sizes.map((size) => (
                <div className="button-group-size-item" key={size}>
                    <span>{size.charAt(0).toUpperCase() + size.slice(1)}</span>
                    <IgrButtonGroup
                        style={{ '--ig-size': `var(--ig-size-${size})` } as React.CSSProperties}
                    >
                        {cities.map((city) => (
                            <IgrToggleButton
                                key={city}
                                value={city.toLowerCase()}
                            >
                                {city}
                                <IgrRipple />
                            </IgrToggleButton>
                        ))}
                    </IgrButtonGroup>
                </div>
            ))}
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupSize />);
```

## Styling

The [`IgrButtonGroup`](mcp:get_api_reference?platform=react&component=IgrButtonGroup) component exposes `group` CSS part that allows us to style the button group container.
Also, the [`IgrToggleButton`](mcp:get_api_reference?platform=react&component=IgrToggleButton)s provide `toggle` CSS part that could be used to style the button element.

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
igc-ripple {
    --color: gray;
}

.button-group-styling {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 7rem;
}

.button-group-styling igc-button-group {
    width: 420px;
    border: 2px solid #4da3e8;
    border-radius: 4px;
    overflow: hidden;
}

.button-group-styling igc-toggle-button::part(toggle) {
    color: #4a5a66;
    background: #cfe8fb;
    border-color: #4da3e8;
}

.button-group-styling igc-toggle-button::part(toggle):hover {
    background: #b3daf8;
}

.button-group-styling igc-toggle-button[selected]::part(toggle) {
    color: #2f4d6a;
    background: #6db3ea;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrButtonGroup, IgrRipple, IgrToggleButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';
import './ButtonGroupStyling.css';
import './index.css';

const layouts = ['Left', 'Center', 'Right'];

export default function ButtonGroupStyling(): JSX.Element {
    return (
        <div className="button-group-styling">
            <IgrButtonGroup>
                {layouts.map((layout) => (
                    <IgrToggleButton
                        key={layout}
                        value={layout.toLowerCase()}
                        selected={layout === 'Left'}
                    >
                        {layout}
                        <IgrRipple />
                    </IgrToggleButton>
                ))}
            </IgrButtonGroup>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupStyling />);
```

## API Reference

- [`IgrButtonGroup`](mcp:get_api_reference?platform=react&component=IgrButtonGroup)
- [`IgrToggleButton`](mcp:get_api_reference?platform=react&component=IgrToggleButton)
- [`IgrRipple`](mcp:get_api_reference?platform=react&component=IgrRipple)
- [`IgrIcon`](mcp:get_api_reference?platform=react&component=IgrIcon)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
