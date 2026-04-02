---
title: Blazor Tree Grid Sorting - Ignite UI for Blazor
_description: Get started with the Blazor sorting feature of Ignite UI for Blazor Tree Grid! Configure a mix of sortable columns & change the display order of data records.
_keywords: Blazor sort, Blazor, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/sorting
_tocName: Sorting
_premium: true
---

# Blazor Tree Grid Sorting

The Ignite UI for Blazor Data Sorting feature in Blazor Tree Grid is enabled on a per-column level, meaning that the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) can have a mix of sortable and non-sortable columns. Performing Blazor sort actions enables you to change the display order of the records based on specified criteria.

## Blazor Tree Grid Sorting Overview Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="options vertical">
        <IgbPropertyEditorPanel
        Name="PropertyEditor"
        @ref="propertyEditor"

        DescriptionType="WebGrid"
        IsHorizontal="true"
        IsWrappingEnabled="true">
            <IgbPropertyEditorPropertyDescription
            PropertyPath="SortingOptions"
            Name="SortingOptionsEditor"
            @ref="sortingOptionsEditor">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            ValueType="PropertyEditorValueType.Button"
            PrimitiveValue="@("Clear Sorting")"
            ButtonClicked="WebGridClearSort"
            Name="propertyEditorPropertyDescription1"
            @ref="propertyEditorPropertyDescription1">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="container vertical fill">
        <IgbTreeGrid
        AutoGenerate="false"
        Data="OrdersTreeData"
        Name="grid"
        @ref="grid"
        SortingExpressions="SortingExpression1"
        PrimaryKey="ID"
        ForeignKey="ParentID">
            <IgbColumn
            Field="ID"
            Header="Order ID"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Name"
            Header="Name"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Category"
            Header="Category"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Header="Order Date"
            DataType="GridColumnDataType.Date"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Price"
            DataType="GridColumnDataType.Currency"
            Sortable="true"
            PipeArgs="ColumnPipeArgs1"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Units"
            Header="Units"
            DataType="GridColumnDataType.Number"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Delivered"
            Header="Units"
            DataType="GridColumnDataType.Boolean"
            Sortable="true">
            </IgbColumn>

        </IgbTreeGrid>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditor = this.propertyEditor;
        var sortingOptionsEditor = this.sortingOptionsEditor;
        var propertyEditorPropertyDescription1 = this.propertyEditorPropertyDescription1;
        var grid = this.grid;
        var column1 = this.column1;

        this.BindElements = () => {
            propertyEditor.Target = this.grid;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditor;
    private IgbPropertyEditorPropertyDescription sortingOptionsEditor;
    private IgbPropertyEditorPropertyDescription propertyEditorPropertyDescription1;
    private IgbTreeGrid grid;
    private IgbSortingExpression[] _sortingExpression1 = null;
    public IgbSortingExpression[] SortingExpression1
    {
        get
        {
            if (this._sortingExpression1 == null)
            {
                var sortingExpression1 = new IgbSortingExpression[1];
                var sortingExpression2 = new IgbSortingExpression();
                sortingExpression2.FieldName = "Category";
                sortingExpression2.Dir = SortingDirection.Asc;
                sortingExpression2.IgnoreCase = true;
                sortingExpression1[0] = sortingExpression2;
                this._sortingExpression1 = sortingExpression1;
            }
            return this._sortingExpression1;
        }
    }
    private IgbColumn column1;
    private IgbColumnPipeArgs _columnPipeArgs1 = null;
    public IgbColumnPipeArgs ColumnPipeArgs1
    {
        get
        {
            if (this._columnPipeArgs1 == null)
            {
                var columnPipeArgs1 = new IgbColumnPipeArgs();
                columnPipeArgs1.CurrencyCode = "USD";
                columnPipeArgs1.DigitsInfo = "1.2-2";
                this._columnPipeArgs1 = columnPipeArgs1;
            }
            return this._columnPipeArgs1;
        }
    }

    public void WebGridClearSort(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        this.grid.ClearSort("");
    }

    private OrdersTreeData _ordersTreeData = null;
    public OrdersTreeData OrdersTreeData
    {
        get
        {
            if (_ordersTreeData == null)
            {
                _ordersTreeData = new OrdersTreeData();
            }
            return _ordersTreeData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class OrdersTreeDataItem
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

public class OrdersTreeData
    : List<OrdersTreeDataItem>
{
    public OrdersTreeData()
    {
        this.Add(new OrdersTreeDataItem() { ID = 1, ParentID = -1, Name = @"Order 1", Category = @"", OrderDate = @"2010-02-17", Units = 1844, UnitPrice = 3.73, Price = 6884.38, Delivered = true });
        this.Add(new OrdersTreeDataItem() { ID = 101, ParentID = 1, Name = @"Chocolate Chip Cookies", Category = @"Cookies", OrderDate = @"2010-02-17", Units = 834, UnitPrice = 3.59, Price = 2994.06, Delivered = true });
        this.Add(new OrdersTreeDataItem() { ID = 102, ParentID = 1, Name = @"Red Apples", Category = @"Fruit", OrderDate = @"2010-02-17", Units = 371, UnitPrice = 3.66, Price = 1357.86, Delivered = true });
        // ... 19 more items
    }
}
```


This is done via the [`Sortable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Sortable) input. With the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) sorting, you can also set the [`SortingIgnoreCase`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_SortingIgnoreCase) property to perform case sensitive sorting:

```razor
<IgbColumn Field="Title" Sortable="true"></IgbColumn>
```

## Sorting Indicators

Having a certain amount of sorted columns could be really confusing if there is no indication of the sorted order.

The [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) provides a solution for this problem by indicating the index of each sorted column.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbTreeGrid
        AutoGenerate="false"
        Data="OrdersTreeData"
        Name="grid"
        @ref="grid"
        SortingExpressions="SortingExpression1"
        Id="grid"
        PrimaryKey="ID"
        ForeignKey="ParentID">
            <IgbColumn
            Field="ID"
            Header="Order ID"
            Groupable="true"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Name"
            Header="Name"
            DataType="GridColumnDataType.String"
            Groupable="true"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Category"
            Header="Category"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Header="Order Date"
            DataType="GridColumnDataType.Date"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Price"
            DataType="GridColumnDataType.Currency"
            Sortable="true"
            PipeArgs="ColumnPipeArgs1"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Units"
            Header="Units"
            DataType="GridColumnDataType.Number"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Delivered"
            Header="Units"
            DataType="GridColumnDataType.Boolean"
            Sortable="true">
            </IgbColumn>

        </IgbTreeGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;
        var column1 = this.column1;

    }

    private IgbTreeGrid grid;
    private IgbSortingExpression[] _sortingExpression1 = null;
    public IgbSortingExpression[] SortingExpression1
    {
        get
        {
            if (this._sortingExpression1 == null)
            {
                var sortingExpression1 = new IgbSortingExpression[7];
                var sortingExpression2 = new IgbSortingExpression();
                sortingExpression2.Dir = SortingDirection.Asc;
                sortingExpression2.FieldName = "ID";
                sortingExpression2.IgnoreCase = true;
                sortingExpression1[0] = sortingExpression2;
                var sortingExpression3 = new IgbSortingExpression();
                sortingExpression3.Dir = SortingDirection.Desc;
                sortingExpression3.FieldName = "Name";
                sortingExpression3.IgnoreCase = true;
                sortingExpression1[1] = sortingExpression3;
                var sortingExpression4 = new IgbSortingExpression();
                sortingExpression4.Dir = SortingDirection.Asc;
                sortingExpression4.FieldName = "Category";
                sortingExpression4.IgnoreCase = true;
                sortingExpression1[2] = sortingExpression4;
                var sortingExpression5 = new IgbSortingExpression();
                sortingExpression5.Dir = SortingDirection.Asc;
                sortingExpression5.FieldName = "OrderDate";
                sortingExpression5.IgnoreCase = true;
                sortingExpression1[3] = sortingExpression5;
                var sortingExpression6 = new IgbSortingExpression();
                sortingExpression6.Dir = SortingDirection.Asc;
                sortingExpression6.FieldName = "Price";
                sortingExpression6.IgnoreCase = true;
                sortingExpression1[4] = sortingExpression6;
                var sortingExpression7 = new IgbSortingExpression();
                sortingExpression7.Dir = SortingDirection.Asc;
                sortingExpression7.FieldName = "Units";
                sortingExpression7.IgnoreCase = true;
                sortingExpression1[5] = sortingExpression7;
                var sortingExpression8 = new IgbSortingExpression();
                sortingExpression8.Dir = SortingDirection.Asc;
                sortingExpression8.FieldName = "Delivered";
                sortingExpression8.IgnoreCase = true;
                sortingExpression1[6] = sortingExpression8;
                this._sortingExpression1 = sortingExpression1;
            }
            return this._sortingExpression1;
        }
    }
    private IgbColumn column1;
    private IgbColumnPipeArgs _columnPipeArgs1 = null;
    public IgbColumnPipeArgs ColumnPipeArgs1
    {
        get
        {
            if (this._columnPipeArgs1 == null)
            {
                var columnPipeArgs1 = new IgbColumnPipeArgs();
                columnPipeArgs1.CurrencyCode = "USD";
                columnPipeArgs1.DigitsInfo = "1.2-2";
                this._columnPipeArgs1 = columnPipeArgs1;
            }
            return this._columnPipeArgs1;
        }
    }

    private OrdersTreeData _ordersTreeData = null;
    public OrdersTreeData OrdersTreeData
    {
        get
        {
            if (_ordersTreeData == null)
            {
                _ordersTreeData = new OrdersTreeData();
            }
            return _ordersTreeData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class OrdersTreeDataItem
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

public class OrdersTreeData
    : List<OrdersTreeDataItem>
{
    public OrdersTreeData()
    {
        this.Add(new OrdersTreeDataItem() { ID = 1, ParentID = -1, Name = @"Order 1", Category = @"", OrderDate = @"2010-02-17", Units = 1844, UnitPrice = 3.73, Price = 6884.38, Delivered = true });
        this.Add(new OrdersTreeDataItem() { ID = 101, ParentID = 1, Name = @"Chocolate Chip Cookies", Category = @"Cookies", OrderDate = @"2010-02-17", Units = 834, UnitPrice = 3.59, Price = 2994.06, Delivered = true });
        this.Add(new OrdersTreeDataItem() { ID = 102, ParentID = 1, Name = @"Red Apples", Category = @"Fruit", OrderDate = @"2010-02-17", Units = 371, UnitPrice = 3.66, Price = 1357.86, Delivered = true });
        // ... 19 more items
    }
}
```


## Sorting through the API

You can sort any column or a combination of columns through the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) API using the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) [`Sort`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_Sort) method:

<!-- ComponentStart: TreeGrid -->

```razor
@code {
    this.grtreeGridid.SortAsync(new IgbSortingExpression[]
        {
            new IgbSortingExpression
            },
            new IgbSortingExpression
            {
                FieldName = "Price",
                Dir = SortingDirection.Desc
            }
        });
}
```

<!-- ComponentEnd: TreeGrid -->

> [!Note]
> Sorting is performed using our `DefaultSortingStrategy` algorithm. Any [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html) or `ISortingExpression` can use a custom implementation of the `ISortingStrategy` as a substitute algorithm. This is useful when custom sorting needs to be defined for complex template columns, or image columns, for example.

As with the filtering behavior, you can clear the sorting state by using the [`ClearSort`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_ClearSort) method:

```razor
@code {
    @*Removes the sorting state from the Category column*@
    this.treeGrid.ClearSortAsync("Category");

    @*Removes the sorting state from every column in the Grid*@
    this.treeGrid.ClearSortAsync("");
}
```

<!-- ComponentEnd: TreeGrid -->

> [!Note]
> The [`SortStrategy`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_SortStrategy) of the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) is of different type compared to the [`SortStrategy`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SortStrategy) of the [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html), since they work in different scopes and expose different parameters.

> [!Note]
> The sorting operation **DOES NOT** change the underlying data source of the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html).

## Initial Sorting State

It is possible to set the initial sorting state of the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) by passing an array of sorting expressions to the [`SortingExpressions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SortingExpressions) property of the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html).

<!-- ComponentStart: TreeGrid -->

```razor
@code {
    protected override void OnAfterRender(bool first)
    {
        if (first)
        {
            this.treeGrid.SortingExpressions = new IgbSortingExpression[]{
                new IgbSortingExpression()
                {
                    FieldName = "Category",
                    Dir = SortingDirection.Asc
                }};
        }
    }
}
```

<!-- ComponentEnd: TreeGrid -->

> [!Note]
> If values of type `string` are used by a column of [`DataType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DataType) `Date`, the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) won't parse them to `Date` objects and using [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) `Sorting` won't work as expected. If you want to use `string` objects, additional logic should be implemented on an application level, in order to parse the values to `Date` objects.

## Sorting Indicators Templates

The sorting indicator icon in the column header can be customized using a template. The following properties are available for templating the sorting indicator for any sorting state (ascending, descending, none):

- [`SortHeaderIconTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SortHeaderIconTemplate) – re-templates the sorting icon when no sorting is applied.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```razor
<IgbTreeGrid SortHeaderIconTemplate="SortDefaultTemplate"></IgbTreeGrid>

@code {
    public RenderFragment<IgbGridHeaderTemplateContext> SortDefaultTemplate = (ctx) =>
    {
        return @<IgbIcon Size="SizableComponentSize.Small" IconName="unfold_more" Collection="material"></IgbIcon>;
    };
}
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

- [`SortAscendingHeaderIconTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SortAscendingHeaderIconTemplate) – re-templates the sorting icon when the column is sorted in ascending order.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```razor
<IgbTreeGrid SortAscendingHeaderIconTemplate="SortAscendingTemplate"></IgbTreeGrid>

@code {
    public RenderFragment<IgbGridHeaderTemplateContext> SortAscendingTemplate = (ctx) =>
    {
        return @<IgbIcon Size="SizableComponentSize.Small" IconName="expand_less" Collection="material"></IgbIcon>;
    };
}
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

- [`SortDescendingHeaderIconTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SortDescendingHeaderIconTemplate) – re-templates the sorting icon when the column is sorted in descending order.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```razor
<IgbTreeGrid SortDescendingHeaderIconTemplate="SortDescendingTemplate"></IgbTreeGrid>

@code {
    public RenderFragment<IgbGridHeaderTemplateContext> SortDescendingTemplate = (ctx) =>
    {
        return @<IgbIcon Size="SizableComponentSize.Small" IconName="expand_more" Collection="material"></IgbIcon>;
    };
}
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```razor
<IgbTreeGrid class="grid">
</IgbTreeGrid>
```

Then set the related CSS properties to this class:

```css
.grid {
    --ig-grid-sorted-header-icon-color: #ffb06a;
    --ig-grid-sortable-header-icon-hover-color: black;
}
```

### Demo

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbTreeGrid
        AutoGenerate="false"
        Id="grid"
        Name="grid"
        @ref="grid"
        Data="OrdersTreeData"
        PrimaryKey="ID"
        ForeignKey="ParentID">
            <IgbColumn
            Field="ID"
            Header="Order ID"
            Groupable="true"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Name"
            Header="Name"
            DataType="GridColumnDataType.String"
            Groupable="true"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Category"
            Header="Category"
            DataType="GridColumnDataType.String"
            Groupable="true"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Header="Order Date"
            DataType="GridColumnDataType.Date"
            Groupable="true"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Price"
            DataType="GridColumnDataType.Currency"
            Groupable="true"
            Sortable="true"
            PipeArgs="ColumnPipeArgs1"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Units"
            Header="Units"
            DataType="GridColumnDataType.Number"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Delivered"
            Header="Units"
            DataType="GridColumnDataType.Boolean"
            Sortable="true">
            </IgbColumn>

        </IgbTreeGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;
        var column1 = this.column1;

    }

    private IgbTreeGrid grid;
    private IgbColumn column1;
    private IgbColumnPipeArgs _columnPipeArgs1 = null;
    public IgbColumnPipeArgs ColumnPipeArgs1
    {
        get
        {
            if (this._columnPipeArgs1 == null)
            {
                var columnPipeArgs1 = new IgbColumnPipeArgs();
                columnPipeArgs1.CurrencyCode = "USD";
                columnPipeArgs1.DigitsInfo = "1.2-2";
                this._columnPipeArgs1 = columnPipeArgs1;
            }
            return this._columnPipeArgs1;
        }
    }

    private OrdersTreeData _ordersTreeData = null;
    public OrdersTreeData OrdersTreeData
    {
        get
        {
            if (_ordersTreeData == null)
            {
                _ordersTreeData = new OrdersTreeData();
            }
            return _ordersTreeData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class OrdersTreeDataItem
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

public class OrdersTreeData
    : List<OrdersTreeDataItem>
{
    public OrdersTreeData()
    {
        this.Add(new OrdersTreeDataItem() { ID = 1, ParentID = -1, Name = @"Order 1", Category = @"", OrderDate = @"2010-02-17", Units = 1844, UnitPrice = 3.73, Price = 6884.38, Delivered = true });
        this.Add(new OrdersTreeDataItem() { ID = 101, ParentID = 1, Name = @"Chocolate Chip Cookies", Category = @"Cookies", OrderDate = @"2010-02-17", Units = 834, UnitPrice = 3.59, Price = 2994.06, Delivered = true });
        this.Add(new OrdersTreeDataItem() { ID = 102, ParentID = 1, Name = @"Red Apples", Category = @"Fruit", OrderDate = @"2010-02-17", Units = 371, UnitPrice = 3.66, Price = 1357.86, Delivered = true });
        // ... 19 more items
    }
}
```


## API References

- [`IgbSortingExpression`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSortingExpression.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
