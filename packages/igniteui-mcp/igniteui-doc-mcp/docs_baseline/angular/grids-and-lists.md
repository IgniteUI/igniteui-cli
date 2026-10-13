---
title: Angular Grids & Tables | Fastest Angular UI Grid | Infragistics
description: Looking for fast angular grids and tables? Ignite UI for Angular provides a complete library of Angular-native, Material-based UI data grids and tables. Find more.
keywords: angular data grid, infragistics, infragistics.com
license: commercial
llms:
  description: "Ignite UI for Angular provides a complete library of Angular-native, Material-based UI components, including the world’s fastest virtualized Angular data grid."
_tocName: Grids & Lists
_premium: true
---
[//]: # (<div>)

[//]: # (    <img class="b-lazy b-loaded" style="margin: 0 auto; max-width: 175px;" title="Ignite UI logo" src="https://static.infragistics.com/marketing/Website/products/ignite-ui-landing/ignite-ui-logo.svg" alt="Ignite UI Logo for developer web applications"/>)

[//]: # (</div>)

# The Fastest Angular Data Grid
Ignite UI for Angular provides a complete library of Angular-native, Material-based UI components, including the world’s fastest virtualized Angular data grid.

## Angular Grid Example
In this angular grid example, you can see how users can customize their _data view_ by leveraging the various features built into the grid, like data search and filtering, columns sorting, resizing, pinning and hiding, row selection, export to excel and csv, horizontal and vertical scrolling. We have provided examples for cell templating that includes components like linear progress bar indicator and sparkline.

```typescript
/* eslint-disable no-underscore-dangle */
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CloseScrollStrategy, ConnectedPositioningStrategy, HorizontalAlignment, IgxDateSummaryOperand, IgxNumberSummaryOperand, IgxSummaryResult, OverlaySettings, PositionSettings, VerticalAlignment } from 'igniteui-angular/core';
import { CellType, GridSelectionMode, IColumnExportingEventArgs, IgxCellTemplateDirective, IgxColumnComponent, IgxCsvExporterService, IgxExcelExporterService, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarExporterComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarTitleComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxIconButtonDirective, IgxToggleDirective } from 'igniteui-angular/directives';
import { IgxInputDirective, IgxInputGroupComponent, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxLinearProgressBarComponent } from 'igniteui-angular/progressbar';
import { data, Employee } from './data';
import { NgClass } from '@angular/common';
import { IgxPreventDocumentScrollDirective } from '../../../../../src/app/directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';

function formatDate(val: Date) {
    return new Intl.DateTimeFormat('en-US').format(val);
}

class DealsSummary extends IgxNumberSummaryOperand {
    constructor() {
        super();
    }

    public operate(summaries?: any[]): IgxSummaryResult[] {
        const result = super.operate(summaries).filter((obj) => {
            if (obj.key === 'average' || obj.key === 'sum') {
                const summaryResult = obj.summaryResult;
                // apply formatting to float numbers
                if (Number(summaryResult) === summaryResult) {
                    obj.summaryResult = summaryResult.toLocaleString('en-us', { maximumFractionDigits: 2 });
                }
                return obj;
            }
        });
        return result;
    }
}

class EarliestSummary extends IgxDateSummaryOperand {
    constructor() {
        super();
    }

    public operate(summaries?: any[]): IgxSummaryResult[] {
        const result = super.operate(summaries).filter((obj) => {
            if (obj.key === 'earliest') {
                obj.summaryResult = formatDate(obj.summaryResult);
                return obj;
            }
        });
        return result;
    }
}

class SoonSummary extends IgxDateSummaryOperand {
    constructor() {
        super();
    }

    public operate(summaries?: any[]): IgxSummaryResult[] {
        const result = super.operate(summaries).filter((obj) => {
            if (obj.key === 'latest') {
                obj.label = 'Soon';
                obj.summaryResult = formatDate(obj.summaryResult);
                return obj;
            }
        });
        return result;
    }
}

@Component({
    selector: 'app-grid',
    styleUrls: ['./grid-crm.component.scss'],
    templateUrl: './grid-crm.component.html',
    imports: [NgClass, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarExporterComponent, IgxGridToolbarTitleComponent, IgxInputGroupComponent, IgxPrefixDirective, IgxIconComponent, FormsModule, IgxInputDirective, IgxSuffixDirective, IgxIconButtonDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxAvatarComponent, IgxLinearProgressBarComponent]
})
export class GridCRMComponent implements OnInit, AfterViewInit {
    private csvExporter = inject(IgxCsvExporterService);
    private excelExporter = inject(IgxExcelExporterService);
    private activatedRoute = inject(ActivatedRoute);


    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1!: IgxGridComponent;

    @ViewChild('toggleRefHiding') public toggleRefHiding!: IgxToggleDirective;
    @ViewChild('toggleRefPinning') public toggleRefPinning!: IgxToggleDirective;

    @ViewChild('hidingButton') public hidingButton!: ElementRef;
    @ViewChild('pinningButton') public pinningButton!: ElementRef;

    public localData: Employee[] = [];
    public dealsSummary = DealsSummary;
    public earliestSummary = EarliestSummary;
    public soonSummary = SoonSummary;

    public cols!: QueryList<IgxColumnComponent>;
    public hiddenColsLength: number;
    public pinnedColsLength: number;

    public dark = false;

    public searchText = '';
    public caseSensitive = false;
    public selectionMode: GridSelectionMode = 'multiple';

    public _positionSettings: PositionSettings = {
        horizontalDirection: HorizontalAlignment.Left,
        horizontalStartPoint: HorizontalAlignment.Right,
        verticalStartPoint: VerticalAlignment.Bottom
    };

    public _overlaySettings: OverlaySettings = {
        closeOnOutsideClick: true,
        modal: false,
        // eslint-disable-next-line no-underscore-dangle
        positionStrategy: new ConnectedPositioningStrategy(this._positionSettings),
        scrollStrategy: new CloseScrollStrategy()
    };

    constructor() {

        const exporterCb = (args: IColumnExportingEventArgs) => {
            if (args.field === 'Deals') { args.cancel = true; }
        };

        this.excelExporter.columnExporting.subscribe(exporterCb);
        this.csvExporter.columnExporting.subscribe(exporterCb);
    }

    public ngOnInit() {
        const employees: Employee[] = data;
        for (const employee of employees) {
            this.getDeals(employee);
        }
        this.localData = employees;
        this.activatedRoute.queryParams.subscribe(params => {
            this.dark = !!params.dark;
        });
    }

    public toggleHiding() {
        this._overlaySettings.target = this.hidingButton.nativeElement;
        this.toggleRefHiding.toggle(this._overlaySettings);
    }

    public getPhoto(cell: CellType) {
        return cell.row.data.avatar;
    }

    public togglePinning() {
        this._overlaySettings.target = this.pinningButton.nativeElement;
        this.toggleRefPinning.toggle(this._overlaySettings);
    }

    public ngAfterViewInit() {
        this.cols = this.grid1.columnList;
        this.hiddenColsLength = this.cols.filter((col) => col.hidden).length;
        this.pinnedColsLength = this.cols.filter((col) => col.pinned).length;
    }

    public toggleVisibility(col: IgxColumnComponent) {
        if (col.hidden) {
            this.hiddenColsLength--;
        } else {
            this.hiddenColsLength++;
        }
        col.hidden = !col.hidden;
    }

    public togglePin(col: IgxColumnComponent, evt: any) {
        if (col.pinned) {
            this.grid1.unpinColumn(col.field);
            this.pinnedColsLength--;
        } else {
            if (this.grid1.pinColumn(col.field)) {
                this.pinnedColsLength++;
            } else {
                // if pinning fails uncheck the checkbox
                evt.checkbox.checked = false;
            }
        }
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

    public searchKeyDown(ev: KeyboardEvent) {
        if (ev.key === 'Enter' || ev.key === 'ArrowDown' || ev.key === 'ArrowRight') {
            ev.preventDefault();
            this.grid1.findNext(this.searchText, this.caseSensitive);
        } else if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') {
            ev.preventDefault();
            this.grid1.findPrev(this.searchText, this.caseSensitive);
        }
    }

    public updateSearch() {
        this.caseSensitive = !this.caseSensitive;
        this.grid1.findNext(this.searchText, this.caseSensitive);
    }

    public clearSearch() {
        this.searchText = '';
        this.grid1.clearSearch();
    }

    public formatValue(val: any): string {
        return val.toLocaleString('en-us', { maximumFractionDigits: 2 });
    }

    public getDeals(employee: Employee): any {
        employee.deals = this.getDealsData();
    }

    public getDealsData(months?: number): any[] {
        if (months === undefined) {
            months = 12;
        }
        const deals: any[] = [];
        for (let m = 0; m < months; m++) {
            const value = this.getRandomNumber(-20, 30);
            // eslint-disable-next-line @typescript-eslint/naming-convention
            deals.push({ Deals: value, Month: m });
        }
        return deals;
    }

    public getRandomNumber(min: number, max: number): number {
        return Math.round(min + Math.random() * (max - min));
    }
}
```
```html
<div [ngClass]="{'grid__wrapper': true, 'dark_grid': dark === true }">
  <igx-grid #grid1 [igxPreventDocumentScroll]="true" id="grid1" [data]="localData" [height]="'100%'" [moving]="true" [width]="'100%'" [rowSelection]="selectionMode" rowHeight="50" [allowFiltering]="true">
    <igx-grid-toolbar>
      <igx-grid-toolbar-actions>
        <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
        <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
        <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
      </igx-grid-toolbar-actions>
      <igx-grid-toolbar-title>
            <igx-input-group type="search">
              <igx-prefix>
                @if (searchText.length === 0) {
                  <igx-icon>search</igx-icon>
                }
                @if (searchText.length > 0) {
                  <igx-icon (click)="clearSearch()">clear</igx-icon>
                }
              </igx-prefix>

              <input #search1 name="search" id="search1" igxInput placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="grid1.findNext(searchText, caseSensitive)" (keydown)="searchKeyDown($event)" />

              @if (searchText.length > 0) {
                <igx-suffix class="search-extras">
                  @if (grid1.lastSearchInfo) {
                    <div class="search-extras__inner-container">
                      @if (grid1.lastSearchInfo.matchInfoCache.length > 0) {
                        <span class="search-results">
                          {{ grid1.lastSearchInfo.activeMatchIndex + 1 }} of {{
                          grid1.lastSearchInfo.matchInfoCache.length }} results
                        </span>
                      }
                      @if (grid1.lastSearchInfo.matchInfoCache.length === 0) {
                        <span class="search-results">
                          No results
                        </span>
                      }
                    </div>
                  }

                  <div class="search-extras__inner-container">
                    <button igxIconButton="flat" (click)="updateSearch()" [class]="caseSensitive? 'case-sensitive--active' : 'case-sensitive--inactive'">
                      <igx-icon family="material">text_fields</igx-icon>
                    </button>

                  </div>

                  <div class="search-extras__inner-container">
                    <button igxIconButton="flat" (click)="grid1.findPrev(searchText, caseSensitive)">
                      <igx-icon family="material">navigate_before</igx-icon>
                    </button>

                    <button igxIconButton="flat" (click)="grid1.findNext(searchText, caseSensitive)">
                      <igx-icon family="material">navigate_next</igx-icon>
                    </button>
                  </div>
                </igx-suffix>
              }
            </igx-input-group>
      </igx-grid-toolbar-title>
    </igx-grid-toolbar>

    <igx-column field="id" header="Customer Number" width="172" [pinned]="true" [hasSummary]="false" [resizable]="true" [hidden]="true" >
    </igx-column>

    <igx-column field="avatar" header="Photo" width="88" [pinned]="true" [resizable]="true" [searchable]="false" [filterable]="false">
      <ng-template igxCell let-cell="cell">
        <div class="cell__inner avatar-cell">
          <igx-avatar [src]="getPhoto(cell)" shape="circle" size="small"></igx-avatar>
        </div>
      </ng-template>
    </igx-column>

    <igx-column field="name" header="Name" [sortable]="true" width="149" [pinned]="true" [resizable]="true" [hasSummary]="false" >
    </igx-column>

    <igx-column field="deals_total" header="Total Deals" [sortable]="true" width="130" dataType="number" [hasSummary]="false" [summaries]="dealsSummary" [resizable]="true" [filterable]="false">
    </igx-column>

    <igx-column field="deals_won" header="Won Deals" [sortable]="true" width="130" dataType="number" [hasSummary]="false" [summaries]="dealsSummary" [resizable]="true" [filterable]="false">
    </igx-column>

    <igx-column field="ratio" header="Ratio" width="150" [resizable]="true" [filterable]="false">
      <ng-template igxCell let-val>
        <div style="width: 100%">
          <igx-linear-bar [textVisibility]="false" class="cell__inner_2" [value]="val" [animate]="false">
          </igx-linear-bar>
        </div>
      </ng-template>
    </igx-column>

    <igx-column field="deals_lost" header="Lost Deals" [sortable]="true" width="130" dataType="number" [hasSummary]="false" [summaries]="dealsSummary" [resizable]="true" [filterable]="false">
    </igx-column>

    <igx-column field="deals_pending" header="Pending Deals" [sortable]="true" width="130" dataType="number" [hasSummary]="false" [summaries]="dealsSummary" [resizable]="true" [filterable]="false">
    </igx-column>

    <igx-column field="position" header="Position" width="200" [resizable]="true">
    </igx-column>

    <igx-column field="company" header="Company" [sortable]="true" width="130" [hasSummary]="false" [resizable]="true">
    </igx-column>

    <igx-column field="email" header="Email" width="240" [resizable]="true"  [filterable]="false">
    </igx-column>

    <igx-column field="work_phone" header="Work Phone" width="160" [resizable]="true"  [filterable]="false">
    </igx-column>

    <igx-column field="mobile_phone" header="Mobile Phone" width="160" [resizable]="true"  [filterable]="false">
    </igx-column>

    <igx-column field="fax" header="Fax" width="160" [resizable]="true"  [filterable]="false">
    </igx-column>

    <igx-column field="tags" header="Tags" width="160" [resizable]="true" >
    </igx-column>

    <igx-column field="street" header="Street" width="160" [resizable]="true"  [filterable]="false">
    </igx-column>

    <igx-column field="city" header="City" width="160" [resizable]="true" >
    </igx-column>

    <igx-column field="post_code" header="Post Code" width="100" [resizable]="true"  [filterable]="false">
    </igx-column>

    <igx-column field="state" header="State" width="105" [resizable]="true" >
    </igx-column>

    <igx-column field="country" header="Country" [sortable]="true" width="160" [resizable]="true" >
    </igx-column>

    <igx-column field="created_on" header="Created On" dataType="date" [formatter]="formatDate" [sortable]="true" width="150" [resizable]="true"  [filterable]="false">
    </igx-column>

    <igx-column field="referred_by" header="Referred By" width="160" [resizable]="true" >
    </igx-column>

    <igx-column field="birthday" header="Birthday" width="160" dataType="date" [formatter]="formatDate" [hasSummary]="false" [summaries]="soonSummary" [resizable]="true"  [filterable]="false">
    </igx-column>

    <igx-column field="last_activity" header="Last Activity" width="160" dataType="date" [formatter]="formatDate" [hasSummary]="false" [summaries]="earliestSummary" [resizable]="true"  [filterable]="false">
    </igx-column>

    <igx-column field="next_activity" header="Next Activity" width="160" dataType="date" [formatter]="formatDate" [hasSummary]="false" [summaries]="earliestSummary" [resizable]="true"  [filterable]="false">
    </igx-column>

    <igx-column field="estimated_sales" header="Possible Sales ($)" [sortable]="true" width="150" dataType="number" [hasSummary]="false" [summaries]="dealsSummary" [resizable]="true"  [filterable]="false">
      <ng-template igxCell let-cell="cell" let-val>
        {{ formatValue(val) }}
      </ng-template>
    </igx-column>

    <igx-column field="actual_sales" header="Actual Sales ($)" [sortable]="true" width="150" dataType="number" [hasSummary]="false" [summaries]="dealsSummary" [resizable]="true"  [filterable]="false">
      <ng-template igxCell let-val>
        {{ formatValue(val) }}
      </ng-template>
    </igx-column>
  </igx-grid>
</div>
```
```scss
@use '../../variables' as *;

:host {
  $crm-grid-theme: grid-theme(
      $background: #1f2836,
      $foreground: #f5f6e6,
      $header-background: #2f3744,
      $header-text-color: #f5f6e6,
      $accent-color: #f5f6e6,
  );

  $crm-toolbar-theme: grid-toolbar-theme(
      $background: #1f2836,
      $accent-color: #f5f6e6
  );


  igx-grid {
    @include tokens($crm-grid-theme);
  }

  igx-grid-toolbar {
    @include tokens($crm-toolbar-theme);

    igx-input-group[type="search"] {
      --ig-size: var(--ig-size-small);
      --search-resting-elevation: none;
      --search-hover-elevation: none;
      --search-disabled-elevation: none;
    }
  }

  .search-extras {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &__inner-container {
      display: flex;
    }
  }

  .search-results {
    color: rgb(from var(--ig-grid-foreground) r g b / 0.5);
    font-size: .875rem;
  }

  .case-sensitive--inactive {
    color: rgb(from var(--ig-grid-foreground) r g b / 0.7);
  }
}
```

## What is an Angular Data Grid?

An Angular data grid is a component used to display tabular data in a series of rows and columns. Data grids, also known as tables, are well known in the desktop world with popular software such as Microsoft Excel. While grids have been available on desktop platforms for a long time, they have recently become part of web app UIs, such as Angular UI. Modern grids can be complex and may include a range of functionalities, including data binding, editing, Excel-like filtering, custom sorting, grouping, row reordering, row and column freezing, row aggregation, and exporting to Excel, CSV, and pdf formats.

## Why Use an Angular Data Grid?

Angular data grids are essential in use cases where lots of data must be stored and sorted through quickly. This can include industries such as financial or insurance that use high-volume, high-velocity data frequently.  Often the success of these companies is dependent on the functionality and performance of these data grids. When stock decisions need to be made in microseconds, for example, it’s imperative that the data grid performs with no lag time or flicker.

## Key Features

The Ignite UI for Angular Data Grid is not just for high-volume and real-time data. It is a feature-rich Angular grid that gives you capabilities that you would never be able to accomplish with so little code on your own.
This example demonstrates a few of the data grid’s key features:

<div id="features-list">

- [**Virtualized Rows and Columns**](/grid/virtualization) so you can load millions of records

- [**Inline Editing**](/grid/editing) with [**Cell**](/grid/cell-editing), [**Row**](/grid/row-editing), and [**Batch**](/grid/batch-editing) Update options

- [**Excel-style Filtering**](/grid/excel-style-filtering) and full [**Excel Keyboard Navigation**](/grid/keyboard-navigation) capability

- Interactive [**Outlook-style Grouping**](/grid/groupby)

- [**Column Summaries**](/grid/summaries) based on any data in a grid cell or column

- [**Export to Excel**](/grid/export-excel), including [**Data Visualization**](/excel-library-working-with-charts)

- [**Size**](/grid/display-density) to adjust the height and sizing of the rows

- Column templates like [**Sparkline Column**](/charts/types/sparkline-chart) and Image Column

</div>

```typescript
/* eslint-disable max-len */
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, DOCUMENT, inject } from '@angular/core';
import { CellType, GridSelectionMode, IColumnExportingEventArgs, IGridKeydownEventArgs, IRowSelectionEventArgs, IgxCellEditorTemplateDirective, IgxCellTemplateDirective, IgxColumnComponent, IgxExcelTextDirective, IgxExporterEvent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarExporterComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxPdfExporterOptions, IgxPdfExporterService, IgxPdfTextDirective } from 'igniteui-angular/grids/core';
import { DefaultSortingStrategy, IgxOverlayOutletDirective, OverlaySettings, SortingDirection } from 'igniteui-angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxFocusDirective, IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { BehaviorSubject } from 'rxjs';
import { Contract, REGIONS, Stock } from '../data/financialData';
import { SignalRService } from '../services/signal-r.service';
import { IgxPreventDocumentScrollDirective } from '../../../../../src/app/directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-finjs-grid',
    templateUrl: './grid-finjs.component.html',
    styleUrls: ['./grid-finjs.component.scss'],
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarExporterComponent, IgxExcelTextDirective, IgxPdfTextDirective, IgxColumnComponent, IgxCellEditorTemplateDirective, IgxSelectComponent, FormsModule, IgxFocusDirective, IgxSelectItemComponent, IgxCellTemplateDirective, IgxIconComponent, IgxIconButtonDirective, IgxOverlayOutletDirective, AsyncPipe, CurrencyPipe]
})
export class GridFinJSComponent implements OnInit {
    private el = inject(ElementRef);
    private document = inject<Document>(DOCUMENT);
    private pdfExportService = inject(IgxPdfExporterService);
    private cdr = inject(ChangeDetectorRef);
    dataService = inject(SignalRService);

    @ViewChild('grid1', { static: true }) public grid: IgxGridComponent;
    @ViewChild(IgxOverlayOutletDirective, { static: true }) public outlet: IgxOverlayOutletDirective;
    @Output() public selectedDataChanged = new EventEmitter<Stock[]>();
    @Output() public keyDown = new EventEmitter();
    @Output() public chartColumnKeyDown = new EventEmitter<Stock>();

    @Input() public allowChart = false;

    public contracts = Contract;
    public regions = REGIONS;
    public selectionMode: GridSelectionMode = 'multiple';
    public volume = 1000;
    public frequency = 500;
    public data$: BehaviorSubject<Stock[]>;
    public columnFormat = { digitsInfo: '1.3-3' };
    public columnFormatChangeP = { digitsInfo: '3.3-3' };
    public showToolbar = true;
    public isLoading = true;
    public overlaySettings: OverlaySettings = {
        modal: false
    };

    public ngOnInit(): void {
        this.dataService.getData(this.volume);
        this.overlaySettings.outlet = this.outlet;
        this.data$ = this.dataService.data;

        this.data$.subscribe((data) => {
            if (data.length !== 0) {
                this.isLoading = false;
                this.cdr.markForCheck();
            };
        });

        // Set initially grouped columns
        this.toggleGrouping();
    }

    public rowSelectionChanged(args: IRowSelectionEventArgs): void {
        this.grid.clearCellSelection();
        this.selectedDataChanged.emit(args.newSelection);
    }

    public toggleGrouping(): void {
        if (this.grid.groupingExpressions.length > 0) {
            this.grid.groupingExpressions = [];
        } else {
            this.grid.groupingExpressions = [
                {
                    dir: SortingDirection.Desc,
                    fieldName: 'category',
                    ignoreCase: false,
                    strategy: DefaultSortingStrategy.instance()
                },
                {
                    dir: SortingDirection.Desc,
                    fieldName: 'type',
                    ignoreCase: false,
                    strategy: DefaultSortingStrategy.instance()
                },
                {
                    dir: SortingDirection.Desc,
                    fieldName: 'contract',
                    ignoreCase: false,
                    strategy: DefaultSortingStrategy.instance()
                }
            ];
        }
    }

    public gridKeydown(evt: KeyboardEvent): void {
        if (this.grid.selectedRows.length > 0 &&
            evt.shiftKey === true && evt.ctrlKey === true && evt.key.toLowerCase() === 'd') {
            evt.preventDefault();
            this.keyDown.emit();
        }
    }

    public customKeydown(args: IGridKeydownEventArgs): void {
        const target: CellType = args.target as CellType;
        const evt: KeyboardEvent = args.event as KeyboardEvent;
        const type = args.targetType;

        if (type === 'dataCell' && target.column.field === 'Chart' && evt.key.toLowerCase() === 'enter') {
            this.grid.selectRows([target.row.key], true);
            this.chartColumnAction(target);
        }
    }

    public chartColumnAction(target: CellType): void {
        this.chartColumnKeyDown.emit(target.row.data);
    }

    public exportStarted(args: IgxExporterEvent) {
        (args.options as IgxPdfExporterOptions).pageSize = "A3";

        const includedFields = new Set([
            'id',
            'category',
            'type',
            'contract',
            'settlement',
            'country',
            'region',
            'lastupdated',
            'openprice',
            'price',
            'change',
            'buy',
            'sell'
        ]);

        this.pdfExportService.columnExporting.subscribe((exportArgs: IColumnExportingEventArgs) => {
            const field = exportArgs.field.toLowerCase();
            if (!includedFields.has(field)) {
                exportArgs.cancel = true;
            }
        });

    }

    get gridWrapper(): HTMLElement {
        return this.el.nativeElement.querySelector('.grid__wrapper') as HTMLElement;
    }

    get controlsWrapper(): HTMLElement {
        return this.document.body.querySelector('.controls-wrapper') as HTMLElement;
    }

    /** Grid CellStyles and CellClasses */
    private negative = (rowData: any): boolean => rowData['changeP'] < 0;
    private positive = (rowData: any): boolean => rowData['changeP'] > 0;
    private changeNegative = (rowData: any): boolean => rowData['changeP'] < 0 && rowData['changeP'] > -1;
    private changePositive = (rowData: any): boolean => rowData['changeP'] > 0 && rowData['changeP'] < 1;
    private strongPositive = (rowData: any): boolean => rowData['changeP'] >= 1;
    private strongNegative = (rowData: any): boolean => rowData['changeP'] <= -1;

    // eslint-disable-next-line @typescript-eslint/member-ordering
    public trends = {
        changeNeg: this.changeNegative,
        changePos: this.changePositive,
        negative: this.negative,
        positive: this.positive,
        strongNegative: this.strongNegative,
        strongPositive: this.strongPositive
    };

    // eslint-disable-next-line @typescript-eslint/member-ordering
    public trendsChange = {
        changeNeg2: this.changeNegative,
        changePos2: this.changePositive,
        strongNegative2: this.strongNegative,
        strongPositive2: this.strongPositive
    };
}
```
```html
<div class="grid__wrapper">
  <igx-grid #grid1
    [igxPreventDocumentScroll]="true"
    width="100%" height="100%"
    hiddenColumnsText="Hidden"
    primaryKey="id"
    [autoGenerate]="false"
    [data]="data$ | async"
    [hideGroupedColumns]="true"
    [rowSelection]="selectionMode"
    [allowFiltering]="true"
    [moving]="true"
    [filterMode]="'excelStyleFilter'"
    (rowSelectionChanging)="rowSelectionChanged($event)"
    (keydown)="gridKeydown($event)"
    (gridKeydown)="customKeydown($event)"
    [isLoading]="isLoading">

    @if (showToolbar) {
      <igx-grid-toolbar>
        <igx-grid-toolbar-actions>
          <igx-grid-toolbar-hiding title="Indicators"></igx-grid-toolbar-hiding>
          <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
          <igx-grid-toolbar-exporter [exportCSV]="false" (exportStarted)="exportStarted($event)">
            <span excelText>Export to Excel</span>
            <span pdfText>Export to PDF</span>
          </igx-grid-toolbar-exporter>
        </igx-grid-toolbar-actions>
      </igx-grid-toolbar>
    }

    <!-- Empty templates for Sorting,Moving,Hiding, Pinning actions inside ESF dialog -->
    <!-- <ng-template igxExcelStyleSorting></ng-template>
    <ng-template igxExcelStyleMoving></ng-template>
    <ng-template igxExcelStyleHiding></ng-template>
    <ng-template igxExcelStylePinning></ng-template> -->

    <igx-column [field]="'id'" [sortable]="true" [groupable]="true"></igx-column>
    <igx-column [field]="'category'" [width]="'120px'" [groupable]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'type'" [width]="'100px'" [groupable]="true" [sortable]="true" [filterable]="false">
    </igx-column>
    <igx-column [field]="'contract'" [width]="'110px'" [groupable]="true" [sortable]="true" [editable]="true">
      <ng-template igxCellEditor let-cell="cell" let-value>
        <igx-select [overlaySettings]="overlaySettings" [placeholder]="value" [(ngModel)]="cell.editValue" [igxFocus]="true">
          @for (c of contracts; track c) {
            <igx-select-item [value]="c">{{ c }}</igx-select-item>
          }
        </igx-select>
      </ng-template>
    </igx-column>
    <igx-column [field]="'settlement'" [width]="'100px'" [groupable]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'country'" [width]="'100px'" [groupable]="true" [sortable]="true" [editable]="true"></igx-column>
    <igx-column [field]="'region'" [width]="'110px'" [groupable]="true" [sortable]="true" [editable]="true">
      <ng-template igxCellEditor let-cell="cell" let-value>
        <igx-select [overlaySettings]="overlaySettings" [placeholder]="value" [(ngModel)]="cell.editValue" [igxFocus]="true">
          @for (r of regions; track r) {
            <igx-select-item [value]="r.Name">{{ r.Name }}</igx-select-item>
          }
        </igx-select>
      </ng-template>
    </igx-column>
    <igx-column [field]="'lastUpdated'" [width]="'120px'" [editable]="true" header="Last Update" dataType="date"></igx-column>
    <igx-column [field]="'openPrice'" [width]="'120px'" dataType="currency" [pipeArgs]="columnFormat"  [sortable]="true"></igx-column>
    <igx-column [field]="'price'" [width]="'110px'" dataType="number" [cellClasses]="trends"
      [sortable]="true">
      <ng-template igxCell let-cell="cell">
        <div class="finjs-icons">
          <span>{{cell.value | currency:'USD':'symbol':'1.4-4'}}</span>
          @if (trends.positive(cell.row.data)) {
            <igx-icon>trending_up</igx-icon>
          }
          @if (trends.negative(cell.row.data)) {
            <igx-icon>trending_down</igx-icon>
          }
        </div>
      </ng-template>
    </igx-column>
    @if (allowChart) {
      <igx-column [field]="'Chart'" [width]="'60px'" [filterable]="false">
        <ng-template igxCell let-cell="cell" class="center-text">
          <button class="button-icon" igxIconButton="flat" tabindex="-1">
            <igx-icon family="material" (click)="chartColumnAction(cell)">insert_chart_outlined</igx-icon>
          </button>
        </ng-template>
      </igx-column>
    }

    <igx-column [field]="'change'" [width]="'120px'" dataType="number" [headerClasses]="'headerAlignSyle'"
      [sortable]="true" [cellClasses]="trendsChange" >
    </igx-column>

    <igx-column [field]="'changeP'" [width]="'110px'" dataType="percent"
      [pipeArgs]="columnFormatChangeP" [sortable]="true" [cellClasses]="trendsChange">
    </igx-column>

    <igx-column [field]="'buy'" [width]="'110px'" dataType="currency" [pipeArgs]="columnFormat"
    [sortable]="true"></igx-column>
    <igx-column [field]="'sell'" [width]="'110px'" dataType="currency" [pipeArgs]="columnFormat"
    [sortable]="true"></igx-column>
    <igx-column [field]="'spread'" [width]="'110px'" dataType="number"  [pipeArgs]="columnFormat" >
    </igx-column>
    <igx-column [field]="'volume'" [width]="'110px'" dataType="number"  [pipeArgs]="columnFormat"  [sortable]="true"></igx-column>
    <igx-column [field]="'highD'" [width]="'110px'" dataType="currency" [pipeArgs]="columnFormat"  [sortable]="true"></igx-column>
    <igx-column [field]="'lowD'" [width]="'110px'" dataType="currency" [pipeArgs]="columnFormat"
    [sortable]="true"></igx-column>
    <igx-column [field]="'highY'" [width]="'110px'" dataType="currency" [pipeArgs]="columnFormat"  [sortable]="true"></igx-column>
    <igx-column [field]="'lowY'" [width]="'110px'" dataType="currency" [pipeArgs]="columnFormat"  [sortable]="true"></igx-column>
    <igx-column [field]="'startY'" [width]="'110px'" dataType="currency" [pipeArgs]="columnFormat"  [sortable]="true"></igx-column>
    <!-- <igx-column [field]="'Grid'" [width]="'80px'" [hidden]="false" [filterable]="false">
    <ng-template igxCell let-cell="cell" class="center-text">
      <button class="button-icon" igxIconButton="flat" [igxRippleCentered]="true">
        <igx-icon (click)="chartClick(cell)" family="material">table_charttable_chart</igx-icon>
      </button>
    </ng-template>
  </igx-column> -->
  <igx-column [field]="'indGrou'" [width]="'100px'" [filterable]="false"></igx-column>
  <igx-column [field]="'indSect'" [width]="'120px'" [filterable]="false" [resizable]="true"></igx-column>
  <igx-column [field]="'indSubg'" [width]="'100px'" [filterable]="false"></igx-column>
  <igx-column [field]="'secType'" [width]="'90px'" [filterable]="false"></igx-column>
  <igx-column [field]="'issuerN'" [width]="'170px'" [filterable]="false" [resizable]="true"></igx-column>
  <igx-column [field]="'moodys'" [width]="'60px'" [filterable]="false"></igx-column>
  <igx-column [field]="'fitch'" [width]="'60px'" [filterable]="false"></igx-column>
  <igx-column [field]="'dbrs'" [width]="'60px'" [filterable]="false"></igx-column>
  <igx-column [field]="'collatT'" [width]="'90px'" [filterable]="false"></igx-column>
  <igx-column [field]="'curncy'" [width]="'60px'" [filterable]="false"></igx-column>
  <igx-column [field]="'security'" [width]="'120px'" [filterable]="false"></igx-column>
  <igx-column [field]="'sector'" [width]="'80px'" [filterable]="false"></igx-column>
  <igx-column [field]="'cusip'" [width]="'100px'" [filterable]="false"></igx-column>
  <igx-column [field]="'ticker'" [width]="'60px'" [filterable]="false"></igx-column>
  <igx-column [field]="'cpn'" [width]="'80px'" [filterable]="false"></igx-column>
  <igx-column [field]="'maturity'" [width]="'120px'" [filterable]="false"></igx-column>
  <igx-column [field]="'krD_3YR'" [width]="'110px'" [filterable]="false"></igx-column>
  <igx-column [field]="'zV_SPREAD'" [width]="'90px'" [filterable]="false"></igx-column>
  <igx-column [field]="'kRD_5YR'" [width]="'50px'" [filterable]="false"></igx-column>
  <igx-column [field]="'kRD_1YR'" [width]="'80px'" [filterable]="false"></igx-column>
  <igx-column [field]="'indGrou'" [width]="'100px'" [filterable]="false"></igx-column>
  <igx-column [field]="'indSect'" [width]="'100px'" [filterable]="false" [resizable]="true"></igx-column>
  <igx-column [field]="'indSubg'" [width]="'100px'" [filterable]="false"></igx-column>
  <igx-column [field]="'secType'" [width]="'90px'" [filterable]="false"></igx-column>
  <igx-column [field]="'issuerN'" [width]="'170px'" [filterable]="false" [resizable]="true"></igx-column>
  <igx-column [field]="'moodys'" [width]="'60px'" [filterable]="false"></igx-column>
  <igx-column [field]="'fitch'" [width]="'60px'" [filterable]="false"></igx-column>
  <igx-column [field]="'dbrs'" [width]="'60px'" [filterable]="false"></igx-column>
  <igx-column [field]="'collatT'" [width]="'90px'" [filterable]="false"></igx-column>
</igx-grid>
</div>

<div igxOverlayOutlet #outlet="overlay-outlet">
</div>
```
```scss
@use '../../variables' as *;

.grid__wrapper {
    --ig-size: var(--ig-size-small);

	position: relative;
	width: 100%;
	height: 98%;
	inset-block-start: 0;
	inset-inline-start: 0;
	padding: rem(15px);
	display: flex;
	flex-direction: column;

	app-finjs-grid {
		height: 100%;
	}
}

:host ::ng-deep {
	.finjs-icons {
		display: flex;
		align-items: center;

		igx-icon {
			font-size: rem(16px);
			width: rem(16px);
			height: rem(16px);
			margin-inline-start: rem(4px);
		}
	}

	.igx-grid__grouparea {
		max-height: 100%;
		height: auto;
	}

	.changePos,
	.changeNeg,
	.strongPositive,
	.strongNegative {
		color: contrast-color(null, 'gray', 50) !important;

		.igx-grid__td-text {
			padding: rem(2px) rem(5px);
		}
	}

	.positive {
		color: color(null, 'success', 500) !important;
	}

	.positive.strongPositive {
		.igx-grid__td-text {
			color: color(null, 'success', 500, .8) !important;
		}
	}

	.negative {
		color: color(null, 'error', 500) !important;
	}

	.negative.strongNegative {
		.igx-grid__td-text {
			color: color(null, 'error', 500, .8) !important;
		}
	}

	// NORMAL
	// positive
	.changePos {
		.igx-grid__td-text {
			background: color(null, 'success', 500, .5);
		}
	}

	.changePos1 {
		background: color(null, 'success', 500, .5);
		color: contrast-color(null, 'gray', 900);
	}

	.changePos2 {
		.igx-grid__td-text {
			--ig-success-l: 40%;
			border-inline-end: rem(4px) solid color(null, 'success', 500, .5);
			padding-inline-end: rem(15px);
		}
	}

	// negative
	.changeNeg {
		.igx-grid__td-text {
			background: color(null, 'error', 500, .5);
		}
	}

	.changeNeg1 {
		background: color(null, 'error', 500, .5);
		color: contrast-color(null, 'gray', 900);
	}

	.changeNeg2 {
		.igx-grid__td-text {
			border-inline-end: rem(4px) solid color(null, 'error', 500, .5);
			padding-inline-end: rem(9px);
		}
	}

	// selected
	.igx-grid__td--selected.changePos1,
	.igx-grid__td--selected.changePos2,
	.igx-grid__td--selected.changePos {
		background-color: color(null, 'success', 500) !important;

		.finjs-icons,
		.igx-grid__td-text {
			color: contrast-color(null, 'gray', 900);
		}
	}

	.igx-grid__td--selected.changeNeg1,
	.igx-grid__td--selected.changeNeg2,
	.igx-grid__td--selected.changeNeg {
		background-color: color(null, 'error', 500) !important;

		.finjs-icons,
		.igx-grid__td-text {
			color: contrast-color(null, 'gray', 900);
		}
	}

	// STRONG
	// positive
	.strongPositive {
		.igx-grid__td-text {
			background: color(null, 'success', 500);
		}
	}

	.strongPositive1 {
		background: color(null, 'success', 500);
		color: contrast-color(null, 'gray', 900);
	}

	.strongPositive2 {
		.igx-grid__td-text {
			border-inline-end: rem(4px) solid color(null, 'success', 500);
			padding-inline-end: rem(15px);
		}
	}

	// negative
	.strongNegative {
		.igx-grid__td-text {
			background: color(null, 'error', 500);
			color: contrast-color(null, 'gray', 900);
		}
	}

	.strongNegative1 {
		background: color(null, 'error', 500);
		color: contrast-color(null, 'gray', 900);
	}

	.strongNegative2 {
		.igx-grid__td-text {
			border-inline-end: rem(4px) solid color(null, 'error', 500);
			padding-inline-end: rem(9px);
		}
	}

	// selected
	.igx-grid__td--selected.strongPositive1,
	.igx-grid__td--selected.strongPositive2,
	.igx-grid__td--selected.strongPositive {
		background-color: color(null, 'success', 500) !important;

		.finjs-icons,
		.igx-grid__td-text {
			color: contrast-color(null, 'gray', 900);
		}
	}

	.igx-grid__td--selected.strongNegative1,
	.igx-grid__td--selected.strongNegative2,
	.igx-grid__td--selected.strongNegative {
		background-color: color(null, 'error', 500) !important;

		.finjs-icons,
		.igx-grid__td-text {
			color: contrast-color(null, 'gray', 900);
		}
	}

	.igx-grid__outlet span,
	.igx-excel-filter span,
	.igx-excel-filter header,
	.igx-excel-filter input {
		font-size: 0.8125rem;
	}

	.igx-button--icon {
		width: 2rem;
		height: 2rem;
	}
}

igx-grid {
	flex: 1 0 0%;
}
```

### Data Virtualization and Performance
Seamlessly scroll through unlimited rows and columns in your Angular grid, with the data grid’s column and row level virtualization. With support for local or remote data sources, you get the best performance no matter where your data lives. Your users will experience Excel-like scrolling, with enterprise speed — no lag, screen flicker, or visual delay — giving you the best user experience (UX) without compromising performance.

### Angular Grid Paging, Sorting, Filtering, & Searching
Allow users to navigate your data set with our default [pager](/grid/paging) or create your own template to give your own paging experience. With complete support for single and multi-column sorting, full-text [search](/grid/search) on the grid, and several [advanced filtering](/grid/advanced-filtering) options, including data-type based [Microsoft Excel-style Filtering](/grid/excel-style-filtering).

### Inline Angular Grid Editing
We provide you default [cell templates for editable columns](/grid/grid#cell-editing-template) which are based on the data type of the column. You can define your own custom templates for editable columns and override default behavior for committing and discarding changes in the cell value.

<div class="feature__image feature__image--right">
    <img class="b-lazy b-lazy-gifs b-loaded responsive-img" title="Animation of filtering capabilities within Angular Data Grid" src="https://static.infragistics.com/marketing/ignite-ui-angular/grid/ignite-ui-angular-grid-inline-grid-editing-1100.jpg?v=201808021304" alt="Animation of filtering capabilities within Angular Data Grid"/>
</div>

### Keyboard Navigation & Row/Cell Selection in the Angular Grid

Ensure accessibility compliance and improve usability, enabling Excel-like [keyboard navigation](/grid/keyboard-navigation) in the Angular data grid, using the up, down, right, left, tab, and Enter keys. You can toggle single or multiple row selection in the Angular grid using the mouse or keyboard to select or de-select full rows, or use the built-in select all / de-select all checkbox in the grid toolbar to work with row selection. <a class="no-external-icon" href="https://www.infragistics.com/community/blogs/b/engineering/posts/grid-keyboard-navigation-accessibility-">Learn about our most recent enhancements to this feature</a>.

<div class="feature__image feature__image--right"><img class="b-lazy b-lazy-gifs b-loaded responsive-img" title="Animation of keyboard navigation functionality" src="https://static.infragistics.com/marketing/ignite-ui-angular/grid/ignite-ui-angular-grid-keyboard-navigation-1100.gif?v=201808021304" alt="Animation of keyboard navigation functionality within Angular Data Grid"/></div>

### Angular Grid Accessibility & ARIA Support

Each of our Angular components in Ignite UI for Angular has been implemented according to the latest accessibility guidelines and specifications. Our Angular components have been tested using OS or Browser provided accessibility technology – screen readers. Our team ensures not only that the guidelines are implemented, but also that the actual content delivered to visually impaired or blind people is actually consumable and user-friendly for them. The Ignite UI for Angular data grid is fully accessible with a11y Keyboard accessibility, ARIA, and accessible color palette. <a class="no-external-icons" href="https://www.infragistics.com/community/blogs/b/engineering/posts/grid-keyboard-navigation-accessibility">Learn more</a>.

<div class="feature__image feature__image--right">
    <img class="b-lazy b-lazy-gifs b-loaded responsive-img" title="Icon representation for ARIA support" src="https://static.infragistics.com/marketing/ignite-ui-angular/grid/ignite-ui-angular-grid-aria-support-1100.jpg?v=201808021304" alt="Icon representation for ARIA support on the Angular Data Grid Component"/>
</div>

### Column Grouping, Pinning, Summaries, & Moving in the Angular Grid

Group columns or pre-set column groups via mouse interaction, touch or our API, with support for built-in column [summaries](/grid/summaries) or custom summary templates. Enable users to interactively [hide](/grid/column-hiding) or [move columns](/grid/column-moving), with full support for interactive [column pinning](/grid/column-pinning), during move, drag, and reorder operations.

<div class="feature__image feature__image--right"><img class="b-lazy b-loaded responsive-img" title="Grid of data with column grouping, pinning and summary features enabled" src="https://static.infragistics.com/marketing/ignite-ui-angular/grid/ignite-ui-angular-grid-cell-summaries-1100.jpg?v=201808021304" alt="Grid of data with column grouping, pinning and summary features enabled for Angular Data Grid component"/></div>

### Multi-Column Headers in the Angular Grid

Enable [multi-column headers](/grid/multi-column-headers), allowing you to group columns under a common header. Every column group could be a representation of combinations between other groups or columns, with full support for column pinning, interactive column moving within groups, sorting, and hiding groups.

<div class="feature__image feature__image--right"><img class="b-lazy b-loaded responsive-img" title="Grid of data with Multi-Column Headers feature enabled" src="https://static.infragistics.com/marketing/ignite-ui-angular/grid/ignite-ui-angular-grid-multi-column-headers-1100.jpg?v=201808021304" alt="Grid of data with Multi-Column Headers feature enabled on the Angular Data Grid component"/></div>

### Theming, Styling, & Templating in the Angular Grid

With Ignite UI for Angular you can customize cell appearance with CSS or re-template any cell with ng-template to give any cell render appearance. With full support for Material Design, you can customize your branded experience with our simple-to-use theming engine.

<div class="feature__image feature__image--right"><img class="b-lazy b-lazy-gifs b-loaded responsive-img" title="Animation of different grids design showing the theming and templating capabilities" src="https://static.infragistics.com/marketing/ignite-ui-angular/grid/ignite-ui-angular-grid-cell-styling-1100.gif?v=201808021304" alt="Animation of different grids design showing the theming and templating capabilities of the Angular Data Grid"/>
</div>

### Excel Library for the Angular Grid

Full support for exporting data grids to XLSX, XLS, TSV or CSV. The Ignite UI for Angular [Excel library](/excel-library) includes 300+ formulas, Table support, Conditional Formatting, Chart creation and more – all without needing Microsoft Excel on the client machine.

<div class="feature__image feature__image--right"><img class="b-lazy b-loaded responsive-img" title="Icon representation of Microsoft Excel-like features" src="https://static.infragistics.com/marketing/Website/products/Ignite-UI-for-Angular/ignite-ui-angular-grid-export-to-excel-2-1100.jpg?v=201808021304" alt="Icon representation of Microsoft Excel-like features on the Angular Data Grid"/>
</div>

## Angular Grid Features

- [Inline Editing](/grid/editing)
- [Row and Column Filtering](/grid/filtering)
- [Grid Sorting](/grid/sorting)
- [Column Grouping](/grid/groupby)
- [Column Summaries](/grid/summaries)
- [Fixed/Pinned Columns](/grid/column-pinning)
- [Resizable Columns](/grid/column-resizing)
- [Column Hiding](/grid/column-hiding)

- [Column Moving](/grid/column-moving)
- [Cell Copy and Paste](/grid/clipboard-interactions)
- [Cell Styling](/grid/conditional-cell-styling)
- [Real-time/Live Data Theming](/grid/live-data)
- [Custom Grid Toolbar](/grid/toolbar)
- [Grid Paging](/grid/paging)
- [Row Selection](/grid/selection)
- [Cell Selection](/grid/cell-selection)

- [Grid-level Searching](/grid/search)
- [Export to Excel, CSV, TSV](/exporter-excel)
- [Multi-Column Headers](/grid/multi-column-headers)
- [Combo Box/Dropdown](/combo)
- [Virtualization and Performance](/grid/virtualization)
- [Remote Data Load on Demand](/grid/virtualization#remote-virtualization)
- [Cell Templates](/grid/grid#cell-template)
- [ARIA/a11y Support](/interactivity/accessibility-compliance)

<div id="support-section-wrapper">
    <div class="support-section">
        <div >
            <h2>Ignite UI for Angular Supported Browsers</h2>
        </div>

       The Angular Data Grid is supported on all modern web browsers, including:

        <ul>
            <li>Chrome</li>
            <li>Edge / Edge Chromium</li>
            <li>Firefox</li>
            <li>Safari</li>
            <li>Internet Explorer 11 with polyfills</li>
        </ul>
    </div>
    <div class="support-section">
        <div>
            <h2>Ignite UI for Angular Support Options</h2>
        </div>

        There are multiple options to get access to our award-winning support at Infragistics for the Angular product.

        <ul>
            <li>Start at the Angular <a class="no-external-icon" href="https://www.infragistics.com/support/ignite-ui-angular-help">Support</a> home page</li>
            <li>Read the Angular <a class="no-external-icon" href="https://www.infragistics.com/general/getting-started">Documentation</a> and experiment with Angular Samples</li>
            <li>Read the<a class="no-external-icon" href="https://www.infragistics.com/community/blogs/tags/Ignite UI for Angular"> Angular Blogs</a> to stay up to date</li>
            <li>Submit a <a class="no-external-icon" href="https://www.infragistics.com/products/ignite-ui-angular/grid-table"> Support Case</a></li>
            <li>Learn from the Angular <a class="no-external-icon" href="https://www.infragistics.com/resources/sample-applications">Reference Applications</a></li>
        </ul>
    </div>
</div>

## Ignite UI for Angular Trial License and Commercial
Ignite UI for Angular is a commercially licensed product available via a subscription model. You can try the Ignite UI for Angular product for free when you <a class="no-external-icon" href="https://www.infragistics.com/free-downloads">register for a 30-day trial</a>. When you are done with your Trial Period, you can <a class="no-external-icon" href="https://www.infragistics.com/how-to-buy/product-pricing">purchase a license </a> from our web site or by calling <a class="no-external-icon" href="https://www.infragistics.com/about-us/contact-us">sales in your region</a>.

## Frequently Asked Questions

  <igc-expansion-panel indicator-position="end">
    <span slot="subtitle">Why should I choose the Infragistics Ignite UI for Angular Data Grid?</span>
    <ul>
      <li><a href="/grid/virtualization">Virtualized Rows and Columns</a></li>
      <li><a href="/grid/row-editing">Inline Editing</a> with Cell, Row, and <a href="/grid/batch-editing">Batch</a> Update options</li>
      <li><a href="/grid/excel-style-filtering">Excel-style Filtering</a> and full <a href="/grid/keyboard-navigation">Excel Keyboard Navigation</a> capability</li>
      <li>Interactive <a href="/grid/groupby">Outlook-style Grouping</a></li>
      <li><a href="/grid/summaries">Column Summaries</a> based on any data in a grid cell or column</li>
      <li><a href="/grid/export-excel">Export to Excel</a>, including <a href="/excel-library-working-with-charts">Data Visualization</a></li>
      <li><a href="/grid/display-density">Size</a> to adjust the height and sizing of the rows</li>
      <li>Column templates like <a href="/charts/types/sparkline-chart">Sparkline Column</a> and Image Column</li>
    </ul>
  </igc-expansion-panel>

  <igc-expansion-panel indicator-position="end">
    <span class="igd-expansion-title" slot="title">What is the Pricing for the Infragistics Ignite UI for Angular Data Grid?</span>
    <p>Our Angular components are included as a part of our Ignite UI bundle. A single developer license starts at $1,295 USD for a one-year subscription, including one year of standard support and updates. We also offer discounts for multi-year licenses. Please refer to our <a class="no-external-icon" href="https://www.infragistics.com/how-to-buy/product-pricing">Pricing page</a> for more information on pricing.
    If you are developing applications on multiple platforms, consider our complete app development package, Infragistics Ultimate, which include desktop platforms like WPF and Windows Forms, plus all modern web toolsets for Angular, Web Components, ASP.NET MVC and ASP.NET Core.</p>
  </igc-expansion-panel>

  <igc-expansion-panel indicator-position="end">
    <span class="igd-expansion-title" slot="title">Can I purchase the Infragistics Ignite UI for Angular Data Grid control separately?</span>
    <p>No, you cannot purchase the Angular Data Grid separately. It is part of a the <a class="no-external-icon" href="https://www.infragistics.com/products/ignite-ui-angular">Ignite UI for Angular product</a>, which includes dozens of UI controls and components, plus over 60 charts, including Angular Financial Charting. If you are interested in other modern web platforms like Angular, ASP.NET MVC, Web Components or ASP.NET Blazor, check out our <a class="no-external-icon" href="https://www.infragistics.com/products/ignite-ui">Ignite UI product bundle</a>, which gives you every web platform for only $100 more on your subscription. That is hundreds of controls, components, and data visualizations for a very low price.</p>
  </igc-expansion-panel>

  <igc-expansion-panel indicator-position="end">
    <span class="igd-expansion-title" slot="title">How do I Install Angular and the Infragistics Ignite UI for Angular Data Grid control?</span>
    <p>To get started with the Angular Data Grid, follow the steps in the [getting started guide](/general/getting-started). We also maintain a library of <a class="no-external-icon" href="https://www.infragistics.com/resources/sample-applications">sample applications</a>, which are designed to not only inspire but are best practices guides for Angular development.</p>
  </igc-expansion-panel>

