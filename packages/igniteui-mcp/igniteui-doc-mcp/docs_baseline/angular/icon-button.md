---
title: Angular Icon Button Component – Ignite UI for Angular - MIT license 
description: Enhance standard icons with button functionalities. Try it now.
keywords: Angular Icon Button component, Angular Icon Button control, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Angular UI Components,
license: MIT
llms:
  description: "The Ignite UI for Angular Icon Button directive is intended to turn any icon into a fully functional button."
_tocName: Icon Button
---
# Angular Icon Button Overview

The Ignite UI for Angular Icon Button directive is intended to turn any icon into a fully functional button. The `igxIconButton` comes in three types - flat, outlined, and contained which is the default one.

## Angular Icon Button Example

```typescript
import { Component } from '@angular/core';
import { IgxIconButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-icon-button-overview',
    styleUrls: ['./icon-button-overview.component.scss'],
    templateUrl: './icon-button-overview.component.html',
    imports: [IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent]
})
export class IconButtonOverviewComponent { }
```
```html
<div class="wrapper">
    <div class="button-sample">
        <button igxIconButton="flat" igxRipple>
            <igx-icon>home</igx-icon>
        </button>
    </div>
    <div class="button-sample">
        <button igxIconButton="contained" igxRipple>
            <igx-icon>home</igx-icon>
        </button>
    </div>
    <div class="button-sample">
        <button igxIconButton="outlined" igxRipple>
            <igx-icon>home</igx-icon>
        </button>
    </div>
</div>
```
```scss
.wrapper {
    display: flex;
    flex-flow: row wrap;
}

.button-sample {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    flex: 1 0 30%;
    margin: 16px 0;
}
```

<hr/>

## Getting Started with Ignite UI for Angular Icon Button

To get started with the Ignite UI for Angular Icon Button directive, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](/general/getting-started) topic.

The next step is to import the `IgxIconButtonDirective` as a standalone dependency:

```typescript
// home.component.ts

...
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
// import { IgxIconButtonDirective } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
        <button igxIconButton="outlined">
            <igx-icon>home</igx-icon>
        </button>`,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxIconButtonDirective]
})
export class HomeComponent {}
```


**Note:** 
This component uses Material Icons. Add the following link to your `index.html`: `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`

Now that you have the Ignite UI for Angular Icon Button directive imported, you can start using the `igxIconButton` directive on elements.

## Angular Icon Button Types

### Flat Icon Button

Use the [`igxIconButton`](mcp:get_api_reference?platform=angular&component=IgxIconButtonDirective) directive to add a simple flat icon button in your component template:

```html
<button igxIconButton="flat">
    <igx-icon>edit</igx-icon>
</button>
```

```typescript
import { Component } from '@angular/core';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-flat-icon-button',
    styleUrls: ['./flat-icon-button.component.scss'],
    templateUrl: './flat-icon-button.component.html',
    imports: [IgxIconButtonDirective, IgxIconComponent]
})
export class FlatIconButtonComponent { }
```
```html
<div class="wrapper">
    <button igxIconButton="flat">
        <igx-icon>edit</igx-icon>
    </button>
</div>
```
```scss
.wrapper {
    display: flex;
    flex-flow: row wrap;
    margin: 16px;
}
```

### Contained Icon Button

All you have to do to create a contained icon button is to change the value of the `igxIconButton` property. Note that if you do not choose a type, by default it will also be set to `contained`.

```html
<button igxIconButton>
    <igx-icon>favorite</igx-icon>
</button>
```

```typescript
import { Component } from '@angular/core';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-contained-icon-button',
    styleUrls: ['./contained-icon-button.component.scss'],
    templateUrl: './contained-icon-button.component.html',
    imports: [IgxIconButtonDirective, IgxIconComponent]
})
export class ContainedIconButtonComponent { }
```
```html
<div class="wrapper">
    <button igxIconButton>
        <igx-icon>favorite</igx-icon>
    </button>
</div>
```
```scss
.wrapper {
    display: flex;
    flex-flow: row wrap;
    margin: 16px;
}
```

### Outlined Icon Button

Analogically, we can switch to outlined type:

```html
<button igxIconButton="outlined">
    <igx-icon>more_vert</igx-icon>
</button>
```

```typescript
import { Component } from '@angular/core';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-outlined-icon-button',
    styleUrls: ['./outlined-icon-button.component.scss'],
    templateUrl: './outlined-icon-button.component.html',
    imports: [IgxIconButtonDirective, IgxIconComponent]
})
export class OutlinedIconButtonComponent {}
```
```html
<div class="wrapper">
    <button igxIconButton="outlined">
        <igx-icon>more_vert</igx-icon>
    </button>
</div>
```
```scss
.wrapper {
    display: flex;
    flex-flow: row wrap;
    margin: 16px;
}
```

## Examples

### Disabled Icon Button

If you want to disable an icon button, you can use the [`disabled`](mcp:get_api_reference?platform=angular&component=IgxIconButtonDirective&member=disabled) property. In this sample we also demonstrate how to use icons from different families with the `igxIconButton` directive:

```html
<button igxIconButton="flat" disabled>
    <igx-icon family="fa" name="fa-home"></igx-icon>
</button>
```

```typescript
import { Component } from '@angular/core';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-disabled-icon-button',
    styleUrls: ['./disabled-icon-button.component.scss'],
    templateUrl: './disabled-icon-button.component.html',
    imports: [IgxIconButtonDirective, IgxIconComponent]
})
export class DisabledIconButtonComponent {}
```
```html
<div class="wrapper">
    <button igxIconButton="flat" disabled>
        <igx-icon family="fa" name="fa-home"></igx-icon>
    </button>
</div>
```
```scss
@import url("https://unpkg.com/@fortawesome/fontawesome-free-webfonts@^1.0.9/css/fontawesome.css");
@import url("https://unpkg.com/@fortawesome/fontawesome-free-webfonts@^1.0.9/css/fa-regular.css");
@import url("https://unpkg.com/@fortawesome/fontawesome-free-webfonts@^1.0.9/css/fa-solid.css");

.wrapper {
    display: flex;
    flex-flow: row wrap;
    margin: 16px;
}
```

### SVG Icons

In addition to material icons, the `igxIconButton` directive also supports usage of SVG images as icons. To do so, first we should inject the [`IgxIconService`](mcp:get_api_reference?platform=angular&component=IgxIconService) dependency and then use the [`addSvgIcon`](mcp:get_api_reference?platform=angular&component=IgxIconService&member=addSvgIcon) method to import the SVG file in cache. For further information, you can read the [SVG section](/icon#svg-icons) in the icon topic.

```typescript
constructor(private _iconService: IgxIconService) { }

public ngOnInit() {
    // register custom SVG icon
    this._iconService.addSvgIcon('rain', 'assets/images/card/icons/rain.svg', 'weather-icons');
}
```

```html
<button igxIconButton>
    <igx-icon family="weather-icons" name="rain"></igx-icon>
</button>
```

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-svg-icon-button',
    styleUrls: ['./svg-icon-button.component.scss'],
    templateUrl: './svg-icon-button.component.html',
    imports: [IgxIconButtonDirective, IgxIconComponent]
})
export class SVGIconButtonComponent implements OnInit {
    private _iconService = inject(IgxIconService);


    public ngOnInit() {
        // register custom SVG icon
        this._iconService.addSvgIcon('rain', 'assets/images/card/icons/rain.svg', 'weather-icons');
    }
}
```
```html
<div class="wrapper">
    <button igxIconButton>
        <igx-icon family="weather-icons" name="rain"></igx-icon>
    </button>
</div>
```
```scss
.wrapper {
    display: flex;
    flex-flow: row wrap;
    margin: 16px;
}
```

### Size

Users can choose one of the three predefined `igxIconButton` sizes by using the `--ig-size` custom CSS property. By default, the size of the component is set medium.

```typescript
import { Component } from '@angular/core';
import { IgxIconButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-icon-button-size',
    styleUrls: ['./icon-button-size.component.scss'],
    templateUrl: './icon-button-size.component.html',
    imports: [IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent]
})
export class IconButtonSizeComponent { }
```
```html
<div class="wrapper">
    <div class="button-sample">
        <span igxIconButton="outlined" igxRipple class="small">
            <igx-icon>person</igx-icon>
        </span>
    </div>
    <div class="button-sample">
        <div igxIconButton="outlined" igxRipple class="medium">
            <igx-icon>place</igx-icon>
        </div>
    </div>
    <div class="button-sample">
        <button igxIconButton="outlined" igxRipple class="large">
            <igx-icon>phone</igx-icon>
        </button>
    </div>
</div>
```
```scss
.wrapper {
    display: flex;
    flex-flow: row wrap;
}

.button-sample {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    flex: 1 0 30%;
    margin: 16px 0;
}

.large {
    --ig-size: var(--ig-size-large);
}

.medium {
    --ig-size: var(--ig-size-medium);
}

.small {
    --ig-size: var(--ig-size-small);
}
```
<hr/>

As you can see from the sample above, we can also use the `igxIconButton` directive to turn elements like `span` and `div` into Ignite UI for Angular styled icon buttons.

## Icon Button Styling

### Icon Button Theme Property Map

When you modify a primary property, all related dependent properties are updated automatically:

<div class="theme-switcher-wrapper">

 <input type="radio" name="theme" id="material" checked/>
 <label for="material" class="switch-label">Material</label>
 <input type="radio" name="theme" id="fluent"/>
 <label for="fluent" class="switch-label">Fluent</label>
 <input type="radio" name="theme" id="bootstrap"/>
 <label for="bootstrap" class="switch-label">Bootstrap</label>
 <input type="radio" name="theme" id="indigo"/>
 <label for="indigo" class="switch-label">Indigo</label>
 <div class="tables">

  <div class="theme-table material">

   <h4>Flat Icon Button</h4>
   | Primary Property | Dependent Property | Description |
| --- | --- | --- |
| **$foreground** | $hover-foreground | Hovered icon color |
|  | $focus-foreground | Focused icon color |
|  | $focus-hover-foreground | Focus + hover icon color |
|  | $active-foreground | Active icon color |
|  | $hover-background | Background on hover |
|  | $focus-background | Background on focus |
|  | $focus-hover-background | Background on focus + hover |
|  | $active-background | Background on active |
   <h4>Contained Icon Button</h4>
   | Primary Property | Dependent Property | Description |
| --- | --- | --- |
| **$background** | $foreground | Icon color |
|  | $hover-background | Background on hover |
|  | $focus-background | Background on focus |
|  | $focus-foreground | Focused icon color |
|  | $focus-hover-background | Background on focus + hover |
|  | $active-background | Background on active |
|  | $hover-foreground | Hovered icon color |
|  | $focus-hover-foreground | Focus + hover icon color |
|  | $active-foreground | Active icon color |
|  | $shadow-color | Shadow on focus |
|  | $focus-border-color | Focus border color |
|  | $disabled-background | Disabled background |
|  | $disabled-foreground | Disabled icon color |
   <h4>Outlined Icon Button</h4>
   | Primary Property | Dependent Property | Description |
| --- | --- | --- |
| **$foreground** | $hover-foreground | Hovered icon color |
|  | $focus-foreground | Focused icon color |
|  | $focus-hover-foreground | Focus + hover icon color |
|  | $active-foreground | Active icon color |
|  | $hover-background | Background on hover |
|  | $focus-background | Background on focus |
|  | $focus-hover-background | Background on focus + hover |
|  | $active-background | Background on active |
|  | $border-color | Default border color |
|  | $focus-border-color | Focus border color |
  
</div>
        <div class="theme-table fluent">

   <h4>Flat Icon Button</h4>
   | Primary Property | Dependent Property | Description |
| --- | --- | --- |
| **$foreground** | $hover-foreground | Icon color on hover |
|  | $focus-foreground | Icon color when focused |
|  | $focus-hover-foreground | Icon color when focused and hovered |
|  | $active-foreground | Icon color when active |
|  | $hover-background | Background color on hover |
|  | $focus-background | Background color on focus |
|  | $focus-hover-background | Background color on focus and hover |
|  | $active-background | Background color when active |
   <h4>Contained Icon Button</h4>
   | Primary Property | Dependent Property | Description |
| --- | --- | --- |
| **$background** | $foreground | Icon color |
|  | $hover-background | Background color on hover |
|  | $focus-background | Background color on focus |
|  | $focus-foreground | Icon color when focused |
|  | $focus-hover-background | Background color on focus and hover |
|  | $active-background | Background color when active |
|  | $hover-foreground | Icon color on hover |
|  | $focus-hover-foreground | Icon color when focused and hovered |
|  | $active-foreground | Icon color when active |
|  | $shadow-color | Shadow color on focus |
|  | $focus-border-color | Border color on focus |
|  | $disabled-background | Background color when disabled |
|  | $disabled-foreground | Icon color when disabled |
   <h4>Outlined Icon Button</h4>
   | Primary Property | Dependent Property | Description |
| --- | --- | --- |
| **$foreground** | $hover-foreground | Icon color on hover |
|  | $focus-foreground | Icon color when focused |
|  | $focus-hover-foreground | Icon color when focused and hovered |
|  | $active-foreground | Icon color when active |
|  | $hover-background | Background color on hover |
|  | $focus-background | Background color on focus |
|  | $focus-hover-background | Background color on focus and hover |
|  | $active-background | Background color when active |
|  | $border-color | Border color |
|  | $focus-border-color | Border color on focus |
  
</div>
        <div class="theme-table bootstrap">

   <h4>Flat Icon Button</h4>
   | Primary Property | Dependent Property | Description |
| --- | --- | --- |
| **$foreground** | $hover-foreground | Icon color when hovered |
|  | $focus-foreground | Icon color when focused |
|  | $focus-hover-foreground | Icon color when focused and hovered |
|  | $active-foreground | Icon color when active |
|  | $disabled-foreground | Icon color when disabled |
|  | $shadow-color | The shadow color of the icon button |
   <h4>Contained Icon Button</h4>
   | Primary Property | Dependent Property | Description |
| --- | --- | --- |
| **$background** | $foreground | Icon color |
|  | $hover-background | Background color on hover |
|  | $focus-background | Background color on focus |
|  | $focus-foreground | Icon color when focused |
|  | $focus-hover-background | Background color on focus and hover |
|  | $active-background | Background color when active |
|  | $hover-foreground | Icon color on hover |
|  | $focus-hover-foreground | Icon color when focused and hovered |
|  | $active-foreground | Icon color when active |
|  | $shadow-color | Shadow color |
|  | $focus-border-color | Border color on focus |
|  | $disabled-background | Background color when disabled |
|  | $disabled-foreground | Icon color when disabled |
   <h4>Outlined Icon Button</h4>
   | Primary Property | Dependent Property | Description |
| --- | --- | --- |
| **$foreground** | $hover-foreground | Icon color on hover |
|  | $focus-foreground | Icon color when focused |
|  | $focus-hover-foreground | Icon color when focused and hovered |
|  | $active-foreground | Icon color when active |
|  | $hover-background | Background color on hover |
|  | $focus-background | Background color on focus |
|  | $focus-hover-background | Background color on focus and hover |
|  | $active-background | Background color when active |
|  | $border-color | Border color |
|  | $focus-border-color | Border color on focus |
|  | $shadow-color | Shadow color |
|  | $disabled-foreground | Icon color when disabled |
|  | $disabled-border-color | The border of the icon button when disabled |
  
</div>
        <div class="theme-table indigo">

   <h4>Flat Icon Button</h4>
   | Primary Property | Dependent Property | Description |
| --- | --- | --- |
| **$foreground** | $hover-foreground | Icon color on hover |
|  | $focus-foreground | Icon color when focused |
|  | $focus-hover-foreground | Icon color when focused and hovered |
|  | $active-foreground | Icon color when active |
|  | $disabled-foreground | Icon color when disabled |
|  | $hover-background | Background color on hover |
|  | $focus-background | Background color on focus |
|  | $focus-hover-background | Background color on focus and hover |
|  | $active-background | Background color when active |
|  | $focus-border-color | Border color on focus |
   <h4>Contained Icon Button</h4>
   | Primary Property | Dependent Property | Description |
| --- | --- | --- |
| **$background** | $foreground | Icon color |
|  | $hover-background | Background color on hover |
|  | $focus-background | Background color on focus |
|  | $focus-foreground | Icon color when focused |
|  | $focus-hover-background | Background color on focus and hover |
|  | $active-background | Background color when active |
|  | $hover-foreground | Icon color on hover |
|  | $focus-hover-foreground | Icon color when focused and hovered |
|  | $active-foreground | Icon color when active |
|  | $shadow-color | Shadow color |
|  | $focus-border-color | Border color on focus |
|  | $disabled-background | Background color when disabled |
|  | $disabled-foreground | Icon color when disabled |
   <h4>Outlined Icon Button</h4>
   | Primary Property | Dependent Property | Description |
| --- | --- | --- |
| **$foreground** | $hover-foreground | Icon color on hover |
|  | $focus-foreground | Icon color when focused |
|  | $focus-hover-foreground | Icon color when focused and hovered |
|  | $active-foreground | Icon color when active |
|  | $hover-background | Background color on hover |
|  | $border-color | Border color |
|  | $focus-border-color | Border color on focus |
  
</div>

</div>
</div>

Following the simplest approach, we use CSS variables to customize the appearance of the icon button:

```scss
[igxIconButton="contained"] {
  --background: #011627;
  --foreground: #fefefe;
  --hover-foreground: #011627dc;
  --hover-background: #ecaa53;
  --focus-foreground: #011627dc;
  --focus-background: #ecaa53;
  --focus-border-color: #0116276c;
  --active-foreground: #011627dc;
  --active-background: #ecaa53;
}
```

Take a look at the `icon-button-theme` section for a complete list of available parameters for styling any type of icon button.

You can also choose to style only buttons of a specific type - `flat`, `outlined` or `contained`.
To do this, you can use the new type-specific theme functions: `flat-icon-button-theme`, `outlined-icon-button-theme` and `contained-icon-button-theme`

Here’s an example of using the `contained-icon-button-theme` function to define a custom theme in SCSS:

```scss
@use "igniteui-angular/theming" as *;

$custom-contained: contained-icon-button-theme(
    $background: #ECAA53,
);
```

This will generate a fully themed `contained icon button`, including appropriate foreground and background colors for its various states like hover, focus, and active.

```typescript
import { Component } from '@angular/core';
import { IgxIconButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-icon-button-styling',
    styleUrls: ['./icon-button-styling.component.scss'],
    templateUrl: './icon-button-styling.component.html',
    imports: [IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent]
})
export class IconButtonStylingComponent { }
```
```html
<div class="wrapper">
    <div class="button-sample">
        <button igxIconButton="flat" igxRipple>
            <igx-icon>home</igx-icon>
        </button>
    </div>
    <div class="button-sample">
        <button igxIconButton="contained" igxRipple>
            <igx-icon>home</igx-icon>
        </button>
    </div>
    <div class="button-sample">
        <button igxIconButton="outlined" igxRipple>
            <igx-icon>home</igx-icon>
        </button>
    </div>
</div>
```
```scss
@use "igniteui-angular/theming" as *;

.wrapper {
  display: flex;
  flex-flow: row wrap;
}

.button-sample {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  flex: 1 0 30%;
  margin: 16px 0;
}

// $custom-flat: flat-icon-button-theme(
//     $foreground: #011627,
// );

// $custom-contained: contained-icon-button-theme(
//     $background: #ECAA53,
// );

// $custom-outlined: outlined-icon-button-theme(
//     $foreground: #011627,
// );

// :host {
//   @include tokens($custom-flat);
//   @include tokens($custom-contained);
//   @include tokens($custom-outlined);
// }

[igxIconButton="flat"] {
  --foreground: #011627;
  --background: #FEFEFE;
  --hover-background: #ECAA53;
  --focus-foreground: #011627dc;
  --focus-background: #ECAA53;
  --active-foreground: #011627dc;
  --active-background: #ECAA53;
}

[igxIconButton="contained"] {
  --background: #011627;
  --foreground: #FEFEFE;
  --hover-foreground:  #011627dc;
  --hover-background: #ECAA53;
  --focus-foreground: #011627dc;
  --focus-background: #ECAA53;
  --focus-border-color:  #0116276c;
  --active-foreground: #011627dc;
  --active-background: #ECAA53;
}

[igxIconButton="outlined"] {
  --foreground: #011627;
  --background: #FEFEFE;
  --border-color: #011627;
  --hover-foreground:  #011627dc;
  --hover-background: #ECAA53;
  --focus-foreground: #011627dc;
  --focus-background: #ECAA53;
  --focus-border-color:  #0116276c;
  --active-foreground: #011627dc;
  --active-background: #ECAA53;
}
```
<hr/>

### Styling with Tailwind

You can style the icon button using our custom Tailwind utility classes. Make sure to [set up Tailwind](/themes/misc/tailwind-classes) first.

Along with the tailwind import in your global stylesheet, you can apply the desired theme utilities as follows:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

The utility file includes both `light` and `dark` theme variants.

- Use `light-*` classes for the light theme.
- Use `dark-*` classes for the dark theme.
- Append the component name after the prefix, e.g., `light-icon-button`, `dark-icon-button`.

Once applied, these classes enable dynamic theme calculations. From there, you can override the generated CSS variables using `arbitrary properties`. After the colon, provide any valid CSS color format (HEX, CSS variable, RGB, etc.).

You can find the full list of properties in the `icon-button-theme`. The syntax is as follows:

```html
<button igxIconButton class="!light-icon-button ![--icon-color:#FF4E00]">
  <igx-icon>edit</igx-icon>
</button>
```

**Note:** 
The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your icon buttons should look like this:

```typescript
import { Component } from '@angular/core';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-icon-button-tailwind-styling',
    styleUrls: ['./icon-button-tailwind-styling.component.scss'],
    templateUrl: './icon-button-tailwind-styling.component.html',
    imports: [IgxIconButtonDirective, IgxIconComponent]
})
export class IconButtonTailwindStylingComponent { }
```
```html
<div class="wrapper">
    <div class="button-sample">
        <button class="!light-flat-icon-button ![--foreground:#7B9E89]" igxIconButton="flat">
            <igx-icon>home</igx-icon>
        </button>
    </div>
    <div class="button-sample">
        <button class="!light-contained-icon-button ![--background:#7B9E89]" igxIconButton="contained">
            <igx-icon>home</igx-icon>
        </button>
    </div>
    <div class="button-sample">
        <button class="!light-outlined-icon-button ![--foreground:#7B9E89]" igxIconButton="outlined">
            <igx-icon>home</igx-icon>
        </button>
    </div>
</div>
```
```scss
.wrapper {
  display: flex;
  flex-flow: row wrap;
}

.button-sample {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  flex: 1 0 30%;
  margin: 16px 0;
}
```

## API References
<hr/>
- [`IgxIconButtonDirective`](mcp:get_api_reference?platform=angular&component=IgxIconButtonDirective)
- `IgxIconButton Styles`
- [`IgxRippleDirective`](mcp:get_api_reference?platform=angular&component=IgxRippleDirective)
## Additional Resources

<hr/>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
