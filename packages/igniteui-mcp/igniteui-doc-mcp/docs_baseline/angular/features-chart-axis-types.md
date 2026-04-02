---
title: Angular Axis Types | Data Visualization | Infragistics
_description: Infragistics' Angular Axis Types
_keywords: Angular Axis, Options, Title, Labels, Gap, Overlap, Range, Scale, Mode, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "FinancialChart", "FinancialChartYAxisMode", "FinancialChartXAxisMode", "NumericYAxis", "CategoryXAxis"]
namespace: Infragistics.Controls.Charts
_tocName: Axis Types
_premium: true
---

# Angular Axis Types

The Ignite UI for Angular Category Chart uses only one [`IgxCategoryXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryxaxiscomponent.html) and one [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) type. Similarly, Ignite UI for Angular Financial Chart uses only one [`IgxTimeXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimexaxiscomponent.html) and one [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) types. However, the Ignite UI for Angular Data Chart provides support for multiple axis types that you can position on any side of the chart by setting [axis location](chart-axis-layouts.md#axis-locations-example) or even inside of the chart by using [axis crossing](chart-axis-layouts.md#axis-crossing-example) properties. This topic goes over each one, which axes and series are compatible with each other, and some specific properties to the unique axes.

## Cartesian Axes

The [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) with Cartesian Axes, allows you to plot data in horizontal (X-axis) and vertical (X-axis) direction with 3 types of X-Axis
([`IgxCategoryXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryxaxiscomponent.html), [`IgxNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html), and [`IgxTimeXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimexaxiscomponent.html)) and 2 types of Y-Axis ([`IgxCategoryYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryyaxiscomponent.html) and [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html)).

### Category X-Axis

The [`IgxCategoryXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryxaxiscomponent.html) treats its data as a sequence of categorical data items. It can display almost any type of data including strings and numbers. If you are plotting numbers on this axis, it is important to keep in mind that this axis is a discrete axis and not continuous. This means that each categorical data item will be placed equidistant from the one before it. The items will also be plotted in the order that they appear in the axis' data source.

The [`IgxCategoryXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryxaxiscomponent.html) requires you to provide a `DataSource` and a [`label`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#label) in order to plot data with it. It is generally used with the [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) to plot the following type of series:

| Category Series  | Stacked Series | Financial Series |
|------------------|----------------|--------------------|
| - [`IgxAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxareaseriescomponent.html) <br> - [`IgxColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcolumnseriescomponent.html) <br> - [`IgxLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxlineseriescomponent.html) <br> - [`IgxPointSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpointseriescomponent.html)  <br> - [`IgxSplineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsplineseriescomponent.html) <br>  - [`IgxSplineAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsplineareaseriescomponent.html) <br> - [`IgxStepLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsteplineseriescomponent.html) <br> - [`IgxStepAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstepareaseriescomponent.html) <br> - [`IgxRangeAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxrangeareaseriescomponent.html) <br> - [`IgxRangeColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxrangecolumnseriescomponent.html) <br> - [`IgxWaterfallSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxwaterfallseriescomponent.html) | - [`IgxStackedAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedareaseriescomponent.html) <br> - [`IgxStackedColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedcolumnseriescomponent.html) <br> - [`IgxStackedLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedlineseriescomponent.html) <br> - [`IgxStackedSplineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedsplineseriescomponent.html) <br> - [`IgxStacked100AreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100areaseriescomponent.html) <br> - [`IgxStacked100ColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100columnseriescomponent.html) <br> - [`IgxStacked100LineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100lineseriescomponent.html) <br> - [`IgxStacked100SplineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100splineseriescomponent.html) <br> <br> <br> <br> | - [`IgxFinancialPriceSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialpriceseriescomponent.html) <br> - [`IgxBollingerBandsOverlayComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbollingerbandsoverlaycomponent.html) <br> - [`IgxForceIndexIndicatorComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxforceindexindicatorcomponent.html) <br> - [`IgxMedianPriceIndicatorComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmedianpriceindicatorcomponent.html) <br> - [`IgxMassIndexIndicatorComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmassindexindicatorcomponent.html)  <br> - [`IgxRelativeStrengthIndexIndicatorComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxrelativestrengthindexindicatorcomponent.html) <br> - [`IgxStandardDeviationIndicatorComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstandarddeviationindicatorcomponent.html) <br> - [`IgxTypicalPriceIndicatorComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtypicalpriceindicatorcomponent.html) <br> <br> <br> <br> |

The following example demonstrates usage of the [`IgxCategoryXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryxaxiscomponent.html) type:

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

The [`IgxCategoryYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryyaxiscomponent.html) works very similarly to the [`IgxCategoryXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryxaxiscomponent.html) described above, but it is placed vertically rather than horizontally. Also, this axis requires you to provide a `DataSource` and a [`label`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#label) in order to plot data with it. The [`IgxCategoryYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryyaxiscomponent.html) is generally used with the [`IgxNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) to plot the following type of series:

- [`IgxBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbarseriescomponent.html)
- [`IgxStackedBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedbarseriescomponent.html)
- [`IgxStacked100BarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100barseriescomponent.html)

The following example demonstrates usage of the [`IgxCategoryYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryyaxiscomponent.html) type:

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

The [`IgxNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) treats its data as continuously varying numerical data items. Labels on this axis are placed horizontally along the X-Axis. The location of the [`IgxNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) labels depends on the `XMemberPath` property of the various [Scatter Series](../types/scatter-chart.md) that it supports if combined with a [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html). Alternatively, if combined with the [`IgxCategoryXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryxaxiscomponent.html), these labels will be placed corresponding to the `ValueMemberPath` of the [`IgxBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbarseriescomponent.html), [`IgxStackedBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedbarseriescomponent.html), and [`IgxStacked100BarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100barseriescomponent.html).

The [`IgxNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) is compatible with the following type of series:

- [`IgxBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbarseriescomponent.html)
- [`IgxBubbleSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html)
- [`IgxHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxhighdensityscatterseriescomponent.html)
- [`IgxScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterseriescomponent.html)
- [`IgxScatterLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterlineseriescomponent.html)
- [`IgxScatterSplineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscattersplineseriescomponent.html)
- [`IgxScatterAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterareaseriescomponent.html)
- [`IgxScatterContourSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscattercontourseriescomponent.html)
- [`IgxScatterPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterpolylineseriescomponent.html)
- [`IgxScatterPolygonSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterpolygonseriescomponent.html)
- [`IgxStackedBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedbarseriescomponent.html)
- [`IgxStacked100BarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100barseriescomponent.html)

The following example demonstrates usage of the [`IgxNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html):

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

The [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) treats its data as continuously varying numerical data items. Labels on this axis are placed vertically along the Y-Axis. The location of the [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) labels depends on the `YMemberPath` property of the various [ScatterSeries](../types/scatter-chart.md) that is supports if combined with a [`IgxNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html). Alternatively, if combined with the [`IgxCategoryYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryyaxiscomponent.html), these labels will be placed corresponding to the `ValueMemberPath` of the category or stacked series mentioned in the table above. If you are using one of the financial series, they will be placed corresponding to the Open/High/Low/Close paths and the series type that you are using.

The [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) is compatible with the following type of series:

| Category Series  | Stacked Series | Financial Series | Scatter Series |
|------------------|----------------|------------------|----------------|
| - [`IgxAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxareaseriescomponent.html) <br> - [`IgxColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcolumnseriescomponent.html) <br> - [`IgxLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxlineseriescomponent.html) <br> - [`IgxPointSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpointseriescomponent.html)  <br> - [`IgxSplineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsplineseriescomponent.html) <br>  - [`IgxSplineAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsplineareaseriescomponent.html) <br> - [`IgxStepLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsteplineseriescomponent.html) <br> - [`IgxStepAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstepareaseriescomponent.html) <br> - [`IgxRangeAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxrangeareaseriescomponent.html) <br> - [`IgxRangeColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxrangecolumnseriescomponent.html) <br> - [`IgxWaterfallSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxwaterfallseriescomponent.html) <br> | - [`IgxStackedAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedareaseriescomponent.html) <br> - [`IgxStackedColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedcolumnseriescomponent.html) <br> - [`IgxStackedLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedlineseriescomponent.html) <br> - [`IgxStackedSplineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedsplineseriescomponent.html) <br> - [`IgxStacked100AreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100areaseriescomponent.html) <br> - [`IgxStacked100ColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100columnseriescomponent.html) <br> - [`IgxStacked100LineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100lineseriescomponent.html) <br> - [`IgxStacked100SplineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100splineseriescomponent.html) <br> | - [`IgxFinancialPriceSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialpriceseriescomponent.html) <br> - [`IgxBollingerBandsOverlayComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbollingerbandsoverlaycomponent.html) <br> - [`IgxForceIndexIndicatorComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxforceindexindicatorcomponent.html) <br> - [`IgxMedianPriceIndicatorComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmedianpriceindicatorcomponent.html) <br> - [`IgxMassIndexIndicatorComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmassindexindicatorcomponent.html)  <br> - [`IgxRelativeStrengthIndexIndicatorComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxrelativestrengthindexindicatorcomponent.html) <br> - [`IgxStandardDeviationIndicatorComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstandarddeviationindicatorcomponent.html) <br> - [`IgxTypicalPriceIndicatorComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtypicalpriceindicatorcomponent.html) <br> | - [`IgxBubbleSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html) <br> - [`IgxHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxhighdensityscatterseriescomponent.html) <br> - [`IgxScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterseriescomponent.html) <br>  - [`IgxScatterLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterlineseriescomponent.html) <br> - [`IgxScatterSplineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscattersplineseriescomponent.html) <br> - [`IgxScatterAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterareaseriescomponent.html) <br> - [`IgxScatterContourSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscattercontourseriescomponent.html) <br> - [`IgxScatterPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterpolylineseriescomponent.html)  <br> - [`IgxScatterPolygonSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterpolygonseriescomponent.html)  <br> |

The following example demonstrates usage of the [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html):

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

The [`IgxTimeXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimexaxiscomponent.html) treats its data as a sequence of data items, sorted by date. Labels on this axis type are dates and can be formatted and arranged according to date intervals. The date range of this axis is determined by the date values in a data column that is mapped using its `DateTimeMemberPath`. This, along with a `DataSource` is required to plot data with this axis type.

The [`IgxTimeXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimexaxiscomponent.html) is the X-Axis type in the [`IgxFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) component.

#### Breaks in Time X Axis

The [`IgxTimeXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimexaxiscomponent.html) has the option to exclude intervals of data by using [`breaks`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimexaxiscomponent.html#breaks). As a result, the labels and plotted data will not appear at the excluded interval. For example, working/non-working days, holidays, and/or weekends. An instance of [`IgxTimeAxisBreakComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisbreakcomponent.html) can be added to the `Breaks` collection of the axis and configured by using a unique [`start`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisbreakcomponent.html#start), [`end`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisbreakcomponent.html#end) and [`interval`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisbreakcomponent.html#interval).

#### Formatting in Time X Axis

The [`IgxTimeXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimexaxiscomponent.html) has the [`labelFormats`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimexaxiscomponent.html#labelFormats) property, which represents a collection of [`IgxTimeAxisLabelFormatComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxislabelformatcomponent.html) objects. Each [`IgxTimeAxisLabelFormatComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxislabelformatcomponent.html) added to the collection is responsible for assigning a unique [`format`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxislabelformatcomponent.html#format) and [`range`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxislabelformatcomponent.html#range). This can be especially useful for drilling down data from years to milliseconds and adjusting the labels depending on the range of time shown by the chart.

The [`format`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxislabelformatcomponent.html#format) property of the [`IgxTimeAxisLabelFormatComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxislabelformatcomponent.html) specifies what format to use for a particular visible range. The [`range`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxislabelformatcomponent.html#range) property of the [`IgxTimeAxisLabelFormatComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxislabelformatcomponent.html) specifies the visible range at which the axis label formats will switch to a different format. For example, if you have two [`IgxTimeAxisLabelFormatComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxislabelformatcomponent.html) elements with a range set to 10 days and another set to 5 hours, then as soon as the visible range of the axis becomes less than 10 days, it will switch to 5-hour format.

#### Intervals in Time X Axis

The [`IgxTimeXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimexaxiscomponent.html) replaces the conventional [`interval`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericaxisbasecomponent.html#interval) property of the category and numeric axes with an [`intervals`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimexaxiscomponent.html#intervals) collection of type [`IgxTimeAxisIntervalComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisintervalcomponent.html). Each [`IgxTimeAxisIntervalComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisintervalcomponent.html) added to the collection is responsible for assigning a unique [`interval`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisintervalcomponent.html#interval), [`range`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisintervalcomponent.html#range) and [`intervalType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisintervalcomponent.html#intervalType). This can be especially useful for drilling down data from years to milliseconds to provide unique spacing between labels depending on the range of time shown by the chart. A description of these properties is below:

- [`interval`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisintervalcomponent.html#interval): This specifies the interval to use. This is tied to the [`intervalType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisintervalcomponent.html#intervalType) property. For example, if the [`intervalType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisintervalcomponent.html#intervalType) is set to `Days`, then the numeric value specified in [`interval`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisintervalcomponent.html#interval) will be in days.
- [`range`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisintervalcomponent.html#range): This specifies the visible range at which the axis interval will switch to a different interval. For example, if you have two TimeAxisInterval with a range set to 10 days and another set to 5 hours, as soon as the visible range in the axis becomes less than 10 days it will switch to the interval whose range is 5 hours.
- [`intervalType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisintervalcomponent.html#intervalType): This specifies the unit of time for the [`interval`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisintervalcomponent.html#interval) property.

## Polar Axes

The [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) with Polar Axes, allows you to plot data outwards (radius axis) from center of the chart and around (angle axis) of center of the chart.

### Category Angle Axis

The [`IgxCategoryAngleAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryangleaxiscomponent.html) treats its data as a sequence of category data items. The labels on this axis are placed along the edge of a circle according to their position in that sequence. This type of axis can display almost any type of data including strings and numbers.

The [`IgxCategoryAngleAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryangleaxiscomponent.html) is generally used with the [`IgxNumericRadiusAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericradiusaxiscomponent.html) to plot [Radial Series](../types/radial-chart.md).

The following example demonstrates usage of the [`IgxCategoryAngleAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryangleaxiscomponent.html) type:

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

The [`IgxProportionalCategoryAngleAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxproportionalcategoryangleaxiscomponent.html) treats its data as a sequence of category data items. The labels on this axis are placed along the edge of a circle according to their position in that sequence. This type of axis can display almost any type of data including strings and numbers.

The [`IgxProportionalCategoryAngleAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxproportionalcategoryangleaxiscomponent.html) is generally used with the [`IgxNumericRadiusAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericradiusaxiscomponent.html) to plot a pie chart eg. [Radial Series](../types/radial-chart.md).

The following example demonstrates usage of the [`IgxProportionalCategoryAngleAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxproportionalcategoryangleaxiscomponent.html) type:

<code-view style="height: 500px" alt="Angular Proportional Category Angle Axis Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/radial-proportional-category-angle-axis"
                                                 github-src="charts/data-chart/radial-proportional-category-angle-axis">
</code-view>


### Numeric Angle Axis

The [`IgxNumericAngleAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericangleaxiscomponent.html) treats its data as continuously varying numerical data items. The labels on this axis area placed along a radius line starting from the center of the circular plot. The location of the labels on the [`IgxNumericAngleAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericangleaxiscomponent.html) varies according to the value in the data column mapped using the `RadiusMemberPath` property of the [Polar Series](../types/polar-chart.md) object or the `ValueMemberPath` property of the [Radial Series](../types/radial-chart.md) object.

The The [`IgxNumericAngleAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericangleaxiscomponent.html) can be used with either the [`IgxCategoryAngleAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryangleaxiscomponent.html) to plot [Radial Series](../types/radial-chart.md) or with the [`IgxNumericRadiusAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericradiusaxiscomponent.html) to plot [Polar Series](../types/polar-chart.md) respectively.

The following example demonstrates usage of the [`IgxNumericAngleAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericangleaxiscomponent.html) type:

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

The [`IgxNumericRadiusAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericradiusaxiscomponent.html) treats the data as continuously varying numerical data items. The labels on this axis are placed around the circular plot. The location of the labels varies according to the value in a data column mapped using the `AngleMemberPath` property of the corresponding polar series.

The [`IgxNumericRadiusAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericradiusaxiscomponent.html) can be used with the [`IgxNumericRadiusAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericradiusaxiscomponent.html) to plot [Polar Series](../types/polar-chart.md).

The following example demonstrates usage of the [`IgxNumericRadiusAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericradiusaxiscomponent.html) type:

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
