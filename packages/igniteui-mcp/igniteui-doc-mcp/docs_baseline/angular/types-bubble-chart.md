---
title: Angular Bubble Chart | Data Visualization | Infragistics
_description: Infragistics' Angular Bubble Chart
_keywords: Angular Charts, Bubble Chart, Infragistics
_license: commercial
mentionedTypes: ["Series", "BubbleSeries", "ScatterSeries", "MarkerType"]
namespace: Infragistics.Controls.Charts
_tocName: Bubble Chart
_premium: true
---

# Angular Bubble Chart

The Ignite UI for Angular Bubble Chart is a type of [Scatter Chart](scatter-chart.md) that show markers with variable scaling to represent the relationship among items in several distinct series of data or to plot data items using x and y coordinates. These coordinates of the data point are determined by two numeric data columns. The Bubble Chart draws attention to uneven intervals or clusters of data. This chart is often used to plot scientific data, and can highlight the deviation of collected data from predicted results. The Bubble Chart has many of the characteristics of the [Scatter Marker Chart](scatter-chart.md#angular-scatter-marker-chart) but with the option to have various radius scale sizes.

## Angular Bubble Chart Example

You can create Ignite UI for Angular Bubble Chart in [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control using the [`IgxBubbleSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html) and two numeric axes, as shown in the example below.

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

## Angular Bubble Chart with Single Series

You can bind your data to `ItemsSource` property of [`IgxBubbleSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html) and map data columns using its [`xMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterbasecomponent.html#xMemberPath), [`yMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterbasecomponent.html#yMemberPath), [`radiusMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html#radiusMemberPath) properties, as shown in the example below:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxNumberAbbreviatorModule, IgxDataChartCoreModule, IgxDataChartScatterModule, IgxDataChartScatterCoreModule, IgxDataChartInteractivityModule, IgxDataChartAnnotationModule } from 'igniteui-angular-charts';

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
import { WorldStatsItem, WorldStats } from './WorldStats';
import { IgxDataChartComponent, IgxNumericXAxisComponent, IgxNumericYAxisComponent, IgxBubbleSeriesComponent, IgxSizeScaleComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	@ViewChild("dataToolTipLayer", { static: true } )
	private dataToolTipLayer: IgxDataToolTipLayerComponent
    private _worldStats: WorldStats = null;
    public get worldStats(): WorldStats {
        if (this._worldStats == null)
        {
            this._worldStats = new WorldStats();
        }
        return this._worldStats;
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
      chartTitle="Population vs. Public Debt vs. GDP"
      titleTopMargin="10"
      titleBottomMargin="0">
          <igx-numeric-x-axis
          name="xAxis"
          #xAxis
          title="Population"
          minimumValue="100"
          maximumValue="10000000000"
          isLogarithmic="true"
          abbreviateLargeNumbers="true">
          </igx-numeric-x-axis>
          <igx-numeric-y-axis
          name="yAxis"
          #yAxis
          title="Public Debt per GDP (%)"
          titleLeftMargin="10"
          isLogarithmic="true"
          abbreviateLargeNumbers="true"
          maximumValue="1000">
          </igx-numeric-y-axis>
          <igx-bubble-series
          name="bubbleSeries1"
          #bubbleSeries1
          xMemberPath="population"
          yMemberPath="publicDebt"
          radiusMemberPath="gdpPerPerson"
          [radiusScale]="sizeScale1"
          title="Country"
          yMemberAsLegendUnit="%"
          yMemberAsLegendLabel="Debt"
          xMemberAsLegendLabel="Population"
          radiusMemberAsLegendLabel="GDP"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          [dataSource]="worldStats"
          markerType="Circle"
          showDefaultTooltip="true">
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
          layoutMode="Vertical"
          badgeShape="Hidden"
          headerRowVisible="false">
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

## Angular Bubble Chart with Multiple Series

In Angular Bubble Chart, binding multiple data sources works by setting each new data source to `ItemsSource` property of a additional [`IgxBubbleSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html), as shown in the example below:

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

## Angular Bubble Chart Styling

In Angular Bubble Chart, you can customize shape of bubble markers using [`markerType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmarkerseriescomponent.html#markerType) property, their size with [`radiusScale`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html#radiusScale) property, and their appearance using [`markerBrush`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmarkerseriescomponent.html#markerBrush), [`markerOutline`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmarkerseriescomponent.html#markerOutline), [`markerThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmarkerseriescomponent.html#markerThickness) properties. In addition, you can also color bubble markers based on a data column using [`fillMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html#fillMemberPath) and [`fillScale`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html#fillScale) properties. In this example, usage of above properties is demonstrated.

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
import { WorldStatsItem, WorldStats } from './WorldStats';
import { IgxDataChartComponent, IgxNumericXAxisComponent, IgxNumericYAxisComponent, IgxBubbleSeriesComponent, IgxSizeScaleComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	@ViewChild("dataToolTipLayer", { static: true } )
	private dataToolTipLayer: IgxDataToolTipLayerComponent
    private _worldStats: WorldStats = null;
    public get worldStats(): WorldStats {
        if (this._worldStats == null)
        {
            this._worldStats = new WorldStats();
        }
        return this._worldStats;
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
      chartTitle="Population vs. Public Debt vs. GDP"
      titleTopMargin="10"
      titleBottomMargin="0">
          <igx-numeric-x-axis
          name="xAxis"
          #xAxis
          title="Population"
          minimumValue="100"
          maximumValue="10000000000"
          isLogarithmic="true"
          abbreviateLargeNumbers="true">
          </igx-numeric-x-axis>
          <igx-numeric-y-axis
          name="yAxis"
          #yAxis
          title="Public Debt per GDP (%)"
          titleLeftMargin="10"
          isLogarithmic="true"
          abbreviateLargeNumbers="true"
          maximumValue="1000">
          </igx-numeric-y-axis>
          <igx-bubble-series
          name="bubbleSeries1"
          #bubbleSeries1
          title="Country"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          xMemberPath="population"
          yMemberPath="publicDebt"
          radiusMemberPath="gdpPerPerson"
          yMemberAsLegendUnit="%"
          yMemberAsLegendLabel="Debt"
          xMemberAsLegendLabel="Population"
          radiusMemberAsLegendLabel="GDP"
          [dataSource]="worldStats"
          markerType="Circle"
          markerOutline="black"
          markerBrush="rgba(67, 162, 250, 1)"
          markerFillOpacity="0.5"
          markerThickness="1"
          showDefaultTooltip="true"
          [radiusScale]="sizeScale1">
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
          layoutMode="Vertical"
          badgeShape="Hidden"
          includedColumns="x, y, radius"
          headerRowVisible="false">
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

- [Scatter Chart](scatter-chart.md)
- [Shape Chart](shape-chart.md)

## API References

The following table lists API members mentioned in the above sections:

- [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)
- [`IgxBubbleSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html)
- [`IgxScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterseriescomponent.html)
- `ItemsSource`
- [`fillMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html#fillMemberPath)
- [`fillScale`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html#fillScale)
- [`markerType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmarkerseriescomponent.html#markerType)
- [`markerBrush`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmarkerseriescomponent.html#markerBrush)
- [`markerOutline`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmarkerseriescomponent.html#markerOutline)
- [`markerThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmarkerseriescomponent.html#markerThickness)
- [`radiusScale`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html#radiusScale)
- [`radiusMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html#radiusMemberPath)
- [`xMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterbasecomponent.html#xMemberPath)
- [`yMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterbasecomponent.html#yMemberPath)
