import { Component } from '@angular/core';

@Component({
  selector: "<%=filePrefix%>",
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  standalone: false
})
export class <%=ClassName%> {
  title = '<%=name%>';
  constructor() { }
}
