---
title: React Pivot Grid State Persistence - Ignite UI for React
_description: Easily save and restore the grid state, using our comprehensive Ignite UI toolset for React. Learn how to restore columns, explore usage, and see demos!
_keywords: state persistence, React, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["GridStateBaseDirective", "GridState", "PivotConfiguration", "PivotDimension", "PivotValue"]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/state-persistence
_tocName: State Persistence
_premium: true
---

# React Pivot Grid State Persistence

<!-- React, WebComponents -->

The Ignite UI for React State Persistence in React Pivot Grid allows developers to easily save and restore the grid state. When the [`IgrGridState`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html) is applied on the React [`IgrPivotGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotgrid.html), it exposes the [`getState`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html#getState), [`getStateAsString`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html#getStateAsString), [`applyState`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html#applyState) and [`applyStateFromString`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html#applyStateFromString) methods that developers can use to achieve state persistence in any scenario.

<!-- end: React, WebComponents -->

## Supported Features

[`IgrGridState`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html) supports saving and restoring the state of the following features:

<!-- ComponentStart: PivotGrid -->

<!-- Blazor, React -->

- `Sorting`
- `Filtering`
- `CellSelection`
- `ColumnSelection`
- `Expansion`
- [`IgrPivotConfiguration`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotconfiguration.html)
  - Pivot Configuration properties defined by the `IPivotConfiguration` interface.
  - Pivot Dimension and Value functions are restored using application level code, see [Restoring Pivot Configuration](state-persistence.md#restoring-pivot-configuration) section.

<!-- end: Blazor, React -->

<!-- ComponentEnd: PivotGrid -->

## Usage

<!-- React, WebComponents -->

The [`getState`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html#getState) method returns the grid state in a [`IgrGridStateInfo`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstateinfo.html) object, containing all the state info. Additional steps may be required in order to save it.

<!-- end: React, WebComponents -->

<!-- React, WebComponents -->

The [`getStateAsString`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html#getStateAsString) returns a serialized JSON string, so developers can just take it and save it on any data storage (database, cloud, browser localStorage, etc).

The developer may choose to get only the state for a certain feature/features, by passing in an array with feature names as an argument. Empty array will result to using the default state options.

<!-- end: React, WebComponents -->

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid, PivotGrid -->

```tsx
<IgrPivotGrid>
    <IgrGridState ref={gridStateRef}></IgrGridState>
</IgrPivotGrid>
```

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid, PivotGrid -->

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid, PivotGrid -->

```tsx
// get an `IgrGridStateInfo` object, containing all features original state objects, as returned by the grid public API
const state: IgrGridStateInfo = gridStateRef.current.getState([]);

// get all features` state in a serialized JSON string
const stateString: string = gridStateRef.current.getStateAsString([]);

// get the sorting and filtering expressions
const sortingFilteringStates: IgrGridStateInfo = gridStateRef.current.getState(['sorting', 'filtering']);
```

<!-- React, WebComponents -->

[`applyState`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html#applyState) - The method accepts a [`IgrGridStateInfo`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstateinfo.html) object as argument and will restore the state of each feature found in the object or specified features as second argument.

<!-- end: React, WebComponents -->

<!-- React, WebComponents -->

[`applyStateFromString`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html#applyStateFromString) - The method accepts a serialized JSON string as argument and will restore the state of each feature found in the JSON string or specified features as second argument.

<!-- end: React, WebComponents -->

```tsx
gridStateRef.current.applyState(gridState, []);
gridStateRef.current.applyStateFromString(gridStateString, []);
gridStateRef.current.applyState(sortingFilteringStates, [])
```

<!-- React, WebComponents -->

The [`options`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstatebasedirective.html#options) object implements the [`IgrGridStateOptions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstateoptions.html) interface, i.e. for every key, which is the name of a certain feature, there is the boolean value indicating if this feature state will be tracked. [`getState`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html#getState)/[`getStateAsString`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html#getStateAsString) methods will not put the state of these features in the returned value and [`applyState`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html#applyState)/[`applyStateFromString`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html#applyStateFromString) methods will not restore state for them.

<!-- end: React, WebComponents -->

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid, PivotGrid -->

```tsx
<IgrGridState options={{ cellSelection: false, sorting: false }}></IgrGridState>
```

The simple to use single-point API's allows to achieve a full state persistence functionality in just a few lines of code. **Copy paste the code from below** - it will save the grid state in the browser `LocalStorage` object every time the user leaves the current page. Whenever the user returns to main page, the grid state will be restored. No more need to configure those complex advanced filtering and sorting expressions every time to get the data you want - do it once and have the code from below do the rest for your users:

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid, PivotGrid -->

```tsx
<IgrPivotGrid onRendered={restoreGridState}>
    <IgrGridState ref={gridStateRef}></IgrGridState>
</IgrPivotGrid>
```

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid, PivotGrid -->

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid, PivotGrid -->

```tsx
useEffect(() => {
    restoreGridState();
    window.addEventListener('beforeunload', saveGridState);
    return () => {
      window.removeEventListener('beforeunload', saveGridState);
    }
}, []);

// Using methods that work with IgrGridStateInfo object.
const saveGridState = () => {
    const state = gridStateRef.current.getState([]);
    window.localStorage.setItem('grid-state', JSON.stringify(state));
}

const restoreGridState = () => {
    const state = window.localStorage.getItem('grid-state');
    if (state) {
        gridStateRef.current.applyState(JSON.parse(state), []);
    }
}

//Or using string alternative methods.
const saveGridState = () => {
    const state = gridStateRef.current.getStateAsString([]);
    window.localStorage.setItem('grid-state', state);
}

const restoreGridState = () => {
    const state = window.localStorage.getItem('grid-state');
    if (state) {
        gridStateRef.current.applyStateFromString(state, []);
    }
}
```

<!-- ComponentStart: PivotGrid -->

## Restoring Pivot Configuration

[`IgrGridState`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html) will not persist pivot dimension functions, value formatters, etc. by default (see [limitations](state-persistence.md#limitations)). Restoring any of these can be achieved with code on application level. The [`IgrPivotGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotgrid.html) exposes two events which can be used to set back any custom functions you have in the configuration: `DimensionInit` and `ValueInit`. Let's show how to do this:

- Assign event handlers for the `DimensionInit` and `ValueInit` events:

> The `DimensionInit` and `ValueInit` events are emitted for each value and dimension defined in the [`pivotConfiguration`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotgrid.html#pivotConfiguration) property.

- In the `ValueInit` event handler set all custom aggregators, formatters and styles:

```tsx
  const onValueInit = (event: IgrPivotValueEventArgs) => {
    const value: IgrPivotValueDetail = event.detail;
    if (value.member === "AmountofSale") {
      value.aggregate.aggregator = totalSale;
      value.aggregateList?.forEach((aggr: any) => {
        switch (aggr.key) {
          case "SUM":
            aggr.aggregator = totalSale;
            break;
          case "MIN":
            aggr.aggregator = totalMin;
            break;
          case "MAX":
            aggr.aggregator = totalMax;
            break;
        }
      });
    } else if (value.member === "Value") {
      value.styles.upFontValue = (rowData: any, columnKey: any): boolean =>
        parseFloat(rowData.aggregationValues.get(columnKey.field)) > 150;
      value.styles.downFontValue = (rowData: any, columnKey: any): boolean =>
        parseFloat(rowData.aggregationValues.get(columnKey.field)) <= 150;
    }
  }
```

<!-- ComponentEnd: PivotGrid -->

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
```tsx
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";

import {
  IgrGridState,
  IgrGridStateOptions,
  IgrPivotGrid,
  IgrPivotConfiguration,
  IgrPivotValueEventArgs,
  IgrPivotValue,
  GridSelectionMode,
} from "igniteui-react-grids";
import {
  IgrButton,
  IgrCheckbox,
  IgrCheckboxChangeEventArgs,
  IgrIcon,
  registerIconFromText,
} from "igniteui-react";
import { PivotDataFlat } from "./PivotDataFlat";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import "./index.css";

const restoreIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z"/></svg>';
const saveIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"/></svg>';
const clearIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>';
const forwardIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>';
const deleteIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>';
const refreshIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"/></svg>';

export default function App() {
  const gridData = new PivotDataFlat();
  const stateKey = "pivot-grid-state";

  const [allOptions, setAllOptions] = useState(true);
  const [options, setOption] = useState<IgrGridStateOptions>({
    cellSelection: true,
    filtering: true,
    sorting: true,
    expansion: true,
    columnSelection: true,
    pivotConfiguration: true,
  });

  let grid: IgrPivotGrid;
  const gridRef = (ref: IgrPivotGrid) => {
    grid = ref;
  }
  const gridStateRef = useRef<IgrGridState>(null);

  const totalSale = (member: any, data: any) => {
    return data.reduce(
      (accumulator: any, value: any) =>
        accumulator + value.ProductUnitPrice * value.NumberOfUnits,
      0
    );
  }

  const totalMin = (member: any, data: any) => {
    return data
      .map((x: any) => x.ProductUnitPrice * x.NumberOfUnits)
      .reduce((a: any, b: any) => Math.min(a, b));
  }

  const totalMax = (member: any, data: any) => {
    return data
      .map((x: any) => x.ProductUnitPrice * x.NumberOfUnits)
      .reduce((a: any, b: any) => Math.max(a, b));
  }

  const pivotConfiguration: IgrPivotConfiguration = {
    // column dimensions
    columns: [
      {
        memberName: "SellerName",
        enabled: true,
      },
    ],
    // row dimensions
    rows: [
      {
        memberName: "ProductName",
        enabled: true,
        width: "150px",
      },
      {
        memberName: "SellerCity",
        displayName: "City",
        enabled: true,
        width: "150px",
      },
    ],
    // values
    values: [
      {
        enabled: true,
        member: "Value",
        aggregate: {
          aggregatorName: "SUM",
          key: "SUM",
          label: "SUM",
        },
        styles: {
          downFontValue: (rowData: any, columnKey: any): boolean =>
            parseFloat(rowData.aggregationValues.get(columnKey.field)) <= 150,
          upFontValue: (rowData: any, columnKey: any): boolean =>
            parseFloat(rowData.aggregationValues.get(columnKey.field)) > 150,
        },
      },
      {
        enabled: true,
        member: "AmountofSale",
        displayName: "Amount of Sale",
        aggregate: {
          aggregator: totalSale,
          label: "Sum of Sale",
          key: "SUM",
        },
        aggregateList: [
          {
            aggregator: totalSale,
            label: "Sum of Sale",
            key: "SUM",
          },
          {
            aggregator: totalMin,
            label: "Minimum of Sale",
            key: "MIN",
          },
          {
            aggregator: totalMax,
            label: "Maximum of Sale",
            key: "MAX",
          },
        ],
      },
    ],
  };

  useEffect(() => {
    registerIconFromText("restore", restoreIcon, "material");
    registerIconFromText("save", saveIcon, "material");
    registerIconFromText("clear", clearIcon, "material");
    registerIconFromText("forward", forwardIcon, "material");
    registerIconFromText("delete", deleteIcon, "material");
    registerIconFromText("refresh", refreshIcon, "material");
    restoreGridState();

    window.addEventListener("beforeunload", saveGridState);
    return () => {
      window.removeEventListener("beforeunload", saveGridState);
    };
  }, []);

  const saveGridState = () => {
    const state = gridStateRef.current.getStateAsString([]);
    window.localStorage.setItem(stateKey, state);
  }

  const restoreGridState = () => {
    const state = window.localStorage.getItem(stateKey);
    if (state) {
      gridStateRef.current.applyStateFromString(state, []);
    }
  }

  const resetGridState = () => {
    grid.allDimensions.forEach((dimension) =>
      grid.clearFilter(dimension.memberName)
    );
    grid.sortingExpressions = [];
    grid.deselectAllColumns();
    grid.clearCellSelection();
  }

  const onValueInit = (event: IgrPivotValueEventArgs) => {
    const value: IgrPivotValue = event.detail;
    if (value.member === "AmountofSale") {
      value.aggregate.aggregator = totalSale;
      value.aggregateList?.forEach((aggr: any) => {
        switch (aggr.key) {
          case "SUM":
            aggr.aggregator = totalSale;
            break;
          case "MIN":
            aggr.aggregator = totalMin;
            break;
          case "MAX":
            aggr.aggregator = totalMax;
            break;
        }
      });
    } else if (value.member === "Value") {
      value.styles.upFontValue = (rowData: any, columnKey: any): boolean =>
        parseFloat(rowData.aggregationValues.get(columnKey.field)) > 150;
      value.styles.downFontValue = (rowData: any, columnKey: any): boolean =>
        parseFloat(rowData.aggregationValues.get(columnKey.field)) <= 150;
    }
  }

  const onChange = (e: IgrCheckboxChangeEventArgs) => {
    const s = e.target as IgrCheckbox;

    if (s.name === "allFeatures") {
      const isChecked = e.detail.checked;
      setAllOptions(isChecked);

      setOption({
        cellSelection: isChecked,
        filtering: isChecked,
        sorting: isChecked,
        expansion: isChecked,
        columnSelection: isChecked,
        pivotConfiguration: isChecked,
      });
    } else {
      const newOptions = { ...options };
      newOptions[s.name as keyof typeof newOptions] = e.detail.checked;
      setOption(newOptions);
    }
  }

  const leavePage = () => {
    saveGridState();
    window.location.replace("./grids/pivot-grid/state-persistence-about");
  }

  const clearStorage = () => {
    window.localStorage.removeItem(stateKey);
  }

  const reloadPage = () => {
    window.location.reload();
  }

  return (
    <div className="vertical sampleContainer">
      <div className="container horizontal">
        <IgrButton onClick={restoreGridState}>
          <IgrIcon name="restore" collection="material"></IgrIcon>
          <span>Restore</span>
        </IgrButton>
        <IgrButton onClick={saveGridState}>
          <IgrIcon name="save" collection="material"></IgrIcon>
          <span>Save</span>
        </IgrButton>
        <IgrButton onClick={resetGridState}>
          <IgrIcon name="clear" collection="material"></IgrIcon>
          <span>Reset</span>
        </IgrButton>
        <IgrButton onClick={leavePage}>
          <IgrIcon name="forward" collection="material"></IgrIcon>
          <span>Leave</span>
        </IgrButton>
        <IgrButton onClick={clearStorage}>
          <IgrIcon name="delete" collection="material"></IgrIcon>
          <span>Clear</span>
        </IgrButton>
        <IgrButton onClick={reloadPage}>
          <IgrIcon name="refresh" collection="material"></IgrIcon>
          <span>Reload</span>
        </IgrButton>
      </div>
      <div className="container horizontal">
        <ul>
          <li>
            Clicking the SAVE button or leaving the page{" "}
            <a id="leaveLink" href="./grids/pivot-grid/state-persistence-about">
              <strong>here</strong>
            </a>{" "}
            will save grid state to localStorage.
          </li>
          <li>
            Use the control buttons to SAVE / RESTORE / RESET / DELETE / grid
            state or LEAVE the page.
          </li>
          <li>
            Select/Deselect checkboxes to control saving / restoring feature
            state.
          </li>
        </ul>
      </div>
      <div className="container horizontal">
        <IgrCheckbox name="allFeatures" onChange={onChange} checked={allOptions}>
          <span>All Features</span>
        </IgrCheckbox>
        <IgrCheckbox
          name="cellSelection"
          onChange={onChange}
          checked={options.cellSelection}
        >
          <span>Cell Selection</span>
        </IgrCheckbox>
        <IgrCheckbox
          name="columnSelection"
          onChange={onChange}
          checked={options.columnSelection}
        >
          <span>Col Selection</span>
        </IgrCheckbox>
        <IgrCheckbox
          name="expansion"
          onChange={onChange}
          checked={options.expansion}
        >
          <span>Expansion</span>
        </IgrCheckbox>
        <IgrCheckbox
          name="filtering"
          onChange={onChange}
          checked={options.filtering}
        >
          <span>Filtering </span>
        </IgrCheckbox>
        <IgrCheckbox name="sorting" onChange={onChange} checked={options.sorting}>
          <span>Sorting</span>
        </IgrCheckbox>
        <IgrCheckbox
          name="pivotConfiguration"
          onChange={onChange}
          checked={options.pivotConfiguration}
        >
          <span>Pivot Configuration</span>
        </IgrCheckbox>
      </div>
      <IgrPivotGrid
        ref={gridRef}
        data={gridData}
        width="95%"
        height="500px"
        pivotConfiguration={pivotConfiguration}
        onValueInit={onValueInit}
        superCompactMode={true}
        columnSelection="single"
        cellSelection="single"
      >
        <IgrGridState ref={gridStateRef}></IgrGridState>
      </IgrPivotGrid>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```


<!-- ComponentStart: PivotGrid -->

<!-- ComponentEnd: PivotGrid -->

## Limitations

<!-- ComponentStart: PivotGrid -->

- [`getState`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html#getState) method uses JSON.stringify() method to convert the original objects to a JSON string. JSON.stringify() does not support Functions, thats why the [`IgrGridState`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html) directive will ignore the pivot dimension `MemberFunction`, pivot values [`member`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotvalue.html#member), `Formatter`, custom [`aggregate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotvalue.html#aggregate) functions, [`styles`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotvalue.html#styles) and pivot configuration strategies: [`columnStrategy`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotconfiguration.html#columnStrategy) and [`rowStrategy`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotconfiguration.html#rowStrategy).

<!-- ComponentEnd: PivotGrid -->

<!-- ComponentStart: PivotGrid -->

<!-- * [Pivot Grid Features](features.md) -->

<!-- ComponentEnd: PivotGrid -->
