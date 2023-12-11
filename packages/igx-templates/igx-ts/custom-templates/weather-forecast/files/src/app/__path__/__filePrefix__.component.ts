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
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  standalone: true,
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
export class <%=ClassName%>Component {
  @ViewChild(IgxExpansionPanelComponent, { static: true })
  public panel!: IgxExpansionPanelComponent;
  public data = weatherData;

  public toggleDetails() {
    this.panel.toggle();
  }
}
