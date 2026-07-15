---
title: Blazor Grid Column Selection - Ignite UI for Blazor
_description: Learn how to configure column selection with Ignite UI for Blazor Grid. This makes grid interactions much easier and faster than ever.
_keywords: Blazor, Grid, IgbGrid, Ignite UI for Blazor, Infragistics, column selection
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/column-selection
_tocName: Column Selection
_premium: true
---

# Blazor Grid Column Selection Overview

The Blazor Grid Column Selection feature in Ignite UI for Blazor offers a simplified and Excel-like way to select and highlight an entire column with a single click. It can be enabled through the [`ColumnSelection`](mcp:get_api_reference?platform=blazor&component=IgbGrid&member=ColumnSelection) input. Thanks to the rich API, the feature allows for easy manipulation of the selection state, data extraction from the selected fractions, data analysis operations, and visualizations.

## Blazor Grid Column Selection Example

The sample below demonstrates the three types of [`IgbGrid`](mcp:get_api_reference?platform=blazor&component=IgbGrid)'s **column selection** behavior. Use the column selection dropdown below to enable each of the available selection modes.

<!-- ComponentStart: Grid -->

\*_Contact Title_, _City_ and _Address_ columns are with disabled column selection.

<!-- ComponentEnd: Grid -->

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
        <IgbGrid
        Name="grid"
        @ref="grid"
        Id="grid"
        Data="CustomersData"
        ColumnSelection="GridSelectionMode.Single">
            <IgbColumn
            Field="ID">
            </IgbColumn>

            <IgbColumn
            Field="Company"
            Header="Company">
            </IgbColumn>

            <IgbColumn
            Field="ContactTitle"
            Header="Title"
            Selectable="false">
            </IgbColumn>

            <IgbColumn
            Field="City"
            Selectable="false">
            </IgbColumn>

            <IgbColumn
            Field="Country">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode"
            Header="Postal Code">
            </IgbColumn>

            <IgbColumn
            Field="Address"
            Selectable="false">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditor = this.propertyEditor;
        var columnSelectionEditor = this.columnSelectionEditor;
        var grid = this.grid;

        this.BindElements = () => {
            propertyEditor.Target = this.grid;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditor;
    private IgbPropertyEditorPropertyDescription columnSelectionEditor;
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

## Basic Usage

The column selection feature can be enabled through the [`ColumnSelection`](mcp:get_api_reference?platform=blazor&component=IgbGrid&member=ColumnSelection) input, which takes `GridSelectionMode` values.

## Interactions

The default selection mode is `None`. If set to `Single` or `Multiple`, all of the presented columns will be [`Selectable`](mcp:get_api_reference?platform=blazor&component=IgbColumn&member=Selectable). With that being said, in order to select a column, we just need to click on one, which will mark it as [`Selected`](mcp:get_api_reference?platform=blazor&component=IgbColumn&member=Selected). If the column is not selectable, no selection style will be applied on the header, while hovering.

> [!Note]
> The [Multi Column Headers](multi-column-headers.md) feature does not reflect on the [`Selectable`](mcp:get_api_reference?platform=blazor&component=IgbColumn&member=Selectable) input. The `ColumnGroupComponent` is [`Selectable`](mcp:get_api_reference?platform=blazor&component=IgbColumn&member=Selectable), if at least one of its children has the selection behavior enabled. In addition, the component is marked as [`Selected`](mcp:get_api_reference?platform=blazor&component=IgbColumn&member=Selected) if all of its [`Selectable`](mcp:get_api_reference?platform=blazor&component=IgbColumn&member=Selectable) descendants are [`Selected`](mcp:get_api_reference?platform=blazor&component=IgbColumn&member=Selected).

<!-- ComponentStart: Grid -->

\*Under _Country Information_ Column Group only column _City_ and _Postal code_ are selectable.

<!-- ComponentEnd: Grid -->

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        Name="grid"
        @ref="grid"
        Id="grid"
        Data="CustomersData"
        ColumnSelection="GridSelectionMode.Multiple">
            <IgbColumnGroup
            Header="General Information">
                <IgbColumn
                Field="Company"
                Header="Company">
                </IgbColumn>

                <IgbColumnGroup
                Header="Personal Details">
                    <IgbColumn
                    Field="ContactName"
                    Header="Name"
                    Hidden="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="ContactTitle"
                    Header="Title"
                    Selectable="false">
                    </IgbColumn>

                </IgbColumnGroup>

            </IgbColumnGroup>

            <IgbColumn
            Field="ID">
            </IgbColumn>

            <IgbColumnGroup
            Header="Country Information">
                <IgbColumnGroup
                Header="Region Information">
                    <IgbColumn
                    Field="Country"
                    Selectable="false">
                    </IgbColumn>

                    <IgbColumn
                    Field="City">
                    </IgbColumn>

                    <IgbColumn
                    Field="PostalCode">
                    </IgbColumn>

                </IgbColumnGroup>

                <IgbColumnGroup
                Header="City Information">
                    <IgbColumn
                    Field="Fax"
                    Selectable="false">
                    </IgbColumn>

                    <IgbColumn
                    Field="Address"
                    Selectable="false">
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

## Keyboard Combinations

> [!Note]
> The keyboard combinations are available only when the grid [`ColumnSelection`](mcp:get_api_reference?platform=blazor&component=IgbGrid&member=ColumnSelection) input is set to `multiple`.

There are two scenarios for keyboard navigation of the **Column Selection** feature:

- Multi-column selection - holding <kbd>CTRL</kbd> + <kbd>click</kbd> on every **selectable** header cell.
- Range column selection - holding <kbd>SHIFT</kbd> + <kbd>click</kbd> selects all **selectable** columns in between.

## API Manipulations

The **API** provides some additional capabilities when it comes to the **non-visible** columns such that, every **hidden** column could be marked as [`Selected`](mcp:get_api_reference?platform=blazor&component=IgbColumn&member=Selected) by setting the corresponding **setter**.

> [!Note]
> The above statement also applies to the `ColumnGroupComponent`, except that when the [`Selected`](mcp:get_api_reference?platform=blazor&component=IgbColumn&member=Selected) property is changed it changes the state of its descendants.

More information regarding the API manipulations could be found in the [API References](#api-references) section.

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a `class` for the grid first:

```razor
<IgbGrid class="grid"></IgbGrid>
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
        <IgbGrid
        Name="grid"
        @ref="grid"
        Id="grid"
        Data="CustomersData"
        ColumnSelection="GridSelectionMode.Multiple">
            <IgbColumn
            Field="ID">
            </IgbColumn>

            <IgbColumn
            Field="Company"
            Header="Company">
            </IgbColumn>

            <IgbColumn
            Field="ContactTitle"
            Header="Title"
            Selectable="false">
            </IgbColumn>

            <IgbColumn
            Field="City"
            Selectable="false">
            </IgbColumn>

            <IgbColumn
            Field="Country">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode"
            Header="Postal Code">
            </IgbColumn>

            <IgbColumn
            Field="Address"
            Selectable="false">
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

## API References

The column selection UI has a few more APIs to explore, which are listed below.

- [`IgbGrid`](mcp:get_api_reference?platform=blazor&component=IgbGrid)
- [`IgbColumn`](mcp:get_api_reference?platform=blazor&component=IgbColumn)
- [`IgbColumnGroup`](mcp:get_api_reference?platform=blazor&component=IgbColumnGroup)

[`IgbGrid`](mcp:get_api_reference?platform=blazor&component=IgbGrid) properties:

- [`ColumnSelection`](mcp:get_api_reference?platform=blazor&component=IgbGrid&member=ColumnSelection)
- [`SelectedColumns`](mcp:get_api_reference?platform=blazor&component=IgbGrid&member=SelectedColumns)
- [`SelectColumns`](mcp:get_api_reference?platform=blazor&component=IgbGrid&member=SelectColumns)
- [`DeselectColumns`](mcp:get_api_reference?platform=blazor&component=IgbGrid&member=DeselectColumns)
- [`SelectAllColumns`](mcp:get_api_reference?platform=blazor&component=IgbGrid&member=SelectAllColumns)
- [`DeselectAllColumns`](mcp:get_api_reference?platform=blazor&component=IgbGrid&member=DeselectAllColumns)

[`IgbColumn`](mcp:get_api_reference?platform=blazor&component=IgbColumn) properties:

- [`Selectable`](mcp:get_api_reference?platform=blazor&component=IgbColumn&member=Selectable)
- [`Selected`](mcp:get_api_reference?platform=blazor&component=IgbColumn&member=Selected)

[`IgbColumnGroup`](mcp:get_api_reference?platform=blazor&component=IgbColumnGroup) properties:

- [`Selectable`](mcp:get_api_reference?platform=blazor&component=IgbColumn&member=Selectable)
- [`Selected`](mcp:get_api_reference?platform=blazor&component=IgbColumn&member=Selected)

[`IgbGrid`](mcp:get_api_reference?platform=blazor&component=IgbGrid) events:

- `OnColumnsSelectionChange`

## Additional Resources

<!-- ComponentStart: Grid -->

- [Selection](selection.md)
- [Cell Selection](cell-selection.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Virtualization and Performance](virtualization.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
