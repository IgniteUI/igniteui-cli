import { Component } from '@angular/core';
import {
  IgxTabsComponent,
  IgxTabItemComponent,
  IgxTabHeaderComponent,
  IgxIconComponent,
  IgxTabHeaderIconDirective,
  IgxTabHeaderLabelDirective,
  IgxTabContentComponent,
} from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [
    IgxTabsComponent,
    IgxTabItemComponent,
    IgxTabHeaderComponent,
    IgxIconComponent,
    IgxTabHeaderIconDirective,
    IgxTabHeaderLabelDirective,
    IgxTabContentComponent
  ]
})
export class <%=ClassName%> {
}
