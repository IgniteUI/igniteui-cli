---
title: React Excel Library| Using Cells | Infragistics
_description: Learn how to perform operations on Infragistics' React excel library's cells such as accessing them, adding formulas and comments, merging cells and formatting cells. View Ignite UI for React excel demos!
_keywords: Excel library,  cell operations, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Workbook", "Worksheet", "WorksheetCell", "WorkbookStyleCollection", "IWorksheetCellFormat", "WorkbookColorInfo", "DisplayOptions"]
_tocName: Using Cells
_premium: true
---

# React Using Cells

The [`WorksheetCell`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html) objects in an Excel worksheet is the object that holds your actual data values for the worksheet. This topic goes over the many operations that you can perform on these cells, such as accessing them and their regions by name, adding formulas and comments to the cells, and merging and formatting them.

## React Using Cells Example

```typescript
export class ExcelSharedData {

}
```
```typescript
import { saveAs } from "file-saver";
import { Workbook } from 'igniteui-react-excel';
import { WorkbookFormat } from 'igniteui-react-excel';
import { WorkbookSaveOptions } from 'igniteui-react-excel';
import { WorkbookLoadOptions } from 'igniteui-react-excel';
import { IgrExcelXlsxModule } from 'igniteui-react-excel';
import { IgrExcelCoreModule } from 'igniteui-react-excel';
import { IgrExcelModule } from 'igniteui-react-excel';

IgrExcelCoreModule.register();
IgrExcelModule.register();
IgrExcelXlsxModule.register();

export class ExcelUtility {

    public static getExtension(format: WorkbookFormat): string {
        switch (format) {
            case WorkbookFormat.StrictOpenXml:
            case WorkbookFormat.Excel2007:
                return ".xlsx";
            case WorkbookFormat.Excel2007MacroEnabled:
                return ".xlsm";
            case WorkbookFormat.Excel2007MacroEnabledTemplate:
                return ".xltm";
            case WorkbookFormat.Excel2007Template:
                return ".xltx";
            case WorkbookFormat.Excel97To2003:
                return ".xls";
            case WorkbookFormat.Excel97To2003Template:
                return ".xlt";
        }
    }

    public static load(file: File): Promise<Workbook> {
        return new Promise<Workbook>((resolve, reject) => {
            ExcelUtility.readFileAsUint8Array(file).then((a) => {
                Workbook.load(a, new WorkbookLoadOptions(), (w) => {
                    resolve(w);
                }, (e) => {
                    reject(e);
                });
            }, (e) => {
                reject(e);
            });
        });
    }

    public static loadFromUrl(url: string): Promise<Workbook> {
        return new Promise<Workbook>((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open("GET", url, true);
            req.responseType = "arraybuffer";
            req.onload = (d): void => {
                const data = new Uint8Array(req.response);
                Workbook.load(data, new WorkbookLoadOptions(), (w) => {
                    resolve(w);
                }, (e) => {
                    reject(e);
                });
            };
            req.send();
        });
    }

    public static save(workbook: Workbook, fileNameWithoutExtension: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            const opt = new WorkbookSaveOptions();
            opt.type = "blob";

            workbook.save(opt, (d) => {
                const fileExt = ExcelUtility.getExtension(workbook.currentFormat);
                const fileName = fileNameWithoutExtension + fileExt;
                saveAs(d as Blob, fileName);
                resolve(fileName);
            }, (e) => {
                reject(e);
            });
        });
    }

    private static readFileAsUint8Array(file: File): Promise<Uint8Array> {
        return new Promise<Uint8Array>((resolve, reject) => {
            const fr = new FileReader();
            fr.onerror = (e): void => {
                reject(fr.error);
            };

            if (fr.readAsBinaryString) {
                fr.onload = (e): void => {
                    const rs = (fr as any).resultString;
                    const str: string = rs != null ? rs : fr.result;
                    const result = new Uint8Array(str.length);
                    for (let i = 0; i < str.length; i++) {
                        result[i] = str.charCodeAt(i);
                    }
                    resolve(result);
                };
                fr.readAsBinaryString(file);
            } else {
                fr.onload = (e): void => {
                    resolve(new Uint8Array(fr.result as ArrayBuffer));
                };
                fr.readAsArrayBuffer(file);
            }
        });
    }
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ExcelUtility } from './ExcelUtility';
// import { ExcelSharedData } from './ExcelSharedData';
import { IgrExcelModule } from 'igniteui-react-excel';
import { Workbook } from 'igniteui-react-excel';
import { Worksheet } from 'igniteui-react-excel';
import { WorkbookFormat } from 'igniteui-react-excel';
import { CellReferenceMode } from 'igniteui-react-excel';
import { WorksheetMergedCellsRegion } from 'igniteui-react-excel';
import { WorksheetCellComment } from 'igniteui-react-excel';
import { FormattedString } from 'igniteui-react-excel';
import { Formula } from 'igniteui-react-excel';

IgrExcelModule.register();

export default class ExcelLibraryWorkingWithCells extends React.Component<any, any> {
    public canSave = false;
    public wb: Workbook;
    public ws: Worksheet;
    public worksheetRegion: string[] | null;
    public selectedRegion: string | null;
    public cellFeatures: string[];

    constructor(props: any) {
        super(props);

        this.init();
    }

    public workbookSave(): void {
        if (this.canSave) {
            ExcelUtility.save(this.wb, "ExcelWorkbook").then((f: any) => {
                console.log("Saved:" + f);
            }, (e: any) => {
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
            const worksheets = wb.worksheets();
            const wsCount = worksheets.count;
            for (let i = 0; i < wsCount; i ++) {
                const tables = worksheets.item(i).tables();
                const tCount = tables.count;
                for (let j = 0; j < tCount; j++) {
                    names.push(worksheets.item(i).name + " - " + tables.item(j).name);
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

    public onCommentChanged = (event: any): void => {
        const ws = this.wb.worksheets(0);
        const wr = ws.rows(0);
        const d = new WorksheetCellComment();
        const formatted = new FormattedString("This cell has a reference name.");
        if (event.target.checked === true) {
            // Cell Comment
            d.text = formatted;
            wr.cells(0).comment = d;
        } else {
            wr.cells(0).comment = new WorksheetCellComment();
        }
    }
    public onFormulaChanged = (event: any): void => {
        // Cell Formula
        const ws = this.wb.worksheets(0);
        let formula: Formula | null = null;
        if (event.target.checked === true) {
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
    public onMergeChanged = (event: any): void => {
        let mergedRegion: WorksheetMergedCellsRegion | null = null;
        if (event.target.checked === true) {
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

    public onClick = () => {
        this.workbookSave();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <button style={{width: "auto"}} onClick={this.onClick}>Save Workbook</button>
                </div>
                <div className="options vertical">
                    <label className="label"><input type="checkbox" id="addComment" onChange={this.onCommentChanged}/>Add a Comment to cell A1: </label>
                    <label className="label"><input type="checkbox" id="addFormula" onChange={this.onFormulaChanged}/>Add a Formula for cells F2 to F20: </label>
                    <label className="label"><input type="checkbox" id="mergeCells" onChange={this.onMergeChanged}/>Merge Cells: </label>
                </div>
            </div>
        );
    }

    public init() {
        this.workbookCreate();
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ExcelLibraryWorkingWithCells/>);
```

<div class="divider--half"></div>

## References

The following code shows the imports needed to use the code-snippets below:

```ts
import { Workbook } from "igniteui-react-excel";
import { WorkbookFormat } from "igniteui-react-excel";
import { Worksheet } from "igniteui-react-excel";
import { WorksheetTable } from "igniteui-react-excel";
import { NamedReference } from "igniteui-react-excel";
import { WorksheetCellComment } from "igniteui-react-excel";
import { FormattedString } from "igniteui-react-excel";
```

## Referencing Cells and Regions

You can access a [`WorksheetCell`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html) object or a [`WorksheetRegion`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetregion.html) object by calling the [`worksheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetregion.html#worksheet) object’s [`getCell`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheet.html#getCell) or [`getRegion`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheet.html#getRegion) methods, respectively. Both methods accept a string parameter that references a cell. Getting a reference to a cell is useful when applying formats or working with formulas and cell contents.

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

The Infragistics React Excel Library supports the referencing of cells and regions by name through the [`getCell`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheet.html#getCell) and [`getRegion`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheet.html#getRegion) methods of the [`worksheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetregion.html#worksheet) object. You refer to the cell or region using the [`NamedReference`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.namedreference.html) instance that refers to that cell or region.

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

A comment allows you to display hints or notes for a cell when the end user’s mouse hovers over a cell. The comments display as a tooltip-like callout that contains text. The Infragistics React Excel Library allows you to add comments to a cell by setting a [`WorksheetCell`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html) object’s [`comment`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#comment) property.

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

The Infragistics React Excel Library allows you to add Microsoft Excel formulas to a cell or group of cells in a worksheet. You can do this using the [`WorksheetCell`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html) object’s [`applyFormula`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#applyFormula) method or by instantiating a [`formula`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#formula) object and applying it to a cell. Regardless of the manner in which you apply a formula to a cell, you can access the [`formula`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#formula) object using the [`WorksheetCell`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html) object’s [`formula`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#formula) property. If you need the value, use the cell’s [`value`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#value) property.

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

Cells can have different formatting, including background color, format string, and font style. If you need a cell to have the same format as a previously formatted cell, instead of individually setting each option exposed by the [`WorksheetCell`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html) object’s [`cellFormat`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#cellFormat) property, you can call the [`cellFormat`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#cellFormat) object’s [`setFormatting`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/interfaces/igniteui_react_excel.iworksheetcellformat.html#setFormatting) method and pass it a [`cellFormat`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#cellFormat) object to copy. This will copy every format setting from the first cell to the second cell. You can also do this for a row, merged cell region, or column.

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

The Infragistics React Excel Library allows you to customize the look and behavior of a cell. You can customize a cell by setting properties exposed by the [`cellFormat`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#cellFormat) property of the [`WorksheetCell`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html), [`WorksheetRow`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetrow.html), [`WorksheetColumn`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcolumn.html), or [`WorksheetMergedCellsRegion`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetmergedcellsregion.html) objects.

You can customize every aspect of a cell’s appearance. You can set a cell’s font, background, and borders, as well as text alignment and rotation. You can even apply a different format on a character-by-character basis for a cell’s text.

You can also format cell values by assigning a format string. An acceptable format string follows the traditional format standards and formatting codes.

The following code shows you how to format a cell to display numbers as currency:

```ts
var workbook = new Workbook(format);
var workbook = workbook.worksheets().add("Sheet1");

worksheet.columns(2).cellFormat.formatString = "\"$\"#,##0.00";
```

## Excel 2007 Color Model

The color palette is analogous to the color dialog in Microsoft Excel 2007 UI. You can open this color dialog by navigating to Excel Options => Save => Colors.

You can create all possible fill types using static properties and methods on the [`CellFill`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.cellfill.html) class. They are as follows:

- `NoColor` - A property that represents a fill with no color, which allows a background image of the worksheet, if any, to show through.

- `CreateSolidFill` - Returns a [`CellFillPattern`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.cellfillpattern.html) instance which has a pattern style of `Solid` and a background color set to the [`color`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbookcolorinfo.html#color) or [`WorkbookColorInfo`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbookcolorinfo.html) specified in the method.

- `CreatePatternFill` - Returns a [`CellFillPattern`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.cellfillpattern.html) instance which has the specified pattern style and the [`color`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbookcolorinfo.html#color) or [`WorkbookColorInfo`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbookcolorinfo.html) values, specified for the background and pattern colors.

- `CreateLinearGradientFill` - Returns a [`CellFillLinearGradient`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.cellfilllineargradient.html) instance with the specified angle and gradient stops.

- `CreateRectangularGradientFill` - Returns a [`CellFillRectangularGradient`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.cellfillrectangulargradient.html) instance with the specified left, top, right, and bottom of the inner rectangle and gradient stops. If the inner rectangle values are not specified, the center of the cell is used as the inner rectangle.

The derived types, representing the various fills which can be created, are as follows:

- [`CellFillPattern`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.cellfillpattern.html) - A pattern that represents a cell fill of no color, a solid color, or a pattern fill for a cell. It has background color info and a pattern color info which correspond directly to the color sections in the Fill tab of the Format Cells dialog of Excel.

- [`CellFillLinearGradient`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.cellfilllineargradient.html) - Represents a linear gradient fill. It has an angle, which is degrees clockwise of the left to right linear gradient, and a gradients stops collection which describes two or more color transitions along the length of the gradient.

- [`CellFillRectangularGradient`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.cellfillrectangulargradient.html) - Represents a rectangular gradient fill. It has top, left, right, and bottom values, which describe, in relative coordinates, the inner rectangle from which the gradient starts and goes out to the cell edges. It also has a gradient stops collection which describes two or more color transitions along the path from the inner rectangle to the cell edges.

The following code snippet demonstrates how to create a solid fill in a [`WorksheetCell`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html):

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

Colors are defined by the [`WorkbookColorInfo`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbookcolorinfo.html) class, which is a sealed immutable class. The class has a static `Automatic` property, which returns the automatic color, and there are various constructors which allow you to create a [`WorkbookColorInfo`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbookcolorinfo.html) instance with a color or a theme value and an optional tint.

The [`getResolvedColor`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbookcolorinfo.html#getResolvedColor) method on [`WorkbookColorInfo`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbookcolorinfo.html) allows you to determine what color will actually be seen by the user when they open the file in Excel.

If the [`WorkbookColorInfo`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbookcolorinfo.html) represents a theme color, you must pass in a Workbook instance to the method so it can get the theme color’s RGB value from the workbook.

When saving out in the newer file formats such as .xlsx, the newer color information is saved directly into the file. When saving out in an older file format such as .xls, the index to the closest color in the palette will be saved out. In addition, the older formats have future feature records that can be saved out to indicate the newer color information.

When the older formats are opened in Microsoft Excel 2003 and earlier versions, these future features records are ignored, but when the older file formats are opened in Excel 2007 and later, their records are read and the color information from them overwrites the indexed color that was previously loaded from the normal format records.

## Excel Format Support

You can set a host of different formats on a [`WorksheetCell`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html) by using the [`cellFormat`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#cellFormat) object returned by the [`cellFormat`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#cellFormat) property of that cell. This [`cellFormat`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#cellFormat) object enables you to style many different aspects of the cell such as borders, font, fill, alignments, and whether or not the cell should shrink to fit or be locked.

You can also access the built-in styles to Microsoft Excel 2007 using the [`styles`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbook.html#styles) collection of the [`workbook`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.sheet.html#workbook) object. The full list of styles in Excel can be found in the Cell Styles gallery of the Home tab of Microsoft Excel 2007.

There is a special type of style on the workbook's [`styles`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbook.html#styles) collection known as the "normal" style, which can be accessed using that collection's [`normalStyle`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbookstylecollection.html#normalStyle) property, or by indexing into the collection with the name "Normal".

The [`normalStyle`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbookstylecollection.html#normalStyle) contains the default properties for all cells in the workbook, unless otherwise specified on a row, column, or cell. Changing the properties on the [`normalStyle`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbookstylecollection.html#normalStyle) will change all of the default cell format properties on the workbook. This is useful, for example, if you want to change the default font for your workbook.

You can clear the [`styles`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbook.html#styles) collection or reset it to its predefined state by using the [`clear`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbookstylecollection.html#clear) and [`reset`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbookstylecollection.html#reset) methods, respectively. Both of these will remove all user-defined styles, but [`clear`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbookstylecollection.html#clear) will clear the [`styles`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbook.html#styles) collection entirely.

With this feature, a [`style`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/interfaces/igniteui_react_excel.iworksheetcellformat.html#style) property has been added to the [`cellFormat`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#cellFormat) object. This is a reference to a [`WorkbookStyle`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbookstyle.html) instance, representing the parent style of the format. For formats of a style, this property will always be null, because styles cannot have a parent style. For row, column, and cell formats, the [`style`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/interfaces/igniteui_react_excel.iworksheetcellformat.html#style) property always returns the [`normalStyle`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbookstylecollection.html#normalStyle) by default.

If the [`style`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/interfaces/igniteui_react_excel.iworksheetcellformat.html#style) property is set to null, it will revert back to the [`normalStyle`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbookstylecollection.html#normalStyle). If it is set to another style in the styles collection, that style will now hold the defaults for all unset properties on the cell format.

When the [`style`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/interfaces/igniteui_react_excel.iworksheetcellformat.html#style) property is set on a cell format, the format options included on the [`style`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/interfaces/igniteui_react_excel.iworksheetcellformat.html#style) are removed from the cell format. All other properties are left intact. For example, if a cell style including border formatting was created and that style was set as the cell's [`style`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/interfaces/igniteui_react_excel.iworksheetcellformat.html#style), the border format option on the cell format would be removed and the cell format only includes fill formatting.

When a format option flag is removed from a format, all associated properties are reset to their unset values, so the cell format’s border properties are implicitly reset to default/unset values.

You can determine what would really be seen in cells by using the [`getResolvedCellFormat`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#getResolvedCellFormat) method on classes which represent a row, column, cell, and merged cell.

This method returns a [`cellFormat`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#cellFormat) instance which refers back to the associated [`cellFormat`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#cellFormat) on which it is based. So subsequent changes to the [`cellFormat`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#cellFormat) property will be reflected in the instance returned from a [`getResolvedCellFormat`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#getResolvedCellFormat) call.

## Merging Cells

Aside from setting the value or format of cells, you can also merge cells to make two or more cells appear as one. If you merge cells, they must be in a rectangular region.

When you merge cells, each cell in the region will have the same value and cell format. The merged cells will also be associated with the same [`WorksheetMergedCellsRegion`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetmergedcellsregion.html) object, accessible from their [`associatedMergedCellsRegion`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#associatedMergedCellsRegion) property. The resultant [`WorksheetMergedCellsRegion`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetmergedcellsregion.html) object will also have the same value and cell format as the cells.

Setting the value (or cell format) of the region or any cell in the region will change the value of all cells and the region. If you un-merge cells, all of the previously merged cells will retain the shared cell format they had before they were unmerged. However, only the top-left cell of the region will retain the shared value.

In order to create a merged cell region, you must add a range of cells to the [`worksheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#worksheet) object’s [`mergedCellsRegions`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheet.html#mergedCellsRegions) collection. This collection exposes an `Add` method that takes four integer parameters. The four parameters determine the index of the starting row and column (top-left most cell) and the index of the ending row and column (bottom-right most cell).

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

You can set the worksheet's [`displayOptions`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheet.html#displayOptions)' [`showFormulasInCells`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.displayoptions.html#showFormulasInCells) property to  have formulas be displayed in cells instead of their results, and format strings and cell widths are ignored. Text values display as if their format string were @ , non-integral numeric values display as if their format string were 0.0 and integral numeric values display as if their format string were 0 .

Additionally, if the value cannot fit, it will not display as all hashes. Display text will still return its full text as the cell text, even though it may not be fully seen.

The following code snippet demonstrates the usage of the [`getText`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#getText) method to get the text as it would be displayed in Excel:

```ts
var workbook = new Workbook();
var worksheet = this.workbook.worksheets().add("Sheet1");

var cellText = worksheet.rows(0).cells(0).getText();
```

## API References

- `Add`
- [`CellFillLinearGradient`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.cellfilllineargradient.html)
- [`CellFillPattern`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.cellfillpattern.html)
- [`CellFillRectangularGradient`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.cellfillrectangulargradient.html)
- [`CellFill`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.cellfill.html)
- [`cellFormat`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#cellFormat)
- [`displayOptions`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheet.html#displayOptions)'
- [`formula`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#formula)
- [`mergedCellsRegions`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheet.html#mergedCellsRegions)
- [`WorkbookColorInfo`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbookcolorinfo.html)
- [`WorkbookStyle`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbookstyle.html)
- [`workbook`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.sheet.html#workbook)
- [`WorksheetCell`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html)
- [`WorksheetColumn`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcolumn.html)
- [`WorksheetRegion`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetregion.html)
- [`WorksheetRow`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetrow.html)
- [`worksheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#worksheet)
