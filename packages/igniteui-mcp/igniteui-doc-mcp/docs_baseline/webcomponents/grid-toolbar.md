---
title: Web Components Grid for Ignite UI for Web Components for
_description: Use Web Components Grid for essential UI operations. Hosts different UI controls for the Grid’s features - column hiding, pinning, excel exporting, etc.
_keywords: Web Components, Grid, Grid, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["GridToolbar"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid", "GridToolbarActions"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/toolbar
_tocName: Toolbar
_premium: true
---

# Web Components Grid Toolbar

The Ignite UI for Web Components Toolbar in is a container for UI operations in the Web Components Grid. The Web Components toolbar is located at the top of the Web Components component, i.e., the [`grid`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbar.html#grid) and it matches its horizontal size. The toolbar container can host any custom content or set of predefined UI controls. The default set for the Web Components Grid includes:

- Column Hiding
- Column Pinning
- Excel Exporting
- Advanced Filtering

The toolbar and the predefined UI components support Web Components events and expose API for developers.

<!-- ComponentStart: Grid, TreeGrid -->

## Web Components Toolbar Grid Example

```typescript
export class AthletesDataItem {
    public constructor(init: Partial<AthletesDataItem>) {
        Object.assign(this, init);
    }

    public Id: number;
    public Avatar: string;
    public Position: string;
    public Name: string;
    public AthleteNumber: number;
    public BeatsPerMinute: number;
    public TopSpeed: number;
    public Registered: string;
    public TrackProgress: number;
    public CountryFlag: string;
    public CountryName: string;

}
export class AthletesData extends Array<AthletesDataItem> {
    public constructor(items: Array<AthletesDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AthletesDataItem({ Id: 100, Avatar: `https://dl.infragistics.com/x/img/people/women/20.png`, Position: `current`, Name: `Alexis Walker`, AthleteNumber: 43183, BeatsPerMinute: 103, TopSpeed: 5.8, Registered: `2017-08-07T10:35:06-03:00`, TrackProgress: 45, CountryFlag: `https://dl.infragistics.com/x/img/flags/GH.png`, CountryName: `Ghana` }),
                new AthletesDataItem({ Id: 101, Avatar: `https://dl.infragistics.com/x/img/people/women/31.png`, Position: `down`, Name: `Lavínia Silva`, AthleteNumber: 33994, BeatsPerMinute: 93, TopSpeed: 5.6, Registered: `2017-03-22T08:55:46-02:00`, TrackProgress: 45, CountryFlag: `https://dl.infragistics.com/x/img/flags/NO.png`, CountryName: `Norway` }),
                new AthletesDataItem({ Id: 105, Avatar: `https://dl.infragistics.com/x/img/people/men/13.png`, Position: `down`, Name: `Samu Hokkanen`, AthleteNumber: 22469, BeatsPerMinute: 106, TopSpeed: 5.5, Registered: `2017-06-29T04:58:27-03:00`, TrackProgress: 25, CountryFlag: `https://dl.infragistics.com/x/img/flags/AZ.png`, CountryName: `Azerbaijan` }),
                // ... 182 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<!-- ComponentEnd: Grid, TreeGrid -->

The predefined [`IgcGridToolbarActions`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbaractions.html) and [`IgcGridToolbarTitle`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbartitle.html) UI components are added inside the [`IgcGridToolbar`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbar.html) and this is all needed to have a toolbar providing default interactions with the corresponding Grid features:

```html
<igc-grid id="grid" auto-generate="true">
    <igc-grid-toolbar>
        <igc-grid-toolbar-title>Grid Toolbar</igc-grid-toolbar-title>
        <igc-grid-toolbar-actions>
            <igc-grid-toolbar-advanced-filtering><igc-grid-toolbar-advanced-filtering>
            <igc-grid-toolbar-hiding></igc-grid-toolbar-hiding>
            <igc-grid-toolbar-pinning></igc-grid-toolbar-pinning>
            <igc-grid-toolbar-exporter></igc-grid-toolbar-exporter>
        </igc-grid-toolbar-actions>
    </igc-grid-toolbar>
</igc-grid>
```

<!-- ComponentEnd: Grid -->

> [!Note]
> As seen in the code snippet above, the predefined `Actions` UI components are wrapped in the [`IgcGridToolbarActions`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbaractions.html) container. This way, the toolbar title is aligned to the left of the toolbar and the actions are aligned to the right of the toolbar.

Of course, each of these UIs can be added independently of each other, or may not be added at all. This way the toolbar container will be rendered empty:

```html
<igc-grid auto-generate="true">
    <igc-grid-toolbar>
    </igc-grid-toolbar>
</igc-grid>
```

## Features

The toolbar is great at separating logic/interactions which affects the grid as a whole.

As shown above, it can be configured to provide default components for controlling, column hiding, column pinning, advanced filtering and exporting data from the grid.

These features can be enabled independently from each other by following a pattern similar to the card component of the Ignite UI for Web Components suite.

Listed below are the main features of the toolbar with example code for each of them.

<!-- ComponentStart: Grid, TreeGrid -->

```typescript
export class AthletesDataItem {
    public constructor(init: Partial<AthletesDataItem>) {
        Object.assign(this, init);
    }

    public Id: number;
    public Avatar: string;
    public Position: string;
    public Name: string;
    public AthleteNumber: number;
    public BeatsPerMinute: number;
    public TopSpeed: number;
    public Registered: string;
    public TrackProgress: number;
    public CountryFlag: string;
    public CountryName: string;

}
export class AthletesData extends Array<AthletesDataItem> {
    public constructor(items: Array<AthletesDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AthletesDataItem({ Id: 100, Avatar: `https://dl.infragistics.com/x/img/people/women/20.png`, Position: `current`, Name: `Alexis Walker`, AthleteNumber: 43183, BeatsPerMinute: 103, TopSpeed: 5.8, Registered: `2017-08-07T10:35:06-03:00`, TrackProgress: 45, CountryFlag: `https://dl.infragistics.com/x/img/flags/GH.png`, CountryName: `Ghana` }),
                new AthletesDataItem({ Id: 101, Avatar: `https://dl.infragistics.com/x/img/people/women/31.png`, Position: `down`, Name: `Lavínia Silva`, AthleteNumber: 33994, BeatsPerMinute: 93, TopSpeed: 5.6, Registered: `2017-03-22T08:55:46-02:00`, TrackProgress: 45, CountryFlag: `https://dl.infragistics.com/x/img/flags/NO.png`, CountryName: `Norway` }),
                new AthletesDataItem({ Id: 105, Avatar: `https://dl.infragistics.com/x/img/people/men/13.png`, Position: `down`, Name: `Samu Hokkanen`, AthleteNumber: 22469, BeatsPerMinute: 106, TopSpeed: 5.5, Registered: `2017-06-29T04:58:27-03:00`, TrackProgress: 25, CountryFlag: `https://dl.infragistics.com/x/img/flags/AZ.png`, CountryName: `Azerbaijan` }),
                // ... 182 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<!-- ComponentEnd: Grid, TreeGrid -->

### Title

Setting a title for the toolbar in your grid is achieved by using the [`IgcGridToolbarTitle`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbartitle.html).

Users can provide anything from simple text to more involved templates.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```html
<igc-grid-toolbar>
    <igc-grid-toolbar-title>Grid toolbar title</igc-grid-toolbar-title>
</igc-grid-toolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

### Actions

The [`IgcGridToolbarActions`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbaractions.html) is where users can place actions/interactions in relation to the parent grid.
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

The [`IgcGridToolbarPinning`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbarpinning.html) component provides the default UI for interacting with column pinning in the grid.

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

The [`IgcGridToolbarHiding`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbarhiding.html) provides the default UI for interacting with column hiding. Exposes the same input properties for customizing the UI, such as the component
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

As with the rest of the toolbar actions, exporting is provided through a [`IgcGridToolbarExporter`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbarexporter.html) out of the box.

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

<!-- ComponentStart: Grid -->

```html
<igc-grid id="toolbarExporter"></igc-grid>
```

```ts
constructor() {
    var toolbarExporter = this.toolbarExporter = document.getElementById('toolbarExporter') as IgcGridToolbarExporterComponent;
    toolbarExporter.addEventListener("toolbarExporting", this.configureExport);
}
```

```typescript
public configureExport(evt: CustomEvent<IgcGridToolbarExportEventArgs>) {
    const args = evt.detail;
    const options: IgcExporterOptionsBase = args.options;

    options.fileName = `Report_${new Date().toDateString()}`;
    (args.exporter as any).columnExporting.subscribe((columnArgs: any) => {
            columnArgs.cancel = columnArgs.header === 'Athlete' || columnArgs.header === 'Country';
    });
}
```

<!-- ComponentEnd: Grid -->

The following sample demonstrates how to customize the exported files:

```typescript
export class AthletesDataItem {
    public constructor(init: Partial<AthletesDataItem>) {
        Object.assign(this, init);
    }

    public Id: number;
    public Avatar: string;
    public Position: string;
    public Name: string;
    public AthleteNumber: number;
    public BeatsPerMinute: number;
    public TopSpeed: number;
    public Registered: string;
    public TrackProgress: number;
    public CountryFlag: string;
    public CountryName: string;

}
export class AthletesData extends Array<AthletesDataItem> {
    public constructor(items: Array<AthletesDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AthletesDataItem({ Id: 100, Avatar: `https://dl.infragistics.com/x/img/people/women/20.png`, Position: `current`, Name: `Alexis Walker`, AthleteNumber: 43183, BeatsPerMinute: 103, TopSpeed: 5.8, Registered: `2017-08-07T10:35:06-03:00`, TrackProgress: 45, CountryFlag: `https://dl.infragistics.com/x/img/flags/GH.png`, CountryName: `Ghana` }),
                new AthletesDataItem({ Id: 101, Avatar: `https://dl.infragistics.com/x/img/people/women/31.png`, Position: `down`, Name: `Lavínia Silva`, AthleteNumber: 33994, BeatsPerMinute: 93, TopSpeed: 5.6, Registered: `2017-03-22T08:55:46-02:00`, TrackProgress: 45, CountryFlag: `https://dl.infragistics.com/x/img/flags/NO.png`, CountryName: `Norway` }),
                new AthletesDataItem({ Id: 105, Avatar: `https://dl.infragistics.com/x/img/people/men/13.png`, Position: `down`, Name: `Samu Hokkanen`, AthleteNumber: 22469, BeatsPerMinute: 106, TopSpeed: 5.5, Registered: `2017-06-29T04:58:27-03:00`, TrackProgress: 25, CountryFlag: `https://dl.infragistics.com/x/img/flags/AZ.png`, CountryName: `Azerbaijan` }),
                // ... 182 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Exporting Indicator

When using the default toolbar exporter component, whenever an export operation takes place the toolbar will show a progress indicator while the operation is in progress.

Moreover, users can set the toolbar [`showProgress`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbar.html#showProgress) property and use for their own long running operations or just as another way to signify an action taking place in the grid.

The sample belows uses has significant amount of data, in order to increase the time needed for data export so the progressbar can be seen. Additionally it has another button that simulates a long running operation in the grid:

<!-- NOTE this sample is differed -->

```typescript
export class AthletesDataItem {
    public constructor(init: Partial<AthletesDataItem>) {
        Object.assign(this, init);
    }

    public Id: number;
    public Avatar: string;
    public Position: string;
    public Name: string;
    public AthleteNumber: number;
    public BeatsPerMinute: number;
    public TopSpeed: number;
    public Registered: string;
    public TrackProgress: number;
    public CountryFlag: string;
    public CountryName: string;

}
export class AthletesData extends Array<AthletesDataItem> {
    public constructor(items: Array<AthletesDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AthletesDataItem({ Id: 100, Avatar: `https://dl.infragistics.com/x/img/people/women/20.png`, Position: `current`, Name: `Alexis Walker`, AthleteNumber: 43183, BeatsPerMinute: 103, TopSpeed: 5.8, Registered: `2017-08-07T10:35:06-03:00`, TrackProgress: 45, CountryFlag: `https://dl.infragistics.com/x/img/flags/GH.png`, CountryName: `Ghana` }),
                new AthletesDataItem({ Id: 101, Avatar: `https://dl.infragistics.com/x/img/people/women/31.png`, Position: `down`, Name: `Lavínia Silva`, AthleteNumber: 33994, BeatsPerMinute: 93, TopSpeed: 5.6, Registered: `2017-03-22T08:55:46-02:00`, TrackProgress: 45, CountryFlag: `https://dl.infragistics.com/x/img/flags/NO.png`, CountryName: `Norway` }),
                new AthletesDataItem({ Id: 105, Avatar: `https://dl.infragistics.com/x/img/people/men/13.png`, Position: `down`, Name: `Samu Hokkanen`, AthleteNumber: 22469, BeatsPerMinute: 106, TopSpeed: 5.5, Registered: `2017-06-29T04:58:27-03:00`, TrackProgress: 25, CountryFlag: `https://dl.infragistics.com/x/img/flags/AZ.png`, CountryName: `Azerbaijan` }),
                // ... 182 more items
            ];
            super(...newItems.slice(0));
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
<igc-grid id="grid">
    <igc-grid-toolbar>
        <igc-grid-toolbar-title>title</igx-grid-toolbar-title>
        <!--
            Everything between the toolbar tags except the default toolbar components/directives
            will be projected as custom content.
         -->
        <igc-grid-toolbar-actions>
        </igc-grid-toolbar-actions>
    </igc-grid-toolbar>
</igc-grid>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

The following sample demonstrates how to add an additional button to the toolbar to clear the sorting set by clicking on the columns' headers:

```typescript
export class AthletesDataItem {
    public constructor(init: Partial<AthletesDataItem>) {
        Object.assign(this, init);
    }

    public Id: number;
    public Avatar: string;
    public Position: string;
    public Name: string;
    public AthleteNumber: number;
    public BeatsPerMinute: number;
    public TopSpeed: number;
    public Registered: string;
    public TrackProgress: number;
    public CountryFlag: string;
    public CountryName: string;

}
export class AthletesData extends Array<AthletesDataItem> {
    public constructor(items: Array<AthletesDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AthletesDataItem({ Id: 100, Avatar: `https://dl.infragistics.com/x/img/people/women/20.png`, Position: `current`, Name: `Alexis Walker`, AthleteNumber: 43183, BeatsPerMinute: 103, TopSpeed: 5.8, Registered: `2017-08-07T10:35:06-03:00`, TrackProgress: 45, CountryFlag: `https://dl.infragistics.com/x/img/flags/GH.png`, CountryName: `Ghana` }),
                new AthletesDataItem({ Id: 101, Avatar: `https://dl.infragistics.com/x/img/people/women/31.png`, Position: `down`, Name: `Lavínia Silva`, AthleteNumber: 33994, BeatsPerMinute: 93, TopSpeed: 5.6, Registered: `2017-03-22T08:55:46-02:00`, TrackProgress: 45, CountryFlag: `https://dl.infragistics.com/x/img/flags/NO.png`, CountryName: `Norway` }),
                new AthletesDataItem({ Id: 105, Avatar: `https://dl.infragistics.com/x/img/people/men/13.png`, Position: `down`, Name: `Samu Hokkanen`, AthleteNumber: 22469, BeatsPerMinute: 106, TopSpeed: 5.5, Registered: `2017-06-29T04:58:27-03:00`, TrackProgress: 25, CountryFlag: `https://dl.infragistics.com/x/img/flags/AZ.png`, CountryName: `Azerbaijan` }),
                // ... 182 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```html
<igc-grid class="grid"></igc-grid>
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
export class AthletesDataItem {
    public constructor(init: Partial<AthletesDataItem>) {
        Object.assign(this, init);
    }

    public Id: number;
    public Avatar: string;
    public Position: string;
    public Name: string;
    public AthleteNumber: number;
    public BeatsPerMinute: number;
    public TopSpeed: number;
    public Registered: string;
    public TrackProgress: number;
    public CountryFlag: string;
    public CountryName: string;

}
export class AthletesData extends Array<AthletesDataItem> {
    public constructor(items: Array<AthletesDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AthletesDataItem({ Id: 100, Avatar: `https://dl.infragistics.com/x/img/people/women/20.png`, Position: `current`, Name: `Alexis Walker`, AthleteNumber: 43183, BeatsPerMinute: 103, TopSpeed: 5.8, Registered: `2017-08-07T10:35:06-03:00`, TrackProgress: 45, CountryFlag: `https://dl.infragistics.com/x/img/flags/GH.png`, CountryName: `Ghana` }),
                new AthletesDataItem({ Id: 101, Avatar: `https://dl.infragistics.com/x/img/people/women/31.png`, Position: `down`, Name: `Lavínia Silva`, AthleteNumber: 33994, BeatsPerMinute: 93, TopSpeed: 5.6, Registered: `2017-03-22T08:55:46-02:00`, TrackProgress: 45, CountryFlag: `https://dl.infragistics.com/x/img/flags/NO.png`, CountryName: `Norway` }),
                new AthletesDataItem({ Id: 105, Avatar: `https://dl.infragistics.com/x/img/people/men/13.png`, Position: `down`, Name: `Samu Hokkanen`, AthleteNumber: 22469, BeatsPerMinute: 106, TopSpeed: 5.5, Registered: `2017-06-29T04:58:27-03:00`, TrackProgress: 25, CountryFlag: `https://dl.infragistics.com/x/img/flags/AZ.png`, CountryName: `Azerbaijan` }),
                // ... 182 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

#grid {
    --ig-grid-toolbar-background-color: #2a2b2f;
    --ig-grid-toolbar-title-text-color: #ffcd0f;
    --ig-grid-toolbar-dropdown-background: #2a2b2f;
}
```

## API References

The Grid Toolbar service has a few more APIs to explore, which are listed below.

- [`IgcGridToolbarAdvancedFiltering`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbaradvancedfiltering.html)
- [`IgcGridToolbar`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbar.html)
- [`IgcGridToolbarExporter`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbarexporter.html)
- [`IgcGridToolbarHiding`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbarhiding.html)
- [`IgcGridToolbarPinning`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbarpinning.html)
- [`IgcGridToolbarTitle`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbartitle.html)

[`grid`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbar.html#grid) Events:

- `ToolbarExporting`

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
