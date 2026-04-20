---
title: Angular Stacked Chart | Data Visualization | Infragistics
_description: Infragistics' Angular Stacked Chart
_keywords: Angular Charts, Stacked Chart, Stacked 100% Chart, Infragistics
_license: commercial
mentionedTypes: ["XamDataChart", "StackedAreaSeries", "Stacked100AreaSeries", "StackedBarSeries", "Stacked100BarSeries", "StackedColumnSeries", "Stacked100ColumnSeries", "StackedLineSeries", "Stacked100LineSeries", "StackedSplineSeries", "Stacked100SplineSeries", "StackedSplineAreaSeries", "Stacked100SplineAreaSeries", "Series"]
namespace: Infragistics.Controls.Charts
_tocName: Stacked Chart
_premium: true
---

# Angular Stacked Chart

The Ignite UI for Angular Stacked Chart belongs to a special group of charts that render multiple values of data items as stacked area/polygons, bars, columns, lines, or splines. Standard Stacked Charts render actual values of data items while Stacked 100% Charts render values as percentage of total values.

## Angular Stacked Chart Types

The following example, you can use the drop-down to switch between all of the different types stacked charts available in the Angular [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartInteractivityModule, IgxLegendModule, IgxDataChartStackedModule, IgxStackedFragmentSeriesModule } from "igniteui-angular-charts";
import { SharedData } from "./SharedData";


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
    IgxDataChartInteractivityModule,
    IgxLegendModule,
    IgxDataChartStackedModule,
    IgxStackedFragmentSeriesModule
],
  providers: [SharedData],
schemas: []
})
export class AppModule {}
```
```typescript
import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxCategoryXAxisComponent } from "igniteui-angular-charts";
import { IgxCategoryYAxisComponent } from "igniteui-angular-charts";
import { IgxDataChartComponent } from "igniteui-angular-charts";
import { IgxNumericXAxisComponent } from "igniteui-angular-charts";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts";
import { IgxStacked100AreaSeriesComponent } from "igniteui-angular-charts";
import { IgxStacked100BarSeriesComponent } from "igniteui-angular-charts";
import { IgxStacked100ColumnSeriesComponent } from "igniteui-angular-charts";
import { IgxStacked100LineSeriesComponent } from "igniteui-angular-charts";
import { IgxStacked100SplineSeriesComponent } from "igniteui-angular-charts";
import { IgxStackedAreaSeriesComponent } from "igniteui-angular-charts";
import { IgxStackedBarSeriesComponent } from "igniteui-angular-charts";
import { IgxStackedColumnSeriesComponent } from "igniteui-angular-charts";
import { IgxStackedFragmentSeriesComponent } from "igniteui-angular-charts";
import { IgxStackedLineSeriesComponent } from "igniteui-angular-charts";
import { IgxStackedSplineSeriesComponent } from "igniteui-angular-charts";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    public data: any[];

    public catXAxis: IgxCategoryXAxisComponent;
    public numYAxis: IgxNumericYAxisComponent;

    public catYAxis: IgxCategoryYAxisComponent;
    public numXAxis: IgxNumericXAxisComponent;

    @ViewChild("chart", { static: true })
    public chart: IgxDataChartComponent;

    constructor() {
        this.catXAxis = new IgxCategoryXAxisComponent();
        this.catXAxis.label = "Year";

        this.catYAxis = new IgxCategoryYAxisComponent();
        this.catYAxis.label = "Year";

        this.numXAxis = new IgxNumericXAxisComponent();
        this.numYAxis = new IgxNumericYAxisComponent();

        this.initData();
    }

    public ngOnInit() {
        this.setSeries("Stacked Column");
    }

    public getFragments(): IgxStackedFragmentSeriesComponent[] {
        const fragment1 = new IgxStackedFragmentSeriesComponent();
        fragment1.valueMemberPath = "USA";
        fragment1.title = "USA";
        const fragment2 = new IgxStackedFragmentSeriesComponent();
        fragment2.valueMemberPath = "Europe";
        fragment2.title = "Europe";
        const fragment3 = new IgxStackedFragmentSeriesComponent();
        fragment3.valueMemberPath = "China";
        fragment3.title = "China";

        const fragments: IgxStackedFragmentSeriesComponent[] = [];
        fragments.push(fragment1);
        fragments.push(fragment2);
        fragments.push(fragment3);
        return fragments;
    }

    public onSeriesTypeChanged(e: any) {
        const selectedSeries = e.target.value.toString();
        this.chart.series.clear();
        this.setSeries(selectedSeries);
    }

    public setSeries(seriesType: string) {

        this.chart.axes.clear();
        this.chart.series.clear();

        const fragments = this.getFragments();

        if (seriesType === "Stacked Column") {
            const stack = new IgxStackedColumnSeriesComponent();
            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;
            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);
            for (const frag of fragments) {
                stack.series.add(frag);
            }
            this.chart.series.add(stack);

        } else if (seriesType === "Stacked 100 Column") {
            const stack = new IgxStacked100ColumnSeriesComponent();
            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;
            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);
            for (const frag of fragments) {
                stack.series.add(frag);
            }
            this.chart.series.add(stack);

        } else if (seriesType === "Stacked Area") {
            const stack = new IgxStackedAreaSeriesComponent();
            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;
            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);
            for (const frag of fragments) {
                stack.series.add(frag);
            }
            this.chart.series.add(stack);

        } else if (seriesType === "Stacked 100 Area") {
            const stack = new IgxStacked100AreaSeriesComponent();
            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;
            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);
            for (const frag of fragments) {
                stack.series.add(frag);
            }
            this.chart.series.add(stack);

        } else if (seriesType === "Stacked Line") {
            const stack = new IgxStackedLineSeriesComponent();
            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;
            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);
            for (const frag of fragments) {
                stack.series.add(frag);
            }
            this.chart.series.add(stack);

        } else if (seriesType === "Stacked 100 Line") {
            const stack = new IgxStacked100LineSeriesComponent();
            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;
            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);
            for (const frag of fragments) {
                stack.series.add(frag);
            }
            this.chart.series.add(stack);

        } else if (seriesType === "Stacked Spline") {
            const stack = new IgxStackedSplineSeriesComponent();
            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;
            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);
            for (const frag of fragments) {
                stack.series.add(frag);
            }
            this.chart.series.add(stack);

        } else if (seriesType === "Stacked 100 Spline") {
            const stack = new IgxStacked100SplineSeriesComponent();
            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;
            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);
            for (const frag of fragments) {
                stack.series.add(frag);
            }
            this.chart.series.add(stack);

        } else if (seriesType === "Stacked Bar") {
            const stack = new IgxStackedBarSeriesComponent();
            stack.xAxis = this.numXAxis;
            stack.yAxis = this.catYAxis;
            this.chart.axes.add(this.numXAxis);
            this.chart.axes.add(this.catYAxis);
            for (const frag of fragments) {
                stack.series.add(frag);
            }
            this.chart.series.add(stack);

        } else if (seriesType === "Stacked 100 Bar") {
            const stack = new IgxStacked100BarSeriesComponent();
            stack.xAxis = this.numXAxis;
            stack.yAxis = this.catYAxis;
            this.chart.axes.add(this.numXAxis);
            this.chart.axes.add(this.catYAxis);
            for (const frag of fragments) {
                stack.series.add(frag);
            }

            this.chart.series.add(stack);
        }
    }

    public initData() {

        this.data = [
            { Year: "2011", USA: 14,  Europe: 65, China: 30 },
            { Year: "2012", USA: 16,  Europe: 75, China: 40 },
            { Year: "2013", USA: 17,  Europe: 80, China: 50 },
            { Year: "2014", USA: 30,  Europe: 40, China: 45 },
            { Year: "2015", USA: 20,  Europe: 80, China: 50 },
            { Year: "2016", USA: 50,  Europe: 55, China: 90 },
            { Year: "2017", USA: 50,  Europe: 80, China: 130 },
            { Year: "2018", USA: 65,  Europe: 50, China: 135 },
            { Year: "2019", USA: 80,  Europe: 90, China: 150 },
            { Year: "2020", USA: 115, Europe: 70, China: 175 },
            { Year: "2021", USA: 150, Europe: 90, China: 195 }
        ];
    }
}
```
```html
<div class="container vertical">
    <div class="options vertical">
        <span id="legendTitle">Electricity Production from Renewables</span>
        <div class="legend">
            <igx-legend #legend orientation="horizontal"></igx-legend>
        </div>
        <div class="overlay-right">
            <div class="options horizontal">
                <label class="options-label">Stacked Series: </label>
                <select (change)=onSeriesTypeChanged($event)>
                    <option>Stacked Column</option>
                    <option>Stacked 100 Column</option>
                    <option>Stacked Area</option>
                    <option>Stacked 100 Area</option>
                    <option>Stacked Line</option>
                    <option>Stacked 100 Line</option>
                    <option>Stacked Spline</option>
                    <option>Stacked 100 Spline</option>
                    <option>Stacked Bar</option>
                    <option>Stacked 100 Bar</option>
                </select>
            </div>
        </div>
    </div>

    <div class="container">
        <igx-data-chart #chart width="100%" height="100%" [dataSource]="data" [legend]="legend">
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

The following sections demonstrate individual types of Ignite UI for Angular Stacked Charts.

## Angular Stacked Area Chart

Stacked Area Charts are rendered using a collection of points connected by line segments, with the area below the line filled in and stacked on top of each other. Stacked Area Charts follow all the same requirements as [Area Chart](area-chart.md), with the only difference being that visually, the shaded areas are stacked on top of each other.

You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxStackedAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedareaseriescomponent.html), as shown in the example below.

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
import { IgxLegendComponent, IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxStackedAreaSeriesComponent, IgxStackedFragmentSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	@ViewChild("stackedAreaSeries", { static: true } )
	private stackedAreaSeries: IgxStackedAreaSeriesComponent
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
          <igx-stacked-area-series
          name="stackedAreaSeries"
          #stackedAreaSeries
          [dataSource]="continentsBirthRate"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          showDefaultTooltip="true"
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
          </igx-stacked-area-series>
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

## Angular Stacked 100 Area Chart

Sometimes the series represent part of a whole being changed over time e.g. a country's energy consumption related to the sources from which it is produced. In such cases representing all stacked elements equally may be a better idea.

You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxStacked100AreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100areaseriescomponent.html), as shown in the example below.

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
import { IgxLegendComponent, IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxStacked100AreaSeriesComponent, IgxStackedFragmentSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	@ViewChild("stacked100AreaSeries", { static: true } )
	private stacked100AreaSeries: IgxStacked100AreaSeriesComponent
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
          title="Millions of Births"
          titleAngle="-90"
          labelFormat="{0}%">
          </igx-numeric-y-axis>
          <igx-stacked-100-area-series
          name="stacked100AreaSeries"
          #stacked100AreaSeries
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
          </igx-stacked-100-area-series>
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

## Angular Stacked Bar Chart

A Stacked Bar Chart, or Stacked Bar Graph, is a type of category chart that is used to compare the composition of different categories of data by displaying different sized fragments in the horizontal bars of the chart. The length of each bar, or stack of fragments, is proportionate to its overall value.

The Stacked Bar Chart differs from the [Bar Chart](bar-chart.md) in that the data points representing your data are stacked next to each other horizontally to visually group your data. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the X-Axis, and all negative values are grouped on the negative side of the X-Axis.

In this example of an Stacked Bar Chart, we have a Numeric X Axis (bottom labels of the chart) and a Category Y Axis (left labels of the chart). You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxStackedBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedbarseriescomponent.html), as shown in the example below.

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

The Angular Stacked 100% Bar Chart is identical to the Angular stacked bar chart in all aspects except in their treatment of the values on X-Axis (bottom labels of the chart). Instead of presenting a direct representation of the data, the stacked 100% bar chart presents the data in terms of percent of the sum of all values in a data point.

In this example of a Stacked 100% Bar Chart, the Energy Product values are shown as a 100% value of all of the data in the fragments of the horizontal bars. You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxStacked100BarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100barseriescomponent.html), as shown in the example below.

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

## Angular Stacked Column Chart

The Stacked Column Chart is identical to the [Column Chart](column-chart.md) in all aspects, except the series are represented on top of one another rather than to the side. The Stacked Column Chart is used to show comparing results between series. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the Y-Axis, and all negative values are grouped on the negative side of the Y-Axis. The Stacked Column Chart uses the same concepts of data plotting as the Stacked Bar Chart but data points are stacked along vertical line (Y-Axis) rather than along horizontal line (X-Axis).

You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxStackedColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedcolumnseriescomponent.html), as shown in the example below.

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

The Stacked 100% Column Chart is identical to the Stacked Column Chart in all aspects except in their treatment of the values on Y-Axis. Instead of presenting a direct representation of the data, the Stacked 100% Column Chart presents the data in terms of percent of the sum of all values in a data point.

The example below shows a study made for online shopping traffic by departments via tablet, phone and personal computers. You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxStacked100ColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100columnseriescomponent.html), as shown in the example below.

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

## Angular Stacked Spline Area Chart

Stacked Spline Area Charts are rendered using a collection of points connected by curved spline segments, with the area below the curved spline fill in and stacked on top of each other. Stacked Spline Area Charts follow all of the same requirements as [Area Chart](area-chart.md), with the only difference being that the visually shaded areas are stacked on top of each other.

You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxStackedSplineAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedsplineareaseriescomponent.html), as shown in the example below.

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
import { IgxLegendComponent, IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxStackedSplineAreaSeriesComponent, IgxStackedFragmentSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	@ViewChild("stackedSplineAreaSeries", { static: true } )
	private stackedSplineAreaSeries: IgxStackedSplineAreaSeriesComponent
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
          <igx-stacked-spline-area-series
          name="stackedSplineAreaSeries"
          #stackedSplineAreaSeries
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
          </igx-stacked-spline-area-series>
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

## Angular Stacked 100% Spline Area Chart

The Stacked 100% Spline Area Chart is identical to the Stacked Spline Area Chart in all aspects except for the treatment of the values on the y-axis. Instead of presenting a direct representation of the data, the Stacked 100% Spline Area Chart presents the data in terms of a percent of the sum of all values in a particular data point. Sometimes the chart represents part of a whole being changed over time. For example, a country's energy consumption related to the sources from which it is produced. In such cases, representing all stacked elements equally may be a better idea.

You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxStacked100SplineAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100splineareaseriescomponent.html), as shown in the example below.

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
import { IgxLegendComponent, IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxStacked100SplineAreaSeriesComponent, IgxStackedFragmentSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	@ViewChild("stacked100SplineAreaSeries", { static: true } )
	private stacked100SplineAreaSeries: IgxStacked100SplineAreaSeriesComponent
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
          <igx-stacked-100-spline-area-series
          name="stacked100SplineAreaSeries"
          #stacked100SplineAreaSeries
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
          </igx-stacked-100-spline-area-series>
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

## Angular Stacked Spline Chart

The Stacked Spline Chart is often used to show the change of value over time such as the amount of renewable electricity produced for several years between regions. You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxStackedSplineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedsplineseriescomponent.html), as shown in the example below.

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
import { IgxLegendComponent, IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxStackedSplineSeriesComponent, IgxStackedFragmentSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	@ViewChild("stackedSplineSeries", { static: true } )
	private stackedSplineSeries: IgxStackedSplineSeriesComponent
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
          titleLeftMargin="10"
          labelFormat="{0} m">
          </igx-numeric-y-axis>
          <igx-stacked-spline-series
          name="stackedSplineSeries"
          #stackedSplineSeries
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
          </igx-stacked-spline-series>
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

## Angular Stacked 100% Spline Chart

The Stacked 100% Spline Chart is identical to the Stacked Spline Chart in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the Stacked 100% Spline Chart presents the data in terms of percent of the sum of all values in a data point. The example below shows a study made for online shopping traffic by departments via tablet, phone and personal computers.

You can create this type of chart in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxStacked100SplineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100splineseriescomponent.html).

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
import { IgxLegendComponent, IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxStacked100SplineSeriesComponent, IgxStackedFragmentSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	@ViewChild("stacked100SplineSeries", { static: true } )
	private stacked100SplineSeries: IgxStacked100SplineSeriesComponent
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
          labelFormat="{0}%">
          </igx-numeric-y-axis>
          <igx-stacked-100-spline-series
          name="stacked100SplineSeries"
          #stacked100SplineSeries
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
          </igx-stacked-100-spline-series>
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
- [Bar Chart](bar-chart.md)
- [Column Chart](column-chart.md)
- [Line Chart](line-chart.md)
- [Spline Chart](spline-chart.md)

## API References

The following table lists API members mentioned in the above sections:

| Chart Type               | Control Name                                                                                                                                                           | API Members                                                                                                                                                                                              |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stacked Area             | [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) | [`IgxStackedAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedareaseriescomponent.html)                   |
| Stacked Bar              | [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) | [`IgxStackedBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedbarseriescomponent.html)                     |
| Stacked Column           | [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) | [`IgxStackedColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedcolumnseriescomponent.html)               |
| Stacked Line             | [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) | [`IgxStackedLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedlineseriescomponent.html)                   |
| Stacked Spline           | [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) | [`IgxStackedSplineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedsplineseriescomponent.html)               |
| Stacked Spline Area      | [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) | [`IgxStackedSplineAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedsplineareaseriescomponent.html)       |
| Stacked 100% Area        | [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) | [`IgxStacked100AreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100areaseriescomponent.html)             |
| Stacked 100% Bar         | [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) | [`IgxStacked100BarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100barseriescomponent.html)               |
| Stacked 100% Column      | [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) | [`IgxStacked100ColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100columnseriescomponent.html)         |
| Stacked 100% Line        | [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) | [`IgxStacked100LineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100lineseriescomponent.html)             |
| Stacked 100% Spline      | [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) | [`IgxStacked100SplineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100splineseriescomponent.html)         |
| Stacked 100% Spline Area | [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) | [`IgxStacked100SplineAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100splineareaseriescomponent.html) |
