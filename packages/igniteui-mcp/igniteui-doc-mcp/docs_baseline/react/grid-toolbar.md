---
title: React Grid for Ignite UI for React for
_description: Use React Grid for essential UI operations. Hosts different UI controls for the Grid’s features - column hiding, pinning, excel exporting, etc.
_keywords: React, Grid, Grid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["GridToolbar"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid", "GridToolbarActions"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/toolbar
_tocName: Toolbar
_premium: true
---

# React Grid Toolbar

The Ignite UI for React Toolbar in is a container for UI operations in the React Grid. The React toolbar is located at the top of the React component, i.e., the [`grid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbar.html#grid) and it matches its horizontal size. The toolbar container can host any custom content or set of predefined UI controls. The default set for the React Grid includes:

- Column Hiding
- Column Pinning
- Excel Exporting
- Advanced Filtering

The toolbar and the predefined UI components support React events and expose API for developers.

<!-- ComponentStart: Grid, TreeGrid -->

## React Toolbar Grid Example

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarAdvancedFiltering, IgrGridToolbarHiding, IgrGridToolbarPinning, IgrGridToolbarExporter, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule } from 'igniteui-react-core';
import { AthletesDataItem, AthletesData } from './AthletesData';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    private gridToolbar: IgrGridToolbar
    private gridToolbarActions: IgrGridToolbarActions
    private gridToolbarAdvancedFiltering: IgrGridToolbarAdvancedFiltering
    private gridToolbarHiding: IgrGridToolbarHiding
    private gridToolbarPinning: IgrGridToolbarPinning
    private gridToolbarExporter: IgrGridToolbarExporter
    private column: IgrColumn

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    data={this.athletesData}>
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarAdvancedFiltering
                            >
                            </IgrGridToolbarAdvancedFiltering>
                            <IgrGridToolbarHiding
                            >
                            </IgrGridToolbarHiding>
                            <IgrGridToolbarPinning
                            >
                            </IgrGridToolbarPinning>
                            <IgrGridToolbarExporter
                            >
                            </IgrGridToolbarExporter>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="Name"
                        header="Athlete"
                        width="200px">
                    </IgrColumn>
                    <IgrColumn
                        field="CountryName"
                        header="Country"
                        width="200px">
                    </IgrColumn>
                    <IgrColumn
                        field="BeatsPerMinute"
                        header="Beats Per Minute">
                    </IgrColumn>
                    <IgrColumn
                        field="TopSpeed"
                        header="Top Speed">
                    </IgrColumn>
                    <IgrColumn
                        field="AthleteNumber"
                        header="ID">
                    </IgrColumn>
                    <IgrColumn
                        field="TrackProgress"
                        header="Progress">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _athletesData: AthletesData = null;
    public get athletesData(): AthletesData {
        if (this._athletesData == null)
        {
            this._athletesData = new AthletesData();
        }
        return this._athletesData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


<!-- ComponentEnd: Grid, TreeGrid -->

The predefined [`IgrGridToolbarActions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbaractions.html) and [`IgrGridToolbarTitle`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbartitle.html) UI components are added inside the [`IgrGridToolbar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbar.html) and this is all needed to have a toolbar providing default interactions with the corresponding Grid features:

```tsx
<IgrGrid>
    <IgrGridToolbar>
        <IgrGridToolbarTitle>
           Grid Toolbar
        </IgrGridToolbarTitle>
        <IgrGridToolbarActions>
            <IgrGridToolbarAdvancedFiltering></IgrGridToolbarAdvancedFiltering>
            <IgrGridToolbarPinning></IgrGridToolbarPinning>
            <IgrGridToolbarHiding></IgrGridToolbarHiding>
            <IgrGridToolbarExporter></IgrGridToolbarExporter>
        </IgrGridToolbarActions>
    </IgrGridToolbar>
</IgrGrid>
```

<!-- ComponentEnd: Grid -->

<!-- React -->

<!-- end: React -->

<!-- React -->

<!-- end: React -->

> \[!Note]
> As seen in the code snippet above, the predefined `Actions` UI components are wrapped in the [`IgrGridToolbarActions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbaractions.html) container. This way, the toolbar title is aligned to the left of the toolbar and the actions are aligned to the right of the toolbar.

Of course, each of these UIs can be added independently of each other, or may not be added at all. This way the toolbar container will be rendered empty:

```tsx
<IgrGrid>
    <IgrGridToolbar>
    </IgrGridToolbar>
</IgrGrid>
```

<!-- ComponentEnd: Grid -->

<!-- React -->

<!-- end: React -->

<!-- React -->

<!-- end: React -->

For a comprehensive look over each of the default UI components, continue reading the **Features** section below.

<!-- React -->

<!-- end: Angular, WebComponents, React -->

## Features

The toolbar is great at separating logic/interactions which affects the grid as a whole.

As shown above, it can be configured to provide default components for controlling, column hiding, column pinning, advanced filtering and exporting data from the grid.

These features can be enabled independently from each other by following a pattern similar to the card component of the Ignite UI for React suite.

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarAdvancedFiltering, IgrGridToolbarHiding, IgrGridToolbarPinning, IgrGridToolbarExporter, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule } from 'igniteui-react-core';
import { AthletesDataItem, AthletesData } from './AthletesData';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    private gridToolbar: IgrGridToolbar
    private gridToolbarActions: IgrGridToolbarActions
    private gridToolbarAdvancedFiltering: IgrGridToolbarAdvancedFiltering
    private gridToolbarHiding: IgrGridToolbarHiding
    private gridToolbarPinning: IgrGridToolbarPinning
    private gridToolbarExporter: IgrGridToolbarExporter
    private column: IgrColumn

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    data={this.athletesData}>
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarAdvancedFiltering
                            >
                            </IgrGridToolbarAdvancedFiltering>
                            <IgrGridToolbarHiding
                            >
                            </IgrGridToolbarHiding>
                            <IgrGridToolbarPinning
                            >
                            </IgrGridToolbarPinning>
                            <IgrGridToolbarExporter
                            >
                            </IgrGridToolbarExporter>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="Name"
                        header="Athlete"
                        width="200px">
                    </IgrColumn>
                    <IgrColumn
                        field="CountryName"
                        header="Country"
                        width="200px">
                    </IgrColumn>
                    <IgrColumn
                        field="BeatsPerMinute"
                        header="Beats Per Minute">
                    </IgrColumn>
                    <IgrColumn
                        field="TopSpeed"
                        header="Top Speed">
                    </IgrColumn>
                    <IgrColumn
                        field="AthleteNumber"
                        header="ID">
                    </IgrColumn>
                    <IgrColumn
                        field="TrackProgress"
                        header="Progress">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _athletesData: AthletesData = null;
    public get athletesData(): AthletesData {
        if (this._athletesData == null)
        {
            this._athletesData = new AthletesData();
        }
        return this._athletesData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


<!-- ComponentEnd: Grid, TreeGrid -->

### Title

Setting a title for the toolbar in your grid is achieved by using the [`IgrGridToolbarTitle`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbartitle.html).

Users can provide anything from simple text to more involved templates.

<!-- React -->

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```tsx
<IgrGridToolbar>
    <IgrGridToolbarTitle>
        Grid toolbar title
    </IgrGridToolbarTitle>
</IgrGridToolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

<!-- end: React -->

### Actions

The [`IgrGridToolbarActions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbaractions.html) is where users can place actions/interactions in relation to the parent grid.
As with the title portion of the toolbar, users can provide anything inside that template part, including the default
toolbar interaction components.

<!-- React -->

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```tsx
<IgrGridToolbar>
    <IgrGridToolbarActions>

    </IgrGridToolbarActions>
</IgrGridToolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

<!-- end: React -->

### Column Pinning

The [`IgrGridToolbarPinning`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbarpinning.html) component provides the default UI for interacting with column pinning in the grid.

The component is setup to work out of the box with the parent grid containing the toolbar as well as several input properties for customizing the UI, such as the component title, the placeholder for the component input and the height of the dropdown itself.

<!-- React -->

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```tsx
<IgrGridToolbar>
    <IgrGridToolbarActions>
        <IgrGridToolbarPinning title="Grid pinned columns" prompt="Filter column collection" columnListHeight="400px"></IgrGridToolbarPinning>
    </IgrGridToolbarActions>
</IgrGridToolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

<!-- end: React -->

### Column Hiding

The [`IgrGridToolbarHiding`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbarhiding.html) provides the default UI for interacting with column hiding. Exposes the same input properties for customizing the UI, such as the component
title, the placeholder for the component input and the height of the dropdown itself.

<!-- React -->

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```tsx
<IgrGridToolbar>
    <IgrGridToolbarActions>
        <IgrGridToolbarHiding title="Grid column hiding" prompt="Filter column collection" columnListHeight="400px"></IgrGridToolbarHiding>
    </IgrGridToolbarActions>
</IgrGridToolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

<!-- end: React -->

### Advanced Filtering

Toolbar Advanced Filtering component provides the default UI for the Advanced Filtering feature. The component exposes a way to change the default text of the button.

<!-- React -->

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```tsx
<IgrGridToolbar>
    <IgrGridToolbarActions>
        <IgrGridToolbarAdvancedFiltering></IgrGridToolbarAdvancedFiltering>
    </IgrGridToolbarActions>
</IgrGridToolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

<!-- end: React -->

### Data Exporting

As with the rest of the toolbar actions, exporting is provided through a [`IgrGridToolbarExporter`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbarexporter.html) out of the box.

The toolbar exporter component exposes several input properties for customizing both the UI and the exporting experience.

These range from changing the display text, to enabling/disabling options in the dropdown to customizing the name of the generated file. For full reference, consult the API documentation for the `ToolbarExporter`.

Here is a snippet showing some of the options which can be customized through the React template:

<!-- React -->

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```tsx
<IgrGridToolbar>
    <IgrGridToolbarActions>
        <IgrGridToolbarExporter exportCSV={true} exportExcel={true} filename="exported_data"></IgrGridToolbarExporter>
    </IgrGridToolbarActions>
</IgrGridToolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

<!-- end: React -->

In addition to changing the exported filename, the user can further configure the exporter options by waiting for the `ToolbarExporting` event and customizing the options entry in the event properties.

> \[!Note]
> By default when exporting to CSV the exporter exports using a comma separator and uses a '.csv' extension for the output file.
> You can customize these exporting parameters by subscribing to events of the exporter or changing the values of the exporter options fields.
> You can also cancel the export process by setting the cancel field of the event args to true.

The following code snippet demonstrates subscribing to the toolbar exporting event and configuring the exporter options:

<!-- ComponentStart: Grid -->

```tsx
const configureExport = (evt: IgrGridToolbarExportEventArgs) => {
    const args = evt.detail;
    const options: IgrExporterOptionsBase = args.options;

    options.fileName = `Report_${new Date().toDateString()}`;
    (args.exporter as any).columnExporting.subscribe((columnArgs: any) => {
            columnArgs.cancel = columnArgs.header === 'Athlete' || columnArgs.header === 'Country';
    });
}

<IgrGrid onToolbarExporting={configureExport}>
</IgrGrid>
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarExporter, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule } from 'igniteui-react-core';
import { AthletesDataItem, AthletesData } from './AthletesData';
import { IgrGridToolbarExportEventArgs, IgrExporterOptionsBase } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    private gridToolbar: IgrGridToolbar
    private gridToolbarActions: IgrGridToolbarActions
    private gridToolbarExporter: IgrGridToolbarExporter
    private column: IgrColumn

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
        this.webGridToolbarExporting = this.webGridToolbarExporting.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    data={this.athletesData}
                    onToolbarExporting={this.webGridToolbarExporting}>
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarExporter
                            >
                            </IgrGridToolbarExporter>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="Name"
                        header="Athlete"
                        width="200px">
                    </IgrColumn>
                    <IgrColumn
                        field="CountryName"
                        header="Country"
                        width="200px">
                    </IgrColumn>
                    <IgrColumn
                        field="BeatsPerMinute"
                        header="Beats Per Minute">
                    </IgrColumn>
                    <IgrColumn
                        field="TopSpeed"
                        header="Top Speed">
                    </IgrColumn>
                    <IgrColumn
                        field="AthleteNumber"
                        header="ID">
                    </IgrColumn>
                    <IgrColumn
                        field="TrackProgress"
                        header="Progress">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _athletesData: AthletesData = null;
    public get athletesData(): AthletesData {
        if (this._athletesData == null)
        {
            this._athletesData = new AthletesData();
        }
        return this._athletesData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webGridToolbarExporting(evt: IgrGridToolbarExportEventArgs): void {
        const args = evt.detail;
        const options: IgrExporterOptionsBase = args.options;
        const exporter = args.exporter as any;
        if (options) {
            options.fileName = `Report_${new Date().toDateString()}`;
            exporter.columnExporting.subscribe((columnArgs: any) => {
                    columnArgs.cancel = columnArgs.header === 'Athlete' || columnArgs.header === 'Country';
            });
        }
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## Exporting Indicator

When using the default toolbar exporter component, whenever an export operation takes place the toolbar will show a progress indicator while the operation is in progress.

Moreover, users can set the toolbar [`showProgress`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbar.html#showProgress) property and use for their own long running operations or just as another way to signify an action taking place in the grid.

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
```tsx
import React, { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import { AthletesData, AthletesDataItem } from "./AthletesData";

import { IgrButton } from "igniteui-react";
import {
  IgrGridToolbar,
  IgrGridToolbarActions,
  IgrGridToolbarExporter,
  IgrGridToolbarTitle,
  IgrGrid,
  IgrColumn,
} from "igniteui-react-grids";


export default function GridDataExportingIndicatorSample() {
  const athletesData = useMemo(() => new AthletesData(), []);
  const [localData, setLocalData] = useState([]);
  const [showProgress, setShowProgress] = useState(false);
  
  useEffect(() => {
    const data: AthletesDataItem[] = [];
    let uniqueId = 0;
    for (let i = 0; i < 2000; i ++) {
      for (let c = 0; c < athletesData.length; c++) {
        data.push({ ...athletesData[c], Id: uniqueId++ });
      }
    }
    setLocalData(data);
  }, [athletesData]);
  

  const setupProgressVisibility = () => {
    setShowProgress(true);

    setTimeout(() => {
      setShowProgress(false);
    }, 5000);
  };

  return (
    <div className="container sample ig-typography">
      <div className="container fill">
        <IgrGrid
          data={localData}
          autoGenerate={false}
          primaryKey="Id"
        >
          <IgrGridToolbar key="toolbar" showProgress={showProgress}>
            <IgrGridToolbarTitle key="toolbarTitle">
              <span key="toolbarTitleText">Grid Toolbar</span>
            </IgrGridToolbarTitle>
            <IgrButton key="btn" onClick={setupProgressVisibility}>
              <span key="simulate">Simulate long running operation</span>
            </IgrButton>
            <IgrGridToolbarActions key="toolbarActions">
              <IgrGridToolbarExporter key="toolbarExporter"></IgrGridToolbarExporter>
            </IgrGridToolbarActions>
          </IgrGridToolbar>

          <IgrColumn field="Id" header="ID" dataType="number" />
          <IgrColumn field="Name" header="Name" />
          <IgrColumn field="Position" header="Position" />
          <IgrColumn field="AthleteNumber" header="Athlete Number" dataType="number" />
          <IgrColumn field="BeatsPerMinute" header="Beats Per Minute" dataType="number" />
          <IgrColumn field="TopSpeed" header="Top Speed" dataType="number" />
          <IgrColumn field="CountryName" header="Country" />
        </IgrGrid>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GridDataExportingIndicatorSample />);
```


<!-- WebComponents, Blazor, React -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```tsx
<IgrGrid className="grid"></IgrGrid>
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarAdvancedFiltering, IgrGridToolbarHiding, IgrGridToolbarPinning, IgrGridToolbarExporter, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule } from 'igniteui-react-core';
import { AthletesDataItem, AthletesData } from './AthletesData';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    data={this.athletesData}
                    ref={this.gridRef}
                    id="grid">
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarAdvancedFiltering
                            >
                            </IgrGridToolbarAdvancedFiltering>
                            <IgrGridToolbarHiding
                            >
                            </IgrGridToolbarHiding>
                            <IgrGridToolbarPinning
                            >
                            </IgrGridToolbarPinning>
                            <IgrGridToolbarExporter
                            >
                            </IgrGridToolbarExporter>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="Name"
                        header="Athlete"
                        width="200px">
                    </IgrColumn>
                    <IgrColumn
                        field="CountryName"
                        header="Country"
                        width="200px">
                    </IgrColumn>
                    <IgrColumn
                        field="BeatsPerMinute"
                        header="Beats Per Minute">
                    </IgrColumn>
                    <IgrColumn
                        field="TopSpeed"
                        header="Top Speed">
                    </IgrColumn>
                    <IgrColumn
                        field="AthleteNumber"
                        header="ID">
                    </IgrColumn>
                    <IgrColumn
                        field="TrackProgress"
                        header="Progress">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _athletesData: AthletesData = null;
    public get athletesData(): AthletesData {
        if (this._athletesData == null)
        {
            this._athletesData = new AthletesData();
        }
        return this._athletesData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


<!-- end: WebComponents, Blazor, React -->

## API References

The Grid Toolbar service has a few more APIs to explore, which are listed below.

- [`IgrGridToolbarAdvancedFiltering`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbaradvancedfiltering.html)
- [`IgrGridToolbar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbar.html)
- [`IgrGridToolbarExporter`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbarexporter.html)
- [`IgrGridToolbarHiding`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbarhiding.html)
- [`IgrGridToolbarPinning`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbarpinning.html)
- [`IgrGridToolbarTitle`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbartitle.html)

[`grid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbar.html#grid) Events:

- `ToolbarExporting`

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
