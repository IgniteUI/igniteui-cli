---
title: Manage Angular Page Layout | Tile Manager | Ignite UI | Infragistics | MIT license
_description: The Ignite UI for Angular Tile Manager component enables the display of content in individual tiles.
_keywords: manage angular page layout, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Tile Manager, Infragistics, Tile , Angular Tile Manager component, Angular Tile Manager control
_license: MIT
_tocName: Tile Manager
---

# Angular Tile Manager Overview

The Tile Manager component enables the display of content in individual tiles. It allows users to interact with these tiles by rearranging and resizing them, giving them the freedom to customize the layout and appearance of the content according to their preferences. This flexibility enhances the user experience by enabling a more personalized and efficient way to view and manage content.

## Angular Tile Manager Example

The following Ignite UI for Angular Tile Manager Example shows the component in action.

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxCardComponent, IgxCardContentDirective, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardThumbnailDirective } from 'igniteui-angular/card';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IgxListComponent, IgxListItemComponent, IgxListLineDirective, IgxListThumbnailDirective } from 'igniteui-angular/list';
import { defineComponents, IgcTileManagerComponent } from 'igniteui-webcomponents';

defineComponents(IgcTileManagerComponent);

@Component({
    selector: 'app-tile-manager',
    styleUrls: ['./tile-manager.component.scss'],
    templateUrl: './tile-manager.component.html',
    imports: [IgxCardComponent, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardThumbnailDirective, IgxCardContentDirective, IgxListComponent, IgxListItemComponent, IgxListThumbnailDirective, IgxAvatarComponent, IgxIconComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TileManagerComponent implements OnInit {
    protected _iconService = inject(IgxIconService);


    public ngOnInit() {
        const listIcon =
          '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#e3e3e3"><path d="M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20.1 3H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM19 19H5V5h14v14z"/></svg>';
    
        const calendarIcon =
          '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#e3e3e3"><path d="M19,4h-1V2h-2v2H8V2H6v2H5C3.89,4,3.01,4.9,3.01,6L3,20c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z M19,20 H5V10h14V20z M9,14H7v-2h2V14z M13,14h-2v-2h2V14z M17,14h-2v-2h2V14z M9,18H7v-2h2V18z M13,18h-2v-2h2V18z M17,18h-2v-2h2V18z"/></svg>'
    
        const productIcon =
          '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#e3e3e3"><path d="M13,10h-2V8h2V10z M13,6h-2V1h2V6z M7,18c-1.1,0-1.99,0.9-1.99,2S5.9,22,7,22s2-0.9,2-2S8.1,18,7,18z M17,18 c-1.1,0-1.99,0.9-1.99,2s0.89,2,1.99,2s2-0.9,2-2S18.1,18,17,18z M8.1,13h7.45c0.75,0,1.41-0.41,1.75-1.03L21,4.96L19.25,4l-3.7,7 H8.53L4.27,2H1v2h2l3.6,7.59l-1.35,2.44C4.52,15.37,5.48,17,7,17h12v-2H7L8.1,13z"/></svg>'
    
        this._iconService.addSvgIconFromText("list", listIcon, "material");
        this._iconService.addSvgIconFromText("calendar", calendarIcon, "material");
        this._iconService.addSvgIconFromText("product", productIcon, "material");
      }
}
```
```html
<igc-tile-manager id="tile-manager1" column-count="3" gap="20px" resize-mode="hover" drag-mode="tile-header">
    <igc-tile row-span="2" class="order-info">
        <span slot="title">Order info</span>
        <igx-list>
            <igx-list-item>
            <igx-avatar igxListThumbnail shape="circle" >
                <igx-icon igxListThumbnail name="list" collection="material" class="material-icons"></igx-icon>
            </igx-avatar>
            <div igxListLineTitle class="content">
                <p>OrderID</p>
                <p>10293</p>
            </div>
            </igx-list-item>
            <igx-list-item>
            <igx-avatar igxListThumbnail shape="circle" class="avatar">
                <igx-icon name="list" collection="material" class="material-icons"></igx-icon>
            </igx-avatar>
            <div igxListLineTitle class="content">
                <p>Customer Name</p>
                <p>Tortuga Restaurante</p>
            </div>
            </igx-list-item>
            <igx-list-item>
            <igx-avatar igxListThumbnail shape="circle" class="avatar">
                <igx-icon name="calendar" collection="material" class="material-icons"></igx-icon>
            </igx-avatar>
            <div igxListLineTitle class="content">
                <p>Order Date</p>
                <p>August 29, 1996</p>
            </div>
            </igx-list-item>
            <igx-list-item>
            <igx-avatar igxListThumbnail shape="circle" class="avatar">
                <igx-icon name="calendar" collection="material" class="material-icons"></igx-icon>
            </igx-avatar>
            <div igxListLineTitle class="content">
                <p>Shipped Date</p>
                <p>September 11, 1996</p>
            </div>
            </igx-list-item>
            <igx-list-item>
                <igx-avatar igxListThumbnail shape="circle" class="avatar">
                    <igx-icon name="list" collection="material" class="material-icons"></igx-icon>
                </igx-avatar>
                <div igxListLineTitle class="content">
                    <p>Product Name</p>
                    <p>Carnavon Tigers</p>
                </div>
            </igx-list-item>
            <igx-list-item>
                <igx-avatar igxListThumbnail shape="circle" class="avatar">
                    <igx-icon name="list" collection="material" class="material-icons"></igx-icon>
                </igx-avatar>
                <div igxListLineTitle class="content">
                    <p>Ship Country</p>
                    <p>Mexico</p>
                </div>
            </igx-list-item>
        </igx-list>
    </igc-tile>
    <igc-tile col-span="2" row-span="2">
        <span slot="title">Order Line Items</span>
        <div class="group">
            <div class="card">
                <igx-card elevated>
                    <igx-card-header>
                        <div igxCardThumbnail>
                            <igx-avatar shape="circle" collection="material">
                                <igx-icon name="product" collection="material" class="material-icons"></igx-icon>
                            </igx-avatar>
                        </div>
                        <h3 igxCardHeaderTitle>Carnavon Tigers</h3>
                    </igx-card-header>
                    <igx-card-content class="column">
                        <div class="body-content">
                            <span>Quantity</span><span>12</span>
                        </div>
                        <div class="body-content">
                            <span>Unit Price</span><span>$50</span>
                        </div>
                    </igx-card-content>
                </igx-card>
            </div>
            <div class="card">
                <igx-card elevated>
                <igx-card-header>
                    <div igxCardThumbnail>
                        <igx-avatar shape="circle">
                            <igx-icon name="product" collection="material" class="material-icons"></igx-icon>
                        </igx-avatar>
                    </div>
                    <span slot="title">Guarana Fantastica</span>
                </igx-card-header>
                <igx-card-content class="column">
                    <div class="body-content">
                        <span>Quantity</span> <span>10</span>
                    </div>
                    <div class="body-content">
                        <span>Unit Price</span> <span>$4</span>
                    </div>
                </igx-card-content>
                </igx-card>
            </div>
            <div class="card">
                <igx-card elevated>
                    <igx-card-header>
                    <div igxCardThumbnail>
                        <igx-avatar shape="circle">
                        <igx-icon name="product" collection="material" class="material-icons"></igx-icon>
                        </igx-avatar>
                    </div>
                    <span slot="title">Vegie-spread</span>
                    </igx-card-header>
                    <igx-card-content class="column">
                    <div class="body-content">
                        <span>Quantity</span> <span>5</span>
                    </div>
                    <div class="body-content">
                        <span>Unit Price</span> <span>$35</span>
                    </div>
                    </igx-card-content>
                </igx-card>
            </div>
            <div class="card">
                <igx-card elevated>
                    <igx-card-header>
                    <div igxCardThumbnail>
                        <igx-avatar shape="circle">
                        <igx-icon name="product" collection="material" class="material-icons"></igx-icon>
                        </igx-avatar>
                    </div>
                    <span slot="title">Rhonbrau Klosterbier</span>
                    </igx-card-header>
                    <igx-card-content class="column">
                    <div class="body-content">
                        <span>Quantity</span> <span>7</span>
                    </div>
                    <div class="body-content">
                        <span>Unit Price</span> <span>$6</span>
                    </div>
                    </igx-card-content>
                </igx-card>
            </div>
        </div>
    </igc-tile>
    <igc-tile col-span="2">
        <span slot="title">Order Value</span>
        <div class="string">
            <h3>$8.66K</h3>
        </div>
    </igc-tile>
    <igc-tile >
        <span slot="title">Item quantity</span>
        <div class="string">
            <h3>4</h3>
        </div>
    </igc-tile>
</igc-tile-manager>
```
```scss
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
  min-width: 250px;
  max-width: 320px;
  margin: 0 15px 15px 15px
}

igx-card-content {
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

.content {
  display: flex;
  justify-content: space-between;
}

.order-info::part(base) {
  display: flex;
  flex-direction: column;
}

.order-info::part(content-container) {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
}
```
<div class="divider--half"></div>

> [!WARNING]
> Due to the iframe permissions policy, the fullscreen button in this example will only work when the example is opened in standalone mode by clicking the 'Expand to fullscreen' button in the top-right corner.

## Getting Started with Ignite UI for Angular Tile Manager

Ignite UI Tile Manager is a standard [web component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) and as such can be used in an Angular application.

To start using it, first, you need to install the Ignite UI for Web Components package by running the following command:

```cmd
npm install igniteui-webcomponents --save
```

Next, you should call the `defineCustomElements()` function with `IgcTileManagerComponent` argument either in your `main.ts` file or in the component `.ts` file that is using `IgcTileManager`.

```ts
import { defineComponents, IgcTileManagerComponent } from 'igniteui-webcomponents';

defineComponents(IgcTileManagerComponent);
```

You also need to include the `CUSTOM_ELEMENTS_SCHEMA` schema in your component's configuration

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
```

Now you can start with a basic configuration of the Angular Tile Manager.

## Usage

The Tile Manager provides a base tile layout behavior, managing the placement of tiles in maximized or normal state. The tiles can be sized independently of each other and used to form complex layouts. End users can reorder tiles by dragging and dropping them, providing a flexible and intuitive experience.

The Tile Manager offers two components that we can use:

- `IgcTileComponent` - This component represents an individual tile displayed within the Tile Manager.
- `IgcTileManagerComponent` - This is the main component that contains all of the tile components, serving as the container for the entire tile layout.

```html
<igc-tile-manager>
  <igc-tile>
    <p>Tile 1</p>
  </igc-tile>
  <igc-tile>
    <p>Tile 2</p>
  </igc-tile>
  <igc-tile>
    <p>Tile 3</p>
  </igc-tile>
</igc-tile-manager>
```

For a complete introduction to the Ignite UI for Angular, read the [_Getting Started_](general/getting-started.md) topic.

For further information on the usage of the Tile Manager component, you can check out [this topic]({environment:infragisticsBaseUrl}/products/ignite-ui-web-components/web-components/components/layouts/tile-manager.html).
