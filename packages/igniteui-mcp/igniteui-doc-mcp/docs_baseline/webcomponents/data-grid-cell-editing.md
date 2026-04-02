---
title: Web Components Data Grid | Cell and Row Editing with Batch Updating | Infragistics
_description: Use Infragistics' Web Components grid component which supports the cell and row editing feature that can also be configured to batch update all cells of the grid at any given moment. Learn how Ignite UI for Web Components can help you better display your data!
_keywords: Web Components Table, Data Grid, cell and row editing, Ignite UI for Web Components, batch updating, Infragistics
mentionedTypes: ["Grid", "EditModeType", "TransactionType"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/grid/cell-editing
_tocName: Grid Editing
_premium: true
---

> [!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

# Web Components Grid Editing

The Ignite UI for Web Components Data Table / Data Grid supports cell and row editing with batch updating. Note, this is currently limited to non-templated columns.

## Web Components Grid Editing Example

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
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Overview

Editing in the Web Components data grid is configured by using the [`editMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcomponent.html#editMode) option of the Web Components grid. This property takes three different options, listed below:

- [`None`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_grids.editmodetype.html#None): Editing is not enabled.
- [`Cell`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_grids.editmodetype.html#Cell): Allow cells to enter edit mode and commit the value on exiting edit mode.
- [`CellBatch`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_grids.editmodetype.html#CellBatch): Allows cells to enter edit mode but changes will be cached later until they are committed.
- [`Row`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_grids.editmodetype.html#Row): Allow rows to enter edit mode and commit the value on exit.

When set to [`CellBatch`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_grids.editmodetype.html#CellBatch), in order to commit the changes you must perform the `commitEdits` method from the grid. The grid will italicize the cells until they are committed providing control over when to push changes back to the datasource.

In addition, error handling can be performed by hooking the `onCellValueChanging` event and inspecting new values before they are committed. The grid exposes a `setEditError` method that can output an error message. This keeps the cell in edit mode until a valid value is entered. Otherwise the grid's `rejectEdit` method can be performed to revert the invalid value. If no invalid value is found, you can also commit your changes by calling the grid's `acceptEdit` method.

Commits can be approved or declined at the grid level by hooking `onDataCommitting` via the `acceptCommit` or `rejectCommit` methods passing the `commitID` event argument as the parameter. This event also exposes a `changes` collection which stores all the modifications prior to being committed. For example, you can check if a commit was from an add, update, or delete operation via the [`TransactionType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_core.transactiontype.html) property exposed on the `changes` collection and perform an `acceptCommit` or `rejectCommit` when necessary.

## Excel Style Editing

[`editOnKeyPress`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcomponent.html#editOnKeyPress) enables you to instantly begin editing when typing similar to how Excel behaves. In addition you may set the [`editModeClickAction`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcomponent.html#editModeClickAction) property to `SingleClick` to allow users to quickly edit cells while navigating to other cells. By default double-clicking is required to enter edit mode.

## Code Snippet

The following demonstrates how to configure editing on the data grid and committing the data.

```html
<button id="clickCommit">Commit</button>
<igc-data-grid id="grid"
    height="100%"
    width="100%"
    activation-mode="Cell"
    edit-mode="Cell">
</igc-data-grid>
```

```ts
import { IgcDataGridComponent } from 'igniteui-webcomponents-data-grids';

this.onCommitClick = this.onCommitClick.bind(this);

public onCommitClick() {
    this.grid.commitEdits();
}
```

## Undo/Redo batch changes

The following demonstrates how to revert changes while batch updating is enabled.

```html
<igc-data-grid id="grid"
      height="100%"
      width="100%"
      activation-mode="Cell"
      edit-mode="Cell">
</igc-data-grid>
<button id="undoClick" disabled="true">Undo</button>
<button id="redoClick" disabled="true">Redo</button>
```

```ts
import { IgcDataGridComponent } from 'igniteui-webcomponents-data-grids';

public onUndoClick() {
    this.grid.undo();
    if (this.grid.editMode === EditModeType.CellBatch && this.redo !== null)
    {
        this.redo.disabled = false;
    }
}

public onRedoClick() {
    this.grid.redo();
}
```

## Error Validation and Commit Integrity

The following demonstrates how incorporate error by checking if cells are empty when leaving edit mode and accepts commits that are from updated cells only.

```html
<igc-data-grid
    id="grid"
    height="calc(100% - 50px)"
    width="100%"
    activation-mode="Cell"
    selection-mode="SingleRow"
    default-column-min-width="125"
    is-column-options-enabled="true"
    auto-generate-columns="false"
    edit-mode="Cell">
```

```ts
import { IgcGridDataCommittingEventArgs } from 'igniteui-webcomponents-data-grids';
import { TransactionType } from 'igniteui-webcomponents-core'

this.onCellValueChanging = this.onCellValueChanging.bind(this);
this.grid.cellValueChanging = this.onCellValueChanging;

this.onDataCommitting = this.onDataCommitting.bind(this);
this.grid.dataCommitting = this.onDataCommitting;


public onCellValueChanging (s: IgcDataGridComponent, e: IgcGridCellValueChangingEventArgs) {
    if (s.editMode === EditModeType.CellBatch && this.undo !== null)
    {
        this.undo.disabled = false;
    }

    //check if value is empty upon exiting edit mode.
    if (e.newValue === "") {
        s.setEditError(e.editID, "Error, cell is empty");
        //or revert changes
        s.rejectEdit(e.editID);
    }
    else {
        s.acceptEdit(e.editID);
    }
}

public onDataCommitting (s: IgcDataGridComponent, e: IgcGridDataCommittingEventArgs) {
    if (e.changes[0].transactionType === TransactionType.Update) {
        //commit was passed
        s.acceptCommit(e.commitID);
    }
    else{
        //commit was prevented
        s.rejectCommit(e.commitID);
    }
}
```

## API References

- [`CellBatch`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_grids.editmodetype.html#CellBatch)
- [`editModeClickAction`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcomponent.html#editModeClickAction)
- [`editMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcomponent.html#editMode)
- `SingleClick`
- [`TransactionType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_core.transactiontype.html)
