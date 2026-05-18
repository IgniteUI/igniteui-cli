---
title: Web Components Excel Like {ComponentTitle} - Infragistics
_description: Configure the Web Components Grid to paste data from excel, by using rich and performance API with less code, and use the rich API do export selected grid data easily.
_keywords: export selected, igniteui for Web Components, {ComponentKeywords}, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid"]
_tocName: Paste from Excel
_premium: true
---

# Web Components Grid Paste from Excel

The Ignite UI for Web Components [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) can read Excel data that is copied to the clipboard. In this section we will show you how to do this with some custom code.

## Web Components Paste from Excel Example

This sample demonstrates how to implement pasting from Excel into the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) Material UI table.
To work with the sample open up any Excel spreadsheet, copy some rows, and paste it into the grid using the keyboard (<kbd>CTRL</kbd> + <kbd>V</kbd>, <kbd>SHIFT</kbd> + <kbd>INSERT</kbd>,<kbd>CMD</kbd> + <kbd>V</kbd>).

On the top there is a dropdown button with 2 options:

<ol>
<li>"Paste data as new rows" – in this mode any data copied from Excel will be appended to the grid as new rows</li>
<li>"Paste starting from active cell" – in this mode the data in the grid will be overwritten.</li>
</ol>

The new data after the paste is decorated in Italic.

```typescript
export class InvoicesDataItem {
    public constructor(init: Partial<InvoicesDataItem>) {
        Object.assign(this, init);
    }

    public ShipName: string;
    public ShipAddress: string;
    public ShipCity: string;
    public ShipPostalCode: number;
    public ShipCountry: string;
    public ShipRegion: string;
    public ShipperName: string;
    public CustomerID: number;
    public CustomerName: string;
    public CustomerFirstName: string;
    public CustomerLastName: string;
    public CustomerAddress: string;
    public Salesperson: string;
    public OrderID: number;
    public OrderDate: string;
    public ProductID: number;
    public ProductName: string;
    public UnitPrice: number;
    public Quantity: number;
    public ExtendedPrice: number;
    public Freight: number;
    public Discontinued: boolean;
    public Region: string;
    public Address: string;
    public City: string;
    public Country: string;
    public PostalCode: number;

}
export class InvoicesData extends Array<InvoicesDataItem> {
    public constructor(items: Array<InvoicesDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new InvoicesDataItem({ ShipName: `Jefferson Home`, ShipAddress: `124 Wall Street`, ShipCity: `Miami`, ShipPostalCode: 60098, ShipCountry: `USA`, ShipRegion: `South East`, ShipperName: `Federal Shipping`, CustomerID: 1000, CustomerName: `Martin Jefferson`, CustomerFirstName: `Martin`, CustomerLastName: `Jefferson`, CustomerAddress: `124 Wall Street, Miami, USA, 60098`, Salesperson: `Nancy Jefferson`, OrderID: 1931, OrderDate: `3/14/2022`, ProductID: 189, ProductName: `IPad`, UnitPrice: 16150.61, Quantity: 3, ExtendedPrice: 48451.83, Freight: 980.61, Discontinued: false, Region: `South East`, Address: `124 Wall Street`, City: `Miami`, Country: `USA`, PostalCode: 60098 }),
                new InvoicesDataItem({ ShipName: `Black Home`, ShipAddress: `162 Main Street`, ShipCity: `Miami`, ShipPostalCode: 80193, ShipCountry: `USA`, ShipRegion: `West`, ShipperName: `United Package`, CustomerID: 1001, CustomerName: `Anna Black`, CustomerFirstName: `Anna`, CustomerLastName: `Black`, CustomerAddress: `162 Main Street, Miami, USA, 80193`, Salesperson: `Anna Smith`, OrderID: 1163, OrderDate: `5/22/2022`, ProductID: 138, ProductName: `Mac Book Pro`, UnitPrice: 18520.59, Quantity: 4, ExtendedPrice: 74082.36, Freight: 850.59, Discontinued: false, Region: `West`, Address: `162 Main Street`, City: `Miami`, Country: `USA`, PostalCode: 80193 }),
                new InvoicesDataItem({ ShipName: `Watson Townhouse`, ShipAddress: `164 Wall Street`, ShipCity: `Miami`, ShipPostalCode: 50111, ShipCountry: `USA`, ShipRegion: `West`, ShipperName: `United Package`, CustomerID: 1002, CustomerName: `Max Watson`, CustomerFirstName: `Max`, CustomerLastName: `Watson`, CustomerAddress: `164 Wall Street, Miami, USA, 50111`, Salesperson: `Martin Watson`, OrderID: 1230, OrderDate: `2/9/2022`, ProductID: 118, ProductName: `Mac Book Air`, UnitPrice: 25310.39, Quantity: 3, ExtendedPrice: 75931.17, Freight: 210.39, Discontinued: false, Region: `West`, Address: `164 Wall Street`, City: `Miami`, Country: `USA`, PostalCode: 50111 }),
                // ... 496 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

    .edited {
            font-style: italic;
            color: gray;
    }
```

## Usage

You should first bind to the grid's `rendered` event to create and manage a text area element:

```html
<igc-grid auto-generate="false" name="grid" id="grid" primary-key="OrderID">
    <igc-grid-toolbar>
        <igc-grid-toolbar-actions >
            <igc-grid-toolbar-exporter export-excel="true" export-csv="false"> </igc-grid-toolbar-exporter>
        </igc-grid-toolbar-actions>
    </igc-grid-toolbar>
    <igc-column field="OrderID" hidden="true"></igc-column>
    <igc-column field="Salesperson" header="Name" width="200px"></igc-column>
    <igc-column field="ShipName" header="Ship Name" width="200px"></igc-column>
    <igc-column field="Country" header="Country" width="200px"></igc-column>
    <igc-column field="ShipCity" header="Ship City" width="200px"></igc-column>
    <igc-column field="PostalCode" header="Postal Code" width="200px"> </igc-column>
</igc-grid>
```

```ts
public webGridPasteFromExcel(e: CustomEvent<any>) {
    const grid = e.target as IgcGridComponent;
    this.onKeyDown = this.onKeyDown.bind(this);
    grid.addEventListener("keydown", this.onKeyDown);
}
public onKeyDown(eventArgs: any): void {
    const ctrl = eventArgs.ctrlKey;
    const key = eventArgs.keyCode;
    // Ctrl-V || Shift-Ins || Cmd-V
    if ((ctrl || eventArgs.metaKey) && key === 86 || eventArgs.shiftKey && key === 45) {
        this.textArea.focus();
    }
}

private txtArea: any;

public get textArea() {
    if(!this.txtArea) {
            const div = document.createElement("div");
            const divStyle = div.style;
            divStyle.position = "fixed";
            document.body.appendChild(div);
            this.txtArea = document.createElement("textarea");
            const style = this.txtArea.style;
            style.opacity = "0";
            style.height = "0px";
            style.width = "0px";
            style.overflow = "hidden";
            div.appendChild(this.txtArea);

            this.txtArea.addEventListener("paste", (eventArgs: any) => { this.onPaste(eventArgs); });
        }
        return this.txtArea;
    }
```

The code creates a DOM textarea element which is used to receive the pasted data from the clipboard. When the data is pasted in the textarea the code parses it into an array.

```ts
public onPaste(eventArgs: any) {
    let data;
    const clData: any = "clipboardData";

    // get clipboard data - from window.cliboardData for IE or from the original event's arguments.
    if (window[clData]  as any) {
        (window.event as any).returnValue = false;
            data = (window[clData]  as any).getData("text");
        } else {
            data = eventArgs[clData].getData("text/plain");
        }

        // process the clipboard data
    const processedData = this.processData(data);
    if (this.pasteMode === "Paste data as new records") {
        this.addRecords(processedData);
    } else {
        this.updateRecords(processedData);
    }
}

public processData(data: any) {
    const pasteData = data.split("\n");
    for (let i = 0; i < pasteData.length; i++) {
        pasteData[i] = pasteData[i].split("\t");
        // Check if last row is a dummy row
        if (pasteData[pasteData.length - 1].length === 1 && pasteData[pasteData.length - 1][0] === "") {
            pasteData.pop();
        }
        // remove empty data
        if (pasteData.length === 1 &&
            pasteData[0].length === 1 &&
            (pasteData[0][0] === "" || pasteData[0][0] === "\r")) {
            pasteData.pop();
        }
    }
    return pasteData;
}
```

The pasted data can then be added as new records or used to update the existing records based on the user selection.
For reference see the addRecords and updateRecords methods.

```ts
public addRecords(processedData: any[]) {
    const grid = this.grid as any;
    const columns = grid.visibleColumns;
    const pk = grid.primaryKey;
    const addedData: any[] = [];
    for (const curentDataRow of processedData) {
        const rowData = {} as any;
        for (const col of columns) {
            const index = columns.indexOf(col);
            rowData[col.field] = curentDataRow[index];
        }
        // generate PK
        rowData[pk] = grid.data.length + 1;
        grid.addRow(rowData);
        addedData.push(rowData);
    }
    // scroll to last added row
    grid.navigateTo(grid.data.length - 1, 0, () => {
        this.clearStyles();
        for (const data of addedData) {
            const row = grid.getRowByKey(data[pk]);
            if (row) {
                const rowNative = this.getNative(row) as any;
                if (rowNative) {
                rowNative.style["font-style"] = "italic";
                rowNative.style.color = "gray";
                }
            }
        }
    });
}

public updateRecords(processedData: any[]) {
    const grid = this.grid as any;
    const cell = grid.selectedCells[0];
    const pk = grid.primaryKey;
    if (!cell) { return; }
    const rowIndex = cell.row.index;
    const columns = grid.visibleColumns;
    const cellIndex = grid.visibleColumns.indexOf(cell.column);
    let index = 0;
    const updatedRecsPK: any[] = [];
    for (const curentDataRow of processedData) {
        const rowData = {} as any;
        const dataRec = grid.data[rowIndex + index];
        const rowPkValue = dataRec ? dataRec[pk] : grid.data.length + 1;
        rowData[pk] = rowPkValue;
        for (let j = 0; j < columns.length; j++) {
            let currentCell;
            if (j >= cellIndex) {
                currentCell = curentDataRow.shift();
            }
            const colKey = columns[j].field;
            rowData[colKey] = currentCell || (dataRec ? dataRec[colKey] : null);
        }
        if (!dataRec) {
            // no rec to update, add instead
            rowData[pk] = rowPkValue;
            grid.addRow(rowData);
            continue;
        }
        grid.updateRow(rowData, rowPkValue);
        updatedRecsPK.push(rowPkValue);
        index++;
    }

    this.clearStyles();
    for (const pkVal of updatedRecsPK) {
        const row = grid.getRowByKey(pkVal);
        if (row) {
            const rowNative = this.getNative(row) as any;
            if (rowNative) {
                rowNative.style["font-style"] = "italic";
                rowNative.style.color = "gray";
            }
        }
    }
}
```

## API References

- [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html)

## Additional Resources

- [Excel Exporter](export-excel.md) - Use the Excel Exporter service to export data to Excel from Grid. It also provides the option to only export the selected data from the Grid. The exporting functionality is encapsulated in the ExcelExporterService class and the data is exported in MS Excel table format. This format allows features like filtering, sorting, etc. To do this you need to invoke the ExcelExporterService's export method and pass the Grid component as first argument.

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
