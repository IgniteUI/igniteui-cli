---
_tocName: Column Selection
_premium: true
---
---title: Angular Hierarchical Grid Column Selection - Ignite UI for Angular_description: Learn how to configure column selection with Ignite UI for Angular Hierarchical grid. This makes grid interactions much easier and faster than ever._keywords: column selection, igniteui for angular, infragistics_license: commercial_canonicalLink: grid/column-selection---# Angular Hierarchical Grid Column SelectionThe Column selection feature provides an easy way to select an entire column with a single click. It emphasizes the importance of a particular column by focusing the header cell(s) and everything below. The feature comes with a rich [`API`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest) that allows for manipulation of the selection state, data extraction from the selected fractions and data analysis operations and visualizations.## Angular Column Selection Example<div class="divider--half"></div>The sample below demonstrates the three types of Hierarchical Grid's **column selection** behavior. Use the _column selection_ dropdown below to enable each of the available selection modes.*_Photo_ and _Debut_ are with disabled column selection.```typescript
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
import { GridSelectionMode, IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarComponent } from 'igniteui-angular/grids/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-hierarchical-grid-column-selection',
    templateUrl: './hierarchical-grid-column-selection.component.html',
    styleUrls: ['./hierarchical-grid-column-selection.component.scss'],
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxSelectComponent, FormsModule, IgxLabelDirective, IgxSelectItemComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent]
})
export class HierarchicalGridColumnSelectionComponent implements OnInit, AfterViewInit {
    private cdr = inject(ChangeDetectorRef);

    @ViewChild(IgxHierarchicalGridComponent)
    public hGrid: IgxHierarchicalGridComponent;
    public data;
    public currentColumnSelection: GridSelectionMode = 'single';

    public formatter = (a) => a;

    public ngOnInit() {
        this.data = SINGERS;
    }

    public ngAfterViewInit() {
        this.hGrid.selectColumns(['Artist']);
        this.cdr.detectChanges();
    }

}
```
```html
<div class="grid__wrapper">
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true" [data]="data" height="530px" width="100%"
        [columnSelection]="currentColumnSelection">
        <igx-grid-toolbar>

            <igx-select [(ngModel)]="currentColumnSelection">
                <label igxLabel>Column Selection</label>
                <igx-select-item value="none">None</igx-select-item>
                <igx-select-item value="single">Single</igx-select-item>
                <igx-select-item value="multiple">Mulitple</igx-select-item>
            </igx-select>

        </igx-grid-toolbar>

        <igx-column field="Artist"></igx-column>
        <igx-column field="Photo" [selectable]="false">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut" dataType="number" [formatter]="formatter" [selectable]="false"></igx-column>
        <igx-column field="GrammyNominations" header="Grammy Nominations"></igx-column>
        <igx-column field="GrammyAwards" header="Grammy Awards"></igx-column>
        <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false" [columnSelection]="currentColumnSelection">
            <igx-column field="Album"></igx-column>
            <igx-column field="LaunchDate" header="Launch Date" [dataType]="'date'" [selectable]="false"></igx-column>
            <igx-column field="BillboardReview" header="Billboard Review"></igx-column>
            <igx-column field="USBillboard200" header="US Billboard 200"></igx-column>
            <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false" [columnSelection]="currentColumnSelection">
                <igx-column field="Number" header="No."></igx-column>
                <igx-column field="Title"></igx-column>
                <igx-column field="Released" dataType="date" [selectable]="false"></igx-column>
                <igx-column field="Genre"></igx-column>
            </igx-row-island>
        </igx-row-island>
        <igx-row-island [height]="null" [key]="'Tours'" [autoGenerate]="false" [columnSelection]="currentColumnSelection">
            <igx-column field="Tour" [selectable]="false"></igx-column>
            <igx-column field="StartedOn" header="Started on" [selectable]="false"></igx-column>
            <igx-column field="Location" [selectable]="false"></igx-column>
            <igx-column field="Headliner"></igx-column>
        </igx-row-island>
    </igx-hierarchical-grid>
</div>
```
```scss
.photo {
    vertical-align: middle;
    max-height: 62px;
}
.cell__inner_2 {
    margin: 1px
}
.grid__wrapper {
    padding: 16px;

    igx-select {
        --ig-size: var(--ig-size-small);
    }
}
```<div class="divider--half"></div>## Basic usageThe column selection feature can be enabled through the [`columnSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#columnSelection) input, which takes [GridSelectionMode](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/index.html#gridselectionmode) values.## InteractionsThe default selection mode is `none`. If set to `single` or `multiple` all of the presented columns will be [`selectable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#selectable). With that being said, in order to select a column, we just need to click on one, which will mark it as [`selected`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#selected). If the column is not selectable, no selection style will be applied on the header, while hovering.> [!NOTE]> [`Multi-column Headers`](multi-column-headers.md) don't reflect on the [`selectable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#selectable) input. The [`IgxColumnGroupComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html) is [`selectable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#selectable), if at least one of its children has the selection behavior enabled. In addition, the component is marked as [`selected`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html#selected) if all of its `selectable` descendants are [`selected`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#selected).*Under _Location_ Column Group only column _City_ is selectable.```typescript
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxColumnComponent, IgxColumnGroupComponent } from 'igniteui-angular/grids/core';
import { CUSTOMERS } from '../../data/hierarchical-data';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-column-group-selection',
    templateUrl: './hierarchical-grid-column-group-selection.component.html',
    styleUrls: ['./hierarchical-grid-column-group-selection.component.scss'],
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxColumnGroupComponent, IgxRowIslandComponent]
})
export class HierarchicalGridColumnGroupSelectionComponent implements OnInit, AfterViewInit {
    private cdr = inject(ChangeDetectorRef);

    @ViewChild(IgxHierarchicalGridComponent, { static: true })
    private hGrid: IgxHierarchicalGridComponent;

    public data;

    public ngOnInit(): void {
        this.data = CUSTOMERS;
    }

    public ngAfterViewInit() {
        this.hGrid.selectColumns(['CompanyName', 'ContactName', 'ContactTitle', 'City']);
        this.cdr.detectChanges();
    }

}
```
```html
<div class="grid-wrapper">
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true" [data]="data" height="530px" width="100%"
        columnSelection="multiple">
        <igx-column field="CustomerID"></igx-column>
        <igx-column-group header="General Information">
            <igx-column field="CompanyName"></igx-column>
            <igx-column-group  header="Personal Details">
                <igx-column field="ContactName"></igx-column>
                <igx-column field="ContactTitle"></igx-column>
            </igx-column-group>
        </igx-column-group>
        <igx-column-group header="Address Information">
            <igx-column-group header="Location">
                <igx-column field="Address" [selectable]="false"></igx-column>
                <igx-column field="City"></igx-column>
                <igx-column field="PostalCode" [selectable]="false"></igx-column>
                <igx-column field="Country" [selectable]="false"></igx-column>
            </igx-column-group>
            <igx-column-group header="Contact Information">
                <igx-column field="Phone"></igx-column>
                <igx-column field="Fax"></igx-column>
            </igx-column-group>
        </igx-column-group>

        <igx-row-island [height]="null" [key]="'Orders'" [autoGenerate]="false" columnSelection="multiple">
            <igx-column-group header="Order Information">
                <igx-column-group header="Order Details">
                    <igx-column field="OrderID"></igx-column>
                    <igx-column field="EmployeeID"></igx-column>
                    <igx-column field="OrderDate"  [dataType]="'date'"></igx-column>
                    <igx-column field="RequiredDate"  [dataType]="'date'"></igx-column>
                </igx-column-group>
                <igx-column-group header="General Shipping Information">
                    <igx-column field="ShippedDate" [dataType]="'date'"></igx-column>
                    <igx-column field="ShipVia" [selectable]="false"></igx-column>
                    <igx-column field="Freight" [selectable]="false"></igx-column>
                    <igx-column field="ShipName"></igx-column>
                </igx-column-group>
                <igx-column-group header="Shipping Location">
                    <igx-column field="ShipAddress"></igx-column>
                    <igx-column field="ShipCity"></igx-column>
                    <igx-column field="ShipPostalCode"></igx-column>
                    <igx-column field="ShipCountry"></igx-column>
                </igx-column-group>
            </igx-column-group>
            <igx-row-island [height]="null" [key]="'OrderDetails'" [autoGenerate]="false" columnSelection="single">
                    <igx-column field="ProductID" ></igx-column>
                    <igx-column field="UnitPrice"></igx-column>
                    <igx-column field="Quantity" [selectable]="false"></igx-column>
                    <igx-column field="Discount"></igx-column>
            </igx-row-island>
        </igx-row-island>
    </igx-hierarchical-grid>
</div>
```
```scss
.grid-wrapper {
    padding: 16px;
}
```<div class="divider--half"></div>## Keyboard combinations> [!NOTE]> The keyboard combinations are available only when the grid [`columnSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#columnselection) input is set to `multiple`.There are two scenarios for keyboard navigation of the **Column Selection** feature:- Multi-column selection - holding <kbd>ctrl</kbd> + <kbd>click</kbd> on every **selectable** header cell.- Range column selection - holding <kbd>shift</kbd> + <kbd>click</kbd> selects all **selectable** columns in between.## API manipulationsThe **API** provides some additional capabilities when it comes to the **non-visible** columns such that, every **hidden** column could be marked as [`selected`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#selected) by setting the corresponding **setter**.> [!NOTE]> The above statement also applies to the [`IgxColumnGroupComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html), except that when the [`selected`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html#selected) property is changed it changes the state of its descendants.More information regarding the API manipulations could be found in the [`API References`](#api-references) section.## StylingBefore diving into the styling options, the core module and all component mixins need to be imported.```scss@use "igniteui-angular/theming" as *;// IMPORTANT: Prior to Ignite UI for Angular version 13 use:// @import '~igniteui-angular/lib/core/styles/themes/index';```>[!NOTE]>Please note that [`row selection`](row-selection.md) and [`column selection`](column-selection.md) can't be manipulated independently. They depend on the same `variables`.With that being said, let's move on and change the **selection** and **hover** styles.<br/>Following the simplest approach, let's define our custom **theme**.```scss$custom-grid-theme: grid-theme(
  $row-selected-background: #011627,
  $row-selected-text-color: #ecaa53,
  $row-selected-hover-background: #011627,
  $header-selected-text-color: #ecaa53,
  $header-selected-background: #011627);```The [`grid-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme) accepts several parameters but those are the five responsible for changing the appearance of all selected columns:- **$row-selected-background** - sets the background of the selected fraction.- **$row-selected-text-color** - sets the text color of the selected fraction- **$row-selected-hover-background** - sets the color of the hovered cell or bunch of cells.- **$header-selected-text-color** - sets the text color of the selected column header- **$header-selected-background** - sets the background color of the selected column header.### Using CSS VariablesThe last step is to include the custom `igx-grid` theme.```scss:host {
  @include tokens($custom-grid-theme)}```### Demo```typescript
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-column-selection-styles',
    templateUrl: './hierarchical-grid-column-selection-styles.component.html',
    styleUrls: ['./hierarchical-grid-column-selection-styles.component.scss'],
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent]
})
export class HGridColumnSelectionStylesComponent implements OnInit, AfterViewInit {
    private cdr = inject(ChangeDetectorRef);

    @ViewChild(IgxHierarchicalGridComponent)
    public hGrid: IgxHierarchicalGridComponent;
    public data;

    public formatter = (a) => a;

    public ngOnInit() {
        this.data = SINGERS;
    }

    public ngAfterViewInit() {
        this.hGrid.selectColumns(['Artist', 'GrammyNominations']);
        this.cdr.detectChanges();
    }

}
```
```html
<div class="grid__wrapper">
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true" [data]="data" height="530px" width="100%"
        columnSelection="single">
        <igx-column field="Artist"></igx-column>
        <igx-column field="Photo" [selectable]="false">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut" dataType="number" [formatter]="formatter" [selectable]="false"></igx-column>
        <igx-column field="GrammyNominations" header="Grammy Nominations"></igx-column>
        <igx-column field="GrammyAwards" header="Grammy Awards"></igx-column>
        <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false" columnSelection='multiple'>
            <igx-column field="Album"></igx-column>
            <igx-column field="LaunchDate" header="Launch Date" [dataType]="'date'" [selectable]="false"></igx-column>
            <igx-column field="BillboardReview" header="Billboard Review"></igx-column>
            <igx-column field="USBillboard200" header="US Billboard 200"></igx-column>
            <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false" columnSelection='multiple'>
                <igx-column field="Number" header="No."></igx-column>
                <igx-column field="Title"></igx-column>
                <igx-column field="Released" dataType="date" [selectable]="false"></igx-column>
                <igx-column field="Genre"></igx-column>
            </igx-row-island>
        </igx-row-island>
        <igx-row-island [height]="null" [key]="'Tours'" [autoGenerate]="false" columnSelection="single">
            <igx-column field="Tour" [selectable]="false"></igx-column>
            <igx-column field="StartedOn" header="Started on" [selectable]="false"></igx-column>
            <igx-column field="Location" [selectable]="false"></igx-column>
            <igx-column field="Headliner"></igx-column>
        </igx-row-island>
    </igx-hierarchical-grid>
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
```>[!NOTE]>The sample will not be affected by the selected global theme from `Change Theme`.<div class="divider--half"></div>## <a name="api-references"></a>API References<div class="divider--half"></div>The column selection UI has a few more APIs to explore, which are listed below.- [IgxHierarchicalGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html)- [IgxColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)- [IgxColumnGroupComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html)- [IgxHierarchicalGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)[`IgxHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html) properties:- [columnSelection](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#columnSelection)- [selectedColumns](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#selectedColumns)- [selectColumns](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#selectColumns)- [deselectColumns](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#deselectColumns)- [selectAllColumns](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#selectAllColumns)- [deselectAllColumns](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#deselectAllColumns)[`IgxColumnComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html) properties:- [selectable](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxColumnComponent.html#selectable)- [selected](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxColumnComponent.html#selected)[`IgxColumnGrpupComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html) properties:- [selectable](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html#selectable)- [selected](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html#selected)[`IgxHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html) events:- [onColumnsSelectionChange](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#onColumnsSelectionChange)## Additional Resources- [Hierarchical Grid overview](hierarchical-grid.md)- [Selection](selection.md)- [Cell selection](cell-selection.md)- [Paging](paging.md)- [Filtering](filtering.md)- [Sorting](sorting.md)- [Summaries](summaries.md)- [Column Moving](column-moving.md)- [Column Pinning](column-pinning.md)- [Column Resizing](column-resizing.md)- [Virtualization and Performance](virtualization.md)<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
