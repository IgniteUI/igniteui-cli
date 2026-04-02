---
title: React Treemap | Data Visualization Tools | Orientation | Layout | Data Binding | Infragistics
_description: Use Infragistics' React Treemap control show relative weighting of data points at more than one level supporting strip, squarified, and slice-and-dice algorithms. Learn about Ignite UI for React treemap!
_keywords: React Tree Map, Treemap, layout, orientation, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Treemap", "TreemapOrientation", "TreemapLayoutType", "TreemapHighlightingMode", "TreemapHighlightedValueDisplayMode"]
namespace: Infragistics.Controls.Charts
_tocName: Treemap
_premium: true
---

# React Treemap

The Ignite UI for React Treemap chart displays hierarchical (tree-structured) data as a set of nested nodes. Each branch of the tree is given a treemap node, which is then tiled with smaller nodes representing sub-branches. Each node’s rectangle has an area proportional to a specified dimension on the data. Often the nodes are colored to show a separate dimension of the data.

## React Treemap Example

In the following example, the [`IgrTreemap`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtreemap.html) demonstrates the 30 largest countries in the world by total area.

```typescript
export class CountyHierarchicalDataItem {
    public constructor(init: Partial<CountyHierarchicalDataItem>) {
        Object.assign(this, init);
    }

    public code: string;
    public parent: string;
    public name: string;
    public population: number;

}
export class CountyHierarchicalData extends Array<CountyHierarchicalDataItem> {
    public constructor(items: Array<CountyHierarchicalDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountyHierarchicalDataItem({ code: `AFC`, parent: null, name: `Africa`, population: null }),
                new CountyHierarchicalDataItem({ code: `ASA`, parent: null, name: `Asia`, population: null }),
                new CountyHierarchicalDataItem({ code: `EUR`, parent: null, name: `Europe`, population: null }),
                // ... 219 more items
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

import { IgrTreemapModule } from 'igniteui-react-charts';
import { IgrTreemap } from 'igniteui-react-charts';
import { CountyHierarchicalDataItem, CountyHierarchicalData } from './CountyHierarchicalData';

const mods: any[] = [
    IgrTreemapModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private treemap: IgrTreemap
    private treemapRef(r: IgrTreemap) {
        this.treemap = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.treemapRef = this.treemapRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Comparing Population of Countries
            </div>

            <div className="container fill">
                <IgrTreemap
                    ref={this.treemapRef}
                    dataSource={this.countyHierarchicalData}
                    parentIdMemberPath="parent"
                    idMemberPath="name"
                    labelMemberPath="name"
                    valueMemberPath="population"
                    fillScaleMode="Value"
                    fillScaleMinimumValue="0"
                    fillScaleMaximumValue="1500000000"
                    fillBrushes="rgba(78, 98, 207, 1) rgba(138, 88, 214, 1)"
                    isFillScaleLogarithmic="true"
                    rootTitle="Countries"
                    headerDisplayMode="Overlay"
                    parentNodeBottomPadding="0"
                    parentNodeLeftPadding="0"
                    parentNodeRightPadding="0"
                    parentNodeTopPadding="0"
                    outline="black"
                    strokeThickness="1">
                </IgrTreemap>
            </div>
        </div>
        );
    }

    private _countyHierarchicalData: CountyHierarchicalData = null;
    public get countyHierarchicalData(): CountyHierarchicalData {
        if (this._countyHierarchicalData == null)
        {
            this._countyHierarchicalData = new CountyHierarchicalData();
        }
        return this._countyHierarchicalData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


<div class="divider--half"></div>

## Treemap Recommendations

### Are React Treemaps right for your project?

When the color and size dimensions are correlated in some way with the tree structure, one can often easily see patterns that would be difficult to spot in other ways. A second advantage of treemaps is that, by construction, they make efficient use of space. As a result, they can legibly display thousands of items on the screen simultaneously.

- Treemaps are more effective than pie charts and other forms of area charts that often do a poor job of classifying data points and communicating the relative differences of their values.
- Treemaps are designed for drill down scenarios. You can continuously drill down into the data set that is represented by smaller rectangles for more efficient data analysis.
- Treemaps are not designed to convey numerical quantities; the intent is to show relative rankings.

Like any other data visualization, a Treemap chart visualization should be used in specific scenarios. It does not solve the same problem that a visualization like a Bar Chart or a Line Chart would. It is really meant for a more complex, richer data display.

### Treemap Use Cases

There are several common use cases for choosing a Treemap. When you:

- Have drill-down hierarchical data (data organized as a tree, with branches and sub-branches).
- Want to illustrate hierarchies of relative weight and comparative values between categories (branches) and subcategories (sub-branches).
- Want to display large data sets that need a compact, space-efficient visualization.
- Want to deliver at-a-glance, quick data analysis without precise values. The relative size of the rectangles help identify patterns and/or outliers very quickly.
- Want to make efficient use of space. Treemaps can legibly display thousands of items on the screen simultaneously.

### When not to Use a Treemap

- You are telling a data story that requires precise values
- You have negative data values
- You have flat, non-hierarchical data
- Your data is similar in size

### Treemap Data Structure

- The data source must be an array or a list of data items
- The data source must contain at least one data item otherwise the map will not render any nodes.
- All data items must contain at least one data column (e.g. string) which should be mapped to the [`labelMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtreemap.html#labelMemberPath) property.
- All data items must contain at least one numeric data column which should be mapped using the [`valueMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtreemap.html#valueMemberPath) property.
- To categorize data into organized tiles you can optionally use [`parentIdMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtreemap.html#parentIdMemberPath) and [`idMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtreemap.html#idMemberPath).

## React Treemap Configuration

In the following example, the treemap demonstrates the ability of changing it's algorithmic structure by modifying the [`layoutType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtreemap.html#layoutType) and [`layoutOrientation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtreemap.html#layoutOrientation) properties.

```typescript
export class CountyHierarchicalDataItem {
    public constructor(init: Partial<CountyHierarchicalDataItem>) {
        Object.assign(this, init);
    }

    public code: string;
    public parent: string;
    public name: string;
    public population: number;

}
export class CountyHierarchicalData extends Array<CountyHierarchicalDataItem> {
    public constructor(items: Array<CountyHierarchicalDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountyHierarchicalDataItem({ code: `AFC`, parent: null, name: `Africa`, population: null }),
                new CountyHierarchicalDataItem({ code: `ASA`, parent: null, name: `Asia`, population: null }),
                new CountyHierarchicalDataItem({ code: `EUR`, parent: null, name: `Europe`, population: null }),
                // ... 219 more items
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
import { IgrTreemapModule } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrTreemap } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, TreemapDescriptionModule } from 'igniteui-react-core';
import { CountyHierarchicalDataItem, CountyHierarchicalData } from './CountyHierarchicalData';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrTreemapModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditorPanel1: IgrPropertyEditorPanel
    private propertyEditorPanel1Ref(r: IgrPropertyEditorPanel) {
        this.propertyEditorPanel1 = r;
        this.setState({});
    }
    private layoutTypeEditor: IgrPropertyEditorPropertyDescription
    private layoutOrientationEditor: IgrPropertyEditorPropertyDescription
    private headerDisplayModeEditor: IgrPropertyEditorPropertyDescription
    private labelVerticalAlignmentEditor: IgrPropertyEditorPropertyDescription
    private treemap: IgrTreemap
    private treemapRef(r: IgrTreemap) {
        this.treemap = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorPanel1Ref = this.propertyEditorPanel1Ref.bind(this);
        this.treemapRef = this.treemapRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    componentRenderer={this.renderer}
                    target={this.treemap}
                    descriptionType="Treemap"
                    isHorizontal="true"
                    isWrappingEnabled="true"
                    ref={this.propertyEditorPanel1Ref}>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="LayoutType"
                        name="LayoutTypeEditor"
                        primitiveValue="Squarified"
                        label="Layout">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="LayoutOrientation"
                        name="LayoutOrientationEditor"
                        primitiveValue="Vertical"
                        label="Orientation">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="HeaderDisplayMode"
                        name="HeaderDisplayModeEditor"
                        primitiveValue="Overlay"
                        label="Headers">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="LabelVerticalAlignment"
                        name="LabelVerticalAlignmentEditor"
                        primitiveValue="Center"
                        label="Labels">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="legend-title">
                Comparing Population of Countries
            </div>

            <div className="container fill">
                <IgrTreemap
                    ref={this.treemapRef}
                    dataSource={this.countyHierarchicalData}
                    rootTitle="Countries"
                    parentIdMemberPath="parent"
                    idMemberPath="name"
                    labelMemberPath="name"
                    valueMemberPath="population"
                    fillBrushes="rgba(41, 158, 65, 1) rgba(78, 98, 207, 1) rgba(94, 53, 156, 1)"
                    isFillScaleLogarithmic="true"
                    headerDisplayMode="Overlay"
                    parentNodeBottomPadding="0"
                    parentNodeLeftPadding="0"
                    parentNodeRightPadding="0"
                    parentNodeTopPadding="0">
                </IgrTreemap>
            </div>
        </div>
        );
    }

    private _countyHierarchicalData: CountyHierarchicalData = null;
    public get countyHierarchicalData(): CountyHierarchicalData {
        if (this._countyHierarchicalData == null)
        {
            this._countyHierarchicalData = new CountyHierarchicalData();
        }
        return this._countyHierarchicalData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            TreemapDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


<div class="divider--half"></div>

### Layout Types

The Treemap chart displays the relative weight of data. It uses a variety of algorithms to help it determine how the layout of its data items should occur:

- `SliceAndDiced` - layout algorithm aims to preserve the initial order at the expense of the aspect ratio.
- `Squarified` - layout tiling algorithm has a better aspect ratio than the `SliceAndDice` and keeps a better order than Squarified.
- `Stripped` - layout type algorithm obtains the best aspect ratio but the objects are arranged by size.

The Treemap allows you to choose the algorithm that is best for your requirements, defaulting to use the Squarified method. It also includes the ability to allow you to colorize nodes using two mechanisms:

- A group-based mechanism that colors items with like values
- A scale-based mechanism similar to a map choropleth, which maps node colors based on their value.

### Layout Orientation

[`layoutOrientation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtreemap.html#layoutOrientation) property enables the user to set the direction in which the nodes of the hierarchy will be expanded.

Note that the [`layoutOrientation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtreemap.html#layoutOrientation) property works with the layout types SliceAndDice and Strip.

- `Horizontal` – the child nodes are going to be stacked horizontally(SliceAndDice).
- `Vertical` – the child nodes are going to be stacked vertically (SliceAndDice).

## React Treemap Styling

In the following example, the treemap demonstrates the ability of changing the look and feel of the nodes achieved by styling through the `NodeStylingScript` event.

```typescript
export class CountyHierarchicalDataItem {
    public constructor(init: Partial<CountyHierarchicalDataItem>) {
        Object.assign(this, init);
    }

    public code: string;
    public parent: string;
    public name: string;
    public population: number;

}
export class CountyHierarchicalData extends Array<CountyHierarchicalDataItem> {
    public constructor(items: Array<CountyHierarchicalDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountyHierarchicalDataItem({ code: `AFC`, parent: null, name: `Africa`, population: null }),
                new CountyHierarchicalDataItem({ code: `ASA`, parent: null, name: `Asia`, population: null }),
                new CountyHierarchicalDataItem({ code: `EUR`, parent: null, name: `Europe`, population: null }),
                // ... 219 more items
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

import { IgrTreemapModule } from 'igniteui-react-charts';
import { IgrTreemap, IgrTreemapNodeStyleMapping } from 'igniteui-react-charts';
import { CountyHierarchicalDataItem, CountyHierarchicalData } from './CountyHierarchicalData';

const mods: any[] = [
    IgrTreemapModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private treemap: IgrTreemap
    private treemapRef(r: IgrTreemap) {
        this.treemap = r;
        this.setState({});
    }
    private styling1: IgrTreemapNodeStyleMapping
    private styling2: IgrTreemapNodeStyleMapping
    private styling3: IgrTreemapNodeStyleMapping
    private styling4: IgrTreemapNodeStyleMapping
    private styling5: IgrTreemapNodeStyleMapping
    private styling6: IgrTreemapNodeStyleMapping
    private styling7: IgrTreemapNodeStyleMapping
    private styling8: IgrTreemapNodeStyleMapping

    constructor(props: any) {
        super(props);

        this.treemapRef = this.treemapRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Comparing Population of Countries
            </div>

            <div className="container fill">
                <IgrTreemap
                    ref={this.treemapRef}
                    dataSource={this.countyHierarchicalData}
                    parentIdMemberPath="parent"
                    customValueMemberPath="parent"
                    idMemberPath="name"
                    labelMemberPath="name"
                    valueMemberPath="population"
                    rootTitle="Countries"
                    headerDisplayMode="Overlay"
                    overlayHeaderBackground="rgba(63, 64, 63, 1)"
                    headerHoverBackground="rgba(63, 64, 63, 1)"
                    headerBackground="rgba(63, 64, 63, 1)"
                    parentNodeBottomPadding="0"
                    parentNodeLeftPadding="0"
                    parentNodeRightPadding="0"
                    parentNodeTopPadding="0"
                    outline="black"
                    strokeThickness="1">
                    <IgrTreemapNodeStyleMapping
                        name="styling1"
                        value="Africa"
                        fill="rgba(115, 86, 86, 1)"
                        mappingMode="CustomValue">
                    </IgrTreemapNodeStyleMapping>
                    <IgrTreemapNodeStyleMapping
                        name="styling2"
                        value="Europe"
                        fill="rgba(97, 171, 55, 1)"
                        mappingMode="CustomValue">
                    </IgrTreemapNodeStyleMapping>
                    <IgrTreemapNodeStyleMapping
                        name="styling3"
                        value="Asia"
                        fill="rgba(139, 91, 177, 1)"
                        mappingMode="CustomValue">
                    </IgrTreemapNodeStyleMapping>
                    <IgrTreemapNodeStyleMapping
                        name="styling4"
                        value="North America"
                        fill="rgba(95, 186, 172, 1)"
                        mappingMode="CustomValue">
                    </IgrTreemapNodeStyleMapping>
                    <IgrTreemapNodeStyleMapping
                        name="styling5"
                        value="South America"
                        fill="rgba(238, 88, 121, 1)"
                        mappingMode="CustomValue">
                    </IgrTreemapNodeStyleMapping>
                    <IgrTreemapNodeStyleMapping
                        name="styling6"
                        value="Middle East"
                        fill="rgba(109, 177, 255, 1)"
                        mappingMode="CustomValue">
                    </IgrTreemapNodeStyleMapping>
                    <IgrTreemapNodeStyleMapping
                        name="styling7"
                        value="Central America"
                        fill="rgba(247, 210, 98, 1)"
                        mappingMode="CustomValue">
                    </IgrTreemapNodeStyleMapping>
                    <IgrTreemapNodeStyleMapping
                        name="styling8"
                        value="Oceania"
                        fill="rgba(168, 168, 183, 1)"
                        mappingMode="CustomValue">
                    </IgrTreemapNodeStyleMapping>
                </IgrTreemap>
            </div>
        </div>
        );
    }

    private _countyHierarchicalData: CountyHierarchicalData = null;
    public get countyHierarchicalData(): CountyHierarchicalData {
        if (this._countyHierarchicalData == null)
        {
            this._countyHierarchicalData = new CountyHierarchicalData();
        }
        return this._countyHierarchicalData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


### React Treemap Highlighting

In the following example, the treemap demonstrates the ability of node highlighting. There are two options for this feature. Each node can individually brighten, by decreasing its opacity, or cause all other nodes to trigger the same effect. To enable this feature, set [`highlightingMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtreemap.html#highlightingMode)to Brighten or FadeOthers.

```typescript
export class CountyHierarchicalDataItem {
    public constructor(init: Partial<CountyHierarchicalDataItem>) {
        Object.assign(this, init);
    }

    public code: string;
    public parent: string;
    public name: string;
    public population: number;

}
export class CountyHierarchicalData extends Array<CountyHierarchicalDataItem> {
    public constructor(items: Array<CountyHierarchicalDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountyHierarchicalDataItem({ code: `AFC`, parent: null, name: `Africa`, population: null }),
                new CountyHierarchicalDataItem({ code: `ASA`, parent: null, name: `Asia`, population: null }),
                new CountyHierarchicalDataItem({ code: `EUR`, parent: null, name: `Europe`, population: null }),
                // ... 219 more items
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
import { IgrTreemapModule } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrTreemap } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, TreemapDescriptionModule } from 'igniteui-react-core';
import { CountyHierarchicalDataItem, CountyHierarchicalData } from './CountyHierarchicalData';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrTreemapModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private highlightedModeEditor: IgrPropertyEditorPropertyDescription
    private treemap: IgrTreemap
    private treemapRef(r: IgrTreemap) {
        this.treemap = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
        this.treemapRef = this.treemapRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    ref={this.propertyEditorRef}
                    componentRenderer={this.renderer}
                    target={this.treemap}
                    descriptionType="Treemap"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="HighlightingMode"
                        name="HighlightedModeEditor"
                        label="Highlighting Mode: "
                        primitiveValue="Brighten"
                        dropDownValues={["Brighten", "FadeOthers"]}>
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="legend-title">
                Comparing Population of Countries
            </div>

            <div className="container fill">
                <IgrTreemap
                    ref={this.treemapRef}
                    dataSource={this.countyHierarchicalData}
                    parentIdMemberPath="parent"
                    idMemberPath="name"
                    labelMemberPath="name"
                    valueMemberPath="population"
                    fillScaleMode="Value"
                    fillScaleMinimumValue="0"
                    fillScaleMaximumValue="1500000000"
                    fillBrushes="rgba(78, 98, 207, 1) rgba(138, 88, 214, 1)"
                    isFillScaleLogarithmic="true"
                    rootTitle="Countries"
                    headerDisplayMode="Overlay"
                    parentNodeBottomPadding="0"
                    parentNodeLeftPadding="0"
                    parentNodeRightPadding="0"
                    parentNodeTopPadding="0"
                    outline="black"
                    strokeThickness="1">
                </IgrTreemap>
            </div>
        </div>
        );
    }

    private _countyHierarchicalData: CountyHierarchicalData = null;
    public get countyHierarchicalData(): CountyHierarchicalData {
        if (this._countyHierarchicalData == null)
        {
            this._countyHierarchicalData = new CountyHierarchicalData();
        }
        return this._countyHierarchicalData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            TreemapDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## React Treemap Percent based highlighting

- [`highlightedDataSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtreemap.html#highlightedDataSource): Specifies the datasource to read highlighted values from. If null, then highlighted values are read from the ItemsSource property.
- [`highlightedValueMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtreemap.html#highlightedValueMemberPath): Specifies the name of the property in the datasource where the highlighted values are read.
- [`highlightedValueOpacity`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtreemap.html#highlightedValueOpacity): Controls the opacity of the normal value behind the highlighted value.
- [`highlightedValuesDisplayMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtreemap.html#highlightedValuesDisplayMode): Enables or disables highlighted values.
  - Auto: The treemap decides what mode to use.
  - Overlay: The treemap displays highlighted values over top the normal value with a slight opacity applied to the normal value.
  - Hidden: The treemap does not show highlighted values.

```typescript
export class CountryTopUrbanPopDataItem {
    public constructor(init: Partial<CountryTopUrbanPopDataItem>) {
        Object.assign(this, init);
    }

    public code: string;
    public parent: string;
    public name: string;
    public population: number;
    public urbanPopulation: number;
    public urbanPopPercent: string;

}
export class CountryTopUrbanPopData extends Array<CountryTopUrbanPopDataItem> {
    public constructor(items: Array<CountryTopUrbanPopDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryTopUrbanPopDataItem({ code: `ASA`, parent: null, name: `Asia`, population: null, urbanPopulation: null, urbanPopPercent: null }),
                new CountryTopUrbanPopDataItem({ code: `NAM`, parent: null, name: `North America`, population: null, urbanPopulation: null, urbanPopPercent: null }),
                new CountryTopUrbanPopDataItem({ code: `CHI`, parent: `Asia`, name: `China`, population: 1425178792, urbanPopulation: 941865672, urbanPopPercent: `65%` }),
                // ... 3 more items
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

import { IgrTreemapModule } from 'igniteui-react-charts';
import { IgrTreemap } from 'igniteui-react-charts';
import { ComponentRenderer, TreemapDescriptionModule } from 'igniteui-react-core';
import { CountryTopUrbanPopDataItem, CountryTopUrbanPopData } from './CountryTopUrbanPopData';

const mods: any[] = [
    IgrTreemapModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private treemap: IgrTreemap
    private treemapRef(r: IgrTreemap) {
        this.treemap = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.treemapRef = this.treemapRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Comparing Top Urban Population Percentages between North America & Asia
            </div>

            <div className="container fill">
                <IgrTreemap
                    ref={this.treemapRef}
                    dataSource={this.countryTopUrbanPopData}
                    parentIdMemberPath="parent"
                    idMemberPath="name"
                    labelMemberPath="name"
                    valueMemberPath="population"
                    highlightedValueMemberPath="urbanPopulation"
                    highlightedValuesDisplayMode="Overlay"
                    fillBrushes="rgba(252, 65, 0, 1) rgba(255, 197, 90, 1) rgba(0, 33, 94, 1) rgba(44, 78, 128, 1)"
                    rootTitle="Continents"
                    headerDisplayMode="Auto"
                    isFillScaleLogarithmic="true"
                    labelVerticalAlignment="Top"
                    parentNodeTopMargin="10"
                    fillScaleMode="Value"
                    textColor="black"
                    textStyle="normal bold 25px Verdana">
                </IgrTreemap>
            </div>
        </div>
        );
    }

    private _countryTopUrbanPopData: CountryTopUrbanPopData = null;
    public get countryTopUrbanPopData(): CountryTopUrbanPopData {
        if (this._countryTopUrbanPopData == null)
        {
            this._countryTopUrbanPopData = new CountryTopUrbanPopData();
        }
        return this._countryTopUrbanPopData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            TreemapDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](area-chart.md)
- [Shape Chart](shape-chart.md)

## API References

The following is a list of API members mentioned in the above sections:

- [`IgrTreemap`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtreemap.html)
- [`layoutOrientation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtreemap.html#layoutOrientation)
- [`highlightedValuesDisplayMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtreemap.html#highlightedValuesDisplayMode)
- [`highlightedValueMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtreemap.html#highlightedValueMemberPath)
- [`layoutType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtreemap.html#layoutType)
