---
title: Blazor Toast Notifications | Ignite UI for Blazor
_description: With Ignite UI for Blazor Toast component, developers can easily integrate a brief, single-line message within mobile and desktop applications. Try it Now
_keywords: Ignite UI for Blazor, UI controls, Blazor widgets, web widgets, UI widgets, Blazor, Native Blazor Components Suite, Native Blazor Controls, Native Blazor Components Library, Blazor Toast components
_license: MIT
mentionedTypes: ["Toast"]
_tocName: Toast
---

# Blazor Toast Overview

The Blazor Toast is a super lightweight and small pop-up component that is used for displaying a message content, notifying end-users about the status of a changed record. You can easily position and show Blazor toast notifications at the bottom or at any other specified area of the screen. Or you can also dismiss them in a simple and easy way.

The Blazor Toast component is primarily used for system messaging, push notifications, warning messages, and information. It cannot be dismissed by the user. This control has different features like animation effects, display time property to configure how long the toast component is visible, styling, and others.

## Blazor Toast Example

Take a look at the simple Ignite UI for Blazor Toast example below. The animated notification message pops up after clicking on the button.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbButton @onclick=@OnToastButtonClick Variant=@ButtonVariant.Contained>Show Toast</IgbButton>
    <IgbToast @ref="ToastRef">Toast Message</IgbToast>
</div>

@code {

    public IgbToast ToastRef { get; set; }

    public void OnToastButtonClick(MouseEventArgs args)
    {
        if(this.ToastRef != null)
        {
            this.ToastRef.ShowAsync();
        }
    }
}
```

<div class="divider--half"></div>

### How To Use Ignite UI for Blazor Toast Notification

Before using the Blazor [`IgbToast`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToast.html), you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbToastModule));
```

For a complete introduction to the Ignite UI for Blazor, read the [**Getting Started**](../general-getting-started.md) topic.

You will also need to link an additional CSS file to apply the styling to the [`IgbCalendar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

The simplest way to display the toast component is to use its [`Show`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBaseAlertLike.html#IgniteUI_Blazor_Controls_IgbBaseAlertLike_Show) method and call it on a button click.

```razor
<IgbButton @onclick=@OnToastButtonClick Variant=@ButtonVariant.Contained>Show Toast</IgbButton>
<IgbToast @ref="ToastRef">Toast Message</IgbToast>

@code {
    public IgbToast ToastRef { get; set; }

    protected override void OnInitialized()
    {
    }

    public void OnToastButtonClick(MouseEventArgs args)
    {
        if (this.ToastRef != null)
        {
            this.ToastRef.Show();
        }
    }
}
```

## Examples

### Properties

Use the [`DisplayTime`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBaseAlertLike.html#IgniteUI_Blazor_Controls_IgbBaseAlertLike_DisplayTime) property to configure how long the toast component is visible. By default, it's set to 4000 milliseconds.

By default, the toast component is hidden automatically after a period specified by the [`DisplayTime`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBaseAlertLike.html#IgniteUI_Blazor_Controls_IgbBaseAlertLike_DisplayTime). You can use [`KeepOpen`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBaseAlertLike.html#IgniteUI_Blazor_Controls_IgbBaseAlertLike_KeepOpen) property to change this behavior. In this way, the toast will remain visible.

```razor
<IgbButton @onclick=@OnToggleToastButtonClick Variant="ButtonVariant.Contained">Toggle Toast</IgbButton>
<IgbButton @onclick=@OnToggleKeepOpenButtonClick Variant="ButtonVariant.Contained">Toggle KeepOpen Property</IgbButton>
<IgbButton @onclick=@OnDisplayTimeButtonClick Variant="ButtonVariant.Contained">Set DisplayTime to 8000</IgbButton>

<IgbToast @ref=ToastRef>Toast Message</IgbToast>

@code {
    public IgbToast ToastRef{  get;  set; }

    protected override void OnInitialized()
    {
    }

    public void OnToggleToastButtonClick(MouseEventArgs args)
    {
        if (this.ToastRef != null)
        {
            this.ToastRef.Toggle();
        }
    }

    public void OnToggleKeepOpenButtonClick(MouseEventArgs args)
    {
        if (this.ToastRef != null)
        {
            this.ToastRef.KeepOpen = !this.ToastRef.KeepOpen;
        }
    }

    public void OnDisplayTimeButtonClick(MouseEventArgs args)
    {
        if (this.ToastRef != null)
        {
            this.ToastRef.DisplayTime = 8000;
        }
    }
}
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <style>
        .buttonContainer {
            display: flex;
            justify-content: space-evenly;
            margin-top: 20px;
        }
    </style>

    <div class="buttonContainer">
        <IgbButton @onclick=@OnToggleToastButtonClick Variant="ButtonVariant.Contained">Toggle Toast</IgbButton>
        <IgbButton @onclick=@OnToggleKeepOpenButtonClick Variant="ButtonVariant.Contained">Toggle KeepOpen Property</IgbButton>
        <IgbButton @onclick=@OnDisplayTimeButtonClick Variant="ButtonVariant.Contained">Set DisplayTime to 8000</IgbButton>
    </div>

    <IgbToast @ref=ToastRef>Toast Message</IgbToast>

</div>

@code {

    public IgbToast ToastRef { get; set; }

    public void OnToggleToastButtonClick(MouseEventArgs args)
    {
        if(this.ToastRef != null)
        {
            this.ToastRef.ToggleAsync();
        }
    }

    public void OnToggleKeepOpenButtonClick(MouseEventArgs args)
    {
        if(this.ToastRef != null)
        {
            this.ToastRef.KeepOpen = !this.ToastRef.KeepOpen;
        }
    }

    public void OnDisplayTimeButtonClick(MouseEventArgs args)
    {
        if(this.ToastRef != null)
        {
            this.ToastRef.DisplayTime = 8000;
        }
    }
}
```

## Styling

You can style the Blazor [`IgbToast`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToast.html) notifications directly using its tag selector:

```css
igc-toast {
  background-color: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
}
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">

    <style>
        igc-toast {
            background: #011627;
            color: #ECAA53;
            outline-color: #ECAA53;
        }
    </style>

    <IgbButton @onclick=@OnToastButtonClick Variant="ButtonVariant.Contained">Show Styled Toast</IgbButton>
    <IgbToast @ref=ToastRef>Styled Toast</IgbToast>
</div>

@code {

    public IgbToast ToastRef { get; set; }

    public void OnToastButtonClick(MouseEventArgs args)
    {
        if(this.ToastRef != null)
        {
            this.ToastRef.ShowAsync();
        }
    }
}
```

<div class="divider--half"></div>

## API References

- [`IgbCalendar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html)
- [`DisplayTime`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBaseAlertLike.html#IgniteUI_Blazor_Controls_IgbBaseAlertLike_DisplayTime)
- [`KeepOpen`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBaseAlertLike.html#IgniteUI_Blazor_Controls_IgbBaseAlertLike_KeepOpen)
- [`Show`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBaseAlertLike.html#IgniteUI_Blazor_Controls_IgbBaseAlertLike_Show)
- [`IgbToast`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToast.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
