---
title: React Grid Lite Sorting  | Ignite UI for React | MIT license
_description: Try Grid Lite with sort operations, sort customization, and remote sorting for React Grid Lite. See demos and examples and build your next app.
_keywords: sorting, React, {ComponentKeywords}, Ignite UI for React, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
_tocName: Sorting
---

# Sort operations

<!-- React, WebComponents -->

The Grid Lite supports sorting operations on its data source. Data sorting is controlled on per-column level, allowing you to have sortable and non-sortable columns, while the grid itself controls certain sort behaviors. By default, sorting on a column is disabled unless explicitly configured with the `sortable` property of the column.

<!-- end: React, WebComponents -->

```tsx
return (
  <igc-grid-lite data={data}>
    <igc-grid-lite-column field="price" sortable></igc-grid-lite-column>
  </igc-grid-lite>
);
```

<!-- React, WebComponents -->

You can also control whether the sort operations for string columns should be case sensitive by using the `sortingCaseSensitive` property or `sorting-case-sensitive` attribute.

<!-- end: React, WebComponents -->

```tsx
return (
  <igc-grid-lite data={data}>
    <igc-grid-lite-column 
      field="name" 
      sortable
      sorting-case-sensitive
    ></igc-grid-lite-column>
  </igc-grid-lite>
);
```

<!-- React, WebComponents -->

For custom comparison logic, set the `sortConfiguration` property with a `comparer` function:

```typescript
const column = document.querySelector('igc-grid-lite-column[field="name"]');
column.sortConfiguration = {
  /**
   * Custom comparer function which will be used for sort operations for this column.
   * In the following sample, we compare the `name` values based on their length.
   */
  comparer: (a, b) => a.length - b.length
};
```

<!-- end: React, WebComponents -->

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
import { GridLiteDataService, User } from './GridLiteDataService';

// Import the web component
import { IgcGridLite } from 'igniteui-grid-lite';

import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

// Register components
IgcGridLite.register();

export default function Sample() {
  const gridRef = React.useRef<any>(null);

  React.useEffect(() => {
    if (gridRef.current) {
      const dataService = new GridLiteDataService();
      const data: User[] = dataService.generateUsers(50);
      gridRef.current.data = data;
    }
  }, []);

  return (
    <div className="container sample ig-typography">
      <div className="grid-lite-wrapper">
        <igc-grid-lite ref={gridRef} id="grid-lite">
          <igc-grid-lite-column field="firstName" header="First name" sortable></igc-grid-lite-column>
          <igc-grid-lite-column field="lastName" header="Last name" sortable></igc-grid-lite-column>
          <igc-grid-lite-column field="age" header="Age" sortable data-type="number"></igc-grid-lite-column>
          <igc-grid-lite-column field="email" header="Email" sortable></igc-grid-lite-column>
        </igc-grid-lite>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## Single and multi-sorting

<!-- React, WebComponents -->

The Grid Lite supports both single and multi-column sorting. Multi-column is enabled by default and can be configured through the `sortingOptions` property of the grid. The `mode` property accepts `'single'` or `'multiple'` as values.

<!-- end: React, WebComponents -->

```typescript
// Enable single-column sorting
grid.sortingOptions = { mode: 'single' };
```

> \[!NOTE]
> The single/multi-column sorting behavior controls how end-users interact with the Grid Lite. Sorting through the API with multiple expression will still work when single sorting is enabled.

### Tri-state sorting

The Grid Lite supports tri-state sorting and it is always enabled. End-users will cycle through the following direction states when clicking on sortable column headers:

<!-- React, WebComponents -->

    ascending -> descending -> none -> ascending

where `none` is the initial state of the data, that is to say with no sorting applied by the grid.

<!-- end: React, WebComponents -->

### Sorting Indicators

When multi-column sort is enabled, the column headers will display a sorting indicator, which is a number representing the order in which the sorting operations were applied.

<!-- React, WebComponents -->

The following sample shows the grid `sortingOptions` property and how it controls the grid sorting behavior.

<!-- end: React, WebComponents -->

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

.controls-wrapper {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1rem;
    align-items: center;
}

.config-panel {
    margin: 1rem 0;
    display: flex;
    gap: 2rem;
}

igc-grid-lite {
    height: 510px;
}
```
```tsx
import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { IgrSwitch } from 'igniteui-react';
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

// Define cellTemplate function outside component
const ratingCellTemplate = (params: any) => {
  const rating = document.createElement('igc-rating');
  rating.setAttribute('readonly', '');
  rating.setAttribute('step', '0.01');
  rating.setAttribute('value', params.value.toString());
  return rating;
};

export default function Sample() {
  const gridRef = useRef<any>(null);
  const [switchChecked, setSwitchChecked] = useState(true);
  const [sortingOptions, setSortingOptions] = useState<any>({
    mode: 'multiple'
  });

  React.useEffect(() => {
    if (gridRef.current) {
      const dataService = new GridLiteDataService();
      const data: ProductInfo[] = dataService.generateProducts(100);
      gridRef.current.data = data;
      gridRef.current.sortingOptions = sortingOptions;
    }
  }, [sortingOptions]);

  const updateConfig = React.useCallback((prop: string, checked: boolean) => {
    setSwitchChecked(checked);
  
    if (prop === 'multiple' && gridRef.current) {
      const mode = checked ? 'multiple' : 'single';
      setSortingOptions({ mode });
  
      gridRef.current.sortingConfiguration = { mode };
      gridRef.current.clearSort();
    }
  }, []);
  
  return (
    <div className="container sample ig-typography">
      <div className="controls-wrapper">
        <IgrSwitch id="multisort" checked={switchChecked} onChange={(e: any) => updateConfig('multiple', e.target.checked)}>
          Multiple Sort
        </IgrSwitch>
      </div>
      <div className="grid-lite-wrapper">
        <igc-grid-lite ref={gridRef} id="grid-lite">
          <igc-grid-lite-column field="name" header="Name" sortable></igc-grid-lite-column>
          <igc-grid-lite-column field="price" data-type="number" header="Price" sortable></igc-grid-lite-column>
          <igc-grid-lite-column field="rating" data-type="number" header="Rating" sortable cellTemplate={ratingCellTemplate}></igc-grid-lite-column>
          <igc-grid-lite-column field="sold" data-type="number" header="Sold" sortable></igc-grid-lite-column>
          <igc-grid-lite-column field="total" data-type="number" header="Total" sortable></igc-grid-lite-column>
        </igc-grid-lite>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## Sort Model

<!-- React, WebComponents -->

The building block for sort operations in the Grid Lite is the `SortingExpression<T>` which has the following properties:

<!-- end: React, WebComponents -->

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

<!-- React, WebComponents -->

The Grid Lite exposes two main approaches for applying sort operations from its API. Either through the `sort()`/`clearSort()` methods or through the `sortingExpressions` property.

The `sort()` method accepts either a single expression or an array of sort expression and then sorts the grid data based on those expressions.

<!-- end: React, WebComponents -->

```typescript
// Single
grid.sort({ key: 'price', direction: 'descending' });

// Multiple
grid.sort([
  { key: 'price', direction: 'descending' },
  { key: 'name', direction: 'descending' },
]);
```

<!-- React, WebComponents -->

The `clearSort()` method, as the name implies, clears the sort state of a single column or the whole grid component, depending
on the passed arguments.

<!-- end: React, WebComponents -->

```typescript
// Clear the sort state for the `price` column.
grid.clearSort('price');

// Clear the sort state of the grid.
grid.clearSort();
```

### Initial Sorting State

<!-- React, WebComponents -->

The `sortingExpressions` property is very similar in behavior to the `sort()` method call. It exposes a declarative way to control
sort state in the grid, but the most useful property is the ability to set initial sort state when the Grid Lite is first rendered.

<!-- end: React, WebComponents -->

<!-- React, WebComponents -->

For example here is a Lit-based sample:

```typescript
{
  sortState: SortingExpression<Products>[] = [
    { key: 'price', direction: 'descending' },
    { key: 'name', direction: 'ascending', caseSensitive: true },
  ];

  render() {
    return html`<igc-grid-lite .sortingExpressions=${sortState}></igc-grid-lite>`
  }
}
```

<!-- end: React, WebComponents -->

It can be used to get the current sort state of the component and do additional processing depending on another state in your application.

```typescript
const state = grid.sortingExpressions;
// Save the current sort state
saveUserSortState(state);
```

## Events

<!-- React, WebComponents -->

When a sorting operation is performed through the UI, the component emits a custom `sorting` event. The `detail` property is the sort expression which will be applied by the Grid Lite. The event is cancellable and if cancelled will stop the current sort operation.

After the grid applies the new sorting state, a `sorted` event is emitted. It contains the expression which was used in the last sort operation and it is not cancellable.

```typescript
grid.addEventListener('sorting', (event: CustomEvent<SortingExpression<T>>) => { ... });
grid.addEventListener('sorted', (event: CustomEvent<SortingExpression<T>>) => { ... });
```

<!-- end: React, WebComponents -->

In the following sample, when you try to sort the **Name** and **Rating** columns, the operation will be cancelled. Watch the event log below to see it in action.

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
    height: calc(100% - 10rem);
}

igc-grid-lite {
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

.log p {
    margin: 0.25rem 0;
}

.log code {
    font-family: monospace;
    font-size: 0.75rem;
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

const getTimeStamp = (): string => `[${new Date().toLocaleTimeString()}]`;

// Define cellTemplate function outside component
const ratingCellTemplate = (params: any) => {
  const rating = document.createElement('igc-rating');
  rating.setAttribute('readonly', '');
  rating.setAttribute('step', '0.01');
  rating.setAttribute('value', params.value.toString());
  return rating;
};

export default function Sample() {
  const gridRef = React.useRef<any>(null);
  const logRef = React.useRef<HTMLDivElement>(null);
  const [log, setLog] = React.useState<string[]>([]);

  const updateLog = React.useCallback((message: string) => {
    setLog(prevLog => {
      const newLog = [...prevLog];
      if (newLog.length > 10) {
        newLog.shift();
      }
      newLog.push(message);
      return newLog;
    });
  }, []);

  React.useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [log]);

  const handleSorting = React.useCallback((event: any) => {
    const { detail, type } = event;
    const allowedColumns = ['price', 'total', 'sold'];
    
    if (!allowedColumns.includes(detail.key)) {
      event.preventDefault();
      updateLog(
        `${getTimeStamp()} :: Event '${type}' :: Sort operation was prevented for column '${detail.key}'`
      );
    } else {
      updateLog(
        `${getTimeStamp()} :: Event '${type}' :: Column '${detail.key}' is being sorted with expression: ${JSON.stringify(detail)}`
      );
    }
  }, [updateLog]);

  const handleSorted = React.useCallback((event: any) => {
    const { detail, type } = event;
    updateLog(
      `${getTimeStamp()} :: Event '${type}' :: Column '${detail.key}' was sorted with expression: ${JSON.stringify(detail)}`
    );
  }, [updateLog]);

  React.useEffect(() => {
    if (gridRef.current) {
      const dataService = new GridLiteDataService();
      const data: ProductInfo[] = dataService.generateProducts(100);
      gridRef.current.data = data;

      // Listen to sorting events
      gridRef.current.addEventListener('sorting', handleSorting);
      gridRef.current.addEventListener('sorted', handleSorted);

      return () => {
        if (gridRef.current) {
          gridRef.current.removeEventListener('sorting', handleSorting);
          gridRef.current.removeEventListener('sorted', handleSorted);
        }
      };
    }
  }, [handleSorting, handleSorted]);

  const logContent = log
    .map(entry => `<p><code>${entry}</code></p>`)
    .join('');

  return (
    <div className="container sample ig-typography">
      <div className="grid-lite-wrapper">
        <igc-grid-lite ref={gridRef} id="grid-lite">
          <igc-grid-lite-column field="name" header="Name" sortable></igc-grid-lite-column>
          <igc-grid-lite-column field="price" data-type="number" header="Price" sortable></igc-grid-lite-column>
          <igc-grid-lite-column field="rating" data-type="number" header="Rating" sortable cellTemplate={ratingCellTemplate}></igc-grid-lite-column>
          <igc-grid-lite-column field="sold" data-type="number" header="Sold" sortable></igc-grid-lite-column>
          <igc-grid-lite-column field="total" data-type="number" header="Total" sortable></igc-grid-lite-column>
        </igc-grid-lite>
        <div ref={logRef} className="log" id="log" dangerouslySetInnerHTML={{ __html: logContent }}></div>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


<!-- React, WebComponents -->

## Remote sort operations

In cases where sorting must be done remotely or you want to save the current state/data to a server somewhere, the Grid Lite exposes a hook where you can implement and customize this behavior.

<!-- React, WebComponents -->

Using the `dataPipelineConfiguration` property, you can provide a custom hook which will be called each time a sort operation is about to run. The callback is passed a `DataPipelineParams` object.

```typescript
export type DataPipelineParams<T extends object> = {
  /**
   * The current data state of the grid.
   */
  data: T[];
  /**
   * The grid component itself.
   */
  grid: IgcGridLite<T>;
  /**
   * The type of data operation being performed.
   */
  type: 'sort' | 'filter';
};
```

```typescript
grid.dataPipelineConfiguration = { sort: (params: DataPipelineParams<T>) => T[] | Promise<T[]> };
```

<!-- End: React, WebComponents -->

The custom callback can be async as the grid will wait for it until it resolves.

The following example mocks remote sorting operation, reflecting the REST endpoint generated based on the sort state of the component.

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

.grid-section {
    position: relative;
}

igc-circular-progress {
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

.in-operation {
    visibility: visible;
    pointer-events: all;
    user-select: contain;
}

p {
    border: 1px solid var(--border);
    padding: 1rem;
    min-height: 1rem;
    font-size: 0.75rem;
}

code {
    background-color: rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 0.125rem 0.375rem;
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.875em;
    color: #222222;
    display: inline-block;
    width: 100%;
    min-height: 2em;
    box-sizing: border-box;
}

igc-grid-lite {
    min-height: 65vh;
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
  IgcRatingComponent,
  IgcCircularProgressComponent
} from 'igniteui-webcomponents';
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

// Register components
IgcGridLite.register();
defineComponents(IgcRatingComponent, IgcCircularProgressComponent);

// Define cellTemplate function outside component
const ratingCellTemplate = (params: any) => {
  const rating = document.createElement('igc-rating');
  rating.setAttribute('readonly', '');
  rating.setAttribute('step', '0.01');
  rating.setAttribute('value', params.value.toString());
  return rating;
};

const buildUri = (state: any[]): string => {
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
};

export default function Sample() {
  const gridRef = React.useRef<any>(null);
  const progressRef = React.useRef<HTMLDivElement>(null);
  const [queryString, setQueryString] = React.useState('');

  const dataPipelineConfiguration = React.useMemo(() => ({
    sort: async ({ data, grid }: any) => {
      if (progressRef.current) {
        progressRef.current.classList.add('in-operation');
      }
      const qs = grid.sortingExpressions.length
        ? buildUri(grid.sortingExpressions)
        : '';
      setQueryString(qs);
      
      await new Promise(resolve => setTimeout(resolve, 250));
      if (progressRef.current) {
        progressRef.current.classList.remove('in-operation');
      }
      return data;
    }
  }), []);

  React.useEffect(() => {
    if (gridRef.current) {
      const dataService = new GridLiteDataService();
      const data: ProductInfo[] = dataService.generateProducts(100);
      gridRef.current.data = data;
      gridRef.current.dataPipelineConfiguration = dataPipelineConfiguration;
    }
  }, [dataPipelineConfiguration]);

  return (
    <div className="container sample ig-typography">
      <div className="info-panel">
        <div id="queryString">
          <p><code>{queryString}</code></p>
        </div>
      </div>
      <div className="grid-lite-wrapper">
        <igc-grid-lite ref={gridRef} id="grid-lite">
          <igc-grid-lite-column field="name" header="Name" sortable></igc-grid-lite-column>
          <igc-grid-lite-column field="price" data-type="number" header="Price" sortable></igc-grid-lite-column>
          <igc-grid-lite-column field="rating" data-type="number" header="Rating" sortable cellTemplate={ratingCellTemplate}></igc-grid-lite-column>
          <igc-grid-lite-column field="sold" data-type="number" header="Sold" sortable></igc-grid-lite-column>
          <igc-grid-lite-column field="total" data-type="number" header="Total" sortable></igc-grid-lite-column>
        </igc-grid-lite>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


<!-- end: React, WebComponents -->

<!-- TODO ## API References

- `{ComponentName}`
- `Column`

-->

## Additional Resources

- [Column Configuration](column-configuration.md)
- [Filtering](filtering.md)

Our community is active and always welcoming to new ideas.

- [Grid Lite **GitHub**](https://github.com/IgniteUI/igniteui-grid-lite)
