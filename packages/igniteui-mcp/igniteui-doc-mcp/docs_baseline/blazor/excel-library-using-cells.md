---
title: Blazor Excel Library| Using Cells | Infragistics
_description: Learn how to perform operations on Infragistics' Blazor excel library's cells such as accessing them, adding formulas and comments, merging cells and formatting cells. View Ignite UI for Blazor excel demos!
_keywords: Excel library,  cell operations, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Workbook", "Worksheet", "WorksheetCell", "WorkbookStyleCollection", "IWorksheetCellFormat", "WorkbookColorInfo", "DisplayOptions"]
_tocName: Using Cells
_premium: true
---

# Blazor Using Cells

The `WorksheetCell` objects in an Excel worksheet is the object that holds your actual data values for the worksheet. This topic goes over the many operations that you can perform on these cells, such as accessing them and their regions by name, adding formulas and comments to the cells, and merging and formatting them.

## Blazor Using Cells Example

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

@implements IDisposable

<div class="container vertical">

    <div class="options vertical">
        <button @onclick="CreateXlsx">Save Workbook to XLSX</button>

        <label class="options-item">
            <input type="checkbox" @onchange="OnCommentChanged" />Add a Comment to cell A1:
        </label>
        <label class="options-item">
            <input type="checkbox" @onchange="OnFormulaChanged" />Add a Formula for cells F2 to F20:
        </label>
        <label class="options-item">
            <input type="checkbox" @onchange="OnMergeChanged" />Merge Cells:
        </label>
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

    private void CreateXlsx()
    {
        this.SaveFile(this.wb, "ExcelWorkbook", WorkbookFormat.Excel2007);
    }

    public void OnCommentChanged(ChangeEventArgs args)
    {
        bool value = args.Value != null ? (bool)args.Value : false;
        var ws = this.wb.Worksheets[0];
        var wr = ws.Rows[0];
        var d = new WorksheetCellComment();
        var formatted = new FormattedString("This cell has a reference name.");
        if (value == true) {
            // Cell Comment
            d.Text = formatted;
            wr.Cells[0].Comment = d;
        } else {
            wr.Cells[0].Comment = new WorksheetCellComment();
        }
    }

    public void OnFormulaChanged(ChangeEventArgs args)
    {
        bool value = args.Value != null ? (bool)args.Value : false;
        // Cell Formula
        var ws = this.wb.Worksheets[0];
        Formula formula = null;
        if (value == true) {
            // Using a Formula object to apply a formula
            formula = Formula.Parse("=AVERAGE(F2:F20)", CellReferenceMode.A1);
            formula.ApplyTo(ws.Rows[21].Cells[5]);
            ws.Rows[20].Cells[5].Value = "Average Salary";
        } else {
            if (ws.Rows[21].Cells[5].Formula != null)
            {
                formula = ws.Rows[21].Cells[5].Formula;
            }
            if (formula != null)
            {
                ws.Rows[21].Cells[5].Value = null;
                ws.Rows[20].Cells[5].Value = null;
            }
        }
    }

    public void OnMergeChanged(ChangeEventArgs args)
    {
        bool value = args.Value != null ? (bool)args.Value : false;
        WorksheetMergedCellsRegion mergedRegion = null;
        if (value == true) {
        // Using merge cells
        this.wb.Worksheets[0].Rows[2].Cells[2].Value = "Engineer";
        this.wb.Worksheets[0].Rows[3].Cells[2].Value = "Engineer";
        this.wb.Worksheets[0].Rows[4].Cells[2].Value = "Engineer";
        this.wb.Worksheets[0].MergedCellsRegions.Add(2, 2, 4, 2);
        mergedRegion = this.wb.Worksheets[0].MergedCellsRegions[0];
        } else {
            if (this.wb.Worksheets[0].MergedCellsRegions.Count == 1)
            {
                mergedRegion = this.wb.Worksheets[0].MergedCellsRegions[0];
            }
            if (mergedRegion != null)
            {
                this.wb.Worksheets[0].MergedCellsRegions.RemoveAt(0);
                this.wb.Worksheets[0].Rows[2].Cells[2].Value = "Engineer";
                this.wb.Worksheets[0].Rows[3].Cells[2].Value = "Engineer";
                this.wb.Worksheets[0].Rows[4].Cells[2].Value = "Engineer";
            }
        }
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

## Referencing Cells and Regions

You can access a `WorksheetCell` object or a `WorksheetRegion` object by calling the `Worksheet` object’s `GetCell` or `GetRegion` methods, respectively. Both methods accept a string parameter that references a cell. Getting a reference to a cell is useful when applying formats or working with formulas and cell contents.

The following example code demonstrates how to reference cells and regions:

```razor
var workbook = new Workbook();
var worksheet = workbook.Worksheets.Add("Sheet1");

//Accessing a single cell
var cell = worksheet.GetCell("E2");
//Accessing a range of cells
var region = worksheet.GetRegion("G1:G10");
```

## Accessing Cells and Regions by Name

In Microsoft Excel, individual cells, as well as cell regions can have names assigned to them. The name of a cell or region can be used to reference that cell or region instead of their address.

The Infragistics Blazor Excel Library supports the referencing of cells and regions by name through the `GetCell` and `GetRegion` methods of the `Worksheet` object. You refer to the cell or region using the `NamedReference` instance that refers to that cell or region.

You can use the following code snippet as an example for naming a cell or region:

```razor
var workbook = new Workbook();
var worksheet = workbook.Worksheets.Add("Sheet1");

var cell_reference = workbook.NamedReferences.Add("myCell", "=Sheet1:A1");
var region_reference = workbook.NamedReferences.Add("myRegion", "=Sheet1!A1:B2");
```

The following code can be used to the get the cell and region referenced by the "myCell" and "myRegion" named references above:

```razor
var cell = worksheet.GetCell("myCell");
var region = worksheet.GetRegion("myRegion");
```

## Adding a Comment to a Cell

A comment allows you to display hints or notes for a cell when the end user’s mouse hovers over a cell. The comments display as a tooltip-like callout that contains text. The Infragistics Blazor Excel Library allows you to add comments to a cell by setting a `WorksheetCell` object’s `Comment` property.

The following example code demonstrates how to add a comment to a cell:

```razor
var workbook = new Workbook();
var worksheet = workbook.Worksheets.Add("Sheet1");

var cellComment = new WorksheetCellComment();
var commentText = new FormattedString("This cell has a comment!");
cellComment.Text = commentText;

worksheet.Rows[0].Cells[0].Comment = cellComment;
```

## Adding a Formula to a Cell

The Infragistics Blazor Excel Library allows you to add Microsoft Excel formulas to a cell or group of cells in a worksheet. You can do this using the `WorksheetCell` object’s `ApplyFormula` method or by instantiating a `Formula` object and applying it to a cell. Regardless of the manner in which you apply a formula to a cell, you can access the `Formula` object using the `WorksheetCell` object’s `Formula` property. If you need the value, use the cell’s `Value` property.

The following code shows you how to add a formula to a cell.

```razor
var workbook = new Workbook();
var worksheet = workbook.Worksheets.Add("Sheet1");
worksheet.Rows[5].Cells[0].ApplyFormula("=SUM(A1:A5)");

//Using a Formula object to apply a formula
var sumFormula = Formula.Parse("=SUM(A1:A5)", CellReferenceMode.A1);
sumFormula.ApplyTo(worksheet.Rows[5].Cells[0]);
```

## Copying a Cell’s Format

Cells can have different formatting, including background color, format string, and font style. If you need a cell to have the same format as a previously formatted cell, instead of individually setting each option exposed by the `WorksheetCell` object’s `CellFormat` property, you can call the `CellFormat` object’s `SetFormatting` method and pass it a `CellFormat` object to copy. This will copy every format setting from the first cell to the second cell. You can also do this for a row, merged cell region, or column.

The following code shows you how to copy the format of the 2nd column to the 4th column:

```razor
var workbook = new Workbook();
var worksheet = workbook.Worksheets.Add("Sheet1");

//Format 2nd column
worksheet.Columns[1].CellFormat.Fill = CellFill.CreateSolidFill(CoreGraphics.Colors.Blue);
worksheet.Columns[1].CellFormat.Font.Bold = ExcelDefaultableBoolean.True;

//Copy format of 2nd column to 4th column
worksheet.Columns[3].CellFormat.SetFormatting(worksheet.Columns[1].CellFormat);
```

## Formatting a Cell

The Infragistics Blazor Excel Library allows you to customize the look and behavior of a cell. You can customize a cell by setting properties exposed by the `CellFormat` property of the `WorksheetCell`, `WorksheetRow`, `WorksheetColumn`, or `WorksheetMergedCellsRegion` objects.

You can customize every aspect of a cell’s appearance. You can set a cell’s font, background, and borders, as well as text alignment and rotation. You can even apply a different format on a character-by-character basis for a cell’s text.

You can also format cell values by assigning a format string. An acceptable format string follows the traditional format standards and formatting codes.

The following code shows you how to format a cell to display numbers as currency:

```razor
var workbook = new Workbook();
var worksheet = workbook.Worksheets.Add("Sheet1");

worksheet.Columns[2].CellFormat.FormatString = "\"$\"#,##0.00";
```

## Excel 2007 Color Model

The color palette is analogous to the color dialog in Microsoft Excel 2007 UI. You can open this color dialog by navigating to Excel Options => Save => Colors.

You can create all possible fill types using static properties and methods on the `CellFill` class. They are as follows:

- `NoColor` - A property that represents a fill with no color, which allows a background image of the worksheet, if any, to show through.

- `CreateSolidFill` - Returns a `CellFillPattern` instance which has a pattern style of `Solid` and a background color set to the `Color` or `WorkbookColorInfo` specified in the method.

- `CreatePatternFill` - Returns a `CellFillPattern` instance which has the specified pattern style and the `Color` or `WorkbookColorInfo` values, specified for the background and pattern colors.

- `CreateLinearGradientFill` - Returns a `CellFillLinearGradient` instance with the specified angle and gradient stops.

- `CreateRectangularGradientFill` - Returns a `CellFillRectangularGradient` instance with the specified left, top, right, and bottom of the inner rectangle and gradient stops. If the inner rectangle values are not specified, the center of the cell is used as the inner rectangle.

The derived types, representing the various fills which can be created, are as follows:

- `CellFillPattern` - A pattern that represents a cell fill of no color, a solid color, or a pattern fill for a cell. It has background color info and a pattern color info which correspond directly to the color sections in the Fill tab of the Format Cells dialog of Excel.

- `CellFillLinearGradient` - Represents a linear gradient fill. It has an angle, which is degrees clockwise of the left to right linear gradient, and a gradients stops collection which describes two or more color transitions along the length of the gradient.

- `CellFillRectangularGradient` - Represents a rectangular gradient fill. It has top, left, right, and bottom values, which describe, in relative coordinates, the inner rectangle from which the gradient starts and goes out to the cell edges. It also has a gradient stops collection which describes two or more color transitions along the path from the inner rectangle to the cell edges.

The following code snippet demonstrates how to create a solid fill in a `WorksheetCell`:

```razor
var workbook = new Workbook();
var worksheet = workbook.Worksheets.Add("Sheet1");

var cellFill = CellFill.CreateSolidFill(Core.Graphics.Colors.Blue);
worksheet.Rows[0].Cells[0].CellFormat.Fill = cellFill;
```

You can specify a color (the color of Excel cells background, border, etc) using linear and rectangular gradients in cells. When workbooks with these gradients are saved in .xls file format and opened in Microsoft Excel 2007/2010, the gradients will be visible, but when these files are opened in Microsoft Excel 2003, the cell will be filled with the solid color from the first gradient stop.

These are the ways a color can be defined, as follows:

- The automatic color (which is the WindowText system color)

- Any user defined RGB color

- A theme color

If an RGB or a theme color is used, an optional tint can be applied to lighten or darken the color. This tint cannot be set directly in Microsoft Excel 2007 UI, but various colors in the color palette displayed to the user are actually theme colors with tints applied.

Each workbook has 12 associated theme colors. They are the following:

- Light 1

- Light 2

- Dark 1

- Dark 2

- Accent1

- Accent2

- Accent3

- Accent4

- Accent5

- Accent6

- Hyperlink

- Followed Hyperlink

- There are default values when a workbook is created, which can be customized via Excel.

Colors are defined by the `WorkbookColorInfo` class, which is a sealed immutable class. The class has a static `Automatic` property, which returns the automatic color, and there are various constructors which allow you to create a `WorkbookColorInfo` instance with a color or a theme value and an optional tint.

The `GetResolvedColor` method on `WorkbookColorInfo` allows you to determine what color will actually be seen by the user when they open the file in Excel.

If the `WorkbookColorInfo` represents a theme color, you must pass in a Workbook instance to the method so it can get the theme color’s RGB value from the workbook.

When saving out in the newer file formats such as .xlsx, the newer color information is saved directly into the file. When saving out in an older file format such as .xls, the index to the closest color in the palette will be saved out. In addition, the older formats have future feature records that can be saved out to indicate the newer color information.

When the older formats are opened in Microsoft Excel 2003 and earlier versions, these future features records are ignored, but when the older file formats are opened in Excel 2007 and later, their records are read and the color information from them overwrites the indexed color that was previously loaded from the normal format records.

## Excel Format Support

You can set a host of different formats on a `WorksheetCell` by using the `CellFormat` object returned by the `CellFormat` property of that cell. This `CellFormat` object enables you to style many different aspects of the cell such as borders, font, fill, alignments, and whether or not the cell should shrink to fit or be locked.

You can also access the built-in styles to Microsoft Excel 2007 using the `Styles` collection of the `Workbook` object. The full list of styles in Excel can be found in the Cell Styles gallery of the Home tab of Microsoft Excel 2007.

There is a special type of style on the workbook's `Styles` collection known as the "normal" style, which can be accessed using that collection's `NormalStyle` property, or by indexing into the collection with the name "Normal".

The `NormalStyle` contains the default properties for all cells in the workbook, unless otherwise specified on a row, column, or cell. Changing the properties on the `NormalStyle` will change all of the default cell format properties on the workbook. This is useful, for example, if you want to change the default font for your workbook.

You can clear the `Styles` collection or reset it to its predefined state by using the `Clear` and `Reset` methods, respectively. Both of these will remove all user-defined styles, but `Clear` will clear the `Styles` collection entirely.

With this feature, a `Style` property has been added to the `CellFormat` object. This is a reference to a `WorkbookStyle` instance, representing the parent style of the format. For formats of a style, this property will always be null, because styles cannot have a parent style. For row, column, and cell formats, the `Style` property always returns the `NormalStyle` by default.

If the `Style` property is set to null, it will revert back to the `NormalStyle`. If it is set to another style in the styles collection, that style will now hold the defaults for all unset properties on the cell format.

When the `Style` property is set on a cell format, the format options included on the `Style` are removed from the cell format. All other properties are left intact. For example, if a cell style including border formatting was created and that style was set as the cell's `Style`, the border format option on the cell format would be removed and the cell format only includes fill formatting.

When a format option flag is removed from a format, all associated properties are reset to their unset values, so the cell format’s border properties are implicitly reset to default/unset values.

You can determine what would really be seen in cells by using the `GetResolvedCellFormat` method on classes which represent a row, column, cell, and merged cell.

This method returns a `CellFormat` instance which refers back to the associated `CellFormat` on which it is based. So subsequent changes to the `CellFormat` property will be reflected in the instance returned from a `GetResolvedCellFormat` call.

## Merging Cells

Aside from setting the value or format of cells, you can also merge cells to make two or more cells appear as one. If you merge cells, they must be in a rectangular region.

When you merge cells, each cell in the region will have the same value and cell format. The merged cells will also be associated with the same `WorksheetMergedCellsRegion` object, accessible from their `AssociatedMergedCellsRegion` property. The resultant `WorksheetMergedCellsRegion` object will also have the same value and cell format as the cells.

Setting the value (or cell format) of the region or any cell in the region will change the value of all cells and the region. If you un-merge cells, all of the previously merged cells will retain the shared cell format they had before they were unmerged. However, only the top-left cell of the region will retain the shared value.

In order to create a merged cell region, you must add a range of cells to the `Worksheet` object’s `MergedCellsRegions` collection. This collection exposes an `Add` method that takes four integer parameters. The four parameters determine the index of the starting row and column (top-left most cell) and the index of the ending row and column (bottom-right most cell).

```razor
var workbook = new Workbook();
var worksheet = workbook.Worksheets.Add("Sheet1");

// Make some column headers
worksheet.Rows[1].Cells[1].Value = "Morning";
worksheet.Rows[1].Cells[2].Value = "Afternoon";
worksheet.Rows[1].Cells[3].Value = "Evening";

// Create a merged region from column 1 to column 3
var mergedRegion1 = worksheet.MergedCellsRegions.Add(0, 1, 0, 3);

// Set the value of the merged region
mergedRegion1.Value = "Day1";

// Set the cell alignment of the middle cell in the merged region.
// Since a cell and its merged region shared a cell format, this will ultimately set the format of the merged region
worksheet.Rows[0].Cells[2].CellFormat.Alignment = HorizontalCellAlignment.Center;
```

## Retrieving the Cell Text as Displayed in Excel

The text displayed in a cell depends on several factors other than the actual cell value, such as the format string and the width of the column that the cell is contained in.

The format string determines how the value of cell is converted to text and what literal character should be displayed with the formatted value. You can find more detailed information about format codes here.

The amount of horizontal space available in a cell plays a big part in how the value is displayed to the user.

Displayed text can be different depending on varying column widths.

When displaying numbers and using format string containing **"General"** or **"@"**, there are various formats which are tried to find a formatting which fits the cell width. A list of example formats are shown below:

- **Normal Value** - Number is displayed as it would be if there is unlimited amount of space.

- **Remove decimal digits** - Decimal digits will be removed one at a time until a format is found which fits. For example, a value of 12345.6789 will be reduced to the following formats until one fits: 12345.679, 12345.68, 12345.7, and 12346. This will stop when the first significant digit is the only one left, so for example value like 0.0001234567890 can only be reduced to 0.0001.

- **Scientific, 5 decimal digits** - Number is displayed in the form of 0.00000E+00, such as 1.23457E+09, or 1.23457E-04

- **Scientific, 4 decimal digits** - Number is displayed in the form of 0.0000E+00, such as 1.2346E+09, or 1.23456E-04

- **Scientific, 3 decimal digits** - Number is displayed in the form of 0.000E+00, such as 1.235E+09, or 1.235E-0

- **Scientific, 2 decimal digits** - Number is displayed in the form of 0.00E+00, such as 1.23E+09, or 1.23E-04

- **Scientific, 1 decimal digits** - Number is displayed in the form of 0.0E+00, such as 1.2E+09, or 1.2E-04

- **Scientific, 0 decimal digits** - Number is displayed in the form of 0E+00, such as 1E+09, or 1E-04

- **Rounded value** - If the first significant digit is in the decimal potion of the number, the value will be rounded to the nearest integer value. For example, for a value 0.0001234567890, it will be rounded to 0, and the displayed text in cell will be 0.

- **Hash marks** - If no condensed version of the number can be displayed, hashes (#) will be repeated through the width of the cell.

- **Empty string** - If no hash marks can fit in the cell, an empty string will be returned as displayed cell text.

If the format string for numeric value does not contain General or @, there are only the following stages of resizing: Normal value, Hash marks, Empty string

If a text is used in the cell, the cell displayed text will always be full value, regardless of whether it is cut off or not in the cell.

The only time when this is not the case is when padding characters are used in format string. Then the value will be displayed as all hash marks when there is not enough room for the text.

You can set the worksheet's `DisplayOptions`' `ShowFormulasInCells` property to  have formulas be displayed in cells instead of their results, and format strings and cell widths are ignored. Text values display as if their format string were @ , non-integral numeric values display as if their format string were 0.0 and integral numeric values display as if their format string were 0 .

Additionally, if the value cannot fit, it will not display as all hashes. Display text will still return its full text as the cell text, even though it may not be fully seen.

The following code snippet demonstrates the usage of the `GetText` method to get the text as it would be displayed in Excel:

```razor
var workbook = new Workbook();
var worksheet = workbook.Worksheets.Add("Sheet1");

var cellText = worksheet.Rows[0].Cells[0].GetText();
```

## API References

- `Add`
- `CellFillLinearGradient`
- `CellFillPattern`
- `CellFillRectangularGradient`
- `CellFill`
- `CellFormat`
- `DisplayOptions`'
- `Formula`
- `MergedCellsRegions`
- `WorkbookColorInfo`
- `WorkbookStyle`
- `Workbook`
- `WorksheetCell`
- `WorksheetColumn`
- `WorksheetRegion`
- `WorksheetRow`
- `Worksheet`
