---
title: Angular Grid Selection-Based Data Aggregation- Ignite UI for Angular
_description: Learn how to aggregate selected data in a grid with Ignite UI. Get instant content aggregations in the virtualized data and rich API for your next project.
_keywords: Data aggregation, selection, ignite ui for angular, infragistics
_license: commercial
_tocName: Selection-based Aggregates
_premium: true
---

# Angular Grid Selection-Based Data Aggregation

With the sample, illustrated beyond, you may see how multiple selection is being used, alongside with custom summary functions, to display aggregates based on the selected values in the grid footer.

## Topic Overview

To achieve the selection-based aggregates functionality, you can use our [`Grid Selection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/components/grid/selection.html) feature, together with the [`Grid Summaries`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/components/grid/summaries.html).
The Summaries are allowing for customization of the basic Summary feature functionality through extending one of the base classes, [`IgxSummaryOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsummaryoperand.html), [`IgxNumberSummaryOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxnumbersummaryoperand.html) or [`IgxDateSummaryOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatesummaryoperand.html), depending on the column data type and your needs.  

## Selection

To start working with the data in the selected grid range, you will have to subscribe to events that are notifying of changes in the grid selection. That can be done by subscribing to the [`selected`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#selected) event and to the [`rangeSelected`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rangeSelected) event. You need to bind to both of them because the Selection feature differentiates between selecting a single cell and selecting a range of cells.

In the events subscription logic, you can extract the selected data using the grid's [`getSelectedData`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#getSelectedData) function and pass the selected data to the custom summary operand.


## Summary

Within the custom summary class, you'd have to be differentiating the types of data in the grid. For instance, in the scenario below, there are four different columns, whose type of data is suitable for custom summaries. These are the Unit Price, the Units in Stock, Discontinued status and the Order Date.
The `operate` method of the derived class of the `IgxSummaryOperand`, is where you will process the data, starting by casing it in different categories based on the data types:

```typescript
const numberData = data.filter(rec => typeof rec === "number");
const boolData = data.filter(rec => typeof rec === "boolean");
const dates = data.filter(rec => isDate(rec));
```

> [!NOTE]
> Bear in mind, that `isDate` is a custom function.

After having the data types grouped accordingly, you can proceed to the aggregation itself. For that reason, you could use the already exposed methods of the `IgxNumberSummaryOperand` and `IgxDateSummaryOperand`.
After that, you'd have to put the aggregated data in the same array, which would be returned to the template.  
For the visualization of the data, you might want to use the `<igx-grid-footer>`, which in a combination with the `custom-summaries` class will give the natural look of the Summary.


### Demo

Change the selection to see summaries of the currently selected range.


```typescript
import { formatDate } from '@angular/common';
import { AfterViewInit, Component, ViewChild, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxDateSummaryOperand, IgxGridFooterComponent, IgxNumberSummaryOperand, IgxSummaryOperand } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxSummaryResult } from 'igniteui-angular/core';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

class MySummary {

    public operate(data: any[] = []): IgxSummaryResult[] {
        const result = new IgxSummaryOperand().operate(data);
        if (data.length < 1) { return result; }
        const numberData = data.filter(rec => typeof rec === 'number');
        const boolData = data.filter(rec => typeof rec === 'boolean');
        const dates = data.filter(rec => isDate(rec));
        if (numberData.length) {
            result.push({ key: 'min', label: 'Min', summaryResult: IgxNumberSummaryOperand.min(numberData)});
            result.push({ key: 'max', label: 'Max', summaryResult: IgxNumberSummaryOperand.max(numberData)});
            result.push({ key: 'avg', label: 'Avg', summaryResult: IgxNumberSummaryOperand.average(numberData)});
            result.push({ key: 'sum', label: 'Sum', summaryResult: IgxNumberSummaryOperand.sum(numberData)});
        }
        if (boolData.length) {
            result.push({
                key: 'test', label: 'Discounted',
                summaryResult: boolData.filter(rec => rec).length  + ' of ' + boolData.length });
        }
        if (dates.length) {
            result.push({ key: 'earliest', label: 'Earliest', summaryResult: IgxDateSummaryOperand.earliest(dates)});
            result.push({ key: 'latest', label: 'Latest', summaryResult: IgxDateSummaryOperand.latest(dates)});
        }
        return result;
    }
}
@Component({
    selector: 'app-grid-sample',
    styleUrls: ['./grid-custom-summaries-selection.component.scss'],
    templateUrl: 'grid-custom-summaries-selection.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxGridFooterComponent]
})

export class GridCustomSummariesSelectionComponent implements AfterViewInit, OnInit {
    private cdr = inject(ChangeDetectorRef);

    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
    public data: any[];
    public selectionSummaries = [];
    private customSummary =  new MySummary();

    public ngOnInit(): void {
        this.data = DATA;
    }
    public ngAfterViewInit(): void {
        this.grid1.setSelection({
            rowStart: 2, rowEnd: 4,
            columnStart: 1, columnEnd: 4
        });
        this.calculateSummary();
        this.cdr.detectChanges();
    }
    public format(value: any) {
        if (typeof value === 'number') {
           return value.toFixed(2);
        } else if (isDate(value)) {
            return formatDate(value, 'mediumDate', 'en');
        }
        return value;
    }
    public formatCurrency(value: number) {
        if (!value) { return; }
        return '$' + value.toFixed(2);
    }

    public calculateSummary() {
        this.selectionSummaries = this.customSummary.operate(this.toArray(this.grid1.getSelectedData()));
    }

    public toArray(data) {
        let result = [];
        data.forEach(rec => result = result.concat(Object.values(rec)));
        return result;
    }
}

function isDate(value: any) {
    return Object.prototype.toString.call(value) === '[object Date]';
}
```
```html
<div class="grid__wrapper">
  <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" [height]="'530px'" [width]="'100%'"
    (selected)='calculateSummary()'
    (rangeSelected)='calculateSummary()'>
    <igx-column [field]="'ProductID'"></igx-column>
    <igx-column [field]="'ProductName'"></igx-column>
    <igx-column [field]="'UnitPrice'" [dataType]="'number'" [formatter]="formatCurrency"></igx-column>
    <igx-column [field]="'UnitsInStock'" [dataType]="'number'"></igx-column>
    <igx-column [field]="'Discontinued'" [dataType]="'boolean'">
      <ng-template igxCell let-cell="cell" let-val>
        @if (val) {
          <img src="assets/images/grid/active.png" title="Continued" alt="Continued" />
        }
        @if (!val) {
          <img src="assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
        }
      </ng-template>
    </igx-column>
    <igx-column [field]="'OrderDate'" [dataType]="'date'"></igx-column>
    <igx-grid-footer>
      <div class="custom-summaries">
        @for (summary of selectionSummaries; track summary) {
          <div class="summaries-data-wrapper">
            <span class="igx-grid-summary__label">{{ summary.label }}</span>
            <span class="igx-grid-summary__result">{{ format(summary.summaryResult) }}</span>
          </div>
        }
      </div>
    </igx-grid-footer>
  </igx-grid>
</div>
```
```scss
.cellAlignSyle {
    text-align: right;
    float:right;
}
.cellAlignSyle > span {
    float:right;
}
.up {
    color: green;
}
.down {
    color: red;
}
.headerAlignSyle {
    text-align: right !important;
}

.sample-container {
    width: 20%;
    display: flex;

    margin: 0% 0% 20px 10px
}

.grid-controls {
    display: flex;
    justify-content: space-between;
    margin: 0 16px 24px;
    flex-flow: column;
    align-items: flex-start;
}

.grid__wrapper {
    margin: 0 16px;
    padding-top: 16px;;
}

.currency-badge-container {
    width: 80px;
    float: right;
}

.badge-left {
    float: left;
}

div.igx-grid__tfoot {
    z-index: 1;
}

.custom-summaries {
    margin-left: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

.summaries-data-wrapper { display: inline-block; padding-right: 24px; }
.summaries-data-wrapper span:first-child { margin-right: 16px }
```


## API References

- [IgxGridComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)
- [IgxGridCell API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html)
- [IgxGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)

## Additional Resources

<div class="divider--half"></div>

- [Grid overview](grid.md)
- [Selection Service](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridselectionservice.html)
- [Row Selection](row-selection.md)
- [Cell Selection](cell-selection.md)
- [IgxNumberSummaryOperand](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxnumbersummaryoperand.html)
- [IgxDateSummaryOperand](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatesummaryoperand.html)
- [Summaries](summaries.md)
- [Paging](paging.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
