---
title: Angular Axis Options | Data Visualization | Infragistics
_description: Infragistics' Angular Axis Options
_keywords: Angular Axis, Options, Title, Labels, Gap, Overlap, Range, Scale, Mode, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "FinancialChart", "FinancialChartYAxisMode", "FinancialChartXAxisMode", "NumericYAxis", "CategoryXAxis"]
namespace: Infragistics.Controls.Charts
_tocName: Axis Options
_premium: true
---

# Angular Axis Options

In all Ignite UI for Angular charts, the axes provide properties for visual configurations such as titles, labels, and ranges. These features are demonstrated in the examples provided below.

## Axis Titles Example

The axis titles feature of the Angular charts, allows you to add contextual information to the your chart. You can customize the look and feel of the axis titles in many different ways such as applying different font styles, colors, margins, and alignments.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

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
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';
import { IgxLegendComponent, IgxCategoryChartComponent } from 'igniteui-angular-charts';

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
	private chart: IgxCategoryChartComponent
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
      chartType="Line"
      [legend]="legend"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false"
      computedPlotAreaMarginMode="Series"
      xAxisTitle="Year"
      xAxisTitleTextColor="gray"
      xAxisTitleTextStyle="10pt 'Titillium Web'"
      xAxisTitleAngle="0"
      yAxisTitle="Trillions of Watt-hours (Twh)"
      yAxisTitleTextColor="gray"
      yAxisTitleTextStyle="10pt 'Titillium Web'"
      yAxisTitleAngle="90"
      yAxisTitleLeftMargin="5">
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

## Axis Labels Example

The Angular Charts allows you full control over configuring, formatting, and styling the font of the labels displayed on an axis in your chart. You can change the rotation angle, margin, horizontal and vertical alignment, color, padding, and visibility of axis labels. The following example shows how to use these features of axes.

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
	@ViewChild("xAxisLabelAngleEditor", { static: true } )
	private xAxisLabelAngleEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("yAxisLabelAngleEditor", { static: true } )
	private yAxisLabelAngleEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("xAxisLabelTextColorEditor", { static: true } )
	private xAxisLabelTextColorEditor: IgxPropertyEditorPropertyDescriptionComponent
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
          propertyPath="XAxisLabelAngle"
          name="XAxisLabelAngleEditor"
          #xAxisLabelAngleEditor
          label="X Axis Label Angle"
          shouldOverrideDefaultEditor="true"
          valueType="EnumValue"
          dropDownNames="0, 45, 90, 135, 180, 225, 270"
          dropDownValues="0, 45, 90, 135, 180, 225, 270"
          primitiveValue="0">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="YAxisLabelAngle"
          name="YAxisLabelAngleEditor"
          #yAxisLabelAngleEditor
          label="Y Axis Label Angle"
          shouldOverrideDefaultEditor="true"
          valueType="EnumValue"
          dropDownNames="-90, -45, 0, 45, 90"
          dropDownValues="-90, -45, 0, 45, 90"
          primitiveValue="0">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="XAxisLabelTextColor"
          name="XAxisLabelTextColorEditor"
          #xAxisLabelTextColorEditor
          label="X Axis Label Color"
          valueType="EnumValue"
          shouldOverrideDefaultEditor="true"
          dropDownNames="red, green"
          dropDownValues="red, green"
          primitiveValue="red">
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
      chartType="Line"
      computedPlotAreaMarginMode="Series"
      [legend]="legend"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false"
      topMargin="20"
      xAxisLabelAngle="0"
      xAxisLabelTextColor="gray"
      xAxisLabelTextStyle="10pt 'Titillium Web'"
      xAxisLabelTopMargin="5"
      yAxisLabelAngle="0"
      yAxisLabelTextColor="gray"
      yAxisLabelTextStyle="10pt 'Titillium Web'"
      yAxisLabelRightMargin="5"
      yAxisLabelLocation="OutsideRight"
      titleTopMargin="10">
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

## Axis Labels Management & Formatting

The axes of the chart have the ability to perform an enhanced calculation regarding the amount of space available to the labels of the owning axis. This enhanced calculation allows the axis to optimize the amount of space given to it in order to display more labels for the given axis.

This enhanced calculation is something that you need to opt-in to, which you can do by setting the [`useEnhancedIntervalManagement`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#useEnhancedIntervalManagement) property to true. Then, if you prefer to display as many labels as can fit in the dimensions of the axis without manually setting the [`interval`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericaxisbasecomponent.html#interval) property of the axis, you can set the [`enhancedIntervalPreferMoreCategoryLabels`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#enhancedIntervalPreferMoreCategoryLabels) property on the axis to true.

The chart also has the ability to consider auto-rotation of the labels if they will not fit in the allotted space as well as the ability to apply an automatic margin to the plot area to ensure the labels can fit. This is something that can be opted into initially by first setting the [`autoMarginAndAngleUpdateMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#autoMarginAndAngleUpdateMode) property on the chart to either `SizeChanging` or `SizeChangingAndZoom`. This will tell the chart when to re-evaluate the auto margin and angle applied to the labels, if desired.

After setting the [`autoMarginAndAngleUpdateMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#autoMarginAndAngleUpdateMode), you can set the [`shouldAutoExpandMarginForInitialLabels`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#shouldAutoExpandMarginForInitialLabels) property to true to opt into the automatic margin or set the [`shouldConsiderAutoRotationForInitialLabels`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#shouldConsiderAutoRotationForInitialLabels) property to true for the auto-rotation. You can also further customize the automatic margin that is applied by setting the [`autoExpandMarginExtraPadding`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#autoExpandMarginExtraPadding) and [`autoExpandMarginMaximumValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#autoExpandMarginMaximumValue) to provide extra space or a maximum possible margin, respectively.

Custom label formats such as [`IgxNumberFormatSpecifier`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxnumberformatspecifier.html) and [`IgxDateTimeFormatSpecifier`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxdatetimeformatspecifier.html) can be added to each axis via the `XAxisLabelFormatSpecifier` and `YAxisLabelFormatSpecifier` collections. Commonly used for applying Intl.NumberFormat and Intl.DateTimeFormat language sensitive number, date and time formatting. In order for a custom format to be applied to the labels, the [`yAxisLabelFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisLabelFormat) or [`xAxisLabelFormat`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisLabelFormat) need to be set to data item's property name on the [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html), eg. `{Date}`. For the [`IgxFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) the number is the context because it uses a numeric axis, therefore this needs to be set to `{0}`.

The following example formats the yAxis with a [`IgxNumberFormatSpecifier`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxnumberformatspecifier.html) to represent $USD prices for top box office movies in the United States.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxPropertyEditorPanelModule } from 'igniteui-angular-layouts';
import { IgxDataLegendModule, IgxCategoryChartModule } from 'igniteui-angular-charts';
import { IgxNumberFormatSpecifierModule } from 'igniteui-angular-core';

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
    IgxDataLegendModule,
    IgxCategoryChartModule,
    IgxNumberFormatSpecifierModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, DataLegendDescriptionModule, CategoryChartDescriptionModule, NumberFormatSpecifierDescriptionModule } from 'igniteui-angular-core';
import { HighestGrossingMoviesItem, HighestGrossingMovies } from './HighestGrossingMovies';
import { IgxDataLegendComponent, IgxCategoryChartComponent } from 'igniteui-angular-charts';
import { IgxNumberFormatSpecifier } from 'igniteui-angular-core';

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
	private legend: IgxDataLegendComponent
	private _numberFormatSpecifier1: IgxNumberFormatSpecifier[] | null = null;
	public get numberFormatSpecifier1(): IgxNumberFormatSpecifier[] {
	    if (this._numberFormatSpecifier1 == null)
	    {
	        let numberFormatSpecifier1: IgxNumberFormatSpecifier[] = [];
	        var numberFormatSpecifier2 = new IgxNumberFormatSpecifier();
	        numberFormatSpecifier2.style = "currency";
	        numberFormatSpecifier2.currency = "USD";
	        numberFormatSpecifier2.currencyDisplay = "symbol";
	        numberFormatSpecifier2.maximumFractionDigits = 2;
	        numberFormatSpecifier2.minimumFractionDigits = 2;

	        numberFormatSpecifier1.push(numberFormatSpecifier2)
	        this._numberFormatSpecifier1 = numberFormatSpecifier1;
	    }
	    return this._numberFormatSpecifier1;
	}
	@ViewChild("chart", { static: true } )
	private chart: IgxCategoryChartComponent
	private _numberFormatSpecifier3: IgxNumberFormatSpecifier[] | null = null;
	public get numberFormatSpecifier3(): IgxNumberFormatSpecifier[] {
	    if (this._numberFormatSpecifier3 == null)
	    {
	        let numberFormatSpecifier3: IgxNumberFormatSpecifier[] = [];
	        var numberFormatSpecifier4 = new IgxNumberFormatSpecifier();
	        numberFormatSpecifier4.style = "currency";
	        numberFormatSpecifier4.currency = "USD";
	        numberFormatSpecifier4.currencyDisplay = "symbol";
	        numberFormatSpecifier4.maximumFractionDigits = 2;
	        numberFormatSpecifier4.minimumFractionDigits = 2;

	        numberFormatSpecifier3.push(numberFormatSpecifier4)
	        this._numberFormatSpecifier3 = numberFormatSpecifier3;
	    }
	    return this._numberFormatSpecifier3;
	}
	private _numberFormatSpecifier5: IgxNumberFormatSpecifier[] | null = null;
	public get numberFormatSpecifier5(): IgxNumberFormatSpecifier[] {
	    if (this._numberFormatSpecifier5 == null)
	    {
	        let numberFormatSpecifier5: IgxNumberFormatSpecifier[] = [];
	        var numberFormatSpecifier6 = new IgxNumberFormatSpecifier();
	        numberFormatSpecifier6.style = "currency";
	        numberFormatSpecifier6.currency = "USD";
	        numberFormatSpecifier6.currencyDisplay = "symbol";
	        numberFormatSpecifier6.minimumFractionDigits = 0;

	        numberFormatSpecifier5.push(numberFormatSpecifier6)
	        this._numberFormatSpecifier5 = numberFormatSpecifier5;
	    }
	    return this._numberFormatSpecifier5;
	}
    private _highestGrossingMovies: HighestGrossingMovies = null;
    public get highestGrossingMovies(): HighestGrossingMovies {
        if (this._highestGrossingMovies == null)
        {
            this._highestGrossingMovies = new HighestGrossingMovies();
        }
        return this._highestGrossingMovies;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            DataLegendDescriptionModule.register(context);
            CategoryChartDescriptionModule.register(context);
            NumberFormatSpecifierDescriptionModule.register(context);
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
  <div class="legend-title">
      Highest Grossing Movie Franchises
  </div>
  <div class="legend">
      <igx-data-legend
      name="legend"
      #legend
      [target]="chart"
      valueFormatString="{0} Billion"
      [valueFormatSpecifiers]="numberFormatSpecifier1">
      </igx-data-legend>
  </div>
  <div class="container fill">
      <igx-category-chart
      name="chart"
      #chart
      [dataSource]="highestGrossingMovies"
      chartType="Column"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false"
      finalValueAnnotationsPrecision="2"
      dataToolTipValueFormatString="{0} Billion"
      [dataToolTipValueFormatSpecifiers]="numberFormatSpecifier3"
      yAxisLabelFormat="{0}B"
      [yAxisLabelFormatSpecifiers]="numberFormatSpecifier5">
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

## Axis Range Example

In the Angular charts, you can define a range minimum and range maximum value of a numeric or time axis. The range minimum is the lowest value of the axis and the range maximum is the highest value of the axis. These are set by setting the [`yAxisMinimumValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#yAxisMinimumValue) and [`yAxisMaximumValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#yAxisMaximumValue) options.

By default, charts will calculate the minimum and maximum values for the numeric and time axis range based on the lowest and highest corresponding value points in your data, but this automatic calculation may not be appropriate for your set of data points in all cases. For example, if your data has a minimum value of 850, you may want to set the [`yAxisMinimumValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#yAxisMinimumValue) to 800 so that there will be a space value of 50 between the axis minimum and the lowest value of data points. The same idea can be applied to the axis minimum value and the highest value of data points using the [`yAxisMaximumValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#yAxisMaximumValue) property.

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
	@ViewChild("propertyEditorPanel1", { static: true } )
	private propertyEditorPanel1: IgxPropertyEditorPanelComponent
	@ViewChild("yAxisMinimumValue", { static: true } )
	private yAxisMinimumValue: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("yAxisMaximumValue", { static: true } )
	private yAxisMaximumValue: IgxPropertyEditorPropertyDescriptionComponent
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

	public editorChangeUpdateYAxisMinimumValue({ sender, args }: { sender: any, args: IgxPropertyEditorPropertyDescriptionChangedEventArgs }): void {

		var yAxisMinimumVal = args.newValue;
	    this.chart.yAxisMinimumValue = parseInt(yAxisMinimumVal);
	}

	public editorChangeUpdateYAxisMaximumValue({ sender, args }: { sender: any, args: IgxPropertyEditorPropertyDescriptionChangedEventArgs }): void {

	    var yAxisMaximumVal = args.newValue;
	    this.chart.yAxisMaximumValue = parseInt(yAxisMaximumVal);
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
          propertyPath="YAxisMinimumValueHandler"
          name="YAxisMinimumValue"
          #yAxisMinimumValue
          label="Y Axis Minimum Value"
          shouldOverrideDefaultEditor="true"
          valueType="EnumValue"
          dropDownNames="0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100"
          dropDownValues="0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100"
          primitiveValue="0"
          (changed)="this.editorChangeUpdateYAxisMinimumValue($event)">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="YAxisMaximumValueHandler"
          name="YAxisMaximumValue"
          #yAxisMaximumValue
          label="Y Axis Maximum Value"
          shouldOverrideDefaultEditor="true"
          valueType="EnumValue"
          dropDownNames="100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200"
          dropDownValues="100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200"
          primitiveValue="150"
          (changed)="this.editorChangeUpdateYAxisMaximumValue($event)">
          </igx-property-editor-property-description>
      </igx-property-editor-panel>
  </div>
  <div class="legend-title">
      Highest Grossing Movie Franchises
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
      yAxisMinimumValue="0"
      yAxisMaximumValue="150">
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

## Axis Modes & Scale

In the [`IgxFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) and [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) controls, you can choose if your data is plotted on logarithmic scale along the y-axis when the [`yAxisIsLogarithmic`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#yAxisIsLogarithmic) property is set to true or on linear scale when this property is set to false (default value). With the [`yAxisLogarithmBase`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#yAxisLogarithmBase) property, you can change base of logarithmic scale from default value of 10 to other integer value.

The [`IgxFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) and control allows you to choose how your data is represented along the y-axis using [`yAxisMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html#yAxisMode) property that provides [`Numeric`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.financialchartyaxismode.html#Numeric) and [`PercentChange`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.financialchartyaxismode.html#PercentChange) modes. The [`Numeric`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.financialchartyaxismode.html#Numeric) mode will plot data with the exact values while the [`PercentChange`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.financialchartyaxismode.html#PercentChange) mode will display the data as percentage change relative to the first data point provided. The default value is [`Numeric`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.financialchartyaxismode.html#Numeric) mode.

In addition to [`yAxisMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html#yAxisMode) property, the [`IgxFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) control has [`xAxisMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html#xAxisMode) property that provides [`Time`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.financialchartxaxismode.html#Time) and [`Ordinal`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.financialchartxaxismode.html#Ordinal) modes for the x-axis. The [`Time`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.financialchartxaxismode.html#Time) mode will render space along the x-axis for gaps in data (e.g. no stock trading on weekends or holidays). The [`Ordinal`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.financialchartxaxismode.html#Ordinal) mode will collapse date areas where data does not exist. The default value is [`Ordinal`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.financialchartxaxismode.html#Ordinal) mode.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxFinancialChartModule, IgxLegendModule } from "igniteui-angular-charts";
import { FinancialDataService } from "./FinancialDataService";


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
    IgxFinancialChartModule,
    IgxLegendModule
],
  providers: [FinancialDataService],
schemas: []
})
export class AppModule {}
```
```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FinancialDataService } from "./FinancialDataService";

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ FinancialDataService ],
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public xAxisMode: string = "Ordinal";
    public yAxisMode: string = "Numeric";
    public data: any;

    constructor(private dataService: FinancialDataService) {
        this.data = [ this.dataService.getAmzn(), this.dataService.getGoog() ];
    }
}
```
```html
<div class="container vertical">
    <div class="options horizontal">
        <label >yAxis Mode: </label>
        <select [(ngModel)]="yAxisMode">
            <option>Numeric</option>
            <option>PercentChange</option>
        </select>
        <label>  xAxis Mode: </label>
        <select [(ngModel)]="xAxisMode">
            <option>Ordinal</option>
            <option>Time</option>
        </select>
    </div>
    <div class="container">
        <igx-financial-chart height="100%" width="100%"
            [dataSource]="data"
            [yAxisMode]="yAxisMode"
            [xAxisMode]="xAxisMode"
            yAxisInterval="200"
            yAxisMinorInterval="50"
            yAxisMajorStroke="Black"
            yAxisMinorStroke="Gray"
            yAxisMinorStrokeThickness="0.5"
            yAxisMajorStrokeThickness="0.5"

            xAxisTickLength="10"
            xAxisTickStrokeThickness="1"
            xAxisTickStroke="Gray"

            xAxisLabelTextStyle="8pt Verdana"
            xAxisLabelTextColor="Gray"
            xAxisLabelTopMargin="5"
            xAxisLabelAngle="0"
            yAxisLabelTextStyle="8pt Verdana"
            yAxisLabelTextColor="Gray"
            yAxisLabelLeftMargin="5"
            yAxisLabelAngle="0"

            yAxisTitle="Stock Prices ($)"
            yAxisTitleTextStyle="15pt Times New Roman|Georgia|Serif"
            yAxisTitleRightMargin="10"
            yAxisTitleTextColor="Black"
            yAxisTitleAngle="90"
            zoomSliderType="none"
            chartType="line">
        </igx-financial-chart>
    </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

<div class="divider--half"></div>

## Axis Gap Example

The [`xAxisGap`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#xAxisGap) property of the Angular charts, determines the amount of space between columns or bars of plotted series. This property accepts a numeric value between 0.0 and 1.0. The value represents a relative width of the gap out of the available number of pixels between the series. Setting this property to 0 would mean there is no gap rendered between the series, and setting it 1 would render the maximum available gap.

The [`xAxisMaximumGap`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#xAxisMaximumGap) property of the Angular charts, determines the maximum gap value to allow. This default is set to 1.0 but can be changed depending on what you set [`xAxisGap`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#xAxisGap) to.

The [`xAxisMinimumGapSize`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#xAxisMinimumGapSize) property of the Angular charts, determines the minimum amount of pixels to use for the gap between the categories, if possible.

The following example shows the average maximum temperature in Celsius in New York City's Central Park represented by a [Column Chart](../types/column-chart.md) with an [`xAxisGap`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#xAxisGap) initially set to 1, and so there will be a full category's width between the columns. There is a slider that allows you to configure the gap in this example so that you can see what the different values do.

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
import { IgxPropertyEditorPanelComponent, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
import { IgxCategoryChartComponent } from 'igniteui-angular-charts';

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

	@ViewChild("propertyEditorPanel1", { static: true } )
	private propertyEditorPanel1: IgxPropertyEditorPanelComponent
	@ViewChild("xAxisGap", { static: true } )
	private xAxisGap: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("xAxisMaximumGap", { static: true } )
	private xAxisMaximumGap: IgxPropertyEditorPropertyDescriptionComponent
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
          propertyPath="XAxisGap"
          name="XAxisGap"
          #xAxisGap
          label="X Axis - Gap"
          shouldOverrideDefaultEditor="true"
          valueType="Slider"
          primitiveValue="0.5"
          min="0"
          max="1.5"
          step="0.1">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="XAxisMaximumGap"
          name="XAxisMaximumGap"
          #xAxisMaximumGap
          label="Maximum Gap"
          shouldOverrideDefaultEditor="true"
          valueType="EnumValue"
          dropDownNames="1.5, 1.3, 1.0, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0"
          dropDownValues="1.5, 1.3, 1.0, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0"
          primitiveValue="0.5">
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
      [dataSource]="countryRenewableElectricity"
      includedProperties="year, europe, china, america"
      chartType="Column"
      crosshairsSnapToData="true"
      yAxisTitle="TWh"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false"
      xAxisInterval="1"
      xAxisGap="0.5"
      xAxisMaximumGap="1.5">
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

## Axis Overlap Example

The [`xAxisOverlap`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#xAxisOverlap) property of the Angular charts, allows setting the overlap of the rendered columns or bars of plotted series. This property accepts a numeric value between -1.0 and 1.0. The value represents a relative overlap out of the available number of pixels dedicated to each series. Setting this property to a negative value (down to -1.0) results in the categories being pushed away from each other, producing a gap between themselves. Conversely, setting this property to a positive value (up to 1.0) results in the categories overlapping each other. A value of 1 directs the chart to render the categories on top of each other.

The following example shows a comparison of the highest grossing worldwide film franchises compared by the total world box office revenue of the franchise and the highest grossing movie in the series, represented by a [Column Chart](../types/column-chart.md) with an [`xAxisOverlap`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#xAxisOverlap) initially set to 1, and so the columns will completely overlap each other. There is a slider that allows you to configure the overlap in this example so that you can see what the different values do.

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
import { HighestGrossingMoviesItem, HighestGrossingMovies } from './HighestGrossingMovies';
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
	@ViewChild("xAxisOverlap", { static: true } )
	private xAxisOverlap: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxCategoryChartComponent
    private _highestGrossingMovies: HighestGrossingMovies = null;
    public get highestGrossingMovies(): HighestGrossingMovies {
        if (this._highestGrossingMovies == null)
        {
            this._highestGrossingMovies = new HighestGrossingMovies();
        }
        return this._highestGrossingMovies;
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
          propertyPath="XAxisOverlap"
          name="XAxisOverlap"
          #xAxisOverlap
          label="X Axis - Overlap"
          shouldOverrideDefaultEditor="true"
          valueType="Slider"
          min="0"
          max="1"
          step="0.1"
          primitiveValue="0">
          </igx-property-editor-property-description>
      </igx-property-editor-panel>
  </div>
  <div class="legend-title">
      Highest Grossing Movie Franchises
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
      [dataSource]="highestGrossingMovies"
      chartType="Column"
      crosshairsSnapToData="true"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false"
      xAxisInterval="1"
      xAxisOverlap="1">
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

## Additional Resources

You can find more information about related chart features in these topics:

- [Axis Gridlines](chart-axis-gridlines.md)
- [Axis Layout](chart-axis-layouts.md)

## API References

The following is a list of API members mentioned in the above sections:

| [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)                                                                                                                                                                                                     | [`IgxFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html)           | [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Axes` ➔ [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ [`maximumValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericaxisbasecomponent.html#maximumValue)   | [`yAxisMaximumValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#yAxisMaximumValue)   | [`yAxisMaximumValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#yAxisMaximumValue)   |
| `Axes` ➔ [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ [`minimumValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericaxisbasecomponent.html#minimumValue)   | [`yAxisMinimumValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#yAxisMinimumValue)   | [`yAxisMinimumValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#yAxisMinimumValue)   |
| `Axes` ➔ [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ [`isLogarithmic`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericaxisbasecomponent.html#isLogarithmic) | [`yAxisIsLogarithmic`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#yAxisIsLogarithmic) | [`yAxisIsLogarithmic`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#yAxisIsLogarithmic) |
| `Axes` ➔ [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ [`logarithmBase`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericaxisbasecomponent.html#logarithmBase) | [`yAxisLogarithmBase`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#yAxisLogarithmBase) | [`yAxisLogarithmBase`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#yAxisLogarithmBase) |
| `Axes` ➔ [`IgxCategoryXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryxaxiscomponent.html) ➔ [`gap`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryaxisbasecomponent.html#gap)                  | None                                                                                                                                                                                       | [`xAxisGap`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#xAxisGap)                     |
| `Axes` ➔ [`IgxCategoryXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryxaxiscomponent.html) ➔ [`overlap`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryaxisbasecomponent.html#overlap)          | None                                                                                                                                                                                       | [`xAxisOverlap`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#xAxisOverlap)             |
| `Axes` ➔ [`IgxTimeXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimexaxiscomponent.html)                                                                                                                                                                                            | [`xAxisMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html#xAxisMode)                  | None                                                                                                                                                                                       |
| `Axes` ➔ [`IgxPercentChangeYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpercentchangeyaxiscomponent.html)                                                                                                                                                                          | [`yAxisMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html#yAxisMode)                  | None                                                                                                                                                                                       |
| `Axes` ➔ [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ `labelSettings.angle`                                                                                                                                                              | [`yAxisLabelAngle`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisLabelAngle)             | [`yAxisLabelAngle`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisLabelAngle)             |
| `Axes` ➔ [`IgxNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) ➔ `labelSettings.angle`                                                                                                                                                              | [`xAxisLabelAngle`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisLabelAngle)             | [`xAxisLabelAngle`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisLabelAngle)             |
| `Axes` ➔ [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ `labelSettings.textColor`                                                                                                                                                          | `YAxisLabelForeground`                                                                                                                                                                     | `YAxisLabelForeground`                                                                                                                                                                     |
| `Axes` ➔ [`IgxNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) ➔ `labelSettings.textColor`                                                                                                                                                          | `XAxisLabelForeground`                                                                                                                                                                     | `XAxisLabelForeground`                                                                                                                                                                     |
| `Axes` ➔ [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ `labelSettings.visibility`                                                                                                                                                         | [`yAxisLabelVisibility`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisLabelVisibility)   | [`yAxisLabelVisibility`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisLabelVisibility)   |
| `Axes` ➔ [`IgxNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) ➔ `labelSettings.visibility`                                                                                                                                                         | [`xAxisLabelVisibility`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisLabelVisibility)   | [`xAxisLabelVisibility`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisLabelVisibility)   |
