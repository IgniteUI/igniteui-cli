---
title: Editing and Validation in Angular Tree Grid - Infragistics
_description: Validate the input of the users in grid and notify them if it's valid or not while using Angular Tree Grid. See demos & examples!
_keywords: angular validation, ignite ui for angular, infragistics
_license: commercial
_tocName: Validation
_premium: true
---
# Angular Tree Grid Editing and Validation
The Tree Grid's editing exposes a built-in validation mechanism of user input when editing cells/rows. It extends the [Angular Form validation](https://angular.io/guide/form-validation) functionality to allow easier integration with a well known functionality. When the state of the editor changes, visual indicators are applied to the edited cell.
## Configuration
### Configure via template-driven configuration
We extend some of the Angular Forms validator directives to directly work with the `IgxColumn`. The same validators are available as attributes to be set declaratively in `igx-column`. The following validators are supported out-of-the-box:
- required
- min
- max
- email
- minlength
- maxlength
- pattern
To validate that a column input would be set and the value is going to be formatted as an email, you can use the related directives:
```html
<igx-column [field]="email" [header]="User E-mail" required email></igx-column>
```
The following sample demonstrates how to use the prebuilt `required`, `email` and `min` validator directives in a Tree Grid.
```typescript
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxColumnComponent, IgxColumnMaxValidatorDirective, IgxColumnMinValidatorDirective, IgxColumnRequiredValidatorDirective } from 'igniteui-angular/grids/core';
import { generateEmployeeFlatData, IEmployee } from '../data/employees-flat';
import { FormsModule } from '@angular/forms';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-validator-service-component',
    styleUrls: ['tree-grid-validator-service.component.scss'],
    templateUrl: 'tree-grid-validator-service.component.html',
    imports: [IgxSwitchComponent, FormsModule, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxColumnRequiredValidatorDirective, IgxColumnMinValidatorDirective, IgxColumnMaxValidatorDirective]
})
export class TreeGridValidatorServiceComponent implements OnInit {
    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;

    public data: IEmployee[];

    public rowEdit: boolean = false;

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
    }
}
```
```html
<div class="top-row">
    <igx-switch [(ngModel)]="rowEdit">Row edit</igx-switch>
</div>
<div class="grid__wrapper">
    <igx-tree-grid [igxPreventDocumentScroll]="true" #treeGrid [batchEditing]="true" [data]="data" primaryKey="ID"
        foreignKey="ParentID" [width]="'100%'" [height]="'500px'" [rowEditable]="rowEdit">
        <igx-column field="ID" header="ID" dataType="number" [editable]="false"></igx-column>
        <igx-column field="Age" header="Age" dataType="number" [editable]="true" required min="18" max="99"></igx-column>
        <igx-column field="Name" header="Full Name" dataType="string" [editable]="true" required></igx-column>
        <igx-column field="Title" header="Title" dataType="string" [editable]="true" required></igx-column>
        <igx-column field="HireDate" header="Hire Date" dataType="date" [editable]="true" required></igx-column>
        <igx-column field="OnPTO" header="On PTO" dataType="boolean" [editable]="true"></igx-column>
    </igx-tree-grid>
</div>
```
```scss
.top-row, .grid__wrapper {
    margin: 15px;
}
```
<div class="divider--half"></div>
### Configure via reactive forms
We expose the `FormGroup` that will be used for validation when editing starts on a row/cell via a `formGroupCreated` event. You can modify it by adding your own validators for the related fields:
```html
<igx-tree-grid (formGroupCreated)='formCreateHandler($event)' ...>
```
@@if (igxName === 'IgxGrid' || igxName === 'IgxHierarchicalGrid') {
```ts
    public formCreateHandler(args: IGridFormGroupCreatedEventArgs) {
        const formGroup = args.formGroup;
        const orderDateRecord = formGroup.get('OrderDate');
        const requiredDateRecord = formGroup.get('RequiredDate');
        const shippedDateRecord = formGroup.get('ShippedDate');

        orderDateRecord.addValidators(this.futureDateValidator());
        requiredDateRecord.addValidators(this.pastDateValidator());
        shippedDateRecord.addValidators(this.pastDateValidator());
    }
```
}
```ts
   public formCreateHandler(args: IGridFormGroupCreatedEventArgs) {
        const formGroup = args.formGroup;
        const hireDateRecord = formGroup.get('HireDate');
        hireDateRecord.addValidators([this.futureDateValidator(), this.pastDateValidator()]);
    }
```
You can decide to write your own validator function, or use one of the [built-in Angular validator functions](https://angular.io/guide/form-validation#built-in-validator-functions).
## Validation service API
The grid exposes a validation service via the [`validation`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridComponent.html#validation) property.
That service has the following public APIs:
- [`valid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridValidationService.html#valid) - returns if the grid validation state is valid.
- [`getInvalid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridValidationService.html#getInvalid) - returns records with invalid states.
- [`clear`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridValidationService.html#clear) - clears state for record by id or clears all state if no id is provided.
- [`markAsTouched`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridValidationService.html#markAsTouched) - marks the related record/field as touched.
Invalid states will persist until the validation errors in them are fixed according to the validation rule or they are cleared.
## Validation triggers
Validation will be triggered in the following scenarios:
- While editing via the cell editor based on the grid's [`validationTrigger`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridComponent.html#validationTrigger). Either on `change` while typing in the editor, or on `blur` when the editor loses focus or closes.
- When updating cells/rows via the API - [`updateRow`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridComponent.html#updateRow), [`updateCell`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridComponent.html#updateCell) etc..
- When using batch editing and the [`undo`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxTransactionService.html#undo)/[`redo`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxTransactionService.html#redo) API of the transaction service.
> Note: Validation will not trigger for records that have not been edited via user input or via the editing API. Visual indicators on the cell will only shown if the related input is considered touched - either via user interaction or via the `markAsTouched` API of the validation service.
## Angular Tree Grid Validation Customization Options
### Set a custom validator
You can define your own validation directive to use on a `<igx-column>` in the template.
```ts
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
```
Once it is defined and added in your app module you can set it declaratively to a given column in the grid:
```html
<igx-column phoneFormat="\+\d{1}\-(?!0)(\d{3})\-(\d{3})\-(\d{4})\b" ...>
```
### Change default error template
You can define your own custom error template that will be displayed in the error tooltip when the cell enters invalid state.
This is useful in scenarios where you want to add your own custom error message or otherwise change the look or content of the message.
```html
<igx-column ... >
  <ng-template igxCellValidationError let-cell='cell' let-defaultErr="defaultErrorTemplate">
      <ng-container *ngTemplateOutlet="defaultErr">
      </ng-container>
      <div *ngIf="cell.validation.errors?.['phoneFormat']">
        Please enter correct phone format
      </div>
  </ng-template>
</igx-column>
```
### Prevent exiting edit mode on invalid state
In some cases you may want to disallow submitting an invalid value in the data.
In that scenarios you can use the [`cellEdit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridComponent.html#cellEdit) or [`rowEdit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridComponent.html#rowEdit) events and cancel the event in case the new value is invalid.
Both events' arguments have a [`valid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/IGridEditEventArgs.html#valid) property and can be canceled accordingly. How it is used can be seen in the [Cross-field Validation example](#cross-field-example)
```html
<igx-tree-grid (cellEdit)='cellEdit($event)' ...>
```
```ts
public cellEdit(evt) {
  if (!evt.valid) {
    evt.cancel = true;
  }
}
```
### Example
The below example demonstrates the above-mentioned customization options.
```typescript
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Directive, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IGridFormGroupCreatedEventArgs, IgxCellValidationErrorDirective, IgxColumnComponent, IgxColumnMaxValidatorDirective, IgxColumnMinValidatorDirective, IgxColumnRequiredValidatorDirective } from 'igniteui-angular/grids/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { generateEmployeeFlatData, IEmployee } from '../data/employees-flat';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { NgTemplateOutlet } from '@angular/common';

export function phoneFormatValidator(phoneReg: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const match = phoneReg.test(control.value);
        return match ? null : { phoneFormat: { value: control.value } } ;
    }
}

@Directive({
    selector: '[phoneFormat]',
    providers: [{ provide: NG_VALIDATORS, useExisting: TGridPhoneFormatDirective, multi: true }]
})
export class TGridPhoneFormatDirective extends Validators {
    @Input('phoneFormat')
    public phoneFormatString = '';

    public validate(control: AbstractControl): ValidationErrors | null {
        return this.phoneFormatString ? phoneFormatValidator(new RegExp(this.phoneFormatString, 'i'))(control)
            : null;
    }
}

@Component({
    selector: 'app-tree-grid-validator-service-extended-component',
    styleUrls: ['tree-grid-validator-service-extended.component.scss'],
    templateUrl: 'tree-grid-validator-service-extended.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxColumnMinValidatorDirective, IgxColumnRequiredValidatorDirective, IgxColumnMaxValidatorDirective, TGridPhoneFormatDirective, IgxCellValidationErrorDirective, NgTemplateOutlet, IgxButtonDirective]
})
export class TreeGridValidatorServiceExtendedComponent implements OnInit {
    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;

    public data: IEmployee[];

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
    }

    public formCreateHandler(formGroupArgs: IGridFormGroupCreatedEventArgs) {
        const hireDateRecord = formGroupArgs.formGroup.get('HireDate');
        hireDateRecord.addValidators([this.futureDateValidator(), this.pastDateValidator()]);
    }

    public commit() {
        const invalidTransactions = this.treeGrid.validation.getInvalid();
        if (invalidTransactions.length > 0 && !confirm('You\'re committing invalid transactions. Are you sure?')) {
            return;
        }

        this.treeGrid.transactions.commit(this.data);
        this.treeGrid.validation.clear();
    }

    public undo() {
        /* exit edit mode and commit changes */
        this.treeGrid.endEdit(true);
        this.treeGrid.transactions.undo();
    }

    public redo() {
        /* exit edit mode and commit changes */
        this.treeGrid.endEdit(true);
        this.treeGrid.transactions.redo();
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
            let pastDate = new Date('Sept 1 2004');
            if(pastDate){
                return pastDate < date ? null : { pastDate: { value: control.value } }
            } else return null;
        }
    }
}
```
```html
<div class="grid__wrapper">
  <igx-tree-grid [igxPreventDocumentScroll]="true" #treeGrid [width]="'100%'" [height]="'500px'" [data]="data" primaryKey="ID"
    foreignKey="ParentID" [autoGenerate]="false" [batchEditing]="true" [rowEditable]="true"
    (formGroupCreated)="formCreateHandler($event)">
    <igx-column field="ID" header="ID" dataType="number" [editable]="false"></igx-column>
    <igx-column field="Age" header="Age" dataType="number" min="18" [editable]="true" required max="99">
    </igx-column>
    <igx-column field="Name" header="Full Name" dataType="string" [editable]="true" required>
    </igx-column>
    <igx-column field="Phone" header="Phone" dataType="string" [editable]="true" required phoneFormat="^[^a-zA-Z]*$">
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
    <igx-column field="Title" header="Title" dataType="string" [editable]="true" required></igx-column>
    <igx-column field="HireDate" header="Hire Date" dataType="date" [editable]="true" required>
      <ng-template igxCellValidationError let-cell="cell" let-defaultErr="defaultErrorTemplate">
        <ng-container *ngTemplateOutlet="defaultErr" >
        </ng-container>
        @if (cell.validation.errors?.['futureDate']) {
          <div>
            The date cannot be in the future!
          </div>
        }
        @if (cell.validation.errors?.['pastDate']) {
          <div>
            The date cannot be before 1st Sept 2004
          </div>
        }
      </ng-template>
    </igx-column>
    <igx-column field="OnPTO" header="On PTO" dataType="boolean" [editable]="true"></igx-column>
  </igx-tree-grid>

  <div class="buttons-wrapper">
    <button igxButton [disabled]="!treeGrid.transactions.canUndo" (click)="undo()">Undo</button>
    <button igxButton [disabled]="!treeGrid.transactions.canRedo" (click)="redo()">Redo</button>
    <button igxButton [disabled]="treeGrid.transactions.getAggregatedChanges(false).length < 1" (click)="commit()">Commit</button>
  </div>
</div>
```
```scss
.top-row, .grid__wrapper {
    margin: 15px;
}

.buttons-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: left;
    padding: 10px 0;
}
```
<div class="divider--half"></div>
## Cross-field validation
In some scenarios validation of one field may depend on the value of another field in the record.
In that case a custom validator can be used to compare the values in the record via their shared `FormGroup`.
The below sample demonstrates a cross-field validation between different field of the same record. It checks that a specified City for a person is in the Country currently set and vice versa. Also check if the age for a person was 18 already when it was hired.
The next lines of code show the cross-field validator function, which contains comparisons described above and sets the related errors.
```ts
private rowValidator(): ValidatorFn {
    return (formGroup: FormGroup): ValidationErrors | null => {
        let returnObject = {};
        
        const age = formGroup.get('Age');
        const hireDate = formGroup.get('HireDate');
        if((new Date().getFullYear() - new Date(hireDate.value).getFullYear()) + 18 >= age.value) {
            returnObject['ageLessHireDate'] = true;
        }

        const city = formGroup.get('City');
        const country = formGroup.get('Country');
        const validCities = this.countryData.get(country.value);
        if (!validCities || !validCities[city.value]) {
            returnObject['invalidAddress'] = true;
        }

        return returnObject;
    };
}
```
The cross-field validator can be added to the `formGroup` of the row from [`formGroupCreated`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridComponent.html#formGroupCreated) event, which returns the new `formGroup` for each row when entering edit mode:
```html
<igx-tree-grid igxPreventDocumentScroll #treeGrid [batchEditing]="true" [data]="data" primaryKey="ID"
    foreignKey="ParentID" [width]="'100%'" [height]="'500px'" [rowEditable]="true" [pinning]="pinningConfig"
    (formGroupCreated)="formCreateHandler($event)">
    <!-- ... -->
</igx-tree-grid>
```
```typescript
public formCreateHandler(evt: IGridFormGroupCreatedEventArgs) {
    evt.formGroup.addValidators(this.rowValidator());
}
```
The different errors are displayed in a templated cell that combines all errors in a single tooltip. Depending on the row valid state different icon is displayed:
```html
<igx-column field="row_valid" header=" " [editable]="false" [dataType]="'number'" [pinned]="true" [width]="'150px'">
    <ng-template igxCell let-cell="cell">
        <div *ngIf="isRowValid(cell)" [igxTooltipTarget]="tooltipRef"  style="margin: 'auto';">
            <img width="18" src="assets/images/grid/active.png"/>
        </div>
        <div *ngIf="!isRowValid(cell)" [igxTooltipTarget]="tooltipRef" style="margin: 'auto';">
            <img width="18" src="assets/images/grid/expired.png"/>
        </div>
        <div #tooltipRef="tooltip" igxTooltip [style.width]="'max-content'">
            <div *ngFor="let message of stateMessage(cell)">
                {{message}}
            </div>
        </div>
    </ng-template>
</igx-column>
```
The error messages are gathered in the `stateMessage` function, which gathers the errors for each cell, because each column could have templated form validations and then checks the errors for the row itself, which come from the custom `rowValidator`.
```typescript
public stateMessage(cell: CellType) {
    const messages = [];
    const row = cell.row;
    const cellValidationErrors = row.cells.filter(x => !!x.validation.errors);
    cellValidationErrors.forEach(cell => {
        if (cell.validation.errors) {
            if (cell.validation.errors.required) {
                messages.push(`The \`${cell.column.header}\` column is required.`);
            }
            // Other cell errors...
        }
    });

    if (row.validation.errors?.ageLessHireDate) {
        messages.push(`\`Age\` cannot be less than 18 when the person was hired.`);
    }
    if (row.validation.errors?.invalidAddress) {
        messages.push(`Selected \`City\` does not match the \`Country\`.`);
    }

    if (messages.length === 0 && this.isRowValid(cell)) {
        messages.push('OK');
    }

    return messages;
}
```
### Cross-field example
The below sample demonstrates the cross-field validation in action.
```typescript
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, ValidationErrors, ValidatorFn, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColumnPinningPosition } from 'igniteui-angular/core';
import { CellType, IGridEditEventArgs, IGridFormGroupCreatedEventArgs, IPinningConfig, IgxCellEditorTemplateDirective, IgxCellTemplateDirective, IgxColumnComponent, IgxColumnMaxValidatorDirective, IgxColumnMinValidatorDirective, IgxColumnRequiredValidatorDirective } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxButtonDirective, IgxFocusDirective, IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular/directives';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-validator-service-cross-field-component',
    styleUrls: ['tree-grid-validator-service-cross-field.component.scss'],
    templateUrl: 'tree-grid-validator-service-cross-field.component.html',
    imports: [IgxSwitchComponent, FormsModule, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxColumnRequiredValidatorDirective, IgxColumnMinValidatorDirective, IgxColumnMaxValidatorDirective, IgxCellEditorTemplateDirective, IgxSelectComponent, ReactiveFormsModule, IgxFocusDirective, IgxSelectItemComponent, IgxCellTemplateDirective, IgxTooltipTargetDirective, IgxTooltipDirective, IgxButtonDirective]
})
export class TreeGridValidatorServiceCrossFieldComponent implements OnInit {
    @ViewChild('treeGrid', { static: true })
    public treeGrid: IgxTreeGridComponent;

    public rowEdit: boolean = false;
    public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };

    public data: any[];
    public countryData: Map<string, object>;
    public countries = [];
    public cities = [];

    public ngOnInit(): void {
        this.data = generateEmployeeDetailedFlatData();
        this.countryData = new Map(this.data.map(i => [i.Country, {}]));
        this.data.forEach(rec => {
            const country = rec.Country;
            const city = rec.City;
            this.countryData.get(country)[city] = city;
        });
        this.countries = [...new Set(this.data.map(x => x.Country))];
        this.cities = [...new Set(this.data.map(x => x.City))];
    }

    public editHandler(event: IGridEditEventArgs) {
        if (!event.valid) {
            event.cancel = true;
        }
    }

    public formCreateHandler(evt: IGridFormGroupCreatedEventArgs) {
        evt.formGroup.addValidators(this.rowValidator());
    }

    private rowValidator(): ValidatorFn {
        return (formGroup: FormGroup): ValidationErrors | null => {
            let returnObject = {};

            const age = formGroup.get('Age');
            const hireDate = formGroup.get('HireDate');
            if((new Date().getFullYear() - new Date(hireDate.value).getFullYear()) + 18 >= age.value) {
                returnObject['ageLessHireDate'] = true;
            }

            const city = formGroup.get('City');
            const country = formGroup.get('Country');
            const validCities = this.countryData.get(country.value);
            if (!validCities || !validCities[city.value]) {
                returnObject['invalidAddress'] = true;
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
            if (cellErrors?.max) {
                messages.push(`A value of at maximum ${cellErrors.max.max} should be entered for \`${cell.column.header}\` column.`);
            }
        });

        const rowErrors = cell.row.validation.errors;
        if (rowErrors?.ageLessHireDate) {
            messages.push(`\`Age\` cannot be less than 18 when the person was hired.`);
        }
        if (rowErrors?.invalidAddress) {
            messages.push(`Selected \`City\` does not match the \`Country\`.`);
        }

        if (messages.length === 0 && this.isRowValid(cell)) {
            messages.push('OK');
        }

        return messages;
    }


    public commit() {
        const invalidTransactions = this.treeGrid.validation.getInvalid();
        if (invalidTransactions.length > 0 && !confirm('You\'re committing invalid transactions. Are you sure?')) {
            return;
        }

        this.treeGrid.transactions.commit(this.data);
        this.treeGrid.validation.clear();
    }
}
```
```html
<div class="top-row">
  <igx-switch [(ngModel)]="rowEdit">Row edit</igx-switch>
</div>
<div class="grid__wrapper">
  <igx-tree-grid [igxPreventDocumentScroll]="true" #treeGrid [batchEditing]="true" [data]="data" primaryKey="ID"
    foreignKey="ParentID" [width]="'100%'" [height]="'500px'" [rowEditable]="true" [pinning]="pinningConfig"
    (formGroupCreated)="formCreateHandler($event)" (cellEdit)="editHandler($event)" (rowEdit)="editHandler($event)">
    <igx-column field="ID" header="ID" dataType="number" [editable]="false"></igx-column>
    <igx-column field="Age" header="Age" dataType="number" [editable]="true" required min="18" max="99"></igx-column>
    <igx-column field="Name" header="Full Name" dataType="string" [editable]="true" required></igx-column>
    <igx-column field="City" header="City" dataType="string" [editable]="true" required>
      <ng-template igxCellEditor let-cell="cell" let-fc='formControl'>
        <igx-select [formControl]="fc" [igxFocus]="true" >
          @for (city of cities; track city) {
            <igx-select-item [value]="city">
              {{ city }}
            </igx-select-item>
          }
        </igx-select>
      </ng-template>
    </igx-column>
    <igx-column field="Country" header="Country" dataType="string" [editable]="true" required>
      <ng-template igxCellEditor let-cell="cell" let-fc='formControl'>
        <igx-select [formControl]="fc" [igxFocus]="true">
          @for (country of countries; track country) {
            <igx-select-item [value]="country">
              {{ country }}
            </igx-select-item>
          }
        </igx-select>
      </ng-template>
    </igx-column>
    <igx-column field="Title" header="Title" dataType="string" [editable]="true" required></igx-column>
    <igx-column field="HireDate" header="Hire Date" dataType="date" [editable]="true" required></igx-column>
    <igx-column field="OnPTO" header="On PTO" dataType="boolean" [editable]="true"></igx-column>
    <igx-column field="row_valid" header=" " [editable]="false" [pinned]="true" [width]="'150px'">
      <ng-template igxCell let-cell="cell">
        @if (isRowValid(cell)) {
          <div [igxTooltipTarget]="tooltipRef"  style="margin: 'auto';">
            <img width="18" src="assets/images/grid/active.png"/>
          </div>
        }
        @if (!isRowValid(cell)) {
          <div [igxTooltipTarget]="tooltipRef" style="margin: 'auto';">
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
  </igx-tree-grid>
  <div class="buttons-wrapper">
    <button igxButton [disabled]="treeGrid.transactions.getAggregatedChanges(false).length < 1" (click)="commit()">Commit</button>
  </div>
</div>
```
```scss
.top-row, .grid__wrapper {
    padding: 16px;
    padding-bottom: 0;
}

.buttons-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 10px 0;
}
```
<div class="divider--half"></div>
## Styling
Using the [Ignite UI for Angular Theme Library](../themes/index.md), we can alter the default validation styles while editing.
In the example below, we will make use of the exposed template for validation message, which pops out in a tooltip and overriding the error color to modify the default looks of the validation.
We will also style the background of the invalid rows to make them more distinct.
### Import theme
The easiest way to style and access css variables is to define styles in our `app`'s global style file (typically `styles.scss`).
The first thing we need to do is import the `themes/index` file - this gives us access to all the powerful tools of the Ignite UI for Angular Sass framework:
```scss
@use "igniteui-angular/theming" as *;
// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```
### Include the styles
In order to change the error color you can use the css variable `--ig-error-500`:
```scss
--ig-error-500: 34, 80%, 63%;
```
### Custom Templates
Changing the default error template allows setting custom classes and styles:
```html
<ng-template igxCellValidationError let-cell='cell' let-defaultErr='defaultErrorTemplate'>
  <div class="validator-container">
    <ng-container *ngTemplateOutlet="defaultErr">
    </ng-container>
  </div>
</ng-template>
```
### Invalid row and cell styles
Rows and cells provide API for the developers to know if a row or cell is invalid and what kind of errors are active.
```ts
public rowStyles = {
    background: (row: RowType) => row.cells.find(c => c.validation.errors !== null && c.validation.errors !== undefined) ? '#FF000033' : '#00000000'
};
public cellStyles = {
  'invalid-cell': (rowData, columnKey) => {
      const pKey = this.treeGrid.primaryKey;
      const cell = this.treeGrid.getCellByKey(rowData[pKey], columnKey);
      return cell && cell.validation.status === 'INVALID';
  }
}
```
```html
<igx-tree-grid [rowStyles]="rowStyles">
  <igx-column *ngFor="let c of columns" [field]="c.field" [dataType]="c.dataType" [header]="c.label" [required]="c.required" [cellClasses]="cellStyles">
```
### Demo
```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxCellValidationErrorDirective, IgxColumnComponent, IgxColumnRequiredValidatorDirective, RowType } from 'igniteui-angular/grids/core';
import { generateEmployeeFlatData, IEmployee } from '../data/employees-flat';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'app-tree-grid-validation-style',
    styleUrls: ['tree-grid-validation-style.component.scss'],
    templateUrl: 'tree-grid-validation-style.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxColumnRequiredValidatorDirective, IgxCellValidationErrorDirective, NgTemplateOutlet]
})
export class TreeGridValidationStyleComponent implements OnInit {

    @ViewChild('treeGrid', { read: IgxTreeGridComponent, static: true }) public treeGrid: IgxTreeGridComponent;
    public data: IEmployee[];
    public columns: any[];
    public selectionMode = 'multiple';
    public rowStyles = {
        background: (row: RowType) => row.cells.find(c => c.validation.errors !== null && c.validation.errors !== undefined) ? '#FF000033' : '#00000000'
    };
    public cellStyles = {
        'invalid-cell': (rowData, columnKey) => {
            const pKey = this.treeGrid.primaryKey;
            const cell = this.treeGrid.getCellByKey(rowData[pKey], columnKey);
            return cell && cell.validation.status === 'INVALID';
        }
    }
    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();

        this.columns = [
            // tslint:disable:max-line-length
            { field: 'Name', label: 'Full Name', dataType: 'string', required: true },
            { field: 'Age', label: 'Age', dataType: 'number' },
            { field: 'Title', label: 'Title', dataType: 'string', required: true },
            { field: 'HireDate', label: 'Hire Date', dataType: 'date', required: true }
        ];
    }
}
```
```html
<div class="grid__wrapper">
  <igx-tree-grid [igxPreventDocumentScroll]="true"  #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" width="100%" height="520px"
    [rowEditable]="true" [rowStyles]="rowStyles">
    @for (c of columns; track c) {
      <igx-column [field]="c.field" [dataType]="c.dataType" [header]="c.label" [required]="c.required" [cellClasses]="cellStyles">
        <ng-template igxCellValidationError let-cell='cell' let-defaultErr='defaultErrorTemplate'>
          <div class="validator-container">
            <ng-container *ngTemplateOutlet="defaultErr">
            </ng-container>
          </div>
        </ng-template>
      </igx-column>
    }
  </igx-tree-grid>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

igx-tree-grid{
  --ig-error-500: 34deg, 80%, 63%;
}
```
<div class="divider--half"></div>
## API References
- [IgxBaseTransactionService](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbasetransactionservice.html)
- [IgxGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)
- [IgxColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)
## Known Issues and Limitations
| Limitation                                                                                              | Description                                                                                                                                                                                                                 |
| :------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| When `validationTrigger` is blur, `editValue` and validation will trigger only after editor is blurred. | Reason is that this utilizes the formControl's [`updateOn`](https://angular.io/api/forms/AbstractControl#updateOn) property. This determines the event on which the formControl will update and trigger related validators. |
## Additional Resources
- [Build CRUD operations with igxGrid](../general/how-to/how-to-perform-crud.md)
- [Tree Grid Overview](tree-grid.md)
- [Tree Grid Editing](editing.md)
- [Tree Grid Row Editing](row-editing.md)
- [Tree Grid Row Adding](row-adding.md)
- [Tree Grid Transactions](batch-editing.md)
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
