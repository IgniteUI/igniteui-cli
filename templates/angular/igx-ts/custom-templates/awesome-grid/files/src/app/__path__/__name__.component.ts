import {
	AfterViewInit,
	Component,
	HostListener,
	NgZone,
	OnDestroy,
	OnInit,
	ViewChild,
	ViewEncapsulation
  } from '@angular/core';
  import { IgxGridComponent } from 'igniteui-angular/grid/grid.component';
  import { STRING_FILTERS } from 'igniteui-angular/main';
  import { athletesData } from './services/data';
  
  @Component({
	selector: "$(filePrefix)",
	templateUrl: './$(filePrefix).component.html',
	styleUrls: ['./$(filePrefix).component.css'],
	encapsulation: ViewEncapsulation.None
  })
  export class $(ClassName)Component implements OnInit, AfterViewInit {

	@ViewChild('grid1', { read: IgxGridComponent })
	public grid1: IgxGridComponent;
  
	public localData: any[];
	private _live = true;
	private _timer;
	private windowWidth: any;

	get live() {
	  return this._live;
	}

	set live(val) {
	  this._live = val;
	  clearInterval(this._timer);
	}

	get hideColumn() {
	  return this.windowWidth && this.windowWidth < 785;
	}

	constructor(private zone: NgZone) {}
  
	public ngOnInit() {
	  this.localData = athletesData;
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
	  this.grid1.filter('CountryName', term, STRING_FILTERS.contains);
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
			rec.Position = 'down';
			val = 0;
			break;
		  case 0:
			rec.Position = 'current';
			val = 1;
			break;
		  case 1:
			rec.Position = 'up';
			val = 3;
			break;
		}
		rec.TrackProgress += val;
	  });

	  this.localData.sort((a, b) => b.TrackProgress - a.TrackProgress).map((rec, idx) => rec.Id = idx + 1);
	  this.localData = this.localData.slice(0);
  
	  if (this.localData[0].TrackProgress >= 100) {
		this.live = false;
	  }
	}
  }