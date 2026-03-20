---
title: Web Components Spreadsheet Component – Ignite UI for Web Components
_description: Get flexible layouts, easy customization options & convenient Excel-like interface with Ignite UI for Web Components Spreadsheet. Manage tabular data the way you want!
_keywords: Excel Spreadsheet, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Spreadsheet"]
_tocName: Spreadsheet
---

# Web Components Spreadsheet Overview

The Web Components Spreadsheet  (Excel viewer) component is lightweight, feature-rich and supplied with all the necessary options for operating, visualizing, and editing all types of spreadsheet data – scientific, business, financial, and more. All the information can be presented in a tabular format that feels intuitive and easy to navigate across cells, panes, and worksheets. The [`IgcSpreadsheetComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html) is complemented by flexible Excel-like interface, detailed charts, and features such as activation, cell editing, conditional formatting, styling, selection, clipboard.

## Web Components Spreadsheet Example

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


<div class="divider--half"></div>

## Functionality

- Features

Just like in Excel spreadsheet, you can apply filtering functionality, sorting, move cells, customization in terms of cells color, keyboard shortcuts, and add the ability to even calculate formulas.

## Spreadsheet Usage

- Performance

The spreadsheet is compatible on all modern browsers and optimized for complex and voluminous spreadsheet models, while ensuring flawless functionality and simplicity.

- Flexible layout and easy customization

You can easily select, add, remove, switch the features you want on/off, and configure React sheets in an instant so that it all answers the needs of end-users. There are also configurable libraries, styling and formatting alternatives, visibility options, plenty of themes to choose from.

- Convenient Excel-like interface

Just like operating data in Excel, our spreadsheet component delivers all well-known Excel clip board operations – copy, paste, cut. You won’t need extra training or new skills in order to start using it right away. It also comes with options for sorting, full keyboard navigation, values and formulas, cell dragging, column and rows editing, filtering, number formatting, resizing. The smart and fast calculation engine powers even the most complex estimations. With no dependencies on Excel.

- Data operations

Collect and manage scientific, business, engineering, financial and educational data. Prepare and create analysis, advanced grids, reports, data input forms, budgeting, forecasting scenarios, custom spreadsheets. All of this thanks to the comprehensive API.

- Fast and secure data processing

With our spreadsheet, processing data is 100% safe and secure…

- Excel and CSV import & export

With the built-in Excel import/export functionality, you can instantly load and open Excel documents and view them on-demand, add changes and save them. Also, effortlessly export your completed Excel .xlsx spreadsheets.

## Dependencies

When installing the Web Components spreadsheet component, the core and excel package must also be installed.

```cmd
npm install --save igniteui-webcomponents-core
npm install --save igniteui-webcomponents-excel
npm install --save igniteui-webcomponents-spreadsheet
```

## Component Modules

The [`IgcSpreadsheetComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html) requires the following modules:

```ts
// Module Manager for registering the modules of the chart
import { ModuleManager } from 'igniteui-webcomponents-core';
// spreadsheet's modules
import { IgcExcelModule } from 'igniteui-webcomponents-excel';
import { IgcSpreadsheetModule } from 'igniteui-webcomponents-spreadsheet';

// register the modules
ModuleManager.register(
    IgcExcelModule,
    IgcSpreadsheetModule
);
```

<div class="divider--half"></div>

## Usage

Now that the Web Components spreadsheet module is imported, next is the basic configuration of the spreadsheet.

```html
<igc-spreadsheet id="spreadsheet" height="500px" width="100%">
</igc-spreadsheet>
```

> \[!Note]
>
> In the following code snippet, an external [ExcelUtility](excel-utility.md) class is used to save and load a [`workbook`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html#workbook).

The following demonstrates how to load a workbook into the Web Components spreadsheet

```ts
import { IgcSpreadsheetComponent } from 'igniteui-webcomponents-spreadsheet';
import { Workbook } from 'igniteui-webcomponents-excel';
import { ExcelUtility } from "./ExcelUtility";

// ...

let spreadsheet = (document.getElementById("spreadsheet") as IgcSpreadsheetComponent);

const excelFile = '../../assets/Sample1.xlsx';
ExcelUtility.loadFromUrl(excelFile).then((w: Workbook) => {
    spreadsheet.workbook = w;
});
```

## API References

- [`IgcSpreadsheetComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html)
- [`workbook`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html#workbook)
