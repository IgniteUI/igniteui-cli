---
title: React Grid Lite Cell Template | Ignite UI for React | MIT license
_description: Grid Lite column configuration and column properties. Try our open-source React Grid Lite - lightweight and packed with essential features.
_keywords: column configuration, React, {ComponentKeywords}, Ignite UI for React, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
_tocName: Column Configuration
---

# Column Configuration

Columns are defined declaratively using column child components within the grid. The `field` property is the only required for a column, as it serves as the column identifier. It is also the property that is used to map and render the relevant data in the grid rows.

```tsx
return (
  <IgrGridLite data={data}>
    <IgrGridLiteColumn
      field="account"
      header="Account Number"
      ...
    ></IgrGridLiteColumn>
    {/* Additional columns follow */}
  </IgrGridLite>
);
```

## Configuration Based on the Data Source

The grid supports inferring the column configuration based on the provided data source when `autoGenerate` is set to true. It tries to infer the appropriate `field` and `dataType` based on records in the data.

```typescript
const data: Record[] = [
  { entryId: "1234", source: "https://example.com", ts: 1373521917579 },
  ...
];
```

```tsx
return (
  <IgrGridLite data={data} autoGenerate={true}></IgrGridLite>
);
```

The previous snippet will result in the grid automatically creating columns equivalent to:

```tsx
return (
  <IgrGridLite data={data}>
    <IgrGridLiteColumn field="entryId" dataType="string"></IgrGridLiteColumn>
    <IgrGridLiteColumn field="source" dataType="string"></IgrGridLiteColumn>
    <IgrGridLiteColumn field="ts" dataType="number"></IgrGridLiteColumn>
  </IgrGridLite>
);
```

Useful for a quick render of some data without any additional customizations.

## Additional Column Configuration

The column exposes several more properties for customization:

### Column Width

By default, the columns have a width of **minmax(136px, 1fr)** which translates to a minimum width of 136px and maximum of
1 part of the available space in the Grid Lite. This way the columns are fluid and responsive accommodating for changes
in the grid width.

To change the width of column, use the `width` property of the column.

```tsx
return (
  <IgrGridLite>
    <IgrGridLiteColumn field="price" width="250px"></IgrGridLiteColumn>
  </IgrGridLite>
);
```

The property accepts <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#numbers_lengths_and_percentages" target="_blank">valid CSS length units</a>.

### Hiding columns

Columns can be hidden/shown by setting the `hidden` property of the column.

```tsx
return (
  <IgrGridLite>
    <IgrGridLiteColumn field="price" hidden></IgrGridLiteColumn>
  </IgrGridLite>
);
```

### Column resize

Each column of the Grid Lite can be configured to be resizable by setting the `resizable` property of the column element.

```tsx
return (
  <IgrGridLite>
    <IgrGridLiteColumn field="price" resizable></IgrGridLiteColumn>
  </IgrGridLite>
);
```

If a column is set to be resizable, you can drag the right size of the column header to either increase/decrease  the column width. Double-clicking on the resize area will trigger auto-sizing of the column where it will try set its width according to the largest content of its cells/header.

> [!NOTE]
> Columns with "fluid" widths (fr, %, etc.) can behave erratically when resizing in the grid is performed as they try to accommodate for the new dimensions. Depending on the application scenario, it may be better to use "hard" units so users don't experience layout shifts.

In the sample below you can try out the different column properties and how they reflect in the rendered grid.

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
.panel {
    margin: 1rem 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
}

.config-key {
    flex: 2 1 25% !important;
    font-weight: bold;
}

.config {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 0.75rem;
}

.config * {
    flex: 1;
}

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
import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { GridLiteDataService, ProductInfo } from "./GridLiteDataService";

import {
  IgrButton,
  IgrCheckbox,
  IgrDropdown,
  IgrDropdownItem,
  IgrDropdownItemComponentEventArgs,
  IgrRating,
  IgrSwitch,
} from "igniteui-react";
import {
  IgrGridLite,
  IgrGridLiteColumn,
  type IgrCellContext,
} from "igniteui-react/grid-lite";

import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

const formatter = new Intl.NumberFormat("en-150", {
  style: "currency",
  currency: "EUR",
});

// Define cellTemplate functions outside component
const currencyCellTemplate = (ctx: IgrCellContext) => (
  <span>{formatter.format(ctx.value)}</span>
);

const ratingCellTemplate = (ctx: IgrCellContext) => (
  <IgrRating readOnly step={0.01} max={5} value={ctx.value}></IgrRating>
);

type GridColumnConfig = {
  field: string;
  header: string;
  dataType?: "number" | "string" | "boolean";
  hidden?: boolean;
  resizable: boolean;
  sortable: boolean;
  filterable: boolean;
  cellTemplate?: (ctx: IgrCellContext<ProductInfo>) => React.ReactNode;
};

const initialColumns: GridColumnConfig[] = [
  {
    field: "id",
    hidden: true,
    header: "ID",
    dataType: "string",
    resizable: true,
    sortable: false,
    filterable: false,
  },
  {
    field: "name",
    header: "Product Name",
    dataType: "string",
    resizable: true,
    sortable: false,
    filterable: false,
  },
  {
    field: "price",
    header: "Price",
    dataType: "number",
    cellTemplate: currencyCellTemplate,
    resizable: true,
    sortable: false,
    filterable: false,
  },
  {
    field: "sold",
    dataType: "number",
    header: "Units Sold",
    resizable: true,
    sortable: false,
    filterable: false,
  },
  {
    field: "total",
    header: "Total Sold",
    dataType: "number",
    cellTemplate: currencyCellTemplate,
    resizable: true,
    sortable: false,
    filterable: false,
  },
  {
    field: "rating",
    dataType: "number",
    header: "Customer Rating",
    cellTemplate: ratingCellTemplate,
    resizable: true,
    sortable: false,
    filterable: false,
  },
];

export default function Sample() {
  const dropdownRef = React.useRef<any>(null);
  const [columns, setColumns] = useState<GridColumnConfig[]>(initialColumns);
  const [data, setData] = useState<ProductInfo[]>([]);
  const [hasFormatters, setHasFormatters] = useState(true);

  useEffect(() => {
    const dataService = new GridLiteDataService();
    const data: ProductInfo[] = dataService.generateProducts(50);
    setData(data);
  }, []);

  const toggleFormatters = useCallback((checked: boolean) => {
    setColumns((prevColumns) =>
      prevColumns.map((col) =>
        col.field === "price" || col.field === "total"
          ? { ...col, cellTemplate: checked ? currencyCellTemplate : undefined }
          : col,
      ),
    );
  }, []);

  const toggleColumnProperty = React.useCallback(
    (columnField: string, property: string, value: boolean) => {
      setColumns((prevColumns) =>
        prevColumns.map((col) =>
          col.field === columnField ? { ...col, [property]: value } : col,
        ),
      );
    },
    [],
  );

  return (
    <div className="container sample ig-typography">
      <section className="panel">
        <IgrDropdown
          ref={dropdownRef}
          keepOpenOnSelect={true}
          flip={true}
          onChange={(e: IgrDropdownItemComponentEventArgs) => {
            dropdownRef.current?.clearSelection();
          }}
          id="column-select"
        >
          <div slot="target">
            <IgrButton variant="outlined">
              <span>Column Properties</span>
            </IgrButton>
          </div>
          {columns.map((column) => (
            <IgrDropdownItem key={column.field}>
              <div className="config">
                <span className="config-key">{column.header}</span>
                <IgrCheckbox
                  labelPosition="before"
                  checked={column.hidden}
                  onChange={(e: any) =>
                    toggleColumnProperty(
                      column.field,
                      "hidden",
                      e.target.checked,
                    )
                  }
                >
                  Hidden
                </IgrCheckbox>
                <IgrCheckbox
                  labelPosition="before"
                  checked={column.resizable}
                  onChange={(e: any) =>
                    toggleColumnProperty(
                      column.field,
                      "resizable",
                      e.target.checked,
                    )
                  }
                >
                  Resizable
                </IgrCheckbox>
                <IgrCheckbox
                  labelPosition="before"
                  checked={column.filterable}
                  onChange={(e: any) =>
                    toggleColumnProperty(
                      column.field,
                      "filterable",
                      e.target.checked,
                    )
                  }
                >
                  Filter
                </IgrCheckbox>
                <IgrCheckbox
                  labelPosition="before"
                  checked={column.sortable}
                  onChange={(e: any) =>
                    toggleColumnProperty(
                      column.field,
                      "sortable",
                      e.target.checked,
                    )
                  }
                >
                  Sort
                </IgrCheckbox>
              </div>
            </IgrDropdownItem>
          ))}
        </IgrDropdown>
        <IgrSwitch
          id="formatters"
          labelPosition="before"
          checked={hasFormatters}
          onChange={(e: any) => {
            setHasFormatters(e.target.checked);
            toggleFormatters(e.target.checked);
          }}
        >
          Value formatters:
        </IgrSwitch>
      </section>
      <div className="grid-lite-wrapper">
        <IgrGridLite id="grid-lite" data={data}>
          {columns.map((column) => (
            <IgrGridLiteColumn
              key={column.field}
              field={column.field}
              header={column.header}
              dataType={column.dataType}
              hidden={column.hidden}
              filterable={column.filterable}
              sortable={column.sortable}
              resizable={column.resizable}
              {...(column.cellTemplate
                ? { cellTemplate: column.cellTemplate }
                : {})}
            ></IgrGridLiteColumn>
          ))}
        </IgrGridLite>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Sample />);
```

<!-- TODO ## API References

- `{ComponentName}`
- `Column`

-->

## Additional Resources

- [Data Binding](binding.md)
- [Sorting](sorting.md)
- [Filtering](filtering.md)
- [Theming & Styling](theming.md)

Our community is active and always welcoming to new ideas.

- [Grid Lite **GitHub**](https://github.com/IgniteUI/igniteui-grid-lite)
