---
_tocName: Validation
_premium: true
---
---title: Editing and Validation in Angular Hierarchical Grid - Infragistics_description: Validate the input of the users in grid and notify them if it's valid or not while using Angular Hierarchical Grid. See demos & examples!_keywords: angular validation, ignite ui for angular, infragistics_license: commercial---# Angular Hierarchical Grid Editing and ValidationThe Hierarchical Grid's editing exposes a built-in validation mechanism of user input when editing cells/rows. It extends the [Angular Form validation](https://angular.io/guide/form-validation) functionality to allow easier integration with a well known functionality. When the state of the editor changes, visual indicators are applied to the edited cell.## Configuration### Configure via template-driven configurationWe extend some of the Angular Forms validator directives to directly work with the `IgxColumn`. The same validators are available as attributes to be set declaratively in `igx-column`. The following validators are supported out-of-the-box:- required- min- max- email- minlength- maxlength- patternTo validate that a column input would be set and the value is going to be formatted as an email, you can use the related directives:```html<igx-column [field]="email" [header]="User E-mail" required email></igx-column>```The following sample demonstrates how to use the prebuilt `required`, `email` and `min` validator directives in a Hierarchical Grid.```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxColumnComponent, IgxColumnMaxValidatorDirective, IgxColumnMinValidatorDirective, IgxColumnRequiredValidatorDirective } from 'igniteui-angular/grids/core';
import { CUSTOMERS } from '../../data/hierarchical-data';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-hierarchical-grid-validator-service',
    styleUrls: ['./hierarchical-grid-validator-service.component.scss'],
    templateUrl: './hierarchical-grid-validator-service.component.html',
    imports: [IgxSwitchComponent, FormsModule, IgxHierarchicalGridComponent, IgxColumnComponent, IgxColumnRequiredValidatorDirective, IgxRowIslandComponent, IgxColumnMinValidatorDirective, IgxColumnMaxValidatorDirective]
})
export class HierarchicalGridValidatorServiceComponent implements OnInit {

    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    public rowEdit: boolean = false;

    public ngOnInit(): void {
        this.hierarchicalGrid.data = CUSTOMERS;
    }

}
```
```html
<div class="top-row">
    <igx-switch [(ngModel)]="rowEdit">Row edit</igx-switch>
</div>

<div class="grid-wrapper">
    <igx-hierarchical-grid #hierarchicalGrid height="570px" width="100%" [primaryKey]="'CustomerID'"
        [batchEditing]="true" [rowEditable]="true" [rowEditable]="rowEdit">
        <igx-column field="CustomerID" [editable]="true"></igx-column>
        <igx-column field="CompanyName" [editable]="true" required></igx-column>
        <igx-column field="ContactName" [editable]="true" required>
        </igx-column>
        <igx-column field="ContactTitle" [editable]="true" required></igx-column>
        <igx-column field="Phone" [editable]="true" required></igx-column>
        <igx-column field="Fax" [editable]="true"></igx-column>

        <igx-row-island [height]="null" [key]="'Orders'" [primaryKey]="'OrderID'" [autoGenerate]="false"
            [batchEditing]="true" [rowEditable]="true" [rowEditable]="rowEdit">
            <igx-column [editable]="false" field="OrderID"></igx-column>
            <igx-column [editable]="true" field="EmployeeID" [editable]="true" required></igx-column>
            <igx-column [editable]="true" field="OrderDate" [dataType]="'date'" [editable]="true" required>
            </igx-column>
            <igx-column [editable]="true" field="RequiredDate" [dataType]="'date'" [editable]="true" required>
            </igx-column>
            <igx-column field="ShippedDate" [dataType]="'date'" [editable]="true">
            </igx-column>
            <igx-column field="ShipVia" [selectable]="false" [editable]="true" min="0" max="10"></igx-column>
            <igx-column field="Freight" [selectable]="false" [editable]="true"></igx-column>

            <igx-row-island [height]="null" [key]="'OrderDetails'" [primaryKey]="'ProductID'" [autoGenerate]="false"
                [batchEditing]="true" [rowEditable]="true" [primaryKey]="'ProductID'" [rowEditable]="rowEdit">
                <igx-column [editable]="true" field="ProductID" [editable]="false" required></igx-column>
                <igx-column [editable]="true" field="UnitPrice" [editable]="true" required></igx-column>
                <igx-column [editable]="true" field="Quantity" [editable]="true" required></igx-column>
                <igx-column [editable]="true" field="Discount" [editable]="true"></igx-column>
            </igx-row-island>
        </igx-row-island>
    </igx-hierarchical-grid>
</div>
```
```scss
.top-row, .grid-wrapper {
    padding: 16px;
}
```<div class="divider--half"></div>### Configure via reactive formsWe expose the `FormGroup` that will be used for validation when editing starts on a row/cell via a `formGroupCreated` event. You can modify it by adding your own validators for the related fields:```html<igx-hierarchical-grid (formGroupCreated)='formCreateHandler($event)' ...>```@@if (igxName === 'IgxGrid' || igxName === 'IgxHierarchicalGrid') {```ts
    public formCreateHandler(args: IGridFormGroupCreatedEventArgs) {
        const formGroup = args.formGroup;
        const orderDateRecord = formGroup.get('OrderDate');
        const requiredDateRecord = formGroup.get('RequiredDate');
        const shippedDateRecord = formGroup.get('ShippedDate');

        orderDateRecord.addValidators(this.futureDateValidator());
        requiredDateRecord.addValidators(this.pastDateValidator());
        shippedDateRecord.addValidators(this.pastDateValidator());
    }```}You can decide to write your own validator function, or use one of the [built-in Angular validator functions](https://angular.io/guide/form-validation#built-in-validator-functions).## Validation service APIThe grid exposes a validation service via the [`validation`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridComponent.html#validation) property.That service has the following public APIs:- [`valid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridValidationService.html#valid) - returns if the grid validation state is valid.- [`getInvalid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridValidationService.html#getInvalid) - returns records with invalid states.- [`clear`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridValidationService.html#clear) - clears state for record by id or clears all state if no id is provided.- [`markAsTouched`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridValidationService.html#markAsTouched) - marks the related record/field as touched.Invalid states will persist until the validation errors in them are fixed according to the validation rule or they are cleared.## Validation triggersValidation will be triggered in the following scenarios:- While editing via the cell editor based on the grid's [`validationTrigger`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridComponent.html#validationTrigger). Either on `change` while typing in the editor, or on `blur` when the editor loses focus or closes.- When updating cells/rows via the API - [`updateRow`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridComponent.html#updateRow), [`updateCell`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridComponent.html#updateCell) etc..- When using batch editing and the [`undo`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxTransactionService.html#undo)/[`redo`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxTransactionService.html#redo) API of the transaction service.> Note: Validation will not trigger for records that have not been edited via user input or via the editing API. Visual indicators on the cell will only shown if the related input is considered touched - either via user interaction or via the `markAsTouched` API of the validation service.## Angular Hierarchical Grid Validation Customization Options### Set a custom validatorYou can define your own validation directive to use on a `<igx-column>` in the template.```ts@Directive({
    selector: '[phoneFormat]',
    providers: [{ provide: NG_VALIDATORS, useExisting: PhoneFormatDirective, multi: true }]})export class PhoneFormatDirective extends Validators {
    @Input('phoneFormat')
    public phoneFormatString = '';

    public validate(control: AbstractControl): ValidationErrors | null {
        return this.phoneFormatString ? phoneFormatValidator(new RegExp(this.phoneFormatString, 'i'))(control)
            : null;
    }}```Once it is defined and added in your app module you can set it declaratively to a given column in the grid:```html<igx-column phoneFormat="\+\d{1}\-(?!0)(\d{3})\-(\d{3})\-(\d{4})\b" ...>```### Change default error templateYou can define your own custom error template that will be displayed in the error tooltip when the cell enters invalid state.This is useful in scenarios where you want to add your own custom error message or otherwise change the look or content of the message.```html<igx-column ... >
  <ng-template igxCellValidationError let-cell='cell' let-defaultErr="defaultErrorTemplate">
      <ng-container *ngTemplateOutlet="defaultErr">
      </ng-container>
      <div *ngIf="cell.validation.errors?.['phoneFormat']">
        Please enter correct phone format
      </div>
  </ng-template></igx-column>```### Prevent exiting edit mode on invalid stateIn some cases you may want to disallow submitting an invalid value in the data.In that scenarios you can use the [`cellEdit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridComponent.html#cellEdit) or [`rowEdit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridComponent.html#rowEdit) events and cancel the event in case the new value is invalid.Both events' arguments have a [`valid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/IGridEditEventArgs.html#valid) property and can be canceled accordingly. How it is used can be seen in the [Cross-field Validation example](#cross-field-example)```html<igx-hierarchical-grid (cellEdit)='cellEdit($event)' ...>``````tspublic cellEdit(evt) {
  if (!evt.valid) {
    evt.cancel = true;
  }}```### ExampleThe below example demonstrates the above-mentioned customization options.```typescript
import { Component, Directive, Input, ViewChild } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IGridFormGroupCreatedEventArgs, IgxCellValidationErrorDirective, IgxColumnComponent, IgxColumnRequiredValidatorDirective, IgxGridToolbarComponent, IgxGridToolbarDirective } from 'igniteui-angular/grids/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { CUSTOMERS } from '../../data/hierarchical-data';
import { NgTemplateOutlet } from '@angular/common';

export function phoneFormatValidator(phoneReg: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const match = phoneReg.test(control.value);
        return match ? null : { phoneFormat: { value: control.value } } ;
    }
}

@Directive({
    selector: '[phoneFormat]',
    providers: [{ provide: NG_VALIDATORS, useExisting: HGridPhoneFormatDirective, multi: true }]
})
export class HGridPhoneFormatDirective extends Validators {
    @Input('phoneFormat')
    public phoneFormatString = '';

    public validate(control: AbstractControl): ValidationErrors | null {
        return this.phoneFormatString ? phoneFormatValidator(new RegExp(this.phoneFormatString, 'i'))(control)
            : null;
    }
}

export function unique(value, index, self) {
    return self.findIndex(v => v.CustomerID === value.CustomerID) === index;
}

@Component({
    selector: 'app-hierarchical-grid-validator-service-extended',
    styleUrls: ['./hierarchical-grid-validator-service-extended.component.scss'],
    templateUrl: './hierarchical-grid-validator-service-extended.component.html',
    imports: [IgxHierarchicalGridComponent, IgxColumnComponent, IgxColumnRequiredValidatorDirective, HGridPhoneFormatDirective, IgxCellValidationErrorDirective, NgTemplateOutlet, IgxRowIslandComponent, IgxGridToolbarDirective, IgxGridToolbarComponent, IgxButtonDirective]
})
export class HierarchicalGridValidatorServiceExtendedComponent {

    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;
    @ViewChild('childGrid', { static: true })
    private childGrid: IgxRowIslandComponent;

    public data = CUSTOMERS.filter(unique);

    public formCreateHandler(formGroupArgs: IGridFormGroupCreatedEventArgs) {
        const orderDateRecord = formGroupArgs.formGroup.get('OrderDate');
        const requiredDateRecord = formGroupArgs.formGroup.get('RequiredDate');
        const shippedDateRecord = formGroupArgs.formGroup.get('ShippedDate');

        orderDateRecord?.addValidators(this.futureDateValidator());
        requiredDateRecord?.addValidators([this.futureDateValidator(), this.pastDateValidator()]);
        shippedDateRecord?.addValidators([this.futureDateValidator(), this.pastDateValidator()]);
    }

    public get hasTransactions(): boolean {
        return this.hierarchicalGrid.transactions.getAggregatedChanges(false).length > 0 || this.hasChildTransactions;
    }

    public get hasChildTransactions(): boolean {
         return this.childGrid.gridAPI.getChildGrids()
             .find(c => c.transactions.getAggregatedChanges(false).length > 0) !== undefined;
    }

    public commit() {
        const invalidParentTransactions = this.hierarchicalGrid.validation.getInvalid();
        let invalidChildTransactions = [];
        this.childGrid.gridAPI.getChildGrids().forEach((grid) => {
            invalidChildTransactions = [... invalidChildTransactions, ...grid.validation.getInvalid()];
        });
        const invalidTransactions = [...invalidParentTransactions, ...invalidChildTransactions];
        if (invalidTransactions.length > 0 && !confirm('You\'re committing invalid transactions. Are you sure?')) {
            return;
        }

        this.hierarchicalGrid.transactions.commit(this.data);
        this.childGrid.gridAPI.getChildGrids().forEach((grid) => {
            grid.transactions.commit(grid.data);
            grid.validation.clear();
        });
        this.hierarchicalGrid.validation.clear();
    }

    public undo(grid: any) {
        /* exit edit mode and commit changes */
        grid.endEdit(true);
        grid.transactions.undo();
    }

    public redo(grid: any) {
        /* exit edit mode and commit changes */
        grid.endEdit(true);
        grid.transactions.redo();
    }

    public futureDateValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const date = control.value;
            if(date > new Date()){
                return { futureDate: { value: control.value } };
            }
            return null;
        }
    }

    public pastDateValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const date = control.value;
            let pastDate = new Date('Nov 5 2010');
            if(pastDate){
                return pastDate < date ? null : { pastDate: { value: control.value } }
            } else return null;
        }
    }

}
```
```html
<div class="grid-wrapper">
  <igx-hierarchical-grid #hierarchicalGrid [height]="'570px'" [width]="'100%'" [data]="data"
    [primaryKey]="'CustomerID'" [batchEditing]="true" [rowEditable]="true"
    (formGroupCreated)="formCreateHandler($event)">
    <igx-column field="CustomerID" [editable]="false"></igx-column>
    <igx-column field="CompanyName" [editable]="true" required></igx-column>
    <igx-column field="ContactName" [editable]="true" required></igx-column>
    <igx-column field="ContactTitle" [editable]="true" required></igx-column>
    <igx-column field="Phone" [editable]="true" required phoneFormat="^[^a-zA-Z]*$">
      <ng-template igxCellValidationError let-cell='cell' let-defaultErr="defaultErrorTemplate">
        <ng-container *ngTemplateOutlet="defaultErr">
        </ng-container>
        @if (cell.validation.errors?.['phoneFormat']) {
          <div>
            Please enter correct phone format
          </div>
        }
      </ng-template>
    </igx-column>
    <igx-column field="Fax" [editable]="true"></igx-column>

    <igx-row-island #childGrid [height]="null" [key]="'Orders'" [primaryKey]="'OrderID'" [autoGenerate]="false"
      [batchEditing]="true" [rowEditable]="true" (formGroupCreated)="formCreateHandler($event)">
      <igx-grid-toolbar *igxGridToolbar="let grid">
        <button igxButton [disabled]="!grid.transactions.canUndo" (click)="undo(grid)">Undo</button>
        <button igxButton [disabled]="!grid.transactions.canRedo" (click)="redo(grid)">Redo</button>
      </igx-grid-toolbar>
      <igx-column [editable]="false" field="OrderID"></igx-column>
      <igx-column [editable]="true" field="EmployeeID" [editable]="true" required></igx-column>
      <igx-column [editable]="true" field="OrderDate" [dataType]="'date'" [editable]="true" required>
        <ng-template igxCellValidationError let-cell='cell' let-defaultErr="defaultErrorTemplate">
          <ng-container *ngTemplateOutlet="defaultErr">
          </ng-container>
          @if (cell.validation.errors?.['futureDate']) {
            <div>
              The date cannot be in the future.
            </div>
          }
        </ng-template>
      </igx-column>
      <igx-column [editable]="true" field="RequiredDate" [dataType]="'date'" [editable]="true" required>
        <ng-template igxCellValidationError let-cell='cell' let-defaultErr="defaultErrorTemplate">
          <ng-container *ngTemplateOutlet="defaultErr">
          </ng-container>
          @if (cell.validation.errors?.['futureDate']) {
            <div>
              The date cannot be in the future.
            </div>
          }
          @if (cell.validation.errors?.['pastDate']) {
            <div>
              The date cannot be before the 5th of November 2010
            </div>
          }
        </ng-template>
      </igx-column>
      <igx-column field="ShippedDate" [dataType]="'date'" [editable]="true">
        <ng-template igxCellValidationError let-cell='cell' let-defaultErr="defaultErrorTemplate">
          <ng-container *ngTemplateOutlet="defaultErr">
          </ng-container>
          @if (cell.validation.errors?.['futureDate']) {
            <div>
              The date cannot be in the future.
            </div>
          }
          @if (cell.validation.errors?.['pastDate']) {
            <div>
              The date cannot be before the 5th of November 2010
            </div>
          }
        </ng-template>
      </igx-column>
      <igx-column field="ShipVia" [selectable]="false" [editable]="true"></igx-column>
      <igx-column field="Freight" [selectable]="false" [editable]="true"></igx-column>
    </igx-row-island>
  </igx-hierarchical-grid>

  <div class="buttons-wrapper">
    <button igxButton [disabled]="!hierarchicalGrid.transactions.canUndo" (click)="undo(hierarchicalGrid)">Undo</button>
    <button igxButton [disabled]="!hierarchicalGrid.transactions.canRedo" (click)="redo(hierarchicalGrid)">Redo</button>
    <button igxButton [disabled]="!hasTransactions" (click)="commit()">Commit</button>
  </div>
</div>
```
```scss
.top-row, .grid-wrapper {
    padding: 16px;
}

.buttons-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: left;
    padding: 10px 0;
}
```<div class="divider--half"></div>## Cross-field validationIn some scenarios validation of one field may depend on the value of another field in the record.In that case a custom validator can be used to compare the values in the record via their shared `FormGroup`.





  Cross-field validators can be added to the formGroup on the [`formGroupCreated`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridComponent.html#formGroupCreated) event. In them multiple fields can be compared for validity.

  ```ts
  public formCreateCustomerHandler(event: IGridFormGroupCreatedEventArgs) {
        const formGroup = event.formGroup;
        formGroup.addValidators(this.addressValidator());
    }

    public formCreateOrderHandler(event: IGridFormGroupCreatedEventArgs) {
        const formGroup = event.formGroup;
        formGroup.addValidators(this.dateValidator());
    }

    public addressValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const formGroup = control;
            let returnObject = {};
            const city = formGroup.get('City');
            const country = formGroup.get('Country');
            const validCities = this.countryData.get(country.value);
            if (!validCities || !validCities[city.value]) {
                returnObject['invalidAddress'] = true;
            }
            return returnObject;
        }
    }

    public dateValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const formGroup = control;
            let returnObject = {};
            const orderDate = formGroup.get('OrderDate').value;
            const shippedDate = formGroup.get('ShippedDate').value;
            if (new Date(shippedDate) < new Date(orderDate)) {
                returnObject['invalidRange'] = true;
            }
            return returnObject;
        }
    }
  ```The multi-field errors can then be displayed in a separate pinned column.```html<igx-column field="row_valid" header=" " [editable]="false" [dataType]="'number'" [pinned]="true" [width]="'50px'">
        <ng-template igxCell let-cell="cell">
            <div *ngIf="isRowValid(cell)" [igxTooltipTarget]="tooltipRef"
            >
                <img width="18" src="assets/images/grid/active.png"/>
            </div>
            <div *ngIf="!isRowValid(cell)" [igxTooltipTarget]="tooltipRef"
            >
                <img width="18" src="assets/images/grid/expired.png"/>
            </div>
            <div #tooltipRef="tooltip" igxTooltip [style.width]="'max-content'">
               <div *ngFor="let message of stateMessage(cell)">
                   {{message}}
               </div>
            </div>
        </ng-template>
    </igx-column>```Errors and the detailed messages can be determined based on the row and cell's validity.```ts
    public isRowValid(cell: CellType) {
        const hasErrors = !!cell.row.validation.errors || cell.row.cells.some(x => !!x.validation.errors);
        return !hasErrors;
    }

    public stateMessage(cell: CellType) {
        const messages = [];
        const row = cell.row;
        if  (row.validation.errors?.invalidAddress) {
            messages.push('The address information is invalid. City does not match the Country.');
        }
        if  (row.validation.errors?.invalidRange) {
            messages.push('The ShippedDate cannot be before the OrderDate.');
        }
        const cellValidationErrors = row.cells.filter(x => !!x.validation.errors);
        if (cellValidationErrors && cellValidationErrors.length > 0) {
            const fields = cellValidationErrors.map(x => x.column.field).join(',');
            messages.push('The following fields are required: ' + fields);
        }

        if (messages.length === 0) {
            // no errors
            return ['Valid'];
        }
        return messages;
    }```### Cross-field exampleThe below sample demonstrates cross-field validation in a Hierarchical Grid for both the root and child data.```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CellType, IGridEditEventArgs, IGridFormGroupCreatedEventArgs, IgxCellEditorTemplateDirective, IgxCellTemplateDirective, IgxColumnComponent, IgxColumnRequiredValidatorDirective, IgxGridToolbarComponent, IgxGridToolbarDirective } from 'igniteui-angular/grids/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxButtonDirective, IgxFocusDirective, IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular/directives';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { CUSTOMERS } from '../../data/hierarchical-data';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'hierarchical-grid-cross-field-validation',
    styleUrls: ['./hierarchical-grid-cross-field-validation.component.scss'],
    templateUrl: 'hierarchical-grid-cross-field-validation.component.html',
    imports: [IgxSwitchComponent, FormsModule, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxTooltipTargetDirective, IgxTooltipDirective, IgxColumnRequiredValidatorDirective, IgxCellEditorTemplateDirective, IgxSelectComponent, ReactiveFormsModule, IgxFocusDirective, IgxSelectItemComponent, IgxRowIslandComponent, IgxGridToolbarDirective, IgxGridToolbarComponent, IgxButtonDirective]
})

export class HierarchicalGridValidatorServiceCrossCellComponent implements OnInit {
    public rowEdit: boolean = true;
    public localdata;
    public countryData: Map<string, object>;
    public countries = [];
    public cities = [];

    @ViewChild('hierarchicalGrid', { read: IgxHierarchicalGridComponent })
    public grid: IgxHierarchicalGridComponent;

    constructor() {

    }
    public ngOnInit(): void {
        this.localdata = CUSTOMERS.filter((rec, index, arr) => arr.findIndex(x => x.CustomerID === rec.CustomerID) === index);
        this.countryData = new Map(this.localdata.map(i => [i.Country, {}]));
        this.localdata.forEach(rec => {
            const country = rec.Country;
            const city = rec.City;
            this.countryData.get(country)[city] = city;
        });
        this.countries = [...new Set(this.localdata.map(x => x.Country))];
        this.cities = [...new Set(this.localdata.map(x => x.City))];
    }

    public editHandler(event: IGridEditEventArgs) {
        if (!event.valid) {
            event.cancel = true;
        }
    }

    public formCreateCustomerHandler(event: IGridFormGroupCreatedEventArgs) {
        const formGroup = event.formGroup;
        formGroup.addValidators(this.addressValidator());
    }

    public formCreateOrderHandler(event: IGridFormGroupCreatedEventArgs) {
        const formGroup = event.formGroup;
        formGroup.addValidators(this.dateValidator());
    }

    public addressValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const formGroup = control;
            let returnObject = {};
            const city = formGroup.get('City');
            const country = formGroup.get('Country');
            const validCities = this.countryData.get(country.value);
            if (!validCities || !validCities[city.value]) {
                returnObject['invalidAddress'] = true;
            }
            return returnObject;
        }
    }

    public dateValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const formGroup = control;
            let returnObject = {};
            const orderDate = formGroup.get('OrderDate').value;
            const shippedDate = formGroup.get('ShippedDate').value;
            if (new Date(shippedDate) < new Date(orderDate)) {
                returnObject['invalidRange'] = true;
            }
            return returnObject;
        }
    }

    public isRowValid(cell: CellType) {
        const hasErrors = !!cell.row.validation.errors || cell.row.cells.some(x => !!x.validation.errors);
        return !hasErrors;
    }

    public stateMessage(cell: CellType) {
        const messages = [];
        const row = cell.row;
        if (row.validation.errors?.invalidAddress) {
            messages.push('The address information is invalid. City does not match the Country.');
        }
        if (row.validation.errors?.invalidRange) {
            messages.push('The ShippedDate cannot be before the OrderDate.');
        }
        const cellValidationErrors = row.cells.filter(x => !!x.validation.errors);
        if (cellValidationErrors && cellValidationErrors.length > 0) {
            const fields = cellValidationErrors.map(x => x.column.field).join(',');
            messages.push('The following fields are required: ' + fields);
        }

        if (messages.length === 0) {
            // no errors
            return ['Valid'];
        }
        return messages;
    }

    public commit(grid: any) {
        const hGrid = grid as IgxHierarchicalGridComponent;
        const invalidTransactions = hGrid.validation.getInvalid();
        if (invalidTransactions.length > 0 && !confirm('You\'re commiting invalid transactions. Are you sure?')) {
            return;
        }

        hGrid.transactions.commit(hGrid.data);
        hGrid.validation.clear();
    }
}
```
```html
<div class="top-row">
  <igx-switch [(ngModel)]="rowEdit">Row edit</igx-switch>
</div>
<div class="grid__wrapper">
  <igx-hierarchical-grid  [igxPreventDocumentScroll]="true" [primaryKey]="'CustomerID'" [rowEditable]="rowEdit" [batchEditing]="true"
    #hierarchicalGrid [data]="localdata" [height]="'500px'" [width]="'100%'"
    (formGroupCreated)="formCreateCustomerHandler($event)" (cellEdit)="editHandler($event)" (rowEdit)="editHandler($event)">
    <igx-column field="row_valid" header=" " [editable]="false" [dataType]="'number'" [pinned]="true" [width]="'50px'">
      <ng-template igxCell let-cell="cell">
        @if (isRowValid(cell)) {
          <div [igxTooltipTarget]="tooltipRef">
            <img width="18" src="assets/images/grid/active.png"/>
          </div>
        }
        @if (!isRowValid(cell)) {
          <div [igxTooltipTarget]="tooltipRef">
            <img width="18" src="assets/images/grid/expired.png"/>
          </div>
        }
        <div #tooltipRef="tooltip" igxTooltip [style.width]="'max-content'">
          @for (message of stateMessage(cell); track message) {
            <div>
              {{message}}
            </div>
          }
        </div>
      </ng-template>
    </igx-column>
    <igx-column field="CustomerID" [hidden]="true"></igx-column>
    <igx-column field="ContactName" [editable]="true" required></igx-column>
    <igx-column field="ContactTitle"  [editable]="true" required></igx-column>
    <igx-column field="City"  [editable]="true">
      <ng-template igxCellEditor let-cell="cell" let-value let-fc='formControl'>
        <igx-select [formControl]="fc" [igxFocus]="true">
          @for (city of cities; track city) {
            <igx-select-item [value]="city">
              {{ city }}
            </igx-select-item>
          }
        </igx-select>
      </ng-template>
    </igx-column>
    <igx-column field="Country"  [editable]="true">
      <ng-template igxCellEditor let-cell="cell" let-value let-fc='formControl'>
        <igx-select  [formControl]="fc" [igxFocus]="true">
          @for (country of countries; track country) {
            <igx-select-item [value]="country">
              {{ country }}
            </igx-select-item>
          }
        </igx-select>
      </ng-template>
    </igx-column>

    <igx-column field="PostalCode"  [editable]="true" required></igx-column>
    <igx-column field="Phone"  [editable]="true" required></igx-column>
    <igx-row-island [primaryKey]="'OrderID'" [height]="null" [key]="'Orders'" [autoGenerate]="false" [rowEditable]="rowEdit"
      (formGroupCreated)='formCreateOrderHandler($event)' (cellEdit)="editHandler($event)" (rowEdit)="editHandler($event)">
      <igx-grid-toolbar *igxGridToolbar="let grid">
        <button igxButton [disabled]="grid.transactions.getAggregatedChanges(false).length < 1" (click)="commit(grid)">Commit</button>
      </igx-grid-toolbar>
      <igx-column field="OrderID" [hidden]="true"></igx-column>
      <igx-column field="EmployeeID" [hidden]="true"></igx-column>
      <igx-column field="row_valid" header=" " [editable]="false" [dataType]="'number'" [pinned]="true" [width]="'50px'">
        <ng-template igxCell let-cell="cell">
          @if (isRowValid(cell)) {
            <div [igxTooltipTarget]="tooltipRef">
              <img width="18" src="assets/images/grid/active.png"/>
            </div>
          }
          @if (!isRowValid(cell)) {
            <div [igxTooltipTarget]="tooltipRef">
              <img width="18" src="assets/images/grid/expired.png"/>
            </div>
          }
          <div #tooltipRef="tooltip" igxTooltip [style.width]="'max-content'">
            @for (message of stateMessage(cell); track message) {
              <div>
                {{message}}
              </div>
            }
          </div>
        </ng-template>
      </igx-column>
      <igx-column field="OrderDate" [dataType]="'date'" [editable]="true" required></igx-column>
      <igx-column field="ShippedDate" [dataType]="'date'" [editable]="true" required></igx-column>
      <igx-column field="ShipVia" [editable]="true" required></igx-column>
      <igx-column field="Freight" [editable]="true" required></igx-column>
      <igx-column field="ShipName" [editable]="true" required></igx-column>
    </igx-row-island>
  </igx-hierarchical-grid>
  <div class="buttons-wrapper">
    <button igxButton [disabled]="hierarchicalGrid.transactions.getAggregatedChanges(false).length < 1" (click)="commit(hierarchicalGrid)">Commit</button>
  </div>
</div>
```
```scss
.grid__wrapper {
    --ig-size: var(--ig-size-small);
}

.top-row,
.grid__wrapper {
    padding: 16px;
    padding-bottom: 0;
}


.buttons-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 10px 0;
}
```<div class="divider--half"></div>## StylingUsing the [Ignite UI for Angular Theme Library](../themes/index.md), we can alter the default validation styles while editing.In the example below, we will make use of the exposed template for validation message, which pops out in a tooltip and overriding the error color to modify the default looks of the validation.We will also style the background of the invalid rows to make them more distinct.### Import themeThe easiest way to style and access css variables is to define styles in our `app`'s global style file (typically `styles.scss`).The first thing we need to do is import the `themes/index` file - this gives us access to all the powerful tools of the Ignite UI for Angular Sass framework:```scss@use "igniteui-angular/theming" as *;// IMPORTANT: Prior to Ignite UI for Angular version 13 use:// @import '~igniteui-angular/lib/core/styles/themes/index';```### Include the stylesIn order to change the error color you can use the css variable `--ig-error-500`:```scss--ig-error-500: 34, 80%, 63%;```### Custom TemplatesChanging the default error template allows setting custom classes and styles:```html<ng-template igxCellValidationError let-cell='cell' let-defaultErr='defaultErrorTemplate'>
  <div class="validator-container">
    <ng-container *ngTemplateOutlet="defaultErr">
    </ng-container>
  </div></ng-template>```### Invalid row and cell stylesRows and cells provide API for the developers to know if a row or cell is invalid and what kind of errors are active.```tspublic rowStyles = {
    background: (row: RowType) => row.validation.status === 'INVALID' ? '#FF000033' : '#00000000'};public cellStyles = {
  'invalid-cell': (rowData, columnKey) => {
    let cell = this.hierarchicalGrid.getCellByKey(rowData, columnKey);
    // search in child grids
    if (!cell) {
      for (let grid of this.childGrid.gridAPI.getChildGrids()) {
        cell = grid.getCellByKey(rowData, columnKey);
        if (cell) break;
      }
    }
    return cell && cell.validation.status === 'INVALID';
  }}``````html<igx-hierarchical-grid [rowStyles]="rowStyles">
  <igx-column field="Artist" [editable]="true" [dataType]="'string'" required [cellClasses]="cellStyles">
  ...
  <igx-row-island [key]="'Albums'" [rowStyles]="rowStyles">
    <igx-column field="Album" [editable]="true" [dataType]="'string'" required [cellClasses]="cellStyles">```### Demo```typescript
import { Component, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellValidationErrorDirective, IgxColumnComponent, IgxColumnRequiredValidatorDirective, RowType } from 'igniteui-angular/grids/core';
import { SINGERS } from '../../data/singersData';
import { Singer } from '../models';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'app-hierarchical-grid-validation-style',
    styleUrls: ['./hierarchical-grid-validation-style.component.scss'],
    templateUrl: 'hierarchical-grid-validation-style.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxColumnRequiredValidatorDirective, IgxCellValidationErrorDirective, NgTemplateOutlet, IgxRowIslandComponent]
})
export class HGridValidationStyleComponent {
    @ViewChild('hierarchicalGrid', { read: IgxHierarchicalGridComponent, static: true }) public hierarchicalGrid: IgxHierarchicalGridComponent;
    @ViewChild('childGrid', { static: true }) private childGrid: IgxRowIslandComponent;
    public localData: Singer[];
    public rowStyles = {
        background: (row: RowType) => row.validation.status === 'INVALID' ? '#FF000033' : '#00000000'
    };
    public cellStyles = {
        'invalid-cell': (rowData, columnKey) => {
            let cell = this.hierarchicalGrid.getCellByKey(rowData, columnKey);
            // search in child grids
            if (!cell) {
                for (let grid of this.childGrid.gridAPI.getChildGrids()) {
                    cell = (grid as IgxGridComponent).getCellByKey(rowData, columnKey);
                    if (cell) break;
                }
            }
            return cell && cell.validation.status === 'INVALID';
        }
    }

    constructor() {
        this.localData = SINGERS;
    }

    public formatter = (a) => a;
}
```
```html
<div class="grid__wrapper">
<igx-hierarchical-grid [igxPreventDocumentScroll]="true"  #hierarchicalGrid class="hgrid" [data]="localData" [autoGenerate]="false" [height]="'600px'"
    [width]="'100%'" [rowStyles]="rowStyles">
    <igx-column field="Artist" [editable]="true" [dataType]="'string'" required [cellClasses]="cellStyles">
        <ng-template igxCellValidationError let-cell='cell' let-defaultErr='defaultErrorTemplate'>
            <div class="validator-container">
                <ng-container *ngTemplateOutlet="defaultErr">
                </ng-container>
            </div>
        </ng-template>
    </igx-column>
    <igx-column field="HasGrammyAward" header="Has Grammy Award?" [editable]="true" [dataType]="'boolean'">
    </igx-column>
    <igx-column field="Debut" [editable]="true" dataType="number" [formatter]="formatter"></igx-column>
    <igx-column field="GrammyNominations" header="Grammy Nominations" [editable]="true" dataType="number"></igx-column>
    <igx-column field="GrammyAwards" header="Grammy Awards" [editable]="true" dataType="number"></igx-column>
    <igx-row-island #childGrid [height]="null" [key]="'Albums'" [autoGenerate]="false" [rowStyles]="rowStyles">
        <igx-column field="Album" [editable]="true" [dataType]="'string'" required [cellClasses]="cellStyles">
            <ng-template igxCellValidationError let-cell='cell' let-defaultErr='defaultErrorTemplate'>
                <div class="validator-container">
                    <ng-container *ngTemplateOutlet="defaultErr">
                    </ng-container>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="LaunchDate" header="Launch Date" [editable]="true" [dataType]="'date'" required [cellClasses]="cellStyles">
            <ng-template igxCellValidationError let-cell='cell' let-defaultErr='defaultErrorTemplate'>
                <div class="validator-container">
                    <ng-container *ngTemplateOutlet="defaultErr">
                    </ng-container>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="BillboardReview" header="Billboard Review" [editable]="true" dataType="number" required [cellClasses]="cellStyles">
            <ng-template igxCellValidationError let-cell='cell' let-defaultErr='defaultErrorTemplate'>
                <div class="validator-container">
                    <ng-container *ngTemplateOutlet="defaultErr">
                    </ng-container>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="USBillboard200" header="US Billboard 200" [editable]="true" dataType="number"></igx-column>
    </igx-row-island>
</igx-hierarchical-grid>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

igx-hierarchical-grid {
  --ig-error-500: 34deg, 80%, 63%;
}
```<div class="divider--half"></div>## API References- [IgxBaseTransactionService](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbasetransactionservice.html)- [IgxGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)- [IgxColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)## Known Issues and Limitations|Limitation|Description|| --- | --- || When `validationTrigger` is blur, `editValue` and validation will trigger only after editor is blurred. | Reason is that this utilizes the formControl's [`updateOn`](https://angular.io/api/forms/AbstractControl#updateOn) property. This determines the event on which the formControl will update and trigger related validators. |## Additional Resources- [Build CRUD operations with igxGrid](../general/how-to/how-to-perform-crud.md)- [Hierarchical Grid Overview](hierarchical-grid.md)- [Hierarchical Grid Editing](editing.md)- [Hierarchical Grid Row Editing](row-editing.md)- [Hierarchical Grid Row Adding](row-adding.md)- [Hierarchical Grid Transactions](batch-editing.md)<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
