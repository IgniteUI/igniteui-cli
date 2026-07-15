import { Component } from '@angular/core';
import { IDialogEventArgs, IgxButtonDirective, IgxDialogComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [IgxButtonDirective, IgxDialogComponent]
})
export class <%=ClassName%> {
  dialogOKSelected(args: IDialogEventArgs) {
    args.dialog.close();
  }
}
