import { Component } from '@angular/core';
import { IgxDividerComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [IgxDividerComponent],
})
export class <%=ClassName%> {
}
