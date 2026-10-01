---
title: Angular Overlay Styling | MIT license
description: A detailed walkthrough that explains how to properly apply and scope styles to elements that are displayed using the IgniteUI for Angular Overlay Service.
keywords: Ignite UI for Angular, Angular Overlay Service, Angular UI controls, Overlay Service, View Encapsulation Example, Sass scoped styles in Angular, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
license: MIT
llms:
  description: "IgxOverlayService is used to display content above the page content."
_tocName: Styling
---
# Overlay Styling

<div class="highlight">

[`IgxOverlayService`](/overlay) is used to display content above the page content. A lot of Ignite UI for Angular components use the overlay - [Drop Down](/drop-down), [Combo](/combo), [Date Picker](/date-picker) and more - so it is important to understand how the overlay displays content.
To display the content above other elements, the service moves it into a special outlet container (attached at the end of the document's body, by default). This behavior can affect styles [scoped to specific container](#scoped-overlay-styles).
</div>
<hr/>

## Styling Overlay Components

A theme emitted from the global stylesheet can affect content in any overlay outlet. For example, the following [Drop Down](/drop-down#styling) theme emits universal token overrides at the Sass root, where they are available to drop-down content attached to the document body:

```html
{/* overlay-styling.component.html */}
<igx-drop-down #customDropDown height="350px">
    <igx-drop-down-item *ngFor="let item of items" [value]="item.id">
        {{ item.name }}
    </igx-drop-down-item>
</igx-drop-down>
```

```scss
// styles.scss
@use "igniteui-angular/theming" as *;

$my-drop-down-theme: drop-down-theme(
  $background-color: #efefef
);

@include tokens($my-drop-down-theme);
```

Because these universal overrides are global, the drop-down content can consume them after the overlay service moves it to an outlet.

## Scoped Component Styles

A local theme can only affect overlay content that inherits from its container or matches its generated selectors. Content attached to the default outlet at the end of `body` is not a descendant of the component that opened it.

For example, the `igx-combo` item [styles](/combo#styling) use the drop-down theme. This component-local theme takes effect after the combo outlet is moved beneath the host:

```scss
// overlay-styling.component.scss

:host {
  @include tokens($my-drop-down-theme);
}
```

**Warning:** 
`::ng-deep` does not make tokens inherit into a detached outlet. Either emit the overlay theme globally or move the outlet beneath the themed container. If a special customization uses scoped mode and its generated selectors still cannot match the nested overlay content, `::ng-deep` may also be required after moving the outlet.

Use the [`IgxOverlaySettings.outlet`](mcp:get_api_reference?platform=angular&component=OverlaySettings&member=outlet) property to control where the overlay container is rendered.

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
The `overlay-theme` exposes a single property - `$background-color`, which affects the color of the backdrop when the overlay is set to `modal: true`.

### Global Styles

The easiest way to style the overlay modal is to include its theme in our app's global styles:

```scss
// styles.scss
$my-overlay-theme: overlay-theme(
  $background-color: rgba(0, 153, 255, 0.3)
);

@include tokens($my-overlay-theme);
```

Now **all** modal overlays will have a purple tint. Because this theme is emitted globally, Angular View Encapsulation and `::ng-deep` are not involved.

### Scoped Overlay Styles

To give an overlay a specific background only beneath a certain container, move its outlet under that container and scope the theme there. Custom outlets have some [limitations](/overlay#assumptions-and-limitations); to reduce overflow clipping, stacking, and viewport issues, use them in higher-level components:

```scss
// styles.scss
...
.purple {
  @include tokens($my-overlay-theme);
}
```

## API References
- [IgniteUI for Angular - Theme Library](/themes)
- `IgxOverlay Styles`
## Additional Resources

- [IgniteUI for Angular - Theme Library](/themes)
- [Overlay Main Topic](/overlay)
- [Position strategies](/overlay-position)
- [Scroll strategies](/overlay-scroll)
