import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { IgxSelectComponent, IgxLabelDirective, IgxSelectGroupComponent, IgxSelectItemComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: '<%=filePrefix%>.component.html',
  styleUrl: '<%=filePrefix%>.component.scss',
  imports: [IgxSelectComponent, IgxLabelDirective, NgFor, IgxSelectGroupComponent, IgxSelectItemComponent]
})
export class <%=ClassName%>Component {
  public items: any[] = [
    { type: 'Fruits', fruits: ['Apple', 'Orange', 'Banana'] },
    { type: 'Vegetables', vegetables: ['Cucumber', 'Potato', 'Pepper'] }
  ];
}
