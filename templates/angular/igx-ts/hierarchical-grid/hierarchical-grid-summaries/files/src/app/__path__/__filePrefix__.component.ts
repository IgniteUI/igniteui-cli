import { Component, OnInit } from '@angular/core';
import { SINGERS } from './data';
import { CustomSummary } from './custom-summary';

@Component({
    selector: 'app-$(filePrefix)',
    templateUrl: './$(filePrefix).component.html',
    styleUrls: ['./$(filePrefix).component.scss']
})
export class $(ClassName)Component implements OnInit {
    public localData;
    public customSummary = CustomSummary;

    public ngOnInit(): void {
        this.localData = SINGERS;
    }
}
