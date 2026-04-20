---
title: Angular Chart Performance | Data Visualization | Infragistics
_description: Infragistics' Angular Chart Performance
_keywords: Angular Charts, Performance, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "FinancialChart", "XamDataChart", "FinancialChartVolumeType", "FinancialChartZoomSliderType"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Performance
_premium: true
---

# Angular Chart Performance

Angular charts are optimized for high performance of rendering millions of data points and updating them every few milliseconds. However, there are several chart features that affect performance of the chart and they should be considered when optimizing performance in your application. This topic will guide you to make Angular charts work as fast as possible in your application.

## Angular Chart Performance Examples

The following examples demonstrates two high performance scenarios of Angular charts.

## Angular Chart with High-Frequency

In High-Frequency scenario, the Angular Charts can render data items that are updating in real time or at specified milliseconds intervals. You will experience no lag, no screen-flicker, and no visual delays, even as you interact with the chart on a touch-device. The following sample demonstrates the [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) in High-Frequency scenario.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxCategoryChartModule, IgxLegendModule } from "igniteui-angular-charts";
import { IgxSliderModule } from "igniteui-angular";


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
    IgxCategoryChartModule,
    IgxLegendModule,
    IgxSliderModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, OnDestroy, ViewChild } from "@angular/core";
import { IgxCategoryChartComponent } from "igniteui-angular-charts";

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit, OnDestroy {

    public data: any[];

    @ViewChild("chart", { static: true })
    public chart: IgxCategoryChartComponent;

    private currValue: number = 15;
    private currIndex: number = 0;

    private shouldTick: boolean = true;
    private _timerStatusText: string = "Stop";

    private _maxPoints: number = 5000;

    private _refreshInterval: number = 10;
    private _interval: number = -1;
    private _frames: number = 0;
    private _time: Date;

    constructor(private _zone: NgZone) {
        this.data = this.generateData();
    }

    public onChangeAmountClicked() {
        this.data = this.generateData();
    }

    public onTimerStartStopClick() {
        if (this.shouldTick) {
            this.shouldTick = false;
            this._timerStatusText = "Start";
        }
        else {
            this.shouldTick = true;
            this._timerStatusText = "Stop";
        }
    }

    public onRefreshFrequencyChanged(e: any) {
        let num: number = parseInt(e.target.value, 10);

        if (isNaN(num)) {
            num = 10;
        }
        if (num < 10) {
            num = 10;
        }
        if (num > 1000) {
            num = 1000;
        }
        this._refreshInterval = num;
        this.setupInterval();
    }

    public onMaxPointsChanged(e: any) {
        let num: number = parseInt(e.target.value, 10);

        if (isNaN(num)) {
            num = 1000;
        }
        if (num < 1000) {
            num = 1000;
        }
        if (num > 1000000) {
            num = 1000000;
        }
        this._maxPoints = num;
    }

    public get maxPointsText(): string {
        return this.toShortString(this._maxPoints);
    }

    public get maxPoints(): number {
        return this._maxPoints;
    }

    @Input()
    public set maxPoints(v: number) {
        this._maxPoints = v;
    }

    public get refreshInterval(): number {
        return this._refreshInterval;
    }

    @Input()
    public set refreshInterval(v: number) {
        this._refreshInterval = v;
        this.setupInterval();
    }

    public get refreshIntervalText(): string {
        return (this._refreshInterval / 1000).toFixed(3) + "s";
    }

    public get timerStatusText() {
        return this._timerStatusText;
    }

    @Input()
    public set timerStatusText(v: string) {
        this._timerStatusText = v;
    }

    public ngOnDestroy(): void {
        if (this._interval >= 0) {
            this._zone.runOutsideAngular(() => {
                window.clearInterval(this._interval);
            });
            this._interval = -1;
        }
    }

    public ngAfterViewInit(): void {
        this._time = new Date();
        this.setupInterval();
    }

    private setupInterval(): void {
        if (this._interval >= 0) {
            this._zone.runOutsideAngular(() => {
                window.clearInterval(this._interval);
            });
            this._interval = -1;
        }

        this._zone.runOutsideAngular(() => {
            this._interval = window.setInterval(() => this.tick(),
                this.refreshInterval);
        });
    }

    private generateData(): any[] {
        const data: any[] = [];
        for (this.currIndex = 0; this.currIndex < this.maxPoints; this.currIndex++) {
            this.currValue += Math.random() * 4.0 - 2.0;
            data.push({ Label: this.currIndex.toString(), Value: this.currValue });
        }
        return data;
    }


    private tick(): void {

        if (this.shouldTick) {

            this.currValue += Math.random() * 4.0 - 2.0;
            this.currIndex++;
            const newVal = { Label: this.currIndex.toString(), Value: this.currValue };

            const oldVal = this.data[0];
            this.data.push(newVal);
            this.chart.notifyInsertItem(this.data, this.data.length - 1, newVal);
            this.data.shift();
            this.chart.notifyRemoveItem(this.data, 0, oldVal);

            this._frames++;
            const currTime = new Date();
            const elapsed = (currTime.getTime() - this._time.getTime());
            if (elapsed > 5000) {
                const fps = this._frames / (elapsed / 1000.0);
                this._time = currTime;
                this._frames = 0;
            }
        }
    }

    private toShortString(largeValue: number): string {
        let roundValue: string;

        if (largeValue >= 1000000) {
            roundValue = (largeValue / 1000000).toFixed(1);
            return roundValue + "m";
        }
        if (largeValue >= 1000) {
            roundValue = (largeValue / 1000).toFixed(0);
            return roundValue + "k";
        }

        roundValue = largeValue.toFixed(0);
        return roundValue + "";
    }
}
```
```html
<div class="container vertical">
    <div class="options horizontal">
        <button style="width: 5rem" (click)="onTimerStartStopClick()">{{timerStatusText}}</button>
        <label class="options-label">Refresh: </label>
        <label class="options-value">{{ refreshIntervalText }}</label>
        <input class="options-slider" type="range" min="10" max="1000" step="10"
        [value]="refreshInterval" (change)="onRefreshFrequencyChanged($event)"/>

        <button (click)="onChangeAmountClicked()" style="margin-left: 1rem;">Generate</button>
        <label class="options-label">Points: </label>
        <label class="options-value">{{maxPointsText}}</label>
        <input class="options-slider" type="range" min="1000" max="50000" step="100"
         [value]="maxPoints" (change)="onMaxPointsChanged($event)" />
    </div>

    <div class="container">
        <igx-category-chart height="100%"
            [dataSource]="data"
            yAxisLabelExtent="40"
            markerTypes="None"
            toolTipType="Default"
            xAxisEnhancedIntervalPreferMoreCategoryLabels="false"
            shouldAutoExpandMarginForInitialLabels="false"
            crosshairsDisplayMode="None"
            #chart>
        </igx-category-chart>
    </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

<div class="divider--half"></div>

## Angular Chart with High-Volume

In High-Volume scenario, the Angular Charts can render 1 million of data points while the chart keeps providing smooth performance when end-users tries zooming in/out or navigating chart content. The following sample demonstrates the [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) in High-Volume scenario.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxCategoryChartModule, IgxLegendModule } from "igniteui-angular-charts";
import { IgxSliderModule } from "igniteui-angular";


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
    IgxCategoryChartModule,
    IgxLegendModule,
    IgxSliderModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, OnDestroy, ViewChild } from "@angular/core";
import { IgxAssigningCategoryStyleEventArgs } from "igniteui-angular-charts";
import { IgxCategoryChartComponent } from "igniteui-angular-charts";
import { IgxChartSeriesEventArgs } from "igniteui-angular-charts";
import { IgxHorizontalAnchoredCategorySeriesComponent } from "igniteui-angular-charts";

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit, OnDestroy {
    @Input()
    public scalingRatio: number = 1;

    @ViewChild("chart", { static: true })
    public chart: IgxCategoryChartComponent;

    private currValue: number = 15;
    private currIndex: number = 0;

    private _maxPoints: number = 500000;

    private _refreshMilliseconds: number = 10;
    private _interval: number = -1;
    private _frames: number = 0;
    private _time: Date;
    private _assigningData: boolean = false;
    private _data: any[];

    constructor(private _zone: NgZone) {
        this._data = this.generateData();
    }

    public onGenerateDataClicked() {
        this._data = this.generateData();
    }

    public onAssignDataClicked() {
        this._time = new Date();
        this._assigningData = true;
        this.chart.dataSource = this._data;
    }

    public onMaxPointsChanged(e: any) {
        let num: number = parseInt(e.target.value, 10);
        if (isNaN(num)) {
            num = 5000;
        }
        if (num < 5000) {
            num = 5000;
        }
        if (num > 2000000) {
            num = 2000000;
        }
        this.maxPoints = num;
    }

    public get maxPointsText(): string {
        return this.toShortString(this._maxPoints);
    }

    public get maxPoints(): number {
        return this._maxPoints;
    }
    @Input()
    public set maxPoints(v: number) {
        this._maxPoints = v;
    }

    public ngOnDestroy(): void {
        if (this._interval >= 0) {
            this._zone.runOutsideAngular(() => {
            window.clearInterval(this._interval);
            });
            this._interval = -1;
        }
    }

    public ngAfterViewInit(): void {
        this.chart.seriesAdded.subscribe((args: { sender: any, args: IgxChartSeriesEventArgs }) => {
            const cat = args.args.series as IgxHorizontalAnchoredCategorySeriesComponent;
            cat.isCustomCategoryStyleAllowed = true;
            cat.assigningCategoryStyle.subscribe((event: { sender: any, args: IgxAssigningCategoryStyleEventArgs }) => {
                if (this._assigningData) {
                    this._assigningData = false;

                    this._zone.runOutsideAngular(() => {
                        window.setTimeout(() => {}, 0);
                    });
                }
            });
        });

        this.chart.seriesRemoved.subscribe((event: { sender: any, args: IgxChartSeriesEventArgs }) => {
            const cat = event.args.series as IgxHorizontalAnchoredCategorySeriesComponent;
            cat.isCustomCategoryStyleAllowed = false;
            cat.assigningCategoryStyle.unsubscribe();
        });

        this.chart.dataSource = this._data;
    }

    private generateData(): any[] {
        const data: any[] = [];
        for (this.currIndex = 0; this.currIndex <= this.maxPoints; this.currIndex++) {
            this.currValue += Math.random() * 4.0 - 2.0;
            const label = this.toShortString(this.currIndex);
            data.push({ Label: label, Value: this.currValue });
        }
        return data;
    }

    private toShortString(largeValue: number): string {
        let roundValue: number;

        if (largeValue >= 1000000) {
            roundValue = Math.round(largeValue / 100000) / 10;
            return roundValue + "m";
        }
        if (largeValue >= 1000) {
            roundValue = Math.round(largeValue / 100) / 10;
            return roundValue + "k";
        }

        roundValue = Math.round(largeValue);
        return roundValue + "";
    }
}
```
```html
<div class="container vertical">
    <div class="options horizontal">
        <button (click)="onGenerateDataClicked()">Generate Data</button>
        <button (click)="onAssignDataClicked()">AssignData</button>

        <label class="options-label">Data amount: {{ maxPointsText }}</label>
        <input class="options-slider" type="range" id="slider" min="5000" max="2000000" step="1000" [value]="maxPoints"
            (input)="onMaxPointsChanged($event)"/>
    </div>
    <div class="container">
        <igx-category-chart height="100%" yAxisLabelExtent="40"
        markerTypes="None"
        toolTipType="Default"
        xAxisEnhancedIntervalPreferMoreCategoryLabels="false"
        shouldAutoExpandMarginForInitialLabels="false"
        crosshairsDisplayMode="None"
        #chart>
        </igx-category-chart>
    </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

<div class="divider--half"></div>

## General Performance Guidelines

This section lists guidelines and chart features that add to the overhead and processing updates in the Angular charts.

### Data Size

If you need to plot data sources with large number of data points (e.g. 10,000+), we recommend using Angular [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) with one of the following type of series which where designed for specially for that purpose.

- [Scatter HD Chart](../types/scatter-chart.md#angular-scatter-high-density-chart) instead of [Category Point Chart](../types/point-chart.md) or [Scatter Marker Chart](../types/scatter-chart.md#angular-scatter-marker-chart)
- [Scatter Polyline Chart](../types/shape-chart.md#angular-scatter-polyline-chart) instead of [Category Line Chart](../types/line-chart.md#angular-line-chart-example) or [Scatter Line Chart](../types/scatter-chart.md#angular-scatter-line-chart)
- [Scatter Polygon Chart](../types/shape-chart.md#angular-scatter-polygon-chart) instead of [Category Area Chart](../types/area-chart.md#angular-area-chart-example) or [Column Chart](../types/column-chart.md#angular-column-chart-example)

### Data Structure

Although Angular charts support rendering of multiple data sources by binding array of arrays of data points to `ItemsSource` property. It is much faster for charts if multiple data sources are flatten into single data source where each data item contains multiple data columns rather just one data column. For example:

```ts
this.CategoryChart.dataSource = FlattenDataSource.create();
this.FinancialChart.dataSource = FlattenDataSource.create();

export class FlattenDataSource {
  public static create(): any[] {
    const data: any[] = [];
    data.push({ Year: "1996", USA: 148, CHN: 110 });
    data.push({ Year: "2000", USA: 142, CHN: 115 });
    return data;
  }
}
// instead of this data structure:
export class MultiDataSources {
  public static create(): any[] {
    const dataSource1: any[] = [];
    dataSource1.push({ Year: "1996", Value: 148 });
    dataSource1.push({ Year: "2000", Value: 142 });
    const dataSource2: any[] = [];
    dataSource2.push({ Year: "1996", Value: 110 });
    dataSource2.push({ Year: "2000", Value: 115 });
    const multipleSources: any[] = [dataSource1, dataSource2];
    return multipleSources;
  }
}
```

### Data Filtering

Angular [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) and the [`IgxFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) controls have built-in data adapter that analyzes your data and generates chart series for you. However, it works faster if you use [`includedProperties`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#includedProperties) and [`excludedProperties`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#excludedProperties) to filter only those data columns that you actually want to render. For example,

<!-- Angular, React, WebComponents -->

```ts
this.Chart.includedProperties = ["Year", "USA", "RUS"];
this.Chart.excludedProperties = ["CHN", "FRN", "GER"];
```

## Chart Performance Guidelines

### Chart Types

Simpler chart types such as [Line Chart](../types/line-chart.md) have faster performance than using [Spline Chart](../types/spline-chart.md) because of the complex interpolation of spline lines between data points. Therefore, you should use [`chartType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#chartType) property of Angular [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) or the [`IgxFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) control to select type of chart that renders faster. Alternatively, you can change a type of series to a faster series in Angular [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control.

The following table lists chart types in order from the fastest performance to slower performance in each group of charts:

| Chart Group      | Chart Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Pie Charts       | - [Pie Chart](../types/pie-chart.md) <br> - [Donut Chart](../types/donut-chart.md) <br> - [Radial Pie Chart](../types/radial-chart.md#angular-radial-pie-chart)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Line Charts      | - [Category Line Chart](../types/line-chart.md#angular-line-chart-example) <br> - [Category Spline Chart](../types/spline-chart.md#angular-spline-chart-example) <br> - [Step Line Chart](../types/step-chart.md#angular-step-line-chart) <br> - [Radial Line Chart](../types/radial-chart.md#angular-radial-line-chart) <br> - [Polar Line Chart](../types/polar-chart.md#angular-polar-line-chart) <br> - [Scatter Line Chart](../types/scatter-chart.md#angular-scatter-line-chart) <br> - [Scatter Polyline Chart](../types/shape-chart.md#angular-scatter-polyline-chart) (\*) <br> - [Scatter Contour Chart](../types/scatter-chart.md#angular-scatter-contour-chart) <br> - [Stacked Line Chart](../types/stacked-chart.md#angular-stacked-line-chart) <br> - [Stacked 100% Line Chart](../types/stacked-chart.md#angular-stacked-100-line-chart) <br>                                                |
| Area Charts      | - [Category Area Chart](../types/area-chart.md#angular-area-chart-example) <br> - [Step Area Chart](../types/step-chart.md#angular-step-area-chart) <br> - [Range Area Chart](../types/area-chart.md#angular-range-area-chart) <br> - [Radial Area Chart](../types/radial-chart.md#angular-radial-area-chart) <br> - [Polar Area Chart](../types/polar-chart.md#angular-polar-area-chart) <br> - [Scatter Polygon Chart](../types/shape-chart.md#angular-scatter-polygon-chart) (\*) <br> - [Scatter Area Chart](../types/scatter-chart.md#angular-scatter-area-chart) <br> - [Stacked Area Chart](../types/stacked-chart.md#angular-stacked-area-chart) <br> - [Stacked 100% Area Chart](../types/stacked-chart.md#angular-stacked-100-area-chart) <br>                                                                                                                                                     |
| Column Charts    | - [Column Chart](../types/column-chart.md#angular-column-chart-example) <br> - [Bar Chart](../types/bar-chart.md#angular-bar-chart-example) <br> - [Waterfall Chart](../types/column-chart.md#angular-waterfall-chart) <br> - [Range Column Chart](../types/column-chart.md#angular-range-column-chart) <br> - [Radial Column Chart](../types/radial-chart.md#angular-radial-column-chart) <br> - [Stacked Column Chart](../types/stacked-chart.md#angular-stacked-column-chart) <br> - [Stacked Bar Chart](../types/stacked-chart.md#angular-stacked-bar-chart) <br> - [Stacked 100% Column Chart](../types/stacked-chart.md#angular-stacked-100-column-chart) <br> - [Stacked 100% Bar Chart](../types/stacked-chart.md#angular-stacked-100-bar-chart)                                                                                                                                                     |
| Spline Charts    | - [Category Spline Chart](../types/spline-chart.md#angular-spline-chart-example) <br> - [Polar Spline Chart](../types/polar-chart.md#angular-polar-spline-chart) <br> - [Scatter Spline Chart](../types/scatter-chart.md#angular-scatter-spline-chart) <br> - [Stacked Spline Chart](../types/stacked-chart.md#angular-stacked-spline-chart) <br> - [Stacked 100% Spline Chart](../types/stacked-chart.md#angular-stacked-100-spline-chart) <br>                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Point Charts     | - [Category Point Chart](../types/point-chart.md) <br> - [Scatter HD Chart](../types/scatter-chart.md#angular-scatter-high-density-chart) <br> - [Scatter Marker Chart](../types/scatter-chart.md#angular-scatter-marker-chart) <br> - [Scatter Bubble Chart](../types/bubble-chart.md) <br> - [Polar Marker Chart](../types/polar-chart.md#angular-polar-marker-chart) <br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Financial Charts | - [Stock Chart in Line Mode](../types/stock-chart.md) <br> - [Stock Chart in Column Mode](../types/stock-chart.md) <br> - [Stock Chart in Bar Mode](../types/stock-chart.md) <br> - [Stock Chart in Candle Mode](../types/stock-chart.md) <br> - [Stock Chart with Overlays](../types/stock-chart.md) <br> - [Stock Chart with Zoom Pane](../types/stock-chart.md) <br> - [Stock Chart with Volume Pane](../types/stock-chart.md#volume-pane) <br> - [Stock Chart with Indicator Pane](../types/stock-chart.md#indicator-pane) <br>                                                                                                                                                                                                                                                                                                                                                                          |
| Scatter Charts   | - [Scatter HD Chart](../types/scatter-chart.md#angular-scatter-high-density-chart) <br> - [Scatter Marker Chart](../types/scatter-chart.md#angular-scatter-marker-chart) <br> - [Scatter Line Chart](../types/scatter-chart.md#angular-scatter-line-chart) <br> - [Scatter Bubble Chart](../types/bubble-chart.md) <br> - [Scatter Spline Chart](../types/scatter-chart.md#angular-scatter-spline-chart) <br> - [Scatter Area Chart](../types/scatter-chart.md#angular-scatter-area-chart) <br> - [Scatter Contour Chart](../types/scatter-chart.md#angular-scatter-contour-chart) <br> - [Scatter Polyline Chart](../types/shape-chart.md#angular-scatter-polyline-chart) (\*) <br> - [Scatter Polygon Chart](../types/shape-chart.md#angular-scatter-polygon-chart) (\*) <br>                                                                                                                              |
| Radial Charts    | - [Radial Line Chart](../types/radial-chart.md#angular-radial-line-chart) <br> - [Radial Area Chart](../types/radial-chart.md#angular-radial-area-chart) <br> - [Radial Pie Chart](../types/radial-chart.md#angular-radial-pie-chart) <br> - [Radial Column Chart](../types/radial-chart.md#angular-radial-column-chart) <br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Polar Charts     | - [Polar Marker Chart](../types/polar-chart.md#angular-polar-marker-chart) <br> - [Polar Line Chart](../types/polar-chart.md#angular-polar-line-chart) <br> - [Polar Area Chart](../types/polar-chart.md#angular-polar-area-chart) <br> - [Polar Spline Chart](../types/polar-chart.md#angular-polar-spline-chart) <br> - [Polar Spline Area Chart](../types/polar-chart.md#angular-polar-spline-area-chart) <br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Stacked Charts   | - [Stacked Line Chart](../types/stacked-chart.md#angular-stacked-line-chart) <br> - [Stacked Area Chart](../types/stacked-chart.md#angular-stacked-area-chart) <br> - [Stacked Column Chart](../types/stacked-chart.md#angular-stacked-column-chart) <br> - [Stacked Bar Chart](../types/stacked-chart.md#angular-stacked-bar-chart) <br> - [Stacked Spline Chart](../types/stacked-chart.md#angular-stacked-spline-chart) <br> - [Stacked 100% Line Chart](../types/stacked-chart.md#angular-stacked-100-line-chart) <br> - [Stacked 100% Area Chart](../types/stacked-chart.md#angular-stacked-100-area-chart) <br> - [Stacked 100% Column Chart](../types/stacked-chart.md#angular-stacked-100-column-chart) <br> - [Stacked 100% Bar Chart](../types/stacked-chart.md#angular-stacked-100-bar-chart) <br> - [Stacked 100% Spline Chart](../types/stacked-chart.md#angular-stacked-100-spline-chart) <br> |

\* Note that the [Scatter Polygon Chart](../types/shape-chart.md) and [Scatter Polyline Chart](../types/shape-chart.md) have better performance than rest of charts if you have a lot of data sources bound to the chart. For more info, see [Series Collection](#series-collection) section. Otherwise, other chart types are faster.

### Chart Animations

Enabling [Chart Animations](chart-animations.md) will slightly delay final rendering series in the Angular charts while they play transition-in animations.

### Chart Annotations

Enabling [Chart Annotations](chart-annotations.md) such as the Callout Annotations, Crosshairs Annotations, or Final Value Annotations, will slightly decrease performance of the Angular chart.

### Chart Highlighting

Enabling the [Chart Highlighting](chart-highlighting.md) will slightly decrease performance of the Angular chart.

### Chart Legend

Adding a legend to the Angular charts might decrease performance if titles of series or data items mapped to legend are changing often at runtime.

### Chart Markers

In Angular charts, [Markers](chart-markers.md) are especially expensive when it comes to chart performance because they add to the layout complexity of the chart, and perform data binding to obtain certain information. Also, markers decrease performance when there are a lot of data points or if there are many data sources bound. Therefore, if markers are not needed, they should be removed from the chart.

This code snippet shows how to remove markers from the Angular charts.

<!-- Angular, React, WebComponents -->

```ts
// on CategoryChart or FinancialChart
this.Chart.markerTypes.clear();
this.Chart.markerTypes.add(MarkerType.None);

// on LineSeries of DataChart
this.LineSeries.markerType = MarkerType.None;
```

### Chart Resolution

Setting the [`resolution`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#resolution) property to a higher value will improve performance, but it will lower the graphical fidelity of lines of plotted series. As such, it can be increased up until the fidelity is unacceptable.

This code snippet shows how to decrease resolution in the Angular charts.

<!-- Angular, React, WebComponents -->

```ts
// on CategoryChart or FinancialChart:
this.Chart.Resolution = 10;

// on LineSeries of DataChart:
this.LineSeries.Resolution = 10;
```

### Chart Overlays

Enabling [Chart Overlays](chart-overlays.md) will slightly decrease performance of the Angular chart.

### Chart Trendlines

Enabling [Chart Trendlines](chart-trendlines.md) will slightly decrease performance of the Angular chart.

### Axis Types

Usage of x-axis with DateTime support is not recommended if spaces between data points, based on the amount of time span between them, are not important. Instead, ordinal/category axis should be used because it is more efficient in the way it coalesces data. Also, ordinal/category axis doesn’t perform any sorting on the data like the time-based x-axis does.

> [!Note]
> The [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) already uses ordinal/category axis so there is no need to change its properties.

This code snippet shows how to ordinal/category x-axis in the [`IgxFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) and [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) controls.

```html
<igx-financial-chart xAxisMode="Ordinal"></igx-financial-chart>

<igx-data-chart>
  <igx-category-x-axis label="Time"></igx-category-x-axis>
</igx-data-chart>
```

### Axis Intervals

By default, Angular charts will automatically calculate [`yAxisInterval`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#yAxisInterval) based on range of your data. Therefore, you should avoid setting axis interval especially to a small value to prevent rendering of too many of axis gridlines and axis labels. Also, you might want to consider increasing [`yAxisInterval`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#yAxisInterval) property to a larger value than the automatically calculated axis interval if you do not need many axis gridlines or axis labels.

> [!Note]
> We do not recommend setting axis minor interval as it will decrease chart performance.

This code snippet shows how to set axis major interval in the Angular charts.

```html
<igx-category-chart xAxisInterval="5" yAxisInterval="50"></igx-category-chart>

<igx-financial-chart xAxisInterval="5" yAxisInterval="50"></igx-financial-chart>

<igx-data-chart>
  <igx-category-x-axis name="xAxis" interval="5"></igx-category-x-axis>
  <igx-numeric-y-axis name="yAxis" interval="50"></igx-numeric-y-axis>
</igx-data-chart>
```

### Axis Scale

Setting the [`yAxisIsLogarithmic`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#yAxisIsLogarithmic) property to false is recommended for higher performance, as fewer operations are needed than calculating axis range and values of axis labels in logarithmic scale.

### Axis Labels Visibility

In the same way as Markers, axis labels are also expensive because they use templates and bindings, and may have their data context changed often. If labels are not used, they should be hidden or their interval should be increased to decrease number of axis labels.

This code snippet shows how to hide axis labels in the Angular charts.

```html
<igx-category-chart
  xAxisLabelVisibility="Collapsed"
  yAxisLabelVisibility="Collapsed"
>
</igx-category-chart>

<igx-financial-chart
  xAxisLabelVisibility="Collapsed"
  yAxisLabelVisibility="Collapsed"
>
</igx-financial-chart>

<igx-data-chart>
  <igx-category-x-axis
    name="xAxis"
    labelVisibility="Collapsed"
  ></igx-category-x-axis>
  <igx-numeric-y-axis
    name="yAxis"
    labelVisibility="Collapsed"
  ></igx-numeric-y-axis>
</igx-data-chart>
```

### Axis Labels Abbreviation

Although, the Angular charts support abbreviation of large numbers (e.g. 10,000+) displayed in axis labels when [`yAxisAbbreviateLargeNumbers`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#yAxisAbbreviateLargeNumbers) is set to true. We recommend, instead pre-processing large values in your data items by dividing them a common factor and then setting [`yAxisTitle`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisTitle) to a string that represents factor used used to abbreviate your data values.

This code snippet shows how to set axis title in the Angular charts.

```html
<igx-category-chart yAxisTitle="In millions of Dollars"></igx-category-chart>

<igx-financial-chart yAxisTitle="In millions of Dollars"></igx-financial-chart>

<igx-data-chart>
  <igx-numeric-y-axis title="In millions of Dollars"></igx-numeric-y-axis>
</igx-data-chart>
```

### Axis Labels Extent

At runtime, the Angular charts adjust extent of labels on y-axis based on a label with longest value. This might decrease chart performance if range of data changes and labels need to be updated often. Therefore, it is recommended to set label extent at design time in order to improve chart performance.

The following code snippet shows how to set a fixed extent for labels on y-axis in the Angular charts.

```html
<igx-category-chart
  xAxisLabelExtent="50"
  yAxisLabelExtent="50"
></igx-category-chart>

<igx-financial-chart
  xAxisLabelExtent="50"
  yAxisLabelExtent="50"
></igx-financial-chart>

<igx-data-chart>
  <igx-category-x-axis name="xAxis" labelExtent="50"></igx-category-x-axis>
  <igx-numeric-y-axis name="yAxis" labelExtent="50"></igx-numeric-y-axis>
</igx-data-chart>
```

### Axis Other Visuals

Enabling additional axis visuals (e.g. axis titles) or changing their default values might decrease performance in the Angular charts.

For example, changing these properties on the [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) or [`IgxFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) control:

| Axis Visual          | X-Axis Properties                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Y-Axis Properties                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| All Axis Visual      | [`xAxisInterval`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#xAxisInterval)<br> [`xAxisMinorInterval`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#xAxisMinorInterval)                                                                                                                                                                                             | [`yAxisInterval`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html#yAxisInterval)<br> [`yAxisMinorInterval`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html#yAxisMinorInterval)                                                                                                                                                                                           |
| Axis Tickmarks       | [`xAxisTickStroke`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisTickStroke) <br> [`xAxisTickStrokeThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisTickStrokeThickness)<br> [`xAxisTickLength`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisTickLength)<br> | [`yAxisTickStroke`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisTickStroke) <br> [`yAxisTickStrokeThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisTickStrokeThickness)<br> [`yAxisTickLength`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisTickLength)<br> |
| Axis Major Gridlines | [`xAxisMajorStroke`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisMajorStroke)<br> [`xAxisMajorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisMajorStrokeThickness)<br>                                                                                                                                                                                 | [`yAxisMajorStroke`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisMajorStroke)<br> [`yAxisMajorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisMajorStrokeThickness)<br>                                                                                                                                                                                 |
| Axis Minor Gridlines | [`xAxisMinorStroke`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisMinorStroke)<br> [`xAxisMinorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisMinorStrokeThickness)<br>                                                                                                                                                                                 | [`yAxisMinorStroke`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisMinorStroke)<br> [`yAxisMinorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisMinorStrokeThickness)<br>                                                                                                                                                                                 |
| Axis Main Line       | [`xAxisStroke`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisStroke)<br> [`xAxisStrokeThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisStrokeThickness)<br>                                                                                                                                                                                                     | [`yAxisStroke`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisStroke)<br> [`yAxisStrokeThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisStrokeThickness)<br>                                                                                                                                                                                                     |
| Axis Titles          | [`xAxisTitle`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisTitle)<br> [`xAxisTitleAngle`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisTitleAngle)<br>                                                                                                                                                                                                                 | [`yAxisTitle`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisTitle)<br> [`yAxisTitleAngle`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisTitleAngle)<br>                                                                                                                                                                                                                 |
| Axis Strips          | [`xAxisStrip`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisStrip)<br>                                                                                                                                                                                                                                                                                                                                                                                                    | [`yAxisStrip`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisStrip)<br>                                                                                                                                                                                                                                                                                                                                                                                                    |

Or changing properties of an [`IgxAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html) in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control:

| Axis Visual          | Axis Properties                                                                                                                                                                        |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| All Axis Visuals     | `Interval`, `MinorInterval`                                                                                                                                                            |
| Axis Tickmarks       | `TickStroke` , `TickStrokeThickness`, `TickLength`                                                                                                                                     |
| Axis Major Gridlines | `MajorStroke`, `MajorStrokeThickness`                                                                                                                                                  |
| Axis Minor Gridlines | `MinorStroke`, `MinorStrokeThickness`                                                                                                                                                  |
| Axis Main Line       | `Stroke`, `StrokeThickness`                                                                                                                                                            |
| Axis Titles          | [`chartTitle`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#chartTitle), `TitleAngle` |
| Axis Strips          | `Strip`                                                                                                                                                                                |

## Performance in Financial Chart

In addition to above performance guidelines, the Angular [`IgxFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) control has the following unique features that affect performance.

### Y-Axis Mode

Setting the [`yAxisMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html#yAxisMode) option to `Numeric` is recommended for higher performance, as fewer operations are needed than using `PercentChange` mode.

### Chart Panes

Setting a lot of panes using [`indicatorTypes`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html#indicatorTypes) and [`overlayTypes`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html#overlayTypes) options, might decrease performance and it is recommended to use a few financial indicators and one financial overlay.

### Zoom Slider

Setting the [`zoomSliderType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html#zoomSliderType) option to [`None`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.financialchartvolumetype.html#None) will improve chart performance and enable more vertical space for other indicators and the volume pane.

### Volume Type

Setting the [`volumeType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html#volumeType) property can have the following impact on chart performance:

- [`None`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.financialchartvolumetype.html#None) - is the least expensive since it does not display the volume pane.
- [`Line`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.financialchartvolumetype.html#Line) - is more expensive volume type to render and it is recommended when rendering a lot of data points or when plotting a lot of data sources.
- [`Area`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.financialchartvolumetype.html#Area) - is more expensive to render than the [`Line`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.financialchartvolumetype.html#Line) volume type.
- [`Column`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.financialchartvolumetype.html#Column) - is more expensive to render than the [`Area`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.financialchartvolumetype.html#Area) volume type and it is recommended when rendering volume data of 1-3 stocks.

## Performance in Data Chart

In addition to the general performance guidelines, the Angular [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control has the following unique features that affect performance.

### Axes Collection

Adding too many axis to the `Axes` collection of the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control will decrease chart performance and we recommend [Sharing Axes](chart-axis-layouts.md#axis-sharing-example) between series.

### Series Collection

Also, adding a lot of series to the [`IgxSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html) collection of the Angular [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control will add overhead to rendering because each series has its own rendering canvas. This is especially important if you have more than 10 series in the Data Chart. We recommend combining multiple data sources into flatten data source (see [Data Structure](#data-structure) section) and then using conditional styling feature of the following series:

| Slower Performance Scenario                                                                                                                                                                   | Faster Scenario with Conditional Styling                                                                                                                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 10+ of [`IgxLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxlineseriescomponent.html)               | Single [`IgxScatterLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterlineseriescomponent.html)               |
| 20+ of [`IgxLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxlineseriescomponent.html)               | Single [`IgxScatterPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterpolylineseriescomponent.html)       |
| 10+ of [`IgxScatterLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterlineseriescomponent.html) | Single [`IgxScatterPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterpolylineseriescomponent.html)       |
| 10+ of [`IgxPointSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpointseriescomponent.html)             | Single [`IgxScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterseriescomponent.html)                       |
| 20+ of [`IgxPointSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpointseriescomponent.html)             | Single [`IgxHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxhighdensityscatterseriescomponent.html) |
| 20+ of [`IgxScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterseriescomponent.html)         | Single [`IgxHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxhighdensityscatterseriescomponent.html) |
| 10+ of [`IgxAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxareaseriescomponent.html)               | Single [`IgxScatterPolygonSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterpolygonseriescomponent.html)         |
| 10+ of [`IgxColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcolumnseriescomponent.html)           | Single [`IgxScatterPolygonSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterpolygonseriescomponent.html)         |

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](../types/area-chart.md)
- [Bar Chart](../types/bar-chart.md)
- [Bubble Chart](../types/bubble-chart.md)
- [Column Chart](../types/column-chart.md)
- [Donut Chart](../types/donut-chart.md)
- [Pie Chart](../types/pie-chart.md)
- [Point Chart](../types/point-chart.md)
- [Polar Chart](../types/polar-chart.md)
- [Radial Chart](../types/radial-chart.md)
- [Shape Chart](../types/shape-chart.md)
- [Spline Chart](../types/spline-chart.md)
- [Scatter Chart](../types/scatter-chart.md)
- [Stacked Chart](../types/stacked-chart.md)
- [Step Chart](../types/shape-chart.md)
- [Stock Chart](../types/stock-chart.md)
- [Chart Animations](chart-animations.md)
- [Chart Annotations](chart-annotations.md)
- [Chart Highlighting](chart-highlighting.md)
- [Chart Markers](chart-markers.md)
- [Chart Overlays](chart-overlays.md)
- [Chart Trendlines](chart-trendlines.md)

## API References

The following table lists API members mentioned in above sections:

- [`resolution`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#resolution)
- [`indicatorTypes`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html#indicatorTypes)
- [`overlayTypes`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html#overlayTypes)
- [`volumeType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html#volumeType)
- [`zoomSliderType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html#zoomSliderType)
- [`xAxisMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html#xAxisMode)
- [`yAxisMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html#yAxisMode)
- [`xAxisInterval`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#xAxisInterval)
- [`yAxisInterval`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#yAxisInterval)
- [`xAxisMinorInterval`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#xAxisMinorInterval)
- [`yAxisMinorInterval`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#yAxisMinorInterval)
- [`xAxisLabelVisibility`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisLabelVisibility)
- [`yAxisLabelVisibility`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisLabelVisibility)
- [`yAxisIsLogarithmic`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#yAxisIsLogarithmic)
