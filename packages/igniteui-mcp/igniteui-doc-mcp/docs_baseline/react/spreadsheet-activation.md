---
title: React Spreadsheet | Activation | Infragistics
_description: Learn how to use the activation feature of the  React spreadsheet control which is split between the cells, panes and worksheets. Check out the Ignite UI for React spreadsheet demos!
_keywords: Excel Spreadsheet, activation, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Spreadsheet"]

_tocName: Activation
_premium: true
---

# React Spreadsheet Activation

The React Spreadsheet component exposes properties that allow you to determine the currently active cell, pane, and worksheet in the control. This is helpful as it can help you to determine where the user may be navigating or editing in the control.

## React Spreadsheet Activation Example

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
import { SpreadsheetCell } from 'igniteui-react-spreadsheet';
import { IgrSpreadsheetActiveCellChangedEventArgs } from 'igniteui-react-spreadsheet';

IgrExcelCoreModule.register();
IgrExcelModule.register();
IgrExcelXlsxModule.register();
IgrSpreadsheetModule.register();

export default class SpreadsheetActivation extends React.Component<any, any> {
    public spreadsheet: IgrSpreadsheet;
    public inputAddress: string = "C9";

    constructor(props: any) {
        super(props);
        this.onSpreadsheetRef = this.onSpreadsheetRef.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onInputAddress = this.onInputAddress.bind(this);
        this.onActiveCellChanged = this.onActiveCellChanged.bind(this);

        this.state = { inputAddress: this.inputAddress}
    }

    public render(): JSX.Element {

        return (
            <div className="container sample">
                <div className="options horizontal">
                    <input className="options-text" type="text" name="inputAddress" value={this.state.inputAddress} onChange={this.onInputAddress} />
                    <button className="options-button" onClick={this.onClick} >Active Cell</button>
                    <label className="options-label"> Current Active Cell: {this.state.activeCell } </label>
                </div>
                <div className="container">
                    <IgrSpreadsheet activeCellChanged={this.onActiveCellChanged} ref={this.onSpreadsheetRef}
                    height="100%" width="100%" />
                </div>
            </div>
        );
    }

    public onActiveCellChanged (s: IgrSpreadsheet, e: IgrSpreadsheetActiveCellChangedEventArgs)
    {
        this.setState({activeCell: e.newValue.toString()});
    }

    public onInputAddress = (e: any) => {
        this.inputAddress = e.target.value;
        this.inputAddress = this.inputAddress.toUpperCase()
        this.setState({inputAddress: this.inputAddress});
    }

    public onClick = (e: any) => {

        if (this.inputAddress === "") {
            this.inputAddress = "C9";
            this.setState({inputAddress: this.inputAddress});
        }
        this.spreadsheet.activeCell = new SpreadsheetCell(this.inputAddress);
    }

    public onSpreadsheetRef(spreadsheet: IgrSpreadsheet) {
        if (!spreadsheet) { return; }

         this.spreadsheet = spreadsheet;
         const url = "https://dl.infragistics.com/x/excel/SalesData.xlsx";
         ExcelUtility.loadFromUrl(url).then((w) => {
            this.spreadsheet.workbook = w;
            this.spreadsheet.activeCell = new SpreadsheetCell("C15");
        });
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SpreadsheetActivation/>);
```


<div class="divider--half"></div>

## Activation Overview

The activation of the React [`IgrSpreadsheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet.igrspreadsheet.html) control is split up between the cells, panes, and worksheets of the current [`workbook`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet.igrspreadsheet.html#workbook) of the spreadsheet. The three "active" properties are described below:

- [`activeCell`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet.igrspreadsheet.html#activeCell): Returns or sets the active cell in the spreadsheet. To set it, you must create a new instance of [`SpreadsheetCell`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet.spreadsheetcell.html) and pass in information about that cell, such as the column and row or the string address of the cell.
- [`activePane`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet.igrspreadsheet.html#activePane): Returns the active pane in the currently active worksheet of the spreadsheet control.
- [`activeWorksheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet.igrspreadsheet.html#activeWorksheet): Returns or sets the active worksheet in the [`workbook`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet.igrspreadsheet.html#workbook) of the spreadsheet control. This can be set by setting it to an existing worksheet in the [`workbook`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet.igrspreadsheet.html#workbook) attached to the spreadsheet.

## Code Snippet

The following code snippet shows setting activation of the cell and worksheet in the [`IgrSpreadsheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet.igrspreadsheet.html) control:

```ts
this.spreadsheet.activeWorksheet = this.spreadsheet.workbook.worksheets(1);

this.spreadsheet.activeCell = new SpreadsheetCell("C5");
```

## API References

- [`activeCell`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet.igrspreadsheet.html#activeCell)
- [`activePane`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet.igrspreadsheet.html#activePane)
- [`activeWorksheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet.igrspreadsheet.html#activeWorksheet)
- [`SpreadsheetCell`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet.spreadsheetcell.html)
- [`IgrSpreadsheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet.igrspreadsheet.html)
- [`workbook`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet.igrspreadsheet.html#workbook)
