import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxCheckboxComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [FormsModule, IgxCheckboxComponent],
})
export class <%=ClassName%> {
  public tasks = [
    { description: 'Design mock-ups', done: true },
    { description: 'Implement feature', done: false },
    { description: 'Write unit tests', done: false }
  ];
}
