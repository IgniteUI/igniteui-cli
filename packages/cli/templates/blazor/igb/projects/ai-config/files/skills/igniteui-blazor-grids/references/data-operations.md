# Data Operations - Programmatic Sorting, Filtering, Grouping & Custom Strategies

> **Part of the [`igniteui-blazor-grids`](../SKILL.md) skill hub.**
> For grid setup and column configuration — see [`structure.md`](./structure.md).

## Contents

- [Accessing Grid Instances via `@ref`](#accessing-grid-instances-via-ref)
- [Programmatic Sorting](#programmatic-sorting)
- [Programmatic Filtering](#programmatic-filtering)
- [Programmatic Grouping (IgbGrid Only)](#programmatic-grouping-igbgrid-only)
- [Custom Sorting Strategy](#custom-sorting-strategy)
- [Custom Filtering Strategy](#custom-filtering-strategy)
- [Key Rules](#key-rules)

---

## Accessing Grid Instances via `@ref`

Use `@ref` to get a typed component reference for programmatic API calls. Declare with the matching type (`IgbGrid`, `IgbTreeGrid`, `IgbHierarchicalGrid`, or `IgbPivotGrid`) and access only after render:

```razor
<IgbGrid @ref="grid" Data="data" PrimaryKey="Id">
    ...
</IgbGrid>

@code {
    private IgbGrid grid = default!;
}
```

> **Important:** The reference is `null` until after the component renders. Use it in event handlers or `OnAfterRenderAsync`, not in `OnInitialized`.

---

## Programmatic Sorting

### Sort a single column

```razor
<IgbGrid @ref="grid" Data="data" PrimaryKey="Id">
    <IgbColumn Field="Name" Sortable="true" />
    <IgbColumn Field="Salary" Sortable="true" DataType="GridColumnDataType.Number" />
</IgbGrid>

<IgbButton @onclick="SortByName">Sort by Name (A-Z)</IgbButton>
<IgbButton @onclick="SortBySalaryDesc">Sort by Salary (High-Low)</IgbButton>
<IgbButton @onclick="ClearSorting">Clear Sorting</IgbButton>

@code {
    private IgbGrid grid = default!;

    private async Task SortByName()
    {
        await grid.SortAsync(new IgbSortingExpression[]
        {
            new IgbSortingExpression
            {
                FieldName = "Name",
                Dir = SortingDirection.Asc
            }
        });
    }

    private async Task SortBySalaryDesc()
    {
        await grid.SortAsync(new IgbSortingExpression[]
        {
            new IgbSortingExpression
            {
                FieldName = "Salary",
                Dir = SortingDirection.Desc
            }
        });
    }

    private async Task ClearSorting()
    {
        await grid.ClearSortAsync();
    }
}
```

### Multi-column sort

Pass multiple expressions in a single call:

```razor
@code {
    private async Task SortMultiple()
    {
        await grid.SortAsync(new IgbSortingExpression[]
        {
            new IgbSortingExpression { FieldName = "Department", Dir = SortingDirection.Asc },
            new IgbSortingExpression { FieldName = "Name", Dir = SortingDirection.Asc }
        });
    }
}
```

---

## Programmatic Filtering

### Filter a column

```razor
<IgbGrid @ref="grid" Data="data" PrimaryKey="Id" AllowFiltering="true">
    <IgbColumn Field="Name" Filterable="true" DataType="GridColumnDataType.String" />
    <IgbColumn Field="Salary" Filterable="true" DataType="GridColumnDataType.Number" />
    <IgbColumn Field="IsActive" Filterable="true" DataType="GridColumnDataType.Boolean" />
</IgbGrid>

<IgbButton @onclick="FilterSalaryAbove50k">High Earners</IgbButton>
<IgbButton @onclick="FilterActiveEmployees">Active Only</IgbButton>
<IgbButton @onclick="ClearFilters">Clear All Filters</IgbButton>

@code {
    private IgbGrid grid = default!;

    private async Task FilterSalaryAbove50k()
    {
        await grid.FilterAsync("Salary", 50000, IgbFilteringCondition.GreaterThan);
    }

    private async Task FilterActiveEmployees()
    {
        await grid.FilterAsync("IsActive", true, IgbFilteringCondition.True);
    }

    private async Task ClearFilters()
    {
        await grid.ClearFilterAsync();
    }
}
```

### Clear filter on a single column

```razor
@code {
    private async Task ClearNameFilter()
    {
        await grid.ClearFilterAsync("Name");
    }
}
```

### Complex filtering with FilteringExpressionsTree

For AND/OR grouped conditions, build a `FilteringExpressionsTree`:

```razor
@code {
    private async Task ApplyComplexFilter()
    {
        var tree = new IgbFilteringExpressionsTree(FilteringLogic.And);

        tree.FilteringOperands.Add(new IgbFilteringExpression
        {
            FieldName = "Department",
            Condition = IgbFilteringCondition.Equals,
            SearchVal = "Engineering"
        });

        var salaryGroup = new IgbFilteringExpressionsTree(FilteringLogic.Or);
        salaryGroup.FilteringOperands.Add(new IgbFilteringExpression
        {
            FieldName = "Salary",
            Condition = IgbFilteringCondition.GreaterThan,
            SearchVal = 80000
        });
        salaryGroup.FilteringOperands.Add(new IgbFilteringExpression
        {
            FieldName = "Title",
            Condition = IgbFilteringCondition.Contains,
            SearchVal = "Senior"
        });

        tree.FilteringOperands.Add(salaryGroup);

        grid.AdvancedFilteringExpressionsTree = tree;
    }
}
```

---

## Programmatic Grouping (IgbGrid Only)

Grouping is exclusive to the flat grid. Tree Grid and Hierarchical Grid do not support grouping.

### Group by a column

```razor
<IgbGrid @ref="grid" Data="data" PrimaryKey="Id">
    <IgbColumn Field="Department" Groupable="true" />
    <IgbColumn Field="Name" />
    <IgbColumn Field="Salary" DataType="GridColumnDataType.Number" />
</IgbGrid>

<IgbButton @onclick="GroupByDepartment">Group by Department</IgbButton>
<IgbButton @onclick="ClearGrouping">Clear Grouping</IgbButton>

@code {
    private IgbGrid grid = default!;

    private async Task GroupByDepartment()
    {
        await grid.GroupByAsync(new IgbGroupingExpression
        {
            FieldName = "Department",
            Dir = SortingDirection.Asc
        });
    }

    private async Task ClearGrouping()
    {
        await grid.ClearGroupingAsync();
    }
}
```

### Clear grouping on a specific field

```razor
@code {
    private async Task UngroupDepartment()
    {
        await grid.ClearGroupingAsync("Department");
    }
}
```

### Grouping events

| Event | Type | Description |
|---|---|---|
| `GroupingDone` | `EventCallback<IgbGroupingDoneEventArgs>` | Fires after grouping changes |

---

## Custom Sorting Strategy

Add `SortStrategy="typeof(YourStrategy)"` to a column and implement a class that extends `IgbSortingStrategy`, overriding `Compare`. Use `get_api_reference` to find the exact base class and method signature.

---

## Custom Filtering Strategy

Add `FilterStrategy="typeof(YourStrategy)"` to a column and implement a class that provides custom filter logic. Use `get_api_reference` to find the exact interface and method signatures.

---

## Key Rules

1. **All async methods need `await`** - `SortAsync`, `FilterAsync`, `GroupByAsync`, `ClearSortAsync`, `ClearFilterAsync`, `ClearGroupingAsync` are all asynchronous.
2. **`@ref` requires correct type** - use `IgbGrid`, `IgbTreeGrid`, `IgbHierarchicalGrid`, or `IgbPivotGrid` to match the component in markup.
3. **Access `@ref` only after render** - the reference is `null` until the component renders. Use it in event handlers or `OnAfterRenderAsync`, not in `OnInitialized`.
4. **Grouping is IgbGrid only** - calling `GroupByAsync` on a Tree Grid or Hierarchical Grid reference will fail.
5. **Tree Grid filtering is recursive** - filtering finds matching rows and all their ancestor rows, preserving the tree structure.
6. **Hierarchical Grid levels are independent** - sorting/filtering the root does not affect child grids.
7. **Pivot Grid uses configuration** - sorting and filtering are managed through `IgbPivotConfiguration`, not through programmatic `SortAsync`/`FilterAsync`.
8. **`FieldName` is case-sensitive** - it must match the C# property name exactly.
