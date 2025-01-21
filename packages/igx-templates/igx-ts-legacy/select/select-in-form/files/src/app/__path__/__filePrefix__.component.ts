import { Component, ViewChild } from '@angular/core';
import { HorizontalAlignment, IgxSelectComponent, IgxToastComponent, PositionSettings, VerticalAlignment } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  styleUrls: ['<%=filePrefix%>.component.scss'],
  templateUrl: '<%=filePrefix%>.component.html',
  standalone: false
})
export class <%=ClassName%>Component {
  @ViewChild(IgxSelectComponent, { static: true })
  public igxSelect!: IgxSelectComponent;

  @ViewChild(IgxToastComponent, { static: true })
  public output!: IgxToastComponent;

  public selected!: string;
  public fruits: string[] = ['Orange', 'Apple', 'Banana', 'Mango'];
  private messagePositionSettings: PositionSettings = {
    horizontalDirection: HorizontalAlignment.Center,
    verticalDirection: VerticalAlignment.Middle
  };

  public onSubmit() {
    this.output.open(undefined, this.messagePositionSettings);
  }
}
