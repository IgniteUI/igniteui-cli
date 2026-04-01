---
_tocName: Column Pinning
_premium: true
---
---title: Angular Grid Column Pinning - Ignite UI for Angular_description: Want to use the Pinning feature of the Ignite UI for Angular when you develop your next app? Easily lock column or change column order with rich API._keywords: lock column, ignite ui for angular, infragistics_license: commercial---# Angular Grid Column PinningA column or multiple columns can be pinned to the left or right side of the Angular UI Grid. **Column Pinning** in Ignite UI for Angular allows the end users to lock column in a particular column order, this will allow them to see it while horizontally scrolling the Grid. The Material UI Grid has a built-in column pinning UI, which can be used through the Grid's toolbar to change the pin state of the columns. In addition, you can define a custom UI and change the pin state of the columns via the Column Pinning API.## Angular Grid Column Pinning  Example```typescript
import { Component, ViewChild, ViewEncapsulation, OnInit, inject } from '@angular/core';
import { IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarPinningComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { DATA } from '../../data/customers';
import { ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [],
    selector: 'app-grid-sample',
    styleUrls: ['grid-toolbar-pinning.component.scss'],
    templateUrl: 'grid-toolbar-pinning.component.html',
    imports: [NgClass, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarPinningComponent, IgxColumnComponent]
})

export class PinningToolbarSampleComponent implements OnInit{
    private activatedRoute = inject(ActivatedRoute);

    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;

    public useDarkTheme: boolean = false;
    public data: any[];
    public columns: any[];

    public ngOnInit(): void {
        this.columns = [
            { field: 'CompanyName', header: 'Company Name', width: 300 },
            { field: 'ContactName', header: 'Contact Name', width: 200, pinned: true },
            { field: 'ContactTitle', header: 'Contact Title', width: 200, pinned: true },
            { field: 'Address', header: 'Address', width: 300 },
            { field: 'City', header: 'City', width: 120 },
            { field: 'Region', header: 'Region', width: 120 },
            { field: 'PostalCode', header: 'Postal Code', width: 150 },
            { field: 'Phone', header: 'Phone', width: 150 },
            { field: 'Fax', header: 'Fax', width: 150 }
        ];
        this.data = DATA;

        this.activatedRoute.queryParams.subscribe(params => {
            this.useDarkTheme = params.dark === 'true';
        });
    }

    public toggleColumn(col: IgxColumnComponent) {
        col.pinned ? col.unpin() : col.pin();
    }
}
```
```html
<div [ngClass]="{'grid__wrapper': true, 'dark-theme': useDarkTheme }" style='width: 100%;'>
  <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" [width]="'100%'" [height]="'480px'">
    <igx-grid-toolbar>
      <igx-grid-toolbar-actions>
        <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
      </igx-grid-toolbar-actions>
    </igx-grid-toolbar>

    @for (c of columns; track c) {
      <igx-column #col [field]="c.field" [header]="c.header" [width]="c.width" [pinned]='c.pinned'
        [hidden]='c.hidden' [headerClasses]="'customHeaderSyle'">
      </igx-column>
    }
  </igx-grid>
</div>
```
```scss
:host ::ng-deep .title {
    width: 100%;
}

.grid__wrapper {
    padding: 16px;
}
```## Column Pinning APIColumn pinning is controlled through the `pinned` input of the [`igx-column`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html). Pinned columns are rendered on the left side of the Grid by default and stay fixed through horizontal scrolling of the unpinned columns in the Grid body.```html<igx-grid #grid1 [data]="data | async" [width]="700px" [autoGenerate]="false" (columnInit)="initColumns($event)"
    (selected)="selectCell($event)">
    <igx-column [field]="Name" [pinned]="true"></igx-column>
    <igx-column [field]="AthleteNumber"></igx-column>
    <igx-column [field]="TrackProgress"></igx-column>
    <igx-paginator [perPage]="10">
    </igx-paginator></igx-grid>```You may also use the Grid's [`pinColumn`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#pinColumn) or [`unpinColumn`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#unpinColumn) methods of the [`IgxGridComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html) to pin or unpin columns by their field name:```typescriptthis.grid.pinColumn('AthleteNumber');this.grid.unpinColumn('Name');```Both methods return a boolean value indicating whether their respective operation is successful or not. Usually the reason they fail is that the column is already in the desired state.A column is pinned to the right of the rightmost pinned column. Changing the order of the pinned columns can be done by subscribing to the [`columnPin`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#columnPin) event and changing the [`insertAtIndex`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ipincolumneventargs.html#insertAtIndex) property of the event arguments to the desired position index.```html<igx-grid #grid1 [data]="data | async" [autoGenerate]="true" (columnPin)="columnPinning($event)"></igx-grid>``````typescriptpublic columnPinning(event) {
    if (event.column.field === 'Name') {
        event.insertAtIndex = 0;
    }}```## Pinning PositionYou can change the column pinning position via the [`pinning`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#pinning) configuration option. It allows you to set the columns position to either Start or End.When set to End the columns are rendered at the end of the grid, after the unpinned columns. Unpinned columns can be scrolled horizontally, while the pinned columns remain fixed on the right.```html<igx-grid [data]="data" [autoGenerate]="true" [pinning]="pinningConfig"></igx-grid>``````typescriptpublic pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };```### Demo```typescript
import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { ColumnPinningPosition } from 'igniteui-angular/core';
import { IPinningConfig, IgxCellHeaderTemplateDirective, IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarPinningComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular/directives';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { employeesData } from '../../data/employeesData';
import { athletesData } from '../../data/athletesData';
import { DatePipe } from '@angular/common';

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [],
    selector: 'app-grid-sample',
    styleUrls: ['grid-right-pinning.component.scss'],
    templateUrl: 'grid-right-pinning.component.html',
    imports: [IgxGridComponent, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarPinningComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxTooltipTargetDirective, IgxTooltipDirective, IgxAvatarComponent, IgxCellHeaderTemplateDirective, IgxIconComponent, DatePipe]
})

export class RightPinningSampleComponent implements OnInit{
    @ViewChild('grid1', { static: true })
    public grid1: IgxGridComponent;

    public data: any[];
    public employeesData: any[];
    public columns: any[];
    public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    private _columnsPinned: boolean = true;

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
            x.Agent = this.employeesData[i].name;
            x.AgentContact = this.employeesData[i].email;
            x.AgentPhone = this.employeesData[i].work_phone;
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
    <igx-grid #grid1 [data]="data" [width]="'100%'" [height]="'480px'" [pinning]="pinningConfig" [autoGenerate]="false">
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
        <igx-column field="Agent" header="Athlete Agent" width="140" [disablePinning]="true"></igx-column>
        <igx-column field="AgentContact" header="Agent's Email" width="200" [disablePinning]="true"></igx-column>
        <igx-column field="AgentPhone" header="Agent's Phone" width="200" [disablePinning]="true"></igx-column>
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
    </igx-grid>
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
import { Component, ViewChild, ViewEncapsulation, OnInit, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { IPinningConfig, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { ColumnPinningPosition } from 'igniteui-angular/core';
import { DATA } from '../../data/customers';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [],
    selector: 'app-grid-sample',
    styleUrls: ['grid-toolbar-pinning-both-sides.component.scss'],
    templateUrl: 'grid-toolbar-pinning-both-sides.component.html',
    imports: [
        NgClass,
        IgxGridComponent,
        IgxPreventDocumentScrollDirective,
        IgxGridToolbarComponent,
        IgxGridToolbarActionsComponent,
        IgxColumnComponent,
        IgxButtonDirective
    ]
})

export class GridBothSideToolbarPinningSampleComponent implements OnInit {
    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;

    public useDarkTheme: boolean = false;
    public data: any[];
    public columns: any[];
    public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };

    public ngOnInit(): void {
        this.columns = [
            { field: 'CompanyName', header: 'Company Name', width: 300 },
            { field: 'ContactName', header: 'Contact Name', width: 200, pinned: true, pinningPosition: ColumnPinningPosition.Start },
            { field: 'ContactTitle', header: 'Contact Title', width: 200, pinned: true, pinningPosition: ColumnPinningPosition.End },
            { field: 'Address', header: 'Address', width: 300 },
            { field: 'City', header: 'City', width: 120 },
            { field: 'Region', header: 'Region', width: 120 },
            { field: 'PostalCode', header: 'Postal Code', width: 150 },
            { field: 'Phone', header: 'Phone', width: 150 },
            { field: 'Fax', header: 'Fax', width: 150 }
        ];
        this.data = DATA;
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
<div
    [ngClass]="{ grid__wrapper: true, 'dark-theme': useDarkTheme }"
    style="width: 100%"
>
    <igx-grid
        [igxPreventDocumentScroll]="true"
        #grid1
        [data]="data"
        [width]="'100%'"
        [height]="'480px'"
        columnSelection="multiple"
        [pinning]="pinningConfig"
        [moving]="true"
    >
        <igx-grid-toolbar>
            <igx-grid-toolbar-actions>
                <button igxButton="contained" (click)="unpinColumn()"> Unpin Selected Columns </button>
                <button igxButton="contained" (click)="pinLeft()"> Pin Selected Left </button>
                <button igxButton="contained" (click)="pinRight()"> Pin Selected Right </button>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>

        @for (c of columns; track c) {
        <igx-column
            #col
            [field]="c.field"
            [header]="c.header"
            [width]="c.width"
            [pinned]="c.pinned"
            [hidden]="c.hidden"
            [headerClasses]="'customHeaderSyle'"
            [pinningPosition]="c.pinningPosition"
        >
        </igx-column>
        }
    </igx-grid>
</div>
```
```scss
:host ::ng-deep .title {
    width: 100%;
}

.grid__wrapper {
    padding: 16px;
}

.button {
    margin: 8px;
    width: 128px;
}
```## Custom Column Pinning UIYou can define your custom UI and change the pin state of the columns via the related API.Let's say that instead of a toolbar you would like to define pin icons in the column headers that the end user can click to change the particular column's pin state.This can be done by creating a header template for the column with a custom icon.```html<igx-grid #grid1 [data]="data" [width]="'100%'" [height]="'500px'">
    <igx-column #col *ngFor="let c of columns" [field]="c.field" [header]="c.header" [width]="c.width" [pinned]='c.pinned'
        [hidden]='c.hidden' [headerClasses]="'customHeaderSyle'">
        <ng-template igxHeader>
            <div class="title-inner">
                <span style="float:left">{{col.header}}</span>
                <igx-icon class="pin-icon" fontSet="fas" name="fa-thumbtack" (click)="toggleColumn(col)"></igx-icon>
            </div>
        </ng-template>
    </igx-column></igx-grid>```On click of the custom icon the pin state of the related column can be changed using the column's API methods.```typescriptpublic toggleColumn(col: ColumnType) {
    col.pinned ? col.unpin() : col.pin();}```### Demo```typescript
import { Component, ViewChild, ViewEncapsulation, OnInit, AfterViewInit, inject } from '@angular/core';
import { IgxCellHeaderTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { icons } from '../../services/svgIcons';

import { DATA } from '../../data/customers';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


const FILTERING_ICONS_FONT_SET = 'filtering-icons';
@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [],
    selector: 'app-grid-sample',
    styleUrls: ['grid-pinning.component.scss'],
    templateUrl: 'grid-pinning.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellHeaderTemplateDirective, IgxIconComponent]
})

export class PinningSampleComponent implements OnInit, AfterViewInit {
    private iconService = inject(IgxIconService);

    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;

    public data: any[];
    public columns: any[];

    public ngOnInit(): void {
        this.columns = [
            { field: 'ID', header: 'ID', width: 100, hidden: true },
            { field: 'CompanyName', header: 'Company Name', width: 300 },
            { field: 'ContactName', header: 'Contact Name', width: 200, pinned: true },
            { field: 'ContactTitle', header: 'Contact Title', width: 200, pinned: true },
            { field: 'Address', header: 'Address', width: 300 },
            { field: 'City', header: 'City', width: 120 },
            { field: 'Region', header: 'Region', width: 120 },
            { field: 'PostalCode', header: 'Postal Code', width: 150 },
            { field: 'Phone', header: 'Phone', width: 150 },
            { field: 'Fax', header: 'Fax', width: 150 }
        ];
        this.data = DATA;
    }

    public ngAfterViewInit() {
        const pinnedIcons = icons.filter(icon => icon.name === 'pin' || icon.name === 'unpin');
        pinnedIcons.forEach(icon => {
            if (!this.iconService.isSvgIconCached(icon.name, FILTERING_ICONS_FONT_SET)) {
                this.iconService.addSvgIconFromText(icon.name, icon.value, FILTERING_ICONS_FONT_SET);
            }
        });
    }

    public toggleColumn(col: IgxColumnComponent) {
        col.pinned ? col.unpin() : col.pin();
    }
}
```
```html
<div class="grid__wrapper" style='width: 100%;'>
  <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" [width]="'100%'" [height]="'480px'">
    @for (c of columns; track c) {
      <igx-column #col [field]="c.field" [header]="c.header" [width]="c.width"
        [pinned]='c.pinned' [hidden]='c.hidden' [headerClasses]="'customHeaderSyle'">
        <ng-template igxHeader>
          <div class="title-inner">
            <span class="header-text">{{col.header}}</span>
            <igx-icon class="pin-icon" [class.pinned]="col.pinned" [class.unpinned]="!col.pinned"
              family="filtering-icons" name="{{col.pinned ? 'unpin' : 'pin'}}" (click)="toggleColumn(col)">
            </igx-icon>
          </div>
        </ng-template>
      </igx-column>
    }
  </igx-grid>
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
```## Pinning Limitations- Setting column widths in percentage (%) explicitly makes the Grid body and header content to be misaligned when there are pinned columns. For column pinning to function correctly the column widths should be in pixels (px) or auto-assigned by the Grid.<div class="divider--half"></div>## StylingThe igxGrid allows styling through the [Ignite UI for Angular Theme Library](../themes/sass/component-themes.md). The grid's [theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme) exposes a wide variety of properties, which allow the customization of all the features of the grid.In the below steps, we are going through the steps of customizing the grid's Pinning styling.### Importing global themeTo begin the customization of the Pinning feature, you need to import the `index` file, where all styling functions and mixins are located.```scss@use "igniteui-angular/theming" as *;// IMPORTANT: Prior to Ignite UI for Angular version 13 use:// @import '~igniteui-angular/lib/core/styles/themes/index';```### Defining custom themeNext, create a new theme, that extends the [`grid-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme) and accepts the parameters, required to customize the Pinning feature as desired.```scss$custom-theme: grid-theme(
  $pinned-border-width: 5px,
  $pinned-border-style: double,
  $pinned-border-color: #ffcd0f,
  $cell-active-border-color: #ffcd0f);```>[!NOTE]>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-palette) and [`color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-color) functions. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.### Applying the custom themeThe easiest way to apply your theme is with a `sass` `@include` statement in the global styles file:```scss:host {
  @include tokens($custom-theme);}```### Demo```typescript
import { Component, ViewChild, OnInit, inject } from "@angular/core";
import { IgxCellHeaderTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { DATA } from "../../data/customers";
import { IgxPreventDocumentScrollDirective } from "../../directives/prevent-scroll.directive";

@Component({
    selector: "app-grid-sample",
    styleUrls: ["grid-pinning-styling.component.scss"],
    templateUrl: "grid-pinning-styling.component.html",
    imports: [
        IgxGridComponent,
        IgxPreventDocumentScrollDirective,
        IgxColumnComponent,
        IgxCellHeaderTemplateDirective,
        IgxIconComponent
    ]
})
export class PinningStylingComponent implements OnInit {
    private iconService = inject(IgxIconService);
    @ViewChild("grid1", { static: true }) public grid1: IgxGridComponent;

    constructor() {
        this.iconService.setFamily("fas", {
            className: "fas",
            type: "font",
            prefix: "fa-"
        });
    }

    public data: any[];
    public columns: any[];
    public ngOnInit(): void {
        this.columns = [
            { field: "ID", header: "ID", width: 100, hidden: true },
            { field: "CompanyName", header: "Company Name", width: 300 },
            {
                field: "ContactName",
                header: "Contact Name",
                width: 200,
                pinned: true
            },
            {
                field: "ContactTitle",
                header: "Contact Title",
                width: 200,
                pinned: true
            },
            { field: "Address", header: "Address", width: 300 },
            { field: "City", header: "City", width: 120 },
            { field: "Region", header: "Region", width: 120 },
            { field: "PostalCode", header: "Postal Code", width: 150 },
            { field: "Phone", header: "Phone", width: 150 },
            { field: "Fax", header: "Fax", width: 150 }
        ];
        this.data = DATA;
    }

    public toggleColumn(col: IgxColumnComponent) {
        col.pinned ? col.unpin() : col.pin();
    }
}
```
```html
<div class="grid__wrapper" style="width: 100%;">
  <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" [width]="'100%'" [height]="'480px'">
    @for (c of columns; track c) {
      <igx-column #col [field]="c.field" [header]="c.header" [width]="c.width"
        [pinned]="c.pinned" [hidden]="c.hidden" [headerClasses]="'customHeaderSyle'">
        <ng-template igxHeader>
          <div class="title-inner">
            <span style="float:left">{{col.header}}</span>
            <igx-icon class="pin-icon" [class.pinned]="col.pinned" [class.unpinned]="!col.pinned"
            family="fas" name="fa-thumbtack" (click)="toggleColumn(col)"></igx-icon>
          </div>
        </ng-template>
      </igx-column>
    }
  </igx-grid>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$custom-theme: grid-theme(
  $pinned-border-width: 5px,
  $pinned-border-style: double,
  $pinned-border-color: #ffcd0f,
  $cell-active-border-color: #ffcd0f
);

:host {
  @include tokens($custom-theme);
}
```>[!NOTE]>The sample will not be affected by the selected global theme from `Change Theme`.## API References- [IgxGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)- [IgxColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)## Additional Resources<div class="divider--half"></div>- [Grid overview](grid.md)- [Virtualization and Performance](virtualization.md)- [Paging](paging.md)- [Filtering](filtering.md)- [Sorting](sorting.md)- [Summaries](summaries.md)- [Column Moving](column-moving.md)- [Column Resizing](column-resizing.md)- [Selection](selection.md)<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
