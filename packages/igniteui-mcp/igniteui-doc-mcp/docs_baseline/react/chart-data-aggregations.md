---
title: React Data Aggregations | Data Visualization | Infragistics
_description: Infragistics' React Data Aggregations
_keywords: React Charts, Markers, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Data Aggregations
_premium: true
---

# React Data Aggregations

In the Ignite UI for React [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) control Data Aggregations feature allows you to group data in the chart by unique values on the `XAxis` and then sort those groups. You may then apply summaries which will be reflected by the range of the `YAxis` and will be displayed in the tooltip when hovering the series.

## React Data Aggregations Example

The following example depicts a [Column Chart](../types/column-chart.md) that groups by the Country member of the `XAxis` and can be changed to other properties within each data item such as Product, MonthName, and Year to aggregate the sales data. Also a summary and sort option is available to get a desirable order for the grouped property.

Note, the abbreviated functions found within the dropdowns for [`initialSummaries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#initialSummaries) and [`groupSorts`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#groupSorts) have be applied as shown to get a correct result based on the property you assign. eg. Sum(sales) as Sales | Sales Desc

```typescript
export class SalesDataItem {
    public constructor(init: Partial<SalesDataItem>) {
        Object.assign(this, init);
    }

    public Country: string;
    public Product: string;
    public UnitsSold: number;
    public ManufacturingPrice: number;
    public SalePrice: number;
    public GrossSales: number;
    public Discounts: number;
    public Sales: number;
    public COGS: number;
    public Profit: number;
    public Date: string;
    public Month: string;
    public Year: string;

}
export class SalesData extends Array<SalesDataItem> {
    public constructor(items: Array<SalesDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new SalesDataItem({ Country: `UK`, Product: `Vermont`, UnitsSold: 501, ManufacturingPrice: 15, SalePrice: 23, GrossSales: 26440, Discounts: 0, Sales: 26440, COGS: 16185, Profit: 11255, Date: `1/1/20`, Month: `January`, Year: `2020` }),
                new SalesDataItem({ Country: `Japan`, Product: `Kensington`, UnitsSold: 1372, ManufacturingPrice: 3, SalePrice: 20, GrossSales: 27440, Discounts: 0, Sales: 27440, COGS: 16185, Profit: 11255, Date: `1/1/20`, Month: `January`, Year: `2020` }),
                new SalesDataItem({ Country: `India`, Product: `Kensington`, UnitsSold: 2762, ManufacturingPrice: 3, SalePrice: 20, GrossSales: 55240, Discounts: 0, Sales: 55240, COGS: 13210, Profit: 42030, Date: `1/1/20`, Month: `January`, Year: `2020` }),
                // ... 1039 more items
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrLegendModule, IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, LegendDescriptionModule, CategoryChartDescriptionModule } from 'igniteui-react-core';
import { SalesDataItem, SalesData } from './SalesData';
import { PropertyEditorValueType, IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';
import { MarkerType, MarkerType_$type } from 'igniteui-react-charts';
import { EnumUtil } from 'igniteui-react-core';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrLegendModule,
    IgrCategoryChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private editor: IgrPropertyEditorPanel
    private editorRef(r: IgrPropertyEditorPanel) {
        this.editor = r;
        this.setState({});
    }
    private initialGroups: IgrPropertyEditorPropertyDescription
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.editorRef = this.editorRef.bind(this);
        this.editorChangeUpdateInitialGroups = this.editorChangeUpdateInitialGroups.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }
    public componentDidMount() {
        this.propertyEditorInitAggregationsOnViewInit();
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    ref={this.editorRef}
                    componentRenderer={this.renderer}
                    target={this.chart}
                    descriptionType="CategoryChart"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="InitialGroupsHandler"
                        name="InitialGroups"
                        label="Initial Groups"
                        valueType="EnumValue"
                        shouldOverrideDefaultEditor="true"
                        dropDownNames={["Country", "Product", "Month", "Year"]}
                        dropDownValues={["Country", "Product", "Month", "Year"]}
                        primitiveValue="Country"
                        changed={this.editorChangeUpdateInitialGroups}>
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="legend-title">
                Sales Aggregated by Country and Product
            </div>

            <div className="container fill">
                <IgrCategoryChart
                    ref={this.chartRef}
                    dataSource={this.salesData}
                    chartType="Column"
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    crosshairsDisplayMode="None"
                    initialGroups="Country"
                    initialSummaries="Sum(Sales) as Sales"
                    groupSorts="Sales Desc">
                </IgrCategoryChart>
            </div>
        </div>
        );
    }

    private _salesData: SalesData = null;
    public get salesData(): SalesData {
        if (this._salesData == null)
        {
            this._salesData = new SalesData();
        }
        return this._salesData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            LegendDescriptionModule.register(context);
            CategoryChartDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public propertyEditorInitAggregationsOnViewInit(): void {

        var editor = this.editor;
        var initialSummariesDropdown = new IgrPropertyEditorPropertyDescription({});
        var sortGroupsDropdown = new IgrPropertyEditorPropertyDescription({});

        initialSummariesDropdown.label = "Initial Summaries";
        initialSummariesDropdown.valueType = PropertyEditorValueType.EnumValue;
        initialSummariesDropdown.shouldOverrideDefaultEditor = true;
        initialSummariesDropdown.dropDownNames = ["Sum(Sales) as Sales", "Avg(Sales) as Sales", "Min(Sales) as Sales", "Max(Sales) as Sales", "Count(Sales) as Sales" ];
        initialSummariesDropdown.dropDownValues = ["Sum(Sales) as Sales", "Avg(Sales) as Sales", "Min(Sales) as Sales", "Max(Sales) as Sales", "Count(Sales) as Sales" ];

        sortGroupsDropdown.label = "Sort Groups"
        sortGroupsDropdown.valueType = PropertyEditorValueType.EnumValue;
        sortGroupsDropdown.shouldOverrideDefaultEditor = true;
        sortGroupsDropdown.dropDownNames = ["Sales Asc", "Sales Desc"];
        sortGroupsDropdown.dropDownValues = ["Sales Asc","Sales Desc"];

        editor.properties.add(initialSummariesDropdown);
        editor.properties.add(sortGroupsDropdown);

        this.editorChangeUpdateInitialSummaries = this.editorChangeUpdateInitialSummaries.bind(this);
        this.editorChangeUpdateGroupSorts = this.editorChangeUpdateGroupSorts.bind(this);
        initialSummariesDropdown.changed = this.editorChangeUpdateInitialSummaries;
        sortGroupsDropdown.changed = this.editorChangeUpdateGroupSorts;
    }

    public editorChangeUpdateInitialSummaries(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {

        var chart = this.chart;
        var intialSummaryVal = args.newValue.toString();
        chart.initialSummaries = intialSummaryVal;
    }

    public editorChangeUpdateGroupSorts(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var chart = this.chart;
        var groupSortsVal = args.newValue.toString();
        chart.groupSorts = groupSortsVal;
    }

    public editorChangeUpdateInitialGroups(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var chart = this.chart;
        chart.initialGroups = args.newValue.toString();
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


```tsx
 <IgrCategoryChart
    dataSource={this.state.salesData}
    initialGroups="country"
    initialSummaries="Sum(sales) as Sales"
    groupSorts="Sales Desc"/>
```

## API References

The following is a list of API members mentioned in the above sections:

- [`initialSortDescriptions`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#initialSortDescriptions)
- [`initialSorts`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#initialSorts)
- [`sortDescriptions`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#sortDescriptions)
- [`initialGroups`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#initialGroups)
- [`initialGroupDescriptions`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#initialGroupDescriptions)
- [`groupDescriptions`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#groupDescriptions)
- [`initialSummaries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#initialSummaries)
- [`initialSummaryDescriptions`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#initialSummaryDescriptions)
- [`summaryDescriptions`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#summaryDescriptions)
- [`initialGroupSortDescriptions`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#initialGroupSortDescriptions)
- [`groupSorts`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#groupSorts)
- [`groupSortDescriptions`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#groupSortDescriptions)

> [!Note]
> Chart Aggregation will not work when using [`includedProperties`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#includedProperties) | [`excludedProperties`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#excludedProperties). These properties on the chart are meant for non-aggregated data. Once you attempt to aggregate data these properties should no longer be used. The reason it does not work is because aggregation replaces the collection that is passed to the chart for render. The include/exclude properties are designed to filter in/out properties of that data and those properties no longer exist in the new aggregated collection.
