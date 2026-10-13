---
title: "Blazor Grid Column Hiding - Ignite UI for Blazor"
description: Learn how to use the Column Hiding feature that allows users to change the visible state of the columns directly through the UI of the Ignite Material UI table.
keywords: "Blazor, Grid, IgbGrid, Ignite UI for Blazor, Infragistics"
license: commercial
_canonicalLink: "grids/grid/column-hiding"
llms:
  description: "Ignite UI for Blazor IgbGrid provides a ColumnActionsComponent with a ColumnHidingDirective which allows users to perform column hiding directly through the user interface or by using the Blazor component."
_componentKey: Grid
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

Let's start by creating our [`IgbGrid`](mcp:get_api_reference?platform=blazor&component=IgbGrid) and binding it to our data. We will also enable both filtering and sorting for the columns.

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

## Toolbar's Column Hiding UI

The built-in Column Hiding UI is placed inside an [`IgbDropdown`](mcp:get_api_reference?platform=blazor&component=IgbDropdown) in the [`IgbGrid`](mcp:get_api_reference?platform=blazor&component=IgbGrid)'s toolbar. We can show/hide the Column Hiding UI by using this exact dropdown.

For this purpose all we have to do is set both the [`IgbGridToolbarActions`](mcp:get_api_reference?platform=blazor&component=IgbGridToolbarActions) and the [`IgbGridToolbarHiding`](mcp:get_api_reference?platform=blazor&component=IgbGridToolbarHiding) inside of the [`IgbGrid`](mcp:get_api_reference?platform=blazor&component=IgbGrid).

```razor
<IgbGrid Data=northwindEmployees>
    <IgbGridToolbar>
        <IgbGridToolbarActions>
            <IgbGridToolbarHiding></IgbGridToolbarHiding>
        </IgbGridToolbarActions>
    </IgbGridToolbar>
</IgbGrid>
```

The [`IgbGrid`](mcp:get_api_reference?platform=blazor&component=IgbGrid) provides us with some useful properties when it comes to using the toolbar's column hiding UI.

By using the [`Title`](mcp:get_api_reference?platform=blazor&component=IgbGridToolbarHiding&member=title) and [`Prompt`](mcp:get_api_reference?platform=blazor&component=IgbGridToolbarHiding&member=prompt) properties, we will set the title and filter prompt that are displayed inside the dropdown in the toolbar.

```razor
<IgbGrid Data=northwindEmployees>
    <IgbGridToolbar>
        <IgbGridToolbarActions>
            <IgbGridToolbarHiding @ref=HidingAction Title="Column Hiding" Prompt="Type here to search"></IgbGridToolbarHiding>
        </IgbGridToolbarActions>
    </IgbGridToolbar>
</IgbGrid>
```

You can see the result of the code from above at the beginning of this article in the Blazor Column Hiding Example section.

### Disable hiding of a column
We can easily prevent the user from being able to hide columns through the column hiding UI by simply setting their [`disableHiding`](mcp:get_api_reference?platform=blazor&component=IgbColumnState&member=disableHiding) property to true.

```razor
<IgbGrid Data=northwindEmployees AutoGenerate=false>
    <IgbColumn Field="ContactName" Sortable=true DisableHiding=true></IgbColumn>
    <IgbColumn Field="ContactTitle" Sortable=true DisableHiding=true></IgbColumn>
</IgbGrid>
```

## Styling

The grid could be further customized by setting some of the available [CSS variables](../grid/theming-grid.md).
In order to achieve that, we will use a class that we will first assign to the grid:

```razor
<IgbGrid class="grid"></IgbGrid>
```

Then set the related CSS variables for the related components. We will apply the styles also only on the `igx-column-actions`, so the rest of the grid is unaffected:

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
[`IgbGrid`](mcp:get_api_reference?platform=blazor&component=IgbGrid)
[`IgbColumn`](mcp:get_api_reference?platform=blazor&component=IgbColumn)
[`IgbGridToolbar`](mcp:get_api_reference?platform=blazor&component=IgbGridToolbar)
[`IgbGridToolbarHiding`](mcp:get_api_reference?platform=blazor&component=IgbGridToolbarHiding)
[`IgbGridToolbarActions`](mcp:get_api_reference?platform=blazor&component=IgbGridToolbarActions)
[`IgbGridToolbarTitle`](mcp:get_api_reference?platform=blazor&component=IgbGridToolbarTitle)
## Additional Resources

- [Virtualization and Performance](virtualization.md)
- [Filtering](filtering.md)
- [Paging](paging.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
