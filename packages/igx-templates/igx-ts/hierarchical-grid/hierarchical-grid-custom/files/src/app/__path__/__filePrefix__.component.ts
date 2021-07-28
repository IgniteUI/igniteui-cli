import { Component } from '@angular/core';
import { IgxColumnComponent } from '<%=igxPackage%>';
import { ARTISTS, Artist } from './data';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss']
})
export class <%=ClassName%>Component {
  public localData: Artist[] = ARTISTS;

  public toggleColumn(col: IgxColumnComponent, event: MouseEvent): void {
    col.pinned ? col.unpin() : col.pin();
    event.stopPropagation();
  }
}
