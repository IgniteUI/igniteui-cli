---
title: React Tree Grid Row Adding - Ignite UI for React
_description: Learn how to use and customize the built-in row adding functionality with React and utilize intuitive grid row adding and CRUD capabilities.
_keywords: React, Tree Grid, IgrTreeGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-adding
_tocName: Row Adding
_premium: true
---

# React Tree Grid Row Adding

<!-- ComponentStart: TreeGrid -->

The [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) provides a convenient way to perform data manipulations through inline row adding and a powerful API for React CRUD operations. Add an [`IgrActionStrip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igractionstrip.html) component with editing actions enabled in the grid's template, hover a row and use the provided button, press <kbd>ALT</kbd> + <kbd>+</kbd> to spawn the row adding UI or <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>+</kbd> to spawn the UI for adding a child for the selected row.

<!-- ComponentEnd: TreeGrid -->

## React Tree Grid Row Adding Example

```typescript
export class EmployeesNestedTreeDataItem {
    public constructor(init: Partial<EmployeesNestedTreeDataItem>) {
        Object.assign(this, init);
    }

    public Age: number;
    public HireDate: string;
    public ID: number;
    public Name: string;
    public Phone: string;
    public OnPTO: boolean;
    public ParentID: number;
    public Title: string;

}
export class EmployeesNestedTreeData extends Array<EmployeesNestedTreeDataItem> {
    public constructor(items: Array<EmployeesNestedTreeDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesNestedTreeDataItem({ Age: 55, HireDate: `2008-03-20`, ID: 1, Name: `Johnathan Winchester`, Phone: `0251-031259`, OnPTO: false, ParentID: -1, Title: `Development Manager` }),
                new EmployeesNestedTreeDataItem({ Age: 42, HireDate: `2014-01-22`, ID: 4, Name: `Ana Sanders`, Phone: `(21) 555-0091`, OnPTO: true, ParentID: -1, Title: `CEO` }),
                new EmployeesNestedTreeDataItem({ Age: 49, HireDate: `2014-01-22`, ID: 18, Name: `Victoria Lincoln`, Phone: `(071) 23 67 22 20`, OnPTO: true, ParentID: -1, Title: `Accounting Manager` }),
                // ... 15 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule, IgrActionStripModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrActionStrip, IgrGridEditingActions, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebTreeGridDescriptionModule, WebActionStripDescriptionModule } from 'igniteui-react-core';
import { EmployeesNestedTreeDataItem, EmployeesNestedTreeData } from './EmployeesNestedTreeData';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrTreeGridModule,
    IgrActionStripModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private treeGrid: IgrTreeGrid
    private treeGridRef(r: IgrTreeGrid) {
        this.treeGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.treeGridRef = this.treeGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    ref={this.treeGridRef}
                    id="treeGrid"
                    data={this.employeesNestedTreeData}
                    primaryKey="ID"
                    foreignKey="ParentID"
                    rowEditable={true}>
                    <IgrActionStrip
                    >
                        <IgrGridEditingActions
                            addRow={true}
                            addChild={true}>
                        </IgrGridEditingActions>
                    </IgrActionStrip>
                    <IgrColumn
                        field="Name"
                        header="Full Name"
                        dataType="string"
                        resizable={true}
                        sortable={true}
                        filterable={true}
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        dataType="number"
                        resizable={false}
                        sortable={false}
                        filterable={false}
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        dataType="string"
                        resizable={true}
                        sortable={true}
                        filterable={true}
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        header="Hire Date"
                        dataType="date"
                        resizable={true}
                        sortable={true}
                        filterable={true}
                        editable={true}>
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _employeesNestedTreeData: EmployeesNestedTreeData = null;
    public get employeesNestedTreeData(): EmployeesNestedTreeData {
        if (this._employeesNestedTreeData == null)
        {
            this._employeesNestedTreeData = new EmployeesNestedTreeData();
        }
        return this._employeesNestedTreeData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebTreeGridDescriptionModule.register(context);
            WebActionStripDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## Row Adding Usage

Then define a [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) with bound data source, [`rowEditable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowEditable) set to true and an [`IgrActionStrip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igractionstrip.html) component with editing actions enabled. The [`addRow`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html#addRow) input controls the visibility of the button that spawns the row adding UI.

<!-- ComponentStart: TreeGrid -->

<!-- ComponentStart: TreeGrid -->

```tsx
<IgrTreeGrid autoGenerate={false} primaryKey="ID" foreignKey="ParentID" rowEditable={true}>
    <IgrColumn field="Name" header="Name" dataType="string"></IgrColumn>
    <IgrColumn field="Title" header="Title" dataType="string"></IgrColumn>
    <IgrColumn field="HireDate" header="Hire Date" dataType="date"></IgrColumn>
    <IgrColumn field="OnPTO" header="On PTO" dataType="boolean"></IgrColumn>

    <IgrActionStrip>
        <IgrGridEditingActions addRow={true}></IgrGridEditingActions>
    </IgrActionStrip>
</IgrTreeGrid>
```

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentEnd: TreeGrid -->

> **Note**:
> Setting primary key is mandatory for row adding operations.

> **Note**:
> Every column excluding the primary key one is editable in the row adding UI by default. If you want to disable editing for a specific column, then you have to set the [`editable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#editable) column's input to `false`.

<!-- ComponentStart: TreeGrid -->

> **Note**:
> The [`IgrGridEditingActions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrideditingactions.html) inputs controlling the visibility of the add row and add child buttons may use the action strip context (which is of type [`IgrRowType`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrrowtype.html) to fine tune which records the buttons show for.

<!-- ComponentEnd: TreeGrid -->

The internal `BaseTransactionService` is automatically provided for [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html). It holds pending cell changes until the row state is submitted or cancelled.

## Start Row Adding Programmatically

[`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) allows to programmatically spawn the add row UI by using two different public methods. One that accepts a row ID for specifying the row under which the UI should spawn and another that works by index. You can use these methods to spawn the UI anywhere within the current data view. Changing the page or specifying a row that is e.g. filtered out is not supported.

<!-- ComponentStart: TreeGrid -->

Using [`beginAddRowById`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#beginAddRowById) requires you to specify the row to use as context for the operation by its `RowID` (PK). The method then functions as though the end-user clicked on the add row action strip button for the specified row, spawning the UI under it. The second parameter controls if the row is added as a child to the context row or as a sibling. You can also make the UI spawn as the very first row in the grid by passing `null` for the first parameter.

```typescript
this.treeGrid.beginAddRowById('ALFKI', true);   // Spawns the add row UI to add a child for the row with PK 'ALFKI'
this.treeGrid.beginAddRowById(null);            // Spawns the add row UI as the first record
```

The [`beginAddRowByIndex`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html#beginAddRowByIndex) method works similarly but the row to use as context is specified by index.

```typescript
this.treeGrid.beginAddRowByIndex(10, true);   // Spawns the add row UI to add a child for the row at index 10
this.treeGrid.beginAddRowByIndex(null);       // Spawns the add row UI as the first record
```

<!-- ComponentEnd: TreeGrid -->

## Positioning

- The default position of row add UI is below the row that the end user clicked the add row button for.

- The [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) scrolls to fully display the add row UI automatically.

- The overlay for the add row UI maintains its position during scrolling.

## Behavior

The add row UI has the same behavior as the row editing one as they are designed to provide a consistent editing experience to end users. Please, refer to the [Tree Grid Row Editing](row-editing.md) topic for more information.

After a new row is added through the row adding UI, its position and/or visibility is determined by the sorting, filtering and grouping state of the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html). In a [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) that does not have any of these states applied, it appears as the last record. A snackbar is briefly displayed containing a button the end user may use to scroll the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) to its position if it is not in view.

## Keyboard Navigation

- <kbd>ALT</kbd> + <kbd>+</kbd> - Enters edit mode for adding a row

<!-- ComponentStart: TreeGrid -->

- <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>+</kbd> - Enters edit mode for adding a child

<!-- ComponentEnd: TreeGrid -->

- <kbd>ESC</kbd> exits row adding mode without submitting any changes

- <kbd>TAB</kbd> move focus from one editable cell in the row to the next and from the right-most editable cell to the CANCEL and DONE buttons. Navigation from DONE button goes to the left-most editable cell within the currently edited row.

## Feature Integration

- Any row adding operation will stop if the data view of the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) gets modified. Any changes made by the end user are submitted. Operations that change the data view include but are not limited to sorting, grouping, filtering, paging, etc.

- Summaries are updated after the row add operation finishes. The same is valid for the other data view dependant features such as sorting, filtering, etc.

## Customizing Row Adding Overlay

### Customizing Text

Customizing the text of the row adding overlay is possible using the [`rowAddTextTemplate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowAddTextTemplate).

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```tsx
gridRef.current.rowAddTextTemplate = (ctx: IgrGridEmptyTemplateContext) => {
    return (
        <>
            <span>Adding Row</span>
        </>
    );
}
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid-->

## Styling

The row adding UI comprises the buttons in the [`IgrActionStrip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igractionstrip.html) editing actions, the editing editors and overlay, as well as the snackbar which allows end users to scroll to the newly added row. To style these components you may refer to these comprehensive guides in their respective topics:

- [Tree Grid Row Editing](row-editing.md#styling)
- [Snackbar](../../notifications/snackbar.md#styling)

<!-- - [ActionStrip](../action-strip.md#styling) -->

## API References

- [`rowEditable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowEditable)
- `RowEditEnter`
- `RowEdit`
- `RowEditDone`
- `RowEditCancel`
- [`endEdit`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#endEdit)
- [`primaryKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#primaryKey)
- [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html)

## Additional Resources

- [Tree Grid Editing](editing.md)

<!-- * [Tree Grid Transactions](batch-editing.md) -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
