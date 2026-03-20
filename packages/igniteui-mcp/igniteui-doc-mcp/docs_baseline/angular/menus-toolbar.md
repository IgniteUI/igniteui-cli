---
title: Angular Toolbar Component | Ignite UI for Angular
_description: See how you can easily get started with Angular Toolbar Component. Compatible with the Data Chart. Extend your .
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Toolbar components, Angular Toolbar controls
_license: commercial
mentionedTypes: ["Toolbar", "ToolAction", "DomainChart", "CategoryChart", "XamDataChart", "TrendLineType"]
_tocName: Toolbar
_premium: true
---

# Angular Toolbar Overview

The Angular Toolbar component is a companion container for UI operations to be used primarily with our charting components. The toolbar will dynamically update with a preset of properties and tool items when linked to our [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) or [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) components. You'll be able to create custom tools for your project allowing end users to provide changes, offering an endless amount of customization.

## Angular Toolbar Example

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxLegendModule, IgxCategoryChartModule, IgxCategoryChartToolbarModule } from 'igniteui-angular-charts';
import { IgxToolbarModule } from 'igniteui-angular-layouts';
import { IgxCheckboxListModule } from 'igniteui-angular-data-grids';

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
    IgxToolbarModule,
    IgxCategoryChartModule,
    IgxCategoryChartToolbarModule,
    IgxCheckboxListModule
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
import { IgxToolbarComponent } from 'igniteui-angular-layouts';

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
	@ViewChild("toolbar", { static: true } )
	private toolbar: IgxToolbarComponent
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
  <div class="aboveContentSplit">
    <div class="aboveContentLeftContainer">
      <igx-toolbar
      name="toolbar"
      #toolbar
      [target]="chart"
      orientation="Horizontal">
      </igx-toolbar>
    </div>
    <div class="aboveContentRightContainer">
      <igx-legend
      name="legend"
      #legend
      orientation="Horizontal">
      </igx-legend>
    </div>
  </div>
  <div class="container fill">
      <igx-category-chart
      name="chart"
      #chart
      chartType="Line"
      isHorizontalZoomEnabled="true"
      isVerticalZoomEnabled="true"
      [dataSource]="countryRenewableElectricity"
      includedProperties="year, europe, china, america"
      [legend]="legend"
      yAxisTitle="TWh"
      yAxisTitleLeftMargin="10"
      yAxisTitleRightMargin="5"
      yAxisLabelLeftMargin="0"
      yAxisLabelLocation="OutsideRight"
      isTransitionInEnabled="true">
      </igx-category-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
.aboveContentSplit {
    display: flex;
    flex-direction: row;
}
.aboveContentLeftContainer {
    margin-left: 1.25rem;
    display: flex;
    flex-grow: 1;
    justify-content: flex-start;
    align-items: flex-end;
}
.aboveContentRightContainer {
    margin-right: 1.25rem;
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: flex-end;
}
```


## Dependencies

<!-- Angular, WebComponents, React -->

Install the Ignite UI for Angular layouts, inputs, charts and core packages:

```cmd
npm install igniteui-angular-layouts
npm install igniteui-angular-inputs
npm install igniteui-angular-charts
npm install igniteui-angular-core
```

The following modules are required when using the [`IgxToolbarComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html) with the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) component and it's features.

```ts
import { IgxToolbarModule } from 'igniteui-angular-layouts';
import { IgxDataChartToolbarModule, IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartAnnotationModule, IgxDataChartInteractivityModule, IgxDataChartCategoryTrendLineModule  } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxToolbarModule,
        IgxDataChartToolbarModule,
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        IgxDataChartAnnotationModule,
        IgxDataChartInteractivityModule,
        IgxDataChartCategoryTrendLineModule
        // ...
    ]
})
export class AppModule {}
```

```ts
import { IgxToolbarModule } from 'igniteui-react-layouts';
import { IgrDataChartToolbarModule, IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartAnnotationModule, IgrDataChartInteractivityModule, IgrDataChartCategoryTrendLineModule  } from 'igniteui-react-charts';

IgxToolbarModule.register();
IgrDataChartToolbarModule.register();
IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartAnnotationModule.register();
IgrDataChartInteractivityModule.register();
IgrDataChartCategoryTrendLineModule.register();
```

<!-- end:Angular, WebComponents, React -->

## Usage

### Tool Actions

The following is a list of the different [`IgxToolActionComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html) items that you can add to the Toolbar.

- [`IgxToolActionButtonComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionbuttoncomponent.html)
- [`IgxToolActionCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html)
- [`IgxToolActionIconButtonComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioniconbuttoncomponent.html)
- [`IgxToolActionIconMenuComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioniconmenucomponent.html)
- [`IgxToolActionLabelComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionlabelcomponent.html)
- [`IgxToolActionNumberInputComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionnumberinputcomponent.html)
- [`IgxToolActionRadioComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionradiocomponent.html)
- [`IgxToolActionSubPanelComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionsubpanelcomponent.html)

Each of these tools exposes an `OnCommand` event that is triggered by mouse click. Note, the [`IgxToolActionIconMenuComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioniconmenucomponent.html) is a wrapper for other tools that can also be wrapped inside a [`IgxToolActionIconMenuComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioniconmenucomponent.html).

New and existing tools can be repositioned and marked hidden using the [`overlayId`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#overlayId), [`beforeId`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#beforeId) and [`afterId`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#afterId) properties on the [`IgxToolActionComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html) object. ToolActions also expose a [`visibility`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#visibility) property.

The following example demonstrates a couple of features. First you can group tools together in the [`IgxToolActionSubPanelComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionsubpanelcomponent.html) including hiding built in tools such as the **ZoomReset** and **AnalyzeMenu** menu tool actions. In this example a new instance of the **ZoomReset** tool action within the **ZoomMenu** by using the the [`afterId`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#afterId) property and assigning that to **ZoomOut** to be precise with it's placement. It is also highlighted via the [`isHighlighted`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#isHighlighted) property on the tool.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxToolbarModule } from 'igniteui-angular-layouts';
import { IgxDataChartToolbarModule, IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartAnnotationModule, IgxDataChartInteractivityModule, IgxDataChartCategoryTrendLineModule } from 'igniteui-angular-charts';

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
    IgxToolbarModule,
    IgxDataChartToolbarModule,
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxDataChartAnnotationModule,
    IgxDataChartInteractivityModule,
    IgxDataChartCategoryTrendLineModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';
import { IgxToolCommandEventArgs } from 'igniteui-angular-layouts';
import { IgxDataChartComponent, IgxSeriesComponent, IgxDataToolTipLayerComponent, IgxCrosshairLayerComponent, IgxFinalValueLayerComponent } from 'igniteui-angular-charts';
import { IgxToolbarComponent, IgxToolActionIconMenuComponent, IgxToolActionGroupHeaderComponent, IgxToolActionSubPanelComponent, IgxToolActionCheckboxComponent, IgxToolActionLabelComponent } from 'igniteui-angular-layouts';
import { IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxLineSeriesComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("toolbar", { static: true } )
	private toolbar: IgxToolbarComponent
	@ViewChild("menuForSubPanelTool", { static: true } )
	private menuForSubPanelTool: IgxToolActionIconMenuComponent
	@ViewChild("subPanelGroup", { static: true } )
	private subPanelGroup: IgxToolActionGroupHeaderComponent
	@ViewChild("customSubPanelTools", { static: true } )
	private customSubPanelTools: IgxToolActionSubPanelComponent
	@ViewChild("enableTooltipsLabel", { static: true } )
	private enableTooltipsLabel: IgxToolActionCheckboxComponent
	@ViewChild("enableCrosshairsLabel", { static: true } )
	private enableCrosshairsLabel: IgxToolActionCheckboxComponent
	@ViewChild("enableFinalValuesLabel", { static: true } )
	private enableFinalValuesLabel: IgxToolActionCheckboxComponent
	@ViewChild("zoomResetLabel", { static: true } )
	private zoomResetLabel: IgxToolActionLabelComponent
	@ViewChild("zoomResetHidden", { static: true } )
	private zoomResetHidden: IgxToolActionLabelComponent
	@ViewChild("analyzeMenu", { static: true } )
	private analyzeMenu: IgxToolActionIconMenuComponent
	@ViewChild("copyMenu", { static: true } )
	private copyMenu: IgxToolActionLabelComponent
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

	public toolbarToggleAnnotations({ sender, args }: { sender: any, args: IgxToolCommandEventArgs }): void {
	    var target = this.chart;
	    switch (args.command.commandId)
		{
			case "EnableTooltips":
				var enable = args.command.argumentsList[0].value as boolean;
				if (enable)
				{
					target.series.add(new IgxDataToolTipLayerComponent());
				}
				else
				{
					var toRemove = null;
					for (var i = 0; i < target.actualSeries.length; i++) {
	                    let s = target.actualSeries[i] as IgxSeriesComponent;
						if (s instanceof IgxDataToolTipLayerComponent)
						{
							toRemove = s;
						}
					}
					if (toRemove != null)
					{
						target.series.remove(toRemove);
					}
				}
			break;
			case "EnableCrosshairs":
				var enable = args.command.argumentsList[0].value as boolean;
				if (enable)
				{
					target.series.add(new IgxCrosshairLayerComponent());
				}
				else
				{
					var toRemove = null;
					for (var i = 0; i < target.actualSeries.length; i++) {
						let s = target.actualSeries[i] as IgxSeriesComponent;
						if (s instanceof IgxCrosshairLayerComponent)
						{
							toRemove = s;
						}
					}
					if (toRemove != null)
					{
						target.series.remove(toRemove);
					}
				}
			break;
			case "EnableFinalValues":
				var enable = args.command.argumentsList[0].value as boolean;
				if (enable)
				{
					target.series.add(new IgxFinalValueLayerComponent());
				}
				else
				{
					var toRemove = null;
					for (var i = 0; i < target.actualSeries.length; i++) {
						let s = target.actualSeries[i] as IgxSeriesComponent;
						if (s instanceof IgxFinalValueLayerComponent)
						{
							toRemove = s;
						}
					}
					if (toRemove != null)
					{
						target.series.remove(toRemove);
					}
				}
				break;
		}
	}

}
```
```html
<div class="container vertical sample">
  <div class="aboveContentSplit">
    <div class="aboveContentLeftContainer">
      <igx-toolbar
      name="toolbar"
      #toolbar
      [target]="chart"
      orientation="Horizontal"
      (onCommand)="this.toolbarToggleAnnotations($event)">
          <igx-tool-action-icon-menu
          name="MenuForSubPanelTool"
          #menuForSubPanelTool
          iconCollectionName="ChartToolbarIcons"
          iconName="analyze">
              <igx-tool-action-group-header
              name="SubPanelGroup"
              #subPanelGroup
              closeOnExecute="true"
              title="Visualizations"
              subtitle="Layers">
              </igx-tool-action-group-header>
              <igx-tool-action-sub-panel
              name="CustomSubPanelTools"
              #customSubPanelTools>
                  <igx-tool-action-checkbox
                  name="EnableTooltipsLabel"
                  #enableTooltipsLabel
                  title="Enable Tooltips"
                  commandId="EnableTooltips">
                  </igx-tool-action-checkbox>
                  <igx-tool-action-checkbox
                  name="EnableCrosshairsLabel"
                  #enableCrosshairsLabel
                  title="Enable Crosshairs"
                  commandId="EnableCrosshairs">
                  </igx-tool-action-checkbox>
                  <igx-tool-action-checkbox
                  name="EnableFinalValuesLabel"
                  #enableFinalValuesLabel
                  title="Enable Final Values"
                  commandId="EnableFinalValues">
                  </igx-tool-action-checkbox>
              </igx-tool-action-sub-panel>
          </igx-tool-action-icon-menu>
          <igx-tool-action-label
          name="zoomResetLabel"
          #zoomResetLabel
          title="Reset"
          afterId="ZoomOut"
          iconName="reset"
          iconCollectionName="ChartToolbarIcons"
          commandId="ZoomReset"
          isHighlighted="true">
          </igx-tool-action-label>
          <igx-tool-action-label
          name="zoomResetHidden"
          #zoomResetHidden
          overlayId="ZoomReset"
          visibility="Collapsed">
          </igx-tool-action-label>
          <igx-tool-action-icon-menu
          name="AnalyzeMenu"
          #analyzeMenu
          overlayId="AnalyzeMenu"
          visibility="Collapsed">
          </igx-tool-action-icon-menu>
          <igx-tool-action-label
          name="CopyMenu"
          #copyMenu
          overlayId="CopyMenu"
          visibility="Collapsed">
          </igx-tool-action-label>
      </igx-toolbar>
    </div>
    <div class="aboveContentRightContainer">
      <!-- insert aboveContentRight -->
      <!-- end aboveContentRight -->
    </div>
  </div>
  <div class="container fill">
      <igx-data-chart
      computedPlotAreaMarginMode="Series"
      isHorizontalZoomEnabled="true"
      isVerticalZoomEnabled="true"
      name="chart"
      #chart>
          <igx-category-x-axis
          name="xAxis"
          #xAxis
          [dataSource]="countryRenewableElectricity"
          label="year">
          </igx-category-x-axis>
          <igx-numeric-y-axis
          name="yAxis"
          #yAxis
          title="TWh"
          labelLocation="OutsideRight">
          </igx-numeric-y-axis>
          <igx-line-series
          name="lineSeries1"
          #lineSeries1
          title="Electricity"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          [dataSource]="countryRenewableElectricity"
          valueMemberPath="america">
          </igx-line-series>
          <igx-line-series
          name="LineSeries2"
          #lineSeries2
          title="Electricity"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          [dataSource]="countryRenewableElectricity"
          valueMemberPath="europe">
          </igx-line-series>
          <igx-line-series
          name="LineSeries3"
          #lineSeries3
          title="Electricity"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          [dataSource]="countryRenewableElectricity"
          valueMemberPath="china">
          </igx-line-series>
      </igx-data-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
.aboveContentSplit {
    display: flex;
    flex-direction: row;
}
.aboveContentLeftContainer {
    margin-left: 1.25rem;
    display: flex;
    flex-grow: 1;
    justify-content: flex-start;
    align-items: flex-end;
}
.aboveContentRightContainer {
    margin-right: 1.25rem;
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: flex-end;
}
```


### Angular Data Chart Integration

The Angular Toolbar contains a `Target` property. This is used to link a component, such as the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) as shown in the code below:

```html
  <div class="legend">
    <igx-toolbar
      name="toolbar"
      [target]="chart"
      #toolbar>
    </igx-toolbar>
  </div>
  <div class="container fill">
    <igx-data-chart
    name="chart"
    #chart>
  </igx-data-chart>
```

Several pre-existing [`IgxToolActionComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html) items and menus become available when the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) is linked with the Toolbar. Here is a list of the built-in Angular [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) Tool Actions and their associated [`overlayId`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#overlayId):

Zooming Actions

- `ZoomMenu`: A [`IgxToolActionIconMenuComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioniconmenucomponent.html) that exposes three [`IgxToolActionLabelComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionlabelcomponent.html) items to invoke the [`zoomIn`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#zoomIn) and [`zoomOut`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#zoomOut) methods on the chart for increasing/decreasing the chart's zoom level including `ZoomReset`, a [`IgxToolActionLabelComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionlabelcomponent.html) that invokes the [`resetZoom`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#resetZoom) method on the chart to reset the zoom level to it's default position.

Trend Actions

- `AnalyzeMenu`: A [`IgxToolActionIconMenuComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioniconmenucomponent.html) that contains several options for configuring different options of the chart.
- `AnalyzeHeader`: A sub section header.
  - `LinesMenu`: A sub menu containing various tools for showing different dashed horizontal lines on the chart.
  - `LinesHeader`: A sub menu section header for the following three tools:
    - `MaxValue`: A [`IgxToolActionCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html) that displays a dashed horizontal line along the yAxis at the maximum value of the series.
    - `MinValue`: A [`IgxToolActionCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html) that displays a dashed horizontal line along the yAxis at the minimum value of the series.
    - `Average`:  A [`IgxToolActionCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html) that displays a dashed horizontal line along the yAxis at the average value of the series.
  - `TrendsMenu`: A sub menu containing tools for applying various trendlines to the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) plot area.
  - `TrendsHeader`: A sub menu section header for the following three tools:
    - **Exponential**: A [`IgxToolActionRadioComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionradiocomponent.html) that sets the [`trendLineType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#trendLineType) on each series in the chart to **ExponentialFit**.
    - **Linear**: A [`IgxToolActionRadioComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionradiocomponent.html) that sets the [`trendLineType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#trendLineType) on each series in the chart to **LinearFit**.
    - **Logarithmic**: A [`IgxToolActionRadioComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionradiocomponent.html) that sets the [`trendLineType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#trendLineType) on each series in the the chart to **LogarithmicFit**.
- `HelpersHeader`: A sub section header.
  - `SeriesAvg`: A [`IgxToolActionCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html) that adds or removes a [`IgxValueLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvaluelayercomponent.html) to the chart's series collection using the [`ValueLayerValueMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.valuelayervaluemode.html) of type [`Average`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.valuelayervaluemode.html#Average).
  - `ValueLabelsMenu`: A sub menu containing various tools for showing different annotations on the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)'s plot area.
  - `ValueLabelsHeader`: A sub menu section header for the following tools:
    - `ShowValueLabels`: A [`IgxToolActionCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html) that toggles data point values by using a [`IgxCalloutLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcalloutlayercomponent.html).
    - `ShowLastValueLabel`: A [`IgxToolActionCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html) that toggles final value axis annotations by using a [`IgxFinalValueLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinalvaluelayercomponent.html).
- `ShowCrosshairs`: A [`IgxToolActionCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html) that toggles mouse-over crosshair annotations via the chart's [`crosshairsDisplayMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#crosshairsDisplayMode) property.
- `ShowGridlines`: A [`IgxToolActionCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html) that toggles extra gridlines by applying a `MajorStroke` to the X-Axis.

Save to Image Action

- `CopyAsImage`: A [`IgxToolActionLabelComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionlabelcomponent.html) that exposes an option to copy the chart to the clipboard.
- `CopyHeader`: A sub section header.

### SVG Icons

When adding tools manually, icons can be assigned using the `RenderIconFromText` method. There are three parameters to pass in this method. The first is the icon collection name defined on the tool eg. [`iconCollectionName`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#iconCollectionName). The second is the name of the icon defined on the tool eg. [`iconName`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#iconName), followed by adding the SVG string.

### Data URL Icons

Similarly to adding svg, you can also add an Icon image from a URL via the [`registerIconFromDataURL`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html#registerIconFromDataURL). The method's third parameter would be used to enter a string URL.

The following snippet shows both methods of adding an Icon.

```html
<igx-tool-action-label
    title="Custom Icon"
    iconName="CustomIcon"
    iconCollectionName="CustomCollection">
</igx-tool-action-label>
```

```ts
public toolbarCustomIconOnViewInit(): void {

  const icon = '<svg width="28px" height="28px" stroke="none" viewBox="0 0 3.5 3.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--gis" preserveAspectRatio="xMidYMid meet"><path d="M0.436 0.178a0.073 0.073 0 0 0 -0.062 0.036L0.01 0.846a0.073 0.073 0 0 0 0.063 0.109h0.729a0.073 0.073 0 0 0 0.063 -0.109L0.501 0.214a0.073 0.073 0 0 0 -0.064 -0.036zm0.001 0.219 0.238 0.413H0.199zM1.4 0.507v0.245h0.525v-0.245zm0.77 0v0.245h1.33v-0.245zM0.073 1.388A0.073 0.073 0 0 0 0 1.461v0.583a0.073 0.073 0 0 0 0.073 0.073h0.729A0.073 0.073 0 0 0 0.875 2.045V1.461a0.073 0.073 0 0 0 -0.073 -0.073zm0.073 0.146h0.583v0.438H0.146zM1.4 1.674v0.245h0.945v-0.245zm1.19 0v0.245h0.91v-0.245zM0.438 2.447c-0.241 0 -0.438 0.197 -0.438 0.438 0 0.241 0.197 0.438 0.438 0.438s0.438 -0.197 0.438 -0.438c0 -0.241 -0.197 -0.438 -0.438 -0.438zm0 0.146a0.291 0.291 0 0 1 0.292 0.292 0.291 0.291 0 0 1 -0.292 0.292 0.291 0.291 0 0 1 -0.292 -0.292A0.291 0.291 0 0 1 0.438 2.593zM1.4 2.842v0.245h0.525v-0.245zm0.77 0v0.245h1.33v-0.245z" fill="#000000" fill-rule="evenodd"/></svg>';

  this.toolbar.registerIconFromText("CustomCollection", "CustomIcon", icon);
}
```

```ts
public toolbarCustomIconOnViewInit(): void {

  toolbar.registerIconFromDataURL("CustomCollection", "CustomIcon", "https://www.svgrepo.com/show/678/calculator.svg");

}
```

```ts
public toolbarCustomIconOnViewInit(): void {

  const icon = '<svg width="28px" height="28px" stroke="none" viewBox="0 0 3.5 3.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--gis" preserveAspectRatio="xMidYMid meet"><path d="M0.436 0.178a0.073 0.073 0 0 0 -0.062 0.036L0.01 0.846a0.073 0.073 0 0 0 0.063 0.109h0.729a0.073 0.073 0 0 0 0.063 -0.109L0.501 0.214a0.073 0.073 0 0 0 -0.064 -0.036zm0.001 0.219 0.238 0.413H0.199zM1.4 0.507v0.245h0.525v-0.245zm0.77 0v0.245h1.33v-0.245zM0.073 1.388A0.073 0.073 0 0 0 0 1.461v0.583a0.073 0.073 0 0 0 0.073 0.073h0.729A0.073 0.073 0 0 0 0.875 2.045V1.461a0.073 0.073 0 0 0 -0.073 -0.073zm0.073 0.146h0.583v0.438H0.146zM1.4 1.674v0.245h0.945v-0.245zm1.19 0v0.245h0.91v-0.245zM0.438 2.447c-0.241 0 -0.438 0.197 -0.438 0.438 0 0.241 0.197 0.438 0.438 0.438s0.438 -0.197 0.438 -0.438c0 -0.241 -0.197 -0.438 -0.438 -0.438zm0 0.146a0.291 0.291 0 0 1 0.292 0.292 0.291 0.291 0 0 1 -0.292 0.292 0.291 0.291 0 0 1 -0.292 -0.292A0.291 0.291 0 0 1 0.438 2.593zM1.4 2.842v0.245h0.525v-0.245zm0.77 0v0.245h1.33v-0.245z" fill="#000000" fill-rule="evenodd"/></svg>';

  this.toolbar.registerIconFromText("CustomCollection", "CustomIcon", icon);

}
```

```ts
public toolbarCustomIconOnViewInit(): void {

  toolbar.registerIconFromDataURL("CustomCollection", "CustomIcon", "https://www.svgrepo.com/show/678/calculator.svg");

}
```

### Vertical Orientation

By default the Angular Toolbar is shown horizontally, but it also has the ability to shown vertically by setting the [`orientation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html#orientation) property.

```html
<igx-toolbar orientation="Vertical" />
```

The following example demonstrates the vertical orientation of the Angular Toolbar.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxToolbarModule } from 'igniteui-angular-layouts';
import { IgxDataChartToolbarModule, IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartAnnotationModule, IgxDataChartInteractivityModule, IgxAnnotationLayerProxyModule, IgxDataChartCategoryTrendLineModule } from 'igniteui-angular-charts';

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
    IgxToolbarModule,
    IgxDataChartToolbarModule,
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxDataChartAnnotationModule,
    IgxDataChartInteractivityModule,
    IgxAnnotationLayerProxyModule,
    IgxDataChartCategoryTrendLineModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';
import { IgxToolbarComponent } from 'igniteui-angular-layouts';
import { IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxLineSeriesComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("toolbar", { static: true } )
	private toolbar: IgxToolbarComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxDataChartComponent
	@ViewChild("xAxis", { static: true } )
	private xAxis: IgxCategoryXAxisComponent
	@ViewChild("yAxis", { static: true } )
	private yAxis: IgxNumericYAxisComponent
	@ViewChild("lineSeries1", { static: true } )
	private lineSeries1: IgxLineSeriesComponent
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
  <div class="aboveContent">
    <igx-toolbar
    name="toolbar"
    #toolbar
    [target]="chart"
    orientation="Vertical">
    </igx-toolbar>
  </div>
  <div class="container fill">
      <igx-data-chart
      isHorizontalZoomEnabled="true"
      name="chart"
      #chart>
          <igx-category-x-axis
          name="xAxis"
          #xAxis
          [dataSource]="countryRenewableElectricity"
          label="year">
          </igx-category-x-axis>
          <igx-numeric-y-axis
          name="yAxis"
          #yAxis
          title="TWh"
          labelLocation="OutsideRight">
          </igx-numeric-y-axis>
          <igx-line-series
          name="lineSeries1"
          #lineSeries1
          title="Electricity"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          [dataSource]="countryRenewableElectricity"
          valueMemberPath="america">
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


### Color Editor

You can add a custom color editor tool to the the Angular Toolbar, which will also work with the Command event to perform custom styling to your application.

```html
<igx-toolbar
  name="toolbar"
  #toolbar>
      <igx-tool-action-color-editor
      title="Series Brush"
      name="colorEditorTool"
      #colorEditorTool>
      </igx-tool-action-color-editor>
</igx-toolbar>
```

```ts
<igc-toolbar
  name="toolbar"
  id="toolbar">
      <igc-tool-action-color-editor
      title="Series Brush Color"
      name="colorEditorTool"
      id="colorEditorTool">
      </igc-tool-action-color-editor>
</igc-toolbar>
```

The following example demonstrates styling the Angular Data Chart series brush with the Color Editor tool. ```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxToolbarModule, IgxToolActionComboModule, IgxToolActionColorEditorModule } from 'igniteui-angular-layouts';
import { IgxDataChartToolbarModule, IgxDataLegendModule, IgxNumberAbbreviatorModule, IgxDataChartCategoryModule, IgxDataChartCoreModule, IgxDataChartAnnotationModule, IgxDataChartInteractivityModule } from 'igniteui-angular-charts';

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
    IgxToolbarModule,
    IgxToolActionComboModule,
    IgxToolActionColorEditorModule,
    IgxDataChartToolbarModule,
    IgxDataLegendModule,
    IgxNumberAbbreviatorModule,
    IgxDataChartCategoryModule,
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxDataChartAnnotationModule,
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
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';
import { IgxToolCommandEventArgs } from 'igniteui-angular-layouts';
import { IgxDataChartComponent, IgxSeriesComponent } from 'igniteui-angular-charts';
import { IgxToolbarComponent, IgxToolActionColorEditorComponent } from 'igniteui-angular-layouts';
import { IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxLineSeriesComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("toolbar", { static: true } )
	private toolbar: IgxToolbarComponent
	@ViewChild("colorEditorTool", { static: true } )
	private colorEditorTool: IgxToolActionColorEditorComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxDataChartComponent
	@ViewChild("xAxis", { static: true } )
	private xAxis: IgxCategoryXAxisComponent
	@ViewChild("yAxis", { static: true } )
	private yAxis: IgxNumericYAxisComponent
	@ViewChild("lineSeries1", { static: true } )
	private lineSeries1: IgxLineSeriesComponent
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

	public colorEditorToggleSeriesBrush({ sender, args }: { sender: any, args: IgxToolCommandEventArgs }): void {
	    var target = this.chart;
		var color = args.command.argumentsList[0].value;

		switch (args.command.commandId)
		{
			case "ToggleSeriesBrush":
				let series = target.contentSeries.first as IgxSeriesComponent;
				series.brush = color;
			break;
		}
	}

}
```
```html
<div class="container vertical sample">
  <div class="aboveContentSplit">
    <div class="aboveContentLeftContainer">
      <igx-toolbar
      name="toolbar"
      #toolbar
      [target]="chart"
      (onCommand)="this.colorEditorToggleSeriesBrush($event)">
          <igx-tool-action-color-editor
          title="Series Brush"
          name="colorEditorTool"
          #colorEditorTool
          commandId="ToggleSeriesBrush">
          </igx-tool-action-color-editor>
      </igx-toolbar>
    </div>
    <div class="aboveContentRightContainer">
      <!-- insert aboveContentRight -->
      <!-- end aboveContentRight -->
    </div>
  </div>
  <div class="container fill">
      <igx-data-chart
      isHorizontalZoomEnabled="true"
      name="chart"
      #chart>
          <igx-category-x-axis
          name="xAxis"
          #xAxis
          [dataSource]="countryRenewableElectricity"
          label="year">
          </igx-category-x-axis>
          <igx-numeric-y-axis
          name="yAxis"
          #yAxis
          title="TWh"
          labelLocation="OutsideRight">
          </igx-numeric-y-axis>
          <igx-line-series
          name="lineSeries1"
          #lineSeries1
          title="Electricity"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          [dataSource]="countryRenewableElectricity"
          valueMemberPath="america"
          markerType="None">
          </igx-line-series>
      </igx-data-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
.aboveContentSplit {
    display: flex;
    flex-direction: row;
}
.aboveContentLeftContainer {
    margin-left: 1.25rem;
    display: flex;
    flex-grow: 1;
    justify-content: flex-start;
    align-items: flex-end;
}
.aboveContentRightContainer {
    margin-right: 1.25rem;
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: flex-end;
}
```


<!-- ## Styling/Theming

The icon component can be styled by using it's `BaseTheme` property directly to the `Toolbar`.

```html
<igx-toolbar baseTheme="SlingshotDark" />
```

```html
<igc-toolbar base-theme="SlingshotDark" />
```

```razor
<IgbToolbar BaseTheme="BaseControlTheme.SlingshotDark" />
```

```tsx
<IgrToolbar baseTheme="SlingshotDark" />
```

<!-- The following example demonstrates the various theme options that can be applied.
`sample="/charts/toolbar/theming", height="600", alt="Angular Toolbar Styling/Theming"` -->

## API References

- [`IgxToolbarComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html)
- [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)

## Additional Resources

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
