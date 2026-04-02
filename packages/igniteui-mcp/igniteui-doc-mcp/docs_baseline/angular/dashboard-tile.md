---
title: Angular Dashboard Tile Component | Ignite UI for Angular
_description: See how you can easily get started with Angular Dashboard Tile Component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Dashboard components, Angular Dashboard Tile controls
_license: commercial
mentionedTypes: ["Toolbar", "CategoryChart", "XamDataChart", "XamRadialGauge", "XamLinearGauge", "XamGeographicMap"]
_tocName: Charting in Dashboards
_premium: true
---

# Angular Dashboard Tile <label class="badge badge--preview">PREVIEW</label>

The Angular Dashboard Tile is a automatic data visualization component which determines via analysis of a DataSource collection/array or single data point what would be the most appropriate visualization to display. It then also provides a further suite of tools in its embedded [`IgxToolbarComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html) that let you alter the visualization that is presented in a variety of ways.

A wide variety of visualizations may be selected for display depending on the shape of the provided data including, but not limited to: Category Charts, Radial and Polar Charts, Scatter Charts, Geographic Maps, Radial and Linear Gauges, Financial Charts and Stacked Charts.

Interacting with the chart type menu in the toolbar will allow for selecting a different visualization among the list of likely candidates.

## Angular Dashboard Tile Example

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDashboardTileModule, IgxDataChartDashboardTileModule, IgxGeographicMapDashboardTileModule, IgxLinearGaugeDashboardTileModule, IgxPieChartDashboardTileModule, IgxRadialGaugeDashboardTileModule } from 'igniteui-angular-dashboards';

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
    IgxDashboardTileModule,
    IgxDataChartDashboardTileModule,
    IgxGeographicMapDashboardTileModule,
    IgxLinearGaugeDashboardTileModule,
    IgxPieChartDashboardTileModule,
    IgxRadialGaugeDashboardTileModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { RetailSalesPerformanceLocalDataSource } from './RetailSalesPerformanceLocalDataSource';
import { IgxDashboardTileComponent } from 'igniteui-angular-dashboards';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("dashboard", { static: true } )
	private dashboard: IgxDashboardTileComponent
    private _retailSalesPerformanceLocalDataSource: RetailSalesPerformanceLocalDataSource = null;
    public get retailSalesPerformanceLocalDataSource(): RetailSalesPerformanceLocalDataSource {
        if (this._retailSalesPerformanceLocalDataSource == null)
        {
            this._retailSalesPerformanceLocalDataSource = new RetailSalesPerformanceLocalDataSource();
        }
        return this._retailSalesPerformanceLocalDataSource;
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
      <igx-dashboard-tile
      name="dashboard"
      #dashboard
      [dataSource]="retailSalesPerformanceLocalDataSource">
      </igx-dashboard-tile>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## Dependencies

<!-- Angular, WebComponents, React -->

Install the following packages in the Ignite UI for Angular toolset:

```cmd
npm install igniteui-angular-charts
npm install igniteui-angular-core
npm install igniteui-angular-dashboards
npm install igniteui-angular-gauges
npm install igniteui-angular-data-grids
npm install igniteui-angular-inputs
npm install igniteui-angular-layouts
npm install igniteui-angular-maps
```

The following modules are suggested when using the Dashboard Tile component:

```ts
import { IgxDashboardTileModule, IgxDataChartDashboardTileModule, IgxRadialGaugeDashboardTileModule,
         IgxLinearGaugeDashboardTileModule, IgxGeographicMapDashboardTileModule,
         IgxPieChartDashboardTileModule } from "igniteui-angular-dashboards";

@NgModule({
    imports: [
        IgxDataChartDashboardTileModule,
        IgxRadialGaugeDashboardTileModule,
        IgxLinearGaugeDashboardTileModule,
        IgxGeographicMapDashboardTileModule,
        IgxPieChartDashboardTileModule,
        IgxDashboardTileModule
    ]
})
export class AppModule {}
```

<!-- end:Angular, WebComponents, React -->

## Usage

Depending on what you bind the Dashboard Tile's `DataSource` property to will determine which visualization you see by default, as the control will evaluate the data you bind and then choose a visualization from the Ignite UI for Angular toolset to show. The data visualization controls that are included to be shown in the Dashboard Tile are the following:

- [IgxCategoryChart](charts/chart-overview.md)
- [IgxDataChart](charts/chart-overview.md)
- [IgxDataPieChart](charts/types/data-pie-chart.md)
- [IgxGeographicMap](geo-map.md)
- [IgxLinear Gauge](linear-gauge.md)
- [IgxRadialGauge](radial-gauge.md)

The data visualization that is chosen by default is mainly dependent on the schema and the count of the `DataSource` that you have bound. For example, if you bind a single numeric value, you will get a [`IgxRadialGaugeComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html), but if you bind a collection of value-label pairs that are easy to distinguish from each other, you will likely get a `XamDataPieChart`. If you bind an `DataSource` that has more value paths, you will receive a [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) with multiple column series or line series, depending mainly on the count of the collection bound. You can also bind to a `ShapeDataSource` or data the appears to contain geographic points to receive a [`IgxGeographicMapComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html).

You are not locked into a single visualization when you bind the `DataSource`, and you can tell the control that you want to see a particular visualization by setting its `VisualizationType` property. For example, if you specifically wanted to see a line chart, you could define the Dashboard Tile like so:

<!-- TODO SAMPLE -->

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDashboardTileModule, IgxDataChartDashboardTileModule, IgxGeographicMapDashboardTileModule, IgxLinearGaugeDashboardTileModule, IgxPieChartDashboardTileModule, IgxRadialGaugeDashboardTileModule } from 'igniteui-angular-dashboards';

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
    IgxDashboardTileModule,
    IgxDataChartDashboardTileModule,
    IgxGeographicMapDashboardTileModule,
    IgxLinearGaugeDashboardTileModule,
    IgxPieChartDashboardTileModule,
    IgxRadialGaugeDashboardTileModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DashboardGaugeDataSourceItem, DashboardGaugeDataSource } from './DashboardGaugeDataSource';
import { IgxDashboardTileComponent } from 'igniteui-angular-dashboards';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("dashboard", { static: true } )
	private dashboard: IgxDashboardTileComponent
    private _dashboardGaugeDataSource: DashboardGaugeDataSource = null;
    public get dashboardGaugeDataSource(): DashboardGaugeDataSource {
        if (this._dashboardGaugeDataSource == null)
        {
            this._dashboardGaugeDataSource = new DashboardGaugeDataSource();
        }
        return this._dashboardGaugeDataSource;
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
      <igx-dashboard-tile
      tileTitle="Sample Gauge"
      name="dashboard"
      #dashboard
      [dataSource]="dashboardGaugeDataSource">
      </igx-dashboard-tile>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


The visualization or properties of the visualization are also configurable using the [`IgxToolbarComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html) at the top of the control. This [`IgxToolbarComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html) has the default tools for the current visualization with the addition of four Dashboard Tile specific ones, highlighted below:

<img src="../images/dashboard-tile-toolbar.png" alt="Dashboard Tile Toolbar"/>

From left to right:

- The first tool will show a data grid with the `DataSource` provided to the control. This is a toggle tool, so if you click it again after showing the grid, it will revert to the visualization.
- The second tool allows you to configure the settings of the current data visualization.
- The third tool allows you to change the current visualization, allowing you to plot a different series type or show a different type of visualization altogether. This can be set on the control by setting the `VisualizationType` property, mentioned above.
- The last tool allows you to configure which properties on your underlying data item are included for the control. You can configure this by setting the [`includedProperties`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#includedProperties) or [`excludedProperties`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#excludedProperties) collection on the control.

This demo demonstrates dashboard tile integration with the Angular Pie Chart. The toolbar options at the top right provides access to styling and changing the data visualization.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDashboardTileModule, IgxDataChartDashboardTileModule, IgxGeographicMapDashboardTileModule, IgxLinearGaugeDashboardTileModule, IgxPieChartDashboardTileModule, IgxRadialGaugeDashboardTileModule } from 'igniteui-angular-dashboards';

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
    IgxDashboardTileModule,
    IgxDataChartDashboardTileModule,
    IgxGeographicMapDashboardTileModule,
    IgxLinearGaugeDashboardTileModule,
    IgxPieChartDashboardTileModule,
    IgxRadialGaugeDashboardTileModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { EnergyGlobalDemandItem, EnergyGlobalDemand } from './EnergyGlobalDemand';
import { IgxDashboardTileComponent } from 'igniteui-angular-dashboards';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("dashboard", { static: true } )
	private dashboard: IgxDashboardTileComponent
    private _energyGlobalDemand: EnergyGlobalDemand = null;
    public get energyGlobalDemand(): EnergyGlobalDemand {
        if (this._energyGlobalDemand == null)
        {
            this._energyGlobalDemand = new EnergyGlobalDemand();
        }
        return this._energyGlobalDemand;
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
      <igx-dashboard-tile
      name="dashboard"
      #dashboard
      [dataSource]="energyGlobalDemand">
      </igx-dashboard-tile>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


This demo demonstrates dashboard tile integration with the Angular Geographic Map. The toolbar options at the top right provides access to styling and changing the data visualization.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDashboardTileModule, IgxDataChartDashboardTileModule, IgxGeographicMapDashboardTileModule, IgxLinearGaugeDashboardTileModule, IgxPieChartDashboardTileModule, IgxRadialGaugeDashboardTileModule } from 'igniteui-angular-dashboards';

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
    IgxDashboardTileModule,
    IgxDataChartDashboardTileModule,
    IgxGeographicMapDashboardTileModule,
    IgxLinearGaugeDashboardTileModule,
    IgxPieChartDashboardTileModule,
    IgxRadialGaugeDashboardTileModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { WorldCitiesItem, WorldCities } from './WorldCities';
import { IgxDashboardTileComponent } from 'igniteui-angular-dashboards';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("dashboard", { static: true } )
	private dashboard: IgxDashboardTileComponent
    private _worldCities: WorldCities = null;
    public get worldCities(): WorldCities {
        if (this._worldCities == null)
        {
            this._worldCities = new WorldCities();
        }
        return this._worldCities;
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
      <igx-dashboard-tile
      name="dashboard"
      #dashboard
      tileTitle="World Cities"
      [dataSource]="worldCities">
      </igx-dashboard-tile>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## API References

- [`IgxToolbarComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html)
- [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)
- [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)
- [`IgxDataPieChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiechartcomponent.html)
- [`IgxGeographicMapComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html)
- [`IgxLinearGaugeComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxlineargaugecomponent.html)
- [`IgxRadialGaugeComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html)

## Additional Resources

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
