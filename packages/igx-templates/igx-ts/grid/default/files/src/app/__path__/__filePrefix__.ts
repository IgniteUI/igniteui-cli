import { Component, OnInit } from '@angular/core';
import { ColumnType, IgxGridComponent, IgxPaginatorComponent } from '<%=igxPackage%>';
import { Employee, employeesData } from './localData';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [IgxGridComponent, IgxPaginatorComponent]
})
export class <%=ClassName%> implements OnInit {
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
