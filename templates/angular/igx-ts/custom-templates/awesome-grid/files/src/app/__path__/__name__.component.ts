import {
	AfterViewInit,
	Component,
	HostListener,
	NgZone,
	OnInit,
	TemplateRef,
	ViewChild,
	ViewEncapsulation
  } from '@angular/core';
  import {
	IgxProgressBarModule,
	DataContainer,
	IDataState,
	IPagingState,
	PagingError,
	SortingDirection,
	StableSortingStrategy,
	IgxIconComponent
  } from 'igniteui-angular/main';
  import { IgxGridComponent } from 'igniteui-angular/grid/grid.component';
  import { timer } from 'rxjs/observable/timer';
  import { Subject } from 'rxjs/Subject';
  import { athletesData } from './data';
  
  @Component({
	selector: "$(filePrefix)",
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
	public windowWidth: any;
  
	@ViewChild('grid1', { read: IgxGridComponent })
	public grid1: IgxGridComponent;
  
	@ViewChild('pager', { read: TemplateRef })
	public pager: TemplateRef<any>;
  
	constructor(private zone: NgZone) { }
  
	ngOnInit() {
	  this.localData = athletesData;
	  this.timer = new Subject().pipe(() => timer(0, 3000));
	  this.timerSubscription = this.timer.subscribe((tick) => {
		if (this.live) {
		  this.ticker();
		}
	  });
	  this.live = true;
	  this.disabled = false;
	}
  
	public isTop3(cell): boolean {
	  if ([1, 2, 3].includes(cell.value)) {
		cell.nativeElement.parentElement.classList.add('top3');
		return true;
	  }
	}
  
	public getPositionDelta(cell) {
	  return cell.row.rowData.Position;
	}
  
	public ngAfterViewInit() {
	  this.grid1.paginationTemplate = this.pager;
	  this.grid1.perPage = 6;
	  this.windowWidth = (window.innerWidth);
	}
  
	@HostListener('window:resize', ['$event'])
	public onResize(event) {
	  this.windowWidth = (event.target.innerWidth);
	}
  
	public doGlobalFiltering(event) {
	  const search = event.target.value;
	  this.grid1.filter('CountryName', search);
	  }
  
	public doSwitch(evt) {
	  this.live = evt.target.checked ? true : false;
	}
  
	private ticker() {
	  this.zone.runOutsideAngular(() => {
		this.updateData();
		this.zone.run(() => {});
	  });
	}
  
	private getRandomNumber(max, min) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
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
		return {...rec};
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