import {
  Component,
  OnInit,
  AfterViewInit,
  QueryList,
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';

import { IgxColumnComponent } from 'igniteui-angular/grid/column.component';
import { IgxDateSummaryOperand, IgxNumberSummaryOperand, IgxSummaryResult } from 'igniteui-angular/grid/grid-summary';
import { IgxGridComponent } from 'igniteui-angular/grid/grid.component';
import { IgxToggleDirective, STRING_FILTERS } from 'igniteui-angular/main';
import { IgxExcelExporterOptions, IgxExcelExporterService } from 'igniteui-angular/services';
import { data } from './data';

@Component({
  selector: 'app-$(filePrefix)',
  templateUrl: './$(filePrefix).component.html',
  styleUrls: ['./$(filePrefix).component.scss']
})
export class $(ClassName)Component implements OnInit, AfterViewInit {

  @ViewChild('grid1', { read: IgxGridComponent })
  public grid1: IgxGridComponent;

  @ViewChild('toggleRefHiding') public toggleHiding: IgxToggleDirective;
  @ViewChild('toggleRefPinning') public togglePinning: IgxToggleDirective;

  public localData: any[];
  public dealsSummary = DealsSummary;
  public earliestSummary = EarliestSummary;
  public soonSummary = SoonSummary;

  public cols: QueryList<IgxColumnComponent>;
  public hiddenColsLength: number;
  public pinnedColsLength: number;

  constructor(private excelExporterService: IgxExcelExporterService, private cdr: ChangeDetectorRef) { }

  public ngOnInit() {
    this.localData = data;
  }

  public ngAfterViewInit() {
    this.cols = this.grid1.columnList;
    this.hiddenColsLength = this.cols.filter((col) => col.hidden).length;
    this.pinnedColsLength = this.grid1.pinnedColumns.length;
    this.cdr.detectChanges();
  }

  public toggleVisibility(col: IgxColumnComponent) {
    if (col.hidden) {
      this.hiddenColsLength--;
    } else {
      this.hiddenColsLength++;
    }
    col.hidden = !col.hidden;
  }

  public togglePin(col: IgxColumnComponent) {
    if (col.pinned) {
      this.grid1.unpinColumn(col.field);
      this.pinnedColsLength--;
    } else {
      this.grid1.pinColumn(col.field);
      this.pinnedColsLength++;
    }
  }

  public exportData() {
    this.excelExporterService.exportData(this.localData, new IgxExcelExporterOptions('Report'));
  }
}

class DealsSummary extends IgxNumberSummaryOperand {
  constructor() {
    super();
  }

  public operate(summaries?: any[]): IgxSummaryResult[] {
    const result = super.operate(summaries).filter((obj) => {
      if (obj.key === 'average' || obj.key === 'sum') {
        const summaryResult = obj.summaryResult;
        // apply formatting to float numbers
        if (Number(summaryResult) === summaryResult && summaryResult % 1 !== 0) {
          obj.summaryResult = summaryResult.toFixed(2);
        }
        return obj;
      }
    });
    return result;
  }
}

class EarliestSummary extends IgxDateSummaryOperand {
  constructor() {
    super();
  }

  public operate(summaries?: any[]): IgxSummaryResult[] {
    const result = super.operate(summaries).filter((obj) => {
      if (obj.key === 'earliest') {
        return obj;
      }
    });
    return result;
  }
}

class SoonSummary extends IgxDateSummaryOperand {
  constructor() {
    super();
  }

  public operate(summaries?: any[]): IgxSummaryResult[] {
    const result = super.operate(summaries).filter((obj) => {
      if (obj.key === 'latest') {
        obj.label = 'Soon';
        return obj;
      }
    });
    return result;
  }
}
