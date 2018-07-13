import {
  Component,
  OnInit,
  AfterViewInit,
  QueryList,
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';

import { IgxColumnComponent, IgxDateSummaryOperand, IgxNumberSummaryOperand, IgxSummaryResult } from 'igniteui-angular';
import { IgxGridComponent } from 'igniteui-angular';
import { IgxToggleDirective } from 'igniteui-angular';
import { IgxExcelExporterOptions, IgxExcelExporterService } from 'igniteui-angular';
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

  public searchText = '';
  public caseSensitive = false;

  constructor(private excelExporterService: IgxExcelExporterService, private cdr: ChangeDetectorRef) { }

  public ngOnInit() {
    this.localData = data;
  }

  public ngAfterViewInit() {
    this.cols = this.grid1.columnList;
    this.hiddenColsLength = this.cols.filter((col) => col.hidden).length;
    this.pinnedColsLength = this.cols.filter((col) => col.pinned).length;
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

  public togglePin(col: IgxColumnComponent, evt) {
    if (col.pinned) {
      this.grid1.unpinColumn(col.field);
      this.pinnedColsLength--;
    } else {
      if (this.grid1.pinColumn(col.field)) {
        this.pinnedColsLength++;
      } else {
        // if pinning fails uncheck the checkbox
        evt.checkbox.checked = false;
      }
    }
  }

  public exportData() {
    this.excelExporterService.exportData(this.localData, new IgxExcelExporterOptions('Report'));
  }

  public formatDate(val: Date) {
    return new Intl.DateTimeFormat('en-US').format(val);
  }

  public searchKeyDown(ev) {
    if (ev.key === 'Enter' || ev.key === 'ArrowDown' || ev.key === 'ArrowRight') {
      ev.preventDefault();
      this.grid1.findNext(this.searchText, this.caseSensitive);
    } else if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') {
      ev.preventDefault();
      this.grid1.findPrev(this.searchText, this.caseSensitive);
    }
  }

  public updateSearch() {
    this.caseSensitive = !this.caseSensitive;
    this.grid1.findNext(this.searchText, this.caseSensitive);
  }

  public clearSearch() {
    this.searchText = '';
    this.grid1.clearSearch();
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
