---
title: Angular Chart Annotations | Data Visualization | Infragistics
_description: Infragistics' Angular Chart Annotations
_keywords: Angular Charts, Annotations, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Annotations
_premium: true
---

# Angular Chart Annotations

The Angular chart's hover interactions and annotations are implemented through hover interaction layers, which are series that are added to the series collection. These layers are dependent on the cursor position. Each of these annotation layers provides a different hover interaction that may be used individually or combined with others to provide powerful hover interactions.

## Angular Annotations Example

The following example demonstrates the annotation layers that are available on the Angular chart. Click on the checkboxes to turn each layer on and off.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxCategoryChartModule, IgxLegendModule } from "igniteui-angular-charts";


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
    IgxCategoryChartModule,
    IgxLegendModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from "@angular/core";
import { IgxDataChartComponent } from "igniteui-angular-charts";
import { IgxCalloutLayerComponent } from "igniteui-angular-charts";
import { IgxSeriesComponent } from "igniteui-angular-charts";

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    public data: any[];
    public calloutData: any[];

    public crosshairsDisplay: string = "Both";
    public crosshairAnnotations: boolean = true;
    public finalValuesVisible: boolean = true;
    public calloutsVisible: boolean = true;
    public markerType: string = "Circle";

    constructor() {
    }

    public ngOnInit() {

        this.data = [
            { Year: "2009", USA: 19 },
            { Year: "2010", USA: 24 },
            { Year: "2011", USA: 28 },
            { Year: "2012", USA: 26 },
            { Year: "2013", USA: 38 },
            { Year: "2014", USA: 31 },
            { Year: "2015", USA: 19 },
            { Year: "2016", USA: 52 },
            { Year: "2017", USA: 50 },
            { Year: "2018", USA: 34 },
            { Year: "2019", USA: 38 },
        ];

        this.calloutData = [];

        for (let i = 0; i < this.data.length; i++) {
            const item = this.data[i];
            this.calloutData.push({ index: i, label: item.USA + " TWh", value: item.USA });
        }
    }

    public OnCrosshairVisibilityChanged(e: any) {
        const val = e.target.checked;

        if (val) {
            this.crosshairsDisplay = "Both";
        }
        else {
            this.crosshairsDisplay = "None";
        }
    }

    public OnMarkersVisibilityChanged(e: any) {
        const val = e.target.checked;

        if (val) {
            this.markerType = "Circle";
        }
        else {
            this.markerType = "None";
        }
    }

    public OnCalloutsVisibilityChanged(e: any) {
        this.calloutsVisible = e.target.checked;
    }

    public OnFinalValueVisibilityChanged(e: any) {
        this.finalValuesVisible = e.target.checked;
    }
}
```
```html
<div class="container vertical">
    <div class="options horizontal">
        <label class="options-label">Annotations: </label>
        <label class="options-item">
            <input type="checkbox" checked=true (change)="OnCrosshairVisibilityChanged($event)" /> Crosshair
        </label>
        <label class="options-item">
            <input type="checkbox" checked=true (change)="OnCalloutsVisibilityChanged($event)" /> Callouts
        </label>
        <label class="options-item">
            <input type="checkbox" checked=true (change)="OnFinalValueVisibilityChanged($event)" /> Final Values
        </label>
        <label class="options-item">
            <input type="checkbox" checked=true (change)="OnMarkersVisibilityChanged($event)" /> Markers
        </label>
    </div>

    <div class="options vertical">
        <label id="legendTitle">Renewable Electricity Generated</label>
    </div>
    <div class="container">
        <igx-category-chart height="100%" width="100%"
            [dataSource]="data"
            chartType="line"
            yAxisTitle="TWh"
            yAxisTitleLeftMargin="5"
            yAxisLabelLocation="OutsideRight"
            crosshairsSnapToData="false"
            [crosshairsDisplayMode]="crosshairsDisplay"
            [crosshairsAnnotationEnabled]="crosshairAnnotations"
            [finalValueAnnotationsVisible]="finalValuesVisible"
            [calloutsVisible]="calloutsVisible"
            [calloutsDataSource]="calloutData"
            [markerTypes]="markerType"
            calloutsXMemberPath="index"
            calloutsYMemberPath="value"
            calloutsLabelMemberPath="label"
			computedPlotAreaMarginMode="series">
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

Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a href="{environment:infragisticsBaseUrl}/products/ignite-ui-angular/download">Download it for free.</a>

## Angular Crosshair Layer

The [`IgxCrosshairLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcrosshairlayercomponent.html) renders as crossing lines intersecting at the actual value of every series that they are configured to target with each series rendering a separate set of lines.

Crosshair types include:

- Horizontal
- Vertical
- Both

The chart's crosshairs can also be configured to snap to data points by setting the [`crosshairsSnapToData`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#crosshairsSnapToData) property to true, otherwise the crosshairs will be interpolated between data points. Annotations can also be enabled to display the crosshair's value along the axis.

You can configure the crosshair layer so that the layer will only display on one specific series, as by default they will target all series in the chart control. To achieve this, set the [`targetSeries`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcrosshairlayercomponent.html#targetSeries) property.

By default, the color of the crosshair lines is a lighter color than the series that it is interacting with. However, this default setting can be overridden so that you can select a color that will be used for the crosshair lines. This is done by setting the [`brush`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#brush) property of the Crosshair Layer.

The following example shows how to configure the crosshair layer but targeting a single series, setting the type to vertical and styling the brush color.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxLegendModule, IgxDataChartInteractivityModule, IgxDataChartAnnotationModule, IgxCrosshairLayerModule } from "igniteui-angular-charts";


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
    IgxLegendModule,
    IgxDataChartInteractivityModule,
    IgxDataChartAnnotationModule,
    IgxCrosshairLayerModule
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

    ngOnInit(): void {
        this.data = [
            { Year: "2009", USA: 19 },
            { Year: "2010", USA: 24 },
            { Year: "2011", USA: 28 },
            { Year: "2012", USA: 26 },
            { Year: "2013", USA: 38 },
            { Year: "2014", USA: 31 },
            { Year: "2015", USA: 19 },
            { Year: "2016", USA: 52 },
            { Year: "2017", USA: 50 },
            { Year: "2018", USA: 34 },
            { Year: "2019", USA: 38 }
        ];
    }
}
```
```html
<div class="container vertical">
    <div class="options vertical">
        <label id="legendTitle">Renewable Electricity Generated</label>
    </div>
    <igx-data-chart height="100%" width="100%" >
        <igx-category-x-axis #xAxis [dataSource]="data" label="Year"></igx-category-x-axis>
        <igx-numeric-y-axis #yAxis title="TWh" labelLocation="OutsideRight"></igx-numeric-y-axis>

        <igx-line-series [xAxis]="xAxis" [yAxis]="yAxis" [dataSource]="data" valueMemberPath="USA"></igx-line-series>

        <igx-crosshair-layer horizontalLineVisibility="Collapsed" brush="DodgerBlue"></igx-crosshair-layer>
    </igx-data-chart>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Angular Final Value Layer

The [`IgxFinalValueLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinalvaluelayercomponent.html) of the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control provides a quick view along the axis of the ending value displayed in a series.

You can configure this annotation to target a specific series if you want to have multiple final value layers present with different configurations. This can be done be setting the [`targetSeries`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcrosshairlayercomponent.html#targetSeries) property.

You can also customize this annotation by setting the following properties:

- [`axisAnnotationBackground`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinalvaluelayercomponent.html#axisAnnotationBackground): This property is used to choose the brush for the annotation's background color. The default is to use the series brush.
- [`axisAnnotationTextColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinalvaluelayercomponent.html#axisAnnotationTextColor): This property is used to choose the brush for the annotation's text color.
- [`axisAnnotationOutline`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinalvaluelayercomponent.html#axisAnnotationOutline): This property is used to choose the brush for the annotation's outline color.

The following example demonstrates how to style the final value layer annotation by setting the properties listed above.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxLegendModule, IgxDataChartInteractivityModule, IgxDataChartAnnotationModule, IgxFinalValueLayerModule } from "igniteui-angular-charts";


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
    IgxLegendModule,
    IgxDataChartInteractivityModule,
    IgxDataChartAnnotationModule,
    IgxFinalValueLayerModule
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

    ngOnInit(): void {
        this.data = [
            { Year: "2009", USA: 19 },
            { Year: "2010", USA: 24 },
            { Year: "2011", USA: 28 },
            { Year: "2012", USA: 26 },
            { Year: "2013", USA: 38 },
            { Year: "2014", USA: 31 },
            { Year: "2015", USA: 19 },
            { Year: "2016", USA: 52 },
            { Year: "2017", USA: 50 },
            { Year: "2018", USA: 34 },
            { Year: "2019", USA: 38 }
        ];
    }
}
```
```html
<div class="container vertical">
    <div class="options vertical">
        <label id="legendTitle">Renewable Energy Generated</label>
    </div>
    <igx-data-chart height="100%" width="100%" >
        <igx-category-x-axis #xAxis [dataSource]="data" label="Year"></igx-category-x-axis>
        <igx-numeric-y-axis #yAxis title="TWh" labelLocation="OutsideRight"></igx-numeric-y-axis>

        <igx-line-series [xAxis]="xAxis" [yAxis]="yAxis" [dataSource]="data" valueMemberPath="USA"></igx-line-series>

        <igx-final-value-layer axisAnnotationBackground="Orange" axisAnnotationTextColor="Black" axisAnnotationOutline="Black"></igx-final-value-layer>
    </igx-data-chart>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

```html
<igx-category-chart
    [dataSource]="data"
    finalValueAnnotationsVisible="true">
</igx-category-chart>
```

## Angular Callout Layer

The [`IgxCalloutLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcalloutlayercomponent.html) displays annotations from existing or new data on the chart control. The annotations appear next to the given data values in the data source.

Use the callout annotations to display additional information, such as notes or specific details about data points, that you would like to point out to your users.

You can configure the callouts to target a specific series if you want to have multiple callout layers present with different configurations. This can be done by setting the [`targetSeries`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcalloutlayercomponent.html#targetSeries) property.

You can also customize this annotation by setting the following properties:

- [`calloutLeaderBrush`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcalloutlayercomponent.html#calloutLeaderBrush): This property is used to choose the brush for the leader lines for the callouts for the layer.
- [`calloutOutline`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcalloutlayercomponent.html#calloutOutline): This property is used to choose the brush for the annotation's outline color.
- [`calloutBackground`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcalloutlayercomponent.html#calloutBackground): This property is used to choose the brush for the annotation's background color. The default is to use the series brush.
- [`calloutTextColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcalloutlayercomponent.html#calloutTextColor): This property is used to choose the brush for the annotation's text color.
- [`calloutStrokeThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcalloutlayercomponent.html#calloutStrokeThickness): This property is used to choose the thickness for the callout backing.
- [`calloutCornerRadius`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcalloutlayercomponent.html#calloutCornerRadius): This property is used to curve the corners of the callouts.
- [`allowedPositions`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcalloutlayercomponent.html#allowedPositions): This property is used to choose which positions that the callout layer is allowed to use. eg. top, bottom

The following example demonstrates how to style the callout layer annotations by setting the properties listed above:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartAnnotationModule, IgxDataChartInteractivityModule, IgxAnnotationLayerProxyModule } from 'igniteui-angular-charts';

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
    IgxDataChartAnnotationModule,
    IgxDataChartInteractivityModule,
    IgxAnnotationLayerProxyModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';
import { IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxLineSeriesComponent, IgxCalloutLayerComponent } from 'igniteui-angular-charts';

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
	@ViewChild("lineSeries1", { static: true } )
	private lineSeries1: IgxLineSeriesComponent
	@ViewChild("calloutLayer1", { static: true } )
	private calloutLayer1: IgxCalloutLayerComponent
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
  <div class="container fill">
      <igx-data-chart
      shouldAutoExpandMarginForInitialLabels="true"
      computedPlotAreaMarginMode="Series"
      name="chart"
      #chart>
          <igx-category-x-axis
          name="xAxis"
          #xAxis
          [dataSource]="countryRenewableElectricity"
          label="year">
          </igx-category-x-axis>
          <igx-numeric-y-axis
          name="yAxis"
          #yAxis
          title="TWh"
          labelLocation="OutsideRight">
          </igx-numeric-y-axis>
          <igx-line-series
          name="lineSeries1"
          #lineSeries1
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          [dataSource]="countryRenewableElectricity"
          valueMemberPath="america"
          brush="rgba(137, 97, 169, 1)"
          markerOutline="rgba(137, 97, 169, 1)"
          shouldHideAutoCallouts="false">
          </igx-line-series>
          <igx-callout-layer
          name="CalloutLayer1"
          #calloutLayer1
          isAutoCalloutBehaviorEnabled="true"
          calloutLeaderBrush="rgba(137, 97, 169, 1)"
          calloutOutline="rgba(137, 97, 169, 1)"
          calloutBackground="white"
          calloutTextColor="rgba(137, 97, 169, 1)"
          calloutStrokeThickness="1"
          calloutCollisionMode="Greedy">
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

```html
<igx-category-chart
    [dataSource]="data"
    calloutsVisible="true"
    [calloutsDataSource]="calloutData"
    calloutsXMemberPath="index"
    calloutsYMemberPath="value"
    calloutsLabelMemberPath="info">
</igx-category-chart>
```

## API References

The following is a list of API members mentioned in the above sections:

- [`crosshairsSnapToData`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#crosshairsSnapToData)
- [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)
