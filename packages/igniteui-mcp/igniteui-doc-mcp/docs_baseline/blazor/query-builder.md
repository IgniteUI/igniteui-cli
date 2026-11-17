---
title: "Blazor Query Builder | Infragistics"
description: Infragistics' Blazor Query Builder allows users to build complex custom queries in angular apps with a great UI experience. Try it Now.
keywords: "Blazor Query Builder, Ignite UI for Blazor, Infragistics"
license: MIT
mentionedTypes: ["QueryBuilder"]
llms:
  description: "The Ignite UI for Blazor Query Builder provides a rich UI that allows developers to build complex data filtering queries for a specified data set."
_tocName: Query Builder
---
# Blazor Query Builder Overview

The Ignite UI for Blazor Query Builder provides a rich UI that allows developers to build complex data filtering queries for a specified data set. With this component, you can build an expression tree and specify AND/OR conditions between expressions, with editors and condition lists determined by each field's data type. The expression tree can then be easily transformed to a query in a format the backend supports.

```razor
@using IgniteUI.Blazor.Controls
@using System.Linq
@using System.Text.Json
@using Microsoft.Extensions.Logging
@implements IAsyncDisposable
@inject QueryBuilderService QueryService
@inject IJSRuntime JS
@inject ILogger<App> Logger

<div class="container vertical">
    <div class="options horizontal fill">
        <IgbQueryBuilder @ref="queryBuilder"
            Entities="Entities"
            ExpressionTree="ExpressionTree"
            ExpressionTreeChangeScript="WebQueryBuilderOverviewExpressionTreeChange">
        </IgbQueryBuilder>
    </div>

    <div class="container vertical fill">
        <IgbGrid @ref="grid"
            Id="grid"
            AutoGenerate="false"
            Width="100%"
            Height="420px">
            @foreach (var field in GridFields)
            {
                <IgbColumn @key="field.Field" Field="@field.Field" DataType="@field.DataType"
                    Hidden="@(!visibleFields.Contains(field.Field))"></IgbColumn>
            }
        </IgbGrid>
    </div>
</div>

@if (!string.IsNullOrEmpty(errorMessage))
{
    <div class="error-message" role="alert">
        <p>@errorMessage</p>
    </div>
}

@code {
    private static readonly string[] InitialReturnFields =
    [
        "orderId",
        "customerId",
        "employeeId",
        "shipperId",
        "orderDate",
        "requiredDate",
        "shipVia",
        "freight",
        "shipName",
        "completed"
    ];

    private static readonly IgbFieldType[] CustomerFields =
    [
        new() { Field = "customerId", DataType = GridColumnDataType.String },
        new() { Field = "companyName", DataType = GridColumnDataType.String },
        new() { Field = "contactName", DataType = GridColumnDataType.String },
        new() { Field = "contactTitle", DataType = GridColumnDataType.String }
    ];

    private static readonly IgbFieldType[] OrderFields =
    [
        new() { Field = "orderId", DataType = GridColumnDataType.Number },
        new() { Field = "customerId", DataType = GridColumnDataType.String },
        new() { Field = "employeeId", DataType = GridColumnDataType.Number },
        new() { Field = "shipperId", DataType = GridColumnDataType.Number },
        new() { Field = "orderDate", DataType = GridColumnDataType.Date },
        new() { Field = "requiredDate", DataType = GridColumnDataType.Date },
        new() { Field = "shipVia", DataType = GridColumnDataType.String },
        new() { Field = "freight", DataType = GridColumnDataType.Number },
        new() { Field = "shipName", DataType = GridColumnDataType.String },
        new() { Field = "completed", DataType = GridColumnDataType.Boolean }
    ];

    private static readonly IgbEntityType[] Entities =
    [
        new() { Name = "Customers", Fields = CustomerFields },
        new() { Name = "Orders", Fields = OrderFields }
    ];

    private static readonly IgbFieldType[] GridFields = OrderFields.Concat(CustomerFields)
        .GroupBy(field => field.Field).Select(group => group.First()).ToArray();

    private static readonly IgbExpressionTree ExpressionTree = new()
    {
        FilteringOperands = [],
        Operator = FilteringLogic.And,
        Entity = "Orders",
        ReturnFields = InitialReturnFields
    };

    private IgbQueryBuilder queryBuilder;
    private IgbGrid grid;
    private string errorMessage = string.Empty;
    private int queryVersion;
    private string[] visibleFields = InitialReturnFields;
    private DotNetObjectReference<App> serviceReference;

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (!firstRender || queryBuilder is null || grid is null)
        {
            return;
        }

        await queryBuilder.EnsureReady();
        await grid.EnsureReady();

        serviceReference = DotNetObjectReference.Create(this);
        await JS.InvokeVoidAsync("queryBuilderOverview.initialize", serviceReference);
        await LoadGridData(JsonSerializer.Serialize(new
        {
            Entity = ExpressionTree.Entity,
            ReturnFields = ExpressionTree.ReturnFields,
            Operator = ExpressionTree.Operator
        }));
    }

    [JSInvokable]
    public Task ExecuteQuery(string expressionJson)
    {
        return LoadGridData(expressionJson);
    }

    private async Task LoadGridData(string expressionJson)
    {
        var version = ++queryVersion;
        try
        {
            grid.IsLoading = true;
            errorMessage = string.Empty;
            var response = await QueryService.ExecuteQueryAsync(expressionJson);
            if (version != queryVersion)
            {
                return;
            }

            grid.Data = response.Items;
            visibleFields = response.Fields;
        }
        catch (Exception ex)
        {
            Logger.LogError(ex, "Error executing mock query");
            if (version == queryVersion)
            {
                errorMessage = $"Error executing query: {ex.Message}";
                grid.Data = Array.Empty<object>();
            }
        }
        finally
        {
            if (version == queryVersion)
            {
                grid.IsLoading = false;
                StateHasChanged();
            }
        }
    }

    public async ValueTask DisposeAsync()
    {
        try
        {
            await JS.InvokeVoidAsync("queryBuilderOverview.dispose");
        }
        finally
        {
            serviceReference?.Dispose();
        }
    }
}
```
```csharp
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using IgniteUI.Blazor.Controls;

namespace Infragistics.Samples
{
    /// <summary>
    /// Executes queries against local mock customers and orders after a one-second
    /// simulated network delay, including filters, subqueries, and field selection.
    /// </summary>
    public class QueryBuilderService
    {
        private static readonly JsonSerializerOptions JsonOptions = new()
        {
            PropertyNameCaseInsensitive = true
        };

        private static readonly Dictionary<string, object>[] Customers =
        [
            new() { ["customerId"] = "ALFKI", ["companyName"] = "Alfreds Futterkiste", ["contactName"] = "Maria Anders", ["contactTitle"] = "Sales Representative" },
            new() { ["customerId"] = "ANATR", ["companyName"] = "Ana Trujillo Emparedados y helados", ["contactName"] = "Ana Trujillo", ["contactTitle"] = "Owner" },
            new() { ["customerId"] = "ANTON", ["companyName"] = "Antonio Moreno Taqueria", ["contactName"] = "Antonio Moreno", ["contactTitle"] = "Owner" },
            new() { ["customerId"] = "AROUT", ["companyName"] = "Around the Horn", ["contactName"] = "Thomas Hardy", ["contactTitle"] = "Sales Representative" }
        ];

        private static readonly Dictionary<string, object>[] Orders = Enumerable.Range(0, 60)
            .Select(index => new Dictionary<string, object>
            {
                ["orderId"] = 10248 + index,
                ["customerId"] = Customers[index % Customers.Length]["customerId"],
                ["employeeId"] = index % 9 + 1,
                ["shipperId"] = index % 3 + 1,
                ["orderDate"] = new DateTime(2025, 1, 1).AddDays(index),
                ["requiredDate"] = new DateTime(2025, 1, 1).AddDays(index + 28),
                ["shipVia"] = new[] { "Speedy Express", "United Package", "Federal Shipping" }[index % 3],
                ["freight"] = 10m + index * 2.75m,
                ["shipName"] = Customers[index % Customers.Length]["companyName"],
                ["completed"] = index % 3 != 0
            }).ToArray();

        public async Task<QueryResponse> ExecuteQueryAsync(string expressionJson)
        {
            await Task.Delay(TimeSpan.FromSeconds(1));
            var expression = JsonSerializer.Deserialize<QueryExpression>(expressionJson, JsonOptions)
                ?? throw new ArgumentException("A query expression is required.", nameof(expressionJson));
            return ExecuteQuery(expression);
        }

        private static QueryResponse ExecuteQuery(QueryExpression expression)
        {
            var records = expression.Entity switch
            {
                "Customers" => Customers,
                "Orders" => Orders,
                _ => throw new ArgumentException($"Unknown entity: {expression.Entity}")
            };
            var fields = expression.ReturnFields;
            if (fields == null || fields.Length == 0 || fields.Contains("*"))
            {
                fields = records[0].Keys.ToArray();
            }

            if (fields.Any(field => !records[0].ContainsKey(field)))
            {
                throw new ArgumentException("The query contains an unknown return field.");
            }

            return new QueryResponse
            {
                Fields = fields,
                Items = records
                    .Where(record => MatchesTree(record, expression.FilteringOperands, expression.Operator))
                    .Select(record => fields.ToDictionary(field => field, field => record[field]))
                    .ToArray()
            };
        }

        private static bool MatchesTree(Dictionary<string, object> record,
            QueryExpression[] operands, FilteringLogic logic)
        {
            if (operands == null || operands.Length == 0)
            {
                return true;
            }

            return logic == FilteringLogic.Or
                ? operands.Any(operand => MatchesOperand(record, operand))
                : operands.All(operand => MatchesOperand(record, operand));
        }

        private static bool MatchesOperand(Dictionary<string, object> record,
            QueryExpression filter)
        {
            if (filter.FilteringOperands != null)
            {
                return MatchesTree(record, filter.FilteringOperands, filter.Operator);
            }

            var condition = filter.Condition?.Name ?? filter.ConditionName;
            // The builder can emit a partial expression while a condition is being edited.
            if (string.IsNullOrEmpty(condition) || string.IsNullOrEmpty(filter.FieldName))
            {
                return true;
            }

            if (!record.TryGetValue(filter.FieldName, out var value))
            {
                throw new ArgumentException($"Unknown field: {filter.FieldName}");
            }

            object searchValue = filter.SearchVal.ValueKind switch
            {
                JsonValueKind.String => filter.SearchVal.GetString(),
                JsonValueKind.Number => filter.SearchVal.GetDecimal(),
                JsonValueKind.True => true,
                JsonValueKind.False => false,
                JsonValueKind.Null or JsonValueKind.Undefined => null,
                _ => throw new ArgumentException("The search value must be a string, number, boolean, or null.")
            };
            var comparison = filter.IgnoreCase ? StringComparison.OrdinalIgnoreCase : StringComparison.Ordinal;
            var text = Convert.ToString(value, CultureInfo.InvariantCulture) ?? string.Empty;
            var searchText = Convert.ToString(searchValue, CultureInfo.InvariantCulture) ?? string.Empty;

            return condition switch
            {
                "null" => value == null,
                "notNull" => value != null,
                "empty" => value == null || text.Length == 0,
                "notEmpty" => value != null && text.Length != 0,
                "true" => value is true,
                "false" => value is false,
                "contains" => text.Contains(searchText, comparison),
                "doesNotContain" => !text.Contains(searchText, comparison),
                "startsWith" => text.StartsWith(searchText, comparison),
                "endsWith" => text.EndsWith(searchText, comparison),
                "equals" => Compare(value, searchValue, comparison) == 0,
                "doesNotEqual" => Compare(value, searchValue, comparison) != 0,
                "greaterThan" or "after" => Compare(value, searchValue, comparison) > 0,
                "greaterThanOrEqualTo" => Compare(value, searchValue, comparison) >= 0,
                "lessThan" or "before" => Compare(value, searchValue, comparison) < 0,
                "lessThanOrEqualTo" => Compare(value, searchValue, comparison) <= 0,
                "in" => MatchesSubquery(value, filter.SearchTree, comparison),
                "notIn" => !MatchesSubquery(value, filter.SearchTree, comparison),
                "today" or "yesterday" or "tomorrow" or "thisMonth" or "lastMonth" or "nextMonth"
                    or "thisYear" or "lastYear" or "nextYear" => MatchesDate(value, condition),
                _ => throw new NotSupportedException($"Unsupported condition: {condition}")
            };
        }

        private static int Compare(object value, object searchValue, StringComparison comparison)
        {
            if (value == null || searchValue == null)
            {
                return value == searchValue ? 0 : value == null ? -1 : 1;
            }

            return value switch
            {
                string text => string.Compare(text, Convert.ToString(searchValue, CultureInfo.InvariantCulture), comparison),
                DateTime date => date.Date.CompareTo(Convert.ToDateTime(searchValue, CultureInfo.InvariantCulture).Date),
                bool boolean => boolean.CompareTo(Convert.ToBoolean(searchValue, CultureInfo.InvariantCulture)),
                _ => Convert.ToDecimal(value, CultureInfo.InvariantCulture)
                    .CompareTo(Convert.ToDecimal(searchValue, CultureInfo.InvariantCulture))
            };
        }

        private static bool MatchesSubquery(object value, QueryExpression tree, StringComparison comparison)
        {
            if (tree == null)
            {
                throw new ArgumentException("Select a subquery for the IN condition.");
            }

            var response = ExecuteQuery(tree);
            if (response.Fields.Length != 1)
            {
                throw new ArgumentException("A subquery must return exactly one field.");
            }

            return response.Items.Any(row => Compare(value, row[response.Fields[0]], comparison) == 0);
        }

        private static bool MatchesDate(object value, string condition)
        {
            if (value == null)
            {
                return false;
            }

            var date = Convert.ToDateTime(value, CultureInfo.InvariantCulture).Date;
            var today = DateTime.Today;
            return condition switch
            {
                "today" => date == today,
                "yesterday" => date == today.AddDays(-1),
                "tomorrow" => date == today.AddDays(1),
                "thisMonth" => date.Year == today.Year && date.Month == today.Month,
                "lastMonth" => date.Year == today.AddMonths(-1).Year && date.Month == today.AddMonths(-1).Month,
                "nextMonth" => date.Year == today.AddMonths(1).Year && date.Month == today.AddMonths(1).Month,
                "thisYear" => date.Year == today.Year,
                "lastYear" => date.Year == today.Year - 1,
                "nextYear" => date.Year == today.Year + 1,
                _ => throw new NotSupportedException($"Unsupported date condition: {condition}")
            };
        }
    }

    public class QueryExpression
    {
        public string Entity { get; set; }
        public string[] ReturnFields { get; set; }
        public QueryExpression[] FilteringOperands { get; set; }
        [JsonConverter(typeof(JsonStringEnumConverter<FilteringLogic>))]
        public FilteringLogic Operator { get; set; }
        public string FieldName { get; set; }
        public QueryCondition Condition { get; set; }
        public string ConditionName { get; set; }
        public JsonElement SearchVal { get; set; }
        public QueryExpression SearchTree { get; set; }
        public bool IgnoreCase { get; set; }
    }

    public class QueryCondition
    {
        public string Name { get; set; }
    }

    public class QueryResponse
    {
        public Dictionary<string, object>[] Items { get; set; }
        public string[] Fields { get; set; }
    }
}
```

## Getting started with Blazor Query Builder
To start using the [`IgbQueryBuilder`](mcp:get_api_reference?platform=blazor&component=IgbQueryBuilder), first, you need to install the `Ignite UI for Blazor` package by running the following command:

```cmd
dotnet add package IgniteUI.Blazor --version 26.1.98
```

Register the Ignite UI for Blazor services:

```csharp
// in Program.cs file

builder.Services.AddIgniteUIBlazor();
```

Registering [`IgbQueryBuilderModule`](mcp:get_api_reference?platform=blazor&component=IgbQueryBuilderModule), the client resource module of the [`IgbQueryBuilder`](mcp:get_api_reference?platform=blazor&component=IgbQueryBuilder), is **optional**: the component loads its resources when it first renders. Listing it in `builder.Services.AddIgniteUIBlazor(typeof(IgbQueryBuilderModule))` can be used to preload resources or to support elements created only on the client (see [Component Modules](../general-getting-started.md#component-modules)).

You also need to reference the corresponding styles based on your project configuration.

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

## Using the Blazor Query Builder

If no expression tree is initially set, you start by choosing an entity and which of its fields the query should return. After that, conditions or sub-groups can be added.

In order to add a condition you select a field, an operand based on the field data type and a value if the operand is not unary. The operands `In` and `Not In` will allow you to create an inner query with conditions for a different entity instead of simply providing a value. Once the condition is committed, a chip with the condition information appears. By clicking or hovering the chip, you have the options to modify it or add another condition or group right after it.

Clicking on the (AND or OR) button placed above each group, will open a menu with options to change the group type or ungroup the conditions inside.

Since every condition is related to a specific field from a particular entity changing the entity will lead to resetting all preset conditions and groups.

You can start using the component by setting the [`Entities`](mcp:get_api_reference?platform=blazor&component=IgbQueryBuilder&member=entities) property to an array describing the entity name and an array of its fields, where each field is defined by its name and data type. Once a field is selected it will automatically assign the corresponding operands based on the data type.
The Query Builder has the [`ExpressionTree`](mcp:get_api_reference?platform=blazor&component=IgbQueryBuilder&member=expressionTree) property. You could use it to set an initial state of the control and access the user-specified filtering logic.

```razor
<IgbQueryBuilder @ref="queryBuilder"
    Entities="Entities"
    ExpressionTree="ExpressionTree"
    ExpressionTreeChangeScript="WebQueryBuilderExpressionTreeChange">
</IgbQueryBuilder>

@code {
    private static readonly IgbFieldType[] OrderFields =
    [
        new() { Field = "orderId", DataType = GridColumnDataType.Number },
        new() { Field = "customerId", DataType = GridColumnDataType.String },
        new() { Field = "orderDate", DataType = GridColumnDataType.Date }
    ];

    private static readonly IgbEntityType[] Entities =
    [
        new() { Name = "Orders", Fields = OrderFields }
    ];

    private static readonly IgbExpressionTree ExpressionTree = new()
    {
        FilteringOperands = [],
        Operator = FilteringLogic.And,
        Entity = "Orders"
    };

    private IgbQueryBuilder queryBuilder;
}
```

The [`IgbExpressionTree`](mcp:get_api_reference?platform=blazor&component=IgbExpressionTree) is a bindable property which means you can use `ExpressionTreeChangeScript` to receive notifications when the end-user changes the UI by creating, editing or removing conditions.

```javascript
// In JavaScript
igRegisterScript("WebQueryBuilderExpressionTreeChange", (evtArgs) => {
    const expressionTree = evtArgs.detail;
    console.log("Expression tree changed:", expressionTree);
}, false);
```

## Expressions Dragging

Condition chips can be easily repositioned using mouse Drag & Drop or Keyboard reordering approaches. With those, users can adjust their query logic dynamically.

- Dragging a chip does not modify its condition/contents, only its position.
- Chip can also be dragged along groups and subgroups. For example, grouping/ungrouping expressions is achieved via the Expressions Dragging functionality.
In order to group already existing conditions, first you need to add a new group through the 'add' group button. Then via dragging, the required expressions can be moved to that group. In order to ungroup, you could drag all conditions outside their current group and once the last condition is moved out, the group will be deleted.

**Note:** 
Chips from one query tree cannot be dragged in another, e.g. from parent to inner and vice versa.

## Keyboard interaction

**Key Combinations**

- <kbd>Tab</kbd> / <kbd>Shift + Tab</kbd> - navigates to the next/previous chip, drag indicator, remove button, 'add' expression button.
- <kbd>Arrow Down</kbd>/<kbd>Arrow Up</kbd> - when chip's drag indicator is focused, the chip can be moved up/down.
- <kbd>Space</kbd> / <kbd>Enter</kbd> - focused expression enters edit mode. If chip is been moved, this confirms it's new position.
- <kbd>Esc</kbd> - chip's reordering is canceled and it returns to it's original position.

**Note:** 
Keyboard reordering provides the same functionality as mouse Drag & Drop. Once a chip is moved, user has to confirm the new position or cancel the reorder.

## Templating

The Ignite UI for Blazor Query Builder allows defining templates for the component's header and search value:

### Header Template

By default the [`IgbQueryBuilder`](mcp:get_api_reference?platform=blazor&component=IgbQueryBuilder) header would not be displayed. In order to define such, the [`IgbQueryBuilderHeader`](mcp:get_api_reference?platform=blazor&component=IgbQueryBuilderHeader) component should be added inside the query builder.

```razor
<IgbQueryBuilder Entities="Entities" ExpressionTree="ExpressionTree">
    <IgbQueryBuilderHeader Title="My Query Builder"></IgbQueryBuilderHeader>
</IgbQueryBuilder>
```

### Search Value Template

For Blazor, use the `SearchValueTemplateScript` property to reference a client-side function registered with `igRegisterScript`.

**Note:** 
When using `SearchValueTemplate`, you must provide templates for all field types in your entity, or the query builder will not function correctly. It is mandatory to implement a default/fallback template that handles any fields or conditions not covered by specific custom templates. Without this, users will not be able to edit

conditions for those fields.

```razor
<IgbQueryBuilder @ref="queryBuilder"
    Entities="Entities"
    ExpressionTree="ExpressionTree"
    ExpressionTreeChangeScript="WebQueryBuilderExpressionTreeChange"
    SearchValueTemplateScript="SearchValueTemplate">
    <IgbQueryBuilderHeader Title="Query Builder Template Sample"></IgbQueryBuilderHeader>
</IgbQueryBuilder>
```

```javascript
// In JavaScript
igRegisterScript("SearchValueTemplate", (ctx) => {
    const field = ctx.selectedField?.field;
    const condition = ctx.selectedCondition;
    const matchesEqualityCondition = condition === "equals" || condition === "doesNotEqual";

    if (!ctx.implicit) {
        ctx.implicit = { value: null };
    }

    if (field === "Region" && matchesEqualityCondition) {
        return buildRegionSelect(ctx);
    }

    if (field === "OrderStatus" && matchesEqualityCondition) {
        return buildStatusRadios(ctx);
    }

    if (ctx.selectedField?.dataType === "date") {
        return buildDatePicker(ctx);
    }

    if (field === "RequiredTime") {
        return buildTimeInput(ctx);
    }

    return buildDefaultInput(ctx, matchesEqualityCondition);
}, false);
```

Below are examples showing one template for each type of editor:

For the Region Select example:

```razor
// Field definition
new() { Field = "Region", DataType = GridColumnDataType.String }
```

```javascript
// In JavaScript
// Template
function buildRegionSelect(ctx) {
    const currentValue = ctx?.implicit?.value;
    const changeHandler = (event) => {
        const value = event && event.detail ? event.detail.value : null;
        ctx.implicit.value = value;
    };

    return html`
      <igc-select
        placeholder="Region"
        .value=${currentValue}
        @igcChange=${changeHandler}>
        ${regionOptions.map(option => html`
          <igc-select-item value=${option.value}>${option.text}</igc-select-item>
        `)}
      </igc-select>
    `;
}
```

For the Status Radio Group example:

```razor
// Field definition
new() { Field = "OrderStatus", DataType = GridColumnDataType.String }
```

```javascript
// In JavaScript
// Template
function buildStatusRadios(ctx) {
    const implicitValue = ctx?.implicit?.value;
    const currentValue = implicitValue == null ? '' : implicitValue.toString();

    const changeHandler = (event) => {
        const value = event && event.detail ? event.detail.value : undefined;
        if (!value || ctx.implicit.value === value) {
            return;
        }
        ctx.implicit.value = value;
    };

    return html`
      <igc-radio-group
        style="gap: 5px;"
        .alignment=${"horizontal"}
        .value=${currentValue}
        @igcChange=${changeHandler}>
        ${statusOptions.map(option => html`
          <igc-radio
            name="status"
            value=${option.value}
            ?checked=${option.value.toString() === currentValue}>
            ${option.text}
          </igc-radio>
        `)}
      </igc-radio-group>
    `;
}
```

For the Date Picker example:

```razor
// Field definition
new() { Field = "OrderDate", DataType = GridColumnDataType.Date }
```

```javascript
// In JavaScript
// Template
function buildDatePicker(ctx) {
    const implicitValue = ctx.implicit?.value;
    const currentValue = implicitValue instanceof Date
        ? implicitValue
        : implicitValue
            ? new Date(implicitValue)
            : null;

    const allowedConditions = ['equals', 'doesNotEqual', 'before', 'after'];
    const isEnabled = allowedConditions.includes(ctx.selectedCondition ?? '');

    return html`
      <igc-date-picker
        .value=${currentValue}
        .disabled=${!isEnabled}
        @click=${(event) => (event.currentTarget).show()}
        @igcChange=${(event) => {
            ctx.implicit.value = event.detail;
        }}>
      </igc-date-picker>
    `;
}
```

For the Time Input example:

```razor
// Field definition
new()
{
    Field = "RequiredTime",
    DataType = GridColumnDataType.Time,
    DefaultTimeFormat = "hh:mm tt"
}
```

```javascript
// In JavaScript
// Template
function buildTimeInput(ctx) {
    const currentValue = normalizeTimeValue(ctx.implicit?.value);
    const allowedConditions = ['at', 'not_at', 'at_before', 'at_after', 'before', 'after'];
    const isDisabled = ctx.selectedField == null || !allowedConditions.includes(ctx.selectedCondition ?? '');

    return html`
      <igc-date-time-input
        .inputFormat=${"hh:mm tt"}
        .value=${currentValue}
        .disabled=${isDisabled}
        @igcChange=${(event) => {
            const picker = event.currentTarget;
            ctx.implicit.value = picker.value;
        }}>
        <igc-icon slot="prefix" name="clock" collection="material"></igc-icon>
      </igc-date-time-input>
    `;
}
```

For the Default Input template:

```razor
// Field definitions for string, number, and boolean types
new() { Field = "ShipCountry", DataType = GridColumnDataType.String }
new() { Field = "OrderID", DataType = GridColumnDataType.Number }
new() { Field = "IsRushOrder", DataType = GridColumnDataType.Boolean }
```

```javascript
// In JavaScript
// Template that handles all these types
function buildDefaultInput(ctx, equalityCondition) {
    const selectedField = ctx.selectedField;
    const dataType = selectedField?.dataType;
    const isNumber = dataType === 'number';
    const isBoolean = dataType === 'boolean';

    const placeholder = ctx.selectedCondition === 'inQuery' || ctx.selectedCondition === 'notInQuery'
        ? 'Sub-query results'
        : 'Value';

    const currentImplicitValue = ctx && ctx.implicit ? ctx.implicit.value : null;
    const currentValue = typeof currentImplicitValue === 'object' && currentImplicitValue && 'text' in currentImplicitValue
        ? equalityCondition ? currentImplicitValue.text : ''
        : currentImplicitValue;

    const inputValue = currentValue == null ? '' : currentValue;
    const disabledConditions = ['empty', 'notEmpty', 'null', 'notNull', 'inQuery', 'notInQuery'];
    const isDisabled = isBoolean || selectedField == null || disabledConditions.includes(ctx.selectedCondition ?? '');

    return html`
      <igc-input 
        .value=${inputValue}
        ?disabled=${isDisabled}
        placeholder=${placeholder}
        type=${isNumber ? 'number' : 'text'}
        @input=${(event) => {
            const target = event.target;
            ctx.implicit.value = isNumber
                ? target.value === '' ? null : Number(target.value)
                : target.value;
        }}>
      </igc-input>
    `;
}
```

### Formatter

In order to change the appearance of the search value in the chip displayed when a condition is not in edit mode, you can set a formatter function to the fields array. The search value can be accessed through the value argument as follows:

```razor
private static readonly IgbFieldType[] OrderFields =
[
    new() { Field = "OrderID", DataType = GridColumnDataType.Number },
    new() { Field = "ShipCountry", DataType = GridColumnDataType.String },
    new()
    {
        Field = "OrderDate",
        DataType = GridColumnDataType.Date,
        PipeArgs = new IgbFieldPipeArgs { Format = "MMM d, y" }
    },
    new() { Field = "Region", DataType = GridColumnDataType.String }
];
```

### Demo

We’ve created this example to show you the templating and formatter functionalities for the header and the search value of the Blazor Query Builder component.

```razor
@using IgniteUI.Blazor.Controls
@inject IJSRuntime JS

<div class="container vertical">
    <div class="options horizontal fill">
        <IgbIcon @ref="RegisterIconRef" IconName="clock" Collection="material" style="display: none;" />
        <IgbQueryBuilder @ref="queryBuilder"
                         Entities="Entities"
                         ExpressionTree="ExpressionTree"
                         ExpressionTreeChangeScript="WebQueryBuilderTemplateExpressionTreeChange"
                         SearchValueTemplateScript="SearchValueTemplate">
                         <IgbQueryBuilderHeader Title="Query Builder Template Sample"></IgbQueryBuilderHeader>
        </IgbQueryBuilder>
    </div>
    <div class="container vertical fill output-area">
        <pre id="expressionOutput"></pre>
    </div>
</div>

@code {

    private IgbQueryBuilder queryBuilder;
    private IgbIcon RegisterIconRef { get; set; }

    private static readonly IgbFieldType[] OrderFields =
    [
        new() { Field = "CompanyID", DataType = GridColumnDataType.String },
        new() { Field = "OrderID", DataType = GridColumnDataType.Number },
        new() { Field = "Freight", DataType = GridColumnDataType.Number },
        new() { Field = "ShipCountry", DataType = GridColumnDataType.String },
        new() { Field = "IsRushOrder", DataType = GridColumnDataType.Boolean },
        new()
        {
            Field = "RequiredTime",
            DataType = GridColumnDataType.Time,
            DefaultTimeFormat = "hh:mm tt"
        },
        new()
        {
            Field = "OrderDate",
            DataType = GridColumnDataType.Date,
            PipeArgs = new IgbFieldPipeArgs { Format = "MMM d, y" }
        },
        new() { Field = "Region", DataType = GridColumnDataType.String },
        new() { Field = "OrderStatus", DataType = GridColumnDataType.String }
    ];

    private static readonly IgbEntityType[] Entities =
    [
        new()
        {
            Name = "Orders",
            Fields = OrderFields
        }
    ];

    class QueryBuilderOption
    {
        public string Text { get; set; }
        public string Value { get; set; }
    }

    private static readonly QueryBuilderOption[] RegionOptions =
    [
        new() { Text = "Central North America", Value = "CNA" },
        new() { Text = "Central Europe", Value = "CEU" },
        new() { Text = "Mediterranean region", Value = "MED" },
        new() { Text = "Central Asia", Value = "CAS" },
        new() { Text = "South Asia", Value = "SAS" },
        new() { Text = "Western Africa", Value = "WAF" },
        new() { Text = "Amazonia", Value = "AMZ" },
        new() { Text = "Southern Africa", Value = "SAF" },
        new() { Text = "Northern Australia", Value = "NAU" }
    ];


    private static readonly QueryBuilderOption[] StatusOptions =
    [
        new() { Text = "New", Value = "New" },
        new() { Text = "Shipped", Value = "Shipped" },
        new() { Text = "Done", Value = "Done" }
    ];

    private static readonly IgbExpressionTree ExpressionTree = new()
    {
        Operator = FilteringLogic.And,
        Entity = "Orders",
        ReturnFields = ["*"],
        FilteringOperands =
        [
              new IgbFilteringExpression
              {
                  FieldName = "Region",
                  ConditionName = "equals",
                  SearchVal = RegionOptions[0].Value
              },
             new IgbFilteringExpression
             {
                 FieldName = "OrderStatus",
                 ConditionName = "equals",
                 SearchVal = StatusOptions[0].Value
             }
        ]
    };

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (!firstRender || queryBuilder is null)
        {
            return;
        }

        await this.RegisterIcons();
        await queryBuilder.EnsureReady();
        await JS.InvokeVoidAsync("queryBuilderTemplate.init", RegionOptions, StatusOptions);
    }

    private async Task RegisterIcons()
    {
        if (this.RegisterIconRef is null)
        {
            return;
        }

        await this.RegisterIconRef.EnsureReady();

        const string clockIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z' /></svg>";
        await this.RegisterIconRef.RegisterIconFromTextAsync("clock", clockIcon, "material");
    }


}
```

## API References
[`IgbQueryBuilder`](mcp:get_api_reference?platform=blazor&component=IgbQueryBuilder)
[`IgbQueryBuilderHeader`](mcp:get_api_reference?platform=blazor&component=IgbQueryBuilderHeader)
## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
