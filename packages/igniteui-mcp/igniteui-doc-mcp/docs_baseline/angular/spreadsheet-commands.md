---
title: Angular Spreadsheet | Commands | Infragistics
_description: Perform commands to activate different features of Infragistics' Angular spreadsheet control. Learn commands such as ZoomIn and ZoomOut with Ignite UI for Angular spreadsheet!
_keywords: Spreadsheet, commands, Ignite UI for Angular, Infragistics
_license: commercial
mentionedTypes: ["Spreadsheet", "SpreadsheetAction"]
_tocName: Commands
_premium: true
---

# Angular Working with Commands

The Angular Spreadsheet component allows you to perform commands for activating different features of the spreadsheet. This topic explains how to perform different operations with the control using commands. Many of the commands will perform their action based on the active cells, rows, or worksheets. For example two such commands are ZoomIn and ZoomOut. See the SpreadsheetAction enum for a full list.

## Angular Working with Commands Example

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
import { SpreadsheetAction } from "igniteui-angular-spreadsheet";
import { ExcelUtility } from "./ExcelUtility";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  @ViewChild("spreadsheet", { read: IgxSpreadsheetComponent, static: true })
  public spreadsheet: IgxSpreadsheetComponent;

  constructor() { }

  public ngOnInit() {
      const excelFile = "https://dl.infragistics.com/x/excel/SalesData.xlsx";
      ExcelUtility.loadFromUrl(excelFile).then((w) => {
          this.spreadsheet.workbook = w;
      });
  }

  public zoomIn(): void {
      this.spreadsheet.executeAction(SpreadsheetAction.ZoomIn);
  }

  public zoomOut(): void {
      this.spreadsheet.executeAction(SpreadsheetAction.ZoomOut);
  }
}
```
```html
<div class="container vertical">
    <div class="options horizontal">
        <input class="options-item" id="zoomIn" value="Zoom In" type="button" (click)="zoomIn()">
        <input class="options-item" id="zoomOut" value="Zoom Out" type="button" (click)="zoomOut()">
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

Before making use of the commands you will want to import the `SpreadsheetAction`

```ts
import { IgxSpreadsheetComponent } from 'igniteui-angular-spreadsheet';
import { SpreadsheetAction } from 'igniteui-angular-spreadsheet';
```

<div class="divider--half"></div>

## Usage

The following snippet shows how you can setup the data validation rules

```ts
@ViewChild("spreadsheet", { read: IgxSpreadsheetComponent })
public spreadsheet: IgxSpreadsheetComponent;

// ...

public zoomIn(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.ZoomIn);
}

public zoomOut(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.ZoomOut);
}
```

## API References

- `ExecuteAction`
- `SpreadsheetAction`
