---
title: Angular Toast Component – Ignite UI for Angular | Infragistics | MIT license
_description: With Ignite UI for Angular Toast component, users can provide quick, non-interactive messages to end users within their application.
_keywords: Angular Toast component, Angular Toast control, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library
_license: MIT
_tocName: Toast
---

# Angular Toast Component Overview

<p class="highlight">The Ignite UI for Angular Toast component provides information and warning messages that are auto-hiding, non-interactive and cannot be dismissed by the user. Notifications can be displayed at the bottom, the middle, or the top of the page.</p>

## Angular Toast Example


```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxToastComponent } from 'igniteui-angular/toast';

@Component({
    selector: 'app-toast-sample-2',
    styleUrls: ['./toast-sample-2.component.scss'],
    templateUrl: './toast-sample-2.component.html',
    imports: [IgxButtonDirective, IgxToastComponent]
})

export class ToastSample2Component { }
```
```html
<div>
    <button igxButton="contained" (click)="toast.open()">Show notification</button>
    <igx-toast #toast>Notification displayed</igx-toast>
</div>
```
```scss
button {
    margin: 1.2% 0;
}
```

<div class="divider--half"></div>


## Getting Started with Ignite UI for Angular Toast

To get started with the Ignite UI for Angular Toast component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxToastModule` in your **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxToastModule } from 'igniteui-angular/toast';
// import { IgxToastModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxToastModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxToastComponent` as a standalone dependency.

```typescript
// home.component.ts

import { IgxToastComponent } from 'igniteui-angular/toast';
import { IgxButtonDirective } from 'igniteui-angular/directives';
// import { IgxToastComponent, IgxButtonDirective } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <button igxButton="contained" (click)="toast.open()">Show notification</button>
    <igx-toast #toast>Notification displayed</igx-toast>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxToastComponent, IgxButtonDirective]
    /* or imports: [IgxTimePickerComponent, IgxButtonDirective] */
})
export class HomeComponent {
    public time: Date;
}
```

Now that you have the Ignite UI for Angular Toast module or component imported, you can start using the `igx-toast` component.

## Using the Angular Toast

### Show Toast

In order to display the toast component, use its [`open()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtoastcomponent.html#open) method and call it on a button click. You can pass the toast content inside the element.

```html
<!--sample.component.html-->

<button igxButton="contained" (click)="toast.open()">Show notification</button>
<igx-toast #toast>Notification displayed</igx-toast>
```

Another way to set the toast content is to directly pass the message as a parameter to the [`open()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtoastcomponent.html#open) method.

```html
<!--sample.component.html-->

<button igxButton="contained" (click)="toast.open('Notification displayed')">Show notification</button>
<igx-toast #toast></igx-toast>
```

The [`open()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtoastcomponent.html#open) method can also be used in the AppComponent file to manage the value of the message.

```typescript
// app.component.ts
@ViewChild('toast', { read: IgxToastComponent }) public toast: IgxToastComponent;

public message: any;

public ngOnInit() {
    this.message = 'Display message';
}

public showMessage() {
    this.toast.open(this.message);
}
```

## Examples

### Hide/Auto Hide

Once opened, the toast disappears after a period specified by the [`displayTime`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtoastcomponent.html#displayTime) input which is set initially to 4000 milliseconds. This behavior is enabled by default but you can change this by setting [`autoHide`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtoastcomponent.html#autoHide) to **false**. This way, the toast remains visible. Using the toast [`close()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtoastcomponent.html#close) method, you can close the component.

```html
<!--sample.component.html-->

<button igxButton="contained" (click)="toast.open()">Show Toast</button>
<button igxButton="contained" (click)="toast.close()">Hide Toast</button>
<igx-toast #toast [autoHide]="false">Notification displayed</igx-toast>
```

If the sample is configured properly, the toast will appear when the _Show button_ is clicked. For the first component auto-hide feature is disabled and the toast will disappear on 'Hide' button click.
In the other two components you can see in action how to pass different messages through the [`open()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtoastcomponent.html#open) method and use content projection.

```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxToastComponent } from 'igniteui-angular/toast';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-toast-sample-3',
    styleUrls: ['./toast-sample-3.component.scss'],
    templateUrl: './toast-sample-3.component.html',
    imports: [IgxButtonDirective, IgxToastComponent, IgxIconComponent]
})

export class ToastSample3Component { }
```
```html
<div class='columnWrapper'>
    <span>
        <h6>Toast that uses content projection</h6>
        <button igxButton="contained" (click)="toast.open()">Show Toast</button>
        <button igxButton="contained" (click)="toast.close()">Hide Toast</button>
        <igx-toast #toast [autoHide]="false">Notification displayed</igx-toast>
    </span>
    <span>
        <h6>Toast which dynamically changes the message text</h6>
        <button igxButton="outlined" (click)="toast1.open('Hi! This is info message.')">Info Message</button>
        <button igxButton="outlined" (click)="toast1.open('Hi! This is success message.')">Success Message</button>
        <button igxButton="outlined" (click)="toast1.open('Hi! This is warning message.')">Warning Message</button>
        <button igxButton="outlined" (click)="toast1.open('Hi! This is error message.')">Error Message</button>
        <igx-toast #toast1 [autoHide]="true"></igx-toast>
    </span>
    <span>
        <h6>Toast that uses content projection and dynamically changes the message text</h6>
        <button igxButton="contained" (click)="toast2.open('You have one new message.')">Show Toast</button>
        <button igxButton="contained" (click)="toast2.open('Your massage has been successfully sent.')">Show Toast with another message</button>
        <igx-toast #toast2 [autoHide]="true">
            <igx-icon>mail</igx-icon>
        </igx-toast>
    </span>
</div>
```
```scss
.columnWrapper {
    display: flex;
    flex-flow: row;
    padding-top: 30px;
}
.columnWrapper span {
    min-width: 250px;
    flex: 1 0 0px;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
}

button {
    margin: 15px 10px 10px 0;
}
```

### Display Time

Use [`displayTime`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtoastcomponent.html#displayTime) and set it to an interval in milliseconds to configure how long the toast component is visible.

```html
<!--sample.component.html-->

<button igxButton="contained" (click)="toast.open()">Show notification</button>
<igx-toast #toast displayTime="1000">Notification displayed</igx-toast>
```

If the sample is configured properly, the toast auto hides faster.

<div class="sample-container loading">
    <iframe id="toast-sample-4-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/toast-sample-4/" class="lazyload"></iframe>
</div>

### Positioning

Use [`positionSettings`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtoastcomponent.html#positionSettings) property to configure where the toast appears. By default, it is displayed at the bottom of the page. In the sample below, we set notification to appear at the top position.

```html
<!--sample.component.html-->
<div>
    <button igxButton="contained" (click)="open(toast)">Show notification on top</button>
    <igx-toast #toast>Notification displayed</igx-toast>
</div>
```

```typescript
// sample.component.ts
import { VerticalAlignment } from 'igniteui-angular/core';
// import { VerticalAlignment } from '@infragistics/igniteui-angular'; for licensed package
...
public open(toast) {
    toast.positionSettings.verticalDirection = VerticalAlignment.Top;
    toast.open();
}
...
```

```typescript
import { Component } from '@angular/core';
import { VerticalAlignment } from 'igniteui-angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxToastComponent } from 'igniteui-angular/toast';
@Component({
    selector: 'app-toast-sample-5',
    styleUrls: ['./toast-sample-5.component.scss'],
    templateUrl: './toast-sample-5.component.html',
    imports: [IgxButtonDirective, IgxToastComponent]
})

export class ToastSample5Component {
  public open(toast) {
    toast.positionSettings.verticalDirection = VerticalAlignment.Top;
    toast.open();
  }
}
```
```html
<div>
    <button igxButton="contained" (click)="open(toast)">Show notification on top</button>
    <igx-toast #toast>Notification displayed</igx-toast>
</div>
```

<div class="divider--half"></div>

## Styling

### Toast Theme Property Map

When you modify a primary property, all related dependent properties are automatically updated to reflect the change:

<table>
  <thead>
    <tr>
      <th>Primary Property</th>
      <th>Dependent Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>$background</strong></td>
      <td>$text-color</td>
      <td>The text-color used for the toast.</td>
    </tr>
    <tr>
      <td><strong>$text-color</strong></td>
      <td>$border-color</td>
      <td>The border-color used for the toast.</td>
    </tr>
  </tbody>
</table>

To get started with styling the toast, we need to import the index file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`toast-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-toast-theme) and provide the `$background`, `$text-color` and `$border-radius` parameters.

```scss
$custom-toast-theme: toast-theme(
  $text-color: #ffcd0f,
  $background: #292826,
  $border-radius: 12px
);
```

>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-palette) and [`color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-color) functions. Please refer to [`Palettes`](/themes/sass/palettes.md) topic for detailed guidance on how to use them.

The last step is to pass the custom toast theme:

```scss
@include css-vars($custom-toast-theme);
```

### Demo

```typescript
import { Component, ElementRef, inject } from '@angular/core';
import { IgxToastComponent } from 'igniteui-angular/toast';
import { VerticalAlignment } from 'igniteui-angular/core';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-toast-style',
    styleUrls: ['./toast-style.component.scss'],
    templateUrl: './toast-style.component.html',
    imports: [IgxButtonDirective, IgxRippleDirective, IgxToastComponent]
})
export class ToastStyleComponent {
    elem = inject(ElementRef);

    public toast: IgxToastComponent;
    public position = VerticalAlignment;

    openToast(toast: IgxToastComponent, pos: VerticalAlignment) {
        toast.positionSettings.verticalDirection = pos;
        toast.open();
    }
}
```
```html
<div class="sample-wrapper">
    <section class="sample-content">
        <article class="sample-column">
            <h5 class="title">Bottom Position</h5>
            <div class="preview bottom"></div>
            <div class="btn-group">
                <button igxButton="contained" igxRipple="white" (click)="openToast(toast, position.Bottom)" [disabled]="toast.isVisible">Show Toast</button>
                <button igxButton="contained" igxRipple="white" (click)="toast.close()" [disabled]="!toast.isVisible">Hide Toast</button>
            </div>
        </article>
        <article class="sample-column">
            <h5 class="title">Middle Position</h5>
            <div class="preview middle"></div>
            <div class="btn-group">
                <button igxButton="contained" igxRipple="white" (click)="openToast(toast, position.Middle)" [disabled]="toast.isVisible">Show Toast</button>
                <button igxButton="contained" igxRipple="white" (click)="toast.close()" [disabled]="!toast.isVisible">Hide Toast</button>
            </div>
        </article>
        <article class="sample-column">
            <h5 class="title"> Top Position</h5>
            <div class="preview top"></div>
            <div class="btn-group">
                <button igxButton="contained" igxRipple="white" (click)="openToast(toast, position.Top)" [disabled]="toast.isVisible">Show Toast</button>
                <button igxButton="contained" igxRipple="white" (click)="toast.close()" [disabled]="!toast.isVisible">Hide Toast</button>
            </div>
        </article>
    </section>

    <igx-toast #toast [autoHide]="false" [outlet]="elem">This message will self-destruct in 4 seconds.</igx-toast>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$custom-toast-theme: toast-theme(
  $text-color: #ffcd0f,
  $background: #292826,
  $border-radius: 12px
);

@include css-vars($custom-toast-theme);
```

### Styling with Tailwind

You can style the toast using our custom Tailwind utility classes. Make sure to [set up Tailwind](themes/misc/tailwind-classes.md) first.

Along with the Tailwind import in your global stylesheet, you can apply the desired theme utilities as follows:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

The utility file includes both `light` and `dark` theme variants.

- Use `light-*` classes for the light theme.
- Use `dark-*` classes for the dark theme.
- Append the component name after the prefix, e.g., `light-toast`, `dark-toast`.

Once applied, these classes enable dynamic theme calculations. From there, you can override the generated CSS variables using `arbitrary properties`. After the colon, provide any valid CSS color format (HEX, CSS variable, RGB, etc.).

You can find the full list of properties in the [IgxToast Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-toast-theme). The syntax is as follows:

```html
<igx-toast
  class="!light-toast ![--background:#90B69F]">
  ...
</igx-toast>
```

>[!NOTE]
>The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your toast should look like this:

<div class="sample-container loading" style="height:200px">
    <iframe id="toast-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/notifications/toast-tailwind-style/' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

<div class="divider--half"></div>

## API References

<div class="divider--half"></div>

- [IgxToastComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtoastcomponent.html)
- [IgxToastComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-toast-theme)

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
