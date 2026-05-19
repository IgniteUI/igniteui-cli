---
title: Blazor Grid Lite Sorting  | Ignite UI for Blazor | MIT license
_description: Try Grid Lite with sort operations, sort customization, and remote sorting for Blazor Grid Lite. See demos and examples and build your next app.
_keywords: sorting, Blazor, {ComponentKeywords}, Ignite UI for Blazor, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
_tocName: Sorting
---

# Sort operations

The Grid Lite supports sorting operations on its data source. Data sorting is controlled on per-column level, allowing you to have sortable and non-sortable columns, while the grid itself controls certain sort behaviors. By default, sorting on a column is disabled unless explicitly configured with the `Sortable` property of the column.

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

The Grid Lite supports both single and multi-column sorting. Multi-column is enabled by default and can be configured through the [`IgbSortingOptions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSortingOptions.html) property of the grid. The [`Mode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSortingOptions.html#IgniteUI_Blazor_Controls_IgbSortingOptions_Mode) property accepts `GridLiteSortingMode.Single` or `GridLiteSortingMode.Multiple` as values.

```razor
// Enable single-column sorting
grid.SortingOptions = new IgbGridLiteSortingOptions { Mode = GridLiteSortingMode.Single };
```

> [!NOTE]
> The single/multi-column sorting behavior controls how end-users interact with the Grid Lite. Sorting through the API with multiple expression will still work when single sorting is enabled.

### Tri-state sorting

The Grid Lite supports tri-state sorting and it is always enabled. End-users will cycle through the following direction states when clicking on sortable column headers:

```
Ascending -> Descending -> None -> Ascending
```

where `None` is the initial state of the data, that is to say with no sorting applied by the grid.

### Sorting Indicators

When multi-column sort is enabled, the column headers will display a sorting indicator, which is a number representing the order in which the sorting operations were applied.

The following sample shows the grid [`IgbSortingOptions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSortingOptions.html) property and how it controls the grid sorting behavior.

```razor
@page "/"
@using Microsoft.AspNetCore.Components
@using Microsoft.AspNetCore.Components.Web
@using IgniteUI.Blazor.Controls

<div class="container">

    <div class="switch-container">
        <IgbSwitch Checked Change="@MultiSortChanged">Enable multi-sort
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

    protected override void OnInitialized()
    {
        products = MockDataGenerator.CreateProducts(50);

        // Grid-level sort configuration
        sortingOptions = new IgbGridLiteSortingOptions
        {
            Mode = GridLiteSortingMode.Multiple // Enable multi-column sorting
        };
    }

    private void MultiSortChanged(IgbCheckboxChangeEventArgs e)
    {
        sortingOptions = new IgbGridLiteSortingOptions
        {
            Mode = e.Detail.Checked ? GridLiteSortingMode.Multiple : GridLiteSortingMode.Single
        };
        grid?.ClearSortAsync(); // Clear existing sorting when changing mode
    }
}
```

## Sort Model

The building block for sort operations in the Grid Lite is the `GridLiteSortingExpression` which has the following properties:

```razor
public class IgbGridLiteSortingExpression
{
    /// <summary>
    /// The target column.
    /// </summary>
    [JsonPropertyName("key")]
    public string Key { get; set; }

    /// <summary>
    /// Sort direction for this operation.
    /// </summary>
    [JsonPropertyName("direction")]
    public GridLiteSortingDirection Direction { get; set; }

    /// <summary>
    /// Whether the sort operation should be case sensitive.
    /// If not provided, the value is resolved based on the column sort configuration.
    /// </summary>
    [JsonPropertyName("caseSensitive")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public bool? CaseSensitive { get; set; }
}
```

The grid consumes these expressions for its sort API methods and configuration and produces them for events and its sorting state when
an end-user interacts with the component. See below for additional information.

## Sort API

The Grid Lite exposes two main approaches for applying sort operations from its API. Either through the `Sort()`/`ClearSort()` methods or through the `SortingExpressions` property.

The `Sort()` method accepts either a single expression or an array of sort expression and then sorts the grid data based on those expressions.

```razor
// Single
await grid.Sort(new IgbGridLiteSortingExpression { Key = "Price", Direction = GridLiteSortingDirection.Descending });

// Multiple
await grid.Sort(new IgbGridLiteSortingExpression[]
{
    new IgbGridLiteSortingExpression { Key = "Price", Direction = GridLiteSortingDirection.Descending },
    new IgbGridLiteSortingExpression { Key = "Name", Direction = GridLiteSortingDirection.Descending }```

The `ClearSort()` method, as the name implies, clears the sort state of a single column or the whole grid component, depending
on the passed arguments.

```razor
// Clear the sort state for the `Price` column.
await grid.ClearSort("Price");

// Clear the sort state of the grid.
await grid.ClearSort();
```

### Initial Sorting State

The `SortingExpressions` property is very similar in behavior to the `Sort()` method call. It exposes a declarative way to control
sort state in the grid, but the most useful property is the ability to set initial sort state when the Grid Lite is first rendered.

For example:

```razor
private IgbGridLiteSortingExpression[] sortState = new[]
{
    new IgbGridLiteSortingExpression { Key = "Price", Direction = GridLiteSortingDirection.Descending },
    new IgbGridLiteSortingExpression { Key = "Name", Direction = GridLiteSortingDirection.Ascending, CaseSensitive = true }
};

<IgbGridLite SortingExpressions="sortState" />
```

It can be used to get the current sort state of the component and do additional processing depending on another state in your application.

```razor
var state = grid.SortingExpressions;
// Save the current sort state
SaveUserSortState(state);
```

## Events

When a sorting operation is performed through the UI, the component raises `Sorting` and `Sorted` events. The `Sorting` event is cancellable and if cancelled will stop the current sort operation.

After the grid applies the new sorting state, a `Sorted` event is raised. It contains the expression which was used in the last sort operation and it is not cancellable.

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

In the following sample, when you try to sort the **Name** and **Rating** columns, the operation will be cancelled. Watch the event log below to see it in action.

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

<!-- TODO ## API References

- `{ComponentName}`
- `Column`

-->

## Additional Resources

- [Column Configuration](column-configuration.md)
- [Filtering](filtering.md)

Our community is active and always welcoming to new ideas.

- [Grid Lite **GitHub**](https://github.com/IgniteUI/IgniteUI.Grid.OSS)
