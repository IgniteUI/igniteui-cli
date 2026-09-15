import { Component, ViewChild } from '@angular/core';
import { IgxBannerComponent, IgxBannerActionsDirective, IgxButtonDirective } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [IgxBannerComponent, IgxBannerActionsDirective, IgxButtonDirective],
})
export class <%=ClassName%> {
  @ViewChild(IgxBannerComponent, { static: true })
  public banner!: IgxBannerComponent;
}
