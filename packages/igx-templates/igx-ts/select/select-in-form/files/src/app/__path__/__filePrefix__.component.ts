import { Component, ViewChild } from '@angular/core';
import { IgxSelectComponent, IgxToastComponent, IgxToastPosition } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  styleUrls: ['<%=filePrefix%>.component.scss'],
  templateUrl: '<%=filePrefix%>.component.html'
})
export class <%=ClassName%>Component {
  @ViewChild(IgxSelectComponent, { static: true })
  public igxSelect!: IgxSelectComponent;

  @ViewChild(IgxToastComponent, { static: true })
  public output!: IgxToastComponent;

  public selected!: string;
  public fruits: string[] = ['Orange', 'Apple', 'Banana', 'Mango'];
  public outputPosition = IgxToastPosition.Middle;

  public onSubmit() {
    this.output.open();
  }
}
