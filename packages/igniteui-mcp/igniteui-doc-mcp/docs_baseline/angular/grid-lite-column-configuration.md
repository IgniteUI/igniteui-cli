---
title: Angular Grid Lite Cell Template | Ignite UI for Angular | MIT license
_description: Grid Lite column configuration and column properties. Try our open-source Angular Grid Lite - lightweight and packed with essential features.
_keywords: column configuration, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
_license: MIT
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_tocName: Column Configuration
---

# Column Configuration

Columns are defined declaratively using column child components within the grid. The `field` property is the only required for a column, as it serves as the column identifier. It is also the property that is used to map and render the relevant data in the grid rows.

```html
<igx-grid-lite [data]="data">
  <igx-grid-lite-column
    field="account"
    header="Account Number"
    ...
  ></igx-grid-lite-column>
  <!-- Additional columns -->
</igx-grid-lite>
```

## Configuration Based on the Data Source

The grid supports inferring the column configuration based on the provided data source when `autoGenerate` is set to true. It tries to infer the appropriate `field` and `dataType` based on records in the data.

```typescript
const data: Record[] = [
  { entryId: "1234", source: "https://example.com", ts: 1373521917579 },
  ...
];
```

```html
<igx-grid-lite [autoGenerate]="true" [data]="data"></igx-grid-lite>
```

The previous snippet will result in the grid automatically creating columns equivalent to:

```html
<igx-grid-lite [data]="data">
  <igx-grid-lite-column field="entryId" dataType="string"></igx-grid-lite-column>
  <igx-grid-lite-column field="source" dataType="string"></igx-grid-lite-column>
  <igx-grid-lite-column field="ts" dataType="number"></igx-grid-lite-column>
</igx-grid-lite>
```

Useful for a quick render of some data without any additional customizations.

>[!NOTE]
>This is a one-time operation which is executed when the grid is initially added to the DOM. Passing an empty data source or having a late bound data source (such as a HTTP request) will usually result in empty column configuration for the grid. This property is ignored if any existing column configuration already exists in the grid. See [the data binding topic](./binding.md) for additional information on auto-generating the column configuration based on the data source.

## Additional Column Configuration

The column exposes several more properties for customization:

### Column Width

By default, the columns have a width of `minmax(136px, 1fr)` which translates to a minimum width of 136px and maximum of
1 part of the available space in the Grid Lite. This way the columns are fluid and responsive accommodating for changes
in the grid width.

To change the width of column, use the `width` property of the column.

```html
<igx-grid-lite-column field="price" width="250px"></igx-grid-lite-column>
```

The property accepts <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#numbers_lengths_and_percentages" target="_blank">valid CSS length units</a>.

### Hiding Columns

Columns can be hidden/shown by setting the `hidden` property of the column.

```html
<igx-grid-lite-column field="price" hidden></igx-grid-lite-column>
```

### Column Resize

Each column of the Grid Lite component can be configured to be resizable by setting the `resizable` property of the column element.

```html
<igx-grid-lite-column field="price" resizable></igx-grid-lite-column>
```

If a column is set to be resizable, you can drag the right size of the column header to either increase/decrease  the column width. Double-clicking on the resize area will trigger auto-sizing of the column where it will try set its width according to the largest content of its cells/header.

>[!NOTE]
>Columns with "fluid" widths (fr, %, etc.) can behave erratically when resizing in the grid is performed as they try to accommodate for the new dimensions. Depending on the application scenario, it may be better to use "hard" units so users don't experience layout shifts.

In the sample below you can try out the different column properties and how they reflect in the rendered grid.

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxButtonDirective, IgxToggleActionDirective } from 'igniteui-angular/directives';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { IgxDropDownComponent, IgxDropDownItemComponent, IgxDropDownItemNavigationDirective } from 'igniteui-angular/drop-down';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { GridLiteDataService, ProductInfo } from '../grid-lite-data.service';
import { IgxGridLiteComponent, IgxGridLiteColumnComponent, IgxGridLiteCellTemplateDirective, IgxGridLiteColumnConfiguration } from 'igniteui-angular/grids/lite';
import { IgxSwitchComponent } from 'igniteui-angular/switch';

defineComponents(IgcRatingComponent);

@Component({
    selector: 'app-grid-lite-column-config-dynamic',
    templateUrl: './grid-lite-column-config-dynamic.component.html',
    styleUrls: ['./grid-lite-column-config-dynamic.component.scss'],
    imports: [
        CommonModule,
        IgxGridLiteComponent,
        IgxGridLiteColumnComponent,
        IgxGridLiteCellTemplateDirective,
        IgxButtonDirective,
        IgxToggleActionDirective,
        IgxDropDownItemNavigationDirective,
        IgxDropDownComponent,
        IgxDropDownItemComponent,
        IgxCheckboxComponent,
        IgxSwitchComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    standalone: true
})
export class GridLiteColumnConfigDynamicComponent implements OnInit {
    private dataService = inject(GridLiteDataService);

    public data: ProductInfo[] = [];
    public hasFormatters = true;

    public columns: IgxGridLiteColumnConfiguration<ProductInfo>[] = [
        { field: 'id', header: 'ID', hidden: true, resizable: true, sortable: false, filterable: false, dataType: 'string'},
        { field: 'name', header: 'Product Name', hidden: false, resizable: true, sortable: false, filterable: false, dataType: 'string'},
        { field: 'price', header: 'Price', hidden: false, resizable: true, sortable: false, filterable: false, dataType: 'number' },
        { field: 'sold', header: 'Units Sold', hidden: false, resizable: true, sortable: false, filterable: false, dataType: 'number' },
        { field: 'total', header: 'Total Sold', hidden: false, resizable: true, sortable: false, filterable: false, dataType: 'number' },
        { field: 'rating', header: 'Customer Rating', hidden: false, resizable: true, sortable: false, filterable: false, dataType: 'number' }
    ];

    public formatter = new Intl.NumberFormat('en-150', { style: 'currency', currency: 'EUR' });

    ngOnInit() {
        this.data = this.dataService.generateProducts(50);
    }

    protected formatCurrency = (value: number) =>
        this.formatter.format(value);

    toggleColumnProperty(column: any, property: string, value: boolean) {
        column[property] = value;
        // Trigger Angular change detection
        this.columns = [...this.columns];
    }

    toggleFormatters(event: any) {
        this.hasFormatters = event.checked;
    }
}
```
```html
<div class="grid-lite-wrapper">
    <section class="panel">
        <button igxButton="outlined" [igxToggleAction]="dropdown" [igxDropDownItemNavigation]="dropdown">
            Column Properties
        </button>
        <igx-drop-down #dropdown [isOverlay]="true" [autoClose]="false" [closed]="false">
            @for (column of columns; track column) {
            <igx-drop-down-item>
                <div class="config">
                    <span class="config-key">{{ column.header }}</span>
                    <igx-checkbox #hiddenChk [checked]="column.hidden" (click)="$event.stopPropagation()"
                        (change)="toggleColumnProperty(column, 'hidden', hiddenChk.checked)">
                        Hidden
                    </igx-checkbox>
                    <igx-checkbox #resizableChk [checked]="column.resizable" (click)="$event.stopPropagation()"
                        (change)="toggleColumnProperty(column, 'resizable', resizableChk.checked)">
                        Resizable
                    </igx-checkbox>
                    <igx-checkbox #filterChk [checked]="column.filterable" (click)="$event.stopPropagation()"
                        (change)="toggleColumnProperty(column, 'filterable', filterChk.checked)">
                        Filter
                    </igx-checkbox>
                    <igx-checkbox #sortableChk [checked]="column.sortable" (click)="$event.stopPropagation()"
                        (change)="toggleColumnProperty(column, 'sortable', sortableChk.checked)">
                        Sort
                    </igx-checkbox>
                </div>
            </igx-drop-down-item>
            }
        </igx-drop-down>

        <igx-switch labelPosition="before" [checked]="hasFormatters" (change)="toggleFormatters($event)">
            Value formatters:
        </igx-switch>
    </section>

    <igx-grid-lite [data]="data">
        @for (col of columns; track col) {

        <!-- Rating column -->
        @if (col.field === 'rating') {
        <igx-grid-lite-column [field]="col.field" [header]="col.header" [hidden]="col.hidden" [dataType]="col.dataType"
            [resizable]="col.resizable" [sortable]="col.sortable" [filterable]="col.filterable">

            <ng-template igxGridLiteCell let-value>
                <igc-rating [value]="value" readonly step="0.01" min="0" max="5">
                </igc-rating>
            </ng-template>

        </igx-grid-lite-column>
        }

        <!-- Currency columns -->
        @else if (col.field === 'price' || col.field === 'total') {
        <igx-grid-lite-column [field]="col.field" [header]="col.header" [hidden]="col.hidden" [dataType]="col.dataType"
            [resizable]="col.resizable" [sortable]="col.sortable" [filterable]="col.filterable">

            <ng-template igxGridLiteCell let-value>
                {{ hasFormatters ? formatCurrency(value) : value }}
            </ng-template>

        </igx-grid-lite-column>
        }

        <!-- All other columns (NO template) -->
        @else {
        <igx-grid-lite-column [field]="col.field" [header]="col.header" [hidden]="col.hidden" [dataType]="col.dataType"
            [resizable]="col.resizable" [sortable]="col.sortable" [filterable]="col.filterable">
        </igx-grid-lite-column>
        }
        }
    </igx-grid-lite>
</div>
```
```scss
.panel {
    margin: 1rem 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
}

.config {
    display: grid;
    grid-template-columns: 180px repeat(4, max-content);
    column-gap: 1rem;
    align-items: center;
    width: 100%;
}

.config-key {
    font-weight: bold;
    white-space: nowrap;
}

.config igx-checkbox {
    white-space: nowrap;
}

.grid-lite-wrapper {
    width: 100%;
    height: 100%;
}

igx-grid-lite {
    min-height: 65vh;
    --ig-size: 2;
}
```

<!-- TODO ## API References

* `{ComponentName}`
* `Column`

-->

## Additional Resources

- [Data Binding](binding.md)
- [Sorting](sorting.md)
- [Filtering](filtering.md)
- [Theming & Styling](theming.md)

Our community is active and always welcoming to new ideas.

- [Grid Lite  **GitHub**](https://github.com/IgniteUI/igniteui-grid-lite)
