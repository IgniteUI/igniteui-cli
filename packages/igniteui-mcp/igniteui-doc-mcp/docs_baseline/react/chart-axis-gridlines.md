---
title: React Axis Gridlines | Data Visualization | Infragistics
_description: Infragistics' React Axis Gridlines
_keywords: React Axis, Gridlines, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "XYChart", "DomainChart", "XamDataChart", "NumericXAxis", "NumericYAxis", "NumericAxisBase" ]
namespace: Infragistics.Controls.Charts
_tocName: Axis Gridlines
_premium: true
---

# React Axis Gridlines

All Ignite UI for React charts include built-in capability to modify appearance of axis lines as well as frequency of major/minor gridlines and tickmarks that are rendered on the X-Axis and Y-Axis.

> [!Note]
> the following examples can be applied to [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) as well as [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html) controls.

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

<div class="divider--half"></div>

## React Axis Gridlines Properties

Setting the axis interval property specifies how often major gridlines and axis labels are rendered on an axis. Similarly, the axis minor interval property specifies how frequent minor gridlines are rendered on an axis.

In order to display minor gridlines that correspond to minor interval, you need to set [`xAxisMinorStroke`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisMinorStroke) and [`xAxisMinorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisMinorStrokeThickness) properties on the axis. This is because minor gridlines do not have a default color or thickness and they will not be displayed without first assigning them.

You can customize how the gridlines are displayed in your React chart by setting the following properties:

| Axis Visuals           | Type    | Property Names                                               | Description |
| -----------------------|---------|--------------------------------------------------------------|---------------- |
| Major Stroke Color     | string  | [`xAxisMajorStroke`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisMajorStroke) <br> [`yAxisMajorStroke`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisMajorStroke)                   | These properties set the color of axis major gridlines. |
| Minor Stroke Color     | string  | [`xAxisMinorStroke`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisMinorStroke) <br> [`yAxisMinorStroke`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisMinorStroke)                   | These properties set the color of axis minor gridlines. |
| Major Stroke Thickness | number  | [`xAxisMajorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisMajorStrokeThickness) <br> [`yAxisMajorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisMajorStrokeThickness) | These properties set the thickness in pixels of the axis major gridlines. |
| Minor Stroke Thickness | number  | [`xAxisMinorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisMinorStrokeThickness) <br> [`yAxisMinorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisMinorStrokeThickness) | These properties set the thickness in pixels of the axis minor gridlines. |
| Major Interval         | number  | [`xAxisInterval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#xAxisInterval) <br> [`yAxisInterval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html#yAxisInterval)                         | These properties set interval between axis major gridlines and labels. |
| Minor Interval         | number  | [`xAxisMinorInterval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#xAxisMinorInterval) <br> [`yAxisMinorInterval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html#yAxisMinorInterval)               | These properties set interval between axis minor gridlines, if used. |
| Axis Line Stroke Color | string  | [`xAxisStroke`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisStroke) <br> [`yAxisStroke`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisStroke)                   | These properties set the color of an axis line. |
| Axis Stroke Thickness  | number  | [`xAxisStrokeThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisStrokeThickness) <br> [`yAxisStrokeThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisStrokeThickness) | These properties set the thickness in pixels of an axis line. |

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

The axes of the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) also have the ability to place a dash array on the major and minor gridlines by utilizing the [`majorStrokeDashArray`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igraxis.html#majorStrokeDashArray) and [`minorStrokeDashArray`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igraxis.html#minorStrokeDashArray) properties, respectively. The actual axis line can be dashed as well by setting the [`strokeDashArray`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igraxis.html#strokeDashArray) property of the corresponding axis. These properties take an array of numbers that will describe the length of the dashes for the corresponding grid lines.

The following example demonstrates a [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) with the above dash array properties set:

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

<div class="divider--half"></div>

## React Axis Tickmarks Example

Axis tick marks are enabled by setting the [`xAxisTickLength`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisTickLength) and [`yAxisTickLength`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisTickLength) properties to a value greater than 0. These properties specifies the length of the line segments forming the tick marks.

Tick marks are always extend from the axis line and point to the direction of the labels. Labels are offset by the value of the length of tickmarks to avoid overlapping. For example, with the [`yAxisTickLength`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisTickLength) property is set to 5, axis labels will be shifted left by that amount.

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

<div class="divider--half"></div>

## React Axis Tickmarks Properties

You can customize how the axis tickmarks are displayed in our React chats by setting the following properties:

| Axis Visuals           | Type    | Property Names                                             | Description |
| -----------------------|---------|------------------------------------------------------------|------------------------- |
| Tick Stroke Color      | string  | [`xAxisTickStroke`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisTickStroke) <br> [`yAxisTickStroke`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisTickStroke)                   | These properties set the color of the tickmarks. |
| Tick Stroke Thickness  | number  | [`xAxisTickStrokeThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisTickStrokeThickness) <br> [`yAxisTickStrokeThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisTickStrokeThickness) | These properties set the thickness of the axis tick marks. |
| Tick Stroke Length     | number  | [`xAxisTickLength`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisTickLength) <br> [`yAxisTickLength`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisTickLength)                   | These properties set the length of the axis tick marks. |

## Additional Resources

You can find more information about related chart features in these topics:

- [Axis Layout](chart-axis-layouts.md)
- [Axis Options](chart-axis-options.md)

## API References

The following is a list of API members mentioned in the above sections:

| [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html)                                     | [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) or [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html) |
| -------------------------------------------------- | ----------------------------------- |
| `Axes` ➔ [`IgrNumericXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericxaxis.html) ➔ [`interval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericaxisbase.html#interval)             | [`xAxisInterval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#xAxisInterval) (Major Interval) |
| `Axes` ➔ [`IgrNumericYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericyaxis.html) ➔ [`interval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericaxisbase.html#interval)             | [`yAxisInterval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#yAxisInterval) (Major Interval) |
| `Axes` ➔ [`IgrNumericXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericxaxis.html) ➔ [`minorInterval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericaxisbase.html#minorInterval)        | [`xAxisMinorInterval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#xAxisMinorInterval)    |
| `Axes` ➔ [`IgrNumericYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericyaxis.html) ➔ [`minorInterval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericaxisbase.html#minorInterval)        | [`yAxisMinorInterval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#yAxisMinorInterval)    |
| `Axes` ➔ [`IgrNumericXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericxaxis.html) ➔ [`majorStroke`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igraxis.html#majorStroke)          | [`xAxisMajorStroke`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisMajorStroke)    |
| `Axes` ➔ [`IgrNumericYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericyaxis.html) ➔ [`majorStroke`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igraxis.html#majorStroke)          | [`yAxisMajorStroke`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisMajorStroke)    |
| `Axes` ➔ [`IgrNumericXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericxaxis.html) ➔ [`majorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igraxis.html#majorStrokeThickness) | [`xAxisMajorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisMajorStrokeThickness) |
| `Axes` ➔ [`IgrNumericYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericyaxis.html) ➔ [`majorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igraxis.html#majorStrokeThickness) | [`yAxisMajorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisMajorStrokeThickness) |
| `Axes` ➔ [`IgrNumericXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericxaxis.html) ➔ [`minorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igraxis.html#minorStrokeThickness) | [`xAxisMinorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisMinorStrokeThickness) |
| `Axes` ➔ [`IgrNumericYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericyaxis.html) ➔ [`minorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igraxis.html#minorStrokeThickness) | [`yAxisMinorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisMinorStrokeThickness) |
| `Axes` ➔ [`IgrNumericXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericxaxis.html) ➔ [`strokeThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igraxis.html#strokeThickness)      | [`xAxisStrokeThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisStrokeThickness)   |
| `Axes` ➔ [`IgrNumericYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericyaxis.html) ➔ [`strokeThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igraxis.html#strokeThickness)      | [`yAxisStrokeThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisStrokeThickness)   |
| `Axes` ➔ [`IgrNumericXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericxaxis.html) ➔ [`stroke`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igraxis.html#stroke)               | [`xAxisStroke`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisStroke) (Axis Line Color) |
| `Axes` ➔ [`IgrNumericYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericyaxis.html) ➔ [`stroke`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igraxis.html#stroke)               | [`yAxisStroke`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisStroke) (Axis Line Color) |
| `Axes` ➔ [`IgrNumericXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericxaxis.html) ➔ [`tickLength`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igraxis.html#tickLength)           | [`xAxisTickLength`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisTickLength)    |
| `Axes` ➔ [`IgrNumericYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericyaxis.html) ➔ [`tickLength`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igraxis.html#tickLength)           | [`yAxisTickLength`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisTickLength)    |
| `Axes` ➔ [`IgrNumericXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericxaxis.html) ➔ [`tickStroke`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igraxis.html#tickStroke)           | [`xAxisTickStroke`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisTickStroke)    |
| `Axes` ➔ [`IgrNumericYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericyaxis.html) ➔ [`tickStroke`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igraxis.html#tickStroke)           | [`yAxisTickStroke`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisTickStroke)    |
| `Axes` ➔ [`IgrNumericXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericxaxis.html) ➔ [`strip`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igraxis.html#strip)                | [`xAxisStrip`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisStrip) (Space between Major Gridlines) |
| `Axes` ➔ [`IgrNumericYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericyaxis.html) ➔ [`strip`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igraxis.html#strip)                | [`yAxisStrip`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisStrip) (Space between Major Gridlines) |
