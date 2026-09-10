import { Component } from '@angular/core';
import { IgxLinearProgressBarComponent, IgxButtonDirective } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [IgxLinearProgressBarComponent, IgxButtonDirective],
})
export class <%=ClassName%> {
  public currentValue = 25;

  public increment(): void {
    this.currentValue = Math.min(this.currentValue + 25, 100);
  }
}
