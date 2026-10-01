---
title: Web Components Bubble Chart | Data Visualization | Infragistics
description: Infragistics' Web Components Bubble Chart
keywords: Web Components Charts, Bubble Chart, Infragistics
license: commercial

namespace: Infragistics.Controls.Charts
llms:
  description: "The Ignite UI for Web Components Bubble Chart is a type of Scatter Chart that show markers with variable scaling to represent the relationship among items in several distinct series of data or to plot data items using x and y coordinates."
_tocName: Bubble Chart
_premium: true
---
# Web Components Bubble Chart
The Ignite UI for Web Components Bubble Chart is a type of [Scatter Chart](scatter-chart.md) that show markers with variable scaling to represent the relationship among items in several distinct series of data or to plot data items using x and y coordinates. These coordinates of the data point are determined by two numeric data columns. The Bubble Chart draws attention to uneven intervals or clusters of data. This chart is often used to plot scientific data, and can highlight the deviation of collected data from predicted results. The Bubble Chart has many of the characteristics of the [Scatter Marker Chart](scatter-chart.md#web-components-scatter-marker-chart) but with the option to have various radius scale sizes.

## Web Components Bubble Chart Example
You can create Ignite UI for Web Components Bubble Chart in [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) control using the [`IgcBubbleSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcBubbleSeriesComponent) and two numeric axes, as shown in the example below.

```typescript
export class CountryStatsAfricaItem {
    public constructor(init: Partial<CountryStatsAfricaItem>) {
        Object.assign(this, init);
    }

    public code: string;
    public population: number;
    public workedHours: number;
    public gDP: number;
    public name: string;

}
export class CountryStatsAfrica extends Array<CountryStatsAfricaItem> {
    public constructor(items: Array<CountryStatsAfricaItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryStatsAfricaItem({ code: `DZA`, population: 39728000, workedHours: 47.5, gDP: 13725, name: `Algeria` }),
                new CountryStatsAfricaItem({ code: `AGO`, population: 27884000, workedHours: 39.8, gDP: 6228, name: `Angola` }),
                new CountryStatsAfricaItem({ code: `BEN`, population: 10576000, workedHours: 43.7, gDP: 1987, name: `Benin` }),
                // ... 48 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```typescript
export class CountryStatsEuropeItem {
    public constructor(init: Partial<CountryStatsEuropeItem>) {
        Object.assign(this, init);
    }

    public code: string;
    public population: number;
    public workedHours: number;
    public gDP: number;
    public name: string;

}
export class CountryStatsEurope extends Array<CountryStatsEuropeItem> {
    public constructor(items: Array<CountryStatsEuropeItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryStatsEuropeItem({ code: `ALB`, population: 2891000, workedHours: 41, gDP: 10970, name: `Albania` }),
                new CountryStatsEuropeItem({ code: `AUT`, population: 8679000, workedHours: 30.75, gDP: 44305, name: `Austria` }),
                new CountryStatsEuropeItem({ code: `BLR`, population: 9439000, workedHours: 43.5, gDP: 17230, name: `Belarus` }),
                // ... 38 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Web Components Bubble Chart with Single Series
You can bind your data to [`DataSource`](mcp:get_api_reference?platform=webcomponents&component=IgcBubbleSeriesComponent&member=dataSource) property of [`IgcBubbleSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcBubbleSeriesComponent) and map data columns using its [`XMemberPath`](mcp:get_api_reference?platform=webcomponents&component=IgcBubbleSeriesComponent&member=xMemberPath), [`YMemberPath`](mcp:get_api_reference?platform=webcomponents&component=IgcBubbleSeriesComponent&member=yMemberPath), [`RadiusMemberPath`](mcp:get_api_reference?platform=webcomponents&component=IgcBubbleSeriesComponent&member=radiusMemberPath) properties, as shown in the example below:

```typescript
export class WorldStatsItem {
    public constructor(init: Partial<WorldStatsItem>) {
        Object.assign(this, init);
    }

    public code: string;
    public short: string;
    public name: string;
    public continent: string;
    public population: number;
    public gdpTotal: number;
    public economy: string;
    public region: string;
    public status: string;
    public x: number;
    public y: number;
    public gdpPerPerson: number;
    public rank: number;
    public unemployment: number;
    public oilProduction: number;
    public birthRate: number;
    public medianAge: number;
    public electricity: number;
    public televisions: number;
    public publicDebt: number;
    public internet: number;

}
export class WorldStats extends Array<WorldStatsItem> {
    public constructor(items: Array<WorldStatsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new WorldStatsItem({ code: `CHN`, short: `CN`, name: `China`, continent: `Asia`, population: 1379302771, gdpTotal: 21140000, economy: `Emerging`, region: `Eastern Asia`, status: `Country`, x: 104.18, y: 35.887, gdpPerPerson: 15327, rank: 1, unemployment: 4, oilProduction: 3725000, birthRate: 14, medianAge: 34, electricity: 3256000, televisions: 400000000, publicDebt: 18, internet: 253000000 }),
                new WorldStatsItem({ code: `IND`, short: `IN`, name: `India`, continent: `Asia`, population: 1281935911, gdpTotal: 8721000, economy: `Emerging`, region: `Southern Asia`, status: `Country`, x: 78.022, y: 22.665, gdpPerPerson: 6803, rank: 2, unemployment: 7, oilProduction: 810000, birthRate: 22, medianAge: 25, electricity: 661600, televisions: 63000000, publicDebt: 58, internet: 80000000 }),
                new WorldStatsItem({ code: `USA`, short: `US`, name: `United States`, continent: `North America`, population: 326625791, gdpTotal: 18560000, economy: `Developed`, region: `Northern America`, status: `Country`, x: -101.8, y: 39.818, gdpPerPerson: 56823, rank: 3, unemployment: 5, oilProduction: 7460000, birthRate: 14, medianAge: 37, electricity: 4062000, televisions: 219000000, publicDebt: 61, internet: 223000000 }),
                // ... 239 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Web Components Bubble Chart with Multiple Series
In Web Components Bubble Chart, binding multiple data sources works by setting each new data source to [`DataSource`](mcp:get_api_reference?platform=webcomponents&component=IgcBubbleSeriesComponent&member=dataSource) property of a additional [`IgcBubbleSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcBubbleSeriesComponent), as shown in the example below:

```typescript
export class CountryStatsAfricaItem {
    public constructor(init: Partial<CountryStatsAfricaItem>) {
        Object.assign(this, init);
    }

    public code: string;
    public population: number;
    public workedHours: number;
    public gDP: number;
    public name: string;

}
export class CountryStatsAfrica extends Array<CountryStatsAfricaItem> {
    public constructor(items: Array<CountryStatsAfricaItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryStatsAfricaItem({ code: `DZA`, population: 39728000, workedHours: 47.5, gDP: 13725, name: `Algeria` }),
                new CountryStatsAfricaItem({ code: `AGO`, population: 27884000, workedHours: 39.8, gDP: 6228, name: `Angola` }),
                new CountryStatsAfricaItem({ code: `BEN`, population: 10576000, workedHours: 43.7, gDP: 1987, name: `Benin` }),
                // ... 48 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```typescript
export class CountryStatsEuropeItem {
    public constructor(init: Partial<CountryStatsEuropeItem>) {
        Object.assign(this, init);
    }

    public code: string;
    public population: number;
    public workedHours: number;
    public gDP: number;
    public name: string;

}
export class CountryStatsEurope extends Array<CountryStatsEuropeItem> {
    public constructor(items: Array<CountryStatsEuropeItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryStatsEuropeItem({ code: `ALB`, population: 2891000, workedHours: 41, gDP: 10970, name: `Albania` }),
                new CountryStatsEuropeItem({ code: `AUT`, population: 8679000, workedHours: 30.75, gDP: 44305, name: `Austria` }),
                new CountryStatsEuropeItem({ code: `BLR`, population: 9439000, workedHours: 43.5, gDP: 17230, name: `Belarus` }),
                // ... 38 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Web Components Bubble Chart Styling
In Web Components Bubble Chart, you can customize shape of bubble markers using [`MarkerType`](mcp:get_api_reference?platform=webcomponents&component=IgcBubbleSeriesComponent&member=markerType) property, their size with [`RadiusScale`](mcp:get_api_reference?platform=webcomponents&component=IgcBubbleSeriesComponent&member=radiusScale) property, and their appearance using [`MarkerBrush`](mcp:get_api_reference?platform=webcomponents&component=IgcBubbleSeriesComponent&member=markerBrush), [`MarkerOutline`](mcp:get_api_reference?platform=webcomponents&component=IgcBubbleSeriesComponent&member=markerOutline), [`MarkerThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcBubbleSeriesComponent&member=markerThickness) properties. In addition, you can also color bubble markers based on a data column using [`FillMemberPath`](mcp:get_api_reference?platform=webcomponents&component=IgcBubbleSeriesComponent&member=fillMemberPath) and [`FillScale`](mcp:get_api_reference?platform=webcomponents&component=IgcBubbleSeriesComponent&member=fillScale) properties. In this example, usage of above properties is demonstrated.

```typescript
export class WorldStatsItem {
    public constructor(init: Partial<WorldStatsItem>) {
        Object.assign(this, init);
    }

    public code: string;
    public short: string;
    public name: string;
    public continent: string;
    public population: number;
    public gdpTotal: number;
    public economy: string;
    public region: string;
    public status: string;
    public x: number;
    public y: number;
    public gdpPerPerson: number;
    public rank: number;
    public unemployment: number;
    public oilProduction: number;
    public birthRate: number;
    public medianAge: number;
    public electricity: number;
    public televisions: number;
    public publicDebt: number;
    public internet: number;

}
export class WorldStats extends Array<WorldStatsItem> {
    public constructor(items: Array<WorldStatsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new WorldStatsItem({ code: `CHN`, short: `CN`, name: `China`, continent: `Asia`, population: 1379302771, gdpTotal: 21140000, economy: `Emerging`, region: `Eastern Asia`, status: `Country`, x: 104.18, y: 35.887, gdpPerPerson: 15327, rank: 1, unemployment: 4, oilProduction: 3725000, birthRate: 14, medianAge: 34, electricity: 3256000, televisions: 400000000, publicDebt: 18, internet: 253000000 }),
                new WorldStatsItem({ code: `IND`, short: `IN`, name: `India`, continent: `Asia`, population: 1281935911, gdpTotal: 8721000, economy: `Emerging`, region: `Southern Asia`, status: `Country`, x: 78.022, y: 22.665, gdpPerPerson: 6803, rank: 2, unemployment: 7, oilProduction: 810000, birthRate: 22, medianAge: 25, electricity: 661600, televisions: 63000000, publicDebt: 58, internet: 80000000 }),
                new WorldStatsItem({ code: `USA`, short: `US`, name: `United States`, continent: `North America`, population: 326625791, gdpTotal: 18560000, economy: `Developed`, region: `Northern America`, status: `Country`, x: -101.8, y: 39.818, gdpPerPerson: 56823, rank: 3, unemployment: 5, oilProduction: 7460000, birthRate: 14, medianAge: 37, electricity: 4062000, televisions: 219000000, publicDebt: 61, internet: 223000000 }),
                // ... 239 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Additional Resources

- [Scatter Chart](scatter-chart.md)
- [Shape Chart](shape-chart.md)

## API References
[`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent)
[`IgcBubbleSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcBubbleSeriesComponent)
[`IgcScatterSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcScatterSeriesComponent)
