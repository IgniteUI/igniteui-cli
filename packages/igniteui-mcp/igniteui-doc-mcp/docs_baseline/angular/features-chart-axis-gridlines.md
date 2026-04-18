---
title: Angular Axis Gridlines | Data Visualization | Infragistics
_description: Infragistics' Angular Axis Gridlines
_keywords: Angular Axis, Gridlines, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "XYChart", "DomainChart", "XamDataChart", "NumericXAxis", "NumericYAxis", "NumericAxisBase" ]
namespace: Infragistics.Controls.Charts
_tocName: Axis Gridlines
_premium: true
---

# Angular Axis Gridlines

All Ignite UI for Angular charts include built-in capability to modify appearance of axis lines as well as frequency of major/minor gridlines and tickmarks that are rendered on the X-Axis and Y-Axis.

> [!Note]
> the following examples can be applied to [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) as well as [`IgxFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) controls.

Axis major gridlines are long lines that extend horizontally along the Y-Axis or vertically along the X-Axis from locations of axis labels, and they render through the plot area of the chart. Axis minor gridlines are lines that render between axis major gridlines.

Axis tickmarks are displayed along all horizontal and vertical axes at each label at all major line positions of the Angular chart.

## Angular Axis Gridlines Example

This example shows how configure the axis gridline to display major and minor gridlines at specified intervals:

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
	@ViewChild("xAxisStroke", { static: true } )
	private xAxisStroke: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("xAxisMajorStroke", { static: true } )
	private xAxisMajorStroke: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("yAxisStroke", { static: true } )
	private yAxisStroke: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("yAxisMajorStroke", { static: true } )
	private yAxisMajorStroke: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("yAxisMinorStroke", { static: true } )
	private yAxisMinorStroke: IgxPropertyEditorPropertyDescriptionComponent
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
      isWrappingEnabled="true"
      name="propertyEditorPanel1"
      #propertyEditorPanel1>
          <igx-property-editor-property-description
          propertyPath="XAxisStroke"
          name="XAxisStroke"
          #xAxisStroke
          label="X Axis Stroke"
          shouldOverrideDefaultEditor="true"
          valueType="EnumValue"
          dropDownNames="gray, darkslategray, salmon, cornflowerblue, darkgreen"
          dropDownValues="gray, darkslategray, salmon, cornflowerblue, darkgreen"
          primitiveValue="gray">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="XAxisMajorStroke"
          name="XAxisMajorStroke"
          #xAxisMajorStroke
          label="X Axis Major Stroke"
          shouldOverrideDefaultEditor="true"
          valueType="EnumValue"
          dropDownNames="gray, darkslategray, salmon, cornflowerblue, darkgreen"
          dropDownValues="gray, darkslategray, salmon, cornflowerblue, darkgreen"
          primitiveValue="darkslategray">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="YAxisStroke"
          name="YAxisStroke"
          #yAxisStroke
          label="Y Axis Stroke"
          shouldOverrideDefaultEditor="true"
          valueType="EnumValue"
          dropDownNames="gray, darkslategray, salmon, cornflowerblue, darkgreen"
          dropDownValues="gray, darkslategray, salmon, cornflowerblue, darkgreen"
          primitiveValue="gray">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="YAxisMajorStroke"
          name="YAxisMajorStroke"
          #yAxisMajorStroke
          label="Y Axis Major Stroke"
          shouldOverrideDefaultEditor="true"
          valueType="EnumValue"
          dropDownNames="gray, darkslategray, salmon, cornflowerblue, darkgreen"
          dropDownValues="gray, darkslategray, salmon, cornflowerblue, darkgreen"
          primitiveValue="darkslategray">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="YAxisMinorStroke"
          name="YAxisMinorStroke"
          #yAxisMinorStroke
          label="Y Axis Minor Stroke"
          shouldOverrideDefaultEditor="true"
          valueType="EnumValue"
          dropDownNames="gray, darkslategray, salmon, cornflowerblue, darkgreen"
          dropDownValues="gray, darkslategray, salmon, cornflowerblue, darkgreen"
          primitiveValue="gray">
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
      chartType="Line"
      [legend]="legend"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false"
      xAxisStroke="rgba(145, 145, 145, 1)"
      xAxisStrokeThickness="2"
      xAxisInterval="1"
      xAxisMajorStroke="rgba(71, 71, 71, 1)"
      xAxisMajorStrokeThickness="0.5"
      yAxisStroke="gray"
      yAxisStrokeThickness="2"
      yAxisInterval="20"
      yAxisMajorStroke="darkslategray"
      yAxisMajorStrokeThickness="1"
      yAxisMinorInterval="5"
      yAxisMinorStroke="gray"
      yAxisMinorStrokeThickness="0.5"
      thickness="2">
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

## Angular Axis Gridlines Properties

Setting the axis interval property specifies how often major gridlines and axis labels are rendered on an axis. Similarly, the axis minor interval property specifies how frequent minor gridlines are rendered on an axis.

In order to display minor gridlines that correspond to minor interval, you need to set [`xAxisMinorStroke`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisMinorStroke) and [`xAxisMinorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisMinorStrokeThickness) properties on the axis. This is because minor gridlines do not have a default color or thickness and they will not be displayed without first assigning them.

You can customize how the gridlines are displayed in your Angular chart by setting the following properties:

| Axis Visuals           | Type   | Property Names                                                                                                                                                                                                                                                                                                                                                                                             | Description                                                               |
| ---------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Major Stroke Color     | string | [`xAxisMajorStroke`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisMajorStroke) <br> [`yAxisMajorStroke`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisMajorStroke)                                     | These properties set the color of axis major gridlines.                   |
| Minor Stroke Color     | string | [`xAxisMinorStroke`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisMinorStroke) <br> [`yAxisMinorStroke`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisMinorStroke)                                     | These properties set the color of axis minor gridlines.                   |
| Major Stroke Thickness | number | [`xAxisMajorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisMajorStrokeThickness) <br> [`yAxisMajorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisMajorStrokeThickness) | These properties set the thickness in pixels of the axis major gridlines. |
| Minor Stroke Thickness | number | [`xAxisMinorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisMinorStrokeThickness) <br> [`yAxisMinorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisMinorStrokeThickness) | These properties set the thickness in pixels of the axis minor gridlines. |
| Major Interval         | number | [`xAxisInterval`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#xAxisInterval) <br> [`yAxisInterval`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html#yAxisInterval)                                    | These properties set interval between axis major gridlines and labels.    |
| Minor Interval         | number | [`xAxisMinorInterval`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#xAxisMinorInterval) <br> [`yAxisMinorInterval`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html#yAxisMinorInterval)                | These properties set interval between axis minor gridlines, if used.      |
| Axis Line Stroke Color | string | [`xAxisStroke`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisStroke) <br> [`yAxisStroke`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisStroke)                                                         | These properties set the color of an axis line.                           |
| Axis Stroke Thickness  | number | [`xAxisStrokeThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisStrokeThickness) <br> [`yAxisStrokeThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisStrokeThickness)                     | These properties set the thickness in pixels of an axis line.             |

Regarding the Major and Minor Interval in the table above, it is important to note that the major interval for axis labels will also be set by this value, displaying one label at the point on the axis associated with the interval. The minor interval gridlines are always rendered between the major gridlines, and as such, the minor interval properties should always be set to something much smaller (usually 2-5 times smaller) than the value of the major Interval properties.

On category axes, the intervals are represented as an index between first item and last category item. Generally, this value should equal to 10-20% of total numbers of category items for the major Interval so that all axis labels fit on axis so that they are not clipped by other axis labels. For minor intervals, this is represented as a fraction of the major interval properties. This value generally should equal between 0.25 and 0.5.

On numeric axes, the interval values are represented as a double between axis minimum value and axis maximum value. By default, numeric axes will automatically calculate and find a nice and round interval based on axis minimum values and maximum value.

On date time axes, this value is represented as time span between axis minimum value and axis maximum value.

The following example demonstrates how to customize the gridlines by setting the properties above:

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
	@ViewChild("xAxisStroke", { static: true } )
	private xAxisStroke: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("xAxisMajorStroke", { static: true } )
	private xAxisMajorStroke: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("yAxisStroke", { static: true } )
	private yAxisStroke: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("yAxisMajorStroke", { static: true } )
	private yAxisMajorStroke: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("yAxisMinorStroke", { static: true } )
	private yAxisMinorStroke: IgxPropertyEditorPropertyDescriptionComponent
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
      isWrappingEnabled="true"
      name="propertyEditorPanel1"
      #propertyEditorPanel1>
          <igx-property-editor-property-description
          propertyPath="XAxisStroke"
          name="XAxisStroke"
          #xAxisStroke
          label="X Axis Stroke"
          shouldOverrideDefaultEditor="true"
          valueType="EnumValue"
          dropDownNames="gray, darkslategray, salmon, cornflowerblue, darkgreen"
          dropDownValues="gray, darkslategray, salmon, cornflowerblue, darkgreen"
          primitiveValue="gray">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="XAxisMajorStroke"
          name="XAxisMajorStroke"
          #xAxisMajorStroke
          label="X Axis Major Stroke"
          shouldOverrideDefaultEditor="true"
          valueType="EnumValue"
          dropDownNames="gray, darkslategray, salmon, cornflowerblue, darkgreen"
          dropDownValues="gray, darkslategray, salmon, cornflowerblue, darkgreen"
          primitiveValue="darkslategray">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="YAxisStroke"
          name="YAxisStroke"
          #yAxisStroke
          label="Y Axis Stroke"
          shouldOverrideDefaultEditor="true"
          valueType="EnumValue"
          dropDownNames="gray, darkslategray, salmon, cornflowerblue, darkgreen"
          dropDownValues="gray, darkslategray, salmon, cornflowerblue, darkgreen"
          primitiveValue="gray">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="YAxisMajorStroke"
          name="YAxisMajorStroke"
          #yAxisMajorStroke
          label="Y Axis Major Stroke"
          shouldOverrideDefaultEditor="true"
          valueType="EnumValue"
          dropDownNames="gray, darkslategray, salmon, cornflowerblue, darkgreen"
          dropDownValues="gray, darkslategray, salmon, cornflowerblue, darkgreen"
          primitiveValue="darkslategray">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="YAxisMinorStroke"
          name="YAxisMinorStroke"
          #yAxisMinorStroke
          label="Y Axis Minor Stroke"
          shouldOverrideDefaultEditor="true"
          valueType="EnumValue"
          dropDownNames="gray, darkslategray, salmon, cornflowerblue, darkgreen"
          dropDownValues="gray, darkslategray, salmon, cornflowerblue, darkgreen"
          primitiveValue="gray">
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
      chartType="Line"
      [legend]="legend"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false"
      xAxisStroke="rgba(145, 145, 145, 1)"
      xAxisStrokeThickness="2"
      xAxisInterval="1"
      xAxisMajorStroke="rgba(71, 71, 71, 1)"
      xAxisMajorStrokeThickness="0.5"
      yAxisStroke="gray"
      yAxisStrokeThickness="2"
      yAxisInterval="20"
      yAxisMajorStroke="darkslategray"
      yAxisMajorStrokeThickness="1"
      yAxisMinorInterval="5"
      yAxisMinorStroke="gray"
      yAxisMinorStrokeThickness="0.5"
      thickness="2">
      </igx-category-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

The axes of the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) also have the ability to place a dash array on the major and minor gridlines by utilizing the [`majorStrokeDashArray`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#majorStrokeDashArray) and [`minorStrokeDashArray`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#minorStrokeDashArray) properties, respectively. The actual axis line can be dashed as well by setting the [`strokeDashArray`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#strokeDashArray) property of the corresponding axis. These properties take an array of numbers that will describe the length of the dashes for the corresponding grid lines.

The following example demonstrates a [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) with the above dash array properties set:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxLegendModule, IgxDataChartCategoryModule, IgxDataChartInteractivityModule } from 'igniteui-angular-charts';

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
    IgxDataChartCategoryModule,
    IgxDataChartInteractivityModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';
import { IgxLegendComponent, IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxLineSeriesComponent } from 'igniteui-angular-charts';

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
	@ViewChild("lineSeries1", { static: true } )
	private lineSeries1: IgxLineSeriesComponent
	@ViewChild("lineSeries2", { static: true } )
	private lineSeries2: IgxLineSeriesComponent
	@ViewChild("lineSeries3", { static: true } )
	private lineSeries3: IgxLineSeriesComponent
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
  <div class="legend">
      <igx-legend
      name="Legend"
      #legend
      orientation="Horizontal">
      </igx-legend>
  </div>
  <div class="container fill">
      <igx-data-chart
      name="chart"
      #chart
      [legend]="legend"
      computedPlotAreaMarginMode="Series">
          <igx-category-x-axis
          name="xAxis"
          #xAxis
          [dataSource]="countryRenewableElectricity"
          label="year"
          interval="1"
          majorStroke="rgba(71, 71, 71, 1)"
          majorStrokeThickness="0.5"
          stroke="rgba(145, 145, 145, 1)"
          strokeThickness="2"
          strokeDashArray="5, 5"
          majorStrokeDashArray="5, 5"
          tickLength="0">
          </igx-category-x-axis>
          <igx-numeric-y-axis
          name="yAxis"
          #yAxis
          stroke="gray"
          strokeThickness="2"
          interval="20"
          majorStroke="darkslategray"
          majorStrokeThickness="1"
          minorInterval="5"
          minorStroke="gray"
          minorStrokeThickness="0.5"
          strokeDashArray="5, 5"
          majorStrokeDashArray="5, 5"
          minorStrokeDashArray="2.5, 2.5"
          tickLength="0">
          </igx-numeric-y-axis>
          <igx-line-series
          name="LineSeries1"
          #lineSeries1
          title="Europe"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          markerType="Circle"
          [dataSource]="countryRenewableElectricity"
          valueMemberPath="europe"
          showDefaultTooltip="true">
          </igx-line-series>
          <igx-line-series
          name="LineSeries2"
          #lineSeries2
          title="China"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          markerType="Circle"
          [dataSource]="countryRenewableElectricity"
          valueMemberPath="china"
          showDefaultTooltip="true">
          </igx-line-series>
          <igx-line-series
          name="LineSeries3"
          #lineSeries3
          title="America"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          markerType="Circle"
          [dataSource]="countryRenewableElectricity"
          valueMemberPath="america"
          showDefaultTooltip="true">
          </igx-line-series>
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

## Angular Axis Tickmarks Example

Axis tick marks are enabled by setting the [`xAxisTickLength`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisTickLength) and [`yAxisTickLength`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisTickLength) properties to a value greater than 0. These properties specifies the length of the line segments forming the tick marks.

Tick marks are always extend from the axis line and point to the direction of the labels. Labels are offset by the value of the length of tickmarks to avoid overlapping. For example, with the [`yAxisTickLength`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisTickLength) property is set to 5, axis labels will be shifted left by that amount.

The following example demonstrates how to customize the tickmarks by setting the properties above:

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
	@ViewChild("xAxisTickLength", { static: true } )
	private xAxisTickLength: IgxPropertyEditorPropertyDescriptionComponent
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
      isWrappingEnabled="true"
      name="propertyEditorPanel1"
      #propertyEditorPanel1>
          <igx-property-editor-property-description
          propertyPath="XAxisTickLength"
          name="XAxisTickLength"
          #xAxisTickLength
          label="X Axis Tick Length"
          shouldOverrideDefaultEditor="true"
          valueType="Slider"
          min="0"
          max="20"
          primitiveValue="10">
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
      includedProperties="year, europe, china, america"
      [legend]="legend"
      chartType="Line"
      computedPlotAreaMarginMode="Series"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false"
      xAxisTickLength="10"
      xAxisTickStrokeThickness="1"
      xAxisTickStroke="gray"
      yAxisTickLength="0"
      yAxisTickStrokeThickness="0"
      yAxisTickStroke="rgba(0, 0, 0, 0)">
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

## Angular Axis Tickmarks Properties

You can customize how the axis tickmarks are displayed in our Angular chats by setting the following properties:

| Axis Visuals          | Type   | Property Names                                                                                                                                                                                                                                                                                                                                                                                         | Description                                                |
| --------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| Tick Stroke Color     | string | [`xAxisTickStroke`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisTickStroke) <br> [`yAxisTickStroke`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisTickStroke)                                     | These properties set the color of the tickmarks.           |
| Tick Stroke Thickness | number | [`xAxisTickStrokeThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisTickStrokeThickness) <br> [`yAxisTickStrokeThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisTickStrokeThickness) | These properties set the thickness of the axis tick marks. |
| Tick Stroke Length    | number | [`xAxisTickLength`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisTickLength) <br> [`yAxisTickLength`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisTickLength)                                     | These properties set the length of the axis tick marks.    |

## Additional Resources

You can find more information about related chart features in these topics:

- [Axis Layout](chart-axis-layouts.md)
- [Axis Options](chart-axis-options.md)

## API References

The following is a list of API members mentioned in the above sections:

| [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)                                                                                                                                                                                                        | [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) or [`IgxFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Axes` ➔ [`IgxNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) ➔ [`interval`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericaxisbasecomponent.html#interval)              | [`xAxisInterval`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#xAxisInterval) (Major Interval)                                                                                                                                                                  |
| `Axes` ➔ [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ [`interval`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericaxisbasecomponent.html#interval)              | [`yAxisInterval`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#yAxisInterval) (Major Interval)                                                                                                                                                                  |
| `Axes` ➔ [`IgxNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) ➔ [`minorInterval`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericaxisbasecomponent.html#minorInterval)    | [`xAxisMinorInterval`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#xAxisMinorInterval)                                                                                                                                                                         |
| `Axes` ➔ [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ [`minorInterval`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericaxisbasecomponent.html#minorInterval)    | [`yAxisMinorInterval`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#yAxisMinorInterval)                                                                                                                                                                         |
| `Axes` ➔ [`IgxNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) ➔ [`majorStroke`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#majorStroke)                   | [`xAxisMajorStroke`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisMajorStroke)                                                                                                                                                                                   |
| `Axes` ➔ [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ [`majorStroke`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#majorStroke)                   | [`yAxisMajorStroke`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisMajorStroke)                                                                                                                                                                                   |
| `Axes` ➔ [`IgxNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) ➔ [`majorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#majorStrokeThickness) | [`xAxisMajorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisMajorStrokeThickness)                                                                                                                                                                 |
| `Axes` ➔ [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ [`majorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#majorStrokeThickness) | [`yAxisMajorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisMajorStrokeThickness)                                                                                                                                                                 |
| `Axes` ➔ [`IgxNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) ➔ [`minorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#minorStrokeThickness) | [`xAxisMinorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisMinorStrokeThickness)                                                                                                                                                                 |
| `Axes` ➔ [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ [`minorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#minorStrokeThickness) | [`yAxisMinorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisMinorStrokeThickness)                                                                                                                                                                 |
| `Axes` ➔ [`IgxNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) ➔ [`strokeThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#strokeThickness)           | [`xAxisStrokeThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisStrokeThickness)                                                                                                                                                                           |
| `Axes` ➔ [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ [`strokeThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#strokeThickness)           | [`yAxisStrokeThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisStrokeThickness)                                                                                                                                                                           |
| `Axes` ➔ [`IgxNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) ➔ [`stroke`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#stroke)                             | [`xAxisStroke`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisStroke) (Axis Line Color)                                                                                                                                                                           |
| `Axes` ➔ [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ [`stroke`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#stroke)                             | [`yAxisStroke`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisStroke) (Axis Line Color)                                                                                                                                                                           |
| `Axes` ➔ [`IgxNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) ➔ [`tickLength`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#tickLength)                     | [`xAxisTickLength`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisTickLength)                                                                                                                                                                                     |
| `Axes` ➔ [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ [`tickLength`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#tickLength)                     | [`yAxisTickLength`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisTickLength)                                                                                                                                                                                     |
| `Axes` ➔ [`IgxNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) ➔ [`tickStroke`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#tickStroke)                     | [`xAxisTickStroke`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisTickStroke)                                                                                                                                                                                     |
| `Axes` ➔ [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ [`tickStroke`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#tickStroke)                     | [`yAxisTickStroke`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisTickStroke)                                                                                                                                                                                     |
| `Axes` ➔ [`IgxNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) ➔ [`strip`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#strip)                               | [`xAxisStrip`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisStrip) (Space between Major Gridlines)                                                                                                                                                               |
| `Axes` ➔ [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ [`strip`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#strip)                               | [`yAxisStrip`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisStrip) (Space between Major Gridlines)                                                                                                                                                               |
