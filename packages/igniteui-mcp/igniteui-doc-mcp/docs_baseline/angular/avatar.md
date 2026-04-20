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

```typescript
import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';

@Component({
    selector: 'app-avatar-sample-3',
    styleUrls: ['./avatar-sample-3.component.scss'],
    templateUrl: './avatar-sample-3.component.html',
    imports: [IgxAvatarComponent]
})
export class AvatarSample3Component {

  constructor() { }

}
```
```html
<article class="avatars-wrapper">
    <div class="avatar-sample initials">
        <igx-avatar initials="JS" size="medium"></igx-avatar>
    </div>
    <div class="avatar-sample">
        <igx-avatar src="assets/images/men/1.jpg" shape="rounded" size="medium"></igx-avatar>
    </div>
    <div class="avatar-sample icon">
        <igx-avatar icon="person" shape="circle" size="medium"></igx-avatar>
    </div>
</article>
```
```scss
.avatars-wrapper {
    display: flex;
    flex-flow: row wrap;
}

.avatar-sample {
    display: flex;
    flex: 1 0 30%;
    width: 88px;
    height: 88px;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
}

.avatar-sample.initials .igx-avatar{
    background: #e41c77;
}

.avatar-sample.icon .igx-avatar{
    background: #9e9e9e;
}
```

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

To get a simple avatar with [`initials`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxavatarcomponent.html#initials) (i.e. JS  for  'Jack Sock'), add the following code inside the component template:

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

Analogically, the avatar can display an icon via the [`icon`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxavatarcomponent.html#icon) property. Currently all icons from the material icon set are supported.

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
import { Component, OnInit } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';

@Component({
    selector: 'app-avatar-styling',
    styleUrls: ['./avatar-styling.component.scss'],
    templateUrl: './avatar-styling.component.html',
    imports: [IgxAvatarComponent]
})

export class AvatarStylingSampleComponent {

}
```
```html
<article class="avatars-wrapper">
  <div class="avatar-sample initials">
    <igx-avatar initials="JS" shape="rounded" size="medium"></igx-avatar>
  </div>
  <div class="avatar-sample icon">
    <igx-avatar icon="person" shape="circle" size="medium"></igx-avatar>
  </div>
</article>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$initials-avatar-theme: avatar-theme(
  $background: #72da67,
  $border-radius: 16px
);

$icon-avatar-theme: avatar-theme(
  $background: #217346,
);

.initials{
  @include tokens($initials-avatar-theme);
}

.icon{
  @include tokens($icon-avatar-theme);
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

- [IgxAvatarComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxavatarcomponent.html)


## Theming Dependencies

- [IgxAvatar Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-avatar-theme)
- [IgxIcon Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-icon-theme)

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
