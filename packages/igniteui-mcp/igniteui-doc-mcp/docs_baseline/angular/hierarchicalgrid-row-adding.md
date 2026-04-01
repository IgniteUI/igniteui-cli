---
_tocName: Row Adding
_premium: true
---
---title: Adding Rows in Angular Hierarchical Grid - Ignite UI for Angular_description: Learn how to use and customize the built-in row adding functionality with Ignite UI for Angular. CRUD capabilities and Intuitive grid row adding. See examples!_keywords: row adding, igniteui for angular, infragistics_license: commercial_canonicalLink: grid/row-adding---# Adding Rows in Angular Hierarchical GridThe Hierarchical Grid provides a convenient way to perform data manipulations through inline row adding and a powerful API for Angular CRUD operations. Add an [Action Strip](../action-strip.md) component with editing actions enabled in the grid's template, hover a row and use the provided button or press <kbd>ALT</kbd> + <kbd>+</kbd> to spawn the row adding UI.## Angular Hierarchical Grid Row Adding ExampleThe following sample demonstrates how to enable native row adding in the Hierarchical Grid. Changing a cell value and then clicking or navigating to another cell on the same row doesn't update the row value until confirmed by using the **Done** button, or discarded by using **Cancel** button.```typescript
import { Component, OnInit } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxColumnComponent, IgxGridEditingActionsComponent } from 'igniteui-angular/grids/core';
import { IgxActionStripComponent } from 'igniteui-angular/action-strip';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-add-row',
    styleUrls: ['./hierarchical-grid-add-row.component.scss'],
    templateUrl: './hierarchical-grid-add-row.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxActionStripComponent, IgxGridEditingActionsComponent, IgxRowIslandComponent]
})

export class HGridAddRowSampleComponent implements OnInit {
    public localdata;


    public ngOnInit(): void {
        this.localdata = SINGERS;
    }
}
```
```html
<div class="grid-wrapper">
<igx-hierarchical-grid [igxPreventDocumentScroll]="true" #hierarchicalGrid class="hgrid" [data]="localdata"
    [autoGenerate]="false" [height]="'480px'" [width]="'100%'" [primaryKey]="'ID'" [rowEditable]="true">
    <igx-column field="Artist" [dataType]="'string'"></igx-column>
    <igx-column field="HasGrammyAward" header="Has Grammy Award?" [dataType]="'boolean'">
    </igx-column>
    <igx-column field="Debut" dataType="number"></igx-column>
    <igx-column field="GrammyNominations" header="Grammy Nominations" dataType="number"></igx-column>
    <igx-column field="GrammyAwards" header="Grammy Awards" dataType="number"></igx-column>

    <igx-action-strip #actionstrip1>
        <igx-grid-editing-actions [addRow]="true"></igx-grid-editing-actions>
    </igx-action-strip>

    <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false" [primaryKey]="'USBillboard200'" [rowEditable]="true">
        <igx-column field="Album" [dataType]="'string'"></igx-column>
        <igx-column field="LaunchDate" header="Launch Date" [dataType]="'date'"></igx-column>
        <igx-column field="BillboardReview" header="Billboard Review" dataType="number"></igx-column>
        <igx-column field="USBillboard200" header="US Billboard 200" dataType="number"></igx-column>
        <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false" [primaryKey]="'Number'" [rowEditable]="true">
            <igx-column field="Number" header="No." dataType="number"></igx-column>
            <igx-column field="Title" [dataType]="'string'"></igx-column>
            <igx-column field="Released" [dataType]="'date'"></igx-column>
            <igx-column field="Genre" [dataType]="'string'"></igx-column>
            <igx-action-strip #actionstrip3>
                <igx-grid-editing-actions [addRow]="true"></igx-grid-editing-actions>
            </igx-action-strip>
        </igx-row-island>
        <igx-action-strip #actionstrip2>
            <igx-grid-editing-actions [addRow]="true"></igx-grid-editing-actions>
        </igx-action-strip>
    </igx-row-island>
</igx-hierarchical-grid>
</div>
```
```scss
.addSingerBtn.igx-button--contained{
    margin-bottom: 10px;
    background-color: lightgrey;
    color: black;
    &:hover {
        background-color:  rgba(0, 0, 0, 0.26)
    }
}

.dialogNewRecord {
    margin: 10px;
    padding: 10px;;
}

.igx-input-group {
    margin-bottom: 10px;
    padding: 5px;
}
.igx-checkbox {
    margin-top: 5px;
    margin-bottom: 5px;
    padding-top: 8px;
    padding-bottom: 5px;
}

.reorderLevelInput {
    color: black;
    width: 100%;
}

.grid-wrapper {
    padding: 16px;
}
```<div class="divider--half"></div>## Row Adding UsageTo get started import the `IgxHierarchicalGridModule` in the **app.module.ts** file:```typescript// app.module.ts...import { IgxHierarchicalGridModule } from 'igniteui-angular';@NgModule({
    ...
    imports: [..., IgxHierarchicalGridModule],
    ...})export class AppModule {}```Then define a Hierarchical Grid with bound data source and [`rowEditable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#rowEditable) set to true and an [Action Strip](../action-strip.md) component with editing actions enabled. The [`addRow`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgrideditingactionscomponent.html#addRow) input controls the visibility of the button that spawns the row adding UI.```html<igx-hierarchical-grid igxPreventDocumentScroll [data]="localdata"
    [autoGenerate]="false" [primaryKey]="'Debut'" [rowEditable]="true">
    <igx-column field="Artist" [dataType]="'string'"></igx-column>
    <igx-column field="HasGrammyAward" header="Has Grammy Award?" [dataType]="'boolean'">
    </igx-column>
    <igx-column field="Debut" dataType="number"></igx-column>
    <igx-column field="GrammyNominations" header="Grammy Nominations" dataType="number"></igx-column>
    <igx-column field="GrammyAwards" header="Grammy Awards" dataType="number"></igx-column>

    <igx-action-strip #actionstrip1>
        <igx-grid-editing-actions [addRow]="true"></igx-grid-editing-actions>
    </igx-action-strip>

    <igx-row-island [key]="'Albums'" [autoGenerate]="false" [primaryKey]="'USBillboard200'" [rowEditable]="true">
        <igx-column field="Album" [dataType]="'string'"></igx-column>
        <igx-column field="LaunchDate" header="Launch Date" [dataType]="'date'"></igx-column>
        <igx-column field="BillboardReview" header="Billboard Review" dataType="number"></igx-column>
        <igx-column field="USBillboard200" header="US Billboard 200" dataType="number"></igx-column>
        <igx-row-island [key]="'Songs'" [autoGenerate]="false" [primaryKey]="'Number'" [rowEditable]="true">
            <igx-column field="Number" header="No." dataType="number"></igx-column>
            <igx-column field="Title" [dataType]="'string'"></igx-column>
            <igx-column field="Released" [dataType]="'date'"></igx-column>
            <igx-column field="Genre" [dataType]="'string'"></igx-column>

            <igx-action-strip #actionstrip3>
                <igx-grid-editing-actions [addRow]="true"></igx-grid-editing-actions>
            </igx-action-strip>

        </igx-row-island>

        <igx-action-strip #actionstrip2>
            <igx-grid-editing-actions [addRow]="true"></igx-grid-editing-actions>
        </igx-action-strip>
    </igx-row-island></igx-hierarchical-grid>```> [!NOTE]> Setting primary key is mandatory for row adding operations.> [!NOTE]> Every column excluding the primary key one is editable in the row adding UI by default. If you want to disable editing for a specific column, then you have to set the [`editable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#editable) column's input to `false`.> [!NOTE]> The IgxGridEditingActions input controlling the visibility of the add row button may use the action strip context (which is of type [`RowType`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/rowtype.html)) to fine tune which records the button shows for.The internal [`IgxBaseTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbasetransactionservice.html) is automatically provided for Hierarchical Grid. It holds pending cell changes until the row state is submitted or cancelled.## Start Row Adding ProgrammaticallyHierarchical Grid allows to programmatically spawn the add row UI by using two different public methods. One that accepts a row ID for specifying the row under which the UI should spawn and another that works by index. You can use these methods to spawn the UI anywhere within the current data view. Changing the page or specifying a row that is e.g. filtered out is not supported.Using `beginAddRowById` requires you to specify the row to use as context for the operation by its rowID (PK). The method then functions as though the end-user clicked on the add row action strip button for the specified row, spawning the UI under it. You can also make the UI spawn as the very first row in the grid by passing `null` for the first parameter.```typescriptthis.grid.beginAddRowById('ALFKI');  // spawns the add row UI under the row with PK 'ALFKI'this.grid.beginAddRowById(null);     // spawns the add row UI as the first record```The `beginAddRowByIndex` method works similarly but requires you to specify the index _at_ which the UI should spawn. Allowed values range between 0 and the size of the data view - 1.```typescriptthis.grid.beginAddRowByIndex(10);   // spawns the add row UI at index 10this.grid.beginAddRowByIndex(0);    // spawns the add row UI as the first record```## Positioning- The Default position row add UI is below the row that the end user clicked the add row button for.- The Hierarchical Grid scrolls to fully display the add row UI automatically.- The overlay for the add row UI maintains its position during scrolling.## BehaviorThe add row UI has the same behavior as the row editing one as they are designed to provide a consistent editing experience to end users. Please, refer to the [Hierarchical Grid Row Editing](row-editing.md) topic for more information.After a new row is added through the row adding UI, its position and/or visibility is determined by the sorting, filtering and grouping state of the Hierarchical Grid. In a Hierarchical Grid that does not have any of these states applied, it appears as the last record. A snackbar is briefly displayed containing a button the end user may use to scroll the Hierarchical Grid to its position if it is not in view.## Keyboard Navigation- <kbd>ALT</kbd> + <kbd>+</kbd> - Enters edit mode for adding a row- <kbd>ESC</kbd> exits row adding mode without submitting any changes- <kbd>TAB</kbd> move focus from one editable cell in the row to the next and from the right-most editable cell to the CANCEL and DONE buttons. Navigation from DONE button goes to the left-most editable cell within the currently edited row.## Feature Integration- Any row adding operation will stop if the data view of the Hierarchical Grid gets modified. Any changes made by the end user are submitted. Operations that change the data view include but are not limited to sorting, grouping, filtering, paging, etc.- Summaries are updated after the row add operation finishes. The same is valid for the other data view dependant features such as sorting, filtering, etc.- When spawning the UI for Hierarchical Grids, any child layout currently expanded for a row that the end user clicks the add row button for is collapsed.## Customizing Row Adding Overlay### Customizing TextCustomizing the text of the row adding overlay is possible using the `igxRowAddTextDirective`.```html<ng-template igxRowAddText>
 Adding Row</ng-template>
 ```### Customizing ButtonsCustomizing the buttons of the row editing overlay is possible using the `igxRowEditActionsDirective`.If you want the buttons to be part of the keyboard navigation, then each on of them should have the `igxRowEditTabStopDirective`.

 ```html
 <ng-template igxRowEditActions let-endRowEdit>
 <button igxButton igxRowEditTabStop (click)="endRowEdit(false)">Cancel</button>
 <button igxButton igxRowEditTabStop (click)="endRowEdit(true)">Apply</button></ng-template>
 ```> [!NOTE]> Using `igxRowEditActions` directive will change edit actions for both editing and adding overlay buttons.## Remote scenariosIn most remote data scenarios the Primary Key assignment happens on the create server request. In this case the added records on the client will not have the final primary key value until saved on the server's data base. In that case the recommended way to handle this update in the Hierarchical Grid is as follows:- If the Hierarchical Grid does not use transactions.

    Once the create request is successfully completed and returns the added record data, you can replace that record's id in the local data record instance.- If the Hierarchical Grid uses transactions.

    Once the create request or batch update request is successfully completed and returns the added record instances (with their db generated ids), the related ADD transactions should be cleared from the transaction log using the [clear](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/transactionservice.html#clear) API method. This is necessary because the local transaction will have a generated id field, which may differ than the one created in the data base, so they should be cleared. You can then add the record(s) passed in the response to the local data instance.This will ensure that the remotely generated ids are always reflected in the local data, and subsequent update/delete operations target the correct record ids.## StylingThe row adding UI comprises the buttons in the `IgxActionStrip` editing actions, the editing editors and overlay, as well as the snackbar which allows end users to scroll to the newly added row. To style these components you may refer to these comprehensive guides in their respective topics:- [Hierarchical Grid Row Editing](row-editing.md#styling)- [IgxSnackbar](../snackbar.md#styling)- [IgxActionStrip](../action-strip.md#styling)## API References- [rowEditable](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#rowEditable)- [onRowEditEnter](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#onRowEditEnter)- [onRowEdit](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#onRowEdit)- [rowEditDone](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#rowEditDone)- [onRowEditCancel](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#onRowEditCancel)- [endEdit](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#endEdit)- [primaryKey](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#primaryKey)- [IgxHierarchicalGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html)- [IgxActionStripComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxactionstripcomponent.html)- [IgxGridEditingActionsComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgrideditingactionscomponent.html)## Additional Resources<div class="divider--half"></div>- [Hierarchical Grid Overview](hierarchical-grid.md)- [Hierarchical Grid Editing](editing.md)- [Hierarchical Grid Transactions](batch-editing.md)<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
