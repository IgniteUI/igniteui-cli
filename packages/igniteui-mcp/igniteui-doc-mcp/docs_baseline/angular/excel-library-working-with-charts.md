---
title: Angular Excel Library| Working with Charts | Infragistics
_description: Use the Infragistics' Angular excel library's chart feature to add visual charting representations of data trends across regions of cells in a worksheet. Visualize Ignite UI for Angular excel data in over 70 chart types!
_keywords: Excel library, charts,  Ignite UI for Angular, Infragistics
_license: commercial
mentionedTypes: ["Workbook", "Worksheet"]
_tocName: Working with Charts
_premium: true
---

# Angular Working with Charts

The Infragistics Angular Excel Engine's [`WorksheetChart`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheetchart.html) functionality allows you to add visual charting representations of data trends across regions of cells in a worksheet. For example, if you want to see your Excel data in a region of cells visualized as a column, line, or over 70 other chart types, this feature can help you to achieve that.

## Angular Working with Charts Example

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxGridModule } from "igniteui-angular";
import { IgxCategoryChartModule } from "igniteui-angular-charts";
import { IgxExcelModule } from "igniteui-angular-excel";

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
    IgxGridModule,
    IgxCategoryChartModule,
    IgxExcelModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, ChangeDetectionStrategy, Component } from "@angular/core";
import { AxisType } from "igniteui-angular-excel";
import { ChartType } from "igniteui-angular-excel";
import { Workbook } from "igniteui-angular-excel";
import { WorkbookFormat } from "igniteui-angular-excel";
import { WorksheetRegion } from "igniteui-angular-excel";
import { ExcelUtility } from "./ExcelUtility";

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit {

    public excelData: any[];
    public chartData: any[];

    constructor() {
        this.initializeData();
    }

    public initializeData() {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
        const groups = ["Heating", "Electricity", "Water", "Taxes"];

        const expanseKey = "Expense";
        const monthKey = "Month";
        const data = new Array<any>();
        // generating excel data source
        for (const group of groups) {
            const r = {};
            r[expanseKey] = group;
            let index = 0;
            for (const month of months) {
                const x = index * 15 * Math.PI / 180;
                const rand = this.getRandom(50, 100);
                const heat = Math.abs(Math.cos(x)) * 300 + rand;
                const ac = Math.abs(Math.sin(x)) * 500 + rand;
                if (group === "Heating") {
                    r[month] = Math.round(heat);
                } else if (group === "Electricity") {
                    r[month] = Math.round(ac);
                } else if (group === "Water") {
                    r[month] = this.getRandom(100, 150);
                } else if (group === "Taxes") {
                    r[month] = this.getRandom(700, 800);
                }
                index = index + 1;
            }
            data.push(r);
        }
        this.excelData = data;
        // since we will export the data transposed (plotByRows will be true)
        // if we want to show the data that way in the ui then we need a transposed
        // version of the data for the category chart to bind to
        const chartData = new Array<any>();
        for (const month of months) {
            const r = {};
            r[monthKey] = month;
            for (const item of data) {
                r[item[expanseKey]] = item[month];
            }
            chartData.push(r);
        }
        this.chartData = chartData;
    }

    public getRandom(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    public exportData() {
        const headers = Object.keys(this.excelData[0]);
        const wb = new Workbook(WorkbookFormat.Excel2007);
        const ws = wb.worksheets().add("Sheet1");
        ws.defaultColumnWidth = 200 * 20;

        // reserving the [0] row where we will place the chart shape
        // the [1] will be the headers. so data will start on [2]
        const firstDataRow = 2;
        const headerRow = ws.rows(firstDataRow - 1);
        for (let c = 0; c < headers.length; c++) {
            headerRow.setCellValue(c, headers[c]);
        }

        for (let r = 0; r < this.excelData.length; r++) {
            const xlRow = ws.rows(r + firstDataRow);
            const dataRow = this.excelData[r];
            for (let c = 0; c < headers.length; c++) {
                xlRow.setCellValue(c, dataRow[headers[c]]);
            }
        }
        const indexRow = firstDataRow - 1;
        const indexData = firstDataRow + this.excelData.length - 1;
        const indexHeader = headers.length - 1;

        const tableRegion = new WorksheetRegion(ws, indexRow, 0, indexData, indexHeader);
        const table = ws.tables().add(tableRegion.toString(), true);

        // set some extra height for the row where the chart will be
        ws.rows(0).height = 5000;
        const chart = ws.shapes().addChart(ChartType.ColumnClustered,
          ws.rows(0).cells(0), { x: 0, y: 0 },
          ws.rows(0).cells(headers.length - 1), { x: 100, y: 100 });
        chart.setSourceData(table.wholeTableRegion.toString(), true);

        chart.axisCollection(AxisType.Category).axisBetweenCategories = true;

        ExcelUtility.save(wb, "chartSample");
    }

    public ngOnInit() {
    }

    public ngAfterViewInit(): void {
    }

}
```
```html
<div class="container">
    <div class="options">
        <button (click)="exportData()">Export To Excel File</button>
    </div>
    <div class="chart">
        <igx-category-chart #chart
            height="60%" width="100%"
            yAxisMinimumValue=0
            xAxisInterval=1
            chartType="column"
            brushes="#4f81bd, #c0504d, #9bbb59, #8064a2"
            outlines="#4f81bd, #c0504d, #9bbb59, #8064a2"
            thickness=0
            [dataSource]="chartData">
        </igx-category-chart>

        <igx-grid [data]="excelData" height="40%" width="100%" [autoGenerate]="false">
            <igx-column [field]="'Expense'" [resizable]="true" width="10%"></igx-column>
            <igx-column [field]="'Jan'" [resizable]="true" width="7.5%"></igx-column>
            <igx-column [field]="'Feb'" [resizable]="true" width="7.5%"></igx-column>
            <igx-column [field]="'Mar'" [resizable]="true" width="7.5%"></igx-column>
            <igx-column [field]="'Apr'" [resizable]="true" width="7.5%"></igx-column>
            <igx-column [field]="'May'" [resizable]="true" width="7.5%"></igx-column>
            <igx-column [field]="'Jun'" [resizable]="true" width="7.5%"></igx-column>
            <igx-column [field]="'Jul'" [resizable]="true" width="7.5%"></igx-column>
            <igx-column [field]="'Aug'" [resizable]="true" width="7.5%"></igx-column>
            <igx-column [field]="'Sep'" [resizable]="true" width="7.5%"></igx-column>
            <igx-column [field]="'Oct'" [resizable]="true" width="7.5%"></igx-column>
            <igx-column [field]="'Nov'" [resizable]="true" width="7.5%"></igx-column>
            <igx-column [field]="'Dec'" [resizable]="true" width="7.5%"></igx-column>
        </igx-grid>
    </div>
</div>
```
```scss
.container {
    display: flex;
    flex-flow: column;
    height: 100%;
    min-width: 300px;
}

.chart {
    flex: 1;
    overflow: hidden;
}
```


> [!Note]
> The XLSX format is required. Other formats are not supported at this time.

<div class="divider--half"></div>

## Usage

In order to add a chart to a worksheet, you must use the `AddChart` method of the worksheet's shapes collection. In this method, you can specify the chart type that you wish to use, the top-left cell, the bottom-right cell, and the percentages of those cells that you wish for the chart to take up.

The `AddChart` method returns the worksheet chart element to be added to the worksheet. Once you have this, you can use the [`setSourceData`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheetchart.html#setSourceData) method on the chart to set a cell address of the region of worksheet cells that you wish to use as a data source, as well as whether or not you want to switch the mapping of columns and rows to the X and Y axis.

There are over 70 supported chart types, including `Line`, `Area`, [`IgxColumnComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_grids_grids.igxcolumncomponent.html), and `Pie`.

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
- [`IgxColumnComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_grids_grids.igxcolumncomponent.html)
- `Line`
- `Pie`
- [`WorksheetChart`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheetchart.html)
