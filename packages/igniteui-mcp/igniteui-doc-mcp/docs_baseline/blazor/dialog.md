---
title: Blazor Dialog | Infragistics
_description: With Ignite UI for Blazor Dialog component, developers can easily integrate a dialog window centered on top of app content.
_keywords: Ignite UI for Blazor, UI controls, Blazor widgets, web widgets, UI widgets, Blazor, Native Blazor Components Suite, Native Blazor Controls, Native Blazor Components Library, Blazor Dialog components
_license: MIT
mentionedTypes: ["Dialog"]
_tocName: Dialog
---

# Blazor Dialog Overview

The Ignite UI for Blazor Dialog component is used to display some information or prompt the user for an action or confirmation. It is shown in a modal window, which means that the user is not allowed to interact with the main app until a certain action is performed that closes the dialog.

## Ignite UI for Blazor Dialog Example

This sample demonstrates how to create a Dialog component in Blazor.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <IgbButton @onclick="OnDialogShow" Variant=@ButtonVariant.Contained>Show Dialog</IgbButton>
    <IgbDialog @ref="DialogRef" Title="Confirmation">
        <p>Are you sure you want to delete the Annual_Report_2016.pdf and Annual_Report_2017.pdf files?</p>
        <IgbButton slot="footer" @onclick="OnDialogHide" Variant=@ButtonVariant.Flat>Cancel</IgbButton>
        <IgbButton slot="footer" @onclick="OnDialogHide" Variant=@ButtonVariant.Flat>OK</IgbButton>
    </IgbDialog>
</div>

@code {
    public IgbDialog DialogRef;

    public async Task OnDialogShow()
    {
        if (this.DialogRef != null)
        {
            await this.DialogRef.ShowAsync();
        }
    }

    public async Task OnDialogHide()
    {
        if (this.DialogRef != null)
        {
            await this.DialogRef.HideAsync();
        }
    }
}
```


<div class="divider--half"></div>

### Usage

For a complete introduction to the Ignite UI for Blazor, read the [**Getting Started**](../general-getting-started.md) topic.

Before using the Blazor [`IgbDialog`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDialog.html), you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbDialogModule));
```

The simplest way to display the dialog component is to use its [`Show`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDialog.html#IgniteUI_Blazor_Controls_IgbDialog_Show) method and call it on a button click.

```razor
<div class="container vertical">
    <IgbButton @onclick="OnDialogShow" Variant=@ButtonVariant.Contained>Show Dialog</IgbButton>
    <IgbDialog @ref="DialogRef" Title="Confirmation">
        <p>Are you sure you want to delete the Annual_Report_2016.pdf and Annual_Report_2017.pdf files?</p>
        <IgbButton slot="footer" @onclick="OnDialogHide" Variant=@ButtonVariant.Flat>Cancel</IgbButton>
        <IgbButton slot="footer" @onclick="OnDialogHide" Variant=@ButtonVariant.Flat>OK</IgbButton>
    </IgbDialog>
</div>

@code {
    public IgbDialog DialogRef;
    public async Task OnDialogShow()
    {
        if (this.DialogRef != null)
            await this.DialogRef.ShowAsync();
    }
    public async Task OnDialogHide()
    {
        if (this.DialogRef != null)
            await this.DialogRef.HideAsync();
    }
}
```

The Dialog component provides an [`Open`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDialog.html#IgniteUI_Blazor_Controls_IgbDialog_Open) property, which gives you the ability to configure its state as per your application scenario.

Use the [`Title`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDialog.html#IgniteUI_Blazor_Controls_IgbDialog_Title) property to set the title of the dialog. However, if any content is provided in the `title` slot, it will take precedence over the property.

Action buttons or additional information can be placed in the bottom part of the dialog via the `footer` slot. If no content is added there, a default `OK` button will be shown that closes the Dialog when clicked. In case you do not want this button to be shown you can set the [`HideDefaultAction`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDialog.html#IgniteUI_Blazor_Controls_IgbDialog_HideDefaultAction) property to **true**. The default value is **false**.

### Closing

By default, the Dialog is closed automatically when the user presses `ESC`. You could prevent this behavior using the [`KeepOpenOnEscape`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDialog.html#IgniteUI_Blazor_Controls_IgbDialog_KeepOpenOnEscape) property. The default value is **false**. If there is an open dropdown (or any other element that should handle `ESC` internally) in the dialog, pressing `ESC` once will close the dropdown and pressing it again will close the dialog.

Use the [`CloseOnOutsideClick`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDialog.html#IgniteUI_Blazor_Controls_IgbDialog_CloseOnOutsideClick) property to configure if the dialog should be closed when clicking outside of it. The default value is **false**.

### Form

Form elements can close a Dialog if they have the attribute `method="dialog"`. Submitting the form will trigger the closing of the dialog.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <IgbButton @onclick="OnDialogShow" Variant=@ButtonVariant.Contained>Show Dialog</IgbButton>
    <IgbDialog @ref="DialogRef" Title="Login">
        <form id="form" method="dialog">
            <IgbInput Label="Username">
                <span slot="prefix">
                    <IgbIcon @ref="@UsernameIconRef" IconName="username" Collection="material"></IgbIcon>
                </span>
            </IgbInput>
            <br>
            <IgbInput type="password" Label="Password">
                <span slot="prefix">
                    <IgbIcon @ref="@PasswordIconRef" IconName="password" Collection="material"></IgbIcon>
                </span>
            </IgbInput>
            <br>
            <div style="display: flex; justify-content: flex-end;">
                <IgbButton DisplayType="ButtonBaseType.Reset" Variant=@ButtonVariant.Flat>Reset</IgbButton>
                <IgbButton DisplayType="ButtonBaseType.Submit" Variant=@ButtonVariant.Flat>Submit</IgbButton>
            </div>
        </form>

        <div slot="footer">
            <igc-button>Create an account</igc-button>
        </div>
    </IgbDialog>
</div>

@code {
    private IgbIcon UsernameIconRef { get; set; }
    private IgbIcon PasswordIconRef { get; set; }

    public IgbDialog DialogRef;

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && this.UsernameIconRef != null)
        {
            await this.UsernameIconRef.EnsureReady();
            string usernameIcon = "<svg width='24px' height='24px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z'/></svg>";
            await this.UsernameIconRef.RegisterIconFromTextAsync("username", usernameIcon, "material");
        }

        if (firstRender && this.PasswordIconRef != null)
        {
            await this.PasswordIconRef.EnsureReady();
            string passwordIcon = "<svg width='24px' height='24px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M13.0151 13.6556C14.8093 14.3587 16.9279 13.9853 18.3777 12.5355C20.3304 10.5829 20.3304 7.41709 18.3777 5.46447C16.4251 3.51184 13.2593 3.51184 11.3067 5.46447C9.85687 6.91426 9.48353 9.03288 10.1866 10.8271M12.9964 13.6742L6.82843 19.8422L4.2357 19.6065L4 17.0138L10.168 10.8458M15.5493 8.31568V8.29289' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' /></svg>";
            await this.PasswordIconRef.RegisterIconFromTextAsync("password", passwordIcon, "material");
        }
    }

    public async Task OnDialogShow()
    {
        if (this.DialogRef != null)
        {
            await this.DialogRef.ShowAsync();
        }
    }
}
```


## Styling

The [`IgbDialog`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDialog.html) component exposes several CSS parts to give you full control over its style:

|Name|Description|
|--|--|
| `base` | The base wrapper of the dialog. |
| `title` | The title container. |
| `footer` | The footer container. |
| `content` | The content container. |

```css
igc-dialog::part(content) {
  background: var(--ig-secondary-800);
  color: var(--ig-secondary-800-contrast);
}

igc-dialog::part(title),
igc-dialog::part(footer) {
  background: var(--ig-secondary-800);
  color: var(--ig-warn-500);
}
```

```razor
@using IgniteUI.Blazor.Controls

<style>
    igc-dialog::part(content) {
        background: #011627;
        color: white;
    }

    igc-dialog::part(title),
    igc-dialog::part(footer) {
        background: #011627;
        color: #ECAA53;
    }
</style>

<div class="container vertical">
    <IgbButton @onclick="OnDialogShow" Variant=@ButtonVariant.Contained>Show Dialog</IgbButton>
    <IgbDialog @ref="DialogRef" Title="Confirmation">
        <p>Are you sure you want to delete the Annual_Report_2016.pdf and Annual_Report_2017.pdf files?</p>
        <IgbButton slot="footer" @onclick="OnDialogHide" Variant=@ButtonVariant.Flat>Cancel</IgbButton>
        <IgbButton slot="footer" @onclick="OnDialogHide" Variant=@ButtonVariant.Flat>OK</IgbButton>
    </IgbDialog>
</div>

@code {
    public IgbDialog DialogRef;

    public async Task OnDialogShow()
    {
        if (this.DialogRef != null)
        {
            await this.DialogRef.ShowAsync();
        }
    }

    public async Task OnDialogHide()
    {
        if (this.DialogRef != null)
        {
            await this.DialogRef.HideAsync();
        }
    }
}
```


<div class="divider--half"></div>

## API References

- [`KeepOpenOnEscape`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDialog.html#IgniteUI_Blazor_Controls_IgbDialog_KeepOpenOnEscape)
- [`CloseOnOutsideClick`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDialog.html#IgniteUI_Blazor_Controls_IgbDialog_CloseOnOutsideClick)
- [`Hide`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDialog.html#IgniteUI_Blazor_Controls_IgbDialog_Hide)
- [`HideDefaultAction`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDialog.html#IgniteUI_Blazor_Controls_IgbDialog_HideDefaultAction)
- [`Open`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDialog.html#IgniteUI_Blazor_Controls_IgbDialog_Open)
- [`Title`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDialog.html#IgniteUI_Blazor_Controls_IgbDialog_Title)
- [`IgbDialog`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDialog.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
