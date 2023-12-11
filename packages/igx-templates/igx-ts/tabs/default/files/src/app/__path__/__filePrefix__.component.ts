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
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  standalone: true,
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
