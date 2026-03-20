---
title: Blazor Data Grid | Column Sorting | Infragistics
_description: Use Infragistics' Blazor grid component's sorting feature to configure a mix of sortable and non-sortable columns, with rich API and data sorting. View Ignite UI for Blazor tutorials!
_keywords: Blazor Table, Data Grid, column, sorting, row, Ignite UI for Blazor, Infragistics
mentionedTypes: ["Grid", "HeaderClickAction"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/grid/sorting
_tocName: Column Sorting
_premium: true
---

<!-- Blazor, WebComponents -->

> \[!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

<!-- end: Blazor, WebComponents -->

# Blazor Grid Sorting Overview

The Ignite UI for Blazor Data Table / Data Grid supports ascending and descending column sorting with a Single Column, Multi-Column and Tri-State Column Sorting configuration.

## Blazor Grid Sorting Example

```razor
@using IgniteUI.Blazor.Controls
@inject IJSRuntime JSRuntime;

<div class="container vertical">
    <div class="options horizontal">
        <span class="options-item">Header Click Action: </span>
        <select class="options-item" @bind="GridHeaderClickAction">
            <option>@HeaderClickAction.SortByMultipleColumns</option>
            <option>@HeaderClickAction.SortByMultipleColumnsTriState</option>
            <option>@HeaderClickAction.SortByOneColumnOnly</option>
            <option>@HeaderClickAction.SortByOneColumnOnlyTriState</option>
        </select>
    </div>

    <div class="container vertical">
        @if (Data != null)
        {
            <div style="overflow: hidden">
                <IgbDataGrid Height="100%" Width="100%"
                      @ref="DataGridRef"
                      HeaderClickAction="@GridHeaderClickAction"
                      AutoGenerateColumns="false"
                      DataSource="Data"
                      DefaultColumnMinWidth="100"
                      IsColumnOptionsEnabled="true">
                    <IgbTextColumn Field="ID" Width="@("*>110")" HorizontalAlignment="@CellContentHorizontalAlignment.Center" />
                    <IgbTextColumn Field="Property" Width="@("*>150")" HeaderText="Property" />
                    <IgbImageColumn IsEditable="false" Field="CountryFlag" HeaderText="Country" Width="@("*>160")" ContentOpacity="1"
                                HorizontalAlignment="@CellContentHorizontalAlignment.Center" PaddingTop="5" PaddingBottom="5" />
                    <IgbTextColumn Field="City" Width="@("*>150")" />
                    <IgbNumericColumn Field="Price" Width="@("*>130")" PositivePrefix="$" ShowGroupingSeparator="true" />
                    <IgbNumericColumn Field="Rooms" Width="@("*>110")" />
                </IgbDataGrid>
            </div>
        }
    </div>
</div>

@code {

    private List<RealEstate> Data;
    private HeaderClickAction GridHeaderClickAction;

    private IgbDataGrid grid;
    private IgbDataGrid DataGridRef
    {
        get { return grid; }
        set { grid = value; OnGridRefChanged(); StateHasChanged(); }
    }

    protected override void OnInitialized()
    {
        this.Data = RealEstateData.Create(100);
        this.GridHeaderClickAction = HeaderClickAction.SortByMultipleColumnsTriState;
    }

    private void OnGridRefChanged()
    {
        if (this.DataGridRef != null)
        {
            this.DataGridRef.SortDescriptions.Add(new IgbColumnSortDescription()
            {
                Field = "Property",
                SortDirection = ListSortDirection.Descending
            });
        }
    }
}
```


<div class="divider--half"></div>

## Code Snippet

You can sort by a single or multiple column ascending or descending in the Blazor data grid by using the [`HeaderClickAction`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_HeaderClickAction) property. If TriState is enabled you can remove the sort applied to a column.

- `SortByMultipleColumns`
- `SortByMultipleColumnsTriState`
- `SortByOneColumnOnly`
- `SortByOneColumnOnlyTriState`

```razor
<IgbDataGrid Height="100%" Width="100%" @ref="DataGridRef"
    HeaderClickAction="HeaderClickAction.SortByMultipleColumns"
    DataSource="DataSource" />
```

## Sorting through API

```razor
@code {
    // Using the ref property above:
    private IgbDataGrid grid;
    private IgbDataGrid DataGridRef
    {
        get { return grid; }
        set
        {
            grid = value;
            OnGridRefChanged();
            StateHasChanged();
        }
    }

    private void OnGridRefChanged()
    {
        if (this.DataGridRef != null)
        {
            this.DataGridRef.SortDescriptions.Add(new ColumnSortDescription()
            {
                Field = "Property",
                SortDirection = ListSortDirection.Descending
            });
        }
    }
}
```

## API References

- [`HeaderClickAction`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_HeaderClickAction)
- `SortByMultipleColumnsTriState`
- `SortByMultipleColumns`
- `SortByOneColumnOnlyTriState`
