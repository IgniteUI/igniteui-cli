import { Component, ViewChild } from '@angular/core';
import { IgxExpansionPanelComponent } from '<%=igxPackage%>';
import { data as weatherData } from './weather-data';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  standalone: false
})
export class <%=ClassName%> {

  @ViewChild(IgxExpansionPanelComponent, { static: true })
  public panel!: IgxExpansionPanelComponent;
  public data = weatherData;

  public toggleDetails() {
    this.panel.toggle();
  }
}
