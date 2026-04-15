---
title: React Grid Clipboard Interactions - Ignite UI for React
_description: The React Grid Clipboard functionality provides fast, easy and customizable way to copy, paste and export data to Excel or other programs. Try it now!
_keywords: React, Grid, IgrGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/clipboard-interactions
_tocName: Clipboard Interactions
_premium: true
---

# React Grid Clipboard Overview

Copy to clipboard operations are now available in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html). This functionality provides a fast, easy and customizable way to copy data of the React [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) through the current multi cell data select. System Clipboard behavior gives the user ability to copy data from the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) into Excel or other external programs.

## React Grid Clipboard Example

```typescript
export class NwindDataItem {
    public constructor(init: Partial<NwindDataItem>) {
        Object.assign(this, init);
    }

    public ProductID: number;
    public ProductName: string;
    public SupplierID: number;
    public CategoryID: number;
    public QuantityPerUnit: string;
    public UnitPrice: number;
    public UnitsInStock: number;
    public UnitsOnOrder: number;
    public ReorderLevel: number;
    public Discontinued: boolean;
    public OrderDate: string;
    public Rating: number;
    public Locations: NwindDataItem_LocationsItem[];

}
export class NwindDataItem_LocationsItem {
    public constructor(init: Partial<NwindDataItem_LocationsItem>) {
        Object.assign(this, init);
    }

    public Shop: string;
    public LastInventory: string;

}
export class NwindData extends Array<NwindDataItem> {
    public constructor() {
        super();
        this.push(new NwindDataItem(
        {
            ProductID: 1,
            ProductName: `Chai`,
            SupplierID: 1,
            CategoryID: 1,
            QuantityPerUnit: `10 boxes x 20 bags`,
            UnitPrice: 18,
            UnitsInStock: 39,
            UnitsOnOrder: 30,
            ReorderLevel: 10,
            Discontinued: false,
            OrderDate: `2012-02-12`,
            Rating: 5,
            Locations: [
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Fun-Tasty Co.`,
                    LastInventory: `06/12/2018`
                }),
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Farmer Market`,
                    LastInventory: `04/04/2018`
                })]

        }));
        this.push(new NwindDataItem(
        {
            ProductID: 2,
            ProductName: `Chang`,
            SupplierID: 1,
            CategoryID: 1,
            QuantityPerUnit: `24 - 12 oz bottles`,
            UnitPrice: 19,
            UnitsInStock: 17,
            UnitsOnOrder: 40,
            ReorderLevel: 25,
            Discontinued: true,
            OrderDate: `2003-03-17`,
            Rating: 5,
            Locations: [
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Super Market`,
                    LastInventory: `09/09/2018`
                })]

        }));
        this.push(new NwindDataItem(
        {
            ProductID: 3,
            ProductName: `Aniseed Syrup`,
            SupplierID: 1,
            CategoryID: 2,
            QuantityPerUnit: `12 - 550 ml bottles`,
            UnitPrice: 10,
            UnitsInStock: 13,
            UnitsOnOrder: 70,
            ReorderLevel: 25,
            Discontinued: false,
            OrderDate: `2006-03-17`,
            Rating: 3,
            Locations: [
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Farmer Market`,
                    LastInventory: `04/04/2018`
                }),
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Street Market`,
                    LastInventory: `12/12/2018`
                }),
                new NwindDataItem_LocationsItem(
                {
                    Shop: `24/7 Market`,
                    LastInventory: `11/11/2018`
                })]

        }));
        // ... 17 more items
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.wrapper {
    justify-content: space-evenly;
    margin: 1rem;
}
```
```tsx
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrButton, IgrInput, IgrSwitch, IgrCheckboxChangeEventArgs, IgrComponentDataValueChangedEventArgs, IgrComponentValueChangedEventArgs } from 'igniteui-react';
import { IgrGridModule, IgrColumnComponentEventArgs } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { NwindData } from './NwindData';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule
];
mods.forEach((m) => m.register());

export default function App() {
    let defaultSeparator = " ";
    const data = new NwindData();
    const gridRef = useRef<IgrGrid>(null);

    useEffect(() => {
        defaultSeparator = gridRef.current.clipboardOptions.separator;
    }, []);

    const onColumnInit = (args: IgrColumnComponentEventArgs) => {
        let column = args.detail;
        column.formatter = (val: any) => "** " + val + " **"
        column.header = "🎉" + column.field;
    }

    const changeCopySeparator = (args: IgrComponentValueChangedEventArgs): void => {
        gridRef.current.clipboardOptions.separator = args.detail || defaultSeparator;
    }

    const changeGridCopyBehavior = (args: IgrCheckboxChangeEventArgs): void => {
        gridRef.current.clipboardOptions.enabled = args.detail.checked;
    }

    const changeGridCopyHeadersBehavior = (args: IgrCheckboxChangeEventArgs): void => {
        gridRef.current.clipboardOptions.copyHeaders = args.detail.checked;
    }

    const changeGridCopyFormattersBehavior = (args: IgrCheckboxChangeEventArgs): void => {
        gridRef.current.clipboardOptions.copyFormatters = args.detail.checked;
    }

    const clearSelection = () => {
        gridRef.current.clearCellSelection();
    }

    return (
        <>
            <div className="container sample">      
                <div className="options horizontal" style={{gap: "1rem", alignItems: "center", margin: "1rem"}}>
                    <IgrInput placeholder='The default value is a single tabulation' style={{flex: "1 0 auto"}} onChange={changeCopySeparator}>
                        <span key="prefix" slot="prefix">Change copy separator:</span>
                    </IgrInput>
                    <IgrSwitch labelPosition="before" checked onChange={changeGridCopyBehavior}>
                        <span key="gridCopy">Grid copy behavior</span>
                    </IgrSwitch>
                    <IgrSwitch labelPosition="before" checked onChange={changeGridCopyHeadersBehavior}>
                        <span key="gridCopyHeaders">Copying of header labels</span>
                    </IgrSwitch>
                    <IgrSwitch labelPosition="before" checked onChange={changeGridCopyFormattersBehavior}>
                        <span key="gridCopyFormatters">Copying column formatters</span>
                    </IgrSwitch>
                    <IgrButton onClick={clearSelection}>
                        <span key="clearSelection">Clear selection</span>
                    </IgrButton>
                </div>
                <div className="container fill">
                    <IgrGrid autoGenerate={false} cellSelection="multiple" data={data} ref={gridRef} onColumnInit={onColumnInit}>
                        <IgrColumn field="ProductID" header="Product ID">
                        </IgrColumn>
                        <IgrColumn field="ProductName" header="Product Name">
                        </IgrColumn>
                        <IgrColumn field="SupplierID" header="Supplier ID">
                        </IgrColumn>
                        <IgrColumn field="CategoryID" header="Category ID">
                        </IgrColumn>
                        <IgrColumn field="QuantityPerUnit" header="Quantity Per Unit">
                        </IgrColumn>
                        <IgrColumn field="UnitPrice" header="Unit Price">
                        </IgrColumn>
                        <IgrColumn field="UnitsInStock" header="Units In Stock">
                        </IgrColumn>
                    </IgrGrid>
                </div>
            </div>
        </>
        );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
```


## Functionality

Copy behavior is working with the default interaction defined by the browser and operating system. Thus for the copy and paste behaviors, these are:

- Windows/Unix based
  - <kbd>CTRL</kbd> + <kbd>C</kbd> / <kbd>CTRL</kbd> + <kbd>Ins</kbd> as a keyboard shortcut
  - <kbd>CTRL</kbd> + <kbd>V</kbd> / <kbd>SHIFT</kbd> + <kbd>Ins</kbd> as a keyboard shortcut
  - Copy action through the browser menu
- macOS
  - <kbd>CMD</kbd> + <kbd>C</kbd> as a keyboard shortcut
  - <kbd>CMD</kbd> + <kbd>V</kbd> as a keyboard shortcut
  - Copy action through the browser menu

## Limitations

- Both the **cut** and **copy** events are not natively supported in Internet Explorer. The exception is the
    **paste** event (IE 11) which is emitted but does not expose the `ClipboardData` property in the event.

> [!Note]
> In order to **copy** cells in IE 11, you can use the keyboard selection. Hold the <kbd>SHIFT</kbd> key in order to make a multi-cell selection, press <kbd>CTRL</kbd> + <kbd>C</kbd> in order to copy.

- The copy behavior is disabled while the grid is in edit mode.
- The current version of this feature covers only the **copy** from grid behavior. Later on we plan to expose `paste` within grid behavior.

## API Usage

We expose [`clipboardOptions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#clipboardOptions) property, which handles the following options:

- `Enabled` Enables/disables copying of selected cells.
- `CopyHeaders` Include the associated headers when copying.
- `CopyFormatters` Apply any existing column formatters to the copied data.
- `Separator` The string separator to use the for formatting the data in the clipboard. Default is `/t`

> [!Note]
> Excel can automatically detect text that is separated by tabs (tab-delimited `/t`) and properly paste the data into separate columns. When the paste format doesn't work, and everything you paste appears in a single column, then Excel's delimiter is set to another character, or your text is using spaces instead of tabs.

- `GridCopy` Emitted when a copy operation is executed. Fired only if copy behavior is enabled through the [`clipboardOptions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#clipboardOptions).

## Additional Resources

<!-- ComponentStart: Grid -->

- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Summaries](summaries.md)
- [Column Pinning](column-pinning.md)
- [Selection](selection.md)
- [Virtualization and Performance](virtualization.md)
- [Multi-column headers](multi-column-headers.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
