---
_tocName: Row Drag
_premium: true
---
---title: Row Dragging in Angular Hierarchical Grid - Ignite UI for Angular_description: Row dragging in Angular Hierarchical Grid is used to quickly rearrange rows by dragging them with the mouse. See how to configure row dragging in your project._keywords: angular drag component, material component, ignite ui for angular, infragistics_license: commercial_canonicalLink: grid/row-drag---# Row Dragging in Angular Hierarchical GridIn Ignite UI for Angular Hierarchical Grid, **RowDrag** is initialized on the root `igx-hierarchical-grid` component and is configurable via the [`rowDraggable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#rowDraggable) input. Enabling row dragging provides users with a row drag-handle with which they can initiate dragging of a row.## Angular Hierarchical Grid Row Drag Example```typescript
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ViewChild } from '@angular/core';
import { IDropDroppedEventArgs, IgxDropDirective } from 'igniteui-angular/directives';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxColumnComponent, RowType } from 'igniteui-angular/grids/core';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { createData, IDrive } from '../../data/files.data';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

// eslint-disable-next-line no-shadow
enum DragIcon {
    DEFAULT = 'drag_indicator',
    ALLOW = 'remove'
}

@Component({
    selector: 'app-hierarchical-row-drag-base',
    styleUrls: ['./hierarchical-row-drag-base.component.scss'],
    templateUrl: 'hierarchical-row-drag-base.component.html',
    imports: [IgxDropDirective, IgxIconComponent, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxRowIslandComponent]
})

export class HGridRowDragBaseComponent {
    @ViewChild(IgxHierarchicalGridComponent, { read: IgxHierarchicalGridComponent, static: true })
    public hGrid: IgxHierarchicalGridComponent;
    public localData: IDrive[] = [];
    constructor() {
        this.localData = createData(3, 12, 8);
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
<igx-hierarchical-grid [igxPreventDocumentScroll]="true"  class="hgrid" [allowFiltering]='true' #grid1 [data]="localData" [primaryKey]="'id'" [rowDraggable]="true"
    [height]="'540px'" [width]="'100%'" #hGrid (rowDragEnd)="onRowDragEnd($event)">
    <igx-column field="name" header="Name"></igx-column>
    <igx-column field="system" header="Is System Drive"></igx-column>
    <igx-row-island [height]="null" [rowDraggable]="true" [primaryKey]="'id'" igxDrop [key]="'folders'" #layout1>
        <igx-column field="name" header="Name"></igx-column>
        <igx-column field="createdOn" header="Created On"></igx-column>
        <igx-column field="createdBy" header="Created By"></igx-column>
        <igx-row-island [height]="null" [rowDraggable]="true" [primaryKey]="'id'" igxDrop [key]="'files'">
            <igx-column field="name" header="Name"></igx-column>
            <igx-column field="extension" header="Extension"></igx-column>
            <igx-column field="size" header="Size" dataType="number"  [hasSummary]="true"></igx-column>
            <igx-column field="createdBy" header="createdBy"></igx-column>
        </igx-row-island>
    </igx-row-island>
</igx-hierarchical-grid>
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

.igx-grid {
    margin: 0 1rem;
}
```<div class="divider--half"></div>## ConfigurationIn order to enable row-dragging for your `igx-hierarchical-grid`, all you need to do is set the grid's [`rowDraggable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#rowDraggable) to **`true`**. Once this is enabled, a row-drag handle will be displayed on each row. This handle can be used to initiate row dragging.```html<igx-hierarchical-grid [rowDraggable]="true">
 ...</igx-hierarchical-grid>```Clicking on the drag-handle and _moving the cursor_ while holding down the button will cause the grid's [`rowDragStart`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#rowDragStart) event to fire. Releasing the click at any time will cause [`rowDragEnd`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#rowDragEnd) event to fire.Below, you can find a walkthrough on how to configure an `igx-hierarchical-grid` to support row dragging and how to properly handle the drop event.@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {In this example, we'll handle dragging a row from a grid to a designated area and, when dropping it, removing it from the grid.}### Drop AreasEnabling row-dragging was pretty easy, but now we have to configure how we'll handle row-_dropping_.We can define where we want our rows to be dropped using the [`igxDrop` directive](../drag-drop.md).First we need to import the `IgxDragDropModule` in our app module:```typescriptimport { ..., IgxDragDropModule } from 'igniteui-angular/directives';// import { ..., IgxDragDropModule } from '@infragistics/igniteui-angular'; for licensed package...@NgModule({
    imports: [..., IgxDragDropModule]})```Then, in our template, we define a drop-area using the directive's selector:@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {```html<div class="drop-area" igxDrop (enter)="onEnterAllowed($event)" (leave)="onLeaveAllowed($event)"(dropped)="onDropAllowed($event)">
    <igx-icon>delete</igx-icon>
    <div>Drag a row here to delete it</div></div>```}You may enable animation when a row is dropped on a non-droppable area using the `animation` parameter of the [`rowDragEnd`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#rowDragEnd) event. If set to true, the dragged row will animate back to its' original position when dropped over a non-droppable area.You may enable animation like this:```typescriptexport class IgxHierarchicalGridRowDragComponent {

    public onRowDragEnd(args) {
        args.animation = true;
    }}```### Drop Area Event HandlersOnce we've defined our drop-area in the template, we have to declare our handlers for the `igxDrop`'s [`enter`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdirective.html#enter), [`leave`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdirective.html#leave) and [`dropped`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdirective.html#dropped) events in our component's `.ts` file.First, let's take a look at our `enter` and `leave` handlers. In those methods, we just want to change the icon of the drag's _ghost_ so we can indicate to the user that they are above an area that allows them to drop the row:```typescriptexport class IgxHierarchicalGridRowDragComponent {
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
    ALLOW = 'remove'}```}Next, we have to define what should happen when the user actually _drops_ the row inside of the drop-area.@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {```typescriptexport class IgxHierarchicalGridRowDragComponent {

    public onDropAllowed(args: IDropDroppedEventArgs) {
        const draggedRow: RowType = args.dragData;
        draggedRow.delete();
    }}```Once the row is dropped, we just call the row's [`delete()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxHierarchicalGridRowComponent.html#delete) method}> [!NOTE]> When using row data from the event arguments (`args.dragData.data`) or any other row property, note that the entire row is passed in the arguments as a reference, which means that you must clone the data you need, if you want to distinguish it from the one in the source grid.### Templating the drag ghostThe drag ghost can be templated using the `IgxRowDragGhost` directive, applied to a `<ng-template>` inside of the `igx-hierarchical-grid`'s body:```html<igx-hierarchical-grid>...
   <ng-template igxRowDragGhost>
        <div>
            <igx-icon fontSet="material">arrow_right_alt</igx-icon>
        </div>
    </ng-template>...</igx-hierarchical-grid>```The result of the configuration can be seem below in a `igx-hierarchical-grid` with row dragging and multiple selection enabled. The demo shows the count of the currently dragged rows:#### Example DemoThe drag ghost can be templated on every grid level, making it possible to have multiple ghost templates or to only provide a template for a single row island.```html<igx-hierarchical-grid>...
    <ng-template igxRowDragGhost>
        <div>
            <igx-icon fontSet="material">arrow_right_alt</igx-icon> 
        </div>
    </ng-template>
    <igx-row-island>
        ...
        <ng-template IgxRowDragGhost>
            <img src="smile.gif" height="42" width="42">
        </ng-template>
    </igx-row-island>...</igx-hierarchical-grid>``````typescript
import { Component, ViewChild } from '@angular/core';
import { GridSelectionMode, IgxColumnComponent, IgxRowDragGhostDirective, RowType } from 'igniteui-angular/grids/core';
import { IDropDroppedEventArgs, IgxDropDirective } from 'igniteui-angular/directives';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { createData, IDrive } from '../../data/files.data';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-multi-row-drag',
    styleUrls: ['./hierarchical-grid-multi-row-drag.component.scss'],
    templateUrl: 'hierarchical-grid-multi-row-drag.component.html',
    imports: [IgxDropDirective, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxRowIslandComponent, IgxRowDragGhostDirective, IgxIconComponent]
})

export class HGridMultiRowDragComponent {
    @ViewChild(IgxHierarchicalGridComponent, { read: IgxHierarchicalGridComponent, static: true })
    public hGrid: IgxHierarchicalGridComponent;
    public localData: IDrive[] = [];
    public selectionMode: GridSelectionMode = 'multiple';
    public ids;
    public grid;
    public selected = false;
    public countIcon = 'drag_indicator';
    public dragIcon = 'keyboard_backspace';
    constructor() {
        this.localData = createData(3, 12, 8);
    }

    public onRowDragEnd(args) {
        args.animation = true;
    }

    public handleRowSelectionChange(args) {
        this.ids = args.newSelection;
        this.grid = args.owner;
        this.selected = this.ids.length !== 0;
    }

    public onDropAllowed(args: IDropDroppedEventArgs) {
        if (this.selected === false) {
            const draggedRow: RowType = args.dragData;
            draggedRow.delete();
        } else {
            if (this.grid == null) {
                this.ids.forEach((rowData) => {
                    this.hGrid.deleteRow(rowData);
                });
                this.selected = false;
            } else {
                this.ids.forEach((rowData) => {
                    this.grid.deleteRow(rowData);
                });
                this.selected = false;
            }
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
    <div>Drag a row here to delete it</div>
</div>
<igx-hierarchical-grid [igxPreventDocumentScroll]="true"  class="hgrid" [allowFiltering]='true' #grid1 [data]="localData" [primaryKey]="'id'" [rowDraggable]="true"
    [height]="'580px'" [width]="'100%'" #hGrid (rowDragStart)="onRowDragStart($event)" (rowDragEnd)="onRowDragEnd($event)" [rowSelection]="selectionMode"
    (rowSelectionChanging)="handleRowSelectionChange($event)">
    <igx-column field="name" header="Name"></igx-column>
    <igx-column field="system" header="Is System Drive"></igx-column>

    <igx-row-island [height]="null" [rowDraggable]="true" [primaryKey]="'id'" igxDrop [key]="'folders'" #layout1 [rowSelection]="selectionMode"
    (rowSelectionChanging)="handleRowSelectionChange($event)" (rowDragStart)="onRowDragStart($event)">
        <igx-column field="name" header="Name"></igx-column>
        <igx-column field="createdOn" header="Created On"></igx-column>
        <igx-column field="createdBy" header="Created By"></igx-column>
        <ng-template let-data igxRowDragGhost>
            <div class="allow-drop">
                <igx-icon family="material">{{dragIcon}}{{countIcon}}</igx-icon>
            </div>
        </ng-template>
        <igx-row-island [height]="null" [rowDraggable]="true" [primaryKey]="'id'" igxDrop [key]="'files'" [rowSelection]="selectionMode"
        (rowSelectionChanging)="handleRowSelectionChange($event)" (rowDragStart)="onRowDragStart($event)">
            <igx-column field="name" header="Name"></igx-column>
            <igx-column field="extension" header="Extension"></igx-column>
            <igx-column field="size" header="Size" dataType="number" [hasSummary]="true"></igx-column>
            <igx-column field="createdBy" header="createdBy"></igx-column>
            <ng-template let-data igxRowDragGhost>
                <div class="allow-drop">
                    <igx-icon family="material">{{dragIcon}}{{countIcon}}</igx-icon>
                </div>
            </ng-template>
        </igx-row-island>
    </igx-row-island>
    <ng-template let-data igxRowDragGhost>
        <div class="allow-drop">
            <igx-icon family="material">{{dragIcon}}{{countIcon}}</igx-icon>
        </div>
    </ng-template>
</igx-hierarchical-grid>
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
.igx-grid {
    margin: 0 1rem;
}
```<div class="divider--half"></div>### Templating the drag iconThe drag handle icon can be templated using the grid's [`dragIndicatorIconTemplate`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#dragIndicatorIconTemplate). In the example we're building, let's change the icon from the default one (`drag_indicator`) to `drag_handle`.To do so, we can use the `igxDragIndicatorIcon` to pass a template inside of the `igx-hierarchical-grid`'s body:```html<igx-hierarchical-grid>...
    <ng-template igxDragIndicatorIcon>
        <igx-icon>drag_handle</igx-icon>
    </ng-template>...</igx-hierarchical-grid>```Once we've set the new icon template, we also need to adjust the `DEFAULT` icon in our `DragIcon enum`, so it's properly change by the `changeIcon` method:```typescriptenum DragIcon {
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
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxColumnComponent, IgxDragIndicatorIconDirective, RowType } from 'igniteui-angular/grids/core';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { createData, IDrive } from '../../data/files.data';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

// eslint-disable-next-line no-shadow
enum DragIcon {
    DEFAULT = 'drag_handle',
    ALLOW = 'remove'
}

@Component({
    selector: 'app-hierarchical-grid-row-drag',
    styleUrls: ['./hierarchical-grid-row-drag.component.scss'],
    templateUrl: 'hierarchical-grid-row-drag.component.html',
    imports: [IgxDropDirective, IgxIconComponent, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxRowIslandComponent, IgxDragIndicatorIconDirective]
})

export class HGridDragSampleComponent {
    @ViewChild(IgxHierarchicalGridComponent, { read: IgxHierarchicalGridComponent, static: true })
    public hGrid: IgxHierarchicalGridComponent;
    public localData: IDrive[] = [];
    constructor() {
        this.localData = createData(3, 12, 8);
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
<igx-hierarchical-grid [igxPreventDocumentScroll]="true" class="hgrid" [allowFiltering]='true' #grid1 [data]="localData"
    [primaryKey]="'id'" [rowDraggable]="true" [height]="'540px'" [width]="'100%'" #hGrid
    (rowDragEnd)="onRowDragEnd($event)">
    <igx-column field="name" header="Name"></igx-column>
    <igx-column field="system" header="Is System Drive"></igx-column>
    <igx-row-island [height]="null" [primaryKey]="'id'" igxDrop [key]="'folders'" #layout1 (rowDragEnd)="onRowDragEnd($event)">
        <igx-column field="name" header="Name"></igx-column>
        <igx-column field="createdOn" header="Created On"></igx-column>
        <igx-column field="createdBy" header="Created By"></igx-column>
        <igx-row-island [height]="null" [rowDraggable]="true" [primaryKey]="'id'" igxDrop [key]="'files'">
            <igx-column field="name" header="Name"></igx-column>
            <igx-column field="extension" header="Extension"></igx-column>
            <igx-column field="size" header="Size" dataType="number" [hasSummary]="true"></igx-column>
            <igx-column field="createdBy" header="createdBy"></igx-column>
        </igx-row-island>
    </igx-row-island>
    <ng-template igxDragIndicatorIcon>
        <igx-icon>drag_handle</igx-icon>
    </ng-template>
</igx-hierarchical-grid>
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

.igx-grid {
    margin: 0 1rem;
}
```<div class="divider--half"></div>## Application Demo### Row Reordering DemoWith the help of the grid's row drag events and the `igxDrop` directive, you can create a grid that allows you to reorder rows by dragging them.Since all of the actions will be happening _inside_ of the grid's body, that's where you have to attach the `igxDrop` directive:```html<igx-hierarchical-grid #grid [data]="localData" [primaryKey]="'id'"
    [rowDraggable]="true" (rowDragStart)="rowDragStart($event)" igxDrop (dropped)="rowDrop($event)">
    ...</igx-hierarchical-grid>```> [!NOTE]> Make sure that there is a `primaryKey` specified for the grid! The logic needs an unique identifier for the rows so they can be properly reorderedOnce `rowDraggable` is enabled and a drop zone has been defined, you need to implement a simple handler for the drop event. When a row is dragged, check the following:@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {- Is the row expanded? If so, collapse it.- Was the row dropped inside of the grid?- If so, on which _other_ row was the dragged row dropped?- Once you've found the _target_ row, swap the records' places in the `data` array- Was the row initially selected? If so, mark it as selected.}Below, you can see this implemented in the component's `.ts` file:```typescriptexport class HGridRowReorderComponent {
    public rowDragStart(args: any): void {
        const targetRow = args.dragData;
        if (targetRow.expanded) {
            targetRow.expanded = false;
        }
    }

    public rowDrop(args: IDropDroppedEventArgs): void {
        const targetRow = args.dragData;
        const event = args.originalEvent;
        const cursorPosition: Point = { x: event.clientX, y: event.clientY };
        this.moveRow(targetRow, cursorPosition);
    }

    private moveRow(draggedRow: RowType, cursorPosition: Point): void {
        // const parent: IgxHierarchicalGridComponent = (draggedRow as any).grid;
        // const parent = args.drag.ghostContext.grid;
        const parent = this.hGrid;
        const rowIndex: number = this.getTargetRowIndex(parent.rowList.toArray(), cursorPosition);
        if (rowIndex === -1) { return; }
        const wasSelected = draggedRow.selected;
        draggedRow.delete();
        parent.data.splice(rowIndex, 0, draggedRow.data);
        if (wasSelected) {
            parent.selectRows([parent.rowList.toArray()
                .find((r) => r.rowID === draggedRow.key).rowID], false);
        }
    }

    private getTargetRowIndex(rowListArr: RowType[], cursorPosition: Point): number {
        const targetElem: IgxHierarchicalRowComponent = this.catchCursorPosOnElem(rowListArr, cursorPosition);
        return rowListArr.indexOf(rowListArr.find((r) => r.rowData.id === targetElem.rowData.id));
    }

    private catchCursorPosOnElem(rowListArr: any[], cursorPosition: Point)
        : IgxHierarchicalRowComponent {
        for (const row of rowListArr) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                return row;
            } else if (row === rowListArr[rowListArr.length - 1] && cursorPosition.y > rowRect.bottom) {
                return row;
            }
        }
    }}```With these few easy steps, you've configured a grid that allows reordering rows via drag/drop! You can see the above code in action in the following demo.Notice that we also have row selection enabled and we preserve the selection when dropping the dragged row.```typescript
import { Component, ViewChild } from '@angular/core';
import { IDropDroppedEventArgs, IgxDropDirective } from 'igniteui-angular/directives';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { GridSelectionMode, IgxColumnComponent, RowType } from 'igniteui-angular/grids/core';
import { Point } from 'igniteui-angular/core';
import { createData, IDrive } from '../../data/files.data';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-row-reorder',
    styleUrls: ['./hierarchical-grid-row-reorder.component.scss'],
    templateUrl: 'hierarchical-grid-row-reorder.component.html',
    imports: [IgxHierarchicalGridComponent, IgxDropDirective, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxRowIslandComponent]
})
export class HGridRowReorderComponent {
    @ViewChild(IgxHierarchicalGridComponent, { read: IgxHierarchicalGridComponent, static: true })
    public hGrid: IgxHierarchicalGridComponent;
    public localData: IDrive[] = [];
    public selectionMode: GridSelectionMode = 'multiple';
    constructor() {
        this.localData = createData(3, 12, 8);
    }

    public rowDragStart(args: any): void {
        const targetRow: RowType = args.dragData;
        // if the row-to-be-dragged is expanded - collapse it
        if (targetRow.expanded) {
            targetRow.expanded = false;
        }
    }

    public rowDrop(args: IDropDroppedEventArgs): void {
        const targetRow = args.dragData;
        const event = args.originalEvent;
        const cursorPosition: Point = { x: event.clientX, y: event.clientY };
        this.moveRow(targetRow, cursorPosition);
    }

    private moveRow(draggedRow: RowType, cursorPosition: Point): void {
        // const parent: IgxHierarchicalGridComponent = (draggedRow as any).grid;
        // const parent = args.drag.ghostContext.grid;
        const parent = this.hGrid;
        const rowIndex: number = this.getTargetRowIndex(parent.rowList.toArray(), cursorPosition);
        if (rowIndex === -1) { return; }
        // delete the dragged row and then insert it at its new position
        const wasSelected = draggedRow.selected;
        draggedRow.delete();
        parent.data.splice(rowIndex, 0, draggedRow.data);
        if (wasSelected) {
            // find the row that has the same ID as the dragged row and select it
            parent.selectRows([parent.rowList.toArray()
                .find((r) => r.key === draggedRow.key).key], false);
        }
    }

    private getTargetRowIndex(rowListArr: any[], cursorPosition: Point): number {
        const targetElem = this.catchCursorPosOnElem(rowListArr, cursorPosition);
        // get the index of the row that has the same ID as the dragged row
        return rowListArr.indexOf(rowListArr.find((r) => r.key === targetElem.key));
    }

    private catchCursorPosOnElem(rowListArr: any[], cursorPosition: Point): any {
        // get the row which the dragged row was dropped on
        for (const row of rowListArr) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                return row;
            } else if (row === rowListArr[rowListArr.length - 1] && cursorPosition.y > rowRect.bottom) {
                return row;
            }
        }
    }
}
```
```html
<igx-hierarchical-grid [igxPreventDocumentScroll]="true"  class="hgrid" igxDrop #grid1 [data]="localData" [primaryKey]="'id'"
    [rowDraggable]="true" [rowSelection]="selectionMode" (rowDragStart)="rowDragStart($event)" (dropped)="rowDrop($event)"
    [height]="'540px'" [width]="'100%'" #hGrid>
    <igx-column field="name" header="Name"></igx-column>
    <igx-column field="system" header="Is System Drive"></igx-column>
    <igx-row-island [height]="null" [primaryKey]="'id'" [key]="'folders'" #layout1>
        <igx-column field="name" header="Name"></igx-column>
        <igx-column field="createdOn" header="Created On"></igx-column>
        <igx-column field="createdBy" header="Created By"></igx-column>
        <igx-row-island [height]="null" [primaryKey]="'id'" igxDrop [key]="'files'" [rowDraggable]="true" [rowSelection]="selectionMode"
            (rowDragStart)="rowDragStart($event)">
            <igx-column field="name" header="Name"></igx-column>
            <igx-column field="extension" header="Extension"></igx-column>
            <igx-column field="size" header="Size" dataType="number" [hasSummary]="true"></igx-column>
            <igx-column field="createdBy" header="createdBy"></igx-column>
        </igx-row-island>
    </igx-row-island>
</igx-hierarchical-grid>
```
```scss
:host {
	display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    padding: 8px 0px;
}

.igx-grid {
    margin: 0 1rem;
}
```<div class="divider--half"></div><div class="divider--half"></div>## LimitationsCurrently, there are no known limitations for the `rowDraggable` directive.## API References- [rowDraggable](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#rowDraggable)- [rowDragStart](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#rowDragStart)- [rowDragEnd](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#rowDragEnd)- [IgxHierarchicalGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html)## Additional Resources<div class="divider--half"></div>- [Hierarchical Grid Overview](hierarchical-grid.md)<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
