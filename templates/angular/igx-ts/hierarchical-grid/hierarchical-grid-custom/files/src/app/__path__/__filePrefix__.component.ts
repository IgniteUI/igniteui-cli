import { Component, OnInit } from '@angular/core';
import { IgxColumnComponent } from 'igniteui-angular';
import { SINGERS } from './data';

@Component({
    selector: 'app-$(filePrefix)',
    templateUrl: './$(filePrefix).component.html',
    styleUrls: ['./$(filePrefix).component.scss']
})
export class $(ClassName)Component implements OnInit {
    public localData;

    public ngOnInit(): void {
        this.localData = SINGERS;
    }

    public toggleColumn(col: IgxColumnComponent, event: MouseEvent) {
		col.pinned ? col.unpin() : col.pin();
		event.stopPropagation();
    }
}
