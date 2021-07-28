import { Component, OnInit } from '@angular/core';
import { IgxColumnComponent } from '<%=igxPackage%>';
import { SINGERS } from './data';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss']
})
export class <%=ClassName%>Component implements OnInit {
  public localData: any[] = [];

  public ngOnInit(): void {
    this.localData = SINGERS;
  }

  public toggleColumn(col: IgxColumnComponent, event: MouseEvent) {
    col.pinned ? col.unpin() : col.pin();
    event.stopPropagation();
  }
}
