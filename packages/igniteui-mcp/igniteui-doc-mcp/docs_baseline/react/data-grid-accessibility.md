---
title: React Data Grid | Real-Time Data Grid and Tables | Accessibility Compliance | Infragistics
_description: Use Infragistics' Ignite UI for React Data Table & Grid to support accessibility feature that will enable screen readers to read "speak" keyboard navigation interactions through the cells and columns of the grid. View Ignite UI for React table tutorials!
_keywords: React Table, Data Grid, cell accessibility, Ignite UI for React, Infragistics
mentionedTypes: ["Grid", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: Accessibility Compliance
_premium: true
---

# React Grid Accessibility Compliance

The Ignite UI for React Data Table / Data Grid supports accessibility and screen readers that interpret keyboard navigation interactions through the cells and columns of the grid.

This is activated by setting the [`useAccessibility`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#useAccessibility) property of the grid to **true**.

## React Grid Accessible Example

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

export default class DataGridAccessibility extends React.Component<any, any> {

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
root.render(<DataGridAccessibility/>);
```


<div class="divider--half"></div>

## Section 508 Compliance

<a href="https://www.section508.gov/" target="_blank">Section 508</a> of the Rehabilitation Act was amended in 1998 by Congress to require all Federal agencies to make their electronic and information technology accessible to people with disabilities. Since then, Section 508 compliance has not only been a requirement in government agencies, but it's also important when providing software solutions and designing Web pages.

Section 1194.22 of the Section 508 law specifically targets Web-based intranet and internet information and systems, and contains a set of 16 rules to follow. In order to enable you to keep your Web applications and Web sites compatible with these rules with minimal effort on your part, Infragistics has taken steps to ensure that the Ignite UI for Angular controls and components are compliant with the relevant accessibility rules.

## WAI-ARIA Support

In 2014 the W3C finalized their <a href="https://www.w3.org/TR/wai-aria/" target="_blank">WAI-ARIA specification</a> which defined how to design Web content and Web applications to be more accessible to users with disabilities.

This section shows the accessibility (ARIA) support of the framework as well as how easily manageable the directionality of the components is.

ARIA Attributes
In order to give screen readers the contextual information they require to interpret and interact with the grid, ARIA attributes are added to the grid DOM elements. These attributes are particularity useful when plain HTML elements such div and span are used to create complex DOM structures, which is the case with ag-Grid.

When inspecting the grid's DOM elements the following roles and properties are supported and announced by the screen reader:

- Grid Cell - element containing a grid cell.
- Row Count - announces the number of rows.
- Column Count - announces the number of rows.
- Row - a row of column headers or grid cells.
- Row Index - announces the visible index of the row.
- Row Selected - only present if the row is selectable, it announces the selection state.
- Group Expanded - only present in row groups, it announces the expand state.
- Column Header - element containing a column header.
- Cell Index - announces the visible index of the column.
- Colspan - only present if the column spans across multiple columns, it helps guide screen readers.
- Sort - only present in sortable columns, it announces the sort state.
- Column Index - announces the visible index of the cell.
- Selected - only present if the cell is selectable, it announces the selection state.
- Expanded - only present in a group cell, it announces the expand state.

## Keyboard Navigation

After setting the [`useAccessibility`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#useAccessibility) property to **true**, this will enable a range of keyboard navigation options in the data grid that screen readers can recognize. Below is a description of each of the key presses / combinations and the effect they will have relative to the currently activated cell:

Navigating within the Grid

- <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>→</kbd>: Navigate one cell up.
- <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>←</kbd>: Navigate one cell left.
- <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>↓</kbd>: Navigate one cell below.
- <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>↑</kbd>: Navigate one cell above.
- <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>HOME</kbd>: Navigate to first column header.
- <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>END</kbd>: Navigate to last visible cell.
- <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>↑</kbd> Navigate to current column header.
- <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>↓</kbd> Navigate to last cell in current column.
- <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>←</kbd> Navigate to first cell in current row.
- <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>→</kbd> Navigate to last cell in current row.

Screen Reader Commands

- <kbd>CTRL</kbd> OR <kbd>ALT</kbd> + <kbd>Num Pad 5</kbd>: Read current cell.
- <kbd>INSERT</kbd> + <kbd>SHIFT</kbd> + <kbd>↑</kbd>: Read current row.
- <kbd>INSERT</kbd> + <kbd>SHIFT</kbd> + <kbd>HOME</kbd>: Read from start of row.
- <kbd>INSERT</kbd> + <kbd>SHIFT</kbd> + <kbd>PAGE UP</kbd>: Read to end of row from current cell.
- <kbd>INSERT</kbd> + <kbd>SHIFT</kbd> + <kbd>Num Pad 5</kbd>: Read current column.
- <kbd>INSERT</kbd> + <kbd>SHIFT</kbd> + <kbd>END</kbd>: Read from top of column.
- <kbd>INSERT</kbd> + <kbd>SHIFT</kbd> + <kbd>PAGE DOWN</kbd>: Read to bottom of column.

## Code Snippet

The following demonstrates how to implement cell accessibility in the  React data grid:

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    dataSource={this.data}
    useAccessibility="true" />
```

## API References

- [`IgrDataGrid`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html)
- [`useAccessibility`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html#useAccessibility)
