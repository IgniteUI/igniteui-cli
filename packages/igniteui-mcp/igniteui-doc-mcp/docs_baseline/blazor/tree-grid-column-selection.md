---
title: "Blazor Tree Grid Column Selection - Ignite UI for Blazor"
description: Learn how to configure column selection with Ignite UI for Blazor Tree Grid. This makes grid interactions much easier and faster than ever.
keywords: "Blazor, Tree Grid, IgbTreeGrid, Ignite UI for Blazor, Infragistics, column selection"
license: commercial
_canonicalLink: "grids/grid/column-selection"
llms:
  description: "The Blazor Tree Grid Column Selection feature in Ignite UI for Blazor offers a simplified and Excel-like way to select and highlight an entire column with a single click."
_componentKey: TreeGrid
_tocName: Column Selection
_premium: true
---
# Blazor Tree Grid Column Selection Overview

The Blazor Tree Grid Column Selection feature in Ignite UI for Blazor offers a simplified and Excel-like way to select and highlight an entire column with a single click. It can be enabled through the [`IgbTreeGrid.columnSelection`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid&member=columnSelection) input. Thanks to the rich API, the feature allows for easy manipulation of the selection state, data extraction from the selected fractions, data analysis operations, and visualizations.

## Blazor Tree Grid Column Selection Example

The sample below demonstrates the three types of `IgbTreeGrid`'s **column selection** behavior. Use the column selection dropdown below to enable each of the available selection modes.

*_Unit Price_ and _Discontinued_ are with disabled column selection.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="options vertical">
        <IgbPropertyEditorPanel
        Name="PropertyEditor"
        @ref="propertyEditor"

        DescriptionType="WebTreeGrid"
        IsHorizontal="true"
        IsWrappingEnabled="true">
            <IgbPropertyEditorPropertyDescription
            PropertyPath="ColumnSelection"
            Name="ColumnSelectionEditor"
            @ref="columnSelectionEditor"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "None", "Single", "Multiple", "MultipleCascade" })"
            DropDownValues="@(new string[] { "None", "Single", "Multiple", "MultipleCascade" })">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="container vertical fill">
        <IgbTreeGrid
        AutoGenerate="false"
        Name="treeGrid"
        @ref="treeGrid"
        Id="treeGrid"
        Data="FoodsData"
        PrimaryKey="ID"
        ForeignKey="ParentID">
            <IgbColumn
            Field="ID">
            </IgbColumn>

            <IgbColumn
            Field="Name">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Unit Price"
            Selectable="false">
            </IgbColumn>

            <IgbColumn
            Field="AddedDate"
            Header="Added Date">
            </IgbColumn>

            <IgbColumn
            Field="Discontinued"
            Selectable="false">
            </IgbColumn>

        </IgbTreeGrid>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditor = this.propertyEditor;
        var columnSelectionEditor = this.columnSelectionEditor;
        var treeGrid = this.treeGrid;

        this.BindElements = () => {
            propertyEditor.Target = this.treeGrid;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditor;
    private IgbPropertyEditorPropertyDescription columnSelectionEditor;
    private IgbTreeGrid treeGrid;

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

## Basic Usage

The column selection feature can be enabled through the [`IgbTreeGrid.columnSelection`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid&member=columnSelection) input, which takes [`IgbGridSelectionMode`](mcp:get_api_reference?platform=blazor&component=GridSelectionMode) values.

## Interactions

The default selection mode is `None`. If set to `Single` or `Multiple`, all of the presented columns will be [`IgbColumn.selectable`](mcp:get_api_reference?platform=blazor&component=IgbColumn&member=selectable). With that being said, in order to select a column, we just need to click on one, which will mark it as [`IgbColumn.selected`](mcp:get_api_reference?platform=blazor&component=IgbColumn&member=selected). If the column is not selectable, no selection style will be applied on the header, while hovering.

**Note:** 
The [Multi Column Headers](multi-column-headers.md) feature does not reflect on the [`IgbTreeGrid.selectable`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid&member=selectable) input. The `IgbColumnGroupComponent` is [`IgbTreeGrid.selectable`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid&member=selectable), if at least one of its children has the selection behavior enabled. In addition, the component is marked as [`IgbTreeGrid.selected`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid&member=selected) if all of its [`IgbTreeGrid.selectable`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid&member=selectable) descendants are [`IgbTreeGrid.selected`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid&member=selected).

*Under _Personal Details_ Column Group only column _ID_ and _Title_ are selectable.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbTreeGrid
        AutoGenerate="false"
        Name="treeGrid"
        @ref="treeGrid"
        Id="treeGrid"
        Data="EmployeesFlatDetails"
        PrimaryKey="ID"
        ForeignKey="ParentID"
        ColumnSelection="GridSelectionMode.Multiple">
            <IgbColumn
            Field="Name"
            DataType="GridColumnDataType.String"
            Width="auto">
            </IgbColumn>

            <IgbColumnGroup
            Header="General Information">
                <IgbColumn
                Field="HireDate"
                Header="Hire Date"
                DataType="GridColumnDataType.Date">
                </IgbColumn>

                <IgbColumnGroup
                Header="Personal Details">
                    <IgbColumn
                    Field="ID"
                    DataType="GridColumnDataType.Number">
                    </IgbColumn>

                    <IgbColumn
                    Field="Title"
                    DataType="GridColumnDataType.String">
                    </IgbColumn>

                    <IgbColumn
                    Field="Age"
                    DataType="GridColumnDataType.Number"
                    Selectable="false">
                    </IgbColumn>

                </IgbColumnGroup>

            </IgbColumnGroup>

            <IgbColumnGroup
            Header="Address Information">
                <IgbColumnGroup
                Header="Location">
                    <IgbColumn
                    Field="Country"
                    DataType="GridColumnDataType.String"
                    Selectable="false">
                    </IgbColumn>

                    <IgbColumn
                    Field="City"
                    DataType="GridColumnDataType.String">
                    </IgbColumn>

                    <IgbColumn
                    Field="Address"
                    DataType="GridColumnDataType.String">
                    </IgbColumn>

                </IgbColumnGroup>

                <IgbColumnGroup
                Header="Contact Information">
                    <IgbColumn
                    Field="Phone"
                    DataType="GridColumnDataType.String"
                    Selectable="false">
                    </IgbColumn>

                    <IgbColumn
                    Field="Fax"
                    DataType="GridColumnDataType.String"
                    Selectable="false">
                    </IgbColumn>

                    <IgbColumn
                    Field="PostalCode"
                    Header="Postal Code"
                    DataType="GridColumnDataType.String">
                    </IgbColumn>

                </IgbColumnGroup>

            </IgbColumnGroup>

        </IgbTreeGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var treeGrid = this.treeGrid;

    }

    private IgbTreeGrid treeGrid;

    private EmployeesFlatDetails _employeesFlatDetails = null;
    public EmployeesFlatDetails EmployeesFlatDetails
    {
        get
        {
            if (_employeesFlatDetails == null)
            {
                _employeesFlatDetails = new EmployeesFlatDetails();
            }
            return _employeesFlatDetails;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class EmployeesFlatDetailsItem
{
    public string Address { get; set; }
    public double Age { get; set; }
    public string City { get; set; }
    public string Country { get; set; }
    public string Fax { get; set; }
    public string HireDate { get; set; }
    public double ID { get; set; }
    public string Name { get; set; }
    public double ParentID { get; set; }
    public string Phone { get; set; }
    public double PostalCode { get; set; }
    public string Title { get; set; }
    public string LastName { get; set; }
    public string FullAddress { get; set; }
}

public class EmployeesFlatDetails
    : List<EmployeesFlatDetailsItem>
{
    public EmployeesFlatDetails()
    {
        this.Add(new EmployeesFlatDetailsItem() { Address = @"Obere Str. 57", Age = 55, City = @"Berlin", Country = @"Germany", Fax = @"030-0076545", HireDate = @"2008-03-20", ID = 1, Name = @"Johnathan Winchester", ParentID = -1, Phone = @"030-0074321", PostalCode = 12209, Title = @"Development Manager", LastName = @"Winchester", FullAddress = @"Obere Str. 57, Berlin, Germany" });
        this.Add(new EmployeesFlatDetailsItem() { Address = @"Avda. de la Constitución 2222", Age = 42, City = @"México D.F.", Country = @"Mexico", Fax = @"(51) 555-3745", HireDate = @"2014-01-22", ID = 4, Name = @"Ana Sanders", ParentID = -1, Phone = @"(5) 555-4729", PostalCode = 5021, Title = @"CEO", LastName = @"Sanders", FullAddress = @"Avda. de la Constitución 2222, México D.F., Mexico" });
        this.Add(new EmployeesFlatDetailsItem() { Address = @"Mataderos 2312", Age = 49, City = @"México D.F.", Country = @"Mexico", Fax = @"(5) 555-3995", HireDate = @"2014-01-22", ID = 18, Name = @"Victoria Lincoln", ParentID = -1, Phone = @"(5) 555-3932", PostalCode = 5023, Title = @"Accounting Manager", LastName = @"Lincoln", FullAddress = @"Mataderos 2312, México D.F., Mexico" });
        // ... 15 more items
    }
}
```

## Keyboard Combinations

**Note:** 
The keyboard combinations are available only when the grid [`IgbTreeGrid.columnSelection`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid&member=columnSelection) input is set to `multiple`.

There are two scenarios for keyboard navigation of the **Column Selection** feature:
- Multi-column selection - holding <kbd>CTRL</kbd> + <kbd>click</kbd> on every **selectable** header cell.
- Range column selection - holding <kbd>SHIFT</kbd> + <kbd>click</kbd> selects all **selectable** columns in between.

## API Manipulations

The **API** provides some additional capabilities when it comes to the **non-visible** columns such that, every **hidden** column could be marked as [`IgbColumn.selected`](mcp:get_api_reference?platform=blazor&component=IgbColumn&member=selected) by setting the corresponding **setter**.

**Note:** 
The above statement also applies to the `IgbColumnGroupComponent`, except that when the [`IgbTreeGrid.selected`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid&member=selected) property is changed it changes the state of its descendants.

More information regarding the API manipulations could be found in the [API References](#api-references) section.

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../grid/theming-grid.md).
In case you would like to change some of the colors, you need to set a `class` for the grid first:

```razor
<IgbTreeGrid class="grid"></IgbTreeGrid>
```

Then set the related CSS properties to this class:

```css
.grid {
    --ig-grid-row-selected-background: #0062A3;
    --ig-grid-row-selected-text-color: #ecaa53;
    --ig-grid-row-selected-hover-background: #0062A3;
    --ig-grid-header-selected-text-color: #ecaa53;
    --ig-grid-header-selected-background: #0062A3;
    --ig-grid-row-selected-hover-text-color: #ecaa53;
    --ig-grid-row-selected-hover-background: #0062A3;
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
        Data="EmployeesFlatDetails"
        PrimaryKey="ID"
        ForeignKey="ParentID"
        ColumnSelection="GridSelectionMode.Multiple">
            <IgbColumn
            Field="Name"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumnGroup
            Header="General Information">
                <IgbColumn
                Field="HireDate"
                Header="Hire Date"
                DataType="GridColumnDataType.Date">
                </IgbColumn>

                <IgbColumnGroup
                Header="Personal Details">
                    <IgbColumn
                    Field="ID"
                    DataType="GridColumnDataType.Number">
                    </IgbColumn>

                    <IgbColumn
                    Field="Title"
                    DataType="GridColumnDataType.String">
                    </IgbColumn>

                    <IgbColumn
                    Field="Age"
                    DataType="GridColumnDataType.Number"
                    Selectable="false">
                    </IgbColumn>

                </IgbColumnGroup>

            </IgbColumnGroup>

            <IgbColumnGroup
            Header="Address Information">
                <IgbColumnGroup
                Header="Location">
                    <IgbColumn
                    Field="Country"
                    DataType="GridColumnDataType.String"
                    Selectable="false">
                    </IgbColumn>

                    <IgbColumn
                    Field="City"
                    DataType="GridColumnDataType.String">
                    </IgbColumn>

                    <IgbColumn
                    Field="Address"
                    DataType="GridColumnDataType.String">
                    </IgbColumn>

                </IgbColumnGroup>

                <IgbColumnGroup
                Header="Contact Information">
                    <IgbColumn
                    Field="Phone"
                    DataType="GridColumnDataType.String"
                    Selectable="false">
                    </IgbColumn>

                    <IgbColumn
                    Field="Fax"
                    DataType="GridColumnDataType.String"
                    Selectable="false">
                    </IgbColumn>

                    <IgbColumn
                    Field="PostalCode"
                    Header="Postal Code"
                    DataType="GridColumnDataType.String">
                    </IgbColumn>

                </IgbColumnGroup>

            </IgbColumnGroup>

        </IgbTreeGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var treeGrid = this.treeGrid;

    }

    private IgbTreeGrid treeGrid;

    private EmployeesFlatDetails _employeesFlatDetails = null;
    public EmployeesFlatDetails EmployeesFlatDetails
    {
        get
        {
            if (_employeesFlatDetails == null)
            {
                _employeesFlatDetails = new EmployeesFlatDetails();
            }
            return _employeesFlatDetails;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class EmployeesFlatDetailsItem
{
    public string Address { get; set; }
    public double Age { get; set; }
    public string City { get; set; }
    public string Country { get; set; }
    public string Fax { get; set; }
    public string HireDate { get; set; }
    public double ID { get; set; }
    public string Name { get; set; }
    public double ParentID { get; set; }
    public string Phone { get; set; }
    public double PostalCode { get; set; }
    public string Title { get; set; }
    public string LastName { get; set; }
    public string FullAddress { get; set; }
}

public class EmployeesFlatDetails
    : List<EmployeesFlatDetailsItem>
{
    public EmployeesFlatDetails()
    {
        this.Add(new EmployeesFlatDetailsItem() { Address = @"Obere Str. 57", Age = 55, City = @"Berlin", Country = @"Germany", Fax = @"030-0076545", HireDate = @"2008-03-20", ID = 1, Name = @"Johnathan Winchester", ParentID = -1, Phone = @"030-0074321", PostalCode = 12209, Title = @"Development Manager", LastName = @"Winchester", FullAddress = @"Obere Str. 57, Berlin, Germany" });
        this.Add(new EmployeesFlatDetailsItem() { Address = @"Avda. de la Constitución 2222", Age = 42, City = @"México D.F.", Country = @"Mexico", Fax = @"(51) 555-3745", HireDate = @"2014-01-22", ID = 4, Name = @"Ana Sanders", ParentID = -1, Phone = @"(5) 555-4729", PostalCode = 5021, Title = @"CEO", LastName = @"Sanders", FullAddress = @"Avda. de la Constitución 2222, México D.F., Mexico" });
        this.Add(new EmployeesFlatDetailsItem() { Address = @"Mataderos 2312", Age = 49, City = @"México D.F.", Country = @"Mexico", Fax = @"(5) 555-3995", HireDate = @"2014-01-22", ID = 18, Name = @"Victoria Lincoln", ParentID = -1, Phone = @"(5) 555-3932", PostalCode = 5023, Title = @"Accounting Manager", LastName = @"Lincoln", FullAddress = @"Mataderos 2312, México D.F., Mexico" });
        // ... 15 more items
    }
}
```

## API References
[`IgbTreeGrid`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid)
[`IgbColumn`](mcp:get_api_reference?platform=blazor&component=IgbColumn)
## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
