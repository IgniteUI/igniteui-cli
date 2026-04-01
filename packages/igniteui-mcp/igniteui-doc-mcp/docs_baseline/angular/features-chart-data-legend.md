---
title: Angular Chart Data Legend | Data Visualization Tools | Infragistics
_description: Use Infragistics Ignite UI for Angular chart with the data legend!
_keywords: Angular charts, chart legend, legend, legend types, Ignite UI for Angular, Infragistics
_license: commercial
mentionedTypes: ["XamCategoryChart", "XamDataLegend", "Series", "DataLegendSummaryType", "DataAbbreviationMode" ]
namespace: Infragistics.Controls.Charts
_tocName: Chart Data Legend
_premium: true
---

# Angular Data Legend

In Ignite UI for Angular, the [`IgxDataLegendComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html) is highly-customizable version of the [`IgxLegendComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxlegendcomponent.html), that shows values of series and provides many configuration properties for filtering series rows and values columns, styling and formatting values. This legend updates when moving the mouse inside of the plot area of the [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html), [`IgxFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html), and [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html). Also, it has a persistent state that remembers the last hovered point when the user's mouse pointer exits the plot area. It displays this content using a set of three type of rows (header, series, summary) and four types of columns (title, label, value, unit).

## Angular Data Legend Rows

The rows of the [`IgxDataLegendComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html) include the header row, series row(s), and the summary row. The header row displays the axis label of the point that is hovered, and can be changed using the [`headerText`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#headerText) property.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataLegendModule, IgxCategoryChartModule } from 'igniteui-angular-charts';

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
    IgxDataLegendModule,
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
import { IgxDataLegendComponent, IgxCategoryChartComponent } from 'igniteui-angular-charts';

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
  <div class="legend">
      <igx-data-legend
      name="legend"
      #legend
      unitsText="B"
      [target]="chart">
      </igx-data-legend>
  </div>
  <div class="container fill">
      <igx-category-chart
      name="chart"
      #chart
      chartType="Column"
      [dataSource]="highestGrossingMovies"
      xAxisInterval="1"
      yAxisTitle="Billions of U.S. Dollars"
      yAxisTitleLeftMargin="10"
      yAxisTitleRightMargin="5"
      yAxisLabelLeftMargin="0"
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


### Header Row

The header row displays the current label of x-axis when hovering mouse over category series and financial series. You can use [`headerFormatDate`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#headerFormatDate) and [`headerFormatTime`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#headerFormatTime) properties to format date and time in the [`IgxDataLegendComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html) if the x-axis shows dates. For other types of series, the [`IgxDataLegendComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html) does not render the header row.

### Series Row

The series row represents each series plotted in the chart. These rows will display the legend badge, series title, actual/abbreviated value of the the series, and abbreviation symbol or unit of measurement, if specified. You can filter series rows by setting [`includedSeries`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#includedSeries) or [`excludedSeries`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#excludedSeries) properties to a collection of series' indexes (1, 2, 3) or series' titles (Tesla, Microsoft).

### Summary Row

Finally, there is a summary row that displays the total of all series values. The default summary title can be changed using the [`summaryTitleText`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#summaryTitleText) property of the legend. Also, you can use the [`summaryType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#summaryType) property to customize whether you display the [`Total`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_core.datalegendsummarytype.html#Total), [`Min`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_core.datalegendsummarytype.html#Min), [`Max`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_core.datalegendsummarytype.html#Max), or [`Average`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_core.datalegendsummarytype.html#Average) of series values in the summary row.

## Angular Data Legend Columns

The columns of the [`IgxDataLegendComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html) include the series title, label, value of data column, and optional unit associated with the value. Some series in the chart can have multiple columns for label, value, and units. For example, financial price series has **High**, **Low**, **Open**, and **Close** data columns which can be filtered in the [`IgxDataLegendComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html) using the [`includedColumns`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#includedColumns) or [`excludedColumns`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#excludedColumns) properties.

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
import { IgxDataLegendComponent, IgxFinancialChartComponent } from 'igniteui-angular-charts';

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
  <div class="legend">
      <igx-data-legend
      name="legend"
      #legend
      [target]="chart"
      includedColumns="open, close, high, low, change">
      </igx-data-legend>
  </div>
  <div class="container fill">
      <igx-financial-chart
      name="chart"
      #chart
      chartType="Candle"
      isVerticalZoomEnabled="true"
      isHorizontalZoomEnabled="true"
      [dataSource]="multipleStocks"
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


Setting values on the [`includedColumns`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#includedColumns) and [`excludedColumns`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#excludedColumns) properties, depends on type of series and how many data columns they support. For example, you can set [`includedColumns`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#includedColumns) property to a collection of **Open** and **Close** strings and the legend will show only open and close values for stock prices when the chart is plotting financial series. The following table lists all column names that can be use to filter columns in data legend.

|  Type of Series  | Column Names |
| -----------------|-------------- |
| Category Series  | Value |
| Radial Series    | Value |
| Polar Series     | Radius, Angle |
| Bubble Series    | X, Y, Radius |
| Scatter Series   | X, Y |
| Range Series     | High, Low |
| Financial Series | High, Low, Open, Close, Change, TypicalPrice, Volume |

Where the **TypicalPrice** and percentage **Change** of OHLC prices are automatically calculated by financial series so you do not need to include them in your data sources.

### Title Column

The title column displays legend badges and series titles, which come from the [`title`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#title) property of the different [`IgxSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html) plotted in the chart.

### Label Column

The label column displays short name on the left side of value column, e.g. "O" for **Open** stock price. You can toggle visibility of this column using the [`labelDisplayMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#labelDisplayMode) property.

### Value Column

The value column displays values of series as abbreviated text which can be formatted using the [`valueFormatAbbreviation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatAbbreviation) property to apply the same abbreviation for all numbers by setting this property to [`Shared`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_core.dataabbreviationmode.html#Shared). Alternatively, a user can select other abbreviations such as [`Independent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_core.dataabbreviationmode.html#Independent), [`Kilo`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_core.dataabbreviationmode.html#Kilo), [`Million`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_core.dataabbreviationmode.html#Million), etc. Precision of abbreviated values is controlled using the [`valueFormatMinFractions`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatMinFractions) and [`valueFormatMaxFractions`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatMaxFractions) for minimum and maximum digits, respectively.

### Unit Column

The unit column displays an abbreviation symbol on the right side of value column. The unit symbol depends on the [`valueFormatAbbreviation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatAbbreviation) property, e.g. "M" for the [`Million`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_core.dataabbreviationmode.html#Million) abbreviation.

### Customizing Columns

You can customize text displayed in the **Label** and **Unit** columns using  properties that end with **MemberAsLegendLabel** and **MemberAsLegendUnit** on each series. The following table shows some possible customizations of the **Label** and **Unit** columns.

|  Type of Series | Series Properties |
| ------|---- |
| Category Series | ValueMemberAsLegendLabel="$" <br> ValueMemberAsLegendUnit="M" |
| Radial Series | ValueMemberAsLegendLabel="Distance:" <br> ValueMemberAsLegendUnit="KM" |
| Polar Series | RadiusMemberAsLegendLabel="Radius:" <br> RadiusMemberAsLegendUnit="KM" <br> AngleMemberAsLegendLabel="Angle:" <br> AngleMemberAsLegendUnit="°" |
| Range Series | HighMemberAsLegendLabel="H:" <br> HighMemberAsLegendUnit="K" <br> LowMemberAsLegendLabel="L:" <br> LowMemberAsLegendUnit="K" |
| Financial Series | OpenMemberAsLegendLabel="O:" <br> OpenMemberAsLegendUnit="K" <br> HighMemberAsLegendLabel="H:" <br> HighMemberAsLegendUnit="K" <br> LowMemberAsLegendLabel="L:" <br> LowMemberAsLegendUnit="K" <br> CloseMemberAsLegendLabel="C:" <br> CloseMemberAsLegendUnit="K" <br> |

Also, you can use the `UnitText` property on the [`IgxDataLegendComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html) to change text displayed in all Unit columns.

## Layout Mode

Legend items can be positioned in a vertical or table structure via the [`layoutMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#layoutMode) property. The default value is `Table`, which retains the same look and feel as seen in previous releases.

eg.

<img src="../../../images/general/layout_mode.png" alt="Layout Mode" />

## Angular Data Legend Styling

The [`IgxDataLegendComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html) provides properties for styling each type of column. Each of these properties begins with **Title**, **Label**, **Value**, or **Units**. You can style the text's color, font, and margin. For example, if you wanted to set the text color of all columns, you would set the [`titleTextColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#titleTextColor), [`labelTextColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#labelTextColor), [`valueTextColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueTextColor), and [`unitsTextColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#unitsTextColor) properties. The following example demonstrates a utilization of the styling properties mentioned above:

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
import { IgxDataLegendComponent, IgxFinancialChartComponent } from 'igniteui-angular-charts';

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
  <div class="legend">
      <igx-data-legend
      name="legend"
      #legend
      [target]="chart"
      includedColumns="open, close, high, low, change"
      labelTextColor="rgba(74, 74, 74, 1)"
      unitsText="K"
      unitsTextColor="rgba(0, 173, 3, 1)"
      unitsTextStyle="normal bold 14px Verdana"
      valueFormatMode="Currency"
      valueTextColor="rgba(0, 173, 3, 1)"
      valueTextStyle="normal bold 14px Verdana">
      </igx-data-legend>
  </div>
  <div class="container fill">
      <igx-financial-chart
      name="chart"
      #chart
      isVerticalZoomEnabled="true"
      isHorizontalZoomEnabled="true"
      [dataSource]="stockGoogle"
      toolTipType="None"
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


## Angular Data Legend Value Formatting

The [`IgxDataLegendComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html) provides automatic abbreviation of large numbers using its [`valueFormatAbbreviation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatAbbreviation) property. This adds a multiplier in the units column such as kilo, million, billion, etc. You can customize the number of fractional digits that are displayed by setting the [`valueFormatMinFractions`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatMinFractions) and [`valueFormatMaxFractions`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatMaxFractions). This will allow you to determine the minimum and maximum number of digits that appear after the decimal point, respectively.
The following example demonstrates how to use those properties:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataLegendModule, IgxCategoryChartModule } from 'igniteui-angular-charts';

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
    IgxDataLegendModule,
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
import { IgxDataLegendComponent, IgxCategoryChartComponent } from 'igniteui-angular-charts';

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
  <div class="legend">
      <igx-data-legend
      name="legend"
      #legend
      [target]="chart"
      valueFormatMode="Decimal"
      valueFormatMinFractions="1"
      unitsText="B">
      </igx-data-legend>
  </div>
  <div class="container fill">
      <igx-category-chart
      name="chart"
      #chart
      chartType="Column"
      [dataSource]="highestGrossingMovies"
      xAxisInterval="1"
      yAxisTitle="Billions of U.S. Dollars"
      yAxisTitleLeftMargin="10"
      yAxisTitleRightMargin="5"
      yAxisLabelLeftMargin="0"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false"
      toolTipType="None"
      crosshairsDisplayMode="None"
      isCategoryHighlightingEnabled="true">
      </igx-category-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## Angular Data Legend Value Mode

You have the ability to change the default decimal display of values within the [`IgxDataLegendComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html) to a currency by changing the [`valueFormatMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatMode) property. Also, you can change the culture of the displayed currency symbol by setting the [`valueFormatCulture`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatCulture) property a culture tag. For example, the following example data legend with the [`valueFormatCulture`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatCulture) set to "en-GB" to display British Pounds (£) symbol:

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
import { IgxDataLegendComponent, IgxFinancialChartComponent } from 'igniteui-angular-charts';

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
  <div class="legend">
      <igx-data-legend
      name="legend"
      #legend
      [target]="chart"
      includedColumns="close, change, value"
      excludedColumns="high, low, open, volume"
      labelDisplayMode="Hidden"
      valueFormatMode="Currency"
      valueFormatCulture="en-GB">
      </igx-data-legend>
  </div>
  <div class="container fill">
      <igx-financial-chart
      name="chart"
      #chart
      chartType="Candle"
      [dataSource]="multipleStocks"
      dataToolTipValueFormatMode="Currency"
      dataToolTipValueFormatCulture="en-GB"
      dataToolTipLabelDisplayMode="Hidden"
      dataToolTipIncludedColumns="Close, Change, Value"
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


## Angular Data Legend Grouping

[`dataLegendGroup`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#dataLegendGroup) can be set, on all types of series, to a string that will categorize a group of series in Data Legend. Each group will have its own summary row displayed before another group of series is displayed:
By default, DataLegend will hide names of groups, but you can display group names by setting the [`groupRowVisible`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#groupRowVisible) property to true.

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
      </igx-data-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## Angular Data Legend Styling & Events

Several properties are exposed including grouping portions of the legend.

- `GroupRowMargin`
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

The [`IgxDataLegendComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html) has several events that fire when rendering their corresponding row, even during mouse interactions where the values are updating. These events are listed below with a description of what they are designed to be used for:

- `StyleGroupRow`: This event fires for each group to style text displayed in group rows.
- `StyleHeaderRow`: This event fires when rendering the header row.
- `StyleSeriesRow`: This event fires once for each series row, which allows conditional styling of the values of the series.
- `StyleSeriesColumn`: This event fires once for each series column, which allows conditional styling of the different columns for the series in the chart.
- `StyleSummaryRow`: This event fires once when rendering the summary row.
- `StyleSummaryColumn`: This event fires once when rendering the summary column.

Some of the events exposes a [`IgxDataLegendStylingRowEventArgs`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendstylingroweventargs.html) parameter as its arguments, which lets you customize each item's text, text color, and the overall visibility of the row. The event arguments also expose event-specific properties. For example, since the `StyleSeriesRow` event fires for each series, the event arguments will return the series index and series title for the row that represents the series.

`StyleSummaryColumn` and `SeriesStyleColumn` events expose a [`IgxDataLegendStylingColumnEventArgs`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendstylingcolumneventargs.html) parameter as its arguments, for customizing each field in the series. The event arguments also expose event-specific properties such as column index and value member related properties about the columns.

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
import { IgxDataLegendComponent, IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxColumnSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
      groupRowVisible="true"
      groupTextColor="purple"
      groupTextStyle="Italic bold 20px Arial">
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
          title=""
          valueMemberPath="total"
          dataLegendGroup="Total Medals"
          highlightedValuesDataLegendGroup="Country"
          highlightedValueMemberPath="america"
          highlightedTitleSuffix="America">
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


## API References

- [`excludedColumns`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#excludedColumns)
- [`excludedSeries`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#excludedSeries)
- [`headerFormatDate`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#headerFormatDate)
- [`headerFormatTime`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#headerFormatTime)
- [`headerText`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#headerText)
- [`includedColumns`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#includedColumns)
- [`includedSeries`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#includedSeries)
- [`labelDisplayMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#labelDisplayMode)
- [`labelTextColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendstylingcolumneventargs.html#labelTextColor)
- `StyleHeaderRow`:
- `StyleSeriesColumn`:
- `StyleSeriesRow`
- `StyleSeriesRow`:
- `StyleSummaryColumn`:
- `StyleSummaryRow`:
- [`summaryTitleText`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#summaryTitleText)
- [`summaryType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#summaryType)
- [`titleTextColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#titleTextColor)
- `UnitText`
- [`unitsTextColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendstylingcolumneventargs.html#unitsTextColor)
- [`valueFormatAbbreviation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatAbbreviation)
- [`valueFormatCulture`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatCulture)
- [`valueFormatMaxFractions`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatMaxFractions)
- [`valueFormatMaxFractions`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatMaxFractions)
- [`valueFormatMinFractions`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatMinFractions)
- [`valueFormatMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatMode)
- [`valueTextColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendstylingcolumneventargs.html#valueTextColor)
