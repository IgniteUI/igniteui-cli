import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxRadioComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [FormsModule, IgxRadioComponent],
})
export class <%=ClassName%> {
  public options = ['Small', 'Medium', 'Large'];
  public selected = 'Medium';
}
