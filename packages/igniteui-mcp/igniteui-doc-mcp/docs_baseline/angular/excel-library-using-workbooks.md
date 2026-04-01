---
title: Angular Excel Library| Using Workbooks| Infragistics
_description: Use Infragistics' Angular excel library to create workbooks and worksheets, input data and export the date to Microsoft® Excel. View Ignite UI for Angular excel tutorials for more information!
_keywords: Excel library, workbooks, Ignite UI for Angular, Infragistics
_license: commercial
mentionedTypes: ["Workbook"]
_tocName: Using Workbooks
_premium: true
---

# Angular Using Workbooks

The Infragistics Angular Excel Engine enables you to save data to and load data from Microsoft® Excel®. You can create workbooks and worksheets, input data, and export the data to Excel using the library’s various classes. The Infragistics Angular Excel Engine makes it easy to export the data in your application as an Excel spreadsheet as well as import data from Excel into your application.

## Angular Using Workbooks Example

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxButtonModule, IgxGridModule } from "igniteui-angular";
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
    IgxButtonModule,
    IgxGridModule,
    IgxExcelModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { TextFormatMode } from "igniteui-angular-excel";
import { Workbook } from "igniteui-angular-excel";
import { WorkbookFormat } from "igniteui-angular-excel";
import { WorksheetTable } from "igniteui-angular-excel";
import { ExcelUtility } from "./ExcelUtility";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    @ViewChild("gridContainer", { read: ViewContainerRef, static: true })
    public gridContainerRef: ViewContainerRef;
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
        this.onTableChange(this.selectedTable);
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

    public onTableChange(newValue: string) {
        if (!newValue) {
            this.onTableSelected(null);
        } else {
            const parts = newValue.split(" - ");
            const worksheetName = parts[0];
            const tableName = parts[1];
            for (const ws of this.wb.worksheets()) {
                if (ws.name === worksheetName) {
                    for (const tbl of ws.tables()) {
                        if (tbl.name === tableName) {
                          this.onTableSelected(tbl);
                          return;
                        }
                    }
                }
            }
        }
    }

    public onTableSelected(table: WorksheetTable) {
        this.gridContainerRef.clear();

        if (table) {
            const headers = new Array<string>();
            // expanseCollect the keys for the data
            for (const expanseCol of table.columns()) {
                headers.push(expanseCol.name);
            }

            const ws = table.worksheet;
            const region = table.dataAreaRegion;
            const data = new Array<any>();

            for (let r = region.firstRow; r <= region.lastRow; r++) {
                const row = {};
                const excelRow = ws.rows(r);
                for (let c = 0; c < headers.length; c++) {
                    row[headers[c]] = excelRow.getCellText(c + region.firstColumn, TextFormatMode.IgnoreCellWidth);
                }
                data.push(row);
            }

            const gridFactory = this.resolver.resolveComponentFactory(IgxGridComponent);
            const gridRef = this.gridContainerRef.createComponent(gridFactory);
            gridRef.instance.autoGenerate = true;
            gridRef.instance.data = data;
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
        return "$" + s.replace(".00", "");
    }
}
```
```html
<div >
    <div class="workbookOptions">

        <div class="workbookOperations">
            <button class="workbookButton" (click)="workbookCreate()">
                <label>Create Workbook</label>
            </button>
            <button class="workbookButton" (click)="workbookSave()" [disabled]="!canSave">
                <label>Save Workbook</label>
            </button>
            <div class="workbookSelector">
                <button class="workbookButton">
                    <label for="workbookSelector">Load Workbook</label>
                </button>
                <input class="workbookButton" id="workbookSelector" type="file" style="visibility:hidden;"
                    accept=".xls, .xlt, .xlsx, .xlsm, .xltm, .xltx"
                    (change)='workbookLoad($event.target)' >
            </div>
        </div>
        <div class="workbookDetails">
            <label class="label">Select Table:</label>
            <select size="3" [(ngModel)]="selectedTable" (ngModelChange)="onTableChange($event)">
                <option *ngFor="let tblName of worksheetTables">
                    {{tblName}}
                </option>
            </select>
        </div>
    </div>

    <div class="workbookPreview">
        <label class="label"> Data Preview: </label>
        <template #gridContainer></template>
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

## Change Default Font

First create a new instance of [`IWorkbookFont`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/interfaces/igniteui_angular_excel.iworkbookfont.html). Next, add the new font to the [`styles`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.workbook.html#styles) collection of the [`Workbook`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.workbook.html). This style contains the default properties for all cells in the workbook, unless otherwise specified on a row, column, or cell. Changing properties of the style will change the default cell format properties in the workbook.

```ts
var workbook = new Workbook();
var font: IWorkbookFont;
font = workbook.styles().normalStyle.styleFormat.font;
font.name = "Times New Roman";
font.height = 16 * 20;
```

## Setting Workbook Properties

Microsoft Excel® document properties provide information to help organize and keep track of your documents. You can use the Infragistics Angular Excel Library to set these properties using the [`Workbook`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.workbook.html) object’s [`documentProperties`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.workbook.html#documentProperties) property. The available properties are:

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

When a [`Workbook`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.workbook.html) is protected without a password, the end user may unprotect the [`Workbook`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.workbook.html) in Excel without having to supply a password. To programmatically unprotect a [`Workbook`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.workbook.html), one may use the `unprotect` method.

When a [`Workbook`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.workbook.html) is protected, the values of the properties of the [`WorkbookProtection`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.workbookprotection.html) instance from this [`Workbook`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.workbook.html)'s `protection` property indicate the disabled operations.

If [`isProtected`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.workbook.html#isProtected) is already true, the `protect` method will be ignored.

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

- [`documentProperties`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.workbook.html#documentProperties)
- [`WorkbookProtection`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.workbookprotection.html)
- [`Workbook`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.workbook.html)
- [`Workbook`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.workbook.html)
