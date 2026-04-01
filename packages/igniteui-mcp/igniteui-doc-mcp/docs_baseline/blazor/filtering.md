---
title: Blazor Grid Lite Filtering | Ignite UI for Blazor | MIT license
_description: Filter operations, filter customization, and remote filtering for Grid Lite. Create apps with our open-source Blazor Grid Lite. Try it now.
_keywords: filtering, Blazor, {ComponentKeywords}, Ignite UI for Blazor, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
_tocName: Filtering
---

# Blazor Grid Lite Filter Operations

<!-- Blazor -->

The Grid Lite supports filtering operations on its data source. Data filtering is controlled on per-column level, allowing you to have filterable and non-filterable columns. By default, filtering on a column is disabled unless explicitly configured with the `Filterable` property of the column.

```razor
<IgbGridLite Data="@data">
    <IgbGridLiteColumn Field="LastName" Filterable="true" />
</IgbGridLite>
```

<!-- Blazor -->

You can also control whether the filter operations for string columns should be case sensitive by using the `FilteringCaseSensitive` parameter:

```razor
<IgbGridLiteColumn 
    Field="FirstName" 
    Filterable="true"
    FilteringCaseSensitive="true" />
```

<!-- end: Blazor -->

```razor
@page "/samples/grids/grid-lite/filtering-config"
@page "/samples/grids/grid-lite-filtering-config"
@page         "/grids/grid-lite/filtering-config"
@page         "/grids/grid-lite-filtering-config"

@using Microsoft.AspNetCore.Components
@using Microsoft.AspNetCore.Components.Web
@using IgniteUI.Blazor.Controls

<div class="container">

    @if (users != null && columns != null)
    {
        <IgbGridLite TItem="User"
                     Data="@users"
                     Columns="@columns"
                     class="grid-lite-sample" />
    }
</div>

@code {
    private List<User> users;
    private List<IgbColumnConfiguration> columns;

    protected override void OnInitialized()
    {
        // Generate 50 users
        users = MockDataGenerator.CreateUsers(50);

        columns = new List<IgbColumnConfiguration>
        {
            new IgbColumnConfiguration
                }
            },
            new IgbColumnConfiguration
            {
                Key = nameof(User.LastName),
                HeaderText = "Last name",
                Filter = true
            },
            new IgbColumnConfiguration
            {
                Key = nameof(User.Age),
                HeaderText = "Age",
                Type = GridLiteColumnDataType.Number,
                Filter = true
            },
            new IgbColumnConfiguration
            {
                Key = nameof(User.Active),
                HeaderText = "Active",
                Type = GridLiteColumnDataType.Boolean,
                Filter = true
            }
        };
    }
}
```


## Filter Model

<!-- Blazor -->

The building blocks for filter operations in the grid is the `GridLiteFilterExpression` which has the following structure:

```razor
public class IgbGridLiteFilterExpression
{
    /// <summary>
    /// The target column for the filter operation.
    /// </summary>
    [JsonPropertyName("key")]
    public string Key { get; set; }

    /// <summary>
    /// The filter condition to apply. Can be a condition name (string) or a FilterOperation // TODO
    /// </summary>
    [JsonPropertyName("condition")]
    public object Condition { get; set; }

    /// <summary>
    /// The filtering value used in the filter condition function.
    /// Optional for unary conditions.
    /// </summary>
    [JsonPropertyName("searchTerm")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public object SearchTerm { get; set; }

    /// <summary>
    /// Dictates how this expression should resolve in the filter operation.
    /// 'and' - the record must pass all the conditions.
    /// 'or' - the record must pass at least one condition.
    /// </summary>
    [JsonPropertyName("criteria")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public string Criteria { get; set; } // "and" or "or"

    /// <summary>
    /// Whether the filter operation should be case sensitive.
    /// If not provided, the value is resolved based on the column filter configuration.
    /// </summary>
    [JsonPropertyName("caseSensitive")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public bool? CaseSensitive { get; set; }
}
```

## Filter API

<!-- Blazor -->

The Grid Lite exposes two main approaches for applying filter operations from its API. Either through the `GridLite.Filter()`/`GridLite.ClearFilter()` methods or through the `GridLite.FilterExpressions` property.

The `Filter()` method accepts either a single expression or an array of filter expression and then filters the grid data
based on those expressions.

<!-- end: Blazor -->

```razor
// Single
await grid.Filter(new IgbGridLiteFilterExpression { Key = "FirstName", Condition = "contains", SearchTerm = "George" });

// Multiple
await grid.Filter(new IgbGridLiteFilterExpression[]
{
    new IgbGridLiteFilterExpression { Key = "FirstName", Condition = "startsWith", SearchTerm = "a" },
    new IgbGridLiteFilterExpression { Key = "FirstName", Condition = "startsWith", SearchTerm = "g", Criteria = "or" }```

<!-- Blazor -->

The `ClearFilter()` method, as the name implies, clears the filter state of a single column or the whole grid component, depending on the passed arguments.

<!-- end: Blazor -->

```razor
// Clear the filter state for the `Age` column.
grid.ClearFilter("Age");

// Clear the filter state of the grid.
grid.ClearFilter();
```

## Initial filter state

<!-- Blazor -->

The `FilterExpressions` property is very similar in behavior to the `Filter()` method call. It exposes a declarative way to control filter state in the grid, but the most useful property is the ability to set initial filter state when the Grid Lite component is first rendered.

For example:

```razor
private IgbGridLiteFilterExpression[] filterState = new[]
{
    new IgbGridLiteFilterExpression { Key = "Age", Condition = "greaterThan", SearchTerm = 21 },
    // unary condition so `SearchTerm` is not required
    new IgbGridLiteFilterExpression { Key = "Active", Condition = "true" }
};

<IgbGridLite FilterExpressions="filterState" />
```

<!-- end: Blazor -->

It can be used to get the current filter state of the component and do additional processing depending on another state in your application.

```razor
var state = grid.FilterExpressions;
// Save the current filter state
SaveUserFilterState(state);
```

## Events

<!-- Blazor -->

When a filter operation is performed through the UI, the component raises `Filtering` and `Filtered` events. The `Filtering` event is cancellable and if cancelled will prevent the current filter operation.

After the grid applies the new filter state, a `Filtered` event is raised. It contains the filter state for the column which was the target of the operation and it is not cancellable.

<!-- end: Blazor -->

```razor
<IgbGridLite Filtering="OnFiltering" Filtered="OnFiltered" />

@code {
    private void OnFiltering(IgbGridLiteFilteringEventArgs args)
    {
        // Handle filtering event
    }

    private void OnFiltered(IgbGridLiteFilteredEventArgs args)
    {
        // Handle filtered event
    }
}
```

```razor
@page "/"
@using Microsoft.AspNetCore.Components
@using Microsoft.AspNetCore.Components.Web
@using IgniteUI.Blazor.Controls

<div class="container">

    @if (users != null && columns != null)
    {
        <IgbGridLite TItem="User" 
                     Data="@users" 
                     Columns="@columns"
                     Filtering="@HandleFiltering"
                     Filtered="@HandleFiltered"
                     class="grid-lite-sample" />
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
    private List<User> users;
    private List<IgbColumnConfiguration> columns;
    private List<string> eventLogs = new List<string>();

    protected override void OnInitialized()
    {
        // Generate 50 users
        users = MockDataGenerator.CreateUsers(50);

        columns = new List<IgbColumnConfiguration>
        {
            new IgbColumnConfiguration
            },
            new IgbColumnConfiguration
            {
                Key = nameof(User.LastName),
                HeaderText = "Last name",
                Filter = true
            },
            new IgbColumnConfiguration
            {
                Key = nameof(User.Age),
                HeaderText = "Age",
                Type = GridLiteColumnDataType.Number,
                Filter = true
            },
            new IgbColumnConfiguration
            {
                Key = nameof(User.Active),
                HeaderText = "Active",
                Type = GridLiteColumnDataType.Boolean,
                Filter = true
            }
        };
    }

    private void HandleFiltering(IgbGridLiteFilteringEventArgs e)
    {
        var log = $"[{DateTime.Now:HH:mm:ss}] OnFiltering - Column: {e.Expressions?.Last().Key}, Condition: {e.Expressions?.Last().Condition}, Term: {e.Expressions?.Last().SearchTerm}";
        eventLogs.Add(log);
        StateHasChanged();
    }

    private void HandleFiltered(IgbGridLiteFilteredEventArgs e)
    {
        var log = $"[{DateTime.Now:HH:mm:ss}] OnFiltered - Filter applied successfully";
        eventLogs.Add(log);
        StateHasChanged();
    }
}
```


<!-- TODO ## API References
## API References

- `{ComponentName}`
- `Column`
-->

## Additional Resources

- [Column Configuration](column-configuration.md)
- [Sorting](sorting.md)

Our community is active and always welcoming to new ideas.

- [Grid Lite **GitHub**](https://github.com/IgniteUI/IgniteUI.Grid.OSS)
