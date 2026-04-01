---
title: React Data Grid | Column Summaries | Infragistics
_description: Use Infragistics' React grid component's column summaries feature to display summarized data such as count, max, min and many more. Check out Ignite UI for React table demos!
_keywords: React Table, Data Grid, column, summaries, Ignite UI for React, Infragistics
mentionedTypes: ["Implementation.Grid", "SummaryScope", "GroupSummaryDisplayMode"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/grid/summaries
_tocName: Column Summaries
_premium: true
---

# React Column Summaries

The Ignite UI for React Data Table / Data Grid supports column summaries. In some cases, your end users may be overwhelmed by the amount of data displayed in the grid, and often may be looking for a summary of the data. Your end users may also want to derive additional information from the data of a specific column. Summaries help your end users achieve this, and you can enable them by setting the [`SummaryScope`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.summaryscope.html) property.

## React Column Summaries Example

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
import { IgrDataGridModule } from 'igniteui-react-data-grids';
import { IgrDataGrid } from 'igniteui-react-data-grids';
import { IgrColumnGroupDescription } from 'igniteui-react-data-grids';
import { IgrColumnSummaryDescription } from 'igniteui-react-data-grids'
import { IgrProvideCalculatorEventArgs } from 'igniteui-react-core';
import { IgrTextColumn } from 'igniteui-react-data-grids';
import { IgrNumericColumn } from 'igniteui-react-data-grids';
import { IgrDateTimeColumn } from 'igniteui-react-data-grids';
import { DataSourceSummaryOperand, SummaryCalculator, DefaultSummaryResult, IDataSource, ISummaryResult } from 'igniteui-react-core';
import { IgrGridColumnOptionsModule } from 'igniteui-react-data-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridColumnSummaries extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;

    constructor(props: any) {
        super(props);
      
        this.state = { componentVisible: true, isGroupCollapsible: true, summaryScope: "Root", groupSummaryDisplayMode: "RowBottom" }
        this.data = DataGridSharedData.getSales(50);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <label className="options-label" style={{ width: "150px" }}>Summary Scope:</label>
                    <select className="options-select" style={{ width: "100px" }} defaultValue="Root" onChange={this.onSummaryScopeChanging}>
                    <option>Root</option>
                        <option>Groups</option>
                        <option>Both</option>
                        <option>None</option>
                    </select>
                    <label className="options-label" style={{ width: "100" }}>Group Summary Display Mode:</label>
                    <select className="options-select" style={{ width: "110px" }} defaultValue="RowBottom" onChange={this.onGroupSummaryDisplayModeChanging}>
                        <option>List</option>
                        <option>Cells</option>
                        <option>RowTop</option>
                        <option>RowBottom</option>
                        <option>None</option>
                    </select>
                </div>

                <IgrDataGrid
                    ref={this.onGridRef}
                    summaryScope = {this.state.summaryScope}
                    groupSummaryDisplayMode = {this.state.groupSummaryDisplayMode}
                    height="calc(100% - 40px)"
                    width="100%"
                    autoGenerateColumns="false"
                    isGroupCollapsable={this.state.isGroupCollapsible}
                    groupHeaderDisplayMode = "combined"
                    isColumnOptionsEnabled="true"
                    dataSource={this.data}>
                        <IgrNumericColumn field="ProductID" width="*>120" headerText="ID" horizontalAlignment="center" />
                        <IgrTextColumn field="ProductName" width="*>130" headerText="Product"/>
                        <IgrNumericColumn positivePrefix="$" field="BundlePrice" width="*>120" showGroupingSeparator="true" headerText="Price" />
                        <IgrNumericColumn field="OrderItems" width="*>140" headerText="Orders"/>
                        <IgrNumericColumn field="OrderValue" width="*>160" showGroupingSeparator="true" headerText="Order Totals"
                        positivePrefix="$"  />
                        <IgrDateTimeColumn field="OrderDate" width="*>150" headerText="Order Date"
                        horizontalAlignment="right"  />
                        <IgrNumericColumn field="Profit" width="*>140" showGroupingSeparator="true" headerText="Profit"
                        positivePrefix="$"  />
                        <IgrTextColumn field="Countries" width="*>170" headerText="Ship Country"/>
                </IgrDataGrid>
            </div>
        );
    }

    public onSummaryScopeChanging = (e: any) => {
        this.grid.summaryScope = e.target.value;
        this.setState( {summaryScope: e.target.value} );
    }
    public onGroupSummaryDisplayModeChanging = (e: any) => {
        this.grid.groupSummaryDisplayMode = e.target.value;
        this.setState( {groupSummaryDisplayMode: e.target.value} );
    }
    public onGridRef = (grid: IgrDataGrid) => {
        if (!grid) { return; }

        this.grid = grid;
        this.grid.actualDataSource.isSectionExpandedDefault = true;
    }

    public componentDidMount() {
        window.addEventListener('load', this.onLoad);
    }

    public onLoad = () => {
        const productGroup = new IgrColumnGroupDescription();
        productGroup.field = "ProductName";
        productGroup.displayName = "ProductName";
        this.grid.groupDescriptions.add(productGroup);

        const productCount = new IgrColumnSummaryDescription();
        productCount.field = "ProductName";
        productCount.operand = DataSourceSummaryOperand.Count;
        this.grid.summaryDescriptions.add(productCount);

        const priceMin = new IgrColumnSummaryDescription();
        priceMin.field = "BundlePrice";
        priceMin.operand = DataSourceSummaryOperand.Min;
        priceMin.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
        this.grid.summaryDescriptions.add(priceMin);

        const priceMax = new IgrColumnSummaryDescription();
        priceMax.field = "BundlePrice";
        priceMax.operand = DataSourceSummaryOperand.Max;
        priceMax.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
        this.grid.summaryDescriptions.add(priceMax);

        const orderSum = new IgrColumnSummaryDescription();
        orderSum.field = "OrderItems";
        orderSum.operand = DataSourceSummaryOperand.Sum;
        this.grid.summaryDescriptions.add(orderSum);

        const orderValueSum = new IgrColumnSummaryDescription();
        orderValueSum.field = "OrderValue";
        orderValueSum.operand = DataSourceSummaryOperand.Sum;
        orderValueSum.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0});
        this.grid.summaryDescriptions.add(orderValueSum);

        const orderValueAvg = new IgrColumnSummaryDescription();
        orderValueAvg.field = "OrderValue";
        orderValueAvg.operand = DataSourceSummaryOperand.Average;
        orderValueAvg.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
        this.grid.summaryDescriptions.add(orderValueAvg);

        const orderDateMin = new IgrColumnSummaryDescription();
        orderDateMin.field = "OrderDate";
        orderDateMin.operand = DataSourceSummaryOperand.Min;
        orderDateMin.calculatorDisplayName = "First"
        orderDateMin.formatOverride = new Intl.DateTimeFormat('en-EN');
        this.grid.summaryDescriptions.add(orderDateMin);

        const orderDateMax = new IgrColumnSummaryDescription();
        orderDateMax.field = "OrderDate";
        orderDateMax.operand = DataSourceSummaryOperand.Max;
        orderDateMax.calculatorDisplayName = "Last"
        orderDateMax.formatOverride = new Intl.DateTimeFormat('en-EN');
        this.grid.summaryDescriptions.add(orderDateMax);

        const sum1 = new IgrColumnSummaryDescription();
        sum1.field = "Profit";
        sum1.operand = DataSourceSummaryOperand.Sum;
        sum1.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
        this.grid.summaryDescriptions.add(sum1);

        const avg2 = new IgrColumnSummaryDescription();
        avg2.field = "Profit";
        avg2.operand = DataSourceSummaryOperand.Average;
        avg2.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
        this.grid.summaryDescriptions.add(avg2);

        const countries = new IgrColumnSummaryDescription();
        countries.field = "Countries";
        countries.operand = DataSourceSummaryOperand.Custom;
        countries.provideCalculator = this.onProvideCalculator;
        // countries.calculator = new CustomDomestic();
        this.grid.summaryDescriptions.add(countries);
    }

    public onProvideCalculator = (s: IgrColumnSummaryDescription, e: IgrProvideCalculatorEventArgs) => {
        e.calculator = new CustomDomestic();
    }
}

// Custom Calculator - calculates the count for all USA.
class CustomDomestic extends SummaryCalculator
{
    get displayName(): string {
        return "USA";
    }
    public usCountries: number;

    public beginCalculation(a: IDataSource, b: string): void {
        super.beginCalculation(a,b);
        this.usCountries = 0;
    }
    public endCalculation(): ISummaryResult {
       return new DefaultSummaryResult(this.propertyName, DataSourceSummaryOperand.Custom, this.usCountries)
    }
    public aggregate(a: any): void {
       if(a.Countries === "USA")
       {
            this.usCountries++;
       }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataGridColumnSummaries/>);
```


<div class="divider--half"></div>

## Summary Scope Property

The React data grid supports 4 summary settings that you can configure using the [`SummaryScope`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.summaryscope.html) property. These are listed and described below:

- [`Root`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.summaryscope.html#Root): This will display a grand total for all rows in the grid for the column the summary is applied to.
- [`Groups`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.summaryscope.html#Groups): This is specific to grouped rows and shows the grand total for all rows in a particular group.
- [`Both`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.summaryscope.html#Both): This will use the [`Groups`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.summaryscope.html#Groups) and [`Root`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.summaryscope.html#Root) options simultaneously.
- [`None`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.summaryscope.html#None): This will disable summaries for the grid.

## Group Summary Display Mode Property

The React data grid supports configuration of the locations that summaries are displayed. You can configure this by using the [`GroupSummaryDisplayMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.groupsummarydisplaymode.html) property. The different options for this property are listed and described below:

- **List**: This will render the group summaries in a flat list in the spanning group header.
- **Cells**: This will render the group header as cells, and the summary values will be rendered inside the cells, aligned with their corresponding column. The grid will only display a single summary per column using this option.
- **RowTop**: This will render the group summaries as summary rows at the top of the group.
- **RowBottom**: This will render the group summaries as summary rows at the bottom of the group.
- **None**: This will disable group summary rendering.

## Code Snippets

```tsx
<IgrDataGrid
    summaryScope = "Groups"
    groupSummaryDisplayMode = "RowTop"
    height="calc(100% - 40px)"
    width="100%"
    autoGenerateColumns="false"
    dataSource={this.data}>
        <IgrTextColumn field="ProductName" headerText="Product"/>
        <IgrNumericColumn positivePrefix="$" field="BundlePrice" showGroupingSeparator="true" headerText="Price" />
        <IgrNumericColumn field="OrderItems" headerText="Order Items"/>
        <IgrNumericColumn field="OrderValue" showGroupingSeparator="true" headerText="Order Totals"
        positivePrefix="$"  />
        <IgrTextColumn field="Countries" headerText="Ship Country"/>
</IgrDataGrid>
```

```ts
import { IgrColumnGroupDescription } from 'igniteui-react-data-grids';
import { IgrColumnSummaryDescription } from 'igniteui-react-data-grids'
import { SummaryOperand, SummaryCalculator, DefaultSummaryResult, IDataSource, ISummaryResult } from 'igniteui-react-core';

public componentDidMount() {
    window.addEventListener('load', this.onLoad);
}

public onLoad() {
    // Count Operand
    const productCount = new IgrColumnSummaryDescription();
    productCount.field = "ProductName";
    productCount.operand = SummaryOperand.Count;
    this.grid.summaryDescriptions.add(productCount);
    // Min Operand with formatting
    const priceMin = new IgrColumnSummaryDescription();
    priceMin.field = "BundlePrice";
    priceMin.operand = SummaryOperand.Min;
    priceMin.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
    this.grid.summaryDescriptions.add(priceMin);
    // Max Operand and formatting
    const priceMax = new IgrColumnSummaryDescription();
    priceMax.field = "BundlePrice";
    priceMax.operand = SummaryOperand.Max;
    priceMax.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
    this.grid.summaryDescriptions.add(priceMax);
    // Sum Operand
    const orderSum = new IgrColumnSummaryDescription();
    orderSum.field = "OrderItems";
    orderSum.operand = SummaryOperand.Sum;
    this.grid.summaryDescriptions.add(orderSum);
    // Average Operand and formatting
    const orderValueAvg = new IgrColumnSummaryDescription();
    orderValueAvg.field = "OrderValue";
    orderValueAvg.operand = SummaryOperand.Average;
    orderValueAvg.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
    this.grid.summaryDescriptions.add(orderValueAvg);
}
```

<!-- Angular, React, WebComponents -->

## Custom Summaries

In some situations, you may want to expand the default set of summaries. For example, if you were looking to show the number of times a particular value in a column appears, a custom summary would be required for this.

The snippets below demonstrate how to display a Count for number of "USA" values appear in the column.

```ts
import { IgrProvideCalculatorEventArgs } from 'igniteui-react-core';

public onLoad()
{
    // ...
    // Custom Operand with calculator
    const countries = new IgrColumnSummaryDescription();
    countries.field = "Countries";
    countries.operand = SummaryOperand.Custom;
    countries.provideCalculator = this.onProvideCalculator; //refer to class below
    this.grid.summaryDescriptions.add(countries);

}

onProvideCalculator(s: IgrColumnSummaryDescription, e: IgrProvideCalculatorEventArgs) {
    e.calculator = new CustomDomestic();
}

// Custom Calculator - calculates the count for all USA.
class CustomDomestic extends SummaryCalculator
{
    get displayName(): string {
        return "USA";
    }
    public usCountries: number;

    public beginCalculation(a: IDataSource, b: string): void {
        super.beginCalculation(a,b);
        this.usCountries = 0;
    }
    public endCalculation(): ISummaryResult {
        return new DefaultSummaryResult(this.propertyName, SummaryOperand.Custom, this.usCountries)
    }
    public aggregate(a: any): void {
        if (a.Countries === "USA")
        {
            this.usCountries++;
        }
    }
}
```

<!--end: Angular, React, WebComponents -->

## API References

- [`IgrDataGrid`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html)
- [`groupSummaryDisplayMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#groupSummaryDisplayMode)
- [`summaryScope`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#summaryScope)
