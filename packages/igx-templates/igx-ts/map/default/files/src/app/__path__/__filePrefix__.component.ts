import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss']
})
export class <%=ClassName%>Component implements AfterViewInit {

  @ViewChild('map', {static: true})
  public map!: IgxGeographicMapComponent;
  constructor() {
  }

  public ngAfterViewInit(): void {
    this.map.windowRect = { left: 0.2, top: 0.1, width: 0.7, height: 0.7 };
  }
}
