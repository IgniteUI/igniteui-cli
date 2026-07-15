---
title: Web Components Excel Library| Using Workbooks| Infragistics
_description: Use Infragistics' Web Components excel library to create workbooks and worksheets, input data and export the date to Microsoft® Excel. View Ignite UI for Web Components excel tutorials for more information!
_keywords: Excel library, workbooks, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Workbook"]
_tocName: Using Workbooks
_premium: true
---

# Web Components Using Workbooks

The Infragistics Web Components Excel Engine enables you to save data to and load data from Microsoft® Excel®. You can create workbooks and worksheets, input data, and export the data to Excel using the library’s various classes. The Infragistics Web Components Excel Engine makes it easy to export the data in your application as an Excel spreadsheet as well as import data from Excel into your application.

## Web Components Using Workbooks Example

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

## Change Default Font

First create a new instance of [`IWorkbookFont`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/interfaces/igniteui_webcomponents_excel.iworkbookfont.html). Next, add the new font to the [`styles`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_excel.workbook.html#styles) collection of the [`Workbook`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_excel.workbook.html). This style contains the default properties for all cells in the workbook, unless otherwise specified on a row, column, or cell. Changing properties of the style will change the default cell format properties in the workbook.

```ts
var workbook = new Workbook();
var font: IWorkbookFont;
font = workbook.styles().normalStyle.styleFormat.font;
font.name = "Times New Roman";
font.height = 16 * 20;
```

## Setting Workbook Properties

Microsoft Excel® document properties provide information to help organize and keep track of your documents. You can use the Infragistics Web Components Excel Library to set these properties using the [`Workbook`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_excel.workbook.html) object’s [`documentProperties`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_excel.workbook.html#documentProperties) property. The available properties are:

- `Author`

- `Title`

- `Subject`

- `Keywords`

- `Category`

- `Status`

- `Comments`

- `Company`

- `Manager`

The following code demonstrates how to create a workbook and set its `title` and `status` document properties.

```ts
var workbook = new Workbook();
workbook.documentProperties.title = "Expense Report";
workbook.documentProperties.status = "Complete";
```

## Workbook Protection

The workbook protection feature allows you to protect the structure of the workbook. That is, the ability for a user to add, rename, delete, hide, and reorder the worksheets in that workbook.

The protection is not enforced via the Infragistics Excel Engine's object model. It is a responsibility of the UI visualizing this object model to honor these protection settings and allow or restrict the user from performing the corresponding operations.

Protection is applied to a workbook by invoking its `protect` method.

When a [`Workbook`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_excel.workbook.html) is protected without a password, the end user may unprotect the [`Workbook`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_excel.workbook.html) in Excel without having to supply a password. To programmatically unprotect a [`Workbook`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_excel.workbook.html), one may use the `unprotect` method.

When a [`Workbook`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_excel.workbook.html) is protected, the values of the properties of the [`WorkbookProtection`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_excel.workbookprotection.html) instance from this [`Workbook`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_excel.workbook.html)'s `protection` property indicate the disabled operations.

If [`isProtected`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_excel.workbook.html#isProtected) is already true, the `protect` method will be ignored.

```ts
var workbook = new Workbook();
workbook.protect(false, false);
```

Check if a workbook has protection. This read-only property returns true if the workbook has any protection set using the overloads of the Protect method.

```ts
var workbook = new Workbook();
var protect = workbook.isProtected;
```

This read-only property returns an object of type WorkbookProtection which contains properties for obtaining each protection setting individually.

```ts
var workbook = new Workbook();
var protection = workbook.protection;
```

## API References

- [`documentProperties`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_excel.workbook.html#documentProperties)
- [`WorkbookProtection`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_excel.workbookprotection.html)
- [`Workbook`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_excel.workbook.html)
- [`Workbook`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_excel.workbook.html)
