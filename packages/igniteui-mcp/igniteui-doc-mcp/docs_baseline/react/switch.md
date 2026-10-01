---
title: "Switch"
description: "Ignite UI for React Switch component enables developers to use binary on/off or true/false data input functions within their applications."
keywords: "Ignite UI for React, UI controls, React widgets, web widgets, UI widgets, React, Native React Components Suite, Native React Controls, Native React Components Library, React Switch components, React Switch controls"
mentionedTypes: ["Switch"]
relatedComponents: [Checkbox, ToggleButton]
license: MIT
last_updated: "2026-08-31"
llms:
  description: "The Ignite UI for React Switch component is a binary choice selection component that behaves similarly to the switch component in iOS."
_tocName: Switch
---
# Switch Component

The Ignite UI for React Switch component is a binary choice selection component that behaves similarly to the switch component in iOS.

## Live Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.container.sample {
    display: flex;
    place-content: center;
    place-items: center;
}

.notifications {
    inline-size: 100%;
    max-inline-size: 384px;
    background: var(--ig-surface-500);
    border-radius: 4px;
    overflow: hidden;

    & .notifications__title {
        margin: 0;
        padding: 16px;
        font: 400 10px / 16px "Titillium Web", sans-serif;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        color: var(--ig-primary-500);
    }

    & .notifications__row {
        padding-block: 12px;
        padding-inline: 16px;

        & igc-switch {
            display: block;
            inline-size: 100%;

            &::part(base) {
                inline-size: 100%;
                justify-content: space-between;
                gap: 16px;
            }
        }
    }
}

.option {
    display: flex;
    flex-direction: column;
    gap: 2px;
    text-align: start;
    white-space: normal;

    & .option__label {
        font-size: 16px;
        color: var(--ig-gray-900);
    }

    & .option__hint {
        font-size: 13px;
        color: var(--ig-gray-700);
    }
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSwitch } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function SwitchOverview() {

    return (
        <div className="container sample">
            <div className="notifications">
                <h6 className="notifications__title">Notifications</h6>
                <div className="notifications__row">
                    <IgrSwitch labelPosition="before" checked={true}>
                        <span className="option">
                            <span className="option__label">Push notifications</span>
                            <span className="option__hint">Deliver alerts to this device</span>
                        </span>
                    </IgrSwitch>
                </div>
                <div className="notifications__row">
                    <IgrSwitch labelPosition="before">
                        <span className="option">
                            <span className="option__label">Weekly digest</span>
                            <span className="option__hint">Summary email every Monday</span>
                        </span>
                    </IgrSwitch>
                </div>
                <div className="notifications__row">
                    <IgrSwitch labelPosition="before" disabled={true}>
                        <span className="option">
                            <span className="option__label">SMS alerts</span>
                            <span className="option__hint">Unavailable on your plan</span>
                        </span>
                    </IgrSwitch>
                </div>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SwitchOverview/>);
```

## Anatomy

The React Switch contains a control for changing a binary state and an optional label.

**Switch anatomy:** The Switch component contains a control for changing a binary state and an optional label.

<style>{`
  .switch-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .switch-anatomy .igd-anatomy__image {
    max-width: 142.5px;
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Track:</strong> indicates the switch path between on and off states.<br />
<strong>2. Thumb:</strong> changes the current state.<br />
<strong>3. Label (optional):</strong> describes what the switch controls.</span>

The following diagram shows the logical structure of the React Switch. The control manages the binary state, while the optional label describes the setting controlled by the switch.

```text
Switch
├── Control
└── Label (optional)
```

## Getting Started

To use the React Switch, follow the [Ignite UI for React Getting Started](../general-getting-started.md) topic for the basic project setup, then register the component for your target platform.

At its core, the [`IgrSwitch`](mcp:get_api_reference?platform=react&component=IgrSwitch) component allows for toggling between on/off states. The default styling is done according to the selection controls specification in the Material Design guidelines.

For React using the **igniteui-react** package, install the package:

```cmd
npm install igniteui-react
```

Then import the Switch wrapper and its theme CSS:

```tsx
import { IgrSwitch } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

The simplest way to start using the [`IgrSwitch`](mcp:get_api_reference?platform=react&component=IgrSwitch) is as follows:

```tsx
<IgrSwitch></IgrSwitch>
```

## Usage

Use the React Switch as a binary choice control for settings that take effect immediately when the user changes their state.

The following example shows the basic Switch configuration. To provide a meaningful label for the switch, simply place some text between the opening and closing tags:

```tsx
<IgrSwitch>Accept terms</IgrSwitch>
```

You can use the [`required`](mcp:get_api_reference?platform=react&component=IgrSwitch&member=required) property to mark the switch as required.

```tsx
<IgrSwitch required={true}></IgrSwitch>
```

You can use the [`invalid`](mcp:get_api_reference?platform=react&component=IgrSwitch&member=invalid) property to mark the switch as invalid.

```tsx
<IgrSwitch invalid={true}></IgrSwitch>
```

### Interaction States

The Switch can be inserted in an `Enabled` or `Disabled` state. In `Enabled` state, the switch also supports `Hover`, `Focused` and `Focused & Hover` states.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.container.sample {
    display: flex;
    place-content: center;
    place-items: center;
}

.states {
    display: grid;
    grid-template-columns: repeat(4, auto);
    align-items: center;
    gap: 32px;

    & :is(.states__column, .states__row) {
        font: 500 14px / 24px "Aktiv Grotesk", sans-serif;
        letter-spacing: 0.1px;
        color: var(--ig-gray-600);
    }

    & .states__column {
        text-align: center;
    }

    & .states__row {
        text-align: end;
    }

    & igc-switch {
        justify-self: center;
    }
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSwitch } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function SwitchEnabled() {

    return (
        <div className="container sample">
            <div className="states">
                <span className="states__corner"></span>
                <span className="states__column">Hover</span>
                <span className="states__column">Focused</span>
                <span className="states__column">Focused &amp; Hover</span>

                <span className="states__row">Enabled / On</span>
                <IgrSwitch labelPosition="before" checked={true}>
                    <span>Power</span>
                </IgrSwitch>
                <IgrSwitch labelPosition="before" checked={true}>
                    <span>Power</span>
                </IgrSwitch>
                <IgrSwitch labelPosition="before" checked={true}>
                    <span>Power</span>
                </IgrSwitch>

                <span className="states__row">Enabled / Off</span>
                <IgrSwitch labelPosition="before">
                    <span>Power</span>
                </IgrSwitch>
                <IgrSwitch labelPosition="before">
                    <span>Power</span>
                </IgrSwitch>
                <IgrSwitch labelPosition="before">
                    <span>Power</span>
                </IgrSwitch>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SwitchEnabled/>);
```

### Disabled States

You may also set the state of the switch to `Disabled` to disallow user interaction with it. You can use the [`disabled`](mcp:get_api_reference?platform=react&component=IgrSwitch&member=disabled) attribute to set this state.

```tsx
<IgrSwitch disabled={true}></IgrSwitch>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.container.sample {
    display: flex;
    place-content: center;
    place-items: center;
}

.states {
    --variant-gap: 60px;
    --label-gap: 30px;

    display: flex;
    align-items: center;
    gap: var(--variant-gap);

    & .states__variant {
        display: flex;
        align-items: center;
        gap: var(--label-gap);
    }

    & .states__label {
        font: 500 14px / 24px "Aktiv Grotesk", sans-serif;
        letter-spacing: 0.1px;
        color: var(--ig-gray-600);
    }
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSwitch } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function SwitchDisabled() {

    return (
        <div className="container sample">
            <div className="states">
                <div className="states__variant">
                    <span className="states__label">Disabled Checked</span>
                    <IgrSwitch labelPosition="before" disabled={true} checked={true}>
                        <span>Power</span>
                    </IgrSwitch>
                </div>
                <div className="states__variant">
                    <span className="states__label">Disabled Unchecked</span>
                    <IgrSwitch labelPosition="before" disabled={true}>
                        <span>Power</span>
                    </IgrSwitch>
                </div>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SwitchDisabled/>);
```

### On/Off States

The Switch can be set to an `On` or `Off` state to indicate whether a setting is enabled or disabled.

```tsx
<IgrSwitch checked={true}>On</IgrSwitch>
<IgrSwitch checked={false}>Off</IgrSwitch>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.container.sample {
    display: flex;
    place-content: center;
    place-items: center;
}

.states {
    display: grid;
    grid-template-columns: repeat(3, auto);
    align-items: center;
    gap: 32px;

    & .states__row {
        text-align: end;
        font: 500 14px / 24px "Aktiv Grotesk", sans-serif;
        letter-spacing: 0.1px;
        color: var(--ig-gray-600);
    }

    & .states__disabled {
        margin-inline-start: 16px;
    }
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSwitch } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function SwitchSelected() {

    return (
        <div className="container sample">
            <div className="states">
                <span className="states__row">On</span>
                <IgrSwitch labelPosition="before" checked={true}>
                    <span>Power</span>
                </IgrSwitch>
                <IgrSwitch labelPosition="before" checked={true} disabled={true}>
                    <span>Power</span>
                </IgrSwitch>

                <span className="states__row">Off</span>
                <IgrSwitch labelPosition="before">
                    <span>Power</span>
                </IgrSwitch>
                <IgrSwitch labelPosition="before" disabled={true}>
                    <span>Power</span>
                </IgrSwitch>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SwitchSelected/>);
```

### Layout

You can specify if the label should be positioned before or after the switch toggle by setting the [`LabelPosition`](mcp:get_api_reference?platform=react&component=IgrSwitch&member=labelPosition) property of the switch. Allowed values are `before` and `after` (default):

```tsx
<IgrSwitch aria-labelledby="switch-label" labelPosition="before"><span id="switch-label">Label</span></IgrSwitch>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.container.sample {
    display: flex;
    place-content: center;
    place-items: center;
}

.variants {
    --variant-gap: 60px;
    --label-gap: 30px;

    display: flex;
    align-items: center;
    gap: var(--variant-gap);

    & .variants__item {
        display: flex;
        align-items: center;
        gap: var(--label-gap);
    }

    & .variants__label {
        font: 500 14px / 24px "Aktiv Grotesk", sans-serif;
        letter-spacing: 0.1px;
        color: var(--ig-gray-600);
    }
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSwitch } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function SwitchLayout() {

    return (
        <div className="container sample">
            <div className="variants">
                <div className="variants__item">
                    <span className="variants__label">Label Before</span>
                    <IgrSwitch labelPosition="before" checked={true}>
                        <span>Power</span>
                    </IgrSwitch>
                </div>
                <div className="variants__item">
                    <span className="variants__label">Label After</span>
                    <IgrSwitch labelPosition="after" checked={true}>
                        <span>Power</span>
                    </IgrSwitch>
                </div>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SwitchLayout/>);
```

The switch can also be labelled by elements external to the switch. In this case, the user is given full control to position and style the label in accordance with their needs.

```tsx
<>
  <span id="switch-label">Label</span>
  <IgrSwitch aria-labelledby="switch-label"></IgrSwitch>
</>
```

### Do/Don't

**When to use:** Use Switch for an immediate on/off setting that takes effect when the user changes it.

**When not to use:** Use [Checkbox](./checkbox.md) when users select one or more options for a later form submission, or [Button](./button.md) when the control represents an action or a toggleable command.

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
    </tbody>
  </table>
</div>

## Properties

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`checked`](mcp:get_api_reference?platform=react&component=IgrSwitch&member=checked) | `boolean` | `false` | Gets or sets whether the switch is on. |
| [`disabled`](mcp:get_api_reference?platform=react&component=IgrSwitch&member=disabled) | `boolean` | `false` | Gets or sets whether the switch is disabled. |
| [`invalid`](mcp:get_api_reference?platform=react&component=IgrSwitch&member=invalid) | `boolean` | `false` | Gets or sets whether the switch is invalid. |
| [`labelPosition`](mcp:get_api_reference?platform=react&component=IgrSwitch&member=labelPosition) | `ToggleLabelPosition` | `after` | Sets the position of the label relative to the control. |
| [`name`](mcp:get_api_reference?platform=react&component=IgrSwitch&member=name) | `string` | `-` | Sets the name used when the switch is submitted with a form. |
| [`required`](mcp:get_api_reference?platform=react&component=IgrSwitch&member=required) | `boolean` | `false` | Gets or sets whether the switch is required. |
| [`value`](mcp:get_api_reference?platform=react&component=IgrSwitch&member=value) | `string` | `-` | Sets the value used when the switch is submitted with a form. |

## Styling

The React Switch uses CSS parts and CSS variables to style its track, thumb, and label.

### Sass Theming

Use the Ignite UI for React theme system to style the Switch consistently with the rest of your application.

Import the theming functions before creating a custom Switch theme:

```scss
@use "igniteui-theming" as *;
```

Create a theme with `switch-theme` and include it in the global stylesheet. The track and thumb parameters are used as the base for the related interaction-state colors:

```scss
$custom-switch: switch-theme(
    $track-on-color: #57a5cd,
);

igc-switch {
    @include switch($custom-switch);
}
```

The same theme applies to Web Components directly and to the underlying `igc-switch` element rendered by the React and Blazor wrappers.

### CSS Variables

Use the following CSS variables to customize the Switch colors and interaction states. Set them on the Switch element to apply the styles to its track, thumb, and label:

| Primary property | Dependent property | Description |
| --- | --- | --- |
| `--track-on-color` | `--track-on-hover-color` | Track background when the switch is checked. |
|  | `--track-off-color` | Track background when the switch is unchecked. |
| `--thumb-on-color` | `--thumb-off-color` | Thumb color for the checked and unchecked states. |
| `--label-color` | `--label-disabled-color` | Label color for the default and disabled states. |

### Style Parts

Use the following CSS parts to target the Switch and its inner elements:

| Part | Component | What it styles |
| --- | --- | --- |
| `base` | [`IgrSwitch`](mcp:get_api_reference?platform=react&component=IgrSwitch) | The base wrapper of the switch. |
| `control` | [`IgrSwitch`](mcp:get_api_reference?platform=react&component=IgrSwitch) | The switch input element. |
| `thumb` | [`IgrSwitch`](mcp:get_api_reference?platform=react&component=IgrSwitch) | The position indicator of the switch. |
| `label` | [`IgrSwitch`](mcp:get_api_reference?platform=react&component=IgrSwitch) | The switch label. |

### Custom Styling

The following example changes the track and thumb colors for the checked and unchecked states:

| Selector | Declaration | Effect |
| --- | --- | --- |
| `igc-switch` | `--track-on-color`, `--track-off-color` | Changes the track background for the checked and unchecked states. |
| `igc-switch` | `--thumb-on-color`, `--thumb-off-color` | Changes the thumb color for the checked and unchecked states. |

```css
igc-switch {
  --thumb-on-color: white;
  --thumb-off-color: var(--ig-success-500);
  --track-on-color: var(--ig-success-500); /* Background color when checked */
  --track-off-color: white; /* Background color when unchecked */
  --track-on-hover-color: var(--ig-success-500); /* Background hover color when checked */
}
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.container.sample {
    display: flex;
    place-content: center;
    place-items: center;
}

.security {
    display: block;
    inline-size: 100%;
    max-inline-size: 348px;
    background: var(--ig-surface-500);
    border: 1px solid var(--ig-gray-300);
    border-radius: 16px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%);
    overflow: hidden;

    &::part(header) {
        padding: 16px;
        padding-inline-end: 6px;
        gap: 16px;
    }

    &[open]::part(header) {
        border-block-end: 1px solid var(--ig-gray-300);
    }

    &::part(indicator) {
        transform: none;
    }

    &::part(content) {
        padding-left: 5px;
    }

    & igc-switch {
        display: block;
        inline-size: 60px;
        block-size: 40px;

        &::part(base) {
            inline-size: 60px;
            block-size: 40px;
            justify-content: center;
            align-items: center;
            overflow: visible;
        }

        &::part(control) {
            overflow: visible;
        }
    }

    & igc-radio-group {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin-inline-start: 0;
    }

    & igc-radio {
        font: 600 12px / 16px "Aktiv Grotesk", sans-serif;
        letter-spacing: 0.15px;
        color: var(--ig-primary-900);

        &::part(label) {
            padding-inline-start: 4px;
        }

        &::part(control) {
            transform: translateX(-4px);
            --fill-color: var(--ig-primary-500);
            --fill-color-border: var(--ig-primary-500);
            --fill-color-hover: var(--ig-primary-500);
            --fill-hover-border-color: var(--ig-primary-500);
        }
    }
}

.option {
    display: flex;
    flex-direction: column;
    gap: 2px;
    text-align: start;
    white-space: normal;

    & .option__label {
        font: 600 16px / 24px "Aktiv Grotesk", sans-serif;
        letter-spacing: 0.15px;
        color: var(--ig-gray-700);
    }

    & .option__hint {
        font: 500 14px / 24px "Aktiv Grotesk", sans-serif;
        letter-spacing: 0.1px;
        color: var(--ig-gray-600);
    }
}
```
```tsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSwitch, IgrRadio, IgrRadioGroup, IgrExpansionPanel } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function SwitchStyling() {
    const [open, setOpen] = useState(true);

    return (
        <div className="container sample">
            {/* a click on the switch bubbles up to the panel header, so only the open state has to be mirrored back */}
            <IgrExpansionPanel
                className="security"
                indicatorPosition="end"
                open={open}
                onOpened={() => setOpen(true)}
                onClosed={() => setOpen(false)}>
                <div slot="title" className="option">
                    <span className="option__label">Two-factor authentication</span>
                    <span className="option__hint">Extra sign-in verification</span>
                </div>
                <IgrSwitch slot="indicator" checked={open}></IgrSwitch>
                <IgrRadioGroup alignment="vertical">
                    <IgrRadio name="method" value="app" checked={true}>Authenticator app</IgrRadio>
                    <IgrRadio name="method" value="key">Security key</IgrRadio>
                    <IgrRadio name="method" value="codes">Backup codes</IgrRadio>
                </IgrRadioGroup>
            </IgrExpansionPanel>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SwitchStyling/>);
```

### Styling with Tailwind

You can style the React Switch with the custom Tailwind utility classes from `igniteui-theming`. Make sure to [set up Tailwind](/themes/tailwind) first, then import the Ignite UI utilities in your global stylesheet:

```css
@import "tailwindcss";
@import "igniteui-theming/tailwind/utilities/material.css";
```

```jsx
<IgrSwitch className="!light-switch ![--track-on-color:#7B9E89]"></IgrSwitch>
```

The exclamation mark (`!`) gives the Tailwind utility precedence over the Switch's default theme styles.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

@layer theme, utilities;
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);
@source "./index.tsx";

@custom-variant dark (&:where(.dark, .dark *));

.container.sample {
    display: flex;
    place-content: center;
    place-items: center;
}
```
```tsx
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSwitch, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const darkModeIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path style="fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round" d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-5.4-5.4c0-1.81.89-3.41 2.26-4.4A9.4 9.4 0 0 0 12 3z"/></svg>';

export default function SwitchTailwindStyling(): JSX.Element {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        registerIconFromText('dark_mode', darkModeIcon, 'material');
    }, []);

    return (
        <div className="container sample">
            <div className={`${isDarkMode ? 'dark ' : ''}w-full max-w-[384px] overflow-hidden rounded-lg shadow-[var(--ig-elevation-2)] bg-white dark:bg-[#1A314A]`}>
                <div className="flex items-center justify-between gap-4 border-b border-gray-700 bg-gray-900 px-6 py-4">
                    <span className="font-sans text-[14px] font-medium leading-6 tracking-[0.1px] text-[#E6F2FF]">Dashboard</span>
                    <IgrSwitch labelPosition="before" checked={isDarkMode} onChange={() => setIsDarkMode((current) => !current)} className="[--track-on-color:var(--color-blue-500)] [--track-off-color:var(--color-slate-600)] [--thumb-on-color:var(--color-white)] [--thumb-off-color:var(--color-slate-300)] [--track-on-hover-color:var(--color-blue-600)]">
                        <span className="flex items-center gap-2 font-sans text-[14px] font-medium leading-6 tracking-[0.1px] text-[#E6F2FF]">
                            <IgrIcon name="dark_mode" collection="material" className="[--size:20px] text-[var(--ig-warn-300)]" />
                            Dark mode
                        </span>
                    </IgrSwitch>
                </div>
                <div className="px-6 py-4 bg-white dark:bg-[#1A314A]">
                    <h6 className="m-0 font-sans text-[16px] font-semibold leading-6 text-gray-800 dark:text-gray-50">Revenue overview</h6>
                    <p className="m-0 mt-2 font-sans text-[14px] font-medium leading-5 tracking-[0.25px] text-gray-700 dark:text-gray-400">
                        $84,290 this month, up 12% from July.<br />
                        Your top-performing channel is Direct, driving 41% of total revenue.
                    </p>
                </div>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SwitchTailwindStyling/>);
```

## Accessibility

The React Switch exposes a binary state and supports an accessible name through its label or ARIA attributes.

### Keyboard Interaction

| Key | Action |
| --- | --- |
| Tab / Shift+Tab | Moves focus to or from the switch. |
| Space | Toggles the focused switch. |

### Screen Readers / ARIA

The Switch renders an interactive control with a binary checked state. Provide visible label content or an accessible name with `aria-label` or `aria-labelledby`, and keep the label specific to the setting controlled by the switch.

- The control exposes its checked state and disabled state to assistive technology.
- The `igcChange` event is emitted when the checked state changes.

### Accessibility Compliance

Infragistics documents Ignite UI for React accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| --- | --- |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | The switch can be reached with the keyboard and toggled with Space. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | The switch exposes an accessible name and its binary checked state through the rendered control. |

## Troubleshooting

Use this section to check boundaries and common decisions before treating Switch as a form field, interactive command, or setting control.

### Why does the Switch not submit with my form?

The Switch is form-associated but requires a `name` and `value` to contribute a value when the form is submitted. Set both properties and use the form integration supported by your target platform.

### Why is the Switch not announced correctly by a screen reader?

The Switch needs an accessible name. Add visible label content or reference an external label with `aria-labelledby`; use `aria-label` when visible text is not available.

### Known Limitations

The React Switch has the following platform-independent limitations:

- A Switch represents one binary setting; use a different control when users need multiple choices or a deferred form selection.
- A Switch does not provide an accessible name automatically when it has no label or ARIA naming attribute.

## API References

See the complete React Switch API reference:

[`IgrSwitch`](mcp:get_api_reference?platform=react&component=IgrSwitch)

## Dependencies

The React Switch requires a theme stylesheet to apply its visual styling. See the framework-specific setup in [**Getting Started**](../general-getting-started.md).

## Additional Resources

Use the following React resources for API details, examples, and project support:

- [Lists - Design System Pattern](https://www.infragistics.com/products/indigo-design/help/patterns/lists)
- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

## Related Components

- [Checkbox](./checkbox.md) - Use Checkbox when users select one or more options, especially as part of a form.

- [Button](./button.md) - Use Button when the control represents a command or action rather than a setting.

## FAQ

  **Q: How do I set the Switch to its initial on or off state?**

    Set the [`checked`](mcp:get_api_reference?platform=react&component=IgrSwitch&member=checked) property to `true` for the on state or `false` for the off state. The property uses a Boolean value in React, Web Components, and Blazor syntax.
  
  **Q: How do I position the Switch label?**

    Place the label text inside the Switch and set the [`labelPosition`](mcp:get_api_reference?platform=react&component=IgrSwitch&member=labelPosition) property to `before` or `after`. The default label position is `after`.
  
  **Q: How do I submit a Switch value with a form?**

    Set both the [`name`](mcp:get_api_reference?platform=react&component=IgrSwitch&member=name) and [`value`](mcp:get_api_reference?platform=react&component=IgrSwitch&member=value) properties. In Blazor, use the `EditForm` component instead of a standard HTML `form`.
  
  **Q: How do I make a Switch required or invalid?**

    Set the [`required`](mcp:get_api_reference?platform=react&component=IgrSwitch&member=required) property when the setting must be selected, and set [`invalid`](mcp:get_api_reference?platform=react&component=IgrSwitch&member=invalid) when the control is in an invalid state. Use [`disabled`](mcp:get_api_reference?platform=react&component=IgrSwitch&member=disabled) when users must not be able to change the setting.
  

