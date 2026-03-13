---
title: React Spreadsheet | Chart Adapter | Infragistics
_description: Display charts such as column, line and area, in the Infragistics' React spreadsheet control. Learn how to integrate charts in Ignite UI for React spreadsheet!
_keywords: Excel Spreadsheet, chart adapter, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Spreadsheet", "Worksheet", "WorksheetShapeCollection", "WorksheetChart"]
_tocName: Chart Adapter
_premium: true
---

# React Spreadsheet Chart Adapter

The React Spreadsheet component allows displaying charts in your [`IgrSpreadsheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet.igrspreadsheet.html).

## React Spreadsheet Chart Adapter Example

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
import { IgrSpreadsheetChartAdapterModule } from 'igniteui-react-spreadsheet-chart-adapter';
import { SpreadsheetChartAdapter } from 'igniteui-react-spreadsheet-chart-adapter';
import { Worksheet } from 'igniteui-react-excel';
import { WorksheetCell } from 'igniteui-react-excel';
import { ChartType, ChartTitle, FormattedString } from 'igniteui-react-excel';

IgrExcelCoreModule.register();
IgrExcelModule.register();
IgrExcelXlsxModule.register();
IgrSpreadsheetModule.register();
IgrSpreadsheetChartAdapterModule.register();

export default class SpreadsheetAdapterForCharts extends React.Component {
    public spreadsheet: IgrSpreadsheet;

    constructor(props: any) {
        super(props);
        this.onSpreadsheetRef = this.onSpreadsheetRef.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrSpreadsheet ref={this.onSpreadsheetRef} height="calc(100% - 25px)" width="100%" />
            </div>
        );
    }

    public onSpreadsheetRef(spreadsheet: IgrSpreadsheet) {

        if (spreadsheet) {

            this.spreadsheet = spreadsheet;
            this.spreadsheet.chartAdapter = new SpreadsheetChartAdapter();
            const url = "https://dl.infragistics.com/x/excel/ChartData.xlsx";
            ExcelUtility.loadFromUrl(url).then((w) => {
                this.spreadsheet.workbook = w;

                const sheet: Worksheet = this.spreadsheet.workbook.worksheets(0);

                sheet.defaultColumnWidth = 450 * 20;
                sheet.rows(0).height = 150 * 20;

                const cell1: WorksheetCell = sheet.getCell("A1");
                const cell2: WorksheetCell = sheet.getCell("B1");
                const cell3: WorksheetCell = sheet.getCell("C1");
                const cell4: WorksheetCell = sheet.getCell("D1");

                const dataCellAddress = "A3:D6";

                const title: ChartTitle = new ChartTitle();
                title.text = new FormattedString("Line Chart");
                const chart1 = sheet.shapes().addChart(ChartType.Line, cell1, { x: 5, y: 5 }, cell1, { x: 90, y: 90 });
                chart1.chartTitle = title;
                chart1.setSourceData(dataCellAddress, true);

                const title2: ChartTitle = new ChartTitle();
                title2.text = new FormattedString("Column Chart");
                const chart2 = sheet.shapes().addChart(ChartType.ColumnClustered, cell2, { x: 5, y: 5 }, cell2, { x: 90, y: 90 });
                chart2.chartTitle = title2;
                chart2.setSourceData(dataCellAddress, true);

                const title3: ChartTitle = new ChartTitle();
                title3.text = new FormattedString("Area Chart");
                const chart3 = sheet.shapes().addChart(ChartType.Area, cell3, { x: 5, y: 5 }, cell3, { x: 90, y: 90 });
                chart3.chartTitle = title3;
                chart3.setSourceData(dataCellAddress, true);

                const title4: ChartTitle = new ChartTitle();
                title4.text = new FormattedString("Pie Chart");
                const chart4 = sheet.shapes().addChart(ChartType.Pie, cell4, { x: 5, y: 5 }, cell4, { x: 90, y: 90 });
                chart4.chartTitle = title4;
                chart4.setSourceData(dataCellAddress, true);
            });
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SpreadsheetAdapterForCharts/>);
```


<div class="divider--half"></div>

## Chart Adapter Overview

Using [`chartAdapter`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet.igrspreadsheet.html#chartAdapter) you can display the charts in the spreadsheet. The spreadsheet chart adapters creates and initializes chart elements for the spreadsheet based on a Infragistics.Documents.Excel.WorksheetChart instance.

In order to add a WorksheetChart to a worksheet, you must use the [`addChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetshapecollection.html#addChart) method of the worksheet’s Shapes collection.You can find more detail of adding charts in Excel below.

Here are the steps by step description :

1. Add the SpreadsheetChartAdapterModule reference to your project
2. Create an instance of a SpreadsheetChartAdapter class assigning it to the Spreadsheet
3. Run your app and load a worksheet containing a chart.

## Supported Charts Types

There are over 35 chart types supported by the Spreadsheet ChartAdapters including, Line, Area, Column, and Doughnut. See the full list here:

- Column Charts
  - Clustered column
  - Stacked column
  - 100% stacked column
- Line Charts
  - Line
  - Line with Markers
  - Stacked line
  - Stacked line with markers
  - 100% stacked line
  - 100% stacked line with markers
- Pie Charts
- Donut Charts
- Bar Charts
  - Clustered bar
  - Stacked bar
  - 100% stacked bar
  - Area Charts
  - Area
  - Stacked area
  - 100% stacked area
- XY (Scatter) and Bubble Charts
  - Scatter (with Marker only)
  - Scatter with smooth lines
  - Scatter with smooth lines and markers
  - Scatter with straight lines
  - Scatter with straight lines and markers
  - Bubble (without effects)
  - Bubble3DEffect
- Stock Charts
  - High-low-close
  - Open-high-low-close
  - Volume-high-low-close
  - Volume-open-high-low-close
- Radar Charts
  - Radar without markers
  - Radar with markers
  - Filled Radar
- Combo Charts
  - Column and line chart sharing xAxis
  - Column and line chart and 2nd xAxis
  - Stacked Area and Column
  - Custom Combination

## Dependencies

> \[!Note]
>
> In the following code snippet, an external [ExcelUtility](excel-utility.md) class is used to save and load a [`workbook`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet.igrspreadsheet.html#workbook).

When setting up your React spreadsheet control to add charts, you will need to import the [`SpreadsheetChartAdapter`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet_chart_adapter.spreadsheetchartadapter.html) class like so:

```ts
import { IgrExcelXlsxModule } from 'igniteui-react-excel';
import { IgrExcelCoreModule } from 'igniteui-react-excel';
import { IgrExcelModule } from 'igniteui-react-excel';

import { IgrSpreadsheetChartAdapterModule } from 'igniteui-react-spreadsheet-chart-adapter';
import { SpreadsheetChartAdapter } from 'igniteui-react-spreadsheet-chart-adapter';

import { ExcelUtility } from "ExcelUtility";

import { Worksheet } from 'igniteui-react-excel';
import { WorksheetCell } from 'igniteui-react-excel';
import { ChartType, ChartTitle, FormattedString, Workbook } from 'igniteui-react-excel';

IgrExcelCoreModule.register();
IgrExcelModule.register();
IgrExcelXlsxModule.register();
IgrSpreadsheetModule.register();
IgrSpreadsheetChartAdapterModule.register();
```

## Code Snippet

The following code snippet demonstrates how to add charts to the currently viewed worksheet in the [`IgrSpreadsheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet.igrspreadsheet.html) control:

```typescript
this.spreadsheet.chartAdapter = new SpreadsheetChartAdapter();

ExcelUtility.loadFromUrl(process.env.PUBLIC_URL + "/ExcelFiles/ChartData.xlsx").then((w) => {
    this.spreadsheet.workbook = w;

    const sheet: Worksheet = this.spreadsheet.workbook.worksheets(0);

    sheet.defaultColumnWidth = 500 * 20;
    sheet.rows(0).height = 150 * 20;

    const cell1: WorksheetCell = sheet.getCell("A1");
    const cell2: WorksheetCell = sheet.getCell("B1");
    const cell3: WorksheetCell = sheet.getCell("C1");
    const cell4: WorksheetCell = sheet.getCell("D1");

    const dataCellAddress = "A4:D6";

    const chart1 = sheet.shapes().addChart(ChartType.Line, cell1, { x: 0, y: 0 }, cell1, { x: 100, y: 100 });

    const title: React ChartTitle = new ChartTitle();
    title.text = new FormattedString("Line Chart");
    chart1.chartTitle = title;

    chart1.setSourceData(dataCellAddress, true);

    const chart2 = sheet.shapes().addChart(ChartType.ColumnClustered, cell2, { x: 0, y: 0 }, cell2, { x: 100, y: 100 });

    const title2: ChartTitle = new ChartTitle();
    title2.text = new FormattedString("Column Chart");
    chart2.chartTitle = title2;

    chart2.setSourceData(dataCellAddress, true);

    const chart3 = sheet.shapes().addChart(ChartType.Area, cell3, { x: 0, y: 0 }, cell3, { x: 100, y: 100 });

    const title3: ChartTitle = new ChartTitle();
    title3.text = new FormattedString("Area Chart");
    chart3.chartTitle = title3;

    chart3.setSourceData(dataCellAddress, true);

    const chart4 = sheet.shapes().addChart(ChartType.Pie, cell4, { x: 0, y: 0 }, cell4, { x: 100, y: 100 });

    const title4: ChartTitle = new ChartTitle();
    title4.text = new FormattedString("Pie Chart");
    chart4.chartTitle = title4;

    chart4.setSourceData(dataCellAddress, true);
});
```

## API References

- [`addChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetshapecollection.html#addChart)
- [`chartAdapter`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet.igrspreadsheet.html#chartAdapter)
- [`SpreadsheetChartAdapter`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet_chart_adapter.spreadsheetchartadapter.html)
- [`IgrSpreadsheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet.igrspreadsheet.html)
- [`workbook`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet.igrspreadsheet.html#workbook)
