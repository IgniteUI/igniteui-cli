---
title: Web Components Excel Library| Working with Charts | Infragistics
_description: Use the Infragistics' Web Components excel library's chart feature to add visual charting representations of data trends across regions of cells in a worksheet. Visualize Ignite UI for Web Components excel data in over 70 chart types!
_keywords: Excel library, charts,  Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Workbook", "Worksheet"]
_tocName: Working with Charts
_premium: true
---

# Web Components Working with Charts

The Infragistics Web Components Excel Engine's [`WorksheetChart`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_excel.worksheetchart.html) functionality allows you to add visual charting representations of data trends across regions of cells in a worksheet. For example, if you want to see your Excel data in a region of cells visualized as a column, line, or over 70 other chart types, this feature can help you to achieve that.

## Web Components Working with Charts Example

```typescript
import { saveAs } from "file-saver";
import { Workbook } from 'igniteui-webcomponents-excel';
import { WorkbookFormat } from 'igniteui-webcomponents-excel';
import { WorkbookSaveOptions } from 'igniteui-webcomponents-excel';
import { WorkbookLoadOptions } from 'igniteui-webcomponents-excel';
import { IgcExcelXlsxModule } from 'igniteui-webcomponents-excel';
import { IgcExcelCoreModule } from 'igniteui-webcomponents-excel';
import { IgcExcelModule } from 'igniteui-webcomponents-excel';

IgcExcelCoreModule.register();
IgcExcelModule.register();
IgcExcelXlsxModule.register();

export class ExcelUtility {

    public static getExtension(format: WorkbookFormat) {
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
            req.onload = (d) => {
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
            fr.onerror = (e) => {
                reject(fr.error);
            };

            if (fr.readAsBinaryString) {
                fr.onload = (e) => {
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
                fr.onload = (e) => {
                    resolve(new Uint8Array(fr.result as ArrayBuffer));
                };
                fr.readAsArrayBuffer(file);
            }
        });
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

> [!Note]
> The XLSX format is required. Other formats are not supported at this time.

<div class="divider--half"></div>

## Usage

In order to add a chart to a worksheet, you must use the `AddChart` method of the worksheet's shapes collection. In this method, you can specify the chart type that you wish to use, the top-left cell, the bottom-right cell, and the percentages of those cells that you wish for the chart to take up.

The `AddChart` method returns the worksheet chart element to be added to the worksheet. Once you have this, you can use the [`setSourceData`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_excel.worksheetchart.html#setSourceData) method on the chart to set a cell address of the region of worksheet cells that you wish to use as a data source, as well as whether or not you want to switch the mapping of columns and rows to the X and Y axis.

There are over 70 supported chart types, including `Line`, `Area`, [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html), and `Pie`.

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
- [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html)
- `Line`
- `Pie`
- [`WorksheetChart`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_excel.worksheetchart.html)
