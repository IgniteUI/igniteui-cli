---
title: Blazor Banner | Infragistics
_description: With Ignite UI for Blazor Banner component, developers can easily integrate a short, non-intrusive message (along with optional actions) within mobile and desktop applications.
_keywords: Ignite UI for Blazor, UI controls, Blazor widgets, web widgets, UI widgets, Blazor, Native Blazor Components Suite, Native Blazor Controls, Native Blazor Components Library, Blazor Banner components
_license: MIT
mentionedTypes: ["Banner"]
_tocName: Banner
---

# Blazor Banner Overview

The Ignite UI for Blazor Banner component provides a way to easily display a prominent message to your application's users in a way that is less transient than a snackbar and less obtrusive than a dialog. It can also indicate actions to take based on the context of the message.

## Ignite UI for Blazor Banner Example

```razor
@using IgniteUI.Blazor.Controls

<style>
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
    }
    .gallery__item div {
        display: flex;
        justify-content: center;
    }
    img {
        max-width: 100%;
    }
    h1 {
        font-size: 1.25rem;
    }
</style>

<div class="gallery__wrapper">
    <div class="gallery__content">
        <IgbNavbar>
            <h1>Gallery</h1>
            <IgbIcon @ref="iconRef" IconName="refresh" Collection="material" slot="end" @onclick="OnIconClick"></IgbIcon>
        </IgbNavbar>

        <IgbBanner @ref="bannerRef" class="offline-banner">
            <span>You are currently offline.</span>
        </IgbBanner>

        <IgbCard class="gallery__item" Elevated>
            <div>
                <img src="https://dl.infragistics.com/x/img/card/media/the_red_ice_forest.jpg" />
            </div>
        </IgbCard>
        <IgbCard class="gallery__item" Elevated>
            <div>
                <img src="https://dl.infragistics.com/x/img/card/media/yosemite.jpg" />
            </div>
        </IgbCard>
    </div>
</div>

@code {
    private string refreshIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'><path d='M0 0h24v24H0z' fill='none'/><path d='M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'/></svg>";

    private IgbIcon iconRef;
    private IgbBanner bannerRef;

    protected override void OnAfterRender(bool firstRender)
    {
        if (this.iconRef != null && firstRender)
        {
            this.iconRef.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.iconRef.RegisterIconFromText("refresh", refreshIcon, "material");
            }));
        }

        if (this.bannerRef != null && firstRender)
        {
            this.bannerRef.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.bannerRef.ShowAsync();
            }));
        }

    }

    private void OnIconClick()
    {
        this.bannerRef.ShowAsync();
    }
}
```

## Usage

Before using the [`IgbBanner`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBanner.html), you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbBannerModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbBanner`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBanner.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

For a complete introduction to the Ignite UI for Blazor, read the [**Getting Started**](../general-getting-started.md) topic.

### Show Banner

In order to display the banner component, use its [`Show`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBanner.html#IgniteUI_Blazor_Controls_IgbBanner_Show) method and call it on a button click. The banner appears relative to where the element was inserted in the page template, moving all other content. It typically shows some non-intrusive content that requires minimal user interaction to be dismissed.

```razor
<IgbButton @onclick="ShowBanner">Show Banner</IgbButton>

<IgbBanner @ref="bannerRef">
    You are currently offline.
</IgbBanner>

@code {
    private IgbBanner bannerRef;

    private void ShowBanner()
    {
        this.bannerRef.ShowAsync();
    }
}
```

> [!NOTE]
> The [`IgbBanner`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBanner.html) includes a default action button `OK`, which closes the banner.

## Examples

The [`IgbBanner`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBanner.html) component allows templating of its content while still sticking as closely as possible to the material design banner guidelines.

### Changing the banner message

Configuring the message displayed in the banner is easy - just change the content you are passing to the [`IgbBanner`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBanner.html) tag. The text will show up in the specified banner area and the banner will use its default template when displaying it. Below, we will change the content of our sample banner to be a bit more descriptive:

```razor
<IgbBanner @ref="bannerRef">
    You have lost connection to the internet. This app is offline.
</IgbBanner>
```

### Adding an icon

An [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html) can be displayed in the banner by using the banner's `prefix` slot. The icon will always be positioned at the beginning of the banner message.

> [!NOTE]
> If several [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html) elements are inserted, the banner will try to position all of them at the beginning. It is strongly advised to pass only one [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html) directly to the banner.

To pass an [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html) to your banner, use the `prefix` slot:

```razor
<IgbBanner @ref="bannerRef">
    <IgbIcon slot="prefix" IconName="signal_wifi_off" Collection="material"></IgbIcon>
    You have lost connection to the internet. This app is offline.
</IgbBanner>
```

If you want to use an [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html) in your banner message, simply insert it in the banner's content:

```razor
<IgbBanner @ref="bannerRef">
    You have lost connection to the internet. This app is offline.
    <IgbIcon IconName="signal_wifi_off" Collection="material"></IgbIcon>
</IgbBanner>
```

### Changing the banner button

The [`IgbBanner`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBanner.html) exposes the `actions` slot for templating the banner buttons. This allows you to override the default banner button (`OK`) and add user-defined custom actions.

```razor
<IgbBanner @ref="bannerRef">
    <IgbIcon slot="prefix" IconName="signal_wifi_off" Collection="material"></IgbIcon>
    You have lost connection to the internet. This app is offline.
    <div slot="actions">
        <IgbButton Variant="ButtonVariant.Flat" @onclick="OnButtonClick">
            Toggle Banner
            <IgbRipple />
        </IgbButton>
    </div>
</IgbBanner>

@code {
    private IgbBanner bannerRef;

    private void OnButtonClick()
    {
        this.bannerRef.ToggleAsync();
    }
}
```

```razor
@using IgniteUI.Blazor.Controls

<style>
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
    }
    .gallery__item div {
        display: flex;
        justify-content: center;
    }
    img {
        max-width: 100%;
    }
    h1 {
        font-size: 1.25rem;
    }
</style>

<div class="gallery__wrapper">
    <div class="gallery__content">
        <IgbNavbar>
            <h1>Gallery</h1>
            <IgbIcon @ref="iconRef" IconName="refresh" Collection="material" slot="end" @onclick="OnIconClick"></IgbIcon>
        </IgbNavbar>

        <IgbBanner @ref="bannerRef" class="offline-banner">
            <IgbIcon IconName="signal_wifi_off" Collection="material" slot="prefix"></IgbIcon>
            <span>You have lost connection to the internet. This app is offline.</span>
            <div slot="actions">
                <IgbButton Variant="ButtonVariant.Flat" @onclick="OnButtonClick">
                    Toggle Banner
                    <IgbRipple />
                </IgbButton>
            </div>
        </IgbBanner>

        <IgbCard class="gallery__item" Elevated>
            <div>
                <img src="https://dl.infragistics.com/x/img/card/media/the_red_ice_forest.jpg" />
            </div>
        </IgbCard>
        <IgbCard class="gallery__item" Elevated>
            <div>
                <img src="https://dl.infragistics.com/x/img/card/media/yosemite.jpg" />
            </div>
        </IgbCard>
    </div>
</div>

@code {
    private string refreshIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'><path d='M0 0h24v24H0z' fill='none'/><path d='M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'/></svg>";
    private string wifiOffIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'><path d='M0 0h24v24H0z' fill='none'/><path d='M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zm-6.6 8.22L3.27 1.44 2 2.72l2.05 2.06C1.91 5.76.59 6.82.36 7l11.63 14.49.01.01.01-.01 3.9-4.86 3.32 3.32 1.27-1.27-3.46-3.46z'/></svg>";

    private IgbIcon iconRef;
    private IgbBanner bannerRef;

    protected override void OnAfterRender(bool firstRender)
    {
        if (this.iconRef != null && firstRender)
        {
            this.iconRef.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.iconRef.RegisterIconFromText("refresh", refreshIcon, "material");
                this.iconRef.RegisterIconFromText("signal_wifi_off", wifiOffIcon, "material");
            }));
        }

        if (this.bannerRef != null && firstRender)
        {
            this.bannerRef.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.bannerRef.ShowAsync();
            }));
        }

    }

    private void OnIconClick()
    {
        this.bannerRef.ShowAsync();
    }

    private void OnButtonClick()
    {
        this.bannerRef.ToggleAsync();
    }
}
```

### Binding to events

The banner component emits the `Closing` and `Closed` events when being closed. The `Closing` event is cancelable - it uses the [`CustomEvent`](https://developer.mozilla.org/docs/Web/API/CustomEvent) interface and the emitted object has its `cancelable` property set to **true**. If we cancel the `Closing` event, the corresponding end action and event will not be triggered - the banner will not be closed and the `Closed` event will not be emitted.

To cancel the closing event, call the [`preventDefault`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) method.

```razor
<IgbBanner id="banner">
    ...
</IgbBanner>

@code {
    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await JS.InvokeVoidAsync("handleClosing");
        }
    }
}
```

```razor
//In JavaScript:
function handleClosing() {
    const banner = document.getElementById('banner');

    banner.addEventListener('igcClosing', (event) => {
        event.preventDefault();
    });
}
```

> [!NOTE]
> If the changes above are applied, the banner will never close, as the closing event is always cancelled.

## Advanced Example

Let's create a banner with two custom buttons - one for dismissing the notification and one for turning on the connection. We can pass custom action handlers using the `actions` slot:

```razor
<IgbBanner @ref="bannerRef">
    <IgbIcon IconName="signal_wifi_off" Collection="material" slot="prefix"></IgbIcon>
    You have lost connection to the internet. This app is offline.
    <div slot="actions">
        <IgbButton Variant="ButtonVariant.Flat" @onclick="HideBanner">
            Continue Offline
            <IgbRipple />
        </IgbButton>
        <IgbButton Variant="ButtonVariant.Flat" @onclick="RefreshBanner">
            Turn On Wifi
            <IgbRipple />
        </IgbButton>
    </div>
</IgbBanner>

@code {
    private IgbBanner bannerRef;

    private void HideBanner()
    {
        this.bannerRef.HideAsync();
    }
}
```

> According to Google's [Material Design](https://material.io/design/components/banners.html#anatomy) guidelines, a banner should have a maximum of 2 buttons present. The [`IgbBanner`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBanner.html) does not explicitly limit the number of elements under the `actions` slot, but it is strongly recommended to use up to 2 if you want to adhere to the material design guidelines.

The dismiss option (**Continue Offline**) doesn't need any further logic, so it can just call the [`Hide`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBanner.html#IgniteUI_Blazor_Controls_IgbBanner_Hide) method. The confirm action (**Turn On Wifi**), however, requires some additional logic, so we have to define it in the component. Then, we will add an event listener for the `click` event. The last step is to call the `refreshBanner()` method on each change, which will toggle the banner depending on the `wifiState`.

The navbar will have a Wifi icon and we will add an event listener for its `click` event as well. As the `refreshBanner()` method is called on each change, the icon will not only toggle the banner, but change according to the state of the connection:

```razor
<IgbNavbar>
    <h1>Gallery</h1>
    <IgbIcon @ref="iconRef" IconName="@iconName" Collection="material" slot="end" @onclick="RefreshBanner"></IgbIcon>
</IgbNavbar>

<IgbBanner @ref="bannerRef">
    ...
    <div slot="actions">
        ...
        <IgbButton Variant="ButtonVariant.Flat" @onclick="RefreshBanner">
            Turn On Wifi
            <IgbRipple />
        </IgbButton>
    </div>
</IgbBanner>

@code {
    private IgbBanner bannerRef;
    private string iconName = "signal_wifi_off";
    private bool wifiState = false;

    private void RefreshBanner()
    {
        if (!this.wifiState)
        {
            this.iconName = "signal_wifi_4_bar";
            this.bannerRef.HideAsync();
        }
        else
        {
            this.iconName = "signal_wifi_off";
            this.bannerRef.ShowAsync();
        }
        this.wifiState = !this.wifiState;
    }
}
```

Finally, we will add a [`IgbToast`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToast.html), displaying a message about the WiFi state. The results of the templated banner can be seen in the demo below:

```razor
@using IgniteUI.Blazor.Controls

<style>
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
    }
    .gallery__item div {
        display: flex;
        justify-content: center;
    }
    img {
        max-width: 100%;
    }
    h1 {
        font-size: 1.25rem;
    }
</style>

<div class="gallery__wrapper">
    <div class="gallery__content">
        <IgbNavbar>
            <h1>Gallery</h1>
            <IgbIcon @ref="iconRef" IconName="@iconName" Collection="material" slot="end" @onclick="RefreshBanner"></IgbIcon>
        </IgbNavbar>

        <IgbBanner @ref="bannerRef" class="offline-banner">
            <IgbIcon IconName="signal_wifi_off" Collection="material" slot="prefix"></IgbIcon>
            <span>You have lost connection to the internet. This app is offline.</span>
            <div slot="actions">
                <IgbButton Variant="ButtonVariant.Flat" @onclick="HideBanner">
                    Continue Offline
                    <IgbRipple />
                </IgbButton>
                <IgbButton Variant="ButtonVariant.Flat" @onclick="RefreshBanner">
                    Turn On Wifi
                    <IgbRipple />
                </IgbButton>
            </div>
        </IgbBanner>

        <IgbCard class="gallery__item" Elevated>
            <div>
                <img src="https://dl.infragistics.com/x/img/card/media/the_red_ice_forest.jpg" />
            </div>
        </IgbCard>
        <IgbCard class="gallery__item" Elevated>
            <div>
                <img src="https://dl.infragistics.com/x/img/card/media/yosemite.jpg" />
            </div>
        </IgbCard>

        <IgbToast @ref="toastRef" Position="AbsolutePosition.Middle">@message</IgbToast>
    </div>
</div>

@code {
    private string wifiOnIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'><path d='M0 0h24v24H0z' fill='none'/><path d='M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z'/></svg>";
    private string wifiOffIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'><path d='M0 0h24v24H0z' fill='none'/><path d='M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zm-6.6 8.22L3.27 1.44 2 2.72l2.05 2.06C1.91 5.76.59 6.82.36 7l11.63 14.49.01.01.01-.01 3.9-4.86 3.32 3.32 1.27-1.27-3.46-3.46z'/></svg>";

    private IgbIcon iconRef;
    private IgbBanner bannerRef;
    private IgbToast toastRef;
    private bool wifiState = false;
    private string message = "";
    private string iconName = "signal_wifi_off";

    protected override void OnAfterRender(bool firstRender)
    {
        if (this.iconRef != null && firstRender)
        {
            this.iconRef.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.iconRef.RegisterIconFromText("signal_wifi_off", wifiOffIcon, "material");
                this.iconRef.RegisterIconFromText("signal_wifi_4_bar", wifiOnIcon, "material");
            }));
        }

        if (this.bannerRef != null && firstRender)
        {
            this.bannerRef.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.bannerRef.ShowAsync();
            }));
        }

    }

    private void HideBanner()
    {
        this.bannerRef.HideAsync();
    }

    private void RefreshBanner()
    {
        if (!this.wifiState)
        {
            this.iconName = "signal_wifi_4_bar";
            this.bannerRef.HideAsync();
        }
        else
        {
            this.iconName = "signal_wifi_off";
            this.bannerRef.ShowAsync();
        }

        this.wifiState = !this.wifiState;
        this.ShowToast();
    }

    private void ShowToast()
    {
        this.toastRef.Open = false;
        this.message = $"Wifi is now {(this.wifiState ? "on" : "off")}";
        this.toastRef.ShowAsync();
    }
}
```

## Styling

The [`IgbBanner`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBanner.html) component exposes several CSS parts which give you full control over its style:

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

```razor
@using IgniteUI.Blazor.Controls

<style>
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
    }
    .gallery__item div {
        display: flex;
        justify-content: center;
    }
    img {
        max-width: 100%;
    }
    h1 {
        font-size: 1.25rem;
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
</style>

<div class="gallery__wrapper">
    <div class="gallery__content">
        <IgbNavbar>
            <h1>Gallery</h1>
            <IgbIcon @ref="iconRef" IconName="@iconName" Collection="material" slot="end" @onclick="RefreshBanner"></IgbIcon>
        </IgbNavbar>

        <IgbBanner @ref="bannerRef" class="offline-banner">
            <IgbIcon IconName="signal_wifi_off" Collection="material" slot="prefix"></IgbIcon>
            <span>You have lost connection to the internet. This app is offline.</span>
            <div slot="actions">
                <IgbButton Variant="ButtonVariant.Flat" @onclick="HideBanner">
                    Continue Offline
                    <IgbRipple />
                </IgbButton>
                <IgbButton Variant="ButtonVariant.Flat" @onclick="RefreshBanner">
                    Turn On Wifi
                    <IgbRipple />
                </IgbButton>
            </div>
        </IgbBanner>

        <IgbCard class="gallery__item" Elevated>
            <div>
                <img src="https://dl.infragistics.com/x/img/card/media/the_red_ice_forest.jpg" />
            </div>
        </IgbCard>
        <IgbCard class="gallery__item" Elevated>
            <div>
                <img src="https://dl.infragistics.com/x/img/card/media/yosemite.jpg" />
            </div>
        </IgbCard>

        <IgbToast @ref="toastRef" Position="AbsolutePosition.Middle">@message</IgbToast>
    </div>
</div>

@code {
    private string wifiOnIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'><path d='M0 0h24v24H0z' fill='none'/><path d='M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z'/></svg>";
    private string wifiOffIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'><path d='M0 0h24v24H0z' fill='none'/><path d='M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zm-6.6 8.22L3.27 1.44 2 2.72l2.05 2.06C1.91 5.76.59 6.82.36 7l11.63 14.49.01.01.01-.01 3.9-4.86 3.32 3.32 1.27-1.27-3.46-3.46z'/></svg>";

    private IgbIcon iconRef;
    private IgbBanner bannerRef;
    private IgbToast toastRef;
    private bool wifiState = false;
    private string message = "";
    private string iconName = "signal_wifi_off";

    protected override void OnAfterRender(bool firstRender)
    {
        if (this.iconRef != null && firstRender)
        {
            this.iconRef.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.iconRef.RegisterIconFromText("signal_wifi_off", wifiOffIcon, "material");
                this.iconRef.RegisterIconFromText("signal_wifi_4_bar", wifiOnIcon, "material");
            }));
        }

        if (this.bannerRef != null && firstRender)
        {
            this.bannerRef.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.bannerRef.ShowAsync();
            }));
        }

    }

    private void HideBanner()
    {
        this.bannerRef.HideAsync();
    }

    private void RefreshBanner()
    {
        if (!this.wifiState)
        {
            this.iconName = "signal_wifi_4_bar";
            this.bannerRef.HideAsync();
        }
        else
        {
            this.iconName = "signal_wifi_off";
            this.bannerRef.ShowAsync();
        }

        this.wifiState = !this.wifiState;
        this.ShowToast();
    }

    private void ShowToast()
    {
        this.toastRef.Open = false;
        this.message = $"Wifi is now {(this.wifiState ? "on" : "off")}";
        this.toastRef.ShowAsync();
    }
}
```

## API References

- [`IgbBanner`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBanner.html)
- [`IgbCard`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCard.html)
- [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html)
- [`IgbNavbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNavbar.html)
- [`IgbToast`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToast.html)
- [`IgbRipple`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRipple.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
