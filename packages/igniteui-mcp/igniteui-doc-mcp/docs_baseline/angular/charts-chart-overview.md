---
title: Angular Charts & Graphs Library | Ignite UI for Angular
_description: Ignite UI for Angular Charts & Graphs is an extensive library of data visualizations that enable stunning, interactive charts for your web and mobile apps. Try for FREE.
_keywords: Angular Charts, Chart, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "FinancialChart", "CategoryChart", "XamDataChart", "CategoryChartType"]
_tocName: Charts
---

# Angular Charts & Graphs Overview

Ignite UI for Angular Charts & Graphs is an extensive library of data visualizations that enable stunning, interactive charts and dashboards for your web and mobile apps. Built for speed and beauty, designed to work on every modern browser, and with complete touch and interactivity, you can quickly and easily build responsive visuals into your next app on any device.

The Ignite UI for Angular Charts support over 65 types of series and combinations that let you visualize any type of data, including Category Series, Financial Series, Polar Series, Radial Series, Range Series, Scatter Series, Shape Series, and Geospatial Series. No matter the type of comparison you are doing, or what type of data story you are trying to tell, you can represent your data in any of these ways:

- Change Over Time
- Comparison
- Correlation
- Distribution
- Geospatial
- Overview + Detail
- Part to Whole
- Ranking

Power your most demanding visualizations with Infragistics Angular charting!

## Angular Chart and Graph Types

The Angular product has over 65 different chart and graph types for any scenario – from a single chart display to an interactive dashboard. You can create Angular charts like Pie, Bar, Area, Line, Point, Stacked, Donut, Scatter, Gauge, Polar, Treemap, Stock, Financial, Geospatial Maps and more for your mobile or web apps. The benefit of our Angular chart vs. others is full support for features like:

- Responsive Web Design built in
- Interactive Panning and Zooming with Mouse, Keyboard and Touch
- Full Control of Chart Animation
- Chart Drill-Down Events
- Real-Time Streaming Support
- High-Volume (Millions of Data Points) Support
- Trends Lines and other Data Analysis features
    Built with a modular design of axis, markers, series, legend, and annotation layers, the Angular chart makes it easy to design a render any type of data story. Build a simple chart with a single data series, or build more complex data stories with multiple series of data, with multiple axis in composite views.

## Category and Financial Chart vs. Data Chart

The Angular Category and Financial Chart is what we refer to as our domain specific charts. It's a wrapper around Angular Data Chart that assumes your domain is a category, or financial price series.

Choosing these specific domain charts allows to simplify the API and draw a lot of interfaces about the data to automatically configure the chart scenario, all without needing to explicitly define attributes such as axes, series, and annotations. In contrast, the data chart is very explicit and every critical part of the chart needs to be defined.

Domain charts are using a data chart at its core; so the same performance optimizations apply to both. The difference lies in whether they are trying to make things very easy to specify for the developer, or to be as flexible as possible. Angular Data Chart is more verbose, unlocking all of our charting capabilities you need, allowing you to mix and match of any number of series, axes or annotation for example. For the category and financial charts, there might be a situation that cannot be easily done that the data chart is more suited for, such as a series with a scatter series with a numeric x axis.

It can be difficult to know which chart to pick at first. It's crucial to understand the type of series and how many additional features you want to present. For a more light-weight basic category or financial series, we recommend using one of the domain charts. For more advances scenarios we recommend using Angular Data Chart, such as presenting something other than what is covered by the category chart's [`chartType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#chartType) property such as a stacked or scatter series, or numeric or time-based data. It's worth noting that the Angular Financial Chart covers only column, OHLC bar, candlestick, and line series types.

We make Angular Category and Financial Chart easier to use, the good news you can always switch to data chart in the future.

### Angular Bar Chart

The Angular Bar Chart, or Bar Graph is among the most common category chart types used to quickly compare frequency, count, total, or average of data in different categories with data encoded by horizontal bars of equal width and differing lengths. They are ideal for showing variations in the value of an item over time, data distribution, sorted data ranking (high to low, worst to best). Data is represented using a collection of rectangles that extend from the left to right of the chart towards the values of data points. Learn more about our [bar chart](types/bar-chart.md)

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxLegendModule, IgxDataChartCoreModule, IgxDataChartCategoryCoreModule, IgxDataChartCategoryModule, IgxDataChartInteractivityModule, IgxDataChartVerticalCategoryModule, IgxDataChartAnnotationModule } from 'igniteui-angular-charts';

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
    IgxDataChartCategoryCoreModule,
    IgxDataChartCategoryModule,
    IgxDataChartInteractivityModule,
    IgxDataChartVerticalCategoryModule,
    IgxDataChartAnnotationModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HighestGrossingMoviesItem, HighestGrossingMovies } from './HighestGrossingMovies';
import { IgxLegendComponent, IgxDataChartComponent, IgxCategoryYAxisComponent, IgxNumericXAxisComponent, IgxCategoryHighlightLayerComponent, IgxBarSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	@ViewChild("yAxis", { static: true } )
	private yAxis: IgxCategoryYAxisComponent
	@ViewChild("xAxis", { static: true } )
	private xAxis: IgxNumericXAxisComponent
	@ViewChild("categoryHighlightLayer", { static: true } )
	private categoryHighlightLayer: IgxCategoryHighlightLayerComponent
	@ViewChild("barSeries1", { static: true } )
	private barSeries1: IgxBarSeriesComponent
	@ViewChild("barSeries2", { static: true } )
	private barSeries2: IgxBarSeriesComponent
	@ViewChild("tooltips", { static: true } )
	private tooltips: IgxDataToolTipLayerComponent
    private _highestGrossingMovies: HighestGrossingMovies = null;
    public get highestGrossingMovies(): HighestGrossingMovies {
        if (this._highestGrossingMovies == null)
        {
            this._highestGrossingMovies = new HighestGrossingMovies();
        }
        return this._highestGrossingMovies;
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
      Highest Grossing Movie Franchises
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
      name="Chart"
      #chart
      [legend]="legend">
          <igx-category-y-axis
          name="yAxis"
          #yAxis
          label="franchise"
          useEnhancedIntervalManagement="true"
          enhancedIntervalPreferMoreCategoryLabels="true"
          [dataSource]="highestGrossingMovies"
          isInverted="true"
          gap="0.5"
          overlap="-0.1">
          </igx-category-y-axis>
          <igx-numeric-x-axis
          name="xAxis"
          #xAxis
          title="Billions of U.S. Dollars">
          </igx-numeric-x-axis>
          <igx-category-highlight-layer
          name="CategoryHighlightLayer"
          #categoryHighlightLayer>
          </igx-category-highlight-layer>
          <igx-bar-series
          name="BarSeries1"
          #barSeries1
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          title="Total Revenue of Franchise"
          valueMemberPath="totalRevenue"
          [dataSource]="highestGrossingMovies"
          showDefaultTooltip="true"
          isTransitionInEnabled="true"
          isHighlightingEnabled="true">
          </igx-bar-series>
          <igx-bar-series
          name="BarSeries2"
          #barSeries2
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          title="Highest Grossing Movie in Series"
          valueMemberPath="highestGrossing"
          [dataSource]="highestGrossingMovies"
          showDefaultTooltip="true"
          isTransitionInEnabled="true"
          isHighlightingEnabled="true">
          </igx-bar-series>
          <igx-data-tool-tip-layer
          name="Tooltips"
          #tooltips>
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

### Angular Pie Chart

The Angular Pie Chart, or Pie Graph, is a very common part-to-whole chart type. Part-to-whole charts show how categories (parts) of a data set add up to a total (whole) value. Categories are shown in proportion to other categories based on their value percentage to the total value being analyzed. A pie chart renders data values as sections in a circular, or pie-shaped graph. Each section, or pie slice, has an arc length proportional to its underlying data value. The total values represented by the pie slices represent a whole value, like 100 or 100%. Pie charts are perfect for small data sets and are easy to read at a quick glance. Learn more about our [pie chart](types/pie-chart.md)

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxItemLegendModule, IgxPieChartModule } from 'igniteui-angular-charts';

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
    IgxItemLegendModule,
    IgxPieChartModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { EnergyGlobalDemandItem, EnergyGlobalDemand } from './EnergyGlobalDemand';
import { IgxItemLegendComponent, IgxPieChartComponent } from 'igniteui-angular-charts';

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
	private legend: IgxItemLegendComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxPieChartComponent
    private _energyGlobalDemand: EnergyGlobalDemand = null;
    public get energyGlobalDemand(): EnergyGlobalDemand {
        if (this._energyGlobalDemand == null)
        {
            this._energyGlobalDemand = new EnergyGlobalDemand();
        }
        return this._energyGlobalDemand;
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
      Global Electricity Demand by Energy Use
  </div>
  <div class="legend">
      <igx-item-legend
      name="legend"
      #legend
      orientation="Horizontal">
      </igx-item-legend>
  </div>
  <div class="container fill">
      <igx-pie-chart
      name="chart"
      #chart
      legendLabelMemberPath="category"
      labelMemberPath="summary"
      labelsPosition="BestFit"
      valueMemberPath="value"
      radiusFactor="0.7"
      [dataSource]="energyGlobalDemand"
      [legend]="legend">
      </igx-pie-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

### Angular Line Chart

The Angular Line Chart, or Line Graph is a type of category line graph shows the continuous data values represented by points connected by straight line segments of one or more quantities over a period time for showing trends and performing comparative analysis. The Y-Axis (labels on left side) show a numeric value, while the X-Axis (bottom labels) are showing a time-series or comparison category. You can include one or more data sets to compare, which would render as multiple lines in the chart. Learn more about our [line chart](types/line-chart.md)

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

### Angular Donut Chart

The Angular Donut Chart or Donut Graph, is a variant of a Pie Chart, proportionally illustrating the occurrences of a variable in a circle to represents parts of a whole. The donut chart has a circular opening at the center of the pie chart, where a title or category explanation can be displayed. Donut charts can support multiple concentric rings, with built-in support for visualizing hierarchical data. Learn more about our [Donut chart](types/donut-chart.md)

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxItemLegendModule, IgxDoughnutChartModule } from 'igniteui-angular-charts';

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
    IgxItemLegendModule,
    IgxDoughnutChartModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { EnergyGlobalDemandItem, EnergyGlobalDemand } from './EnergyGlobalDemand';
import { IgxItemLegendComponent, IgxDoughnutChartComponent, IgxRingSeriesComponent } from 'igniteui-angular-charts';

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
	private legend: IgxItemLegendComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxDoughnutChartComponent
	@ViewChild("series", { static: true } )
	private series: IgxRingSeriesComponent
    private _energyGlobalDemand: EnergyGlobalDemand = null;
    public get energyGlobalDemand(): EnergyGlobalDemand {
        if (this._energyGlobalDemand == null)
        {
            this._energyGlobalDemand = new EnergyGlobalDemand();
        }
        return this._energyGlobalDemand;
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
      Global Electricity Demand by Energy Use
  </div>
  <div class="legend">
      <igx-item-legend
      name="legend"
      #legend
      orientation="Horizontal">
      </igx-item-legend>
  </div>
  <div class="container fill">
      <igx-doughnut-chart
      name="chart"
      #chart
      allowSliceExplosion="true">
          <igx-ring-series
          name="series"
          #series
          labelMemberPath="summary"
          labelsPosition="OutsideEnd"
          labelExtent="30"
          valueMemberPath="value"
          legendLabelMemberPath="category"
          outlines="white"
          radiusFactor="0.6"
          startAngle="30"
          [dataSource]="energyGlobalDemand"
          [legend]="legend">
          </igx-ring-series>
      </igx-doughnut-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

### Angular Area Chart

The Angular Area Chart is rendered using a collection of points connected by straight line segments with the area below the line filled in. Values are represented on the y-axis (labels on the left side) and categories are displayed on the x-axis (bottom labels). Area Charts emphasize the amount of change over a period of time or compare multiple items as well as the relationship of parts of a whole by displaying the total of the plotted values. Learn more about our [area chart](types/area-chart.md)

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
      chartType="Area"
      [dataSource]="countryRenewableElectricity"
      includedProperties="year, europe, china, america"
      [legend]="legend"
      yAxisTitle="TWh"
      yAxisTitleLeftMargin="10"
      yAxisTitleRightMargin="5"
      yAxisLabelLeftMargin="0"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false"
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

### Angular Sparkline Chart

The Angular Sparkline Chart, or Sparkline Graph is a type of category graph intended for rendering within a small-scale layout such as within a grid cell, or anywhere a word-sized visualization is needed to tell a data story. Like other Angular chart types, the Sparkline Chart has several visual elements and corresponding features that can be configured and customized such as the chart type, markers, ranges, trendlines, unknown value plotting, and tooltips. Sparkline charts can render as a Line Chart, Area Chart, Column Chart or Win / Loss Chart. The difference between the full-sized chart equivalent to the Spark-chart, is the Y-Axis (left side labels) and X-Axis (bottom labels) are not visible. Learn more about our [sparkline chart](types/sparkline-chart.md).

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxSparklineModule } from "igniteui-angular-charts";


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
    IgxSparklineModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, ViewChild } from "@angular/core";
import { IgxSparklineComponent } from "igniteui-angular-charts";
import { SparklineDisplayType } from "igniteui-angular-charts";
import { SharedData } from "./SharedData";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public data: any[];

    @ViewChild("sparkline", { static: true })
    public sparkline: IgxSparklineComponent;

    constructor() {
        this.data = SharedData.getSharedData();
    }

    public onDisplayTypeChanged(e: any) {
        const selection = e.target.value.toString();

        switch (selection) {
            case "Area": {
                this.sparkline.displayType = SparklineDisplayType.Area;
                break;
            }
            case "Column": {
                this.sparkline.displayType = SparklineDisplayType.Column;
                break;
            }
            case "Line": {
                this.sparkline.displayType = SparklineDisplayType.Line;
                break;
            }
            case "WinLoss": {
                this.sparkline.displayType = SparklineDisplayType.WinLoss;
                break;
            }
        }
    }
}
```
```html
<div class="container vertical">
    <div class="options horizontal">
        <span class="options-item">Display Type:</span>
        <select (change)="onDisplayTypeChanged($event)">
            <option>Area</option>
            <option>Column</option>
            <option>Line</option>
            <option>WinLoss</option>
        </select>
    </div>
    <div class="container">
        <igx-sparkline #sparkline height="100%" width="100%"
            [dataSource]="data"
            valueMemberPath="Value"
            displayType="Area"></igx-sparkline>
    </div>
</div >
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

### Angular Bubble Chart

The Angular Bubble Chart, or Bubble Graph, is used to show data comprising of three numeric values. Two of the values are plotted as an intersecting point using a Cartesian (X, Y) coordinate system, and the third value is rendered as the diameter size of the point. This gives the Bubble Chart its name - a visualization of varying sized bubbles along the X and Y coordinates of the plot. The Angular Bubble Chart is used to show relationships of data correlations with the data value differences rendered by size. You can also use a fourth data dimension, typically color, to further differentiate the values in your Bubble chart. Learn more about our [bubble chart](types/bubble-chart.md).

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxLegendModule, IgxNumberAbbreviatorModule, IgxDataChartCoreModule, IgxDataChartScatterModule, IgxDataChartScatterCoreModule, IgxDataChartInteractivityModule } from 'igniteui-angular-charts';

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
    IgxNumberAbbreviatorModule,
    IgxDataChartCoreModule,
    IgxDataChartScatterModule,
    IgxDataChartScatterCoreModule,
    IgxDataChartInteractivityModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CountryStatsAfricaItem, CountryStatsAfrica } from './CountryStatsAfrica';
import { CountryStatsEuropeItem, CountryStatsEurope } from './CountryStatsEurope';
import { IgxLegendComponent, IgxDataChartComponent, IgxNumericXAxisComponent, IgxNumericYAxisComponent, IgxBubbleSeriesComponent, IgxSizeScaleComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	private xAxis: IgxNumericXAxisComponent
	@ViewChild("yAxis", { static: true } )
	private yAxis: IgxNumericYAxisComponent
	@ViewChild("bubbleSeries1", { static: true } )
	private bubbleSeries1: IgxBubbleSeriesComponent
	private  _sizeScale1: IgxSizeScaleComponent | null = null;
	public get sizeScale1(): IgxSizeScaleComponent {
	    if (this._sizeScale1 == null)
	    {
	        var sizeScale1 = new IgxSizeScaleComponent();
	        sizeScale1.isLogarithmic = false;
	        sizeScale1.minimumValue = 10;
	        sizeScale1.maximumValue = 80;

	        this._sizeScale1 = sizeScale1;
	    }
	    return this._sizeScale1;
	}
	@ViewChild("bubbleSeries2", { static: true } )
	private bubbleSeries2: IgxBubbleSeriesComponent
	private  _sizeScale2: IgxSizeScaleComponent | null = null;
	public get sizeScale2(): IgxSizeScaleComponent {
	    if (this._sizeScale2 == null)
	    {
	        var sizeScale2 = new IgxSizeScaleComponent();
	        sizeScale2.isLogarithmic = false;
	        sizeScale2.minimumValue = 10;
	        sizeScale2.maximumValue = 80;

	        this._sizeScale2 = sizeScale2;
	    }
	    return this._sizeScale2;
	}
	@ViewChild("dataToolTipLayer", { static: true } )
	private dataToolTipLayer: IgxDataToolTipLayerComponent
    private _countryStatsAfrica: CountryStatsAfrica = null;
    public get countryStatsAfrica(): CountryStatsAfrica {
        if (this._countryStatsAfrica == null)
        {
            this._countryStatsAfrica = new CountryStatsAfrica();
        }
        return this._countryStatsAfrica;
    }

    private _countryStatsEurope: CountryStatsEurope = null;
    public get countryStatsEurope(): CountryStatsEurope {
        if (this._countryStatsEurope == null)
        {
            this._countryStatsEurope = new CountryStatsEurope();
        }
        return this._countryStatsEurope;
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
      Total Population of Selected Countries
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
      [legend]="legend">
          <igx-numeric-x-axis
          name="xAxis"
          #xAxis
          isLogarithmic="true"
          abbreviateLargeNumbers="true"
          title="Population">
          </igx-numeric-x-axis>
          <igx-numeric-y-axis
          name="yAxis"
          #yAxis
          title="GDP per Capita"
          maximumValue="1000000"
          titleLeftMargin="10"
          isLogarithmic="true"
          abbreviateLargeNumbers="true">
          </igx-numeric-y-axis>
          <igx-bubble-series
          name="bubbleSeries1"
          #bubbleSeries1
          title="African Countries"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          xMemberPath="population"
          yMemberPath="gDP"
          radiusMemberPath="workedHours"
          xMemberAsLegendLabel="Population"
          yMemberAsLegendLabel="GDP"
          radiusMemberAsLegendLabel="Work Hours"
          [dataSource]="countryStatsAfrica"
          markerType="Circle"
          showDefaultTooltip="true"
          [radiusScale]="sizeScale1">
          </igx-bubble-series>
          <igx-bubble-series
          name="bubbleSeries2"
          #bubbleSeries2
          title="European Countries"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          xMemberPath="population"
          yMemberPath="gDP"
          radiusMemberPath="workedHours"
          xMemberAsLegendLabel="Population"
          yMemberAsLegendLabel="GDP"
          radiusMemberAsLegendLabel="Work Hours"
          [dataSource]="countryStatsEurope"
          markerType="Circle"
          showDefaultTooltip="true"
          [radiusScale]="sizeScale2">
          </igx-bubble-series>
          <igx-data-tool-tip-layer
          name="dataToolTipLayer"
          #dataToolTipLayer
          valueRowMarginTop="1"
          labelTextMarginTop="1"
          titleTextMarginTop="1"
          unitsTextMarginTop="1"
          valueRowMarginBottom="1"
          labelTextMarginBottom="1"
          titleTextMarginBottom="1"
          unitsTextMarginBottom="1"
          unitsTextMarginRight="5"
          valueTextMarginLeft="10"
          labelTextMarginLeft="1"
          layoutMode="Vertical">
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

### Angular Financial / Stock Chart

The Angular Financial or Stock Chart, is a composite visualization that renders stock data and financial data in a time-series chart that includes interactive visual elements in a toolbar like day / week / month filters, chart type selection, volume type selection, indicators selection and trends lines selection. Designed for customization, the Angular Stock Chart can be customized in any way to give an easier visualization and interpretation of your data. The financial chart renders the date-time data along the X-Axis (bottom labels) and shows fields like Open, High, Low and Close volumes. The type of chart to render the Time-Series data can be Bar, Candle, Column, or Line. Learn more about our [stock chart](types/stock-chart.md).

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxFinancialChartModule, IgxLegendModule } from "igniteui-angular-charts";
import { FinancialDataService } from "./FinancialDataService";


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
    IgxFinancialChartModule,
    IgxLegendModule
],
  providers: [FinancialDataService],
schemas: []
})
export class AppModule {}
```
```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FinancialDataService } from "./FinancialDataService";

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ FinancialDataService ],
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {
    public data: any;
    constructor(private dataService: FinancialDataService) {
        this.data = [ this.dataService.getGoog(), this.dataService.getMsft() ];
    }
}
```
```html
<div class="container vertical">
    <div class="options vertical" >
        <label id="legendTitle">Stock Changes: Microsoft vs Google </label>
    </div>

    <igx-financial-chart height="100%" width="100%"
    [dataSource]="data"
    chartType="line"
    thickness=2
    yAxisMode="PercentChange"
    yAxisTitle="Percent Changed">
    </igx-financial-chart>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

### Angular Column Chart

The Angular Column Chart, or Column Graph is among the most common category chart types used to quickly compare frequency, count, total, or average of data in different categories with data encoded by vertical bars of equal width and differing lengths. They are ideal for showing variations in the value of an item over time, data distribution, sorted data ranking (high to low, worst to best). Data is represented using a collection of rectangles that extend from the top to bottom of the chart towards the values of data points. Learn more about our [column chart](types/column-chart.md).

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
import { HighestGrossingMoviesItem, HighestGrossingMovies } from './HighestGrossingMovies';
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
    private _highestGrossingMovies: HighestGrossingMovies = null;
    public get highestGrossingMovies(): HighestGrossingMovies {
        if (this._highestGrossingMovies == null)
        {
            this._highestGrossingMovies = new HighestGrossingMovies();
        }
        return this._highestGrossingMovies;
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
      Highest Grossing Movie Franchises
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
      chartType="Column"
      [dataSource]="highestGrossingMovies"
      [legend]="legend"
      xAxisInterval="1"
      yAxisTitle="Billions of U.S. Dollars"
      yAxisTitleLeftMargin="10"
      yAxisTitleRightMargin="5"
      yAxisLabelLeftMargin="0"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false"
      isCategoryHighlightingEnabled="false"
      crosshairsDisplayMode="None">
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

### Angular Composite Chart

The Angular Composite Chart, also called a Combo Chart, is visualization that combines different types of chart types in the same plot area. It is very useful when presenting two data series that have a very different scale and might be expressed in different units. The most common example is dollars on one axis and percentage on the other axis. Learn more about our [composite chart](types/composite-chart.md).

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxLegendModule, IgxCalloutLayerModule, IgxDataChartInteractivityModule, IgxDataChartAnnotationModule, IgxNumberAbbreviatorModule, IgxDataChartCategoryCoreModule } from "igniteui-angular-charts";


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
    IgxDataChartCategoryCoreModule,
    IgxLegendModule,
    IgxCalloutLayerModule,
    IgxDataChartInteractivityModule,
    IgxDataChartAnnotationModule,
    IgxNumberAbbreviatorModule,
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, OnInit } from "@angular/core";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    public data: any[];

    constructor() { }

    public formatNumber(num: number): string {
        var ret = num;
        if (num >= 1000000) return (num / 1000000.0).toFixed(1) + "M";
        if (num >= 1000) return (num / 1000.0).toFixed(1) + "K";
    
        return ret.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    ngOnInit(): void {

        this.data = [
            { Date: "Jan 1, 2019", Revenue: 16914, Expenses: 10183 },
            { Date: "Mar 1, 2019", Revenue: 15077, Expenses: 12813 },
            { Date: "Jun 1, 2019", Revenue: 16886, Expenses: 14476 },
            { Date: "Sep 1, 2019", Revenue: 17652, Expenses: 11705 },
            { Date: "Jan 1, 2020", Revenue: 21082, Expenses: 14044 },
            { Date: "Mar 1, 2020", Revenue: 17737, Expenses: 12803 },
            { Date: "Jun 1, 2020", Revenue: 18687, Expenses: 13677 },
            { Date: "Sep 1, 2020", Revenue: 21470, Expenses: 13717 },
            { Date: "Jan 1, 2021", Revenue: 28072, Expenses: 17133 }
        ];

        for (let i = 0; i < this.data.length; i++) {
            const item = this.data[i];
      
            item.Revenue = item.Revenue * 1000;
            item.Expenses = item.Expenses * 1000;
      
            item.Income = item.Revenue - item.Expenses;
            item.IncomePerRevenue = (item.Income / item.Revenue) * 100;
      
            // calculating x-offset for callouts
            item.RevenueX = i;
            item.ExpensesX = i + 0.5;
      
            // formatting values for callouts
            item.FormattedRevenue = "$" + this.formatNumber(item.Revenue);
            item.FormattedIncome = "$" + this.formatNumber(item.Income);
            item.FormattedExpenses = "$" + this.formatNumber(item.Expenses);
            item.FormattedProfit = item.IncomePerRevenue + "%";
        }
    }
}
```
```html
<div class="container vertical">
    <div class="options vertical">
        <span id="legendTitle">Facebook Statement of Income 2019-2020</span>
        <div class="legend">
            <igx-legend #legend orientation="horizontal"></igx-legend>
        </div>
    </div>
    <div class="container">
        <igx-data-chart height="100%" width="100%" [legend]="legend"
                   isHorizontalZoomEnabled="false"
                   isVerticalZoomEnabled="false" [dataSource]="data">

            <igx-category-x-axis #xAxis label="Date" overlap="0" gap="0.1" useClusteringMode="true"></igx-category-x-axis>
            <igx-numeric-y-axis #yAxis1 abbreviateLargeNumbers="true" title="In Millions of U.S. Dollars"
                          titleLeftMargin="5" titleRightMargin="0"
                          minimumValue="0" maximumValue="30000000">
            </igx-numeric-y-axis>
            <igx-numeric-y-axis #yAxis2 abbreviateLargeNumbers="true" title="Percentage" majorStrokeThickness="0"
                          minimumValue="0" maximumValue="160" labelLocation="OutsideRight"
                          labelHorizontalAlignment="Left">
            </igx-numeric-y-axis>

            <igx-column-series #revenueSeries [xAxis]="xAxis" [yAxis]="yAxis1"
                          valueMemberPath="Revenue"
                          title="Revenue" markerType="Hidden">
            </igx-column-series>
            <igx-column-series #expenseSeries [xAxis]="xAxis" [yAxis]="yAxis1"
                          valueMemberPath="Expenses"
                          title="Expenses" markerType="Hidden">
            </igx-column-series>

            <igx-spline-area-series #incomeSeries [xAxis]="xAxis" [yAxis]="yAxis2"
                              valueMemberPath="IncomePerRevenue"
                              title="Income / Revenue %" markerType="Circle">
            </igx-spline-area-series>

            <igx-callout-layer isAutoCalloutBehaviorEnabled="false" [targetSeries]="revenueSeries"
                          useValueForAutoCalloutLabels="false"
                          calloutLeaderBrush="Transparent" calloutTextColor="Black"
                          calloutBackground = "Transparent" calloutPositionPadding="-5"
                          xMemberPath="RevenueX" yMemberPath="Revenue" labelMemberPath="FormattedRevenue">
            </igx-callout-layer>

            <igx-callout-layer isAutoCalloutBehaviorEnabled="false" [targetSeries]="expenseSeries"
                          useValueForAutoCalloutLabels="false"
                          calloutLeaderBrush="Transparent" calloutTextColor="Black"
                          calloutBackground="Transparent"  xMemberPath="ExpensesX" yMemberPath="Expenses"
                          labelMemberPath="FormattedExpenses" calloutPositionPadding="-5">
            </igx-callout-layer>

            <igx-callout-layer isAutoCalloutBehaviorEnabled="true" [targetSeries]="incomeSeries"
                          useValueForAutoCalloutLabels="true" calloutLeaderBrush="Transparent" calloutTextColor="Black"
                          calloutBackground = "LightGray" autoCalloutLabelPrecision="1">
            </igx-callout-layer>
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

<!-- ### Angular Gantt Chart

The Angular Gantt Chart is a type of bar chart, that visualizes various categories into time series. Gantt charts illustrate the start and finish time in time period blocks. It is often used in project management as one of the most popular and useful ways of showing activities (tasks or events) displayed against time. On the left of the chart is a list of the activities and along the top is a suitable time scale. Each activity is represented by a bar; the position and length of the bar reflects the start date, duration and end date of the activity. Learn more about our [gantt chart](types/gantt-chart.md). -->

<!-- ### Angular Network Chart

The Angular Network Chart, also called Network Graph or Polyline Chart, visualizes complex relationships between a large amount of elements. This visualization displays undirected and directed graph structures. It also shows relationships between entities that are displayed as round nodes and lines show the relationships between them. Learn more about our [network chart](types/network-chart.md). -->

### Angular Polar Chart

The Angular Polar Area Chart or Polar Graph belongs to a group of polar charts and has a shape of a filled polygon which vertices or corners are located at the polar (angle/radius) coordinates of data points. The Polar Area Chart uses the same concepts of data plotting as the Scatter Chart but wraps data points around a circle rather than stretching them horizontally. Like with other series types, multiple Polar Area Charts can be plotted in the same data chart and they can be overlaid on each other to show differences and similarities between data sets. Learn more about our [polar chart](types/polar-chart.md).

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

<!-- ### Angular Pyramid Chart

The Angular Pyramid Chart, also called an age pyramid or population pyramid, is a graphical illustration that shows distribution of various age groups in a population, which forms the shape of a pyramid when the population is growing. It is also used in ecology to determine the overall age distribution of a population; an indication of the reproductive capabilities and likelihood of the continuation of a species. Learn more about our [pyramid chart](types/pyramid-chart.md). -->

### Angular Scatter Chart

The Angular Scatter Chart, or Scatter Graph, is used to show the relationship between two values using a Cartesian (X, Y) coordinate system to plot data. Each data point is rendered as the intersecting point of the data value on the X and Y Axis. Scatter charts draw attention to uneven intervals or clusters of data. They can highlight the deviation of collected data from predicted results and they are often used to plot scientific and statistical data. The Angular Scatter chart organizes and plots data chronologically (even if the data is not in chronological order before binding) on X-Axis and Y-Axis. Learn more about our [scatter chart](types/scatter-chart.md).

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxLegendModule, IgxDataChartCoreModule, IgxDataChartScatterModule, IgxDataChartScatterCoreModule, IgxDataChartInteractivityModule, IgxDataChartAnnotationModule } from 'igniteui-angular-charts';

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
    IgxDataChartScatterModule,
    IgxDataChartScatterCoreModule,
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
import { CountryDemographicEuropeItem, CountryDemographicEurope } from './CountryDemographicEurope';
import { CountryDemographicAfricanItem, CountryDemographicAfrican } from './CountryDemographicAfrican';
import { IgxLegendComponent, IgxDataChartComponent, IgxNumericXAxisComponent, IgxNumericYAxisComponent, IgxScatterSeriesComponent } from 'igniteui-angular-charts';

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
	private xAxis: IgxNumericXAxisComponent
	@ViewChild("yAxis", { static: true } )
	private yAxis: IgxNumericYAxisComponent
	@ViewChild("scatterSeries1", { static: true } )
	private scatterSeries1: IgxScatterSeriesComponent
	@ViewChild("scatterSeries2", { static: true } )
	private scatterSeries2: IgxScatterSeriesComponent
    private _countryDemographicEurope: CountryDemographicEurope = null;
    public get countryDemographicEurope(): CountryDemographicEurope {
        if (this._countryDemographicEurope == null)
        {
            this._countryDemographicEurope = new CountryDemographicEurope();
        }
        return this._countryDemographicEurope;
    }

    private _countryDemographicAfrican: CountryDemographicAfrican = null;
    public get countryDemographicAfrican(): CountryDemographicAfrican {
        if (this._countryDemographicAfrican == null)
        {
            this._countryDemographicAfrican = new CountryDemographicAfrican();
        }
        return this._countryDemographicAfrican;
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
      Population Statistics for Selected Continents
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
      [legend]="legend">
          <igx-numeric-x-axis
          name="xAxis"
          #xAxis
          title="Death Rate (per 1,000 people)"
          minimumValue="5"
          maximumValue="15">
          </igx-numeric-x-axis>
          <igx-numeric-y-axis
          name="yAxis"
          #yAxis
          title="Birth Rate (per 1,000 people)"
          minimumValue="0"
          maximumValue="50"
          interval="10">
          </igx-numeric-y-axis>
          <igx-scatter-series
          name="scatterSeries1"
          #scatterSeries1
          title="Europe"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          xMemberPath="deathRate"
          yMemberPath="birthRate"
          [dataSource]="countryDemographicEurope"
          markerType="Circle"
          showDefaultTooltip="true">
          </igx-scatter-series>
          <igx-scatter-series
          name="scatterSeries2"
          #scatterSeries2
          title="Africa"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          xMemberPath="deathRate"
          yMemberPath="birthRate"
          [dataSource]="countryDemographicAfrican"
          markerType="Circle"
          showDefaultTooltip="true">
          </igx-scatter-series>
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

### Angular Shape Chart

The Angular Shape Charts is a group of chart that take array of shapes (array or arrays of X/Y points) and render them as collection of polygons or polylines in Cartesian (x, y) coordinate system. They are often used highlight regions in scientific data or they can be used to plot diagrams, blueprints, or even floor plan of buildings. Learn more about our [shape chart](types/shape-chart.md).

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartShapeModule, IgxDataChartShapeCoreModule, IgxLegendModule, IgxDataChartInteractivityModule, IgxDataChartScatterModule } from "igniteui-angular-charts";


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
    IgxDataChartShapeModule,
    IgxDataChartShapeCoreModule,
    IgxLegendModule,
    IgxDataChartInteractivityModule,
    IgxDataChartScatterModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxStyleShapeEventArgs } from "igniteui-angular-charts";
import { IgxScatterPolygonSeriesComponent } from "igniteui-angular-charts";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit {

    @ViewChild('airplaneShapeSeries', { static: true })
    public airplaneShapeSeries: IgxScatterPolygonSeriesComponent;

    @ViewChild('airplaneSeatSeries', { static: true })
    public airplaneSeatSeries: IgxScatterPolygonSeriesComponent;

    @ViewChild('seatTooltip', { static: true })
    public seatTooltip: TemplateRef<object>;

    constructor() {
    }

    public ngAfterViewInit() {

      fetch('https://static.infragistics.com/xplatform/json/airplane-shape.json')
        .then((response) => response.json())
        .then((data) => this.onLoadedJsonShape(data));

      fetch('https://static.infragistics.com/xplatform/json/airplane-seats.json')
        .then((response) => response.json())
        .then((data) => this.onLoadedJsonSeats(data));
    }

    public onLoadedJsonShape(jsonData: any[]) {
        // console.log('airplane-shape.json ' + jsonData.length);
        this.airplaneShapeSeries.dataSource = jsonData;
    }

    public onLoadedJsonSeats(jsonData: any[]) {
      // console.log('airplane-seats.json ' + jsonData.length);
      this.airplaneSeatSeries.dataSource = jsonData;
      this.airplaneSeatSeries.showDefaultTooltip = true;
      this.airplaneSeatSeries.tooltipTemplate = this.seatTooltip;
    }

    public onStylingShape(ev: { sender: any, args: IgxStyleShapeEventArgs }) {

        ev.args.shapeOpacity = 1.0;
        ev.args.shapeStrokeThickness = 0.5;
        ev.args.shapeStroke = 'Black';

        const itemRecord = ev.args.item as any;
        if (itemRecord.class === 'First') {
            ev.args.shapeFill = 'DodgerBlue';
        }
        if (itemRecord.class === 'Business') {
            ev.args.shapeFill = 'LimeGreen';
        }
        if (itemRecord.class === 'Premium') {
            ev.args.shapeFill = 'Orange';
        }
        if (itemRecord.class === 'Economy') {
          ev.args.shapeFill = 'Red';
        }

        if (itemRecord.status === 'Sold') {
          ev.args.shapeFill = 'Gray';
        }
    }
}
```
```html
<div class="container vertical">
    <div class="options vertical">
        <label id="legendTitle">Airplane Seating Chart (Polygons)</label>
    </div>

    <div class="custom-legend">
      <div><span style="background: DodgerBlue; "></span><label>First Class</label></div>
      <div><span style="background: LimeGreen; "></span><label>Business Class</label></div>
      <div><span style="background: Orange; "></span><label>Premium Class</label></div>
      <div><span style="background: Red; "></span><label>Economy Class</label></div>
      <div><span style="background: Gray; "></span><label>Sold Seat</label> </div>
      <div><span style="background: LightGray; "></span><label>Airplane</label> </div>
    </div>

    <div class="container">
        <igx-data-chart isHorizontalZoomEnabled="true" isVerticalZoomEnabled="true"
          width="100%"
          height="100%">
            <igx-numeric-x-axis #xAxis name="xAxis" minimumValue="-1000" maximumValue="1000" interval="200"></igx-numeric-x-axis>
            <igx-numeric-y-axis #yAxis name="yAxis" minimumValue="-600" maximumValue="600" interval="200"></igx-numeric-y-axis>

             <igx-scatter-polygon-series name="airplaneShapeSeries" #airplaneShapeSeries
                [xAxis]="xAxis"
                [yAxis]="yAxis" shapeMemberPath="points" thickness="0.5"
                title="Airplane Shape" brush="LightGray" outline="Black">
             </igx-scatter-polygon-series>

             <igx-scatter-polygon-series name="airplaneSeatSeries" #airplaneSeatSeries
                [xAxis]="xAxis"
                [yAxis]="yAxis" shapeMemberPath="points" thickness="0.5"
                title="Airplane Seats"
                (styleShape)="onStylingShape($event)">
             </igx-scatter-polygon-series>

        </igx-data-chart>
    </div>

    <div class="options horizontal">
      <div><span style="background: dodgerblue; "></span><label>First Class</label></div>
      <div><span style="background: LimeGreen; "></span><label>Business Class</label></div>
      <div><span style="background: Orange; "></span><label>Premium Class</label></div>
      <div><span style="background: red; "></span><label>Economy Class</label></div>
      <div><span style="background: gray; "></span><label>Sold Seat</label> </div>
    </div>
</div>

<ng-template let-series="series" let-item="item" #seatTooltip>
  <div>
      <span>{{item.class}} Class</span>
      <br />
      <span>Seat: {{item.seat}}</span>
      <br />
      <span>Price: ${{item.price}}</span>
      <br />
      <span>Status: {{item.status}}</span>
  </div>
</ng-template>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

### Angular Spline Chart

The Angular Spline Chart, or Spline Graph is a type of category line graph shows the continuous data values represented by points connected by smooth line segments of one or more quantities over a period time for showing trends and performing comparative analysis. The Y-Axis (labels on left side) show a numeric value, while the X-Axis (bottom labels) are showing a time-series or comparison category. You can include one or more data sets to compare, which would render as multiple lines in the chart. The Angular Spline chart is identical to the Angular Spline chart, the only different being the line chart is points connected by straight lines, and the spline chart points are connected by smooth curves. Learn more about our [spline chart](types/spline-chart.md).

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxLegendModule, IgxCategoryChartModule, IgxDataChartInteractivityModule } from 'igniteui-angular-charts';

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
    IgxCategoryChartModule,
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
      chartType="Spline"
      [dataSource]="countryRenewableElectricity"
      [legend]="legend"
      yAxisTitle="TWh"
      isTransitionInEnabled="true"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false"
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

### Angular Step Chart

The Angular Step Chart, or Step Graph, is a category charts that renders a collection of data points connected by continuous vertical and horizontal lines forming a step-like progression. Values are represented on the Y-Axis (left labels) and categories are displayed on the X-Axis (bottom labels). The Angular Step Line chart emphasizes the amount of change over a period of time or compares multiple items. The Angular Step Line chart is identical to the Angular Step Area Chart in all aspects except that the area below the step lines is not filled in. Learn more about our [step chart](types/step-chart.md)

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxLegendModule, IgxCategoryChartModule, IgxDataChartInteractivityModule } from 'igniteui-angular-charts';

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
    IgxCategoryChartModule,
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
      [legend]="legend"
      chartType="StepLine"
      [dataSource]="countryRenewableElectricity"
      includedProperties="year, europe, china, america"
      isCategoryHighlightingEnabled="false"
      isSeriesHighlightingEnabled="true"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false"
      xAxisInterval="1"
      yAxisTitle="TWh"
      crosshairsSnapToData="true">
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

<!-- ### Angular Timeline / Time-Series Charts

A Time-Series Chart, or Timeline Graph, is a visualization that treats the data as a sequence of category data items that are sorted by then rendered by date. Labels on this axis are placed along the X-Axis (bottom Axis), according to the date-time value. The Angular Time-Series is use to show Financial Series, Range Series, and Category Series (Line, Area, Column, Point, Spline, Scatter, Waterfall and the Stacked equivalents of those chart types). The Time-Series also supports the ability to exclude intervals of data with breaks. As a result, labels will not appear at the excluded interval. For example, working/non-working days, holidays, or weekends. -->

### Angular Treemap

The Ignite UI for Angular Treemap displays hierarchical (tree-structured) data as a set of nested nodes. Each branch of the tree is given a treemap node, which is then tiled with smaller nodes representing sub-branches. Each node's rectangle has an area proportional to a specified dimension on the data. Often the nodes are colored to show a separate dimension of the data. Learn more about our [treemaps](types/treemap-chart.md).

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxTreemapModule } from 'igniteui-angular-charts';

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
    IgxTreemapModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CountyHierarchicalDataItem, CountyHierarchicalData } from './CountyHierarchicalData';
import { IgxTreemapComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("treemap", { static: true } )
	private treemap: IgxTreemapComponent
    private _countyHierarchicalData: CountyHierarchicalData = null;
    public get countyHierarchicalData(): CountyHierarchicalData {
        if (this._countyHierarchicalData == null)
        {
            this._countyHierarchicalData = new CountyHierarchicalData();
        }
        return this._countyHierarchicalData;
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
      Comparing Population of Countries
  </div>
  <div class="container fill">
      <igx-treemap
      name="treemap"
      #treemap
      [dataSource]="countyHierarchicalData"
      parentIdMemberPath="parent"
      idMemberPath="name"
      labelMemberPath="name"
      valueMemberPath="population"
      fillScaleMode="Value"
      fillScaleMinimumValue="0"
      fillScaleMaximumValue="1500000000"
      fillBrushes="rgba(78, 98, 207, 1) rgba(138, 88, 214, 1)"
      isFillScaleLogarithmic="true"
      rootTitle="Countries"
      headerDisplayMode="Overlay"
      parentNodeBottomPadding="0"
      parentNodeLeftPadding="0"
      parentNodeRightPadding="0"
      parentNodeTopPadding="0"
      outline="black"
      strokeThickness="1">
      </igx-treemap>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Angular Charts Key Features

Show how your data changes over time with our built-in Time Axis. We’ll dynamically change time scales and label formats, as you interact with your chart. We’ve included a complete Financial Chart with all of the features you’ve come to expect in your financial charts, like Yahoo Finance or Google Finance.

### Dynamic Charts

Visualize your data by creating new [Composite Chart](types/composite-chart.md) and overlapping multiple series in single chart. In the Chart, you can display and overlap multiple chart columns to create stacked columns.

### Custom Tooltips

Visualize your data by creating new composite views and overlapping multiple series in single chart. In the Chart, you can create [Custom Tooltips](features/chart-tooltips.md#angular-chart-tooltip-template) with images, data binding, and even combine tooltips of multiple series into single tooltip.

### High-Performance, Real-Time Charting

Display thousands of data points with milliseconds-level updates in real time with live, streaming data. You will experience no lag, no screen-flicker, and no visual delays, even as you interact with the chart on a touch-device. For a demo, refer to the [Chart with High-Frequency](features/chart-performance.md#angular-chart-with-high-frequency) topic.

### High-Volume Data Handling

Optimize [Chart Performance](features/chart-performance.md) to render millions of data points while the chart keeps providing smooth performance when end-users tries zooming in/out or navigating chart content. For a demo, refer to the [Chart with High-Volume](features/chart-performance.md#angular-chart-with-high-volume) topic.

### Modular Design

The Angular chart is designed for modularity. Only features that are needed are part of your deployment, so you get the smallest possible footprint in your rendered pages.

<img class="responsive-img" src="../../images/charts/ignite-ui-angular-financial-chart-modular-design-1100.jpg"
alt="Angular Charts Modular Design"  />

### Smart Data Binding

Let us choose the chart type. Our smart Data Adapter automatically chooses the best chart type for the data. All you do is set the data source and we do the rest.

<img class="responsive-img" src="../../images/charts/ignite-ui-angular-financial-chart-smart-data-binding-1100.jpg"
alt="Angular Charts Smart Data Binding"/>

### Trendlines

Angular Charts support all [Trendlines](features/chart-trendlines.md) you’ll ever need, including linear (x), quadratic (x2), cubic (x3), quartic (x4), quintic (x5), logarithmic (log x), exponential (ex), and power law (axk + o(xk)) trend lines.

<img class="responsive-img" src="../../images/charts/ignite-ui-angular-financial-chart-trendlines-1100.jpg"
alt="Angular Charts Trendlines"/>

### Interactive Panning and Zooming

Use single or multi-touch, keyboard, zoom bar, mouse wheel, drag-select for any rectangular region with the mouse to zoom in for close-up look at data points, scroll data history, or pan data regions.

<img class="responsive-img" src="../../images/charts/ignite-ui-angular-financial-chart-zooming-1100.gif"
alt="Angular Charts Interactive Panning and Zooming"/>

### Markers, Tooltips, and Templates

Use one of 10 [Marker Types](features/chart-markers.md) or create your own [Marker Template](features/chart-markers.md#angular-chart-marker-templates) to highlight data or use simple [Tooltips](features/chart-tooltips.md) or multi-axis and multi-series chart with [Custom Tooltips](features/chart-tooltips.md#angular-chart-tooltip-template) to give more context and meaning to your data.

<img class="responsive-img" src="../../images/charts/ignite-ui-angular-financial-chart-custom-tooltips-1100.jpg"
alt="Angular Charts Markers, Tooltips, and Templates"/>

## But Wait, There’s More!

If you are considering any other Angular Charts on the market, here are a few things to think about:

- We include over 65 Angular chart types and combination charts, with the simplest configuration on the market with our smart data adapter.
- Our charts are optimized on all platforms including Angular, Blazor, jQuery / JavaScript, React, UNO, UWP, WPF, Windows Forms, WebComponents, WinUI, and Xamarin. They support the same API and same features on every platform.
- Our stock chart and financial charting gives you everything you need for a Yahoo Finance or Google Finance-like experience – all with a single line of code.
- We test against everyone elses performance. Everyone says they are fast and can handle lots of data, but we can prove it. See for yourself how we handle high-volume data and real-time data streaming.
- We are here 24x5. Infragistics has global support that is always online. For North America, Asia Pacific, Middle East, and Europe, we are on the clock when you are!
- We have many more UI controls in Angular besides the Charts. We offer a complete Angular solution to build your applications!

<!-- Angular -->

- Ignite UI for Angular is built on Angular for the Angular developer, with zero 3rd party dependencies. We are 100% optimized for Angular.
- We offer the world’s first, and only, end-to-end comprehensive design to code platform for UX Designers, Visual Designers, and Developers that will generate pixel-perfect Angular controls from Figma designs. With Indigo.Design, everything you craft in Figma from our Indigo Design System matches to our Ignite UI for Angular controls.

<!-- end: Angular -->

## API References

All types of chart types mentioned in this topic are implemented in these API components:

- [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)
- [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)
- [`IgxFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html)
- [`IgxTreemapComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtreemapcomponent.html)
