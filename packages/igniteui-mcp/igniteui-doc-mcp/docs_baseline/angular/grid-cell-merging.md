---
_tocName: Cell Merging
_premium: true
---
---title: Angular Grid Cell Merging - Ignite UI for Angular_description: Position and size columns in a more powerful way, using the multi-row layout functionality in the Ignite UI for Angular Data Grid. Check out examples and demos!_keywords: angular cell merging, cell merging, ignite ui for angular_license: commercial---# Angular Cell MergingThe Ignite UI for Angular Grid provides a Cell Merging feature that combines two or more adjacent cells with the same value into a single, larger cell. Merging is applied vertically within a column and helps improve readability by reducing duplicate values. The feature can be configured to merge cells either by default matching data values or by applying a custom condition.## Angular Cell Merging Example```typescript
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { GridCellMergeMode, GridSelectionMode, IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { INVOICE_DATA } from '../../data/invoiceData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';


@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-grid-groupby-sample',
    styleUrls: ['./grid-cell-merge-sample.component.scss'],
    templateUrl: './grid-cell-merge-sample.component.html',
    imports: [
        IgxGridComponent,
        IgxPreventDocumentScrollDirective,
        IgxColumnComponent,
        IgxCellTemplateDirective,
        IgxSelectComponent,
        IgxSelectItemComponent,
        IgxLabelDirective,
        IgxGridToolbarComponent,
        FormsModule
        ]
})
export class GridCellMergeSampleComponent {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public data;
    public selectionMode: GridSelectionMode = 'single';
    public cellMergeMode: GridCellMergeMode = 'always';
    public mergeTypes = [{ name: 'Merge always', value: GridCellMergeMode.always }, { name: 'Merge on sort', value: GridCellMergeMode.onSort }];
    constructor() {
        this.data = INVOICE_DATA;
    }
    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }
    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }
}
```
```html
<div class="grid__wrapper">
  <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" [width]="'100%'" [height]="'570px'" [rowSelection]="selectionMode"  [cellMergeMode]="cellMergeMode">
    <igx-column field="OrderID" header="Order ID" [hidden]="true" >
    </igx-column>
    <igx-column field="ShipperName" header="Shipper Name" width="250px" [merge]="true" [editable]="true" sortable="true">
    </igx-column>
    <igx-column field="Salesperson" header="Salesperson" width="250px" [merge]="true" [editable]="true" sortable="true">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" width="200px" [merge]="true" [editable]="true" sortable="true">
      <ng-template igxCell let-cell="cell" let-val>
        @if (val) {
          <img src="assets/images/grid/active.png" title="Continued" alt="Continued" />
        }
        @if (!val) {
          <img src="assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
        }
      </ng-template>
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" width="150px" [formatter]="formatCurrency" dataType="number">
    </igx-column>
    <igx-column field="Quantity" header="Quantity" width="150px" dataType="number" [editable]="true">
    </igx-column>
    <igx-column field="ShipCountry" header="Ship Country" width="200px" [merge]="true" [editable]="true">
    </igx-column>
    <igx-column field="ShipCity" header="Ship City" width="250px" [merge]="true" [editable]="true">
    </igx-column>
    <igx-column field="ShipName" header="Ship Name" width="250px">
    </igx-column>
    <igx-column field="PostalCode" header="Postal Code" width="200px">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" width="200px" [formatter]="formatDate">
    </igx-column>
    <igx-grid-toolbar>
        <igx-select [(ngModel)]="cellMergeMode">
          <label igxLabel>Select Merge Type</label>
          @for (type of mergeTypes; track type) {
            <igx-select-item [value]="type.value">
              {{type.name}}
            </igx-select-item>
          }
        </igx-select>
      </igx-grid-toolbar>
  </igx-grid>
</div>
```
```scss
.grid-controls {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    margin: 0 16px 24px;

    igx-switch {
        margin-top: 24px;
    }

}

.grid__wrapper {
    padding-top: 16px;
    margin: 0 16px;
}

.header-icon {
    font-size: 1.4em;
    width: 1.1em;
    height: 1.1em;
    float: right;
    cursor: pointer;
}

.header {
    height: 100%;
}

.igx-grid__th .title {
    width: 100%;
    cursor: auto;
}
```## Enabling and Using Cell MergingCell merging in the grid is controlled at two levels:- Grid-level merge mode – determines when merging is applied.- Column-level merge toggle – determines which columns can merge cells.### Grid Merge ModeThe grid exposes a `cellMergeMode` property that accepts values from the `GridCellMergeMode` enum:- `always` - Merges any adjacent cells that meet the merging condition, regardless of sort state.- `onSort` - Merges adjacent cells only when the column is sorted **(default value)**.```html<igx-grid [data]="data" [cellMergeMode]="cellMergeMode">
    ...</igx-grid>``````tsprotected cellMergeMode: GridCellMergeMode = 'always';```### Column Merge ToggleAt the column level, merging can be enabled or disabled with the `merge` property.```html<igx-column field="OrderID" [merge]="true"></igx-column><igx-column field="ShipperName" [merge]="false"></igx-column>```In the above example:- The **OrderID** column will merge adjacent duplicate values.- The **ShipperName** column will render normally without merging.### Combined Example```html<igx-grid [data]="data" [cellMergeMode]="cellMergeMode" [autoGenerate]="false">
    <igx-column field="OrderID" header="Order ID" [merge]="true"></igx-column>
    <igx-column field="ShipperName" header="Shipper Name" [merge]="true"></igx-column>
    <igx-column field="Salesperson" header="Salesperson"></igx-column></igx-grid>``````tsprotected cellMergeMode: GridCellMergeMode = 'onSort';```Here, the grid is set to merge only when columns are sorted, and both Category and Product columns are configured for merging.## Custom Merge ConditionsIn addition to the built-in `always` and `onSort` modes, the grid allows you to define a custom condition for merging cells through the `mergeStrategy` property. This strategy controls both how cells are compared and how merged ranges are calculated.### Merge Strategy InterfaceA custom merge strategy must implement the `IGridMergeStrategy` interface:```tsexport interface IGridMergeStrategy {
    merge: (
        data: any[],
        field: string,
        comparer: (prevRecord: any, currentRecord: any, field: string) => boolean,
        result: any[],
        activeRowIndex?: number,
        grid?: GridType
    ) => any[];

    comparer: (prevRecord: any, record: any, field: string) => boolean;    }```- `merge` - defines how merged cells are produced.- `comparer` - defines the condition to decide if two adjacent records should be merged.@@if(igxName === 'IgxGrid' || igxName === 'IgxHierarchicalGrid'){### Extending the Default StrategyIf you only want to customize part of the behavior (for example, the comparer logic), you can extend the built-in `DefaultMergeStrategy` and override the relevant methods.```tsexport class MyCustomStrategy extends DefaultMergeStrategy {
    /* Merge only cells within their respective projects */
    public override comparer(prevRecord: any, record: any, field: string): boolean {
        const a = prevRecord[field];
        const b = record[field];
        const projA = prevRecord['ProjectName'];
        const projB = record['ProjectName'];
        return a === b && projA === projB;
    }}```}### Applying a Custom StrategyOnce defined, assign the strategy to the grid through the `mergeStrategy` property:```html<igx-grid [data]="data" [mergeStrategy]="customStrategy">
  <igx-column field="ActionID" [merge]="true"></igx-column>
  <igx-column field="ProjectName" [merge]="true"></igx-column></igx-grid>``````tsprotected customStrategy = new MyCustomStrategy();```### Demo```typescript
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { GridCellMergeMode, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { DefaultMergeStrategy } from 'igniteui-angular/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-grid-cell-merge-custom-sample',
    styleUrls: ['./grid-cell-merge-custom-sample.component.scss'],
    templateUrl: './grid-cell-merge-custom-sample.component.html',
    imports: [
        IgxGridComponent,
        IgxPreventDocumentScrollDirective,
        IgxColumnComponent
    ]
})
export class GridCellMergeCustomSampleComponent {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public data;
    public cellMergeMode: GridCellMergeMode = 'always';
    public perProjectMergeStrategy = new PerProjectMergeStrategy();
    constructor() {
        this.data = [
            { ActionID: "1", ProjectName: "IOT Switch Project", ActionName: "Data Import", Type: "Request", Priority: "Low", Status: "New", Created: new Date("2017-03-25"), LastEdit: new Date("2017-05-08") },
            { ActionID: "2", ProjectName: "IOT Switch Project", ActionName: "Reports", Type: "Request", Priority: "Low", Status: "New", Created: new Date("2017-03-14"), LastEdit: new Date("2017-03-15") },
            { ActionID: "4", ProjectName: "IOT Switch Project", ActionName: "Multiple Settings", Type: "Request", Priority: "Low", Status: "Rejected", Created: new Date("2017-04-05"), LastEdit: new Date("2017-04-30") },
            { ActionID: "3", ProjectName: "IOT Switch Project", ActionName: "Data Archiving", Type: "Request", Priority: "Medium", Status: "New", Created: new Date("2017-08-21"), LastEdit: new Date("2017-09-08") },
            { ActionID: "5", ProjectName: "IOT Switch Project", ActionName: "Main Menu: Return Button", Type: "Bug", Priority: "Medium", Status: "Fixed", Created: new Date("2017-06-17"), LastEdit: new Date("2017-07-03") },
            { ActionID: "6", ProjectName: "IOT Switch Project", ActionName: "Auto Turn Off", Type: "Bug", Priority: "Medium", Status: "New", Created: new Date("2017-04-12"), LastEdit: new Date("2017-05-27") },
            { ActionID: "7", ProjectName: "VR Device", ActionName: "Higher DRI", Type: "Request", Priority: "Medium", Status: "New", Created: new Date("2016-08-11"), LastEdit: new Date("2016-08-11") },
            { ActionID: "8", ProjectName: "VR Device", ActionName: "Accessible Power Button", Type: "Request", Priority: "Medium", Status: "New", Created: new Date("2016-07-13"), LastEdit: new Date("2016-07-14") },
            { ActionID: "9", ProjectName: "VR Device", ActionName: "Additional options", Type: "Request", Priority: "High", Status: "Rejected", Created: new Date("2016-09-02"), LastEdit: new Date("2016-09-08") },
            { ActionID: "10", ProjectName: "VR Device", ActionName: "Data Log", Type: "Request", Priority: "High", Status: "New", Created: new Date("2017-03-25"), LastEdit: new Date("2017-05-08") },
            { ActionID: "12", ProjectName: "VR Device", ActionName: "Motion Blur", Type: "Bug", Priority: "High", Status: "New", Created: new Date("2017-03-25"), LastEdit: new Date("2017-05-08") },
            { ActionID: "11", ProjectName: "VR Device", ActionName: "Left Sensors Delay", Type: "Bug", Priority: "High", Status: "Fixed", Created: new Date("2017-03-25"), LastEdit: new Date("2017-05-08") }
        ];
    }
}

export class PerProjectMergeStrategy extends DefaultMergeStrategy {
    /* Merge only cells within their respective projects */
    public override comparer(prevRecord: any, record: any, field: string): boolean {
        const a = prevRecord[field];
        const b = record[field];
        const projA = prevRecord['ProjectName'];
        const projB = record['ProjectName'];
        return a === b && projA === projB;
    }
}
```
```html
<div class="grid__wrapper">
  <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" [width]="'100%'" [height]="'570px'" [mergeStrategy]="perProjectMergeStrategy" [cellMergeMode]="cellMergeMode" >
    <igx-column field="ActionID" header="Order ID" [hidden]="true">
    </igx-column>
    <igx-column field="ProjectName" header="Project Name" [merge]="true" [editable]="true">
    </igx-column>
    <igx-column field="Type" header="Type" [merge]="true" [editable]="true">
    </igx-column>
    <igx-column field="Priority" header="Priority" [merge]="true" [editable]="true">
    </igx-column>
    <igx-column field="Status" header="Status" [merge]="true" [editable]="true">
    </igx-column>
    <igx-column field="ActionName" header="Action">
    </igx-column>
    <igx-column field="Created" header="Created" [dataType]="'date'">
    </igx-column>
  </igx-grid>
</div>
```
```scss
.grid-controls {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    margin: 0 16px 24px;

    igx-switch {
        margin-top: 24px;
    }

}

.grid__wrapper {
    padding-top: 16px;
    margin: 0 16px;
}

.header-icon {
    font-size: 1.4em;
    width: 1.1em;
    height: 1.1em;
    float: right;
    cursor: pointer;
}

.header {
    height: 100%;
}

.igx-grid__th .title {
    width: 100%;
    cursor: auto;
}
```## Feature IntegrationDue to the specific behavior of merged cells it has to be noted how exactly it ties together with some of the other features of the grid:- **Expand/Collapse**: if a feature (such as master-detail, grouping, etc.) generates a non-data row, then the cell merging is interrupted and the group will be split.- **Excel export**: merged cells remain merged when exported to Excel.- **Column pinning**: cells remain merged when a column is pinned and are displayed in the pinned area.- **Row pinning**: cells merge only withing their containing area, i.e. cells of pinned rows merge only with cells of other pinned rows, while cells of unpinned rows merge only with cells of unpinned rows.- **Navigation/Activation**: when a cell is active, all merged cells in the same row become single cells, i.e. their merge sequence is broken. This also includes activation via keyboard navigation.>[!NOTE]> If a merged cell is clicked, the closest cell from the merge sequence will become active.- **Updating/Editing**: since activation breaks the merge sequence, only a single cell will be in edit mode.- **Row selection**: if selected rows intersect merged cells, all related merged cells should be marked as part of the selection.## Limitations|Known Limitations| Description|| --- | --- || Cell merging is not supported in combination with Multi-row Layout. | Both span complex layouts that don't make sense when combined. A warning will be thrown if such invalid configuration is detected. |## API References- [IgxGridComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)- [IgxGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)## Additional Resources<div class="divider--half"></div>- [Grid overview](grid.md)<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
