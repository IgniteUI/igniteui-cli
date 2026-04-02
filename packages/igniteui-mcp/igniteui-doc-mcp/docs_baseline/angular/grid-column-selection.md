---
_tocName: Column Selection
_premium: true
---
---title: Angular Grid Column Selection - Ignite UI for Angular_description: Learn how to configure column selection with Ignite UI for Angular Data grid. This makes grid interactions much easier and faster than ever._keywords: column selection, igniteui for angular, infragistics_license: commercial---# Angular Grid Column SelectionThe Column selection feature provides an easy way to select an entire column with a single click. It emphasizes the importance of a particular column by focusing the header cell(s) and everything below. The feature comes with a rich [`API`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest) that allows for manipulation of the selection state, data extraction from the selected fractions and data analysis operations and visualizations.## Angular Column Selection Example<div class="divider--half"></div>The sample below demonstrates the three types of Grid's **column selection** behavior. Use the _column selection_ dropdown below to enable each of the available selection modes.*_Contact Title_, _City_ and _Address_ columns are with disabled column selection.```typescript
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
import { GridSelectionMode, IgxColumnComponent, IgxGridToolbarComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { DATA } from '../../data/customers';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-grid-column-selection',
    templateUrl: './column-selection-sample.component.html',
    styleUrls: ['./column-selection-sample.component.scss'],
    imports: [IgxGridComponent, IgxGridToolbarComponent, IgxSelectComponent, FormsModule, IgxLabelDirective, IgxSelectItemComponent, IgxColumnComponent]
})
export class GridColumnSelectionComponent implements OnInit, AfterViewInit {
    private cdr = inject(ChangeDetectorRef);

    @ViewChild(IgxGridComponent)
    public grid: IgxGridComponent;
    public data: any[];
    public columnSelectionType: GridSelectionMode = 'single';

    public ngOnInit() {
        this.data = DATA;
    }

    public ngAfterViewInit() {
        this.grid.getColumnByName('CompanyName').selected = true;
        this.cdr.detectChanges();
    }
}
```
```html
<div class="grid-wrapper">
    <igx-grid #grid [columnSelection]="columnSelectionType" [data]="data" height="530px" width="100%">
        <igx-grid-toolbar>

                <igx-select [(ngModel)]="columnSelectionType">
                    <label igxLabel>Column Selection</label>
                    <igx-select-item value="none">None</igx-select-item>
                    <igx-select-item value="single">Single</igx-select-item>
                    <igx-select-item value="multiple">Mulitple</igx-select-item>
                </igx-select>

        </igx-grid-toolbar>

        <igx-column field="ID"></igx-column>
        <igx-column field="CompanyName" header="Company Name" ></igx-column>
        <igx-column field="ContactTitle" [selectable]="false" header="Contact Title"></igx-column>
        <igx-column field="City" [selectable]="false" ></igx-column>
        <igx-column field="Country"></igx-column>
        <igx-column field="PostalCode" header="Postal Code"></igx-column>
        <igx-column field="Address" [selectable]="false"></igx-column>
    </igx-grid>
</div>
```
```scss
.grid-wrapper {
    padding: 16px;
}

igx-select {
    --ig-size: var(--ig-size-small);
}
```<div class="divider--half"></div>## Basic usageThe column selection feature can be enabled through the [`columnSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#columnSelection) input, which takes [GridSelectionMode](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/index.html#gridselectionmode) values.## InteractionsThe default selection mode is `none`. If set to `single` or `multiple` all of the presented columns will be [`selectable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#selectable). With that being said, in order to select a column, we just need to click on one, which will mark it as [`selected`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#selected). If the column is not selectable, no selection style will be applied on the header, while hovering.> [!NOTE]> [`Multi-column Headers`](multi-column-headers.md) don't reflect on the [`selectable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#selectable) input. The [`IgxColumnGroupComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html) is [`selectable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#selectable), if at least one of its children has the selection behavior enabled. In addition, the component is marked as [`selected`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html#selected) if all of its `selectable` descendants are [`selected`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#selected).*Under _Country Information_ Column Group only column _City_ and _Postal code_ are selectable.```typescript
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxColumnComponent, IgxColumnGroupComponent } from 'igniteui-angular/grids/core';
import { DATA } from '../../data/customers';

@Component({
    selector: 'app-gird-column-group-selection',
    templateUrl: './column-group-selection-sample.component.html',
    styleUrls: ['./column-group-selection-sample.component.scss'],
    imports: [IgxGridComponent, IgxColumnGroupComponent, IgxColumnComponent]
})
export class GridColumnGroupSelectionComponent implements OnInit, AfterViewInit {
    private cdr = inject(ChangeDetectorRef);

    @ViewChild(IgxGridComponent)
    public grid: IgxGridComponent;

    public data: any[];

    public ngOnInit() {
        this.data = DATA;
    }

    public ngAfterViewInit() {
        this.grid.selectColumns(['City', 'PostalCode']);
        this.cdr.detectChanges();
    }
}
```
```html
<div class="grid-wrapper">
    <igx-grid #grid [data]="data" height="530px" width="100%" columnSelection="multiple">
        <igx-column-group header="General Information" >
            <igx-column  field="CompanyName" ></igx-column>
            <igx-column-group header="Personal Details">
                <igx-column  field="ContactName" [hidden]="true"></igx-column>
                <igx-column  field="ContactTitle" [selectable]="false"></igx-column>
            </igx-column-group>
        </igx-column-group>
        <igx-column field="ID"></igx-column>
        <igx-column-group header="Country Information">
            <igx-column-group header="Region Information">
                <igx-column  field="Country" [selectable]="false"></igx-column>
                <igx-column field="City"></igx-column>
                <igx-column field="PostalCode" ></igx-column>
            </igx-column-group>
            <igx-column-group header="City Information" >
                <igx-column field="Fax" [selectable]="false" ></igx-column>
                <igx-column field="Address" [selectable]="false"></igx-column>
            </igx-column-group>
        </igx-column-group>
    </igx-grid>
</div>
```
```scss
.grid-wrapper{
    padding: 16px
}
```<div class="divider--half"></div>## Keyboard combinations> [!NOTE]> The keyboard combinations are available only when the grid [`columnSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#columnselection) input is set to `multiple`.There are two scenarios for keyboard navigation of the **Column Selection** feature:- Multi-column selection - holding <kbd>ctrl</kbd> + <kbd>click</kbd> on every **selectable** header cell.- Range column selection - holding <kbd>shift</kbd> + <kbd>click</kbd> selects all **selectable** columns in between.## API manipulationsThe **API** provides some additional capabilities when it comes to the **non-visible** columns such that, every **hidden** column could be marked as [`selected`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#selected) by setting the corresponding **setter**.> [!NOTE]> The above statement also applies to the [`IgxColumnGroupComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html), except that when the [`selected`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html#selected) property is changed it changes the state of its descendants.More information regarding the API manipulations could be found in the [`API References`](#api-references) section.## StylingBefore diving into the styling options, the core module and all component mixins need to be imported.```scss@use "igniteui-angular/theming" as *;// IMPORTANT: Prior to Ignite UI for Angular version 13 use:// @import '~igniteui-angular/lib/core/styles/themes/index';```>[!NOTE]>Please note that [`row selection`](row-selection.md) and [`column selection`](column-selection.md) can't be manipulated independently. They depend on the same `variables`.With that being said, let's move on and change the **selection** and **hover** styles.<br/>Following the simplest approach, let's define our custom **theme**.```scss$custom-grid-theme: grid-theme(
  $row-selected-background: #011627,
  $row-selected-text-color: #ecaa53,
  $row-selected-hover-background: #011627,
  $header-selected-text-color: #ecaa53,
  $header-selected-background: #011627);```The [`grid-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme) accepts several parameters but those are the five responsible for changing the appearance of all selected columns:- **$row-selected-background** - sets the background of the selected fraction.- **$row-selected-text-color** - sets the text color of the selected fraction- **$row-selected-hover-background** - sets the color of the hovered cell or bunch of cells.- **$header-selected-text-color** - sets the text color of the selected column header- **$header-selected-background** - sets the background color of the selected column header.### Using CSS VariablesThe last step is to include the custom `igx-grid` theme.```scss:host {
  @include tokens($custom-grid-theme)}```### Demo```typescript
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { DATA } from '../../data/customers';

@Component({
    selector: 'app-gird-column-selection-styles',
    templateUrl: './column-selection-styles.component.html',
    styleUrls: ['./column-selection-styles.component.scss'],
    imports: [IgxGridComponent, IgxColumnComponent]
})
export class GridColumnSelectionStylesComponent implements OnInit, AfterViewInit {
    private cdr = inject(ChangeDetectorRef);

    @ViewChild(IgxGridComponent)
    public grid: IgxGridComponent;
    public data: any[];

    public ngOnInit() {
        this.data = DATA;
    }

    public ngAfterViewInit() {
        this.grid.selectColumns(['CompanyName', 'PostalCode']);
        this.cdr.detectChanges();
    }
}
```
```html
<div class="grid-wrapper">
    <igx-grid #grid [data]="data" height="530px" width="100%" columnSelection="multiple">
        <igx-column field="CompanyName" ></igx-column>
        <igx-column field="ContactName"></igx-column>
        <igx-column field="ContactTitle" [selectable]="false"></igx-column>
        <igx-column field="ID"></igx-column>
        <igx-column field="Country" [selectable]="false"></igx-column>
        <igx-column field="PostalCode" ></igx-column>
        <igx-column field="City" [selectable]="false" ></igx-column>
        <igx-column field="Address" [selectable]="false"></igx-column>
    </igx-grid>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$custom-grid-theme: grid-theme(
  $row-selected-background: #011627,
  $row-selected-text-color: #ecaa53,
  $row-selected-hover-background: #011627,
  $header-selected-text-color: #ecaa53,
  $header-selected-background: #011627
);

:host {
  @include tokens($custom-grid-theme);
}
```>[!NOTE]>The sample will not be affected by the selected global theme from `Change Theme`.<div class="divider--half"></div>## <a name="api-references"></a>API References<div class="divider--half"></div>The column selection UI has a few more APIs to explore, which are listed below.- [IgxGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)- [IgxColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)- [IgxColumnGroupComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html)- [IgxGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)[`IgxGridComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html) properties:- [columnSelection](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#columnSelection)- [selectedColumns](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#selectedColumns)- [selectColumns](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#selectColumns)- [deselectColumns](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#deselectColumns)- [selectAllColumns](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#selectAllColumns)- [deselectAllColumns](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#deselectAllColumns)[`IgxColumnComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html) properties:- [selectable](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxColumnComponent.html#selectable)- [selected](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxColumnComponent.html#selected)[`IgxColumnGrpupComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html) properties:- [selectable](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html#selectable)- [selected](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html#selected)[`IgxGridComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html) events:- [onColumnsSelectionChange](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#onColumnsSelectionChange)## Additional Resources- [Grid overview](grid.md)- [Selection](selection.md)- [Cell selection](cell-selection.md)- [Paging](paging.md)- [Filtering](filtering.md)- [Sorting](sorting.md)- [Summaries](summaries.md)- [Column Moving](column-moving.md)- [Column Pinning](column-pinning.md)- [Column Resizing](column-resizing.md)- [Virtualization and Performance](virtualization.md)<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
