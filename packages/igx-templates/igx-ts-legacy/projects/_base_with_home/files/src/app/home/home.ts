import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: false
})
export class Home  {
  title = 'Welcome to Ignite UI for Angular!';
  constructor() { }
}
