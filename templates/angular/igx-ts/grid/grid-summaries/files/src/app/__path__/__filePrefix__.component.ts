import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxGridComponent, IgxSummaryResult, IgxDateSummaryOperand } from 'igniteui-angular';
import { employeesData } from './localData';

// tslint:disable:no-use-before-declare

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-$(filePrefix)',
  templateUrl: './$(filePrefix).component.html',
  styleUrls: ['./$(filePrefix).component.scss']
})


export class $(ClassName)Component implements OnInit {
  @ViewChild('sampleGrid', { read: IgxGridComponent })
  public sampleGrid: IgxGridComponent;
  public customDateSummary = CustomDateSummary;

  public localData: any[];
  title = 'Grid Summaries';

  constructor() { }

  ngOnInit() {
    this.localData = employeesData;
  }

  public formatDate(value: Date) {
    return value.toLocaleDateString();
  }

  public toggleSummary(name) {
    if (this.sampleGrid.getColumnByName(name).hasSummary) {
      this.sampleGrid.disableSummaries(name);
    } else {
      this.sampleGrid.enableSummaries(name);
    }
  }
}


class CustomDateSummary extends IgxDateSummaryOperand {
  constructor() {
    super();
  }
  public operate(data?: any[]): IgxSummaryResult[] {
    const result = [];
    result.push({
      key: 'earliest',
      label: 'Earliest Date',
      summaryResult: data.length ? (IgxDateSummaryOperand.earliest(data)).toLocaleDateString() : null
    });
    result.push({
      key: 'latest',
      label: 'Latest Date',
      summaryResult: data.length ? (IgxDateSummaryOperand.latest(data)).toLocaleDateString() : null
    });

    return result;
  }
}
