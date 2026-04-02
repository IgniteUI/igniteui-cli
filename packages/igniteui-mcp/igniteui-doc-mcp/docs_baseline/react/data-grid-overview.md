---
title: React Data Grid Component | Real-Time React Tables | Infragistics
_description: Infragistics' React grid component helps you create a fast, real-time react data grid. Learn how Ignite UI for React can help you better display your data!
_keywords: React Table, Data Grid, overview, Ignite UI for React, data binding, Infragistics
mentionedTypes: ["Grid", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: Table / Grid
---

# React Data Grid Overview

The Ignite UI for React Data Table / Data Grid is a tabular React grid component that allows you to quickly bind and display your data with little coding or configuration. Features of the React data grid include filtering, sorting, templates, row selection, row grouping, row pinning and movable columns. The React tables are optimized for live, streaming data, with the ability to handle unlimited data set size in number of rows or columns.

## React Data Grid Example

This demo implements some of the features that are available in the Grid:
Filtering, Grouping, Pin/Unpin columns, Reposition columns, Sorting, and Summaries

```typescript
export class DataGridSharedData {

    public static getEmployees(count?: number): any[] {
        if (count === undefined) {
            count = 250;
        }

        const employees: any[] = [];
        let maleCount: number = 10;
        let femaleCount: number = 10;
        for (let i = 0; i < count; i++) {
            const age: number = Math.round(this.getRandomNumber(20, 40));
            const gender: string = this.getRandomGender();
            const firstName: string = this.getRandomNameFirst(gender);
            const lastName: string = this.getRandomNameLast();
            const street: string = this.getRandomStreet();
            const country: string = this.getRandomItem(this.countries);
            const city: string = this.getRandomCity(country);
            const generation = Math.floor(age / 10) * 10 + "s";
            const email: string = firstName.toLowerCase() + "@" + this.getRandomItem(this.emails);
            const website: string = firstName.toLowerCase() + "-" + this.getRandomItem(this.websites);
            let photoPath: any;

            if (gender === "male") {
                maleCount++;
                if (maleCount > 39) {
                    maleCount = 10;
                }
                photoPath = this.getPhotoMale(maleCount);
            }
            else {
                femaleCount++;
                if (femaleCount > 39) {
                    femaleCount = 10;
                }
                photoPath = this.getPhotoFemale(femaleCount);
            }

            let person: any = {};
            person.Address = street + "," + city;
            person.Age = age;
            person.Birthday = this.getBirthday(age);
            person.City = city;
            person.Country = country;
            person.CountryFlag = this.getCountryFlag(country);
            person.Email = email;
            person.FirstName = firstName;
            person.Gender = this.getGenderPhoto(gender);
            person.Generation = generation;
            person.ID = this.pad(i + 1, 5);
            person.LastName = lastName;
            person.Name = firstName + " " + lastName;
            person.Phone = this.getRandomPhone();
            person.Photo = photoPath;
            person.Street = street;
            person.Salary = this.getRandomNumber(40, 200) * 1000;
            person.Sales = this.getRandomNumber(200, 980) * 1000;
            person.Website = website;
            person.Productivity = this.getProductivity();

            if (person.Salary < 50000) {
                person.Income = "Low";
            } else if (person.Salary < 100000) {
                person.Income = "Average";
            } else {
                person.Income = "High";
            }

            employees.push(person);
        }
        return employees;
    }

    public static getProductivity(weekCount?: number): any[] {
        if (weekCount === undefined) {
            weekCount = 52;
        }
        const productivity: any[] = [];
        for (let w = 0; w < weekCount; w++) {
            const value = this.getRandomNumber(-50, 50);
            productivity.push({Value: value, Week: w});
        }
        return productivity;
    }

    public static getSales(count?: number): any[] {
        if (count === undefined) {
            count = 250;
        }

        const names: string[] = [
            "Intel CPU", "AMD CPU",
            "Intel Motherboard", "AMD Motherboard", "NVIDIA Motherboard",
            "NVIDIA GPU", "GIGABYTE GPU", "Asus GPU", "AMD GPU", "MSI GPU",
            "Corsair Memory", "Patriot Memory", "Skill Memory",
            "Samsung HDD", "WD HDD", "Seagate HDD", "Intel HDD",
            "Samsung SSD", "WD SSD", "Seagate SSD", "Intel SSD",
            "Samsung Monitor", "Asus Monitor", "LG Monitor", "HP Monitor" ];
        const countries: string[] = ["United-States", "United-Kingdom", "France", "Canada", "Poland", "Japan", "Germany"];
        const status: string[] = ["Packing", "Shipped", "Delivered"];
        const sales: any[] = [];

        for (let i = 0; i < count; i++) {
            const price = this.getRandomNumber(100, 900);
            const items = this.getRandomNumber(10, 80);
            const value = price * items;
            const margin = this.getRandomNumber(3, 10);
            const profit = Math.round((price * margin / 100) * items);
            const country = this.getRandomItem(countries);
            sales.push({
                BundlePrice: price,
                ProductPrice: price,
                Margin: margin,
                OrderDate: this.getRandomDate(new Date(2012, 0, 1), new Date()),
                OrderItems: items,
                OrderValue: value, //  Math.round(value / 1000) + "," + Math.round(value % 1000),
                ProductID: 1001 + i,
                ProductName: this.getRandomItem(names),
                Profit: profit,
                Countries: country,
                CountryFlag: this.getCountryFlag(country),
                Status: this.getRandomItem(status)
            });
        }
        return sales;
    }

    public static getHouses(count?: number): any[] {
        if (count === undefined) {
            count = 250;
        }

        const houses: any[] = [];
        const property: string[] = [ "Townhouse", "Single", "Condo", "Villa"];
        const emails: string[] = [ "estates.com", "remax.com", "zillow.com", "realtor.com", "coldwell.com"];
        const countries: string[] = ["United-States", "United-Kingdom", "France", "Canada", "Poland", "Japan", "Germany"];

        for (let i = 0; i < count; i++) {
            const year: number = this.getRandomNumber(1950, 2015);
            const age: number = 2020 - year;

            const gender: string = this.getRandomGender();
            const firstName: string = this.getRandomNameFirst(gender);
            const lastName: string = this.getRandomNameLast();
            const initials = firstName.substr(0, 1).toLowerCase();
            const email: string = initials + lastName.toLowerCase() + "@" + this.getRandomItem(emails);

            const street: string = this.getRandomStreet();
            const country: string = this.getRandomItem(countries);
            const city: string = this.getRandomCity(country);

            houses.push({
                Address: street + "," + city,
                Age: age,
                Agent: firstName + " " + lastName,
                Area: this.getRandomNumber(50, 300),
                Baths: this.getRandomNumber(1, 3),
                Built: year,
                City: city,
                Country: country,
                CountryFlag: this.getCountryFlag(country),
                Email: email,
                ID: this.pad(i + 1, 5),
                Phone: this.getRandomPhone(),
                Price: this.getRandomNumber(210, 900) * 1000,
                Property: this.getRandomItem(property),
                Rooms: this.getRandomNumber(2, 5),
                SaleDate: this.getRandomDate(new Date(2015, 0, 1), new Date()),
                Street: street,
            });
        }
        return houses;
    }

    private static websites: string[] = [ ".com", ".gov", ".edu", ".org"];
    private static emails: string[] = [ "gmail.com", "yahoo.com", "twitter.com"];
    private static genders: string[] = ["male", "female"];
    private static maleNames: string[] = ["Kyle", "Oscar", "Ralph", "Mike", "Bill", "Frank", "Howard", "Jack", "Larry", "Pete", "Steve", "Vince", "Mark", "Alex", "Max", "Brian", "Chris", "Andrew", "Martin", "Mike", "Steve", "Glenn", "Bruce"];
    private static femaleNames: string[] = ["Gina", "Irene", "Katie", "Brenda", "Casey", "Fiona", "Holly", "Kate", "Liz", "Pamela", "Nelly", "Marisa", "Monica", "Anna", "Jessica", "Sofia", "Isabella", "Margo", "Jane", "Audrey", "Sally", "Melanie", "Greta", "Aurora", "Sally"];
    private static lastNames: string[] = ["Adams", "Crowley", "Ellis", "Martinez", "Irvine", "Maxwell", "Clark", "Owens", "Rooney", "Lincoln", "Thomas", "Spacey", "MOrgan", "King", "Newton", "Fitzgerald", "Holmes", "Jefferson", "Landry", "Berry", "Perez", "Spencer", "Starr", "Carter", "Edwards", "Stark", "Johnson", "Fitz", "Chief", "Blanc", "Perry", "Stone", "Williams", "Lane", "Jobs", "Adams", "Power", "Tesla"];
    private static countries: string[] = ["United-States", "United-Kingdom", "France", "Canada", "Poland"];
    private static citiesUS: string[] = ["New York", "Los Angeles", "Miami", "San Francisco", "San Diego", "Las Vegas"];
    private static citiesUK: string[] = ["London", "Liverpool", "Manchester"];
    private static citiesFR: string[] = ["Paris", "Marseille", "Lyon"];
    private static citiesCA: string[] = ["Toronto", "Vancouver", "Montreal"];
    private static citiesPL: string[] = ["Krakow", "Warsaw", "Wroclaw", "Gdansk"];
    private static citiesJP: string[] = ["Tokyo", "Osaka", "Kyoto", "Yokohama"];
    private static citiesGR: string[] = ["Berlin", "Bonn", "Cologne", "Munich", "Hamburg"];
    private static roadSuffixes: string[] = ["Road", "Street", "Way"];
    private static roadNames: string[] = ["Main", "Garden", "Broad", "Oak", "Cedar", "Park", "Pine", "Elm", "Market", "Hill"];

    private static getRandomNumber(min: number, max: number): number {
        return Math.round(min + Math.random() * (max - min));
    }

    private static getRandomItem(array: any[]): any {
        const index = Math.round(this.getRandomNumber(0, array.length - 1));
        return array[index];
    }

    private static getRandomDate(start: Date, end: Date): Date {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    private static getRandomPhone(): string {
        const phoneCode = this.getRandomNumber(100, 900);
        const phoneNum1 = this.getRandomNumber(100, 900);
        const phoneNum2 = this.getRandomNumber(1000, 9000);
        const phone = phoneCode + "-" + phoneNum1 + "-" + phoneNum2;
        return phone;
    }

    private static getRandomGender(): string {
        return this.getRandomItem(this.genders);
    }

    private static getRandomNameLast(): string {
        return this.getRandomItem(this.lastNames);
    }

    private static getRandomNameFirst(gender: string): string {
        if (gender === "male") {
            return this.getRandomItem(this.maleNames);
        }
        else {
            return this.getRandomItem(this.femaleNames);
        }
    }

    private static getRandomCity(country: string): string {
        if (country === "Canada") {
            return this.getRandomItem(this.citiesCA);
        } else if (country === "France") {
            return this.getRandomItem(this.citiesFR);
        } else if (country === "Poland") {
            return this.getRandomItem(this.citiesPL);
        } else if (country === "United-States") {
            return this.getRandomItem(this.citiesUS);
        } else if (country === "Japan") {
            return this.getRandomItem(this.citiesJP);
        } else if (country === "Germany") {
            return this.getRandomItem(this.citiesGR);
        } else { // if (country === "United-Kingdom") {
            return this.getRandomItem(this.citiesUK);
        }
    }

    private static getRandomStreet(): string {
        const num = Math.round(this.getRandomNumber(100, 300)).toString();
        const road = this.getRandomItem(this.roadNames);
        const suffix = this.getRandomItem(this.roadSuffixes);
        return num + " " + road + " " + suffix;
    }

    private static getBirthday(age: number): Date {
        const today: Date = new Date();
        const year: number = today.getFullYear() - age;
        const month: number = this.getRandomNumber(0, 8);
        const day: number = this.getRandomNumber(10, 27);
        return new Date(year, month, day);
    }

    private static getPhotoMale(id: number): string {
        return 'https://dl.infragistics.com/x/img/people/men/' + this.pad(id, 2) + '.png';
    }

    private static getPhotoFemale(id: number): string {
        return 'https://dl.infragistics.com/x/img/people/women/' + this.pad(id, 2) + '.png';
    }

    private static getGenderPhoto(gender: string): string {
        return 'https://dl.infragistics.com/x/img/genders/' + gender + '.png';
    }

    private static getCountryFlag(country: string): string {
        return 'https://dl.infragistics.com/x/img/flags/' + country + '.png';
    }

    private static pad(num: number, size: number): string{
        let s = num + "";
        while (s.length < size) {
            s = "0" + s;
        }
        return s;
    }

}
```
```css
.gridSparklineContainer {
    background: transparent;
    height: 100%;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 0px;
    padding: 0px;
    vertical-align: middle;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./DataGridStyles.css";
import { DataGridSharedData } from './DataGridSharedData';
import { IgrDataGridModule } from 'igniteui-react-data-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-data-grids';
import { IgrDataGrid } from 'igniteui-react-data-grids';
import { IgrDataGridToolbarModule } from "igniteui-react-data-grids";
import { IgrDataGridToolbar } from "igniteui-react-data-grids";
import { IgrTextColumn } from 'igniteui-react-data-grids';
import { IgrNumericColumn } from 'igniteui-react-data-grids';
import { IgrDateTimeColumn } from 'igniteui-react-data-grids';
import { IgrImageColumn } from 'igniteui-react-data-grids';
import { IgrTemplateColumn } from 'igniteui-react-data-grids';
import { IgrTemplateCellUpdatingEventArgs } from 'igniteui-react-data-grids';
import { IgrTemplateCellInfo } from 'igniteui-react-data-grids';
import { IIgrCellTemplateProps } from 'igniteui-react-data-grids';
import { IgrColumnGroupDescription } from 'igniteui-react-data-grids';
import { IgrColumnSummaryDescription } from 'igniteui-react-data-grids'
import { DataSourceSummaryOperand } from 'igniteui-react-core';
import { IgrSparkline } from 'igniteui-react-charts';
import { IgrSparklineModule } from 'igniteui-react-charts';

IgrDataGridModule.register();
IgrDataGridToolbarModule.register();
IgrGridColumnOptionsModule.register();
IgrSparklineModule.register();

export default class DataGridOverview extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;
    public toolbar: IgrDataGridToolbar;

    constructor(props: any) {
        super(props);

        this.data = DataGridSharedData.getEmployees(100);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                 <IgrDataGridToolbar
                    ref={this.onToolbarRef}
                    toolbarTitle="Sales Team"
                    columnChooser="true"
                    columnPinning="true"
                />
                <IgrDataGrid
                    ref={this.onGridRef}
                    height="calc(100% - 2.75rem)"
                    width="100%"
                    rowHeight="50"
                    autoGenerateColumns="false"
                    dataSource={this.data}
                    defaultColumnMinWidth="100"
                    summaryScope="Root"
                    isColumnOptionsEnabled="true"
                    isGroupCollapsable="true"
                    groupHeaderDisplayMode="Combined"
                    groupSummaryDisplayMode="RowBottom"
                    columnMovingMode="Deferred"
                    columnMovingAnimationMode="SlideOver"
                    columnMovingSeparatorWidth="2"
                    columnShowingAnimationMode="slideFromRightAndFadeIn"
                    columnHidingAnimationMode="slideToRightAndFadeOut"
                    selectionMode="SingleRow"
                    cornerRadiusTopLeft="0"
                    cornerRadiusTopRight="0"
                    >
                    <IgrImageColumn field="Photo" headerText="Photo" contentOpacity="1"
                    horizontalAlignment="stretch" width="110" paddingTop="5" paddingBottom="5"  paddingRight="10"/>
                    <IgrTextColumn field="Name" width="*>140"/>

                    <IgrTemplateColumn field="Sales" headerText="Sales" horizontalAlignment="center"
                    paddingLeft="10" paddingRight="0"
                        cellUpdating={this.onSalesCellUpdating} width="*>160" />

                    <IgrTemplateColumn field="Productivity" headerText="Productivity"
                    horizontalAlignment="center" width="*>150"
                    template={this.getProductivityChart} />

                    <IgrNumericColumn field="Salary" positivePrefix="$"
                    showGroupingSeparator="true" width="*>160"/>

                    <IgrDateTimeColumn field="Birthday" headerText="Date of Birth"
                    horizontalAlignment="stretch" width="*>160" paddingRight="10"/>
                    <IgrImageColumn field="CountryFlag" headerText="Country" contentOpacity="1"
                    horizontalAlignment="stretch" width="130" paddingTop="5" paddingBottom="5" />

                    <IgrTemplateColumn field="Address" headerText="Address" horizontalAlignment="left"
                        cellUpdating={this.onAddressCellUpdating} width="*>160" />

                    <IgrTemplateColumn field="Phone" horizontalAlignment="center"
                        cellUpdating={this.onPhoneCellUpdating} width="140" />

                    {/* <IgrTemplateColumn field="Email" horizontalAlignment="center"
                    cellUpdating={this.onEmailCellUpdating} width="160" /> */}

                    {/* <IgrTextColumn field="Country" width="*>140" horizontalAlignment="center"/> */}
                    <IgrTextColumn field="Income" width="*>130" horizontalAlignment="center"/>
                    <IgrTextColumn field="Age" width="*>110" horizontalAlignment="center"/>
               </IgrDataGrid>
            </div>
        );
    }

    public onGridRef = (grid: IgrDataGrid) => {
        if (!grid) { return; }

        this.grid = grid;
        this.grid.actualDataSource.isSectionExpandedDefault = true;

        if (this.toolbar !== null) {
            this.toolbar.targetGrid = this.grid;
        }
    }

    public onToolbarRef = (toolbar: IgrDataGridToolbar) => {
          this.toolbar = toolbar;
          if (this.toolbar !== null) {
              this.toolbar.targetGrid = this.grid;
          }
    }

    public componentDidMount() {

        const peopleGroup = new IgrColumnGroupDescription();
        peopleGroup.field = "Country";
        peopleGroup.displayName = "Country";
        this.grid.groupDescriptions.add(peopleGroup);

        const incomeGroup = new IgrColumnGroupDescription();
        incomeGroup.field = "Income";
        incomeGroup.displayName = "Income";
        this.grid.groupDescriptions.add(incomeGroup);

        const peopleCount = new IgrColumnSummaryDescription();
        peopleCount.field = "Photo";
        peopleCount.operand = DataSourceSummaryOperand.Count;
        this.grid.summaryDescriptions.add(peopleCount);

        const sales = new IgrColumnSummaryDescription();
        sales.field = "Sales";
        sales.operand = DataSourceSummaryOperand.Max;
        sales.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
        this.grid.summaryDescriptions.add(sales);

        const salary = new IgrColumnSummaryDescription();
        salary.field = "Salary";
        salary.operand = DataSourceSummaryOperand.Average;
        salary.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
        this.grid.summaryDescriptions.add(salary);
    }

    public getProductivityChart = (props: IIgrCellTemplateProps) => {
        const info = props.dataContext as IgrTemplateCellInfo;
        return (
            <div className="container">
               <IgrSparkline
                   height="30px" width="100%"
                   displayType="Column"
                   dataSource={info.rowItem.Productivity}
                   valueMemberPath="Value"
                   labelMemberPath="Week"
                   lineThickness={2}
                   brush="rgb(21, 190, 6)"
                   negativeBrush="rgb(211, 17, 3)" />
            </div>
        );
    }

    public onAddressCellUpdating = (s: IgrTemplateColumn, e: IgrTemplateCellUpdatingEventArgs) => {
        const content = e.content as HTMLDivElement;
        let span1: HTMLSpanElement | null = null;
        let span2: HTMLSpanElement | null = null;
        const info = e.cellInfo as IgrTemplateCellInfo;
        const item = info.rowItem;

        if (content.childElementCount === 0) {

            span1 = document.createElement("span");
            span2 = document.createElement("span");

            content.style.fontFamily = "Verdana";
            content.style.fontSize = "13px";
            content.style.verticalAlign = "center";
            content.style.lineHeight = "normal";
            content.style.display = "flex";
            content.style.flexDirection = "column";
            content.style.justifyContent = "center";
            content.style.height = "100%";
            content.style.width = "100%";
            content.appendChild(span1);
            content.appendChild(span2);
        }
        else {
            span1 = content.children[0] as HTMLSpanElement;
            span2 = content.children[1] as HTMLSpanElement;
        }

        if (span1 && span2) {
            span1.textContent = item.Street;
            span2.textContent = item.City + ", " + item.Country;
        }
    }

    public onSalesCellUpdating = (s: IgrTemplateColumn, e: IgrTemplateCellUpdatingEventArgs) => {
        const content = e.content as HTMLDivElement;
        const info = e.cellInfo as IgrTemplateCellInfo;
        const sales = info.rowItem.Sales;
        let gaugeValue: HTMLSpanElement | null = null;
        let gaugeBar: HTMLDivElement | null = null;

        if (content.childElementCount === 0) {
            gaugeValue = document.createElement("span");
            gaugeValue.style.margin = "0px";
            gaugeValue.style.marginTop = "2px";
            gaugeValue.style.padding = "0px";
            gaugeValue.style.fontFamily = "Verdana";
            gaugeValue.style.fontSize = "13px";
            gaugeValue.style.textAlign = "center";

            gaugeBar = document.createElement("div");
            gaugeBar.style.background = "#7f7f7f";
            gaugeBar.style.padding = "0px";
            gaugeBar.style.margin = "0px";
            gaugeBar.style.height = "6px";
            gaugeBar.style.left = "0px";
            gaugeBar.style.top = "0px";
            gaugeBar.style.position = "relative";

            const gauge = document.createElement("div");
            gauge.style.background = "#dddddd";
            gauge.style.padding = "0px";
            gauge.style.margin = "0px";
            gauge.style.height = "6px";
            gauge.style.marginTop = "8px";
            gauge.style.width = "100%";
            gauge.appendChild(gaugeBar);

            content.style.verticalAlign = "center";
            content.style.lineHeight = "normal";
            content.style.display = "flex";
            content.style.flexDirection = "column";
            content.style.justifyContent = "center";
            content.style.height = "100%";
            content.style.width = "calc(100% - 2rem)";
            content.style.marginRight = "1rem";
            content.style.marginLeft = "1rem";

            content.appendChild(gauge);
            content.appendChild(gaugeValue);
        } else {
            const gauge = content.children[0];
            gaugeBar = gauge.children[0] as HTMLDivElement;
            gaugeValue = content.children[1] as HTMLSpanElement;
        }

        // conditional formatting:
        if (sales < 400000) {
            gaugeValue.style.color = "rgb(211, 17, 3)";
            gaugeBar.style.background = "rgb(211, 17, 3)";
        }
        else if (sales < 650000) {
            gaugeValue.style.color = "Orange";
            gaugeBar.style.background = "Orange";
        }
        else {
            gaugeValue.style.color = "rgb(21, 190, 6)";
            gaugeBar.style.background = "rgb(21, 190, 6)";
        }
        gaugeValue.textContent = "$" + sales / 1000 + ",000";

        let gaugeWidth = (sales / 990000) * 100;
        gaugeWidth = Math.min(100, gaugeWidth);
        gaugeBar.style.width = gaugeWidth + "%";
    }

    public onEmailCellUpdating = (s: IgrTemplateColumn, e: IgrTemplateCellUpdatingEventArgs) => {
        const content = e.content as HTMLDivElement;
        const info = e.cellInfo as IgrTemplateCellInfo;
        const item = info.rowItem;
        let link: HTMLAnchorElement;

        if (content.childElementCount === 0) {
            link = document.createElement("a");

            content.style.verticalAlign = "center";
            content.style.marginTop = "15px";
            content.style.lineHeight = "normal";
            content.style.display = "inline-grid";
            content.style.fontFamily = "Verdana";
            content.style.fontSize = "13px";
            content.style.color = "#4286f4";
            content.style.width = "100%";

            content.appendChild(link);
        } else {
            link = content.children[0] as HTMLAnchorElement;
        }

        link.href = "mailto:" + item.Email + "?Subject=Hello%20Friend";
        link.textContent = item.Email;
    }

    public onPhoneCellUpdating = (s: IgrTemplateColumn, e: IgrTemplateCellUpdatingEventArgs) => {
        const content = e.content as HTMLDivElement;

        const info = e.cellInfo as IgrTemplateCellInfo;
        const item = info.rowItem;
        let link: HTMLAnchorElement;

        if (content.childElementCount === 0) {

            link = document.createElement("a");

            content.style.verticalAlign = "center";
            content.style.marginTop = "15px";
            content.style.lineHeight = "normal";
            content.style.display = "inline-block";
            // content.style.display = "inline-grid";
            content.style.fontFamily = "Verdana";
            content.style.fontSize = "13px";
            content.style.color = "#4286f4";
            content.style.width = "100%";

            content.appendChild(link);
        } else {
            link = content.children[0] as HTMLAnchorElement;
        }

        link.href = "tel:" + item.Phone;
        link.textContent = item.Phone;
    }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataGridOverview/>);
```


<div class="divider--half"></div>

## Getting Started

### Dependencies

When installing the React grid package, the core package must also be installed.

```cmd
npm install --save igniteui-react-core
npm install --save igniteui-react-grids
npm install --save igniteui-react-inputs
```

### Component Modules

The [`IgrDataGrid`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html) requires the following modules:

```ts
import { IgrDataGridModule } from 'igniteui-react-data-grids';
import { IgrDataGrid } from 'igniteui-react-data-grids';

IgrDataGridModule.register();
```

<div class="divider--half"></div>

### Optional Modules

The optional [`IgrDataGrid`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html) features, seen above, requires the following modules:

```ts
import { IgrGridColumnOptionsModule } from 'igniteui-react-data-grids';
import { IgrDataGridToolbarModule } from "igniteui-react-data-grids";
import { IgrSparklineModule } from 'igniteui-react-charts';

IgrGridColumnOptionsModule.register();
IgrDataGridToolbarModule.register();
IgrSparklineModule.register();
```

<div class="divider--half"></div>

### Sample Data Source

Now that the React data grid module is imported, next is the basic configuration of the React grid that binds to local data.

```ts
    this.data = [{
        Discontinued: false,
        OrderDate: new Date("2012-02-12"),
        ProductID: 1,
        ProductName: "Chai",
        QuantityPerUnit: "10 boxes x 20 bags",
        ReorderLevel: 10,
        UnitPrice: 18.0000,
        UnitsInStock: 39
    }, {
        Discontinued: false,
        OrderDate: new Date("2003-03-17"),
        ProductID: 2,
        ProductName: "Chang",
        QuantityPerUnit: "24 - 12 oz bottles",
        ReorderLevel: 25,
        UnitPrice: 19.0000,
        UnitsInStock: 17
    }, {
        Discontinued: false,
        OrderDate: new Date("2006-03-17"),
        ProductID: 3,
        ProductName: "Aniseed Syrup",
        QuantityPerUnit: "12 - 550 ml bottles",
        ReorderLevel: 25,
        UnitPrice: 10.0000,
        UnitsInStock: 13
    }, {
        Discontinued: false,
        OrderDate: new Date("2016-03-17"),
        ProductID: 4,
        ProductName: "Chef Antony Cajun Seasoning",
        QuantityPerUnit: "48 - 6 oz jars",
        ReorderLevel: 0,
        UnitPrice: 22.0000,
        UnitsInStock: 53
    }, {
        Discontinued: true,
        OrderDate: new Date("2011-11-11"),
        ProductID: 5,
        ProductName: "Chef Antony Gumbo Mix",
        QuantityPerUnit: "36 boxes",
        ReorderLevel: 0,
        UnitPrice: 21.3500,
        UnitsInStock: 0
    }];
```

### Auto-Generate Columns

The following code demonstrates how to bind the React data grid to the above local data.

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    dataSource={this.data}
    autoGenerateColumns="true"
    defaultColumnMinWidth="100"
    summaryScope="Root"
    isColumnOptionsEnabled="true"
    isGroupCollapsable="true"
    groupSummaryDisplayMode="RowBottom"
    columnMovingMode="Deferred"
    columnMovingAnimationMode="SlideOver"
    columnMovingSeparatorWidth="2"
    columnShowingAnimationMode="slideFromRightAndFadeIn"
    columnHidingAnimationMode="slideToRightAndFadeOut"
    selectionMode="SingleRow"
    cornerRadiusTopLeft="0"
    cornerRadiusTopRight="0"
    />
```

### Manually Define Columns

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    dataSource={this.data}
    autoGenerateColumns="false">
    <IgrNumericColumn field="ProductID" headerText="Product ID"/>
    <IgrTextColumn field="ProductName" headerText="Product Name"/>
    <IgrTextColumn field="QuantityPerUnit" headerText="Quantity Per Unit"/>
    <IgrNumericColumn field="UnitsInStock" headerText="Units In Stock"/>
    <IgrDateTimeColumn field="OrderDate" headerText="Order Date"/>
</IgrDataGrid>
```

### Styling Columns

The following code demonstrates how to style specific columns using the provided column's properties.

```tsx
<IgrTextColumn
    background="SkyBlue"
    textStyle="Italic Bold 16pt Times New Roman"
/>
```

## Additional Resources

- [Accessibility Compliance](accessibility.md)
- [Cell Activation](cell-activation.md)
- [Grid Editing](cell-editing.md)
- [Cell Selection](cell-selection.md)
- [Column Animation](column-animation.md)
- [Column Chooser](column-chooser.md)
- [Column Filtering](column-filtering.md)
- [Column Moving](column-moving.md)
- [Column Options](column-options.md)
- [Column Resizing](column-resizing.md)
- [Column Sorting](column-sorting.md)
- [Column Types](column-types.md)
- [Performance](performance.md)
- [Row Pinning](row-pinning.md)
- [Row Grouping](row-grouping.md)
- [Row Highlighting](row-highlighting.md)

<!-- TODO fix build flagging list items -->

<!-- - [Row Paging](row-paging.md) -->

## API References

- [`IgrDataGrid`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html)
