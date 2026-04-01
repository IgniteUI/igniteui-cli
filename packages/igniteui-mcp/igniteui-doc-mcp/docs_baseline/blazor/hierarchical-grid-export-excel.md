---
title: Blazor Hierarchical Grid Exporting - Ignite UI for Blazor
_description: With Ignite UI for Blazor Hierarchical Grid exporting you can export grid data to Excel, CSV, and PDF formats while preserving features like filtering, sorting, and the current grid state.
_keywords: Blazor, Hierarchical Grid, Hierarchical Grid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/export-excel
_tocName: Exporting
_premium: true
---

# Blazor Hierarchical Grid Exporting

<!-- Blazor, React, WebComponents -->

The Ignite UI for Blazor Hierarchical Grid provides data export functionality through the Grid Toolbar Exporter component. You can export the displayed data to Excel, CSV, or PDF formats. Excel exports use the MS Excel table format, which supports features like filtering and sorting. To enable exporting, place the [`IgbGridToolbarExporter`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarExporter.html) inside the grid's toolbar. By default, all export formats are enabled.

<!-- end: Blazor, React, WebComponents  -->

## Blazor Exporting Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        AutoGenerate="false"
        Data="SingersExportData"
        PrimaryKey="ID"
        AllowFiltering="true"
        FilterMode="FilterMode.ExcelStyleFilter"
        Name="hierarchicalGrid1"
        @ref="hierarchicalGrid1">
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
            Field="Artist"
            Header="Artist"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Debut"
            Header="Debut"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="GrammyNominations"
            Header="Grammy Nominations"
            DataType="GridColumnDataType.Number"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="GrammyAwards"
            Header="Grammy Awards"
            DataType="GridColumnDataType.Number"
            Sortable="true">
            </IgbColumn>

            <IgbRowIsland
            ChildDataKey="Albums"
            AutoGenerate="false">
                <IgbColumn
                Field="Album"
                Header="Album"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="LaunchDate"
                Header="Launch Date"
                DataType="GridColumnDataType.Date">
                </IgbColumn>

                <IgbColumn
                Field="BillboardReview"
                Header="Billboard Review"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="USBillboard200"
                Header="US Billboard 200"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbRowIsland
                ChildDataKey="Songs"
                AutoGenerate="false">
                    <IgbColumn
                    Field="Number"
                    Header="No."
                    DataType="GridColumnDataType.String">
                    </IgbColumn>

                    <IgbColumn
                    Field="Title"
                    Header="Title"
                    DataType="GridColumnDataType.String">
                    </IgbColumn>

                    <IgbColumn
                    Field="Released"
                    Header="Released"
                    DataType="GridColumnDataType.Date">
                    </IgbColumn>

                    <IgbColumn
                    Field="Genre"
                    Header="Genre"
                    DataType="GridColumnDataType.String">
                    </IgbColumn>

                </IgbRowIsland>

            </IgbRowIsland>

            <IgbRowIsland
            ChildDataKey="Tours"
            AutoGenerate="false">
                <IgbColumn
                Field="Tour"
                Header="Tour"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="StartedOn"
                Header="Started on"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="Location"
                Header="Location"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="Headliner"
                Header="Headliner"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbRowIsland
                ChildDataKey="TourData"
                AutoGenerate="false">
                    <IgbColumn
                    Field="Country"
                    Header="Country"
                    DataType="GridColumnDataType.String">
                    </IgbColumn>

                    <IgbColumn
                    Field="TicketsSold"
                    Header="Tickets Sold"
                    DataType="GridColumnDataType.Number">
                    </IgbColumn>

                    <IgbColumn
                    Field="Attendants"
                    Header="Attendants"
                    DataType="GridColumnDataType.Number">
                    </IgbColumn>

                </IgbRowIsland>

            </IgbRowIsland>

        </IgbHierarchicalGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var hierarchicalGrid1 = this.hierarchicalGrid1;

    }

    private IgbHierarchicalGrid hierarchicalGrid1;

    private SingersExportData _singersExportData = null;
    public SingersExportData SingersExportData
    {
        get
        {
            if (_singersExportData == null)
            {
                _singersExportData = new SingersExportData();
            }
            return _singersExportData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class SingersExportDataItem
{
    public double ID { get; set; }
    public string Artist { get; set; }
    public double Debut { get; set; }
    public double GrammyNominations { get; set; }
    public double GrammyAwards { get; set; }
    public bool HasGrammyAward { get; set; }
    public List<SingersExportDataItem_ToursItem> Tours { get; set; }
    public List<SingersExportDataItem_AlbumsItem> Albums { get; set; }
}
public class SingersExportDataItem_ToursItem
{
    public string Tour { get; set; }
    public string StartedOn { get; set; }
    public string Location { get; set; }
    public string Headliner { get; set; }
    public string TouredBy { get; set; }
    public List<SingersExportDataItem_ToursItem_TourDataItem> TourData { get; set; }
}
public class SingersExportDataItem_ToursItem_TourDataItem
{
    public string Country { get; set; }
    public double TicketsSold { get; set; }
    public double Attendants { get; set; }
}
public class SingersExportDataItem_AlbumsItem
{
    public string Album { get; set; }
    public string LaunchDate { get; set; }
    public double BillboardReview { get; set; }
    public double USBillboard200 { get; set; }
    public string Artist { get; set; }
    public List<SingersExportDataItem_AlbumsItem_SongsItem> Songs { get; set; }
}
public class SingersExportDataItem_AlbumsItem_SongsItem
{
    public double Number { get; set; }
    public string Title { get; set; }
    public string Released { get; set; }
    public string Genre { get; set; }
    public string Album { get; set; }
}

public class SingersExportData
    : List<SingersExportDataItem>
{
    public SingersExportData()
    {
        this.Add(new SingersExportDataItem() { ID = 0, Artist = @"Naomí Yepes", Debut = 2011, GrammyNominations = 6, GrammyAwards = 0, HasGrammyAward = false, Tours = new List<SingersExportDataItem_ToursItem>()
        {
            new SingersExportDataItem_ToursItem() { Tour = @"Faithful Tour", StartedOn = @"Sep 12", Location = @"Worldwide", Headliner = @"NO", TouredBy = @"Naomí Yepes", TourData = new List<SingersExportDataItem_ToursItem_TourDataItem>()
            {
                new SingersExportDataItem_ToursItem_TourDataItem() { Country = @"Belgium", TicketsSold = 10000, Attendants = 10000 },
                new SingersExportDataItem_ToursItem_TourDataItem() { Country = @"USA", TicketsSold = 192300, Attendants = 186523 }}
             },
            new SingersExportDataItem_ToursItem() { Tour = @"Faithful Tour", StartedOn = @"Sep 12", Location = @"Worldwide", Headliner = @"NO", TouredBy = @"Naomí Yepes" },
            new SingersExportDataItem_ToursItem() { Tour = @"Faithful Tour", StartedOn = @"Sep 12", Location = @"Worldwide", Headliner = @"NO", TouredBy = @"Naomí Yepes" },
            // ... 7 more items
    }
}
```


## Export Multi Column Headers Grid

You can export [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) with defined [multi-column headers](multi-column-headers.md). All headers are reflected in the exported Excel file as they are displayed in the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html). If you want to exclude the defined multi-column headers from the exported data, set the `ExporterOption` `IgnoreMultiColumnHeaders` to `true`.

> \[!Note]
> The exported [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) will not be formatted as a table, since Excel tables do not support multiple column headers.

> \[!Note]
> [`IgbGridToolbarExporter`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarExporter.html) is also configured to demonstrate how you can control which export formats are available to end users. Use the toolbar exporter options to toggle Excel, CSV, or PDF buttons:
>
> <!-- Blazor -->
>
> - [`ExportExcel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarExporter.html#IgniteUI_Blazor_Controls_IgbGridToolbarExporter_ExportExcel), `ExportCsv`, `ExportPdf`
>
> <!-- end: Blazor -->

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        AutoGenerate="false"
        Data="MultiColumnsExportData"
        PrimaryKey="ID"
        Moving="true"
        AllowFiltering="true"
        Name="hierarchicalGrid1"
        @ref="hierarchicalGrid1">
            <IgbGridToolbar
            >
                <IgbGridToolbarActions
                >
                    <IgbGridToolbarExporter
                    ExportCSV="false"
                    ExportExcel="true"
                    Name="hGridToolbarExporter"
                    @ref="hGridToolbarExporter"
                    ExportStartedScript="WebHierarchicalGridExportMultiColumnHeaders">
                    </IgbGridToolbarExporter>

                </IgbGridToolbarActions>

            </IgbGridToolbar>

            <IgbColumnGroup
            Header="General Information">
                <IgbColumn
                Field="Company"
                DataType="GridColumnDataType.String"
                Sortable="true"
                Resizable="true">
                </IgbColumn>

                <IgbColumnGroup
                Header="Personal Details">
                    <IgbColumn
                    Field="ContactName"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="ContactTitle"
                    DataType="GridColumnDataType.String"
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
                    Field="Address"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="City"
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

                    <IgbColumn
                    Field="Country"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true">
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

                </IgbColumnGroup>

            </IgbColumnGroup>

            <IgbRowIsland
            ChildDataKey="ChildCompanies"
            AutoGenerate="false"
            Moving="true">
                <IgbColumnGroup
                Header="General Information">
                    <IgbColumn
                    Field="Company"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumnGroup
                    Header="Personal Details">
                        <IgbColumn
                        Field="ContactName"
                        DataType="GridColumnDataType.String"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="ContactTitle"
                        DataType="GridColumnDataType.String"
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
                        Field="Address"
                        DataType="GridColumnDataType.String"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="City"
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

                        <IgbColumn
                        Field="Country"
                        DataType="GridColumnDataType.String"
                        Sortable="true"
                        Resizable="true">
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

                    </IgbColumnGroup>

                </IgbColumnGroup>

                <IgbRowIsland
                ChildDataKey="ChildCompanies"
                AutoGenerate="false"
                Moving="true">
                    <IgbColumnGroup
                    Header="General Information">
                        <IgbColumn
                        Field="Company"
                        DataType="GridColumnDataType.String"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                        <IgbColumnGroup
                        Header="Personal Details">
                            <IgbColumn
                            Field="ContactName"
                            DataType="GridColumnDataType.String"
                            Sortable="true"
                            Resizable="true">
                            </IgbColumn>

                            <IgbColumn
                            Field="ContactTitle"
                            DataType="GridColumnDataType.String"
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
                            Field="Address"
                            DataType="GridColumnDataType.String"
                            Sortable="true"
                            Resizable="true">
                            </IgbColumn>

                            <IgbColumn
                            Field="City"
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

                            <IgbColumn
                            Field="Country"
                            DataType="GridColumnDataType.String"
                            Sortable="true"
                            Resizable="true">
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

                        </IgbColumnGroup>

                    </IgbColumnGroup>

                </IgbRowIsland>

            </IgbRowIsland>

        </IgbHierarchicalGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var hierarchicalGrid1 = this.hierarchicalGrid1;
        var hGridToolbarExporter = this.hGridToolbarExporter;

    }

    private IgbHierarchicalGrid hierarchicalGrid1;
    private IgbGridToolbarExporter hGridToolbarExporter;

    private MultiColumnsExportData _multiColumnsExportData = null;
    public MultiColumnsExportData MultiColumnsExportData
    {
        get
        {
            if (_multiColumnsExportData == null)
            {
                _multiColumnsExportData = new MultiColumnsExportData();
            }
            return _multiColumnsExportData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class MultiColumnsExportDataItem
{
    public string ID { get; set; }
    public string Company { get; set; }
    public string ContactName { get; set; }
    public string ContactTitle { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Region { get; set; }
    public string PostalCode { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string Fax { get; set; }
    public List<MultiColumnsExportDataItem_ChildCompaniesItem> ChildCompanies { get; set; }
}
public class MultiColumnsExportDataItem_ChildCompaniesItem
{
    public string ID { get; set; }
    public string Company { get; set; }
    public string ContactName { get; set; }
    public string ContactTitle { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Region { get; set; }
    public string PostalCode { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string Fax { get; set; }
    public List<MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem> ChildCompanies { get; set; }
}
public class MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem
{
    public string ID { get; set; }
    public string Company { get; set; }
    public string ContactName { get; set; }
    public string ContactTitle { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Region { get; set; }
    public string PostalCode { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string Fax { get; set; }
}

public class MultiColumnsExportData
    : List<MultiColumnsExportDataItem>
{
    public MultiColumnsExportData()
    {
        this.Add(new MultiColumnsExportDataItem() { ID = @"ALFKI", Company = @"Alfreds Futterkiste", ContactName = @"Maria Anders", ContactTitle = @"Sales Representative", Address = @"Obere Str. 57", City = @"Berlin", Region = @"Berlin", PostalCode = @"12209", Country = @"Germany", Phone = @"030-0074321", Fax = @"030-0076545", ChildCompanies = new List<MultiColumnsExportDataItem_ChildCompaniesItem>()
        {
            new MultiColumnsExportDataItem_ChildCompaniesItem() { ID = @"ANATR", Company = @"Ana Trujillo Emparedados y helados", ContactName = @"Ana Trujillo", ContactTitle = @"Owner", Address = @"Avda. de la Constitución 2222", City = @"México D.F.", Region = @"México D.F.", PostalCode = @"05021", Country = @"Mexico", Phone = @"(5) 555-4729", Fax = @"(5) 555-3745", ChildCompanies = new List<MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem>()
            {
                new MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem() { ID = @"AROUT", Company = @"Around the Horn", ContactName = @"Thomas Hardy", ContactTitle = @"Sales Representative", Address = @"120 Hanover Sq.", City = @"London", Region = @"London", PostalCode = @"10000", Country = @"UK", Phone = @"(171) 555-7788", Fax = @"(171) 555-6750" },
                new MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem() { ID = @"BERGS", Company = @"Berglunds snabbköp", ContactName = @"Christina Berglund", ContactTitle = @"Order Administrator", Address = @"Berguvsvägen 8", City = @"Luleå", Region = @"Luleå", PostalCode = @"25000", Country = @"Sweden", Phone = @"0921-12 34 65", Fax = @"0921-12 34 67" },
                new MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem() { ID = @"BLAUS", Company = @"Blauer See Delikatessen", ContactName = @"Hanna Moos", ContactTitle = @"Sales Representative", Address = @"Forsterstr. 57", City = @"Mannheim", Region = @"Mannheim", PostalCode = @"68306", Country = @"Germany", Phone = @"0621-08460", Fax = @"0621-08924" },
                new MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem() { ID = @"BLONP", Company = @"Blondesddsl père et fils", ContactName = @"Frédérique Citeaux", ContactTitle = @"Marketing Manager", Address = @"24, place Kléber", City = @"Strasbourg", Region = @"Strasbourg", PostalCode = @"67000", Country = @"France", Phone = @"88.60.15.31", Fax = @"88.60.15.32" },
                new MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem() { ID = @"BOLID", Company = @"Bólido Comidas preparadas", ContactName = @"Martín Sommer", ContactTitle = @"Owner", Address = @"C/ Araquil, 67", City = @"Madrid", Region = @"Madrid", PostalCode = @"28023", Country = @"Spain", Phone = @"(91) 555 22 82", Fax = @"(91) 555 91 99" },
                new MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem() { ID = @"BONAP", Company = @"Bon app", ContactName = @"Laurence Lebihan", ContactTitle = @"Owner", Address = @"12, rue des Bouchers", City = @"Marseille", Region = @"Marseille", PostalCode = @"13008", Country = @"France", Phone = @"91.24.45.40", Fax = @"91.24.45.41" },
                new MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem() { ID = @"BOTTM", Company = @"Bottom-Dollar Markets", ContactName = @"Elizabeth Lincoln", ContactTitle = @"Accounting Manager", Address = @"23 Tsawassen Blvd.", City = @"Tsawassen", Region = @"BC", PostalCode = @"13000", Country = @"Canada", Phone = @"(604) 555-4729", Fax = @"(604) 555-3745" },
                new MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem() { ID = @"BSBEV", Company = @"Beverages", ContactName = @"Victoria Ashworth", ContactTitle = @"Sales Representative", Address = @"Fauntleroy Circus", City = @"London", Region = @"London", PostalCode = @"37000", Country = @"UK", Phone = @"(171) 555-1212", Fax = @"011-4988261" }}
             },
            new MultiColumnsExportDataItem_ChildCompaniesItem() { ID = @"ANTON", Company = @"Antonio Moreno Taquería", ContactName = @"Antonio Moreno", ContactTitle = @"Owner", Address = @"Mataderos 2312", City = @"México D.F.", Region = @"México D.F.", PostalCode = @"05023", Country = @"Mexico", Phone = @"(5) 555-3932", Fax = @"011-4988261", ChildCompanies = new List<MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem>()
            {
                new MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem() { ID = @"CACTU", Company = @"Cactus Comidas para llevar", ContactName = @"Patricio Simpson", ContactTitle = @"Sales Agent", Address = @"Cerrito 333", City = @"Buenos Aires", Region = @"Buenos Aires", PostalCode = @"1010", Country = @"Argentina", Phone = @"(1) 135-5555", Fax = @"(1) 135-4892" },
                new MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem() { ID = @"CENTC", Company = @"Centro comercial Moctezuma", ContactName = @"Francisco Chang", ContactTitle = @"Marketing Manager", Address = @"Sierras de Granada 9993", City = @"México D.F.", Region = @"México D.F.", PostalCode = @"05022", Country = @"Mexico", Phone = @"(5) 555-3392", Fax = @"(5) 555-7293" },
                new MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem() { ID = @"CHOPS", Company = @"Chop-suey Chinese", ContactName = @"Yang Wang", ContactTitle = @"Owner", Address = @"Hauptstr. 29", City = @"Bern", Region = @"Bern", PostalCode = @"3012", Country = @"Switzerland", Phone = @"0452-076545", Fax = @"011-4988261" }}
             }}
            new MultiColumnsExportDataItem_ChildCompaniesItem() { ID = @"CONSH", Company = @"Consolidated Holdings", ContactName = @"Elizabeth Brown", ContactTitle = @"Sales Representative", Address = @"Berkeley Gardens 12 Brewery", City = @"London", Region = @"London", PostalCode = @"23000", Country = @"UK", Phone = @"(171) 555-2282", Fax = @"(171) 555-9199", ChildCompanies = new List<MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem>()
            {
                new MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem() { ID = @"EASTC", Company = @"Eastern Connection", ContactName = @"Ann Devon", ContactTitle = @"Sales Agent", Address = @"35 King George", City = @"London", Region = @"London", PostalCode = @"42000", Country = @"UK", Phone = @"(171) 555-0297", Fax = @"(171) 555-3373" },
                new MultiColumnsExportDataItem_ChildCompaniesItem_ChildCompaniesItem() { ID = @"ERNSH", Company = @"Ernst Handel", ContactName = @"Roland Mendel", ContactTitle = @"Sales Manager", Address = @"Kirchgasse 6", City = @"Graz", Region = @"Graz", PostalCode = @"8010", Country = @"Austria", Phone = @"7675-3425", Fax = @"7675-3426" }}
             },
            // ... 6 more items
    }
}
```


## Export Grid with Frozen Column Headers

By default, the Excel Exporter service exports the grid with scrollable (unfrozen) column headers. In many scenarios you may want to freeze all headers at the top of the exported Excel file so they always stay in view as the user scrolls through the records. To achieve this, set the `ExporterOption` `FreezeHeaders` to `true`.

> \[!Note]
> PDF exports automatically include the column header row at the top of the document, so readers retain the same context when they open or print the file.

<!-- Blazor -->

<!-- ComponentStart: HierarchicalGrid -->

```razor
 <IgbHierarchicalGrid>
    <IgbGridToolbar>
      <IgbGridToolbarActions>
        <IgbGridToolbarExporter
          ExportExcel="true" ExportStartedScript="WebHierarchicalGridExportEventFreezeHeaders">
        </IgbGridToolbarExporter>
      </IgbGridToolbarActions>
    </IgbGridToolbar>
 </IgbHierarchicalGrid>

igRegisterScript("WebHierarchicalGridExportEventFreezeHeaders", (ev) => {
    ev.detail.options.freezeHeaders = false;
}, false);
```

<!-- ComponentEnd: HierarchicalGrid -->

<!-- end: Blazor -->

## Known Limitations

<!-- ComponentStart: HierarchicalGrid -->

|Limitation|Description|
|--- |--- |
|Hierarchy levels|The excel exporter service can create up to 8 levels of hierarchy.|
|Max worksheet size|The maximum worksheet size supported by Excel is 1,048,576 rows by 16,384 columns.|
|Exporting pinned columns|In the exported Excel file, the pinned columns will not be frozen but will be displayed in the same order as they appear in the grid.|
|Wide PDF layouts|Very wide grids can force PDF columns to shrink to fit the page. Apply column widths or hide low-priority fields before exporting to keep the document legible.|

<!-- ComponentEnd: HierarchicalGrid -->

## API References

- [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
