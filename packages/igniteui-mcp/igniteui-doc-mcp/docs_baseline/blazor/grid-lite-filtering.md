---
title: "Blazor Grid Lite Filtering | Ignite UI for Blazor | MIT license"
description: Filter operations, filter customization, and remote filtering for Grid Lite. Create apps with our open-source Blazor Grid Lite. Try it now.
keywords: filtering, Blazor, , Ignite UI for Blazor, Infragistics
mentionedTypes: []
namespace: Infragistics.Controls
license: MIT
llms:
  description: "The Grid Lite supports filtering operations on its data source."
_tocName: Filtering
---
# Blazor Grid Lite Filter Operations

The Grid Lite supports filtering operations on its data source. Data filtering is controlled on per-column level, allowing you to have filterable and non-filterable columns. By default, filtering on a column is disabled unless explicitly configured with the [`Filterable`](mcp:get_api_reference?platform=blazor&component=IgbColumn&member=filterable) property of the column.

```razor
<IgbGridLite Data="@data">
    <IgbGridLiteColumn Field="LastName" Filterable="true" />
</IgbGridLite>
```

You can also control whether the filter operations for string columns should be case sensitive by using the `FilteringCaseSensitive` parameter:

```razor
<IgbGridLiteColumn 
    Field="FirstName" 
    Filterable="true"
    FilteringCaseSensitive="true" />
```

```razor
@page "/samples/grids/grid-lite/filtering-config"
@page "/samples/grids/grid-lite-filtering-config"
@page         "/grids/grid-lite/filtering-config"
@page         "/grids/grid-lite-filtering-config"

@using Microsoft.AspNetCore.Components
@using Microsoft.AspNetCore.Components.Web
@using IgniteUI.Blazor.Controls

<div class="container">

    @if (users != null)
    {
        <IgbGridLite TItem="User"
                     Data="@users"
                     class="grid-lite-sample">
            <IgbGridLiteColumn Field="@nameof(User.FirstName)" Header="First name" Filterable FilteringCaseSensitive />
            <IgbGridLiteColumn Field="@nameof(User.LastName)" Header="Last name" Filterable />
            <IgbGridLiteColumn Field="@nameof(User.Age)" Header="Age" DataType="GridLiteColumnDataType.Number" Filterable />
            <IgbGridLiteColumn Field="@nameof(User.Active)" Header="Active" DataType="GridLiteColumnDataType.Boolean" Filterable />
        </IgbGridLite>
    }
</div>

@code {
    private List<User> users;

    protected override void OnInitialized()
    {
        // Generate 50 users
        users = MockDataGenerator.CreateUsers(50);
    }
}
```

## Filter Model

The building blocks for filter operations in the grid is the [`IgbGridLiteFilterExpression`](mcp:get_api_reference?platform=blazor&component=IgbGridLiteFilterExpression) which has the following structure:

```typescript
export interface FilterExpression<T, K extends Keys<T> = Keys<T>> {
  /**
   * The target column for the filter operation.
   */
  key: K;
  /**
   * The filter function which will be executed against the data records.
   */
  condition: FilterOperation<T[K]> | OperandKeys<T[K]>;

  /**
   * The filtering value used in the filter condition function.
   *
   * @remarks
   * Optional for unary conditions.
   */
  searchTerm?: T[K];
  /**
   * Dictates how this expression should resolve in the filter operation in relation to
   * other expressions.
   */
  criteria?: FilterCriteria;
  /**
   * Whether the sort operation should be case sensitive.
   *
   * @remarks
   * If not provided, the value is resolved based on the column filter configuration (if any).
   */
  caseSensitive?: boolean;
}
```

```csharp
public class IgbGridLiteFilterExpression
{
    /// <summary>
    /// The target column for the filter operation.
    /// </summary>
    public required string Key { get; set; }

    /// <summary>
    /// The name of the filter condition to apply. The valid names depend on the column's DataType.
    /// </summary>
    public required string Condition { get; set; }

    /// <summary>
    /// The filtering value used in the filter condition function.
    /// Optional for unary conditions.
    /// </summary>
    public object? SearchTerm { get; set; }

    /// <summary>
    /// How this expression resolves in relation to the column's other expressions:
    /// And - the record must pass all the conditions.
    /// Or - the record must pass at least one condition.
    /// </summary>
    public GridLiteFilterCriteria? Criteria { get; set; }

    /// <summary>
    /// Whether the filter operation should be case sensitive.
    /// If not provided, the value is resolved based on the column filter configuration.
    /// </summary>
    public bool? CaseSensitive { get; set; }
}
```

The condition names a column accepts depend on its `DataType`; a column without one counts as `String`:

| `DataType` | Condition names |
| :--------- | :-------------- |
| `String`   | `contains`, `doesNotContain`, `startsWith`, `endsWith`, `equals`, `doesNotEqual`, `empty`, `notEmpty` |
| `Number`   | `equals`, `doesNotEqual`, `greaterThan`, `lessThan`, `greaterThanOrEqual`, `lessThanOrEqual`, `empty`, `notEmpty` |
| `Boolean`  | `all`, `true`, `false`, `empty`, `notEmpty` |

The `Boolean` conditions, `empty` and `notEmpty` take no `SearchTerm`.

## Filter API

The Grid Lite exposes two main approaches for applying filter operations from its API. Either through the `FilterAsync()`/`ClearFilterAsync()` methods or through the `GridLite.FilterExpressions` property.

The `FilterAsync()` method accepts either a single expression or a collection of filter expressions and then filters the grid data
based on those expressions.

```razor
// Single
await grid.FilterAsync(new IgbGridLiteFilterExpression { Key = "FirstName", Condition = "contains", SearchTerm = "George" });

// Multiple
await grid.FilterAsync(new IgbGridLiteFilterExpression[]
{
    new IgbGridLiteFilterExpression { Key = "FirstName", Condition = "startsWith", SearchTerm = "a" },
    new IgbGridLiteFilterExpression { Key = "FirstName", Condition = "startsWith", SearchTerm = "g", Criteria = GridLiteFilterCriteria.Or }```

The `ClearFilterAsync()` method, as the name implies, clears the filter state of a single column or the whole grid component, depending on the passed arguments.

```razor
// Clear the filter state for the `Age` column.
await grid.ClearFilterAsync("Age");

// Clear the filter state of the grid.
await grid.ClearFilterAsync();
```

## Initial filter state

The `FilterExpressions` property is very similar in behavior to the `FilterAsync()` method call. It exposes a declarative way to control filter state in the grid, but the most useful property is the ability to set initial filter state when the Grid Lite component is first rendered.

For example:

```razor
<IgbGridLite Data="users" FilterExpressions="filterState" />

@code {
    private IgbGridLiteFilterExpression[] filterState = new[]
    {
        new IgbGridLiteFilterExpression { Key = "Age", Condition = "greaterThan", SearchTerm = 21 },
        // unary condition so `SearchTerm` is not required
        new IgbGridLiteFilterExpression { Key = "Active", Condition = "true" }
    };
}
```

The `FilterExpressions` parameter sets the filter state; it does not follow the changes users make through the UI. To get the current filter state, handle the `Filtered` event: its `State` holds the filter expressions of the column named by `Key`.

```razor
<IgbGridLite Data="users" Filtered="OnFiltered" />

@code {
    private void OnFiltered(IgbGridLiteFilteredEventArgs args)
    {
        // Save the current filter state of the column
        SaveUserFilterState(args.Key, args.State);
    }
}
```

## Events

When a filter operation is performed through the UI, the component raises the `Filtering` event. It carries the column's filter expressions and the type of the change (`Add`, `Modify` or `Remove`). It is a notification: it cannot cancel or change the operation.

After the grid applies the new filter state, a `Filtered` event is raised. It contains the filter state for the column which was the target of the operation.

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

    @if (users != null)
    {
        <IgbGridLite TItem="User" 
                     Data="@users"
                     Filtering="@HandleFiltering"
                     Filtered="@HandleFiltered"
                     class="grid-lite-sample">
            <IgbGridLiteColumn Field="@nameof(User.FirstName)" Header="First name" Filterable />
            <IgbGridLiteColumn Field="@nameof(User.LastName)" Header="Last name" Filterable />
            <IgbGridLiteColumn Field="@nameof(User.Age)" Header="Age" DataType="GridLiteColumnDataType.Number" Filterable />
            <IgbGridLiteColumn Field="@nameof(User.Active)" Header="Active" DataType="GridLiteColumnDataType.Boolean" Filterable />
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
    private List<User> users;
    private List<string> eventLogs = new List<string>();

    protected override void OnInitialized()
    {
        // Generate 50 users
        users = MockDataGenerator.CreateUsers(50);
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

## API References

[`IgbGridLite<TItem>`](mcp:get_api_reference?platform=blazor&component=IgbGridLite%3CTItem%3E)<br />
[`IgbGridLiteColumn`](mcp:get_api_reference?platform=blazor&component=IgbGridLiteColumn)<br />
[`IgbGridLiteFilterExpression`](mcp:get_api_reference?platform=blazor&component=IgbGridLiteFilterExpression)<br />

## Additional Resources

- [Column Configuration](./column-configuration.md)
- [Sorting](./sorting.md)

Our community is active and always welcoming to new ideas.

- [Grid Lite **GitHub**](https://github.com/IgniteUI/IgniteUI.Blazor.GridLite)
