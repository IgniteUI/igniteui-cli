import {
  AfterViewInit,
  Component,
  HostListener,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild
  } from '@angular/core';
  import { IgxGridComponent, IgxNumberSummaryOperand, IgxStringFilteringOperand, IgxSummaryResult} from 'igniteui-angular';
  import { athletesData } from './services/data';

// tslint:disable:no-use-before-declare

@Component({
selector: 'app-$(filePrefix)',
templateUrl: './$(filePrefix).component.html',
styleUrls: ['./$(filePrefix).component.scss']
})
export class $(ClassName)Component implements OnInit, OnDestroy {

  @ViewChild('grid1', { read: IgxGridComponent })
  public grid1: IgxGridComponent;

  public topSpeedSummary = CustomTopSpeedSummary;
  public bnpSummary = CustomBPMSummary;
  public localData: any[];
  public isFinished = false;
  private _live = true;
  private _timer;
  private windowWidth: any;

  get live() {
    return this._live;
  }

  set live(val) {
    this._live = val;
    if (this._live) {
      this._timer = setInterval(() => this.ticker(), 3000);
    } else {
      clearInterval(this._timer);
    }
  }

  get hideAthleteNumber() {
    return this.windowWidth && this.windowWidth < 960;
  }
  get hideBeatsPerMinute() {
    return this.windowWidth && this.windowWidth < 860;
  }

  constructor(private zone: NgZone) { }

  public ngOnInit() {
    this.localData = athletesData;
    this.windowWidth = window.innerWidth;
    this._timer = setInterval(() => this.ticker(), 3000);
  }

  public ngOnDestroy() {
    clearInterval(this._timer);
  }

  public isTop3(cell): boolean {
    const top = cell.value > 0 && cell.value < 4;
    if (top) {
      cell.row.nativeElement.classList.add('top3');
    } else {
      cell.row.nativeElement.classList.remove('top3');
    }
    return top;
  }

  public cellSelection(evt) {
    const cell = evt.cell;
    this.grid1.selectRows([cell.row.rowID], true);
  }

  public getIconType(cell) {
    switch (cell.row.rowData.Position) {
      case 'up':
        return 'arrow_upward';
      case 'current':
        return 'arrow_forward';
      case 'down':
        return 'arrow_downward';
    }
  }

  public getBadgeType(cell) {
    switch (cell.row.rowData.Position) {
      case 'up':
        return 'success';
      case 'current':
        return 'warning';
      case 'down':
        return 'error';
    }
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event) {
    this.windowWidth = event.target.innerWidth;
  }

  public filter(term) {
    this.grid1.filter('CountryName', term, IgxStringFilteringOperand.instance().condition('contains'));
    this.grid1.markForCheck();
  }

  private ticker() {
    this.zone.runOutsideAngular(() => {
      this.updateData();
      this.zone.run(() => this.grid1.markForCheck());
    });
  }

  private generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private updateData() {
    this.localData.map((rec) => {
      let val = this.generateRandomNumber(-1, 1);
      switch (val) {
        case -1:
          val = 0;
          break;
        case 0:
          val = 1;
          break;
        case 1:
          val = 3;
          break;
      }

      rec.TrackProgress += val;
    });
    const unsortedData = this.localData.slice(0);

    this.localData.sort((a, b) => b.TrackProgress - a.TrackProgress).map((rec, idx) => rec.Id = idx + 1);
    this.localData = this.localData.slice(0);

    // tslint:disable-next-line:prefer-for-of
    // Browser compatibility: for-of, No support for IE
    for (let i = 0; i < unsortedData.length; i++) {
      this.localData.some((elem, ind) => {
        if (unsortedData[i].Id === elem.Id) {
          const position = i - ind;

          if (position < 0) {
            elem.Position = 'down';
          } else if (position === 0) {
            elem.Position = 'current';
          } else {
            elem.Position = 'up';
          }

          return true;
        }
      });
    }

    if (this.localData[0].TrackProgress >= 100) {
      this.live = false;
      this.isFinished = true;
    }
  }
}

class CustomTopSpeedSummary extends IgxNumberSummaryOperand {

  constructor() {
    super();
  }

  public operate(data?: any[]): IgxSummaryResult[] {
    const result = [];
    result.push({
      key: 'average',
      label: 'average',
      summaryResult: IgxNumberSummaryOperand.average(data).toFixed(2)
    });

    return result;
  }
}

export class CustomBPMSummary extends IgxNumberSummaryOperand {

  constructor() {
    super();
  }

  public operate(data?: any[]): IgxSummaryResult[] {
    const result = [];
    result.push(
      {
        key: 'min',
        label: 'min',
        summaryResult: IgxNumberSummaryOperand.min(data)
      }, {
        key: 'max',
        label: 'max',
        summaryResult: IgxNumberSummaryOperand.max(data)
      }, {
        key: 'average',
        label: 'average',
        summaryResult: IgxNumberSummaryOperand.average(data).toFixed(2)
      });

    return result;
  }
}
