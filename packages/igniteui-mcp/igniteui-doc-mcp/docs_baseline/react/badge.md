---
title: React Badge | Infragistics
_description: Infragistics' React Badge component allows you to display content in a predefined style to decorate other components anywhere in an application.
_keywords: React, UI controls, web widgets, UI widgets, Web Components, React Badge Components, Infragistics
_license: MIT
mentionedTypes: ["Badge"]
_tocName: Badge
---

# React Badge Overview

The Ignite UI for React Badge is a component used in conjunction with avatars, navigation menus, or other components in an application when a visual notification is needed. Badges are usually designed with predefined styles to communicate information, success, warnings, or errors.

## React Badge Example

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
  font-style: normal;
  line-height: 20px;
  letter-spacing: 0.3px;
}
```
```tsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrBadge, IgrAvatar, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const favoriteBorderIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>';
const closeIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';

const steps = [
  { index: 1, label: 'Orders', current: false, pending: false },
  { index: 2, label: 'Payment', current: true, pending: false },
  { index: 3, label: 'Shipping', current: false, pending: true }
];

export default function BadgeOutlined(): JSX.Element {
  useEffect(() => {
    registerIconFromText('favorite_border', favoriteBorderIcon, 'material');
    registerIconFromText('close', closeIcon, 'material');
  }, []);

  return (
    <div className="badge-outlined">
      <div className="outlined-example">
        <div className="icon-circle">
          <IgrIcon name="favorite_border" collection="material" />
        </div>
        <IgrBadge variant="info" outlined={true} className="badge-info-blue">23</IgrBadge>
      </div>
      <div className="outlined-example">
        <IgrAvatar initials="AZ" shape="rounded" />
        <IgrBadge variant="danger" outlined={true}>
          <IgrIcon name="close" collection="material" />
        </IgrBadge>
      </div>
      <div className="steps">
        {steps.map((step, i) => (
          <React.Fragment key={step.label}>
            {i > 0 && (
              <span className={step.pending ? 'step-connector pending' : 'step-connector'} />
            )}
            <div className="step">
              <div className="step-marker">
                <span className={step.pending ? 'step-circle pending' : 'step-circle'}>
                  {step.index}
                </span>
                {step.current && (
                  <IgrBadge dot={true} variant="info" outlined={true} className="payment-dot-blue" />
                )}
              </div>
              <span className="step-label">{step.label}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeOutlined />);
```

<div class="divider"></div>

## Usage

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrBadge`](mcp:get_api_reference?platform=react&component=IgrBadge) and its necessary CSS like so:

```tsx
import { IgrBadge } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

The simplest way to start using the [`IgrBadge`](mcp:get_api_reference?platform=react&component=IgrBadge) is as follows:

```tsx
<IgrBadge />
```

To display a subtle border around the badge, you can set the [`outlined`](mcp:get_api_reference?platform=react&component=IgrBadge&member=outlined) attribute of the badge.

```tsx
<IgrBadge outlined={true} ></IgrBadge>
```

## Examples

### Variants

The Ignite UI for React badge supports several pre-defined stylistic variants. You can change the variant by assigning one of the supported values - `primary`(default), `info`, `success`, `warning`, or `danger` to the [`variant`](mcp:get_api_reference?platform=react&component=IgrBadge&member=variant) attribute.

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
	font-style: normal;
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
                    <IgrBadge outlined={true} variant="primary" className="badge-primary-blue">2</IgrBadge>
                </div>
                <span>Primary</span>
            </div>
            <div className="variant-item">
                <div className="avatar-wrapper">
                    <IgrAvatar initials="AZ" shape="circle" />
                    <IgrBadge outlined={true} variant="info" className="badge-info-blue">
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
                    <IgrBadge outlined={true} variant="warning" className="badge-warning-black">2</IgrBadge>
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

### Shape

The badge component supports `rounded`(default) and `square` shapes. These values can be assigned to the [`shape`](mcp:get_api_reference?platform=react&component=IgrBadge&member=shape) attribute.

```tsx
<IgrBadge shape="square" ></IgrBadge>
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
  font-style: normal;
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
                <IgrBadge variant="info" shape="square" className="badge-info-blue">
                    <IgrIcon name="check" collection="material" />
                </IgrBadge>
                <IgrBadge variant="info" shape="square" className="badge-info-blue">2</IgrBadge>
                <IgrBadge variant="info" shape="square" className="badge-small badge-info-blue">
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

### Dot

The Ignite UI for React badge component can also render as a minimal dot indicator for notifications by setting its `dot` attribute. Dot badges do not support content, but they can be outlined and can use any of the available dot types (e.g., primary, success, info, etc.).

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

## Styling

The [`IgrBadge`](mcp:get_api_reference?platform=react&component=IgrBadge) component exposes a `base` CSS part that can be used to change all of its style properties.

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

<div class="divider--half"></div>

## API References

- [`IgrBadge`](mcp:get_api_reference?platform=react&component=IgrBadge)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
