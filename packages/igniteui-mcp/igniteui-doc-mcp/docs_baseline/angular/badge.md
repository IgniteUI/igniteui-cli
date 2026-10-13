---
title: "Badge"
description: "The Ignite UI for Angular Badge displays a short status, category, count, or notification indicator alongside avatars, navigation menus, and other components."
keywords: "Angular Badge, Ignite UI for Angular, badge indicator"
license: MIT
mentionedTypes: ["Badge"]
last_updated: "2026-07-24"
llms:
  description: "The Ignite UI for Angular Badge component displays a short status, category, count, or notification indicator alongside avatars, navigation menus, and other components."
_tocName: Badge
---
# Badge Component

The Angular Badge component is provided by the platform-specific Ignite UI for Angular package and is used in conjunction with avatars, navigation menus, or other components in an application when a visual notification is needed. Badges are usually designed with predefined styles to communicate information, success, warnings, or errors.

## Live Demo

The Angular Badge demo shows how the component can communicate a compact status or notification next to another interface element.

```typescript
import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { IgxChipComponent } from 'igniteui-angular/chips';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-badge-overview',
    templateUrl: './badge-overview.component.html',
    styleUrls: ['./badge-overview.component.scss'],
    imports: [IgxAvatarComponent, IgxBadgeComponent, IgxChipComponent, IgxIconComponent]
})
export class BadgeOverviewComponent { }
```
```html
<igx-avatar
    class="avatar-anchor"
    src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
    shape="circle"
    size="small">
</igx-avatar>
<igx-badge icon="check" outlined type="success"></igx-badge>

<igx-icon class="mail-anchor">mail</igx-icon>
<igx-badge value="2" outlined type="error"></igx-badge>

<igx-chip class="events-anchor">Events</igx-chip>
<igx-badge value="new" outlined type="info"></igx-badge>

<igx-icon class="notifications-anchor">notifications</igx-icon>
<igx-badge dot outlined type="error"></igx-badge>
```
```scss
@use "sass:list";
@use "igniteui-theming/sass/typography" as *;

:host {
    display: grid;
    grid-auto-flow: column;
    place-content: center;
    place-items: center;
    column-gap: rem(60px);
    min-height: 7rem;
}

igx-icon {
    color: var(--ig-gray-700);
    font-size: rem(24px);
}

igx-chip {
    --ig-size: var(--ig-size-large);
}

igx-badge {
    --ig-size: var(--ig-size-small);

    position: absolute;
    inset-block-start: anchor(10%);
    inset-inline-start: anchor(85.5%);
    translate: -50% -50%;
}

igx-badge:nth-of-type(1) {
    inset-block-start: anchor(85.5%);
}

$anchors: avatar, mail, events, notifications;

@each $anchor in $anchors {
    $i: list.index($anchors, $anchor);

    .#{$anchor}-anchor {
        anchor-name: --#{$anchor};
    }

    igx-badge:nth-of-type(#{$i}) {
        position-anchor: --#{$anchor};
    }
}
```

## Anatomy

The Angular Badge presents a compact label or dot indicator that decorates another interface element.

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

To use the Angular Badge, follow the [Ignite UI for Angular Getting Started](../general/getting-started.md) topic for the basic project setup, then register the component for your target platform.

For Angular using the **igniteui-angular** package, install the package:

```cmd
npm install igniteui-angular
```

Then import `IgxBadgeComponent` in the component `imports` collection.

```ts
import { IgxBadgeComponent } from 'igniteui-angular/badge';
```

The simplest way to start using the [`IgxBadge`](mcp:get_api_reference?platform=angular&component=IgxBadgeComponent) is as follows:

```html
<igx-badge></igx-badge>
```

## Usage

Use the Angular Badge to display a short status, category, count, or notification indicator alongside another component.

Let's see how the demo sample is done. It's a simple success badge on an avatar. To build that, import the `IgxAvatarModule` together with the `IgxBadgeModule`:

```typescript
import { IgxBadgeModule } from 'igniteui-angular/badge';
import { IgxAvatarModule } from 'igniteui-angular/avatar';
```

Add both modules to the component `imports` collection, or import the standalone components. Then add the components to your template:

```html
<div class="wrapper">
  <igx-avatar icon="person" shape="circle" size="small"></igx-avatar>
  <igx-badge icon="check" type="success"></igx-badge>
</div>
```

Use a relatively positioned wrapper to place the Badge over the avatar:

```scss
.wrapper {
  position: relative;
  margin-top: 15px;
}

igx-badge {
  position: absolute;
  bottom: 0;
  left: 28px;
}
```

### Type

The Badge can carry different types of content such as a number or an icon.

Use the `[value]` input to display text or a numeric count inside the Badge:

```html
<igx-badge [value]="model.value"></igx-badge>
```

Use the `[icon]` input to display an icon inside the Badge:

```html
<igx-badge icon="check" type="success"></igx-badge>
```

When both `[icon]` and `[value]` are set, the Badge displays both simultaneously:

```html
<igx-badge icon="check" value="5" type="success"></igx-badge>
```

You can also project content directly. When projecting both an icon and text, wrap the text to keep the correct padding:

```html
<igx-badge>
  <igx-icon>bluetooth</igx-icon>
  <span>Bluetooth</span>
</igx-badge>
```

```typescript
import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';

@Component({
    selector: 'app-badge-type',
    templateUrl: './badge-type.component.html',
    styleUrls: ['./badge-type.component.scss'],
    imports: [IgxAvatarComponent, IgxBadgeComponent]
})
export class BadgeTypeComponent { }
```
```html
<igx-avatar src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png" shape="circle" size="small"></igx-avatar>
<igx-badge dot outlined type="success"></igx-badge>
<span>Dot</span>

<igx-avatar src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png" shape="circle" size="small"></igx-avatar>
<igx-badge icon="check" outlined type="success"></igx-badge>
<span>Icon</span>

<igx-avatar src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png" shape="circle" size="small"></igx-avatar>
<igx-badge value="2" outlined type="success"></igx-badge>
<span>Text</span>
```
```scss
@use "sass:list";
@use "igniteui-theming/sass/typography" as *;

$types: dot, icon, text;

:host {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: auto auto;
    place-content: center;
    place-items: center;
    column-gap: rem(60px);
    row-gap: rem(16px);
    min-height: 8.5rem;
    padding: rem(32px);
}

igx-avatar {
    --ig-avatar-size: #{rem(40px)};

    grid-row: 1;
}

span {
    grid-row: 2;
    text-align: center;
    color: var(--ig-gray-600);
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: rem(13px);
    font-weight: 400;
    line-height: rem(20px);
    letter-spacing: rem(0.3px);

    @include type-style("caption") {
        margin: 0;
    }
}

igx-badge {
    --ig-size: var(--ig-size-small);

    position: absolute;
    inset-block-start: anchor(85.5%);
    inset-inline-start: anchor(85.5%);
    translate: -50% -50%;
}

@each $type in $types {
    $i: list.index($types, $type);

    igx-avatar:nth-of-type(#{$i}) {
        anchor-name: --#{$type};
    }

    igx-badge:nth-of-type(#{$i}) {
        position-anchor: --#{$type};
    }
}
```

#### Icon
In addition to Material Icons, the Angular Badge supports Material Icons Extended and other custom icon sets. Register the custom icon with `IgxIconService`, then specify its name and icon set:

```ts
this._iconService.addSvgIconFromText(heartMonitor.name, heartMonitor.value, 'imx-icons');
```

```html
<igx-badge icon="heart-monitor" iconSet="imx-icons"></igx-badge>
```

```typescript
import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';

@Component({
    selector: 'app-badge-icon',
    styleUrls: ['./badge-icon.component.scss'],
    templateUrl: './badge-icon.component.html',
    imports: [IgxAvatarComponent, IgxBadgeComponent]
})
export class BadgeIconComponent {
    public badges = [
        { icon: 'check', type: 'success', label: 'check' },
        { icon: 'favorite_border', type: 'error', label: 'favorite' },
        { icon: 'notifications', type: 'info', label: 'notification' },
        { icon: 'star_border', type: 'warning', label: 'star' },
        { icon: 'settings', type: 'info', label: 'settings' }
    ];
}
```
```html
@for (item of badges; track item.label) {
    <igx-badge [icon]="item.icon" [type]="item.type"></igx-badge>
    <span>{{ item.label }}</span>
}

<igx-avatar initials="AZ" shape="circle" size="small"></igx-avatar>
<igx-badge icon="close" type="error" outlined></igx-badge>
<span>on avatar</span>
```
```scss
@use "igniteui-theming/sass/typography" as *;

:host {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: auto auto;
    place-content: center;
    place-items: center;
    column-gap: rem(40px);
    row-gap: rem(10px);
    min-height: 8.5rem;
    padding: rem(32px);
}

igx-avatar {
    grid-row: 1;
    anchor-name: --avatar;
}

igx-badge {
    --ig-size: var(--ig-size-medium);

    grid-row: 1;
}

span {
    @include type-style("body-2") {
        margin: 0;
    }

    grid-row: 2;
    text-align: center;
    color: var(--ig-gray-600);
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: rem(13px);
    font-weight: 400;
    line-height: rem(20px);
    letter-spacing: rem(0.3px);
}

igx-badge:last-of-type {
    --ig-size: var(--ig-size-small);

    position: absolute;
    position-anchor: --avatar;
    inset-block-start: anchor(14.5%);
    inset-inline-start: anchor(85.5%);
    translate: -50% -50%;
}
```

#### Dot

The Ignite UI for Angular Badge can also render as a minimal dot indicator for notifications by setting its [`dot`](mcp:get_api_reference?platform=angular&component=IgxBadgeComponent&member=dot) attribute. Dot badges do not support content, but they can be outlined and can use any of the available dot types (for example, `primary`, `success`, or `info`).

Set the [`dot`](mcp:get_api_reference?platform=angular&component=IgxBadgeComponent&member=dot) attribute to render a minimal notification indicator without content:

```html
<igx-badge dot></igx-badge>
```

```typescript
import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { IgxIconComponent, IgxIconService} from 'igniteui-angular/icon';
import { facebookMessenger } from '@igniteui/material-icons-extended';

@Component({
    selector: 'app-badge-dot',
    styleUrls: ['./badge-dot.component.scss'],
    templateUrl: './badge-dot.component.html',
    imports: [IgxAvatarComponent, IgxBadgeComponent, IgxIconComponent]
})
export class BadgeDotComponent {
    constructor(private iconService: IgxIconService) {
        this.iconService.addSvgIconFromText('facebookMessenger', facebookMessenger.value);
    }

    public notifications = [
        { title: 'Contract renewal', time: '09:12', unread: true },
        { title: 'Weekly digest', time: 'Yesterday', unread: false }
    ];

    public tabs = [
        { label: 'Home', icon: 'home', active: true, hasUpdates: false },
        { label: 'Chat', icon: 'facebookMessenger', active: false, hasUpdates: true },
        { label: 'Profile', icon: 'person', active: false, hasUpdates: false }
    ];
}
```
```html
<igx-avatar
    class="icon-anchor"
    icon="notifications"
    shape="circle"
    size="small">
</igx-avatar>
<igx-badge dot outlined type="error"></igx-badge>

<div class="notifications-card">
    @for (item of notifications; track item.title) {
        <div class="notification-row">
            <span class="row-indicator">
                @if (item.unread) {
                    <igx-badge dot type="info"></igx-badge>
                }
            </span>
            <span class="row-title">{{ item.title }}</span>
            <span class="row-time" [class.unread]="item.unread">{{ item.time }}</span>
            <igx-icon class="row-chevron">chevron_right</igx-icon>
        </div>
    }
</div>

<igx-avatar
    class="avatar-anchor"
    src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
    shape="circle"
    size="small">
</igx-avatar>
<igx-badge dot outlined type="error"></igx-badge>

<div class="nav-card">
    @for (tab of tabs; track tab.label) {
        <div class="nav-item" [class.active]="tab.active">
            <span class="nav-icon">
                <igx-icon [name]="tab.icon"></igx-icon>
                @if (tab.hasUpdates) {
                    <igx-badge dot type="info"></igx-badge>
                }
            </span>
            <span class="nav-label">{{ tab.label }}</span>
        </div>
    }
</div>
```
```scss
@use "sass:list";
@use "igniteui-theming/sass/typography" as *;

:host {
    --sample-accent: var(--ig-primary-800);

    display: grid;
    grid-auto-flow: column;
    place-content: center;
    place-items: center;
    column-gap: rem(40px);
    min-height: 8.5rem;
}

igx-badge {
    --ig-size: var(--ig-size-small);

    position: absolute;
    inset-block-start: anchor(14.5%);
    inset-inline-start: anchor(85.5%);
    translate: -50% -50%;
}

igx-avatar.icon-anchor {
    --ig-avatar-background: var(--ig-gray-300);
}

$anchors: icon, avatar;

@each $anchor in $anchors {
    $i: list.index($anchors, $anchor);

    .#{$anchor}-anchor {
        anchor-name: --#{$anchor};
    }

    :host > igx-badge:nth-of-type(#{$i}) {
        position-anchor: --#{$anchor};
    }
}

.notifications-card,
.nav-card {
    background: var(--ig-surface-500);
    border-radius: rem(4px);
    box-shadow: 0 rem(1px) rem(3px) hsl(from var(--ig-gray-900) h s l / 0.12);
}

.notifications-card {
    min-width: rem(270px);
    padding-block: rem(8px);
}

.notification-row {
    @include type-style("body-2") {
        margin: 0;
    }

    display: flex;
    align-items: center;
    gap: rem(8px);
    padding: rem(8px) rem(12px);
    color: var(--ig-gray-900);
}

.row-indicator {
    display: inline-flex;
    justify-content: center;
    width: rem(12px);
}

.row-title {
    flex: 1;
}

.unread {
    color: var(--ig-gray-900);
    font-weight: 600;
}

.row-chevron {
    color: var(--ig-gray-600);
    font-size: rem(18px);
}

.nav-card {
    display: flex;
    align-items: center;
    gap: rem(8px);
    padding: rem(8px) rem(12px);
}

.nav-item {
    @include type-style("caption") {
        margin: 0;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: rem(4px);
    min-width: rem(56px);
    color: var(--ig-gray-700);

    &.active {
        color: var(--sample-accent);
    }
}

.nav-icon {
    position: relative;
    display: inline-flex;

    igx-badge {
        position: absolute;
        inset-block: rem(-2px) auto;
        inset-inline: auto rem(-6px);
    }
}
```

### Size

Control the Badge size with the `--size` CSS variable. For text badges smaller than `16px`, also adjust the font size and line height:

```scss
igx-badge {
  --size: 12px;

  font-size: calc(var(--size) / 2);
  line-height: normal;
}
```

```typescript
import { Component } from '@angular/core';
import { IgxBadgeComponent } from 'igniteui-angular/badge';

@Component({
    selector: 'app-badge-size',
    templateUrl: './badge-size.component.html',
    styleUrls: ['./badge-size.component.scss'],
    imports: [IgxBadgeComponent]
})
export class BadgeSizeComponent { }
```
```html
<span>Small</span>
<igx-badge dot type="error"></igx-badge>
<igx-badge value="2" type="info"></igx-badge>
<igx-badge icon="check" type="success"></igx-badge>

<span>Medium</span>
<igx-badge dot type="error"></igx-badge>
<igx-badge value="2" type="info"></igx-badge>
<igx-badge icon="check" type="success"></igx-badge>

<span>Large</span>
<igx-badge dot type="error"></igx-badge>
<igx-badge value="2" type="info"></igx-badge>
<igx-badge icon="check" type="success"></igx-badge>
```
```scss
@use "sass:list";
@use "igniteui-theming/sass/typography" as *;

:host {
    display: grid;
    grid-template-columns: rem(80px) rem(32px) rem(40px) rem(40px);
    place-content: center;
    place-items: center;
    column-gap: rem(8px);
    row-gap: rem(40px);
    padding: rem(32px);
}

span {
    justify-self: end;
    color: var(--ig-gray-600);
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: rem(13px);
    font-weight: 400;
    line-height: rem(20px);
    letter-spacing: rem(0.3px);

    @include type-style("body-2") {
        margin: 0;
    }
}

$sizes: small, medium, large;

@each $size in $sizes {
    $i: list.index($sizes, $size);

    igx-badge:nth-of-type(n + #{($i - 1) * 3 + 1}):nth-of-type(-n + #{$i * 3}) {
        --ig-size: var(--ig-size-#{$size});
    }
}
```

### Shape

The Badge shape can be set to `rounded` (the default) or `square` with the [`shape`](mcp:get_api_reference?platform=angular&component=IgxBadgeComponent&member=shape) attribute.

```html
<igx-badge icon="check" type="success" shape="square"></igx-badge>
```

```typescript
import { Component } from '@angular/core';
import { IgxBadgeComponent } from 'igniteui-angular/badge';

@Component({
    selector: 'app-badge-shape',
    templateUrl: './badge-shape.component.html',
    styleUrls: ['./badge-shape.component.scss'],
    imports: [IgxBadgeComponent]
})
export class BadgeShapeComponent { }
```
```html
<span>Rounded</span>
<igx-badge icon="check" type="success" shape="rounded"></igx-badge>
<igx-badge value="2" type="success" shape="rounded"></igx-badge>
<igx-badge icon="check" type="success" shape="rounded"></igx-badge>

<span>Square</span>
<igx-badge icon="check" type="info" shape="square"></igx-badge>
<igx-badge value="2" type="info" shape="square"></igx-badge>
<igx-badge icon="check" type="info" shape="square"></igx-badge>
```
```scss
@use "sass:list";
@use "igniteui-theming/sass/typography" as *;

:host {
    display: grid;
    grid-template-columns: rem(80px) rem(40px) rem(40px) rem(40px);
    place-content: center;
    place-items: center;
    column-gap: rem(8px);
    row-gap: rem(40px);
    min-height: 8.5rem;
}

span {
    justify-self: end;
    color: var(--ig-gray-600);
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: rem(13px);
    font-weight: 400;
    line-height: rem(20px);
    letter-spacing: rem(0.3px);

    @include type-style("body-2") {
        margin: 0;
    }
}

$sizes: small, medium, large;

@each $size in $sizes {
    $i: list.index($sizes, $size);

    igx-badge:nth-of-type(3n + #{$i}) {
        --ig-size: var(--ig-size-#{$size});
    }
}
```

When the Badge has a `square` shape, it can be further customized by setting a custom border radius using the `--border-radius` CSS variable.

### Variants

The Angular Badge supports the Primary, Info, Success, Warn, and Error types. Set the [`type`](mcp:get_api_reference?platform=angular&component=IgxBadgeComponent&member=type) attribute to select a type.

```html
<igx-badge type="success"></igx-badge>
```

```typescript
import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';

@Component({
    selector: 'app-badge-variants',
    styleUrls: ['./badge-variants.component.scss'],
    templateUrl: './badge-variants.component.html',
    imports: [IgxAvatarComponent, IgxBadgeComponent]
})
export class BadgeVariantsComponent { }
```
```html
<igx-avatar icon="notifications" shape="circle" size="small"></igx-avatar>
<igx-badge value="2" outlined type="primary"></igx-badge>
<span>Primary</span>

<igx-avatar initials="AZ" shape="circle" size="small"></igx-avatar>
<igx-badge icon="check" outlined type="info"></igx-badge>
<span>Info</span>

<igx-avatar src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png" shape="circle" size="small"></igx-avatar>
<igx-badge icon="check" outlined type="success"></igx-badge>
<span>Success</span>

<igx-avatar icon="mail" shape="circle" size="small"></igx-avatar>
<igx-badge value="2" outlined type="warning"></igx-badge>
<span>Warn</span>

<igx-avatar src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png" shape="circle" size="small"></igx-avatar>
<igx-badge icon="close" outlined type="error"></igx-badge>
<span>Error</span>
```
```scss
@use "sass:list";
@use "igniteui-theming/sass/typography" as *;

$variants: primary, info, success, warning, error;

:host {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: auto auto;
    place-content: center;
    place-items: center;
    column-gap: rem(40px);
    row-gap: rem(12px);
    min-height: 8.5rem;
    padding: rem(32px);
}

igx-avatar {
    grid-row: 1;
}

span {
    grid-row: 2;
    text-align: center;
    color: var(--ig-gray-600);
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: rem(13px);
    font-weight: 400;
    line-height: rem(20px);
    letter-spacing: rem(0.3px);

    @include type-style("body-2") {
        margin: 0;
    }
}

igx-badge {
    --ig-size: var(--ig-size-small);

    position: absolute;
    inset-block-start: anchor(85.5%);
    inset-inline-start: anchor(85.5%);
    translate: -50% -50%;
}

@each $variant in $variants {
    $i: list.index($variants, $variant);

    igx-avatar:nth-of-type(#{$i}) {
        anchor-name: --#{$variant};
    }

    igx-badge:nth-of-type(#{$i}) {
        position-anchor: --#{$variant};
    }
}
```

### Outlined

The badge can also have a subtle border around it when the [`outlined`](mcp:get_api_reference?platform=angular&component=IgxBadgeComponent&member=outlined) attribute is set.

```html
<igx-badge outlined></igx-badge>
```

```typescript
import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { IGX_STEPPER_DIRECTIVES } from 'igniteui-angular/stepper';

@Component({
  selector: 'app-badge-outlined',
  styleUrls: ['./badge-outlined.component.scss'],
  templateUrl: './badge-outlined.component.html',
  imports: [IgxAvatarComponent, IgxBadgeComponent, IGX_STEPPER_DIRECTIVES]
})

export class BadgeOutlinedComponent {
  public steps = [
    { index: 1, label: 'Orders', completed: true, active: false, flagged: false },
    { index: 2, label: 'Payment', completed: false, active: true, flagged: true },
    { index: 3, label: 'Shipping', completed: false, active: false, flagged: false }
  ];
}
```
```html
<igx-avatar class="icon-anchor" icon="favorite_border" shape="circle" size="small"></igx-avatar>
<igx-badge value="23" type="info" outlined></igx-badge>

<igx-avatar class="initials-anchor" initials="AZ" shape="rounded" size="small"></igx-avatar>
<igx-badge icon="close" type="error" outlined></igx-badge>

<igx-stepper orientation="horizontal" stepType="full" titlePosition="bottom">
    @for (step of steps; track step.label) {
        <igx-step [active]="step.active" [completed]="step.completed">
            <!-- The flagged step's indicator carries the anchor name, so the
                 badge below stays on it no matter which step is selected. -->
            <span igxStepIndicator [class.flagged-anchor]="step.flagged">{{ step.index }}</span>
            <span igxStepTitle>{{ step.label }}</span>
        </igx-step>
    }
</igx-stepper>
<igx-badge class="flagged-badge" dot type="info" outlined></igx-badge>
```
```scss
@use "sass:list";
@use "igniteui-theming/sass" as *;

:host {
    display: grid;
    grid-auto-flow: column;
    place-content: center;
    place-items: center;
    column-gap: rem(60px);
    min-height: 100vh;
    padding-inline: rem(16px);

    ::ng-deep {
        // NOTE! This is just for the sake of the sample, don't do this in your app.
        // The stepper body is where the content for each step goes, and it should be visible.
        // This sample doesn't have any content, so we hide it to avoid the empty space.
        .igx-stepper__body {
            display: none;
        }
    }
}

.icon-anchor {
    --ig-avatar-background: #{color($color: gray, $variant: 900, $opacity: 0.08)};
}

igx-badge {
    --ig-size: var(--ig-size-small);

    position: absolute;
    inset-block-start: anchor(14.5%);
    inset-inline-start: anchor(85.5%);
    translate: -50% -50%;

    &:nth-of-type(2) {
        inset-block-start: anchor(85.5%);
    }
}

$anchors: icon, initials, flagged;

@each $anchor in $anchors {
    $i: list.index($anchors, $anchor);

    .#{$anchor}-anchor {
        anchor-name: --#{$anchor};
    }

    :host > igx-badge:nth-of-type(#{$i}) {
        position-anchor: --#{$anchor};
    }
}

igx-stepper {
    --ig-stepper-step-separator-style: dashed;
    --ig-stepper-step-separator-color: var(--ig-gray-400);

    inline-size: rem(320px);
}

span[igxStepIndicator] {
    display: grid;
    place-items: center;
    inline-size: 100%;
    block-size: 100%;
}
```

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

The Angular Badge exposes platform-specific properties for controlling its content, appearance, and indicator behavior.

The Angular Badge exposes the following properties. Use the API reference for the complete type definitions.

| name | type | default | description |
| --- | --- | --- | --- |
| [`dot`](mcp:get_api_reference?platform=angular&component=IgxBadgeComponent&member=dot) | boolean | `false` | Renders the Badge as a dot indicator without content. |
| [`outlined`](mcp:get_api_reference?platform=angular&component=IgxBadgeComponent&member=outlined) | boolean | `false` | Displays an outline around the Badge. |
| [`shape`](mcp:get_api_reference?platform=angular&component=IgxBadgeComponent&member=shape) | BadgeShape | `rounded` | Sets the Badge shape. |
| [`type`](mcp:get_api_reference?platform=angular&component=IgxBadgeComponent&member=type) | BadgeType | `default` | Sets the Angular Badge stylistic type. |
| [`cssClass`](mcp:get_api_reference?platform=angular&component=IgxBadgeComponent&member=cssClass) | string | — | Applies a custom CSS class. |

## Styling

The Angular Badge uses the [`IgxBadge`](mcp:get_api_reference?platform=angular&component=IgxBadgeComponent) component's `base` CSS part and documented styling variables to customize its appearance.

### Sass Theming

Use the Ignite UI for Angular theme system to style the Badge consistently with the rest of your application.

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

```typescript
import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';


@Component({
    selector: 'app-badge-styling',
    styleUrls: ['./badge-styling.component.scss'],
    templateUrl: './badge-styling.component.html',
    imports: [IgxAvatarComponent, IgxBadgeComponent]
})
export class BadgeStylingComponent { }
```
```html
<igx-avatar class="avatar-green" icon="person" shape="circle" size="small"></igx-avatar>
<igx-badge class="badge-teal" icon="photo_camera" outlined></igx-badge>

<igx-avatar src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png" shape="circle" size="small"></igx-avatar>
<igx-badge class="badge-amber" icon="star_border" outlined></igx-badge>

<igx-avatar class="avatar-pink" icon="favorite_border" shape="circle" size="small"></igx-avatar>
<igx-badge class="badge-magenta" value="2" outlined></igx-badge>

<igx-avatar src="https://dl.infragistics.com/x/img/avatars/avatar6.png" shape="rounded" size="small"></igx-avatar>
<igx-badge class="badge-lime" dot outlined></igx-badge>
```
```scss
@use "sass:list";
@use "sass:map";
@use "igniteui-theming/sass/typography" as *;

:host {
    display: grid;
    grid-auto-flow: column;
    place-content: center;
    place-items: center;
    column-gap: rem(60px);
    min-height: 7rem;
}

igx-badge {
    --ig-size: var(--ig-size-small);

    position: absolute;
    inset-block-start: anchor(85.5%);
    inset-inline-start: anchor(85.5%);
    translate: -50% -50%;
}

.avatar-green {
    --ig-avatar-background: var(--ig-success-200);
    --ig-avatar-icon-color: var(--ig-success-700);
}

.avatar-pink {
    --ig-avatar-background: #da64ff;
    --ig-avatar-icon-color: var(--ig-gray-50);
}

$badges: (
    teal: var(--ig-success-700),
    amber: #c97c00,
    magenta: #9c27b0,
    lime: var(--ig-success-700),
);

@each $name, $color in $badges {
    $i: list.index(map.keys($badges), $name);

    igx-avatar:nth-of-type(#{$i}) {
        anchor-name: --#{$name};
    }

    .badge-#{$name} {
        --ig-badge-background-color: #{$color};

        position-anchor: --#{$name};
    }
}
```

### Styling with Tailwind

You can style the Badge using custom Tailwind utility classes. Make sure to [set up Tailwind](/themes/tailwind) first.

Along with the Tailwind import in your global stylesheet, include the utility file:

```scss
@import "tailwindcss";
@use 'igniteui-theming/tailwind/utilities/material.css';
```

Use `light-badge` and `dark-badge` for the light and dark theme variants. You can override the generated CSS variables with arbitrary properties:

```html
<igx-badge
  class="!light-badge ![--background:#FF4E00] ![--border-radius:4px]">
</igx-badge>
```

The exclamation mark (`!`) ensures that the utility class takes precedence over the component's default theme.

```typescript
import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';


@Component({
    selector: 'app-badge-tailwind-styling',
    styleUrls: ['./badge-tailwind-styling.component.scss'],
    templateUrl: './badge-tailwind-styling.component.html',
    imports: [IgxAvatarComponent, IgxBadgeComponent]
})
export class BadgeTailwindStylingComponent { }
```
```html
<igx-avatar initials="AZ" shape="rounded" size="small"></igx-avatar>
<igx-badge icon="close" outlined class="[--ig-badge-background-color:var(--ig-error-500)]"></igx-badge>

<igx-avatar icon="person" shape="rounded" size="small"></igx-avatar>
<igx-badge icon="volume_off" outlined class="[--ig-badge-background-color:#8b5bb1]"></igx-badge>

<igx-avatar initials="AZ" shape="circle" size="small"></igx-avatar>
<igx-badge icon="remove" outlined class="[--ig-badge-background-color:var(--ig-gray-900)]"></igx-badge>

<igx-avatar icon="person" shape="square" size="small"></igx-avatar>
<igx-badge icon="check" outlined class="[--ig-badge-background-color:var(--ig-success-600)]"></igx-badge>
```
```scss
@use "sass:list";
@use "igniteui-theming/sass/typography" as *;

$anchors: close, volume, remove, check;

:host {
    display: grid;
    grid-auto-flow: column;
    place-content: center;
    place-items: center;
    column-gap: rem(48px);
    min-height: 7rem;
}

igx-badge {
    --ig-size: var(--ig-size-small);

    position: absolute;
    inset-block-start: anchor(85.5%);
    inset-inline-start: anchor(85.5%);
    translate: -50% -50%;
}

@each $anchor in $anchors {
    $i: list.index($anchors, $anchor);

    igx-avatar:nth-of-type(#{$i}) {
        anchor-name: --#{$anchor};
    }

    igx-badge:nth-of-type(#{$i}) {
        position-anchor: --#{$anchor};
    }
}
```

## Accessibility

The Angular Badge is a non-interactive status visual that communicates a short count, state, or notification.

### Keyboard Interaction

The Badge does not receive focus, handle keyboard input, or expose component interaction events.

| Key | Action |
| -- | -- |
| n/a | The Badge is not keyboard interactive. |

### Screen Readers / ARIA

The Badge host uses `role="status"` to expose its content as status information.

- The component initializes with `role="status"` and `aria-label="badge"`.
- Angular derives `aria-roledescription` from the Badge type and its icon or value. Set the `label` input when `badge` is not a meaningful accessible name.
- Add a meaningful `label` for a Badge without text or a `dot` Badge when its status is not otherwise available to assistive technology.

### Accessibility Compliance

Infragistics documents Ignite UI for Angular accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

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

The Angular Badge has the following platform-independent limitations.

- A dot Badge is an indicator only and cannot display text or an icon.
- Badge styling and variant/type names differ between Angular and the other supported frameworks. Use the platform-specific examples and API links on this page rather than copying an attribute between frameworks.
- The Badge is a visual status indicator and does not provide keyboard interaction of its own.

## API References

The Angular Badge API reference lists the complete verified API surface for the target platform.
[`IgxBadge`](mcp:get_api_reference?platform=angular&component=IgxBadgeComponent)

## Dependencies

The Angular Badge requires a theme stylesheet to apply its visual styling. See the framework-specific setup in **Getting Started**.

## Additional Resources

The following resources provide additional Angular Badge guidance and project support.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

## Related Components

The Angular Badge is commonly used with related components such as Avatar when a status indicator belongs to another visual element.

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
  

