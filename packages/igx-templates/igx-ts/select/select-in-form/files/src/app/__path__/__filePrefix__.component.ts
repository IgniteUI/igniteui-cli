import { Component, ViewChild } from '@angular/core';
import { IgxSelectComponent, IgxToastPosition, IgxToastComponent, ISelectionEventArgs } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  styleUrls: ['<%=filePrefix%>.component.scss'],
  templateUrl: '<%=filePrefix%>.component.html'
})
export class <%=ClassName%>Component {
  public selected!: any;
  @ViewChild(IgxSelectComponent, { static: true })
  public igxSelect!: IgxSelectComponent;

  @ViewChild(IgxToastComponent, { static: true })
  public output!: IgxToastComponent;

  public items: string[] = ['Orange', 'Apple', 'Banana', 'Mango'];
  public value!: string;
  public outputPosition = IgxToastPosition.Middle;

  public onSubmit() {
    this.value = this.igxSelect.value;
    this.output.open();
  }

  public handleSelection(event: ISelectionEventArgs) {
    this.value = event.newSelection.value;
  }
}
