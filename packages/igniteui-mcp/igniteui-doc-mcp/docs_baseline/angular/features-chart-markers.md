---
title: Angular Chart Markers | Data Visualization | Infragistics
description: Infragistics' Angular Chart Markers
keywords: Angular Charts, Markers, Marker Size, Infragistics
license: commercial
mentionedTypes: ["CategoryChart", "CategoryChartType", "MarkerType", "MarkerSeries", "ScatterLineSeries", "ScatterSplineSeries", "ScatterSeries", "LineSeries", "SplineSeries", "MarkerAutomaticBehavior", "SeriesViewer"]
namespace: Infragistics.Controls.Charts
llms:
  description: "In Ignite UI for Angular, markers are visual elements that display the values of data points in the chart's plot area."
_tocName: Chart Markers
_premium: true
---
# Angular Chart Markers

In Ignite UI for Angular, markers are visual elements that display the values of data points in the chart's plot area. Markers help your end-users immediately identify a data point's value even if the value falls between major or minor grid lines.

## Angular Chart Marker Example

In the following example, the [Line Chart](../types/line-chart.md) is comparing the generation of renewable electricity for the countries Europe, China, and USA over the years of 2009 to 2019 with markers enabled by setting the `MarkerTypes` property to `Circle` enum value.

The colors of the markers are also managed by setting the `MarkerBrushes` and `MarkerOutlines` properties in the sample below. The markers and `CategoryChart.ChartType` is configurable in this sample by using the drop-downs as well.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxPropertyEditorPanelModule } from 'igniteui-angular-layouts';
import { IgxCategoryChartModule, IgxDataChartInteractivityModule } from 'igniteui-angular-charts';

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
    IgxPropertyEditorPanelModule,
    IgxCategoryChartModule,
    IgxDataChartInteractivityModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, CategoryChartDescriptionModule, DataChartInteractivityDescriptionModule } from 'igniteui-angular-core';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';
import { IgxPropertyEditorPropertyDescriptionChangedEventArgs, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
import { IgxCategoryChartComponent, MarkerType, MarkerType_$type } from 'igniteui-angular-charts';
import { EnumUtil } from 'igniteui-angular-core';
import { IgxPropertyEditorPanelComponent } from 'igniteui-angular-layouts';

import { defineAllComponents } from 'igniteui-webcomponents';

defineAllComponents();

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("propertyEditor", { static: true } )
	private propertyEditor: IgxPropertyEditorPanelComponent
	@ViewChild("chartTypeEditor", { static: true } )
	private chartTypeEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("markerTypeEditor", { static: true } )
	private markerTypeEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxCategoryChartComponent
    private _countryRenewableElectricity: CountryRenewableElectricity = null;
    public get countryRenewableElectricity(): CountryRenewableElectricity {
        if (this._countryRenewableElectricity == null)
        {
            this._countryRenewableElectricity = new CountryRenewableElectricity();
        }
        return this._countryRenewableElectricity;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            CategoryChartDescriptionModule.register(context);
            DataChartInteractivityDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

	public editorChangeUpdateMarkerType({ sender, args }: { sender: any, args: IgxPropertyEditorPropertyDescriptionChangedEventArgs }): void {
	    var item = sender as IgxPropertyEditorPropertyDescriptionComponent;
	    var chart = this.chart;

	    var markerVal = item.primitiveValue;
	    chart.markerTypes = markerVal;
	}

}
```
```html
<div class="container vertical sample">
  <div class="options vertical">
      <igx-property-editor-panel
      name="PropertyEditor"
      #propertyEditor
      [componentRenderer]="renderer"
      [target]="chart"
      descriptionType="CategoryChart"
      isHorizontal="true"
      isWrappingEnabled="true">
          <igx-property-editor-property-description
          propertyPath="ChartType"
          name="ChartTypeEditor"
          #chartTypeEditor
          label="Chart Type"
          primitiveValue="Line">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="MarkerTypeHandler"
          name="MarkerTypeEditor"
          #markerTypeEditor
          label="Marker Type"
          shouldOverrideDefaultEditor="true"
          valueType="EnumValue"
          dropDownValues="Circle, Checkmark, Automatic, Triangle, Pyramid, Square, Diamond, Pentagon, Hexagon, Tetragram, Pentagram, Hexagram, None"
          dropDownNames="Circle, Checkmark, Automatic, Triangle, Pyramid, Square, Diamond, Pentagon, Hexagon, Tetragram, Pentagram, Hexagram, None"
          primitiveValue="Circle"
          (changed)="this.editorChangeUpdateMarkerType($event)">
          </igx-property-editor-property-description>
      </igx-property-editor-panel>
  </div>
  <div class="legend-title">
      Renewable Electricity Generated
  </div>
  <div class="container fill">
      <igx-category-chart
      name="chart"
      #chart
      isSeriesHighlightingEnabled="true"
      chartType="Line"
      [dataSource]="countryRenewableElectricity"
      computedPlotAreaMarginMode="Series">
      </igx-category-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

## Angular Chart Marker Size

You can control the exact device-independent pixel dimensions of data point markers by setting the `MarkerSize` property on any series that supports markers. This gives you precise control over how large markers appear on screen, regardless of the marker template or style being used.

By default, marker sizing is determined by the series marker template. When you set `MarkerSize` to a specific numeric value, all markers in that series render at that exact device-independent pixel width and height. Setting `MarkerSize` back to `NaN` restores the default template-driven sizing.

The `MarkerSize` property is available on all series types that derive from `MarkerSeries`, including `LineSeries`, `SplineSeries`, `AreaSeries`, `ColumnSeries`, `ScatterSeries`, `ScatterLineSeries`, `ScatterSplineSeries`, and polar/radial series types.

The following code examples show how to set `MarkerSize` to 30 device-independent pixels on a `ScatterLineSeries` in the `XamDataChart` control:

To reset markers to their default template-driven size, set `MarkerSize` to `NaN` (or remove the attribute in markup):

The following sample demonstrates `MarkerSize` on scatter series with an interactive editor:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxPropertyEditorPanelModule } from 'igniteui-angular-layouts';
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
    IgxPropertyEditorPanelModule,
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
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, LegendDescriptionModule, DataChartCoreDescriptionModule, DataChartScatterDescriptionModule, DataChartScatterCoreDescriptionModule, DataChartInteractivityDescriptionModule, DataChartAnnotationDescriptionModule } from 'igniteui-angular-core';
import { CountryDemographicEuropeItem, CountryDemographicEurope } from './CountryDemographicEurope';
import { CountryDemographicAfricanItem, CountryDemographicAfrican } from './CountryDemographicAfrican';
import { IgxPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-angular-layouts';
import { IgxDataChartComponent } from 'igniteui-angular-charts';
import { IgxPropertyEditorPanelComponent, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
import { IgxLegendComponent, IgxNumericXAxisComponent, IgxNumericYAxisComponent, IgxScatterSeriesComponent } from 'igniteui-angular-charts';

import { defineAllComponents } from 'igniteui-webcomponents';

defineAllComponents();

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("propertyEditor", { static: true } )
	private propertyEditor: IgxPropertyEditorPanelComponent
	@ViewChild("markerSizeEditor", { static: true } )
	private markerSizeEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("markerTypeEditor", { static: true } )
	private markerTypeEditor: IgxPropertyEditorPropertyDescriptionComponent
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

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            LegendDescriptionModule.register(context);
            DataChartCoreDescriptionModule.register(context);
            DataChartScatterDescriptionModule.register(context);
            DataChartScatterCoreDescriptionModule.register(context);
            DataChartInteractivityDescriptionModule.register(context);
            DataChartAnnotationDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

	public editorChangeUpdateDataChartMarkerSize({ sender, args }: { sender: any, args: IgxPropertyEditorPropertyDescriptionChangedEventArgs }): void {
	    var chart = this.chart;
	    var markerSizeVal = parseInt(args.newValue);
	    var series = chart.actualSeries;
	    for (var i = 0; i < series.length; i++) {
	        (series[i] as any).markerSize = markerSizeVal;
	    }
	}

	public editorChangeUpdateDataChartMarkerType({ sender, args }: { sender: any, args: IgxPropertyEditorPropertyDescriptionChangedEventArgs }): void {
	    var chart = this.chart;
	    var markerTypeVal = args.newValue;
	    var series = chart.actualSeries;
	    for (var i = 0; i < series.length; i++) {
	        (series[i] as any).markerType = markerTypeVal;
	    }
	}

}
```
```html
<div class="container vertical sample">
  <div class="options vertical">
      <igx-property-editor-panel
      name="PropertyEditor"
      #propertyEditor
      [componentRenderer]="renderer"
      [target]="chart"
      descriptionType="DataChart"
      isHorizontal="true"
      isWrappingEnabled="true">
          <igx-property-editor-property-description
          propertyPath="MarkerSizeHandler"
          name="MarkerSizeEditor"
          #markerSizeEditor
          label="Marker Size"
          shouldOverrideDefaultEditor="true"
          valueType="EnumValue"
          dropDownNames="3, 5, 7, 10, 12, 15, 20, 25, 30"
          dropDownValues="3, 5, 7, 10, 12, 15, 20, 25, 30"
          primitiveValue="10"
          (changed)="this.editorChangeUpdateDataChartMarkerSize($event)">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="MarkerTypeHandler"
          name="MarkerTypeEditor"
          #markerTypeEditor
          label="Marker Type"
          shouldOverrideDefaultEditor="true"
          valueType="EnumValue"
          dropDownValues="Circle, Checkmark, Triangle, Pyramid, Square, Diamond, Pentagon, Hexagon, Tetragram, Pentagram, Hexagram, Hidden, Automatic, None"
          dropDownNames="Circle, Checkmark, Triangle, Pyramid, Square, Diamond, Pentagon, Hexagon, Tetragram, Pentagram, Hexagram, Hidden, Automatic, None"
          primitiveValue="Circle"
          (changed)="this.editorChangeUpdateDataChartMarkerType($event)">
          </igx-property-editor-property-description>
      </igx-property-editor-panel>
  </div>
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
          markerSize="10"
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
          markerSize="10"
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

**Note:** 
For `BubbleSeries`, the `MarkerSize` property does not override the bubble radius, which is controlled by the radius data column and the `RadiusScale`. Bubble sizes remain entirely driven by the data and scale configuration.

## Angular Chart Checkmark Marker Type

The Ignite UI for Angular charts include a `Checkmark` option in the `MarkerType` enum. This marker renders a V-shaped checkmark icon inside a circle on data points in your chart.

You can apply the `Checkmark` marker type to an individual series by setting its `MarkerType` property to `MarkerType.Checkmark`. To use the checkmark shape for all series in the chart simultaneously, set the chart's `MarkerAutomaticBehavior` property to `MarkerAutomaticBehavior.Checkmark`.

The `SeriesViewer.CheckmarkMarkerTemplate` property defines the marker template used for series with a checkmark marker type, and can be used to customize its appearance across the chart.

## Angular Chart Marker Templates

In addition to marker properties, you can implement your own marker by setting a function to the  `MarkerTemplate` property of a series rendered in the `IgxCategoryChart` control as it is demonstrated in example below.

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
import { Component, OnInit } from "@angular/core";
import { DataTemplateMeasureInfo, DataTemplateRenderInfo } from "igniteui-angular-core";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    public data: any[];

    constructor() { }

    public onSeriesAdded(e: any) {
        e.args.series.markerTemplate = this.getMarker();
    }

    ngOnInit(): void {
        this.data = [
            { Location: "World", Solar: 23, Coal: -1, Hydropower: 1, Wind: 12, Nuclear: 3 },
            { Location: "China", Solar: 26, Coal: 2, Hydropower: 5, Wind: 10, Nuclear: 18 },
            { Location: "U.S.", Solar: 15, Coal: -15, Hydropower: -7, Wind: 10, Nuclear: 1 },
            { Location: "EU", Solar: 11, Coal: -12, Hydropower: -2, Wind: 14, Nuclear: -1 }
        ];
    }

    public getMarker(): any {
        let style = { outline: "#8B5BB1", fill: "white", text: "black" };
        const size = 12;

        return {
            measure: function (measureInfo: DataTemplateMeasureInfo) {
                const context = measureInfo.context;
                const height = context.measureText("M").width;
                const width = context.measureText("0.00").width;
                measureInfo.width = width;
                measureInfo.height = height + 12;
            },
            render: function (renderInfo: DataTemplateRenderInfo) {
                let ctx = renderInfo.context;
                let x = renderInfo.xPosition;
                let y = renderInfo.yPosition;

                if (renderInfo.isHitTestRender) {
                    ctx.fillStyle = renderInfo.data.actualItemBrush.fill;

                    let width = renderInfo.availableWidth;
                    let height = renderInfo.availableHeight;

                    ctx.fillRect(x - (width / 2), y - (height), renderInfo.availableWidth, renderInfo.availableHeight);
                    return;
                }


                const dataItem = renderInfo.data.item;
                if (dataItem === null) return;

                const series = renderInfo.data.series;
                const dataPath = series.valueColumn.propertyName;

                let dataValue = 0;
                switch (dataPath) {
                    case "Solar": dataValue = dataItem.Solar; break;
                    case "Coal": dataValue = dataItem.Coal; break;
                    case "Hydropower": dataValue = dataItem.Hydropower; break;
                    case "Wind": dataValue = dataItem.Wind; break;
                    case "Nuclear": dataValue = dataItem.Nuclear; break;
                }
                ctx.font = '8pt Verdana';
                ctx.textBaseline = 'top';
                ctx.fillStyle = "black";

                let xOffset = 20;
                let yOffset = 10;
                if (dataValue < 0) {
                    ctx.fillText(dataValue + "%", x - (xOffset / 2), y + (yOffset));
                }
                else {
                    ctx.fillText(dataValue + "%", x - (xOffset / 2), y - (yOffset * 2));
                }

                ctx.strokeStyle = "black";
                ctx.fillStyle = "white";
                ctx.beginPath();
                ctx.arc(x, y, 6, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fill();
            }
        }
    }
}
```
```html
<div class="container vertical">
    <div class="options vertical">
        <span id="legendTitle">Percentage Change in Energy Generation in 2019</span>
        <div class="legend">
            <igx-legend #legend orientation="horizontal"></igx-legend>
        </div>
    </div>

    <div class="container">
             <igx-category-chart height="100%" width="100%"
                           [legend]="legend"
                           [dataSource]="data"
                           chartType="Column"
                           thickness="2"
                           isHorizontalZoomEnabled="false"
                           isVerticalZoomEnabled="false"
                           isSeriesHighlightingEnabled="true"
                           (seriesAdded)="onSeriesAdded($event)"
                           xAxisMajorStroke="LightGray"
                           xAxisMajorStrokeThickness="1"
                           yAxisInterval="10"
                           yAxisMinimumValue="-20"
                           yAxisMaximumValue="30">
            </igx-category-chart>
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

- [Chart Annotations](chart-annotations.md)
- [Chart Highlighting](chart-highlighting.md)

## API References
`IgxCategoryChart`
