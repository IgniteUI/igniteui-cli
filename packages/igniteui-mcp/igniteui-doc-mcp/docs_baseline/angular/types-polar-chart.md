---
title: Angular Polar Chart | Data Visualization | Infragistics
_description: Infragistics' Angular Polar Chart
_keywords: Angular Charts, Polar Chart, Infragistics
_license: commercial
mentionedTypes: ["XamDataChart", "PolarAreaSeries", "Series"]
namespace: Infragistics.Controls.Charts
_tocName: Polar Chart
_premium: true
---

# Angular Polar Chart

The Ignite UI for Angular Polar Chart uses the polar coordinate system (angle, radius) instead of the Cartesian coordinate system (x, y) to plot data in chart. In other words, Polar Chart takes concepts of [Scatter Series](scatter-chart.md) and wrap them around a circle rather than stretching data points horizontally. It is often used to plot scientific data (e.g. wind direction and speed, direction, and strength of magnetic field, location of objects in solar system), and can highlight the deviation of collected data from predicted results.

## Angular Polar Area Chart

The Polar Area Chart renders using a collection of polygons connecting data points and it uses the same concepts of data plotting as the [Category Area Chart](area-chart.md#angular-area-chart-example) with the difference that the visualization wraps data points around a circle rather than stretching them horizontally. You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxPolarAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpolarareaseriescomponent.html), as shown in the example below:

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
import { IgxLegendComponent, IgxDataChartComponent, IgxNumericAngleAxisComponent, IgxNumericRadiusAxisComponent, IgxPolarAreaSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	@ViewChild("polarAreaSeries1", { static: true } )
	private polarAreaSeries1: IgxPolarAreaSeriesComponent
	@ViewChild("polarAreaSeries2", { static: true } )
	private polarAreaSeries2: IgxPolarAreaSeriesComponent
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
          <igx-polar-area-series
          name="PolarAreaSeries1"
          #polarAreaSeries1
          [dataSource]="boatSailingData"
          [angleAxis]="angleAxis"
          [radiusAxis]="radiusAxis"
          angleMemberPath="direction"
          radiusMemberPath="windSpeed"
          showDefaultTooltip="false"
          areaFillOpacity="0.8"
          thickness="1"
          title="Wind Speed"
          markerType="Circle">
          </igx-polar-area-series>
          <igx-polar-area-series
          name="PolarAreaSeries2"
          #polarAreaSeries2
          [dataSource]="boatSailingData"
          [angleAxis]="angleAxis"
          [radiusAxis]="radiusAxis"
          angleMemberPath="direction"
          radiusMemberPath="boatSpeed"
          showDefaultTooltip="false"
          areaFillOpacity="0.8"
          thickness="1"
          title="Boat Speed"
          markerType="Circle">
          </igx-polar-area-series>
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

## Angular Polar Spline Area Chart

The Polar Spline Area Chart renders also as a collection of polygons but they have curved splines connecting data points instead of straight lines like [Polar Area Chart](polar-chart.md#angular-polar-area-chart) does. You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxPolarAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpolarareaseriescomponent.html), as shown in the example below:

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
import { IgxDataChartComponent, IgxNumericAngleAxisComponent, IgxNumericRadiusAxisComponent, IgxPolarSplineAreaSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	@ViewChild("polarSplineAreaSeries1", { static: true } )
	private polarSplineAreaSeries1: IgxPolarSplineAreaSeriesComponent
	@ViewChild("polarSplineAreaSeries2", { static: true } )
	private polarSplineAreaSeries2: IgxPolarSplineAreaSeriesComponent
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
          <igx-polar-spline-area-series
          name="PolarSplineAreaSeries1"
          #polarSplineAreaSeries1
          [dataSource]="boatSailingData"
          [angleAxis]="angleAxis"
          [radiusAxis]="radiusAxis"
          angleMemberPath="direction"
          radiusMemberPath="windSpeed"
          showDefaultTooltip="false"
          areaFillOpacity="0.8"
          thickness="1"
          title="Wind Speed"
          markerType="Circle">
          </igx-polar-spline-area-series>
          <igx-polar-spline-area-series
          name="PolarSplineAreaSeries2"
          #polarSplineAreaSeries2
          [dataSource]="boatSailingData"
          [angleAxis]="angleAxis"
          [radiusAxis]="radiusAxis"
          angleMemberPath="direction"
          radiusMemberPath="boatSpeed"
          showDefaultTooltip="false"
          areaFillOpacity="0.8"
          thickness="1"
          title="Boat Speed"
          markerType="Circle">
          </igx-polar-spline-area-series>
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

## Angular Polar Marker Chart

The Polar Marker Chart renders using a collection of markers representing data points in polar (angle/radius) coordinate system. This chart uses the same concepts of data plotting as the [Scatter Marker Chart](scatter-chart.md#angular-scatter-marker-chart) with the difference that the visualization wraps data points around a circle rather than stretching them horizontally. You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxPolarScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpolarscatterseriescomponent.html), as shown in the example below:

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


<div class="divider--half"></div>

## Angular Polar Line Chart

The Polar Line Chart renders using a collection of straight lines connecting data points in polar (angle/radius) coordinate system. This chart uses the same concepts of data plotting as the [Scatter Line Chart](scatter-chart.md#angular-scatter-line-chart) with the difference that the visualization wraps data points around a circle rather than stretching them horizontally. You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxPolarLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpolarlineseriescomponent.html), as shown in the example below:

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

## Angular Polar Spline Chart

The Polar Spline Chart renders using a collection of curved splines connecting data points in polar (angle/radius) coordinate system. This Chart uses the same concepts of data plotting as the [Scatter Spline Chart](scatter-chart.md#angular-scatter-spline-chart) with the difference that the visualization wraps data points around a circle rather than stretching them horizontally. You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxPolarSplineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpolarsplineseriescomponent.html), as shown in the example below:

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
import { IgxDataChartComponent, IgxNumericAngleAxisComponent, IgxNumericRadiusAxisComponent, IgxPolarSplineSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	@ViewChild("polarSplineSeries1", { static: true } )
	private polarSplineSeries1: IgxPolarSplineSeriesComponent
	@ViewChild("polarSplineSeries2", { static: true } )
	private polarSplineSeries2: IgxPolarSplineSeriesComponent
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
          <igx-polar-spline-series
          name="PolarSplineSeries1"
          #polarSplineSeries1
          [dataSource]="boatSailingData"
          [angleAxis]="angleAxis"
          [radiusAxis]="radiusAxis"
          angleMemberPath="direction"
          radiusMemberPath="windSpeed"
          showDefaultTooltip="false"
          thickness="1"
          title="Wind Speed"
          markerType="Circle">
          </igx-polar-spline-series>
          <igx-polar-spline-series
          name="PolarSplineSeries2"
          #polarSplineSeries2
          [dataSource]="boatSailingData"
          [angleAxis]="angleAxis"
          [radiusAxis]="radiusAxis"
          angleMemberPath="direction"
          radiusMemberPath="boatSpeed"
          showDefaultTooltip="false"
          thickness="1"
          title="Boat Speed"
          markerType="Circle">
          </igx-polar-spline-series>
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

## Angular Polar Chart Styling

Once our polar chart is created, we may want to make some further styling customizations such as a change of the line colors, marker types, or outline colors of those markers. You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxPolarAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpolarareaseriescomponent.html), as shown in the example below:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartPolarModule, IgxDataChartPolarCoreModule, IgxDataChartInteractivityModule, IgxDataChartAnnotationModule, IgxLegendModule } from 'igniteui-angular-charts';

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
import { BoatSailingDataItem, BoatSailingData } from './BoatSailingData';
import { IgxLegendComponent, IgxDataChartComponent, IgxNumericAngleAxisComponent, IgxNumericRadiusAxisComponent, IgxPolarAreaSeriesComponent } from 'igniteui-angular-charts';

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
	@ViewChild("polarAreaSeries1", { static: true } )
	private polarAreaSeries1: IgxPolarAreaSeriesComponent
	@ViewChild("polarAreaSeries2", { static: true } )
	private polarAreaSeries2: IgxPolarAreaSeriesComponent
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
      isVerticalZoomEnabled="false"
      markerBrushes="white"
      markerOutlines="rgba(140, 231, 217, 1) rgba(238, 88, 121, 1)"
      brushes="rgba(140, 231, 217, 1) rgba(238, 88, 121, 1)"
      outlines="rgba(140, 231, 217, 1) rgba(238, 88, 121, 1)">
          <igx-numeric-angle-axis
          name="angleAxis"
          #angleAxis
          startAngleOffset="-90"
          interval="30"
          minimumValue="0"
          maximumValue="360"
          labelTextStyle="normal bold 14px Verdana">
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
          <igx-polar-area-series
          name="PolarAreaSeries1"
          #polarAreaSeries1
          [dataSource]="boatSailingData"
          [angleAxis]="angleAxis"
          [radiusAxis]="radiusAxis"
          angleMemberPath="direction"
          radiusMemberPath="windSpeed"
          showDefaultTooltip="true"
          areaFillOpacity="0.3"
          thickness="1"
          title="Wind Speed"
          markerType="Circle">
          </igx-polar-area-series>
          <igx-polar-area-series
          name="PolarAreaSeries2"
          #polarAreaSeries2
          [dataSource]="boatSailingData"
          [angleAxis]="angleAxis"
          [radiusAxis]="radiusAxis"
          angleMemberPath="direction"
          radiusMemberPath="boatSpeed"
          showDefaultTooltip="true"
          areaFillOpacity="0.3"
          thickness="1"
          title="Boat Speed"
          markerType="Circle">
          </igx-polar-area-series>
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
- [Donut Chart](donut-chart.md)
- [Line Chart](line-chart.md)
- [Pie Chart](pie-chart.md)
- [Radial Chart](radial-chart.md)
- [Scatter Chart](scatter-chart.md)
- [Spline Chart](spline-chart.md)

## API References

The following table lists API members mentioned in the above sections:

- [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)
- [`IgxPolarAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpolarareaseriescomponent.html)
- [`IgxPolarLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpolarlineseriescomponent.html)
- [`IgxPolarSplineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpolarsplineseriescomponent.html)
- [`IgxPolarSplineAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpolarsplineareaseriescomponent.html)
- [`IgxPolarScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpolarscatterseriescomponent.html)
- `ItemsSource`
- [`angleMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpolarbasecomponent.html#angleMemberPath)
- [`radiusMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpolarbasecomponent.html#radiusMemberPath)
- [`IgxNumericAngleAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericangleaxiscomponent.html)
- [`IgxNumericRadiusAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericradiusaxiscomponent.html)
