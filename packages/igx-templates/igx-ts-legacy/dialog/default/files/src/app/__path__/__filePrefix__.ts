import { Component } from '@angular/core';
import { IDialogEventArgs } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  standalone: false
})

export class <%=ClassName%> {
  dialogOKSelected(args: IDialogEventArgs) {
    args.dialog.close();
  }
}
