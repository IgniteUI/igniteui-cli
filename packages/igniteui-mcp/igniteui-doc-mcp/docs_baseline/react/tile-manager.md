---
title: React Tile Manager Component - Ignite UI for React
_description: React Tile Manager component enables the display of content in individual tiles.
_keywords: React Tile Manager, Ignite UI for React, Infragistics, UI controls, React widgets, web widgets, UI widgets, React, Native React Components Suite, Native React Controls, Native React Components Library, Layout components
_license: MIT
mentionedTypes: ["TileManager", "Tile"]
_tocName: Tile Manager
---

# React Tile Manager Overview

The Ignite UI for React Tile Manager component enables the display of content in individual tiles. It allows users to interact with these tiles by rearranging and resizing them, giving them the freedom to customize the layout and appearance of the content according to their preferences. This flexibility enhances the user experience by enabling a more personalized and efficient way to view and manage content.

## React Tile Manager Example

The following Ignite UI for React Tile Manager Example shows the component in action.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./layout.css";
import { IgrCard, IgrCardHeader, IgrCardContent, IgrTileManager, IgrTile, IgrIcon, IgrList, IgrListItem, IgrAvatar, registerIconFromText } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const home = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
const search = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
const favorite = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
registerIconFromText("home", home, "material");
registerIconFromText("search", search, "material");
registerIconFromText("favorite", favorite, "material");

export default class Overview extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div className="container sample center">
        <IgrTileManager id="tile-manager1" columnCount={3} gap="20px" resizeMode="always" dragMode="tile-header">
          <IgrTile rowSpan={3}>
            <h3 slot="title">Order info</h3>
            <IgrList className="list">
              <IgrListItem>
                <IgrAvatar slot="start" shape="circle" className="avatar">
                  <IgrIcon name="list" collection="material" className="material-icons"></IgrIcon>
                </IgrAvatar>
                <div slot="title" className="content">
                  <p>OrderID</p>
                  <p>10293</p>
                </div>
              </IgrListItem>
              <IgrListItem>
                <IgrAvatar slot="start" shape="circle" className="avatar">
                  <IgrIcon name="list" collection="material" className="material-icons"></IgrIcon>
                </IgrAvatar>
                <div slot="title" className="content">
                  <p>Customer Name</p>
                  <p>Tortuga Restaurante</p>
                </div>
              </IgrListItem>
              <IgrListItem>
                <IgrAvatar slot="start" shape="circle" className="avatar">
                  <IgrIcon name="calendar" collection="material" className="material-icons"></IgrIcon>
                </IgrAvatar>
                <div slot="title" className="content">
                  <p>Order Date</p>
                  <p>August 29, 1996</p>
                </div>
              </IgrListItem>
              <IgrListItem>
                <IgrAvatar slot="start" shape="circle" className="avatar">
                <IgrIcon name="calendar" collection="material" className="material-icons"></IgrIcon>
                </IgrAvatar>
                <div slot="title" className="content">
                  <p>Shipped Date</p>
                  <p>September 11, 1996</p>
                </div>
              </IgrListItem>
              <IgrListItem>
                <IgrAvatar slot="start" shape="circle" className="avatar">
                  <IgrIcon name="list" collection="material" className="material-icons"></IgrIcon>
                </IgrAvatar>
                <div slot="title" className="content">
                  <p>Product Name</p>
                  <p>Carnavon Tigers</p>
                </div>
              </IgrListItem>
              <IgrListItem>
                <IgrAvatar slot="start" shape="circle" className="avatar">
                  <IgrIcon name="list" collection="material" className="material-icons"></IgrIcon>
                </IgrAvatar>
                <div slot="title" className="content">
                  <p>Ship Country</p>
                  <p>Mexico</p>
                </div>
              </IgrListItem>
            </IgrList>
          </IgrTile>
          <IgrTile col-span="2" row-span="2">

            <h3 slot="title">Order Line Items</h3>
            <div className="group">
              <IgrCard className="card">
                <div className="group_1">
                  <IgrCardHeader>
                    <div slot="thumbnail">
                      <IgrAvatar shape="circle">
                        <IgrIcon name="product" collection="material" className="material-icons"></IgrIcon>
                      </IgrAvatar>
                    </div>
                    <h3 slot="title">Carnavon Tigers</h3>
                  </IgrCardHeader>
                  <IgrCardContent className="column">
                    <div className="body-content">
                      <span>Quantity</span> <span>12</span>
                    </div>
                    <div className="body-content">
                      <span>Unit Price</span> <span>$50</span>
                    </div>
                  </IgrCardContent>
                </div>
              </IgrCard>
              <IgrCard className="card">
                <div className="group_1">
                  <IgrCardHeader>
                    <div slot="thumbnail">
                      <IgrAvatar shape="circle">
                        <IgrIcon name="product" collection="material" className="material-icons"></IgrIcon>
                      </IgrAvatar>
                    </div>
                    <h3 slot="title">Guarana Fantastica</h3>
                  </IgrCardHeader>
                  <IgrCardContent className="column">
                    <div className="body-content">
                      <span>Quantity</span> <span>10</span>
                    </div>
                    <div className="body-content">
                      <span>Unit Price</span> <span>$4</span>
                    </div>
                  </IgrCardContent>
                </div>
              </IgrCard>
              <IgrCard className="card">
                <div className="group_1">
                  <IgrCardHeader>
                    <div slot="thumbnail">
                      <IgrAvatar shape="circle">
                        <IgrIcon name="product" collection="material" className="material-icons"></IgrIcon>
                      </IgrAvatar>
                    </div>
                    <h3 slot="title">Vegie-spread</h3>
                  </IgrCardHeader>
                  <IgrCardContent className="column">
                    <div className="body-content">
                      <span>Quantity</span> <span>5</span>
                    </div>
                    <div className="body-content">
                      <span>Unit Price</span> <span>$35</span>
                    </div>
                  </IgrCardContent>
                </div>
              </IgrCard>
              <IgrCard className="card">
                <div className="group_1">
                  <IgrCardHeader>
                    <div slot="thumbnail">
                      <IgrAvatar shape="circle">
                        <IgrIcon name="product" collection="material" className="material-icons"></IgrIcon>
                      </IgrAvatar>
                    </div>
                    <h3 slot="title">Rhonbrau Klosterbier</h3>
                  </IgrCardHeader>
                  <IgrCardContent className="column">
                    <div className="body-content">
                      <span>Quantity</span> <span>7</span>
                    </div>
                    <div className="body-content">
                      <span>Unit Price</span> <span>$6</span>
                    </div>
                  </IgrCardContent>
                </div>
              </IgrCard>
            </div>
          </IgrTile>
          <IgrTile >
            <h3 slot="title">Order Value</h3>
            <div className="string">
              <h1>$8.66K</h1>
            </div>
          </IgrTile>
          <IgrTile >
            <h3 slot="title">Item quantity</h3>
            <div className="string">
              <h1>4</h1>
            </div>
          </IgrTile>
        </IgrTileManager>
      </div>
    );
  }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Overview/>);
```
```css
igc-tile-manager {
  margin-bottom: 5px;
}

.group {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 15px;

}

.card {
  min-height: 30px;
  width: calc(50% - 30px);
  margin: 0 15px 15px 15px
}

igc-card-content {
  color: var(--content-text-color);
}

.body-content {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.string {
  text-align: center;
  margin-top: 50px;
  color: var(--ig-gray-800);
}
 
.sample {
  overflow: auto;
}
```


> [!Warning]
> Due to the iframe permissions policy, the fullscreen button in this example will only work when the example is opened in standalone mode by clicking the 'Expand to fullscreen' button in the top-right corner.

## Usage

The [`IgrTileManager`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtilemanager.html) provides a base tile layout behavior, managing the placement of tiles in maximized or normal state. The tiles can be sized independently of each other and used to form complex layouts. End users can reorder tiles by dragging and dropping them, providing a flexible and intuitive experience.

The Tile Manager offers two components that we can use:

- [`IgrTile`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtile.html) - This component represents an individual tile displayed within the Tile Manager.
- [`IgrTileManager`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtilemanager.html) - This is the main component that contains all of the tile components, serving as the container for the entire tile layout.

### Getting Started

To start using the Tile Manager, first, you need to install the Ignite UI for React by running the following command:

```cmd
npm install igniteui-react
```

Before using the Tile Manager, you need to import it as follows:

```tsx
import { IgrTile, IgrTileManager } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

Now you can start with a basic configuration of the React Tile Manager.

```tsx
  <IgrTileManager>
    <IgrTile>
      <p>Tile 1</p>
    </IgrTile>
    <IgrTile>
      <p>Tile 2</p>
    </IgrTile>
    <IgrTile>
      <p>Tile 3</p>
    </IgrTile>
  </IgrTileManager>
```

For a complete introduction to the Ignite UI for React, read the [**Getting Started**](../general-getting-started.md) topic.

## Layout

### Columns and Rows

We can specify the number of grid columns for our Tile Manager. To do this, simply set the [`columnCount`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtilemanager.html#columnCount) property to the desired number of columns. If the number is less than one or the property is not set, the Tile Manager will create as many columns as can fit, with each column being at least 200px wide and expanding to equally share the available space. When the viewport dimensions change, the tiles will also rearrange themselves to maximize the use of space.

```tsx
<IgrTileManager columnCount={2}>
  <IgrTile>
    <span slot="title">Tile 1 header</span>
    <p>Tile 1 Content</p>
  </IgrTile>
  <IgrTile>
    <span slot="title">Tile 2 header</span>
    <p>Tile 2 Content</p>
  </IgrTile>
  <IgrTile>
    <span slot="title">Tile 3 header</span>
    <p>Tile 3 Content</p>
  </IgrTile>
  ...
</IgrTileManager>
```

In this code snippet, the three tiles in the Tile Manager will be arranged into 2 rows and 2 columns.

### Gap

Another property that can be used in the Tile Manager is the [`gap`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtilemanager.html#gap) property, which defines the space between tiles. The value of the [`gap`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtilemanager.html#gap) property must be a number followed by a length unit (e.g., px, rem, em, ...). This value will apply to both the horizontal gap (width) and the vertical gap (height) between tiles.

```tsx
<IgrTileManager gap="20px">
  <IgrTile>
    <span slot="title">Tile 1 header</span>
    <p>Tile 1 Content</p>
  </IgrTile>
  <IgrTile>
    <span slot="title">Tile 2 header</span>
    <p>Tile 2 Content</p>
  </IgrTile>
  ...
</IgrTileManager>
```

### Minimum width and height

We also have properties for setting the minimum width of the columns ([`minColumnWidth`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtilemanager.html#minColumnWidth)) and the minimum height of the rows ([`minRowHeight`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtilemanager.html#minRowHeight)) in the Tile Manager. Similar to the gap property, the values for these properties must be a number followed by a length unit. These values will define the minimum width for all columns and the minimum height for all rows in the Tile Manager.

```tsx
<IgrTileManager minColumnWidth="200px" minRowHeight="150px">
  <IgrTile>
    <span slot="title">Tile 1 header</span>
    <p>Tile 1 Content</p>
  </IgrTile>
  <IgrTile>
    <span slot="title">Tile 2 header</span>
    <p>Tile 2 Content</p>
  </IgrTile>
  ...
</IgrTileManager>
```

### Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./layout.css";
import { IgrTileManager, IgrTile, IgrInput } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default class ColumnGap extends React.Component<any, any> {

  private tileManagerRef = React.createRef<IgrTileManager>();
  constructor(props: any) {
    super(props);
  }

  private onInputChange = (event: CustomEvent) => {    
    const tileManager = this.tileManagerRef.current;
    const input = event.target as IgrInput;
    switch (input.label) {
      case 'Columns Number': tileManager.columnCount = parseInt(input.value);
        break;
      case 'Gap Size': tileManager.gap = input.value;
        break;
    }
  }

  public render(): JSX.Element {
    return (
      <div className="container sample center">
        <div className="inputWrapper">
          <IgrInput label="Columns Number" id="rowIn" onChange={this.onInputChange}></IgrInput>
          <IgrInput label="Gap Size" placeholder="10px" onChange={this.onInputChange}></IgrInput>
        </div>
        <IgrTileManager id="tile-manager1" gap="10px" ref={this.tileManagerRef}>
          <IgrTile disableFullscreen disableMaximize>
            <div className="picture">
              <img src="https://picsum.photos/1048/998" alt="picture" />
            </div>
          </IgrTile>
          <IgrTile disableFullscreen disableMaximize>
            <div className="picture">
              <img src="https://picsum.photos/1049/999" alt="picture" />
            </div>
          </IgrTile>
          <IgrTile disableFullscreen disableMaximize>
            <div className="picture">
              <img src="https://picsum.photos/1050/1000" alt="picture" />
            </div>
          </IgrTile>
          <IgrTile disableFullscreen disableMaximize>
            <div className="picture">
              <img src="https://picsum.photos/1051/1001" alt="picture" />
            </div>
          </IgrTile>
          <IgrTile disableFullscreen disableMaximize>
            <div className="picture">
              <img src="https://picsum.photos/1052/1002" alt="picture" />
            </div>
          </IgrTile>
          <IgrTile disableFullscreen disableMaximize>
            <div className="picture">
              <img src="https://picsum.photos/1053/1003" alt="picture" />
            </div>
          </IgrTile>
        </IgrTileManager>
      </div>
    );
  }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ColumnGap/>);
```
```css
p {
  font-size: 20px;
  padding: 10px;
}

.sample {
  overflow: auto;
}

igc-input {
  width: min-content;
  --ig-size: var(--ig-size-small);
  margin-right: 50px;
}

img {
  height: 100%;
  width: 100%;
}

.inputWrapper{
  display: flex;
  margin-left: 22px;
  margin-bottom: 12px;
}
```


## Tile component

The Tile component has properties that can be set individually for each tile. Some of these properties include:

- The [`colSpan`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtile.html#colSpan) property specifies how many columns the tile will span across in the layout, allowing you to control its horizontal size.
- The [`rowSpan`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtile.html#rowSpan) property determines how many rows the tile will span vertically, adjusting the tile's height within the layout.
- The [`colStart`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtile.html#colStart) property specifies the starting column where the tile is placed.
- The [`rowStart`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtile.html#rowStart) property specifies the starting row where the tile is placed.
- The [`disableFullscreen`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtile.html#disableFullscreen) property hides the default fullscreen action button.
- The [`disableMaximize`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtile.html#disableMaximize) property hides the default maximize toggle action button.
- The [`disableResize`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtile.html#disableResize) property prevents the tile from being resized by the user.

```tsx
<IgrTileManager>
  <IgrTile colSpan={2} disableResize={true}>
    <span slot="title">Tile 1 header</span>
    <p>Tile 1 Content</p>
  </IgrTile>
  <IgrTile>
    <span slot="title">Tile 2 header</span>
    <p>Tile 2 Content</p>
  </IgrTile>
  ...
</IgrTileManager>
```

The Tile component also exposes several slots which you can use:

| Slot name | Description |
| ---------|------------ |
| `title` | Content for the tile header. |
| `fullscreen-action` | Overwrite the default fullscreen action content. |
| `maximize-action` | Overwrite the default maximize action content. |
| `actions` | Custom content rendered after the default actions. |
| `side-adorner` | Overwrite the default horizontal resize adorner. |
| `corner-adorner` | Overwrite the default diagonal resize adorner. |
| `bottom-adorner` | Overwrite the default vertical resize adorner. |

### Header section actions

By default, the header section includes two action buttons:

- The `maximize` button enlarges the tile's content to fill the entire width of the Tile Manager, offering a wider view of the content.
- The `fullscreen` button enables the tile to open in fullscreen mode in the user's browser.

<img src="../../images/tile-manager-actions.png" alt="tile-manager-actions"/>

If you want to display just one of the two buttons, you can set either [`disableMaximize`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtile.html#disableMaximize) or [`disableFullscreen`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtile.html#disableFullscreen) property. To customize the appearance you can use the `maximize-action` slot for the maximize button, or the `fullscreen-action` slot for the fullscreen button.

```tsx
<IgrTileManager>
  <IgrTile disableFullscreen={true}>
    <IgrIconButton slot="maximize-actions" name="north_east" collection="material">
    </IgrIconButton>
    <p>Tile 1 Content</p>
  </IgrTile>
</IgrTileManager>
```

You also have the option to disable both action buttons and create custom ones according to your preferences.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./layout.css";
import { IgrTileManager, IgrTile, IgrIconButton, registerIconFromText } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default class Actions extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    const northEast =
      '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg>';
    registerIconFromText('north_east', northEast, 'material');
    const southWest =
      '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-200v-400h80v264l464-464 56 56-464 464h264v80H200Z"/></svg>';
    registerIconFromText('south_west', southWest, 'material');
    const more =
      '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>';
    registerIconFromText('more', more, 'material');
    const chart =
      '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M640-160v-280h160v280H640Zm-240 0v-640h160v640H400Zm-240 0v-440h160v440H160Z"/></svg>';
    registerIconFromText('chart', chart, 'material');
  }

  private onCustomOneClick = (event: React.MouseEvent) => {

    const tile = (event.currentTarget as HTMLElement).closest('igc-tile');

    if (tile) {
      tile.maximized = !tile.maximized;

      const actionsSlot = tile.querySelector('[slot="actions"]') as HTMLElement;
      const currentBtn = event.currentTarget as HTMLElement;

      if (currentBtn) {
        if (
          tile.maximized
        ) {
          currentBtn.setAttribute('name', 'south_west');
          currentBtn.setAttribute('aria-label', 'collapse');

          const chartBtn = document.createElement('igc-icon-button');
          chartBtn.classList.add('additional-action');
          chartBtn.setAttribute('slot', 'actions');
          chartBtn.setAttribute('variant', 'flat');
          chartBtn.setAttribute('collection', 'material');
          chartBtn.setAttribute('name', 'chart');
          chartBtn.setAttribute('aria-label', 'chart');

          const moreBtn = document.createElement('igc-icon-button');
          moreBtn.classList.add('additional-action');
          moreBtn.setAttribute('slot', 'actions');
          moreBtn.setAttribute('variant', 'flat');
          moreBtn.setAttribute('collection', 'material');
          moreBtn.setAttribute('name', 'more');
          moreBtn.setAttribute('aria-label', 'more');

          tile.append(chartBtn);
          tile.append(moreBtn);
        } else {
          currentBtn.setAttribute('name', 'north_east');
          currentBtn.setAttribute('aria-label', 'expand');

          const additionalButtons =
            actionsSlot.parentElement?.querySelectorAll('.additional-action');
          additionalButtons?.forEach((btn) => btn.remove());
        }
      }
    }
  };

  private onCustomTwoClick = (event: React.MouseEvent) => {
      const tile = (event.currentTarget as HTMLElement).closest('igc-tile');

      if (tile) {
        tile.maximized = !tile.maximized;

        const currentBtn = event.currentTarget as HTMLElement;

        if (currentBtn) {
          if (
            tile.maximized
          ) {
            currentBtn.setAttribute('name', 'south_west');
            currentBtn.setAttribute('aria-label', 'collapse');
          }
          else {
            currentBtn.setAttribute('name', 'north_east');
            currentBtn.setAttribute('aria-label', 'expand');
          }
        }
      }
  };

  public render(): JSX.Element {
    return (
      <div className="container sample center">
        <IgrTileManager id="tile-manager1" columnCount={2} gap="20px">
          <IgrTile>
            <h3 slot="title">Default Actions</h3>
            <p>This tile has default actions and title.</p>
          </IgrTile>
          <IgrTile disableFullscreen>
            <h3 slot="title">No Fullscreen Action</h3>
            <p>Fullscreen is disabled via property.</p>
          </IgrTile>
          <IgrTile disableFullscreen disableMaximize>
            <h3 slot="title">Custom Actions</h3>
            <IgrIconButton id="customOne" onClick={this.onCustomOneClick} slot="actions" variant="flat" collection="material" name="north_east"
            aria-label="north_east"></IgrIconButton>
            <p>Replace the default actions with custom ones, and include extra actions when the tile is maximized.</p>
          </IgrTile>
          <IgrTile disableFullscreen disableMaximize>
            <IgrIconButton id="customTwo" onClick={this.onCustomTwoClick} slot="actions" variant="flat" collection="material"
            name="north_east" aria-label="north_east"></IgrIconButton>
            <p>Display only custom actions in the header.</p>
          </IgrTile>
          <IgrTile disableFullscreen disableMaximize>
            <h3 slot="title">Only title</h3>
            <p>Display only title in the header.</p>
          </IgrTile>
          <IgrTile disableFullscreen disableMaximize>
            <p>Content only.</p>
          </IgrTile>
        </IgrTileManager>
      </div>
    );
  }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Actions/>);
```
```css
igc-tile-manager {
  margin-bottom: 5px;
}

igc-tile:nth-child(n + 3):nth-child(-n + 4)::part(actions) {
  padding: 13px 16px;
}

igc-tile:nth-child(n+3)::part(header) {
  padding: 0px;
}

igc-tile:nth-child(5)::part(header) {
  padding: 18px 0 18px 0;
}

p, igc-tile:nth-child(3) h3, igc-tile:nth-child(5) h3  {
  margin-left: 20px;
}

igc-tile:nth-last-child(1) p {
  margin-top: 30px;
}
```


In this example, we created custom action buttons using the Ignite UI Icon Button component.

## Resizing

Resizing in the Tile Manager is a functionality that allows tiles to be resized using three different resize adorners.

- **Side Adorner**: Adjusts the width by modifying the column span.
- **Bottom Adorner**: Adjusts the height by modifying the row span.
- **Corner Adorner**: Adjusts both width and height simultaneously.

To ensure smooth resizing, a ghost element is used instead of directly modifying the tile’s dimensions. This element appears on top of the original tile, displaying its current dimensions when resizing begins, and it updates in real time as the user drags any of the resize handles.

> [!Note]
> If the ghost element exceeds the available grid space, it will automatically adjust to the largest possible span within the grid's limits.

The Tile Manager automatically rearranges itself when a tile changes size, ensuring that there is minimal empty space. That's why expanding a tile may push adjacent tiles into new positions, while shrinking creates gaps that other tiles may fill dynamically. This ensures that the Tile Manager stays as compact as possible, without any overlapping tiles, and that all movements remain within the defined grid structure.

We can use the [`resizeMode`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtilemanager.html#resizeMode) property to control how resizing is applied in the Tile Manager. It can be set to `none`, `hover` or `always`, which determines when the resize adorners are visible. The default value is `none` and the tile could not be resized.

```tsx
<IgrTileManager resizeMode="hover">
  <IgrTile>
    <p>Tile 1</p>
  </IgrTile>
  <IgrTile>
    <p>Tile 2</p>
  </IgrTile>
</IgrTileManager>
```

You can see the difference between the three states in the example below:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./layout.css";
import { IgrTileManager, IgrTile, IgrRadio, IgrRadioGroup, IgrInput } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { IgcRadioChangeEventArgs } from "igniteui-webcomponents/components/radio/radio";

export default class Actions extends React.Component<any, any> {

  private tileManagerRef = React.createRef<IgrTileManager>();
  constructor(props: any) {
    super(props);
  }

  private onRadioChange = (event: CustomEvent<IgcRadioChangeEventArgs>) => {
      const radio = event.target as IgrRadio;
      (this.tileManagerRef.current as IgrTileManager).resizeMode = radio.value as any;
  };

  private onInputChange = (event: CustomEvent) => {
    const tileManager = this.tileManagerRef.current;
    const input = event.target as IgrInput;
    switch (input.label) {
      case 'Minimum Column Width': tileManager.minColumnWidth = input.value;
        break;
      case 'Minimum Row Height': tileManager.minRowHeight = input.value;
        break;
    }
  }

  public render(): JSX.Element {
    return (
      <div className="container sample center">
        <div className="inputWrapper">
          <IgrRadioGroup id="resize" alignment="horizontal" onChange={this.onRadioChange}>
            <IgrRadio name="resize" value="always" checked>Always</IgrRadio>
            <IgrRadio name="resize" value="hover">Hover</IgrRadio>
            <IgrRadio name="resize" value="none">None</IgrRadio>
          </IgrRadioGroup>
          <IgrInput label="Minimum Column Width" placeholder="200px" type={"text"} onChange={this.onInputChange}></IgrInput>
          <IgrInput label="Minimum Row Height" placeholder="200px" type={"text"} onChange={this.onInputChange}></IgrInput>
        </div>
        <IgrTileManager resize-mode="always" gap="20px" ref={this.tileManagerRef}>
          <IgrTile>
            <span slot="title">Tile 1 header</span>
            <p>Content for Tile 1</p>
          </IgrTile>
          <IgrTile>
            <span slot="title">Tile 2 header</span>
            <p>Content for Tile 2</p>
          </IgrTile>
          <IgrTile>
            <span slot="title">Tile 3 header</span>
            <p>Content for Tile 3</p>
          </IgrTile>
          <IgrTile>
            <span slot="title">Tile 4 header</span>
            <p>Content for Tile 4</p>
          </IgrTile>
        </IgrTileManager>
      </div>
    );
  }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Actions/>);
```
```css
span{
  font-size: 30px;
}

p {
  font-size: 18px;
  padding-left: 20px;
}

igc-radio-group {
  margin: 0 50px 0 22px;
  width: fit-content;
  padding: 4px 15px;
  border: 2px solid var(--ig-primary-700);
  background-color: var(--ig-gray-300);
  align-self: end;
}

.sample {
  overflow: auto;
}

.inputWrapper{
  display: flex;
  margin-bottom: 12px;
}

igc-input {
  width: min-content;
  --ig-size: var(--ig-size-small);
  margin-right: 50px;
}
```


### Snapping

Tiles resize in full grid units, meaning they can only grow or shrink by whole columns or rows. The ghost element snaps to the next column or row when expanding past the halfway point and to the previous one when shrinking past the halfway mark. This applies to all adorners (bottom, side and corner), ensuring tiles always stay aligned to the grid.

Grid gaps are also considered, keeping the layout consistent during resizing.

### Limitations

There are several constraints and limitations in the resizing process:

- A tile cannot be resized smaller than its defined minimum width or height ([`minColumnWidth`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtilemanager.html#minColumnWidth), [`minRowHeight`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtilemanager.html#minRowHeight)).
- A tile cannot exceed the maximum available horizontal space in the grid.

## Reorder

You can reorder tiles in the Tile Manager using the drag-and-drop feature. By default, tiles are not draggable. To enable this functionality, set the [`dragMode`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtilemanager.html#dragMode) property on the Tile Manager to either `tile` or `tile-header`.

- With the `tile` option, you can click and hold anywhere on an individual tile to start dragging it.
- With the `tile-header` option, you can only click and hold in the tile's header section to start the dragging process.

> [!Note]
> While the tile is in maximized or fullscreen state, the tile cannot be dragged.

Similar to resizing, when you initiate the drag-and-drop process, a ghost element appears beneath the tile you’ve grabbed. As you drag the tile, the ghost element moves with it, dynamically reordering the other tiles in real time. This allows you to preview how the tile grid will look when you drop the tile.

```tsx
<IgrTileManager dragMode="tile-header">
  <IgrTile>
    <span slot="title">Tile 1 header</span>
    <p>Tile 1 Content</p>
  </IgrTile>
  <IgrTile>
    <span slot="title">Tile 2 header</span>
    <p>Tile 2 Content</p>
  </IgrTile>
</IgrTileManager>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./layout.css";
import { IgrTileManager, IgrTile, IgrRadio, IgrRadioGroup } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { IgcRadioChangeEventArgs } from "igniteui-webcomponents/components/radio/radio";

export default class DragNDrop extends React.Component<any, any> {

  private tileManagerRef = React.createRef<IgrTileManager>();

  constructor(props: any) {
    super(props);
  }

  private onRadioChange = (event: CustomEvent<IgcRadioChangeEventArgs>) => {
      const radio = event.target as IgrRadio;
      this.tileManagerRef.current.dragMode = radio.value as any;
  };

  public render(): JSX.Element {
    return (
      <div className="container sample center">
        <div className="radioWrapper">
        <IgrRadioGroup id="dragMode" alignment="horizontal" onChange={this.onRadioChange}>
          <IgrRadio name="dragMode" value="tile-header" checked>Tile-header</IgrRadio>
          <IgrRadio name="dragMode" value="tile">Tile</IgrRadio>
          <IgrRadio name="dragMode" value="none">None</IgrRadio>
        </IgrRadioGroup>
        </div>
        <IgrTileManager drag-mode="tile-header" drag-action="slide" column-count="2" gap="20px" ref={this.tileManagerRef}>
          <IgrTile>
          <span slot="title">Tile 1 header</span>
            <p>Content for Tile 1</p>
          </IgrTile>
          <IgrTile>
            <span slot="title">Tile 2 header</span>
            <p>Content for Tile 2</p>
          </IgrTile>
          <IgrTile>
            <span slot="title">Tile 3 header</span>
            <p>Content for Tile 3</p>
          </IgrTile>
          <IgrTile>
            <span slot="title">Tile 4 header</span>
            <p>Content for Tile 4</p>
          </IgrTile>
        </IgrTileManager>
      </div>
    );
  }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DragNDrop/>);
```
```css
span{
  font-size: 30px;
}

igc-tile::part(header) {
  border-bottom: 2px solid var(--ig-primary-700);
}

p {
  font-size: 18px;
  margin-left: 20px;
  padding-top: 10px;
}

igc-radio-group {
  margin-left: 22px;
  width: fit-content;
  padding: 4px 15px;
  margin-bottom: 8px;
  border: 2px solid var(--ig-primary-700);
  background-color: var(--ig-gray-300);
}

igc-tile::part(dragging) {
  color: yellow;
}

.radioWrapper {
  display: flex;
}
```


## Serialization

The Tile Manager provides methods that help manage the layout of tiles:

- The [`saveLayout`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtilemanager.html#saveLayout) method allows you to save the current arrangement of tiles in the Tile Manager, it captures the current order, size and position of all tiles, so you can later restore it to this exact configuration.
- The [`loadLayout`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtilemanager.html#loadLayout) method enables you to load a previously saved layout. When called, it restores the tiles to the exact state they were in when the layout was saved, including their order, size and position.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React, { Component, createRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./layout.css";
import { IgrTileManager, IgrTile, IgrButton } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default class Layout extends Component<any, any> {

  private tileManagerRef = createRef<IgrTileManager>();
  state = {
    serializedData: '',
  };
  constructor(props: any) {
    super(props);
  }

  private onAddTileClick = () => {
    const newTile = document.createElement("igc-tile");  
    const contentHeader = document.createElement('span');
    const content = document.createElement('p');
    const index = this.tileManagerRef.current.tiles.length + 1;
    contentHeader.textContent = `Tile ${index} header`;
    content.textContent = `Content for Tile ${index}`;
    contentHeader.setAttribute('slot', 'title');
    newTile.position = 0;
    newTile.append(contentHeader);
    newTile.append(content);
    (this.tileManagerRef.current as IgrTileManager).appendChild(newTile);
  }

  public render(): JSX.Element {
    return (
      <div className="container sample center">
        <div className="btnWrapper">
          <IgrButton id="saveL" onClick={() => this.setState({ serializedData: this.tileManagerRef?.current.saveLayout()})}>Save Layout</IgrButton>
          <IgrButton id="loadL" onClick={() => this.tileManagerRef.current.loadLayout(this.state.serializedData)}>Load Layout</IgrButton>
          <IgrButton id="addT" onClick={this.onAddTileClick}>Add Tile</IgrButton>
          <IgrButton id="remT" onClick={()=> this.tileManagerRef.current.querySelector('igc-tile:first-of-type')?.remove()}>Remove Tile</IgrButton>
        </div>
        <IgrTileManager ref={this.tileManagerRef} resize-mode="always" drag-mode="tile" column-count="2" gap="20px">
          <IgrTile>
            <span slot="title">Tile 1 header</span>
            <p>Content for Tile 1</p>
          </IgrTile>
          <IgrTile>
            <span slot="title">Tile 2 header</span>
            <p>Content for Tile 2</p>
          </IgrTile>
          <IgrTile>
            <span slot="title">Tile 3 header</span>
            <p>Content for Tile 3</p>
          </IgrTile>
          <IgrTile>
            <span slot="title">Tile 4 header</span>
            <p>Content for Tile 4</p>
          </IgrTile>
        </IgrTileManager>
      </div>
    );
  }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout/>);
```
```css
span{
  font-size: 30px;
}

p {
  font-size: 18px;
  margin-left: 20px;
}

.btnWrapper {
  margin: 0 0 8px 22px;
}

igc-button:nth-of-type(-n+3) {
  margin-right: 5px;;
}

.sample {
  overflow: auto;
}
```


## Styling

You can also customize the appearance of the two components - [`IgrTileManager`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtilemanager.html) and [`IgrTile`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtile.html).
The [`IgrTileManager`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtilemanager.html) exposes only one CSS property - `base` which can be used for styling the base wrapper of the Tile Manager.
The [`IgrTile`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtile.html) exposes several CSS properties we can use:

| Part name | Description |
| ---------|------------ |
| `base` | The wrapping container of the tile component. |
| `header` | The header container of the tile, including title and actions parts. |
| `title` | The title container. |
| `actions` | The actions container. |
| `content-container` | The container wrapping the tile default slot. |
| `trigger-side` | The horizontal adorner. |
| `trigger` | The diagonal adorner |
| `trigger-bottom` | The vertical adorner. |

Using these CSS parts you can customize the appearance of the two components as follows:

```css
igc-tile-manager::part(base) {
  background-color: var(--ig-surface-900);
}

igc-tile::part(content-container) {
  color: var(--ig-secondary-200);
}

igc-tile::part(header) {
  background-color: var(--ig-gray-300);
}

igc-tile::part(title) {
  color: var(--ig-primary-400);
}

igc-tile:nth-child(n+2)::part(trigger-side),
igc-tile:nth-child(n+2)::part(trigger-bottom) {
  background-color: var(--ig-success-500);
}

igc-tile:nth-child(n+2)::part(trigger) {
  background-color: var(--ig-error-500);
}
```

You can also change the icon of the adorners to a custom one using the `side-adorner`, `corner-adorner`, and `bottom-adorner` slots. For instance:

```tsx
<IgrTile>
  <IgrIcon slot="side-adorner" className="side" name="indicator"></IgrIcon>
  <IgrIcon slot="corner-adorner" className="corner" name="indicator"></IgrIcon>
  <IgrIcon slot="bottom-adorner" className="bottom" name="indicator"></IgrIcon>
  <span slot="title">Tile header</span>
</IgrTile>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./layout.css";
import "./styles.css";
import { IgrTileManager, IgrTile, IgrIcon, registerIconFromText } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default class Styling extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    const indicatorIcon =
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none"><path d="M3.993 12.508V.765h-.979v11.743h.979ZM1.54 10.06V3.21H.56v6.85h.98Z" fill="#09F"/></svg>';

    registerIconFromText('indicator', indicatorIcon);
  }

  public render(): JSX.Element {
    return (
      <div className="container sample center">
        <IgrTileManager column-count="2" gap="20px" resize-mode="always">
          <IgrTile>
            <IgrIcon slot="side-adorner" className="side" name="indicator"></IgrIcon>
            <IgrIcon slot="corner-adorner" className="corner" name="indicator"></IgrIcon>
            <IgrIcon slot="bottom-adorner" className="bottom" name="indicator"></IgrIcon>
            <span slot="title">Tile 1 header</span>
            <p>Content for Tile 1</p>
          </IgrTile>
          <IgrTile>
            <span slot="title">Tile 2 header</span>
            <p>Content for Tile 2</p>
          </IgrTile>
          <IgrTile>
            <span slot="title">Tile 3 header</span>
            <p>Content for Tile 3</p>
          </IgrTile>
          <IgrTile>
            <span slot="title">Tile 4 header</span>
            <p>Content for Tile 4</p>
          </IgrTile>
        </IgrTileManager>
      </div>
    );
  }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Styling/>);
```
```css
span{
  font-size: 30px;
}

p {
  font-size: 18px;
  margin: 10px 0 0 20px;
}
 
.sample {
  overflow: auto;
}
```
```css
igc-tile-manager::part(base) {
  background-color: var(--ig-surface-900);
}

igc-tile::part(content-container) {
  color: var(--ig-secondary-200);
}

igc-tile::part(header) {
  background-color: var(--ig-gray-300);
}

igc-tile::part(title) {
  color: var(--ig-primary-400);
}

igc-tile:nth-child(n+2)::part(trigger-side), igc-tile:nth-child(n+2)::part(trigger-bottom) {
  background-color: var(--ig-success-500);
}

igc-tile:nth-child(n+2)::part(trigger) {
  background-color: var(--ig-error-500);
}
 
.side,
.corner,
.bottom {
  display: inline;
  width: 100%;
  height: 100%;
}

.corner {
  transform: rotate(220deg);
  bottom: 8px;
  right: 8px;
}

.bottom {
  transform: rotate(90deg);
}
```


## API Reference

- [`IgrTileManager`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtilemanager.html)
- [`IgrTile`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtile.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [`IgrTile`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtile.html)
- [`IgrTileManager`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtilemanager.html)
- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
