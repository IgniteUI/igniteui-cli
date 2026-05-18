---
title: React Spreadsheet | Clipboard Operations | Infragistics
_description: Use clipboard operations such as copy, cut and paste within Infragistics' React spreadsheet control. View Infragistics Ignite UI for React spreadsheet demos today!
_keywords: Spreadsheet, clipboard operations, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Spreadsheet", "SpreadsheetAction", "SpreadsheetCommandType", "Command"]
_tocName: Clipboard
_premium: true
---

# React Working with Clipboard

This topic explains how to perform clipboard operations on the Ignite UI for React spreadsheet component.

## React Working with Clipboard Example

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
import { IgrExcelXlsxModule } from 'igniteui-react-excel';
import { IgrExcelCoreModule } from 'igniteui-react-excel';
import { IgrExcelModule } from 'igniteui-react-excel';
import { IgrSpreadsheetModule } from 'igniteui-react-spreadsheet';
import { IgrSpreadsheet } from 'igniteui-react-spreadsheet';
import { ExcelUtility } from './ExcelUtility';
import { SpreadsheetAction } from 'igniteui-react-spreadsheet';

IgrExcelCoreModule.register();
IgrExcelModule.register();
IgrExcelXlsxModule.register();
IgrSpreadsheetModule.register();

export default class SpreadsheetClipboard extends React.Component<any, any> {
    public spreadsheet: IgrSpreadsheet;

    constructor(props: any) {
        super(props);
        this.onSpreadsheetRef = this.onSpreadsheetRef.bind(this);
        this.cut = this.cut.bind(this);
        this.copy = this.copy.bind(this);
        this.paste = this.paste.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <button className="options-button" id="cut" onClick={this.cut}>Cut</button>
                    <button className="options-button" id="copy"  onClick={this.copy}>Copy</button>
                    <button className="options-button" id="paste" onClick={this.paste}>Paste</button>
                </div>
                <IgrSpreadsheet ref={this.onSpreadsheetRef} height="calc(100% - 25px)" width="100%" />
            </div>
        );
    }

    public onSpreadsheetRef(spreadsheet: IgrSpreadsheet) {
        if (!spreadsheet) { return; }

        this.spreadsheet = spreadsheet;

        const url = "https://dl.infragistics.com/x/excel/SalesData.xlsx";
        ExcelUtility.loadFromUrl(url).then((w) => {
            this.spreadsheet.workbook = w;
        });
    }

    public cut() {
        if (!this.spreadsheet) { return; }

        this.spreadsheet.executeAction(SpreadsheetAction.Cut);
    }

    public copy() {
        if (!this.spreadsheet) { return; }

        this.spreadsheet.executeAction(SpreadsheetAction.Copy);
    }

    public paste() {
        if (!this.spreadsheet) { return; }

        this.spreadsheet.executeAction(SpreadsheetAction.Paste);
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SpreadsheetClipboard/>);
```

<div class="divider--half"></div>

## Dependencies

Before making use of the clipboard you will want to import the `SpreadsheetAction` enumeration:

<!-- React -->

```ts
import { IgrSpreadsheet } from 'igniteui-react-spreadsheet';
import { SpreadsheetAction } from 'igniteui-react-spreadsheet';
```

<div class="divider--half"></div>

## Usage

The following code snippet shows how you can execute commands related to the clipboard in the React [`IgrSpreadsheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet.igrspreadsheet.html) control:

```ts
public cut(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.Cut);
}

public copy(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.Copy);
}

public paste(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.Paste);
}
```

## API References

- `SpreadsheetAction`
- [`IgrSpreadsheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet.igrspreadsheet.html)
