import {
  Component, ViewEncapsulation, Renderer2,
  AfterViewInit, ElementRef, OnDestroy, OnInit, ViewChild, Output, EventEmitter
} from '@angular/core';
import {
  DefaultSortingStrategy, IgxButtonGroupComponent, IgxGridComponent, IgxSliderComponent,
  SortingDirection
} from 'igniteui-angular';
import { Observable, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { LocalDataService } from './localData.service';

@Component({
  providers: [LocalDataService],
  selector: 'app-$(filePrefix)',
  templateUrl: './$(filePrefix).component.html',
  styleUrls: ['./$(filePrefix).component.scss']
})
export class $(ClassName)Component implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
  @ViewChild('buttonGroup1', { static: true }) public buttonGroup1: IgxButtonGroupComponent;
  @ViewChild('slider1', { static: true }) public volumeSlider: IgxSliderComponent;
  @ViewChild('slider2', { static: true }) public intervalSlider: IgxSliderComponent;

  @Output() changeTheme = new EventEmitter<boolean>();
  public isBlackTheme = false;
  public volume = 1000;
  public frequency = 500;
  public data: Observable<any[]> ;
  public controls = [
    {
      disabled: false,
      icon: 'update',
      label: 'LIVE PRICES',
      selected: false
    },
    {
      disabled: false,
      icon: 'update',
      label: 'LIVE ALL PRICES',
      selected: false
    },
    {
      disabled: true,
      icon: 'stop',
      label: 'Stop',
      selected: false
    }
  ];

  private subscription;
  private selectedButton;
  private timer;
  private volumeChanged;

  constructor(private localService: LocalDataService, private elRef: ElementRef) {
    this.subscription = this.localService.getData(this.volume);
    this.data = this.localService.records;
  }

  public ngOnInit() {
    this.grid1.groupingExpressions = [{
      dir: SortingDirection.Desc,
      fieldName: 'Category',
      ignoreCase: false,
      strategy: DefaultSortingStrategy.instance()
    },
    {
      dir: SortingDirection.Desc,
      fieldName: 'Type',
      ignoreCase: false,
      strategy: DefaultSortingStrategy.instance()
    },
    {
      dir: SortingDirection.Desc,
      fieldName: 'Contract',
      ignoreCase: false,
      strategy: DefaultSortingStrategy.instance()
    }
    ];
    this.volumeChanged = this.volumeSlider.onValueChange.pipe(debounce(() => timer(200)));
    this.volumeChanged.subscribe(
      (x) => {
        this.localService.getData(this.volume);
      },
      (err) => console.log('Error: ' + err));
  }

  public ngAfterViewInit() {
    setTimeout(() => {
      this.grid1.reflow();
    }, 0);
  }

  public onButtonAction(event: any) {
    switch (event.index) {
      case 0: {
        this.disableOtherButtons(event.index, true);
        const currData = this.grid1.data;
        this.timer = setInterval(() => this.ticker(currData), this.frequency);
        break;
      }
      case 1: {
        this.disableOtherButtons(event.index, true);
        const currData = this.grid1.data;
        this.timer = setInterval(() => this.tickerAllPrices(currData), this.frequency);
        break;
      }
      case 2: {
        this.disableOtherButtons(event.index, false);
        this.stopFeed();
        break;
      }
      default:
        {
          break;
        }
    }
  }

  public onChange(event: any) {
    if (this.grid1.groupingExpressions.length > 0) {
      this.grid1.groupingExpressions = [];
    } else {
      this.grid1.groupingExpressions = [{
        dir: SortingDirection.Desc,
        fieldName: 'Category',
        ignoreCase: false,
        strategy: DefaultSortingStrategy.instance()
      },
      {
        dir: SortingDirection.Desc,
        fieldName: 'Type',
        ignoreCase: false,
        strategy: DefaultSortingStrategy.instance()
      },
      {
        dir: SortingDirection.Desc,
        fieldName: 'Contract',
        ignoreCase: false,
        strategy: DefaultSortingStrategy.instance()
      }
      ];
    }
  }

  public stopFeed() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public formatNumber(value: number) {
    return value.toFixed(2);
  }

  public percentage(value: number) {
    return value.toFixed(2) + '%';
  }

  public formatCurrency(value: number) {
    return '$' + value.toFixed(3);
  }

  /**
   * the below code is needed when accessing the sample through the navigation
   * it will style all the space below the sample component element, but not the navigation menu
   */
  public onThemeChanged(event: any) {
    this.isBlackTheme = !this.isBlackTheme;
    this.changeTheme.emit(this.isBlackTheme);
  }

  public ngOnDestroy() {
    this.stopFeed();
    this.volumeChanged.unsubscribe();
  }

  public toggleToolbar(event: any) {
    this.grid1.showToolbar = !this.grid1.showToolbar;
  }

  private negative = (rowData: any): boolean => {
    return rowData['Change(%)'] < 0;
  }
  private positive = (rowData: any): boolean => {
    return rowData['Change(%)'] > 0;
  }
  private changeNegative = (rowData: any): boolean => {
    return rowData['Change(%)'] < 0 && rowData['Change(%)'] > -1;
  }
  private changePositive = (rowData: any): boolean => {
    return rowData['Change(%)'] > 0 && rowData['Change(%)'] < 1;
  }
  private strongPositive = (rowData: any): boolean => {
    return rowData['Change(%)'] >= 1;
  }
  private strongNegative = (rowData: any, key: string): boolean => {
    return rowData['Change(%)'] <= -1;
  }

  // tslint:disable:member-ordering
  public trends = {
    changeNeg: this.changeNegative,
    changePos: this.changePositive,
    negative: this.negative,
    positive: this.positive,
    strongNegative: this.strongNegative,
    strongPositive: this.strongPositive
  };

  public trendsChange = {
    changeNeg2: this.changeNegative,
    changePos2: this.changePositive,
    strongNegative2: this.strongNegative,
    strongPositive2: this.strongPositive
  };
    // tslint:enable:member-ordering

  private disableOtherButtons(ind: number, disableButtons: boolean) {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.volumeSlider.disabled = disableButtons;
    this.intervalSlider.disabled = disableButtons;
    this.selectedButton = ind;
    this.buttonGroup1.buttons.forEach((button, index) => {
      if (index === 2) { button.disabled = !disableButtons; } else {
        button.disabled = disableButtons;
      }
    });
  }

  /**
   * returns the main div container of the Index Component,
   * if path is /samples/sample-url, or the appRoot, if path is /sample-url
   */
  private parentComponentEl() {
    return this.elRef.nativeElement.parentElement.parentElement;
  }

  private ticker(data: any) {
    this.grid1.data = this.updateRandomPrices(data);
  }

  private tickerAllPrices(data: any) {
    this.grid1.data = this.updateAllPrices(data);
  }

  /**
   * Updates values in every record
   */
  private updateAllPrices(data: any[]): any {
    const newData = data.slice();
    for (const dataRow of newData) {
      this.randomizeObjectData(dataRow);
    }
    return newData;
  }

  /**
   * Updates values in random number of records
   */
  private updateRandomPrices(data: any[]): any {
    const newData = data.slice();
    let y = 0;
    for (let i = Math.round(Math.random() * 10); i < newData.length; i += Math.round(Math.random() * 10)) {
      this.randomizeObjectData(newData[i]);
      y++;
    }
    return newData;
  }

  /**
   * Generates ne values for Change, Price and ChangeP columns
   */
  private randomizeObjectData(dataObj) {
    const changeP = 'Change(%)';
    const res = this.generateNewPrice(dataObj.Price);
    dataObj.Change = res.Price - dataObj.Price;
    dataObj.Price = res.Price;
    dataObj[changeP] = res.ChangePercent;
  }

  private generateNewPrice(oldPrice): any {
    let rnd = Math.random();
    rnd = Math.round(rnd * 100) / 100;
    const volatility = 2;
    let newPrice = 0;
    let changePercent = 2 * volatility * rnd;
    if (changePercent > volatility) {
      changePercent -= (2 * volatility);
    }
    const changeAmount = oldPrice * (changePercent / 100);
    newPrice = oldPrice + changeAmount;
    newPrice = Math.round(newPrice * 100) / 100;
    const result = { Price: 0, ChangePercent: 0 };
    changePercent = Math.round(changePercent * 100) / 100;
    result.Price = newPrice;
    result.ChangePercent = changePercent;

    return result;
  }

  get grouped(): boolean {
    return this.grid1.groupingExpressions.length > 0;
  }

  get buttonSelected(): number {
    return this.selectedButton || this.selectedButton === 0 ? this.selectedButton : -1;
  }
}
