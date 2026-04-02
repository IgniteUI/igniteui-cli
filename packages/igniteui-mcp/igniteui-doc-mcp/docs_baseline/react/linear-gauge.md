---
title: React Linear Gauge | Data Visualization Tools | Infragistics
_description: Use Infragistics' React linear gauge control to visualize data with a simple and concise view. Learn about the Ignite UI for React linear gauge configurable elements!
_keywords: linear gauge, Ignite UI for React, Infragistics, animation, labels, needle, scales, ranges, tick marks
_license: commercial
mentionedTypes: ["XamLinearGauge"]
namespace: Infragistics.Controls.Gauges
_tocName: Linear Gauge
_premium: true
---

# React Linear Gauge Overview

The Ignite UI for React linear gauge component allows for visualizing data in the form of a linear gauge. The [`IgrLinearGauge`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrlineargauge.html) provides a simple and concise view of a value compared against a scale and one or more ranges. It supports one scale, one set of tick marks and one set of labels. The component has also a built-in support for animated transitions. This animation is easily customizable by setting the [`transitionDuration`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrlineargauge.html#transitionDuration) property. The features of the linear gauge component include configurable orientation and direction, configurable visual elements such as the needle, and more.

## React Linear Gauge Example

The following sample demonstrates how setting multiple properties on the same [`IgrLinearGauge`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrlineargauge.html) can transform it to completely different linear gauge.

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrLinearGauge } from 'igniteui-react-gauges';
import { IgrLinearGraphRange } from 'igniteui-react-gauges';
import { LinearGraphNeedleShape } from 'igniteui-react-gauges';
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';

IgrLinearGaugeModule.register();

export default class LinearGaugeAnimation extends React.Component {
    public gauge: IgrLinearGauge;
    private shouldAnimate: boolean = false;

    constructor(props: any) {
        super(props);

        this.onGaugeRef = this.onGaugeRef.bind(this);
        this.onAnimateToGauge1 = this.onAnimateToGauge1.bind(this);
        this.onAnimateToGauge2 = this.onAnimateToGauge2.bind(this);
        this.onAnimateToGauge3 = this.onAnimateToGauge3.bind(this);
    }

    public onGaugeRef(component: IgrLinearGauge) {
        if (!component) { return; }

        this.gauge = component;
        this.onAnimateToGauge3(null);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">

                <div className="options horizontal">
                    <button onClick={this.onAnimateToGauge1} className="options-button">Gauge Animation #1</button>
                    <button onClick={this.onAnimateToGauge2} className="options-button">Gauge Animation #2</button>
                    <button onClick={this.onAnimateToGauge3} className="options-button">Gauge Animation #3</button>
                </div>

                <IgrLinearGauge
                    ref={this.onGaugeRef}                    
                    height="80px"
                    width="100%"
                    minimumValue={0}
                    maximumValue={100}
                    value={50}
                    interval={10}
                    labelInterval={10}
                    labelExtent={0.0}

                    minorTickEndExtent={0.10}
                    minorTickStartExtent={0.20}
                    tickStartExtent={0.25}
                    tickEndExtent={0.05}
                    tickStrokeThickness={2}

                    needleShape="Needle"
                    needleBrush="#79797a"
                    needleOutline="#79797a"
                    scaleStrokeThickness={0}
                    scaleBrush="#ffffff"
                    scaleOutline="#d3d3d3"
                    backingBrush="#ffffff"
                    backingOutline="#d1d1d1"
                    backingStrokeThickness={0} />
            </div>
        );
    }

    public onAnimateToGauge1 = (e: any) => {
        if (!this.gauge) { return; }

        if (this.shouldAnimate) {
            this.gauge.transitionDuration = 1000;
        }

        // linear gauge requires settings for these properties:
        this.gauge.minimumValue = 0;
        this.gauge.maximumValue = 80;
        this.gauge.value = 60;
        this.gauge.interval = 20;

        // setting custom appearance of labels
        this.gauge.labelInterval = 20;
        this.gauge.labelExtent = 0.0;

        // setting custom appearance of needle
        this.gauge.isNeedleDraggingEnabled = true;
        this.gauge.needleShape = LinearGraphNeedleShape.Trapezoid;
        this.gauge.needleBrush = "#79797a";
        this.gauge.needleOutline = "#ffffffff";
        this.gauge.needleStrokeThickness = 1;
        this.gauge.needleOuterExtent = 0.9;
        this.gauge.needleInnerExtent = 0.3;

        // setting custom appearance of major/minor ticks
        this.gauge.minorTickCount = 5;
        this.gauge.minorTickEndExtent = 0.10;
        this.gauge.minorTickStartExtent = 0.20;
        this.gauge.minorTickStrokeThickness = 1;
        this.gauge.tickStartExtent = 0.25;
        this.gauge.tickEndExtent = 0.05;
        this.gauge.tickStrokeThickness = 2;

        // setting custom gauge ranges
        const range1 = new IgrLinearGraphRange({});
        range1.startValue = 0;
        range1.endValue = 40;
        const range2 = new IgrLinearGraphRange({});
        range2.startValue = 40;
        range2.endValue = 80;

        this.gauge.rangeBrushes = ["#a4bd29", "#F86232"];
        this.gauge.rangeOutlines = ["#a4bd29", "#F86232"];
        this.gauge.ranges.clear();
        this.gauge.ranges.add(range1);
        this.gauge.ranges.add(range2);

        // setting extent of all gauge ranges
        for (let i = 0; i < this.gauge.ranges.count; i++) {
            const range = this.gauge.ranges.item(i);
            range.innerStartExtent = 0.075;
            range.innerEndExtent = 0.075;
            range.outerStartExtent = 0.65;
            range.outerEndExtent = 0.65;
        }

        // setting extent of gauge scale
        this.gauge.scaleStrokeThickness = 0;
        this.gauge.scaleBrush = "#ffffff";
        this.gauge.scaleOutline = "#dbdbdb";
        this.gauge.scaleInnerExtent = 0.075;
        this.gauge.scaleOuterExtent = 0.85;
        this.gauge.scaleStartExtent = 0.05;
        this.gauge.scaleEndExtent = 0.95;

        // setting appearance of backing fill and outline
        this.gauge.backingBrush = "#ffffff";
        this.gauge.backingOutline = "#d1d1d1";
        this.gauge.backingStrokeThickness = 0;

        this.shouldAnimate = true;
    }

    public onAnimateToGauge2 = (e: any) => {
        if (!this.gauge) { return; }

        if (this.shouldAnimate) {
            this.gauge.transitionDuration = 1000;
        }
        // linear gauge requires settings for these properties:
        this.gauge.minimumValue = 100;
        this.gauge.maximumValue = 200;
        this.gauge.value = 150;
        this.gauge.interval = 20;

        // setting custom appearance of labels
        this.gauge.labelInterval = 20;
        this.gauge.labelExtent = 0.0;

        // setting custom appearance of needle
        this.gauge.isNeedleDraggingEnabled = true;
        this.gauge.needleShape = LinearGraphNeedleShape.Triangle;
        this.gauge.needleBrush = "#79797a";
        this.gauge.needleOutline = "#ffffffff";
        this.gauge.needleStrokeThickness = 1;
        this.gauge.needleOuterExtent = 0.9;
        this.gauge.needleInnerExtent = 0.3;

        // setting custom appearance of major/minor ticks
        this.gauge.minorTickCount = 4;
        this.gauge.minorTickEndExtent = 0.10;
        this.gauge.minorTickStartExtent = 0.20;
        this.gauge.minorTickStrokeThickness = 1;
        this.gauge.tickStartExtent = 0.25;
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

        this.gauge.rangeBrushes = ["#0078C8", "#0099FF", "#21A7FF", "#4FB9FF"];
        this.gauge.rangeOutlines = ["#0078C8", "#0099FF", "#21A7FF", "#4FB9FF"];
        this.gauge.ranges.clear();
        this.gauge.ranges.add(range1);
        this.gauge.ranges.add(range2);
        this.gauge.ranges.add(range3);
        this.gauge.ranges.add(range4);

        // setting extent of all gauge ranges
        for (let i = 0; i < this.gauge.ranges.count; i++) {
            const range = this.gauge.ranges.item(i);
            range.innerStartExtent = 0.075;
            range.innerEndExtent = 0.075;
            range.outerStartExtent = 0.65;
            range.outerEndExtent = 0.65;
        }

        // setting extent of gauge scale
        this.gauge.scaleStrokeThickness = 0;
        this.gauge.scaleBrush = "#ffffff";
        this.gauge.scaleOutline = "#dbdbdb";
        this.gauge.scaleInnerExtent = 0.075;
        this.gauge.scaleOuterExtent = 0.85;
        this.gauge.scaleStartExtent = 0.05;
        this.gauge.scaleEndExtent = 0.95;

        // setting appearance of backing fill and outline
        this.gauge.backingBrush = "#ffffff";
        this.gauge.backingOutline = "#d1d1d1";
        this.gauge.backingStrokeThickness = 0;

        this.shouldAnimate = true;
    }

    public onAnimateToGauge3 = (e: any) => {
        if (!this.gauge) { return; }

        if (this.shouldAnimate) {
            this.gauge.transitionDuration = 1000;
        }
        // linear gauge requires settings for these properties:
        this.gauge.minimumValue = 0;
        this.gauge.maximumValue = 100;
        this.gauge.value = 50;
        this.gauge.interval = 10;

        // setting custom appearance of labels
        this.gauge.labelInterval = 10;
        this.gauge.labelExtent = 0.0;

        // setting custom appearance of needle
        this.gauge.isNeedleDraggingEnabled = true;
        this.gauge.needleShape = LinearGraphNeedleShape.Needle;
        this.gauge.needleBrush = "#79797a";
        this.gauge.needleOutline = "#ffffffff";
        this.gauge.needleStrokeThickness = 1;
        this.gauge.needleOuterExtent = 0.9;
        this.gauge.needleInnerExtent = 0.3;

        // setting custom appearance of major/minor ticks
        this.gauge.minorTickCount = 5;
        this.gauge.minorTickEndExtent = 0.10;
        this.gauge.minorTickStartExtent = 0.20;
        this.gauge.minorTickStrokeThickness = 1;
        this.gauge.tickStartExtent = 0.25;
        this.gauge.tickEndExtent = 0.05;
        this.gauge.tickStrokeThickness = 2;

        // setting custom gauge ranges
        const range1 = new IgrLinearGraphRange({});
        range1.startValue = 0;
        range1.endValue = 30;
        const range2 = new IgrLinearGraphRange({});
        range2.startValue = 30;
        range2.endValue = 70;
        const range3 = new IgrLinearGraphRange({});
        range3.startValue = 70;
        range3.endValue = 100;

        this.gauge.rangeBrushes = ["#9FB328", "#438C47", "#3F51B5"];
        this.gauge.rangeOutlines = ["#9FB328", "#438C47", "#3F51B5"];
        this.gauge.ranges.clear();
        this.gauge.ranges.add(range1);
        this.gauge.ranges.add(range2);
        this.gauge.ranges.add(range3);

        // setting extent of all gauge ranges
        for (let i = 0; i < this.gauge.ranges.count; i++) {
            const range = this.gauge.ranges.item(i);
            range.innerStartExtent = 0.075;
            range.innerEndExtent = 0.075;
            range.outerStartExtent = 0.65;
            range.outerEndExtent = 0.65;
        }

        // setting extent of gauge scale
        this.gauge.scaleStrokeThickness = 0;
        this.gauge.scaleBrush = "#ffffff";
        this.gauge.scaleOutline = "#dbdbdb";
        this.gauge.scaleInnerExtent = 0.075;
        this.gauge.scaleOuterExtent = 0.85;
        this.gauge.scaleStartExtent = 0.05;
        this.gauge.scaleEndExtent = 0.95;

        // setting appearance of backing fill and outline
        this.gauge.backingBrush = "#ffffff";
        this.gauge.backingOutline = "#d1d1d1";
        this.gauge.backingStrokeThickness = 0;

        this.shouldAnimate = true;
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LinearGaugeAnimation/>);
```


<div class="divider--half"></div>

## Dependencies

When installing the React gauge component, the core package must also be installed.

```cmd
npm install --save igniteui-react-core
npm install --save igniteui-react-gauges
```

## Component Modules

The [`IgrLinearGauge`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrlineargauge.html) requires the following modules:

```ts
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';

IgrLinearGaugeModule.register();
```

<div class="divider--half"></div>

## Usage

The following code demonstrates how create a linear gauge containing a needle and three comparative ranges on the scale.

```tsx
 <IgrLinearGauge width="700px"
                   height="30px"
                   minimumValue = {5}
                   maximumValue = {55}
                   value = {43}>
    <IgrLinearGraphRange startValue={0}
                            endValue={15}
                            brush="red"/>
    <IgrLinearGraphRange startValue={15}
                            endValue={30}
                            brush="yellow"/>
    <IgrLinearGraphRange startValue={30}
                            endValue={55}
                            brush="green"/>
 </IgrLinearGauge>
```

<div class="divider--half"></div>

## Needle

This is the primary measure displayed by the linear gauge component and is visualized as a bar or you can customize it to show almost any shape as is demonstrated below.

```tsx
 <IgrLinearGauge
    height="80px" width="400px"
    minimumValue={0}
    maximumValue={100} interval={10}
    value={50}
    isNeedleDraggingEnabled={true}
    needleShape="Custom"
    needleBrush="DodgerBlue"
    needleOutline="DodgerBlue"
    needleStrokeThickness={1}
    needleBreadth={15}
    needleInnerExtent={0.35}
    needleOuterExtent={0.65}
    needleOuterPointExtent={0.8}
    needleInnerPointExtent={0.325}
    needleInnerPointWidth={0}
    needleOuterPointWidth={0.3}
    needleInnerBaseWidth={0}
    needleOuterBaseWidth={0.07} />
```

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrLinearGauge } from 'igniteui-react-gauges';
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';

IgrLinearGaugeModule.register();

export default class LinearGaugeNeedle extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="container sample">
            <IgrLinearGauge
                height="80px"
                width="100%"
                minimumValue={0} value={50}
                maximumValue={100} interval={10}

                isNeedleDraggingEnabled={true}
                needleShape="Custom"
                needleBrush="DodgerBlue"
                needleOutline="DodgerBlue"
                needleStrokeThickness={1}
                needleBreadth={15}
                needleInnerExtent={0.35}
                needleOuterExtent={0.65}
                needleOuterPointExtent={0.8}
                needleInnerPointExtent={0.325}
                needleInnerPointWidth={0}
                needleOuterPointWidth={0.3}
                needleInnerBaseWidth={0}
                needleOuterBaseWidth={0.07} />
        </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LinearGaugeNeedle/>);
```


## Highlight Needle

The linear gauge can be modified to show a second needle. This will make the main needle's [`value`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrlineargauge.html#value) appear with a lower opacity. To enable this first set [`highlightValueDisplayMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrlineargauge.html#highlightValueDisplayMode) to Overlay and then apply a [`highlightValue`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrlineargauge.html#highlightValue).

```tsx
<IgrLinearGauge
    height="80px"
    width="100%"
    value={75}
    minimumValue={0}
    maximumValue={100}
    interval={10}
    labelInterval={10}
    labelExtent={0.025}
    labelsPreTerminal={0}
    labelsPostInitial={0}
    needleBrush='blue'
    highlightValueDisplayMode="Overlay"
    highlightValue={25}
    isHighlightNeedleDraggingEnabled={true}
    />
```

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrLinearGauge } from 'igniteui-react-gauges';
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';

IgrLinearGaugeModule.register();

export default class LinearGaugeHighlightNeedle extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="container sample">
            <IgrLinearGauge
                height="80px"
                width="100%"
                value={75}
                minimumValue={0} 
                maximumValue={100} 
                interval={10}
                labelInterval={10}
                labelExtent={0.025}
                labelsPreTerminal={0}
                labelsPostInitial={0}
                needleBrush='blue'
                highlightValueDisplayMode="Overlay"
                highlightValue={25} 
                isHighlightNeedleDraggingEnabled={true}
                />
        </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LinearGaugeHighlightNeedle/>);
```


## Ranges

The ranges are visual elements that highlight a specified range of values on a scale. Their purpose is to visually communicate the qualitative state of the performance bar measure, illustrating at the same times the degree to which it resides within that state.

```tsx
<IgrLinearGauge
    height="80px" width="400px"
    minimumValue={0} value={50}
    maximumValue={100} interval={10}
    rangeBrushes="#a4bd29, #F86232"
    rangeOutlines="#a4bd29, #F86232" >
    <IgrLinearGraphRange
        startValue={0} endValue={50}
        innerStartExtent={0.075} innerEndExtent={0.075}
        outerStartExtent={0.25} outerEndExtent={0.4} />
    <IgrLinearGraphRange
        startValue={50} endValue={100}
        innerStartExtent={0.075} innerEndExtent={0.075}
        outerStartExtent={0.4} outerEndExtent={0.55} />
</IgrLinearGauge>
```

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrLinearGauge } from 'igniteui-react-gauges';
import { IgrLinearGraphRange } from 'igniteui-react-gauges';
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';

IgrLinearGaugeModule.register();

export default class LinearGaugeRanges extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="container sample">
            <IgrLinearGauge
                 height="80px"
                 width="100%"
                 minimumValue={0} value={50}
                 maximumValue={100} interval={10}

                 rangeBrushes="#a4bd29, #F86232"
                 rangeOutlines="#a4bd29, #F86232"  >
                 <IgrLinearGraphRange name="range1"
                     startValue={0} endValue={50}
                     innerStartExtent={0.075} innerEndExtent={0.075}
                     outerStartExtent={0.25} outerEndExtent={0.4} />
                <IgrLinearGraphRange name="range2"
                    startValue={50} endValue={100}
                    innerStartExtent={0.075} innerEndExtent={0.075}
                    outerStartExtent={0.4} outerEndExtent={0.55} />
            </IgrLinearGauge>
        </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LinearGaugeRanges/>);
```


## Tick Marks

The tick marks serve as a visual division of the scale into intervals in order to increase the readability of the linear gauge.

Major tick marks – The major tick marks are used as primary delimiters on the scale. The frequency they appear at, their extents and style can be controlled by setting their corresponding properties.

Minor tick marks – The minor tick marks represent helper tick marks, which might be used to additionally improve the readability of the scale and can be customized in a way similar to the major ones.

```tsx
<IgrLinearGauge
    height="80px" width="400px"
    minimumValue={0} value={50}
    maximumValue={100}
    interval={10}
    tickBrush="DodgerBlue"
    ticksPreTerminal={0}
    ticksPostInitial={0}
    tickStrokeThickness={2}
    tickStartExtent={0.25}
    tickEndExtent={0.05}
    minorTickCount={4}
    minorTickBrush="DarkViolet"
    minorTickEndExtent={0.05}
    minorTickStartExtent={0.15}
    minorTickStrokeThickness={1} />
```

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrLinearGauge } from 'igniteui-react-gauges';
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';

IgrLinearGaugeModule.register();

export default class LinearGaugeTickmarks extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="container sample">
            <IgrLinearGauge
                 height="80px"
                 width="100%"
                 minimumValue={0} value={50}
                 maximumValue={100} interval={10}

                 tickBrush="DodgerBlue"
                 ticksPreTerminal={0}
                 ticksPostInitial={0}
                 tickStrokeThickness={2}
                 tickStartExtent={0.25}
                 tickEndExtent={0.05}

                 minorTickCount={4}
                 minorTickBrush="DarkViolet"
                 minorTickEndExtent={0.05}
                 minorTickStartExtent={0.15}
                 minorTickStrokeThickness={1} />
        </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LinearGaugeTickmarks/>);
```


## Labels

The labels indicate the measures on the scale.

```tsx
<IgrLinearGauge
    height="80px" width="400px"
    minimumValue={0} value={50}
    maximumValue={100} interval={10}
    labelInterval={10}
    labelExtent={0.025}
    labelsPreTerminal={0}
    labelsPostInitial={0}
    fontBrush="DodgerBlue"
    font="11px Verdana" />
```

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrLinearGauge } from 'igniteui-react-gauges';
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';

IgrLinearGaugeModule.register();

export default class LinearGaugeLabels extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="container sample">
            <IgrLinearGauge
                height="80px"
                width="100%"
                minimumValue={0} value={50}
                maximumValue={100} interval={10}
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
root.render(<LinearGaugeLabels/>);
```


## Backing

The backing element represents background and border of the linear gauge component. It is always the first element rendered and all the rest of elements such as labels, and tick marks are overlaid on top of it.

```tsx
<IgrLinearGauge
    height="80px" width="400px"
    minimumValue={0} value={50}
    maximumValue={100} interval={10}
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
import { IgrLinearGauge } from 'igniteui-react-gauges';
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';

IgrLinearGaugeModule.register();

export default class LinearGaugeBacking extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="container sample">
            <IgrLinearGauge
                height="80px"
                width="100%"
                minimumValue={0} value={50}
                maximumValue={100} interval={10}
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
root.render(<LinearGaugeBacking/>);
```


## Scale

The scale is a visual element that highlights the full range of values in the linear gauge. You can customize the appearance and the shape of the scale. It can also be inverted (using [`isScaleInverted`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrlineargauge.html#isScaleInverted) property) and all labels will be rendered from right-to-left instead of left-to-right.

```tsx
<IgrLinearGauge
    height="80px" width="400px"
    minimumValue={0} value={50}
    maximumValue={100} interval={10}
    isScaleInverted={false}
    scaleBrush="DodgerBlue"
    scaleOutline="DarkViolet"
    scaleStrokeThickness={1}
    scaleInnerExtent={0.05}
    scaleOuterExtent={0.65}
    scaleStartExtent={0.05}
    scaleEndExtent={0.95} />
```

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrLinearGauge } from 'igniteui-react-gauges';
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';

IgrLinearGaugeModule.register();

export default class LinearGaugeScale extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="container sample">
            <IgrLinearGauge
                height="80px"
                width="100%"
                minimumValue={0} value={50}
                maximumValue={100} interval={10}
                isScaleInverted={false}
                scaleBrush="DodgerBlue"
                scaleOutline="Red"
                scaleStrokeThickness={2}
                scaleInnerExtent={0.05}
                scaleOuterExtent={0.65}
                scaleStartExtent={0.05}
                scaleEndExtent={0.95} />
        </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LinearGaugeScale/>);
```


## Summary

For your convenience, all above code snippets are combined into one code block below that you can easily copy to your project and see the linear gauge with all features and visuals enabled.

```tsx
<IgrLinearGauge
    height="80px" width="400px"
    minimumValue={0}
    maximumValue={100}

    labelInterval={10}
    labelExtent={0.025}
    labelsPreTerminal={0}
    labelsPostInitial={0}
    fontBrush="Black"
    font="11px Verdana"

    interval={10}
    tickBrush="Black"
    ticksPreTerminal={0}
    ticksPostInitial={0}
    tickStrokeThickness={2}
    tickStartExtent={0.25}
    tickEndExtent={0.05}

    minorTickCount={4}
    minorTickBrush="Black"
    minorTickEndExtent={0.05}
    minorTickStartExtent={0.15}
    minorTickStrokeThickness={1}

    value={50}
    isNeedleDraggingEnabled={true}
    needleShape="Custom"
    needleBrush="Black"
    needleOutline="Black"
    needleStrokeThickness={1}
    needleBreadth={15}
    needleInnerExtent={0.35}
    needleOuterExtent={0.65}
    needleOuterPointExtent={0.8}
    needleInnerPointExtent={0.325}
    needleInnerPointWidth={0}
    needleOuterPointWidth={0.3}
    needleInnerBaseWidth={0}
    needleOuterBaseWidth={0.07}

    isScaleInverted={false}
    scaleBrush="Gray"
    scaleOutline="Gray"
    scaleStrokeThickness={1}
    scaleInnerExtent={0.05}
    scaleOuterExtent={0.65}
    scaleStartExtent={0.05}
    scaleEndExtent={0.95}

    backingBrush="#cecece"
    backingOutline="#cecece"
    backingStrokeThickness={4}
    backingInnerExtent={0}
    backingOuterExtent={1}

    rangeBrushes ="#C62828, #F96232, #FF9800"
    rangeOutlines="#C62828, #F96232, #FF9800">
    <IgrLinearGraphRange
        startValue={0} endValue={50}
        innerStartExtent={0.075} innerEndExtent={0.075}
        outerStartExtent={0.25} outerEndExtent={0.4} />
    <IgrLinearGraphRange
        startValue={50} endValue={100}
        innerStartExtent={0.075} innerEndExtent={0.075}
        outerStartExtent={0.4} outerEndExtent={0.55} />
</IgrLinearGauge>
```

<div class="divider--half"></div>

## API References

The following is a list of API members mentioned in the above sections:

- [`IgrLinearGauge`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrlineargauge.html)
- [`IgrLinearGraphRange`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrlineargraphrange.html)

## Additional Resources

You can find more information about other types of gauges in these topics:

- [Bullet Graph](bullet-graph.md)
- [Radial Gauge](radial-gauge.md)
