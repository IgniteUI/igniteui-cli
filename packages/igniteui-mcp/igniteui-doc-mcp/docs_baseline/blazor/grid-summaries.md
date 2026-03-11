---
title: Blazor Grid Summaries - Ignite UI for Blazor
_description: Configure Blazor Grid summaries in the group footer of the column and use the option to set custom Blazor template in the Ignite UI for Blazor Material table
_keywords: Blazor Grid summaries, Blazor, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["GridBaseDirective", "Column", "SummaryOperand"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/summaries
_tocName: Summaries
_premium: true
---

# Blazor Grid Summaries

The Ignite UI for Blazor Summaries feature in Blazor Grid functions on a per-column level as group footer. Blazor IgbGrid summaries is powerful feature which enables the user to see column information in a separate container with a predefined set of default summary items, depending on the type of data within the column or by implementing a custom  template in the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html).

## Blazor Grid Summaries Overview Example

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Name="grid"
        @ref="grid"
        Data="NwindData"
        PrimaryKey="ProductID"
        ColumnInitScript="WebGridCustomSummary">
            <IgbColumn
            Field="ProductID">
            </IgbColumn>

            <IgbColumn
            Field="ProductName"
            Header="Product Name"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Unit Price"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="UnitsInStock"
            Header="Units In Stock"
            HasSummary="true"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="Discontinued"
            Header="Discontinued">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Header="Order Date"
            HasSummary="true"
            DataType="GridColumnDataType.Date">
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

    private NwindData _nwindData = null;
    public NwindData NwindData
    {
        get
        {
            if (_nwindData == null)
            {
                _nwindData = new NwindData();
            }
            return _nwindData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class NwindDataItem
{
    public double ProductID { get; set; }
    public string ProductName { get; set; }
    public double SupplierID { get; set; }
    public double CategoryID { get; set; }
    public string QuantityPerUnit { get; set; }
    public double UnitPrice { get; set; }
    public double UnitsInStock { get; set; }
    public double UnitsOnOrder { get; set; }
    public double ReorderLevel { get; set; }
    public bool Discontinued { get; set; }
    public string OrderDate { get; set; }
    public double Rating { get; set; }
    public List<NwindDataItem_LocationsItem> Locations { get; set; }
}
public class NwindDataItem_LocationsItem
{
    public string Shop { get; set; }
    public string LastInventory { get; set; }
}

public class NwindData
    : List<NwindDataItem>
{
    public NwindData()
    {
        this.Add(new NwindDataItem() { ProductID = 1, ProductName = @"Chai", SupplierID = 1, CategoryID = 1, QuantityPerUnit = @"10 boxes x 20 bags", UnitPrice = 18, UnitsInStock = 39, UnitsOnOrder = 30, ReorderLevel = 10, Discontinued = false, OrderDate = @"2012-02-12", Rating = 5, Locations = new List<NwindDataItem_LocationsItem>()
        {
            new NwindDataItem_LocationsItem() { Shop = @"Fun-Tasty Co.", LastInventory = @"2018-06-12" },
            new NwindDataItem_LocationsItem() { Shop = @"Farmer Market", LastInventory = @"2018-04-04" }}
            new NwindDataItem_LocationsItem() { Shop = @"Super Market", LastInventory = @"2018-09-09" }}
            // ... 3 more items
    }
}
```


> \[!Note]
> The summary of the column is a **function of all column values**, unless filtering is applied, then the summary of the column will be **function of the filtered result values**

[`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) summaries can also be enabled on a per-column level in Ignite UI for Blazor, which means that you can activate it only for columns that you need. [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) summaries gives you a predefined set of default summaries, depending on the type of data in the column, so that you can save some time:

For `string` and `boolean` [`DataType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DataType), the following function is available:

- Count

For `number`, `currency` and `percent` data types, the following functions are available:

- Count
- Min
- Max
- Average
- Sum

For `date` data type, the following functions are available:

- Count
- Earliest
- Latest

All available column data types could be found in the official [Column types topic](column-types.md#default-template).

[`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) summaries are enabled per-column by setting [`HasSummary`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_HasSummary) property to **true**. It is also important to keep in mind that the summaries for each column are resolved according to the column data type. In the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) the default column data type is `string`, so if you want `number` or `date` specific summaries you should specify the [`DataType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DataType) property as `number` or `date`. Note that the summary values will be displayed localized, according to the grid [`Locale`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_Locale) and column [`PipeArgs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_PipeArgs).

<!-- ComponentStart: Grid -->

```razor
<IgbGrid>
        <IgbColumn Field="EmployeeID" DataType="GridColumnDataType.Number" HasSummary="true"></IgbColumn>
        <IgbColumn Field="FirstName" HasSummary="true"></IgbColumn>
        <IgbColumn Field="LastName" HasSummary="true"></IgbColumn>
        <IgbColumn Field="Title" HasSummary="true"></IgbColumn>
</IgbGrid>
```

<!-- ComponentEnd: Grid -->

The other way to enable/disable summaries for a specific column or a list of columns is to use the public method [`EnableSummaries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_EnableSummaries)/[`DisableSummaries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_DisableSummaries) of the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html).

<!-- ComponentStart: Grid -->

<!-- TODO: EnableSummariesAsync not working so please add it to the code snippet when it got fixed. -->

```razor
 <IgbGrid @ref=grid Id="grid" AutoGenerate="false">
        <IgbColumn Field="EmployeeID" DataType="GridColumnDataType.Number" HasSummary="true"></IgbColumn>
        <IgbColumn Field="FirstName" Sortable="true" HasSummary="true"></IgbColumn>
        <IgbColumn Field="LastName" Sortable="false" DisablePinning="true" DisableHiding="true" HasSummary="true"></IgbColumn>
        <IgbColumn Field="Title" Sortable="true" DisablePinning="false" DisableHiding="true"></IgbColumn>
</IgbGrid>

@code {
    public async void DisableSummaries()
    {
        object[] disabledSummaries = { "EmployeeID" };
        await this.grid.DisableSummariesAsync(disabledSummaries);
    }
}
```

<!-- ComponentEnd: Grid -->

<!-- Angular, WebComponents, Blazor -->

## Custom Grid Summaries

If these functions do not fulfill your requirements you can provide a custom summary for the specific columns.

<!-- ComponentStart: Grid, HierarchicalGrid -->

```razor

//In JavaScript
class WebGridDiscontinuedSummary {
    operate(data, allData, fieldName) {
        const discontinuedData = allData.filter((rec) => rec['Discontinued']).map(r => r[fieldName]);
        const result = [];
        result.push({
            key: 'products',
            label: 'Products',
            summaryResult: data.length
        });
        result.push({
            key: 'total',
            label: 'Total Items',
            summaryResult: data.length ? data.reduce((a, b) => +a + +b) : 0
        });
        result.push({
            key: 'discontinued',
            label: 'Discontinued Products',
            summaryResult: allData.map(r => r['Discontinued']).filter((rec) => rec).length
        });
        result.push({
            key: 'totalDiscontinued',
            label: 'Total Discontinued Items',
            summaryResult: discontinuedData.length ? discontinuedData.reduce((a, b) => +a + +b) : 0
        });
        return result;
    }
}
```

<!-- ComponentEnd: Grid, HierarchicalGrid -->

As seen in the examples, the base classes expose the `Operate` method, so you can choose to get all default summaries and modify the result, or calculate entirely new summary results.

The method returns a list of [`IgbSummaryResult`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSummaryResult.html).

and take optional parameters for calculating the summaries.
See [Custom summaries, which access all data](#custom-summaries-which-access-all-data) section below.

> \[!Note]
> In order to calculate the summary row height properly, the Grid needs the `Operate` method to always return an array of [`IgbSummaryResult`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSummaryResult.html) with the proper length even when the data is empty.

```razor
<IgbGrid
        AutoGenerate="true"
        Name="grid"
        @ref="grid"
        Data="NwindData"
        PrimaryKey="ProductID"
        ColumnInitScript="WebGridCustomSummary">
</IgbGrid>

// In Javascript
igRegisterScript("WebGridCustomSummary", (event) => {
    if (event.detail.field === "UnitsInStock") {
        event.detail.summaries = WebGridDiscontinuedSummary;
    }
}, false);
```

<!-- ComponentEnd: Grid -->

### Custom summaries, which access all data

Now you can access all Grid data inside the custom column summary. Two additional optional parameters are introduced in the SummaryOperand `Operate` method.
As you can see in the code snippet below the operate method has the following three parameters:

- columnData - gives you an array that contains the values only for the current column
- allGridData - gives you the whole grid data source
- fieldName - current column field

```razor
class WebGridDiscontinuedSummary {
    operate(data, allData, fieldName) {
        const discontinuedData = allData.filter((rec) => rec['Discontinued']).map(r => r[fieldName]);
        result.push({
            key: 'totalDiscontinued',
            label: 'Total Discontinued Items',
            summaryResult: discontinuedData.length ? discontinuedData.reduce((a, b) => +a + +b) : 0
        });
        return result;
    }
}
```

<!-- ComponentEnd: Grid, HierarchicalGrid -->

<!-- ComponentStart: Grid, TreeGrid -->

<!-- ComponentEnd: Grid, TreeGrid -->

<!-- ComponentStart: Grid -->

<!-- Blazor -->

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Name="grid"
        @ref="grid"
        Data="NwindData"
        PrimaryKey="ProductID"
        ColumnInitScript="WebGridCustomSummary">
            <IgbColumn
            Field="ProductID">
            </IgbColumn>

            <IgbColumn
            Field="ProductName"
            Header="Product Name"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Unit Price"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="UnitsInStock"
            Header="Units In Stock"
            HasSummary="true"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="Discontinued"
            Header="Discontinued">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Header="Order Date"
            HasSummary="true"
            DataType="GridColumnDataType.Date">
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

    private NwindData _nwindData = null;
    public NwindData NwindData
    {
        get
        {
            if (_nwindData == null)
            {
                _nwindData = new NwindData();
            }
            return _nwindData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class NwindDataItem
{
    public double ProductID { get; set; }
    public string ProductName { get; set; }
    public double SupplierID { get; set; }
    public double CategoryID { get; set; }
    public string QuantityPerUnit { get; set; }
    public double UnitPrice { get; set; }
    public double UnitsInStock { get; set; }
    public double UnitsOnOrder { get; set; }
    public double ReorderLevel { get; set; }
    public bool Discontinued { get; set; }
    public string OrderDate { get; set; }
    public double Rating { get; set; }
    public List<NwindDataItem_LocationsItem> Locations { get; set; }
}
public class NwindDataItem_LocationsItem
{
    public string Shop { get; set; }
    public string LastInventory { get; set; }
}

public class NwindData
    : List<NwindDataItem>
{
    public NwindData()
    {
        this.Add(new NwindDataItem() { ProductID = 1, ProductName = @"Chai", SupplierID = 1, CategoryID = 1, QuantityPerUnit = @"10 boxes x 20 bags", UnitPrice = 18, UnitsInStock = 39, UnitsOnOrder = 30, ReorderLevel = 10, Discontinued = false, OrderDate = @"2012-02-12", Rating = 5, Locations = new List<NwindDataItem_LocationsItem>()
        {
            new NwindDataItem_LocationsItem() { Shop = @"Fun-Tasty Co.", LastInventory = @"2018-06-12" },
            new NwindDataItem_LocationsItem() { Shop = @"Farmer Market", LastInventory = @"2018-04-04" }}
            new NwindDataItem_LocationsItem() { Shop = @"Super Market", LastInventory = @"2018-09-09" }}
            // ... 3 more items
    }
}
```


<!-- end: Blazor -->

<!-- ComponentEnd: Grid -->

<!-- end: Angular, WebComponents, Blazor -->

### Summary Template

[`SummaryTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_SummaryTemplate) targets the column summary providing as a context the column summary results.

```razor
<IgbColumn HasSummary="true" SummaryTemplateScript="SummaryTemplate">
</IgbColumn>

igRegisterScript("SummaryTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`<div>
    <span> ${ctx.implicit[0].label} - ${ctx.implicit[0].summaryResult} </span>
</div>`
}, false);
```

When a default summary is defined, the height of the summary area is calculated by design depending on the column with the largest number of summaries and the `--ig-size` of the grid. Use the [`SummaryRowHeight`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SummaryRowHeight) input property to override the default value. As an argument it expects a number value, and setting a falsy value will trigger the default sizing behavior of the grid footer.

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="options vertical">
        <IgbPropertyEditorPanel

        DescriptionType="WebGrid"
        IsHorizontal="true"
        IsWrappingEnabled="false"
        Name="propertyEditorPanel1"
        @ref="propertyEditorPanel1">
            <IgbPropertyEditorPropertyDescription
            PropertyPath="SummaryRowHeight"
            Label="Summary Row Height"
            ValueType="PropertyEditorValueType.Number"
            Name="SummaryRowHeightEditor"
            @ref="summaryRowHeightEditor">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            Label="Toggle Summaries"
            ValueType="PropertyEditorValueType.Boolean1"
            PrimitiveValue="true"
            Changed="WebGridHasSummariesChange"
            Name="ToggleSummariesEditor"
            @ref="toggleSummariesEditor">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            Name="SizeEditor"
            @ref="sizeEditor"
            Label="Grid Size:"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "Small", "Medium", "Large" })"
            DropDownValues="@(new string[] { "Small", "Medium", "Large" })"
            ChangedScript="WebGridSetGridSize">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Id="grid"
        Name="grid"
        @ref="grid"
        Data="NwindData">
            <IgbColumn
            Field="ProductID"
            Header="Product ID"
            Width="10%"
            Groupable="true">
            </IgbColumn>

            <IgbColumn
            Field="ProductName"
            Header="Product Name"
            Width="17%"
            Groupable="true">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Price"
            Filterable="false"
            Width="17%"
            Editable="true"
            DataType="GridColumnDataType.Number"
            Groupable="true">
            </IgbColumn>

            <IgbColumn
            Field="UnitsInStock"
            Header="Units in Stock"
            Width="21%"
            DataType="GridColumnDataType.Number"
            Editable="true"
            Groupable="true"
            HasSummary="true"
            Summaries="DiscontinuedSummary"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Discontinued"
            Header="Discontinued"
            Editable="true"
            Width="17%"
            DataType="GridColumnDataType.Boolean"
            Groupable="true">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Width="18%"
            DataType="GridColumnDataType.Date"
            Groupable="true"
            HasSummary="true"
            SummaryTemplate="WebGridOrderDateSummaryTemplate"
            Name="column2"
            @ref="column2">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditorPanel1 = this.propertyEditorPanel1;
        var summaryRowHeightEditor = this.summaryRowHeightEditor;
        var toggleSummariesEditor = this.toggleSummariesEditor;
        var sizeEditor = this.sizeEditor;
        var grid = this.grid;
        var column1 = this.column1;
        var column2 = this.column2;

        this.BindElements = () => {
            propertyEditorPanel1.Target = this.grid;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditorPanel1;
    private IgbPropertyEditorPropertyDescription summaryRowHeightEditor;
    private IgbPropertyEditorPropertyDescription toggleSummariesEditor;
    private IgbPropertyEditorPropertyDescription sizeEditor;
    private IgbGrid grid;
    private IgbColumn column1;
    private IgbColumn column2;

    public void WebGridHasSummariesChange(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        bool newValue = bool.Parse(args.NewValue.ToString());

        var column1 = this.grid.GetColumns().ElementAt(3);
        var column2 = this.grid.GetColumns().ElementAt(5);

        column1.HasSummary = newValue;
        column2.HasSummary = newValue;
    }

    public RenderFragment<IgbSummaryTemplateContext> WebGridOrderDateSummaryTemplate = (ctx) => {
        var summaryResults = ctx.Implicit;
        return @<div class="summary-temp">
            <span><strong>@(summaryResults[0].Label)</strong><span>@(summaryResults[0].Result)</span></span>
            <span><strong>@(summaryResults[1].Label)</strong><span>@(summaryResults[1].Result)</span></span>
        </div>;
    };

        private object DiscontinuedSummary = new
        {
            operate = new Func<object[], object[], string, IgbSummaryResult[]>((data, allData, fieldName) =>
            {
                var sum = (object[] data) =>
                {
                    return data.Length > 0 && data.Select(el => (double)el).Where((el) => el != null).Count() > 0 ?
                        data.Select(el => (double)el).Where((el) => el != null).Aggregate((a, b) => a + b) :
                        0;
                };
                var result = new IgbSummaryResult[] { };
                result.Append(new IgbSummaryResult
                {
                    Key = "products",
                    Label = "Producs",
                    Result = data?.Length
                });
                result.Append(new IgbSummaryResult
                {
                    Key = "total",
                    Label = "Total Items",
                    Result = sum(data)
                });
                result.Append(new IgbSummaryResult
                {
                    Key = "discontinued",
                    Label = "Discontinued Producs",
                    Result = allData.Select(r => r.GetType().GetProperty("Discontinued")?.GetValue(r)).Where((rec) => rec != null).Count()
                });
                result.Append(new IgbSummaryResult
                {
                    Key = "totalDiscontinued",
                    Label = "Total Discontinued Items",
                    Result = sum(
                        allData
                        .Where((rec) => rec.GetType().GetProperty("Discontinued")?.GetValue(rec) != null)
                        .Select(r => r.GetType().GetProperty(fieldName)?.GetValue(r)).ToArray()
                    )
                });
                return result;
            })
        };
    private NwindData _nwindData = null;
    public NwindData NwindData
    {
        get
        {
            if (_nwindData == null)
            {
                _nwindData = new NwindData();
            }
            return _nwindData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class NwindDataItem
{
    public double ProductID { get; set; }
    public string ProductName { get; set; }
    public double SupplierID { get; set; }
    public double CategoryID { get; set; }
    public string QuantityPerUnit { get; set; }
    public double UnitPrice { get; set; }
    public double UnitsInStock { get; set; }
    public double UnitsOnOrder { get; set; }
    public double ReorderLevel { get; set; }
    public bool Discontinued { get; set; }
    public string OrderDate { get; set; }
    public double Rating { get; set; }
    public List<NwindDataItem_LocationsItem> Locations { get; set; }
}
public class NwindDataItem_LocationsItem
{
    public string Shop { get; set; }
    public string LastInventory { get; set; }
}

public class NwindData
    : List<NwindDataItem>
{
    public NwindData()
    {
        this.Add(new NwindDataItem() { ProductID = 1, ProductName = @"Chai", SupplierID = 1, CategoryID = 1, QuantityPerUnit = @"10 boxes x 20 bags", UnitPrice = 18, UnitsInStock = 39, UnitsOnOrder = 30, ReorderLevel = 10, Discontinued = false, OrderDate = @"2012-02-12", Rating = 5, Locations = new List<NwindDataItem_LocationsItem>()
        {
            new NwindDataItem_LocationsItem() { Shop = @"Fun-Tasty Co.", LastInventory = @"2018-06-12" },
            new NwindDataItem_LocationsItem() { Shop = @"Farmer Market", LastInventory = @"2018-04-04" }}
            new NwindDataItem_LocationsItem() { Shop = @"Super Market", LastInventory = @"2018-09-09" }}
            // ... 3 more items
    }
}
```


## Disabled Summaries

<!-- Blazor -->

The [`DisabledSummaries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DisabledSummaries) property provides precise per-column control over the Blazor Grid summary feature. This property enables users to customize the summaries displayed for each column in the IgbGrid, ensuring that only the most relevant and meaningful data is shown. For example, you can exclude specific summary types, such as **\['count', 'min', 'max']** by specifying their summary keys in an array.

<!-- end: Blazor -->

<!-- WebComponents, React, Blazor -->

This property can also be modified **dynamically at runtime** through code, providing flexibility to adapt the IgbGrid's summaries to changing application states or user actions.

<!-- end: WebComponents, React, Blazor -->

<!-- Blazor -->

The following examples illustrate how to use the [`DisabledSummaries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DisabledSummaries) property to manage summaries for different columns and exclude specific default and custom summary types in the Blazor Grid:

<!-- end: Blazor -->

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

<!-- Blazor -->

```razor
<!-- Disable default summaries -->
<IgbColumn
    Field="UnitPrice"
    Header="Unit Price"
    DataType="GridColumnDataType.Number"
    HasSummary="true"
    DisabledSummaries="['count', 'sum', 'average']" />

<!-- Disable custom summaries -->
<IgbColumn
    Field="UnitsInStock"
    Header="Units In Stock"
    DataType="GridColumnDataType.Number"
    HasSummary="true"
    Summaries="discontinuedSummary"
    DisabledSummaries="['discontinued', 'totalDiscontinued']" />
```

<!-- end: Blazor -->

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

For `UnitPrice`, default summaries like `count`, `sum`, and `average` are disabled, leaving others like `min` and `max` active.

<!-- Blazor -->

For `UnitsInStock`, custom summaries such as `discontinued` and `totalDiscontinued` are excluded using the [`DisabledSummaries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DisabledSummaries) property.

At runtime, summaries can also be dynamically disabled using the [`DisabledSummaries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DisabledSummaries) property. For example, you can set or update the property on specific columns programmatically to adapt the displayed summaries based on user actions or application state changes.

<!-- end: Blazor -->

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <div class="wrapper">
            <span class="summaries-title">Disable Summaries for Column:</span>
            <div class="summaries-buttons">
                @if (grid != null && columns?.Length > 0)
                {
                    @foreach (IgbColumn column in columns)
                    {
                        <IgbButton Variant="ButtonVariant.Contained" class="summary-button"
                                   @onclick="() => OnDialogShow(column)">@column.Header</IgbButton>
                    }
                }
            </div>
            <IgbDialog @ref="dialog" Title="@dialogTitle" CloseOnOutsideClick="true">
                <div class="summaries-dialog-items">
                    @if (currentColumn != null && currentColumn.HasSummary && summaries.Count() > 0)
                    {
                        @foreach (var summary in this.summaries)
                        {
                            <IgbCheckbox Value="@summary.Key" Checked="@currentColDisabledSummaries.Contains(summary.Key)"
                                         Change="@((evt) => ToggleSummary(evt))">@summary.Value</IgbCheckbox>
                        }
                    }
                </div>
                <IgbButton slot="footer" Variant=@ButtonVariant.Flat Disabled="currentColDisabledSummaries.Count == summaries.Count()"
                           @onclick="() => ToggleAllSummaries(false)">Disable All</IgbButton>
                <IgbButton slot="footer" Variant=@ButtonVariant.Flat Disabled="currentColDisabledSummaries.Count == 0"
                           @onclick="() => ToggleAllSummaries(true)">Enable All</IgbButton>
            </IgbDialog>

            <IgbGrid AutoGenerate="false"
                     Name="grid"
                     Id="grid"
                     @ref="grid"
                     Data="NwindData"
                     PrimaryKey="ProductID"
                     ColumnInitScript="ColumnInitScript">
                <IgbColumn Field="ProductID"
                           Name="ProductID"
                           Header="Product ID"
                           HasSummary="true"
                           @ref="productID">
                </IgbColumn>

                <IgbColumn Name="ProductName"
                           @ref="productName"
                           Field="ProductName"
                           Header="Product Name"
                           HasSummary="true">
                </IgbColumn>

                <IgbColumn Name="UnitPrice"
                           @ref="unitPrice"
                           Field="UnitPrice"
                           Header="Unit Price"
                           HasSummary="true">
                </IgbColumn>

                <IgbColumn Name="UnitsInStock"
                           @ref="unitsInStock"
                           Field="UnitsInStock"
                           Header="Units In Stock"
                           HasSummary="true"
                           DataType="GridColumnDataType.Number">
                </IgbColumn>

                <IgbColumn Name="Discontinued"
                           @ref="discontinued"
                           Field="Discontinued"
                           HasSummary="true"
                           Header="Discontinued">
                </IgbColumn>

                <IgbColumn Name="OrderDate"
                           @ref="orderDate"
                           Field="OrderDate"
                           Header="Order Date"
                           HasSummary="true"
                           DataType="GridColumnDataType.Date">
                </IgbColumn>

            </IgbGrid>
        </div>

    </div>
</div>

@code {
    private IgbGrid grid;
    private IgbColumn productID;
    private IgbColumn productName;
    private IgbColumn unitPrice;
    private IgbColumn unitsInStock;
    private IgbColumn discontinued;
    private IgbColumn orderDate;

    private IgbColumn[] columns { get; set; } = [];
    private IgbColumn currentColumn;

    private Dictionary<string, string> summaries = [];
    private List<string> currentColDisabledSummaries { get; set; } = new List<string>();

    private IgbDialog dialog;
    private string dialogTitle;

    private NwindData _nwindData = null;
    public NwindData NwindData
    {
        get
        {
            if (_nwindData == null)
            {
                _nwindData = new NwindData();
            }
            return _nwindData;
        }
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            if (grid != null)
            {
                columns = new IgbColumn[] { productID, productName, unitPrice, unitsInStock, discontinued, orderDate };
                StateHasChanged();
            }
        }
    }

    public async Task OnDialogShow(IgbColumn column)
    {
        if (this.dialog != null)
        {
            this.currentColumn = column;
            this.dialogTitle = "Disable Summaries for: " + column.Header;
            this.currentColDisabledSummaries.Clear();
            if (currentColumn.DisabledSummaries != null)
            {
                this.currentColDisabledSummaries = currentColumn.DisabledSummaries?.ToList();
            }
            await this.GetSummaryKeysAsync();
            await this.dialog.ShowAsync();
        }
    }

    private async Task GetSummaryKeysAsync()
    {
        if (currentColumn != null && currentColumn.HasSummary)
        {
            summaries = await JS.InvokeAsync<Dictionary<string, string>>("getGridSummaries", currentColumn.Field);
            StateHasChanged();
        }
    }

    public async Task ToggleSummary(IgbCheckboxChangeEventArgs eventArgs)
    {
        if (currentColumn != null && currentColumn.HasSummary)
        {
            string summaryKey = eventArgs.Detail.Value;
            if (eventArgs.Detail.Checked && !currentColDisabledSummaries.Contains(summaryKey))
            {
                currentColDisabledSummaries.Add(summaryKey);
            }
            else if (!eventArgs.Detail.Checked && currentColDisabledSummaries.Contains(summaryKey))
            {
                currentColDisabledSummaries.Remove(eventArgs.Detail.Value);
            }
            currentColumn.DisabledSummaries = currentColDisabledSummaries.ToArray();
        }
    }

    public async Task ToggleAllSummaries(bool enable)
    {
        if (currentColumn != null && currentColumn.HasSummary)
        {
            if (enable)
            {
                currentColDisabledSummaries.Clear();
            }
            else
            {
                currentColDisabledSummaries = summaries.Keys.ToList();
            }
            currentColumn.DisabledSummaries = currentColDisabledSummaries.ToArray();
        }
    }
}
```
```csharp
using System;
using System.Collections.Generic;
public class NwindDataItem
{
    public double ProductID { get; set; }
    public string ProductName { get; set; }
    public double SupplierID { get; set; }
    public double CategoryID { get; set; }
    public string QuantityPerUnit { get; set; }
    public double UnitPrice { get; set; }
    public double UnitsInStock { get; set; }
    public double UnitsOnOrder { get; set; }
    public double ReorderLevel { get; set; }
    public bool Discontinued { get; set; }
    public string OrderDate { get; set; }
    public double Rating { get; set; }
    public List<NwindDataItem_LocationsItem> Locations { get; set; }
}
public class NwindDataItem_LocationsItem
{
    public string Shop { get; set; }
    public string LastInventory { get; set; }
}

public class NwindData
    : List<NwindDataItem>
{
    public NwindData()
    {
        this.Add(new NwindDataItem() { ProductID = 1, ProductName = @"Chai", SupplierID = 1, CategoryID = 1, QuantityPerUnit = @"10 boxes x 20 bags", UnitPrice = 18, UnitsInStock = 39, UnitsOnOrder = 30, ReorderLevel = 10, Discontinued = false, OrderDate = @"2012-02-12", Rating = 5, Locations = new List<NwindDataItem_LocationsItem>()
        {
            new NwindDataItem_LocationsItem() { Shop = @"Fun-Tasty Co.", LastInventory = @"2018-06-12" },
            new NwindDataItem_LocationsItem() { Shop = @"Farmer Market", LastInventory = @"2018-04-04" }}
            new NwindDataItem_LocationsItem() { Shop = @"Super Market", LastInventory = @"2018-09-09" }}
            // ... 3 more items
    }
}
```


<!-- ComponentStart: Grid -->

## Summaries with Group By

When you have grouped by columns, the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) allows you to change the summary position and calculation mode using the [`SummaryCalculationMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SummaryCalculationMode) and [`SummaryPosition`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SummaryPosition) properties. Along with these two properties the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) exposes and [`ShowSummaryOnCollapse`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_ShowSummaryOnCollapse) property which allows you to determine whether the summary row stays visible when the group row that refers to is collapsed.

The available values of the [`SummaryCalculationMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SummaryCalculationMode) property are:

- `RootLevelOnly` - Summaries are calculated only for the root level.
- `ChildLevelsOnly` - Summaries are calculated only for the child levels.
- `RootAndChildLevels` - Summaries are calculated for both root and child levels. This is the default value.

The available values of the [`SummaryPosition`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SummaryPosition) property are:

- `Top` - The summary row appears before the group by row children.
- `Bottom` - The summary row appears after the group by row children. This is the default value.

The [`ShowSummaryOnCollapse`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_ShowSummaryOnCollapse) property is boolean. Its default value is set to **false**, which means that the summary row would be hidden when the group row is collapsed. If the property is set to **true** the summary row stays visible when group row is collapsed.

> \[!Note]
> The [`SummaryPosition`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SummaryPosition) property applies only for the child level summaries. The root level summaries appear always fixed at the bottom of the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html).

### Demo

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
            PropertyPath="SummaryCalculationMode"
            Name="SummaryCalcModeEditor"
            @ref="summaryCalcModeEditor">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="SummaryPosition"
            Name="SummaryPositionEditor"
            @ref="summaryPositionEditor">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="ShowSummaryOnCollapse"
            Name="ShowOnCollapseEditor"
            @ref="showOnCollapseEditor"
            Label="Show Summary Row when Group Row is Collapsed">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Name="grid"
        @ref="grid"
        Data="InvoicesData"
        GroupingExpressions="GroupingExpression1">
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
            DataType="GridColumnDataType.Currency"
            Groupable="true"
            HasSummary="true"
            PipeArgs="ColumnPipeArgs1"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Quantity"
            Header="Quantity"
            Width="150px"
            DataType="GridColumnDataType.Number"
            Groupable="true"
            HasSummary="true">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditor = this.propertyEditor;
        var summaryCalcModeEditor = this.summaryCalcModeEditor;
        var summaryPositionEditor = this.summaryPositionEditor;
        var showOnCollapseEditor = this.showOnCollapseEditor;
        var grid = this.grid;
        var column1 = this.column1;

        this.BindElements = () => {
            propertyEditor.Target = this.grid;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditor;
    private IgbPropertyEditorPropertyDescription summaryCalcModeEditor;
    private IgbPropertyEditorPropertyDescription summaryPositionEditor;
    private IgbPropertyEditorPropertyDescription showOnCollapseEditor;
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
                groupingExpression2.FieldName = "ShipCountry";
                groupingExpression2.IgnoreCase = false;
                groupingExpression2.Dir = SortingDirection.Asc;
                groupingExpression1[0] = groupingExpression2;
                this._groupingExpression1 = groupingExpression1;
            }
            return this._groupingExpression1;
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


<!-- ComponentEnd: Grid -->

## Keyboard Navigation

The summary rows can be navigated with the following keyboard interactions:

- <kbd>UP</kbd> - navigates one cell up.
- <kbd>DOWN</kbd> - navigates one cell down.
- <kbd>LEFT</kbd> - navigates one cell left.
- <kbd>RIGHT</kbd> - navigates one cell right.
- <kbd>CTRL</kbd> + <kbd>LEFT</kbd> or <kbd>HOME</kbd> - navigates to the leftmost cell.
- <kbd>CTRL</kbd> + <kbd>RIGHT</kbd> or <kbd>END</kbd> - navigates to the rightmost cell.

<!-- WebComponents, Blazor, React -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```razor
<IgbGrid class="grid"></IgbGrid>
```

Then set the related CSS properties for that class:

```css
.grid {
    --ig-grid-summary-background-color:#e0f3ff;
    --ig-grid-summary-focus-background-color: rgba( #94d1f7, .3 );
    --ig-grid-summary-label-color: rgb(228, 27, 117);
    --ig-grid-summary-result-color: black;
}
```

### Demo

<!-- ComponentEnd: Grid, TreeGrid -->

<!-- ComponentStart: Grid -->

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
            PropertyPath="SummaryCalculationMode"
            Name="SummaryCalcModeEditor"
            @ref="summaryCalcModeEditor">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="SummaryPosition"
            Name="SummaryPositionEditor"
            @ref="summaryPositionEditor">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Name="grid"
        @ref="grid"
        Id="grid"
        Data="InvoicesData"
        GroupingExpressions="GroupingExpression1">
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
            DataType="GridColumnDataType.Currency"
            Groupable="true"
            HasSummary="true"
            PipeArgs="ColumnPipeArgs1"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Quantity"
            Header="Quantity"
            Width="150px"
            DataType="GridColumnDataType.Number"
            Groupable="true"
            HasSummary="true">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditor = this.propertyEditor;
        var summaryCalcModeEditor = this.summaryCalcModeEditor;
        var summaryPositionEditor = this.summaryPositionEditor;
        var grid = this.grid;
        var column1 = this.column1;

        this.BindElements = () => {
            propertyEditor.Target = this.grid;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditor;
    private IgbPropertyEditorPropertyDescription summaryCalcModeEditor;
    private IgbPropertyEditorPropertyDescription summaryPositionEditor;
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


<!-- ComponentEnd: Grid -->

<!-- end: WebComponents, Blazor, React -->

## API References

- `SummaryOperand`
- `NumberSummaryOperand`
- `DateSummaryOperand`
- [`IgbColumnGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnGroup.html)
- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html)

## Additional Resources

<!-- Blazor -->

<!-- ComponentStart: Grid -->

- [Column Data Types](column-types.md#default-template)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

<!-- ComponentEnd: Grid -->

<!-- end: Blazor -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
