---
title: Angular Chart Tooltips | Data Visualization | Infragistics
_description: Infragistics' Angular Chart Tooltips
_keywords: Angular Charts, Tooltips, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "ToolTipType"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Tooltips
_premium: true
---

# Angular Chart Tooltips

In Angular charts, tooltips provide details about bound data and they are rendered in popups when the end-user hovers over data points. Tooltips are supported by the [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html), [`IgxFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html), and [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) controls.

## Angular Chart Tooltip Types

Angular Chart provide three types of tooltips that you can with tooltips enabled by setting the [`toolTipType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#toolTipType) property. The following example shows the [Column Chart](../types/column-chart.md) with a combo-box that you can use to change type of tooltips.

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
import { IgxLegendComponent, IgxCategoryChartComponent } from 'igniteui-angular-charts';

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
	@ViewChild("toolTipTypeEditor", { static: true } )
	private toolTipTypeEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("legend", { static: true } )
	private legend: IgxLegendComponent
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
          propertyPath="ToolTipType"
          name="ToolTipTypeEditor"
          #toolTipTypeEditor
          label="ToolTip Type: "
          primitiveValue="Data">
          </igx-property-editor-property-description>
      </igx-property-editor-panel>
  </div>
  <div class="legend-title">
      Highest Grossing Movie Franchises
  </div>
  <div class="legend">
      <igx-legend
      name="legend"
      #legend>
      </igx-legend>
  </div>
  <div class="container fill">
      <igx-category-chart
      name="chart"
      #chart
      chartType="Column"
      [legend]="legend"
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

<div class="divider--half"></div>

The [`toolTipType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#toolTipType) property is configurable and can be set to one of the following options:

| Property Value                                                                                                                                                 | Description                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [`Default`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.tooltiptype.html#Default) Tooltip   | Display a tooltip for a single item when the pointer is positioned over it.                        |
| [`Data`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.tooltiptype.html#Data) Tooltip         | Display the data tooltips for all series in the chart.                                             |
| [`Item`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.tooltiptype.html#Item) Tooltip         | Display a tooltip for each data item in the category that the pointer is positioned over.          |
| [`Category`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.tooltiptype.html#Category) Tooltip | Display a grouped tooltip for all data points in the category that the pointer is positioned over. |

<div class="divider--half"></div>

## Angular Chart Tooltip Template

If none of built-in types of tooltips are matching your requirements, you can create your own tooltips to display and style series title, data values, and axis values. The following sections demonstrate how to do this in different types of Angular charts.

## Custom Tooltips in Category Chart

This example shows how to create custom tooltips for all series in Angular [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) control. Note that you can also apply the same logic to custom tooltips in Angular [`IgxFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) control.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxCategoryChartModule, IgxLegendModule } from "igniteui-angular-charts";


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
    IgxCategoryChartModule,
    IgxLegendModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { ChangeDetectionStrategy, Component, ViewChild, TemplateRef } from "@angular/core";

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public data = [
        { Franchise: "Marvel Universe All Films", TotalRevenue: 22.55, HighestGrossing: 2.8 },
        { Franchise: "Star Wars", TotalRevenue: 10.32, HighestGrossing: 2.07 },
        { Franchise: "Harry Potter", TotalRevenue: 9.19, HighestGrossing: 1.34 },
        { Franchise: "Avengers", TotalRevenue: 7.76, HighestGrossing: 2.8 },
        { Franchise: "Spider Man", TotalRevenue: 7.22, HighestGrossing: 1.28 },
        { Franchise: "James Bond", TotalRevenue: 7.12, HighestGrossing: 1.11 }
    ];

    @ViewChild('valueTooltip', { static: true })
    public valueTooltip: TemplateRef<object>;

    constructor() {
    }

    public onSeriesAdded(e: any) {
        if (e.args.series) {
            e.args.series.tooltipTemplate = this.valueTooltip;
        }
    }
}
```
```html
<div class="container vertical">
    <div class="options vertical">
        <span id="legendTitle">Highest Grossing Movie Franchises</span>
        <div class="legend">
            <igx-legend #legend orientation="horizontal"></igx-legend>
        </div>
    </div>
    <div class="container">
        <igx-category-chart height="100%" width="100%"
                       [dataSource]="data"
                       isTransitionInEnabled="true"
                       xAxisInterval="1"
                       chartType="Column"
                       toolTipType="None"
                       (seriesAdded)="onSeriesAdded($event)"
                       >
        </igx-category-chart>


        <ng-template let-series="series" let-item="item" #valueTooltip>
            <div class="tooltipVertical">
                <span class="tooltipTitle">Franchise: {{item.Franchise}}<br/></span>
                <span class="tooltipLbl">Revenue of All Movies: {{item.TotalRevenue}}<br/></span>
                <span class="tooltipLbl">Highest Grossing Movie: $ {{item.HighestGrossing}}<br/></span>
            </div>
        </ng-template>
    </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

<div class="divider--half"></div>

## Custom Tooltips in Data Chart

This example shows how to create custom tooltips for each series in Angular Data Chart control.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxLegendModule, IgxDataChartInteractivityModule } from "igniteui-angular-charts";


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
    IgxLegendModule,
    IgxDataChartInteractivityModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component } from "@angular/core";
import { UnknownValuePlotting } from "igniteui-angular-core";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public data: any;
    public unknownValuePlotting: UnknownValuePlotting = UnknownValuePlotting.DontPlot;
    
    constructor() {
        this.data = [
            { Country: "Canada", Coal: 400, Oil: 100, Gas: 175, Nuclear: 225, Hydro: 350 },
            { Country: "China", Coal: 925, Oil: null, Gas: null, Nuclear: 400, Hydro: 625 },
            { Country: "Russia", Coal: 550, Oil: null, Gas: null, Nuclear: 475, Hydro: 425 },
            { Country: "Australia", Coal: 450, Oil: 100, Gas: 150, Nuclear: 175, Hydro: 350 },
            { Country: "United States", Coal: 800, Oil: 250, Gas: 475, Nuclear: 575, Hydro: 750 },
            { Country: "France", Coal: 375, Oil: 150, Gas: 350, Nuclear: 275, Hydro: 325 }
        ];
    }
}
```
```html
<div class="container vertical">
    <div class="options vertical">
        <label id="legendTitle">Energy Production by Source</label>
    </div>
    <div class="container">
        <igx-data-chart #chart height="100%" width="100%" [dataSource]="data"
        isHorizontalZoomEnabled="false" isVerticalZoomEnabled="false"
        computedPlotAreaMarginMode="Series">

            <igx-category-x-axis #xAxis name="xAxis" label="Country"></igx-category-x-axis>
            <igx-numeric-y-axis #yAxis name="yAxis" minValue=0></igx-numeric-y-axis>

            <!-- <igx-line-series name="series1" title="Coal" [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Coal"
              showDefaultTooltip=false [tooltipTemplate]="valueTooltip"></igx-line-series>
            <igx-line-series name="series2" title="Hydro" [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Hydro"
              showDefaultTooltip=false [tooltipTemplate]="valueTooltip"></igx-line-series>
            <igx-line-series name="series3" title="Nuclear" [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Nuclear"
              showDefaultTooltip=false [tooltipTemplate]="valueTooltip"></igx-line-series> -->
            <igx-line-series name="series4" title="Gas" [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Gas"
              showDefaultTooltip=false [tooltipTemplate]="valueTooltip" [unknownValuePlotting]="unknownValuePlotting"></igx-line-series>
            <igx-line-series name="series5" title="Oil" [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Oil"
              showDefaultTooltip=false [tooltipTemplate]="valueTooltip" unknownValuePlotting="LinearInterpolate"></igx-line-series>
          </igx-data-chart>
    </div>

    <ng-template let-series="series" let-item="item" #valueTooltip>
        <div>
            <label class=“tooltipTitle”>{{item.Country}} Production<br/></label>
            <label class=“tooltipLbl” [style.color]="series.valueMemberPath == 'Coal' ? series.actualBrush : 'black'"> Coal: {{item.Coal | number}}<br/></label>
            <label class=“tooltipLbl” [style.color]="series.valueMemberPath == 'Hydro' ? series.actualBrush : 'black'"> Hydro: {{item.Hydro | number}}<br/></label>
            <label class=“tooltipLbl” [style.color]="series.valueMemberPath == 'Oil' ? series.actualBrush : 'black'"> Oil: {{item.Oil | number}}<br/></label>
            <label class=“tooltipLbl” [style.color]="series.valueMemberPath == 'Gas' ? series.actualBrush : 'black'"> Gas: {{item.Gas | number}}<br/></label>
            <label class=“tooltipLbl” [style.color]="series.valueMemberPath == 'Nuclear' ? series.actualBrush : 'black'"> Nuclear: {{item.Nuclear | number}}<br/></label>
        </div>
    </ng-template>
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

- [Chart Annotations](chart-annotations.md)
- [Chart Markers](chart-markers.md)

## API References

The [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) and [`IgxFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) components share the following API properties:

- [`toolTipType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#toolTipType)

In the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) component, you can use the following API components and properties:

- [`IgxDataToolTipLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatatooltiplayercomponent.html)
- [`IgxItemToolTipLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxitemtooltiplayercomponent.html)
- [`IgxCategoryToolTipLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorytooltiplayercomponent.html)
- `ShowDefaultToolTip`
