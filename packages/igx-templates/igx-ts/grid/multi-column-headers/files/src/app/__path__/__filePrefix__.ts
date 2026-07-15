import { Component, OnInit } from '@angular/core';
import { Company, localData } from './localData';
import { IgxGridComponent, IgxColumnComponent, IgxColumnGroupComponent, IgxPaginatorComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [IgxGridComponent, IgxColumnComponent, IgxColumnGroupComponent, IgxPaginatorComponent]
})
export class <%=ClassName%> implements OnInit {
  public localData: Company[] = [];
  title = '<%=name%>';

  ngOnInit(): void {
    this.localData = localData;
  }
}
