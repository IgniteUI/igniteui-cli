import { Component, AfterViewInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { IgxLinearGaugeComponent } from "igniteui-angular-gauges/ES5/igx-linear-gauge-component";
import { IgxLinearGraphRangeComponent } from "igniteui-angular-gauges/ES5/igx-linear-graph-range-component";
import { LinearGraphNeedleShape } from "igniteui-angular-gauges/ES5/LinearGraphNeedleShape";

@Component({
  selector: 'app-$(filePrefix)',
  templateUrl: './$(filePrefix).component.html',
  styleUrls: ['./$(filePrefix).component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class $(ClassName)Component implements AfterViewInit {

  @ViewChild("linearGauge")
  public linearGauge: IgxLinearGaugeComponent;

  public ngAfterViewInit(): void {

    // enabling animation duration (in milliseconds)
    this.linearGauge.transitionDuration = 500;
    this.AnimateToGauge3();
  }

  public AnimateToGauge3(): void {
    // linear gauge requires settings for these properties:
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
}

  public AnimateToGauge2(): void {
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

       this.linearGauge.rangeBrushes  = [ "#0078C8", "#0099FF", "#21A7FF", "#4FB9FF"];
       this.linearGauge.rangeOutlines = [ "#0078C8", "#0099FF", "#21A7FF", "#4FB9FF"];
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
  }

  public AnimateToGauge1(): void {
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
  }
}
