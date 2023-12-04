import { Component } from '@angular/core';
import {
  IButtonGroupEventArgs,
  IgxStepperOrientation,
  IgxButtonGroupComponent,
  IgxStepperComponent,
  IgxStepComponent,
  IgxStepTitleDirective,
  IgxStepContentDirective,
  IgxButtonDirective,
} from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  standalone: true,
  imports: [
    IgxButtonGroupComponent,
    IgxStepperComponent,
    IgxStepComponent,
    IgxStepTitleDirective,
    IgxStepContentDirective,
    IgxButtonDirective
  ]
})
export class <%=ClassName%>Component {
    public orientation: IgxStepperOrientation = 'horizontal';
    public stepperOrientations: any[] = [
    {
      label: 'Horizontal', orientation: 'horizontal',
      selected: this.orientation === 'horizontal', toggleable: true
    },
    {
      label: 'Vertical', orientation: 'vertical',
      selected: this.orientation === 'vertical', toggleable: true
    }
  ];

    public toggleOrientation(event: IButtonGroupEventArgs): void {
    this.orientation = this.stepperOrientations[event.index].orientation;
  }
}
