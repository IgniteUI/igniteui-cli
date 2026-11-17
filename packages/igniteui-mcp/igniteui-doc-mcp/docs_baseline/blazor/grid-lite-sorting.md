---
title: "Blazor Grid Lite Sorting  | Ignite UI for Blazor | MIT license"
description: Try Grid Lite with sort operations, sort customization, and remote sorting for Blazor Grid Lite. See demos and examples and build your next app.
keywords: sorting, Blazor, , Ignite UI for Blazor, Infragistics
mentionedTypes: []
namespace: Infragistics.Controls
license: MIT
llms:
  description: "The Grid Lite supports sorting operations on its data source."
_tocName: Sorting
---
# Sort operations

The Grid Lite supports sorting operations on its data source. Data sorting is controlled on per-column level, allowing you to have sortable and non-sortable columns, while the grid itself controls certain sort behaviors. By default, sorting on a column is disabled unless explicitly configured with the [`Sortable`](mcp:get_api_reference?platform=blazor&component=IgbColumn&member=sortable) property of the column.

```razor
<IgbGridLite Data="@data">
    <IgbGridLiteColumn Field="Price" Sortable="true" />
</IgbGridLite>
```

You can also control whether the sort operations for string columns should be case sensitive by using the `SortingCaseSensitive` parameter:

```razor
<IgbGridLiteColumn 
    Field="Name" 
    Sortable="true"
    SortingCaseSensitive="true" />
```

```razor
@page "/"
@using Microsoft.AspNetCore.Components
@using Microsoft.AspNetCore.Components.Web
@using IgniteUI.Blazor.Controls

<div class="container">

    @if (products != null)
    {
        <IgbGridLite TItem="ProductInfo" 
                     Data="@products"
                     class="grid-lite-sample">
            <IgbGridLiteColumn Field="@nameof(ProductInfo.Name)" Header="Product Name" DataType="GridLiteColumnDataType.String" Sortable />
            <IgbGridLiteColumn Field="@nameof(ProductInfo.Price)" Header="Price" DataType="GridLiteColumnDataType.Number" Width="150px" Sortable />
            <IgbGridLiteColumn Field="@nameof(ProductInfo.Sold)" Header="Units sold" DataType="GridLiteColumnDataType.Number" Width="150px" Sortable />
            <IgbGridLiteColumn Field="@nameof(ProductInfo.Total)" Header="Total sold" DataType="GridLiteColumnDataType.Number" Width="150px" Sortable />
            <IgbGridLiteColumn Field="@nameof(ProductInfo.Rating)" Header="Customer rating" DataType="GridLiteColumnDataType.Number" Width="180px" Sortable />
        </IgbGridLite>
    }
</div>

@code {
    private List<ProductInfo> products;

    protected override void OnInitialized()
    {
        // Generate 50 products
        products = MockDataGenerator.CreateProducts(50);
    }
}
```

## Single and multi-sorting

The Grid Lite supports both single and multi-column sorting. Multi-column is enabled by default and can be configured through the [`IgbSortingOptions`](mcp:get_api_reference?platform=blazor&component=IgbSortingOptions) property of the grid. The [`Mode`](mcp:get_api_reference?platform=blazor&component=IgbSortingOptions&member=mode) property accepts [`GridLiteSortingMode.Single`](mcp:get_api_reference?platform=blazor&component=GridLiteSortingMode&member=Single) or [`GridLiteSortingMode.Multiple`](mcp:get_api_reference?platform=blazor&component=GridLiteSortingMode&member=Multiple) as values.

```razor
<IgbGridLite Data="@data" SortingOptions="@sortingOptions" />

@code {
    // Enable single-column sorting
    private IgbGridLiteSortingOptions sortingOptions = new() { Mode = GridLiteSortingMode.Single };
}
```

**Note:** 
The single/multi-column sorting behavior controls how end-users interact with the Grid Lite. Sorting through the API with multiple expression will still work when single sorting is enabled.

### Tri-state sorting
The Grid Lite supports tri-state sorting and it is always enabled. End-users will cycle through the following direction states when clicking on sortable column headers:

```
Ascending -> Descending -> None -> Ascending
```

where `None` is the initial state of the data, that is to say with no sorting applied by the grid.

### Sorting Indicators

When multi-column sort is enabled, the column headers will display a sorting indicator, which is a number representing the order in which the sorting operations were applied.

The following sample shows the grid [`IgbSortingOptions`](mcp:get_api_reference?platform=blazor&component=IgbSortingOptions) property and how it controls the grid sorting behavior.

```razor
@page "/"
@using Microsoft.AspNetCore.Components
@using Microsoft.AspNetCore.Components.Web
@using IgniteUI.Blazor.Controls

<div class="container">

    <div class="switch-container">
        <IgbSwitch @bind-Checked="multiSort" @bind-Checked:after="MultiSortChanged">Enable multi-sort
        </IgbSwitch>
    </div>

    @if (products != null)
    {
        <IgbGridLite @ref="grid" Data="@products" SortingOptions="@sortingOptions"
            class="grid-lite-sample">
            <IgbGridLiteColumn Field="@nameof(ProductInfo.Name)" Header="Product Name" DataType="GridLiteColumnDataType.String" Sortable />
            <IgbGridLiteColumn Field="@nameof(ProductInfo.Price)" Header="Price" DataType="GridLiteColumnDataType.Number" Width="150px" Sortable />
            <IgbGridLiteColumn Field="@nameof(ProductInfo.Sold)" Header="Units sold" DataType="GridLiteColumnDataType.Number" Width="150px" Sortable />
            <IgbGridLiteColumn Field="@nameof(ProductInfo.Total)" Header="Total sold" DataType="GridLiteColumnDataType.Number" Width="150px" Sortable />
            <IgbGridLiteColumn Field="@nameof(ProductInfo.Rating)" Header="Customer rating" DataType="GridLiteColumnDataType.Number" Width="180px" Sortable />
        </IgbGridLite>
    }
</div>

@code {
    private List<ProductInfo> products;
    private IgbGridLite<ProductInfo> grid;
    private IgbGridLiteSortingOptions sortingOptions;
    private bool multiSort = true;

    protected override void OnInitialized()
    {
        products = MockDataGenerator.CreateProducts(50);

        // Grid-level sort configuration
        sortingOptions = new IgbGridLiteSortingOptions
        {
            Mode = GridLiteSortingMode.Multiple // Enable multi-column sorting
        };
    }

    private async Task MultiSortChanged()
    {
        sortingOptions = new IgbGridLiteSortingOptions
        {
            Mode = multiSort ? GridLiteSortingMode.Multiple : GridLiteSortingMode.Single
        };
        if (grid != null)
        {
            await grid.ClearSortAsync(); // Clear existing sorting when changing mode
        }
    }
}
```

## Sort Model

The building block for sort operations in the Grid Lite is the [`IgbGridLiteSortingExpression`](mcp:get_api_reference?platform=blazor&component=IgbGridLiteSortingExpression) which has the following properties:

```typescript
type SortingExpression<T> = {
  /**
   * The `key` of the target column for the sort operation.
   */
  key: keyof T;
  /**
   * The sort direction for the operation.
   */
  direction: 'ascending' | 'descending' | 'none';
  /**
   * Should the operation be case sensitive. Applies to the default string type.
   * If not explicitly passed, it will use the value from the target column sort configuration if applicable.
   */
  caseSensitive?: boolean;
  /**
   * Specifies a custom comparer function for the operation.
   * Will use the value from the target column sort configuration if applicable.
   */
  comparer?: SortComparer<T, T[keyof T]>;
};
```

```csharp
public class IgbGridLiteSortingExpression
{
    /// <summary>
    /// The target column.
    /// </summary>
    public required string Key { get; set; }

    /// <summary>
    /// Sort direction for this operation.
    /// </summary>
    public GridLiteSortingDirection Direction { get; set; }

    /// <summary>
    /// Whether the sort operation should be case sensitive.
    /// If not provided, the value is resolved based on the column sort configuration.
    /// </summary>
    public bool? CaseSensitive { get; set; }
}
```

The grid consumes these expressions for its sort API methods and configuration and produces them for events and its sorting state when
an end-user interacts with the component. See below for additional information.

## Sort API

The Grid Lite exposes two main approaches for applying sort operations from its API. Either through the `SortAsync()`/`ClearSortAsync()` methods or through the `SortingExpressions` property.

The `SortAsync()` method accepts either a single expression or a collection of sort expressions and then sorts the grid data based on those expressions.

```razor
// Single
await grid.SortAsync(new IgbGridLiteSortingExpression { Key = "Price", Direction = GridLiteSortingDirection.Descending });

// Multiple
await grid.SortAsync(new IgbGridLiteSortingExpression[]
{
    new IgbGridLiteSortingExpression { Key = "Price", Direction = GridLiteSortingDirection.Descending },
    new IgbGridLiteSortingExpression { Key = "Name", Direction = GridLiteSortingDirection.Descending }```

The `ClearSortAsync()` method, as the name implies, clears the sort state of a single column or the whole grid component, depending
on the passed arguments.

```razor
// Clear the sort state for the `Price` column.
await grid.ClearSortAsync("Price");

// Clear the sort state of the grid.
await grid.ClearSortAsync();
```

### Initial Sorting State

The `SortingExpressions` property is very similar in behavior to the `SortAsync()` method call. It exposes a declarative way to control
sort state in the grid, but the most useful property is the ability to set initial sort state when the Grid Lite is first rendered.

For example:

```razor
<IgbGridLite Data="@data" SortingExpressions="sortState" />

@code {
    private IgbGridLiteSortingExpression[] sortState = new[]
    {
        new IgbGridLiteSortingExpression { Key = "Price", Direction = GridLiteSortingDirection.Descending },
        new IgbGridLiteSortingExpression { Key = "Name", Direction = GridLiteSortingDirection.Ascending, CaseSensitive = true }
    };
}
```

The `SortingExpressions` parameter sets the sort state; it does not follow the changes users make through the UI. To track the sort state, handle the `Sorted` event: its `Expression` is the sort expression of the column that was sorted.

```razor
<IgbGridLite Data="@data" Sorted="OnSorted" />

@code {
    private void OnSorted(IgbGridLiteSortedEventArgs args)
    {
        // Save the sort state of the column
        SaveUserSortState(args.Expression);
    }
}
```

## Events

When a sorting operation is performed through the UI, the component raises the `Sorting` event with the sort expression of the operation. It is a notification: it cannot cancel or change the operation.

After the grid applies the new sorting state, a `Sorted` event is raised. It contains the expression which was used in the last sort operation.

```razor
<IgbGridLite Sorting="OnSorting" Sorted="OnSorted" />

@code {
    private void OnSorting(IgbGridLiteSortingEventArgs args)
    {
        // Handle sorting event
    }

    private void OnSorted(IgbGridLiteSortedEventArgs args)
    {
        // Handle sorted event
    }
}
```

In the following sample, sort the columns and watch the event log below for the `Sorting` and `Sorted` events.

```razor
@page "/"
@using Microsoft.AspNetCore.Components
@using Microsoft.AspNetCore.Components.Web
@using IgniteUI.Blazor.Controls

<div class="container">

    @if (products != null)
    {
        <IgbGridLite TItem="ProductInfo" 
                     Data="@products"
                     Sorting="@HandleSorting"
                     Sorted="@HandleSorted"
                     class="grid-lite-sample">
            <IgbGridLiteColumn Field="@nameof(ProductInfo.Name)" Header="Product Name" DataType="GridLiteColumnDataType.String" Sortable />
            <IgbGridLiteColumn Field="@nameof(ProductInfo.Price)" Header="Price" DataType="GridLiteColumnDataType.Number" Width="150px" Sortable />
            <IgbGridLiteColumn Field="@nameof(ProductInfo.Sold)" Header="Units sold" DataType="GridLiteColumnDataType.Number" Width="150px" Sortable />
            <IgbGridLiteColumn Field="@nameof(ProductInfo.Total)" Header="Total sold" DataType="GridLiteColumnDataType.Number" Width="150px" Sortable />
            <IgbGridLiteColumn Field="@nameof(ProductInfo.Rating)" Header="Customer rating" DataType="GridLiteColumnDataType.Number" Width="180px" Sortable />
        </IgbGridLite>
    }

    <div class="event-log">
        <h4>Event Log:</h4>
        <div class="log-content">
            @foreach (var log in eventLogs.TakeLast(10))
            {
                <div class="log-entry">@log</div>
            }
        </div>
    </div>
</div>

@code {
    private List<ProductInfo> products;
    private List<string> eventLogs = new List<string>();

    protected override void OnInitialized()
    {
        products = MockDataGenerator.CreateProducts(50);
    }

    private void HandleSorting(IgbGridLiteSortingEventArgs e)
    {
        var log = $"[{DateTime.Now:HH:mm:ss}] OnSorting - Column: {e.Expression?.Key}, Direction: {e.Expression?.Direction}";
        eventLogs.Add(log);
        StateHasChanged();
    }

    private void HandleSorted(IgbGridLiteSortedEventArgs e)
    {
        var log = $"[{DateTime.Now:HH:mm:ss}] OnSorted - Sort applied successfully";
        eventLogs.Add(log);
        StateHasChanged();
    }
}
```

## API References

[`IgbGridLite<TItem>`](mcp:get_api_reference?platform=blazor&component=IgbGridLite%3CTItem%3E)<br />
[`IgbGridLiteColumn`](mcp:get_api_reference?platform=blazor&component=IgbGridLiteColumn)<br />
[`IgbGridLiteSortingExpression`](mcp:get_api_reference?platform=blazor&component=IgbGridLiteSortingExpression)<br />
[`GridLiteSortingMode`](mcp:get_api_reference?platform=blazor&component=GridLiteSortingMode)<br />

## Additional Resources

- [Column Configuration](./column-configuration.md)
- [Filtering](./filtering.md)

Our community is active and always welcoming to new ideas.

- [Grid Lite **GitHub**](https://github.com/IgniteUI/IgniteUI.Blazor.GridLite)
