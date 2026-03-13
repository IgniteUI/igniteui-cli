---
title: React Data Grid | Performance | Infragistics
_description: Use the Infragistics' React table for high performance data scenarios. Scroll through an unlimited number of rows and columns with full virtualization. View Ignite UI for React table tutorials!
_keywords: React Table, Data Grid, performance, Ignite UI for React, Infragistics, data binding
mentionedTypes: ["Grid", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: High Performance
_premium: true
---

# React High Performance with Live Data

The Ignite UI for React Data Table / Data Grid is optimized for high-performance with live data scenarios. With fast load time, smooth scrolling with zero lag time or screen flicker, you can seamlessly scroll through an unlimited number of rows and columns in your React data grid application with full virtualization of grid's columns and rows.

## React High Performance with Live Data Example

This sample demonstrates this performance by binding thousands of financial records to the React data grid, grouping them by 1 column (eg. Territory), and live-updating multiple columns every couple of milliseconds. You can change various options in real-time and the Data Grid performance with no lag, screen flicker, or visual delay

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDataGridModule } from 'igniteui-react-data-grids';
import { IgrDataGrid } from 'igniteui-react-data-grids';
import { IgrDataGridColumn } from 'igniteui-react-data-grids';
import { IgrCellStyleRequestedEventArgs } from 'igniteui-react-data-grids';
import { IgrDataBindingEventArgs } from 'igniteui-react-data-grids';
import { HeaderClickAction } from 'igniteui-react-data-grids';
import { DataGridSelectionMode } from 'igniteui-react-data-grids';
import { IgrColumnGroupDescription } from 'igniteui-react-data-grids';
import { IgrTextColumn } from 'igniteui-react-data-grids';
import { IgrNumericColumn } from 'igniteui-react-data-grids';
import { IgrTemplateColumn, IIgrCellTemplateProps } from 'igniteui-react-data-grids';
import { IgrTemplateCellUpdatingEventArgs } from 'igniteui-react-data-grids';
import { IgrTemplateCellInfo } from 'igniteui-react-data-grids';
import { IgrDateTimeColumn } from 'igniteui-react-data-grids';

IgrDataGridModule.register();

export default class DataGridPerformance extends React.Component<any, any> {

    public constructor(props: any) {
        super(props);

        this.data = this.generateSalesPeople(8000);

        for (let i = 0; i < this.kpiColumnCount; i++) {
            this.kpiColumns.push("KPI_" + i);
        }
    }

    public onGridRef = (grid: IgrDataGrid) => {
        if (!grid) { return; }

        this.grid = grid;
    }

    public kpiColumns: string[] = [];
    public kpiColumnCount: number = 43;
    public data: SalesPerson[];
    public colorIncreasing = "#4EB862";
    public colorDecreasing = "#FF134A";
    public grid: IgrDataGrid;

    public onPriceStyleKey = (grid: any, args: IgrCellStyleRequestedEventArgs) => {
        let row: SalesPerson;
        if (this.grid) {
            row = this.grid.actualDataSource.getItemAtIndex(args.rowNumber);
        } else {
            row = this.data[args.rowNumber];
        }
        if (row.Change >= 0) {
            args.styleKey = "priceShiftUp";
        } else {
            args.styleKey = "priceShiftDown";
        }
    }

    public onPriceCellUpdating = (grid: any, args: IgrTemplateCellUpdatingEventArgs) => {
        let row = args.cellInfo.rowItem;
        let priceShiftUp = row.Change >= 0;
        let template = args.cellInfo as IgrTemplateCellInfo;

        let content = args.content as HTMLDivElement;
        let sp: HTMLSpanElement | null = null;
        let icon: HTMLSpanElement | null = null;

        if (content.childElementCount > 0) {
            sp = content.children[0] as HTMLSpanElement;
            icon = content.children[1] as HTMLSpanElement;
        } else {
            content.style.textAlign = "right";
            sp = document.createElement("span");
            icon = document.createElement("span");
            sp.style.font = "13px Verdana";
            sp.style.verticalAlign = "center";
            content.appendChild(sp);
            content.appendChild(icon);
            icon.style.fontFamily = "Material Icons";
            icon.style.fontSize = "13px";
            icon.style.fontFeatureSettings = "liga";
            icon.style.verticalAlign = "center";
        }

        sp.textContent = "$" + (+template.value).toFixed(2);

        if ((sp as any).__isUp === undefined ||
            (sp as any).__isUp !== priceShiftUp) {
            (sp as any).__isUp = priceShiftUp;
            if (priceShiftUp) {
                // icon.textContent = "trending_up";
                icon.style.color = this.colorIncreasing;
                sp.style.color = this.colorIncreasing;
            } else {
            // icon.textContent = "trending_down";
                icon.style.color = this.colorDecreasing;
                sp.style.color = this.colorDecreasing;
            }
        }
    }

    public onPricePercentStyleKey = (grid: any, args: IgrCellStyleRequestedEventArgs) => {
        if (args.resolvedValue >= 0) {
            args.styleKey = "pricePercentUp";
        } else {
            args.styleKey = "pricePercentDown";
        }
    }

    public borderDecreasing = "4px solid #FF134A";
    public borderIncreasing = "4px solid #4EB862";

    public onPricePercentCellUpdating = (grid: any, args: IgrTemplateCellUpdatingEventArgs) => {
        let template = args.cellInfo as IgrTemplateCellInfo;
        let priceShiftUp = template.value >= 0;

        let content = args.content as HTMLDivElement;
        let sp: HTMLSpanElement | null = null;

        if (content.childElementCount > 0) {
            sp = content.children[0] as HTMLSpanElement;
        } else {
            content.style.textAlign = "right";
            sp = document.createElement("span");
            sp.style.font = "13px Verdana";
            sp.style.verticalAlign = "center";
            content.appendChild(sp);
        }

        sp.textContent = (+template.value).toFixed(2) + "%";
        if ((sp as any).__isUp === undefined ||
            (sp as any).__isUp !== priceShiftUp) {
            (sp as any).__isUp = priceShiftUp;
            if (priceShiftUp) {
            sp.style.paddingRight = "5px";
            sp.style.borderRight = this.borderIncreasing;
            // sp.style.color = this.colorIncreasing;
            } else {
            sp.style.paddingRight = "5px";
            sp.style.borderRight = this.borderDecreasing;
            // sp.style.color = this.colorDecreasing;
            }
        }
    }

    public onPriceAmountStyleKey = (grid: any, args: IgrCellStyleRequestedEventArgs) => {
        if (args.resolvedValue >= 0) {
            args.styleKey = "priceAmountUp";
        } else {
            args.styleKey = "priceAmountDown";
        }
    }

    public onPriceAmountCellUpdating = (grid: any, args: IgrTemplateCellUpdatingEventArgs) => {
        let template = args.cellInfo as IgrTemplateCellInfo;
        let priceShiftUp = template.value >= 0;

        let content = args.content as HTMLDivElement;
        let sp: HTMLSpanElement | null = null;

        if (content.childElementCount > 0) {
            sp = content.children[0] as HTMLSpanElement;
        } else {
            content.style.textAlign = "right";
            sp = document.createElement("span");
            sp.style.font = "13px Verdana";
            sp.style.verticalAlign = "center";
            content.appendChild(sp);
        }

        sp.textContent = (+template.value).toFixed(2);

        if ((sp as any).__isUp === undefined ||
            (sp as any).__isUp !== priceShiftUp) {
            (sp as any).__isUp = priceShiftUp;
            if (priceShiftUp) {
            sp.style.paddingRight = "5px";
            sp.style.borderRight = this.borderIncreasing;
            // sp.style.color = this.colorIncreasing;
            } else {
            sp.style.paddingRight = "5px";
            sp.style.borderRight = this.borderDecreasing;
            // sp.style.color = this.colorDecreasing;
            }
        }
    }

    public onChartStyleKey = (grid: any, args: IgrCellStyleRequestedEventArgs) => {
        args.styleKey = "container";
    }

    public onChartCellUpdating = (grid: any, args: IgrTemplateCellUpdatingEventArgs) => {
        let template = args.cellInfo as IgrTemplateCellInfo;

        let content = args.content as HTMLDivElement;
        let icon: HTMLSpanElement | null = null;

        if (content.childElementCount > 0) {
            icon = content.children[0] as HTMLSpanElement;
            icon.onclick = (e) => {
                // console.log("chart clicked!!")
                e.stopPropagation();
            }
        } else {
            icon = document.createElement("span");
            content.appendChild(icon);
            icon.style.fontFamily = "Material Icons";
            icon.style.fontSize = "13px";
            icon.style.fontFeatureSettings = "liga";
            icon.style.verticalAlign = "center";
            icon.textContent = "insert_chart_outlined";
        }
    }

    public onGridStyleKey = (grid: any, args: IgrCellStyleRequestedEventArgs) => {
        args.styleKey = "grid";
    }

    public onGridCellUpdating = (grid: any, args: IgrTemplateCellUpdatingEventArgs) => {
        let template = args.cellInfo as IgrTemplateCellInfo;

        let content = args.content as HTMLDivElement;
        let icon: HTMLSpanElement | null = null;

        if (content.childElementCount > 0) {
            icon = content.children[0] as HTMLSpanElement;
            icon.onclick = (e) => {
                // console.log("grid clicked!!")
                e.stopPropagation();
            }
        } else {
            icon = document.createElement("span");
            content.appendChild(icon);
            icon.style.fontFamily = "Material Icons";
            icon.style.fontSize = "13px";
            icon.style.fontFeatureSettings = "liga";
            icon.style.verticalAlign = "center";
            icon.textContent = "table_chart";
        }
    }

    public TestTemplateContent = (props: IIgrCellTemplateProps) => {
        let template = props.dataContext as IgrTemplateCellInfo;
        let font = template.font;
        return (
            <div style={{
            textAlign: template.resolvedTextAlign,
            font: font,
            opacity: template.resolvedContentOpacity }}>
            <label>{template.value}</label>
            </div>
        );
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrDataGrid
                width="100%"
                height="100%"
                autoGenerateColumns="false"
                headerClickAction={HeaderClickAction.SortByMultipleColumnsTriState}
                rowHeight="40"
                selectionMode={DataGridSelectionMode.MultipleRow}
                defaultColumnMinWidth="80"
                columnShowingAnimationMode="auto"
                columnHidingAnimationMode="auto"
                isRowHoverEnabled="false"
                dataSource={this.data}
                ref={this.onGridRef}>

                <IgrTextColumn field="FirstName" headerText="First Name" width="*>130"></IgrTextColumn>
                <IgrTextColumn field="LastName" headerText="Last Name" width="*>130"></IgrTextColumn>
                <IgrTextColumn field="Territory" width="*>130"></IgrTextColumn>
                <IgrNumericColumn field="YearToDateSales"
                    headerText="YTD Sales" width="*>130" positivePrefix="$"
                    showGroupingSeparator="true"/>
                <IgrTemplateColumn field="AvgSale"
                    headerText="Avg. Sale"
                    width="*>120"
                    horizontalAlignment="right"
                    cellStyleKeyRequested={this.onPriceStyleKey}
                    cellUpdating={this.onPriceCellUpdating} >
                </IgrTemplateColumn>

                <IgrTemplateColumn field="Change" width="*>120"
                    horizontalAlignment="right"
                    cellStyleKeyRequested={this.onPriceAmountStyleKey}
                    cellUpdating={this.onPriceAmountCellUpdating}>
                </IgrTemplateColumn>

                <IgrTemplateColumn field="PercentChange" width="*>140"
                    horizontalAlignment="right" headerText="Change (%)"
                    cellStyleKeyRequested={this.onPricePercentStyleKey}
                    cellUpdating={this.onPricePercentCellUpdating}>
                </IgrTemplateColumn>

                <IgrDateTimeColumn field="DateValue" headerText="Date" width="*>120" />
                {
                    this.kpiColumns.map(function (i) {
                    return ( <IgrNumericColumn width="*>150" key={i} field={i} /> )
                    })
                }

                </IgrDataGrid>
            </div>
        );
    }

    public componentDidMount() {
        let g = new IgrColumnGroupDescription();
        g.field = "Territory";
        this.grid.groupDescriptions.add(g);

        for (let i = 0; i < this.kpiColumnCount; i++) {
            (() => {
                let currVal = i;
                this.grid.forColumnsWithPropertyPath("KPI_" + currVal, (col: IgrDataGridColumn) => {
                    col.cellStyleKeyRequested = (sender: any, args: IgrCellStyleRequestedEventArgs) => {
                    let value = args.resolvedValue;
                    if (value < 20.0) {
                        args.styleKey = "kpi_red";
                    } else if (value > 80.0) {
                        args.styleKey = "kpi_green";
                    }
                    };

                    col.dataBound = (sender: any, args: IgrDataBindingEventArgs) => {
                        let value = args.resolvedValue;
                        if (value < 20.0) {
                            if (args.cellInfo.background !== "red") {
                                args.cellInfo.background = this.colorDecreasing;
                            }
                        }

                        if (value > 80.0) {
                            if (args.cellInfo.background !== "green") {
                                args.cellInfo.background = this.colorIncreasing;
                            }
                        }
                    };
                });
            })();
    }

    this.grid.forColumnsWithPropertyPath("AvgSale", (col: IgrDataGridColumn) => {
        col.dataBound = (sender: any, args: IgrDataBindingEventArgs) => {
            let item: any = args.cellInfo.rowItem;
            if (item !== null)
            {
                if (item.AvgSaleHeat > 0)
                {
                    let p = +item.AvgSaleHeat;
                    let toA = 1.0;
                    let fromA = 1.0;
                    let toR = 0.0;
                    let fromR = 1.0;
                    let toG = 1.0;
                    let fromG = 1.0;
                    let toB = 0.0;
                    let fromB = 1.0;

                    let aByte = fromA + (toA - fromA) * p;
                    let rByte = Math.round((fromR + (toR - fromR) * p) * 255.0);
                    let gByte = Math.round((fromG + (toG - fromG) * p) * 255.0);
                    let bByte = Math.round((fromB + (toB - fromB) * p) * 255.0);

                    let colorString = "rgba(" + rByte + "," + gByte + "," + bByte + "," + aByte + ")";
                    args.cellInfo.background = colorString;
                }
                else if (item.AvgSaleHeat < 0) {
                    let p = +item.AvgSaleHeat * -1.0;
                    let toA = 1.0;
                    let fromA = 1.0;
                    let toR = 1.0;
                    let fromR = 1.0;
                    let toG = 0.0;
                    let fromG = 1.0;
                    let toB = 0.0;
                    let fromB = 1.0;

                    let aByte = fromA + (toA - fromA) * p;
                    let rByte = Math.round((fromR + (toR - fromR) * p) * 255.0);
                    let gByte = Math.round((fromG + (toG - fromG) * p) * 255.0);
                    let bByte = Math.round((fromB + (toB - fromB) * p) * 255.0);

                    let colorString = "rgba(" + rByte + "," + gByte + "," + bByte + "," + aByte + ")";

                    args.cellInfo.background = colorString;
                }
                else
                {
                    let colorString = "white";
                    args.cellInfo.background = colorString;
                }
            }
        };
    });

    window.setTimeout(this.tick, 16);
    }

    public lastDataUpdate: Date = new Date();
    public interval: number = 100;

    private randomizeItem(item: SalesPerson) {
        item.Change = Math.random() * 40.0 - 20.0;
        let prevSale = item.AvgSale;

        item.AvgSale += item.Change;
        item.PercentChange = ((item.AvgSale / prevSale) * 100.0);
    }

    private tick = () =>
    {
        let sortedBySales = false;
        // foreach (let item in grid.SortDescriptions)
        // {
        // 	if (item.PropertyName === "YearToDateSales")
        // 	{
        // 		sortedBySales = true;
        // 	}
        // }

        let toChange = 200;
        let toChangeIndexes: any = {};
        let stillAnimating = false;
        for (let i = 0; i < this.data.length; i++)
        {
            let item = this.data[i];
            if (item.AvgSaleHeat !== 0)
            {
                stillAnimating = true;
            }
        }

        let now = new Date();
        let intervalElapsed = false;
        if ((+now - +this.lastDataUpdate) > this.interval) {
            intervalElapsed = true;
        }

        let useClear = false;
        let sortingByAvgSale = false;
        for (let i = 0; i < this.grid.sortDescriptions.count; i++) {
            if (this.grid.sortDescriptions.item(i).field === "AvgSale" ||
                this.grid.sortDescriptions.item(i).field.indexOf("Change") >= 0) {
                sortingByAvgSale = true;
            }
        }

        let changing = false;
        if (intervalElapsed)
        {
            this.lastDataUpdate = new Date();
            for (let i = 0; i < toChange; i++)
            {
                let index = Math.round(Math.random() * this.data.length - 1);
                while (toChangeIndexes[index.toString()] !== undefined)
                {
                    index = Math.round(Math.random() * this.data.length - 1);
                }
                toChangeIndexes[index.toString()] = true;
                changing = true;
            }
        }

        for (let i = 0; i < this.data.length; i++)
        {
            let item = this.data[i];
            if (toChangeIndexes[i.toString()] !== undefined)
            {
                if (sortingByAvgSale && !useClear) {

                this.grid.notifyRemoveItem(i, item);
                this.randomizeItem(item);
                this.grid.notifyInsertItem(i, item);
                } else {
                    this.randomizeItem(item);
                }

                if (item.Change > 0) {
                    // item.YearToDateSales += Math.round(Math.random() * 4.0);
                    item.AvgSaleHeat = 1;
                } else {
                    item.AvgSaleHeat = -1;
                }
            }
            else
            {
                if (item.AvgSaleHeat > 0)
                {
                    item.AvgSaleHeat -= .06;
                    if (item.AvgSaleHeat < 0)
                    {
                        item.AvgSaleHeat = 0;
                    }
                }
                if (item.AvgSaleHeat < 0) {
                    item.AvgSaleHeat += .06;
                    if (item.AvgSaleHeat > 0) {
                        item.AvgSaleHeat = 0;
                    }
                }
            }
        }

        if (sortingByAvgSale && useClear) {
            this.grid.actualDataSource.queueAutoRefresh();
        }

        // if (!sortingByPrice) {
            // if (!useClear) {
        if (!sortingByAvgSale || !intervalElapsed) {
            this.grid.invalidateVisibleRows();
        }
            // }
        // }
        // this.grid.invalidateVisibleRows();
        // actualDataSource.queueAutoRefresh();

        window.setTimeout(() => this.tick(), 16);
    }

    private generateSalesPeople(num: number) {
        let firstNames = [
            "Kyle", "Gina", "Irene", "Katie", "Michael", "Oscar", "Ralph", "Frank", "William", "Bill",
            "Daniel", "Frank", "Brenda", "Henry", "Fiona", "Howard", "Jack", "Larry", "Holly",
            "Bob", "Liz", "Pete", "Steve", "Mark", "Henry"
        ];

        let lastNames = ['Smith', 'Johnson', 'Mendoza', 'Brown', 'Spencer', 'Stone', 'Stark', 'Rooney'];;

        let territories = [
            "Australia", "Canada", "Egypt", "Greece", "Italy", "Kenya", "Mexico", "Oman", "Qatar",
            "Sweden", "Uruguay", "Yemen", "Bulgaria", "Denmark", "France", "Hungary", "Japan",
            "Latvia", "Netherlands", "Portugal", "Russia", "Turkey", "Venezuela", "Zimbabwe"
        ];

        let items = [];
        for (let i = 0; i < num; i++)
        {
            let item = new SalesPerson();
            let firstIndex = Math.round(Math.random() * (firstNames.length - 1));
            item.Index = i;
            item.FirstName = firstNames[firstIndex];
            item.LastName = lastNames[Math.round(Math.random() * (lastNames.length - 1))];
            item.Name = item.FirstName + item.LastName;

            let randomIndex = Math.round(Math.random() * (firstNames.length - 1));
            if (randomIndex === 0)
                randomIndex = 1;

            item.Territory = territories[Math.round(Math.random() * (territories.length - 1))];
            item.AvgSale = Math.round(Math.random() * 800) + 200.0;
            item.Change = Math.random() * 40.0 - 20.0;
            item.PercentChange = 0;
            item.YearToDateSales = Math.round(Math.random() * 50000);

            item.DateValue = new Date();
            item.DateValue.setDate(item.DateValue.getDate() + Math.round(Math.random() * 500))

            for (let j = 0; j < this.kpiColumnCount; j++) {
                let kpi: string = "KPI_" + j;
                item[kpi] = Math.round(Math.random() * 100.0);
            }

            items.push(item);
        }

        return items;
    }

    private getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}
export class SalesPerson {
    [key: string]: any;
    public FirstName: string;
    public LastName: string;
    public Name: string;
    public Territory: string;
    public Index: number;
    public AvgSale: number;
    public AvgSaleHeat: number;
    public Change: number;
    public PercentChange: number;
    public YearToDateSales: number;
    public DateValue: Date;
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataGridPerformance/>);
```


<div class="divider--half"></div>

## Additional Resources

<!-- Angular, React, WebComponents -->

<!-- TODO fix build flagging list items -->

<!-- - [Binding Virtual Data](remote-data.md) -->

<!-- end: Angular, React, WebComponents -->

- [Column Types](column-types.md)
- [Row Grouping](row-grouping.md)

## API References

- [`IgrDataGrid`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html)
