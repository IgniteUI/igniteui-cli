import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxDateSummaryOperand, IgxGridComponent, IgxSummaryResult } from '<%=igxPackage%>';
import { Employee, employeesData } from './localData';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  standalone: false
})
export class <%=ClassName%>Component implements OnInit {
  @ViewChild('sampleGrid', { static: true, read: IgxGridComponent })
  public sampleGrid!: IgxGridComponent;
  public customDateSummary = CustomDateSummary;

  public localData!: Employee[];
  title = 'Grid Summaries';

  ngOnInit(): void {
    this.localData = employeesData;
  }

  public formatDate(value: Date): string {
    return value.toLocaleDateString();
  }

  public toggleSummary(name: string): void {
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
  public override operate(data?: Date[]): IgxSummaryResult[] {
    const result: IgxSummaryResult[] = [];
    if (!data) {
        return result;
    }
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
