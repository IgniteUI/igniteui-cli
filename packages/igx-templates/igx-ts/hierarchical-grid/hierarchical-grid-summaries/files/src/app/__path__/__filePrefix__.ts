import { Component } from '@angular/core';
import { ARTISTS, Artist } from './data';
import { CustomSummary } from './custom-summary';
import { IgxHierarchicalGridComponent, IgxColumnComponent, IgxRowIslandComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [IgxHierarchicalGridComponent, IgxColumnComponent, IgxRowIslandComponent]
})
export class <%=ClassName%> {
  public localData: Artist[] = ARTISTS;
  public customSummary = CustomSummary;
}
