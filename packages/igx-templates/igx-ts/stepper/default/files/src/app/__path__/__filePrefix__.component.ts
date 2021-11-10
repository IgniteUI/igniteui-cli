import { Component } from '@angular/core';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss']
})
export class <%=ClassName%> Component {
    public orientation = 'horizontal';
    public stepperOrientations: any[] = [
    {
      label: 'Horizontal', orientation: 'horizontal',
      selected: this.orientation === 'horizontal', togglable: true
    },
    {
      label: 'Vertical', orientation: 'vertical',
      selected: this.orientation === 'vertical', togglable: true
    }
  ];

    public toggleOrientation(event): void {
    this.orientation = this.stepperOrientations[event.index].orientation;
  }
}
