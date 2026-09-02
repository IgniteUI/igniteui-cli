import { Component } from '@angular/core';
import { IGX_SPLITTER_DIRECTIVES, SplitterType } from '<%=igxPackage%>/splitter';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [IGX_SPLITTER_DIRECTIVES],
})
export class <%=ClassName%> {
  public orientation = SplitterType.Horizontal;
}
