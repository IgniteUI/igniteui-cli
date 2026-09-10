---
title: Angular Grid Lite Data Binding | Ignite UI for Angular | MIT license
_description: Data binding for Angular Grid Lite. Create apps with our open-source Angular Grid Lite. It’s lightweight and packed with essential features. Try now.
_keywords: data binding, Infragistics
_license: MIT
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_tocName: Data Binding
---

# Angular Grid Lite Data Binding

The Grid Lite accepts and array of plain objects as a data source. Each grid row is the rendered representation of a data record in the array with row cells being controlled by the column configuration.

When applying data transformations, such as sorting and filtering, the grid does not modify the original data reference. That is to say, data transformations will not be reflected in the original source. The grid does not track changes to the objects inside the data array, so direct modification of the data objects will not be reflected.

## Change the Data Source at Runtime

The component supports changing its data source at runtime. If the new source has a different "shape" than the previous one make sure to update your column configuration as well.

```typescript
grid.data = [...{
  /** records follow */
}];
```

```html
<igx-grid-lite>
    <!-- Update column configuration, add or remove columns as needed to represent the new data. -->
    <igx-grid-lite-column field="id"></igx-grid-lite-column>
</igx-grid-lite>
```

If the grid has `autoGenerate` enabled, it will "_infer_" the new column configuration automatically when the data changes.

```typescript
grid.autoGenerate = true;

/** After the new binding the grid will infer the column collection from the bound data. */
grid.data = [];
```

Or just set the respective properties in the html instead of using a `@ViewChild` for the grid.

```html
  <igx-grid-lite
    [autoGenerate]="true"
    [data]="data">
  </igx-grid-lite>
```


>[!NOTE]
>The sort/filter states of the Grid Lite component are kept when changing the data source in this manner.
Usually you will want to reset them by calling either **`clearSort()`** and/or **`clearFilter()`**.

In the sample below, the grid has column auto-generation enabled. When you click on the switch data button,
the column collection is reset, and a new data source is bound to the grid.

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridLiteDataService, ProductInfo, UserSimple } from '../grid-lite-data.service';
import { IgxGridLiteComponent, IgxGridLiteColumnComponent } from 'igniteui-angular/grids/lite';
import { IgxButtonDirective } from 'igniteui-angular/directives';

@Component({
  selector: 'app-grid-lite-data-binding-dynamic',
  templateUrl: './grid-lite-data-binding-dynamic.component.html',
  styleUrls: ['./grid-lite-data-binding-dynamic.component.scss'],
  imports: [
    CommonModule,
    IgxGridLiteComponent,
    IgxGridLiteColumnComponent,
    IgxButtonDirective
  ]
})
export class GridLiteDataBindingDynamicComponent implements OnInit {
  private dataService = inject(GridLiteDataService);

  public data: (ProductInfo | UserSimple)[] = [];
  public dataType: 'products' | 'users' = 'products';

  ngOnInit() {
    this.data = this.dataService.generateProducts(50);
  }

  switchData() {
    this.dataType = this.dataType === 'products' ? 'users' : 'products';
    if (this.dataType === 'products') {
      this.data = this.dataService.generateProducts(50);
    } else {
      this.data = this.dataService.generateSimpleUsers(50);
    }
  }
}
```
```html
<div class="grid-lite-wrapper">
    <button igxButton="flat" (click)="switchData()">Switch data</button>
    <igx-grid-lite
      [autoGenerate]="true"
      [data]="data">
    </igx-grid-lite>
</div>
```
```scss
:host {
  contain: content;
  --ig-size: 1;
}

.grid-lite-wrapper {
  width: 100%;
  height: calc(100% - 50px);
}

igx-grid-lite {
  margin-top: 1rem;
  min-height: 65vh;
}
```

<!-- TODO ## API References

* `{ComponentName}`
* `Column`

-->

## Additional Resources

- [Column Configuration](column-configuration.md)
- [Sorting](sorting.md)
- [Filtering](filtering.md)
- [Theming & Styling](theming.md)

Our community is active and always welcoming to new ideas.

- [Grid Lite  **GitHub**](https://github.com/IgniteUI/igniteui-grid-lite)
