import { Component, OnInit } from '@angular/core';
import { Company, localData } from './localData';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  standalone: false
})
export class <%=ClassName%> implements OnInit {
  public localData: Company[] = [];
  title = '<%=name%>';

  ngOnInit(): void {
    this.localData = localData;
  }
}
