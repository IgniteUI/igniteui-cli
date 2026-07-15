import { Component } from '@angular/core';
import { ColumnType } from '<%=igxPackage%>';
import { ARTISTS, Artist } from './data';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss'
})
export class <%=ClassName%> {
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
