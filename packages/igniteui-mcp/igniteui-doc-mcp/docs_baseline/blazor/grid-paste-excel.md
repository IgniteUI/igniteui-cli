---
title: Blazor Excel Like {ComponentTitle} - Infragistics
_description: Configure the Blazor Grid to paste data from excel, by using rich and performance API with less code, and use the rich API do export selected grid data easily.
_keywords: export selected, igniteui for Blazor, {ComponentKeywords}, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid"]
_tocName: Paste from Excel
_premium: true
---

# Blazor Grid Paste from Excel

The Ignite UI for Blazor [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) can read Excel data that is copied to the clipboard. In this section we will show you how to do this with some custom code.

## Blazor Paste from Excel Example

This sample demonstrates how to implement pasting from Excel into the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) Material UI table.
To work with the sample open up any Excel spreadsheet, copy some rows, and paste it into the grid using the keyboard (<kbd>CTRL</kbd> + <kbd>V</kbd>, <kbd>SHIFT</kbd> + <kbd>INSERT</kbd>,<kbd>CMD</kbd> + <kbd>V</kbd>).

On the top there is a dropdown button with 2 options:

<ol>
<li>"Paste data as new rows" – in this mode any data copied from Excel will be appended to the grid as new rows</li>
<li>"Paste starting from active cell" – in this mode the data in the grid will be overwritten.</li>
</ol>

The new data after the paste is decorated in Italic.

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="options vertical">
        <IgbPropertyEditorPanel

        DescriptionType="WebGrid"
        IsHorizontal="true"
        IsWrappingEnabled="false"
        Name="propertyEditorPanel1"
        @ref="propertyEditorPanel1">
            <IgbPropertyEditorPropertyDescription
            Name="PasteModeEditor"
            @ref="pasteModeEditor"
            ValueType="PropertyEditorValueType.EnumValue"
            Label="Paste as:"
            DropDownNames="@(new string[] { "NewRecords", "FromActiveCell" })"
            DropDownValues="@(new string[] { "NewRecords", "FromActiveCell" })"
            ChangedScript="WebGridPasteModeChange">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="InvoicesData"
        RenderedScript="WebGridPasteFromExcel"
        RowClassesScript="WebGridEditedRowClassesHandler"
        Name="grid"
        @ref="grid"
        Id="grid"
        PrimaryKey="OrderID">
            <IgbGridToolbar
            >
                <IgbGridToolbarActions
                >
                    <IgbGridToolbarExporter
                    ExportExcel="true"
                    ExportCSV="false">
                    </IgbGridToolbarExporter>

                </IgbGridToolbarActions>

            </IgbGridToolbar>

            <IgbColumn
            Field="OrderID"
            Hidden="true">
            </IgbColumn>

            <IgbColumn
            Field="Salesperson"
            Header="Name"
            Width="200px">
            </IgbColumn>

            <IgbColumn
            Field="ShipName"
            Header="Ship Name"
            Width="200px">
            </IgbColumn>

            <IgbColumn
            Field="Country"
            Header="Country"
            Width="200px">
            </IgbColumn>

            <IgbColumn
            Field="ShipCity"
            Header="Ship City"
            Width="200px">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode"
            Header="Postal Code"
            Width="200px">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditorPanel1 = this.propertyEditorPanel1;
        var pasteModeEditor = this.pasteModeEditor;
        var grid = this.grid;

        this.BindElements = () => {
            propertyEditorPanel1.Target = this.grid;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditorPanel1;
    private IgbPropertyEditorPropertyDescription pasteModeEditor;
    private IgbGrid grid;

    private InvoicesData _invoicesData = null;
    public InvoicesData InvoicesData
    {
        get
        {
            if (_invoicesData == null)
            {
                _invoicesData = new InvoicesData();
            }
            return _invoicesData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class InvoicesDataItem
{
    public string ShipName { get; set; }
    public string ShipAddress { get; set; }
    public string ShipCity { get; set; }
    public double ShipPostalCode { get; set; }
    public string ShipCountry { get; set; }
    public string ShipRegion { get; set; }
    public string ShipperName { get; set; }
    public double CustomerID { get; set; }
    public string CustomerName { get; set; }
    public string CustomerFirstName { get; set; }
    public string CustomerLastName { get; set; }
    public string CustomerAddress { get; set; }
    public string Salesperson { get; set; }
    public double OrderID { get; set; }
    public string OrderDate { get; set; }
    public double ProductID { get; set; }
    public string ProductName { get; set; }
    public double UnitPrice { get; set; }
    public double Quantity { get; set; }
    public double ExtendedPrice { get; set; }
    public double Freight { get; set; }
    public bool Discontinued { get; set; }
    public string Region { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Country { get; set; }
    public double PostalCode { get; set; }
}

public class InvoicesData
    : List<InvoicesDataItem>
{
    public InvoicesData()
    {
        this.Add(new InvoicesDataItem() { ShipName = @"Jefferson Home", ShipAddress = @"124 Wall Street", ShipCity = @"Miami", ShipPostalCode = 60098, ShipCountry = @"USA", ShipRegion = @"South East", ShipperName = @"Federal Shipping", CustomerID = 1000, CustomerName = @"Martin Jefferson", CustomerFirstName = @"Martin", CustomerLastName = @"Jefferson", CustomerAddress = @"124 Wall Street, Miami, USA, 60098", Salesperson = @"Nancy Jefferson", OrderID = 1931, OrderDate = @"3/14/2022", ProductID = 189, ProductName = @"IPad", UnitPrice = 16150.61, Quantity = 3, ExtendedPrice = 48451.83, Freight = 980.61, Discontinued = false, Region = @"South East", Address = @"124 Wall Street", City = @"Miami", Country = @"USA", PostalCode = 60098 });
        this.Add(new InvoicesDataItem() { ShipName = @"Black Home", ShipAddress = @"162 Main Street", ShipCity = @"Miami", ShipPostalCode = 80193, ShipCountry = @"USA", ShipRegion = @"West", ShipperName = @"United Package", CustomerID = 1001, CustomerName = @"Anna Black", CustomerFirstName = @"Anna", CustomerLastName = @"Black", CustomerAddress = @"162 Main Street, Miami, USA, 80193", Salesperson = @"Anna Smith", OrderID = 1163, OrderDate = @"5/22/2022", ProductID = 138, ProductName = @"Mac Book Pro", UnitPrice = 18520.59, Quantity = 4, ExtendedPrice = 74082.36, Freight = 850.59, Discontinued = false, Region = @"West", Address = @"162 Main Street", City = @"Miami", Country = @"USA", PostalCode = 80193 });
        this.Add(new InvoicesDataItem() { ShipName = @"Watson Townhouse", ShipAddress = @"164 Wall Street", ShipCity = @"Miami", ShipPostalCode = 50111, ShipCountry = @"USA", ShipRegion = @"West", ShipperName = @"United Package", CustomerID = 1002, CustomerName = @"Max Watson", CustomerFirstName = @"Max", CustomerLastName = @"Watson", CustomerAddress = @"164 Wall Street, Miami, USA, 50111", Salesperson = @"Martin Watson", OrderID = 1230, OrderDate = @"2/9/2022", ProductID = 118, ProductName = @"Mac Book Air", UnitPrice = 25310.39, Quantity = 3, ExtendedPrice = 75931.17, Freight = 210.39, Discontinued = false, Region = @"West", Address = @"164 Wall Street", City = @"Miami", Country = @"USA", PostalCode = 50111 });
        // ... 496 more items
    }
}
```


<!-- WebComponents, Blazor, React -->

## Usage

You should first bind to the grid's `rendered` event to create and manage a text area element:

```razor
<IgbGrid  AutoGenerate="false" Data="InvoicesData" RenderedScript="WebGridPasteFromExcel" @ref="grid" Id="grid" PrimaryKey="OrderID">
    <IgbGridToolbar>
        <IgbGridToolbarActions>
            <IgbGridToolbarExporter ExportExcel="true" ExportCSV="false"> </IgbGridToolbarExporter>
        </IgbGridToolbarActions>
    </IgbGridToolbar>

    <IgbColumn Field="OrderID" Hidden="true"></IgbColumn>
    <IgbColumn Field="Salesperson" Header="Name" Width="200px"></IgbColumn>
    <IgbColumn Field="ShipName" Header="Ship Name" Width="200px"></IgbColumn>
    <IgbColumn Field="Country" Header="Country" Width="200px"></IgbColumn>
     <IgbColumn Field="ShipCity" Header="Ship City" Width="200px"></IgbColumn>
    <IgbColumn Field="PostalCode" Header="Postal Code" Width="200px"></IgbColumn>
</IgbGrid>

// In JavaScript
igRegisterScript("WebGridPasteFromExcel", (evtArgs) => {
    const grid = document.getElementById("grid");
    grid.addEventListener("keydown", onWebGridPasteFromExcelKeyDown);
}, false);

function onWebGridPasteFromExcelKeyDown(eventArgs) {
    const ctrl = eventArgs.ctrlKey;
    const key = eventArgs.keyCode;
    // Ctrl-V || Shift-Ins || Cmd-V
    if ((ctrl || eventArgs.metaKey) && key === 86 || eventArgs.shiftKey && key === 45) {
        textArea.focus();
    }
}

var txtArea;
var textArea = getTextArea();
function getTextArea() {
    if(!txtArea) {
        const div = document.createElement("div");
        const divStyle = div.style;
        divStyle.position = "fixed";
        document.body.appendChild(div);
        txtArea = document.createElement("textarea");
        const style = txtArea.style;
        style.opacity = "0";
        style.height = "0px";
        style.width = "0px";
        style.overflow = "hidden";
        div.appendChild(txtArea);

        txtArea.addEventListener("paste", (eventArgs) => { onPaste(eventArgs); });
    }
    return txtArea;
}

```

The code creates a DOM textarea element which is used to receive the pasted data from the clipboard. When the data is pasted in the textarea the code parses it into an array.

```razor
function onPaste(eventArgs) {
    let data;
    const clData = "clipboardData";

    // get clipboard data - from window.cliboardData for IE or from the original event's arguments.
    if (window[clData]) {
        window.event.returnValue = false;
        data = window[clData].getData("text");
    } else {
        data = eventArgs[clData].getData("text/plain");
    }

    // process the clipboard data
    const processedData = processData(data);
        if (pasteMode === "Paste data as new records") {
            addRecords(processedData);
        } else {
            updateRecords(processedData);
        }
}
function processData(data) {
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

```razor
function addRecords(processedData) {
    const grid = document.getElementById("grid");
    const columns = grid.visibleColumns;
    const pk = grid.primaryKey;
    const addedData = [];
    for (const curentDataRow of processedData) {
        const rowData = {};
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
        clearStyles();
        for (const data of addedData) {
            const row = grid.getRowByKey(data[pk]);
            if (row) {
                const rowNative = getNative(row);
                if (rowNative) {
                    rowNative.style["font-style"] = "italic";
                    rowNative.style.color = "gray";
                }
            }
    }
    });
}

function updateRecords(processedData) {
    const grid = document.getElementById("grid");
    const cell = grid.selectedCells[0];
    const pk = grid.primaryKey;
    if (!cell) { return; }
    const rowIndex = cell.row.index;
    const columns = grid.visibleColumns;
    const cellIndex = grid.visibleColumns.indexOf(cell.column);
    let index = 0;
    const updatedRecsPK = [];
    for (const curentDataRow of processedData) {
        const rowData = {};
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
```

<!-- end: WebComponents, Blazor, React -->

## API References

- [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)

## Additional Resources

- [Excel Exporter](export-excel.md) - Use the Excel Exporter service to export data to Excel from Grid. It also provides the option to only export the selected data from the Grid. The exporting functionality is encapsulated in the ExcelExporterService class and the data is exported in MS Excel table format. This format allows features like filtering, sorting, etc. To do this you need to invoke the ExcelExporterService's export method and pass the Grid component as first argument.

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
