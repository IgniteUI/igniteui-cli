---
title: Angular Line Chart and Graph | Ignite UI for Angular
_description: The Angular Line chart is capable of handling high volumes of data, ranging into millions of data points, and updating them every few milliseconds. Try for FREE.
_keywords: Angular Charts, Line Chart, Line Graph, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "XamDataChart", "Legend", "PolarLineSeries", "RadialLineSeries", "StackedLineSeries", "Stacked100LineSeries", "Series", "CategoryChartType"]
namespace: Infragistics.Controls.Charts
_tocName: Line Chart
_premium: true
---

# Angular Line Chart

The Ignite UI for Angular Line Chart or Line Graph is a type of category charts that show the continuous data values represented by points connected by straight line segments of one or more quantities over a period of time. It’s often used to show trends and perform comparative analysis. The Y-Axis (labels on left side) show a numeric value, while the X-Axis (bottom labels) show a time-series or comparison category. You can include one or more data sets to compare, which would render as multiple lines in the chart.

## Angular Line Chart Example

You can create the Angular Line Chart in the [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) control by binding your data to `ItemsSource` property and setting [`chartType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#chartType) property to [`Line`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.categorycharttype.html#Line) enum, as shown in the example below.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxLegendModule, IgxCategoryChartModule } from 'igniteui-angular-charts';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxLegendModule,
    IgxCategoryChartModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';
import { IgxLegendComponent, IgxCategoryChartComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("legend", { static: true } )
	private legend: IgxLegendComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxCategoryChartComponent
    private _countryRenewableElectricity: CountryRenewableElectricity = null;
    public get countryRenewableElectricity(): CountryRenewableElectricity {
        if (this._countryRenewableElectricity == null)
        {
            this._countryRenewableElectricity = new CountryRenewableElectricity();
        }
        return this._countryRenewableElectricity;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}
```
```html
<div class="container vertical sample">
  <div class="legend-title">
      Renewable Electricity Generated
  </div>
  <div class="legend">
      <igx-legend
      name="legend"
      #legend
      orientation="Horizontal">
      </igx-legend>
  </div>
  <div class="container fill">
      <igx-category-chart
      name="chart"
      #chart
      chartType="Line"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false"
      [dataSource]="countryRenewableElectricity"
      includedProperties="year, europe, china, america"
      [legend]="legend"
      yAxisTitle="TWh"
      yAxisTitleLeftMargin="10"
      yAxisTitleRightMargin="5"
      yAxisLabelLeftMargin="0"
      computedPlotAreaMarginMode="Series">
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

## Line Chart Recommendations

### Are Angular Line Charts right for your project?

- Different than an [area chart](area-chart.md), the line chart does not fill the area between the X-Axis (bottom axis) and the line.
- The Angular line chart is identical to the Angular [spline chart](spline-chart.md) in all aspects except that the line connecting data points does not have spline interpolation and smoothing for improved presentation of data.

A Line Chart includes several variants based on your data or how you want to tell the correct story with your data. These include:

- Layered Line Chart
- Stacked Line Chart
- Stepped Line Chart
- Polar Line Chart
- Stacked 100 Line Chart

### Line Chart Use Cases

There are several common use cases for choosing a Line Chart:

- Have a large, high-volume data set that fits well with the chart interactions like Panning, Zooming and Drill-down.
- Need to compare the trends over time.
- Want to show the difference between 2 or more data series.
- Want to show cumulative part-to-whole comparisons of distinct categories.
- Need to show data trends for one or more categories for comparative analysis.
- Need to visualize detailed time-series data.

### Line Chart Best Practices

- Always start the Y-Axis (left or right axis) at 0 so data comparison is accurate.
- Order time-series data from left to right.
- Use visual attributes like solid lines to show a series of data.

### When Not to Use Line Chart

- You have many (more than 7 or 10) series of data. Your goal is to ensure the chart is readable.
- Time-series data has similar values (data over the same period), it makes overlapped lines impossible to differentiate.

### Line Chart Data Structure

- The data source must be an array or a list of data items (for single series).
- The data source must be an array of arrays or a list of lists (for multiple series).
- The data source must contain at least one data item.
- All data items must contain at least one data column (string or date time).
- All data items must contain at least one numeric data column.

## Angular Line Chart with Single Series

The Angular Line Chart is often used to show the change of value over time such as the amount of renewable electricity produced since 2009 over a ten-year period, as we have shown in the example below.

You can create this type of chart in the [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) control by binding your data and setting the [`chartType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#chartType) property to [`Line`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.categorycharttype.html#Line), as shown in the example below:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxCategoryChartModule } from 'igniteui-angular-charts';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxCategoryChartModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';
import { IgxCategoryChartComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("chart", { static: true } )
	private chart: IgxCategoryChartComponent
    private _countryRenewableElectricity: CountryRenewableElectricity = null;
    public get countryRenewableElectricity(): CountryRenewableElectricity {
        if (this._countryRenewableElectricity == null)
        {
            this._countryRenewableElectricity = new CountryRenewableElectricity();
        }
        return this._countryRenewableElectricity;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}
```
```html
<div class="container vertical sample">
  <div class="legend-title">
      Renewable Electricity Generated
  </div>
  <div class="container fill">
      <igx-category-chart
      name="chart"
      #chart
      chartType="Line"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false"
      [dataSource]="countryRenewableElectricity"
      includedProperties="year, europe"
      yAxisTitle="TWh"
      yAxisTitleLeftMargin="10"
      yAxisTitleRightMargin="5"
      yAxisLabelLeftMargin="0"
      computedPlotAreaMarginMode="Series">
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

## Angular Line Chart with Multiple Series

Since the Angular Line Chart allows you to combine multiple series and compare or see how they change over time, let’s see how easy it is to achieve this. All we need to do is bind to a data source containing the data for China and the USA, and the line chart will automatically update to fit the additional data.

You can create this type of chart in the [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) control by binding your data and setting the [`chartType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#chartType) property to [`Line`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.categorycharttype.html#Line), as shown in the example below:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxLegendModule, IgxCategoryChartModule } from 'igniteui-angular-charts';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxLegendModule,
    IgxCategoryChartModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';
import { IgxLegendComponent, IgxCategoryChartComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("legend", { static: true } )
	private legend: IgxLegendComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxCategoryChartComponent
    private _countryRenewableElectricity: CountryRenewableElectricity = null;
    public get countryRenewableElectricity(): CountryRenewableElectricity {
        if (this._countryRenewableElectricity == null)
        {
            this._countryRenewableElectricity = new CountryRenewableElectricity();
        }
        return this._countryRenewableElectricity;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}
```
```html
<div class="container vertical sample">
  <div class="legend-title">
      Renewable Electricity Generated
  </div>
  <div class="legend">
      <igx-legend
      name="legend"
      #legend
      orientation="Horizontal">
      </igx-legend>
  </div>
  <div class="container fill">
      <igx-category-chart
      name="chart"
      #chart
      chartType="Line"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false"
      [dataSource]="countryRenewableElectricity"
      includedProperties="year, europe, china, america"
      [legend]="legend"
      yAxisTitle="TWh"
      yAxisTitleLeftMargin="10"
      yAxisTitleRightMargin="5"
      yAxisLabelLeftMargin="0"
      computedPlotAreaMarginMode="Series">
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

## Angular Line Chart with Live Data

The Angular Line chart is capable of handling high volumes of data, ranging into millions of data points, and updating them every few milliseconds as demonstrated in the following demo.

In this example, we are streaming live data into the Angular Line Chart at an interval of your choosing. You can set the data points from 5,000 to 1 million and update the chart to optimize the scale based on the device you are rendering the chart on.

You can create this type of chart in the [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) control by binding your data and setting the [`chartType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#chartType) property to [`Line`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.categorycharttype.html#Line), as shown in the example below:

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

## Angular Styling Line Chart

Once our chart is set up, we may want to make some further styling customizations such as change the line colors, change the legend font family, and/or increase the size of the axis labels to make it easier to read.

You can create this type of chart in the [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) control by binding your data and setting the [`chartType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#chartType) property to [`Line`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.categorycharttype.html#Line), as shown in the example below:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxLegendModule, IgxCategoryChartModule } from 'igniteui-angular-charts';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxLegendModule,
    IgxCategoryChartModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';
import { IgxLegendComponent, IgxCategoryChartComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("legend", { static: true } )
	private legend: IgxLegendComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxCategoryChartComponent
    private _countryRenewableElectricity: CountryRenewableElectricity = null;
    public get countryRenewableElectricity(): CountryRenewableElectricity {
        if (this._countryRenewableElectricity == null)
        {
            this._countryRenewableElectricity = new CountryRenewableElectricity();
        }
        return this._countryRenewableElectricity;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}
```
```html
<div class="container vertical sample">
  <div class="legend-title">
      Renewable Electricity Generated
  </div>
  <div class="legend">
      <igx-legend
      name="legend"
      #legend
      orientation="Horizontal">
      </igx-legend>
  </div>
  <div class="container fill">
      <igx-category-chart
      name="chart"
      #chart
      [dataSource]="countryRenewableElectricity"
      chartType="Line"
      [legend]="legend"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false"
      markerBrushes="rgba(238, 88, 121, 1) rgba(196, 196, 196, 1) rgba(154, 242, 228, 1)"
      markerOutlines="white"
      brushes="rgba(238, 88, 121, 1) rgba(196, 196, 196, 1) rgba(154, 242, 228, 1)"
      outlines="rgba(238, 88, 121, 1) rgba(196, 196, 196, 1) rgba(154, 242, 228, 1)"
      yAxisTitle="TWh"
      yAxisTitleLeftMargin="10"
      yAxisLabelLeftMargin="0"
      thickness="2"
      computedPlotAreaMarginMode="Series">
      </igx-category-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

You can also create a dashed line within the [`IgxLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxlineseriescomponent.html) by using the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) and setting the [`dashArray`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#dashArray) property on the series. This property takes an array of numbers that will describe the length of the resulting dashes in the line.

The following example demonstrates usage of the [`dashArray`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#dashArray) in a [`IgxLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxlineseriescomponent.html) in [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html):

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxLegendModule, IgxDataChartCategoryModule, IgxDataChartInteractivityModule } from 'igniteui-angular-charts';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxLegendModule,
    IgxDataChartCategoryModule,
    IgxDataChartInteractivityModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';
import { IgxLegendComponent, IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxLineSeriesComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("legend", { static: true } )
	private legend: IgxLegendComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxDataChartComponent
	@ViewChild("xAxis", { static: true } )
	private xAxis: IgxCategoryXAxisComponent
	@ViewChild("yAxis", { static: true } )
	private yAxis: IgxNumericYAxisComponent
	@ViewChild("lineSeries1", { static: true } )
	private lineSeries1: IgxLineSeriesComponent
	@ViewChild("lineSeries2", { static: true } )
	private lineSeries2: IgxLineSeriesComponent
	@ViewChild("lineSeries3", { static: true } )
	private lineSeries3: IgxLineSeriesComponent
    private _countryRenewableElectricity: CountryRenewableElectricity = null;
    public get countryRenewableElectricity(): CountryRenewableElectricity {
        if (this._countryRenewableElectricity == null)
        {
            this._countryRenewableElectricity = new CountryRenewableElectricity();
        }
        return this._countryRenewableElectricity;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}
```
```html
<div class="container vertical sample">
  <div class="legend-title">
      Renewable Electricity Generated
  </div>
  <div class="legend">
      <igx-legend
      name="Legend"
      #legend
      orientation="Horizontal">
      </igx-legend>
  </div>
  <div class="container fill">
      <igx-data-chart
      name="chart"
      #chart
      computedPlotAreaMarginMode="Series"
      [legend]="legend">
          <igx-category-x-axis
          name="xAxis"
          #xAxis
          [dataSource]="countryRenewableElectricity"
          label="year">
          </igx-category-x-axis>
          <igx-numeric-y-axis
          name="yAxis"
          #yAxis>
          </igx-numeric-y-axis>
          <igx-line-series
          name="LineSeries1"
          #lineSeries1
          title="Europe"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          markerType="Circle"
          [dataSource]="countryRenewableElectricity"
          valueMemberPath="europe"
          showDefaultTooltip="true"
          dashArray="2, 2">
          </igx-line-series>
          <igx-line-series
          name="LineSeries2"
          #lineSeries2
          title="China"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          markerType="Circle"
          [dataSource]="countryRenewableElectricity"
          valueMemberPath="china"
          showDefaultTooltip="true"
          dashArray="5, 5">
          </igx-line-series>
          <igx-line-series
          name="LineSeries3"
          #lineSeries3
          title="America"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          markerType="Circle"
          [dataSource]="countryRenewableElectricity"
          valueMemberPath="america"
          showDefaultTooltip="true"
          dashArray="10, 10">
          </igx-line-series>
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

## Advanced Types of Line Charts

The following sections explain more advanced types of Angular Line Charts that can be created using the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control instead of [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) control with simplified API.

## Angular Stacked Line Chart

The Stacked Line Chart is often used to show the change of value over time such as the amount of renewable electricity produced for several years between regions. You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxStackedLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedlineseriescomponent.html), as shown in the example below:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxLegendModule, IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartCategoryCoreModule, IgxDataChartInteractivityModule, IgxDataChartAnnotationModule, IgxDataChartStackedModule, IgxStackedFragmentSeriesModule } from 'igniteui-angular-charts';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxLegendModule,
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxDataChartCategoryCoreModule,
    IgxDataChartInteractivityModule,
    IgxDataChartAnnotationModule,
    IgxDataChartStackedModule,
    IgxStackedFragmentSeriesModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ContinentsBirthRateItem, ContinentsBirthRate } from './ContinentsBirthRate';
import { IgxLegendComponent, IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxStackedLineSeriesComponent, IgxStackedFragmentSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("legend", { static: true } )
	private legend: IgxLegendComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxDataChartComponent
	@ViewChild("xAxis", { static: true } )
	private xAxis: IgxCategoryXAxisComponent
	@ViewChild("yAxis", { static: true } )
	private yAxis: IgxNumericYAxisComponent
	@ViewChild("stackedLineSeries", { static: true } )
	private stackedLineSeries: IgxStackedLineSeriesComponent
	@ViewChild("s1", { static: true } )
	private s1: IgxStackedFragmentSeriesComponent
	@ViewChild("s2", { static: true } )
	private s2: IgxStackedFragmentSeriesComponent
	@ViewChild("s3", { static: true } )
	private s3: IgxStackedFragmentSeriesComponent
	@ViewChild("s4", { static: true } )
	private s4: IgxStackedFragmentSeriesComponent
	@ViewChild("s5", { static: true } )
	private s5: IgxStackedFragmentSeriesComponent
	@ViewChild("dataToolTipLayer", { static: true } )
	private dataToolTipLayer: IgxDataToolTipLayerComponent
    private _continentsBirthRate: ContinentsBirthRate = null;
    public get continentsBirthRate(): ContinentsBirthRate {
        if (this._continentsBirthRate == null)
        {
            this._continentsBirthRate = new ContinentsBirthRate();
        }
        return this._continentsBirthRate;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}
```
```html
<div class="container vertical sample">
  <div class="legend-title">
      Annual Birth Rates by World Region
  </div>
  <div class="legend">
      <igx-legend
      name="legend"
      #legend
      orientation="Horizontal">
      </igx-legend>
  </div>
  <div class="container fill">
      <igx-data-chart
      name="chart"
      #chart
      [legend]="legend"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false">
          <igx-category-x-axis
          name="xAxis"
          #xAxis
          [dataSource]="continentsBirthRate"
          label="Year"
          gap="0.75">
          </igx-category-x-axis>
          <igx-numeric-y-axis
          name="yAxis"
          #yAxis
          minimumValue="0"
          maximumValue="140"
          interval="20"
          title="Millions of Births"
          titleAngle="-90"
          labelFormat="{0} m">
          </igx-numeric-y-axis>
          <igx-stacked-line-series
          name="stackedLineSeries"
          #stackedLineSeries
          [dataSource]="continentsBirthRate"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          showDefaultTooltip="false"
          markerType="Circle">
              <igx-stacked-fragment-series
              name="s1"
              #s1
              valueMemberPath="Asia"
              title="Asia">
              </igx-stacked-fragment-series>
              <igx-stacked-fragment-series
              name="s2"
              #s2
              valueMemberPath="Africa"
              title="Africa">
              </igx-stacked-fragment-series>
              <igx-stacked-fragment-series
              name="s3"
              #s3
              valueMemberPath="Europe"
              title="Europe">
              </igx-stacked-fragment-series>
              <igx-stacked-fragment-series
              name="s4"
              #s4
              valueMemberPath="NorthAmerica"
              title="North America">
              </igx-stacked-fragment-series>
              <igx-stacked-fragment-series
              name="s5"
              #s5
              valueMemberPath="SouthAmerica"
              title="South America">
              </igx-stacked-fragment-series>
          </igx-stacked-line-series>
          <igx-data-tool-tip-layer
          name="dataToolTipLayer"
          #dataToolTipLayer>
          </igx-data-tool-tip-layer>
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

## Angular Stacked 100% Line Chart

The Stacked 100% Line Chart is identical to the Stacked Line Chart in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the Stacked 100% Line Chart presents the data in terms of percent of the sum of all values in a data point. The example below shows a study made for online shopping traffic by departments via tablet, phone and personal computers.

You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxStacked100LineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100lineseriescomponent.html), as shown in the example below:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxLegendModule, IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartCategoryCoreModule, IgxDataChartInteractivityModule, IgxDataChartAnnotationModule, IgxDataChartStackedModule, IgxStackedFragmentSeriesModule } from 'igniteui-angular-charts';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxLegendModule,
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxDataChartCategoryCoreModule,
    IgxDataChartInteractivityModule,
    IgxDataChartAnnotationModule,
    IgxDataChartStackedModule,
    IgxStackedFragmentSeriesModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ContinentsBirthRateItem, ContinentsBirthRate } from './ContinentsBirthRate';
import { IgxLegendComponent, IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxStacked100LineSeriesComponent, IgxStackedFragmentSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("legend", { static: true } )
	private legend: IgxLegendComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxDataChartComponent
	@ViewChild("xAxis", { static: true } )
	private xAxis: IgxCategoryXAxisComponent
	@ViewChild("yAxis", { static: true } )
	private yAxis: IgxNumericYAxisComponent
	@ViewChild("stacked100LineSeries", { static: true } )
	private stacked100LineSeries: IgxStacked100LineSeriesComponent
	@ViewChild("s1", { static: true } )
	private s1: IgxStackedFragmentSeriesComponent
	@ViewChild("s2", { static: true } )
	private s2: IgxStackedFragmentSeriesComponent
	@ViewChild("s3", { static: true } )
	private s3: IgxStackedFragmentSeriesComponent
	@ViewChild("s4", { static: true } )
	private s4: IgxStackedFragmentSeriesComponent
	@ViewChild("s5", { static: true } )
	private s5: IgxStackedFragmentSeriesComponent
	@ViewChild("dataToolTipLayer", { static: true } )
	private dataToolTipLayer: IgxDataToolTipLayerComponent
    private _continentsBirthRate: ContinentsBirthRate = null;
    public get continentsBirthRate(): ContinentsBirthRate {
        if (this._continentsBirthRate == null)
        {
            this._continentsBirthRate = new ContinentsBirthRate();
        }
        return this._continentsBirthRate;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}
```
```html
<div class="container vertical sample">
  <div class="legend-title">
      Annual Birth Rates by World Region
  </div>
  <div class="legend">
      <igx-legend
      name="legend"
      #legend
      orientation="Horizontal">
      </igx-legend>
  </div>
  <div class="container fill">
      <igx-data-chart
      name="chart"
      #chart
      [legend]="legend"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false">
          <igx-category-x-axis
          name="xAxis"
          #xAxis
          [dataSource]="continentsBirthRate"
          label="Year">
          </igx-category-x-axis>
          <igx-numeric-y-axis
          name="yAxis"
          #yAxis
          interval="20"
          titleLeftMargin="10"
          labelFormat="{0}%">
          </igx-numeric-y-axis>
          <igx-stacked-100-line-series
          name="stacked100LineSeries"
          #stacked100LineSeries
          [dataSource]="continentsBirthRate"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          showDefaultTooltip="false"
          markerType="Circle">
              <igx-stacked-fragment-series
              name="s1"
              #s1
              valueMemberPath="Asia"
              title="Asia">
              </igx-stacked-fragment-series>
              <igx-stacked-fragment-series
              name="s2"
              #s2
              valueMemberPath="Africa"
              title="Africa">
              </igx-stacked-fragment-series>
              <igx-stacked-fragment-series
              name="s3"
              #s3
              valueMemberPath="Europe"
              title="Europe">
              </igx-stacked-fragment-series>
              <igx-stacked-fragment-series
              name="s4"
              #s4
              valueMemberPath="NorthAmerica"
              title="North America">
              </igx-stacked-fragment-series>
              <igx-stacked-fragment-series
              name="s5"
              #s5
              valueMemberPath="SouthAmerica"
              title="South America">
              </igx-stacked-fragment-series>
          </igx-stacked-100-line-series>
          <igx-data-tool-tip-layer
          name="dataToolTipLayer"
          #dataToolTipLayer>
          </igx-data-tool-tip-layer>
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

## Angular Radial Line Chart

The Radial Line Chart belongs to a group of radial charts and has a shape of an unfilled polygon that is bound by a collection of straight lines connecting data points. This chart type uses the same concept of data plotting as the Line Chart, but wraps the data points around a circular axis rather than stretching them horizontally.

You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxRadialLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxradiallineseriescomponent.html), as shown in the example below:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxLegendModule, IgxDataChartCoreModule, IgxDataChartRadialModule, IgxDataChartRadialCoreModule, IgxDataChartInteractivityModule, IgxDataChartAnnotationModule } from 'igniteui-angular-charts';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxLegendModule,
    IgxDataChartCoreModule,
    IgxDataChartRadialModule,
    IgxDataChartRadialCoreModule,
    IgxDataChartInteractivityModule,
    IgxDataChartAnnotationModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FootballPlayerStatsItem, FootballPlayerStats } from './FootballPlayerStats';
import { IgxLegendComponent, IgxDataChartComponent, IgxCategoryAngleAxisComponent, IgxNumericRadiusAxisComponent, IgxRadialLineSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("legend", { static: true } )
	private legend: IgxLegendComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxDataChartComponent
	@ViewChild("angleAxis", { static: true } )
	private angleAxis: IgxCategoryAngleAxisComponent
	@ViewChild("radiusAxis", { static: true } )
	private radiusAxis: IgxNumericRadiusAxisComponent
	@ViewChild("radialLineSeries1", { static: true } )
	private radialLineSeries1: IgxRadialLineSeriesComponent
	@ViewChild("radialLineSeries2", { static: true } )
	private radialLineSeries2: IgxRadialLineSeriesComponent
	@ViewChild("dataToolTipLayer", { static: true } )
	private dataToolTipLayer: IgxDataToolTipLayerComponent
    private _footballPlayerStats: FootballPlayerStats = null;
    public get footballPlayerStats(): FootballPlayerStats {
        if (this._footballPlayerStats == null)
        {
            this._footballPlayerStats = new FootballPlayerStats();
        }
        return this._footballPlayerStats;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}
```
```html
<div class="container vertical sample">
  <div class="legend-title">
      Ronaldo vs Messi Player Stats
  </div>
  <div class="legend">
      <igx-legend
      name="legend"
      #legend
      orientation="Horizontal">
      </igx-legend>
  </div>
  <div class="container fill">
      <igx-data-chart
      name="chart"
      #chart
      [legend]="legend"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false">
          <igx-category-angle-axis
          name="angleAxis"
          #angleAxis
          [dataSource]="footballPlayerStats"
          label="attribute">
          </igx-category-angle-axis>
          <igx-numeric-radius-axis
          name="radiusAxis"
          #radiusAxis
          innerRadiusExtentScale="0.1"
          interval="2"
          minimumValue="0"
          maximumValue="10">
          </igx-numeric-radius-axis>
          <igx-radial-line-series
          name="RadialLineSeries1"
          #radialLineSeries1
          [dataSource]="footballPlayerStats"
          [angleAxis]="angleAxis"
          [valueAxis]="radiusAxis"
          valueMemberPath="ronaldo"
          showDefaultTooltip="false"
          areaFillOpacity="0.8"
          thickness="3"
          title="Ronaldo"
          markerType="Circle">
          </igx-radial-line-series>
          <igx-radial-line-series
          name="RadialLineSeries2"
          #radialLineSeries2
          [dataSource]="footballPlayerStats"
          [angleAxis]="angleAxis"
          [valueAxis]="radiusAxis"
          valueMemberPath="messi"
          showDefaultTooltip="false"
          areaFillOpacity="0.8"
          thickness="3"
          title="Messi"
          markerType="Circle">
          </igx-radial-line-series>
          <igx-data-tool-tip-layer
          name="dataToolTipLayer"
          #dataToolTipLayer>
          </igx-data-tool-tip-layer>
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

## Angular Polar Line Chart

The Polar Line Chart belongs to a group of polar charts and is rendered using a collection of straight lines connecting data points in polar (angle/radius) coordinate system. Polar Line Charts use the same concepts of data plotting as the [Scatter Line Chart](scatter-chart.md) with the difference that the visualization wraps data points around a circle rather than stretching them horizontally.

You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxPolarLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpolarlineseriescomponent.html), as shown in the example below:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxLegendModule, IgxDataChartCoreModule, IgxDataChartPolarModule, IgxDataChartPolarCoreModule, IgxDataChartInteractivityModule, IgxDataChartAnnotationModule } from 'igniteui-angular-charts';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxLegendModule,
    IgxDataChartCoreModule,
    IgxDataChartPolarModule,
    IgxDataChartPolarCoreModule,
    IgxDataChartInteractivityModule,
    IgxDataChartAnnotationModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BoatSailingDataItem, BoatSailingData } from './BoatSailingData';
import { IgxLegendComponent, IgxDataChartComponent, IgxNumericAngleAxisComponent, IgxNumericRadiusAxisComponent, IgxPolarLineSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("legend", { static: true } )
	private legend: IgxLegendComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxDataChartComponent
	@ViewChild("angleAxis", { static: true } )
	private angleAxis: IgxNumericAngleAxisComponent
	@ViewChild("radiusAxis", { static: true } )
	private radiusAxis: IgxNumericRadiusAxisComponent
	@ViewChild("polarLineSeries1", { static: true } )
	private polarLineSeries1: IgxPolarLineSeriesComponent
	@ViewChild("polarLineSeries2", { static: true } )
	private polarLineSeries2: IgxPolarLineSeriesComponent
	@ViewChild("dataToolTipLayer", { static: true } )
	private dataToolTipLayer: IgxDataToolTipLayerComponent
    private _boatSailingData: BoatSailingData = null;
    public get boatSailingData(): BoatSailingData {
        if (this._boatSailingData == null)
        {
            this._boatSailingData = new BoatSailingData();
        }
        return this._boatSailingData;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}
```
```html
<div class="container vertical sample">
  <div class="legend-title">
      Wind Speed vs Boat Speed
  </div>
  <div class="legend">
      <igx-legend
      name="legend"
      #legend
      orientation="Horizontal">
      </igx-legend>
  </div>
  <div class="container fill">
      <igx-data-chart
      name="chart"
      #chart
      [legend]="legend"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false">
          <igx-numeric-angle-axis
          name="angleAxis"
          #angleAxis
          startAngleOffset="-90"
          interval="30"
          minimumValue="0"
          maximumValue="360">
          </igx-numeric-angle-axis>
          <igx-numeric-radius-axis
          name="radiusAxis"
          #radiusAxis
          radiusExtentScale="0.9"
          innerRadiusExtentScale="0.1"
          interval="25"
          minimumValue="0"
          maximumValue="100">
          </igx-numeric-radius-axis>
          <igx-polar-line-series
          name="PolarLineSeries1"
          #polarLineSeries1
          [dataSource]="boatSailingData"
          [angleAxis]="angleAxis"
          [radiusAxis]="radiusAxis"
          angleMemberPath="direction"
          radiusMemberPath="windSpeed"
          showDefaultTooltip="false"
          thickness="1"
          title="Wind Speed"
          markerType="Circle">
          </igx-polar-line-series>
          <igx-polar-line-series
          name="PolarLineSeries2"
          #polarLineSeries2
          [dataSource]="boatSailingData"
          [angleAxis]="angleAxis"
          [radiusAxis]="radiusAxis"
          angleMemberPath="direction"
          radiusMemberPath="boatSpeed"
          showDefaultTooltip="false"
          thickness="1"
          title="Boat Speed"
          markerType="Circle">
          </igx-polar-line-series>
          <igx-data-tool-tip-layer
          name="dataToolTipLayer"
          #dataToolTipLayer>
          </igx-data-tool-tip-layer>
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

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](area-chart.md)
- [Column Chart](column-chart.md)
- [Polar Chart](polar-chart.md)
- [Radial Chart](radial-chart.md)
- [Spline Chart](spline-chart.md)
- [Stacked Chart](stacked-chart.md)

## API References

The following table lists API members mentioned in the above sections:

| Chart Type        | Control Name                                                                                                                                                                   | API Members                                                                                                                                                                                                                                                                                                                     |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Line              | [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) | [`chartType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#chartType) = [`Line`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.categorycharttype.html#Line) |
| Polar Line        | [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)         | [`IgxPolarLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpolarlineseriescomponent.html)                                                                                                                                              |
| Radial Line       | [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)         | [`IgxRadialLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxradiallineseriescomponent.html)                                                                                                                                            |
| Stacked Line      | [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)         | [`IgxStackedLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedlineseriescomponent.html)                                                                                                                                          |
| Stacked 100% Line | [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)         | [`IgxStacked100LineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100lineseriescomponent.html)                                                                                                                                    |
