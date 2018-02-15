import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Contacts } from './localData';

@Component({
  selector: "$(filePrefix)",
  templateUrl: './$(filePrefix).component.html',
  styleUrls: ['./$(filePrefix).component.css'],
  encapsulation: ViewEncapsulation.None
})
export class $(ClassName)Component implements OnInit {
  public userContacts: any[];
  title = '$(name)';
  constructor() { }

  ngOnInit() {
	this.userContacts = Contacts;
  }
}