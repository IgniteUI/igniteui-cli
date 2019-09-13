import {
  Component,
  OnInit,
  AfterViewInit,
  QueryList,
  ViewChild,
  ChangeDetectorRef,
  ElementRef
} from '@angular/core';

import {
  CloseScrollStrategy,
  ConnectedPositioningStrategy,
  HorizontalAlignment,
  IgxColumnComponent,
  IgxDateSummaryOperand,
  IgxExcelExporterOptions,
  IgxExcelExporterService,
  IgxGridComponent,
  IgxNumberSummaryOperand,
  IgxSummaryResult,
  IgxToggleDirective,
  OverlaySettings,
  PositionSettings,
  VerticalAlignment} from 'igniteui-angular';
import { data } from './data';

// tslint:disable:no-use-before-declare

@Component({
  selector: 'app-$(filePrefix)',
  templateUrl: './$(filePrefix).component.html',
  styleUrls: ['./$(filePrefix).component.scss']
})
export class $(ClassName)Component implements OnInit, AfterViewInit {

  @ViewChild('grid1', { static: true, read: IgxGridComponent })
  public grid1: IgxGridComponent;

  @ViewChild('toggleRefHiding', { static: true }) public toggleRefHiding: IgxToggleDirective;
  @ViewChild('toggleRefPinning', { static: true }) public toggleRefPinning: IgxToggleDirective;

  @ViewChild('hidingButton', { static: true }) public hidingButton: ElementRef;
  @ViewChild('pinningButton', { static: true }) public pinningButton: ElementRef;

  public localData: any[];
  public dealsSummary = DealsSummary;
  public earliestSummary = EarliestSummary;
  public soonSummary = SoonSummary;

  public cols: QueryList<IgxColumnComponent>;
  public hiddenColsLength: number;
  public pinnedColsLength: number;

  public searchText = '';
  public caseSensitive = false;

  public positionSettings: PositionSettings = {
    horizontalDirection: HorizontalAlignment.Left,
    horizontalStartPoint: HorizontalAlignment.Right,
    verticalStartPoint: VerticalAlignment.Bottom
  };

  public overlaySettings: OverlaySettings = {
    closeOnOutsideClick: true,
    modal: false,
    positionStrategy: new ConnectedPositioningStrategy(this.positionSettings),
    scrollStrategy: new CloseScrollStrategy()
  };

  constructor(private crd: ChangeDetectorRef, private excelExporterService: IgxExcelExporterService) { }

  public ngOnInit() {
    this.localData = data;
  }

  public toggleHiding() {
    this.overlaySettings.positionStrategy.settings.target = this.hidingButton.nativeElement;
    this.toggleRefHiding.toggle(this.overlaySettings);
  }

  public togglePinning() {
    this.overlaySettings.positionStrategy.settings.target = this.pinningButton.nativeElement;
    this.toggleRefPinning.toggle(this.overlaySettings);
  }

  public ngAfterViewInit() {
    this.grid1.summariesHeight = 60;
    this.grid1.reflow();
    this.cols = this.grid1.columnList;
    this.hiddenColsLength = this.cols.filter((col) => col.hidden).length;
    this.pinnedColsLength = this.cols.filter((col) => col.pinned).length;
    this.crd.detectChanges();
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

  public formatValue(val: any): string {
    return val.toLocaleString('en-us', { maximumFractionDigits: 2 });
  }
}

function formatDate(val: Date) {
    return new Intl.DateTimeFormat('en-US').format(val);
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
