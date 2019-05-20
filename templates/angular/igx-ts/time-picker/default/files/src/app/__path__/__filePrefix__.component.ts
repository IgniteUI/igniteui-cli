import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-$(filePrefix)',
  templateUrl: './$(filePrefix).component.html',
  styleUrls: ['./$(filePrefix).component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class $(ClassName)Component implements OnInit {

  public date: Date = new Date(Date.now());

  constructor() { }

  public ngOnInit(): void {}
}
