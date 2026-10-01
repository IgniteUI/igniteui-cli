---
title: Angular Spreadsheet | Activation | Infragistics
description: Learn how to use the activation feature of the  Angular spreadsheet control which is split between the cells, panes and worksheets. Check out the Ignite UI for Angular spreadsheet demos!
keywords: Excel Spreadsheet, activation, Ignite UI for Angular, Infragistics
license: commercial

llms:
  description: "The Angular Spreadsheet component exposes properties that allow you to determine the currently active cell, pane, and worksheet in the control."
_tocName: Activation
_premium: true
---
# Angular Spreadsheet Activation

The Angular Spreadsheet component exposes properties that allow you to determine the currently active cell, pane, and worksheet in the control. This is helpful as it can help you to determine where the user may be navigating or editing in the control.

## Angular Spreadsheet Activation Example

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { ExcelUtility } from "./ExcelUtility";
import { IgxExcelModule } from "igniteui-angular-excel";
import { IgxSpreadsheetModule } from "igniteui-angular-spreadsheet";

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
    IgxExcelModule,
    IgxSpreadsheetModule
],
  providers: [ExcelUtility],
schemas: []
})
export class AppModule {}
```
```typescript
import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxSpreadsheetComponent } from "igniteui-angular-spreadsheet";
import { SpreadsheetCell } from "igniteui-angular-spreadsheet";
import { ExcelUtility } from "./ExcelUtility";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

  public activeCellText: string;

  @ViewChild("spreadsheet", { static: true })
  public spreadsheet: IgxSpreadsheetComponent;

  constructor() { }

  public ngOnInit() {
      const excelFile = "https://dl.infragistics.com/x/excel/SalesData.xlsx";

      ExcelUtility.loadFromUrl(excelFile).then((w) => {
          this.spreadsheet.workbook = w;
      });
  }

  public onClick() {
      this.spreadsheet.activeCell = new SpreadsheetCell(this.activeCellText);
  }

}
```
```html
<div class="container vertical">
    <div class="options horizontal">
        <input type="text" [(ngModel)]="activeCellText">
        <button (click)="onClick()">Activate Cell</button>
        <label class="options-item">Current Active Cell: {{spreadsheet.activeCell}}</label>
    </div>

    <igx-spreadsheet #spreadsheet height="100%" width="100%"></igx-spreadsheet>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

## Activation Overview

The activation of the Angular `IgxSpreadsheet` control is split up between the cells, panes, and worksheets of the current `IgxWorkbook` of the spreadsheet. The three "active" properties are described below:

- `ActiveCell`: Returns or sets the active cell in the spreadsheet. To set it, you must create a new instance of `IgxSpreadsheetCell` and pass in information about that cell, such as the column and row or the string address of the cell.
- `ActivePane`: Returns the active pane in the currently active worksheet of the spreadsheet control.
- `ActiveWorksheet`: Returns or sets the active worksheet in the `IgxWorkbook` of the spreadsheet control. This can be set by setting it to an existing worksheet in the `IgxWorkbook` attached to the spreadsheet.

## Code Snippet

The following code snippet shows setting activation of the cell and worksheet in the `IgxSpreadsheet` control:

```ts
this.spreadsheet.activeWorksheet = this.spreadsheet.workbook.worksheets(1);

this.spreadsheet.activeCell = new SpreadsheetCell("C5");
```

## API References

`IgxSpreadsheetCell`
<br />
`IgxSpreadsheet`<br />
`IgxWorkbook`<br />
