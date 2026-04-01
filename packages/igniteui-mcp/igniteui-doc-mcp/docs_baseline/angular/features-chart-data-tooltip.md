---
title: Angular Chart Data Tooltip | Data Visualization Tools | Infragistics
_description: Use Infragistics Ignite UI for Angular chart with the data tooltip layer!
_keywords: Angular charts, chart legend, legend, legend types, Ignite UI for Angular, Infragistics
_license: commercial
mentionedTypes: ["XamDataChart", "Legend", "CategoryChart", "FinancialChart", "XamDataLegend", "DataToolTipLayer"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Data Tooltip
_premium: true
---

# Angular Chart Data Tooltip

In Ignite UI for Angular, the **DataToolTip** displays values and titles of series as well as legend badges of series in a tooltip. In addition, it provides many configuration properties of the [`IgxDataLegendComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html) for filtering series rows and values columns, styling, and formatting values. This tooltip type updates while moving the mouse inside of the plot area of the [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html), [`IgxFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html), and [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) components.

## Angular Data Tooltip Properties

All properties of [`IgxDataToolTipLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatatooltiplayercomponent.html) are prefixed with **DataToolTip** and exposed on API of [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) and [`IgxFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) components. However, you will need to create an instance of [`IgxDataToolTipLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatatooltiplayercomponent.html) and add it to series collection of [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) component if you want to use it with Radial Charts, Polar Charts, Scatter Charts.

## Angular Data Tooltip Elements

The **DataToolTip** displays content using a set of three types of rows and four types of columns.

### Angular Data Tooltip Rows

The rows of the **DataToolTip** include the header row, series row(s), and the summary row.

The header row displays the axis label of the point that is hovered, and can be changed using the [`dataToolTipHeaderText`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipHeaderText) property.

The series row can actually be a set of rows corresponding to each series plotted in the chart. These rows will display the legend badge, series title, actual/abbreviated value of the the series, and abbreviation symbol and unit, if specified.

Finally, there is a summary row that displays the total of all series values. The default summary title can be changed using the [`dataToolTipSummaryTitleText`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipSummaryTitleText) property of the legend. Also, you can use the [`dataToolTipSummaryType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipSummaryType) property to customize whether you display the Total, Min, Max, or Average of series values in the summary row.

The following example demonstrates the data tooltip with a summary applied:

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
import { HighestGrossingMoviesItem, HighestGrossingMovies } from './HighestGrossingMovies';
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
    private _highestGrossingMovies: HighestGrossingMovies = null;
    public get highestGrossingMovies(): HighestGrossingMovies {
        if (this._highestGrossingMovies == null)
        {
            this._highestGrossingMovies = new HighestGrossingMovies();
        }
        return this._highestGrossingMovies;
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
  <div class="container fill">
      <igx-category-chart
      name="chart"
      #chart
      chartType="Column"
      [dataSource]="highestGrossingMovies"
      toolTipType="Data"
      xAxisInterval="1"
      yAxisTitle="Billions of U.S. Dollars"
      yAxisTitleLeftMargin="10"
      yAxisTitleRightMargin="5"
      yAxisLabelLeftMargin="0"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false"
      crosshairsDisplayMode="None"
      isCategoryHighlightingEnabled="true"
      highlightingMode="FadeOthersSpecific"
      highlightingBehavior="NearestItemsAndSeries">
      </igx-category-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


### Angular Data Tooltip Columns

The columns of the [`IgxDataToolTipLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatatooltiplayercomponent.html) include the title, label, value, and units columns. Each series in the chart can have multiple columns for label, value, and units depending on the [`dataToolTipIncludedColumns`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipIncludedColumns) or [`dataToolTipExcludedColumns`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipExcludedColumns) collections of the chart.

The title column displays legend badges and series titles, which come from the [`chartTitle`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#chartTitle) property of the different [`IgxSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html) plotted in the chart.

The label column displays the name or abbreviation of the different property paths in the [`dataToolTipIncludedColumns`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipIncludedColumns) or [`dataToolTipExcludedColumns`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipExcludedColumns) collections of the tooltip.

The value column displays series values as abbreviated text which can be formatted using the [`dataToolTipValueFormatAbbreviation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueFormatAbbreviation) property to apply the same abbreviation for all numbers by setting this property to `Auto` or `Shared`. Alternatively, a user can select other abbreviations such as `Independent`, `Kilo`, `Million`, etc. Precision of abbreviated values is controlled using the [`dataToolTipValueFormatMinFractions`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueFormatMinFractions) and [`dataToolTipValueFormatMaxFractions`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueFormatMaxFractions) for minimum and maximum digits, respectively.

The units column displays an abbreviation symbol and/or unit text, which can be set either on the **DataToolTip** by setting the [`dataToolTipUnitsText`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipUnitsText) for all columns or using the following properties on each series in the chart:

- Category Series (e.g. ColumnSeries)
  - ValueMemberAsLegendUnit="K"
- Financial Price Series:
  - OpenMemberAsLegendUnit="K"
  - LowMemberAsLegendUnit="K"
  - HighMemberAsLegendUnit="K"
  - CloseMemberAsLegendUnit="K"
- Range Series:
  - LowMemberAsLegendUnit="K"
  - HighMemberAsLegendUnit="K"
- Radial Series:
  - ValueMemberAsLegendUnit="km"
- Polar Series:
  - RadiusMemberAsLegendUnit="km"
  - AngleMemberAsLegendUnit="degrees"

For the above-listed properties, there are corresponding properties ending with **MemberAsLegendLabel** to determine the text in the label columns mentioned previously.

The columns included in the [`dataToolTipIncludedColumns`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipIncludedColumns) and [`dataToolTipExcludedColumns`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipExcludedColumns) collections generally correspond to the value paths of your underlying data items, but the financial series has the option to include some special ones in addition to the `High`, `Low`, `Open`, and `Close` paths that are required for the financial series to plot correctly. You have the ability to show `TypicalPrice`, `Change`, and `Volume` options within the tooltip.

The following example demonstrates a data tooltip with the added columns of Open, High, Low, Close, and Change:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxFinancialChartModule, IgxDataChartInteractivityModule, IgxDataLegendModule } from 'igniteui-angular-charts';

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
    IgxFinancialChartModule,
    IgxDataChartInteractivityModule,
    IgxDataLegendModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MultipleStocks } from './MultipleStocks';
import { IgxFinancialChartComponent } from 'igniteui-angular-charts';

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
	private chart: IgxFinancialChartComponent
    private _multipleStocks: MultipleStocks = null;
    private _isFetching: boolean = false;
    public get multipleStocks(): MultipleStocks {
        if (this._multipleStocks == null && !this._isFetching)
        {
            this._isFetching = true;
            ( async () => { this._multipleStocks = await (await MultipleStocks.fetch()); this._detector.markForCheck();  })();
        }
        return this._multipleStocks;
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
      <igx-financial-chart
      name="chart"
      #chart
      chartType="Candle"
      isVerticalZoomEnabled="true"
      isHorizontalZoomEnabled="true"
      [dataSource]="multipleStocks"
      toolTipType="Data"
      dataToolTipIncludedColumns="Open, Close, High, Low, Change"
      dataToolTipHeaderFormatTime="None"
      zoomSliderType="None">
      </igx-financial-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## Angular Data Tooltip Grouping for Data Chart

[`dataLegendGroup`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#dataLegendGroup) can be set, on all types of series, to a string that will categorize a group of series in Data Legend. Each group will have its own summary row displayed before another group of series is displayed:
By default, DataLegend will hide names of groups, but you can display group names by setting the [`groupRowVisible`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#groupRowVisible) property to true. [`groupingMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatatooltiplayercomponent.html#groupingMode) should be set to "Grouped" and [`labelDisplayMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#labelDisplayMode) should be set to "Visible" on the Data Tooltip Layer.

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
      #chart>
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
          dataLegendGroup="Medals by Country">
          </igx-column-series>
          <igx-column-series
          name="ColumnSeries2"
          #columnSeries2
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          [dataSource]="olympicMedalsTopCountriesWithTotals"
          title="China"
          valueMemberPath="china"
          dataLegendGroup="Medals by Country">
          </igx-column-series>
          <igx-column-series
          name="ColumnSeries3"
          #columnSeries3
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          [dataSource]="olympicMedalsTopCountriesWithTotals"
          title="Russia"
          valueMemberPath="russia"
          dataLegendGroup="Medals by Country">
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


## Angular Data Tooltip Grouping & Positioning for Category Chart & Financial Chart

You can set [`dataToolTipGroupingMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipGroupingMode) property to either `Grouped` or `Individual` to group content for multiple series into single tooltip or separate content for each series in multiple tooltips. In the `Grouped` mode, you can customize where the tooltip is shown by setting the [`dataToolTipGroupedPositionModeX`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipGroupedPositionModeX) and [`dataToolTipGroupedPositionModeY`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipGroupedPositionModeY) properties. This essentially allows you to customize the horizontal and vertical alignments of the tooltip and whether you want it to track to the closest series points to the mouse position or pin the tooltip to edge of plot area.

The following example demonstrates a data tooltip positioned to the top-right of the chart:

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
	@ViewChild("groupedPositionXEditor", { static: true } )
	private groupedPositionXEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("groupedPositionYEditor", { static: true } )
	private groupedPositionYEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("groupingModeEditor", { static: true } )
	private groupingModeEditor: IgxPropertyEditorPropertyDescriptionComponent
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
      name="PropertyEditor"
      #propertyEditor
      [componentRenderer]="renderer"
      [target]="chart"
      descriptionType="CategoryChart"
      isHorizontal="true"
      isWrappingEnabled="true">
          <igx-property-editor-property-description
          propertyPath="DataToolTipGroupedPositionModeX"
          primitiveValue="PinRight"
          name="GroupedPositionXEditor"
          #groupedPositionXEditor
          label="Grouped X Position: ">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="DataToolTipGroupedPositionModeY"
          primitiveValue="PinTop"
          name="GroupedPositionYEditor"
          #groupedPositionYEditor
          label="Grouped Y Position: ">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="DataToolTipGroupingMode"
          primitiveValue="Grouped"
          name="GroupingModeEditor"
          #groupingModeEditor
          label="Grouping Mode: ">
          </igx-property-editor-property-description>
      </igx-property-editor-panel>
  </div>
  <div class="legend-title">
      Highest Grossing Movie Franchises
  </div>
  <div class="container fill">
      <igx-category-chart
      name="chart"
      #chart
      chartType="Column"
      [dataSource]="highestGrossingMovies"
      toolTipType="Data"
      dataToolTipGroupedPositionModeX="PinRight"
      dataToolTipGroupedPositionModeY="PinTop"
      dataToolTipGroupingMode="Grouped"
      xAxisInterval="1"
      yAxisTitle="Billions of U.S. Dollars"
      yAxisTitleLeftMargin="10"
      yAxisTitleRightMargin="5"
      yAxisLabelLeftMargin="0"
      crosshairsDisplayMode="None">
      </igx-category-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## Angular Data Tooltip Value Formatting

The **DataToolTip** provides automatic abbreviation of large numbers using its [`dataToolTipValueFormatAbbreviation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueFormatAbbreviation) property. This adds a multiplier in the units column such as kilo, million, billion, etc. You can customize the number of fractional digits that are displayed by setting the [`dataToolTipValueFormatMinFractions`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueFormatMinFractions) and [`dataToolTipValueFormatMaxFractions`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueFormatMaxFractions). This will allow you to determine the minimum and maximum number of digits that appear after the decimal point, respectively.

The following example demonstrates a **DataToolTip** with the minimum and maximum fractions set:

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
import { HighestGrossingMoviesItem, HighestGrossingMovies } from './HighestGrossingMovies';
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
    private _highestGrossingMovies: HighestGrossingMovies = null;
    public get highestGrossingMovies(): HighestGrossingMovies {
        if (this._highestGrossingMovies == null)
        {
            this._highestGrossingMovies = new HighestGrossingMovies();
        }
        return this._highestGrossingMovies;
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
  <div class="container fill">
      <igx-category-chart
      name="chart"
      #chart
      chartType="Column"
      [dataSource]="highestGrossingMovies"
      toolTipType="Data"
      dataToolTipUnitsText="B"
      dataToolTipValueFormatMode="Decimal"
      dataToolTipValueFormatMinFractions="2"
      xAxisInterval="1"
      yAxisTitle="Billions of U.S. Dollars"
      yAxisTitleLeftMargin="10"
      yAxisTitleRightMargin="5"
      yAxisLabelLeftMargin="0"
      isCategoryHighlightingEnabled="false"
      crosshairsDisplayMode="None"
      highlightingMode="FadeOthersSpecific"
      highlightingBehavior="NearestItemsAndSeries">
      </igx-category-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## Angular Data Tooltip Value Mode

You can change the default decimal display of values within the **DataToolTip** to be currency by changing the [`dataToolTipValueFormatMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueFormatMode) property of the layer. The **DataToolTip** also exposes the ability to modify the culture of the displayed currency symbol by using its [`dataToolTipValueFormatCulture`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueFormatCulture) property and setting it to its corresponding culture tag. For example, the following sample demonstrates a chart with the [`dataToolTipValueFormatCulture`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueFormatCulture) set to "en-GB":

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxFinancialChartModule, IgxDataChartInteractivityModule, IgxLegendModule } from 'igniteui-angular-charts';

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
    IgxFinancialChartModule,
    IgxDataChartInteractivityModule,
    IgxLegendModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MultipleStocks } from './MultipleStocks';
import { IgxFinancialChartComponent } from 'igniteui-angular-charts';

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
	private chart: IgxFinancialChartComponent
    private _multipleStocks: MultipleStocks = null;
    private _isFetching: boolean = false;
    public get multipleStocks(): MultipleStocks {
        if (this._multipleStocks == null && !this._isFetching)
        {
            this._isFetching = true;
            ( async () => { this._multipleStocks = await (await MultipleStocks.fetch()); this._detector.markForCheck();  })();
        }
        return this._multipleStocks;
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
      <igx-financial-chart
      name="chart"
      #chart
      chartType="Candle"
      toolTipType="Data"
      [dataSource]="multipleStocks"
      dataToolTipIncludedColumns="Close, Change, Value"
      dataToolTipExcludedColumns="High, Low, Open, Volume"
      dataToolTipLabelDisplayMode="Hidden"
      dataToolTipValueFormatMode="Currency"
      dataToolTipValueFormatCulture="en-GB"
      dataToolTipHeaderFormatTime="None"
      zoomSliderType="None">
      </igx-financial-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## Layout Mode

Legend items can be positioned in a vertical or table structure via the [`layoutMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#layoutMode) property. The default value is `Table`, which retains the same look and feel as seen in previous releases.

eg.

<img src="../../../images/general/layout_mode.png" alt="Layout Mode" />

## Angular Data Tooltip Styling

The **DataToolTip** provides properties for styling each type of column. Each of these properties begins with Title, Label, Value, or Units, and you can style the text's color, font, and margin. For example, if you wanted to set the text color of each of these, you would set the [`dataToolTipTitleTextColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipTitleTextColor), [`dataToolTipLabelTextColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipLabelTextColor), [`dataToolTipValueTextColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueTextColor), and [`dataToolTipUnitsTextColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipUnitsTextColor) properties.

The following example demonstrates usage of the styling properties mentioned above:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxFinancialChartModule, IgxDataChartInteractivityModule, IgxDataLegendModule } from 'igniteui-angular-charts';

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
    IgxFinancialChartModule,
    IgxDataChartInteractivityModule,
    IgxDataLegendModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StockGoogle } from './StockGoogle';
import { IgxFinancialChartComponent } from 'igniteui-angular-charts';

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
	private chart: IgxFinancialChartComponent
    private _stockGoogle: StockGoogle = null;
    public get stockGoogle(): StockGoogle {
        if (this._stockGoogle == null)
        {
            this._stockGoogle = new StockGoogle();
        }
        return this._stockGoogle;
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
      <igx-financial-chart
      name="chart"
      #chart
      isVerticalZoomEnabled="true"
      isHorizontalZoomEnabled="true"
      [dataSource]="stockGoogle"
      toolTipType="Data"
      dataToolTipIncludedColumns="Open, Close, High, Low, Change"
      dataToolTipLabelTextColor="rgba(74, 74, 74, 1)"
      dataToolTipUnitsText="K"
      dataToolTipUnitsTextColor="rgba(0, 173, 3, 1)"
      dataToolTipUnitsTextStyle="normal bold 14px Verdana"
      dataToolTipValueFormatMode="Currency"
      dataToolTipValueTextColor="rgba(0, 173, 3, 1)"
      dataToolTipValueTextStyle="normal bold 14px Verdana"
      dataToolTipHeaderFormatTime="None"
      yAxisTitle="Thousands of Dollars ($)"
      zoomSliderType="None">
      </igx-financial-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


Several properties are exposed including grouping portions of the tooltip.

- `GroupTextMargin`
- [`groupTextColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#groupTextColor)
- `GroupTextFontSize`
- `GroupTextFontFamily`
- `GroupTextFontStyle`
- `GroupTextFontStretch`
- `GroupTextFontWeight`
- `HeaderTextMargin`
- [`headerTextColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#headerTextColor)
- `HeaderTextFontSize`
- `HeaderTextFontFamily`
- `HeaderTextFontStyle`
- `HeaderTextFontStretch`
- `HeaderTextFontWeight`

## API References

- [`dataToolTipExcludedColumns`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipExcludedColumns)
- [`dataToolTipGroupedPositionModeX`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipGroupedPositionModeX)
- [`dataToolTipGroupedPositionModeY`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipGroupedPositionModeY)
- [`dataToolTipGroupingMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipGroupingMode)
- [`dataToolTipHeaderText`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipHeaderText)
- [`dataToolTipIncludedColumns`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipIncludedColumns)
- [`dataToolTipLabelTextColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipLabelTextColor)
- [`IgxDataToolTipLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatatooltiplayercomponent.html)
- [`dataToolTipSummaryTitleText`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipSummaryTitleText)
- [`dataToolTipSummaryType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipSummaryType)
- [`dataToolTipTitleTextColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipTitleTextColor)
- [`dataToolTipUnitsTextColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipUnitsTextColor)
- [`dataToolTipUnitsText`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipUnitsText)
- [`dataToolTipValueFormatAbbreviation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueFormatAbbreviation)
- [`dataToolTipValueFormatCulture`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueFormatCulture)
- [`dataToolTipValueFormatMaxFractions`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueFormatMaxFractions)
- [`dataToolTipValueFormatMaxFractions`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueFormatMaxFractions)
- [`dataToolTipValueFormatMinFractions`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueFormatMinFractions)
- [`dataToolTipValueFormatMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueFormatMode)
- [`dataToolTipValueTextColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueTextColor)
- `MemberAsLegendLabel`
