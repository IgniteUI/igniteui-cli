---
title: Blazor Tree Grid Exporting - Ignite UI for Blazor
_description: With Ignite UI for Blazor Tree Grid exporting you can export grid data to Excel, CSV, and PDF formats while preserving features like filtering, sorting, and the current grid state.
_keywords: Blazor, Tree Grid, Tree Grid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/export-excel
_tocName: Exporting
_premium: true
---

# Blazor Tree Grid Exporting

The Ignite UI for Blazor Tree Grid provides data export functionality through the Grid Toolbar Exporter component. You can export the displayed data to Excel, CSV, or PDF formats. Excel exports use the MS Excel table format, which supports features like filtering and sorting. To enable exporting, place the [`IgbGridToolbarExporter`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarExporter.html) inside the grid's toolbar. By default, all export formats are enabled.

## Blazor Exporting Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbTreeGrid
        AutoGenerate="false"
        Name="treeGrid"
        @ref="treeGrid"
        Id="treeGrid"
        Data="EmployeesNestedData"
        ChildDataKey="Employees">
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
            Field="ID"
            Header="ID"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="Name"
            Header="Name"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="HireDate"
            Header="Hire Date"
            DataType="GridColumnDataType.Date">
            </IgbColumn>

            <IgbColumn
            Field="Age"
            Header="Age"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="salary"
            Header="Salary"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="productivity"
            Header="Productivity"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

        </IgbTreeGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var treeGrid = this.treeGrid;

    }

    private IgbTreeGrid treeGrid;

    private EmployeesNestedData _employeesNestedData = null;
    public EmployeesNestedData EmployeesNestedData
    {
        get
        {
            if (_employeesNestedData == null)
            {
                _employeesNestedData = new EmployeesNestedData();
            }
            return _employeesNestedData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class EmployeesNestedDataItem
{
    public double ID { get; set; }
    public double Age { get; set; }
    public double Salary { get; set; }
    public double Productivity { get; set; }
    public string City { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string HireDate { get; set; }
    public string Name { get; set; }
    public string Title { get; set; }
    public List<EmployeesNestedDataItem_EmployeesItem> Employees { get; set; }
}
public class EmployeesNestedDataItem_EmployeesItem
{
    public double Age { get; set; }
    public double Salary { get; set; }
    public double Productivity { get; set; }
    public string City { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string HireDate { get; set; }
    public double ID { get; set; }
    public string Name { get; set; }
    public string Title { get; set; }
}

public class EmployeesNestedData
    : List<EmployeesNestedDataItem>
{
    public EmployeesNestedData()
    {
        this.Add(new EmployeesNestedDataItem() { ID = 1, Age = 55, Salary = 80000, Productivity = 90, City = @"Berlin", Country = @"Germany", Phone = @"609-202-505", HireDate = @"2008-03-20", Name = @"John Winchester", Title = @"Development Manager", Employees = new List<EmployeesNestedDataItem_EmployeesItem>()
        {
            new EmployeesNestedDataItem_EmployeesItem() { Age = 43, Salary = 70000, Productivity = 80, City = @"Hamburg", Country = @"Germany", Phone = @"609-444-555", HireDate = @"2011-06-03", ID = 3, Name = @"Michael Burke", Title = @"Senior Software Developer" },
            new EmployeesNestedDataItem_EmployeesItem() { Age = 29, Salary = 60000, Productivity = 80, City = @"Munich", Country = @"Germany", Phone = @"609-333-444", HireDate = @"2009-06-19", ID = 2, Name = @"Thomas Anderson", Title = @"Senior Software Developer" },
            new EmployeesNestedDataItem_EmployeesItem() { Age = 31, Salary = 90000, Productivity = 80, City = @"Warasw", Country = @"Poland", Phone = @"609-222-205", HireDate = @"2014-08-18", ID = 11, Name = @"Monica Reyes", Title = @"Software Development Team Lead" },
            // ... 8 more items
    }
}
```

## Export Multi Column Headers Grid

You can export [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) with defined [multi-column headers](multi-column-headers.md). All headers are reflected in the exported Excel file as they are displayed in the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html). If you want to exclude the defined multi-column headers from the exported data, set the `ExporterOption` `IgnoreMultiColumnHeaders` to `true`.

> [!Note]
> The exported [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) will not be formatted as a table, since Excel tables do not support multiple column headers.

> [!Note]
> [`IgbGridToolbarExporter`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarExporter.html) is also configured to demonstrate how you can control which export formats are available to end users. Use the toolbar exporter options to toggle Excel, CSV, or PDF buttons:
>
> - [`ExportExcel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarExporter.html#IgniteUI_Blazor_Controls_IgbGridToolbarExporter_ExportExcel), `ExportCsv`, `ExportPdf`

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
        Data="EmployeesFlatDetails"
        ForeignKey="ParentID"
        PrimaryKey="ID">
            <IgbGridToolbar
            >
                <IgbGridToolbarActions
                >
                    <IgbGridToolbarPinning
                    >
                    </IgbGridToolbarPinning>

                    <IgbGridToolbarHiding
                    >
                    </IgbGridToolbarHiding>

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

            <IgbColumn
            Field="Name"
            Header="Name"
            Resizable="true"
            Sortable="true"
            Width="200px">
            </IgbColumn>

            <IgbColumnGroup
            Header="General Information">
                <IgbColumn
                Field="HireDate"
                Header="HireDate"
                DataType="GridColumnDataType.Date"
                Resizable="true"
                Sortable="true">
                </IgbColumn>

                <IgbColumnGroup
                Header="Personal Details">
                    <IgbColumn
                    Header="Title"
                    Field="Title"
                    Resizable="true"
                    Sortable="true">
                    </IgbColumn>

                    <IgbColumn
                    Header="Age"
                    Field="Age"
                    DataType="GridColumnDataType.Number"
                    Resizable="true"
                    Sortable="true">
                    </IgbColumn>

                </IgbColumnGroup>

            </IgbColumnGroup>

            <IgbColumnGroup
            Header="Address Information">
                <IgbColumnGroup
                Header="Location">
                    <IgbColumn
                    Header="Country"
                    Field="Country"
                    Resizable="true"
                    Sortable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="City"
                    Header="City"
                    Resizable="true"
                    Sortable="true">
                    </IgbColumn>

                    <IgbColumn
                    Header="Address"
                    Field="Address"
                    Resizable="true"
                    Sortable="true">
                    </IgbColumn>

                </IgbColumnGroup>

                <IgbColumnGroup
                Header="Contact Information">
                    <IgbColumn
                    Header="Phone"
                    Field="Phone"
                    Resizable="true"
                    Sortable="true">
                    </IgbColumn>

                    <IgbColumn
                    Header="Fax"
                    Field="Fax"
                    Resizable="true"
                    Sortable="true">
                    </IgbColumn>

                    <IgbColumn
                    Header="PostalCode"
                    Field="PostalCode"
                    Resizable="true"
                    Sortable="true">
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
        var gridToolbarExporter1 = this.gridToolbarExporter1;

    }

    private IgbTreeGrid treeGrid;
    private IgbGridToolbarExporter gridToolbarExporter1;

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

## Export Grid with Frozen Column Headers

By default, the Excel Exporter service exports the grid with scrollable (unfrozen) column headers. In many scenarios you may want to freeze all headers at the top of the exported Excel file so they always stay in view as the user scrolls through the records. To achieve this, set the `ExporterOption` `FreezeHeaders` to `true`.

> [!Note]
> PDF exports automatically include the column header row at the top of the document, so readers retain the same context when they open or print the file.

<!-- ComponentStart: Grid, TreeGrid -->

```razor
 <IgbTreeGrid>
    <IgbGridToolbar>
      <IgbGridToolbarActions>
        <IgbGridToolbarExporter
          ExportExcel="true" ExportStartedScript="WebGridExportEventFreezeHeaders">
        </IgbGridToolbarExporter>
      </IgbGridToolbarActions>
    </IgbGridToolbar>
 </IgbTreeGrid>

igRegisterScript("WebGridExportEventFreezeHeaders", (ev) => {
    ev.detail.options.freezeHeaders = false;
}, false);
```

<!-- ComponentEnd: Grid, TreeGrid -->

## Known Limitations

<!-- ComponentStart: TreeGrid -->

|Limitation|Description|
|--- |--- |
|Hierarchy levels|The excel exporter service can create up to 8 levels of hierarchy.|
|Max worksheet size|The maximum worksheet size supported by Excel is 1,048,576 rows by 16,384 columns.|
|Cell Styling|The Excel exporter service does not support exporting a custom style applied to a cell component. In such scenarios we recommend using the [Excel Library](../../excel-library.md).|
|Wide PDF layouts|Very wide grids can force PDF columns to shrink to fit the page. Apply column widths or hide low-priority fields before exporting to keep the document legible.|

<!-- ComponentEnd: TreeGrid -->

## API References

- [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
