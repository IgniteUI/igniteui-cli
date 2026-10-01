---
title: "Web Components Pivot Grid State Persistence - Ignite UI for Web Components"
description: Easily save and restore the grid state, using our comprehensive Ignite UI toolset for Web Components. Learn how to restore columns, explore usage, and see demos!
keywords: state persistence, Web Components, Ignite UI for Web Components, Infragistics
license: commercial
_canonicalLink: "grids/grid/state-persistence"
llms:
  description: "The Ignite UI for Web Components State Persistence in Web Components Pivot Grid allows developers to easily save and restore the grid state."
_componentKey: PivotGrid
_tocName: State Persistence
_premium: true
---
# Web Components Pivot Grid State Persistence

The Ignite UI for Web Components State Persistence in Web Components Pivot Grid allows developers to easily save and restore the grid state. When the [`IgcGridState`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent) is applied on the Web Components [`IgcPivotGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcPivotGridComponent), it exposes the [`IgcGridState.getState`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent&member=getState), [`IgcGridState.getStateAsString`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent&member=getStateAsString), [`IgcGridState.applyState`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent&member=applyState) and [`IgcGridState.applyStateFromString`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent&member=applyStateFromString) methods that developers can use to achieve state persistence in any scenario.

## Supported Features

[`IgcGridState`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent) supports saving and restoring the state of the following features:

- [`Sorting`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateInfo&member=sorting)
- [`Filtering`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateInfo&member=filtering)
- [`IgcPivotGrid.cellSelection`](mcp:get_api_reference?platform=webcomponents&component=IgcPivotGridComponent&member=cellSelection)
- [`IgcPivotGrid.columnSelection`](mcp:get_api_reference?platform=webcomponents&component=IgcPivotGridComponent&member=columnSelection)
- [`Expansion`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateInfo&member=expansion)
- [`IgcPivotConfiguration`](mcp:get_api_reference?platform=webcomponents&component=IgcPivotConfiguration)
  - Pivot Configuration properties defined by the [`IgcPivotConfiguration`](mcp:get_api_reference?platform=webcomponents&component=IgcPivotConfiguration) interface.
  - Pivot Dimension and Value functions are restored using application level code, see [Restoring Pivot Configuration](state-persistence.md#restoring-pivot-configuration) section.
  - Pivot Row and Column strategies are also restored using application level code, see [Restoring Pivot Strategies](state-persistence.md#restoring-pivot-strategies) section.

## Usage

The [`IgcGridState.getState`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent&member=getState) method returns the grid state in a [`IgcGridStateInfo`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateInfo) object, containing all the state info. Additional steps may be required in order to save it.

The [`IgcGridState.getStateAsString`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent&member=getStateAsString) returns a serialized JSON string, so developers can just take it and save it on any data storage (database, cloud, browser localStorage, etc).

The developer may choose to get only the state for a certain feature/features, by passing in an array with feature names as an argument. Empty array will result to using the default state options.

```html
<igc-pivot-grid id="grid">
    <igc-grid-state id="gridState"></igc-grid-state>
</igc-pivot-grid>
```

```typescript
var gridState = document.getElementById('gridState') as IgcGridStateComponent;

// get an `IgcGridStateInfo` object, containing all features original state objects, as returned by the grid public API
const state: IgcGridStateInfo = gridState.getState();

// get all features` state in a serialized JSON string
const stateString: string = gridState.getStateAsString();

// get the sorting and filtering expressions
const sortingFilteringStates: IgcGridStateInfo = gridState.getState(['sorting', 'filtering']);
```

[`IgcGridState.applyState`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent&member=applyState) - The method accepts a [`IgcGridStateInfo`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateInfo) object as argument and will restore the state of each feature found in the object or specified features as second argument.

[`IgcGridState.applyStateFromString`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent&member=applyStateFromString) - The method accepts a serialized JSON string as argument and will restore the state of each feature found in the JSON string or specified features as second argument.

```typescript
gridState.applyState(gridState);
gridState.applyStateFromString(gridStateString);
gridState.applyState(sortingFilteringStates)
```

The [`Options`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateBaseDirective&member=options) object implements the [`IgcGridStateOptions`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateOptions) interface, i.e. for every key, which is the name of a certain feature, there is the boolean value indicating if this feature state will be tracked. [`IgcGridState.getState`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent&member=getState)/[`IgcGridState.getStateAsString`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent&member=getStateAsString) methods will not put the state of these features in the returned value and [`IgcGridState.applyState`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent&member=applyState)/[`IgcGridState.applyStateFromString`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent&member=applyStateFromString) methods will not restore state for them.

```typescript
gridState.options = { cellSelection: false, sorting: false };
```

The simple to use single-point API's allows to achieve a full state persistence functionality in just a few lines of code. **Copy paste the code from below** - it will save the grid state in the browser `LocalStorage` object every time the user leaves the current page. Whenever the user returns to main page, the grid state will be restored. No more need to configure those complex advanced filtering and sorting expressions every time to get the data you want - do it once and have the code from below do the rest for your users:

```typescript
constructor() {
    window.addEventListener("load", () => { this.restoreGridState(); });
    window.addEventListener("beforeunload", () => { this.saveGridState(); });
}

// Using methods that work with IgcGridStateInfo object.
public saveGridState() {
    const state = this.gridState.getState();
    window.localStorage.setItem('grid-state', JSON.stringify(state));
}

public restoreGridState() {
    const state = window.localStorage.getItem('grid-state');
    if (state) {
        this.gridState.applyState(JSON.parse(state));
    }
}

// Or using string alternative methods.
public saveGridStateString() {
    const state = this.gridState.getStateAsString();
    window.localStorage.setItem('grid-state', state);
}

public restoreGridStateString() {
    const state = window.localStorage.getItem('grid-state');
    if (state) {
        this.gridState.applyStateFromString(state);
    }
}
```

## Restoring Pivot Configuration

[`IgcGridState`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent) will not persist pivot dimension functions, value formatters, etc. by default (see [limitations](state-persistence.md#limitations)). Restoring any of these can be achieved with code on application level. The [`IgcPivotGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcPivotGridComponent) exposes two events which can be used to set back any custom functions you have in the configuration: `DimensionInit` and `ValueInit`. Let's show how to do this:

- Assign event handlers for the `DimensionInit` and `ValueInit` events:

```html
<igc-pivot-grid id="grid">
    <igc-grid-state id="gridState"></igc-grid-state>
</igc-pivot-grid>
```

```ts
 constructor() {
    var grid = document.getElementById('grid') as IgcPivotGridComponent;
    grid.pivotConfiguration = this.pivotConfiguration;
    grid.addEventListener("valueInit", (ev:any) => this.onValueInit(ev));
    grid.addEventListener("dimensionInit", (ev:any) => this.onDimensionInit(ev));
}
```

> The `DimensionInit` and `ValueInit` events are emitted for each value and dimension defined in the [`IgcPivotGrid.pivotConfiguration`](mcp:get_api_reference?platform=webcomponents&component=IgcPivotGridComponent&member=pivotConfiguration) property.

- In the `ValueInit` event handler set all custom aggregators, formatters and styles:

```ts
public onValueInit(event: any) {
    const value: IgcPivotValue = event.detail;
    if (value.member === 'AmountofSale') {
        value.aggregate.aggregator = this.totalSale;
        value.aggregateList?.forEach((aggr: any) => {
            switch (aggr.key) {
                case 'SUM':
                    aggr.aggregator = this.totalSale;
                    break;
                case 'MIN':
                    aggr.aggregator = this.totalMin;
                    break;
                case 'MAX':
                    aggr.aggregator = this.totalMax;
                    break;
            }
        });
    } else if (value.member === 'Value') {
        value.formatter = (value: any) => value ? '$' + parseFloat(value).toFixed(3) : undefined;
        value.styles.upFontValue = (rowData: any, columnKey: any): boolean => parseFloat(rowData.aggregationValues.get(columnKey.field)) > 150
        value.styles.downFontValue = (rowData: any, columnKey: any): boolean => parseFloat(rowData.aggregationValues.get(columnKey.field)) <= 150;
    }
}
```

- In the `DimensionInit` event handler set all custom [`MemberFunction`](mcp:get_api_reference?platform=webcomponents&component=IgcPivotDimension&member=memberFunction) implementations:

```ts
public onDimensionInit(event: any) {
    const dim: IgcPivotDimension = event.detail;
    switch (dim.memberName) {
        case 'AllProducts':
            dim.memberFunction = () => 'All Products';
            break;
        case 'ProductCategory':
            dim.memberFunction = (data: any) => data.ProductName;
            break;
        case 'City':
            dim.memberFunction = (data: any) => data.City;
            break;
        case 'SellerName':
            dim.memberFunction = (data: any) => data.SellerName;
            break;
    }
}
```

## Demo

```typescript
export class PivotDataFlatItem {
    public constructor(init: Partial<PivotDataFlatItem>) {
        Object.assign(this, init);
    }

    public ProductName: string;
    public ProductUnitPrice: number;
    public SellerName: string;
    public SellerCity: string;
    public Date: string;
    public Value: number;
    public NumberOfUnits: number;

}
export class PivotDataFlat extends Array<PivotDataFlatItem> {
    public constructor(items: Array<PivotDataFlatItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new PivotDataFlatItem(
                {
                    ProductName: `Clothing`,
                    ProductUnitPrice: 12.8,
                    SellerName: `Stanley Brooker`,
                    SellerCity: `Seattle`,
                    Date: `2007-01-01T00:00:00`,
                    Value: 94.4,
                    NumberOfUnits: 282
                }),
                new PivotDataFlatItem(
                {
                    ProductName: `Clothing`,
                    ProductUnitPrice: 49.6,
                    SellerName: `Elisa Longbottom`,
                    SellerCity: `Sofia`,
                    Date: `2007-01-05T00:00:00`,
                    Value: 70.8,
                    NumberOfUnits: 296
                }),
                new PivotDataFlatItem(
                {
                    ProductName: `Bikes`,
                    ProductUnitPrice: 3.6,
                    SellerName: `Lydia Burson`,
                    SellerCity: `Tokyo`,
                    Date: `2007-01-06T00:00:00`,
                    Value: 35.8,
                    NumberOfUnits: 68
                }),
                // ... 497 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
.horizontal {
    gap: 10px;
    flex-basis: fit-content;
    flex-wrap: wrap;
}
.sampleContainer {
  padding: 0.5rem
}

.upFontValue {
  color: hsla(var(--ig-success-500));
}

.downFontValue {
  color: hsla(var(--ig-error-500));
}
```

## Restoring Pivot Strategies

[`IgcGridState`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent) will not persist neither remote pivot operations nor custom dimension strategies.
 Restoring any of these can be achieved with code on application level. The [`IgcGridState`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent) exposes an event called `StateParsed` which can be used to additionally modify the grid state before it gets applied. Let's show how to do this:

> `StateParsed` is only emitted when we are using [`IgcPivotGrid.setState`](mcp:get_api_reference?platform=webcomponents&component=IgcPivotGridComponent&member=setState) with string argument.

- Set custom sorting strategy and custom pivot column and row dimension strategies:

```html
    <igc-pivot-grid default-expand-state="true" super-compact-mode="true" show-pivot-configuration-ui="false"
        height="600px" id="grid">
        <igc-grid-state id="gridState"></igc-grid-state>
    </igc-pivot-grid>
```

```ts
public pivotConfiguration: IgcPivotConfiguration = {
    columnStrategy: IgcNoopPivotDimensionsStrategy.instance(),
    rowStrategy: IgcNoopPivotDimensionsStrategy.instance(),
    columns: [...],
    rows: [...],
    values: [...],
    filters: [...]
};
private gridState: IgcGridStateComponent;

constructor() {
    var grid = document.getElementById("grid") as IgcPivotGridComponent;
    this.gridState = document.getElementById('gridState') as IgcGridStateComponent;
    grid.pivotConfiguration = this.pivotConfiguration;
    PivotNoopData.getData().then((value) => {
        grid.data = value;
    });
    this.gridState.addEventListener('stateParsed', (ev:any) => this.stateParsedHandler(ev) );
}
```

- Restoring the state from the `LocalStorage` and applying the custom strategies looks like the following:

```ts
public restoreGridState() {
    const state = window.localStorage.getItem(this.stateKey);
    if (state) {
        this.gridState.applyStateFromString(state);
    }
}

public stateParsedHandler(ev: any) {
    const parsedState = ev.detail;
    parsedState.pivotConfiguration.rowStrategy = IgcNoopPivotDimensionsStrategy.instance();
    parsedState.pivotConfiguration.columnStrategy = IgcNoopPivotDimensionsStrategy.instance();
}

```

```typescript
export class PivotNoopData extends Array<any> {
    public constructor() {
        super();
        this.push({
            'AllProducts': 'All', 'USA': 1159, 'Uruguay': 1274, 'Bulgaria': 1012, 'France': 1301, 'Germany': 570, 'Austria': 990,
            'AllSeller_records': [
                {
                    'AllSeller': 'All Sellers',
                    'USA': 1159, 'Uruguay': 1274, 'Bulgaria': 1012, 'France': 1301, 'Germany': 570, 'Austria': 990,
                    'AllSeller_records': [
                        { 'SellerName': 'David', 'USA': 293, 'France': 240, 'Austria': 270, 'Uruguay': 130, 'Bulgaria': 110 },
                        { 'SellerName': 'Lydia', 'Germany': 120, 'Uruguay': 68, 'Austria': 250, 'France': 170, 'Bulgaria': 220 },
                        { 'SellerName': 'Stanley', 'Austria': 400, 'Germany': 240, 'Bulgaria': 282, ' USA': 330 },
                        { 'SellerName': 'Elisa', 'USA': 296, 'Uruguay': 530, 'France': 430, 'Germany': 230 },
                        { 'SellerName': 'John', 'France': 361, 'USA': 240, 'Bulgaria': 190, 'Uruguay': 90 },
                        { 'SellerName': 'Larry', 'Uruguay': 456, 'France': 100, 'Austria': 70, 'Bulgaria': 210 }
                    ]
                }
            ],
            'AllProducts_records': [
                {
                    'ProductCategory': 'Accessories',
                    'USA': 623,
                    'France': 100,
                    'Austria': 400,
                    'Bulgaria': 210,
                    'AllSeller_records': [
                        {
                            'AllSeller': 'All Sellers', 'USA': 623, 'France': 100, 'Austria': 400, 'Bulgaria': 210,
                            'AllSeller_records': [
                                { 'SellerName': 'David', 'USA': 293 },
                                { 'SellerName': 'Stanley', 'USA': 330, 'Austria': 400 },
                                { 'SellerName': 'Larry', 'France': 100, 'Bulgaria': 210 }
                            ]
                        }
                    ]
                },
                {
                    'ProductCategory': 'Bikes',
                    'Uruguay': 198,
                    'France': 531,
                    'Germany': 120,
                    'Austria': 270,
                    'Bulgaria': 190,
                    'AllSeller_records': [
                        {
                            'AllSeller': 'All Sellers',
                            'Uruguay': 198,
                            'France': 531,
                            'Germany': 120,
                            'Austria': 270,
                            'Bulgaria': 190,
                            'AllSeller_records': [
                                { 'SellerName': 'Lydia', 'Uruguay': 68, 'Germany': 120, 'France': 170 },
                                { 'SellerName': 'John', 'France': 361, 'Bulgaria': 190 },
                                { 'SellerName': 'David', 'Austria': 270, 'Uruguay': 130 }
                            ]
                        }
                    ]
                },
                {
                    'ProductCategory': 'Clothing',
                    'USA': 296,
                    'Uruguay': 986,
                    'Bulgaria': 502,
                    'Germany': 470,
                    'France': 430,
                    'Austria': 70,
                    'AllSeller_records': [
                        {
                            'AllSeller': 'All Sellers', 'USA': 296, 'Uruguay': 986, 'Bulgaria': 502, 'Germany': 470, 'France': 430, 'Austria': 70,
                            'AllSeller_records': [
                                { 'SellerName': 'Elisa', 'USA': 296, 'Uruguay': 530, 'France': 430, 'Germany': 230 },
                                { 'SellerName': 'Lydia', 'Bulgaria': 220 },
                                { 'SellerName': 'Larry', 'Uruguay': 456, 'Austria': 70 },
                                { 'SellerName': 'Stanley', 'Germany': 240, 'Bulgaria': 282 }
                            ]
                        }
                    ]
                },
                {
                    'ProductCategory': 'Components',
                    'USA': 240,
                    'France': 240,
                    'Austria': 250,
                    'Bulgaria': 110,
                    'Uruguay': 90,
                    'AllSeller_records': [
                        {
                            'AllSeller': 'All Sellers',
                            'USA': 240,
                            'France': 240,
                            'Austria': 250,
                            'Bulgaria': 110,
                            'Uruguay': 90,
                            'AllSeller_records': [
                                { 'SellerName': 'John', 'USA': 240, 'Uruguay': 90 },
                                { 'SellerName': 'David', 'France': 240, 'Bulgaria': 110 },
                                { 'SellerName': 'Lydia', 'Austria': 250 }
                            ]
                        }
                    ]
                }
            ]
        });
    }

    public static getData(): Promise<any> {
        return new Promise(resolve => setTimeout(() => {
            resolve(new PivotNoopData());
        }, 1000));
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
.horizontal {
    gap: 1rem;
    padding: 0.5rem
  }
```

## Limitations

- [`IgcGridState.getState`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent&member=getState) method uses JSON.stringify() method to convert the original objects to a JSON string. JSON.stringify() does not support Functions, thats why the [`IgcGridState`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent) directive will ignore the pivot dimension [`MemberFunction`](mcp:get_api_reference?platform=webcomponents&component=IgcPivotDimension&member=memberFunction), pivot values [`Member`](mcp:get_api_reference?platform=webcomponents&component=IgcPivotValue&member=member), [`Formatter`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=formatter), custom [`Aggregate`](mcp:get_api_reference?platform=webcomponents&component=IgcPivotValue&member=aggregate) functions, [`Styles`](mcp:get_api_reference?platform=webcomponents&component=IgcPivotValue&member=styles) and pivot configuration strategies: [`ColumnStrategy`](mcp:get_api_reference?platform=webcomponents&component=IgcPivotConfiguration&member=columnStrategy) and [`RowStrategy`](mcp:get_api_reference?platform=webcomponents&component=IgcPivotConfiguration&member=rowStrategy).

- [Pivot Grid Remote Operations](remote-operations.md)
