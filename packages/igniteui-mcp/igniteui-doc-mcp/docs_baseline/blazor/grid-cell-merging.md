---
title: Blazor Grid Cell Merging - Ignite UI for Blazor
_description: Position and size columns in a more powerful way, using the multi-row layout functionality in the Ignite UI for Blazor for Blazor Grid. Check out examples and demos!
_keywords: cell merging, Blazor, Grid, IgbGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridCellMerging}
_tocName: Cell Merging
_premium: true
---

# Blazor Grid Cell Merging

<!-- Blazor -->

The Ignite UI for Blazor Grid provides a Cell Merging feature that combines two or more adjacent cells with the same value into a single, larger cell. Merging is applied vertically within a column and helps improve readability by reducing duplicate values.

<!-- end: Blazor -->

## Blazor Grid Cell Merging Example

<!-- ComponentStart: Grid -->

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="InvoicesData"
        @ref="grid"
        RowSelection="GridSelectionMode.Single"
        CellMergeMode="@CellMergeMode"
        Width="100%"
        Height="570px">
            <IgbGridToolbar>
                <IgbSelect @bind-Value="GridCellMergeModeString">
                    <IgbSelectHeader>Select Merge Type</IgbSelectHeader>
                    @foreach (var type in MergeTypes)
                    {
                        <IgbSelectItem Value="@type.Value.ToString()">@type.Name</IgbSelectItem>
                    }
                </IgbSelect>
            </IgbGridToolbar>

            <IgbColumn Field="OrderID" Header="Order ID" Hidden="true" />
            <IgbColumn Field="ShipperName" Header="Shipper Name" Merge="true" Sortable="true" Width="250px" />
            <IgbColumn Field="Salesperson" Header="Salesperson" Merge="true" Sortable="true" Width="250px" />
            <IgbColumn Field="Discontinued" Header="Discontinued" Merge="true" Sortable="true" Width="200px"
            BodyTemplateScript="DiscontinuedCellTemplate" />
            <IgbColumn Field="UnitPrice" Header="Unit Price" DataType="GridColumnDataType.Number" Width="150px" />
            <IgbColumn Field="Quantity" Header="Quantity" DataType="GridColumnDataType.Number" Width="150px" />
            <IgbColumn Field="ShipCountry" Header="Ship Country" Merge="true" Width="200px" />
            <IgbColumn Field="ShipCity" Header="Ship City" Merge="true" Width="250px" />
            <IgbColumn Field="ShipName" Header="Ship Name" Width="250px" />
            <IgbColumn Field="PostalCode" Header="Postal Code" Width="200px" />
            <IgbColumn Field="OrderDate" Header="Order Date" DataType="GridColumnDataType.Date" Width="200px" />

        </IgbGrid>

    </div>
</div>

@code {
    private IgbGrid grid;

    private List<InvoicesDataItem> InvoicesData { get; } = new InvoicesData();

    private List<MergeType> MergeTypes = new()
    {
        new MergeType { Name = "Merge always", Value = GridCellMergeMode.Always },
        new MergeType { Name = "Merge on sort", Value = GridCellMergeMode.OnSort }
    };

    private GridCellMergeMode CellMergeMode { get; set; } = GridCellMergeMode.Always;
    private string GridCellMergeModeString
    {
        get => CellMergeMode.ToString();
        set => CellMergeMode = Enum.TryParse<GridCellMergeMode>(value, out var mode) ? mode : GridCellMergeMode.Always;
    }

    private class MergeType
    {
        public string Name { get; set; } = string.Empty;
        public GridCellMergeMode Value { get; set; }
    }
}
```
```csharp
using System;
using System.Collections.Generic;
public class InvoicesDataItem
{
    public string ShipName { get; set; }
    public string ShipAddress { get; set; }
    public string ShipCity { get; set; }
    public double ShipPostalCode { get; set; }
    public string ShipCountry { get; set; }
    public string ShipRegion { get; set; }
    public string ShipperName { get; set; }
    public double CustomerID { get; set; }
    public string CustomerName { get; set; }
    public string CustomerFirstName { get; set; }
    public string CustomerLastName { get; set; }
    public string CustomerAddress { get; set; }
    public string Salesperson { get; set; }
    public double OrderID { get; set; }
    public string OrderDate { get; set; }
    public double ProductID { get; set; }
    public string ProductName { get; set; }
    public double UnitPrice { get; set; }
    public double Quantity { get; set; }
    public double ExtendedPrice { get; set; }
    public double Freight { get; set; }
    public bool Discontinued { get; set; }
    public string Region { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Country { get; set; }
    public double PostalCode { get; set; }
}

public class InvoicesData
    : List<InvoicesDataItem>
{
    public InvoicesData()
    {
        this.Add(new InvoicesDataItem() { ShipName = @"Jefferson Home", ShipAddress = @"124 Wall Street", ShipCity = @"Miami", ShipPostalCode = 60098, ShipCountry = @"USA", ShipRegion = @"South East", ShipperName = @"Federal Shipping", CustomerID = 1000, CustomerName = @"Martin Jefferson", CustomerFirstName = @"Martin", CustomerLastName = @"Jefferson", CustomerAddress = @"124 Wall Street, Miami, USA, 60098", Salesperson = @"Nancy Jefferson", OrderID = 1931, OrderDate = @"3/14/2022", ProductID = 189, ProductName = @"IPad", UnitPrice = 16150.61, Quantity = 3, ExtendedPrice = 48451.83, Freight = 980.61, Discontinued = false, Region = @"South East", Address = @"124 Wall Street", City = @"Miami", Country = @"USA", PostalCode = 60098 });
        this.Add(new InvoicesDataItem() { ShipName = @"Black Home", ShipAddress = @"162 Main Street", ShipCity = @"Miami", ShipPostalCode = 80193, ShipCountry = @"USA", ShipRegion = @"West", ShipperName = @"United Package", CustomerID = 1001, CustomerName = @"Anna Black", CustomerFirstName = @"Anna", CustomerLastName = @"Black", CustomerAddress = @"162 Main Street, Miami, USA, 80193", Salesperson = @"Anna Smith", OrderID = 1163, OrderDate = @"5/22/2022", ProductID = 138, ProductName = @"Mac Book Pro", UnitPrice = 18520.59, Quantity = 4, ExtendedPrice = 74082.36, Freight = 850.59, Discontinued = false, Region = @"West", Address = @"162 Main Street", City = @"Miami", Country = @"USA", PostalCode = 80193 });
        this.Add(new InvoicesDataItem() { ShipName = @"Watson Townhouse", ShipAddress = @"164 Wall Street", ShipCity = @"Miami", ShipPostalCode = 50111, ShipCountry = @"USA", ShipRegion = @"West", ShipperName = @"United Package", CustomerID = 1002, CustomerName = @"Max Watson", CustomerFirstName = @"Max", CustomerLastName = @"Watson", CustomerAddress = @"164 Wall Street, Miami, USA, 50111", Salesperson = @"Martin Watson", OrderID = 1230, OrderDate = @"2/9/2022", ProductID = 118, ProductName = @"Mac Book Air", UnitPrice = 25310.39, Quantity = 3, ExtendedPrice = 75931.17, Freight = 210.39, Discontinued = false, Region = @"West", Address = @"164 Wall Street", City = @"Miami", Country = @"USA", PostalCode = 50111 });
        // ... 496 more items
    }
}
```


<!-- ComponentEnd: Grid -->

## Enabling and Using Cell Merging

Cell merging in the grid is controlled at two levels:

- Grid-level merge mode – determines when merging is applied.
- Column-level merge toggle – determines which columns can merge cells.

### Grid Merge Mode

The grid exposes a `cellMergeMode` property that accepts values from the `GridCellMergeMode` enum:

- `always` - Merges any adjacent cells that meet the merging condition, regardless of sort state.
- `onSort` - Merges adjacent cells only when the column is sorted **(default value)**.

```razor
<IgbGrid Data="Data" CellMergeMode="CellMergeMode" >
    ...
</IgbGrid>

@code {
    private GridCellMergeMode CellMergeMode = GridCellMergeMode.Always;
}
```

### Column Merge Toggle

At the column level, merging can be enabled or disabled with the `merge` property.

```razor
<IgbColumn Field="OrderID" Merge="true"></IgbColumn>
<IgbColumn Field="ShipperName" Merge="false"></IgbColumn>
```

In the above example:

- The **OrderID** column will merge adjacent duplicate values.
- The **ShipperName** column will render normally without merging.

### Combined Example

```razor
<IgbGrid Data="Data" CellMergeMode="CellMergeMode" AutoGenerate="false">
    <IgbColumn Field="OrderID" Header="Order ID" Merge="true"></IgbColumn>
    <IgbColumn Field="ShipperName" Header="Shipper Name" Merge="true"></IgbColumn>
    <IgbColumn Field="Salesperson" Header="Salesperson"></IgbColumn>
</IgbGrid>

@code {
    private GridCellMergeMode CellMergeMode = GridCellMergeMode.OnSort;
}
```

Here, the grid is set to merge only when columns are sorted, and both Category and Product columns are configured for merging.

## Feature Integration

Due to the specific behavior of merged cells it has to be noted how exactly it ties together with some of the other features of the grid:

<!-- ComponentStart: Grid -->

- **Expand/Collapse**: if a feature (such as master-detail, grouping, etc.) generates a non-data row, then the cell merging is interrupted and the group will be split.

<!-- ComponentEnd: Grid -->

- **Excel export**: merged cells remain merged when exported to Excel.
- **Column pinning**: cells remain merged when a column is pinned and are displayed in the pinned area.
- **Row pinning**: cells merge only withing their containing area, i.e. cells of pinned rows merge only with cells of other pinned rows, while cells of unpinned rows merge only with cells of unpinned rows.
- **Updating/Editing**: since activation breaks the merge sequence, only a single cell will be in edit mode.
- **Row selection**: if selected rows intersect merged cells, all related merged cells should be marked as part of the selection.
- **Navigation/Activation**: when a cell is active, all merged cells in the same row become single cells, i.e. their merge sequence is broken. This also includes activation via keyboard navigation.

> \[!NOTE]
> If a merged cell is clicked, the closest cell from the merge sequence will become active.

<!-- ComponentStart: Grid -->

## Limitations

|Known Limitations| Description|
| --- | --- |
| Cell merging is not supported in combination with Multi-row Layout. | Both span complex layouts that don't make sense when combined. A warning will be thrown if such invalid configuration is detected. |

<!-- ComponentEnd: Grid -->

## API References

- [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)

## Additional Resources

- [Filtering](filtering.md)
- [Excel Style Filtering](excel-style-filtering.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
