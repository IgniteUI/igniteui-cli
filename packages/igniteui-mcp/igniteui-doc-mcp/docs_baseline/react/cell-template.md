---
title: React Grid Lite Cell Template | Ignite UI for React | MIT license
_description: Configure and customize custom Grid Lite cell renderers. Create apps with our open-source React Grid Lite. Try now.
_keywords: cell template, React, {ComponentKeywords}, Ignite UI for React, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
_tocName: Cell Template
---

# Column Cell Template

By default, the grid uses the field of the column to render the value as a string inside the cell. This is fine for basic scenarios, but if you want to customize the rendered output or the final output is a combination of different data fields, you can customize the cell template.

To achieve that, set the `cellTemplate` property of the column.

<!-- React, WebComponents -->

```typescript
// Get a reference to the column element
const column = document.querySelector('igc-grid-lite-column[field="price"]');

// Set the cellTemplate property
column.cellTemplate = (params: IgcCellContext<T, K>) => { return html`<!-- template content -->`};
```

<!-- End: React, WebComponents -->

<!-- End: Blazor -->

## Use as a Formatter Function

For the simple scenario where some formatting is required, one can just return the formatted value. Here is an example for displaying a number value to a locale currency format:

<!-- React, WebComponents -->

```typescript
const { format: asCurrency } = new Intl.NumberFormat('en-150', { style: 'currency', currency: 'EUR' });

// Get a reference to the column element
const column = document.querySelector('igc-grid-lite-column');

// Return the custom currency format for a value `value = 123456.789`
column.cellTemplate = (params) => asCurrency(params.value); // => "€123,456.79"
```

<!-- End: React, WebComponents -->

<!-- End: Blazor -->

You can combine values different fields from the data source as well.

<!-- TODO:
Refer to the API documentation for `GridLiteCellContext` for more information. -->

<!-- React, WebComponents -->

```typescript
const { format: asCurrency } = new Intl.NumberFormat('en-150', { style: 'currency', currency: 'EUR' });

// Get a reference to the column element
const column = document.querySelector('igc-grid-lite-column');

// Return the custom currency format for an order of 10 items where the price is 99.99
column.cellTemplate = ({value, row}) => asCurrency(value * row.data.count); // => "€999.90"
```

<!-- End: React, WebComponents -->

<!-- End: Blazor -->

## Custom DOM Templates

Aside from using the `cellTemplate` property as a value formatter, you can also create your own DOM template, which
will be rendered inside the cell container.

We've decided to re-use the functionality provided by <a href="https://lit.dev/" target="_blank">Lit</a> and its <a href="https://lit.dev/docs/templates/expressions/" target="_blank">tagged template syntax</a> for building declarative
DOM fragments.

You can template any standard DOM elements as well as web components from other libraries.

<!-- React, WebComponents -->

```typescript
// Import the `html` tag function from the Lit package.
import { html } from "lit";

// Get a reference to the column element
const column = document.querySelector('igc-grid-lite-column[field="rating"]');

// Use another web component to represent the `rating` value in the grid
column.cellTemplate = ({ value }) => html`<igc-rating readonly value=${value}></igc-rating>`;
```

<!-- End: React, WebComponents -->

<!-- End: Blazor -->

> \[!NOTE]
> Keep in mind the more complex and involved the template is, the greater the performance cost. Avoid complex DOM structures if performance is important.

## Cell Context Object

The custom cell renderer is passed an `GridLiteCellContext` object as a parameter with the following props:

<!-- React, WebComponents -->

```typescript
/**
 * Context object for the row cell template callback.
 */
export interface GridLiteCellContext<
  T extends object,
  K extends Keys<T> = Keys<T>
> {
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
}
```

<!-- End: React, WebComponents -->

```typescript
export type UserSimple = {
  id: string;
  username: string;
  email: string;
  subscribed: boolean;
};

export type ProductInfo = {
  id: string;
  name: string;
  price: number;
  sold: number;
  rating: number;
  total: number;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  avatar: string;
  active: boolean;
  priority: 'Low' | 'Standard' | 'High';
  satisfaction: number;
  registeredAt: Date;
};

export class GridLiteDataService {
  private counter = 0;

  private namesMen = ['John', 'Bob', 'Mark', 'Charlie', 'Martin', 'Bill', 'Frank', 'Larry', 'Henry', 'Steve', 'Mike', 'Andrew'];
  private namesWomen = ['Jane', 'Alice', 'Diana', 'Eve', 'Grace' , 'Katie', 'Irene', 'Liz', 'Fiona', 'Pam', 'Val', 'Mindy'];
  private lastNames = ['Smith', 'Johnson', 'Mendoza', 'Brown', 'Spencer', 'Stone', 'Stark', 'Rooney'];
  private productNames = ['Widget', 'Gadget', 'Gizmo', 'Device', 'Tool', 'Instrument', 'Machine', 'Equipment'];
  private productModels = ['Pro', 'Plus', 'Max', 'Ultra', 'Mini', 'Lite'];
  private priorities: ('Low' | 'Standard' | 'High')[] = ['Low', 'Standard', 'High'];

  private randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private randomFloat(min: number, max: number, precision = 2): number {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    const random01 = array[0] / 2 ** 32;
    return parseFloat((random01 * (max - min) + min).toFixed(precision));
  }

  private randomElement<T>(array: T[]): T {
    return array[this.randomInt(0, array.length - 1)];
  }

  private randomBoolean(): boolean {
    const array = new Uint8Array(1);
    window.crypto.getRandomValues(array);
    return (array[0] & 1) === 0;
  }

  private generateId(): string {
    return `1000-${this.counter++}-${this.randomInt(1000, 9999)}`;
  }

  createProductInfo(): ProductInfo {
    const price = this.randomFloat(50, 500, 2);
    const sold = this.randomInt(10, 100);
    const total = parseFloat((price * sold).toFixed(2));
    const product = this.randomElement(this.productNames) + ' ' + this.randomElement(this.productModels);

    return {
      price,
      sold,
      total,
      id: this.generateId(),
      name: product,
      rating: this.randomFloat(0, 5, 1)
    };
  }

  createUserSimple(): UserSimple {
    const firstName = this.randomElement(this.namesMen.concat(this.namesWomen)).toLowerCase();
    const lastName = this.randomElement(this.lastNames).toLowerCase();
    const email = firstName + '.' + lastName + '@example.com';
    const username = firstName + '.' + lastName + this.randomInt(1, 99);
    return {
      id: this.generateId(),
      username: username,
      email: email,
      subscribed: this.randomBoolean()
    };
  }

  createUser(): User {
    let imagePath: string = "";
    let firstName: string = "";
    const gender = this.randomInt(0, 1);
    if (gender === 0) {
       imagePath = "https://dl.infragistics.com/x/img/people/men/" + this.randomInt(10, 40) + ".png";
       firstName = this.randomElement(this.namesMen);
    } else {
       imagePath = "https://dl.infragistics.com/x/img/people/women/" + this.randomInt(10, 40) + ".png";
       firstName = this.randomElement(this.namesWomen);
    }
    const lastName = this.randomElement(this.lastNames);
    const email = firstName.toLowerCase() + '.' + lastName.toLowerCase() + '@example.com';

    return {
      id: this.generateId(),
      firstName,
      lastName,
      age: this.randomInt(18, 90),
      email,
      avatar: imagePath,
      active: this.randomBoolean(),
      priority: this.randomElement(this.priorities),
      satisfaction: this.randomInt(0, 5),
      registeredAt: new Date(Date.now() - this.randomInt(0, 365 * 24 * 60 * 60 * 1000))
    };
  }

  generateUsers(count: number): User[] {
    return Array.from({ length: count }, () => this.createUser());
  }

  generateProducts(count: number): ProductInfo[] {
    return Array.from({ length: count }, () => this.createProductInfo());
  }

  generateSimpleUsers(count: number): UserSimple[] {
    return Array.from({ length: count }, () => this.createUserSimple());
  }
}
```
```css
.grid-lite-wrapper {
  width: 100%;
  height: 100%;
}

igc-grid-lite {
  min-height: 65vh;
  --ig-size: 2;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { GridLiteDataService, ProductInfo } from './GridLiteDataService';

// Import the web component
import { IgcGridLite } from 'igniteui-grid-lite';
import { 
  defineComponents,
  IgcRatingComponent
} from 'igniteui-webcomponents';

import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

// Register components
IgcGridLite.register();
defineComponents(IgcRatingComponent);

const formatter = new Intl.NumberFormat('en-EN', {
  style: 'currency',
  currency: 'EUR'
});

// Define cellTemplate functions outside component
const currencyCellTemplate = (params: any) => {
  const span = document.createElement('span');
  span.textContent = formatter.format(params.value);
  return span;
};

const ratingCellTemplate = (params: any) => {
  const rating = document.createElement('igc-rating');
  rating.setAttribute('readonly', '');
  rating.setAttribute('step', '0.01');
  rating.setAttribute('value', params.value.toString());
  return rating;
};

export default function Sample() {
  const gridRef = React.useRef<any>(null);

  React.useEffect(() => {
    if (gridRef.current) {
      const dataService = new GridLiteDataService();
      const data: ProductInfo[] = dataService.generateProducts(50);
      gridRef.current.data = data;
    }
  }, []);

  return (
    <div className="container sample ig-typography">
      <div className="grid-lite-wrapper">
        <igc-grid-lite ref={gridRef} id="grid-lite">
          <igc-grid-lite-column field="name" header="Product Name"></igc-grid-lite-column>
          <igc-grid-lite-column field="price" header="Price" data-type="number" cellTemplate={currencyCellTemplate}></igc-grid-lite-column>
          <igc-grid-lite-column field="sold" data-type="number" header="Units sold"></igc-grid-lite-column>
          <igc-grid-lite-column field="total" header="Total sold" cellTemplate={currencyCellTemplate}></igc-grid-lite-column>
          <igc-grid-lite-column field="rating" data-type="number" header="Customer rating" cellTemplate={ratingCellTemplate}></igc-grid-lite-column>
        </igc-grid-lite>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


<!-- TODO ## API References

- `{ComponentName}`
- `Column`

-->

## Additional Resources

- [Column Configuration](column-configuration.md)
- [Sorting](sorting.md)
- [Filtering](filtering.md)
- [Theming & Styling](theming.md)

Our community is active and always welcoming to new ideas.

- [Grid Lite **GitHub**](https://github.com/IgniteUI/igniteui-grid-lite)
