---
_tocName: State Persistence
_premium: true
---
---title: Angular Pivot Grid State Persistence - Ignite UI for Angular_description: Easily save and restore the grid state, using our comprehensive Ignite UI toolset for Angular. Learn how to restore configuration, explore usage, and see demos!_keywords: state persistence, ignite ui for angular, infragistics_license: commercial_canonicalLink: grid/state-persistence---# Angular Pivot Grid State PersistenceТhe igxGridState directive allows developers to easily save and restore the grid state. When the [`IgxGridState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html) directive is applied on the grid, it exposes the [`getState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#getState) and [`setState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#setState) methods that developers can use to achieve state persistence in any scenario.## Supported Features[`IgxGridState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html) directive supports saving and restoring the state of the following features:- `Sorting`- `Filtering`- `Cell Selection`- `Row Selection`- `Column Selection`- `Expansion`- `Pivot Configuration`
  - Pivot Configuration properties defined by the [`IPivotConfiguration`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ipivotconfiguration.html) interface.
  - Pivot Dimension and Value functions are restored using application level code, see [Restoring Pivot Configuration](state-persistence.md#restoring-pivot-configuration) section.
  - Pivot Row and Column strategies are also restored using application level code, see [Restoring Pivot Strategies](state-persistence.md#restoring-pivot-strategies) section.>[!NOTE]> The `Row Selection`  feature requires the [`primaryKey`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridComponent.html#primaryKey) property to be set, so it can be stored/restored correctly.## Usage[`getState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#getState) - This method returns the grid state in a serialized JSON string, so developers can just take it and save it on any data storage (database, cloud, browser localStorage, etc). The method accepts first optional parameter `serialize`, which determines whether [`getState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#getState) will return an [`IGridState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igridstate.html) object or a serialized JSON string.The developer may choose to get only the state for a certain feature/features, by passing in the feature name, or an array with feature names as a second argument.```typescript// get all features` state in a serialized JSON stringconst gridState = state.getState();// get an `IGridState` object, containing all features original state objects, as returned by the grid public APIconst gridState: IGridState = state.getState(false);// get the sorting and filtering expressionsconst sortingFilteringStates: IGridState = state.getState(false, ['sorting', 'filtering']);```[`setState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#setState) - The [`setState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#setState) method accepts the serialized JSON string or [`IGridState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igridstate.html) object as argument and will restore the state of each feature found in the object/JSON string.```typescriptstate.setState(gridState);state.setState(sortingFilteringStates)````options` - The [`options`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#options) object implements the [`IGridStateOptions`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igridstateoptions.html) interface, i.e. for every key, which is the name of a certain feature, there is the boolean value indicating if this feature state will be tracked. [`getState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#getState) method will not put the state of these features in the returned value and [`setState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#setState) method will not restore state for it.```typescriptpublic options =  { cellSelection: false; sorting: false; }``````html<igx-pivot-grid [igxGridState]="options"></igx-pivot-grid>```The simple to use single-point API's allows to achieve a full state persistence functionality in just a few lines of code. **Copy paste the code from below** - it will save the grid state in the browser `sessionStorage` object every time the user leaves the current page. Whenever the user returns to main page, the grid state will be restored. No more need to configure those complex advanced filtering and sorting expressions every time to get the data you want - do it once and have the code from below do the rest for your users:```typescript// app.component.ts@ViewChild(IgxGridStateDirective, { static: true })public state!: IgxGridStateDirective;public ngOnInit() {
    this.router.events.pipe(take(1)).subscribe((event: NavigationStart) => {
        this.saveGridState();
    });}public ngAfterViewInit() {
    this.restoreGridState();}public saveGridState() {
    const state = this.state.getState() as string;
    window.sessionStorage.setItem('grid1-state', state);}public restoreGridState() {
    const state = window.sessionStorage.getItem('grid1-state');
    this.state.setState(state);}```## Restoring Pivot Configuration[`IgxGridState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html) will not persist pivot dimension functions, value formatters, etc. by default (see [`limitations`](state-persistence.md#limitations)). Restoring any of these can be achieved with code on application level. The `IgxPivotGrid` exposes two events which can be used to set back any custom functions you have in the configuration: [`dimensionInit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpivotgridcomponent.html#dimensionInit) and [`valueInit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpivotgridcomponent.html#valueInit). Let's show how to do this:- Assign event handlers for the `dimensionInit` and `valueInit` events:```html<igx-pivot-grid #grid1 [data]="data" [pivotConfiguration]="pivotConfig" [igxGridState]="options"
    (valueInit)='onValueInit($event)' (dimensionInit)='onDimensionInit($event)'></igx-pivot-grid>```> The [`dimensionInit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpivotgridcomponent.html#dimensionInit) and [`valueInit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpivotgridcomponent.html#valueInit) events are emitted for each value and dimension defined in the [`pivotConfiguration`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpivotgridcomponent.html#pivotConfiguration) property.- In the `valueInit` event handler set all custom aggregators, formatters and styles:```typescriptpublic onValueInit(value: IPivotValue) {
    // Needed only for custom aggregators, formatter or styles.
    if (value.member === 'AmountofSale') {
        value.aggregate.aggregator = IgxTotalSaleAggregate.totalSale;
        value.aggregateList?.forEach((aggr: IPivotAggregator) => {
            switch (aggr.key) {
                case 'SUM':
                    aggr.aggregator = IgxTotalSaleAggregate.totalSale;
                    break;
                case 'MIN':
                    aggr.aggregator = IgxTotalSaleAggregate.totalMin;
                    break;
                case 'MAX':
                    aggr.aggregator = IgxTotalSaleAggregate.totalMax;
                    break;
            }
        });
    } else if (value.member === 'Value') {
        value.formatter = (value) => value ? '$' + parseFloat(value).toFixed(3) : undefined;
        value.styles.upFontValue = (rowData: any, columnKey: any): boolean => parseFloat(rowData.aggregationValues.get(columnKey.field)) > 150
        value.styles.downFontValue = (rowData: any, columnKey: any): boolean => parseFloat(rowData.aggregationValues.get(columnKey.field)) <= 150;
    }}```- In the `dimensionInit` event handler set all custom `memberFunction` implementations:```typescriptpublic onDimensionInit(dim: IPivotDimension) {
    switch (dim.memberName) {
        case 'AllProducts':
            dim.memberFunction = () => 'All Products';
            break;
        case 'ProductCategory':
            dim.memberFunction = (data) => data.Product.Name;
            break;
        case 'City':
            dim.memberFunction = (data) => data.Seller.City;
            break;
        case 'SellerName':
            dim.memberFunction = (data) => data.Seller.Name;
            break;
    }}``````typescript
import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren, inject } from "@angular/core";
import { NavigationStart, Router, RouterLink } from "@angular/router";

import { GridFeatures, IGridState, IGridStateOptions, IPivotAggregator, IPivotConfiguration, IPivotDimension, IPivotValue, IgxGridStateDirective, IgxPivotDateDimension, IgxPivotNumericAggregate, PivotAggregation } from 'igniteui-angular/grids/core';
import { IgxPivotGridComponent } from 'igniteui-angular/grids/pivot-grid';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { GridColumnDataType } from 'igniteui-angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { take } from "rxjs/operators";
import { SALES_DATA } from "../../data/dataToAnalyze";


export class IgxTotalSaleAggregate {
    public static totalSale: PivotAggregation = (members, data: any) =>
        data.reduce((accumulator, value) => accumulator + value.Product.UnitPrice * value.NumberOfUnits, 0);

    public static totalMin: PivotAggregation = (members, data: any) => {
        let min = 0;
        if (data.length === 1) {
            min = data[0].Product.UnitPrice * data[0].NumberOfUnits;
        } else if (data.length > 1) {
            const mappedData = data.map(x => x.Product.UnitPrice * x.NumberOfUnits);
            min = mappedData.reduce((a, b) => Math.min(a, b));
        }
        return min;
    };

    public static totalMax: PivotAggregation = (members, data: any) => {
        let max = 0;
        if (data.length === 1) {
            max = data[0].Product.UnitPrice * data[0].NumberOfUnits;
        } else if (data.length > 1) {
            const mappedData = data.map(x => x.Product.UnitPrice * x.NumberOfUnits);
            max = mappedData.reduce((a, b) => Math.max(a, b));
        }
        return max;
    };
}

@Component({
    selector: 'app-pivot-grid-state-persistence-sample',
    styleUrls: ['./pivot-grid-state-persistence-sample.component.scss'],
    templateUrl: './pivot-grid-state-persistence-sample.component.html',
    imports: [IgxButtonDirective, IgxIconComponent, RouterLink, IgxCheckboxComponent, IgxPivotGridComponent, IgxGridStateDirective]
})
export class PivotGridStatePersistenceSampleComponent implements OnInit, AfterViewInit {
    private router = inject(Router);

    @ViewChild(IgxGridStateDirective, { static: true }) public state: IgxGridStateDirective;
    @ViewChild(IgxPivotGridComponent, { static: true }) public grid: IgxPivotGridComponent;
    @ViewChildren(IgxCheckboxComponent) public checkboxes: QueryList<IgxCheckboxComponent>;

    public data = SALES_DATA;
    public serialize = true;
    public stateKey = 'grid-state';

    public features: { key: GridFeatures; shortName: string }[] = [
        { key: 'cellSelection', shortName: 'Cell Sel' },
        { key: 'columnSelection', shortName: 'Cols Sel' },
        { key: 'expansion', shortName: 'Expansion' },
        { key: 'filtering', shortName: 'Filt' },
        { key: 'sorting', shortName: 'Sorting' },
        { key: 'pivotConfiguration', shortName: 'Pivot Configuration' }
    ];

    public options: IGridStateOptions = {
        cellSelection: true,
        filtering: true,
        sorting: true,
        expansion: true,
        columnSelection: true,
        pivotConfiguration: true
    };

    public pivotConfig: IPivotConfiguration = {
        columns: [
            new IgxPivotDateDimension(
                {
                    memberName: 'Date',
                    enabled: true
                },
                {
                    months: false,
                    quarters: true,
                    fullDate: false
                }
            )
        ],
        rows: [
            {
                memberFunction: () => 'All Products',
                memberName: 'AllProducts',
                enabled: true,
                width: "150px",
                childLevel: {
                    memberFunction: (data) => data.Product.Name,
                    memberName: 'ProductCategory',
                    enabled: true
                }
            },
            {
                memberName: 'City',
                width: "150px",
                memberFunction: (data) => data.Seller.City,
                enabled: true
            }
        ],
        values: [
            {
                member: 'Value',
                aggregate: {
                    key: 'SUM',
                    aggregator: IgxPivotNumericAggregate.sum,
                    label: 'Sum'
                },
                aggregateList: [{
                    key: 'SUM',
                    aggregator: IgxPivotNumericAggregate.sum,
                    label: 'Sum'
                }],
                enabled: true,
                dataType: GridColumnDataType.Number,
                styles: {
                    downFontValue: (rowData: any, columnKey: any): boolean => parseFloat(rowData.aggregationValues.get(columnKey.field)) <= 150,
                    upFontValue: (rowData: any, columnKey: any): boolean => parseFloat(rowData.aggregationValues.get(columnKey.field)) > 150
                },
                formatter: (value) => value ? '$' + parseFloat(value).toFixed(3) : undefined
            },
            {
                member: 'AmountofSale',
                displayName: 'Amount of Sale',
                aggregate: {
                    key: 'SUM',
                    aggregator: IgxTotalSaleAggregate.totalSale,
                    label: 'Sum of Sale'
                },
                aggregateList: [{
                    key: 'SUM',
                    aggregator: IgxTotalSaleAggregate.totalSale,
                    label: 'Sum of Sale'
                }, {
                    key: 'MIN',
                    aggregator: IgxTotalSaleAggregate.totalMin,
                    label: 'Minimum of Sale'
                }, {
                    key: 'MAX',
                    aggregator: IgxTotalSaleAggregate.totalMax,
                    label: 'Maximum of Sale'
                }],
                enabled: true,
                dataType: GridColumnDataType.Currency
            }
        ],
        filters: [
            {
                memberName: 'SellerName',
                memberFunction: (data) => data.Seller.Name,
                enabled: true
            }
        ]
    };

    public ngOnInit(): void {
        this.router.events.pipe(take(1)).subscribe((event: NavigationStart) => {
            this.saveGridState();
        });
    }

    public ngAfterViewInit(): void {
        this.restoreGridState();
    }

    public saveGridState() {
        const state = this.state.getState(this.serialize);
        if (typeof state === 'string') {
            window.sessionStorage.setItem(this.stateKey, state);
        } else {
            window.sessionStorage.setItem(this.stateKey, JSON.stringify(state));
        }
    }

    public restoreGridState() {
        const state = window.sessionStorage.getItem(this.stateKey);
        if (state) {
            this.state.setState(state);
        }
    }

    public restoreFeature(stateDirective: IgxGridStateDirective, feature: string) {
        const state = this.getFeatureState(this.stateKey, feature);
        if (state) {
            const featureState = {} as IGridState;
            featureState[feature] = state;
            stateDirective.setState(featureState);
        }
    }

    public getFeatureState(stateKey: string, feature: string) {
        let state = window.sessionStorage.getItem(stateKey);
        state = state ? JSON.parse(state)[feature] : null;
        return state;
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
        window.sessionStorage.removeItem(this.stateKey);
    }

    public reloadPage() {
        window.location.reload();
    }

    public onValueInit(value: IPivotValue) {
        // Needed only for custom aggregators, formatter or styles.
        if (value.member === 'AmountofSale') {
            value.aggregate.aggregator = IgxTotalSaleAggregate.totalSale;
            value.aggregateList?.forEach((aggr: IPivotAggregator) => {
                switch (aggr.key) {
                    case 'SUM':
                        aggr.aggregator = IgxTotalSaleAggregate.totalSale;
                        break;
                    case 'MIN':
                        aggr.aggregator = IgxTotalSaleAggregate.totalMin;
                        break;
                    case 'MAX':
                        aggr.aggregator = IgxTotalSaleAggregate.totalMax;
                        break;
                }
            });
        } else if (value.member === 'Value') {
            value.formatter = (value) => value ? '$' + parseFloat(value).toFixed(3) : undefined;
            value.styles.upFontValue = (rowData: any, columnKey: any): boolean => parseFloat(rowData.aggregationValues.get(columnKey.field)) > 150
            value.styles.downFontValue = (rowData: any, columnKey: any): boolean => parseFloat(rowData.aggregationValues.get(columnKey.field)) <= 150;
        }
    }

    public onDimensionInit(dim: IPivotDimension) {
        switch (dim.memberName) {
            case 'AllProducts':
                dim.memberFunction = () => 'All Products';
                break;
            case 'ProductCategory':
                dim.memberFunction = (data) => data.Product.Name;
                break;
            case 'City':
                dim.memberFunction = (data) => data.Seller.City;
                break;
            case 'SellerName':
                dim.memberFunction = (data) => data.Seller.Name;
                break;
        }
    }
}
```
```html
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
    <button igxButton="contained" [routerLink]="['../pivot-state-about']">
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
      <li>Clicking the SAVE button or leaving the page <a
        [routerLink]="['../pivot-state-about']"><strong>here</strong></a> will save grid state to
      localStorage.</li>
      <li>Use the control buttons to SAVE / RESTORE / DELETE / grid state or LEAVE the page.</li>
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

<igx-pivot-grid #grid1 [data]="data" [pivotConfiguration]="pivotConfig" [rowSelection]="'single'" [height]="'600px'"
  [superCompactMode]="true" [defaultExpandState]='true' [columnSelection]="'single'" [igxGridState]="options"
  (valueInit)='onValueInit($event)' (dimensionInit)='onDimensionInit($event)'>
</igx-pivot-grid>
```
```scss
:host {
    padding: 8px;
    display: flex;
    flex-direction: column;

    ::ng-deep {
        .upFontValue {
            color: var(--ig-success-500);
        }

        .downFontValue {
            color: var(--ig-error-500);
        }
    }

}

igx-pivot-grid {
    flex: 1;
}

.pivot-container {
    display: flex;
    align-items: flex-start;
    flex: 1 1 auto;
    order: 0;
}

.controls-holder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
}

.switches {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1 0 0%;
    min-width: 100%;
    padding-right: 20px;
    font-size: 0.9rem;
    margin-top: 0;

    >button {
        margin-right: 10px;
    }
}

.control-item {
    display: block;
    padding: 8px 0;

    >span {
        cursor: pointer;
    }

    margin-right: 10px;
}
```## Restoring Pivot Strategies[`IgxGridState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html) will not persist neither remote pivot operations nor custom dimension strategies (For further information see [Pivot Grid Remote Operations](pivot-grid-custom.md) sample) by default (see [`limitations`](state-persistence.md#limitations)). Restoring any of these can be achieved with code on application level. The `IgxGridState` exposes an event called [`stateParsed`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#stateParsed) which can be used to additionally modify the grid state before it gets applied. Let's show how to do this:> [`stateParsed`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective) is only emitted when we are using [`setState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#setState) with string argument.- Set custom sorting strategy and custom pivot column and row dimension strategies:```html<igx-pivot-grid #grid [data]="data" [pivotConfiguration]="pivotConfigHierarchy" [defaultExpandState]='true'
    [igxGridState]="options" [sortStrategy]="customStrategy" [pivotUI]='{ showConfiguration: false }' [superCompactMode]="true" [height]="'500px'"></igx-pivot-grid>``````typescript@ViewChild(IgxGridStateDirective, { static: true })public state!: IgxGridStateDirective;public customStrategy = NoopSortingStrategy.instance();public options: IGridStateOptions = {...};public pivotConfigHierarchy: IPivotConfiguration = {
    columnStrategy: NoopPivotDimensionsStrategy.instance(),
    rowStrategy: NoopPivotDimensionsStrategy.instance(),
    columns: [...],
    rows: [...],
    values: [...],
    filters: [...]};```- Restoring the state from the `sessionStorage` and applying the custom strategies looks like the following:```typescriptpublic restoreState() {
    const state = window.sessionStorage.getItem('grid-state');
    this.state.stateParsed.pipe(take(1)).subscribe(parsedState => {
        parsedState.sorting.forEach(x => x.strategy = NoopSortingStrategy.instance());
        parsedState.pivotConfiguration.rowStrategy = NoopPivotDimensionsStrategy.instance();
        parsedState.pivotConfiguration.columnStrategy = NoopPivotDimensionsStrategy.instance();
    });
    this.state.setState(state as string);}``````typescript
import { AfterViewInit, Component, ViewChild, inject } from "@angular/core";
import { IGridState, IGridStateOptions, IPivotConfiguration, IgxGridStateDirective, IgxPivotNumericAggregate, NoopPivotDimensionsStrategy } from 'igniteui-angular/grids/core';
import { IgxPivotGridComponent } from 'igniteui-angular/grids/pivot-grid';
import { NoopSortingStrategy } from 'igniteui-angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { PivotDataService } from "../../services/pivotRemoteData.service";
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-pivot-grid-noop-persistence-sample',
    styleUrls: ['./pivot-grid-noop-persistence-sample.component.scss'],
    templateUrl: './pivot-grid-noop-persistence-sample.component.html',
    providers: [PivotDataService],
    imports: [IgxButtonDirective, IgxIconComponent, IgxPivotGridComponent, IgxGridStateDirective]
})
export class PivotGridNoopPersistenceSampleComponent implements AfterViewInit {
    private _remoteService = inject(PivotDataService);

    @ViewChild('grid', { static: true })
    public grid: IgxPivotGridComponent;

    @ViewChild(IgxGridStateDirective, { static: true })
    public state!: IgxGridStateDirective;

    public customStrategy = NoopSortingStrategy.instance();
    public data: any[];
    public options: IGridStateOptions = {
        cellSelection: true,
        rowSelection: true,
        filtering: true,
        sorting: true,
        expansion: true,
        columnSelection: true,
        pivotConfiguration: true
    };
    public pivotConfigHierarchy: IPivotConfiguration = {
        columnStrategy: NoopPivotDimensionsStrategy.instance(),
        rowStrategy: NoopPivotDimensionsStrategy.instance(),
        columns: [
            {
                memberName: 'Country',
                enabled: true
            }
        ],
        rows: [
            {
                memberFunction: () => 'All',
                memberName: 'AllProducts',
                enabled: true,
                childLevel: {
                    memberFunction: (data) => data.ProductCategory,
                    memberName: 'ProductCategory',
                    enabled: true
                }
            },
            {
                memberName: 'AllSeller',
                memberFunction: () => 'All Sellers',
                enabled: true,
                childLevel: {
                    enabled: true,
                    memberName: 'SellerName'
                }
            }
        ],
        values: [
            {
                member: 'UnitsSold',
                aggregate: {
                    aggregator: IgxPivotNumericAggregate.sum,
                    key: 'sum',
                    label: 'Sum'
                },
                enabled: true,
                formatter: (value) => value ? value : 0
            }
        ],
        filters: null
    };

    ngAfterViewInit(): void {
        this.grid.isLoading = true;
        this._remoteService.getData().subscribe((data: any) => {
            this.grid.isLoading = false;
            this.data = data;
        });
    }

    public saveState() {
        const state = this.state.getState() as string;
        window.sessionStorage.setItem('grid-state', state);
    }

    public restoreState() {
        const state = window.sessionStorage.getItem('grid-state');
        this.state.stateParsed.pipe(take(1)).subscribe(parsedState => {
            parsedState.sorting.forEach(expression => expression.strategy = NoopSortingStrategy.instance());
            parsedState.pivotConfiguration.rowStrategy = NoopPivotDimensionsStrategy.instance();
            parsedState.pivotConfiguration.columnStrategy = NoopPivotDimensionsStrategy.instance();
        });
        this.state.setState(state as string);
    }

    public clearStorage() {
        window.sessionStorage.removeItem('grid-state');
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
</div>

<igx-pivot-grid #grid [data]="data" [pivotConfiguration]="pivotConfigHierarchy" [defaultExpandState]='true'
    [igxGridState]="options" [sortStrategy]="customStrategy" [pivotUI]='{ showConfiguration: false }' [superCompactMode]="true" [height]="'500px'">
</igx-pivot-grid>
```
```scss
:host {
    display: block;
    padding: 8px;
}

.switches {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1 0 0%;
    min-width: 100%;
    padding-right: 20px;
    font-size: 0.9rem;
    margin-top: 0;
    margin-bottom: 10px;

    >button {
        margin-right: 10px;
    }
}
```## Limitations- [`getState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html#getState) method uses JSON.stringify() method to convert the original objects to a JSON string. JSON.stringify() does not support Functions, thats why the [`IgxGridState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html) directive will ignore the pivot dimension [`memberFunction`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/IPivotDimension.html#memberFunction), pivot values [`member`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/IPivotValue.html#member), [`formatter`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/IPivotValue.html#formatter), custom [`aggregate`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/IPivotValue.html#aggregate) functions,
 [`styles`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/IPivotValue.html#styles) and pivot configuration strategies: [`columnStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ipivotconfiguration.html#columnStrategy) and [`rowStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ipivotconfiguration.html#rowStrategy).<div class="divider--half"></div>## API References- [IgxPivotGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpivotgridcomponent.html)- [IgxGridStateDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridstatedirective.html)## Additional Resources<div class="divider--half"></div>- [Pivot Grid Overview](pivot-grid.md)- [Pivot Grid Remote Operations](pivot-grid-custom.md)- [Pivot Grid Features](pivot-grid-features.md)

