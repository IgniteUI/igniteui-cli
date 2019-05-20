import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxComboComponent  } from 'igniteui-angular';
import { localData  } from './local-data';

@Component({
  selector: 'app-$(filePrefix)',
  templateUrl: './$(filePrefix).component.html',
  styleUrls: ['./$(filePrefix).component.scss']
})

export class $(ClassName)Component implements OnInit {

  public localData = localData;

  constructor() { }

  public ngOnInit() { }
}
