---
title: Blazor Tree Grid for Ignite UI for Blazor for
_description: Use Blazor Tree Grid for essential UI operations. Hosts different UI controls for the Grid’s features - column hiding, pinning, excel exporting, etc.
_keywords: Blazor, Tree Grid, Tree Grid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["GridToolbar"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid", "GridToolbarActions"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/toolbar
_tocName: Toolbar
_premium: true
---

# Blazor Tree Grid Toolbar

The Ignite UI for Blazor Toolbar in is a container for UI operations in the Blazor Tree Grid. The Blazor toolbar is located at the top of the Blazor component, i.e., the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) and it matches its horizontal size. The toolbar container can host any custom content or set of predefined UI controls. The default set for the Blazor Tree Grid includes:

- Column Hiding
- Column Pinning
- Excel Exporting
- Advanced Filtering

The toolbar and the predefined UI components support Blazor events and expose API for developers.

<!-- ComponentStart: Grid, TreeGrid -->

## Blazor Toolbar Grid Example

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbTreeGrid
        AutoGenerate="false"
        Name="treeGrid"
        @ref="treeGrid"
        Id="treeGrid"
        Data="EmployeesFlatAvatars"
        PrimaryKey="ID"
        ForeignKey="ParentID"
        AllowAdvancedFiltering="true">
            <IgbGridToolbar
            >
                <IgbGridToolbarActions
                >
                    <IgbGridToolbarAdvancedFiltering
                    >
                    </IgbGridToolbarAdvancedFiltering>

                    <IgbGridToolbarHiding
                    >
                    </IgbGridToolbarHiding>

                    <IgbGridToolbarPinning
                    >
                    </IgbGridToolbarPinning>

                    <IgbGridToolbarExporter
                    >
                    </IgbGridToolbarExporter>

                </IgbGridToolbarActions>

            </IgbGridToolbar>

            <IgbColumn
            Field="Name"
            DataType="GridColumnDataType.String"
            BodyTemplateScript="WebTreeGridAvatarCellTemplate"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Title"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="ID"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="Age"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="HireDate"
            DataType="GridColumnDataType.Date">
            </IgbColumn>

        </IgbTreeGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var treeGrid = this.treeGrid;
        var column1 = this.column1;

    }

    private IgbTreeGrid treeGrid;
    private IgbColumn column1;

    private EmployeesFlatAvatars _employeesFlatAvatars = null;
    public EmployeesFlatAvatars EmployeesFlatAvatars
    {
        get
        {
            if (_employeesFlatAvatars == null)
            {
                _employeesFlatAvatars = new EmployeesFlatAvatars();
            }
            return _employeesFlatAvatars;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class EmployeesFlatAvatarsItem
{
    public double Age { get; set; }
    public string Avatar { get; set; }
    public string HireDate { get; set; }
    public double ID { get; set; }
    public string Name { get; set; }
    public double ParentID { get; set; }
    public string Title { get; set; }
}

public class EmployeesFlatAvatars
    : List<EmployeesFlatAvatarsItem>
{
    public EmployeesFlatAvatars()
    {
        this.Add(new EmployeesFlatAvatarsItem() { Age = 55, Avatar = @"https://dl.infragistics.com/x/img/people/men/25.png", HireDate = @"2008-03-20", ID = 1, Name = @"Johnathan Winchester", ParentID = -1, Title = @"Development Manager" });
        this.Add(new EmployeesFlatAvatarsItem() { Age = 42, Avatar = @"https://dl.infragistics.com/x/img/people/women/14.png", HireDate = @"2014-01-22", ID = 4, Name = @"Ana Sanders", ParentID = -1, Title = @"CEO" });
        this.Add(new EmployeesFlatAvatarsItem() { Age = 49, Avatar = @"https://dl.infragistics.com/x/img/people/women/12.png", HireDate = @"2014-01-22", ID = 18, Name = @"Victoria Lincoln", ParentID = -1, Title = @"Accounting Manager" });
        // ... 15 more items
    }
}
```


<!-- ComponentEnd: Grid, TreeGrid -->

The predefined [`IgbGridToolbarActions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarActions.html) and [`IgbGridToolbarTitle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarTitle.html) UI components are added inside the [`IgbGridToolbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbar.html) and this is all needed to have a toolbar providing default interactions with the corresponding Grid features:

<!-- Blazor -->

<!-- ComponentStart: TreeGrid -->

```razor
<IgbTreeGrid Data="Data" PrimaryKey="ID" ForeignKey="ParentID" AutoGenerate="true">
    <IgbGridToolbar>
        <IgbGridToolbarActions>
            <IgbGridToolbarAdvancedFiltering>
            </IgbGridToolbarAdvancedFiltering>
            <IgbGridToolbarHiding>
            </IgbGridToolbarHiding>
            <IgbGridToolbarPinning>
            </IgbGridToolbarPinning>
            <IgbGridToolbarExporter>
            </IgbGridToolbarExporter>
        </IgbGridToolbarActions>
    </IgbGridToolbar>
</IgbTreeGrid>
```

<!-- ComponentEnd: TreeGrid -->

<!-- end: Blazor -->

<!-- Blazor -->

<!-- end: Blazor -->

> \[!Note]
> As seen in the code snippet above, the predefined `Actions` UI components are wrapped in the [`IgbGridToolbarActions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarActions.html) container. This way, the toolbar title is aligned to the left of the toolbar and the actions are aligned to the right of the toolbar.

Of course, each of these UIs can be added independently of each other, or may not be added at all. This way the toolbar container will be rendered empty:

<!-- Blazor -->

<!-- ComponentStart: TreeGrid -->

```razor
<IgbTreeGrid Data="Data" PrimaryKey="ID" ForeignKey="ParentID" AutoGenerate="true">
    <IgbGridToolbar>
    </IgbGridToolbar>
</IgbTreeGrid>
```

<!-- ComponentEnd: TreeGrid -->

<!-- end: Blazor -->

<!-- Blazor -->

<!-- end: Blazor -->

For a comprehensive look over each of the default UI components, continue reading the **Features** section below.

## Features

The toolbar is great at separating logic/interactions which affects the grid as a whole.

As shown above, it can be configured to provide default components for controlling, column hiding, column pinning, advanced filtering and exporting data from the grid.

These features can be enabled independently from each other by following a pattern similar to the card component of the Ignite UI for Blazor suite.

Listed below are the main features of the toolbar with example code for each of them.

<!-- ComponentStart: Grid, TreeGrid -->

```razor
@using IgniteUI.Blazor.Controls
@inject IJSRuntime JS

<div class="container sample ig-typography">
    <div class="container vertical">

        <div class="control_panel">
            <IgbInput InputOcurred=ChangeTitle DisplayType=@InputType.Text Label="Toolbar title" Value="Tree grid toolbar" />
            <IgbSwitch CheckedChanged="EnableFiltering" Checked=true>Advanced Filtering</IgbSwitch>
            <IgbSwitch CheckedChanged="EnableHiding" Checked=true>Column hiding</IgbSwitch>
            <IgbSwitch CheckedChanged="EnablePinning" Checked=true>Column pinning</IgbSwitch>
            <IgbSwitch CheckedChanged="EnableExport" Checked=true>Exporting</IgbSwitch>
        </div>

        <IgbTreeGrid
            AutoGenerate="false"
            Id="treeGrid"
            Data="EmployeesFlatAvatars"
            PrimaryKey="ID"
            ForeignKey="ParentID"
        >
            <IgbGridToolbar>
                <IgbGridToolbarTitle>
                    <span>@($"{this.title}")</span>
                </IgbGridToolbarTitle>
                <IgbGridToolbarActions>
                    <IgbGridToolbarAdvancedFiltering></IgbGridToolbarAdvancedFiltering>
                    <IgbGridToolbarHiding></IgbGridToolbarHiding>
                    <IgbGridToolbarPinning></IgbGridToolbarPinning>
                    <IgbGridToolbarExporter></IgbGridToolbarExporter>
                </IgbGridToolbarActions>
            </IgbGridToolbar>
            
            <IgbColumn
                Field="Name"
                DataType="GridColumnDataType.String"
                BodyTemplateScript="WebTreeGridAvatarCellTemplate"
            ></IgbColumn>
            <IgbColumn
                Field="Title"
                DataType="GridColumnDataType.String"
            ></IgbColumn>
            <IgbColumn
                Field="ID"
                DataType="GridColumnDataType.Number"
            ></IgbColumn>
            <IgbColumn
                Field="Age"
                DataType="GridColumnDataType.Number"
            ></IgbColumn>
            <IgbColumn
                Field="HireDate"
                DataType="GridColumnDataType.Date"
            ></IgbColumn>
            
        </IgbTreeGrid>

    </div>
</div>

@code {

    public string title = "Tree grid toolbar";

    public void ChangeTitle(IgbComponentValueChangedEventArgs args)
    {
        this.title = args.Detail;
    }

    public async void EnableFiltering(bool isChecked)
    {
        await JS.InvokeAsync<string>("EnableFiltering");
    }

    public async void EnableHiding(bool isChecked)
    {
        await JS.InvokeAsync<string>("EnableHiding");
    }

    public async void EnablePinning(bool isChecked)
    {
        await JS.InvokeAsync<string>("EnablePinning");
    }

    public async void EnableExport(bool isChecked)
    {
        await JS.InvokeAsync<string>("EnableExport");
    }

    private EmployeesFlatAvatars _employeesFlatAvatars = null;
    public EmployeesFlatAvatars EmployeesFlatAvatars
    {
        get
        {
            if (_employeesFlatAvatars == null)
            {
                _employeesFlatAvatars = new EmployeesFlatAvatars();
            }
            return _employeesFlatAvatars;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class EmployeesFlatAvatarsItem
{
    public double Age { get; set; }
    public string Avatar { get; set; }
    public string HireDate { get; set; }
    public double ID { get; set; }
    public string Name { get; set; }
    public double ParentID { get; set; }
    public string Title { get; set; }
}

public class EmployeesFlatAvatars
    : List<EmployeesFlatAvatarsItem>
{
    public EmployeesFlatAvatars()
    {
        this.Add(new EmployeesFlatAvatarsItem() { Age = 55, Avatar = @"https://dl.infragistics.com/x/img/people/men/25.png", HireDate = @"2008-03-20", ID = 1, Name = @"Johnathan Winchester", ParentID = -1, Title = @"Development Manager" });
        this.Add(new EmployeesFlatAvatarsItem() { Age = 42, Avatar = @"https://dl.infragistics.com/x/img/people/women/14.png", HireDate = @"2014-01-22", ID = 4, Name = @"Ana Sanders", ParentID = -1, Title = @"CEO" });
        this.Add(new EmployeesFlatAvatarsItem() { Age = 49, Avatar = @"https://dl.infragistics.com/x/img/people/women/12.png", HireDate = @"2014-01-22", ID = 18, Name = @"Victoria Lincoln", ParentID = -1, Title = @"Accounting Manager" });
        // ... 15 more items
    }
}
```


<!-- ComponentEnd: Grid, TreeGrid -->

### Title

Setting a title for the toolbar in your grid is achieved by using the [`IgbGridToolbarTitle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarTitle.html).

Users can provide anything from simple text to more involved templates.

<!-- Blazor -->

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```razor
<IgbGridToolbar>
    <IgbGridToolbarTitle>Grid toolbar title</IgbGridToolbarTitle>
</IgbGridToolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

<!-- end: Blazor -->

### Actions

The [`IgbGridToolbarActions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarActions.html) is where users can place actions/interactions in relation to the parent grid.
As with the title portion of the toolbar, users can provide anything inside that template part, including the default
toolbar interaction components.

<!-- Blazor -->

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```razor
<IgbGridToolbar>
    <IgbGridToolbarActions>
        <!--...-->
    </IgbGridToolbarActions>
</IgbGridToolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

<!-- end: Blazor -->

### Column Pinning

The [`IgbGridToolbarPinning`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarPinning.html) component provides the default UI for interacting with column pinning in the grid.

The component is setup to work out of the box with the parent grid containing the toolbar as well as several input properties for customizing the UI, such as the component title, the placeholder for the component input and the height of the dropdown itself.

<!-- Blazor -->

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```razor
<IgbGridToolbar>
    <IgbGridToolbarActions>
        <IgbGridToolbarPinning Title="Grid pinned columns" Prompt="Filter column collection" ColumnListHeight="400px"></IgbGridToolbarPinning>
    </IgbGridToolbarActions>
</IgbGridToolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

<!-- end: Blazor -->

### Column Hiding

The [`IgbGridToolbarHiding`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarHiding.html) provides the default UI for interacting with column hiding. Exposes the same input properties for customizing the UI, such as the component
title, the placeholder for the component input and the height of the dropdown itself.

<!-- Blazor -->

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```razor
<IgbGridToolbar>
    <IgbGridToolbarActions>
        <IgbGridToolbarHiding Title="Grid column hiding" Prompt="Filter column collection" ColumnListHeight="400px"></IgbGridToolbarHiding>
    </IgbGridToolbarActions>
</IgbGridToolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

<!-- end: Blazor -->

### Advanced Filtering

Toolbar Advanced Filtering component provides the default UI for the Advanced Filtering feature. The component exposes a way to change the default text of the button.

<!-- Blazor -->

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```razor
<IgbGridToolbar>
    <IgbGridToolbarActions>
        <IgbGridToolbarAdvancedFiltering></IgbGridToolbarAdvancedFiltering>
    </IgbGridToolbarActions>
</IgbGridToolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

<!-- end: Blazor -->

### Data Exporting

As with the rest of the toolbar actions, exporting is provided through a [`IgbGridToolbarExporter`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarExporter.html) out of the box.

The toolbar exporter component exposes several input properties for customizing both the UI and the exporting experience.

These range from changing the display text, to enabling/disabling options in the dropdown to customizing the name of the generated file. For full reference, consult the API documentation for the `ToolbarExporter`.

Here is a snippet showing some of the options which can be customized through the Blazor template:

<!-- Blazor -->

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```razor
<IgbGridToolbar>
    <IgbGridToolbarActions>
        <IgbGridToolbarExporter ExportCSV="true" ExportExcel="true" Filename="exported_data"></IgbGridToolbarExporter>
    </IgbGridToolbarActions>
</IgbGridToolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

<!-- end: Blazor -->

In addition to changing the exported filename, the user can further configure the exporter options by waiting for the `ToolbarExporting` event and customizing the options entry in the event properties.

> \[!Note]
> By default when exporting to CSV the exporter exports using a comma separator and uses a '.csv' extension for the output file.
> You can customize these exporting parameters by subscribing to events of the exporter or changing the values of the exporter options fields.
> You can also cancel the export process by setting the cancel field of the event args to true.

The following code snippet demonstrates subscribing to the toolbar exporting event and configuring the exporter options:

```razor
<IgbTreeGrid ToolbarExportingScript="ConfigureExport"></IgbTreeGrid>

// In Javascript
igRegisterScript("ConfigureExport", (evt) => {
    const args = evt.detail;
    const options = args.options;
    options.fileName = `Report_${new Date().toDateString()}`;
    args.exporter.columnExporting.subscribe((columnArgs) => {
        columnArgs.cancel = columnArgs.header === 'Name';
    });
}, false);
```

<!-- ComponentEnd: TreeGrid -->

The following sample demonstrates how to customize the exported files:

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbTreeGrid
        AutoGenerate="false"
        Name="treeGrid"
        @ref="treeGrid"
        Id="treeGrid"
        Data="EmployeesFlatAvatars"
        PrimaryKey="ID"
        ForeignKey="ParentID"
        ToolbarExportingScript="WebTreeGridToolbarExporting">
            <IgbGridToolbar
            >
                <IgbGridToolbarActions
                >
                    <IgbGridToolbarExporter
                    >
                    </IgbGridToolbarExporter>

                </IgbGridToolbarActions>

            </IgbGridToolbar>

            <IgbColumn
            Field="Name"
            DataType="GridColumnDataType.String"
            BodyTemplateScript="WebTreeGridAvatarCellTemplate"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Title"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="ID"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="Age"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="HireDate"
            DataType="GridColumnDataType.Date">
            </IgbColumn>

        </IgbTreeGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var treeGrid = this.treeGrid;
        var column1 = this.column1;

    }

    private IgbTreeGrid treeGrid;
    private IgbColumn column1;

    private EmployeesFlatAvatars _employeesFlatAvatars = null;
    public EmployeesFlatAvatars EmployeesFlatAvatars
    {
        get
        {
            if (_employeesFlatAvatars == null)
            {
                _employeesFlatAvatars = new EmployeesFlatAvatars();
            }
            return _employeesFlatAvatars;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class EmployeesFlatAvatarsItem
{
    public double Age { get; set; }
    public string Avatar { get; set; }
    public string HireDate { get; set; }
    public double ID { get; set; }
    public string Name { get; set; }
    public double ParentID { get; set; }
    public string Title { get; set; }
}

public class EmployeesFlatAvatars
    : List<EmployeesFlatAvatarsItem>
{
    public EmployeesFlatAvatars()
    {
        this.Add(new EmployeesFlatAvatarsItem() { Age = 55, Avatar = @"https://dl.infragistics.com/x/img/people/men/25.png", HireDate = @"2008-03-20", ID = 1, Name = @"Johnathan Winchester", ParentID = -1, Title = @"Development Manager" });
        this.Add(new EmployeesFlatAvatarsItem() { Age = 42, Avatar = @"https://dl.infragistics.com/x/img/people/women/14.png", HireDate = @"2014-01-22", ID = 4, Name = @"Ana Sanders", ParentID = -1, Title = @"CEO" });
        this.Add(new EmployeesFlatAvatarsItem() { Age = 49, Avatar = @"https://dl.infragistics.com/x/img/people/women/12.png", HireDate = @"2014-01-22", ID = 18, Name = @"Victoria Lincoln", ParentID = -1, Title = @"Accounting Manager" });
        // ... 15 more items
    }
}
```


## Exporting Indicator

When using the default toolbar exporter component, whenever an export operation takes place the toolbar will show a progress indicator while the operation is in progress.

Moreover, users can set the toolbar [`ShowProgress`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbar.html#IgniteUI_Blazor_Controls_IgbGridToolbar_ShowProgress) property and use for their own long running operations or just as another way to signify an action taking place in the grid.

The sample belows uses has significant amount of data, in order to increase the time needed for data export so the progressbar can be seen. Additionally it has another button that simulates a long running operation in the grid:

<!-- NOTE this sample is differed -->

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbTreeGrid
            AutoGenerate="false"
            Data="OrdersTreeData"
            PrimaryKey="ID"
            ForeignKey="ParentID"
        >
            <IgbGridToolbar @ref="toolbar">
                <IgbButton @onclick="ShowProgress">
                  Simulate long running operation
                </IgbButton>
                <IgbGridToolbarActions>
                  <IgbGridToolbarExporter></IgbGridToolbarExporter>
                </IgbGridToolbarActions>
            </IgbGridToolbar>

            <IgbColumn
                Field="ID"
                Header="Order ID"
                DataType="GridColumnDataType.String"
            ></IgbColumn>
            <IgbColumn
                Field="Name"
                Header="Order Product"
                DataType="GridColumnDataType.String"
            ></IgbColumn>
            <IgbColumn
                Field="Category"
                Header="Category"
                DataType="GridColumnDataType.String"
            ></IgbColumn>
            <IgbColumn
                Field="Units"
                Header="Units"
                DataType="GridColumnDataType.Number"
            ></IgbColumn>
            <IgbColumn
                Field="UnitPrice"
                Header="Unit Price"
                DataType="GridColumnDataType.Currency"
            ></IgbColumn>
            <IgbColumn
                Field="Price"
                Header="Price"
                DataType="GridColumnDataType.Currency"
            ></IgbColumn>
            <IgbColumn
                Field="OrderDate"
                Header="Order Date"
                DataType="GridColumnDataType.Date"
            ></IgbColumn>
        </IgbTreeGrid>

    </div>
</div>

@code {

    private IgbGridToolbar toolbar;

    private async void ShowProgress()
    {
        this.toolbar.ShowProgress = true;

        await Task.Delay(5000);

        this.toolbar.ShowProgress = false;
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


<!-- Angular, WebComponents, Blazor -->

## Custom Content

If the actions part of the toolbar component is not sufficient for a particular use case, the toolbar itself has a general content projection where users can provide additional UI. If the user needs the respective grid instance for API calls or bindings, they can create a template reference variable.

Here is a sample snippet:

<!-- Blazor -->

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```razor
<IgbTreeGrid>
    <IgbGridToolbar>
        <IgbGridToolbarTitle>title</IgbGridToolbarTitle>
        @*
            Everything between the toolbar tags except the default toolbar components
            will be projected as custom content.
        *@
        <IgbGridToolbarActions>
        </IgbGridToolbarActions>
    </IgbGridToolbar>
</IgbTreeGrid>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

<!-- end: Blazor -->

The following sample demonstrates how to add an additional button to the toolbar to clear the sorting set by clicking on the columns' headers:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">

        <IgbTreeGrid
            AutoGenerate="false"
            Name="treeGrid"
            @ref="treeGrid"
            Id="treeGrid"
            Data="EmployeesFlatAvatars"
            PrimaryKey="ID"
            ForeignKey="ParentID"
        >
            <IgbGridToolbar>
                <IgbGridToolbarTitle>
                    <span>Tree Grid Toolbar</span>
                </IgbGridToolbarTitle>
                <IgbButton @onclick="ClearSort">
                    <span slot="prefix">
                        <IgbIcon @ref="iconRef" IconName="clear" Collection="material"></IgbIcon>
                    </span>
                    Clear Sort
                </IgbButton>
                <IgbGridToolbarActions>
                    <IgbGridToolbarHiding></IgbGridToolbarHiding>
                    <IgbGridToolbarPinning></IgbGridToolbarPinning>
                    <IgbGridToolbarExporter></IgbGridToolbarExporter>
                </IgbGridToolbarActions>
            </IgbGridToolbar>
            
            <IgbColumn
                Field="Name"
                DataType="GridColumnDataType.String"
                BodyTemplateScript="WebTreeGridAvatarCellTemplate"
            ></IgbColumn>
            <IgbColumn
                Field="Title"
                DataType="GridColumnDataType.String"
                Sortable="true"
            ></IgbColumn>
            <IgbColumn
                Field="ID"
                DataType="GridColumnDataType.Number"
                Sortable="true"
            ></IgbColumn>
            <IgbColumn
                Field="Age"
                DataType="GridColumnDataType.Number"
                Sortable="true"
            ></IgbColumn>
            <IgbColumn
                Field="HireDate"
                DataType="GridColumnDataType.Date"
                Sortable="true"
            ></IgbColumn>
            
        </IgbTreeGrid>

    </div>
</div>

@code {

    private string clearIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z'/></svg>";

    private IgbTreeGrid treeGrid;
    private IgbIcon iconRef;

    protected override void OnAfterRender(bool firstRender)
    {
        if (this.iconRef != null && firstRender)
        {
            this.iconRef.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.iconRef.RegisterIconFromText("clear", clearIcon, "material");
            }));
        }
    }

    private void ClearSort()
    {
        this.treeGrid.ClearSort("");
    }

    private EmployeesFlatAvatars _employeesFlatAvatars = null;
    public EmployeesFlatAvatars EmployeesFlatAvatars
    {
        get
        {
            if (_employeesFlatAvatars == null)
            {
                _employeesFlatAvatars = new EmployeesFlatAvatars();
            }
            return _employeesFlatAvatars;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class EmployeesFlatAvatarsItem
{
    public double Age { get; set; }
    public string Avatar { get; set; }
    public string HireDate { get; set; }
    public double ID { get; set; }
    public string Name { get; set; }
    public double ParentID { get; set; }
    public string Title { get; set; }
}

public class EmployeesFlatAvatars
    : List<EmployeesFlatAvatarsItem>
{
    public EmployeesFlatAvatars()
    {
        this.Add(new EmployeesFlatAvatarsItem() { Age = 55, Avatar = @"https://dl.infragistics.com/x/img/people/men/25.png", HireDate = @"2008-03-20", ID = 1, Name = @"Johnathan Winchester", ParentID = -1, Title = @"Development Manager" });
        this.Add(new EmployeesFlatAvatarsItem() { Age = 42, Avatar = @"https://dl.infragistics.com/x/img/people/women/14.png", HireDate = @"2014-01-22", ID = 4, Name = @"Ana Sanders", ParentID = -1, Title = @"CEO" });
        this.Add(new EmployeesFlatAvatarsItem() { Age = 49, Avatar = @"https://dl.infragistics.com/x/img/people/women/12.png", HireDate = @"2014-01-22", ID = 18, Name = @"Victoria Lincoln", ParentID = -1, Title = @"Accounting Manager" });
        // ... 15 more items
    }
}
```


<!-- end: Angular, WebComponents, Blazor -->

<!-- WebComponents, Blazor, React -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```razor
<IgbTreeGrid class="grid"></IgbTreeGrid>
```

Then set the related CSS properties for that class:

```css
.grid {
    --ig-grid-toolbar-background-color: #2a2b2f;
    --ig-grid-toolbar-title-text-color: #ffcd0f;
    --ig-grid-toolbar-dropdown-background: #2a2b2f;
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
        Data="EmployeesFlatAvatars"
        PrimaryKey="ID"
        ForeignKey="ParentID"
        AllowAdvancedFiltering="true">
            <IgbGridToolbar
            >
                <IgbGridToolbarActions
                >
                    <IgbGridToolbarAdvancedFiltering
                    >
                    </IgbGridToolbarAdvancedFiltering>

                    <IgbGridToolbarHiding
                    >
                    </IgbGridToolbarHiding>

                    <IgbGridToolbarPinning
                    >
                    </IgbGridToolbarPinning>

                    <IgbGridToolbarExporter
                    >
                    </IgbGridToolbarExporter>

                </IgbGridToolbarActions>

            </IgbGridToolbar>

            <IgbColumn
            Field="Name"
            DataType="GridColumnDataType.String"
            BodyTemplateScript="WebTreeGridAvatarCellTemplate"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Title"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="ID"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="Age"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="HireDate"
            DataType="GridColumnDataType.Date">
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

    private EmployeesFlatAvatars _employeesFlatAvatars = null;
    public EmployeesFlatAvatars EmployeesFlatAvatars
    {
        get
        {
            if (_employeesFlatAvatars == null)
            {
                _employeesFlatAvatars = new EmployeesFlatAvatars();
            }
            return _employeesFlatAvatars;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class EmployeesFlatAvatarsItem
{
    public double Age { get; set; }
    public string Avatar { get; set; }
    public string HireDate { get; set; }
    public double ID { get; set; }
    public string Name { get; set; }
    public double ParentID { get; set; }
    public string Title { get; set; }
}

public class EmployeesFlatAvatars
    : List<EmployeesFlatAvatarsItem>
{
    public EmployeesFlatAvatars()
    {
        this.Add(new EmployeesFlatAvatarsItem() { Age = 55, Avatar = @"https://dl.infragistics.com/x/img/people/men/25.png", HireDate = @"2008-03-20", ID = 1, Name = @"Johnathan Winchester", ParentID = -1, Title = @"Development Manager" });
        this.Add(new EmployeesFlatAvatarsItem() { Age = 42, Avatar = @"https://dl.infragistics.com/x/img/people/women/14.png", HireDate = @"2014-01-22", ID = 4, Name = @"Ana Sanders", ParentID = -1, Title = @"CEO" });
        this.Add(new EmployeesFlatAvatarsItem() { Age = 49, Avatar = @"https://dl.infragistics.com/x/img/people/women/12.png", HireDate = @"2014-01-22", ID = 18, Name = @"Victoria Lincoln", ParentID = -1, Title = @"Accounting Manager" });
        // ... 15 more items
    }
}
```


<!-- end: WebComponents, Blazor, React -->

## API References

The Grid Toolbar service has a few more APIs to explore, which are listed below.

- [`IgbGridToolbarAdvancedFiltering`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarAdvancedFiltering.html)
- [`IgbGridToolbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbar.html)
- [`IgbGridToolbarExporter`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarExporter.html)
- [`IgbGridToolbarHiding`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarHiding.html)
- [`IgbGridToolbarPinning`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarPinning.html)
- [`IgbGridToolbarTitle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarTitle.html)

[`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) Events:

- `ToolbarExporting`

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
