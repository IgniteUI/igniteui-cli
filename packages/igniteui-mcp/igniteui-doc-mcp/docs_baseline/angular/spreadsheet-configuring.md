---
title: "Angular Spreadsheet | Configuring | Cell | Formula | Navigation | Selection | Infragistics"
description: Learn how configuring your Angular spreadsheets with Ignite UI for Angular helps you better chart data. Improve your data visualization with Infragistics!
keywords: Excel Spreadsheet,  Ignite UI for Angular, Infragistics
license: commercial
mentionedTypes: ["Spreadsheet"]
llms:
  description: "The Angular Spreadsheet component allows the user to configure many different aspects of the control."
_tocName: Configuring Spreadsheet
_premium: true
---
# Angular Configuring Spreadsheet

The Angular Spreadsheet component allows the user to configure many different aspects of the control. This includes, but is not limited to, editing of the cells, the visibility of gridlines and headers, protection, zoom level, and various other properties related to the Excel worksheet.

## Angular Configuring Spreadsheet Example

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { ExcelUtility } from "./ExcelUtility";
import { IgxExcelModule } from "igniteui-angular-excel";
import { IgxSpreadsheetModule } from "igniteui-angular-spreadsheet";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,

],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxExcelModule,
    IgxSpreadsheetModule
],
  providers: [ExcelUtility],
schemas: []
})
export class AppModule {}
```
```typescript
import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxSpreadsheetComponent } from "igniteui-angular-spreadsheet";
import { ExcelUtility } from "./ExcelUtility";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

  @ViewChild("spreadsheet", { static: true })
  public spreadsheet: IgxSpreadsheetComponent;

  public spreadsheetSelectionMode: string;
  public enterKeyNavDirection: string;
  public isProtected: boolean;
  public isFormulaBarVisible: boolean;
  public areGridlinesVisible: boolean;
  public areHeadersVisible: boolean;
  public isEnterKeyNavEnabled: boolean;

  public spreadsheetZoomLevel: number;

  constructor() {
      this.spreadsheetSelectionMode = "Normal";
      this.isProtected = false;
      this.isFormulaBarVisible = true;
      this.areGridlinesVisible = true;
      this.areHeadersVisible = true;
      this.isEnterKeyNavEnabled = false;
      this.enterKeyNavDirection = "Down";
      this.spreadsheetZoomLevel = 100;
  }

  public onProtectedChanged(e: any) {
      if (e.target.checked) {
          this.spreadsheet.activeWorksheet.protect();
      } else {
          this.spreadsheet.activeWorksheet.unprotect();
      }
  }

  public onTabBarAreaVisibilityChanged(e: any) {
      if (e.target.checked) {
          this.spreadsheet.workbook.windowOptions.tabBarVisible = true;
      } else {
          this.spreadsheet.workbook.windowOptions.tabBarVisible = false;
      }
  }

  public spreadsheetSelectionChanged(args: any) {
      const value = args.target.value;

      switch (value) {
          case "Normal": {
              this.spreadsheet.selectionMode = 0;
              break;
          }
          case "ExtendSelection": {
              this.spreadsheet.selectionMode = 1;
              break;
          }
          case "AddToSelection": {
              this.spreadsheet.selectionMode = 2;
              break;
          }
      }
  }

  public enterKeyNavDirectionChanged(args: any) {
      const value = args.target.value;

      switch (value) {
          case "Down": {
              this.spreadsheet.enterKeyNavigationDirection = 0;
              break;
          }
          case "Up": {
              this.spreadsheet.enterKeyNavigationDirection = 2;
              break;
          }
          case "Left": {
              this.spreadsheet.enterKeyNavigationDirection = 3;
              break;
          }
          case "Right": {
              this.spreadsheet.enterKeyNavigationDirection = 1;
              break;
          }
      }
  }

  public ngOnInit() {
      const excelFile = "https://dl.infragistics.com/x/excel/SalesData.xlsx";

      ExcelUtility.loadFromUrl(excelFile).then((w) => {
          this.spreadsheet.workbook = w;
      });
  }
}
```
```html
<div class="container vertical">
    <div class="options horizontal">
        <span class="options-item">Selection Mode: </span>
        <select [(ngModel)]="spreadsheetSelectionMode" (change)="spreadsheetSelectionChanged($event)">
            <option>AddToSelection</option>
            <option>ExtendSelection</option>
            <option>Normal</option>
        </select>

        <span class="options-item">Enter Key Navigation Direction: </span>
        <select [(ngModel)]="enterKeyNavDirection" (change)="enterKeyNavDirectionChanged($event)">
            <option>Down</option>
            <option>Left</option>
            <option>Right</option>
            <option>Up</option>
        </select>

        <input type="range" min=50 max=300 [(ngModel)]="spreadsheetZoomLevel" step=10>
        <label class="options-item">Zoom Level: {{spreadsheetZoomLevel}}%</label>
    </div>
    <div class="options horizontal">
        <label class="options-item"><input type="checkbox" (change)="onProtectedChanged($event)" /> Is Protected</label>
        <label class="options-item"><input type="checkbox" [(ngModel)]="isFormulaBarVisible" /> Is Formula Bar
            Visible</label>
        <label class="options-item"><input type="checkbox" [(ngModel)]="isEnterKeyNavEnabled" /> Enter Key Navigation
            Enabled</label>
    </div>
    <div class="options horizontal">

        <label class="options-item"><input type="checkbox" checked=true
                (change)="onTabBarAreaVisibilityChanged($event)" /> Is Tab Bar
            Area Visible</label>
        <label class="options-item"><input type="checkbox" width="200px" [(ngModel)]="areGridlinesVisible" /> Are
            Gridlines
            Visible</label>
        <label class="options-item"><input type="checkbox" [(ngModel)]="areHeadersVisible" /> Are Headers Visible</label>
    </div>

    <igx-spreadsheet #spreadsheet height="100%" width="100%"
        [isFormulaBarVisible]="isFormulaBarVisible" [areGridlinesVisible]="areGridlinesVisible"
        [areHeadersVisible]="areHeadersVisible" [isEnterKeyNavigationEnabled]="isEnterKeyNavEnabled"
        [zoomLevel]="spreadsheetZoomLevel">
    </igx-spreadsheet>

</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

## Configuring Cell Editing

When a user edits a cell value and confirms the new input, the `IgxSpreadsheet` control has the ability to navigate to cells adjacent to the currently active cell on press of the <kbd>ENTER</kbd> key, depending on the configuration of the spreadsheet.

In order to enable this <kbd>ENTER</kbd> key navigation, you can set the `IsEnterKeyNavigationEnabled` property to **true**. If set to false, the active cell will stay the same when pressing the <kbd>ENTER</kbd> key.

You can also configure the direction of the adjacent cell navigated to on press of the <kbd>ENTER</kbd> key by setting the `EnterKeyNavigationDirection` property to `Down`, `Up`, `Left` or `Right`.

The following code snippets demonstrate the above:

```html
<igx-spreadsheet isEnterKeyNavigationEnabled=true
    enterKeyNavigationDirection="Left">
</igx-spreadsheet>
```

```ts
this.spreadsheet.isEnterKeyNavigationEnabled = true;
this.spreadsheet.enterKeyNavigationDirection = SpreadsheetEnterKeyNavigationDirection.Left;
```

## Configuring Formula Bar

The Angular `IgxSpreadsheet` allows you to configure the visibility of the formula bar by setting the `IsFormulaBarVisible` property of the control.

The following code snippets demonstrate the above:

```html
<igx-spreadsheet isFormulaBarVisible=true></igx-spreadsheet>
```

```ts
this.spreadsheet.isFormulaBarVisible = true;
```

## Configuring Gridlines

The `IgxSpreadsheet` allows you to configure the visibility of its gridlines by setting the `AreGridlinesVisible` property of the control.

The following code snippets demonstrate the above:

```html
<igx-spreadsheet areGridlinesVisible=true></igx-spreadsheet>
```

```ts
this.spreadsheet.areGridlinesVisible = true;
```

## Configuring Headers

The `IgxSpreadsheet` allows you to configure the visibility of its headers by setting the `AreHeadersVisible` property of the control.

The following code snippets demonstrate the above:

```html
<igx-spreadsheet areHeadersVisible=false></igx-spreadsheet>
```

```ts
this.spreadsheet.areHeadersVisible = false;
```

## Configuring Navigation

The `IgxSpreadsheet` control allows you to configure navigation between a worksheet's cells by configuring whether or not the control is in "end mode." End mode is the functionality where, on press of an arrow key, the active cell will be moved from the current cell to the end of the row or column where data exists in the adjacent cells, depending on the direction of the arrow key pressed. This functionality is good for navigating to the end of large blocks of data very quickly.

For example, if you are in end mode, and you click in a large 100x100 block of data, and press the <kbd>→</kbd> arrow key, this will navigate to the right end of the row that you are in to the furthest right column with data. After this operation, the `IgxSpreadsheet` will pop out of end mode.

End mode goes into effect at runtime when the user presses the <kbd>END</kbd> key, but it can be configured programmatically by setting the `IsInEndMode` property of the spreadsheet control.

The following code snippets demonstrate the above, in that the `IgxSpreadsheet` will begin in end mode:

```html
<igx-spreadsheet isInEndMode=true></igx-spreadsheet>
```

```ts
this.spreadsheet.isInEndMode = true;
```

## Configuring Protection

The `IgxSpreadsheet` will respect the protection of a workbook on a worksheet-by-worksheet basis. Configuration for a worksheet's protection can be configured by calling the `Protect()` method on the worksheet to protect it, and the `Unprotect()` method to unprotect it.

You can activate or deactivate protection on the `IgxSpreadsheet` control's currently active worksheet by using the code below:

```ts
this.spreadsheet.activeWorksheet.protect();
this.spreadsheet.activeWorksheet.unprotect();
```

## Configuring Selection

The `IgxSpreadsheet` control allows you to configure the type of selection allowed in the control then modifier keys (<kbd>SHIFT</kbd> or <kbd>CTRL</kbd>) are pressed by the user. This is done by setting the `SelectionMode` property of the spreadsheet to one of the following values:

- `AddToSelection`: New cell ranges are added to the `IgxSpreadsheetSelection` object's `CellRanges` collection without needing to hold down the <kbd>CTRL</kbd> key when dragging via the mouse and a range is added with the first arrow key navigation after entering the mode. One can enter the mode by pressing <kbd>SHIFT</kbd> + <kbd>F8</kbd>.
- `ExtendSelection`: The selection range in the `IgxSpreadsheetSelection` object's `CellRanges` collection representing the active cell is updated as one uses the mouse to select a cell or navigating via the keyboard.
- `Normal`: The selection is replaced when dragging the mouse to select a cell or range of cells. Similarly when navigating via the keyboard a new selection is created. One may add a new range by holding the <kbd>CTRL</kbd> key and using the mouse and one may alter the selection range containing the active cell by holding the <kbd>SHIFT</kbd> key down while clicking with the mouse or navigating with the keyboard such as with the arrow keys.

The
`IgxSpreadsheetSelection`
object mentioned in the descriptions above can be obtained by using the `ActiveSelection` property of the `IgxSpreadsheet` control.

The following code snippets demonstrate configuration of the selection mode:

```html
<igx-spreadsheet selectionMode="ExtendSelection"></igx-spreadsheet>
```

```ts
this.spreadsheet.selectionMode = SpreadsheetCellSelectionMode.ExtendSelection;
```

The selection of the `IgxSpreadsheet` control can also be set or obtained programmatically. For single selection, you can set the `ActiveCell` property Multiple selection is done through the
`IgxSpreadsheetSelection`
object that is returned by the `IgxSpreadsheet` control's `ActiveSelection` property.

The
`IgxSpreadsheetSelection`
object has an `AddCellRange()` method that allows you to programmatically add a range of cells to the selection of the spreadsheet in the form of a new  `IgxSpreadsheetCellRange` object.

The following code snippet demonstrates adding a cell range to the spreadsheet's selection:

```ts
this.spreadsheet.activeSelection.addCellRange(new SpreadsheetCellRange(2, 2, 5, 5));
```

## Configuring Tab Bar Area

The `IgxSpreadsheet` control respects the configuration of the visibility and width of the tab bar area from the `WindowOptions` of the currently active `Workbook` via the `TabBarWidth` and `TabBarVisibility` properties, respectively.

The tab bar area is the area that visualizes the worksheet names as tabs in the control.

You can configure the tab bar's visibility and width using the following code snippet:

```ts
this.spreadsheet.workbook.windowOptions.tabBarVisible = false;

this.spreadsheet.workbook.windowOptions.tabBarWidth = 200;
```

## Configuring Zoom Level

The Angular Spreadsheet component supports zooming in and out by configuring its `ZoomLevel` property. The zoom level can be a maximum of 400% and a minimum of 10%.

Setting this property to a number represents the percentage as a whole number, so setting the `ZoomLevel` to 100 is equivalent to setting it to 100%.

The following code snippets show how to configure the spreadsheet's zoom level:

```html
<igx-spreadsheet zoomLevel=200></igx-spreadsheet>
```

```ts
this.spreadsheet.zoomLevel = 200;
```

## API References

`IgxSpreadsheetCellRange`
<br />
`IgxSpreadsheetSelection`<br />
`IgxSpreadsheet`<br />
`IgxWorkbook`<br />
