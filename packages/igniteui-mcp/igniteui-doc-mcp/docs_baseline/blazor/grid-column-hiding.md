---
title: Blazor Grid Column Hiding - Ignite UI for Blazor
_description: Learn how to use the Column Hiding feature that allows users to change the visible state of the columns directly through the UI of the Ignite Material UI table.
_keywords: Blazor, Grid, IgbGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/column-hiding
_tocName: Column Hiding
_premium: true
---

# Blazor Grid Column Hiding

The Ignite UI for Blazor has a built-in column hiding UI, which can be used through the Blazor Grid toolbar to change the visible state of the columns. Developers have the flexibility to define the Column Hiding UI anywhere within the page as needed. The Blazor Grid Column Hiding feature is especially useful when one wants to decrease the size of the grid and to eliminate the need for tabbing through redundant fields.

## Blazor Grid Column Hiding Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Name="grid"
        @ref="grid"
        Id="grid"
        Data="CustomersData"
        ColumnWidth="200px"
        AllowFiltering="true"
        ColumnSelection="GridSelectionMode.Single">
            <IgbGridToolbar
            >
                <IgbGridToolbarTitle
                >
                </IgbGridToolbarTitle>

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
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="ContactName"
            Header="Name"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="ContactTitle"
            Header="Title"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="City"
            Header="City"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Company"
            Header="Company"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Fax"
            Header="Fax"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Address"
            Header="Address"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode"
            Header="Postal Code"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Country"
            Header="Country"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Phone"
            Header="Phone"
            DataType="GridColumnDataType.String"
            Sortable="true">
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

## Grid Setup

Let's start by creating our [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) and binding it to our data. We will also enable both filtering and sorting for the columns.

```razor
<IgbGrid Data=northwindEmployees AutoGenerate=false Width="100%" Height="100%" AllowFiltering=true>
    <IgbColumn Field="ID" Sortable=true Hidden=true></IgbColumn>
    <IgbColumn Field="ContactName" Sortable=true Hidden=true></IgbColumn>
    <IgbColumn Field="ContactTitle" Sortable=true></IgbColumn>
    <IgbColumn Field="City"  Sortable=true></IgbColumn>
    <IgbColumn Field="CompanyName" Sortable=true></IgbColumn>
    <IgbColumn Field="Fax" Sortable=true></IgbColumn>
    <IgbColumn Field="Address" Sortable=true></IgbColumn>
    <IgbColumn Field="PostalCode" Sortable=true></IgbColumn>
    <IgbColumn Field="Country" Sortable=true></IgbColumn>
    <IgbColumn Field="Phone" Sortable=true></IgbColumn>
</IgbGrid>
```

<!-- ComponentEnd: Grid -->

## Toolbar's Column Hiding UI

The built-in Column Hiding UI is placed inside an `DropDown` in the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)'s toolbar. We can show/hide the Column Hiding UI by using this exact dropdown.

For this purpose all we have to do is set both the [`IgbGridToolbarActions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarActions.html) and the [`IgbGridToolbarHiding`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarHiding.html) inside of the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html).

```razor
<IgbGrid Data=northwindEmployees>
    <IgbGridToolbar>
        <IgbGridToolbarActions>
            <IgbGridToolbarHiding></IgbGridToolbarHiding>
        </IgbGridToolbarActions>
    </IgbGridToolbar>
</IgbGrid>
```

<!-- ComponentEnd: Grid -->

<!-- Web Components -->

<!-- end: Web Components -->

<!-- Web Components -->

<!-- end: Web Components -->

The [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) provides us with some useful properties when it comes to using the toolbar's column hiding UI.

By using the [`Title`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Title) property, we will set the title that is displayed inside the dropdown button in the toolbar.

```razor
<IgbGrid Data=northwindEmployees>
    <IgbGridToolbar>
        <IgbGridToolbarActions>
            <IgbGridToolbarHiding @ref=HidingAction Title="Column Hiding"></IgbGridToolbarHiding>
        </IgbGridToolbarActions>
    </IgbGridToolbar>
</IgbGrid>
```

<!-- ComponentEnd: Grid -->

<!-- Web Components -->

<!-- end: Web Components -->

<!-- Web Components -->

<!-- end: Web Components -->

You can see the result of the code from above at the beginning of this article in the Blazor Column Hiding Example section.

### Disable hiding of a column

We can easily prevent the user from being able to hide columns through the column hiding UI by simply setting their [`DisableHiding`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DisableHiding) property to true.

```razor
<IgbGrid Data=northwindEmployees AutoGenerate=false>
    <IgbColumn Field="ContactName" Sortable=true DisableHiding=true></IgbColumn>
    <IgbColumn Field="ContactTitle" Sortable=true DisableHiding=true></IgbColumn>
</IgbGrid>
```

<!-- ComponentEnd: Grid -->

## Styling

The grid could be further customized by setting some of the available [CSS variables](../theming-grid.md).
In order to achieve that, we will use a class that we will first assign to the grid:

```razor
<IgbGrid class="grid"></IgbGrid>
```

<!-- ComponentEnd: Grid -->

Then set the related CSS variables for the related components. We will apply the styles also only on the `igx-column-actions`, so the rest of the grid is unaffected:

<!-- ComponentStart: Grid -->

```css
.grid  igx-column-actions {
    /* Main Column Actions styles */
    --ig-column-actions-background-color: #292826;
    --ig-column-actions-title-color: #ffcd0f;

    /* Checkbox styles */
    --ig-checkbox-tick-color: #292826;
    --ig-checkbox-label-color: #ffcd0f;
    --ig-checkbox-empty-color: #ffcd0f;
    --ig-checkbox-fill-color: #ffcd0f;

    /* Input styles */
    --ig-input-group-idle-text-color: white;
    --ig-input-group-filled-text-color: #ffcd0f;
    --ig-input-group-focused-text-color: #ffcd0f;
    --ig-input-group-focused-border-color: #ffcd0f;
    --ig-input-group-focused-secondary-color: #ffcd0f;

    /* Buttons styles */
    --ig-button-foreground: #292826;
    --ig-button-background: #ffcd0f;
    --ig-button-hover-background: #404040;
    --ig-button-hover-foreground: #ffcd0f;
    --ig-button-focus-background: #ffcd0f;
    --ig-button-focus-foreground: black;
    --ig-button-focus-visible-background: #ffcd0f;
    --ig-button-focus-visible-foreground: black;
    --ig-button-disabled-foreground: #ffcd0f;
}
```

<!-- ComponentEnd: Grid -->

### Demo

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Name="grid"
        @ref="grid"
        Id="grid"
        Data="CustomersData"
        ColumnWidth="200px"
        AllowFiltering="true"
        ColumnSelection="GridSelectionMode.Single">
            <IgbGridToolbar
            >
                <IgbGridToolbarTitle
                >
                </IgbGridToolbarTitle>

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
            DataType="GridColumnDataType.String"
            Hidden="true"
            DisableHiding="true">
            </IgbColumn>

            <IgbColumn
            Field="ContactName"
            Header="Name"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="ContactTitle"
            Header="Title"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="City"
            Header="City"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Company"
            Header="Company"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Fax"
            Header="Fax"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Address"
            Header="Address"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode"
            Header="Postal Code"
            DataType="GridColumnDataType.String"
            Sortable="true"
            DisableHiding="true">
            </IgbColumn>

            <IgbColumn
            Field="Country"
            Header="Country"
            DataType="GridColumnDataType.String"
            Sortable="true"
            DisableHiding="true">
            </IgbColumn>

            <IgbColumn
            Field="Phone"
            Header="Phone"
            DataType="GridColumnDataType.String"
            Sortable="true"
            DisableHiding="true">
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

In this article we learned how to use the built-in column hiding UI in the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)'s toolbar. The column hiding UI has a few more APIs to explore, which are listed below.

- `ColumnActionsComponent`

Additional components with relative APIs that were used:

[`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html) properties:

- [`DisableHiding`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DisableHiding)

[`IgbGridToolbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbar.html) properties:

- `showProgress`

[`IgbGridToolbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbar.html) methods:

- [`IgbGridToolbarHiding`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarHiding.html)
- [`IgbGridToolbarActions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarActions.html)
- [`IgbGridToolbarTitle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarTitle.html)

[`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) events:

- `ColumnVisibilityChanged`

## Additional Resources

<!-- ComponentStart: Grid -->

- [Virtualization and Performance](virtualization.md)
- [Filtering](filtering.md)
- [Paging](paging.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
