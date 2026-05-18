---
title: Blazor Hierarchical Grid Cell Merging - Ignite UI for Blazor
_description: Position and size columns in a more powerful way, using the multi-row layout functionality in the Ignite UI for Blazor for Blazor Hierarchical Grid. Check out examples and demos!
_keywords: cell merging, Blazor, Hierarchical Grid, IgbHierarchicalGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridCellMerging}
_tocName: Cell Merging
_premium: true
---

# Blazor Hierarchical Grid Cell Merging

The Ignite UI for Blazor Hierarchical Grid provides a Cell Merging feature that combines two or more adjacent cells with the same value into a single, larger cell. Merging is applied vertically within a column and helps improve readability by reducing duplicate values.

## Blazor Hierarchical Grid Cell Merging Example

<!-- ComponentStart: HierarchicalGrid -->

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        AutoGenerate="false"
        @ref="grid"
        PrimaryKey="ID"
        Data="LocalData"
        Moving="true"
        SortingExpressions="SortExpr"
        CellMergeMode="@CellMergeModeRoot"
		AllowFiltering="true"
        Width="100%"
        Height="450px"
        >
            <IgbGridToolbar>
                <IgbSelect @bind-Value="CellMergeModeRootString">
                    <IgbSelectHeader>Select Merge Type Root</IgbSelectHeader>
                    @foreach (var type in MergeTypes)
                    {
                        <IgbSelectItem Value="@type.Value.ToString()">@type.Name</IgbSelectItem>
                    }
                </IgbSelect>
                <IgbSelect @bind-Value="CellMergeModeChildString">
                    <IgbSelectHeader>Select Merge Type Child</IgbSelectHeader>
                    @foreach (var type in MergeTypes)
                    {
                        <IgbSelectItem Value="@type.Value.ToString()">@type.Name</IgbSelectItem>
                    }
                </IgbSelect>
            </IgbGridToolbar>

            <IgbColumn Field="Company" Header="Company Name" Sortable="true" Resizable="true" />
            <IgbColumn Field="ContactName" Header="Contact Name" Sortable="true" Resizable="true" />
            <IgbColumn Field="ContactTitle" Header="Contact Title" Sortable="true" Resizable="true" Merge="true" />
            <IgbColumn Field="Address" Sortable="true" Resizable="true" />
            <IgbColumn Field="City" Sortable="true" Resizable="true" Merge="true" />
            <IgbColumn Field="PostalCode" Header="Postal Code" Sortable="true" Resizable="true" />
            <IgbColumn Field="Country" Sortable="true" Resizable="true" Merge="true" />
            <IgbColumn Field="Phone" Sortable="true" Resizable="true" />
            <IgbColumn Field="Fax" Sortable="true" Resizable="true" />

            <IgbRowIsland 
            ChildDataKey="ChildCompanies"
            Height="100%"
            Moving="true"
            AutoGenerate="false"
            SortingExpressions="SortExpr"
            CellMergeMode="@CellMergeModeChild">
                <IgbColumn Field="Company" Header="Company Name" Sortable="true" Resizable="true" />
                <IgbColumn Field="ContactName" Header="Contact Name" Sortable="true" Resizable="true" />
                <IgbColumn Field="ContactTitle" Header="Contact Name" Sortable="true" Resizable="true" Merge="true" />
                <IgbColumn Field="Address" Sortable="true" Resizable="true" />
                <IgbColumn Field="City" Sortable="true" Resizable="true" Merge="true" />
                <IgbColumn Field="PostalCode" Header="Postal Code" Sortable="true" Resizable="true" />
                <IgbColumn Field="Country" Sortable="true" Resizable="true" Merge="true" />
                <IgbColumn Field="Phone" Sortable="true" Resizable="true" />
                <IgbColumn Field="Fax" Sortable="true" Resizable="true" />
            </IgbRowIsland>
        </IgbHierarchicalGrid>

    </div>
</div>

@code {
    private IgbHierarchicalGrid grid;

    private List<MultiColumnsExportDataItem> LocalData { get; } = new MultiColumnsExportData();

    private List<MergeType> MergeTypes = new()
    {
        new MergeType { Name = "Merge always", Value = GridCellMergeMode.Always },
        new MergeType { Name = "Merge on sort", Value = GridCellMergeMode.OnSort }
    };

    private GridCellMergeMode CellMergeModeRoot { get; set; } = GridCellMergeMode.Always;
    private string CellMergeModeRootString
    {
        get => CellMergeModeRoot.ToString();
        set => CellMergeModeRoot = Enum.TryParse<GridCellMergeMode>(value, out var mode) ? mode : GridCellMergeMode.Always;
    }

    private GridCellMergeMode CellMergeModeChild { get; set; } = GridCellMergeMode.Always;
    private string CellMergeModeChildString
    {
        get => CellMergeModeChild.ToString();
        set => CellMergeModeChild = Enum.TryParse<GridCellMergeMode>(value, out var mode) ? mode : GridCellMergeMode.Always;
    }

    private IgbSortingExpression[] SortExpr = new IgbSortingExpression[]
    {
        new IgbSortingExpression()
        }
    };

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
public class MultiColumnsExportDataItem
{
    public string ID { get; set; }
    public string Company { get; set; }
    public string ContactName { get; set; }
    public string ContactTitle { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Region { get; set; }
    public string PostalCode { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string Fax { get; set; }
    public List<MultiColumnsExportDataItem_ChildCompaniesItem> ChildCompanies { get; set; }
}
public class MultiColumnsExportDataItem_ChildCompaniesItem
{
    public string ID { get; set; }
    public string Company { get; set; }
    public string ContactName { get; set; }
    public string ContactTitle { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Region { get; set; }
    public string PostalCode { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string Fax { get; set; }
    public List<MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem> ChildCompanies { get; set; }
}
public class MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem
{
    public string ID { get; set; }
    public string Company { get; set; }
    public string ContactName { get; set; }
    public string ContactTitle { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Region { get; set; }
    public string PostalCode { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string Fax { get; set; }
}

public class MultiColumnsExportData
    : List<MultiColumnsExportDataItem>
{
    public MultiColumnsExportData()
    {
        this.Add(new MultiColumnsExportDataItem() { ID = @"ALFKI", Company = @"Alfreds Futterkiste", ContactName = @"Maria Anders", ContactTitle = @"Sales Representative", Address = @"Obere Str. 57", City = @"Berlin", Region = @"Berlin", PostalCode = @"12209", Country = @"Germany", Phone = @"030-0074321", Fax = @"030-0076545", ChildCompanies = new List<MultiColumnsExportDataItem_ChildCompaniesItem>()
        {
            new MultiColumnsExportDataItem_ChildCompaniesItem() { ID = @"ANATR", Company = @"Ana Trujillo Emparedados y helados", ContactName = @"Ana Trujillo", ContactTitle = @"Owner", Address = @"Avda. de la Constitución 2222", City = @"México D.F.", Region = @"México D.F.", PostalCode = @"05021", Country = @"Mexico", Phone = @"(5) 555-4729", Fax = @"(5) 555-3745", ChildCompanies = new List<MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem>()
            {
                new MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem() { ID = @"AROUT", Company = @"Around the Horn", ContactName = @"Thomas Hardy", ContactTitle = @"Sales Representative", Address = @"120 Hanover Sq.", City = @"London", Region = @"London", PostalCode = @"10000", Country = @"UK", Phone = @"(171) 555-7788", Fax = @"(171) 555-6750" },
                new MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem() { ID = @"BERGS", Company = @"Berglunds snabbköp", ContactName = @"Christina Berglund", ContactTitle = @"Order Administrator", Address = @"Berguvsvägen 8", City = @"Luleå", Region = @"Luleå", PostalCode = @"25000", Country = @"Sweden", Phone = @"0921-12 34 65", Fax = @"0921-12 34 67" },
                new MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem() { ID = @"BLAUS", Company = @"Blauer See Delikatessen", ContactName = @"Hanna Moos", ContactTitle = @"Sales Representative", Address = @"Forsterstr. 57", City = @"Mannheim", Region = @"Mannheim", PostalCode = @"68306", Country = @"Germany", Phone = @"0621-08460", Fax = @"0621-08924" },
                new MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem() { ID = @"BLONP", Company = @"Blondesddsl père et fils", ContactName = @"Frédérique Citeaux", ContactTitle = @"Marketing Manager", Address = @"24, place Kléber", City = @"Strasbourg", Region = @"Strasbourg", PostalCode = @"67000", Country = @"France", Phone = @"88.60.15.31", Fax = @"88.60.15.32" },
                new MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem() { ID = @"BOLID", Company = @"Bólido Comidas preparadas", ContactName = @"Martín Sommer", ContactTitle = @"Owner", Address = @"C/ Araquil, 67", City = @"Madrid", Region = @"Madrid", PostalCode = @"28023", Country = @"Spain", Phone = @"(91) 555 22 82", Fax = @"(91) 555 91 99" },
                new MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem() { ID = @"BONAP", Company = @"Bon app", ContactName = @"Laurence Lebihan", ContactTitle = @"Owner", Address = @"12, rue des Bouchers", City = @"Marseille", Region = @"Marseille", PostalCode = @"13008", Country = @"France", Phone = @"91.24.45.40", Fax = @"91.24.45.41" },
                new MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem() { ID = @"BOTTM", Company = @"Bottom-Dollar Markets", ContactName = @"Elizabeth Lincoln", ContactTitle = @"Accounting Manager", Address = @"23 Tsawassen Blvd.", City = @"Tsawassen", Region = @"BC", PostalCode = @"13000", Country = @"Canada", Phone = @"(604) 555-4729", Fax = @"(604) 555-3745" },
                new MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem() { ID = @"BSBEV", Company = @"Beverages", ContactName = @"Victoria Ashworth", ContactTitle = @"Sales Representative", Address = @"Fauntleroy Circus", City = @"London", Region = @"London", PostalCode = @"37000", Country = @"UK", Phone = @"(171) 555-1212", Fax = @"011-4988261" }}
             },
            new MultiColumnsExportDataItem_ChildCompaniesItem() { ID = @"ANTON", Company = @"Antonio Moreno Taquería", ContactName = @"Antonio Moreno", ContactTitle = @"Owner", Address = @"Mataderos 2312", City = @"México D.F.", Region = @"México D.F.", PostalCode = @"05023", Country = @"Mexico", Phone = @"(5) 555-3932", Fax = @"011-4988261", ChildCompanies = new List<MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem>()
            {
                new MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem() { ID = @"CACTU", Company = @"Cactus Comidas para llevar", ContactName = @"Patricio Simpson", ContactTitle = @"Sales Agent", Address = @"Cerrito 333", City = @"Buenos Aires", Region = @"Buenos Aires", PostalCode = @"1010", Country = @"Argentina", Phone = @"(1) 135-5555", Fax = @"(1) 135-4892" },
                new MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem() { ID = @"CENTC", Company = @"Centro comercial Moctezuma", ContactName = @"Francisco Chang", ContactTitle = @"Marketing Manager", Address = @"Sierras de Granada 9993", City = @"México D.F.", Region = @"México D.F.", PostalCode = @"05022", Country = @"Mexico", Phone = @"(5) 555-3392", Fax = @"(5) 555-7293" },
                new MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem() { ID = @"CHOPS", Company = @"Chop-suey Chinese", ContactName = @"Yang Wang", ContactTitle = @"Owner", Address = @"Hauptstr. 29", City = @"Bern", Region = @"Bern", PostalCode = @"3012", Country = @"Switzerland", Phone = @"0452-076545", Fax = @"011-4988261" }}
             }}
            new MultiColumnsExportDataItem_ChildCompaniesItem() { ID = @"CONSH", Company = @"Consolidated Holdings", ContactName = @"Elizabeth Brown", ContactTitle = @"Sales Representative", Address = @"Berkeley Gardens 12 Brewery", City = @"London", Region = @"London", PostalCode = @"23000", Country = @"UK", Phone = @"(171) 555-2282", Fax = @"(171) 555-9199", ChildCompanies = new List<MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem>()
            {
                new MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem() { ID = @"EASTC", Company = @"Eastern Connection", ContactName = @"Ann Devon", ContactTitle = @"Sales Agent", Address = @"35 King George", City = @"London", Region = @"London", PostalCode = @"42000", Country = @"UK", Phone = @"(171) 555-0297", Fax = @"(171) 555-3373" },
                new MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem() { ID = @"ERNSH", Company = @"Ernst Handel", ContactName = @"Roland Mendel", ContactTitle = @"Sales Manager", Address = @"Kirchgasse 6", City = @"Graz", Region = @"Graz", PostalCode = @"8010", Country = @"Austria", Phone = @"7675-3425", Fax = @"7675-3426" }}
             },
            // ... 6 more items
    }
}
```

<!-- ComponentEnd: HierarchicalGrid -->

## Enabling and Using Cell Merging

Cell merging in the grid is controlled at two levels:

- Grid-level merge mode – determines when merging is applied.
- Column-level merge toggle – determines which columns can merge cells.

### Grid Merge Mode

The grid exposes a `cellMergeMode` property that accepts values from the `GridCellMergeMode` enum:

- `always` - Merges any adjacent cells that meet the merging condition, regardless of sort state.
- `onSort` - Merges adjacent cells only when the column is sorted **(default value)**.

```razor
<IgbHierarchicalGrid Data="Data" CellMergeMode="CellMergeMode" >
    ...
</IgbHierarchicalGrid>

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
<IgbHierarchicalGrid Data="Data" CellMergeMode="CellMergeMode" AutoGenerate="false">
    <IgbColumn Field="OrderID" Header="Order ID" Merge="true"></IgbColumn>
    <IgbColumn Field="ShipperName" Header="Shipper Name" Merge="true"></IgbColumn>
    <IgbColumn Field="Salesperson" Header="Salesperson"></IgbColumn>
</IgbHierarchicalGrid>

@code {
    private GridCellMergeMode CellMergeMode = GridCellMergeMode.OnSort;
}
```

Here, the grid is set to merge only when columns are sorted, and both Category and Product columns are configured for merging.

## Feature Integration

Due to the specific behavior of merged cells it has to be noted how exactly it ties together with some of the other features of the grid:

- **Excel export**: merged cells remain merged when exported to Excel.
- **Column pinning**: cells remain merged when a column is pinned and are displayed in the pinned area.
- **Row pinning**: cells merge only withing their containing area, i.e. cells of pinned rows merge only with cells of other pinned rows, while cells of unpinned rows merge only with cells of unpinned rows.
- **Updating/Editing**: since activation breaks the merge sequence, only a single cell will be in edit mode.
- **Row selection**: if selected rows intersect merged cells, all related merged cells should be marked as part of the selection.
- **Navigation/Activation**: when a cell is active, all merged cells in the same row become single cells, i.e. their merge sequence is broken. This also includes activation via keyboard navigation.

> [!NOTE]
> If a merged cell is clicked, the closest cell from the merge sequence will become active.

## API References

- [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html)

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
