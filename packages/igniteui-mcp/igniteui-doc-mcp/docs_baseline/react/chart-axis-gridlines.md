---
title: "React Axis Gridlines | Data Visualization | Infragistics"
description: Infragistics' React Axis Gridlines
keywords: "React Axis, Gridlines, Infragistics"
license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "XYChart", "DomainChart", "DataChart", "NumericXAxis", "NumericYAxis", "NumericAxisBase" ]
namespace: Infragistics.Controls.Charts
llms:
  description: "All Ignite UI for React charts include built-in capability to modify appearance of axis lines as well as frequency of major/minor gridlines and tickmarks that are rendered on the X-Axis and Y-Axis."
_tocName: Axis Gridlines
_premium: true
---
# React Axis Gridlines

All Ignite UI for React charts include built-in capability to modify appearance of axis lines as well as frequency of major/minor gridlines and tickmarks that are rendered on the X-Axis and Y-Axis.

**Note:** 
the following examples can be applied to `IgrCategoryChart` as well as `IgrFinancialChart` controls.

Axis major gridlines are long lines that extend horizontally along the Y-Axis or vertically along the X-Axis from locations of axis labels, and they render through the plot area of the chart. Axis minor gridlines are lines that render between axis major gridlines.

Axis tickmarks are displayed along all horizontal and vertical axes at each label at all major line positions of the React chart.

## React Axis Gridlines Example

This example shows how configure the axis gridline to display major and minor gridlines at specified intervals:

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

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrLegendModule, IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrLegend, IgrCategoryChart } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, LegendDescriptionModule, CategoryChartDescriptionModule } from 'igniteui-react-core';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrLegendModule,
    IgrCategoryChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrLegend
    private legendRef(r: IgrLegend) {
        this.legend = r;
        this.setState({});
    }
    private propertyEditorPanel1: IgrPropertyEditorPanel
    private propertyEditorPanel1Ref(r: IgrPropertyEditorPanel) {
        this.propertyEditorPanel1 = r;
        this.setState({});
    }
    private xAxisStroke: IgrPropertyEditorPropertyDescription
    private xAxisMajorStroke: IgrPropertyEditorPropertyDescription
    private yAxisStroke: IgrPropertyEditorPropertyDescription
    private yAxisMajorStroke: IgrPropertyEditorPropertyDescription
    private yAxisMinorStroke: IgrPropertyEditorPropertyDescription
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.propertyEditorPanel1Ref = this.propertyEditorPanel1Ref.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    componentRenderer={this.renderer}
                    target={this.chart}
                    descriptionType="CategoryChart"
                    isHorizontal="true"
                    isWrappingEnabled="true"
                    ref={this.propertyEditorPanel1Ref}>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="XAxisStroke"
                        name="XAxisStroke"
                        label="X Axis Stroke"
                        shouldOverrideDefaultEditor="true"
                        valueType="EnumValue"
                        dropDownNames={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        dropDownValues={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        primitiveValue="gray">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="XAxisMajorStroke"
                        name="XAxisMajorStroke"
                        label="X Axis Major Stroke"
                        shouldOverrideDefaultEditor="true"
                        valueType="EnumValue"
                        dropDownNames={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        dropDownValues={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        primitiveValue="darkslategray">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="YAxisStroke"
                        name="YAxisStroke"
                        label="Y Axis Stroke"
                        shouldOverrideDefaultEditor="true"
                        valueType="EnumValue"
                        dropDownNames={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        dropDownValues={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        primitiveValue="gray">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="YAxisMajorStroke"
                        name="YAxisMajorStroke"
                        label="Y Axis Major Stroke"
                        shouldOverrideDefaultEditor="true"
                        valueType="EnumValue"
                        dropDownNames={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        dropDownValues={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        primitiveValue="darkslategray">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="YAxisMinorStroke"
                        name="YAxisMinorStroke"
                        label="Y Axis Minor Stroke"
                        shouldOverrideDefaultEditor="true"
                        valueType="EnumValue"
                        dropDownNames={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        dropDownValues={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        primitiveValue="gray">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="legend-title">
                Renewable Electricity Generated
            </div>

            <div className="legend">
                <IgrLegend
                    ref={this.legendRef}
                    orientation="Horizontal">
                </IgrLegend>
            </div>

            <div className="container fill">
                <IgrCategoryChart
                    ref={this.chartRef}
                    computedPlotAreaMarginMode="Series"
                    dataSource={this.countryRenewableElectricity}
                    includedProperties={["year", "europe", "china", "america"]}
                    chartType="Line"
                    legend={this.legend}
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    xAxisStroke="rgba(145, 145, 145, 1)"
                    xAxisStrokeThickness="2"
                    xAxisInterval="1"
                    xAxisMajorStroke="rgba(71, 71, 71, 1)"
                    xAxisMajorStrokeThickness="0.5"
                    yAxisStroke="gray"
                    yAxisStrokeThickness="2"
                    yAxisInterval="20"
                    yAxisMajorStroke="darkslategray"
                    yAxisMajorStrokeThickness="1"
                    yAxisMinorInterval="5"
                    yAxisMinorStroke="gray"
                    yAxisMinorStrokeThickness="0.5"
                    thickness="2">
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

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## React Axis Gridlines Properties

Setting the axis interval property specifies how often major gridlines and axis labels are rendered on an axis. Similarly, the axis minor interval property specifies how frequent minor gridlines are rendered on an axis.

In order to display minor gridlines that correspond to minor interval, you need to set `XAxisMinorStroke` and `XAxisMinorStrokeThickness` properties on the axis. This is because minor gridlines do not have a default color or thickness and they will not be displayed without first assigning them.

You can customize how the gridlines are displayed in your React chart by setting the following properties:

| Axis Visuals           | Type    | Property Names                                               | Description |
| -----------------------|---------|--------------------------------------------------------------|---------------- |
| Major Stroke Color     | string  | `XAxisMajorStroke` <br /> `YAxisMajorStroke`                   | These properties set the color of axis major gridlines. |
| Minor Stroke Color     | string  | `XAxisMinorStroke` <br /> `YAxisMinorStroke`                   | These properties set the color of axis minor gridlines. |
| Major Stroke Thickness | number  | `XAxisMajorStrokeThickness` <br /> `YAxisMajorStrokeThickness` | These properties set the thickness in pixels of the axis major gridlines. |
| Minor Stroke Thickness | number  | `XAxisMinorStrokeThickness` <br /> `YAxisMinorStrokeThickness` | These properties set the thickness in pixels of the axis minor gridlines. |
| Major Interval         | number  | `XAxisInterval` <br /> `YAxisInterval`                         | These properties set interval between axis major gridlines and labels. |
| Minor Interval         | number  | `XAxisMinorInterval` <br /> `YAxisMinorInterval`               | These properties set interval between axis minor gridlines, if used. |
| Axis Line Stroke Color | string  | `XAxisStroke` <br /> `YAxisStroke`                   | These properties set the color of an axis line. |
| Axis Stroke Thickness  | number  | `XAxisStrokeThickness` <br /> `YAxisStrokeThickness` | These properties set the thickness in pixels of an axis line. |

Regarding the Major and Minor Interval in the table above, it is important to note that the major interval for axis labels will also be set by this value, displaying one label at the point on the axis associated with the interval. The minor interval gridlines are always rendered between the major gridlines, and as such, the minor interval properties should always be set to something much smaller (usually 2-5 times smaller) than the value of the major Interval properties.

On category axes, the intervals are represented as an index between first item and last category item. Generally, this value should equal to 10-20% of total numbers of category items for the major Interval so that all axis labels fit on axis so that they are not clipped by other axis labels. For minor intervals, this is represented as a fraction of the major interval properties. This value generally should equal between 0.25 and 0.5.

On numeric axes, the interval values are represented as a double between axis minimum value and axis maximum value. By default, numeric axes will automatically calculate and find a nice and round interval based on axis minimum values and maximum value.

On date time axes, this value is represented as time span between axis minimum value and axis maximum value.

The following example demonstrates how to customize the gridlines by setting the properties above:

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

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrLegendModule, IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrLegend, IgrCategoryChart } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, LegendDescriptionModule, CategoryChartDescriptionModule } from 'igniteui-react-core';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrLegendModule,
    IgrCategoryChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrLegend
    private legendRef(r: IgrLegend) {
        this.legend = r;
        this.setState({});
    }
    private propertyEditorPanel1: IgrPropertyEditorPanel
    private propertyEditorPanel1Ref(r: IgrPropertyEditorPanel) {
        this.propertyEditorPanel1 = r;
        this.setState({});
    }
    private xAxisStroke: IgrPropertyEditorPropertyDescription
    private xAxisMajorStroke: IgrPropertyEditorPropertyDescription
    private yAxisStroke: IgrPropertyEditorPropertyDescription
    private yAxisMajorStroke: IgrPropertyEditorPropertyDescription
    private yAxisMinorStroke: IgrPropertyEditorPropertyDescription
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.propertyEditorPanel1Ref = this.propertyEditorPanel1Ref.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    componentRenderer={this.renderer}
                    target={this.chart}
                    descriptionType="CategoryChart"
                    isHorizontal="true"
                    isWrappingEnabled="true"
                    ref={this.propertyEditorPanel1Ref}>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="XAxisStroke"
                        name="XAxisStroke"
                        label="X Axis Stroke"
                        shouldOverrideDefaultEditor="true"
                        valueType="EnumValue"
                        dropDownNames={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        dropDownValues={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        primitiveValue="gray">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="XAxisMajorStroke"
                        name="XAxisMajorStroke"
                        label="X Axis Major Stroke"
                        shouldOverrideDefaultEditor="true"
                        valueType="EnumValue"
                        dropDownNames={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        dropDownValues={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        primitiveValue="darkslategray">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="YAxisStroke"
                        name="YAxisStroke"
                        label="Y Axis Stroke"
                        shouldOverrideDefaultEditor="true"
                        valueType="EnumValue"
                        dropDownNames={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        dropDownValues={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        primitiveValue="gray">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="YAxisMajorStroke"
                        name="YAxisMajorStroke"
                        label="Y Axis Major Stroke"
                        shouldOverrideDefaultEditor="true"
                        valueType="EnumValue"
                        dropDownNames={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        dropDownValues={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        primitiveValue="darkslategray">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="YAxisMinorStroke"
                        name="YAxisMinorStroke"
                        label="Y Axis Minor Stroke"
                        shouldOverrideDefaultEditor="true"
                        valueType="EnumValue"
                        dropDownNames={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        dropDownValues={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        primitiveValue="gray">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="legend-title">
                Renewable Electricity Generated
            </div>

            <div className="legend">
                <IgrLegend
                    ref={this.legendRef}
                    orientation="Horizontal">
                </IgrLegend>
            </div>

            <div className="container fill">
                <IgrCategoryChart
                    ref={this.chartRef}
                    computedPlotAreaMarginMode="Series"
                    dataSource={this.countryRenewableElectricity}
                    includedProperties={["year", "europe", "china", "america"]}
                    chartType="Line"
                    legend={this.legend}
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    xAxisStroke="rgba(145, 145, 145, 1)"
                    xAxisStrokeThickness="2"
                    xAxisInterval="1"
                    xAxisMajorStroke="rgba(71, 71, 71, 1)"
                    xAxisMajorStrokeThickness="0.5"
                    yAxisStroke="gray"
                    yAxisStrokeThickness="2"
                    yAxisInterval="20"
                    yAxisMajorStroke="darkslategray"
                    yAxisMajorStrokeThickness="1"
                    yAxisMinorInterval="5"
                    yAxisMinorStroke="gray"
                    yAxisMinorStrokeThickness="0.5"
                    thickness="2">
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

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

The axes of the `IgrDataChart` also have the ability to place a dash array on the major and minor gridlines by utilizing the `MajorStrokeDashArray` and `MinorStrokeDashArray` properties, respectively. The actual axis line can be dashed as well by setting the `StrokeDashArray` property of the corresponding axis. These properties take an array of numbers that will describe the length of the dashes for the corresponding grid lines.

The following example demonstrates a `IgrDataChart` with the above dash array properties set:

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
                new CountryRenewableElectricityItem(
                {
                    year: `2009`,
                    europe: 34,
                    china: 21,
                    america: 19
                }),
                new CountryRenewableElectricityItem(
                {
                    year: `2010`,
                    europe: 43,
                    china: 26,
                    america: 24
                }),
                new CountryRenewableElectricityItem(
                {
                    year: `2011`,
                    europe: 66,
                    china: 29,
                    america: 28
                }),
                // ... 9 more items
            ];
            super(...(newItems.slice(0, items)));
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

import { IgrLegendModule, IgrDataChartCategoryModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrLineSeries } from 'igniteui-react-charts';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';

const mods: any[] = [
    IgrLegendModule,
    IgrDataChartCategoryModule,
    IgrDataChartInteractivityModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrLegend
    private legendRef(r: IgrLegend) {
        this.legend = r;
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
    private lineSeries2: IgrLineSeries
    private lineSeries3: IgrLineSeries

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Renewable Electricity Generated
            </div>

            <div className="legend">
                <IgrLegend
                    ref={this.legendRef}
                    orientation="Horizontal">
                </IgrLegend>
            </div>

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    legend={this.legend}
                    computedPlotAreaMarginMode="Series">
                    <IgrCategoryXAxis
                        name="xAxis"
                        dataSource={this.countryRenewableElectricity}
                        label="year"
                        interval="1"
                        majorStroke="rgba(71, 71, 71, 1)"
                        majorStrokeThickness="0.5"
                        stroke="rgba(145, 145, 145, 1)"
                        strokeThickness="2"
                        strokeDashArray="5, 5"
                        majorStrokeDashArray="5, 5"
                        tickLength="0">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        stroke="gray"
                        strokeThickness="2"
                        interval="20"
                        majorStroke="darkslategray"
                        majorStrokeThickness="1"
                        minorInterval="5"
                        minorStroke="gray"
                        minorStrokeThickness="0.5"
                        strokeDashArray="5, 5"
                        majorStrokeDashArray="5, 5"
                        minorStrokeDashArray="2.5, 2.5"
                        tickLength="0">
                    </IgrNumericYAxis>
                    <IgrLineSeries
                        name="LineSeries1"
                        title="Europe"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        markerType="Circle"
                        dataSource={this.countryRenewableElectricity}
                        valueMemberPath="europe"
                        showDefaultTooltip="true">
                    </IgrLineSeries>
                    <IgrLineSeries
                        name="LineSeries2"
                        title="China"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        markerType="Circle"
                        dataSource={this.countryRenewableElectricity}
                        valueMemberPath="china"
                        showDefaultTooltip="true">
                    </IgrLineSeries>
                    <IgrLineSeries
                        name="LineSeries3"
                        title="America"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        markerType="Circle"
                        dataSource={this.countryRenewableElectricity}
                        valueMemberPath="america"
                        showDefaultTooltip="true">
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

## React Axis Tickmarks Example

Axis tick marks are enabled by setting the `XAxisTickLength` and `YAxisTickLength` properties to a value greater than 0. These properties specifies the length of the line segments forming the tick marks.

Tick marks are always extend from the axis line and point to the direction of the labels. Labels are offset by the value of the length of tickmarks to avoid overlapping. For example, with the `YAxisTickLength` property is set to 5, axis labels will be shifted left by that amount.

The following example demonstrates how to customize the tickmarks by setting the properties above:

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

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrLegendModule, IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrLegend, IgrCategoryChart } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, LegendDescriptionModule, CategoryChartDescriptionModule } from 'igniteui-react-core';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrLegendModule,
    IgrCategoryChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrLegend
    private legendRef(r: IgrLegend) {
        this.legend = r;
        this.setState({});
    }
    private propertyEditorPanel1: IgrPropertyEditorPanel
    private propertyEditorPanel1Ref(r: IgrPropertyEditorPanel) {
        this.propertyEditorPanel1 = r;
        this.setState({});
    }
    private xAxisTickLength: IgrPropertyEditorPropertyDescription
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.propertyEditorPanel1Ref = this.propertyEditorPanel1Ref.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    componentRenderer={this.renderer}
                    target={this.chart}
                    descriptionType="CategoryChart"
                    isHorizontal="true"
                    isWrappingEnabled="true"
                    ref={this.propertyEditorPanel1Ref}>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="XAxisTickLength"
                        name="XAxisTickLength"
                        label="X Axis Tick Length"
                        shouldOverrideDefaultEditor="true"
                        valueType="Slider"
                        min="0"
                        max="20"
                        primitiveValue="10">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="legend-title">
                Renewable Electricity Generated
            </div>

            <div className="legend">
                <IgrLegend
                    ref={this.legendRef}
                    orientation="Horizontal">
                </IgrLegend>
            </div>

            <div className="container fill">
                <IgrCategoryChart
                    ref={this.chartRef}
                    dataSource={this.countryRenewableElectricity}
                    includedProperties={["year", "europe", "china", "america"]}
                    legend={this.legend}
                    chartType="Line"
                    computedPlotAreaMarginMode="Series"
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    xAxisTickLength="10"
                    xAxisTickStrokeThickness="1"
                    xAxisTickStroke="gray"
                    yAxisTickLength="0"
                    yAxisTickStrokeThickness="0"
                    yAxisTickStroke="rgba(0, 0, 0, 0)">
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

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## React Axis Tickmarks Properties

You can customize how the axis tickmarks are displayed in our React chats by setting the following properties:

| Axis Visuals           | Type    | Property Names                                             | Description |
| -----------------------|---------|------------------------------------------------------------|------------------------- |
| Tick Stroke Color      | string  | `XAxisTickStroke` <br /> `YAxisTickStroke`                   | These properties set the color of the tickmarks. |
| Tick Stroke Thickness  | number  | `XAxisTickStrokeThickness` <br /> `YAxisTickStrokeThickness` | These properties set the thickness of the axis tick marks. |
| Tick Stroke Length     | number  | `XAxisTickLength` <br /> `YAxisTickLength`                   | These properties set the length of the axis tick marks. |

## Additional Resources

You can find more information about related chart features in these topics:

- [Axis Layout](chart-axis-layouts.md)
- [Axis Options](chart-axis-options.md)

## API References

The following is a list of API members mentioned in the above sections:

| `IgrDataChart`                                     | `IgrCategoryChart` or `IgrFinancialChart` |
| -------------------------------------------------- | ----------------------------------- |
| `Axes` -> `IgrNumericXAxis` -> `Interval`             | `XAxisInterval` (Major Interval) |
| `Axes` -> `IgrNumericYAxis` -> `Interval`             | `YAxisInterval` (Major Interval) |
| `Axes` -> `IgrNumericXAxis` -> `MinorInterval`        | `XAxisMinorInterval`    |
| `Axes` -> `IgrNumericYAxis` -> `MinorInterval`        | `YAxisMinorInterval`    |
| `Axes` -> `IgrNumericXAxis` -> `MajorStroke`          | `XAxisMajorStroke`    |
| `Axes` -> `IgrNumericYAxis` -> `MajorStroke`          | `YAxisMajorStroke`    |
| `Axes` -> `IgrNumericXAxis` -> `MajorStrokeThickness` | `XAxisMajorStrokeThickness` |
| `Axes` -> `IgrNumericYAxis` -> `MajorStrokeThickness` | `YAxisMajorStrokeThickness` |
| `Axes` -> `IgrNumericXAxis` -> `MinorStrokeThickness` | `XAxisMinorStrokeThickness` |
| `Axes` -> `IgrNumericYAxis` -> `MinorStrokeThickness` | `YAxisMinorStrokeThickness` |
| `Axes` -> `IgrNumericXAxis` -> `StrokeThickness`      | `XAxisStrokeThickness`   |
| `Axes` -> `IgrNumericYAxis` -> `StrokeThickness`      | `YAxisStrokeThickness`   |
| `Axes` -> `IgrNumericXAxis` -> `Stroke`               | `XAxisStroke` (Axis Line Color) |
| `Axes` -> `IgrNumericYAxis` -> `Stroke`               | `YAxisStroke` (Axis Line Color) |
| `Axes` -> `IgrNumericXAxis` -> `TickLength`           | `XAxisTickLength`    |
| `Axes` -> `IgrNumericYAxis` -> `TickLength`           | `YAxisTickLength`    |
| `Axes` -> `IgrNumericXAxis` -> `TickStroke`           | `XAxisTickStroke`    |
| `Axes` -> `IgrNumericYAxis` -> `TickStroke`           | `YAxisTickStroke`    |
| `Axes` -> `IgrNumericXAxis` -> `Strip`                | `XAxisStrip` (Space between Major Gridlines) |
| `Axes` -> `IgrNumericYAxis` -> `Strip`                | `YAxisStrip` (Space between Major Gridlines) |
