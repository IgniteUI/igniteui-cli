---
title: React Excel Library| Data Spreadsheet and Table | Infragistics
_description: Use Infragistics' React excel library to work with spreadsheet data using Microsoft Excel features. Learn how easily you can transfer data from excel to your application using Ignite UI for React excel library!
_keywords: Excel library, Ignite UI for React, Infragistics, workbook
_license: commercial
mentionedTypes: ["Workbook", "Worksheet", "Cell", "Formula"]
_tocName: Excel Library
---

# React Excel Library Overview

The Infragistics React Excel Library allows you to work with spreadsheet data using familiar Microsoft® Excel® spreadsheet objects like [`workbook`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.sheet.html#workbook), [`Worksheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheet.html), `Cell`, [`Formula`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.formula.html) and many more. The Infragistics React Excel Library makes it easy for you to represent the data of your application in an Excel spreadsheet as well as transfer data from Excel into your application.

## React Excel Library Example

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

IgrExcelModule.register();

export default class ExcelLibraryOverview extends React.Component<any, any> {
    public canSave = false;
    public wb: Workbook;
    public ws: Worksheet;
    public worksheetRegion: string[] | null;
    public selectedRegion: string | null;

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
                    <button onClick={this.onClick}>Save Workbook</button>
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
root.render(<ExcelLibraryOverview/>);
```


<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->

## Dependencies

When installing the excel package, the core package must also be installed.

```cmd
npm install --save igniteui-react-core
npm install --save igniteui-react-excel
```

## Component Modules

The React excel library requires the following modules:

```ts
import { IgrExcelModule } from 'igniteui-react-excel';

IgrExcelModule.register();
```

## Modules Implementation

The Excel Library contains 5 modules that you can use to limit bundle size of your app:

- **IgxExcelCoreModule** – This contains the object model and much of the excel infrastructure
- **IgxExcelFunctionsModule** – This contains the majority of the functions for formula evaluations, such as Sum, Average, Min, Max, etc. The absence of this module won’t cause any issues with formula parsing if the formula is to be calculated. For example, if you apply a formula like “=SUM(A1:A5)” and ask for the Value of the cell, then you would get a #NAME! error returned. This is not an exception throw – it’s an object that represents a particular error since formulas can result in errors.
- **IgxExcelXlsModule** – This contains the load and save logic for xls (and related) type files – namely the Excel97to2003 related WorkbookFormats.
- **IgxExcelXlsxModule** – This contains the load and save logic for xlsx (and related) type files – namely the Excel2007 related and StrictOpenXml WorkbookFormats.
- **IgxExcelModule** – This references the other 4 modules and so basically ensures that all the functionality is loaded/available.

<!-- end: Angular, React, WebComponents -->

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

<!-- Angular, React, WebComponents -->

In the following code snippet, an external [ExcelUtility](excel-utility.md) class is used to save and load a [`workbook`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.sheet.html#workbook).

<!-- end: Angular, React, WebComponents -->

In order to load and save [`workbook`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.sheet.html#workbook) objects, you can utilize the save method of the actual [`workbook`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.sheet.html#workbook) object, as well as its static `Load` method.

```ts
import { Workbook } from "igniteui-react-excel";
import { WorkbookSaveOptions } from "igniteui-react-excel";
import { WorkbookFormat } from "igniteui-react-excel";
import { ExcelUtility } from "ExcelUtility";

var workbook = ExcelUtility.load(file);
ExcelUtility.save(workbook, "fileName");
```

## API References

- `Load`
- `WorkbookInProcessRuntime`
- [`Worksheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheet.html)
- [`workbook`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.sheet.html#workbook)
