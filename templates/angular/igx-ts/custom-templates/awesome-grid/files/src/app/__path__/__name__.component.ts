import { Subject } from 'rxjs/Subject';
import { timer } from 'rxjs/observable/timer';
import { AfterViewInit, Component, NgZone, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  IgxGridComponent,
  IgxGridColumnInitEvent,
  IgxProgressBarModule,
  DataContainer,
  IDataState,
  IPagingState,
  PagingError,
  SortingDirection,
  StableSortingStrategy,
  IgxAvatar,
  IgxBadge,
  IgxGridSortEvent
} from 'igniteui-angular/main';
import { IgxColumnComponent } from 'igniteui-angular/grid/column.component';
import { athletesData } from './data';

@Component({
  selector: 'app-awesome-grid',
  templateUrl: './$(filePrefix).component.html',
  styleUrls: ['./$(filePrefix).component.css'],
  encapsulation: ViewEncapsulation.None
})
export class $(ClassName)Component implements OnInit, AfterViewInit {

  public localData: any[];
  public timerSubscription: any;
  public timer: any;
  public live: boolean;
  public disabled: boolean;

  @ViewChild('grid1') public grid1: IgxGridComponent;

  constructor(private zone: NgZone) { }

  ngOnInit() {

    this.localData = athletesData;

    this.timer = new Subject().pipe(() => timer(0, 3000));
    this.timerSubscription = this.timer.subscribe(() => {
      if (this.live) {
        this.ticker();
      }
    });
    this.live = true;
    this.disabled = false;
    this.SortByTrackProgress();
  }

  private ticker() {
    this.zone.runOutsideAngular(() => {
      this.updateData();
      this.zone.run(() => {});
    });
  }


  private SortByTrackProgress() {
    this.grid1.state = {
      sorting: {
        expressions: [],
        strategy: new StableSortingStrategy()
      }
    };
  }

  ngAfterViewInit() {
    this.applyAlternateStyling();
  }

  private getRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public doGlobalFiltering(event) {
    const search = event.target.value;

    this.grid1.columns.forEach((col) => {
      if (col.field === 'CountryName') {
        this.grid1.filterData(search, col);
      }
    });
    this.applyAlternateStyling();
  }

  public doSwitch(evt) {
    if (evt.target.checked) {
      this.live = true;
    } else {
      this.live = false;
    }
  }

  public applyAlternateStyling() {
    requestAnimationFrame(() => {
      const rowElements: HTMLElement[] = Array.from(document.querySelectorAll('#igx-grid-1 tbody tr')) as HTMLElement[];

      rowElements.forEach(function(tr) {
        tr.style.backgroundColor = '';
        if (arguments[1] % 2 === 0) {
          tr.style.backgroundColor = '#F5F5F5';
        }
        if (parseInt(tr.querySelector('.rowIndex').textContent, 10) < 4) {
          tr.style.backgroundColor = '#E7F5FE';
        }
      });
    });
  }

  public sortRank(event) {
    if (event.column.field === 'Id' && event.direction === 0) {
      this.grid1.sortColumn(event.column, SortingDirection.Asc);
    }
  }

  private updateData() {
    const incr = (rec) => {
      let newValue = this.getRandomNumber(-2, 2);
      switch (newValue) {
        case -1:
          rec.Position = 'down';
          newValue = 0;
          break;
        case 0:
          rec.Position = 'current';
          newValue = 1;
          break;
        case 1:
          rec.Position = 'up';
          newValue = 5;
          break;
      }
      rec.TrackProgress += newValue;
      return rec;
    };

    this.localData = this.localData
      .map((rec) => incr(rec))
      .sort((a, b) => a.TrackProgress - b.TrackProgress);

    this.localData.reverse().forEach((rec, idx) => rec.Id = idx + 1);

    if (this.localData[0].TrackProgress >= 100) {
      this.timerSubscription.unsubscribe();
      this.live = false;
      this.disabled = true;
    }
  }
}
