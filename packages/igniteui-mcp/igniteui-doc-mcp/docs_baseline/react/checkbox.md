---
title: "Checkbox"
description: "The React Checkbox lets users select, clear, or set an indeterminate option in forms and interactive interfaces."
keywords: "Ignite UI for React, UI controls, React widgets, web widgets, UI widgets, React, Native React Components Suite, Native React Controls, Native React Components Library, React Checkbox components, React Checkbox controls"
license: MIT
last_updated: "2026-08-25"
relatedComponents: [Switch]
mentionedTypes: ["Checkbox"]
llms:
  description: "The React Checkbox is a component that lets you add checkboxes to your React apps."
_tocName: Checkbox
---
# React Checkbox Component

The React Checkbox is a component that lets you add checkboxes to your React apps. It behaves as a standard HTML checkbox, enabling users to select basic checked and unchecked states or an additional indeterminate state. You also get full control over the styling of the React checkbox component and ability to use it with forms.

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

.shopping-list {
    position: relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 1rem;
    width: 22.5rem;
    height: 24.3125rem;
    padding: 1rem 0;
    border-radius: 0.25rem;
    background: var(--ig-surface-100);
    box-shadow: 0 0.0625rem 0.25rem rgb(0 0 0 / 16%);
}

.list {
    background: transparent;
    border: none;
    gap: 0.25rem;
}

.group-header {
    padding: 0 1rem;
    background: transparent;
    font-family: var(--ig-font-family);
    font-size: var(--ig-overline-font-size);
    font-weight: var(--ig-overline-font-weight);
    line-height: var(--ig-overline-line-height);
    letter-spacing: var(--ig-overline-letter-spacing);
    text-transform: var(--ig-overline-text-transform);
}

.shopping-item + .group-header {
    margin-top: 0.75rem;
}

.group-title {
    color: var(--ig-secondary-500);
}

.shopping-item {
    padding: 0 1rem;
    gap: 0.5rem;
    background: transparent;
    border-bottom: none;
    --border-color: transparent;
    --border-width: 0;
}

.shopping-item:hover,
.shopping-item:focus-within {
    background: transparent;
}

.shopping-item::part(content) {
    display: none;
}

.shopping-item::part(start) {
    margin-inline-start: 0.125rem;
}

.shopping-item::part(end) {
    margin-inline-start: auto;
}

.shopping-item igc-checkbox::part(base) {
    gap: 1.125rem;
}

.shopping-item-checked,
.shopping-item-checked:hover,
.shopping-item-checked:focus-within {
    background: var(--ig-gray-100);
}

.item-menu::part(base) {
    color: var(--ig-gray-700);
}

.add-item {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
}

.add-item::part(base) {
    border-radius: 50%;
}
```
```tsx
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrCheckbox, IgrIcon, IgrIconButton, IgrList, IgrListHeader, IgrListItem, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const icons = [
    { name: 'more_vert', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>' },
    { name: 'add', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>' },
];

interface ShoppingItem {
    label: string;
    checked: boolean;
}

interface ShoppingGroup {
    title: string;
    items: ShoppingItem[];
}

const initialGroups: ShoppingGroup[] = [
    {
        title: 'Grocery store',
        items: [
            { label: 'Bread', checked: false },
            { label: 'Milk 4l', checked: false },
            { label: 'Eggs 1 pack', checked: true },
        ],
    },
    {
        title: 'Fruit and vegetable shop',
        items: [
            { label: 'Strawberries', checked: false },
            { label: 'Lemons', checked: false },
            { label: 'Single Line Item', checked: true },
        ],
    },
];

export default function CheckboxOverview() {
    const [groups, setGroups] = useState<ShoppingGroup[]>(initialGroups);

    useEffect(() => {
        icons.forEach((icon) => registerIconFromText(icon.name, icon.text, 'material'));
    }, []);

    const toggleItem = (groupIndex: number, itemIndex: number, checked: boolean) => {
        setGroups((current) =>
            current.map((group, gi) =>
                gi !== groupIndex
                    ? group
                    : {
                          ...group,
                          items: group.items.map((item, ii) => (ii === itemIndex ? { ...item, checked } : item)),
                      }
            )
        );
    };

    return (
        <div className="sample">
            <div className="shopping-list">
                <IgrList className="list">
                    {groups.map((group, groupIndex) => [
                        <IgrListHeader className="group-header" key={group.title}>
                            <span className="group-title">{group.title}</span>
                        </IgrListHeader>,
                        ...group.items.map((item, itemIndex) => (
                            <IgrListItem
                                className={item.checked ? 'shopping-item shopping-item-checked' : 'shopping-item'}
                                key={item.label}
                            >
                                <IgrCheckbox
                                    slot="start"
                                    checked={item.checked}
                                    onChange={(e) => toggleItem(groupIndex, itemIndex, e.detail.checked)}
                                >
                                    <span>{item.label}</span>
                                </IgrCheckbox>
                                <IgrIconButton slot="end" variant="flat" className="item-menu">
                                    <IgrIcon name="more_vert" collection="material" />
                                </IgrIconButton>
                            </IgrListItem>
                        )),
                    ])}
                </IgrList>
                <IgrButton variant="fab" className="add-item">
                    <IgrIcon name="add" collection="material" />
                </IgrButton>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<CheckboxOverview/>);
```

## Anatomy

The React Checkbox renders a selectable control with an optional label.

**Checkbox anatomy:** The Checkbox component presents a selectable control with checked, unchecked, and indeterminate states.

<style>{`
  .checkbox-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .checkbox-anatomy .igd-anatomy__image {
    max-width: 142.5px;
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Checkbox Indicator:</strong> indicates the current state. By default it is unselected. Could be before or after the label<br />
<strong>2. Label (optional):</strong> specifies the target data available for selection and deselection</span>

The React Checkbox consists of an indicator and optional label content. Set the label position when the label should appear before or after the indicator.

```text
Checkbox
├── Checkbox Indicator
└── Label (optional)
```

## Getting Started

To use the React Checkbox, follow the [Ignite UI for React Getting Started](../general-getting-started.md) topic for the basic project setup, then install or register the component for your target platform.

Using the **** package, install the package before importing the Checkbox wrapper:

```cmd
npm install igniteui-react
```

Then import the React Checkbox wrapper and the theme CSS:

```tsx
import { IgrCheckbox } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

After registration, render the [`IgrCheckbox`](mcp:get_api_reference?platform=react&component=IgrCheckbox) with the platform-specific element or wrapper:

```tsx
<IgrCheckbox></IgrCheckbox>
```

## Usage

At its core, the [`IgrCheckbox`](mcp:get_api_reference?platform=react&component=IgrCheckbox) lets users choose between selected and unselected states, with support for an indeterminate state when an option represents a partial selection.

You can specify if the label should be positioned before or after the checkbox toggle by setting the [`LabelPosition`](mcp:get_api_reference?platform=react&component=IgrCheckbox&member=labelPosition) attribute of the checkbox. Allowed values are `before` and `after` (default):

```tsx
<IgrCheckbox labelPosition="before"></IgrCheckbox>
```

The checkbox can also be labelled by elements external to the checkbox. In this case, the user is given full control to position and style the label in accordance with their needs.

```tsx
  <span id="checkbox-label">Label</span>
  <IgrCheckbox aria-labelledby="checkbox-label" labelPosition="before"></IgrCheckbox>
```

### States

The Checkbox supports different state-related attributes. You can use the [`checked`](mcp:get_api_reference?platform=react&component=IgrCheckbox&member=checked) attribute to set the initial state of the checkbox to on or off.

```tsx
<IgrCheckbox checked={true}></IgrCheckbox>
```

You can use the [`indeterminate`](mcp:get_api_reference?platform=react&component=IgrCheckbox&member=indeterminate) attribute to set the checkbox's value to neither **true** nor **false**.

```tsx
<IgrCheckbox indeterminate={true}></IgrCheckbox>
```

You can use the [`disabled`](mcp:get_api_reference?platform=react&component=IgrCheckbox&member=disabled) attribute to disable the Checkbox.

```tsx
<IgrCheckbox disabled={true}></IgrCheckbox>
```

You can use the [`invalid`](mcp:get_api_reference?platform=react&component=IgrCheckbox&member=invalid) attribute to mark the Checkbox as invalid.

```tsx
<IgrCheckbox invalid={true}></IgrCheckbox>
```

You can use the [`required`](mcp:get_api_reference?platform=react&component=IgrCheckbox&member=required) property to mark the Checkbox as required.

```tsx
<IgrCheckbox required={true}></IgrCheckbox>
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

.states {
	display: flex;
	align-items: flex-end;
	gap: 4.5rem;
}

.state {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.75rem;
}

.state igc-checkbox::part(base) {
	cursor: default;
}

.state-label {
	font: 500 14px / 24px "Aktiv Grotesk", sans-serif;
	letter-spacing: 0.1px;
	color: var(--ig-gray-600);
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCheckbox } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

// the checkboxes are display-only, so user interaction is blocked
function preventToggle(e: React.SyntheticEvent) {
    e.preventDefault();
}

export default function CheckboxStates() {
    return (
        <div className="sample">
            <div className="states" onClickCapture={preventToggle} onKeyDownCapture={preventToggle}>
                <div className="state">
                    <span className="state-label">Indeterminate</span>
                    <IgrCheckbox indeterminate={true} aria-label="Indeterminate" />
                </div>
                <div className="state">
                    <span className="state-label">On</span>
                    <IgrCheckbox checked={true} aria-label="On" />
                </div>
                <div className="state">
                    <span className="state-label">Off</span>
                    <IgrCheckbox aria-label="Off" />
                </div>
                <div className="state">
                    <span className="state-label">Disabled</span>
                    <IgrCheckbox disabled={true} aria-label="Disabled" />
                </div>
                <div className="state">
                    <span className="state-label">Invalid</span>
                    <IgrCheckbox invalid={true} aria-label="Invalid" />
                </div>
                <div className="state">
                    <span className="state-label">Required</span>
                    <IgrCheckbox required={true} aria-label="Required" />
                </div>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<CheckboxStates/>);
```

### Do/Don't

When many Checkboxes are necessary, arrange them in a column group so users can quickly scan the list. Fewer Checkboxes may be arranged on a single line next to each other, but avoid arranging them in multiple columns.

<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin: 24px 0 16px;">
  
  
</div>

<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px;">
  <div>
    <p style="color: #258b3b; font-weight: 600; margin: 0 0 8px;">Do</p>
    <p style="margin: 0;">Stack checkboxes vertically in a single column to make options easy to scan and read.</p>
  </div>
  <div>
    <p style="color: #e40046; font-weight: 600; margin: 0 0 8px;">Don't</p>
    <p style="margin: 0;">Avoid arranging checkboxes into multiple columns, as this breaks vertical reading patterns and makes scanning difficult.</p>
  </div>
</div>

## Properties

The following properties cover the main Checkbox configuration options documented on this page. See the full API reference for the complete generated list.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`checked`](mcp:get_api_reference?platform=react&component=IgrCheckbox&member=checked) | `boolean` | `false` | Gets or sets whether the checkbox is selected. |
| [`indeterminate`](mcp:get_api_reference?platform=react&component=IgrCheckbox&member=indeterminate) | `boolean` | `false` | Gets or sets whether the checkbox is in an indeterminate state. |
| [`labelPosition`](mcp:get_api_reference?platform=react&component=IgrCheckbox&member=labelPosition) | `ToggleLabelPosition` | `after` | Sets the position of the checkbox label. |
| [`required`](mcp:get_api_reference?platform=react&component=IgrCheckbox&member=required) | `boolean` | `false` | Gets or sets whether the Checkbox is required. |
| [`invalid`](mcp:get_api_reference?platform=react&component=IgrCheckbox&member=invalid) | `boolean` | `false` | Gets or sets whether the Checkbox is invalid. |
| [`disabled`](mcp:get_api_reference?platform=react&component=IgrCheckbox&member=disabled) | `boolean` | `false` | Gets or sets whether the Checkbox is disabled. |
| [`value`](mcp:get_api_reference?platform=react&component=IgrCheckbox&member=value) | `string` | — | Gets or sets the value used when the Checkbox is submitted with a form. |
| [`name`](mcp:get_api_reference?platform=react&component=IgrCheckbox&member=name) | `string` | — | Gets or sets the name used when the Checkbox is submitted with a form. |

## Styling

The React Checkbox uses CSS parts and CSS variables to customize its appearance.

### Sass Theming

Use the Ignite UI for React theme system to style the Checkbox consistently with the rest of your application. Verify the available Sass theme parameters in the API documentation before adding a custom theme.

### CSS Variables

Use the following styling properties to customize the Checkbox indicator and selected-state appearance:

| Variable | What it changes |
| --- | --- |
| `--tick-color` | The color of the check icon. |
| `--fill-color` | The background color of the selected checkbox. |

### Style Parts

Use the following CSS parts to target the Checkbox structure:

| Part | What it styles |
| --- | --- |
| `base` | The base wrapper of the Checkbox. |
| `control` | The checkbox control element. |
| `indicator` | The checkbox indicator icon. |
| `label` | The Checkbox label. |

### Custom Styling

The following selectors customize the Checkbox indicator color and selected-state fill:

| Selector | Declaration | Effect |
| --- | --- | --- |
| `igc-checkbox::part(indicator)` | `--tick-color` | Changes the check icon color. |
| `igc-checkbox::part(control checked)::after` | `--fill-color` | Changes the selected checkbox background color. |

```css
igc-checkbox::part(indicator) {
  --tick-color: var(--ig-secondary-500-contrast); /* check icon color */
}
```

```css
igc-checkbox::part(control checked)::after {
  --fill-color: var(--ig-secondary-500); /* checkbox background color */
}
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

@import url("https://use.typekit.net/bng2zgw.css");

.sample {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
}

.team-card {
    /* The design's own palette and typeface. They are set here instead of
       coming from the theme, so the sample keeps its custom look in every theme. */
    --team-surface: #fff;
    --team-primary: #0176ff;
    --team-gray-100: #f3f6fa;
    --team-gray-200: #e5ebf3;
    --team-gray-400: #a9b8cc;
    --team-gray-500: #7d91ab;
    --team-gray-600: #556c86;
    --team-gray-700: #344b65;
    --team-gray-900: #00142b;
    /* aktiv-grotesk is the kit's family name. */
    --ig-font-family: aktiv-grotesk, sans-serif;

    --ig-checkbox-empty-color: var(--team-gray-400);
    --ig-checkbox-empty-color-hover: var(--team-gray-400);
    --ig-checkbox-fill-color: var(--team-primary);
    --ig-checkbox-fill-color-hover: var(--team-primary);
    --ig-checkbox-tick-color: #fff;
    --ig-checkbox-tick-color-hover: #fff;

    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 26.3125rem;
    padding: 0.5rem 0;
    border: 1px solid var(--team-gray-200);
    border-radius: 0.75rem;
    background: var(--team-surface);
    font-family: var(--ig-font-family);
}

.team-title {
    display: flex;
    align-items: center;
    height: 2rem;
    margin: 0;
    padding: 0 1rem;
    color: var(--team-gray-500);
    font-size: 10px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
}

.select-all {
    --ig-checkbox-empty-color: var(--team-gray-500);
    --ig-checkbox-empty-color-hover: var(--team-gray-500);
}

.select-all::part(base) {
    box-sizing: border-box;
    width: 100%;
    justify-content: space-between;
    padding: 0.5rem 1rem;
}

.select-all::part(label) {
    color: var(--team-gray-600);
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
    letter-spacing: 0.15px;
}

/* A 24px slot around the 20px box, as in the design, without the padding the
   theme adds around the box for its ripple. */
.select-all::part(control),
.member-check::part(control) {
    margin: 0.125rem;
    padding: 0;
}

.members {
    background: transparent;
    border: none;
    overflow: hidden;
}

.member {
    gap: 1rem;
    padding: 0.5rem 1rem;
    background: transparent;
    border-bottom: none;
    --border-color: transparent;
    --border-width: 0;
}

.member:hover,
.member:focus-within {
    background: transparent;
}

.member-selected,
.member-selected:hover,
.member-selected:focus-within {
    background: var(--team-gray-100);
}

.member igc-avatar {
    --ig-size: var(--ig-size-small);
}

.member-name {
    display: block;
    color: var(--team-gray-900);
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.125rem;
}

.member-email {
    display: block;
    color: var(--team-gray-700);
    font-size: 0.75rem;
    line-height: 1rem;
    letter-spacing: 0.4px;
}

.continue-button {
    align-self: flex-end;
    margin: 1rem 1rem 0;
}

.continue-button::part(base) {
    min-width: auto;
    width: 5.25rem;
    height: 1.875rem;
    padding: 0 0.75rem;
    border-color: var(--team-primary);
    background: var(--team-primary);
    color: #fff;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.375rem;
    letter-spacing: 0.1px;
    text-transform: none;
}
```
```tsx
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAvatar, IgrButton, IgrCheckbox, IgrList, IgrListItem } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

interface TeamMember {
    name: string;
    email: string;
    avatar: string;
    selected: boolean;
}

const initialMembers: TeamMember[] = [
    { name: 'Emily Potter', email: 'emily@team.com', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-06.png', selected: false },
    { name: 'Alex Lima', email: 'alex@team.com', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-05.png', selected: true },
    { name: 'Mateo García', email: 'mateo@team.com', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-07.png', selected: false },
    { name: 'Kate Roberts', email: 'kate@team.com', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-08.png', selected: false },
];

export default function CheckboxStyling() {
    const [members, setMembers] = useState<TeamMember[]>(initialMembers);

    const allSelected = members.every((member) => member.selected);
    const someSelected = members.some((member) => member.selected);

    const toggleAll = (checked: boolean) => {
        setMembers((current) => current.map((member) => ({ ...member, selected: checked })));
    };

    const toggleMember = (index: number, checked: boolean) => {
        setMembers((current) => current.map((member, i) => (i === index ? { ...member, selected: checked } : member)));
    };

    return (
        <div className="sample">
            <div className="team-card">
                <p className="team-title">Team members</p>

                <IgrCheckbox
                    className="select-all"
                    labelPosition="before"
                    checked={allSelected}
                    indeterminate={someSelected && !allSelected}
                    onChange={(e) => toggleAll(e.detail.checked)}
                >
                    <span>Select all</span>
                </IgrCheckbox>

                <IgrList className="members">
                    {members.map((member, index) => (
                        <IgrListItem
                            className={member.selected ? 'member member-selected' : 'member'}
                            key={member.email}
                        >
                            <IgrAvatar slot="start" src={member.avatar} shape="circle" alt={member.name} />
                            <span slot="title" className="member-name">{member.name}</span>
                            <span slot="subtitle" className="member-email">{member.email}</span>
                            <IgrCheckbox
                                slot="end"
                                className="member-check"
                                aria-label={member.name}
                                checked={member.selected}
                                onChange={(e) => toggleMember(index, e.detail.checked)}
                            />
                        </IgrListItem>
                    ))}
                </IgrList>

                <IgrButton variant="contained" className="continue-button">Continue</IgrButton>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<CheckboxStyling/>);
```

### Styling with Tailwind

You can style the React Checkbox with the custom Tailwind utility classes from `igniteui-theming`. Make sure to [set up Tailwind](/themes/tailwind) first, then import the Ignite UI utilities in your global stylesheet:

```css
@import "tailwindcss";
@import "igniteui-theming/tailwind/utilities/material.css";
```

```jsx
<IgrCheckbox className="![--tick-color:var(--ig-secondary-500)]" />
```

The exclamation mark (`!`) gives the Tailwind utility precedence over the Checkbox's default theme styles.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

@layer theme, base, components, utilities;
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);
@import url("https://use.typekit.net/bng2zgw.css");
@source "./index.tsx";

@theme {
    /* The design's own palette. It lives here instead of coming from the theme
       palette, so the sample keeps its colors in every theme. */
    --color-filter-primary: #0176ff;
    --color-filter-title: #004699;
    --color-filter-divider: #e5ebf3;
    --color-filter-ink: #1a314a;
    --color-filter-empty: #a9b8cc;
}

/* The design's 44px header: an 8px inset around the title's 28px box. */
igc-expansion-panel::part(header) {
    padding: 0.5rem 1rem;
}

/* A 40px row in every theme. The padding sits on the base rather than on the
   control, so the padding a theme adds around the box for its ripple can no
   longer stretch the row. */
.filter-option::part(base) {
    gap: 0.75rem;
    padding: 0.5rem 0.625rem;
}

.filter-option::part(control) {
    padding: 0;
}

.filter-option::part(indicator) {
    --indicator-size: 1rem;
}
```
```tsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAccordion, IgrCheckbox, IgrExpansionPanel } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

interface FilterSection {
    title: string;
    open: boolean;
    options: { label: string; checked: boolean }[];
}

const initialSections: FilterSection[] = [
    {
        title: 'Brand',
        open: true,
        options: [
            { label: 'Nike', checked: true },
            { label: 'Roxy', checked: false },
            { label: 'Guess', checked: false },
        ],
    },
    {
        title: 'Color',
        open: true,
        options: [
            { label: 'Black', checked: false },
            { label: 'White', checked: true },
            { label: 'Gray', checked: false },
        ],
    },
    {
        title: 'Size',
        open: true,
        options: [
            { label: 'Small', checked: false },
            { label: 'Medium', checked: true },
            { label: 'Large', checked: false },
            { label: 'Extra large', checked: false },
        ],
    },
];

export default function CheckboxTailwindStyling() {
    const [sections, setSections] = useState<FilterSection[]>(initialSections);
    const toggleOption = (sectionIndex: number, optionIndex: number, checked: boolean) => {
        setSections((current) =>
            current.map((section, si) =>
                si !== sectionIndex
                    ? section
                    : {
                          ...section,
                          options: section.options.map((option, oi) =>
                              oi === optionIndex ? { ...option, checked } : option
                          ),
                      }
            )
        );
    };

    const toggleSection = (sectionIndex: number, open: boolean) => {
        setSections((current) =>
            current.map((section, si) => (si === sectionIndex ? { ...section, open } : section))
        );
    };

    return (
        <div className="sample flex items-center justify-center">
            <div className="flex w-[218px] flex-col rounded-2xl border border-filter-primary bg-white p-[7px] [--ig-font-family:aktiv-grotesk,sans-serif]">
                <IgrAccordion className="flex flex-col divide-y divide-filter-divider pb-2">
                    {sections.map((section, sectionIndex) => (
                        <IgrExpansionPanel
                            key={section.title}
                            className="my-0 [--ig-expansion-panel-body-background:transparent] [--ig-expansion-panel-header-background:transparent] [--ig-expansion-panel-header-icon-color:var(--color-filter-ink)]"
                            indicatorPosition="end"
                            open={section.open}
                            onOpened={() => toggleSection(sectionIndex, true)}
                            onClosed={() => toggleSection(sectionIndex, false)}
                        >
                            <span className="pb-2 text-base font-bold leading-5 text-filter-title" slot="title">{section.title}</span>
                            <div className="-mx-2 -my-4 flex flex-col">
                                {section.options.map((option, optionIndex) => (
                                    <IgrCheckbox
                                        className="filter-option [--ig-checkbox-border-radius:0.125rem] [--ig-checkbox-empty-color-hover:var(--color-filter-primary)] [--ig-checkbox-empty-color:var(--color-filter-empty)] [--ig-checkbox-fill-color-hover:var(--color-filter-primary)] [--ig-checkbox-fill-color:var(--color-filter-primary)] [--ig-checkbox-label-color-hover:var(--color-filter-ink)] [--ig-checkbox-label-color:var(--color-filter-ink)] [--ig-checkbox-tick-color-hover:#fff] [--ig-checkbox-tick-color:#fff]"
                                        key={option.label}
                                        checked={option.checked}
                                        onChange={(e) => toggleOption(sectionIndex, optionIndex, e.detail.checked)}
                                    >
                                        <span className="text-sm font-medium leading-6 tracking-[0.1px]">{option.label}</span>
                                    </IgrCheckbox>
                                ))}
                            </div>
                        </IgrExpansionPanel>
                    ))}
                </IgrAccordion>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<CheckboxTailwindStyling/>);
```

## Accessibility

The React Checkbox provides a selectable control with a label and state that must remain understandable for keyboard and assistive technology users.

### Keyboard Interaction

The Checkbox uses the keyboard behavior provided by its rendered control. A disabled Checkbox is
not keyboard interactive, and the Space key changes its checked state.

Use the keyboard interaction provided by the Checkbox and verify the focus and state-change behavior for the target platform.

| Key / interaction | Action |
| --- | --- |
| Tab / Shift+Tab | Moves focus to or away from the Checkbox when it is enabled and focusable. |
| Space | Toggles the checked state of the focused Checkbox. |
| Indeterminate state | The Checkbox exposes its current state when the indeterminate state is enabled. |

### Screen Readers / ARIA

The Checkbox exposes its checked state, disabled state, and, when configured, required, invalid,
and indeterminate states through the semantics of its rendered control.

- Provide meaningful label content for every Checkbox so assistive technology users can identify
  its purpose.
- When the label is outside the component, connect it with the supported labelling mechanism and
  verify the announcement in the target platform.
- Preserve the Checkbox state semantics when customizing or wrapping the control.
- Change event handlers report state changes; they do not replace the accessible name or state.

The checked, unchecked, required, invalid, disabled, and indeterminate states must remain available to assistive technology through the component's supported semantics. Verify the rendered announcement against the platform API documentation.

### Accessibility Compliance

Verify the rendered React Checkbox against the accessibility requirements of the application.

| Criterion | How the component supports the requirement |
| --- | --- |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | The enabled Checkbox can receive keyboard focus and its checked state can be changed with Space. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | The Checkbox exposes its accessible name and current selection state through the rendered control and supported state semantics. |
| [3.3.1 Error Identification](https://www.w3.org/WAI/WCAG21/Understanding/error-identification) | When the Checkbox is invalid, expose the validation state and provide an appropriate message in the surrounding form. |

Your responsibilities:

- Give every Checkbox a meaningful accessible name.
- Keep focus visible and preserve sufficient contrast when customizing the Checkbox theme.
- Ensure required, invalid, disabled, and indeterminate states are also communicated when visual
  styling alone is insufficient.
- Test the rendered Checkbox with keyboard navigation and supported assistive technologies.

## API References

The React Checkbox API reference provides the complete API surface for the component.

[`IgrCheckbox`](mcp:get_api_reference?platform=react&component=IgrCheckbox)

## Dependencies

The React Checkbox requires a theme stylesheet to apply its visual styling. See the framework-specific setup in [**Getting Started**](../general-getting-started.md).

## Additional Resources

Use the following React resources for API details and project support:

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

## Related Components

The React Checkbox is intended for selectable form options. Use the following related component when you need an immediate on/off action instead:

- [`IgrSwitch`](mcp:get_api_reference?platform=react&component=IgrSwitch)

## FAQ

These frequently asked questions cover common React Checkbox selection, accessibility, form, and validation scenarios.

  **Q: Can I use the Checkbox with a form?**

    The React Checkbox is form-associated and participates in a native HTML `<form>`. Set a unique `name` and a `value` so the checked state is submitted with the form.
  
  **Q: How do I show a partially selected Checkbox?**

    The React Checkbox supports a third, indeterminate state for partially selected options. Set the `indeterminate` property to enable that state.
  
  **Q: How do I provide an accessible Checkbox label?**

    The React Checkbox should have meaningful label content so assistive technology users can identify its purpose. When the label is outside the component, connect it with the supported labelling mechanism such as `aria-labelledby`.
  
  **Q: How do I mark a Checkbox as required or invalid?**

    Set the `required` property to indicate that the Checkbox must be selected and the `invalid` property to expose a validation state. Provide an appropriate validation message in the surrounding form when the Checkbox is invalid.
  

