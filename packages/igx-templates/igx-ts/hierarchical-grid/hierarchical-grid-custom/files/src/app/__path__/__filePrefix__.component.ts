import { Component } from '@angular/core';
import { ColumnType } from '<%=igxPackage%>';
import { ARTISTS, Artist } from './data';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  standalone: true
})
export class <%=ClassName%>Component {
  public localData: Artist[] = ARTISTS;

  public toggleColumn(col: ColumnType, event: MouseEvent): void {
    if (col.pinned) {
      col.unpin();
    } else {
      col.pin();
    }
    event.stopPropagation();
  }
}
