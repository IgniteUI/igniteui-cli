---
title: Angular Overlay Service – Ignite UI for Angular | Infragistics | MIT license
_description: Provides a service which enables developers to position content above all other component/html content of the page. Comes with a robust API allowing for precise configuration of the service.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Overlay Service component
_license: MIT
_tocName: Overlay
---

# Overlay

<p class="highlight">
The overlay service provides an easy and quick way to dynamically render content in the foreground of an app. The content to be rendered, also the way it renders (e.g. placement, animations, scroll and click behaviors) are highly configurable and able to match all of the possible scenarios.
The overlay service is fully integrated in the toggle directive.
</p>
<div class="divider--half"></div>

## Angular Overlay Example


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

## Getting Started

First we need to import the [`IgxOverlayService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html) in the component and `inject` a reference to it in the component's constructor:

```typescript

import { Inject } from '@angular/core'
import { IgxOverlayService } from `igniteui-angular`;

...

export class MyOverlayComponent {
    constructor(
        @Inject(IgxOverlayService) private overlayService: IgxOverlayService
    ) {}
}

...
```

## Displaying Content

The overlay service can be used to dynamically display an `HTMLNode` or even an Angular Component by attaching it to the overlay DOM.

After a reference to the Overlay service is established, it can be used to dynamically show/hide content. For example, we can pass an Angular Component in the `attach` method. This will generate a unique ID, which we can pass to the `show` method to display the component. When displaying an Angular Component a second mandatory parameter `ViewContainerRef` should be passed in the `attach` method.

```typescript

// my-overlay-component.component.ts
import { MyDynamicComponent } from '../my-dynamic-component/my-dynamic-component.component';

@Component({...})
export class MyOverlayComponent {
    private _overlayId = ''; // The unique identifier assigned to the component by the Overlay service

    constructor(
        @Inject(IgxOverlayService) private overlayService: IgxOverlayService,
        private viewContainerRef: ViewContainerRef
    ) {}

    public showInOverlay() {
        if (!this._overlayId) {
            this._overlayId = this.overlayService.attach(MyDynamicComponent, this.viewContainerRef);
        }
        this.overlayService.show(this._overlayId);
    }
}
```

```HTML
<!-- my-overlay-component.component.html -->
<div class='content'>
...
    <button (click)="showInOverlay()">Show Overlay</button>
</div>

```

If we want to pass an already existing `ElementRef` from the page to the [`IgxOverlayService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html), we can do it as follows:

```HTML
<!-- my-overlay-component.component.html -->
<div class='content'>
    <button (click)="showInOverlay()">Show Overlay</button>
</div>
<div>
    <img #exampleImage width='200px' src='../assets/example.png' title='Click Me!'>
</div>
```

```typescript
// my-overlay-component.component.ts
import { Inject, ViewChild } from '@angular/core'

@Component({...})
export class MyOverlayComponent {
    private _overlayId = ''; // The unique identifier assigned to the component by the Overlay service

    @ViewChild('exampleImage', {read: ElementRef})
    private exampleImage: ElementRef;
    public showInOverlay() {
        if (!this._overlayId) {
            this._overlayId = this.overlayService.attach(this.exampleImage);
        }
        this.overlayService.show(this._overlayId);
    }
}
```

<div class="divider--half"></div>

The Overlay Service's [`attach()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html#attach) method has two overloads:

- `attach(element, settings?)`
- `attach(component, viewContainerRef, settings?)`

The first parameter in both overloads is mandatory and represents the content that will be shown in the overlay. There are a couple of different scenarios how the content can be passed:

- A component definition - When passing a component in as the first argument, the overlay service creates a new instance of that component and dynamically attaches its `ElementRef` to the `overlay` DOM. This method also accepts a second mandatory parameter `ViewContainerRef` which is a reference to the container where the created component's host view will be inserted.
- An `ElementRef` to an existing DOM element (illustrated in the sample above) - Any view that is already rendered on the page can be passed through the overlay service and be rendered in the overlay DOM.

In both cases the [`attach()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html#attach) method will:

- Get the reference to the passed view from Angular
- Detach the view from the DOM and leave an anchor in its place
- Re-attach the view to the overlay using the provided [`OverlaySettings`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html) or falling back to the default overlay ones

Calling then [`show(id)`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html#show) will play the open animation, if there is any, and will show the attached content. Calling [`hide(id)`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html#hide) will play close animation, if there is any, and will hide the attached content.

Finally calling [`detach(id)`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html#detach) method will re-attach the view back to its original location in the DOM. If a component was provided to the [`attach()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html#attach) method calling [`detach(id)`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html#detach) will destroy the created instance.

<div class="divider--half"></div>

## Attaching Components

In the below demo, we can pass the [IgxCard](card.md#angular-card-example) component through the Overlay Service's [`attach()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html#attach) method to generate an ID. Then we call the [`show()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html#show) method with the provided ID to dynamically attach the card to the DOM in a modal container.


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

## Overlay Settings

The [`attach()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html#attach) method also accepts an object of the [`OverlaySettings`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html) type, which configures the way the content is shown. If no such object is provided, the Overlay Service will use its default settings to render the passed content.

For example, if we want the content to be positioned relative to an element, we can pass a different [`target`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html#target) and [`positioningStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html#positioningStrategy) to the [`attach()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html#attach) method, e.g. [`ConnectedPositioningStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/connectedpositioningstrategy.html). In order to configure how the component is shown, we need to create an [`OverlaySettings`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html) object first:

```typescript
// my-overlay-component.component.ts
// import the ConnectedPositioningStategy class
import { ConnectedPositioningStrategy } from 'igniteui-angular/core';
// import { ConnectedPositioningStrategy } from '@infragistics/igniteui-angular'; for licensed package
...
export class MyOverlayComponent {

    @ViewChild(`myAnchorButton`)
    private myAnchorButton: ElementRef;
    private _overlayId = ''; // The unique identifier assigned to the component by the Overlay service

    public showInOverlay() {
        if (!this._overlayId) {
            this._overlayId = this.overlayService.attach(MyDynamicComponent, this.viewContainerRef, {
                target: this.myAnchorButton.nativeElement,
                positionStrategy: new ConnectedPositioningStrategy()
            });
        }
        this.overlayService.show(this._overlayId);
    }
}
```

```HTML
<!-- my-overlay-component.component.html -->
<div class='content'>
...
<button #myAnchorButton (click)="showInOverlay()">Show Overlay</button>
</div>
```

Clicking on the button will now show `MyDynamicComponent` positioned relative to the button.

## Preset Overlay Settings

The [`IgxOverlayService.createAbsolutePositionSettings()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html#createAbsolutePositionSettings) and [`IgxOverlayService.createRelativePositionSettings()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html#createRelativePositionSettings) methods provide an easy way to create an [`OverlaySettings`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html) based on a predefined settings sets.

The [`IgxOverlayService.createAbsolutePositionSettings()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html#createAbsolutePositionSettings) method creates non-modal [`OverlaySettings`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html) with [`GlobalPositionStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/globalpositionstrategy.html) or [`ContainerPositionStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/containerpositionstrategy.html) in case the `outlet` parameter is provided. The `AbsolutePosition` enumeration defines the possible positions to choose from: `Center`, `Top` or `Bottom`. The default position is `Center`.

```typescript
const globalOverlaySettings = IgxOverlayService.createAbsoluteOverlaySettings(AbsolutePosition.Top);
```

The [`IgxOverlayService.createRelativePositionSettings()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html#createRelativePositionSettings) method creates [`OverlaySettings`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html) with [`AutoPositionStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/autopositionstrategy.html), [`ConnectedPositioningStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/connectedpositioningstrategy.html) or [`ElasticPositionStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/elasticpositionstrategy.html). Accepts target, position and strategy. The `target` is the attaching point or element for the component to show. The `position` is a `RelativePosition` enumeration with the following options: `Above`, `Below`, `Before`, `After` and `Default`. The `Default` option positions the element below the target, left aligned. The position strategy can be set through the `RelativePositionStrategy` enumeration, which default value is `Auto`.

```typescript
const targetElement = this.myAnchorButton.nativeElement;
const connectedOverlaySettings = IgxOverlayService.createRelativeOverlaySettings(
        targetElement,
        RelativePosition.Above,
        RelativePositionStrategy.Connected);
```

### Demo


```typescript
import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { AbsolutePosition, IgxOverlayService, OverlaySettings, RelativePosition, RelativePositionStrategy } from 'igniteui-angular/core';
import { IButtonGroupEventArgs, IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { MyDynamicCardComponent } from '../overlay-dynamic-card/overlay-dynamic-card.component';
import { NgTemplateOutlet } from '@angular/common';

// tslint:disable:object-literal-sort-keys
@Component({
    selector: 'app-overlay-sample',
    styleUrls: ['./overlay-preset-settings-sample.component.scss'],
    templateUrl: './overlay-preset-settings-sample.component.html',
    providers: [IgxOverlayService],
    imports: [IgxIconComponent, NgTemplateOutlet, IgxButtonGroupComponent, IgxButtonDirective]
})
export class OverlayPresetSettingsSampleComponent implements OnInit, OnDestroy {
    private overlayService = inject<IgxOverlayService>(IgxOverlayService);
    private viewContainerRef = inject(ViewContainerRef);

    @ViewChild('anchor', { static: true })
    public anchor: ElementRef;

    @ViewChild('outlet', { static: true })
    public outlet: ElementRef;

    public positionStrategies = ['relative', 'absolute'];
    public positionStrategy = this.positionStrategies[0];

    public absStrategies = ['container', 'global'];

    public absPositions = [
        AbsolutePosition.Center,
        AbsolutePosition.Top,
        AbsolutePosition.Bottom
    ];

    public relStrategies = [
        RelativePositionStrategy.Auto,
        RelativePositionStrategy.Connected,
        RelativePositionStrategy.Elastic
    ];

    public relPositions = [
        RelativePosition.Default,
        RelativePosition.Above,
        RelativePosition.Below,
        RelativePosition.Before,
        RelativePosition.After
    ];

    public absPositionStrategy = this.absStrategies[0];
    public absPosition = AbsolutePosition.Center;
    public relPositionStrategy = RelativePositionStrategy.Auto;
    public relPosition = RelativePosition.Default;
    private _overlayId: string;
    private _overlaySettings: OverlaySettings;

    public ngOnInit(): void {
        this.setRelativeOverlaySettings();
    }

    public ngOnDestroy(): void {
        if (this._overlayId) {
            this.overlayService.detach(this._overlayId);
            delete this._overlayId;
        }
    }

    public showOverlay() {
        if (this._overlayId) {
            this.overlayService.detach(this._overlayId);
            delete this._overlayId;
        }
        this._overlayId = this.overlayService.attach(
            MyDynamicCardComponent,
            this.viewContainerRef,
            this._overlaySettings
        );
        this.overlayService.show(this._overlayId);
    }

    public selectPositionStrategy(event: IButtonGroupEventArgs) {
        this.positionStrategy = this.positionStrategies[event.index];
    }

    public selectAbsStrategy(event: IButtonGroupEventArgs) {
        this.absPositionStrategy = this.absStrategies[event.index];
        this.setAbsoluteOverlaySettings(this.absPositionStrategy);
    }

    public selectRelStrategy(event: IButtonGroupEventArgs) {
        this.relPositionStrategy = this.relStrategies[event.index];
        this.setRelativeOverlaySettings();
    }

    public selectAbsPosition(event: IButtonGroupEventArgs) {
        this.absPosition = this.absPositions[event.index];
        this.setAbsoluteOverlaySettings(this.absPositionStrategy);
    }

    public selectRelPosition(event: IButtonGroupEventArgs) {
        this.relPosition = this.relPositions[event.index];
        this.setRelativeOverlaySettings();
    }

    private setAbsoluteOverlaySettings(strategy: string) {
        switch (strategy) {
            case 'container':
                this._overlaySettings = IgxOverlayService.createAbsoluteOverlaySettings(
                    this.absPosition,
                    this.outlet
                );
                break;
            case 'global':
            default:
                this._overlaySettings = IgxOverlayService.createAbsoluteOverlaySettings(
                    this.absPosition
                );
                break;
        }
    }

    private setRelativeOverlaySettings() {
        this._overlaySettings = IgxOverlayService.createRelativeOverlaySettings(
            this.anchor.nativeElement,
            this.relPosition,
            this.relPositionStrategy
        );
    }
}
```
```html
<ng-template #header let-title="title">
  <header class="filter-group__header">
    <h1 class="ig-typography__overline">{{ title }}</h1>
  </header>
</ng-template>

<article
  #outlet
  class="outlet-group"
    [class.outlet-group--active]="
        positionStrategy === 'absolute' && absPositionStrategy === 'container'
    "
  >
  <section
    #anchor
    class="outlet-group__anchor"
    [class.outlet-group__anchor--active]="positionStrategy === 'relative'"
    >
    <igx-icon>anchor</igx-icon>
  </section>

  <header>
    <h1 class="ig-typography__h5 outlet-group__title">
      Outlet Container
    </h1>
    <h2 class="ig-typography__body-1 outlet-group__subtitle">
      The card will be positioned relative to the container or the anchor
      based on the selected <em><b>type and strategy</b></em
      >.
    </h2>
  </header>
</article>

<article class="filter-group">
  <ng-container
    *ngTemplateOutlet="header; context: { title: 'Type' }"
  ></ng-container>

  <igx-buttongroup (selected)="selectPositionStrategy($event)">
    @for (item of positionStrategies; track item; let i = $index) {
      <button
        igxButton
        [selected]="positionStrategy === positionStrategies[i]"
        >
        {{ item }}
      </button>
    }
  </igx-buttongroup>
</article>

@if (positionStrategy === 'absolute') {
  <article class="filter-group">
    <ng-container
      *ngTemplateOutlet="header; context: { title: 'Position' }"
    ></ng-container>
    <igx-buttongroup (selected)="selectAbsPosition($event)">
      @for (item of absPositions; track item; let i = $index) {
        <button
          igxButton
          [selected]="absPosition === absPositions[i]"
          >
          {{ item }}
        </button>
      }
    </igx-buttongroup>
  </article>
}

@if (positionStrategy === 'absolute') {
  <article class="fitler-group">
    <ng-container
      *ngTemplateOutlet="header; context: { title: 'Strategy' }"
    ></ng-container>
    <igx-buttongroup (selected)="selectAbsStrategy($event)">
      @for (item of absStrategies; track item; let i = $index) {
        <button
          igxButton
          [selected]="absPositionStrategy === absStrategies[i]"
          >
          {{ item }}
        </button>
      }
    </igx-buttongroup>
  </article>
}

@if (positionStrategy === 'relative') {
  <article class="filter-group">
    <ng-container
      *ngTemplateOutlet="header; context: { title: 'Position' }"
    ></ng-container>
    <igx-buttongroup (selected)="selectRelPosition($event)">
      @for (item of relPositions; track item; let i = $index) {
        <button
          igxButton
          [selected]="relPosition === relPositions[i]"
          >
          {{ item }}
        </button>
      }
    </igx-buttongroup>
  </article>
}

@if (positionStrategy === 'relative') {
  <article class="filter-group">
    <ng-container
      *ngTemplateOutlet="header; context: { title: 'Strategy' }"
    ></ng-container>
    <igx-buttongroup (selected)="selectRelStrategy($event)">
      @for (item of relStrategies; track item; let i = $index) {
        <button
          igxButton
          [selected]="relPositionStrategy === relStrategies[i]"
          >
          {{ item }}
        </button>
      }
    </igx-buttongroup>
  </article>
}

<button #buttonElement igxButton="contained" (click)="showOverlay()">
  Apply Settings
</button>
```
```scss
@use '../../../../variables' as *;

:host {
    position: relative;
    display: block;
    padding: rem(12px);
}

@include b(outlet-group) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: color($color: 'gray', $variant: 100);
    border: 2px dashed color($color: 'gray', $variant: 200);
    border-radius: rem(8px);
    padding: rem(12px);
    height: 376px;

    @include e(anchor) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: rem(80px);
        height: rem(80px);
        margin-bottom: rem(24px);
        border: 2px dashed color($color: 'gray', $variant: 300);
        border-radius: rem(8px);
        color: color($color: 'gray', $variant: 800);

        igx-icon {
            font-size: 64px;
            width: 64px;
            height: 64px;
        }
    }

    @include e(anchor, active) {
        border-color: color($color: 'primary');
    }

    @include e(title) {
        text-align: center;
        margin: 0;
        color: color($color: 'gray', $variant: 800);
    }

    @include e(subtitle) {
        text-align: center;
        margin: 0;
        color: color($color: 'gray', $variant: 600);
    }

    @include m(active) {
        border-color: color($color: 'primary');
    }
}

@include b(filter-group) {
    @include e(header) {

        h1 {
            font-size: rem(12px);
            margin-bottom: rem(8px);
        }
    }
}


[igxButton="contained"] {
    margin: rem(24px) 0;
}
```


<div class="divider--half"></div>

## Hiding the Overlay

The [`hide(id)`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html#hide) hides the overlay content. All of the elements rendered by the overlay service have a unique ID, assigned to them by the service. The [`attach()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html#attach) method returns the identifier of the rendered content. To hide the content this ID needs to be passed to the overlay's [`hide(id)`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html#hide) method. To hide all overlays [`hideAll()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html#hideAll) method could be called.

When rendered content is not needed anymore [`detach(id)`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html#detach) method should be called. This method removes the content from the overlay and, if applicable, re-attaches it to its original location in the DOM. [`detach(id)`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html#detach) method also accepts as mandatory parameter the ID generated from [`attach()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html#attach) method. To remove all the overlays [`detachAll()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html#detachAll) method could be called.

We can modify the previously defined overlay method to not only show but also hide the overlay element

```typescript
// my-overlay-component.component.ts
// add an import for the definion of ConnectedPositioningStategy class
import { ConnectedPositioningStrategy } from 'igniteui-angular/core';
// import { ConnectedPositioningStrategy } from '@infragistics/igniteui-angular'; for licensed package

@Component({...})
export class MyOverlayComponent implements OnDestroy {
    private _overlayId = ''; // The unique identifier assigned to the component by the Overlay service
    private _overlayShown = false; // Is the component rendered in the Overlay?

    @ViewChild(`myAnchorButton`)
    private myAnchorButton: ElementRef;

    public toggleOverlay() {
        if (!this._overlayShown) { // If the element is not visible, show it
            //  generate ID
            if (!this._overlayId) {
                this._overlayId = this.overlayService.attach(MyDynamicComponent, this.viewContainerRef, {
                    target: this.myAnchorButton.nativeElement,
                    positionStrategy: new ConnectedPositioningStrategy({
                        closeOnOutsideClick: false, // overlay will not close on outside clicks
                        modal: false // overlay content will not be rendered in a modal dialog
                    }) // The attach method returns an ID that can be used to reference the shown content
                });
            }

            this.overlayService.show(this._overlayId);
        } else {
            this.overlayService.hide(this._overlayId); // If element if visible, hide it
        }
        this._overlayShown = !this._overlayShown;
    }

    // finally detach overlay content
    public ngOnDestroy(): void {
        if (this._overlayId) {
            this.overlayService.detach(this._overlayId);
            delete this._overlayId;
        }
    }
}
```

```HTML
<!-- my-overlay-component.component.html -->
<div class='content'>
...
    <button #myAnchorButton (click)="toggleOverlay()">Toggle Overlay</button>
</div>
```

## Attaching Settings

Using the [`overlaySettings`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html) parameter of the [`attach()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html#attach) method, we can change how the content is shown - e.g. where the content is positioned, how the scroll should behave and if the container is modal or not


```typescript
import { Component, ElementRef, OnDestroy, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { ConnectedPositioningStrategy, IgxOverlayService } from 'igniteui-angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { CardSample1Component } from '../../../layouts/card/card-sample-1/card-sample-1.component';
// tslint:disable:object-literal-sort-keys
@Component({
    selector: 'app-overlay-sample',
    templateUrl: `./overlay-main-sample-2.component.html`,
    styleUrls: [`./overlay-main-sample-2.component.scss`],
    imports: [IgxButtonDirective]
})
export class OverlaySampleMain2Component implements OnDestroy {
    private overlayService = inject<IgxOverlayService>(IgxOverlayService);
    private viewContainerRef = inject(ViewContainerRef);


    @ViewChild('buttonElement', { static: true })
    private buttonElement: ElementRef;
    private _overlayId: string;
    private _cardHidden = true;

    public toggleOverlay() {
        if (this._cardHidden) {
            if (!this._overlayId) {
                const positionStrategy = new ConnectedPositioningStrategy();
                this._overlayId = this.overlayService.attach(CardSample1Component, this.viewContainerRef, {
                    target: this.buttonElement.nativeElement,
                    positionStrategy,
                    modal: false,
                    closeOnOutsideClick: false
                });
            }
            this.overlayService.show(this._overlayId);
        } else {
            this.overlayService.hide(this._overlayId);
        }
        this._cardHidden = !this._cardHidden;
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
    <button class="button" #buttonElement igxButton="contained" (click)="toggleOverlay()">
        Toggle Card
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


If **no** [`overlaySettings`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html) are configured, the toggled element gets the **default display settings**:

```typescript
defaultOverlaySettings = {
    positionStrategy: new GlobalPositionStrategy(),
    scrollStrategy: new NoOpScrollStrategy(),
    modal: true,
    closeOnOutsideClick: true,
    closeOnEscape: false
};
```

<div class="divider--half"></div>

## Integration with igxToggle

The [`IgxToggleDirective`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtoggledirective.html) is fully integrated with the [`IgxOverlayService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html). As such, the Toggle Directive's [`toggle()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtoggledirective.html#toggle) method allows for custom overlay settings to be passed when toggling the content.

An example of how to pass configuration settings to the toggle's method is shown below:

```html
<!-- In example.component.html -->
<div>
    <button igxToggle (click)="callToggle()">Click me!</button>
    <div [style.visibility]="collapsed ? 'hidden ' : 'visible'">
        This content is toggle-able!
    </div>
</div>
```

```typescript
// example.component.ts
@Component({
    selector: `example-component`,
    template: `example.component.html`
})
export class ExampleComponent {
    @ViewChild(IgxToggleDirective)
    private toggleDirective: IgxToggleDirective;

    public get collapsed(): boolean {
        return this.toggleDirective.collapsed;
    }

    public callToggle(): void {
        const overlaySettings: OverlaySettings = {
            positionStrategy: new AutoPositionStrategy(),
            scrollStrategy: new BlockScrollStrategy(),
            modal: true,
            closeOnOutsideClick: false
        }
        this.toggleDirective.toggle(overlaySettings)
    }
}
```

<div class="divider--half"></div>

## Assumptions and Limitations

If you show the overlay in an outlet, and if the outlet is a child of an element with transform, perspective or filter set in the CSS you won't be able to show the modal overlay. The reason for this is if one of the above mentioned CSS properties is set, the browser creates a new containing block and the overlay is limited to this containing block, as described in the [MDN position documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed).

## API References

- [IgxOverlayService](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html)
- [IgxOverlay Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-overlay-theme)

## Additional Resources

- [Position Strategies](overlay-position.md)
- [Scroll Strategies](overlay-scroll.md)
- [Styling Topic](overlay-styling.md)
