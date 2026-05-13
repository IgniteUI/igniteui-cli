---
title: Blazor Tree Grid Filtering - Ignite UI for Blazor
_description: Start using angular filter to return specific data with Blazor Tree Grid. Check the advanced filtering options, including data-type Excel-style filtering.
_keywords: filter, Blazor, Tree Grid, IgbTreeGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/filtering
_tocName: Filtering
---

# Blazor Tree Grid Filtering

The Ignite UI for Blazor Filtering in Blazor Tree Grid is a feature that allows for selectively displaying or hiding data based on specific criteria or conditions. There is a bound data container through which the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) Component provides rich filtering API and all the filtering capabilities. The available filtering types here are three:

- Quick filtering
- [Excel Style Filtering](excel-style-filtering.md)
- [Advanced Filtering](advanced-filtering.md)

## Blazor Tree Grid Filtering Example

The sample below demonstrates [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html)'s **Quick Filter** user experience.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbTreeGrid
        AutoGenerate="false"
        Name="treeGrid"
        @ref="treeGrid"
        Id="treeGrid"
        Data="OrdersData"
        FilterMode="FilterMode.QuickFilter"
        PrimaryKey="ID"
        ForeignKey="ParentID"
        AllowFiltering="true">
            <IgbColumn
            Field="ID"
            Header="Order ID"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="Name"
            Header="Order Product"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="Category"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="Units"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="Age"
            DataType="GridColumnDataType.Number"
            Sortable="true"
            Hidden="true">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Unit Price"
            DataType="GridColumnDataType.Currency">
            </IgbColumn>

            <IgbColumn
            Field="Price"
            DataType="GridColumnDataType.Currency">
            </IgbColumn>

            <IgbColumn
            Field="Country"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Header="Order Date"
            DataType="GridColumnDataType.Date">
            </IgbColumn>

            <IgbColumn
            Field="Delivered"
            DataType="GridColumnDataType.Boolean">
            </IgbColumn>

        </IgbTreeGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var treeGrid = this.treeGrid;

    }

    private IgbTreeGrid treeGrid;

    private OrdersData _ordersData = null;
    public OrdersData OrdersData
    {
        get
        {
            if (_ordersData == null)
            {
                _ordersData = new OrdersData();
            }
            return _ordersData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class OrdersDataItem
{
    public double ID { get; set; }
    public double ParentID { get; set; }
    public string Name { get; set; }
    public string Category { get; set; }
    public string OrderDate { get; set; }
    public double Units { get; set; }
    public double UnitPrice { get; set; }
    public double Price { get; set; }
    public bool Delivered { get; set; }
}

public class OrdersData
    : List<OrdersDataItem>
{
    public OrdersData()
    {
        this.Add(new OrdersDataItem() { ID = 1, ParentID = -1, Name = @"Order 1", Category = @"", OrderDate = @"2010-02-17", Units = 1844, UnitPrice = 3.73, Price = 6884.38, Delivered = true });
        this.Add(new OrdersDataItem() { ID = 101, ParentID = 1, Name = @"Chocolate Chip Cookies", Category = @"Cookies", OrderDate = @"2010-02-17", Units = 834, UnitPrice = 3.59, Price = 2994.06, Delivered = true });
        this.Add(new OrdersDataItem() { ID = 102, ParentID = 1, Name = @"Red Apples", Category = @"Fruit", OrderDate = @"2010-02-17", Units = 371, UnitPrice = 3.66, Price = 1357.86, Delivered = true });
        // ... 19 more items
    }
}
```

## Setup

In order to specify if filtering is enabled and which filtering mode should be used, the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) exposes the following properties - [`AllowFiltering`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_AllowFiltering), [`AllowAdvancedFiltering`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_AllowAdvancedFiltering), [`FilterMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FilterMode) and [`Filterable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Filterable).

Property [`AllowFiltering`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_AllowFiltering) enables you to specify the following options:

- **false** - the filtering for the corresponding grid will be disabled. This is the default value.
- **true** - the filtering for the corresponding grid will be enabled.

Property [`AllowAdvancedFiltering`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_AllowAdvancedFiltering) enables you to specify the following options:

- **false** - the advanced filtering for the corresponding grid will be disabled. This is the default value.
- **true** - the advanced filtering for the corresponding grid will be enabled.

Property [`FilterMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FilterMode) enables you to specify the following options:

- **QuickFilter** - a simplistic filtering UI. This is the default value.
- **ExcelStyleFilter** - an Excel-like filtering UI.

Property [`Filterable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Filterable) enables you to specify the following options:

- **true** - the filtering for the corresponding column will be enabled. This is the default value.
- **false** - the filtering for the corresponding column will be disabled.

```razor
<IgbTreeGrid Data=data AutoGenerate=false AllowFiltering=true>
    <IgbColumn Field="ProductName" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="Price" DataType="GridColumnDataType.Number" Filterable=false></IgbColumn>
</IgbTreeGrid>
```

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

To enable the [Advanced filtering](advanced-filtering.md) however, you need to set the [`AllowAdvancedFiltering`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_AllowAdvancedFiltering) input property to **true**

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

```razor
<IgbTreeGrid Data=data AutoGenerate=true AllowAdvancedFiltering=true />
```

> [!Note]
> You can enable both the `QuickFilter` or `ExcelStyleFilter` and the advanced filtering user interfaces in the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html). Both filtering user interfaces will work independently of one another. The final filtered result in the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) is the intersection between the results of the two filters.

## Interaction

In order to open the filter row for a particular column, the 'Filter' chip below its header should be clicked. To add conditions you should choose filter operand using the dropdown on the left of the input and enter value. For **number** and **date** columns 'Equals' is selected by default, for **string** - 'Contains' and for **boolean** - 'All'. Pressing 'Enter' confirms the condition and you are now able to add another one. There is a dropdown, between 'condition' chips, which determines the logical operator between them, 'AND' is selected by default. To remove a condition you can click the 'X' button of the chip, and to edit it you should select the chip and the input will be populated with the chip's data. While filter row is opened you can click on any filterable column's header in order to select it and to be able to add filter conditions for it.

While some filtering conditions have been applied to a column, and the filter row is closed, you can either remove the conditions by clicking the chip's close button, or you can open the filter row by selecting any of the chips. When there is not enough space to show all the conditions, a filter icon is shown with a badge that indicates how many more conditions there are. It can also be clicked in order to open the filter row.

## Usage

There's a default filtering strategy provided out of the box, as well as all the standard filtering conditions, which the developer can replace with their own implementation. In addition, we've provided a way to easily plug in your own custom filtering conditions. The [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) currently provides not only a simplistic filtering UI, but also more complex filtering options. Depending on the set [`DataType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DataType) of the column, the correct set of **filtering operations** is loaded inside the filter UI dropdown. Additionally, you can set the `IgnoreCase` and the initial `Condition` properties.

The filtering feature is enabled for the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) component by setting the [`AllowFiltering`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_AllowFiltering) input to **true**. The default [`FilterMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FilterMode) is `QuickFilter` and it **cannot** be changed run time. To disable this feature for a certain column – set the [`Filterable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Filterable) input to **false**.

<!-- ComponentStart: Grid, TreeGrid -->

<!-- ComponentEnd: Grid, TreeGrid -->

```razor
<IgbTreeGrid Data=data AutoGenerate=false AllowFiltering=true>
    <IgbColumn Field="ProductName" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="Price" DataType="GridColumnDataType.Number" Filterable=false></IgbColumn>
</IgbTreeGrid>
```

> [!Note]
> If values of type **string** are used by a column of data type **date**, the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) won't parse them to **date** objects and using filtering conditions won't be possible. If you want to use **string** objects, additional logic should be implemented on the application level, in order to parse the values to **date** objects.

## Initial filtered state

To set the initial filtering state of the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html), set the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) [`FilteringExpressionsTree`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FilteringExpressionsTree) property to an array of [`FilteringExpressionsTree`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FilteringExpressionsTree) for each column to be filtered.

```razor
<IgbTreeGrid
    FilteringExpressionsTree="filteringExpressions"
    AllowFiltering="true"
    FilterMode="FilterMode.QuickFilter">
</IgbTreeGrid>

@code {

    protected override async Task OnInitializedAsync()
    {
        IgbFilteringExpressionsTree gridFilteringExpressionsTree = new IgbFilteringExpressionsTree() { Operator = FilteringLogic.And };

        IgbFilteringExpression categoryFilteringExpressionsTree = new IgbFilteringExpression()
            {
            FieldName = "Category",
            ConditionName = "contains",
            IgnoreCase = true,
            SearchVal = "Metals"
        };

        IgbFilteringExpression typeFilteringExpressionsTree = new IgbFilteringExpression()
        {
            FieldName = "Type",
            ConditionName = "contains",
            IgnoreCase = true,
            SearchVal = "e"
        };

        gridFilteringExpressionsTree.FilteringOperands = new IgbFilteringExpression[2] { categoryFilteringExpressionsTree, typeFilteringExpressionsTree };

        filteringExpressions = gridFilteringExpressionsTree;
    }

    public IgbFilteringExpressionsTree filteringExpressions;
}
```

### Filtering logic

The [`FilteringLogic`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FilteringLogic) property of the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) controls how filtering multiple columns will resolve in the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html). You can change it at any time through the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) API, or through the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) input property.

```razor
 <IgbTreeGrid FilteringLogic="FilteringLogic.Or"></IgbTreeGrid>
```

The default value of `AND` returns only the rows that match all the currently applied filtering expressions. Following the example above, a row will be returned when both the 'ProductName' cell value contains 'myproduct' and the 'Price' cell value is greater than 55.

When set to `OR`, a row will be returned when either the 'ProductName' cell value contains 'myproduct' or the 'Price' cell value is greater than 55.

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```razor
<IgbTreeGrid Class="grid"></IgbTreeGrid>
```

Then set the related CSS properties for that class:

```css
.grid {
    --ig-grid-filtering-row-text-color: #292826;
    --ig-grid-filtering-row-background: #ffcd0f;
    --ig-grid-filtering-header-text-color: #292826;
    --ig-grid-filtering-header-background: #ffcd0f;
}
```

### Demo

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbTreeGrid
        AutoGenerate="false"
        Name="treeGrid"
        @ref="treeGrid"
        Id="treeGrid"
        Data="OrdersData"
        FilterMode="FilterMode.QuickFilter"
        PrimaryKey="ID"
        ForeignKey="ParentID"
        AllowFiltering="true">
            <IgbColumn
            Field="ID"
            Header="Order ID"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="Name"
            Header="Order Product"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="Category"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="Units"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="Age"
            DataType="GridColumnDataType.Number"
            Sortable="true"
            Hidden="true">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Unit Price"
            DataType="GridColumnDataType.Currency">
            </IgbColumn>

            <IgbColumn
            Field="Price"
            DataType="GridColumnDataType.Currency">
            </IgbColumn>

            <IgbColumn
            Field="Country"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Header="Order Date"
            DataType="GridColumnDataType.Date">
            </IgbColumn>

            <IgbColumn
            Field="Delivered"
            DataType="GridColumnDataType.Boolean">
            </IgbColumn>

        </IgbTreeGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var treeGrid = this.treeGrid;

    }

    private IgbTreeGrid treeGrid;

    private OrdersData _ordersData = null;
    public OrdersData OrdersData
    {
        get
        {
            if (_ordersData == null)
            {
                _ordersData = new OrdersData();
            }
            return _ordersData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class OrdersDataItem
{
    public double ID { get; set; }
    public double ParentID { get; set; }
    public string Name { get; set; }
    public string Category { get; set; }
    public string OrderDate { get; set; }
    public double Units { get; set; }
    public double UnitPrice { get; set; }
    public double Price { get; set; }
    public bool Delivered { get; set; }
}

public class OrdersData
    : List<OrdersDataItem>
{
    public OrdersData()
    {
        this.Add(new OrdersDataItem() { ID = 1, ParentID = -1, Name = @"Order 1", Category = @"", OrderDate = @"2010-02-17", Units = 1844, UnitPrice = 3.73, Price = 6884.38, Delivered = true });
        this.Add(new OrdersDataItem() { ID = 101, ParentID = 1, Name = @"Chocolate Chip Cookies", Category = @"Cookies", OrderDate = @"2010-02-17", Units = 834, UnitPrice = 3.59, Price = 2994.06, Delivered = true });
        this.Add(new OrdersDataItem() { ID = 102, ParentID = 1, Name = @"Red Apples", Category = @"Fruit", OrderDate = @"2010-02-17", Units = 371, UnitPrice = 3.66, Price = 1357.86, Delivered = true });
        // ... 19 more items
    }
}
```

## Known Limitations

> [!Note]
> Some browsers such as Firefox fail to parse regional specific decimal separators by considering them grouping separators, thus resulting in them being invalid. When inputting such values for a numeric column filter value, only the valid part of the number will be applied to the filtering expression. For further information, refer to the Firefox [issue](https://bugzilla.mozilla.org/show_bug.cgi?id=1199665).

## API References

- [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html)
- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
