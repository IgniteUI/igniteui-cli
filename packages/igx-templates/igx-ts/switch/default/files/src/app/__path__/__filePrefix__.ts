import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxSwitchComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [FormsModule, IgxSwitchComponent],
})
export class <%=ClassName%> {
  public tasks = [
    { description: 'Enable notifications', done: true },
    { description: 'Enable dark mode', done: false }
  ];
}
