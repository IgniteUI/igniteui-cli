---
title: React Data Grid | Column Types | Infragistics
_description: Learn how Infragistics' Ignite UI for React data table & grid supports four column types to display your content such as Image, Text, Numeric, DataTime or a Template Column. View Ignite UI for React tutorials!
_keywords: React Table, Data Grid, column types, Ignite UI for React, Infragistics
mentionedTypes: [ "Grid","CellInfo", "TemplateCellInfo", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/grid/column-types
_tocName: Column Types
_premium: true
---

# React Column Types

The Ignite UI for React Data Table / Data Grid supports 5 column types, plus a Template Column type, giving you complete flexibility over the way your data is displayed in the React data grid. Column types supported are Text column, Numeric column, DateTime column, Image column, ComboBox and Template.

Each column binds to data by setting the [`field`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridcolumn.html#field) property to the name of the corresponding property on the items of your underlying data source bound to the React data grid.

## React Column Types Example

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
    background: White;
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
import { IgrTextColumn } from 'igniteui-react-data-grids';
import { IgrNumericColumn } from 'igniteui-react-data-grids';
import { IgrDateTimeColumn } from 'igniteui-react-data-grids';
import { IgrImageColumn } from 'igniteui-react-data-grids';
import { IgrTemplateColumn } from 'igniteui-react-data-grids';
import { IgrComboBoxColumn } from 'igniteui-react-data-grids';
import { IgrTemplateCellUpdatingEventArgs,

    IgrGridCellValueChangingEventArgs } from 'igniteui-react-data-grids';
import { IgrTemplateCellInfo } from 'igniteui-react-data-grids';
import { IIgrCellTemplateProps } from 'igniteui-react-data-grids';

import { IgrSparkline } from 'igniteui-react-charts';
import { IgrSparklineModule } from 'igniteui-react-charts';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();
IgrSparklineModule.register();

export default class DataGridColumnTypes extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;
    public cityList: any[];
    public cityLookup = new Map<string, any>();

    constructor(props: any) {
        super(props);

        this.data = DataGridSharedData.getEmployees(100);
        this.cityList = [];

        // iterate all employees and generate a list of cities
        this.data.forEach(employee => {
            if(!this.cityLookup.has(employee.City)) {
                this.cityLookup.set(employee.City, employee);
                this.cityList.push(employee);
            }
        });
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrDataGrid
                    ref={this.onGridRef}
                    height="100%"
                    width="100%"
                    rowHeight="50"
                    autoGenerateColumns="false"
                    dataSource={this.data}
                    defaultColumnMinWidth={100}
                    isColumnOptionsEnabled="true"
                    cellValueChanging={this.onCellValueChanging}
                    >
                    <IgrImageColumn field="Photo" headerText="Photo" contentOpacity="1"
                    horizontalAlignment="stretch" width="130" paddingTop="5" paddingBottom="5"  paddingRight="10"/>
                    <IgrTextColumn field="Name" width="*>160"/>

                    <IgrTemplateColumn field="Sales" headerText="Sales" horizontalAlignment="center"
                    paddingLeft="10" paddingRight="0"
                        cellUpdating={this.onSalesCellUpdating} width="*>180"/>

                    {/* TODO un-comment this column and getProductivityChart function when editing templated columns is corrected
                    <IgrTemplateColumn field="Productivity" headerText="Productivity"
                    horizontalAlignment="center" width="*>170" isEditable="false"
                    template={this.getProductivityChart} /> */}

                    <IgrNumericColumn field="Salary" positivePrefix="$"
                    showGroupingSeparator="true" width="*>180"/>

                    <IgrDateTimeColumn field="Birthday" headerText="Date of Birth"
                    horizontalAlignment="stretch" width="*>180" paddingRight="10"/>

                    <IgrComboBoxColumn field="City" headerText="City" dataSource={this.cityList} textField="City" valueField="City" width="*>130"/>

                    <IgrImageColumn field="CountryFlag" headerText="Country Flag" contentOpacity="1"
                    horizontalAlignment="stretch" width="150" paddingTop="5" paddingBottom="5" />

                    <IgrTemplateColumn field="Address" headerText="Address" horizontalAlignment="left"
                        cellUpdating={this.onAddressCellUpdating} width="*>180" />

                    <IgrTemplateColumn field="Phone" horizontalAlignment="center"
                        cellUpdating={this.onPhoneCellUpdating} width="160" />

                    <IgrTextColumn field="Income" width="*>150" horizontalAlignment="center"/>
                    <IgrTextColumn field="Age" width="*>130" horizontalAlignment="center"/>
               </IgrDataGrid>
            </div>
        );
    }

    public onGridRef = (grid: IgrDataGrid) => {
        if (!grid) { return; }

        this.grid = grid;
    }

    // TODO un-comment when editing templated columns is corrected

    // public getProductivityChart(props: IIgrCellTemplateProps) {
    //     const info = props.dataContext as IgrTemplateCellInfo;
    //     return (
    //         <div className="container">
    //            <IgrSparkline
    //                height="30px" width="100%"
    //                displayType="Column"
    //                dataSource={info.rowItem.Productivity}
    //                valueMemberPath="Value"
    //                labelMemberPath="Week"
    //                lineThickness={2}
    //                brush="rgb(21, 190, 6)"
    //                negativeBrush="rgb(211, 17, 3)" />
    //         </div>
    //     );
    // }

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
        let gaugeWidth = (sales / 950000) * 100;
        gaugeWidth = Math.min(100, gaugeWidth);

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
        gaugeBar.id = sales + "_" + gaugeWidth.toFixed(1);
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

    public onCellValueChanging = (s: IgrDataGrid, e: IgrGridCellValueChangingEventArgs) => {

        let row = e.cellInfo.rowItem;
        if (e.column.field === "City")
        {
            let employee = this.cityLookup.get(e.newValue);

            if(employee !== undefined) {
                row.City = employee.City;
                row.Country = employee.Country;
                row.Street = employee.Street;
                row.CountryFlag = employee.CountryFlag;
                row.Address = employee.Address;

                //required for pushing changes to the grid
                s.notifySetItem(e.cellInfo.dataRow, row, row);
            }

        }
    }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataGridColumnTypes/>);
```


<div class="divider--half"></div>

## Text Column

The React data grid is used for displaying formatted text in its associated cells. This is the default column type used to display data of the string type.

## Numeric Column

The [`IgrNumericColumn`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrnumericcolumn.html) is used for displaying a formatted numeric value in its associated cells and enables control of decimal place placement within cells and displaying fractional digits.

## DateTime Column

The [`IgrDateTimeColumn`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatetimecolumn.html) is used for displaying Date objects in its associated cells and enables control to format the Date objects how you see fit.

## Image Column

The [`IgrImageColumn`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrimagecolumn.html) is used for displaying an image within a cell and exposes options for image stretch customization for cells by using its [`imageStretchOption`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrimagecolumn.html#imageStretchOption) option.

You can also choose what type of resource your image is by setting the [`ImageResourceType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.imageresourcetype.html) option.

## ComboBox Column

The [`IgrComboBoxColumn`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrcomboboxcolumn.html) is used for displaying a drop-down list from which your end users can select a single item.

Data binding can be achieved using an array of complex objects via the column's `DataSource` property.

The [`textField`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrcomboboxcolumn.html#textField) property determines which value is shown when users make a selection.

The [`valueField`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrcomboboxcolumn.html#valueField) property determines the bound value of the underlying data item selected. This is necessary if your list of objects have several properties.

## Template Column

The [`IgrTemplateColumn`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrtemplatecolumn.html) is used in conjunction with a cell template. It enables you to apply a custom template to the column's cell. This is done by handling the `CellUpdating` event of the template column.

The `CellUpdating` event's arguments expose the [`IgrTemplateColumn`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrtemplatecolumn.html) that fires the event as well as a [`IgrTemplateCellUpdatingEventArgs`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrtemplatecellupdatingeventargs.html) parameter. This event arguments parameter exposes a `Content` property that returns the HTMLDivElement that will be placed within the associated cells of the column. You can then append new elements to this div.

The [`IgrTemplateCellUpdatingEventArgs`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrtemplatecellupdatingeventargs.html) also exposes a `CellInfo` property that you can use to get a `TemplateCellInfo` object. This object exposes information about the cell and the row, such as the index, underlying data item, and appearance of the cell.

## Sparkline Column

You can embed Sparkline components in [`IgrTemplateColumn`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrtemplatecolumn.html) to show more complex data structures.
Refer to the [Column Sparkline](type-sparkline-table.md) topic for information on how to do this.

## Code Snippet

The following demonstrates the implementation of each of the columns described in this topic:

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    defaultColumnMinWidth="120"
    autoGenerateColumns="false"
    dataSource={this.data}>
    <IgrTextColumn field="FirstName" headerText="First Name" />
    <IgrTextColumn field="LastName" headerText="Last Name" />
    <IgrComboBoxColumn field="City" headerText="City" dataSource={this.cityList} textField="name"/>
    <IgrTemplateColumn field="Address" headerText="Address"
                       cellUpdating={this.onAddressCellUpdating} />
    <IgrImageColumn field="Photo" headerText="Photo"
                    imageResourceType="LocalAsset" />
    <IgrNumericColumn field="Age" headerText="Age"  />
    <IgrDateTimeColumn field="Birthday" headerText="Date of Birth"  />
</IgrDataGrid>
```

```ts
import { IgrTemplateCellUpdatingEventArgs } from 'igniteui-react-data-grids';
import { IgrTemplateCellInfo } from 'igniteui-react-data-grids';
import { IgrTemplateColumn } from 'igniteui-react-data-grids';
import { IgrComboBoxColumn } from 'igniteui-react-data-grids';

public onAddressCellUpdating(s: IgrTemplateColumn, e: IgrTemplateCellUpdatingEventArgs) {
    const content = e.content as HTMLDivElement;
    let span1: HTMLSpanElement | null = null;
    let span2: HTMLSpanElement | null = null;
    const info = e.cellInfo as IgrTemplateCellInfo;
    const item = info.rowItem;

    if (content.childElementCount === 0) {

        span1 = document.createElement("span");
        span2 = document.createElement("span");

        content.style.verticalAlign = "top";
        content.style.marginTop = "15px";
        content.style.lineHeight = "normal";
        content.style.display = "inline-grid";
        content.style.fontFamily = "Verdana";
        content.style.fontSize = "13px";

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
```

The following is a sample data source to use with the above columns.

```ts
const maleNames: string[] = ["Kyle", "Oscar", "Ralph", "Torrey", "Bill", "Frank", "Howard", "Jack", "Larry", "Pete", "Steve", "Vince", "Mark", "Alex", "Max", "Brian", "Chris", "Andrew", "Martin", "Mike", "Steve", "Glenn", "Bruce"];
const femaleNames: string[] = ["Gina", "Irene", "Katie", "Brenda", "Casey", "Fiona", "Holly", "Kate", "Liz", "Pamela", "Nelly", "Marisa", "Monica", "Anna", "Jessica", "Sofia", "Isabella", "Margo", "Jane", "Audrey", "Sally", "Melanie", "Greta", "Aurora", "Sally"];
const lastNames: string[] = ["Adams", "Crowley", "Ellis", "Martinez", "Irvine", "Maxwell", "Clark", "Owens", "Rooney", "Lincoln", "Thomas", "Spacey", "Betts", "King", "Newton", "Fitzgerald", "Holmes", "Jefferson", "Landry", "Newberry", "Perez", "Spencer", "Starr", "Carter", "Edwards", "Stark", "Johnson", "Fitz", "Chief", "Blanc", "Perry", "Stone", "Williams", "Lane", "Jobs", "Adama", "Power", "Tesla"];
const genders: string[] = ["male", "female"];
const cities: string[] = ["New York, New York", "Columbus, Ohio", "Los Angeles, California", "Orlando, Florida", "New Orleans, Louisiana", "Las Vegas, Nevada", "Atlanta, Georgia"];
const roadSuffixes: string[] = ["Road", "Street", "Court", "Way"];
const roadNames: string[] = ["Alpha", "Beta", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Julia", "Kilo", "Lima", "Mike", "November"];

const people: any[] = [];

let maleCount: number = 0;
let femaleCount: number = 0;
for (let i = 0; i < 250; i++) {

    const age: number = Math.round(this.getRandomNumber(20, 40));
    const today: Date = new Date();
    const gender: string = this.getRandomItem(genders);

    let firstName: string;
    const lastName: string = this.getRandomItem(lastNames);

    const propertyNum: string = Math.round(this.getRandomNumber(1, 300)).toString();
    const cityState: string = this.getRandomItem(cities);
    const road: string = this.getRandomItem(roadNames) + " " + this.getRandomItem(roadSuffixes);

    let photoPath: string;

    if (gender === "male") {
        firstName = this.getRandomItem(maleNames);
        maleCount++;

        if (maleCount > 26) {
             maleCount = 0;
        }

        if (maleCount < 10) {
            photoPath = '/assets/GUY0' + maleCount.toString() + '.png';
        }
        else {
            photoPath = '/assets/GUY' + maleCount.toString() + '.png';
        }
    }
    else {
        firstName = this.getRandomItem(femaleNames);
        femaleCount++;

        if (femaleCount > 24) {
            femaleCount = 0;
        }

        if (femaleCount < 10) {
            photoPath = '/assets/GIRL0' + femaleCount.toString() + '.png';
        }
        else {
            photoPath = '/assets/GIRL' + femaleCount.toString() + '.png';
        }
    }

    const path: string = './assets/GIRL01.png';

    const birthday: Date = new Date(today.getFullYear() - age, Math.round(this.getRandomNumber(1, 12)), Math.round(this.getRandomNumber(1, 28)));

    people.push({
        Address: propertyNum + " " + road + ", " + cityState,
        Age: age,
        Birthday: birthday,
        City: cityState,
        FirstName: firstName,
        LastName: lastName,
        Photo: path,
        Street: propertyNum + " " + road + ","
    });
}

this.data = people;

public getRandomNumber(min: number, max: number): number {
    return min + Math.random() * (max - min);
}

public getRandomItem(array: any[]): any {
    const index = Math.round(this.getRandomNumber(0, array.length - 1));
    return array[index];
}
```

## API References

- [`IgrDataGrid`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html)
- `CellInfo`
- `CellUpdating`
- [`IgrComboBoxColumn`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrcomboboxcolumn.html)
- `Content`
- `DataSource`
- [`IgrDateTimeColumn`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatetimecolumn.html)
- [`field`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridcolumn.html#field)
- [`IgrImageColumn`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrimagecolumn.html)
- [`ImageResourceType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.imageresourcetype.html)
- `ImageStretchOption`
- [`IgrNumericColumn`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrnumericcolumn.html)
- `TemplateCellInfo`
- [`IgrTemplateCellUpdatingEventArgs`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrtemplatecellupdatingeventargs.html)
- [`IgrTemplateColumn`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrtemplatecolumn.html)
- `TextField`
- `ValueField`
