import { Component } from '@angular/core';
import { IDialogEventArgs, IgxButtonDirective, IgxDialogComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrl: './<%=filePrefix%>.component.scss',
  imports: [IgxButtonDirective, IgxDialogComponent]
})
export class <%=ClassName%>Component {
  dialogOKSelected(args: IDialogEventArgs) {
    args.dialog.close();
  }
}
