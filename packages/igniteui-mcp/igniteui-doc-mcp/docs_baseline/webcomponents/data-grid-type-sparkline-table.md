---
title: Web Components Data Grid | Column Sparkline | Infragistics
_description: See how Ignite UI for Web Components Data Table & Grid supports a template column which provides you a way to embed other components such as the column sparkline.
_keywords: Web Components Table, Data Grid, column sparkline, Ignite UI for Web Components, data binding, Infragistics
mentionedTypes: ["Grid", "CellInfo", "TemplateCellInfo", "Sparkline"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: Column Sparkline
_premium: true
---

<!-- Blazor, WebComponents -->

> \[!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

<!-- end: Blazor, WebComponents -->

# Web Components Column Sparkline

The Ignite UI for Web Components Data Table / Data Grid supports a Template Column which provides you to a way to embed other components such as Ignite UI for Web Components sparkline component. Refer to the [Column Types](column-types.md) topic for other types of columns supported in the [`IgcDataGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcomponent.html) component.

## Web Components Column Sparkline Example

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
            "Barbados", "Jamaica", "Cuba", "Spain" ];

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
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Code Snippet

The following code example shows how to embed [`IgcSparklineComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcsparklinecomponent.html) component in [`IgcTemplateColumn`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igctemplatecolumn.html) of the [`IgcDataGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcomponent.html) component :

```html
<igc-data-grid id="grid"
    height="100%"
    width="100%"
    row-height="70"
    auto-generate-columns="false">
    <!-- ... -->
    <igc-template-column id="historyColumn"
        field="OrderHistory" header-text="Order History" horizontal-alignment="center" width="*>150"></igc-template-column>
    <!-- ... -->
</igc-data-grid>
```

```ts
import { IgcDataGridModule } from 'igniteui-webcomponents-data-grids';
import { IgcDataGridComponent } from 'igniteui-webcomponents-data-grids';
import { IgcTemplateColumnComponent } from 'igniteui-webcomponents-data-grids';
import { IgcTemplateCellInfo } from 'igniteui-webcomponents-data-grids';
import { IgcTemplateCellUpdatingEventArgs } from 'igniteui-webcomponents-data-grids';
import { IgcSparklineModule } from 'igniteui-webcomponents-charts';
import { IgcSparklineComponent } from 'igniteui-webcomponents-charts';

// registering Grid and Sparkline chart's modules:
ModuleManager.register(IgcDataGridModule);
ModuleManager.register(IgcSparklineModule);

constructor() {
this.grid = document.getElementById("grid") as IgcDataGridComponent;
this.grid.dataSource = Products.getData();

this.onUpdatingHistoryColumn = this.onUpdatingHistoryColumn.bind(this);

const historyColumn = document.getElementById("historyColumn") as IgcTemplateColumnComponent;
historyColumn.cellUpdating = this.onUpdatingHistoryColumn;
}

public onUpdatingHistoryColumn(s: IgcTemplateColumnComponent, e: IgcTemplateCellUpdatingEventArgs) {
    const content = e.content as HTMLDivElement;
    let chart: IgcSparklineComponent | null = null;
    let info = e.cellInfo as IgcTemplateCellInfo;

    if (content.childElementCount === 0) {
        chart = new IgcSparklineComponent();
        chart.valueMemberPath = "Sold";
        chart.labelMemberPath = "Week";
        chart.displayType = SparklineDisplayType.Line;
        chart.lineThickness = 2;
        chart.brush = "rgb(21, 190, 6)";
        chart.negativeBrush = "rgb(211, 17, 3)";
        chart.width = "100%";
        chart.height = "100%";

        content.style.width = "calc(100% - 10px)";
        content.style.height = "calc(100% - 10px)";
        content.style.padding = "5px";
        content.style.margin = "0px";
        content.style.display = "inline-grid";
        content.appendChild(chart);
    }
    else {
        chart = content.children[0] as IgcSparklineComponent;
    }

    if (chart) {
        chart.dataSource = info.rowItem.OrderHistory;
    }
}
```

## API References

- [`IgcDataGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcomponent.html)
- [`IgcSparklineComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcsparklinecomponent.html)
