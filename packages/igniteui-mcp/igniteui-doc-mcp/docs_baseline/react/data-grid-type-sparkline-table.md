---
title: React Data Grid | Column Sparkline | Infragistics
_description: See how Ignite UI for React Data Table & Grid supports a template column which provides you a way to embed other components such as the column sparkline.
_keywords: React Table, Data Grid, column sparkline, Ignite UI for React, data binding, Infragistics
mentionedTypes: ["Grid", "CellInfo", "TemplateCellInfo", "Sparkline"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: Column Sparkline
_premium: true
---

# React Column Sparkline

The Ignite UI for React Data Table / Data Grid supports a Template Column which provides you to a way to embed other components such as Ignite UI for React sparkline component. Refer to the [Column Types](column-types.md) topic for other types of columns supported in the [`IgrDataGrid`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html) component.

## React Column Sparkline Example

```typescript
export class Products {

    public static names: string[] = [
        "Intel CPU", "AMD CPU",
        "Nvidia GPU", "Gigabyte GPU", "Asus GPU", "AMD GPU", "MSI GPU",
        "Corsair Memory", "Patriot Memory", "Skill Memory",
        "Samsung HDD", "WD HDD", "Seagate HDD", "Intel HDD", "Asus HDD",
        "Samsung SSD", "WD SSD", "Seagate SSD", "Intel SSD", "Asus SSD",
        "Samsung Monitor", "Asus Monitor", "LG Monitor", "HP Monitor" ];

    public static countries: string[] = ["United-States", "United-Kingdom", "France", "Canada", "Poland",
            "Denmark", "Croatia", "Australia", "Seychelles",
            "Sweden", "Germany", "Japan", "Ireland",
            "Barbados", "Jamaica", "Cuba", "Spain",];

    public static status: string[] = [ "Packing", "Shipped", "Delivered"]

    public static getData(count?: number): any[] {
        if (count === undefined) {
            count = 20;
        }
        const items: any[] = [];
        for (let i = 0; i < count; i++) {
            const id = this.pad(count - i, count.toString().length);
            const price = this.getRandomNumber(10000, 90000) / 100;
            const orderCount = this.getRandomNumber(4, 30);
            const orderValue = Math.round(price * orderCount);
            const orderShipped = this.getRandomNumber(30, 100);
            const margin = this.getRandomNumber(5, 10);
            const profit = Math.round(orderValue * (margin / 100));
            const country = this.getRandomItem(this.countries);

            // sales per month for sparkline chart
            const sales: any[] = [];
            for (let m = 0; m < 12; m++) {
                const sale = this.getRandomNumber(20, 90);
                sales.push({Value: sale, Month: m});
            }
            items.push({
                CountryFlag: this.getCountryFlag(country),
                CountryName: country,
                Margin: margin,
                // data source for embedded sparklines
                OrderCount: orderCount,
                OrderHistory: this.getOrderHistory(26),
                OrderShipped: orderShipped,
                OrderValue: orderValue,
                OrderDate: this.getRandomDate(),
                ProductID: id,
                ProductName: this.getRandomItem(this.names),
                ProductPrice: price,
                Profit: profit,
                ReturnRate: this.getReturnRate(52),
                Status: this.getRandomItem(this.status),
            });
        }
        // console.log("Products:" + items.length)
        return items;
    }

    public static getOrderHistory(weekCount?: number): any[] {
        if (weekCount === undefined) {
            weekCount = 52;
        }
        const sales: any[] = [];
        for (let w = 0; w < weekCount; w++) {
            const value = this.getRandomNumber(0, 100);
            sales.push({Sold: value, Week: w});
        }
        return sales;
    }

    public static getReturnRate(weekCount?: number): any[] {
        if (weekCount === undefined) {
            weekCount = 52;
        }
        const rates: any[] = [];
        for (let w = 0; w < weekCount; w++) {
            const value = this.getRandomNumber(-100, 100);
            rates.push({Balance: value, Week: w});
        }
        return rates;
    }

    public static getCountryFlag(country: string): string {
        const flag = 'https://dl.infragistics.com/x/img/flags/' + country + '.png'
        return flag;
    }

    public static getRandomDate(): Date {
        const today: Date = new Date();
        const year: number = today.getFullYear();
        const month: number = this.getRandomNumber(0, 8);
        const day: number = this.getRandomNumber(10, 27);
        return new Date(year, month, day);
    }

    public static getRandomNumber(min: number, max: number): number {
        return Math.round(min + Math.random() * (max - min));
    }

    public static getRandomItem(array: any[]): any {
        const index = Math.round(this.getRandomNumber(0, array.length - 1));
        return array[index];
    }

    public static pad(num: number, size: number, char?: string): string {
        if (char === undefined) char = "0";
        let s = num + "";
        // if (s.length)
        while (s.length < size) s = char + s;
        return s;
    }
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Products } from './Products';
// sparkline modules:
import { IgrSparkline } from 'igniteui-react-charts';
import { IgrSparklineModule } from 'igniteui-react-charts';
// grid modules:
import { IgrDataGridModule } from 'igniteui-react-data-grids';
import { IgrDataGrid } from 'igniteui-react-data-grids';
import { IgrTextColumn } from 'igniteui-react-data-grids';
import { IgrNumericColumn } from 'igniteui-react-data-grids';
import { IgrImageColumn } from 'igniteui-react-data-grids';
import { IgrTemplateColumn, IIgrCellTemplateProps } from 'igniteui-react-data-grids';
import { IgrTemplateCellInfo } from 'igniteui-react-data-grids';

IgrDataGridModule.register();
IgrSparklineModule.register();

export default class SparklineGrid extends React.Component<any, any> {

    public data: any[];

    constructor(props: any) {
        super(props);

        this.data = Products.getData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrDataGrid
                    width="100%"
                    height="100%"
                    rowHeight="90"
                    autoGenerateColumns="false"
                    dataSource={this.data}>
                    <IgrTextColumn
                        field="ProductID"
                        headerText="ID"
                        width="*>110"
                        horizontalAlignment="Center" />
                    <IgrTextColumn
                        field="ProductName"
                        headerText="Product"
                        width="*>140" />
                    <IgrNumericColumn
                        field="ProductPrice"
                        headerText="Price"
                        width="*>110"
                        positivePrefix="$"
                        showGroupingSeparator={true}
                        minFractionDigits={2} />
                    <IgrTemplateColumn
                        field="OrderHistory"
                        headerText="Order History"
                        width="*>180"
                        paddingTop={10}
                        paddingBottom={10}
                        horizontalAlignment="Center"
                        template={this.getOrderHistoryTemplate} />
                    <IgrNumericColumn
                        field="OrderCount"
                        headerText="Orders"
                        width="*>110"
                        horizontalAlignment="Center" />
                    <IgrNumericColumn
                        field="Profit"
                        width="*>120"
                        positivePrefix="$"
                        showGroupingSeparator={true} />
                    <IgrImageColumn
                        field="CountryFlag"
                        headerText="Country"
                        width="*>120"
                        isEditable={false}
                        contentOpacity={1}
                        horizontalAlignment="Center"
                        paddingTop={10}
                        paddingBottom={10} />
                    <IgrTextColumn
                        field="Status"
                        width="*>120"
                        horizontalAlignment="Center" />
               </IgrDataGrid>
            </div>
        );
    }

    public getOrderHistoryTemplate(props: IIgrCellTemplateProps) {
        const info = props.dataContext as IgrTemplateCellInfo;
        return (
            <div style={{ width: "100%", height: "70px", background: "transparent" }}>
                <IgrSparkline
                    width="100%"
                    height="100%" 
                    displayType="Line"
                    dataSource={info.rowItem.OrderHistory}
                    valueMemberPath="Sold"
                    labelMemberPath="Week"
                    brush="rgb(21, 190, 6)" />
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SparklineGrid/>);
```


<div class="divider--half"></div>

## Code Snippet

The following code example shows how to embed [`IgrSparkline`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsparkline.html) component in [`IgrTemplateColumn`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igrtemplatecolumn.html) of the [`IgrDataGrid`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html) component :

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    rowHeight="70"
    autoGenerateColumns="false"
    dataSource={this.data}>
    {/* ... */}
    <IgrTemplateColumn field="OrderHistory"
    headerText="Order History"
    horizontalAlignment="center" width="*>120"
    template={this.getOrderHistoryTemplate} />
    {/* ... */}
</IgrDataGrid>
```

```ts
import { IgrDataGrid } from 'igniteui-react-data-grids';
import { IgrTemplateColumn, IIgrCellTemplateProps } from 'igniteui-react-data-grids';

public getOrderHistoryTemplate(props: IIgrCellTemplateProps) {
    const info = props.dataContext as IgrTemplateCellInfo;
    return (
        <div className="sparklineInGrid">
           <IgrSparkline
               height="60px" width="100%"
               displayType="Line"
               dataSource={info.rowItem.OrderHistory}
               valueMemberPath="Sold"
               labelMemberPath="Week"
               lineThickness={2}
               brush="rgb(21, 190, 6)"
               negativeBrush="rgb(211, 17, 3)" />
        </div>
    );
}
```

## API References

- [`IgrDataGrid`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html)
- [`IgrSparkline`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsparkline.html)
