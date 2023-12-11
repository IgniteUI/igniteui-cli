import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { IgxGeographicMapComponent, IgxGeographicMapCoreModule } from 'igniteui-angular-maps';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  standalone: true,
  imports: [IgxGeographicMapCoreModule]
})
export class <%=ClassName%>Component implements AfterViewInit {

  @ViewChild('map', {static: true})
  public map!: IgxGeographicMapComponent;

  public ngAfterViewInit(): void {
    this.map.windowRect = { left: 0.2, top: 0.1, width: 0.7, height: 0.7 };
  }
}
