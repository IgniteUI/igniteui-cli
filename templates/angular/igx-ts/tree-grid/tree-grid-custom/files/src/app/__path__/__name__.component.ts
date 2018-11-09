import { Component, OnInit } from '@angular/core';
import { EMPLOYEE_DATA } from './localData';

@Component({
  selector: 'app-$(filePrefix)',
  templateUrl: './$(filePrefix).component.html',
  styleUrls: ['./$(filePrefix).component.scss']
})
export class $(ClassName)Component implements OnInit {
  public localData: any[];
  title = '$(name)';

  ngOnInit() {
    this.localData = EMPLOYEE_DATA;
  }
}
