import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Contacts } from './localData';

@Component({
  selector: 'app-$(filePrefix)',
  templateUrl: './$(filePrefix).component.html',
  styleUrls: ['./$(filePrefix).component.scss'],
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
