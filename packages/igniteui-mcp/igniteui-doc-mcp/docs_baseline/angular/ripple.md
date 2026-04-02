---
title: Angular Ripple Directive – Ignite UI for Angular | Infragistics | MIT license
_description: With Ignite UI for Angular Ripple directive, developers can define an area which received a ripple animation effect for powerful UI enhancement.
_keywords: Angular Ripple component, Angular Ripple Directive, Angular Ripple control, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library
_license: MIT
_tocName: Ripple
---

# Angular Ripple Directive Overview

<p class="highlight">The Ignite UI for Angular Ripple component creates an animation in response to a touch or a mouse click.</p>

## Angular Ripple Example

<div class="divider--half"></div>

```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-ripple-sample-5',
    styleUrls: ['./ripple-sample-5.component.scss'],
    templateUrl: './ripple-sample-5.component.html',
    imports: [IgxButtonDirective, IgxRippleDirective]
})
export class RippleSample5Component { }
```
```html
<button class="sample-button" igxButton="contained" igxRipple>Click Me</button>
```
```scss
.sample-button{
    width: 7rem;
    margin: 8px;
}
```

<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Ripple Directive

To get started with the Ignite UI for Angular Ripple directive, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxRippleModule` in the **app.module.ts** file.

```typescript
// app.module.ts

import { IgxRippleModule } from 'igniteui-angular/directives';
// import { IgxRippleModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [
        ...
        IgxRippleModule,
        ...
    ]
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxRippleDirective` as standalone dependencies.

```typescript
// home.component.ts

import { IgxRippleDirective, IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxButtonDirective } from 'igniteui-angular/button';
// import { IgxRippleDirective, IgxButtonDirective } from '@infragistics/igniteui-angular'; for licensed package

@Component({
  selector: 'app-home',
  template: '<button igxButton="contained" igxRipple>Click Me</button>',
  styleUrls: ['home.component.scss'],
  standalone: true,
  imports: [IgxRippleDirective, IgxButtonDirective],
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Ripple module or directive imported, you can start using the `igxRipple` directive.

> [!WARNING]
> The [`igxRipple`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxrippledirective.html) uses the Web Animation API and runs natively on [browsers that support it.](http://caniuse.com/#feat=web-animation)
> The `web-animations.min.js` polyfill is [available](https://github.com/web-animations/web-animations-js)
> for other browsers.

## Using the Angular Ripple Directive

### Adding Ripple Effect

Use the `igxRipple` directive to add a ripple effect to the specified element:

```html
<button igxButton="contained" igxRipple>Click Me</button>
```

## Examples

### Custom Color

You can easily change the default ripple color using the `igxRipple`:

```html
<button igxButton="contained" igxRipple="white">White</button>
```

```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-ripple-sample-6',
    styleUrls: ['./ripple-sample-6.component.scss'],
    templateUrl: './ripple-sample-6.component.html',
    imports: [IgxButtonDirective, IgxRippleDirective]
})
export class RippleSample6Component { }
```
```html
<button class="sample-button" igxButton="contained" igxRipple="white">White</button>
```
```scss
.sample-button{
    width: 7rem;
    margin: 8px;
}
```

### Centered Ripple Effect

By default, the ripple effect starts from the position of the click event. You can change this behavior using the [`igxRippleCentered`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxrippledirective.html#centered) property and setting the center of the element as origin.

```html
<button igxButton="contained" igxRipple="white" [igxRippleCentered]="true">
  Centered
</button>
```

```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-ripple-sample-3',
    styleUrls: ['./ripple-sample-3.component.scss'],
    templateUrl: './ripple-sample-3.component.html',
    imports: [IgxButtonDirective, IgxRippleDirective]
})
export class RippleSample3Component { }
```
```html
<button class="sample-button" igxButton="contained" igxRipple="white" [igxRippleCentered]="true">Centered</button>
```
```scss
.sample-button{
    width: 7rem;
    margin: 8px;
}
```

### Ripple Duration

We can use the [`igxRippleDuration`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxrippledirective.html#rippleDuration) property to change the duration of the ripple animation, which, by default, is set to 600 milliseconds.

```html
<button igxButton="contained" igxRipple [igxRippleDuration]="2000">
  Click Me
</button>
```

```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-ripple-sample-4',
    styleUrls: ['./ripple-sample-4.component.scss'],
    templateUrl: './ripple-sample-4.component.html',
    imports: [IgxButtonDirective, IgxRippleDirective]
})
export class RippleSample4Component { }
```
```html
<button class="sample-button" igxButton="contained" igxRipple [igxRippleDuration]="2000">Click Me</button>
```
```scss
.sample-button{
    width: 7rem;
    margin: 8px;
}
```

### Ripple Target

Use the [`igxRippleTarget`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxrippledirective.html#igxRippleTarget) property to attach a ripple effect to a specific element inside a parent element.

```html
<div class="parent" igxRipple="white" igxRippleTarget=".child" [igxRippleCentered]="true">
  ...
  <button class="sample-button child" igxButton="contained">Read More</button>
</div>
```

Notice that no matter whether you click on the parent or the child element, the ripple effect will only appear on the button.

```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-ripple-sample-2',
    styleUrls: ['./ripple-sample-2.component.scss'],
    templateUrl: './ripple-sample-2.component.html',
    imports: [IgxRippleDirective, IgxButtonDirective]
})
export class RippleSample2Component { }
```
```html
<div class="parent" igxRipple="white" igxRippleTarget=".child" [igxRippleCentered]="true">
    <div>
        <h5>New York City</h5>
        New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that's among the world's major commercial, financial and cultural centers.
        <button class="sample-button child" igxButton="contained">Read More</button>
    </div>
</div>
```
```scss
.parent{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    width: 500px;
    height: 300px;
    padding: 15px;
    cursor: pointer;
    text-align: center;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
}

.sample-button{
    width: 7rem;
    margin: 15px auto;
    position: relative;
    display: block;
}

h5{
    margin-bottom: 15px;
}
```

> [!NOTE]
> The child element, which you want to target with the `igxRippleTarget` property, has to be relatively positioned.

## Styling

First, in order to use the functions exposed by the theme engine, we need to import the `index` file, where all styling functions and mixins are located, into our style file:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

You can easily create a new theme, that extends the [`ripple-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-ripple-theme) and accepts the parameters, required to customize the ripple as desired.

```scss
$custom-ripple-theme: ripple-theme(
  $color: #383779,
);
```

The next step is to pass the custom ripple theme:

```scss
:host {
  @include tokens($custom-ripple-theme);
}
```

> [!NOTE]
> A color set using the `igxRiple` directive would take precedence over one set by a custom theme.

### Demo

```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective, IgxIconButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';

@Component({
    selector: 'app-ripple-styling-sample',
    styleUrls: ['./ripple-styling-sample.component.scss'],
    templateUrl: './ripple-styling-sample.component.html',
    imports: [IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective, IgxIconComponent, IgxAvatarComponent]
})
export class RippleStylingSampleComponent { }
```
```html
<section class="section">
    <article class="sample-column">
        <h5>Button</h5>
        <button class="sample-button" igxButton="outlined" igxRipple>
            Click Me
        </button>
    </article>
    <article class="sample-column">
        <h5>Icon</h5>
        <button igxIconButton="flat" igxRipple>
            <igx-icon family="material">search</igx-icon>
        </button>
    </article>
    <article class="sample-column">
        <h5>Avatar</h5>
        <igx-avatar class="shadow" igxRipple icon="person" shape="circle" size="small">
        </igx-avatar>
    </article>
</section>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$custom-ripple-theme: ripple-theme(
  $color: #383779,
);

:host {
  @include tokens($custom-ripple-theme);
}
```

## API References

<div class="divider--half"></div>

- [IgxRippleDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxrippledirective.html)
- [IgxRipple Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-ripple-theme)

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
