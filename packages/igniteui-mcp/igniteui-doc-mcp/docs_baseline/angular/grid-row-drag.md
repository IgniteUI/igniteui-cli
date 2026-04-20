---
title: Row Dragging in Angular Data Grid - Ignite UI for Angular
_description: Row dragging in Angular Data Grid is used to quickly rearrange rows by dragging them with the mouse. See how to configure row dragging in your project.
_keywords: angular drag component, material component, ignite ui for angular, infragistics
_license: commercial
_tocName: Row Drag
_premium: true
---
# Row Dragging in Angular Grid
In Ignite UI for Angular Grid, **RowDrag** is initialized on the root `igx-grid` component and is configurable via the [`rowDraggable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowDraggable) input. Enabling row dragging provides users with a row drag-handle with which they can initiate dragging of a row.
## Angular Grid Row Drag Example
```typescript
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ViewChild } from '@angular/core';
import { IDropDroppedEventArgs, IgxDropDirective } from 'igniteui-angular/directives';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { DATA } from '../../data/customers';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

// eslint-disable-next-line no-shadow
enum DragIcon {
    DEFAULT = 'drag_indicator',
    ALLOW = 'add'
}

@Component({
    selector: 'app-grid-row-drag-base-sample',
    styleUrls: ['./grid-row-drag-base.component.scss'],
    templateUrl: 'grid-row-drag-base.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxDropDirective]
})

export class GridDragBaseSampleComponent {
    @ViewChild('sourceGrid', { read: IgxGridComponent, static: true }) public sourceGrid: IgxGridComponent;
    @ViewChild('targetGrid', { read: IgxGridComponent, static: true }) public targetGrid: IgxGridComponent;
    public data1: any[];
    public data2: any[];

    constructor() {
        this.data1 = DATA;
        this.data2 = [];
    }

    public onRowDragEnd(args) {
        args.animation = true;
    }

    public onDropAllowed(args: IDropDroppedEventArgs) {
        this.targetGrid.addRow(args.dragData.data);
        this.sourceGrid.deleteRow(args.dragData.key);
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
<div class="grid-container">
    <igx-grid [igxPreventDocumentScroll]="true" #sourceGrid [data]="data1" [height]="'480px'" [autoGenerate]="false" [rowDraggable]="true" [primaryKey]="'ID'" (rowDragEnd)="onRowDragEnd($event)">
        <igx-column [field]="'ID'" [header]="'ID'" width="100px"></igx-column>
        <igx-column [field]="'CompanyName'" [header]="'Company Name'" width="100px"></igx-column>
        <igx-column [field]="'ContactName'" [header]="'Contact Name'" width="100px" [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
        <igx-column [field]="'ContactTitle'" [header]="'Contact Title'" width="100px"></igx-column>
        <igx-column [field]="'Address'" [header]="'Address'" width="100px"></igx-column>
        <igx-column [field]="'City'" [header]="'City'" width="100px"></igx-column>
        <igx-column [field]="'Region'" [header]="'Region'" width="100px"></igx-column>
        <igx-column [field]="'PostalCode'" [header]="'Postal Code'" width="100px"></igx-column>
        <igx-column [field]="'Phone'" [header]="'Phone'" width="100px"></igx-column>
        <igx-column [field]="'Fax'" [header]="'Fax'" width="100px"></igx-column>
    </igx-grid>
    <igx-grid [igxPreventDocumentScroll]="true" #targetGrid igxDrop [data]="data2" [height]="'480px'" [autoGenerate]="false" [emptyGridTemplate]="dragHereTemplate"
        (enter)="onEnterAllowed($event)" (leave)="onLeaveAllowed($event)" (dropped)="onDropAllowed($event)" [primaryKey]="'ID'">
        <igx-column [field]="'ID'" [header]="'ID'" width="100px"></igx-column>
        <igx-column [field]="'CompanyName'" [header]="'Company Name'" width="100px"></igx-column>
        <igx-column [field]="'ContactName'" [header]="'Contact Name'" width="100px" [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
        <igx-column [field]="'ContactTitle'" [header]="'Contact Title'" width="100px"></igx-column>
        <igx-column [field]="'Address'" [header]="'Address'" width="100px"></igx-column>
        <igx-column [field]="'City'" [header]="'City'" width="100px"></igx-column>
        <igx-column [field]="'Region'" [header]="'Region'" width="100px"></igx-column>
        <igx-column [field]="'PostalCode'" [header]="'Postal Code'" width="100px"></igx-column>
        <igx-column [field]="'Phone'" [header]="'Phone'" width="100px"></igx-column>
        <igx-column [field]="'Fax'" [header]="'Fax'" width="100px"></igx-column>
        <ng-template #dragHereTemplate><div class="empty-grid">Drop a row to add it to the grid</div></ng-template>
    </igx-grid>
</div>
```
```scss
.grid-container {
    display: flex;
}

.grid-container .drop-area {
    height: 500px;
    width: 50%;
    margin: 10px 20px;
}

igx-grid {
    margin: 20px;
}

.empty-grid {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 100%;
}
```
## Configuration
In order to enable row-dragging for your `igx-grid`, all you need to do is set the grid's [`rowDraggable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowDraggable) to **`true`**. Once this is enabled, a row-drag handle will be displayed on each row. This handle can be used to initiate row dragging.
```html
<igx-grid [rowDraggable]="true">
 ...
</igx-grid>
```
Clicking on the drag-handle and _moving the cursor_ while holding down the button will cause the grid's [`rowDragStart`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowDragStart) event to fire. Releasing the click at any time will cause [`rowDragEnd`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowDragEnd) event to fire.
Below, you can find a walkthrough on how to configure an `igx-grid` to support row dragging and how to properly handle the drop event.
@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {
In this example, we'll handle dragging a row from a grid to a designated area and, when dropping it, removing it from the grid.
}
In this example, we'll handle dragging a row from one grid to another, removing it from the first data source and adding it to the second.
### Drop Areas
Enabling row-dragging was pretty easy, but now we have to configure how we'll handle row-_dropping_.
We can define where we want our rows to be dropped using the [`igxDrop` directive](../drag-drop.md).
First we need to import the `IgxDragDropModule` in our app module:
```typescript
import { ..., IgxDragDropModule } from 'igniteui-angular/directives';
// import { ..., IgxDragDropModule } from '@infragistics/igniteui-angular'; for licensed package
...
@NgModule({
    imports: [..., IgxDragDropModule]
})
```
Then, in our template, we define a drop-area using the directive's selector:
@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {
```html
<div class="drop-area" igxDrop (enter)="onEnterAllowed($event)" (leave)="onLeaveAllowed($event)"
(dropped)="onDropAllowed($event)">
    <igx-icon>delete</igx-icon>
    <div>Drag a row here to delete it</div>
</div>
```
}
In this case, our drop-area will be a whole second grid where we'll drop the rows.
```html
<igx-grid #targetGrid igxDrop [data]="data2" [autoGenerate]="false" [emptyGridTemplate]="dragHereTemplate"
    (enter)="onEnterAllowed($event)" (leave)="onLeaveAllowed($event)" (dropped)="onDropAllowed($event)" [primaryKey]="'ID'">
    ...
</igx-grid>
```
Since the grid will initially be empty, we also define a template that will be more meaningful to the user:
```html
<ng-template #dragHereTemplate>
    Drop a row to add it to the grid
</ng-template>
```
You may enable animation when a row is dropped on a non-droppable area using the `animation` parameter of the [`rowDragEnd`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowDragEnd) event. If set to true, the dragged row will animate back to its' original position when dropped over a non-droppable area.
You may enable animation like this:
```typescript
export class IgxGridRowDragComponent {

    public onRowDragEnd(args) {
        args.animation = true;
    }
}
```
### Drop Area Event Handlers
Once we've defined our drop-area in the template, we have to declare our handlers for the `igxDrop`'s [`enter`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdirective.html#enter), [`leave`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdirective.html#leave) and [`dropped`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdirective.html#dropped) events in our component's `.ts` file.
First, let's take a look at our `enter` and `leave` handlers. In those methods, we just want to change the icon of the drag's _ghost_ so we can indicate to the user that they are above an area that allows them to drop the row:
```typescript
export class IgxGridRowDragComponent {
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
    }
}
```
The `changeGhostIcon` **private** method just changes the icon inside of the drag ghost. The logic in the method finds the element that contains the icon (using the `igx-grid__drag-indicator` class that is applied to the drag-indicator container), changing the element's inner text to the passed one.
The icons themselves are from the [`material` font set](https://material.io/tools/icons/) and are defined in a separate **`enum`**:
@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {
```typescript
enum DragIcon {
    DEFAULT = 'drag_indicator',
    ALLOW = 'remove'
}
```
}
```typescript
enum DragIcon {
    DEFAULT = 'drag_indicator',
    ALLOW = 'add'
}
```
Next, we have to define what should happen when the user actually _drops_ the row inside of the drop-area.
@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {
```typescript
export class IgxGridRowDragComponent {

    public onDropAllowed(args: IDropDroppedEventArgs) {
        const draggedRow: RowType = args.dragData;
        draggedRow.delete();
    }
}
```
Once the row is dropped, we just call the row's [`delete()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridRowComponent.html#delete) method
}
```typescript
export class IgxGridRowDragComponent {
    @ViewChild('sourceGrid', { read: IgxGridComponent }) public sourceGrid: IgxGridComponent;
    @ViewChild('targetGrid', { read: IgxGridComponent }) public targetGrid: IgxGridComponent;

    public onDropAllowed(args) {
        this.targetGrid.addRow(args.dragData.data);
        this.sourceGrid.deleteRow(args.dragData.key);
    }
}
```
We define a reference to each of our grids via the `ViewChild` decorator and the handle the drop as follows:
- add a row to the `targetGrid` that contains the data of the row being dropped
- remove the dragged row from the `sourceGrid`
> [!NOTE]
> When using row data from the event arguments (`args.dragData.data`) or any other row property, note that the entire row is passed in the arguments as a reference, which means that you must clone the data you need, if you want to distinguish it from the one in the source grid.
### Templating the drag ghost
The drag ghost can be templated using the `IgxRowDragGhost` directive, applied to a `<ng-template>` inside of the `igx-grid`'s body:
```html
<igx-grid>
...
   <ng-template igxRowDragGhost>
        <div>
            <igx-icon fontSet="material">arrow_right_alt</igx-icon>
        </div>
    </ng-template>
...
</igx-grid>
```
The result of the configuration can be seem below in a `igx-grid` with row dragging and multiple selection enabled. The demo shows the count of the currently dragged rows:
#### Example Demo
```typescript
import { Component, ViewChild } from '@angular/core';
import { GridSelectionMode, IgxColumnComponent, IgxRowDragGhostDirective } from 'igniteui-angular/grids/core';
import { IDropDroppedEventArgs, IgxDropDirective } from 'igniteui-angular/directives';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { DATA } from '../../data/customers';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
@Component({
    selector: 'app-grid-multiple-row-drag',
    styleUrls: ['./grid-multiple-row-drag.component.scss'],
    templateUrl: './grid-multiple-row-drag.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxRowDragGhostDirective, IgxIconComponent, IgxDropDirective]
})
export class GridMultipleRowDragComponent  {
    @ViewChild('sourceGrid', { read: IgxGridComponent, static: true })
    public sourceGrid: IgxGridComponent;
    @ViewChild('targetGrid', { read: IgxGridComponent, static: true })
    public targetGrid: IgxGridComponent;

    public data1: any[];
    public data2: any[];
    public countIcon = 'drag_indicator';
    public dragIcon = 'arrow_right_alt';
    public selectionMode: GridSelectionMode = 'multiple';
    constructor() {
        this.data1 = DATA;
        this.data2 = [];
   }

    public onRowDragEnd(args) {
        args.animation = true;
    }

    public onDropAllowed(args: IDropDroppedEventArgs) {
        let selected = false;
        const ids = this.sourceGrid.selectedRows;
        const selectedRowData = this.sourceGrid.data.filter((record) => ids.includes(record.ID));
        selectedRowData.forEach((rowData) => {
            selected = true;
            this.targetGrid.addRow(rowData);
            this.sourceGrid.deleteRow(rowData.ID);
        });
        if (selected === false) {
            this.targetGrid.addRow(args.dragData.data);
            this.sourceGrid.deleteRow(args.dragData.key);
        }
    }

    public onEnter(args) {
        this.dragIcon = 'add';
    }
    public onRowDragStart(args) {
        const count = this.sourceGrid.selectedRows.length || 1;
        this.countIcon = `filter_${count > 9 ? '9_plus' : `${count}`}`;
    }
    public onLeave(args) {
        this.onRowDragStart(args);
        this.dragIcon = 'arrow_right_alt';
    }
}
```
```html
<div class="grid-container">
        <igx-grid [igxPreventDocumentScroll]="true" #sourceGrid [data]="data1" [height]="'480px'" [autoGenerate]="false"
            [rowDraggable]="true" [primaryKey]="'ID'" (rowDragStart)="onRowDragStart($event)"
            (rowDragEnd)="onRowDragEnd($event)" [cellSelection]="'none'" [rowSelection]="selectionMode">
            <igx-column [field]="'ID'" [header]="'ID'" width="100px"></igx-column>
            <igx-column [field]="'CompanyName'" [header]="'Company Name'" width="100px"></igx-column>
            <igx-column [field]="'ContactName'" [header]="'Contact Name'" width="100px" [minWidth]="'60px'"
                [maxWidth]="'230px'"></igx-column>
            <igx-column [field]="'ContactTitle'" [header]="'Contact Title'" width="100px"></igx-column>
            <igx-column [field]="'Address'" [header]="'Address'" width="100px"></igx-column>
            <igx-column [field]="'City'" [header]="'City'" width="100px"></igx-column>
            <igx-column [field]="'Region'" [header]="'Region'" width="100px"></igx-column>
            <igx-column [field]="'PostalCode'" [header]="'Postal Code'" width="100px"></igx-column>
            <igx-column [field]="'Phone'" [header]="'Phone'" width="100px"></igx-column>
            <igx-column [field]="'Fax'" [header]="'Fax'" width="100px"></igx-column>
            <ng-template let-data igxRowDragGhost>
                <div class="allow-drop">
                    <igx-icon family="material">{{dragIcon}}{{countIcon}}</igx-icon>
                </div>
            </ng-template>
        </igx-grid>

        <igx-grid [igxPreventDocumentScroll]="true" #targetGrid igxDrop [data]="data2" [height]="'480px'" [autoGenerate]="false"
            [emptyGridTemplate]="dragHereTemplate" (enter)="onEnter($event)" (leave)="onLeave($event)"
            (dropped)="onDropAllowed($event)" [primaryKey]="'ID'">
            <igx-column [field]="'ID'" [header]="'ID'" width="100px"></igx-column>
            <igx-column [field]="'CompanyName'" [header]="'Company Name'" width="100px"></igx-column>
            <igx-column [field]="'ContactName'" [header]="'Contact Name'" width="100px" [minWidth]="'60px'"
                [maxWidth]="'230px'"></igx-column>
            <igx-column [field]="'ContactTitle'" [header]="'Contact Title'" width="100px"></igx-column>
            <igx-column [field]="'Address'" [header]="'Address'" width="100px"></igx-column>
            <igx-column [field]="'City'" [header]="'City'" width="100px"></igx-column>
            <igx-column [field]="'Region'" [header]="'Region'" width="100px"></igx-column>
            <igx-column [field]="'PostalCode'" [header]="'Postal Code'" width="100px"></igx-column>
            <igx-column [field]="'Phone'" [header]="'Phone'" width="100px"></igx-column>
            <igx-column [field]="'Fax'" [header]="'Fax'" width="100px"></igx-column>
            <ng-template #dragHereTemplate>
                <div class="empty-grid">Drop a row to add it to the grid</div>
            </ng-template>
        </igx-grid>
    </div>
```
```scss
.grid-container {
    display: flex;
}

.grid-container .drop-area {
    height: 500px;
    width: 50%;
    margin: 10px 20px;
}

igx-grid {
    margin: 20px;
}

.empty-grid {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 100%;
}

.allow-drop {
    z-index: 1;
}
    
igx-icon{
    margin-top: 10px;
}
```
<div class="divider--half"></div>
### Templating the drag icon
The drag handle icon can be templated using the grid's [`dragIndicatorIconTemplate`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#dragIndicatorIconTemplate). In the example we're building, let's change the icon from the default one (`drag_indicator`) to `drag_handle`.
To do so, we can use the `igxDragIndicatorIcon` to pass a template inside of the `igx-grid`'s body:
```html
<igx-grid>
...
    <ng-template igxDragIndicatorIcon>
        <igx-icon>drag_handle</igx-icon>
    </ng-template>
...
</igx-grid>
```
Once we've set the new icon template, we also need to adjust the `DEFAULT` icon in our `DragIcon enum`, so it's properly change by the `changeIcon` method:
```typescript
enum DragIcon {
    DEFAULT = "drag_handle",
    ...
}
```
@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {
### Styling the drop area
Once our drop handlers are properly configured, all that's left is to style our drop area a bit:
```css
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
    justify-content: center;
    align-items: center;
    flex-flow: column;
    width: 100%;
}
```
The result can be seen in the demo below:
}
Once our drop handlers are properly configured, we're good to go!
The result of the configuration can be seem below:
#### Example Demo
```typescript
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ViewChild } from '@angular/core';
import { IDropDroppedEventArgs, IgxDropDirective } from 'igniteui-angular/directives';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxColumnComponent, IgxDragIndicatorIconDirective } from 'igniteui-angular/grids/core';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { DATA } from '../../data/customers';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

// eslint-disable-next-line no-shadow
enum DragIcon {
    DEFAULT = 'drag_handle',
    ALLOW = 'add'
}

@Component({
    selector: 'app-grid-row-drag-to-grid-sample',
    styleUrls: ['./grid-row-drag-to-grid.component.scss'],
    templateUrl: 'grid-row-drag-to-grid.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxDragIndicatorIconDirective, IgxIconComponent, IgxDropDirective]
})

export class GridDragToGridSampleComponent {
    @ViewChild('sourceGrid', { read: IgxGridComponent, static: true }) public sourceGrid: IgxGridComponent;
    @ViewChild('targetGrid', { read: IgxGridComponent, static: true }) public targetGrid: IgxGridComponent;
    public data1: any[];
    public data2: any[];

    constructor() {
        this.data1 = DATA;
        this.data2 = [];
    }

    public onRowDragEnd(args) {
        args.animation = true;
    }

    public onDropAllowed(args: IDropDroppedEventArgs) {
        this.targetGrid.addRow(args.dragData.data);
        this.sourceGrid.deleteRow(args.dragData.key);
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
<div class="grid-container">
    <igx-grid [igxPreventDocumentScroll]="true" #sourceGrid [data]="data1" [height]="'480px'" [autoGenerate]="false" [rowDraggable]="true" [primaryKey]="'ID'" (rowDragEnd)="onRowDragEnd($event)">
        <igx-column [field]="'ID'" [header]="'ID'" width="100px"></igx-column>
        <igx-column [field]="'CompanyName'" [header]="'Company Name'" width="100px"></igx-column>
        <igx-column [field]="'ContactName'" [header]="'Contact Name'" width="100px" [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
        <igx-column [field]="'ContactTitle'" [header]="'Contact Title'" width="100px"></igx-column>
        <igx-column [field]="'Address'" [header]="'Address'" width="100px"></igx-column>
        <igx-column [field]="'City'" [header]="'City'" width="100px"></igx-column>
        <igx-column [field]="'Region'" [header]="'Region'" width="100px"></igx-column>
        <igx-column [field]="'PostalCode'" [header]="'Postal Code'" width="100px"></igx-column>
        <igx-column [field]="'Phone'" [header]="'Phone'" width="100px"></igx-column>
        <igx-column [field]="'Fax'" [header]="'Fax'" width="100px"></igx-column>
        <ng-template igxDragIndicatorIcon>
            <igx-icon>drag_handle</igx-icon>
        </ng-template>
    </igx-grid>
    <igx-grid [igxPreventDocumentScroll]="true" #targetGrid igxDrop [data]="data2" [height]="'480px'" [autoGenerate]="false" [emptyGridTemplate]="dragHereTemplate"
        (enter)="onEnterAllowed($event)" (leave)="onLeaveAllowed($event)" (dropped)="onDropAllowed($event)" [primaryKey]="'ID'">
        <igx-column [field]="'ID'" [header]="'ID'" width="100px"></igx-column>
        <igx-column [field]="'CompanyName'" [header]="'Company Name'" width="100px"></igx-column>
        <igx-column [field]="'ContactName'" [header]="'Contact Name'" width="100px" [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
        <igx-column [field]="'ContactTitle'" [header]="'Contact Title'" width="100px"></igx-column>
        <igx-column [field]="'Address'" [header]="'Address'" width="100px"></igx-column>
        <igx-column [field]="'City'" [header]="'City'" width="100px"></igx-column>
        <igx-column [field]="'Region'" [header]="'Region'" width="100px"></igx-column>
        <igx-column [field]="'PostalCode'" [header]="'Postal Code'" width="100px"></igx-column>
        <igx-column [field]="'Phone'" [header]="'Phone'" width="100px"></igx-column>
        <igx-column [field]="'Fax'" [header]="'Fax'" width="100px"></igx-column>
        <ng-template #dragHereTemplate><div class="empty-grid">Drop a row to add it to the grid</div></ng-template>
    </igx-grid>
</div>
```
```scss
.grid-container {
    display: flex;
}

.grid-container .drop-area {
    height: 500px;
    width: 50%;
    margin: 10px 20px;
}

igx-grid {
    margin: 20px;
}

.empty-grid {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 100%;
}
```
<div class="divider--half"></div>
## Application Demo
### Using Row Drag Events
The following demo demonstrates how to use row drag event information to change both states of a custom component, where the row is dropped, and the source grid itself.
Try to drag moons from the grid and drop them to their corresponding planets. Row drag ghost background is dynamically changed, depending on the hovered planet. If you succeed then the row in the grid will be selected and dragging will be disabled for it. Clicking planets will give you useful information.
```typescript
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ViewChildren } from '@angular/core';
import { IgxColumnComponent, RowType } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxDropDirective } from 'igniteui-angular/directives';
import { moonData, planetData } from './data';
import { PlanetComponent as PlanetComponent } from './planet/planet.component';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


// eslint-disable-next-line no-shadow
enum HoverClassList {
    ALLOW = 'allow-drop',
    DENY = 'deny-drop'
}

@Component({
    selector: 'app-grid-row-drag-sample',
    styleUrls: ['./grid-row-drag.component.scss'],
    templateUrl: 'grid-row-drag.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, PlanetComponent, IgxDropDirective]
})

export class GridDragSampleComponent {
    @ViewChildren(PlanetComponent) public planets: PlanetComponent[];
    public moonData: any[];
    public planetData: any[];

    constructor() {
        this.moonData = moonData;
        this.planetData = planetData;
    }

    public onRowDragStart(args) {
        if (args.dragData.isSelected) {
            args.cancel = true;
        }
    }

    public onRowDragEnd(args) {
        args.animation = true;
    }

    public onEnter(args, planet: PlanetComponent) {
        args.drag.ghostElement.classList.add(
            this.isDropAllowed(args.dragData.data.name, planet.name) ? HoverClassList.ALLOW : HoverClassList.DENY);
    }

    public onLeave(args) {
        const dragGhost: HTMLElement =  args.drag.ghostElement;

        if (dragGhost) {
            dragGhost.classList.remove(HoverClassList.ALLOW);
            dragGhost.classList.remove(HoverClassList.DENY);
        }
    }

    public onDrop(args, planet: PlanetComponent) {
        const row: RowType = args.dragData;
        if (this.isDropAllowed(row.data.name, planet.name)) {
            row.data.planet = planet.name;
            row.grid.selectRows([row.key]);

            planet.moonsCount++;
        }
    }

    private isDropAllowed(dragMoonName: string, dropPlanetName: string): boolean {
        return this.planetData.filter((p) => p.name === dropPlanetName)[0].moons.includes(dragMoonName);
    }
}
```
```html
<div class="container">
  <div class="moon-info">
    <igx-grid [igxPreventDocumentScroll]="true" [data]="moonData" [primaryKey]="'name'" [rowDraggable]="true" (rowDragStart)="onRowDragStart($event)" (rowDragEnd)="onRowDragEnd($event)">
      <igx-column [field]="'name'" [header]="'Moon'" width="120px" [pinned]="true" [sortable]="true"></igx-column>
      <igx-column [field]="'planet'" [header]="'Planet'" width="150px" [sortable]="true"></igx-column>
      <igx-column [field]="'mass'" [header]="'Mass'" width="200px" [sortable]="true"></igx-column>
      <igx-column [field]="'diameter'" [header]="'Diameter'" width="200px" [sortable]="true"></igx-column>
      <igx-column [field]="'orbitalPeriod'" [header]="'Orbital Period'" width="200px" [sortable]="true"></igx-column>
    </igx-grid>
  </div>
  <div class="solar-system">
    <div class="planets">
      @for (data of planetData; track data) {
        <app-planet #planet [data]="data"
        igxDrop (enter)="onEnter($event, planet)" (leave)="onLeave($event)" (dropped)="onDrop($event, planet)"></app-planet>
      }
    </div>
    <div class="sun-wrapper">
      <div class="sun">
      </div>
    </div>
  </div>
```
```scss
.container {
    display: flex;
    width: 100%;
}

.moon-info {
    width: 60%;
    padding: 25px;
}

.solar-system
{
    width: 40%;
    padding: 25px;
}

.solar-system {
    display: flex;
    flex-direction: column;
    flex-flow: column;
}

.planets {
    display: flex;
    flex-direction: column;
    flex-flow: column-reverse;
}

::ng-deep {
.allow-drop {
    background-color: #72da67 !important;
    opacity: 0.4;
}

.deny-drop {
    background-color: #e41c77 !important;
    opacity: 0.4;
}
}

planet.dragOver {
    box-shadow: 5px 10px 18px #777;;
    transition: all 300ms ease-in-out;
}

.sun-wrapper {
    display: flex;
    justify-content: center;
    position: relative;
    height: 30px;
    width: 100%;
    overflow: hidden;
}

.sun {
    position: absolute;
    border-radius: 50%;
    border: 1px solid #777;;
    width: 40%;
    height: 100px;
    background: #ffad00;
}

@media only screen and (max-width: 800px) {
    .moon-info {
        padding: 5px;
    }
    .solar-system {
        padding: 5px;
    }
}
```
> [!NOTE]
> The classes applied to the row drag ghost, used in the demo above, are using ::ng-deep modifier, because row drag is an internal grid feature and cannot be accessed on application level, due to the CSS encapsulation.
### Row Reordering Demo
With the help of the grid's row drag events and the `igxDrop` directive, you can create a grid that allows you to reorder rows by dragging them.
Since all of the actions will be happening _inside_ of the grid's body, that's where you have to attach the `igxDrop` directive:
```html
<igx-grid #grid [data]="data" [rowDraggable]="true" [primaryKey]="'ID'" igxDrop (dropped)="onDropAllowed($event)">
    ...
</igx-grid>
```
> [!NOTE]
> Make sure that there is a `primaryKey` specified for the grid! The logic needs an unique identifier for the rows so they can be properly reordered
Once `rowDraggable` is enabled and a drop zone has been defined, you need to implement a simple handler for the drop event. When a row is dragged, check the following:
- Was the row dropped inside of the grid?
- If so, on which _other_ row was the dragged row dropped?
- Once you've found the _target_ row, swap the records' places in the `data` array
@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {
- Is the row expanded? If so, collapse it.
- Was the row dropped inside of the grid?
- If so, on which _other_ row was the dragged row dropped?
- Once you've found the _target_ row, swap the records' places in the `data` array
- Was the row initially selected? If so, mark it as selected.
}
Below, you can see this implemented in the component's `.ts` file:
```typescript
export class GridRowReorderComponent {
    public onDropAllowed(args) {
        const event = args.originalEvent;
        const currRowIndex = this.getCurrentRowIndex(this.grid.rowList.toArray(),
            { x: event.clientX, y: event.clientY });
        if (currRowIndex === -1) { return; }
        this.grid.deleteRow(args.dragData.key);
        this.data.splice(currRowIndex, 0, args.dragData.data);
    }

    private getCurrentRowIndex(rowList, cursorPosition) {
        for (const row of rowList) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                return this.data.indexOf(this.data.find((r) => r.rowID === row.rowID));
            }
        }

        return -1;
    }
}
```
With these few easy steps, you've configured a grid that allows reordering rows via drag/drop! You can see the above code in action in the following demo.
Holding onto the drag icon will allow you to move a row anywhere in the grid:
```typescript
import { Component, QueryList, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxColumnComponent, IgxRowDirective, RowType } from 'igniteui-angular/grids/core';
import { IgxDropDirective } from 'igniteui-angular/directives';
import { DATA } from '../../data/customers';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-row-reorder-sample',
    styleUrls: ['grid-row-reorder.scss'],
    templateUrl: 'grid-row-reorder.html',
    imports: [IgxGridComponent, IgxDropDirective, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class GridRowReorderComponent {
    @ViewChild('grid', { read: IgxGridComponent, static : true })
    public grid: IgxGridComponent;
    public data: any[];

    constructor() {
        this.data = DATA;
    }

    public onDropAllowed(args) {
        const event = args.originalEvent;
        const currRowIndex = this.getCurrentRowIndex(this.grid.rowList.toArray(),
            { x: event.clientX, y: event.clientY });
        if (currRowIndex === -1) { return; }
        // remove the row that was dragged and place it onto its new location
        this.grid.deleteRow(args.dragData.key);
        this.data.splice(currRowIndex, 0, args.dragData.data);
    }

    private getCurrentRowIndex(rowList: IgxRowDirective[], cursorPosition) {
        for (const row of rowList) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                // return the index of the targeted row
                return this.data.indexOf(this.data.find((r) => r.ID === row.key));
            }
        }

        return -1;
    }
}
```
<div class="divider--half"></div>
### Improving UX in row drag scenarios
Being able to obtain the row index which is currently below the cursor provides you with the opportunity to build rich custom functionalities and to improve the UX of your application. For example, you can change the drag ghost or display a drop indicator, based on the position of the dragged row over the grid. Another useful behavior that you can achieve that way is to scroll the grid up or down while dragging a row, when reaching the border of the grid.
Below you can find example snippets of a couple of custom implementations you can achieve by knowing the row's position.
#### Changing the drag ghost based on cursor position
In the snippets below you see how you can change the text inside the drag ghost to display the name of the hovered row.
First, you specify a template which you'd like to use for the drag ghost. The `dropName` property will dynamically change, getting the name of the row over which the cursor is hovering:
```html
<ng-template igxRowDragGhost>
    <div class="customGhost">
        <div>{{ dropName }}</div>
    </div>
</ng-template>
```
Then, define a method that returns the instance of the row you're over (similar to the one used in the [row reordering demo](#row-reordering-demo)):
```typescript
class MyRowGhostComponent {
    private getRowDataAtPoint(rowList: IgxGridRowComponent[], cursorPosition: Point): any {
        for (const row of rowList) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                return this.data.find((r) => r.rowID === row.rowID);
            }
        }
        return null;
    }
}
```
Finally, we create a method that will be used to handle the [`IgxDragDirective.dragMove`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdragdirective.html#dragMove) event (emitted for the dragged row). The method will change the value of the property used in the `igxRowDragGhost` template and force a rerender.
We want to subscribe to the `dragMove` event only of the specific row we're dragging and unsubscribe from it (to prevent memory leaks) each time a row is dropped.
```typescript
class MyRowGhostComponent {
    public ngAfterViewInit(): void {
        this.grid.rowDragStart.pipe(takeUntil(this.destroy$)).subscribe(this.onRowDragStart.bind(this));
    }

    private onRowDragStart(e: IRowDragStartEventArgs) {
        if (e !== null) {
            this._draggedRow = e.dragData.rowData;
        }
        const directive = e.dragDirective;
        directive.dragMove
            .pipe(takeUntil(this.grid.rowDragEnd))
            .subscribe(this.onDragMove.bind(this));
    }

    private onDragMove(args: IDragMoveEventArgs) {
        const cursorPosition = this.getCursorPosition(args.originalEvent);
        const hoveredRowData = this.getRowDataAtPoint(
            this.grid.rowList.toArray(),
            cursorPosition
        );
        if (!hoveredRowData) {
            args.cancel = true;
            return;
        }
        const rowID = hoveredRowData.ID;
        if (rowID !== null) {
            let newName = this.dropName;
            if (rowID !== -1) {
                const targetRow = this.grid.rowList.find((e) => {
                    return e.rowData.ID === rowID;
                });
                newName = targetRow?.rowData.Name;
            }
            if (newName !== this.dropName) {
                this.dropName = newName;
                args.owner.cdr.detectChanges();
            }
        }
    }
}
```
#### Displaying a drop indicator based on cursor position
In the demo in the next section you see how you can display an indicator of where the dragged row would be dropped. You can customize this indicator as you like - it may be a placeholder row, placed at the position where the dragged row would be dropped, a border style indicating if the dragged row would be dropped above or below the currently hovered row, etc.
In order to track the position of the cursor, we bind to the `dragMove` event of the [`IgxDragDirective`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdragdirective.html#dragMove) when we start dragging a row.
> [!NOTE]
> Make sure that there is a `primaryKey` specified for the grid! The logic needs an unique identifier for the rows so they can be properly reordered
```typescript
public ngAfterViewInit() {
  this.grid.rowDragStart
    .pipe(takeUntil(this.destroy$))
    .subscribe(this.handleRowStart.bind(this));
}
private handleRowStart(e: IRowDragStartEventArgs): void {
  if (e !== null) {
    this._draggedRow = e.dragData.data;
  }
  const directive = e.dragDirective;
  directive.dragMove
    .pipe(takeUntil(this.grid.rowDragEnd))
    .subscribe(this.handleDragMove.bind(this));
}
private handleDragMove(event: IDragMoveEventArgs): void {
  this.handleOver(event);
}
private handleOver(event: IDragMoveEventArgs) {
  const ghostRect = event.owner.ghostElement.getBoundingClientRect();
  const rowIndex = this.getRowIndexAtPoint(this.grid.rowList.toArray(), {
    x: ghostRect.x,
    y: ghostRect.y
  });
  if (rowIndex === -1) {
    return;
  }
  const rowElement = this.grid.rowList.find(
    e => e.rowData.ID === this.grid.data[rowIndex].ID
  );
  if (rowElement) {
    this.changeHighlightedElement(rowElement.element.nativeElement);
  }
}
private clearHighlightElement(): void {
  if (this.highlightedRow !== undefined) {
    this.renderer.removeClass(this.highlightedRow, 'underlined-class');
  }
}
private setHightlightElement(newElement: HTMLElement) {
  this.renderer.addClass(newElement, 'underlined-class');
  this.highlightedRow = newElement;
}
private changeHighlightedElement(newElement: HTMLElement) {
  if (newElement !== undefined) {
    if (newElement !== this.highlightedRow) {
      this.clearHighlightElement();
      this.setHightlightElement(newElement);
    } else {
      return;
    }
  }
}
```
<div class="divider--half"></div>
#### Scrolling the grid on row drag
A very useful scenario is being able to scroll the grid when the dragged row reaches its' top or bottom border. This allows reordering rows outside of the current viewport when the number of rows in the grid requires a scrollbar.
Below you see an example of the two methods we use to check if we have reached the edge of the viewport and to scroll it if needed. The `isGridScrolledToEdge` accepts one parameter - the direction we'd like to scroll the grid (1 for "Down", -1 for "Up") and returns `true` if we've reach the final row in that direction. The `scrollGrid` method will attempt to scroll the grid in a direction (1 or -1), doing nothing if the grid is already at _that_ edge.
```typescript
class MyGridScrollComponent {
    private isGridScrolledToEdge(dir: 1 | -1): boolean {
        if (this.grid.data[0] === this.grid.rowList.first.data && dir === -1) {
            return true;
        }
        if (
            this.grid.data[this.grid.data.length - 1] === this.grid.rowList.last.data &&
            dir === 1
        ) {
            return true;
        }
        return false;
    }

    private scrollGrid(dir: 1 | -1): void {
        if (!this.isGridScrolledToEdge(dir)) {
            if (dir === 1) {
                this.grid.verticalScrollContainer.scrollNext();
            } else {
                this.grid.verticalScrollContainer.scrollPrev();
            }
        }
    }
}
```
We'll still be subscribing to the `dragMove` event of the specific row in the way we did in the previous example. Since `dragMove` is fired only when the cursor actually moves, we want to have a nice and simple way to auto-scroll the grid when the row is at one of the edges, but the user **does not** move the mouse. We'll an additional method which will setup an `interval`, auto-scrolling the grid every `500ms`.
We create and subscribe to the `interval` when the pointer reaches the grid's edge and we `unsubscribe` from that `interval` every time the mouse moves or the row is dropped (regardless of cursor position).
```typescript
class MyGridScrollComponent {
    public ngAfterViewInit() {
        this.grid.rowDragStart
            .pipe(takeUntil(this.destroy$))
            .subscribe(this.onDragStart.bind(this));
        this.grid.rowDragEnd
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.unsubInterval());
    }

    private onDragMove(event: IDragMoveEventArgs): void {
        this.unsubInterval();
        const dir = this.isPointOnGridEdge(event.pageY);
        if (!dir) {
            return;
        }
        this.scrollGrid(dir);
        if (!this.intervalSub) {
            this.interval$ = interval(500);
            this.intervalSub = this.interval$.subscribe(() => this.scrollGrid(dir));
        }
    }

    private unsubInterval(): void {
        if (this.intervalSub) {
            this.intervalSub.unsubscribe();
            this.intervalSub = null;
        }
    }
}
```
Following is the example of both scenarios described above - showing a drop indicator and scrolling the viewport when border's edge is reached.
```typescript
import { Component, ViewChild, AfterViewInit, OnDestroy, Renderer2, inject } from '@angular/core';
import { IDragMoveEventArgs, IDropDroppedEventArgs, IgxDropDirective } from 'igniteui-angular/directives';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IRowDragStartEventArgs, IgxColumnComponent, IgxRowDirective } from 'igniteui-angular/grids/core';
import { Point } from 'igniteui-angular/core';
import { DATA } from '../../data/customers';
import { Subject, interval, Observable, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-drop-indicator',
    styleUrls: ['grid-drop-indicator.scss'],
    templateUrl: 'grid-drop-indicator.html',
    imports: [IgxGridComponent, IgxDropDirective, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class GridDropIndicatorComponent implements AfterViewInit, OnDestroy {
  private renderer = inject(Renderer2);

  @ViewChild('grid', { read: IgxGridComponent, static: true })
  public grid: IgxGridComponent;
  public data: any[];
  private destroy$ = new Subject<void>();
  private intervalSub: Subscription;
  private interval$: Observable<number>;
  private _draggedRow: any;
  private highlightedRow: HTMLElement;

  constructor() {
    this.data = DATA;
  }

  public onDropAllowed(args: IDropDroppedEventArgs): void {
    const event = args.originalEvent;
    const currRowIndex = this.getRowIndexAtPoint(this.grid.rowList.toArray(), {
      x: event.clientX,
      y: event.clientY
    });
    if (currRowIndex === -1) {
      return;
    }
    // remove the row that was dragged and place it onto its new location
    this.grid.deleteRow(this._draggedRow[this.grid.primaryKey]);
    this.data.splice(currRowIndex, 0, this._draggedRow);
    this.clearHighlightElement();
  }

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public ngAfterViewInit() {
    this.grid.rowDragStart
      .pipe(takeUntil(this.destroy$))
      .subscribe(this.handleRowStart.bind(this));
    this.grid.rowDragEnd
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
          this.unsubInterval();
          this.clearHighlightElement();
        });
  }

  private getRowIndexAtPoint(
    rowList: IgxRowDirective[],
    cursorPosition: Point
  ): number {
    for (const row of rowList) {
      const rowRect = row.nativeElement.getBoundingClientRect();
      if (
        cursorPosition.y > rowRect.top + window.scrollY &&
        cursorPosition.y < rowRect.bottom + window.scrollY &&
        cursorPosition.x > rowRect.left + window.scrollX &&
        cursorPosition.x < rowRect.right + window.scrollX
      ) {
        // return the index of the targeted row
        return this.data.indexOf(this.data.find(r => r.ID === row.key));
      }
    }

    return -1;
  }

  /**
   * Unsubs from the autoscroll interval
   */
  private unsubInterval(): void {
    if (this.intervalSub) {
      this.intervalSub.unsubscribe();
      this.intervalSub = null;
    }
  }

  /**
   * Handles the grid.onRowDragStart event
   */
  private handleRowStart(e: IRowDragStartEventArgs): void {
    if (e !== null) {
      this._draggedRow = e.dragData.data;
    }
    const directive = e.dragDirective;
    directive.dragMove
      .pipe(takeUntil(this.grid.rowDragEnd))
      .subscribe(this.handleDragMove.bind(this));
  }

  /**
   * Handles the onDragMove event
   */
  private handleDragMove(event: IDragMoveEventArgs): void {
    this.handleOver(event);
    this.unsubInterval();
    const dir = this.isPointOnGridEdge(event.pageY);
    if (!dir) {
      return;
    }
    this.scrollGrid(dir);
    if (!this.intervalSub) {
      this.interval$ = interval(500);
      this.intervalSub = this.interval$.subscribe(() => this.scrollGrid(dir));
    }
  }

  /**
   * Returns if the point is on the upper (-1) or lower (1) edge of a rectangle
   */
  private isPointOnGridEdge(pageY: number): 1 | -1 {
    const rect: ClientRect = this.grid.nativeElement
      .querySelector('.igx-grid__tbody')
      .getBoundingClientRect();
    if (pageY >= rect.bottom) {
      return 1;
    } else if (pageY <= rect.top) {
      return -1;
    }
  }

  /**
   * Checks if the grid is scrolled to its upper (-1) or lower (1) edge
   */
  private isGridScrolledToEdge(dir: 1 | -1): boolean {
    if (this.grid.data[0] === this.grid.rowList.first.data && dir === -1) {
      return true;
    }
    if (
      this.grid.data[this.grid.data.length - 1] ===
        this.grid.rowList.last.data &&
      dir === 1
    ) {
      return true;
    }
    return false;
  }

  /**
   * Attempts to scroll the grid in target direction
   *
   * Returns whether the grid was scrolled
   */
  private scrollGrid(dir: 1 | -1): void {
    if (!this.isGridScrolledToEdge(dir)) {
      if (dir === 1) {
        this.grid.verticalScrollContainer.scrollNext();
      } else {
        this.grid.verticalScrollContainer.scrollPrev();
      }
    }
  }

  private handleOver(event: IDragMoveEventArgs) {
    const ghostRect = event.owner.ghostElement.getBoundingClientRect();
    const rowIndex = this.getRowIndexAtPoint(this.grid.rowList.toArray(), {
      x: ghostRect.x,
      y: ghostRect.y
    });
    if (rowIndex === -1) {
      return;
    }
    const rowElement = this.grid.rowList.find(
      e => e.data.ID === this.grid.data[rowIndex].ID
    );
    if (rowElement) {
      this.changeHighlightedElement(rowElement.element.nativeElement);
    }
  }

  private clearHighlightElement(): void {
    if (this.highlightedRow !== undefined) {
      this.renderer.removeClass(this.highlightedRow, 'underlined-class');
    }
  }
  private setHightlightElement(newElement: HTMLElement) {
    this.renderer.addClass(newElement, 'underlined-class');
    this.highlightedRow = newElement;
  }

  private changeHighlightedElement(newElement: HTMLElement) {
    if (newElement !== undefined) {
      if (newElement !== this.highlightedRow) {
        this.clearHighlightElement();
        this.setHightlightElement(newElement);
      } else {
        return;
      }
    }
  }
}
```
<div class="divider--half"></div>
## Limitations
Currently, there are no known limitations for the `rowDraggable` directive.
## API References
- [rowDraggable](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowDraggable)
- [rowDragStart](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowDragStart)
- [rowDragEnd](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowDragEnd)
- [IgxGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)
## Additional Resources
<div class="divider--half"></div>
- [Grid Overview](grid.md)
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
