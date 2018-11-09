import { Component, OnInit, Renderer2 } from '@angular/core';
import { localData } from './localData';

@Component({
  selector: 'app-$(filePrefix)',
  templateUrl: './$(filePrefix).component.html',
  styleUrls: ['./$(filePrefix).component.scss']
})
export class $(ClassName)Component implements OnInit {
  public localData: any[];
  title = '$(name)';
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.localData = localData;
  }
}
