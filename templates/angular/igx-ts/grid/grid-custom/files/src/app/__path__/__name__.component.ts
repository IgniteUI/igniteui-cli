import { Component, OnInit, ViewEncapsulation, Renderer2 } from '@angular/core';
import { employeesData } from './localData';

@Component({
  selector: 'app-$(filePrefix)',
  templateUrl: './$(filePrefix).component.html',
  styleUrls: ['./$(filePrefix).component.scss']
})
export class $(ClassName)Component implements OnInit {
  public localData: any[];
  title = '$(name)';
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.localData = employeesData;
  }

  pickerOpen () {
    this.renderer.setStyle(document.querySelector('.igx-grid__tbody'), 'z-index', 'initial');
  }

  pickerClose () {
    this.renderer.setStyle(document.querySelector('.igx-grid__tbody'), 'z-index', 1);
  }
}
