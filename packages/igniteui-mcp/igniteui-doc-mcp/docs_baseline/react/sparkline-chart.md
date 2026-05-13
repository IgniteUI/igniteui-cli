---
title: React Sparkline | Data Visualization Tools | Infragistics
_description: Use Infragistics' React sparkline chart control to render in a small scale layout such as a grid cell or stand alone. Learn about the Ignite UI for React sparkline chart configurable elements!
_keywords: Sparkline, Ignite UI for React, Infragistics, WinLoss, Area, Column
_license: commercial
mentionedTypes: ["XamSparkline", "SparklineDisplayType", "TrendLineType"]
namespace: Infragistics.Controls.Charts
_tocName: Sparkline Chart
_premium: true
---

# React Sparkline

The Ignite UI for React Sparkline is a lightweight charting control. It is intended for rendering within a small-scale layout such as within a grid cell but can also be rendered alone. The [`Sparkline`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.sparkline.html) has several visual elements and corresponding features that can be configured and customized such as the chart type, markers, ranges, trendlines, unknown value plotting, and tooltips.

## React Sparkline Example

The following example shows all the different types of [`Sparkline`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.sparkline.html) available. The type is defined by setting the [`displayType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsparkline.html#displayType) property. If the [`displayType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsparkline.html#displayType) property is not specified, then by default, the [`Line`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.sparklinedisplaytype.html#Line) type is displayed.

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSparkline } from 'igniteui-react-charts';
import { IgrSparklineModule } from 'igniteui-react-charts';
import { IgrSparklineCoreModule } from 'igniteui-react-charts';

IgrSparklineCoreModule.register();
IgrSparklineModule.register();

export default class SparklineDisplayTypes extends React.Component {
    public data: any[];

    public sparkline: IgrSparkline;

    constructor(props: any) {
        super(props);

        this.data = this.generateData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <label className="options-label">Sparkline with Line Display Type</label>
                <div className="container">
                    <IgrSparkline height="100%" width="100%" displayType="Line"
                        dataSource={this.data} minimum={-1} maximum={1}
                        valueMemberPath="Value" labelMemberPath="Angle"/>
                </div>
                <label className="options-label">Sparkline with Area Display Type</label>
                <div className="container">
                    <IgrSparkline height="100%" width="100%" displayType="Area"
                        dataSource={this.data} minimum={-1} maximum={1}
                        valueMemberPath="Value" labelMemberPath="Angle"/>
                </div>
                <label className="options-label">Sparkline with Column Display Type</label>
                <div className="container">
                    <IgrSparkline height="100%" width="100%" displayType="Column"
                        dataSource={this.data} minimum={-1} maximum={1}
                        valueMemberPath="Value" labelMemberPath="Angle"/>
                </div>
                <label className="options-label">Sparkline with WinLoss Display Type</label>
                <div className="container">
                    <IgrSparkline height="100%" width="100%" displayType="WinLoss"
                        dataSource={this.data} minimum={-1} maximum={1}
                        valueMemberPath="Value" labelMemberPath="Angle"/>
                </div>
            </div >
        );
    }

    public generateData()
    {
        const data: any[] = [];
        let index = 0;
        let min = 1000.0;
        let max = -1000.0;

        for (let angle = 0; angle < 360 * 4; angle += 5)
        {
            let v1 = Math.sin(angle * Math.PI / 180);
            let v2 = Math.sin(3 * angle * Math.PI / 180) / 3;
            let revenue = v1 + v2;
            let expanse = revenue < 0 ? revenue : 0;
            let income = revenue > 0 ? revenue : 0;

            data.push({
                "Index": index++,
                "Angle": angle,
                // Value = v1 + v2
                "Value": revenue,
                "Expanse": expanse,
                "Income": income
            });

            min = Math.min(min, v1 + v2);
            max = Math.max(max, v1 + v2);
        }

        return data;
    }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SparklineDisplayTypes/>);
```

<div class="divider--half"></div>

Like this sample? Get access to our complete React toolkit and start building your own apps in minutes. <a href="https://www.infragistics.com/products/ignite-ui-react/download">Download it for free.</a>

## Sparkline Recommendations

### Is the Sparkline chart right for your project?

The primary benefit of the Sparkline control compared to other charting controls is that it can render in a limited space such as a grid cell with all its visual elements shown.

The React Sparkline has the ability to mark the data points with elliptical icons to indicate the highest, lowest, first, last, and negative values. The markers can be customized with a desired shape, color, or image.

### Sparkline Use Cases

- You have a compact space to display a chart in.
- You want to show trends in a series of values, such as weekly revenue.

### Sparkline Best Practices

- Always start the Y-Axis (left or right axis) at 0 so data comparison is accurate.
- Order time-series data from left to right.
- Use visual attributes like solid lines to show a series of data.

### When Not to Use Sparkline

- You need to analyze the data in detail.
- You need to display every label of the data points. It only allows showing high and low values on the Y-Axis, and first and last values on the X-Axis.

### Sparkline Data Structure

- It requires one-dimensional data.
- The data set must contain at least two numeric fields.
- The text in the data source fields can be used to display the first and last label on the X-Axis.

## Sparkline Types

The React Sparkline supports the following types of sparklines by setting the [`displayType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsparkline.html#displayType) property accordingly:

- [`Line`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.sparklinedisplaytype.html#Line):  Displays the line chart type of Sparkline with numeric data, connecting the data points with line segments. At least two data points must be supplied to visualize the data in Sparkline.
- [`Area`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.sparklinedisplaytype.html#Area): Displays the Area chart type of Sparkline with numeric data. This is like line type with additional steps of closing the area after each line is drawn. At least two data points must be supplied to visualize the data in Sparkline.
- [`Column`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.sparklinedisplaytype.html#Column): Displays the Column chart type of Sparkline with numeric data. Some may refer to it as vertical bars. This type can render a single data point, but it would require specifying the minimum value range property (minimum) in Sparkline so the supplied single data point can be visible, otherwise the value will be treated as the minimum value and will not be visible.
- [`WinLoss`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.sparklinedisplaytype.html#WinLoss): This type is similar in its visual appearance to Column chart type, in which the value of each column is equal to either the positive maximum (for positive values) or the negative minimum (for negative value) of the data set. The idea is to indicate a win or loss scenario. For the Win/Loss chart to display properly, the data set must have both positive and negative values. If the WinLoss sparkline is bound to the same data as the other types such as the Line type, which can be bound to a collection of numeric values, then the React Sparkline will select two values from the collection - the highest and the lowest - and will render the sparkline based upon those values.

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSparkline } from 'igniteui-react-charts';
import { IgrSparklineModule } from 'igniteui-react-charts';
import { IgrSparklineCoreModule } from 'igniteui-react-charts';

IgrSparklineCoreModule.register();
IgrSparklineModule.register();

export default class SparklineDisplayTypes extends React.Component {
    public data: any[];

    public sparkline: IgrSparkline;

    constructor(props: any) {
        super(props);

        this.data = this.generateData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <label className="options-label">Sparkline with Line Display Type</label>
                <div className="container">
                    <IgrSparkline height="100%" width="100%" displayType="Line"
                        dataSource={this.data} minimum={-1} maximum={1}
                        valueMemberPath="Value" labelMemberPath="Angle"/>
                </div>
                <label className="options-label">Sparkline with Area Display Type</label>
                <div className="container">
                    <IgrSparkline height="100%" width="100%" displayType="Area"
                        dataSource={this.data} minimum={-1} maximum={1}
                        valueMemberPath="Value" labelMemberPath="Angle"/>
                </div>
                <label className="options-label">Sparkline with Column Display Type</label>
                <div className="container">
                    <IgrSparkline height="100%" width="100%" displayType="Column"
                        dataSource={this.data} minimum={-1} maximum={1}
                        valueMemberPath="Value" labelMemberPath="Angle"/>
                </div>
                <label className="options-label">Sparkline with WinLoss Display Type</label>
                <div className="container">
                    <IgrSparkline height="100%" width="100%" displayType="WinLoss"
                        dataSource={this.data} minimum={-1} maximum={1}
                        valueMemberPath="Value" labelMemberPath="Angle"/>
                </div>
            </div >
        );
    }

    public generateData()
    {
        const data: any[] = [];
        let index = 0;
        let min = 1000.0;
        let max = -1000.0;

        for (let angle = 0; angle < 360 * 4; angle += 5)
        {
            let v1 = Math.sin(angle * Math.PI / 180);
            let v2 = Math.sin(3 * angle * Math.PI / 180) / 3;
            let revenue = v1 + v2;
            let expanse = revenue < 0 ? revenue : 0;
            let income = revenue > 0 ? revenue : 0;

            data.push({
                "Index": index++,
                "Angle": angle,
                // Value = v1 + v2
                "Value": revenue,
                "Expanse": expanse,
                "Income": income
            });

            min = Math.min(min, v1 + v2);
            max = Math.max(max, v1 + v2);
        }

        return data;
    }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SparklineDisplayTypes/>);
```

<div class="divider--half"></div>

## Markers

The React Sparkline allows you to show markers as circular-colored icons on your series to indicate the individual data points based on X/Y coordinates. Markers can be set on sparklines of display types of [`Line`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.sparklinedisplaytype.html#Line), [`Area`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.sparklinedisplaytype.html#Area), and [`Column`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.sparklinedisplaytype.html#Column). The [`WinLoss`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.sparklinedisplaytype.html#WinLoss) type of sparkline does not currently accept markers. By default, markers are not displayed, but they can be enabled by setting the corresponding marker visibility property.

Markers in the sparkline can be placed in any combination of the following locations:

- `All`: Display markers for all data points in the sparkline.
- `Low`: Display markers on the data point of the lowest value. If there are multiple points at the lowest value, it will show on each point with that value.
- `High`: Display markers on the data point of the highest value. If there are multiple points at the highest value, it will show on each point with that value.
- `First`: Display a marker on the first data point in the sparkline.
- `Last`: Display a marker on the last data point in the sparkline.
- `Negative`: Display markers on the negative data points plotted in the sparkline.

All of the markers mentioned above can be customized using the related marker type's property in aspects of color, visibility, and size. For example, the `Low` markers above will have properties [`lowMarkerBrush`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsparkline.html#lowMarkerBrush), [`lowMarkerVisibility`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsparkline.html#lowMarkerVisibility), and [`lowMarkerSize`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsparkline.html#lowMarkerSize).

```typescript
export class SparklineProfitDataItem {
    public constructor(init: Partial<SparklineProfitDataItem>) {
        Object.assign(this, init);
    }

    public value: number;
    public label: string;

}
export class SparklineProfitData extends Array<SparklineProfitDataItem> {
    public constructor(items: Array<SparklineProfitDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new SparklineProfitDataItem({ value: 30, label: `A` }),
                new SparklineProfitDataItem({ value: 40, label: `B` }),
                new SparklineProfitDataItem({ value: 50, label: `C` }),
                // ... 5 more items
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
import { IgrSparklineModule } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrSparkline } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, SparklineDescriptionModule } from 'igniteui-react-core';
import { SparklineProfitDataItem, SparklineProfitData } from './SparklineProfitData';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrSparklineModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditorPanel1: IgrPropertyEditorPanel
    private propertyEditorPanel1Ref(r: IgrPropertyEditorPanel) {
        this.propertyEditorPanel1 = r;
        this.setState({});
    }
    private firstMarkerVisibilityEditor: IgrPropertyEditorPropertyDescription
    private highMarkerVisibilityEditor: IgrPropertyEditorPropertyDescription
    private lowMarkerVisibilityEditor: IgrPropertyEditorPropertyDescription
    private negativeMarkerVisibilityEditor: IgrPropertyEditorPropertyDescription
    private lastMarkerVisibilityEditor: IgrPropertyEditorPropertyDescription
    private markerVisibilityEditor: IgrPropertyEditorPropertyDescription
    private chart: IgrSparkline
    private chartRef(r: IgrSparkline) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

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
                    descriptionType="Sparkline"
                    isHorizontal="true"
                    isWrappingEnabled="true"
                    ref={this.propertyEditorPanel1Ref}>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="FirstMarkerVisibility"
                        name="FirstMarkerVisibilityEditor"
                        label="First Markers"
                        shouldOverrideDefaultEditor="true"
                        valueType="EnumValue"
                        dropDownNames={["Visible", "Collapsed"]}
                        dropDownValues={["Visible", "Collapsed"]}
                        primitiveValue="Visible">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="HighMarkerVisibility"
                        name="HighMarkerVisibilityEditor"
                        label="High Markers"
                        valueType="EnumValue"
                        dropDownNames={["Visible", "Collapsed"]}
                        dropDownValues={["Visible", "Collapsed"]}
                        primitiveValue="Visible">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="LowMarkerVisibility"
                        name="LowMarkerVisibilityEditor"
                        label="Low Markers"
                        valueType="EnumValue"
                        dropDownNames={["Visible", "Collapsed"]}
                        dropDownValues={["Visible", "Collapsed"]}
                        primitiveValue="Visible">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="NegativeMarkerVisibility"
                        name="NegativeMarkerVisibilityEditor"
                        label="Negative Markers"
                        valueType="EnumValue"
                        dropDownNames={["Visible", "Collapsed"]}
                        dropDownValues={["Visible", "Collapsed"]}
                        primitiveValue="Visible">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="LastMarkerVisibility"
                        name="LastMarkerVisibilityEditor"
                        label="Last Markers"
                        valueType="EnumValue"
                        dropDownNames={["Visible", "Collapsed"]}
                        dropDownValues={["Visible", "Collapsed"]}
                        primitiveValue="Visible">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="MarkerVisibility"
                        name="MarkerVisibilityEditor"
                        label="All Markers"
                        valueType="EnumValue"
                        dropDownNames={["Visible", "Collapsed"]}
                        dropDownValues={["Visible", "Collapsed"]}
                        primitiveValue="Visible">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrSparkline
                    ref={this.chartRef}
                    dataSource={this.sparklineProfitData}
                    displayType="Line"
                    labelMemberPath="label"
                    valueMemberPath="value"
                    markerVisibility="Visible"
                    highMarkerVisibility="Visible"
                    lowMarkerVisibility="Visible"
                    firstMarkerVisibility="Visible"
                    lastMarkerVisibility="Visible"
                    negativeMarkerVisibility="Visible"
                    markerSize="10"
                    firstMarkerSize="10"
                    lastMarkerSize="10"
                    lowMarkerSize="10"
                    highMarkerSize="10"
                    negativeMarkerSize="10"
                    minimum="0"
                    maximum="60">
                </IgrSparkline>
            </div>
        </div>
        );
    }

    private _sparklineProfitData: SparklineProfitData = null;
    public get sparklineProfitData(): SparklineProfitData {
        if (this._sparklineProfitData == null)
        {
            this._sparklineProfitData = new SparklineProfitData();
        }
        return this._sparklineProfitData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            SparklineDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## Normal Range

The normal range feature of the React Sparkline is a horizontal stripe representing some pre-defined meaningful range when the data is being visualized. The normal range can be set as a shaded area outlined with the desired color.

The normal range can be wider than the maximum data point or beyond, and it can also be as thin as the sparkline's [`Line`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.sparklinedisplaytype.html#Line) display type, to serve as a threshold indicator, for instance. The width of the normal range is determined by the following three properties, which serve as the minimum settings required for displaying the normal range:

- [`normalRangeVisibility`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsparkline.html#normalRangeVisibility): Whether the normal range is visible.
- [`normalRangeMaximum`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsparkline.html#normalRangeMaximum): The bottom border of the range.
- [`normalRangeMinimum`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsparkline.html#normalRangeMinimum): The top border of the range.

By default, the normal range is not displayed. When enabled, the normal range shows up with a light gray color appearance, which can also be configured using the [`normalRangeFill`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsparkline.html#normalRangeFill) property.

You can also configure whether to show the normal range in front of or behind the plotted series in your React Sparkline by setting the [`displayNormalRangeInFront`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsparkline.html#displayNormalRangeInFront) property.

```typescript
export class SparklineMixedDataItem {
    public constructor(init: Partial<SparklineMixedDataItem>) {
        Object.assign(this, init);
    }

    public label: string;
    public value: number;

}
export class SparklineMixedData extends Array<SparklineMixedDataItem> {
    public constructor(items: Array<SparklineMixedDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new SparklineMixedDataItem({ label: `A`, value: 30 }),
                new SparklineMixedDataItem({ label: `B`, value: -10 }),
                new SparklineMixedDataItem({ label: `C`, value: 40 }),
                // ... 5 more items
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
import { IgrSparklineModule } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrSparkline } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, SparklineDescriptionModule } from 'igniteui-react-core';
import { SparklineMixedDataItem, SparklineMixedData } from './SparklineMixedData';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrSparklineModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditorPanel1: IgrPropertyEditorPanel
    private propertyEditorPanel1Ref(r: IgrPropertyEditorPanel) {
        this.propertyEditorPanel1 = r;
        this.setState({});
    }
    private normalRangeVisibilityEditor: IgrPropertyEditorPropertyDescription
    private normalRangeMinimumEditor: IgrPropertyEditorPropertyDescription
    private normalRangeMaximumEditor: IgrPropertyEditorPropertyDescription
    private chart: IgrSparkline
    private chartRef(r: IgrSparkline) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

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
                    descriptionType="Sparkline"
                    isHorizontal="true"
                    isWrappingEnabled="true"
                    ref={this.propertyEditorPanel1Ref}>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="NormalRangeVisibility"
                        name="NormalRangeVisibilityEditor"
                        label="Normal Range Visibility"
                        shouldOverrideDefaultEditor="true"
                        valueType="EnumValue"
                        dropDownNames={["Visible", "Collapsed"]}
                        dropDownValues={["Visible", "Collapsed"]}
                        primitiveValue="Visible">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="NormalRangeMinimum"
                        name="NormalRangeMinimumEditor"
                        label="Normal Range Minimum"
                        shouldOverrideDefaultEditor="true"
                        valueType="EnumValue"
                        dropDownNames={["0", "10", "15", "20", "25", "30"]}
                        dropDownValues={["0", "10", "15", "20", "25", "30"]}
                        primitiveValue="25">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="NormalRangeMaximum"
                        name="NormalRangeMaximumEditor"
                        label="Normal Range Maximum"
                        shouldOverrideDefaultEditor="true"
                        valueType="EnumValue"
                        dropDownNames={["0", "10", "15", "20", "25", "30"]}
                        dropDownValues={["0", "10", "15", "20", "25", "30"]}
                        primitiveValue="25">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrSparkline
                    ref={this.chartRef}
                    dataSource={this.sparklineMixedData}
                    displayType="Area"
                    labelMemberPath="label"
                    valueMemberPath="value"
                    normalRangeVisibility="Visible"
                    normalRangeMinimum="15"
                    normalRangeMaximum="25">
                </IgrSparkline>
            </div>
        </div>
        );
    }

    private _sparklineMixedData: SparklineMixedData = null;
    public get sparklineMixedData(): SparklineMixedData {
        if (this._sparklineMixedData == null)
        {
            this._sparklineMixedData = new SparklineMixedData();
        }
        return this._sparklineMixedData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            SparklineDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## Trendlines

The React Sparkline has support for a range of trendlines that display as another layer on top of the actual sparkline layer. To display a sparkline, you can use the [`trendLineType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsparkline.html#trendLineType) property.

The trendlines are calculated according to the algorithm specified by the [`trendLineType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsparkline.html#trendLineType) property using the values of the data the the chart is bound to.

Trendlines can only be displayed one at a time and by default, the trendline is not displayed.

The sample below shows all the available trendlines via the dropdown:

```typescript
export class SparklineMixedDataItem {
    public constructor(init: Partial<SparklineMixedDataItem>) {
        Object.assign(this, init);
    }

    public label: string;
    public value: number;

}
export class SparklineMixedData extends Array<SparklineMixedDataItem> {
    public constructor(items: Array<SparklineMixedDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new SparklineMixedDataItem({ label: `A`, value: 30 }),
                new SparklineMixedDataItem({ label: `B`, value: -10 }),
                new SparklineMixedDataItem({ label: `C`, value: 40 }),
                // ... 5 more items
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
import { IgrSparklineModule } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrSparkline } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, SparklineDescriptionModule } from 'igniteui-react-core';
import { SparklineMixedDataItem, SparklineMixedData } from './SparklineMixedData';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrSparklineModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditorPanel1: IgrPropertyEditorPanel
    private propertyEditorPanel1Ref(r: IgrPropertyEditorPanel) {
        this.propertyEditorPanel1 = r;
        this.setState({});
    }
    private trendLineTypeEditor: IgrPropertyEditorPropertyDescription
    private chart: IgrSparkline
    private chartRef(r: IgrSparkline) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

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
                    descriptionType="Sparkline"
                    isHorizontal="true"
                    isWrappingEnabled="true"
                    ref={this.propertyEditorPanel1Ref}>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="TrendLineType"
                        name="TrendLineTypeEditor"
                        label="Trendline Type"
                        shouldOverrideDefaultEditor="true"
                        valueType="EnumValue"
                        dropDownNames={["CubicFit", "CumulativeAverage", "ExponentialAverage", "ExponentialFit", "LinearFit", "LogarithmicFit", "ModifiedAverage", "None", "PowerLawFit", "QuadraticFit", "QuarticFit", "QuinticFit", "SimpleAverage", "WeightedAverage"]}
                        dropDownValues={["CubicFit", "CumulativeAverage", "ExponentialAverage", "ExponentialFit", "LinearFit", "LogarithmicFit", "ModifiedAverage", "None", "PowerLawFit", "QuadraticFit", "QuarticFit", "QuinticFit", "SimpleAverage", "WeightedAverage"]}
                        primitiveValue="CubicFit">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrSparkline
                    ref={this.chartRef}
                    dataSource={this.sparklineMixedData}
                    displayType="Area"
                    labelMemberPath="label"
                    valueMemberPath="value"
                    trendLineType="CubicFit">
                </IgrSparkline>
            </div>
        </div>
        );
    }

    private _sparklineMixedData: SparklineMixedData = null;
    public get sparklineMixedData(): SparklineMixedData {
        if (this._sparklineMixedData == null)
        {
            this._sparklineMixedData = new SparklineMixedData();
        }
        return this._sparklineMixedData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            SparklineDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## Unknown Value Interpolation

The React Sparkline can detect unknown values and render the space for unknown values through a specified interpolation algorithm. If your data contains null values and you do not use this feature, meaning no interpolation is specified, the unknown value will not be plotted.

To plot the unknown values, you can set the [`unknownValuePlotting`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsparkline.html#unknownValuePlotting) property of the React Sparkline. The sample below shows the differences between the values of the [`unknownValuePlotting`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsparkline.html#unknownValuePlotting) property, allowing you to toggle it on or off using a checkbox:

```typescript
export class SparklineUnknownDataItem {
    public constructor(init: Partial<SparklineUnknownDataItem>) {
        Object.assign(this, init);
    }

    public label: number;
    public value: number;

}
export class SparklineUnknownData extends Array<SparklineUnknownDataItem> {
    public constructor(items: Array<SparklineUnknownDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new SparklineUnknownDataItem({ label: 4, value: 4 }),
                new SparklineUnknownDataItem({ label: 5, value: 5 }),
                new SparklineUnknownDataItem({ label: 2, value: null }),
                // ... 7 more items
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
import { IgrSparklineModule } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrSparkline } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, SparklineDescriptionModule } from 'igniteui-react-core';
import { SparklineUnknownDataItem, SparklineUnknownData } from './SparklineUnknownData';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrSparklineModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditorPanel1: IgrPropertyEditorPanel
    private propertyEditorPanel1Ref(r: IgrPropertyEditorPanel) {
        this.propertyEditorPanel1 = r;
        this.setState({});
    }
    private unknownValuePlottingEditor: IgrPropertyEditorPropertyDescription
    private chart: IgrSparkline
    private chartRef(r: IgrSparkline) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

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
                    descriptionType="Sparkline"
                    isHorizontal="true"
                    isWrappingEnabled="true"
                    ref={this.propertyEditorPanel1Ref}>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="UnknownValuePlotting"
                        name="UnknownValuePlottingEditor"
                        label="Unknown Value Plotting"
                        shouldOverrideDefaultEditor="true"
                        valueType="EnumValue"
                        dropDownNames={["LinearInterpolate", "DontPlot"]}
                        dropDownValues={["LinearInterpolate", "DontPlot"]}
                        primitiveValue="LinearInterpolate">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrSparkline
                    ref={this.chartRef}
                    dataSource={this.sparklineUnknownData}
                    displayType="Area"
                    labelMemberPath="label"
                    valueMemberPath="value"
                    unknownValuePlotting="LinearInterpolate">
                </IgrSparkline>
            </div>
        </div>
        );
    }

    private _sparklineUnknownData: SparklineUnknownData = null;
    public get sparklineUnknownData(): SparklineUnknownData {
        if (this._sparklineUnknownData == null)
        {
            this._sparklineUnknownData = new SparklineUnknownData();
        }
        return this._sparklineUnknownData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            SparklineDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## Sparkline in Data Grid

You can embed the React Sparkline in a template column of data grid or other UI controls that support templates. The following code example shows how to do this:

```typescript
export class Products {

    public static names: string[] = [
        "Intel CPU", "AMD CPU",
        "Nvidia GPU", "Gigabyte GPU", "Asus GPU", "AMD GPU", "MSI GPU",
        "Corsair Memory", "Patriot Memory", "Skill Memory",
        "Samsung HDD", "WD HDD", "Seagate HDD", "Intel HDD", "Asus HDD",
        "Samsung SSD", "WD SSD", "Seagate SSD", "Intel SSD", "Asus SSD",
        "Samsung Monitor", "Asus Monitor", "LG Monitor", "HP Monitor" ];

    public static countries: string[] = ["United-States", "United-Kingdom", "France", "Canada", "Poland",
            "Denmark", "Croatia", "Australia", "Seychelles",
            "Sweden", "Germany", "Japan", "Ireland",
            "Barbados", "Jamaica", "Cuba", "Spain",];

    public static status: string[] = [ "Packing", "Shipped", "Delivered"]

    public static getData(count?: number): any[] {
        if (count === undefined) {
            count = 20;
        }
        const items: any[] = [];
        for (let i = 0; i < count; i++) {
            const id = this.pad(count - i, count.toString().length);
            const price = this.getRandomNumber(10000, 90000) / 100;
            const orderCount = this.getRandomNumber(4, 30);
            const orderValue = Math.round(price * orderCount);
            const orderShipped = this.getRandomNumber(30, 100);
            const margin = this.getRandomNumber(5, 10);
            const profit = Math.round(orderValue * (margin / 100));
            const country = this.getRandomItem(this.countries);

            // sales per month for sparkline chart
            const sales: any[] = [];
            for (let m = 0; m < 12; m++) {
                const sale = this.getRandomNumber(20, 90);
                sales.push({Value: sale, Month: m});
            }
            items.push({
                CountryFlag: this.getCountryFlag(country),
                CountryName: country,
                Margin: margin,
                // data source for embedded sparklines
                OrderCount: orderCount,
                OrderHistory: this.getOrderHistory(26),
                OrderShipped: orderShipped,
                OrderValue: orderValue,
                OrderDate: this.getRandomDate(),
                ProductID: id,
                ProductName: this.getRandomItem(this.names),
                ProductPrice: price,
                Profit: profit,
                ReturnRate: this.getReturnRate(52),
                Status: this.getRandomItem(this.status),
            });
        }
        // console.log("Products:" + items.length)
        return items;
    }

    public static getOrderHistory(weekCount?: number): any[] {
        if (weekCount === undefined) {
            weekCount = 52;
        }
        const sales: any[] = [];
        for (let w = 0; w < weekCount; w++) {
            const value = this.getRandomNumber(0, 100);
            sales.push({Sold: value, Week: w});
        }
        return sales;
    }

    public static getReturnRate(weekCount?: number): any[] {
        if (weekCount === undefined) {
            weekCount = 52;
        }
        const rates: any[] = [];
        for (let w = 0; w < weekCount; w++) {
            const value = this.getRandomNumber(-100, 100);
            rates.push({Balance: value, Week: w});
        }
        return rates;
    }

    public static getCountryFlag(country: string): string {
        const flag = 'https://dl.infragistics.com/x/img/flags/' + country + '.png'
        return flag;
    }

    public static getRandomDate(): Date {
        const today: Date = new Date();
        const year: number = today.getFullYear();
        const month: number = this.getRandomNumber(0, 8);
        const day: number = this.getRandomNumber(10, 27);
        return new Date(year, month, day);
    }

    public static getRandomNumber(min: number, max: number): number {
        return Math.round(min + Math.random() * (max - min));
    }

    public static getRandomItem(array: any[]): any {
        const index = Math.round(this.getRandomNumber(0, array.length - 1));
        return array[index];
    }

    public static pad(num: number, size: number, char?: string): string {
        if (char === undefined) char = "0";
        let s = num + "";
        // if (s.length)
        while (s.length < size) s = char + s;
        return s;
    }
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Products } from './Products';
// sparkline modules:
import { IgrSparkline } from 'igniteui-react-charts';
import { IgrSparklineModule } from 'igniteui-react-charts';
// grid modules:
import { IgrDataGridModule } from 'igniteui-react-data-grids';
import { IgrDataGrid } from 'igniteui-react-data-grids';
import { IgrTextColumn } from 'igniteui-react-data-grids';
import { IgrNumericColumn } from 'igniteui-react-data-grids';
import { IgrImageColumn } from 'igniteui-react-data-grids';
import { IgrTemplateColumn, IIgrCellTemplateProps } from 'igniteui-react-data-grids';
import { IgrTemplateCellInfo } from 'igniteui-react-data-grids';

IgrDataGridModule.register();
IgrSparklineModule.register();

export default class SparklineGrid extends React.Component<any, any> {

    public data: any[];

    constructor(props: any) {
        super(props);

        this.data = Products.getData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrDataGrid
                    width="100%"
                    height="100%"
                    rowHeight="90"
                    autoGenerateColumns="false"
                    dataSource={this.data}>
                    <IgrTextColumn
                        field="ProductID"
                        headerText="ID"
                        width="*>110"
                        horizontalAlignment="Center" />
                    <IgrTextColumn
                        field="ProductName"
                        headerText="Product"
                        width="*>140" />
                    <IgrNumericColumn
                        field="ProductPrice"
                        headerText="Price"
                        width="*>110"
                        positivePrefix="$"
                        showGroupingSeparator={true}
                        minFractionDigits={2} />
                    <IgrTemplateColumn
                        field="OrderHistory"
                        headerText="Order History"
                        width="*>180"
                        paddingTop={10}
                        paddingBottom={10}
                        horizontalAlignment="Center"
                        template={this.getOrderHistoryTemplate} />
                    <IgrNumericColumn
                        field="OrderCount"
                        headerText="Orders"
                        width="*>110"
                        horizontalAlignment="Center" />
                    <IgrNumericColumn
                        field="Profit"
                        width="*>120"
                        positivePrefix="$"
                        showGroupingSeparator={true} />
                    <IgrImageColumn
                        field="CountryFlag"
                        headerText="Country"
                        width="*>120"
                        isEditable={false}
                        contentOpacity={1}
                        horizontalAlignment="Center"
                        paddingTop={10}
                        paddingBottom={10} />
                    <IgrTextColumn
                        field="Status"
                        width="*>120"
                        horizontalAlignment="Center" />
               </IgrDataGrid>
            </div>
        );
    }

    public getOrderHistoryTemplate(props: IIgrCellTemplateProps) {
        const info = props.dataContext as IgrTemplateCellInfo;
        return (
            <div style={{ width: "100%", height: "70px", background: "transparent" }}>
                <IgrSparkline
                    width="100%"
                    height="100%" 
                    displayType="Line"
                    dataSource={info.rowItem.OrderHistory}
                    valueMemberPath="Sold"
                    labelMemberPath="Week"
                    brush="rgb(21, 190, 6)" />
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SparklineGrid/>);
```

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](area-chart.md)
- [Column Chart](column-chart.md)
- [Line Chart](line-chart.md)

## API References

The following is a list of API members mentioned in the above sections:

- [`displayNormalRangeInFront`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsparkline.html#displayNormalRangeInFront)
- [`displayType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsparkline.html#displayType)
- [`lowMarkerBrush`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsparkline.html#lowMarkerBrush)
- [`lowMarkerSize`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsparkline.html#lowMarkerSize)
- [`lowMarkerVisibility`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsparkline.html#lowMarkerVisibility)
- [`normalRangeFill`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsparkline.html#normalRangeFill)
- [`unknownValuePlotting`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsparkline.html#unknownValuePlotting)
- [`IgrSparkline`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsparkline.html)
