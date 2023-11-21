import { Component, ViewChild } from '@angular/core';
import { IgxExpansionPanelComponent } from '<%=igxPackage%>';
import { data as weatherData } from './weather-data';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss']
})
export class <%=ClassName%>Component {

  @ViewChild(IgxExpansionPanelComponent, { static: true })
  public panel!: IgxExpansionPanelComponent;
  public data = weatherData;

  public toggleDetails() {
    this.panel.toggle();
  }
}
