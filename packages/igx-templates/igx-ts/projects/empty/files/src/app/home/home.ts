import { Component } from '@angular/core';
import { github } from '@igniteui/material-icons-extended';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular';

@Component({
  selector: 'app-home',
  imports: [IgxIconComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  constructor(iconService: IgxIconService) {
    iconService.addSvgIconFromText(github.name, github.value, 'imx-icons');
  }
}
