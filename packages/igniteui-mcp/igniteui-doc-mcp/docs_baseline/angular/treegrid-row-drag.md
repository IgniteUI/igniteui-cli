---
_tocName: Row Drag
_premium: true
---
---title: Row Dragging in Angular Tree Grid - Ignite UI for Angular_description: Row dragging in Angular Tree Grid is used to quickly rearrange rows by dragging them with the mouse. See how to configure row dragging in your project._keywords: angular drag component, material component, ignite ui for angular, infragistics_license: commercial_canonicalLink: grid/row-drag---# Row Dragging in Angular Tree GridIn Ignite UI for Angular Tree Grid, **RowDrag** is initialized on the root `igx-tree-grid` component and is configurable via the [`rowDraggable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#rowDraggable) input. Enabling row dragging provides users with a row drag-handle with which they can initiate dragging of a row.## Angular Tree Grid Row Drag Example```typescript
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ViewChild } from '@angular/core';
import { IDropDroppedEventArgs, IgxDropDirective } from 'igniteui-angular/directives';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxColumnComponent, RowType } from 'igniteui-angular/grids/core';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { FULL_EMPLOYEE_DATA } from '../data/employees';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

// eslint-disable-next-line no-shadow
enum DragIcon {
    DEFAULT = 'drag_indicator',
    ALLOW = 'remove'
}

@Component({
    selector: 'app-tree-grid-row-drag-base',
    styleUrls: ['tree-grid-row-drag-base.component.scss'],
    templateUrl: 'tree-grid-row-drag-base.component.html',
    imports: [IgxDropDirective, IgxIconComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent]
})
export class TreeGridRowDragBaseComponent {
    @ViewChild(IgxTreeGridComponent, { read: IgxTreeGridComponent, static: true })
    public treeGrid: IgxTreeGridComponent;

    public localData = [];
    constructor() {
        this.localData = FULL_EMPLOYEE_DATA();
    }

    public onRowDragEnd(args) {
        args.animation = true;
    }

    public onDropAllowed(args: IDropDroppedEventArgs) {
        const draggedRow: RowType = args.dragData;
        draggedRow.delete();
    }

    public onEnterAllowed(args) {
        this.changeGhostIcon(args.drag.ghostElement, DragIcon.ALLOW);
    }

    public onLeaveAllowed(args) {
        this.changeGhostIcon(args.drag.ghostElement, DragIcon.DEFAULT);
    }

    private changeGhostIcon(ghost, icon: string) {
        if (ghost) {
            const currentIcon = ghost.querySelector('.igx-grid__drag-indicator > igx-icon');
            if (currentIcon) {
                currentIcon.innerText = icon;
            }
        }
    }
}
```
```html
<div class="drop-area" igxDrop (enter)="onEnterAllowed($event)" (leave)="onLeaveAllowed($event)"
    (dropped)="onDropAllowed($event)">
    <igx-icon>delete</igx-icon>
    <div>Drag a row here to delete it</div>
</div>
<igx-tree-grid [igxPreventDocumentScroll]="true"  #treeGrid [data]="localData" [moving]="true" childDataKey="Employees" width="800px" height="540px" [autoGenerate]="false"
    [rowDraggable]="true" [allowFiltering]="true"
    (rowDragEnd)="onRowDragEnd($event)">
    <igx-paginator></igx-paginator>
    <igx-column field="Name" dataType="string" [sortable]="true" [editable]="true" [resizable]="true">
    </igx-column>
    <igx-column field="Title" dataType="string" [sortable]="true" [editable]="true" [resizable]="true">
    </igx-column>
    <igx-column field="HireDate" header="Hire Date" dataType="date" [sortable]="true" [editable]="true"
        [resizable]="true" width="150px"></igx-column>
    <igx-column field="Age" dataType="number" [sortable]="true" [editable]="true" [resizable]="true"
        width="100px"></igx-column>
</igx-tree-grid>
```
```scss
.drop-area {
    width: 160px;
    height: 160px;
    background-color: #d3d3d3;
    border: 1px dashed #131313;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    text-align: center;
    margin: 8px;
}

:host {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-flow: row;
    width: 100%;
    padding-top: 10px;
}
```<div class="divider--half"></div>## ConfigurationIn order to enable row-dragging for your `igx-tree-grid`, all you need to do is set the grid's [`rowDraggable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#rowDraggable) to **`true`**. Once this is enabled, a row-drag handle will be displayed on each row. This handle can be used to initiate row dragging.```html<igx-tree-grid [rowDraggable]="true">
 ...</igx-tree-grid>```Clicking on the drag-handle and _moving the cursor_ while holding down the button will cause the grid's [`rowDragStart`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#rowDragStart) event to fire. Releasing the click at any time will cause [`rowDragEnd`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#rowDragEnd) event to fire.Below, you can find a walkthrough on how to configure an `igx-tree-grid` to support row dragging and how to properly handle the drop event.@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {In this example, we'll handle dragging a row from a grid to a designated area and, when dropping it, removing it from the grid.}### Drop AreasEnabling row-dragging was pretty easy, but now we have to configure how we'll handle row-_dropping_.We can define where we want our rows to be dropped using the [`igxDrop` directive](../drag-drop.md).First we need to import the `IgxDragDropModule` in our app module:```typescriptimport { ..., IgxDragDropModule } from 'igniteui-angular/directives';// import { ..., IgxDragDropModule } from '@infragistics/igniteui-angular'; for licensed package...@NgModule({
    imports: [..., IgxDragDropModule]})```Then, in our template, we define a drop-area using the directive's selector:@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {```html<div class="drop-area" igxDrop (enter)="onEnterAllowed($event)" (leave)="onLeaveAllowed($event)"(dropped)="onDropAllowed($event)">
    <igx-icon>delete</igx-icon>
    <div>Drag a row here to delete it</div></div>```}You may enable animation when a row is dropped on a non-droppable area using the `animation` parameter of the [`rowDragEnd`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#rowDragEnd) event. If set to true, the dragged row will animate back to its' original position when dropped over a non-droppable area.You may enable animation like this:```typescriptexport class IgxTreeGridRowDragComponent {

    public onRowDragEnd(args) {
        args.animation = true;
    }}```### Drop Area Event HandlersOnce we've defined our drop-area in the template, we have to declare our handlers for the `igxDrop`'s [`enter`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdirective.html#enter), [`leave`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdirective.html#leave) and [`dropped`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdirective.html#dropped) events in our component's `.ts` file.First, let's take a look at our `enter` and `leave` handlers. In those methods, we just want to change the icon of the drag's _ghost_ so we can indicate to the user that they are above an area that allows them to drop the row:```typescriptexport class IgxTreeGridRowDragComponent {
    public onEnterAllowed(args) {
        this.changeGhostIcon(args.drag.ghostElement, DragIcon.ALLOW);
    }

    public onLeaveAllowed(args) {
        this.changeGhostIcon(args.drag.ghostElement, DragIcon.DEFAULT);
    }

    private changeGhostIcon(ghost, icon: string) {
        if (ghost) {
            const currentIcon = ghost.querySelector('.igx-grid__drag-indicator > igx-icon');
            if (currentIcon) {
                currentIcon.innerText = icon;
            }
        }
    }}```The `changeGhostIcon` **private** method just changes the icon inside of the drag ghost. The logic in the method finds the element that contains the icon (using the `igx-grid__drag-indicator` class that is applied to the drag-indicator container), changing the element's inner text to the passed one.The icons themselves are from the [`material` font set](https://material.io/tools/icons/) and are defined in a separate **`enum`**:@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {```typescriptenum DragIcon {
    DEFAULT = 'drag_indicator',
    ALLOW = 'remove'}```}Next, we have to define what should happen when the user actually _drops_ the row inside of the drop-area.@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {```typescriptexport class IgxTreeGridRowDragComponent {

    public onDropAllowed(args: IDropDroppedEventArgs) {
        const draggedRow: RowType = args.dragData;
        draggedRow.delete();
    }}```Once the row is dropped, we just call the row's [`delete()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxTreeGridRowComponent.html#delete) method}> [!NOTE]> When using row data from the event arguments (`args.dragData.data`) or any other row property, note that the entire row is passed in the arguments as a reference, which means that you must clone the data you need, if you want to distinguish it from the one in the source grid.### Templating the drag ghostThe drag ghost can be templated using the `IgxRowDragGhost` directive, applied to a `<ng-template>` inside of the `igx-tree-grid`'s body:```html<igx-tree-grid>...
   <ng-template igxRowDragGhost>
        <div>
            <igx-icon fontSet="material">arrow_right_alt</igx-icon>
        </div>
    </ng-template>...</igx-tree-grid>```The result of the configuration can be seem below in a `igx-tree-grid` with row dragging and multiple selection enabled. The demo shows the count of the currently dragged rows:#### Example Demo```typescript
import { Component, ViewChild } from '@angular/core';
import { GridSelectionMode, IgxColumnComponent, IgxRowDragGhostDirective } from 'igniteui-angular/grids/core';
import { IDropDroppedEventArgs, IgxDropDirective } from 'igniteui-angular/directives';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { FULL_EMPLOYEE_DATA } from '../data/employees';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-multi-row-drag',
    styleUrls: ['tree-grid-multi-row-drag.component.scss'],
    templateUrl: 'tree-grid-multi-row-drag.component.html',
    imports: [IgxDropDirective, IgxIconComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxRowDragGhostDirective]
})
export class TreeGridMultiRowDragComponent {
    @ViewChild(IgxTreeGridComponent, { read: IgxTreeGridComponent, static: true })
    public treeGrid: IgxTreeGridComponent;
    public selectionMode: GridSelectionMode = 'multiple';
    public selected = false;
    public ids;
    public countIcon = 'drag_indicator';
    public dragIcon = 'keyboard_backspace';
    public localData = [];
    constructor() {
        this.localData = FULL_EMPLOYEE_DATA();
    }

    public onRowDragEnd(args) {
        args.animation = true;
    }

    public handleRowSelectionChange(args) {
        this.ids = args.newSelection;
        this.selected = this.ids.length !== 0;
    }

    public onDropAllowed(args: IDropDroppedEventArgs) {
        if (this.selected === false) {
            const draggedRow = args.dragData;
            draggedRow.delete();
        } else {
            this.ids.forEach((rowData) => {
                this.treeGrid.deleteRow(rowData['ID']);
            });
            this.selected = false;
        }
    }

    public onRowDragStart(args) {
        if (this.selected === false) {
            this.countIcon = `filter_1`;
        } else {
            const count = this.ids.length;
            this.countIcon = `filter_${count > 9 ? '9_plus' : `${count}`}`;
        }
    }

    public onLeaveAllowed(args) {
        this.onRowDragStart(args);
        this.dragIcon = 'keyboard_backspace';
    }

    public onEnterAllowed(args) {
        this.dragIcon = 'remove';
    }
}
```
```html
<div class="drop-area" igxDrop (enter)="onEnterAllowed($event)" (leave)="onLeaveAllowed($event)"
    (dropped)="onDropAllowed($event)">
    <igx-icon>delete</igx-icon>
    <div>Drag a row here to delete it</div>
</div>
<igx-tree-grid [igxPreventDocumentScroll]="true"  #treeGrid [data]="localData" childDataKey="Employees" [moving]="true" width="800px" height="580px" [autoGenerate]="false"
    [rowDraggable]="true" [allowFiltering]="true" [primaryKey]="'ID'"
    (rowDragEnd)="onRowDragEnd($event)" (rowDragStart)="onRowDragStart($event)"
    [rowSelection]="selectionMode" (rowSelectionChanging)="handleRowSelectionChange($event)">
    <igx-paginator></igx-paginator>
    <igx-column field="Name" dataType="string" [sortable]="true" [editable]="true" [resizable]="true">
    </igx-column>
    <igx-column field="Title" dataType="string" [sortable]="true" [editable]="true" [resizable]="true">
    </igx-column>
    <igx-column field="HireDate" header="Hire Date" dataType="date" [sortable]="true" [editable]="true"
        [resizable]="true" width="150px"></igx-column>
    <igx-column field="Age" dataType="number" [sortable]="true" [editable]="true" [resizable]="true"
        width="100px"></igx-column>
    <ng-template let-data igxRowDragGhost>
        <div class="allow-drop">
            <igx-icon family="material">{{dragIcon}}{{countIcon}}</igx-icon>
        </div>
    </ng-template>
</igx-tree-grid>
```
```scss
.drop-area {
    width: 160px;
    height: 160px;
    background-color: #d3d3d3;
    border: 1px dashed #131313;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    text-align: center;
    margin: 8px;
}

:host {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-flow: row;
    width: 100%;
    padding-top: 10px;
}

.allow-drop {
    z-index: 1;
}
```<div class="divider--half"></div>### Templating the drag iconThe drag handle icon can be templated using the grid's [`dragIndicatorIconTemplate`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#dragIndicatorIconTemplate). In the example we're building, let's change the icon from the default one (`drag_indicator`) to `drag_handle`.To do so, we can use the `igxDragIndicatorIcon` to pass a template inside of the `igx-tree-grid`'s body:```html<igx-tree-grid>...
    <ng-template igxDragIndicatorIcon>
        <igx-icon>drag_handle</igx-icon>
    </ng-template>...</igx-tree-grid>```Once we've set the new icon template, we also need to adjust the `DEFAULT` icon in our `DragIcon enum`, so it's properly change by the `changeIcon` method:```typescriptenum DragIcon {
    DEFAULT = "drag_handle",
    ...}```@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {### Styling the drop areaOnce our drop handlers are properly configured, all that's left is to style our drop area a bit:```css.drop-area {
    width: 160px;
    height: 160px;
    background-color: #d3d3d3;
    border: 1px dashed #131313;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    text-align: center;
    margin: 8px;}:host {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    width: 100%;}```The result can be seen in the demo below:}#### Example Demo```typescript
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ViewChild } from '@angular/core';
import { IDropDroppedEventArgs, IgxDropDirective } from 'igniteui-angular/directives';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxColumnComponent, IgxDragIndicatorIconDirective, RowType } from 'igniteui-angular/grids/core';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { FULL_EMPLOYEE_DATA } from '../data/employees';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

// eslint-disable-next-line no-shadow
enum DragIcon {
    DEFAULT = 'drag_handle',
    ALLOW = 'remove'
}

@Component({
    selector: 'app-tree-grid-row-drag',
    styleUrls: ['tree-grid-row-drag.component.scss'],
    templateUrl: 'tree-grid-row-drag.component.html',
    imports: [IgxDropDirective, IgxIconComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxDragIndicatorIconDirective]
})
export class TreeGridRowDragComponent {
    @ViewChild(IgxTreeGridComponent, { read: IgxTreeGridComponent, static: true })
    public treeGrid: IgxTreeGridComponent;

    public localData = [];
    constructor() {
        this.localData = FULL_EMPLOYEE_DATA();
    }

    public onRowDragEnd(args) {
        args.animation = true;
    }

    public onDropAllowed(args: IDropDroppedEventArgs) {
        const draggedRow: RowType = args.dragData;
        draggedRow.delete();
    }

    public onEnterAllowed(args) {
        this.changeGhostIcon(args.drag.ghostElement, DragIcon.ALLOW);
    }

    public onLeaveAllowed(args) {
        this.changeGhostIcon(args.drag.ghostElement, DragIcon.DEFAULT);
    }

    private changeGhostIcon(ghost, icon: string) {
        if (ghost) {
            const currentIcon = ghost.querySelector('.igx-grid__drag-indicator > igx-icon');
            if (currentIcon) {
                currentIcon.innerText = icon;
            }
        }
    }
}
```
```html
<div class="drop-area" igxDrop (enter)="onEnterAllowed($event)" (leave)="onLeaveAllowed($event)"
    (dropped)="onDropAllowed($event)">
    <igx-icon>delete</igx-icon>
    <div>Drag a row here to delete it</div>
</div>
<igx-tree-grid [igxPreventDocumentScroll]="true" #treeGrid [data]="localData" [moving]="true" childDataKey="Employees" width="800px" height="540px" [autoGenerate]="false"
    [rowDraggable]="true" [allowFiltering]="true" [primaryKey]="'ID'" (rowDragEnd)="onRowDragEnd($event)">
    <igx-paginator></igx-paginator>
    <igx-column field="Name" dataType="string" [sortable]="true" [editable]="true" [resizable]="true">
    </igx-column>
    <igx-column field="Title" dataType="string" [sortable]="true" [editable]="true" [resizable]="true">
    </igx-column>
    <igx-column field="HireDate" header="Hire Date" dataType="date" [sortable]="true" [editable]="true"
        [resizable]="true" width="150px"></igx-column>
    <igx-column field="Age" dataType="number" [sortable]="true" [editable]="true" [resizable]="true"
        width="100px"></igx-column>
    <ng-template igxDragIndicatorIcon>
        <igx-icon>drag_handle</igx-icon>
    </ng-template>
</igx-tree-grid>
```
```scss
.drop-area {
    width: 160px;
    height: 160px;
    background-color: #d3d3d3;
    border: 1px dashed #131313;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    text-align: center;
    margin: 8px;
}

:host {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-flow: row;
    width: 100%;
    padding-top: 10px;
}
```<div class="divider--half"></div>## Application Demo### Row Reordering DemoWith the help of the grid's row drag events and the `igxDrop` directive, you can create a grid that allows you to reorder rows by dragging them.Since all of the actions will be happening _inside_ of the grid's body, that's where you have to attach the `igxDrop` directive:```html<igx-tree-grid igxPreventDocumentScroll  #treeGrid [data]="localData" [rowDraggable]="true" foreignKey="ParentID"
    [primaryKey]="'ID'" (rowDragStart)="rowDragStart($event)" igxDrop (dropped)="dropInGrid($event)">
    ...</igx-tree-grid>```> [!NOTE]> Make sure that there is a `primaryKey` specified for the grid! The logic needs an unique identifier for the rows so they can be properly reorderedOnce `rowDraggable` is enabled and a drop zone has been defined, you need to implement a simple handler for the drop event. When a row is dragged, check the following:@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {- Is the row expanded? If so, collapse it.- Was the row dropped inside of the grid?- If so, on which _other_ row was the dragged row dropped?- Once you've found the _target_ row, swap the records' places in the `data` array- Was the row initially selected? If so, mark it as selected.}Below, you can see this implemented in the component's `.ts` file:```typescriptexport class TreeGridRowReorderComponent {
    public rowDragStart(args: any): void {
        const targetRow = args.dragData;
        if (targetRow.expanded) {
            this.treeGrid.collapseRow(targetrow.key);
        }
    }

    public dropInGrid(args: IDropDroppedEventArgs): void {
        const draggedRow = args.dragData;
        const event = args.originalEvent;
        const cursorPosition: Point = { x: event.clientX, y: event.clientY };
        this.moveRow(draggedRow, cursorPosition);
    }

    private moveRow(draggedRow: RowType, cursorPosition: Point): void {
        const row = this.catchCursorPosOnElem(this.treeGrid.rowList.toArray(), cursorPosition);
        if (!row) { return; }
        if (row.data.ParentID === -1) {
            this.performDrop(draggedRow, row).ParentID = -1;
        } else {
            if (row.data.ParentID === draggedrow.data.ParentID) {
                this.performDrop(draggedRow, row);
            } else {
                const rowIndex = this.getRowIndex(draggedrow.data);
                this.localData[rowIndex].ParentID = row.data.ParentID;
            }
        }
        if (draggedRow.selected) {
            this.treeGrid.selectRows([this.treeGrid.rowList.toArray()
                .find((r) => r.rowID === draggedrow.key).rowID], false);
        }

        this.localData = [...this.localData];
    }

    private performDrop(
        draggedRow: IgxTreeGridRowComponent, targetRow: IgxTreeGridRowComponent) {
        const draggedRowIndex = this.getRowIndex(draggedrow.data);
        const targetRowIndex: number = this.getRowIndex(targetrow.data);
        if (draggedRowIndex === -1 || targetRowIndex === -1) { return; }
        this.localData.splice(draggedRowIndex, 1);
        this.localData.splice(targetRowIndex, 0, draggedrow.data);
        return this.localData[targetRowIndex];
    }

    private getRowIndex(rowData: any): number {
        return this.localData.indexOf(rowData);
    }

    private catchCursorPosOnElem(rowListArr: IgxTreeGridRowComponent[], cursorPosition: Point)
        : IgxTreeGridRowComponent {
        for (const row of rowListArr) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                return row;
            }
        }

        return null;
    }}```With these few easy steps, you've configured a grid that allows reordering rows via drag/drop! You can see the above code in action in the following demo.Notice that we also have row selection enabled and we preserve the selection when dropping the dragged row.```typescript
import { Component, ViewChild } from '@angular/core';
import { IDropDroppedEventArgs, IgxDropDirective } from 'igniteui-angular/directives';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { GridSelectionMode, IgxColumnComponent, RowType } from 'igniteui-angular/grids/core';
import { Point } from 'igniteui-angular/core';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { generateEmployeeFlatData } from '../data/employees-flat';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-row-reorder',
    styleUrls: ['tree-grid-row-reorder.component.scss'],
    templateUrl: 'tree-grid-row-reorder.component.html',
    imports: [IgxTreeGridComponent, IgxDropDirective, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent]
})
export class TreeGridRowReorderComponent {
    @ViewChild(IgxTreeGridComponent, { read: IgxTreeGridComponent, static : true })
    public treeGrid: IgxTreeGridComponent;
    public selectionMode: GridSelectionMode = 'multiple';
    public localData = [];
    constructor() {
        this.localData = generateEmployeeFlatData();
    }

    public rowDragStart(args: any): void {
        const targetRow: RowType = args.dragData;
        if (targetRow.expanded) {
            this.treeGrid.collapseRow(targetRow.key);
        }
    }

    public dropInGrid(args: IDropDroppedEventArgs): void {
        const draggedRow: RowType = args.dragData;
        const event = args.originalEvent;
        const cursorPosition: Point = { x: event.clientX, y: event.clientY };
        this.moveRow(draggedRow, cursorPosition);
    }

    private moveRow(draggedRow: RowType, cursorPosition: Point): void {
        const row = this.catchCursorPosOnElem(this.treeGrid.rowList.toArray(), cursorPosition);
        if (!row) { return; }

        if (row.key === draggedRow.key) {
            /** dragged row and targeted row are same */
            return;
        }

        if (row.data.ParentID === -1) {
            this.performDrop(draggedRow, row).ParentID = -1;
        } else {
            if (row.data.ParentID === draggedRow.data.ParentID) {
                this.performDrop(draggedRow, row);
            } else {
                const rowIndex = this.getRowIndex(draggedRow.data);
                this.localData[rowIndex].ParentID = row.data.ParentID;
            }
        }
        if (draggedRow.selected) {
            this.treeGrid.selectRows([this.treeGrid.rowList.toArray()
                .find((r) => r.key === draggedRow.key).key], false);
        }

        this.localData = [...this.localData];
    }

    private performDrop(
        draggedRow: RowType, targetRow: RowType) {
        const draggedRowIndex = this.getRowIndex(draggedRow.data);
        const targetRowIndex: number = this.getRowIndex(targetRow.data);
        if (draggedRowIndex === -1 || targetRowIndex === -1) { return; }
        this.localData.splice(draggedRowIndex, 1);
        this.localData.splice(targetRowIndex, 0, draggedRow.data);
        return this.localData[targetRowIndex];
    }

    private getRowIndex(rowData: any): number {
        return this.localData.indexOf(rowData);
    }

    private catchCursorPosOnElem(rowListArr: any[], cursorPosition: Point): any {
        for (const row of rowListArr) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                return row;
            }
        }

        return null;
    }
}
```
```html
<div class="grid_wrapper">
    <igx-tree-grid [igxPreventDocumentScroll]="true"  #treeGrid igxDrop [moving]="true" [data]="localData" height="530px"
        [autoGenerate]="false" [rowDraggable]="true" foreignKey="ParentID" [rowSelection]="selectionMode"
        [primaryKey]="'ID'" (rowDragStart)="rowDragStart($event)" (dropped)="dropInGrid($event)">
        <igx-paginator></igx-paginator>
        <igx-column field="Name" dataType="string" [sortable]="true" [editable]="true"
            [resizable]="true">
        </igx-column>
        <igx-column field="Title" dataType="string" [sortable]="true" [editable]="true"
            [resizable]="true">
        </igx-column>
        <igx-column field="HireDate" header="Hire Date" dataType="date" [sortable]="true" [editable]="true"
            [resizable]="true" width="150px">
        </igx-column>
        <igx-column field="Age" dataType="number" [sortable]="true" [editable]="true"
            [resizable]="true" width="100px">
        </igx-column>
    </igx-tree-grid>
</div>
```
```scss
.grid_wrapper{
    max-width: 0 16px;
    padding: 10px;
}
```<div class="divider--half"></div><div class="divider--half"></div>## LimitationsCurrently, there are no known limitations for the `rowDraggable` directive.## API References- [rowDraggable](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#rowDraggable)- [rowDragStart](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#rowDragStart)- [rowDragEnd](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#rowDragEnd)- [IgxTreeGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html)## Additional Resources<div class="divider--half"></div>- [Tree Grid Overview](tree-grid.md)<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
