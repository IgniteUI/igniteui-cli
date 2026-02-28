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
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrl: './<%=filePrefix%>.component.scss',
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
export class <%=ClassName%>Component {
}
