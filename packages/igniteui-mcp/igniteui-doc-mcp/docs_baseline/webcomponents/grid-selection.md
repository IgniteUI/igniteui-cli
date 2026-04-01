---
title: Web Components Grid Selection - Ignite UI for Web Components
_description: See how easy it is to select data in Ignite UI for Web Components grid using variety of events, rich API or with simple mouse interactions like single select.
_keywords: Web Components, Grid, IgcGrid, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/selection
_tocName: Selection
---

# Web Components Grid Selection Overview

With the Ignite UI for Web Components Select feature in Web Components Grid you can easily interact with and manipulate data using simple mouse interactions. There are three selection modes available:

- Row selection
- Cell selection
- Column selection

With the [`rowSelection`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowSelection) property, you can specify:

- None
- Single
- Multiple Select

## Web Components Grid Selection Example

The sample below demonstrates three types of **cell selection** behaviors in the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html). Use the buttons below to enable each of the available selection modes.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Web Components Grid Selection Options

<!-- ComponentStart: Grid, HierarchicalGrid -->

The Ignite UI for Web Components [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) component provides three different selection modes - [Row selection](row-selection.md), [Cell selection](cell-selection.md) and [Column selection](column-selection.md). By default only **Multi-cell selection** mode is enabled in the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html). In order to change/enable selection mode you can use [`rowSelection`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowSelection), [`cellSelection`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#cellSelection) or [`selectable`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#selectable) properties.

<!-- ComponentEnd: Grid, HierarchicalGrid -->

### Web Components Grid Row Selection

Property [`rowSelection`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowSelection) enables you to specify the following options:

- `None` - Row selection would be disabled for the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html).
- `Single` - Selection of only one row within the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) would be available.
- `Multiple` - Multi-row selection would be available by using the row selectors, with a key combination like <kbd>CTRL</kbd> + <kbd>click</kbd>, or by pressing the <kbd>space key</kbd> once a cell is focused.

> Go to [Row selection topic](row-selection.md) for more information.

### Web Components Grid Cell Selection

Property [`cellSelection`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#cellSelection) enables you to specify the following options:

- `None` - Cell selection would be disabled for the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html).
- `Single` - Selection of only one cell within the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) would be available.
- `Multiple` - Currently, this is the default state of the selection in the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html). Multi-cell selection is available by mouse dragging over the cells, after a left button mouse clicked continuously.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

> Go to [Cell selection topic](cell-selection.md) for more information.

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

### Web Components Grid Column Selection

The [`selectable`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#selectable) property enables you to specify the following options for each [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html). The corresponding column selection will be enabled or disabled if this property is set to true or false, respectively.

This leads to the following three variations:

- Single selection - <kbd>mouse click</kbd> over the column cell.
- Multi column selection - holding <kbd>CTRL</kbd> + <kbd>mouse click</kbd> over the column cells.
- Range column selection - holding <kbd>SHIFT</kbd> + <kbd>mouse click</kbd> selects everything in between.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

> Go to [Column selection topic](column-selection.md) for more information.

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

<!-- ComponentStart: Grid -->

## Web Components Grid Context Menu

Using the `ContextMenu` event you can add a custom context menu to facilitate your work with [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html). With a **right click** on the grid's body, the event emits the cell on which it is triggered. The **context menu** will operate with the emitted cell.

If there is a **multi-cell selection**, we will put logic, which will check whether the selected cell is in the area of the multi-cell selection. If it is, we will also emit the values of the selected cells.

Basically the main function will look like this:

<!-- WebComponents -->

```ts
    public rightClick(event: any) {
        const eventArgs = event.detail;
        eventArgs.event.preventDefault();
        this.multiCellArgs = {};
        if (this.multiCellSelection) {
          const node = eventArgs.cell.selectionNode;
          const isCellWithinRange = this.grid.getSelectedRanges().some((range) => {
            if (
              node.column >= range.columnStart &&
              node.column <= range.columnEnd &&
              node.row >= range.rowStart &&
              node.row <= range.rowEnd
            ) {
              return true;
            }
            return false;
          });
          if (isCellWithinRange) {
            this.multiCellArgs = { data: this.multiCellSelection.data };
          }
        }
        this.contextmenuX = eventArgs.event.clientX;
        this.contextmenuY = eventArgs.event.clientY;
        this.clickedCell = eventArgs.cell;
        this.toggleContextMenu();
      }
```

The context menu will have the following functions:

- Copy the selected cell's *value*.
- Copy the selected cell's *dataRow*.
- If the selected cell is within a **multi-cell selection range**, copy all the *selected data*.

<!-- WebComponents -->

```ts
    public copySelectedRowData() {
        const selectedData = this.grid.getRowData(this.clickedCell.id.rowID);
        this.copyData(selectedData);
        const selectedDataArea = document.getElementById('selectedArea');
        selectedDataArea.innerText = JSON.stringify(selectedData);
        this.toggleContextMenu();
    }

    public copySelectedCellData() {
        const selectedData = this.clickedCell.value;
        this.copyData(selectedData);
        const selectedDataArea = document.getElementById('selectedArea');
        selectedDataArea.innerText = JSON.stringify(selectedData);
        this.toggleContextMenu();
    }


    public copySelectedData() {
        const selectedData = this.grid.getSelectedData();
        this.copyData(selectedData);
        const selectedDataArea = document.getElementById('selectedArea');
        selectedDataArea.innerText = JSON.stringify(selectedData);

        this.toggleContextMenu();
    }

    private copyData(data: any[]) {
        const tempElement = document.createElement('input');
        document.body.appendChild(tempElement);
        tempElement.setAttribute('id', 'temp_id');
        (document.getElementById('temp_id') as HTMLInputElement).value = JSON.stringify(data);
        tempElement.select();
        document.execCommand('copy');
        document.body.removeChild(tempElement);
    }
```

The [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) will fetch the copied data and will paste it in a container element.

The template we are going to use to combine the grid with the context menu:

<!-- WebComponents -->

```html
    <div class="container sample">
      <div class="wrapper">
        <igc-grid auto-generate="false" width="50%" height="100%" name="grid" id="grid">
          <igc-column field="ProductID" header="Product ID">
          </igc-column>
          <igc-column field="ProductName" header="Product Name">
          </igc-column>
          <igc-column field="UnitsInStock" header="Units In Stock" data-type="number">
          </igc-column>
          <igc-column field="UnitPrice" header="Units Price" data-type="number">
          </igc-column>
          <igc-column field="Discontinued" data-type="boolean">
          </igc-column>
          <igc-column field="OrderDate" header="Order Date" data-type="date">
          </igc-column>
        </igc-grid>
        <div id="selectedArea" class="selected-data-area">
        </div>
      </div>
    </div>
    <div id="menu" style="display: none;" class="contextmenu">
      <span id="copySingleCell" class="item">
        <igc-icon name="content_copy"></igc-icon>Copy Cell Data
      </span>
      <span id="copyRow" class="item">
        <igc-icon name="content_copy"></igc-icon>Copy Row Data
      </span>
      <span id="copyMultiCells" class="item">
        <igc-icon name="content_copy"></igc-icon>Copy Cells Data
      </span>
    </div>
  </div>
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


<!-- ComponentEnd: Grid -->

## Known Issues and Limitations

When the grid has no [`primaryKey`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#primaryKey) set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:

- Row Selection
- Row Expand/collapse
- Row Editing
- Row Pinning

## API References

- [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html)

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

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
