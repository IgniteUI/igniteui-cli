---
title: Angular Grid Lite Sorting | Ignite UI for Angular | MIT license
_description: Try Angular Grid Lite with sort operations, sort customization, and remote sorting for Angular Grid Lite. See demos and examples and build your next app.
_keywords: sorting, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
_license: MIT
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_tocName: Sorting
---

# Sort Operations

The Grid Lite supports sorting operations on its data source. Data sorting is controlled on per-column level, allowing you to have sortable and non-sortable columns, while the grid itself controls certain sort behaviors. By default, sorting on a column is disabled unless explicitly configured with the `sortable` property of the column.

```html
<igx-grid-lite-column
  field="price"
  sortable
></igx-grid-lite-column>
```

You can also control whether the sort operations for string columns should be case sensitive by using the `sortingCaseSensitive` property.

```html
<igx-grid-lite-column 
  field="name" 
  sortable
  sortingCaseSensitive
></igx-grid-lite-column>
```

For custom comparison logic, set the `sortConfiguration` property with a `comparer` function:

```typescript
column.sortable = true;
column.sortConfiguration = {
  /**
   * Custom comparer function which will be used for sort operations for this column.
   * In the following sample, we compare the `name` values based on their length.
   */
  comparer: (a, b) => a.length - b.length
};
```

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { GridLiteDataService, ProductInfo } from '../grid-lite-data.service';
import { IgxGridLiteComponent, IgxGridLiteColumnComponent, IgxGridLiteCellTemplateDirective } from 'igniteui-angular/grids/lite';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-grid-lite-sorting-simple',
  templateUrl: './grid-lite-sorting-simple.component.html',
  styleUrls: ['./grid-lite-sorting-simple.component.scss'],
    imports: [
    CommonModule,
    IgxGridLiteComponent,
    IgxGridLiteColumnComponent,
    IgxGridLiteCellTemplateDirective
],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridLiteSortingSimpleComponent implements OnInit {
  private dataService = inject(GridLiteDataService);

  public data: ProductInfo[] = [];

  ngOnInit() {
    this.data = this.dataService.generateProducts(100);
  }

  protected nameComparer = (a: string, b: string) => a.length - b.length;
}
```
```html
<div class="grid-lite-wrapper">
    <igx-grid-lite [data]="data">
        <igx-grid-lite-column field="name" header="Name" sortable
            [sortConfiguration]="{ comparer: nameComparer }"></igx-grid-lite-column>
        <igx-grid-lite-column field="price" header="Price" dataType="number" sortable></igx-grid-lite-column>
        <igx-grid-lite-column field="rating" header="Rating" dataType="number" sortable>
            <ng-template igxGridLiteCell let-value>
                <igc-rating [value]="value" readonly step="0.01" min="0" max="5"></igc-rating>
            </ng-template>
        </igx-grid-lite-column>
        <igx-grid-lite-column field="sold" header="Sold" dataType="number" sortable></igx-grid-lite-column>
        <igx-grid-lite-column field="total" header="Total" dataType="number" sortable></igx-grid-lite-column>
    </igx-grid-lite>
</div>
```
```scss
:host {
  contain: content;
  --ig-size: 2;
}

.grid-lite-wrapper {
  width: 100%;
  height: 100%;
}

igx-grid-lite {
  min-height: 65vh;
}
```

## Single and Multi-Sorting

The grid supports both single and multi-column sorting. Multi-column is enabled by default and can be configured through the `sortingOptions` property of the grid. The `mode` property accepts `'single'` or `'multiple'` as values.

```typescript
grid.sortingOptions = { mode: 'single' };
```

>[!NOTE]
>The single/multi-column sorting behavior controls how end-users interact with the Grid lite. Sorting through the API with multiple expression will still work when single sorting is enabled.

### Tri-State Sorting

The Grid Lite component tri-state sorting and it is always enabled. End-users will cycle through the following direction states when clicking on sortable column headers:

```text
ascending -> descending -> none -> ascending
```

where `none` is the initial state of the data, that is to say with no sorting applied by the grid.

### Sorting Indicators

When multi-column sort is enabled, the column headers will display a sorting indicator, which is a number representing the order in which the sorting operations were applied.

The following sample shows the grid `sortingOptions` property and how it controls the grid sorting behavior.

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcRatingComponent, IgcSwitchComponent } from 'igniteui-webcomponents';
import { IgcGridLite } from 'igniteui-grid-lite';
import { GridLiteDataService, ProductInfo } from '../grid-lite-data.service';
import { IgxGridLiteComponent, IgxGridLiteColumnComponent, IgxGridLiteCellTemplateDirective } from 'igniteui-angular/grids/lite';

defineComponents(IgcRatingComponent, IgcSwitchComponent);

@Component({
  selector: 'app-grid-lite-sorting-grid-config',
  templateUrl: './grid-lite-sorting-grid-config.component.html',
  styleUrls: ['./grid-lite-sorting-grid-config.component.scss'],
  imports: [
    CommonModule,
    IgxGridLiteComponent,
    IgxGridLiteColumnComponent,
    IgxGridLiteCellTemplateDirective
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridLiteSortingGridConfigComponent implements OnInit {
  private dataService = inject(GridLiteDataService);

  @ViewChild('gridLite', { static: true }) gridLite!: ElementRef;

  public data: ProductInfo[] = [];
  public sortingOptions: any = {
    mode: 'multiple'
  };

  ngOnInit() {
    this.data = this.dataService.generateProducts(100);
  }

  protected updateConfig(event: any) {
    this.sortingOptions = { ...this.sortingOptions, mode: event.checked ? 'multiple' : 'single' };
    this.gridLite.nativeElement.clearSort();
  }
}
```
```html
<div class="grid-lite-wrapper">
    <section class="config-panel">
        <igx-switch [checked]="sortingOptions.mode === 'multiple'" (change)="updateConfig($event)">
            Enable multi-sort
        </igx-switch>
    </section>

    <igx-grid-lite #gridLite [data]="data" [sortingOptions]="sortingOptions">
        <igx-grid-lite-column field="name" header="Name" sortable></igx-grid-lite-column>
        <igx-grid-lite-column field="price" header="Price" dataType="number" sortable></igx-grid-lite-column>
        <igx-grid-lite-column field="rating" header="Rating" dataType="number" sortable>
            <ng-template igxGridLiteCell let-value>
                <igc-rating [value]="value" readonly step="0.01" min="0" max="5"></igc-rating>
            </ng-template>
        </igx-grid-lite-column>
        <igx-grid-lite-column field="sold" header="Sold" dataType="number" sortable></igx-grid-lite-column>
        <igx-grid-lite-column field="total" header="Total" dataType="number" sortable></igx-grid-lite-column>
    </igx-grid-lite>
</div>
```
```scss
:host {
  contain: content;
  --ig-size: 2;
}

.grid-lite-wrapper {
  width: 100%;
  height: 100%;
}

.config-panel {
  margin: 1rem 0;
}

igx-grid-lite {
  height: 510px;
}
```

## Sort model

The building block for sort operations in the Grid Lite component is the `SortingExpression` which has the following properties:

```typescript
type SortingExpression<T> = {
  /**
   * The `key` of the target column for the sort operation.
   */
  key: keyof T;
  /**
   * The sort direction for the operation.
   */
  direction: 'ascending' | 'descending' | 'none';
  /**
   * Should the operation be case sensitive. Applies to the default string type.
   * If not explicitly passed, it will use the value from the target column sort configuration if applicable.
   */
  caseSensitive?: boolean;
  /**
   * Specifies a custom comparer function for the operation.
   * Will use the value from the target column sort configuration if applicable.
   */
  comparer?: SortComparer<T, T[keyof T]>;
};
```

The grid consumes these expressions for its sort API methods and configuration and produces them for events and its sorting state when
an end-user interacts with the component. See below for additional information.

## Sort API

The Grid Lite component exposes two main approaches for applying sort operations from its API. Either through the `sort()`/`clearSort()` methods or through the `sortingExpressions` property.

The `sort()` method accepts either a single expression or an array of sort expression and then sorts the grid data based on those expressions.

```typescript
// Single
grid.sort({ key: 'price', direction: 'descending' });

// Multiple
grid.sort([
  { key: 'price', direction: 'descending' },
  { key: 'name', direction: 'descending' },
]);
```

The `clearSort()` method, as the name implies, clears the sort state of a single column or the whole grid component, depending
on the passed arguments.

```typescript
// Clear the sort state for the `price` column.
grid.clearSort('price');

// Clear the sort state of the grid.
grid.clearSort();
```

### Initial Sorting State

The `sortingExpressions` property is very similar in behavior to the `sort()` method call. It exposes a declarative way to control
sort state in the grid, but the most useful property is the ability to set initial sort state when the Grid Lite is first rendered.

For example:

```typescript
protected sortState: IgxGridLiteSortingExpression<Products>[] = [
    { key: 'price', direction: 'descending' },
    { key: 'name', direction: 'ascending', caseSensitive: true },
];
```

```html
<igx-grid-lite [sortingExpressions]="sortState"></igx-grid-lite>
```

It can be used to get the current sort state of the component and do additional processing depending on another state in your application.

```typescript
const state = grid.sortingExpressions;
// Save the current sort state
saveUserSortState(state);
```

## Events

When a sorting operation is performed through the UI, the component emits a custom `sorting` event. The `detail` property is the sort expression which will be applied by the Grid Lite. The event is cancellable and if cancelled will stop the current sort operation.

After the grid applies the new sorting state, a `sorted` event is emitted. It contains the expression which was used in the last sort operation and it is not cancellable.

```html
<igx-grid-lite (sorting)="onSorting($event)" (sorted)="onSorted($event)">
```

```typescript
onSorting(event: IgxSortingEvent) { ... }
onSorted(event: IgxSortedEvent) { ... }
```

In the following sample, when you try to sort the **Name** and **Rating** columns, the operation will be cancelled. Watch the event log below to see it in action.

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { GridLiteDataService, ProductInfo } from '../grid-lite-data.service';
import {
  IgxGridLiteComponent,
  IgxGridLiteColumnComponent,
  IgxGridLiteCellTemplateDirective
} from 'igniteui-angular/grids/lite';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-grid-lite-sorting-events',
  templateUrl: './grid-lite-sorting-events.component.html',
  styleUrls: ['./grid-lite-sorting-events.component.scss'],
    imports: [
      CommonModule,
      IgxGridLiteComponent,
      IgxGridLiteColumnComponent,
      IgxGridLiteCellTemplateDirective
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridLiteSortingEventsComponent implements OnInit {
  private dataService = inject(GridLiteDataService);

  public data: ProductInfo[] = [];
  public log: string[] = [];

  ngOnInit() {
    this.data = this.dataService.generateProducts(100);
  }

  private get timeStamp(): string {
    return `[${new Date().toLocaleTimeString()}]`;
  }

  private updateLog(message: string) {
    if (this.log.length > 10) {
      this.log.shift();
    }
    this.log = [...this.log, message];
  }

  handleSorting(event: any) {
    const { detail, type } = event;
    const allowedColumns = ['price', 'total', 'sold'];

    if (!allowedColumns.includes(detail.key)) {
      event.preventDefault();
      this.updateLog(
        `${this.timeStamp} :: Event '${type}' :: Sort operation was prevented for column '${detail.key}'`
      );
    } else {
      this.updateLog(
        `${this.timeStamp} :: Event '${type}' :: Column '${detail.key}' is being sorted with expression: ${JSON.stringify(detail)}`
      );
    }
  }

  handleSorted(event: any) {
    const { detail, type } = event;
    this.updateLog(
      `${this.timeStamp} :: Event '${type}' :: Column '${detail.key}' was sorted with expression: ${JSON.stringify(detail)}`
    );
  }
}
```
```html
<div class="grid-lite-wrapper">
    <igx-grid-lite [data]="data" (sorting)="handleSorting($event)" (sorted)="handleSorted($event)">
        <igx-grid-lite-column field="name" header="Name" sortable></igx-grid-lite-column>
        <igx-grid-lite-column field="price" header="Price" dataType="number" sortable></igx-grid-lite-column>
        <igx-grid-lite-column field="rating" header="Rating" dataType="number" sortable>
            <ng-template igxGridLiteCell let-value>
                <igc-rating [value]="value" readonly step="0.01" min="0" max="5">
                </igc-rating>
            </ng-template>
        </igx-grid-lite-column>
        <igx-grid-lite-column field="sold" header="Sold" dataType="number" sortable></igx-grid-lite-column>
        <igx-grid-lite-column field="total" header="Total" dataType="number" sortable></igx-grid-lite-column>
    </igx-grid-lite>
    <div class="log">
        @for (entry of log; track $index) {
        <p><code>{{ entry }}</code></p>
        }
    </div>
</div>
```
```scss
:host {
  contain: content;
  --ig-size: 2;
}

.grid-lite-wrapper {
  width: 100%;
  height: 100%;
}

igx-grid-lite {
  min-height: 65vh;
}

.log {
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  padding: 1rem;
  min-height: 1rem;
  font-size: 0.75rem;
  max-height: 5rem;
  overflow-y: auto;
}
```

## Remote Sort Operations

In cases where sorting must be done remotely or you want to save the current state/data to a server somewhere, the Grid Lite exposes a hook where you can implement and customize this behavior.

Using the **`dataPipelineConfiguration`** property, you can provide a custom hook which will be called each time a sort operation is about to run. The callback is passed a **`DataPipelineParams`** object.

```typescript
export type DataPipelineParams<T extends object> = {
  /**
   * The current data state of the grid.
   */
  data: T[];
  /**
   * The grid component itself.
   */
  grid: GridLite<T>;
  /**
   * The type of data operation being performed.
   */
  type: 'sort' | 'filter';
};
```

```typescript
grid.dataPipelineConfiguration = { sort: (params: DataPipelineParams<T>) => T[] | Promise<T[]> };
```

The custom callback can be async as the grid will wait for it until it resolves.

The following example mocks remote sorting operation, reflecting the REST endpoint generated based on the sort state of the component.

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { GridLiteDataService, ProductInfo } from '../grid-lite-data.service';
import { IgxGridLiteComponent, IgxGridLiteColumnComponent, IgxGridLiteCellTemplateDirective, IgxGridLiteDataPipelineConfiguration } from 'igniteui-angular/grids/lite';
import { IgxCircularProgressBarComponent } from 'igniteui-angular/progressbar';

defineComponents(IgcRatingComponent);

@Component({
    selector: 'app-grid-lite-sorting-pipeline',
    templateUrl: './grid-lite-sorting-pipeline.component.html',
    styleUrls: ['./grid-lite-sorting-pipeline.component.scss'],
    imports: [
        CommonModule,
        IgxGridLiteComponent,
        IgxGridLiteColumnComponent,
        IgxGridLiteCellTemplateDirective,
        IgxCircularProgressBarComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridLiteSortingPipelineComponent implements OnInit {
    private dataService = inject(GridLiteDataService);

    public data: ProductInfo[] = [];
    public dataPipelineConfiguration: IgxGridLiteDataPipelineConfiguration;
    public inOperation = false;
    public queryString = '';

    ngOnInit() {
        this.data = this.dataService.generateProducts(100);

        // Setup the data pipeline for sorting
        this.dataPipelineConfiguration = {
            sort: async ({ data, grid }: any) => {
                // Show the spinner
                this.inOperation = true;

                // Build the query string for demonstration
                this.queryString = grid.sortingExpressions.length
                    ? this.buildUri(grid.sortingExpressions)
                    : '';

                // Simulate async operation
                await new Promise(resolve => setTimeout(resolve, 250));

                // Hide the spinner
                this.inOperation = false;

                // Return data after a tiny defer so templates like <igc-rating> initialize properly
                return new Promise(resolve => setTimeout(() => resolve(data), 0));
            }
        };
    }

    private buildUri(state: any[]): string {
        const uri: string[] = [];
        for (const expr of state) {
            if (expr.direction === 'none') {
                continue;
            }
            uri.push(
                expr.direction === 'ascending'
                    ? `asc(${expr.key})`
                    : `desc(${expr.key})`
            );
        }
        return `GET: /data?sort_by=${uri.join(',')}`;
    }
}
```
```html
<div class="grid-lite-wrapper">
    <div>
        <h5>Generated request</h5>
        <p><code>{{ queryString }}</code></p>
    </div>
    <section class="grid-section">
        @if (inOperation) {
        <igx-circular-bar [animate]="false" [indeterminate]="true" [textVisibility]="false">
        </igx-circular-bar>
        }
        <igx-grid-lite [data]="data" [dataPipelineConfiguration]="dataPipelineConfiguration">
            <igx-grid-lite-column field="name" header="Name" sortable></igx-grid-lite-column>
            <igx-grid-lite-column field="price" header="Price" dataType="number" sortable></igx-grid-lite-column>
            <igx-grid-lite-column field="rating" header="Rating" dataType="number" sortable>
                <ng-template igxGridLiteCell let-value>
                    <igc-rating [value]="value" readonly step="0.01" min="0" max="5">
                    </igc-rating>
                </ng-template>
            </igx-grid-lite-column>
            <igx-grid-lite-column field="sold" header="Sold" dataType="number" sortable></igx-grid-lite-column>
            <igx-grid-lite-column field="total" header="Total" dataType="number" sortable></igx-grid-lite-column>
        </igx-grid-lite>
    </section>
</div>
```
```scss
:host {
  contain: content;
  --ig-size: 2;
}

.grid-lite-wrapper {
  width: 100%;
  height: 100%;
}

.grid-section {
  position: relative;
}

p {
  border: 1px solid #ccc;
  padding: 1rem;
  min-height: 1rem;
  font-size: 0.75rem;
}

igx-grid-lite {
  min-height: 65vh;
}
```

<!-- TODO ## API References

* `{ComponentName}`
* `Column`

-->

## Additional Resources

- [Column Configuration](column-configuration.md)
- [Filtering](filtering.md)

Our community is active and always welcoming to new ideas.

- [Grid Lite  **GitHub**](https://github.com/IgniteUI/igniteui-grid-lite)
