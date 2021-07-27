import { Component, OnInit } from '@angular/core';
import { IgxColumnComponent } from '<%=igxPackage%>';
import { Employee, employeesData } from './localData';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss']
})
export class <%=ClassName%>Component implements OnInit {
  public localData: Employee[] = [];
  title = '<%=name%>';

  ngOnInit(): void {
    this.localData = employeesData;
  }

  public onColumnInit(column: IgxColumnComponent): void {
    if (column.field === 'RegistererDate') {
      column.formatter = (date => date.toLocaleDateString());
    }
  }
}
