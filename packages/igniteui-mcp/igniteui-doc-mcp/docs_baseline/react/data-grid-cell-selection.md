---
title: React Data Grid | Cell Selection | Selection | Infragistics
_description: Use cell and row selection of the Infragistics' React data grid to highlight areas of the table. Learn how to configure single or multiple row selection for the Ignite UI for React table.
_keywords: React Table, Data Grid, cell selection, Ignite UI for React, Infragistics
mentionedTypes: ["Grid", "DataGridSelectionMode"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/grid/cell-selection
_tocName: Cell Selection
_premium: true
---

# React Grid Selection

The Ignite UI for React Data Table / Data Grid supports single or multiple row and cell selection.

## React Grid Selection Example

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { DataGridSharedData } from './DataGridSharedData';
import { IgrDataGrid } from 'igniteui-react-data-grids';
import { IgrDataGridModule } from 'igniteui-react-data-grids';
import { IgrTextColumn } from 'igniteui-react-data-grids';
import { IgrNumericColumn } from 'igniteui-react-data-grids';
import { IgrDateTimeColumn } from 'igniteui-react-data-grids';
import { IgrImageColumn } from 'igniteui-react-data-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-data-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridCellSelection extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;

    constructor(props: any) {
        super(props);

        this.state = { selectionMode: "MultipleRow" }
        this.data = DataGridSharedData.getEmployees();
    }

    public onGridRef = (grid: IgrDataGrid) => {
        if (!grid) { return; }

        this.grid = grid;
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <label className="options-label">Selection Mode: </label>
                    <select className="options-select" value={this.state.selectionMode}
                        onChange={this.onSelectionModeChange}>
                        <option>None</option>
                        <option>SingleCell</option>
                        <option>SingleRow</option>
                        <option>MultipleCell</option>
                        <option>MultipleRow</option>
                        <option>RangeCell</option>
                    </select>
                    {/* <button onClick={this.onClick}>Click Me</button> */}
                </div>

                <IgrDataGrid
                    ref={this.onGridRef}
                    height="calc(100% - 40px)"
                    width="100%"
                    defaultColumnMinWidth={120}
                    autoGenerateColumns={false}
                    dataSource={this.data}
                    selectionMode={this.state.selectionMode}
                    isColumnOptionsEnabled="true">

                    <IgrTextColumn field="Name" width="*>150"/>
                    <IgrTextColumn field="Street" headerText="Street" width="*>160" />
                    <IgrTextColumn field="City" headerText="City" width="*>120" />
                    <IgrNumericColumn field="Salary" headerText="Salary" width="*>120" positivePrefix="$" showGroupingSeparator="true" />

                    <IgrImageColumn field="Photo" headerText="Photo" contentOpacity="1"
                    horizontalAlignment="center"  width="*>110"/>
                    <IgrDateTimeColumn field="Birthday" headerText="Date of Birth" width="*>170"/>

                </IgrDataGrid>
            </div>
        );
    }

    public onSelectionModeChange = (e: any) => {
        this.setState({ selectionMode: e.target.value });
        this.grid.selectionMode = e.target.value;
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataGridCellSelection/>);
```


<div class="divider--half"></div>

## Overview

Selection in the React data grid is enabled on a row and cell level and can be configured by using the [`selectionMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#selectionMode) option of the React grid. This property takes five different options, listed below:

- [`None`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.datagridselectionmode.html#None): Selection is not enabled.
- [`SingleCell`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.datagridselectionmode.html#SingleCell): Selection of a single cell is enabled.
- [`SingleRow`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.datagridselectionmode.html#SingleRow): Selection of a single row is enabled.
- [`MultipleCell`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.datagridselectionmode.html#MultipleCell): Selection of multiple cells is enabled.
- [`MultipleRow`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.datagridselectionmode.html#MultipleRow): Selection of multiple rows is enabled.
- [`RangeCell`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.datagridselectionmode.html#RangeCell): Selection of a range of multiple cells by clicking and dragging is enabled.

[`selectionBehavior`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#selectionBehavior) defaults to `ModifierBased`, where only one row or cell is selected at a time and modifier keys (CTRL) are required to multi-select items. [`selectionBehavior`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#selectionBehavior) set to `Toggle` will allow multiple rows or cells to be selected on single click only.

[`MultipleRow`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.datagridselectionmode.html#MultipleRow) includes the following functionality:

- Click and drag to select rows
- <kbd>SHIFT</kbd> and click to select multiple rows.
- <kbd>SHIFT</kbd> and press the <kbd>↑</kbd> + <kbd>↓</kbd> arrow keys to select multiple rows.

Pressing the space bar toggles selection of active row via [`MultipleRow`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.datagridselectionmode.html#MultipleRow) or [`SingleRow`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.datagridselectionmode.html#SingleRow).

## Row Range Selection

The following example demonstrates how to selected or deselected all rows in the grid. Note, [`selectionMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#selectionMode) must be set to MultipleRow.

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

    private static getRandomDate(start: Date, end: Date) {
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

    private static pad(num: number, size: number) {
        let s = num + "";
        while (s.length < size) {
            s = "0" + s;
        }
        return s;
    }

}
```
```css
/* {RepositoryWarning} */
/* {RepositoryUrl}/tree/master/templates/sample/src/index.css */

/* Note these styles are shared between all samples */
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://fonts.googleapis.com/css?family=Titillium+Web');

#root, html, body, main {
    background: transparent;
    height: 100%;
    width: 100%;
    padding: 0px;
    margin: 0px;
}

.igGridColumnChooserContainer {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    margin-top: 2px;
    margin-right: 20px;
    margin-bottom: 10px;
    padding-left: 10px;
    padding-right: 5px;
    padding-top: 10px;
    border: 1px gray;
    border-radius: 10px;
    box-shadow: 1px 1px 2px 2px rgba(50, 50, 50, 0.25);
}

.igContainer,
.igContainer-horizontal,
.igContainer-vertical,
.igContainer-full-size {
    background: white;
    display: flex;
    flex-flow: column;
    flex-wrap: nowrap; /* nowrap | wrap | wrap-reverse; */
    /* justify-content: flex-start; */
    /* justify-items: center; */
    /* align-items: center; */
    position: relative;
    overflow-y: hidden;

    min-width: 200px;
    width: calc(100% - 5px);
    height: calc(100% - 5px);
    padding: 2.5px;
    margin: 0px;
}

.igContainer-full-size {
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
}

.igContainer-vertical {
    flex-flow: column;
}

.igContainer-horizontal {
    flex-flow: row;
}

/* Used by gauges */
.igContainer-center {
    background: white;
    height: calc(100% - 1rem);
    width: calc(100% - 1rem);
    padding: 0.5rem;
    margin: 0px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* used to overlay multiple components, e.g. RadialGaugeTypeDirection */
.igContainer-relative {
    background: white;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    padding: 5px;
    margin: 0px;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    position: relative
}

.igContainer-relative-overlay {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
}

.igTitle {
    text-align: center;
    display: block;
}

.igComponent {
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
}

.igOptions,
.igOptions-horizontal,
.igOptions-vertical {
    /* background: rgb(112, 112, 111); */
    margin: 0px;
    padding-top: 0px;
    padding-bottom: 5px;
    padding-right: 0rem;
    padding-left: 0rem;
    width: 100%;
    font-size: 1rem;
    font-weight: 300;
    font-family: 'Titillium Web';
    display: inline-block;
    color: #585858;
}

.igOptions-horizontal {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.igOptions-vertical {
    display: flex;
    flex-direction: column;
}


.igOptions > label,
.igOptions > div {
    font-family: 'Titillium Web';
}

.igOptions-item {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    /* font-family: Arial, Verdana, Helvetica, "Times New Roman", Times, serif; */
    display: inline-block;
    vertical-align: center;
}

.igOptions-label {
    margin-top: 0px;
    margin-left: 0.5rem;
    margin-right: 1rem;
    margin-bottom: 5px;
    /* font-size: 11pt; */
    /* font-family: Arial, Verdana, Helvetica, "Times New Roman", Times, serif; */
    /* vertical-align: top; */
    vertical-align: center;
    padding: 0px;
    display: inline-block;
    white-space: nowrap;
    /* background: orange; */
}

.igOptions-value {
    margin-top: 0px;
    margin-left: 10px;
    margin-bottom: 5px;
    margin-right: 5px;
    /* font-size: 11pt; */
    display: inline-block;
    /* vertical-align: top; */
    width: 40px;
    padding: 0px;
    /* background-color: lime; */
}

.igOptions > slider,
.igOptions-slider {
    margin-top: 0px;
    margin-bottom: 10px;
    margin-left: 5px;
    margin-right: 20px;
    vertical-align: bottom;
    padding-top: 0px;
    min-width: 60px;
    display: inline-block;
}

.igOptions-button {
    vertical-align: center;
    margin-top: 0px;
    margin-bottom: 0px;
}

.igOptions > text,
.igOptions-input-text {
    margin-left: 10px;
    width: 150px;
    display: inline-block;
    vertical-align: center;
}

.igOptions > select,
.igOptions-input-select {
    font-size: 11pt;
    /* font-family: Arial, Verdana, Helvetica, "Times New Roman", Times, serif; */
    margin-top: 0px;
    margin-bottom: 5px;
    margin-left: 5px;
    vertical-align: center;
    padding: 4px;
    display: inline-block;
    /* background: green; */
}

.igLegend {
    --legend-item-overflow: hidden;
    width: calc(100% - 1rem);
    font-size: 0.75rem;
    /* font-family: Arial, Verdana, Helvetica, "Times New Roman", Times, serif; */
    margin-top: 0.25rem;
    /* margin-bottom: 0.25rem; */
    margin-left: 1rem;
    padding: 0px;
    display: inline-block;
    vertical-align: top;
}

.igLegend-title {
    /* margin-top: 0.7rem; */
    margin-left: 1rem;
    margin-right: 0.25rem;
    /* margin-bottom: 0.25rem; */
    padding-top: 0px;
    padding-bottom: 0px;
    padding: 0px;
    vertical-align: center;
    display: inline-block;
    white-space: nowrap;
    font-size: 15px;
}

.igFlex {
    display: flex;
    flex-direction: column; /* row | row-reverse | column | column-reverse*/
    flex-wrap: nowrap; /* nowrap | wrap | wrap-reverse; */
    /* justify-content: flex-start; */
    /* justify-items: center; */
    /* align-items: center; */
    height: calc(100% - 0px);
    width: calc(100% - 0px);
    margin: 0px;
    padding: 0px;
    position: relative;
    overflow-y: hidden;
}

/* ==================================================================================== */
/* igOverlay styles used to overlay elements in front of sample container */
/* ==================================================================================== */

.igOverlay-top-left,
.igOverlay-top-right,
.igOverlay-top-center,
.igOverlay-center,
.igOverlay-bottom-left,
.igOverlay-bottom-center,
.igOverlay-bottom-right {
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    font-family: 'Titillium Web';
    border-radius: 5px;
    border: 1px solid gray;
    padding: 0.5rem;
    color: black;
    /* background: rgba(228, 227, 227, 0.548); */
    background: rgba(148, 148, 148, 0.5);
    /* background: white; */
    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
       -khtml-user-select: none; /* Konqueror HTML */
         -moz-user-select: none; /* Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
           -o-user-select: none;
              user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
}

.igOverlay-top-left {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
}

.igOverlay-top-right {
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
}

.igOverlay-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.igOverlay-center-label {
    display: block;
    font-size: 3rem;
}

.igOverlay-top-center {
    position: absolute;
    top: 0.25rem;
    left: 50%;
    transform: translate(-50%, 0%);
}

.igOverlay-bottom-center {
    position: absolute;
    bottom: 0.25rem;
    left: 50%;
    transform: translate(-50%, 0%);
}

.igOverlay-bottom-left {
    position: absolute;
    bottom: 0.25rem;
    left: 0.25rem;
}

.igOverlay-bottom-right {
    position: absolute;
    bottom: 0.25rem;
    right: 0.25rem;
}


.igOverlay-row {
    /* background: red; */
    font-family: 'Titillium Web';
    /* margin-left: 0px;
    display: block;
    white-space: pre; */

    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.igOverlay-label {
    display: block;
    font-family: 'Titillium Web';
    font-weight: 600;
}

.igOverlay-field {
    /* display: inline-block; */
    /* font-family: Lato, Helvetica, sans-serif; */
    text-align: left;
    width: 5rem;
}

.igOverlay-value {
    /* background: yellowgreen; */
    text-align: end;
    /* display: inline-block; */
    /* font-family: Lato, Helvetica, sans-serif; */
    /* width: 75px; */
    /* white-space: pre; */
}

.igOverlay-title {
    color: black;
    display: block;
    font-family: 'Titillium Web';
    font-weight: 600;
    padding-bottom: 0.5rem;
}

/* ==================================================================================== */
/* tooltip styles used in custom tooltips of charts and maps components */
/* ==================================================================================== */

.tooltipBox {
    font-size: 0.75rem;
    font-weight: normal;
    color: "Black";
    font-family: 'Titillium Web';
}

.tooltipTitle {
    display: block;
    color: "Black";
    font-weight: bold;
    font-size: 0.75rem;
    font-family: 'Titillium Web';
    margin-left: 0px;
}

.tooltipTable {
    display: table;
    margin: 0px;
    width: 100%;
    height: 100%;
    border-spacing: 5px;
    font-size: 0.75rem;
}

.tooltipHorizontal {
    display: flex;
    flex-direction: row;
}

.tooltipVertical {
    display: flex;
    flex-direction: column;
}

.tooltipRow {
    display: table-row;
}

.tooltipVal {
    display: table-cell;
    text-align: "right";
    font-weight: bold;
    font-family: 'Titillium Web';
    padding-left: 5px;
}

.tooltipLbl {
    display: table-cell;
    text-align: "left";
    font-family: 'Titillium Web';
}

.tooltipFlagImage {
    display: inline-block;
    object-fit: fill;
    height: 50px;
    width: 70px;
    margin-right: 5px;
}

.tooltipFlagBoarder {
    display: inline-block;
    padding: 0px;
    border-width: 0.5;
    border-color: rgb(177, 177, 177);
    border-style: solid;
    height: 50px;
    width: 70px;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // styles shared between all samples

import { DataGridSharedData } from './DataGridSharedData';
import { IgrDataGrid } from 'igniteui-react-data-grids';
import { IgrDataGridModule } from 'igniteui-react-data-grids';
import { IgrTextColumn } from 'igniteui-react-data-grids';
import { IgrNumericColumn } from 'igniteui-react-data-grids';
import { IgrDateTimeColumn } from 'igniteui-react-data-grids';
import { IgrImageColumn } from 'igniteui-react-data-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-data-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridRowSelection extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;

    constructor(props: any) {
        super(props);

        this.data = DataGridSharedData.getEmployees();
    }

    public onGridRef = (grid: IgrDataGrid) => {
        if (!grid) { return; }

        this.grid = grid;
    }

    public render(): JSX.Element {
        return (
            <div className="container">
                <div className="options">
                    <button className="options-button" onClick={this.onSelectAllClick}>Select All Rows</button>
                    <button className="options-button" onClick={this.onDeselectAllClick}>Deselect All Rows</button>
                </div>

                <IgrDataGrid
                    ref={this.onGridRef}
                    height="calc(100% - 40px)"
                    width="100%"
                    defaultColumnMinWidth={120}
                    autoGenerateColumns={false}
                    dataSource={this.data}
                    selectionMode="MultipleRow"
                    isColumnOptionsEnabled="true">

                    <IgrTextColumn field="Name" width="*>150"/>
                    <IgrTextColumn field="Street" headerText="Street" width="*>160" />
                    <IgrTextColumn field="City" headerText="City" width="*>120" />
                    <IgrNumericColumn field="Salary" headerText="Salary" width="*>120" positivePrefix="$" showGroupingSeparator="true" />

                    <IgrImageColumn field="Photo" headerText="Photo" contentOpacity="1" horizontalAlignment="center"  width="*>110"/>
                    <IgrDateTimeColumn field="Birthday" headerText="Date of Birth" width="*>170"/>

                </IgrDataGrid>
            </div>
        );
    }

    public onSelectAllClick = (e: any) => {
        this.grid.selectAllRows();
    }

    public onDeselectAllClick = (e: any) => {
        this.grid.deselectAllRows();
    }
}

root.render(<DataGridRowSelection/>);
```


<div class="divider--half"></div>

## API References

- `ModifierBased`
- [`MultipleCell`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.datagridselectionmode.html#MultipleCell)
- [`MultipleRow`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.datagridselectionmode.html#MultipleRow)
- [`RangeCell`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.datagridselectionmode.html#RangeCell)
- [`selectionBehavior`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#selectionBehavior)
- [`selectionMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#selectionMode)
- [`SingleCell`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.datagridselectionmode.html#SingleCell)
- [`SingleRow`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.datagridselectionmode.html#SingleRow)
