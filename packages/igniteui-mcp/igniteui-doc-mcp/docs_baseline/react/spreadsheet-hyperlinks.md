---
title: React Spreadsheet | Hyperlinks | Infragistics
_description: Use Infragistics' React spreadsheet control to display hyperlinks in the Excel workbook, which can link to websites, file directories and other worksheets. View Ignite UI for React spreadsheet tutorials!
_keywords: Excel Spreadsheet, hyperlinks, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Spreadsheet"]
_tocName: Hyperlinks
_premium: true
---

# React Spreadsheet Hyperlinks

The React Spreadsheet component allows display of pre-existing hyperlinks in your Excel workbook as well as insertion of new ones that can link to websites, file directories, and even other worksheets in the workbook.

## React Spreadsheet Hyperlinks Example

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

export default class SpreadsheetHyperlinks extends React.Component {
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

        const url = "https://dl.infragistics.com/x/excel/Hyperlinks.xlsx";
        ExcelUtility.loadFromUrl(url).then((w) => {
            this.spreadsheet.workbook = w;
        });
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SpreadsheetHyperlinks/>);
```

<div class="divider--half"></div>

## Hyperlinks Overview

Hyperlinks are added to the [`IgrSpreadsheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet.igrspreadsheet.html) control by accessing the `Hyperlinks` collection on the worksheet that you want to place the hyperlink on. This collection has an `Add` method that takes a [`WorksheetHyperlink`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheethyperlink.html) object, where you can define the cell address, the hyperlink URL to be navigated to, the display text, and a tooltip to optionally be displayed on hover.

## Dependencies

When setting up your React spreadsheet control to use hyperlinks, you will need to import the [`WorksheetHyperlink`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheethyperlink.html) class like so:

<!-- React -->

```ts
import { WorksheetHyperlink } from 'igniteui-react-excel';
```

## Code Snippet

The following code snippet demonstrates how to add a hyperlink to the currently viewed worksheet in the React [`IgrSpreadsheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet.igrspreadsheet.html) control:

```ts
this.spreadsheet.activeWorksheet.hyperlinks().add(new WorksheetHyperlink("A1", "http://www.infragistics.com", "Infragistics", "Infragistics Home Page"));
```

## API References

- `Hyperlinks`
- [`IgrSpreadsheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet.igrspreadsheet.html)
- [`WorksheetHyperlink`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheethyperlink.html)
