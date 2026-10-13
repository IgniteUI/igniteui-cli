---
title: "Angular Avatar Component | Layouts | Infragistics"
description: "Use the Angular Avatar component to represent users, entities, or objects with images, initials, icons, or custom content."
keywords: "Angular Avatar, avatar component, profile image, initials, Ignite UI for Angular, Infragistics"
last_updated: "2026-07-29"
license: MIT
mentionedTypes: ["Avatar", "Badge", "Icon"]
relatedComponents: ["Badge"]
llms:
  description: "The Ignite UI for Angular Avatar topic shows how to render user, entity, or object identity with images, initials, icons, custom content, shape, size, styling, and accessibility guidance."
_tocName: Avatar
---
# Avatar Component

The Ignite UI for Angular Avatar represents a user, entity, or object with an image, initials, or custom content.

Use the avatar to provide a compact visual identity in lists, cards, profile menus, and activity feeds.

## Live Demo

```typescript
import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';

@Component({
    selector: 'app-avatar-overview',
    styleUrls: ['./avatar-overview.component.scss'],
    templateUrl: './avatar-overview.component.html',
    imports: [IgxAvatarComponent, IgxBadgeComponent]
})
export class AvatarOverviewComponent {}
```
```html
<!-- Simple avatar -->
<igx-avatar
    shape="circle"
    size="large"
    src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
    alt="A profile photo of a man.">
</igx-avatar>

<!-- Avatar + badge -->
<igx-avatar
    class="profile-status"
    shape="circle"
    size="large"
    src="https://dl.infragistics.com/x/img/avatars/avatar-profile-06.png"
    alt="A profile photo of a woman.">
</igx-avatar>
<igx-badge
    class="status-badge"
    dot
    outlined
    type="success">
</igx-badge>

<!-- Avatar stack -->
<div class="avatar-stack" aria-label="Project members">
    <igx-avatar
        shape="circle"
        size="large"
        src="https://dl.infragistics.com/x/img/avatars/avatar-profile-07.png"
        alt="A profile photo of a animated kid.">
    </igx-avatar>
    <igx-avatar
        shape="circle"
        size="large"
        src="https://dl.infragistics.com/x/img/avatars/avatar-profile-03.png"
        alt="A profile photo of a man.">
    </igx-avatar>
    <igx-avatar
        shape="circle"
        size="large"
        src="https://dl.infragistics.com/x/img/avatars/avatar-profile-08.png"
        alt="A profile photo of a abstract flat cat.">
    </igx-avatar>
    <igx-avatar
        shape="circle"
        size="large"
        initials="+3"
        alt="Three additional project members.">
    </igx-avatar>
</div>
```
```scss
@use "igniteui-theming/sass/typography" as *;

:host {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: rem(100px);
    height: 100vh;
    padding: rem(32px);
}

.profile-status {
    anchor-name: --profile-status;
}

.status-badge {
    position: absolute;
    position-anchor: --profile-status;
    inset-block-start: anchor(85%);
    inset-inline-start: anchor(85%);
    translate: -50% -50%;
}

.avatar-stack {
    display: flex;

    igx-avatar {
        box-shadow: 0 0 0 calc(var(--size) * 0.07) var(--ig-surface-500);

        + igx-avatar {
            // Proportional to the avatar's own rendered size (--size, set by
            // the theme) rather than a fixed length, since themes disagree
            // widely on how big a "large" avatar actually is.
            margin-inline-start: calc(var(--size) * -0.27);
        }

        &:last-child {
            --ig-avatar-background: #e8eef6;
            --ig-avatar-color: #6f8097;
        }
    }
}
```

## Anatomy

The avatar is a single host element that applies image semantics and renders one of the supported content patterns.

**Angular Avatar anatomy anatomy:** The avatar anatomy labels the image, icon, and initials containers.

<style>{`
  .avatar-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .avatar-anatomy .igd-anatomy__image {
    max-width: 520px;
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Image container:</strong> Displays image content type.<br />
<strong>2. Icon container:</strong> Displays icon content type.<br />
<strong>3. Initials container:</strong> Displays text content type.</span>

```text
igx-avatar[role="img"]           // host - exposes the avatar
└─ one of, by priority:
   ├─ div.igx-avatar__image      // `src` set - image painted as a background
   ├─ igx-icon                   // `icon` set
   ├─ span                       // `initials` set - first two characters
   └─ ng-content                 // custom projected content
```

## Getting Started

Import the Angular avatar component before you render `<igx-avatar>`. If you have not set up Ignite UI for Angular yet, complete the shared [Getting Started](../general/getting-started.md) topic first.

```ts
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
```

## Usage

Render an avatar with an image source, initials, or custom content in the default slot.

### Variants

Set only the content source you intend to show. The Angular avatar renders `src` first, then `icon`, then `initials`, and falls back to projected custom content when none of those inputs are set.

```html
<igx-avatar initials="AZ"></igx-avatar>

<igx-avatar src="https://static.infragistics.com/xplatform/images/people/men/1.jpg"></igx-avatar>

<igx-avatar icon="home"></igx-avatar>
```

```typescript
import { Component, inject } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';

@Component({
    selector: 'app-avatar-variants',
    styleUrls: ['./avatar-variants.component.scss'],
    templateUrl: './avatar-variants.component.html',
    imports: [IgxAvatarComponent, IgxBadgeComponent, IgxIconComponent]
})
export class AvatarVariantsComponent {
    private iconService = inject(IgxIconService);

    constructor() {
        this.iconService.addSvgIconFromText(
            'mail',
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"/></svg>',
            'material'
        );
        this.iconService.addSvgIconFromText(
            'check',
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m9 16.17-4.17-4.17-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17Z"/></svg>',
            'material'
        );
    }
}
```
```html
<!-- Avatar with image -->
<igx-avatar
    shape="circle"
    size="small"
    src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
    alt="A profile photo of a man.">
</igx-avatar>
<igx-badge
    dot
    outlined
    type="success">
</igx-badge>
<span>Image</span>

<!-- Avatar with icon -->
<igx-avatar
    shape="circle"
    size="small"
>
    <igx-icon name="mail" collection="material"></igx-icon>
</igx-avatar>
<igx-badge
    outlined
    shape="rounded"
    type="info">
    2
</igx-badge>
<span>Icon</span>

<!-- Avatar with initials -->
<igx-avatar
    shape="circle"
    size="small"
    initials="AZ"
    alt="Avatar with AZ initials.">
</igx-avatar>
<igx-badge
    outlined
    shape="rounded"
    type="success">
    <igx-icon name="check" collection="material"></igx-icon>
</igx-badge>
<span>Initials</span>
```
```scss
@use "sass:list";
@use "igniteui-theming/sass/typography" as *;

$avatars: circle, square, rounded;

:host {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: auto auto;
    place-content: center;
    place-items: center;
    column-gap: rem(48px);
    row-gap: rem(8px);
    height: 100vh;
    padding: rem(32px);
}

// :where() keeps the sample's own rules at zero
:where(igx-avatar) {
    grid-row: 1;
}

:where(span) {
    grid-row: 2;
    text-align: center;
    color: var(--ig-gray-600);
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: rem(13px);
    font-weight: 400;
    line-height: rem(20px);
    letter-spacing: rem(0.3px);

    @include type-style("body-1") {
        margin: 0;
    };
}

:where(igx-badge) {
    --ig-size: var(--ig-size-small);

    position: absolute;
    inset-block-start: anchor(85.5%);
    inset-inline-start: anchor(85.5%);
    translate: -50% -50%;
}

// The avatars and badges are flat siblings, so every badge needs its own anchor name to pin to.
@each $avatar in $avatars {
    $i: list.index($avatars, $avatar);

    igx-avatar:nth-of-type(#{$i}) {
        anchor-name: --#{$avatar};
    }

    igx-badge:nth-of-type(#{$i}) {
        position-anchor: --#{$avatar};
    }
}
```

### Shape

Set [`Shape`](mcp:get_api_reference?platform=angular&component=IgxAvatarComponent&member=shape) to `square`, `rounded`, or `circle`.

```html
<igx-avatar initials="AZ" shape="circle"></igx-avatar>
```

```typescript
import { Component, inject } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';

@Component({
    selector: 'app-avatar-shape',
    styleUrls: ['./avatar-shape.component.scss'],
    templateUrl: './avatar-shape.component.html',
    imports: [IgxAvatarComponent, IgxBadgeComponent, IgxIconComponent]
})
export class AvatarShapeComponent {
    private iconService = inject(IgxIconService);

    constructor() {
        this.iconService.addSvgIconFromText(
            'mail',
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"/></svg>',
            'material'
        );
        this.iconService.addSvgIconFromText(
            'check',
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m9 16.17-4.17-4.17-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17Z"/></svg>',
            'material'
        );
    }
}
```
```html
<!-- Avatar Circle -->
<igx-avatar
    shape="circle"
    size="small"
    src="https://dl.infragistics.com/x/img/avatars/avatar-profile-06.png"
    alt="A profile photo of a man.">
</igx-avatar>
<igx-badge
    dot
    outlined
    type="success">
</igx-badge>
<span>Circle</span>

<!-- Avatar Square -->
<igx-avatar
    shape="square"
    size="small">
    <igx-icon name="mail" collection="material"></igx-icon>
</igx-avatar>
<igx-badge
    outlined
    shape="square"
    type="info">
    2
</igx-badge>
<span>Square</span>

<!-- Avatar Rounded -->
<igx-avatar
    shape="rounded"
    size="small"
    src="https://dl.infragistics.com/x/img/avatars/avatar-profile-07.png"
    alt="A profile photo of a man.">
</igx-avatar>
<igx-badge
    outlined
    shape="rounded"
    type="success">
    <igx-icon name="check" collection="material"></igx-icon>
</igx-badge>
<span>Rounded</span>
```
```scss
@use "sass:list";
@use "igniteui-theming/sass/typography" as *;

$avatars: circle, square, rounded;

:host {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: auto auto;
    place-content: center;
    place-items: center;
    column-gap: rem(40px);
    row-gap: rem(8px);
    height: 100vh;
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

    @include type-style("body-1") {
        margin: 0;
    };
}

igx-badge {
    --ig-size: var(--ig-size-small);

    position: absolute;
    inset-block-start: anchor(85.5%);
    inset-inline-start: anchor(85.5%);
    translate: -50% -50%;
}

// The avatars and badges are flat siblings, so every badge needs its own anchor name to pin to.
@each $avatar in $avatars {
    $i: list.index($avatars, $avatar);

    igx-avatar:nth-of-type(#{$i}) {
        anchor-name: --#{$avatar};
    }

    igx-badge:nth-of-type(#{$i}) {
        position-anchor: --#{$avatar};
    }
}
```

### Size

Set `--ig-size` to one of the shared size tokens when you need a preset avatar size.

```html
<igx-avatar initials="AZ" size="large"></igx-avatar>
```

```typescript
import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';

@Component({
    selector: 'app-avatar-size',
    styleUrls: ['./avatar-size.component.scss'],
    templateUrl: './avatar-size.component.html',
    imports: [IgxAvatarComponent, IgxBadgeComponent]
})
export class AvatarSizeComponent {
}
```
```html
<!-- Avatar large size -->
<igx-avatar
    shape="circle"
    size="large"
    src="https://dl.infragistics.com/x/img/avatars/avatar-profile-05.png"
    alt="A profile photo of a man.">
</igx-avatar>
<igx-badge
    dot
    outlined
    type="success">
</igx-badge>
<span>Large</span>

<!-- Avatar medium size -->
<igx-avatar
    shape="circle"
    size="medium"
    src="https://dl.infragistics.com/x/img/avatars/avatar-profile-03.png"
    alt="A profile photo of a man.">
</igx-avatar>
<igx-badge
    dot
    outlined
    type="success">
</igx-badge>
<span>Medium</span>

<!-- Avatar small size -->
<igx-avatar
    shape="circle"
    size="small"
    src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
    alt="A profile photo of a man.">
</igx-avatar>
<igx-badge
    dot
    outlined
    type="success">
</igx-badge>
<span>Small</span>
```
```scss
@use "sass:list";
@use "igniteui-theming/sass/typography" as *;

:host {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: auto auto;
    place-content: center;
    place-items: center;
    column-gap: rem(48px);
    row-gap: rem(8px);
    height: 100vh;
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

    @include type-style("body-1") {
        margin: 0;
    };
}

igx-badge {
    position: absolute;
    inset-block-start: anchor(85.5%);
    inset-inline-start: anchor(85.5%);
    translate: -50% -50%;
}

$avatars: large, medium, small;

// The avatars and badges are flat siblings, so every badge needs its own anchor name to pin to.
@each $avatar in $avatars {
    $i: list.index($avatars, $avatar);

    igx-avatar:nth-of-type(#{$i}) {
        anchor-name: --#{$avatar};
    }

    igx-badge:nth-of-type(#{$i}) {
        --ig-size: var(--ig-size-#{$avatar});
        position-anchor: --#{$avatar};
    }
}
```

### Do/Don't

**When to use:** Use the avatar when a UI needs a small representation of a person, organization, object, or account, such as a profile image, initials, or an icon. Keep a consistent avatar strategy within the same UI region so repeated identities are easy to scan.

**When not to use:** Use the [Badge](../inputs/badge.md) component when you need to show a count, status, or notification indicator instead of representing an entity. Badges can also decorate avatars when both identity and status need to appear together.

<div class="table-responsive">
<table class="table" style="width: 100%; max-width: 720px; table-layout: fixed; border-collapse: collapse; border: 1px solid #d3d3d3; margin: 0 auto 24px;">
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

The avatar exposes a small set of inputs for its content and shape.

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| [`icon`](mcp:get_api_reference?platform=angular&component=IgxAvatarComponent&member=icon) | `string` | n/a | Sets the icon rendered by the avatar. |
| [`initials`](mcp:get_api_reference?platform=angular&component=IgxAvatarComponent&member=initials) | `string` | n/a | Sets text initials rendered by the avatar. |
| [`shape`](mcp:get_api_reference?platform=angular&component=IgxAvatarComponent&member=shape) | `"square" \| "rounded" \| "circle"` | `"square"` | Sets the avatar shape. |
| [`size`](mcp:get_api_reference?platform=angular&component=IgxAvatarComponent&member=size) | `"small" \| "medium" \| "large"` | `"small"` | Sets the avatar size. |
| [`src`](mcp:get_api_reference?platform=angular&component=IgxAvatarComponent&member=src) | `string` | n/a | Sets the image source URL. |

## Styling

```typescript
import { Component, inject } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import {
    IgxListActionDirective,
    IgxListComponent,
    IgxListItemComponent,
    IgxListLineSubTitleDirective,
    IgxListLineTitleDirective,
    IgxListThumbnailDirective
} from 'igniteui-angular/list';

@Component({
    selector: 'app-avatar-styling',
    styleUrls: ['./avatar-styling.component.scss'],
    templateUrl: './avatar-styling.component.html',
    imports: [
        IgxAvatarComponent,
        IgxBadgeComponent,
        IgxIconComponent,
        IgxListActionDirective,
        IgxListComponent,
        IgxListItemComponent,
        IgxListLineSubTitleDirective,
        IgxListLineTitleDirective,
        IgxListThumbnailDirective
    ]
})
export class AvatarStylingSampleComponent {
    private iconService = inject(IgxIconService);

    constructor() {
        this.iconService.addSvgIconFromText(
            'calendar',
            '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/></svg>',
            'material'
        );
        this.iconService.addSvgIconFromText(
            'check',
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m9 16.17-4.17-4.17-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17Z"/></svg>',
            'material'
        );
        this.iconService.addSvgIconFromText(
            'x',
            '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>',
            'material'
        );
        this.iconService.addSvgIconFromText(
            'horizontalRule',
            '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M160-440v-80h640v80H160Z"/></svg>',
            'material'
        );
        this.iconService.addSvgIconFromText(
            'group',
            '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM247-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47Zm466 0q-47 47-113 47-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113q0 66-47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm296.5-343.5Q440-607 440-640t-23.5-56.5Q393-720 360-720t-56.5 23.5Q280-673 280-640t23.5 56.5Q327-560 360-560t56.5-23.5ZM360-240Zm0-400Z"/></svg>',
            'material'
        );
    }
}
```
```html
<igx-list class="chat-list">
    <igx-list-item [isHeader]="true">Chats</igx-list-item>

    <igx-list-item>
        <div igxListThumbnail class="avatar-with-badge">
            <igx-avatar
                shape="circle"
                src="https://dl.infragistics.com/x/img/avatars/avatar-profile-07.png"
                alt="A profile photo of Nick Evans.">
            </igx-avatar>
            <igx-badge class="avatar-status" outlined shape="rounded" type="success">
                <igx-icon name="check" collection="material"></igx-icon>
            </igx-badge>
        </div>
        <p igxListLineTitle>Nick Evans</p>
        <span igxListLineSubTitle>Hi Samira, thanks for the ...</span>
        <span igxListAction>9:44 AM</span>
    </igx-list-item>

    <igx-list-item>
        <div igxListThumbnail class="avatar-with-badge">
            <igx-avatar class="avatar-muted" shape="circle" initials="JF" alt="James Ford initials."></igx-avatar>
            <igx-badge class="avatar-status avatar-muted-badge" outlined shape="rounded">
                <igx-icon name="x" collection="material"></igx-icon>
            </igx-badge>
        </div>
        <p igxListLineTitle>James Ford</p>
        <span igxListLineSubTitle>I'll send the text and im ...</span>
        <span igxListAction>8:30 AM</span>
    </igx-list-item>

    <igx-list-item>
        <div igxListThumbnail class="avatar-with-badge">
            <igx-avatar
                shape="circle"
                src="https://dl.infragistics.com/x/img/avatars/avatar-profile-08.png"
                alt="A profile photo of Kate Porter.">
            </igx-avatar>
            <igx-badge class="avatar-status" outlined shape="rounded" type="error">
                <igx-icon name="horizontalRule" collection="material"></igx-icon>
            </igx-badge>
        </div>
        <p igxListLineTitle>Kate Porter</p>
        <span igxListLineSubTitle>That's great!</span>
        <span igxListAction>Yesterday</span>
    </igx-list-item>

    <igx-list-item [isHeader]="true">Meetings</igx-list-item>

    <igx-list-item>
        <igx-avatar igxListThumbnail shape="circle" alt="Calendar icon.">
            <igx-icon name="calendar" collection="material"></igx-icon>
        </igx-avatar>
        <p igxListLineTitle>Weekly Meeting</p>
        <span igxListLineSubTitle>https://www.infra.com</span>
        <span igxListAction>Monday</span>
    </igx-list-item>

    <igx-list-item>
        <igx-avatar igxListThumbnail shape="circle" alt="Group icon.">
            <igx-icon name="group" collection="material"></igx-icon>
        </igx-avatar>
        <p igxListLineTitle>Design Discussion</p>
        <span igxListLineSubTitle>https://www.infra.com</span>
        <span igxListAction>11:30 AM</span>
    </igx-list-item>
</igx-list>
```
```scss
@use "igniteui-theming/sass/typography" as *;

:host {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

igx-list {
    --ig-list-border-width: #{rem(1px)};
    --ig-list-border-color: var(--ig-gray-300);
    --ig-list-header-text-color: var(--ig-gray-900);

    max-width: rem(328px);
}

igx-avatar {
    --ig-avatar-background: var(--ig-gray-300);
    --ig-avatar-color: var(--ig-gray-300-contrast);
}

.avatar-with-badge {
    position: relative;
}

igx-badge {
    --ig-size: var(--ig-size-small);
}

.avatar-status {
    position: absolute;
    inset-inline-end: rem(-4px);
    inset-block-end: rem(-4px);
}

.avatar-muted-badge {
    --ig-badge-background-color: var(--ig-gray-300);
    --ig-badge-icon-color: var(--ig-gray-300-contrast);
}
```

The avatar appearance is controlled through theme variables and platform-specific styling hooks.

Use the avatar CSS variables for token-level changes and Angular host classes when you need to target a specific rendered type or shape.

| Variable | What it changes |
| -- | -- |
| `--ig-avatar-background` | Avatar background color. |
| `--ig-avatar-color` | Text and initials color. |
| `--ig-avatar-icon-color` | Icon color. |
| `--ig-avatar-border-radius` | Border radius used by rounded avatars. |
| `--ig-avatar-size` | Avatar width and height. |
| `--ig-size` | Shared component size token used to derive preset avatar sizes. |

| Selector | Description |
| -- | -- |
| `igx-avatar` | The avatar host element. |
| `.igx-avatar--rounded` | Applied when `shape` is `rounded`. |
| `.igx-avatar--circle` | Applied when `shape` is `circle`. |
| `.igx-avatar--image` | Applied when the avatar renders an image. |
| `.igx-avatar--icon` | Applied when the avatar renders an icon. |
| `.igx-avatar--initials` | Applied when the avatar renders initials. |
| `.igx-avatar__image` | The image avatar element. |

### Sass Theming

Use the `avatar-theme` function when your application customizes Ignite UI themes through Sass.

```scss
@use "igniteui-angular/theming" as *;

$custom-avatar-theme: avatar-theme(
  $background: #72da67,
  $border-radius: 16px,
  $size: 3rem
);

:root {
  @include tokens($custom-avatar-theme);
}
```

### CSS Variables

Set component CSS variables directly when you need local styling without a Sass build step.

```css
igx-avatar {
  --ig-avatar-background: var(--ig-success-500);
  --ig-avatar-color: var(--ig-success-500-contrast);
  --ig-avatar-border-radius: 20px;
}
```

### Styling with Tailwind

Use the Angular Tailwind utility syntax when your application styles Ignite UI components through Tailwind classes.

```typescript
import { Component, inject } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxButtonDirective, IgxDividerComponent, IgxIconButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import {
    IgxCardActionsComponent,
    IgxCardComponent,
    IgxCardContentDirective,
    IgxCardHeaderComponent,
    IgxCardHeaderTitleDirective,
    IgxCardMediaDirective,
    IgxCardThumbnailDirective
} from 'igniteui-angular/card';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { berealIcon, instagramIcon, plusIcon, threadsIcon } from './icons';

@Component({
    selector: 'app-avatar-tailwind-styling',
    styleUrls: ['./avatar-tailwind-styling.component.scss'],
    templateUrl: './avatar-tailwind-styling.component.html',
    imports: [
        IgxAvatarComponent,
        IgxButtonDirective,
        IgxCardActionsComponent,
        IgxCardComponent,
        IgxCardContentDirective,
        IgxCardHeaderComponent,
        IgxCardHeaderTitleDirective,
        IgxCardMediaDirective,
        IgxCardThumbnailDirective,
        IgxDividerComponent,
        IgxIconButtonDirective,
        IgxIconComponent,
        IgxRippleDirective
    ]
})
export class AvatarTailwindStylingSampleComponent {
    private iconService = inject(IgxIconService);

    public profileStats = [
        { value: '23.9K', label: 'Likes' },
        { value: '163', label: 'Posts' },
        { value: '23.9K', label: 'Views' }
    ];

    constructor() {
        this.iconService.addSvgIconFromText('instagram', instagramIcon, 'material');
        this.iconService.addSvgIconFromText('bereal', berealIcon, 'material');
        this.iconService.addSvgIconFromText('threads', threadsIcon, 'material');
        this.iconService.addSvgIconFromText('plus', plusIcon, 'material');
    }
}
```
```html
<igx-card class="[--ig-card-border-radius:30px] [--ig-card-outline-color:transparent]">
    <igx-card-media class="h-[189px]">
        <img
        class="object-cover"
        src="https://dl.infragistics.com/x/img/avatars/image-bg4.png"
        alt="Cafe interior" />
    </igx-card-media>
    <igx-card-header>
        <igx-avatar
            igxCardThumbnail
            shape="circle"
            size="medium"
            src="https://dl.infragistics.com/x/img/avatars/avatar-profile-09.png"
            alt="A profile photo of Kate Thompson.">
        </igx-avatar>
        <span igxCardHeaderTitle>Kate Thompson</span>
        <p class="card-sample-custom-subtitle">3D Artist. Turning polygons into worlds and immersive digital realities</p>

    </igx-card-header>
    <igx-card-content>
        <div class="grid grid-cols-[1fr_auto_1fr_auto_1fr]">
            @for (stat of profileStats; track stat.label; let isLast = $last) {
                <div class="flex min-w-0 flex-col items-center gap-1 px-3">
                    <span class="stats-title">{{ stat.value }}</span>
                    <span class="stats-subtitle">{{ stat.label }}</span>
                </div>
                @if (!isLast) {
                    <igx-divider class="h-12" vertical></igx-divider>
                }
            }
        </div>
    </igx-card-content>
    <igx-card-actions>
        <button
            igxButton="contained"
            class="[--ig-contained-button-active-background:var(--ig-gray-400)] [--ig-contained-button-background:var(--ig-gray-200)] [--ig-contained-button-border-radius:16px] [--ig-contained-button-focus-background:var(--ig-gray-300)] [--ig-contained-button-hover-background:var(--ig-gray-300)] [--ig-size:var(--ig-size-small)]">
            <span class="inline-flex items-center gap-1">
                FOLLOW
                <igx-icon name="plus" collection="material"></igx-icon>
            </span>
        </button>
        <div igxEnd class="inline-flex gap-1">
            <button igxIconButton="flat" igxRipple aria-label="Open Instagram profile">
                <igx-icon name="instagram" collection="material"></igx-icon>
            </button>
            <button igxIconButton="flat" igxRipple aria-label="Open BeReal profile">
                <igx-icon name="bereal" collection="material"></igx-icon>
            </button>
            <button igxIconButton="flat" igxRipple aria-label="Open Threads profile">
                <igx-icon name="threads" collection="material"></igx-icon>
            </button>
        </div>
    </igx-card-actions>
</igx-card>

<igx-card class="[--ig-card-border-radius:30px] [--ig-card-outline-color:transparent]">
    <igx-card-header>
        <span igxCardThumbnail
            class="inline-flex rounded-full p-[5px] bg-[linear-gradient(40deg,#D2F586,#A0C9FF)]">
            <igx-avatar
                size="medium"
                shape="circle"
                src="https://dl.infragistics.com/x/img/avatars/avatar-profile-09.png"
                alt="A profile photo of Kate Thompson.">
            </igx-avatar>
        </span>
        <span igxCardHeaderTitle>Kate Thompson</span>
        <p class="card-sample-custom-subtitle">3D Artist. Turning polygons into worlds and immersive digital realities</p>
    </igx-card-header>
    <igx-card-content>
        <div class="grid grid-cols-[1fr_auto_1fr_auto_1fr]">
            @for (stat of profileStats; track stat.label; let isLast = $last) {
                <div class="flex min-w-0 flex-col items-center gap-1 px-3">
                    <span class="stats-title">{{ stat.value }}</span>
                    <span class="stats-subtitle">{{ stat.label }}</span>
                </div>
                @if (!isLast) {
                    <igx-divider vertical></igx-divider>
                }
            }
        </div>
    </igx-card-content>
    <igx-card-actions >
        <button
            igxButton="contained"
            class="[--ig-contained-button-active-background:var(--ig-gray-400)] [--ig-contained-button-background:var(--ig-gray-200)] [--ig-contained-button-border-radius:16px] [--ig-contained-button-focus-background:var(--ig-gray-300)] [--ig-contained-button-hover-background:var(--ig-gray-300)] [--ig-size:var(--ig-size-small)]">
            <span class="inline-flex items-center gap-1">
                <span>FOLLOW</span>
                <igx-icon name="plus" collection="material"></igx-icon>
            </span>
        </button>
        <div igxEnd class="inline-flex items-center gap-1">
            <button igxIconButton="flat" igxRipple aria-label="Open Instagram profile">
                <igx-icon name="instagram" collection="material"></igx-icon>
            </button>
            <button igxIconButton="flat" igxRipple aria-label="Open BeReal profile">
                <igx-icon name="bereal" collection="material"></igx-icon>
            </button>
            <button igxIconButton="flat" igxRipple aria-label="Open Threads profile">
                <igx-icon name="threads" collection="material"></igx-icon>
            </button>
        </div>
    </igx-card-actions>
</igx-card>
```
```scss
@use "igniteui-theming/sass/typography" as *;

:host {
    display: grid;
    grid-template-columns: repeat(auto-fit, rem(344px));
    gap: rem(40px);
    place-content: center;
    height: 100vh;
}

igx-card:nth-of-type(2) {
    align-self: center;
}

.card-sample-custom-subtitle {
    display: block;
    color: var(--ig-gray-700);

    @include type-style("body-2") {
        margin-block-start: rem(8px);
    };
}

.stats-title {
    color: var(--ig-gray-900);

    @include type-style("subtitle-1") {
        font-weight: 600;
    };
}

.stats-subtitle {
    color: var(--ig-gray-500);

    @include type-style("body-2");
}
```

## Accessibility

The avatar is a non-interactive identity visual with accessible image semantics.

### Keyboard Interaction

The avatar does not receive focus and has no keyboard interaction.

| Key | Action |
| -- | -- |
| n/a | The avatar is not keyboard interactive. |

### Screen Readers / ARIA

The avatar initializes with image semantics and a default accessible label of `avatar`.

- Use surrounding text to identify the represented person, entity, or object when an image avatar conveys identity.
- Treat decorative avatars as redundant when adjacent text already identifies the same entity.

### Accessibility Compliance

Infragistics documents Ignite UI for Angular accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| -- | -- |
| [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content) | The avatar has an accessible label and can be paired with surrounding text that identifies the represented entity. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | The component initializes with `role="img"` and a default accessible label. |

Your responsibilities:

- Keep sufficient contrast between the avatar background and text or icon color when overriding styles.
- Avoid duplicating the same identity announcement when adjacent text already names the person or entity.

- Make sure nearby text identifies the represented entity when the avatar image conveys identity.

## Troubleshooting

Use this section to check boundaries and common decisions before treating Avatar as an interactive or status component.

### Known Limitations

The avatar is a visual identity primitive and does not add interaction, status, or notification behavior by itself.

- Use an interactive container, such as a button or list item, when the represented entity must be clickable.
- Use a badge with the avatar when you need to show status, counts, or notification indicators.

## API References

Use these API references for the complete avatar API surface.

[`IgxAvatar`](mcp:get_api_reference?platform=angular&component=IgxAvatarComponent)

## Dependencies

The Sass styling workflow uses the `IgxAvatar Theme` and `IgxIcon Theme` APIs.

## Additional Resources

Use these resources for support and related Ignite UI documentation.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

## Related Components

Use these related components when identity needs to be combined with status, actions, or richer layout.

- [Badge](../inputs/badge.md) - Use Badge to show counts, status, or notification indicators. Badge can decorate Avatar when the UI needs both identity and status.

## FAQ

  **Q: When should I use Avatar instead of Badge?**

    Use Avatar when the UI needs to represent a person, account, organization, or object. Use Badge when the UI needs to show a count, status, or notification indicator.
  

  **Q: Does Avatar add keyboard interaction?**

    No. Avatar is non-interactive and does not receive focus by itself. Put it inside an interactive component when the represented entity needs an action.
  

  **Q: How should I label image avatars for screen readers?**

    Provide meaningful alternative text when the avatar image identifies a specific entity. Avoid repeating the same identity when adjacent text already names that entity.
  

