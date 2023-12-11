import { Component, OnInit } from '@angular/core';
import { Employee, EMPLOYEE_DATA } from './localData';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  standalone: true
})
export class <%=ClassName%>Component implements OnInit {
  public localData: Employee[] = [];
  title = '<%=name%>';

  ngOnInit() {
    this.localData = EMPLOYEE_DATA;
  }
}
