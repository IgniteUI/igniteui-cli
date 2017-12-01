import { Component, OnInit } from '@angular/core';
import { employeesData } from './localData';

@Component({
  selector: 'app-home',
  templateUrl: './$(filePrefix).component.html',
  styleUrls: ['./$(filePrefix).component.css']
})
export class $(ClassName)Component implements OnInit {
  public localData: any[]; 
  title = '$(name)';
  constructor() { }

  ngOnInit() {
	this.localData = employeesData;
	
	  }
  }
