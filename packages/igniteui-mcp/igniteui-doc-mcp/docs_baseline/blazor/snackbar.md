---
title: Blazor Snackbar | Infragistics
_description: With Ignite UI for Blazor Snackbar component, developers can easily integrate a brief, single-line message within mobile and desktop applications.
_keywords: Ignite UI for Blazor, UI controls, Blazor widgets, web widgets, UI widgets, Blazor, Native Blazor Components Suite, Native Blazor Controls, Native Blazor Components Library, Blazor Snackbar components
_license: MIT
mentionedTypes: ["Snackbar"]
_tocName: Snackbar
---

# Blazor Snackbar

The Ignite UI for Blazor Snackbar component is used to provide feedback about an operation by showing a brief message at the bottom of the screen.

## Ignite UI for Blazor Snackbar Example

This sample demonstrates how to create [`IgbSnackbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSnackbar.html) component.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbButton onclick="snackbar.show()">Show Snackbar</IgbButton>
    <IgbSnackbar id="snackbar"> Snackbar Message </IgbSnackbar>
</div>

@code {

}
```


<div class="divider--half"></div>

### Usage

Before using the [`IgbSnackbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSnackbar.html), you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbSnackbarModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbSnackbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSnackbar.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

For a complete introduction to the Ignite UI for Blazor, read the [**Getting Started**](../general-getting-started.md) topic.

The simplest way to display the snackbar component is to use its [`Show`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBaseAlertLike.html#IgniteUI_Blazor_Controls_IgbBaseAlertLike_Show) method and call it on a button click.

```razor
<div class="container vertical">
    <IgbButton onclick="snackbar.show()">Show Snackbar</IgbButton>
    <IgbSnackbar id="snackbar"> Snackbar Message </IgbSnackbar>
</div>
```

## Examples

### Display Time

Use the [`DisplayTime`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBaseAlertLike.html#IgniteUI_Blazor_Controls_IgbBaseAlertLike_DisplayTime) property to configure how long the snackbar component is visible. By default, it's set to 4000 milliseconds.

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample vertical">
    <div class="button-container">
        <IgbCheckbox Change=OnChange2>Increase Display Time</IgbCheckbox>
        <IgbButton onclick="snackbar1.show()" >Show Snackbar</IgbButton>
        <IgbSnackbar @ref="ToggleSnackbarRef" id="snackbar1" KeepOpen="false"> @SnackbarDisplayText </IgbSnackbar>
    </div>
</div>

@code {
    public string SnackbarDisplayText { get; set; } = "Hello there!";

    private IgbSnackbar snackbar1;
    public IgbSnackbar ToggleSnackbarRef
    {
        get { return snackbar1; }
        set {
            snackbar1 = value; StateHasChanged();
            snackbar1.DisplayTime = 1000;
        }
    }

    private void OnChange2(IgbCheckboxChangeEventArgs e)
    {
        if(snackbar1.DisplayTime != 5000)
        {
            snackbar1.DisplayTime = 5000;
            this.SnackbarDisplayText = "Displaying for 5 seconds...";
        }
        else
        {
            snackbar1.DisplayTime = 1000;
            this.SnackbarDisplayText = "Hello there!";
        }
    }
}
```


### Action Text

By default, the snackbar component is hidden automatically after a period specified by the [`DisplayTime`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBaseAlertLike.html#IgniteUI_Blazor_Controls_IgbBaseAlertLike_DisplayTime). You can use [`KeepOpen`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBaseAlertLike.html#IgniteUI_Blazor_Controls_IgbBaseAlertLike_KeepOpen) property to change this behavior. In this way, the snackbar will remain visible. Using the snackbar [`ActionText`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSnackbar.html#IgniteUI_Blazor_Controls_IgbSnackbar_ActionText) you can display an action button inside the component.

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample vertical">
    <div class="button-container">
        <IgbButton onclick="snackbar1.show()">Show Snackbar</IgbButton>
        <IgbButton onclick="snackbar1.hide()">Hide Snackbar</IgbButton>

        <IgbSnackbar @ref="ToggleSnackbarRef" id="snackbar1" KeepOpen="true" ActionText="Close" Action=OnActionClick> @SnackbarDisplayText </IgbSnackbar>
    </div>
</div>

@code {
    public string SnackbarDisplayText { get; set; } = "Hello there!";

    private IgbSnackbar snackbar1;
    public IgbSnackbar ToggleSnackbarRef
    {
        get { return snackbar1; }
        set {
            snackbar1 = value;
            StateHasChanged();
        }
    }

    private void OnActionClick(IgbVoidEventArgs e)
    {
        this.ToggleSnackbarRef.Hide();
    }
}
```


## Styling

The [`IgbSnackbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSnackbar.html) component exposes several CSS parts to give you full control over its styling:

|Name|Description|
|--|--|
| `base` | The base wrapper of the snackbar component. |
| `message` | The snackbar message. |
| `action` | The default snackbar action button. |
| `action-container` | The area holding the actions. |

```css
igc-snackbar::part(base) {
  background: var(--ig-primary-500);
  border-color: var(--ig-primary-800);
  color: white;
}
```

```razor
@using IgniteUI.Blazor.Controls


<style>
    igc-snackbar::part(base) {
    background: #0d6efd;
    border-color: #0d6efd;
    color: white;
}
</style>
<div class="container vertical">
    <IgbButton onclick="snackbar.show()">Show Snackbar</IgbButton>
    <IgbSnackbar id="snackbar"> Snackbar Message </IgbSnackbar>
</div>

@code {


}
```


<div class="divider--half"></div>

## API References

- [`ActionText`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSnackbar.html#IgniteUI_Blazor_Controls_IgbSnackbar_ActionText)
- [`DisplayTime`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBaseAlertLike.html#IgniteUI_Blazor_Controls_IgbBaseAlertLike_DisplayTime)
- [`KeepOpen`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBaseAlertLike.html#IgniteUI_Blazor_Controls_IgbBaseAlertLike_KeepOpen)
- [`Show`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBaseAlertLike.html#IgniteUI_Blazor_Controls_IgbBaseAlertLike_Show)
- [`IgbSnackbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSnackbar.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
