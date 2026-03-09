import { Component, OnInit } from '@angular/core';
import { Employee, employeesData } from './localData';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  standalone: false
})
export class <%=ClassName%> implements OnInit {
  public localData: Employee[] = [];
  title = '<%=name%>';

  ngOnInit(): void {
    this.localData = employeesData;
  }
}
