import { Component } from '@angular/core';
import {
  IgxExpansionPanelComponent,
  IgxExpansionPanelHeaderComponent,
  IgxExpansionPanelTitleDirective,
  IgxExpansionPanelDescriptionDirective,
  IgxExpansionPanelBodyComponent
} from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [
    IgxExpansionPanelComponent,
    IgxExpansionPanelHeaderComponent,
    IgxExpansionPanelTitleDirective,
    IgxExpansionPanelDescriptionDirective,
    IgxExpansionPanelBodyComponent
  ],
})
export class <%=ClassName%> {
}
