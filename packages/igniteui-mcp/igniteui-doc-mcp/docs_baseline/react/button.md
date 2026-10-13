---
title: "Button Component"
description: Get started with the React Button Component. Select button variants, configure sizes, define styling, and gain flexibility through the React Button OnClick event.
keywords: "React, UI controls, web widgets, UI widgets, React Button Components, Infragistics"
mentionedTypes: ["Button", "ButtonBase"]
license: MIT
last_updated: 2026-08-13
relatedComponents: ["IconButton"]
llms:
  description: "The React Button Component lets you enable clickable elements that trigger actions in your React app."
_tocName: Button
---
# Button Component

The React Button component lets you enable clickable elements that trigger actions in your React app. You get full control over button variants, styling, and sizes. The Button component also lets you handle clicks, toggle the button, and disable it when needed.

## Live Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.form {
	display: flex;
	justify-content: center;    
	gap: 1.25rem;
	padding: 1.5rem;
}

.form igc-avatar {
	--ig-size: var(--ig-size-large);
}

.fields {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	max-width: 260px;
	width: 100%;
}

.fields igc-input::part(container) {
	background-color: var(--ig-gray-50);
}

.actions {
	display: flex;
	justify-content: flex-end;
	gap: 1rem;
	margin-top: 0.5rem;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrAvatar, IgrButton, IgrInput } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './index.css';

export default function ButtonOverview() {
    return (
        <div className="container sample">
            <div className="form">
                <IgrAvatar
                    shape="circle"
                    src="https://dl.infragistics.com/x/img/avatars/14.jpg"
                    alt="profile picture" />
                <div className="fields">
                    <IgrInput placeholder="First Name" />
                    <IgrInput placeholder="Last Name" />
                    <div className="actions">
                        <IgrButton variant="flat">Cancel</IgrButton>
                        <IgrButton variant="contained">Save</IgrButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonOverview/>);
```

## Anatomy

The React Button renders its label and optional prefix and suffix content in the component shadow DOM.

**Button anatomy:** The Button component renders an actionable control with optional prefix and suffix content.

<style>{`
    .button-anatomy {
        --igd-anatomy-padding: 64px;
    }

    .button-anatomy .igd-anatomy__image {
        max-width: 100%;
    }

    .button-anatomy-legend {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        column-gap: 48px;
        margin-bottom: 24px;
    }

    .button-anatomy-legend div {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .button-anatomy-legend strong {
        margin-bottom: 12px;
    }

    .button-anatomy-legend span {
        display: block;
    }

    @media (max-width: 768px) {
        .button-anatomy-legend {
            grid-template-columns: 1fr 1fr;
            row-gap: 24px;
        }
    }

    @media (max-width: 480px) {
        .button-anatomy-legend {
            grid-template-columns: 1fr;
        }
    }
`}</style>

<div class="button-anatomy-legend ig-typography__body-2">
    <div>
        <strong>A - Contained Button</strong>
        <span>1. Icon (optional)</span>
        <span>2. Label</span>
        <span>3. Container</span>
    </div>
    <div>
        <strong>B - Outlined Button</strong>
        <span>4. Icon (optional)</span>
        <span>5. Label</span>
        <span>6. Container</span>
    </div>
    <div>
        <strong>C - Flat Button</strong>
        <span>7. Icon (optional)</span>
        <span>8. Label</span>
    </div>
    <div>
        <strong>D - Fab Icon Button</strong>
        <span>9. Icon</span>
        <span>10. Container</span>
    </div>
</div>

The Button renders its content inside the `base` CSS part. Use the default slot for the label and the `prefix` and `suffix` slots for optional content before and after the label.

```text
<igc-button>
├── ::part(base)
├── prefix slot
├── default slot content
└── suffix slot
</igc-button>
```

## Getting Started

To use the React Button, follow the [Ignite UI for React Getting Started](../general-getting-started.md) topic for the basic project setup, then register the component for your target platform.

For React using the **igniteui-react** package, install the package:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrButton`](mcp:get_api_reference?platform=react&component=IgrButton) and its necessary CSS, like so:

```tsx
import { IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

The simplest way to start using the [`IgrButton`](mcp:get_api_reference?platform=react&component=IgrButton) is as follows:

```tsx
<IgrButton />
```

## Usage

Use the React Button to trigger an action, submit form data, or navigate to another page. Choose the appropriate button type and variant for the action, then add optional content such as icons when needed.

The Button content is placed in its default slot. Add the action label as the button content so that the purpose of the action is clear to all users.

```tsx
<IgrButton>Save changes</IgrButton>
```

With `prefix` and `suffix` slots of the [`IgrButton`](mcp:get_api_reference?platform=react&component=IgrButton) component, we can add different content before and after the main content of the button.

We recommend using a `<span>` element when adding simple text, symbols, or emojis, and an [`IgrIcon`](mcp:get_api_reference?platform=react&component=IgrIcon) component when adding icons to the `prefix` and `suffix` slots.

```tsx
<IgrButton type="button" variant="contained">
    <span slot="prefix">Download</span>
    <IgrIcon slot="suffix" name="download"></IgrIcon>
</IgrButton>
```

### Type

The button component will change its internal structure from a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) to an [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) type element when the [`Href`](mcp:get_api_reference?platform=react&component=IgrButton&member=href) attribute is set. In that case the button can be thought of as a regular link. Setting the [`Href`](mcp:get_api_reference?platform=react&component=IgrButton&member=href) attribute will allow you to also set the [`Rel`](mcp:get_api_reference?platform=react&component=IgrButton&member=rel), [`Target`](mcp:get_api_reference?platform=react&component=IgrButton&member=target) and [`Download`](mcp:get_api_reference?platform=react&component=IgrButton&member=download) attributes.
In the case when the button component uses an actual [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) element internally, we can specify its [`DisplayType`](mcp:get_api_reference?platform=react&component=IgrButton&member=type) by setting the property to any of the following values:

- `Submit` - when we want to submit the form data
- `reset` - when we want to reset form data to its initial values
- `button` - when we want to add button with a custom functionality anywhere on a webpage

### Variants

Five types of Buttons are supported: `contained` button for prominent primary actions, `outlined` button for secondary actions, `flat` button for subtle actions, `floating action` button (Fab) for prominent main actions, and `icon` button for actions represented by an icon. Icon Buttons can also use any of the other four variants.

#### Contained Button

Use the [`Variant`](mcp:get_api_reference?platform=react&component=IgrButton&member=variant) attribute to add a simple contained button in your component template. Note that if you do not set variant, by default it will be set to contained.

```tsx
<IgrButton variant="contained">Contained</IgrButton>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-button {
  width: 40%;
  margin: auto;
}
```
```tsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const notificationsIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>';

export default function ButtonContained() {
    useEffect(() => {
        registerIconFromText('notifications', notificationsIcon, 'material');
    }, []);

    return (
        <div className="container sample">
            <IgrButton variant="contained">
                <IgrIcon slot="prefix" name="notifications" collection="material" />
                Contained
                <IgrIcon slot="suffix" name="notifications" collection="material" />
            </IgrButton>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonContained/>);
```

#### Outlined Button

All you have to do to create an `outlined` button is to change the value of the [`Variant`](mcp:get_api_reference?platform=react&component=IgrButton&member=variant) property:

```tsx
<IgrButton variant="outlined">Outlined</IgrButton>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-button {
  width: 40%;
  margin: auto;
}
```
```tsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const notificationsIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>';

export default function ButtonOutlined() {
    useEffect(() => {
        registerIconFromText('notifications', notificationsIcon, 'material');
    }, []);

    return (
        <div className="container sample">
            <IgrButton variant="outlined">
                <IgrIcon slot="prefix" name="notifications" collection="material" />
                Outlined
                <IgrIcon slot="suffix" name="notifications" collection="material" />
            </IgrButton>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonOutlined/>);
```

#### Flat Button

Analogically, we can switch to `flat` variant.

```tsx
<IgrButton variant="flat">Flat</IgrButton>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-button {
  width: 40%;
  margin: auto;
}
```
```tsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const notificationsIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>';

export default function ButtonFlat() {
    useEffect(() => {
        registerIconFromText('notifications', notificationsIcon, 'material');
    }, []);

    return (
        <div className="container sample">
            <IgrButton variant="flat">
                <IgrIcon slot="prefix" name="notifications" collection="material" />
                Flat
                <IgrIcon slot="suffix" name="notifications" collection="material" />
            </IgrButton>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonFlat/>);
```

#### Floating Action Button

We can create a floating action button by setting the [`Variant`](mcp:get_api_reference?platform=react&component=IgrButton&member=variant) property to `fab`:

```tsx
<IgrButton variant="fab">Fab</IgrButton>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-button {
  width: 40%;
  margin: auto;
}
```
```tsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const addIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>';

export default function ButtonFab() {
    useEffect(() => {
        registerIconFromText('add', addIcon, 'material');
    }, []);

    return (
        <div className="container sample">
            <IgrButton variant="fab">
                <IgrIcon slot="prefix" name="add" collection="material" />
                Floating Action
                <IgrIcon slot="suffix" name="add" collection="material" />
            </IgrButton>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonFab/>);
```

### States

You may also insert each Button in a disabled state because they all support both Enabled and Disabled variants. In Figma, you can switch between the two using a boolean property in the properties panel. In code, use the `disabled` property or attribute when an action is not currently available.

```tsx
<IgrButton variant="contained" disabled={true}>Disabled</IgrButton>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem;
}

.button-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}
```
```tsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const notificationsIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>';
const addIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>';

export default function ButtonStates() {
    useEffect(() => {
        registerIconFromText('notifications', notificationsIcon, 'material');
        registerIconFromText('add', addIcon, 'material');
    }, []);

    return (
        <div className="container sample">
            <div className="button-container">
                <div className="button-item">
                    <IgrButton variant="contained" disabled={true}>
                        <IgrIcon slot="prefix" name="notifications" collection="material" />
                        Contained
                        <IgrIcon slot="suffix" name="notifications" collection="material" />
                    </IgrButton>
                </div>
                <div className="button-item">
                    <IgrButton variant="outlined" disabled={true}>
                        <IgrIcon slot="prefix" name="notifications" collection="material" />
                        Outlined
                        <IgrIcon slot="suffix" name="notifications" collection="material" />
                    </IgrButton>
                </div>
                <div className="button-item">
                    <IgrButton variant="flat" disabled={true}>
                        <IgrIcon slot="prefix" name="notifications" collection="material" />
                        Flat
                        <IgrIcon slot="suffix" name="notifications" collection="material" />
                    </IgrButton>
                </div>
                <div className="button-item">
                    <IgrButton variant="fab" disabled={true}>
                        <IgrIcon slot="prefix" name="add" collection="material" />
                        Floating Action
                        <IgrIcon slot="suffix" name="add" collection="material" />
                    </IgrButton>
                </div>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonStates/>);
```

### Interaction States

In Figma the Enabled buttons support **Idle**, **Hover**, **Focused** and **Focused & Hover** states which can be switched between by changing the `State` property. In code, these interaction states are provided by the platform Button component and should preserve a visible focus indicator for keyboard users.

```html
<igc-button variant="contained">Ripple and focus states</igc-button>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
}

.button-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.button-label {
  color: var(--ig-gray-600);
  font-family: "Aktiv Grotesk", sans-serif;
  font-size: 13px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  letter-spacing: 0.3px;
}

igc-button.state-hover::part(base) {
  background: var(--hover-background);
  color: var(--hover-foreground);
}

igc-button.state-focused::part(base),
igc-button.state-focused-hover::part(base) {
  background: var(--focus-background);
  color: var(--focus-foreground);
}

igc-button.state-focused-hover::part(base) {
  background: var(--focus-hover-background);
  color: var(--focus-hover-foreground);
}
```
```tsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const notificationsIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>';

const states = [
    { label: 'Idle', value: 'idle' },
    { label: 'Hover', value: 'state-hover' },
    { label: 'Focused', value: 'state-focused' },
    { label: 'Focused & Hover', value: 'state-focused-hover' },
];

export default function ButtonInteractionStates() {
    useEffect(() => {
        registerIconFromText('notifications', notificationsIcon, 'material');
    }, []);

    return (
        <div className="container sample">
            <div className="button-container">
                {states.map((state) => (
                    <div className="button-item" key={state.value}>
                        <span className="button-label">{state.label}</span>
                        <IgrButton variant="contained" className={state.value}>
                            <IgrIcon slot="prefix" name="notifications" collection="material" />
                            Contained
                            <IgrIcon slot="suffix" name="notifications" collection="material" />
                        </IgrButton>
                    </div>
                ))}
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonInteractionStates/>);
```

### Layout Template

Contained, Outlined, Flat, and Floating Action Buttons support flexible icon and label templates. In Figma, to show or hide the icons, you can use the `Left Icon` and `Right Icon` boolean properties. If you want to have an Icon Button, you can set the `Content` property to `Icon`.

```tsx
<IgrButton variant="outlined">
    <span slot="prefix">★</span>
    Save changes
    <span slot="suffix">→</span>
</IgrButton>
```

```css
/* shared styles are loaded from:
   https://dl.infragistics.com/x/css/samples/shared.v8.css */

.button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    box-sizing: border-box;
    padding: 2rem;
}

.button-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
}

igc-button::part(base) {
    font-family: 'Titillium Web', sans-serif;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}
```
```tsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const addIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>';

export default function ButtonLayout() {
    useEffect(() => {
        registerIconFromText('add', addIcon, 'material');
    }, []);

    return (
        <div className="container sample">
            <div className="button-container">
                    <div className="button-item">
                        <IgrButton variant="outlined">
                            <IgrIcon slot="prefix" name="add" collection="material" />
                            Add
                        </IgrButton>
                    </div>
                    <div className="button-item">
                        <IgrButton variant="outlined">Buy Now</IgrButton>
                    </div>
                    <div className="button-item">
                        <IgrButton variant="outlined">
                            Add
                            <IgrIcon slot="suffix" name="add" collection="material" />
                        </IgrButton>
                    </div>
                    <div className="button-item">
                        <IgrButton variant="outlined">
                            <IgrIcon slot="prefix" name="add" collection="material" />
                            Floating Action
                        </IgrButton>
                    </div>
                    <div className="button-item">
                        <IgrButton variant="outlined">
                            <IgrIcon name="add" collection="material" />
                        </IgrButton>
                    </div>
                    <div className="button-item">
                        <IgrButton variant="outlined">Floating Action</IgrButton>
                    </div>
                </div>
            </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonLayout />);
```

### Size

Users can change the size of the [`IgrButton`](mcp:get_api_reference?platform=react&component=IgrButton) using the `--ig-size` CSS variable.

```tsx
<IgrButton className="button-size-small" variant="contained">
    Small
</IgrButton>
```

```css
.button-size-small {
    --ig-size: var(--ig-size-small);
}
```

The result of implementing the above code should look like the following:

```css
.container {
    justify-content: center;
    align-items: center;
}

.size-grid {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 1rem;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
}

.size-row {
    display: grid;
    grid-template-columns: 70px repeat(4, minmax(0, 1fr));
    align-items: center;
    justify-items: center;
    column-gap: 1rem;
    row-gap: 0.5rem;
    width: 100%;
}

.size-header {
    display: grid;
    grid-template-columns: 70px repeat(4, minmax(0, 1fr));
    align-items: center;
    justify-items: center;
    column-gap: 1rem;
    width: 100%;
    color: var(--ig-gray-600);
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.3px;
}

.size-row igc-button {
    width: auto;
    transform: scale(0.9);
}

.size-label {
    justify-self: start;
    color: var(--ig-gray-600);
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: 13px;
    font-weight: 400;
    font-style: normal;
    line-height: 20px;
    letter-spacing: 0.3px;
    display: inline-flex;
    align-items: center;
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
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const notificationsIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>';
const addIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>';

const sizes = ['large', 'medium', 'small'];
const variants: any[] = ['contained', 'outlined', 'flat'];

export default function ButtonSize() {
    useEffect(() => {
        registerIconFromText('notifications', notificationsIcon, 'material');
        registerIconFromText('add', addIcon, 'material');
    }, []);

    return (
        <div className="container sample">
            <div className="size-grid">
                <div className="size-header">
                    <span></span>
                    <span>Contained</span>
                    <span>Outlined</span>
                    <span>Flat</span>
                    <span>Fab</span>
                </div>
                {sizes.map((size) => (
                    <div className="size-row" key={size}>
                        <span className={'size-label size-' + size}>{size[0].toUpperCase() + size.slice(1)}</span>
                        {variants.map((variant) => (
                            <IgrButton key={variant} className={'size-' + size} variant={variant}>
                                <IgrIcon slot="prefix" name="notifications" collection="material" />
                                {variant[0].toUpperCase() + variant.slice(1)}
                                <IgrIcon slot="suffix" name="notifications" collection="material" />
                            </IgrButton>
                        ))}
                        <IgrButton className={'size-' + size} variant="fab">
                            <IgrIcon slot="prefix" name="add" collection="material" />
                            Floating Action
                            <IgrIcon slot="suffix" name="add" collection="material" />
                        </IgrButton>
                    </div>
                ))}

            </div>
        </div>
    );
}


// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonSize/>);
```

### Download

Setting the [`Download`](mcp:get_api_reference?platform=react&component=IgrButton&member=download) property will prompt the user to save the linked URL instead of navigating to it.

```tsx
<IgrButton
    href=""
    variant="contained"
    download="url"
    target="_blank" >
    Download
</IgrButton>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-button {
  width: 40%;
  margin: auto;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ButtonDownload extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                 <IgrButton href="" variant="contained" download="url" target="_blank">Download</IgrButton>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonDownload/>);
```

### Do/Don't

**When to use:** Use Button for actions that change state, submit data, or trigger an application command.

**When not to use:** Use [Icon Button](./icon-button.md) when the action is represented only by an icon and does not require a text label.

<div class="table-responsive">
    <table class="table" style="width: 100%; table-layout: fixed; border-collapse: collapse; border: 1px solid #d3d3d3; margin-bottom: 24px;">
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

The React Button exposes platform-specific properties for controlling its content, appearance, and behavior.

The React Button exposes the following properties.

| Name | Type | Default | Description |
|--|--|--|--|
| [`variant`](mcp:get_api_reference?platform=react&component=IgrButton&member=variant) | ButtonVariant | `contained` | Selects the Button visual variant. |
| [`type`](mcp:get_api_reference?platform=react&component=IgrButton&member=type) | string | `button` | Sets the native button type when the component renders as a button. |
| [`href`](mcp:get_api_reference?platform=react&component=IgrButton&member=href) | string | — | Sets the destination and uses the Button for navigation. |
| [`rel`](mcp:get_api_reference?platform=react&component=IgrButton&member=rel) | string | — | Sets the relationship between the current document and the linked destination. |
| [`target`](mcp:get_api_reference?platform=react&component=IgrButton&member=target) | string | — | Sets where the linked destination opens when `href` is set. |
| [`download`](mcp:get_api_reference?platform=react&component=IgrButton&member=download) | string | — | Prompts the user to download the linked resource when `href` is set. |

## Styling

Customize the Button with theme settings, CSS variables, or CSS parts to match the visual language of your application.

### Sass Theming

Use the standard Ignite UI for React theme workflow to customize the Button consistently with the rest of the application.

### CSS Variables

Use the generated CSS variables on the Button element to override the theme values for a specific instance. The variant-specific theme functions derive related interaction-state values from the primary theme parameters.

| Primary property | Dependent property | Description |
| --- | --- | --- |
| `$background` | `$hover-background`, `$focus-background`, `$active-background` | Button background colors for the interaction states. |
| `$foreground` | `$hover-foreground`, `$focus-foreground`, `$active-foreground` | Button text colors for the interaction states. |
| `$border-color` | `$hover-border-color`, `$focus-border-color`, `$active-border-color` | Button border colors for the interaction states. |
| `$shadow-color` | `$resting-shadow`, `$hover-shadow`, `$focus-shadow`, `$active-shadow` | Button shadow colors and elevations. |
| `$disabled-background` | `$disabled-foreground`, `$disabled-icon-color`, `$disabled-border-color` | Button colors when it is disabled. |

### Style Parts

The [`IgrButton`](mcp:get_api_reference?platform=react&component=IgrButton) exposes three CSS parts which we can use for styling:

|Name|Description|
|--|--|
| `base` | The native button element of the igc-button component. |
| `prefix` | The prefix container of the igc-button component. |
| `suffix` | The suffix container of the igc-button component. |

The `base` CSS part allows us to style the wrapped element (`<button>` or `<a>`).

```css
igc-button::part(base) {
  background-color: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
  padding: 18px;
}
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.container {
  justify-content: center;
  align-items: center;
}

.button-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
}

.button-row {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: center;
  justify-items: center;
  gap: 3rem;
}

igc-button.confirm-button::part(base) {
  background-color: #1275c4;
  color: #ffffff;
}

igc-button.confirm-button:hover::part(base) {
  background-color: #0b4f8a;
  color: #ffffff;
}

igc-button.send-button::part(base) {
  border-color: #8a2be2;
  color: #8a2be2;
}

igc-button.send-button:hover::part(base) {
  background-color: #8a2be2;
  border-color: #6a1bb1;
  color: #ffffff;
}

igc-button.send-button igc-icon {
  color: #8a2be2;
}

igc-button.send-button:hover igc-icon {
  color: #ffffff;
}

igc-button.cancel-button::part(base) {
  color: #1275c4;
}

igc-button.cancel-button:hover::part(base) {
  background-color: #dbeeff;
  color: #063b68;
}

igc-button.add-button::part(base) {
  background-color: #4caf50;
  color: #000000;
  border-radius: 999px;
}

igc-button.add-button:hover::part(base) {
  background-color: #257a2b;
  color: #ffffff;
}

igc-button.add-button igc-icon {
  color: #000000;
}
```
```tsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const icons = [
    { name: 'send', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"/></svg>' },
    { name: 'add', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>' },
];

export default function ButtonStyling() {
    useEffect(() => {
        icons.forEach((icon) => registerIconFromText(icon.name, icon.text, 'material'));
    }, []);

    return (
        <div className="container sample">
            <div className="button-grid">
                <div className="button-row">
                    <IgrButton variant="contained" className="confirm-button">Confirm</IgrButton>
                    <IgrButton variant="outlined" className="send-button">
                        <IgrIcon slot="prefix" name="send" collection="material" />
                        Send
                    </IgrButton>
                    <IgrButton variant="flat" className="cancel-button">Cancel</IgrButton>
                    <IgrButton variant="fab" className="add-button">
                        Add
                        <IgrIcon slot="suffix" name="add" collection="material" />
                    </IgrButton>
                </div>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonStyling/>);
```

### Styling with Tailwind

You can style the Button with the custom Tailwind utility classes from `igniteui-theming`. Make sure to [set up Tailwind](/themes/tailwind) first, then import the Ignite UI utilities in your global stylesheet:

```css
@import "tailwindcss";
@import "igniteui-theming/tailwind/utilities/material.css";
```

```jsx
<IgrButton className="!light-contained-button ![--background:#7B9E89]">Contained Button</IgrButton>
```

The exclamation mark (`!`) gives the Tailwind utility precedence over the Button's default theme styles.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

@layer theme, base, components, utilities;
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);

/* web component internals cannot be styled with Tailwind utilities,
   because they live in the shadow DOM, so exposed CSS parts are used */

.button-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 1.5rem;
    padding: 1rem;
}

.button-row {
    display: grid;
    grid-template-columns: repeat(4, 7rem);
    align-items: center;
    justify-items: center;
    gap: 1.5rem;
}

.confirm-button::part(base) {
    background-color: var(--color-indigo-700);
    color: var(--color-white);
}

.confirm-button:hover::part(base) {
    background-color: var(--color-indigo-900);
    color: var(--color-white);
}

.send-button::part(base) {
    border-color: var(--color-pink-600);
    color: var(--color-pink-600);
}

.send-button:hover::part(base) {
    background-color: var(--color-pink-600);
    border-color: var(--color-pink-700);
    color: var(--color-white);
}

.send-button igc-icon {
    color: var(--color-pink-600);
}

.send-button:hover igc-icon {
    color: var(--color-white);
}

.cancel-button::part(base) {
    color: var(--color-amber-700);
}

.cancel-button:hover::part(base) {
    background-color: var(--color-amber-100);
    color: var(--color-amber-900);
}

.add-button::part(base) {
    background-color: var(--color-teal-500);
    color: var(--color-black);
    border-radius: 9999px;
}

.add-button:hover::part(base) {
    background-color: var(--color-teal-800);
    color: var(--color-white);
}
```
```tsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const icons = [
    { name: 'send', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"/></svg>' },
    { name: 'add', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>' },
];

export default function ButtonTailwindStyling(): JSX.Element {
    useEffect(() => {
        icons.forEach((icon) => registerIconFromText(icon.name, icon.text, 'material'));
    }, []);

    return (
        <div className="button-grid flex flex-col items-center justify-center h-full gap-6 p-4">
            <div className="button-row grid grid-cols-4 items-center justify-items-center gap-6">
                <IgrButton variant="contained" className="confirm-button">Confirm</IgrButton>
                <IgrButton variant="outlined" className="send-button">
                    <IgrIcon slot="prefix" name="send" collection="material" />
                    Send
                </IgrButton>
                <IgrButton variant="flat" className="cancel-button">Cancel</IgrButton>
                <IgrButton variant="fab" className="add-button">
                    Add
                    <IgrIcon slot="suffix" name="add" collection="material" />
                </IgrButton>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonTailwindStyling/>);
```

## Accessibility

The React Button is an interactive control for actions and, when `href` is set, navigation.
Use the native button behavior for commands and preserve the link behavior for navigation.

### Keyboard Interaction

The Button uses the keyboard behavior of its rendered native control. A disabled Button is not
interactive, and a Button with `href` is rendered as a link instead of a command button.

| Key | Action |
| -- | -- |
| Tab / Shift+Tab | Moves focus to or away from the Button when it is keyboard-focusable. |
| Enter / Space | Activates a focused command Button. Enter activates a Button used as a link. |

### Screen Readers / ARIA

The Button renders a native `button` for command actions and an `a` element when `href` is set.
The native element supplies the appropriate role and keyboard semantics.

- The Button's visible content is used as its accessible name when it contains meaningful text.
- Provide an `aria-label` or another accessible naming mechanism for an icon-only Button.
- A disabled Button exposes its disabled state through the rendered native control.
- Button click event handlers perform application actions; they do not replace the Button's
    accessible name, role, or state.

### Accessibility Compliance

This topic does not make a product-level WCAG, Section 508, or EN 301 549 conformance claim. Verify the rendered Button and its surrounding application against the accessibility requirements that apply to the target project.

| Criterion | How the component supports the requirement |
| -- | -- |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | The native command button supports keyboard activation, and a Button with `href` uses native link activation. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | The rendered native element supplies the role and state semantics. The visible Button content supplies the accessible name when it is meaningful. |
| [2.4.4 Link Purpose](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context) | When `href` is set, the Button becomes a navigation link; provide a name that identifies its destination or purpose. |

Your responsibilities:

- Give every Button a meaningful accessible name, especially icon-only Buttons.
- Use a command Button for actions and `href` for navigation; do not emulate one with the other.
- Do not rely on color, hover, or focus styling alone to communicate the action or state.
- Preserve sufficient contrast and a visible focus indicator when customizing the Button theme.

## Troubleshooting

Use this section to check boundaries and common decisions before treating Button as a command, navigation link, or form control.

### Why does the Button behave like a link?

When `href` is set, the Button is used for navigation rather than for a command action. Remove `href` when the control should trigger application logic instead of navigating to a URL.

### Why is the Button not keyboard-focusable?

Check whether the Button is disabled or whether the surrounding application changes its focus behavior. Use a focusable Button for actions that must be available through keyboard navigation.

### Known Limitations

The Button has the following platform-independent boundaries:

- Use a text label or another accessible naming mechanism for every action; an unlabeled icon-only Button does not communicate its purpose by itself.
- Setting `href` changes the Button from an action control to a navigation control. Use [Icon Button](./icon-button.md) for icon-only actions and verify its accessible name separately.
- The Button's visual appearance does not determine whether the surrounding application action is available or valid; application logic must provide that state and feedback.

## API References

The React Button API reference lists the complete verified API surface for the target platform.

[`IgrButton`](mcp:get_api_reference?platform=react&component=IgrButton)

## Dependencies

The React Button requires the corresponding React package and theme stylesheet. The sizing example also uses the [`IgrRadio`](mcp:get_api_reference?platform=react&component=IgrRadio) and [`IgrRadioGroup`](mcp:get_api_reference?platform=react&component=IgrRadioGroup) components.

## Additional Resources

The following resources provide additional React Button guidance and project support.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

## Related Components

The React Button is commonly used with related components when an action needs a specialized presentation.

- [Icon Button](./icon-button.md) is intended for icon-only actions.

## FAQ

    **Q: Which component should I use for an icon-only action?**

        Use the [Icon Button](./icon-button.md) component and provide an accessible name for the action.
    
    **Q: How do I disable a Button?**

        Set the verified `disabled` property to make the Button unavailable and prevent it from being activated.
    
    **Q: How do I change the Button size?**

        Use the platform's supported sizing options or the `--ig-size` CSS variable to customize the Button density.
    

