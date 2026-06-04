import { Component, signal } from '@angular/core';
import { IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-home',
  imports: [IgxIconComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home  {
  protected readonly title = signal('Welcome to Ignite UI for Angular!');
}
