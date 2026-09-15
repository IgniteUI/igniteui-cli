---
title: Angular Avatar Component – Ignite UI for Angular | Infragistics | MIT license
_description: Ignite UI for Angular Avatar control enables users to add images, material icons or initials within any application for instances such as a profile button.
_keywords: Angular Avatar component, Angular Avatar control, Ignite UI for Angular, Angular UI components
_license: MIT
_tocName: Avatar
---

# Angular Avatar Component Overview

<p class="highlight">Angular Avatar component helps adding initials, images, or material icons to your application.</p>
<div class="divider"></div>

## Angular Avatar Example

<code-view style="height:200px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/avatar-sample-3/" alt="Angular Avatar Example">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Avatar

To get started with the Ignite UI for Angular Avatar component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxAvatarModule` in your **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxAvatarModule } from 'igniteui-angular/avatar';
// import { IgxAvatarModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxAvatarModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxAvatarComponent` as a standalone dependency.

```typescript
// home.component.ts

...
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
// import { IgxAvatarComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igx-avatar shape="circle"></igx-avatar>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxAvatarComponent]
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Avatar module or component imported, you can start with a basic configuration of the `igx-avatar` component.

## Using the Angular Avatar Component

The Ignite UI for Angular Avatar component comes in three shapes (square, rounded, and circle) and three size options (small, medium, and large). It can be used for displaying initials, images or icons.

### Avatar Shape

We can change the avatar shape through the `shape` attribute setting its value to `square`, `rounded` or `circle`. By default, the shape of the avatar is `square`.

```html
<igx-avatar shape="circle"></igx-avatar>
```

### Avatar displaying initials

To get a simple avatar with [`initials`](mcp:get_api_reference?platform=angular&component=IgxAvatarComponent&member=initials) (i.e. JS  for  'Jack Sock'), add the following code inside the component template:

```html
<igx-avatar initials="JS" shape="circle"></igx-avatar>
```

Let's enhance our avatar by making it circular and bigger in size.

```html
<igx-avatar size="medium" initials="JS" shape="circle"></igx-avatar>
```

We can also change the background through the `background` property or set a color on the initials through the `color` property.

```scss
// avatar.component.scss

igx-avatar {
  background: #e41c77;
  color: #000000;
}

```

> [!WARNING]
> The `roundShape` property of the `igx-avatar` component have been deprecated. The `shape` attribute should be used instead.

If all went well, you should see something like the following in the browser:

<div class="sample-container loading" style="height:100px">
    <iframe id="avatar-sample-1-iframe" data-src='{environment:demosBaseUrl}/layouts/avatar-sample-1' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

### Avatar displaying image

To get an avatar that displays an image, all you have to do is set the image source via the `src` property.

```html
<igx-avatar src="https://randomuser.me/api/portraits/men/1.jpg"
            shape="rounded"
            size="large">
</igx-avatar>
```

If all went well, you should see something like the following in the browser:

<div class="sample-container loading" style="height:100px">
    <iframe id="avatar-sample-2-iframe" data-src='{environment:demosBaseUrl}/layouts/avatar-sample-2' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

### Avatar displaying icon

Analogically, the avatar can display an icon via the [`icon`](mcp:get_api_reference?platform=angular&component=IgxAvatarComponent&member=icon) property. Currently all icons from the material icon set are supported.

```html
<igx-avatar icon="person"
            shape="rounded"
            size="small">
</igx-avatar>
```

> [!NOTE]
> This component uses Material Icons. Add the following link to your `index.html`: `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`

You should see something like this:

<div class="sample-container loading" style="height:100px">
    <iframe id="avatar-sample-4-iframe" data-src='{environment:demosBaseUrl}/layouts/avatar-sample-4' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

## Styling

### Avatar Theme Property Map

Changing the `$background` property automatically updates the following dependent properties:

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
      <td><strong>$background</strong></td>
      <td>$color</td>
      <td>The text color used for the avatar.</td>
    </tr>
    <tr>
      <td></td>
      <td>$icon-color</td>
      <td>The icon color used for the avatar.</td>
    </tr>
  </tbody>
</table>

To get started with styling the avatar, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`avatar-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-avatar-theme) providing values for the `$background` and `$border-radius` parameters. The `$color` (or `$icon-color`) is automatically set to either black or white, depending on which offers better contrast with the specified background. Note that the `$border-radius` property only takes effect when the avatar's `shape` is set to `rounded`.

Given the following markup:

```html
<div class="avatar-sample initials">
  <igx-avatar initials="JS" shape="rounded" size="medium"></igx-avatar>
</div>
```

We create the following avatar theme:

```scss
$custom-avatar-theme: avatar-theme(
  $background: #72da67,
  $border-radius: 16px
);
```

The last step is to pass the custom avatar theme:

```scss
.initials {
  @include tokens($custom-avatar-theme);
}
```

If all went well, you should see something like the following in the browser:


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

### Styling with Tailwind

You can style the `avatar` using our custom Tailwind utility classes. Make sure to [set up Tailwind](themes/misc/tailwind-classes.md) first.

Along with the tailwind import in your global stylesheet, you can apply the desired theme utilities as follows:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

The utility file includes both `light` and `dark` theme variants.

- Use `light-*` classes for the light theme.
- Use `dark-*` classes for the dark theme.
- Append the component name after the prefix, e.g., `light-avatar`, `dark-avatar`.

Once applied, these classes enable dynamic theme calculations. From there, you can override the generated CSS variables using `arbitrary properties`. After the colon, provide any valid CSS color format (HEX, CSS variable, RGB, etc.).

You can find the full list of properties in the [avatar-theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-avatar-theme). The syntax is as follows:

```html
<igx-avatar
class="!light-avatar ![--background:#FF4E00]"
initials="DY"
shape="rounded">
</igx-avatar>
```

>[!NOTE]
>The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your avatar should look like this:

<div class="sample-container loading" style="height:100px">
    <iframe id="avatar-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/layouts/avatar-tailwind-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

### Custom sizing

You can either use the `--size` variable, targeting the `igx-avatar` directly:

```scss
igx-avatar {
  --size: 200px;
}
```

Or you can use the universal `--ig-avatar-size` variable to target all instances:

```html
<div class="my-app">
  <igx-avatar></igx-avatar>
</div>
```

```scss
.my-app {
  --ig-avatar-size: 200px;
}
```

You can also use one of the predefined sizes, assigning it to the `--ig-size` variable, if theres no size attribute applied. The available values for `--ig-size` are `--ig-size-small`, `--ig-size-medium`, and `--ig-size-large`:

```scss
igx-avatar {
  --ig-size: var(--ig-size-small);
}
```

Learn more about it in the [Size](display-density.md) article.

<div class="divider--half"></div>

## API References

<div class="divider--half"></div>

- [IgxAvatarComponent](mcp:get_api_reference?platform=angular&component=IgxAvatarComponent)


## Theming Dependencies

- [IgxAvatar Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-avatar-theme)
- [IgxIcon Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-icon-theme)

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
