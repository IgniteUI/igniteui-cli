---
title: React grid/table pagination – Ignite UI for React 
_description: View Infragistics' React grid component's Pager, which was designed to take in an array of data and output portions of that data as a page.
_keywords: React Table, Data Grid, row, paging, Ignite UI for React, Infragistics
mentionedTypes: ["Grid", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/grid/paging
_tocName: Row Paging
_premium: true
---

# React Grid/Table Pagination

Tabular table UIs are used commonly in many web products. Building a tabular table UI from scratch isn't easy, however, Ignite UI for React grid, creating a Table UI is simple, and binding large amounts of local or remote data to the React grid is easy. Since the grid is virtualized by default, you are not required to include table pagination to show large data sets. It is mainly used due to its most efficient ways of organizing complex data in the UI. With table pagination, data can be displayed in a set number of rows, letting users “scroll” through their data, without actually needing a scroll bar. The UI for table pagination usually includes things like the current page, total pages, and clickable Previous and Next arrows / buttons that let users flip through pages, as demonstrated here:

Row Paging is enabled within the Ignite UI for React Data Table / Data Grid by setting the [`isPagerVisible`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#isPagerVisible) property. In addition, you can limit the maximum number of visible rows by setting [`pageSize`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#pageSize).

## React Row Paging Example

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
import { IgrColumnGroupDescription } from 'igniteui-react-data-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-data-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridPager extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;

    constructor(props: any) {
        super(props);

        this.state = { componentVisible: true }
        this.initData();
    }

    public onGridRef = (grid: IgrDataGrid) => {
        if (!grid) { return; }

        const state = new IgrColumnGroupDescription();
        state.field = "Status";
        state.displayName = "Status";
        this.grid = grid;
        this.grid.groupDescriptions.add(state);
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
                isPagerVisible="true"
                pageSize="20"
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
root.render(<DataGridPager/>);
```


<div class="divider--half"></div>

## Overview

From a UX perspective, table pagination has pros and cons. According to a [recent article](https://www.uxmatters.com/mt/archives/2018/11/paging-scrolling-and-infinite-scroll.php) on UX Matters, here is a breakdown of the good and the bad when it comes to table pagination.

Table Pagination Benefits:

- Limits user choice
- Clicks are measurable

Table Pagination Negatives:

- Users still have to scrolls
- Pagers work and behave differently from site to site
- Too many UI controls can be confusing
- Users perceive paging and slow and cumbersome
- Users may not notice pagination controls
- Page loading may be slow
- Users are confused whether actions apply to Page or entire set of data

With the Ignite UI React grid, we allow the developer to add paging, however, as the grid has infinite scrolling built in by default, we recommend infinite (or virtual) scrolling vs. adding a pager to the grid. With virtualized, infinite scrolling as the default user experience, you get:

- Best performance while still having control or how much data is ‘paged’ via the scrolling interaction
- Natural approach to scrolling all content
- All interactions are clear to the end user
- Maps to the natural interactions on a mobile UX

## React Grid/Page Synchronization

When users interact with the Grid like sorting and grouping, and you have enabled the React Pager on the grid, you need to use the following functions to ensure that the React Pagination data is synchronized with the React table display.

- applySorts
- applyGroups
- applyFilters

## API References

- [`IgrDataGrid`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html)
- [`isPagerVisible`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#isPagerVisible)
- [`pageSize`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#pageSize)
