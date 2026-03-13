import { Component } from '@angular/core';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  standalone: false
})
export class <%=ClassName%> {
  public items: string[] = ['Orange', 'Apple', 'Banana', 'Mango', 'Pineapple'];
}
