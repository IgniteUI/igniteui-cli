---
title: React Tree Grid for Ignite UI for React for
_description: Use React Tree Grid for essential UI operations. Hosts different UI controls for the Grid’s features - column hiding, pinning, excel exporting, etc.
_keywords: React, Tree Grid, Tree Grid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["GridToolbar"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid", "GridToolbarActions"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/toolbar
_tocName: Toolbar
_premium: true
---

# React Tree Grid Toolbar

The Ignite UI for React Toolbar in is a container for UI operations in the React Tree Grid. The React toolbar is located at the top of the React component, i.e., the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) and it matches its horizontal size. The toolbar container can host any custom content or set of predefined UI controls. The default set for the React Tree Grid includes:

- Column Hiding
- Column Pinning
- Excel Exporting
- Advanced Filtering

The toolbar and the predefined UI components support React events and expose API for developers.

<!-- ComponentStart: Grid, TreeGrid -->

## React Toolbar Grid Example

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrAvatarModule } from 'igniteui-react';
import { IgrTreeGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarAdvancedFiltering, IgrGridToolbarHiding, IgrGridToolbarPinning, IgrGridToolbarExporter, IgrColumn } from 'igniteui-react-grids';
import { EmployeesFlatAvatarsItem, EmployeesFlatAvatars } from './EmployeesFlatAvatars';
import { IgrAvatar } from 'igniteui-react';
import { IgrCellTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrTreeGridModule,
    IgrAvatarModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private treeGrid: IgrTreeGrid
    private treeGridRef(r: IgrTreeGrid) {
        this.treeGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.treeGridRef = this.treeGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    ref={this.treeGridRef}
                    id="treeGrid"
                    data={this.employeesFlatAvatars}
                    primaryKey="ID"
                    foreignKey="ParentID"
                    allowAdvancedFiltering={true}>
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
                        dataType="string"
                        bodyTemplate={this.webTreeGridAvatarCellTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="ID"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        dataType="date">
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _employeesFlatAvatars: EmployeesFlatAvatars = null;
    public get employeesFlatAvatars(): EmployeesFlatAvatars {
        if (this._employeesFlatAvatars == null)
        {
            this._employeesFlatAvatars = new EmployeesFlatAvatars();
        }
        return this._employeesFlatAvatars;
    }


    public webTreeGridAvatarCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        return (
            <div className="cell__inner">
                <IgrAvatar shape='circle' src={props.dataContext.cell.row.data.Avatar}>
                </IgrAvatar>
                <span className="name">{props.dataContext.cell.value}</span>
            </div>
        );
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


<!-- ComponentEnd: Grid, TreeGrid -->

The predefined [`IgrGridToolbarActions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbaractions.html) and [`IgrGridToolbarTitle`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbartitle.html) UI components are added inside the [`IgrGridToolbar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbar.html) and this is all needed to have a toolbar providing default interactions with the corresponding Grid features:

<!-- ComponentStart: TreeGrid -->

```tsx
<IgrTreeGrid data={data} primaryKey="ID" foreignKey="ParentID" autoGenerate={true}>
    <IgrGridToolbar>
        <IgrGridToolbarTitle>
            Tree Grid Toolbar
        </IgrGridToolbarTitle>
        <IgrGridToolbarActions>
            <IgrGridToolbarAdvancedFiltering></IgrGridToolbarAdvancedFiltering>
            <IgrGridToolbarPinning></IgrGridToolbarPinning>
            <IgrGridToolbarHiding></IgrGridToolbarHiding>
            <IgrGridToolbarExporter></IgrGridToolbarExporter>
        </IgrGridToolbarActions>
    </IgrGridToolbar>
</IgrTreeGrid>
```

<!-- ComponentEnd: TreeGrid -->

> [!Note]
> As seen in the code snippet above, the predefined `Actions` UI components are wrapped in the [`IgrGridToolbarActions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbaractions.html) container. This way, the toolbar title is aligned to the left of the toolbar and the actions are aligned to the right of the toolbar.

Of course, each of these UIs can be added independently of each other, or may not be added at all. This way the toolbar container will be rendered empty:

<!-- ComponentStart: TreeGrid -->

```tsx
<IgrTreeGrid data={data} primaryKey="ID" foreignKey="ParentID" autoGenerate={true}>
    <IgrGridToolbar>
    </IgrGridToolbar>
</IgrTreeGrid>
```

## Features

The toolbar is great at separating logic/interactions which affects the grid as a whole.

As shown above, it can be configured to provide default components for controlling, column hiding, column pinning, advanced filtering and exporting data from the grid.

These features can be enabled independently from each other by following a pattern similar to the card component of the Ignite UI for React suite.

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
```tsx
import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  IgrCellTemplateContext,
  IgrGridToolbar,
  IgrGridToolbarActions,
  IgrGridToolbarAdvancedFiltering,
  IgrGridToolbarExporter,
  IgrGridToolbarHiding,
  IgrGridToolbarPinning,
  IgrGridToolbarTitle,
  IgrTreeGrid,
  IgrTreeGridModule,
} from "igniteui-react-grids";
import { IgrColumn } from "igniteui-react-grids";
import { IgrAvatar, IgrAvatarModule, IgrCheckboxChangeEventArgs, IgrComponentValueChangedEventArgs, IgrInput, IgrInputModule, IgrSwitch, IgrSwitchModule } from "igniteui-react";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";

import { EmployeesFlatAvatars } from "./EmployeesFlatAvatars";

IgrTreeGridModule.register();
IgrAvatarModule.register();
IgrSwitchModule.register();
IgrInputModule.register();

export default function App() {
  const employeesData = new EmployeesFlatAvatars();
  const treeGridRef = useRef<IgrTreeGrid>(null);

  function webTreeGridAvatarCellTemplate(props: {
    dataContext: IgrCellTemplateContext;
  }) {
    return (
      <div className="cell__inner">
        <IgrAvatar
          shape="circle"
          src={props.dataContext.cell.row.data.Avatar}
        ></IgrAvatar>
        <span className="name">{props.dataContext.cell.value}</span>
      </div>
    );
  }

  const spanRef = useRef(null);

  const changeTitle = (event: IgrComponentValueChangedEventArgs) => {
    spanRef.current.innerText = event.detail;
  }

  const enableFiltering = (e: IgrCheckboxChangeEventArgs) => {
    const toolbarFiltering = document.getElementsByTagName('igc-grid-toolbar-advanced-filtering')[0] as any;
    toolbarFiltering.hidden = !e.detail.checked;
  };

  const enableHiding = (e: IgrCheckboxChangeEventArgs) => {
    const toolbarHiding = document.getElementsByTagName('igc-grid-toolbar-hiding')[0] as any;
    toolbarHiding.hidden = !e.detail.checked;
  };

  const enablePinning = (e: IgrCheckboxChangeEventArgs) => {
    const toolbarPinning = document.getElementsByTagName('igc-grid-toolbar-pinning')[0] as any;
    toolbarPinning.hidden = !e.detail.checked;
  };

  const enableExport = (e: IgrCheckboxChangeEventArgs) => {
    const toolbarExporter = document.getElementsByTagName('igc-grid-toolbar-exporter')[0] as any;
    toolbarExporter.hidden = !e.detail.checked;
  };

  return (
    <div className="container sample ig-typography">
      <div className="container fill">
        <div className="control_panel">
          <IgrInput onInput={changeTitle} type="text" label="Toolbar title" value="Tree grid toolbar" />
          <IgrSwitch onChange={enableFiltering} checked>
            <span key="filtering">Advanced Filtering</span>
          </IgrSwitch>
          <IgrSwitch onChange={enableHiding} checked>
            <span key="hiding">Column hiding</span>
          </IgrSwitch>
          <IgrSwitch onChange={enablePinning} checked>
            <span key="pinning">Column pinning</span>
          </IgrSwitch>
          <IgrSwitch onChange={enableExport} checked>
            <span key="exporting">Exporting</span>
          </IgrSwitch>
        </div>

        <IgrTreeGrid
          autoGenerate={false}
          ref={treeGridRef}
          data={employeesData}
          primaryKey="ID"
          foreignKey="ParentID"
        >
          <IgrGridToolbar key="toolbar">
            <IgrGridToolbarTitle key="toolbarTitle">
              <span key="toolbarTitleText" ref={spanRef}>Tree grid toolbar</span>
            </IgrGridToolbarTitle>
            <IgrGridToolbarActions key="toolbarActions">
              <IgrGridToolbarAdvancedFiltering key="toolbarFiltering"></IgrGridToolbarAdvancedFiltering>
              <IgrGridToolbarHiding key="toolbarHiding"></IgrGridToolbarHiding>
              <IgrGridToolbarPinning key="toolbarPinning"></IgrGridToolbarPinning>
              <IgrGridToolbarExporter key="toolbarExporter"></IgrGridToolbarExporter>
            </IgrGridToolbarActions>
          </IgrGridToolbar>
          <IgrColumn
            field="Name"
            dataType="string"
            bodyTemplate={webTreeGridAvatarCellTemplate}
          ></IgrColumn>
          <IgrColumn field="Title" dataType="string"></IgrColumn>
          <IgrColumn field="ID" dataType="number"></IgrColumn>
          <IgrColumn field="Age" dataType="number"></IgrColumn>
          <IgrColumn field="HireDate" dataType="date"></IgrColumn>
        </IgrTreeGrid>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```


<!-- ComponentEnd: Grid, TreeGrid -->

### Title

Setting a title for the toolbar in your grid is achieved by using the [`IgrGridToolbarTitle`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbartitle.html).

Users can provide anything from simple text to more involved templates.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```tsx
<IgrGridToolbar>
    <IgrGridToolbarTitle>
        Grid toolbar title
    </IgrGridToolbarTitle>
</IgrGridToolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

### Actions

The [`IgrGridToolbarActions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbaractions.html) is where users can place actions/interactions in relation to the parent grid.
As with the title portion of the toolbar, users can provide anything inside that template part, including the default
toolbar interaction components.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```tsx
<IgrGridToolbar>
    <IgrGridToolbarActions>

    </IgrGridToolbarActions>
</IgrGridToolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

### Column Pinning

The [`IgrGridToolbarPinning`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbarpinning.html) component provides the default UI for interacting with column pinning in the grid.

The component is setup to work out of the box with the parent grid containing the toolbar as well as several input properties for customizing the UI, such as the component title, the placeholder for the component input and the height of the dropdown itself.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```tsx
<IgrGridToolbar>
    <IgrGridToolbarActions>
        <IgrGridToolbarPinning title="Grid pinned columns" prompt="Filter column collection" columnListHeight="400px"></IgrGridToolbarPinning>
    </IgrGridToolbarActions>
</IgrGridToolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

### Column Hiding

The [`IgrGridToolbarHiding`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbarhiding.html) provides the default UI for interacting with column hiding. Exposes the same input properties for customizing the UI, such as the component
title, the placeholder for the component input and the height of the dropdown itself.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```tsx
<IgrGridToolbar>
    <IgrGridToolbarActions>
        <IgrGridToolbarHiding title="Grid column hiding" prompt="Filter column collection" columnListHeight="400px"></IgrGridToolbarHiding>
    </IgrGridToolbarActions>
</IgrGridToolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

### Advanced Filtering

Toolbar Advanced Filtering component provides the default UI for the Advanced Filtering feature. The component exposes a way to change the default text of the button.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```tsx
<IgrGridToolbar>
    <IgrGridToolbarActions>
        <IgrGridToolbarAdvancedFiltering></IgrGridToolbarAdvancedFiltering>
    </IgrGridToolbarActions>
</IgrGridToolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

### Data Exporting

As with the rest of the toolbar actions, exporting is provided through a [`IgrGridToolbarExporter`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbarexporter.html) out of the box.

The toolbar exporter component exposes several input properties for customizing both the UI and the exporting experience.

These range from changing the display text, to enabling/disabling options in the dropdown to customizing the name of the generated file. For full reference, consult the API documentation for the `ToolbarExporter`.

Here is a snippet showing some of the options which can be customized through the React template:

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```tsx
<IgrGridToolbar>
    <IgrGridToolbarActions>
        <IgrGridToolbarExporter exportCSV={true} exportExcel={true} filename="exported_data"></IgrGridToolbarExporter>
    </IgrGridToolbarActions>
</IgrGridToolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

In addition to changing the exported filename, the user can further configure the exporter options by waiting for the `ToolbarExporting` event and customizing the options entry in the event properties.

> [!Note]
> By default when exporting to CSV the exporter exports using a comma separator and uses a '.csv' extension for the output file.
> You can customize these exporting parameters by subscribing to events of the exporter or changing the values of the exporter options fields.
> You can also cancel the export process by setting the cancel field of the event args to true.

The following code snippet demonstrates subscribing to the toolbar exporting event and configuring the exporter options:

<!-- ComponentStart: TreeGrid -->

```tsx
const configureExport = (evt: IgrGridToolbarExportEventArgs) => {
    const args = evt.detail;
    const options: IgrExporterOptionsBase = args.options;

    options.fileName = `Report_${new Date().toDateString()}`;
    (args.exporter as any).columnExporting.subscribe((columnArgs: any) => {
        columnArgs.cancel = columnArgs.header === 'Name';
    });
}

<IgrTreeGrid onToolbarExporting={configureExport}>
</IgrTreeGrid>
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrAvatarModule } from 'igniteui-react';
import { IgrTreeGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarExporter, IgrColumn } from 'igniteui-react-grids';
import { EmployeesFlatAvatarsItem, EmployeesFlatAvatars } from './EmployeesFlatAvatars';
import { IgrExporterOptionsBase, IgrGridToolbarExportEventArgs } from 'igniteui-react-grids';
import { IgrAvatar } from 'igniteui-react';
import { IgrCellTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrTreeGridModule,
    IgrAvatarModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private treeGrid: IgrTreeGrid
    private treeGridRef(r: IgrTreeGrid) {
        this.treeGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.treeGridRef = this.treeGridRef.bind(this);
        this.webTreeGridToolbarExporting = this.webTreeGridToolbarExporting.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    ref={this.treeGridRef}
                    id="treeGrid"
                    data={this.employeesFlatAvatars}
                    primaryKey="ID"
                    foreignKey="ParentID"
                    onToolbarExporting={this.webTreeGridToolbarExporting}>
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
                        dataType="string"
                        bodyTemplate={this.webTreeGridAvatarCellTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="ID"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        dataType="date">
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _employeesFlatAvatars: EmployeesFlatAvatars = null;
    public get employeesFlatAvatars(): EmployeesFlatAvatars {
        if (this._employeesFlatAvatars == null)
        {
            this._employeesFlatAvatars = new EmployeesFlatAvatars();
        }
        return this._employeesFlatAvatars;
    }


    public webTreeGridToolbarExporting(evt: IgrGridToolbarExportEventArgs): void {
        const args = evt.detail;
        const options: IgrExporterOptionsBase = args.options;
        if (options) {
            options.fileName = `Report_${new Date().toDateString()}`;
            (args.exporter as any).columnExporting.subscribe((columnArgs: any) => {
                    columnArgs.cancel = columnArgs.header === 'Name';
            });
        }
    }

    public webTreeGridAvatarCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        return (
            <div className="cell__inner">
                <IgrAvatar shape='circle' src={props.dataContext.cell.row.data.Avatar}>
                </IgrAvatar>
                <span className="name">{props.dataContext.cell.value}</span>
            </div>
        );
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
```tsx
import React, { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import { OrdersTreeData, OrdersTreeDataItem } from "./OrdersData";

import { IgrButton } from "igniteui-react";
import {
  IgrGridToolbar,
  IgrGridToolbarActions,
  IgrGridToolbarExporter,
  IgrGridToolbarTitle,
  IgrTreeGrid,
  IgrColumn
} from "igniteui-react-grids";


export default function TreeGridDataExportingIndicatorSample() {
  const ordersData = useMemo(() => new OrdersTreeData(), []);
  const [localData, setLocalData] = useState([]);
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    const data: OrdersTreeDataItem[] = [];
    for (let i = 0; i < 2000; i++) {
      for (let c = 0; c < ordersData.length; c++) {
        const original = ordersData[c];
        data.push({
          ...original,
          ID: original.ID + (i * ordersData.length),
          ParentID: original.ParentID === -1 ? -1 : original.ParentID + (i * ordersData.length)
        });
      }
    }
    setLocalData(data);
  }, [ordersData]);

  const setupProgressVisibility = () => {
    setShowProgress(true);
  
    setTimeout(() => {
      setShowProgress(false);
    }, 5000);
  };

  return (
    <div className="container sample ig-typography">
      <div className="container fill">
        <IgrTreeGrid
          data={localData}
          autoGenerate={false}
          primaryKey="ID"
          foreignKey="ParentID"
        >
          <IgrGridToolbar key="toolbar" showProgress={showProgress}>
            <IgrGridToolbarTitle key="toolbarTitle">
              <span key="toolbarTitleText">Tree Grid Toolbar</span>
            </IgrGridToolbarTitle>
            <IgrButton key="btn" onClick={setupProgressVisibility}>
              <span key="simulate">Simulate long running operation</span>
            </IgrButton>
            <IgrGridToolbarActions key="toolbarActions">
              <IgrGridToolbarExporter key="toolbarExporter"></IgrGridToolbarExporter>
            </IgrGridToolbarActions>
          </IgrGridToolbar>

          <IgrColumn field="ID" header="Order ID" />
          <IgrColumn field="Name" header="Order Product" />
          <IgrColumn field="Category" header="Category" />
          <IgrColumn field="Units" header="Units" dataType="number" />
          <IgrColumn field="UnitPrice" header="Unit Price" dataType="currency" />
          <IgrColumn field="Price" header="Price" dataType="currency" />
          <IgrColumn field="OrderDate" header="Order Date" dataType="date" />
        </IgrTreeGrid>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TreeGridDataExportingIndicatorSample />);
```


## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```tsx
<IgrTreeGrid className="grid"></IgrTreeGrid>
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrAvatarModule } from 'igniteui-react';
import { IgrTreeGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarAdvancedFiltering, IgrGridToolbarHiding, IgrGridToolbarPinning, IgrGridToolbarExporter, IgrColumn } from 'igniteui-react-grids';
import { EmployeesFlatAvatarsItem, EmployeesFlatAvatars } from './EmployeesFlatAvatars';
import { IgrAvatar } from 'igniteui-react';
import { IgrCellTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrTreeGridModule,
    IgrAvatarModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrTreeGrid
    private gridRef(r: IgrTreeGrid) {
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
                <IgrTreeGrid
                    autoGenerate={false}
                    ref={this.gridRef}
                    id="grid"
                    data={this.employeesFlatAvatars}
                    primaryKey="ID"
                    foreignKey="ParentID"
                    allowAdvancedFiltering={true}>
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
                        dataType="string"
                        bodyTemplate={this.webTreeGridAvatarCellTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="ID"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        dataType="date">
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _employeesFlatAvatars: EmployeesFlatAvatars = null;
    public get employeesFlatAvatars(): EmployeesFlatAvatars {
        if (this._employeesFlatAvatars == null)
        {
            this._employeesFlatAvatars = new EmployeesFlatAvatars();
        }
        return this._employeesFlatAvatars;
    }


    public webTreeGridAvatarCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        return (
            <div className="cell__inner">
                <IgrAvatar shape='circle' src={props.dataContext.cell.row.data.Avatar}>
                </IgrAvatar>
                <span className="name">{props.dataContext.cell.value}</span>
            </div>
        );
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## API References

The Grid Toolbar service has a few more APIs to explore, which are listed below.

- [`IgrGridToolbarAdvancedFiltering`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbaradvancedfiltering.html)
- [`IgrGridToolbar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbar.html)
- [`IgrGridToolbarExporter`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbarexporter.html)
- [`IgrGridToolbarHiding`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbarhiding.html)
- [`IgrGridToolbarPinning`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbarpinning.html)
- [`IgrGridToolbarTitle`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbartitle.html)

[`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) Events:

- `ToolbarExporting`

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
