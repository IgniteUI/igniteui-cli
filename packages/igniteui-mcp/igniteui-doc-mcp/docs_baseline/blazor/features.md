---
title: Blazor ComboBox Component – Ignite UI for Blazor
_description: Ignite UI for Blazor ComboBox Component Features
_keywords: Ignite UI for Blazor, UI controls, Blazor widgets, web widgets, UI widgets, Blazor, Native Blazor Components Suite, Native Blazor Controls, Native Blazor Components Library, Blazor ComboBox Component Features
_license: MIT
mentionedTypes: ["Combo", "ComboList", "ComboItem"]
_tocName: Features
---

# Blazor ComboBox Features

The Ignite UI for Blazor ComboBox component exposes several features such as filtering and grouping.

## Combobox Features Example

The following demo shows some [`IgbCombo`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html) features that are enabled/disabled at runtime:

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample center">
    <style>
        .options {
            display: flex;
            flex-direction: column;
            margin-top: 12px; 
            gap: 8px;
        }
    </style>

    <IgbCombo 
        T="string"
        Label="Cities" 
        Placeholder="Pick a city" 
        Data="Data" 
        ValueKey="Id" 
        DisplayKey="Name"
        DisableFiltering="@DisableFiltering"
        CaseSensitiveIcon="@CaseSensitiveIcon"
        GroupKey="@Group"
        Disabled="@Disabled">
    </IgbCombo>

    <div class="options">
        <IgbSwitch Change="@OnDisableFilteringClick">Disable Filtering</IgbSwitch>
        <IgbSwitch Change="@OnCaseSensitiveClick" Disabled="@DisableFiltering">Show Case-sensitive Icon</IgbSwitch>
        <IgbSwitch Change="@OnGroupClick">Enable Grouping</IgbSwitch>
        <IgbSwitch Change="@OnDisableClick">Disable Combo</IgbSwitch>
    </div>
</div>

@code {
    private List<City> Data;
    private bool DisableFiltering = false;
    private bool CaseSensitiveIcon = false;
    private string Group = "";
    private bool Disabled = false;

    protected override void OnInitialized() {
        this.Data = SampleData.Cities;
    }

    public void OnDisableFilteringClick(IgbCheckboxChangeEventArgs e) {
        IgbSwitch sw = e.Parent as IgbSwitch;
        this.DisableFiltering = sw.Checked;
    }

    public void OnCaseSensitiveClick(IgbCheckboxChangeEventArgs e) {
        IgbSwitch sw = e.Parent as IgbSwitch;
        this.CaseSensitiveIcon = sw.Checked;
    }

    public void OnGroupClick(IgbCheckboxChangeEventArgs e) {
        IgbSwitch sw = e.Parent as IgbSwitch;
        this.Group = sw.Checked ? "Country" : "";
    }

    public void OnDisableClick(IgbCheckboxChangeEventArgs e) {
        IgbSwitch sw = e.Parent as IgbSwitch;
        this.Disabled = sw.Checked;
    }
}
```


In our sample we are going to use the [`IgbSwitch`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSwitch.html) component, so we have to import them together with the combo:

<!-- Blazor -->

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbComboModule));
builder.Services.AddIgniteUIBlazor(typeof(IgbSwitchModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbSwitch`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSwitch.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

```razor
<IgbCombo
    Label="Cities"
    Placeholder="Pick a city"
    Data="Data"
    ValueKey="Id"
    DisplayKey="Name"
    DisableFiltering="@DisableFiltering"
    CaseSensitiveIcon="@CaseSensitiveIcon"
    GroupKey="@Group"
    Disabled="@Disabled">
</IgbCombo>

<IgbSwitch Change="@OnDisableFilteringClick">Disable Filtering</IgbSwitch>
<IgbSwitch Change="@OnCaseSensitiveClick" Disabled="@DisableFiltering">Show Case-sensitive Icon</IgbSwitch>
<IgbSwitch Change="@OnGroupClick">Enable Grouping</IgbSwitch>
<IgbSwitch Change="@OnDisableClick">Disable Combo</IgbSwitch>

@code {
    private bool DisableFiltering = false;
    private bool CaseSensitiveIcon = false;
    private bool Disabled = false;

    public void OnDisableFilteringClick(IgbComponentBoolValueChangedEventArgs e) {
        IgbSwitch sw = e.Parent as IgbSwitch;
        this.DisableFiltering = sw.Checked;
    }

    public void OnCaseSensitiveClick(IgbComponentBoolValueChangedEventArgs e) {
        IgbSwitch sw = e.Parent as IgbSwitch;
        this.CaseSensitiveIcon = sw.Checked;
    }

    public void OnDisableClick(IgbComponentBoolValueChangedEventArgs e) {
        IgbSwitch sw = e.Parent as IgbSwitch;
        this.Disabled = sw.Checked;
    }
}
```

Note that grouping is enabled/disabled by setting the [`GroupKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_GroupKey) property to a corresponding data source field:

```razor
@code {
    private string Group = "";

    public void OnGroupClick(IgbComponentBoolValueChangedEventArgs e) {
        IgbSwitch sw = e.Parent as IgbSwitch;
        this.Group = sw.Checked ? "Country" : "";
    }
}
```

## Features

### Filtering

By default, filtering in the ComboBox is enabled. It can be disabled by setting the [`DisableFiltering`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_DisableFiltering) property.

Filtering options can be further enhanced by enabling the search case sensitivity. The case-sensitive icon can be turned on using the [`CaseSensitiveIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_CaseSensitiveIcon) property so that end-users can control the case sensitivity.

```razor
<IgbCombo DisableFiltering="true" CaseSensitiveIcon="true" />
```

#### Filtering Options

The Ignite UI for Blazor [`IgbCombo`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html) exposes one more filtering property that allows passing configuration of both `FilterKey` and `CaseSensitive` options. The `FilterKey` indicates which data source field should be used for filtering the list of options. The `CaseSensitive` option indicates if the filtering should be case-sensitive or not.

The following code snippet shows how to filter the cities from our data source by country instead of name. We are also making the filtering case-sensitive by default:

### Grouping

Defining a [`GroupKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_GroupKey) option will group the items, according to the provided key:

```razor
<IgbCombo GroupKey="region" />
```

> \[!Note]
> The [`GroupKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_GroupKey) property will only have effect if your data source consists of complex objects.

#### Sorting Direction

The ComboBox component also exposes an option for setting whether groups should be sorted in ascending or descending order. By default, the sorting order is ascending:

```razor
<IgbCombo GroupSorting="desc" />
```

### Label

The [`IgbCombo`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html) label can be set easily using the [`Label`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_Label) property:

```razor
<IgbCombo Label="Cities" />
```

### Placeholder

A placeholder text can be specified for both the ComboBox component input and the search input placed inside the dropdown menu:

```razor
<IgbCombo Placeholder="Pick a city" PlaceholderSearch="Search for a city" />
```

### Autofocus

If you want your ComboBox to be automatically focused on page load you can use the following code:

```razor
<IgbCombo Autofocus="true" />
```

### Search Input Focus

The ComboBox search input is focused by default. To disable this feature and move the focus to the list of options use the [`AutofocusList`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_AutofocusList) property as shown below:

```razor
<IgbCombo AutofocusList="true" />
```

### Required

The ComboBox can be marked as required by setting the required property.

```razor
<IgbCombo Required="true" />
```

### Disable ComboBox

You can disable the ComboBox using the [`Disabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_Disabled) property:

```razor
<IgbCombo Disabled="true" />
```

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
