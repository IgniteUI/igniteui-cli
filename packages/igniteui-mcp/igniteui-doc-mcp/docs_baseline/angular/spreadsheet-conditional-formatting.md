---
title: "Angular Spreadsheet | Conditional Formatting | Infragistics"
description: Use Infragistics' Angular spreadsheet control to conditionally format the cells of a worksheet. Check out Ignite UI for Angular spreadsheet demos!
keywords: Spreadsheet, conditional formatting, Ignite UI for Angular, Infragistics, Worksheet
license: commercial
mentionedTypes: ["Spreadsheet", "ConditionalFormatCollection", "WorksheetCell", "Worksheet", "IWorksheetCellFormat"]
llms:
  description: "The Angular Spreadsheet component allows you to conditionally format the cells of a worksheet."
_tocName: Conditional Formatting
_premium: true
---
# Angular Spreadsheet Conditional Formatting

The Angular `IgxSpreadsheet` component allows you to conditionally format the cells of a worksheet. This allows you to highlight different pieces of your data based on a condition.

## Angular Spreadsheet Conditional Formatting Example

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
import { ExcelUtility } from "./ExcelUtility";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

  @ViewChild("spreadsheet", { static: true })
  public spreadsheet: IgxSpreadsheetComponent;

  constructor() { }

  public ngOnInit() {
      const excelFile = "https://dl.infragistics.com/x/excel/ConditionalData.xlsx";

      ExcelUtility.loadFromUrl(excelFile).then((w) => {
          this.spreadsheet.workbook = w;
      });
  }

}
```
```html
<div class="container vertical">
    <igx-spreadsheet #spreadsheet height="100%" width="100%"></igx-spreadsheet>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

## Conditional Formatting Overview

You can configure the conditional formatting of a particular worksheet by using the many `Add` methods exposed on the `ConditionalFormats` collection of that worksheet. The first parameter of these `Add` methods is the string region of the worksheet that you would like to apply the conditional format to.

Many of the conditional formats that you can add to your worksheet have a `CellFormat` property that determines the way that the cells should look when the condition in that conditional format holds true. For example, you can use the properties attached to this `CellFormat` property such as `Fill` and `Font` to determine the background and font settings of your cells, respectively.

When a conditional format is created and a `CellFormat` applied, there is a subset of properties that are currently supported by the worksheet cell. The properties that are currently honored off of the `CellFormat` are `Fill`, `Border` properties, `FormatString`, and some `Font` properties such as strikethrough, underline, italic, bold, and color. Many of these can be seen from the code snippet below.

There are a few conditional formats that do not have a `CellFormat` property, as their visualization on the cells behaves differently. These conditional formats are the `IgxDataBarConditionalFormat`, `IgxColorScaleConditionalFormat`, and `IgxIconSetConditionalFormat`.

When loading a pre-existing workbook from Excel, the formats will be preserved when that workbook is loaded. The same is true for when you save the workbook out to an Excel file.

The following lists the supported conditional formats in the Angular `IgxSpreadsheet` control:

- `IgxAverageConditionalFormat`: Added using the `AddAverageCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s value is above or below the average or standard deviation for the associated range.
- `IgxBlanksConditionalFormat`: Added using the `AddBlanksCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value is not set.
- `IgxColorScaleConditionalFormat`: Added using the `AddColorScaleCondition` method, this conditional format exposes properties which control the coloring of a worksheet cell based on the cell’s value as relative to minimum, midpoint, and maximum threshold values.
- `IgxDataBarConditionalFormat`: Added using the `AddDataBarCondition` method, this conditional format exposes properties which display data bars in a worksheet cell based on the cell’s value as relative to the associated range of values.
- `IgxDateTimeConditionalFormat`: Added using the `AddDateTimeCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s date value falls within a given range of time.
- `IgxDuplicateConditionalFormat`: Added using the `AddDuplicateCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s value is unique or duplicated across the associated range.
- `IgxErrorsConditionalFormat`: Added using the `AddErrorsCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value is valid.
- `IgxFormulaConditionalFormat`: Added using the `AddFormulaCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value meets the criteria defined by a formula.
- `IgxIconSetConditionalFormat`: Added using the `AddIconSetCondition` method, this conditional format exposes properties which display icons in a worksheet cell based on the cell’s value as relative to threshold values.
- `IgxNoBlanksConditionalFormat`: Added using the `AddNoBlanksCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value is set.
- `IgxNoErrorsConditionalFormat`: Added using the `AddNoErrorsCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value is valid.
- `IgxOperatorConditionalFormat`: Added using the `AddOperatorCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value meets the criteria defined by a logical operator.
- `IgxRankConditionalFormat`: Added using the `AddRankCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s value is within the top of bottom rank of values across the associated range.
- `IgxTextOperatorConditionalFormat`: Added using the `AddTextCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s text value meets the criteria defined by a string and a `IgxFormatConditionTextOperator` value as placed in the `AddTextCondition` method’s parameters.
- `IgxUniqueConditionalFormat`: Added using the `AddUniqueCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s value is unique across the associated range.

## Dependencies

In order to add conditional formatting to the `IgxSpreadsheet` control, you will need to import the following dependencies:

```ts
import { CellFill } from "igniteui-angular-excel";
import { Color } from 'igniteui-angular-core';
import { ColorScaleType } from "igniteui-angular-excelScaleType";
import { FormatConditionAboveBelow } from 'igniteui-angular-excel';
import { FormatConditionIconSet } from 'igniteui-angular-excel';
import { FormatConditionOperator } from 'igniteui-angular-excel';
import { FormatConditionTextOperator } from 'igniteui-angular-excel';
import { FormatConditionTimePeriod } from 'igniteui-angular-excel';
import { FormatConditionTopBottom } from "igniteui-angular-excel";
import { WorkbookColorInfo } from 'igniteui-angular-excel';
```
