---
title: React Grid Selection - Ignite UI for React
_description: See how easy it is to select data in Ignite UI for React grid using variety of events, rich API or with simple mouse interactions like single select.
_keywords: React, Grid, IgrGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/selection
_tocName: Selection
---

# React Grid Selection Overview

With the Ignite UI for React Select feature in React Grid you can easily interact with and manipulate data using simple mouse interactions. There are three selection modes available:

- Row selection
- Cell selection
- Column selection

With the [`rowSelection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowSelection) property, you can specify:

- None
- Single
- Multiple Select

## React Grid Selection Example

The sample below demonstrates three types of **cell selection** behaviors in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html). Use the buttons below to enable each of the available selection modes.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebGridDescriptionModule } from 'igniteui-react-core';
import NwindData from './NwindData.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private cellSelectionEditor: IgrPropertyEditorPropertyDescription
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    ref={this.propertyEditorRef}
                    componentRenderer={this.renderer}
                    target={this.grid}
                    descriptionType="WebGrid"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="CellSelection"
                        name="CellSelectionEditor"
                        valueType="EnumValue"
                        dropDownNames={["None", "Single", "Multiple"]}
                        dropDownValues={["NOne", "Single", "Multiple"]}>
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    ref={this.gridRef}
                    data={this.nwindData}>
                    <IgrColumn
                        field="ProductID"
                        header="Product ID">
                    </IgrColumn>
                    <IgrColumn
                        field="ProductName"
                        header="Product Name">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitsInStock"
                        header="Units In Stock"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Units Price"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        dataType="boolean">
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="date">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _nwindData: any[] = NwindData;
    public get nwindData(): any[] {
        return this._nwindData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            WebGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## React Grid Selection Options

<!-- ComponentStart: Grid, HierarchicalGrid -->

The Ignite UI for React [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) component provides three different selection modes - [Row selection](row-selection.md), [Cell selection](cell-selection.md) and [Column selection](column-selection.md). By default only **Multi-cell selection** mode is enabled in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html). In order to change/enable selection mode you can use [`rowSelection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowSelection), [`cellSelection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#cellSelection) or [`selectable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#selectable) properties.

<!-- ComponentEnd: Grid, HierarchicalGrid -->

### React Grid Row Selection

Property [`rowSelection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowSelection) enables you to specify the following options:

- `None` - Row selection would be disabled for the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html).
- `Single` - Selection of only one row within the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) would be available.
- `Multiple` - Multi-row selection would be available by using the row selectors, with a key combination like <kbd>CTRL</kbd> + <kbd>click</kbd>, or by pressing the <kbd>space key</kbd> once a cell is focused.

> Go to [Row selection topic](row-selection.md) for more information.

### React Grid Cell Selection

Property [`cellSelection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#cellSelection) enables you to specify the following options:

- `None` - Cell selection would be disabled for the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html).
- `Single` - Selection of only one cell within the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) would be available.
- `Multiple` - Currently, this is the default state of the selection in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html). Multi-cell selection is available by mouse dragging over the cells, after a left button mouse clicked continuously.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

> Go to [Cell selection topic](cell-selection.md) for more information.

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

### React Grid Column Selection

The [`selectable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#selectable) property enables you to specify the following options for each [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html). The corresponding column selection will be enabled or disabled if this property is set to true or false, respectively.

This leads to the following three variations:

- Single selection - <kbd>mouse click</kbd> over the column cell.
- Multi column selection - holding <kbd>CTRL</kbd> + <kbd>mouse click</kbd> over the column cells.
- Range column selection - holding <kbd>SHIFT</kbd> + <kbd>mouse click</kbd> selects everything in between.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

> Go to [Column selection topic](column-selection.md) for more information.

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

<!-- ComponentStart: Grid -->

## React Grid Context Menu

Using the `ContextMenu` event you can add a custom context menu to facilitate your work with [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html). With a **right click** on the grid's body, the event emits the cell on which it is triggered. The **context menu** will operate with the emitted cell.

If there is a **multi-cell selection**, we will put logic, which will check whether the selected cell is in the area of the multi-cell selection. If it is, we will also emit the values of the selected cells.

Basically the main function will look like this:

```tsx
const rightClick = (event: IgrGridContextMenuEventArgs) => {
  const eventArgs = event.detail;
  eventArgs.event.preventDefault();
  const node = eventArgs.cell.cellID;
  const isCellWithinRange = gridRef.current
    .getSelectedRanges()
    .some((range: any) => {
      if (
        node.columnID >= range.columnStart &&
        node.columnID <= range.columnEnd &&
        node.rowIndex >= range.rowStart &&
        node.rowIndex <= range.rowEnd
      ) {
        return true;
      }
      return false;
    });
  setIsCellWithinRange(isCellWithinRange);
  setClickedCell(eventArgs.cell);
  openContextMenu(eventArgs.event.clientX, eventArgs.event.clientY);
};
```

The context menu will have the following functions:

- Copy the selected cell's _value_.
- Copy the selected cell's _dataRow_.
- If the selected cell is within a **multi-cell selection range**, copy all the _selected data_.

```tsx
const copySelectedRowData = () => {
  const selectedData = gridRef.current.getRowData(clickedCell.cellID.rowID);
  copyData(selectedData);
  closeContextMenu();
};

const copySelectedCellData = () => {
  const selectedData = clickedCell.value;
  copyData(selectedData);
  closeContextMenu();
};

const copySelectedData = () => {
  const selectedData = gridRef.current.getSelectedData(null, null);
  copyData(selectedData);
  closeContextMenu();
};

const copyData = (data: any[]) => {
  const tempElement = document.createElement("input");
  document.body.appendChild(tempElement);
  tempElement.setAttribute("id", "temp_id");
  (document.getElementById("temp_id") as HTMLInputElement).value =
    JSON.stringify(data);
  tempElement.select();
  const dataStringified = JSON.stringify(data);
  navigator.clipboard.writeText(dataStringified).catch((err) => {
     console.error("Failed to copy: ", err);
  });
  document.body.removeChild(tempElement);
  setSelectedData(dataStringified);
};
```

The [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) will fetch the copied data and will paste it in a container element.

The template we are going to use to combine the grid with the context menu:

```tsx
<>
  <div className="container sample">
    <div className="wrapper" onClick={closeContextMenu}>
      <IgrGrid
        autoGenerate={false}
        data={northWindData}
        primaryKey="ProductID"
        ref={gridRef}
        onContextMenu={rightClick}
      >
        <IgrColumn field="ProductID" header="Product ID"></IgrColumn>
        <IgrColumn field="ProductName" header="Product Name"></IgrColumn>
        <IgrColumn
          field="UnitsInStock"
          header="Units In Stock"
          dataType="number"
        ></IgrColumn>
        <IgrColumn
          field="UnitPrice"
          header="Units Price"
          dataType="number"
        ></IgrColumn>
        <IgrColumn field="Discontinued" dataType="boolean"></IgrColumn>
        <IgrColumn
          field="OrderDate"
          header="Order Date"
          dataType="date"
        ></IgrColumn>
      </IgrGrid>
      <div className="selected-data-area">{selectedData}</div>
    </div>
  </div>
  <div style={{ display: "none" }} className="contextmenu" ref={contextMenuRef}>
    <span className="item" onClick={copySelectedCellData}>
      <IgrIcon ref={iconRef} collection="material" name="content_copy"></IgrIcon>
      Copy Cell Data
    </span>
    <span className="item" onClick={copySelectedRowData}>
      <IgrIcon collection="material" name="content_copy"></IgrIcon>Copy Row Data
    </span>
    {isCellWithinRange && (
      <span className="item" onClick={copySelectedData}>
        <IgrIcon collection="material" name="content_copy"></IgrIcon>Copy Cells Data
      </span>
    )}
  </div>
</>
```

Select multiple cells and press the right mouse button. The context menu will appear and after selecting **Copy cells data** the selected data will appear in the right empty box.

The result is:

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

.contextmenu {
    position: absolute;
    width: 180px;
    background: white;
    display: flex;
    cursor: context-menu;
    flex-direction: column;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
    z-index: 9999;
    font-size: 0.75rem;
    font-weight: 650;
}

.item {
    padding: 10px;
    display: flex;
}

.item:hover {
    background:rgb(204, 203, 203);
}

.icon {
    vertical-align: middle;
    margin-bottom: 5px;
    margin-right: 5px;
}

.selected-data-area{
    overflow-y: auto;
    width: 50%;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
    margin-left: 10px;
}

.wrapper{
    margin: 10px;
    display: flex;
    justify-content: space-evenly;
}
```
```tsx
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  IgrGridContextMenuEventArgs
} from "igniteui-react-grids";
import { IgrGrid, IgrColumn } from "igniteui-react-grids";
import { NwindData } from "./NwindData";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import { IgrIcon, registerIconFromText } from "igniteui-react";

const icon = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M180-81q-24 0-42-18t-18-42v-603h60v603h474v60H180Zm120-120q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18H300Zm0-60h440v-560H300v560Zm0 0v-560 560Z"/></svg>`;

export default function App() {
  const [clickedCell, setClickedCell] = useState(null);
  const [isCellWithinRange, setIsCellWithinRange] = useState(false);
  const [selectedData, setSelectedData] = useState("");
  const gridRef = useRef<IgrGrid>(null);
  const contextMenuRef = useRef(null);
  const northWindData = new NwindData();

  useEffect(() => {
    registerIconFromText("content_copy", icon, "material");
  }, []);

  const rightClick = (event: IgrGridContextMenuEventArgs) => {
    const eventArgs = event.detail;
    eventArgs.event.preventDefault();
    const node = eventArgs.cell.cellID;
    const isCellWithinRange = gridRef.current
      .getSelectedRanges()
      .some((range: any) => {
        if (
          node.columnID >= range.columnStart &&
          node.columnID <= range.columnEnd &&
          node.rowIndex >= range.rowStart &&
          node.rowIndex <= range.rowEnd
        ) {
          return true;
        }
        return false;
      });
    setIsCellWithinRange(isCellWithinRange);
    setClickedCell(eventArgs.cell);
    openContextMenu(eventArgs.event.clientX, eventArgs.event.clientY);
  };

  const openContextMenu = (x: number, y: number) => {
    contextMenuRef.current.style.left = x + "px";
    contextMenuRef.current.style.top = y + "px";
    contextMenuRef.current.style.display = "";
  };

  const closeContextMenu = () => {
    contextMenuRef.current.style.display = "none";
  };

  const copySelectedRowData = () => {
    const selectedData = gridRef.current.getRowData(clickedCell.cellID.rowID);
    copyData(selectedData);
    closeContextMenu();
  };

  const copySelectedCellData = () => {
    const selectedData = clickedCell.value;
    copyData(selectedData);
    closeContextMenu();
  };

  const copySelectedData = () => {
    const selectedData = gridRef.current.getSelectedData(null, null);
    copyData(selectedData);
    closeContextMenu();
  };

  const copyData = (data: any[]) => {
    const tempElement = document.createElement("input");
    document.body.appendChild(tempElement);
    tempElement.setAttribute("id", "temp_id");
    (document.getElementById("temp_id") as HTMLInputElement).value =
      JSON.stringify(data);
    tempElement.select();
    const dataStringified = JSON.stringify(data);
    navigator.clipboard.writeText(dataStringified).catch((err) => {
       console.error("Failed to copy: ", err);
    });
    document.body.removeChild(tempElement);
    setSelectedData(dataStringified);
  };

  return (
    <>
      <div className="container sample">
        <div className="wrapper" onClick={closeContextMenu}>
          <IgrGrid
            autoGenerate={false}
            data={northWindData}
            primaryKey="ProductID"
            ref={gridRef}
            onContextMenu={rightClick}
          >
            <IgrColumn field="ProductID" header="Product ID"></IgrColumn>
            <IgrColumn field="ProductName" header="Product Name"></IgrColumn>
            <IgrColumn
              field="UnitsInStock"
              header="Units In Stock"
              dataType="number"
            ></IgrColumn>
            <IgrColumn
              field="UnitPrice"
              header="Units Price"
              dataType="number"
            ></IgrColumn>
            <IgrColumn field="Discontinued" dataType="boolean"></IgrColumn>
            <IgrColumn
              field="OrderDate"
              header="Order Date"
              dataType="date"
            ></IgrColumn>
          </IgrGrid>
          <div className="selected-data-area">{selectedData}</div>
        </div>
      </div>
      <div
        style={{ display: "none" }}
        className="contextmenu"
        ref={contextMenuRef}
      >
        <span className="item" onClick={copySelectedCellData}>
          <IgrIcon
            collection="material"
            name="content_copy"
          ></IgrIcon>
          Copy Cell Data
        </span>
        <span className="item" onClick={copySelectedRowData}>
          <IgrIcon collection="material" name="content_copy"></IgrIcon>Copy Row
          Data
        </span>
        {isCellWithinRange && (
          <span className="item" onClick={copySelectedData}>
            <IgrIcon collection="material" name="content_copy"></IgrIcon>Copy
            Cells Data
          </span>
        )}
      </div>
    </>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

<!-- ComponentEnd: Grid -->

## Known Issues and Limitations

When the grid has no [`primaryKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#primaryKey) set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:

- Row Selection
- Row Expand/collapse
- Row Editing
- Row Pinning

## API References

- [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)

## Additional Resources

<!-- ComponentStart: Grid -->

- [Row Selection](row-selection.md)
- [Cell Selection](cell-selection.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Virtualization and Performance](virtualization.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
