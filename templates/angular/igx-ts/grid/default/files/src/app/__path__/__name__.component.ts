import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { employeesData } from './localData';
import { IgxColumnComponent } from 'igniteui-angular/grid/column.component';

@Component({
  selector: 'app-$(filePrefix)',
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

  public onColumnInit(column: IgxColumnComponent) {
    if (column.field === 'RegistererDate') {
      column.formatter = (date => date.toDateString());
    }
  }
}
