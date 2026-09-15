import { Component, ViewChild } from '@angular/core';
import { IgxToastComponent, IgxButtonDirective } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [IgxToastComponent, IgxButtonDirective],
})
export class <%=ClassName%> {
  @ViewChild(IgxToastComponent, { static: true })
  public toast!: IgxToastComponent;
}
