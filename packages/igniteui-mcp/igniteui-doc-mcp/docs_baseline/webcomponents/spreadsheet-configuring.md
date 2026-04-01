---
title: Web Components Spreadsheet | Configuring | Cell | Formula | Navigation | Selection | Infragistics
_description: Learn how configuring your Web Components spreadsheets with Ignite UI for Web Components helps you better chart data. Improve your data visualization with Infragistics!
_keywords: Excel Spreadsheet,  Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Spreadsheet"]
_tocName: Configuring Spreadsheet
_premium: true
---

# Web Components Configuring Spreadsheet

The Web Components Spreadsheet component allows the user to configure many different aspects of the control. This includes, but is not limited to, editing of the cells, the visibility of gridlines and headers, protection, zoom level, and various other properties related to the Excel worksheet.

## Web Components Configuring Spreadsheet Example

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

## Configuring Cell Editing

When a user edits a cell value and confirms the new input, the [`IgcSpreadsheetComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html) control has the ability to navigate to cells adjacent to the currently active cell on press of the <kbd>ENTER</kbd> key, depending on the configuration of the spreadsheet.

In order to enable this <kbd>ENTER</kbd> key navigation, you can set the [`isEnterKeyNavigationEnabled`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html#isEnterKeyNavigationEnabled) property to **true**. If set to false, the active cell will stay the same when pressing the <kbd>ENTER</kbd> key.

You can also configure the direction of the adjacent cell navigated to on press of the <kbd>ENTER</kbd> key by setting the [`enterKeyNavigationDirection`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html#enterKeyNavigationDirection) property to `Down`, `Up`, `Left` or `Right`.

The following code snippets demonstrate the above:

```html
<igc-spreadsheet is-enter-key-navigation-enabled="true"
    enter-key-navigation-direction="Left">
</igc-spreadsheet>
```

<!-- WebComponents -->

```ts
import { SpreadsheetEnterKeyNavigationDirection } from 'igniteui-webcomponents-spreadsheet';
```

```ts
this.spreadsheet.isEnterKeyNavigationEnabled = true;
this.spreadsheet.enterKeyNavigationDirection = SpreadsheetEnterKeyNavigationDirection.Left;
```

## Configuring Formula Bar

The Web Components [`IgcSpreadsheetComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html) allows you to configure the visibility of the formula bar by setting the [`isFormulaBarVisible`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html#isFormulaBarVisible) property of the control.

The following code snippets demonstrate the above:

```html
<igc-spreadsheet is-formula-bar-visible="true"></igc-spreadsheet>
```

```ts
this.spreadsheet.isFormulaBarVisible = true;
```

## Configuring Gridlines

The [`IgcSpreadsheetComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html) allows you to configure the visibility of its gridlines by setting the [`areGridlinesVisible`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html#areGridlinesVisible) property of the control.

The following code snippets demonstrate the above:

```html
<igc-spreadsheet are-gridlines-visible="true"></igc-spreadsheet>
```

```ts
this.spreadsheet.areGridlinesVisible = true;
```

## Configuring Headers

The [`IgcSpreadsheetComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html) allows you to configure the visibility of its headers by setting the [`areHeadersVisible`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html#areHeadersVisible) property of the control.

The following code snippets demonstrate the above:

```html
<igc-spreadsheet are-headers-visible="false"></igc-spreadsheet>
```

```ts
this.spreadsheet.areHeadersVisible = false;
```

## Configuring Navigation

The [`IgcSpreadsheetComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html) control allows you to configure navigation between a worksheet's cells by configuring whether or not the control is in "end mode." End mode is the functionality where, on press of an arrow key, the active cell will be moved from the current cell to the end of the row or column where data exists in the adjacent cells, depending on the direction of the arrow key pressed. This functionality is good for navigating to the end of large blocks of data very quickly.

For example, if you are in end mode, and you click in a large 100x100 block of data, and press the <kbd>→</kbd> arrow key, this will navigate to the right end of the row that you are in to the furthest right column with data. After this operation, the [`IgcSpreadsheetComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html) will pop out of end mode.

End mode goes into effect at runtime when the user presses the <kbd>END</kbd> key, but it can be configured programmatically by setting the [`isInEndMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html#isInEndMode) property of the spreadsheet control.

The following code snippets demonstrate the above, in that the [`IgcSpreadsheetComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html) will begin in end mode:

```html
<igc-spreadsheet is-in-end-mode="true"></igc-spreadsheet>
```

```ts
this.spreadsheet.isInEndMode = true;
```

## Configuring Protection

The [`IgcSpreadsheetComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html) will respect the protection of a workbook on a worksheet-by-worksheet basis. Configuration for a worksheet's protection can be configured by calling the `Protect()` method on the worksheet to protect it, and the `Unprotect()` method to unprotect it.

You can activate or deactivate protection on the [`IgcSpreadsheetComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html) control's currently active worksheet by using the code below:

```ts
this.spreadsheet.activeWorksheet.protect();
this.spreadsheet.activeWorksheet.unprotect();
```

## Configuring Selection

The [`IgcSpreadsheetComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html) control allows you to configure the type of selection allowed in the control then modifier keys (<kbd>SHIFT</kbd> or <kbd>CTRL</kbd>) are pressed by the user. This is done by setting the [`selectionMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html#selectionMode) property of the spreadsheet to one of the following values:

- `AddToSelection`: New cell ranges are added to the [`SpreadsheetSelection`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.spreadsheetselection.html) object's [`cellRanges`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.spreadsheetselection.html#cellRanges) collection without needing to hold down the <kbd>CTRL</kbd> key when dragging via the mouse and a range is added with the first arrow key navigation after entering the mode. One can enter the mode by pressing <kbd>SHIFT</kbd> + <kbd>F8</kbd>.
- `ExtendSelection`: The selection range in the [`SpreadsheetSelection`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.spreadsheetselection.html) object's [`cellRanges`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.spreadsheetselection.html#cellRanges) collection representing the active cell is updated as one uses the mouse to select a cell or navigating via the keyboard.
- `Normal`: The selection is replaced when dragging the mouse to select a cell or range of cells. Similarly when navigating via the keyboard a new selection is created. One may add a new range by holding the <kbd>CTRL</kbd> key and using the mouse and one may alter the selection range containing the active cell by holding the <kbd>SHIFT</kbd> key down while clicking with the mouse or navigating with the keyboard such as with the arrow keys.

The [`SpreadsheetSelection`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.spreadsheetselection.html) object mentioned in the descriptions above can be obtained by using the [`activeSelection`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html#activeSelection) property of the [`IgcSpreadsheetComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html) control.

The following code snippets demonstrate configuration of the selection mode:

```html
<igc-spreadsheet selection-mode="ExtendSelection"></igc-spreadsheet>
```

<!-- WebComponents -->

```ts
import { SpreadsheetCellSelectionMode } from 'igniteui-webcomponents-spreadsheet';
```

```ts
this.spreadsheet.selectionMode = SpreadsheetCellSelectionMode.ExtendSelection;
```

The selection of the [`IgcSpreadsheetComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html) control can also be set or obtained programmatically. For single selection, you can set the [`activeCell`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html#activeCell) property Multiple selection is done through the [`SpreadsheetSelection`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.spreadsheetselection.html) object that is returned by the [`IgcSpreadsheetComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html) control's [`activeSelection`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html#activeSelection) property.

The [`SpreadsheetSelection`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.spreadsheetselection.html) object has an `AddCellRange()` method that allows you to programmatically add a range of cells to the selection of the spreadsheet in the form of a new  [`SpreadsheetCellRange`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.spreadsheetcellrange.html) object.

The following code snippet demonstrates adding a cell range to the spreadsheet's selection:

```ts
this.spreadsheet.activeSelection.addCellRange(new SpreadsheetCellRange(2, 2, 5, 5));
```

## Configuring Tab Bar Area

The [`IgcSpreadsheetComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html) control respects the configuration of the visibility and width of the tab bar area from the [`WindowOptions`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_excel.windowoptions.html) of the currently active [`workbook`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html#workbook) via the [`tabBarWidth`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_excel.windowoptions.html#tabBarWidth) and `TabBarVisibility` properties, respectively.

The tab bar area is the area that visualizes the worksheet names as tabs in the control.

You can configure the tab bar's visibility and width using the following code snippet:

```ts
this.spreadsheet.workbook.windowOptions.tabBarVisible = false;

this.spreadsheet.workbook.windowOptions.tabBarWidth = 200;
```

## Configuring Zoom Level

The Web Components Spreadsheet component supports zooming in and out by configuring its [`zoomLevel`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html#zoomLevel) property. The zoom level can be a maximum of 400% and a minimum of 10%.

Setting this property to a number represents the percentage as a whole number, so setting the [`zoomLevel`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html#zoomLevel) to 100 is equivalent to setting it to 100%.

The following code snippets show how to configure the spreadsheet's zoom level:

```html
<igc-spreadsheet zoom-level="200"></igc-spreadsheet>
```

```ts
this.spreadsheet.zoomLevel = 200;
```

## API References

- [`activeCell`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html#activeCell)
- [`activeSelection`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html#activeSelection)
- `CellRanges`
- `ExtendSelection`:
- [`selectionMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html#selectionMode)
- [`SpreadsheetCellRange`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.spreadsheetcellrange.html)
- [`SpreadsheetSelection`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.spreadsheetselection.html)
- [`IgcSpreadsheetComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html)
- [`WindowOptions`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_excel.windowoptions.html)
- [`workbook`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html#workbook)
- [`zoomLevel`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html#zoomLevel)
