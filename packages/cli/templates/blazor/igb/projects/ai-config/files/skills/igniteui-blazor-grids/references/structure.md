# Structure - Grid Setup, Columns, Sorting, Filtering & Selection

> **Part of the [`igniteui-blazor-grids`](../SKILL.md) skill hub.**
> For specialized grid types (Tree Grid, Hierarchical Grid, Pivot Grid, Grid Lite) — see [`types.md`](./types.md).

## Contents

- [Quick Start](#quick-start)
- [Column Configuration](#column-configuration)
- [Column Templates](#column-templates)
- [Column Groups (Multi-Column Headers)](#column-groups-multi-column-headers)
- [Multi-Row Layout (MRL)](#multi-row-layout-mrl)
- [Column Pinning](#column-pinning)
- [Sorting](#sorting)
- [Filtering](#filtering)
- [Selection](#selection)
- [Key Rules](#key-rules)

---

## Quick Start

### 1. Register the module in Program.cs

```csharp
using IgniteUI.Blazor.Controls;

builder.Services.AddIgniteUIBlazor(typeof(IgbGridModule));
```

### 2. Add `@using` in _Imports.razor

```razor
@using IgniteUI.Blazor.Controls
```

### 3. Basic grid markup

```razor
<IgbGrid Data="employees" PrimaryKey="Id" AutoGenerate="false"
         Width="100%" Height="500px">
    <IgbColumn Field="Id" Header="ID" DataType="GridColumnDataType.Number" />
    <IgbColumn Field="Name" Header="Full Name" DataType="GridColumnDataType.String" Sortable="true" />
    <IgbColumn Field="HireDate" Header="Hire Date" DataType="GridColumnDataType.Date" Filterable="true" />
    <IgbColumn Field="Salary" Header="Salary" DataType="GridColumnDataType.Currency" />
    <IgbColumn Field="IsActive" Header="Active" DataType="GridColumnDataType.Boolean" />
</IgbGrid>

@code {
    private List<Employee> employees = new();

    protected override void OnInitialized()
    {
        employees = EmployeeService.GetAll();
    }
}
```

### 4. Auto-generated columns

```razor
<IgbGrid Data="employees" PrimaryKey="Id" AutoGenerate="true"
         Width="100%" Height="500px" />
```

When `AutoGenerate="true"`, the grid creates a column for each public property of the data type. You can hook `AutoGenerating` to customize or skip columns:

```razor
<IgbGrid Data="employees" PrimaryKey="Id" AutoGenerate="true"
         AutoGenerating="OnAutoGenerating" />

@code {
    private void OnAutoGenerating(IgbColumnAutoGenerateEventArgs args)
    {
        if (args.Column.Field == "InternalCode")
        {
            args.Cancel = true; // skip this column
        }
        else if (args.Column.Field == "Salary")
        {
            args.Column.DataType = GridColumnDataType.Currency;
            args.Column.Editable = false;
        }
    }
}
```

---

## Column Configuration

### Column data types

Use `GridColumnDataType` to set the type. This controls sorting, filtering, editing, and display:

| Data Type | Enum Value | Behavior |
|---|---|---|
| String | `GridColumnDataType.String` | Text display and filtering |
| Number | `GridColumnDataType.Number` | Numeric sorting and filtering |
| Boolean | `GridColumnDataType.Boolean` | Checkbox display |
| Date | `GridColumnDataType.Date` | Date picker in edit mode |
| DateTime | `GridColumnDataType.DateTime` | Date-time picker in edit mode |
| Currency | `GridColumnDataType.Currency` | Formatted currency display |
| Percent | `GridColumnDataType.Percent` | Formatted percentage display |
| Image | `GridColumnDataType.Image` | Renders image from URL |

### Key column parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| `Field` | `string` | - | Property name on the data object |
| `Header` | `string` | Field name | Column header text |
| `DataType` | `GridColumnDataType` | `String` | Data type for display, sort, filter, edit |
| `Width` | `string` | - | Column width (e.g., `"200px"`, `"20%"`) |
| `MinWidth` | `string` | - | Minimum column width |
| `MaxWidth` | `string` | - | Maximum column width |
| `Sortable` | `bool` | `false` | Enables sorting on this column |
| `Filterable` | `bool` | `true` | Enables filtering on this column |
| `Filterable` | `bool` | `false` | Disable filtering on this column |
| `Editable` | `bool` | `false` | Enables editing on this column |
| `Resizable` | `bool` | `false` | Enables column resizing |
| `Movable` | `bool` | `false` | Enables column moving |
| `Hidden` | `bool` | `false` | Hides the column |
| `Pinned` | `bool` | `false` | Pins the column |
| `Groupable` | `bool` | `false` | Enables grouping for this column (IgbGrid only) |
| `HasSummary` | `bool` | `false` | Enables summaries for this column |
| `DisablePinning` | `bool` | `false` | Disables pinning for this column |
| `DisableHiding` | `bool` | `false` | Prevents hiding this column |
| `CellClasses` | `string` | - | CSS class(es) to apply to cells |
| `HeaderClasses` | `string` | - | CSS class(es) to apply to the header |

---

## Column Templates

### Cell template

Use the `BodyTemplate` render fragment to customize the cell display:

```razor
<IgbColumn Field="Salary" Header="Salary" DataType="GridColumnDataType.Currency">
    <BodyTemplate>
        @{
            var cell = (IgbCellTemplateContext)context;
            var salary = (decimal)cell.Cell.Value;
        }
        <span class="@(salary > 50000 ? "high-salary" : "")">
            @salary.ToString("C")
        </span>
    </BodyTemplate>
</IgbColumn>
```

### Header template

```razor
<IgbColumn Field="Name" Header="Name">
    <HeaderTemplate>
        <div style="display: flex; align-items: center; gap: 4px;">
            <IgbIcon Name="person" Collection="material" />
            <span>Employee Name</span>
        </div>
    </HeaderTemplate>
</IgbColumn>
```

### Edit template

Provide a custom editor for edit mode:

```razor
<IgbColumn Field="Status" Header="Status" Editable="true">
    <InlineEditorTemplate>
        @{
            var cell = (IgbCellTemplateContext)context;
        }
        <IgbSelect @bind-Value="cell.Cell.EditValue">
            <IgbSelectItem Value="Active">Active</IgbSelectItem>
            <IgbSelectItem Value="Inactive">Inactive</IgbSelectItem>
            <IgbSelectItem Value="Pending">Pending</IgbSelectItem>
        </IgbSelect>
    </InlineEditorTemplate>
</IgbColumn>
```

---

## Column Groups (Multi-Column Headers)

Group columns under a shared header:

```razor
<IgbGrid Data="employees" PrimaryKey="Id" AutoGenerate="false">
    <IgbColumn Field="Id" Header="ID" />
    <IgbColumnGroup Header="Personal Info">
        <IgbColumn Field="FirstName" Header="First Name" />
        <IgbColumn Field="LastName" Header="Last Name" />
        <IgbColumn Field="BirthDate" Header="Birth Date" DataType="GridColumnDataType.Date" />
    </IgbColumnGroup>
    <IgbColumnGroup Header="Employment">
        <IgbColumn Field="Department" Header="Department" />
        <IgbColumn Field="HireDate" Header="Hire Date" DataType="GridColumnDataType.Date" />
        <IgbColumn Field="Salary" Header="Salary" DataType="GridColumnDataType.Currency" />
    </IgbColumnGroup>
</IgbGrid>
```

Column groups can be nested for multi-level headers.

---

## Multi-Row Layout (MRL)

Display multiple fields in a single visual row:

```razor
<IgbGrid Data="data" PrimaryKey="Id" AutoGenerate="false">
    <IgbColumnLayout>
        <IgbColumn Field="Name" Header="Name" RowStart="1" ColStart="1" ColEnd="3" />
        <IgbColumn Field="Phone" Header="Phone" RowStart="2" ColStart="1" />
        <IgbColumn Field="Email" Header="Email" RowStart="2" ColStart="2" />
    </IgbColumnLayout>
    <IgbColumnLayout>
        <IgbColumn Field="City" Header="City" RowStart="1" ColStart="1" />
        <IgbColumn Field="Country" Header="Country" RowStart="1" ColStart="2" />
        <IgbColumn Field="PostalCode" Header="ZIP" RowStart="2" ColStart="1" ColEnd="3" />
    </IgbColumnLayout>
</IgbGrid>
```

Each `IgbColumnLayout` defines a group. Within it, `RowStart`, `ColStart`, `RowEnd`, `ColEnd` position columns on a layout grid.

---

## Column Pinning

### Declarative pinning

```razor
<IgbColumn Field="Name" Header="Name" Pinned="true" />
```

### Programmatic pinning

```razor
<IgbGrid @ref="grid" Data="data" PrimaryKey="Id" AutoGenerate="false">
    <IgbColumn Field="Id" Header="ID" />
    <IgbColumn Field="Name" Header="Name" />
</IgbGrid>

<IgbButton @onclick="PinNameColumn">Pin Name</IgbButton>

@code {
    private IgbGrid grid = default!;

    private async Task PinNameColumn()
    {
        var col = grid.GetColumnByName("Name");
        col.Pinned = true;
    }
}
```

### Pin position

Control whether pinned columns appear at the start or end:

```razor
<IgbGrid Data="data" PrimaryKey="Id" Pinning="pinningConfig">
    ...
</IgbGrid>

@code {
    private IgbPinningConfig pinningConfig = new IgbPinningConfig
    {
        Columns = ColumnPinningPosition.End
    };
}
```

---

## Sorting

### Enable sorting on columns

```razor
<IgbColumn Field="Name" Header="Name" Sortable="true" />
<IgbColumn Field="HireDate" Header="Hire Date" Sortable="true" DataType="GridColumnDataType.Date" />
```

### Grid-level sorting mode

| Parameter | Type | Default | Description |
|---|---|---|---|
| `SortingMode` | `SortingMode` | `Single` | `Single` - one column at a time; `Multiple` - multi-column sort |

```razor
<IgbGrid Data="data" PrimaryKey="Id" SortingMode="SortingMode.Multiple">
    <IgbColumn Field="Department" Sortable="true" />
    <IgbColumn Field="Name" Sortable="true" />
</IgbGrid>
```

### Sorting events

| Event | Type | Description |
|---|---|---|
| `SortingDone` | `EventCallback<IgbSortingEventArgs>` | Fires after sorting is applied |

```razor
<IgbGrid Data="data" PrimaryKey="Id" SortingDone="OnSortingDone">
    ...
</IgbGrid>

@code {
    private void OnSortingDone(IgbSortingEventArgs args)
    {
        // React to sorting changes
    }
}
```

### Pre-set sorting expressions

```razor
<IgbGrid Data="data" PrimaryKey="Id" SortingExpressions="sortExpressions">
    ...
</IgbGrid>

@code {
    private IgbSortingExpression[] sortExpressions = new[]
    {
        new IgbSortingExpression
        {
            FieldName = "Name",
            Dir = SortingDirection.Asc
        }
    };
}
```

---

## Filtering

### Quick Filter Row

The default filter row appears below the header:

```razor
<IgbGrid Data="data" PrimaryKey="Id" AllowFiltering="true">
    <IgbColumn Field="Name" Filterable="true" DataType="GridColumnDataType.String" />
    <IgbColumn Field="HireDate" Filterable="true" DataType="GridColumnDataType.Date" />
    <IgbColumn Field="Salary" Filterable="true" DataType="GridColumnDataType.Number" />
</IgbGrid>
```

### Excel-Style Filtering

```razor
<IgbGrid Data="data" PrimaryKey="Id"
         AllowFiltering="true"
         FilterMode="FilterMode.ExcelStyleFilter">
    <IgbColumn Field="Department" Filterable="true" />
    <IgbColumn Field="Name" Filterable="true" />
</IgbGrid>
```

### Advanced Filtering

The advanced filter dialog provides a query-builder experience with AND/OR grouping:

```razor
<IgbGrid Data="data" PrimaryKey="Id"
         AllowAdvancedFiltering="true">
    ...
</IgbGrid>
```

> `AllowAdvancedFiltering` and column-level `AllowFiltering` with `FilterMode` can coexist. The toolbar button opens the advanced dialog, while the column-level filter row remains available.

### Filtering Conditions

The filter condition depends on the column's `DataType`:

| Data Type | Available Conditions |
|---|---|
| String | Contains, StartsWith, EndsWith, Equals, DoesNotEqual, Empty, NotEmpty |
| Number | Equals, DoesNotEqual, GreaterThan, LessThan, GreaterThanOrEqual, LessThanOrEqual, Empty, NotEmpty |
| Boolean | All, True, False, Empty, NotEmpty |
| Date | Equals, DoesNotEqual, Before, After, Today, Yesterday, ThisMonth, LastMonth, NextMonth, ThisYear, LastYear, NextYear, Empty, NotEmpty |

---

## Selection

### Row Selection

```razor
<IgbGrid Data="data" PrimaryKey="Id"
         RowSelection="GridSelectionMode.Multiple"
         RowSelectionChanged="OnRowSelection">
    ...
</IgbGrid>

@code {
    private void OnRowSelection(IgbRowSelectionEventArgs args)
    {
        var newSelection = args.NewSelection; // selected row data
    }
}
```

| `RowSelection` Value | Behavior |
|---|---|
| `GridSelectionMode.None` | No row selection |
| `GridSelectionMode.Single` | Select one row at a time |
| `GridSelectionMode.Multiple` | Multi-select with checkboxes |
| `GridSelectionMode.MultipleCascade` | Multi-select with cascade (Tree Grid: selects children when parent is selected) |

### Cell Selection

```razor
<IgbGrid Data="data" PrimaryKey="Id"
         CellSelection="GridSelectionMode.Multiple"
         RangeSelected="OnRangeSelected">
    ...
</IgbGrid>

@code {
    private void OnRangeSelected(IgbGridForOfState<IgbCellType> args)
    {
        // Handle range selection
    }
}
```

### Column Selection

Enable per-column:

```razor
<IgbColumn Field="Name" Selectable="true" />
```

Or grid-wide:

```razor
<IgbGrid Data="data" PrimaryKey="Id"
         ColumnSelection="GridSelectionMode.Multiple">
    ...
</IgbGrid>
```

### Getting selected rows

```razor
@code {
    private IgbGrid grid = default!;

    private void GetSelectedRows()
    {
        var selectedRows = grid.SelectedRows; // object[] of primary key values
    }
}
```

### Programmatic selection

```razor
@code {
    private IgbGrid grid = default!;

    private async Task SelectRows()
    {
        await grid.SelectRowsAsync(new object[] { 1, 3, 5 }); // select by primary keys
    }

    private async Task DeselectAll()
    {
        await grid.DeselectAllRowsAsync();
    }
}
```

---

## Key Rules

1. **Always set `PrimaryKey`** - it is required for selection, editing, and row identity.
2. **`AutoGenerate="false"` is recommended** - it gives you full control over column order, types, and templates.
3. **Column `DataType` matters** - it determines the filter conditions, sort behavior, and edit experience. Always set it explicitly.
4. **Registration is mandatory** - every grid module must be registered in `Program.cs` or the component silently fails to render.
5. **Use PascalCase for all parameters** - Blazor parameters use PascalCase (`Sortable`, `Filterable`), not kebab-case.
6. **Data must be a C# collection** - `List<T>`, `T[]`, or `IEnumerable<T>`. Not a JSON string or JavaScript object.
7. **Use `@ref` for programmatic access** - declare `private IgbGrid grid = default!;` and use `@ref="grid"` on the component.