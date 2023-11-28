import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { IgxSelectComponent, IgxLabelDirective, IgxSelectGroupComponent, IgxSelectItemComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  styleUrls: ['<%=filePrefix%>.component.scss'],
  templateUrl: '<%=filePrefix%>.component.html',
  standalone: true,
  imports: [IgxSelectComponent, IgxLabelDirective, NgFor, IgxSelectGroupComponent, IgxSelectItemComponent]
})
export class <%=ClassName%>Component {
  public items: any[] = [
    { type: 'Fruits', fruits: ['Apple', 'Orange', 'Banana'] },
    { type: 'Vegetables', vegetables: ['Cucumber', 'Potato', 'Pepper'] }
  ];
}
