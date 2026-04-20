---
title: Angular Chart Highlight Filter | Data Visualization | Infragistics
_description: Infragistics' Angular Chart Highlight Filter
_keywords: Angular Charts, Highlighting, Filtering, Infragistics
_license: commercial
mentionedTypes: ["CategoryChart", "XamDataChart", "Series", "HighlightedValuesDisplayMode"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Highlight Filter
_premium: true
---

# Angular Chart Highlight Filter

The Ignite UI for Angular Chart components support a data highlighting overlay that can enhance the visualization of the series plotted in those charts by allowing you to view a subset of the data plotted. When enabled, this will highlight a subset of data while showing the total set with a reduced opacity in the case of column and area series types, and a dashed line in the case of line series types. This can help you to visualize things like target values versus actual values with your data set. This feature is demonstrated in the following example:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxPropertyEditorPanelModule } from 'igniteui-angular-layouts';
import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartInteractivityModule } from 'igniteui-angular-charts';

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
    IgxDataChartCoreModule,
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
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, DataChartCoreDescriptionModule, DataChartCategoryDescriptionModule, DataChartInteractivityDescriptionModule } from 'igniteui-angular-core';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';
import { CountryRenewableElectricityFilteredItem, CountryRenewableElectricityFiltered } from './CountryRenewableElectricityFiltered';
import { IgxPropertyEditorPanelComponent, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
import { IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxColumnSeriesComponent } from 'igniteui-angular-charts';

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
	@ViewChild("highlightedValuesDisplayModeEditor", { static: true } )
	private highlightedValuesDisplayModeEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxDataChartComponent
	@ViewChild("xAxis", { static: true } )
	private xAxis: IgxCategoryXAxisComponent
	@ViewChild("yAxis", { static: true } )
	private yAxis: IgxNumericYAxisComponent
	@ViewChild("columnSeries1", { static: true } )
	private columnSeries1: IgxColumnSeriesComponent
	@ViewChild("columnSeries2", { static: true } )
	private columnSeries2: IgxColumnSeriesComponent
	@ViewChild("columnSeries3", { static: true } )
	private columnSeries3: IgxColumnSeriesComponent
    private _countryRenewableElectricity: CountryRenewableElectricity = null;
    public get countryRenewableElectricity(): CountryRenewableElectricity {
        if (this._countryRenewableElectricity == null)
        {
            this._countryRenewableElectricity = new CountryRenewableElectricity();
        }
        return this._countryRenewableElectricity;
    }

    private _countryRenewableElectricityFiltered: CountryRenewableElectricityFiltered = null;
    public get countryRenewableElectricityFiltered(): CountryRenewableElectricityFiltered {
        if (this._countryRenewableElectricityFiltered == null)
        {
            this._countryRenewableElectricityFiltered = new CountryRenewableElectricityFiltered();
        }
        return this._countryRenewableElectricityFiltered;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            DataChartCoreDescriptionModule.register(context);
            DataChartCategoryDescriptionModule.register(context);
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
          propertyPath="HighlightedValuesDisplayMode"
          name="HighlightedValuesDisplayModeEditor"
          #highlightedValuesDisplayModeEditor
          label="Highlight Display Mode: "
          primitiveValue="Hidden">
          </igx-property-editor-property-description>
      </igx-property-editor-panel>
  </div>
  <div class="container fill">
      <igx-data-chart
      shouldAutoExpandMarginForInitialLabels="true"
      computedPlotAreaMarginMode="Series"
      name="chart"
      #chart
      highlightedValuesDisplayMode="Hidden">
          <igx-category-x-axis
          name="xAxis"
          #xAxis
          [dataSource]="countryRenewableElectricity"
          label="year">
          </igx-category-x-axis>
          <igx-numeric-y-axis
          name="yAxis"
          #yAxis>
          </igx-numeric-y-axis>
          <igx-column-series
          name="ColumnSeries1"
          #columnSeries1
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          [dataSource]="countryRenewableElectricity"
          valueMemberPath="europe"
          [highlightedDataSource]="countryRenewableElectricityFiltered">
          </igx-column-series>
          <igx-column-series
          name="ColumnSeries2"
          #columnSeries2
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          [dataSource]="countryRenewableElectricity"
          valueMemberPath="china"
          [highlightedDataSource]="countryRenewableElectricityFiltered">
          </igx-column-series>
          <igx-column-series
          name="ColumnSeries3"
          #columnSeries3
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          [dataSource]="countryRenewableElectricity"
          valueMemberPath="america"
          [highlightedDataSource]="countryRenewableElectricityFiltered">
          </igx-column-series>
      </igx-data-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

Note that data highlighting feature is supported by the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) and [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html), but it is configured in different ways in those controls due to the nature of how those controls work. One thing remains constant with this feature though, in that you need to set the [`highlightedValuesDisplayMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightedValuesDisplayMode) property to `Overlay` if you want to see the highlight. The following will explain the different configurations for the highlight filter feature.

## Using Highlight Filter with DataChart

In the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html), much of the highlight filter API happens on the series themselves, mainly by setting the [`highlightedDataSource`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightedDataSource) property to a collection representing a subset of the data you want to highlight. The count of the items in the [`highlightedDataSource`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightedDataSource) needs to match the count of the data bound to the `ItemsSource` of the series that you are looking to highlight, and in the case of category series, it will use the `ValueMemberPath` that you have defined as the highlight path by default. The sample at the top of this page uses the [`highlightedDataSource`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightedDataSource) in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) to show the overlay.

In the case that the schema does not match between the [`highlightedDataSource`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightedDataSource) and the `ItemsSource` of the series, you can configure this using the `HighlightedValueMemberPath` property on the series. Additionally, if you would like to use the `ItemsSource` of the series itself as the highlight source and have a path on your data item that represents the subset, you can do this. This is done by simply setting the `HighlightedValueMemberPath` property to that path and not providing a [`highlightedDataSource`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightedDataSource).

The reduced opacity of the column and area series types is configurable by setting the [`highlightedValuesFadeOpacity`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#highlightedValuesFadeOpacity) property on the series. You can also set the [`highlightedValuesDisplayMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightedValuesDisplayMode) property to `Hidden` if you do not wish to see the overlay at all.

The part of the series shown by the highlight filter will be represented in the legend and tooltip layers of the chart separately. You can configure the title that this is given in the tooltip and legend by setting the [`highlightedTitleSuffix`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#highlightedTitleSuffix). This will append the value that you provide to the end of the [`chartTitle`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#chartTitle) of the series.

If the `DataLegend` or [`IgxDataToolTipLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatatooltiplayercomponent.html) is used then the highlighted series will appear grouped. This can be managed by setting the [`highlightedValuesDataLegendGroup`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#highlightedValuesDataLegendGroup) property on the series to categorize them appropriately.

The following example demonstrates the usage of the data legend grouping and highlighting overlay feature within the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control using the [`highlightedValuesDataLegendGroup`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#highlightedValuesDataLegendGroup):

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxLegendModule, IgxNumberAbbreviatorModule, IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartInteractivityModule, IgxDataLegendModule, IgxDataChartAnnotationModule } from 'igniteui-angular-charts';

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
    IgxNumberAbbreviatorModule,
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxDataChartInteractivityModule,
    IgxDataLegendModule,
    IgxDataChartAnnotationModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, LegendDescriptionModule, NumberAbbreviatorDescriptionModule, DataChartCoreDescriptionModule, DataChartCategoryDescriptionModule, DataChartInteractivityDescriptionModule, DataLegendDescriptionModule, DataChartAnnotationDescriptionModule } from 'igniteui-angular-core';
import { OlympicMedalsTopCountriesWithTotalsItem, OlympicMedalsTopCountriesWithTotals } from './OlympicMedalsTopCountriesWithTotals';
import { IgxDataLegendComponent, IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxColumnSeriesComponent } from 'igniteui-angular-charts';

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
	@ViewChild("chart", { static: true } )
	private chart: IgxDataChartComponent
	@ViewChild("xAxis", { static: true } )
	private xAxis: IgxCategoryXAxisComponent
	@ViewChild("yAxis", { static: true } )
	private yAxis: IgxNumericYAxisComponent
	@ViewChild("columnSeries1", { static: true } )
	private columnSeries1: IgxColumnSeriesComponent
	@ViewChild("columnSeries2", { static: true } )
	private columnSeries2: IgxColumnSeriesComponent
	@ViewChild("columnSeries3", { static: true } )
	private columnSeries3: IgxColumnSeriesComponent
    private _olympicMedalsTopCountriesWithTotals: OlympicMedalsTopCountriesWithTotals = null;
    public get olympicMedalsTopCountriesWithTotals(): OlympicMedalsTopCountriesWithTotals {
        if (this._olympicMedalsTopCountriesWithTotals == null)
        {
            this._olympicMedalsTopCountriesWithTotals = new OlympicMedalsTopCountriesWithTotals();
        }
        return this._olympicMedalsTopCountriesWithTotals;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            LegendDescriptionModule.register(context);
            NumberAbbreviatorDescriptionModule.register(context);
            DataChartCoreDescriptionModule.register(context);
            DataChartCategoryDescriptionModule.register(context);
            DataChartInteractivityDescriptionModule.register(context);
            DataLegendDescriptionModule.register(context);
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

}
```
```html
<div class="container vertical sample">
  <div class="legend">
      <igx-data-legend
      name="legend"
      #legend
      [target]="chart"
      groupRowVisible="true">
      </igx-data-legend>
  </div>
  <div class="container fill">
      <igx-data-chart
      shouldAutoExpandMarginForInitialLabels="true"
      computedPlotAreaMarginMode="Series"
      name="chart"
      #chart
      highlightedValuesDisplayMode="Overlay">
          <igx-category-x-axis
          name="xAxis"
          #xAxis
          [dataSource]="olympicMedalsTopCountriesWithTotals"
          label="year">
          </igx-category-x-axis>
          <igx-numeric-y-axis
          name="yAxis"
          #yAxis>
          </igx-numeric-y-axis>
          <igx-column-series
          name="ColumnSeries1"
          #columnSeries1
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          [dataSource]="olympicMedalsTopCountriesWithTotals"
          title="America"
          valueMemberPath="america"
          dataLegendGroup="Olympic Medals"
          highlightedValuesDataLegendGroup="Gold Medals"
          highlightedValueMemberPath="americaGold"
          highlightedTitleSuffix="">
          </igx-column-series>
          <igx-column-series
          name="ColumnSeries2"
          #columnSeries2
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          [dataSource]="olympicMedalsTopCountriesWithTotals"
          title="China"
          valueMemberPath="china"
          dataLegendGroup="Olympic Medals"
          highlightedValuesDataLegendGroup="Gold Medals"
          highlightedValueMemberPath="chinaGold"
          highlightedTitleSuffix="">
          </igx-column-series>
          <igx-column-series
          name="ColumnSeries3"
          #columnSeries3
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          [dataSource]="olympicMedalsTopCountriesWithTotals"
          title="Russia"
          valueMemberPath="russia"
          dataLegendGroup="Olympic Medals"
          highlightedValuesDataLegendGroup="Gold Medals"
          highlightedValueMemberPath="russiaGold"
          highlightedTitleSuffix="">
          </igx-column-series>
      </igx-data-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

The following example demonstrates the usage of the data legend grouping and highlighting overlay feature within the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control using the [`highlightedValuesDataLegendGroup`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#highlightedValuesDataLegendGroup):

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxPropertyEditorPanelModule } from 'igniteui-angular-layouts';
import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartInteractivityModule, IgxDataChartAnnotationModule } from 'igniteui-angular-charts';

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
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
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
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, DataChartCoreDescriptionModule, DataChartCategoryDescriptionModule, DataChartInteractivityDescriptionModule, DataChartAnnotationDescriptionModule } from 'igniteui-angular-core';
import { OlympicMedalsTopCountriesWithTotalsItem, OlympicMedalsTopCountriesWithTotals } from './OlympicMedalsTopCountriesWithTotals';
import { IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxColumnSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	@ViewChild("columnSeries1", { static: true } )
	private columnSeries1: IgxColumnSeriesComponent
	@ViewChild("columnSeries2", { static: true } )
	private columnSeries2: IgxColumnSeriesComponent
	@ViewChild("columnSeries3", { static: true } )
	private columnSeries3: IgxColumnSeriesComponent
	@ViewChild("dataToolTipLayer", { static: true } )
	private dataToolTipLayer: IgxDataToolTipLayerComponent
    private _olympicMedalsTopCountriesWithTotals: OlympicMedalsTopCountriesWithTotals = null;
    public get olympicMedalsTopCountriesWithTotals(): OlympicMedalsTopCountriesWithTotals {
        if (this._olympicMedalsTopCountriesWithTotals == null)
        {
            this._olympicMedalsTopCountriesWithTotals = new OlympicMedalsTopCountriesWithTotals();
        }
        return this._olympicMedalsTopCountriesWithTotals;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            DataChartCoreDescriptionModule.register(context);
            DataChartCategoryDescriptionModule.register(context);
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

}
```
```html
<div class="container vertical sample">
  <div class="container fill">
      <igx-data-chart
      shouldAutoExpandMarginForInitialLabels="true"
      computedPlotAreaMarginMode="Series"
      name="chart"
      #chart
      highlightedValuesDisplayMode="Overlay">
          <igx-category-x-axis
          name="xAxis"
          #xAxis
          [dataSource]="olympicMedalsTopCountriesWithTotals"
          label="year">
          </igx-category-x-axis>
          <igx-numeric-y-axis
          name="yAxis"
          #yAxis>
          </igx-numeric-y-axis>
          <igx-column-series
          name="ColumnSeries1"
          #columnSeries1
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          [dataSource]="olympicMedalsTopCountriesWithTotals"
          title="America"
          valueMemberPath="america"
          dataLegendGroup="Olympic Medals"
          highlightedValuesDataLegendGroup="Gold Medals"
          highlightedValueMemberPath="americaGold"
          highlightedTitleSuffix="">
          </igx-column-series>
          <igx-column-series
          name="ColumnSeries2"
          #columnSeries2
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          [dataSource]="olympicMedalsTopCountriesWithTotals"
          title="China"
          valueMemberPath="china"
          dataLegendGroup="Olympic Medals"
          highlightedValuesDataLegendGroup="Gold Medals"
          highlightedValueMemberPath="chinaGold"
          highlightedTitleSuffix="">
          </igx-column-series>
          <igx-column-series
          name="ColumnSeries3"
          #columnSeries3
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          [dataSource]="olympicMedalsTopCountriesWithTotals"
          title="Russia"
          valueMemberPath="russia"
          dataLegendGroup="Olympic Medals"
          highlightedValuesDataLegendGroup="Gold Medals"
          highlightedValueMemberPath="russiaGold"
          highlightedTitleSuffix="">
          </igx-column-series>
          <igx-data-tool-tip-layer
          name="dataToolTipLayer"
          #dataToolTipLayer
          groupRowVisible="true"
          groupingMode="Grouped">
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

The following example demonstrates the usage of the data highlighting overlay feature within the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control using the `HighlightedValueMemberPath`:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxPropertyEditorPanelModule } from 'igniteui-angular-layouts';
import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartInteractivityModule } from 'igniteui-angular-charts';

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
    IgxDataChartCoreModule,
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
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, DataChartCoreDescriptionModule, DataChartCategoryDescriptionModule, DataChartInteractivityDescriptionModule } from 'igniteui-angular-core';
import { OlympicMedalsTopCountriesWithTotalsItem, OlympicMedalsTopCountriesWithTotals } from './OlympicMedalsTopCountriesWithTotals';
import { IgxPropertyEditorPanelComponent, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
import { IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxColumnSeriesComponent } from 'igniteui-angular-charts';

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
	@ViewChild("highlightedValuesDisplayModeEditor", { static: true } )
	private highlightedValuesDisplayModeEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxDataChartComponent
	@ViewChild("xAxis", { static: true } )
	private xAxis: IgxCategoryXAxisComponent
	@ViewChild("yAxis", { static: true } )
	private yAxis: IgxNumericYAxisComponent
	@ViewChild("columnSeries1", { static: true } )
	private columnSeries1: IgxColumnSeriesComponent
    private _olympicMedalsTopCountriesWithTotals: OlympicMedalsTopCountriesWithTotals = null;
    public get olympicMedalsTopCountriesWithTotals(): OlympicMedalsTopCountriesWithTotals {
        if (this._olympicMedalsTopCountriesWithTotals == null)
        {
            this._olympicMedalsTopCountriesWithTotals = new OlympicMedalsTopCountriesWithTotals();
        }
        return this._olympicMedalsTopCountriesWithTotals;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            DataChartCoreDescriptionModule.register(context);
            DataChartCategoryDescriptionModule.register(context);
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
          propertyPath="HighlightedValuesDisplayMode"
          name="HighlightedValuesDisplayModeEditor"
          #highlightedValuesDisplayModeEditor
          label="Highlight Display Mode: "
          primitiveValue="Hidden">
          </igx-property-editor-property-description>
      </igx-property-editor-panel>
  </div>
  <div class="container fill">
      <igx-data-chart
      shouldAutoExpandMarginForInitialLabels="true"
      computedPlotAreaMarginMode="Series"
      highlightedValuesDisplayMode="Hidden"
      name="chart"
      #chart>
          <igx-category-x-axis
          name="xAxis"
          #xAxis
          [dataSource]="olympicMedalsTopCountriesWithTotals"
          label="year">
          </igx-category-x-axis>
          <igx-numeric-y-axis
          name="yAxis"
          #yAxis
          minimumValue="0"
          maximumValue="400">
          </igx-numeric-y-axis>
          <igx-column-series
          name="ColumnSeries1"
          #columnSeries1
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          [dataSource]="olympicMedalsTopCountriesWithTotals"
          valueMemberPath="total"
          highlightedValueMemberPath="america">
          </igx-column-series>
      </igx-data-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

## Using Highlight Filter in CategoryChart

The [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) highlight filter happens on the chart by setting the [`initialHighlightFilter`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialHighlightFilter) property. Since the [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) takes all of the properties on your underlying data item into account by default, you will need to define the [`initialGroups`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialGroups) on the chart as well so that the data can be grouped and aggregated in a way that you can have a subset of the data to filter on. You can set the [`initialGroups`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialGroups) to a value path in your underlying data item to group by a path that has duplicate values.

<!-- Unsure of this part. Need to review -->

<!-- ????? The `InitialHighlightFilter` is done using OData filter query syntax. The syntax for this is an abbreviation of the filter operator. For example, if you wanted to have an InitialHighlightFilter of "Month not equals January" it would be represented as "Month ne 'January'"-->

Similar to the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html), the [`highlightedValuesDisplayMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightedValuesDisplayMode) property is also exposed on the [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html). In the case that you do not want to see the overlay, you can set this property to `Hidden`.

The following example demonstrates the usage of the data highlighting overlay feature within the [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) control:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxPropertyEditorPanelModule } from 'igniteui-angular-layouts';
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
    IgxPropertyEditorPanelModule,
    IgxCategoryChartModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, CategoryChartDescriptionModule } from 'igniteui-angular-core';
import { SalesDataItem, SalesData } from './SalesData';
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

	@ViewChild("propertyEditor", { static: true } )
	private propertyEditor: IgxPropertyEditorPanelComponent
	@ViewChild("highlightedValuesDisplayModeEditor", { static: true } )
	private highlightedValuesDisplayModeEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxCategoryChartComponent
    private _salesData: SalesData = null;
    public get salesData(): SalesData {
        if (this._salesData == null)
        {
            this._salesData = new SalesData();
        }
        return this._salesData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
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
      name="PropertyEditor"
      #propertyEditor
      [componentRenderer]="renderer"
      [target]="chart"
      descriptionType="CategoryChart"
      isHorizontal="true"
      isWrappingEnabled="true">
          <igx-property-editor-property-description
          propertyPath="HighlightedValuesDisplayMode"
          name="highlightedValuesDisplayModeEditor"
          #highlightedValuesDisplayModeEditor
          label="Highlight Display Mode: "
          primitiveValue="Hidden">
          </igx-property-editor-property-description>
      </igx-property-editor-panel>
  </div>
  <div class="legend-title">
      Sales Filtered by Country
  </div>
  <div class="container fill">
      <igx-category-chart
      name="chart"
      #chart
      chartType="Column"
      [dataSource]="salesData"
      initialGroups="Month"
      initialHighlightFilter="Country ne 'UK'"
      highlightedValuesDisplayMode="Hidden">
      </igx-category-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

<!-- TODO add new section that talks about how this feature also applies to Range, Financial series and the HighlightedValueMemberPath property corresponds to:
HighlightedHighMemberPath and HighlightedLowMemberPath in Range Series
HighlightedHighMemberPath, HighlightedLowMemberPath, HighlightedOpenMemberPath, HighlightedCloseMemberPath in Financial Series-->

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Highlighting](chart-highlighting.md)
- [Chart Data Tooltip](chart-data-tooltip.md)
- [Chart Data Aggregations](chart-data-aggregations.md)

## API References

The following is a list of API members mentioned in the above sections:

| [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) Properties                    | [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) Properties                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`highlightedDataSource`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightedDataSource)               | [`highlightedDataSource`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightedDataSource)          |
| [`highlightedTitleSuffix`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#highlightedTitleSuffix)                  | [`highlightedTitleSuffix`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#highlightedTitleSuffix)             |
| `CategoryChart.HighlightedValueMemberPath`                                                                                                                                                                   | `Series.HighlightedValueMemberPath`                                                                                                                                                                     |
| [`highlightedValuesDisplayMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightedValuesDisplayMode) | [`highlightedValuesDisplayMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#highlightedValuesDisplayMode) |
| [`highlightedValuesFadeOpacity`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#highlightedValuesFadeOpacity)      | [`highlightedValuesFadeOpacity`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#highlightedValuesFadeOpacity) |
| [`highlightedValuesDisplayMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightedValuesDisplayMode) | [`highlightedValuesDisplayMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#highlightedValuesDisplayMode) |
| [`initialHighlightFilter`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialHighlightFilter)             |                                                                                                                                                                                                         |
| [`initialGroups`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialGroups)                               |                                                                                                                                                                                                         |
