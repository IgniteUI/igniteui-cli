---
title: Data analysis capabilities | Angular Universal | Ignite UI for Angular | Infragistics
description: How to use chart integration functionality with Ignite UI for Angular and provide the data analysis means to achieve better business objectives.
keywords: data analysis, ignite ui for angular, infragistics
llms:
  description: "Data analysis is the process of examining, transforming, and arranging data in a specific way to generate useful information based on it."
_tocName: Data Analysis
---
# Data Analysis

Data analysis is the process of examining, transforming, and arranging data in a specific way to generate useful information based on it. It also allows for reaching certain outcomes and conclusions through analytical and logical reasoning.

**Note:** 
This functionality will be introduced in **Ignite UI for Angular** as external package in order to ease the configuration and limit the required code at minimum

## Data Analysis with DockManager

Go ahead and perform a `cell range selection` or `column selection` in order to enable the `Chart types view` based on the selected data. This view is part of [Dock Manager's](/dock-manager) right pane. From there you can:

- Choose specific chart type and visualize it in separate pane.
- Or use the `Data Analysis` context button to show different text formatting options.

```typescript
/* eslint-disable max-len */
import { AfterViewInit, ChangeDetectorRef, ViewContainerRef, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, Pipe, PipeTransform, QueryList, ViewChild, ViewChildren, TemplateRef, inject } from '@angular/core';
import { IgxChartIntegrationDirective, IgxConditionalFormattingDirective, IgxContextMenuDirective, OPTIONS_TYPE, CHART_TYPE, IDeterminedChartTypesArgs } from 'igniteui-angular-extras';
import { IgcDockManagerLayout, IgcDockManagerPaneType, IgcSplitPane, IgcSplitPaneOrientation } from 'igniteui-dockmanager';
import { FinancialData } from '../../data/financialData';
import { FloatingPanesService } from '../../services/floating-panes.service';
import { DockSlotComponent } from './dock-slot/dock-slot.component';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IColumnSelectionEventArgs, IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxDividerComponent } from 'igniteui-angular/directives';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { NgClass, DecimalPipe, TitleCasePipe, CurrencyPipe } from '@angular/common';
import { debounceTime } from 'rxjs/operators';

@Pipe({
    name: 'filterType'
})
export class FilterTypePipe implements PipeTransform {
    public transform(collection: CHART_TYPE[], type: string): CHART_TYPE[] {
        return collection.filter(types => types.indexOf(type) !== -1 && types.indexOf(type, type.length - 1) === -1);
    }
}

@Pipe({
    name: 'hastDuplicateLayouts'
})
export class HastDuplicateLayouts implements PipeTransform {
    public transform(contentId: string, layout: IgcDockManagerLayout, chartTypes) {
        const count = this.hasDuplicateContentID(layout, contentId, 0);
        if (count === 0 && (chartTypes[contentId] || Object.keys(chartTypes).indexOf(contentId) !== -1)) {
            delete chartTypes[contentId];
            return false;
        }
        return count >= 1;

    }

    private hasDuplicateContentID = (ob, contentId, count) => {

        if (ob['contentId'] && ob['contentId'] === contentId) {
            count++;
        }

        for (const i in ob) {
            if (!ob.hasOwnProperty(i)) { continue; }

            if ((typeof ob[i]) === 'object') {
                count = this.hasDuplicateContentID(ob[i], contentId, count);
            }
        }
        return count;
    };
}

@Component({
    selector: 'app-data-analysis-dock-manager',
    templateUrl: './data-analysis-dock-manager.component.html',
    styleUrls: ['./data-analysis-dock-manager.component.scss'],
    providers: [FloatingPanesService],
    imports: [IgxGridComponent, IgxConditionalFormattingDirective, IgxChartIntegrationDirective, IgxContextMenuDirective, IgxBadgeComponent, IgxColumnComponent, IgxCellTemplateDirective, NgClass, IgxDividerComponent, DockSlotComponent, DecimalPipe, TitleCasePipe, CurrencyPipe, FilterTypePipe, HastDuplicateLayouts],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DataAnalysisDockManagerComponent implements OnInit, AfterViewInit {
    private cdr = inject(ChangeDetectorRef);
    private paneService = inject(FloatingPanesService);

    @ViewChild('grid', { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;

    @ViewChild('dock', { read: ElementRef })
    public dockManager: ElementRef<HTMLIgcDockmanagerElement>;

    @ViewChild(IgxChartIntegrationDirective, { read: IgxChartIntegrationDirective, static: true })
    public chartIntegration: IgxChartIntegrationDirective;

    @ViewChildren(DockSlotComponent)
    public dockSlots: QueryList<DockSlotComponent>;

    @ViewChild('template', { read: TemplateRef })
    public emptyChartTemplate: TemplateRef<any>;

    public availableCharts: CHART_TYPE[] = [];
    public allCharts: CHART_TYPE[] = [];
    public data;
    public chartData = [];
    public selectedCharts = {};
    public headersRenderButton = false;
    public chartTypes = ['Column', 'Area', 'Bar', 'Line', 'Scatter', 'Pie'];

    public ngOnInit() {
        this.data = FinancialData.generateData(1000);
    }

    public ngAfterViewInit() {
        this.allCharts = this.chartIntegration.getAllChartTypes();
        this.cdr.detectChanges();
        const pieChartOptions = {
            labelsPosition: 4,
            allowSliceExplosion: true,
            sliceClick: (evt) => { evt.args.isExploded = !evt.args.isExploded; },
            formatLabel: (context) => `${context.percentValue.toFixed(2)}%`
        };

        this.chartIntegration.setChartComponentOptions(CHART_TYPE.Pie, OPTIONS_TYPE.Chart, pieChartOptions);
        this.chartIntegration.getAvailableCharts()
            .filter(chart => chart.indexOf('Scatter') === -1 ||
                chart.indexOf('Bar') === -1 ||
                chart !== CHART_TYPE.Pie)
            .forEach(chart => this.chartIntegration.setChartComponentOptions(chart, OPTIONS_TYPE.XAxis, { labelAngle: 30 }));

        this.chartIntegration.chartTypesDetermined.subscribe((args: IDeterminedChartTypesArgs) => {
            if (args.chartsAvailability.size === 0 || args.chartsForCreation.length === 0) {
                this.chartIntegration.disableCharts(this.allCharts);
            } else {
                args.chartsAvailability.forEach((isAvailable, chart) => {
                    if (args.chartsForCreation.indexOf(chart) === -1) {
                        this.chartIntegration.disableCharts([chart]);
                    } else {
                        this.chartIntegration.enableCharts([chart]);
                    }
                });
            }
            this.availableCharts = this.chartIntegration.getAvailableCharts();
        });
        this.cdr.detectChanges();

        this.grid.rangeSelected.subscribe(range => {
            this.createChartCommonLogic();
        });

        this.grid.columnSelectionChanging.pipe(debounceTime(100)).subscribe((args: IColumnSelectionEventArgs) => {
            this.createChartCommonLogic();
        });
    }

    // eslint-disable-next-line @typescript-eslint/member-ordering
    public docLayout: IgcDockManagerLayout = {
        rootPane: {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            panes: [
                {
                    type: IgcDockManagerPaneType.documentHost,
                    rootPane: {
                        type: IgcDockManagerPaneType.splitPane,
                        size: 75,
                        orientation: IgcSplitPaneOrientation.horizontal,
                        panes: [
                            {
                                type: IgcDockManagerPaneType.contentPane,
                                contentId: 'grid',
                                header: 'Grid',
                                allowClose: false
                            }
                        ]
                    }
                },
                {
                    type: IgcDockManagerPaneType.contentPane,
                    contentId: 'chart-types-content',
                    header: 'Chart Types',
                    size: 25,
                    allowClose: false
                }
            ]
        },
        floatingPanes: []
    };

    public getChartHostFromSlot(type: CHART_TYPE) {
        return this.dockSlots.find(s => s.id === type).chartHost;
    }

    public formatCurrency(value: number) {
        return '$' + value.toFixed(3);
    }

    public createChart(type: CHART_TYPE) {
        const floatingPane: IgcSplitPane = {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            panes: [
                {
                    type: IgcDockManagerPaneType.contentPane,
                    header: type,
                    contentId: type
                }
            ]
        };
        const splitPane: IgcSplitPane = {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            floatingWidth: 550,
            floatingHeight: 350,
            panes: [floatingPane]
        };

        this.paneService.appendPane(splitPane);
        const chartHost = this.getChartHostFromSlot(type);
        chartHost.viewContainerRef.clear();
        const chart = this.chartIntegration.chartFactory(type, chartHost.viewContainerRef);

        this.dockManager.nativeElement.layout.floatingPanes.push(splitPane);
        this.docLayout = { ...this.dockManager.nativeElement.layout };
        this.selectedCharts[type] = chart;
        this.cdr.detectChanges();
    }

    public createChartCommonLogic() {
        if (Object.keys(this.selectedCharts).length !== 0) {
            setTimeout(() => {
                Object.keys(this.selectedCharts).forEach((chart: string) => {
                    const c = chart as CHART_TYPE;
                    const chartHost = this.getChartHostFromSlot(c);
                    if (this.availableCharts.indexOf(c) !== -1) {
                        if (c !== CHART_TYPE.Pie && typeof this.selectedCharts[c] === 'object') {
                            this.selectedCharts[c] = this.chartIntegration.chartFactory(c, null, this.selectedCharts[c]);
                        } else {
                            chartHost.viewContainerRef.clear();
                            this.selectedCharts[c] = this.chartIntegration.chartFactory(c, chartHost.viewContainerRef);
                        }
                    } else {
                        this.clearViewContainer(chartHost.viewContainerRef);
                        const embeddedView = chartHost.viewContainerRef.createEmbeddedView(this.emptyChartTemplate);
                        embeddedView.detectChanges();
                        this.selectedCharts[c] = 'Empty';
                    }
                });
            });
        }
    }

    private clearViewContainer(viewContainerRef: ViewContainerRef) {
        for (let i = viewContainerRef.length - 1; i >= 0; i--) {
            const viewRef = viewContainerRef.get(i);
            if (viewRef) {
                const componentInstance = (viewRef as any).context;
                if (componentInstance && (componentInstance as any).destroy) {
                    (componentInstance as any).destroy();
                }
            }
        }
        viewContainerRef.clear();
    }
}
```
```html
<igc-dockmanager #dock class="light-theme dock-m-position" [layout]="docLayout">
  <div slot="grid" igxOverlayOutlet style="height: 100%">
    <igx-grid #grid columnSelection="multiple" [moving]="true" igxChartIntegration igxConditionalFormatting igxContextMenu
      primaryKey="id" [data]="data" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
      <igx-column [sortable]="true"  [disablePinning]="true" [disableHiding]="true" field="id" [hidden]="true"></igx-column>
      <igx-column [sortable]="true"  [disablePinning]="true" [disableHiding]="true" field="category" [width]="'110px'"></igx-column>
      <igx-column [sortable]="true"  [disablePinning]="true" [disableHiding]="true" field="type" [filterable]="false" [width]="'130px'"></igx-column>
      <igx-column [sortable]="true"  [disablePinning]="true" [disableHiding]="true" field="country"  [width]="'100px'"></igx-column>
      <igx-column [sortable]="true"  [disablePinning]="true" [disableHiding]="true" field="price" dataType="number" [width]="'120px'" >
        <ng-template igxCell let-cell="cell">
          <div class="finjs-icons">
            <span>{{cell.value | currency:'USD':'symbol':'1.4-4'}}</span>
          </div>
        </ng-template>
      </igx-column>
      <igx-column [sortable]="true"  [disablePinning]="true" [disableHiding]="true" field="startY" [width]="'100px'" dataType="number" [formatter]="formatCurrency">
      </igx-column>
      <igx-column [sortable]="true"  [disablePinning]="true" [disableHiding]="true" field="startYDiff" dataType="number" [width]="'120px'" >
        <ng-template igxCell let-cell="cell">
          <div class="finjs-icons">
            <span>{{cell.value | number:'1.4-4'}}%</span>
          </div>
        </ng-template>
      </igx-column>
      <igx-column [sortable]="true"  [disablePinning]="true" [disableHiding]="true" field="buy" [width]="'100px'" dataType="number" [formatter]="formatCurrency" >
      </igx-column>
      <igx-column [sortable]="true"  [disablePinning]="true" [disableHiding]="true" field="buyDiff" dataType="number" [width]="'120px'" >
        <ng-template igxCell let-cell="cell">
          <div class="finjs-icons">
            <span>{{cell.value | number:'1.4-4'}}%</span>
          </div>
        </ng-template>
      </igx-column>
      <igx-column [sortable]="true"  [disablePinning]="true" [disableHiding]="true" field="highY" [width]="'100px'" dataType="number" [formatter]="formatCurrency"
        >
      </igx-column>
      <igx-column [sortable]="true"  [disablePinning]="true" [disableHiding]="true" field="highYDiff" [width]="'120px'" dataType="number" [formatter]="formatCurrency"
        >
        <ng-template igxCell let-cell="cell">
          <div class="finjs-icons">
            <span>{{cell.value | currency:'USD':'symbol':'1.4-4'}}</span>
          </div>
        </ng-template>
      </igx-column>
      <igx-column [sortable]="true"  [disablePinning]="true" [disableHiding]="true" field="openPrice" dataType="number" [formatter]="formatCurrency"
        [width]="'130px'">
        <ng-template igxCell let-cell="cell">
          <div class="finjs-icons">
            <span>{{cell.value | currency:'USD':'symbol':'1.4-4'}}</span>
          </div>
        </ng-template>
      </igx-column>
      <igx-column [sortable]="true"  [disablePinning]="true" [disableHiding]="true" field="openPriceDiff" dataType="number" [width]="'140px'" >
        <ng-template igxCell let-cell="cell">
          <div class="finjs-icons">
            <span>{{cell.value | number:'1.4-4'}}%</span>
          </div>
        </ng-template>
      </igx-column>
      <igx-column [sortable]="true"  [disablePinning]="true" [disableHiding]="true" field="lowY" [width]="'100px'" dataType="number" [formatter]="formatCurrency">
      </igx-column>
      <igx-column [sortable]="true"  [disablePinning]="true" [disableHiding]="true" field="lowYDiff" dataType="number" [width]="'120px'" >
        <ng-template igxCell let-cell="cell">
          <div class="finjs-icons">
            <span>{{cell.value | number:'1.4-4'}}%</span>
          </div>
        </ng-template>
      </igx-column>
      <igx-column [sortable]="true"  [disablePinning]="true" [disableHiding]="true" field="highD" [width]="'100px'" dataType="number" [headerClasses]="'headerAlignSyle'"
        [formatter]="formatCurrency">
      </igx-column>
      <igx-column [sortable]="true"  [disablePinning]="true" [disableHiding]="true" field="highDDiff" dataType="number" [width]="'120px'" >
        <ng-template igxCell let-cell="cell">
          <div class="finjs-icons">
            <span>{{cell.value | number:'1.4-4'}}%</span>
          </div>
        </ng-template>
      </igx-column>
      <igx-column [sortable]="true"  [disablePinning]="true" [disableHiding]="true" field="lowD" [width]="'100px'" dataType="number" [formatter]="formatCurrency">
      </igx-column>
      <igx-column [sortable]="true"  [disablePinning]="true" [disableHiding]="true" field="lowDDiff" dataType="number" [width]="'120px'" >
        <ng-template igxCell let-cell="cell">
          <div class="finjs-icons">
            <span>{{cell.value | number:'1.4-4'}}%</span>
          </div>
        </ng-template>
      </igx-column>
      <igx-column [sortable]="true"  [disablePinning]="true" [disableHiding]="true" field="sell" [width]="'110px'" dataType="number" [formatter]="formatCurrency" >
      </igx-column>
      <igx-column [sortable]="true"  [disablePinning]="true" [disableHiding]="true" field="sellDiff" dataType="number" [width]="'120px'" >
        <ng-template igxCell let-cell="cell">
          <div class="finjs-icons">
            <span>{{cell.value | number:'1.4-4'}}%</span>
          </div>
        </ng-template>
      </igx-column>
      <igx-column [sortable]="true"  [disablePinning]="true" [disableHiding]="true" field="region"></igx-column>
      <igx-column [sortable]="true"  [disablePinning]="true" [disableHiding]="true" field="contract"></igx-column>
      <igx-column [sortable]="true"  [disablePinning]="true" [disableHiding]="true" field="settlement" [width]="'150px'" ></igx-column>
    </igx-grid>
  </div>

  <div slot="chart-types-content" class="chart-types-container">
    @for (chartType of chartTypes; track chartType) {
      <div>
        @if ((allCharts |filterType:chartType).length > 0) {
          <div class="wrapper">
            <div>{{chartType | titlecase}} Chart</div>
            <div class="types-section">
              @for (chart of (allCharts | filterType: chartType); track chart; let i = $index) {
                <div
                  (click)="createChart(chart)"
                  title="{{chart}}"
                  [ngClass]="{'disabled': availableCharts.indexOf(chart) === -1, 'selected': chart | hastDuplicateLayouts: dock.layout: selectedCharts}"
                  style="width: 60px; margin-right: 20px; cursor: pointer; position: relative;">
                  <img src="assets/images/svg/charts/{{chart}}.svg" />
                  @if (selectedCharts[chart]) {
                    <igx-badge icon="check"></igx-badge>
                  }
                </div>
              }
            </div>
            <igx-divider></igx-divider>
          </div>
        }
      </div>
    }
  </div>

  @for (chart of allCharts; track chart) {
    <app-dock-slot  [id]="chart" >
    </app-dock-slot>
  }
</igc-dockmanager>

<ng-template #template>
    <span>Incompatible data</span>
</ng-template>
```
```scss
@use '../../../variables' as *;
@import 'igniteui-dockmanager/dist/collection/styles/igc.themes.css';

:host {
    width: 100%;
    overflow-y: auto;
}


.grid-chart-contextmenu-wrapper {
    width: 100%;
    height: 95%;
}

.dock-m-position {
    width: 100vw;
    height: 100vh;
    padding: 0 rem(8px) rem(8px) rem(8px);
    --igc-pane-content-background: #{contrast-color($color: 'gray', $variant: 900)};

    igx-grid {
        --ig-size: var(--ig-size-small);
    }
}

.chart-types-container {
    overflow-y: auto;
    height: 100%;
    width: 100%;
    padding-left: rem(15px);
}

.selection-area {
    width: 100%;
    height: 90%;
    display: inline-flex;
    position: absolute;

    .chart-area {
        margin-top: 1rem;
        overflow-y: hidden;
        overflow-x: hidden;
        width: 100%;
    }


}

$custom-badge-theme: badge-theme(
    $border-color: contrast-color($color: 'gray', $variant: 900),
    $icon-color: contrast-color($color: 'gray', $variant: 900),
    $text-color: contrast-color($color: 'gray', $variant: 50),
    $background-color: contrast-color($color: 'gray', $variant: 500),
    $border-radius: 50%
);
:host ::ng-deep {
    .selected {
        igx-badge {
            & {
                @include tokens($custom-badge-theme);
            }

            position: absolute;
            bottom: 0;
            left: 18px;
        }
    }

    .wrapper {
        padding: 3px;

        .types-section {

            display: flex;
            flex-wrap: wrap;

            button {
                margin-right: 4px;
                margin-top: 4px;
            }
        }

        .igx-divider {
            margin-top: 5px !important;
            background: contrast-color($color: 'gray', $variant: 50) !important;
            width: 95% !important;
        }
    }

    .analytics-btn {
        @include tokens(
            contained-button-theme(
                $foreground: contrast-color($color: 'gray', $variant: 900),
                $background: color($color: 'success', $variant: 500, $opacity: .8),
                $hover-background: color($color: 'success'),
                $hover-foreground: contrast-color($color: 'gray', $variant: 900),
                $focus-background: color($color: 'success'),
                $focus-foreground: contrast-color($color: 'gray', $variant: 900),
                $border-radius: 0
            )
        );
        z-index: 9;
        position: absolute;
    }

    .ig-chart-legend-items-list {
        height: 20%;
        display: inline-flex;
        flex-wrap: wrap;
        margin-bottom: 1rem;
    }

    .igx-grid__grouparea {
        max-height: 100%;
        height: auto;
    }

}

.selected, .disabled {
    pointer-events: none;
}

.disabled {
    opacity: .5;
}


.disableButton {
    opacity: .3;
    pointer-events: none;
}

$font-family: 'Titillium Web', 'Roboto', 'Helvetica Neue', sans-serif;

.tab-options-wrapper {
    display: flex;
    flex-flow: column;
    max-height: rem(110px);
    max-width: rem(310px);
    margin: -0.8rem -1.5rem -0.8rem -1.5rem;

    .header {
        font-size: 0.7rem;
        display: flex;
        width: 100%;
        padding: 0 0.2rem 0 0.4rem;
        font-weight: 650;
        border-bottom: 1px solid color($color: 'gray', $variant: 100);
        align-self: center;
        font-family: $font-family;
        letter-spacing: 1.7px;
        color: contrast-color($color: 'gray', $variant: 50);
    }
}

.tab-option {
    padding: .5rem 0.4rem 0.4rem 0.4rem;
    height: rem(110px);
    width: rem(310px);
    display: inline-flex;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    align-content: center;
}

.action {
    cursor: pointer;

    opacity: .62;

    &.selected--condition {
        pointer-events: none;
        opacity: 1;
    }

    .name {
        font-size: .9rem;
        font-weight: 500;
        text-align: center;
        font-family: $font-family;
    }
}

.clear-action {
    cursor: pointer;
    display: flex;
    flex-flow: column;
    margin-left: auto;
    justify-content: center;
}


.btn {

    &.condition {
        padding-right: 16px;
    }

    display: inline-flex;
    flex-flow: column;
    align-items: center;

    img {
        pointer-events: none;
    }

    span {
        pointer-events: none;
    }
}
```

**Note:** 
The [Dock Manager Web component](/dock-manager) provides means to manage the layout of the application through panes, and allowing the end-users to customize it further by pinning, resizing, moving and hiding panes. After selecting data, go ahead and create a couple of charts and pin them (by dragging) to the available areas

Keep in mind (sample related):

- On new data selection chart data will be updated.
- If multi-cell range selection is applied, only the `Text formatting` functionality will be available.
- If selected data is not compatible for any of the charts - an "Incompatible data" warning message will be shown.

## Data Analysis Package

You can start using this functionality by following the steps below. Keep in mind that **igniteui-angular-extras** package is only available through our [private npm feed](https://packages.infragistics.com/npm/js-licensed/). If you have a [valid commercial license](/general/ignite-ui-licensing#license-agreements), you will have access to the private feed.

Let's start with:

- Installing the package in your application

```cmd
npm install @infragistics/igniteui-angular-extras
```

- Installing the package peer dependencies

```cmd
npm install @infragistics/igniteui-angular igniteui-angular-core igniteui-angular-charts
```

- After the installation of the packages go ahead and:
  - Add the `IgxExtrasModule` to your app.module.ts
  - Apply `igxChartIntegration`, `igxConditionalFormatting`, `igxContextMenu` directives to your grid

```html
<igx-grid #grid1 igxChartIntegration igxConditionalFormatting igxContextMenu
    [data]="localData" [autoGenerate]="true">
    <igx-paginator>
    </igx-paginator>
</igx-grid>
```

And that's it! You can now perform **cell range selection** and follow the data analysis flow.

## Data Analysis Button

The data analysis button is the outlet to visualize your selected data in various ways:

This way every range selection performed in the grid can be easily analyzed in a single click.

The button is rendered on every range selection at the **bottom-right** of the selection and hides when the selection is inactive. Horizontal and vertical scrolling reposition the button so that it is always rendered at its designated position.

## Chart Integration

This section introduces Grid's integration with charting functionality, which allows the end user to visualize a chart based on Grid's selected data and choose different chart types if needed.

The chart will be shown by selecting a range of cells and by clicking on the show analysis button.

**Note:** 
The chart creation option is only available when there are numeric values in the selected data.

```typescript
/* eslint-disable max-len */
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IgxChartIntegrationDirective, IgxContextMenuDirective, IgxConditionalFormattingDirective,  OPTIONS_TYPE, CHART_TYPE } from 'igniteui-angular-extras';

import { FinancialData } from '../data/financialData';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { DecimalPipe, CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-grid-dynamic-chart-data',
    templateUrl: './grid-dynamic-chart-data.component.html',
    styleUrls: ['./grid-dynamic-chart-data.component.scss'],
    imports: [IgxGridComponent, IgxChartIntegrationDirective, IgxConditionalFormattingDirective, IgxContextMenuDirective, IgxColumnComponent, IgxCellTemplateDirective, DecimalPipe, CurrencyPipe]
})
export class GridDynamicChartDataComponent implements OnInit, AfterViewInit {

    public data;

    @ViewChild(IgxChartIntegrationDirective, {static: false})
    public chartDirective: IgxChartIntegrationDirective;

    public ngOnInit() {
        this.data = FinancialData.generateData(1000);
    }

    public ngAfterViewInit() {
      const pieChartOptions = {
        labelsPosition: 4,
        allowSliceExplosion: true,
        sliceClick: (evt) => { evt.args.isExploded = !evt.args.isExploded; },
        formatLabel: (context) => `${context.percentValue.toFixed(2)}%`
      };

      this.chartDirective.setChartComponentOptions(CHART_TYPE.Pie, OPTIONS_TYPE.Chart, pieChartOptions);
      this.chartDirective.getAvailableCharts()
                         .filter(chart => chart.indexOf('Scatter') === -1 ||
                                          chart.indexOf('Bar') === -1 ||
                                          chart !== CHART_TYPE.Pie)
                         .forEach(chart => this.chartDirective.setChartComponentOptions(chart, OPTIONS_TYPE.XAxis, {labelAngle: 30}));
    }

    public formatCurrency(value: number) {
        return '$' + value.toFixed(3);
    }
}
```
```html
<div class="grid-chart-contextmenu-wrapper">
    <igx-grid #grid igxChartIntegration igxConditionalFormatting igxContextMenu primaryKey='id' [data]="data">
        <igx-column field="id" [hidden]="true"></igx-column>
        <igx-column field="category" [editable]="true" [width]="'110px'"></igx-column>
        <igx-column field="type" [editable]="true" [filterable]="false" [width]="'130px'"></igx-column>
        <igx-column field="country" [editable]="true" [width]="'100px'"></igx-column>
        <igx-column field="price" dataType="number" [width]="'120px'" [editable]="true">
            <ng-template igxCell let-cell="cell">
                <div class="finjs-icons">
                    <span>{{cell.value | currency:'USD':'symbol':'1.4-4'}}</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="startY" [width]="'100px'" dataType="number" [formatter]="formatCurrency" [editable]="true">
        </igx-column>
        <igx-column field="startYDiff" dataType="number" [width]="'120px'" [editable]="true">
            <ng-template igxCell let-cell="cell">
                <div class="finjs-icons">
                    <span>{{cell.value | number:'1.4-4'}}%</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="buy" [width]="'100px'" dataType="number" [formatter]="formatCurrency" [editable]="true">
        </igx-column>
        <igx-column field="buyDiff" dataType="number" [width]="'120px'" [editable]="true">
            <ng-template igxCell let-cell="cell">
                <div class="finjs-icons">
                    <span>{{cell.value | number:'1.4-4'}}%</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="highY" [width]="'100px'" dataType="number" [formatter]="formatCurrency" [editable]="true">
        </igx-column>
        <igx-column field="highYDiff" [width]="'120px'" dataType="number" [formatter]="formatCurrency"
            [editable]="true">
            <ng-template igxCell let-cell="cell">
                <div class="finjs-icons">
                    <span>{{cell.value | currency:'USD':'symbol':'1.4-4'}}</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="openPrice" dataType="number" [formatter]="formatCurrency" [editable]="true"
            [width]="'130px'">
            <ng-template igxCell let-cell="cell">
                <div class="finjs-icons">
                    <span>{{cell.value | currency:'USD':'symbol':'1.4-4'}}</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="openPriceDiff" dataType="number" [width]="'140px'" [editable]="true">
            <ng-template igxCell let-cell="cell">
                <div class="finjs-icons">
                    <span>{{cell.value | number:'1.4-4'}}%</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="lowY" [width]="'100px'" dataType="number" [formatter]="formatCurrency" [editable]="true">
        </igx-column>
        <igx-column field="lowYDiff" dataType="number" [width]="'120px'" [editable]="true">
            <ng-template igxCell let-cell="cell">
                <div class="finjs-icons">
                    <span>{{cell.value | number:'1.4-4'}}%</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="highD" [width]="'100px'" dataType="number" [headerClasses]="'headerAlignSyle'"
            [editable]="true" [formatter]="formatCurrency">
        </igx-column>
        <igx-column field="highDDiff" dataType="number" [width]="'120px'" [editable]="true">
            <ng-template igxCell let-cell="cell">
                <div class="finjs-icons">
                    <span>{{cell.value | number:'1.4-4'}}%</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="lowD" [width]="'100px'" dataType="number" [formatter]="formatCurrency" [editable]="true">
        </igx-column>
        <igx-column field="lowDDiff" dataType="number" [width]="'120px'" [editable]="true">
            <ng-template igxCell let-cell="cell">
                <div class="finjs-icons">
                    <span>{{cell.value | number:'1.4-4'}}%</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="sell" [width]="'110px'" dataType="number" [formatter]="formatCurrency" [editable]="true">
        </igx-column>
        <igx-column field="sellDiff" dataType="number" [width]="'120px'" [editable]="true">
            <ng-template igxCell let-cell="cell">
                <div class="finjs-icons">
                    <span>{{cell.value | number:'1.4-4'}}%</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="region" [editable]="true"></igx-column>
        <igx-column field="contract" [editable]="true"></igx-column>
        <igx-column field="settlement" [width]="'150px'" [editable]="true"></igx-column>
    </igx-grid>
  </div>
```
```scss
:host ::ng-deep {
    .grid-chart-contextmenu-wrapper {
        --ig-size: var(--ig-size-small);
        width: 90%;
        margin: 50px auto;
        height: 80%;
    }
}
```

We currently support the following Chart types:

- [Column Chart](/charts/types/column-chart),
[Area Chart](/charts/types/stacked-chart),
[Line Chart](/charts/types/line-chart),
[Bar Chart](/charts/types/line-chart),
- [Stacked Chart](/charts/types/stacked-chart),
[Stacked 100% Chart](/charts/types/stacked-chart),
- [Pie Chart](/charts/types/pie-chart),
[Scatter Chart](/charts/types/stacked-chart),
[Bubble Chart](/charts/types/bubble-chart)
 In order to show meaningful Bubble Chart we disable the preview when the data is not in valid format.

## Conditional Cell Formatting

If you have a Grid with thousands of rows of data it would be very difficult to see patterns and trends just from examining the raw information. Similar to charts and sparklines, `Conditional formatting` provides another way to visualize data and make it easier to understand.

Understanding conditional formatting - it allows for applying formatting such as colors and data bars to cells based on `their value` in the range selection. The [sample below](#demo) demonstrates how you can configure the Grid to apply `Conditional Formatting`. It depends on the `Conditional formatting selection type` what condition `rules` will be shown. Below you will find the predefined styles (presets) that you can use in order to quickly apply conditional formatting to your data. The formatting of a range gets cleared when performing formatting on different range or through the clear button. The clear button is only active when there is an applied formatting.

### Number range selection

- `Data Bars` - Data bars can help you spot larger and smaller numbers, such as top-selling and bottom-selling products. This preset makes it very easy to visualize values in a range of selected cells. A longer bar represents a higher value. A cell that holds  value of 0 has no data bar all other cells are filled proportionally. Positive values are with `green` color  and  negative values will be `red`

> `Lowest threshold` - Below 33% of the maximum cell value in range selection.
> `Highest threshold` - Above 66% of the maximum cell value in range selection.

- `Top 10%` - Use this preset to highlight the values which are equivalent to top 10% of the selected data.

- `Greater than` - This preset marks all values `Greater than the average`
- `Duplicate values` - Marks all duplicate values.
- `Unique values` - All cell values that are unique will be marked (`blue` background color).

- `Empty`- Marks all cells with `undefined` values

### Text range selection

- `Text contains` - Marks all cells that contain the cell value from the `top-left most selected cell`. Example:

- `Duplicate values` - Marks all duplicate values.
- `Unique values` - All cell values that are unique will be marked (`blue` background color).
- `Empty`- Marks all cells with `undefined` values

### Demo

```typescript
/* eslint-disable max-len */
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IgxChartIntegrationDirective, IgxContextMenuDirective, IgxConditionalFormattingDirective,  OPTIONS_TYPE, CHART_TYPE } from 'igniteui-angular-extras';

import { FinancialData } from '../data/financialData';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { DecimalPipe, CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-grid-dynamic-chart-data',
    templateUrl: './grid-dynamic-chart-data.component.html',
    styleUrls: ['./grid-dynamic-chart-data.component.scss'],
    imports: [IgxGridComponent, IgxChartIntegrationDirective, IgxConditionalFormattingDirective, IgxContextMenuDirective, IgxColumnComponent, IgxCellTemplateDirective, DecimalPipe, CurrencyPipe]
})
export class GridDynamicChartDataComponent implements OnInit, AfterViewInit {

    public data;

    @ViewChild(IgxChartIntegrationDirective, {static: false})
    public chartDirective: IgxChartIntegrationDirective;

    public ngOnInit() {
        this.data = FinancialData.generateData(1000);
    }

    public ngAfterViewInit() {
      const pieChartOptions = {
        labelsPosition: 4,
        allowSliceExplosion: true,
        sliceClick: (evt) => { evt.args.isExploded = !evt.args.isExploded; },
        formatLabel: (context) => `${context.percentValue.toFixed(2)}%`
      };

      this.chartDirective.setChartComponentOptions(CHART_TYPE.Pie, OPTIONS_TYPE.Chart, pieChartOptions);
      this.chartDirective.getAvailableCharts()
                         .filter(chart => chart.indexOf('Scatter') === -1 ||
                                          chart.indexOf('Bar') === -1 ||
                                          chart !== CHART_TYPE.Pie)
                         .forEach(chart => this.chartDirective.setChartComponentOptions(chart, OPTIONS_TYPE.XAxis, {labelAngle: 30}));
    }

    public formatCurrency(value: number) {
        return '$' + value.toFixed(3);
    }
}
```
```html
<div class="grid-chart-contextmenu-wrapper">
    <igx-grid #grid igxChartIntegration igxConditionalFormatting igxContextMenu primaryKey='id' [data]="data">
        <igx-column field="id" [hidden]="true"></igx-column>
        <igx-column field="category" [editable]="true" [width]="'110px'"></igx-column>
        <igx-column field="type" [editable]="true" [filterable]="false" [width]="'130px'"></igx-column>
        <igx-column field="country" [editable]="true" [width]="'100px'"></igx-column>
        <igx-column field="price" dataType="number" [width]="'120px'" [editable]="true">
            <ng-template igxCell let-cell="cell">
                <div class="finjs-icons">
                    <span>{{cell.value | currency:'USD':'symbol':'1.4-4'}}</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="startY" [width]="'100px'" dataType="number" [formatter]="formatCurrency" [editable]="true">
        </igx-column>
        <igx-column field="startYDiff" dataType="number" [width]="'120px'" [editable]="true">
            <ng-template igxCell let-cell="cell">
                <div class="finjs-icons">
                    <span>{{cell.value | number:'1.4-4'}}%</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="buy" [width]="'100px'" dataType="number" [formatter]="formatCurrency" [editable]="true">
        </igx-column>
        <igx-column field="buyDiff" dataType="number" [width]="'120px'" [editable]="true">
            <ng-template igxCell let-cell="cell">
                <div class="finjs-icons">
                    <span>{{cell.value | number:'1.4-4'}}%</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="highY" [width]="'100px'" dataType="number" [formatter]="formatCurrency" [editable]="true">
        </igx-column>
        <igx-column field="highYDiff" [width]="'120px'" dataType="number" [formatter]="formatCurrency"
            [editable]="true">
            <ng-template igxCell let-cell="cell">
                <div class="finjs-icons">
                    <span>{{cell.value | currency:'USD':'symbol':'1.4-4'}}</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="openPrice" dataType="number" [formatter]="formatCurrency" [editable]="true"
            [width]="'130px'">
            <ng-template igxCell let-cell="cell">
                <div class="finjs-icons">
                    <span>{{cell.value | currency:'USD':'symbol':'1.4-4'}}</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="openPriceDiff" dataType="number" [width]="'140px'" [editable]="true">
            <ng-template igxCell let-cell="cell">
                <div class="finjs-icons">
                    <span>{{cell.value | number:'1.4-4'}}%</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="lowY" [width]="'100px'" dataType="number" [formatter]="formatCurrency" [editable]="true">
        </igx-column>
        <igx-column field="lowYDiff" dataType="number" [width]="'120px'" [editable]="true">
            <ng-template igxCell let-cell="cell">
                <div class="finjs-icons">
                    <span>{{cell.value | number:'1.4-4'}}%</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="highD" [width]="'100px'" dataType="number" [headerClasses]="'headerAlignSyle'"
            [editable]="true" [formatter]="formatCurrency">
        </igx-column>
        <igx-column field="highDDiff" dataType="number" [width]="'120px'" [editable]="true">
            <ng-template igxCell let-cell="cell">
                <div class="finjs-icons">
                    <span>{{cell.value | number:'1.4-4'}}%</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="lowD" [width]="'100px'" dataType="number" [formatter]="formatCurrency" [editable]="true">
        </igx-column>
        <igx-column field="lowDDiff" dataType="number" [width]="'120px'" [editable]="true">
            <ng-template igxCell let-cell="cell">
                <div class="finjs-icons">
                    <span>{{cell.value | number:'1.4-4'}}%</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="sell" [width]="'110px'" dataType="number" [formatter]="formatCurrency" [editable]="true">
        </igx-column>
        <igx-column field="sellDiff" dataType="number" [width]="'120px'" [editable]="true">
            <ng-template igxCell let-cell="cell">
                <div class="finjs-icons">
                    <span>{{cell.value | number:'1.4-4'}}%</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="region" [editable]="true"></igx-column>
        <igx-column field="contract" [editable]="true"></igx-column>
        <igx-column field="settlement" [width]="'150px'" [editable]="true"></igx-column>
    </igx-grid>
  </div>
```
```scss
:host ::ng-deep {
    .grid-chart-contextmenu-wrapper {
        --ig-size: var(--ig-size-small);
        width: 90%;
        margin: 50px auto;
        height: 80%;
    }
}
```

## Data Analysis Package API

### IgxConditionalFormattingDirective

<hr/>

| API | Description | Arguments |
|---------|:-------------:|-----------:|
| `ConditionalFormattingType` | An **enum**, which represents the conditional formatting types | |
| `IFormatColors` | An **interface**, which represents the formatting colors | |
| `formatter`: **string** | An **input** property, which sets/gets the current formatting type | |
| `formatColors` | An **input** property, which sets/gets the current formatting colors | `val`: _IFormatColors_ |
| `onFormattersReady`| An **event**, which emits the applicable `formatting types` for the selected data, when they are determined. | |
| `formatCells` | Applies conditional formatting for the selected cells. Usage: <br/> **this.conditionalFormatting.formatCells(ConditionalFormattingType.dataBars)** | `formatterName`: **string**, `formatRange`?: [`IgxGridSelectionRange`](mcp:get_api_reference?platform=angular&component=GridSelectionRange) [ ], <br /> `reset`: boolean (**true** by default) |
| `clearFormatting` | Removes the conditional formatting from the selected cells. Usage: <br /> **this.conditionalFormatting.clearFormatting()** | |

### IgxChartIntegrationDirective

<hr/>

| API | Description | Arguments |
|---------|-------------|-----------|
| `CHART_TYPE` | An **enum**, representing the supported chart types | |
| `OPTIONS_TYPE` | An **enum**, representing the supported options type, which can be applied to a chart component| |
| `IOptions` | An **interface** for chart property options | |
| `chartFactory`| Creates a chart component, based on the provided chart type. Usage: <br /> **this.chartIntegration.chartFactory(CHART_TYPE.COLUMN_GROUPED, this.viewContainerRef)** | `type`: **any[ ]**, viewContainerRef: [`ViewContainerRef`](https://angular.io/api/core/ViewContainerRef) |
| `setChartComponentOptions` | Sets property options to a chart component. Usage: <br /> `this.chartIntegration.setChartComponentOptions(CHART_TYPE.PIE, OPTIONS_TYPE.CHART, &#123;allowSliceExplosion: true, sliceClick: (evt) => &#123; evt.args.isExploded = !evt.args.isExploded; &#125; &#125;)` | `chart`: _CHART_TYPE_, `optionsType`: _OPTIONS_TYPE_, `options`: _IOptions_ |
| `getAvailableCharts` | Returns the enabled chart types | |
| `enableCharts` | Enables the provided chart types. By default all chart types are enabled | `types`: _CHART_TYPE_ [ ] |
| `disableCharts` | Disables the provided chart types | `types`: _CHART_TYPE_ [ ] |
| `onChartTypesDetermined` | An **event**, emitted when the chart types, applicable for the `chartData`, are determined. This event emits an object of type `IDeterminedChartTypesArgs`, which has 2 properties: <br /> `chartsAvailabilty`: _Map&lt;CHART_TYPE, boolean&gt;_ - the enabled/disabled chart types, <br /> `chartsForCreation`: _CHART_TYPE[]_ - the applicable chart types for the `chartData` | |
| `onChartCreationDone` | An event, emitted when a chart is created. This event emits the chart component, which is created | |
| `chartData`: **any[ ]** | An **input** property, which sets/gets the data for the charts | `selectedData`: **any[ ]** |
| `useLegend`: **boolean** | An **input**, which enables/disables the legend usage for all chart types. By default it is set to **true** | |
| `defaultLabelMemberPath`: **string** | An **input** property, which sets/gets the default label member path for the charts. By default the label member path will be determined, based on the provided data. <br />( **if the provided data records have properties with string values, the first string property name of the first data record in the `chartData` will be selected as a label member path for the charts, if not, the label member path will have value _'Index'_.** ) <br/> | |
| `scatterChartYAxisValueMemberPath`: **string** | An **input** property, which sets/gets the default radius member path for the scatter bubble chart. **If not set, the default Y axis value member path will be the first numeric property name of the first data record in the `chartData`** | `path`: **string** |
| `bubbleChartRadiusMemberPath`: **string** | An **input** property, which sets/gets the default radius member path for the scatter bubble chart. **If not set, the default radius member path will be the second numeric property name of the first data record in the `chartData`** | `path`: **string** |

## Useful resources

<hr/>

- [Angular Universal guide](https://angular.io/guide/universal)
- [Ignite UI Starter Kit](https://github.com/IgniteUI/ng-universal-example)
- [Server-side rendering terminology](https://developers.google.com/web/updates/2019/02/rendering-on-the-web)
- [Getting started with Ignite UI for Angular](/general/getting-started)
- [Ignite UI CLI Guide](/general/cli/step-by-step-guide-using-cli)
- [Ignite UI for Angular Schematics Guide](/general/cli/step-by-step-guide-using-angular-schematics)
