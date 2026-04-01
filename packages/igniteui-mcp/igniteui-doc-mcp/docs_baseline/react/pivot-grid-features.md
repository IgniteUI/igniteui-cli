---
title: React Pivot Grid Features | Pivot Tables | Infragistics
_description: Create fast, responsive React Pivot Grid and tables with Ignite UI for React and perform complex data analysis via pivot data.
_keywords: React, Pivot Grid, material pivot table, Ignite UI for React, grid features, pivot features
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid"]
namespace: Infragistics.Controls
_tocName: Features
_premium: true
---

# React Pivot Grid Features

The pivot and flat grid components inherit from a common base and thus share some functionality and features.

> \[!Note]
> Some features do not have meaningful behavior in the context of a pivot table and therefore cannot be enabled for [`IgrPivotGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotgrid.html). These include:
>
> - CRUD operations
> - Grouping
> - Row/Column Pinning
> - Summaries
> - Paging

The Pivot Grid component has additional features and functionalities related to its dimensions as described below.

```typescript
export class PivotDataFlatItem {
    public constructor(init: Partial<PivotDataFlatItem>) {
        Object.assign(this, init);
    }

    public ProductName: string;
    public ProductUnitPrice: number;
    public SellerName: string;
    public SellerCity: string;
    public Date: string;
    public Value: number;
    public NumberOfUnits: number;

}
export class PivotDataFlat extends Array<PivotDataFlatItem> {
    public constructor(items: Array<PivotDataFlatItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 12.8, SellerName: `Stanley Brooker`, SellerCity: `Seattle`, Date: `01/01/2007`, Value: 94.4, NumberOfUnits: 282 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 49.6, SellerName: `Elisa Longbottom`, SellerCity: `Sofia`, Date: `01/05/2007`, Value: 70.8, NumberOfUnits: 296 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 3.6, SellerName: `Lydia Burson`, SellerCity: `Tokyo`, Date: `01/06/2007`, Value: 35.8, NumberOfUnits: 68 }),
                // ... 497 more items
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

import { IgrPivotGridModule } from 'igniteui-react-grids';
import { IgrPivotGrid, IgrPivotConfiguration, IgrPivotDateDimension, IgrPivotDimension, IgrPivotDateDimensionOptions, SortingDirection, IgrPivotValue, IgrPivotAggregator } from 'igniteui-react-grids';
import { PivotDataFlatItem, PivotDataFlat } from './PivotDataFlat';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPivotGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrPivotGrid
    private gridRef(r: IgrPivotGrid) {
        this.grid = r;
        this.setState({});
    }
    private  _pivotConfiguration1: IgrPivotConfiguration | null = null;
    public get pivotConfiguration1(): IgrPivotConfiguration {
        if (this._pivotConfiguration1 == null)
        {
            var pivotConfiguration1: IgrPivotConfiguration = {} as IgrPivotConfiguration;

            var igrPivotDateDimension1 = new IgrPivotDateDimension();
            igrPivotDateDimension1.memberName = "Date";
            igrPivotDateDimension1.enabled = true;
            var igrPivotDimension1: IgrPivotDimension = {} as IgrPivotDimension;
            igrPivotDimension1.memberName = "Date";
            igrPivotDimension1.enabled = true;

            igrPivotDateDimension1.baseDimension = igrPivotDimension1;
            var igrPivotDateDimensionOptions1: IgrPivotDateDimensionOptions = {} as IgrPivotDateDimensionOptions;
            igrPivotDateDimensionOptions1.years = true;
            igrPivotDateDimensionOptions1.months = false;
            igrPivotDateDimensionOptions1.quarters = true;
            igrPivotDateDimensionOptions1.fullDate = false;

            igrPivotDateDimension1.options = igrPivotDateDimensionOptions1;

            pivotConfiguration1.columns = [igrPivotDateDimension1];
            var igrPivotDimension2: IgrPivotDimension = {} as IgrPivotDimension;
            igrPivotDimension2.memberName = "ProductName";
            igrPivotDimension2.sortDirection = SortingDirection.Asc;
            igrPivotDimension2.enabled = true;

            var igrPivotDimension3: IgrPivotDimension = {} as IgrPivotDimension;
            igrPivotDimension3.memberName = "SellerCity";
            igrPivotDimension3.enabled = true;

            pivotConfiguration1.rows = [igrPivotDimension2,igrPivotDimension3];
            var igrPivotDimension4: IgrPivotDimension = {} as IgrPivotDimension;
            igrPivotDimension4.memberName = "SellerName";
            igrPivotDimension4.enabled = true;

            pivotConfiguration1.filters = [igrPivotDimension4];
            var igrPivotValue1: IgrPivotValue = {} as IgrPivotValue;
            igrPivotValue1.member = "AmountofSale";
            igrPivotValue1.displayName = "Amount of Sale";
            igrPivotValue1.enabled = true;
            var igrPivotAggregator1: IgrPivotAggregator = {} as IgrPivotAggregator;
            igrPivotAggregator1.key = "SUM";
            igrPivotAggregator1.label = "Sum of Sale";
            igrPivotAggregator1.aggregator = this.pivotDataFlatAggregateSumSale;

            igrPivotValue1.aggregate = igrPivotAggregator1;
            var igrPivotAggregator2: IgrPivotAggregator = {} as IgrPivotAggregator;
            igrPivotAggregator2.key = "SUM";
            igrPivotAggregator2.label = "Sum of Sale";
            igrPivotAggregator2.aggregator = this.pivotDataFlatAggregateSumSale;

            var igrPivotAggregator3: IgrPivotAggregator = {} as IgrPivotAggregator;
            igrPivotAggregator3.key = "MIN";
            igrPivotAggregator3.label = "Minimum of Sale";
            igrPivotAggregator3.aggregator = this.pivotDataFlatAggregateMinSale;

            var igrPivotAggregator4: IgrPivotAggregator = {} as IgrPivotAggregator;
            igrPivotAggregator4.key = "MAX";
            igrPivotAggregator4.label = "Maximum of Sale";
            igrPivotAggregator4.aggregator = this.pivotDataFlatAggregateMaxSale;

            igrPivotValue1.aggregateList = [igrPivotAggregator2,igrPivotAggregator3,igrPivotAggregator4];

            pivotConfiguration1.values = [igrPivotValue1];

            this._pivotConfiguration1 = pivotConfiguration1;
        }
        return this._pivotConfiguration1;
    }

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrPivotGrid
                    data={this.pivotDataFlat}
                    ref={this.gridRef}
                    rowSelection="single"
                    superCompactMode={true}
                    pivotConfiguration={this.pivotConfiguration1}>
                </IgrPivotGrid>
            </div>
        </div>
        );
    }

    private _pivotDataFlat: PivotDataFlat = null;
    public get pivotDataFlat(): PivotDataFlat {
        if (this._pivotDataFlat == null)
        {
            this._pivotDataFlat = new PivotDataFlat();
        }
        return this._pivotDataFlat;
    }


    public pivotDataFlatAggregateSumSale(members: any[], data: any[]): any {
        return data.reduce((accumulator, value) => accumulator + value.ProductUnitPrice * value.NumberOfUnits, 0);
    }

    public pivotDataFlatAggregateMinSale(members: any[], data: any[]): any {
        let min = 0;
        if (data.length === 1) {
            min = data[0].ProductUnitPrice * data[0].NumberOfUnits;
        } else if (data.length > 1) {
            const mappedData = data.map(x => x.ProductUnitPrice * x.NumberOfUnits);
            min = mappedData.reduce((a, b) => Math.min(a, b));
        }
        return min;
    }

    public pivotDataFlatAggregateMaxSale(members: any[], data: any[]): any {
        let max = 0;
        if (data.length === 1) {
            max = data[0].ProductUnitPrice * data[0].NumberOfUnits;
        } else if (data.length > 1) {
            const mappedData = data.map(x => x.ProductUnitPrice * x.NumberOfUnits);
            max = mappedData.reduce((a, b) => Math.max(a, b));
        }
        return max;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## Dimensions Sorting

Dimension values in the `rows` or `columns` can be sorted via the related chip or the API. This functionality is embedded and enabled by default.

The dimension is sorted on click of the related chip and as a result the dimension values are sorted in ascending/descending order.

Sorting can also be applied initially via the `sortDirection` property of the dimension definition.

<!-- React -->

```tsx
const dimension: IgrPivotDimension = {
    memberName: "SellerName",
    enabled: true,
    sortDirection: SortingDirection.Asc
};
```

<!-- end: React -->

## Dimensions Resizing

Row dimensions can be resized similarly to column resizing - via a resizing indicator that can be found on the right edge of the cells.
They can also be auto-sized by double clicking the resize indicator, or by using the related API - [`autoSizeRowDimension`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotgrid.html#autoSizeRowDimension).

A different size can also be set initially with the [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) property available in the dimension definition:

<!-- React -->

```tsx
const igrPivotDimension2: IgrPivotDimension = {
    memberName: "SellerName",
    enabled: true,
    width = "400px"
};
```

<!-- end: React -->

## Dimensions Selection

The Pivot Grid supports single selection which is enabled just like in the base grid. For example:

<!--React -->

```tsx
<IgrPivotGrid data={pivotData} pivotConfiguration={pivotConfiguration} rowSelection="single">
</IgrPivotGrid>
```

<!-- end: React -->

In case there are multiple row or column dimensions which would create groups that span multiple rows/columns, selection is applied to all cells that belong to the selected group.

## Super Compact Mode

The [`IgrPivotGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotgrid.html) component provides a [`superCompactMode`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotgrid.html#superCompactMode) input. It is suitable for cases that require a lot of cells to be present on the screen at once. If enabled the option ignores the `--ig-size` CSS variable for the Pivot Grid. Enabling [`superCompactMode`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotgrid.html#superCompactMode) also sets the `--ig-size` to `small` for each child component(like [`IgrChip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrchip.html)) that does not have the `SuperCompactMode` option.

<!--React -->

```tsx
<IgrPivotGrid data={pivotData} pivotConfiguration={pivotConfiguration} superCompactMode={true}>
</IgrPivotGrid>
```

<!-- end: React -->

## Additional Summary Column

When a `column` dimension defines a hierarchy, the Pivot Grid will render additional summary/total column, which accumulates the aggregations of all of the columns inside the group. When the group is collapsed only the summary column will remain. And when the group is expanded the additional summary column appears at the end of the group.

## Interactions

### Keyboard Navigation

Keyboard navigation in [`IgrPivotGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotgrid.html) works similarly to the one in [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html). The Pivot Grid is split into three areas - `rows`, `columns`, `values`. The areas for `rows` and `columns` are considered headers for the purposes of navigation while the area for `values` is the body.
The keyboard arrows allow navigating the active element within the current area only.

### Dimensions Drag & Drop

The dimensions are represented by chips, which can be dragged & dropped.
All chips can change their order within their area by drag & drop.
The chips from `rows`, `column`, `filter`(dimension chips) can be moved from any of those areas to any other and at any place.
Chips from these areas can not be moved to the `values` area and chips from the `values` area can not be moved to any of the dimension areas.

> \[!Note]
> The chips from the Pivot Grid can not be moved to the Pivot Data Selector and items from the Pivot Data Selector can not be moved to the Pivot Grid.

## API References

- [`IgrPivotGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotgrid.html)
- [`IgrPivotDataSelector`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotdataselector.html)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
