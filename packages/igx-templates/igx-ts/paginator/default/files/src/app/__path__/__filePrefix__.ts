import { Component } from '@angular/core';
import { IgxPaginatorComponent } from '<%=igxPackage%>/paginator';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [IgxPaginatorComponent],
})
export class <%=ClassName%> {
  public totalRecords = 250;
  public perPage = 25;

  public onPageChanged(page: number): void {
    console.log('page changed', page);
  }
}
