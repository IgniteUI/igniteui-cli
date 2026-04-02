---
title: React Data Grid | Column Animations | Infragistics
_description: Learn how to display column animations through events when moving or hiding columns with Infragistics' Ignite UI for React data table & grid. Check out Ignite UI for React table tutorials!
_keywords: React Table, Data Grid, column animations, Ignite UI for React, Infragistics
mentionedTypes: ["Grid", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: Column Animations
_premium: true
---

# React Grid Column Animations

The Ignite UI for React Data Table / Data Grid supports Column Animation during events like Column Hiding or Column Moving. When Column Animation on the React data grid is set, the corresponding animation will fire for all of the cells in that column.

## React Grid Column Animations Example

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
import { IgrGridColumnOptionsModule } from 'igniteui-react-data-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridColumnAnimation extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;

    constructor(props: any) {
        super(props);

        this.state = {
            columnAddOrShowAnimation: "SlideFromLeft",
            columnExchangingAnimationMode: "Crossfade",
            columnHidingAnimationMode: "FadeOut",
            columnMovingAnimationMode: "SlideOver",
            columnPropertyUpdatingAnimationMode: "Interpolate"
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
                    <label className="options-label" style={{ width: "160px" }}>Adding Animation: </label>
                    <select className="options-select" value={this.state.columnAddOrShowAnimation}
                        onChange={this.onAddShowChange} style={{ width: "150px" }}>
                        <option>Auto</option>
                        <option>None</option>
                        <option>SlideFromLeft</option>
                        <option>SlideFromRight</option>
                        <option>SlideFromTop</option>
                        <option>SlideFromBottom</option>
                        <option>FadeIn</option>
                        <option>SlideFromLeftAndFadeIn</option>
                        <option>SlideFromRightAndFadeIn</option>
                        <option>SlideFromTopAndFadeIn</option>
                        <option>SlideFromBottomAndFadeIn</option>
                    </select>
                    <label className="options-label" style={{ width: "160px" }}>Exchange Animation: </label>
                    <select className="options-select" value={this.state.columnExchangingAnimationMode}
                        onChange={this.onExchangeChange} style={{ width: "150px" }}>
                        <option>Auto</option>
                        <option>None</option>
                        <option>SlideToLeft</option>
                        <option>SlideToRight</option>
                        <option>SlideToTop</option>
                        <option>SlideToBottom</option>
                        <option>Crossfade</option>
                        <option>SlideToLeftAndCrossfade</option>
                        <option>SlideToRightAndCrossfade</option>
                        <option>SlideToTopAndCrossfade</option>
                        <option>SlideToBottomAndCrossfade</option>
                    </select>
                </div>
                <div className="options horizontal">
                    <label className="options-label" style={{ width: "160px" }}>Hiding Animation: </label>
                    <select className="options-select" value={this.state.columnHidingAnimationMode}
                        onChange={this.onHideChange} style={{ width: "150px" }}>
                        <option>Auto</option>
                        <option>None</option>
                        <option>SlideToLeft</option>
                        <option>SlideToRight</option>
                        <option>SlideToTop</option>
                        <option>SlideToBottom</option>
                        <option>FadeOut</option>
                        <option>SlideToLeftAndFadeOut</option>
                        <option>SlideToRightAndFadeOut</option>
                        <option>SlideToTopAndFadeOut</option>
                        <option>SlideToBottomAndFadeOut</option>
                    </select>
                    <label className="options-label" style={{ width: "160px" }}>Updating Animation: </label>
                    <select className="options-select" value={this.state.columnPropertyUpdatingAnimationMode}
                        onChange={this.onPropUpdateChange} style={{ width: "150px" }} >
                        <option>Auto</option>
                        <option>None</option>
                        <option>Interpolate</option>
                        <option>InterpolateDeep</option>
                    </select>
                </div>
                <div className="options horizontal">
                    <label className="options-label" style={{ width: "160px" }}>Moving Animation: </label>
                    <select className="options-select" value={this.state.columnMovingAnimationMode}
                        onChange={this.onMoveChange} style={{ width: "150px" }}>
                        <option>Auto</option>
                        <option>None</option>
                        <option>SlideOver</option>
                    </select>
                    <button className="options-button" onClick={this.onHideClick} style={{ width: "100px" }}>Hide Column</button>
                    <button className="options-button" onClick={this.onShowClick} style={{ width: "100px" }}>Show Column</button>
                    <button className="options-button" onClick={this.onReloadClick} style={{ width: "100px" }}>Reload Grid</button>
                </div>

                <IgrDataGrid
                    ref={this.onGridRef}
                    height="calc(100% - 120px)"
                    width="100%"
                    defaultColumnMinWidth={100}
                    columnAddingAnimationMode="SlideFromLeft"
                    columnShowingAnimationMode="SlideFromLeft"
                    columnExchangingAnimationMode="Crossfade"
                    columnHidingAnimationMode="FadeOut"
                    columnMovingAnimationMode="SlideOver"
                    columnPropertyUpdatingAnimationMode="Interpolate"
                    autoGenerateColumns={false}
                    dataSource={this.data}
                    isColumnOptionsEnabled="true">

                    <IgrTextColumn field="Name" width="*>170"/>
                    <IgrTextColumn field="Street" headerText="Address" width="*>150" />
                    <IgrTextColumn field="City" width="*>120"/>
                    <IgrNumericColumn field="Salary" positivePrefix="$" showGroupingSeparator="true" width="*>120"/>
                    <IgrDateTimeColumn field="Birthday" width="*>170"/>

                </IgrDataGrid>
            </div>
        );
    }

    public onHideClick = (e: any) => {
        for (const col of this.grid.combinedColumns) {
            if (!col.isHidden) {
                col.isHidden = true;
                break;
            }
        }
    }

    public onReloadClick = (e: any) => {
        // this.grid.dataSource = null;

        // this.grid.dataSource = this.data;

        const newData = DataGridSharedData.getEmployees();
        for (let i = 0; i < this.data.length; i++) {
            const oldItem = this.data[i];
            this.data[i].Salary = newData[i].Salary;
            this.grid.notifySetItem(i, oldItem, newData[i]);
        }
    }

    public onShowClick = (e: any) => {

        const columns = this.grid.combinedColumns.reverse();

        for (const col of columns) {
            if (col.isHidden) {
                col.isHidden = false;
                break;
            }
        }

        this.grid.combinedColumns.reverse();
    }

    public onAddShowChange = (e: any) => {
        this.setState({ columnAddOrShowAnimation: e.target.value });
        this.grid.columnAddingAnimationMode = e.target.value;
        this.grid.columnShowingAnimationMode = e.target.value;
    }

    public onExchangeChange = (e: any) => {
        this.setState({ columnExchangingAnimationMode: e.target.value });
        this.grid.columnExchangingAnimationMode = e.target.value;
    }

    public onHideChange = (e: any) => {
        this.setState({ columnHidingAnimationMode: e.target.value });
        this.grid.columnHidingAnimationMode = e.target.value;
    }

    public onMoveChange = (e: any) => {
        this.setState({ columnMovingAnimationMode: e.target.value });
        this.grid.columnMovingAnimationMode = e.target.value;
    }

    public onPropUpdateChange = (e: any) => {
        this.setState({ columnPropertyUpdatingAnimationMode: e.target.value });
        this.grid.columnPropertyUpdatingAnimationMode = e.target.value;
    }

    public getRandomNumber(min: number, max: number): number {
        return Math.round(min + Math.random() * (max - min));
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataGridColumnAnimation/>);
```


<div class="divider--half"></div>

## Animation Properties

Each column animation property is listed and described below:

- [`columnAddingAnimationMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#columnAddingAnimationMode): When a column is added, you have the option to have the column header and its cells slide in from the left, right, top, or bottom. There are also options to have it fade in as well as slide and fade in.
- [`columnExchangingAnimationMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#columnExchangingAnimationMode): When a column is exchanged, you have the option to have the exchanged column header and its cells slide to the left, right, top, or bottom. There are also options to have it fade as well as slide and fade.
- [`columnHidingAnimationMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#columnHidingAnimationMode): When a column is hidden, you have the option to have the column header and its cells slide out to the left, right, top, or bottom. There are also options to have it fade out as well as slide and fade out.
- [`columnMovingAnimationMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#columnMovingAnimationMode): When a column is moved, you have the option to have the column header and its cells slide over.
- [`columnPropertyUpdatingAnimationMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#columnPropertyUpdatingAnimationMode): When a column's property changes, you have the option to have that property change animate by interpolating or deeply interpolating its change.
- [`columnShowingAnimationMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#columnShowingAnimationMode): When a column is added, you have the option to have the column header and its cells slide in from the left, right, top, or bottom. There are also options to have it fade in as well as slide and fade in.

## Code Snippet

The following demonstrates the implementation of each of the column animations described in this topic:

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    dataSource={this.data}
    columnAddingAnimationMode="SlideToLeft"
    columnExchangingAnimationMode="SlideToRight"
    columnHidingAnimationMode="SlideToTopAndFadeOut"
    columnMovingAnimationMode="SlideOver"
    columnPropertyUpdatingAnimationMode="Interpolate"
    columnShowingAnimationMode="SlideFromBottomAndFadeIn" />
```

## API References

- [`columnAddingAnimationMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#columnAddingAnimationMode)
- [`columnExchangingAnimationMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#columnExchangingAnimationMode)
- [`columnHidingAnimationMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#columnHidingAnimationMode)
- [`columnMovingAnimationMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#columnMovingAnimationMode)
- [`columnPropertyUpdatingAnimationMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#columnPropertyUpdatingAnimationMode)
