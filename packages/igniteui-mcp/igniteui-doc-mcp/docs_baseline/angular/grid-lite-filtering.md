---
title: Angular Grid Lite Filtering | Ignite UI for Angular | MIT license
_description: Filter operations, filter customization, and remote filtering for Angular Grid Lite. Create apps with our open-source Angular Grid Lite. Try it now.
_keywords: filtering, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
_license: MIT
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_tocName: Filtering Overview
---

# Angular Grid Lite Filter Operations

The Grid Lite supports filtering operations on its data source. Data filtering is controlled on per-column level, allowing you to have filterable and non-filterable columns. By default, filtering on a column is disabled unless explicitly configured with the `filterable` property of the column configuration object.

```html
<igx-grid-lite-column
  field="price"
  filterable
></igx-grid-lite-column>
```

You can also control whether the filter operations for string columns should be case sensitive by using the `filteringCaseSensitive` property:

```html
<igx-grid-lite-column
  field="name"
  filterable
  filteringCaseSensitive
></igx-grid-lite-column>
```

You can also set these properties programmatically:

```typescript
column.filterable = true;
column.filteringCaseSensitive = true;
```

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcCheckboxComponent } from 'igniteui-webcomponents';
import { GridLiteDataService, User } from '../grid-lite-data.service';
import { IgxGridLiteComponent, IgxGridLiteColumnComponent, IgxGridLiteCellTemplateDirective } from 'igniteui-angular/grids/lite';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';

defineComponents(IgcCheckboxComponent);

@Component({
  selector: 'app-grid-lite-filtering-simple',
  templateUrl: './grid-lite-filtering-simple.component.html',
  styleUrls: ['./grid-lite-filtering-simple.component.scss'],
  imports: [
    CommonModule,
    IgxGridLiteComponent,
    IgxGridLiteColumnComponent,
    IgxGridLiteCellTemplateDirective,
    IgxCheckboxComponent
]
})
export class GridLiteFilteringSimpleComponent implements OnInit {
  private dataService = inject(GridLiteDataService);

  public data: User[] = [];

  ngOnInit() {
    this.data = this.dataService.generateUsers(50);
  }
}
```
```html
<div class="grid-lite-wrapper">
  <igx-grid-lite [data]="data">
    <igx-grid-lite-column field="firstName" header="First name" filterable></igx-grid-lite-column>
    <igx-grid-lite-column field="lastName" header="Last name" filterable></igx-grid-lite-column>
    <igx-grid-lite-column field="age" header="Age" dataType="number" filterable></igx-grid-lite-column>
    <igx-grid-lite-column field="active" header="Active" dataType="boolean" filterable>
      <ng-template igxGridLiteCell let-value>
        <igx-checkbox [checked]="value" [readonly]="true"></igx-checkbox>
      </ng-template>
    </igx-grid-lite-column>
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

## Filter Model

The building blocks for filter operations in the grid is the **`FilterExpression`** which has the following structure:

```typescript
export interface FilterExpression<T, K extends Keys<T> = Keys<T>> {
  /**
   * The target column for the filter operation.
   */
  key: K;
  /**
   * The filter function which will be executed against the data records.
   */
  condition: FilterOperation<T[K]> | OperandKeys<T[K]>;

  /**
   * The filtering value used in the filter condition function.
   *
   * @remarks
   * Optional for unary conditions.
   */
  searchTerm?: T[K];
  /**
   * Dictates how this expression should resolve in the filter operation in relation to
   * other expressions.
   */
  criteria?: FilterCriteria;
  /**
   * Whether the sort operation should be case sensitive.
   *
   * @remarks
   * If not provided, the value is resolved based on the column filter configuration (if any).
   */
  caseSensitive?: boolean;
}
```

## Filter API

The Grid Lite exposes two main approaches for applying filter operations from its API. Either through the **`GridLite.filter()`**/**`GridLite.clearFilter()`** methods or through the **`Grid.Lite.filterExpressions`** property.

The **`filter()`** method accepts either a single expression or an array of filter expression and then filters the grid data
based on those expressions.

```typescript
// Single
grid.filter({ key: 'firstName', condition: 'contains', searchTerm: 'George' });

// Multiple
grid.filter([
  { key: 'firstName', condition: 'startsWith', searchTerm: 'a' },
  { key: 'firstName', condition: 'startsWith' searchTerm: 'g', criteria: 'or' },
]);
```

The **`clearFilter()`** method, as the name implies, clears the filter state of a single column or the whole grid component, depending on the passed arguments.

```typescript
// Clear the filter state for the `age` column.
grid.clearFilter('age');

// Clear the filter state of the grid.
grid.clearFilter();
```

## Initial Filter State

The **`filterExpressions`** property is very similar in behavior to the **`filter()`** method call. It exposes a declarative way to control filter state in the grid, but the most useful property is the ability to set initial filter state when the Grid Lite component is first rendered.

For example here is a Lit-based sample:

```typescript
{
  filteringExpressions: IgxGridLiteFilteringExpression<User>[] = [
    { key: 'age', condition: 'greaterThan', searchTerm: 21 },
    /** unary condition so `searchTerm` is not required */
    { key: 'active', condition: 'true' },
  ];
}
```

```html
<igx-grid-lite [filteringExpressions]="filteringExpressions"></igx-grid-lite>
```

It can be used to get the current filter state of the component and do additional processing depending on another state in your application.

```typescript
const state = grid.filterExpressions;
// Save the current filter state
saveUserFilterState(state);
```

## Events

When a filter operation is performed through the UI, the component emits a custom **`filtering`** event. The **`detail`** property is the sort expression which will be applied by the Grid Lite. The event is cancellable and if cancelled will prevent the current filter operation.

After the grid applies the new filter state, a **`filtered`** event is emitted. It contains the filter state for the column which was the target of the operation and it is not cancellable.

```html
<igx-grid-lite (filtering)="onFiltering($event)" (filtered)="onFiltered($event)">
```

```typescript
onFiltering(event: IgxFilteringEvent) { ... }
onFiltered(event: IgxFilteredEvent) { ... }
```

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcCheckboxComponent } from 'igniteui-webcomponents';
import { GridLiteDataService, User } from '../grid-lite-data.service';
import {
  IgxGridLiteComponent,
  IgxGridLiteColumnComponent,
  IgxGridLiteCellTemplateDirective
} from 'igniteui-angular/grids/lite';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';

defineComponents(IgcCheckboxComponent);

@Component({
  selector: 'app-grid-lite-filtering-events',
  templateUrl: './grid-lite-filtering-events.component.html',
  styleUrls: ['./grid-lite-filtering-events.component.scss'],
  imports: [
    CommonModule,
    IgxGridLiteComponent,
    IgxGridLiteColumnComponent,
    IgxGridLiteCellTemplateDirective,
    IgxCheckboxComponent
  ]
})
export class GridLiteFilteringEventsComponent implements OnInit {
  private dataService = inject(GridLiteDataService);

  public data: User[] = [];
  public log: string[] = [];

  ngOnInit(): void {
    this.data = this.dataService.generateUsers(50);
  }

  private get timeStamp(): string {
    return `[${new Date().toLocaleTimeString()}]`;
  }

  private updateLog(message: string): void {
    if (this.log.length >= 10) {
      this.log.shift();
    }
    this.log = [...this.log, message];
  }

  handleFiltering(event: any): void {
    const { expressions, type } = event.detail;

    this.updateLog(
      `${this.timeStamp} :: Event 'filtering' :: Filter operation of type '${type}' for column '${expressions[0].key}'`
    );
  }

  handleFiltered(event: any): void {
    this.updateLog(
      `${this.timeStamp} :: Event 'filtered' for column '${event.detail.key}'`
    );
  }
}
```
```html
<div class="grid-lite-wrapper">
  <igx-grid-lite
    [data]="data"
    (filtering)="handleFiltering($event)"
    (filtered)="handleFiltered($event)">

    <igx-grid-lite-column
      field="firstName"
      header="First name"
      filterable>
    </igx-grid-lite-column>

    <igx-grid-lite-column
      field="lastName"
      header="Last name"
      filterable>
    </igx-grid-lite-column>

    <igx-grid-lite-column
      field="age"
      header="Age"
      dataType="number"
      filterable>
    </igx-grid-lite-column>

    <igx-grid-lite-column
      field="active"
      header="Active"
      dataType="boolean"
      filterable>
      <ng-template #checkboxTemplate let-value>
        <igx-checkbox
          [checked]="value"
          [readonly]="true">
        </igx-checkbox>
      </ng-template>
    </igx-grid-lite-column>

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
  min-height: 2rem;
  font-size: 0.75rem;
  max-height: 5rem;
  overflow-y: auto;
}
```

## Remote filter operations

In cases where filtering must be done remotely or you want to save the current state/data to a server somewhere,
the Grid Lite exposes a hook where you can implement and customize this behavior.

Using the **`dataPipelineConfiguration`** property, you can provide a custom hook which will be called each time a filter operation is about to run. The callback is passed a **`DataPipelineParams`** object.

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
grid.dataPipelineConfiguration = { filter: (params: DataPipelineParams<T>) => T[] | Promise<T[]> };
```

The custom callback can be async as the grid will wait for it until it resolves.

The following example mocks remote filter operation, reflecting the REST endpoint generated based on the filter state of the component.

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcCheckboxComponent, IgcCircularProgressComponent } from 'igniteui-webcomponents';
import { GridLiteDataService, User } from '../grid-lite-data.service';
import { IgxGridLiteComponent, IgxGridLiteColumnComponent, IgxGridLiteCellTemplateDirective, IgxGridLiteDataPipelineConfiguration } from 'igniteui-angular/grids/lite';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { IgxCircularProgressBarComponent } from 'igniteui-angular/progressbar';

defineComponents(IgcCheckboxComponent, IgcCircularProgressComponent);

@Component({
  selector: 'app-grid-lite-filtering-pipeline',
  templateUrl: './grid-lite-filtering-pipeline.component.html',
  styleUrls: ['./grid-lite-filtering-pipeline.component.scss'],
  imports: [
    CommonModule,
    IgxGridLiteComponent,
    IgxGridLiteColumnComponent,
    IgxGridLiteCellTemplateDirective,
    IgxCheckboxComponent,
    IgxCircularProgressBarComponent
  ]
})
export class GridLiteFilteringPipelineComponent implements OnInit {
  private dataService = inject(GridLiteDataService);

  public data: User[] = [];
  public dataPipelineConfiguration: IgxGridLiteDataPipelineConfiguration;
  public inOperation = false;
  public queryString = '';

  ngOnInit() {
    this.data = this.dataService.generateUsers(500);

    this.dataPipelineConfiguration = {
      filter: async ({ data, grid }: any) => {
        this.inOperation = true;
        this.buildUri(grid.filterExpressions);
        await new Promise(resolve => setTimeout(resolve, 250));
        this.inOperation = false;
        return data;
      }
    };
  }

  private buildUri(state: any[]) {
    const grouped = this.groupBy(state, 'key');
    const out: string[] = [];

    for (const [key, exprs] of Object.entries(grouped)) {
      out.push(`${key}(${this.mapExpressions(exprs as any[])})`);
    }

    this.queryString = `GET: /data?filter=${out.join('&')}`;
  }

  private groupBy<T extends object>(arr: T[], key: keyof T): Record<string, T[]> {
    const out: Record<string, T[]> = {};
    for (const each of arr) {
      const slot = each[key] as string;
      if (!out[slot]) {
        out[slot] = [];
      }
      out[slot].push(each);
    }
    return out;
  }

  private mapExpressions(arr: any[]): string {
    const arrTemp = arr.map(({ searchTerm, criteria, condition }, idx) => {
    const normalizedSearchTerm = !searchTerm ? condition.name : searchTerm;

    return idx < 1
        ? `${condition.name}("${normalizedSearchTerm}")`
        : `${criteria?.toUpperCase()} ${condition.name}("${normalizedSearchTerm}")`;
    }).join(' ');
    return arrTemp;
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
            <igx-grid-lite-column field="firstName" header="First Name" filterable></igx-grid-lite-column>
            <igx-grid-lite-column field="lastName" header="Last Name" filterable></igx-grid-lite-column>
            <igx-grid-lite-column field="age" header="Age" dataType="number" filterable></igx-grid-lite-column>
            <igx-grid-lite-column field="active" header="Active" dataType="boolean" filterable>
                <ng-template igxGridLiteCell let-value>
                    <igx-checkbox [checked]="value" [readonly]="true">
                    </igx-checkbox>
                </ng-template>
            </igx-grid-lite-column>
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

igx-circular-progress {
  visibility: hidden;
  --diameter: 4rem;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
## API References

* `{ComponentName}`
* `Column`
-->

## Additional Resources

- [Column Configuration](column-configuration.md)
- [Sorting](sorting.md)

Our community is active and always welcoming to new ideas.

- [Grid Lite  **GitHub**](https://github.com/IgniteUI/igniteui-grid-lite)
