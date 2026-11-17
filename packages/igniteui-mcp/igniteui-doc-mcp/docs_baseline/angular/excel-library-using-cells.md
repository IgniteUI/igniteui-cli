---
title: "Angular Excel Library| Using Cells | Infragistics"
description: Learn how to perform operations on Infragistics' Angular excel library's cells such as accessing them, adding formulas and comments, merging cells and formatting cells. View Ignite UI for Angular excel demos!
keywords: Excel library,  cell operations, Ignite UI for Angular, Infragistics
license: commercial
mentionedTypes: ["Workbook", "Worksheet", "WorksheetCell", "WorkbookStyleCollection", "IWorksheetCellFormat", "WorkbookColorInfo", "DisplayOptions"]
llms:
  description: "The WorksheetCell objects in an Excel worksheet is the object that holds your actual data values for the worksheet."
platformType: xplat-unmapped
_tocName: Using Cells
_premium: true
---
# Angular Using Cells

The [`WorksheetCell`](mcp:get_api_reference?platform=angular&component=WorksheetCell) objects in an Excel worksheet is the object that holds your actual data values for the worksheet. This topic goes over the many operations that you can perform on these cells, such as accessing them and their regions by name, adding formulas and comments to the cells, and merging and formatting them.

## Angular Using Cells Example

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxExcelModule } from "igniteui-angular-excel";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,

],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxExcelModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { CellReferenceMode } from "igniteui-angular-excel";
import { WorksheetMergedCellsRegion } from "igniteui-angular-excel";
import { FormattedString } from "igniteui-angular-excel";
import { Formula } from "igniteui-angular-excel";
import { Workbook } from "igniteui-angular-excel";
import { WorkbookFormat } from "igniteui-angular-excel";
import { Worksheet } from "igniteui-angular-excel";
import { WorksheetCellComment } from "igniteui-angular-excel";
import { ExcelUtility } from "./ExcelUtility";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    @ViewChild("gridContainer", { read: ViewContainerRef })
    public gridContainerRef: ViewContainerRef;
    public canSave = false;
    public wb: Workbook;
    public ws: Worksheet;
    public worksheetRegion: string[];
    public selectedRegion: string;
    public cellFeatures: string[];

    constructor() {
    }

    public ngOnInit() {
        this.workbookCreate();
    }
    public workbookSave(): void {
        if (this.canSave) {
            ExcelUtility.save(this.wb, "ExcelWorkbook").then((f) => {
                console.log("Saved:" + f);
            }, (e) => {
                console.error("ExcelUtility.Save Error:" + e);
            });
        }
    }
    public workbookParse(wb: Workbook): void {
        if (wb === undefined) {
            this.worksheetRegion = null;
            this.selectedRegion = null;
        } else {
            const names = new Array<string>();
            for (const ws of wb.worksheets()) {
                for (const tbl of ws.tables()) {
                    names.push(ws.name + " - " + tbl.name);
                }
            }
            this.worksheetRegion = names;
            this.selectedRegion = names.length > 0 ? names[0] : null;
        }
        this.wb = wb;
        this.canSave = wb != null;
    }
    public workbookCreate(): void {
        const wb = new Workbook(WorkbookFormat.Excel2007);
        const employeeSheet = wb.worksheets().add("Employees");
        const employeeHeader = employeeSheet.rows(0);
        const companies = ["Amazon", "Ford", "Jaguar", "Tesla", "IBM", "Microsoft" ];
        const firstNames = ["Andrew", "Mike", "Martin", "Ann", "Victoria", "John", "Brian", "Jason", "David" ];
        const lastNames = ["Smith", "Jordan", "Johnson", "Anderson", "Louis", "Phillips", "Williams" ];
        const countries = ["UK", "France", "USA", "Germany", "Poland", "Brazil" ];
        const titles = ["Sales Rep.", "Engineer", "Administrator", "Manager" ];
        const employeeColumns = ["Name", "Company", "Title", "Age", "Country"];
        for (let col = 0; col < employeeColumns.length; col++) {
            employeeSheet.columns(col).width = 5000;
            employeeHeader.setCellValue(col, employeeColumns[col]);
        }
        for (let i = 1; i < 20; i++) {
            const company = this.getItem(companies);
            const title = this.getItem(titles);
            const country = this.getItem(countries);
            const name = this.getItem(firstNames) + " " + this.getItem(lastNames);
            const salary = this.getRandom(45000, 95000);
            const age = this.getRandom(20, 65);
            const wr = employeeSheet.rows(i);
            wr.setCellValue(0, name);
            wr.setCellValue(1, company);
            wr.setCellValue(2, title);
            wr.setCellValue(3, age);
            wr.setCellValue(4, country);
            wr.setCellValue(5, salary);
        }
        const expanseSheet = wb.worksheets().add("Expanses");
        const expanseHeader = expanseSheet.rows(0);
        const expanseNames = ["Year", "Computers", "Research", "Travel", "Salary", "Software" ];
        let expanseCol = 0;
        for (const key of expanseNames) {
            expanseSheet.columns(expanseCol).width = 5000;
            expanseHeader.setCellValue(expanseCol, key);
            for (let i = 1; i < 20; i++) {
                const wr = expanseSheet.rows(i);
                if (key === "Year") {
                    wr.setCellValue(expanseCol, 2010 + i);
                } else if (key === "Computers") {
                    wr.setCellValue(expanseCol, this.getAmount(50000, 65000));
                } else if (key === "Research") {
                    wr.setCellValue(expanseCol, this.getAmount(150000, 165000));
                } else if (key === "Travel") {
                    wr.setCellValue(expanseCol, this.getAmount(20000, 25000));
                } else if (key === "Salary") {
                    wr.setCellValue(expanseCol, this.getAmount(4000000, 450000));
                } else if (key === "Software") {
                    wr.setCellValue(expanseCol, this.getAmount(100000, 150000));
                }
            }
            expanseCol++;
        }
        const incomeSheet = wb.worksheets().add("Income");
        const incomeHeader = incomeSheet.rows(0);
        const incomeNames = ["Year", "Phones", "Computers", "Software", "Services", "Royalties" ];
        let incomeCol = 0;
        for (const key of incomeNames) {
            incomeSheet.columns(incomeCol).width = 5000;
            incomeHeader.setCellValue(incomeCol, key);
            for (let i = 1; i < 20; i++) {
                const wr = incomeSheet.rows(i);
                if (key === "Year") {
                    wr.setCellValue(incomeCol, 2010 + i);
                } else if (key === "Software") {
                    wr.setCellValue(incomeCol, this.getAmount(700000, 850000));
                } else if (key === "Computers") {
                    wr.setCellValue(incomeCol, this.getAmount(250000, 265000));
                } else if (key === "Royalties") {
                    wr.setCellValue(incomeCol, this.getAmount(400000, 450000));
                } else if (key === "Phones") {
                    wr.setCellValue(incomeCol, this.getAmount(6000000, 650000));
                } else if (key === "Services") {
                    wr.setCellValue(incomeCol, this.getAmount(700000, 750000));
                }
            }
            incomeCol++;
        }
        this.workbookParse(wb);
    }
    public onCommentChanged(input: HTMLInputElement): void {
        const ws = this.wb.worksheets(0);
        const wr = ws.rows(0);
        const d = new WorksheetCellComment();
        const formatted = new FormattedString("This cell has a reference name.");
        if (input.checked === true) {
            // Cell Comment
            d.text = formatted;
            wr.cells(0).comment = d;
        } else {
            wr.cells(0).comment = null;
        }
    }
    public onFormulaChanged(input: HTMLInputElement): void {
        // Cell Formula
        const ws = this.wb.worksheets(0);
        let formula: Formula;
        if (input.checked === true) {
            // Using a Formula object to apply a formula
            formula = Formula.parse("=AVERAGE(F2:F20)", CellReferenceMode.A1);
            formula.applyTo(ws.rows(21).cells(5));
            ws.rows(20).cells(5).value = "Average Salary";
        } else {
            if (ws.rows(21).cells(5).formula != null) {
                formula = ws.rows(21).cells(5).formula;
            }
            if (formula != null) {
                ws.rows(21).cells(5).value = null;
                ws.rows(20).cells(5).value = null;
            }
        }
    }
    public onMergeChanged(input: HTMLInputElement): void {
        let mergedRegion: WorksheetMergedCellsRegion;
        if (input.checked === true) {
            // Using merge cells
             this.wb.worksheets(0).rows(2).cells(2).value = "Engineer";
             this.wb.worksheets(0).rows(3).cells(2).value = "Engineer";
             this.wb.worksheets(0).rows(4).cells(2).value = "Engineer";
             this.wb.worksheets(0).mergedCellsRegions().add(2, 2, 4, 2);
             mergedRegion = this.wb.worksheets(0).mergedCellsRegions(0);
        } else {
            if (this.wb.worksheets(0).mergedCellsRegions().count === 1) {
                    mergedRegion = this.wb.worksheets(0).mergedCellsRegions(0);
                }
            if (mergedRegion != null) {
                this.wb.worksheets(0).mergedCellsRegions().removeAt(0);
                this.wb.worksheets(0).rows(2).cells(2).value = "Engineer";
                this.wb.worksheets(0).rows(3).cells(2).value = "Engineer";
                this.wb.worksheets(0).rows(4).cells(2).value = "Engineer";
            }
        }
    }
    public getRandom(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    public getItem(array: string[]): string {
        const i = this.getRandom(0, array.length - 1);
        return array[i];
    }
    public getAmount(min: number, max: number) {
        const n = this.getRandom(min, max);
        const s = n.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
        return s;
    }
}
```
```html
<div class="container">
    <div class="cellOptions">

        <div class="workbookOperations">
            <button class="workbookButton" (click)="workbookSave()" [disabled]="!canSave">
                <label>Save Workbook</label>
            </button>
        </div>
        <div class="cellFeatures">
            <label class="label">Add a Comment to cell A1: </label>
            <input type="checkbox" id="addComment" (change)='onCommentChanged($event.target)'> <br/>
            <label class="label">Add a Formula for cells F2 to F20: </label>
            <input type="checkbox" id="addFormula" (change)='onFormulaChanged($event.target)'>  <br/>
            <label class="label">Merge Cells: </label>
            <input type="checkbox" id="mergeCells" (change)='onMergeChanged($event.target)'>
        </div>
    </div>


</div>
```
```scss
.cellOptions {
    display: "block";
    width: 100%;
}

.workbookOperations {
    width: 160px;
    padding-left: 5px;
    padding-right: 5px;
    float:left;
}

.workbookDetails {
    float:left;
    width: 35%;
    height: 100px;
    padding-left: 5px;
    padding-right: 5px;
}

.cellFeatures {
    float:left;
    width: 35%;
    height: 100px;
    padding-left: 5px;
    padding-right: 5px;
}

.workbookDetails > select {
    display: inline-block;
    width: 100%;
    height: 90px;
}

.label {
    margin-top: 8px;
    font-weight: bold;
}

.workbookPreview {
    display: inline-block;
    padding-left: 5px;
    padding-right: 5px;
    width: 100%;
    height: 200px;
}

.workbookButton {
    display: block;
    width: 150px;
    margin-top: 5px;
}

.workbookSelector {
    display: inline-block;
    width: 150px;
    margin-top: 5px;
}
```

## References

The following code shows the imports needed to use the code-snippets below:

```ts
import { Workbook } from "igniteui-angular-excel";
import { WorkbookFormat } from "igniteui-angular-excel";
import { Worksheet } from "igniteui-angular-excel";
import { WorksheetTable } from "igniteui-angular-excel";
import { NamedReference } from "igniteui-angular-excel";
import { WorksheetCellComment } from "igniteui-angular-excel";
import { FormattedString } from "igniteui-angular-excel";
```

## Referencing Cells and Regions

You can access a [`WorksheetCell`](mcp:get_api_reference?platform=angular&component=WorksheetCell) object or a [`WorksheetRegion`](mcp:get_api_reference?platform=angular&component=WorksheetRegion) object by calling the [`Worksheet`](mcp:get_api_reference?platform=angular&component=Worksheet) object’s [`GetCell`](mcp:get_api_reference?platform=angular&component=Worksheet&member=getCell) or [`GetRegion`](mcp:get_api_reference?platform=angular&component=Worksheet&member=getRegion) methods, respectively. Both methods accept a string parameter that references a cell. Getting a reference to a cell is useful when applying formats or working with formulas and cell contents.

The following example code demonstrates how to reference cells and regions:

```ts
var workbook = new Workbook();
var worksheet = workbook.worksheets().add("Sheet1");

//Accessing a single cell
var cell = worksheet.getCell("E2");
//Accessing a range of cells
var region = worksheet.getRegion("G1:G10");
```

## Accessing Cells and Regions by Name

In Microsoft Excel, individual cells, as well as cell regions can have names assigned to them. The name of a cell or region can be used to reference that cell or region instead of their address.

The Infragistics Angular Excel Library supports the referencing of cells and regions by name through the [`GetCell`](mcp:get_api_reference?platform=angular&component=Worksheet&member=getCell) and [`GetRegion`](mcp:get_api_reference?platform=angular&component=Worksheet&member=getRegion) methods of the [`Worksheet`](mcp:get_api_reference?platform=angular&component=Worksheet) object. You refer to the cell or region using the [`NamedReference`](mcp:get_api_reference?platform=angular&component=NamedReference) instance that refers to that cell or region.

You can use the following code snippet as an example for naming a cell or region:

```ts
var workbook = new Workbook();
var worksheet = workbook.worksheets().add("Sheet1");

var cell_reference = workbook.namedReferences().add("myCell", "=Sheet1:A1");
var region_reference = workbook.namedReferences().add("myRegion", "=Sheet1!A1:B2");
```

The following code can be used to the get the cell and region referenced by the "myCell" and "myRegion" named references above:

```ts
var cell = worksheet.getCell("myCell");
var region = worksheet.getRegion("myRegion");
```

## Adding a Comment to a Cell

A comment allows you to display hints or notes for a cell when the end user’s mouse hovers over a cell. The comments display as a tooltip-like callout that contains text. The Infragistics Angular Excel Library allows you to add comments to a cell by setting a [`WorksheetCell`](mcp:get_api_reference?platform=angular&component=WorksheetCell) object’s [`Comment`](mcp:get_api_reference?platform=angular&component=WorksheetCell&member=comment) property.

The following example code demonstrates how to add a comment to a cell:

```ts
var workbook = new Workbook();
var worksheet = workbook.worksheets().add("Sheet1");

var cellComment = new WorksheetCellComment();
var commentText = new FormattedString("This cell has a comment.");
cellComment.text = commentText;

worksheet.rows(0).cells(0).comment = cellComment;
```

## Adding a Formula to a Cell

The Infragistics Angular Excel Library allows you to add Microsoft Excel formulas to a cell or group of cells in a worksheet. You can do this using the [`WorksheetCell`](mcp:get_api_reference?platform=angular&component=WorksheetCell) object’s [`ApplyFormula`](mcp:get_api_reference?platform=angular&component=WorksheetCell&member=applyFormula) method or by instantiating a [`Formula`](mcp:get_api_reference?platform=angular&component=Formula) object and applying it to a cell. Regardless of the manner in which you apply a formula to a cell, you can access the [`Formula`](mcp:get_api_reference?platform=angular&component=Formula) object using the [`WorksheetCell`](mcp:get_api_reference?platform=angular&component=WorksheetCell) object’s [`Formula`](mcp:get_api_reference?platform=angular&component=WorksheetCell&member=formula) property. If you need the value, use the cell’s [`Value`](mcp:get_api_reference?platform=angular&component=WorksheetCell&member=value) property.

The following code shows you how to add a formula to a cell.

```ts
 var workbook = new Workbook();
 var worksheet = workbook.worksheets().add("Sheet1");
 worksheet.rows(5).cells(0).applyFormula("=SUM(A1:A5)");

 //Using a Formula object to apply a formula
 var sumFormula = Formula.parse("=SUM(A1:A5)", CellReferenceMode.A1);
 sumFormula.applyTo(worksheet.rows(5).cells(0));
```

## Copying a Cell’s Format
Cells can have different formatting, including background color, format string, and font style. If you need a cell to have the same format as a previously formatted cell, instead of individually setting each option exposed by the [`WorksheetCell`](mcp:get_api_reference?platform=angular&component=WorksheetCell) object’s [`CellFormat`](mcp:get_api_reference?platform=angular&component=WorksheetCell&member=cellFormat) property, you can call the [`IWorksheetCellFormat`](mcp:get_api_reference?platform=angular&component=IWorksheetCellFormat) object’s [`SetFormatting`](mcp:get_api_reference?platform=angular&component=IWorksheetCellFormat&member=setFormatting) method and pass it a [`IWorksheetCellFormat`](mcp:get_api_reference?platform=angular&component=IWorksheetCellFormat) object to copy. This will copy every format setting from the first cell to the second cell. You can also do this for a row, merged cell region, or column.

The following code shows you how to copy the format of the 2nd column to the 4th column:

```ts
var workbook = new Workbook();
var worksheet = workbook.worksheets().add("Sheet1");

//Format 2nd column
worksheet.columns(1).cellFormat.fill = CellFill.createSolidFill("Blue");
worksheet.columns(1).cellFormat.font.bold = true;

//Copy format of 2nd column to 4th column
worksheet.columns(3).cellFormat.setFormatting(worksheet.columns(1).cellFormat);
```

## Formatting a Cell

The Infragistics Angular Excel Library allows you to customize the look and behavior of a cell. You can customize a cell by setting properties exposed by the [`CellFormat`](mcp:get_api_reference?platform=angular&component=WorksheetCell&member=cellFormat) property of the [`WorksheetCell`](mcp:get_api_reference?platform=angular&component=WorksheetCell), [`WorksheetRow`](mcp:get_api_reference?platform=angular&component=WorksheetRow), [`WorksheetColumn`](mcp:get_api_reference?platform=angular&component=WorksheetColumn), or [`WorksheetMergedCellsRegion`](mcp:get_api_reference?platform=angular&component=WorksheetMergedCellsRegion) objects.

You can customize every aspect of a cell’s appearance. You can set a cell’s font, background, and borders, as well as text alignment and rotation. You can even apply a different format on a character-by-character basis for a cell’s text.

You can also format cell values by assigning a format string. An acceptable format string follows the traditional format standards and formatting codes.

The following code shows you how to format a cell to display numbers as currency:

```ts
var workbook = new Workbook(format);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.columns(2).cellFormat.formatString = "\"$\"#,##0.00";
```

## Excel 2007 Color Model

The color palette is analogous to the color dialog in Microsoft Excel 2007 UI. You can open this color dialog by navigating to Excel Options => Save => Colors.

You can create all possible fill types using static properties and methods on the [`CellFill`](mcp:get_api_reference?platform=angular&component=CellFill) class. They are as follows:

- [`Workbook.noColor`](mcp:get_api_reference?platform=angular&component=Workbook&member=noColor) - A property that represents a fill with no color, which allows a background image of the worksheet, if any, to show through.

- [`Workbook.createSolidFill`](mcp:get_api_reference?platform=angular&component=Workbook&member=createSolidFill) - Returns a [`CellFillPattern`](mcp:get_api_reference?platform=angular&component=CellFillPattern) instance which has a pattern style of [`Workbook.solid`](mcp:get_api_reference?platform=angular&component=Workbook&member=solid) and a background color set to the [`Color`](mcp:get_api_reference?platform=angular&component=WorkbookColorInfo&member=color) or [`WorkbookColorInfo`](mcp:get_api_reference?platform=angular&component=WorkbookColorInfo) specified in the method.

- [`Workbook.createPatternFill`](mcp:get_api_reference?platform=angular&component=Workbook&member=createPatternFill) - Returns a [`CellFillPattern`](mcp:get_api_reference?platform=angular&component=CellFillPattern) instance which has the specified pattern style and the [`Color`](mcp:get_api_reference?platform=angular&component=WorkbookColorInfo&member=color) or [`WorkbookColorInfo`](mcp:get_api_reference?platform=angular&component=WorkbookColorInfo) values, specified for the background and pattern colors.

- [`Workbook.createLinearGradientFill`](mcp:get_api_reference?platform=angular&component=Workbook&member=createLinearGradientFill) - Returns a [`CellFillLinearGradient`](mcp:get_api_reference?platform=angular&component=CellFillLinearGradient) instance with the specified angle and gradient stops.

- [`Workbook.createRectangularGradientFill`](mcp:get_api_reference?platform=angular&component=Workbook&member=createRectangularGradientFill) - Returns a [`CellFillRectangularGradient`](mcp:get_api_reference?platform=angular&component=CellFillRectangularGradient) instance with the specified left, top, right, and bottom of the inner rectangle and gradient stops. If the inner rectangle values are not specified, the center of the cell is used as the inner rectangle.

The derived types, representing the various fills which can be created, are as follows:

- [`CellFillPattern`](mcp:get_api_reference?platform=angular&component=CellFillPattern) - A pattern that represents a cell fill of no color, a solid color, or a pattern fill for a cell. It has background color info and a pattern color info which correspond directly to the color sections in the Fill tab of the Format Cells dialog of Excel.

- [`CellFillLinearGradient`](mcp:get_api_reference?platform=angular&component=CellFillLinearGradient) - Represents a linear gradient fill. It has an angle, which is degrees clockwise of the left to right linear gradient, and a gradients stops collection which describes two or more color transitions along the length of the gradient.

- [`CellFillRectangularGradient`](mcp:get_api_reference?platform=angular&component=CellFillRectangularGradient) - Represents a rectangular gradient fill. It has top, left, right, and bottom values, which describe, in relative coordinates, the inner rectangle from which the gradient starts and goes out to the cell edges. It also has a gradient stops collection which describes two or more color transitions along the path from the inner rectangle to the cell edges.

The following code snippet demonstrates how to create a solid fill in a [`WorksheetCell`](mcp:get_api_reference?platform=angular&component=WorksheetCell):

```ts
var workbook = new Workbook();
var worksheet = workbook.worksheets().add("Sheet1");

var cellFill = CellFill.createSolidFill("Blue");
worksheet.rows(0).cells(0).cellFormat.fill = cellFill;
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

Colors are defined by the [`WorkbookColorInfo`](mcp:get_api_reference?platform=angular&component=WorkbookColorInfo) class, which is a sealed immutable class. The class has a static [`Workbook.automatic`](mcp:get_api_reference?platform=angular&component=Workbook&member=automatic) property, which returns the automatic color, and there are various constructors which allow you to create a [`WorkbookColorInfo`](mcp:get_api_reference?platform=angular&component=WorkbookColorInfo) instance with a color or a theme value and an optional tint.

The [`GetResolvedColor`](mcp:get_api_reference?platform=angular&component=WorkbookColorInfo&member=getResolvedColor) method on [`WorkbookColorInfo`](mcp:get_api_reference?platform=angular&component=WorkbookColorInfo) allows you to determine what color will actually be seen by the user when they open the file in Excel.

If the [`WorkbookColorInfo`](mcp:get_api_reference?platform=angular&component=WorkbookColorInfo) represents a theme color, you must pass in a Workbook instance to the method so it can get the theme color’s RGB value from the workbook.

When saving out in the newer file formats such as .xlsx, the newer color information is saved directly into the file. When saving out in an older file format such as .xls, the index to the closest color in the palette will be saved out. In addition, the older formats have future feature records that can be saved out to indicate the newer color information.

When the older formats are opened in Microsoft Excel 2003 and earlier versions, these future features records are ignored, but when the older file formats are opened in Excel 2007 and later, their records are read and the color information from them overwrites the indexed color that was previously loaded from the normal format records.

## Excel Format Support

You can set a host of different formats on a [`WorksheetCell`](mcp:get_api_reference?platform=angular&component=WorksheetCell) by using the [`IWorksheetCellFormat`](mcp:get_api_reference?platform=angular&component=IWorksheetCellFormat) object returned by the [`CellFormat`](mcp:get_api_reference?platform=angular&component=WorksheetCell&member=cellFormat) property of that cell. This [`IWorksheetCellFormat`](mcp:get_api_reference?platform=angular&component=IWorksheetCellFormat) object enables you to style many different aspects of the cell such as borders, font, fill, alignments, and whether or not the cell should shrink to fit or be locked.

You can also access the built-in styles to Microsoft Excel 2007 using the [`Styles`](mcp:get_api_reference?platform=angular&component=Workbook&member=styles) collection of the [`Workbook`](mcp:get_api_reference?platform=angular&component=Workbook) object. The full list of styles in Excel can be found in the Cell Styles gallery of the Home tab of Microsoft Excel 2007.

There is a special type of style on the workbook’s [`Styles`](mcp:get_api_reference?platform=angular&component=Workbook&member=styles) collection known as the "normal" style, which can be accessed using that collection’s [`NormalStyle`](mcp:get_api_reference?platform=angular&component=WorkbookStyleCollection&member=normalStyle) property, or by indexing into the collection with the name "Normal".

The [`NormalStyle`](mcp:get_api_reference?platform=angular&component=WorkbookStyleCollection&member=normalStyle) contains the default properties for all cells in the workbook, unless otherwise specified on a row, column, or cell. Changing the properties on the [`NormalStyle`](mcp:get_api_reference?platform=angular&component=WorkbookStyleCollection&member=normalStyle) will change all of the default cell format properties on the workbook. This is useful, for example, if you want to change the default font for your workbook.

You can clear the [`Styles`](mcp:get_api_reference?platform=angular&component=Workbook&member=styles) collection or reset it to its predefined state by using the [`Clear`](mcp:get_api_reference?platform=angular&component=WorkbookStyleCollection&member=clear) and [`Reset`](mcp:get_api_reference?platform=angular&component=WorkbookStyleCollection&member=reset) methods, respectively. Both of these will remove all user-defined styles, but [`Clear`](mcp:get_api_reference?platform=angular&component=WorkbookStyleCollection&member=clear) will clear the [`Styles`](mcp:get_api_reference?platform=angular&component=Workbook&member=styles) collection entirely.

With this feature, a [`Style`](mcp:get_api_reference?platform=angular&component=IWorksheetCellFormat&member=style) property has been added to the [`IWorksheetCellFormat`](mcp:get_api_reference?platform=angular&component=IWorksheetCellFormat) object. This is a reference to a [`WorkbookStyle`](mcp:get_api_reference?platform=angular&component=WorkbookStyle) instance, representing the parent style of the format. For formats of a style, this property will always be null, because styles cannot have a parent style. For row, column, and cell formats, the [`Style`](mcp:get_api_reference?platform=angular&component=IWorksheetCellFormat&member=style) property always returns the [`NormalStyle`](mcp:get_api_reference?platform=angular&component=WorkbookStyleCollection&member=normalStyle) by default.

If the [`Style`](mcp:get_api_reference?platform=angular&component=IWorksheetCellFormat&member=style) property is set to null, it will revert back to the [`NormalStyle`](mcp:get_api_reference?platform=angular&component=WorkbookStyleCollection&member=normalStyle). If it is set to another style in the styles collection, that style will now hold the defaults for all unset properties on the cell format.

When the [`Style`](mcp:get_api_reference?platform=angular&component=IWorksheetCellFormat&member=style) property is set on a cell format, the format options included on the [`Style`](mcp:get_api_reference?platform=angular&component=IWorksheetCellFormat&member=style) are removed from the cell format. All other properties are left intact. For example, if a cell style including border formatting was created and that style was set as the cell’s [`Style`](mcp:get_api_reference?platform=angular&component=IWorksheetCellFormat&member=style), the border format option on the cell format would be removed and the cell format only includes fill formatting.

When a format option flag is removed from a format, all associated properties are reset to their unset values, so the cell format’s border properties are implicitly reset to default/unset values.

You can determine what would really be seen in cells by using the [`GetResolvedCellFormat`](mcp:get_api_reference?platform=angular&component=WorksheetCell&member=getResolvedCellFormat) method on classes which represent a row, column, cell, and merged cell.

This method returns a [`IWorksheetCellFormat`](mcp:get_api_reference?platform=angular&component=IWorksheetCellFormat) instance which refers back to the associated [`IWorksheetCellFormat`](mcp:get_api_reference?platform=angular&component=IWorksheetCellFormat) on which it is based. So subsequent changes to the [`CellFormat`](mcp:get_api_reference?platform=angular&component=WorksheetCell&member=cellFormat) property will be reflected in the instance returned from a [`GetResolvedCellFormat`](mcp:get_api_reference?platform=angular&component=WorksheetCell&member=getResolvedCellFormat) call.

## Merging Cells

Aside from setting the value or format of cells, you can also merge cells to make two or more cells appear as one. If you merge cells, they must be in a rectangular region.

When you merge cells, each cell in the region will have the same value and cell format. The merged cells will also be associated with the same [`WorksheetMergedCellsRegion`](mcp:get_api_reference?platform=angular&component=WorksheetMergedCellsRegion) object, accessible from their [`AssociatedMergedCellsRegion`](mcp:get_api_reference?platform=angular&component=WorksheetCell&member=associatedMergedCellsRegion) property. The resultant [`WorksheetMergedCellsRegion`](mcp:get_api_reference?platform=angular&component=WorksheetMergedCellsRegion) object will also have the same value and cell format as the cells.

Setting the value (or cell format) of the region or any cell in the region will change the value of all cells and the region. If you un-merge cells, all of the previously merged cells will retain the shared cell format they had before they were unmerged. However, only the top-left cell of the region will retain the shared value.

In order to create a merged cell region, you must add a range of cells to the [`Worksheet`](mcp:get_api_reference?platform=angular&component=Worksheet) object’s [`MergedCellsRegions`](mcp:get_api_reference?platform=angular&component=Worksheet&member=mergedCellsRegions) collection. This collection exposes an [`Workbook.add`](mcp:get_api_reference?platform=angular&component=Workbook&member=add) method that takes four integer parameters. The four parameters determine the index of the starting row and column (top-left most cell) and the index of the ending row and column (bottom-right most cell).

```ts
var workbook = new Workbook();
var worksheet = workbook.worksheets().add("Sheet1");

// Make some column headers
worksheet.rows(1).cells(1).value = "Morning";
worksheet.rows(1).cells(2).value = "Afternoon";
worksheet.rows(1).cells(3).value = "Evening";

// Create a merged region from column 1 to column 3
var mergedRegion1 =  ws.mergedCellsRegions().add(0, 1, 0, 3);

// Set the value of the merged region
mergedRegion1.value = "Day 1";

// Set the cell alignment of the middle cell in the merged region.
// Since a cell and its merged region shared a cell format, this will ultimately set the format of the merged region
worksheet.rows(0).cells(2).cellFormat.alignment = HorizontalCellAlignment.Center;
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

You can set the worksheet's [`DisplayOptions`](mcp:get_api_reference?platform=angular&component=Worksheet&member=displayOptions)' [`ShowFormulasInCells`](mcp:get_api_reference?platform=angular&component=DisplayOptions&member=showFormulasInCells) property to have formulas be displayed in cells instead of their results, and format strings and cell widths are ignored. Text values display as if their format string were @ , non-integral numeric values display as if their format string were 0.0 and integral numeric values display as if their format string were 0 .

Additionally, if the value cannot fit, it will not display as all hashes. Display text will still return its full text as the cell text, even though it may not be fully seen.

The following code snippet demonstrates the usage of the [`GetText`](mcp:get_api_reference?platform=angular&component=WorksheetCell&member=getText) method to get the text as it would be displayed in Excel:

```ts
var workbook = new Workbook();
var worksheet = this.workbook.worksheets().add("Sheet1");

var cellText = worksheet.rows(0).cells(0).getText();
```

## API References
[`CellFillLinearGradient`](mcp:get_api_reference?platform=angular&component=CellFillLinearGradient)
[`CellFillPattern`](mcp:get_api_reference?platform=angular&component=CellFillPattern)
[`CellFillRectangularGradient`](mcp:get_api_reference?platform=angular&component=CellFillRectangularGradient)
[`CellFill`](mcp:get_api_reference?platform=angular&component=CellFill)
[`IWorksheetCellFormat`](mcp:get_api_reference?platform=angular&component=IWorksheetCellFormat)
[`Formula`](mcp:get_api_reference?platform=angular&component=Formula)
[`WorkbookColorInfo`](mcp:get_api_reference?platform=angular&component=WorkbookColorInfo)
[`WorkbookStyle`](mcp:get_api_reference?platform=angular&component=WorkbookStyle)
[`Workbook`](mcp:get_api_reference?platform=angular&component=Workbook)
[`WorksheetCell`](mcp:get_api_reference?platform=angular&component=WorksheetCell)
[`WorksheetColumn`](mcp:get_api_reference?platform=angular&component=WorksheetColumn)
[`WorksheetRegion`](mcp:get_api_reference?platform=angular&component=WorksheetRegion)
[`WorksheetRow`](mcp:get_api_reference?platform=angular&component=WorksheetRow)
[`Worksheet`](mcp:get_api_reference?platform=angular&component=Worksheet)
