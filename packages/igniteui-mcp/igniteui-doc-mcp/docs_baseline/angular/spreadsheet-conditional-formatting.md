---
title: "Angular Spreadsheet | Conditional Formatting | Infragistics"
description: Use Infragistics' Angular spreadsheet control to conditionally format the cells of a worksheet. Check out Ignite UI for Angular spreadsheet demos!
keywords: Spreadsheet, conditional formatting, Ignite UI for Angular, Infragistics, Worksheet
license: commercial
mentionedTypes: ["Spreadsheet", "ConditionalFormatCollection", "WorksheetCell", "Worksheet", "IWorksheetCellFormat"]
llms:
  description: "The Angular Spreadsheet component allows you to conditionally format the cells of a worksheet."
platformType: xplat-unmapped
_tocName: Conditional Formatting
_premium: true
---
# Angular Spreadsheet Conditional Formatting

The Angular [`IgxSpreadsheet`](mcp:get_api_reference?platform=angular&component=IgxSpreadsheetComponent) component allows you to conditionally format the cells of a worksheet. This allows you to highlight different pieces of your data based on a condition.

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

You can configure the conditional formatting of a particular worksheet by using the many `Add` methods exposed on the [`ConditionalFormats`](mcp:get_api_reference?platform=angular&component=Worksheet&member=conditionalFormats) collection of that worksheet. The first parameter of these `Add` methods is the string region of the worksheet that you would like to apply the conditional format to.

Many of the conditional formats that you can add to your worksheet have a [`CellFormat`](mcp:get_api_reference?platform=angular&component=WorksheetCell&member=cellFormat) property that determines the way that the cells should look when the condition in that conditional format holds true. For example, you can use the properties attached to this [`CellFormat`](mcp:get_api_reference?platform=angular&component=WorksheetCell&member=cellFormat) property such as [`Fill`](mcp:get_api_reference?platform=angular&component=IWorksheetCellFormat&member=fill) and [`Font`](mcp:get_api_reference?platform=angular&component=IWorksheetCellFormat&member=font) to determine the background and font settings of your cells, respectively.

When a conditional format is created and a [`CellFormat`](mcp:get_api_reference?platform=angular&component=WorksheetCell&member=cellFormat) applied, there is a subset of properties that are currently supported by the worksheet cell. The properties that are currently honored off of the [`CellFormat`](mcp:get_api_reference?platform=angular&component=WorksheetCell&member=cellFormat) are [`Fill`](mcp:get_api_reference?platform=angular&component=IWorksheetCellFormat&member=fill), `Border` properties, [`FormatString`](mcp:get_api_reference?platform=angular&component=IWorksheetCellFormat&member=formatString), and some [`Font`](mcp:get_api_reference?platform=angular&component=IWorksheetCellFormat&member=font) properties such as strikethrough, underline, italic, bold, and color. Many of these can be seen from the code snippet below.

There are a few conditional formats that do not have a [`CellFormat`](mcp:get_api_reference?platform=angular&component=WorksheetCell&member=cellFormat) property, as their visualization on the cells behaves differently. These conditional formats are the [`DataBarConditionalFormat`](mcp:get_api_reference?platform=angular&component=DataBarConditionalFormat), [`ColorScaleConditionalFormat`](mcp:get_api_reference?platform=angular&component=ColorScaleConditionalFormat), and [`IconSetConditionalFormat`](mcp:get_api_reference?platform=angular&component=IconSetConditionalFormat).

When loading a pre-existing workbook from Excel, the formats will be preserved when that workbook is loaded. The same is true for when you save the workbook out to an Excel file.

The following lists the supported conditional formats in the Angular [`IgxSpreadsheet`](mcp:get_api_reference?platform=angular&component=IgxSpreadsheetComponent) control:

- [`AverageConditionalFormat`](mcp:get_api_reference?platform=angular&component=AverageConditionalFormat): Added using the [`AddAverageCondition`](mcp:get_api_reference?platform=angular&component=ConditionalFormatCollection&member=addAverageCondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s value is above or below the average or standard deviation for the associated range.
- [`BlanksConditionalFormat`](mcp:get_api_reference?platform=angular&component=BlanksConditionalFormat): Added using the [`AddBlanksCondition`](mcp:get_api_reference?platform=angular&component=ConditionalFormatCollection&member=addBlanksCondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value is not set.
- [`ColorScaleConditionalFormat`](mcp:get_api_reference?platform=angular&component=ColorScaleConditionalFormat): Added using the [`AddColorScaleCondition`](mcp:get_api_reference?platform=angular&component=ConditionalFormatCollection&member=addColorScaleCondition) method, this conditional format exposes properties which control the coloring of a worksheet cell based on the cell’s value as relative to minimum, midpoint, and maximum threshold values.
- [`DataBarConditionalFormat`](mcp:get_api_reference?platform=angular&component=DataBarConditionalFormat): Added using the [`AddDataBarCondition`](mcp:get_api_reference?platform=angular&component=ConditionalFormatCollection&member=addDataBarCondition) method, this conditional format exposes properties which display data bars in a worksheet cell based on the cell’s value as relative to the associated range of values.
- [`DateTimeConditionalFormat`](mcp:get_api_reference?platform=angular&component=DateTimeConditionalFormat): Added using the [`AddDateTimeCondition`](mcp:get_api_reference?platform=angular&component=ConditionalFormatCollection&member=addDateTimeCondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s date value falls within a given range of time.
- [`DuplicateConditionalFormat`](mcp:get_api_reference?platform=angular&component=DuplicateConditionalFormat): Added using the [`AddDuplicateCondition`](mcp:get_api_reference?platform=angular&component=ConditionalFormatCollection&member=addDuplicateCondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s value is unique or duplicated across the associated range.
- [`ErrorsConditionalFormat`](mcp:get_api_reference?platform=angular&component=ErrorsConditionalFormat): Added using the [`AddErrorsCondition`](mcp:get_api_reference?platform=angular&component=ConditionalFormatCollection&member=addErrorsCondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value is valid.
- [`FormulaConditionalFormat`](mcp:get_api_reference?platform=angular&component=FormulaConditionalFormat): Added using the [`AddFormulaCondition`](mcp:get_api_reference?platform=angular&component=ConditionalFormatCollection&member=addFormulaCondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value meets the criteria defined by a formula.
- [`IconSetConditionalFormat`](mcp:get_api_reference?platform=angular&component=IconSetConditionalFormat): Added using the [`AddIconSetCondition`](mcp:get_api_reference?platform=angular&component=ConditionalFormatCollection&member=addIconSetCondition) method, this conditional format exposes properties which display icons in a worksheet cell based on the cell’s value as relative to threshold values.
- [`NoBlanksConditionalFormat`](mcp:get_api_reference?platform=angular&component=NoBlanksConditionalFormat): Added using the [`AddNoBlanksCondition`](mcp:get_api_reference?platform=angular&component=ConditionalFormatCollection&member=addNoBlanksCondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value is set.
- [`NoErrorsConditionalFormat`](mcp:get_api_reference?platform=angular&component=NoErrorsConditionalFormat): Added using the [`AddNoErrorsCondition`](mcp:get_api_reference?platform=angular&component=ConditionalFormatCollection&member=addNoErrorsCondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value is valid.
- [`OperatorConditionalFormat`](mcp:get_api_reference?platform=angular&component=OperatorConditionalFormat): Added using the [`AddOperatorCondition`](mcp:get_api_reference?platform=angular&component=ConditionalFormatCollection&member=addOperatorCondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value meets the criteria defined by a logical operator.
- [`RankConditionalFormat`](mcp:get_api_reference?platform=angular&component=RankConditionalFormat): Added using the [`AddRankCondition`](mcp:get_api_reference?platform=angular&component=ConditionalFormatCollection&member=addRankCondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s value is within the top of bottom rank of values across the associated range.
- [`TextOperatorConditionalFormat`](mcp:get_api_reference?platform=angular&component=TextOperatorConditionalFormat): Added using the [`AddTextCondition`](mcp:get_api_reference?platform=angular&component=ConditionalFormatCollection&member=addTextCondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s text value meets the criteria defined by a string and a [`FormatConditionTextOperator`](mcp:get_api_reference?platform=angular&component=FormatConditionTextOperator) value as placed in the [`AddTextCondition`](mcp:get_api_reference?platform=angular&component=ConditionalFormatCollection&member=addTextCondition) method’s parameters.
- [`UniqueConditionalFormat`](mcp:get_api_reference?platform=angular&component=UniqueConditionalFormat): Added using the [`AddUniqueCondition`](mcp:get_api_reference?platform=angular&component=ConditionalFormatCollection&member=addUniqueCondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s value is unique across the associated range.

## Dependencies

In order to add conditional formatting to the [`IgxSpreadsheet`](mcp:get_api_reference?platform=angular&component=IgxSpreadsheetComponent) control, you will need to import the following dependencies:

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
