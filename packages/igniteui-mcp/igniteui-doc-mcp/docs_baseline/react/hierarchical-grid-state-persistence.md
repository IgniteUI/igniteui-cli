---
title: React Hierarchical Grid State Persistence - Ignite UI for React
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

# React Hierarchical Grid State Persistence

The Ignite UI for React State Persistence in React Hierarchical Grid allows developers to easily save and restore the grid state. When the [`IgrGridState`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html) is applied on the React [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html), it exposes the [`getState`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html#getState), [`getStateAsString`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html#getStateAsString), [`applyState`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html#applyState) and [`applyStateFromString`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html#applyStateFromString) methods that developers can use to achieve state persistence in any scenario.

## Supported Features

[`IgrGridState`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html) supports saving and restoring the state of the following features:

<!-- ComponentStart: HierarchicalGrid -->

- **RowIslands**
  - saving/restoring features for all child grids down the hierarchy
- **Sorting**
- **Filtering**
- **AdvancedFiltering**
- **Paging**
- **CellSelection**
- **RowSelection**
- **ColumnSelection**
- **RowPinning**
- **Expansion**
- **Columns**
  - Multi column headers
  - Columns order
  - Column properties defined by the `IColumnState` interface.

<!-- * Columns templates and functions are restored using application level code, see [Restoring Column](state-persistence.md#restoring-columns) section. -->

<!-- ComponentEnd: HierarchicalGrid -->

## Usage

The [`getState`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html#getState) method returns the grid state in a [`IgrGridStateInfo`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstateinfo.html) object, containing all the state info. Additional steps may be required in order to save it.

The [`getStateAsString`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html#getStateAsString) returns a serialized JSON string, so developers can just take it and save it on any data storage (database, cloud, browser localStorage, etc).

The developer may choose to get only the state for a certain feature/features, by passing in an array with feature names as an argument. Empty array will result to using the default state options.

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid, PivotGrid -->

```tsx
<IgrHierarchicalGrid>
    <IgrGridState ref={gridStateRef}></IgrGridState>
</IgrHierarchicalGrid>
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

[`applyState`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html#applyState) - The method accepts a [`IgrGridStateInfo`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstateinfo.html) object as argument and will restore the state of each feature found in the object or specified features as second argument.

[`applyStateFromString`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html#applyStateFromString) - The method accepts a serialized JSON string as argument and will restore the state of each feature found in the JSON string or specified features as second argument.

```tsx
gridStateRef.current.applyState(gridState, []);
gridStateRef.current.applyStateFromString(gridStateString, []);
gridStateRef.current.applyState(sortingFilteringStates, [])
```

The [`options`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstatebasedirective.html#options) object implements the [`IgrGridStateOptions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstateoptions.html) interface, i.e. for every key, which is the name of a certain feature, there is the boolean value indicating if this feature state will be tracked. [`getState`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html#getState)/[`getStateAsString`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html#getStateAsString) methods will not put the state of these features in the returned value and [`applyState`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html#applyState)/[`applyStateFromString`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html#applyStateFromString) methods will not restore state for them.

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid, PivotGrid -->

```tsx
<IgrGridState options={{ cellSelection: false, sorting: false }}></IgrGridState>
```

The simple to use single-point API's allows to achieve a full state persistence functionality in just a few lines of code. **Copy paste the code from below** - it will save the grid state in the browser `LocalStorage` object every time the user leaves the current page. Whenever the user returns to main page, the grid state will be restored. No more need to configure those complex advanced filtering and sorting expressions every time to get the data you want - do it once and have the code from below do the rest for your users:

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid, PivotGrid -->

```tsx
<IgrHierarchicalGrid onRendered={restoreGridState}>
    <IgrGridState ref={gridStateRef}></IgrGridState>
</IgrHierarchicalGrid>
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

<!-- ComponentStart: HierarchicalGrid -->

## Restoring Child Grids

Saving / Restoring state for the child grids is controlled by the `RowIslands` property and is enabled by default. [`IgrGridState`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html) will use the same options for saving/restoring features both for the root grid and all child grids down the hierarchy. For example, if we pass the following options:

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```tsx
<IgrHierarchicalGrid>
    <IgrGridState options={{ cellSelection: false, sorting: false, rowIslands: true }}></IgrGridState>
</IgrHierarchicalGrid>
```

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentStart: HierarchicalGrid -->

Then the [`getState`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html#getState) API will return the state for all grids (root grid and child grids) features excluding `Selection` and `Sorting`. If later on the developer wants to restore only the `Filtering` state for all grids, use:

```tsx
state.applyState(state, ['filtering', 'rowIslands']);
```

<!-- ComponentEnd: HierarchicalGrid -->

## Demo

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
```
```tsx
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";

import {
  IgrActionStrip,
  IgrColumn,
  IgrGridPinningActions,
  IgrGridToolbar,
  IgrGridToolbarActions,
  IgrGridToolbarHiding,
  IgrGridToolbarPinning,
  IgrPaginator,
  IgrGridState,
  IgrGridStateOptions,
  IgrHierarchicalGrid,
  IgrRowIsland,
} from "igniteui-react-grids";
import {
  IgrButton,
  IgrCheckbox,
  IgrCheckboxChangeEventArgs,
  IgrIcon,
  registerIconFromText,
} from "igniteui-react";
import SingersData from "./SingersData.json";

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
  const gridData = SingersData;
  const stateKey = "hierarchical-grid-state";

  const [allOptions, setAllOptions] = useState(true);
  const [options, setOption] = useState<IgrGridStateOptions>({
    cellSelection: true,
    rowSelection: true,
    filtering: true,
    advancedFiltering: true,
    paging: true,
    sorting: true,
    columns: true,
    expansion: true,
    rowPinning: true,
    columnSelection: true,
    rowIslands: true,
  });
  const [page, setPage] = useState<number>(0);
  const [perPage, setPerPage] = useState<number>(15);
  const [totalRecords, setTotalRecords] = useState<number>(gridData.length);

  let grid: IgrHierarchicalGrid;
  const gridRef = (ref: IgrHierarchicalGrid) => {
    grid = ref;
  }
  const gridStateRef = useRef<IgrGridState>(null);

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
    setPage(0);
    setPerPage(15);
    setTotalRecords(gridData.length);
    
    grid.clearFilter();
    grid.sortingExpressions = [];
    grid.deselectAllColumns();
    grid.deselectAllRows();
    grid.clearCellSelection();
  }

  const onChange = (e: IgrCheckboxChangeEventArgs) => {
    const s = e.target as IgrCheckbox;

    if (s.name === "allFeatures") {
      const isChecked = e.detail.checked;
      setAllOptions(isChecked);

      setOption({
        cellSelection: isChecked,
        rowSelection: isChecked,
        filtering: isChecked,
        advancedFiltering: isChecked,
        paging: isChecked,
        sorting: isChecked,
        columns: isChecked,
        expansion: isChecked,
        rowPinning: isChecked,
        columnSelection: isChecked,
        rowIslands: isChecked,
      });
    } else {
      const newOptions = { ...options };
      newOptions[s.name as keyof typeof newOptions] = e.detail.checked;
      setOption(newOptions);
    }
  }

  const leavePage = () => {
    saveGridState();
    window.location.replace(
      "./grids/hierarchical-grid/state-persistence-about"
    );
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
            <a
              id="leaveLink"
              href="./grids/hierarchical-grid/state-persistence-about"
            >
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
          name="advancedFiltering"
          onChange={onChange}
          checked={options.advancedFiltering}
        >
          <span>Adv. Filtering</span>
        </IgrCheckbox>
        <IgrCheckbox
          name="cellSelection"
          onChange={onChange}
          checked={options.cellSelection}
        >
          <span>Cell Selection</span>
        </IgrCheckbox>
        <IgrCheckbox name="columns" onChange={onChange} checked={options.columns}>
          <span>Columns</span>
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
        <IgrCheckbox name="paging" onChange={onChange} checked={options.paging}>
          <span>Paging</span>
        </IgrCheckbox>
        <IgrCheckbox
          name="rowPinning"
          onChange={onChange}
          checked={options.rowPinning}
        >
          <span>Row Pinning</span>
        </IgrCheckbox>
        <IgrCheckbox
          name="rowSelection"
          onChange={onChange}
          checked={options.rowSelection}
        >
          <span>Row Selection</span>
        </IgrCheckbox>
        <IgrCheckbox name="sorting" onChange={onChange} checked={options.sorting}>
          <span>Sorting</span>
        </IgrCheckbox>
        <IgrCheckbox
          name="rowIslands"
          onChange={onChange}
          checked={options.rowIslands}
        >
          <span>Row Islands</span>
        </IgrCheckbox>
      </div>
      <IgrHierarchicalGrid
        ref={gridRef}
        data={gridData}
        primaryKey="ID"
        width="95%"
        height="500px"
        autoGenerate={false}
        moving={true}
        allowFiltering={true}
        allowAdvancedFiltering={true}
        filterMode="excelStyleFilter"
        columnSelection="multiple"
        rowSelection="multiple"
      >
        <IgrGridState ref={gridStateRef}></IgrGridState>
        <IgrGridToolbar>
          <IgrGridToolbarActions>
            <IgrGridToolbarHiding></IgrGridToolbarHiding>
            <IgrGridToolbarPinning></IgrGridToolbarPinning>
          </IgrGridToolbarActions>
        </IgrGridToolbar>
        <IgrActionStrip>
          <IgrGridPinningActions></IgrGridPinningActions>
        </IgrActionStrip>
        <IgrPaginator 
          page={page}  
          perPage={perPage} 
          totalRecords={totalRecords}
          onPageChange={(ev) => setPage(ev.detail)}
          onPerPageChange={(ev) => setPerPage(ev.detail)}>  
        </IgrPaginator>

        <IgrColumn field="Artist" sortable={true}></IgrColumn>
        <IgrColumn
          dataType="image"
          field="Photo"
          editable={false}
          sortable={true}
        ></IgrColumn>
        <IgrColumn field="Debut" dataType="number" sortable={true}></IgrColumn>
        <IgrColumn
          field="GrammyNominations"
          header="Grammy Nominations"
          dataType="number"
          sortable={true}
        ></IgrColumn>
        <IgrColumn
          field="GrammyAwards"
          header="Grammy Awards"
          dataType="number"
          sortable={true}
        ></IgrColumn>
        <IgrRowIsland
          height="null"
          childDataKey="Albums"
          autoGenerate={false}
          primaryKey="Album"
          allowFiltering={true}
          columnSelection="multiple"
          rowSelection="multiple"
        >
          <IgrColumn field="Album" sortable={true}></IgrColumn>
          <IgrColumn
            field="LaunchDate"
            header="Launch Date"
            dataType="date"
            sortable={true}
          ></IgrColumn>
          <IgrColumn
            field="BillboardReview"
            header="Billboard Review"
            sortable={true}
          ></IgrColumn>
          <IgrColumn
            field="USBillboard200"
            header="US Billboard 200"
            sortable={true}
          ></IgrColumn>
          <IgrRowIsland
            height="null"
            childDataKey="Songs"
            columnSelection="multiple"
            rowSelection="multiple"
            autoGenerate={false}
            primaryKey="Number"
            allowFiltering={true}
          >
            <IgrColumn field="Number" header="No." sortable={true}></IgrColumn>
            <IgrColumn field="Title" sortable={true}></IgrColumn>
            <IgrColumn
              field="Released"
              dataType="date"
              sortable={true}
            ></IgrColumn>
            <IgrColumn field="Genre"></IgrColumn>
          </IgrRowIsland>
        </IgrRowIsland>

        <IgrRowIsland
          height="null"
          childDataKey="Tours"
          autoGenerate={false}
          primaryKey="Tour"
          allowFiltering={true}
          columnSelection="multiple"
          rowSelection="multiple"
        >
          <IgrColumn field="Tour" sortable={true}></IgrColumn>
          <IgrColumn
            field="StartedOn"
            header="Started on"
            sortable={true}
          ></IgrColumn>
          <IgrColumn field="Location" sortable={true}></IgrColumn>
          <IgrColumn field="Headliner" sortable={true}></IgrColumn>
        </IgrRowIsland>
      </IgrHierarchicalGrid>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```


## Limitations

<!-- ComponentStart: HierarchicalGrid -->

- When restoring all grid features at once (using `applyState` API with no parameters), then column properties for the root grid might be reset to default. If this happens, restore the columns or column selection feature separately after that:

```typescript
state.applyState(gridState);
state.applyState(gridState.columns);
state.applyState(gridState.columnSelection);
```

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

- [`getStateAsString`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html#getStateAsString) method uses JSON.stringify() method to convert the original objects to a JSON string. JSON.stringify() does not support Functions, thats why the [`IgrGridState`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridstate.html) component will ignore the columns `Formatter`, [`filters`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotconfiguration.html#filters), `Summaries`, `SortStrategy`, `CellClasses`, `CellStyles`, `HeaderTemplate` and `BodyTemplate` properties.

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->
