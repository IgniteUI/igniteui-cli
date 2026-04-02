---
title: Blazor Tree Grid Multi-Column Headers - Ignite UI for Blazor
_description: Start grouping column headers by placing them under a common hierarchical header with the help of Ignite UI for Blazor grid and combine them into multi headers.
_keywords: Multi-Column Headers, Blazor, Tree Grid, IgbTreeGrid, Ignite UI for Blazor, Infragistics
_license: commercial
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
mentionedTypes: ["Column"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/multi-column-headers
_tocName: Multi-Column Headers
_premium: true
---

# Blazor Tree Grid Multi-Column Headers Overview

The Ignite UI for Blazor Multi-Column Headers feature in Blazor Tree Grid allows you to group columns by placing them under a common multi-header. Each multi-column headers group in the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) could be a representation of combinations between other groups or columns. This feature is particularly useful when dealing with large datasets where scrolling horizontally might be cumbersome.

## Blazor Tree Grid Multi-Column Headers Example

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
            ValueType="PropertyEditorValueType.Button"
            PrimitiveValue="@("Toggle First Group Pinned")"
            ButtonClicked="WebTreeGridPinFirstGroupToggle"
            Name="propertyEditorPropertyDescription1"
            @ref="propertyEditorPropertyDescription1">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            ValueType="PropertyEditorValueType.Button"
            PrimitiveValue="@("Toggle First Group Hidden")"
            ButtonClicked="WebTreeGridHideFirstGroupToggle"
            Name="propertyEditorPropertyDescription2"
            @ref="propertyEditorPropertyDescription2">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="container vertical fill">
        <IgbTreeGrid
        AutoGenerate="false"
        Data="EmployeesFlatDetails"
        Name="treeGrid"
        @ref="treeGrid"
        Id="treeGrid"
        PrimaryKey="ID"
        ForeignKey="ParentID">
            <IgbColumn
            Field="Name"
            Resizable="true">
            </IgbColumn>

            <IgbColumnGroup
            Header="General Information">
                <IgbColumn
                Field="HireDate"
                Sortable="true"
                Resizable="true">
                </IgbColumn>

                <IgbColumnGroup
                Header="Personal Details">
                    <IgbColumn
                    Field="ID"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Title"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Age"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                </IgbColumnGroup>

            </IgbColumnGroup>

            <IgbColumnGroup
            Header="Address Information">
                <IgbColumnGroup
                Header="Location">
                    <IgbColumn
                    Field="Country"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="City"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Address"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                </IgbColumnGroup>

                <IgbColumnGroup
                Header="Contact Information">
                    <IgbColumn
                    Field="Phone"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Fax"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="PostalCode"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                </IgbColumnGroup>

            </IgbColumnGroup>

        </IgbTreeGrid>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditor = this.propertyEditor;
        var propertyEditorPropertyDescription1 = this.propertyEditorPropertyDescription1;
        var propertyEditorPropertyDescription2 = this.propertyEditorPropertyDescription2;
        var treeGrid = this.treeGrid;

        this.BindElements = () => {
            propertyEditor.Target = this.treeGrid;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditor;
    private IgbPropertyEditorPropertyDescription propertyEditorPropertyDescription1;
    private IgbPropertyEditorPropertyDescription propertyEditorPropertyDescription2;
    private IgbTreeGrid treeGrid;

    public void WebTreeGridPinFirstGroupToggle(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var columnGroup = this.treeGrid.GetColumns().ElementAt(1);
        columnGroup.Pinned = !columnGroup.Pinned;
    }

    public void WebTreeGridHideFirstGroupToggle(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var columnGroup = this.treeGrid.GetColumns().ElementAt(1);
        columnGroup.Hidden = !columnGroup.Hidden;
    }

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


The declaration of multi-column headers is achieved by wrapping a set of columns into an [`IgbColumnGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnGroup.html) component with [`Header`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Header) title information passed.

<!-- ComponentStart: TreeGrid -->

```razor
<IgbTreeGrid Data=data AllowFiltering=true PrimaryKey="ID" ForeignKey="ParentID">
    <IgbColumnGroup Header="Contact Information">
        <IgbColumn Field="Phone" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
        <IgbColumn Field="Fax" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
        <IgbColumn Field="PostalCode" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
    </IgbColumnGroup>
</IgbTreeGrid>
```

<!-- ComponentEnd: TreeGrid -->

For achieving `n-th` level of nested headers, the declaration above should be followed. So by nesting [`IgbColumnGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnGroup.html) leads to the desired result.

<!-- ComponentStart: TreeGrid -->

```razor
<IgbTreeGrid Data=data AllowFiltering=true PrimaryKey="ID" ForeignKey="ParentID">
    <IgbColumnGroup Header="General Information">
        <IgbColumn Field="HireDate" Sortable=true Resizable=true Movable=true DataType="GridColumnDataType.Date"></IgbColumn>
        <IgbColumnGroup Header="Person Details" Movable=true>
            <IgbColumn Field="ID" Sortable=true Resizable=true Movable=true DataType="GridColumnDataType.Number"></IgbColumn>
            <IgbColumn Field="Title" Sortable=true Resizable=true Movable=true DataType="GridColumnDataType.String"></IgbColumn>
            <IgbColumn Field="Age" Sortable=true Resizable=true Movable=true DataType="GridColumnDataType.Number"></IgbColumn>
        </IgbColumnGroup>
    </IgbColumnGroup>
</IgbTreeGrid>
```

<!-- ComponentEnd: TreeGrid -->

Every [`IgbColumnGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnGroup.html) supports [moving](column-moving.md), [pinning](column-pinning.md) and [hiding](column-hiding.md).

> [!Note]
> When there is a set of columns and column groups, pinning works only for top level column parents. More specifically pinning per nested column groups or columns is not allowed. <br />
> Moving between columns and column groups is allowed only when they are at the same level in the hierarchy and both are in the same `group`. <br />
> When `columns/column-groups` are not wrapped by current `group` which means they are **top level** `columns`, moving is allowed between whole visible columns.

<!-- ComponentStart: TreeGrid -->

```razor
<IgbTreeGrid Data=data AllowFiltering=true PrimaryKey="ID" ForeignKey="ParentID">
    <IgbColumnGroup Header="General Information">
        <IgbColumn Field="Phone" Sortable=true Resizable=true Movable=true DataType="GridColumnDataType.String"></IgbColumn>
    </IgbColumnGroup>
    <IgbColumn Field="Name" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="Title" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="Age" Sortable=true Resizable=true DataType="GridColumnDataType.Number"></IgbColumn>
</IgbTreeGrid>
```

<!-- ComponentEnd: TreeGrid -->

## Multi-Column Header Template

Each of the column groups of the grid can be templated separately. The column group expects `RenderFragment` for the [`HeaderTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_HeaderTemplate) property.
The expression is provided with the column group object as a context.

```razor
<IgbColumnGroup Header="Address Information" HeaderTemplate="Template">
</IgbColumnGroup>

@code {
    public RenderFragment<IgbColumnTemplateContext> Template = (ctx) => {
        string value = ctx.Column.Header.ToUpper();
        return @<span>@value</span>;
    };
}
```

If you want to re-use a single template for several column groups, you could set the [`HeaderTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_HeaderTemplate) property of the column group like this:

```razor
<IgbColumnGroup Header="General Information" HeaderTemplate="Template">
</IgbColumnGroup>
<IgbColumnGroup Header="Address Information" HeaderTemplate="Template">
</IgbColumnGroup>

@code {
    public RenderFragment<IgbColumnTemplateContext> Template = (ctx) => {
        string value = ctx.Column.Header.ToUpper();
        return @<span>@value</span>;
    };
}
```

> [!Note]
> If a header is re-templated and the corresponding column group is movable, you have to set the **draggable** attribute to **false** on the templated elements, so that you can handle any of the events that are applied!

```razor
@code {
    public Dictionary<string, object> DraggableAttributes { get; set; } =
        new Dictionary<string, object>()
        {
            { "draggable", "false" }
        };

    public RenderFragment<IgbColumnTemplateContext> Template = (ctx) => {
        return @<IgbIcon AdditionalAttributes="DraggableAttributes"  @onclick="onClick"/>;
    };
}
```

The following sample demonstrates how to implement collapsible column groups using header templates.

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbTreeGrid
        AutoGenerate="false"
        Data="EmployeesFlatDetails"
        Name="treeGrid"
        @ref="treeGrid"
        Id="treeGrid"
        PrimaryKey="ID"
        ForeignKey="ParentID">
            <IgbColumn
            Field="Name"
            Resizable="true">
            </IgbColumn>

            <IgbColumnGroup
            Header="General Information"
            HeaderTemplateScript="WebTreeGridColumnGroupHeaderTemplate"
            Name="columnGroup1"
            @ref="columnGroup1">
                <IgbColumn
                Field="HireDate"
                Sortable="true"
                Resizable="true">
                </IgbColumn>

                <IgbColumnGroup
                Header="Personal Details">
                    <IgbColumn
                    Field="ID"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Title"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Age"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                </IgbColumnGroup>

            </IgbColumnGroup>

            <IgbColumnGroup
            Header="Address Information"
            HeaderTemplateScript="WebTreeGridColumnGroupHeaderTemplate"
            Name="columnGroup2"
            @ref="columnGroup2">
                <IgbColumn
                Header="Location"
                Field="Address"
                Hidden="true"
                Sortable="true"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="Phone"
                Hidden="true"
                Sortable="true"
                Resizable="true">
                </IgbColumn>

                <IgbColumnGroup
                Header="Location">
                    <IgbColumn
                    Field="Country"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="City"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Address"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                </IgbColumnGroup>

                <IgbColumnGroup
                Header="Contact Information">
                    <IgbColumn
                    Field="Phone"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Fax"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="PostalCode"
                    Sortable="true"
                    Resizable="true">
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
        var columnGroup1 = this.columnGroup1;
        var columnGroup2 = this.columnGroup2;

    }

    private IgbTreeGrid treeGrid;
    private IgbColumnGroup columnGroup1;
    private IgbColumnGroup columnGroup2;

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


## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```razor
<IgbTreeGrid class="grid"></IgbTreeGrid>
```

Then set the related CSS properties to this class:

```css
.grid {
    --ig-grid-header-background: #e0f3ff;
    --ig-grid-header-text-color: #e41c77;
    --ig-grid-header-border-width: 1px;
    --ig-grid-header-border-style: solid;
    --ig-grid-header-border-color: rgba(0, 0, 0, 0.08);
}
```

### Demo

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbTreeGrid
        AutoGenerate="false"
        Data="EmployeesFlatDetails"
        Name="treeGrid"
        @ref="treeGrid"
        Id="treeGrid"
        PrimaryKey="ID"
        ForeignKey="ParentID">
            <IgbColumn
            Field="Name"
            Resizable="true">
            </IgbColumn>

            <IgbColumnGroup
            Header="General Information">
                <IgbColumn
                Field="HireDate"
                Sortable="true"
                Resizable="true">
                </IgbColumn>

                <IgbColumnGroup
                Header="Personal Details">
                    <IgbColumn
                    Field="ID"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Title"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Age"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                </IgbColumnGroup>

            </IgbColumnGroup>

            <IgbColumnGroup
            Header="Address Information">
                <IgbColumnGroup
                Header="Location">
                    <IgbColumn
                    Field="Country"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="City"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Address"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                </IgbColumnGroup>

                <IgbColumnGroup
                Header="Contact Information">
                    <IgbColumn
                    Field="Phone"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Fax"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="PostalCode"
                    Sortable="true"
                    Resizable="true">
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

- [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html)
- [`IgbColumnGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnGroup.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
