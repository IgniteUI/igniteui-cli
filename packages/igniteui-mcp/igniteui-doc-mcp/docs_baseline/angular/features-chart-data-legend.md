---
title: "Angular Chart Data Legend | Data Visualization Tools | Infragistics"
description: Use Infragistics Ignite UI for Angular chart with the data legend!
keywords: "Angular charts, chart legend, legend, legend types, Ignite UI for Angular, Infragistics"
license: commercial
mentionedTypes: ["CategoryChart", "DataLegend", "Series", "DataLegendSummaryType", "DataAbbreviationMode", "DataLegendLayoutMode"]
namespace: Infragistics.Controls.Charts
llms:
  description: "In Ignite UI for Angular, the DataLegend is highly-customizable version of the Legend, that shows values of series and provides many configuration properties for filtering series rows and values columns, styling and formatting values."
platformType: xplat
_tocName: Chart Data Legend
_premium: true
---
# Angular Data Legend

In Ignite UI for Angular, the [`IgxDataLegendComponent`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent) is highly-customizable version of the [`IgxLegendComponent`](mcp:get_api_reference?platform=angular&component=IgxLegendComponent), that shows values of series and provides many configuration properties for filtering series rows and values columns, styling and formatting values. This legend updates when moving the mouse inside of the plot area of the [`IgxCategoryChartComponent`](mcp:get_api_reference?platform=angular&component=IgxCategoryChartComponent), [`IgxFinancialChartComponent`](mcp:get_api_reference?platform=angular&component=IgxFinancialChartComponent), and [`IgxDataChartComponent`](mcp:get_api_reference?platform=angular&component=IgxDataChartComponent). Also, it has a persistent state that remembers the last hovered point when the user's mouse pointer exits the plot area. It displays this content using a set of three type of rows (header, series, summary) and four types of columns (title, label, value, unit).

## Angular Data Legend Rows

The rows of the [`IgxDataLegendComponent`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent) include the header row, series row(s), and the summary row. The header row displays the axis label of the point that is hovered, and can be changed using the [`headerText`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=headerText) property.

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

The header row displays the current label of x-axis when hovering mouse over category series and financial series. You can use [`headerFormatDate`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=headerFormatDate) and [`headerFormatTime`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=headerFormatTime) properties to format date and time in the [`IgxDataLegendComponent`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent) if the x-axis shows dates. For other types of series, the [`IgxDataLegendComponent`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent) does not render the header row.

### Series Row

The series row represents each series plotted in the chart. These rows will display the legend badge, series title, actual/abbreviated value of the the series, and abbreviation symbol or unit of measurement, if specified. You can filter series rows by setting [`includedSeries`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=includedSeries) or [`excludedSeries`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=excludedSeries) properties to a collection of series' indexes (1, 2, 3) or series' titles (Tesla, Microsoft).

### Summary Row

Finally, there is a summary row that displays the total of all series values. The default summary title can be changed using the [`summaryTitleText`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=summaryTitleText) property of the legend. Also, you can use the [`summaryType`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=summaryType) property to customize whether you display the [`Total`](mcp:get_api_reference?platform=angular&component=DataLegendSummaryType&member=Total), [`Min`](mcp:get_api_reference?platform=angular&component=DataLegendSummaryType&member=Min), [`Max`](mcp:get_api_reference?platform=angular&component=DataLegendSummaryType&member=Max), or [`Average`](mcp:get_api_reference?platform=angular&component=DataLegendSummaryType&member=Average) of series values in the summary row.

## Angular Data Legend Columns

The columns of the [`IgxDataLegendComponent`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent) include the series title, label, value of data column, and optional unit associated with the value. Some series in the chart can have multiple columns for label, value, and units.

For example, financial price series has **High**, **Low**, **Open**, and **Close** data columns which can be filtered in the [`IgxDataLegendComponent`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent) using the [`includedColumns`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=includedColumns) or [`excludedColumns`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=excludedColumns) properties.

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

Setting values on the [`includedColumns`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=includedColumns) and [`excludedColumns`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=excludedColumns) properties, depends on type of series and how many data columns they support. For example, you can set [`includedColumns`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=includedColumns) property to a collection of **Open** and **Close** strings and the legend will show only open and close values for stock prices when the chart is plotting financial series. The following table lists all column names that can be use to filter columns in data legend.

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

The title column displays legend badges and series titles, which come from the [`chartTitle`](mcp:get_api_reference?platform=angular&component=IgxDataChartComponent&member=chartTitle) property of the different [`IgxSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxSeriesComponent) plotted in the chart.

### Label Column

The label column displays short name on the left side of value column, e.g. "O" for **Open** stock price. You can toggle visibility of this column using the [`labelDisplayMode`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=labelDisplayMode) property.

### Value Column

The value column displays values of series as abbreviated text which can be formatted using the [`valueFormatAbbreviation`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=valueFormatAbbreviation) property to apply the same abbreviation for all numbers by setting this property to [`Shared`](mcp:get_api_reference?platform=angular&component=DataAbbreviationMode&member=Shared). Alternatively, a user can select other abbreviations such as [`Independent`](mcp:get_api_reference?platform=angular&component=DataAbbreviationMode&member=Independent), [`Kilo`](mcp:get_api_reference?platform=angular&component=DataAbbreviationMode&member=Kilo), [`Million`](mcp:get_api_reference?platform=angular&component=DataAbbreviationMode&member=Million), etc. Precision of abbreviated values is controlled using the [`valueFormatMinFractions`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=valueFormatMinFractions) and [`valueFormatMaxFractions`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=valueFormatMaxFractions) for minimum and maximum digits, respectively.

### Unit Column

The unit column displays an abbreviation symbol on the right side of value column. The unit symbol depends on the [`valueFormatAbbreviation`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=valueFormatAbbreviation) property, e.g. "M" for the [`Million`](mcp:get_api_reference?platform=angular&component=DataAbbreviationMode&member=Million) abbreviation.

### Customizing Columns

You can customize text displayed in the **Label** and **Unit** columns using  properties that end with **MemberAsLegendLabel** and **MemberAsLegendUnit** on each series. The following table shows some possible customizations of the **Label** and **Unit** columns.

|  Type of Series | Series Properties |
| ------|---- |
| Category Series | ValueMemberAsLegendLabel="$" <br /> ValueMemberAsLegendUnit="M" |
| Radial Series | ValueMemberAsLegendLabel="Distance:" <br /> ValueMemberAsLegendUnit="KM" |
| Polar Series | RadiusMemberAsLegendLabel="Radius:" <br /> RadiusMemberAsLegendUnit="KM" <br /> AngleMemberAsLegendLabel="Angle:" <br /> AngleMemberAsLegendUnit="°" |
| Range Series | HighMemberAsLegendLabel="H:" <br /> HighMemberAsLegendUnit="K" <br /> LowMemberAsLegendLabel="L:" <br /> LowMemberAsLegendUnit="K" |
| Financial Series | OpenMemberAsLegendLabel="O:" <br /> OpenMemberAsLegendUnit="K" <br /> HighMemberAsLegendLabel="H:" <br /> HighMemberAsLegendUnit="K" <br /> LowMemberAsLegendLabel="L:" <br /> LowMemberAsLegendUnit="K" <br /> CloseMemberAsLegendLabel="C:" <br /> CloseMemberAsLegendUnit="K" <br /> |

Also, you can use the [`unitsText`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=unitsText) property on the [`IgxDataLegendComponent`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent) to change text displayed in all Unit columns.

## Layout Mode

Legend items can be positioned in a vertical or table structure via the [`layoutMode`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=layoutMode) property. The default value is [`Table`](mcp:get_api_reference?platform=angular&component=DataLegendLayoutMode&member=Table), which retains the same look and feel as seen in previous releases.

eg.

## Angular Data Legend Styling

The [`IgxDataLegendComponent`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent) provides properties for styling each type of column. Each of these properties begins with **Title**, **Label**, **Value**, or **Units**. You can style the text's color, font, and margin. For example, if you wanted to set the text color of all columns, you would set the [`titleTextColor`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=titleTextColor), [`labelTextColor`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=labelTextColor), [`valueTextColor`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=valueTextColor), and [`unitsTextColor`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=unitsTextColor) properties.

The following example demonstrates a utilization of the styling properties mentioned above:

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

The [`IgxDataLegendComponent`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent) provides automatic abbreviation of large numbers using its [`valueFormatAbbreviation`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=valueFormatAbbreviation) property. This adds a multiplier in the units column such as kilo, million, billion, etc. You can customize the number of fractional digits that are displayed by setting the [`valueFormatMinFractions`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=valueFormatMinFractions) and [`valueFormatMaxFractions`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=valueFormatMaxFractions). This will allow you to determine the minimum and maximum number of digits that appear after the decimal point, respectively.
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

You have the ability to change the default decimal display of values within the [`IgxDataLegendComponent`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent) to a currency by changing the [`valueFormatMode`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=valueFormatMode) property. Also, you can change the culture of the displayed currency symbol by setting the [`valueFormatCulture`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=valueFormatCulture) property a culture tag.

For example, the following example data legend with the [`valueFormatCulture`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=valueFormatCulture) set to "en-GB" to display British Pounds (£) symbol:

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

[`dataLegendGroup`](mcp:get_api_reference?platform=angular&component=IgxSeriesComponent&member=dataLegendGroup) can be set, on all types of series, to a string that will categorize a group of series in Data Legend. Each group will have its own summary row displayed before another group of series is displayed:
By default, DataLegend will hide names of groups, but you can display group names by setting the [`groupRowVisible`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=groupRowVisible) property to true.

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

- [`groupRowMarginLeft`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=groupRowMarginLeft)/[`groupRowMarginTop`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=groupRowMarginTop)/[`groupRowMarginRight`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=groupRowMarginRight)/[`groupRowMarginBottom`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=groupRowMarginBottom)
- [`groupTextMarginLeft`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=groupTextMarginLeft)/[`groupTextMarginTop`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=groupTextMarginTop)/[`groupTextMarginRight`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=groupTextMarginRight)/[`groupTextMarginBottom`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=groupTextMarginBottom)
- [`groupTextColor`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=groupTextColor)
- [`groupTextStyle`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=groupTextStyle)
- [`headerTextMarginLeft`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=headerTextMarginLeft)/[`headerTextMarginTop`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=headerTextMarginTop)/[`headerTextMarginRight`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=headerTextMarginRight)/[`headerTextMarginBottom`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=headerTextMarginBottom)
- [`headerTextColor`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=headerTextColor)
- [`headerTextStyle`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=headerTextStyle)

The [`IgxDataLegendComponent`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent) has several events that fire when rendering their corresponding row, even during mouse interactions where the values are updating. These events are listed below with a description of what they are designed to be used for:

- [`styleGroupRow`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=styleGroupRow): This event fires for each group to style text displayed in group rows.
- [`styleHeaderRow`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=styleHeaderRow): This event fires when rendering the header row.
- [`styleSeriesRow`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=styleSeriesRow): This event fires once for each series row, which allows conditional styling of the values of the series.
- [`styleSeriesColumn`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=styleSeriesColumn): This event fires once for each series column, which allows conditional styling of the different columns for the series in the chart.
- [`styleSummaryRow`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=styleSummaryRow): This event fires once when rendering the summary row.
- [`styleSummaryColumn`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=styleSummaryColumn): This event fires once when rendering the summary column.

Some of the events exposes a [`IgxDataLegendStylingRowEventArgs`](mcp:get_api_reference?platform=angular&component=IgxDataLegendStylingRowEventArgs) parameter as its arguments, which lets you customize each item's text, text color, and the overall visibility of the row. The event arguments also expose event-specific properties. For example, since the [`styleSeriesRow`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=styleSeriesRow) event fires for each series, the event arguments will return the series index and series title for the row that represents the series.

[`styleSummaryColumn`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=styleSummaryColumn) and [`styleSeriesColumn`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent&member=styleSeriesColumn) events expose a [`IgxDataLegendStylingColumnEventArgs`](mcp:get_api_reference?platform=angular&component=IgxDataLegendStylingColumnEventArgs) parameter as its arguments, for customizing each field in the series. The event arguments also expose event-specific properties such as column index and value member related properties about the columns.

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
[`IgxDataLegendComponent`](mcp:get_api_reference?platform=angular&component=IgxDataLegendComponent)
