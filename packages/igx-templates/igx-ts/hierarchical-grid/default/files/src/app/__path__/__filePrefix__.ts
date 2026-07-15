import { Component } from '@angular/core';
import { ARTISTS, Artist } from './data';
import { IgxHierarchicalGridComponent, IgxColumnComponent, IgxRowIslandComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [IgxHierarchicalGridComponent, IgxColumnComponent, IgxRowIslandComponent]
})
export class <%=ClassName%> {
  public title = '<%=name%>';
  public localData: Artist[] = ARTISTS;
}
