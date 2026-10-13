---
title: "React Spreadsheet | Conditional Formatting | Infragistics"
description: Use Infragistics' React spreadsheet control to conditionally format the cells of a worksheet. Check out Ignite UI for React spreadsheet demos!
keywords: Spreadsheet, conditional formatting, Ignite UI for React, Infragistics, Worksheet
license: commercial
mentionedTypes: ["Spreadsheet", "ConditionalFormatCollection", "WorksheetCell", "Worksheet", "IWorksheetCellFormat"]
llms:
  description: "The React Spreadsheet component allows you to conditionally format the cells of a worksheet."
_tocName: Conditional Formatting
_premium: true
---
# React Spreadsheet Conditional Formatting

The React `IgrSpreadsheet` component allows you to conditionally format the cells of a worksheet. This allows you to highlight different pieces of your data based on a condition.

## React Spreadsheet Conditional Formatting Example

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
import { IgrExcelXlsxModule } from 'igniteui-react-excel';
import { IgrExcelCoreModule } from 'igniteui-react-excel';
import { IgrExcelModule } from 'igniteui-react-excel';
import { IgrSpreadsheetModule } from 'igniteui-react-spreadsheet';
import { IgrSpreadsheet } from 'igniteui-react-spreadsheet';

IgrExcelCoreModule.register();
IgrExcelModule.register();
IgrExcelXlsxModule.register();

IgrSpreadsheetModule.register();

export default class SpreadsheetConditionalFormatting extends React.Component {
    public spreadsheet: IgrSpreadsheet;

    constructor(props: any) {
        super(props);
        this.onSpreadsheetRef = this.onSpreadsheetRef.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrSpreadsheet ref={this.onSpreadsheetRef} height="100%" width="100%" />
            </div>
        );
    }

    public onSpreadsheetRef(spreadsheet: IgrSpreadsheet) {
        if (!spreadsheet) { return; }

        this.spreadsheet = spreadsheet;

        const url = "https://dl.infragistics.com/x/excel/ConditionalData.xlsx";
        ExcelUtility.loadFromUrl(url).then((w) => {
            this.spreadsheet.workbook = w;
        });
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SpreadsheetConditionalFormatting/>);
```

## Conditional Formatting Overview

You can configure the conditional formatting of a particular worksheet by using the many `Add` methods exposed on the `ConditionalFormats` collection of that worksheet. The first parameter of these `Add` methods is the string region of the worksheet that you would like to apply the conditional format to.

Many of the conditional formats that you can add to your worksheet have a `CellFormat` property that determines the way that the cells should look when the condition in that conditional format holds true. For example, you can use the properties attached to this `CellFormat` property such as `Fill` and `Font` to determine the background and font settings of your cells, respectively.

When a conditional format is created and a `CellFormat` applied, there is a subset of properties that are currently supported by the worksheet cell. The properties that are currently honored off of the `CellFormat` are `Fill`, `Border` properties, `FormatString`, and some `Font` properties such as strikethrough, underline, italic, bold, and color. Many of these can be seen from the code snippet below.

There are a few conditional formats that do not have a `CellFormat` property, as their visualization on the cells behaves differently. These conditional formats are the `IgrDataBarConditionalFormat`, `IgrColorScaleConditionalFormat`, and `IgrIconSetConditionalFormat`.

When loading a pre-existing workbook from Excel, the formats will be preserved when that workbook is loaded. The same is true for when you save the workbook out to an Excel file.

The following lists the supported conditional formats in the React `IgrSpreadsheet` control:

- `IgrAverageConditionalFormat`: Added using the `AddAverageCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s value is above or below the average or standard deviation for the associated range.
- `IgrBlanksConditionalFormat`: Added using the `AddBlanksCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value is not set.
- `IgrColorScaleConditionalFormat`: Added using the `AddColorScaleCondition` method, this conditional format exposes properties which control the coloring of a worksheet cell based on the cell’s value as relative to minimum, midpoint, and maximum threshold values.
- `IgrDataBarConditionalFormat`: Added using the `AddDataBarCondition` method, this conditional format exposes properties which display data bars in a worksheet cell based on the cell’s value as relative to the associated range of values.
- `IgrDateTimeConditionalFormat`: Added using the `AddDateTimeCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s date value falls within a given range of time.
- `IgrDuplicateConditionalFormat`: Added using the `AddDuplicateCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s value is unique or duplicated across the associated range.
- `IgrErrorsConditionalFormat`: Added using the `AddErrorsCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value is valid.
- `IgrFormulaConditionalFormat`: Added using the `AddFormulaCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value meets the criteria defined by a formula.
- `IgrIconSetConditionalFormat`: Added using the `AddIconSetCondition` method, this conditional format exposes properties which display icons in a worksheet cell based on the cell’s value as relative to threshold values.
- `IgrNoBlanksConditionalFormat`: Added using the `AddNoBlanksCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value is set.
- `IgrNoErrorsConditionalFormat`: Added using the `AddNoErrorsCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value is valid.
- `IgrOperatorConditionalFormat`: Added using the `AddOperatorCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value meets the criteria defined by a logical operator.
- `IgrRankConditionalFormat`: Added using the `AddRankCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s value is within the top of bottom rank of values across the associated range.
- `IgrTextOperatorConditionalFormat`: Added using the `AddTextCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s text value meets the criteria defined by a string and a `IgrFormatConditionTextOperator` value as placed in the `AddTextCondition` method’s parameters.
- `IgrUniqueConditionalFormat`: Added using the `AddUniqueCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s value is unique across the associated range.

## Dependencies

In order to add conditional formatting to the `IgrSpreadsheet` control, you will need to import the following dependencies:

```ts
import { CellFill } from "igniteui-react-excel";
import { Color } from 'igniteui-react-core';
import { ColorScaleType } from "igniteui-react-excelScaleType";
import { FormatConditionAboveBelow } from 'igniteui-react-excel';
import { FormatConditionIconSet } from 'igniteui-react-excel';
import { FormatConditionOperator } from 'igniteui-react-excel';
import { FormatConditionTextOperator } from 'igniteui-react-excel';
import { FormatConditionTimePeriod } from 'igniteui-react-excel';
import { FormatConditionTopBottom } from "igniteui-react-excel";
import { WorkbookColorInfo } from 'igniteui-react-excel';
```
