---
title: Angular Bullet Graph | Data Visualization Tools | Infragistics
_description: Infragistics' Angular bullet graph control allows you to create dashboards displaying ranges or comparing multiple measurements. View our data visualization tools!
_keywords: Angular Bullet Graph, animation, labels, needle, scales, ranges, tick marks, Infragistics
_license: commercial
mentionedTypes: ["XamBulletGraph"]
namespace: Infragistics.Controls.Gauges
_tocName: Bullet Graph
_premium: true
---

# Angular Bullet Graph Overview

The Angular bullet graph component allows for a linear and concise view of measures compared against a scale.

The Ignite UI for Angular bullet graph component provides you with the ability to create attractive data presentations, replacing meters and gauges that are used on dashboards with simple yet straightforward and clear bar charts. A bullet graph is one of the most effective and efficient ways to present progress towards goals, good/better/best ranges, or compare multiple measurements in as little horizontal or vertical space as possible.

## Angular Bullet Graph Example

The following sample demonstrates how setting multiple properties on the same [`IgxBulletGraphComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxbulletgraphcomponent.html) can transform it to completely different bullet graph.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxBulletGraphModule } from "igniteui-angular-gauges";

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
    IgxBulletGraphModule,
    IgxButtonModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxBulletGraphComponent } from "igniteui-angular-gauges";
import { IgxLinearGraphRangeComponent } from "igniteui-angular-gauges";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})

export class AppComponent implements AfterViewInit {

    @ViewChild("bulletGraph", { static: true })
    public bulletGraph: IgxBulletGraphComponent;

    private shouldAnimate: boolean = false;

    public ngAfterViewInit(): void {

        // enabling animation duration (in milliseconds)        
        this.AnimateToGauge3();        
    }

    public AnimateToGauge3(): void {

        if(this.shouldAnimate){
            this.bulletGraph.transitionDuration = 500;
        }

        this.bulletGraph.minimumValue = 0;
        this.bulletGraph.maximumValue = 120;
        this.bulletGraph.value = 70;
        this.bulletGraph.interval = 10;

        // setting appearance of labels
        this.bulletGraph.labelInterval = 10;
        this.bulletGraph.labelExtent = 0.02;

        // setting custom appearance of performance bar
        this.bulletGraph.valueInnerExtent = 0.5;
        this.bulletGraph.valueOuterExtent = 0.7;
        this.bulletGraph.valueBrush = "#000000";

        // setting custom appearance of target bar
        this.bulletGraph.targetValueBrush = "#000000";
        this.bulletGraph.targetValueBreadth = 10;
        this.bulletGraph.targetValue = 90;

        // setting appearance of major/minor ticks
        this.bulletGraph.minorTickCount = 5;
        this.bulletGraph.minorTickEndExtent = 0.10;
        this.bulletGraph.minorTickStartExtent = 0.20;
        this.bulletGraph.tickStartExtent = 0.20;
        this.bulletGraph.tickEndExtent = 0.05;
        this.bulletGraph.tickStrokeThickness = 2;

        // setting custom gauge ranges
        const range1 = new IgxLinearGraphRangeComponent();
        range1.startValue = 0;
        range1.endValue = 40;
        const range2 = new IgxLinearGraphRangeComponent();
        range2.startValue = 40;
        range2.endValue = 80;
        const range3 = new IgxLinearGraphRangeComponent();
        range3.startValue = 80;
        range3.endValue = 120;

        this.bulletGraph.rangeBrushes  = [ "#FF9800", "#F96232", "#C62828"];
        this.bulletGraph.rangeOutlines = [ "#FF9800", "#F96232", "#C62828"];
        this.bulletGraph.ranges.clear();
        this.bulletGraph.ranges.add(range1);
        this.bulletGraph.ranges.add(range2);
        this.bulletGraph.ranges.add(range3);

        // setting extent of all gauge ranges
        for (let i = 0; i < this.bulletGraph.ranges.count; i++) {
            const range = this.bulletGraph.ranges.item(i);
            range.innerStartExtent = 0.2;
            range.innerEndExtent = 0.2;
            range.outerStartExtent = 0.95;
            range.outerEndExtent = 0.95;
        }

        // setting extent of gauge scale
        this.bulletGraph.scaleBackgroundThickness = 0.5;
        this.bulletGraph.scaleBackgroundBrush = "#dbdbdb";
        this.bulletGraph.scaleBackgroundOutline = "gray";
        this.bulletGraph.scaleStartExtent = 0.05;
        this.bulletGraph.scaleEndExtent = 0.95;
        this.bulletGraph.scaleBackgroundThickness = 0;

        // setting appearance of backing fill and outline
        this.bulletGraph.backingBrush = "#f7f7f7";
        this.bulletGraph.backingOutline = "#d1d1d1";
        this.bulletGraph.backingStrokeThickness = 0;

        this.shouldAnimate = true;
    }

    public AnimateToGauge2(): void {

        if(this.shouldAnimate){
            this.bulletGraph.transitionDuration = 500;
        }

        this.bulletGraph.minimumValue = 100;
        this.bulletGraph.maximumValue = 200;
        this.bulletGraph.value = 120;
        this.bulletGraph.interval = 10;

        // setting appearance of labels
        this.bulletGraph.labelInterval = 10;
        this.bulletGraph.labelExtent = 0.02;

        // setting custom appearance of performance bar
        this.bulletGraph.valueInnerExtent = 0.5;
        this.bulletGraph.valueOuterExtent = 0.7;
        this.bulletGraph.valueBrush = "#000000";

        // setting custom appearance of target bar
        this.bulletGraph.targetValueBrush = "#000000";
        this.bulletGraph.targetValueBreadth = 10;
        this.bulletGraph.targetValue = 180;

        // setting appearance of major/minor ticks
        this.bulletGraph.minorTickCount = 5;
        this.bulletGraph.minorTickEndExtent = 0.10;
        this.bulletGraph.minorTickStartExtent = 0.20;
        this.bulletGraph.tickStartExtent = 0.20;
        this.bulletGraph.tickEndExtent = 0.05;
        this.bulletGraph.tickStrokeThickness = 2;

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

        this.bulletGraph.rangeBrushes  = [ "#0078C8", "#0099FF", "#21A7FF", "#4FB9FF"];
        this.bulletGraph.rangeOutlines = [ "#0078C8", "#0099FF", "#21A7FF", "#4FB9FF"];
        this.bulletGraph.ranges.clear();
        this.bulletGraph.ranges.add(range1);
        this.bulletGraph.ranges.add(range2);
        this.bulletGraph.ranges.add(range3);
        this.bulletGraph.ranges.add(range4);

        // setting extent of all gauge ranges
        for (let i = 0; i < this.bulletGraph.ranges.count; i++) {
            const range = this.bulletGraph.ranges.item(i);
            range.innerStartExtent = 0.2;
            range.innerEndExtent = 0.2;
            range.outerStartExtent = 0.95;
            range.outerEndExtent = 0.95;
        }

        // setting extent of gauge scale
        this.bulletGraph.scaleBackgroundThickness = 0.5;
        this.bulletGraph.scaleBackgroundBrush = "#dbdbdb";
        this.bulletGraph.scaleBackgroundOutline = "gray";
        this.bulletGraph.scaleStartExtent = 0.05;
        this.bulletGraph.scaleEndExtent = 0.95;
        this.bulletGraph.scaleBackgroundThickness = 0;

        // setting appearance of backing fill and outline
        this.bulletGraph.backingBrush = "#f7f7f7";
        this.bulletGraph.backingOutline = "#d1d1d1";
        this.bulletGraph.backingStrokeThickness = 0;

        this.shouldAnimate = true;
    }

    public AnimateToGauge1(): void {

        if(this.shouldAnimate){
            this.bulletGraph.transitionDuration = 500;
        }

        this.bulletGraph.minimumValue = 0;
        this.bulletGraph.maximumValue = 80;
        this.bulletGraph.value = 70;
        this.bulletGraph.interval = 20;

        // setting appearance of labels
        this.bulletGraph.labelInterval = 20;
        this.bulletGraph.labelExtent = 0.02;

        // setting custom appearance of performance bar
        this.bulletGraph.valueInnerExtent = 0.5;
        this.bulletGraph.valueOuterExtent = 0.7;
        this.bulletGraph.valueBrush = "#000000";

        // setting custom appearance of target bar
        this.bulletGraph.targetValueBrush = "#000000";
        this.bulletGraph.targetValueBreadth = 10;
        this.bulletGraph.targetValue = 60;

        // setting appearance of major/minor ticks
        this.bulletGraph.minorTickCount = 5;
        this.bulletGraph.minorTickEndExtent = 0.10;
        this.bulletGraph.minorTickStartExtent = 0.20;
        this.bulletGraph.tickStartExtent = 0.20;
        this.bulletGraph.tickEndExtent = 0.05;
        this.bulletGraph.tickStrokeThickness = 2;

        // setting custom gauge ranges
        const range1 = new IgxLinearGraphRangeComponent();
        range1.startValue = 0;
        range1.endValue = 40;
        const range2 = new IgxLinearGraphRangeComponent();
        range2.startValue = 40;
        range2.endValue = 80;

        this.bulletGraph.rangeBrushes  = [ "#a4bd29", "#F86232" ];
        this.bulletGraph.rangeOutlines = [ "#a4bd29", "#F86232" ];
        this.bulletGraph.ranges.clear();
        this.bulletGraph.ranges.add(range1);
        this.bulletGraph.ranges.add(range2);

        // setting extent of all gauge ranges
        for (let i = 0; i < this.bulletGraph.ranges.count; i++) {
            const range = this.bulletGraph.ranges.item(i);
            range.innerStartExtent = 0.2;
            range.innerEndExtent = 0.2;
            range.outerStartExtent = 0.95;
            range.outerEndExtent = 0.95;
        }

        // setting extent of gauge scale
        this.bulletGraph.scaleBackgroundThickness = 0.5;
        this.bulletGraph.scaleBackgroundBrush = "#dbdbdb";
        this.bulletGraph.scaleBackgroundOutline = "gray";
        this.bulletGraph.scaleStartExtent = 0.05;
        this.bulletGraph.scaleEndExtent = 0.95;
        this.bulletGraph.scaleBackgroundThickness = 0;

        // setting appearance of backing fill and outline
        this.bulletGraph.backingBrush = "#f7f7f7";
        this.bulletGraph.backingOutline = "#d1d1d1";
        this.bulletGraph.backingStrokeThickness = 0;

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

    <div class="container">

        <!-- Note the bullet graph requires settings only for
        minimumValue, maximumValue, and value, targetValue properties.
        All other properties are optional and listed here
        for demonstration purpose only -->
        <igx-bullet-graph
            #bulletGraph
            height="80px"
            width="400px"
            minimumValue=0
            maximumValue=120
            valueBrush="#4286f4"
            value=70
            targetValueBrush="#4286f4"
            targetValue=90
            targetValueBreadth=10
            interval=10
            labelInterval=10
            labelExtent=0.02
            rangeBrushes ="#FF9800, #F96232, #C62828"
            rangeOutlines="#FF9800, #F96232, #C62828"
            scaleBackgroundThickness=0
            scaleBackgroundBrush="#dbdbdb"
            scaleBackgroundOutline="gray">

        </igx-bullet-graph>

    </div>

</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

The bullet graph supports one scale, one set of tick marks and one set of labels. The bullet graph component also has built-in support for animated transitions. This animation is easily customizable by setting the [`transitionDuration`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxbulletgraphcomponent.html#transitionDuration) property.
The features of the bullet graph include configurable orientation and direction, configurable visual elements such as the needle, and more.

## Dependencies

When installing the gauge package, the core package must also be installed.

```cmd
npm install --save igniteui-angular-core
npm install --save igniteui-angular-gauges
```

## Component Modules

The [`IgxBulletGraphComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxbulletgraphcomponent.html) requires the following modules:

```ts
// app.module.ts
import { IgxBulletGraphModule } from 'igniteui-angular-gauges';

@NgModule({
    imports: [
        // ...
        IgxBulletGraphModule
        // ...
    ]
})
export class AppModule {}
```

<div class="divider--half"></div>

## Usage

The following code walks through creating a bullet graph component, and configuring a performance bar, comparative measure marker, and three comparative ranges on the scale.

```html
 <igx-bullet-graph height="100"
                   width="300"
                   minimumValue="5"
                   maximumValue="55"
                   value="35"
                   targetValue="43">
        <igx-linear-graph-range startValue="0"
                                endValue="15"
                                brush="#828181">
        </igx-linear-graph-range>
        <igx-linear-graph-range startValue="15"
                                endValue="30"
                                brush="#AAAAAA">
        </igx-linear-graph-range>
        <igx-linear-graph-range startValue="30"
                                endValue="55"
                                brush="#D0D0D0">
        </igx-linear-graph-range>
 </igx-bullet-graph>
```

<div class="divider--half"></div>

## Comparative Measures

The bullet graph can show two measures: performance value and target value.

Performance value is the primary measure displayed by the component and it is visualized as a bar that stretches along the length of the whole graph. The target value is a measure which the performance value compares against. It is displayed as a small block that runs perpendicular to the orientation of the performance bar.

```html
<igx-bullet-graph
    value=50
    valueBrush="DodgerBlue"
    valueStrokeThickness=1
    valueInnerExtent=0.5
    valueOuterExtent=0.65
    targetValue=80
    targetValueBreadth=10
    targetValueBrush="LimeGreen"
    targetValueOutline="LimeGreen"
    targetValueStrokeThickness=1
    targetValueInnerExtent=0.3
    targetValueOuterExtent=0.85
    height="80px" width="400px"
    minimumValue=0 value=50
    maximumValue=100>
</igx-bullet-graph>
```

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxBulletGraphModule } from "igniteui-angular-gauges";


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
    IgxBulletGraphModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, ViewChild } from "@angular/core";
import { IgxBulletGraphComponent } from "igniteui-angular-gauges";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})

export class AppComponent {

    @ViewChild("bulletGraph", { static: true })
    public bulletGraph: IgxBulletGraphComponent;

}
```
```html
<div class="container vertical">

        <igx-bullet-graph
            #bulletGraph
            height="80px" width="400px"
            minimumValue=0
            maximumValue=100

            value=50
            valueBrush="DodgerBlue"
            valueStrokeThickness=1
            valueInnerExtent=0.5
            valueOuterExtent=0.65

            targetValue=80
            targetValueBreadth=10
            targetValueBrush="LimeGreen"
            targetValueOutline="LimeGreen"
            targetValueStrokeThickness=1
            targetValueInnerExtent=0.3
            targetValueOuterExtent=0.85

            scaleBackgroundBrush = "#e5e5e5"
            scaleBackgroundOutline = "#e5e5e5"
            backingBrush = "#f7f7f7"
            backingOutline = "#bfbfbf"
            tickStrokeThickness = 1.5>

        </igx-bullet-graph>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## Highlight Value

The bullet graph's performance value can be further modified to show progress represented as a highlighted value. This will make the [`value`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxbulletgraphcomponent.html#value) appear with a lower opacity. A good example is if [`value`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxbulletgraphcomponent.html#value) is 50 and  [`highlightValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxbulletgraphcomponent.html#highlightValue) is set to 25. This would represent a performance of 50% regardless of what the value of [`targetValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxbulletgraphcomponent.html#targetValue) is set to. To enable this first set [`highlightValueDisplayMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxbulletgraphcomponent.html#highlightValueDisplayMode) to Overlay and then apply a [`highlightValue`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxbulletgraphcomponent.html#highlightValue) to something lower than [`value`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxbulletgraphcomponent.html#value).

```html
<igx-bullet-graph
    #bulletGraph
    height="80px"
    width="400px"
    value=70
    targetValue=90
    minimumValue=0
    maximumValue=100
    interval=10
    labelInterval=10
    labelExtent=0.025
    labelsPreTerminal=0
    labelsPostInitial=0
    highlightValueDisplayMode="Overlay"
    highlightValue=25>
  </igx-bullet-graph>
```

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxBulletGraphModule } from "igniteui-angular-gauges";


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
    IgxBulletGraphModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxBulletGraphComponent } from "igniteui-angular-gauges";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})

export class AppComponent implements OnInit {

    @ViewChild("bulletGraph", { static: true })
    public bulletGraph: IgxBulletGraphComponent;
    public ngOnInit(): void {
    }
}
```
```html
<div class="container vertical">

        <igx-bullet-graph
            #bulletGraph
            height="80px" 
			width="400px"
            value=70 
            targetValue=90
            minimumValue=0 
            maximumValue=100 
            interval=10
            labelInterval=10
            labelExtent=0.025
            labelsPreTerminal=0
            labelsPostInitial=0
            highlightValueDisplayMode="Overlay"
            highlightValue=25
            >

        </igx-bullet-graph>

</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## Comparative Ranges

The ranges are visual elements that highlight a specified range of values on a scale. Their purpose is to visually communicate the qualitative state of the performance bar measure, illustrating at the same time the degree to which it resides within that state.

```html
<igx-bullet-graph
    height="80px" width="400px"
    minimumValue=0 value=80 interval=10
    maximumValue=100 targetValue=90
    rangeBrushes ="#C62828, #F96232, #FF9800"
    rangeOutlines="#C62828, #F96232, #FF9800">
    <igx-linear-graph-range
        startValue=0 endValue=40
        innerStartExtent=0.075 innerEndExtent=0.075
        outerStartExtent=0.95 outerEndExtent=0.95>
    </igx-linear-graph-range>
    <igx-linear-graph-range
        startValue=40 endValue=70
        innerStartExtent=0.075 innerEndExtent=0.075
        outerStartExtent=0.95 outerEndExtent=0.95>
    </igx-linear-graph-range>
    <igx-linear-graph-range
        startValue=70 endValue=100
        innerStartExtent=0.075 innerEndExtent=0.075
        outerStartExtent=0.95 outerEndExtent=0.95>
    </igx-linear-graph-range>
</igx-bullet-graph>
```

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxBulletGraphModule } from "igniteui-angular-gauges";


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
    IgxBulletGraphModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, ViewChild } from "@angular/core";
import { IgxBulletGraphComponent } from "igniteui-angular-gauges";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})

export class AppComponent {

    @ViewChild("bulletGraph", { static: true })
    public bulletGraph: IgxBulletGraphComponent;
}
```
```html
<div class="container vertical">

        <igx-bullet-graph
            #bulletGraph
            height="80px" width="400px"
            minimumValue=0 value=80 interval=10
            maximumValue=100 targetValue=90

            rangeBrushes ="#C62828, #F96232, #FF9800"
            rangeOutlines="#C62828, #F96232, #FF9800"  >

            <igx-linear-graph-range
                startValue=0 endValue=40
                innerStartExtent=0.075 innerEndExtent=0.075
                outerStartExtent=0.95 outerEndExtent=0.95>
            </igx-linear-graph-range>
            <igx-linear-graph-range
                startValue=40 endValue=70
                innerStartExtent=0.075 innerEndExtent=0.075
                outerStartExtent=0.95 outerEndExtent=0.95>
            </igx-linear-graph-range>
            <igx-linear-graph-range
                startValue=70 endValue=100
                innerStartExtent=0.075 innerEndExtent=0.075
                outerStartExtent=0.95 outerEndExtent=0.95>
            </igx-linear-graph-range>

        </igx-bullet-graph>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## Tick Marks

The tick marks serve as a visual division of the scale into intervals in order to increase the readability of the bullet graph.

- Major tick marks – The major tick marks are used as primary delimiters on the scale. The frequency they appear at, their extents and style can be controlled by setting their corresponding properties.
- Minor tick marks – The minor tick marks represent helper tick marks, which might be used to additionally improve the readability of the scale and can be customized in a way similar to the major ones.

```html
<igx-bullet-graph
    height="80px" width="400px"
    minimumValue=0 value=70
    maximumValue=100 targetValue=90
    interval=10
    tickBrush="DodgerBlue"
    ticksPreTerminal=0
    ticksPostInitial=0
    tickStrokeThickness=2
    tickStartExtent=0.2
    tickEndExtent=0.075
    minorTickCount=4
    minorTickBrush="DarkViolet"
    minorTickEndExtent=0.1
    minorTickStartExtent=0.2
    minorTickStrokeThickness=1>
</igx-bullet-graph>
```

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxBulletGraphModule } from "igniteui-angular-gauges";


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
    IgxBulletGraphModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, ViewChild } from "@angular/core";
import { IgxBulletGraphComponent } from "igniteui-angular-gauges";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})

export class AppComponent {

    @ViewChild("bulletGraph", { static: true })
    public bulletGraph: IgxBulletGraphComponent;

}
```
```html
<div class="container vertical">

        <igx-bullet-graph
            #bulletGraph
            height="80px" width="400px"
            minimumValue=0 value=70 interval=10
            maximumValue=100 targetValue=90

            tickBrush="DodgerBlue"
            ticksPreTerminal=0
            ticksPostInitial=0
            tickStrokeThickness=2
            tickStartExtent=0.2
            tickEndExtent=0.075

            minorTickCount=4
            minorTickBrush="DarkViolet"
            minorTickEndExtent=0.1
            minorTickStartExtent=0.2
            minorTickStrokeThickness=1>

        </igx-bullet-graph>

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
<igx-bullet-graph
    height="80px" width="400px"
    minimumValue=0 value=70 interval=10
    maximumValue=100 targetValue=90
    labelInterval=10
    labelExtent=0.025
    labelsPreTerminal=0
    labelsPostInitial=0
    fontBrush="DodgerBlue"
    font="11px Verdana">
</igx-bullet-graph>
```

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxBulletGraphModule } from "igniteui-angular-gauges";


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
    IgxBulletGraphModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, ViewChild } from "@angular/core";
import { IgxBulletGraphComponent } from "igniteui-angular-gauges";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})

export class AppComponent {

    @ViewChild("bulletGraph", { static: true })
    public bulletGraph: IgxBulletGraphComponent;

}
```
```html
<div class="container vertical">

        <igx-bullet-graph
            #bulletGraph
            height="80px" width="400px"
            minimumValue=0 value=70 interval=10
            maximumValue=100 targetValue=90

            labelInterval=10
            labelExtent=0.025
            labelsPreTerminal=0
            labelsPostInitial=0
            fontBrush="DodgerBlue"
            font="11px Verdana"
            >

        </igx-bullet-graph>

</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## Backing

The backing element represents background and border of the bullet graph component. It is always the first element rendered and all the rest of elements such as labels, and tick marks are overlaid on top of it.

```html
<igx-bullet-graph
    height="80px" width="400px"
    minimumValue=0 value=70 interval=10
    maximumValue=100 targetValue=90
    backingBrush="#bddcfc"
    backingOutline="DodgerBlue"
    backingStrokeThickness=4
    backingInnerExtent=0
    backingOuterExtent=1>
</igx-bullet-graph>
```

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxBulletGraphModule } from "igniteui-angular-gauges";


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
    IgxBulletGraphModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, ViewChild } from "@angular/core";
import { IgxBulletGraphComponent } from "igniteui-angular-gauges";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})

export class AppComponent {

    @ViewChild("bulletGraph", { static: true })
    public bulletGraph: IgxBulletGraphComponent;

}
```
```html
<div class="container vertical">

        <igx-bullet-graph
            #bulletGraph
            height="80px" width="400px"
            minimumValue=0 value=70 interval=10
            maximumValue=100 targetValue=90

            backingBrush="#bddcfc"
            backingOutline="DodgerBlue"
            backingStrokeThickness=4
            backingInnerExtent=0
            backingOuterExtent=1
             >

        </igx-bullet-graph>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## Scale

The scale is visual element that highlights the full range of values in the gauge. You can customize appearance and shape of the scale. The scale can also be inverted (using [`isScaleInverted`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxbulletgraphcomponent.html#isScaleInverted) property) and all labels will be rendered from right-to-left instead of left-to-right.

```html
<igx-bullet-graph
    height="80px" width="400px"
    minimumValue=0 value=70 interval=10
    maximumValue=100 targetValue=90
    isScaleInverted=false
    scaleBackgroundBrush="DodgerBlue"
    scaleBackgroundOutline="DarkViolet"
    scaleBackgroundThickness=2
    scaleStartExtent=0.05
    scaleEndExtent=0.95>
</igx-bullet-graph>
```

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxBulletGraphModule } from "igniteui-angular-gauges";


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
    IgxBulletGraphModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, ViewChild } from "@angular/core";
import { IgxBulletGraphComponent } from "igniteui-angular-gauges";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})

export class AppComponent {

    @ViewChild("bulletGraph", { static: true })
    public bulletGraph: IgxBulletGraphComponent;
}
```
```html
<div class="container vertical">

        <igx-bullet-graph
            #bulletGraph
            height="80px" width="400px"
            minimumValue=0 value=70 interval=10
            maximumValue=100 targetValue=90

            isScaleInverted=false
            scaleBackgroundBrush="DodgerBlue"
            scaleBackgroundOutline="Red"
            scaleBackgroundThickness=2
            scaleStartExtent=0.05
            scaleEndExtent=0.95>

        </igx-bullet-graph>

</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## Summary

For your convenience, all above code snippets are combined into one code block below that you can easily copy to your project and see the bullet graph with all features and visuals enabled.

```html
<igx-bullet-graph
    height="80px" width="400px"
    minimumValue=0
    maximumValue=100
    isScaleInverted=false
    scaleBackgroundBrush="Gray"
    scaleBackgroundOutline="Gray"
    scaleBackgroundThickness=2
    scaleStartExtent=0.05
    scaleEndExtent=0.95

    value=50
    valueBrush="Black"
    valueStrokeThickness=1
    valueInnerExtent=0.5
    valueOuterExtent=0.65
    targetValue=80
    targetValueBreadth=7.5
    targetValueBrush="Black"
    targetValueOutline="Black"
    targetValueStrokeThickness=1
    targetValueInnerExtent=0.3
    targetValueOuterExtent=0.85

    labelInterval=10
    labelExtent=0.025
    labelsPreTerminal=0
    labelsPostInitial=0
    fontBrush="Black"
    font="11px Verdana"

    backingBrush="#cecece"
    backingOutline="#cecece"
    backingStrokeThickness=4
    backingInnerExtent=0
    backingOuterExtent=1

    interval=10
    tickBrush="Black"
    ticksPreTerminal=0
    ticksPostInitial=0
    tickStrokeThickness=2
    tickStartExtent=0.2
    tickEndExtent=0.075

    minorTickCount=4
    minorTickBrush="Black"
    minorTickEndExtent=0.1
    minorTickStartExtent=0.2
    minorTickStrokeThickness=1

    rangeBrushes ="#C62828, #F96232, #FF9800"
    rangeOutlines="#C62828, #F96232, #FF9800">
    <igx-linear-graph-range
        startValue=20 endValue=40
        innerStartExtent=0.25 innerEndExtent=0.25
        outerStartExtent=0.9 outerEndExtent=0.9>
    </igx-linear-graph-range>
    <igx-linear-graph-range
        startValue=40 endValue=60
        innerStartExtent=0.25 innerEndExtent=0.25
        outerStartExtent=0.9 outerEndExtent=0.9>
    </igx-linear-graph-range>
    <igx-linear-graph-range
        startValue=60 endValue=90
        innerStartExtent=0.25 innerEndExtent=0.25
        outerStartExtent=0.9 outerEndExtent=0.9>
    </igx-linear-graph-range>
</igx-bullet-graph>
```

## API References

The following is a list of API members mentioned in the above sections:

- [`IgxBulletGraphComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxbulletgraphcomponent.html)
- [`IgxLinearGraphRangeComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxlineargraphrangecomponent.html)

## Additional Resources

You can find more information about other types of gauges in these topics:

- [Linear Gauge](linear-gauge.md)
- [Radial Gauge](radial-gauge.md)
