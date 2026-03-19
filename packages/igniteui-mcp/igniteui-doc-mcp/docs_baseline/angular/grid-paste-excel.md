---
title: Angular Excel Like Grid - Paste Form Excel - Infragistics 
_description: Configure the Angular Grid to paste data from excel, by using rich and performant API with less code, and use the rich API do export selected grid data easily.
_keywords: export selected, igniteui for angular, infragistics
_license: commercial
_tocName: Paste from Excel
_premium: true
---

# Angular Grid Paste from Excel

The Ignite UI for Angular [`IgxGrid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html) can read Excel data that is copied to the clipboard. In this section we will show you how to do this with some custom code.

## Angular Paste from Excel Example

This sample demonstrates how to implement pasting from Excel into the [`igxGrid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html) Material UI table.
To work with the sample open up any Excel spreadsheet, copy some rows, and paste it into the grid using the keyboard (Ctrl + V, Shift + Insert, Command + V).

On the top there is a dropdown button with 2 options:
<ol>
<li>"Paste data as new rows" – in this mode any data copied from Excel will be appended to the grid as new rows</li>
<li>"Paste starting from active cell" – in this mode the data in the grid will be overwritten.</li>
</ol>

The new data after the paste is decorated in Italic.


```typescript
import { Component, ViewChild, inject } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxButtonDirective, IgxToggleActionDirective } from 'igniteui-angular/directives';
import { IgxDropDownComponent, IgxDropDownItemComponent, IgxDropDownItemNavigationDirective } from 'igniteui-angular/drop-down';
import { IgxColumnComponent, IgxExcelExporterOptions, IgxExcelExporterService } from 'igniteui-angular/grids/core';

import { EXCEL_DATA, LOCAL_DATA } from './data';

import { first } from 'rxjs/operators';

import { PasteHandler } from './paste-handler.directive';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-paste-sample',
    styleUrls: ['./grid-paste-sample.component.scss'],
    templateUrl: './grid-paste-sample.component.html',
    imports: [IgxButtonDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, IgxDropDownComponent, IgxDropDownItemComponent, IgxGridComponent, PasteHandler, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class GridPasteSampleComponent {
    private excelExportService = inject(IgxExcelExporterService);

    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public data;
    public comboData = [
        'Paste data as new records',
        'Paste starting from active cell'
    ];
    public pasteMode = this.comboData[0];

    constructor() {
        this.data = LOCAL_DATA;
    }

    public selectionChange(event: any) {
        this.pasteMode = event.newSelection.value;
    }

    public dataPasted(processedData) {
        if (this.pasteMode === 'Paste data as new records') {
            this.addRecords(processedData);
        } else {
            this.updateRecords(processedData);
        }
    }

    public addRecords(processedData: any[]) {
        const columns = this.grid1.visibleColumns;
        const pk = this.grid1.primaryKey;
        for (const curentDataRow of processedData) {
            const rowData = {};
            for (const col of columns) {
                rowData[col.field] = curentDataRow[col.visibleIndex];
            }
            // generate PK
            rowData[pk] =
                this.grid1.data.length +
                this.grid1.transactions.getAggregatedChanges(false).length +
                1;
            this.grid1.addRow(rowData);
        }
        // scroll to last added row
        this.grid1.verticalScrollContainer.dataChanged
            .pipe(first())
            .subscribe(() => {
                this.grid1.verticalScrollContainer.scrollTo(
                    this.grid1.dataView.length - 1
                );
            });
    }

    public updateRecords(processedData: any[]) {
        const cell = this.grid1.selectedCells[0];
        const pk = this.grid1.primaryKey;
        if (!cell) {
            return;
        }
        const rowIndex = cell.row.index;
        // const rowPkValue = cell.row.key;
        const cellIndex = cell.column.visibleIndex;
        const columns = this.grid1.visibleColumns;
        let index = 0;
        const updatedRecsPK = [];
        for (const curentDataRow of processedData) {
            const rowData = {};
            const dataRec = this.grid1.data[rowIndex + index];
            const rowPkValue = dataRec
                ? dataRec[pk]
                : this.grid1.data.length + 1;
            rowData[pk] = rowPkValue;
            for (let j = 0; j < columns.length; j++) {
                let currentCell;
                if (j >= cellIndex) {
                    currentCell = curentDataRow.shift();
                }
                const colKey = columns[j].field;
                rowData[colKey] =
                    currentCell || (!!dataRec ? dataRec[colKey] : null);
            }
            if (!dataRec) {
                // no rec to update, add instead
                rowData[pk] = rowPkValue;
                this.grid1.addRow(rowData);
                continue;
            }
            this.grid1.updateRow(rowData, rowPkValue);
            this.grid1.cdr.detectChanges();
            updatedRecsPK.push(rowPkValue);
            index++;
        }
    }

    public downloadExcel(eventArgs) {
        this.excelExportService.exportData(
            EXCEL_DATA,
            new IgxExcelExporterOptions('sample-data')
        );
    }

    public undo() {
        this.grid1.transactions.undo();
    }

    public redo() {
        this.grid1.transactions.redo();
        if (this.pasteMode === 'Paste starting from active cell') {
            return;
        }
        this.grid1.verticalScrollContainer.dataChanged
            .pipe(first())
            .subscribe(() => {
                this.grid1.verticalScrollContainer.scrollTo(
                    this.grid1.dataView.length - 1
                );
            });
    }

    public commit() {
        this.grid1.transactions.commit(this.data);
    }
    public get undoEnabled(): boolean {
        return this.grid1.transactions.canUndo;
    }

    public get redoEnabled(): boolean {
        return this.grid1.transactions.canRedo;
    }

    public get hasTransactions(): boolean {
        return this.grid1.transactions.getAggregatedChanges(false).length > 0;
    }
}
```
```html
<div class="grid__wrapper">
  <div class="grid__menu">
    <button igxButton="contained" [igxToggleAction]="dropdown" [igxDropDownItemNavigation]="dropdown">Paste Options</button>
    <igx-drop-down #dropdown (selectionChanging)="selectionChange($event)" >
      @for (item of comboData; track item) {
        <igx-drop-down-item [value]="item" >
          {{ item }}
        </igx-drop-down-item>
      }
    </igx-drop-down>
    <button id="download_excel" igxButton="contained" (click)="downloadExcel($event)">Download Sample Excel File</button>
  </div>
  <igx-grid [igxPreventDocumentScroll]="true" [batchEditing]="true" #grid1 [data]="data" [width]="'100%'" [height]="'450px'" [autoGenerate]="false" paste-handler (dataProcessed)="dataPasted($event)" [primaryKey]="'ID'">
    <igx-column [field]="'Name'"></igx-column>
    <igx-column [field]="'Title'"></igx-column>
    <igx-column [field]="'Phone'"></igx-column>
    <igx-column [field]="'Country'"></igx-column>
  </igx-grid>
  <div class="buttons-row">
    <div class="buttons-wrapper">
      <button igxButton [disabled]="!undoEnabled" (click)="undo()">Undo</button>
      <button igxButton [disabled]="!redoEnabled" (click)="redo()">Redo</button>
      <button igxButton [disabled]="!hasTransactions" (click)="commit()">Commit</button>
    </div>
  </div>
</div>
```
```scss
.grid__wrapper {
    margin: 0 auto;
    padding: 16px;
    padding-left: 1%;
    padding-right: 1%;
}

.grid__menu {
    padding-bottom: 20px;
}

#download_excel {
    float: right;
}

.igx-grid__th .title {
    width: 100%;
    cursor: auto;
}

.igx-grid__td-text {
    padding-right: 3px;
}
```

<div class="divider"></div>

## Usage

You should add the `paste-handler` directive (you can find its code in the next section) to the [`igxGrid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html) and handle its `onDataProcessed` event. The `onDataProcessed` event has one parameter that gives you access to the Excel data in the form of an array. For reference see the `addRecords` and `updateRecords` methods.

```html
<igx-grid #grid1 [data]="data" [width]="'100%'" [height]="'505px'" [autoGenerate]="false" paste-handler (onDataProcessed)="dataPasted($event)" [primaryKey]="'ID'">
    <igx-column [field]="'Name'"></igx-column>
    <igx-column [field]="'Title'"></igx-column>
    <igx-column [field]="'Phone'"></igx-column>
    <igx-column [field]="'Country'"></igx-column>
</igx-grid>
```

```typescript
    public dataPasted(processedData) {
        if (this.pasteMode === "Paste data as new records") {
            this.addRecords(processedData);
        } else {
            this.updateRecords(processedData);
        }
    }

    public addRecords(processedData: any[]) {
        const columns = this.grid1.visibleColumns;
        const pk = this.grid1.primaryKey;
        const addedData = [];
        for (const curentDataRow of processedData) {
            const rowData = {};
            for (const col of columns) {
                rowData[col.field] = curentDataRow[col.visibleIndex];
            }
            // generate PK
            rowData[pk] = this.grid1.data.length + 1;
            this.grid1.addRow(rowData);
            addedData.push(rowData);
            this.grid1.cdr.detectChanges();
        }
        // scroll to last added row
        this.grid1.verticalScrollContainer.scrollTo(this.grid1.data.length);

        this.grid1.verticalScrollContainer.chunkLoad.pipe(take(1)).subscribe(() => {
            this.clearStyles();
            for (const data of addedData) {
                const row = this.grid1.getRowByKey(data[pk]);
                if (row) {
                    row.nativeElement.style["font-style"] = "italic";
                    row.nativeElement.style.color = "gray";
                }
            }
        });
    }
    public updateRecords(processedData: any[]) {
        const cell = this.grid1.selectedCells[0];
        const pk = this.grid1.primaryKey;
        if (!cell) { return; }
        const rowIndex = cell.row.index;
        // const rowPkValue = cell.row.data[pk];
        const cellIndex = cell.column.visibleIndex;
        const columns = this.grid1.visibleColumns;
        let index = 0;
        const updatedRecsPK = [];
        for (const curentDataRow of processedData) {
            const rowData = {};
            const dataRec = this.grid1.data[rowIndex + index];
            const rowPkValue = dataRec ? dataRec[pk] : this.grid1.data.length + 1;
            rowData[pk] = rowPkValue;
            for (let j = 0; j < columns.length; j++) {
                let currentCell;
                if (j >= cellIndex) {
                    currentCell = curentDataRow.shift();
                }
                const colKey = columns[j].field;
                rowData[colKey] = currentCell || (!!dataRec ? dataRec[colKey] : null);
            }
            if (!dataRec) {
                // no rec to update, add instead
                rowData[pk] = rowPkValue;
                this.grid1.addRow(rowData);
                continue;
            }
            this.grid1.updateRow(rowData, rowPkValue);
            this.grid1.cdr.detectChanges();
            updatedRecsPK.push(rowPkValue);
            index++;
        }

        this.clearStyles();
        for (const pkVal of updatedRecsPK) {
            const row = this.grid1.getRowByKey(pkVal);
            if (row) {
            row.nativeElement.style["font-style"] = "italic";
            row.nativeElement.style.color = "gray";
            }
        }
    }

    protected clearStyles() {
        for (const row of this.grid1.rowList.toArray()) {
            row.nativeElement.style["font-style"] = "";
            row.nativeElement.style.color = "";
        }
    }
```

<div class="divider"></div>

## Paste Handler Directive

This is the `paste-handler` implementation. The code creates a DOM `textarea` element which is used to receive the pasted data from the clipboard. When the data is pasted in the `textarea` the directive parses it into an array and then emits a custom event `onDataProcessed` passing the parsed data.

```typescript
import { Directive, EventEmitter, HostListener, Output} from "@angular/core";

@Directive({ selector: "[paste-handler]" })
export class PasteHandler {
    public textArea;

    @Output()
    public onDataProcessed = new EventEmitter<any>();

    public ngOnInit(): void {
        const div = document.createElement("div");
        const divStyle = div.style;
        divStyle.position = "fixed";
        document.body.appendChild(div);
        this.textArea = document.createElement("textarea");
        const style = this.textArea.style;
        style.opacity = "0";
        style.height = "0px";
        style.width = "0px";
        style.overflow = "hidden";
        div.appendChild(this.textArea);

        this.textArea.addEventListener("paste", (eventArgs) => { this.onPaste(eventArgs); });
    }

    @HostListener("focusin", ["$event"])
    public focusIn(eventArgs) {
    }

    @HostListener("keydown", ["$event"])
    public ControlV(eventArgs) {
        const ctrl = eventArgs.ctrlKey;
        const key = eventArgs.keyCode;
        // Ctrl-V || Shift-Ins || Cmd-V
        if ((ctrl || eventArgs.metaKey) && key === 86 || eventArgs.shiftKey && key === 45) {
            this.textArea.focus();
        }
    }

    public onPaste(eventArgs) {
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
    const processedData = this.processData(data);

    this.onDataProcessed.emit(processedData);
    }

    public processData(data) {
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
}

```

## API References

- [IgxGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)

## Additional Resources

<div class="divider--half"></div>

- [Excel Exporter](export-excel.md) - Use the Excel Exporter service to export data to Excel from IgxGrid. It also provides the option to only export the selected data from the IgxGrid. The exporting functionality is encapsulated in the IgxExcelExporterService class and the data is exported in MS Excel table format. This format allows features like filtering, sorting, etc. To do this you need to invoke the IgxExcelExporterService's export method and pass the IgxGrid component as first argument.

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
