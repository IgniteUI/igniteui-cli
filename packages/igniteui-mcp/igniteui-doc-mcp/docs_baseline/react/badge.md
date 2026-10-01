---
title: "Badge"
description: "The Ignite UI for React Badge displays a short status, category, count, or notification indicator alongside avatars, navigation menus, and other components."
keywords: "React Badge, Ignite UI for React, badge indicator"
license: MIT
mentionedTypes: ["Badge"]
last_updated: "2026-07-24"
llms:
  description: "The Ignite UI for React Badge component displays a short status, category, count, or notification indicator alongside avatars, navigation menus, and other components."
_tocName: Badge
---
# Badge Component

The React Badge component is provided by the platform-specific Ignite UI for React package and is used in conjunction with avatars, navigation menus, or other components in an application when a visual notification is needed. Badges are usually designed with predefined styles to communicate information, success, warnings, or errors.

## Live Demo

The React Badge demo shows how the component can communicate a compact status or notification next to another interface element.

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
```tsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAvatar, IgrBadge, IgrChip, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const checkIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
const mailIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5z"/></svg>';
const notificationsIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1z"/></svg>';

export default function BadgeOverview(): JSX.Element {
  useEffect(() => {
    registerIconFromText('check', checkIcon, 'material');
    registerIconFromText('mail', mailIcon, 'material');
    registerIconFromText('notifications', notificationsIcon, 'material');
  }, []);

  return (
    <div className="badge-overview">
      <div className="badge-example avatar-example">
        <IgrAvatar
          src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
          shape="circle"
          size="small"
        />
        <IgrBadge outlined={true} variant="success">
          <IgrIcon name="check" collection="material" />
        </IgrBadge>
      </div>
      <div className="badge-example icon-example">
        <IgrIcon name="mail" collection="material" />
        <IgrBadge outlined={true} variant="danger">
          2
        </IgrBadge>
      </div>
      <div className="badge-example event-example">
        <IgrChip>Events</IgrChip>
        <IgrBadge outlined={true} variant="info">
          new
        </IgrBadge>
      </div>
      <div className="badge-example notification-example">
        <IgrIcon name="notifications" collection="material" />
        <IgrBadge dot={true} outlined={true} variant="danger" />
      </div>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeOverview />);
```

## Anatomy

The React Badge presents a compact label or dot indicator that decorates another interface element.

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

To use the React Badge, follow the [Ignite UI for React Getting Started](../general-getting-started.md) topic for the basic project setup, then register the component for your target platform.

For React using the **igniteui-react** package, install the package:

```cmd
npm install igniteui-react
```

You will then need to import the Badge wrapper and its theme CSS, like so:

```tsx
import { IgrBadge } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

The simplest way to start using the [`IgrBadge`](mcp:get_api_reference?platform=react&component=IgrBadge) is as follows:

```tsx
<IgrBadge />
```

## Usage

Use the React Badge to display a short status, category, count, or notification indicator alongside another component.

The following example shows a success Badge displayed on an Avatar. Import the Badge and Avatar components from the platform-specific package, then place the Badge inside a relatively positioned wrapper.

```tsx
import { IgrAvatar, IgrBadge } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

Add the components to your JSX:

```tsx
<div className="wrapper">
  <IgrAvatar icon="person" shape="circle" size="small"></IgrAvatar>
  <IgrBadge icon="check" variant="success"></IgrBadge>
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

The Ignite UI for React Badge can carry different types of content, such as a number or an icon.

Use the [`value`](mcp:get_api_reference?platform=react&component=IgrBadge&member=value) property to display text or a numeric count inside the Badge:

```tsx
<IgrBadge variant="primary">12</IgrBadge>
```

You can also project content directly. When projecting both an icon and text, wrap the text to keep the correct padding.

```tsx
<IgrBadge>
  <IgrIcon name="bluetooth" />
  <span>Bluetooth</span>
</IgrBadge>
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
  font-style: normal;
  line-height: 20px;
  letter-spacing: 0.3px;
}
```
```tsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAvatar, IgrBadge, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const checkIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';

export default function BadgeType(): JSX.Element {
    useEffect(() => {
        registerIconFromText('check', checkIcon, 'material');
    }, []);

    return (
        <div className="badge-type">
            <div className="badge-type-item">
                <div className="avatar-wrapper">
                    <IgrAvatar
                        src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
                        shape="circle"
                        size="small"
                    />
                    <IgrBadge dot={true} outlined={true} variant="success" className="dot-badge" />
                </div>
                <span>Dot</span>
            </div>
            <div className="badge-type-item">
                <div className="avatar-wrapper">
                    <IgrAvatar
                        src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
                        shape="circle"
                        size="small"
                    />
                    <IgrBadge outlined={true} variant="success">
                        <IgrIcon name="check" collection="material" />
                    </IgrBadge>
                </div>
                <span>Icon</span>
            </div>
            <div className="badge-type-item">
                <div className="avatar-wrapper">
                    <IgrAvatar
                        src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
                        shape="circle"
                        size="small"
                    />
                    <IgrBadge outlined={true} variant="success">
                        2
                    </IgrBadge>
                </div>
                <span>Text</span>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeType />);
```

#### Icon

Add an icon as child content inside the Badge:

```tsx
<IgrBadge variant="success">
  <IgrIcon name="heart-monitor" />
</IgrBadge>
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
    font-style: normal;
    line-height: 20px;
    letter-spacing: 0.3px;
    white-space: nowrap;
    transform: translateY(4px);
}

.avatar-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
}
```
```tsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAvatar, IgrBadge, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const checkIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
const favoriteBorderIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>';
const notificationsIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>';
const starBorderIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z"/></svg>';
const settingsIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7.03 7.03 0 0 0-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84a.48.48 0 0 0-.48.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.48-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z"/></svg>';
const closeIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';

const badges = [
    { icon: 'check', variant: 'success', label: 'check' },
    { icon: 'favorite_border', variant: 'danger', label: 'favorite' },
    { icon: 'notifications', variant: 'info', label: 'notification' },
    { icon: 'star_border', variant: 'warning', label: 'star' },
    { icon: 'settings', variant: 'info', label: 'settings' }
];

export default function BadgeIcon(): JSX.Element {
    useEffect(() => {
        registerIconFromText('check', checkIcon, 'material');
        registerIconFromText('favorite_border', favoriteBorderIcon, 'material');
        registerIconFromText('notifications', notificationsIcon, 'material');
        registerIconFromText('star_border', starBorderIcon, 'material');
        registerIconFromText('settings', settingsIcon, 'material');
        registerIconFromText('close', closeIcon, 'material');
    }, []);

    return (
        <div className="badge-icon">
            {badges.map((item) => (
                <div className="badge-icon-item" key={item.label}>
                    <div className="icon-wrapper">
                        <IgrBadge variant={item.variant as any} className={`badge-${item.label}`}>
                            <IgrIcon name={item.icon} collection="material" />
                        </IgrBadge>
                    </div>
                    <span>{item.label}</span>
                </div>
            ))}
            <div className="badge-icon-item">
                <div className="icon-wrapper avatar-wrapper">
                    <IgrAvatar initials="AZ" shape="circle" size="small" />
                    <IgrBadge variant="danger" outlined={true}>
                        <IgrIcon name="close" collection="material" />
                    </IgrBadge>
                </div>
                <span>on avatar</span>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeIcon/>);
```

#### Dot

The Ignite UI for React Badge can also render as a minimal dot indicator for notifications by setting its [`dot`](mcp:get_api_reference?platform=react&component=IgrBadge&member=dot) attribute. Dot badges do not support content, but they can be outlined and can use any of the available dot types (for example, `primary`, `success`, or `info`).

Set the [`dot`](mcp:get_api_reference?platform=react&component=IgrBadge&member=dot) attribute to render a minimal notification indicator without content:

```tsx
<IgrBadge dot={true} ></IgrBadge>
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
```tsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { IgrAvatar, IgrBadge, IgrIcon, registerIconFromText } from 'igniteui-react';
import './index.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const notificationsIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1z"/></svg>';
const chevronRightIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>';
const homeIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
const personIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';
const facebookMessengerIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.19.16.15.26.35.27.57l.05 1.78c.02.57.61.94 1.13.71l1.98-.87c.17-.07.36-.09.54-.04 1 .27 2.05.42 3.14.42 5.64 0 10-4.13 10-9.7S17.64 2 12 2zm6 7.46-2.94 4.66c-.47.74-1.47.93-2.18.4l-2.34-1.75a.6.6 0 0 0-.72 0l-3.16 2.4c-.42.32-.97-.18-.69-.63l2.94-4.66c.47-.74 1.47-.93 2.18-.4l2.34 1.75c.21.16.51.16.72 0l3.16-2.4c.42-.32.97.18.69.63z"/></svg>';

const notifications = [
  { title: 'Contract renewal', time: '09:12', unread: true },
  { title: 'Weekly digest', time: 'Yesterday', unread: false }
];

const tabs = [
  { label: 'Home', icon: 'home', active: true, hasUpdates: false },
  { label: 'Chat', icon: 'facebookMessenger', active: false, hasUpdates: true },
  { label: 'Profile', icon: 'person', active: false, hasUpdates: false }
];

export default function BadgeDot(): JSX.Element {
  useEffect(() => {
    registerIconFromText('notifications', notificationsIcon, 'material');
    registerIconFromText('chevron_right', chevronRightIcon, 'material');
    registerIconFromText('home', homeIcon, 'material');
    registerIconFromText('person', personIcon, 'material');
    registerIconFromText('facebookMessenger', facebookMessengerIcon, 'material');
  }, []);

  return (
    <div className="badge-dot">
      <div className="dot-example icon-example">
        <div className="icon-circle">
          <IgrIcon name="notifications" collection="material" />
        </div>
        <IgrBadge dot={true} outlined={true} variant="danger" />
      </div>
      <div className="dot-example notifications-card">
        {notifications.map((item) => (
          <div className="notification-row" key={item.title}>
            <span className="row-indicator">
              {item.unread && <IgrBadge dot={true} variant="info" />}
            </span>
            <span className="row-title">{item.title}</span>
            <span className={item.unread ? 'row-time unread' : 'row-time'}>{item.time}</span>
            <IgrIcon className="row-chevron" name="chevron_right" collection="material" />
          </div>
        ))}
      </div>
      <div className="dot-example avatar-example">
        <IgrAvatar
          src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
          shape="circle"
          size="small"
        />
        <IgrBadge dot={true} outlined={true} variant="danger" />
      </div>
      <div className="dot-example nav-card">
        {tabs.map((tab) => (
          <div className={tab.active ? 'nav-item active' : 'nav-item'} key={tab.label}>
            <span className="nav-icon">
              <IgrIcon name={tab.icon} collection="material" />
              {tab.hasUpdates && <IgrBadge dot={true} variant="info" />}
            </span>
            <span className="nav-label">{tab.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeDot />);
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

igc-badge::part(base),
igc-badge igc-icon {
  color: var(--ig-gray-50);
}

igc-badge igc-icon {
  fill: var(--ig-gray-50);
}

.badge-size {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 32px;
  min-height: 7rem;
}

.badge-size-row {
  display: grid;
  grid-template-columns: 80px 32px 40px 40px;
  align-items: center;
  justify-items: center;
  gap: 8px;
}

.row-label {
  justify-self: end;
  color: var(--ig-gray-600);
  font-family: "Aktiv Grotesk", sans-serif;
  font-size: 13px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  letter-spacing: 0.3px;
}

.badge-large { --ig-size: var(--ig-size-large); }
.badge-medium { --ig-size: var(--ig-size-medium); }
.badge-small { --ig-size: var(--ig-size-small); }
```
```tsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrBadge, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const checkIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';

export default function BadgeSize(): JSX.Element {
    useEffect(() => {
        registerIconFromText('check', checkIcon, 'material');
    }, []);

    return (
        <div className="badge-size">
            <div className="badge-size-row badge-small">
                <span className="row-label">Small</span>
                <IgrBadge dot={true} variant="danger" />
                <IgrBadge variant="info">2</IgrBadge>
                <IgrBadge variant="success">
                    <IgrIcon name="check" collection="material" />
                </IgrBadge>
            </div>
            <div className="badge-size-row badge-medium">
                <span className="row-label">Medium</span>
                <IgrBadge dot={true} variant="danger" />
                <IgrBadge variant="info">2</IgrBadge>
                <IgrBadge variant="success">
                    <IgrIcon name="check" collection="material" />
                </IgrBadge>
            </div>
            <div className="badge-size-row badge-large">
                <span className="row-label">Large</span>
                <IgrBadge dot={true} variant="danger" />
                <IgrBadge variant="info">2</IgrBadge>
                <IgrBadge variant="success">
                    <IgrIcon name="check" collection="material" />
                </IgrBadge>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeSize />);
```

### Shape

The badge component supports `rounded`(default) and `square` shapes. These values can be assigned to the [`Shape`](mcp:get_api_reference?platform=react&component=IgrBadge&member=shape) attribute.

```tsx
<IgrBadge shape="square" ></IgrBadge>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-badge::part(base),
igc-badge igc-icon {
  color: var(--ig-gray-50);
}

igc-badge igc-icon {
  fill: var(--ig-gray-50);
}

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
  color: var(--ig-gray-600);
  font-family: "Aktiv Grotesk", sans-serif;
  font-size: 13px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  letter-spacing: 0.3px;
}

.badge-small {
  --ig-size: var(--ig-size-small);
}
```
```tsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrBadge, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const checkIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';

export default function BadgeShape(): JSX.Element {
    useEffect(() => {
        registerIconFromText('check', checkIcon, 'material');
    }, []);

    return (
        <div className="badge-shape">
            <div className="badge-shape-row">
                <span className="row-label">Rounded</span>
                <IgrBadge variant="success" shape="rounded">
                    <IgrIcon name="check" collection="material" />
                </IgrBadge>
                <IgrBadge variant="success" shape="rounded">2</IgrBadge>
                <IgrBadge variant="success" shape="rounded" className="badge-small">
                    <IgrIcon name="check" collection="material" />
                </IgrBadge>
            </div>
            <div className="badge-shape-row">
                <span className="row-label">Square</span>
                <IgrBadge variant="info" shape="square">
                    <IgrIcon name="check" collection="material" />
                </IgrBadge>
                <IgrBadge variant="info" shape="square">2</IgrBadge>
                <IgrBadge variant="info" shape="square" className="badge-small">
                    <IgrIcon name="check" collection="material" />
                </IgrBadge>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeShape/>);
```

When the badge has a `square` shape, it can be further customized by setting a custom border radius using the `--border-radius` CSS variable.

### Variants

The Ignite UI for React Badge supports several pre-defined stylistic variants (Primary, Info, Success, Warn, and Error). Assign one of the supported values — `primary`, `info`, `success`, `warning`, or `danger` — to the [`variant`](mcp:get_api_reference?platform=react&component=IgrBadge&member=variant) attribute.

```tsx
<IgrBadge variant="success" ></IgrBadge>
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
	font-style: normal;
	line-height: 20px;
	letter-spacing: 0.3px;
}

.avatar-wrapper {
	position: relative;
	display: flex;
}
```
```tsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAvatar, IgrBadge, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const checkIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
const closeIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';
const mailIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5z"/></svg>';
const notificationsIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1z"/></svg>';

export default function BadgeVariants(): JSX.Element {
    useEffect(() => {
        registerIconFromText('check', checkIcon, 'material');
        registerIconFromText('close', closeIcon, 'material');
        registerIconFromText('mail', mailIcon, 'material');
        registerIconFromText('notifications', notificationsIcon, 'material');
    }, []);

    return (
        <div className="badge-variants">
            <div className="variant-item">
                <div className="avatar-wrapper">
                    <IgrAvatar shape="circle">
                        <IgrIcon name="notifications" collection="material" />
                    </IgrAvatar>
                    <IgrBadge outlined={true} variant="primary">2</IgrBadge>
                </div>
                <span>Primary</span>
            </div>
            <div className="variant-item">
                <div className="avatar-wrapper">
                    <IgrAvatar initials="AZ" shape="circle" />
                    <IgrBadge outlined={true} variant="info">
                        <IgrIcon name="check" collection="material" />
                    </IgrBadge>
                </div>
                <span>Info</span>
            </div>
            <div className="variant-item">
                <div className="avatar-wrapper">
                    <IgrAvatar
                        src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
                        shape="circle"
                    />
                    <IgrBadge outlined={true} variant="success">
                        <IgrIcon name="check" collection="material" />
                    </IgrBadge>
                </div>
                <span>Success</span>
            </div>
            <div className="variant-item">
                <div className="avatar-wrapper">
                    <IgrAvatar shape="circle">
                        <IgrIcon name="mail" collection="material" />
                    </IgrAvatar>
                    <IgrBadge outlined={true} variant="warning">2</IgrBadge>
                </div>
                <span>Warn</span>
            </div>
            <div className="variant-item">
                <div className="avatar-wrapper">
                    <IgrAvatar
                        src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
                        shape="circle"
                    />
                    <IgrBadge outlined={true} variant="danger">
                        <IgrIcon name="close" collection="material" />
                    </IgrBadge>
                </div>
                <span>Error</span>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeVariants />);
```

### Outlined

The badge can also have a subtle border around it when the [`outlined`](mcp:get_api_reference?platform=react&component=IgrBadge&member=outlined) attribute is set.

```tsx
<IgrBadge outlined={true} ></IgrBadge>
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
  transform: scale(1.2);
  transform-origin: center;
}

.steps::part(content) {
  display: none;
}
```
```tsx
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrBadge, IgrAvatar, IgrIcon, IgrStepper, IgrStep, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const favoriteBorderIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>';
const closeIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';

export default function BadgeOutlined(): JSX.Element {
  const stepperRef = useRef<IgrStepper>(null);

  useEffect(() => {
    registerIconFromText('favorite_border', favoriteBorderIcon, 'material');
    registerIconFromText('close', closeIcon, 'material');
    stepperRef.current?.navigateTo(1);
  }, []);

  return (
    <div className="badge-outlined">
      <div className="outlined-example">
        <div className="icon-circle">
          <IgrIcon name="favorite_border" collection="material" />
        </div>
        <IgrBadge variant="info" outlined={true}>23</IgrBadge>
      </div>
      <div className="outlined-example">
        <IgrAvatar initials="AZ" shape="rounded" />
        <IgrBadge variant="danger" outlined={true}>
          <IgrIcon name="close" collection="material" />
        </IgrBadge>
      </div>
      <div className="stepper-wrapper">
        <IgrStepper ref={stepperRef} className="steps" orientation="horizontal">
        <IgrStep complete={true}>
          <span slot="title">Orders</span>
        </IgrStep>
        <IgrStep>
          <span slot="title">Payment</span>
        </IgrStep>
        <IgrStep>
          <span slot="title">Shipping</span>
        </IgrStep>
        </IgrStepper>
        <IgrBadge className="flagged-badge" dot={true} variant="info" outlined={true} />
      </div>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeOutlined />);
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

The React Badge exposes platform-specific properties for controlling its content, appearance, and indicator behavior.

The React Badge exposes the following properties.

| name | type | default | description |
| --- | --- | --- | --- |
| [`dot`](mcp:get_api_reference?platform=react&component=IgrBadge&member=dot) | boolean | `false` | Renders the Badge as a dot indicator. |
| [`outlined`](mcp:get_api_reference?platform=react&component=IgrBadge&member=outlined) | boolean | `false` | Displays an outline around the Badge. |
| [`shape`](mcp:get_api_reference?platform=react&component=IgrBadge&member=shape) | BadgeShape | `rounded` | Sets the Badge shape. |
| [`variant`](mcp:get_api_reference?platform=react&component=IgrBadge&member=variant) | StyleVariant | `primary` | Sets the Badge stylistic variant. |

## Styling

The React Badge uses the [`IgrBadge`](mcp:get_api_reference?platform=react&component=IgrBadge) component's `base` CSS part and documented styling variables to customize its appearance.

### Sass Theming

Use the Ignite UI for React theme system to style the Badge consistently with the rest of your application.

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
```tsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAvatar, IgrBadge, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const personIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';
const photoCameraIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2"/><path d="M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>';
const starBorderIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z"/></svg>';
const favoriteBorderIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>';

export default function BadgeStyling(): JSX.Element {
    useEffect(() => {
        registerIconFromText('person', personIcon, 'material');
        registerIconFromText('photo_camera', photoCameraIcon, 'material');
        registerIconFromText('star_border', starBorderIcon, 'material');
        registerIconFromText('favorite_border', favoriteBorderIcon, 'material');
    }, []);

    return (
        <div className="badge-styling">
            <div className="styling-item green">
                <IgrAvatar shape="circle">
                    <IgrIcon name="person" collection="material" />
                </IgrAvatar>
                <IgrBadge outlined={true} className="badge-teal">
                    <IgrIcon name="photo_camera" collection="material" />
                </IgrBadge>
            </div>
            <div className="styling-item">
                <IgrAvatar
                    src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
                    shape="circle"
                />
                <IgrBadge outlined={true} className="badge-amber">
                    <IgrIcon name="star_border" collection="material" />
                </IgrBadge>
            </div>
            <div className="styling-item pink">
                <IgrAvatar shape="circle">
                    <IgrIcon name="favorite_border" collection="material" />
                </IgrAvatar>
                <IgrBadge outlined={true} className="badge-magenta">2</IgrBadge>
            </div>
            <div className="styling-item">
                <IgrAvatar
                    src="https://dl.infragistics.com/x/img/avatars/avatar6.png"
                    shape="rounded"
                />
                <IgrBadge dot={true} outlined={true} className="badge-lime" />
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeStyling/>);
```

### Styling with Tailwind

You can style the Badge with the custom Tailwind utility classes from `igniteui-theming`. Make sure to [set up Tailwind](/themes/tailwind) first, then import the Ignite UI utilities in your global stylesheet:

```css
@import "tailwindcss";
@import "igniteui-theming/tailwind/utilities/material.css";
```

```jsx
<IgrBadge className="!light-badge ![--background:#FF4E00] ![--border-radius:4px]"></IgrBadge>
```

The exclamation mark (`!`) gives the Tailwind utility precedence over the Badge's default theme styles.

```css
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);
@source "./index.tsx";

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
```tsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAvatar, IgrBadge, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const personIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';
const closeIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';
const volumeOffIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.8 8.8 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z"/></svg>';
const removeIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"/></svg>';
const checkIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';

export default function BadgeTailwindStyling(): JSX.Element {
    useEffect(() => {
        registerIconFromText('person', personIcon, 'material');
        registerIconFromText('close', closeIcon, 'material');
        registerIconFromText('volume_off', volumeOffIcon, 'material');
        registerIconFromText('remove', removeIcon, 'material');
        registerIconFromText('check', checkIcon, 'material');
    }, []);

    return (
        <div className="badge-parent flex items-center justify-center !gap-12">
            <div className="relative flex">
                <IgrAvatar initials="AZ" shape="rounded" size="small" />
                <IgrBadge outlined={true} className="badge-style badge-close">
                    <IgrIcon name="close" collection="material" />
                </IgrBadge>
            </div>
            <div className="relative flex">
                <IgrAvatar shape="rounded" size="small">
                    <IgrIcon name="person" collection="material" />
                </IgrAvatar>
                <IgrBadge outlined={true} className="badge-style badge-volume">
                    <IgrIcon name="volume_off" collection="material" />
                </IgrBadge>
            </div>
            <div className="relative flex">
                <IgrAvatar initials="AZ" shape="circle" size="small" />
                <IgrBadge outlined={true} className="badge-style badge-remove">
                    <IgrIcon name="remove" collection="material" />
                </IgrBadge>
            </div>
            <div className="relative flex">
                <IgrAvatar shape="square" size="small">
                    <IgrIcon name="person" collection="material" />
                </IgrAvatar>
                <IgrBadge outlined={true} className="badge-style badge-check">
                    <IgrIcon name="check" collection="material" />
                </IgrBadge>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeTailwindStyling/>);
```

## Accessibility

The React Badge is a non-interactive status visual that communicates a short count, state, or notification.

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

Infragistics documents Ignite UI for React accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

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

The React Badge has the following platform-independent limitations.

- A dot Badge is an indicator only and cannot display text or an icon.
- Badge styling and variant/type names differ between Angular and the other supported frameworks. Use the platform-specific examples and API links on this page rather than copying an attribute between frameworks.
- The Badge is a visual status indicator and does not provide keyboard interaction of its own.

## API References

The React Badge API reference lists the complete verified API surface for the target platform.
[`IgrBadge`](mcp:get_api_reference?platform=react&component=IgrBadge)

## Dependencies

The React Badge requires a theme stylesheet to apply its visual styling. See the framework-specific setup in **Getting Started**.

## Additional Resources

The following resources provide additional React Badge guidance and project support.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

## Related Components

The React Badge is commonly used with related components such as Avatar when a status indicator belongs to another visual element.

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
  

