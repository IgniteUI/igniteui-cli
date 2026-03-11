---
title: Blazor Excel Library| Data Spreadsheet and Table | Infragistics
_description: Use Infragistics' Blazor excel library to work with spreadsheet data using Microsoft Excel features. Learn how easily you can transfer data from excel to your application using Ignite UI for Blazor excel library!
_keywords: Excel library, Ignite UI for Blazor, Infragistics, workbook
_license: commercial
mentionedTypes: ["Workbook", "Worksheet", "Cell", "Formula"]
_tocName: Excel Library
---

# Blazor Excel Library Overview

The Infragistics Blazor Excel Library allows you to work with spreadsheet data using familiar Microsoft® Excel® spreadsheet objects like `Workbook`, `Worksheet`, `Cell`, `Formula` and many more. The Infragistics Blazor Excel Library makes it easy for you to represent the data of your application in an Excel spreadsheet as well as transfer data from Excel into your application.

## Blazor Excel Library Example

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
@using System.Runtime.InteropServices.JavaScript
@using System.Text.RegularExpressions;
@using System.Net.Http
@using System.Net.Http.Json

@using Infragistics.Documents.Excel

@implements IDisposable

<div class="container vertical">

    <div class="options vertical">
        <button @onclick="CreateXlsx">Save Workbook to XLSX</button>
        <button @onclick="CreateXls">Save Workbook to XLS</button>
    </div>
</div>

@code {

    [Inject]
    public IJSRuntime Runtime { get; set; }
    public bool canSave = false;
    public Workbook wb;
    public Worksheet ws;
    public List<string> worksheetRegion = null;
    public string selectedRegion = null;
    private Random Rand = new Random();

    protected override void OnInitialized()
    {
        base.OnInitialized();

        this.WorkbookCreate();
    }

    private void CreateXls()
    {
        this.SaveFile(this.wb, "ExcelWorkbook", WorkbookFormat.Excel97To2003);
    }

    private void CreateXlsx()
    {
        this.SaveFile(this.wb, "ExcelWorkbook", WorkbookFormat.Excel2007);
    }

    public void WorkbookCreate() {
        Workbook.InProcessRuntime = this.Runtime as IJSInProcessRuntime;

        var wb = new Workbook(WorkbookFormat.Excel2007);
        var employeeSheet = wb.Worksheets.Add("Employees");
        var employeeHeader = employeeSheet.Rows[0];
        var companies = new string[] { "Amazon", "Ford", "Jaguar", "Tesla", "IBM", "Microsoft" };
        var firstNames = new string[] { "Andrew", "Mike", "Martin", "Ann", "Victoria", "John", "Brian", "Jason", "David" };
        var lastNames = new string[] { "Smith", "Jordan", "Johnson", "Anderson", "Louis", "Phillips", "Williams" };
        var countries = new string[] { "UK", "France", "USA", "Germany", "Poland", "Brazil" };
        var titles = new string[] { "Sales Rep.", "Engineer", "Administrator", "Manager" };
        var employeeColumns = new string[] { "Name", "Company", "Title", "Age", "Country" };
        for (var col = 0; col < employeeColumns.Length; col++) {
            employeeSheet.Columns[col].Width = 5000;
            employeeHeader.SetCellValue(col, employeeColumns[col]);
        }
        for (var i = 1; i < 20; i++) {
            var company = this.GetItem(companies);
            var title = this.GetItem(titles);
            var country = this.GetItem(countries);
            var name = this.GetItem(firstNames) + " " + this.GetItem(lastNames);
            var salary = this.GetRandom(45000, 95000);
            var age = this.GetRandom(20, 65);
            var wr = employeeSheet.Rows[i] as WorksheetRow;
            wr.SetCellValue(0, name);
            wr.SetCellValue(1, company);
            wr.SetCellValue(2, title);
            wr.SetCellValue(3, age);
            wr.SetCellValue(4, country);
            wr.SetCellValue(5, salary);
        }
        var expanseSheet = wb.Worksheets.Add("Expanses");
        var expanseHeader = expanseSheet.Rows[0];
        var expanseNames = new string[] { "Year", "Computers", "Research", "Travel", "Salary", "Software" };
        var expanseCol = 0;
        foreach (var key in expanseNames) {
            expanseSheet.Columns[expanseCol].Width = 5000;
            expanseHeader.SetCellValue(expanseCol, key);
            for (var i = 1; i < 20; i++) {
                var wr = expanseSheet.Rows[i];
                if (key == "Year") {
                    wr.SetCellValue(expanseCol, 2010 + i);
                } else if (key == "Computers") {
                    wr.SetCellValue(expanseCol, this.GetRandom(50000, 65000));
                } else if (key == "Research") {
                    wr.SetCellValue(expanseCol, this.GetRandom(150000, 165000));
                } else if (key == "Travel") {
                    wr.SetCellValue(expanseCol, this.GetRandom(20000, 25000));
                } else if (key == "Salary") {
                    wr.SetCellValue(expanseCol, this.GetRandom(4000000, 450000));
                } else if (key == "Software") {
                    wr.SetCellValue(expanseCol, this.GetRandom(100000, 150000));
                }
            }
            expanseCol++;
        }
        var incomeSheet = wb.Worksheets.Add("Income");
        var incomeHeader = incomeSheet.Rows[0];
        var incomeNames = new string[] { "Year", "Phones", "Computers", "Software", "Services", "Royalties" };
        var incomeCol = 0;
        foreach (var key in incomeNames) {
            incomeSheet.Columns[incomeCol].Width = 5000;
            incomeHeader.SetCellValue(incomeCol, key);
            for (var i = 1; i < 20; i++) {
                var wr = incomeSheet.Rows[i];
                if (key == "Year") {
                    wr.SetCellValue(incomeCol, 2010 + i);
                } else if (key == "Software") {
                    wr.SetCellValue(incomeCol, this.GetRandom(700000, 850000));
                } else if (key == "Computers") {
                    wr.SetCellValue(incomeCol, this.GetRandom(250000, 265000));
                } else if (key == "Royalties") {
                    wr.SetCellValue(incomeCol, this.GetRandom(400000, 450000));
                } else if (key == "Phones") {
                    wr.SetCellValue(incomeCol, this.GetRandom(6000000, 650000));
                } else if (key == "Services") {
                    wr.SetCellValue(incomeCol, this.GetRandom(700000, 750000));
                }
            }
            incomeCol++;
        }
        this.WorkbookParse(wb);
    }

    public void WorkbookParse(Workbook wb)
    {
        if (wb == null)
        {
            this.worksheetRegion = null;
            this.selectedRegion = null;
        }
        else
        {
            var names = new List<string>();
            var worksheets = wb.Worksheets;
            var wsCount = worksheets.Count;
            for (var i = 0; i < wsCount; i++)
            {
                var tables = worksheets[i].Tables;
                var tCount = tables.Count;
                for (var j = 0; j < tCount; j++)
                {
                    names.Add(worksheets[i].Name + " - " + tables[j].Name);
                }
            }
            this.worksheetRegion = names;
            this.selectedRegion = names.Count > 0 ? names[0] : null;
        }
        this.wb = wb;
        this.canSave = wb != null;
    }

    public double GetRandom(double min, double max)
    {
        return Math.Round(min + (Rand.NextDouble() * (max - min)));
    }

    public string GetItem(string[] array)
    {
        var index = (int)Math.Round(GetRandom(0, array.Length - 1));
        return array[index];
    }

    private void SaveFile(Workbook workbook, string fileNameWithoutExtension, WorkbookFormat format)
    {
        var ms = new System.IO.MemoryStream();
        workbook.SetCurrentFormat(format);
        workbook.Save(ms);

        string extension;

        switch (workbook.CurrentFormat)
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

        switch (workbook.CurrentFormat)
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
        this.SaveFile(bytes, fileName, mime);
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

<!-- Blazor -->

## Requirements

In order to use the Blazor excel library, you need to add the following using statement:

```razor
@using Infragistics.Documents.Excel
```

If you are using a Web Assembly (WASM) Blazor project, there are a couple of extra steps:

- Add a reference to the following script in the wwwroot/index.html file:

```razor
<script src="_content/IgniteUI.Blazor.Documents.Excel/excel.js"></script>
```

- Set the static `Workbook.InProcessRuntime` to the current runtime. This can be done by using the following code:

```razor
@using Microsoft.JSInterop

@code {

    [Inject]
    public IJSRuntime Runtime { get; set; }

    protected override void OnInitialized()
    {
        base.OnInitialized();
        Workbook.InProcessRuntime = (IJSInProcessRuntime)this.Runtime;
    }
}
```

<!-- end: Blazor -->

## Supported Versions of Microsoft Excel

The following is a list of the supported versions of Excel.\*\*

- Microsoft Excel 97

- Microsoft Excel 2000

- Microsoft Excel 2002

- Microsoft Excel 2003

- Microsoft Excel 2007

- Microsoft Excel 2010

- Microsoft Excel 2013

- Microsoft Excel 2016

## Load and Save Workbooks

Now that the Excel Library module is imported, next step is to load a workbook.

In order to load and save `Workbook` objects, you can utilize the save method of the actual `Workbook` object, as well as its static `Load` method.

```razor
protected override void OnInitialized()
{
    var memoryStream = new System.IO.MemoryStream();
    workbook.Save(memoryStream);

    memoryStream.Position = 0;
    var bytes = memoryStream.ToArray();
    this.SaveFile(bytes, "fileName.xlsx", string.Empty);
}

private void SaveFile(byte[] bytes, string fileName, string mime)
{
    if (this.Runtime is WebAssemblyJSRuntime wasmRuntime)
      wasmRuntime.InvokeUnmarshalled<string, string, byte[], bool>("BlazorDownloadFileFast", fileName, mime, bytes);
    else if (this.Runtime is IJSInProcessRuntime inProc)
      inProc.InvokeVoid("BlazorDownloadFile", fileName, mime, bytes);
}
```

## API References

- `Load`
- `WorkbookInProcessRuntime`
- `Worksheet`
- `Workbook`
