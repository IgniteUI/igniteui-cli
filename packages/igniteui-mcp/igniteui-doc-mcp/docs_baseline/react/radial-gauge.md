---
title: React Radial Gauge Chart | Data Visualization Tools | Infragistics
_description: Use Infragistics' React radial gauge control to create engaging data visualizations and dashboards and show off KPIs with rich style and interactivity. Learn about the Ignite UI for React radial gauge configurable elements!
_keywords: Radial Gauge, Ignite UI for React, Infragistics, animation, labels, needle, scales, ranges, tick marks
_license: commercial
mentionedTypes: ["XamRadialGauge", "XamRadialGaugeRange"]
namespace: Infragistics.Controls.Gauges
_tocName: Radial Gauge
_premium: true
---

# React Radial Gauge Overview

The React radial gauge component provides a number of visual elements, like a needle, tick marks, ranges, and labels, in order to create a predefined shape and scale. The [`IgrRadialGauge`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html)  also has built-in support for animated transitions. This animation is easily customizable by setting the [`transitionDuration`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#transitionDuration) property.

## React Radial Gauge Example

The following sample demonstrates how setting multiple properties on the same [`IgrRadialGauge`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html) can transform it to completely different radial gauge.

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { SweepDirection } from 'igniteui-react-core';
import { IgrRadialGauge } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';
import { IgrRadialGaugeRange } from 'igniteui-react-gauges';
import { RadialGaugeBackingShape } from 'igniteui-react-gauges';
import { RadialGaugeNeedleShape } from 'igniteui-react-gauges';
import { RadialGaugePivotShape } from 'igniteui-react-gauges';
import { RadialGaugeScaleOversweepShape } from 'igniteui-react-gauges';

IgrRadialGaugeModule.register();

export default class RadialGaugeAnimation extends React.Component {
    public gauge: IgrRadialGauge;
    private shouldAnimate : boolean = false;

    constructor(props: any) {
        super(props);

        this.onGaugeRef = this.onGaugeRef.bind(this);
        this.onAnimateToGauge1 = this.onAnimateToGauge1.bind(this);
        this.onAnimateToGauge2 = this.onAnimateToGauge2.bind(this);
        this.onAnimateToGauge3 = this.onAnimateToGauge3.bind(this);
        this.onAnimateToGauge4 = this.onAnimateToGauge4.bind(this);
    }

    public onGaugeRef(component: IgrRadialGauge) {
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
                    <button onClick={this.onAnimateToGauge4} className="options-button">Gauge Animation #4</button>
                </div>

                <IgrRadialGauge
                    ref={this.onGaugeRef}                    
                    height="calc(100% - 50px)"
                    width="100%"
                    value={25}
                    interval={5}
                    minimumValue={0}
                    maximumValue={50}

                    labelInterval={5}
                    labelExtent={0.71}
                    minorTickCount={4}
                    minorTickEndExtent={.625}
                    minorTickStartExtent={.6}
                    minorTickStrokeThickness={1}
                    minorTickBrush = "#79797a"
                    tickStartExtent={.6}
                    tickEndExtent={.65}
                    tickStrokeThickness={2}
                    tickBrush="#79797a"
                    needleShape="Triangle"
                    needleEndWidthRatio={0.03}
                    needleStartWidthRatio={0.05}
                    needlePivotShape="CircleOverlay"
                    needlePivotWidthRatio={0.15}
                    needleBaseFeatureWidthRatio={0.15}
                    needleBrush="#79797a"
                    needleOutline="#79797a"
                    needlePivotBrush="#79797a"
                    needlePivotOutline="#79797a"
                    isNeedleDraggingEnabled={true}
                    backingBrush="#fcfcfc"
                    backingOutline="#d6d6d6"
                    backingStrokeThickness={5}
                    scaleStartAngle={120}
                    scaleEndAngle={60}
                    scaleBrush="#d6d6d6"
                    rangeBrushes="#F86232, #DC3F76, #7446B9"
                    rangeOutlines="#F86232, #DC3F76, #7446B9" />
            </div>
        );
    }

    // full radial gauge
    public onAnimateToGauge4 = (e: any) => {
        if (!this.gauge) { return; }

        if(this.shouldAnimate){
            this.gauge.transitionDuration = 1000;
        }

        this.gauge.minimumValue = 0;
        this.gauge.maximumValue = 50;
        this.gauge.value = 25;
        this.gauge.interval = 5;

        // setting appearance of labels
        this.gauge.labelInterval = 5;
        this.gauge.labelExtent = 0.71;
        this.gauge.font = "15px Verdana,Arial";

        // setting custom needle
        this.gauge.isNeedleDraggingEnabled = true;
        this.gauge.needleEndExtent = 0.5;
        this.gauge.needleShape = RadialGaugeNeedleShape.Triangle;
        this.gauge.needleEndWidthRatio = 0.03;
        this.gauge.needleStartWidthRatio = 0.05;
        this.gauge.needlePivotShape = RadialGaugePivotShape.CircleOverlay;
        this.gauge.needlePivotWidthRatio = 0.15;
        this.gauge.needleBaseFeatureWidthRatio = 0.15;
        this.gauge.needleBrush = "#79797a";
        this.gauge.needleOutline = "#79797a";
        this.gauge.needlePivotBrush = "#79797a";
        this.gauge.needlePivotOutline = "#79797a";

        // setting appearance of major/minor ticks
        this.gauge.minorTickCount = 4;
        this.gauge.minorTickEndExtent = 0.625;
        this.gauge.minorTickStartExtent = 0.6;
        this.gauge.minorTickStrokeThickness = 1;
        this.gauge.minorTickBrush = "#79797a";
        this.gauge.tickStartExtent = 0.6;
        this.gauge.tickEndExtent = 0.65;
        this.gauge.tickStrokeThickness = 2;
        this.gauge.tickBrush = "#79797a";

        // setting extent of gauge scale
        this.gauge.scaleStartAngle = 120;
        this.gauge.scaleEndAngle = 60;
        this.gauge.scaleBrush = "#d6d6d6";
        this.gauge.scaleOversweepShape = RadialGaugeScaleOversweepShape.Fitted;
        this.gauge.scaleSweepDirection = SweepDirection.Clockwise;
        this.gauge.scaleEndExtent = 0.57;
        this.gauge.scaleStartExtent = 0.5;

        // setting appearance of backing dial
        this.gauge.backingBrush = "#fcfcfc";
        this.gauge.backingOutline = "#d6d6d6";
        this.gauge.backingStrokeThickness = 5;
        this.gauge.backingShape = RadialGaugeBackingShape.Circular;

        // setting custom gauge ranges
        const range1 = new IgrRadialGaugeRange({});
        range1.startValue = 5;
        range1.endValue = 15;
        const range2 = new IgrRadialGaugeRange({});
        range2.startValue = 15;
        range2.endValue = 35;
        const range3 = new IgrRadialGaugeRange({});
        range3.startValue = 35;
        range3.endValue = 45;
        this.gauge.rangeBrushes  = [ "#F86232", "#DC3F76", "#7446B9"];
        this.gauge.rangeOutlines = [ "#F86232", "#DC3F76", "#7446B9"];
        this.gauge.ranges.clear();
        this.gauge.ranges.add(range1);
        this.gauge.ranges.add(range2);
        this.gauge.ranges.add(range3);
        // setting extent of all gauge ranges
        for (let i = 0; i < this.gauge.ranges.count; i++) {
            const range = this.gauge.ranges.item(i);
            range.innerStartExtent = 0.5;
            range.innerEndExtent = 0.5;
            range.outerStartExtent = 0.57;
            range.outerEndExtent = 0.57;
        }

        this.shouldAnimate = true;
    }

    // semi radial gauge
    public onAnimateToGauge3 = (e: any) => {
        if (!this.gauge) { return; }

        if(this.shouldAnimate){
            this.gauge.transitionDuration = 1000;
        }

        this.gauge.minimumValue = 0;
        this.gauge.maximumValue = 80;
        this.gauge.value = 10;
        this.gauge.interval = 10;

        // Label Settings
        this.gauge.labelExtent = 0.6;
        this.gauge.labelInterval = 10;
        this.gauge.font = "15px Verdana,Arial";

        // Scale Settings
        this.gauge.scaleStartAngle = 135;
        this.gauge.scaleEndAngle = 45;
        this.gauge.scaleBrush = "#0b8fed";
        this.gauge.scaleOversweepShape = RadialGaugeScaleOversweepShape.Auto;
        this.gauge.scaleSweepDirection = SweepDirection.Clockwise;
        this.gauge.scaleEndExtent = 0.825;
        this.gauge.scaleStartExtent = 0.775;

        this.gauge.minorTickStartExtent = 0.7;
        this.gauge.minorTickEndExtent = 0.75;
        this.gauge.tickStartExtent = 0.675;
        this.gauge.tickEndExtent = 0.75;

        // Backing Settings
        this.gauge.backingShape = RadialGaugeBackingShape.Fitted;
        this.gauge.backingBrush = "#fcfcfc";
        this.gauge.backingOutline = "#d6d6d6";
        this.gauge.backingOversweep = 5;
        this.gauge.backingCornerRadius = 10;
        this.gauge.backingOuterExtent = 0.9;

        // Needle Settings
        this.gauge.needleShape = RadialGaugeNeedleShape.NeedleWithBulb;
        this.gauge.needlePivotShape = RadialGaugePivotShape.CircleOverlay;
        this.gauge.needleEndExtent = 0.5;
        this.gauge.needlePointFeatureExtent = 0.3;
        this.gauge.needlePivotWidthRatio = 0.2;
        this.gauge.needleBrush = "#9f9fa0";
        this.gauge.needleOutline = "#9f9fa0";
        this.gauge.needlePivotBrush = "#9f9fa0";
        this.gauge.needlePivotOutline = "#9f9fa0";

        // TickMark Settings
        this.gauge.tickBrush = "rgba(51, 51, 51, 1)";
        this.gauge.minorTickBrush = "rgba(73, 73, 73, 1)";
        this.gauge.minorTickCount = 6;

        this.gauge.ranges.clear();
        this.shouldAnimate = true;
    }

    // half radial gauge
    public onAnimateToGauge2 = (e: any) => {
        if (!this.gauge) { return; }

        if(this.shouldAnimate){
            this.gauge.transitionDuration = 1000;
        }

        this.gauge.minimumValue = 100;
        this.gauge.maximumValue = 200;
        this.gauge.value = 125;

        // Scale Settings
        this.gauge.scaleStartAngle = 180;
        this.gauge.scaleEndAngle = 0;
        this.gauge.scaleBrush = "transparent";
        this.gauge.scaleSweepDirection = SweepDirection.Clockwise;

        // Backing Settings
        this.gauge.backingOutline = "white";
        this.gauge.backingBrush = "white";
        this.gauge.backingShape = RadialGaugeBackingShape.Fitted;

        // Needle Settings
        this.gauge.needleEndExtent = 0.8;
        this.gauge.needleShape = RadialGaugeNeedleShape.Triangle;
        this.gauge.needlePivotShape = RadialGaugePivotShape.Circle;
        this.gauge.needlePivotWidthRatio = 0.1;
        this.gauge.needleBrush = "#79797a";
        this.gauge.needleOutline = "#79797a";

        // TickMark Settings
        this.gauge.tickBrush = "transparent";
        this.gauge.minorTickBrush = "transparent";

        // Label Settings
        this.gauge.labelInterval = 50;
        this.gauge.labelExtent = 0.935;
        this.gauge.font = "13px Verdana,Arial";

        // setting custom gauge ranges
        const range1 = new IgrRadialGaugeRange({});
        range1.startValue = 100;
        range1.endValue = 150;
        const range2 = new IgrRadialGaugeRange({});
        range2.startValue = 150;
        range2.endValue = 200;

        this.gauge.rangeBrushes  = [ "#32f845", "#bf32f8" ];
        this.gauge.rangeOutlines = [ "#32f845", "#bf32f8" ];
        this.gauge.ranges.clear();
        this.gauge.ranges.add(range1);
        this.gauge.ranges.add(range2);

        // setting extent of all gauge ranges
        for (let i = 0; i < this.gauge.ranges.count; i++) {
            const range = this.gauge.ranges.item(i);
            range.innerStartExtent = 0.3;
            range.innerEndExtent = 0.3;
            range.outerStartExtent = 0.9;
            range.outerEndExtent = 0.9;
        }

        this.shouldAnimate = true;
    }

    // quatre radial gauge
    public onAnimateToGauge1 = (e: any) => {
        if (!this.gauge) { return; }

        if(this.shouldAnimate){
            this.gauge.transitionDuration = 1000;
        }

        this.gauge.minimumValue = 0;
        this.gauge.maximumValue = 10;
        this.gauge.value = 7.5;

        // Scale Settings
        this.gauge.scaleStartAngle = 180;
        this.gauge.scaleEndAngle = 270;
        this.gauge.scaleBrush = "transparent";
        this.gauge.scaleSweepDirection = SweepDirection.Clockwise;

        // Backing Settings
        this.gauge.backingOutline = "white";
        this.gauge.backingBrush = "white";
        this.gauge.backingShape = RadialGaugeBackingShape.Fitted;

        // Needle Settings
        this.gauge.needleEndExtent = 0.8;
        this.gauge.needleShape = RadialGaugeNeedleShape.Triangle;
        this.gauge.needlePivotShape = RadialGaugePivotShape.Circle;
        this.gauge.needlePivotWidthRatio = 0.1;
        this.gauge.needleBrush = "#79797a";
        this.gauge.needleOutline = "#79797a";

        // TickMark Settings
        this.gauge.tickBrush = "transparent";
        this.gauge.minorTickBrush = "transparent";

        // Label Settings
        this.gauge.labelInterval = 5;
        this.gauge.labelExtent = 0.915;
        this.gauge.font = "15px Verdana,Arial";

        // setting custom gauge ranges
        const range1 = new IgrRadialGaugeRange({});
        range1.startValue = 0;
        range1.endValue = 5;
        const range2 = new IgrRadialGaugeRange({});
        range2.startValue = 5;
        range2.endValue = 10;

        this.gauge.rangeBrushes  = [ "#a4bd29", "#F86232" ];
        this.gauge.rangeOutlines = [ "#a4bd29", "#F86232" ];
        this.gauge.ranges.clear();
        this.gauge.ranges.add(range1);
        this.gauge.ranges.add(range2);

        // setting extent of all gauge ranges
        for (let i = 0; i < this.gauge.ranges.count; i++) {
            const range = this.gauge.ranges.item(i);
            range.innerStartExtent = 0.3;
            range.innerEndExtent = 0.3;
            range.outerStartExtent = 0.9;
            range.outerEndExtent = 0.9;
        }

        this.shouldAnimate = true;
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadialGaugeAnimation/>);
```


<div class="divider--half"></div>

## Dependencies

When installing the gauge component, the core package must also be installed.

```cmd
npm install --save igniteui-react-core
npm install --save igniteui-react-gauges
```

## Component Modules

The [`IgrRadialGauge`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html) requires the following modules:

```ts
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';

IgrRadialGaugeModule.register();
```

<div class="divider--half"></div>

## Usage

The following code demonstrates how create a radial gauge containing a needle and three comparative ranges on the scale.

```tsx
 <IgrRadialGauge height="400px" width="400px"
    value={25}
    interval={5}
    minimumValue={0}
    maximumValue={100}>
    <IgrRadialGaugeRange startValue={0}
                         endValue={30}
                         brush="red"/>
    <IgrRadialGaugeRange startValue={30}
                         endValue={60}
                         brush="yellow"/>
    <IgrRadialGaugeRange startValue={60}
                         endValue={100}
                         brush="green"/>
</IgrRadialGauge>
```

<div class="divider--half"></div>

## Backing

The radial gauge component comes with a backing shape drawn behind the scale that acts as a background for the radial gauge.

The backing element represents background and border of the radial gauge component. It is always the first element rendered and all the rest of elements such as needle, labels, and tick marks are overlay on top of it.

The backing can be circular or fitted. A circular shape creates a 360 degree circle gauge while a fitted shape creates a filled arc segment encompassing the [`scaleStartAngle`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#scaleStartAngle) and [`scaleEndAngle`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#scaleEndAngle) properties. This can be set by setting the [`backingShape`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#backingShape) property.

```tsx
<IgrRadialGauge
    backingShape="Fitted"
    backingBrush="#fcfcfc"
    backingOutline="DodgerBlue"
    backingOversweep={5}
    backingCornerRadius={10}
    backingStrokeThickness={5}
    backingOuterExtent={0.8}
    backingInnerExtent={0.15}
    scaleStartAngle={135} scaleEndAngle={45}
    height="300px" width="300px"
    minimumValue={0} value={50}
    maximumValue={80} interval={10} />
```

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadialGauge } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';

IgrRadialGaugeModule.register();

export default class RadialGaugeBacking extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = { componentVisible: true }
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrRadialGauge
                    backingShape="Fitted"
                    backingBrush="#fcfcfc"
                    backingOutline="DodgerBlue"
                    backingOversweep={5}
                    backingCornerRadius={10}
                    backingStrokeThickness={5}
                    backingOuterExtent={0.8}
                    backingInnerExtent={0.15}

                    scaleStartAngle={135}
                    scaleEndAngle={45}
                    scaleBrush="#dddddd"

                    height="100%"
                    width="100%"
                    minimumValue={0} value={50}
                    maximumValue={80} interval={10} />
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadialGaugeBacking/>);
```


## Scale

The scale is visual element that highlights full range of values in the gauge which can be created by supplying [`minimumValue`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#minimumValue) and [`maximumValue`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#maximumValue) values. Together with backing, it defines overall shape of gauge. The [`scaleStartAngle`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#scaleStartAngle) and [`scaleEndAngle`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#scaleEndAngle) properties define bounds of arc of the scale. While, the [`scaleSweepDirection`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#scaleSweepDirection) property specifies whether the scale sweeps in clockwise or counter-clockwise direction. You can customize appearance of the scale by setting [`scaleBrush`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#scaleBrush), [`scaleStartExtent`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#scaleStartExtent), and [`scaleEndExtent`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#scaleEndExtent) properties.

```tsx
<IgrRadialGauge
    scaleStartAngle={135}
    scaleEndAngle={45}
    scaleBrush="DodgerBlue"
    scaleSweepDirection="Clockwise"
    scaleOversweep={1}
    scaleOversweepShape="Fitted"
    scaleStartExtent={0.45}
    scaleEndExtent={0.575}
    height="300px" width="300px"
    minimumValue={0} value={50}
    maximumValue={80} interval={10} />
```

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadialGauge } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';

IgrRadialGaugeModule.register();

export default class RadialGaugeScale extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = { componentVisible: true }
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
            <IgrRadialGauge
                scaleStartAngle={135}
                scaleEndAngle={45}
                scaleBrush="DodgerBlue"
                scaleSweepDirection="Clockwise"
                scaleOversweep={1}
                scaleOversweepShape="Fitted"
                scaleStartExtent={0.45}
                scaleEndExtent={0.575}

                height="100%"
                width="100%"
                minimumValue={0} value={50}
                maximumValue={80} interval={10} />
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadialGaugeScale/>);
```


## Labels and Titles

The radial gauge labels are visual elements displaying numeric values at a specified interval between values of the [`minimumValue`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#minimumValue) and [`maximumValue`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#maximumValue) properties. You can position labels by setting the [`labelExtent`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#labelExtent) property to a fraction, where 0 represents center of gauge and 1 represents outer extent of the gauge backing. Also, you can customize labels setting various styling properties such as [`fontBrush`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#fontBrush) and [`font`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#font).

Each of these labels for the needle have various styling attributes you can apply to change the font, angle, brush and distance from the center of the gauge such as [`titleExtent`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#titleExtent), [`titleAngle`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#titleAngle), `SubtitleFontSize`, [`highlightLabelBrush`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#highlightLabelBrush).

```tsx
<IgrRadialGauge
    labelExtent={0.65}
    labelInterval={10}
    font="11px Verdana"
    fontBrush="DodgerBlue"
    height="300px" width="300px"
    minimumValue={0} value={50}
    maximumValue={80} interval={10} />
```

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadialGauge } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';

IgrRadialGaugeModule.register();

export default class RadialGaugeLabels extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = { componentVisible: true }
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
            <IgrRadialGauge
                    titleDisplaysValue="true"
                    subtitleText="MPH"
                    scaleStartAngle={135}
                    scaleEndAngle={45}
                    scaleBrush="#dddddd"
                    height="100%"
                    width="100%"
                    minimumValue={0} value={50}
                    maximumValue={80} interval={10} />
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadialGaugeLabels/>);
```


## Title & Subtitle

[`titleText`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#titleText) and [`subtitleText`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#subtitleText) properties are available and can both be used to display custom text for the needle. Alternatively, [`titleDisplaysValue`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#titleDisplaysValue) and [`subtitleDisplaysValue`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#subtitleDisplaysValue), when set to true, will let display the needle's value and override [`titleText`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#titleText) and [`subtitleText`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#subtitleText). So you can occupy custom text for the title but show the value via the subtitle and vice versa.

If the highlight needle is shown, as explained below, then custom text can be shown via  [`highlightLabelText`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#highlightLabelText), otherwise [`highlightLabelDisplaysValue`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#highlightLabelDisplaysValue) can be enabled and display it's value.

```tsx
<IgrRadialGauge
    titleText="Global Sales"
    subtitleText="2024"
/>
```

## Optical Scaling

The radial gauge's labels and titles can change it's scaling. To enable this, first set [`opticalScalingEnabled`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#opticalScalingEnabled) to true. Then you can set [`opticalScalingSize`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#opticalScalingSize) which manages the size at which labels have 100% optical scaling. Labels will have larger fonts when gauge's size is larger. For example, labels will have a 200% larger font size when this property is set to 500 and the gauge px size is doubled to eg. 1000.

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadialGauge } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';

IgrRadialGaugeModule.register();

export default class RadialGaugeOpticalScaling extends React.Component<any, any> {

    public gauge: IgrRadialGauge;

    constructor(props: any) {
        super(props);
        this.onGaugeRef = this.onGaugeRef.bind(this);

        this.state = { componentVisible: true, 
            toggleOpticalScaling: true,
            gaugeSize: "100%",
            sliderVal: "100"}
    }

    public onGaugeRef(component: IgrRadialGauge) {
        if (!component) { return; }

        this.gauge = component;
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
            <div className="options horizontal">
                <label className="options-label">Optical Scaling: </label>
                <label className="options-label"><input type="checkbox"
                checked={this.state.toggleOpticalScaling}
                onChange={this.onOpticalScalingChanged}/> Resize Gauge: </label>
                <input className="options-slider" type="range" min={25} max={100} step={5} value={this.state.sliderVal}
                    onChange={this.onGaugeSizeChanged} />
            </div>
                
            <IgrRadialGauge
                    ref={this.onGaugeRef}
                    height={this.state.gaugeSize}
                    width={this.state.gaugeSize}
                    titleDisplaysValue="true"
                    subtitleText="MPG"       
                    minimumValue="0" value="50"
                    maximumValue="80" interval="10"
                    titleExtent={0.5}
                    subtitleExtent={0.65}
                    opticalScalingEnabled={this.state.toggleOpticalScaling} 
                    opticalScalingSize="500" />
            </div>
        );
    }

    public onOpticalScalingChanged = (e: any) => {
        const isEnabled = e.target.checked;
        this.setState( {crosshairsVisible: isEnabled} );

        if (isEnabled) {
            this.setState({toggleOpticalScaling: true})
        }
        else {
            this.setState({toggleOpticalScaling: false})
        }
    }

    public onGaugeSizeChanged = (e: any) => {
        let num: number = parseInt(e.target.value);
        this.setState({sliderVal: num.toString(), gaugeSize: num.toString() + "%"});
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadialGaugeOpticalScaling/>);
```


## Tick Marks

Tick marks are thin lines radiating from the center of the radial gauge. There are two types of tick marks: major and minor. Major tick marks are displayed at the [`interval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#interval) between the [`minimumValue`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#minimumValue) and [`maximumValue`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#maximumValue) properties. Use the [`minorTickCount`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#minorTickCount) property to specify the number of minor tick marks displayed between each major tick mark. You can control the length of tick marks by setting a fraction (between 0 and 1) to [`tickStartExtent`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#tickStartExtent), [`tickEndExtent`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#tickEndExtent), [`minorTickStartExtent`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#minorTickStartExtent), and [`minorTickEndExtent`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#minorTickEndExtent) properties.

```tsx
<IgrRadialGauge
    tickStartExtent={0.45}
    tickEndExtent={0.575}
    tickStrokeThickness={2}
    tickBrush="DodgerBlue"
    minorTickCount={4}
    minorTickEndExtent={0.5}
    minorTickStartExtent={0.575}
    minorTickStrokeThickness={1}
    minorTickBrush="DarkViolet"
    height="300px" width="300px"
    minimumValue={0} value={50}
    maximumValue={80} interval={10}/>
```

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadialGauge } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';

IgrRadialGaugeModule.register();

export default class RadialGaugeTickmarks extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = { componentVisible: true }
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
             <IgrRadialGauge
                tickStartExtent={0.5}
                tickEndExtent={0.57}
                tickStrokeThickness={2}
                tickBrush="DodgerBlue"

                minorTickCount={4}
                minorTickEndExtent={0.520}
                minorTickStartExtent={0.57}
                minorTickStrokeThickness={1}
                minorTickBrush="DarkViolet"

                height="100%"
                width="100%"
                minimumValue={0} value={50}
                maximumValue={80} interval={10} />
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadialGaugeTickmarks/>);
```


## Ranges

A range highlights a set of continuous values bound by a specified [`minimumValue`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#minimumValue) and [`maximumValue`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#maximumValue) properties. You can add multiple ranges to the radial gauge by specifying their starting and ending values. Each range has a few customization properties such as [`brush`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgaugerange.html#brush) and [`outline`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgaugerange.html#outline). Alternatively, you can set [`rangeBrushes`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#rangeBrushes) and [`rangeOutlines`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#rangeOutlines) properties to a list of colors for the ranges.

```tsx
<IgrRadialGauge
    height="300px" width="300px"
    minimumValue={0} value={50}
    maximumValue={80} interval={10}
    rangeBrushes ="red, yellow, green"
    rangeOutlines="red, yellow, green">
   <IgrRadialGaugeRange
       startValue={1}  endValue={10} brush="yellow" />
   <IgrRadialGaugeRange
       startValue={10}  endValue={25} brush="green" />
   <IgrRadialGaugeRange
       startValue={25}  endValue={40} brush="red" />
    <IgrRadialGaugeRange
       startValue={40}  endValue={80} brush="yellow" />
</IgrRadialGauge>
```

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadialGauge } from 'igniteui-react-gauges';
import { IgrRadialGaugeRange } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';

IgrRadialGaugeModule.register();

export default class RadialGaugeRanges extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = { componentVisible: true }
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
             <IgrRadialGauge
                height="100%"
                width="100%"
                minimumValue={0} value={50}
                maximumValue={80} interval={10}
                rangeBrushes ="#a4bd29, #F86232"
                rangeOutlines="#a4bd29, #F86232"  >
                <IgrRadialGaugeRange name="range1"
                    startValue={10} endValue={25}
                    innerStartExtent={0.50} innerEndExtent={0.50}
                    outerStartExtent={0.57} outerEndExtent={0.57} />
                <IgrRadialGaugeRange name="range2"
                    startValue={25} endValue={40}
                    innerStartExtent={0.50} innerEndExtent={0.50}
                    outerStartExtent={0.57} outerEndExtent={0.57} />
            </IgrRadialGauge>
        </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadialGaugeRanges/>);
```


## Needle

Radial gauge needles are visual elements used to signify a gauge set value. Needles are available in one of the several predefined shapes. The needle can have a pivot shape, which is placed in the center of the gauge. The pivot shape also takes one of the predefined shapes. Pivot shapes that include an overlay or an underlay can have a separate pivot brush applied to the shape.

The supported needle shapes and caps are set using the [`needleShape`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#needleShape) and [`needlePivotShape`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#needlePivotShape) properties.

You can enable an interactive mode of the gauge (using [`isNeedleDraggingEnabled`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#isNeedleDraggingEnabled) property) and the end-user will be able to change value by dragging the needle between values of [`minimumValue`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#minimumValue) and [`maximumValue`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#maximumValue) properties.

```tsx
<IgrRadialGauge
    value={50}
    isNeedleDraggingEnabled={true}
    isNeedleDraggingConstrained={true}
    needleShape="NeedleWithBulb"
    needleBrush="DodgerBlue"
    needleOutline="DodgerBlue"
    needleEndExtent={0.475}
    needleStrokeThickness={1}
    needlePivotShape="CircleOverlay"
    needlePivotBrush="#9f9fa0"
    needlePivotOutline="#9f9fa0"
    needlePivotWidthRatio={0.2}
    needlePivotStrokeThickness={1}
    height="300px" width="300px"
    minimumValue={0}
    maximumValue={80} interval={10} />
```

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadialGauge } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';

IgrRadialGaugeModule.register();

export default class RadialGaugeNeedle extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = { componentVisible: true }
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
            <IgrRadialGauge
                height="100%"
                width="100%"
                isNeedleDraggingEnabled={true}
                isNeedleDraggingConstrained={true}
                needleShape="NeedleWithBulb"
                needleBrush="DodgerBlue"
                needleOutline="DodgerBlue"
                needleEndExtent={0.475}
                needleStrokeThickness={1}

                needlePivotShape="CircleOverlay"
                needlePivotBrush="#9f9fa0"
                needlePivotOutline="#9f9fa0"
                needlePivotWidthRatio={0.2}
                needlePivotStrokeThickness={1}

                value={50}
                minimumValue={0}
                maximumValue={80}
                interval={10} />
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadialGaugeNeedle/>);
```


## Highlight Needle

The radial gauge can be modified to show a second needle. This will make the main needle's [`value`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#value) appear with a lower opacity. To enable this first set [`highlightValueDisplayMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#highlightValueDisplayMode) to Overlay and then apply a [`highlightValue`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#highlightValue).

```tsx
<IgrRadialGauge
    highlightValueDisplayMode="Overlay"
    highlightValue="25"
    isHighlightNeedleDraggingEnabled="true"
    isNeedleDraggingEnabled="true"
    titleDisplaysValue="true"
    label-interval="10"
    label-extent="0.65"
    height="100%"
    width="100%"
    minimumValue={0} value={75}
    maximumValue={80} interval={10}  />
```

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadialGauge } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';

IgrRadialGaugeModule.register();

export default class RadialGaugeHighlightNeedle extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = { componentVisible: true }
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
            <IgrRadialGauge 
                    highlightValue="50"                   
                    highlightValueDisplayMode="Overlay"
                    highlightLabelDisplaysValue="true"
                    highlightLabelSnapsToNeedlePivot="true"
                    isHighlightNeedleDraggingEnabled="true"
                    label-interval="10"
                    label-extent="0.65"        
                    height="100%"
                    width="100%"
                    minimumValue={0} value={30}
                    maximumValue={100} interval={10} />
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadialGaugeHighlightNeedle/>);
```


## Summary

For your convenience, all above code snippets are combined into one code block below that you can easily copy to your project and see the radial gauge with all features and visuals enabled.

```tsx
<IgrRadialGauge
    height="300px" width="300px"
    minimumValue={0}
    maximumValue={80}
    scaleStartAngle={135}
    scaleEndAngle={45}
    scaleBrush="#c6c6c6"
    scaleSweepDirection="Clockwise"
    scaleOversweep={1}
    scaleOversweepShape="Fitted"
    scaleStartExtent={0.45}
    scaleEndExtent={0.575}

    value={70}
    isNeedleDraggingEnabled={true}
    isNeedleDraggingConstrained={true}
    needleShape="NeedleWithBulb"
    needleBrush="DodgerBlue"
    needleOutline="DodgerBlue"
    needleEndExtent={0.475}
    needleStrokeThickness={1}
    needlePivotShape="CircleOverlay"
    needlePivotBrush="#9f9fa0"
    needlePivotOutline="#9f9fa0"
    needlePivotWidthRatio={0.2}
    needlePivotStrokeThickness={1}

    interval={10}
    tickStartExtent={0.45}
    tickEndExtent={0.575}
    tickStrokeThickness={2}
    tickBrush="Black"
    minorTickCount={4}
    minorTickEndExtent={0.5}
    minorTickStartExtent={0.575}
    minorTickStrokeThickness={1}
    minorTickBrush="Black"

    labelExtent={0.65}
    labelInterval={10}
    font="11px Verdana"
    fontBrush="Black"

    backingShape="Fitted"
    backingBrush="#ededed"
    backingOutline="Gray"
    backingOversweep={5}
    backingCornerRadius={10}
    backingStrokeThickness={5}
    backingOuterExtent={0.8}
    backingInnerExtent={0.15}

    rangeBrushes ="#a4bd29, #F86232"
    rangeOutlines="#a4bd29, #F86232">
    <IgrRadialGaugeRange
        startValue={20} endValue={40}
        innerStartExtent={0.45} innerEndExtent={0.45}
        outerStartExtent={0.57} outerEndExtent={0.57} />
    <IgrRadialGaugeRange
        startValue={40} endValue={60}
        innerStartExtent={0.45} innerEndExtent={0.45}
        outerStartExtent={0.57} outerEndExtent={0.57} />
</IgrRadialGauge>
```

## API References

The following is a list of API members mentioned in the above sections:

- [`IgrRadialGauge`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html)
- [`IgrRadialGaugeRange`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgaugerange.html)

## Additional Resources

You can find more information about other types of gauges in these topics:

- [Bullet Graph](bullet-graph.md)
- [Linear Gauge](linear-gauge.md)
