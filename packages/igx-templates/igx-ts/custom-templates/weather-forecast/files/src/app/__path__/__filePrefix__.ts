import { Component, ViewChild } from '@angular/core';
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
import { NgIf, NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [
    IgxCardComponent,
    IgxCardHeaderComponent,
    IgxCardContentDirective,
    NgIf,
    IgxIconComponent,
    IgxButtonDirective,
    IgxRippleDirective,
    IgxExpansionPanelComponent,
    IgxExpansionPanelBodyComponent,
    NgFor,
    NgClass
  ]
})
export class <%=ClassName%> {
  @ViewChild(IgxExpansionPanelComponent, { static: true })
  public panel!: IgxExpansionPanelComponent;
  public data = weatherData;

  public toggleDetails() {
    this.panel.toggle();
  }
}
