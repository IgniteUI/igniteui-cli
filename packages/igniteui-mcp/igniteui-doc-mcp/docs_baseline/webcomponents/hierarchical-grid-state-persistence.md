---
title: "Web Components Hierarchical Grid State Persistence - Ignite UI for Web Components"
description: Easily save and restore the grid state, using our comprehensive Ignite UI toolset for Web Components. Learn how to restore columns, explore usage, and see demos!
keywords: state persistence, Web Components, Ignite UI for Web Components, Infragistics
license: commercial
_canonicalLink: "grids/grid/state-persistence"
llms:
  description: "The Ignite UI for Web Components State Persistence in Web Components Hierarchical Grid allows developers to easily save and restore the grid state."
_componentKey: HierarchicalGrid
_tocName: State Persistence
_premium: true
---
# Web Components Hierarchical Grid State Persistence

The Ignite UI for Web Components State Persistence in Web Components Hierarchical Grid allows developers to easily save and restore the grid state. When the [`IgcGridState`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent) is applied on the Web Components [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent), it exposes the [`IgcGridState.getState`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent&member=getState), [`IgcGridState.getStateAsString`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent&member=getStateAsString), [`IgcGridState.applyState`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent&member=applyState) and [`IgcGridState.applyStateFromString`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent&member=applyStateFromString) methods that developers can use to achieve state persistence in any scenario.

## Supported Features

[`IgcGridState`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent) supports saving and restoring the state of the following features:

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
  - Column properties defined by the [`IgcColumnState`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnState) interface.

## Usage

The [`IgcGridState.getState`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent&member=getState) method returns the grid state in a [`IgcGridStateInfo`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateInfo) object, containing all the state info. Additional steps may be required in order to save it.

The [`IgcGridState.getStateAsString`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent&member=getStateAsString) returns a serialized JSON string, so developers can just take it and save it on any data storage (database, cloud, browser localStorage, etc).

The developer may choose to get only the state for a certain feature/features, by passing in an array with feature names as an argument. Empty array will result to using the default state options.

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

## Restoring columns

[`IgcGridState`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent) will not persist columns templates, column formatters, etc. by default (see [limitations](state-persistence.md#limitations)). Restoring any of these can be achieved with code on application level. Let's show how to do this for templated columns:

1 - Define a template reference variable (in the example below it is `#activeTemplate`) and assign an event handler for the `ColumnInit` event:

```html
<igc-hierarchical-grid id="grid">
    <igc-column id="isActive" field="IsActive" header="IsActive">
    </igc-column>
</igc-hierarchical-grid>
```

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcHierarchicalGridComponent;
    var isActive = this.isActive = document.getElementById('isActive') as IgcColumnComponent;
    this.onColumnInit = this.onColumnInit.bind(this);

    this._bind = () => {
        grid.data = this.data;
        grid.addEventListener("columnInit", this.onColumnInit);
        isActive.bodyTemplate = this.activeTemplate;
    }
    this._bind();
}

public activeTemplate = (ctx: IgcCellTemplateContext) => {
    return html`<igc-checkbox checked="${ctx.cell.value}"></igc-checkbox>`;
}
```

2 - In the `ColumnInit` event handler, assign the template to the column [`BodyTemplate`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=bodyTemplate) property:

```typescript
public onColumnInit(event: any) {
    const column = event.detail as IgcColumnComponent;
    if (column.field === 'IsActive') {
        column.bodyTemplate = this.activeTemplate;
    }
}
```

## Restoring Child Grids
Saving / Restoring state for the child grids is controlled by the [`RowIslands`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateInfo&member=rowIslands) property and is enabled by default. [`IgcGridState`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent) will use the same options for saving/restoring features both for the root grid and all child grids down the hierarchy. For example, if we pass the following options:

```ts
gridState.options = { cellSelection: false, sorting: false, rowIslands: true };
```

Then the [`IgcGridState.getState`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent&member=getState) API will return the state for all grids (root grid and child grids) features excluding `Selection` and [`Sorting`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateInfo&member=sorting). If later on the developer wants to restore only the [`Filtering`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateInfo&member=filtering) state for all grids, use:

```typescript
this.state.applyState(state, ['filtering', 'rowIslands']);
```

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

- When restoring all grid features at once (using `applyState` API with no parameters), then column properties for the root grid might be reset to default. If this happens, restore the columns or column selection feature separately after that:

```typescript
state.applyState(gridState);
state.applyState(gridState.columns);
state.applyState(gridState.columnSelection);
```

- [`IgcGridState.getStateAsString`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent&member=getStateAsString) method uses JSON.stringify() method to convert the original objects to a JSON string. JSON.stringify() does not support Functions, thats why the [`IgcGridState`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent) component will ignore the columns [`Formatter`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=formatter), [`Filters`](mcp:get_api_reference?platform=webcomponents&component=IgcPivotConfiguration&member=filters), [`Summaries`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=summaries), [`IgcHierarchicalGrid.sortStrategy`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=sortStrategy), [`IgcColumn.cellClasses`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=cellClasses), [`CellStyles`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=cellStyles), [`HeaderTemplate`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=headerTemplate) and [`BodyTemplate`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=bodyTemplate) properties.

## API References

[`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent)<br />
[`IgcGridState`](mcp:get_api_reference?platform=webcomponents&component=IgcGridStateComponent)<br />
[`IgcPivotConfiguration`](mcp:get_api_reference?platform=webcomponents&component=IgcPivotConfiguration)<br />
[`IgcPivotDimension`](mcp:get_api_reference?platform=webcomponents&component=IgcPivotDimension)<br />
[`IgcPivotValue`](mcp:get_api_reference?platform=webcomponents&component=IgcPivotValue)<br />

## Additional Resources

- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Selection](selection.md)
