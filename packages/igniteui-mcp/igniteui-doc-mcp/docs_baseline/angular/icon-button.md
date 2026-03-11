---
title: Angular Icon Button Component – Ignite UI for Angular - MIT license 
_description: Enhance standard icons with button functionalities. Try it now.
_keywords: Angular Icon Button component, Angular Icon Button control, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Angular UI Components,
_license: MIT
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

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Icon Button

To get started with the Ignite UI for Angular Icon Button directive, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

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

Now that you have the Ignite UI for Angular Icon Button directive imported, you can start using the `igxIconButton` directive on elements.

## Angular Icon Button Types

### Flat Icon Button

Use the [`igxIconButton`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxiconbuttondirective.html) directive to add a simple flat icon button in your component template:

```html
<button igxIconButton="flat">
    <igx-icon>edit</igx-icon>
</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/flat-icon-button"></iframe>
</div>

### Contained Icon Button

All you have to do to create a contained icon button is to change the value of the `igxIconButton` property. Note that if you do not choose a type, by default it will also be set to `contained`.

```html
<button igxIconButton>
    <igx-icon>favorite</igx-icon>
</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/contained-icon-button">
</iframe></div>

### Outlined Icon Button

Analogically, we can switch to outlined type:

```html
<button igxIconButton="outlined">
    <igx-icon>more_vert</igx-icon>
</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/outlined-icon-button">
</iframe></div>

## Examples

### Disabled Icon Button

If you want to disable an icon button, you can use the [`disabled`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxiconbuttoncomponent.html#disabled) property. In this sample we also demonstrate how to use icons from different families with the `igxIconButton` directive:

```html
<button igxIconButton="flat" disabled>
    <igx-icon family="fa" name="fa-home"></igx-icon>
</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/disabled-icon-button">
</iframe></div>

### SVG Icons

In addition to material icons, the `igxIconButton` directive also supports usage of SVG images as icons. To do so, first we should inject the [`IgxIconService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxiconservice.html) dependency and then use the [`addSvgIcon`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxiconservice.html#addSvgIcon) method to import the SVG file in cache. For further information, you can read the [SVG section](icon.md#svg-icons) in the icon topic.

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

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/svg-icon-button">
</iframe></div>

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
<div class="divider--half"></div>


As you can see from the sample above, we can also use the `igxIconButton` directive to turn elements like `span` and `div` into Ignite UI for Angular styled icon buttons.

## Icon Button Styling

### Icon Button Theme Property Map

When you modify a primary property, all related dependent properties are updated automatically:

<div class="theme-switcher-wrapper">
 <input type="radio" name="theme" id="material" checked>
 <label for="material" class="switch-label">Material</label>
 <input type="radio" name="theme" id="fluent">
 <label for="fluent" class="switch-label">Fluent</label>
 <input type="radio" name="theme" id="bootstrap">
 <label for="bootstrap" class="switch-label">Bootstrap</label>
 <input type="radio" name="theme" id="indigo">
 <label for="indigo" class="switch-label">Indigo</label>
 <div class="tables">
  <div class="theme-table material">
   <h4>Flat Icon Button</h4>
   <table class="collapsible-table">
    <thead>
     <tr><th>Primary Property</th><th>Dependent Property</th><th>Description</th></tr>
    </thead>
    <tbody class="group">
     <tr class="primary"><td><details><summary><strong>$foreground</strong></summary></details></td><td>$hover-foreground</td><td>Hovered icon color</td></tr>
     <tr class="dependent"><td></td><td>$focus-foreground</td><td>Focused icon color</td></tr>
     <tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>Focus + hover icon color</td></tr>
     <tr class="dependent"><td></td><td>$active-foreground</td><td>Active icon color</td></tr>
     <tr class="dependent"><td></td><td>$hover-background</td><td>Background on hover</td></tr>
     <tr class="dependent"><td></td><td>$focus-background</td><td>Background on focus</td></tr>
     <tr class="dependent"><td></td><td>$focus-hover-background</td><td>Background on focus + hover</td></tr>
     <tr class="dependent"><td></td><td>$active-background</td><td>Background on active</td></tr>
    </tbody>
   </table>
   <h4>Contained Icon Button</h4>
   <table class="collapsible-table">
    <thead>
     <tr><th>Primary Property</th><th>Dependent Property</th><th>Description</th></tr>
    </thead>
    <tbody class="group">
     <tr class="primary"><td><details><summary><strong>$background</strong></summary></details></td><td>$foreground</td><td>Icon color</td></tr>
     <tr class="dependent"><td></td><td>$hover-background</td><td>Background on hover</td></tr>
     <tr class="dependent"><td></td><td>$focus-background</td><td>Background on focus</td></tr>
     <tr class="dependent"><td></td><td>$focus-foreground</td><td>Focused icon color</td></tr>
     <tr class="dependent"><td></td><td>$focus-hover-background</td><td>Background on focus + hover</td></tr>
     <tr class="dependent"><td></td><td>$active-background</td><td>Background on active</td></tr>
     <tr class="dependent"><td></td><td>$hover-foreground</td><td>Hovered icon color</td></tr>
     <tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>Focus + hover icon color</td></tr>
     <tr class="dependent"><td></td><td>$active-foreground</td><td>Active icon color</td></tr>
     <tr class="dependent"><td></td><td>$shadow-color</td><td>Shadow on focus</td></tr>
     <tr class="dependent"><td></td><td>$focus-border-color</td><td>Focus border color</td></tr>
     <tr class="dependent"><td></td><td>$disabled-background</td><td>Disabled background</td></tr>
     <tr class="dependent"><td></td><td>$disabled-foreground</td><td>Disabled icon color</td></tr>
    </tbody>
   </table>
   <h4>Outlined Icon Button</h4>
   <table class="collapsible-table">
    <thead>
     <tr><th>Primary Property</th><th>Dependent Property</th><th>Description</th></tr>
    </thead>
    <tbody class="group">
     <tr class="primary"><td><details><summary><strong>$foreground</strong></summary></details></td><td>$hover-foreground</td><td>Hovered icon color</td></tr>
     <tr class="dependent"><td></td><td>$focus-foreground</td><td>Focused icon color</td></tr>
     <tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>Focus + hover icon color</td></tr>
     <tr class="dependent"><td></td><td>$active-foreground</td><td>Active icon color</td></tr>
     <tr class="dependent"><td></td><td>$hover-background</td><td>Background on hover</td></tr>
     <tr class="dependent"><td></td><td>$focus-background</td><td>Background on focus</td></tr>
     <tr class="dependent"><td></td><td>$focus-hover-background</td><td>Background on focus + hover</td></tr>
     <tr class="dependent"><td></td><td>$active-background</td><td>Background on active</td></tr>
     <tr class="dependent"><td></td><td>$border-color</td><td>Default border color</td></tr>
     <tr class="dependent"><td></td><td>$focus-border-color</td><td>Focus border color</td></tr>
    </tbody>
   </table>
  </div>
        <div class="theme-table fluent">
   <h4>Flat Icon Button</h4>
   <table class="collapsible-table">
   <thead>
   <tr><th>Primary Property</th><th>Dependent Property</th><th>Description</th></tr>
   </thead>
   <tbody class="group">
   <tr class="primary"><td><details><summary><strong>$foreground</strong></summary></details></td><td>$hover-foreground</td><td>Icon color on hover</td></tr>
   <tr class="dependent"><td></td><td>$focus-foreground</td><td>Icon color when focused</td></tr>
   <tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>Icon color when focused and hovered</td></tr>
   <tr class="dependent"><td></td><td>$active-foreground</td><td>Icon color when active</td></tr>
   <tr class="dependent"><td></td><td>$hover-background</td><td>Background color on hover</td></tr>
   <tr class="dependent"><td></td><td>$focus-background</td><td>Background color on focus</td></tr>
   <tr class="dependent"><td></td><td>$focus-hover-background</td><td>Background color on focus and hover</td></tr>
   <tr class="dependent"><td></td><td>$active-background</td><td>Background color when active</td></tr>
   </tbody>
   </table>
   <h4>Contained Icon Button</h4>
   <table class="collapsible-table">
   <thead>
   <tr><th>Primary Property</th><th>Dependent Property</th><th>Description</th></tr>
   </thead>
   <tbody class="group">
   <tr class="primary"><td><details><summary><strong>$background</strong></summary></details></td><td>$foreground</td><td>Icon color</td></tr>
   <tr class="dependent"><td></td><td>$hover-background</td><td>Background color on hover</td></tr>
   <tr class="dependent"><td></td><td>$focus-background</td><td>Background color on focus</td></tr>
   <tr class="dependent"><td></td><td>$focus-foreground</td><td>Icon color when focused</td></tr>
   <tr class="dependent"><td></td><td>$focus-hover-background</td><td>Background color on focus and hover</td></tr>
   <tr class="dependent"><td></td><td>$active-background</td><td>Background color when active</td></tr>
   <tr class="dependent"><td></td><td>$hover-foreground</td><td>Icon color on hover</td></tr>
   <tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>Icon color when focused and hovered</td></tr>
   <tr class="dependent"><td></td><td>$active-foreground</td><td>Icon color when active</td></tr>
   <tr class="dependent"><td></td><td>$shadow-color</td><td>Shadow color on focus</td></tr>
   <tr class="dependent"><td></td><td>$focus-border-color</td><td>Border color on focus</td></tr>
   <tr class="dependent"><td></td><td>$disabled-background</td><td>Background color when disabled</td></tr>
   <tr class="dependent"><td></td><td>$disabled-foreground</td><td>Icon color when disabled</td></tr>
   </tbody>
   </table>
   <h4>Outlined Icon Button</h4>
   <table class="collapsible-table">
   <thead>
   <tr><th>Primary Property</th><th>Dependent Property</th><th>Description</th></tr>
   </thead>
   <tbody class="group">
   <tr class="primary"><td><details><summary><strong>$foreground</strong></summary></details></td><td>$hover-foreground</td><td>Icon color on hover</td></tr>
   <tr class="dependent"><td></td><td>$focus-foreground</td><td>Icon color when focused</td></tr>
   <tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>Icon color when focused and hovered</td></tr>
   <tr class="dependent"><td></td><td>$active-foreground</td><td>Icon color when active</td></tr>
   <tr class="dependent"><td></td><td>$hover-background</td><td>Background color on hover</td></tr>
   <tr class="dependent"><td></td><td>$focus-background</td><td>Background color on focus</td></tr>
   <tr class="dependent"><td></td><td>$focus-hover-background</td><td>Background color on focus and hover</td></tr>
   <tr class="dependent"><td></td><td>$active-background</td><td>Background color when active</td></tr>
   <tr class="dependent"><td></td><td>$border-color</td><td>Border color</td></tr>
   <tr class="dependent"><td></td><td>$focus-border-color</td><td>Border color on focus</td></tr>
   </tbody>
   </table>
  </div>
        <div class="theme-table bootstrap">
   <h4>Flat Icon Button</h4>
   <table class="collapsible-table">
   <thead>
   <tr><th>Primary Property</th><th>Dependent Property</th><th>Description</th></tr>
   </thead>
   <tbody class="group">
   <tr class="primary"><td><details><summary><strong>$foreground</strong></summary></details></td><td>$hover-foreground</td><td>Icon color when hovered</td></tr>
   <tr class="dependent"><td></td><td>$focus-foreground</td><td>Icon color when focused</td></tr>
   <tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>Icon color when focused and hovered</td></tr>
   <tr class="dependent"><td></td><td>$active-foreground</td><td>Icon color when active</td></tr>
            <tr class="dependent"><td></td><td>$disabled-foreground</td><td>Icon color when disabled</td></tr>
            <tr class="dependent"><td></td><td>$shadow-color</td><td>The shadow color of the icon button</td></tr>
   </tbody>
   </table>
   <h4>Contained Icon Button</h4>
   <table class="collapsible-table">
   <thead>
   <tr><th>Primary Property</th><th>Dependent Property</th><th>Description</th></tr>
   </thead>
   <tbody class="group">
   <tr class="primary"><td><details><summary><strong>$background</strong></summary></details></td><td>$foreground</td><td>Icon color</td></tr>
   <tr class="dependent"><td></td><td>$hover-background</td><td>Background color on hover</td></tr>
   <tr class="dependent"><td></td><td>$focus-background</td><td>Background color on focus</td></tr>
   <tr class="dependent"><td></td><td>$focus-foreground</td><td>Icon color when focused</td></tr>
   <tr class="dependent"><td></td><td>$focus-hover-background</td><td>Background color on focus and hover</td></tr>
   <tr class="dependent"><td></td><td>$active-background</td><td>Background color when active</td></tr>
   <tr class="dependent"><td></td><td>$hover-foreground</td><td>Icon color on hover</td></tr>
   <tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>Icon color when focused and hovered</td></tr>
   <tr class="dependent"><td></td><td>$active-foreground</td><td>Icon color when active</td></tr>
   <tr class="dependent"><td></td><td>$shadow-color</td><td>Shadow color</td></tr>
   <tr class="dependent"><td></td><td>$focus-border-color</td><td>Border color on focus</td></tr>
   <tr class="dependent"><td></td><td>$disabled-background</td><td>Background color when disabled</td></tr>
   <tr class="dependent"><td></td><td>$disabled-foreground</td><td>Icon color when disabled</td></tr>
   </tbody>
   </table>
   <h4>Outlined Icon Button</h4>
   <table class="collapsible-table">
   <thead>
   <tr><th>Primary Property</th><th>Dependent Property</th><th>Description</th></tr>
   </thead>
   <tbody class="group">
   <tr class="primary"><td><details><summary><strong>$foreground</strong></summary></details></td><td>$hover-foreground</td><td>Icon color on hover</td></tr>
   <tr class="dependent"><td></td><td>$focus-foreground</td><td>Icon color when focused</td></tr>
   <tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>Icon color when focused and hovered</td></tr>
   <tr class="dependent"><td></td><td>$active-foreground</td><td>Icon color when active</td></tr>
   <tr class="dependent"><td></td><td>$hover-background</td><td>Background color on hover</td></tr>
   <tr class="dependent"><td></td><td>$focus-background</td><td>Background color on focus</td></tr>
   <tr class="dependent"><td></td><td>$focus-hover-background</td><td>Background color on focus and hover</td></tr>
   <tr class="dependent"><td></td><td>$active-background</td><td>Background color when active</td></tr>
   <tr class="dependent"><td></td><td>$border-color</td><td>Border color</td></tr>
   <tr class="dependent"><td></td><td>$focus-border-color</td><td>Border color on focus</td></tr>
            <tr class="dependent"><td></td><td>$shadow-color</td><td>Shadow color</td></tr>
            <tr class="dependent"><td></td><td>$disabled-foreground</td><td>Icon color when disabled</td></tr>
            <tr class="dependent"><td></td><td>$disabled-border-color</td><td>The border of the icon button when disabled</td></tr>
   </tbody>
   </table>
  </div>
        <div class="theme-table indigo">
   <h4>Flat Icon Button</h4>
   <table class="collapsible-table">
   <thead>
   <tr><th>Primary Property</th><th>Dependent Property</th><th>Description</th></tr>
   </thead>
   <tbody class="group">
   <tr class="primary"><td><details><summary><strong>$foreground</strong></summary></details></td><td>$hover-foreground</td><td>Icon color on hover</td></tr>
   <tr class="dependent"><td></td><td>$focus-foreground</td><td>Icon color when focused</td></tr>
   <tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>Icon color when focused and hovered</td></tr>
   <tr class="dependent"><td></td><td>$active-foreground</td><td>Icon color when active</td></tr>
            <tr class="dependent"><td></td><td>$disabled-foreground</td><td>Icon color when disabled</td></tr>
   <tr class="dependent"><td></td><td>$hover-background</td><td>Background color on hover</td></tr>
   <tr class="dependent"><td></td><td>$focus-background</td><td>Background color on focus</td></tr>
   <tr class="dependent"><td></td><td>$focus-hover-background</td><td>Background color on focus and hover</td></tr>
   <tr class="dependent"><td></td><td>$active-background</td><td>Background color when active</td></tr>
            <tr class="dependent"><td></td><td>$focus-border-color</td><td>Border color on focus</td></tr>
   </tbody>
   </table>
   <h4>Contained Icon Button</h4>
   <table class="collapsible-table">
   <thead>
   <tr><th>Primary Property</th><th>Dependent Property</th><th>Description</th></tr>
   </thead>
   <tbody class="group">
   <tr class="primary"><td><details><summary><strong>$background</strong></summary></details></td><td>$foreground</td><td>Icon color</td></tr>
   <tr class="dependent"><td></td><td>$hover-background</td><td>Background color on hover</td></tr>
   <tr class="dependent"><td></td><td>$focus-background</td><td>Background color on focus</td></tr>
   <tr class="dependent"><td></td><td>$focus-foreground</td><td>Icon color when focused</td></tr>
   <tr class="dependent"><td></td><td>$focus-hover-background</td><td>Background color on focus and hover</td></tr>
   <tr class="dependent"><td></td><td>$active-background</td><td>Background color when active</td></tr>
   <tr class="dependent"><td></td><td>$hover-foreground</td><td>Icon color on hover</td></tr>
   <tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>Icon color when focused and hovered</td></tr>
   <tr class="dependent"><td></td><td>$active-foreground</td><td>Icon color when active</td></tr>
   <tr class="dependent"><td></td><td>$shadow-color</td><td>Shadow color</td></tr>
   <tr class="dependent"><td></td><td>$focus-border-color</td><td>Border color on focus</td></tr>
   <tr class="dependent"><td></td><td>$disabled-background</td><td>Background color when disabled</td></tr>
   <tr class="dependent"><td></td><td>$disabled-foreground</td><td>Icon color when disabled</td></tr>
   </tbody>
   </table>
   <h4>Outlined Icon Button</h4>
   <table class="collapsible-table">
   <thead>
   <tr><th>Primary Property</th><th>Dependent Property</th><th>Description</th></tr>
   </thead>
   <tbody class="group">
   <tr class="primary"><td><details><summary><strong>$foreground</strong></summary></details></td><td>$hover-foreground</td><td>Icon color on hover</td></tr>
   <tr class="dependent"><td></td><td>$focus-foreground</td><td>Icon color when focused</td></tr>
   <tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>Icon color when focused and hovered</td></tr>
   <tr class="dependent"><td></td><td>$active-foreground</td><td>Icon color when active</td></tr>
   <tr class="dependent"><td></td><td>$hover-background</td><td>Background color on hover</td></tr>
   <tr class="dependent"><td></td><td>$border-color</td><td>Border color</td></tr>
   <tr class="dependent"><td></td><td>$focus-border-color</td><td>Border color on focus</td></tr>
   </tbody>
   </table>
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

Take a look at the [`icon-button-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-icon-button-theme) section for a complete list of available parameters for styling any type of icon button.

You can also choose to style only buttons of a specific type - `flat`, `outlined` or `contained`.
To do this, you can use the new type-specific theme functions: [`flat-icon-button-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-flat-icon-button-theme), [`outlined-icon-button-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-outlined-icon-button-theme) and [`contained-icon-button-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-contained-icon-button-theme)

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
//   @include css-vars($custom-flat);
//   @include css-vars($custom-contained);
//   @include css-vars($custom-outlined);
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
<div class="divider--half"></div>

### Styling with Tailwind

You can style the icon button using our custom Tailwind utility classes. Make sure to [set up Tailwind](themes/misc/tailwind-classes.md) first.

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

You can find the full list of properties in the [icon-button-theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-icon-button-theme). The syntax is as follows:

```html
<button igxIconButton class="!light-icon-button ![--icon-color:#FF4E00]">
  <igx-icon>edit</igx-icon>
</button>
```

>[!NOTE]
>The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your icon buttons should look like this:

<div class="sample-container loading" style="height:100px">
    <iframe id="icon-buttons-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/data-entries/icon-button-tailwind-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

## API References

<div class="divider--half"></div>

- [IgxIconButtonDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxiconbuttondirective.html)
- [IgxIconButton Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-icon-button-theme)
- [IgxRippleDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxrippledirective.html)

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
