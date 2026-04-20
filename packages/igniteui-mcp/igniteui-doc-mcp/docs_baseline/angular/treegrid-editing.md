---
title: Angular Tree Grid Editing - Ignite UI for Angular
_description: Get a powerful public API and an easy way to perform data manipulations like creating, updating, or deleting records. See the Angular data grid editing options!
_keywords: data manipulation, ignite ui for angular, infragistics
_license: commercial
_canonicalLink: grid/editing
_tocName: Editing
---
<style>
    /* Fix for the overlapping right side-affix when the screen is shrunk */
    .table-responsive {
        width:63vw;
    }
</style>
# Angular Tree Grid Editing
Ignite UI for Angular Tree Grid component provides an easy way to perform data manipulation operations like creating, updating, and deleting records. The data manipulation phases are: [Cell Editing](cell-editing.md), [Row Editing](row-editing.md), and [Batch Editing](batch-editing.md). The Tree Grid gives you a powerful public API which allows you to customize the way these operations are performed. Additionally, **Cell editing** exposes several default editors based on the column data type, that could be easily customized via [igxCellEditor directive](cell-editing.md#cell-editing-templates) or [igxRow directives](row-editing.md#customizing-row-editing-overlay).
## Setup
In order to specify which edit mode should be enabled, the Tree Grid exposes the following boolean properties - [`editable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#editable) and [`rowEditable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowEditable).
Property **editable** enables you to specify the following options:
- **false** - the editing for the corresponding column will be disabled; /default value/
- **true** - the editing for the corresponding column will be enabled;
>Keep in mind that if the column is not editable, you can still modify its value through the public API exposed by the Tree Grid.
Property **rowEditable** enables you to specify the following options:
- **false** - the row editing in the corresponding grid will be disabled; /default value/
- **true** - the row editing in the corresponding grid will be enabled;
In the Tree Grid if you set rowEditable property to true, and editable property is not explicitly defined for any column, the editing will be enabled for all the columns except the _primary key_.
**Batch editing** in the grid can be enabled for both **cell editing** and **row editing** modes. In order to set up batch editing it is necessary to provide to the grid a  _TransactionService_.
- _Cell and Batch Editing_ - in this scenario every singe modification of each cell is preserved separately and undo/ redo operations are available on cell level;
- _Row and Batch Editing_ - in this scenario the modifications are preserved on row level so undo/ redo operations will not be working for each cell that is modified but for the bunch of cell from each row.
### Editing Templates

 If you want to use a data type specific _edit templates_, you should specify the column [`dataType`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#dataType) property. So let's now see what are the default templates for each type:
- For `string` data type, default template is using [igxInput](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinputdirective.html)
- For `number` data type, default template is using [igxInput](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinputdirective.html) type="number", so if you try to update cell to a value which can not be parsed to a number your change is going to be discarded, and the value in the cell will be set to 0.
- For `date` data type, default template is using [igxDatePicker](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html)
- For `dateTime` data type, default template is using [IgxDateTimeEditor directive](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatetimeeditordirective.html). This editor will give you a mask directions for the input elements part of the DateTime object.
- For `date` data type, default template is using [IgxDatePicker component](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html).
- For `time` -  data type, default template is using [IgxTimePicker component](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtimepickercomponent.html).
- For `boolean` data type, default template is using [igxCheckbox](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcheckboxcomponent.html)
- For `currency` data type, default template is using [IgxInputGroup](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinputgroupcomponent.html) with prefix/suffix configuration based on application or grid locale settings.
- For `percent` data type, default template is using [IgxInputGroup](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinputgroupcomponent.html) with suffix element that shows a preview of the edited value in percents.
- For custom templates you can see [Cell Editing topic](cell-editing.md#cell-editing-templates)
All available column data types could be found in the official [Column types topic](column-types.md#default-template).
#### Default template editors of date-time columns
The template editors of `date`, `dateTime` and `time` column data types use a default input format as per the `IgxGrid`'s [`locale`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#locale).
In case the [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/columntype.html#pipeArgs) object `format` property is set on the column, the input format of the editors will be inferred from it. The condition is that it can be parsed as containing numeric date-time parts only.
If the editors input format should be explicitly set, the [`editorOptions`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/columntype.html#editorOptions) object of type [`IColumnEditorOptions`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/icolumneditoroptions.html) can be leveraged. It accepts a `dateTimeFormat` property that is used as input format for the editors of `date`, `dateTime` and `time` column data types.
```typescript
const editorOptions: IColumnEditorOptions = {
    dateTimeFormat: 'MM/dd/YYYY',
}
```
```html
<igx-column field="sampleDate" dataType="date" [editorOptions]="editorOptions"></igx-column>
```
### Event arguments and sequence
The grid exposes a wide array of events that provide greater control over the editing experience. These events are fired during the [**Row Editing**](row-editing.md) and [**Cell Editing**](cell-editing.md) lifecycle - when starting, committing or canceling the editing action.
| Event                                                                                 | Description                                                                                                                                               | Arguments                                                                                    | Cancellable |
| :------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------- | :---------- |
| [`rowEditEnter`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#rowEditEnter)   | If `rowEditing` is enabled, fires when a row enters edit mode                                                                                             | [IGridEditEventArgs](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igridediteventargs.html)         | `true`      |
| [`cellEditEnter`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#cellEditEnter) | Fires when a cell **enters edit mode** (after `rowEditEnter`)                                                                                             | [IGridEditEventArgs](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igridediteventargs.html)         | `true`      |
| [`cellEdit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#cellEdit)           | If value is changed, fires just **before** a cell's value is **committed** (e.g. by pressing `Enter`)                                                     | [IGridEditEventArgs](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igridediteventargs.html)         | `true`      |
| [`cellEditDone`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#celleditdone)   | If value is changed, fires **after** a cell has been edited and cell's value is **committed**                                                             | [IGridEditDoneEventArgs](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igrideditdoneeventargs.html) | `false`     |
| [`cellEditExit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#cellEditExit)   | Fires when a cell **exits edit mode**                                                                                                                     | [IGridEditDoneEventArgs](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igridediteventargs.html)     | `false`     |
| [`rowEdit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#rowEdit)             | If `rowEditing` is enabled, fires just before a row in edit mode's value is **committed** (e.g. by clicking the `Done` button on the Row Editing Overlay) | [IGridEditEventArgs](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igridediteventargs.html)         | `true`      |
| [`rowEditDone`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#rowEditDone)     | If `rowEditing` is enabled, fires **after** a row has been edited and new row's value has been **committed**.                                             | [IGridEditDoneEventArgs](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igridediteventargs.html)     | `false`     |
| [`rowEditExit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#rowEditExit)     | If `rowEditing` is enabled, fires when a row **exits edit mode**                                                                                          | [IGridEditDoneEventArgs](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igridediteventargs.html)     | `false`     |
### Event cancellation
- `RowEditEnter` - Neither Row nor Cell will enter edit mode.
- `CellEditEnter` - Prevents entering cell edit. If [`rowEditable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowEditable) is enabled, row edit will be triggered, although cell edit will remain forbidden.
- `CellEdit` - Allowed Cell/Row edit, hitting **Done** button or **Enter** won't commit the value or row transaction. Cell editing and Row editing won't be closed until **Cancel** button is clicked.
- `RowEdit` - Committing cell is possible, but not the whole row. The row will stay in edit mode and the row transaction will be considered open. Hitting **Done** does not commit or close the row. **Cancel** button closes the editing process and the transaction without committing the changes.
The following sample demonstrates the editing execution sequence in action:
```typescript
import { Component, ElementRef, Renderer2, ViewChild, inject } from '@angular/core';
import { generateEmployeeFlatData } from '../data/employees-flat';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tgrid-editing-lifecycle',
    templateUrl: 'tgrid-editing-lifecycle.component.html',
    styleUrls: ['tgrid-editing-lifecycle.component.scss'],
    imports: [IgxSwitchComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxButtonDirective, IgxIconComponent]
})
export class TGridEditingLifecycleComponent {
    private renderer = inject(Renderer2);

    @ViewChild('logger')
    public logger: ElementRef;

    public $rowEditEnter = false;
    public $cellEditEnter = false;
    public $cellEdit = false;
    public $rowEdit = false;
    public data;

    public constructor() {
        this.data = generateEmployeeFlatData();
    }

    public rowEditEnter(evt) {
        evt.cancel = this.$rowEditEnter;
        this.logAnEvent(`=> 'rowEditEnter' with 'RowID':` + evt.rowID, evt.cancel);
    }
    public cellEditEnter(evt) {
        evt.cancel = this.$cellEditEnter;
        this.logAnEvent(`=> 'cellEditEnter' with 'value':` + evt.oldValue, evt.cancel);
    }
    public cellEdit(evt) {
        evt.cancel = this.$cellEdit;
        this.logAnEvent(`=> 'cellEdit' with 'newValue':` + evt.newValue, evt.cancel);
    }
    public cellEditDone() {
        this.logAnEvent(`=> 'cellEditDone'`);
    }
    public cellEditExit() {
        this.logAnEvent(`=> 'cellEditExit'`);
    }
    public rowEdit(evt) {
        evt.cancel = this.$rowEdit;
        this.logAnEvent(`=> 'rowEdit'`, evt.cancel);
    }
    public rowEditDone() {
        this.logAnEvent(`=> 'rowEditDone'`);
    }
    public rowEditExit() {
        this.logAnEvent(`=> 'rowEditExit'  << End of cycle >>`);
    }

    public clearLog() {
        const  elements = this.logger.nativeElement.querySelectorAll('p');
        for (let index = 0; index < elements.length; index++) {
            this.renderer.removeChild(this.logger.nativeElement, elements[index]);
        }
    }

    private logAnEvent(msg: string, canceled?: boolean) {
        const createElem = this.renderer.createElement('p');

        if (canceled) {
            msg = msg.concat(': has been canceled ');
        }

        const text = this.renderer.createText(msg);
        this.renderer.appendChild(createElem, text);
        const container = this.logger.nativeElement;
        this.renderer.insertBefore(container, createElem, container.children[0]);
    }
}
```
```html
<div class="switches">
    <igx-switch (change)='this.$rowEditEnter = !this.$rowEditEnter' style="padding-left: 20px">cancel rowEditEnter</igx-switch>
    <igx-switch (change)='this.$cellEditEnter = !this.$cellEditEnter' style="padding-left: 20px">cancel cellEditEnter</igx-switch>
    <igx-switch (change)='this.$cellEdit = !this.$cellEdit' style="padding-left: 20px">cancel cellEdit</igx-switch>
    <igx-switch (change)='this.$rowEdit = !this.$rowEdit' style="padding-left: 20px">cancel rowEdit</igx-switch>
</div>
<div class="sample-wrapper">
    <div class="grid-wrapper">
        <div>
            <igx-tree-grid [igxPreventDocumentScroll]="true"  #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" width="100%"
                height="550px"
                [rowEditable]="true"
                (rowEditEnter)="rowEditEnter($event)"
                (cellEditEnter)="cellEditEnter($event)"
                (cellEdit)="cellEdit($event)"
                (cellEditDone)="cellEditDone()"
                (cellEditExit)="cellEditExit()"
                (rowEdit)="rowEdit($event)"
                (rowEditDone)="rowEditDone()"
                (rowEditExit)="rowEditExit()">
                <igx-column field="Name" dataType="string"></igx-column>
                <igx-column field="Title" dataType="string"></igx-column>
                <igx-column field="Age" dataType="number" [editable]="true"></igx-column>
                <igx-column field="HireDate" dataType="date" [editable]="true"></igx-column>
            </igx-tree-grid>
        </div>
    </div>
    <div class="log-wrapper">
        <div class="selected-data-area">
            <div class="logContainer">
                <div class="highlight">
                    <span>Events execution sequence</span>
                    <button class="clearBtn" igxButton="flat" (click)="clearLog()">
                        <igx-icon>clear</igx-icon>
                        <span>Clear log</span>
                    </button>
                </div>
                <hr />
                <div #logger class="logger"></div>
            </div>
        </div>
    </div>
</div>
```
```scss
:host {
    width: 100%;
}

.switches {
    margin-top: 12px;
    margin-bottom: 8px;
    width: 100%;
    display: flex;
    justify-content: space-around;
}

.sample-wrapper {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
}

.grid-wrapper {
    width: 60%;
    margin: 8px;
}
.log-wrapper {
    width: 35%;
}

.clearBtn {
    top: 3px;
    margin-left: 20px;
}
.selected-data-area{
    overflow-y: auto;
    max-height: 550px;
    width: 100%;
    height: 100%;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
    margin-top: 8px;
}

.logContainer {
    padding: 0.2rem 0.4rem;
}

.highlight {
    text-align: center;
    margin-bottom: 0.4rem;
}
```
### Features integration
While a cell/row is in edit mode, a user may interact with the grid in many ways. The following table specifies how a certain interaction affects the current editing:
| Tree Grid  |  Filtering |  Sorting |  Paging |  Moving |  Pinning |  Hiding |  GroupBy |  Resizing |  Escape |  Enter |  F2 |  Tab |  Cell Click |  Add new row/Delete/Edit |
| :------------- | :--------: | :------: | :-----: | :-----: | :------: | :-----: | :------: | :-------: | :-----: | :----: | :-: | :--: | :---------: | :----------------------: |
| Keep edit mode |            |          |         |         |          |         |          |        ✔  |         |        |     |      |             |                          |
| Exit edit mode |         ✔  |       ✔  |      ✔  |      ✔  |       ✔  |      ✔  |       ✔  |           |      ✔  |     ✔  |  ✔  |   ✔  |         ✔   |                     ✔    |
| Commit         |            |          |         |         |          |         |          |           |         |     ✔  |  ✔  |   ✔  |         ✔   |                     ✔    |
| Discard        |         ✔  |       ✔  |      ✔  |      ✔  |       ✔  |      ✔  |       ✔  |           |      ✔  |        |     |      |             |                          |
As seen from the table, all interactions, except resizing a column, will end the editing and will discard the new values. Should the new value be committed, this can be done by the developer in the corresponding feature "-ing" event.
Example how to commit new values, if user tries to sort the column while a cell/row is in edit mode:
```html
<igx-grid #grid [data]="localData" [primaryKey]="'ProductID'" (sorting)="onSorting($event)">
...
</igx-grid>
```
```typescript
public onSorting(event: ISortingEventArgs) {
    this.grid.endEdit(true);
    // (event.owner as IgxGridComponent).endEdit(true);
}
```
## API References
- [IgxGridCell](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html)
- [IgxTreeGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
_ [IgxTreeGridRow](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridrow.html)
- [IgxInputDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinputdirective.html)
- [IgxDatePickerComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html)
- [IgxDatePickerComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-date-picker-theme)
- [IgxCheckboxComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcheckboxcomponent.html)
- [IgxCheckboxComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-checkbox-theme)
- [IgxOverlay](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html)
- [IgxOverlay Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-overlay-theme)
## Additional Resources
<div class="divider--half"></div>
- [Tree Grid overview](tree-grid.md)
- [Build CRUD operations with igxGrid](../general/how-to/how-to-perform-crud.md)
- [Column Data Types](column-types.md#default-template)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
* [Searching](search.md)
