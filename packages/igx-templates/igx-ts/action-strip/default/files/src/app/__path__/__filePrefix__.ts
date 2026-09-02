import { Component } from '@angular/core';
import { IgxActionStripComponent, IgxIconButtonDirective, IgxIconComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [IgxActionStripComponent, IgxIconButtonDirective, IgxIconComponent],
})
export class <%=ClassName%> {
  public onFavorite(): void {
    console.log('favorite clicked');
  }
}
