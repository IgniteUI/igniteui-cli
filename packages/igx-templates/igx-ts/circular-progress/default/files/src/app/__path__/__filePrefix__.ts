import { Component } from '@angular/core';
import { IgxCircularProgressBarComponent, IgxButtonDirective } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [IgxCircularProgressBarComponent, IgxButtonDirective],
})
export class <%=ClassName%> {
  public currentValue = 25;

  public increment(): void {
    this.currentValue = Math.min(this.currentValue + 25, 100);
  }
}
