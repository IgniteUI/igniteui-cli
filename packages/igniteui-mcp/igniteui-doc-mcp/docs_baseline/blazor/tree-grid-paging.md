---
title: Blazor Tree Grid Paging - Ignite UI for Blazor
_description: Configure Blazor pagination and create custom pages in the Blazor table by Ignite UI, get data for the requested pages with variety of events.
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
_keywords: Paging, Blazor, Tree Grid, IgbTreeGrid, Ignite UI for Blazor, Infragistics
_license: commercial
namespace: Infragistics.Controls
_canonicalLink: grids/grid/paging
_tocName: Paging
_premium: true
---

# Blazor Tree Grid Pagination Overview

The Ignite UI for Blazor Pagination feature in Blazor Tree Grid is used to split a large set of data into a sequence of pages that have similar content. React grid pagination improves user experience and data interaction. [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) pagination is configurable via a separate component projected in the grid tree by defining a [`IgbPaginator`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPaginator.html)  tag, similar to adding of a column. As in any Blazor table, the pagination in the Blazor Tree Grid supports template for custom pages.

## Blazor Tree Grid Pagination Example

The following example represents [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) pagination and exposes the options usage of items per page and how paging can be enabled. The user can also quickly navigate through the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) pages via "Go to last page" and "Go to first page" buttons.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbTreeGrid
        AutoGenerate="false"
        Data="OrdersTreeData"
        Name="treeGrid"
        @ref="treeGrid"
        Id="treeGrid"
        PrimaryKey="ID"
        ForeignKey="ParentID">
            <IgbPaginator
            PerPage="10">
            </IgbPaginator>

            <IgbColumn
            Field="ID"
            Header="Order ID">
            </IgbColumn>

            <IgbColumn
            Field="Name"
            Header="Order Product">
            </IgbColumn>

            <IgbColumn
            Field="Category"
            Header="Category">
            </IgbColumn>

            <IgbColumn
            Field="Units"
            Header="Units"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Unit Price"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="Price"
            Header="Price"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Header="Order Date"
            DataType="GridColumnDataType.Date">
            </IgbColumn>

            <IgbColumn
            Field="Delivered"
            Header="Delivered"
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

```css
.gridSize {
    --ig-size: var(--ig-size-small);
}
```

```razor
<IgbTreeGrid @ref=grid Class="gridSize" Width="100%" Height="500px" Data=Data>
    <IgbPaginator PerPage="10"></IgbPaginator>
</IgbTreeGrid>
```

## Usage

The [`IgbPaginator`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPaginator.html) component is used along with the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) component in the example below, but you can use it with any other component in case paging functionality is needed.

<!-- ComponentStart: Grid, TreeGrid -->

```razor
<IgbTreeGrid @ref=grid Data=Data className="gridSize">
    <IgbPaginator Page="grid.Page" TotalRecords="grid.TotalRecords" PerPage="10">
    </IgbPaginator>
</IgbTreeGrid>
```

<!-- ComponentEnd: Grid, TreeGrid -->

### Paginator Component Demo

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="options vertical">
        <IgbPropertyEditorPanel
        Name="PropertyEditor"
        @ref="propertyEditor"

        DescriptionType="WebTreeGrid"
        IsHorizontal="true"
        IsWrappingEnabled="true">
            <IgbPropertyEditorPropertyDescription
            Name="SizeEditor"
            @ref="sizeEditor"
            Label="Grid Size:"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "Small", "Medium", "Large" })"
            DropDownValues="@(new string[] { "Small", "Medium", "Large" })"
            ChangedScript="WebTreeGridSetGridSize">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="container vertical fill">
        <IgbTreeGrid
        AutoGenerate="false"
        Data="OrdersTreeData"
        Name="treeGrid"
        @ref="treeGrid"
        Id="treeGrid"
        PrimaryKey="ID"
        ForeignKey="ParentID">
            <IgbPaginator
            Name="paginator"
            @ref="paginator"
            PerPage="10"
            ResourceStrings="PaginatorResourceStrings1">
            </IgbPaginator>

            <IgbColumn
            Field="ID"
            Header="Order ID">
            </IgbColumn>

            <IgbColumn
            Field="Name"
            Header="Order Product">
            </IgbColumn>

            <IgbColumn
            Field="Category"
            Header="Category">
            </IgbColumn>

            <IgbColumn
            Field="Units"
            Header="Units"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Unit Price"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="Price"
            Header="Price"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Header="Order Date"
            DataType="GridColumnDataType.Date">
            </IgbColumn>

            <IgbColumn
            Field="Delivered"
            Header="Delivered"
            DataType="GridColumnDataType.Boolean">
            </IgbColumn>

        </IgbTreeGrid>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditor = this.propertyEditor;
        var sizeEditor = this.sizeEditor;
        var treeGrid = this.treeGrid;
        var paginator = this.paginator;

        this.BindElements = () => {
            propertyEditor.Target = this.treeGrid;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditor;
    private IgbPropertyEditorPropertyDescription sizeEditor;
    private IgbTreeGrid treeGrid;
    private IgbPaginator paginator;
    private IgbPaginatorResourceStrings _paginatorResourceStrings1 = null;
    public IgbPaginatorResourceStrings PaginatorResourceStrings1
    {
        get
        {
            if (this._paginatorResourceStrings1 == null)
            {
                var paginatorResourceStrings1 = new IgbPaginatorResourceStrings();
                paginatorResourceStrings1.Igx_paginator_label = "Records per page";
                this._paginatorResourceStrings1 = paginatorResourceStrings1;
            }
            return this._paginatorResourceStrings1;
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

<div class="divider--half"></div>

## API References

- [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html)
- [`IgbPaginator`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPaginator.html)

## Additional Resources

<!-- ComponentStart: Grid, TreeGrid -->

<!-- * [Paginator](../paginator.md) -->

- [Virtualization and Performance](virtualization.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

<!-- ComponentEnd: Grid, TreeGrid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
