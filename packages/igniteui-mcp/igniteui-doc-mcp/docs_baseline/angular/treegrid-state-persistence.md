---
title: Angular Tree Grid State Persistence - Ignite UI for Angular
_description: Easily save and restore the grid state, using our comprehensive Ignite UI toolset for Angular. Learn how to restore columns, explore usage, and see demos!
_keywords: state persistence, ignite ui for angular, infragistics
_license: commercial
_canonicalLink: grid/state-persistence
_tocName: State Persistence
_premium: true
---
# Angular Tree Grid State Persistence
Тhe igxGridState directive allows developers to easily save and restore the grid state. When the [`IgxGridState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html) directive is applied on the grid, it exposes the [`getState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#getState) and [`setState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#setState) methods that developers can use to achieve state persistence in any scenario.
## Supported Features
[`IgxGridState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html) directive supports saving and restoring the state of the following features:
- `Sorting`
- `Filtering`
- `Advanced Filtering`
- `Paging`
- `Cell Selection`
- `Row Selection`
- `Column Selection`
- `Row Pinning`
- `Expansion`
- `Columns`
  - **NEW**: Multi column headers are now supported out of the box
  - Columns order
  - Column properties defined by the [`IColumnState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/icolumnstate.html) interface.
  - Columns templates and functions are restored using application level code, see [Restoring Column](state-persistence.md#restoring-columns) section.
>[!NOTE]
> The [`IgxGridState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html) directive does not take care of templates. Go to [Restoring Column](state-persistence.md#restoring-columns) section to see how to restore column templates.
>[!NOTE]
> The `Row Selection`  feature requires the [`primaryKey`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridComponent.html#primaryKey) property to be set, so it can be stored/restored correctly.
## Usage
[`getState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#getState) - This method returns the grid state in a serialized JSON string, so developers can just take it and save it on any data storage (database, cloud, browser localStorage, etc). The method accepts first optional parameter `serialize`, which determines whether [`getState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#getState) will return an [`IGridState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igridstate.html) object or a serialized JSON string.
The developer may choose to get only the state for a certain feature/features, by passing in the feature name, or an array with feature names as a second argument.
```typescript
// get all features` state in a serialized JSON string
const gridState = state.getState();
// get an `IGridState` object, containing all features original state objects, as returned by the grid public API
const gridState: IGridState = state.getState(false);
// get the sorting and filtering expressions
const sortingFilteringStates: IGridState = state.getState(false, ['sorting', 'filtering']);
```
[`setState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#setState) - The [`setState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#setState) method accepts the serialized JSON string or [`IGridState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igridstate.html) object as argument and will restore the state of each feature found in the object/JSON string.
```typescript
state.setState(gridState);
state.setState(sortingFilteringStates)
```
`options` - The [`options`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#options) object implements the [`IGridStateOptions`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igridstateoptions.html) interface, i.e. for every key, which is the name of a certain feature, there is the boolean value indicating if this feature state will be tracked. [`getState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#getState) method will not put the state of these features in the returned value and [`setState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#setState) method will not restore state for it.
```typescript
public options =  { cellSelection: false; sorting: false; }
```
```html
<igx-tree-grid [igxGridState]="options"></igx-tree-grid>
```
The simple to use single-point API's allows to achieve a full state persistence functionality in just a few lines of code. **Copy paste the code from below** - it will save the grid state in the browser `sessionStorage` object every time the user leaves the current page. Whenever the user returns to main page, the grid state will be restored. No more need to configure those complex advanced filtering and sorting expressions every time to get the data you want - do it once and have the code from below do the rest for your users:
```typescript
// app.component.ts
@ViewChild(IgxGridStateDirective, { static: true })
public state!: IgxGridStateDirective;
public ngOnInit() {
    this.router.events.pipe(take(1)).subscribe((event: NavigationStart) => {
        this.saveGridState();
    });
}
public ngAfterViewInit() {
    this.restoreGridState();
}
public saveGridState() {
    const state = this.state.getState() as string;
    window.sessionStorage.setItem('grid1-state', state);
}
public restoreGridState() {
    const state = window.sessionStorage.getItem('grid1-state');
    this.state.setState(state);
}
```
## Restoring columns
When possible the state directive will reuses the columns that already exists on the grid when restoring the state, instead of creating new column instances. The only scenario where a new instance will be created is when the column (or its children in case of a column groups) have no `field` property so there's no way to uniquely identify the matching column and re-use it.
For such scenarios, the following [`limitations`](state-persistence.md#limitations) are imposed. In that case restoring complex objects can be achieved with code on application level. Let's show how to do this for templated columns:
1. Define a template reference variable (in the example below it is `#activeTemplate`) and assign an event handler for the [`columnInit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#columnInit) event:
@@if (igxName === 'IgxGrid') {
    ```html
    <igx-grid id="grid" #grid igxGridState (columnInit)="onColumnInit($event)">
        <igx-column [field]="'IsActive'" header="IsActive">
            <ng-template igxCell #activeTemplate let-column let-val="val">
                <igx-checkbox [checked]="val"></igx-checkbox>
            </ng-template>
        </igx-column>
        ...
    </igx-grid>
    ```
}
@@if (igxName === 'IgxHierarchicalGrid') {
    ```html
    <igx-hierarchical-grid id="grid" #grid igxGridState (columnInit)="onColumnInit($event)">
        <igx-column [field]="'IsActive'" header="IsActive">
            <ng-template igxCell #activeTemplate let-column let-val="val">
                <igx-checkbox [checked]="val"></igx-checkbox>
            </ng-template>
        </igx-column>
        ...
    </igx-hierarchical-grid>
    ```
}
@@if (igxName === 'IgxTreeGrid') {
    ```html
    <igx-tree-grid id="grid" #grid igxGridState (columnInit)="onColumnInit($event)">
        <igx-column [field]="'IsActive'" header="IsActive">
            <ng-template igxCell #activeTemplate let-column let-val="val">
                <igx-checkbox [checked]="val"></igx-checkbox>
            </ng-template>
        </igx-column>
        ...
    </igx-tree-grid>
    ```
}
1. Query the template view in the component using @ViewChild or @ViewChildren decorator. In the [`columnInit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#columnInit) event handler, assign the template to the column `bodyTemplate` property:
```typescript
@ViewChild('activeTemplate', { static: true }) public activeTemplate: TemplateRef<any>;
public onColumnInit(column: IgxColumnComponent) {
    if (column.field === 'IsActive') {
        column.bodyTemplate = this.activeTemplate;
        column.summaries = MySummary;
        column.filters = IgxNumberFilteringOperand.instance();
    }
}
```
## Demo
```typescript
import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit, inject } from '@angular/core';
import { NavigationStart, Router, RouterLink } from '@angular/router';
import { FilteringExpressionsTree, FilteringLogic } from 'igniteui-angular/core';
import { GridFeatures, IGridState, IGridStateOptions, IgxColumnComponent, IgxGridStateDirective } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { take } from 'rxjs/operators';
import { EMPLOYEE_DATA } from './data';


// tslint:disable:object-literal-sort-keys
@Component({
    selector: 'app-tgrid',
    styleUrls: ['./tGrid-state.component.scss'],
    templateUrl: './tGrid-state.component.html',
    imports: [IgxButtonDirective, IgxIconComponent, RouterLink, IgxCheckboxComponent, IgxTreeGridComponent, IgxGridStateDirective, IgxPaginatorComponent, IgxColumnComponent]
})

export class TGridSaveStateComponent implements OnInit, AfterViewInit {
    private router = inject(Router);


    @ViewChild(IgxGridStateDirective, { static: true }) public state: IgxGridStateDirective;
    @ViewChild('treeGrid', { static: true }) public tGrid: IgxTreeGridComponent;
    @ViewChildren(IgxCheckboxComponent) public checkboxes: QueryList<IgxCheckboxComponent>;

    public localData: any[];
    public columns: any[];
    public treeGridId = 'tGrid1';
    public stateKey = this.treeGridId + '-state';
    public gridState: IGridState;
    public serialize = true;

    public features: { key: GridFeatures; shortName: string }[] = [
        { key: 'advancedFiltering', shortName: 'Adv Filt' },
        { key: 'cellSelection', shortName: 'Cell Sel' },
        { key: 'columns', shortName: 'Columns' } ,
        { key: 'columnSelection', shortName: 'Cols Sel' },
        { key: 'expansion', shortName: 'Expansion' },
        { key: 'filtering', shortName: 'Filt' },
        { key: 'paging', shortName: 'Paging' },
        { key: 'rowPinning', shortName: 'Row Pining' },
        { key: 'rowSelection', shortName: 'Row Sel' },
        { key: 'sorting', shortName: 'Sorting' }
      ];

    public options: IGridStateOptions = {
      cellSelection: true,
      rowSelection: true,
      filtering: true,
      advancedFiltering: true,
      paging: true,
      sorting: true,
      columns: true,
      expansion: true,
      rowPinning: true,
      columnSelection: true
    };

    constructor() {
        this.localData = EMPLOYEE_DATA;
    }

    public ngOnInit() {
      this.router.events.pipe(take(1)).subscribe((event: NavigationStart) => {
          this.saveGridState();
      });
    }

    public ngAfterViewInit() {
        this.restoreGridState();
    }

    public saveGridState() {
        const state = this.state.getState(this.serialize);
        if (typeof state === 'string') {
          window.localStorage.setItem(this.stateKey, state);
        } else {
          window.localStorage.setItem(this.stateKey, JSON.stringify(state));
        }
    }

    public restoreGridState() {
        const state = window.localStorage.getItem(this.stateKey);
        if (state) {
          this.state.setState(state);
        }
    }

    public restoreFeature(stateDirective: IgxGridStateDirective, feature: string) {
        const state = this.getFeatureState(this.stateKey, feature);
        if (state) {
          const featureState = { } as IGridState;
          featureState[feature] = state;
          stateDirective.setState(featureState);
        }
      }

    public getFeatureState(stateKey: string, feature: string) {
        let state = window.localStorage.getItem(stateKey);
        state =  state ? JSON.parse(state)[feature] : null;
        return state;
    }

    public resetGridState() {
        const tGrid: IgxTreeGridComponent = this.tGrid;
        tGrid.filteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
        tGrid.advancedFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
        tGrid.sortingExpressions = [];
        tGrid.deselectAllRows();
        tGrid.clearCellSelection();
      }

    public onChange(event: any, action: string) {
        if (action === 'toggleAll') {
          this.checkboxes.forEach(cb => {
              cb.checked = event.checked;
          });
          for (const key of Object.keys(this.options)) {
              this.state.options[key] = event.checked;
          }
          return;
        }
        this.state.options[action] = event.checked;
      }

    public clearStorage() {
      window.localStorage.removeItem(this.stateKey);
    }

    public reloadPage() {
        window.location.reload();
    }

    public formatter = (a) => a;
}
```
```html
<div class="grid__wrapper">
  <div class="controls-holder">
    <div class="switches">
      <button igxButton="contained" (click)="restoreGridState()">
        <igx-icon class="btn-icon">restore</igx-icon>
        <span>Restore</span>
      </button>
      <button igxButton="contained" (click)="saveGridState()">
        <igx-icon class="btn-icon">save</igx-icon>
        <span>Save</span>
      </button>
      <button igxButton="contained" (click)="resetGridState()">
        <igx-icon class="btn-icon">clear</igx-icon>
        <span>Reset</span>
      </button>
      <button igxButton="contained" [routerLink]="['../tree-grid-state-about']">
        <igx-icon class="btn-icon">forward</igx-icon>
        <span>Leave</span>
      </button>
      <button igxButton="contained" (click)="clearStorage()">
        <igx-icon class="btn-icon">delete</igx-icon>
        <span>Clear</span>
      </button>
      <button igxButton="contained" (click)="reloadPage()">
        <igx-icon class="btn-icon">refresh</igx-icon>
        <span>Reload</span>
      </button>
    </div>

    <div class="switches">
      <ul>
        <li>Clicking the SAVE button or leaving the page <a [routerLink]="['../tree-grid-state-about']"><strong>here</strong></a> will save grid state to localStorage.</li>
        <li>Use the control buttons to SAVE / RESTORE / RESET / DELETE / grid state or LEAVE the page.</li>
        <li>Select/Deselect checkboxes to control saving / restoring feature state.</li>
      </ul>
    </div>

    <div class="switches">
      <div class="control-item">
        <igx-checkbox [checked]="true" (change)="onChange($event, 'toggleAll')">All</igx-checkbox>
      </div>
      @for (f of features; track f) {
        <div class="control-item">
          <igx-checkbox (change)="onChange($event, f.key)" [checked]="options[f.key]">
            {{ f.shortName }}
          </igx-checkbox>
        </div>
      }
    </div>
  </div>

  <igx-tree-grid #treeGrid [id]="treeGridId" igxGridState
    primaryKey="Name"
    [data]="localData"
    childDataKey="Employees"
    [moving]="true"
    width="98%" height="800px"
    [autoGenerate]="false"
    [rowSelection]="'multiple'"
    [allowFiltering]="true">
    <igx-paginator></igx-paginator>
    <igx-column field="Name" dataType="string" [sortable]="true" [editable]="true" [resizable]="true" [hasSummary]="true"></igx-column>
    <igx-column field="HireDate" dataType="date" [sortable]="true" [editable]="true" [resizable]="true"></igx-column>
    <igx-column field="Age" dataType="number" [sortable]="true" [editable]="true" [resizable]="true"></igx-column>
  </igx-tree-grid>
</div>
```
```scss
.controls-holder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
}

.switches {
    display: flex;
    justify-content: space-between;
    justify-content: flex-start;
    align-items: center;
    flex: 1 0 0%;
    min-width: 100%;
    padding-right: 20px;
    font-size: 0.9rem;
    margin-top: 0;
    > button {
        margin-right: 10px;
    }
}

.control-item {
    display: block;
    padding: 8px 0px;
    > span {
        cursor: pointer;
    }
    margin-right: 10px;
}

.grid__wrapper {
    --ig-size: var(--ig-size-medium);
    margin: 0 16px;
    padding-top: 16px;
    width: 100%;
}
```
## Limitations
- [`getState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#getstate) method uses JSON.stringify() method to convert the original objects to a JSON string. JSON.stringify() does not support Functions, thats why the [`IgxGridState`] directive will ignore the columns [`formatter`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#formatter), [`filters`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#filters), [`summaries`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#summaries), [`sortStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#sortstrategy), [`cellClasses`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#cellClasses), [`cellStyles`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#cellstyles), [`headerTemplate`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#headerTemplate) and [`bodyTemplate`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#bodyTemplate) properties.
<div class="divider--half"></div>
## API References
- [IgxTreeGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html)
- [IgxGridStateDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html)
## Additional Resources
<div class="divider--half"></div>
- [Tree Grid overview](tree-grid.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Selection](selection.md)


