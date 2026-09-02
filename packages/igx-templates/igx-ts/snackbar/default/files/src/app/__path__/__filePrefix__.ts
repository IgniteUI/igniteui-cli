import { Component, ViewChild } from '@angular/core';
import { IgxSnackbarComponent, IgxButtonDirective } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [IgxSnackbarComponent, IgxButtonDirective],
})
export class <%=ClassName%> {
  @ViewChild(IgxSnackbarComponent, { static: true })
  public snackbar!: IgxSnackbarComponent;
}
