import { Component } from '@angular/core';

@Component({
  selector: "<%=filePrefix%>",
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrl: './<%=filePrefix%>.component.scss'
})
export class <%=ClassName%>Component {
  title = '<%=name%>';
}
