---
title: Angular Overlay Service - Scroll Strategies - MIT license 
_description: Explanation and example about the Overlay Service's IScrollStrategy interface and the classes that implement it.
_license: MIT
_tocName: Scrolling Strategies
---

# Scroll Strategies

The scroll strategy determines how the scrolling is handled in the provided `IgxOverlayService`. There are four scroll strategies:

1. **NoOperation** - does nothing.
2. **Block** - the event is canceled and the component does not scroll with the window.
3. **Close** - uses a tolerance and closes an expanded component upon scrolling if the tolerance is exceeded.
4. **Absolute** - scrolls everything.

## Usage

Every scroll strategy has the following methods:

- [`initialize`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/iscrollstrategy.html#initialize) - initializes the scroll strategy. It needs a reference of the document, the overlay service and the id of the component rendered
- [`attach`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/iscrollstrategy.html#attach) - attaches the scroll strategy to the specified element or to the document
- [`detach`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/iscrollstrategy.html#detach) - detaches the scroll strategy

```typescript
this.scrollStrategy.initialize(document, overlayService, id);
this.scrollStrategy.attach();
this.scrollStrategy.detach();
```

<div class="divider--half"></div>

### Getting Started

The scroll strategy is passed as a property in the [`overlaySettings`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html) parameter when the [`overlay.attach()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html#attach) method is called:

```typescript
// Initializing and using overlay settings
const overlaySettings: OverlaySettings = {
    positionStrategy: new GlobalPositionStrategy(),
    scrollStrategy: new AbsoluteScrollStrategy(), //Passes the scroll strategy
    modal: true,
    closeOnOutsideClick: true
}
const overlayId = overlay.attach(dummyElement, overlaySettings); 
```

<div class="divider"></div>

To change the scrolling strategy, used by the overlay, override the [`scrollStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/iscrollstrategy.html) property of the [`overlaySettings`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html) object passed to the overlay. If a strategy was already attached you should detach the previously generated ID:

```typescript
// overlaySettings is an existing object of type OverlaySettings
// to override the scroll strategy
const newOverlaySettings = Object.assing({}, overlaySettings);
Object.assing(newOverlaySettings, {
    scrollStrategy: new CloseScrollStrategy()
})
const overlayId = overlay.attach(dummyElement, newOverlaySettings);
overlay.show(overlayId);
```

<div class="divider--half"></div>

### Dependencies

To use the any of the scroll strategies, import it like this:

```typescript
import { NoOpScrollStrategy } from "./scroll/NoOpScrollStrategy";
```

### Scroll Strategies

The scroll strategies can be passed to the [`overlaySettings`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html) object to determine how the overlay should handle scrolling.
The demo below illustrates the difference between the separate [`scrollStrategies`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/iscrollstrategy.html):

```typescript
import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { AbsoluteScrollStrategy, BlockScrollStrategy, CloseScrollStrategy, ConnectedPositioningStrategy, IgxOverlayService, NoOpScrollStrategy } from 'igniteui-angular/core';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MyDynamicCardComponent } from '../overlay-dynamic-card/overlay-dynamic-card.component';
@Component({
    selector: 'app-overlay-sample',
    styleUrls: ['./overlay-scroll-sample-2.component.scss'],
    templateUrl: './overlay-scroll-sample-2.component.html',
    providers: [IgxOverlayService],
    imports: [IgxIconComponent, MyDynamicCardComponent]
})
export class OverlayScrollSample2Component implements OnInit, OnDestroy {
    private overlay = inject<IgxOverlayService>(IgxOverlayService);
    private viewContainerRef = inject(ViewContainerRef);

    @ViewChild('scrollDemo', { static: true })
    public scrollDemo: ElementRef;

    @ViewChild(MyDynamicCardComponent, { static: true })
    public overlayDemo: MyDynamicCardComponent;

    @ViewChild('mainContainer', { static: true })
    public mainContainer: ElementRef;

    public previewHidden = false;
    private destroy$ = new Subject<boolean>();
    private _overlayId: string;
    private _target: HTMLElement;

    constructor() {
        this.overlay.opening
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.previewHidden = true);

        this.overlay
            .closed
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.previewHidden = false);
    }

    public ngOnInit(): void {
        (this.mainContainer.nativeElement as HTMLElement).style.height = '450px';
        this.overlay.opening.subscribe(() => {
            this.previewHidden = true;
        });
        this.overlay.closing.subscribe(() => {
            this.previewHidden = false;
        });
    }

    public onClickScrollStrategy(strategy: string) {
        let scrollStrategy;
        const positionStrategy = new ConnectedPositioningStrategy();
        switch (strategy) {
            case ('absolute'):
                scrollStrategy = new AbsoluteScrollStrategy();
                this._target = this.scrollDemo.nativeElement.children[0];
                break;
            case ('block'):
                scrollStrategy = new BlockScrollStrategy();
                this._target = this.scrollDemo.nativeElement.children[1];
                break;
            case ('close'):
                scrollStrategy = new CloseScrollStrategy();
                this._target = this.scrollDemo.nativeElement.children[2];
                break;
            default:
                scrollStrategy = new NoOpScrollStrategy();
                this._target = this.scrollDemo.nativeElement.children[3];
        }
        if (this._overlayId) {
            this.overlay.detach(this._overlayId);
            delete this._overlayId;
        }
        this._overlayId = this.overlay.attach(MyDynamicCardComponent, this.viewContainerRef, {
            target: this._target,
            positionStrategy,
            scrollStrategy,
            modal: false,
            closeOnOutsideClick: true
        });
        this.overlay.show(this._overlayId);
    }

    public ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
        if (this._overlayId) {
            this.overlay.detach(this._overlayId);
            delete this._overlayId;
        }
    }
}
```
```html
<div class='overlay-sample' #mainContainer>
    <div class='container'>
        <div class='container__row'>
            <div class='section__row--wide'>
                <div class='section__container--wide' #scrollDemo>
                    <span (click)="onClickScrollStrategy('absolute')">
                        <igx-icon>notifications</igx-icon>
                        <p>Absolute</p>
                    </span>
                    <span (click)="onClickScrollStrategy('block')">
                        <igx-icon>notifications</igx-icon>
                        <p>Block</p>
                    </span>
                    <span (click)="onClickScrollStrategy('close')">
                        <igx-icon>notifications</igx-icon>
                        <p>Close</p>
                    </span>
                    <span (click)="onClickScrollStrategy('')">
                        <igx-icon>notifications</igx-icon>
                        <p>None</p>
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class='container' [hidden]="previewHidden">
        <app-overlay-dynamic-card-component></app-overlay-dynamic-card-component>
    </div>
</div>
```
```scss
body {
    overflow-y: scroll !important;
}

.overlay-sample {
    padding: 32px 0px 32px 32px;
    display: flex;
    flex-direction: row;
    height: 200px;
    overflow-y: scroll;
}

.container__row > div, .section__container--wide > span, .section__position-element > div {
    display: inline-block;
}

.section__row--wide, .container__row, .section__header {
    width: 100%;
}

.section__row > span {
    height: 48px;
}

.section__row--wide, .section__container--wide > span {
    height: 80px;
    max-width: 320px;
}

span:hover {
    border: 1px solid #e41c77;
    box-sizing: border-box;
    cursor: pointer;
}

.section__container--wide {
    align-content: flex-start;
    display: flex;;
}

.section__container--wide > span {
    text-align: center;
    vertical-align: middle;
    line-height: 12px;
    font-weight: 500;
    width: 80px;
    padding-top: 16px;

    p {
        margin-top: 0px;
    }
}

.section__position-element, .section__position-header {
    width: 144px;
    text-align: center;
}

.section__separator {
    width: 32px;
}

.container {
    width: 50%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.overlay__element {
    width: 288px;
    height: 144px;
}

.section__header {
    max-height: 96px;
    text-align: left;
    font-weight: 700;
    font-size: 16px;
}

.container__row {
    height: 100%;
    text-align: left;
    margin-top: 16px;
}

.section__position-element, .section__row--wide {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
}
```

<div class="divider--half"></div>

## Modal

The [`overlaySettings`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html) object also allows a boolean property ([`modal`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html#modal)) to be passed. This controls how the overlay will be displayed:

- If the [`modal`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html#modal) property is `false`, the element will be attached to the DOM foreground but everything will still be active and interactable - e.g. scrolling, clicking, etc.
- If the [`modal`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html#modal) property is `true`, the element will be attached to the DOM foreground and an overlay blocker will wrap behind it, stopping propagation of all events:


```typescript
import { Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { AbsoluteScrollStrategy, AutoPositionStrategy, ConnectedPositioningStrategy, ElasticPositionStrategy, GlobalPositionStrategy, HorizontalAlignment, IgxOverlayService, OverlaySettings, PositionSettings, VerticalAlignment } from 'igniteui-angular/core';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxCardComponent, IgxCardContentDirective, IgxCardHeaderComponent } from 'igniteui-angular/card';
import { FormsModule } from '@angular/forms';
// tslint:disable:object-literal-sort-keys
@Component({
    selector: 'app-overlay-sample',
    styleUrls: ['./overlay-scroll-sample-1.component.scss'],
    templateUrl: './overlay-scroll-sample-1.component.html',
    providers: [IgxOverlayService],
    imports: [IgxSwitchComponent, FormsModule, IgxIconComponent, IgxCardComponent, IgxCardHeaderComponent, IgxCardContentDirective]
})
export class OverlayScrollSample1Component implements OnDestroy {
    private overlay = inject<IgxOverlayService>(IgxOverlayService);

    @ViewChild('modalDemo', { static: true })
    public modalDemo: ElementRef;

    @ViewChild('overlayDemo', { static: true })
    public overlayDemo: ElementRef;

    @ViewChild('mainContainer', { static: true })
    public mainContainer: ElementRef;

    public modalValue = true;
    private _defaultPositionSettings: PositionSettings = {
        horizontalDirection: HorizontalAlignment.Center,
        horizontalStartPoint: HorizontalAlignment.Center,
        verticalDirection: VerticalAlignment.Middle,
        verticalStartPoint: VerticalAlignment.Middle
    };

    private _overlaySettings: OverlaySettings = {
        positionStrategy: new GlobalPositionStrategy(),
        scrollStrategy: new AbsoluteScrollStrategy(),
        modal: true,
        closeOnOutsideClick: true
    };

    private _overlayId: string;

    public onClickModal(event: Event, strategy: string) {
        event.stopPropagation();
        const positionSettings = Object.assign(Object.assign({}, this._defaultPositionSettings), {
            horizontalDirection: HorizontalAlignment.Right,
            horizontalStartPoint: HorizontalAlignment.Right,
            verticalDirection: VerticalAlignment.Bottom,
            verticalStartPoint: VerticalAlignment.Bottom
        });
        let positionStrategy;
        switch (strategy) {
            case ('auto'):
                positionStrategy = new AutoPositionStrategy(positionSettings);
                break;
            case ('elastic'):
                positionStrategy = new ElasticPositionStrategy(positionSettings);
                break;
            case ('connected'):
                positionStrategy = new ConnectedPositioningStrategy(positionSettings);
                break;
            default:
                positionStrategy = new GlobalPositionStrategy(Object.assign(positionSettings, {
                    horizontalDirection: HorizontalAlignment.Center,
                    verticalDirection: VerticalAlignment.Middle
                }));
        }
        const showSettings = Object.assign(Object.assign({}, this._overlaySettings), {
            target: this.modalDemo.nativeElement,
            modal: this.modalValue,
            positionStrategy
        });
        if (this._overlayId) {
            this.overlay.detach(this._overlayId);
            delete this._overlayId;
        }
        this._overlayId = this.overlay.attach(this.overlayDemo, showSettings);
        this.overlay.show(this._overlayId, showSettings);
    }

    public ngOnDestroy(): void {
        if (this._overlayId) {
            this.overlay.detach(this._overlayId);
            delete this._overlayId;
        }
    }
}
```
```html
<div class='overlay-sample' #mainContainer>
    <div class='container'>
        <div class="container__row">
            <igx-switch [(ngModel)]='modalValue'>
                Modal
            </igx-switch>
            <div class='section__row--wide'>
                <div class="section__container--wide" #modalDemo>
                    <span (click)="onClickModal($event, 'auto')">
                        <igx-icon>notifications</igx-icon>
                        <p>Auto</p>
                    </span>
                    <span (click)="onClickModal($event, 'elastic')">
                        <igx-icon>notifications</igx-icon>
                        <p>Elastic</p>
                    </span>
                    <span (click)="onClickModal($event, 'connected')">
                        <igx-icon>notifications</igx-icon>
                        <p>Connect</p>
                    </span>
                    <span (click)="onClickModal($event, 'global')">
                        <igx-icon>notifications</igx-icon>
                        <p>Global</p>
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class='container'>
        <div class="overlay__element" #overlayDemo>
            <igx-card elevated>
                <igx-card-header>
                    <h3 class="igx-card-header__title">Overlay</h3>
                </igx-card-header>
                <igx-card-content>
                    <p class="igx-card-content__text">Click on the positioning settings to dynamically re-attach this
                        element.</p>
                </igx-card-content>
            </igx-card>
        </div>
    </div>
</div>
```
```scss
.overlay-sample {
    padding: 32px 0px 32px 32px;
    overflow-y: scroll;
    display: flex;
    flex-direction: row;
    height: 1600px;
    margin-bottom: 500px;
}

.container__row > div, .section__container--wide > span, .section__position-element > div {
    display: inline-block;
}
.section__row--wide, .container__row, .section__header {
    width: 100%;
}

.section__row > span {
    height: 48px;
}
.section__row--wide, .section__container--wide > span {
    height: 80px;
    max-width: 320px;
}

span:hover {
    border: 1px solid #e41c77;
    box-sizing: border-box;
    cursor: pointer;
}

.section__container--wide {
    align-content: flex-start;
    display: flex;
}

.section__container--wide > span {
    text-align: center;
    vertical-align: middle;
    line-height: 12px;
    font-weight: 500;
    width: 80px;
    padding-top: 16px;

    p {
        margin-top: 0px;
    }
}

.section__position-element, .section__position-header {
    width: 144px;
    text-align: center;
}

.section__separator {
    width: 32px;
}
.container {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.overlay__element {
    width: 288px;
    height: 144px;
}

.section__header {
    max-height: 96px;
    text-align: left;
    font-weight: 700;
    font-size: 16px;
}

.container__row {
    height: 100%;
    text-align: left;
    margin-top: 16px;
}
.section__position-element, .section__row--wide {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
}

.igx-switch {
    padding: 16px;
}
```

<div class="divider--half"></div>

## API References

- [IScrollStrategy](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/iscrollstrategy.html)

## Additional Resources

- [Overlay Main Topic](overlay.md)
- [Position strategies](overlay-position.md)
- [Styling Topic](overlay-styling.md)
- [IgxOverlayService](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html)
- [IgxOverlay Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-overlay-theme)
