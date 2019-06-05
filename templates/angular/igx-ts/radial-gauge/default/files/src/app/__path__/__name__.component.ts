import { Component, AfterViewInit, ViewEncapsulation, ViewChild } from '@angular/core';
// radial gauge imports
import { SweepDirection } from 'igniteui-angular-core/ES5/SweepDirection';
import { IgxRadialGaugeComponent } from 'igniteui-angular-gauges/ES5/igx-radial-gauge-component';
import { IgxRadialGaugeRangeComponent } from 'igniteui-angular-gauges/ES5/igx-radial-gauge-range-component';
import { RadialGaugeBackingShape } from 'igniteui-angular-gauges/ES5/RadialGaugeBackingShape';
import { RadialGaugeNeedleShape } from 'igniteui-angular-gauges/ES5/RadialGaugeNeedleShape';
import { RadialGaugePivotShape } from 'igniteui-angular-gauges/ES5/RadialGaugePivotShape';
import { RadialGaugeScaleOversweepShape } from 'igniteui-angular-gauges/ES5/RadialGaugeScaleOversweepShape';

@Component({
  selector: 'app-$(filePrefix)',
  templateUrl: './$(filePrefix).component.html',
  styleUrls: ['./$(filePrefix).component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class $(ClassName)Component implements AfterViewInit {

  @ViewChild('radialGauge', { static: true })
  public radialGauge: IgxRadialGaugeComponent;

  public ngAfterViewInit(): void {

    // enabling animation duration (in milliseconds)
    this.radialGauge.transitionDuration = 500;
    this.AnimateToGauge3();
  }

  public AnimateToGauge4(): void {

    this.radialGauge.height = '330px';
    this.radialGauge.width = '100%';
    this.radialGauge.minimumValue = 0;
    this.radialGauge.maximumValue = 80;
    this.radialGauge.value = 10;
    this.radialGauge.interval = 10;

    // Label Settings
    this.radialGauge.labelExtent = 0.6;
    this.radialGauge.labelInterval = 10;
    this.radialGauge.font = '10px Verdana,Arial';

    // Scale Settings
    this.radialGauge.scaleStartAngle = 150;
    this.radialGauge.scaleEndAngle = 30;
    this.radialGauge.scaleBrush = '#0b8fed';
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
    this.radialGauge.backingBrush = '#fcfcfc';
    this.radialGauge.backingOutline = '#d6d6d6';
    this.radialGauge.backingOversweep = 5;
    this.radialGauge.backingCornerRadius = 10;
    this.radialGauge.backingOuterExtent = 0.9;

    // Needle Settings
    this.radialGauge.needleShape = RadialGaugeNeedleShape.NeedleWithBulb;
    this.radialGauge.needlePivotShape = RadialGaugePivotShape.CircleOverlay;
    this.radialGauge.needleEndExtent = 0.5;
    this.radialGauge.needlePointFeatureExtent = 0.3;
    this.radialGauge.needlePivotWidthRatio = 0.2;
    this.radialGauge.needleBrush = '#9f9fa0';
    this.radialGauge.needleOutline = '#9f9fa0';
    this.radialGauge.needlePivotBrush = '#9f9fa0';
    this.radialGauge.needlePivotOutline = '#9f9fa0';

    // TickMark Settings
    this.radialGauge.tickBrush = 'rgba(51, 51, 51, 1)';
    this.radialGauge.minorTickBrush = 'rgba(73, 73, 73, 1)';
    this.radialGauge.minorTickCount = 6;

    this.radialGauge.ranges.clear();
  }

  public AnimateToGauge3(): void {

    this.radialGauge.height = '330px';
    this.radialGauge.width = '100%';

    this.radialGauge.minimumValue = 0;
    this.radialGauge.maximumValue = 50;
    this.radialGauge.value = 25;
    this.radialGauge.interval = 5;

    // setting appearance of labels
    this.radialGauge.labelInterval = 5;
    this.radialGauge.labelExtent = 0.71;
    this.radialGauge.font = '10px Verdana,Arial';

    // setting custom needle
    this.radialGauge.isNeedleDraggingEnabled = true;
    this.radialGauge.needleEndExtent = 0.5;
    this.radialGauge.needleShape = RadialGaugeNeedleShape.Triangle;
    this.radialGauge.needleEndWidthRatio = 0.03;
    this.radialGauge.needleStartWidthRatio = 0.05;
    this.radialGauge.needlePivotShape = RadialGaugePivotShape.CircleOverlay;
    this.radialGauge.needlePivotWidthRatio = 0.15;
    this.radialGauge.needleBaseFeatureWidthRatio = 0.15;
    this.radialGauge.needleBrush = '#79797a';
    this.radialGauge.needleOutline = '#79797a';
    this.radialGauge.needlePivotBrush = '#79797a';
    this.radialGauge.needlePivotOutline = '#79797a';

    // setting appearance of major/minor ticks
    this.radialGauge.minorTickCount = 4;
    this.radialGauge.minorTickEndExtent = 0.625;
    this.radialGauge.minorTickStartExtent = 0.6;
    this.radialGauge.minorTickStrokeThickness = 1;
    this.radialGauge.minorTickBrush = '#79797a';
    this.radialGauge.tickStartExtent = 0.6;
    this.radialGauge.tickEndExtent = 0.65;
    this.radialGauge.tickStrokeThickness = 2;
    this.radialGauge.tickBrush = '#79797a';

    // setting extent of gauge scale
    this.radialGauge.scaleStartAngle = 120;
    this.radialGauge.scaleEndAngle = 60;
    this.radialGauge.scaleBrush = '#d6d6d6';
    this.radialGauge.scaleOversweepShape = RadialGaugeScaleOversweepShape.Fitted;
    this.radialGauge.scaleSweepDirection = SweepDirection.Clockwise;
    this.radialGauge.scaleEndExtent = 0.57;
    this.radialGauge.scaleStartExtent = 0.5;

    // setting appearance of backing dial
    this.radialGauge.backingBrush = '#fcfcfc';
    this.radialGauge.backingOutline = '#d6d6d6';
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
    this.radialGauge.rangeBrushes  = [ '#F86232', '#DC3F76', '#7446B9'];
    this.radialGauge.rangeOutlines = [ '#F86232', '#DC3F76', '#7446B9'];
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
  }

  public AnimateToGauge2(): void {

    this.radialGauge.height = '330px';
    this.radialGauge.width = '100%';

    this.radialGauge.minimumValue = 100;
    this.radialGauge.maximumValue = 200;
    this.radialGauge.value = 125;

    // Scale Settings
    this.radialGauge.scaleStartAngle = 135;
    this.radialGauge.scaleEndAngle = 45;
    this.radialGauge.scaleBrush = 'transparent';
    this.radialGauge.scaleSweepDirection = SweepDirection.Clockwise;

    // Backing Settings
    this.radialGauge.backingOutline = 'white';
    this.radialGauge.backingBrush = 'white';

    // Needle Settings
    this.radialGauge.needleEndExtent = 0.8;
    this.radialGauge.needleShape = RadialGaugeNeedleShape.Triangle;
    this.radialGauge.needlePivotShape = RadialGaugePivotShape.Circle;
    this.radialGauge.needlePivotWidthRatio = 0.1;
    this.radialGauge.needleBrush = '#79797a';
    this.radialGauge.needleOutline = '#79797a';

    // TickMark Settings
    this.radialGauge.tickBrush = 'transparent';
    this.radialGauge.minorTickBrush = 'transparent';

    // Label Settings
    this.radialGauge.labelInterval = 100;
    this.radialGauge.labelExtent = 1;
    this.radialGauge.font = '15px Verdana,Arial';

    // setting custom gauge ranges
    const range1 = new IgxRadialGaugeRangeComponent();
    range1.startValue = 100;
    range1.endValue = 150;
    const range2 = new IgxRadialGaugeRangeComponent();
    range2.startValue = 150;
    range2.endValue = 200;

    this.radialGauge.rangeBrushes  = [ '#32f845', '#bf32f8' ];
    this.radialGauge.rangeOutlines = [ '#32f845', '#bf32f8' ];
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
  }

  public AnimateToGauge1(): void {

    this.radialGauge.height = '330px';
    this.radialGauge.width = '100%';

    this.radialGauge.minimumValue = 0;
    this.radialGauge.maximumValue = 10;
    this.radialGauge.value = 7.5;

    // Scale Settings
    this.radialGauge.scaleStartAngle = 200;
    this.radialGauge.scaleEndAngle = -20;
    this.radialGauge.scaleBrush = 'transparent';
    this.radialGauge.scaleSweepDirection = SweepDirection.Clockwise;

    // Backing Settings
    this.radialGauge.backingOutline = 'white';
    this.radialGauge.backingBrush = 'white';

    // Needle Settings
    this.radialGauge.needleEndExtent = 0.8;
    this.radialGauge.needleShape = RadialGaugeNeedleShape.Triangle;
    this.radialGauge.needlePivotShape = RadialGaugePivotShape.Circle;
    this.radialGauge.needlePivotWidthRatio = 0.1;
    this.radialGauge.needleBrush = '#79797a';
    this.radialGauge.needleOutline = '#79797a';

    // TickMark Settings
    this.radialGauge.tickBrush = 'transparent';
    this.radialGauge.minorTickBrush = 'transparent';

    // Label Settings
    this.radialGauge.labelInterval = 10;
    this.radialGauge.labelExtent = 1;
    this.radialGauge.font = '15px Verdana,Arial';

    // setting custom gauge ranges
    const range1 = new IgxRadialGaugeRangeComponent();
    range1.startValue = 0;
    range1.endValue = 5;
    const range2 = new IgxRadialGaugeRangeComponent();
    range2.startValue = 5;
    range2.endValue = 10;

    this.radialGauge.rangeBrushes  = [ '#a4bd29', '#F86232' ];
    this.radialGauge.rangeOutlines = [ '#a4bd29', '#F86232' ];
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
  }
}
