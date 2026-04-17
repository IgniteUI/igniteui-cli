---
_tocName: State Persistence
_premium: true
---
---title: Angular Grid State Persistence - Ignite UI for Angular_description: Easily save and restore the grid state, using our comprehensive Ignite UI toolset for Angular. Learn how to restore columns, explore usage, and see demos!_keywords: state persistence, ignite ui for angular, infragistics_license: commercial---# Angular Grid State PersistenceТhe igxGridState directive allows developers to easily save and restore the grid state. When the [`IgxGridState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html) directive is applied on the grid, it exposes the [`getState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#getState) and [`setState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#setState) methods that developers can use to achieve state persistence in any scenario.## Supported Features[`IgxGridState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html) directive supports saving and restoring the state of the following features:- `Sorting`- `Filtering`- `Advanced Filtering`- `Paging`- `Cell Selection`- `Row Selection`- `Column Selection`- `Row Pinning`- `Expansion`- `GroupBy`- `Columns`
  - Multi column headers
  - Multi-row Layout
  - Columns order
  - Column properties defined by the [`IColumnState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/icolumnstate.html) interface.
  - Columns templates and functions are restored using application level code, see [Restoring Column](state-persistence.md#restoring-columns) section.>[!NOTE]> The [`IgxGridState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html) directive does not take care of templates. Go to [Restoring Column](state-persistence.md#restoring-columns) section to see how to restore column templates.>[!NOTE]> The `Row Selection`  feature requires the [`primaryKey`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridComponent.html#primaryKey) property to be set, so it can be stored/restored correctly.## Usage[`getState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#getState) - This method returns the grid state in a serialized JSON string, so developers can just take it and save it on any data storage (database, cloud, browser localStorage, etc). The method accepts first optional parameter `serialize`, which determines whether [`getState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#getState) will return an [`IGridState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igridstate.html) object or a serialized JSON string.The developer may choose to get only the state for a certain feature/features, by passing in the feature name, or an array with feature names as a second argument.```typescript// get all features` state in a serialized JSON stringconst gridState = state.getState();// get an `IGridState` object, containing all features original state objects, as returned by the grid public APIconst gridState: IGridState = state.getState(false);// get the sorting and filtering expressionsconst sortingFilteringStates: IGridState = state.getState(false, ['sorting', 'filtering']);```[`setState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#setState) - The [`setState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#setState) method accepts the serialized JSON string or [`IGridState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igridstate.html) object as argument and will restore the state of each feature found in the object/JSON string.```typescriptstate.setState(gridState);state.setState(sortingFilteringStates)````options` - The [`options`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#options) object implements the [`IGridStateOptions`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igridstateoptions.html) interface, i.e. for every key, which is the name of a certain feature, there is the boolean value indicating if this feature state will be tracked. [`getState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#getState) method will not put the state of these features in the returned value and [`setState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#setState) method will not restore state for it.```typescriptpublic options =  { cellSelection: false; sorting: false; }``````html<igx-grid [igxGridState]="options"></igx-grid>```The simple to use single-point API's allows to achieve a full state persistence functionality in just a few lines of code. **Copy paste the code from below** - it will save the grid state in the browser `sessionStorage` object every time the user leaves the current page. Whenever the user returns to main page, the grid state will be restored. No more need to configure those complex advanced filtering and sorting expressions every time to get the data you want - do it once and have the code from below do the rest for your users:```typescript// app.component.ts@ViewChild(IgxGridStateDirective, { static: true })public state!: IgxGridStateDirective;public ngOnInit() {
    this.router.events.pipe(take(1)).subscribe((event: NavigationStart) => {
        this.saveGridState();
    });}public ngAfterViewInit() {
    this.restoreGridState();}public saveGridState() {
    const state = this.state.getState() as string;
    window.sessionStorage.setItem('grid1-state', state);}public restoreGridState() {
    const state = window.sessionStorage.getItem('grid1-state');
    this.state.setState(state);}```## Restoring columnsWhen possible the state directive will reuses the columns that already exists on the grid when restoring the state, instead of creating new column instances. The only scenario where a new instance will be created is when the column (or its children in case of a column groups) have no `field` property so there's no way to uniquely identify the matching column and re-use it.For such scenarios, the following [`limitations`](state-persistence.md#limitations) are imposed. In that case restoring complex objects can be achieved with code on application level. Let's show how to do this for templated columns:1. Define a template reference variable (in the example below it is `#activeTemplate`) and assign an event handler for the [`columnInit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#columnInit) event:@@if (igxName === 'IgxGrid') {
    ```html
    <igx-grid id="grid" #grid igxGridState (columnInit)="onColumnInit($event)">
        <igx-column [field]="'IsActive'" header="IsActive">
            <ng-template igxCell #activeTemplate let-column let-val="val">
                <igx-checkbox [checked]="val"></igx-checkbox>
            </ng-template>
        </igx-column>
        ...
    </igx-grid>
    ```}@@if (igxName === 'IgxHierarchicalGrid') {
    ```html
    <igx-hierarchical-grid id="grid" #grid igxGridState (columnInit)="onColumnInit($event)">
        <igx-column [field]="'IsActive'" header="IsActive">
            <ng-template igxCell #activeTemplate let-column let-val="val">
                <igx-checkbox [checked]="val"></igx-checkbox>
            </ng-template>
        </igx-column>
        ...
    </igx-hierarchical-grid>
    ```}@@if (igxName === 'IgxTreeGrid') {
    ```html
    <igx-tree-grid id="grid" #grid igxGridState (columnInit)="onColumnInit($event)">
        <igx-column [field]="'IsActive'" header="IsActive">
            <ng-template igxCell #activeTemplate let-column let-val="val">
                <igx-checkbox [checked]="val"></igx-checkbox>
            </ng-template>
        </igx-column>
        ...
    </igx-tree-grid>
    ```}1. Query the template view in the component using @ViewChild or @ViewChildren decorator. In the [`columnInit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#columnInit) event handler, assign the template to the column `bodyTemplate` property:```typescript@ViewChild('activeTemplate', { static: true }) public activeTemplate: TemplateRef<any>;public onColumnInit(column: IgxColumnComponent) {
    if (column.field === 'IsActive') {
        column.bodyTemplate = this.activeTemplate;
        column.summaries = MySummary;
        column.filters = IgxNumberFilteringOperand.instance();
    }}```## Demo```typescript
/* eslint-disable max-len */
import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit, inject } from '@angular/core';
import { NavigationStart, Router, RouterLink } from '@angular/router';
import { FilteringExpressionsTree, FilteringLogic, IgxSummaryResult } from 'igniteui-angular/core';
import { GridFeatures, IGridState, IGridStateOptions, IgxColumnComponent, IgxGridStateDirective, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxNumberSummaryOperand } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { take } from 'rxjs/operators';
import { employeesData } from './localData';

import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

class MySummary {

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = new IgxNumberSummaryOperand().operate(data);
        result.push({
            key: 'test',
            label: 'Test',
            summaryResult: data.filter(rec => rec > 10 && rec < 30).length
        });
        return result;
    }
}

// tslint:disable:object-literal-sort-keys
@Component({
    selector: 'app-grid',
    styleUrls: ['./grid-state.component.scss'],
    templateUrl: './grid-state.component.html',
    imports: [IgxButtonDirective, IgxIconComponent, RouterLink, IgxCheckboxComponent, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridStateDirective, IgxPaginatorComponent, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxColumnComponent]
})

export class GridSaveStateComponent implements OnInit, AfterViewInit {
    private router = inject(Router);

    @ViewChild(IgxGridStateDirective, { static: true }) public state: IgxGridStateDirective;
    @ViewChild(IgxGridComponent, { static: true }) public grid: IgxGridComponent;
    @ViewChildren(IgxCheckboxComponent) public checkboxes: QueryList<IgxCheckboxComponent>;

    public localData: any[];
    public columns: any[];
    public gridId = 'grid1';
    public stateKey = this.gridId + '-state';
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
        { key: 'sorting', shortName: 'Sorting' },
        { key: 'groupBy', shortName: 'GroupBy' }
      ];

    public options: IGridStateOptions = {
      cellSelection: true,
      rowSelection: true,
      filtering: true,
      advancedFiltering: true,
      paging: true,
      sorting: true,
      groupBy: true,
      columns: true,
      expansion: true,
      rowPinning: true,
      columnSelection: true
    };

    public initialColumns: any[] = [
      // tslint:disable:max-line-length
      { field: 'FirstName', header: 'First Name', width: '150px', dataType: 'string', pinned: true, sortable: true, filterable: true},
      { field: 'LastName', header: 'Last Name', width: '150px', dataType: 'string', pinned: true, sortable: true, filterable: true},
      { field: 'Country', header: 'Country', width: '140px', dataType: 'string', groupable: true, sortable: true, filterable: true, resizable: true },
      { field: 'Age', header: 'Age', width: '110px', dataType: 'number', sortable: true, filterable: true, hasSummary: true, resizable: true, summaries: MySummary},
      { field: 'RegistererDate', header: 'Registerer Date', width: '180px', dataType: 'date', sortable: true, filterable: true, resizable: true },
      { field: 'IsActive', header: 'Is Active', width: '140px', dataType: 'boolean', groupable: true, sortable: true, filterable: true }
      // tslint:enable:max-line-length
    ];

    public ngOnInit() {
      this.localData = employeesData;
      this.columns = this.initialColumns;
      this.router.events.pipe(take(1)).subscribe((event: NavigationStart) => {
          this.saveGridState();
      });
    }

    public ngAfterViewInit() {
        this.restoreGridState();
    }

    public saveGridState() {
        const state = this.state.getState(this.serialize);
        // const state = this.state.getState(this.serialize, ['sorting', 'filtering']);
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
        const grid: IgxGridComponent = this.grid;
        const pagingState = {index: 0, recordsPerPage: 15, metadata: { countPages: 3, countRecords: this.localData.length}};
        grid.pagingState = pagingState;
        grid.filteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
        grid.advancedFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
        grid.sortingExpressions = [];
        grid.groupingExpressions = [];
        grid.deselectAllColumns();
        grid.deselectAllRows();
        grid.clearCellSelection();
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
      <button igxButton="contained" [routerLink]="['../grid-about']">
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
        <li>Clicking the SAVE button or leaving the page <a [routerLink]="['../grid-about']"><strong>here</strong></a> will save grid state to localStorage.</li>
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

  <igx-grid [igxPreventDocumentScroll]="true" [id]="gridId" #grid1 [igxGridState]="options"
    width="98%" height="530px" [autoGenerate]="false" [moving]="true"
    [data]="localData"
    [primaryKey]="'EmployeeID'"
    [rowEditable]="false"
    [allowFiltering]="true"
    [filterMode]="'excelStyleFilter'"
    [allowAdvancedFiltering]="true"
    [cellSelection]="'multiple'"
    [rowSelection]="'none'">
    <igx-paginator></igx-paginator>
    <igx-grid-toolbar>
      <igx-grid-toolbar-actions>
        <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
        <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
      </igx-grid-toolbar-actions>
    </igx-grid-toolbar>

    @for (c of columns; track c) {
      <igx-column
        [sortable]="c.sortable"
        [editable]="true"
        [hasSummary]="c.hasSummary"
        [filterable]="c.filterable"
        [groupable]="c.groupable"
        [field]="c.field"
        [header]="c.header"
        [dataType]="c.dataType"
        [pinned]="c.pinned"
        [hidden]="c.hidden">
      </igx-column>
    }
  </igx-grid>
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
    margin: 0 16px;
    padding-top: 16px;
    width: 100%;

    igx-grid {
        --ig-size: var(--ig-size-medium);
    }
}
```## Restoring Strategies[`IgxGridState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html) will not persist neither remote operations nor custom dimension strategies (For further information see [Grid Remote Operations](remote-data-operations.md) sample) by default (see [`limitations`](state-persistence.md#limitations)). Restoring any of these can be achieved with code on application level. The `IgxGridState` exposes an event called [`stateParsed`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#stateParsed) which can be used to additionally modify the grid state before it gets applied. Let's show how to do this:>[!NOTE]> [`stateParsed`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective) is only emitted when we are using [`setState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#setState) with string argument.- Set custom sorting strategy and custom column and row dimension strategies:```html<igx-grid #grid 
          [data]="data" 
          [igxGridState]="options" 
          [sortStrategy]="customStrategy"
          [height]="'500px'"></igx-grid>``````typescript@ViewChild(IgxGridStateDirective, { static: true })public state!: IgxGridStateDirective;public customStrategy = NoopSortingStrategy.instance();public options: IGridStateOptions = {...};```- Restoring the state from the `sessionStorage` and applying the custom strategies looks like the following:```typescriptpublic restoreState() {
    const state = window.sessionStorage.getItem('grid-state');
    this.state.stateParsed.pipe(take(1)).subscribe(parsedState => {
        parsedState.sorting.forEach(x => x.strategy = NoopSortingStrategy.instance());
    });
    this.state.setState(state as string);}``````typescript
import { Component, TemplateRef, ViewChild, inject } from '@angular/core';

import { IGridStateOptions, IgxCellHeaderTemplateDirective, IgxCellTemplateDirective, IgxColumnComponent, IgxGridStateDirective } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { NoopSortingStrategy } from 'igniteui-angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { FinancialDataService } from '../../services/financial.service';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { AsyncPipe } from '@angular/common';

@Component({
    providers: [FinancialDataService],
    selector: 'app-grid-state-persistance-sample',
    styleUrls: ['./grid-state-persistance-sample.component.scss'],
    templateUrl: 'grid-state-persistance-sample.component.html',
    imports: [IgxButtonDirective, IgxIconComponent, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridStateDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxCellHeaderTemplateDirective, IgxBadgeComponent, AsyncPipe]
})

export class GridStatePersistenceSampleComponent {
    private localService = inject(FinancialDataService);

    @ViewChild('grid', { static: true })
    public grid: IgxGridComponent;
    @ViewChild(IgxGridStateDirective, { static: true })
    public state!: IgxGridStateDirective;

    @ViewChild('price', { static: true }) public priceTemplate: TemplateRef<any>;
    @ViewChild('change', { static: true }) public changeTemplate: TemplateRef<any>;
    @ViewChild('buy', { static: true }) public buyTemplate: TemplateRef<any>;
    @ViewChild('sell', { static: true }) public sellTemplate: TemplateRef<any>;
    @ViewChild('spread', { static: true }) public spreadTemplate: TemplateRef<any>;
    @ViewChild('volume', { static: true }) public volumeTemplate: TemplateRef<any>;
    @ViewChild('highD', { static: true }) public highDTemplate: TemplateRef<any>;
    @ViewChild('lowD', { static: true }) public lowDTemplate: TemplateRef<any>;
    @ViewChild('highY', { static: true }) public highYTemplate: TemplateRef<any>;
    @ViewChild('lowY', { static: true }) public lowYTemplate: TemplateRef<any>;
    @ViewChild('startY', { static: true }) public startYTemplate: TemplateRef<any>;
    @ViewChild('changeOnYear', { static: true }) public changeOnYearTemplate: TemplateRef<any>;
    @ViewChild('changePercentage', { static: true }) public changePercentageTemplate: TemplateRef<any>;
    
    public data: Observable<any[]>;
    public customStrategy = NoopSortingStrategy.instance();
    public options: IGridStateOptions = {
        rowSelection: true,
        filtering: true,
        sorting: true,
        columnSelection: true
    };

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

    public saveState() {
        const state = this.state.getState() as string;
        window.sessionStorage.setItem('grid-state', state);
    }

    public restoreState() {
        const state = window.sessionStorage.getItem('grid-state');
        this.state.stateParsed.pipe(take(1)).subscribe(parsedState => {
            parsedState.sorting.forEach(x => x.strategy = this.customStrategy);
        });
        this.state.setState(state);
    }

    public clearStorage() {
        window.sessionStorage.removeItem('grid-state');
    }

    public onColumnInit(column: IgxColumnComponent) {
        if (column.field === 'Price') {
            column.bodyTemplate = this.priceTemplate;
        }
        else if (column.field === 'Buy') {
            column.bodyTemplate = this.buyTemplate;
        }
        else if (column.field === 'Sell') {
            column.bodyTemplate = this.sellTemplate;
        }
        else if (column.field === 'Spread') {
            column.bodyTemplate = this.spreadTemplate;
        }
        else if (column.field === 'Volume') {
            column.bodyTemplate = this.volumeTemplate;
        }
        else if (column.field === 'High(D)') {
            column.bodyTemplate = this.highDTemplate;
        }
        else if (column.field === 'Low(D)') {
            column.bodyTemplate = this.lowDTemplate;
        }
        else if (column.field === 'High(Y)') {
            column.bodyTemplate = this.highYTemplate;
        }
        else if (column.field === 'Low(Y)') {
            column.bodyTemplate = this.lowYTemplate;
        }
        else if (column.field === 'Start(Y)') {
            column.bodyTemplate = this.startYTemplate;
        }
        else if (column.field === 'Change On Year(%)') {
            column.bodyTemplate = this.changeOnYearTemplate;
        }
        else if (column.field === 'Change(%)') {
            column.bodyTemplate = this.changeTemplate;
        }
        else if (column.field === 'Change') {
            column.bodyTemplate = this.changePercentageTemplate;
        }
    }

}
```
```html
<div class="switches">
  <button igxButton="contained" (click)="restoreState()">
    <igx-icon class="btn-icon">restore</igx-icon>
    <span>Restore</span>
  </button>
  <button igxButton="contained" (click)="saveState()">
    <igx-icon class="btn-icon">save</igx-icon>
    <span>Save</span>
  </button>
  <button igxButton="contained" (click)="clearStorage()">
    <igx-icon class="btn-icon">delete</igx-icon>
    <span>Clear</span>
  </button>

  <button igxButton="contained" (click)="grid.sortStrategy = customStrategy">
    <igx-icon class="btn-icon">Set Strategy</igx-icon>
    <span>Set NooP custom Sort Strategy</span>
  </button>
</div>

<div class="grid__wrapper">
  <igx-grid [igxPreventDocumentScroll]="true" [igxGridState]="options" #grid [data]="data | async" [height]="'500px'"
    width="100%" [autoGenerate]='false' [allowFiltering]="true" (columnInit)="onColumnInit($event)">
    <igx-column [field]="'Category'" [sortable]="true" [width]="'120px'"></igx-column>
    <igx-column [field]="'Type'" [sortable]="true" [width]="'150px'" [filterable]="false"></igx-column>
    <igx-column [field]="'Open Price'" [sortable]="true" [width]="'120px'" dataType="number">
    </igx-column>
    <igx-column [field]="'Price'" [sortable]="true" [width]="'120px'" dataType="number">
      <ng-template igxCell let-column let-val #price>
        {{formatCurrency(val)}}
      </ng-template>
    </igx-column>
    <igx-column [field]="'Change'" [sortable]="true" [width]="'120px'" dataType="number"
      [headerClasses]="'headerAlignSyle'">
      <ng-template igxHeader>
        <span>Change</span>
      </ng-template>

      <ng-template igxCell let-val #change>
        <div class="currency-badge-container">
          @if (val>0) {
            <igx-badge type="success" position="bottom-right" icon="arrow_upward"
            class="badge-left"></igx-badge>
          }
          @if (val<0) {
            <igx-badge type="error" position="bottom-right" icon="arrow_downward"
            class="error badge-left"></igx-badge>
          }
          <span class="cellAlignSyle" [class.up]="val>0" [class.down]="val<0">{{ formatNumber(val) }}</span>
        </div>
      </ng-template>
    </igx-column>
    <igx-column [field]="'Change(%)'" [sortable]="true" [width]="'130px'" dataType="number">
      <ng-template igxCell let-column let-val #changePercentage>
        {{formatNumber(val)}}
      </ng-template>
      <ng-template igxHeader>
        <span>Change(%)</span>
      </ng-template>

      <ng-template igxCell let-val>
        <span class="cellAlignSyle" [class.up]="val>0" [class.down]="val<0">{{ formatNumber(val) }}%</span>
      </ng-template>
    </igx-column>
    <igx-column [field]="'Change On Year(%)'" [sortable]="true" [width]="'150px'" dataType="number">
      <ng-template igxCell let-val #changeOnYear>
        <div class="currency-badge-container">
          @if (val>0) {
            <igx-badge type="success" position="bottom-right" icon="arrow_upward"
            class="badge-left"></igx-badge>
          }
          @if (val<0) {
            <igx-badge type="error" position="bottom-right" icon="arrow_downward"
            class="error badge-left"></igx-badge>
          }
          <span class="cellAlignSyle" [class.up]="val>0" [class.down]="val<0">{{ formatNumber(val) }}%</span>
        </div>
      </ng-template>
    </igx-column>
    <igx-column [field]="'Buy'" [sortable]="true" [width]="'130px'" dataType="number">
      <ng-template igxCell let-column let-val #buy>
        {{formatCurrency(val)}}
      </ng-template>
    </igx-column>
    <igx-column [field]="'Sell'" [sortable]="true" [width]="'130px'" dataType="number">
      <ng-template igxCell let-column let-val #sell>
        {{formatCurrency(val)}}
      </ng-template>
    </igx-column>
    <igx-column [field]="'Spread'" [sortable]="true" [width]="'130px'" dataType="number">
      <ng-template igxCell let-column let-val #spread>
        {{formatNumber(val)}}
      </ng-template>
    </igx-column>
    <igx-column [field]="'Volume'" [sortable]="true" [width]="'130px'" dataType="number">
      <ng-template igxCell let-column let-val #volume>
        {{formatNumber(val)}}
      </ng-template>
    </igx-column>
    <igx-column [field]="'High(D)'" [sortable]="true" [width]="'130px'" dataType="number"
      [formatter]="formatCurrency">
      <ng-template igxCell let-column let-val #highD>
        {{formatCurrency(val)}}
      </ng-template></igx-column>
      <igx-column [field]="'Low(D)'" [sortable]="true" [width]="'130px'" dataType="number">
        <ng-template igxCell let-column let-val #lowD>
          {{formatCurrency(val)}}
        </ng-template>
      </igx-column>
      <igx-column [field]="'High(Y)'" [sortable]="true" [width]="'130px'" dataType="number">
        <ng-template igxCell let-column let-val #highY>
          {{formatCurrency(val)}}
        </ng-template>
      </igx-column>
      <igx-column [field]="'Low(Y)'" [sortable]="true" [width]="'130px'" dataType="number">
        <ng-template igxCell let-column let-val #lowY>
          {{formatCurrency(val)}}
        </ng-template>
      </igx-column>
      <igx-column [field]="'Start(Y)'" [sortable]="true" [width]="'130px'" dataType="number">
        <ng-template igxCell let-column let-val #startY>
          {{formatCurrency(val)}}
        </ng-template>
      </igx-column>
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

.switches {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1 0 0%;
    min-width: 100%;
    padding-right: 20px;
    font-size: 0.9rem;
    margin: 10px;

    >button {
        margin-right: 10px;
    }
}
```## Limitations- [`getState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#getstate) method uses JSON.stringify() method to convert the original objects to a JSON string. JSON.stringify() does not support Functions, thats why the [`IgxGridState`] directive will ignore the columns [`formatter`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#formatter), [`filters`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#filters), [`summaries`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#summaries), [`sortStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#sortstrategy), [`cellClasses`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#cellClasses), [`cellStyles`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#cellstyles), [`headerTemplate`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#headerTemplate) and [`bodyTemplate`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#bodyTemplate) properties.<div class="divider--half"></div>## API References- [IgxGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)- [IgxGridStateDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html)## Additional Resources<div class="divider--half"></div>- [Grid overview](grid.md)- [Paging](paging.md)- [Filtering](filtering.md)- [Sorting](sorting.md)- [Selection](selection.md)


