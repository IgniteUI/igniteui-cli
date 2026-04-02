---
_tocName: Column Pinning
_premium: true
---
---title: Angular Hierarchical Grid Column Pinning - Ignite UI for Angular_description: Want to use the Pinning feature of the Ignite UI for Angular when you develop your next app? Easily lock column or change column order with rich API._keywords: lock column, ignite ui for angular, infragistics_license: commercial_canonicalLink: grid/column-pinning---# Angular Hierarchical Grid Column PinningA column or multiple columns can be pinned to the left or right side of the Angular UI Grid. **Column Pinning** in Ignite UI for Angular allows the end users to lock column in a particular column order, this will allow them to see it while horizontally scrolling the Hierarchical Grid. The Material UI Grid has a built-in column pinning UI, which can be used through the Hierarchical Grid's toolbar to change the pin state of the columns. In addition, you can define a custom UI and change the pin state of the columns via the Column Pinning API.## Angular Hierarchical Grid Column Pinning  Example```typescript
import { Component, OnInit, inject } from '@angular/core';
import { CUSTOMERS } from '../../data/hierarchical-data';
import { ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarPinningComponent } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-toolbar-pinning',
    styleUrls: ['./hierarchical-grid-toolbar-pinning.component.scss'],
    templateUrl: 'hierarchical-grid-toolbar-pinning.component.html',
    imports: [NgClass, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarPinningComponent, IgxColumnComponent, IgxRowIslandComponent]
})
export class HGridToolbarPinningComponent implements OnInit {
    private activatedRoute = inject(ActivatedRoute);

    public localdata;
    public useDarkTheme: boolean = false;

    constructor() {
        this.localdata = CUSTOMERS;
    }

    public ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(params => {
            this.useDarkTheme = params.dark === 'true';
        });
    }

}
```
```html
<div [ngClass]="{'grid__wrapper': true, 'dark-theme': useDarkTheme }">
<igx-hierarchical-grid [igxPreventDocumentScroll]="true"  class="hierarchicalGrid" [data]="localdata" [autoGenerate]="false"
    [height]="'100%'" [width]="'100%'" #hierarchicalGrid>
        <igx-grid-toolbar>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>

    <igx-column field="CompanyName" header="Company Name" width="200px" [pinned]="true"></igx-column>
    <igx-column field="ContactName" header="Contact Name" width="150px"></igx-column>
    <igx-column field="ContactTitle" header="Contact Title" width="200px"></igx-column>
    <igx-column field="Address" width="200px"></igx-column>
    <igx-column field="City" width="150px"></igx-column>
    <igx-column field="PostalCode" header="Postal Code" width="150px"></igx-column>
    <igx-column field="Country" width="150px"></igx-column>
    <igx-column field="Phone" width="150px"></igx-column>
    <igx-column field="Fax" width="150px"></igx-column>
    <igx-row-island [height]="null" [key]="'Orders'" [autoGenerate]="false">
            <igx-column field="OrderDate" header="Order Date" [dataType]="'date'" width="150px"></igx-column>
            <igx-column field="RequiredDate" header="Required Date" [dataType]="'date'" width="150px"></igx-column>
            <igx-column field="ShippedDate" header="Shipped Date" [dataType]="'date'" width="150px"></igx-column>
            <igx-column field="ShipVia" header="Ship Via" width="150px"></igx-column>
            <igx-column field="Freight" width="150px"></igx-column>
            <igx-column field="ShipName" header="Ship Name" width="200px" [pinned]="true"></igx-column>
            <igx-column field="ShipAddress" header="Ship Address" width="150px"></igx-column>
            <igx-column field="ShipCity" header="Ship City" width="150px"></igx-column>
            <igx-column field="ShipPostalCode" header="Ship Postal Code" width="150px"></igx-column>
            <igx-column field="ShipCountry" header="Ship Country" width="150px"></igx-column>
        <igx-row-island [height]="null" [key]="'OrderDetails'" [autoGenerate]="false">
                <igx-column field="UnitPrice" header="Unit Price" width="150px"></igx-column>
                <igx-column field="Quantity" width="150px"></igx-column>
                <igx-column field="Discount" width="150px"></igx-column>
                <igx-column field="Weight" width="150px"></igx-column>
                <igx-column field="Length" width="150px"></igx-column>
                <igx-column field="TotalPrice" width="150px"></igx-column>
        </igx-row-island>
    </igx-row-island>
</igx-hierarchical-grid>
</div>
```
```scss
:host ::ng-deep .title {
    width: 100%;
}

:host {
    height: 110vh;
}

.grid__wrapper {
    margin: 0 auto 4rem;
    padding: 1rem;
    height: 100%;
}
```## Column Pinning APIColumn pinning is controlled through the `pinned` input of the [`igx-column`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html). Pinned columns are rendered on the left side of the Hierarchical Grid by default and stay fixed through horizontal scrolling of the unpinned columns in the Hierarchical Grid body.```html<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'800px'" #hierarchicalGrid>
    <igx-column [field]="Artist" [width]="200px" [pinned]="true"></igx-column>
    <igx-column [field]="Debut" [width]="200px"></igx-column></igx-hierarchical-grid>```You may also use the Hierarchical Grid's [`pinColumn`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#pinColumn) or [`unpinColumn`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#unpinColumn) methods of the [`IgxHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html) to pin or unpin columns by their field name:```typescriptthis.hierarchicalGrid.pinColumn('Artist');this.hierarchicalGrid.unpinColumn('Debut');```Both methods return a boolean value indicating whether their respective operation is successful or not. Usually the reason they fail is that the column is already in the desired state.A column is pinned to the right of the rightmost pinned column. Changing the order of the pinned columns can be done by subscribing to the [`columnPin`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#columnPin) event and changing the [`insertAtIndex`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ipincolumneventargs.html#insertAtIndex) property of the event arguments to the desired position index.```html<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'800px'" 
        (columnPin)="columnPinning($event)" #hierarchicalGrid></igx-hierarchical-grid> ``````typescriptpublic columnPinning(event) {
    if (event.column.field === 'Artist') {
        event.insertAtIndex = 0;
    }}```## Pinning PositionYou can change the column pinning position via the [`pinning`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#pinning) configuration option. It allows you to set the columns position to either Start or End.When set to End the columns are rendered at the end of the grid, after the unpinned columns. Unpinned columns can be scrolled horizontally, while the pinned columns remain fixed on the right.```html<igx-hierarchical-grid #grid1 [data]="data" [autoGenerate]="true" [pinning]="pinningConfig"></igx-hierarchical-grid>``````typescriptpublic pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };```### Demo```typescript
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnPinningPosition } from 'igniteui-angular/core';
import { IPinningConfig, IgxCellHeaderTemplateDirective, IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarPinningComponent } from 'igniteui-angular/grids/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular/directives';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { employeesData } from '../../data/employeesData';
import { athletesData } from '../../data/athletesData';
import { DatePipe } from '@angular/common';

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [],
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'hierarchical-grid-sample',
    styleUrls: ['hierarchical-grid-right-pinning.component.scss'],
    templateUrl: 'hierarchical-grid-right-pinning.component.html',
    imports: [IgxHierarchicalGridComponent, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarPinningComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxTooltipTargetDirective, IgxTooltipDirective, IgxAvatarComponent, IgxCellHeaderTemplateDirective, IgxIconComponent, IgxRowIslandComponent, DatePipe]
})

export class HierarchicalGridRightPinningSampleComponent implements OnInit {
    @ViewChild('grid1', { static: true })
    public grid1: IgxHierarchicalGridComponent;

    public data: any[];
    public employeesData: any[];
    public columns: any[];
    public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };
    private _columnsPinned = true;

    public ngOnInit(): void {
        this.data = athletesData;
        this.employeesData = employeesData;
        let i = 0;
        this.data.forEach((x) => {
            x.FirstPlaces = Math.floor(Math.random() * Math.floor(3));
            x.SecondPlaces = Math.floor(Math.random() * Math.floor(4));
            x.ThirdPlaces = Math.floor(Math.random() * Math.floor(5));
            x.RegistrationDate = this.generateReadableDate(x.Registered);
            x.Birthday = this.generateReadableDate(this.employeesData[i].birthday);
            x.Sponsor = this.employeesData[i].company;
            x.AgentData = [this.employeesData[i]];
            i++;
        });
    }

    public toggleColumn(col: IgxColumnComponent): void {
        col.pinned ? col.unpin() : col.pin();
    }

    public get columnsPinned(): boolean {
        return this._columnsPinned;
    }

    public set columnsPinned(pinned) {
        this._columnsPinned = !this._columnsPinned;
    }

    private generateReadableDate(timestamp: string): Date {
        let dateObj = new Date(timestamp);
        if (isNaN(dateObj.getTime())) {
            dateObj = new Date(timestamp.split(' ')[0]);
        }
        return dateObj;
    }

}
```
```html
<div class="grid__wrapper">
    <igx-hierarchical-grid #grid1 [data]="data" [width]="'100%'" [height]="'480px'" [pinning]="pinningConfig" [autoGenerate]="false">
        <igx-grid-toolbar>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>

        <igx-column field="CountryName" header="Team" width="88">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner country-cell">
                    <img [src]="cell.row.data.CountryFlag" class="country-flag" #target="tooltipTarget" [igxTooltipTarget]="tooltipRef">
                    <div #tooltipRef="tooltip" igxTooltip>
                        {{ cell.row.data.CountryName }}
                    </div>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Avatar" header="Photo" dataType="string" width="80" [disablePinning]="true">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner avatar-cell">
                    <igx-avatar [src]="cell.row.data.Avatar" shape="circle" size="small"></igx-avatar>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Name" header="Name" [disablePinning]="true"></igx-column>
        <igx-column field="AthleteNumber" header="Number"></igx-column>
        <igx-column field="BeatsPerMinute" header="BPM"></igx-column>
        <igx-column field="TopSpeed" header="Top Speed"></igx-column>
        <igx-column field="TrackProgress" header="Track Progress" [disablePinning]="true"></igx-column>
        <igx-column field="RegistrationDate" header="Date of Registration" width="170" [disablePinning]="true">
            <ng-template igxCell let-cell>
                {{ cell | date:'longDate' }}
            </ng-template>
        </igx-column>
        <igx-column field="Birthday" header="Birthday" width="170" [disablePinning]="true">
            <ng-template igxCell let-cell>
                {{ cell | date:'longDate' }}
            </ng-template>
        </igx-column>
        <igx-column field="Sponsor" header="Sponsor Company" width="160"></igx-column>
        <igx-column #goldColumn field="FirstPlaces" header="Gold" width="110" [pinned]="true">
            <ng-template igxHeader>
                <div class="title-inner">
                    <span style="float:left">{{ goldColumn.header }}</span>
                    <igx-icon [style.color]="'#d2c206'">emoji_events</igx-icon>
                </div>
            </ng-template>
        </igx-column>
        <igx-column #silverColumn field="SecondPlaces" header="Silver" width="110" [pinned]="true">
            <ng-template igxHeader>
                <div class="title-inner">
                    <span style="float:left">{{ silverColumn.header }}</span>
                    <igx-icon [style.color]="'#c5c5c5'">emoji_events</igx-icon>
                </div>
            </ng-template>
        </igx-column>
        <igx-column #bronzeColumn field="ThirdPlaces" header="Bronze" width="110" [pinned]="true">
            <ng-template igxHeader>
                <div class="title-inner">
                    <span style="float:left">{{ bronzeColumn.header }}</span>
                    <igx-icon [style.color]="'#bb8b1d'">emoji_events</igx-icon>
                </div>
            </ng-template>
        </igx-column>
        <igx-row-island [height]="null" [key]="'AgentData'" [autoGenerate]="false" [pinning]="pinningConfig">
            <igx-column field="avatar" header="Agent's Photo" width="80">
                <ng-template igxCell let-cell="cell">
                    <div class="cell__inner avatar-cell">
                        <igx-avatar [src]="cell.row.data.avatar" shape="circle" size="small"></igx-avatar>
                    </div>
                </ng-template>
            </igx-column>
            <igx-column field="name" header="Agent"></igx-column>
            <igx-column field="company" header="Associated Company" width="160"></igx-column>
            <igx-column field="email" header="Work E-mail" width="250"></igx-column>
            <igx-column field="work_phone" header="Work Phone" width="160"></igx-column>
            <igx-column field="street" header="Street" width="200" [pinned]="true"></igx-column>
            <igx-column field="city" header="City" [pinned]="true"></igx-column>
            <igx-column field="post_code" header="Post Code"></igx-column>
            <igx-column field="state" header="State"></igx-column>
            <igx-column field="country" header="Country" [pinned]="true"></igx-column>
            <igx-column field="refferred_by" header="Reffered by"></igx-column>
        </igx-row-island>
    </igx-hierarchical-grid>
</div>
```
```scss
.title-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.grid__wrapper {
    margin: 0 auto;
    padding: 16px;
}

img.country-flag {
    width: 35px;
    height: 20px;
}
```### Column Pinning on Both SidesAdditionally, you can specify each column pinning location separately, allowing you to pin columns to both sides of the grid for greater convenience and easier optimization of data sets. Please refer to the demo below for further reference. In order to pin a column, please either select a column by clicking on a header and use the pin buttons added to the toolbar, or simply drag a column to another pinned one.```typescript
import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { ColumnPinningPosition } from 'igniteui-angular/core';
import { IPinningConfig, IgxCellHeaderTemplateDirective, IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarTitleComponent } from 'igniteui-angular/grids/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxButtonDirective, IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular/directives';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { employeesData } from "../../data/employeesData";
import { athletesData } from "../../data/athletesData";
import { DatePipe } from "@angular/common";

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [],
    selector: "hierarchical-grid-sample-both-side-pinning",
    styleUrls: ["hierarchical-grid-both-sides-pinning.component.scss"],
    templateUrl: "hierarchical-grid-both-sides-pinning.component.html",
    imports: [
        IgxHierarchicalGridComponent,
        IgxGridToolbarComponent,
        IgxGridToolbarActionsComponent,
        IgxColumnComponent,
        IgxCellTemplateDirective,
        IgxTooltipTargetDirective,
        IgxTooltipDirective,
        IgxAvatarComponent,
        IgxCellHeaderTemplateDirective,
        IgxIconComponent,
        IgxRowIslandComponent,
        DatePipe,
        IgxButtonDirective,
        IgxGridToolbarTitleComponent
    ]
})
export class HierarchicalGridBothSidePinningSampleComponent implements OnInit {
    @ViewChild("grid1", { static: true })
    public grid1: IgxHierarchicalGridComponent;

    public data: any[];
    public employeesData: any[];
    public columns: any[];
    public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };
    public start = ColumnPinningPosition.Start;
    public end = ColumnPinningPosition.End;

    public ngOnInit(): void {
        this.data = athletesData;
        this.employeesData = employeesData;
        let i = 0;
        this.data.forEach((x) => {
            x.FirstPlaces = Math.floor(Math.random() * Math.floor(3));
            x.SecondPlaces = Math.floor(Math.random() * Math.floor(4));
            x.ThirdPlaces = Math.floor(Math.random() * Math.floor(5));
            x.RegistrationDate = this.generateReadableDate(x.Registered);
            x.Birthday = this.generateReadableDate(
                this.employeesData[i].birthday
            );
            x.Sponsor = this.employeesData[i].company;
            x.AgentData = [this.employeesData[i]];
            i++;
        });
    }

    private generateReadableDate(timestamp: string): Date {
        let dateObj = new Date(timestamp);
        if (isNaN(dateObj.getTime())) {
            dateObj = new Date(timestamp.split(" ")[0]);
        }
        return dateObj;
    }

    public pinLeft() {
        this.grid1.selectedColumns().forEach((col: IgxColumnComponent) => {
            if (col.pinned) {
                col.unpin();
            }
            col.pin(undefined, ColumnPinningPosition.Start);
        });
    }

    public pinRight() {
        this.grid1.selectedColumns().forEach((col: IgxColumnComponent) => {
            if (col.pinned) {
                col.unpin();
            }
            col.pin(undefined, ColumnPinningPosition.End);
        });
    }

    public unpinColumn() {
        this.grid1.selectedColumns().forEach((col: IgxColumnComponent) => {
                col.unpin();
        });
    }
}
```
```html
<div class="grid__wrapper">
  <igx-hierarchical-grid
    #grid1
    [data]="data"
    width="100%"
    height="480px"
    [pinning]="pinningConfig"
    [autoGenerate]="false"
    columnSelection="multiple"
    [pinning]="pinningConfig"
    [moving]="true"
  >
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>Hierarchical Grid</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <button igxButton="contained" (click)="unpinColumn()"> Unpin Selected Columns </button>
                <button igxButton="contained" (click)="pinLeft()"> Pin Selected Left </button>
                <button igxButton="contained" (click)="pinRight()"> Pin Selected Right </button>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>

    <igx-column field="CountryName" header="Team" width="88">
      <ng-template igxCell let-cell="cell">
        <div class="cell__inner country-cell">
          <img
            [src]="cell.row.data.CountryFlag"
            class="country-flag"
            #target="tooltipTarget"
            [igxTooltipTarget]="tooltipRef"
          />
          <div #tooltipRef="tooltip" igxTooltip>
            {{ cell.row.data.CountryName }}
          </div>
        </div>
      </ng-template>
    </igx-column>

    <igx-column field="Avatar" header="Photo" dataType="string" width="80" [disablePinning]="true">
      <ng-template igxCell let-cell="cell">
        <div class="cell__inner avatar-cell">
          <igx-avatar [src]="cell.row.data.Avatar" shape="circle" size="small"></igx-avatar>
        </div>
      </ng-template>
    </igx-column>

    <igx-column field="Name" header="Name" [disablePinning]="true"></igx-column>
    <igx-column field="AthleteNumber" header="Number"></igx-column>
    <igx-column field="BeatsPerMinute" header="BPM"></igx-column>
    <igx-column field="TopSpeed" header="Top Speed"></igx-column>
    <igx-column field="TrackProgress" header="Track Progress" [disablePinning]="true"></igx-column>

    <!-- Use the value from the cell context for date pipes -->
    <igx-column field="RegistrationDate" header="Date of Registration" width="170" [disablePinning]="true">
      <ng-template igxCell let-value>
        {{ value | date: 'longDate' }}
      </ng-template>
    </igx-column>

    <igx-column field="Birthday" header="Birthday" width="170" [disablePinning]="true">
      <ng-template igxCell let-value>
        {{ value | date: 'longDate' }}
      </ng-template>
    </igx-column>

    <igx-column field="Sponsor" header="Sponsor Company" width="160"></igx-column>

    <igx-column #goldColumn field="FirstPlaces" header="Gold" width="110" [pinned]="true">
      <ng-template igxHeader>
        <div class="title-inner">
          <span style="float: left">{{ goldColumn.header }}</span>
          <igx-icon [style.color]="'#d2c206'">emoji_events</igx-icon>
        </div>
      </ng-template>
    </igx-column>

    <igx-column #silverColumn field="SecondPlaces" header="Silver" width="110" [pinned]="true">
      <ng-template igxHeader>
        <div class="title-inner">
          <span style="float: left">{{ silverColumn.header }}</span>
          <igx-icon [style.color]="'#c5c5c5'">emoji_events</igx-icon>
        </div>
      </ng-template>
    </igx-column>

    <igx-column #bronzeColumn field="ThirdPlaces" header="Bronze" width="110" [pinned]="true">
      <ng-template igxHeader>
        <div class="title-inner">
          <span style="float: left">{{ bronzeColumn.header }}</span>
          <igx-icon [style.color]="'#bb8b1d'">emoji_events</igx-icon>
        </div>
      </ng-template>
    </igx-column>

    <igx-row-island [height]="null" [key]="'AgentData'" [moving]="true" [autoGenerate]="false" [pinning]="pinningConfig" columnSelection="multiple">
        <igx-grid-toolbar>
            <igx-grid-toolbar-title>Agent Data</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <button igxButton="contained">Add Agent</button>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>
      <igx-column field="avatar" header="Agent's Photo" width="80">
        <ng-template igxCell let-cell="cell">
          <div class="cell__inner avatar-cell">
            <igx-avatar [src]="cell.row.data.avatar" shape="circle" size="small"></igx-avatar>
          </div>
        </ng-template>
      </igx-column>

      <igx-column field="name" header="Agent"></igx-column>
      <igx-column field="company" header="Associated Company" width="160"></igx-column>
      <igx-column field="email" header="Work E-mail" width="250"></igx-column>
      <igx-column field="work_phone" header="Work Phone" width="160"></igx-column>

      <igx-column field="street" header="Street" width="200" [pinned]="true" [pinningPosition]="start"></igx-column>
      <igx-column field="city" header="City" [pinned]="true"></igx-column>
      <igx-column field="post_code" header="Post Code"></igx-column>
      <igx-column field="state" header="State"></igx-column>
      <igx-column field="country" header="Country" [pinned]="true"></igx-column>
      <igx-column field="refferred_by" header="Referred by"></igx-column>
    </igx-row-island>
  </igx-hierarchical-grid>
</div>
```
```scss
.title-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.grid__wrapper {
    margin: 0 auto;
    padding: 16px;
}

img.country-flag {
    width: 35px;
    height: 20px;
}
```## Custom Column Pinning UIYou can define your custom UI and change the pin state of the columns via the related API.Let's say that instead of a toolbar you would like to define pin icons in the column headers that the end user can click to change the particular column's pin state.This can be done by creating a header template for the column with a custom icon.```html<ng-template igxHeader let-column #pinTemplate>
    <div class="title-inner">
        <span style="float:left">{{column.header || column.field}}</span>
        <igx-icon class="pin-icon" [class.pinned]="column.pinned" [class.unpinned]="!column.pinned" fontSet="fas" name="fa-thumbtack"
            (click)="toggleColumn(column)"></igx-icon>
    </div></ng-template><igx-hierarchical-grid class="hierarchicalGrid" [data]="localdata" [autoGenerate]="false"
    [height]="'500px'" [width]="'100%'" #hierarchicalGrid>
    <igx-column field="CompanyName" header="Company Name" [headerTemplate]="pinTemplate" width="200px" [pinned]="true"></igx-column>
    <igx-column field="ContactName" header="Contact Name" [headerTemplate]="pinTemplate" width="150px"></igx-column>
    <igx-column field="ContactTitle" header="Contact Title" [headerTemplate]="pinTemplate" width="200px"></igx-column>
    <igx-row-island [key]="'Orders'" [autoGenerate]="false">
        <igx-column field="OrderDate" header="Order Date" [headerTemplate]="pinTemplate" [dataType]="'date'" width="150px"></igx-column>
        <igx-column field="RequiredDate" header="Required Date" [headerTemplate]="pinTemplate" [dataType]="'date'" width="150px"></igx-column>
        <igx-column field="ShippedDate" header="Shipped Date" [headerTemplate]="pinTemplate" [dataType]="'date'" width="150px"></igx-column>
        <igx-column field="ShipVia" header="Ship Via" [headerTemplate]="pinTemplate" width="150px"></igx-column>
        <igx-row-island [key]="'OrderDetails'" [autoGenerate]="false">
            <igx-column field="UnitPrice" header="Unit Price" width="150px"></igx-column>
            <igx-column field="Quantity" width="150px"></igx-column>
            <igx-column field="Discount" width="150px"></igx-column>
        </igx-row-island>
    </igx-row-island></igx-hierarchical-grid>```On click of the custom icon the pin state of the related column can be changed using the column's API methods.```typescriptpublic toggleColumn(col: ColumnType) {
    col.pinned ? col.unpin() : col.pin();}```### Demo```typescript
import { AfterViewInit, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ColumnType } from 'igniteui-angular/core';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IgxCellHeaderTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { CUSTOMERS } from '../../data/hierarchical-data';
import { icons } from "../../services/svgIcons";
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

const FILTERING_ICONS_FONT_SET = 'filtering-icons';
@Component({
    selector: 'app-hierarchical-grid-pinning',
    styleUrls: ['./hierarchical-grid-pinning.component.scss'],
    templateUrl: 'hierarchical-grid-pinning.component.html',
    imports: [IgxCellHeaderTemplateDirective, IgxIconComponent, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxRowIslandComponent]
})

export class HGridPinningSampleComponent implements AfterViewInit {
    private cdr = inject(ChangeDetectorRef);
    private iconService = inject(IgxIconService);

    public localdata;

    constructor() {
        this.localdata = CUSTOMERS;
    }


    public ngAfterViewInit() {
        const pinnedIcons = icons.filter(icon => icon.name === "pin" || icon.name === "unpin");
        pinnedIcons.forEach(icon => {
            if (!this.iconService.isSvgIconCached(icon.name, FILTERING_ICONS_FONT_SET)) {
                this.iconService.addSvgIconFromText(icon.name, icon.value, FILTERING_ICONS_FONT_SET);
            }
        });
    }

    public toggleColumn(column: ColumnType) {
        column.pinned ? column.unpin() : column.pin();
        this.cdr.detectChanges();
    }
}
```
```html
<div class="grid__wrapper">
<ng-template igxHeader let-column #pinTemplate>
    <div class="title-inner">
        <span class="header-text">{{column.header || column.field}}</span>
        <igx-icon class="pin-icon" [class.pinned]="column.pinned" [class.unpinned]="!column.pinned"
            family="filtering-icons" name="{{column.pinned ? 'unpin' : 'pin'}}" (click)="toggleColumn(column)">
        </igx-icon>
    </div>
</ng-template>
<igx-hierarchical-grid [igxPreventDocumentScroll]="true"  class="hierarchicalGrid" [data]="localdata" [autoGenerate]="false"
    [height]="'480px'" [width]="'100%'" #hierarchicalGrid>
    <igx-column field="CompanyName" header="Company Name" [headerTemplate]="pinTemplate" width="200px" [pinned]="true"></igx-column>
    <igx-column field="ContactName" header="Contact Name" [headerTemplate]="pinTemplate" width="150px"></igx-column>
    <igx-column field="ContactTitle" header="Contact Title" [headerTemplate]="pinTemplate" width="200px"></igx-column>
    <igx-column field="Address" [headerTemplate]="pinTemplate" width="200px"></igx-column>
    <igx-column field="City" [headerTemplate]="pinTemplate" width="150px"></igx-column>
    <igx-column field="PostalCode" header="Postal Code" [headerTemplate]="pinTemplate" width="150px"></igx-column>
    <igx-column field="Country" [headerTemplate]="pinTemplate" width="150px"></igx-column>
    <igx-column field="Phone" [headerTemplate]="pinTemplate" width="150px"></igx-column>
    <igx-column field="Fax" [headerTemplate]="pinTemplate" width="150px"></igx-column>
    <igx-row-island [height]="null" [key]="'Orders'" [autoGenerate]="false">
            <igx-column field="OrderDate" header="Order Date" [headerTemplate]="pinTemplate" [dataType]="'date'" width="150px"></igx-column>
            <igx-column field="RequiredDate" header="Required Date" [headerTemplate]="pinTemplate" [dataType]="'date'" width="150px"></igx-column>
            <igx-column field="ShippedDate" header="Shipped Date" [headerTemplate]="pinTemplate" [dataType]="'date'" width="150px"></igx-column>
            <igx-column field="ShipVia" header="Ship Via" [headerTemplate]="pinTemplate" width="150px"></igx-column>
            <igx-column field="Freight" [headerTemplate]="pinTemplate" width="150px"></igx-column>
            <igx-column field="ShipName" header="Ship Name" [headerTemplate]="pinTemplate" width="200px" [pinned]="true"></igx-column>
            <igx-column field="ShipAddress" header="Ship Address" [headerTemplate]="pinTemplate" width="150px"></igx-column>
            <igx-column field="ShipCity" header="Ship City" [headerTemplate]="pinTemplate" width="150px"></igx-column>
            <igx-column field="ShipPostalCode" header="Ship Postal Code" [headerTemplate]="pinTemplate" width="150px"></igx-column>
            <igx-column field="ShipCountry" header="Ship Country" [headerTemplate]="pinTemplate" width="150px"></igx-column>
        <igx-row-island [height]="null" [key]="'OrderDetails'" [autoGenerate]="false">
                <igx-column field="UnitPrice" header="Unit Price" width="150px"></igx-column>
                <igx-column field="Quantity" width="150px"></igx-column>
                <igx-column field="Discount" width="150px"></igx-column>
        </igx-row-island>
    </igx-row-island>
</igx-hierarchical-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 0 auto;
    padding: 16px;
}

.title-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.pin-icon {
    margin-left: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.pinned {
    color: #444;

    &:hover {
        color: #999;
    }
}

.unpinned {
    color: #999;

    &:hover {
        color: #444;
    }
}
```## Pinning Limitations- Setting column widths in percentage (%) explicitly makes the Hierarchical Grid body and header content to be misaligned when there are pinned columns. For column pinning to function correctly the column widths should be in pixels (px) or auto-assigned by the Hierarchical Grid.<div class="divider--half"></div>## API References- [IgxHierarchicalGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html)- [IgxColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)## Additional Resources<div class="divider--half"></div>- [Hierarchical Grid overview](hierarchical-grid.md)- [Virtualization and Performance](virtualization.md)- [Paging](paging.md)- [Filtering](filtering.md)- [Sorting](sorting.md)- [Summaries](summaries.md)- [Column Moving](column-moving.md)- [Column Resizing](column-resizing.md)- [Selection](selection.md)<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
