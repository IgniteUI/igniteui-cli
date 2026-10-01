---
title: Angular Tree Grid Column Selection - Ignite UI for Angular
description: Learn how to configure column selection with Ignite UI for Angular Tree grid. This makes grid interactions much easier and faster than ever.
keywords: column selection, igniteui for angular, infragistics
license: commercial
_canonicalLink: grid/column-selection
llms:
  description: "The Column selection feature provides an easy way to select an entire column with a single click."
_tocName: Column Selection
_premium: true
---
# Angular Tree Grid Column Selection

The Column selection feature provides an easy way to select an entire column with a single click. It emphasizes the importance of a particular column by focusing the header cell(s) and everything below. The feature comes with a rich `API` that allows for manipulation of the selection state, data extraction from the selected fractions and data analysis operations and visualizations.

## Angular Column Selection Example

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
        [formatter] = "$safeNavigationMigration(c?.formatter)">
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

## Basic usage

The column selection feature can be enabled through the [`columnSelection`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent&member=columnSelection) input, which takes [`IgxGridSelectionMode`](mcp:get_api_reference?platform=angular&component=GridSelectionMode) values.

## Interactions

The default selection mode is `none`. If set to `single` or `multiple` all of the presented columns will be [`selectable`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=selectable). With that being said, in order to select a column, we just need to click on one, which will mark it as [`selected`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=selected). If the column is not selectable, no selection style will be applied on the header, while hovering.

**Note:** 
[`Multi-column Headers`](/treegrid/multi-column-headers) don't reflect on the [`selectable`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=selectable) input. The [`IgxColumnGroup`](mcp:get_api_reference?platform=angular&component=IgxColumnGroupComponent) is [`selectable`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=selectable), if at least one of its children has the selection behavior enabled. In addition, the component is marked as [`selected`](mcp:get_api_reference?platform=angular&component=IgxColumnGroupComponent&member=selected) if all of its `selectable` descendants are [`selected`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=selected).

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

## Keyboard combinations

**Note:** 
The keyboard combinations are available only when the grid [`columnSelection`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent&member=columnselection) input is set to `multiple`.

There are two scenarios for keyboard navigation of the **Column Selection** feature:

- Multi-column selection - holding <kbd>ctrl</kbd> + <kbd>click</kbd> on every **selectable** header cell.
- Range column selection - holding <kbd>shift</kbd> + <kbd>click</kbd> selects all **selectable** columns in between.

## API manipulations

The **API** provides some additional capabilities when it comes to the **non-visible** columns such that, every **hidden** column could be marked as [`selected`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=selected) by setting the corresponding **setter**.

**Note:** 
The above statement also applies to the [`IgxColumnGroup`](mcp:get_api_reference?platform=angular&component=IgxColumnGroupComponent), except that when the [`selected`](mcp:get_api_reference?platform=angular&component=IgxColumnGroupComponent&member=selected) property is changed it changes the state of its descendants.

More information regarding the API manipulations could be found in the [`API References`](#api-references) section.

## Styling

Before diving into the styling options, the theming module needs to be imported.

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

**Note:** 
Please note that [`row selection`](/treegrid/row-selection) and [`column selection`](/treegrid/column-selection) can't be manipulated independently. They depend on the same `variables`.

With that being said, let's move on and change the **selection** and **hover** styles.<br/>
Following the simplest approach, let's define our custom **theme**.

```scss
$background: #0b0119;
$foreground: #eeece1;
$accent: #f6b560;

$grid-theme: grid-theme(
  $background: $background,
  $foreground: $foreground,
  $accent-color: $accent,
  
  $row-selected-background: #012724,
  $row-selected-text-color: $accent,
  $header-selected-text-color: $accent,
  $header-selected-background: #012427,
  
  $row-selected-hover-background: hsl(from #012427 h s 10%),
  $row-selected-hover-text-color: $accent,
);
```

The `grid-theme` accepts several parameters but those are the five responsible for changing the appearance of all selected columns:

- **$row-selected-background** - sets the background of the selected fraction.
- **$row-selected-text-color** - sets the text color of the selected fraction
- **$row-selected-hover-background** - sets the color of the hovered cell or group of cells.
- **$row-selected-hover-text-color** - sets the text color of the hovered cell or group of cells.
- **$header-selected-text-color** - sets the text color of the selected column header
- **$header-selected-background** - sets the background color of the selected column header.

### Using CSS Variables

The last step is to **include** the custom grid theme.

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
        [formatter] = "$safeNavigationMigration(c?.formatter)">
      </igx-column>
    }
  </igx-tree-grid>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$background: #0b0119;
$foreground: #eeece1;
$accent: #f6b560;

$grid-theme: grid-theme(
	$background: $background,
	$foreground: $foreground,
	$accent-color: $accent,
	
	$row-selected-background: #012724,
	$row-selected-text-color: $accent,
	$header-selected-text-color: $accent,
	$header-selected-background: #012427,
	
	// The intersection between row & column, visible when row is hovered
	$row-selected-hover-background: hsl(from #012427 h s 10%),
	$row-selected-hover-text-color: $accent,
);

:host {
  @include tokens($grid-theme);
}
```

**Note:** 
The sample will not be affected by the selected global theme from `Change Theme`.

## <a name="api-references"></a>API References

The column selection UI has a few more APIs to explore, which are listed below.

- [`IgxTreeGrid`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent)
- [`IgxColumn`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent)
- [`IgxColumnGroup`](mcp:get_api_reference?platform=angular&component=IgxColumnGroupComponent)
- `IgxTreeGridComponent Styles`

[`IgxTreeGrid`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent) properties:

- [`columnSelection`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent&member=columnSelection)
- [`selectedColumns`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent&member=selectedColumns)
- [`selectColumns`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent&member=selectColumns)
- [`deselectColumns`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent&member=deselectColumns)
- [`selectAllColumns`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent&member=selectAllColumns)
- [`deselectAllColumns`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent&member=deselectAllColumns)

[`IgxColumn`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent) properties:

- [`selectable`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=selectable)
- [`selected`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=selected)

[`IgxColumnGroup`](mcp:get_api_reference?platform=angular&component=IgxColumnGroupComponent) properties:

- [`selectable`](mcp:get_api_reference?platform=angular&component=IgxColumnGroupComponent&member=selectable)
- [`selected`](mcp:get_api_reference?platform=angular&component=IgxColumnGroupComponent&member=selected)

[`IgxTreeGrid`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent) events:

- [`columnSelectionChanging`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent&member=columnSelectionChanging)

## Additional Resources

- [Tree Grid overview](/treegrid/tree-grid)
- [Selection](/treegrid/selection)
- [Cell selection](/treegrid/cell-selection)
- [Paging](/treegrid/paging)
- [Filtering](/treegrid/filtering)
- [Sorting](/treegrid/sorting)
- [Summaries](/treegrid/summaries)
- [Column Moving](/treegrid/column-moving)
- [Column Pinning](/treegrid/column-pinning)
- [Column Resizing](/treegrid/column-resizing)
- [Virtualization and Performance](/treegrid/virtualization)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
