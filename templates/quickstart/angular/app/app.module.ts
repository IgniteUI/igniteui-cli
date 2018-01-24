import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

import { IgGridComponent, IgTextEditorComponent, IgDateEditorComponent,
     IgMaskEditorComponent, IgCurrencyEditorComponent, IgNumericEditorComponent,
     IgPercentEditorComponent, IgDatePickerComponent, IgComboComponent,
     IgTreeComponent, IgDialogComponent, IgDataChartComponent
} from 'igniteui-angular-wrappers';

@NgModule({
  imports: [ BrowserModule , FormsModule ],
  declarations: [AppComponent, IgGridComponent, IgTextEditorComponent, IgDateEditorComponent,
  IgMaskEditorComponent, IgCurrencyEditorComponent, IgNumericEditorComponent,
  IgPercentEditorComponent, IgDatePickerComponent, IgComboComponent,
  IgTreeComponent, IgDialogComponent, IgDataChartComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
