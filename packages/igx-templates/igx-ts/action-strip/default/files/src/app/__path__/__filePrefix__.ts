import { Component } from '@angular/core';
import { IgxActionStripComponent, IgxButtonDirective, IgxIconComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [IgxActionStripComponent, IgxButtonDirective, IgxIconComponent],
})
export class <%=ClassName%> {
  public onFavorite(): void {
    console.log('favorite clicked');
  }
}
