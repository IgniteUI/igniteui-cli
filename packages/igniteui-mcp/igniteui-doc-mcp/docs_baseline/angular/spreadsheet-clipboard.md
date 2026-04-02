---
title: Angular Spreadsheet | Clipboard Operations | Infragistics
_description: Use clipboard operations such as copy, cut and paste within Infragistics' Angular spreadsheet control. View Infragistics Ignite UI for Angular spreadsheet demos today!
_keywords: Spreadsheet, clipboard operations, Ignite UI for Angular, Infragistics
_license: commercial
mentionedTypes: ["Spreadsheet", "SpreadsheetAction", "SpreadsheetCommandType", "Command"]
_tocName: Clipboard
_premium: true
---

# Angular Working with Clipboard

This topic explains how to perform clipboard operations on the Ignite UI for Angular spreadsheet component.

## Angular Working with Clipboard Example

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
import { Component, AfterViewInit, ViewChild } from "@angular/core";
import { IgxSpreadsheetComponent } from "igniteui-angular-spreadsheet";
import { SpreadsheetAction } from "igniteui-angular-spreadsheet";
import { ExcelUtility } from "./ExcelUtility";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit {
  @ViewChild("spreadsheet", { read: IgxSpreadsheetComponent, static: true })
  public spreadsheet: IgxSpreadsheetComponent;

  constructor() { }

  public ngAfterViewInit() {
      const excelFile = "https://dl.infragistics.com/x/excel/SalesData.xlsx";
      ExcelUtility.loadFromUrl(excelFile).then((w) => {
          this.spreadsheet.workbook = w;
      });
  }

  public cut(): void {
      this.spreadsheet.executeAction(SpreadsheetAction.Cut);
  }

  public copy(): void {
      this.spreadsheet.executeAction(SpreadsheetAction.Copy);
  }

  public paste(): void {
      this.spreadsheet.executeAction(SpreadsheetAction.Paste);
  }

}
```
```html
<div class="container vertical">
    <div class="options horizontal">
        <input class="options-item" id="cut" value="Cut" type="button" (click)="cut()">
        <input class="options-item" id="copy" value="Copy" type="button" (click)="copy()">
        <input class="options-item" id="paste" value="Paste" type="button" (click)="paste()">
    </div>
    <div class="container">
        <igx-spreadsheet #spreadsheet height="100%" width="100%">
        </igx-spreadsheet>
    </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Dependencies

Before making use of the clipboard you will want to import the `SpreadsheetAction` enumeration:

<!-- Angular -->

```ts
import { IgxSpreadsheetComponent } from 'igniteui-angular-spreadsheet';
import { SpreadsheetAction } from 'igniteui-angular-spreadsheet';
```

<div class="divider--half"></div>

## Usage

The following code snippet shows how you can execute commands related to the clipboard in the Angular [`IgxSpreadsheetComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_spreadsheet.igxspreadsheetcomponent.html) control:

```ts
public cut(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.Cut);
}

public copy(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.Copy);
}

public paste(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.Paste);
}
```

## API References

- `SpreadsheetAction`
- [`IgxSpreadsheetComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_spreadsheet.igxspreadsheetcomponent.html)
