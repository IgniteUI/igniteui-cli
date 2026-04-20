---
title: Live Data Updates in Angular Tree Grid - Ignite UI for Angular
_description: Check out how the Ignite UI for Angular Tree Grid can handle thousands of updates per second, while staying responsive for user interactions.
_keywords: angular data grid, angular grid updates, angular live data
_license: commercial
_canonicalLink: grid/live-data
_tocName: Live Data / Real-Time
_premium: true
---
# Angular Tree Grid Live Data Updates
The Tree Grid component is able to handle thousands of updates per second, while staying responsive for user interactions.
## Angular Live-data Update Example
The sample below demonstrates the Tree Grid performance when all records are updated multiple times per second. Use the UI controls to choose the number of records loaded and the frequency of updates.
Feed the same data into the [Line Chart](../charts/types/line-chart.md) to experience the powerful charting capabilities of Ignite UI for Angular. The `Chart` button will show `Category Prices per Region` data for the selected rows and the `Chart` column button will show the same for the current row.
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
## API References
<div class="divider--half"></div>
- [IgxTreeGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html)
- [IgxGridCell](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html)
- [IgxTreeGridRow](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridrow.html)
- [IgxGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)
- [IgxGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
- [IgxGridCell](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html)
- [IgxBaseTransactionService](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbasetransactionservice.html)
## Additional Resources
<div class="divider--half"></div>
- [Data Grid](../grid/grid.md)
- [Row Editing](row-editing.md)
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)


