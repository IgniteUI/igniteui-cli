import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxGridComponent, IgxSummaryResult, IgxDateSummaryOperand } from 'igniteui-angular';
import { employeesData } from './localData';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-grid-summaries',
    templateUrl: './grid-summaries.component.html',
    styleUrls: ['./grid-summaries.component.css']
})
export class GridSummariesComponent implements OnInit {
    @ViewChild("sampleGrid", { read: IgxGridComponent })
    public sampleGrid: IgxGridComponent;
    customDateSummary = CustomDateSummary;

    public localData: any[];
    title = 'Grid Summaries';

    constructor() { }

    ngOnInit() {
        this.localData = employeesData;
    }

    public formatDate(value: Date) {
        return value.toLocaleDateString();
    }

    public toggleSummary(name) {
        if (this.sampleGrid.getColumnByName(name).hasSummary) {
            this.sampleGrid.disableSummaries(name);
        } else {
            this.sampleGrid.enableSummaries(name, this.customDateSummary);
        }
    }
}


class CustomDateSummary extends IgxDateSummaryOperand {
    constructor() {
        super();
    }
    public operate(data?: any[]): IgxSummaryResult[] {
        const result = [];
        result.push({
            key: "earliest",
            label: "Earliest Date",
            summaryResult: (IgxDateSummaryOperand.earliest(data)).toLocaleDateString()
        });
        result.push({
            key: "latest",
            label: "Latest Date",
            summaryResult: (IgxDateSummaryOperand.latest(data)).toLocaleDateString()
        });

        return result;
    }
}
