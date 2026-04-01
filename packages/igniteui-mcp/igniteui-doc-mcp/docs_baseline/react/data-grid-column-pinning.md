---
title: React Data Grid | Column Pinning | Infragistics
_description: See how Infragistics' Ignite UI for React grid component supports the ability to pin columns and gives you the flexibility over how you wish to position your columns. View Ignite UI for React table demos for more information!
_keywords: React Table, Data Grid, column pinning, Ignite UI for React, Infragistics
mentionedTypes: ["Grid", "PinnedPositions", "PinColumn", "ColumnPinning", "DataGridToolbar", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/grid/column-pinning
_tocName: Column Pinning
_premium: true
---

# React Grid Column Pinning Overview

The Ignite UI for React Data Grid supports the ability to pin columns, allowing the end users to lock a column in a particular column order.

A column or multiple columns can be pinned to the left-hand or right-hand side of the Data Grid. In addition, you can change the pin state of the columns by utilizing the [`pinColumn`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#pinColumn) function.

## React Grid Column Pinning Example

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
import { IgrDataGridModule } from 'igniteui-react-data-grids';
import { IgrDataGrid } from 'igniteui-react-data-grids';
import { IgrImageColumn } from 'igniteui-react-data-grids';
import { IgrTextColumn } from 'igniteui-react-data-grids';
import { IgrNumericColumn } from 'igniteui-react-data-grids';
import { IgrDateTimeColumn } from 'igniteui-react-data-grids';
import { DataGridSharedData } from './DataGridSharedData';
import { PinnedPositions } from 'igniteui-react-data-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-data-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridColumnPinningPicker extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;

    constructor(props: any) {
        super(props);
     
        this.state = {
            componentVisible: true,
            isPinningToLeftDisabled: true,
            isPinningToRightDisabled: true
        }
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
                    <button className="options-button" disabled={this.state.isPinningToLeftDisabled} onClick={this.onPinLeft} style={{ width: "100px" }}>Pin Left</button>
                    <button className="options-button" disabled={this.state.isPinningToRightDisabled} onClick={this.onPinRight} style={{ width: "100px" }}>Pin Right</button>
                    <button className="options-button" onClick={this.onUnPin} style={{ width: "125px" }}>Unpin Columns</button>
                </div>
                <IgrDataGrid
                ref={this.onGridRef}
                height="calc(100% - 40px)"
                width="100%"
                autoGenerateColumns="false"
                defaultColumnMinWidth={120}
                scrollbarStyle = "thin"
                dataSource={this.data}
                isColumnOptionsEnabled="true">
                    <IgrTextColumn pinned="left" field="ID" headerText="ID" width="*>110"  horizontalAlignment="center"/>
                    <IgrTextColumn pinned="left" field="FirstName" headerText="First Name" width="*>190"/>
                    <IgrTextColumn pinned="left" field="LastName" headerText="Last Name" width="*>190"/>

                    <IgrDateTimeColumn field="Birthday" headerText="Date of Birth" width="*>170" horizontalAlignment="center"/>
                    <IgrNumericColumn field="Age" width="*>110" horizontalAlignment="center"/>
                    <IgrImageColumn field="CountryFlag" headerText="Country" paddingTop="5" paddingBottom="5"
                    width="*>160" contentOpacity="1" horizontalAlignment="center"/>

                    <IgrTextColumn field="Street" headerText="Address" width="*>260"/>
                    <IgrTextColumn field="City"  width="*>170" />
                    <IgrTextColumn field="Country"  width="*>170" />

                    <IgrNumericColumn field="Salary" width="*>120" headerText="Salary" positivePrefix="$" showGroupingSeparator="true"/>
                    <IgrNumericColumn field="Sales" width="*>120" headerText="Sales" positivePrefix="$" showGroupingSeparator="true"/>
                </IgrDataGrid>
            </div>
        );
    }

    public onPinLeft = (e: any) => {
        this.setState({ isPinningToLeftDisabled: true, isPinningToRightDisabled: true });

        let idColumn = this.grid.actualColumns.item(0);
        let firstNameColumn = this.grid.actualColumns.item(1);
        let lastNameColumn = this.grid.actualColumns.item(2);
        this.grid.pinColumn(idColumn, PinnedPositions.Left);
        this.grid.pinColumn(firstNameColumn, PinnedPositions.Left);
        this.grid.pinColumn(lastNameColumn, PinnedPositions.Left);
    }

    public onPinRight = (e: any) => {
        this.setState({ isPinningToLeftDisabled: true, isPinningToRightDisabled: true});

        let streetColumn = this.grid.actualColumns.item(6);
        let cityColumn = this.grid.actualColumns.item(7);
        let countryColumn = this.grid.actualColumns.item(8);
        this.grid.pinColumn(streetColumn, PinnedPositions.Right);
        this.grid.pinColumn(cityColumn, PinnedPositions.Right);
        this.grid.pinColumn(countryColumn, PinnedPositions.Right);
    }

    public onUnPin = (e: any) => {
        this.setState({ isPinningToLeftDisabled: false, isPinningToRightDisabled: false });

        let idColumn = this.grid.actualColumns.item(0);
        let firstNameColumn = this.grid.actualColumns.item(1);
        let lastNameColumn = this.grid.actualColumns.item(2);
        this.grid.pinColumn(idColumn, PinnedPositions.None);
        this.grid.pinColumn(firstNameColumn, PinnedPositions.None);
        this.grid.pinColumn(lastNameColumn, PinnedPositions.None);

        let streetColumn = this.grid.actualColumns.item(6);
        let cityColumn = this.grid.actualColumns.item(7);
        let countryColumn = this.grid.actualColumns.item(8);
        this.grid.pinColumn(streetColumn, PinnedPositions.None);
        this.grid.pinColumn(cityColumn, PinnedPositions.None);
        this.grid.pinColumn(countryColumn, PinnedPositions.None);
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataGridColumnPinningPicker/>);
```


<div class="divider--half"></div>

The Column Pinning API in the Data Grid can be enabled by setting either a column's [`pinned`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridcolumn.html#pinned) property, or when setting it by utilizing the [`pinColumn`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#pinColumn) function of the grid.

The [`pinned`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridcolumn.html#pinned) property has three options:

- Left - enabling [`Left`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.pinnedpositions.html#Left) will position pinned columns to the left-hand side of the grid.
- Right - enabling [`Right`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.pinnedpositions.html#Right) will position pinned columns to the right side of the grid.
- None - enabling [`None`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.pinnedpositions.html#None) will unpin a column and reposition its default placement within the grid.

Unpinned columns that are adjacent to pinned columns will still maintain horizontal scrolling.

The [`pinColumn`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#pinColumn) function contains two required parameters. The first parameter is the column to be pinned, and the second is with the [`PinnedPositions`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.pinnedpositions.html) enumeration setting.

## Code Snippet

The following code demonstrates how to implement column pinning in the React Data Grid with column pinning by using the [`pinned`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridcolumn.html#pinned) property and [`pinColumn`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#pinColumn) function:

<!--React-->

```tsx
<IgrDataGrid
ref={this.onGridRef}
height="calc(100% - 40px)"
width="100%"
autoGenerateColumns="false"
defaultColumnMinWidth={120}
scrollbarStyle="thin"
dataSource={this.data}>

    {/*Columns pinned left*/}
    <IgrTextColumn pinned="left" field="ID" headerText="Employee ID" width="100"  horizontalAlignment="center"/>
    <IgrTextColumn pinned="left" field="FirstName" headerText="First Name" width="170"/>
    <IgrTextColumn pinned="left" field="LastName" headerText="Last Name" width="170"/>

    {/*Columns unpinned*/}
    <IgrDateTimeColumn pinned="none" field="Birthday" headerText="Date of Birth" width="150" horizontalAlignment="center"/>
    <IgrNumericColumn pinned="none" field="Age" width="100" horizontalAlignment="center"/>
    <IgrImageColumn pinned="none" field="CountryFlag" headerText="Country"
    width="140" contentOpacity="1" horizontalAlignment="center"/>

    {/*Columns pinned right*/}
    <IgrTextColumn field="Street" headerText="Address" width="240"/>
    <IgrTextColumn field="City"  width="150" />
    <IgrTextColumn field="Country"  width="150" />
</IgrDataGrid>
```

<!--React-->

```ts
import { PinnedPositions } from 'igniteui-react-data-grids';

public onButtonPinLeft = (e: any) => {

    let idColumn = this.grid.actualColumns.item(0);
    let firstNameColumn = this.grid.actualColumns.item(1);
    let lastNameColumn = this.grid.actualColumns.item(2);

    //pinned property
    idColumn.pinned = PinnedPositions.Left;
    firstNameColumn.pinned = PinnedPositions.Left;
    lastNameColumn.pinned = PinnedPositions.Left;

    // pinColumn Function
    this.grid.pinColumn(idColumn, PinnedPositions.Left);
    this.grid.pinColumn(firstNameColumn, PinnedPositions.Left);
    this.grid.pinColumn(lastNameColumn, PinnedPositions.Left);
}

public onButtonPinRight = (e: any) => {

    let streetColumn = this.grid.actualColumns.item(6);
    let cityColumn = this.grid.actualColumns.item(7);
    let countryColumn = this.grid.actualColumns.item(8);

    //pinned property
    streetColumn.pinned = PinnedPositions.Right;
    cityColumn.pinned = PinnedPositions.Right;
    countryColumn.pinned = PinnedPositions.Right;

    //pinColumn function
    this.grid.pinColumn(streetColumn, PinnedPositions.Right);
    this.grid.pinColumn(cityColumn, PinnedPositions.Right);
    this.grid.pinColumn(countryColumn, PinnedPositions.Right);
}

public onButtonUnPin = (e: any) => {

    let idColumn = this.grid.actualColumns.item(0);
    let firstNameColumn = this.grid.actualColumns.item(1);
    let lastNameColumn = this.grid.actualColumns.item(2);

    //pinned property
    idColumn.pinned = PinnedPositions.Left;
    firstNameColumn.pinned = PinnedPositions.Left;
    lastNameColumn.pinned = PinnedPositions.Left;

    //pinColumn function
    this.grid.pinColumn(idColumn, PinnedPositions.None);
    this.grid.pinColumn(firstNameColumn, PinnedPositions.None);
    this.grid.pinColumn(lastNameColumn, PinnedPositions.None);

    let streetColumn = this.grid.actualColumns.item(6);
    let cityColumn = this.grid.actualColumns.item(7);
    let countryColumn = this.grid.actualColumns.item(8);

    //pinned property
    streetColumn.pinned = PinnedPositions.None;
    cityColumn.pinned = PinnedPositions.None;
    countryColumn.pinned = PinnedPositions.None;

    //pinColumn function
    this.grid.pinColumn(streetColumn, PinnedPositions.None);
    this.grid.pinColumn(cityColumn, PinnedPositions.None);
    this.grid.pinColumn(countryColumn, PinnedPositions.None);
}
```

## Toolbar's Column Pinning UI

The Column Pinning UI is accessible within the [`IgrDataGridToolbar`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridtoolbar.html) component separate from the grid. For this purpose all we have to do is set the toolbar's `columnPinning` property to true. The toolbar will then display a [`IgrButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbutton.html), when clicked, will display the column pinning UI. This button also displays the total of pinned-left columns. If the toolbar is not created, enabling the `columnPinning` property will have no effect and hide the button.

The [`IgrDataGridToolbar`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridtoolbar.html) provides additional properties such as adding a title to the toolbar by using the [`toolbarTitle`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridtoolbar.html#toolbarTitle) property, placing text in the [`IgrButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbutton.html) by setting the `columnPinningText` property, and adding a title header to the column hiding UI by setting `columnPinningTitle`.

## Demo

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
import { IgrImageColumn } from "igniteui-react-data-grids";
import { IgrTextColumn } from "igniteui-react-data-grids";
import { IgrNumericColumn } from "igniteui-react-data-grids";
import { IgrDateTimeColumn } from "igniteui-react-data-grids";
import { IgrDataGridModule } from "igniteui-react-data-grids";
import { IgrDataGrid } from "igniteui-react-data-grids";
import { IgrDataGridToolbarModule } from "igniteui-react-data-grids";
import { IgrDataGridToolbar } from "igniteui-react-data-grids";
import { IgrGridColumnOptionsModule } from 'igniteui-react-data-grids';

IgrDataGridModule.register();
IgrDataGridToolbarModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridColumnPinningToolbar extends React.Component<any, any> {
  public data: any[];
  public grid: IgrDataGrid;
  public toolbar: IgrDataGridToolbar;

  constructor(props: any) {
    super(props);

    this.state = { componentVisible: true };
    this.data = DataGridSharedData.getEmployees();
  }

  public onGridRef = (grid: IgrDataGrid) => {
    this.grid = grid;
    if (this.toolbar) {
      this.toolbar.targetGrid = this.grid;
    }
  }

  public onToolbarRef = (toolbar: IgrDataGridToolbar) => {
    this.toolbar = toolbar;
    if (this.toolbar) {
      this.toolbar.targetGrid = this.grid;
    }
  }

  public render(): JSX.Element {
    return (
      <div className="container sample">
          <IgrDataGridToolbar
            ref={this.onToolbarRef}
            toolbarTitle="Global Sales"
            columnPinning="true"
          />
          <IgrDataGrid
            ref={this.onGridRef}
            height="calc(100% - 2rem)"
            width="100%"
            autoGenerateColumns="false"
            cornerRadiusTopLeft="0"
            cornerRadiusTopRight="0"
            dataSource={this.data}
            isColumnOptionsEnabled="true"
          >
              <IgrTextColumn pinned="left" field="ID" headerText="ID" width="*>110"  horizontalAlignment="center"/>
              <IgrTextColumn pinned="left" field="FirstName" headerText="First Name" width="*>190"/>
              <IgrTextColumn pinned="left" field="LastName" headerText="Last Name" width="*>190"/>

              <IgrDateTimeColumn field="Birthday" headerText="Date of Birth" width="*>170" horizontalAlignment="center"/>
              <IgrNumericColumn field="Age" width="*>120" horizontalAlignment="center"/>
              <IgrImageColumn field="CountryFlag" headerText="Country" paddingTop="5" paddingBottom="5"
              width="*>160" contentOpacity="1" horizontalAlignment="center"/>

              <IgrTextColumn field="Street" headerText="Address" width="*>260"/>
              <IgrTextColumn field="City"  width="*>170" />
              <IgrTextColumn field="Country"  width="*>170" />

              <IgrNumericColumn field="Salary" width="*>120" headerText="Salary" positivePrefix="$" showGroupingSeparator="true"/>
              <IgrNumericColumn field="Sales" width="*>120" headerText="Sales" positivePrefix="$" showGroupingSeparator="true"/>
          </IgrDataGrid>
      </div>
    );
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataGridColumnPinningToolbar/>);
```


## Code Snippet

<!--React-->

```tsx
<IgrDataGridToolbar ref={this.onToolbarRef}
    toolbarTitle="Grid Title"
    columnPinning="true"
    columnPinningText="Pinning"
    columnPinningTitle="Column Pinning">
</IgrDataGridToolbar>
<IgrDataGrid
    ref={this.onGridRef}
    height="calc(100% - 40px)"
    dataSource={this.data}
    autoGenerateColumns="true">
</IgrDataGrid>
```

<!--React-->

```ts
import { IgrDataGrid } from 'igniteui-react-data-grids';
import { IgrDataGridToolbar } from 'igniteui-react-data-grids';

public grid : IgrDataGrid;
public toolbar: IgrDataGridToolbar;

this.onGridRef = this.onGridRef.bind(this);
this.onToolbarRef = this.onToolbarRef.bind(this);


public onGridRef(grid: IgrDataGrid) {
    this.grid = grid;
    if (this.toolbar != null) {
        this.toolbar.targetGrid = this.grid;

        let productNameColumn = this.grid.actualColumns.item(0);
        productNameColumn.pinned = PinnedPositions.Left;
    }
}

public onToolbarRef(toolbar: IgrDataGridToolbar) {
    this.toolbar = toolbar;
    if (this.grid != null) {
    this.toolbar.targetGrid = this.grid;
    this.toolbar.columnPinning = "true";
    this.toolbar.toolbarTitle = "Grid Title";
    this.toolbar.columnPinningText = "Pinning";
    this.toolbar.columnPinningTitle = "Pinning Title";
    }
}
```

## API References

- [`IgrButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbutton.html)
- [`IgrDataGridToolbar`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridtoolbar.html)
- [`pinColumn`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#pinColumn)
- [`PinnedPositions`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.pinnedpositions.html)
- [`pinned`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridcolumn.html#pinned)
