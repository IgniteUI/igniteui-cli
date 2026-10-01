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
@inject IJSRuntime JS

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
            <IgbColumn Field="orderId" DataType="GridColumnDataType.Number"></IgbColumn>
            <IgbColumn Field="customerId" DataType="GridColumnDataType.String"></IgbColumn>
            <IgbColumn Field="companyName" DataType="GridColumnDataType.String"></IgbColumn>
            <IgbColumn Field="contactName" DataType="GridColumnDataType.String"></IgbColumn>
            <IgbColumn Field="contactTitle" DataType="GridColumnDataType.String"></IgbColumn>
            <IgbColumn Field="employeeId" DataType="GridColumnDataType.Number"></IgbColumn>
            <IgbColumn Field="shipperId" DataType="GridColumnDataType.Number"></IgbColumn>
            <IgbColumn Field="orderDate" DataType="GridColumnDataType.Date"></IgbColumn>
            <IgbColumn Field="requiredDate" DataType="GridColumnDataType.Date"></IgbColumn>
            <IgbColumn Field="shipVia" DataType="GridColumnDataType.String"></IgbColumn>
            <IgbColumn Field="freight" DataType="GridColumnDataType.Number"></IgbColumn>
            <IgbColumn Field="shipName" DataType="GridColumnDataType.String"></IgbColumn>
            <IgbColumn Field="completed" DataType="GridColumnDataType.Boolean"></IgbColumn>
        </IgbGrid>
    </div>
</div>

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

    private static readonly IgbExpressionTree ExpressionTree = new()
    {
        FilteringOperands = [],
        Operator = FilteringLogic.And,
        Entity = "Orders",
        ReturnFields = InitialReturnFields
    };

    private IgbQueryBuilder queryBuilder;
    private IgbGrid grid;

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (!firstRender || queryBuilder is null || grid is null)
        {
            return;
        }

        await queryBuilder.EnsureReady();
        await grid.EnsureReady();

        await JS.InvokeVoidAsync("queryBuilderOverview.loadInitialData", new
        {
            filteringOperands = Array.Empty<object>(),
            @operator = 0,
            entity = "Orders",
            returnFields = InitialReturnFields
        });
    }
}
```

## Getting started with Blazor Query Builder
To start using the [`IgbQueryBuilder`](mcp:get_api_reference?platform=blazor&component=IgbQueryBuilder), first, you need to install the `Ignite UI for Blazor` package by running the following command:

```cmd
dotnet add package IgniteUI.Blazor --version 26.1.98
```

Register the Query Builder module in the `Program.cs` file:

```razor
builder.Services.AddIgniteUIBlazor(typeof(IgbQueryBuilderModule));
```

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
