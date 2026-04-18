---
_tocName: Virtualization and performance
_premium: true
---
---title: Angular Grid Virtualization and Performance - Ignite UI for Angular_description: The Ignite UI for Angular Virtualization directive is the core mechanic behind the speed & performance of the grid when handling large data sets. Try for free!_keywords: angular data grid, grid performance, data table virtualization, ignite ui for angular_license: commercial_canonicalLink: grid/virtualization---# Angular Hierarchical Grid Virtualization and PerformanceIn Ignite UI for Angular, the [IgxHierarchicalGrid](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html) control now utilizes the [`igxForOf`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxforofdirective.html) directive and virtualizes its content both vertically and horizontally.## Angular Hierarchical Grid Virtualization and Performance Example```typescript
import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { IGX_HIERARCHICAL_GRID_DIRECTIVES, IGridCreatedEventArgs, IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { EntityType, FilteringExpressionsTree, FilteringLogic, IgxNumberFilteringOperand, IgxStringFilteringOperand } from 'igniteui-angular/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { HttpClient } from '@angular/common/http';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

@Component({
    selector: 'app-hierarchical-grid-lod',
    styleUrls: ['./hierarchical-grid-lod.component.scss'],
    templateUrl: './hierarchical-grid-lod.component.html',
    imports: [IGX_HIERARCHICAL_GRID_DIRECTIVES, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxRowIslandComponent]
})
export class HierarchicalGridLoDSampleComponent implements OnInit, AfterViewInit {
    private http = inject(HttpClient);

    @ViewChild('hGrid', { static: true })
    public hGrid: IgxHierarchicalGridComponent;

    public remoteData = [];
    public schema: EntityType[] = [
        {
            name: 'Customers',
            fields: [
                { field: 'customerId', dataType: 'string' },
                { field: 'companyName', dataType: 'string' },
                { field: 'contactName', dataType: 'string' },
                { field: 'contactTitle', dataType: 'string' }
            ],
            childEntities: [
                {
                    name: 'Orders',
                    fields: [
                        { field: 'customerId', dataType: 'string' }, // first field will be treated as foreign key
                        { field: 'orderId', dataType: 'number' },
                        { field: 'employeeId', dataType: 'number' },
                        { field: 'shipVia', dataType: 'string' },
                        { field: 'freight', dataType: 'number' }
                    ],
                    childEntities: [
                        {
                            name: 'Details',
                            fields: [
                                { field: 'orderId', dataType: 'number' }, // first field will be treated as foreign key
                                { field: 'productId', dataType: 'number' },
                                { field: 'unitPrice', dataType: 'number' },
                                { field: 'quantity', dataType: 'number' },
                                { field: 'discount', dataType: 'number' }
                            ]
                        }
                    ]
                }
            ]
        }
    ];

    public ngOnInit() {
        const ordersTree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Orders', ['customerId']);
        ordersTree.filteringOperands.push({
            fieldName: 'freight',
            ignoreCase: false,
            condition: IgxNumberFilteringOperand.instance().condition('greaterThanOrEqualTo'),
            conditionName: IgxNumberFilteringOperand.instance().condition('greaterThanOrEqualTo').name,
            searchVal: 500
        });

        const customersTree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Customers', ['customerId', 'companyName', 'contactName', 'contactTitle']);
        customersTree.filteringOperands.push({
            fieldName: 'customerId',
            condition: IgxStringFilteringOperand.instance().condition('inQuery'),
            conditionName: IgxStringFilteringOperand.instance().condition('inQuery').name,
            ignoreCase: false,
            searchTree: ordersTree
        });
        this.hGrid.advancedFilteringExpressionsTree = customersTree;
    }

    public ngAfterViewInit() {
        this.refreshRootGridData();
    }

    public refreshRootGridData() {
        const tree = this.hGrid.advancedFilteringExpressionsTree;
        this.hGrid.isLoading = true;
        if (tree) {
            this.http.post(`${API_ENDPOINT}/QueryBuilder/ExecuteQuery`, tree).subscribe(data =>{
                this.remoteData = Object.values(data)[0];
                this.hGrid.isLoading = false;
                this.hGrid.cdr.detectChanges();
            });
        } else {
            this.http.get(`${API_ENDPOINT}/Customers`).subscribe(data => {
                this.remoteData = Object.values(data);
                this.hGrid.isLoading = false;
                this.hGrid.cdr.detectChanges();
            });
        }
    }

    public gridCreated(event: IGridCreatedEventArgs) {
        event.grid.isLoading = true;
        const url = this.buildUrl(event);
        this.http.get(url).subscribe(data => {
            event.grid.data = Object.values(data);
            event.grid.isLoading = false;
            this.hGrid.cdr.detectChanges();
        });
    }

    private buildUrl(event: IGridCreatedEventArgs) {
        const parentKey = (event.grid.parent as any).key ?? this.schema[0].name;
        const url = `${API_ENDPOINT}/${parentKey}/${event.parentID}/${event.owner.key}`;
        return url;
    }
}
```
```html
<div class="grid__wrapper">
    <igx-hierarchical-grid #hGrid
                           [data]="remoteData"
                           [isLoading]="true"
                           [primaryKey]="'customerId'"
                           [autoGenerate]="false"
                           [height]="'580px'"
                           [width]="'100%'"
                           [igxPreventDocumentScroll]="true"
                           [allowAdvancedFiltering]="true"
                           [schema]="schema"
                           (advancedFilteringExpressionsTreeChange)="refreshRootGridData()">
            <igx-grid-toolbar></igx-grid-toolbar>

            <igx-column field="customerId" [dataType]="'string'"></igx-column>
            <igx-column field="companyName" [dataType]="'string'"></igx-column>
            <igx-column field="contactName" [dataType]="'string'"></igx-column>
            <igx-column field="contactTitle" [dataType]="'string'"></igx-column>

        <igx-row-island #rowIsland1 [key]="'Orders'" [primaryKey]="'orderId'" [autoGenerate]="false" (gridCreated)="gridCreated($event)">
            <igx-column field="orderId"></igx-column>
            <igx-column field="customerId"></igx-column>
            <igx-column field="shipVia"></igx-column>
            <igx-column field="freight"></igx-column>

            <igx-row-island #rowIsland2 [key]="'Details'" [primaryKey]="'orderId'" [autoGenerate]="false" (gridCreated)="gridCreated($event)">
                <igx-column field="orderId"></igx-column>
                <igx-column field="productId"></igx-column>
                <igx-column field="unitPrice"></igx-column>
                <igx-column field="quantity"></igx-column>
                <igx-column field="discount"></igx-column>
            </igx-row-island>
        </igx-row-island>
    </igx-hierarchical-grid>
</div>
```
```scss
.grid__wrapper{
    padding: 16px;
}
```<div class="divider--half"></div>## Enabling VirtualizationBy utilizing the [`igxForOf`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxforofdirective.html) directive the IgxHierarchicalGrid now optimizes DOM rendering and memory consumption by rendering only what is currently visible in the view port and swapping the displayed data while the user scrolls the data horizontally/vertically. [IgxHierarchicalGrid](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html)'s [`width`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#width) and [`height`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#height) defaults to `100%` which will enable virtualization if the content displayed cannot fit inside the available space and scrollbars are required either vertically or horizontally. However, it is also possible to explicitly set the Hierarchical Grid's [`width`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#width) and/or [`height`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#height) to `null` which means that the related dimension will be determined by the total size of the items inside. No scrollbar will then be shown and all items will be rendered along the respective dimension (columns if [`width`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#width) is `null` and rows if [`height`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#height) is `null`).The size of the data chunks is determined by:- The row height for the vertical (row) virtualization. This is determined by the [`rowHeight`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#rowheight) option and is 50(px) by default.- The individual column widths in pixels for the horizontal (column) virtualization. They can be determined by either setting explicit width for each column component or setting the Hierarchical Grid's [`columnWidth`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#columnWidth) option, which will be applied to all columns that don't have explicit width set.In most cases, letting the grid apply its default behavior by leaving dimensions unset will produce the desired layout. For column widths it is determined by the column count, the columns with set width, and the calculated width of the Hierarchical Grid's container. The grid will try to fit all columns inside the available space as long as the width it attempts to assign is not under 136(px). In such cases, columns with unassigned width will receive the minimum width of 136(px) and a horizontal scrollbar will be shown. The grid will be horizontally virtualized.Explicitly setting column widths in percentages (%) will, in most cases, create a grid that is not virtualized horizontally as it will not have a horizontal scrollbar.## Virtualization Limitations- On Mac OS horizontal scrollbar is not visible when "Show scrollbars only when scrolling" system option is set to true (which is the default value). This is because the Hierarchical Grid’s row container has an overflow set to hidden. Change the option to "Always" and the scrollbar will appear.## FAQ### Why having dimensions in the Hierarchical Grid is necessary for virtualization to work?Without information about the sizes of the container and the items before rendering them setting the width or height of a scrollbar or determining which of the items should be in the view when you scroll to a random location in the Hierarchical Grid is erroneous. Any assumptions on what the actual dimensions might be could lead to unnatural behavior of the scrollbar and ultimately suboptimal experience for the end-user. This is why setting the related dimensions is enforced in order for virtualization to take effect.<div class="divider--half"></div>## API References- [IgxHierarchicalGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html)- [IgxHierarchicalGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)- [IgxColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)- [IgxForOfDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxforofdirective.html)- [IForOfState](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/iforofstate.html)## Additional Resources<div class="divider--half"></div>- [Hierarchical Grid overview](hierarchical-grid.md)- [Paging](paging.md)- [Filtering](filtering.md)- [Sorting](sorting.md)- [Summaries](summaries.md)- [Column Moving](column-moving.md)- [Column Pinning](column-pinning.md)- [Column Resizing](column-resizing.md)- [Selection](selection.md)<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
