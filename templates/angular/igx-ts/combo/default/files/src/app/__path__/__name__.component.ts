import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { IgxComboComponent  } from 'igniteui-angular';
import { localData  } from "./local-data";

@Component({
	selector: 'app-$(filePrefix)',
  	templateUrl: './$(filePrefix).component.html',
  	styleUrls: ['./$(filePrefix).component.css']
})

export class $(ClassName)Component implements OnInit {

	public lData = localData;

  	constructor() { }

 	 public ngOnInit() { }
}
