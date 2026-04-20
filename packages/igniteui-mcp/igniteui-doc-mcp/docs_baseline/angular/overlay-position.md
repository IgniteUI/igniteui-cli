---
title: Angular Overlay Service - Positioning Strategies - MIT license 
_description: Explanation and example about the Overlay Service's IPositionStrategy interface and the classes that implement it.
_license: MIT
_tocName: Positioning Strategies
---

# Positioning Strategies

Position strategies determine where the content is displayed in the provided `IgxOverlayService`. By default, the content is positioned in the middle of the screen.

## Angular Positioning Strategies Example


```typescript
import { Component, OnDestroy, ViewContainerRef, inject } from '@angular/core';
import { IgxOverlayService } from 'igniteui-angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { MyDynamicCardComponent} from '../overlay-dynamic-card/overlay-dynamic-card.component';
@Component({
    selector: 'app-overlay-sample',
    templateUrl: `./overlay-main-sample-1.component.html`,
    styleUrls: [`./overlay-main-sample-1.component.scss`],
    imports: [IgxButtonDirective]
})
export class OverlaySampleMain1Component implements OnDestroy {
    private overlayService = inject<IgxOverlayService>(IgxOverlayService);
    private viewContainerRef = inject(ViewContainerRef);

    private _overlayId: string;

    public showOverlay() {
        if (!this._overlayId) {
            this._overlayId = this.overlayService.attach(MyDynamicCardComponent, this.viewContainerRef);
        }

        this.overlayService.show(this._overlayId);
    }

    public ngOnDestroy(): void {
        if (this._overlayId) {
            this.overlayService.detach(this._overlayId);
            delete this._overlayId;
        }
    }
}
```
```html
<div class="content">
    <button class="button" #buttonElement igxButton="contained" (click)="showOverlay()">
        Show Card
    </button>
</div>
```
```scss
.content {
    width: 100%;
    height: 100%;
}
.button {
    margin-top: 10%;
    margin-left: 45%;
    width: 160px;
}
```

<div class="divider--half"></div>

## Strategies Overview

There are five positioning strategies:

### Global

Positions the content, based on the directions passed in through [`positionSettings`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/positionsettings.html). These are Left/Center/Right for [`horizontalDirection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/positionsettings.html#horizontalDirection) and Top/Middle/Bottom for [`verticalDirection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/positionsettings.html#verticalDirection). Defaults are:

| horizontalDirection        | verticalDirection        |
| :------------------------- | :----------------------- |
| HorizontalAlignment.Center | VerticalAlignment.Middle |

<div class="divider"></div>

### Container

Positions the content as `GlobalPositionStrategy`. Instead of position related to the screen `ContainerPositionStrategy` positions the content related to the provided in `OverlaySettings` `outlet`. Defaults are:

| horizontalDirection        | verticalDirection        |
| :------------------------- | :----------------------- |
| HorizontalAlignment.Center | VerticalAlignment.Middle |

<div class="divider"></div>

### Connected

Positions the element based on the start point from [`overlaySettings`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html) and directions passed in through [`positionSettings`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/positionsettings.html). It is possible to either pass a start point (type [`Point`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/point.html)) or an `HTMLElement` as a positioning base. Defaults are:

| target          | horizontalDirection       |  verticalDirection       | horizontalStartPoint     | verticalStartPoint       |
| :-------------- | :------------------------ | :----------------------- | :----------------------- | :----------------------- |
| new Point(0, 0) | HorizontalAlignment.Right | VerticalAlignment.Bottom | HorizontalAlignment.Left | VerticalAlignment.Bottom |

<div class="divider"></div>

### Auto

Positions the element the same way as the **Connected** positioning strategy. It also calculates a different starting point in case the element goes partially out of the viewport. The **Auto** strategy will initially try to show the element like the **Connected** strategy does. If the element goes out of the viewport **Auto** will flip the starting point and the direction, i.e. if the direction is 'bottom', it will switch it to 'top' and so on. After flipped, if the element is still out of the viewport, **Auto** will use the initial directions and the starting point, to push the element into the viewport. For example - if the element goes out of the right side of the viewport, by 50px, **Auto** will push it by 50px to the left. Afterwards, if the element is partially out of the viewport, then its height or width were greater than the viewport's, **Auto** will align the element's left/top edge with the viewport's left/top edge. Defaults are:

| target          | horizontalDirection       |  verticalDirection       | horizontalStartPoint     | verticalStartPoint       |
| :-------------- | :------------------------ | :----------------------- | :----------------------- | :----------------------- |
| new Point(0, 0) | HorizontalAlignment.Right | VerticalAlignment.Bottom | HorizontalAlignment.Left | VerticalAlignment.Bottom |

<div class="divider"></div>

### Elastic

Positions the element like the **Connected** positioning strategy and re-sizes the element to fit inside the view port (re-calculating width and/or height) in case the element is partially out of view. [`minSize`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/positionsettings.html#minSize) can be passed in [`positionSettings`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/positionSettings.html) to prevent resizing if it would put the element's dimensions below a certain threshold. Defaults are:

| target          | horizontalDirection       |  verticalDirection       | horizontalStartPoint     | verticalStartPoint       | minSize                 |
| :-------------- | :------------------------ | :----------------------- | :----------------------- | :----------------------- | :---------------------- |
| new Point(0, 0) | HorizontalAlignment.Right | VerticalAlignment.Bottom | HorizontalAlignment.Left | VerticalAlignment.Bottom | { width: 0, height: 0 } |

<div class="divider"></div>

> [!NOTE]
> It won't try to resize the element if the strategy is using  HorizontalDirection = Center / VerticalDirection = Middle.
> [!NOTE]
> The overlay element **will be** resized, but the positioning strategy **does not** handle `overflow`. For example, if the element needs to have `overflow-y` when resized, incorporate the appropriate style to provide that.

## Usage

Position strategies allow you to display content in the overlay in various combinations. To start using different position strategies, you should first include the necessary dependencies for each strategy used like this:

```typescript
import {
    AutoPositionStrategy,
    ConnectedPositioningStrategy,
    ContainerPositionStrategy,
    ElasticPositionStrategy,
    GlobalPositionStrategy
} from 'igniteui-angular/core';
// import { AutoPositionStrategy, 
//    ConnectedPositioningStrategy, 
//    ContainerPositionStrategy,
//    ElasticPositionStrategy,
//    GlobalPositionStrategy } from '@infragistics/igniteui-angular'; for licensed package

```

Then specify the positioning strategy to be used by the overlay. The position strategy is passed in as a property in the [`overlaySettings`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html) parameter when the [`overlay.attach()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html#attach) method is called. In the example below we are changing the default `GlobalPositionStrategy` with `ConnectedPositionStrategy`:

```typescript
// Initialize and use overlay settings
const overlaySettings: OverlaySettings = {
    // Set the target where content should be shown
    target: this.buttonElement.nativeElement,
    // Pass in the positioning strategy
    positionStrategy: new ConnectedPositioningStrategy()
};
this._overlayId = this.overlayService.attach(MyDynamicCardComponent, this.viewContainerRef, overlaySettings); 
```

<div class="divider"></div>


```typescript
import { Component, ElementRef, OnDestroy, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { ConnectedPositioningStrategy, IgxOverlayService, OverlaySettings } from 'igniteui-angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { Subject } from 'rxjs';
import { MyDynamicCardComponent } from '../overlay-dynamic-card/overlay-dynamic-card.component';
@Component({
    selector: 'app-overlay-sample',
    styleUrls: ['./overlay-position-sample-1.component.scss'],
    templateUrl: './overlay-position-sample-1.component.html',
    providers: [IgxOverlayService],
    imports: [IgxButtonDirective]
})
export class OverlayPositionSample1Component implements OnDestroy {
    private overlayService = inject<IgxOverlayService>(IgxOverlayService);
    private viewContainerRef = inject(ViewContainerRef);

    @ViewChild('buttonElement', { static: true })
    private buttonElement: ElementRef;
    private _overlayId: string;

    public showOverlay() {
        if (!this._overlayId) {
            // Initialize and use overlay settings
            const overlaySettings: OverlaySettings = {
                // Set the target where content should be shown
                target: this.buttonElement.nativeElement,
                // Pass in the positioning strategy
                positionStrategy: new ConnectedPositioningStrategy()
            };
            this._overlayId = this.overlayService.attach(MyDynamicCardComponent, this.viewContainerRef, overlaySettings);
        }

        this.overlayService.show(this._overlayId);
    }

    public ngOnDestroy(): void {
        if (this._overlayId) {
            this.overlayService.detach(this._overlayId);
            delete this._overlayId;
        }
    }
}
```
```html
<div class="content">
    <button class="button" #buttonElement igxButton="contained" (click)="showOverlay()">
        Show Card
    </button>
</div>
```
```scss
.content {
    width: 100%;
    height: 100%;
}
.button {
    margin-top: 10%;
    margin-left: calc(50% - 80px);
    width: 160px;
}
```

<div class="divider--half"></div>

## Positioning Settings

Each positioning strategy has its own positioning settings. These settings determine how the content will be shown. In the example below, we are creating a new `PositionSettings` object. Using it we force the overlay to show the content starting from the top right point of the provided `target` - the `buttonElement`. The direction in which the content is shown is set to top-left. Then we create a new `ConnectedPositionStrategy` and pass it the `positionSettings`.

```typescript
const positionSettings: PositionSettings = {
    horizontalStartPoint: HorizontalAlignment.Right,
    verticalStartPoint: VerticalAlignment.Top,
    horizontalDirection: HorizontalAlignment.Left,
    verticalDirection: VerticalAlignment.Top
};

const strategy = new ConnectedPositioningStrategy(positionSettings);

// Initialize and use overlay settings
const overlaySettings: OverlaySettings = {
    target: buttonElement.nativeElement,
    // Pass in the positioning strategy
    positionStrategy: strategy
};
this._overlayId = this.overlayService.attach(MyDynamicCardComponent, this.viewContainerRef, overlaySettings);
```


```typescript
import { Component, ElementRef, OnDestroy, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { ConnectedPositioningStrategy, HorizontalAlignment, IgxOverlayService, OverlaySettings, PositionSettings, VerticalAlignment } from 'igniteui-angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { MyDynamicCardComponent } from '../overlay-dynamic-card/overlay-dynamic-card.component';
@Component({
    selector: 'app-overlay-sample',
    styleUrls: ['./overlay-position-sample-2.component.scss'],
    templateUrl: './overlay-position-sample-2.component.html',
    providers: [IgxOverlayService],
    imports: [IgxButtonDirective]
})
export class OverlayPositionSample2Component implements OnDestroy {
    private overlayService = inject<IgxOverlayService>(IgxOverlayService);
    private viewContainerRef = inject(ViewContainerRef);

    @ViewChild('buttonElement', { static: true })
    private buttonElement: ElementRef;
    private _overlayId: string;

    public showOverlay() {
        if (!this._overlayId) {
            const positionSettings: PositionSettings = {
                horizontalDirection: HorizontalAlignment.Left,
                verticalDirection: VerticalAlignment.Top,
                horizontalStartPoint: HorizontalAlignment.Right,
                verticalStartPoint: VerticalAlignment.Top
            };
            const strategy = new ConnectedPositioningStrategy(positionSettings);

            // Initialize and use overlay settings
            const overlaySettings: OverlaySettings = {
                target: this.buttonElement.nativeElement,
                // Pass in the positioning strategy
                positionStrategy: strategy
            };
            this._overlayId = this.overlayService.attach(MyDynamicCardComponent, this.viewContainerRef, overlaySettings);
        }

        this.overlayService.show(this._overlayId);
    }

    public ngOnDestroy(): void {
        if (this._overlayId) {
            this.overlayService.detach(this._overlayId);
            delete this._overlayId;
        }
    }
}
```
```html
<div class="content">
    <button class="button" #buttonElement igxButton="contained" (click)="showOverlay()">
        Show Card
    </button>
</div>
```
```scss
.content {
    width: 100%;
    height: 100%;
}
.button {
    margin-top: 270px;
    margin-left: calc(50% - 80px);
    width: 160px;
}
```

<div class="divider--half"></div>

### Changing Strategies

You can also change the positioning strategy, used by the overlay, by overriding the [`positionStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ipositionstrategy.html) property of the [`overlaySettings`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html) object that is passed to the overlay:

```typescript
const myPositionStrategy = new AutoPositionStrategy();
overlay.attach(element, { positionStrategy: myPositionStrategy }); 
```

```typescript
import { Component, ElementRef, OnDestroy, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { AutoPositionStrategy, IgxOverlayService } from 'igniteui-angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { MyDynamicCardComponent } from '../overlay-dynamic-card/overlay-dynamic-card.component';
@Component({
    selector: 'app-overlay-sample',
    styleUrls: ['./overlay-position-sample-3.component.scss'],
    templateUrl: './overlay-position-sample-3.component.html',
    providers: [IgxOverlayService],
    imports: [IgxButtonDirective]
})
export class OverlayPositionSample3Component implements OnDestroy {
    private overlayService = inject<IgxOverlayService>(IgxOverlayService);
    private viewContainerRef = inject(ViewContainerRef);

    @ViewChild('buttonElement', { static: true })
    private buttonElement: ElementRef;
    private _overlayId: string;

    public showOverlay() {
        if (!this._overlayId) {
            const myPositionStrategy = new AutoPositionStrategy();
            this._overlayId = this.overlayService.attach(
                MyDynamicCardComponent, this.viewContainerRef, {
                    target: this.buttonElement.nativeElement,
                    positionStrategy: myPositionStrategy
                });
        }

        this.overlayService.show(this._overlayId);
    }

    public ngOnDestroy(): void {
        if (this._overlayId) {
            this.overlayService.detach(this._overlayId);
            delete this._overlayId;
        }
    }
}
```
```html
<div class="content">
    <button class="button" #buttonElement igxButton="contained" (click)="showOverlay()">
        Show Card
    </button>
</div>
```
```scss
.content {
    width: 100%;
    height: 100%;
}
.button {
    margin-top: 270px;
    margin-left: calc(50% - 80px);
    width: 160px;
}
```

<div class="divider--half"></div>

### Changing Settings

To change the position settings of an already existing strategy, override any of the settings in it. If a strategy was already attached you should detach the previously generated ID:

```typescript
// overlaySettings is an existing object of type OverlaySettings
// overlaySettings.positionStrategy is an existing PositionStrategy with settings of type PositionSettings
Object.assign(overlaySettings.positionStrategy.settings, {
    horizontalStartPoint: HorizontalAlignment.Left,
    horizontalDirection: HorizontalAlignment.Left
});
overlaySettings.target = dummyHTMLElement;
// the element will now start to the left of the target (dummyHTMLElement)
// and will align itself to the left
const overlayId = overlay.attach(overlayId, overlaySettings);
overlay.show(overlayId);
```

### Offsetting Content

The `setOffset` method enables precise adjustment of content positioning along the corresponding axis by a specified amount. Additionally, it supports an optional `offsetMode` parameter, providing control over how offset values are applied.

```typescript
// deltaX and deltaY determine the amount by which the content will be offset.
// Using OffsetMode.Add to add the values (default behavior)
const deltaX: number = 30;
const deltaY: number = 15;
overlay.setOffset(this._overlayId, deltaX, deltaY, OffsetMode.Add);
```

```typescript
// deltaX and deltaY determine the exact position to set the content to, relative to its target element.
// Using OffsetMode.Set to set the offset to specific values
const deltaX: number = 30;
const deltaY: number = 15;
overlay.setOffset(this._overlayId, deltaX, deltaY, OffsetMode.Set);
```

## API References

- [IPositionStrategy](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ipositionstrategy.html)

## Additional Resources

- [Overlay Main Topic](overlay.md)
- [Scroll Strategies](overlay-scroll.md)
- [Styling Topic](overlay-styling.md)
- [IgxOverlayService](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html)
- [IgxOverlay Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-overlay-theme)
