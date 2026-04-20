---
title: Angular Grid Cell Merging - Ignite UI for Angular
_description: Position and size columns in a more powerful way, using the multi-row layout functionality in the Ignite UI for Angular Data Grid. Check out examples and demos!
_keywords: angular cell merging, cell merging, ignite ui for angular
_license: commercial
_tocName: Cell Merging
_premium: true
---
# Angular Cell Merging
The Ignite UI for Angular Tree Grid provides a Cell Merging feature that combines two or more adjacent cells with the same value into a single, larger cell. Merging is applied vertically within a column and helps improve readability by reducing duplicate values. The feature can be configured to merge cells either by default matching data values or by applying a custom condition.
## Angular Cell Merging Example
```typescript
import { ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { GridCellMergeMode, IgxColumnComponent, IgxGridToolbarComponent } from 'igniteui-angular/grids/core';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { ByLevelTreeGridMergeStrategy, DefaultTreeGridMergeStrategy, SortingDirection } from 'igniteui-angular/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-tree-grid-cell-merge-sample',
    styleUrls: ['./tree-grid-cell-merge-sample.component.scss'],
    templateUrl: './tree-grid-cell-merge-sample.component.html',
    imports: [
        IgxTreeGridComponent,
        IgxPreventDocumentScrollDirective,
        IgxColumnComponent,
        IgxSelectComponent,
        IgxSelectItemComponent,
        IgxLabelDirective,
        IgxGridToolbarComponent,
        FormsModule
    ]
})

export class TreeGridCellMergeComponent {
    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    public childDataKey = 'Categories';
    public data = generateEmployeeDetailedFlatData();
    public cellMergeMode: GridCellMergeMode = 'always';
    public sortExpr = [
        {
            dir: SortingDirection.Asc, fieldName: 'Country'
        }
    ];
    public mergeTypes = [{ name: 'Always', value: GridCellMergeMode.always }, { name: 'On sort', value: GridCellMergeMode.onSort }];

    public mergeStrategies =  [{ name: 'Default Strategy', value: new DefaultTreeGridMergeStrategy() }, { name: 'By Level Strategy', value: new ByLevelTreeGridMergeStrategy() }];
    public mergeStrategy = this.mergeStrategies[0].value;
    public strategySelection(e) {
        this.mergeStrategy = e.newSelection.value;
    }
}
```
```html
<div class="grid__wrapper">
    <igx-tree-grid #treeGrid [igxPreventDocumentScroll]="true" [data]="data" width="100%" height="720px"
        [sortingExpressions]="sortExpr" [autoGenerate]="false" primaryKey="ID" foreignKey="ParentID"
        [cellMergeMode]="cellMergeMode" [mergeStrategy]="mergeStrategy">
        <igx-grid-toolbar>
            <igx-select [(ngModel)]="cellMergeMode">
                <label igxLabel>Select Merge Mode</label>
                @for (type of mergeTypes; track type) {
                <igx-select-item [value]="type.value">
                    {{type.name}}
                </igx-select-item>
                }
            </igx-select>

            <igx-select (selectionChanging)="strategySelection($event)">
                <label igxLabel>Select Merge Strategy</label>
                @for (type of mergeStrategies; track type) {
                <igx-select-item [value]="type.value" [selected]="type.value === treeGrid.mergeStrategy">
                    {{type.name}}
                </igx-select-item>
                }
            </igx-select>
        </igx-grid-toolbar>
        <igx-column [field]="'Name'" dataType="string" width="250px" [editable]="true"></igx-column>
        <igx-column [field]="'Title'" dataType="string" width="250px" [merge]="true" [editable]="true" [sortable]="true"></igx-column>
        <igx-column [field]="'HireDate'" dataType="date" width="200px"></igx-column>
        <igx-column [field]="'Country'" dataType="string" width="200px" [merge]="true" [editable]="true" [sortable]="true"></igx-column>
        <igx-column [field]="'City'" dataType="string" width="200px" [merge]="true" [editable]="true" [sortable]="true"></igx-column>
        <igx-column [field]="'Age'" dataType="number" width="200px" [editable]="true"></igx-column>
        <igx-column [field]="'Address'" dataType="string" width="200px" [editable]="true"></igx-column>
        <igx-column [field]="'Fax'" dataType="string" width="200px"></igx-column>
        <igx-column [field]="'PostalCode'" dataType="string" width="200px"></igx-column>
        <igx-column [field]="'Phone'" dataType="string" width="200px"></igx-column>

    </igx-tree-grid>
</div>
```
```scss
.grid__wrapper {

    position: relative;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 15px;
    display: flex;
    flex-direction: column;
}
```
## Enabling and Using Cell Merging
Cell merging in the grid is controlled at two levels:
- Grid-level merge mode – determines when merging is applied.
- Column-level merge toggle – determines which columns can merge cells.
### Grid Merge Mode
The grid exposes a `cellMergeMode` property that accepts values from the `GridCellMergeMode` enum:
- `always` - Merges any adjacent cells that meet the merging condition, regardless of sort state.
- `onSort` - Merges adjacent cells only when the column is sorted **(default value)**.
```html
<igx-tree-grid [data]="data" [cellMergeMode]="cellMergeMode">
    ...
</igx-tree-grid>
```
```ts
protected cellMergeMode: GridCellMergeMode = 'always';
```
### Column Merge Toggle
At the column level, merging can be enabled or disabled with the `merge` property.
```html
<igx-column field="OrderID" [merge]="true"></igx-column>
<igx-column field="ShipperName" [merge]="false"></igx-column>
```
In the above example:
- The **OrderID** column will merge adjacent duplicate values.
- The **ShipperName** column will render normally without merging.
### Combined Example
```html
<igx-tree-grid [data]="data" [cellMergeMode]="cellMergeMode" [autoGenerate]="false">
    <igx-column field="OrderID" header="Order ID" [merge]="true"></igx-column>
    <igx-column field="ShipperName" header="Shipper Name" [merge]="true"></igx-column>
    <igx-column field="Salesperson" header="Salesperson"></igx-column>
</igx-tree-grid>
```
```ts
protected cellMergeMode: GridCellMergeMode = 'onSort';
```
Here, the grid is set to merge only when columns are sorted, and both Category and Product columns are configured for merging.
## Custom Merge Conditions
In addition to the built-in `always` and `onSort` modes, the grid allows you to define a custom condition for merging cells through the `mergeStrategy` property. This strategy controls both how cells are compared and how merged ranges are calculated.
### Merge Strategy Interface
A custom merge strategy must implement the `IGridMergeStrategy` interface:
```ts
export interface IGridMergeStrategy {
    merge: (
        data: any[],
        field: string,
        comparer: (prevRecord: any, currentRecord: any, field: string) => boolean,
        result: any[],
        activeRowIndex?: number,
        grid?: GridType
    ) => any[];

    comparer: (prevRecord: any, record: any, field: string) => boolean;    
}
```
- `merge` - defines how merged cells are produced.
- `comparer` - defines the condition to decide if two adjacent records should be merged.
@@if(igxName === 'IgxGrid' || igxName === 'IgxHierarchicalGrid'){
### Extending the Default Strategy
If you only want to customize part of the behavior (for example, the comparer logic), you can extend the built-in `DefaultMergeStrategy` and override the relevant methods.
```ts
export class MyCustomStrategy extends DefaultMergeStrategy {
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
}
The `IgxTreeGrid` provides two built-in strategies that implement the `IGridMergeStrategy` interface: `DefaultTreeGridMergeStrategy` and `ByLevelTreeGridMergeStrategy`. `DefaultTreeGridMergeStrategy` merges all cells with the same value, regardless of their hierarchical level. In contrast, `ByLevelTreeGridMergeStrategy` only merges cells if they have the same value and are located at the same level, making level a required condition for merging.
<!-- markdownlint-disable-next-line MD024 -->
### Extending the Default Strategy
If you only want to customize part of the behavior (for example, the comparer logic), you can extend one of the built-in strategies, either `DefaultTreeGridMergeStrategy` or `ByLevelTreeGridMergeStrategy`, and override the relevant methods.
```ts
export class MyCustomStrategy extends DefaultTreeGridMergeStrategy {
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
### Applying a Custom Strategy
Once defined, assign the strategy to the grid through the `mergeStrategy` property:
```html
<igx-tree-grid [data]="data" [mergeStrategy]="customStrategy">
  <igx-column field="ActionID" [merge]="true"></igx-column>
  <igx-column field="ProjectName" [merge]="true"></igx-column>
</igx-tree-grid>
```
```ts
protected customStrategy = new MyCustomStrategy();
```
### Demo
```typescript
import { Component, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { GridCellMergeMode, IgxColumnComponent, IgxGridToolbarComponent } from 'igniteui-angular/grids/core';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { DefaultMergeStrategy, SortingDirection } from 'igniteui-angular/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';
import { generateEmployeeDetailedFlatData2 } from '../data/employees-flat-detailed2';

@Component({
    selector: 'app-tree-grid-cell-merge-custom-sample',
    styleUrls: ['./tree-grid-cell-merge-custom-sample.component.scss'],
    templateUrl: './tree-grid-cell-merge-custom-sample.component.html',
    imports: [
        IgxTreeGridComponent,
        IgxPreventDocumentScrollDirective,
        IgxColumnComponent,
        FormsModule
    ]
})

export class TreeGridCellMergeCustomComponent {
    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    public childDataKey = 'Categories';
    public data = generateEmployeeDetailedFlatData2();
    public cellMergeMode: GridCellMergeMode = 'always';
    public sortExpr = [
        {
            dir: SortingDirection.Asc, fieldName: 'Country'
        }
    ];
    //public mergeTypes = [{ name: 'Always', value: GridCellMergeMode.always }, { name: 'On sort', value: GridCellMergeMode.onSort }];

    //public mergeStrategies =  [{ name: 'Default Strategy', value: new DefaultTreeGridMergeStrategy() }, { name: 'By Level Strategy', value: new ByLevelTreeGridMergeStrategy() }];
    public mergeStrategy = new CustomTreeGridMergeStrategy();
    /* public strategySelection(e) {
        this.mergeStrategy = e.newSelection.value;
    } */
}

export class CustomTreeGridMergeStrategy extends DefaultMergeStrategy {
    /* Merge only cells within their respective countries and levels */
    public override comparer(prevRecord: any, record: any, field: string, isDate = false, isTime = false): boolean {
        const a = this.getFieldValue(prevRecord.data, field, isDate, isTime);
        const b = this.getFieldValue(record.data, field, isDate, isTime);

        const levelA = prevRecord.level;
        const levelB = record.level;

        const countryA = prevRecord.data['Country'];
        const countryB = record.data['Country'];

        const an = (a === null || a === undefined);
        const bn = (b === null || b === undefined);

        if (an) {
            return bn; // both null/undefined → merge, else → no merge
        } else if (bn) {
            return false;
        }

        // Merge only if values match, level matches, and country matches
        return a === b && levelA === levelB && countryA === countryB;
    }
}
```
```html
<div class="grid__wrapper">
    <igx-tree-grid #treeGrid [igxPreventDocumentScroll]="true" [data]="data" width="100%" height="720px"
        [sortingExpressions]="sortExpr" [autoGenerate]="false" primaryKey="ID" foreignKey="ParentID"
        [cellMergeMode]="cellMergeMode" [mergeStrategy]="mergeStrategy">
        <igx-column [field]="'Name'" dataType="string" width="250px" [editable]="true"></igx-column>
        <igx-column [field]="'Title'" dataType="string" width="250px" [merge]="true" [editable]="true" [sortable]="true"></igx-column>
        <igx-column [field]="'HireDate'" dataType="date" width="200px"></igx-column>
        <igx-column [field]="'Country'" dataType="string" width="200px" [merge]="true" [editable]="true" [sortable]="true"></igx-column>
        <igx-column [field]="'City'" dataType="string" width="200px" [merge]="true" [editable]="true" [sortable]="true"></igx-column>
        <igx-column [field]="'Age'" dataType="number" width="200px" [editable]="true"></igx-column>
        <igx-column [field]="'Address'" dataType="string" width="200px" [editable]="true"></igx-column>
        <igx-column [field]="'Fax'" dataType="string" width="200px"></igx-column>
        <igx-column [field]="'PostalCode'" dataType="string" width="200px"></igx-column>
        <igx-column [field]="'Phone'" dataType="string" width="200px"></igx-column>

    </igx-tree-grid>
</div>
```
```scss
.grid__wrapper {

    position: relative;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 15px;
    display: flex;
    flex-direction: column;
}
```
## Feature Integration
Due to the specific behavior of merged cells it has to be noted how exactly it ties together with some of the other features of the grid:
- **Excel export**: merged cells remain merged when exported to Excel.
- **Column pinning**: cells remain merged when a column is pinned and are displayed in the pinned area.
- **Row pinning**: cells merge only withing their containing area, i.e. cells of pinned rows merge only with cells of other pinned rows, while cells of unpinned rows merge only with cells of unpinned rows.
- **Navigation/Activation**: when a cell is active, all merged cells in the same row become single cells, i.e. their merge sequence is broken. This also includes activation via keyboard navigation.
>[!NOTE]
> If a merged cell is clicked, the closest cell from the merge sequence will become active.
- **Updating/Editing**: since activation breaks the merge sequence, only a single cell will be in edit mode.
- **Row selection**: if selected rows intersect merged cells, all related merged cells should be marked as part of the selection.
## API References
- [IgxTreeGridComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html)
- [IgxTreeGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
## Additional Resources
<div class="divider--half"></div>
- [Tree Grid overview](tree-grid.md)
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
