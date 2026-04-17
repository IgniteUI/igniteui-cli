---
title: Angular Badge Component – Ignite UI for Angular | Infragistics | MIT license
_description: Display an active count or icon in a predefined style to decorate other components anywhere in an application with Ignite UI for Angular Badge control.
_keywords: Angular Badge component, Angular Badge control, Ignite UI for Angular, Angular UI Components
_license: MIT 
_tocName: Badge
---

# Angular Badge Component Overview

<p class="highlight">Angular Badge is a component used in conjunction with avatars, navigation menus, or other components in an application when a visual notification is needed. Badges are usually  designed as icons with a predefined style to communicate information, success, warnings, or errors.</p>

## Angular Badge Example

```typescript
import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';

@Component({
    selector: 'app-badge-sample-2',
    styleUrls: ['./badge-sample-2.component.scss'],
    templateUrl: './badge-sample-2.component.html',
    imports: [IgxAvatarComponent, IgxBadgeComponent]
})
export class BadgeSample2Component { }
```
```html
<div class="wrapper">
    <igx-avatar icon="person" shape="circle" size="small"></igx-avatar>
    <igx-badge icon="check" type="success" shape="square"></igx-badge>
</div>
```
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

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Badge

To get started with the Ignite UI for Angular Badge component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxBadgeModule` in your **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxBadgeModule } from 'igniteui-angular/badge';
// import { IgxBadgeModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxBadgeModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxBadgeComponent` as a standalone dependency.

```typescript
// home.component.ts

...
import { IgxBadgeComponent } from 'igniteui-angular/badge';
// import { IgxBadgeComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igx-badge icon="check" type="success" shape="square"></igx-badge>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxBadgeComponent]
})
export class HomeComponent {}
```

> [!NOTE]
> This component uses Material Icons. Add the following link to your `index.html`: `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`

Now that you have the Ignite UI for Angular Badge module or component imported, you can start with a basic configuration of the `igx-badge` component.

## Using the Angular Badge Component

Let's see how the demo sample is done. It's a simple success badge on an avatar. To build that, we need to import the `IgxAvatarModule`, along with the `IgxBadgeModule`:

```typescript
// app.module.ts
...
import { IgxBadgeModule } from 'igniteui-angular/badge';
import { IgxAvatarModule } from 'igniteui-angular/avatar';
// import {  IgxBadgeModule, IgxAvatarModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
  ...
  imports: [..., IgxBadgeModule, IgxAvatarModule],
  ...
})

export class AppModule {}
```

_Alternatively, as of `16.0.0` you can import the `IgxBadgeComponent` and `IgxAvatarComponent` as standalone dependencies._

Next, we will add those components to our template:

```html
<div class="wrapper">
    <igx-avatar icon="person" shape="circle" size="small"></igx-avatar>
    <igx-badge icon="check" type="success"></igx-badge>
</div>
```

Using the wrapper, we will position the badge absolutely, covering a little bit of the avatar:

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

### Badge Shape

We can change the badge shape through the `shape` attribute setting its value to `square`. By default, the shape of the badge is `rounded`.

```html
<igx-badge icon="check" type="success" shape="square"></igx-badge>
```

If everything's done right, you should see the demo sample shown above in your browser.

### Badge Size

The size of the badge can be controlled using the `--size` variable. It will make sure that the badge sizes proportionally in both directions. Keep in mind, however, that badges containing text values use the `caption` typography style for its font-size and line-height. For that reason, when setting the `--size` of a badge containing text to values below 16px, you will also need to modify its typography.

Example:

```scss
igx-badge {
  --size: 12px;

  font-size: calc(var(--size) / 2);
  line-height: normal;
}
```

### Badge Value and Icon

Use the `[value]` input to display text or a numeric count inside the badge. This is the recommended approach instead of projecting content directly:

```html
<!-- Recommended -->
<igx-badge [value]="model.value"></igx-badge>

<!-- Avoid -->
<igx-badge>{{ model.value }}</igx-badge>
```

When both `[icon]` and `[value]` are set, the badge displays both simultaneously:

```html
<!-- Both the icon "check" and the value "5" will be shown -->
<igx-badge icon="check" value="5" type="success"></igx-badge>
```

To display only a numeric value without an icon, make sure `[icon]` is not set:

```html
<igx-badge [value]="unreadCount" type="info"></igx-badge>
```

### Badge Icon

In addition to material icons, the `igx-badge` component also supports usage of [Material Icons Extended](../components/material-icons-extended.md) and any other custom icon set. To add an icon from the material icons extended set inside your badge component, first you have to register it:

```ts
export class BadgeIconComponent implements OnInit { 
    constructor (protected _iconService: IgxIconService) {}

    public ngOnInit() {
        this._iconService.addSvgIconFromText(heartMonitor.name, heartMonitor.value, 'imx-icons');
    }
}
```

Then, just specify the icon name and family as follows:

```html
<igx-badge icon="heart-monitor" iconSet="imx-icons"></igx-badge>
```

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { heartMonitor } from '@igniteui/material-icons-extended';
import { IgxIconService } from 'igniteui-angular/icon';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';

@Component({
    selector: 'app-badge-icon',
    styleUrls: ['./badge-icon.component.scss'],
    templateUrl: './badge-icon.component.html',
    imports: [IgxAvatarComponent, IgxBadgeComponent]
})
export class BadgeIconComponent implements OnInit {
    protected _iconService = inject(IgxIconService);


    public ngOnInit() {
        this._iconService.addSvgIconFromText(heartMonitor.name, heartMonitor.value, 'imx-icons');
    }
}
```
```html
<div class="wrapper">
    <igx-avatar icon="face" size="small" shape="rounded"></igx-avatar>
    <igx-badge type="error" icon="heart-monitor" iconSet="imx-icons"></igx-badge>
</div>
```
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

### Dot Badge

The `igx-badge` component can also render as a minimal dot indicator for notifications by enabling its `dot` property. Dot badges do not support content, but they can be outlined and can use any of the available dot types (e.g., primary, success, info, etc.).

```typescript
import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';

@Component({
    selector: 'app-badge-dot-sample',
    styleUrls: ['./badge-dot-sample.component.scss'],
    templateUrl: './badge-dot-sample.component.html',
    imports: [IgxAvatarComponent, IgxBadgeComponent]
})
export class BadgeDotSampleComponent { }
```
```html
<div class="wrapper">
    <igx-avatar icon="face" shape="rounded" size="small"></igx-avatar>
    <igx-badge dot type="success"></igx-badge>
</div>
```
```scss
.wrapper {
    display: flex;
    position: relative;
    margin-top: 15px;

    igx-avatar {
        anchor-name: --avatar;
    }

    igx-badge {
        position: absolute;
        position-anchor: --avatar;
        bottom: anchor(--avatar top);
        left: anchor(right);
        transform: translate(-75%, 75%);
    }
}
```

### Badge in List

Let's extend the previous sample and create a list with contacts, similar to those in chat clients. In addition to the contact name, we want to display an avatar and the current state of the contact (online, offline or away). To achieve this, we're using the [`igx-badge`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbadgecomponent.html) and [`igx-avatar`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxavatarcomponent.html) components. For a container, [`igx-list`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlistcomponent.html) is used.

To continue, include all needed modules and import them in the **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxListModule } from 'igniteui-angular/list';
import { IgxAvatarModule } from 'igniteui-angular/avatar';
import { IgxBadgeModule } from 'igniteui-angular/badge';
// import { IgxListModule, IgxAvatarModule, IgxBadgeModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxListModule, IgxAvatarModule, IgxBadgeModule],
})
export class AppModule {}
```

>[!NOTE]
>The [`igx-badge`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbadgecomponent.html) has [`icon`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbadgecomponent.html#icon), [`value`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbadgecomponent.html#value), and [`type`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbadgecomponent.html#type) inputs to configure the badge look. You can set the icon by providing its name from the official [material icons set](https://material.io/icons/). The badge type can be set to either [`default`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/type.html#default), [`info`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/type.html#info), [`success`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/type.html#success), [`warning`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/type.html#warning), or [`error`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/type.html#error). Depending on the type, a specific background color is applied.

In our sample, [`icon`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbadgecomponent.html#icon) and [`type`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbadgecomponent.html#type) are bound to model properties named _icon_ and _type_.

Next, we're adding the contacts in our template:

```html
<!-- contacts.component.html -->

<igx-list>
  <igx-list-item isHeader="true">
    Team Members (4)
  </igx-list-item>
  <igx-list-item *ngFor="let member of members">
    <div class="wrapper">
      <div>
        <igx-avatar icon="person" shape="circle" size="small"></igx-avatar>
        <igx-badge [icon]="member.icon" [type]="member.type" class="badge-style"></igx-badge>
      </div>
      <div class="contact-container">
        <span class="contact-name">{{ member.name }}</span>
      </div>
    </div>
  </igx-list-item>
</igx-list>
```

We're going to create our members in the typescript file like this:

```typescript
// contacts.component.ts

...
 public members: Member[] = [
    new Member('Terrance Orta', 'online'),
    new Member('Donna Price', 'online'),
    new Member('Lisa Landers', 'away'),
    new Member('Dorothy H. Spencer', 'offline'),
  ];

```

```typescript

...
class Member {
    public name: string;
    public status: string;
    public type: string;
    public icon: string;

    constructor(name: string, status: string) {
        this.name = name;
        this.status = status;
        switch (status) {
            case 'online':
                this.type = 'success';
                this.icon = 'check';
                break;
            case 'away':
                this.type = 'warning';
                this.icon = 'schedule';
                break;
            case 'offline':
                this.type = 'error';
                this.icon = 'remove';
                break;
        }
    }
}
```

Position the badge in its parent container:

```css
/* contacts.component.css */

.wrapper {
    display: flex;
    flex-direction: row;
}

.contact-name {
    font-weight: 600;
}

.contact-container {
    margin-left: 20px;
}

.badge-style {
  position: absolute;
  bottom: 2.5px;
  left: 40px;
}

```

If the sample is configured properly, a list of members should be displayed and every member has an avatar and a badge, showing its current state.

```typescript
import { Component } from '@angular/core';
import { Member } from '../model/member.model';
import { IgxListComponent, IgxListItemComponent } from 'igniteui-angular/list';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';


@Component({
    selector: 'app-badge-sample-3',
    styleUrls: ['./badge-sample-3.component.scss'],
    templateUrl: './badge-sample-3.component.html',
    imports: [IgxListComponent, IgxListItemComponent, IgxAvatarComponent, IgxBadgeComponent]
})
export class BadgeSample3Component {
  public members: Member[] = [
    new Member('Terrance Orta', 'online'),
    new Member('Donna Price', 'online'),
    new Member('Lisa Landers', 'away'),
    new Member('Dorothy H. Spencer', 'offline')
  ];
}
```
```html
<igx-list>
  <igx-list-item [isHeader]="true">
    Team Members (4)
  </igx-list-item>
  @for (member of members; track member) {
    <igx-list-item>
      <div class="wrapper">
        <div>
          <igx-avatar icon="person" shape="circle" size="small"></igx-avatar>
          <igx-badge [icon]="member.icon" [type]="member.type" class="badge-style"></igx-badge>
        </div>
        <div class="contact-container">
          <span class="contact-name">{{ member.name }}</span>
        </div>
      </div>
    </igx-list-item>
  }
</igx-list>
```
```scss
.wrapper {
    display: flex;
    flex-direction: row;
}

.contact-name {
    font-weight: 600;
}

.contact-container {
    margin-left: 20px;
}

.badge-style {
  position: absolute;
  bottom: 2.5px;
  left: 40px;
}
```

## Styling

### Badge Theme Property Map

Changing the `$background-color` property automatically updates the following dependent properties:

<table class="collapsible-table">
  <thead>
    <tr>
      <th>Primary Property</th>
      <th>Dependent Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody class="group">
    <tr class="primary">
      <td><strong>$background-color</strong></td>
      <td>$icon-color</td>
      <td>The color used for icons in the badge.</td>
    </tr>
    <tr>
      <td></td>
      <td>$text-color</td>
      <td>The color used for text in the badge.</td>
    </tr>
  </tbody>
</table>

To get started with styling the badges, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`badge-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-badge-theme) and accepts some parameters that style the badge's items. When you set the `$background-color`, the `$icon-color` and `$text-color` are automatically assigned based on which offers better contrast—black or white. Note that the `$border-radius` property only takes effect when the badge's `shape` is set to `square`.

```scss
$custom-badge-theme: badge-theme(
  $background-color: #57a5cd,
  $border-radius: 4px
);
```

To include the new theme we use the `tokens` mixin:

```scss
:host {
  @include tokens($custom-badge-theme);
}
```

### Demo

```typescript
import { Component } from '@angular/core';
import { Member } from '../model/member.model';
import { IgxListComponent, IgxListItemComponent } from 'igniteui-angular/list';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';


@Component({
    selector: 'app-badge-styling-sample',
    styleUrls: ['./badge-styling-sample.component.scss'],
    templateUrl: './badge-styling-sample.component.html',
    imports: [IgxListComponent, IgxListItemComponent, IgxAvatarComponent, IgxBadgeComponent]
})
export class BadgeStylingSampleComponent {
  public members: Member[] = [
    new Member('Terrance Orta', 'online'),
    new Member('Donna Price', 'online'),
    new Member('Lisa Landers', 'away'),
    new Member('Dorothy H. Spencer', 'offline')
  ];
}
```
```html
<igx-list>
  <igx-list-item [isHeader]="true">
    Team Members (4)
  </igx-list-item>
  @for (member of members; track member) {
    <igx-list-item>
      <div class="wrapper">
        <div>
          <igx-avatar icon="person" shape="circle" size="small"></igx-avatar>
          <igx-badge [icon]="member.icon" shape="square" class="badge-style"></igx-badge>
        </div>
        <div class="contact-container">
          <span class="contact-name">{{ member.name }}</span>
        </div>
      </div>
    </igx-list-item>
  }
</igx-list>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$custom-badge-theme: badge-theme(
  $background-color: #57a5cd,
  $border-radius: 4px
);

:host {
  @include tokens($custom-badge-theme);
}
```

### Styling with Tailwind

You can style the `badge` using our custom Tailwind utility classes. Make sure to [set up Tailwind](themes/misc/tailwind-classes.md) first.

Along with the tailwind import in your global stylesheet, you can apply the desired theme utilities as follows:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

The utility file includes both `light` and `dark` theme variants.

- Use `light-*` classes for the light theme.
- Use `dark-*` classes for the dark theme.
- Append the component name after the prefix, e.g., `light-badge`, `dark-badge`.

Once applied, these classes enable dynamic theme calculations. From there, you can override the generated CSS variables using `arbitrary properties`. After the colon, provide any valid CSS color format (HEX, CSS variable, RGB, etc.).

You can find the full list of properties in the [badge-theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-badge-theme). The syntax is as follows:

```html
<igx-badge
class="!light-badge ![--background:#FF4E00] ![--border-radius:4px]">
</igx-badge>
```

>[!NOTE]
>The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your badges should look like this:

<div class="sample-container loading" style="height:340px">
    <iframe id="badge-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/data-display/badge-tailwind-styling-sample' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

## API References

<div class="divider--half"></div>

- [IgxAvatarComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxavatarcomponent.html)
- [IgxBadgeComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbadgecomponent.html)
- [IgxBadgeComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-badge-theme)
- [IgxListComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlistcomponent.html)
- [IgxListItemComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlistitemcomponent.html)
- [IgxBadgeType](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/index.html#IgxBadgeType)

## Theming Dependencies

- [IgxIcon Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-icon-theme)

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
