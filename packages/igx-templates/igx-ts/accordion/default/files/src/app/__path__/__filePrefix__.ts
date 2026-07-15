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
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
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
export class <%=ClassName%> {
  public singleBranchExpand = false;
}
