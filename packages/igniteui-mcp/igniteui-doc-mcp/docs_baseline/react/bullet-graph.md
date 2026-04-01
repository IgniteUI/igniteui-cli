---
title: React Bullet Graph | Data Visualization Tools | Infragistics
_description: Infragistics' React bullet graph control allows you to create dashboards displaying ranges or comparing multiple measurements. View our data visualization tools!
_keywords: React Bullet Graph, animation, labels, needle, scales, ranges, tick marks, Infragistics
_license: commercial
mentionedTypes: ["XamBulletGraph"]
namespace: Infragistics.Controls.Gauges
_tocName: Bullet Graph
_premium: true
---

# React Bullet Graph Overview

The React bullet graph component allows for a linear and concise view of measures compared against a scale.

The Ignite UI for React bullet graph component provides you with the ability to create attractive data presentations, replacing meters and gauges that are used on dashboards with simple yet straightforward and clear bar charts. A bullet graph is one of the most effective and efficient ways to present progress towards goals, good/better/best ranges, or compare multiple measurements in as little horizontal or vertical space as possible.

## React Bullet Graph Example

The following sample demonstrates how setting multiple properties on the same [`IgrBulletGraph`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrbulletgraph.html) can transform it to completely different bullet graph.

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrBulletGraph } from 'igniteui-react-gauges';
import { IgrBulletGraphModule } from 'igniteui-react-gauges';
import { IgrLinearGraphRange } from 'igniteui-react-gauges';

IgrBulletGraphModule.register();

export default class BulletGraphAnimation extends React.Component {
    public gauge: IgrBulletGraph;
    private shouldAnimate: boolean = false;

    constructor(props: any) {
        super(props);

        this.onGaugeRef = this.onGaugeRef.bind(this);
        this.onAnimateToGauge1 = this.onAnimateToGauge1.bind(this);
        this.onAnimateToGauge2 = this.onAnimateToGauge2.bind(this);
        this.onAnimateToGauge3 = this.onAnimateToGauge3.bind(this);
    }

    public onGaugeRef(component: IgrBulletGraph) {
        if (!component) { return; }

        this.gauge = component;
        this.onAnimateToGauge3(null);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample" >

                <div className="options horizontal">
                    <button onClick={this.onAnimateToGauge1} className="options-button">Gauge Animation #1</button>
                    <button onClick={this.onAnimateToGauge2} className="options-button">Gauge Animation #2</button>
                    <button onClick={this.onAnimateToGauge3} className="options-button">Gauge Animation #3</button>
                </div>

                <IgrBulletGraph
                    ref={this.onGaugeRef}                    
                    height="80px"
                    width="100%"
                    minimumValue={0}
                    maximumValue={120}
                    valueBrush="#4286f4"
                    value={70}
                    targetValueBrush="#4286f4"
                    targetValue={90}
                    targetValueBreadth={10}
                    interval={10}
                    labelInterval={10}
                    labelExtent={0.02}
                    rangeBrushes ="#FF9800, #F96232, #C62828"
                    rangeOutlines="#FF9800, #F96232, #C62828"
                    scaleBackgroundThickness={0}
                    scaleBackgroundBrush="#dbdbdb"
                    scaleBackgroundOutline="gray"/>
            </div>
        );
    }

    public onAnimateToGauge3 = (e: any) => {

        // if (!this.gauge) { return; }
        if(this.shouldAnimate){
            this.gauge.transitionDuration = 1000;
        }

        this.gauge.minimumValue = 0;
        this.gauge.maximumValue = 120;
        this.gauge.value = 70;
        this.gauge.interval = 10;

        // setting appearance of labels
        this.gauge.labelInterval = 10;
        this.gauge.labelExtent = 0.02;

        // setting custom appearance of performance bar
        this.gauge.valueInnerExtent = 0.5;
        this.gauge.valueOuterExtent = 0.7;
        this.gauge.valueBrush = "#000000";

        // setting custom appearance of target bar
        this.gauge.targetValueBrush = "#000000";
        this.gauge.targetValueBreadth = 10;
        this.gauge.targetValue = 90;

        // setting appearance of major/minor ticks
        this.gauge.minorTickCount = 5;
        this.gauge.minorTickEndExtent = 0.10;
        this.gauge.minorTickStartExtent = 0.20;
        this.gauge.tickStartExtent = 0.20;
        this.gauge.tickEndExtent = 0.05;
        this.gauge.tickStrokeThickness = 2;

        // setting custom gauge ranges
        const range1 = new IgrLinearGraphRange({});
        range1.startValue = 0;
        range1.endValue = 40;
        const range2 = new IgrLinearGraphRange({});
        range2.startValue = 40;
        range2.endValue = 80;
        const range3 = new IgrLinearGraphRange({});
        range3.startValue = 80;
        range3.endValue = 120;

        this.gauge.rangeBrushes  = [ "#FF9800", "#F96232", "#C62828"];
        this.gauge.rangeOutlines = [ "#FF9800", "#F96232", "#C62828"];
        this.gauge.ranges.clear();
        this.gauge.ranges.add(range1);
        this.gauge.ranges.add(range2);
        this.gauge.ranges.add(range3);

        // setting extent of all gauge ranges
        for (let i = 0; i < this.gauge.ranges.count; i++) {
            const range = this.gauge.ranges.item(i);
            range.innerStartExtent = 0.2;
            range.innerEndExtent = 0.2;
            range.outerStartExtent = 0.95;
            range.outerEndExtent = 0.95;
        }

        // setting extent of gauge scale
        this.gauge.scaleBackgroundThickness = 0.5;
        this.gauge.scaleBackgroundBrush = "#dbdbdb";
        this.gauge.scaleBackgroundOutline = "gray";
        this.gauge.scaleStartExtent = 0.05;
        this.gauge.scaleEndExtent = 0.95;
        this.gauge.scaleBackgroundThickness = 0;

        // setting appearance of backing fill and outline
        this.gauge.backingBrush = "#f7f7f7";
        this.gauge.backingOutline = "#d1d1d1";
        this.gauge.backingStrokeThickness = 0;

        this.shouldAnimate = true;
    }

    public onAnimateToGauge2 = (e: any) => {

        if (!this.gauge) { return; }

        if(this.shouldAnimate){
            this.gauge.transitionDuration = 1000;
        }

        this.gauge.minimumValue = 100;
        this.gauge.maximumValue = 200;
        this.gauge.value = 120;
        this.gauge.interval = 10;

        // setting appearance of labels
        this.gauge.labelInterval = 10;
        this.gauge.labelExtent = 0.02;

        // setting custom appearance of performance bar
        this.gauge.valueInnerExtent = 0.5;
        this.gauge.valueOuterExtent = 0.7;
        this.gauge.valueBrush = "#000000";

        // setting custom appearance of target bar
        this.gauge.targetValueBrush = "#000000";
        this.gauge.targetValueBreadth = 10;
        this.gauge.targetValue = 180;

        // setting appearance of major/minor ticks
        this.gauge.minorTickCount = 5;
        this.gauge.minorTickEndExtent = 0.10;
        this.gauge.minorTickStartExtent = 0.20;
        this.gauge.tickStartExtent = 0.20;
        this.gauge.tickEndExtent = 0.05;
        this.gauge.tickStrokeThickness = 2;

        // setting custom gauge ranges
        const range1 = new IgrLinearGraphRange({});
        range1.startValue = 100;
        range1.endValue = 125;
        const range2 = new IgrLinearGraphRange({});
        range2.startValue = 125;
        range2.endValue = 150;
        const range3 = new IgrLinearGraphRange({});
        range3.startValue = 150;
        range3.endValue = 175;
        const range4 = new IgrLinearGraphRange({});
        range4.startValue = 175;
        range4.endValue = 200;

        this.gauge.rangeBrushes  = [ "#0078C8", "#0099FF", "#21A7FF", "#4FB9FF"];
        this.gauge.rangeOutlines = [ "#0078C8", "#0099FF", "#21A7FF", "#4FB9FF"];
        this.gauge.ranges.clear();
        this.gauge.ranges.add(range1);
        this.gauge.ranges.add(range2);
        this.gauge.ranges.add(range3);
        this.gauge.ranges.add(range4);

        // setting extent of all gauge ranges
        for (let i = 0; i < this.gauge.ranges.count; i++) {
            const range = this.gauge.ranges.item(i);
            range.innerStartExtent = 0.2;
            range.innerEndExtent = 0.2;
            range.outerStartExtent = 0.95;
            range.outerEndExtent = 0.95;
        }

        // setting extent of gauge scale
        this.gauge.scaleBackgroundThickness = 0.5;
        this.gauge.scaleBackgroundBrush = "#dbdbdb";
        this.gauge.scaleBackgroundOutline = "gray";
        this.gauge.scaleStartExtent = 0.05;
        this.gauge.scaleEndExtent = 0.95;
        this.gauge.scaleBackgroundThickness = 0;

        // setting appearance of backing fill and outline
        this.gauge.backingBrush = "#f7f7f7";
        this.gauge.backingOutline = "#d1d1d1";
        this.gauge.backingStrokeThickness = 0;

        this.shouldAnimate = true;
    }

    public onAnimateToGauge1 = (e: any) => {

        if (!this.gauge) { return; }

        if(this.shouldAnimate){
            this.gauge.transitionDuration = 1000;
        }

        this.gauge.minimumValue = 0;
        this.gauge.maximumValue = 80;
        this.gauge.value = 70;
        this.gauge.interval = 20;

        // setting appearance of labels
        this.gauge.labelInterval = 20;
        this.gauge.labelExtent = 0.02;

        // setting custom appearance of performance bar
        this.gauge.valueInnerExtent = 0.5;
        this.gauge.valueOuterExtent = 0.7;
        this.gauge.valueBrush = "#000000";

        // setting custom appearance of target bar
        this.gauge.targetValueBrush = "#000000";
        this.gauge.targetValueBreadth = 10;
        this.gauge.targetValue = 60;

        // setting appearance of major/minor ticks
        this.gauge.minorTickCount = 5;
        this.gauge.minorTickEndExtent = 0.10;
        this.gauge.minorTickStartExtent = 0.20;
        this.gauge.tickStartExtent = 0.20;
        this.gauge.tickEndExtent = 0.05;
        this.gauge.tickStrokeThickness = 2;

        // setting custom gauge ranges
        const range1 = new IgrLinearGraphRange({});
        range1.startValue = 0;
        range1.endValue = 40;
        const range2 = new IgrLinearGraphRange({});
        range2.startValue = 40;
        range2.endValue = 80;

        this.gauge.rangeBrushes  = [ "#a4bd29", "#F86232" ];
        this.gauge.rangeOutlines = [ "#a4bd29", "#F86232" ];
        this.gauge.ranges.clear();
        this.gauge.ranges.add(range1);
        this.gauge.ranges.add(range2);

        // setting extent of all gauge ranges
        for (let i = 0; i < this.gauge.ranges.count; i++) {
            const range = this.gauge.ranges.item(i);
            range.innerStartExtent = 0.2;
            range.innerEndExtent = 0.2;
            range.outerStartExtent = 0.95;
            range.outerEndExtent = 0.95;
        }

        // setting extent of gauge scale
        this.gauge.scaleBackgroundThickness = 0.5;
        this.gauge.scaleBackgroundBrush = "#dbdbdb";
        this.gauge.scaleBackgroundOutline = "gray";
        this.gauge.scaleStartExtent = 0.05;
        this.gauge.scaleEndExtent = 0.95;
        this.gauge.scaleBackgroundThickness = 0;

        // setting appearance of backing fill and outline
        this.gauge.backingBrush = "#f7f7f7";
        this.gauge.backingOutline = "#d1d1d1";
        this.gauge.backingStrokeThickness = 0;

        this.shouldAnimate = true;
    }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BulletGraphAnimation/>);
```


<div class="divider--half"></div>

The bullet graph supports one scale, one set of tick marks and one set of labels. The bullet graph component also has built-in support for animated transitions. This animation is easily customizable by setting the [`transitionDuration`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrbulletgraph.html#transitionDuration) property.
The features of the bullet graph include configurable orientation and direction, configurable visual elements such as the needle, and more.

<!-- Angular, React, WebComponents -->

## Dependencies

When installing the gauge package, the core package must also be installed.

```cmd
npm install --save igniteui-react-core
npm install --save igniteui-react-gauges
```

<!-- end: Angular, React, WebComponents -->

## Component Modules

The [`IgrBulletGraph`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrbulletgraph.html) requires the following modules:

```ts
import { IgrBulletGraphModule } from 'igniteui-react-gauges';

IgrBulletGraphModule.register();
```

<div class="divider--half"></div>

## Usage

The following code walks through creating a bullet graph component, and configuring a performance bar, comparative measure marker, and three comparative ranges on the scale.

```tsx
 <IgrBulletGraph height="100"
                   width="300"
                   minimumValue={5}
                   maximumValue={55}
                   value={35}
                   targetValue={43}>
        <IgrLinearGraphRange startValue={0}
                                endValue={15}
                                brush="#828181"/>
        <IgrLinearGraphRange StartValue={15}
                                endValue={30}
                                brush="#AAAAAA"/>
        <IgrLinearGraphRange StartValue={30}
                                bndValue={55}
                                brush="#D0D0D0"/>
 </IgrBulletGraph>
```

<div class="divider--half"></div>

## Comparative Measures

The bullet graph can show two measures: performance value and target value.

Performance value is the primary measure displayed by the component and it is visualized as a bar that stretches along the length of the whole graph. The target value is a measure which the performance value compares against. It is displayed as a small block that runs perpendicular to the orientation of the performance bar.

```tsx
<IgrBulletGraph
    value={50}
    valueBrush="DodgerBlue"
    valueStrokeThickness={1}
    valueInnerExtent={0.5}
    valueOuterExtent={0.65}
    targetValue={80}
    targetValueBreadth={10}
    targetValueBrush="LimeGreen"
    targetValueOutline="LimeGreen"
    targetValueStrokeThickness={1}
    targetValueInnerExtent={0.3}
    targetValueOuterExtent={0.85}
    height="80px" width="400px"
    minimumValue={0} value={50}
    maximumValue={100} />
```

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrBulletGraph } from 'igniteui-react-gauges';
import { IgrBulletGraphModule } from 'igniteui-react-gauges';

IgrBulletGraphModule.register();

export default class BulletGraphMeasures extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="container sample" >
                <IgrBulletGraph
                     height="80px"
                     width="100%"
                     minimumValue={0}
                     maximumValue={100}

                     value={50}
                     valueBrush="DodgerBlue"
                     valueStrokeThickness={1}
                     valueInnerExtent={0.5}
                     valueOuterExtent={0.65}

                     targetValue={80}
                     targetValueBreadth={10}
                     targetValueBrush="LimeGreen"
                     targetValueOutline="LimeGreen"
                     targetValueStrokeThickness={1}
                     targetValueInnerExtent={0.3}
                     targetValueOuterExtent={0.85}

                     scaleBackgroundBrush = "#e5e5e5"
                     scaleBackgroundOutline = "#e5e5e5"
                     backingBrush = "#f7f7f7"
                     backingOutline = "#bfbfbf"
                     tickStrokeThickness = {1.5} />
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BulletGraphMeasures/>);
```


## Highlight Value

The bullet graph's performance value can be further modified to show progress represented as a highlighted value. This will make the [`value`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrbulletgraph.html#value) appear with a lower opacity. A good example is if [`value`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrbulletgraph.html#value) is 50 and  [`highlightValue`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrbulletgraph.html#highlightValue) is set to 25. This would represent a performance of 50% regardless of what the value of [`targetValue`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrbulletgraph.html#targetValue) is set to. To enable this first set [`highlightValueDisplayMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrbulletgraph.html#highlightValueDisplayMode) to Overlay and then apply a [`highlightValue`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrbulletgraph.html#highlightValue) to something lower than [`value`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrbulletgraph.html#value).

```tsx
<IgrBulletGraph
    height="80px"
    width="100%"
    value={70}
    targetValue={90}
    interval={10}
    minimumValue={0}
    maximumValue={100}
    labelInterval={10}
    labelExtent={0.025}
    labelsPreTerminal={0}
    labelsPostInitial={0}
    highlightValueDisplayMode="Overlay"
    highlightValue={25} />
```

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrBulletGraph } from 'igniteui-react-gauges';
import { IgrBulletGraphModule } from 'igniteui-react-gauges';

IgrBulletGraphModule.register();

export default class BulletGraphHighlightNeedle extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="container sample" >
                <IgrBulletGraph
                    height="80px"
                    width="100%"
                    value={70} 
                    targetValue={90}
                    interval={10}
                    minimumValue={0} 
                    maximumValue={100} 
                    labelInterval={10}
                    labelExtent={0.025}
                    labelsPreTerminal={0}
                    labelsPostInitial={0}
                    highlightValueDisplayMode="Overlay"
                    highlightValue={25} />
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BulletGraphHighlightNeedle/>);
```


## Comparative Ranges

The ranges are visual elements that highlight a specified range of values on a scale. Their purpose is to visually communicate the qualitative state of the performance bar measure, illustrating at the same time the degree to which it resides within that state.

```tsx
<IgrBulletGraph
    height="80px" width="400px"
    minimumValue={0} value={80} interval={10}
    maximumValue={100} targetValue={90}
    rangeBrushes ="#C62828, #F96232, #FF9800"
    rangeOutlines="#C62828, #F96232, #FF9800">
    <IgrLinearGraphRange
        startValue={0} endValue={40}
        innerStartExtent={0.075} innerEndExtent={0.075}
        outerStartExtent={0.95} outerEndExtent={0.95} />
    <IgrLinearGraphRange
        startValue={40} endValue={70}
        innerStartExtent={0.075} innerEndExtent={0.075}
        outerStartExtent={0.95} outerEndExtent={0.95} />
    <IgrLinearGraphRange
        startValue={70} endValue={100}
        innerStartExtent={0.075} innerEndExtent={0.075}
        outerStartExtent={0.95} outerEndExtent={0.95} />
</IgrBulletGraph>
```

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrBulletGraph } from 'igniteui-react-gauges';
import { IgrLinearGraphRange } from 'igniteui-react-gauges';
import { IgrBulletGraphModule } from 'igniteui-react-gauges';

IgrBulletGraphModule.register();

export default class BulletGraphRanges extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="container sample" >
                <IgrBulletGraph
                    height="80px"
                    width="100%"
                    minimumValue={0} value={80} interval={10}
                    maximumValue={100} targetValue={90}
                    rangeBrushes ="#C62828, #F96232, #FF9800"
                    rangeOutlines="#C62828, #F96232, #FF9800">
                    <IgrLinearGraphRange name="range1"
                        startValue={0} endValue={40}
                        innerStartExtent={0.075} innerEndExtent={0.075}
                        outerStartExtent={0.95} outerEndExtent={0.95} />
                    <IgrLinearGraphRange name="range2"
                        startValue={40} endValue={70}
                        innerStartExtent={0.075} innerEndExtent={0.075}
                        outerStartExtent={0.95} outerEndExtent={0.95} />
                    <IgrLinearGraphRange name="range3"
                        startValue={70} endValue={100}
                        innerStartExtent={0.075} innerEndExtent={0.075}
                        outerStartExtent={0.95} outerEndExtent={0.95} />
                </IgrBulletGraph>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BulletGraphRanges/>);
```


## Tick Marks

The tick marks serve as a visual division of the scale into intervals in order to increase the readability of the bullet graph.

- Major tick marks – The major tick marks are used as primary delimiters on the scale. The frequency they appear at, their extents and style can be controlled by setting their corresponding properties.
- Minor tick marks – The minor tick marks represent helper tick marks, which might be used to additionally improve the readability of the scale and can be customized in a way similar to the major ones.

```tsx
<IgrBulletGraph
    height="80px" width="400px"
    minimumValue={0} value={70}
    maximumValue={100} targetValue={90}
    interval={10}
    tickBrush="DodgerBlue"
    ticksPreTerminal={0}
    ticksPostInitial={0}
    tickStrokeThickness={2}
    tickStartExtent={0.2}
    tickEndExtent={0.075}
    minorTickCount={4}
    minorTickBrush="DarkViolet"
    minorTickEndExtent={0.1}
    minorTickStartExtent={0.2}
    minorTickStrokeThickness={1} />
```

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrBulletGraph } from 'igniteui-react-gauges';
import { IgrBulletGraphModule } from 'igniteui-react-gauges';

IgrBulletGraphModule.register();

export default class BulletGraphTickmarks extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="container sample" >
                <IgrBulletGraph
                    height="80px"
                    width="100%"
                    minimumValue={0} value={70} interval={10}
                    maximumValue={100} targetValue={90}

                    tickBrush="DodgerBlue"
                    ticksPreTerminal={0}
                    ticksPostInitial={0}
                    tickStrokeThickness={2}
                    tickStartExtent={0.2}
                    tickEndExtent={0.075}
                    minorTickCount={4}
                    minorTickBrush="DarkViolet"
                    minorTickEndExtent={0.1}
                    minorTickStartExtent={0.2}
                    minorTickStrokeThickness={1} />
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BulletGraphTickmarks/>);
```


## Labels

The labels indicate the measures on the scale.

```tsx
<IgrBulletGraph
    height="80px" width="400px"
    minimumValue={0} value={70} interval={10}
    maximumValue={100} targetValue={90}
    labelInterval={10}
    labelExtent={0.025}
    labelsPreTerminal={0}
    labelsPostInitial={0}
    fontBrush="DodgerBlue"
    font="11px Verdana"/>
```

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrBulletGraph } from 'igniteui-react-gauges';
import { IgrBulletGraphModule } from 'igniteui-react-gauges';

IgrBulletGraphModule.register();

export default class BulletGraphLabels extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="container sample" >
                <IgrBulletGraph
                    height="80px"
                    width="100%"
                    minimumValue={0} value={70} interval={10}
                    maximumValue={100} targetValue={90}
                    labelInterval={10}
                    labelExtent={0.025}
                    labelsPreTerminal={0}
                    labelsPostInitial={0}
                    fontBrush="DodgerBlue"
                    font="11px Verdana" />
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BulletGraphLabels/>);
```


## Backing

The backing element represents background and border of the bullet graph component. It is always the first element rendered and all the rest of elements such as labels, and tick marks are overlaid on top of it.

```tsx
<IgrBulletGraph
    height="80px" width="400px"
    minimumValue={0} value={70} interval={10}
    maximumValue={100} targetValue={90}
    backingBrush="#bddcfc"
    backingOutline="DodgerBlue"
    backingStrokeThickness={4}
    backingInnerExtent={0}
    backingOuterExtent={1} />
```

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrBulletGraph } from 'igniteui-react-gauges';
import { IgrBulletGraphModule } from 'igniteui-react-gauges';

IgrBulletGraphModule.register();

export default class BulletGraphBackground extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="container sample" >
                <IgrBulletGraph
                    height="80px"
                    width="100%"
                    minimumValue={0} value={70} interval={10}
                    maximumValue={100} targetValue={90}
                    backingBrush="#bddcfc"
                    backingOutline="DodgerBlue"
                    backingStrokeThickness={4}
                    backingInnerExtent={0}
                    backingOuterExtent={1} />
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BulletGraphBackground/>);
```


## Scale

The scale is visual element that highlights the full range of values in the gauge. You can customize appearance and shape of the scale. The scale can also be inverted (using [`isScaleInverted`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrbulletgraph.html#isScaleInverted) property) and all labels will be rendered from right-to-left instead of left-to-right.

```tsx
<IgrBulletGraph
    height="80px" width="400px"
    minimumValue={0} value={70} interval={10}
    maximumValue={100} targetValue={90}
    isScaleInverted={false}
    scaleBackgroundBrush="DodgerBlue"
    scaleBackgroundOutline="DarkViolet"
    scaleBackgroundThickness={2}
    scaleStartExtent={0.05}
    scaleEndExtent={0.95} />
```

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrBulletGraph } from 'igniteui-react-gauges';
import { IgrBulletGraphModule } from 'igniteui-react-gauges';

IgrBulletGraphModule.register();

export default class BulletGraphScale extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="container sample" >
                <IgrBulletGraph
                    height="80px"
                    width="100%"
                    minimumValue={0} value={70} interval={10}
                    maximumValue={100} targetValue={90}
                    isScaleInverted={false}
                    scaleBackgroundBrush="DodgerBlue"
                    scaleBackgroundOutline="Red"
                    scaleBackgroundThickness={2}
                    scaleStartExtent={0.05}
                    scaleEndExtent={0.95} />
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BulletGraphScale/>);
```


## Summary

For your convenience, all above code snippets are combined into one code block below that you can easily copy to your project and see the bullet graph with all features and visuals enabled.

```tsx
<IgrBulletGraph
    height="80px" width="400px"
    minimumValue={0}
    maximumValue={100}
    isScaleInverted={false}
    scaleBackgroundBrush="Gray"
    scaleBackgroundOutline="Gray"
    scaleBackgroundThickness={2}
    scaleStartExtent={0.05}
    scaleEndExtent={0.95}

    value={50}
    valueBrush="Black"
    valueStrokeThickness={1}
    valueInnerExtent={0.5}
    valueOuterExtent={0.65}
    targetValue={80}
    targetValueBreadth={7.5}
    targetValueBrush="Black"
    targetValueOutline="Black"
    targetValueStrokeThickness={1}
    targetValueInnerExtent={0.3}
    targetValueOuterExtent={0.85}

    labelInterval={10}
    labelExtent={0.025}
    labelsPreTerminal={0}
    labelsPostInitial={0}
    fontBrush="Black"
    font="11px Verdana"

    backingBrush="#cecece"
    backingOutline="#cecece"
    backingStrokeThickness={4}
    backingInnerExtent={0}
    backingOuterExtent={1}

    interval={10}
    tickBrush="Black"
    ticksPreTerminal={0}
    ticksPostInitial={0}
    tickStrokeThickness={2}
    tickStartExtent={0.2}
    tickEndExtent={0.075}

    minorTickCount={4}
    minorTickBrush="Black"
    minorTickEndExtent={0.1}
    minorTickStartExtent={0.2}
    minorTickStrokeThickness={1}

    rangeBrushes ="#C62828, #F96232, #FF9800"
    rangeOutlines="#C62828, #F96232, #FF9800">
    <IgrLinearGraphRange
        startValue={20} endValue={40}
        innerStartExtent={0.25} innerEndExtent={0.25}
        outerStartExtent={0.9} outerEndExtent={0.9} />
    <IgrLinearGraphRange
        startValue={40} endValue={60}
        innerStartExtent={0.25} innerEndExtent={0.25}
        outerStartExtent={0.9} outerEndExtent={0.9} />
    <IgrLinearGraphRange
        startValue={60} endValue={90}
        innerStartExtent={0.25} innerEndExtent={0.25}
        outerStartExtent={0.9} outerEndExtent={0.9} />
</IgrBulletGraph>
```

## API References

The following is a list of API members mentioned in the above sections:

- [`IgrBulletGraph`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrbulletgraph.html)
- [`IgrLinearGraphRange`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrlineargraphrange.html)

## Additional Resources

You can find more information about other types of gauges in these topics:

- [Linear Gauge](linear-gauge.md)
- [Radial Gauge](radial-gauge.md)
