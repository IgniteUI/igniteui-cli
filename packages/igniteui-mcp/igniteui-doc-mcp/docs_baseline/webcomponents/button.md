---
title: "Button Component"
description: Get started with the Web Components Button Component. Select button variants, configure sizes, define styling, and gain flexibility through the Web Components Button OnClick event.
keywords: "Web Components, UI controls, web widgets, UI widgets, Web Components Button Components, Infragistics"
mentionedTypes: ["Button", "ButtonBase"]
license: MIT
last_updated: 2026-08-13
relatedComponents: ["IconButton"]
llms:
  description: "The Web Components Button Component lets you enable clickable elements that trigger actions in your Web Components app."
_tocName: Button
---
# Button Component

The Web Components Button component lets you enable clickable elements that trigger actions in your Web Components app. You get full control over button variants, styling, and sizes. The Button component also lets you handle clicks, toggle the button, and disable it when needed.

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

## Anatomy

The Web Components Button renders its label and optional prefix and suffix content in the component shadow DOM.

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

To use the Web Components Button, follow the [Ignite UI for Web Components Getting Started](../general-getting-started.md) topic for the basic project setup, then register the component for your target platform.

For Web Components using the **igniteui-webcomponents** package, install the package:

```cmd
npm install igniteui-webcomponents
```

You will then need to import the [`IgcButton`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent), its necessary CSS, and register its module, like so:

```ts
import { defineComponents, IgcButtonComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcButtonComponent);
```

The simplest way to start using the [`IgcButton`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent) is as follows:

```html
<igc-button></igc-button>
```

## Usage

Use the Web Components Button to trigger an action, submit form data, or navigate to another page. Choose the appropriate button type and variant for the action, then add optional content such as icons when needed.

The Button content is placed in its default slot. Add the action label as the button content so that the purpose of the action is clear to all users.

```html
<igc-button>Save changes</igc-button>
```

With `prefix` and `suffix` slots of the [`IgcButton`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent) component, we can add different content before and after the main content of the button.

We recommend using a `<span>` element when adding simple text, symbols, or emojis, and an [`IgcIcon`](mcp:get_api_reference?platform=webcomponents&component=IgcIconComponent) component when adding icons to the `prefix` and `suffix` slots.

```html
<igc-button type="button" variant="contained">
    <span slot="prefix">Download</span>
    <igc-icon slot="suffix" name="download"></igc-icon>
</igc-button>
```

### Type

The button component will change its internal structure from a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) to an [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) type element when the [`Href`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent&member=href) attribute is set. In that case the button can be thought of as a regular link. Setting the [`Href`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent&member=href) attribute will allow you to also set the [`Rel`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent&member=rel), [`Target`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent&member=target) and [`Download`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent&member=download) attributes.
In the case when the button component uses an actual [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) element internally, we can specify its [`DisplayType`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent&member=type) by setting the property to any of the following values:

- `Submit` - when we want to submit the form data
- `reset` - when we want to reset form data to its initial values
- `button` - when we want to add button with a custom functionality anywhere on a webpage

### Variants

Five types of Buttons are supported: `contained` button for prominent primary actions, `outlined` button for secondary actions, `flat` button for subtle actions, `floating action` button (Fab) for prominent main actions, and `icon` button for actions represented by an icon. Icon Buttons can also use any of the other four variants.

#### Contained Button

Use the [`Variant`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent&member=variant) attribute to add a simple contained button in your component template. Note that if you do not set variant, by default it will be set to contained.

```html
<igc-button variant="contained">Contained</igc-button>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-button {
  width: 40%;
  margin: auto;
}
```

#### Outlined Button

All you have to do to create an `outlined` button is to change the value of the [`Variant`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent&member=variant) property:

```html
<igc-button variant="outlined">Outlined</igc-button>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-button {
  width: 40%;
  margin: auto;
}
```

#### Flat Button

Analogically, we can switch to `flat` variant.

```html
<igc-button variant="flat">Flat</igc-button>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-button {
  width: 40%;
  margin: auto;
}
```

#### Floating Action Button

We can create a floating action button by setting the [`Variant`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent&member=variant) property to `fab`:

```html
<igc-button variant="fab">Fab</igc-button>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-button {
  width: 40%;
  margin: auto;
}
```

### States

You may also insert each Button in a disabled state because they all support both Enabled and Disabled variants. In Figma, you can switch between the two using a boolean property in the properties panel. In code, use the `disabled` property or attribute when an action is not currently available.

```html
<igc-button variant="contained" disabled>Disabled</igc-button>
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

### Layout Template

Contained, Outlined, Flat, and Floating Action Buttons support flexible icon and label templates. In Figma, to show or hide the icons, you can use the `Left Icon` and `Right Icon` boolean properties. If you want to have an Icon Button, you can set the `Content` property to `Icon`.

```html
<igc-button variant="outlined">
    <span slot="prefix">★</span>
    Save changes
    <span slot="suffix">→</span>
</igc-button>
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

### Size

Users can change the size of the [`IgcButton`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent) using the `--ig-size` CSS variable.

```html
<igc-button class="button-size-small" variant="contained">
    Small
</igc-button>
```

```css
.button-size-small {
    --ig-size: var(--ig-size-small);
}
```

The result of implementing the above code should look like the following:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

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

### Download

Setting the [`Download`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent&member=download) property will prompt the user to save the linked URL instead of navigating to it.

```html
<igc-button
    href=""
    variant="contained"
    download="url_to_content"
    target="_blank">
    Download
</igc-button>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-button {
  width: 40%;
  margin: auto;
}
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

The Web Components Button exposes platform-specific properties for controlling its content, appearance, and behavior.

The Web Components Button exposes the following properties.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`variant`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent&member=variant) | ButtonVariant | `contained` | Selects the Button visual variant. |
| [`type`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent&member=type) | string | `button` | Sets the native button type. |
| [`href`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent&member=href) | string | — | Sets the destination for navigation. |

## Styling

Customize the Button with theme settings, CSS variables, or CSS parts to match the visual language of your application.

### Sass Theming

Use the standard Ignite UI for Web Components theme workflow to customize the Button consistently with the rest of the application.

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

The [`IgcButton`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent) exposes three CSS parts which we can use for styling:

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
igc-button.confirm-button:hover::part(base) { background-color: #0b4f8a; color: #ffffff; }

igc-button.send-button::part(base) {
  border-color: #8a2be2;
  color: #8a2be2;
}
igc-button.send-button:hover::part(base) { background-color: #8a2be2; border-color: #6a1bb1; color: #ffffff; }

igc-button.send-button igc-icon {
  color: #8a2be2;
}
igc-button.send-button:hover igc-icon { color: #ffffff; }

igc-button.cancel-button::part(base) {
  color: #1275c4;
}
igc-button.cancel-button:hover::part(base) { background-color: #dbeeff; color: #063b68; }

igc-button.add-button::part(base) {
  background-color: #4caf50;
  color: #000000;
  border-radius: 999px;
}
igc-button.add-button:hover::part(base) { background-color: #257a2b; color: #ffffff; }
```

### Styling with Tailwind

You can style the Button with the custom Tailwind utility classes from `igniteui-theming`. Make sure to [set up Tailwind](/themes/tailwind) first, then import the Ignite UI utilities in your global stylesheet:

```css
@import "tailwindcss";
@import "igniteui-theming/tailwind/utilities/material.css";
```

```html
<igc-button class="!light-contained-button ![--background:#7B9E89]">Contained Button</igc-button>
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
    box-sizing: border-box;
    width: 100%;
    min-height: 100%;
    gap: 1.5rem;
    padding: 1rem;
    overflow: hidden;
}
.confirm-button:hover::part(base) { background-color: var(--color-indigo-900); color: var(--color-white); }

.button-row {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 7rem));
    align-items: center;
    justify-items: center;
    gap: 3rem;
    width: min(100%, 31rem);
    max-width: 100%;
}
.send-button:hover::part(base) { background-color: var(--color-pink-600); border-color: var(--color-pink-700); color: var(--color-white); }

.confirm-button::part(base) {
    background-color: var(--color-indigo-700);
    color: var(--color-white);
}
.send-button:hover igc-icon { color: var(--color-white); }

.send-button::part(base) {
    border-color: var(--color-pink-600);
    color: var(--color-pink-600);
}
.cancel-button:hover::part(base) { background-color: var(--color-amber-100); color: var(--color-amber-900); }

.send-button igc-icon {
    color: var(--color-pink-600);
}
.add-button:hover::part(base) { background-color: var(--color-teal-800); color: var(--color-white); }

.cancel-button::part(base) {
    color: var(--color-amber-700);
}

.add-button::part(base) {
    background-color: var(--color-teal-500);
    color: var(--color-black);
    border-radius: 9999px;
}

.add-button igc-icon {
    color: var(--color-white);
}
```

## Accessibility

The Web Components Button is an interactive control for actions and, when `href` is set, navigation.
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

The Web Components Button API reference lists the complete verified API surface for the target platform.

[`IgcButton`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent)

## Dependencies

The Web Components Button requires the corresponding Web Components package and theme stylesheet. The sizing example also uses the [`IgcRadio`](mcp:get_api_reference?platform=webcomponents&component=IgcRadioComponent) and [`IgcRadioGroup`](mcp:get_api_reference?platform=webcomponents&component=IgcRadioGroupComponent) components.

## Additional Resources

The following resources provide additional Web Components Button guidance and project support.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

## Related Components

The Web Components Button is commonly used with related components when an action needs a specialized presentation.

- [Icon Button](./icon-button.md) is intended for icon-only actions.

## FAQ

    **Q: Which component should I use for an icon-only action?**

        Use the [Icon Button](./icon-button.md) component and provide an accessible name for the action.
    
    **Q: How do I disable a Button?**

        Set the verified `disabled` property to make the Button unavailable and prevent it from being activated.
    
    **Q: How do I change the Button size?**

        Use the platform's supported sizing options or the `--ig-size` CSS variable to customize the Button density.
    

