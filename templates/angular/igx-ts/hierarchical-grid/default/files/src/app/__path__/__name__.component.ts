import { Component, OnInit } from '@angular/core';
import { SINGERS } from './data';
import { Singer } from './singer';

@Component({
    selector: 'app-$(filePrefix)',
    templateUrl: './$(filePrefix).component.html',
    styleUrls: ['./$(filePrefix).component.scss']
})
export class $(ClassName)Component implements OnInit {
    public localData;
    public singer;

    public ngOnInit(): void {
        this.localData = SINGERS;
        this.singer = new Singer();
    }
}
