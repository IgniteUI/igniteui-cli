---
title: Angular Radial Gauge Chart | Data Visualization Tools | Infragistics
_description: Use Infragistics' Angular radial gauge control to create engaging data visualizations and dashboards and show off KPIs with rich style and interactivity. Learn about the Ignite UI for Angular radial gauge configurable elements!
_keywords: Radial Gauge, Ignite UI for Angular, Infragistics, animation, labels, needle, scales, ranges, tick marks
_license: commercial
mentionedTypes: ["XamRadialGauge", "XamRadialGaugeRange"]
namespace: Infragistics.Controls.Gauges
_tocName: Radial Gauge
_premium: true
---

# Angular Radial Gauge Overview

The Angular radial gauge component provides a number of visual elements, like a needle, tick marks, ranges, and labels, in order to create a predefined shape and scale. The [`IgxRadialGaugeComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html)  also has built-in support for animated transitions. This animation is easily customizable by setting the [`transitionDuration`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#transitionDuration) property.

## Angular Radial Gauge Example

The following sample demonstrates how setting multiple properties on the same [`IgxRadialGaugeComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html) can transform it to completely different radial gauge.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxRadialGaugeModule } from "igniteui-angular-gauges";

import { IgxButtonModule } from "igniteui-angular";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,

],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxRadialGaugeModule,
    IgxButtonModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild } from "@angular/core";
// radial gauge imports
import { SweepDirection } from "igniteui-angular-core";
import { IgxRadialGaugeComponent } from "igniteui-angular-gauges";
import { IgxRadialGaugeRangeComponent } from "igniteui-angular-gauges";
import { RadialGaugeBackingShape } from "igniteui-angular-gauges";
import { RadialGaugeNeedleShape } from "igniteui-angular-gauges";
import { RadialGaugePivotShape } from "igniteui-angular-gauges";
import { RadialGaugeScaleOversweepShape } from "igniteui-angular-gauges";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit {

    @ViewChild("radialGauge", { static: true })
    public radialGauge: IgxRadialGaugeComponent;

    private shouldAnimate: boolean = false;

    public ngAfterViewInit(): void {

        this.AnimateToGauge3();
    }

    public AnimateToGauge4(): void {

        if(this.shouldAnimate){
            this.radialGauge.transitionDuration = 500;
        }

        this.radialGauge.height = "330px";
        this.radialGauge.width = "100%";
        this.radialGauge.minimumValue = 0;
        this.radialGauge.maximumValue = 80;
        this.radialGauge.value = 10;
        this.radialGauge.interval = 10;

        // Label Settings
        this.radialGauge.labelExtent = 0.6;
        this.radialGauge.labelInterval = 10;
        this.radialGauge.font = "10px Verdana,Arial";

        // Scale Settings
        this.radialGauge.scaleStartAngle = 150;
        this.radialGauge.scaleEndAngle = 30;
        this.radialGauge.scaleBrush = "#0b8fed";
        this.radialGauge.scaleOversweepShape = RadialGaugeScaleOversweepShape.Auto;
        this.radialGauge.scaleSweepDirection = SweepDirection.Clockwise;
        this.radialGauge.scaleEndExtent = 0.825;
        this.radialGauge.scaleStartExtent = 0.775;

        this.radialGauge.minorTickStartExtent = 0.7;
        this.radialGauge.minorTickEndExtent = 0.75;
        this.radialGauge.tickStartExtent = 0.675;
        this.radialGauge.tickEndExtent = 0.75;

        // Backing Settings
        this.radialGauge.backingShape = RadialGaugeBackingShape.Fitted;
        this.radialGauge.backingBrush = "#fcfcfc";
        this.radialGauge.backingOutline = "#d6d6d6";
        this.radialGauge.backingOversweep = 5;
        this.radialGauge.backingCornerRadius = 10;
        this.radialGauge.backingOuterExtent = 0.9;

        // Needle Settings
        this.radialGauge.needleShape = RadialGaugeNeedleShape.NeedleWithBulb;
        this.radialGauge.needlePivotShape = RadialGaugePivotShape.CircleOverlay;
        this.radialGauge.needleEndExtent = 0.5;
        this.radialGauge.needlePointFeatureExtent = 0.3;
        this.radialGauge.needlePivotWidthRatio = 0.2;
        this.radialGauge.needleBrush = "#9f9fa0";
        this.radialGauge.needleOutline = "#9f9fa0";
        this.radialGauge.needlePivotBrush = "#9f9fa0";
        this.radialGauge.needlePivotOutline = "#9f9fa0";

        // TickMark Settings
        this.radialGauge.tickBrush = "rgba(51, 51, 51, 1)";
        this.radialGauge.minorTickBrush = "rgba(73, 73, 73, 1)";
        this.radialGauge.minorTickCount = 6;

        this.radialGauge.ranges.clear();
        this.shouldAnimate = true;
    }

    public AnimateToGauge3(): void {

        if(this.shouldAnimate){
            this.radialGauge.transitionDuration = 500;
        }

        this.radialGauge.height = "330px";
        this.radialGauge.width = "100%";

        this.radialGauge.minimumValue = 0;
        this.radialGauge.maximumValue = 50;
        this.radialGauge.value = 25;
        this.radialGauge.interval = 5;

        // setting appearance of labels
        this.radialGauge.labelInterval = 5;
        this.radialGauge.labelExtent = 0.71;
        this.radialGauge.font = "10px Verdana,Arial";

        // setting custom needle
        this.radialGauge.isNeedleDraggingEnabled = true;
        this.radialGauge.needleEndExtent = 0.5;
        this.radialGauge.needleShape = RadialGaugeNeedleShape.Triangle;
        this.radialGauge.needleEndWidthRatio = 0.03;
        this.radialGauge.needleStartWidthRatio = 0.05;
        this.radialGauge.needlePivotShape = RadialGaugePivotShape.CircleOverlay;
        this.radialGauge.needlePivotWidthRatio = 0.15;
        this.radialGauge.needleBaseFeatureWidthRatio = 0.15;
        this.radialGauge.needleBrush = "#79797a";
        this.radialGauge.needleOutline = "#79797a";
        this.radialGauge.needlePivotBrush = "#79797a";
        this.radialGauge.needlePivotOutline = "#79797a";

        // setting appearance of major/minor ticks
        this.radialGauge.minorTickCount = 4;
        this.radialGauge.minorTickEndExtent = 0.625;
        this.radialGauge.minorTickStartExtent = 0.6;
        this.radialGauge.minorTickStrokeThickness = 1;
        this.radialGauge.minorTickBrush = "#79797a";
        this.radialGauge.tickStartExtent = 0.6;
        this.radialGauge.tickEndExtent = 0.65;
        this.radialGauge.tickStrokeThickness = 2;
        this.radialGauge.tickBrush = "#79797a";

        // setting extent of gauge scale
        this.radialGauge.scaleStartAngle = 120;
        this.radialGauge.scaleEndAngle = 60;
        this.radialGauge.scaleBrush = "#d6d6d6";
        this.radialGauge.scaleOversweepShape = RadialGaugeScaleOversweepShape.Fitted;
        this.radialGauge.scaleSweepDirection = SweepDirection.Clockwise;
        this.radialGauge.scaleEndExtent = 0.57;
        this.radialGauge.scaleStartExtent = 0.5;

        // setting appearance of backing dial
        this.radialGauge.backingBrush = "#fcfcfc";
        this.radialGauge.backingOutline = "#d6d6d6";
        this.radialGauge.backingStrokeThickness = 5;
        this.radialGauge.backingShape = RadialGaugeBackingShape.Circular;

        // setting custom gauge ranges
        const range1 = new IgxRadialGaugeRangeComponent();
        range1.startValue = 5;
        range1.endValue = 15;
        const range2 = new IgxRadialGaugeRangeComponent();
        range2.startValue = 15;
        range2.endValue = 35;
        const range3 = new IgxRadialGaugeRangeComponent();
        range3.startValue = 35;
        range3.endValue = 45;
        this.radialGauge.rangeBrushes  = [ "#F86232", "#DC3F76", "#7446B9"];
        this.radialGauge.rangeOutlines = [ "#F86232", "#DC3F76", "#7446B9"];
        this.radialGauge.ranges.clear();
        this.radialGauge.ranges.add(range1);
        this.radialGauge.ranges.add(range2);
        this.radialGauge.ranges.add(range3);
        // setting extent of all gauge ranges
        for (let i = 0; i < this.radialGauge.ranges.count; i++) {
            const range = this.radialGauge.ranges.item(i);
            range.innerStartExtent = 0.5;
            range.innerEndExtent = 0.5;
            range.outerStartExtent = 0.57;
            range.outerEndExtent = 0.57;
        }

        this.shouldAnimate = true;
    }

    public AnimateToGauge2(): void {

        if(this.shouldAnimate){
            this.radialGauge.transitionDuration = 500;
        }

        this.radialGauge.height = "330px";
        this.radialGauge.width = "100%";

        this.radialGauge.minimumValue = 100;
        this.radialGauge.maximumValue = 200;
        this.radialGauge.value = 125;

        // Scale Settings
        this.radialGauge.scaleStartAngle = 135;
        this.radialGauge.scaleEndAngle = 45;
        this.radialGauge.scaleBrush = "transparent";
        this.radialGauge.scaleSweepDirection = SweepDirection.Clockwise;

        // Backing Settings
        this.radialGauge.backingOutline = "white";
        this.radialGauge.backingBrush = "white";

        // Needle Settings
        this.radialGauge.needleEndExtent = 0.8;
        this.radialGauge.needleShape = RadialGaugeNeedleShape.Triangle;
        this.radialGauge.needlePivotShape = RadialGaugePivotShape.Circle;
        this.radialGauge.needlePivotWidthRatio = 0.1;
        this.radialGauge.needleBrush = "#79797a";
        this.radialGauge.needleOutline = "#79797a";

        // TickMark Settings
        this.radialGauge.tickBrush = "transparent";
        this.radialGauge.minorTickBrush = "transparent";

        // Label Settings
        this.radialGauge.labelInterval = 100;
        this.radialGauge.labelExtent = 1;
        this.radialGauge.font = "15px Verdana,Arial";

        // setting custom gauge ranges
        const range1 = new IgxRadialGaugeRangeComponent();
        range1.startValue = 100;
        range1.endValue = 150;
        const range2 = new IgxRadialGaugeRangeComponent();
        range2.startValue = 150;
        range2.endValue = 200;

        this.radialGauge.rangeBrushes  = [ "#32f845", "#bf32f8" ];
        this.radialGauge.rangeOutlines = [ "#32f845", "#bf32f8" ];
        this.radialGauge.ranges.clear();
        this.radialGauge.ranges.add(range1);
        this.radialGauge.ranges.add(range2);

        // setting extent of all gauge ranges
        for (let i = 0; i < this.radialGauge.ranges.count; i++) {
            const range = this.radialGauge.ranges.item(i);
            range.innerStartExtent = 0.3;
            range.innerEndExtent = 0.3;
            range.outerStartExtent = 0.9;
            range.outerEndExtent = 0.9;
        }

        this.shouldAnimate = true;
    }

    public AnimateToGauge1(): void {

        if(this.shouldAnimate){
            this.radialGauge.transitionDuration = 500;
        }

        this.radialGauge.height = "330px";
        this.radialGauge.width = "100%";

        this.radialGauge.minimumValue = 0;
        this.radialGauge.maximumValue = 10;
        this.radialGauge.value = 7.5;

        // Scale Settings
        this.radialGauge.scaleStartAngle = 200;
        this.radialGauge.scaleEndAngle = -20;
        this.radialGauge.scaleBrush = "transparent";
        this.radialGauge.scaleSweepDirection = SweepDirection.Clockwise;

        // Backing Settings
        this.radialGauge.backingOutline = "white";
        this.radialGauge.backingBrush = "white";

        // Needle Settings
        this.radialGauge.needleEndExtent = 0.8;
        this.radialGauge.needleShape = RadialGaugeNeedleShape.Triangle;
        this.radialGauge.needlePivotShape = RadialGaugePivotShape.Circle;
        this.radialGauge.needlePivotWidthRatio = 0.1;
        this.radialGauge.needleBrush = "#79797a";
        this.radialGauge.needleOutline = "#79797a";

        // TickMark Settings
        this.radialGauge.tickBrush = "transparent";
        this.radialGauge.minorTickBrush = "transparent";

        // Label Settings
        this.radialGauge.labelInterval = 10;
        this.radialGauge.labelExtent = 1;
        this.radialGauge.font = "15px Verdana,Arial";

        // setting custom gauge ranges
        const range1 = new IgxRadialGaugeRangeComponent();
        range1.startValue = 0;
        range1.endValue = 5;
        const range2 = new IgxRadialGaugeRangeComponent();
        range2.startValue = 5;
        range2.endValue = 10;

        this.radialGauge.rangeBrushes  = [ "#a4bd29", "#F86232" ];
        this.radialGauge.rangeOutlines = [ "#a4bd29", "#F86232" ];
        this.radialGauge.ranges.clear();
        this.radialGauge.ranges.add(range1);
        this.radialGauge.ranges.add(range2);

        // setting extent of all gauge ranges
        for (let i = 0; i < this.radialGauge.ranges.count; i++) {
            const range = this.radialGauge.ranges.item(i);
            range.innerStartExtent = 0.3;
            range.innerEndExtent = 0.3;
            range.outerStartExtent = 0.9;
            range.outerEndExtent = 0.9;
        }

        this.shouldAnimate = true;
    }
}
```
```html
<div class="container vertical">
    <div class="options horizontal" >
        <button (click)="AnimateToGauge1()"
                class="options-button">Animation #1</button>
        <button (click)="AnimateToGauge2()"
                class="options-button">Animation #2</button>
        <button (click)="AnimateToGauge3()"
                class="options-button">Animation #3</button>
        <button (click)="AnimateToGauge4()"
                class="options-button">Animation #4</button>
    </div>

    <div class="container" >
        <!-- Note the radial gauge requires settings only for
        minimumValue, maximumValue, and value properties.
        All other properties are optional and listed here
        for demonstration purpose only -->
        <igx-radial-gauge
            #radialGauge
            height="330px"
            width="100%"
            value=25
            interval=5
            minimumValue=0
            maximumValue=50

            labelInterval=5
            labelExtent=0.71
            minorTickCount=4
            minorTickEndExtent=.625
            minorTickStartExtent=.6
            minorTickStrokeThickness=1
            minorTickBrush = "#79797a"
            tickStartExtent=.6
            tickEndExtent=.65
            tickStrokeThickness=2
            tickBrush = "#79797a"
            needleShape="Triangle"
            needleEndWidthRatio=0.03
            needleStartWidthRatio=0.05
            needlePivotShape="CircleOverlay"
            needlePivotWidthRatio=0.15
            needleBaseFeatureWidthRatio=0.15
            needleBrush="#79797a"
            needleOutline="#79797a"
            needlePivotBrush="#79797a"
            needlePivotOutline="#79797a"
            isNeedleDraggingEnabled=true
            backingBrush="#fcfcfc"
            backingOutline="#d6d6d6"
            backingStrokeThickness=5
            scaleStartAngle=120
            scaleEndAngle=60
            scaleBrush="#d6d6d6"
            rangeBrushes="#F86232, #DC3F76, #7446B9"
            rangeOutlines="#F86232, #DC3F76, #7446B9">

        </igx-radial-gauge>
    </div>

</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Dependencies

When installing the gauge component, the core package must also be installed.

```cmd
npm install --save igniteui-angular-core
npm install --save igniteui-angular-gauges
```

## Component Modules

The [`IgxRadialGaugeComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html) requires the following modules:

```ts
// app.module.ts
import { IgxRadialGaugeModule } from 'igniteui-angular-gauges';

@NgModule({
    imports: [
        // ...
        IgxRadialGaugeModule
        // ...
    ]
})
export class AppModule {}
```

<div class="divider--half"></div>

## Usage

The following code demonstrates how create a radial gauge containing a needle and three comparative ranges on the scale.

```html
 <igx-radial-gauge height="400px" width="400px"
    value="25"
    interval="5"
    minimumValue="0"
    maximumValue="100">
    <igx-radial-gauge-range startValue="0"
                            endValue="30"
                            brush="red">
    </igx-radial-gauge-range>
    <igx-radial-gauge-range startValue="30"
                            endValue="60"
                            brush="yellow">
    </igx-radial-gauge-range>
    <igx-radial-gauge-range startValue="60"
                            endValue="100"
                            brush="green">
    </igx-radial-gauge-range>
</igx-radial-gauge>
```

<div class="divider--half"></div>

## Backing

The radial gauge component comes with a backing shape drawn behind the scale that acts as a background for the radial gauge.

The backing element represents background and border of the radial gauge component. It is always the first element rendered and all the rest of elements such as needle, labels, and tick marks are overlay on top of it.

The backing can be circular or fitted. A circular shape creates a 360 degree circle gauge while a fitted shape creates a filled arc segment encompassing the [`scaleStartAngle`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#scaleStartAngle) and [`scaleEndAngle`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#scaleEndAngle) properties. This can be set by setting the [`backingShape`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#backingShape) property.

```html
<igx-radial-gauge
    backingShape="Fitted"
    backingBrush="#fcfcfc"
    backingOutline="DodgerBlue"
    backingOversweep=5
    backingCornerRadius=10
    backingStrokeThickness=5
    backingOuterExtent=0.8
    backingInnerExtent=0.15
    scaleStartAngle=135 scaleEndAngle=45
    height="300px" width="300px"
    minimumValue=0 value=50
    maximumValue=80 interval=10>
</igx-radial-gauge>
```

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxRadialGaugeModule } from "igniteui-angular-gauges";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,

],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxRadialGaugeModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, OnInit, ViewChild } from "@angular/core";
// radial gauge imports
import { IgxRadialGaugeComponent } from "igniteui-angular-gauges";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    @ViewChild("radialGauge", { static: true })
    public radialGauge: IgxRadialGaugeComponent;

    public ngOnInit(): void {

        // changing defaults to highlight current feature
        this.radialGauge.scaleBrush = "#e8e8e8";
    }
}
```
```html
<div class="container vertical"    >
        <igx-radial-gauge #radialGauge
            backingShape="Fitted"
            backingBrush="#fcfcfc"
            backingOutline="DodgerBlue"
            backingOversweep=5
            backingCornerRadius=10
            backingStrokeThickness=5
            backingOuterExtent=0.8
            backingInnerExtent=0.15

            scaleStartAngle=135
            scaleEndAngle=45
            scaleBrush="#dddddd"

            height="300px" width="300px"
            minimumValue=0 value=50
            maximumValue=80 interval=10 >
        </igx-radial-gauge>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## Scale

The scale is visual element that highlights full range of values in the gauge which can be created by supplying [`minimumValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#minimumValue) and [`maximumValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#maximumValue) values. Together with backing, it defines overall shape of gauge. The [`scaleStartAngle`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#scaleStartAngle) and [`scaleEndAngle`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#scaleEndAngle) properties define bounds of arc of the scale. While, the [`scaleSweepDirection`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#scaleSweepDirection) property specifies whether the scale sweeps in clockwise or counter-clockwise direction. You can customize appearance of the scale by setting [`scaleBrush`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#scaleBrush), [`scaleStartExtent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#scaleStartExtent), and [`scaleEndExtent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#scaleEndExtent) properties.

```html
<igx-radial-gauge
    scaleStartAngle=135
    scaleEndAngle=45
    scaleBrush="DodgerBlue"
    scaleSweepDirection="Clockwise"
    scaleOversweep=1
    scaleOversweepShape="Fitted"
    scaleStartExtent=0.45
    scaleEndExtent=0.575
    height="300px" width="300px"
    minimumValue=0 value=50
    maximumValue=80 interval=10>
</igx-radial-gauge>
```

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxRadialGaugeModule } from "igniteui-angular-gauges";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,

],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxRadialGaugeModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, OnInit, ViewChild } from "@angular/core";
// radial gauge imports
import { IgxRadialGaugeComponent } from "igniteui-angular-gauges";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent {

    @ViewChild("radialGauge", { static: true })
    public radialGauge: IgxRadialGaugeComponent;
}
```
```html
<div class="container vertical"    >
        <igx-radial-gauge #radialGauge
            scaleStartAngle=135
            scaleEndAngle=45
            scaleBrush="DodgerBlue"
            scaleSweepDirection="Clockwise"
            scaleOversweep=1
            scaleOversweepShape="Fitted"
            scaleStartExtent=0.45
            scaleEndExtent=0.575

            height="300px" width="300px"
            minimumValue=0 value=50
            maximumValue=80 interval=10 >
        </igx-radial-gauge>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## Labels and Titles

The radial gauge labels are visual elements displaying numeric values at a specified interval between values of the [`minimumValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#minimumValue) and [`maximumValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#maximumValue) properties. You can position labels by setting the [`labelExtent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#labelExtent) property to a fraction, where 0 represents center of gauge and 1 represents outer extent of the gauge backing. Also, you can customize labels setting various styling properties such as [`fontBrush`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#fontBrush) and [`font`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#font).

Each of these labels for the needle have various styling attributes you can apply to change the font, angle, brush and distance from the center of the gauge such as [`titleExtent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#titleExtent), [`titleAngle`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#titleAngle), `SubtitleFontSize`, [`highlightLabelBrush`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#highlightLabelBrush).

```html
<igx-radial-gauge
    labelExtent=0.65
    labelInterval=10
    font="11px Verdana"
    fontBrush="DodgerBlue"
    height="300px" width="300px"
    minimumValue=0 value=50
    maximumValue=100 interval=10>
</igx-radial-gauge>
```

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxRadialGaugeModule } from "igniteui-angular-gauges";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,

],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxRadialGaugeModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, OnInit, ViewChild } from "@angular/core";
// radial gauge imports
import { IgxRadialGaugeComponent } from "igniteui-angular-gauges";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    @ViewChild("radialGauge", { static: true })
    public radialGauge: IgxRadialGaugeComponent;

    public ngOnInit(): void {

        // changing defaults to highlight current feature
        this.radialGauge.scaleBrush = "#e8e8e8";
    }
}
```
```html
<div class="container vertical"    >
        <igx-radial-gauge #radialGauge
            labelExtent=0.65
            labelInterval=10
            font="11px Verdana"
            fontBrush="DodgerBlue"
	    titleDisplaysValue=true
	    subtitleText="MPH"
            height="300px" width="300px"
            minimumValue=0 value=50
            maximumValue=80 interval=10  >
        </igx-radial-gauge>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## Title & Subtitle

[`titleText`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#titleText) and [`subtitleText`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#subtitleText) properties are available and can both be used to display custom text for the needle. Alternatively, [`titleDisplaysValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#titleDisplaysValue) and [`subtitleDisplaysValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#subtitleDisplaysValue), when set to true, will let display the needle's value and override [`titleText`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#titleText) and [`subtitleText`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#subtitleText). So you can occupy custom text for the title but show the value via the subtitle and vice versa.

If the highlight needle is shown, as explained below, then custom text can be shown via  [`highlightLabelText`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#highlightLabelText), otherwise [`highlightLabelDisplaysValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#highlightLabelDisplaysValue) can be enabled and display it's value.

```html
<igx-radial-gauge
    titleText="Global Sales"
    subtitleText="2024">
</igx-radial-gauge>
```

## Optical Scaling

The radial gauge's labels and titles can change it's scaling. To enable this, first set [`opticalScalingEnabled`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#opticalScalingEnabled) to true. Then you can set [`opticalScalingSize`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#opticalScalingSize) which manages the size at which labels have 100% optical scaling. Labels will have larger fonts when gauge's size is larger. For example, labels will have a 200% larger font size when this property is set to 500 and the gauge px size is doubled to eg. 1000.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxRadialGaugeModule } from "igniteui-angular-gauges";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,

],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxRadialGaugeModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, OnInit, ViewChild } from "@angular/core";
// radial gauge imports
import { IgxRadialGaugeComponent } from "igniteui-angular-gauges";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    @ViewChild("radialGauge", { static: true })
    public radialGauge: IgxRadialGaugeComponent;

    public ngOnInit(): void {

        // changing defaults to highlight current feature
        this.radialGauge.scaleBrush = "#e8e8e8";
    }

    public onOpticalScalingChanged = (e: any) => {
      const isEnabled = e.target.checked;
      this.radialGauge.opticalScalingEnabled = isEnabled;

      if (isEnabled) {
          this.radialGauge.opticalScalingEnabled = true;
      }
      else {
          this.radialGauge.opticalScalingEnabled = false;
      }
    }

    public onGaugeSizeChanged = (e: any) => {

        let num: number = parseInt(e.target.value);
        this.radialGauge.width = num.toString() + "%";
        this.radialGauge.height = num.toString() + "%";
    }
}
```
```html
<div class="container vertical"    >
    <div class="options horizontal">
        <label class="options-label">Optical Scaling: </label>
        <label class="options-label"><input type="checkbox" id="checkbox1" checked="true" (change)="onOpticalScalingChanged($event)"/> Resize Gauge: </label>
        <input class="options-slider" id="slider" type="range" min="20" max="100" step="10" value="100" (input)="onGaugeSizeChanged($event)"/>
    </div>   

    <igx-radial-gauge #radialGauge
        titleDisplaysValue="true"
        titleExtent="0.5"
        subtitleText="MPH"
        subtitleExtent="0.65"
        height="100%" width="100%%"
        minimumValue=0 value=50
        maximumValue=80 interval=10 
        opticalScalingEnabled="true"
        opticalScalingSize="500" >
    </igx-radial-gauge>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## Tick Marks

Tick marks are thin lines radiating from the center of the radial gauge. There are two types of tick marks: major and minor. Major tick marks are displayed at the [`interval`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#interval) between the [`minimumValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#minimumValue) and [`maximumValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#maximumValue) properties. Use the [`minorTickCount`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#minorTickCount) property to specify the number of minor tick marks displayed between each major tick mark. You can control the length of tick marks by setting a fraction (between 0 and 1) to [`tickStartExtent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#tickStartExtent), [`tickEndExtent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#tickEndExtent), [`minorTickStartExtent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#minorTickStartExtent), and [`minorTickEndExtent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#minorTickEndExtent) properties.

```html
<igx-radial-gauge
    tickStartExtent=0.45
    tickEndExtent=0.575
    tickStrokeThickness=2
    tickBrush="DodgerBlue"
    minorTickCount=4
    minorTickEndExtent=0.5
    minorTickStartExtent=0.575
    minorTickStrokeThickness=1
    minorTickBrush="DarkViolet"
    height="300px" width="300px"
    minimumValue=0 value=50
    maximumValue=80 interval=10>
</igx-radial-gauge>
```

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxRadialGaugeModule } from "igniteui-angular-gauges";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,

],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxRadialGaugeModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, OnInit, ViewChild } from "@angular/core";
// radial gauge imports
import { IgxRadialGaugeComponent } from "igniteui-angular-gauges";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    @ViewChild("radialGauge", { static: true })
    public radialGauge: IgxRadialGaugeComponent;

    public ngOnInit(): void {

        // changing defaults to highlight current feature
        this.radialGauge.scaleBrush = "#e8e8e8";
    }
}
```
```html
<div class="container vertical"    >

        <igx-radial-gauge #radialGauge
            tickStartExtent=0.5
            tickEndExtent=0.57
            tickStrokeThickness=2
            tickBrush="DodgerBlue"

            minorTickCount=4
            minorTickEndExtent=0.520
            minorTickStartExtent=0.57
            minorTickStrokeThickness=1
            minorTickBrush="DarkViolet"

            height="300px" width="300px"
            minimumValue=0 value=50
            maximumValue=80 interval=10 >
        </igx-radial-gauge>

</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## Ranges

A range highlights a set of continuous values bound by a specified [`minimumValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#minimumValue) and [`maximumValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#maximumValue) properties. You can add multiple ranges to the radial gauge by specifying their starting and ending values. Each range has a few customization properties such as [`brush`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugerangecomponent.html#brush) and [`outline`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugerangecomponent.html#outline). Alternatively, you can set [`rangeBrushes`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#rangeBrushes) and [`rangeOutlines`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#rangeOutlines) properties to a list of colors for the ranges.

```html
<igx-radial-gauge
    height="300px" width="300px"
    minimumValue=0 value=50
    maximumValue=80 interval=10
    rangeBrushes ="red, yellow, green"
    rangeOutlines="red, yellow, green">
   <igx-radial-gauge-range
       startValue=5  endValue=15 brush="red">
   </igx-radial-gauge-range>
   <igx-radial-gauge-range
       startValue=15  endValue=35 brush="yellow">
   </igx-radial-gauge-range>
   <igx-radial-gauge-range
       startValue=35  endValue=45 brush="green">
   </igx-radial-gauge-range>
</igx-radial-gauge>
```

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxRadialGaugeModule } from "igniteui-angular-gauges";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,

],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxRadialGaugeModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, OnInit, ViewChild } from "@angular/core";
// radial gauge imports
import { IgxRadialGaugeComponent } from "igniteui-angular-gauges";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    @ViewChild("radialGauge", { static: true })
    public radialGauge: IgxRadialGaugeComponent;

    public ngOnInit(): void {

        // changing defaults to highlight current feature
        this.radialGauge.scaleBrush = "#e8e8e8";
    }
}
```
```html
<div class="container vertical"    >
        <igx-radial-gauge #radialGauge
            height="300px" width="300px"
            minimumValue=0 value=50
            maximumValue=80 interval=10

            rangeBrushes ="#a4bd29, #F86232"
            rangeOutlines="#a4bd29, #F86232"  >

            <igx-radial-gauge-range
                startValue=10 endValue=25
                innerStartExtent=0.50 innerEndExtent=0.50
                outerStartExtent=0.57 outerEndExtent=0.57>
            </igx-radial-gauge-range>
            <igx-radial-gauge-range
                startValue=25 endValue=40
                innerStartExtent=0.50 innerEndExtent=0.50
                outerStartExtent=0.57 outerEndExtent=0.57>
            </igx-radial-gauge-range>
        </igx-radial-gauge>

</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## Needle

Radial gauge needles are visual elements used to signify a gauge set value. Needles are available in one of the several predefined shapes. The needle can have a pivot shape, which is placed in the center of the gauge. The pivot shape also takes one of the predefined shapes. Pivot shapes that include an overlay or an underlay can have a separate pivot brush applied to the shape.

The supported needle shapes and caps are set using the [`needleShape`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#needleShape) and [`needlePivotShape`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#needlePivotShape) properties.

You can enable an interactive mode of the gauge (using [`isNeedleDraggingEnabled`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#isNeedleDraggingEnabled) property) and the end-user will be able to change value by dragging the needle between values of [`minimumValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#minimumValue) and [`maximumValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#maximumValue) properties.

```html
<igx-radial-gauge
    value=50
    isNeedleDraggingEnabled=true
    isNeedleDraggingConstrained=true
    needleShape="NeedleWithBulb"
    needleBrush="DodgerBlue"
    needleOutline="DodgerBlue"
    needleEndExtent=0.475
    needleStrokeThickness=1
    needlePivotShape="CircleOverlay"
    needlePivotBrush="#9f9fa0"
    needlePivotOutline="#9f9fa0"
    needlePivotWidthRatio=0.2
    needlePivotStrokeThickness=1
    height="300px" width="300px"
    minimumValue=0
    maximumValue=80 interval=10>
</igx-radial-gauge>
```

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxRadialGaugeModule } from "igniteui-angular-gauges";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,

],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxRadialGaugeModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, OnInit, ViewChild } from "@angular/core";
// radial gauge imports
import { IgxRadialGaugeComponent } from "igniteui-angular-gauges";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    @ViewChild("radialGauge", { static: true })
    public radialGauge: IgxRadialGaugeComponent;

    public ngOnInit(): void {

        // changing defaults to highlight current feature
        this.radialGauge.scaleBrush = "#e8e8e8";
    }
}
```
```html
<div class="container vertical"    >
        <igx-radial-gauge #radialGauge height="300px" width="300px"
            isNeedleDraggingEnabled=true
            isNeedleDraggingConstrained=true
            needleShape="NeedleWithBulb"
            needleBrush="DodgerBlue"
            needleOutline="DodgerBlue"
            needleEndExtent=0.475
            needleStrokeThickness=1

            needlePivotShape="CircleOverlay"
            needlePivotBrush="#9f9fa0"
            needlePivotOutline="#9f9fa0"
            needlePivotWidthRatio=0.2
            needlePivotStrokeThickness=1

            value=50
            minimumValue=0
            maximumValue=80
            interval=10 >
        </igx-radial-gauge>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## Highlight Needle

The radial gauge can be modified to show a second needle. This will make the main needle's [`value`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#value) appear with a lower opacity. To enable this first set [`highlightValueDisplayMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#highlightValueDisplayMode) to Overlay and then apply a [`highlightValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#highlightValue).

```html
<igx-radial-gauge #radialGauge
    labelExtent=0.65
    labelInterval=10
    highlightValueDisplayMode="Overlay"
    highlightValue=50
    highlightLabelDisplaysValue=true
    highlightLabelSnapsToNeedlePivot=true
    isHighlightNeedleDraggingEnabled=true
    height="100%" width="100%"
    minimumValue=0 value=30
    maximumValue=100 interval=10  >
</igx-radial-gauge>
```

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxRadialGaugeModule } from "igniteui-angular-gauges";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,

],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxRadialGaugeModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, OnInit, ViewChild } from "@angular/core";
import { HighlightedValueDisplayMode } from "igniteui-angular-core";
// radial gauge imports
import { IgxRadialGaugeComponent } from "igniteui-angular-gauges";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    @ViewChild("radialGauge", { static: true })
    public radialGauge: IgxRadialGaugeComponent;

    public ngOnInit(): void {

        // changing defaults to highlight current feature
        this.radialGauge.scaleBrush = "#e8e8e8";
    }
}
```
```html
<div class="container vertical"    >
        <igx-radial-gauge #radialGauge
            labelExtent=0.65
            labelInterval=10
            highlightValueDisplayMode="Overlay"
            highlightValue=50
            highlightLabelDisplaysValue=true
            highlightLabelSnapsToNeedlePivot=true
            isHighlightNeedleDraggingEnabled=true
            height="100%" width="100%"
            minimumValue=0 value=30
            maximumValue=100 interval=10  >
        </igx-radial-gauge>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## Summary

For your convenience, all above code snippets are combined into one code block below that you can easily copy to your project and see the radial gauge with all features and visuals enabled.

```html
<igx-radial-gauge
    height="300px" width="300px"
    minimumValue=0
    maximumValue=80
    scaleStartAngle=135
    scaleEndAngle=45
    scaleBrush="#c6c6c6"
    scaleSweepDirection="Clockwise"
    scaleOversweep=1
    scaleOversweepShape="Fitted"
    scaleStartExtent=0.45
    scaleEndExtent=0.575

    value=70
    isNeedleDraggingEnabled=true
    isNeedleDraggingConstrained=true
    needleShape="NeedleWithBulb"
    needleBrush="DodgerBlue"
    needleOutline="DodgerBlue"
    needleEndExtent=0.475
    needleStrokeThickness=1
    needlePivotShape="CircleOverlay"
    needlePivotBrush="#9f9fa0"
    needlePivotOutline="#9f9fa0"
    needlePivotWidthRatio=0.2
    needlePivotStrokeThickness=1

    interval=10
    tickStartExtent=0.45
    tickEndExtent=0.575
    tickStrokeThickness=2
    tickBrush="Black"
    minorTickCount=4
    minorTickEndExtent=0.5
    minorTickStartExtent=0.575
    minorTickStrokeThickness=1
    minorTickBrush="Black"

    labelExtent=0.65
    labelInterval=10
    font="11px Verdana"
    fontBrush="Black"

    backingShape="Fitted"
    backingBrush="#ededed"
    backingOutline="Gray"
    backingOversweep=5
    backingCornerRadius=10
    backingStrokeThickness=5
    backingOuterExtent=0.8
    backingInnerExtent=0.15

    rangeBrushes ="#a4bd29, #F86232"
    rangeOutlines="#a4bd29, #F86232">
    <igx-radial-gauge-range
        startValue=20 endValue=40
        innerStartExtent=0.45 innerEndExtent=0.45
        outerStartExtent=0.57 outerEndExtent=0.57>
    </igx-radial-gauge-range>
    <igx-radial-gauge-range
        startValue=40 endValue=60
        innerStartExtent=0.45 innerEndExtent=0.45
        outerStartExtent=0.57 outerEndExtent=0.57>
    </igx-radial-gauge-range>
</igx-radial-gauge>
```

## API References

The following is a list of API members mentioned in the above sections:

- [`IgxRadialGaugeComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html)
- [`IgxRadialGaugeRangeComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugerangecomponent.html)

## Additional Resources

You can find more information about other types of gauges in these topics:

- [Bullet Graph](bullet-graph.md)
- [Linear Gauge](linear-gauge.md)
