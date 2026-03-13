---
title: React Select Component – Ignite UI for React
_description: Ignite UI for React Select component
_keywords: Ignite UI for React, UI controls, React widgets, web widgets, UI widgets, React, Native React Components Suite, Native React Controls, Native React Components Library, React Select components, React Select controls
_license: MIT
mentionedTypes: ["Select"]
_tocName: Select
---

# React Select

The Ignite UI for React Select component allows a single selection from a list of items, placed in a dropdown. This form control offers a quick items list navigation, including selection, based on a single or multiple characters match.

## React Select Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { IgrSelect, IgrSelectItem } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";


export default function SelectOverview() {
  return (
    <div className="sample">
      <IgrSelect>
        <IgrSelectItem value="Orange"><span>Orange</span></IgrSelectItem>
        <IgrSelectItem value="Apple"><span>Apple</span></IgrSelectItem>
        <IgrSelectItem value="Banana"><span>Banana</span></IgrSelectItem>
        <IgrSelectItem value="Mango"><span>Mango</span></IgrSelectItem>
      </IgrSelect>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SelectOverview />);
```


<div class="divider--half"></div>

## Usage

<!-- React -->

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrSelect`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselect.html) and the [`IgrSelectItem`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselectitem.html) and its necessary CSS, like so:

```tsx
import { IgrSelect, IgrSelectItem } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

<!-- end: React -->

> \[!Note]
> Please note that the select header and group components are not mandatory unless you want to use them.

To start using the component add the [`IgrSelect`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselect.html) along with a list of [`IgrSelectItem`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselectitem.html)'s to choose from:

<!-- React -->

```tsx
<IgrSelect>
  <IgrSelectItem value="Orange"><span>Orange</span></IgrSelectItem>
  <IgrSelectItem value="Apple"><span>Apple</span></IgrSelectItem>
  <IgrSelectItem value="Banana"><span>Banana</span></IgrSelectItem>
  <IgrSelectItem value="Mango"><span>Mango</span></IgrSelectItem>
</IgrSelect>
```

<!-- end: React -->

### Select

The [`IgrSelect`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselect.html) component can be used inside a `Form` component, thus it exposes a [`name`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselect.html#name) property to be registered with. It also has a [`label`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselect.html#label), and [`placeholder`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselect.html#placeholder) properties. The [`outlined`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselect.html#outlined) property is used for styling purposes only when it comes to the Material theme. Except for the default slot, the component provides a few other slots including `header`, `footer`, `helper-text`, `prefix`, `suffix`, and `toggle-icon`. The component size can be changed using the `--ig-size` CSS variable.

### Item

The [`IgrSelectItem`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselectitem.html) component allows the users to declaratively specify a list of options to be used by the [`IgrSelect`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselect.html) control. Each item provides a [`value`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselect.html#value) property that represents the data it carries upon selection. The [`IgrSelectItem`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselectitem.html) has a default slot which allows you to specify the text content of the item. This text content will be used as value in case the [`value`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselect.html#value) property is not present on the [`IgrSelectItem`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselectitem.html). You could also provide custom content to be rendered before or after the [`IgrSelectItem`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselectitem.html) content using the `prefix` and `suffix` slots. You could predefine a selected item by setting the `Selected` property. You could also disable some or all items via the [`disabled`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselect.html#disabled) property.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

span[slot="prefix"] {
    height: 20px;
}
```
```tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  IgrSelect,
  IgrSelectItem,
  IgrIcon,
  registerIconFromText,
} from "igniteui-react";
import "./index.css";
import "igniteui-webcomponents/themes/light/bootstrap.css";


const hotelSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4zm2 8h-8V9h6c1.1 0 2 .9 2 2v4z"/></svg>';
const grocerySvg =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-1.45-5c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6z"/></svg>';
const restaurantSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 6v8h3v8h2V2c-2.76 0-5 2.24-5 4zm-5 3H9V2H7v7H5V2H3v7c0 2.21 1.79 4 4 4v9h2v-9c2.21 0 4-1.79 4-4V2h-2v7z"/></svg>';

export default function SelectItem() {

  useEffect(() => {
    registerIconFromText("hotel", hotelSvg, "material");
    registerIconFromText("grocery", grocerySvg, "material");
    registerIconFromText("restaurant", restaurantSvg, "material");
  }, []);

  return (
    <div className="sample">
      <IgrSelect>
        <IgrSelectItem>
          <span slot="prefix">
            <IgrIcon name="hotel" collection="material"></IgrIcon>
          </span>
          <span>Hotel</span>
        </IgrSelectItem>
        <IgrSelectItem disabled>
          <span slot="prefix">
            <IgrIcon name="grocery" collection="material"></IgrIcon>
          </span>
          <span>Grocery</span>
        </IgrSelectItem>
        <IgrSelectItem selected>
          <span slot="prefix">
            <IgrIcon name="restaurant" collection="material"></IgrIcon>
          </span>
          <span>Restaurant</span>
        </IgrSelectItem>
      </IgrSelect>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SelectItem />);
```


### Header

You can use the [`IgrSelectHeader`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselectheader.html) to provide a header for a group of items.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import {
  IgrSelect,
  IgrSelectItem,
  IgrSelectHeader
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function SelectHeader() {
  return (
    <div className="sample">
      <IgrSelect>
        <IgrSelectHeader><span>Tasks</span></IgrSelectHeader>
        <IgrSelectItem value="spec" selected><span>Specification</span></IgrSelectItem>
        <IgrSelectItem value="implement"><span>Implementation</span></IgrSelectItem>
        <IgrSelectItem value="test" disabled><span>Testing</span></IgrSelectItem>
        <IgrSelectItem value="docs"><span>Documentation</span></IgrSelectItem>
      </IgrSelect>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SelectHeader />);
```


<!-- React -->

```tsx
<IgrSelect>
  <IgrSelectHeader>
    <span>Tasks</span>
  </IgrSelectHeader>
</IgrSelect>
```

<!-- end: React -->

### Group

Multiple [`IgrSelectItem`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselectitem.html)s can be placed between the opening and closing brackets of an [`IgrSelectGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselectgroup.html) component so that users can visually group them together. The [`IgrSelectGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselectgroup.html) can be labelled via its `label` slot and disabled via its [`disabled`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselectgroup.html#disabled) property.

> \[!Note]
> Keep in mind that if a select group is disabled, you cannot enable separate items of it.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

span[slot="prefix"] {
    height: 20px;
}
```
```tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  IgrSelect,
  IgrSelectItem,
  IgrIcon,
  IgrSelectGroup,
  registerIconFromText,
} from "igniteui-react";
import "./index.css";
import "igniteui-webcomponents/themes/light/bootstrap.css";


const placeSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"/></svg>';

export default function SelectGroup() {

  useEffect(() => {
    registerIconFromText("place", placeSvg, "material");
  }, []);

  return (
    <div className="sample">
      <IgrSelect>
        <IgrSelectGroup>
          <span slot="label">Europe</span>
          <IgrSelectItem>
            <span slot="prefix">
              <IgrIcon name="place" collection="material"></IgrIcon>
            </span>
            <span> Germany </span>
            <span slot="suffix">DE</span>
          </IgrSelectItem>
          <IgrSelectItem>
            <span slot="prefix">
              <IgrIcon name="place" collection="material"></IgrIcon>
            </span>
            <span> France </span>
            <span slot="suffix">FR</span>
          </IgrSelectItem>
          <IgrSelectItem>
            <span slot="prefix">
              <IgrIcon name="place" collection="material"></IgrIcon>
            </span>
            <span> Spain </span>
            <span slot="suffix">ES</span>
          </IgrSelectItem>
        </IgrSelectGroup>

        <IgrSelectGroup disabled>
          <span slot="label">Asia</span>
          <IgrSelectItem>
            <span slot="prefix">
              <IgrIcon name="place" collection="material"></IgrIcon>
            </span>
            <span> China </span>
            <span slot="suffix">CN</span>
          </IgrSelectItem>
          <IgrSelectItem>
            <span slot="prefix">
              <IgrIcon name="place" collection="material"></IgrIcon>
            </span>
            <span> Japan </span>
            <span slot="suffix">JP</span>
          </IgrSelectItem>
          <IgrSelectItem>
            <span slot="prefix">
              <IgrIcon name="place" collection="material"></IgrIcon>
            </span>
            <span> India </span>
            <span slot="suffix">IN</span>
          </IgrSelectItem>
          <IgrSelectItem>
            <span slot="prefix">
              <IgrIcon name="place" collection="material"></IgrIcon>
            </span>
            <span> Thailand </span>
            <span slot="suffix">TH</span>
          </IgrSelectItem>
        </IgrSelectGroup>

        <IgrSelectGroup>
          <span slot="label">North America</span>
          <IgrSelectItem>
            <span slot="prefix">
              <IgrIcon name="place" collection="material"></IgrIcon>
            </span>
            <span> USA </span>
            <span slot="suffix">US</span>
          </IgrSelectItem>
          <IgrSelectItem>
            <span slot="prefix">
              <IgrIcon name="place" collection="material"></IgrIcon>
            </span>
            <span> Canada </span>
            <span slot="suffix">CA</span>
          </IgrSelectItem>
          <IgrSelectItem>
            <span slot="prefix">
              <IgrIcon name="place" collection="material"></IgrIcon>
            </span>
            <span> Mexico </span>
            <span slot="suffix">MX</span>
          </IgrSelectItem>
        </IgrSelectGroup>
      </IgrSelect>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SelectGroup />);
```


<!-- React -->

```tsx
<IgrSelect>
  <IgrSelectGroup>
    <span slot="label">Europe</span>
    <IgrSelectItem>
      <span slot="prefix">
        <IgrIcon name="place" collection="material"></IgrIcon>
      </span>
      <span> Germany </span>
      <span slot="suffix">DE</span>
    </IgrSelectItem>
    <IgrSelectItem>
      <span slot="prefix">
        <IgrIcon name="place" collection="material"></IgrIcon>
      </span>
      <span> France </span>
      <span slot="suffix">FR</span>
    </IgrSelectItem>
    <IgrSelectItem>
      <span slot="prefix">
        <IgrIcon name="place" collection="material"></IgrIcon>
      </span>
      <span> Spain </span>
      <span slot="suffix">ES</span>
    </IgrSelectItem>
  </IgrSelectGroup>
</IgrSelect>
```

<!-- end: React -->

## Validation

In addition, the [`IgrSelect`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselect.html) supports most of the [`IgrInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html) properties, such as [`required`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselect.html#required), [`disabled`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselect.html#disabled), [`autofocus`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html#autofocus), etc. The component also exposes a method bound to its validation:

- `reportValidity` - checks for validity and focuses the component if invalid.

## Keyboard Navigation

When the select is focused and the list of options is **not visible**:

- Open the [`select`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html#select) using the <kbd>ALT</kbd> + <kbd>↑</kbd> <kbd>↓</kbd> combination or by clicking on the <kbd>SPACE</kbd> or the <kbd>ENTER</kbd> key.
- Close the [`select`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html#select) using the <kbd>ALT</kbd> + <kbd>↑</kbd> or <kbd>↓</kbd> combination or any of the <kbd>ENTER</kbd>, <kbd>SPACE</kbd>, <kbd>ESC</kbd> or [`IgrTab`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtab.html) keys.
- Using the <kbd>←</kbd> <kbd>→</kbd> keys will select the previous item in the list.
- Using the <kbd>↑</kbd> <kbd>↓</kbd> keys will select the next item in the list.
- Using the <kbd>HOME</kbd> or <kbd>END</kbd> keys will select the first or last item in the list.
- Typing characters will query the list of items and select the one that most closely matches the current user input.

When the select is focused and the list of options is **visible**:

- Using the <kbd>ENTER</kbd> or <kbd>SPACE</kbd> keys will select an item and close the list.
- Using the <kbd>←</kbd> <kbd>→</kbd> keys will activate the previous item in the list.
- Using the <kbd>↑</kbd> <kbd>↓</kbd> keys will activate the next item in the list.
- Using the <kbd>HOME</kbd> or <kbd>END</kbd> keys will activate the first or last item in the list.

> \[!Note]
> The [`IgrSelect`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselect.html) component supports only **single** selection of items.

<!-- WebComponents, React -->

## Styling

You can change the appearance of the Ignite UI for React [`IgrSelect`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselect.html) component and its items, by using the exposed CSS parts listed below:

**Select Component**

| Part name | Description |
| ---------|------------ |
| `input` | The encapsulated igc-input. |
| `label` | The encapsulated text label. |
| `list` | A wrapper that holds the list of options. |
| `prefix`  | A prefix wrapper that renders content before the input. |
| `suffix` | A suffix wrapper that renders content after the input. |
| `toggle-icon` | A toggle-icon wrapper that renders content inside the suffix wrapper. |
| `helper-text` | A helper-text wrapper that renders content below the input. |

**Select Item Component**

| Part name | Description |
| ---------|------------ |
| `content` | The main wrapper that holds the text content of an item. |
| `prefix`  | A prefix wrapper that renders content before the main wrapper. |
| `suffix` | A suffix wrapper that renders content after the main wrapper. |

**Select Group Component**

| Part name | Description |
| ---------|------------ |
| `label` | A label wrapper that renders content above the select group items. |

```css
igc-select::part(base) {
  background: var(--ig-primary-50);
}

igc-select-item[active] {
  background: var(--ig-secondary-300);
}

igc-select::part(input) {
  background-color: var(--ig-primary-50);
}

igc-select::part(prefix),
igc-select::part(suffix) {
  color: var(--ig-secondary-500-contrast);
  background: var(--ig-secondary-500);
}
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

span[slot="prefix"] {
    height: 20px;
}

igc-select::part(base) {
    background: rgb(225, 241, 246);
}

igc-select-item::part(prefix),
igc-select-item::part(suffix) {
    color: rgb(1, 42, 74);
}

igc-select-item[active] {
    background: rgb(42, 111, 151);
}

igc-select::part(label) {
    color: rgb(1, 42, 74);
}

igc-select::part(input){
    background-color: rgb(225, 241, 246);
}

igc-select::part(prefix),
igc-select::part(suffix){
    color: white;
    background: rgb(42, 111, 151);
}
```
```tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  IgrSelect,
  IgrSelectItem,
  IgrIcon,
  IgrSelectGroup,
  registerIconFromText,
} from "igniteui-react";
import "./index.css";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const placeSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"/></svg>';

export default function SelectGroup() {

  useEffect(() => {
    registerIconFromText("place", placeSvg, "material");
  }, []);

  return (
    <div className="sample">
      <IgrSelect label="Destinations:">
        <span slot="prefix">
          <IgrIcon name="place" collection="material"></IgrIcon>
        </span>
        <span slot="helper-text">Choose the desired place</span>
        
        <IgrSelectGroup disabled>
          <span slot="label">Europe</span>
          <IgrSelectItem>
            <span slot="prefix">
              <IgrIcon name="place" collection="material"></IgrIcon>
            </span>
            <span> Germany </span>
            <span slot="suffix">DE</span>
          </IgrSelectItem>
          <IgrSelectItem>
            <span slot="prefix">
              <IgrIcon name="place" collection="material"></IgrIcon>
            </span>
            <span> France </span>
            <span slot="suffix">FR</span>
          </IgrSelectItem>
          <IgrSelectItem selected>
            <span slot="prefix">
              <IgrIcon name="place" collection="material"></IgrIcon>
            </span>
            <span> Spain </span>
            <span slot="suffix">ES</span>
          </IgrSelectItem>
        </IgrSelectGroup>

        <IgrSelectGroup>
          <span slot="label">North America</span>
          <IgrSelectItem>
            <span slot="prefix">
              <IgrIcon name="place" collection="material"></IgrIcon>
            </span>
            <span> USA </span>
            <span slot="suffix">US</span>
          </IgrSelectItem>
          <IgrSelectItem>
            <span slot="prefix">
              <IgrIcon name="place" collection="material"></IgrIcon>
            </span>
            <span> Canada </span>
            <span slot="suffix">CA</span>
          </IgrSelectItem>
          <IgrSelectItem>
            <span slot="prefix">
              <IgrIcon name="place" collection="material"></IgrIcon>
            </span>
            <span> Mexico </span>
            <span slot="suffix">MX</span>
          </IgrSelectItem>
        </IgrSelectGroup>
      </IgrSelect>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SelectGroup />);
```


<!-- end: WebComponents, React -->

## API Reference

- [`IgrSelect`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselect.html)
- [`IgrSelectItem`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselectitem.html)
- [`IgrSelectHeader`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselectheader.html)
- [`IgrSelectGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselectgroup.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
