# Grid Types - Grid Lite, Tree Grid, Hierarchical Grid & Pivot Grid

> **Part of the [`igniteui-blazor-grids`](../SKILL.md) skill hub.**
> For `IgbGrid` setup and column configuration — see [`structure.md`](./structure.md).

## Contents

- [Grid Lite (`IgbGridLite`)](#grid-lite-igbgridlite)
- [Tree Grid (`IgbTreeGrid`)](#tree-grid-igbtreegrid)
- [Hierarchical Grid (`IgbHierarchicalGrid`)](#hierarchical-grid-igbhierarchicalgrid)
- [Pivot Grid (`IgbPivotGrid`)](#pivot-grid-igbpivotgrid)
- [Key Rules by Grid Type](#key-rules-by-grid-type)

---

## Grid Lite (`IgbGridLite`)

Lightweight, read-only grid with sorting, filtering, column resizing, and virtualization. MIT-licensed, separate package - **not** bundled with `IgniteUI.Blazor`.

> **No editing, selection, or paging.** Upgrade to `IgbGrid` when those features are needed.

### Registration

```csharp
// Install: dotnet add package IgniteUI.Blazor.GridLite
builder.Services.AddIgniteUIBlazor(typeof(IgbGridLiteModule));
```

Add the Grid Lite CSS in `index.html`:

```html
<link href="_content/IgniteUI.Blazor.GridLite/css/themes/light/bootstrap.css" rel="stylesheet" />
```

### Basic usage

Columns are declared as child elements (`<IgbGridLiteColumn>`), not via a `Columns` parameter:

```razor
<IgbGridLite TItem="Employee" Data="@employees">
    <IgbGridLiteColumn Field="@nameof(Employee.Name)" Header="Name" DataType="GridLiteColumnDataType.String" Sortable Filterable Resizable />
    <IgbGridLiteColumn Field="@nameof(Employee.Department)" Header="Department" Sortable />
    <IgbGridLiteColumn Field="@nameof(Employee.Salary)" Header="Salary" DataType="GridLiteColumnDataType.Number" Width="150px" />
    <IgbGridLiteColumn Field="@nameof(Employee.HireDate)" Header="Hire Date" DataType="GridLiteColumnDataType.Date" Sortable />
</IgbGridLite>
```

### Column properties

| Property | Description |
|---|---|
| `Field` | Property name on the data item |
| `Header` | Column header text |
| `DataType` | `GridLiteColumnDataType.String/Number/Boolean/Date` |
| `Width` | Column width (e.g., `"150px"`) |
| `Sortable` | Enables sorting on this column |
| `SortingCaseSensitive` | Case-sensitive sorting (use alongside `Sortable`) |
| `Filterable` | Enables filtering on this column |
| `FilteringCaseSensitive` | Case-sensitive filtering (use alongside `Filterable`) |
| `Resizable` | Allows column resize |
| `Hidden` | Hides the column |

> **`Key` vs `Field`:** Use `Field` on column definitions. In sort/filter expression objects (`IgbGridLiteSortingExpression`, `IgbGridLiteFilterExpression`), use `Key` to identify the field.

### Grid-level sorting options

```razor
<IgbGridLite TItem="ProductInfo" Data="@products" SortingOptions="@sortingOptions">
    <IgbGridLiteColumn Field="Name" Header="Name" DataType="GridLiteColumnDataType.String" Sortable />
    <IgbGridLiteColumn Field="Price" Header="Price" DataType="GridLiteColumnDataType.Number" Width="150px" Sortable />
</IgbGridLite>

@code {
    private IgbGridLiteSortingOptions sortingOptions = new()
    {
        Mode = GridLiteSortingMode.Multiple  // default is Single
    };
}
```

Tri-state sorting (asc → desc → none) is always enabled - there is no property to disable it.

### Dynamic columns

Use `@if` conditional rendering. There is no `UpdateColumnsAsync()` method:

```razor
<IgbGridLite TItem="ProductInfo" Data="@products">
    <IgbGridLiteColumn Field="Name" Header="Name" Sortable />
    @if (showRating)
    {
        <IgbGridLiteColumn Field="Rating" Header="Rating" DataType="GridLiteColumnDataType.Number" />
    }
</IgbGridLite>

@code {
    private bool showRating = true;
    private void ToggleRating() => showRating = !showRating;
}
```

### Sorting and filtering events

```razor
<IgbGridLite TItem="ProductInfo" Data="@products"
             Sorting="@HandleSorting"
             Sorted="@HandleSorted"
             Filtering="@HandleFiltering"
             Filtered="@HandleFiltered">
    <IgbGridLiteColumn Field="Name" Header="Name" Sortable Filterable />
</IgbGridLite>
```

### Grid Lite key rules

1. **Declarative columns** - use `<IgbGridLiteColumn>` child elements. The old `Columns` parameter + `List<IgbColumnConfiguration>` is removed.
2. **Column properties**: `Key` → `Field`, `Type` → `DataType`, `HeaderText` → `Header`.
3. **Sort/filter attributes**: `Sort = true` → `Sortable`; `Filter = true` → `Filterable`.
4. **Grid-level sorting**: `SortConfiguration` → `SortingOptions`; `IgbGridLiteSortConfiguration` → `IgbGridLiteSortingOptions`; `Multiple = true/false` → `Mode = GridLiteSortingMode.Multiple/Single`.
5. **Dynamic columns via `@if`** - `UpdateColumnsAsync()` is removed.
6. **Own package and CSS** - install `IgniteUI.Blazor.GridLite` and include its CSS theme separately.
7. **Upgrade path** - when Grid Lite's capabilities are insufficient, upgrade to `IgbGrid`.

---

## Tree Grid (`IgbTreeGrid`)

The Tree Grid displays self-referencing (parent-child) data in a single schema. Rows can be expanded to reveal child rows.

### Registration

```csharp
builder.Services.AddIgniteUIBlazor(typeof(IgbTreeGridModule));
```

### Option A - Foreign Key (flat data with parent-child relationship)

```razor
<IgbTreeGrid Data="employees" PrimaryKey="Id" ForeignKey="ManagerId"
             AutoGenerate="false" Width="100%" Height="600px">
    <IgbColumn Field="Id" Header="ID" DataType="GridColumnDataType.Number" />
    <IgbColumn Field="Name" Header="Employee" DataType="GridColumnDataType.String" />
    <IgbColumn Field="Title" Header="Title" DataType="GridColumnDataType.String" />
    <IgbColumn Field="HireDate" Header="Hire Date" DataType="GridColumnDataType.Date" />
</IgbTreeGrid>

@code {
    private List<Employee> employees = new()
    {
        // flat list: root rows have null ManagerId
        new(1, "Casey Houston", "VP", null, new DateTime(2017, 1, 15)),
        new(2, "Gilberto Todd", "Director", 1, new DateTime(2018, 3, 20)),
        // ...
    };

    record Employee(int Id, string Name, string Title, int? ManagerId, DateTime HireDate);
}
```

The `ForeignKey` property identifies which field references the parent's `PrimaryKey`. Rows with `null` (or 0/default) in the foreign key are root-level.

### Option B - Child Collection (nested data)

```razor
<IgbTreeGrid Data="fileSystem" PrimaryKey="Id" ChildDataKey="Children"
             AutoGenerate="false" Width="100%" Height="500px">
    <IgbColumn Field="Name" Header="Name" DataType="GridColumnDataType.String" />
    <IgbColumn Field="Size" Header="Size (KB)" DataType="GridColumnDataType.Number" />
    <IgbColumn Field="Type" Header="Type" DataType="GridColumnDataType.String" />
</IgbTreeGrid>

@code {
    private List<FileNode> fileSystem = new()
    {
        new FileNode { Id = 1, Name = "Documents", Type = "Folder", Size = 0,
            Children = new() {
                new FileNode { Id = 2, Name = "Resume.pdf", Type = "PDF", Size = 250 }
            }
        },
        // ...
    };

    public class FileNode
    {
        public int Id { get; set; }
        public string Name { get; set; } = "";
        public string Type { get; set; } = "";
        public int Size { get; set; }
        public List<FileNode> Children { get; set; } = new();
    }
}
```

The `ChildDataKey` property identifies the collection property on each row that holds its children.

### Cascade selection

When using `RowSelection="GridSelectionMode.MultipleCascade"`, selecting a parent automatically selects all its descendants:

```razor
<IgbTreeGrid Data="data" PrimaryKey="Id" ForeignKey="ParentId"
             RowSelection="GridSelectionMode.MultipleCascade">
    ...
</IgbTreeGrid>
```

### Expansion depth

Control how many levels are expanded by default:

```razor
<IgbTreeGrid Data="data" PrimaryKey="Id" ChildDataKey="Children"
             ExpansionDepth="1">
    ...
</IgbTreeGrid>
```

`ExpansionDepth="0"` collapses all; `ExpansionDepth="1"` shows the first level expanded.

### Load on Demand

Load child data lazily when a parent row is expanded:

```razor
<IgbTreeGrid Data="rootData" PrimaryKey="Id" HasChildrenKey="HasChildren"
             LoadChildrenOnDemand="OnLoadChildren">
    <IgbColumn Field="Name" Header="Name" />
    <IgbColumn Field="EmployeeCount" Header="Count" />
</IgbTreeGrid>

@code {
    private List<Department> rootData = new();

    private async Task OnLoadChildren(IgbTreeGridLoadOnDemandEventArgs args)
    {
        var parentId = (int)args.ParentID;
        var children = await DepartmentService.GetChildrenAsync(parentId);
        args.ChildData = children.ToArray();
    }

    public class Department
    {
        public int Id { get; set; }
        public string Name { get; set; } = "";
        public int EmployeeCount { get; set; }
        public bool HasChildren { get; set; }
    }
}
```

- `HasChildrenKey` tells the grid which rows have children (so it shows the expand arrow).
- `LoadChildrenOnDemand` is the callback that fetches and supplies children.

### Tree Grid key parameters

| Parameter | Type | Description |
|---|---|---|
| `PrimaryKey` | `string` | Unique identifier field |
| `ForeignKey` | `string` | Parent reference field (flat data) |
| `ChildDataKey` | `string` | Child collection property (nested data) |
| `HasChildrenKey` | `string` | Boolean field for load-on-demand |
| `ExpansionDepth` | `int` | Initial expansion level |
| `LoadChildrenOnDemand` | `EventCallback<IgbTreeGridLoadOnDemandEventArgs>` | Lazy-load callback |
| `CascadeOnDelete` | `CascadeOnDelete` | `CascadeOnDelete.None` or `CascadeOnDelete.Cascade` - controls whether deleting a parent deletes children |

---

## Hierarchical Grid (`IgbHierarchicalGrid`)

The Hierarchical Grid handles **multi-schema** parent-child data where each level has its own columns and configuration. Use `IgbRowIsland` for each child level.

### Registration

```csharp
builder.Services.AddIgniteUIBlazor(typeof(IgbHierarchicalGridModule));
```

### Basic usage

```razor
<IgbHierarchicalGrid Data="customers" PrimaryKey="CustomerId"
                      AutoGenerate="false" Width="100%" Height="600px">
    <IgbColumn Field="CustomerId" Header="ID" DataType="GridColumnDataType.Number" />
    <IgbColumn Field="CompanyName" Header="Company" DataType="GridColumnDataType.String" />
    <IgbColumn Field="ContactName" Header="Contact" DataType="GridColumnDataType.String" />

    <IgbRowIsland Key="Orders" PrimaryKey="OrderId" AutoGenerate="false">
        <IgbColumn Field="OrderId" Header="Order ID" DataType="GridColumnDataType.Number" />
        <IgbColumn Field="OrderDate" Header="Date" DataType="GridColumnDataType.Date" />
        <IgbColumn Field="ShipCountry" Header="Ship Country" DataType="GridColumnDataType.String" />

        <IgbRowIsland Key="OrderDetails" PrimaryKey="DetailId" AutoGenerate="false">
            <IgbColumn Field="DetailId" Header="Detail ID" DataType="GridColumnDataType.Number" />
            <IgbColumn Field="ProductName" Header="Product" DataType="GridColumnDataType.String" />
            <IgbColumn Field="Quantity" Header="Qty" DataType="GridColumnDataType.Number" />
            <IgbColumn Field="UnitPrice" Header="Price" DataType="GridColumnDataType.Currency" />
        </IgbRowIsland>
    </IgbRowIsland>
</IgbHierarchicalGrid>

@code {
    private List<Customer> customers = new();

    protected override void OnInitialized()
    {
        customers = CustomerService.GetCustomersWithOrders();
    }

    public class Customer
    {
        public int CustomerId { get; set; }
        public string CompanyName { get; set; } = "";
        public string ContactName { get; set; } = "";
        public List<Order> Orders { get; set; } = new();
    }

    public class Order
    {
        public int OrderId { get; set; }
        public DateTime OrderDate { get; set; }
        public string ShipCountry { get; set; } = "";
        public List<OrderDetail> OrderDetails { get; set; } = new();
    }

    public class OrderDetail
    {
        public int DetailId { get; set; }
        public string ProductName { get; set; } = "";
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
    }
}
```

### How `IgbRowIsland` works

- The `Key` property matches the collection property name on the parent data object (e.g., `Key="Orders"` matches `Customer.Orders`).
- Each `IgbRowIsland` is a **template** - it defines columns and features for all child grids at that level.
- Row islands can be nested to any depth.
- Each child grid instance is independent - it has its own sorting, filtering, selection, and paging state.

### Independent feature configuration per level

```razor
<IgbHierarchicalGrid Data="customers" PrimaryKey="CustomerId"
                      RowSelection="GridSelectionMode.Multiple"
                      AllowFiltering="true">
    <IgbColumn Field="CompanyName" Sortable="true" Filterable="true" />

    <IgbRowIsland Key="Orders" PrimaryKey="OrderId"
                   RowSelection="GridSelectionMode.Single"
                   AllowFiltering="true"
                   FilterMode="FilterMode.ExcelStyleFilter">
        <IgbColumn Field="OrderDate" Sortable="true" Filterable="true" />
        <IgbColumn Field="Total" HasSummary="true" />
    </IgbRowIsland>
</IgbHierarchicalGrid>
```

### Accessing child grid instances

When a user expands a row, a child grid instance is created. Access it via the `GridCreated` event:

```razor
<IgbHierarchicalGrid Data="customers" PrimaryKey="CustomerId">
    <IgbColumn Field="CompanyName" />
    <IgbRowIsland Key="Orders" PrimaryKey="OrderId"
                   GridCreated="OnChildGridCreated">
        <IgbColumn Field="OrderId" />
        <IgbColumn Field="Total" />
    </IgbRowIsland>
</IgbHierarchicalGrid>

@code {
    private void OnChildGridCreated(IgbGridCreatedEventArgs args)
    {
        var childGrid = args.Owner; // the IgbGrid instance for this child level
        // Perform operations on the child grid
    }
}
```

### Hierarchical Grid key parameters

| Parameter | Type | Description |
|---|---|---|
| `Data` | `object` | Root-level data collection |
| `PrimaryKey` | `string` | Unique identifier for each level |
| `AutoGenerate` | `bool` | Auto-generate columns for each level |

### IgbRowIsland key parameters

| Parameter | Type | Description |
|---|---|---|
| `Key` | `string` | Property name of the child collection on the parent object |
| `PrimaryKey` | `string` | Unique identifier for this level |
| `AutoGenerate` | `bool` | Auto-generate columns |
| `GridCreated` | `EventCallback<IgbGridCreatedEventArgs>` | Fires when a child grid is created on expand |
| `GridInitialized` | `EventCallback<IgbGridCreatedEventArgs>` | Fires when a child grid is initialized |

All standard grid features (sorting, filtering, editing, selection, toolbar) are available on `IgbRowIsland` - they apply to every child grid instance created from that template.

---

## Pivot Grid (`IgbPivotGrid`)

The Pivot Grid provides pivot-table-style analytics with configurable dimensions (rows/columns/filters) and aggregation values.

### Registration

```csharp
builder.Services.AddIgniteUIBlazor(typeof(IgbPivotGridModule));
```

### Basic usage

```razor
<IgbPivotGrid Data="salesData" PivotConfiguration="pivotConfig"
              Width="100%" Height="600px" />

@code {
    private List<SalesRecord> salesData = new();
    private IgbPivotConfiguration pivotConfig = default!;

    protected override void OnInitialized()
    {
        salesData = SalesService.GetSalesData();

        pivotConfig = new IgbPivotConfiguration
        {
            Rows = new List<IgbPivotDimension>
            {
                new IgbPivotDimension { MemberName = "Country", Enabled = true },
                new IgbPivotDimension { MemberName = "City", Enabled = true }
            },
            Columns = new List<IgbPivotDimension>
            {
                new IgbPivotDimension { MemberName = "Year", Enabled = true }
            },
            Values = new List<IgbPivotValue>
            {
                new IgbPivotValue
                {
                    Member = "Revenue",
                    Aggregate = new IgbPivotAggregation { AggregatorName = PivotAggregationType.SUM, Key = "SUM", Label = "Sum of Revenue" },
                    Enabled = true
                }
            },
            Filters = new List<IgbPivotDimension>
            {
                new IgbPivotDimension { MemberName = "ProductCategory", Enabled = true }
            }
        };
    }

    public class SalesRecord
    {
        public string Country { get; set; } = "";
        public string City { get; set; } = "";
        public int Year { get; set; }
        public string ProductCategory { get; set; } = "";
        public decimal Revenue { get; set; }
        public int UnitsSold { get; set; }
    }
}
```

### IPivotConfiguration structure

| Property | Type | Description |
|---|---|---|
| `Rows` | `List<IgbPivotDimension>` | Dimensions placed on rows |
| `Columns` | `List<IgbPivotDimension>` | Dimensions placed on columns |
| `Values` | `List<IgbPivotValue>` | Measures/aggregations |
| `Filters` | `List<IgbPivotDimension>` | Dimensions used as filters (shown in filter chip area) |

### IgbPivotDimension

| Property | Type | Description |
|---|---|---|
| `MemberName` | `string` | Data property name |
| `Enabled` | `bool` | Whether this dimension is active |
| `DisplayName` | `string` | Custom display label |
| `ChildLevel` | `IgbPivotDimension` | Nested hierarchy dimension |
| `SortDirection` | `SortingDirection` | Sort direction for this dimension |

### IgbPivotValue

| Property | Type | Description |
|---|---|---|
| `Member` | `string` | Data property to aggregate |
| `Aggregate` | `IgbPivotAggregation` | Aggregation function |
| `Enabled` | `bool` | Whether this value is active |
| `DisplayName` | `string` | Custom display label |
| `Formatter` | `Func<object, string>?` | Custom value formatter |

### Built-in aggregation types

| `PivotAggregationType` | Description |
|---|---|
| `SUM` | Sum of values |
| `COUNT` | Count of records |
| `MIN` | Minimum value |
| `MAX` | Maximum value |
| `AVG` | Average value |

### Pivot Data Selector

Add a panel that lets users drag dimensions and values interactively:

```razor
<div style="display: flex; gap: 16px;">
    <IgbPivotDataSelector @ref="selector" Grid="pivotGrid" />
    <IgbPivotGrid @ref="pivotGrid" Data="salesData" PivotConfiguration="pivotConfig"
                   Width="100%" Height="600px" />
</div>

@code {
    private IgbPivotGrid pivotGrid = default!;
    private IgbPivotDataSelector selector = default!;
}
```

### Pivot Grid is read-only

The Pivot Grid does not support cell editing, row editing, or batch editing. It is a read-only analytical view. If users need to edit the source data, display it in a separate `IgbGrid`.

---

## Key Rules by Grid Type

### Tree Grid rules

1. Use **either** `ForeignKey` (flat data) **or** `ChildDataKey` (nested data), never both.
2. `PrimaryKey` is required.
3. Root rows have `null`/`0`/default in the foreign key field, or are the top-level objects in a nested collection.
4. `MultipleCascade` selection cascades to all descendants.
5. Load-on-demand requires both `HasChildrenKey` and `LoadChildrenOnDemand`.

### Hierarchical Grid rules

1. `IgbRowIsland.Key` must exactly match the collection property name on the parent data class (case-sensitive).
2. Each level is independent - it has its own columns, sorting, filtering, and editing state.
3. Access child grid instances via `GridCreated`, never assume a child grid exists before expansion.
4. Nesting depth is unlimited - nest `IgbRowIsland` within `IgbRowIsland`.

### Pivot Grid rules

1. Pivot Grid is **read-only** - no cell/row/batch editing.
2. Configure dimensions and values via `IgbPivotConfiguration` in C#.
3. Sorting/filtering in the pivot is dimension-based, not column-based.
4. Use `IgbPivotDataSelector` for an interactive drag-and-drop UI.
5. Row selection, cell selection, and column selection are not supported.