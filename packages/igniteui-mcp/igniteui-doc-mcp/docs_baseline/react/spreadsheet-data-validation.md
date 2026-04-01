---
title: React Spreadsheet | Data Validation | Infragistics
_description: Use Infragistics' React spreadsheet control to setup built-in data validation rules. View Ignite UI for React spreadsheet demos!
_keywords: Excel Spreadsheet, data validation, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Spreadsheet"]
_tocName: Data Validation
_premium: true
---

# React Data Validation

This topic explains how to configure and set the built-in data validation rules.

## React Data Validation Example

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrExcelXlsxModule } from 'igniteui-react-excel';
import { IgrExcelCoreModule } from 'igniteui-react-excel';
import { IgrExcelModule } from 'igniteui-react-excel';
import { IgrSpreadsheetModule } from 'igniteui-react-spreadsheet';
import { IgrSpreadsheet } from 'igniteui-react-spreadsheet';
import { AnyValueDataValidationRule } from 'igniteui-react-excel';
import { CustomDataValidationRule } from 'igniteui-react-excel';
import { DataValidationErrorStyle } from 'igniteui-react-excel';
import { ListDataValidationRule } from 'igniteui-react-excel';
import { OneConstraintDataValidationOperator } from 'igniteui-react-excel';
import { OneConstraintDataValidationRule } from 'igniteui-react-excel';
import { TwoConstraintDataValidationOperator } from 'igniteui-react-excel';
import { TwoConstraintDataValidationRule } from 'igniteui-react-excel';
import { WorksheetColumnWidthUnit } from 'igniteui-react-excel';

IgrExcelCoreModule.register();
IgrExcelModule.register();
IgrExcelXlsxModule.register();

IgrSpreadsheetModule.register();

export default class SpreadsheetDataValidation extends React.Component<any, any> {
    public spreadsheet: IgrSpreadsheet;

    constructor(props: any) {
        super(props);
        this.onSpreadsheetRef = this.onSpreadsheetRef.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrSpreadsheet ref={this.onSpreadsheetRef} height="100%" width="100%" />
            </div>
        );
    }

    public onSpreadsheetRef(spreadsheet: IgrSpreadsheet) {    
        if (spreadsheet) {
            this.spreadsheet = spreadsheet;

            this.spreadsheet.workbook.worksheets(0).columns(0).setWidth(25, WorksheetColumnWidthUnit.Character);
            this.spreadsheet.workbook.worksheets(0).columns(1).setWidth(15, WorksheetColumnWidthUnit.Character);

            // this validation rule has only input message set
            const valRule1 = new AnyValueDataValidationRule();
            valRule1.inputMessageTitle = "Hotel room booking form";
            valRule1.inputMessageDescription = "Please us the form below to choose your accommodation type";
            this.spreadsheet.workbook.worksheets(0).rows(1).cells(0).dataValidationRule = valRule1;
            this.spreadsheet.workbook.worksheets(0).rows(1).cells(0).value = "Hotel room booking form";

            // this validation rule has a two constraint validation set
            const valRule2 = new TwoConstraintDataValidationRule();
            valRule2.validationOperator = TwoConstraintDataValidationOperator.Between;
            valRule2.setLowerConstraint(1);
            valRule2.setUpperConstraint(4);
            valRule2.inputMessageTitle = "Adults";
            valRule2.inputMessageDescription = "Adults count must be min, 1 and max. 4.";
            valRule2.errorMessageTitle = "Adult requirement not met";
            valRule2.errorMessageDescription = "There must be between 1 and 4 adults per room.";
            valRule2.errorStyle = DataValidationErrorStyle.Information;
            this.spreadsheet.workbook.worksheets(0).rows(3).cells(1).dataValidationRule = valRule2;
            this.spreadsheet.workbook.worksheets(0).rows(3).cells(1).value = 1;
            this.spreadsheet.workbook.worksheets(0).rows(3).cells(0).value = "Adults";

            // this validation rule has a custom formula validation set
            const valRule3 = new CustomDataValidationRule();
            valRule3.setFormula("=AND((B4+B5)<5 , (B4+B5)>0)", "B5");
            valRule3.inputMessageTitle = "Children";
            valRule3.inputMessageDescription = "Children and adults cannot be more than 4 per room.";
            valRule3.errorMessageTitle = "Room limit exceeded";
            valRule3.errorMessageDescription = "The maximum persons per room is 4.";
            valRule3.errorStyle = DataValidationErrorStyle.Warning;
            this.spreadsheet.workbook.worksheets(0).rows(4).cells(1).dataValidationRule = valRule3;
            this.spreadsheet.workbook.worksheets(0).rows(4).cells(1).value = 0;
            this.spreadsheet.workbook.worksheets(0).rows(4).cells(0).value = "Children";

            // this validation rule has a list of accepted choices validation set
            const valRule4 = new ListDataValidationRule();
            valRule4.setValues(["FB", "HB", "BB"]);
            valRule4.inputMessageTitle = "Servicing";
            valRule4.inputMessageDescription = "Allowed values: FB (Full board - breakfast, lunch, and dinner)" +
                ", HB (Half board - breakfast and dinner), BB (Bed and breakfast)";
            valRule4.errorMessageTitle = "Invalid Option";
            valRule4.errorMessageDescription = "Please choose FB, HB, or BB";
            valRule4.errorStyle = DataValidationErrorStyle.Stop;
            this.spreadsheet.workbook.worksheets(0).rows(5).cells(1).dataValidationRule = valRule4;
            this.spreadsheet.workbook.worksheets(0).rows(5).cells(1).value = "FB";
            this.spreadsheet.workbook.worksheets(0).rows(5).cells(0).value = "Servicing";

            // this validation rule has a single constraint validation set
            const valRule5 = new OneConstraintDataValidationRule();
            valRule5.inputMessageTitle = "Check In Date";
            const checkInDate = new Date();
            valRule5.inputMessageDescription = "The hotel operates from " + checkInDate;
            valRule5.validationOperator = OneConstraintDataValidationOperator.GreaterThanOrEqualTo;
            valRule5.setConstraint(checkInDate);
            this.spreadsheet.workbook.worksheets(0).rows(6).cells(1).dataValidationRule = valRule5;
            this.spreadsheet.workbook.worksheets(0).rows(6).cells(1).value = checkInDate.toLocaleDateString();
            this.spreadsheet.workbook.worksheets(0).rows(6).cells(0).value = "Check In Date";

            // this validation rule has a single constraint validation set
            const valRule6 = new OneConstraintDataValidationRule();
            valRule6.inputMessageTitle = "Check Out Date";
            valRule6.inputMessageDescription = "The check out date must be greater than the check in date";
            valRule6.validationOperator = OneConstraintDataValidationOperator.GreaterThan;
            valRule6.setConstraintFormula("=B7", "B7");
            const checkOutDate = new Date();
            checkOutDate.setDate(checkOutDate.getDate() + 1);
            this.spreadsheet.workbook.worksheets(0).rows(7).cells(1).dataValidationRule = valRule6;
            this.spreadsheet.workbook.worksheets(0).rows(7).cells(1).value = checkOutDate.toLocaleDateString();
            this.spreadsheet.workbook.worksheets(0).rows(7).cells(0).value = "Check Out Date";
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SpreadsheetDataValidation/>);
```


<div class="divider--half"></div>

## Dependencies

When setting up the data validation rules you will need to import the rules you want to use.

<!-- React -->

```ts
import { AnyValueDataValidationRule } from 'igniteui-react-excel';
import { CustomDataValidationRule } from 'igniteui-react-excel';
import { DataValidationErrorStyle } from 'igniteui-react-excel';
import { ListDataValidationRule } from 'igniteui-react-excel';
import { OneConstraintDataValidationOperator } from 'igniteui-react-excel';
import { OneConstraintDataValidationRule } from 'igniteui-react-excel';
import { TwoConstraintDataValidationOperator } from 'igniteui-react-excel';
import { TwoConstraintDataValidationRule } from 'igniteui-react-excel';
```

<div class="divider--half"></div>

## Usage

The following snippet shows how you can setup the data validation rules

```ts
// this validation rule has only input message set
const valRule1 = new AnyValueDataValidationRule();
valRule1.inputMessageTitle = "Hotel room booking form";
valRule1.inputMessageDescription = "Please us the form below to choose your accommodation type";
this.spreadsheet.workbook.worksheets(0).rows(1).cells(0).dataValidationRule = valRule1;
this.spreadsheet.workbook.worksheets(0).rows(1).cells(0).value = "Hotel room booking form";

// this validation rule has a two constraint validation set
const valRule2 = new TwoConstraintDataValidationRule();
valRule2.validationOperator = TwoConstraintDataValidationOperator.Between;
valRule2.setLowerConstraint(1);
valRule2.setUpperConstraint(4);
valRule2.inputMessageTitle = "Adults";
valRule2.inputMessageDescription = "Adults count must be min, 1 and max. 4.";
valRule2.errorMessageTitle = "Adult requirement not met";
valRule2.errorMessageDescription = "There must be between 1 and 4 adults per room.";
valRule2.errorStyle = DataValidationErrorStyle.Information;
this.spreadsheet.workbook.worksheets(0).rows(3).cells(1).dataValidationRule = valRule2;
this.spreadsheet.workbook.worksheets(0).rows(3).cells(1).value = 1;
this.spreadsheet.workbook.worksheets(0).rows(3).cells(0).value = "Adults";

// this validation rule has a custom formula validation set
const valRule3 = new CustomDataValidationRule();
const separator = getLocaleNumberSymbol(window.navigator.language, NumberSymbol.Group);
valRule3.setFormula("=AND((B4+B5)<5 " + separator + " (B4+B5)>0)", null);
valRule3.inputMessageTitle = "Children";
valRule3.inputMessageDescription = "Children and adults cannot be more than 4 per room.";
valRule3.errorMessageTitle = "Room limit exceeded";
valRule3.errorMessageDescription = "The maximum persons per room is 4.";
valRule3.errorStyle = DataValidationErrorStyle.Warning;
this.spreadsheet.workbook.worksheets(0).rows(4).cells(1).dataValidationRule = valRule3;
this.spreadsheet.workbook.worksheets(0).rows(4).cells(1).value = 0;
this.spreadsheet.workbook.worksheets(0).rows(4).cells(0).value = "Children";

// this validation rule has a list of accepted choices validation set
const valRule4 = new ListDataValidationRule();
valRule4.setValues(["FB", "HB", "BB" ]);
valRule4.inputMessageTitle = "Servicing";
valRule4.inputMessageDescription = "Allowed values: FB (Full board - breakfast, lunch, and dinner)" +
", HB (Half board - breakfast and dinner), BB (Bed and breakfast)";
valRule4.errorMessageTitle = "Invalid Option";
valRule4.errorMessageDescription = "Please choose FB, HB, or BB";
valRule4.errorStyle = DataValidationErrorStyle.Stop;
this.spreadsheet.workbook.worksheets(0).rows(5).cells(1).dataValidationRule = valRule4;
this.spreadsheet.workbook.worksheets(0).rows(5).cells(1).value = "FB";
this.spreadsheet.workbook.worksheets(0).rows(5).cells(0).value = "Servicing";

// this validation rule has a single constraint validation set
const valRule5 = new OneConstraintDataValidationRule();
valRule5.inputMessageTitle = "Check In Date";
const checkinDate = new Date();
valRule5.inputMessageDescription = "The hotel operates from" + checkinDate;
valRule5.validationOperator = OneConstraintDataValidationOperator.GreaterThanOrEqualTo;
valRule5.setConstraint(checkinDate);
this.spreadsheet.workbook.worksheets(0).rows(6).cells(1).dataValidationRule = valRule5;
this.spreadsheet.workbook.worksheets(0).rows(6).cells(1).value = checkinDate.toLocaleDateString();
this.spreadsheet.workbook.worksheets(0).rows(6).cells(0).value = "Check In Date";

// this validation rule has a single constraint validation set
const valRule6 = new OneConstraintDataValidationRule();
valRule6.inputMessageTitle = "Check Out Date";
valRule6.inputMessageDescription = "The check out date must be greater than the check in date";
valRule6.validationOperator = OneConstraintDataValidationOperator.GreaterThan;
valRule6.setConstraintFormula("=B7", null);
const checkOutDate = new Date();
checkOutDate.setDate(checkOutDate.getDate() + 1);
this.spreadsheet.workbook.worksheets(0).rows(7).cells(1).dataValidationRule = valRule6;
this.spreadsheet.workbook.worksheets(0).rows(7).cells(1).value = checkOutDate.toLocaleDateString();
this.spreadsheet.workbook.worksheets(0).rows(7).cells(0).value = "Check Out Date";
```

## API References

- [`IgrSpreadsheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet.igrspreadsheet.html)
