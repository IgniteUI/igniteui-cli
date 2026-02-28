import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { IgxSelectComponent, IgxLabelDirective, IgxSelectItemComponent } from '<%=igxPackage%>';;

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrl: './<%=filePrefix%>.component.scss',
  imports: [IgxSelectComponent, IgxLabelDirective, NgFor, IgxSelectItemComponent]
})
export class <%=ClassName%>Component {
  public items: string[] = ['Orange', 'Apple', 'Banana', 'Mango', 'Pineapple'];
}
