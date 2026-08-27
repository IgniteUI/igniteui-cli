---
title: Web Components Badge | Infragistics
_description: Infragistics' Web Components Badge component allows you to display content in a predefined style to decorate other components anywhere in an application.
_keywords: Web Components, UI controls, web widgets, UI widgets, Web Components, Web Components Badge Components, Infragistics
_license: MIT
mentionedTypes: ["Badge"]
_tocName: Badge
---

# Web Components Badge Overview

The Ignite UI for Web Components Badge is a component used in conjunction with avatars, navigation menus, or other components in an application when a visual notification is needed. Badges are usually designed with predefined styles to communicate information, success, warnings, or errors.

## Web Components Badge Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-badge {
  --ig-size: var(--ig-size-small);
}

igc-avatar {
  --size: 40px;
  --ig-avatar-background: var(--ig-gray-700);
  --ig-avatar-color: var(--ig-gray-50);
}

.outlined-example igc-avatar igc-icon {
  color: var(--ig-gray-50);
}

.outlined-example:nth-child(2) igc-badge {
  inset-block-start: auto;
  inset-block-end: -6px;
  inset-inline-end: -6px;
}

.step-marker igc-badge {
  position: absolute;
  inset-block-start: -1px;
  inset-inline-end: -2px;
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
  min-height: 7rem;
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

.badge-info-blue {
  --ig-badge-background-color: #0057A9;
}

.badge-info-blue::part(base) {
  background-color: #0057A9;
}

.payment-dot-blue {
  --ig-badge-background-color: #0057A9;
  --ig-badge-dot-size: 0.5rem;
}

.payment-dot-blue::part(base) {
  background-color: #0057A9;
}

igc-badge::part(base),
igc-badge igc-icon {
  color: var(--ig-gray-50);
}

igc-badge igc-icon {
  fill: var(--ig-gray-50);
}

.steps {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.step-marker {
  position: relative;
  display: flex;
}

.step-circle {
  width: 26px;
  height: 26px;
  background: var(--ig-gray-900);
  color: var(--ig-gray-50);
  font-size: 12px;
}

.step-circle.pending {
  background: var(--ig-gray-200);
  color: var(--ig-gray-800);
}

.step-connector {
  width: 56px;
  margin-block-start: 13px;
  border-block-start: 1px solid var(--ig-gray-900);
}

.step-connector.pending {
  border-block-start-style: dashed;
  border-block-start-color: var(--ig-gray-400);
}

.step-label {
  color: #556c86;
  font-family: "Aktiv Grotesk", sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.3px;
}
```

<div class="divider"></div>

## Usage

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

You will then need to import the [`IgcBadgeComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcBadgeComponent), its necessary CSS, and register its module, like so:

```ts
import { defineComponents, IgcBadgeComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcBadgeComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

The simplest way to start using the [`IgcBadgeComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcBadgeComponent) is as follows:

```html
<igc-badge></igc-badge>
```

To display a subtle border around the badge, you can set the [`outlined`](mcp:get_api_reference?platform=webcomponents&component=IgcBadgeComponent&member=outlined) attribute of the badge.

```html
<igc-badge outlined></igc-badge>
```

## Examples

### Variants

The Ignite UI for Web Components badge supports several pre-defined stylistic variants. You can change the variant by assigning one of the supported values - `primary`(default), `info`, `success`, `warning`, or `danger` to the [`variant`](mcp:get_api_reference?platform=webcomponents&component=IgcBadgeComponent&member=variant) attribute.

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

igc-avatar {
    --ig-size: var(--ig-size-small);
    --ig-avatar-background: var(--ig-gray-700);
    --ig-avatar-color: var(--ig-gray-50);
}

.variant-item:first-child igc-avatar igc-icon,
.variant-item:nth-child(4) igc-avatar igc-icon {
    color: var(--ig-gray-50);
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
    color: #556c86;
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

.badge-info-blue {
    --ig-badge-background-color: #0057A9;
}

.badge-info-blue::part(base) {
    background-color: #0057A9;
}

.badge-primary-blue {
    --ig-badge-background-color: #0070BA;
}

.badge-primary-blue::part(base) {
    background-color: #0070BA;
}

.badge-warning-black::part(base) {
    background-color: #FAA419;
    color: #000;
}

igc-badge::part(base),
igc-badge igc-icon {
    color: var(--ig-gray-50);
}

igc-badge igc-icon {
    fill: var(--ig-gray-50);
}
```

### Shape

The badge component supports `rounded`(default) and `square` shapes. These values can be assigned to the [`shape`](mcp:get_api_reference?platform=webcomponents&component=IgcBadgeComponent&member=shape) attribute.

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

.row-label {
  justify-self: end;
  color: #556c86;
  font-family: "Aktiv Grotesk", sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.3px;
}

.badge-small {
  --ig-size: var(--ig-size-small);
}

.badge-info-blue {
  --ig-badge-background-color: #0057A9;
}

.badge-info-blue::part(base) {
  background-color: #0057A9;
}

igc-badge::part(base),
igc-badge igc-icon {
  color: var(--ig-gray-50);
}

igc-badge igc-icon {
  fill: var(--ig-gray-50);
}
```

### Dot

The Ignite UI for Web Components badge component can also render as a minimal dot indicator for notifications by setting its `dot` attribute. Dot badges do not support content, but they can be outlined and can use any of the available dot types (e.g., primary, success, info, etc.).

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
    background: var(--ig-gray-200);
    color: var(--ig-gray-800);
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

.row-indicator igc-badge,
.nav-icon igc-badge {
    --ig-badge-background-color: #0057A9;
}

.row-indicator igc-badge::part(base),
.nav-icon igc-badge::part(base) {
    background-color: #0057A9;
}

.row-title {
    flex: 1;
}

.row-time {
    font-size: 13px;
    color: var(--ig-gray-900);
}

.row-time.unread {
    color: #0057A9;
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
    color: #0075D2;
}

.nav-icon {
    position: relative;
    display: inline-flex;
}
```

## Styling

The [`IgcBadgeComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcBadgeComponent) component exposes a `base` CSS part that can be used to change all of its style properties.

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
    --icon-color: #248436;
    --ig-avatar-background: #A9CEB0;
    --ig-avatar-color: #248436;
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

<div class="divider--half"></div>

## API References

- [`IgcBadgeComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcBadgeComponent)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
