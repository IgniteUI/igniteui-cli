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

  ngOnInit() {
	this.localData = employeesData;
	
	  }
  }
