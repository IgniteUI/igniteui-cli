---
title: Web Components Tree Grid for Ignite UI for Web Components for
_description: Use Web Components Tree Grid for essential UI operations. Hosts different UI controls for the Grid’s features - column hiding, pinning, excel exporting, etc.
_keywords: Web Components, Tree Grid, Tree Grid, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["GridToolbar"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid", "GridToolbarActions"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/toolbar
_tocName: Toolbar
_premium: true
---

# Web Components Tree Grid Toolbar

The Ignite UI for Web Components Toolbar in is a container for UI operations in the Web Components Tree Grid. The Web Components toolbar is located at the top of the Web Components component, i.e., the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) and it matches its horizontal size. The toolbar container can host any custom content or set of predefined UI controls. The default set for the Web Components Tree Grid includes:

- Column Hiding
- Column Pinning
- Excel Exporting
- Advanced Filtering

The toolbar and the predefined UI components support Web Components events and expose API for developers.

<!-- ComponentStart: Grid, TreeGrid -->

## Web Components Toolbar Grid Example

```typescript
export class EmployeesFlatAvatarsItem {
    public constructor(init: Partial<EmployeesFlatAvatarsItem>) {
        Object.assign(this, init);
    }

    public Age: number;
    public Avatar: string;
    public HireDate: string;
    public ID: number;
    public Name: string;
    public ParentID: number;
    public Title: string;

}
export class EmployeesFlatAvatars extends Array<EmployeesFlatAvatarsItem> {
    public constructor(items: Array<EmployeesFlatAvatarsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesFlatAvatarsItem({ Age: 55, Avatar: `https://dl.infragistics.com/x/img/people/men/25.png`, HireDate: `2008-03-20`, ID: 1, Name: `Johnathan Winchester`, ParentID: -1, Title: `Development Manager` }),
                new EmployeesFlatAvatarsItem({ Age: 42, Avatar: `https://dl.infragistics.com/x/img/people/women/14.png`, HireDate: `2014-01-22`, ID: 4, Name: `Ana Sanders`, ParentID: -1, Title: `CEO` }),
                new EmployeesFlatAvatarsItem({ Age: 49, Avatar: `https://dl.infragistics.com/x/img/people/women/12.png`, HireDate: `2014-01-22`, ID: 18, Name: `Victoria Lincoln`, ParentID: -1, Title: `Accounting Manager` }),
                // ... 15 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.cell__inner {
    display: flex;
    align-items: center;
}
.name {
    margin-left: 30px;
}
```


<!-- ComponentEnd: Grid, TreeGrid -->

The predefined [`IgcGridToolbarActionsComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbaractionscomponent.html) and [`IgcGridToolbarTitleComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbartitlecomponent.html) UI components are added inside the [`IgcGridToolbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbarcomponent.html) and this is all needed to have a toolbar providing default interactions with the corresponding Grid features:

<!-- ComponentStart: TreeGrid -->

```html
<igc-tree-grid id="treeGrid" primary-key="ID" foreign-key="ParentID" auto-generate="true">
    <igc-grid-toolbar>
        <igc-grid-toolbar-title>Tree Grid Toolbar</igc-grid-toolbar-title>
        <igc-grid-toolbar-actions>
            <igc-grid-toolbar-advanced-filtering><igc-grid-toolbar-advanced-filtering>
            <igc-grid-toolbar-hiding></igc-grid-toolbar-hiding>
            <igc-grid-toolbar-pinning></igc-grid-toolbar-pinning>
            <igc-grid-toolbar-exporter></igc-grid-toolbar-exporter>
        </igc-grid-toolbar-actions>
    </igc-grid-toolbar>
</igc-tree-grid>
```

<!-- ComponentEnd: TreeGrid -->

> [!Note]
> As seen in the code snippet above, the predefined `Actions` UI components are wrapped in the [`IgcGridToolbarActionsComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbaractionscomponent.html) container. This way, the toolbar title is aligned to the left of the toolbar and the actions are aligned to the right of the toolbar.

Of course, each of these UIs can be added independently of each other, or may not be added at all. This way the toolbar container will be rendered empty:

<!-- ComponentStart: TreeGrid -->

```html
<igc-tree-grid primary-key="ID" foreign-key="ParentID" auto-generate="true">
    <igc-grid-toolbar>
    </igc-grid-toolbar>
</igc-tree-grid>
```

## Features

The toolbar is great at separating logic/interactions which affects the grid as a whole.

As shown above, it can be configured to provide default components for controlling, column hiding, column pinning, advanced filtering and exporting data from the grid.

These features can be enabled independently from each other by following a pattern similar to the card component of the Ignite UI for Web Components suite.

Listed below are the main features of the toolbar with example code for each of them.

<!-- ComponentStart: Grid, TreeGrid -->

```typescript
export class EmployeesFlatAvatarsItem {
    public constructor(init: Partial<EmployeesFlatAvatarsItem>) {
        Object.assign(this, init);
    }

    public Age: number;
    public Avatar: string;
    public HireDate: string;
    public ID: number;
    public Name: string;
    public ParentID: number;
    public Title: string;

}
export class EmployeesFlatAvatars extends Array<EmployeesFlatAvatarsItem> {
    public constructor(items: Array<EmployeesFlatAvatarsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesFlatAvatarsItem({ Age: 55, Avatar: `https://dl.infragistics.com/x/img/people/men/25.png`, HireDate: `2008-03-20`, ID: 1, Name: `Johnathan Winchester`, ParentID: -1, Title: `Development Manager` }),
                new EmployeesFlatAvatarsItem({ Age: 42, Avatar: `https://dl.infragistics.com/x/img/people/women/14.png`, HireDate: `2014-01-22`, ID: 4, Name: `Ana Sanders`, ParentID: -1, Title: `CEO` }),
                new EmployeesFlatAvatarsItem({ Age: 49, Avatar: `https://dl.infragistics.com/x/img/people/women/12.png`, HireDate: `2014-01-22`, ID: 18, Name: `Victoria Lincoln`, ParentID: -1, Title: `Accounting Manager` }),
                // ... 15 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
.cell__inner {
    display: flex;
    align-items: center;
}

.name {
    margin-left: 30px;
}

.control_panel {
    width: 700px;
    margin-bottom: 10px;
}
```


<!-- ComponentEnd: Grid, TreeGrid -->

### Title

Setting a title for the toolbar in your grid is achieved by using the [`IgcGridToolbarTitleComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbartitlecomponent.html).

Users can provide anything from simple text to more involved templates.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```html
<igc-grid-toolbar>
    <igc-grid-toolbar-title>Grid toolbar title</igc-grid-toolbar-title>
</igc-grid-toolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

### Actions

The [`IgcGridToolbarActionsComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbaractionscomponent.html) is where users can place actions/interactions in relation to the parent grid.
As with the title portion of the toolbar, users can provide anything inside that template part, including the default
toolbar interaction components.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```html
<igc-grid-toolbar>
    <igc-grid-toolbar-actions>
    <!-- ... -->
    </igc-grid-toolbar-actions>
</igc-grid-toolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

### Column Pinning

The [`IgcGridToolbarPinningComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbarpinningcomponent.html) component provides the default UI for interacting with column pinning in the grid.

The component is setup to work out of the box with the parent grid containing the toolbar as well as several input properties for customizing the UI, such as the component title, the placeholder for the component input and the height of the dropdown itself.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```html
<igc-grid-toolbar>
    <igc-grid-toolbar-actions>
        <igc-grid-toolbar-pinning
            title="Grid pinned columns"
            prompt="Filter column collection"
            column-list-height="400px">
        </igc-grid-toolbar-pinning>
    </igc-grid-toolbar-actions>
</igc-grid-toolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

### Column Hiding

The [`IgcGridToolbarHidingComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbarhidingcomponent.html) provides the default UI for interacting with column hiding. Exposes the same input properties for customizing the UI, such as the component
title, the placeholder for the component input and the height of the dropdown itself.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```html
<igc-grid-toolbar>
    <igc-grid-toolbar-actions>
        <igc-grid-toolbar-hiding
            title="Grid column hiding"
            prompt="Filter column collection"
            column-list-height="400px">
        </igc-grid-toolbar-hiding>
    </igc-grid-toolbar-actions>
</igc-grid-toolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

### Advanced Filtering

Toolbar Advanced Filtering component provides the default UI for the Advanced Filtering feature. The component exposes a way to change the default text of the button.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```html
<igc-grid-toolbar>
    <igc-grid-toolbar-actions>
        <igc-grid-toolbar-advanced-filtering>Custom text for the toggle button</igc-grid-toolbar-advanced-filtering>
    </igc-grid-toolbar-actions>
</igc-grid-toolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

### Data Exporting

As with the rest of the toolbar actions, exporting is provided through a [`IgcGridToolbarExporterComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbarexportercomponent.html) out of the box.

The toolbar exporter component exposes several input properties for customizing both the UI and the exporting experience.

These range from changing the display text, to enabling/disabling options in the dropdown to customizing the name of the generated file. For full reference, consult the API documentation for the `ToolbarExporter`.

Here is a snippet showing some of the options which can be customized through the Web Components template:

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```html
<igc-grid-toolbar>
    <igc-grid-toolbar-actions>
        <igc-grid-toolbar-exporter export-csv="true" export-excel="true" filename="exported_data">
        </igc-grid-toolbar-exporter>
    </igc-grid-toolbar-actions>
</igc-grid-toolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

In addition to changing the exported filename, the user can further configure the exporter options by waiting for the `ToolbarExporting` event and customizing the options entry in the event properties.

> [!Note]
> By default when exporting to CSV the exporter exports using a comma separator and uses a '.csv' extension for the output file.
> You can customize these exporting parameters by subscribing to events of the exporter or changing the values of the exporter options fields.
> You can also cancel the export process by setting the cancel field of the event args to true.

The following code snippet demonstrates subscribing to the toolbar exporting event and configuring the exporter options:

<!-- ComponentStart: TreeGrid -->

```html
<igc-tree-grid id="treeGrid"></igc-tree-grid>
```

```ts
constructor() {
    var treeGrid = document.getElementById('treeGrid') as IgcTreeGridComponent;
    treeGrid.addEventListener("toolbarExporting", this.configureExport);
}

public configureExport(evt: CustomEvent<IgcGridToolbarExportEventArgs>) {
    const args = evt.detail;
    const options: IgcExporterOptionsBase = args.options;
    if (options) {
        options.fileName = `Report_${new Date().toDateString()}`;
        (args.exporter as any).columnExporting.subscribe((columnArgs: any) => {
            columnArgs.cancel = columnArgs.header === 'Name';
        });
    }
}
```

<!-- ComponentEnd: TreeGrid -->

The following sample demonstrates how to customize the exported files:

```typescript
export class EmployeesFlatAvatarsItem {
    public constructor(init: Partial<EmployeesFlatAvatarsItem>) {
        Object.assign(this, init);
    }

    public Age: number;
    public Avatar: string;
    public HireDate: string;
    public ID: number;
    public Name: string;
    public ParentID: number;
    public Title: string;

}
export class EmployeesFlatAvatars extends Array<EmployeesFlatAvatarsItem> {
    public constructor(items: Array<EmployeesFlatAvatarsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesFlatAvatarsItem({ Age: 55, Avatar: `https://dl.infragistics.com/x/img/people/men/25.png`, HireDate: `2008-03-20`, ID: 1, Name: `Johnathan Winchester`, ParentID: -1, Title: `Development Manager` }),
                new EmployeesFlatAvatarsItem({ Age: 42, Avatar: `https://dl.infragistics.com/x/img/people/women/14.png`, HireDate: `2014-01-22`, ID: 4, Name: `Ana Sanders`, ParentID: -1, Title: `CEO` }),
                new EmployeesFlatAvatarsItem({ Age: 49, Avatar: `https://dl.infragistics.com/x/img/people/women/12.png`, HireDate: `2014-01-22`, ID: 18, Name: `Victoria Lincoln`, ParentID: -1, Title: `Accounting Manager` }),
                // ... 15 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.cell__inner {
    display: flex;
    align-items: center;
}
.name {
    margin-left: 30px;
}
```


## Exporting Indicator

When using the default toolbar exporter component, whenever an export operation takes place the toolbar will show a progress indicator while the operation is in progress.

Moreover, users can set the toolbar [`showProgress`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbarcomponent.html#showProgress) property and use for their own long running operations or just as another way to signify an action taking place in the grid.

The sample belows uses has significant amount of data, in order to increase the time needed for data export so the progressbar can be seen. Additionally it has another button that simulates a long running operation in the grid:

<!-- NOTE this sample is differed -->

```typescript
export class OrdersTreeDataItem {
    public constructor(init: Partial<OrdersTreeDataItem>) {
        Object.assign(this, init);
    }

    public ID: number;
    public ParentID: number;
    public Name: string;
    public Category: string;
    public OrderDate: string;
    public Units: number;
    public UnitPrice: number;
    public Price: number;
    public Delivered: boolean;

}
export class OrdersTreeData extends Array<OrdersTreeDataItem> {
    public constructor(items: Array<OrdersTreeDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new OrdersTreeDataItem(
                {
                    ID: 1,
                    ParentID: -1,
                    Name: `Order 1`,
                    Category: ``,
                    OrderDate: `2010-02-17`,
                    Units: 1844,
                    UnitPrice: 3.73,
                    Price: 6884.38,
                    Delivered: true
                }),
                new OrdersTreeDataItem(
                {
                    ID: 101,
                    ParentID: 1,
                    Name: `Chocolate Chip Cookies`,
                    Category: `Cookies`,
                    OrderDate: `2010-02-17`,
                    Units: 834,
                    UnitPrice: 3.59,
                    Price: 2994.06,
                    Delivered: true
                }),
                new OrdersTreeDataItem(
                {
                    ID: 102,
                    ParentID: 1,
                    Name: `Red Apples`,
                    Category: `Fruit`,
                    OrderDate: `2010-02-17`,
                    Units: 371,
                    UnitPrice: 3.66,
                    Price: 1357.86,
                    Delivered: true
                }),
                // ... 19 more items
            ];
            super(...(newItems.slice(0, items)));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Custom Content

If the actions part of the toolbar component is not sufficient for a particular use case, the toolbar itself has a general content projection where users can provide additional UI. If the user needs the respective grid instance for API calls or bindings, they can create a template reference variable.

Here is a sample snippet:

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```html
<igc-tree-grid id="grid">
    <igc-grid-toolbar>
        <igc-grid-toolbar-title>title</igx-grid-toolbar-title>
        <!--
            Everything between the toolbar tags except the default toolbar components/directives
            will be projected as custom content.
         -->
        <igc-grid-toolbar-actions>
        </igc-grid-toolbar-actions>
    </igc-grid-toolbar>
</igc-tree-grid>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

The following sample demonstrates how to add an additional button to the toolbar to clear the sorting set by clicking on the columns' headers:

```typescript
export class EmployeesFlatAvatarsItem {
    public constructor(init: Partial<EmployeesFlatAvatarsItem>) {
        Object.assign(this, init);
    }

    public Age: number;
    public Avatar: string;
    public HireDate: string;
    public ID: number;
    public Name: string;
    public ParentID: number;
    public Title: string;

}
export class EmployeesFlatAvatars extends Array<EmployeesFlatAvatarsItem> {
    public constructor(items: Array<EmployeesFlatAvatarsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesFlatAvatarsItem({ Age: 55, Avatar: `https://dl.infragistics.com/x/img/people/men/25.png`, HireDate: `2008-03-20`, ID: 1, Name: `Johnathan Winchester`, ParentID: -1, Title: `Development Manager` }),
                new EmployeesFlatAvatarsItem({ Age: 42, Avatar: `https://dl.infragistics.com/x/img/people/women/14.png`, HireDate: `2014-01-22`, ID: 4, Name: `Ana Sanders`, ParentID: -1, Title: `CEO` }),
                new EmployeesFlatAvatarsItem({ Age: 49, Avatar: `https://dl.infragistics.com/x/img/people/women/12.png`, HireDate: `2014-01-22`, ID: 18, Name: `Victoria Lincoln`, ParentID: -1, Title: `Accounting Manager` }),
                // ... 15 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
.cell__inner {
    display: flex;
    align-items: center;
}

.name {
    margin-left: 30px;
}
```


## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```html
<igc-tree-grid class="grid"></igc-tree-grid>
```

Then set the related CSS properties for that class:

```css
.grid {
    --ig-grid-toolbar-background-color: #2a2b2f;
    --ig-grid-toolbar-title-text-color: #ffcd0f;
    --ig-grid-toolbar-dropdown-background: #2a2b2f;
}
```

### Demo

```typescript
export class EmployeesFlatAvatarsItem {
    public constructor(init: Partial<EmployeesFlatAvatarsItem>) {
        Object.assign(this, init);
    }

    public Age: number;
    public Avatar: string;
    public HireDate: string;
    public ID: number;
    public Name: string;
    public ParentID: number;
    public Title: string;

}
export class EmployeesFlatAvatars extends Array<EmployeesFlatAvatarsItem> {
    public constructor(items: Array<EmployeesFlatAvatarsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesFlatAvatarsItem({ Age: 55, Avatar: `https://dl.infragistics.com/x/img/people/men/25.png`, HireDate: `2008-03-20`, ID: 1, Name: `Johnathan Winchester`, ParentID: -1, Title: `Development Manager` }),
                new EmployeesFlatAvatarsItem({ Age: 42, Avatar: `https://dl.infragistics.com/x/img/people/women/14.png`, HireDate: `2014-01-22`, ID: 4, Name: `Ana Sanders`, ParentID: -1, Title: `CEO` }),
                new EmployeesFlatAvatarsItem({ Age: 49, Avatar: `https://dl.infragistics.com/x/img/people/women/12.png`, HireDate: `2014-01-22`, ID: 18, Name: `Victoria Lincoln`, ParentID: -1, Title: `Accounting Manager` }),
                // ... 15 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.cell__inner {
    display: flex;
    align-items: center;
}
.name {
    margin-left: 30px;
}

#grid {
    --ig-grid-toolbar-background-color: #2a2b2f;
    --ig-grid-toolbar-title-text-color: #ffcd0f;
    --ig-grid-toolbar-dropdown-background: #2a2b2f;
}
```


## API References

The Grid Toolbar service has a few more APIs to explore, which are listed below.

- [`IgcGridToolbarAdvancedFiltering`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbaradvancedfiltering.html)
- [`IgcGridToolbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbarcomponent.html)
- [`IgcGridToolbarExporterComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbarexportercomponent.html)
- [`IgcGridToolbarHidingComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbarhidingcomponent.html)
- [`IgcGridToolbarPinningComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbarpinningcomponent.html)
- [`IgcGridToolbarTitleComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbartitlecomponent.html)

[`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) Events:

- `ToolbarExporting`

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
