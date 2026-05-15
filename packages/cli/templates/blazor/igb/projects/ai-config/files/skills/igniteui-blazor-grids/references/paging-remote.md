# Paging, Remote Data & Virtualization

> **Part of the [`igniteui-blazor-grids`](../SKILL.md) skill hub.**
> For grid setup and column configuration — see [`structure.md`](./structure.md).

## Contents

- [Paging with `IgbPaginator`](#paging-with-igbpaginator)
- [Remote Paging](#remote-paging)
- [Remote Data Operations](#remote-data-operations)
- [Virtualization](#virtualization)
- [Key Rules](#key-rules)

---

## Paging with `IgbPaginator`

The grid does not have built-in paging. Instead, place an `IgbPaginator` component inside the grid:

### Basic paging

```razor
<IgbGrid Data="data" PrimaryKey="Id" AutoGenerate="false"
         Width="100%" Height="500px">
    <IgbColumn Field="Id" Header="ID" />
    <IgbColumn Field="Name" Header="Name" />
    <IgbColumn Field="Department" Header="Department" />
    <IgbPaginator PerPage="10" />
</IgbGrid>
```

### Paginator parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| `PerPage` | `int` | `15` | Rows per page |
| `TotalRecords` | `int` | - | Total record count (required for remote paging) |
| `SelectOptions` | `int[]` | `[5, 10, 15, 25, 50]` | Page size dropdown options |

### Paginator events

| Event | Type | Description |
|---|---|---|
| `PerPageChanged` | `EventCallback<int>` | Fires when page size changes |
| `PageChanged` | `EventCallback<int>` | Fires when current page changes |
| `PagingDone` | `EventCallback<IgbPagingEventArgs>` | Fires after paging completes |

### Programmatic paging

```razor
<IgbGrid @ref="grid" Data="data" PrimaryKey="Id">
    <IgbPaginator @ref="paginator" PerPage="10" />
    ...
</IgbGrid>

<IgbButton @onclick="GoToFirstPage">First Page</IgbButton>
<IgbButton @onclick="GoToNextPage">Next Page</IgbButton>

@code {
    private IgbGrid grid = default!;
    private IgbPaginator paginator = default!;

    private async Task GoToFirstPage()
    {
        await paginator.PaginateAsync(0);
    }

    private async Task GoToNextPage()
    {
        await paginator.NextPageAsync();
    }
}
```

### Paginator navigation methods

| Method | Description |
|---|---|
| `PaginateAsync(int page)` | Go to a specific page (0-based index) |
| `NextPageAsync()` | Go to the next page |
| `PreviousPageAsync()` | Go to the previous page |

---

## Remote Paging

When data lives on a server, fetch only the current page:

```razor
<IgbGrid @ref="grid" Data="currentPageData" PrimaryKey="Id"
         AutoGenerate="false" Width="100%" Height="500px">
    <IgbColumn Field="Id" Header="ID" />
    <IgbColumn Field="Name" Header="Name" />
    <IgbColumn Field="Department" Header="Department" />
    <IgbPaginator PerPage="@pageSize"
                   TotalRecords="@totalRecords"
                   PageChanged="OnPageChanged"
                   PerPageChanged="OnPerPageChanged" />
</IgbGrid>

@code {
    private IgbGrid grid = default!;
    private List<Employee> currentPageData = new();
    private int totalRecords = 0;
    private int pageSize = 20;
    private int currentPage = 0;

    protected override async Task OnInitializedAsync()
    {
        await LoadPageAsync();
    }

    private async Task OnPageChanged(int page)
    {
        currentPage = page;
        await LoadPageAsync();
    }

    private async Task OnPerPageChanged(int newPageSize)
    {
        pageSize = newPageSize;
        currentPage = 0;
        await LoadPageAsync();
    }

    private async Task LoadPageAsync()
    {
        var result = await Api.GetEmployeesPagedAsync(currentPage, pageSize);
        currentPageData = result.Items;
        totalRecords = result.TotalCount;
        StateHasChanged();
    }
}
```

### Key points for remote paging

1. **Set `TotalRecords`** on the paginator - this tells it the total number of records on the server.
2. **Bind `Data` to the current page** - only the current page's data is in memory.
3. **Handle `PageChanged` and `PerPageChanged`** - fetch new data from the server on each event.

---

## Remote Data Operations

For large datasets, disable client-side sorting/filtering and handle them on the server.

### Remote sorting

```razor
<IgbGrid @ref="grid" Data="data" PrimaryKey="Id"
         SortingDone="OnSortingDone">
    <IgbColumn Field="Name" Sortable="true" />
    <IgbColumn Field="Department" Sortable="true" />
    <IgbColumn Field="Salary" Sortable="true" DataType="GridColumnDataType.Number" />
    <IgbPaginator PerPage="@pageSize" TotalRecords="@totalRecords"
                   PageChanged="OnPageChanged" />
</IgbGrid>

@code {
    private IgbGrid grid = default!;
    private List<Employee> data = new();
    private int totalRecords = 0;
    private int pageSize = 20;
    private int currentPage = 0;
    private IgbSortingExpression[]? currentSort;

    private async Task OnSortingDone(IgbSortingEventArgs args)
    {
        currentSort = args.SortingExpressions;
        currentPage = 0;
        await LoadDataAsync();
    }

    private async Task OnPageChanged(int page)
    {
        currentPage = page;
        await LoadDataAsync();
    }

    private async Task LoadDataAsync()
    {
        var result = await Api.GetEmployeesAsync(
            page: currentPage,
            pageSize: pageSize,
            sortField: currentSort?.FirstOrDefault()?.FieldName,
            sortDir: currentSort?.FirstOrDefault()?.Dir.ToString()
        );
        data = result.Items;
        totalRecords = result.TotalCount;
        StateHasChanged();
    }
}
```

### Remote filtering

```razor
<IgbGrid @ref="grid" Data="data" PrimaryKey="Id"
         AllowFiltering="true"
         FilteringDone="OnFilteringDone">
    <IgbColumn Field="Name" Filterable="true" DataType="GridColumnDataType.String" />
    <IgbColumn Field="Department" Filterable="true" DataType="GridColumnDataType.String" />
</IgbGrid>

@code {
    private IgbGrid grid = default!;
    private List<Employee> data = new();

    private async Task OnFilteringDone(IgbFilteringEventArgs args)
    {
        // Extract filter information and send to server
        var filterExpressions = args.FilteringExpressions;
        var result = await Api.GetEmployeesFilteredAsync(filterExpressions);
        data = result.Items;
        StateHasChanged();
    }
}
```

### Combined remote operations pattern

For production apps, combine paging, sorting, and filtering into a single server call:

```razor
@code {
    private int currentPage = 0;
    private int pageSize = 20;
    private int totalRecords = 0;
    private IgbSortingExpression[]? currentSort;
    private string? filterField;
    private string? filterValue;

    private async Task LoadDataAsync()
    {
        var result = await Api.QueryAsync(new QueryRequest
        {
            Page = currentPage,
            PageSize = pageSize,
            SortField = currentSort?.FirstOrDefault()?.FieldName,
            SortDirection = currentSort?.FirstOrDefault()?.Dir.ToString(),
            FilterField = filterField,
            FilterValue = filterValue
        });

        data = result.Items;
        totalRecords = result.TotalCount;
        StateHasChanged();
    }
}
```

---

## Virtualization

### How virtualization works

Virtualization is **built-in and automatic**. The grid only renders DOM elements for the visible viewport. As the user scrolls, rows and cells are recycled.

### Requirements

1. **The grid must have a fixed `Height`** - set `Height="500px"` or `Height="80vh"`. Without a height, the grid renders all rows and virtualization is disabled.
2. **Column widths help column virtualization** - when total column width exceeds the grid width, columns outside the viewport are not rendered.

### Row virtualization

```razor
<IgbGrid Data="largeDataSet" PrimaryKey="Id"
         Width="100%" Height="600px" AutoGenerate="true" />
```

Even with 100,000+ rows, only ~20-30 (depending on row height and grid height) are rendered at any time.

### Column virtualization

```razor
<IgbGrid Data="wideData" PrimaryKey="Id" Width="800px" Height="600px">
    @for (int i = 0; i < 50; i++)
    {
        <IgbColumn Field="@($"Col{i}")" Header="@($"Column {i}")" Width="150px" />
    }
</IgbGrid>
```

With 50 columns at 150px each (7500px total) in an 800px wide grid, only the visible columns are rendered.

---

## Key Rules

1. **`IgbPaginator` goes inside the grid** - it is a child component, not a sibling.
2. **Remote paging requires `TotalRecords`** - without it, the paginator cannot calculate page count.
3. **Handle events for remote operations** - `SortingDone`, `FilteringDone`, `PageChanged` are your hooks to fetch server data.
4. **Virtualization needs a fixed `Height`** - this is the #1 performance requirement.
5. **Do not use `.Skip().Take()` on `IQueryable` directly on the grid** - the grid expects a materialized collection (`List<T>` or `T[]`). Fetch data asynchronously and set it as the `Data` property.
6. **`StateHasChanged()` after data updates** - call it after reassigning the `Data` property from an async operation.
7. **Remote operations override client-side** - when using remote sorting/filtering, the grid still shows sort/filter UI, but you handle the actual data transformation on the server.
8. **Paging is not available on IgbPivotGrid** - the Pivot Grid does not support pagination.