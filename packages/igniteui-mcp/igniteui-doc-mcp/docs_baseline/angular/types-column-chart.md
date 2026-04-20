---
title: Angular Column Chart | Data Visualization | Infragistics
_description: Infragistics' Angular Column Chart
_keywords: Angular Charts, Column Chart, Column Graph, Vertical Bar Chart, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "XamDataChart", "ColumnSeries", "WaterfallSeries", "StackedColumnSeries", "Stacked100ColumnSeries", "RangeColumnSeries", "RadialColumnSeries", "CategoryChartType", "Series"]
namespace: Infragistics.Controls.Charts
_tocName: Column Chart
_premium: true
---

# Angular Column Chart

The Ignite UI for Angular Column Char, Column Graph, or Vertical Bar Chart is among the most common category chart types used to quickly compare frequency, count, total, or average of data in different categories with data encoded by columns with equal widths but different heights. These columns extend from the bottom to top of the chart towards the values of data points. This chart emphasizes the amount of change over a period of time or compares multiple items. Column Chart is very similar to [Bar Chart](bar-chart.md) except that Column Chart renders in vertical orientation (up and down) while [Bar Chart](bar-chart.md) has horizontal orientation (left to right) or 90 degrees clockwise rotation.

## Angular Column Chart Example

You can create Angular Column Chart in the [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) control by binding your data and setting [`chartType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#chartType) to **Column** enum, as shown in the example below:

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

## Column Charts Recommendations

### Column Charts Use Cases

There are several uses cases for Column Charts. When you:

- Need to compare data values of related categories.
- Need to compare data over a time period.
- Need to display negative values as well as positive values in the same data set.
- Have a large, high-volume data set that fits well with the chart interactions like Panning, Zooming, and Drill-down.

### Column Charts Best Practices

- Always start the Y-Axis (left or right axis) at 0 so data comparison is accurate.
- Order time-series data from left to right.

### When Not to Use Column Charts

- You have many (more than 10 or 12) series of data. Your goal is to ensure the chart is readable.

### Column Charts Data Structure

- The data model must contain at least one numeric property.
- The data model may contain an options string or date-time property for labels.
- The data source should contain at least one data item.

## Angular Column Chart with Single Series

Column Chart belongs to a group of Category Series and it is rendered using a collection of rectangles that extend from the bottom to top of the chart towards the values of data points.

You can create this type of chart in the [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) control by binding your data and setting the [`chartType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#chartType) property to **Column** value, as shown in the example below:

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
import { TemperatureAverageDataItem, TemperatureAverageData } from './TemperatureAverageData';
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
    private _temperatureAverageData: TemperatureAverageData = null;
    public get temperatureAverageData(): TemperatureAverageData {
        if (this._temperatureAverageData == null)
        {
            this._temperatureAverageData = new TemperatureAverageData();
        }
        return this._temperatureAverageData;
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
      Average Temperature Range in New York
  </div>
  <div class="container fill">
      <igx-category-chart
      name="chart"
      #chart
      chartType="Column"
      [dataSource]="temperatureAverageData"
      yAxisTitle="Temperature in Degrees Celsius"
      yAxisTitleLeftMargin="10"
      yAxisTitleRightMargin="5"
      yAxisLabelLeftMargin="0"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false"
      isCategoryHighlightingEnabled="false"
      highlightingMode="FadeOthersSpecific"
      highlightingBehavior="NearestItemsAndSeries"
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

## Angular Column Chart with Multiple Series

The Column Chart is able to render multiple columns per category for comparison purposes. You can create this type of chart in the [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) control by binding your data and setting the [`chartType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#chartType) property to **Column** value, as shown in the example below:

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

## Angular Column Chart Styling

The Angular Column Chart has many options for styling and modification of the visual appearance.

You can create this type of chart in the [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) control by binding your data, as shown in the example below:

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
import { EnergyRenewableConsumptionItem, EnergyRenewableConsumption } from './EnergyRenewableConsumption';
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
      Percentage Change in Energy Generation
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
      [dataSource]="energyRenewableConsumption"
      chartType="Column"
      [legend]="legend"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false"
      isSeriesHighlightingEnabled="true"
      brushes="rgba(157, 231, 114, 1) rgba(139, 91, 177, 1) rgba(109, 177, 255, 1) rgba(238, 88, 121, 1) rgba(248, 161, 95, 1)"
      outlines="white"
      xAxisMajorStroke="lightgray"
      xAxisGap="0.5"
      crosshairsDisplayMode="None"
      isCategoryHighlightingEnabled="false"
      highlightingMode="FadeOthersSpecific"
      highlightingBehavior="NearestItemsAndSeries">
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

## Advanced Types of Column Charts

The following sections explain more advanced types of Angular Column Charts that can be created using the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control instead of [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) control with simplified API.

## Angular Waterfall Chart

The Waterfall Chart belongs to a group of category charts and it is rendered using a collection of vertical columns that show the difference between consecutive data points. The columns are color coded for distinguishing between positive and negative changes in value. The Waterfall Chart is similar in appearance to the [Range Column Chart](column-chart.md#angular-range-column-chart), but it requires only one numeric data column rather than two columns for each data point.

You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxWaterfallSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxwaterfallseriescomponent.html), as shown in the example below:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartCategoryModule } from 'igniteui-angular-charts';

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
    IgxDataChartCategoryModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CompanyIncomeDataItem, CompanyIncomeData } from './CompanyIncomeData';
import { IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxWaterfallSeriesComponent } from 'igniteui-angular-charts';

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
	@ViewChild("xAxis", { static: true } )
	private xAxis: IgxCategoryXAxisComponent
	@ViewChild("yAxis", { static: true } )
	private yAxis: IgxNumericYAxisComponent
	@ViewChild("waterfallSeries1", { static: true } )
	private waterfallSeries1: IgxWaterfallSeriesComponent
	@ViewChild("waterfallSeries2", { static: true } )
	private waterfallSeries2: IgxWaterfallSeriesComponent
    private _companyIncomeData: CompanyIncomeData = null;
    public get companyIncomeData(): CompanyIncomeData {
        if (this._companyIncomeData == null)
        {
            this._companyIncomeData = new CompanyIncomeData();
        }
        return this._companyIncomeData;
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
      Facebook Consolidated Statements of Income
  </div>
  <div class="container fill">
      <igx-data-chart
      name="chart"
      #chart
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false">
          <igx-category-x-axis
          name="xAxis"
          #xAxis
          label="category"
          interval="1"
          [dataSource]="companyIncomeData"
          overlap="1">
          </igx-category-x-axis>
          <igx-numeric-y-axis
          name="yAxis"
          #yAxis
          title="Millions of Dollars"
          titleAngle="90"
          titleLeftMargin="10"
          minimumValue="0"
          maximumValue="60">
          </igx-numeric-y-axis>
          <igx-waterfall-series
          name="WaterfallSeries1"
          #waterfallSeries1
          title="Value"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          [dataSource]="companyIncomeData"
          valueMemberPath="costs"
          showDefaultTooltip="true"
          isTransitionInEnabled="true">
          </igx-waterfall-series>
          <igx-waterfall-series
          name="WaterfallSeries2"
          #waterfallSeries2
          title="Value"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          [dataSource]="companyIncomeData"
          brush="rgba(116, 70, 185, 1)"
          outline="rgba(116, 70, 185, 1)"
          valueMemberPath="netIncome"
          showDefaultTooltip="true"
          isTransitionInEnabled="true">
          </igx-waterfall-series>
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

## Angular Stacked Column Chart

The Stacked Column Chart is similar to the [Category Column Chart](column-chart.md#angular-column-chart-example) in all aspects, except the series are represented on top of one another rather than to the side. The Stacked Column Chart is used to show comparing results between series. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the Y-Axis, and all negative values are grouped on the negative side of the Y-Axis. The Stacked Column Chart uses the same concepts of data plotting as the [Stacked Bar Chart](stacked-chart.md#angular-stacked-bar-chart) but data points are stacked along vertical line (Y-Axis) rather than along horizontal line (X-Axis).

You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxStackedBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedbarseriescomponent.html), as shown in the example below:

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
import { IgxLegendComponent, IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxStackedColumnSeriesComponent, IgxStackedFragmentSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	@ViewChild("stackedColumnSeries", { static: true } )
	private stackedColumnSeries: IgxStackedColumnSeriesComponent
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
          titleLeftMargin="10"
          labelFormat="{0} m">
          </igx-numeric-y-axis>
          <igx-stacked-column-series
          name="stackedColumnSeries"
          #stackedColumnSeries
          [dataSource]="continentsBirthRate"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          showDefaultTooltip="false">
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
          </igx-stacked-column-series>
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

## Angular Stacked 100% Column Chart

The Stacked 100% Column Chart is identical to the [Stacked Column Chart](stacked-chart.md#angular-stacked-column-chart) in all aspects except in their treatment of the values on Y-Axis. Instead of presenting a direct representation of the data, the Stacked 100 Column Chart presents the data in terms of percent of the sum of all values in a data point.

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
import { OnlineTrafficByDeviceItem, OnlineTrafficByDevice } from './OnlineTrafficByDevice';
import { IgxLegendComponent, IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxStacked100ColumnSeriesComponent, IgxStackedFragmentSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	@ViewChild("stacked100ColumnSeries", { static: true } )
	private stacked100ColumnSeries: IgxStacked100ColumnSeriesComponent
	@ViewChild("s1", { static: true } )
	private s1: IgxStackedFragmentSeriesComponent
	@ViewChild("s2", { static: true } )
	private s2: IgxStackedFragmentSeriesComponent
	@ViewChild("s3", { static: true } )
	private s3: IgxStackedFragmentSeriesComponent
	@ViewChild("dataToolTipLayer", { static: true } )
	private dataToolTipLayer: IgxDataToolTipLayerComponent
    private _onlineTrafficByDevice: OnlineTrafficByDevice = null;
    public get onlineTrafficByDevice(): OnlineTrafficByDevice {
        if (this._onlineTrafficByDevice == null)
        {
            this._onlineTrafficByDevice = new OnlineTrafficByDevice();
        }
        return this._onlineTrafficByDevice;
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
      Distribution of Online Traffic Worldwide, by Device
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
          [dataSource]="onlineTrafficByDevice"
          label="category"
          gap="0.75">
          </igx-category-x-axis>
          <igx-numeric-y-axis
          name="yAxis"
          #yAxis
          minimumValue="0">
          </igx-numeric-y-axis>
          <igx-stacked-100-column-series
          name="stacked100ColumnSeries"
          #stacked100ColumnSeries
          [dataSource]="onlineTrafficByDevice"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          showDefaultTooltip="true"
          areaFillOpacity="1">
              <igx-stacked-fragment-series
              name="s1"
              #s1
              valueMemberPath="desktop"
              title="Desktop">
              </igx-stacked-fragment-series>
              <igx-stacked-fragment-series
              name="s2"
              #s2
              valueMemberPath="mobile"
              title="Mobile">
              </igx-stacked-fragment-series>
              <igx-stacked-fragment-series
              name="s3"
              #s3
              valueMemberPath="tablet"
              title="Tablet">
              </igx-stacked-fragment-series>
          </igx-stacked-100-column-series>
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

## Angular Range Column Chart

The Angular Range Column Chart belongs to a group of range charts and is rendered using vertical rectangles that can appear in the middle of the plot area of the chart, rather than stretching from the bottom like the traditional [Category Column Chart](column-chart.md#angular-column-chart-example). This type of series emphasizes the amount of change between low values and high values in the same data point over a period of time or compares multiple items. Range values are represented on the Y-Axis and categories are displayed on the X-Axis.

The Range Column Chart is identical to the [Range Area Chart](area-chart.md)(area-chart.md#angular-range-area-chart) in all aspects except that the ranges are represented as a set of vertical columns rather than a filled area.

You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxRangeColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxrangecolumnseriescomponent.html), as shown in the example below:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartInteractivityModule, IgxDataChartAnnotationModule, IgxLegendModule } from 'igniteui-angular-charts';

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
    IgxDataChartInteractivityModule,
    IgxDataChartAnnotationModule,
    IgxLegendModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TemperatureRangeDataItem, TemperatureRangeData } from './TemperatureRangeData';
import { IgxLegendComponent, IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxRangeColumnSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	@ViewChild("rangeColumnSeries1", { static: true } )
	private rangeColumnSeries1: IgxRangeColumnSeriesComponent
	@ViewChild("rangeColumnSeries2", { static: true } )
	private rangeColumnSeries2: IgxRangeColumnSeriesComponent
	@ViewChild("dataToolTipLayer", { static: true } )
	private dataToolTipLayer: IgxDataToolTipLayerComponent
    private _temperatureRangeData: TemperatureRangeData = null;
    public get temperatureRangeData(): TemperatureRangeData {
        if (this._temperatureRangeData == null)
        {
            this._temperatureRangeData = new TemperatureRangeData();
        }
        return this._temperatureRangeData;
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
      Monthly Temperature Range in LA and NYC
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
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false"
      [legend]="legend">
          <igx-category-x-axis
          name="xAxis"
          #xAxis
          label="month"
          interval="1"
          [dataSource]="temperatureRangeData">
          </igx-category-x-axis>
          <igx-numeric-y-axis
          name="yAxis"
          #yAxis
          title="Temperature (in Celsius)"
          titleAngle="90"
          titleLeftMargin="10">
          </igx-numeric-y-axis>
          <igx-range-column-series
          name="RangeColumnSeries1"
          #rangeColumnSeries1
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          title="Los Angeles"
          lowMemberPath="lowLA"
          highMemberPath="highLA"
          showDefaultTooltip="false"
          [dataSource]="temperatureRangeData">
          </igx-range-column-series>
          <igx-range-column-series
          name="RangeColumnSeries2"
          #rangeColumnSeries2
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          title="New York"
          lowMemberPath="lowNY"
          highMemberPath="highNY"
          showDefaultTooltip="false"
          [dataSource]="temperatureRangeData">
          </igx-range-column-series>
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

## Angular Radial Column Chart

The Radial Column Chart belongs to a group of [Radial Chart](radial-chart.md), and is visualized by using a collection of rectangles that extend from the center of the chart toward the locations of data points. This utilizes the same concepts of data plotting as the [Category Column Chart](column-chart.md#angular-column-chart-example), but wraps data points around a circle rather than stretching them horizontally.

You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxRadialColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxradialcolumnseriescomponent.html), as shown in the example below:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartRadialModule, IgxDataChartRadialCoreModule, IgxDataChartInteractivityModule, IgxDataChartAnnotationModule, IgxLegendModule } from 'igniteui-angular-charts';

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
    IgxDataChartRadialModule,
    IgxDataChartRadialCoreModule,
    IgxDataChartInteractivityModule,
    IgxDataChartAnnotationModule,
    IgxLegendModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FootballPlayerStatsItem, FootballPlayerStats } from './FootballPlayerStats';
import { IgxLegendComponent, IgxDataChartComponent, IgxCategoryAngleAxisComponent, IgxNumericRadiusAxisComponent, IgxRadialColumnSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	@ViewChild("radialColumnSeries1", { static: true } )
	private radialColumnSeries1: IgxRadialColumnSeriesComponent
	@ViewChild("radialColumnSeries2", { static: true } )
	private radialColumnSeries2: IgxRadialColumnSeriesComponent
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
          <igx-radial-column-series
          name="RadialColumnSeries1"
          #radialColumnSeries1
          [dataSource]="footballPlayerStats"
          [angleAxis]="angleAxis"
          [valueAxis]="radiusAxis"
          valueMemberPath="ronaldo"
          showDefaultTooltip="false"
          areaFillOpacity="0.8"
          thickness="3"
          title="Ronaldo">
          </igx-radial-column-series>
          <igx-radial-column-series
          name="RadialColumnSeries2"
          #radialColumnSeries2
          [dataSource]="footballPlayerStats"
          [angleAxis]="angleAxis"
          [valueAxis]="radiusAxis"
          valueMemberPath="messi"
          showDefaultTooltip="false"
          areaFillOpacity="0.8"
          thickness="3"
          title="Messi">
          </igx-radial-column-series>
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

- [Bar Chart](bar-chart.md)
- [Composite Chart](composite-chart.md)
- [Radial Chart](radial-chart.md)
- [Stacked Chart](stacked-chart.md)

## API References

The following table lists API members mentioned in the above sections:

| Chart Type          | Control Name                                                                                                                                                                   | API Members                                                                                                                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Column              | [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) | [`chartType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#chartType) = **Column**            |
| Radial Column       | [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)         | [`IgxRadialColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxradialcolumnseriescomponent.html)         |
| Range Column        | [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)         | [`IgxRangeColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxrangecolumnseriescomponent.html)           |
| Stacked Column      | [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)         | [`IgxStackedColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedcolumnseriescomponent.html)       |
| Stacked 100% Column | [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)         | [`IgxStacked100ColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100columnseriescomponent.html) |
| Waterfall           | [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)         | [`IgxWaterfallSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxwaterfallseriescomponent.html)               |
