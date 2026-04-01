---
title: React Excel Library| Using Worksheets | Infragistics
_description: Use Infragistics' React excel library to input data by working with the worksheet's row and cells and setting their corresponding values. Easily transfer data from Ignite UI for React excel to your application!
_keywords: Excel library, worksheet, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Workbook", "Worksheet", "WorksheetCell", "DisplayOptions", "WorksheetFilterSettings", "IWorksheetCellFormat"]
_tocName: Using Worksheets
_premium: true
---

# React Using Worksheets

The Infragistics React Excel Engine's [`worksheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#worksheet) is where your data is kept. You can input data by working with the Worksheet's rows and cells and setting their corresponding values. The [`worksheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#worksheet) allows you to filter, sort, and customize the formats of the cells, as shown below.

## React Using Worksheets Example

```typescript
export class ExcelSharedData {

}
```
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
import { IgrExcelModule } from 'igniteui-react-excel';
import { Workbook } from 'igniteui-react-excel';
import { Worksheet } from 'igniteui-react-excel';
import { WorkbookFormat } from 'igniteui-react-excel';
import { Color } from 'igniteui-react-core';
import {

    CustomFilterCondition,
    ExcelComparisonOperator,
    FormatConditionTextOperator,
    OrderedSortCondition,
    RelativeIndex,
    SortDirection,
    WorkbookColorInfo
} from 'igniteui-react-excel';

IgrExcelModule.register();

export default class ExcelLibraryUsingWorksheets extends React.Component<any, any> {
    public data: any;
    public isSorted: boolean;
    public isFiltered: boolean;
    public isProtected: boolean;
    public showGridlines: boolean;
    public showHeaders: boolean;
    public applyConditionalFormatting: boolean;
    public workbook: Workbook;

    constructor(props: any) {
        super(props);

        this.showGridlines = true;
        this.showHeaders = true;
    }

    public exportData = (): void => {
        this.initData();
        const sheet = this.workbook.worksheets(0);
        sheet.defaultColumnWidth = 220 * 20;

        if (this.isSorted) {
            sheet.sortSettings.setRegion("A2:A20");
            sheet.sortSettings.sortConditions().addItem(
                new RelativeIndex(0), new OrderedSortCondition(SortDirection.Ascending));
        }
        if (this.isFiltered) {
            sheet.filterSettings.setRegion("C1:C20");
            sheet.filterSettings.applyCustomFilter(0, new CustomFilterCondition(ExcelComparisonOperator.Equals, "USA"));
        }
        if (this.isProtected) {
            sheet.protect();
        }
        if (!this.showHeaders) {
            sheet.displayOptions.showRowAndColumnHeaders = false;
        }
        if (!this.showGridlines) {
            sheet.displayOptions.showGridlines = false;
        }
        if (this.applyConditionalFormatting) {
            const green = new Color();
            green.colorString = "Green";

            const blue = new Color();
            blue.colorString = "Blue";

            const orange = new Color();
            orange.colorString = "Orange";

            const format = sheet.conditionalFormats().addTextCondition(
                "A1:A20", "Amazon", FormatConditionTextOperator.Contains);

            const format2 = sheet.conditionalFormats().addTextCondition(
                "A1:A20", "IBM", FormatConditionTextOperator.Contains);

            const format3 = sheet.conditionalFormats().addTextCondition(
                "A1:A20", "Tesla", FormatConditionTextOperator.Contains);

            format.cellFormat.font.colorInfo = new WorkbookColorInfo(green);
            format2.cellFormat.font.colorInfo = new WorkbookColorInfo(blue);
            format3.cellFormat.font.colorInfo = new WorkbookColorInfo(orange);
        }

        ExcelUtility.save(this.workbook, "worksheetsSample");
    }

    public onChange = (e: any): void => {
        switch (e.target.id)
        {
            case "isSorted":
                this.isSorted = e.target.checked;
            break;
            case "isFiltered":
                this.isFiltered = e.target.checked;
            break;
            case "isProtected":
                this.isProtected = e.target.checked;
            break;
            case "showGridlines":
                this.showGridlines = e.target.checked;
            break;
            case "showHeaders":
                this.showHeaders = e.target.checked;
            break;
            case "applyFormat":
                this.applyConditionalFormatting = e.target.checked;
            break;
        }
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <button className="options-button" onClick={this.exportData}>Save Workbook</button>
                </div>
                <div className="options vertical">
                    <label className="options-label"><input id="isSorted" defaultChecked={this.isSorted} onChange={this.onChange} type="checkbox" />Apply Sort</label>
                    <label className="options-label"><input id="isFiltered" defaultChecked={this.isFiltered} onChange={this.onChange} type="checkbox" />Apply Filter</label>
                    <label className="options-label"><input id="isProtected" defaultChecked={this.isProtected} onChange={this.onChange} type="checkbox" />Protect Worksheet</label>
                    <label className="options-label"><input id="showGridlines" defaultChecked={this.showGridlines} onChange={this.onChange} type="checkbox" />Show Gridlines</label>
                    <label className="options-label"><input id="showHeaders" defaultChecked={this.showHeaders} onChange={this.onChange} type="checkbox" />Show Row and Column Headers</label>
                    <label className="options-label"><input id="applyFormat" defaultChecked={this.applyConditionalFormatting} onChange={this.onChange} type="checkbox" />Apply Conditional Formatting</label>
                </div>
            </div>
        );
    }

    public initData() {
        const companies = ["Amazon", "Ford", "Jaguar", "Tesla", "IBM", "Microsoft"];
        const firstNames = ["Andrew", "Mike", "Martin", "Ann", "Victoria", "John", "Brian", "Jason", "David"];
        const lastNames = ["Smith", "Jordan", "Johnson", "Anderson", "Louis", "Phillips", "Williams"];
        const cities = ["London", "Paris", "Boston", "Berlin"];
        const countries = ["UK", "France", "USA", "Germany", "Poland", "Brazil"];
        const titles = ["Sales Rep.", "Owner", "Administrator", "Manager"];
        const streets = ["Main St", "Madison St", "Broad Way"];
        const headers = ["Company Name",
            "Contact Title",
            "Country",
            "City",
            "Contact Name",
            "Address",
            "Postal Code",
            "Customer ID",
            "Salary",
            "Age"];
        const dataSource = new Array<any>();
        // generating excel data source
        this.workbook = new Workbook(WorkbookFormat.Excel2007);
        const sheet = this.workbook.worksheets().add("Sheet1");

        for (let i = 0; i < headers.length; i++) {
            sheet.rows(0).cells(i).value = headers[i];
        }

        for (let i = 1; i < 20; i++) {
            const companyName = this.getItem(companies);
            const contactTitle = this.getItem(titles);
            const country = this.getItem(countries);
            const city = this.getItem(cities);
            const contactName = this.getItem(firstNames) + " " + this.getItem(lastNames);
            const address = this.getRandom(10, 60) + " " + this.getItem(streets);
            const postalCode = this.getRandom(100, 400) + " " + this.getRandom(50, 90);
            const customerID = "CID-" + this.getRandom(500, 900);
            const salary = this.getSalary(85000, 200000);
            const age = this.getRandom(20, 65);
            const dataItem = [
                companyName,
                contactTitle,
                country,
                city,
                contactName,
                address,
                postalCode,
                customerID,
                salary,
                age
            ];
            for (let j = 0; j < dataItem.length; j++) {
                sheet.rows(i).cells(j).value = dataItem[j];
            }
        }
    }

    public getRandom(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    public getItem(array: string[]): string {
        const i = this.getRandom(0, array.length - 1);
        return array[i];
    }

    public getSalary(min: number, max: number) {
        const n = this.getRandom(min, max);
        const s = n.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
        return "$" + s.replace(".00", "");
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ExcelLibraryUsingWorksheets/>);
```


<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->

The following code shows the imports needed to use the code-snippets below:

```ts
import { Workbook } from "igniteui-react-excel";
import { Worksheet } from "igniteui-react-excel";
import { WorkbookFormat } from "igniteui-react-excel";
import { Color } from "igniteui-react-core";

import { CustomFilterCondition } from "igniteui-react-excel";
import { ExcelComparisonOperator } from "igniteui-react-excel";
import { FormatConditionTextOperator } from "igniteui-react-excel";
import { OrderedSortCondition } from "igniteui-react-excel";
import { RelativeIndex } from "igniteui-react-excel";
import { SortDirection } from "igniteui-react-excel";
import { WorkbookColorInfo } from "igniteui-react-excel";
```

<!-- end: Angular, React, WebComponents -->

## Configuring the Gridlines

The gridlines are used to visually separate the cells in the worksheet. You may show or hide the gridlines and also change their color.

You can show or hide the gridlines using the [`showGridlines`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.displayoptions.html#showGridlines) property of the [`displayOptions`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheet.html#displayOptions) of the worksheet. The following code demonstrates how you can hide the gridlines in your worksheet:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.showGridlines = false;
```

You can configure the gridlines' color using the [`gridlineColor`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.displayoptions.html#gridlineColor) property of the [`displayOptions`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheet.html#displayOptions) of the worksheet. The following code demonstrates how you can change the gridlines in your worksheet to be red:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.gridlineColor = "Red";
```

## Configuring the Headers

The column and row headers are used to visually identify columns and rows. They are also used to visually highlight the currently selected cell or cell region.

You can show or hide the column and row headers using the [`showRowAndColumnHeaders`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.displayoptions.html#showRowAndColumnHeaders) property of the [`displayOptions`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheet.html#displayOptions) of the worksheet. The following code demonstrates how you can hide the row and column headers:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.showRowAndColumnHeaders = false;
```

## Configuring Editing of the Worksheet

By default, the [`worksheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#worksheet) objects that you save will be editable. You can disable editing of a worksheet by protecting it using the [`worksheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#worksheet) object's [`protect`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbook.html#protect) method. This method has a lot of nullable `bool` arguments that determine which pieces are protected, and one of these options is to allow editing of objects, which if set to **false** will prevent editing of the worksheet.

The following code demonstrates how to disable editing in your worksheet:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.protect();
```

You can also use the [`worksheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#worksheet) object's [`protect`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbook.html#protect) method to protect a worksheet against structural changes.

When protection is set, you can set the [`cellFormat`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#cellFormat) object's [`locked`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/interfaces/igniteui_react_excel.iworksheetcellformat.html#locked) property on individual cells, rows, merged cell regions, or columns to override the worksheet object's protection on those objects. For example, if you need all cells of a worksheet to be read-only except for the cells of one column, you can protect the worksheet and then set the [`cellFormat`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#cellFormat) object's [`locked`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/interfaces/igniteui_react_excel.iworksheetcellformat.html#locked) property to **false** on a specific [`WorksheetColumn`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcolumn.html) object. This will allow your users to edit cells within the column while disabling editing of the other cells in the worksheet.

The following code demonstrates how you can do this:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.protect();
worksheet.columns(0).cellFormat.locked = false;
```

## Filtering Worksheet Regions

Filtering is done by setting a filter condition on a worksheet's [`WorksheetFilterSettings`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetfiltersettings.html) which can be retrieved from the [`worksheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#worksheet) object's [`filterSettings`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheet.html#filterSettings) property. Filter conditions are only reapplied when they're added, removed, modified, or when the [`reapplyFilters`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetfiltersettings.html#reapplyFilters) method is called on the worksheet. They are not constantly evaluated as data within the region changes.

You can specify the region to apply the filter by using the [`setRegion`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetfiltersettings.html#setRegion) method on the [`WorksheetFilterSettings`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetfiltersettings.html) object.

Below is a list of methods and their descriptions that you can use to add a filter to a worksheet:

| Method        | Description |
| --------------|-------------|
|[`applyAverageFilter`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetfiltersettings.html#applyAverageFilter)|Represents a filter which can filter data based on whether the data is below or above the average of the entire data range.|
|[`applyDatePeriodFilter`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetfiltersettings.html#applyDatePeriodFilter)|Represents a filter which can filter dates in a Month, or quarter of any year.|
|[`applyFillFilter`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetfiltersettings.html#applyFillFilter)|Represents a filter which will filter cells based on their background fills. This filter specifies a single CellFill. Cells of with this fill will be visible in the data range. All other cells will be hidden.|
|`ApplyFixedValuesFilter`|Represents a filter which can filter cells based on specific, fixed values, which are allowed to display.|
|[`applyFontColorFilter`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetfiltersettings.html#applyFontColorFilter)|Represents a filter which will filter cells based on their font colors. This filter specifies a single color. Cells with this color font will be visible in the data range. All other cells will be hidden.|
|[`applyIconFilter`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetfiltersettings.html#applyIconFilter)|Represents a filter which can filter cells based on their conditional formatting icon.|
|[`applyRelativeDateRangeFilter`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetfiltersettings.html#applyRelativeDateRangeFilter)|Represents a filter which can filter date cells based on dates relative to the when the filter was applied.|
|[`applyTopOrBottomFilter`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetfiltersettings.html#applyTopOrBottomFilter)|Represents a filter which can filter in cells in the upper or lower portion of the sorted values.|
|[`applyYearToDateFilter`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetfiltersettings.html#applyYearToDateFilter)|Represents a filter which can filter in date cells if the dates occur between the start of the current year and the time when the filter is evaluated.|
|[`applyCustomFilter`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetfiltersettings.html#applyCustomFilter)|Represents a filter which can filter data based on one or two custom conditions. These two filter conditions can be combined with a logical "and" or a logical "or" operation.|

You can use the following code snippet as an example to add a filter to a worksheet region:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.filterSettings.setRegion("Sheet1!A1:A10");
worksheet.filterSettings.applyAverageFilter(0, AverageFilterType.AboveAverage);
```

## Freezing and Splitting Panes

You can freeze rows at the top of your worksheet or columns at the left using the freezing panes features. Frozen rows and columns remain visible at all times while the user is scrolling. The frozen rows and columns are separated from the rest of the worksheet by a single, solid line, which cannot be removed.

In order to enable pane freezing, you need to set the [`panesAreFrozen`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.displayoptions.html#panesAreFrozen) property of the [`worksheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#worksheet) object's [`displayOptions`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheet.html#displayOptions) to **true**. You can then specify the rows or columns to freeze by using the `FrozenRows` and `FrozenColumns` properties of the display options [`frozenPaneSettings`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.displayoptions.html#frozenPaneSettings), respectively.

You can also specify the first row in the bottom pane or first column in the right pane using the `FirstRowInBottomPane` and `FirstColumnInRightPane` properties, respectively.

The following code snippet demonstrates how to use the freezing panes features in a worksheet:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.panesAreFrozen = true;

worksheet.displayOptions.frozenPaneSettings.frozenRows = 3;
worksheet.displayOptions.frozenPaneSettings.frozenColumns = 1;

worksheet.displayOptions.frozenPaneSettings.firstColumnInRightPane = 2;
worksheet.displayOptions.frozenPaneSettings.firstRowInBottomPane = 6;
```

## Setting the Worksheet Zoom Level

You can change the zoom level for each worksheet independently using the `MagnificationInNormalView` property on the [`worksheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#worksheet) object's [`displayOptions`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheet.html#displayOptions). This property takes a value between 10 and 400 and represents the percentage of zoom that you wish to apply.

The following code demonstrates how you can do this:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.magnificationInNormalView = 300;
```

## Worksheet Level Sorting

Sorting is done by setting a sorting condition on a worksheet level object on either columns or rows. You can sort columns or rows in ascending or descending order.

This is done by specifying a region and sort type to the [`worksheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#worksheet) object's [`WorksheetSortSettings`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetsortsettings.html) that can be retrieved using the [`sortSettings`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheet.html#sortSettings) property of the sheet.

The sort conditions in a sheet are only reapplied when sort conditions are added, removed, modified, or when the [`reapplySortConditions`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetsortsettings.html#reapplySortConditions) method is called on the worksheet. Columns or rows will be sorted within the region. "Rows" is the default sort type.

The following code snippet demonstrates how to apply a sort to a region of cells in a worksheet:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.sortSettings.sortConditions().addItem(new RelativeIndex(0), new OrderedSortCondition(SortDirection.Ascending));
```

## Worksheet Protection

You can protect a worksheet by calling the [`protect`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbook.html#protect) method on the [`worksheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#worksheet) object. This method exposes many nullable `bool` parameters that allow you to restrict or allow the following user operations:

- Editing of cells.
- Editing of objects such as shapes, comments, charts, or other controls.
- Editing of scenarios.
- Filtering of data.
- Formatting of cells.
- Inserting, deleting, and formatting of columns.
- Inserting, deleting, and formatting of rows.
- Inserting of hyperlinks.
- Sorting of data.
- Usage of pivot tables.

You can remove worksheet protection by calling the [`unprotect`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbook.html#unprotect) method on the [`worksheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#worksheet) object.

The following code snippet shows how to enable protection of all of the above-listed user operations:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.protect();
```

## Worksheet Conditional Formatting

You can configure the conditional formatting of a [`worksheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#worksheet) object by using the many "Add" methods exposed on the [`conditionalFormats`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheet.html#conditionalFormats) collection of that worksheet. The first parameter of these "Add" methods is the `string` region of the worksheet that you would like to apply the conditional format to.

Many of the conditional formats that you can add to your worksheet have a [`cellFormat`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#cellFormat) property that determines the way that the [`WorksheetCell`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html) elements should look when the condition in that conditional format holds true. For example, you can use the properties attached to this [`cellFormat`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#cellFormat) property such as [`fill`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/interfaces/igniteui_react_excel.iworksheetcellformat.html#fill) and [`font`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/interfaces/igniteui_react_excel.iworksheetcellformat.html#font) to determine the background and font settings of your cells under a particular conditional format, respectively.

There are a few conditional formats that do not have a [`cellFormat`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#cellFormat) property, as their visualization on the worksheet cell behaves differently. These conditional formats are the [`DataBarConditionalFormat`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.databarconditionalformat.html), [`ColorScaleConditionalFormat`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.colorscaleconditionalformat.html), and [`IconSetConditionalFormat`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.iconsetconditionalformat.html).

When loading a pre-existing [`workbook`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.sheet.html#workbook) from Excel, the formats will be preserved when that [`workbook`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.sheet.html#workbook) is loaded. The same is true for when you save the [`workbook`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.sheet.html#workbook) out to an Excel file.

The following code example demonstrates usage of conditional formats on a worksheet:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

var color = new Color();
color.colorString = "Red";

var format = worksheet.conditionalFormats().addAverageCondition("A1:A10", FormatConditionAboveBelow.AboveAverage);
format.cellFormat.font.colorInfo = new WorkbookColorInfo(color);
```

## API References

- [`cellFormat`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#cellFormat)
- [`ColorScaleConditionalFormat`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.colorscaleconditionalformat.html)
- [`conditionalFormats`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheet.html#conditionalFormats)
- [`DataBarConditionalFormat`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.databarconditionalformat.html)
- [`displayOptions`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheet.html#displayOptions)
- [`filterSettings`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheet.html#filterSettings)
- [`showGridlines`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.displayoptions.html#showGridlines)
- [`showRowAndColumnHeaders`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.displayoptions.html#showRowAndColumnHeaders)
- [`sortSettings`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheet.html#sortSettings)
- [`workbook`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.sheet.html#workbook)
- [`WorksheetCell`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html)
- [`WorksheetColumn`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcolumn.html)
- [`WorksheetFilterSettings`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetfiltersettings.html)
- [`WorksheetSortSettings`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetsortsettings.html)
- [`worksheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.worksheetcell.html#worksheet)
