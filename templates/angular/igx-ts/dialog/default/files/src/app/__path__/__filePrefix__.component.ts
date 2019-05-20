import { Component } from '@angular/core';
import { IgxDialogComponent } from 'igniteui-angular';

@Component({
  selector: 'app-$(filePrefix)',
  templateUrl: './$(filePrefix).component.html',
  styleUrls: ['./$(filePrefix).component.scss']
})

export class $(ClassName)Component {
  onDialogOKSelected(args) {
    const dialog = args.dialog as IgxDialogComponent;
    dialog.close();
  }
}
