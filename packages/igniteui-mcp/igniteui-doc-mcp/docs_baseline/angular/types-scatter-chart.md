---
title: Angular Scatter Chart | Data Visualization | Infragistics
_description: Infragistics' Angular Scatter Chart
_keywords: Angular Charts, Scatter Chart, Infragistics
_license: commercial
mentionedTypes: ["XamDataChart", "ScatterSeries", "ScatterLineSeries", "ScatterSplineSeries", "HighDensityScatterSeries", "ScatterAreaSeries", "ScatterContourSeries", "Series"]
namespace: Infragistics.Controls.Charts
_tocName: Scatter Chart
_premium: true
---

# Angular Scatter Charts

The Ignite UI for Angular Scatter Chart belongs to a group of charts that show the relationship among items in distinct series of data or to plot data items using numeric x and y coordinates. These charts draw attention to uneven intervals or clusters of data. They are often used to plot scientific data, and can highlight the deviation of collected data from predicted results. Also, you can use them to organize data chronologically (even if the data is not in chronological order).

## Angular Scatter Marker Chart

Angular Scatter Marker Chart renders as a collection of markers, each having a pair of numeric X/Y values that determines its location in the Cartesian coordinate system. You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterseriescomponent.html), as shown in the example below:

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

## Angular Scatter Line Chart

Angular Scatter Line Chart renders as a collection of markers connected by a straight lines, each having a pair of numeric X/Y values that determines its location in the Cartesian coordinate system. You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxScatterLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterlineseriescomponent.html), as shown in the example below:

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

<div class="divider--half"></div>

## Angular Scatter Spline Chart

Angular Scatter Spline Chart renders as a collection of markers connected by a curved spline, each having a pair of numeric X/Y values that determines its location in the Cartesian coordinate system. You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxScatterSplineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscattersplineseriescomponent.html), as shown in the example below:

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
import { IgxLegendComponent, IgxDataChartComponent, IgxNumericXAxisComponent, IgxNumericYAxisComponent, IgxScatterSplineSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	@ViewChild("scatterSplineSeries1", { static: true } )
	private scatterSplineSeries1: IgxScatterSplineSeriesComponent
	@ViewChild("scatterSplineSeries2", { static: true } )
	private scatterSplineSeries2: IgxScatterSplineSeriesComponent
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
          <igx-scatter-spline-series
          name="scatterSplineSeries1"
          #scatterSplineSeries1
          title="Germany"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          xMemberPath="lifeExpectancy"
          yMemberPath="healthExpense"
          [dataSource]="healthDataForGermany"
          markerType="Circle"
          showDefaultTooltip="true">
          </igx-scatter-spline-series>
          <igx-scatter-spline-series
          name="scatterSplineSeries2"
          #scatterSplineSeries2
          title="France"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          xMemberPath="lifeExpectancy"
          yMemberPath="healthExpense"
          [dataSource]="healthDataForFrance"
          markerType="Circle"
          showDefaultTooltip="true">
          </igx-scatter-spline-series>
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

## Angular Scatter High Density Chart

Use the Angular Scatter High Density (HD) Chart to bind and show scatter data ranging from thousands to millions of data points with very little loading time. Due to this chart type being designed for such a large amount of points, it is visualized as tiny dots as opposed to full sized markers, and displays areas with the most data using a higher color density representing a cluster of data points. You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxhighdensityscatterseriescomponent.html), as shown in the example below:

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

<div class="divider--half"></div>

## Angular Scatter Area Chart

Angular Scatter Area Chart draws a colored surface based on a triangulation of X and Y data with a numeric data value assigned to each point. This chart is useful for rendering heat maps, magnetic field strength or Wi-Fi strength in an office. You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxScatterAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterareaseriescomponent.html), as shown in the example below:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartScatterModule, IgxDataChartScatterCoreModule, IgxLegendModule, IgxDataChartInteractivityModule, IgxScatterAreaSeriesModule } from "igniteui-angular-charts";
import { SampleScatterData } from "./SampleScatterData";


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
    IgxDataChartInteractivityModule,
    IgxScatterAreaSeriesModule
],
  providers: [SampleScatterData],
schemas: []
})
export class AppModule {}
```
```typescript
import { Component, OnInit, ViewChild } from "@angular/core";
import { ColorScaleInterpolationMode } from "igniteui-angular-charts";
import { IgxCustomPaletteColorScaleComponent } from "igniteui-angular-charts";
import { IgxDataChartComponent } from "igniteui-angular-charts";
import { IgxScatterAreaSeriesComponent } from "igniteui-angular-charts";
import { SampleScatterData } from "./SampleScatterData";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    @ViewChild("chart", { static: true })
    public chart: IgxDataChartComponent;
    @ViewChild("series", { static: true })
    public series: IgxScatterAreaSeriesComponent;

    public data: any[];
    public colorScale: IgxCustomPaletteColorScaleComponent;
    public seriesScaleMode: string;
    public seriesScaleMin: number;
    public seriesScaleMax: number;

    constructor() {
        this.data = SampleScatterData.create();

        this.seriesScaleMax = 2;
        this.seriesScaleMin = -2;
        this.seriesScaleMode = "InterpolateHSV";
     }

    public ngOnInit() {

        this.colorScale = new IgxCustomPaletteColorScaleComponent();
        this.colorScale.interpolationMode = ColorScaleInterpolationMode.InterpolateHSV;
        this.colorScale.minimumValue = -2;
        this.colorScale.maximumValue = 2;
        this.colorScale.palette = [
            "#8670CB", "#513E8C", "#003F5E",
            "#0C6B99", "#4AC4FF", "#B5CC2E",
            "#FFD034", "#FC8612", "#ED4840"
        ];

        this.series.colorScale = this.colorScale;
    }

    public seriesScaleMinChanged(e: any) {
        const num: number = e.target.value.toString();
        this.colorScale.minimumValue = num;
        this.seriesScaleMin = num;
    }
    public seriesScaleMaxChanged(e: any) {
        const num: number = e.target.value.toString();
        this.colorScale.maximumValue = num;
        this.seriesScaleMax = num;
    }
    public seriesScaleModeChanged(e: any) {
        const mode = e.target.value.toString();
        this.colorScale.interpolationMode = mode;
        this.seriesScaleMode = mode;
    }
}
```
```html
<div class="container vertical">
    <div class="options horizontal">
        <span class="options-label">Scale Mode: </span>
        <select value={{seriesScaleMode}}
            (change)="this.seriesScaleModeChanged($event)">
            <option>Select</option>
            <option>InterpolateRGB</option>
            <option>InterpolateHSV</option>
        </select>
        <label class="options-label">Minimum: </label>
        <label class="optionValue" >
            {{seriesScaleMin}}
        </label>
        <input class="slider" type="range" min="-5" max="0" step="1"
            value={{seriesScaleMin}}
            (change)="this.seriesScaleMinChanged($event)"/>

        <label class="options-label">Maximum: </label>
        <label class="optionValue" >
            {{seriesScaleMax}}
        </label>
        <input class="slider" type="range" min="0" max="5" step="1"
            value={{seriesScaleMax}}
            (change)="this.seriesScaleMaxChanged($event)"/>

    </div>

    <div class="options vertical">
        <label id="legendTitle">Distribution of Magnetic Field</label>
    </div>

    <div class="container">
        <igx-data-chart #chart
            isHorizontalZoomEnabled="true"
            isVerticalZoomEnabled="true"
            width="100%"
            height="100%"
            gridMode="BeforeSeries"
            [dataSource]="data">

            <!-- primary axes required for scatter-contour-series -->
            <igx-numeric-x-axis #xAxis1 labelLocation="OutsideLeft" minimumValue=-180 maximumValue=180 title="Longitude"></igx-numeric-x-axis>
            <igx-numeric-y-axis #yAxis1 labelLocation="OutsideBottom" minimumValue=-90 maximumValue=90 title="Latitude"></igx-numeric-y-axis>

            <igx-scatter-area-series #series
                name="series"
                [xAxis]=xAxis1
                [yAxis]=yAxis1
                xMemberPath="X"
                yMemberPath="Y"
                colorMemberPath="Z">
            </igx-scatter-area-series>
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

## Angular Scatter Contour Chart

Angular Scatter Contour Chart draws colored contour lines based on a triangulation of X and Y data with a numeric data value assigned to each point. This chart is useful for rendering heat maps, magnetic field strength or Wi-Fi strength in an office. You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxScatterContourSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscattercontourseriescomponent.html), as shown in the example below:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartScatterModule, IgxDataChartScatterCoreModule, IgxLegendModule, IgxScatterContourSeriesModule, IgxScatterAreaSeriesModule, IgxDataChartInteractivityModule } from "igniteui-angular-charts";
import { SampleScatterData } from "./SampleScatterData";


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
    IgxScatterContourSeriesModule,
    IgxScatterAreaSeriesModule,
    IgxDataChartInteractivityModule
],
  providers: [SampleScatterData],
schemas: []
})
export class AppModule {}
```
```typescript
import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxDataChartComponent } from "igniteui-angular-charts";
import { SampleScatterData } from "./SampleScatterData";
import { IgxLinearContourValueResolverComponent } from "igniteui-angular-charts";
import { IgxNumericXAxisComponent } from "igniteui-angular-charts";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts";
import { IgxScatterContourSeriesComponent } from "igniteui-angular-charts";
import { IgxValueBrushScaleComponent } from "igniteui-angular-charts";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    public data: any[];

    @ViewChild("chart", { static: true })
    public chart: IgxDataChartComponent;

    @ViewChild("xAxis", { static: true })
    public xAxis: IgxNumericXAxisComponent;

    @ViewChild("yAxis", { static: true })
    public yAxis: IgxNumericYAxisComponent;

    public brushScale: IgxValueBrushScaleComponent;

    constructor() {
        this.data = SampleScatterData.create();

        this.brushScale = new IgxValueBrushScaleComponent();
        this.brushScale.minimumValue = -2;
        this.brushScale.maximumValue = 2;
        this.brushScale.brushes = [
            "#8670CB", "#513E8C", "#003F5E",
            "#0C6B99", "#4AC4FF", "#B5CC2E",
            "#FFD034", "#FC8612", "#ED4840"
        ];
    }

    public ngOnInit() {

    }
}
```
```html
<div class="container vertical">
    <div class="options vertical">
        <label id="legendTitle">Distribution of Magnetic Field</label>
    </div>
    <div class="container">
        <igx-data-chart #chart
            height="100%"
            width="100%"
            [dataSource]="data"
            isHorizontalZoomEnabled=true
            isVerticalZoomEnabled=true
            gridMode="BeforeSeries">
            <!-- primary axes required for scatter-contour-series -->
            <igx-numeric-x-axis #xAxis1 labelLocation="OutsideLeft" minimumValue=-180 maximumValue=180 title="Longitude"></igx-numeric-x-axis>
            <igx-numeric-y-axis #yAxis1 labelLocation="OutsideBottom" minimumValue=-90 maximumValue=90 title="Latitude"></igx-numeric-y-axis>

            <igx-scatter-contour-series
                name="series"
                [xAxis]="xAxis1"
                [yAxis]="yAxis1"
                xMemberPath="X"
                yMemberPath="Y"
                valueMemberPath="Z"
                thickness=2
                [fillScale]="brushScale">
            </igx-scatter-contour-series>
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
- [Bubble Chart](bubble-chart.md)
- [Line Chart](line-chart.md)
- [Spline Chart](spline-chart.md)
- [Shape Chart](shape-chart.md)

## API References

The following table lists API members mentioned in the above sections:

| Chart Type           | Control Name                                                                                                                                                           | API Members                                                                                                                                                                                          |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scatter Marker       | [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) | [`IgxScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterseriescomponent.html)                       |
| Scatter Line         | [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) | [`IgxScatterLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterlineseriescomponent.html)               |
| Scatter Spline       | [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) | [`IgxScatterSplineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscattersplineseriescomponent.html)           |
| High Density Scatter | [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) | [`IgxHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxhighdensityscatterseriescomponent.html) |
| Scatter Area         | [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) | [`IgxScatterAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterareaseriescomponent.html)               |
| Scatter Contour      | [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) | [`IgxScatterContourSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscattercontourseriescomponent.html)         |
