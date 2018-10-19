import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
    IgxDropDownComponent,
    ConnectedPositioningStrategy,
    OverlaySettings,
    PositionSettings,
    NoOpScrollStrategy,
    HorizontalAlignment,
    VerticalAlignment
} from 'igniteui-angular';
import { data } from './local-data';

@Component({
    selector: 'app-$(filePrefix)',
    templateUrl: './$(filePrefix).component.html',
    styleUrls: ['./$(filePrefix).component.css']
})

export class $(ClassName)Component implements OnInit {
    @ViewChild(IgxDropDownComponent) public igxDropDown: IgxDropDownComponent;
    @ViewChild('button') public button: ElementRef;

    private _positionSettings: PositionSettings = {
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalStartPoint: VerticalAlignment.Bottom
    };

    private _overlaySettings: OverlaySettings = {
      closeOnOutsideClick: true,
      modal: false,
      positionStrategy: new ConnectedPositioningStrategy(this._positionSettings),
      scrollStrategy: new NoOpScrollStrategy()
  };
    public items: any[] = [];

    constructor() { }

    public ngOnInit() {
        this.items = data;
        this.igxDropDown.width = '200px';
    }

    public toggleDropDown(eventArgs) {
        this._overlaySettings.positionStrategy.settings.target = eventArgs.target;
        this.igxDropDown.toggle(this._overlaySettings);
    }
}
