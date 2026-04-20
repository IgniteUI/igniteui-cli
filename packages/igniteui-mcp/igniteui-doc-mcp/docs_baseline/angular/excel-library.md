---
title: Angular Excel Library| Data Spreadsheet and Table | Infragistics
_description: Use Infragistics' Angular excel library to work with spreadsheet data using Microsoft Excel features. Learn how easily you can transfer data from excel to your application using Ignite UI for Angular excel library!
_keywords: Excel library, Ignite UI for Angular, Infragistics, workbook
_license: commercial
mentionedTypes: ["Workbook", "Worksheet", "Cell", "Formula"]
_tocName: Excel Library
---

# Angular Excel Library Overview

The Infragistics Angular Excel Library allows you to work with spreadsheet data using familiar Microsoft® Excel® spreadsheet objects like [`workbook`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.sheet.html#workbook), [`Worksheet`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheet.html), `Cell`, [`Formula`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.formula.html) and many more. The Infragistics Angular Excel Library makes it easy for you to represent the data of your application in an Excel spreadsheet as well as transfer data from Excel into your application.

## Angular Excel Library Example

```typescript
import { NgModule } from "@angular/core";
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
    IgxExcelModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, ComponentFactoryResolver, Injector, OnInit } from "@angular/core";
import { Workbook } from "igniteui-angular-excel";
import { WorkbookFormat } from "igniteui-angular-excel";
import { ExcelUtility } from "./ExcelUtility";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    public canSave = false;
    public wb: Workbook;
    public worksheetTables: string[];
    public selectedTable: string;

    constructor(private resolver: ComponentFactoryResolver, private injector: Injector) {
    }

    public ngOnInit() {
        this.workbookCreate();
    }

    public workbookSave(): void {
        if (this.canSave) {
            // setting document properties to organize Excel files
            this.wb.documentProperties.author = "My Name";
            this.wb.documentProperties.company = "My Company";
            this.wb.documentProperties.title = "Employees and income";
            this.wb.documentProperties.status = "Completed";
            this.wb.documentProperties.category = "Financial";
            this.wb.documentProperties.keywords = "Financial;Company;Employees;income";

            // setting protection on workbook of Excel file
            this.wb.protection.allowEditStructure = true;
            this.wb.protection.allowEditWindows = true;

            this.wb.windowOptions.tabBarVisible = true;

            ExcelUtility.save(this.wb, "ExcelWorkbook").then((f) => {
                console.log("Saved:" + f);
            }, (e) => {
                console.error("ExcelUtility.Save Error:" + e);
            });
        }
    }

    public workbookLoad(input: HTMLInputElement): void {
        if (input.files == null || input.files.length === 0) {
            return;
        }
        console.log("Loaded:" + input.files[0].name);
        ExcelUtility.load(input.files[0]).then((w) => { this.workbookParse(w); },
            (e) => {
            console.error("ExcelUtility.Load Error:" + e);
        });
    }

    public workbookParse(wb: Workbook): void {
        if (wb === undefined) {
            this.worksheetTables = null;
            this.selectedTable = null;
        } else {
            const names = new Array<string>();
            for (const ws of wb.worksheets()) {
                for (const tbl of ws.tables()) {
                    names.push(ws.name + " - " + tbl.name);
                }
            }
            this.worksheetTables = names;
            this.selectedTable = names.length > 0 ? names[0] : null;
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
        const employeeColumns = ["Name", "Company", "Title", "Age", "Country", "Salary" ];
        for (let col = 0; col < employeeColumns.length; col++) {
            employeeSheet.columns(col).width = 5000;
            employeeHeader.setCellValue(col, employeeColumns[col]);
        }

        for (let i = 1; i < 20; i++) {
            const company = this.getItem(companies);
            const title = this.getItem(titles);
            const country = this.getItem(countries);
            const name = this.getItem(firstNames) + " " + this.getItem(lastNames);
            const salary = this.getAmount(75000, 95000);
            const age = this.getRandom(20, 65);
            const wr = employeeSheet.rows(i);
            wr.setCellValue(0, name);
            wr.setCellValue(1, company);
            wr.setCellValue(2, title);
            wr.setCellValue(3, age);
            wr.setCellValue(4, country);
            wr.setCellValue(5, salary);
        }
        employeeSheet.tables().add("A1:F20", true);

        const expenseSheet = wb.worksheets().add("Expenses");
        const expanseHeader = expenseSheet.rows(0);
        const expanseNames = ["Year", "Computers", "Research", "Travel", "Salary", "Software" ];
        let expanseCol = 0;
        for (const key of expanseNames) {
            expenseSheet.columns(expanseCol).width = 5000;
            expanseHeader.setCellValue(expanseCol, key);
            for (let i = 1; i < 20; i++) {
                const wr = expenseSheet.rows(i);
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
        expenseSheet.tables().add("A1:F20", true);

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
        incomeSheet.tables().add("A1:F20", true);
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
        return "$" + s.replace(".00", "");
    }
}
```
```html
<div >
    <div class="workbookOptions">

        <div class="workbookOperations">
            <div class="workbookSelector">
                <button class="workbookButton">
                    <label for="workbookSelector">Load Workbook</label>
                </button>
                <input class="workbookButton" id="workbookSelector" type="file" style="visibility:hidden;"
                    accept=".xls, .xlt, .xlsx, .xlsm, .xltm, .xltx"
                    (change)='workbookLoad($event.target)' >
            </div>
            <button class="workbookButton" (click)="workbookSave()" [disabled]="!canSave">
                <label>Save Workbook</label>
            </button>
        </div>
    </div>
</div>
```
```scss
.workbookOptions {
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
    width: 70%;
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


<div class="divider--half"></div>

## Dependencies

When installing the excel package, the core package must also be installed.

```cmd
npm install --save igniteui-angular-core
npm install --save igniteui-angular-excel
```

## Component Modules

The Angular excel library requires the following modules:

```ts
// app.module.ts
import { IgxExcelModule } from 'igniteui-angular-excel';

@NgModule({
    imports: [
        // ...
        IgxExcelModule,
        // ...
    ]
})
export class AppModule {}
```

## Modules Implementation

The Excel Library contains 5 modules that you can use to limit bundle size of your app:

- **IgxExcelCoreModule** – This contains the object model and much of the excel infrastructure
- **IgxExcelFunctionsModule** – This contains the majority of the functions for formula evaluations, such as Sum, Average, Min, Max, etc. The absence of this module won’t cause any issues with formula parsing if the formula is to be calculated. For example, if you apply a formula like “=SUM(A1:A5)” and ask for the Value of the cell, then you would get a #NAME! error returned. This is not an exception throw – it’s an object that represents a particular error since formulas can result in errors.
- **IgxExcelXlsModule** – This contains the load and save logic for xls (and related) type files – namely the Excel97to2003 related WorkbookFormats.
- **IgxExcelXlsxModule** – This contains the load and save logic for xlsx (and related) type files – namely the Excel2007 related and StrictOpenXml WorkbookFormats.
- **IgxExcelModule** – This references the other 4 modules and so basically ensures that all the functionality is loaded/available.

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

In the following code snippet, an external [ExcelUtility](excel-utility.md) class is used to save and load a [`workbook`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.sheet.html#workbook).

In order to load and save [`workbook`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.sheet.html#workbook) objects, you can utilize the save method of the actual [`workbook`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.sheet.html#workbook) object, as well as its static `Load` method.

```ts
import { Workbook } from "igniteui-angular-excel";
import { WorkbookSaveOptions } from "igniteui-angular-excel";
import { WorkbookFormat } from "igniteui-angular-excel";
import { ExcelUtility } from "ExcelUtility";

var workbook = ExcelUtility.load(file);
ExcelUtility.save(workbook, "fileName");
```

## Managing Heap

Due to the size of the Excel Library, it's recommended to disable the source map generation.

Modify `angular.json` by setting the `vendorSourceMap` option under architect => build => options and under serve => options:

```ts
    "architect": {
        "build": {
          "builder": "...",
          "options": {
            "vendorSourceMap": false,
            "outputPath": "dist",
            "index": "src/index.html",
            "main": "src/main.ts",
            "tsConfig": "src/tsconfig.app.json",
                  // ...
          },
              // ...
        },
        "serve": {
          "builder": "...",
          "options": {
            "vendorSourceMap": false,
            "browserTarget": "my-app:build"
          },
              // ...
        },
        // ...
      }
```

## API References

- `Load`
- `WorkbookInProcessRuntime`
- [`Worksheet`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheet.html)
- [`workbook`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.sheet.html#workbook)
