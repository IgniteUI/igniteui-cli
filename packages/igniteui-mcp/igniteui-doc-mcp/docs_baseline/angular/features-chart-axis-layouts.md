---
title: Angular Axis Layouts | Data Visualization | Infragistics
_description: Infragistics' Angular Axis Layouts
_keywords: Angular Axis, Layouts, Location, Position, Share, Multiple, Crossing, Infragistics
_license: commercial
mentionedTypes: [ "DomainChart", "CategoryChart", "XYChart", "DomainChart", "XamDataChart", "Axis", "AxisLabelSettings", "ScatterSplineSeries", "TimeXAxis" ]
_tocName: Axis Layouts
_premium: true
---

# Angular Axis Layouts

All Ignite UI for Angular charts include options to configure many axis layout options such as location as well as having the ability to share axis between series or have multiple axes in the same chart. These features are demonstrated in the examples given below.

> [!Note]
> the following examples can be applied to [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) as well as [`IgxFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) controls.

## Axis Locations Example

For all axes, you can specify axis location in relationship to chart plot area. The [`xAxisLabelLocation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisLabelLocation) property of the Angular charts, allows you to position x-axis line and its labels on above or below plot area. Similarly, you can use the [`yAxisLabelLocation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisLabelLocation) property to position y-axis on left side or right side of plot area.

The following example depicts the amount of renewable electricity produced since 2009, represented by a [Line Chart](../types/line-chart.md). There is a drop-down that lets you configure the [`yAxisLabelLocation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisLabelLocation) so that you can visualize what the axes look like when the labels are placed on the left or right side on the inside or outside of the chart's plot area.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxPropertyEditorPanelModule } from 'igniteui-angular-layouts';
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
    IgxPropertyEditorPanelModule,
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
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, LegendDescriptionModule, CategoryChartDescriptionModule } from 'igniteui-angular-core';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';
import { IgxLegendComponent, IgxCategoryChartComponent } from 'igniteui-angular-charts';
import { IgxPropertyEditorPanelComponent, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';

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

	@ViewChild("legend", { static: true } )
	private legend: IgxLegendComponent
	@ViewChild("propertyEditorPanel1", { static: true } )
	private propertyEditorPanel1: IgxPropertyEditorPanelComponent
	@ViewChild("yAxisLabelLocation", { static: true } )
	private yAxisLabelLocation: IgxPropertyEditorPropertyDescriptionComponent
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
            LegendDescriptionModule.register(context);
            CategoryChartDescriptionModule.register(context);
        }
        return this._componentRenderer;
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
  <div class="options vertical">
      <igx-property-editor-panel
      [componentRenderer]="renderer"
      [target]="chart"
      descriptionType="CategoryChart"
      isHorizontal="true"
      isWrappingEnabled="false"
      name="propertyEditorPanel1"
      #propertyEditorPanel1>
          <igx-property-editor-property-description
          propertyPath="YAxisLabelLocation"
          name="YAxisLabelLocation"
          #yAxisLabelLocation
          label="Y Axis - Label Location"
          primitiveValue="OutsideRight">
          </igx-property-editor-property-description>
      </igx-property-editor-panel>
  </div>
  <div class="legend-title">
      Renewable Electricity Generated
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
      computedPlotAreaMarginMode="Series"
      [dataSource]="countryRenewableElectricity"
      includedProperties="year, europe, china, america"
      [legend]="legend"
      chartType="Line"
      yAxisTitle="Labels Location"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false"
      xAxisInterval="1"
      yAxisLabelLocation="OutsideRight">
      </igx-category-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

<!-- ## Axis Orientation Example

TODO add info/example of 4 charts with all possible combinations of XAxisInverted and YAxisInverted
e.g. https://www.infragistics.com/help/wpf/datachart-axis-orientation
 -->

## Axis Advanced Scenarios

For more advanced axis layout scenarios, you can use Angular Data Chart to share axis, add multiple y-axis and/or x-axis in the same plot area, or even cross axes at specific values. The following examples show how to use these features of the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html).

### Axis Sharing Example

You can share and add multiple axes in the same plot area of the Angular [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html). It a common scenario to use share [`IgxTimeXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimexaxiscomponent.html) and add multiple [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) to plot many data sources that have wide range of values (e.g. stock prices and stock trade volumes).

The following example depicts a stock price and trade volume chart with a [Stock Chart](../types/stock-chart.md) and a [Column Chart](../types/column-chart.md) plotted. In this case, the Y-Axis on the left is used by the [Column Chart](../types/column-chart.md) and the Y-Axis on the right is used by the [Stock Chart](../types/stock-chart.md), while the X-Axis is shared between the two.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxNumericXAxisModule, IgxNumericYAxisModule, IgxMoneyFlowIndexIndicatorModule, IgxLegendModule, IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxFinancialPriceSeriesModule } from "igniteui-angular-charts";
import { SampleFinancialData } from "./SampleFinancialData";


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
    IgxNumericXAxisModule,
    IgxNumericYAxisModule,
    IgxMoneyFlowIndexIndicatorModule,
    IgxLegendModule,
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxFinancialPriceSeriesModule
],
  providers: [SampleFinancialData],
schemas: []
})
export class AppModule {}
```
```typescript
import { Component, OnInit } from "@angular/core";
import { SampleFinancialData } from "./SampleFinancialData";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    public data: any[] = SampleFinancialData.create();
    constructor() { }

    public ngOnInit() {
    }

}
```
```html
<div class="container vertical">
        <igx-data-chart
            width="100%"
            height="100%"
            [dataSource]="data">

            <igx-category-x-axis #xAxisShared label="Date" gap=0.75></igx-category-x-axis>
            <igx-numeric-y-axis #yAxisRight
                labelLocation="OutsideRight"
                title="Stock Price"
                minimumValue="400"
                maximumValue="700">
            </igx-numeric-y-axis>
            <igx-numeric-y-axis #yAxisLeft
                labelLocation="OutsideLeft"
                title="Trade Volume"
                minimumValue="5000"
                maximumValue="45000"
                abbreviateLargeNumbers=true
                majorStrokeThickness="0">
            </igx-numeric-y-axis>

            <igx-column-series [xAxis]="xAxisShared"
                [yAxis]="yAxisLeft"
                valueMemberPath="Volume"
                showDefaultTooltip=true
                title="Trade Volume">
            </igx-column-series>

            <igx-financial-price-series
                [xAxis]="xAxisShared"
                [yAxis]="yAxisRight"
                displayType="Candlestick"
                highMemberPath="High"
                lowMemberPath="Low"
                closeMemberPath="Close"
                openMemberPath="Open"
                volumeMemberPath="Volume"></igx-financial-price-series>
        </igx-data-chart>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

<div class="divider--half"></div>

### Axis Crossing Example

In addition to placing axes outside plot area, the Angular [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) also provides options to position axes inside of plot area and make them cross at specific values. For example, you can create trigonometric chart by setting [`crossingAxis`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#crossingAxis) and [`crossingValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#crossingValue) properties on both x-axis and y-axis to render axis lines and axis labels such that they are crossing at (0, 0) origin point.

The following example shows a Sin and Cos wave represented by a [Scatter Spline Chart](../types/scatter-chart.md) with the X and Y axes crossing each other at the (0, 0) origin point.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartScatterModule, IgxLegendModule } from "igniteui-angular-charts";


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
    IgxDataChartScatterModule,
    IgxLegendModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component } from "@angular/core";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent {

    public SinData: any[];
    public CosData: any[];

    public YAxisCrossingValue : number = 0;
    public XAxisCrossingValue : number = 0;

    constructor() {

      this.SinData= [];
      this.CosData= [];

        for (let i = -360; i <= 360; i+=10)
        {
            const radians = (i * Math.PI) / 180;
            const sin = Math.sin(radians);
            const cos = Math.cos(radians);

            this.SinData.push( { X : i, Y : sin });
            this.CosData.push( { X : i, Y : cos });
        }
    }

    public OnXAxisCrossingValueChanged(e : any) {
        this.XAxisCrossingValue = e.target.value;
    }

    public OnYAxisCrossingValueChanged(e : any) {
        this.YAxisCrossingValue = e.target.value;
    }
}
```
```html
<div class="container vertical">
    <div class="options horizontal">

        <label>X Axis Crossing Value:  </label>
        <label class="options-value" ><span [textContent]="XAxisCrossingValue" ></span></label>
        <input type="range" min="-1.25" max="1.25" step="0.25" value="0" (input)="OnXAxisCrossingValueChanged($event)" />

        <label>Y Axis Crossing Value:  </label>
        <label class="options-value" ><span [textContent]="YAxisCrossingValue" ></span></label>
        <input type="range" min="-360" max="360" step="40" value="0" (input)="OnYAxisCrossingValueChanged($event)" />
    </div>

    <div class="container">
        <igx-data-chart isHorizontalZoomEnabled=true isVerticalZoomEnabled=true
            width="100%" height="100%" [dataSource]="SinData" >
            <igx-numeric-x-axis #xAxis interval="40"
                minimumValue="-360"
                maximumValue="360"
                labelLocation="InsideBottom"
                [crossingAxis]="yAxis"
                [crossingValue]="XAxisCrossingValue">
            </igx-numeric-x-axis>
            <igx-numeric-y-axis #yAxis
                minimumValue="-1.25"
                maximumValue="1.25"
                interval="0.25"
                labelLocation="InsideLeft"
                [crossingAxis]="xAxis"
                [crossingValue]="YAxisCrossingValue" >
            </igx-numeric-y-axis>

            <igx-scatter-spline-series markerType="Circle"
                [dataSource]="SinData"
                [xAxis]="xAxis"
                [yAxis]="yAxis"
                xMemberPath="X"
                yMemberPath="Y" >
            </igx-scatter-spline-series>

            <igx-scatter-spline-series markerType="Circle"
                [dataSource]="CosData"
                [xAxis]="xAxis"
                [yAxis]="yAxis"
                xMemberPath="X"
                yMemberPath="Y">
            </igx-scatter-spline-series>
        </igx-data-chart>

</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart features in these topics:

- [Axis Gridlines](chart-axis-gridlines.md)
- [Axis Options](chart-axis-options.md)

## API References

The following is a list of API members mentioned in the above sections:
d in the above sections:

| [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)                                                                                                                                                                                          | [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Axes` ➔ [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ [`crossingAxis`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#crossingAxis)   | None                                                                                                                                                                                                       |
| `Axes` ➔ [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ [`crossingValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#crossingValue) | None                                                                                                                                                                                                       |
| `Axes` ➔ [`IgxNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) ➔ [`isInverted`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#isInverted)       | [`xAxisInverted`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisInverted)                                 |
| `Axes` ➔ [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ [`isInverted`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#isInverted)       | [`yAxisInverted`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisInverted)                                 |
| `Axes` ➔ [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ `LabelLocation`                                                                                                                                                         | [`yAxisLabelLocation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisLabelLocation)                       |
| `Axes` ➔ [`IgxNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) ➔ `LabelLocation`                                                                                                                                                         | [`xAxisLabelLocation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisLabelLocation)                       |
| `Axes` ➔ [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ `LabelHorizontalAlignment`                                                                                                                                              | [`yAxisLabelHorizontalAlignment`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisLabelHorizontalAlignment) |
| `Axes` ➔ [`IgxNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) ➔ `LabelVerticalAlignment`                                                                                                                                                | [`xAxisLabelVerticalAlignment`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisLabelVerticalAlignment)     |
| `Axes` ➔ [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ `LabelVisibility`                                                                                                                                                       | [`yAxisLabelVisibility`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisLabelVisibility)                   |
| `Axes` ➔ [`IgxNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) ➔ `LabelVisibility`                                                                                                                                                       | [`xAxisLabelVisibility`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisLabelVisibility)                   |

<!-- TODO correct links in Transformer -->

<!--
| `Axes` &#10132; `NumericYAxis` &#10132; `labelSettings.location`            | `YAxisLabelLocation`            |
| `Axes` &#10132; `NumericXAxis` &#10132; `labelSettings.location`            | `XAxisLabelLocation`            |
| `Axes` &#10132; `NumericYAxis` &#10132; `labelSettings.horizontalAlignment` | `YAxisLabelHorizontalAlignment` |
| `Axes` &#10132; `NumericXAxis` &#10132; `labelSettings.verticalAlignment`   | `XAxisLabelVerticalAlignment`   |
| `Axes` &#10132; `NumericYAxis` &#10132; `labelSettings.visibility`          | `YAxisLabelVisibility`          |
| `Axes` &#10132; `NumericXAxis` &#10132; `labelSettings.visibility`          | `XAxisLabelVisibility`          | -->
