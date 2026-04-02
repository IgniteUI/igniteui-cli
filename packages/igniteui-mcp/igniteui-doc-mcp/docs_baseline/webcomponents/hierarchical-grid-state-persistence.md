---
title: Web Components Hierarchical Grid State Persistence - Ignite UI for Web Components
_description: Easily save and restore the grid state, using our comprehensive Ignite UI toolset for Web Components. Learn how to restore columns, explore usage, and see demos!
_keywords: state persistence, Web Components, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["GridStateBaseDirective", "GridState", "PivotConfiguration", "PivotDimension", "PivotValue"]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/state-persistence
_tocName: State Persistence
_premium: true
---

# Web Components Hierarchical Grid State Persistence

The Ignite UI for Web Components State Persistence in Web Components Hierarchical Grid allows developers to easily save and restore the grid state. When the [`IgcGridStateComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridstatecomponent.html) is applied on the Web Components [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html), it exposes the [`getState`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridstatecomponent.html#getState), [`getStateAsString`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridstatecomponent.html#getStateAsString), [`applyState`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridstatecomponent.html#applyState) and [`applyStateFromString`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridstatecomponent.html#applyStateFromString) methods that developers can use to achieve state persistence in any scenario.

## Supported Features

[`IgcGridStateComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridstatecomponent.html) supports saving and restoring the state of the following features:

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

The [`getState`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridstatecomponent.html#getState) method returns the grid state in a [`IgcGridStateInfo`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridstateinfo.html) object, containing all the state info. Additional steps may be required in order to save it.

The [`getStateAsString`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridstatecomponent.html#getStateAsString) returns a serialized JSON string, so developers can just take it and save it on any data storage (database, cloud, browser localStorage, etc).

The developer may choose to get only the state for a certain feature/features, by passing in an array with feature names as an argument. Empty array will result to using the default state options.

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid, PivotGrid -->

```html
<igc-hierarchical-grid id="grid">
    <igc-grid-state id="gridState"></igc-grid-state>
</igc-hierarchical-grid>
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

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid, PivotGrid -->

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid, PivotGrid -->

[`applyState`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridstatecomponent.html#applyState) - The method accepts a [`IgcGridStateInfo`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridstateinfo.html) object as argument and will restore the state of each feature found in the object or specified features as second argument.

[`applyStateFromString`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridstatecomponent.html#applyStateFromString) - The method accepts a serialized JSON string as argument and will restore the state of each feature found in the JSON string or specified features as second argument.

```typescript
gridState.applyState(gridState);
gridState.applyStateFromString(gridStateString);
gridState.applyState(sortingFilteringStates)
```

The [`options`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridstatebasedirective.html#options) object implements the [`IgcGridStateOptions`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridstateoptions.html) interface, i.e. for every key, which is the name of a certain feature, there is the boolean value indicating if this feature state will be tracked. [`getState`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridstatecomponent.html#getState)/[`getStateAsString`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridstatecomponent.html#getStateAsString) methods will not put the state of these features in the returned value and [`applyState`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridstatecomponent.html#applyState)/[`applyStateFromString`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridstatecomponent.html#applyStateFromString) methods will not restore state for them.

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

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid, PivotGrid -->

<!-- ComponentStart: HierarchicalGrid -->

## Restoring Child Grids

Saving / Restoring state for the child grids is controlled by the `RowIslands` property and is enabled by default. [`IgcGridStateComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridstatecomponent.html) will use the same options for saving/restoring features both for the root grid and all child grids down the hierarchy. For example, if we pass the following options:

```ts
gridState.options = { cellSelection: false, sorting: false, rowIslands: true };
```

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentStart: HierarchicalGrid -->

Then the [`getState`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridstatecomponent.html#getState) API will return the state for all grids (root grid and child grids) features excluding `Selection` and `Sorting`. If later on the developer wants to restore only the `Filtering` state for all grids, use:

```typescript
this.state.applyState(state, ['filtering', 'rowIslands']);
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

- [`getStateAsString`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridstatecomponent.html#getStateAsString) method uses JSON.stringify() method to convert the original objects to a JSON string. JSON.stringify() does not support Functions, thats why the [`IgcGridStateComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridstatecomponent.html) component will ignore the columns [`formatter`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotvalue.html#formatter), [`filters`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotconfiguration.html#filters), `Summaries`, `SortStrategy`, `CellClasses`, `CellStyles`, `HeaderTemplate` and `BodyTemplate` properties.

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->
