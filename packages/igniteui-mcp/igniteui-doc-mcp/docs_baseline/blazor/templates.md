---
title: Blazor ComboBox Component Templates – Ignite UI for Blazor
_description: Ignite UI for Blazor ComboBox component templates
_keywords: Ignite UI for Blazor, UI controls, Blazor widgets, web widgets, UI widgets, Blazor, Native Blazor Components Suite, Native Blazor Controls, Native Blazor Components Library, Blazor ComboBox Component Templates
_license: MIT
mentionedTypes: ["Combo"]
_tocName: Templates
---

# Blazor ComboBox Templates

The Ignite UI for Blazor ComboBox component allows defining custom templates for different areas such as items, group headers, empty list, and icons.

## ComboBox Templates Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample center">
    <IgbCombo 
        T="string"
        Data="Data" 
        ValueKey="Id" 
        DisplayKey="Name"
        GroupKey="Country"
        ItemTemplateScript="ComboItemTemplate"
        GroupHeaderTemplateScript="ComboGroupHeaderTemplate">
        <header slot="header">
            Header content goes here
        </header>
        <IgbIcon @ref="@iconRef" name="clear" slot="clear-icon"></IgbIcon>
        <IgbIcon name="down" slot="toggle-icon"></IgbIcon>
        <footer slot="footer">
            Footer content goes here
        </footer>
    </IgbCombo>
</div>

@code {
    private List<City> Data;
    private IgbIcon iconRef { get; set; }
    private string toggleIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M7 10l5 5 5-5z'/></svg>";
    private string clearIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>";

    protected override void OnInitialized() {
        this.Data = SampleData.Cities;
    }

    protected override void OnAfterRender(bool firstRender) {
        if (firstRender) {
            this.iconRef.EnsureReady().ContinueWith(new Action<Task>((e) => {
                this.iconRef.RegisterIconFromTextAsync("down", toggleIcon, "default");
                this.iconRef.RegisterIconFromTextAsync("clear", clearIcon, "default");
            }));
        }
    }
}
```


## Template Types

### Item Template

The [`ItemTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_ItemTemplate) is a custom template that if defined should be used when rendering items in the list of options.

To template your items in a Blazor app, you need to define a template in a separate JavaScript file. Let's create a new file under the `wwwroot` directory called `templates.js`.

In this file we can declare a new item template like so:

Make sure to include the `templates.js` file in the `index.html` under `wwwroot`.

Then in our application we can refer to the template we declared via the `ItemTemplateScript` property.

```razor
<IgbCombo ItemTemplateScript="ComboItemTemplate"></IgbCombo>
```

### Group Header Template

The [`GroupHeaderTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_GroupHeaderTemplate) is a custom template that if defined should be used when rendering group headers in the list of options.

First define the group header template:

Then in our application we can refer to the template we declared via the `GroupHeaderTemplateScript` property.

```razor
<IgbCombo GroupHeaderTemplateScript="ComboGroupHeaderTemplate"></IgbCombo>
```

## Slots

Other than custom templates, the Ignite UI for Blazor ComboBox component exposes several slots that allow users to pass custom content to different combo parts.

### Header Slot

To render a custom header above the list of options pass content to the `header` slot:

```razor
<IgbCombo>
    <header slot="header">
        Header content goes here
    </header>
</IgbCombo>
```

### Footer Slot

To render a custom footer below the list of options pass content to the `footer` slot:

```razor
<IgbCombo>
    <footer slot="footer">
        Footer content goes here
    </footer>
</IgbCombo>
```

### Empty List Slot

To render a custom content when the filtering operation returns no result, use the `empty` slot:

```razor
<IgbCombo>
    <div slot="empty">¯\_(ツ)_/¯</div>
</IgbCombo>
```

### Toggle Icon Slot

The toggle icon in the combo input can also be modified via the `toggle-icon` slot:

```razor
<IgbCombo>
    <IgbIcon name="down" slot="toggle-icon"></IgbIcon>
</IgbCombo>
```

### Clear Icon Slot

The clear icon can be changed via the `clear-icon` slot:

```razor
<IgbCombo>
    <IgbIcon name="clear" slot="clear-icon"></IgbIcon>
</IgbCombo>
```

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
