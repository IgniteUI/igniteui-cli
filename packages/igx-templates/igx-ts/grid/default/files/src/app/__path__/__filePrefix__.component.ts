import { Component, OnInit } from '@angular/core';
import { ColumnType, IgxGridComponent, IgxPaginatorComponent } from '<%=igxPackage%>';
import { Employee, employeesData } from './localData';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  standalone: true,
  imports: [IgxGridComponent, IgxPaginatorComponent]
})
export class <%=ClassName%>Component implements OnInit {
  public localData: Employee[] = [];
  title = '<%=name%>';

  ngOnInit(): void {
    this.localData = employeesData;
  }

  public onColumnInit(column: ColumnType): void {
    if (column.field === 'RegistererDate') {
      column.formatter = (date => date.toLocaleDateString());
    }
  }
}
