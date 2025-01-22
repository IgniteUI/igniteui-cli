import { Component, OnInit } from '@angular/core';
import { Company, localData } from './localData';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  standalone: false
})
export class <%=ClassName%>Component implements OnInit {
  public localData: Company[] = [];
  title = '<%=name%>';

  ngOnInit(): void {
    this.localData = localData;
  }
}
