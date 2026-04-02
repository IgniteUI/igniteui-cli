---
title: Angular Spreadsheet | Conditional Formatting | Infragistics
_description: Use Infragistics' Angular spreadsheet control to conditionally format the cells of a worksheet. Check out Ignite UI for Angular spreadsheet demos!
_keywords: Spreadsheet, conditional formatting, Ignite UI for Angular, Infragistics, Worksheet
_license: commercial
mentionedTypes: ["Spreadsheet", "ConditionalFormatCollection", "WorksheetCell", "Worksheet", "IWorksheetCellFormat"]
_tocName: Conditional Formatting
_premium: true
---

# Angular Spreadsheet Conditional Formatting

The Angular Spreadsheet component allows you to conditionally format the cells of a worksheet. This allows you to highlight different pieces of your data based on a condition.

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


<div class="divider--half"></div>

## Conditional Formatting Overview

You can configure the conditional formatting of a particular worksheet by using the many `Add` methods exposed on the [`conditionalFormats`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheet.html#conditionalFormats) collection of that worksheet. The first parameter of these `Add` methods is the string region of the worksheet that you would like to apply the conditional format to.

Many of the conditional formats that you can add to your worksheet have a [`cellFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheetcell.html#cellFormat) property that determines the way that the cells should look when the condition in that conditional format holds true. For example, you can use the properties attached to this [`cellFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheetcell.html#cellFormat) property such as [`fill`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/interfaces/igniteui_angular_excel.iworksheetcellformat.html#fill) and [`font`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/interfaces/igniteui_angular_excel.iworksheetcellformat.html#font) to determine the background and font settings of your cells, respectively.

When a conditional format is created and a [`cellFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheetcell.html#cellFormat) applied, there is a subset of properties that are currently supported by the worksheet cell. The properties that are currently honored off of the [`cellFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheetcell.html#cellFormat) are [`fill`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/interfaces/igniteui_angular_excel.iworksheetcellformat.html#fill), `Border` properties, [`formatString`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/interfaces/igniteui_angular_excel.iworksheetcellformat.html#formatString), and some [`font`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/interfaces/igniteui_angular_excel.iworksheetcellformat.html#font) properties such as strikethrough, underline, italic, bold, and color. Many of these can be seen from the code snippet below.

There are a few conditional formats that do not have a [`cellFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheetcell.html#cellFormat) property, as their visualization on the cells behaves differently. These conditional formats are the [`DataBarConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.databarconditionalformat.html), [`ColorScaleConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.colorscaleconditionalformat.html), and [`IconSetConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.iconsetconditionalformat.html).

When loading a pre-existing workbook from Excel, the formats will be preserved when that workbook is loaded. The same is true for when you save the workbook out to an Excel file.

The following lists the supported conditional formats in the Angular [`IgxSpreadsheetComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_spreadsheet.igxspreadsheetcomponent.html) control:

- [`AverageConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.averageconditionalformat.html): Added using the [`addAverageCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addAverageCondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s value is above or below the average or standard deviation for the associated range.
- [`BlanksConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.blanksconditionalformat.html): Added using the [`addBlanksCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addBlanksCondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value is not set.
- [`ColorScaleConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.colorscaleconditionalformat.html): Added using the [`addColorScaleCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addColorScaleCondition) method, this conditional format exposes properties which control the coloring of a worksheet cell based on the cell’s value as relative to minimum, midpoint, and maximum threshold values.
- [`DataBarConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.databarconditionalformat.html): Added using the [`addDataBarCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addDataBarCondition) method, this conditional format exposes properties which display data bars in a worksheet cell based on the cell’s value as relative to the associated range of values.
- [`DateTimeConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.datetimeconditionalformat.html): Added using the [`addDateTimeCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addDateTimeCondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s date value falls within a given range of time.
- [`DuplicateConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.duplicateconditionalformat.html): Added using the [`addDuplicateCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addDuplicateCondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s value is unique or duplicated across the associated range.
- [`ErrorsConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.errorsconditionalformat.html): Added using the [`addErrorsCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addErrorsCondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value is valid.
- [`FormulaConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.formulaconditionalformat.html): Added using the [`addFormulaCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addFormulaCondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value meets the criteria defined by a formula.
- [`IconSetConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.iconsetconditionalformat.html): Added using the [`addIconSetCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addIconSetCondition) method, this conditional format exposes properties which display icons in a worksheet cell based on the cell’s value as relative to threshold values.
- [`NoBlanksConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.noblanksconditionalformat.html): Added using the [`addNoBlanksCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addNoBlanksCondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value is set.
- [`NoErrorsConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.noerrorsconditionalformat.html): Added using the [`addNoErrorsCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addNoErrorsCondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value is valid.
- [`OperatorConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.operatorconditionalformat.html): Added using the [`addOperatorCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addOperatorCondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value meets the criteria defined by a logical operator.
- [`RankConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.rankconditionalformat.html): Added using the [`addRankCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addRankCondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s value is within the top of bottom rank of values across the associated range.
- [`TextOperatorConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.textoperatorconditionalformat.html): Added using the [`addTextCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addTextCondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s text value meets the criteria defined by a string and a [`FormatConditionTextOperator`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_excel.formatconditiontextoperator.html) value as placed in the [`addTextCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addTextCondition) method’s parameters.
- [`UniqueConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.uniqueconditionalformat.html): Added using the [`addUniqueCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addUniqueCondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s value is unique across the associated range.

## Dependencies

In order to add conditional formatting to the [`IgxSpreadsheetComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_spreadsheet.igxspreadsheetcomponent.html) control, you will need to import the following dependencies:

<!-- Angular -->

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

## Code Snippet

The following code snippet demonstrates how to add each of the conditional formats to a spreadsheet in the [`IgxSpreadsheetComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_spreadsheet.igxspreadsheetcomponent.html) control:

```ts
let sheet = this.spreadsheet.activeWorksheet;

let red = new Color();
red.colorString = "#ff0000";

let blue = new Color();
blue.colorString = "#0000ff";

let green = new Color();
green.colorString = "#00ff00";

let gray = new Color();
gray.colorString = "#d3d3d3";

let avgFormat = sheet.conditionalFormats().addAverageCondition("A1:A10", FormatConditionAboveBelow.AboveAverage);
avgFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(red);

let blanksFormat = sheet.conditionalFormats().addBlanksCondition("B1:B10");
blanksFormat.cellFormat.fill = CellFill.createSolidFill(new WorkbookColorInfo(gray));

let colorFormat = sheet.conditionalFormats().addColorScaleCondition("C1:C10", ColorScaleType.ThreeColor);
colorFormat.minimumThreshold.formatColor = new WorkbookColorInfo(red);
colorFormat.midpointThreshold.formatColor = new WorkbookColorInfo(blue);
colorFormat.maximumThreshold.formatColor = new WorkbookColorInfo(green);

let dataBarFormat = sheet.conditionalFormats().addDataBarCondition("D1:D10");

let dateTimeFormat = sheet.conditionalFormats().addDateTimeCondition("E1:E10", FormatConditionTimePeriod.NextWeek);
dateTimeFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(red);

let duplicateFormat = sheet.conditionalFormats().addDuplicateCondition("F1:F10");
duplicateFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(blue);

let errorFormat = sheet.conditionalFormats().addErrorsCondition("G1:G10");
errorFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(green);

let formulaFormat = sheet.conditionalFormats().addFormulaCondition("H1:H10", "=H1>2");
formulaFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(red);

let iconFormat = sheet.conditionalFormats().addIconSetCondition("I1:I10", FormatConditionIconSet.IconSet3TrafficLights1);

let noBlanksFormat = sheet.conditionalFormats().addNoBlanksCondition("J1:J10");
noBlanksFormat.cellFormat.fill = CellFill.createSolidFill(new WorkbookColorInfo(gray));

let noErrorFormat = sheet.conditionalFormats().addErrorsCondition("K1:K10");
noErrorFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(red);

let operatorFormat = sheet.conditionalFormats().addOperatorCondition("L1:L10", FormatConditionOperator.Greater);
operatorFormat.setOperand1(500);
operatorFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(blue);

let rankFormat = sheet.conditionalFormats().addRankCondition("M1:M10", FormatConditionTopBottom.Top, 5);
rankFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(green);

let textFormat = sheet.conditionalFormats().addTextCondition("N1:N10", "A", FormatConditionTextOperator.Contains);
textFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(red);

let uniqueFormat = sheet.conditionalFormats().addUniqueCondition("O1:O10");
uniqueFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(blue);
```

## API References

- [`addAverageCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addAverageCondition)
- [`addBlanksCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addBlanksCondition)
- [`addColorScaleCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addColorScaleCondition)
- [`addDataBarCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addDataBarCondition)
- [`addDateTimeCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addDateTimeCondition)
- [`addDuplicateCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addDuplicateCondition)
- [`addErrorsCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addErrorsCondition)
- [`addFormulaCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addFormulaCondition)
- [`addIconSetCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addIconSetCondition)
- [`addNoBlanksCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addNoBlanksCondition)
- [`addNoErrorsCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addNoErrorsCondition)
- [`addOperatorCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addOperatorCondition)
- [`addRankCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addRankCondition)
- [`addTextCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addTextCondition)
- [`addUniqueCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addUniqueCondition)
- [`cellFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheetcell.html#cellFormat)
- [`ColorScaleConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.colorscaleconditionalformat.html)
- [`ColorScaleConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.colorscaleconditionalformat.html):
- [`conditionalFormats`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheet.html#conditionalFormats)
- [`DataBarConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.databarconditionalformat.html)
- [`DataBarConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.databarconditionalformat.html):
- [`DateTimeConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.datetimeconditionalformat.html):
- [`DuplicateConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.duplicateconditionalformat.html):
- [`ErrorsConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.errorsconditionalformat.html):
- [`FormatConditionTextOperator`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_excel.formatconditiontextoperator.html)
- [`formatString`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/interfaces/igniteui_angular_excel.iworksheetcellformat.html#formatString)
- [`FormulaConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.formulaconditionalformat.html):
- [`IconSetConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.iconsetconditionalformat.html)
- [`IconSetConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.iconsetconditionalformat.html):
- [`NoBlanksConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.noblanksconditionalformat.html):
- [`NoErrorsConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.noerrorsconditionalformat.html):
- [`OperatorConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.operatorconditionalformat.html):
- [`RankConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.rankconditionalformat.html):
- [`IgxSpreadsheetComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_spreadsheet.igxspreadsheetcomponent.html)
- [`TextOperatorConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.textoperatorconditionalformat.html):
- [`UniqueConditionalFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.uniqueconditionalformat.html):
