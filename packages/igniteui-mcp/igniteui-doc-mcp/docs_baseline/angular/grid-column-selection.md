---
title: Angular Grid Column Selection - Ignite UI for Angular
description: Learn how to configure column selection with Ignite UI for Angular Data grid. This makes grid interactions much easier and faster than ever.
keywords: column selection, igniteui for angular, infragistics
license: commercial
llms:
  description: "The Column selection feature provides an easy way to select an entire column with a single click."
_tocName: Column Selection
_premium: true
---
# Angular Grid Column Selection

The Column selection feature provides an easy way to select an entire column with a single click. It emphasizes the importance of a particular column by focusing the header cell(s) and everything below. The feature comes with a rich `API` that allows for manipulation of the selection state, data extraction from the selected fractions and data analysis operations and visualizations.

## Angular Column Selection Example

The sample below demonstrates the three types of Grid's **column selection** behavior. Use the _column selection_ dropdown below to enable each of the available selection modes.

*_Contact Title_, _City_ and _Address_ columns are with disabled column selection.

```typescript
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
```

## Basic usage

The column selection feature can be enabled through the [`columnSelection`](mcp:get_api_reference?platform=angular&component=IgxGridComponent&member=columnSelection) input, which takes [`IgxGridSelectionMode`](mcp:get_api_reference?platform=angular&component=GridSelectionMode) values.

## Interactions

The default selection mode is `none`. If set to `single` or `multiple` all of the presented columns will be [`selectable`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=selectable). With that being said, in order to select a column, we just need to click on one, which will mark it as [`selected`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=selected). If the column is not selectable, no selection style will be applied on the header, while hovering.

**Note:** 
[`Multi-column Headers`](/grid/multi-column-headers) don't reflect on the [`selectable`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=selectable) input. The [`IgxColumnGroup`](mcp:get_api_reference?platform=angular&component=IgxColumnGroupComponent) is [`selectable`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=selectable), if at least one of its children has the selection behavior enabled. In addition, the component is marked as [`selected`](mcp:get_api_reference?platform=angular&component=IgxColumnGroupComponent&member=selected) if all of its `selectable` descendants are [`selected`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=selected).

*Under _Country Information_ Column Group only column _City_ and _Postal code_ are selectable.

```typescript
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
```

## Keyboard combinations

**Note:** 
The keyboard combinations are available only when the grid [`columnSelection`](mcp:get_api_reference?platform=angular&component=IgxGridComponent&member=columnselection) input is set to `multiple`.

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
Please note that [`row selection`](/grid/row-selection) and [`column selection`](/grid/column-selection) can't be manipulated independently. They depend on the same `variables`.

With that being said, let's move on and change the **selection** and **hover** styles.<br/>
Following the simplest approach, let's define our custom **theme**.

```scss
$background: #011627;
$accent: #ecaa53;

$custom-grid-theme: grid-theme(
  $row-selected-background: $background,
  $row-selected-text-color: $accent,
  $row-selected-hover-background: hsl(from $background h s 10%),
  $row-selected-hover-text-color: $accent,
  $header-selected-text-color: $accent,
  $header-selected-background: $background,
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

$background: #011627;
$accent: #ecaa53;

$custom-grid-theme: grid-theme(
  $row-selected-background: $background,
  $row-selected-text-color: $accent,
  $row-selected-hover-background: hsl(from $background h s 10%),
  $row-selected-hover-text-color: $accent,
  $header-selected-text-color: $accent,
  $header-selected-background: $background,
);

:host {
  @include tokens($custom-grid-theme);
}
```

**Note:** 
The sample will not be affected by the selected global theme from `Change Theme`.

## <a name="api-references"></a>API References

The column selection UI has a few more APIs to explore, which are listed below.

- [`IgxGrid`](mcp:get_api_reference?platform=angular&component=IgxGridComponent)
- [`IgxColumn`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent)
- [`IgxColumnGroup`](mcp:get_api_reference?platform=angular&component=IgxColumnGroupComponent)
- `IgxGridComponent Styles`

[`IgxGrid`](mcp:get_api_reference?platform=angular&component=IgxGridComponent) properties:

- [`columnSelection`](mcp:get_api_reference?platform=angular&component=IgxGridComponent&member=columnSelection)
- [`selectedColumns`](mcp:get_api_reference?platform=angular&component=IgxGridComponent&member=selectedColumns)
- [`selectColumns`](mcp:get_api_reference?platform=angular&component=IgxGridComponent&member=selectColumns)
- [`deselectColumns`](mcp:get_api_reference?platform=angular&component=IgxGridComponent&member=deselectColumns)
- [`selectAllColumns`](mcp:get_api_reference?platform=angular&component=IgxGridComponent&member=selectAllColumns)
- [`deselectAllColumns`](mcp:get_api_reference?platform=angular&component=IgxGridComponent&member=deselectAllColumns)

[`IgxColumn`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent) properties:

- [`selectable`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=selectable)
- [`selected`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=selected)

[`IgxColumnGroup`](mcp:get_api_reference?platform=angular&component=IgxColumnGroupComponent) properties:

- [`selectable`](mcp:get_api_reference?platform=angular&component=IgxColumnGroupComponent&member=selectable)
- [`selected`](mcp:get_api_reference?platform=angular&component=IgxColumnGroupComponent&member=selected)

[`IgxGrid`](mcp:get_api_reference?platform=angular&component=IgxGridComponent) events:

- [`columnSelectionChanging`](mcp:get_api_reference?platform=angular&component=IgxGridComponent&member=columnSelectionChanging)

## Additional Resources

- [Grid overview](/grid/grid)
- [Selection](/grid/selection)
- [Cell selection](/grid/cell-selection)
- [Paging](/grid/paging)
- [Filtering](/grid/filtering)
- [Sorting](/grid/sorting)
- [Summaries](/grid/summaries)
- [Column Moving](/grid/column-moving)
- [Column Pinning](/grid/column-pinning)
- [Column Resizing](/grid/column-resizing)
- [Virtualization and Performance](/grid/virtualization)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
