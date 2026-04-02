---
title: Blazor Grid Group By | Group by multiple fields | Infragistics
_description: Configure group by that allows visualizing of data records in Blazor Material table, visualize the grouped data in separate and convenient column group.
_keywords: Blazor, Grid, Ignite UI for Blazor, group by, Infragistics
_license: commercial
mentionedTypes: ["Grid", "RowDirective", "GroupByRowSelectorTemplateDetails"]
namespace: Infragistics.Controls
_tocName: Group By
_premium: true
---

# Blazor Grid Group By

The Ignite UI for Blazor Group By behavior in Blazor IgbGrid creates grouped data rows based on the column values. The Group By in the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) allows for visualizing the groups in a hierarchical structure. The grouped data rows can be expanded or collapsed and the order of grouping may be changed through the UI or API. When Row Selection is enabled, a Group By row selector is rendered in the left-most area of the group row. In case the [`RowSelection`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowSelection) property is set to single, checkboxes are disabled and only serve as an indication for the group where selection is placed. If the [`RowSelection`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowSelection) property is set to multiple, clicking over the Group By row selector selects all records belonging to this group.

## Blazor Grid Group By Example

This example presents the grouping capabilities of a large amount of data. Dragging the column headers to the top (grouping area) allows users to see the data for the selected column in a hierarchical structure. They can do group by in multiple fields by dragging more column headers to the top. These grouping options come in handy when you have tables with numerous rows and columns where users want to present the data in a much faster and visually acceptable way.

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="InvoicesWorldData"
        Name="grid"
        @ref="grid"
        Id="grid"
        GroupingExpressions="GroupingExpression1"
        GroupRowTemplateScript="WebGridGroupByRowTemplate">
            <IgbColumn
            Field="OrderID"
            Hidden="true">
            </IgbColumn>

            <IgbColumn
            Field="ShipCountry"
            Header="Ship Country"
            Width="200px"
            Groupable="true">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Header="Order Date"
            DataType="GridColumnDataType.Date"
            Width="200px"
            Groupable="true">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode"
            Header="Postal Code"
            Width="200px"
            Groupable="true">
            </IgbColumn>

            <IgbColumn
            Field="Discontinued"
            Width="200px"
            DataType="GridColumnDataType.Boolean"
            Groupable="true"
            BodyTemplateScript="WebGridBooleanCellTemplate"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="ShipName"
            Header="Ship Name"
            Width="200px"
            Groupable="true">
            </IgbColumn>

            <IgbColumn
            Field="ShipCity"
            Header="Ship City"
            Width="200px"
            Groupable="true">
            </IgbColumn>

            <IgbColumn
            Field="ShipperName"
            Header="Shipper Name"
            Width="200px"
            Groupable="true">
            </IgbColumn>

            <IgbColumn
            Field="Salesperson"
            Header="Sales Person"
            Width="200px"
            Groupable="true">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Unit Price"
            Width="200px"
            Groupable="true">
            </IgbColumn>

            <IgbColumn
            Field="Quantity"
            Width="200px"
            Groupable="true">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;
        var column1 = this.column1;

    }

    private IgbGrid grid;
    private IgbGroupingExpression[] _groupingExpression1 = null;
    public IgbGroupingExpression[] GroupingExpression1
    {
        get
        {
            if (this._groupingExpression1 == null)
            {
                var groupingExpression1 = new IgbGroupingExpression[2];
                var groupingExpression2 = new IgbGroupingExpression();
                groupingExpression2.FieldName = "ShipCountry";
                groupingExpression2.IgnoreCase = false;
                groupingExpression2.Dir = SortingDirection.Asc;
                groupingExpression1[0] = groupingExpression2;
                var groupingExpression3 = new IgbGroupingExpression();
                groupingExpression3.FieldName = "ShipCity";
                groupingExpression3.IgnoreCase = false;
                groupingExpression3.Dir = SortingDirection.Asc;
                groupingExpression1[1] = groupingExpression3;
                this._groupingExpression1 = groupingExpression1;
            }
            return this._groupingExpression1;
        }
    }
    private IgbColumn column1;

    private InvoicesWorldData _invoicesWorldData = null;
    public InvoicesWorldData InvoicesWorldData
    {
        get
        {
            if (_invoicesWorldData == null)
            {
                _invoicesWorldData = new InvoicesWorldData();
            }
            return _invoicesWorldData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class InvoicesWorldDataItem
{
    public string ShipName { get; set; }
    public string ShipAddress { get; set; }
    public string ShipCity { get; set; }
    public string ShipRegion { get; set; }
    public string ShipPostalCode { get; set; }
    public string ShipCountry { get; set; }
    public string CustomerID { get; set; }
    public string CustomerName { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Region { get; set; }
    public double PostalCode { get; set; }
    public string Country { get; set; }
    public string Salesperson { get; set; }
    public double OrderID { get; set; }
    public string OrderDate { get; set; }
    public string ShipperName { get; set; }
    public double ProductID { get; set; }
    public string ProductName { get; set; }
    public double UnitPrice { get; set; }
    public double Quantity { get; set; }
    public bool Discontinued { get; set; }
    public double ExtendedPrice { get; set; }
    public double Freight { get; set; }
}

public class InvoicesWorldData
    : List<InvoicesWorldDataItem>
{
    public InvoicesWorldData()
    {
        this.Add(new InvoicesWorldDataItem() { ShipName = @"Alfred's Futterkiste", ShipAddress = @"Obere Str. 57", ShipCity = @"Berlin", ShipRegion = null, ShipPostalCode = @"12209", ShipCountry = @"Germany", CustomerID = @"ALFKI", CustomerName = @"Alfreds Futterkiste", Address = @"Obere Str. 57", City = @"Berlin", Region = null, PostalCode = 12209, Country = @"Germany", Salesperson = @"Margaret Peacock", OrderID = 10692, OrderDate = @"2016-11-22T22:00:00.000Z", ShipperName = @"United Package", ProductID = 63, ProductName = @"Vegie-spread", UnitPrice = 43.9, Quantity = 20, Discontinued = false, ExtendedPrice = 878, Freight = 61.02 });
        this.Add(new InvoicesWorldDataItem() { ShipName = @"Alfred's Futterkiste", ShipAddress = @"Obere Str. 57", ShipCity = @"Berlin", ShipRegion = null, ShipPostalCode = @"12209", ShipCountry = @"Germany", CustomerID = @"ALFKI", CustomerName = @"Alfreds Futterkiste", Address = @"Obere Str. 57", City = @"Berlin", Region = null, PostalCode = 12209, Country = @"Germany", Salesperson = @"Margaret Peacock", OrderID = 10702, OrderDate = @"2016-11-22T22:00:00.000Z", ShipperName = @"Speedy Express", ProductID = 3, ProductName = @"Aniseed Syrup", UnitPrice = 10, Quantity = 6, Discontinued = false, ExtendedPrice = 60, Freight = 23.94 });
        this.Add(new InvoicesWorldDataItem() { ShipName = @"Alfred's Futterkiste", ShipAddress = @"Obere Str. 57", ShipCity = @"Berlin", ShipRegion = null, ShipPostalCode = @"12209", ShipCountry = @"Germany", CustomerID = @"ALFKI", CustomerName = @"Alfreds Futterkiste", Address = @"Obere Str. 57", City = @"Berlin", Region = null, PostalCode = 12209, Country = @"Germany", Salesperson = @"Margaret Peacock", OrderID = 10702, OrderDate = @"2016-11-22T22:00:00.000Z", ShipperName = @"Speedy Express", ProductID = 76, ProductName = @"Lakkalikööri", UnitPrice = 18, Quantity = 15, Discontinued = false, ExtendedPrice = 270, Freight = 23.94 });
        // ... 319 more items
    }
}
```


## Initial Grouping State

It is possible to define initial grouping of the grid by assigning an array of expressions to the [`GroupingExpressions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html#IgniteUI_Blazor_Controls_IgbGrid_GroupingExpressions) property of the grid.

```razor
<IgbGrid AutoGenerate="true" Data="InvoicesData" @ref="grid" Id="grid" GroupingExpressions="GroupingExpression1"></IgbGrid>

@code {
    public IgbGroupingExpression[] GroupingExpression1 = new IgbGroupingExpression[2]
    {
        new IgbGroupingExpression(){ FieldName = "ShipCountry", Dir= SortingDirection.Asc },
        new IgbGroupingExpression() { FieldName = "ShipCity", Dir= SortingDirection.Asc  }
    };
}
```

Grouping expressions implement the `ISortingExpression` interface.

## Group By API

### Grouping API

Grouping is available through the UI and through a robust API exposed by the grid component. Developers can allow end-users to group the grid data by certain columns, by setting each column's `Groupable` property to `true`.

```razor
<IgbGrid AutoGenerate="false" Data="InvoicesData" @ref="grid" Id="grid" GroupingExpressions="GroupingExpression1" GroupRowTemplateScript="WebGridGroupByRowTemplate">
    <IgbColumn Field="OrderID" Hidden="true"></IgbColumn>
    <IgbColumn Field="ShipCountry" Header="Ship Country" Width="200px" Groupable="true"></IgbColumn>
    <IgbColumn Field="OrderDate" Header="Order Date" DataType="GridColumnDataType.Date" Width="200px" Groupable="true"></IgbColumn>
    <IgbColumn Field="PostalCode" Header="Postal Code" Width="200px" Groupable="true"></IgbColumn>
    <IgbColumn Field="Discontinued" Width="200px" DataType="GridColumnDataType.Boolean" Groupable="true" BodyTemplateScript="WebGridBooleanCellTemplate" Name="column1" @ref="column1"></IgbColumn>
    <IgbColumn Field="ShipName" Header="Ship Name" Width="200px" Groupable="true"></IgbColumn>
    <IgbColumn Field="ShipCity" Header="Ship City" Width="200px" Groupable="true"></IgbColumn>
    <IgbColumn Field="ShipperName" Header="Shipper Name"Width="200px"Groupable="true"></IgbColumn>
    <IgbColumn Field="Salesperson" Header="Sales Person" Width="200px" Groupable="true"></IgbColumn>
    <IgbColumn Field="UnitPrice" Header="Unit Price" Width="200px" Groupable="true"></IgbColumn>
    <IgbColumn Field="Quantity" Width="200px" Groupable="true"></IgbColumn>
</IgbGrid>
```

During runtime the expressions are gettable and settable from the `groupingExpressions` property. If you need to add or change an existing expression you may also use the [`GroupBy`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html#IgniteUI_Blazor_Controls_IgbGrid_GroupBy) method with either a single or an array of expressions.

```razor
@code {
    public IgbGrid grid;

    public IgbGroupingExpression[] GroupingExpression1 = new IgbGroupingExpression[2]
    {
        new IgbGroupingExpression(){ FieldName = "ShipCountry", Dir= SortingDirection.Asc },
        new IgbGroupingExpression() { FieldName = "ShipCity", Dir= SortingDirection.Asc  }
    };


    private void GroupGrid()
    {
        this.grid.GroupBy(GroupingExpression1);
    }
}
```

### Expand/Collapse API

In addition to grouping expressions you can also control the expansion states for group rows. They are stored in a separate property of the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) component [`GroupingExpansionState`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html#IgniteUI_Blazor_Controls_IgbGrid_GroupingExpansionState) which is a collection of [`IgbGroupByExpandState`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGroupByExpandState.html). Each expansion state is uniquely defined by the field name it is created for and the value it represents for each level of grouping, i.e. the identifier is a hierarchy array of [`IgbGroupByKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGroupByKey.html).

As with [`GroupingExpressions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html#IgniteUI_Blazor_Controls_IgbGrid_GroupingExpressions), setting a list of [`IgbGroupByExpandState`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGroupByExpandState.html) directly to the [`GroupingExpansionState`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html#IgniteUI_Blazor_Controls_IgbGrid_GroupingExpansionState) will change the expansion accordingly. Additionally [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) exposes a method [`ToggleGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html#IgniteUI_Blazor_Controls_IgbGrid_ToggleGroup) that toggles a group by the group record instance or via the [`Expanded`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRowDirective.html#IgniteUI_Blazor_Controls_IgbRowDirective_Expanded) property of the row.

```razor
<IgbGrid AutoGenerate="true" Data="InvoicesData" GroupingExpressions="GroupingExpression1" GroupingExpansionState=ExpansionState @ref="grid" Id="grid">
</IgbGrid>

@code {
    public IgbGroupingExpression[] GroupingExpression1 = new IgbGroupingExpression[2]
    {
        new IgbGroupingExpression(){ FieldName = "ShipCountry", Dir= SortingDirection.Asc },
        new IgbGroupingExpression() { FieldName = "ShipCity", Dir= SortingDirection.Asc  }
    };
    public IgbGroupByExpandState[] state = new IgbGroupByExpandState[1]
    {
        new IgbGroupByExpandState(){ Hierarchy = new IgbGroupByKey[1]{ new IgbGroupByKey() { FieldName="ShipCountry", Value = "USA" } },  Expanded = false }
    };
}
```

Groups can be created expanded (**default**) or collapsed and the expansion states would generally only contain the state opposite to the default behavior. You can control whether groups should be created expanded or not through the [`GroupsExpanded`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html#IgniteUI_Blazor_Controls_IgbGrid_GroupsExpanded) property.

### Select/Deselect All Rows in a Group API

Selecting/Deselecting all rows in a group is available through the [`SelectRowsInGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html#IgniteUI_Blazor_Controls_IgbGrid_SelectRowsInGroup) and [`DeselectRowsInGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html#IgniteUI_Blazor_Controls_IgbGrid_DeselectRowsInGroup) API methods.

The code snippet below can be used to select all rows within a group using the group record instance [`SelectRowsInGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html#IgniteUI_Blazor_Controls_IgbGrid_SelectRowsInGroup) method. Additionally, the second parameter of this method is a boolean property through which you may choose whether the previous row selection will be cleared or not. The previous selection is preserved by default.

```razor
var row = await this.grid.GetRowByIndexAsync(0);
this.grid.SelectRowsInGroup(row.GroupRow, true);
```

If you need to deselect all rows within a group programmatically, you can use the [`DeselectRowsInGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html#IgniteUI_Blazor_Controls_IgbGrid_DeselectRowsInGroup) method.

```razor
var row = await this.grid.GetRowByIndexAsync(0);
this.grid.DeselectRowsInGroup(row.GroupRow);
```

## Templating

### Group Row Templates

The group row except for the expand/collapse UI is fully templatable. By default it renders a grouping icon and displays the field name and value it represents. The context to render the template against is of type [`IgbGroupByRecord`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGroupByRecord.html).

As an example, the following template would make the group rows summary more verbose:

```razor
<IgbGrid AutoGenerate="true" Data="InvoicesData" @ref="grid" Id="grid" GroupRowTemplateScript="WebGridGroupByRowTemplate"></IgbGrid>


//In JavaScript:
igRegisterScript("WebGridGroupByRowTemplate", (ctx) => {
    var html = window.igTemplating.html;
    var groupRow = ctx.implicit;
    return html`<span>Total items with value: ${groupRow.value} are ${groupRow.records.length}</span>`;
}, false);
```

### Group Row Selector Templates

As mentioned above the group row except for the expand/collapse UI is fully templatable. To create a custom Group By row selector template use [`GroupByRowSelectorTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html#IgniteUI_Blazor_Controls_IgbGrid_GroupByRowSelectorTemplate). From the template, you can access the implicitly provided context variable, with properties that give you information about the Group By row's state.

The [`SelectedCount`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGroupByRowSelectorTemplateDetails.html#IgniteUI_Blazor_Controls_IgbGroupByRowSelectorTemplateDetails_SelectedCount) property shows how many of the group records are currently selected while [`TotalCount`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGroupByRowSelectorTemplateDetails.html#IgniteUI_Blazor_Controls_IgbGroupByRowSelectorTemplateDetails_TotalCount) shows how many records belong to the group.

```razor
<IgbGrid GroupByRowSelectorTemplateScript="GroupByRowSelectorTemplate"></IgbGrid>
//In Javascript
igRegisterScript("GroupByRowSelectorTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html` ${ctx.implicit.selectedCount} / ${ctx.implicit.totalCount} `;
}, false);
```

The [`GroupRow`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGroupByRowSelectorTemplateDetails.html#IgniteUI_Blazor_Controls_IgbGroupByRowSelectorTemplateDetails_GroupRow) property returns a reference to the group row.

```razor
<IgbGrid GroupByRowSelectorTemplateScript="GroupByRowSelectorTemplate"></IgbGrid>
//In Javascript
igRegisterScript("GroupByRowSelectorTemplate", (ctx) => {
    var html = window.igTemplating.html;
    var groupRow = ctx.implicit.groupRow;
    return html`<div onclick="handleGroupByRowSelectorClick()">Handle groupRow</div> `;
}, false);
```

The [`SelectedCount`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGroupByRowSelectorTemplateDetails.html#IgniteUI_Blazor_Controls_IgbGroupByRowSelectorTemplateDetails_SelectedCount) and [`TotalCount`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGroupByRowSelectorTemplateDetails.html#IgniteUI_Blazor_Controls_IgbGroupByRowSelectorTemplateDetails_TotalCount) properties can be used to determine if the Group By row selector should be checked or indeterminate (partially selected).

## Blazor Grid Group By With Paging

Group rows participate in the paging process along with data rows. They count towards the page size for each page. Collapsed rows are not included in the paging process. Any expand or collapse operation forces Paging to recalculate the page count and adjust the page index if necessary.
Groups that span multiple pages are split between them. The group row is visible only on the page it starts on and is not repeated on subsequent pages. Summary information for group rows is calculated based on the whole group and is unaffected by Paging.

### Blazor Group By With Paging Example

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Name="grid"
        @ref="grid"
        Id="grid"
        Data="InvoicesWorldData"
        RowSelection="GridSelectionMode.Multiple"
        GroupingExpressions="GroupingExpression1"
        GroupRowTemplateScript="WebGridGroupByRowTemplate">
            <IgbPaginator
            PerPage="10">
            </IgbPaginator>

            <IgbColumn
            Field="ShipCountry"
            Header="Ship Country"
            Width="200px"
            Groupable="true">
            </IgbColumn>

            <IgbColumn
            Field="ShipCity"
            Header="Ship City"
            Width="250px"
            Groupable="true">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Unit Price"
            Width="150px"
            DataType="GridColumnDataType.Number"
            Groupable="true">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;

    }

    private IgbGrid grid;
    private IgbGroupingExpression[] _groupingExpression1 = null;
    public IgbGroupingExpression[] GroupingExpression1
    {
        get
        {
            if (this._groupingExpression1 == null)
            {
                var groupingExpression1 = new IgbGroupingExpression[1];
                var groupingExpression2 = new IgbGroupingExpression();
                groupingExpression2.Dir = SortingDirection.Asc;
                groupingExpression2.FieldName = "ShipCountry";
                groupingExpression2.IgnoreCase = false;
                groupingExpression1[0] = groupingExpression2;
                this._groupingExpression1 = groupingExpression1;
            }
            return this._groupingExpression1;
        }
    }

    private InvoicesWorldData _invoicesWorldData = null;
    public InvoicesWorldData InvoicesWorldData
    {
        get
        {
            if (_invoicesWorldData == null)
            {
                _invoicesWorldData = new InvoicesWorldData();
            }
            return _invoicesWorldData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class InvoicesWorldDataItem
{
    public string ShipName { get; set; }
    public string ShipAddress { get; set; }
    public string ShipCity { get; set; }
    public string ShipRegion { get; set; }
    public string ShipPostalCode { get; set; }
    public string ShipCountry { get; set; }
    public string CustomerID { get; set; }
    public string CustomerName { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Region { get; set; }
    public double PostalCode { get; set; }
    public string Country { get; set; }
    public string Salesperson { get; set; }
    public double OrderID { get; set; }
    public string OrderDate { get; set; }
    public string ShipperName { get; set; }
    public double ProductID { get; set; }
    public string ProductName { get; set; }
    public double UnitPrice { get; set; }
    public double Quantity { get; set; }
    public bool Discontinued { get; set; }
    public double ExtendedPrice { get; set; }
    public double Freight { get; set; }
}

public class InvoicesWorldData
    : List<InvoicesWorldDataItem>
{
    public InvoicesWorldData()
    {
        this.Add(new InvoicesWorldDataItem() { ShipName = @"Alfred's Futterkiste", ShipAddress = @"Obere Str. 57", ShipCity = @"Berlin", ShipRegion = null, ShipPostalCode = @"12209", ShipCountry = @"Germany", CustomerID = @"ALFKI", CustomerName = @"Alfreds Futterkiste", Address = @"Obere Str. 57", City = @"Berlin", Region = null, PostalCode = 12209, Country = @"Germany", Salesperson = @"Margaret Peacock", OrderID = 10692, OrderDate = @"2016-11-22T22:00:00.000Z", ShipperName = @"United Package", ProductID = 63, ProductName = @"Vegie-spread", UnitPrice = 43.9, Quantity = 20, Discontinued = false, ExtendedPrice = 878, Freight = 61.02 });
        this.Add(new InvoicesWorldDataItem() { ShipName = @"Alfred's Futterkiste", ShipAddress = @"Obere Str. 57", ShipCity = @"Berlin", ShipRegion = null, ShipPostalCode = @"12209", ShipCountry = @"Germany", CustomerID = @"ALFKI", CustomerName = @"Alfreds Futterkiste", Address = @"Obere Str. 57", City = @"Berlin", Region = null, PostalCode = 12209, Country = @"Germany", Salesperson = @"Margaret Peacock", OrderID = 10702, OrderDate = @"2016-11-22T22:00:00.000Z", ShipperName = @"Speedy Express", ProductID = 3, ProductName = @"Aniseed Syrup", UnitPrice = 10, Quantity = 6, Discontinued = false, ExtendedPrice = 60, Freight = 23.94 });
        this.Add(new InvoicesWorldDataItem() { ShipName = @"Alfred's Futterkiste", ShipAddress = @"Obere Str. 57", ShipCity = @"Berlin", ShipRegion = null, ShipPostalCode = @"12209", ShipCountry = @"Germany", CustomerID = @"ALFKI", CustomerName = @"Alfreds Futterkiste", Address = @"Obere Str. 57", City = @"Berlin", Region = null, PostalCode = 12209, Country = @"Germany", Salesperson = @"Margaret Peacock", OrderID = 10702, OrderDate = @"2016-11-22T22:00:00.000Z", ShipperName = @"Speedy Express", ProductID = 76, ProductName = @"Lakkalikööri", UnitPrice = 18, Quantity = 15, Discontinued = false, ExtendedPrice = 270, Freight = 23.94 });
        // ... 319 more items
    }
}
```


## Group By With Summaries

Integration between Group By and Summaries is described in the [Summaries](summaries.md#summaries-with-group-by) topic.

## Keyboard Navigation

The grouping UI supports the following keyboard interactions:

- For group rows (focus should be on the row or the expand/collapse cell)
  - <kbd>ALT</kbd> + <kbd>RIGHT</kbd> - Expands the group
  - <kbd>ALT</kbd> + <kbd>LEFT</kbd> - Collapses the group
  - <kbd>SPACE</kbd> - selects all rows in the group, if <kbd>rowSelection</kbd> property is set to multiple

- For group [`IgbChip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbChip.html) components in the group by area (focus should be on the chip)
  - <kbd>SHIFT</kbd> + <kbd>LEFT</kbd> - moves the focused chip left, changing the grouping order, if possible
  - <kbd>SHIFT</kbd> + <kbd>RIGHT</kbd> - moves the focused chip right, changing the grouping order, if possible
  - <kbd>SPACE</kbd> - changes the sorting direction
  - <kbd>DELETE</kbd> - ungroups the field
  - The separate elements of the chip are also focusable and can be interacted with using the <kbd>ENTER</kbd> key.

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```razor
<IgbGrid Class="grid"></IgbGrid>
```

Then set the related CSS properties for that class:

```css
.grid {
    --ig-grid-group-row-background: #969799;
    --ig-grid-group-row-selected-background: #969799;
    --ig-grid-group-label-column-name-text: #f8f8f8;
    --ig-grid-group-label-text: #f8f8f8;
    --ig-grid-group-count-text-color: #222;
    --ig-grid-expand-icon-color: #f8f8f8;
    --ig-grid-expand-icon-hover-color: #f8f8f8;
}
```

### Demo

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Name="grid"
        @ref="grid"
        Id="grid"
        Data="InvoicesData"
        GroupingExpressions="GroupingExpression1">
            <IgbColumn
            Field="OrderID"
            Header="Order ID"
            Hidden="true">
            </IgbColumn>

            <IgbColumn
            Field="ShipCountry"
            Header="Ship Country"
            Width="200px"
            Groupable="true">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Header="Order Date"
            Width="200px"
            Groupable="true">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode"
            Header="Postal Code"
            Width="200px"
            Groupable="true">
            </IgbColumn>

            <IgbColumn
            Field="Discontinued"
            Header="Discontinued"
            Width="200px"
            Groupable="true"
            BodyTemplateScript="WebGridBooleanCellTemplate"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="ShipName"
            Header="Ship Name"
            Width="250px"
            Groupable="true">
            </IgbColumn>

            <IgbColumn
            Field="ShipCity"
            Header="Ship City"
            Width="250px"
            Groupable="true">
            </IgbColumn>

            <IgbColumn
            Field="ShipperName"
            Header="Shipper Name"
            Width="250px"
            Groupable="true">
            </IgbColumn>

            <IgbColumn
            Field="Salesperson"
            Header="Sales Person"
            Width="250px"
            Groupable="true">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Unit Price"
            Width="150px"
            DataType="GridColumnDataType.Currency"
            PipeArgs="ColumnPipeArgs1"
            Groupable="true"
            Name="column2"
            @ref="column2">
            </IgbColumn>

            <IgbColumn
            Field="Quantity"
            Header="Quantity"
            Width="150px"
            DataType="GridColumnDataType.Number"
            Groupable="true">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;
        var column1 = this.column1;
        var column2 = this.column2;

    }

    private IgbGrid grid;
    private IgbGroupingExpression[] _groupingExpression1 = null;
    public IgbGroupingExpression[] GroupingExpression1
    {
        get
        {
            if (this._groupingExpression1 == null)
            {
                var groupingExpression1 = new IgbGroupingExpression[2];
                var groupingExpression2 = new IgbGroupingExpression();
                groupingExpression2.Dir = SortingDirection.Asc;
                groupingExpression2.FieldName = "ShipCountry";
                groupingExpression2.IgnoreCase = false;
                groupingExpression1[0] = groupingExpression2;
                var groupingExpression3 = new IgbGroupingExpression();
                groupingExpression3.Dir = SortingDirection.Asc;
                groupingExpression3.FieldName = "ShipCity";
                groupingExpression3.IgnoreCase = false;
                groupingExpression1[1] = groupingExpression3;
                this._groupingExpression1 = groupingExpression1;
            }
            return this._groupingExpression1;
        }
    }
    private IgbColumn column1;
    private IgbColumn column2;
    private IgbColumnPipeArgs _columnPipeArgs1 = null;
    public IgbColumnPipeArgs ColumnPipeArgs1
    {
        get
        {
            if (this._columnPipeArgs1 == null)
            {
                var columnPipeArgs1 = new IgbColumnPipeArgs();
                columnPipeArgs1.DigitsInfo = "1.2-2";
                this._columnPipeArgs1 = columnPipeArgs1;
            }
            return this._columnPipeArgs1;
        }
    }

    private InvoicesData _invoicesData = null;
    public InvoicesData InvoicesData
    {
        get
        {
            if (_invoicesData == null)
            {
                _invoicesData = new InvoicesData();
            }
            return _invoicesData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class InvoicesDataItem
{
    public string ShipName { get; set; }
    public string ShipAddress { get; set; }
    public string ShipCity { get; set; }
    public double ShipPostalCode { get; set; }
    public string ShipCountry { get; set; }
    public string ShipRegion { get; set; }
    public string ShipperName { get; set; }
    public double CustomerID { get; set; }
    public string CustomerName { get; set; }
    public string CustomerFirstName { get; set; }
    public string CustomerLastName { get; set; }
    public string CustomerAddress { get; set; }
    public string Salesperson { get; set; }
    public double OrderID { get; set; }
    public string OrderDate { get; set; }
    public double ProductID { get; set; }
    public string ProductName { get; set; }
    public double UnitPrice { get; set; }
    public double Quantity { get; set; }
    public double ExtendedPrice { get; set; }
    public double Freight { get; set; }
    public bool Discontinued { get; set; }
    public string Region { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Country { get; set; }
    public double PostalCode { get; set; }
}

public class InvoicesData
    : List<InvoicesDataItem>
{
    public InvoicesData()
    {
        this.Add(new InvoicesDataItem() { ShipName = @"Jefferson Home", ShipAddress = @"124 Wall Street", ShipCity = @"Miami", ShipPostalCode = 60098, ShipCountry = @"USA", ShipRegion = @"South East", ShipperName = @"Federal Shipping", CustomerID = 1000, CustomerName = @"Martin Jefferson", CustomerFirstName = @"Martin", CustomerLastName = @"Jefferson", CustomerAddress = @"124 Wall Street, Miami, USA, 60098", Salesperson = @"Nancy Jefferson", OrderID = 1931, OrderDate = @"3/14/2022", ProductID = 189, ProductName = @"IPad", UnitPrice = 16150.61, Quantity = 3, ExtendedPrice = 48451.83, Freight = 980.61, Discontinued = false, Region = @"South East", Address = @"124 Wall Street", City = @"Miami", Country = @"USA", PostalCode = 60098 });
        this.Add(new InvoicesDataItem() { ShipName = @"Black Home", ShipAddress = @"162 Main Street", ShipCity = @"Miami", ShipPostalCode = 80193, ShipCountry = @"USA", ShipRegion = @"West", ShipperName = @"United Package", CustomerID = 1001, CustomerName = @"Anna Black", CustomerFirstName = @"Anna", CustomerLastName = @"Black", CustomerAddress = @"162 Main Street, Miami, USA, 80193", Salesperson = @"Anna Smith", OrderID = 1163, OrderDate = @"5/22/2022", ProductID = 138, ProductName = @"Mac Book Pro", UnitPrice = 18520.59, Quantity = 4, ExtendedPrice = 74082.36, Freight = 850.59, Discontinued = false, Region = @"West", Address = @"162 Main Street", City = @"Miami", Country = @"USA", PostalCode = 80193 });
        this.Add(new InvoicesDataItem() { ShipName = @"Watson Townhouse", ShipAddress = @"164 Wall Street", ShipCity = @"Miami", ShipPostalCode = 50111, ShipCountry = @"USA", ShipRegion = @"West", ShipperName = @"United Package", CustomerID = 1002, CustomerName = @"Max Watson", CustomerFirstName = @"Max", CustomerLastName = @"Watson", CustomerAddress = @"164 Wall Street, Miami, USA, 50111", Salesperson = @"Martin Watson", OrderID = 1230, OrderDate = @"2/9/2022", ProductID = 118, ProductName = @"Mac Book Air", UnitPrice = 25310.39, Quantity = 3, ExtendedPrice = 75931.17, Freight = 210.39, Discontinued = false, Region = @"West", Address = @"164 Wall Street", City = @"Miami", Country = @"USA", PostalCode = 50111 });
        // ... 496 more items
    }
}
```


## Known Limitations

|Limitation|Description|
|--- |--- |
|Maximum amount of grouped columns is 10. | If more than 10 columns are grouped an error is thrown.

## API References

- [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)
- [`IgbGroupByRecord`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGroupByRecord.html)
- `ISortingExpression`
- [`Column`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGroupByRecord.html#IgniteUI_Blazor_Controls_IgbGroupByRecord_Column)
- `IGroupByExpandState`
- [`IgbChip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbChip.html)

## Additional Resources

- [Grid overview](../data-grid.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Column Moving](column-moving.md)
- [Summaries](summaries.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
