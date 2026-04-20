---
title: Angular Tree Grid Column Selection - Ignite UI for Angular
_description: Learn how to configure column selection with Ignite UI for Angular Tree grid. This makes grid interactions much easier and faster than ever.
_keywords: column selection, igniteui for angular, infragistics
_license: commercial
_canonicalLink: grid/column-selection
_tocName: Column Selection
_premium: true
---
# Angular Tree Grid Column Selection
The Column selection feature provides an easy way to select an entire column with a single click. It emphasizes the importance of a particular column by focusing the header cell(s) and everything below. The feature comes with a rich [`API`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest) that allows for manipulation of the selection state, data extraction from the selected fractions and data analysis operations and visualizations.
## Angular Column Selection Example
<div class="divider--half"></div>
The sample below demonstrates the three types of Tree Grid's **column selection** behavior. Use the _column selection_ dropdown below to enable each of the available selection modes.
*_Units_, _Unit Price_ and _Delivered_ are with disabled column selection.
```typescript
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
import { GridSelectionMode, IgxColumnComponent, IgxGridToolbarComponent } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { ORDERS_DATA } from '../data/orders';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-tree-grid-column-selection',
    templateUrl: './tree-grid-column-selection.component.html',
    styleUrls: ['./tree-grid-column-selection.component.scss'],
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxSelectComponent, FormsModule, IgxLabelDirective, IgxSelectItemComponent, IgxColumnComponent]
})
export class TreeGridColumnSelectionComponent implements OnInit, AfterViewInit {
    private cdr = inject(ChangeDetectorRef);

    @ViewChild(IgxTreeGridComponent)
    public tGrid: IgxTreeGridComponent;
    public data;
    public currentColumnSelection: GridSelectionMode = 'single';
    public columnConfig = [
        { field: 'ID', header: 'ID', selectable: true },
        { field: 'Name', header: 'Order Product', selectable: true },
        { field: 'Category', header: 'Category', selectable: true },
        { field: 'Units', header: 'Units', selectable: false },
        { field: 'UnitPrice', header: 'Unit Price', selectable: false, formatter: this.formatCurrency },
        { field: 'Price', header: 'Price', selectable: true, formatter: this.formatCurrency },
        { field: 'OrderDate', header: 'Order Date', selectable: true, formatter: this.formatDate },
        { field: 'Delivered', header: 'Delivered', selectable: false }
    ];

    public ngOnInit(): void {
        this.data = ORDERS_DATA;
    }

    public ngAfterViewInit(): void {
        this.tGrid.getColumnByName('ID').selected = true;
        this.cdr.detectChanges();
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

    public formatCurrency(value: number) {
        return `$${value.toFixed(2)}`;
    }
}
```
```html
<div class="grid-wrapper">
  <igx-tree-grid  [igxPreventDocumentScroll]="true"
    [data]="data"
    primaryKey="ID"
    foreignKey = "ParentID"
    height="530px"
    width="100%"
    [columnSelection]="currentColumnSelection">
    <igx-grid-toolbar>

      <igx-select [(ngModel)]="currentColumnSelection">
        <label igxLabel>Column Selection</label>
        <igx-select-item value="none">None</igx-select-item>
        <igx-select-item value="single">Single</igx-select-item>
        <igx-select-item value="multiple">Mulitple</igx-select-item>
      </igx-select>

    </igx-grid-toolbar>

    @for (c of columnConfig; track c) {
      <igx-column
        [field] = "c.field"
        [header] = "c.header"
        [selectable] = "c.selectable"
        [formatter] = "c?.formatter">
      </igx-column>
    }

  </igx-tree-grid>
</div>
```
```scss
.grid-wrapper{
    padding: 16px;

    igx-select {
        --ig-size: var(--ig-size-small);
    }
}
```
<div class="divider--half"></div>
## Basic usage
The column selection feature can be enabled through the [`columnSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#columnSelection) input, which takes [GridSelectionMode](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/index.html#gridselectionmode) values.
## Interactions
The default selection mode is `none`. If set to `single` or `multiple` all of the presented columns will be [`selectable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#selectable). With that being said, in order to select a column, we just need to click on one, which will mark it as [`selected`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#selected). If the column is not selectable, no selection style will be applied on the header, while hovering.
> [!NOTE]
> [`Multi-column Headers`](multi-column-headers.md) don't reflect on the [`selectable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#selectable) input. The [`IgxColumnGroupComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html) is [`selectable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#selectable), if at least one of its children has the selection behavior enabled. In addition, the component is marked as [`selected`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html#selected) if all of its `selectable` descendants are [`selected`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#selected).
*Under _Personal Details_ Column Group only column _ID_ and _Title_ are selectable.
```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxColumnComponent, IgxColumnGroupComponent } from 'igniteui-angular/grids/core';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-column-group-selection',
    templateUrl: './column-group-selection.component.html',
    styleUrls: ['./column-group-selection.component.scss'],
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxColumnGroupComponent]
})
export class TreeGridColumnGroupSelectionComponent implements OnInit {

   @ViewChild(IgxTreeGridComponent, { read: IgxTreeGridComponent, static: true })
   public treeGrid: IgxTreeGridComponent;
   public data;

   public ngOnInit(): void {
    this.data = generateEmployeeDetailedFlatData();
    this.treeGrid.selectColumns(['ID', 'Title', 'City']);

  }
}
```
```html
<div class="grid-wrapper">
    <igx-tree-grid [igxPreventDocumentScroll]="true"
        #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" height="530px" width="100%" columnSelection='multiple'>
        <igx-column field="Name" dataType="string"></igx-column>
        <igx-column-group header="General Information">
            <igx-column field="HireDate" dataType="date"></igx-column>
            <igx-column-group header="Personal Details">
                <igx-column field="ID" dataType="number"></igx-column>
                <igx-column field="Title" dataType="string"></igx-column>
                <igx-column field="Age" dataType="number" [selectable]="false"></igx-column>
            </igx-column-group>
        </igx-column-group>
        <igx-column-group header="Address Information">
            <igx-column-group header="Location">
                <igx-column field="Country" dataType="string" [selectable]="false"></igx-column>
                <igx-column field="City" dataType="string"></igx-column>
                <igx-column field="Address" dataType="string"></igx-column>
            </igx-column-group>
            <igx-column-group header="Contact Information">
                <igx-column field="Phone" dataType="string" [selectable]="false"></igx-column>
                <igx-column field="Fax" dataType="string" [selectable]="false"></igx-column>
                <igx-column field="PostalCode" dataType="string"></igx-column>
            </igx-column-group>
        </igx-column-group>
    </igx-tree-grid>
</div>
```
```scss
.grid-wrapper {
    padding: 16px;
}
```
<div class="divider--half"></div>
## Keyboard combinations
> [!NOTE]
> The keyboard combinations are available only when the grid [`columnSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#columnselection) input is set to `multiple`.
There are two scenarios for keyboard navigation of the **Column Selection** feature:
- Multi-column selection - holding <kbd>ctrl</kbd> + <kbd>click</kbd> on every **selectable** header cell.
- Range column selection - holding <kbd>shift</kbd> + <kbd>click</kbd> selects all **selectable** columns in between.
## API manipulations
The **API** provides some additional capabilities when it comes to the **non-visible** columns such that, every **hidden** column could be marked as [`selected`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#selected) by setting the corresponding **setter**.
> [!NOTE]
> The above statement also applies to the [`IgxColumnGroupComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html), except that when the [`selected`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html#selected) property is changed it changes the state of its descendants.
More information regarding the API manipulations could be found in the [`API References`](#api-references) section.
## Styling
Before diving into the styling options, the core module and all component mixins need to be imported.
```scss
@use "igniteui-angular/theming" as *;
// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```
>[!NOTE]
>Please note that [`row selection`](row-selection.md) and [`column selection`](column-selection.md) can't be manipulated independently. They depend on the same `variables`.
With that being said, let's move on and change the **selection** and **hover** styles.<br/>
Following the simplest approach, let's define our custom **theme**.
```scss
$custom-grid-theme: grid-theme(
  $row-selected-background: #011627,
  $row-selected-text-color: #ecaa53,
  $row-selected-hover-background: #011627,
  $header-selected-text-color: #ecaa53,
  $header-selected-background: #011627,
  $expand-icon-color: #ecaa53,
  $expand-icon-hover-color: #b64b80
);
```
The [`grid-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme) accepts several parameters but those are the five responsible for changing the appearance of all selected columns:
- **$row-selected-background** - sets the background of the selected fraction.
- **$row-selected-text-color** - sets the text color of the selected fraction
- **$row-selected-hover-background** - sets the color of the hovered cell or bunch of cells.
- **$header-selected-text-color** - sets the text color of the selected column header
- **$header-selected-background** - sets the background color of the selected column header.
### Using CSS Variables
The last step is to include the custom `igx-grid` theme.
```scss
:host {
  @include tokens($custom-grid-theme)
}
```
### Demo
```typescript
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { ORDERS_DATA } from '../data/orders';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-column-selection-style',
    templateUrl: './tree-grid-column-selection-style.component.html',
    styleUrls: ['./tree-grid-column-selection-style.component.scss'],
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class TreeGridColumnSelectionStylesComponent implements OnInit, AfterViewInit {
    private cd = inject(ChangeDetectorRef);

    @ViewChild(IgxTreeGridComponent)
    public tGrid: IgxTreeGridComponent;
    public data;

    public columnConfig = [
        { field: 'ID', header: 'ID', selectable: true },
        { field: 'Name', header: 'Order Product', selectable: true },
        { field: 'Category', header: 'Category', selectable: true },
        { field: 'Units', header: 'Units', selectable: true },
        { field: 'UnitPrice', header: 'Unit Price', selectable: true, formatter: this.formatCurrency },
        { field: 'Price', header: 'Price', selectable: true, formatter: this.formatCurrency },
        { field: 'OrderDate', header: 'Order Date', selectable: false, formatter: this.formatDate },
        { field: 'Delivered', header: 'Delivered', selectable: true }
    ];

    public ngOnInit(): void {
        this.data = ORDERS_DATA;
    }

    public ngAfterViewInit() {
        this.tGrid.selectColumns(['ID', 'UnitPrice']);
        this.cd.detectChanges();
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

    public formatCurrency(value: number) {
        return `$${value.toFixed(2)}`;
    }
}
```
```html
<div class="grid-wrapper">
  <igx-tree-grid  [igxPreventDocumentScroll]="true"
    [data]="data"
    primaryKey="ID"
    foreignKey = "ParentID"
    height="530px"
    width="100%"
    columnSelection="multiple">
    @for (c of columnConfig; track c) {
      <igx-column
        [field] = "c.field"
        [header] = "c.header"
        [selectable] = "c.selectable"
        [formatter] = "c?.formatter">
      </igx-column>
    }
  </igx-tree-grid>
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
```
>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.
<div class="divider--half"></div>
## <a name="api-references"></a>API References
<div class="divider--half"></div>
The column selection UI has a few more APIs to explore, which are listed below.
- [IgxTreeGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html)
- [IgxColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)
- [IgxColumnGroupComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html)
- [IgxTreeGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
[`IgxTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html) properties:
- [columnSelection](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#columnSelection)
- [selectedColumns](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#selectedColumns)
- [selectColumns](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#selectColumns)
- [deselectColumns](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#deselectColumns)
- [selectAllColumns](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#selectAllColumns)
- [deselectAllColumns](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#deselectAllColumns)
[`IgxColumnComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html) properties:
- [selectable](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxColumnComponent.html#selectable)
- [selected](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxColumnComponent.html#selected)
[`IgxColumnGrpupComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html) properties:
- [selectable](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html#selectable)
- [selected](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html#selected)
[`IgxTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html) events:
- [onColumnsSelectionChange](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#onColumnsSelectionChange)
## Additional Resources
- [Tree Grid overview](tree-grid.md)
- [Selection](selection.md)
- [Cell selection](cell-selection.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Virtualization and Performance](virtualization.md)
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
