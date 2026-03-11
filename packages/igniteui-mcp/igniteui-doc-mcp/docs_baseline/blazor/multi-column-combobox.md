---
title: Blazor Combo | Data Visualization Tools | Infragistics
_description: Infragistics' Blazor combo component helps you select the best chart to display your data. Improve your graphs and visualization with Ignite UI for  Blazor!
_keywords: Blazor combo, drop down, Ignite UI for Blazor, Infragistics
mentionedTypes: []
_tocName: Multi-Column Combo Box
_premium: true
---

# Blazor Multi-Column Combo Box Overview

The Multi-Column Combo Box automatically generates columns for properties on the data object. This component is unique in that it's a combo box that visualizes large amounts of data similar to a data grid embedded in the dropdown.

## Blazor Multi-Column Combo Box Example

This sample demonstrates how to create [`IgbMultiColumnComboBox`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMultiColumnComboBox.html) that displays data in multiple columns in a popup window.

```razor
@using IgniteUI.Blazor.Controls


    <div class="container vertical">
        <div class="container vertical">
            @if (CountryData != null)
            {
                <IgbMultiColumnComboBox Height="50px" Width="400px"
                    DataSource="CountryData"
                    Fields="DisplayFields"
                    TextField="Country"
                    Placeholder="Choose a country"
                    DefaultColumnWidth="200"/>
            }
        </div>
    </div>

@code {

    protected List<ComboBoxItem> CountryData;
    protected string[] DisplayFields = new string[] { "Country", "Pop", "Continent" };

    protected override void OnInitialized()
    {
        this.CountryData = SampleComboData.Create();
    }
}
```


## Component Modules

The Multi-Column Combo Box requires the following modules:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(
    typeof(IgbMultiColumnComboBoxModule));
```

## Usage

### Binding a Data Source

In order to display your objects in the Multi-Column Combo Box component, you will need to bind the `DataSource` property. This can be bound in the form of an array of complex objects. The following code demonstrates how to bind the data source property.

```razor
<IgbMultiColumnComboBox Height="50px" Width="400px" DataSource="CountryNames" />

@code {
    protected List<CountryInfo> CountryNames;

    protected override void OnInitialized()
    {
        this.CountryNames = CountryTreeData.Create();
    }
}
```

### Setting Display Value and Data Value

You can configure different properties of the Multi-Column Combo Box's bound `DataSource` to act as the display text for the control as well as the underlying value when a selection is made. This is done by setting the [`TextField`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMultiColumnComboBox.html#IgniteUI_Blazor_Controls_IgbMultiColumnComboBox_TextField) and [`ValueField`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMultiColumnComboBox.html#IgniteUI_Blazor_Controls_IgbMultiColumnComboBox_ValueField) properties of the control, respectively, to the name of the property on the data item that you want to represent these things.

<!-- Blazor -->

If the value of the component needs to be updated programmatically, the `ValueChanged` event needs to be handled. The `GetValue` and `GetValueAsync` methods can be used to get the value when not within the `ValueChanged` event handler.

```razor
<IgbMultiColumnComboBox Height="50px" Width="400px"
                     DataSource="CountryNames"
                     TextField="Country"
                     ValueField="@(new string[]{ "ID" })" />

@code {
    protected List<CountryInfo> CountryNames;

    protected override void OnInitialized()
    {
        this.CountryNames = CountryTreeData.Create();
    }
}
```

### Setting Fields

By default, the Multi-Column Combo Box will show all of the properties on the underlying data item, but this can be controlled by setting the [`Fields`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMultiColumnComboBox.html#IgniteUI_Blazor_Controls_IgbMultiColumnComboBox_Fields) property on the component. This property takes a `string[]` of property paths on the underlying data item to determine which properties are shown.

The following code snippet shows how to set this, and the resulting drop-down would only show the ID and Country columns:

```razor
<IgbMultiColumnComboBox Height="50px" Width="400px"
                     DataSource="CountryNames"
                     Fields="@(new string[] { "ID", "Country" })" />

@code {
    protected List<CountryInfo> CountryNames;

    protected override void OnInitialized()
    {
        this.CountryNames = CountryTreeData.Create();
    }
}
```

### Setting Placeholder Text

It is possible to configure the text that shows as a placeholder for when there is no selection in the Multi-Column Combo Box component. This is done by setting the [`Placeholder`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMultiColumnComboBox.html#IgniteUI_Blazor_Controls_IgbMultiColumnComboBox_Placeholder) property to the string you would like to be displayed. The following code demonstrates how to set this:

```razor
<IgbMultiColumnComboBox Height="50px" Width="400px"
                     DataSource="CountryNames"
                     Placeholder="Please choose a country" />

@code {
    protected List<CountryInfo> CountryNames;

    protected override void OnInitialized()
    {
        this.CountryNames = CountryTreeData.Create();
    }
}
```

### Configuring Sorting Mode

The user has the ability to sort the columns that are displayed in the Multi-Column Combo Box by clicking the header of the column in the drop-down. The way the sorting is configured can be modified as well, as the columns can be sorted by only a single column or multiple columns, and they can be limited to either ascending and descending, or they can be tri-state. This is done by setting the [`SortMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMultiColumnComboBox.html#IgniteUI_Blazor_Controls_IgbMultiColumnComboBox_SortMode) property of the component.

Note, the TriState sort options will allow sorted columns to be unsorted.

The following code demonstrates how to set the Multi-Column Combo Box to be able to sort by multiple columns tri-state.

```razor
<IgbMultiColumnComboBox Height="50px" Width="400px"
                     DataSource="CountryNames"
                     SortMode="SortMode.SortByMultipleColumnsTriState" />

@code {
    protected List<CountryInfo> CountryNames;

    protected override void OnInitialized()
    {
        this.CountryNames = CountryTreeData.Create();
    }
}
```

## API References

- `DataSource`
- [`Fields`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMultiColumnComboBox.html#IgniteUI_Blazor_Controls_IgbMultiColumnComboBox_Fields)
- `GetValueAsync`
- `GetValue`
- [`IgbMultiColumnComboBox`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMultiColumnComboBox.html)
- [`Placeholder`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMultiColumnComboBox.html#IgniteUI_Blazor_Controls_IgbMultiColumnComboBox_Placeholder)
- [`SortMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMultiColumnComboBox.html#IgniteUI_Blazor_Controls_IgbMultiColumnComboBox_SortMode)
- [`TextField`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMultiColumnComboBox.html#IgniteUI_Blazor_Controls_IgbMultiColumnComboBox_TextField)
- `ValueChanged`
- [`ValueField`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMultiColumnComboBox.html#IgniteUI_Blazor_Controls_IgbMultiColumnComboBox_ValueField)
