---
title: Blazor Excel Library| Using Workbooks| Infragistics
_description: Use Infragistics' Blazor excel library to create workbooks and worksheets, input data and export the date to Microsoft® Excel. View Ignite UI for Blazor excel tutorials for more information!
_keywords: Excel library, workbooks, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Workbook"]
_tocName: Using Workbooks
_premium: true
---

# Blazor Using Workbooks

The Infragistics Blazor Excel Engine enables you to save data to and load data from Microsoft® Excel®. You can create workbooks and worksheets, input data, and export the data to Excel using the library’s various classes. The Infragistics Blazor Excel Engine makes it easy to export the data in your application as an Excel spreadsheet as well as import data from Excel into your application.

## Blazor Using Workbooks Example

```razor
@using Microsoft.AspNetCore.Components
@using Microsoft.AspNetCore.Components.Rendering
@using Microsoft.AspNetCore.Components.Forms
@using Microsoft.AspNetCore.Components.RenderTree
@using Microsoft.AspNetCore.Components.Web
@using Microsoft.JSInterop.WebAssembly
@using Microsoft.AspNetCore.Components.Routing
@using Microsoft.AspNetCore.Components.WebAssembly.Http
@using Microsoft.JSInterop
@using System.Net.Http
@using System.Net.Http.Json
@using System.Runtime.InteropServices.JavaScript
@using System.Text.RegularExpressions

@using IgniteUI.Blazor.Controls
@using Infragistics.Documents.Excel

@implements IDisposable

<div class="container vertical">

    <div class="options vertical">
        <button @onclick="GenerateData">Generate Data</button>
        <button @onclick="CreateXlsx">Save Workbook to XLSX</button>
        <button @onclick="CreateXls">Save Workbook to XLS</button>
        <span>Select Table to Export:</span>
        <select @onchange="OnTableChange">
            <option>Sales Employee - Table1</option>
            <option>Expense - Table2</option>
            <option>Income - Table3</option>
        </select>
    </div>

    <div class="container vertical">

        @if (Data != null)
        {
            <IgbDataGrid @ref="@grid" Height="100%" Width="100%"
            DataSource="Data"
            AutoGenerateColumns="true">
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
    public object Data;
    public Workbook wb;

    public List<SalesEmployee> salesEmployeeData;
    public List<Expense> expenseData;
    public List<Income> incomeData;

    public string[] companies;
    public string[] firstNames;
    public string[] lastNames;
    public string[] countries;
    public string[] cities;
    public string[] titles;
    public string[] employeeColumns;
    public string[] streets;
    public string selected = "Employees - Table1";

    protected override void OnInitialized()
    {
        Workbook.InProcessRuntime = this.Runtime as IJSInProcessRuntime;

        this.companies = new string[] { "Amazon", "Ford", "Jaguar", "Tesla", "IBM", "Microsoft" };
        this.firstNames = new string[] { "Andrew", "Mike", "Martin", "Ann", "Victoria", "John", "Brian", "Jason", "David" };
        this.lastNames = new string[] { "Smith", "Jordan", "Johnson", "Anderson", "Louis", "Phillips", "Williams" };
        this.countries = new string[] { "UK", "France", "USA", "Germany", "Poland", "Brazil" };
        this.cities = new string[] { "London", "Paris", "Boston", "Berlin" };
        this.titles = new string[] { "Sales Rep.", "Engineer", "Administrator", "Manager" };
        this.employeeColumns = new string[] { "Name", "Company", "Title", "Age", "Country" };
        this.streets = new string[] { "Main St", "Madison St", "Broad Way" };

        GenerateData();
        this.Data = this.salesEmployeeData;
    }

    public void GenerateData() {
        this.InitData();
        this.SwitchDataSource(this.selected);
    }

    public void InitData()
    {
        this.salesEmployeeData = new List<SalesEmployee>();
        this.expenseData = new List<Expense>();
        this.incomeData = new List<Income>();

        var startYear = 2011;

        for (var i = 1; i < 20; i++)
        {
            var year = startYear + i;

            // Employee Data
            string company = companies[Rand.Next(0, companies.Length)];
            string title = titles[Rand.Next(0, titles.Length)];
            string country = countries[Rand.Next(0, countries.Length)];
            string name = firstNames[Rand.Next(0, firstNames.Length)] + " " + firstNames[Rand.Next(0, firstNames.Length)];
            double salary = this.GetRandom(45000, 95000);
            double age = this.GetRandom(20, 65);
            string city = cities[Rand.Next(0, cities.Length)];
            string address = this.GetRandom(10, 60).ToString() + " " + streets[Rand.Next(0, streets.Length)];
            string postalCode = "CID-" + this.GetRandom(500, 900);
            string phone = this.GetRandom(500, 900) + "-" + this.GetRandom(200, 900) + "-" + this.GetRandom(2000, 9000);
            string fax = this.GetRandom(500, 900) + "-" + this.GetRandom(200, 900) + "-" + this.GetRandom(2000, 9000);


            // Expense Data
            double computerExpense = this.GetRandom(50000, 60000);
            double researchExpense = this.GetRandom(120000, 160000);
            double travelExpense = this.GetRandom(15000, 25000);
            double salaryExpense = this.GetRandom(1000000, 2000000);
            double softwareExpense = this.GetRandom(100000, 150000);

            // Income Data
            double phoneIncome = this.GetRandom(3500000, 6000000);
            double computerIncome = this.GetRandom(200000, 300000);
            double softwareIncome = this.GetRandom(700000, 800000);
            double serviceIncome = this.GetRandom(650000, 750000);
            double royaltyIncome = this.GetRandom(400000, 450000);

            this.salesEmployeeData.Add(new SalesEmployee()
            {
                ContactName = name,
                CompanyName = company,
                ID = this.GetRandom(1000, 8000),
                ContactTitle = title,
                Age = (int)age,
                Country = country,
                City = city,
                Salary = salary,
                Phone = phone,
                Fax = fax,
                Address = address,
                PostalCode = postalCode,
                Region = GetRandom(0,100).ToString()
            });

            this.expenseData.Add(new Expense()
            {
                Year = year,
                ComputerExpense = computerExpense,
                ResearchExpense = researchExpense,
                TravelExpense = travelExpense,
                SalaryExpense = salaryExpense,
                SoftwareExpense = softwareExpense
            });

            this.incomeData.Add(new Income()
            {
                Year = year,
                PhoneIncome = phoneIncome,
                ComputerIncome = computerIncome,
                SoftwareIncome = softwareIncome,
                ServiceIncome = serviceIncome,
                RoyaltyIncome = royaltyIncome
            });
        }

    }

    private void CreateXls()
    {
        ExportGridData(WorkbookFormat.Excel97To2003);
        this.SaveFile(this.wb, "ExcelWorkbook");
    }

    private void CreateXlsx()
    {
        ExportGridData(WorkbookFormat.Excel2007);
        this.SaveFile(this.wb, "ExcelWorkbook");
    }

    public void SwitchDataSource(string value)
    {
        if (value.Contains("Sales Employee"))
        {
            this.Data = this.salesEmployeeData;
        }
        else if (value.Contains("Expense"))
        {
            this.Data = this.expenseData;
        }
        else if (value.Contains("Income"))
        {
            this.Data = this.incomeData;
        }

        StateHasChanged();
    }

    public void ExportGridData (WorkbookFormat format)
    {
        this.wb = new Workbook(format);
        var ws = this.wb.Worksheets.Add("Sheet1");
        ws.DefaultColumnWidth = 300 * 20;
        if (this.Data is List<SalesEmployee>)
        {
            int worksheetRow = 0;
            foreach (SalesEmployee emp in this.salesEmployeeData)
            {
                for (int i = 0; i < this.grid.ActualColumns.Count; i++)
                {
                    IgbDataGridColumn c = this.grid.ActualColumns[i];
                    var value = typeof(SalesEmployee).GetProperty(c.Field).GetValue(emp);
                    ws.Rows[worksheetRow].Cells[i].Value = value;
                }

                worksheetRow++;
            }
        }
        else if (this.Data is List<Expense>)
        {
            int worksheetRow = 0;
            foreach (Expense emp in this.expenseData)
            {
                for (int i = 0; i < this.grid.ActualColumns.Count; i++)
                {
                    IgbDataGridColumn c = this.grid.ActualColumns[i];
                    var value = typeof(Expense).GetProperty(c.Field).GetValue(emp);
                    ws.Rows[worksheetRow].Cells[i].Value = value;
                }

                worksheetRow++;
            }
        }
        else if (this.Data is List<Income>)
        {
            int worksheetRow = 0;
            foreach (Income emp in this.incomeData)
            {
                for (int i = 0; i < this.grid.ActualColumns.Count; i++)
                {
                    IgbDataGridColumn c = this.grid.ActualColumns[i];
                    var value = typeof(Income).GetProperty(c.Field).GetValue(emp);
                    ws.Rows[worksheetRow].Cells[i].Value = value;
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
   

    public void OnTableChange(ChangeEventArgs args)
    {
        string newVal = args.Value.ToString();
        this.selected = newVal;
        this.SwitchDataSource(newVal);
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

## Change Default Font

First create a new instance of `IWorkbookFont`. Next, add the new font to the `Styles` collection of the `Workbook`. This style contains the default properties for all cells in the workbook, unless otherwise specified on a row, column, or cell. Changing properties of the style will change the default cell format properties in the workbook.

```razor
var workbook = new Workbook();
var font = workbook.Styles.NormalStyle.StyleFormat.Font;
font.Name = "Times New Roman";
font.Height = 16 * 20;
```

## Setting Workbook Properties

Microsoft Excel® document properties provide information to help organize and keep track of your documents. You can use the Infragistics Blazor Excel Library to set these properties using the `Workbook` object’s `DocumentProperties` property. The available properties are:

- `Author`

- `Title`

- `Subject`

- `Keywords`

- `Category`

- `Status`

- `Comments`

- `Company`

- `Manager`

The following code demonstrates how to create a workbook and set its `title` and `status` document properties.

```razor
var workbook = new Workbook();
workbook.DocumentProperties.Title = "Expense Report";
workbook.DocumentProperties.Status = "Complete";
```

## Workbook Protection

The workbook protection feature allows you to protect the structure of the workbook. That is, the ability for a user to add, rename, delete, hide, and reorder the worksheets in that workbook.

The protection is not enforced via the Infragistics Excel Engine's object model. It is a responsibility of the UI visualizing this object model to honor these protection settings and allow or restrict the user from performing the corresponding operations.

Protection is applied to a workbook by invoking its `protect` method.

When a `Workbook` is protected without a password, the end user may unprotect the `Workbook` in Excel without having to supply a password. To programmatically unprotect a `Workbook`, one may use the `unprotect` method.

When a `Workbook` is protected, the values of the properties of the `WorkbookProtection` instance from this `Workbook`'s `protection` property indicate the disabled operations.

If `IsProtected` is already true, the `protect` method will be ignored.

```razor
var workbook = new Workbook();
workbook.Protect(false, false);
```

Check if a workbook has protection. This read-only property returns true if the workbook has any protection set using the overloads of the Protect method.

```razor
var workbook = new Workbook();
var protect = workbook.IsProtected;
```

This read-only property returns an object of type WorkbookProtection which contains properties for obtaining each protection setting individually.

```razor
var workbook = new Workbook();
var protect = workbook.Protection;
```

## API References

- `DocumentProperties`
- `WorkbookProtection`
- `Workbook`
- `Workbook`
