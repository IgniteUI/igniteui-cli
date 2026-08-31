---
title: Angular Grid Lite Cell Template | Ignite UI for Angular | MIT license
_description: Configure and customize custom Grid Lite cell renderers. Create apps with our open-source Angular Grid Lite. Try now.
_keywords: cell template, Infragistics
_license: MIT
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_tocName: Cell Template
---

# Column Cell Template

By default, the grid uses the field of the column to render the value as a string inside the cell. This is fine for basic scenarios, but if you want to customize the rendered output or the final output is a combination of different data fields, you can customize the cell template.

To achieve that, use **`<ng-template>`** inside `<igx-grid-lite-column>...</igx-grid-lite-column>` of a column in which you want to template the content.

```html
<igx-grid-lite-column field="avatar" header="Avatar">
    <ng-template igxGridLiteCell let-value>
        <igx-avatar shape="circle" alt="User avatar" [src]="value">
        </igx-avatar>
    </ng-template>
</igx-grid-lite-column>
```

You also need to import **`IgxGridLiteCellTemplateDirective`**

```typescript
import { IgxGridLiteComponent, IgxGridLiteColumnComponent, IgxGridLiteCellTemplateDirective } from 'igniteui-angular/grids/lite';
```

And add it to the `imports` array

```typescript
imports: [ IgxGridLiteCellTemplateDirective ]
```

## Use as a Formatter Function

For the simple scenario where some formatting is required, one can just return the formatted value. Here is an example for displaying a number value to a locale currency format:

```typescript
public formatter = new Intl.NumberFormat('en-150', {
  style: 'currency',
  currency: 'EUR'
});

/** Return the custom currency format for a value `value = 123456.789` */
protected formatCurrency = (value: number) => {
  return this.formatter.format(value); // => "€123,456.79"
};
```

You can combine values different fields from the data source as well.
<!-- TODO: 
Refer to the API documentation for **`GridLiteCellContext`** for more information. -->

```typescript
public formatter = new Intl.NumberFormat('en-150', {
  style: 'currency',
  currency: 'EUR'
});

/** Return the total earned money from a product in custom currency */
protected formatCurrency = (value: number, unitsSold: number) => {
  return this.formatter.format(value * unitsSold);
};
```

```html
<igx-grid-lite-column field="price" header="Price" dataType="number">
    <ng-template igxGridLiteCell let-value let-row="row">
        {{formatCurrency(value, row.data.sold)}}
    </ng-template>
</igx-grid-lite-column>
```

## Custom DOM Templates

Aside from using components from **`igniteui-angular`** inside the **`<ng-template>`** , you can also create your own DOM template, which will be rendered inside the cell container.

You can template any standard DOM elements as well as web components from other libraries. For example in the following code snippets we are using the rating component coming from **`igniteui-webcomponents`**. In order to use it properly, we need to go through a few steps described below.

```typescript
// Import external components for the custom template
import {
    defineComponents,
    IgcRatingComponent
} from 'igniteui-webcomponents';

// Define them so that we can use them in our sample
defineComponents(
    IgcRatingComponent
);
```

```html
<!-- Use the rating component from Web Components in your template -->
<igx-grid-lite-column field="rating" header="Customer Rating" dataType="number">
    <ng-template igxGridLiteCell let-value>
        <igc-rating
            [value]="value"
            readonly
            min="0"
            max="5">
        </igc-rating>
    </ng-template>
</igx-grid-lite-column>
```

>[!NOTE]
>Keep in mind the more complex and involved the template is, the greater the performance cost. Avoid complex DOM structures if performance is important.

## Cell Context Object

The custom cell renderer is passed an **`GridLiteCellContext`** object as a parameter with the following props:


```typescript
/**
 * Context object for the row cell template callback.
 */
export interface IgxGridLiteCellTemplateContext<T extends object> {
  /**
   * The cell element parent of the template.
   */
  parent: GridLiteCell<T>;
  /**
   * The row element containing the cell.
   */
  row: GridLiteRow<T>;
  /**
   * The current configuration for the column.
   */
  column: ColumnConfiguration<T, K>;
  /**
   * The value from the data source for this cell.
   */
  value: PropertyType<T, K>;
  
  $implicit: PropertyType<T, K>;
}
```

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { GridLiteDataService, ProductInfo } from '../grid-lite-data.service';
import { IgxGridLiteComponent, IgxGridLiteColumnComponent, IgxGridLiteCellTemplateDirective } from 'igniteui-angular/grids/lite';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-grid-lite-column-config-simple',
  templateUrl: './grid-lite-column-config-simple.component.html',
  styleUrls: ['./grid-lite-column-config-simple.component.scss'],
  imports: [CommonModule, IgxGridLiteComponent, IgxGridLiteColumnComponent, IgxGridLiteCellTemplateDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridLiteColumnConfigSimpleComponent implements OnInit {
  private dataService = inject(GridLiteDataService);

  public data: ProductInfo[] = [];

  public formatter = new Intl.NumberFormat('en-150', {
    style: 'currency',
    currency: 'EUR'
  });

  ngOnInit() {
    this.data = this.dataService.generateProducts(50);
  }

  protected formatCurrency = (value: number) => {
    return this.formatter.format(value);
  };
}
```
```html
<div class="grid-lite-wrapper">
  <igx-grid-lite [data]="data">
    <igx-grid-lite-column field="name" header="Product Name"></igx-grid-lite-column>
    <igx-grid-lite-column field="price" header="Price" dataType="number">
        <ng-template igxGridLiteCell let-value>
            {{formatCurrency(value)}}
        </ng-template>
    </igx-grid-lite-column>
    <igx-grid-lite-column field="sold" header="Units Sold" dataType="number"></igx-grid-lite-column>
    <igx-grid-lite-column field="total" header="Total sold">
        <ng-template igxGridLiteCell let-value>
            {{formatCurrency(value)}}
        </ng-template>
    </igx-grid-lite-column>
    <igx-grid-lite-column field="rating" header="Customer Rating" dataType="number">
        <ng-template igxGridLiteCell let-value>
            <igc-rating
                [value]="value"
                readonly
                min="0"
                max="5">
            </igc-rating>
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
