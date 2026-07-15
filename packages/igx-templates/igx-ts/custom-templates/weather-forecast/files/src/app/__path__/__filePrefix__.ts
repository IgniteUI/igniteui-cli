import { Component, viewChild } from '@angular/core';
import {
  IgxExpansionPanelComponent,
  IgxCardComponent,
  IgxCardHeaderComponent,
  IgxCardContentDirective,
  IgxIconComponent,
  IgxButtonDirective,
  IgxRippleDirective,
  IgxExpansionPanelBodyComponent,
} from '<%=igxPackage%>';
import { data as weatherData } from './weather-data';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [
    IgxCardComponent,
    IgxCardHeaderComponent,
    IgxCardContentDirective,
    IgxIconComponent,
    IgxButtonDirective,
    IgxRippleDirective,
    IgxExpansionPanelComponent,
    IgxExpansionPanelBodyComponent
  ]
})
export class <%=ClassName%> {
  public panel = viewChild.required(IgxExpansionPanelComponent);
  public data = weatherData;

  public toggleDetails() {
    this.panel().toggle();
  }
}
