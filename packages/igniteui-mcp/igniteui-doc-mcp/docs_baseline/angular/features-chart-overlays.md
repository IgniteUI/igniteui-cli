---
title: Angular Chart Overlays | Data Visualization Tools | Value Overlay | Infragistics
_description: Use Infragistics Ignite UI for Angular chart control's value overlay feature to place horizontal or vertical lines at a single numeric value. Learn about our Ignite UI for Angular graph types!
_keywords: Angular charts, data chart, value overlay, Ignite UI for Angular, Infragistics
_license: commercial
mentionedTypes: ["XamDataChart", "ValueOverlay", "CategoryChart", "FinancialChart"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Overlays
_premium: true
---

# Angular Chart Overlays

The Angular [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) allows for placement of horizontal or vertical lines at a single numeric value that you define through usage of the [`IgxValueOverlayComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvalueoverlaycomponent.html). This can help you to visualize data such as the mean or median of a particular series.

## Angular Value Overlay Example

The following example depicts a [Column Chart](../types/column-chart.md) with a few horizontal value overlays plotted.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxValueOverlayModule, IgxLegendModule } from "igniteui-angular-charts";
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
    IgxValueOverlayModule,
    IgxLegendModule
],
  providers: [SharedData],
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
export class AppComponent {

    public data: any[];

    constructor() {
        this.initData();
    }

    public initData() {
        this.data = [
            { Label: 1, Value: 1.0 },
            { Label: 2, Value: 2.0 },
            { Label: 3, Value: 6.0 },
            { Label: 4, Value: 8.0 },
            { Label: 5, Value: 2.0 },
            { Label: 6, Value: 6.0 },
            { Label: 7, Value: 4.0 },
            { Label: 8, Value: 2.0 },
            { Label: 9, Value: 1.0 }
        ];
    }
}
```
```html
<div class="container vertical">
    <igx-legend #legend orientation="horizontal"></igx-legend>

    <igx-data-chart #chart height="100%" width="100%" [dataSource]="data">
        <igx-category-x-axis #xAxis label="Label"></igx-category-x-axis>
        <igx-numeric-y-axis #yAxis minimumValue=0 maximumValue=10></igx-numeric-y-axis>

        <igx-column-series [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Value" showDefaultTooltip=true
            markerType="None"></igx-column-series>

        <igx-value-overlay [axis]="yAxis" value=2.0 thickness=5></igx-value-overlay>
        <igx-value-overlay [axis]="yAxis" value=3.6 thickness=5></igx-value-overlay>
        <igx-value-overlay [axis]="yAxis" value=5.8 thickness=5></igx-value-overlay>
        <igx-value-overlay [axis]="yAxis" value=1.0 thickness=5></igx-value-overlay>
        <igx-value-overlay [axis]="yAxis" value=8.0 thickness=5></igx-value-overlay>
        <igx-value-overlay [axis]="yAxis" value=7.0 thickness=5></igx-value-overlay>
        <igx-value-overlay [axis]="yAxis" value=5.0 thickness=5></igx-value-overlay>

    </igx-data-chart>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Angular Value Overlay Properties

Unlike other series types that use a `ItemsSource` for data binding, the value overlay uses a `ValueMemberPath` property to bind a single numeric value. In addition, the value overlay requires you to define a single [`axis`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvalueoverlaycomponent.html#axis) to use. If you use an X-axis, the value overlay will be a vertical line, and if you use a Y-axis, it will be a horizontal line.

When using a numeric X or Y axis, the `ValueMemberPath` property should reflect the actual numeric value on the axis where you want the value overlay to be drawn. When using a category X or Y axis, the `ValueMemberPath` should reflect the index of the category at which you want the value overlay to appear.

When using the value overlay with a numeric angle axis, it will appear as a line from the center of the chart and when using a numeric radius axis, it will appear as a circle.

[`IgxValueOverlayComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvalueoverlaycomponent.html) appearance properties are inherited from [`IgxSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html) and so [`brush`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#brush) and [`thickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#thickness) for example are available and work the same way they do with other types of series.

It is also possible to show an axis annotation on a [`IgxValueOverlayComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvalueoverlaycomponent.html) to show the value of the overlay on the owning axis. In order to show this, you can set the [`isAxisAnnotationEnabled`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvalueoverlaycomponent.html#isAxisAnnotationEnabled) property to true.

## Angular Value Layer

The Angular charting components also expose the ability to use value lines to call out different focal points of your data, such as minimum, maximum, and average values.

Applying the [`IgxValueLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvaluelayercomponent.html) in the [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) and [`IgxFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) components is done by setting the [`valueLines`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#valueLines) property on the chart. This property takes a collection of the [`ValueLayerValueMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.valuelayervaluemode.html) enumeration. You can mix and match multiple value layers in the same chart by adding multiple [`ValueLayerValueMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.valuelayervaluemode.html) enumerations to the [`valueLines`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#valueLines) collection of the chart.

In the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html), this is done by adding a [`IgxValueLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvaluelayercomponent.html) to the [`IgxSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html) collection of the chart and then setting the `ValueMode` property to one of the [`ValueLayerValueMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.valuelayervaluemode.html) enumerations. Each of these enumerations and what they mean is listed below:

- [`Auto`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.valuelayervaluemode.html#Auto): The default value mode of the [`ValueLayerValueMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.valuelayervaluemode.html) enumeration.
- [`Average`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.valuelayervaluemode.html#Average): Applies potentially multiple value lines to call out the average value of each series plotted in the chart.
- [`GlobalAverage`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.valuelayervaluemode.html#GlobalAverage): Applies a single value line to call out the average of all of the series values in the chart.
- [`GlobalMaximum`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.valuelayervaluemode.html#GlobalMaximum): Applies a single value line to call out the absolute maximum value of all of the series values in the chart.
- [`GlobalMinimum`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.valuelayervaluemode.html#GlobalMinimum): Applies a single value line to call out the absolute minimum value of all of the series values in the chart.
- [`Maximum`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.valuelayervaluemode.html#Maximum): Applies potentially multiple value lines to call out the maximum value of each series plotted in the chart.
- [`Minimum`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.valuelayervaluemode.html#Minimum): Applies potentially multiple value lines to call out the minimum value of each series plotted in the chart.

If you want to prevent any particular series from being taken into account when using the [`IgxValueLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvaluelayercomponent.html) element, you can set the [`targetSeries`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvaluelayercomponent.html#targetSeries) property on the layer. This will force the layer to target the series that you define. You can have as many [`IgxValueLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvaluelayercomponent.html) elements within a single [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) as you want.

The following sample demonstrates usage of the different [`valueLines`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#valueLines) in the [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html):

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
import { IgxPropertyEditorPropertyDescriptionChangedEventArgs, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
import { IgxCategoryChartComponent, MarkerType, MarkerType_$type } from 'igniteui-angular-charts';
import { EnumUtil } from 'igniteui-angular-core';
import { IgxLegendComponent } from 'igniteui-angular-charts';
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

	@ViewChild("legend", { static: true } )
	private legend: IgxLegendComponent
	@ViewChild("propertyEditor", { static: true } )
	private propertyEditor: IgxPropertyEditorPanelComponent
	@ViewChild("valueListEditor", { static: true } )
	private valueListEditor: IgxPropertyEditorPropertyDescriptionComponent
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

	public editorChangeUpdateValueLines({ sender, args }: { sender: any, args: IgxPropertyEditorPropertyDescriptionChangedEventArgs }): void {
	    var item = sender as IgxPropertyEditorPropertyDescriptionComponent;
	    var chart = this.chart;

	    var valueLineType = item.primitiveValue;
	    chart.valueLines = valueLineType;
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
          propertyPath="ValueListHandler"
          name="ValueListEditor"
          #valueListEditor
          label="Value List"
          shouldOverrideDefaultEditor="true"
          valueType="EnumValue"
          dropDownValues="Auto, Average, GlobalAverage, GlobalMaximum, GlobalMinimum, Maximum, Minimum"
          dropDownNames="Auto, Average, GlobalAverage, GlobalMaximum, GlobalMinimum, Maximum, Minimum"
          primitiveValue="Auto"
          (changed)="this.editorChangeUpdateValueLines($event)">
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
      [dataSource]="countryRenewableElectricity"
      includedProperties="year, america, europe"
      chartType="Column"
      [legend]="legend"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false"
      crosshairsDisplayMode="None"
      isTransitionInEnabled="false"
      yAxisMinimumValue="0"
      yAxisMaximumValue="100">
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

## Angular Financial Overlays

You can also plot built-in financial overlays and indicators in Angular [Stock Chart](../types/stock-chart.md).

## Chart Overlay Text <label class="badge badge--preview">PREVIEW</label>

The Angular [`IgxValueOverlayComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvalueoverlaycomponent.html), [`IgxValueLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvaluelayercomponent.html), and all Data Annotation Layers can render custom overlay text inside plot area of the XamDataChart component. You can use this overlay text to annotate important events (e.g. company quarter reports) on x-axis or important values on y-axis in relationship to the layers.

For example, you can use [`IgxDataAnnotationSliceLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdataannotationslicelayercomponent.html), [`IgxValueOverlayComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvalueoverlaycomponent.html), and [`IgxValueLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvaluelayercomponent.html) to show overlay text.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartCategoryCoreModule, IgxDataChartInteractivityModule, IgxAnnotationLayerProxyModule, IgxDataChartAnnotationModule, IgxDataAnnotationSliceLayerModule, IgxNumberAbbreviatorModule, IgxValueOverlayModule } from 'igniteui-angular-charts';

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
    IgxDataChartInteractivityModule,
    IgxAnnotationLayerProxyModule,
    IgxDataChartAnnotationModule,
    IgxDataAnnotationSliceLayerModule,
    IgxNumberAbbreviatorModule,
    IgxAnnotationLayerProxyModule,
    IgxValueOverlayModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StockTeslaItem, StockTesla } from './StockTesla';
import { AnnotationSliceMultiOverlayDataItem, AnnotationSliceMultiOverlayData } from './AnnotationSliceMultiOverlayData';
import { IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxLineSeriesComponent, IgxValueOverlayComponent, IgxValueLayerComponent, IgxDataAnnotationSliceLayerComponent } from 'igniteui-angular-charts';

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
	private series1: IgxLineSeriesComponent
	@ViewChild("valueOverlay", { static: true } )
	private valueOverlay: IgxValueOverlayComponent
	@ViewChild("valueLayer", { static: true } )
	private valueLayer: IgxValueLayerComponent
	@ViewChild("annoLayer", { static: true } )
	private annoLayer: IgxDataAnnotationSliceLayerComponent
    private _stockTesla: StockTesla = null;
    public get stockTesla(): StockTesla {
        if (this._stockTesla == null)
        {
            this._stockTesla = new StockTesla();
        }
        return this._stockTesla;
    }

    private _annotationSliceMultiOverlayData: AnnotationSliceMultiOverlayData = null;
    public get annotationSliceMultiOverlayData(): AnnotationSliceMultiOverlayData {
        if (this._annotationSliceMultiOverlayData == null)
        {
            this._annotationSliceMultiOverlayData = new AnnotationSliceMultiOverlayData();
        }
        return this._annotationSliceMultiOverlayData;
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
      plotAreaMarginBottom="50"
      chartTitle="This sample demonstrates the DataAnnotationSliceLayer with overlay text compared against the value layers in the DataChart.">
          <igx-category-x-axis
          name="xAxis"
          #xAxis
          [dataSource]="stockTesla"
          label="date"
          labelLeftMargin="0"
          labelTopMargin="5"
          labelRightMargin="0"
          labelBottomMargin="15">
          </igx-category-x-axis>
          <igx-numeric-y-axis
          name="yAxis"
          #yAxis
          labelExtent="60"
          labelHorizontalAlignment="Center"
          labelLeftMargin="0"
          labelTopMargin="0"
          labelRightMargin="5"
          labelBottomMargin="0"
          minimumValue="0"
          maximumValue="550">
          </igx-numeric-y-axis>
          <igx-line-series
          name="series1"
          #series1
          title="Stock Price"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          [dataSource]="stockTesla"
          valueMemberPath="open"
          showDefaultTooltip="true"
          markerType="None"
          brush="black">
          </igx-line-series>
          <igx-value-overlay
          name="valueOverlay"
          #valueOverlay
          value="435"
          brush="green"
          isAxisAnnotationEnabled="true"
          thickness="2"
          dashArray="2, 4"
          [axis]="yAxis"
          overlayText="OverlayText on ValueOverlay"
          overlayTextLocation="OutsideBottomCenter">
          </igx-value-overlay>
          <igx-value-layer
          name="valueLayer"
          #valueLayer
          valueMode="Average"
          brush="purple"
          thickness="2"
          dashArray="2, 4"
          [targetAxis]="yAxis"
          isAxisAnnotationEnabled="true"
          overlayText="OverlayText on ValueLayer (Average)"
          overlayTextLocation="OutsideBottomCenter">
          </igx-value-layer>
          <igx-data-annotation-slice-layer
          name="AnnoLayer"
          #annoLayer
          [dataSource]="annotationSliceMultiOverlayData"
          [targetAxis]="yAxis"
          brush="green"
          annotationTextColor="white"
          annotationLabelMemberPath="label"
          annotationValueMemberPath="value"
          overlayTextMemberPath="label"
          overlayTextVerticalMargin="20"
          overlayTextHorizontalMargin="0"
          overlayTextLocation="OutsideBottomCenter"
          overlayText="OverlayText on DataAnnotationSliceLayer"
          thickness="2">
          </igx-data-annotation-slice-layer>
      </igx-data-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


### Styling Overlay Text

This code example shows how to style and customize Overlay Text on
the [`IgxDataAnnotationSliceLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdataannotationslicelayercomponent.html), [`IgxValueOverlayComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvalueoverlaycomponent.html), and [`IgxValueLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvaluelayercomponent.html).

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Chart Annotations](chart-annotations.md)
- [Column Chart](../types/area-chart.md)
- [Line Chart](../types/line-chart.md)
- [Stock Chart](../types/stock-chart.md)

## API References

The following is a list of API members mentioned in the above sections:

- [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)
- `ItemsSource`
- [`IgxValueOverlayComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvalueoverlaycomponent.html)
- [`axis`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvalueoverlaycomponent.html#axis)
- [`brush`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#brush)
- `IsAxisAnnotationsEnabled`
- [`IgxSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html)
- [`thickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#thickness)
- [`IgxValueLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvaluelayercomponent.html)
- [`ValueLayerValueMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.valuelayervaluemode.html)
- [`valueLines`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#valueLines)
- [`overlayText`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvalueoverlaycomponent.html#overlayText)
- `TargetAxis`
- `OverlayTextMemberPath`
- [`overlayTextColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvalueoverlaycomponent.html#overlayTextColor)
- [`overlayTextBackground`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvalueoverlaycomponent.html#overlayTextBackground)
- [`overlayTextBorderColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvalueoverlaycomponent.html#overlayTextBorderColor)
- [`overlayTextLocation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvalueoverlaycomponent.html#overlayTextLocation)
