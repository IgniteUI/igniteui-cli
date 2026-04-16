import { Component, viewChild } from '@angular/core';
import {
  HorizontalAlignment,
  IgxSelectComponent,
  IgxToastComponent,
  PositionSettings,
  VerticalAlignment,
  IgxLabelDirective,
  IgxPrefixDirective,
  IgxSelectItemComponent,
  IgxButtonDirective,
} from '<%=igxPackage%>';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: '<%=filePrefix%>.html',
  styleUrl: '<%=filePrefix%>.scss',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    IgxSelectComponent,
    IgxLabelDirective,
    IgxPrefixDirective,
    IgxSelectItemComponent,
    IgxButtonDirective,
    IgxToastComponent
  ]
})
export class <%=ClassName%> {
  public igxSelect = viewChild.required(IgxSelectComponent);

  public output = viewChild.required(IgxToastComponent);

  public selected!: string;
  public fruits: string[] = ['Orange', 'Apple', 'Banana', 'Mango'];
  private messagePositionSettings: PositionSettings = {
    horizontalDirection: HorizontalAlignment.Center,
    verticalDirection: VerticalAlignment.Middle
  };

  public onSubmit() {
    this.output().open(undefined, this.messagePositionSettings);
  }
}
