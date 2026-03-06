import { Component, OnInit } from '@angular/core';
import { Employee, EMPLOYEE_DATA } from './localData';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss'
})
export class <%=ClassName%> implements OnInit {
  public localData: Employee[] = [];
  title = '<%=name%>';

  ngOnInit() {
    this.localData = EMPLOYEE_DATA;
  }
}
