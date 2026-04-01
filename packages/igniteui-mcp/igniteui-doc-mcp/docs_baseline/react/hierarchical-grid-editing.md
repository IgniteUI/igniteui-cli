---
title: React Hierarchical Grid Editing - Ignite UI for React
_description: Get a powerful public API and an easy way to perform data manipulations like creating, updating, or deleting records. See the React Hierarchical Grid editing options!
_keywords: data manipulation, React, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/editing
_tocName: Editing
---

# React Hierarchical Grid Editing

The Ignite UI for React Cell Editing feature in React Hierarchical Grid provides an easy way to perform data manipulation operations like creating, updating, and deleting records. The [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) provides you with a powerful public API which allows you to customize the way these operations are performed. The data manipulation phases are:

- [Cell Editing](cell-editing.md)
- [Row Editing](row-editing.md)
- Batch Editing (Coming Soon)

## Setup

In order to specify which edit mode should be enabled, the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) exposes the following boolean properties - [`editable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#editable) and [`rowEditable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowEditable).

The [`editable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#editable) property enables you to specify the following options:

- **false** - the editing for the corresponding column will be disabled. This is the default value.
- **true** - the editing for the corresponding column will be enabled.

> Keep in mind that if the column is not editable, you can still modify its value through the public API exposed by the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html).

The [`rowEditable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowEditable) property enables you to specify the following options:

- **false** - the row editing in the corresponding grid will be disabled. This is the default value.
- **true** - the row editing in the corresponding grid will be enabled.

In the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html), if you set [`rowEditable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowEditable) property to true, and the [`editable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#editable) property is not explicitly defined for any column, the editing will be enabled for all the columns except the **primary key**.

<!--
[Batch editing](batch-editing.md) in the grid can be enabled for both [cell editing](cell-editing.md) and [row editing](row-editing.md) modes. In order to set up batch editing it is necessary to provide to the grid a  **TransactionService**.
-->

- **Cell and Batch Editing** - in this scenario every singe modification of each cell is preserved separately and undo/ redo operations are available on cell level;
- **Row and Batch Editing** - in this scenario the modifications are preserved on row level so undo/ redo operations will not be working for each cell that is modified but for the bunch of cell from each row.

### Editing Templates

If you want to use a data type specific edit templates, you should specify the column's [`dataType`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#dataType) property. So let's now see what are the default templates for each type:

- For `string` data type, default template is using [`IgrInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html).
- For `number` data type, default template is using [`IgrInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html) type="number", so if you try to update cell to a value which can not be parsed to a number your change is going to be discarded, and the value in the cell will be set to 0.
- For `date` data type, default template is using [`IgrDatePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html)
- For `dateTime` data type, default template is using `DateTimeEditor`. This editor will give you a mask directions for the input elements part of the DateTime object.
- For `time` - data type, default template is using `TimePicker`.
- For `boolean` data type, default template is using [`IgrCheckbox`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcheckbox.html).
- For `currency` data type, default template is using `InputGroup` with prefix/suffix configuration based on application or grid locale settings.
- For `percent` data type, default template is using `InputGroup` with suffix element that shows a preview of the edited value in percents.

 

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

All available column data types could be found in the official [Column types topic](column-types.md#default-template).

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

### Event Arguments and Sequence

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

The grid exposes a wide array of events that provide greater control over the editing experience. These events are fired during the [**Row Editing**](row-editing.md) and [**Cell Editing**](cell-editing.md) lifecycle - when starting, committing or canceling the editing action.

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

| Event           | Description                                                                                                                                               | Arguments                  | Cancellable |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------- |
| `RowEditEnter`  | If `RowEditing` is enabled, fires when a row enters edit mode                                                                                             | [`IgrGridEditEventArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridediteventargs.html)     | **true*-  |
| `CellEditEnter` | Fires when a cell **enters edit mode** (after `RowEditEnter`)                                                                                             | [`IgrGridEditEventArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridediteventargs.html)     | **true*-  |
| `CellEdit`      | If value is changed, fires just **before** a cell's value is **committed** (e.g. by pressing <kbd>ENTER</kbd>)                                                     | [`IgrGridEditEventArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridediteventargs.html)     | **true*-  |
| `CellEditDone`  | If value is changed, fires **after** a cell has been edited and cell's value is **committed*-                                                           | [`IgrGridEditDoneEventArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrideditdoneeventargs.html) | **false*- |
| `CellEditExit`  | Fires when a cell **exits edit mode*-                                                                                                                   | [`IgrGridEditDoneEventArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrideditdoneeventargs.html) | **false*- |
| `RowEdit`       | If `RowEditing` is enabled, fires just before a row in edit mode's value is **committed** (e.g. by clicking the `Done` button on the Row Editing Overlay) | [`IgrGridEditEventArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridediteventargs.html)     | **true*-  |
| `RowEditDone`   | If `RowEditing` is enabled, fires **after** a row has been edited and new row's value has been **committed**.                                            | [`IgrGridEditDoneEventArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrideditdoneeventargs.html) | **false*- |
| `RowEditExit`   | If `RowEditing` is enabled, fires when a row **exits edit mode*-                                                                                        | [`IgrGridEditDoneEventArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrideditdoneeventargs.html) | **false*- |

### Event Cancellation

- `RowEditEnter` - Neither `Row` nor `Cell` will enter edit mode.
- `CellEditEnter` - Prevents entering cell edit. If [`rowEditable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowEditable) is enabled, row edit will be triggered, although cell edit will remain forbidden.
- `CellEdit` - Allowed `Cell` and/or `Row` edit, hitting **Done** button or **Enter** won't commit the value or row transaction. Cell editing and Row editing won't be closed until **Cancel** button is clicked.
- `RowEdit` - Committing cell is possible, but not the whole row. The row will stay in edit mode and the row transaction will be considered open. Hitting **Done** does not commit or close the row. **Cancel** button closes the editing process and the transaction without committing the changes.

The following sample demonstrates the editing execution sequence in action:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import SingersData from './SingersData.json';
import { IgrRowSelectionEventArgs, IgrGridEditEventArgs, IgrGridEditDoneEventArgs } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private hierarchicalGrid: IgrHierarchicalGrid
    private hierarchicalGridRef(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid = r;
        this.setState({});
    }
    private rowIsland: IgrRowIsland

    constructor(props: any) {
        super(props);

        this.hierarchicalGridRef = this.hierarchicalGridRef.bind(this);
        this.webHierarchicalGridRendered = this.webHierarchicalGridRendered.bind(this);
        this.webHierarchicalGridRowEditEnter = this.webHierarchicalGridRowEditEnter.bind(this);
        this.webHierarchicalGridRowEdit = this.webHierarchicalGridRowEdit.bind(this);
        this.webHierarchicalGridRowEditDone = this.webHierarchicalGridRowEditDone.bind(this);
        this.webHierarchicalGridRowEditExit = this.webHierarchicalGridRowEditExit.bind(this);
        this.webHierarchicalGridCellEditEnter = this.webHierarchicalGridCellEditEnter.bind(this);
        this.webHierarchicalGridCellEdit = this.webHierarchicalGridCellEdit.bind(this);
        this.webHierarchicalGridCellEditExit = this.webHierarchicalGridCellEditExit.bind(this);
        this.webRowIslandGridRowEditEnter = this.webRowIslandGridRowEditEnter.bind(this);
        this.webRowIslandGridRowEdit = this.webRowIslandGridRowEdit.bind(this);
        this.webRowIslandGridRowEditDone = this.webRowIslandGridRowEditDone.bind(this);
        this.webRowIslandGridRowEditExit = this.webRowIslandGridRowEditExit.bind(this);
        this.webRowIslandGridCellEditEnter = this.webRowIslandGridCellEditEnter.bind(this);
        this.webRowIslandGridCellEdit = this.webRowIslandGridCellEdit.bind(this);
        this.webRowIslandGridCellEditExit = this.webRowIslandGridCellEditExit.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.singersData}
                    primaryKey="ID"
                    id="hierarchicalGrid"
                    ref={this.hierarchicalGridRef}
                    rowEditable={true}
                    onRendered={this.webHierarchicalGridRendered}
                    onRowEditEnter={this.webHierarchicalGridRowEditEnter}
                    onRowEdit={this.webHierarchicalGridRowEdit}
                    onRowEditDone={this.webHierarchicalGridRowEditDone}
                    onRowEditExit={this.webHierarchicalGridRowEditExit}
                    onCellEditEnter={this.webHierarchicalGridCellEditEnter}
                    onCellEdit={this.webHierarchicalGridCellEdit}
                    onCellEditExit={this.webHierarchicalGridCellEditExit}>
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="HasGrammyAward"
                        header="Has Grammy Award"
                        dataType="boolean">
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="number">
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate={false}
                        primaryKey="Album"
                        rowEditable={true}
                        onRowEditEnter={this.webRowIslandGridRowEditEnter}
                        onRowEdit={this.webRowIslandGridRowEdit}
                        onRowEditDone={this.webRowIslandGridRowEditDone}
                        onRowEditExit={this.webRowIslandGridRowEditExit}
                        onCellEditEnter={this.webRowIslandGridCellEditEnter}
                        onCellEdit={this.webRowIslandGridCellEdit}
                        onCellEditExit={this.webRowIslandGridCellEditExit}>
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date">
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="string">
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


    public webHierarchicalGridRendered(args:any): void {
        const hierarchicalGrid = document.getElementById("hierarchicalGrid");
        hierarchicalGrid.parentElement.className = "fill";
        hierarchicalGrid.parentElement.style.display = "flex";
        hierarchicalGrid.parentElement.style.height = "100vh";
        const container = document.createElement("div");
        container.id = "container";
        container.style.height = "80vh";
        container.style.width = "100%";
        container.style.overflow = "auto";
        hierarchicalGrid.parentElement.appendChild(container);
        const title = document.createElement("span");
        title.textContent = "Events execution sequence:";
        container.appendChild(title);
    }

    public webHierarchicalGridRowEditEnter(args: IgrGridEditEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Hierarchical Grid => 'rowEditEnter' with 'RowID':` + args.detail.rowID;
        container.appendChild(message);
    }

    public webHierarchicalGridRowEdit(args: IgrGridEditEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Hierarchical Grid => 'rowEdit'`;
        container.appendChild(message);
    }

    public webHierarchicalGridRowEditDone(args: IgrGridEditDoneEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Hierarchical Grid => 'rowEditDone'`;
        container.appendChild(message);
    }

    public webHierarchicalGridRowEditExit(args: IgrGridEditDoneEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Hierarchical Grid => 'rowEditExit'  << End of cycle >>`;
        container.appendChild(message);
    }

    public webHierarchicalGridCellEditEnter(args: IgrGridEditEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Hierarchical Grid => 'cellEditEnter' with 'value':` + args.detail.oldValue, args.detail.cancel;
        container.appendChild(message);
    }

    public webHierarchicalGridCellEdit(args: IgrGridEditEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Hierarchical Grid => 'cellEdit' with 'newValue':` + args.detail.newValue, args.detail.cancel;
        container.appendChild(message);
    }

    public webHierarchicalGridCellEditExit(args: IgrGridEditDoneEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Hierarchical Grid => 'cellEditExit'`;
        container.appendChild(message);
    }

    public webRowIslandGridRowEditEnter(args: IgrGridEditEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Row Island => 'rowEditEnter' with 'RowID':` + args.detail.rowID;
        container.appendChild(message);
    }

    public webRowIslandGridRowEdit(args: IgrGridEditEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Row Island => 'rowEdit'`;
        container.appendChild(message);
    }

    public webRowIslandGridRowEditDone(args: IgrGridEditDoneEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Row Island => 'rowEditDone'`;
        container.appendChild(message);
    }

    public webRowIslandGridRowEditExit(args: IgrGridEditDoneEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Row Island => 'rowEditExit'  << End of cycle >>`;
        container.appendChild(message);
    }

    public webRowIslandGridCellEditEnter(args: IgrGridEditEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Row Island => 'cellEditEnter' with 'value':` + args.detail.oldValue, args.detail.cancel;
        container.appendChild(message);
    }

    public webRowIslandGridCellEdit(args: IgrGridEditEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Row Island => 'cellEdit' with 'newValue':` + args.detail.newValue, args.detail.cancel;
        container.appendChild(message);
    }

    public webRowIslandGridCellEditExit(args: IgrGridEditDoneEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Row Island => 'cellEditExit'`;
        container.appendChild(message);
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


### Features integration

While a cell/row is in edit mode, a user may interact with the grid in many ways. The following table specifies how a certain interaction affects the current editing:

| Hierarchical Grid | Filtering | Sorting | Paging | Moving | Pinning | Hiding | GroupBy | Resizing | Escape | Enter |  F2   |  Tab  | Cell Click | Add new row/Delete/Edit |
| ---------------- | :-------: | :-----: | :----: | :----: | :-----: | :----: | :-----: | :------: | :----: | :---: | :---: | :---: | :--------: | :---------------------: |
| Keep edit mode   |           |         |        |        |         |        |         |    ✔     |        |       |       |       |            |                         |
| Exit edit mode   |     ✔     |    ✔    |   ✔    |   ✔    |    ✔    |   ✔    |    ✔    |          |   ✔    |   ✔   |   ✔   |   ✔   |     ✔      |            ✔            |
| Commit           |           |         |        |        |         |        |         |          |        |   ✔   |   ✔   |   ✔   |     ✔      |            ✔            |
| Discard          |     ✔     |    ✔    |   ✔    |   ✔    |    ✔    |   ✔    |    ✔    |          |   ✔    |       |       |       |            |                         |

As seen from the table, all interactions, except resizing a column, will end the editing and will discard the new values. Should the new value be committed, this can be done by the developer in the corresponding feature "-ing" event.

Example how to commit new values, if user tries to sort the column while a cell/row is in edit mode:

<!-- React -->

```tsx
function onSorting(args: IgrSortingEventArgs) {
    const grid = args.target as IgrHierarchicalGrid;
    grid.endEdit(true);
}

<IgrHierarchicalGrid data={localData} primaryKey="ProductID" onSorting={onSorting}>
</IgrHierarchicalGrid>
```

<!-- end: React -->

## API References

- [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)

## Additional Resources

<!-- Angular, WebComponents, React -->

- [Column Data Types](column-types.md#default-template)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

<!-- ComponentStart: HierarchicalGrid -->

<!-- * [Searching](search.md) -->

<!-- ComponentEnd: HierarchicalGrid -->

<!-- end: Angular, WebComponents, React -->
