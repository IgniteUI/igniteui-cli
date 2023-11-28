import { Component, OnInit } from '@angular/core';
import { Company, localData } from './localData';
import { IgxGridComponent, IgxColumnComponent, IgxColumnGroupComponent, IgxPaginatorComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  standalone: true,
  imports: [IgxGridComponent, IgxColumnComponent, IgxColumnGroupComponent, IgxPaginatorComponent]
})
export class <%=ClassName%>Component implements OnInit {
  public localData: Company[] = [];
  title = '<%=name%>';

  ngOnInit(): void {
    this.localData = localData;
  }
}
