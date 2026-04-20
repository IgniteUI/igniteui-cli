---
title:  Row actions in Angular Data Grid - Ignite UI for Angular 
_description: The grid component in Ignite UI for Angular provides the ability to use ActionStrip and utilize CRUD for row/cell components and row pinning.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular ActionStrip components, Angular ActionStrip directives, Angular ActionStrip controls
_license: commercial
_tocName: Row Actions
_premium: true
---
# Row Actions in Angular Data Grid
The grid component in Ignite UI for Angular provides the ability to use [ActionStrip](../action-strip.md) and utilize CRUD for row/cell components and row pinning. The Action Strip component can host predefined UI controls for these operations.
## Usage
The first step is to import the **IgxActionStripModule** in our **app.module.ts** file:
```typescript
// app.module.ts
...
import { IgxActionStripModule } from 'igniteui-angular/action-strip';
// import { IgxActionStripModule } from '@infragistics/igniteui-angular'; for licensed package
@NgModule({
    ...
    imports: [..., IgxActionStripModule],
    ...
})
```
The predefined `actions` UI components are:
- [`IgxGridEditingActionsComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgrideditingactionscomponent.html) - includes functionality and UI specifically designed for the grid editing. It allows you to quickly toggle edit mode for cells or rows, depending on the [`rowEditable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridComponent.html#rowEditable) option and row deletion of the grid.
- [`IgxGridPinningActionsComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridpinningactionscomponent.html) - includes functionality and UI specifically designed for the grid row pinning. It allows you to quickly pin rows and navigate between pinned rows and their disabled counterparts.
They are added inside the `<igx-action-strip>` and this is all needed to have an Action Strip providing default interactions.
```html
<igx-grid [data]="data" [rowEditable]="true" [primaryKey]="'ID'">
    <igx-column *ngFor="let c of columns" [field]="c.field">
    </igx-column>

    <igx-action-strip #actionStrip>
        <igx-grid-pinning-actions></igx-grid-pinning-actions>
        <igx-grid-editing-actions></igx-grid-editing-actions>
    </igx-action-strip>
</igx-grid>
```
>[!NOTE]
> When `IgxActionStripComponent` is a child component of the grid, hovering a row will automatically show the UI.
## Custom implementation
These components expose templates giving flexibility for customization. For instance, if we would like to use the `ActionStrip` for a Gmail scenario with row actions such as `delete`, `edit` and etc. You can simply create button component with `igx-icon`, add click event to it and insert it into the `igx-action-strip` component.
```html
<igx-grid>
    <igx-action-strip #actionstrip>
        <igx-grid-pinning-actions></igx-grid-pinning-actions>
        <button title="Edit" igxIconButton="flat" igxRipple (click)='startEdit(actionstrip.context)'>
            <igx-icon>edit</igx-icon>
        </button>
        <button title="Delete" igxIconButton="flat" igxRipple *ngIf='!isDeleted(actionstrip.context)' (click)='actionstrip.context.delete()'>
            <igx-icon>delete</igx-icon>
        </button>
    </igx-action-strip>
</igx-grid>
```
```typescript
import { Component, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxColumnComponent, IgxGridPinningActionsComponent, RowType } from 'igniteui-angular/grids/core';
import { Transaction } from 'igniteui-angular/core';
import { IgxActionStripComponent } from 'igniteui-angular/action-strip';
import { IgxIconButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-grid-row-action-strip',
    styleUrls: [`grid-action-strip-sample.scss`],
    templateUrl: 'grid-action-strip-sample.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxActionStripComponent, IgxGridPinningActionsComponent, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent]
})
export class GridActionStripSampleComponent {
    @ViewChild('grid', { read: IgxGridComponent, static: true }) public grid: IgxGridComponent;

    public data: any[];
    public discardedTransactionsPerRecord: Map<number, Transaction[]> = new Map<number, Transaction[]>();

    constructor() {
        this.data = DATA;
    }

    public isDirty(rowContext: RowType) {
        const isRowEdited = this.grid.transactions.getAggregatedChanges(true).find(x => x.id === rowContext?.key);
        return rowContext && (rowContext.deleted || isRowEdited);
    }

    public isDeleted(rowContext: RowType) {
        return rowContext && rowContext.deleted;
    }

    public inEditMode(rowContext: RowType) {
        return rowContext && rowContext.inEditMode;
    }

    public startEdit(rowContext: RowType): void {
        const firstEditable = rowContext.cells.filter(cell => cell.editable)[0];
        const grid = rowContext.grid;

        if (grid.rowList.filter(r => r === rowContext).length !== 0) {
            grid.gridAPI.crudService.enterEditMode(firstEditable);
            firstEditable.activate(null);
        }
    }

    public commit(rowContext: RowType) {
        this.grid.transactions.commit(this.grid.data, rowContext.key);
        this.discardedTransactionsPerRecord.set(rowContext.key, []);
    }

    public redo(rowContext: RowType) {
        const rowID = rowContext.key;
        const lastDiscarded = this.discardedTransactionsPerRecord.get(rowID);
        lastDiscarded.forEach((transaction) => {
            const recRef = this.grid.gridAPI.get_rec_by_id(transaction.id);
            this.grid.transactions.add(transaction, recRef);
        });
        this.discardedTransactionsPerRecord.set(rowID, []);
    }

    public hasDiscardedTransactions(rowContext: RowType) {
        if (!rowContext) { return false; }
        const lastDiscarded = this.discardedTransactionsPerRecord.get(rowContext.key);
        return lastDiscarded && lastDiscarded.length > 0;
    }

    public undo(rowContext: RowType) {
        const transactionsToDiscard = this.grid.transactions.getAggregatedChanges(true)
        .filter(x => x.id === rowContext.key);
        this.discardedTransactionsPerRecord.set(rowContext.key, transactionsToDiscard);
        this.grid.transactions.clear(rowContext.key);
    }
}
```
>[!NOTE]
> The predefined actions inherit [`IgxGridActionsBaseDirective`]({environment:infragisticsBaseUrl}/classes/igxgridactionsbasedirective.html) and when creating a custom grid action component, it should also inherit `IgxGridActionsBaseDirective`.
## API References
For more detailed information regarding the Action Strip API, refer to the following links:
- [`IgxActionStripComponent API`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxactionstripcomponent.html)
Additional components and/or directives that can be used within the Action Strip:
- [`IgxGridActionsBaseDirective`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridactionsbasedirective.html)
- [`IgxGridPinningActionsComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridpinningactionscomponent.html)
- [`IgxGridEditingActionsComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgrideditingactionscomponent.html)
- [`IgxDividerDirective`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdividerdirective.html)
