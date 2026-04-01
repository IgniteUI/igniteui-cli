---
title: Angular Overlay Styling | MIT license
_description: A detailed walkthrough that explains how to properly apply and scope styles to elements that are displayed using the IgniteUI for Angular Overlay Service.
_keywords: Ignite UI for Angular, Angular Overlay Service, Angular UI controls, Overlay Service, View Encapsulation Example, Sass scoped styles in Angular, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
_license: MIT
_tocName: Styling
---

# Overlay Styling

<p class="highlight">

[`IgxOverlayService`](overlay.md) is used to display content above the page content. A lot of Ignite UI for Angular components use the overlay - [Drop Down](drop-down.md), [Combo](combo.md), [Date Picker](date-picker.md) and more - so it is important to understand how the overlay displays content.
To display the content above other elements, the service moves it into a special outlet container (attached at the end of the document's body, by default). This behavior can affect styles [scoped to specific container](#scoped-overlay-styles).
</p>
<div class="divider--half"></div>

## Styling Overlay Components

In most cases [global](themes/sass/global-themes.md) theme styles are not affected by the overlay outlets. For example, let's take a look at a Drop Down, [styled](drop-down.md#styling) by the [`tokens`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#mixin-tokens) mixin:

```html
<!-- overlay-styling.component.html -->
<igx-drop-down #customDropDown height="350px">
    <igx-drop-down-item *ngFor="let item of items" [value]="item.id">
        {{ item.name }}
    </igx-drop-down-item>
</igx-drop-down>
```

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';

$my-drop-down-theme: drop-down-theme(
  $background-color: #efefef
);

:host {
  @include tokens($my-drop-down-theme);
}
```

The global styles are not generated under a scoped rule and are not affected by any encapsulation, and thus can match any element on the page, including `igx-drop-down-item` the service moved to the overlay outlet.

## Scoped Component Styles

When scoping styles for elements that are displayed in the overlay, we need to specify to the position of the overlay `outlet` in the DOM. CSS rules that are scoped require a specific hierarchical structure of the elements - we need to make sure the overlay content is displayed in the correct context of the styles we want to apply.

For example, let's take the `igx-combo` - its item [styles](combo.md#styling) use the `igx-drop-down` theme, because the combo defines its content inside of its own view.

```scss
// overlay-styling.component.scss

:host {
  @include tokens($my-drop-down-theme);
}
```

>[!NOTE]
>If the component is using an [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep` to apply the styles.

```scss
// overlay-styling.component.scss
:host {
  ::ng-deep { 
    @include tokens($my-drop-down-theme);
  }
}
```

The items in our combo's list **are not** descendants of our component `host` - they are currently being displayed in the default overlay outlet, at the end of the document's body. You can change this by using the [`outlet`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html#outlet) property in the `overlaySettings`. The `outlet` controls where the overlay container should be rendered.

Here, we can pass a reference to the element where we'd like our container to be:

```html
<igx-combo [data]="items" valueKey="name" displayKey="name" [overlaySettings]="{ outlet: element, modal: true }">
</igx-combo>
```

```typescript
export class OverlayStylingComponent {
  ...
  constructor(public element: ElementRef) {
  }
}
```

Now, the combo's list of items are properly rendered **inside** of our component's host, which means that our custom theme will take effect:


```typescript
import { Component, ElementRef, inject } from '@angular/core';
import { IgxOverlayService } from 'igniteui-angular/core';
import { IgxComboComponent } from 'igniteui-angular/combo';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-overlay-styling',
    styleUrls: ['overlay-styling.component.scss'],
    templateUrl: 'overlay-styling.component.html',
    imports: [IgxComboComponent, FormsModule]
})
export class OverlayStylingComponent {
    element = inject(ElementRef);
    private overlayService = inject(IgxOverlayService);

    public items = [{
            name: 'Option 1',
            id: 0
        }, {
            name: 'Option 2',
            id: 1
        }, {
            name: 'Option 3',
            id: 2
        }, {
            name: 'Option 4',
            id: 3
        }, {
            name: 'Option 5',
            id: 4
        }, {
            name: 'Option 6',
            id: 5
        }
    ];
}
```
```html
<div class="combo-wrapper">
  <igx-combo [data]="items" valueKey="name" displayKey="name" [ngModel]="[items[2].name]" width="410px" [overlaySettings]="{ outlet: element, modal: true }">
  </igx-combo>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$my-drop-down-theme: drop-down-theme(
  $background-color: #efefef
);

$my-overlay-theme: overlay-theme(
  $background-color: rgba(0, 153, 255, 0.3)
);

:host {
    @include tokens($my-overlay-theme);
    @include tokens($my-drop-down-theme);
}
```


## Styling The Overlay

Now that we've covered how `ViewEncapsulation` works along with the overlay's `outlet` property, we can take a look at how we can style the overlay's wrapper itself.
The [`overlay-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-overlay-theme) exposes a single property - `$background-color`, which affects the color of the backdrop when the overlay is set to `modal: true`.

### Global Styles

The easiest way to style the overlay modal is to include its theme in our app's global styles:

```scss
// styles.scss
$my-overlay-theme: overlay-theme(
  $background-color: rgba(0, 153, 255, 0.3)
);

:host {
  @include tokens($my-overlay-theme);
}
```

Now **all** modal overlays will have a purple tint to their background.

>[!NOTE]
>If the component is using an [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep` to apply the styles.

```scss
// overlay-styling.component.scss
:host {
  ::ng-deep { 
    @include tokens($my-overlay-theme);
  }
}
```

### Scoped Overlay Styles

If we want our overlay to have a specific background **only** under a certain component, we can [scope the theme](#scoped-overlay-styles).
When scoping a modal overlay, you need to move the overlay outlet, which has some [limitations](overlay.md#assumptions-and-limitations). In order to minimize the risks of overflow clipping, z-index and viewport issues, we recommend using outlets for modal overlays only in higher level components:

```scss
// styles.scss
...
.purple {
  @include tokens($my-overlay-theme);
}
```

## API References

- [IgniteUI for Angular - Theme Library](themes/index.md)
- [IgxOverlay Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-overlay-theme)

## Additional Resources

- [IgniteUI for Angular - Theme Library](themes/index.md)
- [Overlay Main Topic](overlay.md)
- [Position strategies](overlay-position.md)
- [Scroll strategies](overlay-scroll.md)
