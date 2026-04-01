---
title: React Hierarchical Grid Row Adding - Ignite UI for React
_description: Learn how to use and customize the built-in row adding functionality with React and utilize intuitive grid row adding and CRUD capabilities.
_keywords: React, Hierarchical Grid, IgrHierarchicalGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-adding
_tocName: Row Adding
_premium: true
---

# React Hierarchical Grid Row Adding

<!-- ComponentStart: Grid, HierarchicalGrid -->

The Ignite UI for React Row Adding feature in React Hierarchical Grid enables users to input and submit new data records without navigating to a separate form or page. With the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html), users can manipulate data through inline row adding and a powerful API for CRUD operations.
Add an [`IgrActionStrip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igractionstrip.html) component with editing actions enabled in the grid's template. After that hover a row and use the provided button. Finally press <kbd>ALT</kbd> + <kbd>+</kbd> to spawn the row adding UI.

<!-- ComponentEnd: Grid, HierarchicalGrid -->

## React Hierarchical Grid Row Adding Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule, IgrActionStripModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrActionStrip, IgrGridEditingActions, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import SingersData from './SingersData.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule,
    IgrActionStripModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private hGrid: IgrHierarchicalGrid
    private hGridRef(r: IgrHierarchicalGrid) {
        this.hGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.hGridRef = this.hGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.singersData}
                    id="hGrid"
                    ref={this.hGridRef}
                    primaryKey="ID"
                    rowEditable={true}>
                    <IgrActionStrip
                    >
                        <IgrGridEditingActions
                            addRow={true}>
                        </IgrGridEditingActions>
                    </IgrActionStrip>
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        dataType="number"
                        minWidth="88px"
                        maxWidth="230px"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate={false}
                        primaryKey="Album"
                        rowEditable={true}>
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            autoGenerate={false}
                            primaryKey="Title"
                            rowEditable={true}>
                            <IgrActionStrip
                            >
                                <IgrGridEditingActions
                                    addRow={true}>
                                </IgrGridEditingActions>
                            </IgrActionStrip>
                            <IgrColumn
                                field="Number"
                                header="No."
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                header="Title"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                header="Released"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Genre"
                                header="Genre"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        autoGenerate={false}
                        primaryKey="Tour"
                        rowEditable={true}>
                        <IgrActionStrip
                        >
                            <IgrGridEditingActions
                                addRow={true}>
                            </IgrGridEditingActions>
                        </IgrActionStrip>
                        <IgrColumn
                            field="Tour"
                            header="Tour"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Location"
                            header="Location"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner"
                            header="Headliner"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _singersData: any[] = SingersData;
    public get singersData(): any[] {
        return this._singersData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## Row Adding Usage

Then define a [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) with bound data source, [`rowEditable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowEditable) set to true and an [`IgrActionStrip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igractionstrip.html) component with editing actions enabled. The `AddRow` input controls the visibility of the button that spawns the row adding UI.

<!-- React -->

<!-- end: React -->

<!-- ComponentEnd: TreeGrid -->

<!-- React -->

<!-- ComponentStart: HierarchicalGrid -->

```tsx
<IgrHierarchicalGrid autoGenerate={false} data={singersData} id="hGrid" primaryKey="ID" rowEditable={true} ref={hierarchicalGrid1Ref}>
   <IgrActionStrip>
     <IgrGridEditingActions
        addRow={true}>
       </IgrGridEditingActions>
   </IgrActionStrip>
   <IgrColumn field="Artist" header="Artist" dataType="string" resizable={true}>
   </IgrColumn>
   <IgrColumn field="Debut" header="Debut" dataType="number" minWidth="88px" maxWidth="230px" resizable={true}>
   </IgrColumn>
   <IgrColumn field="GrammyNominations" header="Grammy Nominations" dataType="string" resizable={true}>
   </IgrColumn>
   <IgrColumn field="GrammyAwards" header="Grammy Awards" dataType="string" resizable={true}>
   </IgrColumn>
   <IgrRowIsland childDataKey="Albums" autoGenerate={false}>
       <IgrColumn field="Album" header="Album" dataType="string" resizable={true}>
       </IgrColumn>
       <IgrColumn field="LaunchDate" header="Launch Date" dataType="date" resizable={true}>
       </IgrColumn>
       <IgrColumn field="BillboardReview" header="Billboard Review" dataType="string" resizable={true}>
       </IgrColumn>
       <IgrColumn field="USBillboard200" header="US Billboard 200" dataType="string" resizable={true}>
       </IgrColumn>
       <IgrRowIsland childDataKey="Songs" autoGenerate={false}>
           <IgrActionStrip>
                <IgrGridEditingActions addRow={true}>
                </IgrGridEditingActions>
            </IgrActionStrip>
           <IgrColumn field="Number" header="No." dataType="string" resizable={true}>
           </IgrColumn>
           <IgrColumn field="Title" header="Title" dataType="string" resizable={true}>
           </IgrColumn>
           <IgrColumn field="Released" header="Released" dataType="string" resizable={true}>
           </IgrColumn>
           <IgrColumn field="Genre" header="Genre" dataType="string" resizable={true}>
           </IgrColumn>
       </IgrRowIsland>
   </IgrRowIsland>
   <IgrRowIsland childDataKey="Tours" autoGenerate={false}>
           <IgrActionStrip>
                <IgrGridEditingActions addRow={true}>
                </IgrGridEditingActions>
            </IgrActionStrip>
       <IgrColumn field="Tour" header="Tour" dataType="string" resizable={true}>
       </IgrColumn>
       <IgrColumn field="StartedOn" header="Started on" dataType="string" resizable={true}>
       </IgrColumn>
       <IgrColumn field="Location" header="Location" dataType="string" resizable={true}>
       </IgrColumn>
       <IgrColumn field="Headliner" header="Headliner" dataType="string" resizable={true}>
       </IgrColumn>
   </IgrRowIsland>
</IgrHierarchicalGrid>
```

<!-- ComponentEnd: HierarchicalGrid -->

<!-- end: React -->

> **Note**:
> Setting primary key is mandatory for row adding operations.

> **Note**:
> Every column excluding the primary key one is editable in the row adding UI by default. If you want to disable editing for a specific column, then you have to set the [`editable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#editable) column's input to `false`.

<!-- ComponentStart: Grid, HierarchicalGrid -->

> **Note**:
> The [`IgrGridEditingActions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrideditingactions.html) input controlling the visibility of the add row button may use the action strip context (which is of type [`IgrRowType`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrrowtype.html) to fine tune which records the button shows for.

<!-- ComponentEnd: Grid, HierarchicalGrid -->

The internal `BaseTransactionService` is automatically provided for [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html). It holds pending cell changes until the row state is submitted or cancelled.

## Start Row Adding Programmatically

[`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) allows to programmatically spawn the add row UI by using two different public methods. One that accepts a row ID for specifying the row under which the UI should spawn and another that works by index. You can use these methods to spawn the UI anywhere within the current data view. Changing the page or specifying a row that is e.g. filtered out is not supported.

<!-- ComponentStart: Grid, HierarchicalGrid -->

Using [`beginAddRowById`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#beginAddRowById) requires you to specify the row to use as context for the operation by its `RowID` (PK). The method then functions as though the end-user clicked on the add row action strip button for the specified row, spawning the UI under it. You can also make the UI spawn as the very first row in the grid by passing `null` for the first parameter.

<!-- React -->

```typescript
gridRef.current.beginAddRowById('ALFKI');  // Spawns the add row UI under the row with PK 'ALFKI'
gridRef.current.beginAddRowById(null);     // Spawns the add row UI as the first record
```

The `BeginAddRowByIndex` method works similarly but requires you to specify the index at which the UI should spawn. Allowed values range between 0 and the size of the data view - 1.

<!-- React -->

```typescript
gridRef.current.beginAddRowByIndex(10);   // Spawns the add row UI at index 10
gridRef.current.beginAddRowByIndex(0);    // Spawns the add row UI as the first record
```

<!-- ComponentEnd: Grid, HierarchicalGrid -->

## Positioning

- The default position of row add UI is below the row that the end user clicked the add row button for.

- The [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) scrolls to fully display the add row UI automatically.

- The overlay for the add row UI maintains its position during scrolling.

## Behavior

The add row UI has the same behavior as the row editing one as they are designed to provide a consistent editing experience to end users. Please, refer to the [Hierarchical Grid Row Editing](row-editing.md) topic for more information.

After a new row is added through the row adding UI, its position and/or visibility is determined by the sorting, filtering and grouping state of the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html). In a [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) that does not have any of these states applied, it appears as the last record. A snackbar is briefly displayed containing a button the end user may use to scroll the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) to its position if it is not in view.

## Keyboard Navigation

- <kbd>ALT</kbd> + <kbd>+</kbd> - Enters edit mode for adding a row

<!---->

- <kbd>ESC</kbd> exits row adding mode without submitting any changes

- <kbd>TAB</kbd> move focus from one editable cell in the row to the next and from the right-most editable cell to the CANCEL and DONE buttons. Navigation from DONE button goes to the left-most editable cell within the currently edited row.

## Feature Integration

- Any row adding operation will stop if the data view of the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) gets modified. Any changes made by the end user are submitted. Operations that change the data view include but are not limited to sorting, grouping, filtering, paging, etc.

- Summaries are updated after the row add operation finishes. The same is valid for the other data view dependant features such as sorting, filtering, etc.

<!-- ComponentStart: HierarchicalGrid -->

- When spawning the UI for the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html), any child layout currently expanded for a row that the end user clicks the add row button for is collapsed.

<!-- ComponentEnd: HierarchicalGrid -->

## Customizing Row Adding Overlay

### Customizing Text

<!-- WebComponents, React, Blazor -->

Customizing the text of the row adding overlay is possible using the [`rowAddTextTemplate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowAddTextTemplate).

<!-- end: WebComponents, React, Blazor -->

<!-- React -->

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

<!-- end: React -->

## Styling

The row adding UI comprises the buttons in the [`IgrActionStrip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igractionstrip.html) editing actions, the editing editors and overlay, as well as the snackbar which allows end users to scroll to the newly added row. To style these components you may refer to these comprehensive guides in their respective topics:

- [Hierarchical Grid Row Editing](row-editing.md#styling)
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
- [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)

## Additional Resources

- [Hierarchical Grid Editing](editing.md)

<!-- * [Hierarchical Grid Transactions](batch-editing.md) -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
