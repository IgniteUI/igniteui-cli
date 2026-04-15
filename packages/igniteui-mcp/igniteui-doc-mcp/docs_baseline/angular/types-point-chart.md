---
title: Angular Point Chart | Data Visualization | Infragistics
_description: Infragistics' Angular Point Chart
_keywords: Angular Charts, Point Chart, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "CategoryChartType", "Legend", "Series"]
namespace: Infragistics.Controls.Charts
_tocName: Point Chart
_premium: true
---

# Angular Point Chart

The Ignite UI for Angular Point Chart renders a collection of points. Values are represented on the y-axis (labels on the left side) and categories are displayed on the x-axis (bottom labels). These charts emphasize the amount of change over a period of time or compare multiple items as well as the relationship of parts of a whole by displaying the total of the plotted values.

## Angular Point Chart Example

You can create the Angular Point Chart in the [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) control by binding your data to `ItemsSource` property and setting [`chartType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#chartType) property to **Point** enum, as shown in the example below.

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
      chartType="Point"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false"
      [dataSource]="countryRenewableElectricity"
      [legend]="legend"
      yAxisTitle="TWh"
      yAxisTitleLeftMargin="10"
      yAxisTitleRightMargin="5"
      yAxisLabelLeftMargin="0"
      computedPlotAreaMarginMode="Series"
      crosshairsSnapToData="true">
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

## Angular Point Chart with Single Series

In the following example, the Angular Point Chart plots a single data source by automatically selecting numeric data column for y-axis and non-numeric data column for x-axis.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxCategoryChartModule } from 'igniteui-angular-charts';

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
import { IgxCategoryChartComponent } from 'igniteui-angular-charts';

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
  <div class="container fill">
      <igx-category-chart
      name="chart"
      #chart
      chartType="Point"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false"
      [dataSource]="countryRenewableElectricity"
      includedProperties="year, europe"
      yAxisTitle="TWh"
      yAxisTitleLeftMargin="10"
      yAxisTitleRightMargin="5"
      yAxisLabelLeftMargin="0"
      computedPlotAreaMarginMode="Series"
      crosshairsSnapToData="true">
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

## Angular Point Chart with Multiple Series

Since the Angular Point Chart allows you to combine multiple series and compare or see how they change over time, let’s see how easy it is to achieve this. All we need to do is bind to a data source containing the data for China and the USA, and the point chart will automatically update to fit the additional data.

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
      chartType="Point"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false"
      [dataSource]="countryRenewableElectricity"
      [legend]="legend"
      yAxisTitle="TWh"
      yAxisTitleLeftMargin="10"
      yAxisTitleRightMargin="5"
      yAxisLabelLeftMargin="0"
      computedPlotAreaMarginMode="Series"
      crosshairsSnapToData="true">
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

## Angular Point Chart Styling

Once the Angular Point Chart is set up, we may want to make some further styling customizations such as change the markers and its outlines, brushes and thickness.

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
      chartType="Point"
      [legend]="legend"
      markerOutlines="rgba(140, 231, 217, 1) rgba(238, 88, 121, 1) rgba(115, 86, 86, 1)"
      markerBrushes="white"
      brushes="rgba(140, 231, 217, 1) rgba(238, 88, 121, 1) rgba(115, 86, 86, 1)"
      outlines="rgba(140, 231, 217, 1) rgba(238, 88, 121, 1) rgba(115, 86, 86, 1)"
      yAxisTitle="TWh"
      yAxisTitleLeftMargin="10"
      yAxisLabelLeftMargin="0"
      thickness="2"
      computedPlotAreaMarginMode="Series"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false"
      crosshairsSnapToData="true">
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

## Advanced Types of Point Charts

You can create more advanced types of Angular Point Charts using the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control instead of [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) control by following these topics:

- [Scatter Bubble Chart](bubble-chart.md)
- [Scatter Marker Chart](scatter-chart.md#angular-scatter-marker-chart)
- [Scatter HD Chart](scatter-chart.md#angular-scatter-high-density-chart)
- [Polar Marker Chart](polar-chart.md#angular-polar-marker-chart)

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Performance](../features/chart-performance.md)
- [Chart Markers](../features/chart-markers.md)

## API References

The following table lists API members mentioned in the above sections:

- [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)
- [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)
- [`chartType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#chartType)
- [`markerTypes`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#markerTypes)
- [`markerOutlines`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#markerOutlines)
- [`markerBrushes`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#markerBrushes)
- [`markerThickness`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#markerThickness)
