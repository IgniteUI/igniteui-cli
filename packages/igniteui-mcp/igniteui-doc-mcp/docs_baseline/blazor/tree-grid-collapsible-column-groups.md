---
title: Blazor Tree Grid Collapsible Column Groups - Ignite UI for Blazor
_description: Take advantage of the capability to show\hide smaller and concise set of data with the use of collapsible column groups in our Blazor Tree Grid. Try it now!
_keywords: Blazor, Tree Grid, IgbTreeGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["ColumnGroup"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/collapsible-column-groups
_tocName: Collapsible Column Groups
_premium: true
---

# Blazor Tree Grid Collapsible Column Groups Overview

The Ignite UI for Blazor Collapsible Column Groups feature in Blazor Tree Grid allows you to organize and manage multiple levels of nested columns and column groups in the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) by grouping them together and providing the option to collapse or expand these groups for improved data visualization and navigation.

## Blazor Tree Grid Collapsible Column Groups Example

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
        Moving="true"
        RowSelection="GridSelectionMode.None">
            <IgbColumnGroup
            Header="General Information"
            Collapsible="true"
            Expanded="false"
            Pinned="false">
                <IgbColumn
                Field="Name"
                Header="Full Name"
                DataType="GridColumnDataType.String"
                Sortable="true"
                Resizable="true"
                Width="200"
                VisibleWhenCollapsed="false">
                </IgbColumn>

                <IgbColumn
                Field="LastName"
                Header="Last Name"
                DataType="GridColumnDataType.String"
                Sortable="true"
                Resizable="true"
                Width="200"
                VisibleWhenCollapsed="true">
                </IgbColumn>

                <IgbColumn
                Field="Title"
                Width="250"
                DataType="GridColumnDataType.String"
                Sortable="true"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="ID"
                DataType="GridColumnDataType.Number"
                Resizable="true"
                Filterable="false"
                VisibleWhenCollapsed="false">
                </IgbColumn>

                <IgbColumn
                Field="HireDate"
                DataType="GridColumnDataType.Date"
                Sortable="true"
                Resizable="true"
                VisibleWhenCollapsed="false">
                </IgbColumn>

                <IgbColumn
                Field="Age"
                DataType="GridColumnDataType.Number"
                Sortable="true"
                Resizable="true"
                VisibleWhenCollapsed="false">
                </IgbColumn>

            </IgbColumnGroup>

            <IgbColumnGroup
            Header="Address Information">
                <IgbColumnGroup
                Header="Location"
                Collapsible="true">
                    <IgbColumn
                    Field="FullAddress"
                    Width="300"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true"
                    VisibleWhenCollapsed="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Country"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true"
                    VisibleWhenCollapsed="false">
                    </IgbColumn>

                    <IgbColumn
                    Field="City"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true"
                    VisibleWhenCollapsed="false">
                    </IgbColumn>

                    <IgbColumn
                    Field="Address"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true"
                    VisibleWhenCollapsed="false">
                    </IgbColumn>

                </IgbColumnGroup>

                <IgbColumnGroup
                Header="Contact Information">
                    <IgbColumn
                    Field="Phone"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Fax"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="PostalCode"
                    DataType="GridColumnDataType.String"
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

## Setup

To get started with the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) and the **Collapsible multi-column headers** feature, first you need to install Ignite UI for Blazor by typing the following command:

```cmd
> dotnet add package IgniteUI.Blazor --version 25.2.83 (March 2026)
```

For a complete introduction to the Ignite UI for Blazor, read the [getting started](../../general-getting-started.md) topic.

Also, we strongly suggest that you take a brief look at [multi-column headers](multi-column-headers.md) topic, to see more detailed information on how to setup the column groups in your grid.

## Usage

**Collapsible Column Groups** is a part of the multi-column headers feature which provides a way to collapse/expand a column group to a smaller set of data. When a column group is collapsed, a subset of the columns will be shown to the end-user and the other child columns of the group will hide. Each collapsed/expanded column can be bound to the grid data source, or it may be unbound, thus calculated.

In order to define a column group as collapsible, you need to set the [`Collapsible`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnGroup.html#IgniteUI_Blazor_Controls_IgbColumnGroup_Collapsible) property on the [`IgbColumnGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnGroup.html) to **true**.

You need to define the property [`VisibleWhenCollapsed`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_VisibleWhenCollapsed) to at least two child columns. At least one column must be visible when the group is collapsed ([`VisibleWhenCollapsed`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_VisibleWhenCollapsed) set to **true**) and at least one column must be hidden when the group is expanded ([`VisibleWhenCollapsed`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_VisibleWhenCollapsed) set to `false`), otherwise the **collapsible functionality will be disabled**. If [`VisibleWhenCollapsed`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_VisibleWhenCollapsed) is not specified for some of the child columns, then this column will be always visible regardless of whether the parent state is expanded or collapsed.

Let's see the markup below:

```razor
 <IgbColumnGroup Header="Customer Information" Collapsible="true">
    <!--The column below will be visible when its parent is collapsed-->
    <IgbColumn Field="CustomerName" Header="Full name" VisibleWhenCollapsed="true"></IgbColumn>
        <!--The three columns below will be visible when its parent is expanded-->
        <IgbColumn Field="CustomerID" Header="Customer ID" VisibleWhenCollapsed="false"></IgbColumn>
        <IgbColumn Field="FirstName" Header="First Name" VisibleWhenCollapsed="false"></IgbColumn>
        <IgbColumn Field="LastName" Header="Last Name" VisibleWhenCollapsed="false"></IgbColumn>
        <IgbColumnGroup Header="Customer Address">
            <IgbColumn Field="Country" Header="Country" Sortable="true"></IgbColumn>
            <IgbColumn Field="City" Header="City" Sortable="true"></IgbColumn>
        </IgbColumnGroup>
 </IgbColumnGroup>
```

To summarize, every child column has three states:

- Can be always visible, no matter the expanded state of its parent.
- Can be visible, when its parent is collapsed.
- Can be hidden, when its parent is collapsed.

The initial state of the column group which is specified as collapsible is [`Expanded`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnGroup.html#IgniteUI_Blazor_Controls_IgbColumnGroup_Expanded) set to **true**, but you can easily change this behavior by setting it to **false**.

> **Note**
> Please keep in mind that initially collapse group option takes precedence over column hidden - If you declared your column to be hidden using the property
> hidden and you have a group defined where the same column should be shown, the column will be shown.

## API References

- [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html)
- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
