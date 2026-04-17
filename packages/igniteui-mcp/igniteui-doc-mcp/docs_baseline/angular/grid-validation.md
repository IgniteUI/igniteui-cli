---
_tocName: Validation
_premium: true
---
---title: Editing and Validation in Angular Grid - Infragistics_description: Validate the input of the users in grid and notify them if it's valid or not while using Angular Grid. See demos & examples!_keywords: angular validation, ignite ui for angular, infragistics_license: commercial---# Angular Grid Editing and ValidationThe Grid's editing exposes a built-in validation mechanism of user input when editing cells/rows. It extends the [Angular Form validation](https://angular.io/guide/form-validation) functionality to allow easier integration with a well known functionality. When the state of the editor changes, visual indicators are applied to the edited cell.## Configuration### Configure via template-driven configurationWe extend some of the Angular Forms validator directives to directly work with the `IgxColumn`. The same validators are available as attributes to be set declaratively in `igx-column`. The following validators are supported out-of-the-box:- required- min- max- email- minlength- maxlength- patternTo validate that a column input would be set and the value is going to be formatted as an email, you can use the related directives:```html<igx-column [field]="email" [header]="User E-mail" required email></igx-column>```The following sample demonstrates how to use the prebuilt `required`, `email` and `min` validator directives in a Grid.```typescript
import { Component } from '@angular/core';
import { employeesData } from '../../data/employeesData';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxColumnEmailValidatorDirective, IgxColumnMinValidatorDirective, IgxColumnRequiredValidatorDirective } from 'igniteui-angular/grids/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-grid-validator-service',
    styleUrls: ['./grid-validator-service.component.scss'],
    templateUrl: './grid-validator-service.component.html',
    imports: [IgxSwitchComponent, FormsModule, IgxGridComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxAvatarComponent, IgxColumnRequiredValidatorDirective, IgxColumnEmailValidatorDirective, IgxColumnMinValidatorDirective, DatePipe]
})
export class GridValidatorServiceComponent {
    public data: any[];
    public employeesData: any[];
    public rowEdit: boolean = true;

    constructor() {
        this.data = employeesData;
    }
}
```
```html
<div class="top-row">
    <igx-switch [(ngModel)]="rowEdit">Row edit</igx-switch>
</div>
<div class="grid-wrapper">
    <igx-grid #grid1 [data]="data" [width]="'100%'" [height]="'480px'" [autoGenerate]="false" [batchEditing]="true"
        [rowEditable]="rowEdit" [primaryKey]="'id'">
        <igx-column field="Avatar" header="Photo" dataType="string" width="80" [editable]="false">
            <ng-template igxCell let-cell="cell">
                <div>
                    <igx-avatar [src]="cell.row.data.avatar" shape="circle" size="small"></igx-avatar>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="name" header="Name" [editable]="true" required></igx-column>
        <igx-column field="company" header="Company" [editable]="true"></igx-column>
        <igx-column field="email" width="190" header="Email" [editable]="true" required email></igx-column>
        <igx-column field="fax" header="Phone" [editable]="true"></igx-column>
        <igx-column field="created_on" header="Date of Registration" width="170" [editable]="true"
            [dataType]="'date'" required>
            <ng-template igxCell let-cell>
                {{ cell | date: 'longDate' }}
            </ng-template>
        </igx-column>
        <igx-column field="last_activity" header="Last Active" width="170" [editable]="true" [dataType]="'date'"
            required>
            <ng-template igxCell let-cell>
                {{ cell | date: 'longDate' }}
            </ng-template>
        </igx-column>
        <igx-column field="estimated_sales" header="Estimated Sales" [editable]="true" [dataType]="'number'" required min="0"></igx-column>
        <igx-column field="deals_lost" header="Deals Lost" [editable]="true" [dataType]="'number'" required min="0">
        </igx-column>
        <igx-column field="deals_won" header="Deals Won" [editable]="true" [dataType]="'number'" required min="0">
        </igx-column>
        <igx-column field="deals_pending" header="Deals Pending" [editable]="true" [dataType]="'number'" required
            min="0"></igx-column>
    </igx-grid>
</div>
```
```scss
.top-row,
.grid-wrapper {
    padding: 16px;
}

.grid-wrapper {
    margin: 0 auto;
    padding: 16px;
}
```<div class="divider--half"></div>### Configure via reactive formsWe expose the `FormGroup` that will be used for validation when editing starts on a row/cell via a `formGroupCreated` event. You can modify it by adding your own validators for the related fields:```html<igx-grid (formGroupCreated)='formCreateHandler($event)' ...>```@@if (igxName === 'IgxGrid' || igxName === 'IgxHierarchicalGrid') {```ts
    public formCreateHandler(args: IGridFormGroupCreatedEventArgs) {
        const formGroup = args.formGroup;
        const orderDateRecord = formGroup.get('OrderDate');
        const requiredDateRecord = formGroup.get('RequiredDate');
        const shippedDateRecord = formGroup.get('ShippedDate');

        orderDateRecord.addValidators(this.futureDateValidator());
        requiredDateRecord.addValidators(this.pastDateValidator());
        shippedDateRecord.addValidators(this.pastDateValidator());
    }```}You can decide to write your own validator function, or use one of the [built-in Angular validator functions](https://angular.io/guide/form-validation#built-in-validator-functions).## Validation service APIThe grid exposes a validation service via the [`validation`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridComponent.html#validation) property.That service has the following public APIs:- [`valid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridValidationService.html#valid) - returns if the grid validation state is valid.- [`getInvalid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridValidationService.html#getInvalid) - returns records with invalid states.- [`clear`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridValidationService.html#clear) - clears state for record by id or clears all state if no id is provided.- [`markAsTouched`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridValidationService.html#markAsTouched) - marks the related record/field as touched.Invalid states will persist until the validation errors in them are fixed according to the validation rule or they are cleared.## Validation triggersValidation will be triggered in the following scenarios:- While editing via the cell editor based on the grid's [`validationTrigger`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridComponent.html#validationTrigger). Either on `change` while typing in the editor, or on `blur` when the editor loses focus or closes.- When updating cells/rows via the API - [`updateRow`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridComponent.html#updateRow), [`updateCell`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridComponent.html#updateCell) etc..- When using batch editing and the [`undo`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxTransactionService.html#undo)/[`redo`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxTransactionService.html#redo) API of the transaction service.> Note: Validation will not trigger for records that have not been edited via user input or via the editing API. Visual indicators on the cell will only shown if the related input is considered touched - either via user interaction or via the `markAsTouched` API of the validation service.## Angular Grid Validation Customization Options### Set a custom validatorYou can define your own validation directive to use on a `<igx-column>` in the template.```ts@Directive({
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
  </ng-template></igx-column>```### Prevent exiting edit mode on invalid stateIn some cases you may want to disallow submitting an invalid value in the data.In that scenarios you can use the [`cellEdit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridComponent.html#cellEdit) or [`rowEdit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridComponent.html#rowEdit) events and cancel the event in case the new value is invalid.Both events' arguments have a [`valid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/IGridEditEventArgs.html#valid) property and can be canceled accordingly. How it is used can be seen in the [Cross-field Validation example](#cross-field-example)```html<igx-grid (cellEdit)='cellEdit($event)' ...>``````tspublic cellEdit(evt) {
  if (!evt.valid) {
    evt.cancel = true;
  }}```### ExampleThe below example demonstrates the above-mentioned customization options.```typescript
import { Component, Directive, Input, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IGridFormGroupCreatedEventArgs, IgxCellTemplateDirective, IgxCellValidationErrorDirective, IgxColumnComponent, IgxColumnEmailValidatorDirective, IgxColumnMinValidatorDirective, IgxColumnRequiredValidatorDirective } from 'igniteui-angular/grids/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { employeesData } from '../../data/employeesData';
import { NgTemplateOutlet, DatePipe } from '@angular/common';

export function phoneFormatValidator(phoneReg: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const match = phoneReg.test(control.value);
        return match ? null : { phoneFormat: { value: control.value } } ;
    }
}

@Directive({
    selector: '[phoneFormat]',
    providers: [{ provide: NG_VALIDATORS, useExisting: PhoneFormatDirective, multi: true }]
})
export class PhoneFormatDirective extends Validators {
    @Input('phoneFormat')
    public phoneFormatString = '';

    public validate(control: AbstractControl): ValidationErrors | null {
        return this.phoneFormatString ? phoneFormatValidator(new RegExp(this.phoneFormatString, 'i'))(control)
            : null;
    }
}

@Component({
    selector: 'app-grid-validator-service-extended',
    styleUrls: ['./grid-validator-service-extended.component.scss'],
    templateUrl: './grid-validator-service-extended.component.html',
    imports: [IgxGridComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxAvatarComponent, IgxColumnRequiredValidatorDirective, IgxColumnEmailValidatorDirective, PhoneFormatDirective, IgxCellValidationErrorDirective, NgTemplateOutlet, IgxColumnMinValidatorDirective, IgxButtonDirective, DatePipe]
})
export class GridValidatorServiceExtendedComponent {

    @ViewChild('grid1', { read: IgxGridComponent })
    public grid: IgxGridComponent;

    public data = employeesData;

    public formCreateHandler(formGroupArgs: IGridFormGroupCreatedEventArgs) {
        const createdOnRecord = formGroupArgs.formGroup.get('created_on');
        const lastActiveRecord = formGroupArgs.formGroup.get('last_activity');
        createdOnRecord.addValidators(this.futureDateValidator());
        lastActiveRecord.addValidators([this.pastDateValidator(), this.futureDateValidator()]);
    }

    public commit() {
        const invalidTransactions = this.grid.validation.getInvalid();
        if (invalidTransactions.length > 0 && !confirm('You\'re committing invalid transactions. Are you sure?')) {
            return;
        }

        this.grid.transactions.commit(this.data);
        this.grid.validation.clear();
    }

    public undo() {
        /* exit edit mode and commit changes */
        this.grid.endEdit(true);
        this.grid.transactions.undo();
    }

    public redo() {
        /* exit edit mode and commit changes */
        this.grid.endEdit(true);
        this.grid.transactions.redo();
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
  <igx-grid #grid1 [data]="data" [width]="'100%'" [height]="'480px'" [autoGenerate]="false" [batchEditing]="true"
    [primaryKey]="'id'" (formGroupCreated)='formCreateHandler($event)'>
    <igx-column field="Avatar" header="Photo" dataType="string" width="80" [editable]="false">
      <ng-template igxCell let-cell="cell">
        <div class="cell__inner avatar-cell">
          <igx-avatar [src]="cell.row.data.avatar" shape="circle" size="small"></igx-avatar>
        </div>
      </ng-template>
    </igx-column>
    <igx-column field="name" header="Name" [editable]="true" required></igx-column>
    <igx-column field="company" header="Company" [editable]="true"></igx-column>
    <igx-column field="email" width="190" header="Email" [editable]="true" required email></igx-column>
    <igx-column field="fax" header="Phone" [editable]="true" phoneFormat="\+\d{1}\-(?!0)(\d{3})\-(\d{3})\-(\d{4})\b">
      <ng-template igxCellValidationError let-cell='cell' let-defaultErr="defaultErrorTemplate">
        <ng-container *ngTemplateOutlet="defaultErr" >
        </ng-container>
        @if (cell.validation.errors?.['phoneFormat']) {
          <div>
            Please enter correct phone format
          </div>
        }
      </ng-template>
    </igx-column>
    <igx-column field="created_on" header="Date of Registration" width="170" [editable]="true" [dataType]="'date'" required>
      <ng-template igxCellValidationError let-cell='cell' let-defaultErr='defaultErrorTemplate'>
        <ng-container *ngTemplateOutlet="defaultErr" >
        </ng-container>
        @if (cell.validation.errors?.['futureDate']) {
          <div>
            The date cannot be in the future.
          </div>
        }
      </ng-template>
      <ng-template igxCell let-cell>
        {{ cell | date: 'longDate' }}
      </ng-template>
    </igx-column>
    <igx-column field="last_activity" header="Last Active" width="170" [editable]="true" [dataType]="'date'" required>
      <ng-template igxCell let-cell>
        {{ cell | date: 'longDate' }}
      </ng-template>
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
    <igx-column field="estimated_sales" header="Estimated Sales" [editable]="true" [dataType]="'number'" required min="0">
    </igx-column>
    <igx-column field="deals_lost" header="Deals Lost" [editable]="true" [dataType]="'number'" required min="0">
    </igx-column>
    <igx-column field="deals_won" header="Deals Won" [editable]="true" [dataType]="'number'" required min="0">
    </igx-column>
    <igx-column field="deals_pending" header="Deals Pending" [editable]="true" [dataType]="'number'" required min="0">
    </igx-column>
  </igx-grid>
</div>

<div class="buttons-wrapper">
  <button igxButton [disabled]="!grid1.transactions.canUndo" (click)="undo()">Undo</button>
  <button igxButton [disabled]="!grid1.transactions.canRedo" (click)="redo()">Redo</button>
  <button igxButton [disabled]="grid1.transactions.getAggregatedChanges(false).length < 1" (click)="commit()">Commit</button>
</div>
```
```scss
.grid-wrapper {
    margin: 0 auto;
    padding: 16px;
}

.buttons-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: left;
    padding: 10px 0;
}
```<div class="divider--half"></div>## Cross-field validationIn some scenarios validation of one field may depend on the value of another field in the record.In that case a custom validator can be used to compare the values in the record via their shared `FormGroup`.The below sample demonstrates a cross-field validation between different field of the same record. It checks the dates validity compared to the current date and between the active and created on date of the record as well as the deals won/lost ration for each employee. All errors are collected in a separate pinned column that shows that the record is invalid and displays the related errors.The next lines of code show the cross-field validator function, which contains the comparisons and sets the related errors relative to them.```tsprivate rowValidator(): ValidatorFn {
    return (formGroup: FormGroup): ValidationErrors | null => {
        let returnObject = {};
        const createdOnRecord = formGroup.get('created_on');
        const lastActiveRecord = formGroup.get('last_activity');
        const winControl = formGroup.get('deals_won');
        const loseControl = formGroup.get('deals_lost');
        const actualSalesControl = formGroup.get('actual_sales');

        // Validate dates
        const curDate = new Date();
        if (new Date(createdOnRecord.value) > curDate) {
            // The created on date shouldn't be greater than current date.
            returnObject['createdInvalid'] =  true;
        }
        if (new Date(lastActiveRecord.value) > curDate) {
            // The last active date shouldn't be greater than current date.
            returnObject['lastActiveInvalid'] = true;
        }
        if (new Date(createdOnRecord.value) > new Date(lastActiveRecord.value)) {
            // The created on date shouldn't be greater than last active date.
            returnObject['createdLastActiveInvalid'] = true;
        }
        
        // Validate deals
        const dealsRatio = this.calculateDealsRatio(winControl.value, loseControl.value);
        if (actualSalesControl.value === 0 && dealsRatio > 0) {
            // If the actual sales value is 0 but there are deals made.
            returnObject['salesZero'] = true;
        }
        if (actualSalesControl.value > 0 && dealsRatio === 0) {
            // If the deals ratio based on deals won is 0 but the actual sales is bigger than 0.
            returnObject['salesNotZero'] = true;
        }
        
        return returnObject;
    };}public calculateDealsRatio(dealsWon, dealsLost) {
    if (dealsLost === 0) return dealsWon + 1;
    return Math.round(dealsWon / dealsLost * 100) / 100;}```The cross-field validator can be added to the `formGroup` of the row from [`formGroupCreated`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridComponent.html#formGroupCreated) event, which returns the new `formGroup` for each row when entering edit mode:```html<igx-grid #grid1 [data]="transactionData" [width]="'100%'" [height]="'480px'" [autoGenerate]="false" 
        [batchEditing]="true" [rowEditable]="true" [primaryKey]="'id'"
        (formGroupCreated)='formCreateHandler($event)'>
    <!-- ... --></igx-grid>``````typescriptpublic formCreateHandler(evt: IGridFormGroupCreatedEventArgs) {
    evt.formGroup.addValidators(this.rowValidator());}```The different errors are displayed in a templated cell that combines all errors in a single tooltip. Depending on the row valid state different icon is displayed:```html<igx-column field="row_valid" header=" " [editable]="false" [pinned]="true" [width]="'50px'">
    <ng-template igxCell let-cell="cell">
        <div *ngIf="isRowValid(cell)" [igxTooltipTarget]="tooltipRef"  style="margin-right: '-10px';">
            <img width="18" src="assets/images/grid/active.png"/>
        </div>
        <div *ngIf="!isRowValid(cell)" [igxTooltipTarget]="tooltipRef" style="margin-right: '-10px';">
            <img width="18" src="assets/images/grid/expired.png"/>
        </div>
        <div #tooltipRef="tooltip" igxTooltip [style.width]="'max-content'">
            <div *ngFor="let message of stateMessage(cell)">
                {{message}}
            </div>
        </div>
    </ng-template></igx-column>```The error messages are gathered in the `stateMessage` function, which gathers the errors for each cell, because each column could have templated form validations and then checks the errors for the row itself, which come from the custom `rowValidator`.```typescriptpublic stateMessage(cell: CellType) {
    const messages = [];
    const row = cell.row;
    const cellValidationErrors = row.cells.filter(x => !!x.validation.errors);
    cellValidationErrors.forEach(cell => {
        if (cell.validation.errors) {
            if (cell.validation.errors.required) {
                messages.push(`The \`${cell.column.header}\` column is required.`);
            }
            // Other cell errors ...
        }
    });

    if (row.validation.errors?.createdInvalid) {
        messages.push(`The \`Date of Registration\` date cannot be in the future.`);
    }
    // Other cross-field errors...

    return messages;}```### Cross-field exampleThe below sample demonstrates the cross-field validation in action.```typescript
import { Component, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn, FormsModule } from '@angular/forms';
import { CellType, IGridEditEventArgs, IGridFormGroupCreatedEventArgs, IgxCellTemplateDirective, IgxCellValidationErrorDirective, IgxColumnComponent, IgxColumnEmailValidatorDirective, IgxColumnMinValidatorDirective, IgxColumnRequiredValidatorDirective } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxButtonDirective, IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular/directives';
import { employeesData } from '../../data/employeesData';
import { NgTemplateOutlet, DatePipe } from '@angular/common';

@Component({
    selector: 'app-grid-validator-service-cross-field',
    styleUrls: ['./grid-validator-service-cross-field.component.scss'],
    templateUrl: './grid-validator-service-cross-field.component.html',
    imports: [IgxSwitchComponent, FormsModule, IgxGridComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxAvatarComponent, IgxColumnRequiredValidatorDirective, IgxColumnEmailValidatorDirective, IgxCellValidationErrorDirective, NgTemplateOutlet, IgxColumnMinValidatorDirective, IgxTooltipTargetDirective, IgxTooltipDirective, IgxButtonDirective, DatePipe]
})
export class GridValidatorServiceCrossFieldComponent {

    @ViewChild('grid1', { read: IgxGridComponent })
    public grid: IgxGridComponent;
    public transactionData = JSON.parse(JSON.stringify(employeesData));
    public rowEdit: boolean = true;

    public formCreateHandler(evt: IGridFormGroupCreatedEventArgs) {
        const createdOnRecord = evt.formGroup.get('created_on');
        const lastActiveRecord = evt.formGroup.get('last_activity');
        createdOnRecord.addValidators(this.futureDateValidator());
        lastActiveRecord.addValidators(this.futureDateValidator());
        evt.formGroup.addValidators(this.rowValidator());
    }

    public editHandler(event: IGridEditEventArgs) {
        if (!event.valid) {
            event.cancel = true;
        }
    }

    public commit() {
        const invalidTransactions = this.grid.validation.getInvalid();
        if (invalidTransactions.length > 0 && !confirm('You\'re committing invalid transactions. Are you sure?')) {
            return;
        }

        this.grid.transactions.commit(this.transactionData);
        this.grid.validation.clear();
    }

    public calculateDealsRatio(dealsWon, dealsLost) {
        if (dealsLost === 0) return dealsWon + 1;
        return Math.round(dealsWon / dealsLost * 100) / 100;
    }

    public getDealsRatio(cell: CellType) {
        const dealsWon = cell.row.cells.find(c => c.column.field === 'deals_won');
        const dealsLost = cell.row.cells.find(c => c.column.field === 'deals_lost');
        const dealsWonValue = dealsWon.editValue != null ? dealsWon.editValue : dealsWon.value;
        const dealsLostValue = dealsLost.editValue != null ? dealsLost.editValue : dealsLost.value;
        return this.calculateDealsRatio(dealsWonValue, dealsLostValue);
    }

    private futureDateValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const date = control.value;
            if(date > new Date()){
                return { beyondThreshold: { value: control.value } };
            }
            return null;
        }
    }

    private rowValidator(): ValidatorFn {
        return (formGroup: FormGroup): ValidationErrors | null => {
            let returnObject = {};
            const createdOnRecord = formGroup.get('created_on');
            const lastActiveRecord = formGroup.get('last_activity');
            const winControl = formGroup.get('deals_won');
            const loseControl = formGroup.get('deals_lost');
            const actualSalesControl = formGroup.get('actual_sales');

            // Validate dates
            const curDate = new Date();
            if (new Date(createdOnRecord.value) > curDate) {
                // The created on date shouldn't be greater than current date.
                returnObject['createdInvalid'] =  true;
            }
            if (new Date(lastActiveRecord.value) > curDate) {
                // The last active date shouldn't be greater than current date.
                returnObject['lastActiveInvalid'] = true;
            }
            if (new Date(createdOnRecord.value) > new Date(lastActiveRecord.value)) {
                // The created on date shouldn't be greater than last active date.
                returnObject['createdLastActiveInvalid'] = true;
            }

            // Validate deals
            const dealsRatio = this.calculateDealsRatio(winControl.value, loseControl.value);
            if (actualSalesControl.value === 0 && dealsRatio > 0) {
                returnObject['salesZero'] = true;
            }
            if (actualSalesControl.value > 0 && dealsRatio === 0) {
                returnObject['salesNotZero'] = true;
            }

            return returnObject;
        };
    }

    public isRowValid(cell: CellType) {
        return !cell.row.validation.errors && !cell.row.cells.some(c => !!c.validation.errors);
    }

    public stateMessage(cell: CellType) {
        const messages = [];

        const cellValidationErrors = cell.row.cells.filter(x => !!x.validation.errors);
        cellValidationErrors.forEach(cell => {
            const cellErrors = cell.validation.errors;
            if (cellErrors?.required) {
                messages.push(`The \`${cell.column.header}\` column is required.`);
            }
            if (cellErrors?.min) {
                messages.push(`A value of at least ${cellErrors.min.min} should be entered for \`${cell.column.header}\` column.`);
            }
            if (cellErrors?.email) {
                messages.push(`Please enter a valid email for \`${cell.column.header}\` column.`);
            }
        });

        const rowErrors = cell.row.validation.errors;
        if (rowErrors?.createdInvalid) {
            messages.push(`The \`Date of Registration\` date cannot be in the future.`);
        }
        if (rowErrors?.lastActiveInvalid) {
            messages.push(`The \`Last Active\` date cannot be in the future.`);
        }
        if (rowErrors?.createdLastActiveInvalid) {
            messages.push(`The \`Date of Registration\` cannot be greater than the \`Last Active\` date.`);
        }
        if (rowErrors?.salesZero) {
            messages.push(`The \`Actual Sales\` cannot be 0 when the deals ratio is greater than 0.`);
        }
        if (rowErrors?.salesNotZero) {
            messages.push(`The \`Actual Sales\` cannot be greater than 0 when the deals ratio is 0.`);
        }

        if (messages.length === 0 && this.isRowValid(cell)) {
            messages.push('OK');
        }

        return messages;
    }
}
```
```html
<div class="top-row">
  <igx-switch [(ngModel)]="rowEdit">Row edit</igx-switch>
</div>
<div class="grid__wrapper">
  <igx-grid #grid1 [data]="transactionData" [width]="'100%'" [height]="'500px'" [autoGenerate]="false" [batchEditing]="true" [rowEditable]="rowEdit"
    [primaryKey]="'id'" (formGroupCreated)="formCreateHandler($event)" (cellEdit)="editHandler($event)" (rowEdit)="editHandler($event)">
    <igx-column field="Avatar" header="Photo" dataType="string" width="80" [editable]="false">
      <ng-template igxCell let-cell="cell">
        <div class="cell__inner avatar-cell">
          <igx-avatar [src]="cell.row.data.avatar" shape="circle" size="small"></igx-avatar>
        </div>
      </ng-template>
    </igx-column>
    <igx-column field="name" header="Name" [editable]="true" required></igx-column>
    <igx-column field="company" header="Company" [editable]="true"></igx-column>
    <igx-column field="country" header="Country" [editable]="true"></igx-column>
    <igx-column field="city" header="City" [editable]="true"></igx-column>
    <igx-column field="email" width="190" header="Email" [editable]="true" required email></igx-column>
    <igx-column field="created_on" header="Date of Registration" width="170" [editable]="true" [dataType]="'date'" required>
      <ng-template igxCellValidationError let-cell='cell' let-defaultErr='defaultErrorTemplate'>
        <ng-container *ngTemplateOutlet="defaultErr" >
        </ng-container>
        @if (cell.validation.errors?.['beyondThreshold']) {
          <div>
            The date cannot be in the future.
          </div>
        }
      </ng-template>
      <ng-template igxCell let-cell>
        {{ cell | date: 'longDate' }}
      </ng-template>
    </igx-column>
    <igx-column field="last_activity" header="Last Active" width="170" [editable]="true" [dataType]="'date'" required>
      <ng-template igxCell let-cell>
        {{ cell | date: 'longDate' }}
      </ng-template>
      <ng-template igxCellValidationError let-cell='cell' let-defaultErr='defaultErrorTemplate'>
        <ng-container *ngTemplateOutlet="defaultErr">
        </ng-container>
        @if (cell.validation.errors?.['beyondThreshold']) {
          <div>
            The date cannot be in the future.
          </div>
        }
      </ng-template>
    </igx-column>
    <igx-column field="estimated_sales" header="Estimated Sales" [editable]="true" [dataType]="'number'" required min="0"></igx-column>
    <igx-column field="actual_sales" header="Actual Sales" [editable]="true" [dataType]="'number'" required min="0"></igx-column>
    <igx-column field="deals_lost" header="Deals Lost" [editable]="true" [dataType]="'number'" required min="0"></igx-column>
    <igx-column field="deals_won" header="Deals Won" [editable]="true" [dataType]="'number'" required min="0"></igx-column>
    <igx-column field="deals_ratio" header="Deals Ratio" [editable]="false" [dataType]="'number'" >
      <ng-template igxCell let-cell="cell">
        {{ getDealsRatio(cell) }}
      </ng-template>
    </igx-column>
    <igx-column field="row_valid" header=" " [editable]="false" [pinned]="true" [width]="'50px'">
      <ng-template igxCell let-cell="cell">
        @if (isRowValid(cell)) {
          <div [igxTooltipTarget]="tooltipRef"  class="valid-image">
            <img width="18" src="assets/images/grid/active.png"/>
          </div>
        }
        @if (!isRowValid(cell)) {
          <div [igxTooltipTarget]="tooltipRef" class="invalid-image">
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
  </igx-grid>
  <div class="buttons-wrapper">
    <button igxButton [disabled]="grid1.transactions.getAggregatedChanges(false).length < 1" (click)="commit()">Commit</button>
  </div>
</div>
```
```scss
.top-row, .grid__wrapper {
    padding: 16px;
    padding-bottom: 0;
}

.valid-image,
.invalid-image {
    margin-left: -10px;

    img {
        max-width: none;
    }
}

.buttons-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: start;
    padding: 10px 0;
}
```<div class="divider--half"></div>## StylingUsing the [Ignite UI for Angular Theme Library](../themes/index.md), we can alter the default validation styles while editing.In the example below, we will make use of the exposed template for validation message, which pops out in a tooltip and overriding the error color to modify the default looks of the validation.We will also style the background of the invalid rows to make them more distinct.### Import themeThe easiest way to style and access css variables is to define styles in our `app`'s global style file (typically `styles.scss`).The first thing we need to do is import the `themes/index` file - this gives us access to all the powerful tools of the Ignite UI for Angular Sass framework:```scss@use "igniteui-angular/theming" as *;// IMPORTANT: Prior to Ignite UI for Angular version 13 use:// @import '~igniteui-angular/lib/core/styles/themes/index';```### Include the stylesIn order to change the error color you can use the css variable `--ig-error-500`:```scss--ig-error-500: 34, 80%, 63%;```### Custom TemplatesChanging the default error template allows setting custom classes and styles:```html<ng-template igxCellValidationError let-cell='cell' let-defaultErr='defaultErrorTemplate'>
  <div class="validator-container">
    <ng-container *ngTemplateOutlet="defaultErr">
    </ng-container>
  </div></ng-template>```### Invalid row and cell stylesRows and cells provide API for the developers to know if a row or cell is invalid and what kind of errors are active.```tspublic rowStyles = {
    background: (row: RowType) => row.validation.status === 'INVALID' ? '#FF000033' : '#00000000'};public cellStyles = {
  'invalid-cell': (rowData, columnKey) => {
    const pKey = this.grid.primaryKey;
    const cell = this.grid.getCellByKey(rowData[pKey], columnKey);
    return cell && cell.validation.status === 'INVALID';
  }}``````html<igx-grid [rowStyles]="rowStyles">
  <igx-column field="ReorderLevel" header="ReorderLever" required [cellClasses]="cellStyles">```### Demo```typescript
import { Component, ViewChild } from '@angular/core';
import { DATA } from '../../data/nwindData';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellValidationErrorDirective, IgxColumnComponent, IgxColumnRequiredValidatorDirective, RowType } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'app-grid-validation-style',
    styleUrls: [`grid-validation-style.component.scss`],
    templateUrl: 'grid-validation-style.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxColumnRequiredValidatorDirective, IgxCellValidationErrorDirective, NgTemplateOutlet]
})
export class GridValidationStyleComponent {
    @ViewChild('grid', { read: IgxGridComponent, static: true }) public grid: IgxGridComponent;
    public data: any[];
    public rowStyles = {
        background: (row: RowType) => row.validation.status === 'INVALID' ? '#FF000033' : '#00000000'
    };
    public cellStyles = {
        'invalid-cell': (rowData, columnKey) => {
            const pKey = this.grid.primaryKey;
            const cell = this.grid.getCellByKey(rowData[pKey], columnKey);
            return cell && cell.validation.status === 'INVALID';
        }
    }

    constructor() {
        this.data = DATA;
    }
}
```
```html
<div class="sample-wrapper">
    <igx-grid [igxPreventDocumentScroll]="true" #grid [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px"
        [rowEditable]="true" [rowStyles]="rowStyles">
        <igx-column field="ProductID" header="Product ID"></igx-column>
        <igx-column field="ReorderLevel" header="ReorderLever" required [cellClasses]="cellStyles">
            <ng-template igxCellValidationError let-cell='cell' let-defaultErr='defaultErrorTemplate'>
                <div class="validator-container">
                    <ng-container *ngTemplateOutlet="defaultErr">
                    </ng-container>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="ProductName" header="ProductName" [dataType]="'string'" required [cellClasses]="cellStyles">
            <ng-template igxCellValidationError let-cell='cell' let-defaultErr='defaultErrorTemplate'>
                <div class="validator-container">
                    <ng-container *ngTemplateOutlet="defaultErr">
                    </ng-container>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="UnitsInStock" header="UnitsInStock" [dataType]="'number'" required [cellClasses]="cellStyles">
            <ng-template igxCellValidationError let-cell='cell' let-defaultErr='defaultErrorTemplate'>
                <div class="validator-container">
                    <ng-container *ngTemplateOutlet="defaultErr">
                    </ng-container>
                </div>
            </ng-template>
        </igx-column>
    </igx-grid>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

igx-grid {
  --ig-error-500: 34deg, 80%, 63%;
}
```<div class="divider--half"></div>## API References- [IgxBaseTransactionService](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbasetransactionservice.html)- [IgxGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)- [IgxColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)## Known Issues and Limitations| Limitation                                                                                              | Description                                                                                                                                                                                                                 || :------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- || When `validationTrigger` is blur, `editValue` and validation will trigger only after editor is blurred. | Reason is that this utilizes the formControl's [`updateOn`](https://angular.io/api/forms/AbstractControl#updateOn) property. This determines the event on which the formControl will update and trigger related validators. |## Additional Resources- [Build CRUD operations with igxGrid](../general/how-to/how-to-perform-crud.md)- [Grid Overview](grid.md)- [Grid Editing](editing.md)- [Grid Row Editing](row-editing.md)- [Grid Row Adding](row-adding.md)- [Grid Transactions](batch-editing.md)<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
