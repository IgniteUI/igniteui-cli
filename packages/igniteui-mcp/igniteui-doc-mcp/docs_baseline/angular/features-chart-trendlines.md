---
title: Angular Chart Trendlines | Data Visualization | Infragistics
description: Infragistics' Angular Chart Trendlines
keywords: Angular Charts, Trendlines, Infragistics
license: commercial

mentionedTypes: ["DomainChart", "FinancialChart", "CategoryChart", "DataChart", "TrendLineType", "FinancialPriceSeries", "AnnotationAppearanceMode"]
namespace: Infragistics.Controls.Charts
llms:
  description: "In Ignite UI for Angular charts, trendlines help in identifying a trend or finding patterns in data."
platformType: xplat
_tocName: Chart Trendlines
_premium: true
---
# Angular Chart Trendlines

In Ignite UI for Angular charts, trendlines help in identifying a trend or finding patterns in data. Trendlines are always rendered in front of data points bound to the chart and are supported by the [`IgxCategoryChartComponent`](mcp:get_api_reference?platform=angular&component=IgxCategoryChartComponent), [`IgxFinancialChartComponent`](mcp:get_api_reference?platform=angular&component=IgxFinancialChartComponent), and [`IgxDataChartComponent`](mcp:get_api_reference?platform=angular&component=IgxDataChartComponent) (except for stacked series, shape series, and range series).

Trendlines are off by default, but you can enable them by setting the [`trendLineType`](mcp:get_api_reference?platform=angular&component=IgxFinancialChartComponent&member=trendLineType) property. Also, you can modify multiple appearance properties of trendlines such as its brush, period, and thickness.

The trendlines also have the ability to have a dash array applied to them once enabled. This is done by setting the [`trendLineDashArray`](mcp:get_api_reference?platform=angular&component=IgxFinancialPriceSeriesComponent&member=trendLineDashArray) property to an array of numbers. The numeric array describes the length of the dashes of the trendline.

## Angular Chart Trendlines Example

The following sample depicts a [`IgxFinancialChartComponent`](mcp:get_api_reference?platform=angular&component=IgxFinancialChartComponent) showing the stock trend of Microsoft between 2013 and 2017 with a **QuinticFit** trendline initially applied. There is a drop-down that will allow you to change the type of trendline that is applied, and all possible trendline types are listed within that drop-down.

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
    providers: [FinancialDataService],
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public data: any;
    public trendlineType = "CubicFit";

    constructor(private dataService: FinancialDataService) {
        this.data = [this.dataService.getMsft()];
    }

    public OnTrendlineTypeChanged(e: any) {
        this.trendlineType = e.target.value;
    }
}
```
```html
<div class="container vertical">
    <div class="options horizontal">
        <label class="options-label">Annotations: </label>
        <label class="options-item">
            <select (change)="OnTrendlineTypeChanged($event)">
                <option>CubicFit</option>
                <option>LinearFit</option>
                <option>QuinticFit</option>
                <option>QuarticFit</option>
                <option>ExponentialFit</option>
                <option>PowerLawFit</option>
                <option>LogarithmicFit</option>
                <option>CumulativeAverage</option>
                <option>ExponentialAverage</option>
                <option>SimpleAverage</option>
                <option>ModifiedAverage</option>
                <option>WeightedAverage</option>
                <option>None</option>
            </select>
        </label>
    </div>
    <div class="options vertical" >
        <label id="legendTitle">Microsoft Stock Trend </label>
    </div>

    <div class="container">
        <igx-financial-chart width="100%"
            height="100%"
            chartType=Bar
            thickness=2
            [dataSource]="data"
            [trendLineType]="trendlineType"
            trendLineThickness=2
            trendLinePeriod=10
            trendLineBrushes="rgba(0, 101, 209, 1)"
            zoomSliderType="None"
            isHorizontalZoomEnabled="false"
            isVerticalZoomEnabled="false">
        </igx-financial-chart>
    </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

## Angular Chart Trendlines Dash Array Example

The following sample depicts a [`IgxDataChartComponent`](mcp:get_api_reference?platform=angular&component=IgxDataChartComponent) showing a [`IgxFinancialPriceSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxFinancialPriceSeriesComponent) with a **QuarticFit** dashed trendline applied via the [`trendLineDashArray`](mcp:get_api_reference?platform=angular&component=IgxFinancialPriceSeriesComponent&member=trendLineDashArray) property:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartCategoryCoreModule, IgxDataChartCategoryTrendLineModule, IgxDataChartFinancialCoreModule, IgxDataChartFinancialModule, IgxDataChartFinancialOverlaysModule, IgxDataChartInteractivityModule, IgxDataChartAnnotationModule } from 'igniteui-angular-charts';

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
    IgxDataChartCategoryTrendLineModule,
    IgxDataChartFinancialCoreModule,
    IgxDataChartFinancialModule,
    IgxDataChartFinancialOverlaysModule,
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
import { Stock2YearsItem, Stock2Years } from './Stock2Years';
import { IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxFinancialPriceSeriesComponent } from 'igniteui-angular-charts';

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
	@ViewChild("series1", { static: true } )
	private series1: IgxFinancialPriceSeriesComponent
    private _stock2Years: Stock2Years = null;
    public get stock2Years(): Stock2Years {
        if (this._stock2Years == null)
        {
            this._stock2Years = new Stock2Years();
        }
        return this._stock2Years;
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
      shouldAutoExpandMarginForInitialLabels="true"
      computedPlotAreaMarginMode="Series"
      isVerticalZoomEnabled="true"
      isHorizontalZoomEnabled="true">
          <igx-category-x-axis
          name="xAxis"
          #xAxis
          [dataSource]="stock2Years"
          labelLocation="OutsideBottom"
          label="month"
          interval="1"
          labelExtent="30">
          </igx-category-x-axis>
          <igx-numeric-y-axis
          name="yAxis"
          #yAxis
          labelLocation="OutsideRight">
          </igx-numeric-y-axis>
          <igx-financial-price-series
          name="Series1"
          #series1
          title="Stock Price"
          displayType="Candlestick"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          [dataSource]="stock2Years"
          openMemberPath="open"
          highMemberPath="high"
          lowMemberPath="low"
          closeMemberPath="close"
          volumeMemberPath="volume"
          showDefaultTooltip="true"
          trendLineType="QuarticFit"
          trendLineBrush="dodgerblue"
          trendLineDashArray="5, 5">
          </igx-financial-price-series>
      </igx-data-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

## Angular Chart Trendline Layer

The [`IgxTrendLineLayerComponent`](mcp:get_api_reference?platform=angular&component=IgxTrendLineLayerComponent) is a series type that is designed to display a single trendline type for a target series. The difference between this and the existing trendline features on the existing series types is that since the [`IgxTrendLineLayerComponent`](mcp:get_api_reference?platform=angular&component=IgxTrendLineLayerComponent) is a series type, you can add more than one of them to the [`IgxSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxSeriesComponent) collection of the chart to have multiple trendlines attached to the same series. You can also have the trendline appear in the legend, which was not possible previously.

## Trendline Layer Usage

The [`IgxTrendLineLayerComponent`](mcp:get_api_reference?platform=angular&component=IgxTrendLineLayerComponent) must be provided with a [`targetSeries`](mcp:get_api_reference?platform=angular&component=IgxTrendLineLayerComponent&member=targetSeries) and a [`trendLineType`](mcp:get_api_reference?platform=angular&component=IgxTrendLineLayerComponent&member=trendLineType) in order to work properly. The different trendline types that are available are the same as the trendlines that are available on the series.

If you would like to show the [`IgxTrendLineLayerComponent`](mcp:get_api_reference?platform=angular&component=IgxTrendLineLayerComponent) in the Legend, you can do so by setting the [`useLegend`](mcp:get_api_reference?platform=angular&component=IgxTrendLineLayerComponent&member=useLegend) property to `true`.

## Styling the Trendline Layer

By default, the [`IgxTrendLineLayerComponent`](mcp:get_api_reference?platform=angular&component=IgxTrendLineLayerComponent) renders with the same color as its [`targetSeries`](mcp:get_api_reference?platform=angular&component=IgxTrendLineLayerComponent&member=targetSeries) in a dashed line. This can be configured by using the various styling properties on the [`IgxTrendLineLayerComponent`](mcp:get_api_reference?platform=angular&component=IgxTrendLineLayerComponent).

To change the color of the trendline that is drawn, you can set its [`IgxTrendLineLayerComponent.brush`](mcp:get_api_reference?platform=angular&component=IgxTrendLineLayerComponent&member=brush) property. Alternatively, you can also set the [`useIndex`](mcp:get_api_reference?platform=angular&component=IgxTrendLineLayerComponent&member=useIndex) property to `true`, which will pull from the chart's [`IgxDomainChartComponent.brushes`](mcp:get_api_reference?platform=angular&component=IgxDomainChartComponent&member=brushes) palette based on the index in which the [`IgxTrendLineLayerComponent`](mcp:get_api_reference?platform=angular&component=IgxTrendLineLayerComponent) is placed in the chart's [`IgxSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxSeriesComponent) collection.

You can also modify the way that the [`IgxTrendLineLayerComponent`](mcp:get_api_reference?platform=angular&component=IgxTrendLineLayerComponent) appears by using its [`appearanceMode`](mcp:get_api_reference?platform=angular&component=IgxTrendLineLayerComponent&member=appearanceMode) and [`shiftAmount`](mcp:get_api_reference?platform=angular&component=IgxTrendLineLayerComponent&member=shiftAmount) properties. The [`shiftAmount`](mcp:get_api_reference?platform=angular&component=IgxTrendLineLayerComponent&member=shiftAmount) takes a value between -1.0 and 1.0 to determine how much of a "shift" to apply to the options that end in "Shift".

The following are the options for the [`appearanceMode`](mcp:get_api_reference?platform=angular&component=IgxTrendLineLayerComponent&member=appearanceMode) property:

- [`Auto`](mcp:get_api_reference?platform=angular&component=AnnotationAppearanceMode&member=Auto): This will default to the DashPattern enumeration.
- [`BrightnessShift`](mcp:get_api_reference?platform=angular&component=AnnotationAppearanceMode&member=BrightnessShift): The trendline will take the [`targetSeries`](mcp:get_api_reference?platform=angular&component=IgxTrendLineLayerComponent&member=targetSeries) brush and modify its brightness based on the provided [`shiftAmount`](mcp:get_api_reference?platform=angular&component=IgxTrendLineLayerComponent&member=shiftAmount).
- [`DashPattern`](mcp:get_api_reference?platform=angular&component=AnnotationAppearanceMode&member=DashPattern): The trendline will appear as a dashed line. The frequency of the dashes can be modified by using the [`dashArray`](mcp:get_api_reference?platform=angular&component=IgxTrendLineLayerComponent&member=dashArray) property on the [`IgxTrendLineLayerComponent`](mcp:get_api_reference?platform=angular&component=IgxTrendLineLayerComponent).
- [`OpacityShift`](mcp:get_api_reference?platform=angular&component=AnnotationAppearanceMode&member=OpacityShift): The trendline will take the [`targetSeries`](mcp:get_api_reference?platform=angular&component=IgxTrendLineLayerComponent&member=targetSeries) brush and modify its opacity based on the provided [`shiftAmount`](mcp:get_api_reference?platform=angular&component=IgxTrendLineLayerComponent&member=shiftAmount).
- [`SaturationShift`](mcp:get_api_reference?platform=angular&component=AnnotationAppearanceMode&member=SaturationShift): The trendline will take the [`targetSeries`](mcp:get_api_reference?platform=angular&component=IgxTrendLineLayerComponent&member=targetSeries) brush and modify its saturation based on the provided [`shiftAmount`](mcp:get_api_reference?platform=angular&component=IgxTrendLineLayerComponent&member=shiftAmount).

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Annotations](chart-annotations.md)
- [Chart Highlighting](chart-highlighting.md)

## API References
[`IgxCategoryChartComponent`](mcp:get_api_reference?platform=angular&component=IgxCategoryChartComponent)
[`IgxFinancialChartComponent`](mcp:get_api_reference?platform=angular&component=IgxFinancialChartComponent)
[`IgxDataChartComponent`](mcp:get_api_reference?platform=angular&component=IgxDataChartComponent)
[`IgxTrendLineLayerComponent`](mcp:get_api_reference?platform=angular&component=IgxTrendLineLayerComponent)
