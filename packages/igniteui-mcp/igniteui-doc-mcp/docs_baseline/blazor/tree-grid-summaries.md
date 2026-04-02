---
title: Blazor Tree Grid Summaries - Ignite UI for Blazor
_description: Configure Blazor Tree Grid summaries in the group footer of the column and use the option to set custom Blazor template in the Ignite UI for Blazor Material table
_keywords: Blazor Tree Grid summaries, Blazor, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["GridBaseDirective", "Column", "SummaryOperand"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/summaries
_tocName: Summaries
_premium: true
---

# Blazor Tree Grid Summaries

The Ignite UI for Blazor Summaries feature in Blazor Tree Grid functions on a per-column level as group footer. Blazor TreeGrid summaries is powerful feature which enables the user to see column information in a separate container with a predefined set of default summary items, depending on the type of data within the column or by implementing a custom  template in the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html).

## Blazor Tree Grid Summaries Overview Example

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

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
            <IgbColumn
            Field="ID"
            Header="Order ID">
            </IgbColumn>

            <IgbColumn
            Field="Name"
            Header="Order Product"
            HasSummary="true"
            HeaderTemplateScript="WebTreeGridSummariesHeaderTemplate"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Units"
            Header="Units"
            DataType="GridColumnDataType.Number"
            HasSummary="true"
            Editable="true"
            HeaderTemplateScript="WebTreeGridSummariesHeaderTemplate"
            Name="column2"
            @ref="column2">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Unit Price"
            DataType="GridColumnDataType.Number"
            HasSummary="true"
            Editable="true"
            HeaderTemplateScript="WebTreeGridSummariesHeaderTemplate"
            Name="column3"
            @ref="column3">
            </IgbColumn>

            <IgbColumn
            Field="Price"
            Header="Price"
            DataType="GridColumnDataType.Number"
            HasSummary="true"
            Editable="true"
            HeaderTemplateScript="WebTreeGridSummariesHeaderTemplate"
            Name="column4"
            @ref="column4">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Header="Order Date"
            DataType="GridColumnDataType.Date"
            HasSummary="true"
            HeaderTemplateScript="WebTreeGridSummariesHeaderTemplate"
            Name="column5"
            @ref="column5">
            </IgbColumn>

            <IgbColumn
            Field="Delivered"
            Header="Delivered"
            DataType="GridColumnDataType.Boolean"
            HasSummary="true"
            HeaderTemplateScript="WebTreeGridSummariesHeaderTemplate"
            Name="column6"
            @ref="column6">
            </IgbColumn>

        </IgbTreeGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var treeGrid = this.treeGrid;
        var column1 = this.column1;
        var column2 = this.column2;
        var column3 = this.column3;
        var column4 = this.column4;
        var column5 = this.column5;
        var column6 = this.column6;

    }

    private IgbTreeGrid treeGrid;
    private IgbColumn column1;
    private IgbColumn column2;
    private IgbColumn column3;
    private IgbColumn column4;
    private IgbColumn column5;
    private IgbColumn column6;

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


> [!Note]
> The summary of the column is a **function of all column values**, unless filtering is applied, then the summary of the column will be **function of the filtered result values**

[`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) summaries can also be enabled on a per-column level in Ignite UI for Blazor, which means that you can activate it only for columns that you need. [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) summaries gives you a predefined set of default summaries, depending on the type of data in the column, so that you can save some time:

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

[`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) summaries are enabled per-column by setting [`HasSummary`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_HasSummary) property to **true**. It is also important to keep in mind that the summaries for each column are resolved according to the column data type. In the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) the default column data type is `string`, so if you want `number` or `date` specific summaries you should specify the [`DataType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DataType) property as `number` or `date`. Note that the summary values will be displayed localized, according to the grid [`Locale`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_Locale) and column [`PipeArgs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_PipeArgs).

<!-- ComponentStart: TreeGrid -->

```razor
<IgbTreeGrid>
        <IgbColumn Field="ID" Header="Order ID"></IgbColumn>
        <IgbColumn Field="Name" Header="Order Product" HasSummary="true"></IgbColumn>
        <IgbColumn Field="Units" Header="Units" HasSummary="true"></IgbColumn>
</IgbTreeGrid>
```

<!-- ComponentEnd: TreeGrid -->

The other way to enable/disable summaries for a specific column or a list of columns is to use the public method [`EnableSummaries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_EnableSummaries)/[`DisableSummaries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_DisableSummaries) of the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html).

<!-- ComponentStart: TreeGrid -->

```razor
<IgbTreeGrid AutoGenerate="false" Data="OrdersTreeData" Name="treeGrid" @ref="treeGridRef" Id="treeGrid" PrimaryKey="ID">
    <IgbColumn Field="ID" Header="Order ID"></IgbColumn>
    <IgbColumn Field="Name" Header="Order Product" HasSummary="true"></IgbColumn>
    <IgbColumn Field="Units" Header="Units" DataType="GridColumnDataType.Number" HasSummary="true"></IgbColumn>
</IgbTreeGrid>

@code {
    public async void DisableSummaries()
    {
        object[] disabledSummaries = { "Units" };
        await this.treeGrid.DisableSummariesAsync(disabledSummaries);
    }
}
```

<!-- ComponentEnd: TreeGrid -->

## Custom Tree Grid Summaries

If these functions do not fulfill your requirements you can provide a custom summary for the specific columns.

<!-- ComponentStart: TreeGrid -->

```razor

//In JavaScript
class PtoSummary {
    operate(data, allData, fieldName) {
        const result = [];
        result.push({
            key: 'totalOnPTO',
            label: 'Employees On PTO',
            summaryResult: this.count(allData.filter((rec) => rec['OnPTO']).map(r => r[fieldName]))
        });
        result.push({
            key: 'devs',
            label: 'Developers',
            summaryResult: this.count(allData.filter((rec) => rec[fieldName].includes('Developer') && rec['OnPTO']).map(r => r[fieldName]))
        });
        result.push({
            key: 'tl',
            label: 'Team Leads',
            summaryResult: this.count(allData.filter((rec) => rec[fieldName].includes('Team Lead') && rec['OnPTO']).map(r => r[fieldName]))
        });
        result.push({
            key: 'managers',
            label: 'Managers/Directors',
            summaryResult: this.count(allData.filter((rec) => (rec[fieldName].includes('Manager') || rec[fieldName].includes('Director')) && rec['OnPTO']).map(r => r[fieldName]))
        });
        result.push({
            key: 'ceo',
            label: 'CEO/President',
            summaryResult: this.count(allData.filter((rec) => (rec[fieldName].includes('CEO') || rec[fieldName].includes('President')) && rec['OnPTO']).map(r => r[fieldName]))
        });
        return result;
    }
}
```

<!-- ComponentEnd: TreeGrid -->

As seen in the examples, the base classes expose the `Operate` method, so you can choose to get all default summaries and modify the result, or calculate entirely new summary results.

The method returns a list of [`IgbSummaryResult`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSummaryResult.html).

and take optional parameters for calculating the summaries.
See [Custom summaries, which access all data](#custom-summaries-which-access-all-data) section below.

> [!Note]
> In order to calculate the summary row height properly, the Tree Grid needs the `Operate` method to always return an array of [`IgbSummaryResult`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSummaryResult.html) with the proper length even when the data is empty.

```razor
<IgbTreeGrid
        AutoGenerate="true"
        Name="treeGrid"
        @ref="treeGrid"
        Data="EmployeesFlatData"
        PrimaryKey="ID"
        ColumnInitScript="WebTreeGridCustomSummary">
</IgbTreeGrid>

// In Javascript
igRegisterScript("WebTreeGridCustomSummary", (event) => {
    if (event.detail.field === "Title") {
        event.detail.summaries = PtoSummary;
    }
}, false);
```

<!-- ComponentEnd: TreeGrid -->

### Custom summaries, which access all data

Now you can access all Tree Grid data inside the custom column summary. Two additional optional parameters are introduced in the SummaryOperand `Operate` method.
As you can see in the code snippet below the operate method has the following three parameters:

- columnData - gives you an array that contains the values only for the current column
- allGridData - gives you the whole grid data source
- fieldName - current column field

```razor
class PtoSummary {
    operate(data, allData, fieldName) {
        const result = [];
        result.push({
            key: 'totalOnPTO',
            label: 'Employees On PTO',
            summaryResult: this.count(allData.filter((rec) => rec['OnPTO']).map(r => r[fieldName]))
        });
        return result;
    }
}
```

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: Grid, TreeGrid -->

<!-- ComponentEnd: Grid, TreeGrid -->

<!-- ComponentStart: TreeGrid -->

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbTreeGrid
        Class="gridSize"
        AutoGenerate="false"
        Height="620px"
        Name="treeGrid"
        @ref="treeGrid"
        Id="treeGrid"
        Data="EmployeesFlatData"
        PrimaryKey="ID"
        ForeignKey="ParentID"
        ColumnInitScript="WebTreeGridCustomSummary">
            <IgbColumn
            Field="Name"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn Field="Age"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="Title"
            DataType="GridColumnDataType.String"
            HasSummary="true">
            </IgbColumn>            

            <IgbColumn
            Field="HireDate"
            DataType="GridColumnDataType.Date"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="OnPTO"
            DataType="GridColumnDataType.Boolean"
            HasSummary="true">
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

    private EmployeesFlatData _employeesFlatData = null;
    public EmployeesFlatData EmployeesFlatData
    {
        get
        {
            if (_employeesFlatData == null)
            {
                _employeesFlatData = new EmployeesFlatData();
            }
            return _employeesFlatData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class EmployeesFlatDataItem
{
    public double Age { get; set; }
    public string HireDate { get; set; }
    public double ID { get; set; }
    public string Name { get; set; }
    public string Phone { get; set; }
    public bool OnPTO { get; set; }
    public double ParentID { get; set; }
    public string Title { get; set; }
}

public class EmployeesFlatData
    : List<EmployeesFlatDataItem>
{
    public EmployeesFlatData()
    {
        this.Add(new EmployeesFlatDataItem() { Age = 55, HireDate = @"2008-03-20", ID = 1, Name = @"Johnathan Winchester", Phone = @"0251-031259", OnPTO = false, ParentID = -1, Title = @"Development Manager" });
        this.Add(new EmployeesFlatDataItem() { Age = 42, HireDate = @"2014-01-22", ID = 4, Name = @"Ana Sanders", Phone = @"(21) 555-0091", OnPTO = true, ParentID = -1, Title = @"CEO" });
        this.Add(new EmployeesFlatDataItem() { Age = 49, HireDate = @"2014-01-22", ID = 18, Name = @"Victoria Lincoln", Phone = @"(071) 23 67 22 20", OnPTO = true, ParentID = -1, Title = @"Accounting Manager" });
        // ... 15 more items
    }
}
```


<!-- ComponentEnd: TreeGrid -->

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

        DescriptionType="WebTreeGrid"
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
            Changed="WebTreeGridHasSummariesChange"
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
            ChangedScript="WebTreeGridSetGridSize">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="container vertical fill">
        <IgbTreeGrid
        AutoGenerate="false"
        Data="EmployeesNestedTreeData"
        Name="treeGrid"
        @ref="treeGrid"
        Id="treeGrid"
        PrimaryKey="ID"
        ForeignKey="ParentID">
            <IgbColumn
            Field="Name">
            </IgbColumn>

            <IgbColumn
            Field="Age"
            DataType="GridColumnDataType.Number"
            HasSummary="true"
            SummaryTemplateScript="WebTreeGridSummaryTemplate"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Title"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="HireDate"
            DataType="GridColumnDataType.Date">
            </IgbColumn>

            <IgbColumn
            Field="OnPTO"
            DataType="GridColumnDataType.Boolean"
            Editable="true"
            HasSummary="true">
            </IgbColumn>

        </IgbTreeGrid>

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
        var treeGrid = this.treeGrid;
        var column1 = this.column1;

        this.BindElements = () => {
            propertyEditorPanel1.Target = this.treeGrid;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditorPanel1;
    private IgbPropertyEditorPropertyDescription summaryRowHeightEditor;
    private IgbPropertyEditorPropertyDescription toggleSummariesEditor;
    private IgbPropertyEditorPropertyDescription sizeEditor;
    private IgbTreeGrid treeGrid;
    private IgbColumn column1;

    public void WebTreeGridHasSummariesChange(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        bool newValue = bool.Parse(args.NewValue.ToString());

        var treeGrid = this.treeGrid;
        var column1 = treeGrid.GetColumns().ElementAt(1);
        var column2 = treeGrid.GetColumns().ElementAt(2);
        var column3 = treeGrid.GetColumns().ElementAt(4);

        column1.HasSummary = newValue;
        column2.HasSummary = newValue;
        column3.HasSummary = newValue;
    }

    private EmployeesNestedTreeData _employeesNestedTreeData = null;
    public EmployeesNestedTreeData EmployeesNestedTreeData
    {
        get
        {
            if (_employeesNestedTreeData == null)
            {
                _employeesNestedTreeData = new EmployeesNestedTreeData();
            }
            return _employeesNestedTreeData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class EmployeesNestedTreeDataItem
{
    public double Age { get; set; }
    public string HireDate { get; set; }
    public double ID { get; set; }
    public string Name { get; set; }
    public string Phone { get; set; }
    public bool OnPTO { get; set; }
    public double ParentID { get; set; }
    public string Title { get; set; }
}

public class EmployeesNestedTreeData
    : List<EmployeesNestedTreeDataItem>
{
    public EmployeesNestedTreeData()
    {
        this.Add(new EmployeesNestedTreeDataItem() { Age = 55, HireDate = @"2008-03-20", ID = 1, Name = @"Johnathan Winchester", Phone = @"0251-031259", OnPTO = false, ParentID = -1, Title = @"Development Manager" });
        this.Add(new EmployeesNestedTreeDataItem() { Age = 42, HireDate = @"2014-01-22", ID = 4, Name = @"Ana Sanders", Phone = @"(21) 555-0091", OnPTO = true, ParentID = -1, Title = @"CEO" });
        this.Add(new EmployeesNestedTreeDataItem() { Age = 49, HireDate = @"2014-01-22", ID = 18, Name = @"Victoria Lincoln", Phone = @"(071) 23 67 22 20", OnPTO = true, ParentID = -1, Title = @"Accounting Manager" });
        // ... 15 more items
    }
}
```


## Disabled Summaries

The [`DisabledSummaries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DisabledSummaries) property provides precise per-column control over the Blazor Tree Grid summary feature. This property enables users to customize the summaries displayed for each column in the TreeGrid, ensuring that only the most relevant and meaningful data is shown. For example, you can exclude specific summary types, such as **\['count', 'min', 'max']** by specifying their summary keys in an array.

This property can also be modified **dynamically at runtime** through code, providing flexibility to adapt the TreeGrid's summaries to changing application states or user actions.

The following examples illustrate how to use the [`DisabledSummaries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DisabledSummaries) property to manage summaries for different columns and exclude specific default and custom summary types in the Blazor Tree Grid:

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

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

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

For `UnitPrice`, default summaries like `count`, `sum`, and `average` are disabled, leaving others like `min` and `max` active.

For `UnitsInStock`, custom summaries such as `discontinued` and `totalDiscontinued` are excluded using the [`DisabledSummaries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DisabledSummaries) property.

At runtime, summaries can also be dynamically disabled using the [`DisabledSummaries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DisabledSummaries) property. For example, you can set or update the property on specific columns programmatically to adapt the displayed summaries based on user actions or application state changes.

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <div class="wrapper">
            <span class="summaries-title">Disable Summaries for Column:</span>
            <div class="summaries-buttons">
                @if (treeGrid != null && columns?.Length > 0)
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
            <IgbTreeGrid AutoGenerate="false"
                         Data="OrdersTreeData"
                         Name="treeGrid"
                         @ref="treeGrid"
                         Id="treeGrid"
                         PrimaryKey="ID"
                         ForeignKey="ParentID"
                         ColumnInitScript="ColumnInitScript">
                <IgbColumn Field="ID"
                           Header="Order ID"
                           @ref="orderID"
                           HasSummary="true">
                </IgbColumn>

                <IgbColumn Field="Name"
                           Header="Order Product"
                           HasSummary="true"
                           Name="Order Product"
                           @ref="orderProduct">
                </IgbColumn>

                <IgbColumn Field="Units"
                           Header="Units"
                           DataType="GridColumnDataType.Number"
                           HasSummary="true"
                           Editable="true"
                           HeaderTemplateScript="WebTreeGridSummariesHeaderTemplate"
                           Name="Units"
                           @ref="units">
                </IgbColumn>

                <IgbColumn Field="UnitPrice"
                           Header="Unit Price"
                           DataType="GridColumnDataType.Number"
                           HasSummary="true"
                           Editable="true"
                           HeaderTemplateScript="WebTreeGridSummariesHeaderTemplate"
                           Name="Unit Price"
                           @ref="unitPrice">
                </IgbColumn>

                <IgbColumn Field="Price"
                           Header="Price"
                           DataType="GridColumnDataType.Number"
                           HasSummary="true"
                           Editable="true"
                           HeaderTemplateScript="WebTreeGridSummariesHeaderTemplate"
                           Name="Price"
                           @ref="price">
                </IgbColumn>

                <IgbColumn Field="Delivered"
                           Header="Delivered"
                           DataType="GridColumnDataType.Boolean"
                           HasSummary="true"
                           HeaderTemplateScript="WebTreeGridSummariesHeaderTemplate"
                           Name="Delivered"
                           @ref="delivered">
                </IgbColumn>

                <IgbColumn Field="OrderDate"
                           Header="Order Date"
                           DataType="GridColumnDataType.Date"
                           HasSummary="true"
                           HeaderTemplateScript="WebTreeGridSummariesHeaderTemplate"
                           Name="Order Date"
                           @ref="orderDate">
                </IgbColumn>
            </IgbTreeGrid>
        </div>
    </div>
</div>

@code {
    private IgbTreeGrid treeGrid;
    private IgbColumn orderID;
    private IgbColumn orderProduct;
    private IgbColumn units;
    private IgbColumn unitPrice;
    private IgbColumn price;
    private IgbColumn delivered;
    private IgbColumn orderDate;

    private IgbColumn[] columns { get; set; } = [];
    private IgbColumn currentColumn;

    private Dictionary<string, string> summaries = [];
    private List<string> currentColDisabledSummaries { get; set; } = new List<string>();

    private IgbDialog dialog;
    private string dialogTitle;

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

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            if (treeGrid != null)
            {
                columns = new IgbColumn[] { orderID, orderProduct, units, unitPrice, price, delivered, orderDate };
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
                this.currentColDisabledSummaries = currentColumn.DisabledSummaries.ToList();
            }
            await this.GetSummaryKeysAsync();
            await this.dialog.ShowAsync();
        }
    }

    private async Task GetSummaryKeysAsync()
    {
        if (currentColumn != null && currentColumn.HasSummary)
        {
            summaries = await JS.InvokeAsync<Dictionary<string, string>>("getTreeGridSummaries", currentColumn.Field);
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


<!-- ComponentStart: TreeGrid -->

## Child Summaries

The [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) supports separate summaries for the root nodes and for each nested child node level. Which summaries are shown is configurable using the [`SummaryCalculationMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SummaryCalculationMode) property. The child level summaries can be shown before or after the child nodes using the [`SummaryPosition`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SummaryPosition) property. Along with these two properties the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) exposes and [`ShowSummaryOnCollapse`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_ShowSummaryOnCollapse) property which allows you to determine whether the summary row stays visible when the parent node that refers to is collapsed.

The available values of the [`SummaryCalculationMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SummaryCalculationMode) property are:

- `RootLevelOnly` - Summaries are calculated only for the root level nodes.
- `ChildLevelsOnly` - Summaries are calculated only for the child levels.
- `RootAndChildLevels` - Summaries are calculated for both root and child levels. This is the default value.

The available values of the [`SummaryPosition`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SummaryPosition) property are:

- `Top` - The summary row appears before the list of child rows.
- `Bottom` - The summary row appears after the list of child rows. This is the default value.

The [`ShowSummaryOnCollapse`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_ShowSummaryOnCollapse) property is boolean. Its default value is set to **false**, which means that the summary row would be hidden when the parent row is collapsed. If the property is set to **true** the summary row stays visible when parent row is collapsed.

> [!Note]
> The [`SummaryPosition`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SummaryPosition) property applies only for the child level summaries. The root level summaries appear always fixed at the bottom of the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html).

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="options vertical">
        <IgbPropertyEditorPanel

        DescriptionType="WebTreeGrid"
        IsHorizontal="true"
        IsWrappingEnabled="false"
        Name="propertyEditorPanel1"
        @ref="propertyEditorPanel1">
            <IgbPropertyEditorPropertyDescription
            Name="SummaryCalculationModeEditor"
            @ref="summaryCalculationModeEditor"
            Label="Summary Calculation Mode"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "rootLevelOnly", "childLevelsOnly", "rootAndChildLevels" })"
            DropDownValues="@(new string[] { "rootLevelOnly", "childLevelsOnly", "rootAndChildLevels" })"
            ChangedScript="WebTreeGridChangeSummaryCalculationMode">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            Name="SummaryPositionEditor"
            @ref="summaryPositionEditor"
            Label="Summary Position"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "top", "bottom" })"
            DropDownValues="@(new string[] { "top", "bottom" })"
            ChangedScript="WebTreeGridChangeSummaryPosition">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            Label="Show summary row when group row is collapsed:"
            PropertyPath="ShowSummaryOnCollapse"
            Name="ShowSummaryOnCollapseEditor"
            @ref="showSummaryOnCollapseEditor">
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
            <IgbColumn
            Field="ID"
            Header="Order ID"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Name"
            Header="Order Product"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Price"
            DataType="GridColumnDataType.Number"
            HasSummary="true"
            Editable="true">
            </IgbColumn>

            <IgbColumn
            Field="Delivered"
            DataType="GridColumnDataType.Boolean">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Header="Order Date"
            DataType="GridColumnDataType.Date">
            </IgbColumn>

        </IgbTreeGrid>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditorPanel1 = this.propertyEditorPanel1;
        var summaryCalculationModeEditor = this.summaryCalculationModeEditor;
        var summaryPositionEditor = this.summaryPositionEditor;
        var showSummaryOnCollapseEditor = this.showSummaryOnCollapseEditor;
        var treeGrid = this.treeGrid;

        this.BindElements = () => {
            propertyEditorPanel1.Target = this.treeGrid;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditorPanel1;
    private IgbPropertyEditorPropertyDescription summaryCalculationModeEditor;
    private IgbPropertyEditorPropertyDescription summaryPositionEditor;
    private IgbPropertyEditorPropertyDescription showSummaryOnCollapseEditor;
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


<!-- ComponentEnd: TreeGrid -->

## Keyboard Navigation

The summary rows can be navigated with the following keyboard interactions:

- <kbd>UP</kbd> - navigates one cell up.
- <kbd>DOWN</kbd> - navigates one cell down.
- <kbd>LEFT</kbd> - navigates one cell left.
- <kbd>RIGHT</kbd> - navigates one cell right.
- <kbd>CTRL</kbd> + <kbd>LEFT</kbd> or <kbd>HOME</kbd> - navigates to the leftmost cell.
- <kbd>CTRL</kbd> + <kbd>RIGHT</kbd> or <kbd>END</kbd> - navigates to the rightmost cell.

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```razor
<IgbTreeGrid class="grid"></IgbTreeGrid>
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

<!-- ComponentStart: TreeGrid -->

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

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
            <IgbColumn
            Field="ID"
            Header="Order ID">
            </IgbColumn>

            <IgbColumn
            Field="Name"
            Header="Order Product"
            HasSummary="true"
            HeaderTemplateScript="WebTreeGridSummariesHeaderTemplate"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Category"
            Header="Category"
            HasSummary="true"
            HeaderTemplateScript="WebTreeGridSummariesHeaderTemplate"
            Name="column2"
            @ref="column2">
            </IgbColumn>

            <IgbColumn
            Field="Units"
            Header="Units"
            DataType="GridColumnDataType.Number"
            HasSummary="true"
            Editable="true"
            HeaderTemplateScript="WebTreeGridSummariesHeaderTemplate"
            Name="column3"
            @ref="column3">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Unit Price"
            DataType="GridColumnDataType.Number"
            HasSummary="true"
            Editable="true"
            HeaderTemplateScript="WebTreeGridSummariesHeaderTemplate"
            Name="column4"
            @ref="column4">
            </IgbColumn>

            <IgbColumn
            Field="Price"
            Header="Price"
            DataType="GridColumnDataType.Number"
            HasSummary="true"
            Editable="true"
            HeaderTemplateScript="WebTreeGridSummariesHeaderTemplate"
            Name="column5"
            @ref="column5">
            </IgbColumn>

            <IgbColumn
            Field="Delivered"
            Header="Delivered"
            DataType="GridColumnDataType.Boolean"
            HasSummary="true"
            HeaderTemplateScript="WebTreeGridSummariesHeaderTemplate"
            Name="column6"
            @ref="column6">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Header="Order Date"
            DataType="GridColumnDataType.Date"
            HasSummary="true"
            HeaderTemplateScript="WebTreeGridSummariesHeaderTemplate"
            Name="column7"
            @ref="column7">
            </IgbColumn>

        </IgbTreeGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var treeGrid = this.treeGrid;
        var column1 = this.column1;
        var column2 = this.column2;
        var column3 = this.column3;
        var column4 = this.column4;
        var column5 = this.column5;
        var column6 = this.column6;
        var column7 = this.column7;

    }

    private IgbTreeGrid treeGrid;
    private IgbColumn column1;
    private IgbColumn column2;
    private IgbColumn column3;
    private IgbColumn column4;
    private IgbColumn column5;
    private IgbColumn column6;
    private IgbColumn column7;

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


<!-- ComponentEnd: TreeGrid -->

## API References

- `SummaryOperand`
- `NumberSummaryOperand`
- `DateSummaryOperand`
- [`IgbColumnGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnGroup.html)
- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
