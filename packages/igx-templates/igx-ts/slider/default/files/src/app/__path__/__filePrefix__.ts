import { Component } from '@angular/core';
import { IgxSliderComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [IgxSliderComponent],
})
export class <%=ClassName%> {
}
