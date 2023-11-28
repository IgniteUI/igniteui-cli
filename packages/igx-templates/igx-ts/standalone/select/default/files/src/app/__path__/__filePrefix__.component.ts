import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { IgxSelectComponent, IgxLabelDirective, IgxSelectItemComponent } from '<%=igxPackage%>';;

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  standalone: true,
  imports: [IgxSelectComponent, IgxLabelDirective, NgFor, IgxSelectItemComponent]
})
export class <%=ClassName%>Component {
  public items: string[] = ['Orange', 'Apple', 'Banana', 'Mango', 'Pineapple'];
}
