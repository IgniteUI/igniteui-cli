---
title: Angular Grid Cell Merging - Ignite UI for Angular
_description: Position and size columns in a more powerful way, using the multi-row layout functionality in the Ignite UI for Angular Data Grid. Check out examples and demos!
_keywords: angular cell merging, cell merging, ignite ui for angular
_license: commercial
_tocName: Cell Merging
_premium: true
---
# Angular Cell Merging
The Ignite UI for Angular Hierarchical Grid provides a Cell Merging feature that combines two or more adjacent cells with the same value into a single, larger cell. Merging is applied vertically within a column and helps improve readability by reducing duplicate values. The feature can be configured to merge cells either by default matching data values or by applying a custom condition.
## Angular Cell Merging Example
```typescript
import { ChangeDetectorRef, Component, ContentChild, inject, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { GridCellMergeMode, IgxColumnComponent, IgxGridToolbarComponent } from 'igniteui-angular/grids/core';
import { SortingDirection } from 'igniteui-angular/core';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { HIERARCHICAL_DATA } from '../../data/hierarchical-data';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-hierarchical-grid-cell-merge',
    styleUrls: ['./hierarchical-grid-cell-merge.component.scss'],
    templateUrl: 'hierarchical-grid-cell-merge.component.html',
    imports: [
        IgxHierarchicalGridComponent,
        IgxPreventDocumentScrollDirective,
        IgxColumnComponent,
        IgxRowIslandComponent,
        IgxGridToolbarComponent,
        IgxSelectComponent,
        IgxSelectItemComponent,
        IgxLabelDirective,
        FormsModule
    ]
})

export class HGridCellMergeComponent {

    public localData = HIERARCHICAL_DATA;
    public cellMergeMode: GridCellMergeMode = 'always';
    public cellMergeModeRowIsland: GridCellMergeMode= 'always';
    public mergeTypes = [{ name: 'Merge always', value: GridCellMergeMode.always }, { name: 'Merge on sort', value: GridCellMergeMode.onSort }];
    public sortExpr = [
        {
            dir: SortingDirection.Asc, fieldName: 'ContactTitle'
        }
    ];

    public strategySelection(e, hgrid: IgxHierarchicalGridComponent) {
        this.cellMergeModeRowIsland = e.newSelection.value;
        hgrid.getChildGrids().forEach(x => x.notifyChanges(true));
    }
}
```
```html
<div class="grid__wrapper">
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true" #hGrid [data]="localData" [moving]="true" [sortingExpressions]="sortExpr"
        [cellMergeMode]="cellMergeMode" [height]="'450px'" [width]="'100%'" [allowFiltering]="true" >
        <igx-grid-toolbar>
            <igx-select [(ngModel)]="cellMergeMode">
                <label igxLabel>Select Merge Type Root</label>
                @for (type of mergeTypes; track type) {
                <igx-select-item [value]="type.value">
                    {{type.name}}
                </igx-select-item>
                }
            </igx-select>
            <igx-select (selectionChanging)="strategySelection($event, hGrid)">
                <label igxLabel>Select Merge Type Child</label>
                @for (type of mergeTypes; track type) {
                <igx-select-item [value]="type.value" [selected]="type.value === cellMergeModeRowIsland">
                    {{type.name}}
                </igx-select-item>
                }
            </igx-select>
        </igx-grid-toolbar>
        <igx-column field="CompanyName" [sortable]="true" [resizable]="true" [editable]="true"></igx-column>
        <igx-column field="ContactName" [sortable]="true" [resizable]="true" [editable]="true"></igx-column>
        <igx-column field="ContactTitle" [sortable]="true" [resizable]="true" [merge]="true" [editable]="true"></igx-column>
        <igx-column field="Address" [sortable]="true" [resizable]="true" [editable]="true"></igx-column>
        <igx-column field="City" [sortable]="true" [resizable]="true" [merge]="true" [editable]="true"></igx-column>
        <igx-column field="PostalCode" [sortable]="true" [resizable]="true"></igx-column>
        <igx-column field="Country" [sortable]="true" [resizable]="true" [merge]="true" [editable]="true"></igx-column>
        <igx-column field="Phone" [sortable]="true" [resizable]="true"></igx-column>
        <igx-column field="Fax" [sortable]="true" [resizable]="true"></igx-column>
        <igx-row-island [height]="null" [key]="'ChildCompanies'" [moving]="true" [autoGenerate]="false"
            [sortingExpressions]="sortExpr" [cellMergeMode]="cellMergeModeRowIsland">
            <igx-column field="CompanyName" [sortable]="true" [resizable]="true" [editable]="true"></igx-column>
            <igx-column field="ContactName" [sortable]="true" [resizable]="true" [editable]="true"></igx-column>
            <igx-column field="ContactTitle" [sortable]="true" [resizable]="true" [merge]="true" [editable]="true"></igx-column>
            <igx-column field="Address" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column field="City" [sortable]="true" [resizable]="true" [merge]="true" [editable]="true"></igx-column>
            <igx-column field="PostalCode" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column field="Country" [sortable]="true" [resizable]="true" [merge]="true"></igx-column>
            <igx-column field="Phone" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column field="Fax" [sortable]="true" [resizable]="true"></igx-column>
        </igx-row-island>
    </igx-hierarchical-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 16px;
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
<igx-hierarchical-grid [data]="data" [cellMergeMode]="cellMergeMode">
    ...
</igx-hierarchical-grid>
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
<igx-hierarchical-grid [data]="data" [cellMergeMode]="cellMergeMode" [autoGenerate]="false">
    <igx-column field="OrderID" header="Order ID" [merge]="true"></igx-column>
    <igx-column field="ShipperName" header="Shipper Name" [merge]="true"></igx-column>
    <igx-column field="Salesperson" header="Salesperson"></igx-column>
</igx-hierarchical-grid>
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
### Applying a Custom Strategy
Once defined, assign the strategy to the grid through the `mergeStrategy` property:
```html
<igx-hierarchical-grid [data]="data" [mergeStrategy]="customStrategy">
  <igx-column field="ActionID" [merge]="true"></igx-column>
  <igx-column field="ProjectName" [merge]="true"></igx-column>
</igx-hierarchical-grid>
```
```ts
protected customStrategy = new MyCustomStrategy();
```
### Demo
```typescript
import { Component } from '@angular/core';
import { HIERARCHICAL_DATA_EXTENDED } from '../../data/hierarchical-data-extended';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { GridCellMergeMode, IgxColumnComponent, IgxGridToolbarComponent } from 'igniteui-angular/grids/core';
import { DefaultMergeStrategy, SortingDirection } from 'igniteui-angular/core';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-hierarchical-grid-cell-merge-custom',
    styleUrls: ['./hierarchical-grid-cell-merge-custom.component.scss'],
    templateUrl: 'hierarchical-grid-cell-merge-custom.component.html',
    imports: [
        IgxHierarchicalGridComponent,
        IgxPreventDocumentScrollDirective,
        IgxColumnComponent,
        IgxRowIslandComponent,
        FormsModule
    ]
})

export class HGridCellMergeCustomComponent {

    public localData = HIERARCHICAL_DATA_EXTENDED;
    public cellMergeMode: GridCellMergeMode = 'always';
    public perCountryMergeStrategy = new PerCountryMergeStrategy();
    public sortExpr = [
        {
            dir: SortingDirection.Asc, fieldName: 'ContactTitle'
        }
    ];
}

export class PerCountryMergeStrategy extends DefaultMergeStrategy {
    /* Merge only cells within their respective countries */
    public override comparer(prevRecord: any, record: any, field: string): boolean {
        const a = prevRecord[field];
        const b = record[field];
        const projA = prevRecord['Country'];
        const projB = record['Country'];
        return a === b && projA === projB;
    }
}
```
```html
<div class="grid__wrapper">
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true" #hGrid [data]="localData" [moving]="true" [sortingExpressions]="sortExpr"
        [cellMergeMode]="cellMergeMode" [mergeStrategy]="perCountryMergeStrategy" [height]="'400px'" [width]="'100%'" [allowFiltering]="true" >
        <igx-column field="CompanyName" [sortable]="true" [resizable]="true" [editable]="true"></igx-column>
        <igx-column field="ContactName" [sortable]="true" [resizable]="true" [editable]="true"></igx-column>
        <igx-column field="ContactTitle" [sortable]="true" [resizable]="true" [merge]="true" [editable]="true"></igx-column>
        <igx-column field="Address" [sortable]="true" [resizable]="true" [editable]="true"></igx-column>
        <igx-column field="City" [sortable]="true" [resizable]="true" [merge]="true" [editable]="true"></igx-column>
        <igx-column field="PostalCode" [sortable]="true" [resizable]="true"></igx-column>
        <igx-column field="Country" [sortable]="true" [resizable]="true" [merge]="true" [editable]="true"></igx-column>
        <igx-column field="Phone" [sortable]="true" [resizable]="true"></igx-column>
        <igx-column field="Fax" [sortable]="true" [resizable]="true"></igx-column>
        <igx-row-island [height]="null" [key]="'ChildCompanies'" [moving]="true" [autoGenerate]="false"
            [sortingExpressions]="sortExpr" [cellMergeMode]="cellMergeMode" [mergeStrategy]="perCountryMergeStrategy">
            <igx-column field="CompanyName" [sortable]="true" [resizable]="true" [editable]="true"></igx-column>
            <igx-column field="ContactName" [sortable]="true" [resizable]="true" [editable]="true"></igx-column>
            <igx-column field="ContactTitle" [sortable]="true" [resizable]="true" [merge]="true" [editable]="true"></igx-column>
            <igx-column field="Address" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column field="City" [sortable]="true" [resizable]="true" [merge]="true" [editable]="true"></igx-column>
            <igx-column field="PostalCode" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column field="Country" [sortable]="true" [resizable]="true" [merge]="true"></igx-column>
            <igx-column field="Phone" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column field="Fax" [sortable]="true" [resizable]="true"></igx-column>
        </igx-row-island>
    </igx-hierarchical-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 16px;
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
- [IgxHierarchicalGridComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html)
- [IgxHierarchicalGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
## Additional Resources
<div class="divider--half"></div>
- [Hierarchical Grid overview](hierarchical-grid.md)
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
