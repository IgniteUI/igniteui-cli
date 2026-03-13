---
title: Blazor Data Grid | Column Options | Infragistics
_description: See how Infragistics' Ignite UI for Blazor Data Grid supports the ability to pin, move, filter, and sort columns individually through a drop down UI from each column header. Check out Ignite UI for Blazor table's column option!
_keywords: Blazor Table, Data Grid, column options, Ignite UI for Blazor, Infragistics
mentionedTypes: ["Grid", "HeaderClickAction", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: Column Options
_premium: true
---

<!-- Blazor, WebComponents -->

> \[!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

<!-- end: Blazor, WebComponents -->

# Blazor Grid Column Options Overview

The Ignite UI for Blazor Data Grid supports the ability to group, hide, sort, move, pin, filter, and sort columns directly from a UI exposed on each column header.

To enable the column options ui you can set the grid's [`IsColumnOptionsEnabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_IsColumnOptionsEnabled) property to true.

## Blazor Grid Column Options Example

```razor
@using IgniteUI.Blazor.Controls
@inject IJSRuntime JSRuntime;

<div class="container vertical">
    <div class="container vertical">
        @if (Data != null)
        {
            <div style="overflow: hidden">
                <IgbDataGrid Height="100%" Width="100%"
                      DefaultColumnMinWidth="120"
                      DataSource="Data"
                      AutoGenerateColumns="false"
                      IsColumnOptionsEnabled="true">
                    <IgbTextColumn Field="ID" HeaderText="ID" Width="90" HorizontalAlignment="@CellContentHorizontalAlignment.Center" />
                    <IgbTextColumn Field="ProductName" HeaderText="Product" Width="@("*>120")" />
                    <IgbImageColumn IsEditable="false" Field="CountryFlag" HeaderText="Country" Width="@("*>120")" PaddingTop="5" PaddingBottom="5" ContentOpacity="1" HorizontalAlignment="@CellContentHorizontalAlignment.Center" />
                    <IgbNumericColumn Field="ProductPrice" HeaderText="Price" Width="@("*>110")" PositivePrefix="$" ShowGroupingSeparator="true" MinFractionDigits="2"/>
                    <IgbNumericColumn Field="OrderItems" HeaderText="Orders" Width="@("*>110")" />
                    <IgbNumericColumn Field="OrderValue" HeaderText="Order Value" Width="@("*>150")" PositivePrefix="$" ShowGroupingSeparator="true" />
                    <IgbDateTimeColumn Field="OrderDate" HeaderText="Order Date" Width="@("*>150")" HorizontalAlignment="@CellContentHorizontalAlignment.Right" DateTimeFormat="@DateTimeFormats.DateShort" />
                    <IgbNumericColumn Field="Margin" HeaderText="Margin" Width="@("*>120")" PositiveSuffix="%" HorizontalAlignment="@CellContentHorizontalAlignment.Center" />
                    <IgbNumericColumn Field="Profit" HeaderText="Profit" Width="@("*>120")" PositivePrefix="$" ShowGroupingSeparator="true" />
                    <IgbTextColumn Field="Status" HeaderText="Status" Width="@("*>110")" HorizontalAlignment="@CellContentHorizontalAlignment.Center" />
                </IgbDataGrid>
            </div>
        }
    </div>
</div>

@code {

    private List<SaleInfo> Data;

    protected override void OnInitialized()
    {
        this.Data = SalesDataService.Create(100);
    }
}
```


<div class="divider--half"></div>

## Column Options Configurations

Filtering can be toggled per column by setting the column's [`IsFilteringEnabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGridColumn.html#IgniteUI_Blazor_Controls_IgbDataGridColumn_IsFilteringEnabled) property. Setting true or false will show or hide the filtering section in the column's options ui.

Sorting can be toggled for the entire grid if the [`HeaderClickAction`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_HeaderClickAction) property is applied. Setting this to `None` for example will completely remove sorting from grid and reflect in the options ui for each column. And setting `SortByOneColumnOnly` for example will continue to allow one column to be sorted at a time.

## Code Snippet

The following code demonstrates how to programmatically enable the column options ui adjust filtering and sorting in the column options ui by adjusting the grid and column.

```razor
<IgbDataGrid Height="100%" Width="100%"
    DataSource="DataSource"
    HeaderClickAction="HeaderClickAction.SortByOneColumnOnly"
    IsColumnOptionsEnabled="true">
    <IgbTextColumn Field="ID" IsFilteringEnabled="false" />
</IgbDataGrid>
```

## API References

- [`HeaderClickAction`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_HeaderClickAction)
- [`IsColumnOptionsEnabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_IsColumnOptionsEnabled)
- [`IsFilteringEnabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGridColumn.html#IgniteUI_Blazor_Controls_IgbDataGridColumn_IsFilteringEnabled)
- `SortByOneColumnOnly`
