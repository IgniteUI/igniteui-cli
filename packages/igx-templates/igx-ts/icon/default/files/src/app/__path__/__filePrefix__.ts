import { Component } from '@angular/core';
import { IgxIconComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [IgxIconComponent],
})
export class <%=ClassName%> {
}
