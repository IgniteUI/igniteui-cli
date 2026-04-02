---
title: React Data Grid | Binding Local Data | Infragistics
_description: Use Infragistics' React grid control to bind to an array of data. Learn how Ignite UI for React table can help you better display your data!
_keywords: React Table, Data Grid, binding to data, Ignite UI for React, Infragistics, data binding
mentionedTypes: ["Grid", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: Binding Local Data
_premium: true
---

# React Binding Local Data

The following sample demonstrates the Ignite UI for React Data Table / Data Grid data binding to an array of data.

## React Binding Local Data Example

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
import { IgrGridColumnOptionsModule } from 'igniteui-react-data-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridBindingLocalData extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;

    constructor(props: any) {
        super(props);

        this.state = { componentVisible: true }
        this.initData();
    }

    public onGridRef = (grid: IgrDataGrid) => {
        if (!grid) { return; }
        this.grid = grid;
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrDataGrid
                ref={this.onGridRef}
                height="100%"
                width="100%"
                autoGenerateColumns="false"
                isColumnOptionsEnabled="true"
                dataSource={this.data}>
                    <IgrTextColumn field="ProductID" headerText="ID" width="*>110" horizontalAlignment="center"/>
                    <IgrTextColumn field="ProductName" headerText="Product"  width="*>120" />
                    <IgrImageColumn field="CountryFlag" headerText="Country" width="*>130"
                    contentOpacity="1" horizontalAlignment="center" paddingTop="5" paddingBottom="5"/>
                    <IgrNumericColumn field="ProductPrice" headerText="Price" width="*>110"
                    positivePrefix="$" showGroupingSeparator="true" minFractionDigits={2}/>
                    <IgrNumericColumn field="OrderItems" headerText="Orders" width="*>140"/>
                    <IgrNumericColumn field="OrderValue" headerText="Order Value" width="*>160"
                    positivePrefix="$" showGroupingSeparator="true" />
                    <IgrDateTimeColumn field="OrderDate" headerText="Order Date" width="*>150"
                    horizontalAlignment="right" dateTimeFormat="DateShort" />
                    <IgrNumericColumn field="Margin" headerText="Margin" width="*>140"
                    positiveSuffix="%" horizontalAlignment="center" />
                    <IgrNumericColumn field="Profit" headerText="Profit" width="*>140"
                    positivePrefix="$" showGroupingSeparator="true" />
                    <IgrTextColumn field="Status" headerText="Status" width="*>140"
                    horizontalAlignment="center"   />
                </IgrDataGrid>
            </div>
        );
    }

    public getRandomDate(): Date {
        const today: Date = new Date();
        const year: number = today.getFullYear();
        const month: number = this.getRandomNumber(0, 8);
        const day: number = this.getRandomNumber(10, 27);
        return new Date(year, month, day);
    }

    public getRandomNumber(min: number, max: number): number {
        return Math.round(min + Math.random() * (max - min));
    }

    public getRandomItem(array: any[]): any {
        const index = Math.round(this.getRandomNumber(0, array.length - 1));
        return array[index];
    }

    public getCountryFlag(country: string): string {

        const flag = 'https://dl.infragistics.com/x/img/flags/' + country + '.png'
        return flag;
    }

    public initData() {

        const names: string[] = [
            "Intel CPU", "AMD CPU",
            "Intel Motherboard", "AMD Motherboard", "Nvidia Motherboard",
            "Nvidia GPU", "Gigabyte GPU", "Asus GPU", "AMD GPU", "MSI GPU",
            "Corsair Memory", "Patriot Memory", "Skill Memory",
            "Samsung HDD", "WD HDD", "Seagate HDD", "Intel HDD", "Asus HDD",
            "Samsung SSD", "WD SSD", "Seagate SSD", "Intel SSD", "Asus SSD",
            "Samsung Monitor", "Asus Monitor", "LG Monitor", "HP Monitor" ];

        const countries: string[] = ["United-States", "United-Kingdom", "France", "Canada", "Poland",
            "Denmark", "Croatia", "Australia", "Seychelles",
            "Sweden", "Germany", "Japan", "Ireland",
            "Barbados", "Jamaica", "Cuba", "Spain",];
        const status: string[] = [ "Packing", "Shipped", "Delivered"]
        const sales: any[] = [];

        for (let i = 0; i < 200; i++) {
            const price = this.getRandomNumber(10000, 90000) / 100;
            const items = this.getRandomNumber(4, 30);
            const value = Math.round(price * items);
            const margin = this.getRandomNumber(2, 5);
            const profit = Math.round((price * margin / 100) * items);
            const country = this.getRandomItem(countries);
            sales.push({
                Country: country,
                CountryFlag: this.getCountryFlag(country),
                Margin: margin,
                OrderDate: this.getRandomDate(),
                OrderItems: items,
                OrderValue: value,
                ProductID: 1001 + i,
                ProductName: this.getRandomItem(names),
                ProductPrice: price,
                Profit: Math.round(profit),
                Status: this.getRandomItem(status),
            });
        }

        this.data = sales;
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataGridBindingLocalData/>);
```


## Code Snippet

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    rowHeight="45"
    autoGenerateColumns="false"
    dataSource={this.data}>
        <IgrTextColumn field="ProductID" headerText="Order ID" width="*>70" horizontalAlignment="center"/>
        <IgrTextColumn field="ProductName" headerText="Product Name"   />
        <IgrNumericColumn field="ProductPrice" headerText="Price" width="*>90"
        positivePrefix="$" showGroupingSeparator="true" minFractionDigits={2}/>
        <IgrNumericColumn field="OrderItems" headerText="Orders" width="*>70"/>
        <IgrNumericColumn field="OrderValue" headerText="Order Value" width="*>100"
        positivePrefix="$" showGroupingSeparator="true" />
        <IgrDateTimeColumn field="OrderDate" headerText="Order Date" width="*>100"
        horizontalAlignment="right" dateTimeFormat="DateShort" />
        <IgrImageColumn field="CountryFlag" headerText="Country" width="*>100"
        contentOpacity="1" horizontalAlignment="center"/>
        <IgrNumericColumn field="Margin" headerText="Margin" width="90"
        positiveSuffix="%" horizontalAlignment="center" />
        <IgrNumericColumn field="Profit" headerText="Profit" width="70"
        positivePrefix="$" showGroupingSeparator="true" />
        <IgrTextColumn field="Status" headerText="Status" width="110"
        horizontalAlignment="center"   />
</IgrDataGrid>
```

```ts
public data: any[];
public initData() {
        const names: string[] = [
            "Intel CPU", "AMD CPU",
            "Intel Motherboard", "AMD Motherboard", "Nvidia Motherboard",
            "Nvidia GPU", "Gigabyte GPU", "Asus GPU", "AMD GPU", "MSI GPU",
            "Corsair Memory", "Patriot Memory", "Skill Memory",
            "Samsung HDD", "WD HDD", "Seagate HDD", "Intel HDD", "Asus HDD",
            "Samsung SSD", "WD SSD", "Seagate SSD", "Intel SSD", "Asus SSD",
            "Samsung Monitor", "Asus Monitor", "LG Monitor", "HP Monitor" ];

        const countries: string[] = ["USA", "UK", "France", "Canada", "Poland",
            "Denmark", "Croatia", "Australia", "Seychelles",
            "Sweden", "Germany", "Japan", "Ireland",
            "Barbados", "Jamaica", "Cuba", "Spain",];
        const status: string[] = [ "Packing", "Shipped", "Delivered"]
        const sales: any[] = [];

        for (let i = 0; i < 200; i++) {
            const price = this.getRandomNumber(10000, 90000) / 100;
            const items = this.getRandomNumber(4, 30);
            const value = Math.round(price * items);
            const margin = this.getRandomNumber(2, 5);
            const profit = Math.round((price * margin / 100) * items);
            const country = this.getRandomItem(countries);
            sales.push({
                Country: country,
                CountryFlag: this.getCountryFlag(country),
                Margin: margin,
                OrderDate: this.getRandomDate(),
                OrderItems: items,
                OrderValue: value,
                ProductID: 1001 + i,
                ProductName: this.getRandomItem(names),
                ProductPrice: price,
                Profit: Math.round(profit),
                Status: this.getRandomItem(status),
            });
        }

        this.data = sales;
    }
```

<!-- TODO ADD WC, ETC. -->

## API References

- [`IgrDataGrid`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html)
