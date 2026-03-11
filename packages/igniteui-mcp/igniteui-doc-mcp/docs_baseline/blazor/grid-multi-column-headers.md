---
title: Blazor Grid Multi-Column Headers - Ignite UI for Blazor
_description: Start grouping column headers by placing them under a common hierarchical header with the help of Ignite UI for Blazor grid and combine them into multi headers.
_keywords: Multi-Column Headers, Blazor, Grid, IgbGrid, Ignite UI for Blazor, Infragistics
_license: commercial
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
mentionedTypes: ["Column"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/multi-column-headers
_tocName: Multi-Column Headers
_premium: true
---

# Blazor Grid Multi-Column Headers Overview

The Ignite UI for Blazor Multi-Column Headers feature in Blazor Grid allows you to group columns by placing them under a common multi-header. Each multi-column headers group in the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) could be a representation of combinations between other groups or columns. This feature is particularly useful when dealing with large datasets where scrolling horizontally might be cumbersome.

## Blazor Grid Multi-Column Headers Example

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
            ValueType="PropertyEditorValueType.Button"
            PrimitiveValue="@("Toggle First Group Pinned")"
            ButtonClicked="WebGridPinFirstGroupToggle"
            Name="propertyEditorPropertyDescription1"
            @ref="propertyEditorPropertyDescription1">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            ValueType="PropertyEditorValueType.Button"
            PrimitiveValue="@("Toggle First Group Hidden")"
            ButtonClicked="WebGridHideFirstGroupToggle"
            Name="propertyEditorPropertyDescription2"
            @ref="propertyEditorPropertyDescription2">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="CustomersData"
        Name="grid"
        @ref="grid"
        Id="grid">
            <IgbColumn
            Field="ID"
            Resizable="true">
            </IgbColumn>

            <IgbColumnGroup
            Header="General Information">
                <IgbColumn
                Field="Company"
                Sortable="true"
                Resizable="true">
                </IgbColumn>

                <IgbColumnGroup
                Header="Personal Details">
                    <IgbColumn
                    Field="ContactName"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="ContactTitle"
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
                    Field="Region"
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

        </IgbGrid>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditor = this.propertyEditor;
        var propertyEditorPropertyDescription1 = this.propertyEditorPropertyDescription1;
        var propertyEditorPropertyDescription2 = this.propertyEditorPropertyDescription2;
        var grid = this.grid;

        this.BindElements = () => {
            propertyEditor.Target = this.grid;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditor;
    private IgbPropertyEditorPropertyDescription propertyEditorPropertyDescription1;
    private IgbPropertyEditorPropertyDescription propertyEditorPropertyDescription2;
    private IgbGrid grid;

    public void WebGridPinFirstGroupToggle(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var columnGroup = this.grid.GetColumns().ElementAt(1);
        columnGroup.Pinned = !columnGroup.Pinned;
    }

    public void WebGridHideFirstGroupToggle(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var columnGroup = this.grid.GetColumns().ElementAt(1);
        columnGroup.Hidden = !columnGroup.Hidden;
    }

    private CustomersData _customersData = null;
    public CustomersData CustomersData
    {
        get
        {
            if (_customersData == null)
            {
                _customersData = new CustomersData();
            }
            return _customersData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CustomersDataItem
{
    public string ID { get; set; }
    public string Company { get; set; }
    public string ContactName { get; set; }
    public string ContactTitle { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Region { get; set; }
    public double PostalCode { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string Fax { get; set; }
}

public class CustomersData
    : List<CustomersDataItem>
{
    public CustomersData()
    {
        this.Add(new CustomersDataItem() { ID = @"ALFKI", Company = @"Alfreds Futterkiste", ContactName = @"Maria Anders", ContactTitle = @"Sales Representative", Address = @"Obere Str. 57", City = @"Berlin", Region = @"East", PostalCode = 12209, Country = @"Germany", Phone = @"030-0074321", Fax = @"030-0076545" });
        this.Add(new CustomersDataItem() { ID = @"ANATR", Company = @"Ana Trujillo Emparedados y helados", ContactName = @"Ana Trujillo", ContactTitle = @"Owner", Address = @"Avda. de la Constitución 2222", City = @"México D.F.", Region = @"South", PostalCode = 5021, Country = @"Mexico", Phone = @"(5) 555-4729", Fax = @"(5) 555-3745" });
        this.Add(new CustomersDataItem() { ID = @"ANTON", Company = @"Antonio Moreno Taquería", ContactName = @"Antonio Moreno", ContactTitle = @"Owner", Address = @"Mataderos 2312", City = @"México D.F.", Region = @"South", PostalCode = 5023, Country = @"Mexico", Phone = @"(5) 555-3932", Fax = @"(5) 555-3745" });
        // ... 24 more items
    }
}
```


The declaration of multi-column headers is achieved by wrapping a set of columns into an [`IgbColumnGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnGroup.html) component with [`Header`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Header) title information passed.

<!-- ComponentStart: Grid -->

```razor
<IgbGrid Data=data AllowFiltering=true>
    <IgbColumnGroup Header="Contact Information">
        <IgbColumn Field="Phone" Sortable=true Resizable=true></IgbColumn>
        <IgbColumn Field="Fax" Sortable=true Resizable=true></IgbColumn>
        <IgbColumn Field="PostalCode" Sortable=true Resizable=true></IgbColumn>
    </IgbColumnGroup>
</IgbGrid>
```

<!-- ComponentEnd: Grid -->

For achieving `n-th` level of nested headers, the declaration above should be followed. So by nesting [`IgbColumnGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnGroup.html) leads to the desired result.

<!-- ComponentStart: Grid -->

```razor
<IgbGrid Data=data AllowFiltering=true>
    <IgbColumnGroup Header="General Information">
        <IgbColumn Field="CompanyName" Sortable=true Resizable=true Movable=true></IgbColumn>
        <IgbColumnGroup Header="Person Details" Movable=true>
            <IgbColumn Field="ContactName" Sortable=true Resizable=true Movable=true></IgbColumn>
            <IgbColumn Field="ContactTitle" Sortable=true Resizable=true Movable=true></IgbColumn>
        </IgbColumnGroup>
    </IgbColumnGroup>
</IgbGrid>
```

<!-- ComponentEnd: Grid -->

Every [`IgbColumnGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnGroup.html) supports [moving](column-moving.md), [pinning](column-pinning.md) and [hiding](column-hiding.md).

> \[!Note]
> When there is a set of columns and column groups, pinning works only for top level column parents. More specifically pinning per nested column groups or columns is not allowed. <br />
> Moving between columns and column groups is allowed only when they are at the same level in the hierarchy and both are in the same `group`. <br />
> When `columns/column-groups` are not wrapped by current `group` which means they are **top level** `columns`, moving is allowed between whole visible columns.

<!-- ComponentStart: Grid -->

```razor
<IgbGrid Data=data AllowFiltering=true>
    <IgbColumnGroup Header="General Information" Pinned=true>
        <IgbColumn Field="CompanyName" Sortable=true Resizable=true Movable=true></IgbColumn>
    </IgbColumnGroup>
    <IgbColumn Field="Phone" Sortable=true Resizable=true></IgbColumn>
    <IgbColumn Field="Fax" Sortable=true Resizable=true></IgbColumn>
    <IgbColumn Field="PostalCode" Sortable=true Resizable=true></IgbColumn>
</IgbGrid>
```

<!-- ComponentEnd: Grid -->

## Multi-Column Header Template

<!-- Blazor -->

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

> \[!Note]
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
        <IgbGrid
        AutoGenerate="false"
        Data="CustomersData"
        Name="grid"
        @ref="grid"
        Id="grid">
            <IgbColumn
            Field="ID"
            Resizable="true">
            </IgbColumn>

            <IgbColumnGroup
            Header="General Information"
            HeaderTemplateScript="WebGridColumnGroupHeaderTemplate"
            Name="columnGroup1"
            @ref="columnGroup1">
                <IgbColumn
                Field="Company"
                Sortable="true"
                Resizable="true">
                </IgbColumn>

                <IgbColumnGroup
                Header="Personal Details">
                    <IgbColumn
                    Field="ContactName"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="ContactTitle"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                </IgbColumnGroup>

            </IgbColumnGroup>

            <IgbColumnGroup
            Header="Address Information"
            HeaderTemplateScript="WebGridColumnGroupHeaderTemplate"
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
                    Field="Region"
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

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;
        var columnGroup1 = this.columnGroup1;
        var columnGroup2 = this.columnGroup2;

    }

    private IgbGrid grid;
    private IgbColumnGroup columnGroup1;
    private IgbColumnGroup columnGroup2;

    private CustomersData _customersData = null;
    public CustomersData CustomersData
    {
        get
        {
            if (_customersData == null)
            {
                _customersData = new CustomersData();
            }
            return _customersData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CustomersDataItem
{
    public string ID { get; set; }
    public string Company { get; set; }
    public string ContactName { get; set; }
    public string ContactTitle { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Region { get; set; }
    public double PostalCode { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string Fax { get; set; }
}

public class CustomersData
    : List<CustomersDataItem>
{
    public CustomersData()
    {
        this.Add(new CustomersDataItem() { ID = @"ALFKI", Company = @"Alfreds Futterkiste", ContactName = @"Maria Anders", ContactTitle = @"Sales Representative", Address = @"Obere Str. 57", City = @"Berlin", Region = @"East", PostalCode = 12209, Country = @"Germany", Phone = @"030-0074321", Fax = @"030-0076545" });
        this.Add(new CustomersDataItem() { ID = @"ANATR", Company = @"Ana Trujillo Emparedados y helados", ContactName = @"Ana Trujillo", ContactTitle = @"Owner", Address = @"Avda. de la Constitución 2222", City = @"México D.F.", Region = @"South", PostalCode = 5021, Country = @"Mexico", Phone = @"(5) 555-4729", Fax = @"(5) 555-3745" });
        this.Add(new CustomersDataItem() { ID = @"ANTON", Company = @"Antonio Moreno Taquería", ContactName = @"Antonio Moreno", ContactTitle = @"Owner", Address = @"Mataderos 2312", City = @"México D.F.", Region = @"South", PostalCode = 5023, Country = @"Mexico", Phone = @"(5) 555-3932", Fax = @"(5) 555-3745" });
        // ... 24 more items
    }
}
```


<!-- WebComponents, Blazor, React -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```razor
<IgbGrid class="grid"></IgbGrid>
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
        <IgbGrid
        AutoGenerate="false"
        Data="CustomersData"
        Name="grid"
        @ref="grid"
        Id="grid">
            <IgbColumn
            Field="ID"
            Resizable="true">
            </IgbColumn>

            <IgbColumnGroup
            Header="General Information">
                <IgbColumn
                Field="Company"
                Sortable="true"
                Resizable="true">
                </IgbColumn>

                <IgbColumnGroup
                Header="Personal Details">
                    <IgbColumn
                    Field="ContactName"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="ContactTitle"
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
                    Field="Region"
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

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;

    }

    private IgbGrid grid;

    private CustomersData _customersData = null;
    public CustomersData CustomersData
    {
        get
        {
            if (_customersData == null)
            {
                _customersData = new CustomersData();
            }
            return _customersData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CustomersDataItem
{
    public string ID { get; set; }
    public string Company { get; set; }
    public string ContactName { get; set; }
    public string ContactTitle { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Region { get; set; }
    public double PostalCode { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string Fax { get; set; }
}

public class CustomersData
    : List<CustomersDataItem>
{
    public CustomersData()
    {
        this.Add(new CustomersDataItem() { ID = @"ALFKI", Company = @"Alfreds Futterkiste", ContactName = @"Maria Anders", ContactTitle = @"Sales Representative", Address = @"Obere Str. 57", City = @"Berlin", Region = @"East", PostalCode = 12209, Country = @"Germany", Phone = @"030-0074321", Fax = @"030-0076545" });
        this.Add(new CustomersDataItem() { ID = @"ANATR", Company = @"Ana Trujillo Emparedados y helados", ContactName = @"Ana Trujillo", ContactTitle = @"Owner", Address = @"Avda. de la Constitución 2222", City = @"México D.F.", Region = @"South", PostalCode = 5021, Country = @"Mexico", Phone = @"(5) 555-4729", Fax = @"(5) 555-3745" });
        this.Add(new CustomersDataItem() { ID = @"ANTON", Company = @"Antonio Moreno Taquería", ContactName = @"Antonio Moreno", ContactTitle = @"Owner", Address = @"Mataderos 2312", City = @"México D.F.", Region = @"South", PostalCode = 5023, Country = @"Mexico", Phone = @"(5) 555-3932", Fax = @"(5) 555-3745" });
        // ... 24 more items
    }
}
```


<!-- end: WebComponents, Blazor, React -->

## API References

- [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)
- [`IgbColumnGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnGroup.html)

## Additional Resources

<!-- ComponentStart: Grid -->

- [Grid Overview](../data-grid.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
- [Group by](groupby.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
