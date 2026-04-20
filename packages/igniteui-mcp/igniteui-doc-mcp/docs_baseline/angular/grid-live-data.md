---
title: Live Data Updates in Angular Data Grid - Ignite UI for Angular
_description: Check out how the Ignite UI for Angular Data Grid can handle thousands of updates per second, while staying responsive for user interactions.
_keywords: angular data grid, angular grid updates, angular live data
_license: commercial
_tocName: Live Data / Real-Time
_premium: true
---
# Angular Grid Live Data Updates
The Grid component is able to handle thousands of updates per second, while staying responsive for user interactions.
## Angular Live-data Update Example
The sample below demonstrates the Grid performance when all records are updated multiple times per second. Use the UI controls to choose the number of records loaded and the frequency of updates.
Feed the same data into the [Line Chart](../charts/types/line-chart.md) to experience the powerful charting capabilities of Ignite UI for Angular. The `Chart` button will show `Category Prices per Region` data for the selected rows and the `Chart` column button will show the same for the current row.
<code-view style="height:700px"
           data-demos-base-url="{environment:lobDemosBaseUrl}"
           iframe-src="{environment:lobDemosBaseUrl}/grid-finjs?theme-switch=false/" alt="Angular Live-data Update Example">
</code-view>
## Data binding and updates
A service provides data to the component when the page loads, and when the slider controller is used to fetch a certain number of records. While in a real scenario updated data would be consumed from the service, here data is updated in code. This is done to keep the demo simple and focus on its main goal - demonstrate the grid performance.
```html
<igx-grid #grid [data]="data"></igx-grid>
```
```typescript
public ngOnInit() {
    this.localService.getData(this.volume);
    this.volumeSlider.onValueChange.subscribe(x => this.localService.getData(this.volume);
    this.localService.records.subscribe(x => { this.data = x; });
}
```
Angular pipes are used internally to update the grid view. A change in the data field value or a change in the data object/data collection reference will trigger the corresponding pipes. However, this is not the case for columns, which are bound to [`complex data objects`](grid.md#complex-data-binding), because the Angular pure pipe will not detect a change in a nested property. To resolve the situation, provide a new object reference for the data object containing the property. Example:
```html
<igx-grid #grid [data]="data">
    <igx-column field="price.usd"></igx-column>
</igx-grid>
```
```typescript
private updateData(data: IRecord[]) {
    const newData = []
    for (const rowData of data) {
        rowData.price = { usd: getUSD(), eur: getEUR() };
        newData.push({...rowData});
    }
    this.grid.data = newData;
}
```
## Templates
Updating the view works the same way for columns with a default template and for columns with a custom template. However, it is recommended to keep custom templates relatively simple. As number of elements in the template grows, negative performance impact rises as well.
## Live-data feed with Dock Manager and igxGrid Components
The purpose of this demo is to showcase a financial screen board with Real-time data stream using a [SignalR](https://dotnet.microsoft.com/apps/aspnet/signalr) hub back-end.
As you can see the igxGrid component handles with ease the high-frequency updates from the server. The code for the ASP.NET Core application using SignalR could be found in this [public GitHub repository](https://github.com/IgniteUI/finjs-web-api).
```typescript
/* eslint-disable max-len */
import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, Renderer2, OnDestroy, OnInit, DoCheck, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { AbsoluteScrollStrategy, ConnectedPositioningStrategy, DefaultSortingStrategy, GridColumnDataType, IgxOverlayOutletDirective, OverlaySettings, SortingDirection } from 'igniteui-angular/core';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxLabelDirective, IgxPrefixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgcDockManagerLayout, IgcDockManagerPaneType, IgcSplitPane, IgcSplitPaneOrientation } from 'igniteui-dockmanager';
import { Subject } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';
import { FloatingPanesService } from '../services/floating-panes.service';
import { SignalRService } from '../services/signal-r.service';
import { DockSlotComponent, GridHostDirective } from './dock-slot.component';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [SignalRService, FloatingPanesService],
    selector: 'app-finjs-dock-manager',
    templateUrl: './grid-finjs-dock-manager.component.html',
    styleUrls: ['./grid-finjs-dock-manager.component.scss'],
    imports: [IgxSwitchComponent, FormsModule, IgxSelectComponent, IgxLabelDirective, IgxPrefixDirective, IgxIconComponent, IgxSelectItemComponent, IgxButtonDirective, IgxOverlayOutletDirective, IgxGridComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxPaginatorComponent, GridHostDirective, AsyncPipe, CurrencyPipe],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridFinJSDockManagerComponent implements OnInit, OnDestroy, AfterViewInit, DoCheck {
    dataService = inject(SignalRService);
    private paneService = inject(FloatingPanesService);
    private cdr = inject(ChangeDetectorRef);
    private componentFactoryResolver = inject(ComponentFactoryResolver);
    private elementRef = inject(ElementRef);
    private renderer = inject(Renderer2);

    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
    @ViewChild('grid2', { static: true }) public grid2: IgxGridComponent;
    @ViewChild(GridHostDirective) public host: GridHostDirective;
    @ViewChild('dock', { read: ElementRef }) public dockManager: ElementRef<HTMLIgcDockmanagerElement>;
    @ViewChild('priceTemplate', { read: TemplateRef })
    public priceTemplate: TemplateRef<any>;
    @ViewChild(IgxSelectComponent) public select: IgxSelectComponent;
    @ViewChild('freq', { read: IgxSelectComponent }) public selectFrequency: IgxSelectComponent;
    @ViewChild(IgxOverlayOutletDirective) outlet: IgxOverlayOutletDirective;

    public isDarkTheme = true;

    public frequencyItems: number[] = [300, 600, 900];
    public frequency = this.frequencyItems[1];
    public dataVolumeItems: number[] = [100, 500, 1000, 5000, 10000];
    public dataVolume: number = this.dataVolumeItems[1];
    public isLoading = true;
    public data: any;
    public liveData = true;
    public columnFormat = { digitsInfo: '1.3-3'};
    public columnFormatChangeP = { digitsInfo: '2.3-3'};
    public slotCounter = 1;
    public customOverlaySettings: OverlaySettings = {
        positionStrategy: new ConnectedPositioningStrategy(),
        scrollStrategy: new AbsoluteScrollStrategy()
    };
    public freqOverlaySettings: OverlaySettings = {
        positionStrategy: new ConnectedPositioningStrategy(),
        scrollStrategy: new AbsoluteScrollStrategy()
    };

    public docLayout: IgcDockManagerLayout = {
        rootPane: {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            panes: [
                {
                    type: IgcDockManagerPaneType.contentPane,
                    contentId: 'actionPane',
                    header: 'Actions pane',
                    size: 20,
                    isPinned: false,
                    allowClose: false
                },
                {
                    size: 50,
                    type: IgcDockManagerPaneType.contentPane,
                    contentId: 'gridStockPrices',
                    header: 'Stock Market Data',
                    allowClose: false
                },
                {
                    type: IgcDockManagerPaneType.splitPane,
                    orientation: IgcSplitPaneOrientation.vertical,
                    size: 50,
                    panes: [
                        {
                        type: IgcDockManagerPaneType.documentHost,
                        size: 50,
                        rootPane: {
                            type: IgcDockManagerPaneType.splitPane,
                            orientation: IgcSplitPaneOrientation.horizontal,
                            panes: [
                                {
                                    type: IgcDockManagerPaneType.tabGroupPane,
                                    panes: [
                                        {
                                            type: IgcDockManagerPaneType.contentPane,
                                            contentId: 'forexMarket',
                                            header: 'Market Data 1'
                                        },
                                        {
                                            type: IgcDockManagerPaneType.contentPane,
                                            contentId: 'content4',
                                            header: 'Market Data 2'
                                        }
                                    ]
                                }
                            ]
                        }},
                       {
                        type: IgcDockManagerPaneType.contentPane,
                        contentId: 'etfStockPrices',
                        header: 'Market Data 3',
                        size: 50,
                        allowClose: false
                       }
                    ]
                }
            ]
        },
        floatingPanes: []
    };

    public columns: { field: string,
                    width: string,
                    sortable: boolean,
                    filterable: boolean,
                    type: GridColumnDataType,
                    groupable?: boolean,
                    cellClasses?: string,
                    bodyTemplate?: string } [] = [
        { field: 'buy', width: '110px', sortable: false, filterable: false, type: 'currency' },
        { field: 'sell', width: '110px', sortable: false, filterable: false, type: 'currency' },
        { field: 'openPrice', width: '120px', sortable: true, filterable: true, type: 'currency'},
        { field: 'lastUpdated', width: '120px', sortable: true, filterable: true, type: 'date'},
        { field: 'spread', width: '110px', sortable: false, filterable: false, type: 'number' },
        { field: 'volume', width: '110px', sortable: true, filterable: false, type: 'number' },
        { field: 'settlement', width: '100px', sortable: true, filterable: true, type: 'string', groupable: true },
        { field: 'country', width: '100px', sortable: true, filterable: true, type: 'string'},
        { field: 'highD', width: '110px', sortable: true, filterable: false, type: 'currency' },
        { field: 'lowD', width: '110px', sortable: true, filterable: false, type: 'currency' },
        { field: 'highY', width: '110px', sortable: true, filterable: false, type: 'currency' },
        { field: 'lowY', width: '110px', sortable: true, filterable: false, type: 'currency' },
        { field: 'startY', width: '110px', sortable: true, filterable: false, type: 'currency' },
        { field: 'indGrou', width: '136px', sortable: false, filterable: false, type: 'string'},
        { field: 'indSect', width: '136px', sortable: false, filterable: false, type: 'string'},
        { field: 'indSubg', width: '136px', sortable: false, filterable: false, type: 'string'},
        { field: 'secType', width: '136px', sortable: false, filterable: false, type: 'string'},
        { field: 'issuerN', width: '136px', sortable: false, filterable: false, type: 'string'},
        { field: 'moodys', width: '136px', sortable: false, filterable: false, type: 'string'},
        { field: 'fitch', width: '136px', sortable: false, filterable: false, type: 'string'},
        { field: 'dbrs', width: '136px', sortable: false, filterable: false, type: 'string'},
        { field: 'collatT', width: '136px', sortable: false, filterable: false, type: 'string'},
        { field: 'curncy', width: '136px', sortable: false, filterable: false, type: 'string'},
        { field: 'security', width: '136px', sortable: false, filterable: false, type: 'string'},
        { field: 'sector', width: '136px', sortable: false, filterable: false, type: 'string'},
        { field: 'cusip', width: '136px', sortable: false, filterable: false, type: 'string'},
        { field: 'ticker', width: '136px', sortable: false, filterable: false, type: 'string'},
        { field: 'cpn', width: '136px', sortable: false, filterable: false, type: 'string'}
    ];

    private destroy$ = new Subject<any>();

    public ngOnInit() {
        this.dataService.startConnection(this.frequency, this.dataVolume, true, false);
        this.data = this.dataService.data;
        this.data.pipe(takeUntil(this.destroy$)).subscribe((data) => {
            if (data.length !== 0) {
                this.isLoading = false;
            };
        });
    }

    public ngOnDestroy() {
        this.dataService.stopLiveData();
        this.destroy$.next(true);
        this.destroy$.complete();
    }

    public ngDoCheck() {
        if (this.isDarkTheme) {
            this.renderer.removeClass(this.elementRef.nativeElement, 'light-theme');
            this.renderer.addClass(this.elementRef.nativeElement, 'dark-theme');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'dark-theme');
            this.renderer.addClass(this.elementRef.nativeElement, 'light-theme');
        }
    }

    public ngAfterViewInit() {
        // This 500ms timeout is used as a workaround for StackBlitz ExpressionChangedAfterItHasBeenChecked Error
        setTimeout(() => {
            const x = (this.dockManager.nativeElement.getBoundingClientRect().width / 3);
            const y = (this.dockManager.nativeElement.getBoundingClientRect().height / 3);

            this.paneService.initialPanePosition = { x, y };
            this.grid2.selectColumns(['price', 'change', 'changeP']);
            this.customOverlaySettings.target = this.select.inputGroup.element.nativeElement;
            this.customOverlaySettings.outlet = this.outlet;
            this.freqOverlaySettings.target = this.selectFrequency.inputGroup.element.nativeElement;
            this.freqOverlaySettings.outlet = this.outlet;
            this.grid1.groupingExpressions = [{
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
                fieldName: 'settlement',
                ignoreCase: false,
                strategy: DefaultSortingStrategy.instance()
            }];
        }, 500);
    }

    public paramsChanged() {
        this.dataService.hasRemoteConnection ? this.dataService.broadcastParams(this.frequency, this.dataVolume, true, false) :
            this.dataService.startConnection(this.frequency, this.dataVolume, true, false);
        this.data = this.dataService.data;
    }

    public stopFeed() {
        this.dataService.stopLiveData();
    }

    public streamData(event) {
        event.checked ? this.paramsChanged() : this.stopFeed();
        this.liveData = event.checked;
    }

    /* eslint-disable @typescript-eslint/member-ordering */
    /** Grid CellStyles and CellClasses */
    private negative = (rowData: any): boolean => rowData['changeP'] < 0;
    private positive = (rowData: any): boolean => rowData['changeP'] > 0;
    private changeNegative = (rowData: any): boolean => rowData['changeP'] < 0 && rowData['changeP'] > -1;
    private changePositive = (rowData: any): boolean => rowData['changeP'] > 0 && rowData['changeP'] < 1;
    private strongPositive = (rowData: any): boolean => rowData['changeP'] >= 1;
    private strongNegative = (rowData: any, key: string): boolean => rowData['changeP'] <= -1;

    public trends = {
        changeNeg: this.changeNegative,
        changePos: this.changePositive,
        negative: this.negative,
        positive: this.positive,
        strongNegative: this.strongNegative,
        strongPositive: this.strongPositive
    };

    public trendsChange = {
        changeNeg2: this.changeNegative,
        changePos2: this.changePositive,
        strongNegative2: this.strongNegative,
        strongPositive2: this.strongPositive
    };

    public createGrid() {
        const id: string = 'slot-' + this.slotCounter++;
        const splitPane: IgcSplitPane = {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            floatingWidth: 550,
            floatingHeight: 350,
            panes: [
                {
                    type: IgcDockManagerPaneType.contentPane,
                    header: id,
                    contentId: id
                }
            ]
        };
        this.paneService.appendPane(splitPane);
        this.dockManager.nativeElement.layout.floatingPanes.push(splitPane);
        this.docLayout = { ...this.dockManager.nativeElement.layout };
        this.cdr.detectChanges();

        // Create Dock Slot Component
        const dockSlotComponentFactory = this.componentFactoryResolver.resolveComponentFactory(DockSlotComponent);
        const dockSlotComponent = this.host.viewContainerRef.createComponent(dockSlotComponentFactory);
        dockSlotComponent.instance.id = id;
        dockSlotComponent.instance.viewInit.pipe(first()).subscribe(() => {
            const gridViewContainerRef = dockSlotComponent.instance.gridHost.viewContainerRef;
            this.loadGridComponent(gridViewContainerRef, dockSlotComponent.instance.destroy$);
        });
    }

    public loadGridComponent(viewContainerRef: ViewContainerRef, destructor: Subject<any>) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(IgxGridComponent);
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent(componentFactory);
        const grid = (componentRef.instance as IgxGridComponent);
        grid.autoGenerate = true;
        this.dataService.data.pipe(takeUntil(destructor)).subscribe(d => grid.data = d);
        grid.columnInit.pipe(takeUntil(destructor)).subscribe((col: IgxColumnComponent) => {
            if (col.field === 'price') {
                col.cellClasses = this.trends;
                col.bodyTemplate = this.priceTemplate;
            }
            if (col.field === 'change' || col.field === 'changeP') {
                col.cellClasses = this.trendsChange;
            }
        });
        grid.columnSelection = 'multiple';
        grid.cellSelection = 'none';

        // Use detectChanges because of ExpressionChangedAfterItHasBeenChecked Error when creating a dynamic pane
        this.cdr.detectChanges();
    }

    /* eslint-enable @typescript-eslint/member-ordering */
}
```
```html
<igc-dockmanager #dock class="dock-m-position ig-scrollbar" [layout]="docLayout">
  <div class="actionPane" slot="actionPane" style="height: 100%; padding: 20px;">
    <div class="actionItem">
      Change theme: <br/> <igx-switch [(ngModel)]="isDarkTheme">Dark Mode</igx-switch>
    </div>
    <div class="actionItem">
      Start/Stop live data: <igx-switch [(ngModel)]="liveData" (change)="streamData($event)">{{ liveData ===
    true ? 'Streaming' : 'Not Streaming' }}</igx-switch>
  </div>
  <div class="actionItem">
    <!-- Change volume -->
    <igx-select [(ngModel)]="dataVolume" (ngModelChange)="paramsChanged()" [overlaySettings]="customOverlaySettings">
      <label igxLabel>Change data volume</label>
      <igx-prefix>
        <igx-icon>view_list</igx-icon>
      </igx-prefix>
      @for (item of dataVolumeItems; track item) {
        <igx-select-item [value]="item">
          {{item}}
        </igx-select-item>
      }
    </igx-select>
  </div>
  <div class="actionItem">
    <!-- Change frequency -->
    <igx-select [(ngModel)]="frequency" (ngModelChange)="paramsChanged()" [overlaySettings]="freqOverlaySettings" #freq>
      <label igxLabel>Change update frequency</label>
      <igx-prefix>
        <igx-icon>cell_wifi</igx-icon>
      </igx-prefix>
      @for (item of frequencyItems; track item) {
        <igx-select-item [value]="item">
          {{item}}
        </igx-select-item>
      }
    </igx-select>
  </div>
  <div igxButton (click)="createGrid()" [disabled]="docLayout.floatingPanes.length >= 5">Add Floating Pane</div>
  <div igxOverlayOutlet #outlet></div>
</div>
<div slot="gridStockPrices" style="height: 100%;">
  <igx-grid #grid1 [data]="data | async" [isLoading]="isLoading"
    [allowFiltering]="true" [filterMode]="'excelStyleFilter'" [primaryKey]="'id'"
    [columnSelection]="'multiple'" [cellSelection]="'none'" [outlet]="filteringOverlayOutlet">
    <igx-column [field]="'id'" [width]="'70px'" [hidden]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'category'" [width]="'120px'" [sortable]="true"></igx-column>
    <igx-column [field]="'type'" [width]="'100px'" [sortable]="true" [filterable]="false">
    </igx-column>
    <igx-column [field]="'contract'" [width]="'100px'" [sortable]="true" [groupable]="true">
    </igx-column>
    <igx-column [field]="'price'" [width]="'130px'" dataType="number" [cellClasses]="trends"
      [sortable]="true">
      <ng-template igxCell let-cell="cell" #priceTemplate>
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
    <igx-column [field]="'change'" [width]="'120px'" dataType="number" [headerClasses]="'headerAlignSyle'"
      [sortable]="true" [cellClasses]="trendsChange">
    </igx-column>
    <igx-column [field]="'changeP'" [width]="'110px'" dataType="percent"
      [pipeArgs]="columnFormatChangeP" [sortable]="true" [cellClasses]="trendsChange">
    </igx-column>
    @for (c of columns; track c) {
      <igx-column [field]="c.field" [width]="c.width"
        [sortable]="c.sortable" [filterable]="c.filterable" [dataType]="c.type"
        [cellClasses]="c.cellClasses" [bodyTemplate]="c.bodyTemplate" [groupable]="c.groupable">
      </igx-column>
    }
  </igx-grid>
</div>
<div slot="forexMarket" style="height: 100%;">
  <igx-grid #grid2 [data]="data | async" [isLoading]="isLoading"
    [allowFiltering]="true" [filterMode]="'excelStyleFilter'" [primaryKey]="'id'" [outlet]="filteringOverlayOutlet"
    [columnSelection]="'multiple'" [cellSelection]="'none'">
    <igx-column [field]="'id'" [width]="'70px'" [hidden]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'category'" [width]="'120px'" [sortable]="true" [groupable]="true"></igx-column>
    <igx-column [field]="'type'" [width]="'100px'" [sortable]="true" [filterable]="false" [groupable]="true">
    </igx-column>
    <igx-column [field]="'contract'" [width]="'100px'" [sortable]="true" [groupable]="true">
    </igx-column>
    <igx-column [field]="'price'" [width]="'120px'" dataType="number" [cellClasses]="trends"
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
    <igx-column [field]="'change'" [width]="'120px'" dataType="number" [headerClasses]="'headerAlignSyle'"
      [sortable]="true" [cellClasses]="trendsChange">
    </igx-column>
    <igx-column [field]="'changeP'" [width]="'110px'" dataType="percent"
      [pipeArgs]="columnFormatChangeP" [sortable]="true" [cellClasses]="trendsChange">
    </igx-column>
    @for (c of columns; track c) {
      <igx-column [field]="c.field" [width]="c.width"
        [sortable]="c.sortable" [filterable]="c.filterable" [dataType]="c.type"
        [cellClasses]="c.cellClasses" [bodyTemplate]="c.bodyTemplate" [groupable]="c.groupable">
      </igx-column>
    }
  </igx-grid>
</div>
<div slot="content4" style="height: 100%;">
  <igx-grid #grid3 [data]="data | async" [isLoading]="isLoading"
    [allowFiltering]="true" [filterMode]="'excelStyleFilter'" [primaryKey]="'id'" [outlet]="filteringOverlayOutlet"
    [columnSelection]="'multiple'" [cellSelection]="'none'">
    <igx-column [field]="'id'" [width]="'70px'" [hidden]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'category'" [width]="'120px'" [sortable]="true" [groupable]="true"></igx-column>
    <igx-column [field]="'type'" [width]="'100px'" [sortable]="true" [filterable]="false" [groupable]="true">
    </igx-column>
    <igx-column [field]="'contract'" [width]="'100px'" [sortable]="true" [groupable]="true">
    </igx-column>
    <igx-column [field]="'price'" [width]="'120px'" dataType="number" [cellClasses]="trends"
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
    <igx-column [field]="'change'" [width]="'120px'" dataType="number" [headerClasses]="'headerAlignSyle'"
      [sortable]="true" [cellClasses]="trendsChange">
    </igx-column>
    <igx-column [field]="'changeP'" [width]="'110px'" dataType="percent"
      [pipeArgs]="columnFormatChangeP" [sortable]="true" [cellClasses]="trendsChange">
    </igx-column>
    @for (c of columns; track c) {
      <igx-column [field]="c.field" [width]="c.width"
        [sortable]="c.sortable" [filterable]="c.filterable" [dataType]="c.type"
        [cellClasses]="c.cellClasses" [bodyTemplate]="c.bodyTemplate" [groupable]="c.groupable">
      </igx-column>
    }
  </igx-grid>
</div>
<div slot="etfStockPrices" style="height: 100%;">
  <igx-grid #grid4 [data]="data | async" [isLoading]="isLoading"
    [allowFiltering]="true" [filterMode]="'excelStyleFilter'" [primaryKey]="'id'" [outlet]="filteringOverlayOutlet"
    [columnSelection]="'multiple'" [cellSelection]="'none'">
    <igx-paginator></igx-paginator>
    <igx-column [field]="'id'" [width]="'70px'" [hidden]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'category'" [width]="'120px'" [sortable]="true" [groupable]="true"></igx-column>
    <igx-column [field]="'type'" [width]="'100px'" [sortable]="true" [filterable]="false" [groupable]="true">
    </igx-column>
    <igx-column [field]="'contract'" [width]="'100px'" [sortable]="true" [groupable]="true">
    </igx-column>
    <igx-column [field]="'price'" [width]="'120px'" dataType="number" [cellClasses]="trends"
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
    <igx-column [field]="'change'" [width]="'120px'" dataType="number" [headerClasses]="'headerAlignSyle'"
      [sortable]="true" [cellClasses]="trendsChange">
    </igx-column>
    <igx-column [field]="'changeP'" [width]="'110px'" dataType="percent"
      [pipeArgs]="columnFormatChangeP" [sortable]="true" [cellClasses]="trendsChange">
    </igx-column>
    @for (c of columns; track c) {
      <igx-column [field]="c.field" [width]="c.width"
        [sortable]="c.sortable" [filterable]="c.filterable" [dataType]="c.type" [cellClasses]="c.cellClasses"
        [bodyTemplate]="c.bodyTemplate" [groupable]="c.groupable">
      </igx-column>
    }
  </igx-grid>
</div>
<ng-template #host gridHost>
</ng-template>
</igc-dockmanager>
<div [class]="isDarkTheme ? 'dark-theme' : 'light-theme'" #filteringOverlayOutlet="overlay-outlet" igxOverlayOutlet></div>
```
```scss
@use 'igniteui-dockmanager/dist/collection/styles/igc.themes';
@use '../../variables' as *;

.actionItem {
	margin-block-end: rem(20px);
}

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

.changePos,
.changeNeg,
.strongPositive,
.strongNegative {
	color: contrast-color(null, 'gray', 500) !important;

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
		color: color(null, 'success', 500, .8) !important;
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

igx-grid {
    --ig-size: var(--ig-size-small);

	.grid-area {
		margin-block-start: 1rem;
		overflow-y: hidden;
		overflow-x: hidden;
		width: 100%;
	}

	// selected
	.igx-grid__td--column-selected.changePos1,
	.igx-grid__td--column-selected.changePos2,
	.igx-grid__td--column-selected.changePos {
		background-color: color(null, 'success', 500) !important;

		.finjs-icons,
		.igx-grid__td-text {
			color: contrast-color(null, 'gray', 900);;
		}
	}

	.igx-grid__td--column-selected.changeNeg1,
	.igx-grid__td--column-selected.changeNeg2,
	.igx-grid__td--column-selected.changeNeg {
		background-color: color(null, 'error', 500) !important;

		.finjs-icons,
		.igx-grid__td-text {
			color: contrast-color(null, 'gray', 900);
		}
	}

	// selected
	.igx-grid__td--column-selected.strongPositive1,
	.igx-grid__td--column-selected.strongPositive2,
	.igx-grid__td--column-selected.strongPositive {
		background-color: color(null, 'success', 500) !important;

		.finjs-icons,
		.igx-grid__td-text {
			color: contrast-color(null, 'gray', 900);
		}
	}

	.igx-grid__td--column-selected.strongNegative1,
	.igx-grid__td--column-selected.strongNegative2,
	.igx-grid__td--column-selected.strongNegative {
		background-color: color(null, 'error', 500) !important;

		.finjs-icons,
		.igx-grid__td-text {
			color: contrast-color(null, 'gray', 900);
		}
	}
}

igx-select {
    --ig-size: var(--ig-size-small);
}
```
### Start the hub connection
The signal-r.service handles the connectivity and updates of the exposed manageable parameters _frequency_, _volume_ and _live-update state toggle_ (Start/Stop).
```ts
this.hubConnection = new signalR.HubConnectionBuilder()
        .configureLogging(signalR.LogLevel.Trace)
        .withUrl('https://www.infragistics.com/angular-apis/webapi/streamHub')
        .build();
    this.hubConnection
        .start()
        .then(() => {
            this.hasRemoteConnection = true;
            this.registerSignalEvents();
            this.broadcastParams(interval, volume, live, updateAll);
        })
        .catch(() => {});
```
Based on the specified frequency a total of 30 new updates will be received by the Grids from the server. A specific cellStyle classes are applied to the three columns that are handling the changes (Price, Change and Change in percent).
### Update frequency and data volume
By using the Action panel on the left, you can manage the frequency of the data feed and the volume of the requested data. All grids use the same data source. Feel free to use the other action elements to _stop the data feed_, change the _application theme_ or add _dynamically a DockSlot container_ with a igxGrid.
We use the 'updateparameters' method to request a new set of data with certain frequency. This method is part of the SignalR [stream hub implementation](https://github.com/IgniteUI/finjs-web-api/blob/master/WebAPI/Models/StreamHub.cs#L18).
```ts
this.hubConnection.invoke('updateparameters', frequency, volume, live, updateAll)
    .then(() => console.log('requestLiveData', volume))
    .catch(err => {
        console.error(err);
    });
```
### Dynamically create DockSlot and Grid components
By using the [ComponentFactoryResolver](https://angular.io/api/core/ComponentFactoryResolver) we are able to create DockSlot and Grid components on the fly.
### DockManager component
Take leverage of the [Dock Manager](../dock-manager.md) WebComponent and build your own webview by using the docket or floating panels. In order to add a new floating panel, go ahead and open the Action pane on the right and click the 'Add floating pane' button. Drag and drop the new pane at the desired location.
## API References
- [IgxGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)
- [IgxGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
- [IgxColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)
- [IgxGridRow](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridrow.html)
- [IgxTreeGridRow](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridrow.html)
- [IgxHierarchicalGridRow](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridrow.html)
- [IgxGridCell](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html)
## Additional Resources
<div class="divider--half"></div>
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)



