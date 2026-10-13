---
title: "Button Group"
description: The Ignite UI for Web Components Button Group component organizes related toggle buttons and supports horizontal or vertical alignment, single or multiple selection, and toggling.
keywords: "Web Components, UI controls, web widgets, UI widgets, Web Components Button Group Components, Infragistics"
mentionedTypes: ["ToggleButton", "ButtonGroup"]
relatedComponents: [ToggleButton]
license: MIT
last_updated: "2026-07-28"
llms:
    description: "The Ignite UI for Web Components Button Group organizes related toggle buttons into a group with horizontal or vertical alignment, single or multiple selection, and toggling."
_tocName: Button Group
---
# Button Group Component

The Web Components Button Group component is used to organize [`IgcToggleButton`](mcp:get_api_reference?platform=webcomponents&component=IgcToggleButtonComponent)'s into styled button groups with horizontal/vertical alignment, single/multiple selection and toggling.

## Live Demo

```css
.states-container {
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

## Anatomy

The Web Components Button Group organizes related Toggle Buttons into a single group with a shared container and individual button items.

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

The Web Components Button Group contains Toggle Buttons, and each button can contain an icon and a label.

```text
Button Group
└── Toggle Button
    ├── Icon
    └── Label
```

## Getting Started

To use the Web Components Button Group, follow the [Ignite UI for Web Components Getting Started](../general-getting-started.md) topic for the basic project setup, then register the component for your target platform.

For Web Components using the **igniteui-webcomponents** package, install the package:

```cmd
npm install igniteui-webcomponents
```

Then import the [`IgcButtonGroup`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonGroupComponent), its theme CSS, and register the component:

```ts
import { defineComponents, IgcButtonGroupComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcButtonGroupComponent);
```

The simplest way to start using the [`IgcButtonGroup`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonGroupComponent) is as follows:

```html
<igc-button-group></igc-button-group>
```

## Usage

Use the [`IgcButtonGroup`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonGroupComponent) to wrap your [`IgcToggleButton`](mcp:get_api_reference?platform=webcomponents&component=IgcToggleButtonComponent) components. To select a button by default, use the [`Selected`](mcp:get_api_reference?platform=webcomponents&component=IgcToggleButtonComponent&member=selected) attribute:

```html
 <igc-button-group>
    <igc-toggle-button value="left">
        <igc-icon name="format_align_left" collection="material"></igc-icon>
        <igc-ripple></igc-ripple>
    </igc-toggle-button>

    <igc-toggle-button value="center">
        <igc-icon name="format_align_center" collection="material"></igc-icon>
        <igc-ripple></igc-ripple>
    </igc-toggle-button>

    <igc-toggle-button value="right">
        <igc-icon name="format_align_right" collection="material"></igc-icon>
        <igc-ripple></igc-ripple>
    </igc-toggle-button>

    <igc-toggle-button value="justify" selected>
        <igc-icon name="format_align_justify" collection="material"></igc-icon>
        <igc-ripple></igc-ripple>
    </igc-toggle-button>
</igc-button-group>
```

### Alignment

The Button Group supports horizontal and vertical layouts. Use the [`Alignment`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonGroupComponent&member=alignment) property to set the orientation of the buttons in the group.

```css
.states-container {
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

### Selection
In order to configure the Ignite UI for Web Components Button Group selection, use its platform-specific selection property.

For Web Components, use the [`selection`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonGroupComponent&member=selection) property. The available modes are:

- **single** - default selection mode of the button group. A single button can be selected/deselected by the user.
- **single-required** - mimics a radio group behavior. Only one button can be selected and once initial selection is made, deselection is not possible through user interaction.
- **multiple** - multiple buttons in the group can be selected and deselected.

The sample below demonstrates the exposed [`IgcButtonGroup`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonGroupComponent) selection modes:

```css
.states-container {
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

A [`IgcToggleButton`](mcp:get_api_reference?platform=webcomponents&component=IgcToggleButtonComponent) could be marked as selected via its [`Selected`](mcp:get_api_reference?platform=webcomponents&component=IgcToggleButtonComponent&member=selected) attribute or through the [`IgcButtonGroup`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonGroupComponent) [`SelectedItems`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonGroupComponent&member=selectedItems) attribute:

```html
<igc-button-group selected-items='["bold"]'>
    <igc-toggle-button value="bold">
        <igc-icon name="bold" collection="material"></igc-icon>
        <igc-ripple></igc-ripple>
    </igc-toggle-button>

    <igc-toggle-button value="italic">
        <igc-icon name="italic" collection="material"></igc-icon>
        <igc-ripple></igc-ripple>
    </igc-toggle-button>

    <igc-toggle-button value="underlined">
        <igc-icon name="underlined" collection="material"></igc-icon>
        <igc-ripple></igc-ripple>
    </igc-toggle-button>
</igc-button-group>
```

**Note:** 

Setting the [`IgcToggleButton`](mcp:get_api_reference?platform=webcomponents&component=IgcToggleButtonComponent) [`Value`](mcp:get_api_reference?platform=webcomponents&component=IgcToggleButtonComponent&member=value) attribute is mandatory for using the [`SelectedItems`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonGroupComponent&member=selectedItems) property of the [`IgcButtonGroup`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonGroupComponent).

### States

Each button in the group supports enabled and disabled variants, which can also be selected or not selected. Use the state behavior provided by the contained [`IgcToggleButton`](mcp:get_api_reference?platform=webcomponents&component=IgcToggleButtonComponent) components.

```css
.states-container {
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

### Interaction States

The enabled buttons in the group support idle, hover, and focused interaction states. Use the state behavior provided by the contained [`IgcToggleButton`](mcp:get_api_reference?platform=webcomponents&component=IgcToggleButtonComponent) components.

```css
.states-container {
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

### Layout Template

Each button can use text, an icon, or both. Keep the content style consistent across the group, and use the button content APIs to control the icon and label shown in each button.

```css
.states-container {
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

### Custom Toggle Buttons

For Web Components, use individual Toggle Buttons to create a custom Button Group. Each button can define its own value, icon, label, selected state, and disabled state.

Register the Button Group and Toggle Button components:

```ts
import { defineComponents, IgcButtonGroupComponent, IgcToggleButtonComponent, IgcIconComponent } from 'igniteui-webcomponents';

defineComponents(IgcButtonGroupComponent, IgcToggleButtonComponent, IgcIconComponent);
```

Then define the custom buttons in markup:

```html
<igc-button-group>
    <igc-toggle-button value="align-left">
        <igc-icon name="format_align_left" collection="material"></igc-icon>
    </igc-toggle-button>
    <igc-toggle-button value="align-center" selected>
        <igc-icon name="format_align_center" collection="material"></igc-icon>
    </igc-toggle-button>
    <igc-toggle-button value="align-right" disabled>
        <igc-icon name="format_align_right" collection="material"></igc-icon>
    </igc-toggle-button>
</igc-button-group>
```

```css
igc-button-group {
    max-width: 18.75rem;
}

.states-container {
    display: grid;
    place-items: center;
    height: 100vh;
}
```

### Size
The `--ig-size` CSS custom property can be used to control the size of the button group.

```html
<igc-button-group style="--ig-size: var(--ig-size-small)"></igc-button-group>
```

```css
.states-container {
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

### Do/Don't

**When to use:** Use a Button Group to organize related toggle actions where users may select one or more options.

**When not to use:** Do not use a Button Group for unrelated actions or for a single toggle action; use a standalone [`IgcToggleButton`](mcp:get_api_reference?platform=webcomponents&component=IgcToggleButtonComponent) instead.

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

The Web Components Button Group exposes the following properties.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`alignment`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonGroupComponent&member=alignment) | `ButtonGroupAlignment` | `horizontal` | Sets the orientation of the buttons in the group. |
| [`selection`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonGroupComponent&member=selection) | `ButtonGroupSelection` | `single` | Sets the selection mode for the buttons in the group. |
| [`selectedItems`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonGroupComponent&member=selectedItems) | `string[]` | `[]` | Gets or sets the values of the selected buttons. |

## Styling

The Web Components Button Group uses CSS parts to style the group container and the individual Toggle Buttons. Use the `group` part on the Button Group and the `toggle` part on each Toggle Button to customize their appearance.

### Sass Theming

Use the Ignite UI for Web Components theme system to style the Button Group consistently with the rest of your application.

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
| `group` | [`IgcButtonGroup`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonGroupComponent) | The Button Group container. |
| `toggle` | [`IgcToggleButton`](mcp:get_api_reference?platform=webcomponents&component=IgcToggleButtonComponent) | An individual Toggle Button. |

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

.states-container {
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

### Styling with Tailwind

You can style the Web Components Button Group with the custom Tailwind utility classes from `igniteui-theming`. Make sure to [set up Tailwind](/themes/tailwind) first, then import the Ignite UI utilities in your global stylesheet:

```css
@import "tailwindcss";
@import "igniteui-theming/tailwind/utilities/material.css";
```

```html
<igc-button-group class="!light-button-group ![--item-background:#7B9E89]"></igc-button-group>
```

The exclamation mark (`!`) gives the Tailwind utility precedence over the Button Group's default theme styles.

```css
@layer theme, utilities;
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);

.states-container {
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

## Accessibility

The Web Components Button Group organizes related Toggle Buttons while exposing each button's selected and disabled state.

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

Infragistics documents Ignite UI for Web Components accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

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

The Web Components Button Group coordinates Toggle Buttons but does not replace their individual labels or accessible names.

- Selection behavior depends on the configured `selection` mode.
- The `selectedItems` property depends on unique `value` attributes on the contained Toggle Buttons.
- The Button Group does not provide labels or icons for its buttons; define the content of each Toggle Button separately.

## API References

The Web Components Button Group API reference provides the complete API surface for the component and its related button functionality.

[`IgcButtonGroup`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonGroupComponent)
[`IgcToggleButton`](mcp:get_api_reference?platform=webcomponents&component=IgcToggleButtonComponent)
[`IgcRipple`](mcp:get_api_reference?platform=webcomponents&component=IgcRippleComponent)
[`IgcIcon`](mcp:get_api_reference?platform=webcomponents&component=IgcIconComponent)

## Dependencies

The Web Components Button Group requires the Web Components package and its theme stylesheet. The examples also use the [`IgcToggleButton`](mcp:get_api_reference?platform=webcomponents&component=IgcToggleButtonComponent), [`IgcIcon`](mcp:get_api_reference?platform=webcomponents&component=IgcIconComponent), and [`IgcRipple`](mcp:get_api_reference?platform=webcomponents&component=IgcRippleComponent) components.

## Additional Resources

Use the following Web Components resources for API details and project support:

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

## Related Components

- [Button](./button.md) - Use Button when you need an individual action instead of a selectable group.

## FAQ

**Q: How do I set the selected buttons in a Button Group?**

Give every button item a unique value, then use the platform-specific selected-items setting to identify the items that should start selected. Unique values allow the group to track selection consistently across all supported platforms.

**Q: Can I use icons and labels in a Button Group?**

Yes. Each button item can contain an icon, a label, or both. Keep the content pattern consistent across the group and provide a visible label or accessible name when an icon alone does not explain the option.

**Q: Can I display a Button Group vertically?**

Yes. Set the platform-specific alignment property to the vertical option. Use horizontal alignment when the related choices should be presented in a single row.

