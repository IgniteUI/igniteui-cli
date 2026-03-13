---
title: Blazor Data Grid | Column Chooser | Infragistics
_description: Learn how Infragistics' Ignite UI for Blazor grid component supports the ability to show and hide columns directly through the UI or by using the Blazor control. View Ignite UI for Blazor table demos for more information!
_keywords: Blazor Table, Data Grid, column chooser, Ignite UI for Blazor, Infragistics
mentionedTypes: ["Grid", "DataGridColumn", "DataGridToolbar", "Button", "ColumnChooser", "ColumnHidingAnimationMode", "ColumnShowingAnimationMode", "ColumnChooserTitle"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: Column Chooser
_premium: true
---

<!-- Blazor, WebComponents -->

> \[!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

<!-- end: Blazor, WebComponents -->

# Blazor Grid Column Chooser Overview

The Ignite UI for Blazor Data Grid supports the ability show and hide columns with the UI through the [`IgbDataGridToolbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGridToolbar.html) component or by the [`ColumnChooser`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGridToolbar.html#IgniteUI_Blazor_Controls_IgbDataGridToolbar_ColumnChooser) component that provides flexibility to place it anywhere on the page. The [`IsHidden`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGridColumn.html#IgniteUI_Blazor_Controls_IgbDataGridColumn_IsHidden) property on the columns can also be used to quickly hide or show a single column programmatically for manual column generation, and the value of [`IsHidden`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGridColumn.html#IgniteUI_Blazor_Controls_IgbDataGridColumn_IsHidden) will reflect in the [`ColumnChooser`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGridToolbar.html#IgniteUI_Blazor_Controls_IgbDataGridToolbar_ColumnChooser) component. Each approach can be used interchangeably to change the visible state of the columns.

## Blazor Grid Column Chooser Example

```razor
@using IgniteUI.Blazor.Controls
@inject IJSRuntime JSRuntime;

<div class="container vertical">
    <div class="container vertical">
        @if (Data != null)
        {
            <IgbDataGridToolbar ToolbarTitle="Global Sales" ColumnChooser="true" TargetGrid="@DataGridRef"/>

            <IgbDataGrid Height="100%" Width="100%" @ref="DataGridRef"
                      DefaultColumnMinWidth="120"
                      DataSource="Data"
                      AutoGenerateColumns="false"
                      IsColumnOptionsEnabled="true">
                <IgbTextColumn Field="ID" HeaderText="ID" IsHidden="true" Width="90" HorizontalAlignment="@CellContentHorizontalAlignment.Center" />
                <IgbTextColumn Field="ProductName" HeaderText="Product" IsHidden="true" Width="@("*>120")" />
                <IgbImageColumn IsEditable="false" Field="CountryFlag" HeaderText="Country" Width="@("*>120")" PaddingTop="5" PaddingBottom="5" ContentOpacity="1" HorizontalAlignment="@CellContentHorizontalAlignment.Center" />
                <IgbNumericColumn Field="ProductPrice" HeaderText="Price" IsHidden="true" Width="@("*>110")" PositivePrefix="$" ShowGroupingSeparator="true" MinFractionDigits="2" />
                <IgbNumericColumn Field="OrderItems" HeaderText="Orders" Width="@("*>110")" />
                <IgbNumericColumn Field="OrderValue" HeaderText="Order Value" Width="@("*>150")" PositivePrefix="$" ShowGroupingSeparator="true" />
                <IgbDateTimeColumn Field="OrderDate" HeaderText="Order Date" Width="@("*>150")" HorizontalAlignment="@CellContentHorizontalAlignment.Right" DateTimeFormat="@DateTimeFormats.DateShort" />
                <IgbNumericColumn Field="Margin" HeaderText="Margin" Width="@("*>120")" PositiveSuffix="%" HorizontalAlignment="@CellContentHorizontalAlignment.Center" />
                <IgbNumericColumn Field="Profit" HeaderText="Profit" Width="@("*>120")" PositivePrefix="$" ShowGroupingSeparator="true" />
                <IgbTextColumn Field="Status" HeaderText="Status" Width="@("*>110")" HorizontalAlignment="@CellContentHorizontalAlignment.Center" />
            </IgbDataGrid>
        }
    </div>
</div>

@code {

    private IgbDataGrid _grid;
    public IgbDataGrid DataGridRef
    {
        get
        {
            return _grid;
        }
        set
        {
            _grid = value;
            StateHasChanged();
        }
    }

    private List<SaleInfo> Data;

    protected override void OnInitialized()
    {
        Data = SalesDataService.Create(100);
    }
}
```


<div class="divider--half"></div>

## Toolbar's Column Chooser UI

The Column Chooser UI is accessible within the [`IgbDataGridToolbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGridToolbar.html) component separate from the grid. For this purpose all we have to do is set the toolbar's [`ColumnChooser`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGridToolbar.html#IgniteUI_Blazor_Controls_IgbDataGridToolbar_ColumnChooser) property to true. The toolbar will then display a [`IgbButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButton.html), when clicked, will display the column chooser UI. This button also displays the total of hidden columns. If the toolbar is not created, enabling the [`ColumnChooser`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGridToolbar.html#IgniteUI_Blazor_Controls_IgbDataGridToolbar_ColumnChooser) property will have no effect and hide the button.

The [`IgbDataGridToolbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGridToolbar.html) provides additional properties such as adding a title to the toolbar by using the [`ToolbarTitle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGridToolbar.html#IgniteUI_Blazor_Controls_IgbDataGridToolbar_ToolbarTitle) property, placing text in the [`IgbButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButton.html) by setting the [`ColumnChooserText`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGridToolbar.html#IgniteUI_Blazor_Controls_IgbDataGridToolbar_ColumnChooserText) property, and adding a title header to the column chooser UI by setting [`ColumnChooserTitle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGridToolbar.html#IgniteUI_Blazor_Controls_IgbDataGridToolbar_ColumnChooserTitle).

The Column Chooser can be configured with animations by setting the grid's [`ColumnHidingAnimationMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnHidingAnimationMode) and [`ColumnShowingAnimationMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnShowingAnimationMode) properties.

## Code Snippet

The following demonstrates how to implement the Column Chooser Toolbar UI for the Blazor Data Grid:

```razor
<IgbDataGridToolbar ToolbarTitle="Grid Title"
    ColumnChooser="true"
    ColumnChooserText="Columns"
    ColumnChooserTitle="Column Chooser"
    TargetGrid="DataGridRef" />
<IgbDataGrid Height="100%" Width="100%"
    @ref="DataGridRef"
    DefaultColumnMinWidth="120"
    DataSource="@DataSource"
    ColumnHidingAnimationMode="ColumnHidingAnimationMode.SlideToLeft">
</IgbDataGrid>

@code {
    private DataGrid grid;
    public DataGrid DataGridRef
    {
        get
        {
            return grid;
        }
        set
        {
            grid = value;
            StateHasChanged();
        }
    }
}
```

## Simple Column Chooser

Let's say we want to manually display the [`ColumnChooser`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGridToolbar.html#IgniteUI_Blazor_Controls_IgbDataGridToolbar_ColumnChooser) UI without the toolbar and put it anywhere we want on our page. This can be easily done by simply creating an instance of the component in our markup.

## Demo

```razor
@using IgniteUI.Blazor.Controls
@inject IJSRuntime JSRuntime;


<div class="container horizontal">
    <div class="container vertical" style="width: auto; margin-left: 0.5rem; margin-top: 2px; margin-right: 0.5rem; margin-bottom: 0.25rem; padding: 0.5rem; background: rgb(248, 248, 248); border-radius: 10px; box-shadow: 1px 1px 2px 2px rgb(50 50 50 / 25%);">
        <IgbColumnChooser Height="100%" Width="100%" Title="Column Chooser" TargetGrid="@DataGridRef" />
    </div>

    <div class="container vertical">
        @if (Data != null)
        {
            <IgbDataGrid Height="100%" Width="100%" @ref="DataGridRef"
                      DefaultColumnMinWidth="120"
                      DataSource="Data"
                      AutoGenerateColumns="false"
                      IsColumnOptionsEnabled="true">
                <IgbTextColumn Field="ID" HeaderText="ID" IsHidden="true" Width="90" HorizontalAlignment="@CellContentHorizontalAlignment.Center" />
                <IgbTextColumn Field="ProductName" HeaderText="Product" IsHidden="true" Width="@("*>120")" />
                <IgbImageColumn IsEditable="false" Field="CountryFlag" HeaderText="Country" Width="@("*>120")" PaddingTop="5" PaddingBottom="5" ContentOpacity="1" HorizontalAlignment="@CellContentHorizontalAlignment.Center" />
                <IgbNumericColumn Field="ProductPrice" HeaderText="Price" IsHidden="true" Width="@("*>110")" PositivePrefix="$" ShowGroupingSeparator="true" MinFractionDigits="2" />
                <IgbNumericColumn Field="OrderItems" HeaderText="Orders" Width="@("*>110")" />
                <IgbNumericColumn Field="OrderValue" HeaderText="Order Value" Width="@("*>150")" PositivePrefix="$" ShowGroupingSeparator="true" />
                <IgbDateTimeColumn Field="OrderDate" HeaderText="Order Date" Width="@("*>150")" HorizontalAlignment="@CellContentHorizontalAlignment.Right" DateTimeFormat="@DateTimeFormats.DateShort" />
                <IgbNumericColumn Field="Margin" HeaderText="Margin" Width="@("*>120")" PositiveSuffix="%" HorizontalAlignment="@CellContentHorizontalAlignment.Center" />
                <IgbNumericColumn Field="Profit" HeaderText="Profit" Width="@("*>120")" PositivePrefix="$" ShowGroupingSeparator="true" />
                <IgbTextColumn Field="Status" HeaderText="Status" Width="@("*>110")" HorizontalAlignment="@CellContentHorizontalAlignment.Center" />
            </IgbDataGrid>
        }
    </div>
</div>

@code {

    private IgbDataGrid _grid;
    public IgbDataGrid DataGridRef
    {
        get
        {
            return _grid;
        }
        set
        {
            _grid = value;
            StateHasChanged();
        }
    }

    private List<SaleInfo> Data;

    protected override void OnInitialized()
    {
        Data = SalesDataService.Create(100);
    }
}
```


<div class="divider--half"></div>

## Code Snippet

The following demonstrates how to implement the Column Chooser UI for the Data Grid:

```razor
<IgbColumnChooser Height="100%" Width="200px"
    Title="Column Chooser"
    TargetGrid="DataGridRef" />
<IgbDataGrid Height="100%" Width="100%"
    @ref="DataGridRef"
    DataSource="DataSource"
    ColumnHidingAnimationMode="ColumnHidingAnimationMode.SlideToLeft" />

@code {
    private IgbDataGrid grid;
    public IgbDataGrid DataGridRef
    {
        get
        {
            return grid;
        }
        set
        {
            grid = value;
            StateHasChanged();
        }
    }
}
```

## API References

- [`IgbButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButton.html)
- [`ColumnChooserText`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGridToolbar.html#IgniteUI_Blazor_Controls_IgbDataGridToolbar_ColumnChooserText)
- [`ColumnChooserTitle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGridToolbar.html#IgniteUI_Blazor_Controls_IgbDataGridToolbar_ColumnChooserTitle)
- [`ColumnChooser`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGridToolbar.html#IgniteUI_Blazor_Controls_IgbDataGridToolbar_ColumnChooser)
- [`ColumnHidingAnimationMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnHidingAnimationMode)
- [`ColumnShowingAnimationMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnShowingAnimationMode)
- [`IgbDataGridToolbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGridToolbar.html)
