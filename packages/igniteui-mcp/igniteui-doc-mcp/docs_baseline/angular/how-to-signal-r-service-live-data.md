---
title: How to create ASP.NET Core SignalR service for live-data streaming.
_description: Modern data grid & dock manager are used for application creation along with ASP.NET Core SignalR.
_keywords: angular, signalr, .net core, infragistics
_tocName: Build Real-time SignalR App with .NET Core
---

# Real-time Web App with ASP.NET Core SignalR

In this topic, we’ll see how to create applications for both _streaming_ and _receiving_ data with **ASP.NET Core SignalR**.

What you'll need:

- A basic knowledge of ASP.NET Core and Angular.
- .NET Core 3.1 installed and IDE such as Visual Studio.

What you'll know by the end of this article:

- How to add and use SignalR.
- How to open Client connection and use the _method invocation_ concept to stream data per Client.
- How to consume the SignalR service with Angular application by using Observables.

SignalR takes advantage of several transports and it automatically selects the best available transport given the client and server's capabilities - [WebSockets, Server Send Events or Long-polling](https://stackoverflow.com/a/12855533/2940502).

When we talk in terms of [WebSockets](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/websockets?view=aspnetcore-5.0) (Putting SSE and Long-polling out of the equation) when the client is real-time connected to the server, whenever something happens the server will know to send a message over that WebSocket back to the client. With old-school clients and servers, the Long-polling transport would be used.

This is how SignalR handles modern clients and servers, it uses WebSockets under the hood when available, and gracefully falls back to other techniques and technologies when it isn't:

<img style="-webkit-box-shadow: 8px 9px 9px 5px #ccc; -moz-box-shadow: 8px 9px 9px 5px #ccc; box-shadow: 8px 9px 9px 5px #ccc; min-width: calc(100% - 950px); max-width: calc(100% - 400px);"
  src="../../../images/general/how-to/ws-party-1.jpg"
  data-src="../../../images/general/how-to/ws-party-1.jpg"
  alt="Real-time Web App with ASP.NET Core SignalR"
  title="Real-time Web App with ASP.NET Core SignalR" />

It's like a handshake, the Client and Server agree on what to use and they use it. This is called **process negotiation**.

<img style="-webkit-box-shadow: 8px 9px 9px 5px #ccc; -moz-box-shadow: 8px 9px 9px 5px #ccc; box-shadow: 8px 9px 9px 5px #ccc; min-width: calc(100% - 650px); max-width: calc(100% - 400px);"
  src="../../../images/general/how-to/ws-lets-party.jpg"
  data-src="../../../images/general/how-to/ws-lets-party.jpg"
  alt="Real-time Web App with Web Sockets"
  title="Real-time Web App with Web Sockets" />

## SignalR Example

The purpose of this demo is to showcase a financial screen board with a Real-time data stream using [ASP.NET Core SignalR](https://dotnet.microsoft.com/apps/aspnet/signalr).

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

## SignalR Server Configuration

### Create ASP.NET Core App

Let's see how to set up the ASP.NET Core SignalR application.
In Visual Studio from _File_ >> _New project_ choose ASP.NET Core Web Application and follow the setup. Feel free to follow [the official Microsoft documentation tutorial](https://docs.microsoft.com/en-us/aspnet/core/tutorials/signalr?view=aspnetcore-3.1&tabs=visual-studio) if you experience any configuration difficulties.

<img style="-webkit-box-shadow: 8px 9px 9px 5px #ccc; -moz-box-shadow: 8px 9px 9px 5px #ccc; box-shadow: 8px 9px 9px 5px #ccc; min-width: calc(100% - 650px); max-width: calc(100% - 400px);"
  src="../../../images/general/how-to/create-new-project.jpg"
  data-src="../../../images/general/how-to/create-new-project.jpg"
  alt="Create ASP.NET Core App project"
  title="Create ASP.NET Core App project" />


### SignalR Config Setup

Add the following code to the [Startup.cs file](https://github.com/IgniteUI/finjs-web-api/blob/master/WebAPI/Startup.cs):

- Endpoint part of the `Configure` method.

```cs
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
    endpoints.MapHub<StreamHub>("/streamHub");
});
```

- Add SignalR usage to the `ConfigureServices` method.

```cs
services.AddSignalR(options =>
{
    options.EnableDetailedErrors = true;
});
```

The changes above are adding SignalR to the ASP.NET Core dependency injection and routing system.

Now, let's set up additional basic configuration. Open the [properties/launchSettings.json](https://github.com/IgniteUI/finjs-web-api/blob/master/WebAPI/Properties/launchSettings.json#L11) file and modify it accordingly:

```json
"profiles": {
    "WebAPI": {
      "commandName": "Project",
      "launchBrowser": false,
      "applicationUrl": "https://localhost:5001;http://localhost:5000",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    }
  }
```

Our server-side project will run on `localhost:5001` and the client side will run on `localhost:4200`, so in order to establish communication between those two, we need to enable CORS. Let’s open the [Startup.cs](https://github.com/IgniteUI/finjs-web-api/blob/master/WebAPI/Startup.cs#L31) class and modify it:

```cs
public void ConfigureServices(IServiceCollection services)
{
    services.AddCors(options =>
    {
        options.AddPolicy("CorsPolicy", builder => builder
        .AllowAnyMethod()
        .AllowAnyHeader()
        .AllowCredentials()
        .WithOrigins("http://localhost:4200"));
    });
    ...

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        ...
        app.UseCors("CorsPolicy");
        ...
```

If you experience a specific problem with enabling Cross-origin resource sharing, check out the [official Microsoft topic](https://docs.microsoft.com/en-us/aspnet/core/signalr/security?view=aspnetcore-5.0#cross-origin-resource-sharing).

### SignalR Hub Setup

Let's start by explaining what is a [SignalR hub?](https://docs.microsoft.com/en-us/aspnet/core/signalr/hubs?view=aspnetcore-5.0#what-is-a-signalr-hub)
The SignalR Hub API enables you to call methods on connected clients from the server. In the server code, you define methods that are called by the client. In SignalR there is this concept called _Invocation_ - you can actually be calling the hub from the client with a particular method. In the client code, you define methods that are called from the server.

The actual hub lives on the server-side. Imagine you have _Clients_ and _the Hub_ is between all of them. You can say something to all the Clients with `Clients.All.doWork()` by invoking a method on the hub. This will goes to all connected clients. Also, you can communicate with only one client, which is the Caller, because he is the caller of that particular method.

<img style="-webkit-box-shadow: 8px 9px 9px 5px #ccc; -moz-box-shadow: 8px 9px 9px 5px #ccc; box-shadow: 8px 9px 9px 5px #ccc; min-width: calc(100% - 650px); max-width: calc(100% - 400px);"
  src="../../../images/general/how-to/ws-hub-callers.jpg"
  data-src="../../../images/general/how-to/ws-hub-callers.jpg"
  alt="SignalR Hub Setup with callers"
  title="SignalR Hub Setup with callers" />

We've created a [StreamHub class](https://github.com/IgniteUI/finjs-web-api/blob/d493f159e0a6f14b5ffea3e893f543f057fdc92a/WebAPI/Models/StreamHub.cs#L9) that inherits the base Hub class, which is responsible for managing connections, groups, and messaging. It's good to keep in mind that the Hub class is stateless and each new invocation of a certain method is in a new instance of this class. It's useless to save state in instance properties, rather we suggest using static properties, in our case we use static key-value pair collection to store data for each connected client.

Other useful properties of this class are _Clients_, _Context_, and _Groups_. They can help you to manage certain behavior based on the unique _ConnectionID_. Also, this class provides you with the following useful methods:

- OnConnectedAsync() - Called when a new connection is established with the hub.
- OnDisconnectedAsync(Exception) - Called when a connection with the hub is terminated.

They allow us to perform any additional logic when a connection is established or closed. In our application, we've also added _UpdateParameters_ method that gets a _Context connection ID_ and use it to send back data at a certain interval. As you can see we communicate over a unique _ConnectionID_ which prevents a streaming intervention from other Clients.

```cs
public async void UpdateParameters(int interval, int volume, bool live = false, bool updateAll = true)
{
    ...
    var connection = Context.ConnectionId;
    var clients = Clients;
    ...
    if (!clientConnections.ContainsKey(connection))
    {
        clientConnections.Add(connection, new TimerManager(async() =>
        {
            ...
            await Send(newDataArray, client, connection);
        }, interval));
    } else
    {
        clientConnections[connection].Stop();
        clientConnections[connection] = new TimerManager(async () =>
        {
            var client = clients.Client(connection);
            ..
            await Send(newDataArray, client, connection);
        }, interval);
    }
    ...
}
```

When the data is ready we transfer it by emitting a `transferdata` event with the help of `SendAsync` Method.

```cs
public async Task Send(FinancialData[] array, IClientProxy client, string connection)
{
    await client.SendAsync("transferdata", array);
}
...

// Called when a connection with the hub is terminated
public override Task OnDisconnectedAsync(Exception exception)
{
    StopTimer();
    clientConnections.Remove(Context.ConnectionId);
    return base.OnDisconnectedAsync(exception);
}
```

Our client application would be listening to the registered events:

```ts
private registerSignalEvents() {
    this.hubConnection.onclose(() => {
        this.hasRemoteConnection = false;
    });
    this.hubConnection.on('transferdata', (data) => {
        this.data.next(data);
    })
}
```

The public GitHub repository of the [ASP.NET Core Application could be found here](https://github.com/IgniteUI/finjs-web-api).

## Create SignalR Client Library

We will create an Angular project in order to consume the SignalR service.
The [GitHub repository with the actual application](https://github.com/IgniteUI/igniteui-angular-samples/tree/master/projects/app-lob/src/app/grid-finjs-dock-manager) can be found in the igniteui-angular-samples repository.

First, start by installing SignalR:

```
npm install @microsoft/signalr
```

Keep in mind that we are going to send the HTTP request towards our server, so we need HttpClientModule as well.

Below you will find the [signal-r.service.ts](https://github.com/IgniteUI/igniteui-angular-samples/blob/master/projects/app-lob/src/app/services/signal-r.service.ts#L10) file that handles the hub connection builder.

```ts
export class SignalRService implements OnDestroy {
    public data: BehaviorSubject<any[]>;
    public hasRemoteConnection: boolean;
    private hubConnection: signalR.HubConnection;
    ...

    constructor(private zone: NgZone, private http: HttpClient) {
        this.data = new BehaviorSubject([]);
    }
    ...

    // Start Hub Connection and Register events
    public startConnection = (interval = 500, volume = 1000, live = false,  updateAll = true) => {
        this.hubConnection = new signalR.HubConnectionBuilder()
            .configureLogging(signalR.LogLevel.Trace)
            .withUrl('https://www.infragistics.com/angular-apis/webapi/streamHub')
            .build();
        this.hubConnection
            .start()
            .then(() => {
                ...
                this.registerSignalEvents();
                this.broadcastParams(interval, volume, live, updateAll);
            })
            .catch(() => { ... });
    }

    // Change the broadcast parameters like frequency and data volume
    public broadcastParams = (frequency, volume, live, updateAll = true) => {
        this.hubConnection.invoke('updateparameters', frequency, volume, live, updateAll)
            .then(() => console.log('requestLiveData', volume))
            .catch(err => {
                console.error(err);
            });
    }

    // Register events
    private registerSignalEvents() {
        this.hubConnection.onclose(() => {
            this.hasRemoteConnection = false;
        });
        this.hubConnection.on('transferdata', (data) => {
            this.data.next(data);
        });
    }
    ...
```

In your app.component add use the newly created `startConnection` method

```ts
constructor(public dataService: SignalRService) {}
public ngOnInit() {
    this.dataService.startConnection(this.frequency, this.dataVolume, true, false);
}
...
```

### Grid Data Binding

As we have seen so far in our client code we set up a listener for `transferdata` event, which receives as an argument the updated data array. To pass the newly received data to our grid we use an observable. To set that, we need to bind the grid's data source to the data observable like so:

```html
<igx-grid [data]='data | async'> ... </igx-grid>
```

Every time when new data is received from the server to the client we call the `next()` method of the data observable.

```ts
    this.hubConnection.on('transferdata', (data) => {
        this.data.next(data);
    })
```

## Topic Takeaways

If you don’t want to refresh your application, rather just see when the data is updated, you should consider ASP.NET Core SignalR. I definitely recommend going for streaming content when you think your data is large, or if you want a smooth user experience without blocking the client by showing endless spinners.

Using SignalR Hub communication is easy and intuitive and with the help of Angular Observables, you can create a powerful application that uses data streaming with WebSockets.
