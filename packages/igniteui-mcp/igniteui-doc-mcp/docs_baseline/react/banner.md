---
title: React Banner | Infragistics
_description: With Ignite UI for React Banner component, developers can easily integrate a short, non-intrusive message (along with optional actions) within mobile and desktop applications.
_keywords: Ignite UI for React, UI controls, React widgets, web widgets, UI widgets, React, Native React Components Suite, Native React Controls, Native React Components Library, React Banner components
_license: MIT
mentionedTypes: ["Banner"]
_tocName: Banner
---

# React Banner Overview

The Ignite UI for React Banner component provides a way to easily display a prominent message to your application's users in a way that is less transient than a snackbar and less obtrusive than a dialog. It can also indicate actions to take based on the context of the message.

## Ignite UI for React Banner Example

```css
.offline-banner {
    border-bottom: 1px solid rgba(0, 0, 0, .12);
}

.gallery__wrapper {
    max-width: 400px;
    padding-top: 24px;
    margin: 0 auto;
}

.gallery__content {
    display: flex;
    flex-flow: column;
    max-height: 430px;
    overflow: hidden;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
}

.gallery__item {
    margin: 8px 16px;
    overflow: visible;
    border-radius: 0;

    & div {
        display: flex;
        justify-content: center;
    }
}

img {
    max-width: 100%;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import {
    IgrBanner,
    IgrCard,
    IgrIcon,
    IgrNavbar,
    registerIconFromText,
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './BannerSample1.css';
import './index.css';

const refreshIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>';

export default function BannerSample1() {
    const bannerRef = useRef<IgrBanner>(null);

    useEffect(() => {
        registerIconFromText('refresh', refreshIcon);
        bannerRef.current.open = true;
    }, [])

    return (
        <div className="gallery__wrapper">
            <div className="gallery__content">
                <IgrNavbar>
                    <h1>Gallery</h1>
                    <IgrIcon name="refresh" slot="end" onClick={() => bannerRef.current.show()}></IgrIcon>
                </IgrNavbar>

                <IgrBanner ref={bannerRef} className="offline-banner">
                    <span>You are currently offline.</span>
                </IgrBanner>

                <IgrCard className="gallery__item" elevated>
                    <div>
                        <img src="https://dl.infragistics.com/x/img/card/media/the_red_ice_forest.jpg" />
                    </div>
                </IgrCard>
                <IgrCard className="gallery__item" elevated>
                    <div>
                        <img src="https://dl.infragistics.com/x/img/card/media/yosemite.jpg" />
                    </div>
                </IgrCard>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BannerSample1 />);
```

## Usage

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrBanner`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbanner.html) and its necessary CSS, like so:

```tsx
import { IgrBanner } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

For a complete introduction to the Ignite UI for React, read the [**Getting Started**](../general-getting-started.md) topic.

### Show Banner

In order to display the banner component, use its [`show`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbanner.html#show) method and call it on a button click. The banner appears relative to where the element was inserted in the page template, moving all other content. It typically shows some non-intrusive content that requires minimal user interaction to be dismissed.

```tsx
<IgrButton onClick={() => bannerRef.current.show()}>
    <span>Show Banner</span>
</IgrButton>

<IgrBanner ref={bannerRef}>
    <span>You are currently offline.</span>
</IgrBanner>
```

> [!NOTE]
> The [`IgrBanner`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbanner.html) includes a default action button `OK`, which closes the banner.

## Examples

The [`IgrBanner`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbanner.html) component allows templating of its content while still sticking as closely as possible to the material design banner guidelines.

### Changing the banner message

Configuring the message displayed in the banner is easy - just change the content you are passing to the [`IgrBanner`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbanner.html) tag. The text will show up in the specified banner area and the banner will use its default template when displaying it. Below, we will change the content of our sample banner to be a bit more descriptive:

```tsx
<IgrBanner ref={bannerRef}>
    <span>You have lost connection to the internet. This app is offline.</span>
</IgrBanner>
```

### Adding an icon

An [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html) can be displayed in the banner by using the banner's `prefix` slot. The icon will always be positioned at the beginning of the banner message.

> [!NOTE]
> If several [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html) elements are inserted, the banner will try to position all of them at the beginning. It is strongly advised to pass only one [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html) directly to the banner.

To pass an [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html) to your banner, use the `prefix` slot:

```tsx
<IgrBanner ref={bannerRef}>
    <IgrIcon slot="prefix" name="signal_wifi_off"></IgrIcon>
    <span>You have lost connection to the internet. This app is offline.</span>
</IgrBanner>
```

If you want to use an [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html) in your banner message, simply insert it in the banner's content:

```tsx
<IgrBanner ref={bannerRef}>
    <span>You have lost connection to the internet. This app is offline.</span>
    <IgrIcon name="signal_wifi_off"></IgrIcon>
</IgrBanner>
```

### Changing the banner button

The [`IgrBanner`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbanner.html) exposes the `actions` slot for templating the banner buttons. This allows you to override the default banner button (`OK`) and add user-defined custom actions.

```tsx
<IgrBanner ref={bannerRef}>
    <IgrIcon slot="prefix" name="signal_wifi_off"></IgrIcon>
    <span>You have lost connection to the internet. This app is offline.</span>
    <div slot="actions">
        <IgrButton variant="flat" onClick={() => bannerRef.current.toggle()}>
            <IgrRipple />
            <span>Toggle Banner</span>
        </IgrButton>
    </div>
</IgrBanner>
```

```css
.offline-banner {
    border-bottom: 1px solid rgba(0, 0, 0, .12);
}

.gallery__wrapper {
    max-width: 400px;
    padding-top: 24px;
    margin: 0 auto;
}

.gallery__content {
    display: flex;
    flex-flow: column;
    max-height: 430px;
    overflow: hidden;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
}

.gallery__item {
    margin: 8px 16px;
    overflow: visible;
    border-radius: 0;

    & div {
        display: flex;
        justify-content: center;
    }
}

img {
    max-width: 100%;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import {
    IgrBanner,
    IgrButton,
    IgrCard,
    IgrIcon,
    IgrNavbar,
    IgrRipple,
    registerIconFromText,
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './BannerSample2.css';
import './index.css';

const refreshIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>';
const wifiOffIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zm-6.6 8.22L3.27 1.44 2 2.72l2.05 2.06C1.91 5.76.59 6.82.36 7l11.63 14.49.01.01.01-.01 3.9-4.86 3.32 3.32 1.27-1.27-3.46-3.46z"/></svg>';

export default function BannerSample2() {
    const bannerRef = useRef<IgrBanner>(null);

    useEffect(() => {
        registerIconFromText('refresh', refreshIcon);
        registerIconFromText('signal_wifi_off', wifiOffIcon);
        bannerRef.current.open = true;
    }, [])

    return (
        <div className="gallery__wrapper">
            <div className="gallery__content">
                <IgrNavbar>
                    <h1>Gallery</h1>
                    <IgrIcon name="refresh" slot="end" onClick={() => bannerRef.current.show()}></IgrIcon>
                </IgrNavbar>

                <IgrBanner ref={bannerRef} className="offline-banner">
                    <IgrIcon name="signal_wifi_off" slot="prefix"></IgrIcon>
                    <span>You have lost connection to the internet. This app is offline.</span>
                    <div slot="actions" >
                        <IgrButton variant="flat" onClick={() => bannerRef.current.toggle()}>
                            <IgrRipple />
                            <span>Toggle Banner</span>
                        </IgrButton>
                    </div>
                </IgrBanner>

                <IgrCard className="gallery__item" elevated>
                    <div>
                        <img src="https://dl.infragistics.com/x/img/card/media/the_red_ice_forest.jpg" />
                    </div>
                </IgrCard>
                <IgrCard className="gallery__item" elevated>
                    <div>
                        <img src="https://dl.infragistics.com/x/img/card/media/yosemite.jpg" />
                    </div>
                </IgrCard>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BannerSample2 />);
```

### Binding to events

The banner component emits the `Closing` and `Closed` events when being closed. The `Closing` event is cancelable - it uses the [`CustomEvent`](https://developer.mozilla.org/docs/Web/API/CustomEvent) interface and the emitted object has its `cancelable` property set to **true**. If we cancel the `Closing` event, the corresponding end action and event will not be triggered - the banner will not be closed and the `Closed` event will not be emitted.

To cancel the closing event, call the [`preventDefault`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) method.

```tsx
<IgrBanner onClosing={(event) => event.preventDefault()}>
    ...
</IgrBanner>
```

> [!NOTE]
> If the changes above are applied, the banner will never close, as the closing event is always cancelled.

## Advanced Example

Let's create a banner with two custom buttons - one for dismissing the notification and one for turning on the connection. We can pass custom action handlers using the `actions` slot:

```tsx
<IgrBanner ref={bannerRef}>
    <IgrIcon slot="prefix" name="signal_wifi_off"></IgrIcon>
    <span>You have lost connection to the internet. This app is offline.</span>
    <div slot="actions">
        <IgrButton variant="flat" onClick={() => bannerRef.current.hide()}>
            <IgrRipple />
            <span>Continue Offline</span>
        </IgrButton>
        <IgrButton variant="flat" onClick={refreshBanner}>
            <IgrRipple />
            <span>Turn On Wifi</span>
        </IgrButton>
    </div>
</IgrBanner>
```

> According to Google's [Material Design](https://material.io/design/components/banners.html#anatomy) guidelines, a banner should have a maximum of 2 buttons present. The [`IgrBanner`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbanner.html) does not explicitly limit the number of elements under the `actions` slot, but it is strongly recommended to use up to 2 if you want to adhere to the material design guidelines.

The dismiss option (**Continue Offline**) doesn't need any further logic, so it can just call the [`hide`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbanner.html#hide) method. The confirm action (**Turn On Wifi**), however, requires some additional logic, so we have to define it in the component. Then, we will add an event listener for the `click` event. The last step is to call the `refreshBanner()` method on each change, which will toggle the banner depending on the `wifiState`.

The navbar will have a Wifi icon and we will add an event listener for its `click` event as well. As the `refreshBanner()` method is called on each change, the icon will not only toggle the banner, but change according to the state of the connection:

```tsx
const bannerRef = useRef<IgrBanner>(null);
const iconRef = useRef<IgrIcon>(null);

const [wifiState, setWifiState] = useState(false);
const [iconName, setIconName] = useState("signal_wifi_off");

const refreshBanner = () => {
    const nextWifiState = !wifiState;
    setWifiState(nextWifiState);
    setIconName(nextWifiState ? "signal_wifi_4_bar" : "signal_wifi_off");

    if (nextWifiState) {
        bannerRef.current.hide();
    } else {
        bannerRef.current.show();
    }
}

return(
    <>
        <IgrNavbar>
            <h1>Gallery</h1>
            <IgrIcon ref={iconRef} name={iconName} slot="end" onClick={refreshBanner}></IgrIcon>
        </IgrNavbar>

        <IgrBanner ref={bannerRef}>
            ...
            <div slot="actions">
                ...
                <IgrButton variant="flat" onClick={refreshBanner}>
                    <IgrRipple />
                    <span>Turn On Wifi</span>
                </IgrButton>
            </div>
        </IgrBanner>
    </>
);
```

Finally, we will add a [`IgrToast`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtoast.html), displaying a message about the WiFi state. The results of the templated banner can be seen in the demo below:

```css
.offline-banner {
    border-bottom: 1px solid rgba(0, 0, 0, .12);
}

.gallery__wrapper {
    max-width: 400px;
    padding-top: 24px;
    margin: 0 auto;
}

.gallery__content {
    display: flex;
    flex-flow: column;
    max-height: 430px;
    overflow: hidden;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
}

.gallery__item {
    margin: 8px 16px;
    overflow: visible;
    border-radius: 0;

    & div {
        display: flex;
        justify-content: center;
    }
}

img {
    max-width: 100%;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
    IgrBanner,
    IgrButton,
    IgrCard,
    IgrIcon,
    IgrNavbar,
    IgrRipple,
    IgrToast,
    registerIconFromText,
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './BannerAdvancedSample.css';
import './index.css';

const wifiOnIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/></svg>';
const wifiOffIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zm-6.6 8.22L3.27 1.44 2 2.72l2.05 2.06C1.91 5.76.59 6.82.36 7l11.63 14.49.01.01.01-.01 3.9-4.86 3.32 3.32 1.27-1.27-3.46-3.46z"/></svg>';

export default function BannerAdvancedSample() {
    const bannerRef = useRef<IgrBanner>(null);
    const iconRef = useRef<IgrIcon>(null);
    const toastRef = useRef<IgrToast>(null);

    const [wifiState, setWifiState] = useState(false);
    const [iconName, setIconName] = useState("signal_wifi_off");

    useEffect(() => {
        registerIconFromText('signal_wifi_off', wifiOffIcon);
        registerIconFromText('signal_wifi_4_bar', wifiOnIcon);
        bannerRef.current.open = true;
    }, []);

    const refreshBanner = () => {
        const nextWifiState = !wifiState;
        setWifiState(nextWifiState);
        setIconName(nextWifiState ? "signal_wifi_4_bar" : "signal_wifi_off");

        if (nextWifiState) {
            bannerRef.current.hide();
        } else {
            bannerRef.current.show();
        }

        showToast();
    }

    const showToast = () => {
        toastRef.current.open = false;
        toastRef.current.show();
    }

    return (
        <div className="gallery__wrapper">
            <div className="gallery__content">
                <IgrNavbar>
                    <h1>Gallery</h1>
                    <IgrIcon ref={iconRef} name={iconName} slot="end" onClick={refreshBanner}></IgrIcon>
                </IgrNavbar>

                <IgrBanner ref={bannerRef} className="offline-banner">
                    <IgrIcon name="signal_wifi_off" slot="prefix"></IgrIcon>
                    <span>You have lost connection to the internet. This app is offline.</span>
                    <div slot="actions">
                        <IgrButton variant="flat" onClick={() => bannerRef.current.hide()}>
                            <IgrRipple />
                            <span>Continue Offline</span>
                        </IgrButton>
                        <IgrButton variant="flat" onClick={refreshBanner}>
                            <IgrRipple />
                            <span>Turn On Wifi</span>
                        </IgrButton>
                    </div>
                </IgrBanner>

                <IgrCard className="gallery__item" elevated>
                    <div>
                        <img src="https://dl.infragistics.com/x/img/card/media/the_red_ice_forest.jpg" />
                    </div>
                </IgrCard>
                <IgrCard className="gallery__item" elevated>
                    <div>
                        <img src="https://dl.infragistics.com/x/img/card/media/yosemite.jpg" />
                    </div>
                </IgrCard>
                <IgrToast ref={toastRef} position="middle">
                    <span>{`Wifi is now ${wifiState ? 'on' : 'off'}`}</span>
                </IgrToast>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BannerAdvancedSample />);
```

## Styling

The [`IgrBanner`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbanner.html) component exposes several CSS parts which give you full control over its style:

|Name|Description|
|--|--|
| `base` | The base wrapper of the banner component. |
| `spacer` | The inner wrapper that sets the space around the banner. |
| `message` | The part that holds the text and the illustration. |
| `illustration` | The part that holds the banner icon/illustration. |
| `content` | The part that holds the banner text content. |
| `actions` | The part that holds the banner action buttons. |

```css
igc-banner::part(spacer) {
  background: var(--ig-surface-600);
}

igc-banner::part(illustration) {
  color: var(--ig-surface-600-contrast);
}

igc-banner::part(content) {
  color: var(--ig-gray-900);
}
```

```css
.offline-banner {
    border-bottom: 1px solid rgba(0, 0, 0, .12);
}

.gallery__wrapper {
    max-width: 400px;
    padding-top: 24px;
    margin: 0 auto;
}

.gallery__content {
    display: flex;
    flex-flow: column;
    max-height: 430px;
    overflow: hidden;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
}

.gallery__item {
    margin: 8px 16px;
    overflow: visible;
    border-radius: 0;

    & div {
        display: flex;
        justify-content: center;
    }
}

img {
    max-width: 100%;
}

igc-banner::part(spacer) {
    background: #dedede;
}

igc-banner::part(illustration) {
    color: #666666;
}

igc-banner::part(content) {
    color: #151515;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
    IgrBanner,
    IgrButton,
    IgrCard,
    IgrIcon,
    IgrNavbar,
    IgrRipple,
    IgrToast,
    registerIconFromText,
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './BannerStyling.css';
import './index.css';

const wifiOnIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/></svg>';
const wifiOffIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zm-6.6 8.22L3.27 1.44 2 2.72l2.05 2.06C1.91 5.76.59 6.82.36 7l11.63 14.49.01.01.01-.01 3.9-4.86 3.32 3.32 1.27-1.27-3.46-3.46z"/></svg>';

export default function BannerStyling() {
    const bannerRef = useRef<IgrBanner>(null);
    const iconRef = useRef<IgrIcon>(null);
    const toastRef = useRef<IgrToast>(null);

    const [wifiState, setWifiState] = useState(false);
    const [iconName, setIconName] = useState("signal_wifi_off");

    useEffect(() => {
        registerIconFromText('signal_wifi_off', wifiOffIcon);
        registerIconFromText('signal_wifi_4_bar', wifiOnIcon);
        bannerRef.current.open = true;
    }, []);

    const refreshBanner = () => {
        const nextWifiState = !wifiState;
        setWifiState(nextWifiState);
        setIconName(nextWifiState ? "signal_wifi_4_bar" : "signal_wifi_off");

        if (nextWifiState) {
            bannerRef.current.hide();
        } else {
            bannerRef.current.show();
        }

        showToast();
    }

    const showToast = () => {
        toastRef.current.open = false;
        toastRef.current.show();
    }

    return (
        <div className="gallery__wrapper">
            <div className="gallery__content">
                <IgrNavbar>
                    <h1>Gallery</h1>
                    <IgrIcon ref={iconRef} name={iconName} slot="end" onClick={refreshBanner}></IgrIcon>
                </IgrNavbar>

                <IgrBanner ref={bannerRef} className="offline-banner">
                    <IgrIcon name="signal_wifi_off" slot="prefix"></IgrIcon>
                    <span>You have lost connection to the internet. This app is offline.</span>
                    <div slot="actions">
                        <IgrButton variant="flat" onClick={() => bannerRef.current.hide()}>
                            <IgrRipple />
                            <span>Continue Offline</span>
                        </IgrButton>
                        <IgrButton variant="flat" onClick={refreshBanner}>
                            <IgrRipple />
                            <span>Turn On Wifi</span>
                        </IgrButton>
                    </div>
                </IgrBanner>

                <IgrCard className="gallery__item" elevated>
                    <div>
                        <img src="https://dl.infragistics.com/x/img/card/media/the_red_ice_forest.jpg" />
                    </div>
                </IgrCard>
                <IgrCard className="gallery__item" elevated>
                    <div>
                        <img src="https://dl.infragistics.com/x/img/card/media/yosemite.jpg" />
                    </div>
                </IgrCard>
                <IgrToast ref={toastRef} position="middle">
                    <span>{`Wifi is now ${wifiState ? 'on' : 'off'}`}</span>
                </IgrToast>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BannerStyling />);
```

## API References

- [`IgrBanner`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbanner.html)
- [`IgrCard`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcard.html)
- [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html)
- [`IgrNavbar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrnavbar.html)
- [`IgrToast`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtoast.html)
- [`IgrRipple`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrripple.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
