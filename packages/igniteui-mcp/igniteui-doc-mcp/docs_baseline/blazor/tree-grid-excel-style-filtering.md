---
title: Blazor Tree Grid Excel Style Filtering - Ignite UI for Blazor
_description: Learn how to configure Excel filtering in Blazor Tree Grid. You can enable/disable various options and customize the Excel style filter menu the way you want.
_keywords: excel like filter, Blazor, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_tocName: Excel Style Filtering
_premium: true
---

# Excel Filtering in Blazor Tree Grid

The Blazor Tree Grid exposes an Excel-style filtering feature that provides an Excel-like filtering UI. It simplifies the process of working with large datasets. The main idea is to help them filter the data that is most relevant, while eliminating irrelevant entries.

## Blazor Tree Grid Excel Style Filtering Example

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="options vertical">
        <IgbPropertyEditorPanel
        Name="PropertyEditor"
        @ref="propertyEditor"

        DescriptionType="WebGrid"
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
        Id="treeGrid"
        Name="treeGrid"
        @ref="treeGrid"
        Data="FoodsData"
        PrimaryKey="ID"
        ForeignKey="ParentID"
        Moving="true"
        AllowFiltering="true"
        FilterMode="FilterMode.ExcelStyleFilter">
            <IgbGridToolbar
            >
                <IgbGridToolbarActions
                >
                    <IgbGridToolbarHiding
                    >
                    </IgbGridToolbarHiding>

                    <IgbGridToolbarPinning
                    >
                    </IgbGridToolbarPinning>

                </IgbGridToolbarActions>

            </IgbGridToolbar>

            <IgbColumn
            Field="ID"
            Header="ID"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Name"
            Header="Product Name"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Unit Price"
            Sortable="true"
            DataType="GridColumnDataType.Currency">
            </IgbColumn>

            <IgbColumn
            Field="AddedDate"
            Header="Added Date"
            Sortable="true"
            DataType="GridColumnDataType.Date">
            </IgbColumn>

            <IgbColumn
            Field="Discontinued"
            DataType="GridColumnDataType.Boolean"
            BodyTemplateScript="WebGridBooleanCellTemplate"
            Name="column1"
            @ref="column1">
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
        var column1 = this.column1;

        this.BindElements = () => {
            propertyEditor.Target = this.treeGrid;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditor;
    private IgbPropertyEditorPropertyDescription sizeEditor;
    private IgbTreeGrid treeGrid;
    private IgbColumn column1;

    private FoodsData _foodsData = null;
    public FoodsData FoodsData
    {
        get
        {
            if (_foodsData == null)
            {
                _foodsData = new FoodsData();
            }
            return _foodsData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class FoodsDataItem
{
    public double ID { get; set; }
    public double ParentID { get; set; }
    public string Name { get; set; }
    public double UnitPrice { get; set; }
    public string AddedDate { get; set; }
    public bool Discontinued { get; set; }
}

public class FoodsData
    : List<FoodsDataItem>
{
    public FoodsData()
    {
        this.Add(new FoodsDataItem() { ID = 1, ParentID = -1, Name = @"Foods", UnitPrice = 0, AddedDate = @"2009-06-19", Discontinued = false });
        this.Add(new FoodsDataItem() { ID = 101, ParentID = 1, Name = @"Chef Antons Gumbo Mix", UnitPrice = 21.35, AddedDate = @"2011-11-11", Discontinued = true });
        this.Add(new FoodsDataItem() { ID = 102, ParentID = 1, Name = @"Grandmas Boysenberry Spread", UnitPrice = 25, AddedDate = @"2017-12-17", Discontinued = false });
        // ... 20 more items
    }
}
```


## Usage

To turn on the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) component's Excel-style filtering, two inputs should be set. The [`AllowFiltering`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_AllowFiltering) should be set to **true** and the [`FilterMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FilterMode) should be set to `ExcelStyleFilter` value.

```razor
<IgbTreeGrid AllowFiltering="true" FilterMode="FilterMode.ExcelStyleFilter" >
</IgbTreeGrid>
```

## Interactions

In order to open the filter menu for a particular column, the Blazor filter icon in the header should be clicked. Additionally, you can use the <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>L</kbd> combination on a selected header. If the column can be sorted, pinned, moved, selected or hidden along with the filtering functionality, there will be buttons available for the features that are turned on.

If no filter is applied, all the items in the list will be selected. They can be filtered from the input above the list. In order to filter the data, you can select/deselect the items in the list and either click the Apply button, or press <kbd>ENTER</kbd>. The filtering applied through the list items creates filter expressions with `equals` operator and the logic operator between the expressions is `OR`.

If you type something in the search box and apply the filter, only the items that match the search criteria will be selected. If you want to add items to the currently filtered ones, however, you should select the option **Add current selection to filter**.

If you want to clear the filter, you can check the **Select All** option and then click the Apply button.

To apply a filter with different expressions, you can click the **Text filter**, which will open a sub menu with all available filter operators for the particular column. Selecting one of them will open the custom filter dialog, where you can add as many expressions as you want with different filter and logic operators. There is also a clear button, which can clear the filter.

## Configure Menu Features

Sorting, pinning and hiding features can be removed from the filter menu using the corresponding inputs: [`Sortable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Sortable), [`Selected`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Selected), [`DisablePinning`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DisablePinning), [`DisableHiding`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DisableHiding).

```razor
<IgbTreeGrid AutoGenerate="false" Data="FoodsData" PrimaryKey="ID" ForeignKey="ParentID" Moving="true" AllowFiltering="true" FilterMode="FilterMode.ExcelStyleFilter">
    <IgbColumn Field="ID" Header="ID">
    </IgbColumn>
    <IgbColumn Field="Name" Header="Product Name" Sortable="true">
    </IgbColumn>
    <IgbColumn Field="UnitPrice" Header="Unit Price" Sortable="false" DataType="GridColumnDataType.Number" DisablePinning="true" DisableHiding="true">
    </IgbColumn>
    <IgbColumn Field="AddedDate" Header="Added Date" Sortable="false" DataType="GridColumnDataType.Date">
    </IgbColumn>
    <IgbColumn Field="Discontinued" DataType="GridColumnDataType.Boolean" BodyTemplateScript="WebGridBooleanCellTemplate" Sortable="true" >
    </IgbColumn>
</IgbTreeGrid>
```

In the sample below 'Product Name' and 'Discontinued' columns have all three features enabled, 'Unit Price' have all three disabled, 'Added Date' has only pinning and hiding.

<!-- ComponentEnd: TreeGrid -->

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbTreeGrid
        AutoGenerate="false"
        Name="grid"
        @ref="grid"
        Data="FoodsData"
        PrimaryKey="ID"
        ForeignKey="ParentID"
        Moving="true"
        AllowFiltering="true"
        FilterMode="FilterMode.ExcelStyleFilter">
            <IgbGridToolbar
            >
                <IgbGridToolbarActions
                >
                    <IgbGridToolbarHiding
                    >
                    </IgbGridToolbarHiding>

                    <IgbGridToolbarPinning
                    >
                    </IgbGridToolbarPinning>

                </IgbGridToolbarActions>

            </IgbGridToolbar>

            <IgbColumn
            Field="ID"
            Header="ID">
            </IgbColumn>

            <IgbColumn
            Field="Name"
            Header="Product Name"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Unit Price"
            Sortable="false"
            DataType="GridColumnDataType.Number"
            DisablePinning="true"
            DisableHiding="true">
            </IgbColumn>

            <IgbColumn
            Field="AddedDate"
            Header="Added Date"
            Sortable="false"
            DataType="GridColumnDataType.Date">
            </IgbColumn>

            <IgbColumn
            Field="Discontinued"
            DataType="GridColumnDataType.Boolean"
            BodyTemplateScript="WebGridBooleanCellTemplate"
            Sortable="true"
            Name="column1"
            @ref="column1">
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

    private FoodsData _foodsData = null;
    public FoodsData FoodsData
    {
        get
        {
            if (_foodsData == null)
            {
                _foodsData = new FoodsData();
            }
            return _foodsData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class FoodsDataItem
{
    public double ID { get; set; }
    public double ParentID { get; set; }
    public string Name { get; set; }
    public double UnitPrice { get; set; }
    public string AddedDate { get; set; }
    public bool Discontinued { get; set; }
}

public class FoodsData
    : List<FoodsDataItem>
{
    public FoodsData()
    {
        this.Add(new FoodsDataItem() { ID = 1, ParentID = -1, Name = @"Foods", UnitPrice = 0, AddedDate = @"2009-06-19", Discontinued = false });
        this.Add(new FoodsDataItem() { ID = 101, ParentID = 1, Name = @"Chef Antons Gumbo Mix", UnitPrice = 21.35, AddedDate = @"2011-11-11", Discontinued = true });
        this.Add(new FoodsDataItem() { ID = 102, ParentID = 1, Name = @"Grandmas Boysenberry Spread", UnitPrice = 25, AddedDate = @"2017-12-17", Discontinued = false });
        // ... 20 more items
    }
}
```


## Templates

If you want to further customize the Excel style filter menu, you can use the [`ExcelStyleHeaderIconTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_ExcelStyleHeaderIconTemplate) property to define a custom template for the header icon of the menu.

The following code demonstrates how to customize the Excel style filter menu using the [`ExcelStyleHeaderIconTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_ExcelStyleHeaderIconTemplate):

```razor
<IgbTreeGrid
    Data="Data"
    AllowFiltering="true"
    FilterMode="FilterMode.ExcelStyleFilter"
    ExcelStyleHeaderIconTemplateScript="WebGridFilterAltIconTemplate">
</IgbTreeGrid>

// In JavaScript
igRegisterScript("WebGridFilterAltIconTemplate", (ctx) => {
    var html = window.igTemplating.html;
        return html`<img height="15px" width="15px" src="http://static.infragistics.com/xplatform/images/grid/propeller-logo.svg" title="Continued" alt="Continued" />`
}, false);
```

<!-- ```razor
Add razor snipets
``` -->

<!-- ```html
<igc-tree-grid id="treegrid1" auto-generate="false" height="650px" width="100%" allow-filtering="true"
    primary-key="ID" foreign-key="ParentID" filter-mode="ExcelStyleFilter">

    <igc-grid-excel-style-filtering min-height="380px" max-height="500px">
        <igc-excel-style-column-operations>
            <igc-excel-style-header
                show-pinning="true"
                show-hiding="true"
            >
            </igc-excel-style-header>

            <igc-excel-style-sorting></igc-excel-style-sorting>
        </igc-excel-style-column-operations>

        <igc-excel-style-filter-operations>
            <igc-excel-style-search></igc-excel-style-search>
        </igc-excel-style-filter-operations>
    </igc-grid-excel-style-filtering>

</igc-tree-grid>
``` -->

<!-- ComponentEnd: TreeGrid -->

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbTreeGrid
        AutoGenerate="false"
        Name="grid"
        @ref="grid"
        Data="FoodsData"
        PrimaryKey="ID"
        ForeignKey="ParentID"
        Moving="true"
        AllowFiltering="true"
        FilterMode="FilterMode.ExcelStyleFilter"
        ExcelStyleHeaderIconTemplateScript="WebGridFilterAltIconTemplate">
            <IgbGridToolbar
            >
                <IgbGridToolbarActions
                >
                    <IgbGridToolbarHiding
                    >
                    </IgbGridToolbarHiding>

                </IgbGridToolbarActions>

            </IgbGridToolbar>

            <IgbColumn
            Field="ID"
            Header="ID"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Name"
            Header="Product Name"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Unit Price"
            Sortable="true"
            DataType="GridColumnDataType.Currency">
            </IgbColumn>

            <IgbColumn
            Field="AddedDate"
            Header="Added Date"
            Sortable="true"
            DataType="GridColumnDataType.Date">
            </IgbColumn>

            <IgbColumn
            Field="Discontinued"
            DataType="GridColumnDataType.Boolean"
            BodyTemplateScript="WebGridBooleanCellTemplate"
            Name="column1"
            @ref="column1">
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

    private FoodsData _foodsData = null;
    public FoodsData FoodsData
    {
        get
        {
            if (_foodsData == null)
            {
                _foodsData = new FoodsData();
            }
            return _foodsData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class FoodsDataItem
{
    public double ID { get; set; }
    public double ParentID { get; set; }
    public string Name { get; set; }
    public double UnitPrice { get; set; }
    public string AddedDate { get; set; }
    public bool Discontinued { get; set; }
}

public class FoodsData
    : List<FoodsDataItem>
{
    public FoodsData()
    {
        this.Add(new FoodsDataItem() { ID = 1, ParentID = -1, Name = @"Foods", UnitPrice = 0, AddedDate = @"2009-06-19", Discontinued = false });
        this.Add(new FoodsDataItem() { ID = 101, ParentID = 1, Name = @"Chef Antons Gumbo Mix", UnitPrice = 21.35, AddedDate = @"2011-11-11", Discontinued = true });
        this.Add(new FoodsDataItem() { ID = 102, ParentID = 1, Name = @"Grandmas Boysenberry Spread", UnitPrice = 25, AddedDate = @"2017-12-17", Discontinued = false });
        // ... 20 more items
    }
}
```


<!-- ComponentStart: TreeGrid -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```razor
<IgbTreeGrid class="grid"></IgbTreeGrid>
```

Then set the related CSS properties to this class:

```css
.grid {
    --ig-grid-filtering-row-background: #ffcd0f;
    --ig-list-item-background: #ffcd0f;
}
```

### Demo

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbTreeGrid
        AutoGenerate="false"
        Name="grid"
        @ref="grid"
        Id="grid"
        Data="FoodsData"
        PrimaryKey="ID"
        ForeignKey="ParentID"
        Moving="true"
        AllowFiltering="true"
        FilterMode="FilterMode.ExcelStyleFilter">
            <IgbColumn
            Field="ID"
            Header="ID"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Name"
            Header="Product Name"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Unit Price"
            Sortable="true"
            DataType="GridColumnDataType.Currency">
            </IgbColumn>

            <IgbColumn
            Field="AddedDate"
            Header="Added Date"
            Sortable="true"
            DataType="GridColumnDataType.Date">
            </IgbColumn>

            <IgbColumn
            Field="Discontinued"
            DataType="GridColumnDataType.Boolean"
            BodyTemplateScript="WebGridBooleanCellTemplate"
            Name="column1"
            @ref="column1">
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

    private FoodsData _foodsData = null;
    public FoodsData FoodsData
    {
        get
        {
            if (_foodsData == null)
            {
                _foodsData = new FoodsData();
            }
            return _foodsData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class FoodsDataItem
{
    public double ID { get; set; }
    public double ParentID { get; set; }
    public string Name { get; set; }
    public double UnitPrice { get; set; }
    public string AddedDate { get; set; }
    public bool Discontinued { get; set; }
}

public class FoodsData
    : List<FoodsDataItem>
{
    public FoodsData()
    {
        this.Add(new FoodsDataItem() { ID = 1, ParentID = -1, Name = @"Foods", UnitPrice = 0, AddedDate = @"2009-06-19", Discontinued = false });
        this.Add(new FoodsDataItem() { ID = 101, ParentID = 1, Name = @"Chef Antons Gumbo Mix", UnitPrice = 21.35, AddedDate = @"2011-11-11", Discontinued = true });
        this.Add(new FoodsDataItem() { ID = 102, ParentID = 1, Name = @"Grandmas Boysenberry Spread", UnitPrice = 25, AddedDate = @"2017-12-17", Discontinued = false });
        // ... 20 more items
    }
}
```


## API References

- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html)
- [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
