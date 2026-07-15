---
title: Blazor Excel Library| Working with Sparklines | Infragistics
_description: Use sparkline charts in Infragistics' Blazor excel library to visual data trends across a region of cells in your worksheet. View Ignite UI for Blazor excel engine tutorials!
_keywords: Excel library, sparkline chart, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Workbook"]
_tocName: Working with Sparklines
_premium: true
---

# Blazor Working with Sparklines

The Infragistics Blazor Excel Library has support for adding sparklines to an Excel Worksheet. These can be used to show simple visual representations of data trends across a region of cells of data in your worksheet. For example, if you wanted to see your Excel data across a particular cell region visualized as a simple column or line sparkline chart, this feature can help you to achieve that.

## Blazor Working with Sparklines Example

```razor
@using Microsoft.AspNetCore.Components
@using Microsoft.AspNetCore.Components.Rendering
@using Microsoft.AspNetCore.Components.Forms
@using Microsoft.AspNetCore.Components.RenderTree
@using Microsoft.AspNetCore.Components.Web
@using Microsoft.AspNetCore.Components.Routing
@using Microsoft.AspNetCore.Components.WebAssembly.Http
@using Microsoft.JSInterop
@using Microsoft.JSInterop.WebAssembly
@using System.Text.RegularExpressions
@using System.Net.Http
@using System.Net.Http.Json
@using System.Runtime.InteropServices.JavaScript

@using Infragistics.Documents.Excel
@using IgniteUI.Blazor.Controls

@implements IDisposable

<div class="container vertical">

    <div class="options vertical">
        <button @onclick="CreateXlsx">Save Workbook to XLSX</button>
    </div>

    <div class="container vertical">

        @if (Data != null)
        {
        <IgbDataGrid @ref="@grid" Height="100%" Width="100%"
                  RowHeight="90"
                  DataSource="Data"
                  AutoGenerateColumns="false">
            @* custom sparkline solumn: *@
            <IgbTemplateColumn Field="Orders"
                            HeaderText="Orders" PaddingTop="10" PaddingBottom="10"
                            HorizontalAlignment="CellContentHorizontalAlignment.Center">
                <Template>
                    <div style="width: 100%; height: 70px; background: transparent">
                        <IgbSparkline Height="100%" Width="100%"
                                   DataSource="@((context.RowItem as SalesEmployee).Order)"
                                   DisplayType="SparklineDisplayType.Column"
                                   ValueMemberPath="Freight"
                                   LabelMemberPath="OrderDate"
                                   Brush="rgb(0, 64, 128)">
                        </IgbSparkline>
                    </div>
                </Template>
            </IgbTemplateColumn>
            <IgbTextColumn Field="CompanyName"></IgbTextColumn>
            <IgbTextColumn Field="ContactName"></IgbTextColumn>
            <IgbTextColumn Field="ContactTitle"></IgbTextColumn>
            <IgbTextColumn Field="Country"></IgbTextColumn>
        </IgbDataGrid>
        }

    </div>
</div>

@code {

    [Inject]
    public IJSRuntime Runtime { get; set; }
    public bool canSave = false;
    public Random Rand = new Random();

    public IgbDataGrid grid;
    public List<SalesEmployee> Data;
    public List<Order> companyOrders;
    public Workbook wb;

    public string[] companies;
    public string[] firstNames;
    public string[] lastNames;
    public string[] countries;
    public string[] cities;
    public string[] titles;
    public string[] employeeColumns;
    public string[] streets;
    public string[] shippings;
    public string selected = "Employees - Table1";

    protected override void OnInitialized()
    {
        Workbook.InProcessRuntime = this.Runtime as IJSInProcessRuntime;

        InitData();
    }

    public void InitData()
    {
        this.companies = new string[] { "Amazon", "Ford", "Jaguar", "Tesla", "IBM", "Microsoft" };
        this.firstNames = new string[] { "Andrew", "Mike", "Martin", "Ann", "Victoria", "John", "Brian", "Jason", "David" };
        this.lastNames = new string[] { "Smith", "Jordan", "Johnson", "Anderson", "Louis", "Phillips", "Williams" };
        this.cities = new string[] { "London", "Paris", "Boston", "Berlin" };
        this.countries = new string[] { "UK", "France", "USA", "Germany", "Poland", "Brazil" };
        this.titles = new string[] { "Sales Rep.", "Engineer", "Administrator", "Manager" };
        this.streets = new string[] { "Main St", "Madison St", "Broad Way" };
        this.shippings = new string[] { "Federal Ex", "UPS Air", "UPS Ground" };


        var data = new List<SalesEmployee>();
        for (var i = 1; i < 10; i++)
        {
            string companyName = companies[Rand.Next(0, companies.Length)];
            string contactTitle = titles[Rand.Next(0, titles.Length)];
            string country = countries[Rand.Next(0, countries.Length)];
            string city = cities[Rand.Next(0, cities.Length)];
            string shipping = shippings[Rand.Next(0, shippings.Length)];
            string contactName = firstNames[Rand.Next(0, firstNames.Length)] + " " + firstNames[Rand.Next(0, firstNames.Length)];
            string employeeName = firstNames[Rand.Next(0, firstNames.Length)] + " " + firstNames[Rand.Next(0, firstNames.Length)];
            string address = this.GetRandom(10, 60).ToString() + " " + streets[Rand.Next(0, streets.Length)];
            string postalCode = "CID-" + this.GetRandom(500, 900);
            string customerID = "CID-" + this.GetRandom(500, 900);
            string phone = this.GetRandom(500, 900) + "-" + this.GetRandom(200, 900) + "-" + this.GetRandom(2000, 9000);
            string fax = this.GetRandom(500, 900) + "-" + this.GetRandom(200, 900) + "-" + this.GetRandom(2000, 9000);

            this.companyOrders = new List<Order>();
            for (int o = 0; o < 6; o++)
            {
                var reqDate = "2020-06-" + this.GetRandom(1, 25) + "T" + this.GetRandom(10, 12) + ":00:00";
                var shipDate = "2020-06-" + this.GetRandom(1, 25) + "T" + this.GetRandom(10, 12) + ":00:00";
                var orderDate = "2020-05-" + this.GetRandom(1, 25) + "T" + this.GetRandom(10, 12) + ":00:00";
                var order = new Order
                {
                    CustomerName = contactName,
                    CustomerID = customerID,
                    ID = this.GetRandom(1000, 8000),
                    ContactName = employeeName,
                    Freight = this.GetRandom(1, 10),
                    OrderDate = orderDate,
                    OrderID = this.GetRandom(3000, 5000),
                    RequiredDate = reqDate,
                    ShipAddress = address,
                    ShipCity = city,
                    ShipCountry = country,
                    ShipName = companyName,
                    ShipPostalCode = postalCode,
                    ShipRegion = "",
                    ShipVia = this.GetRandom(1, 10),
                    ShippedDate = shipDate,
                    ShipperID = this.GetRandom(1, 10),
                    ShipperName = shipping,
                    TotalItems = this.GetRandom(10, 20),
                    TotalPrice = this.GetRandom(400, 600)
                };
                companyOrders.Add(order);
            }
            var dataItem = new SalesEmployee()
            {
                Address = address,
                City = city,
                CompanyName = companyName,
                ContactName = contactName,
                ContactTitle = contactTitle,
                Country = country,
                Fax = fax,
                ID = this.GetRandom(10, 20),
                Order = companyOrders,
                Phone = phone,
                PostalCode = postalCode,
                Region = ""
            };
            data.Add(dataItem);
        }
        this.Data = data;

    }

    private void CreateXlsx()
    {
        ExportGridData(WorkbookFormat.Excel2007);
        this.SaveFile(this.wb, "ExcelWorkbook");
    }

    public void ExportGridData (WorkbookFormat format)
    {
        var headers = new string[] { "Orders", "Company Name", "Contact Name", "Contact Title", "Country"};

        this.wb = new Workbook(format);
        var exportSheet = this.wb.Worksheets.Add("Sheet1");
        var ordersSheet = this.wb.Worksheets.Add("Orders");

        exportSheet.DefaultColumnWidth = 300 * 20;
        exportSheet.DefaultRowHeight = 50 * 20;

        for (int i = 0; i < headers.Length; i++)
        {
            exportSheet.Rows[0].Cells[i].Value = headers[i];
        }

        if (this.Data is List<SalesEmployee>)
        {
            int worksheetRow = 1;
            var data = this.Data as List<SalesEmployee>;

            for (var i = 0; i < data.Count; i++)
            {
                SalesEmployee item = data[i];
                var order = item.Order;

                for (var j = 0; j < order.Count; j++)
                {
                    ordersSheet.Rows[i].Cells[j].Value = order[j].Freight;
                }
            }

            foreach (SalesEmployee emp in data)
            {
                for (int i = 0; i < this.grid.ActualColumns.Count; i++)
                {
                    IgbDataGridColumn c = this.grid.ActualColumns[i];

                    if (i == 0)
                    {
                        //Transfer template column to excel
                        exportSheet.SparklineGroups.Add(SparklineType.Column, "A" + (worksheetRow + 1).ToString(), "Orders!A" + worksheetRow + ":F" + worksheetRow);

                    }
                    else
                    {
                        //Export rest of the grid
                        var value = typeof(SalesEmployee).GetProperty(c.Field).GetValue(emp);
                        exportSheet.Rows[worksheetRow].Cells[i].Value = value;
                    }
                }

                worksheetRow++;
            }
        }
    }

    public void SaveFile(Workbook wb, string fileNameWithoutExtension)
    {
        var ms = new System.IO.MemoryStream();

        if (wb != null)
        {
            wb.Save(ms);
            string extension;

            switch (wb.CurrentFormat)
            {
                default:
                case WorkbookFormat.StrictOpenXml:
                case WorkbookFormat.Excel2007:
                    extension = ".xlsx";
                    break;
                case WorkbookFormat.Excel2007MacroEnabled:
                    extension = ".xlsm";
                    break;
                case WorkbookFormat.Excel2007MacroEnabledTemplate:
                    extension = ".xltm";
                    break;
                case WorkbookFormat.Excel2007Template:
                    extension = ".xltx";
                    break;

                case WorkbookFormat.Excel97To2003:
                    extension = ".xls";
                    break;
                case WorkbookFormat.Excel97To2003Template:
                    extension = ".xlt";
                    break;
            }

            string fileName = fileNameWithoutExtension + extension;
            string mime;

            switch (wb.CurrentFormat)
            {
                default:
                case WorkbookFormat.Excel2007:
                case WorkbookFormat.Excel2007MacroEnabled:
                case WorkbookFormat.Excel2007MacroEnabledTemplate:
                case WorkbookFormat.Excel2007Template:
                case WorkbookFormat.StrictOpenXml:
                    mime = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
                    break;
                case WorkbookFormat.Excel97To2003:
                case WorkbookFormat.Excel97To2003Template:
                    mime = "application/vnd.ms-excel";
                    break;
            }

            ms.Position = 0;
            var bytes = ms.ToArray();
            SaveFile(bytes, fileName, mime);
        }

    }

    JSObject module;
    bool moduleDownloaded = false;
    public async void SaveFile(byte[] bytes, string fileName, string mime)
    {
        if (Runtime is WebAssemblyJSRuntime wasmRuntime)
        {
            if (!moduleDownloaded)
            {
                module = await JSHost.ImportAsync("BlazorFastDownload", "../BlazorFastDownloadFile.js");
                moduleDownloaded = true;
            }
            BlazorFastDownload.DownloadFile(fileName, mime, bytes);
        }
        else if (Runtime is IJSInProcessRuntime inProc)
            inProc.InvokeVoid("BlazorDownloadFile", fileName, mime, bytes);


    }
    public void Dispose()
    {
        if (moduleDownloaded && module != null)
        {
            module.Dispose();
        }
    }

    public double GetRandom(double min, double max)
    {
        return Math.Round(min + (Rand.NextDouble() * (max - min)));
    }

}
```
```csharp
using System.Runtime.InteropServices.JavaScript;

namespace Infragistics.Samples
{
    public partial class BlazorFastDownload
    {
        [JSImport("BlazorDownloadFileFast", "BlazorFastDownload")]
        internal static partial void DownloadFile(string name, string contentType, byte[] content);

    }
}
```

<div class="divider--half"></div>

## Supported Sparklines

The following is a list of the supported predefined sparkline types.

- Line
- Column
- Stacked (Win/Loss)

The following code demonstrates how to programmatically add Sparklines to a Worksheet via the sparklineGroups collection:

```razor
var workbook = new Workbook();
var sheet1 = workbook.Sheets.Add("Sparklines", SheetType.Worksheet) as Worksheet;
var sheet2 = workbook.Sheets.Add("Data", SheetType.Worksheet) as Worksheet;

sheet1.SparklineGroups.Add(SparklineType.Line, "Sparklines!A1:A1", "Data!A2:A11");
sheet1.SparklineGroups.Add(SparklineType.Column, "Sparklines!B1:B1", "Data!A2:A11");
```

## API References

- `Workbook`
