import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
	IgxSwitchComponent,
	IgxAccordionComponent,
	IgxExpansionPanelComponent,
	IgxExpansionPanelHeaderComponent,
	IgxExpansionPanelTitleDirective,
	IgxExpansionPanelBodyComponent,
  } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrl: './<%=filePrefix%>.component.scss',
  imports: [
    IgxSwitchComponent,
    ReactiveFormsModule,
    FormsModule,
    IgxAccordionComponent,
    IgxExpansionPanelComponent,
    IgxExpansionPanelHeaderComponent,
    IgxExpansionPanelTitleDirective,
    IgxExpansionPanelBodyComponent,
  ],
})
export class <%=ClassName%>Component {
  public singleBranchExpand = false;
}
