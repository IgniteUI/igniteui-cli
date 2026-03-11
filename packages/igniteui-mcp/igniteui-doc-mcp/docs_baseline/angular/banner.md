---
title: Angular Banner Component – Ignite UI for Angular | Infragistics | MIT license
_description: Easily integrate a short, non-intrusive message (along with optional actions) using Ignite UI for Angular Banner component.
_keywords: Angular Banner component, Angular Banner control, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Angular UI Components
_license: MIT
_tocName: Banner
---

# Angular Banner Component Overview

<p class="highlight">Angular Banner Component provides a way to easily display a prominent message to your application's users in a way that is less transient than a snackbar and less obtrusive than a dialog. The Banner can also be configured to display custom action buttons and an icon.</p>

## Angular Banner Example

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxBannerComponent } from 'igniteui-angular/banner';
import { IgxNavbarComponent } from 'igniteui-angular/navbar';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxCardComponent } from 'igniteui-angular/card';

@Component({
    selector: 'app-banner-sample-1',
    styleUrls: ['../banner-samples.scss'],
    templateUrl: 'banner-sample-1.component.html',
    imports: [IgxNavbarComponent, IgxIconComponent, IgxBannerComponent, IgxCardComponent]
})

export class BannerSample1Component implements OnInit {
    @ViewChild(IgxBannerComponent, { static: true }) public banner: IgxBannerComponent;
    public contentWidth = '384px';
    public imageUrls = ['assets/images/card/media/the_red_ice_forest.jpg',
        'assets/images/card/media/yosemite.jpg'];
    public ngOnInit() {
        this.banner.open();
    }
}
```
```html
<div class="gallery__wrapper">
    <div class="gallery__content">
        <igx-navbar title="Gallery">
            <igx-icon (click)="connectionBanner.open()">refresh</igx-icon>
        </igx-navbar>
        <igx-banner class="offline-banner" #connectionBanner>
            You are currently offline.
        </igx-banner>
        <igx-card class="gallery__item" elevated>
            <div>
                <img [src]="imageUrls[0]">
            </div>
        </igx-card>
        <igx-card class="gallery__item" elevated>
            <div>
                <img [src]="imageUrls[1]">
            </div>
        </igx-card>
    </div>
</div>
```

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Banner

To get started with the Ignite UI for Angular Banner component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxBannerModule` in your **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxBannerModule } from 'igniteui-angular/banner';
// import { IgxBannerModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxBannerModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxBannerComponent` as a standalone dependency, or use the [`IGX_BANNER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/banner/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

...
import { IGX_BANNER_DIRECTIVES } from 'igniteui-angular/banner';
// import { IGX_BANNER_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-banner>
        You are currently offline.
    </igx-banner>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_BANNER_DIRECTIVES]
    /* or imports: [IgxBannerComponent] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Banner module or directives imported, you can start with a basic configuration of the `igx-banner` component.

## Using the Angular Banner Component

### Show Banner

In order to display the banner component, use its [`open()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbannercomponent.html#open) method and call it on a button click. The banner appears relative to where the element was inserted in the page template, moving all other content. It typically shows some non-intrusive content that requires minimal user interaction to be dismissed.

```html
<!--banner.component.html-->

<igx-icon (click)="connectionBanner.open()">refresh</igx-icon>
...
<igx-banner #connectionBanner>
    You are currently offline.
</igx-banner>

```

> [!NOTE]
> The `IgxBannerModule` includes a default banner button `Dismiss`, which closes the banner.

## Examples

The [`IgxBannerComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbannercomponent.html) allows templating of its content while still sticking as closely as possible to the material design banner guidelines.

### Changing the banner message

Configuring the message displayed in the banner is easy - just change the content you are passing to the `igx-banner` tag. The text will show up in the specified banner area and the banner will use its default template when displaying it. Below, we will change the content of our sample banner to be a bit more descriptive:

```html
<!--banner.component.html-->
<igx-banner #connectionBanner>
    You have lost connection to the internet. This app is offline.
</igx-banner>
```

### Adding an icon

An [`igx-icon`](icon.md) can be displayed in the banner by passing it to the banner's content. The icon will always be positioned at the beginning of the banner message.

> [!NOTE]
> If several `igx-icon` elements are inserted as direct descendants of the banner, the banner will try to position all of them at the beginning. It is strongly advised to pass only one `igx-icon` directly to the banner.

To pass an `igx-icon` to you banner, simply insert it in the banner's content:

```html
<!--banner.component.html-->
<igx-banner #connectionBanner>
    <igx-icon>signal_wifi_off</igx-icon>
    You have lost connection to the internet. This app is offline.
</igx-banner>
```

If you want to use an `igx-icon` in your banner message, wrap it in a `span` tag:

```html
<!--banner.component.html-->
<igx-banner #connectionBanner>
    You have lost connection to the internet. This app is offline.
    <span>
        <igx-icon>signal_wifi_off</igx-icon>
    </span>
</igx-banner>
```

### Changing the banner button

The `IgxBannerModule` exposes a directive for templating the banner buttons - [`IgxBannerActionsDirective`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbanneractionsdirective.html). This directive allows you to override the default banner button (`Dismiss`) and add user-defined custom actions.

```html
<!--banner.component.html-->
<igx-banner #connectionBanner>
    <igx-icon>signal_wifi_off</igx-icon>
    You have lost connection to the internet. This app is offline.
    <igx-banner-actions>
        <button igxButton igxRipple (click)="connectionBanner.toggle()">Toggle Banner</button>
    </igx-banner-actions>
</igx-banner>
```


```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxBannerActionsDirective, IgxBannerComponent } from 'igniteui-angular/banner';
import { IgxNavbarComponent } from 'igniteui-angular/navbar';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxCardComponent } from 'igniteui-angular/card';

@Component({
    selector: 'app-banner-sample-2',
    styleUrls: ['../banner-samples.scss'],
    templateUrl: 'banner-sample-2.component.html',
    imports: [IgxNavbarComponent, IgxIconComponent, IgxBannerComponent, IgxBannerActionsDirective, IgxButtonDirective, IgxRippleDirective, IgxCardComponent]
})

export class BannerSample2Component implements OnInit {
    @ViewChild(IgxBannerComponent, { static: true }) public banner: IgxBannerComponent;
    public contentWidth = '384px';
    public imageUrls = ['assets/images/card/media/the_red_ice_forest.jpg',
        'assets/images/card/media/yosemite.jpg'];

    public ngOnInit() {
        this.banner.open();
    }
}
```
```html
<div class="gallery__wrapper">
    <div class="gallery__content">
        <igx-navbar title="Gallery">
            <igx-icon (click)="connectionBanner.open()">refresh</igx-icon>
        </igx-navbar>
        <igx-banner class="offline-banner" #connectionBanner>
            <igx-icon>signal_wifi_off</igx-icon>
            You have lost connection to the internet. This app is offline.
            <igx-banner-actions>
                <button igxButton igxRipple (click)="connectionBanner.toggle()">Toggle Banner</button>
            </igx-banner-actions>
        </igx-banner>

        <igx-card class="gallery__item" elevated>
            <div>
                <img [src]="imageUrls[0]">
            </div>
        </igx-card>
        <igx-card class="gallery__item" elevated>
            <div>
                <img [src]="imageUrls[1]">
            </div>
        </igx-card>
    </div>
</div>
```


### Applying custom animations

The banner component comes with the [`animationSettings`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbannercomponent.html#animationSettings) property that allows applying custom opening and closing animations. Developers can choose between self-defined animations, and those from our [`Animation suite`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/animations). The default ones, used by the banner, are `growVerIn` for entering and `growVerOut` for exiting.

Let's change the animations that our banner uses, so that it slides in and out:

```html
<!--banner.component.html-->
<igx-banner #connectionBanner [animationSettings]="animationSettings">
    ...
</igx-banner>
```

```typescript
// banner.component.ts
import { IgxBannerComponent } from 'igniteui-angular/banner';
import { slideInLeft, slideOutRight } from 'igniteui-angular/animations'
// import { IgxBannerComponent, slideInLeft, slideOutRight } from '@infragistics/igniteui-angular'; for licensed package
...
export class MyBannerComponent {
    ...
    public animationSettings = {
        openAnimation: slideInLeft,
        closeAnimation: slideOutRight
    }
    ...
}
```


```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxBannerActionsDirective, IgxBannerComponent } from 'igniteui-angular/banner';
import { IgxNavbarComponent } from 'igniteui-angular/navbar';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxCardComponent } from 'igniteui-angular/card';
import { slideInLeft, slideOutRight } from 'igniteui-angular/animations';

@Component({
    selector: 'app-banner-sample-3',
    styleUrls: ['../banner-samples.scss'],
    templateUrl: 'banner-sample-3.component.html',
    imports: [IgxNavbarComponent, IgxIconComponent, IgxBannerComponent, IgxBannerActionsDirective, IgxButtonDirective, IgxRippleDirective, IgxCardComponent]
})

export class BannerSample3Component implements OnInit {
    @ViewChild(IgxBannerComponent, { static: true }) public banner: IgxBannerComponent;
    public contentWidth = '384px';
    public imageUrls = ['assets/images/card/media/the_red_ice_forest.jpg',
        'assets/images/card/media/yosemite.jpg'];
    public animationSettings = {
        closeAnimation: slideOutRight,
        openAnimation: slideInLeft
    };

    public ngOnInit() {
        this.banner.open();
    }
}
```
```html
<div class="gallery__wrapper">
    <div class="gallery__content">
        <igx-navbar title="Gallery">
            <igx-icon (click)="connectionBanner.open()">refresh</igx-icon>
        </igx-navbar>
        <igx-banner class="offline-banner" #connectionBanner [animationSettings]="animationSettings">
            <igx-icon>signal_wifi_off</igx-icon>
            You have lost connection to the internet. This app is offline.
            <igx-banner-actions>
                    <button igxButton igxRipple (click)="connectionBanner.close()">Close</button>
            </igx-banner-actions>
        </igx-banner>
        <igx-card class="gallery__item" elevated>
            <div>
                <img [src]="imageUrls[0]">
            </div>
        </igx-card>
        <igx-card class="gallery__item" elevated>
            <div>
                <img [src]="imageUrls[1]">
            </div>
        </igx-card>
    </div>
</div>
```


### Binding to events

The banner component emits events when changing its state - [`opening`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbannercomponent.html#opening) and [`opened`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbannercomponent.html#opened) are called when the banner is shown (before and after, resp.), while [`closing`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbannercomponent.html#closing) and [`closed`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbannercomponent.html#closed) are emitted when the banner is closed. The _ing_ events (`opening`, `closing`) are cancelable - they use the `ICancelEventArgs` interface and the emitted object has a `cancel` property. If the `cancel` property is set to true, the corresponding end action and event will not be triggered - e.g. if we cancel `opening`, the banner's `open` method will not finish and the banner will not be shown.

To cancel an event, bind it to the emitted object and set its `cancel` property to `true`.

```html
<!--banner.component.html-->
    <igx-banner #connectionBanner (opening)="handleOpen($event)">
        ...
    </igx-banner>
```

```typescript
// banner.component.ts
...
export class MyBannerComponent {
    ...
    public handleOpen(event) {
        event.cancel = true;
    }
}
```

> [!NOTE]
> If the changes above are applied, the banner will never open, as the opening event is always cancelled.

## Advanced Example

Let's create a banner with two custom buttons - one for dismissing the notification and one for turning on the connection. We can pass custom action handlers using the `igx-banner-actions` selector:

```html
<!--banner.component.html-->
<igx-banner class="offline-banner" #connectionBanner [animationSettings]="animationSettings">
    <igx-icon>signal_wifi_off</igx-icon>
        You have lost connection to the internet. This app is offline.
    <igx-banner-actions>
        <button igxButton igxRipple (click)="connectionBanner.close()">Continue Offline</button>
        <button igxButton igxRipple (click)="wifiState = true">Turn On Wifi</button>
    </igx-banner-actions>
</igx-banner>
```

> [!NOTE]
> According to Google's [`Material Design`](https://material.io/design/components/banners.html#anatomy) guidelines, a banner should have a maximum of 2 buttons present. The `IgxBannerComponent` does not explicitly limit the number of elements under the `igx-banner-actions` tag, but it is strongly recommended to use up to 2 if you want to adhere to the material design guidelines.

The dismiss option (`'Continue Offline'`) doesn't need any further logic, so it can just call the `close()` method. The confirm action (`'Turn On Wifi'`), however, requires some additional logic, so we have to define it in the component. Then, we will create `onNetworkStateChange` Observable and subscribe to it. The last step is to call the `refreshBanner()` method on each change, which will toggle the banner depending on the `wifiState`.

The banner will also have a WiFi icon in the navbar. As the subscription fires on any change of the `wifiState`, the icon will not only toggle the banner, but change according to the state of the connection:

```html
<!--banner.component.html-->
<igx-navbar title="Gallery">
    <igx-icon (click)="wifiState = !wifiState">
        {{ wifiState ? 'signal_wifi_4_bar' : 'signal_wifi_off' }}
    </igx-icon>
</igx-navbar>
```

Finally, we will add a `toast`, displaying a message about the WiFi state. The results of the templated banner can be seen in the demo below:


```typescript
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IgxBannerActionsDirective, IgxBannerComponent } from 'igniteui-angular/banner';
import { IgxToastComponent } from 'igniteui-angular/toast';
import { VerticalAlignment } from 'igniteui-angular/core';
import { IgxNavbarComponent } from 'igniteui-angular/navbar';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxCardComponent } from 'igniteui-angular/card';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-banner-advanced-sample',
    styleUrls: ['../banner-samples.scss'],
    templateUrl: 'banner-advanced-sample.component.html',
    imports: [IgxNavbarComponent, IgxIconComponent, IgxBannerComponent, IgxBannerActionsDirective, IgxButtonDirective, IgxRippleDirective, IgxCardComponent, IgxToastComponent]
})

export class BannerAdvancedSampleComponent implements OnInit, OnDestroy {

    @ViewChild(IgxBannerComponent, { static: true }) public banner: IgxBannerComponent;
    @ViewChild(IgxToastComponent, { static: true }) public eventToast: IgxToastComponent;
    public contentWidth = '384px';
    public imageUrls = ['assets/images/card/media/the_red_ice_forest.jpg',
        'assets/images/card/media/yosemite.jpg'];
    public onNetworkStateChange = new Subject<void>();

    private _wifiState = false;
    public get wifiState(): boolean {
        return this._wifiState;
    }
    public set wifiState(v: boolean) {
        this._wifiState = v;
        this.onNetworkStateChange.next();
    }

    public showToast() {
        this.eventToast.close();
        this.eventToast.positionSettings.verticalDirection = VerticalAlignment.Middle;
        this.eventToast.open(`Wifi is now ${this.wifiState ? 'on' : 'off'}`);
    }

    public ngOnInit() {
        this.banner.open();
        this.onNetworkStateChange.subscribe(() => this.refreshBanner());
    }

    public ngOnDestroy(): void {
        this.onNetworkStateChange.complete();
    }

    public refreshBanner() {
        if (!this.wifiState) {
            this.banner.open();
        } else {
            if (!this.banner.collapsed) {
                this.banner.close();
            }
        }
        this.showToast();
    }
}
```
```html
<div class="gallery__wrapper">
    <div class="gallery__content">
        <igx-navbar title="Gallery">
            <igx-icon (click)="wifiState = !wifiState">{{ wifiState ? 'signal_wifi_4_bar' : 'signal_wifi_off' }}</igx-icon>
        </igx-navbar>
        <igx-banner class="offline-banner" #connectionBanner>
            <igx-icon>signal_wifi_off</igx-icon>
            You have lost connection to the internet. This app is offline.
            <igx-banner-actions>
                <button igxButton igxRipple (click)="connectionBanner.close()">Continue Offline</button>
                <button igxButton igxRipple (click)="wifiState = true">Turn On Wifi</button>
            </igx-banner-actions>
        </igx-banner>
        <igx-card class="gallery__item" elevated>
            <div>
                <img [src]="imageUrls[0]">
            </div>
        </igx-card>
        <igx-card class="gallery__item" elevated>
            <div>
                <img [src]="imageUrls[1]">
            </div>
        </igx-card>
        <igx-toast #eventToast></igx-toast>
    </div>
</div>
```


## Styling

First, in order to use the functions exposed by the theme engine, we need to import the index file in our style file:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`banner-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-banner-theme) and specifying just the `$banner-background`. Based on this value, the `$banner-message-color` and `$banner-illustration-color` are automatically set to black or white, depending on which provides better contrast with the background.

```scss
$custom-banner-theme: banner-theme(
  $banner-background: #011627,
);
```

>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-palette) and [`color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-color) functions. Please refer to [`Palettes`](/themes/sass/palettes.md) topic for detailed guidance on how to use them.

The last step is to pass the custom banner theme:

```scss
@include css-vars($custom-banner-theme);
```

```typescript
import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxBannerActionsDirective, IgxBannerComponent } from 'igniteui-angular/banner';
import { IgxToastComponent } from 'igniteui-angular/toast';
import { VerticalAlignment } from 'igniteui-angular/core';
import { IgxNavbarComponent } from 'igniteui-angular/navbar';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxCardComponent } from 'igniteui-angular/card';
import { slideInLeft, slideOutRight } from 'igniteui-angular/animations';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-banner-styling',
    styleUrls: ['banner-styling.component.scss', '../banner-samples.scss'],
    templateUrl: 'banner-styling.component.html',
    encapsulation: ViewEncapsulation.None,
    imports: [IgxNavbarComponent, IgxIconComponent, IgxBannerComponent, IgxBannerActionsDirective, IgxButtonDirective, IgxRippleDirective, IgxCardComponent, IgxToastComponent]
})

export class BannerStylingComponent implements OnInit, OnDestroy {
    @ViewChild(IgxBannerComponent, { static: true }) public banner: IgxBannerComponent;
    @ViewChild(IgxToastComponent, { static: true }) public eventToast: IgxToastComponent;
    public contentWidth = '384px';
    public imageUrls = ['assets/images/card/media/the_red_ice_forest.jpg',
        'assets/images/card/media/yosemite.jpg'];
    public animationSettings = {
        closeAnimation: slideOutRight,
        openAnimation: slideInLeft
    };
    public onNetworkStateChange = new Subject<void>();
    private _wifiState = false;

    public get wifiState(): boolean {
        return this._wifiState;
    }
    public set wifiState(v: boolean) {
        this._wifiState = v;
        this.onNetworkStateChange.next();
    }

    public showToast() {
        this.eventToast.close();
        this.eventToast.positionSettings.verticalDirection = VerticalAlignment.Middle;
        this.eventToast.open(`Wifi is now ${this.wifiState ? 'on' : 'off'}`);
    }

    public ngOnInit() {
        this.banner.open();
        this.onNetworkStateChange.subscribe(() => this.refreshBanner());
    }

    public ngOnDestroy(): void {
        this.onNetworkStateChange.complete();
    }

    public refreshBanner() {
        if (!this.wifiState) {
            this.banner.open();
        } else {
            this.banner.close();
        }
        this.showToast();
    }
}
```
```html
<div class="gallery__wrapper">
    <div class="gallery__content">
        <igx-navbar title="Gallery">
            <igx-icon (click)="wifiState = !wifiState">{{ wifiState ? 'signal_wifi_4_bar' : 'signal_wifi_off'}}
            </igx-icon>
        </igx-navbar>
        <igx-banner class="offline-banner" #connectionBanner [animationSettings]="animationSettings">
            <igx-icon>signal_wifi_off</igx-icon>
            You have lost connection to the internet. This app is offline.
            <igx-banner-actions>
                <button igxButton igxRipple (click)="connectionBanner.close()">Continue Offline</button>
                <button igxButton igxRipple (click)="wifiState = true">Turn On Wifi</button>
            </igx-banner-actions>
        </igx-banner>
        <igx-card class="gallery__item" elevated>
            <div>
                <img [src]="imageUrls[0]">
            </div>
        </igx-card>
        <igx-card class="gallery__item" elevated>
            <div>
                <img [src]="imageUrls[1]">
            </div>
        </igx-card>
        <igx-toast #eventToast></igx-toast>
    </div>
</div>
```
```scss
@use "igniteui-angular/theming" as *;

$custom-banner-theme: banner-theme(
  $banner-background: #011627,
);

@include css-vars($custom-banner-theme);
```


<div class="divider--half"></div>

## API Reference

<div class="divider--half"></div>

- [IgxBannerComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbannercomponent.html)
- [IgxBannerActionsDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbanneractionsdirective.html)
- [IgxBannerComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-banner-theme)

Additional components and/or directives with relative APIs that were used:

- [IgxCardComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcardcomponent.html)
- [IgxIconComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxiconcomponent.html)
- [IgxNavbarComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxnavbarcomponent.html)
- [IgxToastComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtoastcomponent.html)

## Theming Dependencies

- [IgxIcon Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-icon-theme)
- [IgxButton Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-button-theme)
- [IgxRipple Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-ripple-theme)
- [IgxExpansionPanel Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-expansion-panel-theme)


## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
