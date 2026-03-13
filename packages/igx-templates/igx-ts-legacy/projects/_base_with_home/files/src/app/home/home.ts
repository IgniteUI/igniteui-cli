import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: false
})
export class Home  {
  protected readonly title = signal('Welcome to Ignite UI for Angular!');
  constructor() { }
}
