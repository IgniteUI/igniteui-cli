import { Component } from '@angular/core';
import { ColumnType } from '<%=igxPackage%>';
import { ARTISTS, Artist } from './data';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  standalone: false
})
export class <%=ClassName%>Component {
  public localData: Artist[] = ARTISTS;

  public toggleColumn(col: ColumnType, event: MouseEvent): void {
    col.pinned ? col.unpin() : col.pin();
    event.stopPropagation();
  }
}
