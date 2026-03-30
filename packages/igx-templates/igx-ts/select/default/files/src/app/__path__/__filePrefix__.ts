import { Component } from '@angular/core';
import { IgxSelectComponent, IgxLabelDirective, IgxSelectItemComponent } from '<%=igxPackage%>';;

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [IgxSelectComponent, IgxLabelDirective, IgxSelectItemComponent]
})
export class <%=ClassName%> {
  public items: string[] = ['Orange', 'Apple', 'Banana', 'Mango', 'Pineapple'];
}
