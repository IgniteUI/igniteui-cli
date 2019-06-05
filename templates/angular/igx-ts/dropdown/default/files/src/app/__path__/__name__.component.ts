import { Component, OnInit, ViewChild } from '@angular/core';
import {
    IgxDropDownComponent
} from 'igniteui-angular';
import { data } from './local-data';

@Component({
    selector: 'app-$(filePrefix)',
    templateUrl: './$(filePrefix).component.html',
    styleUrls: ['./$(filePrefix).component.scss']
})

export class $(ClassName)Component implements OnInit {
    @ViewChild(IgxDropDownComponent, { static: true }) public igxDropDown: IgxDropDownComponent;

    public items: any[] = [];

    constructor() { }

    public ngOnInit() {
        this.items = data;
        this.igxDropDown.width = '200px';
    }
}
