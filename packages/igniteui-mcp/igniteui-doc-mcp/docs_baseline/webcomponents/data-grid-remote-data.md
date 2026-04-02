---
title: Web Components Data Grid | Remote Data | Infragistics
_description: Use the Infragistics Web Components grid component's Virtual Data Source to bind remote data. View Ignite UI for Web Components table tutorials!
_keywords: Web Components Table, Data Grid, virtual data, Ignite UI for Web Components, Infragistics, data binding
mentionedTypes: ["Grid", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: Binding Virtual Data
_premium: true
---

> [!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

# Web Components Grid Binding Virtual Data

The Ignite UI for Web Components Data Table / Data Grid supports data binding to remote datasources with one line of code. With the Web Components data table’s Virtual Data Source, you simply configure the Web Components grid with your remote URI and which OData Entity you’d like returned, and the Web Components grid does the rest of the work for you.

## Web Components Grid Binding Virtual Data Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>


- **npm install --save igniteui-webcomponents-core**
- **npm install --save igniteui-webcomponents-grids**
- **npm install --save igniteui-webcomponents-inputs**
- **npm install --save igniteui-webcomponents-datasources**

## Component Modules

The [`IgcDataGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcomponent.html) requires the following modules:

```ts
import './odatajs-4.0.0';
import { ModuleManager } from 'igniteui-webcomponents-core';
import { IgcDataGridModule } from 'igniteui-webcomponents-data-grids';
import { IgcDataGridComponent } from 'igniteui-webcomponents-data-grids';
import { ODataVirtualDataSource } from 'igniteui-webcomponents-dataSource';

ModuleManager.register(IgcDataGridModule);
```

<div class="divider--half"></div>

## Code Snippet

Now that the Web Components data grid module is imported, the next step is the basic configuration of the Web Components grid that binds to remote data. Create the virtual data source. Assign the url where the data will be retrieved from to the <b>baseUri</b> property. Setting the <b>entitySet</b> property will inform which table to retrieve from the virtual data source.

```html
<igc-data-grid id="grid"
    width="100%"
    height="100%"
    default-column-min-width=200>
</igc-data-grid>
```

Assign the data source to the grid.

```ts
private virtualData: ODataVirtualDataSource;
// ...
const vds = new ODataVirtualDataSource();
vds.baseUri = ("https://services.odata.org/V4/Northwind/Northwind.svc");
vds.entitySet = ("Orders");
this.virtualData = vds;
```

```ts
const vds = new ODataVirtualDataSource();
vds.baseUri = ("https://services.odata.org/V4/Northwind/Northwind.svc");
vds.entitySet = ("Orders");

let grid1 = (document.getElementById("grid") as IgcDataGridComponent);
grid1.dataSource = vds;
```

## API References

- [`IgcDataGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcomponent.html)
