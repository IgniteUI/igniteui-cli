---
title: Web Components Chart Data Selection | Data Visualization Tools | Infragistics
_description: Use Infragistics Ignite UI for Web Components chart with the data selection!
_keywords: Web Components charts, chart data, selection, data selection, Ignite UI for Web Components, Infragistics
_license: commercial
_language: en
mentionedTypes: ["XamDataChart", "Legend", "CategoryChart", "FinancialChart", "XamDataLegend", "DataToolTipLayer"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Data Selection
_premium: true
---

# Web Components Chart Selection

The Ignite UI for Web Components selection feature in Web Components {ComponentTitle} allows users to interactively select, highlight, outline and vice-versa deselect single or multiple series within a chart. This provides many different possibilities with how users interact with the data presented in more meaningful ways.

## Configuring Selection

The default behavior [`selectionMode`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=selectionMode) turned off and requires opting into one of the following options. There are several selection modes available in the `{ComponentName}`:

- **Auto**
- **None**
- **Brighten**
- **FadeOthers**
- **GrayscaleOthers**
- **FocusColorThickOutline**
- **FocusColorOutline**
- **SelectionColorThickOutline**
- **SelectionColorOutline**
- **FocusColorFill**
- **SelectionColorFill**
- **ThickOutline**

`Brighten` will fade the selected item while `FadeOthers` will cause the opposite effect occur.
`GrayscaleOthers` will behave similarly to `FadeOthers` but instead show a gray color to the rest of the series. Note this will override any [`selectionBrush`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=selectionBrush) setting.
`SelectionColorOutline` and `SelectionColorThickOutline` will draw a border around the series.

In conjunction, a [`selectionBehavior`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=selectionBehavior) is available to provide greater control on which items get selected. The default behavior for Auto is `PerSeriesAndDataItemMultiSelect`.

- **Auto**
- **PerDataItemMultiSelect**
- **PerDataItemSingleSelect**
- **PerSeriesAndDataItemMultiSelect**
- **PerSeriesAndDataItemSingleSelect**
- **PerSeriesAndDataItemGlobalSingleSelect**
- **PerSeriesMultiSelect**
- **PerSeriesSingleSelect**

## Configuring Selection via Color Fill

The following example shows the combination of both `SelectionColorFill` and `Auto` selection behavior aka `PerSeriesAndDataItemMultiSelect`. Color Fills provide a useful visual cue as it changes the entire series item's back color. By clicking each item you'll see the item change from green to purple.

```typescript
export class TemperatureAverageDataItem {
    public constructor(init: Partial<TemperatureAverageDataItem>) {
        Object.assign(this, init);
    }

    public month: string;
    public temperature: number;

}
export class TemperatureAverageData extends Array<TemperatureAverageDataItem> {
    public constructor(items: Array<TemperatureAverageDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new TemperatureAverageDataItem({ month: `Jan`, temperature: 3 }),
                new TemperatureAverageDataItem({ month: `Feb`, temperature: 4 }),
                new TemperatureAverageDataItem({ month: `Mar`, temperature: 9 }),
                // ... 9 more items
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

## Configuring Multiple Selection

Other selection modes offer various methods of selection. For example using [`selectionBehavior`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=selectionBehavior) with `PerDataItemMultiSelect` will affect all series in entire category when multiple series are present while allowing selection across categories. Compared to `PerDataItemSingleSelect`, only a single category of items can be selected at a time. This is useful if multiple series are bound to different datasources and provides greater control of selection between categories.
`PerSeriesAndDataItemGlobalSingleSelect` allows single series selection across all categories at a time.

```typescript
export class EnergyRenewableConsumptionItem {
    public constructor(init: Partial<EnergyRenewableConsumptionItem>) {
        Object.assign(this, init);
    }

    public location: string;
    public year: number;
    public hydro: number;
    public solar: number;
    public wind: number;
    public other: number;

}
export class EnergyRenewableConsumption extends Array<EnergyRenewableConsumptionItem> {
    public constructor(items: Array<EnergyRenewableConsumptionItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EnergyRenewableConsumptionItem({ location: `China`, year: 2019, hydro: 1269.5, solar: 223, wind: 405.2, other: 102.8 }),
                new EnergyRenewableConsumptionItem({ location: `Europe`, year: 2019, hydro: 632.54, solar: 154, wind: 461.3, other: 220.3 }),
                new EnergyRenewableConsumptionItem({ location: `USA`, year: 2019, hydro: 271.16, solar: 108, wind: 303.4, other: 78.34 }),
                // ... 2 more items
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

## Configuring Outline Selection

When [`focusBrush`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=focusBrush) is applied, selected series will appear with a border when the [`selectionMode`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=selectionMode) property is set to one of the focus options.

## Radial Series Selection

This example demonstrates another series type via the [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) where each radial series can be selected with different colors.

```typescript
export class FootballPlayerStatsItem {
    public constructor(init: Partial<FootballPlayerStatsItem>) {
        Object.assign(this, init);
    }

    public attribute: string;
    public ronaldo: number;
    public messi: number;

}
export class FootballPlayerStats extends Array<FootballPlayerStatsItem> {
    public constructor(items: Array<FootballPlayerStatsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new FootballPlayerStatsItem({ attribute: `Dribbling`, ronaldo: 8, messi: 10 }),
                new FootballPlayerStatsItem({ attribute: `Passing`, ronaldo: 8, messi: 10 }),
                new FootballPlayerStatsItem({ attribute: `Finishing`, ronaldo: 10, messi: 10 }),
                // ... 5 more items
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

## Programmatic Selection

Chart Selection can also be configured in code where selected items in the chart can be seen on startup or runtime. This can be achieved by adding items to the `SelectedSeriesCollection` of the [`IgcCategoryChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent). The `Matcher` property of the [`IgcChartSelection`](mcp:get_api_reference?platform=webcomponents&component=IgcChartSelection) object allows for selecting a series based on a "matcher", ideal when you do not have access to the actual series from the chart. If you know the properties that your datasource contains, you can use the `ValueMemberPath` that the series would be.

The matcher is ideal for using in charts, such as the [`IgcCategoryChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent) when you do not have access to the actual series, like the [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent). In this case you if you know the properties that your datasource contained you can surmise the ValueMemberPaths that the series would have. For example, if you datasource has numeric properties Nuclear, Coal, Oil, Solar then you know there are series created for each of these properties. If you want to highlight the series bound to Solar values, you can add a ChartSelection object to the [`selectedSeriesItems`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=selectedSeriesItems) collection using a matcher with the following properties set

For example, if you datasource has numeric properties Nuclear, Coal, Oil, Solar then you know there are series created for each of these properties. If you want to select the series bound to Solar values, you can add a ChartSelection object to the SelectedSeriesItems collection using a matcher with the following properties set.

```typescript
export class EnergyRenewableConsumptionItem {
    public constructor(init: Partial<EnergyRenewableConsumptionItem>) {
        Object.assign(this, init);
    }

    public location: string;
    public year: number;
    public hydro: number;
    public solar: number;
    public wind: number;
    public other: number;

}
export class EnergyRenewableConsumption extends Array<EnergyRenewableConsumptionItem> {
    public constructor(items: Array<EnergyRenewableConsumptionItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EnergyRenewableConsumptionItem({ location: `China`, year: 2019, hydro: 1269.5, solar: 223, wind: 405.2, other: 102.8 }),
                new EnergyRenewableConsumptionItem({ location: `Europe`, year: 2019, hydro: 632.54, solar: 154, wind: 461.3, other: 220.3 }),
                new EnergyRenewableConsumptionItem({ location: `USA`, year: 2019, hydro: 271.16, solar: 108, wind: 303.4, other: 78.34 }),
                // ... 2 more items
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

## API References

The following is a list of API members mentioned in the above sections:

| [`IgcCategoryChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent) Properties                    | [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) Properties |
| ----------------------------------------------|---------------------------|
|                                               |                           |
