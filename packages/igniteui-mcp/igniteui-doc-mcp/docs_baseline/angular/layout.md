---
title: Angular Layout Manager Directives - MIT license 
_description: Only Ignite UI for Angular Layout Manager directive provides various styles of responsive and fluid user interfaces.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Layout Manager component, Angular Layout Manager controls
_license: MIT
_tocName: Layout Manager
---

# Angular Layout Manager Directives Overview

<p class="highlight">The Ignite UI for Angular Layout Directives allow developers to specify a layout direction for any children of the container it is applied to. Layout can flow vertically or horizontally, with controls for wrapping, justification, and alignment.</p>
<div class="divider"></div>

## Angular Layout Manager Example

<div class="divider--half"></div>


```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { IgxFlexDirective, IgxLayoutDirective } from 'igniteui-angular/directives';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-layout-sample',
    styleUrls: ['./layout-sample.component.scss'],
    templateUrl: './layout-sample.component.html',
    imports: [IgxLayoutDirective, IgxFlexDirective]
})

export class LayoutSampleComponent { }
```
```html
<div igxLayout>
    <div class="layout-box sidebar" igxLayout igxLayoutDir="column">
        <div class="layout-box__el" igxFlex>Sidebar</div>
    </div>

    <div class="layout-box content" igxLayout igxLayoutDir="column">
        <div class="layout-box__el header" igxFlex>Header</div>
        <div class="layout-box__el body" igxFlex>
            <div class="layout-box" igxLayout>
                <div class="layout-box__el" igxFlex>1</div>
                <div class="layout-box__el" igxFlex>2</div>
                <div class="layout-box__el" igxFlex>3</div>
            </div>
        </div>
        <div class="layout-box__el footer" igxFlex>Footer</div>
    </div>
</div>
```
```scss
@use '../../../../variables' as *;

.layout-box {
    width: 100%;
    background: color($color: 'gray', $variant: 200);
    padding: 8px;

    .layout-box__el {
        padding: 10px 20px;
        margin: 8px;
        background: color($color: 'secondary');
        color: color($color: 'surface');
    }

    &.sidebar {
        flex: 1;
    }

    &.content {
        flex: 3;

        .layout-box {
            height: 400px;
        }

        .body {
            background: none;
            padding: 0;
        }
    }
}
```


<div class="divider--half"></div>

## Usage

Use the [**igxLayout**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlayoutdirective.html) directive on a container element to specify the layout direction for its children:

<div class="divider--half"></div>

### Horizontally with Row direction

Use [`igxLayoutDir`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlayoutdirective.html#dir)`="row"`.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonGroupAlignment, IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxFlexDirective, IgxLayoutDirective, IgxRippleDirective } from 'igniteui-angular/directives';


@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-layout-direction-row',
    styleUrls: ['./layout-direction-row.component.scss'],
    templateUrl: './layout-direction-row.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxLayoutDirective, IgxFlexDirective]
})

export class LayoutDirectionRowComponent {
    public alignment = ButtonGroupAlignment.horizontal;
    public rippleColor = 'grey';
    public layout = 'row';
}
```
```html
<igx-buttongroup [alignment]="alignment">
  <button igxButton (click) = "layout = 'row'" [igxRipple]="rippleColor" [selected]="true">Row</button>
  <button igxButton (click) = "layout = 'row-reverse'" [igxRipple]="rippleColor">Row reverse</button>
</igx-buttongroup>
@if (layout === 'row') {
  <div>
    <div class="layout-box" igxLayout igxLayoutDir="row">
      <div class="layout-box__el" igxFlex>1</div>
      <div class="layout-box__el" igxFlex>2</div>
      <div class="layout-box__el" igxFlex>3</div>
    </div>
  </div>
}

@if (layout === 'row-reverse') {
  <div>
    <div class="layout-box" igxLayout igxLayoutDir="row" [igxLayoutReverse]="true">
      <div class="layout-box__el" igxFlex>1</div>
      <div class="layout-box__el" igxFlex>2</div>
      <div class="layout-box__el" igxFlex>3</div>
    </div>
  </div>
}
```
```scss
@use '../../../../variables' as *;

igx-buttongroup {
    display: block;
    margin: 24px 4px;
}

.layout-box {
    width: 100%;
    background: color($color: 'gray', $variant: 200);
    padding: 8px;
    border-radius: 6px;
}

.layout-box__el {
    height: 48px;
    padding: 10px 20px;
    margin: 8px;
    background: color($color: 'secondary');
    color: color($color: 'surface');
}
```


<div class="divider--half"></div>

### Vertically with Column direction

Use [`igxLayoutDir`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlayoutdirective.html#dir)`="column"`.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonGroupAlignment, IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxFlexDirective, IgxLayoutDirective, IgxRippleDirective } from 'igniteui-angular/directives';


@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-layout-direction-column',
    styleUrls: ['./layout-direction-column.component.scss'],
    templateUrl: './layout-direction-column.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxLayoutDirective, IgxFlexDirective]
})

export class LayoutDirectionColumnComponent {
    public alignment = ButtonGroupAlignment.horizontal;
    public rippleColor = 'grey';
    public layout = 'column';
}
```
```html
<igx-buttongroup [alignment]="alignment">
  <button igxButton (click) = "layout = 'column'" [igxRipple]="rippleColor" [selected]="true">Column</button>
  <button igxButton (click) = "layout = 'column-reverse'" [igxRipple]="rippleColor">Column reverse</button>
</igx-buttongroup>
@if (layout === 'column') {
  <div>
    <div class="layout-box" igxLayout igxLayoutDir="column">
      <div class="layout-box__el" igxFlex>1</div>
      <div class="layout-box__el" igxFlex>2</div>
      <div class="layout-box__el" igxFlex>3</div>
    </div>
  </div>
}

@if (layout === 'column-reverse') {
  <div>
    <div class="layout-box" igxLayout igxLayoutDir="column" [igxLayoutReverse]="true">
      <div class="layout-box__el" igxFlex>1</div>
      <div class="layout-box__el" igxFlex>2</div>
      <div class="layout-box__el" igxFlex>3</div>
    </div>
  </div>
}
```
```scss
@use '../../../../variables' as *;

igx-buttongroup {
    display: block;
    margin: 24px 4px;
}

.layout-box {
    width: 100%;
    background: color($color: 'gray', $variant: 200);
    padding: 8px;
    border-radius: 6px;
}

.layout-box__el {
    height: 48px;
    padding: 10px 20px;
    margin: 8px;
    background: color($color: 'secondary');
    color: color($color: 'surface');
}
```


<div class="divider--half"></div>

>[!NOTE]
> Reverse order using [`igxLayoutReverse`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlayoutdirective.html#reverse)`="true"`.

<div class="divider--half"></div>

### Customize the order of the elements

Customize the order of the element by using `igxFlexOrder`.


```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonGroupAlignment } from 'igniteui-angular/button-group';
import { IgxFlexDirective, IgxLayoutDirective } from 'igniteui-angular/directives';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-layout-custom-order',
    styleUrls: ['./layout-custom-order.component.scss'],
    templateUrl: './layout-custom-order.component.html',
    imports: [IgxLayoutDirective, IgxFlexDirective]
})

export class LayoutCustomOrderComponent {
}
```
```html
<div class="layout-box" igxLayout igxLayoutDir="row">
    <div class="layout-box__el" igxFlex [igxFlexOrder]="1">1</div>
    <div class="layout-box__el" igxFlex [igxFlexOrder]="0">2</div>
    <div class="layout-box__el" igxFlex [igxFlexOrder]="2">3</div>
</div>
```
```scss
@use '../../../../variables' as *;

igx-buttongroup {
    display: block;
    margin: 24px 4px;
}

.layout-box {
    width: 100%;
    background: color($color: 'gray', $variant: 200);
    padding: 8px;
    border-radius: 6px;
    margin-top: 24px;
}

.layout-box__el {
    height: 48px;
    padding: 10px 20px;
    margin: 8px;
    background: color($color: 'secondary');
    color: color($color: 'surface');
}
```


<div class="divider--half"></div>

### Change element spacing

Use [`igxLayoutJustify`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlayoutdirective.html#justify)`="space-between | space-around"`.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonGroupAlignment, IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxLayoutDirective, IgxRippleDirective } from 'igniteui-angular/directives';


@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-layout-content-space',
    styleUrls: ['./layout-content-space.component.scss'],
    templateUrl: './layout-content-space.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxLayoutDirective]
})

export class LayoutContentSpaceComponent {
    public alignment = ButtonGroupAlignment.horizontal;
    public rippleColor = 'grey';
    public layout = 'space-between';
}
```
```html
<igx-buttongroup [alignment]="alignment">
  <button igxButton (click) = "layout = 'space-between'" [igxRipple]="rippleColor" [selected]="true">Space Between</button>
  <button igxButton (click) = "layout = 'space-around'" [igxRipple]="rippleColor">Space Around</button>
</igx-buttongroup>
@if (layout === 'space-between') {
  <div>
    <div class="layout-box" igxLayout igxLayoutJustify="space-between">
      <div class="layout-box__el">1</div>
      <div class="layout-box__el">2</div>
      <div class="layout-box__el">3</div>
    </div>
  </div>
}

@if (layout === 'space-around') {
  <div>
    <div class="layout-box" igxLayout igxLayoutJustify="space-around">
      <div class="layout-box__el">1</div>
      <div class="layout-box__el">2</div>
      <div class="layout-box__el">3</div>
    </div>
  </div>
}
```
```scss
@use '../../../../variables' as *;

igx-buttongroup {
    display: block;
    margin: 24px 4px;
}

.layout-box {
    width: 100%;
    background: color($color: 'gray', $variant: 200);
    padding: 8px;
    border-radius: 6px;
}

.layout-box__el {
    height: 48px;
    padding: 10px 20px;
    margin: 8px;
    background: color($color: 'secondary');
    color: color($color: 'surface');
}
```


<div class="divider--half"></div>

### Position elements along the main axis

Use [`igxLayoutJustify`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlayoutdirective.html#justify)`="flex-start | center | flex-end"` to specify the elements position along the main axis according to your preferences.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonGroupAlignment, IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxLayoutDirective, IgxRippleDirective } from 'igniteui-angular/directives';


@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-layout-justify-content',
    styleUrls: ['./layout-justify-content.component.scss'],
    templateUrl: './layout-justify-content.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxLayoutDirective]
})

export class LayoutJustifyContentComponent {
    public alignment = ButtonGroupAlignment.horizontal;
    public rippleColor = 'grey';
    public justifyContent = 'start';
}
```
```html
<igx-buttongroup [alignment]="alignment">
  <button igxButton (click) = "justifyContent = 'start'" [igxRipple]="rippleColor" [selected]="true">Flex Start</button>
  <button igxButton (click) = "justifyContent = 'center'" [igxRipple]="rippleColor">Center</button>
  <button igxButton (click) = "justifyContent = 'end'" [igxRipple]="rippleColor">Flex End</button>
</igx-buttongroup>
@if (justifyContent === 'start') {
  <div>
    <div class="layout-box" igxLayout igxLayoutJustify="flex-start">
      <div class="layout-box__el">1</div>
      <div class="layout-box__el">2</div>
      <div class="layout-box__el">3</div>
    </div>
  </div>
}

@if (justifyContent === 'center') {
  <div>
    <div class="layout-box" igxLayout igxLayoutJustify="center">
      <div class="layout-box__el">1</div>
      <div class="layout-box__el">2</div>
      <div class="layout-box__el">3</div>
    </div>
  </div>
}

@if (justifyContent === 'end') {
  <div>
    <div class="layout-box" igxLayout igxLayoutJustify="flex-end">
      <div class="layout-box__el">1</div>
      <div class="layout-box__el">2</div>
      <div class="layout-box__el">3</div>
    </div>
  </div>
}
```
```scss
@use '../../../../variables' as *;

igx-buttongroup {
    display: block;
    margin: 24px 4px;
}

.layout-box {
    width: 100%;
    background: color($color: 'gray', $variant: 200);
    padding: 8px;
    border-radius: 6px;
}

.layout-box__el {
    height: 48px;
    padding: 10px 20px;
    margin: 8px;
    background: color($color: 'secondary');
    color: color($color: 'surface');
}
```


<div class="divider--half"></div>

### Position elements along the cross axis

Use [`igxLayoutItemAlign`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlayoutdirective.html#itemalign)`="flex-start | center | flex-end"` to specify the elements position along the cross axis according to your preferences.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonGroupAlignment, IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxFlexDirective, IgxLayoutDirective, IgxRippleDirective } from 'igniteui-angular/directives';


@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-layout-align-items',
    styleUrls: ['./layout-align-items.component.scss'],
    templateUrl: './layout-align-items.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxLayoutDirective, IgxFlexDirective]
})

export class LayoutAlignItemsComponent {
    public alignment = ButtonGroupAlignment.horizontal;
    public rippleColor = 'grey';
    public alignItems = 'flex-start';
}
```
```html
<igx-buttongroup [alignment]="alignment">
  <button igxButton (click) = "alignItems = 'flex-start'" [igxRipple]="rippleColor" [selected]="true">Flex Start</button>
  <button igxButton (click) = "alignItems = 'center'" [igxRipple]="rippleColor">Center</button>
  <button igxButton (click) = "alignItems = 'flex-end'" [igxRipple]="rippleColor">Flex End</button>
</igx-buttongroup>
@if (alignItems === 'flex-start') {
  <div>
    <div class="layout-box tall" igxLayout igxLayoutItemAlign="flex-start">
      <div class="layout-box__el" igxFlex>1</div>
      <div class="layout-box__el" igxFlex>2</div>
      <div class="layout-box__el" igxFlex>3</div>
    </div>
  </div>
}

@if (alignItems === 'center') {
  <div>
    <div class="layout-box tall" igxLayout igxLayoutItemAlign="center">
      <div class="layout-box__el" igxFlex>1</div>
      <div class="layout-box__el" igxFlex>2</div>
      <div class="layout-box__el" igxFlex>3</div>
    </div>
  </div>
}

@if (alignItems === 'flex-end') {
  <div>
    <div class="layout-box tall" igxLayout igxLayoutItemAlign="flex-end">
      <div class="layout-box__el" igxFlex>1</div>
      <div class="layout-box__el" igxFlex>2</div>
      <div class="layout-box__el" igxFlex>3</div>
    </div>
  </div>
}
```
```scss
@use '../../../../variables' as *;

igx-buttongroup {
    display: block;
    margin: 24px 4px;
}

.layout-box {
    width: 100%;
    background: color($color: 'gray', $variant: 200);
    padding: 8px;
    border-radius: 6px;

    &.tall {
        height: 300px;
    }
}

.layout-box__el {
    height: 48px;
    padding: 10px 20px;
    margin: 8px;
    background: color($color: 'secondary');
    color: color($color: 'surface');
}
```


<div class="divider--half"></div>

### You can also wrap elements

Use [`igxLayoutWrap`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlayoutdirective.html#wrap)`="wrap"`.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { IgxFlexDirective, IgxLayoutDirective } from 'igniteui-angular/directives';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-layout-wrap',
    styleUrls: ['./layout-wrap.component.scss'],
    templateUrl: './layout-wrap.component.html',
    imports: [IgxLayoutDirective, IgxFlexDirective]
})

export class LayoutWrapComponent {
}
```
```html
<div class="layout-box" igxLayout igxLayoutDir="row" igxLayoutWrap="wrap">
    <div class="layout-box__el wrap-row" igxFlex [igxFlexGrow]="0">1</div>
    <div class="layout-box__el wrap-row" igxFlex [igxFlexGrow]="0">2</div>
    <div class="layout-box__el wrap-row" igxFlex [igxFlexGrow]="0">3</div>
</div>
```
```scss
@use '../../../../variables' as *;

.wrap-row {
    width: calc(50% - 16px);
}

.layout-box {
    width: 100%;
    background: color($color: 'gray', $variant: 200);
    padding: 8px;
    border-radius: 6px;
    margin-top: 24px;
}

.layout-box__el {
    height: 48px;
    padding: 10px 20px;
    margin: 8px;
    background: color($color: 'secondary');
    color: color($color: 'surface');
}
```

>[!NOTE]
> The [`igxLayout`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlayoutdirective.html) directive affects the flow directions for that
container's **immediate** children.
<div class="divider--half"></div>

## Nesting

Use the [`igxFlex`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxflexdirective.html) directive for elements inside an [`igxLayout`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlayoutdirective.html) parent to control specific flexbox properties.
<div class="divider--half"></div>


## API References

<div class="divider--half"></div>

- [IgxLayoutDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlayoutdirective.html)
- [IgxFlexDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxflexdirective.html)
