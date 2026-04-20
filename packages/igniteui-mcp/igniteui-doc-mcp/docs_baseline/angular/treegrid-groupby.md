---
title: Angular Tree Grid Group By | Group by multiple fields | Infragistics
_description: Configure angular group by that allows visualizing of data records in Angular table, visualize the grouped data in separate and convenient column group.
_keywords: angular group by, igniteui for angular, infragistics
_license: commercial
_tocName: Group By
_premium: true
---

# Angular Tree Grid Group By

If you have non-hierarchical data and you want to **group by** one or more columns and populate the parent rows with **aggregated values**, you could use the [`IgxTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html) along with `treeGridGrouping` pipe and the UI component with selector `igx-tree-grid-group-by-area`.

The `treeGridGrouping` pipe groups the data based on the provided parameters and the resulting hierarchy is displayed in a separate column. The pipe can also calculate aggregated values for the generated parent rows if aggregations are provided. Here is an example of how to use the pipe in the template:

```html
<igx-tree-grid #grid 
               [data]="data | treeGridGrouping:groupingExpressions:groupKey:childDataKey:grid:aggregations"
               [childDataKey]="childDataKey"
               [sortStrategy]="sorting">
```

The pipe arguments are the following:

- groupingExpressions - an array of [`IGroupingExpression`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igroupingexpression.html) objects which contains information about the fields used to generate the hierarchy and the sorting details for each group
- groupKey - a string value for the name of the generated hierarchy column
- childDataKey - a string value for the field where the child collection of the generated parent rows is stored
- grid - `IgxTreeGridComponent` that is used for the grouping
- aggregations (optional) - an array of `ITreeGridAggregation` objects which contains information about the aggregation functions

The UI component with selector `igx-tree-grid-group-by-area` handles the UI interactions related to the columns that are used for the grouping. Here is an example of how to use the component in the template:

```html
<igx-tree-grid-group-by-area
    [grid]='grid'
    [(expressions)]='groupingExpressions'
    [hideGroupedColumns]='true'>
</igx-tree-grid-group-by-area>
```

The component's inputs are the following:

- grid - `IgxTreeGridComponent` that is used for the grouping
- expressions - an array of [`IGroupingExpression`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igroupingexpression.html) objects which contains the fields used to generate the hierarchy
- hideGroupedColumns - a boolean value indicating whether to hide the columns by which grouping was performed
- dropAreaTemplate - a template for the drop area that can be used to override the default drop area template
- dropAreaMessage - a string that can be used to override the default message for the default drop area template

> [!NOTE]
> In order for the sorting to work correctly you should set the `sortStrategy` property of the `IgxTreeGridComponent` to an instance of `IgxGroupedTreeGridSorting`.

## Angular Tree Grid Group By Example

```typescript
import { Component, ElementRef, OnInit, OnDestroy, ViewChild, HostBinding, inject } from '@angular/core';
import { AbsoluteScrollStrategy, ConnectedPositioningStrategy, DefaultSortingStrategy, HorizontalAlignment, IGroupingExpression, IgxOverlayOutletDirective, OverlaySettings, PositionSettings, TreeGridFilteringStrategy, VerticalAlignment } from 'igniteui-angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { ITreeGridAggregation, IgxGroupedTreeGridSorting, IgxTreeGridComponent, IgxTreeGridGroupByAreaComponent, IgxTreeGridGroupingPipe } from 'igniteui-angular/grids/tree-grid';
import { IgxSliderComponent } from 'igniteui-angular/slider';
import { IgxCellEditorTemplateDirective, IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarExporterComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent } from 'igniteui-angular/grids/core';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxFocusDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { Contract, REGIONS } from '../data/financialData';
import { SignalRService } from '../services/signal-r.service';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, CurrencyPipe, DatePipe } from '@angular/common';
import { IgxPreventDocumentScrollDirective } from '../../../../../src/app/directives/prevent-scroll.directive';

@Component({
    providers: [SignalRService],
    selector: 'app-tree-grid-finjs-sample',
    styleUrls: ['./tree-grid-finjs-sample.component.scss'],
    templateUrl: './tree-grid-finjs-sample.component.html',
    imports: [IgxSliderComponent, FormsModule, IgxButtonGroupComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarPinningComponent, IgxGridToolbarHidingComponent, IgxGridToolbarExporterComponent, IgxTreeGridGroupByAreaComponent, IgxColumnComponent, IgxCellEditorTemplateDirective, IgxSelectComponent, IgxFocusDirective, IgxSelectItemComponent, IgxCellTemplateDirective, IgxIconComponent, IgxOverlayOutletDirective, AsyncPipe, CurrencyPipe, DatePipe, IgxTreeGridGroupingPipe]
})

export class TreeGridFinJSComponent implements OnDestroy, OnInit {
    private elRef = inject(ElementRef);
    dataService = inject(SignalRService);

    @ViewChild('grid1', { static: true }) public grid1!: IgxTreeGridComponent;
    @ViewChild('buttonGroup1', { static: true }) public buttonGroup1!: IgxButtonGroupComponent;
    @ViewChild('slider1', { static: true }) public volumeSlider!: IgxSliderComponent;
    @ViewChild('slider2', { static: true }) public intervalSlider!: IgxSliderComponent;
    @ViewChild(IgxOverlayOutletDirective, { static: true }) public outlet!: IgxOverlayOutletDirective;

    @HostBinding('class.dark-theme')
    public theme = false;

    public showToolbar = true;
    public selectionMode = 'multiple';
    public volume = 1000;
    public frequency = 500;
    public data$: any;
    public overlaySettings: OverlaySettings = {
        modal: false
    };
    public controls = [
        {
            disabled: false,
            icon: 'update',
            label: 'LIVE ALL PRICES',
            selected: false
        },
        {
            disabled: true,
            icon: 'stop',
            label: 'Stop',
            selected: false
        }
    ];
    public groupingExpressions: IGroupingExpression[] = [
        { fieldName: 'category', dir: 2, ignoreCase: true, strategy: DefaultSortingStrategy.instance() },
        { fieldName: 'type', dir: 1, ignoreCase: true, strategy: DefaultSortingStrategy.instance() },
        { fieldName: 'contract', dir: 1, ignoreCase: true, strategy: DefaultSortingStrategy.instance() }
    ];
    public aggregations: ITreeGridAggregation[] = [
        {
            aggregate: (parent: any, data: any[]) => data.map((r) => r.change).reduce((ty, u) => ty + u, 0),
            field: 'change'
        },
        {
            aggregate: (parent: any, data: any[]) => data.map((r) => r.price).reduce((ty, u) => ty + u, 0),
            field: 'price'
        },
        {
            aggregate: (parent: any, data: any[]) => parent.change / (parent.price - parent.change) * 100,
            field: 'changeP'
        }
    ];

    public childDataKey = 'children';
    public groupColumnKey = 'categories';
    public sorting = IgxGroupedTreeGridSorting.instance();
    public filterStrategy = new TreeGridFilteringStrategy([this.groupColumnKey]);

    public items: any[] = [{ field: 'Export native' }, { field: 'Export JS Excel' }];

    public _positionSettings: PositionSettings = {
        horizontalDirection: HorizontalAlignment.Left,
        horizontalStartPoint: HorizontalAlignment.Right,
        verticalStartPoint: VerticalAlignment.Bottom
    };

    public _overlaySettings: OverlaySettings = {
        closeOnOutsideClick: true,
        modal: false,
        positionStrategy: new ConnectedPositioningStrategy(this._positionSettings),
        scrollStrategy: new AbsoluteScrollStrategy()
    };

    public contracts = Contract;
    public regions = REGIONS;
    public isLoading = true;

    private subscription: any;
    private selectedButton: number;
    private _timer: any;

    constructor() {
        this.dataService.startConnection();
        this.overlaySettings.outlet = this.outlet;
        this.data$ = this.dataService.data;
        this.dataService.getData(0);

        this.data$.subscribe((data) => {
            if (data.length !== 0) {
                this.isLoading = false;
            };
        });
    }

    public ngOnInit(): void {
        this.overlaySettings.outlet = this.outlet;
    }

    public onButtonAction(event: any): void {
        switch (event.index) {
            case 0: {
                this.disableOtherButtons(event.index, true);
                if (this.dataService.hasRemoteConnection) {
                    this.dataService.broadcastParams(this.frequency, this.volume, true);
                } else {
                    const currData = this.grid1.filteredSortedData ?? this.grid1.data;
                    this._timer = setInterval(() => this.dataService.updateAllPriceValues(currData), this.frequency);
                }
                break;
            }
            case 1: {
                if (this.dataService.hasRemoteConnection) {
                    this.dataService.stopLiveData();
                } else {
                    this.stopFeed();
                }
                this.disableOtherButtons(event.index, false);
                break;
            }
            default: break;
        }
    }

    updateVolume(): void {
        this.dataService.hasRemoteConnection ? this.dataService.broadcastParams(this.frequency, this.volume, false) :
        this.dataService.getData(this.volume);
    }

    public stopFeed(): void {
        if (this._timer) {
            clearInterval(this._timer);
        }
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    public formatNumber(value: number) {
        return value ? value.toFixed(2) : '';
    }

    public percentage(value: number) {
        return value ? value.toFixed(2) + '%' : '';
    }

    public formatCurrency(value: number) {
        return value ? '$' + value.toFixed(3) : '';
    }

    /**
     * the below code is needed when accessing the sample through the navigation
     * it will style all the space below the sample component element, but not the navigation menu
     */
     public onThemeChanged(event: any) {
        const parentEl = this.parentComponentEl();
        if (event.checked && parentEl.classList.contains('main')) {
            parentEl.classList.add('fin-dark-theme');
        } else {
            parentEl.classList.remove('fin-dark-theme');
        }
    }
    public ngOnDestroy() {
        this.stopFeed();
    }

    public toggleToolbar() {
        this.showToolbar = !this.showToolbar;
    }

    private negative = (rowData: any): boolean => rowData['changeP'] < 0;
    private positive = (rowData: any): boolean => rowData['changeP'] > 0;
    private changeNegative = (rowData: any): boolean => rowData['changeP'] < 0 && rowData['changeP'] > -1;
    private changePositive = (rowData: any): boolean => rowData['changeP'] > 0 && rowData['changeP'] < 1;
    private strongPositive = (rowData: any): boolean => rowData['changeP'] >= 1;
    private strongNegative = (rowData: any, key: string): boolean => rowData['changeP'] <= -1;

    /* eslint-disable @typescript-eslint/member-ordering */
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
    /* eslint-enable @typescript-eslint/member-ordering */

    private disableOtherButtons(ind: number, disableButtons: boolean) {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.volumeSlider.disabled = disableButtons;
        this.intervalSlider.disabled = disableButtons;
        this.selectedButton = ind;
        this.buttonGroup1.buttons.forEach((button, index) => {
            if (index === 1) { button.disabled = !disableButtons; } else {
                button.disabled = disableButtons;
            }
        });
    }

    /**
     * returns the main div container of the Index Component,
     * if path is /samples/sample-url, or the appRoot, if path is /sample-url
     */
    private parentComponentEl() {
        return this.elRef.nativeElement.parentElement.parentElement;
    }

    get buttonSelected(): number {
        return this.selectedButton || this.selectedButton === 0 ? this.selectedButton : -1;
    }
}
```
```html
<div class="grid__wrapper ig-scrollbar">
  <div class="controls-wrapper">
  </div>
  <div class="controls-holder">
    <div class="switches">
      <div class="finjs-slider control-item">
        <label for="slider">Records: {{volume}}</label>
        <igx-slider #slider1 id="slider" [minValue]="0" [maxValue]="10000" [(ngModel)]="volume" (dragFinished)="updateVolume()" [step]="100"
        [thumbLabelVisibilityDuration]="250" [continuous]="true"></igx-slider>
      </div>
      <div class="finjs-slider control-item">
        <label for="slider">Frequency: {{frequency}} ms</label>
        <igx-slider #slider2 id="slider" [minValue]="100" [maxValue]="3000" [step]="10" [(ngModel)]="frequency"
        [thumbLabelVisibilityDuration]="250" [continuous]="true"></igx-slider>
      </div>
    </div>
    <div class="control-item finjs-play-controls">
      <igx-buttongroup class="finjssample-btn-group" #buttonGroup1 [values]="controls"
      (selected)="onButtonAction($event)"></igx-buttongroup>
    </div>

  </div>
  <div class="sample-toolbar">
    @if (buttonSelected === 0) {
      <span>Feeding {{volume}} records every {{frequency / 1000}} sec.
      ~{{volume/5}} records updated.</span>
    }
  </div>
  <igx-tree-grid #grid1 [igxPreventDocumentScroll]="true"
    [data]="data$ | async | treeGridGrouping:groupingExpressions:groupColumnKey:childDataKey:grid1:aggregations"
    [childDataKey]="childDataKey"
    [sortStrategy]="sorting"
    [height]="'calc(100% - 76px)'"
    width="100%"
    [moving]="true"
    [autoGenerate]="false"
    hiddenColumnsText="Hidden"
    [isLoading]="isLoading"
    [allowFiltering]="true"
    [filterMode]="'excelStyleFilter'"
    [filterStrategy]="filterStrategy">
    @if (showToolbar) {
      <igx-grid-toolbar>
        <igx-grid-toolbar-actions>
          <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
          <igx-grid-toolbar-hiding title="Indicators"></igx-grid-toolbar-hiding>
          <igx-grid-toolbar-exporter [exportCSV]="false"></igx-grid-toolbar-exporter>
        </igx-grid-toolbar-actions>
      </igx-grid-toolbar>
    }
    <!-- Empty templates for Sorting,Moving,Hiding, Pinning actions inside ESF dialog -->
    <!-- <ng-template igxExcelStyleSorting></ng-template>
    <ng-template igxExcelStyleMoving></ng-template>
    <ng-template igxExcelStyleHiding></ng-template>
    <ng-template igxExcelStylePinning></ng-template> -->

    <igx-tree-grid-group-by-area
      [grid]="grid1"
      [(expressions)]="groupingExpressions"
      [hideGroupedColumns]="true">
    </igx-tree-grid-group-by-area>

    <igx-column [field]="groupColumnKey" [width]="'180px'" [sortable]="false" [resizable]="true"
    [disableHiding]="true"></igx-column>
    <igx-column [field]="'category'" [width]="'100px'" [groupable]="true" [sortable]="true" [editable]="true">
    </igx-column>
    <igx-column [field]="'type'" [width]="'100px'" [groupable]="true" [sortable]="true" [editable]="true">
    </igx-column>
    <igx-column [field]="'contract'" [width]="'100px'" [groupable]="true" [sortable]="true" [editable]="true">
    </igx-column>
    <igx-column [field]="'settlement'" [width]="'100px'" [sortable]="true"></igx-column>
    <igx-column [field]="'country'" [width]="'100px'" [groupable]="true" [sortable]="true" [editable]="true">
    </igx-column>
    <igx-column [field]="'region'" [width]="'110px'" [groupable]="true" [sortable]="true" [editable]="true">
      <ng-template igxCellEditor let-cell="cell" let-value>
        <igx-select [overlaySettings]="overlaySettings" [placeholder]="value" [(ngModel)]="cell.editValue" [igxFocus]="true">
          @for (r of regions; track r) {
            <igx-select-item [value]="r.Name">{{ r.Name }}</igx-select-item>
          }
        </igx-select>
      </ng-template>
    </igx-column>
    <igx-column [field]="'lastUpdated'" [width]="'120px'" [editable]="true" header="Last Update" dataType="date">
      <ng-template igxCell let-cell="cell">
        {{ cell.value | date }}
      </ng-template>
    </igx-column>
    <igx-column [field]="'openPrice'" [width]="'120px'" dataType="number" [formatter]="formatCurrency"
    [sortable]="true"></igx-column>
    <igx-column [field]="'price'" [width]="'130px'" dataType="number" [cellClasses]="trends"
      [sortable]="true" [disableHiding]="true">
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
      [sortable]="true" [cellClasses]="trendsChange" [formatter]="formatNumber" >
    </igx-column>

    <igx-column [field]="'changeP'" [width]="'110px'" dataType="number" [formatter]="percentage"
      [sortable]="true" [cellClasses]="trendsChange">
    </igx-column>

    <igx-column [field]="'buy'" [width]="'110px'" dataType="number" [formatter]="formatCurrency"
    [sortable]="true"></igx-column>
    <igx-column [field]="'sell'" [width]="'110px'" dataType="number" [formatter]="formatCurrency"
    [sortable]="true"></igx-column>
    <igx-column [field]="'spread'" [width]="'110px'" dataType="number" [formatter]="formatNumber" >
    </igx-column>
    <igx-column [field]="'volume'" [width]="'110px'" dataType="number" [formatter]="formatNumber"
    [sortable]="true"></igx-column>
    <igx-column [field]="'highD'" [width]="'110px'" dataType="number" [formatter]="formatCurrency"
    [sortable]="true"></igx-column>
    <igx-column [field]="'lowD'" [width]="'110px'" dataType="number" [formatter]="formatCurrency"
    [sortable]="true"></igx-column>
    <igx-column [field]="'highY'" [width]="'110px'" dataType="number" [formatter]="formatCurrency"
    [sortable]="true"></igx-column>
    <igx-column [field]="'lowY'" [width]="'110px'" dataType="number" [formatter]="formatCurrency"
    [sortable]="true"></igx-column>
    <igx-column [field]="'startY'" [width]="'110px'" dataType="number" [formatter]="formatCurrency"
    [sortable]="true"></igx-column>
  </igx-tree-grid>
</div>

<div igxOverlayOutlet #outlet="overlay-outlet">
</div>
```
```scss
@use '../../variables' as *;

:host ::ng-deep {
    .fin-dark-theme {
		.finjs-slider,
		.sample-toolbar,
		.group-drop-area {
			color: contrast-color(null, 'gray', 900);
		}

		.group-drop-area {
			background: color(null, 'surface', 500);
		}
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

	.igx-grid__grouparea {
		max-height: 100%;
		height: auto;
	}

	.changePos,
	.changeNeg,
	.strongPositive,
	.strongNegative {
		color: contrast-color(null, 'gray', 900) !important;

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
		color: color(null, 'error', 500)  !important;
	}

	.negative.strongNegative {
		.igx-grid__td-text {
			color: color(null, 'error', 500, .8)  !important;
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
			padding-inline-end: rem(4px);
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
			border-right: rem(4px) solid color(null, 'error', 500, .5);
			padding-right: rem(4px);
		}
	}

	// selected
	.igx-grid__td--selected.changePos1,
	.igx-grid__td--selected.changePos2,
	.igx-grid__td--selected.changePos {
		background-color: color(null, 'success', 500, .5) !important;

		.finjs-icons,
		.igx-grid__td-text {
			color: contrast-color(null, 'gray', 900);
		}
	}

	.igx-grid__td--selected.changeNeg1,
	.igx-grid__td--selected.changeNeg2,
	.igx-grid__td--selected.changeNeg {
		background-color: color(null, 'error', 500, .5) !important;

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
			border-right: rem(4px) solid color(null, 'success', 500);
			padding-right: rem(4px);
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
			border-right: rem(4px) solid color(null, 'error', 500);
			padding-right: rem(4px);
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

	.controls-holder {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		width: 100%;
		padding-block-end: rem(4px);
	}

	.switches {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex: 1 0 0%;
		padding-right: rem(20px);
		font-size: .9rem;
	}

	.control-item {
		padding-right: rem(20px);
	}

	.igx-slider,
	.igx-slider--disabled {
		height: rem(24px);
	}

	.finjs-slider {
		width: 40%;
		min-width: rem(145px);
	}

	.finjs-play-controls {
		width: 45%;
		min-width: rem(620px);
		margin-block-start: rem(10px);
	}

	.sample-toolbar {
		height: rem(20px);
		font-size: .8rem;
		line-height: rem(20px);
		margin-block-start: rem(11px);
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

.grid__wrapper {
	position: relative;
	width: 100%;
	height: 100%;
	inset-block-start: 0;
	inset-inline-start: 0;
	padding: rem(15px);
	display: flex;
	flex-direction: column;

    igx-tree-grid {
        --ig-size: var(--ig-size-small);
    }
}

igx-grid {
	flex: 1 0 0%;
}

.controls-wrapper {
	display: flex;
	justify-content: center;
	position: relative;
}

.grid-toolbar-title {
	max-width: none;
}
```

<div class="divider--half"></div>

### Implementation

In this sample we are using the `treeGridGrouping` pipe and the UI component with selector `igx-tree-grid-group-by-area` for the grouping. The data is grouped by the **"category"**, **"type"** and **"contract"** fields. The resulting hierarchy is displayed in the newly created **"categories"** column. The pipe also calculates aggregated values for the generated parent rows for the **"price"**, **"change"** and **"changeP"** columns.

```html
<igx-tree-grid #grid1
    [data]="data$ | async | treeGridGrouping:groupingExpressions:groupColumnKey:childDataKey:grid1:aggregations"
    [childDataKey]="childDataKey"
    [sortStrategy]="sorting">
    <igx-tree-grid-group-by-area
        [grid]="grid1"
        [(expressions)]="groupingExpressions"
        [hideGroupedColumns]="true">
    </igx-tree-grid-group-by-area>
    <igx-column [field]="groupColumnKey"></igx-column>
```

Here you can see how the grouping expressions and aggregations are defined:

```typescript
public groupingExpressions: IGroupingExpression[] = [
    { fieldName: 'category', dir: 2, ignoreCase: true, strategy: DefaultSortingStrategy.instance() },
    { fieldName: 'type', dir: 1, ignoreCase: true, strategy: DefaultSortingStrategy.instance() },
    { fieldName: 'contract', dir: 1, ignoreCase: true, strategy: DefaultSortingStrategy.instance() }
];
public aggregations: ITreeGridAggregation[] = [
    {
        aggregate: (parent: any, data: any[]) => data.map((r) => r.change).reduce((ty, u) => ty + u, 0),
        field: 'change'
    },
    {
        aggregate: (parent: any, data: any[]) => data.map((r) => r.price).reduce((ty, u) => ty + u, 0),
        field: 'price'
    },
    {
        aggregate: (parent: any, data: any[]) => parent.change / (parent.price - parent.change) * 100,
        field: 'changeP'
    }
];
public childDataKey = 'children';
public groupColumnKey = 'categories';
public sorting = IgxGroupedTreeGridSorting.instance();
```

## Angular Tree Grid Group By Load On Demand Example

```typescript
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DefaultSortingStrategy, IGroupingExpression } from 'igniteui-angular/core';
import { IgxTreeGridComponent, IgxTreeGridGroupByAreaComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { TreeGridGroupingLoadOnDemandService, TreeGridGroupingParameters } from './remoteService';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-group-by-load-on-demand-sample',
    styleUrls: ['./tree-grid-group-by-load-on-demand-sample.component.scss'],
    templateUrl: './tree-grid-group-by-load-on-demand-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxTreeGridGroupByAreaComponent, IgxColumnComponent]
})

export class TreeGridGroupByLoadOnDemandComponent implements OnInit {
    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    @Input()
    public groupingExpressions: IGroupingExpression[] = [
        { fieldName: 'ShipCountry', dir: 2, ignoreCase: true, strategy: DefaultSortingStrategy.instance() },
        { fieldName: 'ShipCity', dir: 1, ignoreCase: true, strategy: DefaultSortingStrategy.instance() },
        { fieldName: 'Discontinued', dir: 1, ignoreCase: true, strategy: DefaultSortingStrategy.instance() }
    ];

    public primaryKey = 'id';
    public foreignKey = 'parentId';
    public hasChildrenKey = 'children';
    public groupColumnKey = '';
    public data = [];

    private dataService = new TreeGridGroupingLoadOnDemandService();

    public ngOnInit() {
        this.reloadData();
    }

    public loadChildren = (parentID: any, done: (children: any[]) => void) => {
        const groupingParameters = this.assembleGroupingParameters();
        this.dataService.getData(parentID, this.hasChildrenKey, groupingParameters, (children) => done(children));
    };

    public onExpressionsChange(event: IGroupingExpression[]) {
        this.reloadData();
    }

    private reloadData() {
        this.treeGrid.isLoading = true;
        this.treeGrid.expansionStates.clear();
        const groupingParameters = this.assembleGroupingParameters();
        this.dataService.getData(null, this.hasChildrenKey, groupingParameters, (children) => {
            this.data = children;
            this.treeGrid.isLoading = false;
            this.treeGrid.reflow();
        });
    }

    private assembleGroupingParameters(): TreeGridGroupingParameters {
        const groupingParameters: TreeGridGroupingParameters = {
            groupingExpressions: this.groupingExpressions,
            groupKey: this.groupColumnKey,
            primaryKey: this.primaryKey,
            foreignKey: this.foreignKey
        };

        return groupingParameters;
    }
}
```
```html
<div class="grid__wrapper">
    <igx-tree-grid #treeGrid [igxPreventDocumentScroll]="true"
        [data]="data"
        [loadChildrenOnDemand]="loadChildren"
        [primaryKey]="primaryKey"
        [foreignKey]="foreignKey"
        [hasChildrenKey]="hasChildrenKey"
        width="100%"
        height="800px"
        [autoGenerate]="false"
        hiddenColumnsText="Hidden">

        <igx-tree-grid-group-by-area
            [grid]="treeGrid"
            [(expressions)]="groupingExpressions"
            (expressionsChange)="onExpressionsChange($event)"
            [hideGroupedColumns]="true">
        </igx-tree-grid-group-by-area>

        <igx-column [field]="groupColumnKey" [width]="'180px'" [resizable]="true" [disableHiding]="true"></igx-column>
        <igx-column field="OrderID" header="Order ID">
        </igx-column>
        <igx-column field="ShipCountry" header="Ship Country" width="200px" [groupable]="true" [hidden]="true">
        </igx-column>
        <igx-column field="OrderDate" header="Order Date" width="200px" dataType="date">
        </igx-column>
        <igx-column field="PostalCode" header="Postal Code" width="200px" [groupable]="true">
        </igx-column>
        <igx-column field="Discontinued" header="Discontinued" width="200px" [groupable]="true" [hidden]="true">
        </igx-column>
        <igx-column field="ShipName" header="Ship Name" width="250px" [groupable]="true">
        </igx-column>
        <igx-column field="ShipCity" header="Ship City" width="250px" [groupable]="true" [hidden]="true">
        </igx-column>
        <igx-column field="ShipperName" header="Shipper Name" width="250px" [groupable]="true">
        </igx-column>
        <igx-column field="Salesperson" header="Salesperson" width="250px" [groupable]="true">
        </igx-column>
        <igx-column field="UnitPrice" header="Unit Price" width="150px" dataType="currency">
        </igx-column>
        <igx-column field="Quantity" header="Quantity" width="150px" dataType="number">
        </igx-column>
    </igx-tree-grid>
</div>
```
```scss
:host ::ng-deep {
    .igx-button--icon {
        width: 2rem;
        height: 2rem;
    }
}

.grid__wrapper {
    --ig-size: var(--ig-size-small);

    position: relative;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 15px;
    display: flex;
    flex-direction: column;
}

igx-grid {
    flex: 1 0 0%;
}

.grid-toolbar-title {
    max-width: none;
}
```

<div class="divider--half"></div>

### Implementation

In this sample, data is loaded in portions. Initially, only the top level categories are displayed, then child data is served once a parent row is expanded. For more information on this approach, please refer to the [Tree Grid Load On Demand](load-on-demand.md) topic. The data is grouped by the **"ShipCountry"**, **"ShipCity"** and **"Discontinued"** fields and the resulting hierarchy is displayed in a separate column. The grouping is performed on a remote service - the data is modified and corresponding child and parent keys are assigned that are used to display the final data in a hierarchical view. For more information on how this service works you can take a look at the `TreeGridGroupingLoadOnDemandService` class in the `remoteService.ts` file.

Here is an example of how to use load on demand:

```html
    <igx-tree-grid #treeGrid
        [data]="data"
        [loadChildrenOnDemand]="loadChildren"
        [primaryKey]="primaryKey"
        [foreignKey]="foreignKey"
        [hasChildrenKey]="hasChildrenKey">
        <igx-tree-grid-group-by-area
            [grid]="treeGrid"
            [(expressions)]="groupingExpressions"
            (expressionsChange)="onExpressionsChange($event)"
            [hideGroupedColumns]="true">
        </igx-tree-grid-group-by-area>
        <igx-column [field]="groupColumnKey"></igx-column>
```

In order to load the child rows when the user expands a row, the Tree Grid provides the callback input property [`loadChildrenOnDemand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#loadChildrenOnDemand) - the children data is retrieved from the server and it is assigned to the requested parent row based on the grouping parameters.

```typescript
public groupingExpressions: IGroupingExpression[] = [
    { fieldName: 'ShipCountry', dir: 2, ignoreCase: true, strategy: DefaultSortingStrategy.instance() },
    { fieldName: 'ShipCity', dir: 1, ignoreCase: true, strategy: DefaultSortingStrategy.instance() },
    { fieldName: 'Discontinued', dir: 1, ignoreCase: true, strategy: DefaultSortingStrategy.instance() }
];
public primaryKey = 'id';
public foreignKey = 'parentId';
public hasChildrenKey = 'children';
public groupColumnKey = '';

private dataService = new TreeGridGroupingLoadOnDemandService();

public ngOnInit() {
    this.reloadData();
}

public loadChildren = (parentID: any, done: (children: any[]) => void) => {
    const groupingParameters = this.assembleGroupingParameters();
    this.dataService.getData(parentID, this.hasChildrenKey, groupingParameters, (children) => done(children));
};

private reloadData() {
    this.treeGrid.isLoading = true;
    this.treeGrid.expansionStates.clear();
    const groupingParameters = this.assembleGroupingParameters();
    this.dataService.getData(null, this.hasChildrenKey, groupingParameters, (children) => {
        this.data = children;
        this.treeGrid.isLoading = false;
        this.treeGrid.reflow();
    });
}
```

## Known Limitations

| Limitation                                 | Description                                                                                                                                                                                                                                          |
| :----------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Grouping is not updated with batch editing | When using Tree Grid Group By with batch editing enabled (`batchEditing=true`), the grouping is not automatically updated when editing column values that are used for grouping. The grouping will only be updated after committing the transaction. |

## API References

<div class="divider--half"></div>

- [IgxTreeGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html)
- [IgxGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)

## Additional Resources

<div class="divider--half"></div>

- [TreeGrid overview](tree-grid.md)
- [TreeGrid Summaries](summaries.md)
- [Grid Summaries](../grid/summaries.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
