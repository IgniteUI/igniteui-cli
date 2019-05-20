import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-$(filePrefix)',
  templateUrl: './$(filePrefix).component.html',
  styleUrls: ['./$(filePrefix).component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class $(ClassName)Component {

  public today: Date = new Date(Date.now());

}
