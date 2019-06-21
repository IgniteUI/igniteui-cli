
import { AfterViewInit, Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { IgxLinearGraphRangeComponent } from 'igniteui-angular-gauges/ES5/igx-linear-graph-range-component';
import { IgxBulletGraphComponent } from 'igniteui-angular-gauges/ES5/igx-bullet-graph-component';

@Component({
  selector: 'app-$(filePrefix)',
  templateUrl: './$(filePrefix).component.html',
  styleUrls: ['./$(filePrefix).component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class $(ClassName)Component implements AfterViewInit {

  @ViewChild('bulletGraph', { static: true })
  public bulletGraph: IgxBulletGraphComponent;

  public ngAfterViewInit(): void {

    // enabling animation duration (in milliseconds)
    this.bulletGraph.transitionDuration = 500;
    this.AnimateToGauge3();
  }

  public AnimateToGauge3(): void {

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
    this.bulletGraph.valueBrush = '#000000';

    // setting custom appearance of target bar
    this.bulletGraph.targetValueBrush = '#000000';
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

    this.bulletGraph.rangeBrushes  = [ '#FF9800', '#F96232', '#C62828'];
    this.bulletGraph.rangeOutlines = [ '#FF9800', '#F96232', '#C62828'];
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
    this.bulletGraph.scaleBackgroundBrush = '#dbdbdb';
    this.bulletGraph.scaleBackgroundOutline = 'gray';
    this.bulletGraph.scaleStartExtent = 0.05;
    this.bulletGraph.scaleEndExtent = 0.95;
    this.bulletGraph.scaleBackgroundThickness = 0;

    // setting appearance of backing fill and outline
    this.bulletGraph.backingBrush = '#f7f7f7';
    this.bulletGraph.backingOutline = '#d1d1d1';
    this.bulletGraph.backingStrokeThickness = 0;

  }

  public AnimateToGauge2(): void {

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
    this.bulletGraph.valueBrush = '#000000';

    // setting custom appearance of target bar
    this.bulletGraph.targetValueBrush = '#000000';
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

    this.bulletGraph.rangeBrushes  = [ '#0078C8', '#0099FF', '#21A7FF', '#4FB9FF'];
    this.bulletGraph.rangeOutlines = [ '#0078C8', '#0099FF', '#21A7FF', '#4FB9FF'];
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
    this.bulletGraph.scaleBackgroundBrush = '#dbdbdb';
    this.bulletGraph.scaleBackgroundOutline = 'gray';
    this.bulletGraph.scaleStartExtent = 0.05;
    this.bulletGraph.scaleEndExtent = 0.95;
    this.bulletGraph.scaleBackgroundThickness = 0;

    // setting appearance of backing fill and outline
    this.bulletGraph.backingBrush = '#f7f7f7';
    this.bulletGraph.backingOutline = '#d1d1d1';
    this.bulletGraph.backingStrokeThickness = 0;
  }

  public AnimateToGauge1(): void {

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
    this.bulletGraph.valueBrush = '#000000';

    // setting custom appearance of target bar
    this.bulletGraph.targetValueBrush = '#000000';
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

    this.bulletGraph.rangeBrushes  = [ '#a4bd29', '#F86232' ];
    this.bulletGraph.rangeOutlines = [ '#a4bd29', '#F86232' ];
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
    this.bulletGraph.scaleBackgroundBrush = '#dbdbdb';
    this.bulletGraph.scaleBackgroundOutline = 'gray';
    this.bulletGraph.scaleStartExtent = 0.05;
    this.bulletGraph.scaleEndExtent = 0.95;
    this.bulletGraph.scaleBackgroundThickness = 0;

    // setting appearance of backing fill and outline
    this.bulletGraph.backingBrush = '#f7f7f7';
    this.bulletGraph.backingOutline = '#d1d1d1';
    this.bulletGraph.backingStrokeThickness = 0;

  }
}
