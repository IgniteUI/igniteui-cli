import { Component } from '@angular/core';
import { ARTISTS, Artist } from './data';
import { IgxHierarchicalGridComponent, IgxColumnComponent, IgxRowIslandComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  standalone: true,
  imports: [IgxHierarchicalGridComponent, IgxColumnComponent, IgxRowIslandComponent]
})
export class <%=ClassName%>Component {
  public localData: Artist[] = ARTISTS;
}
