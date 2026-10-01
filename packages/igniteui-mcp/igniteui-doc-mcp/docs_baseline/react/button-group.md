---
title: "Button Group"
description: The Ignite UI for React Button Group component organizes related toggle buttons and supports horizontal or vertical alignment, single or multiple selection, and toggling.
keywords: "React, UI controls, web widgets, UI widgets, React Button Group Components, Infragistics"
mentionedTypes: ["ToggleButton", "ButtonGroup"]
relatedComponents: [ToggleButton]
license: MIT
last_updated: "2026-07-28"
llms:
    description: "The Ignite UI for React Button Group organizes related toggle buttons into a group with horizontal or vertical alignment, single or multiple selection, and toggling."
_tocName: Button Group
---
# Button Group Component

The React Button Group component is used to organize [`IgrToggleButton`](mcp:get_api_reference?platform=react&component=IgrToggleButton)'s into styled button groups with horizontal/vertical alignment, single/multiple selection and toggling.

## Live Demo

```css
.sbSwitch {
    display: grid;
    place-items: center;
    height: 100vh;
}

.sample-layout {
    display: grid;
    width: 17.5rem;
    gap: 0.5rem;
}

igc-button-group {
    max-width: 17.5rem;
}

.album-title {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.429;
    letter-spacing: 0.0178571em;
    margin-block: 0 0.5rem;
    color: var(--ig-primary-500);
}

.album-photos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.25rem;
}

.album-photos img {
    width: 100%;
    object-fit: cover;
    display: block;
}
```
```tsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
    IgrButtonGroup,
    IgrRipple,
    IgrToggleButton,
  } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
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
        <div className="sample-layout">
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
                <p className="album-title">{album.title}</p>
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

## Anatomy

The React Button Group organizes related Toggle Buttons into a single group with a shared container and individual button items.

**Button Group anatomy:** The Button Group component organizes related Toggle Buttons within a shared container, allowing users to make single or multiple selections.

<style>{`
  .button-group-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .button-group-anatomy .igd-anatomy__image {
    max-width: 520px;
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Container:</strong> Wraps the button's contents.<br />
<strong>2. Icon:</strong> Adds context to the button. Could be left, right, left and right or only icon.<br />
<strong>3. Label:</strong> The textual content that describes the button’s action to the user.</span>

The React Button Group contains Toggle Buttons, and each button can contain an icon and a label.

```text
Button Group
└── Toggle Button
    ├── Icon
    └── Label
```

## Getting Started

To use the React Button Group, follow the [Ignite UI for React Getting Started](../general-getting-started.md) topic for the basic project setup, then register the component for your target platform.

For React using the **igniteui-react** package, install the package:

```cmd
npm install igniteui-react
```

Then import the Button Group wrapper and its theme CSS:

```tsx
import { IgrButtonGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

The simplest way to start using the [`IgrButtonGroup`](mcp:get_api_reference?platform=react&component=IgrButtonGroup) is as follows:

```tsx
<IgrButtonGroup />
```

## Usage

Use the [`IgrButtonGroup`](mcp:get_api_reference?platform=react&component=IgrButtonGroup) to wrap your [`IgrToggleButton`](mcp:get_api_reference?platform=react&component=IgrToggleButton) components. To select a button by default, use the [`Selected`](mcp:get_api_reference?platform=react&component=IgrToggleButton&member=selected) attribute:

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

### Alignment

The Button Group supports horizontal and vertical layouts. Use the [`Alignment`](mcp:get_api_reference?platform=react&component=IgrButtonGroup&member=alignment) property to set the orientation of the buttons in the group.

```css
.sbSwitch {
    display: grid;
    place-items: center;
    height: 100vh;
}

.sample-layout {
    display: flex;
    gap: 2rem;
    align-items: start;
    justify-content: center;
    flex-wrap: wrap;
}

.sample-inner-layout {
    display: grid;
    gap: 0.5rem;
    align-items: start;
}

igc-button-group {
    width: 17.5rem;
}

.sample-layout span {
    color: var(--ig-gray-600);
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.3px;
    margin: 0.5rem;
    text-align: center;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrButtonGroup, IgrRipple, IgrToggleButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './index.css';

const cities = ['Sofia', 'London', 'New York'];

const alignments: Array<'horizontal' | 'vertical'> = ['horizontal', 'vertical'];

export default function ButtonGroupAlignment(): JSX.Element {
    return (
        <div className="sample-layout">
            {alignments.map((alignment) => (
                <div className="sample-inner-layout" key={alignment}>
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
In order to configure the Ignite UI for React Button Group selection, use its platform-specific selection property.

For React, use the [`selection`](mcp:get_api_reference?platform=react&component=IgrButtonGroup&member=selection) property. The available modes are:

- **single** - default selection mode of the button group. A single button can be selected/deselected by the user.
- **single-required** - mimics a radio group behavior. Only one button can be selected and once initial selection is made, deselection is not possible through user interaction.
- **multiple** - multiple buttons in the group can be selected and deselected.

The sample below demonstrates the exposed [`IgrButtonGroup`](mcp:get_api_reference?platform=react&component=IgrButtonGroup) selection modes:

```css
.sbSwitch {
    container-type: inline-size;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: center;
    height: 100vh;
}

.selection-samples {
    display: grid;
    grid-template-columns: auto minmax(11.25rem, 1fr);
    align-items: center;
    gap: 1.5rem 2rem;
    inline-size: 100%;
    max-inline-size: 23.75rem;
    margin-inline: auto;
}

.sample-label {
    color: var(--ig-gray-600);
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.3px;
    text-align: end;
}

igc-button-group {
    inline-size: 100%;
}

@container (width < 22rem) {
    .selection-samples {
        grid-template-columns: minmax(0, 1fr);
        gap: 0.25rem;
    }

    .sample-label {
        text-align: start;
    }

    .sample-label:not(:first-of-type) {
        margin-block-start: 1rem;
    }
}
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
import 'igniteui-webcomponents/themes/light/bootstrap.css';
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
        <div className="selection-samples">
            {(['single', 'single-required', 'multiple'] as const).map((selection) => (
                <React.Fragment key={selection}>
                    <span className="sample-label">{selection === 'single-required' ? 'Single-Required' : selection.charAt(0).toUpperCase() + selection.slice(1)}</span>
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
                </React.Fragment>
            ))}
      </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupSelectionSample/>);
```

A [`IgrToggleButton`](mcp:get_api_reference?platform=react&component=IgrToggleButton) could be marked as selected via its [`Selected`](mcp:get_api_reference?platform=react&component=IgrToggleButton&member=selected) attribute or through the [`IgrButtonGroup`](mcp:get_api_reference?platform=react&component=IgrButtonGroup) [`SelectedItems`](mcp:get_api_reference?platform=react&component=IgrButtonGroup&member=selectedItems) attribute:

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

**Note:** 

Setting the [`IgrToggleButton`](mcp:get_api_reference?platform=react&component=IgrToggleButton) [`Value`](mcp:get_api_reference?platform=react&component=IgrToggleButton&member=value) attribute is mandatory for using the [`SelectedItems`](mcp:get_api_reference?platform=react&component=IgrButtonGroup&member=selectedItems) property of the [`IgrButtonGroup`](mcp:get_api_reference?platform=react&component=IgrButtonGroup).

### States

Each button in the group supports enabled and disabled variants, which can also be selected or not selected. Use the state behavior provided by the contained [`IgrToggleButton`](mcp:get_api_reference?platform=react&component=IgrToggleButton) components.

```css
.sbSwitch {
    container-type: inline-size;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: center;
    height: 100vh;
}

.states-matrix {
    --state-columns: 2;

    display: grid;
    grid-template-columns: auto repeat(var(--state-columns), minmax(7.5rem, 1fr));
    gap: 1rem;
    inline-size: 100%;
    max-inline-size: 32.5rem;
    margin-inline: auto;
}

.states-row {
    display: grid;
    grid-column: 1 / -1;
    grid-template-columns: subgrid;
    align-items: center;
}

.row-label,
.column-label,
.cell-label {
    color: var(--ig-gray-600);
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.3px;
}

.column-label,
.cell-label {
    text-align: center;
}

.cell-label {
    display: none;
}

.state-cell {
    display: grid;
    gap: 0.25rem;
}

@container (width < 24rem) {
    .states-matrix {
        grid-template-columns: minmax(0, 1fr);
    }

    .states-row {
        grid-template-columns: repeat(auto-fit, minmax(8.75rem, 1fr));
        column-gap: 0.5rem;
    }

    header.states-row {
        display: none;
    }

    .row-label {
        grid-column: 1 / -1;
    }

    .cell-label {
        display: block;
        text-align: start;
        margin-block-start: 1rem;
    }
}

/* WARNING START: Demo overrides only. Do not copy to production. */
/* Forced state classes are used here solely to present all component states visually. */
igc-button-group {
    pointer-events: none;
}

igc-toggle-button:not([disabled])[selected]::part(toggle) {
    background: var(--item-active-background);
    border-color: var(--item-active-border-color);
    color: var(--item-selected-text-color);
}
/* WARNING END */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrButtonGroup, IgrRipple, IgrToggleButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './index.css';

const rows: Array<{ label: string; selected: boolean }> = [
    { label: 'Selected / Off', selected: false },
    { label: 'Selected / On', selected: true }
];

export default function ButtonGroupInteractionStates(): JSX.Element {
    return (
        <article className="states-matrix">
            <header className="states-row">
                <span className="row-label" />
                <span className="column-label">Enabled</span>
                <span className="column-label">Disabled</span>
            </header>
            {rows.map((row) => (
                <section className="states-row" key={row.label}>
                    <span className="row-label">{row.label}</span>
                    <div className="state-cell">
                        <span className="cell-label">Enabled</span>
                        <IgrButtonGroup selection="multiple">
                            <IgrToggleButton
                                value="device"
                                selected={row.selected}
                            >
                                Device
                                <IgrRipple />
                            </IgrToggleButton>
                        </IgrButtonGroup>
                    </div>
                    <div className="state-cell">
                        <span className="cell-label">Disabled</span>
                        <IgrButtonGroup selection="multiple">
                            <IgrToggleButton value="cloud" disabled={true} selected={row.selected}>
                                Cloud
                            </IgrToggleButton>
                        </IgrButtonGroup>
                    </div>
                </section>
            ))}
        </article>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupInteractionStates />);
```

### Interaction States

The enabled buttons in the group support idle, hover, and focused interaction states. Use the state behavior provided by the contained [`IgrToggleButton`](mcp:get_api_reference?platform=react&component=IgrToggleButton) components.

```css
.sbSwitch {
    container-type: inline-size;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: center;
    height: 100vh;
}

.states-matrix {
    display: grid;
    grid-template-columns: auto repeat(3, minmax(7.75rem, 1fr));
    gap: 1rem;
    inline-size: 100%;
    max-inline-size: 42.5rem;
    margin-inline: auto;
}

.states-row {
    display: grid;
    grid-column: 1 / -1;
    grid-template-columns: subgrid;
    align-items: center;
}

.row-label,
.column-label,
.cell-label {
    color: var(--ig-gray-600);
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.3px;
}

.column-label,
.cell-label {
    text-align: center;
}

.cell-label {
    display: none;
}

.state-cell {
    display: grid;
    gap: 0.25rem;
}

igc-icon {
    --ig-icon-size: 1rem;
}

@container (width < 34rem) {
    .states-matrix {
        grid-template-columns: minmax(0, 1fr);
    }

    .states-row {
        grid-template-columns: repeat(auto-fit, minmax(9.375rem, 1fr));
    }

    header.states-row {
        display: none;
    }

    .row-label {
        grid-column: 1 / -1;
    }

    .cell-label {
        display: block;
        text-align: start;
        margin-block-start: 1rem;
    }

    .state-cell {
        margin-inline-end: 0.5rem;
    }
}

/* WARNING START: Demo overrides only. Do not copy to production. */
/* Forced state classes are used here solely to present all component states visually. */
igc-button-group {
    pointer-events: none;
}

igc-toggle-button[selected]::part(toggle) {
    background: var(--item-active-background);
    border-color: var(--item-active-border-color);
    color: var(--item-hover-text-color);
}

igc-toggle-button.state-hover:not([selected])::part(toggle) {
    background: var(--item-hover-background);
    border-color: var(--item-hover-border-color);
    color: var(--item-hover-text-color);
}

igc-toggle-button.state-focused:not([selected])::part(toggle) {
    background: var(--item-focused-hover-background);
    border-color: var(--item-focused-hover-border-color);
    color: var(--item-focused-hover-text-color);
}

igc-toggle-button.state-hover[selected]::part(toggle) {
    background: var(--item-selected-active-background);
    border-color: var(--item-selected-active-border-color);
    color: var(--item-selected-hover-text-color);
}

igc-toggle-button.state-focused[selected]::part(toggle) {
    background: var(--item-selected-active-background);
    border-color: var(--item-selected-active-border-color);
    color: var(--item-focused-hover-text-color);
}
/* WARNING END */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    IgrButtonGroup,
    IgrIcon,
    IgrRipple,
    IgrToggleButton,
    registerIconFromText
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './index.css';

const rows: Array<{ label: string; selected: boolean }> = [
    { label: 'Selected / Off', selected: false },
    { label: 'Selected / On', selected: true }
];

const states = ['idle', 'hover', 'focused'];

registerIconFromText(
    'notifications',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22Zm7-6v-5a7 7 0 0 0-5.5-6.84V3a1.5 1.5 0 0 0-3 0v1.16A7 7 0 0 0 5 11v5l-2 2v1h18v-1l-2-2Z"/></svg>',
    'material'
);

function StateButton({ selected, state }: { selected: boolean; state: string }): JSX.Element {
    return (
        <IgrToggleButton className={`state-${state}`} selected={selected} value="button">
            <IgrIcon name="notifications" collection="material" />
            Button
            <IgrIcon name="notifications" collection="material" />
            <IgrRipple />
        </IgrToggleButton>
    );
}

export default function ButtonGroupStates(): JSX.Element {
    return (
        <article className="states-matrix">
            <header className="states-row">
                <span className="row-label" />
                {states.map((state) => (
                    <span className="column-label" key={state}>
                        {state.charAt(0).toUpperCase() + state.slice(1)}
                    </span>
                ))}
            </header>
            {rows.map((row) => (
                <section className="states-row" key={row.label}>
                    <span className="row-label">{row.label}</span>
                    {states.map((state) => (
                        <div className="state-cell" key={state}>
                            <span className="cell-label">{state.charAt(0).toUpperCase() + state.slice(1)}</span>
                            <IgrButtonGroup>
                                <StateButton selected={row.selected} state={state} />
                            </IgrButtonGroup>
                        </div>
                    ))}
                </section>
            ))}
        </article>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupStates />);
```

### Layout Template

Each button can use text, an icon, or both. Keep the content style consistent across the group, and use the button content APIs to control the icon and label shown in each button.

```css
.sbSwitch {
	display: grid;
	place-items: center;
	height: 100vh;
}

.sample-layout {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 80px;
    min-height: 5.5rem;
}

igc-button-group {
    display: inline-block;
    max-width: 400px;
}

.sample-layout igc-toggle-button {
    min-width: 100px;
}

.sample-layout igc-icon {
    --ig-size: 20px;
    --igc-icon-size: 20px;
}
```
```tsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { IgrButtonGroup, IgrIcon, IgrRipple, IgrToggleButton, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './index.css';

const alignLeftIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/></svg>';
const alignCenterIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"/></svg>';
const alignRightIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"/></svg>';

const layouts = [
    { value: 'left', label: 'Left', icon: 'align-left' },
    { value: 'center', label: 'Center', icon: 'align-center' },
    { value: 'right', label: 'Right', icon: 'align-right' }
];

export default function ButtonGroupLayout(): JSX.Element {
    useEffect(() => {
        registerIconFromText('align-left', alignLeftIcon, 'material');
        registerIconFromText('align-center', alignCenterIcon, 'material');
        registerIconFromText('align-right', alignRightIcon, 'material');
    }, []);

    return (
        <div className="sample-layout">
            <IgrButtonGroup>
                {layouts.map((layout) => (
                    <IgrToggleButton key={layout.value} value={layout.value}>
                        {layout.label}
                        <IgrRipple />
                    </IgrToggleButton>
                ))}
            </IgrButtonGroup>
            <IgrButtonGroup>
                {layouts.map((layout) => (
                    <IgrToggleButton key={layout.value} value={layout.value}>
                        <IgrIcon name={layout.icon} collection="material" />
                        <IgrRipple />
                    </IgrToggleButton>
                ))}
            </IgrButtonGroup>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupLayout />);
```

### Custom Toggle Buttons

For React, use individual Toggle Buttons to create a custom Button Group. Each button can define its own value, icon, label, selected state, and disabled state.

Import the Button Group, Toggle Button, and Icon components:

```tsx
import { IgrButtonGroup, IgrToggleButton, IgrIcon } from 'igniteui-react';
```

Then define the custom buttons in JSX:

```tsx
<IgrButtonGroup>
    <IgrToggleButton value="align-left">
        <IgrIcon name="format_align_left" collection="material" />
    </IgrToggleButton>
    <IgrToggleButton value="align-center" selected={true}>
        <IgrIcon name="format_align_center" collection="material" />
    </IgrToggleButton>
    <IgrToggleButton value="align-right" disabled={true}>
        <IgrIcon name="format_align_right" collection="material" />
    </IgrToggleButton>
</IgrButtonGroup>
```

```css
.sbSwitch {
  display: grid;
  place-items: center;
  height: 100vh;
}

igc-button-group {
  max-width: 18.75rem;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  IgrButtonGroup,
  IgrIcon,
  IgrToggleButton,
  registerIconFromText,
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './index.css';

const icons = [
  ['border_top', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 3h18v2H3V3zm0 4h2v14H3V7zm4 0h2v14H7V7zm4 0h2v14h-2V7zm4 0h2v14h-2V7zm4 0h2v14h-2V7z"/></svg>'],
  ['border_right', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 3h2v18h-2V3zM3 3h2v2H3V3zm4 0h2v2H7V3zm4 0h2v2h-2V3zm4 0h2v2h-2V3zM3 7h2v2H3V7zm4 0h2v2H7V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7zM3 11h2v2H3v-2zm4 0h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM3 15h2v2H3v-2zm4 0h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM3 19h2v2H3v-2zm4 0h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/></svg>'],
  ['border_bottom', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 19h18v2H3v-2zM3 3h2v14H3V3zm4 0h2v14H7V3zm4 0h2v14h-2V3zm4 0h2v14h-2V3zm4 0h2v14h-2V3z"/></svg>'],
  ['border_left', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 3h2v18H3V3zM7 3h2v2H7V3zm4 0h2v2h-2V3zm4 0h2v2h-2V3zm4 0h2v2h-2V3zM7 7h2v2H7V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7zM7 11h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM7 15h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM7 19h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/></svg>'],
];

icons.forEach(([name, text]) => registerIconFromText(name, text, 'material'));

export default function ButtonGroupCustomToggle() {
  return (
    <IgrButtonGroup selectionMode="multi">
      <IgrToggleButton selected={true}><IgrIcon name="border_top" collection="material" /></IgrToggleButton>
      <IgrToggleButton><IgrIcon name="border_right" collection="material" /></IgrToggleButton>
      <IgrToggleButton><IgrIcon name="border_bottom" collection="material" /></IgrToggleButton>
      <IgrToggleButton><IgrIcon name="border_left" collection="material" /></IgrToggleButton>
    </IgrButtonGroup>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupCustomToggle />);
```

### Size
The `--ig-size` CSS custom property can be used to control the size of the button group.

```tsx
<IgrButtonGroup style={{ '--ig-size': 'var(--ig-size-small)' } as React.CSSProperties}>
</IgrButtonGroup>
```

```css
.sbSwitch {
    container-type: inline-size;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    place-items: center;
    height: 100vh;
}

.button-group-size {
    display: grid;
    grid-template-columns: auto minmax(15rem, 1fr);
    align-items: center;
    gap: 1.5rem 2rem;
    inline-size: 100%;
    max-inline-size: 30rem;
    margin-inline: auto;
}

.sample-label {
    color: var(--ig-gray-600);
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.3px;
    text-align: end;
}

igc-button-group:nth-of-type(1n) {
    --ig-size: var(--ig-size-small);
}

igc-button-group:nth-of-type(2n) {
    --ig-size: var(--ig-size-medium);
}

igc-button-group:nth-of-type(3n) {
    --ig-size: var(--ig-size-large);
}

@container (width < 22rem) {
    .button-group-size {
        grid-template-columns: minmax(0, 1fr);
        gap: 0.25rem;
    }

    .sample-label {
        text-align: start;
    }

    .sample-label:not(:first-of-type) {
        margin-block-start: 1rem;
    }
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrButtonGroup, IgrRipple, IgrToggleButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './index.css';

const cities = ['Sofia', 'London', 'New York'];

const sizes = ['small', 'medium', 'large'];

export default function ButtonGroupSize(): JSX.Element {
    return (
        <article className="button-group-size">
            {sizes.map((size) => (
                <React.Fragment key={size}>
                    <span className="sample-label">{size.charAt(0).toUpperCase() + size.slice(1)}</span>
                    <IgrButtonGroup>
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
                </React.Fragment>
            ))}
        </article>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupSize />);
```

### Do/Don't

**When to use:** Use a Button Group to organize related toggle actions where users may select one or more options.

**When not to use:** Do not use a Button Group for unrelated actions or for a single toggle action; use a standalone [`IgrToggleButton`](mcp:get_api_reference?platform=react&component=IgrToggleButton) instead.

<div class="table-responsive">
    <table class="table" style="width: 100%; table-layout: fixed; border-collapse: collapse; border: 1px solid #d3d3d3;">
        <thead>
            <tr>
                <th style="width: 50%; background-color: #d3d3d3; text-align: left; padding: 16px 20px; font-size: 18px; font-weight: 500;">Do</th>
                <th style="width: 50%; background-color: #d3d3d3; text-align: left; padding: 16px 20px; font-size: 18px; font-weight: 500;">Don't</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="border: 1px solid #d3d3d3; padding: 16px 20px;"></td>
                <td style="border: 1px solid #d3d3d3; padding: 16px 20px;"></td>
            </tr>
            <tr>
                <td style="border: 1px solid #d3d3d3; padding: 16px 20px;"></td>
                <td style="border: 1px solid #d3d3d3; padding: 16px 20px;"></td>
            </tr>
            <tr>
                <td style="border: 1px solid #d3d3d3; padding: 16px 20px;"></td>
                <td style="border: 1px solid #d3d3d3; padding: 16px 20px;"></td>
            </tr>
        </tbody>
    </table>
</div>

## Properties

The React Button Group exposes the following properties.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`alignment`](mcp:get_api_reference?platform=react&component=IgrButtonGroup&member=alignment) | `ButtonGroupAlignment` | `horizontal` | Sets the orientation of the buttons in the group. |
| [`selection`](mcp:get_api_reference?platform=react&component=IgrButtonGroup&member=selection) | `ButtonGroupSelection` | `single` | Sets the selection mode for the buttons in the group. |
| [`selectedItems`](mcp:get_api_reference?platform=react&component=IgrButtonGroup&member=selectedItems) | `string[]` | `[]` | Gets or sets the values of the selected buttons. |

## Styling

The React Button Group uses CSS parts to style the group container and the individual Toggle Buttons. Use the `group` part on the Button Group and the `toggle` part on each Toggle Button to customize their appearance.

### Sass Theming

Use the Ignite UI for React theme system to style the Button Group consistently with the rest of your application.

Import the theming functions before creating a custom Button Group theme:

```scss
@use "igniteui-theming" as *;
```

Create a theme with `button-group-theme` and include it in the global stylesheet. The `$item-background` parameter is used as the base for the related interaction-state colors. Override additional parameters when you need more control over the Button Group appearance:

```scss
$custom-button-group: button-group-theme(
    $item-background: #57a5cd,
);

igc-button-group {
    @include button-group($custom-button-group);
}
```

The same theme applies to Web Components directly and to the underlying `igc-button-group` element rendered by the React and Blazor wrappers.

### CSS Variables

Use the following CSS variables to customize the Button Group item colors and interaction states. Set them on the Button Group element to apply the styles to its contained Toggle Buttons:

| Primary property | Dependent property | Description |
| --- | --- | --- |
| `$item-background` | `$item-hover-background` | Hover background for items. |
|  | `$item-selected-background` | Selected item background. |
|  | `$item-focused-background` | Focused item background. |
|  | `$disabled-background-color` | Disabled item background. |
|  | `$item-border-color` | Default item border color. |
|  | `$item-text-color` | Default item text color. |
|  | `$idle-shadow-color` | Idle item shadow color. |
| `$item-hover-background` | `$item-selected-hover-background` | Selected item hover background. |
|  | `$item-focused-hover-background` | Focused hover background. |
|  | `$item-hover-text-color` | Hovered item text color. |
|  | `$item-hover-icon-color` | Hovered item icon color. |
| `$item-selected-background` | `$item-selected-focus-background` | Selected item focus background. |
|  | `$disabled-selected-background` | Disabled selected background. |
|  | `$item-selected-text-color` | Selected item text color. |
|  | `$item-selected-icon-color` | Selected item icon color. |
|  | `$item-selected-hover-text-color` | Selected hovered item text color. |
|  | `$item-selected-hover-icon-color` | Selected hovered item icon color. |
| `$item-border-color` | `$item-hover-border-color` | Hovered item border color. |
|  | `$item-focused-border-color` | Focused item border color. |
|  | `$item-selected-border-color` | Selected item border color. |
|  | `$item-selected-hover-border-color` | Selected hovered item border color. |
|  | `$item-disabled-border` | Disabled item border color. |
|  | `$disabled-selected-border-color` | Disabled selected border color. |

### Style Parts

Use the following CSS parts to target the Button Group and its contained Toggle Buttons:

| Part | Component | What it styles |
| --- | --- | --- |
| `group` | [`IgrButtonGroup`](mcp:get_api_reference?platform=react&component=IgrButtonGroup) | The Button Group container. |
| `toggle` | [`IgrToggleButton`](mcp:get_api_reference?platform=react&component=IgrToggleButton) | An individual Toggle Button. |

### Custom Styling

The following example changes the group background and padding, and changes the text color of the contained Toggle Buttons:

| Selector | Declaration | Effect |
| --- | --- | --- |
| `igc-button-group::part(group)` | `background-color`, `padding` | Changes the Button Group container background and spacing. |
| `igc-toggle-button::part(toggle)` | `color` | Changes the text color of an individual Toggle Button. |

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
    display: inline-block;
    width: 100%;
    max-width: 25rem;
}

.sbSwitch {
    display: grid;
    place-items: center;
    height: 100vh;

    --ig-button-group-border-radius: 4px;
    --ig-button-group-item-text-color: #4a5a66;
    --ig-button-group-item-background: #cfe8fb;
    --ig-button-group-item-border-color: #4da3e8;
    --ig-button-group-item-hover-text-color: #4a5a66;
    --ig-button-group-item-hover-background: #b3daf8;
    --ig-button-group-item-hover-border-color: #4da3e8;
    --ig-button-group-item-selected-text-color: #2f4d6a;
    --ig-button-group-item-selected-background: #6db3ea;
    --ig-button-group-item-selected-border-color: #4da3e8;
    --ig-button-group-item-selected-hover-text-color: #2f4d6a;
    --ig-button-group-item-selected-hover-background: #6db3ea;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrButtonGroup, IgrRipple, IgrToggleButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './index.css';

const layouts = ['Left', 'Center', 'Right'];

export default function ButtonGroupStyling(): JSX.Element {
    return (
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
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupStyling />);
```

### Styling with Tailwind

You can style the React Button Group with the custom Tailwind utility classes from `igniteui-theming`. Make sure to [set up Tailwind](/themes/tailwind) first, then import the Ignite UI utilities in your global stylesheet:

```css
@import "tailwindcss";
@import "igniteui-theming/tailwind/utilities/material.css";
```

```jsx
<IgrButtonGroup className="!light-button-group ![--item-background:#7B9E89]"></IgrButtonGroup>
```

The exclamation mark (`!`) gives the Tailwind utility precedence over the Button Group's default theme styles.

```css
@layer theme, utilities;
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);

.sbSwitch {
    display: grid;
    place-items: center;
    height: 100vh;
}

igc-button-group {
    display: inline-block;
    width: 100%;
    max-width: 25rem;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButtonGroup, IgrRipple, IgrToggleButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const views = ['Day', 'Week', 'Month'];

export default function ButtonGroupTailwindStyling(): JSX.Element {
    return (
        <IgrButtonGroup className="![--elevation:0] ![--item-text-color:#6d28d9] ![--item-background:#ffffff] ![--item-border-color:#c4b5fd] ![--item-hover-text-color:#6d28d9] ![--item-hover-background:#fae8ff] ![--item-hover-border-color:#c4b5fd] ![--item-selected-text-color:#ffffff] ![--item-selected-background:#7c3aed] ![--item-selected-border-color:#c4b5fd] ![--item-selected-hover-text-color:#ffffff] ![--item-selected-hover-background:#7c3aed]">
            {views.map((view) => (
                <IgrToggleButton
                    key={view}
                    value={view.toLowerCase()}
                    selected={view === 'Week'}
                >
                    {view}
                    <IgrRipple />
                </IgrToggleButton>
            ))}
        </IgrButtonGroup>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupTailwindStyling />);
```

## Accessibility

The React Button Group organizes related Toggle Buttons while exposing each button's selected and disabled state.

### Keyboard Interaction

The Button Group delegates keyboard interaction to its contained Toggle Buttons. Each Toggle Button renders a native button, so standard button keyboard behavior activates the focused item and updates its selection according to the configured selection mode.

| Key | Action |
| --- | --- |
| Tab / Shift+Tab | Moves focus to the next or previous enabled Toggle Button in the group. |
| Enter / Space | Activates the focused Toggle Button and selects or deselects it according to the configured selection mode. |

When the Button Group is disabled, it disables its contained Toggle Buttons so they are not keyboard interactive.

### Screen Readers / ARIA

The Button Group exposes a group relationship and each Toggle Button exposes its state through native button semantics.

- The group container uses `role="group"` and reflects the group disabled state through `aria-disabled`.
- Each Toggle Button renders a native `button` with `aria-pressed` for selection state and `aria-disabled` for disabled state.
- The group emits `igcSelect` and `igcDeselect` after user interaction changes a Toggle Button selection. The event detail is the Toggle Button `value`.
- Provide visible text or an `aria-label` for every Toggle Button, especially for icon-only controls.

### Accessibility Compliance

Infragistics documents Ignite UI for React accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| -- | -- |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | Each Toggle Button uses a native button, so the group selection behavior is available through standard button keyboard activation. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | The group exposes `role="group"`. Toggle Buttons expose native button semantics and update `aria-pressed` when selection changes; xplat Toggle Buttons also expose `aria-disabled`. |

Your responsibilities:

- Give each Toggle Button a clear visible label or accessible name, especially when it contains only an icon.
- Keep the group selection mode aligned with the control purpose, so users can understand whether one or multiple options may be selected.
- Preserve the logical button order and sufficient color contrast when customizing the group or its selected state.

## Troubleshooting

Use this section to check boundaries and common decisions before treating Button Group as a single toggle, form field, or action group.

### Why does selectedItems not select a button?

Ensure every Toggle Button has a unique `value` attribute. The `selectedItems` property depends on those values.

### Known Limitations

The React Button Group coordinates Toggle Buttons but does not replace their individual labels or accessible names.

- Selection behavior depends on the configured `selection` mode.
- The `selectedItems` property depends on unique `value` attributes on the contained Toggle Buttons.
- The Button Group does not provide labels or icons for its buttons; define the content of each Toggle Button separately.

## API References

The React Button Group API reference provides the complete API surface for the component and its related button functionality.

[`IgrButtonGroup`](mcp:get_api_reference?platform=react&component=IgrButtonGroup)
[`IgrToggleButton`](mcp:get_api_reference?platform=react&component=IgrToggleButton)
[`IgrRipple`](mcp:get_api_reference?platform=react&component=IgrRipple)
[`IgrIcon`](mcp:get_api_reference?platform=react&component=IgrIcon)

## Dependencies

The React Button Group requires the React package and its theme stylesheet. The examples also use the [`IgrToggleButton`](mcp:get_api_reference?platform=react&component=IgrToggleButton), [`IgrIcon`](mcp:get_api_reference?platform=react&component=IgrIcon), and [`IgrRipple`](mcp:get_api_reference?platform=react&component=IgrRipple) components.

## Additional Resources

Use the following React resources for API details and project support:

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

## Related Components

- [Button](./button.md) - Use Button when you need an individual action instead of a selectable group.

## FAQ

**Q: How do I set the selected buttons in a Button Group?**

Give every button item a unique value, then use the platform-specific selected-items setting to identify the items that should start selected. Unique values allow the group to track selection consistently across all supported platforms.

**Q: Can I use icons and labels in a Button Group?**

Yes. Each button item can contain an icon, a label, or both. Keep the content pattern consistent across the group and provide a visible label or accessible name when an icon alone does not explain the option.

**Q: Can I display a Button Group vertically?**

Yes. Set the platform-specific alignment property to the vertical option. Use horizontal alignment when the related choices should be presented in a single row.

