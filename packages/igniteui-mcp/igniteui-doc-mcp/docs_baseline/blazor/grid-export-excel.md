---
title: Blazor Grid Exporting - Ignite UI for Blazor
_description: With Ignite UI for Blazor Grid exporting you can export grid data to Excel, CSV, and PDF formats while preserving features like filtering, sorting, and the current grid state.
_keywords: Blazor, Grid, Grid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/export-excel
_tocName: Exporting
_premium: true
---

# Blazor Grid Exporting

The Ignite UI for Blazor Grid provides data export functionality through the Grid Toolbar Exporter component. You can export the displayed data to Excel, CSV, or PDF formats. Excel exports use the MS Excel table format, which supports features like filtering and sorting. To enable exporting, place the [`IgbGridToolbarExporter`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarExporter.html) inside the grid's toolbar. By default, all export formats are enabled.

## Blazor Exporting Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="InvoicesData"
        Name="grid"
        @ref="grid"
        Id="grid"
        GroupingExpressions="GroupingExpression1"
        HideGroupedColumns="true">
            <IgbGridToolbar
            >
                <IgbGridToolbarActions
                >
                    <IgbGridToolbarExporter
                    ExportCSV="false"
                    ExportExcel="true">
                    </IgbGridToolbarExporter>

                </IgbGridToolbarActions>

            </IgbGridToolbar>

            <IgbColumn
            Field="ShipCountry"
            Header="Ship Country"
            Width="150px"
            Groupable="true">
            </IgbColumn>

            <IgbColumn
            Field="ShipCity"
            Header="Ship City"
            Width="150px"
            Groupable="true">
            </IgbColumn>

            <IgbColumn
            Field="ShipAddress"
            Header="Ship Address"
            Width="150px"
            Groupable="true">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode"
            Header="Postal Code"
            Width="150px"
            Groupable="true">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Header="Order Date"
            DataType="GridColumnDataType.Date"
            Width="150px"
            Groupable="true">
            </IgbColumn>

            <IgbColumn
            Field="Quantity"
            Width="150px"
            Groupable="true">
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
    private IgbGroupingExpression[] _groupingExpression1 = null;
    public IgbGroupingExpression[] GroupingExpression1
    {
        get
        {
            if (this._groupingExpression1 == null)
            {
                var groupingExpression1 = new IgbGroupingExpression[2];
                var groupingExpression2 = new IgbGroupingExpression();
                groupingExpression2.FieldName = "ShipCountry";
                groupingExpression2.IgnoreCase = false;
                groupingExpression2.Dir = SortingDirection.Asc;
                groupingExpression1[0] = groupingExpression2;
                var groupingExpression3 = new IgbGroupingExpression();
                groupingExpression3.FieldName = "ShipCity";
                groupingExpression3.IgnoreCase = false;
                groupingExpression3.Dir = SortingDirection.Asc;
                groupingExpression1[1] = groupingExpression3;
                this._groupingExpression1 = groupingExpression1;
            }
            return this._groupingExpression1;
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


<!-- ComponentStart: Grid -->

## Export Grouped Data

To export grouped data, group the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) by one or more columns. The browser will download a file named "ExportedDataFile.xlsx" that contains the data from the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) component in Excel format, grouped by the selected columns. You can find an example at the beginning of the topic.

<!-- ComponentEnd: Grid -->

## Export Multi Column Headers Grid

You can export [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) with defined [multi-column headers](multi-column-headers.md). All headers are reflected in the exported Excel file as they are displayed in the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html). If you want to exclude the defined multi-column headers from the exported data, set the `ExporterOption` `IgnoreMultiColumnHeaders` to `true`.

> [!Note]
> The exported [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) will not be formatted as a table, since Excel tables do not support multiple column headers.

> [!Note]
> [`IgbGridToolbarExporter`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarExporter.html) is also configured to demonstrate how you can control which export formats are available to end users. Use the toolbar exporter options to toggle Excel, CSV, or PDF buttons:
>
> - [`ExportExcel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarExporter.html#IgniteUI_Blazor_Controls_IgbGridToolbarExporter_ExportExcel), `ExportCsv`, `ExportPdf`

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Id="grid"
        Name="grid"
        @ref="grid"
        Data="CustomersData"
        Moving="true"
        AllowFiltering="true">
            <IgbGridToolbar
            >
                <IgbGridToolbarActions
                >
                    <IgbGridToolbarHiding
                    >
                    </IgbGridToolbarHiding>

                    <IgbGridToolbarPinning
                    >
                    </IgbGridToolbarPinning>

                    <IgbGridToolbarExporter
                    ExportCSV="false"
                    ExportExcel="true"
                    ExportStartedScript="WebGridExportEventMultiColumnHeaders"
                    Name="gridToolbarExporter1"
                    @ref="gridToolbarExporter1">
                    </IgbGridToolbarExporter>

                </IgbGridToolbarActions>

            </IgbGridToolbar>

            <IgbColumn
            Field="ID"
            Header="ID"
            Resizable="true"
            Filterable="false">
            </IgbColumn>

            <IgbColumnGroup
            Name="GeneralInformation"
            @ref="generalInformation"
            Header="General Information"
            Collapsible="true"
            Expanded="true">
                <IgbColumn
                Field="Company"
                VisibleWhenCollapsed="true">
                </IgbColumn>

                <IgbColumnGroup
                Name="PersonalDetails"
                @ref="personalDetails"
                Header="Personal Details"
                Collapsible="true"
                Expanded="false"
                VisibleWhenCollapsed="false">
                    <IgbColumn
                    Field="ContactName">
                    </IgbColumn>

                    <IgbColumn
                    Field="ContactTitle">
                    </IgbColumn>

                </IgbColumnGroup>

            </IgbColumnGroup>

            <IgbColumnGroup
            Name="AddressInformation"
            @ref="addressInformation"
            Header="Address Information">
                <IgbColumnGroup
                Name="Location"
                @ref="location"
                Header="Location"
                Collapsible="true"
                Expanded="false"
                VisibleWhenCollapsed="true">
                    <IgbColumn
                    Field="Country"
                    VisibleWhenCollapsed="true"
                    Hidden="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Region"
                    VisibleWhenCollapsed="false"
                    Hidden="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="City"
                    VisibleWhenCollapsed="false"
                    Hidden="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Address"
                    VisibleWhenCollapsed="false"
                    Hidden="true">
                    </IgbColumn>

                </IgbColumnGroup>

                <IgbColumnGroup
                Name="ContactInformation"
                @ref="contactInformation"
                Header="Contact Information">
                    <IgbColumn
                    Field="Phone">
                    </IgbColumn>

                    <IgbColumn
                    Field="Fax">
                    </IgbColumn>

                    <IgbColumn
                    Field="PostalCode">
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
        var gridToolbarExporter1 = this.gridToolbarExporter1;
        var generalInformation = this.generalInformation;
        var personalDetails = this.personalDetails;
        var addressInformation = this.addressInformation;
        var location = this.location;
        var contactInformation = this.contactInformation;

    }

    private IgbGrid grid;
    private IgbGridToolbarExporter gridToolbarExporter1;
    private IgbColumnGroup generalInformation;
    private IgbColumnGroup personalDetails;
    private IgbColumnGroup addressInformation;
    private IgbColumnGroup location;
    private IgbColumnGroup contactInformation;

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


## Export Grid with Frozen Column Headers

By default, the Excel Exporter service exports the grid with scrollable (unfrozen) column headers. In many scenarios you may want to freeze all headers at the top of the exported Excel file so they always stay in view as the user scrolls through the records. To achieve this, set the `ExporterOption` `FreezeHeaders` to `true`.

> [!Note]
> PDF exports automatically include the column header row at the top of the document, so readers retain the same context when they open or print the file.

<!-- ComponentStart: Grid, TreeGrid -->

```razor
 <IgbGrid>
    <IgbGridToolbar>
      <IgbGridToolbarActions>
        <IgbGridToolbarExporter
          ExportExcel="true" ExportStartedScript="WebGridExportEventFreezeHeaders">
        </IgbGridToolbarExporter>
      </IgbGridToolbarActions>
    </IgbGridToolbar>
 </IgbGrid>

igRegisterScript("WebGridExportEventFreezeHeaders", (ev) => {
    ev.detail.options.freezeHeaders = false;
}, false);
```

<!-- ComponentEnd: Grid, TreeGrid -->

## Known Limitations

<!-- ComponentStart: Grid -->

|Limitation|Description|
|--- |--- |
|Max worksheet size|The maximum worksheet size supported by Excel is 1,048,576 rows by 16,384 columns.|
|Cell Styling|The Excel exporter service does not support exporting a custom style applied to a cell component. In such scenarios we recommend using the [Excel Library](../../excel-library.md).|
|Wide PDF layouts|Very wide grids can force PDF columns to shrink to fit the page. Apply column widths or hide low-priority fields before exporting to keep the document legible.|

<!-- ComponentEnd: Grid -->

## API References

- [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
