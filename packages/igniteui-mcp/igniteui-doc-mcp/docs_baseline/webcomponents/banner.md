---
title: Web Components Banner | Infragistics
_description: With Ignite UI for Web Components Banner component, developers can easily integrate a short, non-intrusive message (along with optional actions) within mobile and desktop applications.
_keywords: Ignite UI for Web Components, UI controls, Web Components widgets, web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components Banner components
_license: MIT
mentionedTypes: ["Banner"]
_tocName: Banner
---

# Web Components Banner Overview

The Ignite UI for Web Components Banner component provides a way to easily display a prominent message to your application's users in a way that is less transient than a snackbar and less obtrusive than a dialog. It can also indicate actions to take based on the context of the message.

## Ignite UI for Web Components Banner Example

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

## Usage

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

You will then need to import the [`IgcBannerComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcBannerComponent), its necessary CSS, and register its module, like so:

```ts
import { defineComponents, IgcBannerComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcBannerComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

### Show Banner

In order to display the banner component, use its [`show`](mcp:get_api_reference?platform=webcomponents&component=IgcBannerComponent&member=show) method and call it on a button click. The banner appears relative to where the element was inserted in the page template, moving all other content. It typically shows some non-intrusive content that requires minimal user interaction to be dismissed.

```html
<igc-button onclick="banner.show()">Show Banner</igc-button>

<igc-banner id="banner">
    You are currently offline.
</igc-banner>
```

> [!NOTE]
> The [`IgcBannerComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcBannerComponent) includes a default action button `OK`, which closes the banner.

## Examples

The [`IgcBannerComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcBannerComponent) component allows templating of its content while still sticking as closely as possible to the material design banner guidelines.

### Changing the banner message

Configuring the message displayed in the banner is easy - just change the content you are passing to the `igc-banner` tag. The text will show up in the specified banner area and the banner will use its default template when displaying it. Below, we will change the content of our sample banner to be a bit more descriptive:

```html
<igc-banner id="banner">
    You have lost connection to the internet. This app is offline.
</igc-banner>
```

### Adding an icon

An [`IgcIconComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcIconComponent) can be displayed in the banner by using the banner's `prefix` slot. The icon will always be positioned at the beginning of the banner message.

> [!NOTE]
> If several [`IgcIconComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcIconComponent) elements are inserted, the banner will try to position all of them at the beginning. It is strongly advised to pass only one [`IgcIconComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcIconComponent) directly to the banner.

To pass an [`IgcIconComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcIconComponent) to your banner, use the `prefix` slot:

```html
<igc-banner id="banner">
    <igc-icon slot="prefix" name="signal_wifi_off"></igc-icon>
    You have lost connection to the internet. This app is offline.
</igc-banner>
```

If you want to use an [`IgcIconComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcIconComponent) in your banner message, simply insert it in the banner's content:

```html
<igc-banner id="banner">
    You have lost connection to the internet. This app is offline.
    <igc-icon name="signal_wifi_off"></igc-icon>
</igc-banner>
```

### Changing the banner button

The [`IgcBannerComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcBannerComponent) exposes the `actions` slot for templating the banner buttons. This allows you to override the default banner button (`OK`) and add user-defined custom actions.

```html
<igc-banner id="banner">
    <igc-icon slot="prefix" name="signal_wifi_off"></igc-icon>
    You have lost connection to the internet. This app is offline.
    <div slot="actions">
        <igc-button onclick="banner.toggle()">
            <igc-ripple></igc-ripple>
            Toggle Banner
        </igc-button>
    </div>
</igc-banner>
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

### Binding to events

The banner component emits the `Closing` and `Closed` events when being closed. The `Closing` event is cancelable - it uses the [`CustomEvent`](https://developer.mozilla.org/docs/Web/API/CustomEvent) interface and the emitted object has its `cancelable` property set to **true**. If we cancel the `Closing` event, the corresponding end action and event will not be triggered - the banner will not be closed and the `Closed` event will not be emitted.

To cancel the closing event, call the [`preventDefault`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) method.

```html
<igc-banner id="banner">
    ...
</igc-banner>
```

```ts
const banner = document.getElementById('banner') as IgcBannerComponent;

banner.addEventListener('igcClosing', (event) => {
  event.preventDefault();
});
```

> [!NOTE]
> If the changes above are applied, the banner will never close, as the closing event is always cancelled.

## Advanced Example

Let's create a banner with two custom buttons - one for dismissing the notification and one for turning on the connection. We can pass custom action handlers using the `actions` slot:

```html
<igc-banner id="banner">
    <igc-icon slot="prefix" name="signal_wifi_off"></igc-icon>
    You have lost connection to the internet. This app is offline.
    <div slot="actions">
        <igc-button onclick="banner.hide()">
            <igc-ripple></igc-ripple>
            Continue Offline
        </igc-button>
        <igc-button id="button">
            <igc-ripple></igc-ripple>
            Turn On Wifi
        </igc-button>
    </div>
</igc-banner>
```

> According to Google's [Material Design](https://material.io/design/components/banners.html#anatomy) guidelines, a banner should have a maximum of 2 buttons present. The [`IgcBannerComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcBannerComponent) does not explicitly limit the number of elements under the `actions` slot, but it is strongly recommended to use up to 2 if you want to adhere to the material design guidelines.

The dismiss option (**Continue Offline**) doesn't need any further logic, so it can just call the [`hide`](mcp:get_api_reference?platform=webcomponents&component=IgcBannerComponent&member=hide) method. The confirm action (**Turn On Wifi**), however, requires some additional logic, so we have to define it in the component. Then, we will add an event listener for the `click` event. The last step is to call the `refreshBanner()` method on each change, which will toggle the banner depending on the `wifiState`.

The navbar will have a Wifi icon and we will add an event listener for its `click` event as well. As the `refreshBanner()` method is called on each change, the icon will not only toggle the banner, but change according to the state of the connection:

```html
<igc-navbar>
  <h1>Gallery</h1>
  <igc-icon id="icon" slot="end" name="signal_wifi_off"></igc-icon>
</igc-navbar>

<igc-banner id="banner">
    ...
    <div slot="actions">
        ...
        <igc-button id="button">
            <igc-ripple></igc-ripple>
            Turn On Wifi
        </igc-button>
    </div>
</igc-banner>
```

```ts
private banner: IgcBannerComponent;
private icon: IgcIconComponent;
private button: IgcButtonComponent;

private wifiState: boolean = false;

constructor() {
    this.banner = document.getElementById('banner') as IgcBannerComponent;
    this.icon = document.getElementById('icon') as IgcIconComponent;
    this.button = document.getElementById('button') as IgcButtonComponent;

    this.icon.addEventListener('click', () => this.refreshBanner());
    this.button.addEventListener('click', () => this.refreshBanner());
}

public refreshBanner() {
    if (!this.wifiState) {
        this.icon.name = 'signal_wifi_4_bar';
        this.banner.hide();
    } else {
        this.icon.name = 'signal_wifi_off';
        this.banner.show();
    }
    this.wifiState = !this.wifiState;
}
```

Finally, we will add a [`IgcToastComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcToastComponent), displaying a message about the WiFi state. The results of the templated banner can be seen in the demo below:

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

## Styling

The [`IgcBannerComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcBannerComponent) component exposes several CSS parts which give you full control over its style:

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
igc-banner::part(spacer) {
  background: var(--ig-surface-600);
}

igc-banner::part(illustration) {
  color: var(--ig-surface-600-contrast);;
}

igc-banner::part(content) {
  color: var(--ig-gray-900);;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
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

## API References

- [`IgcBannerComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcBannerComponent)
- [`IgcCardComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCardComponent)
- [`IgcIconComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcIconComponent)
- [`IgcNavbarComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNavbarComponent)
- [`IgcToastComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcToastComponent)
- [`IgcRippleComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcRippleComponent)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
