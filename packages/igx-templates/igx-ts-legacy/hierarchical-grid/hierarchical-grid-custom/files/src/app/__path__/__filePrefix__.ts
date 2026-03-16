import { Component } from '@angular/core';
import { ColumnType } from '<%=igxPackage%>';
import { ARTISTS, Artist } from './data';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  standalone: false
})
export class <%=ClassName%> {
  public localData: Artist[] = ARTISTS;

  public toggleColumn(col: ColumnType, event: MouseEvent): void {
    col.pinned ? col.unpin() : col.pin();
    event.stopPropagation();
  }
}
