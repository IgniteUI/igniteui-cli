---
title: React Grid Keyboard Navigation - Ignite UI for React
_description: Learn how to use Grid Keyboard Navigation with Ignite UI for React. With Keyboard interaction, users can quickly navigate between cells, rows, and columns.
_keywords: keyboard navigation, Ignite UI for React, infragistics
_license: commercial
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
mentionedTypes: ["GridBaseDirective"]
namespace: Infragistics.Controls
_tocName: Keyboard navigation
_premium: true
---

# React Grid Keyboard Navigation

The Ignite UI for React Keyboard Navigation feature in React Grid provides a rich variety of keyboard interactions for the user. It enhances the accessibility of the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) and allows the user to navigate through any type of elements inside (cell, row, column header, toolbar, footer, etc.). This functionality is enabled by default, and the developer has the option to override any of the default behaviors in an easy way.

The tabulations of the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) has been reduced so that the navigation is compliant with W3C accessibility standards and convenient to use.

Currently, the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) introduces the following tab stops:

- **GroupBy or Toolbar area** (if enabled).
- **Grid header**.
- **Grid body**.
- **Column summaries** (if enabled).
- **Grid paginator** (if enabled).

> [!Note]
> Due to this change, navigating between the cells with <kbd>TAB</kbd> and <kbd>SHIFT</kbd> + <kbd>TAB</kbd> is no longer supported in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html).
> Pressing the <kbd>TAB</kbd> key now goes through the tab stops in the following order: **GroupBy** / **Toolbar** -> **Headers** -> **Body** -> **Summaries** -> **Footer / Paginator**.

> [!Note]
> Exposing any **focusable** element into the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) body via template may introduce **side effects** in the keyboard navigation, since the default
> browser behavior is not prevented. It is the developer's responsibility to prevent or modify it appropriately.

## Header Navigation

A full **keyboard navigation** support in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) header is now introduced. Column headers can be easily traversed with the arrow keys. Additionally, there are a number of key combinations that trigger actions on the columns like **filtering**, **sorting**, **grouping** and etc.
When the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) header container is focused, the following key combinations are available:

### Key Combinations

- <kbd>↑</kbd> navigates one cell up in the headers (no looping). Available only when Multi-row Layout (MRL) or Multi-column Headers (MCH) are defined.
- <kbd>↓</kbd> navigates one cell down in the headers (no wrapping). Available only when Multi-row Layout (MRL) or Multi-column Headers (MCH) are defined.
- <kbd>←</kbd> navigates one cell left (no looping).
- <kbd>→</kbd> navigates one cell right (no wrapping between lines).
- <kbd>CTRL</kbd> + <kbd>←</kbd> navigates to the leftmost cell in the row; if MRL or MCH are enabled, navigates to the leftmost cell at the same level.
- <kbd>HOME</kbd> navigates to the leftmost cell in  the row; if MRL or MCH are enabled, navigates to the leftmost cell at the same level.
- <kbd>CTRL</kbd> + <kbd>→</kbd> navigates to the rightmost cell in row; if MRL or MCH are enabled, navigates to the rightmost cell at the same level.
- <kbd>END</kbd> navigates to the rightmost cell in row; if MRL or MCH are enabled, navigates to the rightmost cell at the same level.
- <kbd>ALT</kbd> + <kbd>L</kbd> opens Advanced Filtering dialog if Advanced Filtering is enabled.
- <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>L</kbd> opens the Excel Style Filter dialog or the default (row) filter if the column is filterable.
- <kbd>CTRL</kbd> + <kbd>↑</kbd> sorts the active column header in ASC order. If the column is already sorted in ASC, sorting state is cleared.
- <kbd>CTRL</kbd> + <kbd>↓</kbd> sorts the active column header in DSC order. If the column is already sorted in DSC, sorting state is cleared.
- <kbd>SPACE</kbd> selects the column. If the column is already selected, selection is cleared.

 <!-- ComponentStart: Grid -->

- <kbd>SHIFT</kbd> + <kbd>ALT</kbd> + <kbd>←</kbd> groups the column, if the column is marked as groupable.

 <!-- ComponentEnd: Grid -->

- <kbd>SHIFT</kbd> + <kbd>ALT</kbd> + <kbd>→</kbd> ungroups the column, if the column is marked as groupable.
- <kbd>ALT</kbd> + <kbd>←</kbd> or <kbd>ALT</kbd> + <kbd>↑</kbd> collapses the column group header, if the header is not already collapsed.
- <kbd>ALT</kbd> + <kbd>→</kbd> or <kbd>ALT</kbd> + <kbd>↓</kbd> expands the column group header, if the header is not already expanded.

## Body navigation

When the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) body is focused, the following key combinations are available:

### Key Combination

<!-- ComponentStart: Grid, TreeGrid -->

- <kbd>↑</kbd>- navigates one cell up.
- <kbd>↓</kbd> navigates one cell down.

<!-- ComponentEnd: Grid, TreeGrid -->

- <kbd>←</kbd> navigates one cell left (no wrapping between lines).
- <kbd>→</kbd> - navigates one cell right (no wrapping between lines).
- <kbd>CTRL</kbd> + <kbd>←</kbd> navigates to the leftmost cell in the row.
- <kbd>CTRL</kbd> + <kbd>→</kbd> navigates to the rightmost cell in the row.
- <kbd>CTRL</kbd> + <kbd>↑</kbd> navigates to the first cell in the column.
- <kbd>CTRL</kbd> + <kbd>↓</kbd> navigates to the last cell in the column.
- <kbd>HOME</kbd> navigates to the leftmost cell in the row.
- <kbd>END</kbd> navigates to the rightmost cell in the row.
- <kbd>CTRL</kbd> + <kbd>HOME</kbd> navigates to the top leftmost data cell in the grid.
- <kbd>CTRL</kbd> + <kbd>END</kbd> navigates to the bottom rightmost data cell in the grid.
- <kbd>PAGE UP</kbd> scrolls one page (view port) up.
- <kbd>PAGE DOWN</kbd> scrolls one page (view port) down.
- <kbd>ENTER</kbd> enters edit mode.
- <kbd>F2</kbd> enters edit mode.
- <kbd>ESC</kbd> exits edit mode.
- <kbd>TAB</kbd> available only if there is a cell in edit mode; moves the focus to the next editable cell in the row; after reaching the last cell in the row, moves te focus to the first editable cell in the next row. When [Row Editing](row-editing.md) is enabled, moves the focus from the right-most editable cell to the **CANCEL** and **DONE** buttons, and from **DONE** button to the left-most editable cell in the row.
- <kbd>SHIFT</kbd> + <kbd>TAB</kbd> - available only if there is a cell in edit mode; moves the focus to the previous editable cell in the row; after reaching the first cell in the row, moves the focus to the last editable cell in the previous row. When [Row Editing](row-editing.md) is enabled, moves the focus from the right-most editable cell to **CANCEL** and **DONE** buttons, and from **DONE** button to the right-most editable cell in the row.
- <kbd>SPACE</kbd> - selects the row, if [Row Selection](row-selection.md) is enabled.
- <kbd>ALT</kbd> + <kbd>←</kbd> or <kbd>ALT</kbd> + <kbd>↑</kbd> -

 <!-- ComponentStart: Grid -->

over Group Row - collapses the group.

 <!-- ComponentEnd: Grid -->

- <kbd>ALT</kbd> + <kbd>→</kbd> or <kbd>ALT</kbd> + <kbd>↓</kbd> - <!-- ComponentStart: Grid -->
    over Group Row - expands the group.

 <!-- ComponentEnd: Grid -->

 <!-- ComponentStart: Grid -->

- <kbd>ALT</kbd> + <kbd>←</kbd> or <kbd>ALT</kbd> + <kbd>↑</kbd> - over Master Detail Row - collapses the details view.
- <kbd>ALT</kbd> + <kbd>→</kbd> or <kbd>ALT</kbd> + <kbd>↓</kbd> - over Master Detail Row - expands the details view.
- <kbd>SPACE</kbd> - over Group Row - selects all rows in the group, if [`rowSelection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowSelection) property is set to multiple.

 <!-- ComponentEnd: Grid -->

Practice all of the above mentioned actions in the demo sample below. Focus any navigable grid element and a list with some of the available actions for the element will be shown to guide you through.

## Demo



## Custom Keyboard Navigation

Overriding the default behavior for a certain key or keys combination is one of the benefits that the **Keyboard Navigation** feature provides. For example: press the <kbd>ENTER</kbd> or <kbd>TAB</kbd> key to navigate to the next cell or the cell below. This or any other navigation scenario is easily achieved by the **Keyboard Navigation** API:

<br />

Let's try the API to demonstrate how to achieve common scenarios like user input validation and custom navigation. First we need to register an event handler for the `GridKeydown` event:

```tsx
<IgrGrid id="grid1" primaryKey="ProductID" onGridKeydown={customKeydown}>
</IgrGrid>
```

```tsx
const customKeydown = (eventArgs: IgrGridKeydownEventArgs) => {
  const args = eventArgs.detail;
  const target= args.target;
  const evt = args.event;
  const type = args.targetType;

  if (type === 'dataCell' && target.editMode && evt.key.toLowerCase() === 'tab') {
      // 1. USER INPUT VALIDATION ON TAB

  }
  if (type === 'dataCell' && evt.key.toLowerCase() === 'enter') {
      // 2. CUSTOM NAVIGATION ON ENTER KEY PRESS
  }
}
```

> [!Note]
> Please refer to the sample code for full implementation details.

Use the demo below to try out the custom scenarios that we just implemented:

- Double click or press <kbd>F2</kbd> key on a cell in a numeric column, change the value to **7** and press <kbd>TAB</kbd> key. Prompt message will be shown.
- Select a cell and press <kbd>ENTER</kbd> key a couple of times. Every key press will move the focus to a cell in the next row, under the same column.

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

    #grid {
        --ig-size: var(--ig-size-medium);
    }
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebGridDescriptionModule } from 'igniteui-react-core';
import NwindData from './NwindData.json';
import { IgrGridKeydownEventArgs } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
        this.webGridCustomKBNav = this.webGridCustomKBNav.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    id="grid"
                    ref={this.gridRef}
                    data={this.nwindData}
                    moving={true}
                    primaryKey="ProductID"
                    rowEditable={true}
                    onGridKeydown={this.webGridCustomKBNav}>
                    <IgrColumn
                        field="ProductID"
                        header="Product ID">
                    </IgrColumn>
                    <IgrColumn
                        field="ReorderLevel"
                        header="Reorder Level"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="ProductName"
                        header="Product Name">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitsInStock"
                        header="Units In Stock"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date">
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        header="Discontinued">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _nwindData: any[] = NwindData;
    public get nwindData(): any[] {
        return this._nwindData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            WebGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webGridCustomKBNav(eventArgs: IgrGridKeydownEventArgs): void {
        const args = eventArgs.detail;
        const target = args.target;
        const evt = args.event;
        const type = args.targetType;
        const grid = eventArgs.target as IgrGrid;

        if (type === 'dataCell' && target.editMode && evt.key.toLowerCase() === 'tab') {
            // Value validation for number column.
            // This covers both 'tab' and 'shift+tab' key interactions.
            args.event.preventDefault();
            args.cancel = true;
            if (target.column.dataType === 'number' && target.editValue < 10) {
                alert('The value should be bigger than 10');
                return;
            }
            const cell = evt.shiftKey ?
            grid.getPreviousCell(target.row.index, target.column.visibleIndex, (col: any) => col.editable) :
            grid.getNextCell(target.row.index, target.column.visibleIndex, (col: any) => col.editable);

            grid.navigateTo(cell.rowIndex, cell.visibleColumnIndex,
                (obj: any) => { obj.target.activate(); });
        } else if (type === 'dataCell' && evt.key.toLowerCase() === 'enter') {
            // Perform column based kb navigation with 'enter' key press
            args.cancel = true;
            grid.navigateTo(target.row.index + 1, target.column.visibleIndex, (obj: any) => {
                obj.target.activate();
            });
        }
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## Known Limitations

|Limitation|Description|
|--- |--- |
| Navigating inside а grid with scrollable parent container. | If the grid is positioned inside a scrollable parent container and the user navigates to a grid cell that is out of view, parent container will not be scrolled.|

## Additional Resources

<!-- ComponentStart: Grid -->

- [Virtualization and Performance](virtualization.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
