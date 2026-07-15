---
title: React Excel Library| Using Workbooks| Infragistics
_description: Use Infragistics' React excel library to create workbooks and worksheets, input data and export the date to Microsoft® Excel. View Ignite UI for React excel tutorials for more information!
_keywords: Excel library, workbooks, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Workbook"]
_tocName: Using Workbooks
_premium: true
---

# React Using Workbooks

The Infragistics React Excel Engine enables you to save data to and load data from Microsoft® Excel®. You can create workbooks and worksheets, input data, and export the data to Excel using the library’s various classes. The Infragistics React Excel Engine makes it easy to export the data in your application as an Excel spreadsheet as well as import data from Excel into your application.

## React Using Workbooks Example

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
import { IgrDataGridModule } from 'igniteui-react-data-grids';
import { IgrDataGrid } from 'igniteui-react-data-grids';
import { Workbook } from 'igniteui-react-excel';
import { WorkbookFormat } from 'igniteui-react-excel';
import { WorksheetRegion } from 'igniteui-react-excel';
import { ExcelUtility } from './ExcelUtility';

IgrDataGridModule.register();

export default class ExcelLibraryUsingWorkbooks extends React.Component<any, any> {

    public grid: IgrDataGrid;

    public employeeData: any[];
    public expenseData: any[];
    public incomeData: any[];

    public companies: string[];
    public firstNames: string[];
    public lastNames: string[];
    public countries: string[];
    public titles: string[];
    public employeeColumns: string[];

    constructor(props: any) {
        super(props);

        this.onGridRef = this.onGridRef.bind(this);
        this.createWorkbook = this.createWorkbook.bind(this);
        this.saveWorkbook = this.saveWorkbook.bind(this);
        this.switchDataSource = this.switchDataSource.bind(this);

        this.companies = ["Amazon", "Ford", "Jaguar", "Tesla", "IBM", "Microsoft"];
        this.firstNames = ["Andrew", "Mike", "Martin", "Ann", "Victoria", "John", "Brian", "Jason", "David"];
        this.lastNames = ["Smith", "Jordan", "Johnson", "Anderson", "Louis", "Phillips", "Williams"];
        this.countries = ["UK", "France", "USA", "Germany", "Poland", "Brazil"];
        this.titles = ["Sales Rep.", "Engineer", "Administrator", "Manager"];
        this.employeeColumns = ["Name", "Company", "Title", "Age", "Country", "Salary"];

        this.initData();

        this.state = {
            selected: "Employees - Table1"
        } as any;
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <button className="options-button" onClick={this.createWorkbook}>Create Workbook</button>
                    <button className="options-button" onClick={this.saveWorkbook}>Save Workbook</button>
                    <label className="options-label">Select Table to Export: </label>
                    <select onChange={this.onTableChange} value={(this.state as any).selected}>
                        <option>Employees - Table1</option>
                        <option>Expenses - Table2</option>
                        <option>Income - Table3</option>
                    </select>
                </div>
                <div className="container">
                    <IgrDataGrid
                        ref = {this.onGridRef}
                        height="100%"
                        width="100%"
                        dataSource={this.employeeData} />
                </div>
            </div>
        );
    }

    public initData() {
        this.expenseData = [];
        this.employeeData = [];
        this.incomeData = [];

        const startYear = 2011;

        for (let i = 1; i < 20; i++) {

            const year = startYear + i;

            // Employee Data
            const name: string = this.getItem(this.firstNames) + " " + this.getItem(this.lastNames);
            const company: string = this.getItem(this.companies);
            const title: string = this.getItem(this.titles);
            const age: number = this.getRandom(25, 60);
            const country: string = this.getItem(this.countries);
            const salary: string = this.getAmount(60000, 80000);

            // Expense Data
            const computerExpense: string = this.getAmount(50000, 60000);
            const researchExpense: string = this.getAmount(120000, 160000);
            const travelExpense: string = this.getAmount(15000, 25000);
            const salaryExpense: string = this.getAmount(1000000, 2000000);
            const softwareExpense: string = this.getAmount(100000, 150000);

            // Income Data
            const phoneIncome: string = this.getAmount(3500000, 6000000);
            const computerIncome: string = this.getAmount(200000, 300000);
            const softwareIncome: string = this.getAmount(700000, 800000);
            const serviceIncome: string = this.getAmount(650000, 750000);
            const royaltyIncome: string = this.getAmount(400000, 450000);

            this.employeeData.push({
                "Name": name,
                "Company": company,
                "Title": title,
                "Age": age,
                "Country": country,
                "Salary": salary
            });

            this.expenseData.push({
                "Year": year,
                "Computers": computerExpense,
                "Research": researchExpense,
                "Travel": travelExpense,
                "Salary": salaryExpense,
                "Software": softwareExpense
            });

            this.incomeData.push({
                "Year": year,
                "Phones": phoneIncome,
                "Computers": computerIncome,
                "Software": softwareIncome,
                "Services": serviceIncome,
                "Royalties": royaltyIncome
            });
        }
    }

    public getItem(array: string[]): string {
        const i = this.getRandom(0, array.length - 1);
        return array[i];
    }

    public getRandom(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    public getAmount(min: number, max: number) {
        const n = this.getRandom(min, max);
        const s = n.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
        return "$" + s.replace(".00", "");
    }

    public onGridRef(grid: IgrDataGrid) {
        if (!grid) { return; }

        this.grid = grid;
    }

    public onTableChange = (e: any) => {
        const newVal: string = e.target.value.toString();
        this.setState({selected: newVal} as any);
        this.switchDataSource(newVal);
    }

    public createWorkbook() {
        this.initData();
        this.switchDataSource((this.state as any).selected);
    }

    public saveWorkbook() {
        const headers = Object.keys(this.grid.dataSource[0]);
        headers.pop();

        const wb = new Workbook(WorkbookFormat.Excel2007);
        const ws = wb.worksheets().add("Sheet1");

        for(let i=0; i<headers.length; i++){
            ws.rows(0).cells(i).value = headers[i];
        }

        for(let i=0; i<this.grid.dataSource.length; i++){
            const dataRow = this.grid.dataSource[i];
            const xlRow = ws.rows(i + 1);
            for(let j=0; j<headers.length; j++){
                xlRow.setCellValue(j, dataRow[headers[j]]);
            }
        }

        ExcelUtility.save(wb, "WorkbookSample");
    }

    public switchDataSource(value: string){
        if(value.includes("Employee")){
            // this.setState({data: this.employeeData} as any);
            this.grid.dataSource = this.employeeData;
        }
        else if(value.includes("Expense")){
            // this.setState({data: this.expenseData} as any);
            this.grid.dataSource = this.expenseData;
        }
        else{
            // this.setState({data: this.incomeData} as any);
            this.grid.dataSource = this.incomeData;
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ExcelLibraryUsingWorkbooks/>);
```

<div class="divider--half"></div>

## Change Default Font

First create a new instance of [`IWorkbookFont`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/interfaces/igniteui_react_excel.iworkbookfont.html). Next, add the new font to the [`styles`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbook.html#styles) collection of the [`Workbook`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbook.html). This style contains the default properties for all cells in the workbook, unless otherwise specified on a row, column, or cell. Changing properties of the style will change the default cell format properties in the workbook.

```ts
var workbook = new Workbook();
var font: IWorkbookFont;
font = workbook.styles().normalStyle.styleFormat.font;
font.name = "Times New Roman";
font.height = 16 * 20;
```

## Setting Workbook Properties

Microsoft Excel® document properties provide information to help organize and keep track of your documents. You can use the Infragistics React Excel Library to set these properties using the [`Workbook`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbook.html) object’s [`documentProperties`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbook.html#documentProperties) property. The available properties are:

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

```ts
var workbook = new Workbook();
workbook.documentProperties.title = "Expense Report";
workbook.documentProperties.status = "Complete";
```

## Workbook Protection

The workbook protection feature allows you to protect the structure of the workbook. That is, the ability for a user to add, rename, delete, hide, and reorder the worksheets in that workbook.

The protection is not enforced via the Infragistics Excel Engine's object model. It is a responsibility of the UI visualizing this object model to honor these protection settings and allow or restrict the user from performing the corresponding operations.

Protection is applied to a workbook by invoking its `protect` method.

When a [`Workbook`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbook.html) is protected without a password, the end user may unprotect the [`Workbook`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbook.html) in Excel without having to supply a password. To programmatically unprotect a [`Workbook`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbook.html), one may use the `unprotect` method.

When a [`Workbook`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbook.html) is protected, the values of the properties of the [`WorkbookProtection`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbookprotection.html) instance from this [`Workbook`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbook.html)'s `protection` property indicate the disabled operations.

If [`isProtected`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbook.html#isProtected) is already true, the `protect` method will be ignored.

```ts
var workbook = new Workbook();
workbook.protect(false, false);
```

Check if a workbook has protection. This read-only property returns true if the workbook has any protection set using the overloads of the Protect method.

```ts
var workbook = new Workbook();
var protect = workbook.isProtected;
```

This read-only property returns an object of type WorkbookProtection which contains properties for obtaining each protection setting individually.

```ts
var workbook = new Workbook();
var protection = workbook.protection;
```

## API References

- [`documentProperties`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbook.html#documentProperties)
- [`WorkbookProtection`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbookprotection.html)
- [`Workbook`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbook.html)
- [`Workbook`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbook.html)
