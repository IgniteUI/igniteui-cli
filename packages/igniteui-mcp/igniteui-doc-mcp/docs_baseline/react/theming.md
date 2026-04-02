---
title: React Grid Lite Theming | Ignite UI for React | MIT license
_description: Styling the Grid Lite in Ignite UI for React happens easily and quickly. See demos and examples! Try our open-source components and build your next app.
_keywords: styling, theming, React, {ComponentKeywords}, Ignite UI for React, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
_tocName: Theming
---

# Styles and Themes

The Grid Lite comes with four distinct themes - Bootstrap, Material, Fluent and Indigo. The grid and its UI components have the themes baked in, but the component requires a global stylesheet for palettes, typography and other global configurations to work.

## Loading a Base Themes

Depending on your project type, setup and build configuration the method of how to include one of the files below will vary. If you are using a framework/build tool refer to its documentation on how to add external styles to your output bundle.

As a rule of thumb, you can always copy the `themes` folder to your assets directory and link the theme from there in your index.html.

| Theme     | Variant | Path                                                           |
| --------- | ------- | -------------------------------------------------------------- |
| Bootstrap | Light   | node_modules/igniteui-webcomponents/themes/light/bootstrap.css |
| Bootstrap | Dark    | node_modules/igniteui-webcomponents/themes/dark/bootstrap.css  |
| Material  | Light   | node_modules/igniteui-webcomponents/themes/light/material.css  |
| Material  | Dark    | node_modules/igniteui-webcomponents/themes/dark/material.css   |
| Fluent    | Light   | node_modules/igniteui-webcomponents/themes/light/fluent.css    |
| Fluent    | Dark    | node_modules/igniteui-webcomponents/themes/dark/fluent.css     |
| Indigo    | Light   | node_modules/igniteui-webcomponents/themes/light/indigo.css    |
| Indigo    | Dark    | node_modules/igniteui-webcomponents/themes/dark/indigo.css     |

In the sample below, you can preview all the default base themes.

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
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    const random01 = array[0] / 2 ** 32;
    return Math.floor(random01 * (max - min + 1)) + min;
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
```scss
@use 'sass:list';
@use 'igniteui-theming' as *;
@use 'igniteui-theming/sass/color/presets' as *;
@use 'igniteui-theming/sass/typography/presets' as *;

.container {
    padding: rem(20px);
}

.options {
    background: var(--ig-gray-100);
    gap: rem(10px);
    padding: rem(20px);
    margin-bottom: rem(20px);
    border-radius: rem(6px);
}

.grid-lite-wrapper {
    height: 100vh;
}

// Theme configurations
$themes: (
    'bootstrap-light': ($light-bootstrap-palette, $bootstrap-typeface, $bootstrap-type-scale),
    'material-light': ($light-material-palette, $material-typeface, $material-type-scale),
    'fluent-light': ($light-fluent-palette, $fluent-typeface, $fluent-type-scale),
    'indigo-light': ($light-indigo-palette, $indigo-typeface, $indigo-type-scale),
    'bootstrap-dark': ($dark-bootstrap-palette, $bootstrap-typeface, $bootstrap-type-scale),
    'material-dark': ($dark-material-palette, $material-typeface, $material-type-scale),
    'fluent-dark': ($dark-fluent-palette, $fluent-typeface, $fluent-type-scale),
    'indigo-dark': ($dark-indigo-palette, $indigo-typeface, $indigo-type-scale)
);

// Generate theme classes
@each $name, $config in $themes {
    body[data-theme="#{$name}"] .grid-lite-wrapper {
        @include palette(list.nth($config, 1));
        @include typography(list.nth($config, 2), list.nth($config, 3));
    }
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { GridLiteDataService, ProductInfo } from './GridLiteDataService';
import { IgcGridLite } from 'igniteui-grid-lite';
import {
  defineComponents,
  IgcRatingComponent,
  IgcSelectComponent
} from 'igniteui-webcomponents';
import { html } from 'lit-html';

import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.scss";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'igc-select': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'igc-select-item': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { value?: string; selected?: boolean }, HTMLElement>;
      'igc-grid-lite': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'igc-grid-lite-column': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { field?: string; header?: string; sortable?: boolean; filterable?: boolean; 'data-type'?: string; cellTemplate?: any }, HTMLElement>;
      'igc-rating': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

IgcGridLite.register();
defineComponents(IgcRatingComponent, IgcSelectComponent);

export default class Sample extends React.Component<any, any> {
  private dataService: GridLiteDataService;
  private gridRef: React.RefObject<any>;
  private selectRef: React.RefObject<any>;

  constructor(props: any) {
    super(props);
    this.dataService = new GridLiteDataService();
    this.gridRef = React.createRef();
    this.selectRef = React.createRef();
    this.state = {
      currentTheme: 'bootstrap-light'
    };
  }

  componentDidMount() {
    if (this.gridRef.current) {
      const data: ProductInfo[] = this.dataService.generateProducts(50);
      this.gridRef.current.data = data;
    }

    if (this.selectRef.current) {
      this.selectRef.current.addEventListener('igcChange', (event: any) => {
        this.changeTheme(event.detail.value);
      });
    }

    this.changeTheme(this.state.currentTheme);
  }

  private changeTheme = (theme: string) => {
    this.setState({ currentTheme: theme });
    document.body.setAttribute('data-theme', theme);
  }

  public render(): JSX.Element {
    return (
      <div className="container sample ig-typography">
        <div className="options">
          <label className="options-label">Theme:</label>
          <igc-select ref={this.selectRef} id="theme-select">
            <igc-select-item value="bootstrap-light" selected>Light Bootstrap</igc-select-item>
            <igc-select-item value="material-light">Light Material</igc-select-item>
            <igc-select-item value="fluent-light">Light Fluent</igc-select-item>
            <igc-select-item value="indigo-light">Light Indigo</igc-select-item>
            <igc-select-item value="bootstrap-dark">Dark Bootstrap</igc-select-item>
            <igc-select-item value="material-dark">Dark Material</igc-select-item>
            <igc-select-item value="fluent-dark">Dark Fluent</igc-select-item>
            <igc-select-item value="indigo-dark">Dark Indigo</igc-select-item>
          </igc-select>
        </div>

        <div className="grid-lite-wrapper">
          <igc-grid-lite ref={this.gridRef} id="grid-lite">
            <igc-grid-lite-column field="name" header="Product" sortable filterable></igc-grid-lite-column>
            <igc-grid-lite-column field="price" header="Price" sortable filterable data-type="number"></igc-grid-lite-column>
            <igc-grid-lite-column field="sold" header="Sold" sortable filterable data-type="number"></igc-grid-lite-column>
            <igc-grid-lite-column field="total" header="Total" sortable filterable data-type="number"></igc-grid-lite-column>
            <igc-grid-lite-column
              field="rating"
              header="Rating"
              data-type="number"
              sortable
              filterable
              cellTemplate={(params: any) => html`<igc-rating readonly value=${params.value}></igc-rating>`}
            ></igc-grid-lite-column>
          </igc-grid-lite>
        </div>
      </div>
    );
  }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## Creating Custom Themes

Aside from the default themes shipped with the Grid Lite package, you can further customize the look and feel of your data grid by using an alternate set of CSS custom properties.

Refer to the [theming topic](../grids/theming-grid.md) for more details.

```css
.grid-sample {
  --header-background: #494949;
  --header-text-color: #f2c43c;
  --cell-active-border-color: #f2c43c;
  --row-hover-background: #707070;
  --row-hover-text-color: #f2c43c;
}
```

Here is an example showcasing the custom theming from above.

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
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    const random01 = array[0] / 2 ** 32;
    return Math.floor(random01 * (max - min + 1)) + min;
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
```scss
@use 'igniteui-theming' as *;
@use 'igniteui-theming/sass/typography/presets' as *;

$custom-light-palette: palette(
    $primary: #ddd020,
    $secondary: #d5896f,
    $surface: #f8f7ff,
    $gray: #04395e,
);

$custom-dark-palette: palette(
    $primary: #ddd020,
    $secondary: #d5896f,
    $surface: #031d44,
    $gray: #04395e,
);

.grid-lite-wrapper {
    width: 100%;
    height: 100%;
}

.theme-switcher {
    margin-bottom: 1rem;
}

.custom-light {
    @include palette($custom-light-palette);
    @include typography('"Merriweather Sans", sans-serif', $bootstrap-type-scale);
}

.custom-dark {
    @include palette($custom-dark-palette);
    @include typography('"Merriweather Sans", sans-serif', $bootstrap-type-scale);
}
```
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { GridLiteDataService, ProductInfo } from "./GridLiteDataService";
import { IgrSwitch, IgrRating } from "igniteui-react";
import {
  IgrGridLite,
  IgrGridLiteColumn,
  type IgrCellContext,
} from "igniteui-react/grid-lite";

import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.scss";

const satisfactionCellTemplate = (ctx: IgrCellContext) => (
  <IgrRating readOnly max={5} step={0.01} value={ctx.value}></IgrRating>
);

export default function Sample() {
  const [data, setData] = React.useState<ProductInfo[]>([]);
  const [theme, setTheme] = React.useState<"dark" | "light">("dark");

  React.useEffect(() => {
    const dataService = new GridLiteDataService();
    const items: ProductInfo[] = dataService.generateProducts(50);
    setData(items);
  }, []);

  const switchTheme = React.useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return (
    <div className="container sample ig-typography">
      <div className="grid-lite-wrapper">
        <section className="theme-switcher">
          <IgrSwitch
            labelPosition="before"
            checked={theme === "light"}
            onChange={switchTheme}
          >
            {`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          </IgrSwitch>
        </section>
        <IgrGridLite
          id="grid-lite"
          data={data}
          className={theme === "light" ? "custom-light" : "custom-dark"}
        >
          <IgrGridLiteColumn
            field="name"
            header="Product"
            sortable
            filterable
          ></IgrGridLiteColumn>
          <IgrGridLiteColumn
            field="price"
            header="Price"
            sortable
            filterable
            dataType="number"
          ></IgrGridLiteColumn>
          <IgrGridLiteColumn
            field="sold"
            header="Sold"
            sortable
            filterable
            dataType="number"
          ></IgrGridLiteColumn>
          <IgrGridLiteColumn
            field="total"
            header="Total"
            sortable
            filterable
            dataType="number"
          ></IgrGridLiteColumn>
          <IgrGridLiteColumn
            field="rating"
            header="Rating"
            dataType="number"
            cellTemplate={satisfactionCellTemplate}
            sortable
            filterable
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


<!-- TODO ## API References

- `{ComponentName}`
- `Column`
-->

## Additional Resources

- [Column Configuration](column-configuration.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)

Our community is active and always welcoming to new ideas.

- [Grid Lite **GitHub**](https://github.com/IgniteUI/igniteui-grid-lite)
