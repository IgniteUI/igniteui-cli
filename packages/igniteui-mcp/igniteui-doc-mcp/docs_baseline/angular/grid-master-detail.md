---
title: Angular Master-Detail Grid - Ignite UI for Angular
_description: Define expandable detail view template for data in rows with Ignite UI Angular Grid. Useful for displaying master-detail style data in a hierarchical structure.
_keywords: master detail, igniteui for angular, infragistics
_license: commercial
_tocName: Master-Detail Grid
_premium: true
---

# Angular Master-Detail Grid

The `igxGrid` component supports specifying a detail template that displays additional details for a particular row by expanding/collapsing its content. When specified each record acts as a master, which upon expansion shows a customizable details template with contextual data for the current record.

This mode is useful when you need to display master-detail style data in a hierarchical structure.

## Angular Grid Master-Detail Example


```typescript
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ViewChild } from '@angular/core';
import { IgxColumnComponent, IgxGridDetailTemplateDirective } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxTabContentComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabItemComponent, IgxTabsComponent } from 'igniteui-angular/tabs';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxDividerDirective } from 'igniteui-angular/directives';
import { IgxLegendComponent, IgxPieChartCoreModule, IgxLegendModule, IgxCategoryChartModule } from 'igniteui-angular-charts';
import { employeesData } from '../../data/employeesData';
import { IgxPreventDocumentScrollDirective } from '../../../../../../src/app/directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-master-detail',
    styleUrls: ['./grid-master-detail.component.scss'],
    templateUrl: 'grid-master-detail.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxGridDetailTemplateDirective, IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabContentComponent, IgxAvatarComponent, IgxDividerDirective, IgxPieChartCoreModule, IgxLegendModule, IgxCategoryChartModule]
})

export class GridMasterDetailSampleComponent {
    @ViewChild('legend', { static: true })
    public legend: IgxLegendComponent;

    public data = [];
    public include = ['date', 'estimated', 'actual'];
    constructor() {
        this.data = employeesData;
    }

    public getHeight(selectedIndex) {
        switch (selectedIndex) {
            case 0: return 250;
            case 1: return 320;
            case 2: return 400;
            default: return 250;
        }
    }

    public formatPieLabel = (args) => args.item.Value + ' ' + args.item.Label;

    public formatDateLabel(item: any): string {
        return item.date.toLocaleDateString(undefined, { month: 'short' });
    }

    public formatValue(val: any): string {
        return val.toLocaleString('en-us', { maximumFractionDigits: 2 });
    }
    public getPieData(dataItem) {
        return [
            { Label: 'Won', Value: dataItem.deals_won },
            { Label: 'Lost', Value: dataItem.deals_lost },
            { Label: 'Pending', Value: dataItem.deals_pending }];
    }

    public getChartData(dataItem) {
        const year: number = new Date().getFullYear();
        const sales: any[] = [];
        for (let i = 0; i < 12; i++) {
            const value = this.getRandomNumber(2000, 10000);
            sales.push({
                estimated: value + this.getRandomNumber(-2000, 1000),
                actual: value, date: new Date(year, i, 1)
            });
        }
        dataItem.chartData = sales;
        return dataItem.chartData;
    }

    public gridData(dataItem) {
        const detailsData = [];
        let won = dataItem.deals_won;
        let lost = dataItem.deals_lost;
        let pending = dataItem.deals_pending;
        for (let j = 0; j < 3; j++) {
            detailsData.push({
                Q: 'Q' + (j + 1),
                Won: this.getRandomNumber(0, won),
                Lost: this.getRandomNumber(0, lost),
                Pending: this.getRandomNumber(0, pending)
            });
            won -= detailsData[j].Won;
            lost -= detailsData[j].Lost;
            pending -= detailsData[j].Pending;
        }
        detailsData.push({
            Q: 'Q4',
            Won: won,
            Lost: lost,
            Pending: pending
        });
        dataItem.gridData = detailsData;
        return dataItem.gridData;
    }

    public columnInit(event: IgxColumnComponent) {
        if (event.field === 'Q') {
            event.width = '50px';
            event.header = ' ';
        }
    }

    public getRandomNumber(min: number, max: number): number {
        return Math.round(min + Math.random() * (max - min));
    }
}
```
```html
<div class="grid__wrapper">
    <igx-grid [igxPreventDocumentScroll]="true" [data]="data" [autoGenerate]="false" height="592px" width="100%">
        <igx-column field="name" header="Name" width="250px"></igx-column>
        <igx-column field="position" header="Position"></igx-column>
        <igx-column field="company" header="Company"></igx-column>
        <igx-column field="email" header="Email"></igx-column>
        <igx-column field="referred_by" header="Referrer"></igx-column>
        <ng-template igxGridDetail let-dataItem>
            <div style="width:100%;" (keydown)='$event.stopPropagation()' [style.height.px]='getHeight(tabs.selectedIndex)'>
                <igx-tabs #tabs [selectedIndex]="0">
                    <igx-tab-item>
                        <igx-tab-header>
                            <span igxTabHeaderLabel>Details</span>
                        </igx-tab-header>
                        <igx-tab-content>
                            <div class="tabContent">
                                <div class="avatarContainer">
                                    <igx-avatar src="{{dataItem.avatar}}"
                                        shape="square" size="large"></igx-avatar>
                                    <h6>{{dataItem.name}}</h6>
                                </div>
                                <igx-divider [vertical]="true"></igx-divider>
                                <div class="tabInnerContent">
                                    <div class="breathingcontent">
                                        <div><span
                                                class="categoryStyle">Country:&nbsp;</span><span>{{dataItem.country}}</span>
                                        </div>
                                        <div><span class="categoryStyle">City:&nbsp;</span><span>{{dataItem.city}}</span>
                                        </div>
                                        <div><span
                                                class="categoryStyle">Street:&nbsp;</span><span>{{dataItem.street}}</span>
                                        </div>
                                        <div><span class="categoryStyle">Work
                                                Phone:&nbsp;</span><span>{{dataItem.work_phone}}</span></div>
                                        <div><span class="categoryStyle">Mobile
                                                Phone:&nbsp;</span><span>{{dataItem.mobile_phone}}</span></div>
                                    </div>
                                </div>
                            </div>
                        </igx-tab-content>
                    </igx-tab-item>
                    <igx-tab-item>
                        <igx-tab-header>
                            <span igxTabHeaderLabel>Deals</span>
                        </igx-tab-header>
                        <igx-tab-content>
                            <div class="tabContent">
                                <igx-pie-chart [dataSource]="getPieData(dataItem)" [formatLabel]="formatPieLabel"
                                    [outlines]="['transparent']"
                                    [brushes]="['rgb(171, 223, 29)', 'rgb(228, 19, 16)', 'rgb(0, 111, 138)']"
                                    class="details-chart" labelsPosition="insideEnd" leaderLineVisibility="collapsed"
                                    labelMemberPath="Label" valueMemberPath="Value">
                                </igx-pie-chart>
                                <igx-divider [vertical]="true"></igx-divider>
                                <igx-grid [data]="dataItem.gridData ? dataItem.gridData: gridData(dataItem)"
                                    [autoGenerate]="true" class="details-grid" columnWidth="70px"
                                    width="260px" height="206px" (columnInit)="columnInit($event)">
                                </igx-grid>
                            </div>
                        </igx-tab-content>
                    </igx-tab-item>
                    <igx-tab-item>
                        <igx-tab-header>
                            <span igxTabHeaderLabel>Sales</span>
                        </igx-tab-header>
                        <igx-tab-content>
                            <div class="tabContent" style="flex-direction: column;">
                                <igx-legend #legend orientation="horizontal"></igx-legend>
                                <igx-category-chart height="250px" [legend]="legend"
                                    [dataSource]="dataItem.chartData ? dataItem.chartData : getChartData(dataItem)"
                                    chartType="Line" chartTitle="Sales" subtitle="(Estimated, Actual)" xAxisInterval="1"
                                    [brushes]="['rgb(0, 111, 138)', 'rgb(171, 223, 29)']"
                                    [xAxisFormatLabel]="formatDateLabel" [includedProperties]="include"
                                    [crosshairsSnapToData]="false"
                                    [crosshairsDisplayMode]="'Both'" [crosshairsAnnotationEnabled]="true"
                                    isHorizontalZoomEnabled="false" isVerticalZoomEnabled="false">
                                </igx-category-chart>
                            </div>
                        </igx-tab-content>
                    </igx-tab-item>
                </igx-tabs>
            </div>
        </ng-template>
    </igx-grid>
</div>
```
```scss
@use '../../../variables' as *;

.categoryStyle{
    font-weight: 600;
}

.tabContent {
    padding: rem(24px) rem(8px);
    display: flex;
    justify-content: flex-start;
    margin: rem(10px);
}

.avatarContainer {
    display: flex;
    align-items: center;
    flex-direction: column;
}

igx-divider {
    margin: 0 rem(24px) !important;
}

h6 {
    margin-top: 1em;
}

.details-chart {
    width: rem(200px);
    background: contrast-color($color: 'gray', $variant: 900);
    background: contrast-color($color: 'gray', $variant: 900);
    padding: rem(16px);
    border-radius: rem(4px);
    border: rem(1px) solid contrast-color($color: 'gray', $variant: 900);
}

.tabContent igx-grid {
    box-shadow: none;
    border: rem(1px) solid contrast-color($color: 'gray', $variant: 900);
}

.grid__wrapper {
    --ig-size: var(--ig-size-medium);
    margin: rem(4px) rem(16px);
}
```


## Configuration

To configure the `igxGrid` to display in master-detail mode you need to specify a template inside the grid, marked with the `igxGridDetail` directive:

```html
 <igx-grid ... >
         <ng-template igxGridDetail let-dataItem>
              <!-- Custom detail template content here -->
        </ng-template>
    </igx-grid>
```

Context of the template is the master record data, so that values from the master record can be displayed in the detail template. For example:

```html
    <igx-grid ... >
         <ng-template igxGridDetail let-dataItem>
            <div *ngIf="dataItem.Category">
                <header>{{dataItem.Category.CategoryName}}</header>
                <span>{{dataItem.Category.Description}}</span>
            </div>
        </ng-template>
    </igx-grid>
```


## API

The expansion states can be controlled via the [`expansionStates`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#expansionStates) input of the `igxGrid`. States are stored in key-value pairs [row identifier, expansion state]. The property gets/sets the current expansion states and supports two-way binding:

```html
  <igx-grid [(expansionStates)]='expansionState' >
    ...
  </igx-grid>
```

Additional API methods for controlling the expansion states are also exposed:

- [`expandAll`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#expandAll)
- [`collapseAll`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#collapseAll)
- [`toggleRow`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#toggleRow)
- [`expandRow`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#expandRow)
- [`collapseRow`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#collapseRow)

## Keyboard navigation

- When focus is on a detail row:

  - `Arrow Up` - navigates one row up, focusing a cell from the previous row.
  - `Arrow Down` -  navigates one row down, focusing a cell from the next row.
  - `Tab` - Allows focus to move to the next focusable element inside the template if there are focusable elements, otherwise moves to the next grid row.
  - `Shift + Tab` -  moves the focus to the previous row.

- When focus is on a data row with expander:
  - `Alt + Arrow Right/ Down` - expands the row.
  - `Alt + Arrow Left/Down` - collapses the row.

## Known Issues and Limitations


| Known Limitations                                                                                                                                                  | Description                                                                                          |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- |
| Tab navigation inside the custom detail template may not update the master grid scroll position in case the next focused element is outside the visible view port. | Tab navigation inside the custom detail template is left up to the browser.                          |
| Details template will not be exported to Excel.                                                                                                                    | As the details template can contain any type of content we cannot export it to excel out of the box. |
| The search feature will not highlight elements from the details template.                                                                                          |                                                                                                      |


<div class="divider--half"></div>

## API References

- [IgxGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)
- [IgxGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
- [IgxColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)
- [IgxGridRow](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridrow.html)
- [IgxTreeGridRow](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridrow.html)
- [IgxHierarchicalGridRow](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridrow.html)
- [IgxGridCell](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html)
