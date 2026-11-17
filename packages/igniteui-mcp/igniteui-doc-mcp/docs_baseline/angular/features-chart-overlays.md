---
title: Angular Chart Overlays | Data Visualization Tools | Value Overlay | Infragistics
description: Use Infragistics Ignite UI for Angular chart control's value overlay feature to place horizontal or vertical lines at a single numeric value. Learn about our Ignite UI for Angular graph types!
keywords: Angular charts, data chart, value overlay, Ignite UI for Angular, Infragistics
license: commercial

mentionedTypes: ["DataChart", "ValueOverlay", "CategoryChart", "FinancialChart"]
namespace: Infragistics.Controls.Charts
llms:
  description: "The Angular DataChart allows for placement of horizontal or vertical lines at a single numeric value that you define through usage of the ValueOverlay."
platformType: xplat
_tocName: Chart Overlays
_premium: true
---
# Angular Chart Overlays

The Angular [`IgxDataChartComponent`](mcp:get_api_reference?platform=angular&component=IgxDataChartComponent) allows for placement of horizontal or vertical lines at a single numeric value that you define through usage of the [`IgxValueOverlayComponent`](mcp:get_api_reference?platform=angular&component=IgxValueOverlayComponent). This can help you to visualize data such as the mean or median of a particular series.

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

## Angular Value Overlay Properties

Unlike other series types that use a [`dataSource`](mcp:get_api_reference?platform=angular&component=IgxValueOverlayComponent&member=dataSource) for data binding, the value overlay uses a [`value`](mcp:get_api_reference?platform=angular&component=IgxValueOverlayComponent&member=value) property to bind a single numeric value. In addition, the value overlay requires you to define a single [`IgxValueOverlayComponent.axis`](mcp:get_api_reference?platform=angular&component=IgxValueOverlayComponent&member=axis) to use. If you use an X-axis, the value overlay will be a vertical line, and if you use a Y-axis, it will be a horizontal line.

When using a numeric X or Y axis, the [`value`](mcp:get_api_reference?platform=angular&component=IgxValueOverlayComponent&member=value) property should reflect the actual numeric value on the axis where you want the value overlay to be drawn. When using a category X or Y axis, the [`value`](mcp:get_api_reference?platform=angular&component=IgxValueOverlayComponent&member=value) should reflect the index of the category at which you want the value overlay to appear.

When using the value overlay with a numeric angle axis, it will appear as a line from the center of the chart and when using a numeric radius axis, it will appear as a circle.

[`IgxValueOverlayComponent`](mcp:get_api_reference?platform=angular&component=IgxValueOverlayComponent) appearance properties are inherited from [`IgxSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxSeriesComponent) and so [`IgxValueOverlayComponent.brush`](mcp:get_api_reference?platform=angular&component=IgxValueOverlayComponent&member=brush) and [`IgxValueOverlayComponent.thickness`](mcp:get_api_reference?platform=angular&component=IgxValueOverlayComponent&member=thickness) for example are available and work the same way they do with other types of series.

It is also possible to show an axis annotation on a [`IgxValueOverlayComponent`](mcp:get_api_reference?platform=angular&component=IgxValueOverlayComponent) to show the value of the overlay on the owning axis. In order to show this, you can set the [`isAxisAnnotationEnabled`](mcp:get_api_reference?platform=angular&component=IgxValueOverlayComponent&member=isAxisAnnotationEnabled) property to true.

## Angular Value Layer

The Angular charting components also expose the ability to use value lines to call out different focal points of your data, such as minimum, maximum, and average values.

Applying the [`IgxValueLayerComponent`](mcp:get_api_reference?platform=angular&component=IgxValueLayerComponent) in the [`IgxCategoryChartComponent`](mcp:get_api_reference?platform=angular&component=IgxCategoryChartComponent) and [`IgxFinancialChartComponent`](mcp:get_api_reference?platform=angular&component=IgxFinancialChartComponent) components is done by setting the [`valueLines`](mcp:get_api_reference?platform=angular&component=IgxFinancialChartComponent&member=valueLines) property on the chart. This property takes a collection of the [`ValueLayerValueMode`](mcp:get_api_reference?platform=angular&component=ValueLayerValueMode) enumeration. You can mix and match multiple value layers in the same chart by adding multiple [`ValueLayerValueMode`](mcp:get_api_reference?platform=angular&component=ValueLayerValueMode) enumerations to the [`valueLines`](mcp:get_api_reference?platform=angular&component=IgxFinancialChartComponent&member=valueLines) collection of the chart.

In the [`IgxDataChartComponent`](mcp:get_api_reference?platform=angular&component=IgxDataChartComponent), this is done by adding a [`IgxValueLayerComponent`](mcp:get_api_reference?platform=angular&component=IgxValueLayerComponent) to the [`IgxSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxSeriesComponent) collection of the chart and then setting the [`IgxValueLayerComponent`](mcp:get_api_reference?platform=angular&component=IgxValueLayerComponent) property to one of the [`ValueLayerValueMode`](mcp:get_api_reference?platform=angular&component=ValueLayerValueMode) enumerations. Each of these enumerations and what they mean is listed below:

- [`Auto`](mcp:get_api_reference?platform=angular&component=ValueLayerValueMode&member=Auto): The default value mode of the [`ValueLayerValueMode`](mcp:get_api_reference?platform=angular&component=ValueLayerValueMode) enumeration.
- [`Average`](mcp:get_api_reference?platform=angular&component=ValueLayerValueMode&member=Average): Applies potentially multiple value lines to call out the average value of each series plotted in the chart.
- [`GlobalAverage`](mcp:get_api_reference?platform=angular&component=ValueLayerValueMode&member=GlobalAverage): Applies a single value line to call out the average of all of the series values in the chart.
- [`GlobalMaximum`](mcp:get_api_reference?platform=angular&component=ValueLayerValueMode&member=GlobalMaximum): Applies a single value line to call out the absolute maximum value of all of the series values in the chart.
- [`GlobalMinimum`](mcp:get_api_reference?platform=angular&component=ValueLayerValueMode&member=GlobalMinimum): Applies a single value line to call out the absolute minimum value of all of the series values in the chart.
- [`Maximum`](mcp:get_api_reference?platform=angular&component=ValueLayerValueMode&member=Maximum): Applies potentially multiple value lines to call out the maximum value of each series plotted in the chart.
- [`Minimum`](mcp:get_api_reference?platform=angular&component=ValueLayerValueMode&member=Minimum): Applies potentially multiple value lines to call out the minimum value of each series plotted in the chart.

If you want to prevent any particular series from being taken into account when using the [`IgxValueLayerComponent`](mcp:get_api_reference?platform=angular&component=IgxValueLayerComponent) element, you can set the [`targetSeries`](mcp:get_api_reference?platform=angular&component=IgxValueLayerComponent&member=targetSeries) property on the layer. This will force the layer to target the series that you define. You can have as many [`IgxValueLayerComponent`](mcp:get_api_reference?platform=angular&component=IgxValueLayerComponent) elements within a single [`IgxDataChartComponent`](mcp:get_api_reference?platform=angular&component=IgxDataChartComponent) as you want.

The following sample demonstrates usage of the different [`valueLines`](mcp:get_api_reference?platform=angular&component=IgxFinancialChartComponent&member=valueLines) in the [`IgxCategoryChartComponent`](mcp:get_api_reference?platform=angular&component=IgxCategoryChartComponent):

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

## Angular Financial Overlays

You can also plot built-in financial overlays and indicators in Angular [Stock Chart](../types/stock-chart.md).

## Chart Overlay Text 

The Angular [`IgxValueOverlayComponent`](mcp:get_api_reference?platform=angular&component=IgxValueOverlayComponent), [`IgxValueLayerComponent`](mcp:get_api_reference?platform=angular&component=IgxValueLayerComponent), and all Data Annotation Layers can render custom overlay text inside plot area of the DataChart component. You can use this overlay text to annotate important events (e.g. company quarter reports) on x-axis or important values on y-axis in relationship to the layers.

For example, you can use [`IgxDataAnnotationSliceLayerComponent`](mcp:get_api_reference?platform=angular&component=IgxDataAnnotationSliceLayerComponent), [`IgxValueOverlayComponent`](mcp:get_api_reference?platform=angular&component=IgxValueOverlayComponent), and [`IgxValueLayerComponent`](mcp:get_api_reference?platform=angular&component=IgxValueLayerComponent) to show overlay text.

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
the [`IgxDataAnnotationSliceLayerComponent`](mcp:get_api_reference?platform=angular&component=IgxDataAnnotationSliceLayerComponent), [`IgxValueOverlayComponent`](mcp:get_api_reference?platform=angular&component=IgxValueOverlayComponent), and [`IgxValueLayerComponent`](mcp:get_api_reference?platform=angular&component=IgxValueLayerComponent).

```html
<igx-data-annotation-slice-layer
    #annoLayer
    [dataSource]="annotationSliceMultiOverlayData"
    [targetAxis]="yAxis"
    brush="Green"
    thickness=2
    annotationTextColor="White"
    annotationLabelMemberPath="label"
    annotationValueMemberPath="value"
    overlayText="OverlayText on DataAnnotationSliceLayer"
    overlayTextMemberPath="label"
    overlayTextLocation="OutsideBottomCenter"
    overlayTextColor="Red"
    overlayTextBackground="Green"
    overlayTextBorderColor="Black"
    overlayTextBorderThickness=1
    overlayTextBorderRadius=4
    overlayTextHorizontalMargin=0
    overlayTextHorizontalPadding=2
    overlayTextVerticalMargin=20
    overlayTextVerticalPadding=2>
</igx-data-annotation-slice-layer>
```

## Additional Resources

You can find more information about related chart types in these topics:

- [Chart Annotations](chart-annotations.md)
- [Column Chart](../types/area-chart.md)
- [Line Chart](../types/line-chart.md)
- [Stock Chart](../types/stock-chart.md)

## API References
[`IgxDataChartComponent`](mcp:get_api_reference?platform=angular&component=IgxDataChartComponent)
[`IgxValueOverlayComponent`](mcp:get_api_reference?platform=angular&component=IgxValueOverlayComponent)
[`IgxValueLayerComponent`](mcp:get_api_reference?platform=angular&component=IgxValueLayerComponent)
[`ValueLayerValueMode`](mcp:get_api_reference?platform=angular&component=ValueLayerValueMode)
[`IgxCategoryChartComponent`](mcp:get_api_reference?platform=angular&component=IgxCategoryChartComponent)
[`IgxFinancialChartComponent`](mcp:get_api_reference?platform=angular&component=IgxFinancialChartComponent)
