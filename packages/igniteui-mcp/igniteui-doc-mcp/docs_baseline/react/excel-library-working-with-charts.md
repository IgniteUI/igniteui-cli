---
title: React Excel Library| Working with Charts | Infragistics
_description: Use the Infragistics' React excel library's chart feature to add visual charting representations of data trends across regions of cells in a worksheet. Visualize Ignite UI for React excel data in over 70 chart types!
_keywords: Excel library, charts,  Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Workbook", "Worksheet"]
_tocName: Working with Charts
_premium: true
---

# React Working with Charts

The Infragistics React Excel Engine's [`WorksheetChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetchart.html) functionality allows you to add visual charting representations of data trends across regions of cells in a worksheet. For example, if you want to see your Excel data in a region of cells visualized as a column, line, or over 70 other chart types, this feature can help you to achieve that.

## React Working with Charts Example

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
import { Workbook } from 'igniteui-react-excel';
import { WorkbookFormat } from 'igniteui-react-excel';
import { WorksheetRegion } from 'igniteui-react-excel';
import { ChartType } from 'igniteui-react-excel';
import { AxisType } from 'igniteui-react-excel';
import { IgrDataGridModule } from 'igniteui-react-data-grids';
import { IgrDataGrid } from 'igniteui-react-data-grids';
import { IgrTextColumn } from 'igniteui-react-data-grids';
import { IgrNumericColumn } from 'igniteui-react-data-grids';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrExcelXlsxModule } from 'igniteui-react-excel';
import { IgrExcelCoreModule } from 'igniteui-react-excel';
import { IgrExcelModule } from 'igniteui-react-excel';
import { ExcelUtility } from './ExcelUtility';

IgrDataGridModule.register();
IgrCategoryChartModule.register();

IgrExcelCoreModule.register();
IgrExcelModule.register();
IgrExcelXlsxModule.register();

export default class ExcelLibraryWorkingWithCharts extends React.Component<any, any> {

    public excelData: any[];
    public chartData: any[];

    constructor(props: any) {
        super(props);

        this.exportData = this.exportData.bind(this);

        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <button className="options-button" onClick={this.exportData}>Export</button>
                </div>
                <div className="container">
                    <IgrCategoryChart
                        height="50%" width="100%"
                        yAxisMinimumValue={0}
                        xAxisInterval={1}
                        chartType="column"
                        brushes="#4f81bd, #c0504d, #9bbb59, #8064a2"
                        outlines="#4f81bd, #c0504d, #9bbb59, #8064a2"
                        thickness={0}
                        dataSource={this.chartData} />
                    <IgrDataGrid
                        height="50%"
                        width="100%"
                        autoGenerateColumns="false"
                        dataSource={this.excelData}>
                        <IgrTextColumn field="Expense" width="*>100" />
                        <IgrNumericColumn field="Jan" width="*>75" />
                        <IgrNumericColumn field="Feb" width="*>75" />
                        <IgrNumericColumn field="Mar" width="*>75" />
                        <IgrNumericColumn field="Apr" width="*>75" />
                        <IgrNumericColumn field="May" width="*>75" />
                        <IgrNumericColumn field="Jun" width="*>75" />
                        <IgrNumericColumn field="Jul" width="*>75" />
                        <IgrNumericColumn field="Aug" width="*>75" />
                        <IgrNumericColumn field="Sep" width="*>75" />
                        <IgrNumericColumn field="Oct" width="*>75" />
                        <IgrNumericColumn field="Nov" width="*>75" />
                        <IgrNumericColumn field="Dec" width="*>75" />
                    </IgrDataGrid>
                </div>
            </div>
        );
    }

    public initData() {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const groups = ["Heating", "Electricity", "Water", "Taxes"];

        const expanseKey = "Expense";
        const monthKey = "Month";
        const data = new Array<any>();
        // generating excel data source
        for (const group of groups) {
            const r: any = {};
            r[expanseKey] = group;
            let index = 0;
            for (const month of months) {
                const x = index * 15 * Math.PI / 180;
                const rand = this.getRandom(50, 100);
                const heat = Math.abs(Math.cos(x)) * 300 + rand;
                const ac = Math.abs(Math.sin(x)) * 500 + rand;
                if (group === "Heating") {
                    r[month] = Math.round(heat);
                } else if (group === "Electricity") {
                    r[month] = Math.round(ac);
                } else if (group === "Water") {
                    r[month] = this.getRandom(100, 150);
                } else if (group === "Taxes") {
                    r[month] = this.getRandom(700, 800);
                }
                index = index + 1;
            }
            data.push(r);
        }
        this.excelData = data;
        // since we will export the data transposed (plotByRows will be true)
        // if we want to show the data that way in the ui then we need a transposed
        // version of the data for the category chart to bind to
        const chartData = new Array<any>();
        for (const month of months) {
            const r = {};
            r[monthKey] = month;
            for (const item of data) {
                r[item[expanseKey]] = item[month];
            }
            chartData.push(r);
        }
        this.chartData = chartData;
    }

    public getRandom(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    public exportData() {
        const headers = Object.keys(this.excelData[0]);
        headers.pop();

        const wb = new Workbook(WorkbookFormat.Excel2007);
        const ws = wb.worksheets().add("Sheet1");
        ws.defaultColumnWidth = 200 * 20;

        // reserving the [0] row where we will place the chart shape
        // the [1] will be the headers. so data will start on [2]
        const firstDataRow = 2;
        const headerRow = ws.rows(firstDataRow - 1);
        for (let c = 0; c < headers.length; c++) {
            headerRow.setCellValue(c, headers[c]);
        }

        for (let r = 0; r < this.excelData.length; r++) {
            const xlRow = ws.rows(r + firstDataRow);
            const dataRow = this.excelData[r];
            for (let c = 0; c < headers.length; c++) {
                xlRow.setCellValue(c, dataRow[headers[c]]);
            }
        }
        const indexRow = firstDataRow - 1;
        const indexData = firstDataRow + this.excelData.length - 1;
        const indexHeader = headers.length - 1;

        const tableRegion = new WorksheetRegion(ws, indexRow, 0, indexData, indexHeader);
        const table = ws.tables().add(tableRegion.toString(), true);

        // set some extra height for the row where the chart will be
        ws.rows(0).height = 5000;
        const chart = ws.shapes().addChart(ChartType.ColumnClustered,
            ws.rows(0).cells(0), { x: 0, y: 0 },
            ws.rows(0).cells(headers.length - 1), { x: 100, y: 100 });
        chart.setSourceData(table.wholeTableRegion.toString(), true);

        chart.axisCollection(AxisType.Category).axisBetweenCategories = true;

        ExcelUtility.save(wb, "chartSample");
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ExcelLibraryWorkingWithCharts/>);
```


> [!Note]
> The XLSX format is required. Other formats are not supported at this time.

<div class="divider--half"></div>

## Usage

In order to add a chart to a worksheet, you must use the `AddChart` method of the worksheet's shapes collection. In this method, you can specify the chart type that you wish to use, the top-left cell, the bottom-right cell, and the percentages of those cells that you wish for the chart to take up.

The `AddChart` method returns the worksheet chart element to be added to the worksheet. Once you have this, you can use the [`setSourceData`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetchart.html#setSourceData) method on the chart to set a cell address of the region of worksheet cells that you wish to use as a data source, as well as whether or not you want to switch the mapping of columns and rows to the X and Y axis.

There are over 70 supported chart types, including `Line`, `Area`, [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html), and `Pie`.

The following code demonstrates how to use the Excel charting feature. The below snippet will add a column chart to between the first cell and the 13th cell in the first row of the worksheet. The source data is then set for the data in the region of A2:M6, switching the mapping of columns and rows for the X and Y axis of the column chart:

```ts
var chart = ws.shapes().addChart(ChartType.ColumnClustered,
      ws.rows(0).cells(0), { x: 0, y: 0 },
      ws.rows(0).cells(12), { x: 100, y: 100 });

chart.setSourceData("A2:M6", true);
```

## API References

- `AddChart`
- `Area`
- [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html)
- `Line`
- `Pie`
- [`WorksheetChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetchart.html)
