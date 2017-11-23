import { Component, OnInit } from '@angular/core';
import { employeesData } from './localData';

@Component({
  selector: 'app-home',
  templateUrl: './$(name).component.html',
  styleUrls: ['./$(name).component.css']
})
export class $(ClassName)Component implements OnInit {
  public localData: any[]; 
  title = '$(name)';
  constructor() { }

//   @ViewChild("grid1") public grid1: IgxGridComponent;

  ngOnInit() {
	this.localData = employeesData;
	
		// this.grid1.state = {
		//   paging: {
		// 	  index: 2,
		// 	  recordsPerPage: 10
		//   }
		// };
	  }
  }
