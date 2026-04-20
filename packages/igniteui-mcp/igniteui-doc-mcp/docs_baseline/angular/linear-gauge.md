---
title: Angular Linear Gauge | Data Visualization Tools | Infragistics
_description: Use Infragistics' Angular linear gauge control to visualize data with a simple and concise view. Learn about the Ignite UI for Angular linear gauge configurable elements!
_keywords: linear gauge, Ignite UI for Angular, Infragistics, animation, labels, needle, scales, ranges, tick marks
_license: commercial
mentionedTypes: ["XamLinearGauge"]
namespace: Infragistics.Controls.Gauges
_tocName: Linear Gauge
_premium: true
---

# Angular Linear Gauge Overview

The Ignite UI for Angular linear gauge component allows for visualizing data in the form of a linear gauge. The [`IgxLinearGaugeComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxlineargaugecomponent.html) provides a simple and concise view of a value compared against a scale and one or more ranges. It supports one scale, one set of tick marks and one set of labels. The component has also a built-in support for animated transitions. This animation is easily customizable by setting the [`transitionDuration`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxlineargaugecomponent.html#transitionDuration) property. The features of the linear gauge component include configurable orientation and direction, configurable visual elements such as the needle, and more.

## Angular Linear Gauge Example

The following sample demonstrates how setting multiple properties on the same [`IgxLinearGaugeComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxlineargaugecomponent.html) can transform it to completely different linear gauge.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxLinearGaugeModule } from "igniteui-angular-gauges";

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
    IgxLinearGaugeModule,
    IgxButtonModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxLinearGaugeComponent } from "igniteui-angular-gauges";
import { IgxLinearGraphRangeComponent } from "igniteui-angular-gauges";
import { LinearGraphNeedleShape } from "igniteui-angular-gauges";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})

export class AppComponent implements AfterViewInit {

    @ViewChild("linearGauge", { static: true })
    public linearGauge: IgxLinearGaugeComponent;

    private shouldAnimate: boolean = false;

    public ngAfterViewInit(): void {
                        
        this.AnimateToGauge3();
    }

    public AnimateToGauge3(): void {
        // linear gauge requires settings for these properties:

        if(this.shouldAnimate){
            this.linearGauge.transitionDuration = 500;
        }

        this.linearGauge.minimumValue = 0;
        this.linearGauge.maximumValue = 100;
        this.linearGauge.value = 50;
        this.linearGauge.interval = 10;

        // setting custom appearance of labels
        this.linearGauge.labelInterval = 10;
        this.linearGauge.labelExtent = 0.05;

        // setting custom appearance of needle
        this.linearGauge.isNeedleDraggingEnabled = true;
        this.linearGauge.needleShape = LinearGraphNeedleShape.Needle;
        this.linearGauge.needleBrush = "#79797a";
        this.linearGauge.needleOutline = "#ffffffff";
        this.linearGauge.needleStrokeThickness = 1;
        this.linearGauge.needleOuterExtent = 0.9;
        this.linearGauge.needleInnerExtent = 0.3;

        // setting custom appearance of major/minor ticks
        this.linearGauge.minorTickCount = 5;
        this.linearGauge.minorTickEndExtent = 0.10;
        this.linearGauge.minorTickStartExtent = 0.20;
        this.linearGauge.minorTickStrokeThickness = 1;
        this.linearGauge.tickStartExtent = 0.25;
        this.linearGauge.tickEndExtent = 0.05;
        this.linearGauge.tickStrokeThickness = 2;

        // setting custom gauge ranges
        const range1 = new IgxLinearGraphRangeComponent();
        range1.startValue = 0;
        range1.endValue = 30;
        const range2 = new IgxLinearGraphRangeComponent();
        range2.startValue = 30;
        range2.endValue = 70;
        const range3 = new IgxLinearGraphRangeComponent();
        range3.startValue = 70;
        range3.endValue = 100;

        this.linearGauge.rangeBrushes  = [ "#9FB328", "#438C47", "#3F51B5"];
        this.linearGauge.rangeOutlines = [ "#9FB328", "#438C47", "#3F51B5"];
        this.linearGauge.ranges.clear();
        this.linearGauge.ranges.add(range1);
        this.linearGauge.ranges.add(range2);
        this.linearGauge.ranges.add(range3);

        // setting extent of all gauge ranges
        for (let i = 0; i < this.linearGauge.ranges.count; i++) {
            const range = this.linearGauge.ranges.item(i);
            range.innerStartExtent = 0.075;
            range.innerEndExtent = 0.075;
            range.outerStartExtent = 0.65;
            range.outerEndExtent = 0.65;
        }

        // setting extent of gauge scale
        this.linearGauge.scaleStrokeThickness = 0;
        this.linearGauge.scaleBrush = "#ffffff";
        this.linearGauge.scaleOutline = "#dbdbdb";
        this.linearGauge.scaleInnerExtent = 0.075;
        this.linearGauge.scaleOuterExtent = 0.85;
        this.linearGauge.scaleStartExtent = 0.05;
        this.linearGauge.scaleEndExtent = 0.95;

        // setting appearance of backing fill and outline
        this.linearGauge.backingBrush = "#ffffff";
        this.linearGauge.backingOutline = "#d1d1d1";
        this.linearGauge.backingStrokeThickness = 0;

        this.shouldAnimate = true;
    }

    public AnimateToGauge2(): void {

        if (this.shouldAnimate) {
            this.linearGauge.transitionDuration = 500;
        }
        // linear gauge requires settings for these properties:
        this.linearGauge.minimumValue = 100;
        this.linearGauge.maximumValue = 200;
        this.linearGauge.value = 150;
        this.linearGauge.interval = 20;

        // setting custom appearance of labels
        this.linearGauge.labelInterval = 20;
        this.linearGauge.labelExtent = 0.05;

        // setting custom appearance of needle
        this.linearGauge.isNeedleDraggingEnabled = true;
        this.linearGauge.needleShape = LinearGraphNeedleShape.Triangle;
        this.linearGauge.needleBrush = "#79797a";
        this.linearGauge.needleOutline = "#ffffffff";
        this.linearGauge.needleStrokeThickness = 1;
        this.linearGauge.needleOuterExtent = 0.9;
        this.linearGauge.needleInnerExtent = 0.3;

        // setting custom appearance of major/minor ticks
        this.linearGauge.minorTickCount = 4;
        this.linearGauge.minorTickEndExtent = 0.10;
        this.linearGauge.minorTickStartExtent = 0.20;
        this.linearGauge.minorTickStrokeThickness = 1;
        this.linearGauge.tickStartExtent = 0.25;
        this.linearGauge.tickEndExtent = 0.05;
        this.linearGauge.tickStrokeThickness = 2;

        // setting custom gauge ranges
        const range1 = new IgxLinearGraphRangeComponent();
        range1.startValue = 100;
        range1.endValue = 125;
        const range2 = new IgxLinearGraphRangeComponent();
        range2.startValue = 125;
        range2.endValue = 150;
        const range3 = new IgxLinearGraphRangeComponent();
        range3.startValue = 150;
        range3.endValue = 175;
        const range4 = new IgxLinearGraphRangeComponent();
        range4.startValue = 175;
        range4.endValue = 200;

        this.linearGauge.rangeBrushes = ["#0078C8", "#0099FF", "#21A7FF", "#4FB9FF"];
        this.linearGauge.rangeOutlines = ["#0078C8", "#0099FF", "#21A7FF", "#4FB9FF"];
        this.linearGauge.ranges.clear();
        this.linearGauge.ranges.add(range1);
        this.linearGauge.ranges.add(range2);
        this.linearGauge.ranges.add(range3);
        this.linearGauge.ranges.add(range4);

        // setting extent of all gauge ranges
        for (let i = 0; i < this.linearGauge.ranges.count; i++) {
            const range = this.linearGauge.ranges.item(i);
            range.innerStartExtent = 0.075;
            range.innerEndExtent = 0.075;
            range.outerStartExtent = 0.65;
            range.outerEndExtent = 0.65;
        }

        // setting extent of gauge scale
        this.linearGauge.scaleStrokeThickness = 0;
        this.linearGauge.scaleBrush = "#ffffff";
        this.linearGauge.scaleOutline = "#dbdbdb";
        this.linearGauge.scaleInnerExtent = 0.075;
        this.linearGauge.scaleOuterExtent = 0.85;
        this.linearGauge.scaleStartExtent = 0.05;
        this.linearGauge.scaleEndExtent = 0.95;

        // setting appearance of backing fill and outline
        this.linearGauge.backingBrush = "#ffffff";
        this.linearGauge.backingOutline = "#d1d1d1";
        this.linearGauge.backingStrokeThickness = 0;

        this.shouldAnimate = true;
    }

    public AnimateToGauge1(): void {

        if (this.shouldAnimate) {
            this.linearGauge.transitionDuration = 500;
        }
        // linear gauge requires settings for these properties:
        this.linearGauge.minimumValue = 0;
        this.linearGauge.maximumValue = 80;
        this.linearGauge.value = 60;
        this.linearGauge.interval = 20;

        // setting custom appearance of labels
        this.linearGauge.labelInterval = 20;
        this.linearGauge.labelExtent = 0.05;

        // setting custom appearance of needle
        this.linearGauge.isNeedleDraggingEnabled = true;
        this.linearGauge.needleShape = LinearGraphNeedleShape.Trapezoid;
        this.linearGauge.needleBrush = "#79797a";
        this.linearGauge.needleOutline = "#ffffffff";
        this.linearGauge.needleStrokeThickness = 1;
        this.linearGauge.needleOuterExtent = 0.9;
        this.linearGauge.needleInnerExtent = 0.3;

        // setting custom appearance of major/minor ticks
        this.linearGauge.minorTickCount = 5;
        this.linearGauge.minorTickEndExtent = 0.10;
        this.linearGauge.minorTickStartExtent = 0.20;
        this.linearGauge.minorTickStrokeThickness = 1;
        this.linearGauge.tickStartExtent = 0.25;
        this.linearGauge.tickEndExtent = 0.05;
        this.linearGauge.tickStrokeThickness = 2;

        // setting custom gauge ranges
        const range1 = new IgxLinearGraphRangeComponent();
        range1.startValue = 0;
        range1.endValue = 40;
        const range2 = new IgxLinearGraphRangeComponent();
        range2.startValue = 40;
        range2.endValue = 80;

        this.linearGauge.rangeBrushes  = [ "#a4bd29", "#F86232" ];
        this.linearGauge.rangeOutlines = [ "#a4bd29", "#F86232" ];
        this.linearGauge.ranges.clear();
        this.linearGauge.ranges.add(range1);
        this.linearGauge.ranges.add(range2);

        // setting extent of all gauge ranges
        for (let i = 0; i < this.linearGauge.ranges.count; i++) {
            const range = this.linearGauge.ranges.item(i);
            range.innerStartExtent = 0.075;
            range.innerEndExtent = 0.075;
            range.outerStartExtent = 0.65;
            range.outerEndExtent = 0.65;
        }

        // setting extent of gauge scale
        this.linearGauge.scaleStrokeThickness = 0;
        this.linearGauge.scaleBrush = "#ffffff";
        this.linearGauge.scaleOutline = "#dbdbdb";
        this.linearGauge.scaleInnerExtent = 0.075;
        this.linearGauge.scaleOuterExtent = 0.85;
        this.linearGauge.scaleStartExtent = 0.05;
        this.linearGauge.scaleEndExtent = 0.95;

        // setting appearance of backing fill and outline
        this.linearGauge.backingBrush = "#ffffff";
        this.linearGauge.backingOutline = "#d1d1d1";
        this.linearGauge.backingStrokeThickness = 0;

        this.shouldAnimate = true;
    }

}
```
```html
<div class="container vertical">
    <div class="options horizontal">
        <button (click)="AnimateToGauge1()"
                class="options-button">Animation #1</button>
        <button (click)="AnimateToGauge2()"
                class="options-button">Animation #2</button>
        <button (click)="AnimateToGauge3()"
                class="options-button">Animation #3</button>
    </div>

    <div class="container" >

        <!-- Note the linear gauge requires settings only for
        minimumValue, maximumValue, and value properties.
        All other properties are optional and listed here
        for demonstration purpose only -->
        <igx-linear-gauge
            #linearGauge
            height="80px"
            width="400px"
            minimumValue=0
            maximumValue=100
            value=50
            interval=10
            labelInterval=10
            labelExtent=0.02

            minorTickEndExtent=0.10,
            minorTickStartExtent=0.20,
            tickStartExtent=0.25,
            tickEndExtent=0.05,
            tickStrokeThickness=2,

            needleShape="Needle"
            needleBrush="#79797a"
            needleOutline="#79797a"
            scaleStrokeThickness=0
            scaleBrush="#ffffff"
            scaleOutline="#d3d3d3"
            backingBrush="#ffffff"
            backingOutline="#d1d1d1"
            backingStrokeThickness=0>
        </igx-linear-gauge>
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

When installing the Angular gauge component, the core package must also be installed.

```cmd
npm install --save igniteui-angular-core
npm install --save igniteui-angular-gauges
```

## Component Modules

The [`IgxLinearGaugeComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxlineargaugecomponent.html) requires the following modules:

```ts
// app.module.ts
import { IgxLinearGaugeModule } from 'igniteui-angular-gauges';

@NgModule({
    imports: [
        // ...
        IgxLinearGaugeModule
        // ...
    ]
})
export class AppModule {}
```

<div class="divider--half"></div>

## Usage

The following code demonstrates how create a linear gauge containing a needle and three comparative ranges on the scale.

```html
 <igx-linear-gauge width="700px"
                   height="30px"
                   minimumValue = "5"
                   maximumValue = "55"
                   value = "43">
    <igx-linear-graph-range startValue="0"
                            endValue="15"
                            brush="red">
    </igx-linear-graph-range>
    <igx-linear-graph-range startValue="15"
                            endValue="30"
                            brush="yellow">
    </igx-linear-graph-range>
    <igx-linear-graph-range startValue="30"
                            endValue="55"
                            brush="green">
    </igx-linear-graph-range>
 </igx-linear-gauge>
```

<div class="divider--half"></div>

## Needle

This is the primary measure displayed by the linear gauge component and is visualized as a bar or you can customize it to show almost any shape as is demonstrated below.

```html
 <igx-linear-gauge
    height="80px" width="400px"
    minimumValue=0
    maximumValue=100 interval=10
    value=50
    isNeedleDraggingEnabled=true
    needleShape="Custom"
    needleBrush="DodgerBlue"
    needleOutline="DodgerBlue"
    needleStrokeThickness=1
    needleBreadth=15
    needleInnerExtent=0.35
    needleOuterExtent=0.65
    needleOuterPointExtent=0.8
    needleInnerPointExtent=0.325
    needleInnerPointWidth=0
    needleOuterPointWidth=0.3
    needleInnerBaseWidth=0
    needleOuterBaseWidth=0.07>
</igx-linear-gauge>
```

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxLinearGaugeModule } from "igniteui-angular-gauges";


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
    IgxLinearGaugeModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, ViewChild } from "@angular/core";
import { IgxLinearGaugeComponent } from "igniteui-angular-gauges";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})

export class AppComponent {

    @ViewChild("linearGauge", { static: true })
    public linearGauge: IgxLinearGaugeComponent;
}
```
```html
<div class="container vertical">

        <igx-linear-gauge
            #linearGauge
            height="80px" width="400px"
            minimumValue=0 value=50
            maximumValue=100 interval=10

            isNeedleDraggingEnabled=true
            needleShape="Custom"
            needleBrush="DodgerBlue"
            needleOutline="DodgerBlue"
            needleStrokeThickness=1
            needleBreadth=15
            needleInnerExtent=0.35
            needleOuterExtent=0.65
            needleOuterPointExtent=0.8
            needleInnerPointExtent=0.325
            needleInnerPointWidth=0
            needleOuterPointWidth=0.3
            needleInnerBaseWidth=0
            needleOuterBaseWidth=0.07
            >
        </igx-linear-gauge>

</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## Highlight Needle

The linear gauge can be modified to show a second needle. This will make the main needle's [`value`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxlineargaugecomponent.html#value) appear with a lower opacity. To enable this first set [`highlightValueDisplayMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxlineargaugecomponent.html#highlightValueDisplayMode) to Overlay and then apply a [`highlightValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxlineargaugecomponent.html#highlightValue).

```html
<igx-linear-gauge
    #linearGauge
    height="80px"
    width="400px"
    value=70
    minimumValue=0
    maximumValue=100
    interval=10
    labelInterval=10
    labelExtent=0.025
    labelsPreTerminal=0
    labelsPostInitial=0
    needleBrush="Blue"
    highlightValueDisplayMode="Overlay"
    highlightValue=25
    isHighlightNeedleDraggingEnabled=true>
</igx-linear-gauge>
```

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxLinearGaugeModule } from "igniteui-angular-gauges";


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
    IgxLinearGaugeModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, ViewChild } from "@angular/core";
import { IgxLinearGaugeComponent } from "igniteui-angular-gauges";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})

export class AppComponent {

    @ViewChild("linearGauge", { static: true })
    public linearGauge: IgxLinearGaugeComponent;
}
```
```html
<div class="container vertical">

	<igx-linear-gauge
		#linearGauge
		height="80px" 
		width="400px"
		value=70
		minimumValue=0 
		maximumValue=100 
		interval=10
		labelInterval=10
		labelExtent=0.025
		labelsPreTerminal=0
		labelsPostInitial=0
		needleBrush="Blue"
		highlightValueDisplayMode="Overlay"
		highlightValue=25
		isHighlightNeedleDraggingEnabled=true>
	</igx-linear-gauge>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## Ranges

The ranges are visual elements that highlight a specified range of values on a scale. Their purpose is to visually communicate the qualitative state of the performance bar measure, illustrating at the same times the degree to which it resides within that state.

```html
<igx-linear-gauge
    height="80px" width="400px"
    minimumValue=0 value=50
    maximumValue=100 interval=10
    rangeBrushes="#a4bd29, #F86232"
    rangeOutlines="#a4bd29, #F86232" >
    <igx-linear-graph-range
        startValue=0 endValue=50
        innerStartExtent=0.075 innerEndExtent=0.075
        outerStartExtent=0.25 outerEndExtent=0.4>
    </igx-linear-graph-range>
    <igx-linear-graph-range
        startValue=50 endValue=100
        innerStartExtent=0.075 innerEndExtent=0.075
        outerStartExtent=0.4 outerEndExtent=0.55>
    </igx-linear-graph-range>
</igx-linear-gauge>
```

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxLinearGaugeModule } from "igniteui-angular-gauges";


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
    IgxLinearGaugeModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, ViewChild } from "@angular/core";
import { IgxLinearGaugeComponent } from "igniteui-angular-gauges";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})

export class AppComponent {

    @ViewChild("linearGauge", { static: true })
    public linearGauge: IgxLinearGaugeComponent;
}
```
```html
<div class="container vertical">

        <igx-linear-gauge
            #linearGauge
            height="80px" width="400px"
            minimumValue=0 value=50
            maximumValue=100 interval=10

            rangeBrushes="#a4bd29, #F86232"
            rangeOutlines="#a4bd29, #F86232"  >

            <igx-linear-graph-range
                startValue=0 endValue=50
                innerStartExtent=0.075 innerEndExtent=0.075
                outerStartExtent=0.25 outerEndExtent=0.4>
            </igx-linear-graph-range>
            <igx-linear-graph-range
                startValue=50 endValue=100
                innerStartExtent=0.075 innerEndExtent=0.075
                outerStartExtent=0.4 outerEndExtent=0.55>
            </igx-linear-graph-range>

        </igx-linear-gauge>
 </div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## Tick Marks

The tick marks serve as a visual division of the scale into intervals in order to increase the readability of the linear gauge.

Major tick marks – The major tick marks are used as primary delimiters on the scale. The frequency they appear at, their extents and style can be controlled by setting their corresponding properties.

Minor tick marks – The minor tick marks represent helper tick marks, which might be used to additionally improve the readability of the scale and can be customized in a way similar to the major ones.

```html
<igx-linear-gauge
    height="80px" width="400px"
    minimumValue=0 value=50
    maximumValue=100
    interval=10
    tickBrush="DodgerBlue"
    ticksPreTerminal=0
    ticksPostInitial=0
    tickStrokeThickness=2
    tickStartExtent=0.25
    tickEndExtent=0.05
    minorTickCount=4
    minorTickBrush="DarkViolet"
    minorTickEndExtent=0.05
    minorTickStartExtent=0.15
    minorTickStrokeThickness=1>
</igx-linear-gauge>
```

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxLinearGaugeModule } from "igniteui-angular-gauges";


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
    IgxLinearGaugeModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, ViewChild } from "@angular/core";
import { IgxLinearGaugeComponent } from "igniteui-angular-gauges";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})

export class AppComponent {

    @ViewChild("linearGauge", { static: true })
    public linearGauge: IgxLinearGaugeComponent;
}
```
```html
<div class="container vertical">

        <igx-linear-gauge
            #linearGauge
            height="80px" width="400px"
            minimumValue=0 value=50
            maximumValue=100 interval=10

            tickBrush="DodgerBlue"
            ticksPreTerminal=0
            ticksPostInitial=0
            tickStrokeThickness=2
            tickStartExtent=0.25
            tickEndExtent=0.05

            minorTickCount=4
            minorTickBrush="DarkViolet"
            minorTickEndExtent=0.05
            minorTickStartExtent=0.15
            minorTickStrokeThickness=1>
        </igx-linear-gauge>

</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## Labels

The labels indicate the measures on the scale.

```html
<igx-linear-gauge
    height="80px" width="400px"
    minimumValue=0 value=50
    maximumValue=100 interval=10
    labelInterval=10
    labelExtent=0.025
    labelsPreTerminal=0
    labelsPostInitial=0
    fontBrush="DodgerBlue"
    font="11px Verdana">
</igx-linear-gauge>
```

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxLinearGaugeModule } from "igniteui-angular-gauges";


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
    IgxLinearGaugeModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, ViewChild } from "@angular/core";
import { IgxLinearGaugeComponent } from "igniteui-angular-gauges";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})

export class AppComponent {

    @ViewChild("linearGauge", { static: true })
    public linearGauge: IgxLinearGaugeComponent;
}
```
```html
<div class="container vertical">

        <igx-linear-gauge
            #linearGauge
            height="80px" width="400px"
            minimumValue=0 value=50
            maximumValue=100 interval=10

            labelInterval=10
            labelExtent=0.025
            labelsPreTerminal=0
            labelsPostInitial=0
            fontBrush="DodgerBlue"
            font="11px Verdana"
            >
        </igx-linear-gauge>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## Backing

The backing element represents background and border of the linear gauge component. It is always the first element rendered and all the rest of elements such as labels, and tick marks are overlaid on top of it.

```html
<igx-linear-gauge
    height="80px" width="400px"
    minimumValue=0 value=50
    maximumValue=100 interval=10
    backingBrush="#bddcfc"
    backingOutline="DodgerBlue"
    backingStrokeThickness=4
    backingInnerExtent=0
    backingOuterExtent=1>
</igx-linear-gauge>
```

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxLinearGaugeModule } from "igniteui-angular-gauges";


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
    IgxLinearGaugeModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, ViewChild } from "@angular/core";
import { IgxLinearGaugeComponent } from "igniteui-angular-gauges";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})

export class AppComponent {

    @ViewChild("linearGauge", { static: true })
    public linearGauge: IgxLinearGaugeComponent;
}
```
```html
<div class="container vertical">

        <igx-linear-gauge
            #linearGauge
            height="80px" width="400px"
            minimumValue=0 value=50
            maximumValue=100 interval=10

            backingBrush="#bddcfc"
            backingOutline="DodgerBlue"
            backingStrokeThickness=4
            backingInnerExtent=0
            backingOuterExtent=1 >
        </igx-linear-gauge>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## Scale

The scale is a visual element that highlights the full range of values in the linear gauge. You can customize the appearance and the shape of the scale. It can also be inverted (using [`isScaleInverted`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxlineargaugecomponent.html#isScaleInverted) property) and all labels will be rendered from right-to-left instead of left-to-right.

```html
<igx-linear-gauge
    height="80px" width="400px"
    minimumValue=0 value=50
    maximumValue=100 interval=10
    isScaleInverted=false
    scaleBrush="DodgerBlue"
    scaleOutline="DarkViolet"
    scaleStrokeThickness=1
    scaleInnerExtent=0.05
    scaleOuterExtent=0.65
    scaleStartExtent=0.05
    scaleEndExtent=0.95>
</igx-linear-gauge>
```

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxLinearGaugeModule } from "igniteui-angular-gauges";


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
    IgxLinearGaugeModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, ViewChild } from "@angular/core";
import { IgxLinearGaugeComponent } from "igniteui-angular-gauges";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})

export class AppComponent {

    @ViewChild("linearGauge", { static: true })
    public linearGauge: IgxLinearGaugeComponent;

}
```
```html
<div class="container vertical">

        <igx-linear-gauge
            #linearGauge
            height="80px" width="400px"
            minimumValue=0 value=50
            maximumValue=100 interval=10

            isScaleInverted=false
            scaleBrush="DodgerBlue"
            scaleOutline="Red"
            scaleStrokeThickness=2
            scaleInnerExtent=0.05
            scaleOuterExtent=0.65
            scaleStartExtent=0.05
            scaleEndExtent=0.95 >
        </igx-linear-gauge>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## Summary

For your convenience, all above code snippets are combined into one code block below that you can easily copy to your project and see the linear gauge with all features and visuals enabled.

```html
<igx-linear-gauge
    height="80px" width="400px"
    minimumValue=0
    maximumValue=100

    labelInterval=10
    labelExtent=0.025
    labelsPreTerminal=0
    labelsPostInitial=0
    fontBrush="Black"
    font="11px Verdana"

    interval=10
    tickBrush="Black"
    ticksPreTerminal=0
    ticksPostInitial=0
    tickStrokeThickness=2
    tickStartExtent=0.25
    tickEndExtent=0.05

    minorTickCount=4
    minorTickBrush="Black"
    minorTickEndExtent=0.05
    minorTickStartExtent=0.15
    minorTickStrokeThickness=1

    value=50
    isNeedleDraggingEnabled=true
    needleShape="Custom"
    needleBrush="Black"
    needleOutline="Black"
    needleStrokeThickness=1
    needleBreadth=15
    needleInnerExtent=0.35
    needleOuterExtent=0.65
    needleOuterPointExtent=0.8
    needleInnerPointExtent=0.325
    needleInnerPointWidth=0
    needleOuterPointWidth=0.3
    needleInnerBaseWidth=0
    needleOuterBaseWidth=0.07

    isScaleInverted=false
    scaleBrush="Gray"
    scaleOutline="Gray"
    scaleStrokeThickness=1
    scaleInnerExtent=0.05
    scaleOuterExtent=0.65
    scaleStartExtent=0.05
    scaleEndExtent=0.95

    backingBrush="#cecece"
    backingOutline="#cecece"
    backingStrokeThickness=4
    backingInnerExtent=0
    backingOuterExtent=1

    rangeBrushes ="#C62828, #F96232, #FF9800"
    rangeOutlines="#C62828, #F96232, #FF9800">
    <igx-linear-graph-range
        startValue=0 endValue=50
        innerStartExtent=0.075 innerEndExtent=0.075
        outerStartExtent=0.25 outerEndExtent=0.4>
    </igx-linear-graph-range>
    <igx-linear-graph-range
        startValue=50 endValue=100
        innerStartExtent=0.075 innerEndExtent=0.075
        outerStartExtent=0.4 outerEndExtent=0.55>
    </igx-linear-graph-range>
</igx-linear-gauge>
```

<div class="divider--half"></div>

## API References

The following is a list of API members mentioned in the above sections:

- [`IgxLinearGaugeComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxlineargaugecomponent.html)
- [`IgxLinearGraphRangeComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxlineargraphrangecomponent.html)

## Additional Resources

You can find more information about other types of gauges in these topics:

- [Bullet Graph](bullet-graph.md)
- [Radial Gauge](radial-gauge.md)
