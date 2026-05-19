# Features - Grouping, Summaries, Merging, Toolbar, Export, Row Drag, Action Strip, Master-Detail & Clipboard

> **Part of the [`igniteui-blazor-grids`](../SKILL.md) skill hub.**
> For grid setup and column configuration — see [`structure.md`](./structure.md). 
> For cell and row editing — see [`editing.md`](./editing.md).

## Contents

- [Grouping (IgbGrid Only)](#grouping-igbgrid-only)
- [Summaries](#summaries)
- [Cell Merging (IgbGrid Only)](#cell-merging-igbgrid-only)
- [Toolbar](#toolbar)
- [Export](#export)
- [Virtualization & Performance](#virtualization--performance)
- [Row Drag](#row-drag)
- [Action Strip](#action-strip)
- [Master-Detail (IgbGrid Only)](#master-detail-igbgrid-only)
- [Clipboard](#clipboard)
- [Key Rules](#key-rules)

---

## Grouping (IgbGrid Only)

Grouping is exclusive to the Flat Grid (`IgbGrid`). Tree Grid and Hierarchical Grid do not support grouping.

### Enable grouping

```razor
<IgbGrid Data="data" PrimaryKey="Id" AutoGenerate="false">
    <IgbColumn Field="Department" Header="Department" Groupable="true" />
    <IgbColumn Field="Name" Header="Name" />
    <IgbColumn Field="Salary" Header="Salary" DataType="GridColumnDataType.Currency" />
</IgbGrid>
```

Users can drag column headers to the group area, or click the column menu grouping option.

### Pre-set grouping expressions

```razor
<IgbGrid Data="data" PrimaryKey="Id" GroupingExpressions="groupingExpressions">
    <IgbColumn Field="Department" Groupable="true" />
    <IgbColumn Field="Name" />
</IgbGrid>

@code {
    private IgbGroupingExpression[] groupingExpressions = new[]
    {
        new IgbGroupingExpression
        {
            FieldName = "Department",
            Dir = SortingDirection.Asc
        }
    };
}
```

### Group row template

Customize the group row:

```razor
<IgbGrid Data="data" PrimaryKey="Id">
    <IgbColumn Field="Department" Groupable="true" />
    <GroupRowTemplate>
        @{
            var groupRow = (IgbGroupByRowTemplateContext)context;
        }
        <span>
            <strong>@groupRow.GroupRow.Expression.FieldName</strong>:
            @groupRow.GroupRow.Value
            (@groupRow.GroupRow.Records.Count items)
        </span>
    </GroupRowTemplate>
</IgbGrid>
```

### Hide group area

```razor
<IgbGrid Data="data" PrimaryKey="Id" HideGroupedColumns="true">
    ...
</IgbGrid>
```

### Grouping events

| Event | Type | Description |
|---|---|---|
| `GroupingDone` | `EventCallback<IgbGroupingDoneEventArgs>` | Fires after a column is grouped/ungrouped |

---

## Summaries

### Built-in summaries

Enable with `HasSummary="true"` on a column. The built-in summaries depend on the column's data type:

| Data Type | Default Summaries |
|---|---|
| String | Count |
| Number | Count, Min, Max, Sum, Avg |
| Date | Count, Earliest, Latest |
| Boolean | Count |

```razor
<IgbGrid Data="data" PrimaryKey="Id">
    <IgbColumn Field="Name" Header="Name" HasSummary="true" DataType="GridColumnDataType.String" />
    <IgbColumn Field="Salary" Header="Salary" HasSummary="true" DataType="GridColumnDataType.Number" />
    <IgbColumn Field="HireDate" Header="Hire Date" HasSummary="true" DataType="GridColumnDataType.Date" />
</IgbGrid>
```

### Custom summary operands

Extend `IgbNumberSummaryOperand` (or `IgbDateSummaryOperand`, `IgbSummaryOperand`) and override `Operate()` to return `IgbSummaryResult[]`. Apply via `Summaries` parameter:

```razor
<IgbColumn Field="Salary" Header="Salary" HasSummary="true"
           Summaries="typeof(MySalarySummary)" />
```

> For full custom summary class syntax, call `get_doc(framework: "blazor", slug: "grids/grid/summaries")` and use `get_api_reference` for the exact API contract.

### Summary position

```razor
<IgbGrid Data="data" PrimaryKey="Id" SummaryPosition="GridSummaryPosition.Top">
    ...
</IgbGrid>
```

Values: `GridSummaryPosition.Top`, `GridSummaryPosition.Bottom` (default).

### Summary calculation mode

```razor
<IgbGrid Data="data" PrimaryKey="Id" SummaryCalculationMode="GridSummaryCalculationMode.RootLevelOnly">
    ...
</IgbGrid>
```

Values: `GridSummaryCalculationMode.RootLevelOnly`, `GridSummaryCalculationMode.ChildLevelsOnly`, `GridSummaryCalculationMode.RootAndChildLevels`.

---

## Cell Merging (IgbGrid Only)

Merge visually identical adjacent cells in a column:

```razor
<IgbGrid Data="data" PrimaryKey="Id">
    <IgbColumn Field="Country" Header="Country" Merge="true" />
    <IgbColumn Field="City" Header="City" Merge="true" />
    <IgbColumn Field="Name" Header="Name" />
</IgbGrid>
```

Cell merging requires the data to be sorted by the merged columns for meaningful visual grouping.

---

## Toolbar

The grid toolbar provides built-in UI for column hiding, column pinning, exporting, and advanced filtering.

### Basic toolbar

```razor
<IgbGrid Data="data" PrimaryKey="Id">
    <IgbGridToolbar>
        <IgbGridToolbarTitle>Employees</IgbGridToolbarTitle>
        <IgbGridToolbarActions>
            <IgbGridToolbarHiding />
            <IgbGridToolbarPinning />
            <IgbGridToolbarExporter />
            <IgbGridToolbarAdvancedFiltering />
        </IgbGridToolbarActions>
    </IgbGridToolbar>
    <IgbColumn Field="Name" Header="Name" />
    <IgbColumn Field="Department" Header="Department" />
</IgbGrid>
```

### Toolbar components

| Component | Description |
|---|---|
| `IgbGridToolbar` | Container for the toolbar |
| `IgbGridToolbarTitle` | Displays a title/caption |
| `IgbGridToolbarActions` | Container for action buttons |
| `IgbGridToolbarHiding` | Column hiding UI |
| `IgbGridToolbarPinning` | Column pinning UI |
| `IgbGridToolbarExporter` | Export to Excel/CSV buttons |
| `IgbGridToolbarAdvancedFiltering` | Opens the advanced filtering dialog |

### Custom toolbar content

```razor
<IgbGridToolbar>
    <IgbGridToolbarTitle>My Data</IgbGridToolbarTitle>
    <IgbGridToolbarActions>
        <IgbButton @onclick="RefreshData">Refresh</IgbButton>
        <IgbGridToolbarExporter />
    </IgbGridToolbarActions>
</IgbGridToolbar>
```

---

## Export

### Excel Export

```razor
<IgbGrid @ref="grid" Data="data" PrimaryKey="Id">
    <IgbGridToolbar>
        <IgbGridToolbarActions>
            <IgbGridToolbarExporter ExportExcel="true" ExportCSV="false" />
        </IgbGridToolbarActions>
    </IgbGridToolbar>
    ...
</IgbGrid>
```

### Programmatic export

```razor
@inject IgbExcelExporterService ExcelExporter
@inject IgbCsvExporterService CsvExporter

<IgbGrid @ref="grid" Data="data" PrimaryKey="Id">
    ...
</IgbGrid>

<IgbButton @onclick="ExportToExcel">Export to Excel</IgbButton>
<IgbButton @onclick="ExportToCsv">Export to CSV</IgbButton>

@code {
    private IgbGrid grid = default!;

    private async Task ExportToExcel()
    {
        var options = new IgbExcelExporterOptions("employees");
        await ExcelExporter.ExportAsync(grid, options);
    }

    private async Task ExportToCsv()
    {
        var options = new IgbCsvExporterOptions("employees");
        options.FileType = CsvFileTypes.CSV;
        await CsvExporter.ExportAsync(grid, options);
    }
}
```

### Export options

| Option | Type | Description |
|---|---|---|
| `FileName` | `string` | Name of the exported file (without extension) |
| `IgnoreFiltering` | `bool` | Export all data, not just filtered |
| `IgnoreSorting` | `bool` | Export in original data order |
| `IgnoreColumnsVisibility` | `bool` | Include hidden columns in export |
| `ExportGroupedRows` | `bool` | Include group rows in export (IgbGrid only) |

### Export events

| Event | Description |
|---|---|
| `ExportStarted` | Fires before export begins - cancel or configure here |
| `ExportEnded` | Fires after export completes |
| `ColumnExporting` | Fires for each column - skip or modify |
| `RowExporting` | Fires for each row - skip or modify |

---

## Virtualization & Performance

Both row and column virtualization are **enabled by default** when the grid has a fixed `Height`. The grid only renders DOM elements for the visible portion.

### Requirements for virtualization

1. **Set `Height`** on the grid - virtualization needs a fixed pixel or percentage height.
2. **Set `Width`** on columns - column virtualization requires defined column widths when total column width exceeds the grid width.

### Best practices

- Bind to a concrete `List<T>` or `T[]`, not `IQueryable`.
- For large data sets (100k+ rows), consider remote paging or virtualized data loading (see `references/paging-remote.md`).
- Avoid complex templates on frequently re-rendered columns.
- Use `OnDemand` summaries if summaries on large data sets cause slow rendering.

---

## Row Drag

Enable row reordering or drag-to-external targets:

```razor
<IgbGrid Data="data" PrimaryKey="Id" RowDraggable="true"
         RowDragEnd="OnRowDragEnd">
    ...
</IgbGrid>

@code {
    private void OnRowDragEnd(IgbRowDragEndEventArgs args)
    {
        // args.DragData contains the dragged row data
    }
}
```

### Row drag events

| Event | Type | Description |
|---|---|---|
| `RowDragStart` | `EventCallback<IgbRowDragStartEventArgs>` | Fires when drag begins |
| `RowDragEnd` | `EventCallback<IgbRowDragEndEventArgs>` | Fires when drag ends (drop) |

### Custom drag ghost

```razor
<IgbGrid Data="data" PrimaryKey="Id" RowDraggable="true">
    <DragGhostTemplate>
        @{
            var row = (IgbGridRowDragGhostContext)context;
        }
        <div class="custom-ghost">
            Moving: @row.RowData
        </div>
    </DragGhostTemplate>
    ...
</IgbGrid>
```

---

## Action Strip

Add context actions (edit, delete, pin) that appear when hovering or selecting a row:

```razor
<IgbGrid Data="data" PrimaryKey="Id" RowEditable="true">
    <IgbColumn Field="Name" Header="Name" Editable="true" />
    <IgbColumn Field="Salary" Header="Salary" Editable="true" />
    <IgbActionStrip>
        <IgbGridEditingActions AddRow="true" />
        <IgbGridPinningActions />
    </IgbActionStrip>
</IgbGrid>
```

### Action strip components

| Component | Description |
|---|---|
| `IgbActionStrip` | Container for row-level actions |
| `IgbGridEditingActions` | Provides edit/delete/add row buttons |
| `IgbGridPinningActions` | Provides pin/unpin row buttons |

### Custom actions

```razor
<IgbActionStrip>
    <IgbGridEditingActions />
    <IgbButton @onclick="() => ViewDetails(currentRowId)">
        <IgbIcon Name="visibility" Collection="material" />
    </IgbButton>
</IgbActionStrip>
```

---

## Master-Detail (IgbGrid Only)

Show a detail view for each expanded row. This is specific to the flat grid - for multi-schema parent-child, use Hierarchical Grid instead.

```razor
<IgbGrid Data="customers" PrimaryKey="CustomerId" AutoGenerate="false">
    <IgbColumn Field="CustomerId" Header="ID" />
    <IgbColumn Field="Name" Header="Customer Name" />
    <IgbColumn Field="Country" Header="Country" />
    <DetailTemplate>
        @{
            var customer = (Customer)context;
        }
        <div style="padding: 16px;">
            <h4>Orders for @customer.Name</h4>
            <IgbGrid Data="customer.Orders" PrimaryKey="OrderId" AutoGenerate="true"
                     Width="100%" Height="200px" />
        </div>
    </DetailTemplate>
</IgbGrid>

@code {
    private List<Customer> customers = new();  // Customer has Orders child collection
}
```

> **Important:** Master-detail via `DetailTemplate` is not available on Tree Grid, Hierarchical Grid, or Pivot Grid. For multi-schema hierarchies, use `IgbHierarchicalGrid` with `IgbRowIsland`.

---

## Clipboard

Grid supports copy-to-clipboard out of the box.

### Key bindings

| Keys | Action |
|---|---|
| `Ctrl+C` | Copy selected cells |
| `Ctrl+Shift+H` | Copy with headers |

### Configuration

```razor
<IgbGrid Data="data" PrimaryKey="Id"
         ClipboardOptions="clipboardOptions">
    ...
</IgbGrid>

@code {
    private IgbClipboardOptions clipboardOptions = new IgbClipboardOptions
    {
        Enabled = true,
        CopyHeaders = true,
        CopyFormatters = true,
        Separator = "\t"
    };
}
```

---

## Key Rules

1. **Grouping is IgbGrid only** - do not attempt `Groupable` on Tree Grid or Hierarchical Grid columns.
2. **Cell merging is IgbGrid only** - it has no effect on other grid types.
3. **Master-detail is IgbGrid only** - for other grids, use Tree Grid or Hierarchical Grid.
4. **Virtualization requires a fixed grid height** - without `Height`, all rows render.
5. **Export requires the toolbar or programmatic service injection** - register `IgbExcelExporterService` or `IgbCsvExporterService` if using programmatic export.
6. **Action strip requires `RowEditable="true"`** for editing actions to function.
7. **Summaries respect the `SummaryCalculationMode`** - set it for tree/hierarchical grids to control level-based calculations.