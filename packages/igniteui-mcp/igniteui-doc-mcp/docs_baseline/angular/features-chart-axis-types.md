---
title: "Angular Axis Types | Data Visualization | Infragistics"
description: Infragistics' Angular Axis Types
keywords: "Angular Axis, Options, Title, Labels, Gap, Overlap, Range, Scale, Mode, Infragistics"
license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "FinancialChart", "FinancialChartYAxisMode", "FinancialChartXAxisMode", "NumericYAxis", "CategoryXAxis", "TimeAxisIntervalType", "PolarBase"]
namespace: Infragistics.Controls.Charts
llms:
  description: "The Ignite UI for Angular Category Chart uses only one CategoryXAxis and one NumericYAxis type."
platformType: xplat
_tocName: Axis Types
_premium: true
---
# Angular Axis Types

The Ignite UI for Angular Category Chart uses only one [`IgxCategoryXAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxCategoryXAxisComponent) and one [`IgxNumericYAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxNumericYAxisComponent) type. Similarly, Ignite UI for Angular Financial Chart uses only one [`IgxTimeXAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxTimeXAxisComponent) and one [`IgxNumericYAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxNumericYAxisComponent) types. However, the Ignite UI for Angular Data Chart provides support for multiple axis types that you can position on any side of the chart by setting [axis location](chart-axis-layouts.md#axis-locations-example) or even inside of the chart by using [axis crossing](chart-axis-layouts.md#axis-crossing-example) properties. This topic goes over each one, which axes and series are compatible with each other, and some specific properties to the unique axes.

## Cartesian Axes

The [`IgxDataChartComponent`](mcp:get_api_reference?platform=angular&component=IgxDataChartComponent) with Cartesian Axes, allows you to plot data in horizontal (X-axis) and vertical (X-axis) direction with 3 types of X-Axis
([`IgxCategoryXAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxCategoryXAxisComponent), [`IgxNumericXAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxNumericXAxisComponent), and [`IgxTimeXAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxTimeXAxisComponent)) and 2 types of Y-Axis ([`IgxCategoryYAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxCategoryYAxisComponent) and [`IgxNumericYAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxNumericYAxisComponent)).

### Category X-Axis

The [`IgxCategoryXAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxCategoryXAxisComponent) treats its data as a sequence of categorical data items. It can display almost any type of data including strings and numbers. If you are plotting numbers on this axis, it is important to keep in mind that this axis is a discrete axis and not continuous. This means that each categorical data item will be placed equidistant from the one before it. The items will also be plotted in the order that they appear in the axis' data source.

The [`IgxCategoryXAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxCategoryXAxisComponent) requires you to provide a [`dataSource`](mcp:get_api_reference?platform=angular&component=IgxCategoryXAxisComponent&member=dataSource) and a [`IgxNumericYAxisComponent.label`](mcp:get_api_reference?platform=angular&component=IgxNumericYAxisComponent&member=label) in order to plot data with it. It is generally used with the [`IgxNumericYAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxNumericYAxisComponent) to plot the following type of series:

| Category Series  | Stacked Series | Financial Series |
|------------------|----------------|--------------------|
| - [`IgxAreaSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxAreaSeriesComponent) <br /> - [`IgxColumnSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxColumnSeriesComponent) <br /> - [`IgxLineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxLineSeriesComponent) <br /> - [`IgxPointSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxPointSeriesComponent)  <br /> - [`IgxSplineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxSplineSeriesComponent) <br />  - [`IgxSplineAreaSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxSplineAreaSeriesComponent) <br /> - [`IgxStepLineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxStepLineSeriesComponent) <br /> - [`IgxStepAreaSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxStepAreaSeriesComponent) <br /> - [`IgxRangeAreaSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxRangeAreaSeriesComponent) <br /> - [`IgxRangeColumnSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxRangeColumnSeriesComponent) <br /> - [`IgxWaterfallSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxWaterfallSeriesComponent) | - [`IgxStackedAreaSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxStackedAreaSeriesComponent) <br /> - [`IgxStackedColumnSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxStackedColumnSeriesComponent) <br /> - [`IgxStackedLineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxStackedLineSeriesComponent) <br /> - [`IgxStackedSplineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxStackedSplineSeriesComponent) <br /> - [`IgxStacked100AreaSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxStacked100AreaSeriesComponent) <br /> - [`IgxStacked100ColumnSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxStacked100ColumnSeriesComponent) <br /> - [`IgxStacked100LineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxStacked100LineSeriesComponent) <br /> - [`IgxStacked100SplineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxStacked100SplineSeriesComponent) <br /> <br /> <br /> <br /> | - [`IgxFinancialPriceSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxFinancialPriceSeriesComponent) <br /> - [`IgxBollingerBandsOverlayComponent`](mcp:get_api_reference?platform=angular&component=IgxBollingerBandsOverlayComponent) <br /> - [`IgxForceIndexIndicatorComponent`](mcp:get_api_reference?platform=angular&component=IgxForceIndexIndicatorComponent) <br /> - [`IgxMedianPriceIndicatorComponent`](mcp:get_api_reference?platform=angular&component=IgxMedianPriceIndicatorComponent) <br /> - [`IgxMassIndexIndicatorComponent`](mcp:get_api_reference?platform=angular&component=IgxMassIndexIndicatorComponent)  <br /> - [`IgxRelativeStrengthIndexIndicatorComponent`](mcp:get_api_reference?platform=angular&component=IgxRelativeStrengthIndexIndicatorComponent) <br /> - [`IgxStandardDeviationIndicatorComponent`](mcp:get_api_reference?platform=angular&component=IgxStandardDeviationIndicatorComponent) <br /> - [`IgxTypicalPriceIndicatorComponent`](mcp:get_api_reference?platform=angular&component=IgxTypicalPriceIndicatorComponent) <br /> <br /> <br /> <br /> |

 The following example demonstrates usage of the [`IgxCategoryXAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxCategoryXAxisComponent) type:

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

### Category Y-Axis

The [`IgxCategoryYAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxCategoryYAxisComponent) works very similarly to the [`IgxCategoryXAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxCategoryXAxisComponent) described above, but it is placed vertically rather than horizontally. Also, this axis requires you to provide a [`dataSource`](mcp:get_api_reference?platform=angular&component=IgxCategoryXAxisComponent&member=dataSource) and a [`IgxNumericYAxisComponent.label`](mcp:get_api_reference?platform=angular&component=IgxNumericYAxisComponent&member=label) in order to plot data with it. The [`IgxCategoryYAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxCategoryYAxisComponent) is generally used with the [`IgxNumericXAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxNumericXAxisComponent) to plot the following type of series:

- [`IgxBarSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxBarSeriesComponent)
- [`IgxRangeBarSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxRangeBarSeriesComponent)
- [`IgxStackedBarSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxStackedBarSeriesComponent)
- [`IgxStacked100BarSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxStacked100BarSeriesComponent)

 The following example demonstrates usage of the [`IgxCategoryYAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxCategoryYAxisComponent) type:

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

### Numeric X-Axis

The [`IgxNumericXAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxNumericXAxisComponent) treats its data as continuously varying numerical data items. Labels on this axis are placed horizontally along the X-Axis. The location of the [`IgxNumericXAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxNumericXAxisComponent) labels depends on the [`IgxBubbleSeriesComponent.xMemberPath`](mcp:get_api_reference?platform=angular&component=IgxBubbleSeriesComponent&member=xMemberPath) property of the various [Scatter Series](../types/scatter-chart.md) that it supports if combined with a [`IgxNumericYAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxNumericYAxisComponent). Alternatively, if combined with the [`IgxCategoryXAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxCategoryXAxisComponent), these labels will be placed corresponding to the [`valueMemberPath`](mcp:get_api_reference?platform=angular&component=IgxBarSeriesComponent&member=valueMemberPath) of the [`IgxBarSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxBarSeriesComponent), [`IgxRangeBarSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxRangeBarSeriesComponent), [`IgxStackedBarSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxStackedBarSeriesComponent), and [`IgxStacked100BarSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxStacked100BarSeriesComponent).

The [`IgxNumericXAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxNumericXAxisComponent) is compatible with the following type of series:

- [`IgxBarSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxBarSeriesComponent)
- [`IgxRangeBarSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxRangeBarSeriesComponent)
- [`IgxBubbleSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxBubbleSeriesComponent)
- [`IgxHighDensityScatterSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxHighDensityScatterSeriesComponent)
- [`IgxScatterSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxScatterSeriesComponent)
- [`IgxScatterLineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxScatterLineSeriesComponent)
- [`IgxScatterSplineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxScatterSplineSeriesComponent)
- [`IgxScatterAreaSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxScatterAreaSeriesComponent)
- [`IgxScatterContourSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxScatterContourSeriesComponent)
- [`IgxScatterPolylineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxScatterPolylineSeriesComponent)
- [`IgxScatterPolygonSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxScatterPolygonSeriesComponent)
- [`IgxStackedBarSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxStackedBarSeriesComponent)
- [`IgxStacked100BarSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxStacked100BarSeriesComponent)

 The following example demonstrates usage of the [`IgxNumericXAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxNumericXAxisComponent):

 ```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartScatterModule, IgxDataChartScatterCoreModule, IgxLegendModule, IgxDataChartInteractivityModule } from "igniteui-angular-charts";
import { SampleDensityData } from "./SampleDensityData";


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
    IgxDataChartScatterModule,
    IgxDataChartScatterCoreModule,
    IgxLegendModule,
    IgxDataChartInteractivityModule
],
  providers: [SampleDensityData],
schemas: []
})
export class AppModule {}
```
```typescript
import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxDataChartComponent } from "igniteui-angular-charts";
import { IgxNumericXAxisComponent } from "igniteui-angular-charts";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts";
import { IgxHighDensityScatterSeriesComponent } from "igniteui-angular-charts";
import { SampleDensityData } from "./SampleDensityData";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    @ViewChild("chart", { static: true })
    public chart: IgxDataChartComponent;

    @ViewChild("xAxis", { static: true })
    public xAxis: IgxNumericXAxisComponent;

    @ViewChild("yAxis", { static: true })
    public yAxis: IgxNumericYAxisComponent;

    public data: any[];

    constructor() { }

    ngOnInit() {

        this.data = SampleDensityData.create();

        const i = 0;
        // const scatterSeries = new IgxHighDensityScatterSeriesComponent();
        // scatterSeries.title = "Distribution";
        // scatterSeries.dataSource = SampleDensityData.create();
        // scatterSeries.showDefaultTooltip = true;
        // scatterSeries.xMemberPath = "x";
        // scatterSeries.yMemberPath = "y";
        // scatterSeries.mouseOverEnabled = true;
        // scatterSeries.progressiveLoad = true;
        // scatterSeries.heatMinimumColor = "Black";
        // scatterSeries.heatMaximumColor = "Yellow";
        // scatterSeries.heatMaximum = 1;
        // scatterSeries.heatMinimum = 5;
        // scatterSeries.resolution = 3;
        // scatterSeries.xAxis = this.xAxis;
        // scatterSeries.yAxis = this.yAxis;

        // this.chart.series.clear();
        // this.chart.series.add(scatterSeries);
    }
}
```
```html
<div class="container vertical">
    <div class="options vertical">
        <label id="legendTitle">Stars Distribution in Milky Way Galaxy</label>
    </div>
        <igx-data-chart #chart
            isHorizontalZoomEnabled=true
            isVerticalZoomEnabled=true
            width="100%"
            height="100%">

            <igx-numeric-x-axis #xAxis
                abbreviateLargeNumbers=true
                titleBottomMargin="10"
                title="Plane of Rotation (in Light Years)">
            </igx-numeric-x-axis>
            <igx-numeric-y-axis #yAxis
                abbreviateLargeNumbers=true
                titleLeftMargin="10"
                title="Vertical Plane (in Light Years)">
            </igx-numeric-y-axis>
            <igx-high-density-scatter-series [xAxis]="xAxis"
                [yAxis]="yAxis"
                [dataSource]="data"
                xMemberPath="X"
                yMemberPath="Y"
                progressiveLoad=true
                heatMinimumColor="Black"
                heatMaximumColor="Yellow"
                heatMaximum=1
                heatMinimum=5
                resolution=3>
            </igx-high-density-scatter-series>
        </igx-data-chart>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

### Numeric Y-Axis

The [`IgxNumericYAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxNumericYAxisComponent) treats its data as continuously varying numerical data items. Labels on this axis are placed vertically along the Y-Axis. The location of the [`IgxNumericYAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxNumericYAxisComponent) labels depends on the [`yMemberPath`](mcp:get_api_reference?platform=angular&component=IgxScatterContourSeriesComponent&member=yMemberPath) property of the various [ScatterSeries](../types/scatter-chart.md) that is supports if combined with a [`IgxNumericXAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxNumericXAxisComponent). Alternatively, if combined with the [`IgxCategoryYAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxCategoryYAxisComponent), these labels will be placed corresponding to the [`valueMemberPath`](mcp:get_api_reference?platform=angular&component=IgxScatterContourSeriesComponent&member=valueMemberPath) of the category or stacked series mentioned in the table above. If you are using one of the financial series, they will be placed corresponding to the Open/High/Low/Close paths and the series type that you are using.

The [`IgxNumericYAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxNumericYAxisComponent) is compatible with the following type of series:

| Category Series  | Stacked Series | Financial Series | Scatter Series |
|------------------|----------------|------------------|----------------|
| - [`IgxAreaSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxAreaSeriesComponent) <br /> - [`IgxColumnSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxColumnSeriesComponent) <br /> - [`IgxLineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxLineSeriesComponent) <br /> - [`IgxPointSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxPointSeriesComponent)  <br /> - [`IgxSplineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxSplineSeriesComponent) <br />  - [`IgxSplineAreaSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxSplineAreaSeriesComponent) <br /> - [`IgxStepLineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxStepLineSeriesComponent) <br /> - [`IgxStepAreaSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxStepAreaSeriesComponent) <br /> - [`IgxRangeAreaSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxRangeAreaSeriesComponent) <br /> - [`IgxRangeColumnSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxRangeColumnSeriesComponent) <br /> - [`IgxWaterfallSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxWaterfallSeriesComponent) <br /> | - [`IgxStackedAreaSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxStackedAreaSeriesComponent) <br /> - [`IgxStackedColumnSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxStackedColumnSeriesComponent) <br /> - [`IgxStackedLineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxStackedLineSeriesComponent) <br /> - [`IgxStackedSplineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxStackedSplineSeriesComponent) <br /> - [`IgxStacked100AreaSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxStacked100AreaSeriesComponent) <br /> - [`IgxStacked100ColumnSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxStacked100ColumnSeriesComponent) <br /> - [`IgxStacked100LineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxStacked100LineSeriesComponent) <br /> - [`IgxStacked100SplineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxStacked100SplineSeriesComponent) <br /> | - [`IgxFinancialPriceSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxFinancialPriceSeriesComponent) <br /> - [`IgxBollingerBandsOverlayComponent`](mcp:get_api_reference?platform=angular&component=IgxBollingerBandsOverlayComponent) <br /> - [`IgxForceIndexIndicatorComponent`](mcp:get_api_reference?platform=angular&component=IgxForceIndexIndicatorComponent) <br /> - [`IgxMedianPriceIndicatorComponent`](mcp:get_api_reference?platform=angular&component=IgxMedianPriceIndicatorComponent) <br /> - [`IgxMassIndexIndicatorComponent`](mcp:get_api_reference?platform=angular&component=IgxMassIndexIndicatorComponent)  <br /> - [`IgxRelativeStrengthIndexIndicatorComponent`](mcp:get_api_reference?platform=angular&component=IgxRelativeStrengthIndexIndicatorComponent) <br /> - [`IgxStandardDeviationIndicatorComponent`](mcp:get_api_reference?platform=angular&component=IgxStandardDeviationIndicatorComponent) <br /> - [`IgxTypicalPriceIndicatorComponent`](mcp:get_api_reference?platform=angular&component=IgxTypicalPriceIndicatorComponent) <br /> | - [`IgxBubbleSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxBubbleSeriesComponent) <br /> - [`IgxHighDensityScatterSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxHighDensityScatterSeriesComponent) <br /> - [`IgxScatterSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxScatterSeriesComponent) <br />  - [`IgxScatterLineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxScatterLineSeriesComponent) <br /> - [`IgxScatterSplineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxScatterSplineSeriesComponent) <br /> - [`IgxScatterAreaSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxScatterAreaSeriesComponent) <br /> - [`IgxScatterContourSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxScatterContourSeriesComponent) <br /> - [`IgxScatterPolylineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxScatterPolylineSeriesComponent)  <br /> - [`IgxScatterPolygonSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxScatterPolygonSeriesComponent)  <br /> |

 The following example demonstrates usage of the [`IgxNumericYAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxNumericYAxisComponent):

 ```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxLegendModule, IgxNumberAbbreviatorModule, IgxDataChartCoreModule, IgxDataChartScatterModule, IgxDataChartScatterCoreModule, IgxDataChartInteractivityModule, IgxDataChartAnnotationModule } from 'igniteui-angular-charts';

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
import { HealthDataForGermanyItem, HealthDataForGermany } from './HealthDataForGermany';
import { HealthDataForFranceItem, HealthDataForFrance } from './HealthDataForFrance';
import { IgxLegendComponent, IgxDataChartComponent, IgxNumericXAxisComponent, IgxNumericYAxisComponent, IgxScatterLineSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	@ViewChild("scatterLineSeries1", { static: true } )
	private scatterLineSeries1: IgxScatterLineSeriesComponent
	@ViewChild("scatterLineSeries2", { static: true } )
	private scatterLineSeries2: IgxScatterLineSeriesComponent
	@ViewChild("dataToolTipLayer", { static: true } )
	private dataToolTipLayer: IgxDataToolTipLayerComponent
    private _healthDataForGermany: HealthDataForGermany = null;
    public get healthDataForGermany(): HealthDataForGermany {
        if (this._healthDataForGermany == null)
        {
            this._healthDataForGermany = new HealthDataForGermany();
        }
        return this._healthDataForGermany;
    }

    private _healthDataForFrance: HealthDataForFrance = null;
    public get healthDataForFrance(): HealthDataForFrance {
        if (this._healthDataForFrance == null)
        {
            this._healthDataForFrance = new HealthDataForFrance();
        }
        return this._healthDataForFrance;
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
      Life Expectancy vs Health Expenditure
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
          title="Life Expectancy (in years)"
          minimumValue="72"
          maximumValue="84"
          interval="2">
          </igx-numeric-x-axis>
          <igx-numeric-y-axis
          name="yAxis"
          #yAxis
          title="Health Expenditure per Capita"
          abbreviateLargeNumbers="true"
          minimumValue="1000"
          maximumValue="6000"
          interval="1000">
          </igx-numeric-y-axis>
          <igx-scatter-line-series
          name="ScatterLineSeries1"
          #scatterLineSeries1
          title="Germany"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          xMemberPath="lifeExpectancy"
          yMemberPath="healthExpense"
          [dataSource]="healthDataForGermany"
          markerType="Circle"
          showDefaultTooltip="true">
          </igx-scatter-line-series>
          <igx-scatter-line-series
          name="ScatterLineSeries2"
          #scatterLineSeries2
          title="France"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          xMemberPath="lifeExpectancy"
          yMemberPath="healthExpense"
          [dataSource]="healthDataForFrance"
          markerType="Circle"
          showDefaultTooltip="true">
          </igx-scatter-line-series>
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

### Time X Axis

The [`IgxTimeXAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxTimeXAxisComponent) treats its data as a sequence of data items, sorted by date. Labels on this axis type are dates and can be formatted and arranged according to date intervals. The date range of this axis is determined by the date values in a data column that is mapped using its [`dateTimeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxTimeXAxisComponent&member=dateTimeMemberPath). This, along with a [`dataSource`](mcp:get_api_reference?platform=angular&component=IgxTimeXAxisComponent&member=dataSource) is required to plot data with this axis type.

The [`IgxTimeXAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxTimeXAxisComponent) is the X-Axis type in the [`IgxFinancialChartComponent`](mcp:get_api_reference?platform=angular&component=IgxFinancialChartComponent) component.

#### Breaks in Time X Axis

The [`IgxTimeXAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxTimeXAxisComponent) has the option to exclude intervals of data by using [`IgxTimeXAxisComponent.breaks`](mcp:get_api_reference?platform=angular&component=IgxTimeXAxisComponent&member=breaks). As a result, the labels and plotted data will not appear at the excluded interval. For example, working/non-working days, holidays, and/or weekends. An instance of [`IgxTimeAxisBreakComponent`](mcp:get_api_reference?platform=angular&component=IgxTimeAxisBreakComponent) can be added to the [`IgxTimeXAxisComponent.breaks`](mcp:get_api_reference?platform=angular&component=IgxTimeXAxisComponent&member=breaks) collection of the axis and configured by using a unique [`IgxTimeAxisBreakComponent.start`](mcp:get_api_reference?platform=angular&component=IgxTimeAxisBreakComponent&member=start), [`IgxTimeAxisBreakComponent.end`](mcp:get_api_reference?platform=angular&component=IgxTimeAxisBreakComponent&member=end) and [`IgxNumericYAxisComponent.interval`](mcp:get_api_reference?platform=angular&component=IgxNumericYAxisComponent&member=interval).

#### Formatting in Time X Axis

The [`IgxTimeXAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxTimeXAxisComponent) has the [`labelFormats`](mcp:get_api_reference?platform=angular&component=IgxTimeXAxisComponent&member=labelFormats) property, which represents a collection of [`IgxTimeAxisLabelFormatComponent`](mcp:get_api_reference?platform=angular&component=IgxTimeAxisLabelFormatComponent) objects. Each [`IgxTimeAxisLabelFormatComponent`](mcp:get_api_reference?platform=angular&component=IgxTimeAxisLabelFormatComponent) added to the collection is responsible for assigning a unique [`IgxTimeAxisLabelFormatComponent.format`](mcp:get_api_reference?platform=angular&component=IgxTimeAxisLabelFormatComponent&member=format) and [`IgxTimeAxisLabelFormatComponent.range`](mcp:get_api_reference?platform=angular&component=IgxTimeAxisLabelFormatComponent&member=range). This can be especially useful for drilling down data from years to milliseconds and adjusting the labels depending on the range of time shown by the chart.

The [`IgxTimeAxisLabelFormatComponent.format`](mcp:get_api_reference?platform=angular&component=IgxTimeAxisLabelFormatComponent&member=format) property of the [`IgxTimeAxisLabelFormatComponent`](mcp:get_api_reference?platform=angular&component=IgxTimeAxisLabelFormatComponent) specifies what format to use for a particular visible range. The [`IgxTimeAxisLabelFormatComponent.range`](mcp:get_api_reference?platform=angular&component=IgxTimeAxisLabelFormatComponent&member=range) property of the [`IgxTimeAxisLabelFormatComponent`](mcp:get_api_reference?platform=angular&component=IgxTimeAxisLabelFormatComponent) specifies the visible range at which the axis label formats will switch to a different format. For example, if you have two [`IgxTimeAxisLabelFormatComponent`](mcp:get_api_reference?platform=angular&component=IgxTimeAxisLabelFormatComponent) elements with a range set to 10 days and another set to 5 hours, then as soon as the visible range of the axis becomes less than 10 days, it will switch to 5-hour format.

#### Intervals in Time X Axis

The [`IgxTimeXAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxTimeXAxisComponent) replaces the conventional [`IgxNumericYAxisComponent.interval`](mcp:get_api_reference?platform=angular&component=IgxNumericYAxisComponent&member=interval) property of the category and numeric axes with an [`IgxTimeXAxisComponent.intervals`](mcp:get_api_reference?platform=angular&component=IgxTimeXAxisComponent&member=intervals) collection of type [`IgxTimeAxisIntervalComponent`](mcp:get_api_reference?platform=angular&component=IgxTimeAxisIntervalComponent). Each [`IgxTimeAxisIntervalComponent`](mcp:get_api_reference?platform=angular&component=IgxTimeAxisIntervalComponent) added to the collection is responsible for assigning a unique [`IgxNumericYAxisComponent.interval`](mcp:get_api_reference?platform=angular&component=IgxNumericYAxisComponent&member=interval), [`IgxTimeAxisLabelFormatComponent.range`](mcp:get_api_reference?platform=angular&component=IgxTimeAxisLabelFormatComponent&member=range) and [`intervalType`](mcp:get_api_reference?platform=angular&component=IgxTimeAxisIntervalComponent&member=intervalType). This can be especially useful for drilling down data from years to milliseconds to provide unique spacing between labels depending on the range of time shown by the chart. A description of these properties is below:

- [`IgxNumericYAxisComponent.interval`](mcp:get_api_reference?platform=angular&component=IgxNumericYAxisComponent&member=interval): This specifies the interval to use. This is tied to the [`intervalType`](mcp:get_api_reference?platform=angular&component=IgxTimeAxisIntervalComponent&member=intervalType) property. For example, if the [`intervalType`](mcp:get_api_reference?platform=angular&component=IgxTimeAxisIntervalComponent&member=intervalType) is set to [`Days`](mcp:get_api_reference?platform=angular&component=TimeAxisIntervalType&member=Days), then the numeric value specified in [`IgxNumericYAxisComponent.interval`](mcp:get_api_reference?platform=angular&component=IgxNumericYAxisComponent&member=interval) will be in days.
- [`IgxTimeAxisLabelFormatComponent.range`](mcp:get_api_reference?platform=angular&component=IgxTimeAxisLabelFormatComponent&member=range): This specifies the visible range at which the axis interval will switch to a different interval. For example, if you have two TimeAxisInterval with a range set to 10 days and another set to 5 hours, as soon as the visible range in the axis becomes less than 10 days it will switch to the interval whose range is 5 hours.
- [`intervalType`](mcp:get_api_reference?platform=angular&component=IgxTimeAxisIntervalComponent&member=intervalType): This specifies the unit of time for the [`IgxNumericYAxisComponent.interval`](mcp:get_api_reference?platform=angular&component=IgxNumericYAxisComponent&member=interval) property.

## Polar Axes

The [`IgxDataChartComponent`](mcp:get_api_reference?platform=angular&component=IgxDataChartComponent) with Polar Axes, allows you to plot data outwards (radius axis) from center of the chart and around (angle axis) of center of the chart.

### Category Angle Axis

The [`IgxCategoryAngleAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxCategoryAngleAxisComponent) treats its data as a sequence of category data items. The labels on this axis are placed along the edge of a circle according to their position in that sequence. This type of axis can display almost any type of data including strings and numbers.

The [`IgxCategoryAngleAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxCategoryAngleAxisComponent) is generally used with the [`IgxNumericRadiusAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxNumericRadiusAxisComponent) to plot [Radial Series](../types/radial-chart.md).

The following example demonstrates usage of the [`IgxCategoryAngleAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxCategoryAngleAxisComponent) type:

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
import { IgxLegendComponent, IgxDataChartComponent, IgxCategoryAngleAxisComponent, IgxNumericRadiusAxisComponent, IgxRadialAreaSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	@ViewChild("radialAreaSeries1", { static: true } )
	private radialAreaSeries1: IgxRadialAreaSeriesComponent
	@ViewChild("radialAreaSeries2", { static: true } )
	private radialAreaSeries2: IgxRadialAreaSeriesComponent
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
          <igx-radial-area-series
          name="RadialAreaSeries1"
          #radialAreaSeries1
          [dataSource]="footballPlayerStats"
          [angleAxis]="angleAxis"
          [valueAxis]="radiusAxis"
          valueMemberPath="ronaldo"
          showDefaultTooltip="false"
          areaFillOpacity="0.5"
          thickness="3"
          title="Ronaldo"
          markerType="Circle">
          </igx-radial-area-series>
          <igx-radial-area-series
          name="RadialAreaSeries2"
          #radialAreaSeries2
          [dataSource]="footballPlayerStats"
          [angleAxis]="angleAxis"
          [valueAxis]="radiusAxis"
          valueMemberPath="messi"
          showDefaultTooltip="false"
          areaFillOpacity="0.5"
          thickness="3"
          title="Messi"
          markerType="Circle">
          </igx-radial-area-series>
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

### Proportional Category Angle Axis

The [`IgxProportionalCategoryAngleAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxProportionalCategoryAngleAxisComponent) treats its data as a sequence of category data items. The labels on this axis are placed along the edge of a circle according to their position in that sequence. This type of axis can display almost any type of data including strings and numbers.

The [`IgxProportionalCategoryAngleAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxProportionalCategoryAngleAxisComponent) is generally used with the [`IgxNumericRadiusAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxNumericRadiusAxisComponent) to plot a pie chart eg. [Radial Series](../types/radial-chart.md).

The following example demonstrates usage of the [`IgxProportionalCategoryAngleAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxProportionalCategoryAngleAxisComponent) type:

 ```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataPieChartCoreModule, IgxDataChartCoreModule, IgxDataChartRadialModule, IgxDataChartRadialCoreModule, IgxDataChartInteractivityModule, IgxDataChartAnnotationModule } from 'igniteui-angular-charts';

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
    IgxDataPieChartCoreModule,
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
import { RadialProportionalDataItem, RadialProportionalData } from './RadialProportionalData';
import { IgxDataChartComponent, IgxProportionalCategoryAngleAxisComponent, IgxNumericRadiusAxisComponent, IgxRadialPieSeriesComponent } from 'igniteui-angular-charts';

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
	@ViewChild("angleAxis", { static: true } )
	private angleAxis: IgxProportionalCategoryAngleAxisComponent
	@ViewChild("radiusAxis", { static: true } )
	private radiusAxis: IgxNumericRadiusAxisComponent
	@ViewChild("radialPieSeries1", { static: true } )
	private radialPieSeries1: IgxRadialPieSeriesComponent
    private _radialProportionalData: RadialProportionalData = null;
    public get radialProportionalData(): RadialProportionalData {
        if (this._radialProportionalData == null)
        {
            this._radialProportionalData = new RadialProportionalData();
        }
        return this._radialProportionalData;
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
  <div class="container fill">
      <igx-data-chart
      name="chart"
      #chart
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false">
          <igx-proportional-category-angle-axis
          name="angleAxis"
          #angleAxis
          [dataSource]="radialProportionalData"
          label="label"
          valueMemberPath="value"
          gap="0"
          othersCategoryText="Others"
          othersCategoryThreshold="55"
          othersCategoryType="Number">
          </igx-proportional-category-angle-axis>
          <igx-numeric-radius-axis
          name="radiusAxis"
          #radiusAxis
          minimumValue="0"
          maximumValue="100">
          </igx-numeric-radius-axis>
          <igx-radial-pie-series
          name="RadialPieSeries1"
          #radialPieSeries1
          [dataSource]="radialProportionalData"
          [angleAxis]="angleAxis"
          [valueAxis]="radiusAxis"
          valueMemberPath="value"
          showDefaultTooltip="false"
          useItemWiseColors="true"
          legendRadialLabelMode="LabelAndValueAndPercentage"
          markerType="None"
          title="Categories">
          </igx-radial-pie-series>
      </igx-data-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

### Numeric Angle Axis

The [`IgxNumericAngleAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxNumericAngleAxisComponent) treats its data as continuously varying numerical data items. The labels on this axis area placed along a radius line starting from the center of the circular plot. The location of the labels on the [`IgxNumericAngleAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxNumericAngleAxisComponent) varies according to the value in the data column mapped using the [`radiusMemberPath`](mcp:get_api_reference?platform=angular&component=IgxBubbleSeriesComponent&member=radiusMemberPath) property of the [Polar Series](../types/polar-chart.md) object or the [`valueMemberPath`](mcp:get_api_reference?platform=angular&component=IgxProportionalCategoryAngleAxisComponent&member=valueMemberPath) property of the [Radial Series](../types/radial-chart.md) object.

The The [`IgxNumericAngleAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxNumericAngleAxisComponent) can be used with either the [`IgxCategoryAngleAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxCategoryAngleAxisComponent) to plot [Radial Series](../types/radial-chart.md) or with the [`IgxNumericRadiusAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxNumericRadiusAxisComponent) to plot [Polar Series](../types/polar-chart.md) respectively.

The following example demonstrates usage of the [`IgxNumericAngleAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxNumericAngleAxisComponent) type:

 ```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartPolarModule, IgxDataChartPolarCoreModule, IgxDataChartInteractivityModule, IgxDataChartAnnotationModule } from 'igniteui-angular-charts';

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
import { IgxDataChartComponent, IgxNumericAngleAxisComponent, IgxNumericRadiusAxisComponent, IgxPolarScatterSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	@ViewChild("angleAxis", { static: true } )
	private angleAxis: IgxNumericAngleAxisComponent
	@ViewChild("radiusAxis", { static: true } )
	private radiusAxis: IgxNumericRadiusAxisComponent
	@ViewChild("polarScatterSeries1", { static: true } )
	private polarScatterSeries1: IgxPolarScatterSeriesComponent
	@ViewChild("polarScatterSeries2", { static: true } )
	private polarScatterSeries2: IgxPolarScatterSeriesComponent
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
  <div class="container fill">
      <igx-data-chart
      name="chart"
      #chart
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
          <igx-polar-scatter-series
          name="PolarScatterSeries1"
          #polarScatterSeries1
          [dataSource]="boatSailingData"
          [angleAxis]="angleAxis"
          [radiusAxis]="radiusAxis"
          angleMemberPath="direction"
          radiusMemberPath="windSpeed"
          showDefaultTooltip="false"
          title="Wind Speed"
          markerType="Circle">
          </igx-polar-scatter-series>
          <igx-polar-scatter-series
          name="PolarScatterSeries2"
          #polarScatterSeries2
          [dataSource]="boatSailingData"
          [angleAxis]="angleAxis"
          [radiusAxis]="radiusAxis"
          angleMemberPath="direction"
          radiusMemberPath="boatSpeed"
          showDefaultTooltip="false"
          title="Boat Speed"
          markerType="Circle">
          </igx-polar-scatter-series>
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

### Numeric Radius Axis

The [`IgxNumericRadiusAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxNumericRadiusAxisComponent) treats the data as continuously varying numerical data items. The labels on this axis are placed around the circular plot. The location of the labels varies according to the value in a data column mapped using the [`angleMemberPath`](mcp:get_api_reference?platform=angular&component=IgxPolarBaseComponent&member=angleMemberPath) property of the corresponding polar series.

The [`IgxNumericRadiusAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxNumericRadiusAxisComponent) can be used with the [`IgxNumericRadiusAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxNumericRadiusAxisComponent) to plot [Polar Series](../types/polar-chart.md).

The following example demonstrates usage of the [`IgxNumericRadiusAxisComponent`](mcp:get_api_reference?platform=angular&component=IgxNumericRadiusAxisComponent) type:

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

## Additional Resources

You can find more information about related chart features in these topics:

- [Axis Gridlines](chart-axis-gridlines.md)
- [Axis Layouts](chart-axis-layouts.md)
- [Axis Options](chart-axis-options.md)
