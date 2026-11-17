---
title: "React Radio Group Component"
description: "The React Radio and Radio Group let users select exactly one option from a set of mutually exclusive options, arranged vertically or horizontally."
keywords: "Ignite UI for React, UI controls, React widgets, web widgets, UI widgets, React, Native React Components Suite, Native React Controls, Native React Components Library, React Radio Button components, React Radio Button controls, React Radio Group component, React Radio Group control"
license: MIT
last_updated: "2026-10-09"
relatedComponents: [Checkbox, Switch, Select]
mentionedTypes: ["Radio", "RadioGroup"]
llms:
  description: "The React Radio and Radio Group are components that let users select exactly one option from a set of mutually exclusive options."
_tocName: Radio Group
---
# Radio Group

The React Radio and Radio Group are components that let users select exactly one option from a set of mutually exclusive options. Each radio button represents one option, and the Radio Group arranges the radio buttons in a vertical or horizontal layout.

## Live Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.radio-overview {
    display: flex;
    align-items: center;
    justify-content: center;
}

.feedback-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-sizing: border-box;
    width: 22.5rem;
    padding: 1rem;

    /* The card of the design, in the surface color of the theme. */
    border-radius: 0.5rem;
    background: var(--ig-surface-500);
}

.feedback-title {
    color: var(--ig-gray-900);
    font-family: var(--ig-subtitle-1-font-family, var(--ig-font-family));
    font-size: var(--ig-subtitle-1-font-size);
    font-weight: var(--ig-subtitle-1-font-weight);
    line-height: var(--ig-subtitle-1-line-height);
    letter-spacing: var(--ig-subtitle-1-letter-spacing);
}

.feedback-send {
    align-self: center;
    width: 11.25rem;
    margin-top: 1rem;
}
```
```tsx
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrRadio, IgrRadioGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function RadioOverview() {
    return (
        <div className="sample radio-overview">
            <form className="feedback-form" onSubmit={(e) => e.preventDefault()}>
                <span id="feedback-title" className="feedback-title">Does our app meet your expectations?</span>
                <IgrRadioGroup name="expectations" aria-labelledby="feedback-title">
                    <IgrRadio value="exceeds" checked={true}>Exceeds expectations</IgrRadio>
                    <IgrRadio value="meets">Meets expectations</IgrRadio>
                    <IgrRadio value="below">Below expectations</IgrRadio>
                </IgrRadioGroup>
                <IgrButton type="submit" className="feedback-send">Send</IgrButton>
            </form>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<RadioOverview/>);
```

## Anatomy

The React Radio Group contains radio buttons, and each radio button is made of a radio control and a label.

**Radio Group anatomy:** The Radio Group contains radio buttons, each made of a radio control and a label.

<style>{`
  .radio-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .radio-anatomy .igd-anatomy__image {
    max-width: 237.5px;
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Radio Button Label:</strong> indicates the content you want to select or unselect<br />
<strong>2. Radio Button:</strong> indicates if the state is selected. The default state of the input is unselected<br />
<strong>3. Button Group:</strong> a container that groups related options and allows only one selection at a time</span>

The following diagram shows the element structure of the React Radio Group. Each radio button pairs its radio control with label content, which can be placed before or after the control.

```text
igc-radio-group                  — groups the radio buttons
└── igc-radio                    — one per option
    └── [part="base"]            — the <label> that wraps the input, the control, and the label
        ├── input[type="radio"]  — the native radio input
        ├── [part="control"]     — the radio control
        └── [part="label"]       — the slotted label content
```

## Getting Started

To use the React Radio and Radio Group, follow the [Ignite UI for React Getting Started](../general-getting-started.md) topic for the basic project setup, then import or register the components for your target platform.

Import the [`IgrRadio`](mcp:get_api_reference?platform=react&component=IgrRadio) and [`IgrRadioGroup`](mcp:get_api_reference?platform=react&component=IgrRadioGroup) wrappers and a theme:

```tsx
import { IgrRadio, IgrRadioGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

After registration, place the React Radio components inside a Radio Group and give the group a `name`, so that users can select only one of the options. Set `value` on each radio button to identify the selected option.

```tsx
<IgrRadioGroup name="fruit">
  <IgrRadio value="apple" checked={true}>Apple</IgrRadio>
  <IgrRadio value="banana">Banana</IgrRadio>
  <IgrRadio value="mango">Mango</IgrRadio>
</IgrRadioGroup>
```

**Note:** 
The React Radio components are mutually exclusive only when they share a `name`. The Radio Group applies its `name` to every radio button it contains; radio buttons without a `name` act independently of each other.

### Prerequisites and Version Compatibility

The React Radio and Radio Group ship in the following package. The samples in this topic are built with the version listed next to it.

| Package | Version used in the samples |
| --- | --- |
| `igniteui-react` | 19.9.0 |

## Usage

### Layout

The React Radio places its label after the radio control by default. Set the [`labelPosition`](mcp:get_api_reference?platform=react&component=IgrRadio&member=labelPosition) property to `before` to place the label before the control. In a vertical Radio Group, radio buttons with the label before the control align to the end of the group.

Place the radio buttons as direct children of the Radio Group. Radio buttons inside a wrapper element aren't part of the group, and the group doesn't lay them out.

```tsx
<IgrRadioGroup name="color">
  <IgrRadio value="yellow" labelPosition="before" checked={true}>Yellow</IgrRadio>
  <IgrRadio value="orange" labelPosition="before">Orange</IgrRadio>
</IgrRadioGroup>
```

A radio button can also be labelled by an element outside of it. Reference the element with `aria-labelledby` when you need full control over where the label sits and how it looks.

The outside element names the radio button in `igniteui-webcomponents` 7.4.1 and later. In earlier versions, the radio button gets no accessible name from it.

```tsx
<span id="radio-label">Express delivery</span>
<IgrRadio aria-labelledby="radio-label" value="express"></IgrRadio>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

/* Aktiv Grotesk, from the same Adobe Fonts kit the docs use. */
@import url("https://use.typekit.net/bng2zgw.css");

.radio-layout {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.5rem 3.75rem;
}

.radio-layout-item {
    display: flex;
    align-items: center;
    gap: 1.875rem;
}

.radio-layout-item span {
    color: var(--ig-gray-600);
    font-family: aktiv-grotesk, sans-serif;
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.3px;
}
```
```tsx
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadio, IgrRadioGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function RadioLayout() {
    return (
        <div className="sample radio-layout">
            <div className="radio-layout-item">
                <span>Label After</span>
                <IgrRadioGroup name="color-after">
                    <IgrRadio value="yellow" checked={true}>Yellow</IgrRadio>
                    <IgrRadio value="orange">Orange</IgrRadio>
                    <IgrRadio value="purple">Purple</IgrRadio>
                </IgrRadioGroup>
            </div>
            <div className="radio-layout-item">
                <IgrRadioGroup name="color-before">
                    <IgrRadio value="yellow" labelPosition="before" checked={true}>Yellow</IgrRadio>
                    <IgrRadio value="orange" labelPosition="before">Orange</IgrRadio>
                    <IgrRadio value="purple" labelPosition="before">Purple</IgrRadio>
                </IgrRadioGroup>
                <span>Label Before</span>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<RadioLayout/>);
```

### Orientation

The React Radio Group stacks its radio buttons in a column or places them in a row. Set the [`alignment`](mcp:get_api_reference?platform=react&component=IgrRadioGroup&member=alignment) property to `vertical` or `horizontal`. The default alignment is `vertical`.

```tsx
<IgrRadioGroup name="chart" alignment="horizontal">
  <IgrRadio value="line" checked={true}>Line</IgrRadio>
  <IgrRadio value="bar">Bar</IgrRadio>
  <IgrRadio value="pie">Pie</IgrRadio>
</IgrRadioGroup>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.radio-orientation {
    display: flex;
    flex-wrap: wrap;
    /* Centers the row of cards vertically, while the cards stay top-aligned to each other. */
    align-content: center;
    align-items: flex-start;
    justify-content: center;
    gap: 1.5rem 3.75rem;
}

.radio-orientation-item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-sizing: border-box;
    padding: 1rem;

    /* The card of the design, in the surface color of the theme. */
    border-radius: 0.5rem;
    background: var(--ig-surface-500);
}

.billing-cycle {
    width: 13.9375rem;
}

.chart-type {
    width: 17.1875rem;
}

.radio-orientation-title {
    color: var(--ig-gray-900);
    font-family: var(--ig-subtitle-1-font-family, var(--ig-font-family));
    font-size: var(--ig-subtitle-1-font-size);
    font-weight: var(--ig-subtitle-1-font-weight);
    line-height: var(--ig-subtitle-1-line-height);
    letter-spacing: var(--ig-subtitle-1-letter-spacing);
}
```
```tsx
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadio, IgrRadioGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function RadioOrientation() {
    return (
        <div className="sample radio-orientation">
            <div className="radio-orientation-item billing-cycle">
                <span id="billing-title" className="radio-orientation-title">Billing cycle</span>
                <IgrRadioGroup name="billing" alignment="vertical" aria-labelledby="billing-title">
                    <IgrRadio value="monthly" checked={true}>Monthly</IgrRadio>
                    <IgrRadio value="annual">Annual</IgrRadio>
                    <IgrRadio value="two-year">Two-year</IgrRadio>
                </IgrRadioGroup>
            </div>
            <div className="radio-orientation-item chart-type">
                <span id="chart-title" className="radio-orientation-title">Chart type</span>
                <IgrRadioGroup name="chart" alignment="horizontal" aria-labelledby="chart-title">
                    <IgrRadio value="line" checked={true}>Line</IgrRadio>
                    <IgrRadio value="bar">Bar</IgrRadio>
                    <IgrRadio value="pie">Pie</IgrRadio>
                </IgrRadioGroup>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<RadioOrientation/>);
```

### Interaction States

The React Radio shows a hover state when the pointer is over it and a focus ring when it receives keyboard focus. Set the [`invalid`](mcp:get_api_reference?platform=react&component=IgrRadio&member=invalid) property to show the invalid state, which draws the radio control in the error color of the theme.

```tsx
<IgrRadio value="daily" invalid={true}>Daily Updates</IgrRadio>
```

The following sample shows the hover, focused, and focused and hovered states for checked, unchecked, and invalid radio buttons.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

/* Aktiv Grotesk, from the same Adobe Fonts kit the docs use. */
@import url("https://use.typekit.net/bng2zgw.css");

.radio-states {
    display: flex;
    align-items: center;
    justify-content: center;
}

.radio-states-grid {
    display: grid;
    grid-template-columns: repeat(4, auto);
    align-items: center;
    gap: 1.875rem 3.25rem;
}

/* The enabled and the invalid rows each share the columns of the whole grid. */
.radio-states-group {
    display: grid;
    grid-column: 1 / -1;
    grid-template-columns: subgrid;
    align-items: center;
    row-gap: 1.875rem;
}

.radio-states-group + .radio-states-group {
    margin-top: 1.25rem;
}

.radio-states-grid span {
    color: var(--ig-gray-600);
    font-family: aktiv-grotesk, sans-serif;
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.3px;
}

.column-caption {
    text-align: center;
}

/* The row captions sit closer to the radios than the columns sit to each other. */
.row-caption {
    margin-inline-end: -1.3125rem;
}

/* Hover can't be turned on from code, so the hover columns take the theme's hover
   colors, and the Hover column also shows the ripple of the Material theme. */
.hover,
.focused-hover {
    --fill-color: var(--fill-color-hover);
    --label-color: var(--label-color-hover);
    --error-color: var(--error-color-hover);
}

.hover::part(ripple) {
    background: var(--empty-color);
    opacity: 0.06;
}

.hover::part(ripple checked) {
    background: var(--fill-color);
}

.hover:state(ig-invalid)::part(ripple) {
    background: var(--error-color);
}

/* Fluent also draws a dot in an off radio on hover, which no color can show. The docs
   set data-igd-theme on the page, so the hover columns draw the dot in the Fluent theme. */
[data-igd-theme='fluent'] :is(.hover, .focused-hover).off::part(control)::before {
    background: light-dark(var(--ig-gray-700), var(--ig-gray-400));
    transform: scale(0.5);
}

[data-igd-theme='fluent'] :is(.hover, .focused-hover).off:state(ig-invalid)::part(control)::before {
    background: var(--ig-error-500);
}

/* Bootstrap and Indigo darken the ring of an off radio on hover, and Bootstrap darkens
   its focus color when the radio is also focused. */
[data-igd-theme='bootstrap'] :is(.hover, .focused-hover).off:not(:state(ig-invalid))::part(control)::after {
    border-color: var(--ig-gray-500);
}

[data-igd-theme='bootstrap'] .focused-hover.off:not(:state(ig-invalid))::part(control)::after {
    border-color: hsl(from var(--ig-primary-200) h calc(s * 1.12) calc(l * 0.82));
}

[data-igd-theme='indigo'] :is(.hover, .focused-hover).off:not(:state(ig-invalid))::part(control)::after {
    border-color: light-dark(var(--ig-gray-600), hsl(from var(--ig-primary-500-contrast) h s l / 0.8));
}
```
```tsx
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadio } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const states = [
    { caption: 'Hover', label: 'Daily Updates', className: 'hover' },
    { caption: 'Focused', label: 'Weekly Updates', className: 'focused' },
    { caption: 'Focused & Hover', label: 'Monthly Updates', className: 'focused-hover' },
];

const groups = [
    {
        name: 'enabled',
        invalid: false,
        rows: [
            { caption: 'Enabled / On', checked: true },
            { caption: 'Enabled / Off', checked: false },
        ],
    },
    {
        name: 'invalid',
        invalid: true,
        rows: [
            { caption: 'Invalid / On', checked: true },
            { caption: 'Invalid / Off', checked: false },
        ],
    },
];

export default function RadioInteractionState() {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) {
            return;
        }
        // The radios only show their states, so they take no pointer or keyboard input.
        grid.setAttribute('inert', '');
        // A keyup is what turns on a radio's keyboard focus ring, so dispatching one
        // shows the focused state without moving focus to the radio.
        grid.querySelectorAll('.focused, .focused-hover').forEach((radio) => {
            radio.dispatchEvent(new KeyboardEvent('keyup'));
        });
    }, []);

    return (
        <div className="sample radio-states">
            <div className="radio-states-grid" ref={gridRef}>
                <span />
                {states.map((state) => (
                    <span key={state.caption} className="column-caption">{state.caption}</span>
                ))}
                {groups.map((group) => (
                    <div key={group.name} className="radio-states-group">
                        {group.rows.map((row) => (
                            <React.Fragment key={row.caption}>
                                <span className="row-caption">{row.caption}</span>
                                {states.map((state) => (
                                    <IgrRadio
                                        key={state.caption}
                                        className={row.checked ? state.className : `${state.className} off`}
                                        checked={row.checked}
                                        invalid={group.invalid}
                                    >
                                        {state.label}
                                    </IgrRadio>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<RadioInteractionState/>);
```

### Disabled States

Set the [`disabled`](mcp:get_api_reference?platform=react&component=IgrRadio&member=disabled) property to disable a React Radio. A disabled radio button can't be selected, and keyboard navigation skips it.

```tsx
<IgrRadioGroup name="age">
  <IgrRadio value="18-27" checked={true}>18-27</IgrRadio>
  <IgrRadio value="28-39">28-39</IgrRadio>
  <IgrRadio value="40-55" disabled={true}>40-55</IgrRadio>
</IgrRadioGroup>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.radio-disabled {
    display: flex;
    align-items: center;
    justify-content: center;
}

.age-question {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    /* The card of the design, in the surface color of the theme. */
    box-sizing: border-box;
    width: 13.9375rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background: var(--ig-surface-500);
}

.age-title {
    color: var(--ig-gray-900);
    font-family: var(--ig-subtitle-1-font-family, var(--ig-font-family));
    font-size: var(--ig-subtitle-1-font-size);
    font-weight: var(--ig-subtitle-1-font-weight);
    line-height: var(--ig-subtitle-1-line-height);
    letter-spacing: var(--ig-subtitle-1-letter-spacing);
}
```
```tsx
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadio, IgrRadioGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function RadioDisabled() {
    return (
        <div className="sample radio-disabled">
            <div className="age-question">
                <span id="age-title" className="age-title">What is your age?</span>
                <IgrRadioGroup name="age" aria-labelledby="age-title">
                    <IgrRadio value="18-27" checked={true}>18-27</IgrRadio>
                    <IgrRadio value="28-39">28-39</IgrRadio>
                    <IgrRadio value="40-55" disabled={true}>40-55</IgrRadio>
                </IgrRadioGroup>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<RadioDisabled/>);
```

### On/Off States

A React Radio is either on (checked) or off. Set the [`checked`](mcp:get_api_reference?platform=react&component=IgrRadio&member=checked) property on a radio button to turn it on, or set the [`value`](mcp:get_api_reference?platform=react&component=IgrRadioGroup&member=value) of the Radio Group to turn on the radio button with the matching value. Turning a radio button on turns off the other radio buttons in the group.

```tsx
<IgrRadioGroup name="age" value="18-27">
  <IgrRadio value="18-27">18-27</IgrRadio>
  <IgrRadio value="28-39">28-39</IgrRadio>
  <IgrRadio value="40-55">40-55</IgrRadio>
</IgrRadioGroup>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.radio-on-off {
    display: flex;
    align-items: center;
    justify-content: center;
}

.age-question {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    /* The card of the design, in the surface color of the theme. */
    box-sizing: border-box;
    width: 13.9375rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background: var(--ig-surface-500);
}

.age-title {
    color: var(--ig-gray-900);
    font-family: var(--ig-subtitle-1-font-family, var(--ig-font-family));
    font-size: var(--ig-subtitle-1-font-size);
    font-weight: var(--ig-subtitle-1-font-weight);
    line-height: var(--ig-subtitle-1-line-height);
    letter-spacing: var(--ig-subtitle-1-letter-spacing);
}
```
```tsx
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadio, IgrRadioGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function RadioOnOffState() {
    return (
        <div className="sample radio-on-off">
            <div className="age-question">
                <span id="age-title" className="age-title">What is your age?</span>
                <IgrRadioGroup name="age" aria-labelledby="age-title">
                    <IgrRadio value="18-27" checked={true}>18-27</IgrRadio>
                    <IgrRadio value="28-39">28-39</IgrRadio>
                    <IgrRadio value="40-55">40-55</IgrRadio>
                </IgrRadioGroup>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<RadioOnOffState/>);
```

### Forms

The React Radio submits the `value` of the selected radio button under the group's `name`. Set the [`required`](mcp:get_api_reference?platform=react&component=IgrRadio&member=required) property on a radio button of the group to require a selection before the form is submitted.

To show a message when the selection is missing, put it in the `value-missing` slot of a radio button. The required selection makes every radio button of the group invalid, so place the message in the last radio button to show it below the group.

```tsx
<form>
  <IgrRadioGroup name="fruit">
    <IgrRadio value="apple" required={true}>Apple</IgrRadio>
    <IgrRadio value="banana">Banana</IgrRadio>
    <IgrRadio value="orange">
      Orange
      <span slot="value-missing">Choose a fruit.</span>
    </IgrRadio>
  </IgrRadioGroup>
</form>
```

### Do/Don't

When extending a Radio Group with additional items, make sure that they are aligned consistently and form a single column. Avoid layout in multiple columns, as well as situations with more than one Radio element with on state at a time.

<div class="igd-sample-container" data-spacing="lg">
  <div class="igd-sample-frame">
    
  </div>
</div>

## Properties

The following properties cover the React Radio and Radio Group options documented on this page. See the API references for the complete generated list.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`checked`](mcp:get_api_reference?platform=react&component=IgrRadio&member=checked) | `boolean` | `false` | Gets or sets whether the radio button is on. |
| [`disabled`](mcp:get_api_reference?platform=react&component=IgrRadio&member=disabled) | `boolean` | `false` | Gets or sets whether the radio button is disabled. |
| [`invalid`](mcp:get_api_reference?platform=react&component=IgrRadio&member=invalid) | `boolean` | `false` | Gets or sets whether the radio button is in the invalid state. |
| [`labelPosition`](mcp:get_api_reference?platform=react&component=IgrRadio&member=labelPosition) | `ToggleLabelPosition` | `after` | Sets whether the label is placed before or after the radio control. |
| [`required`](mcp:get_api_reference?platform=react&component=IgrRadio&member=required) | `boolean` | `false` | Gets or sets whether a selection is required. |
| [`value`](mcp:get_api_reference?platform=react&component=IgrRadio&member=value) | `string` | — | Gets or sets the value submitted with the form when the radio button is on. |
| [`alignment`](mcp:get_api_reference?platform=react&component=IgrRadioGroup&member=alignment) (Radio Group) | `ContentOrientation` | `vertical` | Sets whether the radio buttons are stacked in a column or placed in a row. |
| [`value`](mcp:get_api_reference?platform=react&component=IgrRadioGroup&member=value) (Radio Group) | `string` | — | Gets or sets the value of the radio button that is on. |
| [`name`](mcp:get_api_reference?platform=react&component=IgrRadio&member=name) | `string` | — | Gets or sets the name that groups radio buttons together. |
| [`name`](mcp:get_api_reference?platform=react&component=IgrRadioGroup&member=name) (Radio Group) | `string` | — | Gets or sets the name applied to all radio buttons in the group. |

## Methods

The React Radio exposes the following methods.

| Name | Description |
| --- | --- |
| [`checkValidity()`](mcp:get_api_reference?platform=react&component=IgrRadio&member=checkValidity) | Checks the validity of the radio button and returns `true` when it's valid. |
| [`reportValidity()`](mcp:get_api_reference?platform=react&component=IgrRadio&member=reportValidity) | Checks the validity of the radio button, shows its invalid state when it isn't valid, and returns `true` when it's valid. |
| [`setCustomValidity(message)`](mcp:get_api_reference?platform=react&component=IgrRadio&member=setCustomValidity) | Sets a custom validation message. Pass an empty string to clear it. |
| [`click()`](mcp:get_api_reference?platform=react&component=IgrRadio&member=click) | Simulates a click on the radio button, which turns it on. |
| [`focus()`](mcp:get_api_reference?platform=react&component=IgrRadio&member=focus) | Moves focus to the radio button. |
| [`blur()`](mcp:get_api_reference?platform=react&component=IgrRadio&member=blur) | Removes focus from the radio button. |

## Events

The React Radio emits an event when the user turns a radio button on.

| Name | Description |
| --- | --- |
| [`onChange`](mcp:get_api_reference?platform=react&component=IgrRadio&member=onChange) | Emitted when the checked state of a radio button changes. The event arguments carry the `checked` state and the `value` of the radio button. |

## Styling

The React Radio is styled through the Ignite UI for React theme and the CSS variables it generates. CSS parts give you access to the internal elements of the radio button. The following sample draws the radio buttons of a shipping form with a custom palette and typeface.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

/* Aktiv Grotesk, from the same Adobe Fonts kit the docs use. */
@import url("https://use.typekit.net/bng2zgw.css");

.radio-styling {
    display: flex;
    align-items: center;
    justify-content: center;
}

.shipping-card {
    /* The design's own palette. It is set here instead of coming from the theme,
       so the sample keeps its look in every theme. */
    --shipping-surface: #fff;
    --shipping-primary: #0176ff;
    --shipping-title: #00142b;
    --shipping-ink: #002b5c;
    --shipping-gray-100: #f3f6fa;
    --shipping-gray-300: #d2dbe8;
    --shipping-gray-400: #a9b8cc;
    --shipping-gray-600: #556c86;

    /* The colors of the hover and focus effects the theme draws around the radio. */
    --ig-radio-fill-color: var(--shipping-primary);
    --ig-radio-empty-color: var(--shipping-gray-400);

    box-sizing: border-box;
    width: 21.75rem;
    border: 1px solid var(--shipping-gray-300);
    border-radius: 1rem;
    background: var(--shipping-surface);
    font-family: aktiv-grotesk, sans-serif;
}

.shipping-header {
    box-sizing: border-box;
    height: 3.75rem;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--shipping-gray-300);
}

.shipping-title {
    color: var(--shipping-title);
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
    letter-spacing: 0.15px;
}

.shipping-methods {
    gap: 0;
    padding: 1rem 1.5rem;
}

.shipping-method::part(base) {
    gap: 0.125rem;
}

.shipping-method::part(label) {
    color: var(--shipping-ink);
    font-family: aktiv-grotesk, sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1rem;
    letter-spacing: 0.15px;
}

.shipping-detail {
    color: var(--shipping-gray-600);
}

.shipping-method[disabled]::part(label),
.shipping-method[disabled] .shipping-detail {
    color: var(--shipping-gray-400);
}

/* The design draws the radio as a 2px ring with a 10px dot in a 40px slot. Each
   theme draws the radio its own way, so the whole radio is drawn here. */
.shipping-method::part(control) {
    width: 2.5rem;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
}

.shipping-method::part(control)::before,
.shipping-method::part(control)::after {
    top: 50%;
    left: 50%;
    width: 1.25rem;
    min-width: 0;
    height: 1.25rem;
    border-radius: 50%;
}

/* The ring */
.shipping-method::part(control)::after {
    transform: translate(-50%, -50%);
    border: 0.125rem solid var(--shipping-gray-400);
    background: var(--shipping-surface);
}

.shipping-method::part(control checked)::after {
    border-color: var(--shipping-primary);
}

.shipping-method[disabled]::part(control)::after {
    border-color: var(--shipping-gray-300);
    background: var(--shipping-gray-100);
}

/* The dot */
.shipping-method::part(control)::before {
    transform: translate(-50%, -50%) scale(0);
    border: none;
    background: var(--shipping-primary);
}

.shipping-method::part(control checked)::before {
    transform: translate(-50%, -50%) scale(0.5);
}
```
```tsx
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadio, IgrRadioGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const methods = [
    { value: 'standard', name: 'Standard', detail: '(2-4 business days)', checked: true },
    { value: 'express', name: 'Express', detail: '(next day by 6 pm)' },
    { value: 'pickup', name: 'Pickup point', detail: '(400 + locations)' },
    { value: 'same-day', name: 'Same-day', detail: '(not available)', disabled: true },
];

export default function RadioStyling() {
    return (
        <div className="sample radio-styling">
            <div className="shipping-card">
                <div className="shipping-header">
                    <span id="shipping-title" className="shipping-title">Shipping method</span>
                </div>
                <IgrRadioGroup className="shipping-methods" name="shipping" aria-labelledby="shipping-title">
                    {methods.map((method) => (
                        <IgrRadio
                            key={method.value}
                            className="shipping-method"
                            value={method.value}
                            checked={method.checked}
                            disabled={method.disabled}
                        >
                            {method.name} <span className="shipping-detail">{method.detail}</span>
                        </IgrRadio>
                    ))}
                </IgrRadioGroup>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<RadioStyling/>);
```

### Sass Theming

Create a theme with the `radio-theme` function and include it with the `tokens` mixin. Setting `$empty-color` and `$fill-color` is enough for a fully styled radio button, because the theme derives the remaining colors from them.

```scss
@use "igniteui-theming" as *;

$custom-radio-theme: radio-theme(
  $empty-color: #345779,
  $fill-color: #2dabe8,
);

:root {
  @include tokens($custom-radio-theme);
}
```

When you set a primary parameter, the theme derives its dependent parameters:

| Primary parameter | Dependent parameters | What it changes |
| --- | --- | --- |
| `$empty-color` | `$hover-color`, `$focus-outline-color` (Indigo) | The border of an unchecked radio button. |
| `$fill-color` | `$fill-color-hover`, `$fill-hover-border-color`, `$focus-border-color` (Bootstrap), `$focus-outline-color` (Bootstrap), `$focus-outline-color-filled` (Indigo) | The border and dot of a checked radio button. |
| `$label-color` | `$label-color-hover` | The label text. |
| `$error-color` | `$error-color-hover`, `$focus-outline-color-error` | The label, border, and dot in the invalid state. |

### CSS Variables

Set the following CSS variables on a radio button, or on one of its ancestors, to change its colors without a Sass theme:

| Variable | What it changes |
| --- | --- |
| `--ig-radio-label-color` | The label text. |
| `--ig-radio-empty-color` | The border of an unchecked radio button. |
| `--ig-radio-empty-fill-color` | The fill of an unchecked radio button. |
| `--ig-radio-fill-color` | The border and dot of a checked radio button. |
| `--ig-radio-hover-color` | The border and dot on hover. |
| `--ig-radio-fill-color-hover` | The dot of a checked radio button on hover. |
| `--ig-radio-error-color` | The label, border, and dot in the invalid state. |
| `--ig-radio-disabled-color` | The border and dot of a disabled radio button. |
| `--ig-radio-disabled-label-color` | The label of a disabled radio button. |
| `--ig-radio-focus-outline-color` | The focus outline. |

### Style Parts

Use the following CSS parts to target the internal elements of the React Radio. Each part also carries the `checked` part name while the radio button is on, so `::part(control checked)` targets only a checked radio control.

| Part | What it styles |
| --- | --- |
| `base` | The wrapper of the radio control and the label. |
| `control` | The radio control. |
| `label` | The label. |

```css
igc-radio {
  --ig-radio-fill-color: #0176ff;
  --ig-radio-empty-color: #a9b8cc;
}

igc-radio::part(label) {
  color: #002b5c;
  font-weight: 600;
}
```

### Styling with Tailwind

You can style the React Radio with the custom Tailwind utility classes from `igniteui-theming`. Make sure to [set up Tailwind](/themes/tailwind) first, then import the utilities in your global stylesheet:

```css
@import "tailwindcss";
@import "igniteui-theming/tailwind/utilities/material.css";
```

Use the `light-radio` or `dark-radio` class for the corresponding theme and override its CSS variables with arbitrary properties:

```tsx
<IgrRadio className="!light-radio ![--empty-color:#576E60] ![--fill-color:#7B9E89]" value="tokyo">Tokyo</IgrRadio>
```

The exclamation mark (`!`) gives the Tailwind utility precedence over the default theme styles of the Radio.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

/* Keep this order. An @import after the Tailwind imports is dropped, and in
   the samples browser one before the @layer statement drops the Tailwind
   imports, so Aktiv Grotesk goes between them. */
@layer theme, base, components, utilities;
@import url("https://use.typekit.net/bng2zgw.css");
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);
@source "./index.tsx";

@theme {
    /* The design's own palette. It lives here instead of coming from the theme
       palette, so the sample keeps its colors in every theme. */
    --color-export-primary: #0176ff;
    --color-export-primary-strong: #006ae6;
    --color-export-tint: #e6f2ff;
    --color-export-tint-strong: #cce4ff;
    --color-export-title: #00142b;
    --color-export-ink: #002b5c;
    --color-export-muted: #556c86;
    --color-export-divider: #d2dbe8;
    --color-export-empty: #a9b8cc;
    --color-export-cancel: #616161;
}

/* The design draws the radio as a 2px ring with a 10px dot in a 40px slot. Each
   theme draws the radio its own way, so the whole radio is drawn here. */
.format-option::part(base) {
    gap: 0.125rem;
}

.format-option::part(control) {
    width: 2.5rem;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
}

.format-option::part(control)::before,
.format-option::part(control)::after {
    top: 50%;
    left: 50%;
    width: 1.25rem;
    min-width: 0;
    height: 1.25rem;
    border-radius: 50%;
}

/* The ring */
.format-option::part(control)::after {
    transform: translate(-50%, -50%);
    border: 0.125rem solid var(--color-export-empty);
    background: white;
}

.format-option::part(control checked)::after {
    border-color: var(--color-export-primary);
}

/* The dot */
.format-option::part(control)::before {
    transform: translate(-50%, -50%) scale(0);
    border: none;
    background: var(--color-export-primary);
}

.format-option::part(control checked)::before {
    transform: translate(-50%, -50%) scale(0.5);
}
```
```tsx
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrRadio, IgrRadioGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const formats = [
    { value: 'pdf', label: 'PDF Document' },
    { value: 'xls', label: 'XLS Editable spreadsheet' },
    { value: 'csv', label: 'CSV Raw data, no styling' },
];

const radioLabel = 'text-xs font-semibold leading-4 tracking-[0.15px] text-export-ink';

// The base part is styled directly, so the buttons keep the design's look in every theme.
// Without the theme's shadow, the focused button shows an outline instead.
const button =
    '[&::part(base)]:h-[30px] [&::part(base)]:min-w-0 [&::part(base)]:px-3 [&::part(base)]:shadow-none ' +
    '[&::part(base)]:text-sm [&::part(base)]:font-semibold [&::part(base)]:normal-case [&::part(base)]:leading-4 [&::part(base)]:tracking-[0.75px] ' +
    '[&::part(base_focused)]:outline-2 [&::part(base_focused)]:outline-offset-2 [&::part(base_focused)]:outline-export-primary';

const cancelButton =
    button + ' [&::part(base)]:rounded [&::part(base)]:border-transparent [&::part(base)]:bg-transparent ' +
    '[&::part(base)]:text-export-cancel [&::part(base):hover]:bg-export-tint-strong';

const exportButton =
    button + ' [&::part(base)]:rounded-lg [&::part(base)]:border-export-primary [&::part(base)]:bg-export-primary ' +
    '[&::part(base)]:text-white [&::part(base):hover]:border-export-primary-strong [&::part(base):hover]:bg-export-primary-strong';

export default function RadioTailwindStyling() {
    const [format, setFormat] = useState('csv');

    return (
        <div className="sample flex items-center justify-center">
            <div className="box-border flex w-[280px] flex-col overflow-hidden rounded-2xl border border-export-divider bg-white font-[aktiv-grotesk,sans-serif] [--ig-font-family:aktiv-grotesk,sans-serif] [--ig-radio-empty-color:var(--color-export-empty)] [--ig-radio-fill-color:var(--color-export-primary)]">
                <div className="flex flex-col border-b border-export-divider p-4 font-semibold tracking-[0.15px]">
                    <span id="export-title" className="text-base leading-6 text-export-title">Export report</span>
                    <span className="text-xs leading-4 text-export-muted">Choose a format to export</span>
                </div>
                <IgrRadioGroup className="gap-0 px-6 py-3.5" name="format" aria-labelledby="export-title">
                    {formats.map((option) => (
                        <IgrRadio
                            key={option.value}
                            className="format-option"
                            value={option.value}
                            checked={option.value === format}
                            onChange={(e) => {
                                if (e.detail.checked) {
                                    setFormat(option.value);
                                }
                            }}
                        >
                            <span className={radioLabel}>{option.label}</span>
                        </IgrRadio>
                    ))}
                </IgrRadioGroup>
                <div className="flex justify-end gap-4 bg-export-tint p-4">
                    <IgrButton variant="flat" className={cancelButton}>Cancel</IgrButton>
                    <IgrButton variant="contained" className={exportButton}>Export as {format.toUpperCase()}</IgrButton>
                </div>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<RadioTailwindStyling/>);
```

## Accessibility

The React Radio renders a native radio input, so assistive technologies announce each radio button with its role, label, and checked state.

### Keyboard Interaction

The React Radio Group moves focus and selection between its enabled radio buttons with the arrow keys. Disabled radio buttons are skipped.

| Key | Action |
| --- | --- |
| Tab / Shift+Tab | Moves focus into or out of the Radio Group. |
| Arrow Down / Arrow Right | Moves focus to the next enabled radio button and turns it on. From the last radio button, moves to the first one. In right-to-left layouts, Arrow Right moves to the previous radio button. |
| Arrow Up / Arrow Left | Moves focus to the previous enabled radio button and turns it on. From the first radio button, moves to the last one. In right-to-left layouts, Arrow Left moves to the next radio button. |
| Space | Turns on the focused radio button. |
| Enter | Submits the form that contains the radio button. |

When a radio button in the group is on, it is the only tab stop of the group. When none of the radio buttons is on, each of them is a tab stop.

### Screen Readers / ARIA

- Each React Radio renders a native `<input type="radio">`, which exposes the radio role, the checked state, and the disabled and required states.
- The label content of the radio button is its accessible name. When the label is outside the component, connect it with `aria-labelledby`.

- The Radio Group renders the `radiogroup` role and sets `aria-orientation` from its `alignment`.

- Give the Radio Group an accessible name, for example with `aria-labelledby` pointing to the question it answers.

### Accessibility Compliance

Verify the rendered React Radio and Radio Group against the accessibility requirements of your application.

| Criterion | How the component supports the requirement |
| --- | --- |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | Users move between the enabled radio buttons and turn them on with the arrow keys and Space. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | Each radio button exposes its label as the accessible name, the radio role, and its checked state through the native radio input. |

Your responsibilities:

- Give every radio button meaningful label content, and give the Radio Group an accessible name.
- Keep the focus ring visible and preserve sufficient contrast when you customize the Radio colors.
- Show a validation message when the Radio is invalid, so the error isn't conveyed by color alone. Use the `value-missing` slot, as shown in [Forms](#forms).
- Test the rendered Radio Group with keyboard navigation and the assistive technologies your users rely on.

## API References

See the complete React Radio and Radio Group API references:

- [`IgrRadio`](mcp:get_api_reference?platform=react&component=IgrRadio)

- [`IgrRadioGroup`](mcp:get_api_reference?platform=react&component=IgrRadioGroup)

## Dependencies

The React Radio requires a theme stylesheet to apply its visual styling. See the framework-specific setup in [**Getting Started**](../general-getting-started.md).

## Additional Resources

Use the following React resources for API details and project support:

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

## Related Components

The React Radio is intended for one choice from a short list of mutually exclusive options. Use the following related components for other kinds of choices:

- [Checkbox](./checkbox.md) - Use Checkbox when users can select more than one option.
- [Switch](./switch.md) - Use Switch when the control turns a single setting on or off immediately.
- [Select](./select.md) - Use Select when the list of options is long or space is limited.

## FAQ

These frequently asked questions cover common React Radio and Radio Group selection, form, and state scenarios.

  **Q: How do I get the selected value when the user changes the selection?**

    Handle the `onChange` event on the React Radio Group. The change event arguments carry the `value` of the radio button the user turned on. The change event doesn't fire when you set the Radio Group `value` in code.
  
  **Q: How do I select a radio button from code?**

    Set the React Radio Group `value` to the `value` of the radio button you want to turn on. You can also set `checked` on that radio button, which turns off the other radio buttons in the group. Selecting a radio button in code doesn't fire the change event.
  
  **Q: How do I clear the selection of a Radio Group?**

    Users can't turn off a selected React Radio by clicking it again, which is the standard radio button behavior. To clear the selection in code, set the Radio Group `value` to an empty string or another value that none of its radio buttons has. If users need to clear the selection themselves, add a "None" option or a separate clear button.
  
  **Q: Why can more than one radio button be on at the same time?**

    React Radio buttons are mutually exclusive only when they share the same `name`, so radio buttons without a shared `name` can be on at the same time. Set `name` on the Radio Group, which applies it to all of its radio buttons, or set the same `name` on each radio button.
  
  **Q: How do I make a selection required in a form?**

    Set `required` on any radio button of the React Radio Group, and the whole group requires a selection before the form can be submitted. When the form is submitted, the group's `name` is sent with the `value` of the selected radio button.
  
  **Q: How do I disable all radio buttons of a Radio Group?**

    The React Radio Group doesn't have a `disabled` property of its own. To disable the whole group, set `disabled` on each of its radio buttons, for example by binding all of them to the same state.
  

