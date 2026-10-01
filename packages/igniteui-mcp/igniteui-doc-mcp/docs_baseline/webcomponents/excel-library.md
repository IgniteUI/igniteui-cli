---
title: "Web Components Excel Library| Data Spreadsheet and Table | Infragistics"
description: Use Infragistics' Web Components excel library to work with spreadsheet data using Microsoft Excel features.  Learn how easily you can transfer data from excel to your application using Ignite UI for Web Components excel library!
keywords: Excel library, Ignite UI for Web Components, Infragistics, workbook
license: commercial
mentionedTypes: ["Workbook", "Worksheet", "Cell", "Formula"]
llms:
  description: "The Infragistics Web Components Excel Library allows you to work with spreadsheet data using familiar Microsoft® Excel® spreadsheet objects like Workbook, Worksheet, Cell, Formula and many more."
_tocName: Excel Library
---
# Web Components Excel Library Overview

The Infragistics Web Components Excel Library allows you to work with spreadsheet data using familiar Microsoft® Excel® spreadsheet objects like `IgcWorkbook`, `IgcWorksheet`, `Cell`, `IgcFormula` and many more. The Infragistics Web Components Excel Library makes it easy for you to represent the data of your application in an Excel spreadsheet as well as transfer data from Excel into your application.

## Web Components Excel Library Example

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

## Dependencies
When installing the excel package, the core package must also be installed.

```cmd
npm install --save igniteui-webcomponents-core
npm install --save igniteui-webcomponents-excel
```

## Component Modules

The Web Components excel library requires the following modules:

```ts
// Module Manager for registering the modules of the excel library
import { ModuleManager } from 'igniteui-webcomponents-core';
import { IgcExcelModule  } from 'igniteui-webcomponents-excel';

// register the modules
ModuleManager.register(
    IgcExcelModule
);
```

## Supported Versions of Microsoft Excel
The following is a list of the supported versions of Excel.**

- Microsoft Excel 97

- Microsoft Excel 2000

- Microsoft Excel 2002

- Microsoft Excel 2003

- Microsoft Excel 2007

- Microsoft Excel 2010

- Microsoft Excel 2013

- Microsoft Excel 2016

**Note:** 
The Excel Library does not support the Excel Binary Workbook (.xlsb) format at this time.

## Load and Save Workbooks

Now that the Excel Library module is imported, next step is to load a workbook.

In the following code snippet, an external [ExcelUtility](./excel-utility.md) class is used to save and load a `IgcWorkbook`.

In order to load and save `IgcWorkbook` objects, you can utilize the `Save` method of the actual `IgcWorkbook` object, as well as its static `Load` method.

```ts
import { Workbook } from "igniteui-webcomponents-excel";
import { WorkbookSaveOptions } from "igniteui-webcomponents-excel";
import { WorkbookFormat } from "igniteui-webcomponents-excel";
import { ExcelUtility } from "ExcelUtility";

var workbook = ExcelUtility.load(file);
ExcelUtility.save(workbook, "fileName");
```

## API References
`IgcWorksheet`
`IgcWorkbook`
