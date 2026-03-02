import { Component } from '@angular/core';
import { IDialogEventArgs } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrl: './<%=filePrefix%>.component.scss',
  standalone: false
})

export class <%=ClassName%>Component {
  dialogOKSelected(args: IDialogEventArgs) {
    args.dialog.close();
  }
}
