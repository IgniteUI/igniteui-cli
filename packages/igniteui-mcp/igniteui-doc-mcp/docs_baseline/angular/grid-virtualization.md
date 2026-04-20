---
title: Angular Grid Virtualization and Performance - Ignite UI for Angular
_description: The Ignite UI for Angular Virtualization directive is the core mechanic behind the speed & performance of the grid when handling large data sets. Try for free!
_keywords: angular data grid, grid performance, data table virtualization, ignite ui for angular
_license: commercial
_tocName: Virtualization and performance
_premium: true
---
# Angular Grid Virtualization and Performance
In Ignite UI for Angular, the [IgxGrid](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html) control now utilizes the [`igxForOf`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxforofdirective.html) directive and virtualizes its content both vertically and horizontally.
## Angular Grid Virtualization and Performance Example
```typescript
import { Component, Injectable, ViewChild, OnInit, inject } from '@angular/core';

import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellHeaderTemplateDirective, IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { Observable } from 'rxjs';
import { FinancialDataService } from '../../services/financial.service';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { AsyncPipe } from '@angular/common';

@Component({
    providers: [FinancialDataService],
    selector: 'app-grid-sample',
    styleUrls: ['./grid-sample-2.component.scss'],
    templateUrl: 'grid-sample-2.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellHeaderTemplateDirective, IgxCellTemplateDirective, IgxBadgeComponent, AsyncPipe]
})

export class FinancialSampleComponent {
    private localService = inject(FinancialDataService);

    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
    public data: Observable<any[]>;
    constructor() {
        this.localService.getData(100000);
        this.data = this.localService.records;
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }
    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }
}
```
```html
<div class="grid__wrapper">
  <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data | async" [height]="'500px'" width="100%" [autoGenerate]='false' [allowFiltering]="true">
    <igx-column [field]="'Category'" [width]="'120px'"></igx-column>
    <igx-column [field]="'Type'" [width]="'150px'" [filterable]="false"></igx-column>
    <igx-column [field]="'Open Price'" [width]="'120px'" dataType="number" [formatter]="formatCurrency">
    </igx-column>
    <igx-column [field]="'Price'" [width]="'120px'" dataType="number" [formatter]="formatCurrency"></igx-column>
    <igx-column [field]="'Change'" [width]="'120px'" dataType="number" [headerClasses]="'headerAlignSyle'">
      <ng-template igxHeader>
        <span>Change</span>
      </ng-template>

      <ng-template igxCell let-val>
        <div class="currency-badge-container">
          @if (val>0) {
            <igx-badge type="success" position="bottom-right" icon="arrow_upward" class="badge-left"></igx-badge>
          }
          @if (val<0) {
            <igx-badge type="error" position="bottom-right" icon="arrow_downward" class="error badge-left"></igx-badge>
          }
          <span class="cellAlignSyle" [class.up]="val>0" [class.down]="val<0">{{ formatNumber(val) }}</span>
        </div>
      </ng-template>
    </igx-column>
    <igx-column [field]="'Change(%)'" [width]="'130px'" dataType="number" [formatter]="formatNumber">
      <ng-template igxHeader>
        <span>Change(%)</span>
      </ng-template>

      <ng-template igxCell let-val>
        <span class="cellAlignSyle" [class.up]="val>0" [class.down]="val<0">{{ formatNumber(val) }}%</span>
      </ng-template>
    </igx-column>
    <igx-column [field]="'Change On Year(%)'" [width]="'150px'" dataType="number" [formatter]="formatNumber">
      <ng-template igxCell let-val>
        <div class="currency-badge-container">
          @if (val>0) {
            <igx-badge type="success" position="bottom-right" icon="arrow_upward" class="badge-left"></igx-badge>
          }
          @if (val<0) {
            <igx-badge type="error" position="bottom-right" icon="arrow_downward" class="error badge-left"></igx-badge>
          }
          <span class="cellAlignSyle" [class.up]="val>0" [class.down]="val<0">{{ formatNumber(val) }}%</span>
        </div>
      </ng-template>
    </igx-column>
    <igx-column [field]="'Buy'" [width]="'130px'" dataType="number" [formatter]="formatCurrency"></igx-column>
    <igx-column [field]="'Sell'" [width]="'130px'" dataType="number" [formatter]="formatCurrency"></igx-column>
    <igx-column [field]="'Spread'" [width]="'130px'" dataType="number" [formatter]="formatNumber"></igx-column>
    <igx-column [field]="'Volume'" [width]="'130px'" dataType="number" [formatter]="formatNumber"></igx-column>
    <igx-column [field]="'High(D)'" [width]="'130px'" dataType="number" [formatter]="formatCurrency"></igx-column>
    <igx-column [field]="'Low(D)'" [width]="'130px'" dataType="number" [formatter]="formatCurrency"></igx-column>
    <igx-column [field]="'High(Y)'" [width]="'130px'" dataType="number" [formatter]="formatCurrency"></igx-column>
    <igx-column [field]="'Low(Y)'" [width]="'130px'" dataType="number" [formatter]="formatCurrency"></igx-column>
    <igx-column [field]="'Start(Y)'" [width]="'130px'" dataType="number" [formatter]="formatCurrency"></igx-column>
  </igx-grid>
  <br />
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

.grid__wrapper {
  margin: 0 auto;
  padding: 16px;
}

.currency-badge-container {
    width: 80px; 
    float: right;
}

.badge-left {
    float: left;
}
```
## Enabling Virtualization
By utilizing the [`igxForOf`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxforofdirective.html) directive the IgxGrid now optimizes DOM rendering and memory consumption by rendering only what is currently visible in the view port and swapping the displayed data while the user scrolls the data horizontally/vertically. [IgxGrid](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)'s [`width`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#width) and [`height`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#height) defaults to `100%` which will enable virtualization if the content displayed cannot fit inside the available space and scrollbars are required either vertically or horizontally. However, it is also possible to explicitly set the Grid's [`width`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#width) and/or [`height`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#height) to `null` which means that the related dimension will be determined by the total size of the items inside. No scrollbar will then be shown and all items will be rendered along the respective dimension (columns if [`width`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#width) is `null` and rows if [`height`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#height) is `null`).
The size of the data chunks is determined by:
- The row height for the vertical (row) virtualization. This is determined by the [`rowHeight`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowheight) option and is 50(px) by default.
- The individual column widths in pixels for the horizontal (column) virtualization. They can be determined by either setting explicit width for each column component or setting the Grid's [`columnWidth`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#columnWidth) option, which will be applied to all columns that don't have explicit width set.
In most cases, letting the grid apply its default behavior by leaving dimensions unset will produce the desired layout. For column widths it is determined by the column count, the columns with set width, and the calculated width of the Grid's container. The grid will try to fit all columns inside the available space as long as the width it attempts to assign is not under 136(px). In such cases, columns with unassigned width will receive the minimum width of 136(px) and a horizontal scrollbar will be shown. The grid will be horizontally virtualized.
Explicitly setting column widths in percentages (%) will, in most cases, create a grid that is not virtualized horizontally as it will not have a horizontal scrollbar.
## Remote Virtualization
The Grid supports remote virtualization, which is demonstrated in the [`Grid Remote Data Operations`](remote-data-operations.md) topic.
## Virtualization Limitations
- On Mac OS horizontal scrollbar is not visible when "Show scrollbars only when scrolling" system option is set to true (which is the default value). This is because the Grid’s row container has an overflow set to hidden. Change the option to "Always" and the scrollbar will appear.
## FAQ
### Why having dimensions in the Grid is necessary for virtualization to work?
Without information about the sizes of the container and the items before rendering them setting the width or height of a scrollbar or determining which of the items should be in the view when you scroll to a random location in the Grid is erroneous. Any assumptions on what the actual dimensions might be could lead to unnatural behavior of the scrollbar and ultimately suboptimal experience for the end-user. This is why setting the related dimensions is enforced in order for virtualization to take effect.
<div class="divider--half"></div>
## API References
- [IgxGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)
- [IgxGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
- [IgxColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)
- [IgxForOfDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxforofdirective.html)
- [IForOfState](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/iforofstate.html)
## Additional Resources
<div class="divider--half"></div>
- [Grid overview](grid.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
