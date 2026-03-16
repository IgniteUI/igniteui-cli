import { Component } from '@angular/core';

@Component({
  selector: "<%=filePrefix%>",
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss'
})
export class <%=ClassName%> {
  title = '<%=name%>';
}
