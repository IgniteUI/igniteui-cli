---
title: React Grid Lite Data Binding - Ignite UI for React | MIT license
_description: Data binding for Grid Lite. Create apps with our open-source React Grid Lite. It’s lightweight and packed with essential features. Try now.
_keywords: data binding, React, {ComponentKeywords}, Ignite UI for React, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
_tocName: Data Binding
---

# React Grid Lite Data Binding

<!-- React, WebComponents -->

The Grid Lite accepts an array of plain objects as a data source. Each grid row is the rendered representation of a data record in the array with row cells being controlled by the column configuration.

<!-- end: React, WebComponents -->

When applying data transformations, such as sorting and filtering, the grid does not modify the original data reference. That is to say, data transformations will not be reflected in the original source. The grid does not track changes to the objects inside the data array, so direct modification of the data objects will not be reflected.

## Change the Data Source at Runtime

The component supports changing its data source at runtime. If the new source has a different "shape" than the previous one make sure to update your column configuration as well.

```tsx
/* First we set the initial data */
const [data, setData] = React.useState([/* initial data */]);

/* Then inside an event handler or a useEffect we update the data via setData */
const updateData = () => {
  setData([]);
};

return (
    <>
        <IgrButton onClick={updateData}>Update Data</IgrButton>
        <IgrGridLite data={data}>
            {/* Update column configuration, add or remove columns as needed to represent the new data. */}
            <IgrGridLiteColumn field="id"></IgrGridLiteColumn>
        </IgrGridLite>
    </>
);
```

<!-- React, WebComponents -->

If the grid has `autoGenerate` enabled, it will "*infer*" the new column configuration automatically when the data changes.

<!-- end: React, WebComponents -->

<!-- React -->

```tsx
const [data, setData] = React.useState([/* initial data */]);


/** After the new binding the grid will infer the column collection from the bound data. */
const updateData = () => {
  setData([/* new data */]);
};

return (
    <>
        <IgrButton onClick={updateData}>Update Data</IgrButton>
        <IgrGridLite id="grid-lite" data={data} autoGenerate={true} />
    </>
);
```

<!-- end: React -->

<!-- React, WebComponents -->

> \[!NOTE]
> The sort/filter states of the Grid Lite are kept when changing the data source in this manner.
> Usually you will want to reset them by calling either `clearSort()` and/or `clearFilter()`.

<!-- end: React, WebComponents -->

In the sample below, the grid has column auto-generation enabled. When you click on the switch data button,
the column collection is reset, and a new data source is bound to the grid.

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
.controls-wrapper {
    margin-bottom: 1rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

igc-grid-lite {
    min-height: 65vh;
    --ig-size: 2;
}
```
```tsx
import { useCallback, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { GridLiteDataService } from "./GridLiteDataService";

import { IgrGridLite } from 'igniteui-react/grid-lite';
import { IgrButton } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";


export default function GridLiteDataBinding() {
  const [showingProducts, setShowingProducts] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataService = new GridLiteDataService();
    setData(dataService.generateProducts(50));

    window.addEventListener("error", (e) => {
      if (
        e.message ===
        "ResizeObserver loop completed with undelivered notifications."
      ) {
        e.stopImmediatePropagation();
      }
    });
  }, []);

  const switchData = useCallback(() => {
    const dataService = new GridLiteDataService();

    if (showingProducts) {
      const data = dataService.generateUsers(50);
      setData(data);
      setShowingProducts(false);
    } else {
      const data = dataService.generateProducts(50);
      setData(data);
      setShowingProducts(true);
    }
  }, [showingProducts]);

  return (
    <div className="container sample ig-typography">
      <div className="controls-wrapper">
        <IgrButton className="sample-button" onClick={switchData}>
          Switch Data
        </IgrButton>
      </div>
      <IgrGridLite
        autoGenerate={true}
        id="grid-lite"
        data={data}
      ></IgrGridLite>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GridLiteDataBinding />);
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
