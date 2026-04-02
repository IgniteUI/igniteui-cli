---
title: Blazor Tree Grid Cell Merging - Ignite UI for Blazor
_description: Position and size columns in a more powerful way, using the multi-row layout functionality in the Ignite UI for Blazor for Blazor Tree Grid. Check out examples and demos!
_keywords: cell merging, Blazor, Tree Grid, IgbTreeGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridCellMerging}
_tocName: Cell Merging
_premium: true
---

# Blazor Tree Grid Cell Merging

The Ignite UI for Blazor Tree Grid provides a Cell Merging feature that combines two or more adjacent cells with the same value into a single, larger cell. Merging is applied vertically within a column and helps improve readability by reducing duplicate values.

## Blazor Tree Grid Cell Merging Example

<!-- ComponentStart: TreeGrid -->

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbTreeGrid
        AutoGenerate="false"
        @ref="grid"
        Data="EmployeesData"
        PrimaryKey="ID"
        ForeignKey="ParentID"
        Width="100%"
        Height="720px"
        SortingExpressions="SortExpr"
        CellMergeMode="@CellMergeMode"
        >
            <IgbGridToolbar>
                <IgbSelect @bind-Value="CellMergeModeString">
                    <IgbSelectHeader>Select Merge Type</IgbSelectHeader>
                    @foreach (var type in MergeTypes)
                    {
                        <IgbSelectItem Value="@type.Value.ToString()">@type.Name</IgbSelectItem>
                    }
                </IgbSelect>
            </IgbGridToolbar>

            <IgbColumn Field="Name" DataType="GridColumnDataType.String" Width="250px" Editable="true" />
            <IgbColumn Field="Title" DataType="GridColumnDataType.String" Width="250px" Merge="true" Editable="true" Sortable="true" />
            <IgbColumn Field="HireDate" DataType="GridColumnDataType.Date" Width="200px" />
            <IgbColumn Field="Country" DataType="GridColumnDataType.String" Width="200px" Merge="true" Editable="true" Sortable="true" />
            <IgbColumn Field="City" DataType="GridColumnDataType.String" Width="200px" Merge="true" Editable="true" Sortable="true" />
            <IgbColumn Field="Age" DataType="GridColumnDataType.Number" Width="200px" Editable="true" />
            <IgbColumn Field="Address" DataType="GridColumnDataType.String" Width="200px" Editable="true" />
            <IgbColumn Field="Fax" DataType="GridColumnDataType.String" Width="200px" />
            <IgbColumn Field="PostalCode" DataType="GridColumnDataType.String" Width="200px" />
            <IgbColumn Field="Phone" DataType="GridColumnDataType.String" Width="200px" />
        </IgbTreeGrid>

    </div>
</div>

@code {
    private IgbTreeGrid grid;

    private List<EmployeesFlatDetailsItem> EmployeesData { get; } = new EmployeesFlatDetails();

    private GridCellMergeMode CellMergeMode { get; set; } = GridCellMergeMode.Always;
    private string CellMergeModeString
    {
        get => CellMergeMode.ToString();
        set => CellMergeMode = Enum.TryParse<GridCellMergeMode>(value, out var mode) ? mode : GridCellMergeMode.Always;
    }

    private IgbSortingExpression[] SortExpr = new IgbSortingExpression[]
    {
        new IgbSortingExpression()
        }
    };

    private List<MergeType> MergeTypes = new()
    {
        new MergeType { Name = "Merge always", Value = GridCellMergeMode.Always },
        new MergeType { Name = "Merge on sort", Value = GridCellMergeMode.OnSort }
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
public class EmployeesFlatDetailsItem
{
    public string Address { get; set; }
    public double Age { get; set; }
    public string City { get; set; }
    public string Country { get; set; }
    public string Fax { get; set; }
    public string HireDate { get; set; }
    public double ID { get; set; }
    public string Name { get; set; }
    public double ParentID { get; set; }
    public string Phone { get; set; }
    public double PostalCode { get; set; }
    public string Title { get; set; }
    public string LastName { get; set; }
    public string FullAddress { get; set; }
}

public class EmployeesFlatDetails
    : List<EmployeesFlatDetailsItem>
{
    public EmployeesFlatDetails()
    {
        this.Add(new EmployeesFlatDetailsItem() { Address = @"Obere Str. 57", Age = 55, City = @"Berlin", Country = @"Germany", Fax = @"030-0076545", HireDate = @"2008-03-20", ID = 1, Name = @"Johnathan Winchester", ParentID = -1, Phone = @"030-0074321", PostalCode = 12209, Title = @"Development Manager", LastName = @"Winchester", FullAddress = @"Obere Str. 57, Berlin, Germany" });
        this.Add(new EmployeesFlatDetailsItem() { Address = @"Avda. de la Constitución 2222", Age = 42, City = @"México D.F.", Country = @"Mexico", Fax = @"(51) 555-3745", HireDate = @"2014-01-22", ID = 4, Name = @"Ana Sanders", ParentID = -1, Phone = @"(5) 555-4729", PostalCode = 5021, Title = @"CEO", LastName = @"Sanders", FullAddress = @"Avda. de la Constitución 2222, México D.F., Mexico" });
        this.Add(new EmployeesFlatDetailsItem() { Address = @"Mataderos 2312", Age = 49, City = @"México D.F.", Country = @"Mexico", Fax = @"(5) 555-3995", HireDate = @"2014-01-22", ID = 18, Name = @"Victoria Lincoln", ParentID = -1, Phone = @"(5) 555-3932", PostalCode = 5023, Title = @"Accounting Manager", LastName = @"Lincoln", FullAddress = @"Mataderos 2312, México D.F., Mexico" });
        // ... 15 more items
    }
}
```


<!-- ComponentEnd: TreeGrid -->

## Enabling and Using Cell Merging

Cell merging in the grid is controlled at two levels:

- Grid-level merge mode – determines when merging is applied.
- Column-level merge toggle – determines which columns can merge cells.

### Grid Merge Mode

The grid exposes a `cellMergeMode` property that accepts values from the `GridCellMergeMode` enum:

- `always` - Merges any adjacent cells that meet the merging condition, regardless of sort state.
- `onSort` - Merges adjacent cells only when the column is sorted **(default value)**.

```razor
<IgbTreeGrid Data="Data" CellMergeMode="CellMergeMode" >
    ...
</IgbTreeGrid>

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
<IgbTreeGrid Data="Data" CellMergeMode="CellMergeMode" AutoGenerate="false">
    <IgbColumn Field="OrderID" Header="Order ID" Merge="true"></IgbColumn>
    <IgbColumn Field="ShipperName" Header="Shipper Name" Merge="true"></IgbColumn>
    <IgbColumn Field="Salesperson" Header="Salesperson"></IgbColumn>
</IgbTreeGrid>

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

- [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html)

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
