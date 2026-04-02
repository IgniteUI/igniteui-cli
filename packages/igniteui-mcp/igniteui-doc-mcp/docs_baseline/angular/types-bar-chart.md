---
title: Angular Bar Chart and Graph | Ignite UI for Angular
_description: Angular Bar Chart is among the most common category chart types used to quickly compare frequency, count, total, or average of data in different categories. Try for FREE.
_keywords: Angular Charts, Bar Chart, Bar Graph, Horizontal Chart, Infragistics
_license: commercial
mentionedTypes: ["XamDataChart", "BarSeries", "StackedBarSeries", "Stacked100BarSeries", "Series"]
namespace: Infragistics.Controls.Charts
_tocName: Bar Chart
_premium: true
---

# Angular Bar Chart

The Ignite UI for Angular Bar Chart, Bar Graph, or Horizontal Bar Chart, is among the most common category chart types used to quickly compare frequency, count, total, or average of data in different categories with data encoded by horizontal bars with equal heights but different lengths. This chart is ideal for showing variations in the value of an item over time. Data is represented using a collection of rectangles that extend from the left to right of the chart towards the values of data points. Bar Chart is very similar to [Column Chart](column-chart.md) except that Bar Chart renders with 90 degrees clockwise rotation and therefore it has horizontal orientation (left to right) while [Column Chart](column-chart.md) has vertical orientation (up and down)

## Angular Bar Chart Example

You can create Angular Bar Chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data sources to multiple [`IgxBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbarseriescomponent.html), as shown in the example below:

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

## Bar Chart Recommendations

### Are Angular Bar Charts right for your project?

Angular Bar Chart includes several variants based on your data or how you want to tell the correct story with your data. These include:

- Grouped Bar Chart
- Stacked Bar Chart
- Polar Bar Chart
- Stacked 100 Bar Chart

### Bar Chart Use Cases

There are several common use cases for choosing a Bar Chart:

- You need to show trends over time or a numeric value change in a category of data.
- You need to compare data values of 1 or more data series.
- You want to show a part-to-whole comparison.
- You want to show top or bottom percentage of categories.
- Analyzing multiple data points grouped in sub-categories (Stacked Bar).

These use cases are commonly used for the following scenarios:

- Sales Management.
- Inventory Management.
- Stock Charts.
- Any String Value Comparing a Numeric Value or Time-Series Value.

### Bar Chart Best Practices

- Start you numeric Axis at 0.
- Use a single color for the bars.
- Be sure the space separating each bar is 1/2 the width of the bar itself.
- Be sure ranking or comparing ordered categories (items) are sorted in increasing or decreasing order.
- Right-align category values on the Y-Axis (left side labels of chart) for readability.

### When Not to Use Bar Chart

- You have too much data so the Y-Axis can't fit in the space or is not legible.
- You need a detailed Time-Series analysis  - consider a [Line Chart](line-chart.md) with a Time-Series for this type of data.

### Bar Chart Data Structure

- The data source must be an array or a list of data items.
- The data source must contain at least one data item.
- The list must contain at least one data column (string or date time).
- The list must contain at least one numeric data column.

<div class="divider--half"></div>

## Angular Bar Chart with Single Series

Bar Chart belongs to a group of Category Series and it is rendered using a collection of rectangles that extend from the left to right of the chart towards the values of data points. You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbarseriescomponent.html), as shown in the example below:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartCategoryCoreModule, IgxDataChartCategoryModule, IgxDataChartAnnotationModule, IgxDataChartInteractivityModule, IgxDataChartVerticalCategoryModule } from 'igniteui-angular-charts';

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
    IgxDataChartCoreModule,
    IgxDataChartCategoryCoreModule,
    IgxDataChartCategoryModule,
    IgxDataChartAnnotationModule,
    IgxDataChartInteractivityModule,
    IgxDataChartVerticalCategoryModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { OnlineShoppingSearchesItem, OnlineShoppingSearches } from './OnlineShoppingSearches';
import { IgxDataChartComponent, IgxCategoryYAxisComponent, IgxNumericXAxisComponent, IgxCategoryHighlightLayerComponent, IgxBarSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	private chart: IgxDataChartComponent
	@ViewChild("yAxis", { static: true } )
	private yAxis: IgxCategoryYAxisComponent
	@ViewChild("xAxis", { static: true } )
	private xAxis: IgxNumericXAxisComponent
	@ViewChild("categoryHighlightLayer", { static: true } )
	private categoryHighlightLayer: IgxCategoryHighlightLayerComponent
	@ViewChild("barSeries1", { static: true } )
	private barSeries1: IgxBarSeriesComponent
	@ViewChild("tooltips", { static: true } )
	private tooltips: IgxDataToolTipLayerComponent
    private _onlineShoppingSearches: OnlineShoppingSearches = null;
    public get onlineShoppingSearches(): OnlineShoppingSearches {
        if (this._onlineShoppingSearches == null)
        {
            this._onlineShoppingSearches = new OnlineShoppingSearches();
        }
        return this._onlineShoppingSearches;
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
      Where Online Shoppers Start Their Search
  </div>
  <div class="container fill">
      <igx-data-chart
      name="Chart"
      #chart
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false">
          <igx-category-y-axis
          name="yAxis"
          #yAxis
          label="shop"
          useEnhancedIntervalManagement="true"
          enhancedIntervalPreferMoreCategoryLabels="true"
          [dataSource]="onlineShoppingSearches"
          isInverted="true"
          gap="0.5"
          overlap="-0.1">
          </igx-category-y-axis>
          <igx-numeric-x-axis
          name="xAxis"
          #xAxis
          labelFormat="{0}%">
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
          valueMemberPath="percent"
          [dataSource]="onlineShoppingSearches"
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

## Angular Bar Chart with Multiple Series

The Bar Chart is able to render multiple bars per category for comparison purposes. In this example, the Bar Chart is comparing box office revenue amongst popular movie franchises. You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to multiple [`IgxBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbarseriescomponent.html), as shown in the example below:

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

## Angular Bar Chart Styling

The Bar Chart can be styled, and allows for the ability to use [annotation values](../features/chart-annotations.md) for each bar, for example, to demonstrate percent comparisons. You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbarseriescomponent.html) and adding a [`IgxCalloutLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcalloutlayercomponent.html), as shown in the example below:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartCategoryCoreModule, IgxDataChartInteractivityModule, IgxDataChartVerticalCategoryModule, IgxAnnotationLayerProxyModule, IgxCalloutLayerModule, IgxDataChartAnnotationModule } from 'igniteui-angular-charts';

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
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxDataChartCategoryCoreModule,
    IgxDataChartInteractivityModule,
    IgxDataChartVerticalCategoryModule,
    IgxAnnotationLayerProxyModule,
    IgxCalloutLayerModule,
    IgxDataChartAnnotationModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { OnlineShoppingSearchesItem, OnlineShoppingSearches } from './OnlineShoppingSearches';
import { IgxDataChartComponent, IgxCategoryYAxisComponent, IgxNumericXAxisComponent, IgxCategoryHighlightLayerComponent, IgxBarSeriesComponent, IgxCalloutLayerComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	private chart: IgxDataChartComponent
	@ViewChild("yAxis", { static: true } )
	private yAxis: IgxCategoryYAxisComponent
	@ViewChild("xAxis", { static: true } )
	private xAxis: IgxNumericXAxisComponent
	@ViewChild("categoryHighlightLayer", { static: true } )
	private categoryHighlightLayer: IgxCategoryHighlightLayerComponent
	@ViewChild("barSeries1", { static: true } )
	private barSeries1: IgxBarSeriesComponent
	@ViewChild("calloutLayer1", { static: true } )
	private calloutLayer1: IgxCalloutLayerComponent
	@ViewChild("tooltips", { static: true } )
	private tooltips: IgxDataToolTipLayerComponent
    private _onlineShoppingSearches: OnlineShoppingSearches = null;
    public get onlineShoppingSearches(): OnlineShoppingSearches {
        if (this._onlineShoppingSearches == null)
        {
            this._onlineShoppingSearches = new OnlineShoppingSearches();
        }
        return this._onlineShoppingSearches;
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
      Where Online Shoppers Start Their Search
  </div>
  <div class="container fill">
      <igx-data-chart
      name="Chart"
      #chart
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false">
          <igx-category-y-axis
          name="yAxis"
          #yAxis
          label="shop"
          [dataSource]="onlineShoppingSearches"
          isInverted="true"
          gap="0.75">
          </igx-category-y-axis>
          <igx-numeric-x-axis
          name="xAxis"
          #xAxis
          interval="20"
          maximumValue="80"
          minimumValue="0"
          labelFormat="{0}%">
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
          valueMemberPath="percent"
          [dataSource]="onlineShoppingSearches"
          showDefaultTooltip="true"
          isTransitionInEnabled="true"
          isHighlightingEnabled="true"
          brush="rgba(201, 56, 207, 1)"
          outline="rgba(133, 6, 138, 1)"
          thickness="2"
          areaFillOpacity="0.5"
          markerType="Hidden">
          </igx-bar-series>
          <igx-callout-layer
          name="CalloutLayer1"
          #calloutLayer1
          isAutoCalloutBehaviorEnabled="true"
          calloutTextColor="rgba(133, 6, 138, 1)"
          calloutBackground="rgba(0, 0, 0, 0)"
          calloutLeaderBrush="rgba(0, 0, 0, 0)"
          [dataSource]="onlineShoppingSearches">
          </igx-callout-layer>
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

## Angular Stacked Bar Chart

A Stacked Bar Chart, or Stacked Bar Graph, is a type of category chart that is used to compare the composition of different categories of data by displaying different sized fragments in the horizontal bars of the chart. The length of each bar, or stack of fragments, is proportionate to its overall value.

The Stacked Bar Chart differs from the Bar Chart in that the data points representing your data are stacked next to each other horizontally to visually group your data. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the X-Axis, and all negative values are grouped on the negative side of the X-Axis.

You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxStackedBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedbarseriescomponent.html), as shown in the example below:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxLegendModule, IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartCategoryCoreModule, IgxDataChartInteractivityModule, IgxDataChartAnnotationModule, IgxDataChartStackedModule, IgxStackedFragmentSeriesModule, IgxCalloutLayerModule } from 'igniteui-angular-charts';

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
    IgxStackedFragmentSeriesModule,
    IgxCalloutLayerModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { EnergyRenewableConsumptionItem, EnergyRenewableConsumption } from './EnergyRenewableConsumption';
import { IgxLegendComponent, IgxDataChartComponent, IgxCategoryYAxisComponent, IgxNumericXAxisComponent, IgxStackedBarSeriesComponent, IgxStackedFragmentSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	@ViewChild("stackedBarSeries", { static: true } )
	private stackedBarSeries: IgxStackedBarSeriesComponent
	@ViewChild("s1", { static: true } )
	private s1: IgxStackedFragmentSeriesComponent
	@ViewChild("s2", { static: true } )
	private s2: IgxStackedFragmentSeriesComponent
	@ViewChild("s3", { static: true } )
	private s3: IgxStackedFragmentSeriesComponent
	@ViewChild("s4", { static: true } )
	private s4: IgxStackedFragmentSeriesComponent
	@ViewChild("dataToolTipLayer", { static: true } )
	private dataToolTipLayer: IgxDataToolTipLayerComponent
    private _energyRenewableConsumption: EnergyRenewableConsumption = null;
    public get energyRenewableConsumption(): EnergyRenewableConsumption {
        if (this._energyRenewableConsumption == null)
        {
            this._energyRenewableConsumption = new EnergyRenewableConsumption();
        }
        return this._energyRenewableConsumption;
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
      Renewable Energy Consumption
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
          <igx-category-y-axis
          name="yAxis"
          #yAxis
          [dataSource]="energyRenewableConsumption"
          label="location"
          isInverted="true"
          gap="0.75">
          </igx-category-y-axis>
          <igx-numeric-x-axis
          name="xAxis"
          #xAxis
          minimumValue="0"
          title="TWh">
          </igx-numeric-x-axis>
          <igx-stacked-bar-series
          name="stackedBarSeries"
          #stackedBarSeries
          [dataSource]="energyRenewableConsumption"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          showDefaultTooltip="true"
          areaFillOpacity="1">
              <igx-stacked-fragment-series
              name="s1"
              #s1
              valueMemberPath="hydro"
              title="Hydro">
              </igx-stacked-fragment-series>
              <igx-stacked-fragment-series
              name="s2"
              #s2
              valueMemberPath="wind"
              title="Wind">
              </igx-stacked-fragment-series>
              <igx-stacked-fragment-series
              name="s3"
              #s3
              valueMemberPath="solar"
              title="Solar">
              </igx-stacked-fragment-series>
              <igx-stacked-fragment-series
              name="s4"
              #s4
              valueMemberPath="other"
              title="Other">
              </igx-stacked-fragment-series>
          </igx-stacked-bar-series>
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

## Angular Stacked 100% Bar Chart

The Angular Stacked 100% Bar Chart is identical to the Angular Stacked Bar Chart in all aspects except in their treatment of the values on X-Axis (bottom labels of the chart). Instead of presenting a direct representation of the data, the stacked 100 bar chart presents the data in terms of percent of the sum of all values in a data point.

You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxStacked100BarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100barseriescomponent.html), as shown in the example below:

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
import { EnergyRenewableConsumptionItem, EnergyRenewableConsumption } from './EnergyRenewableConsumption';
import { IgxLegendComponent, IgxDataChartComponent, IgxCategoryYAxisComponent, IgxNumericXAxisComponent, IgxStacked100BarSeriesComponent, IgxStackedFragmentSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	@ViewChild("stacked100BarSeries", { static: true } )
	private stacked100BarSeries: IgxStacked100BarSeriesComponent
	@ViewChild("s1", { static: true } )
	private s1: IgxStackedFragmentSeriesComponent
	@ViewChild("s2", { static: true } )
	private s2: IgxStackedFragmentSeriesComponent
	@ViewChild("s3", { static: true } )
	private s3: IgxStackedFragmentSeriesComponent
	@ViewChild("s4", { static: true } )
	private s4: IgxStackedFragmentSeriesComponent
	@ViewChild("dataToolTipLayer", { static: true } )
	private dataToolTipLayer: IgxDataToolTipLayerComponent
    private _energyRenewableConsumption: EnergyRenewableConsumption = null;
    public get energyRenewableConsumption(): EnergyRenewableConsumption {
        if (this._energyRenewableConsumption == null)
        {
            this._energyRenewableConsumption = new EnergyRenewableConsumption();
        }
        return this._energyRenewableConsumption;
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
      Renewable Energy Consumption
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
          <igx-category-y-axis
          name="yAxis"
          #yAxis
          [dataSource]="energyRenewableConsumption"
          label="location"
          isInverted="true">
          </igx-category-y-axis>
          <igx-numeric-x-axis
          name="xAxis"
          #xAxis
          minimumValue="0"
          title="TWh">
          </igx-numeric-x-axis>
          <igx-stacked-100-bar-series
          name="stacked100BarSeries"
          #stacked100BarSeries
          [dataSource]="energyRenewableConsumption"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          showDefaultTooltip="true"
          areaFillOpacity="1">
              <igx-stacked-fragment-series
              name="s1"
              #s1
              valueMemberPath="hydro"
              title="Hydro">
              </igx-stacked-fragment-series>
              <igx-stacked-fragment-series
              name="s2"
              #s2
              valueMemberPath="wind"
              title="Wind">
              </igx-stacked-fragment-series>
              <igx-stacked-fragment-series
              name="s3"
              #s3
              valueMemberPath="solar"
              title="Solar">
              </igx-stacked-fragment-series>
              <igx-stacked-fragment-series
              name="s4"
              #s4
              valueMemberPath="other"
              title="Other">
              </igx-stacked-fragment-series>
          </igx-stacked-100-bar-series>
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
- [Line Chart](line-chart.md)
- [Spline Chart](spline-chart.md)
- [Stacked Chart](stacked-chart.md)

## API References

The following table lists API members mentioned in the above sections:

- [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)
- `ItemsSource`
- [`IgxBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbarseriescomponent.html)
- [`IgxCalloutLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcalloutlayercomponent.html)
- [`IgxStackedBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedbarseriescomponent.html)
- [`IgxStacked100BarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100barseriescomponent.html)
- [`IgxStackedBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedbarseriescomponent.html)
