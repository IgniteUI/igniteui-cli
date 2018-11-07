import { Component, OnInit, ViewEncapsulation, Renderer2 } from '@angular/core';
import { EMPLOYEE_DATA } from './localData';

@Component({
  selector: 'app-$(filePrefix)',
  templateUrl: './$(filePrefix).component.html',
  styleUrls: ['./$(filePrefix).component.css']
})
export class $(ClassName)Component implements OnInit {
  public localData: any[];

  title = '$(name)';
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
	this.localData = EMPLOYEE_DATA;
  }

  //TODO fix picker
  pickerOpen () {
    this.renderer.setStyle(document.querySelector('.igx-grid__tbody'), 'z-index', 'initial');
  }

  pickerClose () {
    this.renderer.setStyle(document.querySelector('.igx-grid__tbody'), 'z-index', 1);
  }
}
