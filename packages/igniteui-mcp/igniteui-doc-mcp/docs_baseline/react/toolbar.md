---
title: React Toolbar Component | Ignite UI for React
_description: See how you can easily get started with React Toolbar Component. Compatible with the Data Chart. Extend your .
_keywords: Ignite UI for React, UI controls, React widgets, web widgets, UI widgets, React, Native React Components Suite, Native React Controls, Native React Components Library, React Toolbar components, React Toolbar controls
_license: commercial
mentionedTypes: ["Toolbar", "ToolAction", "DomainChart", "CategoryChart", "XamDataChart", "TrendLineType"]
_tocName: Toolbar
_premium: true
---

# React Toolbar Overview

The React Toolbar component is a companion container for UI operations to be used primarily with our charting components. The toolbar will dynamically update with a preset of properties and tool items when linked to our [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) or [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) components. You'll be able to create custom tools for your project allowing end users to provide changes, offering an endless amount of customization.

## React Toolbar Example

```typescript
export class CountryRenewableElectricityItem {
    public constructor(init: Partial<CountryRenewableElectricityItem>) {
        Object.assign(this, init);
    }

    public year: string;
    public europe: number;
    public china: number;
    public america: number;

}
export class CountryRenewableElectricity extends Array<CountryRenewableElectricityItem> {
    public constructor(items: Array<CountryRenewableElectricityItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryRenewableElectricityItem({ year: `2009`, europe: 34, china: 21, america: 19 }),
                new CountryRenewableElectricityItem({ year: `2010`, europe: 43, china: 26, america: 24 }),
                new CountryRenewableElectricityItem({ year: `2011`, europe: 66, china: 29, america: 28 }),
                // ... 9 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrLegendModule, IgrCategoryChartModule, IgrCategoryChartToolbarModule } from 'igniteui-react-charts';
import { IgrToolbarModule } from 'igniteui-react-layouts';
import { IgrCheckboxListModule } from 'igniteui-react-data-grids';
import { IgrLegend, IgrCategoryChart } from 'igniteui-react-charts';
import { IgrToolbar } from 'igniteui-react-layouts';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';

const mods: any[] = [
    IgrLegendModule,
    IgrToolbarModule,
    IgrCategoryChartModule,
    IgrCategoryChartToolbarModule,
    IgrCheckboxListModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrLegend
    private legendRef(r: IgrLegend) {
        this.legend = r;
        this.setState({});
    }
    private toolbar: IgrToolbar
    private toolbarRef(r: IgrToolbar) {
        this.toolbar = r;
        this.setState({});
    }
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.toolbarRef = this.toolbarRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Renewable Electricity Generated
            </div>

            <div className="aboveContentSplit">
                <div className="aboveContentLeftContainer">
                    <div>
                        <IgrToolbar
                            ref={this.toolbarRef}
                            target={this.chart}
                            orientation="Horizontal">
                        </IgrToolbar>
                    </div>
                </div>
                <div className="aboveContentRightContainer">
                    <div>
                        <IgrLegend
                            ref={this.legendRef}
                            orientation="Horizontal">
                        </IgrLegend>
                    </div>
                </div>
            </div>

            <div className="container fill">
                <IgrCategoryChart
                    ref={this.chartRef}
                    chartType="Line"
                    isHorizontalZoomEnabled="true"
                    isVerticalZoomEnabled="true"
                    dataSource={this.countryRenewableElectricity}
                    includedProperties={["year", "europe", "china", "america"]}
                    legend={this.legend}
                    yAxisTitle="TWh"
                    yAxisTitleLeftMargin="10"
                    yAxisTitleRightMargin="5"
                    yAxisLabelLeftMargin="0"
                    yAxisLabelLocation="OutsideRight"
                    isTransitionInEnabled="true">
                </IgrCategoryChart>
            </div>
        </div>
        );
    }

    private _countryRenewableElectricity: CountryRenewableElectricity = null;
    public get countryRenewableElectricity(): CountryRenewableElectricity {
        if (this._countryRenewableElectricity == null)
        {
            this._countryRenewableElectricity = new CountryRenewableElectricity();
        }
        return this._countryRenewableElectricity;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## Dependencies

Install the Ignite UI for React layouts, inputs, charts and core packages:

```cmd
npm install igniteui-react-layouts
npm install igniteui-react-inputs
npm install igniteui-react-charts
npm install igniteui-react-core
```

The following modules are required when using the [`IgrToolbar`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolbar.html) with the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) component and it's features.

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

## Usage

### Tool Actions

The following is a list of the different [`IgrToolAction`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolaction.html) items that you can add to the Toolbar.

- [`IgrToolActionButton`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolactionbutton.html)
- [`IgrToolActionCheckbox`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolactioncheckbox.html)
- [`IgrToolActionIconButton`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolactioniconbutton.html)
- [`IgrToolActionIconMenu`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolactioniconmenu.html)
- [`IgrToolActionLabel`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolactionlabel.html)
- [`IgrToolActionNumberInput`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolactionnumberinput.html)
- [`IgrToolActionRadio`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolactionradio.html)
- [`IgrToolActionSubPanel`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolactionsubpanel.html)

Each of these tools exposes an `OnCommand` event that is triggered by mouse click. Note, the [`IgrToolActionIconMenu`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolactioniconmenu.html) is a wrapper for other tools that can also be wrapped inside a [`IgrToolActionIconMenu`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolactioniconmenu.html).

New and existing tools can be repositioned and marked hidden using the [`overlayId`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolaction.html#overlayId), [`beforeId`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolaction.html#beforeId) and [`afterId`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolaction.html#afterId) properties on the [`IgrToolAction`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolaction.html) object. ToolActions also expose a [`visibility`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolaction.html#visibility) property.

The following example demonstrates a couple of features. First you can group tools together in the [`IgrToolActionSubPanel`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolactionsubpanel.html) including hiding built in tools such as the **ZoomReset** and **AnalyzeMenu** menu tool actions. In this example a new instance of the **ZoomReset** tool action within the **ZoomMenu** by using the the [`afterId`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolaction.html#afterId) property and assigning that to **ZoomOut** to be precise with it's placement. It is also highlighted via the [`isHighlighted`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolaction.html#isHighlighted) property on the tool.

```typescript
export class CountryRenewableElectricityItem {
    public constructor(init: Partial<CountryRenewableElectricityItem>) {
        Object.assign(this, init);
    }

    public year: string;
    public europe: number;
    public china: number;
    public america: number;

}
export class CountryRenewableElectricity extends Array<CountryRenewableElectricityItem> {
    public constructor(items: Array<CountryRenewableElectricityItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryRenewableElectricityItem({ year: `2009`, europe: 34, china: 21, america: 19 }),
                new CountryRenewableElectricityItem({ year: `2010`, europe: 43, china: 26, america: 24 }),
                new CountryRenewableElectricityItem({ year: `2011`, europe: 66, china: 29, america: 28 }),
                // ... 9 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrToolbarModule } from 'igniteui-react-layouts';
import { IgrDataChartToolbarModule, IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartAnnotationModule, IgrDataChartInteractivityModule, IgrDataChartCategoryTrendLineModule } from 'igniteui-react-charts';
import { IgrToolbar, IgrToolActionIconMenu, IgrToolActionGroupHeader, IgrToolActionSubPanel, IgrToolActionCheckbox, IgrToolActionLabel } from 'igniteui-react-layouts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrLineSeries } from 'igniteui-react-charts';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';
import { IgrToolCommandEventArgs } from 'igniteui-react-layouts';
import { IgrSeries, IgrDataToolTipLayer, IgrCrosshairLayer, IgrFinalValueLayer } from 'igniteui-react-charts';

const mods: any[] = [
    IgrToolbarModule,
    IgrDataChartToolbarModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartAnnotationModule,
    IgrDataChartInteractivityModule,
    IgrDataChartCategoryTrendLineModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private toolbar: IgrToolbar
    private toolbarRef(r: IgrToolbar) {
        this.toolbar = r;
        this.setState({});
    }
    private menuForSubPanelTool: IgrToolActionIconMenu
    private subPanelGroup: IgrToolActionGroupHeader
    private customSubPanelTools: IgrToolActionSubPanel
    private enableTooltipsLabel: IgrToolActionCheckbox
    private enableCrosshairsLabel: IgrToolActionCheckbox
    private enableFinalValuesLabel: IgrToolActionCheckbox
    private zoomResetLabel: IgrToolActionLabel
    private zoomResetHidden: IgrToolActionLabel
    private analyzeMenu: IgrToolActionIconMenu
    private copyMenu: IgrToolActionLabel
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrCategoryXAxis
    private yAxis: IgrNumericYAxis
    private lineSeries1: IgrLineSeries
    private lineSeries2: IgrLineSeries
    private lineSeries3: IgrLineSeries

    constructor(props: any) {
        super(props);

        this.toolbarRef = this.toolbarRef.bind(this);
        this.toolbarToggleAnnotations = this.toolbarToggleAnnotations.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="aboveContentSplit">
                <div className="aboveContentLeftContainer">
                    <div>
                        <IgrToolbar
                            ref={this.toolbarRef}
                            target={this.chart}
                            orientation="Horizontal"
                            onCommand={this.toolbarToggleAnnotations}>
                            <IgrToolActionIconMenu
                                name="MenuForSubPanelTool"
                                iconCollectionName="ChartToolbarIcons"
                                iconName="analyze">
                                <IgrToolActionGroupHeader
                                    name="SubPanelGroup"
                                    closeOnExecute="true"
                                    title="Visualizations"
                                    subtitle="Layers">
                                </IgrToolActionGroupHeader>
                                <IgrToolActionSubPanel
                                    name="CustomSubPanelTools">
                                    <IgrToolActionCheckbox
                                        name="EnableTooltipsLabel"
                                        title="Enable Tooltips"
                                        commandId="EnableTooltips">
                                    </IgrToolActionCheckbox>
                                    <IgrToolActionCheckbox
                                        name="EnableCrosshairsLabel"
                                        title="Enable Crosshairs"
                                        commandId="EnableCrosshairs">
                                    </IgrToolActionCheckbox>
                                    <IgrToolActionCheckbox
                                        name="EnableFinalValuesLabel"
                                        title="Enable Final Values"
                                        commandId="EnableFinalValues">
                                    </IgrToolActionCheckbox>
                                </IgrToolActionSubPanel>
                            </IgrToolActionIconMenu>
                            <IgrToolActionLabel
                                name="zoomResetLabel"
                                title="Reset"
                                afterId="ZoomOut"
                                iconName="reset"
                                iconCollectionName="ChartToolbarIcons"
                                commandId="ZoomReset"
                                isHighlighted="true">
                            </IgrToolActionLabel>
                            <IgrToolActionLabel
                                name="zoomResetHidden"
                                overlayId="ZoomReset"
                                visibility="Collapsed">
                            </IgrToolActionLabel>
                            <IgrToolActionIconMenu
                                name="AnalyzeMenu"
                                overlayId="AnalyzeMenu"
                                visibility="Collapsed">
                            </IgrToolActionIconMenu>
                            <IgrToolActionLabel
                                name="CopyMenu"
                                overlayId="CopyMenu"
                                visibility="Collapsed">
                            </IgrToolActionLabel>
                        </IgrToolbar>
                    </div>
                </div>
            </div>

            <div className="container fill">
                <IgrDataChart
                    computedPlotAreaMarginMode="Series"
                    isHorizontalZoomEnabled="true"
                    isVerticalZoomEnabled="true"
                    ref={this.chartRef}>
                    <IgrCategoryXAxis
                        name="xAxis"
                        dataSource={this.countryRenewableElectricity}
                        label="year">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        title="TWh"
                        labelLocation="OutsideRight">
                    </IgrNumericYAxis>
                    <IgrLineSeries
                        name="lineSeries1"
                        title="Electricity"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.countryRenewableElectricity}
                        valueMemberPath="america">
                    </IgrLineSeries>
                    <IgrLineSeries
                        name="LineSeries2"
                        title="Electricity"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.countryRenewableElectricity}
                        valueMemberPath="europe">
                    </IgrLineSeries>
                    <IgrLineSeries
                        name="LineSeries3"
                        title="Electricity"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.countryRenewableElectricity}
                        valueMemberPath="china">
                    </IgrLineSeries>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _countryRenewableElectricity: CountryRenewableElectricity = null;
    public get countryRenewableElectricity(): CountryRenewableElectricity {
        if (this._countryRenewableElectricity == null)
        {
            this._countryRenewableElectricity = new CountryRenewableElectricity();
        }
        return this._countryRenewableElectricity;
    }


    public toolbarToggleAnnotations(sender: any, args: IgrToolCommandEventArgs): void {
        var target = this.chart;
        switch (args.command.commandId)
    	{
    		case "EnableTooltips":
    			var enable = args.command.argumentsList[0].value as boolean;
    			if (enable)
    			{
    				target.series.add(new IgrDataToolTipLayer({ name: "tooltipLayer" }));
    			}
    			else
    			{
    				var toRemove = null;
    				for (var i = 0; i < target.actualSeries.length; i++) {
                        let s = target.actualSeries[i] as IgrSeries;
    					if (s instanceof IgrDataToolTipLayer)
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
    				target.series.add(new IgrCrosshairLayer({ name: "crosshairLayer" }));
    			}
    			else
    			{
    				var toRemove = null;
    				for (var i = 0; i < target.actualSeries.length; i++) {
    					let s = target.actualSeries[i] as IgrSeries;
    					if (s instanceof IgrCrosshairLayer)
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
    				target.series.add(new IgrFinalValueLayer({ name: "finalValueLayer" }));
    			}
    			else
    			{
    				var toRemove = null;
    				for (var i = 0; i < target.actualSeries.length; i++) {
    					let s = target.actualSeries[i] as IgrSeries;
    					if (s instanceof IgrFinalValueLayer)
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

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

### React Data Chart Integration

The React Toolbar contains a `Target` property. This is used to link a component, such as the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) as shown in the code below:

```tsx
  private toolbar: IgrToolbar
  private toolbarRef(r: IgrToolbar) {
      this.toolbar = r;
      this.setState({});
  }
  private chart: IgrDataChart
  private chartRef(r: IgrDataChart) {
      this.chart = r;
      this.toolbar.target = this.chart;
      this.setState({});
  }
  public render(): JSX.Element {
        return (
      <div>
        <IgrToolbar
          ref={this.toolbarRef}>
        </IgrToolbar>
      </div>

      <div>
        <IgrDataChart
          ref={this.chartRef}>
        </IgrDataChart>
      </div>
    );
  }
```

Several pre-existing [`IgrToolAction`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolaction.html) items and menus become available when the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) is linked with the Toolbar. Here is a list of the built-in React [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) Tool Actions and their associated [`overlayId`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolaction.html#overlayId):

Zooming Actions

- `ZoomMenu`: A [`IgrToolActionIconMenu`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolactioniconmenu.html) that exposes three [`IgrToolActionLabel`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolactionlabel.html) items to invoke the [`zoomIn`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#zoomIn) and [`zoomOut`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#zoomOut) methods on the chart for increasing/decreasing the chart's zoom level including `ZoomReset`, a [`IgrToolActionLabel`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolactionlabel.html) that invokes the [`resetZoom`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#resetZoom) method on the chart to reset the zoom level to it's default position.

Trend Actions

- `AnalyzeMenu`: A [`IgrToolActionIconMenu`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolactioniconmenu.html) that contains several options for configuring different options of the chart.
- `AnalyzeHeader`: A sub section header.
  - `LinesMenu`: A sub menu containing various tools for showing different dashed horizontal lines on the chart.
  - `LinesHeader`: A sub menu section header for the following three tools:
    - `MaxValue`: A [`IgrToolActionCheckbox`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolactioncheckbox.html) that displays a dashed horizontal line along the yAxis at the maximum value of the series.
    - `MinValue`: A [`IgrToolActionCheckbox`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolactioncheckbox.html) that displays a dashed horizontal line along the yAxis at the minimum value of the series.
    - `Average`:  A [`IgrToolActionCheckbox`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolactioncheckbox.html) that displays a dashed horizontal line along the yAxis at the average value of the series.
  - `TrendsMenu`: A sub menu containing tools for applying various trendlines to the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) plot area.
  - `TrendsHeader`: A sub menu section header for the following three tools:
    - **Exponential**: A [`IgrToolActionRadio`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolactionradio.html) that sets the [`trendLineType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#trendLineType) on each series in the chart to **ExponentialFit**.
    - **Linear**: A [`IgrToolActionRadio`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolactionradio.html) that sets the [`trendLineType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#trendLineType) on each series in the chart to **LinearFit**.
    - **Logarithmic**: A [`IgrToolActionRadio`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolactionradio.html) that sets the [`trendLineType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#trendLineType) on each series in the the chart to **LogarithmicFit**.
- `HelpersHeader`: A sub section header.
  - `SeriesAvg`: A [`IgrToolActionCheckbox`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolactioncheckbox.html) that adds or removes a [`IgrValueLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrvaluelayer.html) to the chart's series collection using the [`ValueLayerValueMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.valuelayervaluemode.html) of type [`Average`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.valuelayervaluemode.html#Average).
  - `ValueLabelsMenu`: A sub menu containing various tools for showing different annotations on the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html)'s plot area.
  - `ValueLabelsHeader`: A sub menu section header for the following tools:
    - `ShowValueLabels`: A [`IgrToolActionCheckbox`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolactioncheckbox.html) that toggles data point values by using a [`IgrCalloutLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcalloutlayer.html).
    - `ShowLastValueLabel`: A [`IgrToolActionCheckbox`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolactioncheckbox.html) that toggles final value axis annotations by using a [`IgrFinalValueLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinalvaluelayer.html).
- `ShowCrosshairs`: A [`IgrToolActionCheckbox`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolactioncheckbox.html) that toggles mouse-over crosshair annotations via the chart's [`crosshairsDisplayMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#crosshairsDisplayMode) property.
- `ShowGridlines`: A [`IgrToolActionCheckbox`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolactioncheckbox.html) that toggles extra gridlines by applying a `MajorStroke` to the X-Axis.

Save to Image Action

- `CopyAsImage`: A [`IgrToolActionLabel`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolactionlabel.html) that exposes an option to copy the chart to the clipboard.
- `CopyHeader`: A sub section header.

### SVG Icons

When adding tools manually, icons can be assigned using the `RenderIconFromText` method. There are three parameters to pass in this method. The first is the icon collection name defined on the tool eg. [`iconCollectionName`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolaction.html#iconCollectionName). The second is the name of the icon defined on the tool eg. [`iconName`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolaction.html#iconName), followed by adding the SVG string.

### Data URL Icons

Similarly to adding svg, you can also add an Icon image from a URL via the [`registerIconFromDataURL`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolbar.html#registerIconFromDataURL). The method's third parameter would be used to enter a string URL.

The following snippet shows both methods of adding an Icon.

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

```tsx
<IgrToolbar orientation="Vertical" />
```

### Vertical Orientation

By default the React Toolbar is shown horizontally, but it also has the ability to shown vertically by setting the [`orientation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolbar.html#orientation) property.

```tsx
<IgrToolbar orientation="Vertical" />
```

The following example demonstrates the vertical orientation of the React Toolbar.

```typescript
export class CountryRenewableElectricityItem {
    public constructor(init: Partial<CountryRenewableElectricityItem>) {
        Object.assign(this, init);
    }

    public year: string;
    public europe: number;
    public china: number;
    public america: number;

}
export class CountryRenewableElectricity extends Array<CountryRenewableElectricityItem> {
    public constructor(items: Array<CountryRenewableElectricityItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryRenewableElectricityItem({ year: `2009`, europe: 34, china: 21, america: 19 }),
                new CountryRenewableElectricityItem({ year: `2010`, europe: 43, china: 26, america: 24 }),
                new CountryRenewableElectricityItem({ year: `2011`, europe: 66, china: 29, america: 28 }),
                // ... 9 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrToolbarModule } from 'igniteui-react-layouts';
import { IgrDataChartToolbarModule, IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartAnnotationModule, IgrDataChartInteractivityModule, IgrAnnotationLayerProxyModule, IgrDataChartCategoryTrendLineModule } from 'igniteui-react-charts';
import { IgrToolbar } from 'igniteui-react-layouts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrLineSeries } from 'igniteui-react-charts';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';

const mods: any[] = [
    IgrToolbarModule,
    IgrDataChartToolbarModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartAnnotationModule,
    IgrDataChartInteractivityModule,
    IgrAnnotationLayerProxyModule,
    IgrDataChartCategoryTrendLineModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private toolbar: IgrToolbar
    private toolbarRef(r: IgrToolbar) {
        this.toolbar = r;
        this.setState({});
    }
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrCategoryXAxis
    private yAxis: IgrNumericYAxis
    private lineSeries1: IgrLineSeries

    constructor(props: any) {
        super(props);

        this.toolbarRef = this.toolbarRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="aboveContent">
                <IgrToolbar
                    ref={this.toolbarRef}
                    target={this.chart}
                    orientation="Vertical">
                </IgrToolbar>
            </div>

            <div className="container fill">
                <IgrDataChart
                    isHorizontalZoomEnabled="true"
                    ref={this.chartRef}>
                    <IgrCategoryXAxis
                        name="xAxis"
                        dataSource={this.countryRenewableElectricity}
                        label="year">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        title="TWh"
                        labelLocation="OutsideRight">
                    </IgrNumericYAxis>
                    <IgrLineSeries
                        name="lineSeries1"
                        title="Electricity"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.countryRenewableElectricity}
                        valueMemberPath="america">
                    </IgrLineSeries>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _countryRenewableElectricity: CountryRenewableElectricity = null;
    public get countryRenewableElectricity(): CountryRenewableElectricity {
        if (this._countryRenewableElectricity == null)
        {
            this._countryRenewableElectricity = new CountryRenewableElectricity();
        }
        return this._countryRenewableElectricity;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

### Color Editor

You can add a custom color editor tool to the the React Toolbar, which will also work with the Command event to perform custom styling to your application.

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

```tsx
<IgrToolbar
    ref={this.toolbarRef}
    target={this.chart}>
    <IgrToolActionColorEditor
        title="Series Brush Color"
        name="colorEditorTool">
    </IgrToolActionColorEditor>
</IgrToolbar>
```

The following example demonstrates styling the React Data Chart series brush with the Color Editor tool. ```typescript
export class CountryRenewableElectricityItem {
    public constructor(init: Partial<CountryRenewableElectricityItem>) {
        Object.assign(this, init);
    }

    public year: string;
    public europe: number;
    public china: number;
    public america: number;

}
export class CountryRenewableElectricity extends Array<CountryRenewableElectricityItem> {
    public constructor(items: Array<CountryRenewableElectricityItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryRenewableElectricityItem({ year: `2009`, europe: 34, china: 21, america: 19 }),
                new CountryRenewableElectricityItem({ year: `2010`, europe: 43, china: 26, america: 24 }),
                new CountryRenewableElectricityItem({ year: `2011`, europe: 66, china: 29, america: 28 }),
                // ... 9 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrToolbarModule, IgrToolActionComboModule, IgrToolActionColorEditorModule } from 'igniteui-react-layouts';
import { IgrDataChartToolbarModule, IgrDataLegendModule, IgrNumberAbbreviatorModule, IgrDataChartCategoryModule, IgrDataChartCoreModule, IgrDataChartAnnotationModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrToolbar, IgrToolActionColorEditor } from 'igniteui-react-layouts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrLineSeries } from 'igniteui-react-charts';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';
import { IgrToolCommandEventArgs } from 'igniteui-react-layouts';
import { IgrSeries } from 'igniteui-react-charts';

const mods: any[] = [
    IgrToolbarModule,
    IgrToolActionComboModule,
    IgrToolActionColorEditorModule,
    IgrDataChartToolbarModule,
    IgrDataLegendModule,
    IgrNumberAbbreviatorModule,
    IgrDataChartCategoryModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartAnnotationModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private toolbar: IgrToolbar
    private toolbarRef(r: IgrToolbar) {
        this.toolbar = r;
        this.setState({});
    }
    private colorEditorTool: IgrToolActionColorEditor
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrCategoryXAxis
    private yAxis: IgrNumericYAxis
    private lineSeries1: IgrLineSeries

    constructor(props: any) {
        super(props);

        this.toolbarRef = this.toolbarRef.bind(this);
        this.colorEditorToggleSeriesBrush = this.colorEditorToggleSeriesBrush.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="aboveContentSplit">
                <div className="aboveContentLeftContainer">
                    <div>
                        <IgrToolbar
                            ref={this.toolbarRef}
                            target={this.chart}
                            onCommand={this.colorEditorToggleSeriesBrush}>
                            <IgrToolActionColorEditor
                                title="Series Brush"
                                name="colorEditorTool"
                                commandId="ToggleSeriesBrush">
                            </IgrToolActionColorEditor>
                        </IgrToolbar>
                    </div>
                </div>
            </div>

            <div className="container fill">
                <IgrDataChart
                    isHorizontalZoomEnabled="true"
                    ref={this.chartRef}>
                    <IgrCategoryXAxis
                        name="xAxis"
                        dataSource={this.countryRenewableElectricity}
                        label="year">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        title="TWh"
                        labelLocation="OutsideRight">
                    </IgrNumericYAxis>
                    <IgrLineSeries
                        name="lineSeries1"
                        title="Electricity"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.countryRenewableElectricity}
                        valueMemberPath="america"
                        markerType="None">
                    </IgrLineSeries>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _countryRenewableElectricity: CountryRenewableElectricity = null;
    public get countryRenewableElectricity(): CountryRenewableElectricity {
        if (this._countryRenewableElectricity == null)
        {
            this._countryRenewableElectricity = new CountryRenewableElectricity();
        }
        return this._countryRenewableElectricity;
    }


    public colorEditorToggleSeriesBrush(sender: any, args: IgrToolCommandEventArgs): void {
        var target = this.chart;

    	switch (args.command.commandId)
    	{
            case "ToggleSeriesBrush":
                var color = args.command.argumentsList[0].value
                var series = target.contentSeries[0] as IgrSeries;
                series.brush = color as any;
            break;
        }
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
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
`sample="/charts/toolbar/theming", height="600", alt="React Toolbar Styling/Theming"` -->

## API References

- [`IgrToolbar`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolbar.html)
- [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
