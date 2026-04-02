---
title: React Data Grid | Real-Time Data Grid and Tables | Load & Save | Infragistics
_description: Use Infragistics' Ignite UI for React Data Table & Grid which supports loading and saving the layout the user makes.
_keywords: React Table, Data Grid, cell activation, Ignite UI for React, Infragistics
mentionedTypes: ["Grid", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: Load & Save Grid Layout
_premium: true
---

# React Grid Load & Save Layout

The Ignite UI for React Data Table / Data Grid supports loading and saving the grid layout. This is performed by calling the [`loadLayout`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#loadLayout) and [`saveLayout`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#saveLayout) methods of the grid. These features are useful when an end user can move, sort, and group columns, and wants to preserve the state of the grid and be able to recover the layout and resume work at a later time.

## React Grid Load & Save Layout Example

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
import { IgrColumnGroupDescription } from 'igniteui-react-data-grids';
import { IgrColumnSummaryDescription } from 'igniteui-react-data-grids'
import { DataSourceSummaryOperand } from 'igniteui-react-core';
import { IgrButton } from 'igniteui-react';
import { IgrButtonModule } from 'igniteui-react';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrDataGridModule.register();
IgrDataGridToolbarModule.register();
IgrGridColumnOptionsModule.register();
IgrButtonModule.register();

export default class DataGridLoadSaveLayout extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;
    public toolbar: IgrDataGridToolbar;
    public savedLayout: string;

    constructor(props: any) {
        super(props);
        
        this.data = DataGridSharedData.getEmployees(100);
    }

    public onLoadLayoutClicked = () => {
        this.grid.loadLayout(this.savedLayout);
    }

    public onSaveLayoutClicked = () => {
        
        this.grid.saveLayout();
        this.savedLayout = this.grid.saveLayout();
    }

    public render(): JSX.Element {
        let buttonStyle: any = { height: "2rem", marginLeft: "10px", width: "160px", whiteSpace: "nowrap" };
    
        return (
            <div className="container sample">

                <div className="options" style={{height: "50px"}}>
                    <IgrButton variant="contained" style={buttonStyle}                                
                               onClick={this.onLoadLayoutClicked}>
                        <span>Load</span>
                    </IgrButton>
                    <IgrButton variant="contained" style={buttonStyle}                                
                               onClick={this.onSaveLayoutClicked}>
                        <span>Save</span>                                  
                    </IgrButton>
                </div>

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

                    <IgrNumericColumn field="Sales" headerText="Sales" horizontalAlignment="center"
                    paddingLeft="10" paddingRight="0" width="*>160" />

                    <IgrNumericColumn field="Salary" positivePrefix="$"
                    showGroupingSeparator="true" width="*>160"/>

                    <IgrDateTimeColumn field="Birthday" headerText="Date of Birth"
                    horizontalAlignment="stretch" width="*>160" paddingRight="10"/>
                    <IgrImageColumn field="CountryFlag" headerText="Country" contentOpacity="1"
                    horizontalAlignment="stretch" width="130" paddingTop="5" paddingBottom="5" />

                    <IgrTextColumn field="Address" headerText="Address" horizontalAlignment="left" width="*>160" />

                    <IgrTextColumn field="Phone" horizontalAlignment="center" width="140" />

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

    

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataGridLoadSaveLayout/>);
```


<div class="divider--half"></div>

## Supported Features

The grid supports saving the following features:

- [Column Visibility](column-chooser.md)
- [Column Pinning](column-pinning.md)
- [Column Moving](column-moving.md)
- [Column Resizing](column-resizing.md)
- [Column Sorting](column-sorting.md)
- [Column Filtering](column-filtering.md)
- [Row Grouping](row-grouping.md)

## API References

- [`IgrDataGrid`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html)
- [`loadLayout`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#loadLayout)
- [`saveLayout`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#saveLayout)
