import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { IgxSelectComponent, IgxLabelDirective, IgxSelectGroupComponent, IgxSelectItemComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: '<%=filePrefix%>.html',
  styleUrl: '<%=filePrefix%>.scss',
  imports: [IgxSelectComponent, IgxLabelDirective, NgFor, IgxSelectGroupComponent, IgxSelectItemComponent]
})
export class <%=ClassName%> {
  public items: any[] = [
    { type: 'Fruits', fruits: ['Apple', 'Orange', 'Banana'] },
    { type: 'Vegetables', vegetables: ['Cucumber', 'Potato', 'Pepper'] }
  ];
}
