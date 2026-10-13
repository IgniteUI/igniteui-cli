---
title: "Badge"
description: "The Ignite UI for Web Components Badge displays a short status, category, count, or notification indicator alongside avatars, navigation menus, and other components."
keywords: "Web Components Badge, Ignite UI for Web Components, badge indicator"
license: MIT
mentionedTypes: ["Badge"]
last_updated: "2026-07-24"
llms:
  description: "The Ignite UI for Web Components Badge component displays a short status, category, count, or notification indicator alongside avatars, navigation menus, and other components."
_tocName: Badge
---
# Badge Component

The Web Components Badge component is provided by the platform-specific Ignite UI for Web Components package and is used in conjunction with avatars, navigation menus, or other components in an application when a visual notification is needed. Badges are usually designed with predefined styles to communicate information, success, warnings, or errors.

## Live Demo

The Web Components Badge demo shows how the component can communicate a compact status or notification next to another interface element.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-avatar {
  --size: 40px;
}

igc-icon {
  color: var(--ig-gray-700);
  font-size: 1.5rem;
}

igc-badge {
  --ig-size: var(--ig-size-small);
  position: absolute;
  inset-block-start: -0.15rem;
  inset-inline-end: -0.15rem;
}

igc-badge::part(base),
igc-badge igc-icon {
  color: var(--ig-gray-50);
}

igc-badge igc-icon {
  fill: var(--ig-gray-50);
}

.avatar-example igc-badge {
  inset-block-start: auto;
  inset-block-end: -0.15rem;
  inset-inline-end: -0.15rem;
}

.avatar-example igc-icon {
  color: var(--ig-gray-50);
  fill: var(--ig-gray-50);
}

.event-example igc-chip {
  --ig-size: var(--ig-size-large);
}

.event-example igc-chip::part(base) {
  border-radius: 999px;
}

.event-example igc-badge {
  inset-block-start: 0;
  inset-inline-end: -0.8rem;
}

.icon-example igc-badge {
  inset-block-start: 0;
  inset-inline-end: 0;
}

.icon-example igc-badge::part(base) {
  color: var(--ig-gray-50);
}

.notification-example igc-badge {
  inset-block-start: 0.5rem;
  inset-inline-end: 0.5rem;
  width: 0.5rem;
}

.event-example {
  min-width: auto;
}

.badge-overview {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  min-height: 7rem;
}

.badge-example {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.5rem;
  min-height: 2.5rem;
}

.icon-example,
.notification-example {
  width: 2.5rem;
  height: 2.5rem;
}
```

## Anatomy

The Web Components Badge presents a compact label or dot indicator that decorates another interface element.

**Badge anatomy:** The Badge component is a compact label or dot indicator that decorates another interface element.

<style>{`
  .badge-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .badge-anatomy .igd-anatomy__image {
    max-width: 520px;
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Dot indicator:</strong> A small badge dot used to show a status or a new update.<br />
<strong>2. Icon:</strong> Represents the type of status or action.<br />
<strong>3. Container:</strong> The badge shape that holds and styles the icon or label.<br />
<strong>4. Label:</strong> Text or a number displayed inside the badge.</span>

The component renders its content inside the `base` CSS part. Use the component's default slot for text or other inline content; when `dot` is enabled, the badge renders as an indicator without content.

```text
<igc-badge>
└── ::part(base)
  └── default slot content
</igc-badge>
```

## Getting Started

To use the Web Components Badge, follow the [Ignite UI for Web Components Getting Started](../general-getting-started.md) topic for the basic project setup, then register the component for your target platform.

For Web Components using the **igniteui-webcomponents** package, install the package:

```cmd
npm install igniteui-webcomponents
```

You will then need to import the [`IgcBadge`](mcp:get_api_reference?platform=webcomponents&component=IgcBadgeComponent), its theme CSS, and register the component, like so:

```ts
import { defineComponents, IgcBadgeComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcBadgeComponent);
```

The simplest way to start using the [`IgcBadge`](mcp:get_api_reference?platform=webcomponents&component=IgcBadgeComponent) is as follows:

```html
<igc-badge></igc-badge>
```

## Usage

Use the Web Components Badge to display a short status, category, count, or notification indicator alongside another component.

The following example shows a success Badge displayed on an Avatar. Import the Badge and Avatar components from the platform-specific package, then place the Badge inside a relatively positioned wrapper.

```ts
import { defineComponents, IgcAvatarComponent, IgcBadgeComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcAvatarComponent, IgcBadgeComponent);
```

Add the components to your HTML:

```html
<div class="wrapper">
  <igc-avatar icon="person" shape="circle" size="small"></igc-avatar>
  <igc-badge icon="check" variant="success"></igc-badge>
</div>
```

Use a relatively positioned wrapper to place the Badge over the Avatar:

```css
.wrapper {
  position: relative;
  margin-top: 15px;
}
```

### Type

The Ignite UI for Web Components Badge can carry different types of content, such as a number or an icon.

Use the [`value`](mcp:get_api_reference?platform=webcomponents&component=IgcBadgeComponent&member=value) property to display text or a numeric count inside the Badge:

```html
<igc-badge variant="primary">12</igc-badge>
```

You can also project content directly. When projecting both an icon and text, wrap the text to keep the correct padding.

```html
<igc-badge>
  <igc-icon name="bluetooth"></igc-icon>
  <span>Bluetooth</span>
</igc-badge>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-avatar {
  --size: 40px;
}

igc-badge {
  --ig-size: var(--ig-size-small);
  position: absolute;
  inset-block-end: -6px;
  inset-inline-end: -4px;
}

.badge-type igc-badge::part(base),
.badge-type igc-badge igc-icon {
  color: var(--ig-gray-50);
}

.badge-type igc-badge igc-icon {
  fill: var(--ig-gray-50);
}

.badge-type {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  min-height: 7rem;
}

.badge-type-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  min-width: 56px;
  min-height: 72px;
}

.avatar-wrapper {
  position: relative;
  display: flex;
}

.dot-badge {
  inset-block-end: 0;
  inset-inline-end: 0;
  --ig-badge-dot-size: 0.5rem;
}

.badge-type-item span {
  color: var(--ig-gray-600);
  font-family: "Aktiv Grotesk", sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.3px;
}
```

#### Icon

Add an icon as child content inside the Badge:

```html
<igc-badge variant="success">
  <igc-icon name="heart-monitor"></igc-icon>
</igc-badge>
```

For custom icons, register the icon with the platform's icon service and render it as child content inside the Badge.

For example, register an SVG icon before using it in the Badge:

```ts
import { registerIconFromText } from 'igniteui-webcomponents';

registerIconFromText(
  'heart-monitor',
  '<svg viewBox="0 0 24 24"><path d="M3 12h4l2-6 4 12 2-6h6" /></svg>',
  'custom'
);
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-avatar {
    --size: 40px;
    --ig-avatar-background: var(--ig-gray-400);
    --ig-avatar-color: var(--ig-gray-800);
}

igc-badge igc-icon {
    color: var(--ig-gray-50);
}

.badge-star igc-icon {
    color: var(--ig-gray-900);
}

.icon-wrapper > igc-badge {
    --ig-size: var(--ig-size-medium);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.avatar-wrapper igc-badge {
    --ig-size: var(--ig-size-small);
    position: absolute;
    inset-block-start: -4px;
    inset-inline-end: -6px;
}

.icon-wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 40px;
    height: 40px;
}

.badge-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    min-height: 7rem;
}

.badge-icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    min-width: 56px;
}

.badge-icon-item span {
    color: var(--ig-gray-600);
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.3px;
    transform: translateY(4px);
}

.badge-icon-item:last-child span {
    white-space: nowrap;
}

.avatar-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
}
```

#### Dot

The Ignite UI for Web Components Badge can also render as a minimal dot indicator for notifications by setting its [`dot`](mcp:get_api_reference?platform=webcomponents&component=IgcBadgeComponent&member=dot) attribute. Dot badges do not support content, but they can be outlined and can use any of the available dot types (for example, `primary`, `success`, or `info`).

Set the [`dot`](mcp:get_api_reference?platform=webcomponents&component=IgcBadgeComponent&member=dot) attribute to render a minimal notification indicator without content:

```html
<igc-badge dot></igc-badge>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-badge {
    --ig-size: var(--ig-size-small);
    --ig-badge-dot-size: 0.5rem;
}

igc-avatar {
    --size: 40px;
}

.icon-example igc-badge,
.avatar-example igc-badge,
.nav-icon igc-badge {
    position: absolute;
}

.icon-example igc-badge {
    inset-block-start: 0;
    inset-inline-end: 2px;
}

.avatar-example igc-badge {
    inset-block-start: -0.25rem;
    inset-inline-end: -2px;
}

.nav-icon igc-badge {
    inset-block-start: -2px;
    inset-inline-end: -6px;
}

.badge-dot {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    min-height: 7rem;
}

.dot-example {
    position: relative;
}

.icon-example,
.avatar-example,
.icon-circle {
    display: flex;
    align-items: center;
    width: 36px;
    height: 36px;
}

.icon-circle {
    justify-content: center;
    border-radius: 50%;
    background: var(--ig-gray-300);
    color: var(--ig-gray-900);
}

.notifications-card,
.nav-card {
    background: var(--ig-surface-500);
    border-radius: 4px;
    box-shadow: 0 1px 3px hsl(from var(--ig-gray-900) h s l / 0.12);
}

.notifications-card {
    min-width: 272px;
    padding: 8px 0;
}

.notification-row {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    font-size: 14px;
    color: var(--ig-gray-900);
}

.row-indicator {
    display: inline-flex;
    justify-content: center;
    width: 12px;
}

.row-title {
    flex: 1;
}

.row-time {
    font-size: 13px;
    color: var(--ig-gray-900);
}

.row-time.unread {
    color: var(--ig-gray-900);
    font-weight: 600;
}

.row-chevron {
    --ig-size: 1;

    color: var(--ig-gray-600);
    font-size: 18px;
}

.nav-card {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
}

.nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    min-width: 56px;
    color: var(--ig-gray-700);
    font-size: 12px;
}

.nav-item.active {
    color: var(--ig-primary-800);
}

.nav-icon {
    position: relative;
    display: inline-flex;
}
```

### Size

Control the Badge size with the `--size` CSS variable. For text badges smaller than `16px`, also adjust the font size and line height:

```css
igc-badge {
  --size: 12px;

  font-size: calc(var(--size) / 2);
  line-height: normal;
}
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.badge-size {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  min-height: 11rem;
}

.badge-size-row {
  display: grid;
  grid-template-columns: 80px 32px 40px 40px;
  align-items: center;
  justify-items: center;
  gap: 8px;
}

.badge-size-row igc-badge::part(base),
.badge-size-row igc-badge igc-icon {
  color: var(--ig-gray-50);
}

.badge-size-row igc-badge igc-icon {
  fill: var(--ig-gray-50);
}

.row-label {
  justify-self: end;
  color: var(--ig-gray-600);
  font-family: "Aktiv Grotesk", sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.3px;
}

.badge-large { --ig-size: var(--ig-size-large); }
.badge-medium { --ig-size: var(--ig-size-medium); }
.badge-small { --ig-size: var(--ig-size-small); }
```

### Shape

The badge component supports `rounded`(default) and `square` shapes. These values can be assigned to the [`Shape`](mcp:get_api_reference?platform=webcomponents&component=IgcBadgeComponent&member=shape) attribute.

```html
<igc-badge shape="square"></igc-badge>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.badge-shape {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  min-height: 7rem;
}

.badge-shape-row {
  display: grid;
  grid-template-columns: 80px 40px 40px 40px;
  align-items: center;
  justify-items: center;
  gap: 8px;
}

.badge-shape-row igc-badge::part(base),
.badge-shape-row igc-badge igc-icon {
  color: var(--ig-gray-50);
}

.badge-shape-row igc-badge igc-icon {
  fill: var(--ig-gray-50);
}

.row-label {
  justify-self: end;
  color: var(--ig-gray-600);
  font-family: "Aktiv Grotesk", sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.3px;
}

.badge-small {
  --ig-size: var(--ig-size-small);
}
```

When the badge has a `square` shape, it can be further customized by setting a custom border radius using the `--border-radius` CSS variable.

### Variants

The Ignite UI for Web Components Badge supports several pre-defined stylistic variants (Primary, Info, Success, Warn, and Error). Assign one of the supported values — `primary`, `info`, `success`, `warning`, or `danger` — to the [`variant`](mcp:get_api_reference?platform=webcomponents&component=IgcBadgeComponent&member=variant) attribute.

```html
<igc-badge variant="success"></igc-badge>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-badge {
    --ig-size: var(--ig-size-small);
    position: absolute;
    inset-block-end: -4px;
    inset-inline-end: -4px;
}

.variant-item:not(:nth-child(4)) igc-badge::part(base),
.variant-item:not(:nth-child(4)) igc-badge igc-icon {
    color: var(--ig-gray-50);
}

.variant-item:not(:nth-child(4)) igc-badge igc-icon {
    fill: var(--ig-gray-50);
}

igc-avatar {
    --ig-size: var(--ig-size-small);
    --ig-avatar-background: var(--ig-gray-400);
    --ig-avatar-color: var(--ig-gray-800);
}

.variant-item:first-child igc-avatar igc-icon,
.variant-item:nth-child(4) igc-avatar igc-icon {
    color: var(--ig-gray-800);
}

.badge-variants {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    min-height: 7rem;
}

.variant-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    min-width: 56px;
}

.variant-item span {
    color: var(--ig-gray-600);
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.3px;
}

.avatar-wrapper {
    position: relative;
    display: flex;
}
```

### Outlined

The badge can also have a subtle border around it when the [`outlined`](mcp:get_api_reference?platform=webcomponents&component=IgcBadgeComponent&member=outlined) attribute is set.

```html
<igc-badge outlined></igc-badge>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-badge {
  --ig-size: var(--ig-size-small);
}

igc-avatar {
  --size: 40px;
  --ig-avatar-background: var(--ig-gray-400);
  --ig-avatar-color: var(--ig-gray-800);
}

.outlined-example igc-avatar igc-icon {
  color: var(--ig-gray-50);
}

.outlined-example:nth-child(2) igc-badge {
  inset-block-start: auto;
  inset-block-end: -6px;
  inset-inline-end: -6px;
}

.outlined-example igc-badge {
  position: absolute;
  inset-block-start: -6px;
  inset-inline-end: -10px;
}

.icon-circle igc-icon {
  font-size: 20px;
}

.badge-outlined {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  min-height: 100vh;
  box-sizing: border-box;
}

.outlined-example {
  position: relative;
  display: flex;
}

.icon-circle,
.step-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.icon-circle {
  width: 36px;
  height: 36px;
  background: var(--ig-gray-200);
  color: var(--ig-gray-800);
}

igc-badge::part(base),
igc-badge igc-icon {
  color: var(--ig-gray-50);
}

igc-badge igc-icon {
  fill: var(--ig-gray-50);
}

.steps {
  width: 316px;
}

.steps,
.steps igc-step {
  --indicator-size: 24px;
  --ig-stepper-step-separator-style: dashed;
  --ig-stepper-step-separator-color: var(--ig-gray-400);
  --border-radius-indicator: 50%;
  --indicator-background: var(--ig-gray-200);
  --indicator-color: var(--ig-gray-800);
  --indicator-outline: var(--ig-gray-200);
  --separator-size: 1px;
  --separator-type: solid;
  --step-separator-style: dashed;
  --complete-indicator-background: var(--ig-gray-900);
  --complete-indicator-color: var(--ig-gray-50);
  --complete-step-separator-style: solid;
  --complete-step-separator-color: var(--ig-gray-900);
}

.stepper-wrapper {
  position: relative;
  align-self: center;
  top: 18px;
}

.flagged-badge {
  position: absolute;
  inset-block-start: 8px;
  inset-inline-start: calc(50% - 1px);
  transform: scale(1.20);
  transform-origin: center;
}

.steps::part(content) {
  display: none;
}
```

The border color of the outlined badge can also be customized using the `--border-color` CSS variable.

### Do/Don't

**When to use:** Use a Badge to communicate a short status, category, count, or notification state alongside another component. Use `dot` when the indicator does not need visible text.

**When not to use:** Do not use a Badge as the primary control for an action, as a replacement for a form validation message, or when the status cannot be understood from the badge content, surrounding context, or accessible labeling.

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

The Web Components Badge exposes platform-specific properties for controlling its content, appearance, and indicator behavior.

The Web Components Badge exposes the following properties.

| name | type | default | description |
| --- | --- | --- | --- |
| [`dot`](mcp:get_api_reference?platform=webcomponents&component=IgcBadgeComponent&member=dot) | boolean | `false` | Renders the Badge as a dot indicator. |
| [`outlined`](mcp:get_api_reference?platform=webcomponents&component=IgcBadgeComponent&member=outlined) | boolean | `false` | Displays an outline around the Badge. |
| [`shape`](mcp:get_api_reference?platform=webcomponents&component=IgcBadgeComponent&member=shape) | BadgeShape | `rounded` | Sets the Badge shape. |
| [`variant`](mcp:get_api_reference?platform=webcomponents&component=IgcBadgeComponent&member=variant) | StyleVariant | `primary` | Sets the Badge stylistic variant. |
| [`styles`](mcp:get_api_reference?platform=webcomponents&component=IgcBadgeComponent&member=styles) | CSSResult | — | Applies custom styles. |

## Styling

The Web Components Badge uses the [`IgcBadge`](mcp:get_api_reference?platform=webcomponents&component=IgcBadgeComponent) component's `base` CSS part and documented styling variables to customize its appearance.

### Sass Theming

Use the Ignite UI for Web Components theme system to style the Badge consistently with the rest of your application.

### CSS Variables

| variable | what it changes |
| --- | --- |
| `--background-color` | The badge background color. |
| `--border-color` | The badge border color. |
| `--border-radius` | The badge corner radius. |
| `--elevation` | The badge shadow. |
| `--icon-color` | The badge icon color. |
| `--text-color` | The badge text color. |
| `--size` | The badge size. |
| `--dot-size` | The size of the dot-type badge. |

### Style Parts

| part | what it styles |
| --- | --- |
| `base` | The Badge root element. |

```css
igc-badge::part(base) {
  --background-color: var(--ig-error-A100);
  --border-radius: 2px;
}
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-badge {
    --ig-size: var(--ig-size-small);
}

.badge-teal {
    --ig-badge-background-color: var(--ig-success-700);
    --ig-badge-border-radius: 50%;
}

.badge-amber {
    --ig-badge-background-color: #C97C00;
    --ig-badge-border-radius: 50%;
}

.badge-magenta {
    --ig-badge-background-color: #9C27B0;
    --ig-badge-text-color: var(--ig-gray-50);
    --ig-badge-border-radius: 50%;
}

.badge-lime {
    --ig-badge-background-color: var(--ig-success-700);
    --ig-badge-border-radius: 50%;
    --ig-badge-dot-size: 0.5rem;
}

.badge-teal igc-icon,
.badge-amber igc-icon,
.styling-item.pink igc-avatar igc-icon {
    color: var(--ig-gray-50);
}

.badge-teal igc-icon {
    position: relative;
}

.badge-teal igc-icon::after {
    content: "";
    position: absolute;
    inset: 50% auto auto 50%;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--ig-success-700);
    transform: translate(-50%, -50%);
}

.styling-item igc-avatar {
    --size: 40px;
}

.styling-item.green igc-avatar {
    --icon-color: var(--ig-success-900);
    --ig-avatar-background: var(--ig-success-200);
    --ig-avatar-color: var(--ig-success-900);
}

.styling-item.pink igc-avatar {
    --ig-avatar-background: #DA64FF;
    --ig-avatar-color: var(--ig-gray-50);
}

.styling-item igc-badge {
    position: absolute;
    inset-block-end: -2px;
    inset-inline-end: -2px;
}

.badge-styling {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
    min-height: 7rem;
}

.styling-item {
    position: relative;
    display: flex;
}
```

### Styling with Tailwind

You can style the Badge with the custom Tailwind utility classes from `igniteui-theming`. Make sure to [set up Tailwind](/themes/tailwind) first, then import the Ignite UI utilities in your global stylesheet:

```css
@import "tailwindcss";
@import "igniteui-theming/tailwind/utilities/material.css";
```

```html
<igc-badge class="!light-badge ![--background:#FF4E00] ![--border-radius:4px]"></igc-badge>
```

The exclamation mark (`!`) gives the Tailwind utility precedence over the Badge's default theme styles.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

@layer theme, base, components, utilities;
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);

igc-badge {
    --ig-size: var(--ig-size-small);
}

igc-avatar {
    --size: 40px;
    --ig-avatar-background: var(--ig-gray-400);
    --ig-avatar-color: var(--ig-gray-800);
}

igc-avatar igc-icon {
    color: var(--ig-gray-800);
}

.badge-close {
    --ig-badge-background-color: var(--ig-error-500);
}

.badge-close::part(base) {
    background-color: var(--ig-error-500);
}

.badge-volume {
    --ig-badge-background-color: #8B5BB1;
}

.badge-volume::part(base) {
    background-color: #8B5BB1;
}

.badge-remove {
    --ig-badge-background-color: var(--ig-gray-900);
}

.badge-remove::part(base) {
    background-color: var(--ig-gray-900);
}

.badge-check {
    --ig-badge-background-color: var(--ig-success-600);
}

.badge-check::part(base) {
    background-color: var(--ig-success-600);
}

.badge-style {
    position: absolute;
    inset-block-end: -4px;
    inset-inline-end: -4px;
}

.badge-style::part(base) {
    border-radius: 50%;
}

.badge-style igc-icon {
    color: var(--ig-gray-50);
}

.badge-parent {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    min-height: 7rem;
}
```

## Accessibility

The Web Components Badge is a non-interactive status visual that communicates a short count, state, or notification.

### Keyboard Interaction

The Badge does not receive focus, handle keyboard input, or expose component interaction events.

| Key | Action |
| -- | -- |
| n/a | The Badge is not keyboard interactive. |

### Screen Readers / ARIA

The Badge host uses `role="status"` to expose its content as status information.

- The component sets `aria-roledescription` to identify the Badge and its current `variant`.
- Add an `aria-label` when a Badge without text, including a `dot` Badge, communicates status that is not otherwise available to assistive technology.
- Keep the Badge content or accessible label specific to the decorated item, such as `3 unread messages` rather than only `3`.

### Accessibility Compliance

Infragistics documents Ignite UI for Web Components accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| -- | -- |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) | The Badge exposes the semantic `status` role. The xplat implementation also exposes a role description based on the current variant; Angular exposes an accessible label and a role description based on its type and content. |

Your responsibilities:

- Provide an accessible name that explains the status when the Badge has no meaningful text, especially for `dot` Badges.
- Do not use Badge color as the only indication of status; pair it with text, an icon, or another accessible cue.
- Keep sufficient contrast between the Badge foreground and background when overriding theme styles.

## Troubleshooting

Use this section to check boundaries and common decisions before treating Badge as an interactive control or the only indication of status.

### Why does my custom background color not change the Badge?

The selected `variant` takes precedence over the `--background-color` CSS variable. To use a custom background color, avoid setting a variant that applies its own background color.

### Why is my dot Badge not displaying content?

The `dot` property renders the Badge as a minimal indicator and does not support content. Use a regular Badge when you need to display text or other inline content.

### Known Limitations

The Web Components Badge has the following platform-independent limitations.

- A dot Badge is an indicator only and cannot display text or an icon.
- Badge styling and variant/type names differ between Angular and the other supported frameworks. Use the platform-specific examples and API links on this page rather than copying an attribute between frameworks.
- The Badge is a visual status indicator and does not provide keyboard interaction of its own.

## API References

The Web Components Badge API reference lists the complete verified API surface for the target platform.
[`IgcBadge`](mcp:get_api_reference?platform=webcomponents&component=IgcBadgeComponent)

## Dependencies

The Web Components Badge requires a theme stylesheet to apply its visual styling. See the framework-specific setup in **Getting Started**.

## Additional Resources

The following resources provide additional Web Components Badge guidance and project support.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

## Related Components

The Web Components Badge is commonly used with related components such as Avatar when a status indicator belongs to another visual element.

- [Avatar](../layouts/avatar.md) — combine an Avatar with a Badge to show a status indicator.

## FAQ

  **Q: Can a Badge display both an icon and text?**

    Yes. Use the Badge's content area for the text and the supported icon content for the visual indicator. Keep the combination short so it remains a compact status or category label.
  

  **Q: How do I display a notification dot without content?**

    Set the platform-specific `dot` property or attribute. A dot Badge intentionally renders without text or other content.
  

  **Q: When should I use a dot Badge instead of a text Badge?**

    Use a dot Badge when the status is communicated by presence alone. Use a text Badge when users need the status, category, or count to be understandable without relying on color or position.
  

  **Q: Which package should I install for Badge?**

    Use `igniteui-angular` for Angular, `igniteui-react` for React, `igniteui-webcomponents` for Web Components, and `IgniteUI.Blazor` for Blazor. Keep related Ignite UI packages on the same release version.
  

