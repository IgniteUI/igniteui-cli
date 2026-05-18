---
title: Blazor Excel Library| Working with Charts | Infragistics
_description: Use the Infragistics' Blazor excel library's chart feature to add visual charting representations of data trends across regions of cells in a worksheet. Visualize Ignite UI for Blazor excel data in over 70 chart types!
_keywords: Excel library, charts,  Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Workbook", "Worksheet"]
_tocName: Working with Charts
_premium: true
---

# Blazor Working with Charts

The Infragistics Blazor Excel Engine's `WorksheetChart` functionality allows you to add visual charting representations of data trends across regions of cells in a worksheet. For example, if you want to see your Excel data in a region of cells visualized as a column, line, or over 70 other chart types, this feature can help you to achieve that.

## Blazor Working with Charts Example

```razor
@using Microsoft.AspNetCore.Components
@using Microsoft.JSInterop
@using Microsoft.JSInterop.WebAssembly
@using Infragistics.Documents.Excel
@using IgniteUI.Blazor.Controls
@using System.Runtime.InteropServices.JavaScript

@implements IDisposable

<div class="container vertical">
    <div class="options vertical">
        <button @onclick="ExportData">Save to Excel</button>
    </div>
    <div class="container vertical">
        <IgbCategoryChart Height="50%" Width="100%"
                       DataSource="@ChartData"
                       YAxisMinimumValue="0"
                       XAxisInterval="1"
                       ChartType="@CategoryChartType.Column"
                       Brushes="#4f81bd, #c0504d, #9bbb59, #8064a2"
                       Outlines="#4f81bd, #c0504d, #9bbb59, #8064a2"
                       Thickness="0" />
        <IgbDataGrid Height="50%" Width="100%" DataSource="GridData">
            <IgbTextColumn Field="Expense" Width="@("*>100")" />
            <IgbNumericColumn Field="Jan" Width="@("*>75")" />
            <IgbNumericColumn Field="Feb" Width="@("*>75")" />
            <IgbNumericColumn Field="Mar" Width="@("*>75")" />
            <IgbNumericColumn Field="Apr" Width="@("*>75")" />
            <IgbNumericColumn Field="May" Width="@("*>75")" />
            <IgbNumericColumn Field="Jun" Width="@("*>75")" />
            <IgbNumericColumn Field="Jul" Width="@("*>75")" />
            <IgbNumericColumn Field="Aug" Width="@("*>75")" />
            <IgbNumericColumn Field="Sep" Width="@("*>75")" />
            <IgbNumericColumn Field="Oct" Width="@("*>75")" />
            <IgbNumericColumn Field="Nov" Width="@("*>75")" />
            <IgbNumericColumn Field="Dec" Width="@("*>75")" />
        </IgbDataGrid>
    </div>
</div>

@code {

    [Inject]
    public IJSRuntime Runtime { get; set; }

    public List<ExpenseGridInfo> GridData { get; set; }
    public List<ExpenseChartInfo> ChartData { get; set; }
    Random r = new Random();

    protected override void OnInitialized()
    {
        Workbook.InProcessRuntime = (IJSInProcessRuntime)this.Runtime;

        InitData();
    }

    public void InitData()
    {
        var months = new string[] { "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" };
        var groups = new string[] { "Heating", "Electricity", "Water", "Taxes" };

        var expenseKey = "Expense";
        var monthKey = "Month";

        List<ExpenseGridInfo> _gridData = new List<ExpenseGridInfo>();
        List<ExpenseChartInfo> _chartData = new List<ExpenseChartInfo>();

        for(int i=0; i<groups.Length; i++)
        {
            string group = groups[i];
            ExpenseGridInfo info = new ExpenseGridInfo() { Expense = group };
            foreach(string month in months)
            {
                double x = i * 15 * Math.PI / 180;
                double rand = r.Next(50, 100);
                double heat = Math.Abs(Math.Cos(x)) * 300 + rand;
                double ac = Math.Abs(Math.Sin(x)) * 500 + rand;

                switch (group)
                {
                    case "Heating": {
                            typeof(ExpenseGridInfo).GetProperty(month).SetValue(info, Math.Round(heat));
                            break;
                        }
                    case "Electricity":
                        {
                            typeof(ExpenseGridInfo).GetProperty(month).SetValue(info, Math.Round(ac));
                            break;
                        }
                    case "Water":
                        {
                            typeof(ExpenseGridInfo).GetProperty(month).SetValue(info, r.Next(100, 150));
                            break;
                        }
                    case "Taxes":
                        {
                            typeof(ExpenseGridInfo).GetProperty(month).SetValue(info, r.Next(700, 800));
                            break;
                        }
                }
            }

            _gridData.Add(info);
        }


        foreach(string month in months)
        {
            ExpenseChartInfo data = new ExpenseChartInfo() { Month = month };

            foreach(ExpenseGridInfo info in _gridData)
            {
                switch (info.Expense)
                {
                    case "Heating":
                        {
                            data.Heat = (double)typeof(ExpenseGridInfo).GetProperty(month).GetValue(info);
                            break;
                        }
                    case "Electricity":
                        {
                            data.Electricity = (double)typeof(ExpenseGridInfo).GetProperty(month).GetValue(info);
                            break;
                        }
                    case "Water":
                        {
                            data.Water = (double)typeof(ExpenseGridInfo).GetProperty(month).GetValue(info);
                            break;
                        }
                    case "Taxes":
                        {
                            data.Taxes = (double)typeof(ExpenseGridInfo).GetProperty(month).GetValue(info);
                            break;
                        }
                }
            }

            _chartData.Add(data);
        }


        this.GridData = _gridData;
        this.ChartData = _chartData;
    }

    public void ExportData()
    {
        var workbook = new Workbook(WorkbookFormat.Excel2007);
        var sheet = workbook.Worksheets.Add("Sheet1");

        sheet.DefaultColumnWidth = 200 * 20;

        int firstDataRow = 2;

        var headerRow = sheet.Rows[firstDataRow - 1];

        var props = typeof(ExpenseGridInfo).GetProperties();

        for(int i=0; i<props.Count(); i++)
        {
            System.Reflection.PropertyInfo prop = props[i];
            headerRow.SetCellValue(i, prop.Name);
        }

        for(int i=0; i<this.GridData.Count; i++)
        {
            var worksheetRow = sheet.Rows[i + firstDataRow];
            ExpenseGridInfo item = this.GridData[i];

            for(int j=0; j<props.Length; j++)
            {
                System.Reflection.PropertyInfo info = props[j];
                worksheetRow.SetCellValue(j, info.GetValue(item));
            }
        }

        int indexRow = firstDataRow - 1;
        int indexData = firstDataRow + this.GridData.Count - 1;
        int indexHeader = props.Length - 1;

        var tableRegion = new WorksheetRegion(sheet, indexRow, 0, indexData, indexHeader);
        var table = sheet.Tables.Add(tableRegion.ToString(), true);

        sheet.Rows[0].Height = 5000;

        var chart = sheet.Shapes.AddChart(Documents.Excel.Charts.ChartType.ColumnClustered,
            sheet.Rows[0].Cells[0], new Infragistics.Core.Point(0, 0),
            sheet.Rows[0].Cells[props.Length - 1], new Infragistics.Core.Point(100, 100));

        chart.SetSourceData(table.WholeTableRegion.ToString(), true);
        chart.AxisCollection[Infragistics.Documents.Excel.Charts.AxisType.Category].AxisBetweenCategories = true;

        var memStream = new System.IO.MemoryStream();
        workbook.Save(memStream);

        memStream.Position = 0;
        var bytes = memStream.ToArray();
        this.SaveFile(bytes, "ExelWorkbook.xlsx", string.Empty);
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


    public class ExpenseGridInfo
    {
        public string Expense { get; set; }
        public double Jan { get; set; }
        public double Feb { get; set; }
        public double Mar { get; set; }
        public double Apr { get; set; }
        public double May { get; set; }
        public double Jun { get; set; }
        public double Jul { get; set; }
        public double Aug { get; set; }
        public double Sep { get; set; }
        public double Oct { get; set; }
        public double Nov { get; set; }
        public double Dec { get; set; }
    }

    public class ExpenseChartInfo
    {
        public string Month { get; set; }
        public double Heat { get; set; }
        public double Electricity { get; set; }
        public double Water { get; set; }
        public double Taxes { get; set; }
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

> [!Note]
> The XLSX format is required. Other formats are not supported at this time.

<div class="divider--half"></div>

## Usage

In order to add a chart to a worksheet, you must use the `AddChart` method of the worksheet's shapes collection. In this method, you can specify the chart type that you wish to use, the top-left cell, the bottom-right cell, and the percentages of those cells that you wish for the chart to take up.

The `AddChart` method returns the worksheet chart element to be added to the worksheet. Once you have this, you can use the `SetSourceData` method on the chart to set a cell address of the region of worksheet cells that you wish to use as a data source, as well as whether or not you want to switch the mapping of columns and rows to the X and Y axis.

There are over 70 supported chart types, including `Line`, `Area`, [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html), and `Pie`.

The following code demonstrates how to use the Excel charting feature. The below snippet will add a column chart to between the first cell and the 13th cell in the first row of the worksheet. The source data is then set for the data in the region of A2:M6, switching the mapping of columns and rows for the X and Y axis of the column chart:

```razor
var chart = sheet.Shapes.AddChart(Documents.Excel.Charts.ChartType.ColumnClustered,
    sheet.Rows[0].Cells[0], new Core.Point(0, 0),
    sheet.Rows[0].Cells[props.Length - 1], new Core.Point(100, 100));

chart.SetSourceData("A2:M6", true);
```

## API References

- `AddChart`
- `Area`
- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html)
- `Line`
- `Pie`
- `WorksheetChart`
