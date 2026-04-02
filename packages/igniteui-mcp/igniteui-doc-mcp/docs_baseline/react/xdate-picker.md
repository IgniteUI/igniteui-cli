---
title: React XDate Picker | Data Visualization Tools | Infragistics
_description: Infragistics' React xdate picker component helps your users select dates. Improve your graphs and visualization with Ignite UI for React!
_keywords: React xdate picker, drop down, Ignite UI for React, Infragistics
mentionedTypes: ["XDatePicker"]
_tocName: XDate Picker
_premium: true
---

# React XDate Picker Overview

The XDate Picker component allows users to use a drop-down calendar UI allowing the intuitive selection of a day, month and year. This can be helpful when an application user needs to select specific dates, and multiple editors can be combined to create a date-range UI.

> [!WARNING]
> The `XDatePicker` component is deprecated from version 18.7.0 of Ignite UI for React. For the latest supported Ignite UI for React Date Picker component refer to its respective page under "Scheduling".

## React XDate Picker Example

This sample demonstrates how to create `XDatePicker` with option to select a single date.

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrXDatePicker, IgrXDatePickerModule } from 'igniteui-react-inputs';

IgrXDatePickerModule.register();

export default class DatePickerOverview extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.onDatePickerRef = this.onDatePickerRef.bind(this);
    }

    public onDatePickerRef(datePicker: IgrXDatePicker) {
        if (!datePicker) return;

        datePicker.value = new Date(Date.now());
        datePicker.showTodayButton = true;
        datePicker.showWeekNumbers = true;
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container">
                    <IgrXDatePicker ref={this.onDatePickerRef} height="50px" width="220px" />
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DatePickerOverview/>);
```


## Dependencies

When installing the XDate Picker component, the core and inputs packages must also be installed.

```cmd
npm install --save igniteui-react-core
npm install --save igniteui-react-inputs
npm install --save igniteui-react-layouts
```

## Component Modules

The XDate Picker component requires the following modules to be registered:

```ts
import { IgrXDatePickerModule } from 'igniteui-react-inputs';

IgrXDatePickerModule.register();
```

<div class="divider--half"></div>

## Usage

The React XDate Picker editor component consists of three default parts - the text area, a calendar drop-down button, and a clear button. These areas are described below:

- Text Area: This displays the selected date, stored in the `Value` property of the editor.

- Calendar: Clicking the calendar button will open the calendar drop-down of the XDate Picker. The calendar will open to show the month of the currently selected `Value`, if there is one. If a `Value` is not specified, the calendar will show the month corresponding to the current date. The month at the top can be clicked to show a list of months, and the same applies for the year. There are also arrow buttons to the left and right of the month and year visualization that will increment and decrement the shown month chronologically.

- Clear Button: The 'x' icon will clear the current value.

| Property | Type | Description |
| ---------|------|------------ |
| `IconColor` | string | Changes the color of the calendar button. |
| `AllowTextInput`  |  bool   |  The **xdate** picker's value can be typed-in and modified by toggling this property to true. |
| `DateFormat` | enum | Defaults to DateShort e.g. 'mm/dd/yyyy'. When set to DateLong, the date displayed in the editor will appear as e.g. Wednesday, April 14, 2021. |
| `FirstDayOfWeek` | enum | Defaults to Sunday. A given day of the week will be used as the first day in each weekly row of the calendar, e.g. Monday through Sunday. |
| `FormatString` | string  | When DateShort is used, the date's format can be configured e.g. 'dd/mm/yyyy'. Note, if the `DateFormat`'s DateLong and `FormatString` are set then the `DateFormat` is ignored. |
| `Label`  |  string | Displays custom text above the date in the top-left corner of the XDate Picker. |
| `MinDate` | DateTime | Restricts earlier dates from being selected or viewed. |
| `MaxDate` | DateTime | Restricts later dates from being selected or viewed. |
| `Placeholder` | string  |  A custom string to be displayed when the value within the edit portion of the calendar is cleared. |
| `ShowClearButton` | bool  |  Defaults to true, the clear button is directly to the left of the calendar button, visualized by an X. When clicked, it will clear the `Value` of the XDate Picker. The clear button's visibility can be toggled on and off. |
| `ShowTodayButton`| bool  |  The today is directly below the dates when the calendar is opened. When clicked, it will select the current date. The today button's visibility can be toggled on and off. |
| `ShowWeekNumbers` | bool | Week numbers can be displayed as a number, at the left of every row of dates, in the drop down portion of the XDate Picker. The week number's visibility can be toggled on and off. |
| `FirstWeekOfYear` | enum | Configures the start of the week numbers for the entire year. Can be set to FirstDay, FirstFourDayWeek, FirstFullWeek. |
| `OpenOnFocus` | bool | By default, the dropdown portion of the XDate Picker is opened on single click, forcing the user to click the calendar button to drop down the calendar. |
| `Value` | date | Sets the value of the XDate Picker and selects it in the dropdown calendar. |

Users can also customize the XDate Picker's font by using the various text properties of the control. They are: `TextColor`, `TextFontFamily`, `TextFontSize`, `TextFontStyle`, and `TextFontWeight`.

### Editing

The following example demonstrates how to enable editing in the `XDatePicker`.

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // styles shared between all samples

import { IgrXDatePicker, IgrXDatePickerModule } from 'igniteui-react-inputs';

IgrXDatePickerModule.register();

export default class DatePickerEditing extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.onDatePickerRef = this.onDatePickerRef.bind(this);
    }

    public onDatePickerRef(datePicker: IgrXDatePicker){
        
        if(!datePicker) return;

        datePicker.value = new Date(Date.now());
        datePicker.allowTextInput = true;
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container">
                    <IgrXDatePicker ref={this.onDatePickerRef} height="60px" width="220px" />
                </div>
            </div>
        );
    }
}

root.render(<DatePickerEditing/>);
```


<div class="divider--half"></div>

### Date Limits

The following example demonstrates how to restrict selected dates in the `XDatePicker`.

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // styles shared between all samples


import { IgrXDatePicker, IgrXDatePickerModule } from 'igniteui-react-inputs';

IgrXDatePickerModule.register();

export default class DatePickerDateLimits extends React.Component<any, any> {

    public datePicker: IgrXDatePicker;

    constructor(props: any) {
        super(props);
        this.onDatePickerRef = this.onDatePickerRef.bind(this);
        this.state = { minDate:  new Date().toLocaleString(), maxDate: new Date().toLocaleString() }
    }

    public onDatePickerRef(datePicker: IgrXDatePicker){
        if (!datePicker) { return; }

        this.datePicker = datePicker;
        datePicker.value = new Date(Date.now());
        let year = datePicker.value.getFullYear();
        let month = datePicker.value.getMonth();
        let lastDayOfMonth = new Date(year, month + 1, 0);
        this.datePicker.minDate = new Date(year, month, 1);
        this.datePicker.maxDate = lastDayOfMonth;
        this.datePicker.allowTextInput = false;

        this.setState({ minDate: new Date(year, month, 1), maxDate: lastDayOfMonth });
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options">
                    <label className="options-label">Minimum Date: {this.state.minDate.toLocaleString()}</label>
                    <label className="options-label">Maximum Date: {this.state.maxDate.toLocaleString()}</label>
                </div>
                <div className="container">

                    <IgrXDatePicker ref={this.onDatePickerRef} height="50px" width="220px" />
                </div>
            </div>
        );
    }
}

root.render(<DatePickerDateLimits/>);
```


<div class="divider--half"></div>

### Date Formats

The following example demonstrates how apply a long date in the `XDatePicker`.

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // styles shared between all samples

import { IgrXDatePicker, IgrXDatePickerModule, DateFormats } from 'igniteui-react-inputs';

IgrXDatePickerModule.register();

export default class DatePickerFormat extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.onDatePickerRef = this.onDatePickerRef.bind(this);
        this.state = { dateFormat: DateFormats.DateLong }
    }

    public onDatePickerRef(datePicker: IgrXDatePicker){
        
        if(!datePicker) return;

        datePicker.value = new Date(Date.now());
        datePicker.dateFormat = this.state.dateFormat;
        datePicker.allowTextInput = false;
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
            <div className="options horizontal">
                    <span className="options-label">Date Formats: </span>
                    <select value={this.state.dateFormat}
                        onChange={this.ondateFormatChanged}>
                        <option>DateLong</option>
                        <option>DateShort</option>
                    </select>
                </div>
                <div className="container">
                    <IgrXDatePicker ref={this.onDatePickerRef} dateFormat={this.state.dateFormat} height="60px" width="300px" />
                </div>
            </div>
        );
    }

    public ondateFormatChanged = (e: any) =>{
        const dateFormatMode = e.target.value.toString();
        this.setState({dateFormat: dateFormatMode});
    }
}

root.render(<DatePickerFormat/>);
```


<div class="divider--half"></div>

### Date Ranges

The following example demonstrates how combine multiple `XDatePicker` controls.

```css
.dateRanges {
  display: flex;
}

.caption {
  align-self: center;
  margin-left: 25px;
  margin-right: 10px;
  margin-top: 8px;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./date-picker-range.css";
import { IgrXDatePicker, IgrXDatePickerModule, IgrSelectedValueChangedEventArgs } from 'igniteui-react-inputs';

IgrXDatePickerModule.register();

export default class DatePickerRange extends React.Component<any, any> {

    public fromDatePickerRef: IgrXDatePicker;
    public toDatePickerRef: IgrXDatePicker;

    constructor(props: any) {
        super(props);
        this.onFromDatePickerRef = this.onFromDatePickerRef.bind(this);
        this.onToDatePickerRef = this.onToDatePickerRef.bind(this);
        this.fromDateChanged = this.fromDateChanged.bind(this);
        this.toDateChanged = this.toDateChanged.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="dateRanges">
                    <label className="caption">From:  </label>
                    <IgrXDatePicker ref={this.onFromDatePickerRef} height="50px" width="220px" selectedValueChanged={this.fromDateChanged}  />
                    <label className="caption">  To:  </label>
                    <IgrXDatePicker ref={this.onToDatePickerRef} height="50px" width="220px" selectedValueChanged={this.toDateChanged}/>
                </div>
            </div>
        );
    }

    public onFromDatePickerRef(picker: IgrXDatePicker) {
        this.fromDatePickerRef = picker;
        if (!picker) return;

        picker.value = new Date(Date.now());
        picker.allowTextInput = false;
    }

    public onToDatePickerRef(picker: IgrXDatePicker) {
        this.toDatePickerRef = picker;
        if (!picker) return;

        picker.value = new Date(Date.now());
        picker.allowTextInput = false;
    }

    public fromDateChanged(s: IgrXDatePicker, e: IgrSelectedValueChangedEventArgs) {
        let newDate = e.newValue;
        if (this.toDatePickerRef != null && newDate > this.toDatePickerRef.value) {
            this.toDatePickerRef.value = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() + 1);
        }
    }

    public toDateChanged(s: IgrXDatePicker, e: IgrSelectedValueChangedEventArgs) {
        let newDate = e.newValue;
        if (this.fromDatePickerRef != null && newDate < this.fromDatePickerRef.value) {
            this.fromDatePickerRef.value = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() - 1);
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DatePickerRange/>);
```


<div class="divider--half"></div>

## API References

The following is a list of API members mentioned in the above sections:

- `XDatePicker`
- `IconColor`
- `AllowTextInput`
- `DateFormat`
- `FirstDayOfWeek`
- `FormatString`
- `Label`
- `MinDate`
- `MaxDate`
- `Placeholder`
- `ShowClearButton`
- `ShowTodayButton`
- `ShowWeekNumbers`
- `FirstWeekOfYear`
- `OpenOnFocus`
- `Value`
- `TextColor`
- `TextFontFamily`
- `TextFontSize`
- `TextFontStyle`
- `TextFontWeight`
