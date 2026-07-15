# State Persistence

> **Part of the [`igniteui-blazor-grids`](../SKILL.md) skill hub.**
> For grid setup and column configuration — see [`structure.md`](./structure.md).

## Contents

- [State Persistence](#state-persistence)
- [Key Rules](#key-rules)

---

## State Persistence

Save and restore the full grid state (sorting, filtering, grouping, paging, selection, column order, column widths, column visibility, pinning) to survive page reloads, navigation, or user sessions.

### Save state

```razor
@inject IJSRuntime JS

<IgbGrid @ref="grid" Data="data" PrimaryKey="Id" AutoGenerate="false"
         Width="100%" Height="500px">
    <IgbColumn Field="Name" Sortable="true" Filterable="true" />
    <IgbColumn Field="Department" Sortable="true" Groupable="true" />
    <IgbColumn Field="Salary" DataType="GridColumnDataType.Currency" HasSummary="true" />
    <IgbPaginator PerPage="10" />
</IgbGrid>

<IgbButton @onclick="SaveState">Save State</IgbButton>
<IgbButton @onclick="RestoreState">Restore State</IgbButton>

@code {
    private IgbGrid grid = default!;

    private async Task SaveState()
    {
        var state = await grid.GetStateAsync();
        var json = state.ToJson();
        await JS.InvokeVoidAsync("localStorage.setItem", "gridState", json);
    }

    private async Task RestoreState()
    {
        var json = await JS.InvokeAsync<string>("localStorage.getItem", "gridState");
        if (!string.IsNullOrEmpty(json))
        {
            var state = IgbGridState.FromJson(json);
            await grid.SetStateAsync(state);
        }
    }
}
```

### What state includes

| State Category | Properties Saved |
|---|---|
| Columns | Order, width, visibility, pinned, data type |
| Sorting | Active sort expressions and directions |
| Filtering | Active filter expressions |
| Grouping | Active group-by expressions (IgbGrid only) |
| Paging | Current page, page size |
| Selection | Selected rows, selected cells, selected columns |
| Advanced Filtering | Advanced filtering expressions tree |
| Row expansion | Expanded row IDs (Tree Grid, Hierarchical Grid) |
| Column moving | Column positions after user reordering |

### Auto-save on navigation

```razor
@implements IAsyncDisposable

<IgbGrid @ref="grid" Data="data" PrimaryKey="Id">
    ...
</IgbGrid>

@code {
    private IgbGrid grid = default!;

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await RestoreState();
        }
    }

    public async ValueTask DisposeAsync()
    {
        await SaveState();
    }

    private async Task SaveState()
    {
        var state = await grid.GetStateAsync();
        await JS.InvokeVoidAsync("localStorage.setItem", "gridState", state.ToJson());
    }

    private async Task RestoreState()
    {
        var json = await JS.InvokeAsync<string>("localStorage.getItem", "gridState");
        if (!string.IsNullOrEmpty(json))
        {
            await grid.SetStateAsync(IgbGridState.FromJson(json));
        }
    }
}
```

### Selective state save/restore

Save only specific parts of the state:

```razor
@code {
    private async Task SaveSortingOnly()
    {
        var state = await grid.GetStateAsync(new IgbGridStateOptions
        {
            Sorting = true,
            Filtering = false,
            Paging = false,
            Selection = false,
            Columns = false
        });
        await JS.InvokeVoidAsync("localStorage.setItem", "gridSorting", state.ToJson());
    }
}
```

### State with server storage

```razor
@code {
    private async Task SaveToServer()
    {
        var state = await grid.GetStateAsync();
        var json = state.ToJson();
        await UserPreferencesApi.SaveGridStateAsync(userId, "employeesGrid", json);
    }

    private async Task LoadFromServer()
    {
        var json = await UserPreferencesApi.GetGridStateAsync(userId, "employeesGrid");
        if (!string.IsNullOrEmpty(json))
        {
            await grid.SetStateAsync(IgbGridState.FromJson(json));
        }
    }
}
```

---

## Key Rules

1. **`PrimaryKey` must be set on the grid** for state persistence to work reliably (especially for selection and row pinning).
2. **State serialization is JSON** - `GetStateAsync()` returns an object that can be serialized with `ToJson()`.
3. **Restore state in `OnAfterRenderAsync`** - the grid must be rendered before you can call `SetStateAsync`.