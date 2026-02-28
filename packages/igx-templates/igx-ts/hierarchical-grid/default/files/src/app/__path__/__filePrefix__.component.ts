import { Component } from '@angular/core';
import { ARTISTS, Artist } from './data';
import { IgxHierarchicalGridComponent, IgxColumnComponent, IgxRowIslandComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrl: './<%=filePrefix%>.component.scss',
  imports: [IgxHierarchicalGridComponent, IgxColumnComponent, IgxRowIslandComponent]
})
export class <%=ClassName%>Component {
  public localData: Artist[] = ARTISTS;
}
