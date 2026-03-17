---
title: React Grid Lite Filtering | Ignite UI for React | MIT license
_description: Filter operations, filter customization, and remote filtering for Grid Lite. Create apps with our open-source React Grid Lite. Try it now.
_keywords: filtering, React, {ComponentKeywords}, Ignite UI for React, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
_tocName: Filtering
---

# React Grid Lite Filter Operations

<!-- React, WebComponents -->

The Grid Lite supports filtering operations on its data source. Data filtering is controlled on per-column level, allowing you to have filterable and non-filterable columns. By default, filtering on a column is disabled unless explicitly configured with the `filterable` property of the column.

<!-- end: React, WebComponents -->

```tsx
return (
  <IgrGridLite data={data}>
    <IgrGridLiteColumn field="price" filterable></IgrGridLiteColumn>
  </IgrGridLite>
);
```

<!-- React -->

You can also control whether the filter operations for string columns should be case sensitive by using the `filteringCaseSensitive` property:

<!-- end: React -->

```tsx
return (
  <IgrGridLite data={data}>
    <IgrGridLiteColumn 
      field="price" 
      filterable
      filteringCaseSensitive
    ></IgrGridLiteColumn>
  </IgrGridLite>
);
```

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
import React from "react";
import ReactDOM from "react-dom/client";
import { GridLiteDataService, User } from "./GridLiteDataService";

import { IgrCheckbox } from "igniteui-react";
import {
  IgrGridLite,
  IgrGridLiteColumn,
  type IgrCellContext,
} from "igniteui-react/grid-lite";

import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

// Define cellTemplate function outside component
const activeCellTemplate = (ctx: IgrCellContext) => (
  <IgrCheckbox checked={ctx.value}></IgrCheckbox>
);

export default function Sample() {
  const [data, setData] = React.useState<User[]>([]);

  React.useEffect(() => {
    const dataService = new GridLiteDataService();
    const items: User[] = dataService.generateUsers(50);
    setData(items);
  }, []);

  return (
    <div className="container sample ig-typography">
      <div className="grid-lite-wrapper">
        <IgrGridLite id="grid-lite" data={data}>
          <IgrGridLiteColumn
            field="firstName"
            header="First name"
            filterable
          ></IgrGridLiteColumn>
          <IgrGridLiteColumn
            field="lastName"
            header="Last name"
            filterable
          ></IgrGridLiteColumn>
          <IgrGridLiteColumn
            field="age"
            header="Age"
            filterable
            dataType="number"
          ></IgrGridLiteColumn>
          <IgrGridLiteColumn
            field="active"
            header="Active"
            dataType="boolean"
            filterable
            cellTemplate={activeCellTemplate}
          ></IgrGridLiteColumn>
        </IgrGridLite>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Sample />);
```


## Filter Model

<!-- React, WebComponents -->

The building blocks for filter operations in the grid is the `FilterExpression<T, K>` which has the following structure:

<!-- end: React, WebComponents -->

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

<!-- React, WebComponents -->

The Grid Lite exposes two main approaches for applying filter operations from its API. Either through the `GridLite.filter()`/`GridLite.clearFilter()` methods or through the `GridLite.filterExpressions` property.

The `filter()` method accepts either a single expression or an array of filter expression and then filters the grid data
based on those expressions.

<!-- end: React, WebComponents -->

<!-- React -->

```typescript
// Single
gridRef.current.filter({ key: 'firstName', condition: 'contains', searchTerm: 'George' });

// Multiple
gridRef.current.filter([
  { key: 'firstName', condition: 'startsWith', searchTerm: 'a' },
  { key: 'firstName', condition: 'startsWith', searchTerm: 'g', criteria: 'or' },
]);
```

<!-- React, WebComponents -->

The `clearFilter()` method, as the name implies, clears the filter state of a single column or the whole grid component, depending on the passed arguments.

<!-- end: React, WebComponents -->

<!-- React -->

```typescript
// Clear the filter state for the `age` column.
gridRef.current.clearFilter('age');

// Clear the filter state of the grid.
gridRef.current.clearFilter();
```

## Initial filter state

<!-- React, WebComponents -->

The `filterExpressions` property is very similar in behavior to the `filter()` method call. It exposes a declarative way to control filter state in the grid, but the most useful property is the ability to set initial filter state when the Grid Lite component is first rendered.

<!-- React -->

Here is an example:

```tsx
const filterState: FilterExpression<User>[] = [
  { key: 'age', condition: 'greaterThan', searchTerm: 21 },
  /** unary condition so `searchTerm` is not required */
  { key: 'active', condition: 'true' },
];

return(
  <IgrGridLite filterExpressions={filterState}></IgrGridLite>
);
```

<!-- end: React -->

<!-- end: React, WebComponents -->

It can be used to get the current filter state of the component and do additional processing depending on another state in your application.

<!-- React -->

```typescript
const state = gridRef.current.filterExpressions;
// Save the current filter state
saveUserFilterState(state);
```

## Events

<!-- React, WebComponents -->

When a filter operation is performed through the UI, the component emits a custom `filtering` event. The `detail` property is the filter expression which will be applied by the Grid Lite. The event is cancellable and if cancelled will prevent the current filter operation.

After the grid applies the new filter state, a `filtered` event is emitted. It contains the filter state for the column which was the target of the operation and it is not cancellable.

<!-- end: React, WebComponents -->

<!-- React -->

```typescript
gridRef.current.addEventListener('filtering', (event: CustomEvent<GridLiteFilteringEvent<T>>) => { ... });
gridRef.current.addEventListener('filtered', (event: CustomEvent<GridLiteFilteredEvent<T>>) => { ... });
```

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
import { useState, useCallback, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { GridLiteDataService, User } from './GridLiteDataService';

import { IgrGridLite, IgrGridLiteColumn } from 'igniteui-react/grid-lite';
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

const getTime = () => `[${new Date().toLocaleTimeString()}]`;

export default function GridLiteFilteringConfigEvents() {
  const logRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<User[]>([]);
  const [log, setLog] = useState<string[]>([]);

  const updateLog = useCallback((message: string) => {
    setLog(prevLog => {
      const newLog = [...prevLog];
      if (newLog.length > 10) {
        newLog.shift();
      }
      newLog.push(message);
      return newLog;
    });
  }, []);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [log]);

  const handleFiltering = useCallback((event: CustomEvent<any>) => {
    const { expressions, type } = event.detail;
    updateLog(`${getTime()} :: Event \`filtering\` :: Filter operation of type '${type}' for column '${expressions[0].key}'`);
  }, [updateLog]);

  const handleFiltered = useCallback((event: CustomEvent<any>) => {
    updateLog(`${getTime()} :: Event \`filtered\` for column '${event.detail.key}'`);
  }, [updateLog]);

  useEffect(() => {
    const dataService = new GridLiteDataService();
    setData(dataService.generateUsers(50));
  }, []);

  return (
    <div className="container sample ig-typography">
      <div className="grid-lite-wrapper">
        <IgrGridLite id="grid-lite" data={data} onFiltering={handleFiltering} onFiltered={handleFiltered}>
          <IgrGridLiteColumn field="firstName" header="First name" filterable={true}></IgrGridLiteColumn>
          <IgrGridLiteColumn field="lastName" header="Last name" filterable={true}></IgrGridLiteColumn>
          <IgrGridLiteColumn field="age" header="Age" filterable={true} dataType="number"></IgrGridLiteColumn>
          <IgrGridLiteColumn field="email" header="Email" filterable={true}></IgrGridLiteColumn>
        </IgrGridLite>
        <div ref={logRef} className="log" id="log">
          {log.map((entry, index) => (
            <p key={index}><code>{entry}</code></p>
          ))}
        </div>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GridLiteFilteringConfigEvents/>);
```


<!-- React, WebComponents -->

## Remote filter operations

In cases where filtering must be done remotely or you want to save the current state/data to a server somewhere,
the Grid Lite exposes a hook where you can implement and customize this behavior.

<!-- React, WebComponents -->

Using the `dataPipelineConfiguration` property, you can provide a custom hook which will be called each time a filter operation is about to run. The callback is passed a `DataPipelineParams` object.

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

<!-- React -->

```typescript
gridRef.current.dataPipelineConfiguration = { filter: (params: DataPipelineParams<T>) => T[] | Promise<T[]> };
```

<!-- end: React -->

<!-- End: React, WebComponents -->

The custom callback can be async as the grid will wait for it until it resolves.

The following example mocks remote filter operation, reflecting the REST endpoint generated based on the filter state of the component.

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
  font-family: "Courier New", Courier, monospace;
  font-size: 0.875em;
  color: #222222;
  display: inline-block;
  width: 100%;
  min-height: 2em;
  box-sizing: border-box;
}

.grid-lite-wrapper {
  width: 100%;
  height: calc(100% - 1rem);
}

.grid-section {
  position: relative;
}

igc-grid-lite {
  min-height: 65vh;
  --ig-size: 2;
}
```
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { GridLiteDataService, User } from "./GridLiteDataService";
import { IgrCheckbox, IgrCircularProgress } from "igniteui-react";
import {
  IgrGridLite,
  IgrGridLiteColumn,
  type IgrCellContext,
} from "igniteui-react/grid-lite";

import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

function groupBy<T extends object>(arr: T[], key: keyof T) {
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

const mapExpressions = (arr: any[]) => {
  return arr
    .map(({ searchTerm, criteria, condition }: any, idx: number) => {
      const normalizedSearchTerm = !searchTerm ? condition.name : searchTerm;
      return idx < 1
        ? `${condition.name}("${normalizedSearchTerm}")`
        : `${criteria?.toUpperCase()} ${condition.name}("${normalizedSearchTerm}")`;
    })
    .join(' ');
};

const buildUri = (state: any[], setQueryString: (qs: string) => void) => {
  const out: string[] = [];
  const qs = groupBy(state, 'key');
  for (const [key, exprs] of Object.entries(qs)) {
    out.push(`${key}(${mapExpressions(exprs)})`);
  }
  setQueryString(`GET: /data?filter=${out.join('&')}`);
};

const activeCellTemplate = (ctx: IgrCellContext) => (
  <IgrCheckbox checked={ctx.value}></IgrCheckbox>
);

export default function Sample() {
  const [data, setData] = React.useState<User[]>([]);
  const [queryString, setQueryString] = React.useState("");
  const [inOperation, setInOperation] = React.useState(false);

  const dataPipelineConfiguration = React.useMemo(
    () => ({
      filter: async ({ data, grid }: any) => {
        setInOperation(true);
        buildUri(grid.filterExpressions, setQueryString);
        await new Promise((resolve) => setTimeout(resolve, 250));
        setInOperation(false);
        return data;
      },
    }),
    [],
  );

  React.useEffect(() => {
    const dataService = new GridLiteDataService();
    const allData: User[] = dataService.generateUsers(500);
    setData(allData);
  }, []);

  return (
    <div className="container sample ig-typography">
      <div className="grid-lite-wrapper">
        <div>
          <h5>Generated request</h5>
          <p>
            <code>{queryString}</code>
          </p>
        </div>
        <section className="grid-section">
          <IgrGridLite
            id="grid-lite"
            data={data}
            dataPipelineConfiguration={dataPipelineConfiguration}
          >
            <IgrGridLiteColumn
              field="firstName"
              header="First Name"
              filterable
            ></IgrGridLiteColumn>
            <IgrGridLiteColumn
              field="lastName"
              header="Last Name"
              filterable
            ></IgrGridLiteColumn>
            <IgrGridLiteColumn
              field="age"
              header="Age"
              filterable
              dataType="number"
            ></IgrGridLiteColumn>
            <IgrGridLiteColumn
              field="active"
              header="Active"
              dataType="boolean"
              filterable
              cellTemplate={activeCellTemplate}
            ></IgrGridLiteColumn>
          </IgrGridLite>
        </section>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Sample />);
```


<!-- end: React, WebComponents -->

<!-- TODO ## API References
## API References

- `{ComponentName}`
- `Column`
-->

## Additional Resources

- [Column Configuration](column-configuration.md)
- [Sorting](sorting.md)

Our community is active and always welcoming to new ideas.

- [Grid Lite **GitHub**](https://github.com/IgniteUI/igniteui-grid-lite)
