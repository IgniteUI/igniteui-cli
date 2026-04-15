---
title: Angular Data Chart | Data Visualization Tools | Synchronization | Infragistics
_description: Synchronize between multiple Infragistics' Angular charts controls including zooming, panning and crosshair events. Learn about our Ignite UI for Angular graph synchronization capabilities!
_keywords: Angular charts, data chart, synchronization, Ignite UI for Angular, Infragistics
_license: commercial
mentionedTypes: ["XamDataChart"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Synchronization
_premium: true
---

# Angular Chart Synchronization

The Ignite UI for Angular data chart allows for synchronization with respect to the coordination of zooming, panning, and crosshair events between multiple charts. This can help you to visualize the same areas of multiple charts, assuming your data sources are similar or the same with respect to the axes.

## Angular Chart Synchronization Example

This sample shows synchronization of two Angular data charts:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxLegendModule, IgxDataChartInteractivityModule } from "igniteui-angular-charts";
import { SharedData } from "./SharedData";


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
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxLegendModule,
    IgxDataChartInteractivityModule
],
  providers: [SharedData],
schemas: []
})
export class AppModule {}
```
```typescript
import { Component, ViewChild } from "@angular/core";
import { IgxDataChartComponent } from "igniteui-angular-charts";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public data: any[];

    @ViewChild("chart1", { static: true })
    public chart1: IgxDataChartComponent;

    @ViewChild("chart2", { static: true })
    public chart2: IgxDataChartComponent;

    public syncHorizontally: boolean;
    public syncVertically: boolean;

    constructor() {
        this.initData();
        this.syncHorizontally = true;
        this.syncVertically = true;
    }

    public initData() {
        this.data = [
            { Country: "Canada", Coal: 400, Oil: 100, Gas: 175, Nuclear: 225, Hydro: 350 },
            { Country: "China", Coal: 925, Oil: 200, Gas: 350, Nuclear: 400, Hydro: 625 },
            { Country: "Russia", Coal: 550, Oil: 200, Gas: 250, Nuclear: 475, Hydro: 425 },
            { Country: "Australia", Coal: 450, Oil: 100, Gas: 150, Nuclear: 175, Hydro: 350 },
            { Country: "United States", Coal: 800, Oil: 250, Gas: 475, Nuclear: 575, Hydro: 750 },
            { Country: "France", Coal: 375, Oil: 150, Gas: 350, Nuclear: 275, Hydro: 325 }
        ];
    }

    public syncHorizontalChanged(e: any) {
        const checked = e.target.checked;

        this.chart1.synchronizeHorizontally = checked;
        this.chart2.synchronizeHorizontally = checked;
    }

    public syncVerticalChanged(e: any) {
        const checked = e.target.checked;

        this.chart1.synchronizeVertically = checked;
        this.chart2.synchronizeVertically = checked;
    }
}
```
```html
<div class="container vertical">
    <div class="options horizontal" >
        <label><input type="checkbox" (change)="syncHorizontalChanged($event)">Sync Horizontally</label>
        <label><input type="checkbox" (change)="syncVerticalChanged($event)">Sync Vertically</label>
    </div>

    <div class="container">
      <igx-data-chart
        width="100%" syncChannel="ChannelA" synchronizeHorizontally=false synchronizeVertically=false
        height="50%" #chart1 isHorizontalZoomEnabled=true isVerticalZoomEnabled=true
        [dataSource]="data" >

        <igx-category-x-axis #xAxis label="Country"></igx-category-x-axis>
        <igx-numeric-y-axis #yAxis minimumValue=0></igx-numeric-y-axis>

        <igx-line-series name="series1" [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Coal"></igx-line-series>
      </igx-data-chart>

      <igx-data-chart isHorizontalZoomEnabled=true isVerticalZoomEnabled=true
        width="100%" syncChannel="ChannelA" synchronizeHorizontally=false synchronizeVertically=false
        height="50%" #chart2
        [dataSource]="data" >

        <igx-category-x-axis #xAxis2 label="Country"></igx-category-x-axis>
        <igx-numeric-y-axis #yAxis2 minimumValue=0></igx-numeric-y-axis>

        <igx-line-series name="series2" [xAxis]="xAxis2" [yAxis]="yAxis2" valueMemberPath="Coal"></igx-line-series>
      </igx-data-chart>
    </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Chart Synchronization Properties

There are four options of chart synchronization, in that you can synchronize horizontally only, vertically only, both, or you can choose not to synchronize at all, which is the default.

If you want to synchronize a set of charts, you can assign them the same name to the `SyncChannel` property and then specify whether or not to synchronize the charts horizontally and/or vertically by setting the `SynchronizeHorizontally` and `SynchronizeVertically` properties to the corresponding boolean value.

Note that in order to synchronize either vertically and/or horizontally, you will need to set the [`isHorizontalZoomEnabled`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html#isHorizontalZoomEnabled) and/or [`isVerticalZoomEnabled`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html#isVerticalZoomEnabled) property to **true**, respectively. A synchronized chart that is dependent on another chart will still zoom regardless of this property setting.

## API References

The following is a list of API members mentioned in the above sections:

- [`isHorizontalZoomEnabled`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html#isHorizontalZoomEnabled)
- [`isVerticalZoomEnabled`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html#isVerticalZoomEnabled)
- `SyncChannel`
- `SynchronizeHorizontally`
- `SynchronizeVertically`
- [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)
